((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A2,Ak,A8,Al,Am,W,A9,An,Ao,C={
ul(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
hcI(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KE(d){var w
if(d===0)return $.DK()
if(d===1)return $.a41()
if(d===2)return $.hK3()
if(Math.abs(d)<4294967296)return C.bco(A.o.M(d))
w=C.i4o(d)
return w},
bco(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.ul(4,w)
return new C.ok(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.ul(1,w)
return new C.ok(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aJ(d,16)
v=C.ul(2,w)
return new C.ok(v===0?!1:s,w,v)}v=A.o.ar(A.o.galO(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ar(d,65536)}v=C.ul(v,w)
return new C.ok(v===0?!1:s,w,v)},
i4o(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.W(B.dO("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DK()
w=$.hK2()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.ls(A.aI.gaU(w))
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
if(s<0)p=q.mH(0,-s)
else p=s>0?q.dX(0,s):q
return p},
hcJ(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hvE(d,e,f,g){var w,v,u,t,s,r=A.o.ar(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fQ(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hvz(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16)
if(A.o.F(f,16)===0)return C.hcJ(d,e,s,g)
w=e+s+1
C.hvE(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i4r(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fQ(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fQ(u,r)}w&2&&B.aj(g)
g[n]=o},
cP8(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i4p(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bcp(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aJ(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aJ(v,16)&1)}},
hvF(d,e,f,g,h,i){var w,v,u,t,s,r
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
i4q(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ef((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
ok:function ok(d,e,f){this.a=d
this.b=e
this.c=f},
cP9:function cP9(){},
cPa:function cPa(){},
cPb:function cPb(d,e){this.a=d
this.b=e},
cPc:function cPc(d){this.a=d},
aTG:function aTG(d,e){this.a=d
this.b=e},
hlh(d,e,f){var w=new C.SX(d,A.o.ar(Date.now(),1000),e)
w.Q=f
return w},
SX:function SX(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a4Z:function a4Z(d,e){this.a=d
this.b=e},
bKV:function bKV(d){this.a=d
this.c=this.b=0},
hNq(){return new C.bJ8()},
bJ8:function bJ8(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cH7:function cH7(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i44(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cf(d.gd3j(d)))
v=f*2+2
u=C.htk(C.htm(),64)
t=new C.cpP(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cpQ(e,1000,v)
s=new Uint8Array(v)
return A.aI.du(s,0,t.cR6(w,0,s,0))},
cH5:function cH5(d,e){this.c=d
this.d=e},
aza:function aza(d,e){this.a=d
this.b=e},
cH8:function cH8(d,e,f,g){var _=this
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
bb3:function bb3(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cH6:function cH6(){this.a=$},
hv8(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hN9(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bHJ:function bHJ(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hiT(d,e){e&=31
return(d&$.qz[e])<<e>>>0},
nR(d,e){e&=31
return(d>>>e|C.hiT(d,32-e))>>>0},
htl(d){var w,v=new C.auI()
if(B.iW(d))v.aMX(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
htm(){var w=C.htl(0),v=new Uint8Array(4),u=x.S
u=new C.cpR(w,v,A.FG,5,B.c1(5,0,!1,u),B.c1(80,0,!1,u))
u.iq(0)
return u},
htk(d,e){var w=new C.cpN(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cpM:function cpM(){},
cpQ:function cpQ(d,e,f){this.a=d
this.b=e
this.c=f},
cpK:function cpK(){},
auH:function auH(d){this.a=d},
cpP:function cpP(d){this.a=$
this.b=d
this.c=$},
cpL:function cpL(){},
cpJ:function cpJ(){},
auI:function auI(){this.b=this.a=$},
cpO:function cpO(){},
cpR:function cpR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cpN:function cpN(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cpI:function cpI(){},
cpH:function cpH(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bTa:function bTa(){},
bTb:function bTb(d){this.a=d},
i7r(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bcE:function bcE(){},
cAe:function cAe(){},
bUc:function bUc(d,e){this.a=d
this.b=!1
this.c=e},
bUd:function bUd(){},
igr(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].v(0))
return u},
axM(d){var w=0,v=B.j(x.H),u
var $async$axM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.fqf?2:4
break
case 2:w=5
return B.b(A.kE.h9("SystemChrome.setEnabledSystemUIMode",d.a7(),u),$async$axM)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.kE.h9("SystemChrome.setEnabledSystemUIOverlays",C.igr(null),u),$async$axM)
case 6:case 3:return B.h(null,v)}})
return B.i($async$axM,v)},
axP:function axP(d,e){this.a=d
this.b=e},
a9L:function a9L(d){this.a=d},
ij3(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fHL(15,d,f,e,g,h),o=i*i,n=A.j.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.j.bi(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fHL:function fHL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
apa(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$apa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.aif("ngmy_menu_lib_v1_zzslides_index",A.bN),$async$apa)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cF(t,new C.c4a(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a3(t).k("M.E"))}else r=B.a([],x.d)
A.d.aZ(r,new C.c4b())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apa,v)},
apc(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$apc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.apa(),$async$apc)
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
l=new B.V(Date.now(),0,!1).aa().af()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.n0("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.J(["deck",m.aj(),"savedAt",l],t,q),null),$async$apc)
case 7:if(!f){w=5
break}s.n(0,p,B.J(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.I)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b8<2>")
s=B.C(new B.b8(s,r),r.k("M.E"))
w=10
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.J(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().af()],t,q),null),$async$apc)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apc,v)},
c4c(d){return C.hTe(d)},
hTe(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c4c=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.aif("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.id),$async$c4c)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Xe(B.a1(q,x.N,x.z))
u=o
w=1
break
t=2
w=6
break
case 4:t=3
m=s.pop()
p=B.ac(m)
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
return B.i($async$c4c,v)},
apb(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$apb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.apa(),$async$apb)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nT(r,new C.c4d(d))
w=4
return B.b(B.n0("ngmy_menu_lib_v1_zzslides_index",B.J(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().af()],x.N,x.z),null),$async$apb)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(U.aRJ("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$apb)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apb,v)},
c4a:function c4a(){},
c4b:function c4b(){},
c4d:function c4d(d){this.a=d},
it7(d,e,f){return B.bU(A.L,null,new C.fYS(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fYS:function fYS(d,e,f){this.a=d
this.b=e
this.c=f},
a2e:function a2e(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aLi:function aLi(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fj8:function fj8(d,e){this.a=d
this.b=e},
fjc:function fjc(d){this.a=d},
fjd:function fjd(d){this.a=d},
fje:function fje(d,e,f){this.a=d
this.b=e
this.c=f},
fj9:function fj9(d){this.a=d},
fja:function fja(d){this.a=d},
fjb:function fjb(d,e){this.a=d
this.b=e},
fj3:function fj3(d){this.a=d},
fj1:function fj1(d){this.a=d},
fj2:function fj2(d){this.a=d},
fj4:function fj4(d){this.a=d},
fj5:function fj5(d){this.a=d},
fji:function fji(d,e){this.a=d
this.b=e},
fjh:function fjh(d,e){this.a=d
this.b=e},
fj7:function fj7(d,e,f){this.a=d
this.b=e
this.c=f},
fj6:function fj6(d,e,f){this.a=d
this.b=e
this.c=f},
fjf:function fjf(d,e){this.a=d
this.b=e},
fjg:function fjg(d,e){this.a=d
this.b=e},
fjl:function fjl(d){this.a=d},
fjm:function fjm(d,e){this.a=d
this.b=e},
fjk:function fjk(d,e){this.a=d
this.b=e},
fjj:function fjj(){},
hy8(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.V.aP(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cF(v,new C.fqE(),v.$ti.k("M.E"),x.ea)
u=B.a3(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.fqF(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a3e(d){return C.ikp(d)},
ikp(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a3e=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fKY(n)
t=4
j=m
i=C
w=7
return B.b(B.a3P("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a3e)
case 7:j.$1(i.hy8(f))
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
return B.b(B.aA(),$async$a3e)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hy8(B.aV(J.t(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fqN(d),$async$a3e)
case 13:p=j.C(new i.Y(h,new g.fKW(f),o),o.k("M.E"))
A.d.aZ(p,new C.fKX())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a3e,v)},
aiQ(d,e){return C.isM(d,e)},
isM(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aiQ=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b7(e,new C.fYk(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.V.av(n,null)
q=!1
t=4
w=7
return B.b(B.aiI("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiQ)
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
return B.b(B.aA(),$async$aiQ)
case 12:p=g
w=13
return B.b(p.aC("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aiQ)
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
return B.i($async$aiQ,v)},
fqN(d){return C.i8P(d)},
i8P(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fqN=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fqN)
case 7:r=f
q=r.tV("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jC(q,B.U(q).c)
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
return B.i($async$fqN,v)},
ahK(d,e){return C.iiW(d,e)},
iiW(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahK=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$ahK)
case 6:s=g
r=B.aR(x.N)
q=s.tV("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.fZ(r,q)
J.c6(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("ci.E"))
w=7
return B.b(s.aC("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahK)
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
return B.b(C.a3e(d),$async$ahK)
case 8:n=g
J.nT(n,new C.fHp(e))
w=9
return B.b(C.aiQ(d,n),$async$ahK)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahK,v)},
itc(d,e){return B.a5(d,!1).ce(B.ed(new C.fZd(e),!0,null,x.H))},
i4t(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cC(w.d,new C.cQw())},
oP:function oP(d,e,f){this.a=d
this.b=e
this.c=f},
fqE:function fqE(){},
fqF:function fqF(){},
fKY:function fKY(d){this.a=d},
fKW:function fKW(d){this.a=d},
fKX:function fKX(){},
fYk:function fYk(){},
fHp:function fHp(d){this.a=d},
fZd:function fZd(d){this.a=d},
ZX:function ZX(d,e){this.c=d
this.a=e},
azK:function azK(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cQw:function cQw(){},
cQy:function cQy(d,e){this.a=d
this.b=e},
cQB:function cQB(d){this.a=d},
cQC:function cQC(d){this.a=d},
cQA:function cQA(){},
cQD:function cQD(d,e){this.a=d
this.b=e},
cQz:function cQz(d){this.a=d},
cQE:function cQE(){},
cQx:function cQx(d,e){this.a=d
this.b=e},
cQF:function cQF(){},
cQs:function cQs(d){this.a=d},
cQq:function cQq(d){this.a=d},
cQr:function cQr(d){this.a=d},
cQt:function cQt(d,e){this.a=d
this.b=e},
cQp:function cQp(d){this.a=d},
cQo:function cQo(d){this.a=d},
cQm:function cQm(d,e){this.a=d
this.b=e},
cQn:function cQn(d){this.a=d},
cQv:function cQv(){},
cQu:function cQu(d){this.a=d},
cQl:function cQl(d,e){this.a=d
this.b=e},
cQk:function cQk(d,e){this.a=d
this.b=e},
cQj:function cQj(d,e){this.a=d
this.b=e},
cQG:function cQG(d){this.a=d},
ZV:function ZV(d,e,f){this.c=d
this.d=e
this.a=f},
aH5:function aH5(d,e,f){this.a=d
this.b=e
this.c=f},
azG:function azG(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cPN:function cPN(d){this.a=d},
cPM:function cPM(d){this.a=d},
cPP:function cPP(d,e,f){this.a=d
this.b=e
this.c=f},
cPX:function cPX(){},
cPY:function cPY(d){this.a=d},
cPQ:function cPQ(d,e,f){this.a=d
this.b=e
this.c=f},
cPO:function cPO(d,e){this.a=d
this.b=e},
cPS:function cPS(d,e){this.a=d
this.b=e},
cPT:function cPT(d,e){this.a=d
this.b=e},
cPU:function cPU(d,e){this.a=d
this.b=e},
cPR:function cPR(d){this.a=d},
cPW:function cPW(d){this.a=d},
cPV:function cPV(d,e){this.a=d
this.b=e},
cQ2:function cQ2(d){this.a=d},
cPZ:function cPZ(d,e){this.a=d
this.b=e},
cQ_:function cQ_(d,e){this.a=d
this.b=e},
cQ0:function cQ0(d,e){this.a=d
this.b=e},
cQ1:function cQ1(d,e){this.a=d
this.b=e},
azI:function azI(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
imK(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eg(v,x.cK).bG(new C.fPx(),x.H).eH(new C.fPy())}}else if(s)C.hzK()}catch(t){}},
hzK(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eg(v,x.cK).eH(new C.fv4())}catch(u){}},
imN(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fPx:function fPx(){},
fPy:function fPy(){},
fv4:function fv4(){},
hEL(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.e3(v,w,"").split(":"))},
hEI(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.lu)return null
return A.a.b2(w,14)},
hhv(d){var w
if(d.b!==D.lu)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
inc(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hEM(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
in7(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kZ(0,f)
t=x.N
u=B.cF(u,new C.fQw(),B.a3(u).k("M.E"),t)
s=B.C(u,B.a3(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kZ(0,f),u=new B.Gn(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.SE(A.a.az(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.SE(A.a.b2(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cD(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
in5(d,e){var w,v,u,t,s,r=B.a3(e).k("cx<1>"),q=B.C(new B.cx(e,r),r.k("M.E"))
A.d.aZ(q,new C.fQv())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.I)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aSJ(w,u,s,0)}return w},
in9(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a7D:$.hMe(),s=x.N,r=B.T(s,s)
for(s=t.gdP(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.n(0,w.b,u)}return r},
hEJ(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
frG(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
if(C.hEL(q)===e)return q}return null},
ina(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.b2(v,u)
return A.d.gH(D.Ij).a},
inb(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afy(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afy(0,0,0)
v=C.frG(b6,b0)
u=C.frG(b5,b0)
t=0
if(v!=null&&u!=null){s=C.in9(b2,C.in7(C.hEJ(b2),v.r))
if(s.a!==0){u.r=C.in5(C.hEJ(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.I)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.I)(o),++m){l=C.hEL(o[m])
if(l==null||l==="utangulizi")continue
r.I(0,l)}for(q=B.dZ(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.frG(b6,n)
i=C.frG(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a_(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gH(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.I)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.I)(o),++m){d=o[m]
a0=C.hhv(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.I)(a1),++a7){a8=a1[a7]
if(C.hEI(a8)===a0||C.hhv(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.RZ(a1,new C.fQC(a0),!0)
a1=f.z
a6=Date.now()
a9=$.je
$.je=a9+1
A.d.I(a1,new C.eS(""+1000*a6+"_"+a9,D.lu,a2,a3,a4,a5,"",24,A.a8,A.bq,A.aH,4279310375,A.bn,d.at,D.bl,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cv,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afy(k,t,e)},
in6(d){var w=C.ina(d)
if(d.w==="hati_kuhowa")return C.hE5("",w)
return C.hE4("",w)},
fQw:function fQw(){},
fQv:function fQv(){},
fQC:function fQC(d){this.a=d},
hzr(){var w=new B.V(Date.now(),0,!1),v=new C.fu6()
return B.w(v.$1(B.bX(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hhE(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fRv(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lu&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hF0(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fRv(d)
w=B.bh(u)
if(w==null)return!C.fRv(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bS(18e9))},
inU(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().af()},
hXh(d){return A.a.i(d).toLowerCase()},
b1M(d){return C.hXi(d)},
hXi(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$b1M=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$b1M)
case 7:r=f
p=r.tV("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.irz(),B.U(o).k("N<1,n>")).bY(0,new C.cg2())
o=B.d0(o,o.$ti.k("M.E"))
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
return B.i($async$b1M,v)},
a8w(d,e){return C.hXj(d,e)},
hXj(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$a8w=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.b1M(d),$async$a8w)
case 3:r=g
if(!J.hd(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$a8w)
case 8:q=g
w=9
return B.b(q.aC("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q0(r)),$async$a8w)
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
return B.i($async$a8w,v)},
a8x(){var w=0,v=B.j(x.y),u,t
var $async$a8x=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a8x)
case 3:t=e
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8x,v)},
hXk(d){var w=$.Ci.h(0,d)
w=w==null?null:J.t(w,"at")
return B.bh(w==null?"":w)},
hXl(d,e){var w,v,u,t=$.Ci.h(0,d)
if(t==null)return!1
w=J.a7(t)
v=w.h(t,"id")
if((v==null?"":v).length!==0)return w.h(t,"id")===e.a
u=C.hXk(d)
return u!=null&&!e.f.ca(u)},
hrg(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=J.i5(d),w=w.gae(w),v=x.f,u=x.N,t=x.z;w.C();){s=w.gR(w)
r=s.b
if(!v.b(r))continue
q=B.a1(r,u,t)
r=q.h(0,"at")
p=B.bh(J.k(r==null?"":r))
if(p==null)continue
o=J.k(s.a)
s=$.Ci.h(0,o)
s=s==null?null:J.t(s,"at")
n=B.bh(s==null?"":s)
s=!0
if(n!=null){r=p.a
if(r<=n.gbt())s=r===n.gbt()&&p.b>n.gcF()}if(s){s=$.Ci
r=p.aa().af()
m=q.h(0,"id")
s.n(0,o,B.J(["at",r,"id",J.k(m==null?"":m)],u,u))}}},
ha3(){var w=$.Ch
return w.bq(w,new C.cg3())},
WB(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$WB=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.uC("civic_hati_kiapo_uongozi",null,A.ej),$async$WB)
case 3:a2=a5
if(a2==null){w=1
break}o=J.a7(a2)
n=x.f
m=x.N
l=x.z
k=n.b(o.h(a2,"deletedByState"))?B.a1(n.a(o.h(a2,"deletedByState")),m,l):B.T(m,l)
j=$.Ci
i=new B.cb(j,B.a3(j).k("cb<1,2>")).aV(0,new C.cg5(k))
if(n.b(o.h(a2,"deletedByState")))C.hrg(n.a(o.h(a2,"deletedByState")))
if(n.b(o.h(a2,"byState")))for(o=J.i5(n.a(o.h(a2,"byState"))),o=o.gae(o);o.C();){j=o.gR(o)
h=j.b
if(!n.b(h))continue
g=C.Xe(B.a1(h,m,l))
h=$.Ch
j=j.a
f=J.kQ(j)
e=h.h(0,f.v(j))
if(e!=null){h=g.f
d=e.f
a0=h.a
if(a0>=d.gbt())h=a0===d.gbt()&&h.b<d.gcF()
else h=!0
h=!h}else h=!0
if(h)$.Ch.n(0,f.v(j),g)}C.ha3()
$.hrf=new B.V(Date.now(),0,!1)
w=4
return B.b(C.WC(),$async$WB)
case 4:w=i?5:6
break
case 5:t=8
r=B.T(m,x.P)
for(o=$.Ch,o=new B.cb(o,B.a3(o).k("cb<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=11
return B.b(B.n0("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Ci,"updatedAt",new B.V(Date.now(),0,!1).aa().af()],m,l),null),$async$WB)
case 11:t=2
w=10
break
case 8:t=7
a3=s.pop()
p=B.ac(a3)
$.am.$1("[kiapo] push delete: "+B.w(p))
w=10
break
case 7:w=2
break
case 10:case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$WB,v)},
Ov(a2){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ov=B.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:if($.cg4&&!a2){w=1
break}t=4
w=7
return B.b(B.aA(),$async$Ov)
case 7:r=a4
q=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.V.aP(0,q,null)
i=x.f
if(i.b(p)){h=x.N
o=B.T(h,x.I)
for(g=J.i5(p),g=g.gae(g),f=x.z;g.C();){n=g.gR(g)
if(i.b(n.b))J.aK(o,J.k(n.a),C.Xe(B.a1(i.a(n.b),h,f)))}$.Ch=o}}m=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1_deleted"))
if(m!=null&&A.a.i(m).length!==0){l=A.V.aP(0,m,null)
if(x.f.b(l))C.hrg(l)}C.ha3()
t=2
w=6
break
case 4:t=3
d=s.pop()
k=B.ac(d)
$.am.$1("[kiapo] local load: "+B.w(k))
w=6
break
case 3:w=2
break
case 6:a1=a2
if(a1)a4=a1
else{w=8
break}w=9
break
case 8:w=10
return B.b(B.c8(),$async$Ov)
case 10:case 9:o=a4
w=o?11:12
break
case 11:t=14
w=17
return B.b(C.WB(),$async$Ov)
case 17:t=2
w=16
break
case 14:t=13
a0=s.pop()
j=B.ac(a0)
$.am.$1("[kiapo] cloud load: "+B.w(j))
w=16
break
case 13:w=2
break
case 16:case 12:$.cg4=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ov,v)},
WC(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$WC=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$WC)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.Ch,o=new B.cb(o,B.a3(o).k("cb<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1",A.V.av(r,null)),$async$WC)
case 7:w=8
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1_deleted",A.V.av($.Ci,null)),$async$WC)
case 8:u=1
w=5
break
case 3:u=2
l=t.pop()
p=B.ac(l)
$.am.$1("[kiapo] local save: "+B.w(p))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$WC,v)},
a8z(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$a8z=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(C.Ov(!1),$async$a8z)
case 3:r=$.hrf
w=r==null||new B.V(Date.now(),0,!1).bC(r).a>6e7?4:5
break
case 4:t=7
w=12
return B.b(C.a8x(),$async$a8z)
case 12:w=f?10:11
break
case 10:w=13
return B.b(C.WB(),$async$a8z)
case 13:case 11:t=2
w=9
break
case 7:t=6
m=s.pop()
w=9
break
case 6:w=2
break
case 9:case 5:p=A.a.i(d).toLowerCase()
if(p.length===0){u=null
w=1
break}o=$.Ch.h(0,p)
n=o==null?null:o.hQ()
if(n==null){u=null
w=1
break}u=C.bFd(n)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8z,v)},
cg6(d){var w=0,v=B.j(x.y),u,t
var $async$cg6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.Ov(!1),$async$cg6)
case 3:t=A.a.i(d).toLowerCase()
u=$.Ci.am(0,t)&&$.Ch.h(0,t)==null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cg6,v)},
a8y(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$a8y=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=A.a.i(d).toLowerCase()
if(i.length===0){u=!1
w=1
break}w=3
return B.b(C.Ov(!1),$async$a8y)
case 3:o=$.Ch.W(0,i)
n=$.Ci
m=new B.V(Date.now(),0,!1).aa().af()
l=o==null?null:o.a
if(l==null)l=""
k=x.N
n.n(0,i,B.J(["at",m,"id",l],k,k))
$.cg4=!0
w=4
return B.b(C.WC(),$async$a8y)
case 4:w=5
return B.b(C.a8x(),$async$a8y)
case 5:if(!f){u=!1
w=1
break}t=7
r=B.T(k,x.P)
for(n=$.Ch,n=new B.cb(n,B.a3(n).k("cb<1,2>")).gae(0);n.C();){m=n.d
m.toString
q=m
J.aK(r,q.a,q.b.aj())}w=10
return B.b(B.n0("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Ci,"updatedAt",new B.V(Date.now(),0,!1).aa().af()],k,x.z),null),$async$a8y)
case 10:r=f
u=r
w=1
break
t=2
w=9
break
case 7:t=6
h=s.pop()
p=B.ac(h)
$.am.$1("[kiapo] cloud delete: "+B.w(p))
u=!1
w=1
break
w=9
break
case 6:w=2
break
case 9:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8y,v)},
Ow(a3){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Ow=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:d=a3.x
a0=A.a.i(A.a.i(d==null?"":d)).toLowerCase()
if(a0.length===0){u=!1
w=1
break}t=4
w=9
return B.b(C.a8x(),$async$Ow)
case 9:w=a5?7:8
break
case 7:w=10
return B.b(C.WB(),$async$Ow)
case 10:case 8:t=2
w=6
break
case 4:t=3
a1=s.pop()
w=6
break
case 3:w=2
break
case 6:n=$.Ci.h(0,a0)
if(n!=null){d=J.a7(n)
m=d.h(n,"id")
d=(m==null?"":m).length!==0&&d.h(n,"id")===a3.a}else d=!1
if(d){$.am.$1("[kiapo] not saved: this paper was deleted by the admin")
u=!1
w=1
break}a3.w="hati_kiapo_uongozi"
a3.f=new B.V(Date.now(),0,!1)
l=a3.hQ()
for(d=l.r,m=d.length,k=0;k<d.length;d.length===m||(0,B.I)(d),++k)for(j=d[k].z,i=j.length,h=0;h<i;++h){g=j[h]
f=g.at
e=A.a.i(f==null?"":f)
f=g.db
if((f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))&&A.a.a_(e,"data:"))g.at=null}$.Ch.n(0,a0,l)
C.ha3()
$.cg4=!0
w=11
return B.b(C.WC(),$async$Ow)
case 11:w=12
return B.b(C.a8x(),$async$Ow)
case 12:if(!a5){u=!1
w=1
break}t=14
d=x.N
r=B.T(d,x.P)
for(m=$.Ch,m=new B.cb(m,B.a3(m).k("cb<1,2>")).gae(0);m.C();){j=m.d
j.toString
q=j
J.aK(r,q.a,q.b.aj())}w=17
return B.b(B.n0("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Ci,"updatedAt",new B.V(Date.now(),0,!1).aa().af()],d,x.z),null),$async$Ow)
case 17:r=a5
u=r
w=1
break
t=2
w=16
break
case 14:t=13
a2=s.pop()
p=B.ac(a2)
$.am.$1("[kiapo] cloud save: "+B.w(p))
u=!1
w=1
break
w=16
break
case 13:w=2
break
case 16:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ow,v)},
arC(d){var w=0,v=B.j(x.T),u,t,s
var $async$arC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i0().a70(A.eQ),$async$arC)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fq(),$async$arC)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b1N(t,d),$async$arC)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arC,v)},
b1N(d,e){return C.hXm(d,e)},
hXm(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b1N=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b1N)
case 7:if(!g){u=null
w=1
break}n=A.a.i(e)
m=B.ag("[^a-z0-9]+",!0,!1,!1,!1)
r=B.aL(n.toLowerCase(),m,"_")
q="civic_kiapo/"+B.w(r)+"/"+1000*Date.now()+".mp4"
n=$.f1().b
n===$&&B.c()
n=n.at
n===$&&B.c()
p=n.iA("media")
w=8
return B.b(p.xM(q,new Uint8Array(B.cf(d)),D.bMC),$async$b1N)
case 8:n=p.Dg(q)
u=n
w=1
break
t=2
w=6
break
case 4:t=3
k=s.pop()
o=B.ac(k)
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
return B.i($async$b1N,v)},
Lt(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.ev(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bl,4280172719,2,d,0,0,"",D.cv,D.d1,l,m,n)},
fty(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.ev(A.bn,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cv,D.fi,j,k,l)},
hek(d,e,f,g,h,i,j,k){var w=C.cE(),v=A.j.D(i*0.0017,0.02,0.06)
return C.ev(h,!1,j,A.aH,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.cI,A.O,"",v,w,null,"","",0,!1,"",0,D.bl,4280172719,2,k,0,0,"",D.cv,D.d1,g,e,f)},
ft6(d,e,f,g){return C.fty(0,0.002,D.fP,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hel(d,e,f,g,h,i,j,k){var w=C.cE()
return C.ev(A.rg,!1,j,A.aH,"marriage_field_"+d+":"+A.j.ad(g,3),4280640491,i,A.bq,A.a8,"",h,w,null,"","",0,!1,"",0,D.bl,4280172719,2,k,0,0,"",D.cv,D.d1,g,e,f)},
hzq(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.e3(v,w,"").split(":"))},
bFd(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.I)(t),++n){m=t[n]
l=C.hzq(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.lu&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hQ()}h=C.hh9(u)
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
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.I)(w),++n){m=w[n]
l=C.hzq(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.lu&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bq(a1.z,new C.fPv(a2))}else A.d.bq(a1.z,new C.fPw())
A.d.I(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fRv(a0))a0.ax=a6.f.aa().af()
return a0},
hh9(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fSi(D.a8F),l=C.cE(),k=x.u,j=B.a([C.ev(A.bn,!1,s,A.aH,"marriage_locked_bg",r,24,A.bq,A.a8,"",1,C.cE(),m,"","",0,!1,"",0,D.bl,q,2,"",0,0,"",D.cv,D.lV,1,0,0)],k),i=B.a([],k)
i.push(C.Lt("NGMY",A.K,236069181,52,A.bq,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lt("TAREHE:",A.bn,o,16,A.bq,A.H,A.j.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hek("tarehe",0.8059999999999999,0.026,0.18,A.bn,16,p,C.hzr()))
i.push(C.ft6(0.8099999999999999,0.026+A.j.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lt("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bq,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lt("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cI,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fty(0,0.002,D.fP,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hel("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hel("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hel("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fty(268435456,0.175,D.bl,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lt("VIDEO YA KIAPO",A.bn,o,10,A.bq,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ev(A.bn,!1,s,A.aH,"__kiapo_video__",r,24,A.bq,A.a8,"",0.131,C.cE(),t,"","",0,!1,"",0,D.bl,q,2,"",0,0,"",D.cv,D.lV,0.77,0.115,0.492))
i.push(C.Lt("Rais Anayeapa:",A.bn,p,15,A.bq,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lt("Jina:",A.bn,p,13,A.bq,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hek("rais_jina",0.195,0.6930000000000001,0.62,A.bn,13,p,""))
i.push(C.ft6(0.195,0.7130000000000001,0.62,n))
i.push(C.Lt("Sahihi:",A.bn,p,13,A.bq,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ev(A.bn,!1,s,A.aH,"marriage_sign_rais",0,24,A.bq,A.a8,"",0.07,C.cE(),t,"","",0,!1,"",0,D.bl,0,2,"",0,0,"",D.cv,D.fi,0.38,0.21500000000000002,0.73))
i.push(C.ft6(0.21500000000000002,0.795,0.38,n))
i.push(C.Lt("Tarehe:",A.bn,p,13,A.bq,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hek("rais_tarehe",0.745,0.74,0.2,A.bn,12,p,C.hzr()))
i.push(C.ft6(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.u(i,B.a([C.fty(0,0.032,D.bl,o,1,"state_box",0.72,0.14,0.875),C.Lt("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bq,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.u(j,i)
v=C.t_(4294967035,t,0,0,j,l,D.r4,"","",u,D.dr)
return C.Cm(t,t,t,t,D.oY,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cE(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
a3d(d,e,f,g,h,i,j){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$a3d=B.e(function(k,l){if(k===1)return B.f(l,v)
for(;;)switch(w){case 0:p=A.a.i(j)
if(p.length===0){if(f.e!=null)f.L(x.q).f.T(D.fkV)
w=1
break}w=3
return B.b(C.Ov(!0),$async$a3d)
case 3:w=4
return B.b(C.a8z(p),$async$a3d)
case 4:t=l
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hF0(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bU(D.bnF,null,new C.fKk(p),f,!0,!0,!1,A.lW,!1,!1,x.N),$async$a3d)
case 9:r=l
if(r==="continue"){i.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fKl(),f,null,!0,!0,x.y),$async$a3d)
case 10:if(l!==!0||f.e==null){w=1
break}h.$1(C.hh9(p))
w=1
break
case 8:i.$1(t)
w=1
break
case 6:o=!g
if(o){w=11
break}else l=o
w=12
break
case 11:w=13
return B.b(C.cg6(p),$async$a3d)
case 13:case 12:if(l){if(f.e!=null)f.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Hati ya Kiapo cha Uongozi ya "+p+" imefutwa na Admin. Admin pekee anaweza kuunda mpya.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}if(!s){if(f.e!=null){q=f.L(x.q).f
q.T(B.b2(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}h.$1(C.hh9(p))
case 1:return B.h(u,v)}})
return B.i($async$a3d,v)},
fu6:function fu6(){},
cg2:function cg2(){},
cg3:function cg3(){},
cg5:function cg5(d){this.a=d},
fPv:function fPv(d){this.a=d},
fPw:function fPw(){},
fKk:function fKk(d){this.a=d},
fKi:function fKi(d){this.a=d},
fKj:function fKj(d){this.a=d},
fKl:function fKl(){},
fKg:function fKg(d){this.a=d},
fKh:function fKh(d){this.a=d},
as8:function as8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aFT:function aFT(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
emr:function emr(d){this.a=d},
emp:function emp(d){this.a=d},
emq:function emq(d){this.a=d},
ems:function ems(d){this.a=d},
emt:function emt(d){this.a=d},
x8(d,e,f,g,h,i,j,k,l,m,n){var w=C.cE()
return C.ev(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bq,h,"",i,w,null,"","",0,!1,"",j,D.bl,4280172719,2,d,0,0,"",D.cv,D.d1,l,m,n)},
hz1(d,e,f){var w=4291404327
return B.a([C.qy(0,f,D.f1,w,2,"ring_l",f,d-f*0.42,e),C.qy(0,f,D.f1,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fso(d,e,f,g,h){var w,v,u="ps_"+g,t=C.qy(4294967288,f,D.f1,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.qy(h,s,D.f1,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.qy(h,f*0.46,D.f1,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
qy(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.ev(A.bn,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cv,D.fi,j,k,l)},
fsn(d,e,f,g,h,i,j,k,l){var w=C.cE(),v=A.j.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ev(h,!1,k,A.aH,i?u+A.j.ad(g,3)+":"+A.o.ad(j,1):u+A.j.ad(g,3),4280640491,j,A.cI,A.O,"",v,w,null,"","",0,!1,"",0,D.bl,4280172719,2,l,0,0,"",D.cv,D.d1,g,e,f)},
bCz(d,e,f,g){return C.qy(0,0.002,D.fP,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hz0(d,e,f,g,h){var w=A.j.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.qy(0,0.036,D.bl,h,1.4,"banner_box_"+d,w,v,e),C.x8(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hEK(){var w=new B.V(Date.now(),0,!1),v=new C.fQB()
return B.w(v.$1(B.bX(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hz2(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.x8(r+".",A.bn,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fsn("witness_"+d+"_"+r+"_name",q,g,p,A.bn,!0,16,j,"[Jina la Shahidi]"),C.bCz(q,g+A.j.D(0.0272,0.02,0.06),p,w),C.x8("Sahihi:",A.bn,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ev(A.bn,!1,4279310375,A.aH,"marriage_sign_"+d+"_witness_"+r,0,24,A.bq,A.a8,"",0.05,C.cE(),null,"","",0,!1,"",0,D.bl,0,2,"",0,0,"",D.cv,D.fi,s,t,g-0.004),C.bCz(t,g+0.044,s,w)],x.u)},
aih(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dvh,D.cwN,D.dn0,D.dp1],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.I)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
hdy(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fSi(d.d),v=B.a([C.ev(A.bn,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bq,A.a8,"",1,C.cE(),w,"","",0,!1,"",0,D.bl,4280172719,2,"",0,0,"",D.cv,D.lV,1,0,0)],x.u)
A.d.u(v,C.ibh(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
ibh(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.x8("NGMY",A.K,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.u(c2,C.hz1(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.u(c2,C.hz1(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.u(c2,C.fso(0.16,0.018,0.052,!1,b9))
A.d.u(c2,C.fso(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.x8("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.u(c2,B.a([C.qy(0,0.062,D.f1,b1,1.6,"crest_o",0.11,0.445,0.012),C.qy(0,0.046,D.f1,b1,1,"crest_i",0.084,0.458,0.02),C.x8("MUHURI",A.K,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.u(c2,B.a([C.qy(0,0.002,D.fP,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.qy(b9,0.016,D.lv,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.qy(0,0.002,D.fP,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.u(c2,B.a([C.x8("TAREHE:",A.bn,c0,20,A.H,A.j.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fsn("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bn,!1,21,b9,C.hEK()),C.bCz(0.814,0.026+A.j.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.x8(d2,A.K,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.qy(c0,0.0026,D.bl,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.qy(c3.e,0.138,D.bl,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cE()
c2.push(C.ev(A.bn,!1,b9,A.aH,"marriage_field_utangulizi:"+A.j.ad(0.82,3),b2,19,A.bq,A.cD,"",0.128,s,a9,"","",0,!1,"",0,D.bl,b3,2,c5,0,0,"",D.cv,D.d1,0.82,0.09,t))
t+=c4
if(c8){r=A.j.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.qy(0,0.036,D.bl,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cE()
A.d.u(c2,B.a([s,C.ev(A.K,!1,c0,A.aH,"marriage_field_nimetowe_label:"+A.j.ad(r,3),b2,30,A.bq,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bl,b3,2,c7,0,0,"",D.cv,D.d1,r,q,t+0.00612)],c1))}else A.d.u(c2,C.hz0(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.x8(c9,A.bn,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.j.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.j.D(0.037399999999999996,0.02,0.06):A.j.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fsn("mahari_"+p,0.132,k,m,A.bn,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.je
$.je=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.je
$.je=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eS(""+1000*i+"_"+h,D.d1,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bq,A.aH,c0,A.bn,a9,D.bl,b2,b3,2,0,!1,s,0,D.cv,0,"","","","","",!1,0),j,new C.eS(""+1000*f+"_"+e,D.fi,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a8,A.bq,A.aH,b6,A.bn,a9,D.fP,0,b5,0.8,0,!1,g,0,D.cv,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.je
$.je=p+1
i=Date.now()
h=$.je
$.je=h+1
g=Date.now()
f=$.je
$.je=f+1
e=Date.now()
a3=$.je
$.je=a3+1
A.d.u(d,B.a([new C.eS(""+1000*s+"_"+p,D.d1,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bq,A.aH,b7,A.e3,a9,D.bl,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cv,0,"","","","","",!1,0),new C.eS(""+1000*i+"_"+h,D.fi,a1,a2,0.046,0.025875,"",24,A.a8,A.bq,A.aH,b6,A.bn,a9,D.bl,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cv,0,"","","","","",!1,0),new C.eS(""+1000*g+"_"+f,D.d1,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bq,A.aH,b7,A.K,a9,D.bl,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cv,0,"","","","","",!1,0),new C.eS(""+1000*e+"_"+a3,D.fi,a0,k,a1+0.046-a0,l,"",24,A.a8,A.bq,A.aH,b6,A.bn,a9,D.bl,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cv,0,"","","","","",!1,0)],c1))}A.d.u(c2,d)
t+=0.04}t+=0.006
A.d.u(c2,C.hz0("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a8w||w===D.a8y||w===D.a8v||w===D.a8x){w=t-0.008
A.d.u(c2,C.fso(0.21,w,0.044,!0,b0))
A.d.u(c2,C.fso(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.u(c2,B.a([C.qy(0,a4,D.bl,c0,1.3,"wit_table_border",0.82,0.09,t),C.qy(c0,a4,D.bl,c0,0,"wit_table_divider",0.0024,0.4988,t),C.qy(0,0.0022,D.fP,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.x8("UPANDE WA MKE",A.K,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.x8("UPANDE WA MUME",A.K,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.u(c2,C.hz2("mke",a6,0.106,a5,0.378,c0,b9))
A.d.u(c2,C.hz2("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.u(c2,B.a([C.qy(0,0.11,D.bl,c0,1.2,"mw_box",0.82,0.09,t),C.x8("MWANDISHI",A.bn,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.x8("Jina:",A.bn,b9,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fsn("mwandishi_jina",0.215,w,0.3116,A.bn,!0,15,b9,""),C.bCz(0.215,p,0.3116,b5),C.x8("Sahihi:",A.bn,b9,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.ev(A.bn,!1,b6,A.aH,"marriage_sign_mwandishi",0,24,A.bq,A.a8,"",0.044,C.cE(),a9,"","",0,!1,"",0,D.bl,0,2,"",0,0,"",D.cv,D.fi,0.3161999999999999,0.5738,s-0.044),C.bCz(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.u(c2,B.a([C.qy(0,0.032,D.bl,c0,1,"state_box",0.7,0.15,a8),C.x8("EMO 'YA M'MBONDO "+a7,A.K,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
in8(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.hhO(d.d),p=new C.fQx(s),o=new C.fQy(s),n=d.z,m=n===D.a8w||n===D.a8y||n===D.a8v||n===D.a8x,l=n===D.aL1||n===D.a8z||n===D.aL2,k=B.bR(0,B.fU(q,A.A,t,t,A.cl,A.c0,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a8z?26:16
i.push(new C.fQA().$1$size(w))}if(n===D.aL3)i.push(D.h2s)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.l,t,A.iY,A.h,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.m(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
i.push(A.am)
n=B.K(r,A.r,1.1)
w=B.l(4)
i.push(B.p(t,B.x(B.a([p.$0(),D.aUE,p.$1$w(0.9),D.aUE,p.$1$w(0.75)],j),A.l,t,A.e,A.h,0,A.p),A.f,t,t,new B.o(D.bi8,t,n,w,t,t,A.n),t,t,t,t,A.anR,t,t,t))
i.push(A.am)
i.push(new C.fQz(r).$1("NIMETOWE"))
i.push(A.fC)
v=J.e4(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.Ob,new B.c7(A.aL,A.e,A.h,A.l,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a7),t,7,t,t,t,t,t,7),A.de,new B.by(1,A.ba,p.$1$h(4),t)],j),t),t)
A.d.u(i,v)
i.push(A.b1)
i.push(B.d(d.b,t,t,t,t,t,t,B.m(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.K,t,t))
return new B.an(A.a0,t,A.b2,A.t,B.a([k,new B.D(D.bDD,B.x(i,A.al,t,A.e,A.h,0,A.p),t)],j),t)},
hE4(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.aih(e,t)
if(r==null)r=A.d.gH(D.Ij)
w=C.cE()
v=C.t_(r.e,t,0,0,C.hdy(r,0.165,y.O,D.dpE,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.r4,"","",s,D.dr)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cm(t,t,t,t,D.oY,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hE5(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.aih(e,t)
if(r==null)r=A.d.gH(D.Ij)
w=C.cE()
v=C.t_(r.e,t,0,0,C.hdy(r,0.165,y.f,D.dkW,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.r4,"","",s,D.dr)
w=C.cE()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cm(t,t,t,t,D.oY,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bGA(d,e,f){var w=0,v=B.j(x.T),u
var $async$bGA=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h1N(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGA,v)},
ahS(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahS=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fKo(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Nm,null,new C.fKp(p),d,!0,!0,!1,A.lW,!1,!1,x.N),$async$ahS)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGA(d,"Hati ya Kuhowa",D.Ij),$async$ahS)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Hz(d,"Tafuta jimbo\u2026","",A.kg,"Chagua jimbo"),$async$ahS)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hE4(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahS,v)},
ahT(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ahT=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fKs(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Nm,null,new C.fKt(p),d,!0,!0,!1,A.lW,!1,!1,x.N),$async$ahT)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGA(d,"Hati ya Kuhoweya",D.Ij),$async$ahT)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Hz(d,"Tafuta jimbo\u2026","",A.kg,"Chagua jimbo"),$async$ahT)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hE5(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ahT,v)},
ahU(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ahU=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fKw(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.Nm,null,new C.fKx(m),d,!0,!0,!1,A.lW,!1,!1,x.N),$async$ahU)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bGA(d,"Malipo ya Awamu ya Mahari",D.SL),$async$ahU)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.Hz(d,"Tafuta jimbo\u2026","",A.kg,"Chagua jimbo"),$async$ahU)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.aih(s,D.SL)
if(q==null)q=A.d.gH(D.SL)
n=C.cE()
p=C.t_(q.e,null,0,0,C.hdy(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dfj,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.r4,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dr)
n=C.cE()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cm(null,null,null,null,D.oY,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahU,v)},
yc:function yc(d,e){this.a=d
this.b=e},
jG:function jG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fQB:function fQB(){},
fQx:function fQx(d){this.a=d},
fQz:function fQz(d){this.a=d},
fQA:function fQA(){},
fQy:function fQy(d){this.a=d},
h1N:function h1N(d,e){this.a=d
this.b=e},
aeG:function aeG(d,e,f){this.c=d
this.d=e
this.a=f},
e8M:function e8M(d,e,f){this.a=d
this.b=e
this.c=f},
e8L:function e8L(d,e){this.a=d
this.b=e},
e8K:function e8K(d,e){this.a=d
this.b=e},
ae4:function ae4(d,e,f){this.c=d
this.d=e
this.a=f},
fKo:function fKo(){},
fKp:function fKp(d){this.a=d},
fKm:function fKm(d){this.a=d},
fKn:function fKn(d){this.a=d},
fKs:function fKs(){},
fKt:function fKt(d){this.a=d},
fKq:function fKq(d){this.a=d},
fKr:function fKr(d){this.a=d},
fKw:function fKw(){},
fKx:function fKx(d){this.a=d},
fKu:function fKu(d){this.a=d},
fKv:function fKv(d){this.a=d},
Lw(d,e,f,g,h,i,j,k,l,m){var w=C.cE()
return C.ev(e,!1,f,A.aH,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bq,h,"",i,w,null,"","",0,!1,"",0,D.bl,4280172719,2,d,0,0,"",D.cv,D.d1,k,l,m)},
Dp(d,e,f,g,h,i,j,k,l){var w=C.cE()
return C.ev(A.bn,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cv,D.fi,j,k,l)},
hzN(d,e,f){return C.Dp(0,0.002,D.fP,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bCK(d,e,f,g,h){return B.a([C.Dp(4294967288,0.032,D.bl,4291404327,1.15,"pill_"+d,g,f,e),C.Lw(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
heq(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dp(0,0.002,D.fP,g,1,"orn_l_"+t,u,d,v),C.Dp(h,0.016,D.lv,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dp(0,0.002,D.fP,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2C(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Lw(d,A.bn,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cE()
return B.a([v,C.ev(A.K,!1,j,A.aH,"marriage_field_"+e+":"+A.j.ad(t,3),4280640491,i,A.cI,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bl,4280172719,2,k,0,0,"",D.cv,D.d1,t,u,g-0.002),C.hzN(u,g+0.018,t)],x.u)},
hzO(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dp(h,0.028,D.bl,h,0,"chv_"+d,g,e,f),C.Dp(w,0.024,D.lv,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dp(w,0.024,D.lv,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Lw(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bCJ(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Lw("Sahihi:",A.bn,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ev(A.bn,!1,4279310375,A.aH,"marriage_sign_"+d,0,24,A.bq,A.a8,"",0.032,C.cE(),null,"","",0,!1,"",0,D.bl,0,2,"",0,0,"",D.cv,D.fi,v,w,f-0.006),C.hzN(w,f+0.016,v)],x.u)},
hhP(d){var w,v
for(w=0;w<19;++w){v=D.T1[w]
if(v.a===d)return v}return null},
ipx(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.aih(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.aih(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.aih(u,D.SL)
v=w==null?l:w.d
if(v==null){w=C.aih(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.hhP(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hAE.a8(0)
$.hAR.a8(0)
t=C.fSi(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.I)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hj0(d){var w=0,v=B.j(x.T),u
var $async$hj0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bU(A.L,null,new C.h3k(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hj0,v)},
yf:function yf(d,e){this.a=d
this.b=e},
o8:function o8(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
blV:function blV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h3k:function h3k(){},
aeJ:function aeJ(d){this.a=d},
erd:function erd(d,e){this.a=d
this.b=e},
erc:function erc(d){this.a=d},
erb:function erb(d,e){this.a=d
this.b=e},
agp:function agp(d,e,f){this.c=d
this.d=e
this.a=f},
hhO(d){return $.hAR.c3(0,d,new C.fSk(d))},
fSi(d){return $.hAE.c3(0,d,new C.fSj(d))},
fJ(d){return B.h7E(d>>>16&255,d>>>8&255,d&255,255)},
iew(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hBY(4294570461,4293910718,4284234270,u)
case 1:return C.hBY(4294635750,4293975240,t,4292912216)
case 2:w=C.fqV(s,4294505966,r)
C.bCt(w,14,16,p)
C.kN(w,8,9,464,836,u,1.2)
C.Dk(w,2,2,1,1,u,10)
C.Dk(w,478,2,-1,1,u,10)
C.Dk(w,2,852,1,-1,u,10)
C.Dk(w,478,852,-1,-1,u,10)
return w
case 3:return C.fqV(4294966515,4294373082,4289102906)
case 4:return C.i96(C.fqV(4294376440,4293653998,4290287194))
case 5:w=C.fqV(4294965238,4294437098,4288444980)
C.bCt(w,14,16,4283043359)
C.kN(w,6,7,468,840,u,1)
C.kN(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hr(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z5(v,n,4294175448)
C.tj(v,n)
C.kN(v,24,24,432,806,4286209070,1)
C.a2p(v,12,12,468,12,o,3,20)
C.a2p(v,12,842,468,842,o,3,20)
C.a2p(v,12,12,12,842,o,3,20)
C.a2p(v,468,12,468,842,o,3,20)
return v
case 7:return C.i76(4294440434,4293518297,4280228630,r)
case 8:v=B.hr(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z5(v,m,4293911504)
C.tj(v,m)
C.kN(v,28,28,424,798,l,1)
C.fAJ(v,28,28,l,k)
C.fAJ(v,452,28,l,k)
C.fAJ(v,28,826,l,k)
C.fAJ(v,452,826,l,k)
return v
case 9:v=B.hr(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z5(v,j,4294111986)
C.tj(v,j)
C.kN(v,18,18,444,818,4292401368,0.7)
B.iY(v,!0,C.fJ(p),0,13,0,853)
return v
case 10:return C.ib4(i,4294173372)
case 11:return C.icd(4294439140,4293449662)
case 12:return C.i6Y(h,4294239432)
case 13:return C.ibE(4294244340,4293193448)
case 14:return C.ig1(4294505710,4293780694)
case 15:return C.fpJ(4294966259,4294439138,o,p,q)
case 16:return C.fpJ(4294966776,4294178544,o,g,g)
case 17:return C.fpJ(4294965493,4294504170,o,4286200650,q)
case 18:return C.fpJ(4294966519,4294373862,o,p,p)
case 19:return C.iac()
case 20:return C.iad()
case 21:v=B.hr(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z5(v,h,4293976768)
C.tj(v,h)
C.bCt(v,14,16,p)
B.iY(v,!0,C.fJ(u),4,475,4,9)
B.iY(v,!0,C.fJ(u),4,475,844,849)
B.iY(v,!0,C.fJ(u),4,9,4,849)
B.iY(v,!0,C.fJ(u),470,475,4,849)
C.a2p(v,10,12,470,12,u,2,16)
C.a2p(v,10,842,470,842,u,2,16)
C.a2p(v,10,12,10,842,u,2,18)
C.a2p(v,470,12,470,842,u,2,18)
C.Dk(v,2,2,1,1,t,10)
C.Dk(v,478,2,-1,1,t,10)
C.Dk(v,2,852,1,-1,t,10)
C.Dk(v,478,852,-1,-1,t,10)
C.kN(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hr(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z5(v,s,4294438872)
C.tj(v,s)
C.kN(v,14,16,452,822,o,2.2)
C.kN(v,22,24,436,806,o,1)
C.hfR(v,!1,!1,o,p,p,36,14,16)
C.l3(v,240,20,7,o,!0)
C.l3(v,240,834,7,o,!0)
C.l3(v,18,427,7,o,!0)
C.l3(v,462,427,7,o,!0)
return v
case 23:v=B.hr(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z5(v,i,4293910712)
C.tj(v,i)
B.iY(v,!0,C.fJ(u),0,479,0,20)
B.iY(v,!0,C.fJ(u),0,479,834,853)
B.iY(v,!0,C.fJ(u),0,20,0,853)
B.iY(v,!0,C.fJ(u),460,479,0,853)
B.iY(v,!0,C.fJ(f),5,474,5,9)
B.iY(v,!0,C.fJ(f),5,474,844,848)
B.iY(v,!0,C.fJ(f),5,9,5,848)
B.iY(v,!0,C.fJ(f),470,474,5,848)
C.kN(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hr(q,q,A.cc,0,A.e8,854,q,0,3,q,A.cc,480,!1)
C.z5(v,e,4294174404)
C.tj(v,e)
C.bCt(v,14,16,p)
B.iY(v,!0,C.fJ(u),3,476,3,8)
B.iY(v,!0,C.fJ(u),3,476,845,850)
B.iY(v,!0,C.fJ(u),3,8,3,850)
B.iY(v,!0,C.fJ(u),471,476,3,850)
C.kN(v,9,10,462,834,t,1)
C.kN(v,14,16,452,822,u,1.8)
C.l3(v,240,8,4,u,!0)
C.l3(v,240,846,4,u,!0)
C.l3(v,8,427,4,u,!0)
C.l3(v,472,427,4,u,!0)
C.l3(v,8,8,3,t,!0)
C.l3(v,472,8,3,t,!0)
C.l3(v,8,846,3,t,!0)
C.l3(v,472,846,3,t,!0)
return v}},
z5(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.j.V(q*w+p*t),0,255)
u=A.o.D(A.j.V(o*w+n*t),0,255)
w=A.o.D(A.j.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.l6(d,!1,A.dl,new B.MN(s),r,A.d4,1,0,w-1,k,k);++k}},
tj(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e6()
n.d_(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aw(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aw(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iy()
v=A.o.D(A.j.M(s.gb9(s))-3,0,255)
r=A.o.D(A.j.M(s.gbe())-3,0,255)
q=A.o.D(A.j.M(s.gbc(s))-2,0,255)
p=d.a
if(p!=null)p.k8(u,t,v,r,q,255)}},
kN(d,e,f,g,h,i,j){var w,v=null,u=C.fJ(i),t=e+g
B.l6(d,!0,A.dl,u,v,A.d4,j,e,t,f,f)
w=f+h
B.l6(d,!0,A.dl,u,v,A.d4,j,e,t,w,w)
B.l6(d,!0,A.dl,u,v,A.d4,j,e,e,f,w)
B.l6(d,!0,A.dl,u,v,A.d4,j,t,t,f,w)},
Dk(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.j.V(j*0.72),8,j-2)
B.l6(d,!0,A.dl,C.fJ(i),u,A.d4,2,e,e+g*j,f,f)
B.l6(d,!0,A.dl,C.fJ(i),u,A.d4,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.l6(d,!0,A.dl,C.fJ(i),u,A.d4,1,w,e+g*t,v,v)
B.l6(d,!0,A.dl,C.fJ(i),u,A.d4,1,w,w,v,f+h*t)},
hBY(d,e,f,g){var w=null,v=B.hr(w,w,A.cc,0,A.e8,854,w,0,3,w,A.cc,480,!1)
C.z5(v,d,e)
C.tj(v,d)
B.iY(v,!0,C.fJ(f),0,479,0,28)
B.iY(v,!0,C.fJ(f),0,479,826,853)
B.iY(v,!0,C.fJ(f),0,28,0,853)
B.iY(v,!0,C.fJ(f),452,479,0,853)
C.kN(v,5,5,470,844,g,1.1)
C.kN(v,28,28,424,798,g,1.6)
C.Dk(v,2,2,1,1,g,11)
C.Dk(v,478,2,-1,1,g,11)
C.Dk(v,2,852,1,-1,g,11)
C.Dk(v,478,852,-1,-1,g,11)
return v},
fqV(d,e,f){var w=null,v=B.hr(w,w,A.cc,0,A.e8,854,w,0,3,w,A.cc,480,!1)
C.z5(v,d,e)
C.tj(v,d)
C.kN(v,14,16,452,822,f,1.6)
C.kN(v,20,22,440,810,f,0.8)
return v},
bCt(d,e,f,g){var w,v=C.fJ(g)
B.iY(d,!0,v,0,479,0,f-1)
w=854-f
B.iY(d,!0,v,0,479,w,853);--w
B.iY(d,!0,v,0,e-1,f,w)
B.iY(d,!0,v,480-e,479,f,w)},
i96(d){var w,v,u=4291404327
C.bCt(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.l3(d,w,8,3,u,!0)
C.l3(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.l3(d,7,v,3,u,!0)
C.l3(d,473,v,3,u,!0)}return d},
fE_(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.ju(e,f),new B.ju(e+g*n,f),new B.ju(e,f+h*n)],t)
B.a39(d,C.fJ(m),s)
w=A.o.D(A.j.V(n*0.17),5,8)
v=A.j.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.ju(s,u),new B.ju(e+g*v,u),new B.ju(s,f+h*v)],t)
B.a39(d,C.fJ(k),t)
t=A.j.V(n*0.39)
C.l3(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.l3(d,e+g*t,f+h*3,4,k,!0)
C.l3(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.l3(d,e+g*t,f,5,k,!0)
C.l3(d,e,f+h*t,5,k,!0)}},
hfR(d,e,f,g,h,i,j,k,l){var w,v
C.fE_(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fE_(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fE_(d,k,v,1,-1,e,f,g,h,i,j)
C.fE_(d,w,v,-1,-1,e,f,g,h,i,j)},
a2p(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.j.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.j.V(e+o*s)
q=A.j.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.lq(d,!0,A.dl,new B.rt(p),null,A.d4,j,r,q)}},
fCU(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l6(d,!0,A.dl,new B.rt(o),null,A.d4,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.l6(d,!0,A.dl,new B.rt(o),null,A.d4,1.4,q,q,p,p+h*r)}},
i76(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hr(o,o,A.cc,0,A.e8,854,o,0,3,o,A.cc,480,!1)
C.z5(n,d,e)
C.tj(n,d)
C.kN(n,20,20,440,814,f,1.2)
C.fCU(n,0,0,1,1,g)
C.fCU(n,480,0,-1,1,g)
C.fCU(n,0,854,1,-1,g)
C.fCU(n,480,854,-1,-1,g)
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
B.l6(n,!0,A.dl,new B.rt(p),o,A.d4,1.2,240,r,60,q)}return n},
fAJ(d,e,f,g,h){var w
C.fHM(d,!0,C.fJ(g),13,e,f)
C.fHM(d,!0,C.fJ(g),9,e,f)
w=B.a([new B.ju(e,f-4),new B.ju(e+4,f),new B.ju(e,f+4),new B.ju(e-4,f)],x.J)
B.a39(d,C.fJ(h),w)},
l3(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.ju(e,v),new B.ju(u,f),new B.ju(e,t),new B.ju(s,f)],x.J)
if(i){B.a39(d,C.fJ(h),r)
return}B.l6(d,!0,A.dl,C.fJ(h),w,A.d4,1,e,u,v,f)
B.l6(d,!0,A.dl,C.fJ(h),w,A.d4,1,u,e,f,t)
B.l6(d,!0,A.dl,C.fJ(h),w,A.d4,1,e,s,t,f)
B.l6(d,!0,A.dl,C.fJ(h),w,A.d4,1,s,e,f,v)},
fpI(d,e,f,g,h,i,j){var w,v=B.a([new B.ju(e,f),new B.ju(e+g*28,f),new B.ju(e,f+h*28)],x.J)
B.a39(d,C.fJ(i),v)
v=e+g*14
w=f+h*14
C.l3(d,v,w,6,j,!0)
C.l3(d,v,w,3,i,!0)},
fpJ(d,e,f,g,h){var w=null,v=B.hr(w,w,A.cc,0,A.e8,854,w,0,3,w,A.cc,480,!1)
C.z5(v,d,e)
C.tj(v,d)
C.kN(v,18,18,444,818,f,2)
C.kN(v,26,26,428,802,f,0.9)
if(h!=null)B.iY(v,!0,C.fJ(h),28,451,28,34)
C.fpI(v,18,18,1,1,g,f)
C.fpI(v,462,18,-1,1,g,f)
C.fpI(v,18,836,1,-1,g,f)
C.fpI(v,462,836,-1,-1,g,f)
return v},
iac(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hr(v,v,A.cc,0,A.e8,854,v,0,3,v,A.cc,480,!1)
C.z5(r,u,4294240980)
C.tj(r,u)
C.kN(r,10,12,460,830,t,3.2)
C.kN(r,18,20,444,814,s,1.2)
C.kN(r,24,26,432,802,t,1.8)
C.hfR(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.l3(r,w,16,3,t,!0)
C.l3(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.l3(r,16,w,3,t,!0)
C.l3(r,464,w,3,t,!0)}return r},
iad(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hr(t,t,A.cc,0,A.e8,854,t,0,3,t,A.cc,480,!1)
C.z5(p,s,4294373080)
C.tj(p,s)
C.kN(p,16,18,448,818,r,2.4)
C.kN(p,24,26,432,802,4286209044,1)
w=new C.fsf(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hfR(p,!1,!0,r,q,q,34,16,18)
return p},
bDb(d,e,f,g,h,i){B.iY(d,!0,C.fJ(i),e,e+g,f,f+h)},
bE3(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.j.V(v*l+u*m),0,255)
j=A.o.D(A.j.V(t*l+s*m),0,255)
l=A.o.D(A.j.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.l6(d,!1,A.dl,new B.MN(i),null,A.d4,1,e,w,l,l)}},
ib3(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.l6(d,!1,A.dl,new B.rt(r),null,A.d4,1,e,s,t,t);++v}return}w=f+g-1
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
B.l6(d,!1,A.dl,new B.rt(r),null,A.d4,1,t,t,f,s);++q}},
ib4(d,e){var w,v,u=null,t=B.hr(u,u,A.cc,0,A.e8,854,u,0,3,u,A.cc,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.ib3(t,v,w,30,D.d7n,(A.o.ar(v,30)+A.o.ar(w,30)&1)===0)
C.bDb(t,44,44,392,766,d)
C.bE3(t,44,44,392,766,d,e)
C.tj(t,d)
C.kN(t,44,44,392,766,4292128567,2.2)
C.kN(t,50,50,380,754,4279898632,0.8)
return t},
icc(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.l3(d,e,f,7,h,!0)
C.l3(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.l6(d,!0,A.dl,C.fJ(h),o,A.d4,1.6,w,u,v,t)
B.l6(d,!0,A.dl,C.fJ(h),o,A.d4,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.l6(d,!0,A.dl,new B.rt(p),o,A.d4,1.2,w,v,q,q)}break
default:B.l6(d,!0,A.dl,C.fJ(h),o,A.d4,1.5,e-8,e+8,f,f)
B.l6(d,!0,A.dl,C.fJ(h),o,A.d4,1.5,e,e,f-8,f+8)
B.lq(d,!0,A.dl,C.fJ(h),o,A.d4,2,e,f)}},
icd(d,e){var w,v,u,t,s=null,r=B.hr(s,s,A.cc,0,A.e8,854,s,0,3,s,A.cc,480,!1)
B.iY(r,!0,C.fJ(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.icc(r,u,v,w,4292391514)}C.bDb(r,46,46,388,762,d)
C.bE3(r,46,46,388,762,d,e)
C.tj(r,d)
C.kN(r,46,46,388,762,4291404327,1.8)
return r},
hx8(d,e,f,g){C.fHM(d,!0,C.fJ(g),16,e,f)
C.fHM(d,!0,C.fJ(g),11,e,f)
C.l3(d,e,f,6,g,!0)
B.l6(d,!0,A.dl,C.fJ(g),null,A.d4,1.3,e-14,e+14,f,f)
B.l6(d,!0,A.dl,C.fJ(g),null,A.d4,1.3,e,e,f-14,f+14)},
i6Y(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hr(v,v,A.cc,0,A.e8,854,v,0,3,v,A.cc,480,!1)
B.iY(s,!0,C.fJ(4280948752),0,479,0,853)
B.iY(s,!0,C.fJ(u),0,479,0,78)
B.iY(s,!0,C.fJ(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hx8(s,w,39,t)
C.hx8(s,w,815,t)}C.bDb(s,38,92,404,670,d)
C.bE3(s,38,92,404,670,d,e)
C.tj(s,d)
C.kN(s,38,92,404,670,t,1.8)
C.kN(s,45,99,390,656,4287322667,0.8)
return s},
ibD(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.ju(e,f),new B.ju(q-5,w),new B.ju(q,f-(18-Math.abs(r)*3)),new B.ju(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a39(d,new B.rt(o),p)}B.lq(d,!0,A.dl,C.fJ(4292128567),null,A.d4,3,e,f)},
ibE(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hr(s,s,A.cc,0,A.e8,854,s,0,3,s,A.cc,480,!1)
C.z5(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.l6(q,!0,A.dl,new B.rt(v),s,A.d4,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.l6(q,!0,A.dl,new B.rt(u),s,A.d4,1.1,v,v,0,853)}B.iY(q,!0,C.fJ(r),0,479,0,70)
B.iY(q,!0,C.fJ(r),0,479,798,853)
for(t=0;t<5;++t)C.ibD(q,70+t*85,48,4292128567)
C.bDb(q,48,78,384,712,d)
C.bE3(q,48,78,384,712,d,e)
C.tj(q,d)
C.kN(q,48,78,384,712,4291404327,1.6)
return q},
ig1(d,e){var w,v,u,t=null,s=4279970378,r=B.hr(t,t,A.cc,0,A.e8,854,t,0,3,t,A.cc,480,!1)
B.iY(r,!0,C.fJ(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.l3(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.lq(r,!0,A.dl,new B.rt(u),t,A.d4,1,v,w)}C.bDb(r,40,40,400,774,d)
C.bE3(r,40,40,400,774,d,e)
C.tj(r,d)
C.kN(r,40,40,400,774,4291058750,2)
C.kN(r,48,48,384,758,s,0.8)
return r},
le:function le(d,e){this.a=d
this.b=e},
fSk:function fSk(d){this.a=d},
fSj:function fSj(d){this.a=d},
fsf:function fsf(d){this.a=d},
fT2(d){var w
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
ic6(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hei(d){var w,v,u,t=null,s=A.a.cn(d,"{"),r=A.a.p8(d,"}")
if(s<0||r<=s)return t
try{w=A.V.aP(0,Al.aie(A.a.az(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
agM(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agM=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vV(null,""),$async$agM)
case 3:n=g
if(A.a.i(n).length===0)throw B.W("AI is not available right now. Please try again later.")
t=B.nn(n)
if(e==null)s=A.i2
else{r=C.ic6(e)
s=B.a([new B.a1m(A.cV.gcu().aO(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rg(t,d,s,"news",E.GS),$async$agM)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.W(q!=null&&B.LY(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agM,v)},
bFH(d){return C.ipd(d)},
ipd(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bFH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.V.av(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agM(r,null),$async$bFH)
case 7:q=f
p=C.hei(q)
if(p==null){u=d
w=1
break}o=d.aF0(p)
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
return B.i($async$bFH,v)},
hBa(d){var w,v=F.hh5(d)
v=B.aL(v,"book","newspaper")
if(F.a3u(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fX2(d,e,f,g){return C.ir6(d,e,f,g)},
ir6(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fX2=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fT2(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hF9()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agM('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hBa(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fX2)
case 3:r=m.hei(i)
if(r==null)throw B.W(y.S)
q=new C.Ac(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aF0(r)
t=q.r
if(t.length===0)throw B.W("The AI did not write a story. Try again.")
s=n+" "+A.d.aN(t," ")
if(F.a3u(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3u(A.d.aN(t," "))==="sw"?C.bFH(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fX2,v)},
bFb(d,e,f,g,h){return C.imI(d,e,f,g,h)},
imI(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bFb=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fO(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.I)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aN(l,"\n")
l=C.hF9()
k=A.V.av(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agM('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hBa(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bFb)
case 3:p=j.hei(a0)
if(p==null)throw B.W(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aF0(B.a1(o,x.N,x.z))
m=A.V.av(n.aj(),null)!==A.V.av(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3u(A.d.aN(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bFH(n),$async$bFb)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a9d(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFb,v)},
a9d:function a9d(d,e,f){this.a=d
this.b=e
this.c=f},
itN(d,e){return B.a5(d,!1).ce(B.ed(new C.h3v(e),!0,null,x.H))},
h3v:function h3v(d){this.a=d},
X4:function X4(d,e){this.c=d
this.a=e},
aG9:function aG9(d,e,f,g,h,i,j,k){var _=this
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
eua:function eua(d){this.a=d},
eu9:function eu9(){},
eub:function eub(d){this.a=d},
eu8:function eu8(d,e){this.a=d
this.b=e},
euc:function euc(){},
etN:function etN(d,e){this.a=d
this.b=e},
etJ:function etJ(d,e){this.a=d
this.b=e},
etU:function etU(d){this.a=d},
etV:function etV(d,e){this.a=d
this.b=e},
etW:function etW(d){this.a=d},
etP:function etP(d,e){this.a=d
this.b=e},
etQ:function etQ(d,e){this.a=d
this.b=e},
etR:function etR(d,e){this.a=d
this.b=e},
etS:function etS(d){this.a=d},
etT:function etT(d){this.a=d},
etO:function etO(d,e){this.a=d
this.b=e},
etL:function etL(d){this.a=d},
etM:function etM(d){this.a=d},
eu1:function eu1(d){this.a=d},
eu2:function eu2(d){this.a=d},
eu0:function eu0(d){this.a=d},
eu3:function eu3(d,e){this.a=d
this.b=e},
eu_:function eu_(d,e){this.a=d
this.b=e},
eu4:function eu4(d){this.a=d},
etZ:function etZ(d){this.a=d},
eu5:function eu5(d){this.a=d},
etY:function etY(d){this.a=d},
eu6:function eu6(d,e){this.a=d
this.b=e},
etX:function etX(d,e){this.a=d
this.b=e},
eu7:function eu7(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
fRU(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fRU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hyJ){w=1
break}r=new C.fRV()
t=4
q=x.s
w=7
return B.b(B.iG(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fRU)
case 7:$.hyJ=!0
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
return B.i($async$fRU,v)},
bFy(d){return A.DL[B.mv(d)-1]+", "+A.oT[B.bL(d)-1]+" "+B.bX(d)+", "+B.bC(d)},
if9(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dA5[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hhu(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.u(h,new B.Y(v,new C.fQb(),B.U(v).k("Y<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.I)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fQd(j,h)
n=new C.fQc(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ar(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j_(o.$1(l)))
j.a+=l}return u},
he1(d,e){var w=new C.frO()
return A.d.cE(e,0,new C.frM(w))>=A.d.cE(d,0,new C.frN(w))},
hvO(d){var w,v,u=new B.aI($.S().r,A.aj,null,null,B.a([],x.v))
u.E(new B.aZ(46,0))
w=d.a
u.E(new B.aq(w,0))
v=d.b
u.E(new B.aq(w,v-46))
u.E(new B.aq(w-46,v))
u.E(new B.aq(0,v))
u.E(new B.aq(0,46))
u.E(new B.bw())
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
cjQ:function cjQ(d){this.a=d},
cjO:function cjO(){},
cjP:function cjP(){},
tP:function tP(d,e){this.a=d
this.b=e},
C7:function C7(d,e){this.a=d
this.b=e},
lB:function lB(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fRV:function fRV(){},
fQb:function fQb(){},
fQd:function fQd(d,e){this.a=d
this.b=e},
fQc:function fQc(d,e,f){this.a=d
this.b=e
this.c=f},
frO:function frO(){},
frP:function frP(){},
frM:function frM(d){this.a=d},
frN:function frN(d){this.a=d},
b3h:function b3h(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cjR:function cjR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cjS:function cjS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cjT:function cjT(d){this.a=d},
beW:function beW(d){this.a=d},
beV:function beV(d,e){this.b=d
this.a=e},
bwY:function bwY(d){this.a=d},
bbm:function bbm(d,e){this.b=d
this.a=e},
bur:function bur(d,e){this.b=d
this.a=e},
hHu(d,e){return B.a5(d,!1).ce(B.ed(new C.h3y(e,null),!0,null,x.E))},
h3y:function h3y(d,e){this.a=d
this.b=e},
X5:function X5(d,e,f){this.c=d
this.d=e
this.a=f},
aGc:function aGc(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
euX:function euX(){},
euY:function euY(d){this.a=d},
euW:function euW(d,e){this.a=d
this.b=e},
euK:function euK(d){this.a=d},
euL:function euL(d){this.a=d},
euR:function euR(d){this.a=d},
euS:function euS(d,e){this.a=d
this.b=e},
euP:function euP(d){this.a=d},
euQ:function euQ(d,e,f){this.a=d
this.b=e
this.c=f},
euM:function euM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euT:function euT(d,e){this.a=d
this.b=e},
euO:function euO(d,e){this.a=d
this.b=e},
euU:function euU(d){this.a=d},
euN:function euN(d,e){this.a=d
this.b=e},
euV:function euV(d,e){this.a=d
this.b=e},
bet:function bet(d,e,f){this.b=d
this.c=e
this.a=f},
itT(d){return B.a5(d,!1).ce(B.ed(new C.h3O(),!0,null,x.I))},
bCW(d,e){var w,v,u,t,s,r,q=B.c1(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hfy(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h3O:function h3O(){},
a1d:function a1d(d){this.a=d},
oZ:function oZ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aHD:function aHD(d,e,f,g,h,i,j,k,l){var _=this
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
_.aI=_.aR=_.aL=_.aH=_.a0=_.bb=_.bn=_.y2=0
_.b8=null
_.b6=0.25
_.bg=null
_.bK=0.5
_.aQ=1
_.c8=_.bH=_.bm=0
_.cO=_.c5=!1
_.c=_.a=null},
f4j:function f4j(d){this.a=d},
f3b:function f3b(d,e){this.a=d
this.b=e},
f3z:function f3z(d,e){this.a=d
this.b=e},
f3J:function f3J(d){this.a=d},
f2V:function f2V(d){this.a=d},
f2W:function f2W(d){this.a=d},
f2T:function f2T(d){this.a=d},
f2U:function f2U(d){this.a=d},
f3s:function f3s(d,e){this.a=d
this.b=e},
f3t:function f3t(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3F:function f3F(d,e,f){this.a=d
this.b=e
this.c=f},
f3E:function f3E(d,e){this.a=d
this.b=e},
f3G:function f3G(d,e){this.a=d
this.b=e},
f3D:function f3D(d,e){this.a=d
this.b=e},
f3I:function f3I(d,e,f){this.a=d
this.b=e
this.c=f},
f3H:function f3H(d,e){this.a=d
this.b=e},
f2L:function f2L(d){this.a=d},
f2M:function f2M(d){this.a=d},
f2N:function f2N(d){this.a=d},
f2K:function f2K(){},
f2O:function f2O(d,e){this.a=d
this.b=e},
f2J:function f2J(d,e){this.a=d
this.b=e},
f2Q:function f2Q(){},
f2P:function f2P(d,e){this.a=d
this.b=e},
f2I:function f2I(d,e){this.a=d
this.b=e},
f2F:function f2F(d,e){this.a=d
this.b=e},
f2R:function f2R(d){this.a=d},
f2H:function f2H(d,e){this.a=d
this.b=e},
f2S:function f2S(d){this.a=d},
f2G:function f2G(d,e){this.a=d
this.b=e},
f48:function f48(d,e){this.a=d
this.b=e},
f4f:function f4f(d){this.a=d},
f4g:function f4g(d,e){this.a=d
this.b=e},
f4h:function f4h(){},
f49:function f49(d,e){this.a=d
this.b=e},
f47:function f47(d,e){this.a=d
this.b=e},
f4a:function f4a(d,e){this.a=d
this.b=e},
f46:function f46(d,e){this.a=d
this.b=e},
f4b:function f4b(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f45:function f45(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4c:function f4c(d){this.a=d},
f4d:function f4d(d,e){this.a=d
this.b=e},
f4e:function f4e(d){this.a=d},
f44:function f44(d){this.a=d},
f3S:function f3S(d){this.a=d},
f3T:function f3T(d){this.a=d},
f3R:function f3R(d,e){this.a=d
this.b=e},
f3M:function f3M(d,e){this.a=d
this.b=e},
f3U:function f3U(d){this.a=d},
f3X:function f3X(d){this.a=d},
f3Q:function f3Q(d){this.a=d},
f3Y:function f3Y(d){this.a=d},
f3Z:function f3Z(d){this.a=d},
f4_:function f4_(d){this.a=d},
f40:function f40(d){this.a=d},
f3P:function f3P(d){this.a=d},
f41:function f41(d){this.a=d},
f3O:function f3O(d){this.a=d},
f42:function f42(d,e){this.a=d
this.b=e},
f3N:function f3N(d,e){this.a=d
this.b=e},
f43:function f43(d){this.a=d},
f3V:function f3V(d){this.a=d},
f3W:function f3W(d){this.a=d},
f3w:function f3w(d){this.a=d},
f3v:function f3v(d){this.a=d},
f3x:function f3x(d,e){this.a=d
this.b=e},
f3u:function f3u(d,e){this.a=d
this.b=e},
f3y:function f3y(d){this.a=d},
f3o:function f3o(d){this.a=d},
f3n:function f3n(d){this.a=d},
f3p:function f3p(d){this.a=d},
f3m:function f3m(d){this.a=d},
f3q:function f3q(d,e){this.a=d
this.b=e},
f3l:function f3l(d,e){this.a=d
this.b=e},
f3k:function f3k(d,e){this.a=d
this.b=e},
f32:function f32(d){this.a=d},
f33:function f33(d){this.a=d},
f34:function f34(d){this.a=d},
f35:function f35(d){this.a=d},
f36:function f36(d){this.a=d},
f37:function f37(d){this.a=d},
f38:function f38(d){this.a=d},
f39:function f39(d){this.a=d},
f3a:function f3a(d){this.a=d},
f2o:function f2o(d){this.a=d},
f2p:function f2p(d){this.a=d},
f2q:function f2q(d){this.a=d},
f2r:function f2r(d){this.a=d},
f2s:function f2s(d){this.a=d},
f2n:function f2n(d){this.a=d},
f2t:function f2t(d){this.a=d},
f2u:function f2u(d){this.a=d},
f2X:function f2X(d){this.a=d},
f2Y:function f2Y(d){this.a=d},
f2Z:function f2Z(d){this.a=d},
f3_:function f3_(d){this.a=d},
f30:function f30(d){this.a=d},
f2y:function f2y(d){this.a=d},
f2z:function f2z(d){this.a=d},
f2A:function f2A(d){this.a=d},
f2B:function f2B(d){this.a=d},
f2C:function f2C(d){this.a=d},
f2x:function f2x(d){this.a=d},
f2D:function f2D(d){this.a=d},
f2w:function f2w(d){this.a=d},
f2E:function f2E(d){this.a=d},
f2v:function f2v(d){this.a=d},
f3r:function f3r(d){this.a=d},
f3j:function f3j(d){this.a=d},
f3f:function f3f(d){this.a=d},
f3e:function f3e(d){this.a=d},
f3g:function f3g(d,e){this.a=d
this.b=e},
f3d:function f3d(d,e){this.a=d
this.b=e},
f3h:function f3h(d,e){this.a=d
this.b=e},
f3c:function f3c(d,e){this.a=d
this.b=e},
f3i:function f3i(d){this.a=d},
f3C:function f3C(d){this.a=d},
f3B:function f3B(d,e,f){this.a=d
this.b=e
this.c=f},
f3A:function f3A(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f3L:function f3L(d,e){this.a=d
this.b=e},
f3K:function f3K(d,e){this.a=d
this.b=e},
f31:function f31(d){this.a=d},
f4i:function f4i(d){this.a=d},
bi4:function bi4(d,e){this.b=d
this.a=e},
ipo(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
ipp(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kZ(0,d),m=B.C(n,B.a3(n).k("M.E"))
if(m.length===0)return d
w=new B.fg("")
for(v=0,u=0,n="";t=m.length,u<t;u=q){n=e.length
s=u<n?e[u]:0
r=u
for(;;){q=r+1
if(q<t)p=(q<n?e[q]:0)===s
else p=!1
if(!p)break
r=q}n=m[u].b.index
t=w.a+=A.a.az(d,v,n)
p=m[r].b
p=A.a.az(d,n,p.index+p[0].length)
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
bDx(){var w=$.bCD,v=$.Rx
$.Rx=v+1
return w+"_"+v},
ip(d,e,f,g,h,i,j){return C.ev(A.bn,!1,4279310375,A.aH,"",i,24,A.bq,A.a8,"",h,C.bDx(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cv,D.fi,g,e,f)},
oo(d,e,f,g){var w=f*9
return C.ip(D.f1,d-f/2,e-w/32,f,w/16,g,0)},
i8E(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bCD
o=$.Rx
$.Rx=o+1
w.push(new C.eS(p+"_"+o,D.fi,0,q,1,0.0016,"",24,A.a8,A.bq,A.aH,k,A.bn,null,D.bl,s,s,0,0,!1,"",0,D.cv,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bCD
o=$.Rx
$.Rx=o+1
w.push(new C.eS(p+"_"+o,D.fi,n,0,0.004,1,"",24,A.a8,A.bq,A.aH,k,A.bn,null,D.bl,s,s,0,0,!1,"",0,D.cv,0,"","","","","",!1,0))}w.push(C.oo(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.oo(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ip(D.bl,0.08,0.08,0.5,0.003,v,0),C.ip(D.bl,0.58,0.08,0.004,0.06,v,0),C.ip(D.bl,0.58,0.14,0.34,0.003,v,0),C.ip(D.bl,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ip(D.bl,0.08,0.8,0.004,0.14,t,0),C.ip(D.bl,0.08,0.94,0.6,0.003,t,0),C.oo(0.58,0.08,0.05,e),C.oo(0.92,0.22,0.05,e),C.oo(0.08,0.8,0.05,f),C.oo(0.68,0.94,0.05,f),C.oo(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ip(D.lv,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ip(D.lv,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ip(D.lv,0.7,0.8,0.22,0.12,w|1140850688,0),C.ip(D.lv,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.oo(0.5,0.5,1.5,w|335544320),C.oo(0.5,0.5,1.15,w|402653184),C.oo(0.5,0.5,0.8,v|436207616),C.oo(0.95,0.05,0.4,v|855638016),C.oo(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.oo(0.85,0.08,0.7,w|1140850688),C.oo(0.1,0.35,0.5,v|855638016),C.oo(0.9,0.62,0.55,v|771751936),C.oo(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ip(D.bl,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ip(D.bl,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ip(D.bl,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ip(D.bl,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.oo(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.oo(0.5,0.2,0.65,(w|3422552064)>>>0),C.oo(0.5,0.2,0.95,w|855638016),C.ip(D.bl,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ip(D.bl,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ip(D.kj,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ip(D.kj,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ip(D.kj,0.15,0.86,0.6,0.14,1712265002,0),C.oo(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d91[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bCD
l=$.Rx
$.Rx=l+1
w.push(new C.eS(o+"_"+l,D.fi,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bq,A.aH,k,A.bn,null,D.f1,s,s,0,0,!1,"",0,D.cv,0,"","","","","",!1,0))}w.push(C.oo(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ip(D.kj,0.35,-0.1,0.3,0.62,w|855638016,0),C.ip(D.kj,0.05,-0.1,0.3,0.55,v,-0.5),C.ip(D.kj,0.65,-0.1,0.3,0.55,v,0.5),C.oo(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ip(D.bl,0.06,0.04,0.88,0.002,e,0),C.ip(D.bl,0.06,0.96,0.88,0.002,e,0),C.ip(D.bl,0.06,0.04,0.004,0.92,e,0),C.ip(D.bl,0.936,0.04,0.004,0.92,e,0),C.ip(D.bl,0.09,0.07,0.82,0.001,w,0),C.ip(D.bl,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ip(D.kk,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ip(D.kk,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ip(D.kk,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ip(D.bl,0,0,0.3,0.09,w|1140850688,0),C.ip(D.bl,0.7,0.9,0.3,0.1,v|1426063360,0),C.ip(D.bl,0.82,0.04,0.12,0.07,w|771751936,0),C.ip(D.bl,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ip(D.f1,0.62,0.02,0.5,0.16,v,0.6),C.ip(D.f1,0.78,0.12,0.4,0.12,u,0.9),C.ip(D.f1,-0.12,0.8,0.5,0.16,u,-0.6),C.ip(D.f1,-0.05,0.9,0.4,0.12,v,-0.9),C.oo(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ip(D.bl,0.09,0.12,0.16,0.006,e,0),C.ip(D.bl,0.05,0.03,0.9,0.001,w,0),C.ip(D.bl,0.05,0.97,0.9,0.001,w,0)],x.u)}},
ilK(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bCD=j
$.Rx=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fNA()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ev(A.bn,!1,n,A.aH,"ngmy_quote_background",m,24,A.bq,A.a8,"",1,C.bDx(),g,"","",0,!1,"",0,D.bl,l,2,"",0,0,"",D.cv,D.lV,1,0,0))
if(a9)A.d.u(q,C.i8E(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.j.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.ipo(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fNz(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.j.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cI,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.ev(A.bn,!1,n,A.aH,"ngmy_quote_logo",m,24,A.bq,A.a8,a1,a3*9/16,C.bDx(),a0,"","",0,!1,a2,0,D.bl,l,2,"",0,0,"",D.cv,D.lV,a3,a4,a5))
return C.t_(s,r,0,0,q,j+"_slide",D.r4,"","","",D.dr)},
rZ:function rZ(d,e){this.a=d
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
fNA:function fNA(){},
fNz:function fNz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hZv(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a7(d)
v=B.bh(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b7(u.a(w.h(d,"extras")),new C.cll(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.Ad(u,t,s,B.w(w==null?"":w))},
fVp(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fVp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hz6){w=1
break}$.hz6=!0
t=4
w=7
return B.b(B.aA(),$async$fVp)
case 7:r=e
q=B.aV(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.V.aP(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i5(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aT(j.a(o.b));h.C();){m=h.gR(h)
l=C.hZv(m)
if(l!=null)J.c6(n,l)}$.Dl.c3(0,B.w(o.a),new C.fVq(n))}C.hfc()
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
return B.i($async$fVp,v)},
hfc(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.ds($.Dl,$.Dl.r,$.Dl.e);w.C();)J.nT(w.d,new C.fA_(v))
$.Dl.bq($.Dl,new C.fA0())},
aQi(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQi=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aQi)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cb($.Dl,B.a3($.Dl).k("cb<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aT(q.b);h.C();){o=h.gR(h)
g=o
J.c6(p,B.J(["at",g.a.aa().af(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aC("String","ngmy_slides_ai_history_v1",A.V.av(n,null)),$async$aQi)
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
return B.i($async$aQi,v)},
iq1(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hfc()
w=$.Dl.c3(0,d,new C.fVs())
v=Date.now()
u=B.C(e,B.a3(e).k("ci.E"))
J.n3(w,0,new C.Ad(new B.V(v,0,!1),f,u,g))
C.aQi()},
ipZ(d){var w,v=$.Dl.h(0,d)
if(v==null||J.ct(v))return
w=J.cD(v)
w.cG(v,0)
if(w.gau(v))$.Dl.W(0,d)
C.aQi()},
Ad:function Ad(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cll:function cll(){},
fVq:function fVq(d){this.a=d},
fA_:function fA_(d){this.a=d},
fA0:function fA0(){},
fVs:function fVs(){},
iq3(d){return A.d.dL(D.xc,new C.fVv(d),new C.fVw())},
hZt(d){var w
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
hZs(d){var w
switch(d.a){case 0:w=D.aqo
break
case 1:w=A.zv
break
case 2:w=A.Q6
break
case 3:w=I.aq6
break
case 4:w=A.aqT
break
case 5:w=A.mo
break
default:w=null}return w},
ibJ(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Sb[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Sb[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hZu(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.I)(w),++s){r=w[s]
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
o.push(q)}return A.V.av(B.J(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
iq_(d,e,f,g,h){var w=new B.N(D.xc,new C.fVo(),x.eC).aN(0,", "),v=""+d,u=C.hF1(h),t=F.fOZ(h),s=C.hAP(g),r=e.q(0,D.JD)?'- New slides get an "emoji".\n':"",q=e.q(0,D.JE)?'- New slides get an "icon3d" from: '+A.d.aN(D.Sb,", ")+".\n":"",p=e.q(0,D.Ek)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
iq0(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.xc,new C.fVr(),x.eC).aN(0,", "),p=new B.fg("")
if(e.q(0,D.JD)){p.a=s
w=s}else w=""
if(e.q(0,D.JE))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aN(D.Sb,", ")+".\n")
if(e.q(0,D.Ek))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hF1(d)
v=F.fOZ(d)
u=C.hAP(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.v(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
ait(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DM(a3,"{"),a5=J.h7b(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mj(a3,a4,a5+1)
try{w=A.V.aP(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.ct(v))return a1
u=B.a([],x.aC)
for(o=J.aT(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b7(p.a(J.t(t,a2)),new C.fTl(),m).bY(0,new C.fTm())
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
f=C.ibJ(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.ca(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c6(u,new C.a9l(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fq(u).b:q))
p=A.d.aV(D.xc,new C.fTn(r))?r:a7
o=C.fzf(J.t(w,"logo_frame"),D.DH)
n=C.fzf(J.t(w,"logo_ring"),D.DA)
m=C.fzf(J.t(w,"photo_frame"),D.DH)
l=C.fzf(J.t(w,"photo_ring"),D.DA)
return new C.at2(q,p,u,o,n,m,l)}catch(a0){return a1}},
a3_(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hE7(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.El),f7=f6?C.i5f():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e6()
v.d_(f7.w+1)
u=f7.a
t=B.bp(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.ob("luxe",u.a,A.mo,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dr)
w=s}if(w==null)w=C.iq3(f9.b)
r=g2.q(0,D.a8R)||f6
q=g2.q(0,D.JD)
p=g2.q(0,D.Ub)
o=new C.fNE()
n=B.a([],x.g)
m=new C.fNH(o,w,r)
l=new C.fNG(o,r)
k=new C.fNF(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a7(g0),a7=!A.d.aV(u,new C.fND(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.daI[b8]
c0=D.d9y[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.ffj.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.f1,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.f1,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f1,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.nd,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.r5,500,f2,f0))
c1.push(l.$8$fx$key(D.bl,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.U8
break A}if("section"===d2){c1.push(l.$8$fx$key(D.f1,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lv,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bl,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Ei
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.f1,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f1,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.nd,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cI,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.r5,500,f2,f0))
d3=D.nc
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.f1,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bl,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vt:D.cv
c1.push(new C.eS(b4,D.a8P,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bq,A.aH,4279310375,A.bn,e4,D.bl,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.nc
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.f1,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.f1,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.nd,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.r5,450,f2,f0))
c1.push(l.$8$fx$key(D.bl,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.U8
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.f1,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.f1,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bl,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bl,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aN(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.JB,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.nc}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dr,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i6X(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dCC[A.o.F(b1,6)]:s
n.push(new C.m3(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cm(e4,e4,e4,e4,D.Eh,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.az(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fQ1(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fQ1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.Ek)
n=e.q(0,D.JE)
if(!o&&!n){u=D.a7J
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fQ4(o,s[r],n,$.iat,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iG(t,x.e),$async$fQ1)
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
return B.i($async$fQ1,v)},
fP1(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fP1=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.iq0(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPE(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fP1)
case 3:u=s.aPZ(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fP1,v)},
bFc(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bFc=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.dZ(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.I(0,(q==null?r.a(q):q).b)}C.iq1(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.ait(i,"colorful")
t=C.iq_(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPE(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.i2),$async$bFc)
case 3:u=o.aPZ(m,f,h,g,D.ei2,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFc,v)},
aPE(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPE=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vV(null,""),$async$aPE)
case 3:n=i
if(A.a.i(n).length===0)throw B.W("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.nn(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rg(t,d,g,"slides",null),$async$aPE)
case 7:q=i
p=q.b
if(p!=null){o=C.ait(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.W(s!=null&&B.LY(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPE,v)},
aPZ(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aPZ=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.Ek)||e.q(0,D.JE)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d0(e,x.Q)
t.W(0,D.Ek)}w=6
return B.b(C.fQ1(d,t),$async$aPZ)
case 6:s=k
w=4
break
case 5:s=D.a7J
case 4:t=d.c
w=A.d.aV(t,new C.frI())?7:9
break
case 7:r=$.hFW
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dN(r,x.aP),$async$aPZ)
case 10:q=k
p=q!=null?A.V.av(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hE7(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hZu(new C.at2(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.frJ(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("ka<ci.E,n>")
t=B.C(new B.ka(e,new C.frK(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.Ub)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPZ,v)},
hid(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a6t[v]
if(A.d.q(t,u.b))w.I(0,u)}return w},
itY(d){return B.bU(A.L,null,new C.h4_(),d,!0,!0,!0,null,!1,!1,x.I)},
i5T(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cV.gcu().aO(d)},
itX(d,e,f){return B.bU(A.L,null,new C.h3Z(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hie(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hif(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fzf(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aV(e,new C.fzg(w))?w:""},
hAP(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hFU(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.ait(a1==null?"":a1,a0),a3=C.ait(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.I)(t),++p){o=B.nA(new B.Y(r,new C.fVx(t[p]),q))
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
g=B.C(new B.Y(k,new C.fVy(),v),r)
A.d.aZ(g,new C.fVz())
if(g.length===0)continue
f=new C.fVA(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.I)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
iqk(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aM3
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.ejW
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.ejX
return null},
hAo(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.j.bi(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.j.cB(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
iq4(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oY
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.I)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.I)(q),++o){n=q[o]
if(n.b!==D.d1)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.j.D(m*0.85,10,120)
break
case 1:j=A.j.D(m*1.15,10,120)
if(C.hAo(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hAo(n,i,v,u))if(n.w>10){f=h+1
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
iq2(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.ait(o,"colorful")
if(n==null)throw B.W("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a6t[r]
if(q.b===s)w.I(0,q)}}v=C.hie(e)
u=C.hif(e)
p=C.hE7(n,D.a7J,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fVt(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("ka<ci.E,n>")
o=B.C(new B.ka(w,new C.fVu(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.Ub)
return p},
itK(d,e,f){return B.bU(A.L,null,new C.h3c(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i5f(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e6()
s.d_(t)
w=D.cOr[s.aw(10)]
v=new C.eqB(s)
u=x.N
return new C.eqA(w,s.aw(4),J.fq(v.$1$2(D.dfz,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.dxy,2+s.aw(2),u),v.$1$2(D.dpP,2,u),v.$1$2(D.dB0,4,x.fP),t)},
i6X(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e6()
a1.d_(a5.w+a3*13)
w=new C.fo0(a4)
v=new C.fo2(a4,d)
u=new C.fo1(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.I)(a2),++q){p=a2[q]
if(p.b===D.d1){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b_(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.f1,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a3_(a0,52),"lux_spot",a5.xh(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bl,0,0,1,1,0,"lux_back",a5.xh(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bl,0,0,1,1,0,"lux_back2",a5.aHz(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bl,0.022,0.038,0.956,0.924,0,g,a5.xh(0,f),D.dr,150,C.a3_(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bl,0.018,0.032,0.964,0.936,0,g,a5.xh(0,f),D.dr,120,C.a3_(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bl,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dr,260,C.a3_(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bl,0,0,1,1,0,"lux_filigree",a5.xh(0,"filigree"),D.dr,200))
break
default:a2.push(w.$10$anim$delay(D.bl,0.08,0.06,0.84,0.004,C.a3_(a0,208),"lux_rule",a5.aHz(0,"shimmer",r),D.vs,150))
a2.push(w.$10$anim$delay(D.bl,0.08,0.936,0.84,0.004,C.a3_(a0,144),"lux_rule2","",D.JB,220))}l=!A.d.aV(a2,new C.fo_())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xh(0,"crest"),350))
else{o=a1.h3()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xh(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a3_(r,242)
j=a5.xh(0,"orbit")
i=s===D.bl?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.r5,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.f1,t-0.007,0.9495,0.014,0.025,C.a3_(r,242),"lux_g2",a5.xh(0,"orbit"),D.r5,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.I)(t),++q){h=t[q]
a2.push(w.$8(D.bl,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b_(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bl,0,0,1,1,0,"lux_velvet",a5.xh(0,"velvet")))},
ob:function ob(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fVv:function fVv(d){this.a=d},
fVw:function fVw(){},
wz:function wz(d,e){this.a=d
this.b=e},
a9l:function a9l(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
at2:function at2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fVo:function fVo(){},
fVr:function fVr(){},
fTl:function fTl(){},
fTm:function fTm(){},
fTn:function fTn(d){this.a=d},
fNE:function fNE(){},
fNH:function fNH(d,e,f){this.a=d
this.b=e
this.c=f},
fNG:function fNG(d,e){this.a=d
this.b=e},
fNF:function fNF(d,e){this.a=d
this.b=e},
fND:function fND(d){this.a=d},
fQ4:function fQ4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fQ2:function fQ2(d){this.a=d},
fQ3:function fQ3(d){this.a=d},
frI:function frI(){},
frJ:function frJ(){},
frK:function frK(){},
h4_:function h4_(){},
a1K:function a1K(d){this.a=d},
aJz:function aJz(d,e,f,g,h){var _=this
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
faG:function faG(d,e,f){this.a=d
this.b=e
this.c=f},
faH:function faH(d,e){this.a=d
this.b=e},
faE:function faE(d,e){this.a=d
this.b=e},
faF:function faF(d,e){this.a=d
this.b=e},
faD:function faD(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fay:function fay(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
faC:function faC(d,e){this.a=d
this.b=e},
fax:function fax(d,e){this.a=d
this.b=e},
faB:function faB(d,e){this.a=d
this.b=e},
faw:function faw(d,e){this.a=d
this.b=e},
faz:function faz(d){this.a=d},
faA:function faA(d,e){this.a=d
this.b=e},
fam:function fam(d,e){this.a=d
this.b=e},
fan:function fan(d,e){this.a=d
this.b=e},
fap:function fap(d){this.a=d},
faq:function faq(d){this.a=d},
far:function far(d){this.a=d},
fas:function fas(d){this.a=d},
fao:function fao(d,e){this.a=d
this.b=e},
fat:function fat(d,e){this.a=d
this.b=e},
faU:function faU(d){this.a=d},
faV:function faV(d){this.a=d},
faT:function faT(d){this.a=d},
faW:function faW(d){this.a=d},
faS:function faS(d){this.a=d},
faY:function faY(d){this.a=d},
faR:function faR(d,e){this.a=d
this.b=e},
faZ:function faZ(d){this.a=d},
faQ:function faQ(d,e){this.a=d
this.b=e},
fb_:function fb_(d){this.a=d},
faP:function faP(d){this.a=d},
fb0:function fb0(d){this.a=d},
faO:function faO(d,e){this.a=d
this.b=e},
fb1:function fb1(d){this.a=d},
faN:function faN(d,e){this.a=d
this.b=e},
fb2:function fb2(d){this.a=d},
faM:function faM(d){this.a=d},
fb3:function fb3(d,e){this.a=d
this.b=e},
faL:function faL(d,e){this.a=d
this.b=e},
fb4:function fb4(d){this.a=d},
faX:function faX(d){this.a=d},
faK:function faK(d,e){this.a=d
this.b=e},
fau:function fau(d,e,f){this.a=d
this.b=e
this.c=f},
fav:function fav(d,e,f){this.a=d
this.b=e
this.c=f},
faJ:function faJ(d,e){this.a=d
this.b=e},
faI:function faI(d,e){this.a=d
this.b=e},
h3Z:function h3Z(d,e){this.a=d
this.b=e},
a1J:function a1J(d,e,f){this.c=d
this.d=e
this.a=f},
aJy:function aJy(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
faf:function faf(d){this.a=d},
fag:function fag(d){this.a=d},
fah:function fah(d,e){this.a=d
this.b=e},
fai:function fai(d){this.a=d},
faj:function faj(d){this.a=d},
fae:function fae(d,e){this.a=d
this.b=e},
fak:function fak(d,e){this.a=d
this.b=e},
fal:function fal(d,e){this.a=d
this.b=e},
fzg:function fzg(d){this.a=d},
b3G:function b3G(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aG3:function aG3(d,e,f){this.c=d
this.d=e
this.a=f},
bmT:function bmT(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
eqD:function eqD(d){this.a=d},
eqC:function eqC(){},
bkl:function bkl(d,e){this.b=d
this.a=e},
fVx:function fVx(d){this.a=d},
fVy:function fVy(){},
fVz:function fVz(){},
fVA:function fVA(d){this.a=d},
atA:function atA(d,e){this.a=d
this.b=e},
fVt:function fVt(){},
fVu:function fVu(){},
h3c:function h3c(d,e){this.a=d
this.b=e},
a07:function a07(d,e,f){this.c=d
this.d=e
this.a=f},
aDy:function aDy(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dtj:function dtj(d){this.a=d},
dtk:function dtk(d){this.a=d},
dtl:function dtl(d,e){this.a=d
this.b=e},
dto:function dto(d){this.a=d},
dtp:function dtp(d,e){this.a=d
this.b=e},
dtn:function dtn(d,e){this.a=d
this.b=e},
dtq:function dtq(d){this.a=d},
dtm:function dtm(d,e){this.a=d
this.b=e},
bvz:function bvz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eqA:function eqA(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
eqB:function eqB(d){this.a=d},
fo0:function fo0(d){this.a=d},
fo2:function fo2(d,e){this.a=d
this.b=e},
fo1:function fo1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fo_:function fo_(){},
aOd:function aOd(){},
hh2(d){var w,v,u
try{w=A.V.aP(0,d,null)
if(x.f.b(w)){v=B.ws(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b3C:function b3C(d,e,f){this.c=d
this.d=e
this.a=f},
bot:function bot(d,e){this.c=d
this.a=e},
imd(d){return A.d.dL(D.IB,new C.fOL(d),new C.fOM())},
ime(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.Y(D.IB,new C.fON(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.k1("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
ly:function ly(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fOL:function fOL(d){this.a=d},
fOM:function fOM(){},
fON:function fON(d){this.a=d},
nd(d,e,f,g,h){return new C.Fs(f,g,d)},
i8b(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fq8(),v),v.k("M.E"))
d.z=w
d.x=""},
dA(d,e){var w=$.Lj
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dB(d,e,f,g,h,i,j,k,l){return C.ev(A.bn,!1,4279310375,A.aH,"",d,24,A.bq,A.a8,"",e,"design_"+C.cE(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cv,D.fi,j,k,l)},
hDV(d,e){var w
C.i8b(d)
w=A.d.dL($.bHe(),new C.fMB(e),new C.fMC())
$.Lj=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lj=""}d.z=B.bp(d.z,!0,x.F)},
Fs:function Fs(d,e,f){this.a=d
this.b=e
this.e=f},
fq8:function fq8(){},
fV_:function fV_(){},
fV0:function fV0(){},
fV1:function fV1(){},
fVc:function fVc(){},
fVh:function fVh(){},
fVi:function fVi(){},
fVj:function fVj(){},
fVk:function fVk(){},
fVl:function fVl(){},
fVm:function fVm(){},
fVn:function fVn(){},
fV2:function fV2(){},
fV3:function fV3(){},
fV4:function fV4(){},
fV5:function fV5(){},
fV6:function fV6(){},
fV7:function fV7(){},
fV8:function fV8(){},
fV9:function fV9(){},
fVa:function fVa(){},
fVb:function fVb(){},
fVd:function fVd(){},
fVe:function fVe(){},
fVf:function fVf(){},
fVg:function fVg(){},
fMB:function fMB(d){this.a=d},
fMC:function fMC(){},
j8(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ev(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bl,4280172719,2,m,n,0,"",o,D.d1,p,q,r)},
DD(d,e,f,g,h,i,j,k,l){return C.ev(A.bn,!1,4279310375,A.aH,"",d,24,A.bq,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cv,D.fi,j,k,l)},
bFX(){var w=new B.V(Date.now(),0,!1)
return A.iV[B.bL(w)-1]+" "+B.bX(w)+", "+B.bC(w)},
ey:function ey(d,e,f){this.a=d
this.b=e
this.c=f},
bDh(d){return new B.j3((A.o.aJ(d,24)&255)/255,(A.o.aJ(d,16)&255)/255,(A.o.aJ(d,8)&255)/255,(d&255)/255)},
ids(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.aot(A.cK.aO(A.d.gal(d.split(","))))
return w}catch(v){return null}},
idw(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fyz(),x.dv).aN(0,"\n")},
idv(d){switch(d.a){case 2:return A.o0
case 1:case 5:return A.fqK
default:return A.VA}},
idp(d){switch(d.a){case 2:return A.w_
case 1:case 5:return A.XH
default:return A.aea}},
idt(d,e){var w,v=null,u=d.ay,t=A.o.aJ(u,24),s=A.o.aJ(d.ch,24),r=(t&255)===0?v:C.bDh(u),q=(s&255)===0?v:C.bDh(d.ch),p=A.j.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nV(q,p,A.ld)
w=new B.q1(t,t,t,t)}switch(d.ax.a){case 1:return B.lT(v,v,v,new B.kW(r,w,v,A.afu,v),v,v,v,v)
case 4:return u?new B.fY(v,v,v):B.xE(B.lT(v,v,q,v,p+0.4,v,v,v))
default:return B.lT(v,v,v,new B.kW(r,w,B.w2(4),A.i7,v),v,v,v,v)}},
idr(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.fi?0.4:12,g=A.j.D(d.e*e,h,e),f=A.j.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.idp(d.as)
v=A.j.D(d.w*(e/960),3,96)
u=C.idw(d)
t=C.bDh(d.Q)
s=d.x.a>=700?A.eD:A.wI
r=d.y===A.cI?A.z9:A.aoS
q=d.z
p=new B.DQ(w,l,l,B.fe(u,l,l,l,B.hg(l,t,1===q.a?A.aVE:A.aVD,l,l,l,l,l,l,A.dE,l,l,v,r,s,l,!0,l,l,l,l),C.idv(d.as)))
break
case 1:case 4:o=C.ids(d.at)
n=i===D.lV&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xE(B.fe(w,l,l,l,B.hg(l,A.tK,l,l,l,l,l,l,l,A.dE,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IL(o,n?A.afq:A.Y8,l,l)
break
case 3:w=new B.nV(A.JX,1,A.ld)
u=B.w2(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lT(A.w_,B.fe(t,l,l,l,B.hg(l,D.eyp,l,l,l,l,l,l,l,A.dE,l,l,11,l,A.eD,l,!0,l,l,l,l),A.o0),l,new B.kW(E.aNv,new B.q1(w,w,w,w),u,A.i7,l),l,l,l,l)
break
case 2:p=C.idt(d,e)
break
case 5:p=C.idq(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hv2(-w,p)
w=i===D.d1
if(w){m=A.o.aJ(d.Q,24)&255
if(m<255)p=new B.aup(m/255,p)}if(w)return new F.wE(k,l,j,l,new B.TB(new B.kV(g,g,f,1/0),p))
if(i===D.lu){i=new B.nV(A.JX,1,A.ld)
i=B.lT(A.w_,p,l,new B.kW(A.pQ,new B.q1(i,i,i,i),B.w2(4),A.i7,l),l,l,D.bIc,l)}else i=p
return new F.wE(k,l,j,l,new B.fY(g,f,i))},
idu(d,e,f,g){var w,v=null,u=C.bDh(d.e),t=d.f
t=B.a([F.htE(t!=null?B.lT(v,v,v,new B.kW(v,v,v,A.i7,new B.aZ6(E.XK,A.ae7,B.a([u,C.bDh(t)],x.cR),v)),v,v,v,v):B.lT(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.u(t,new B.N(w,new C.fyy(f,g),B.U(w).k("N<1,fk>")))
return F.cAG(t)},
hih(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hih=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5s(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.I)(t),++q){p=t[q]
o=new B.XS(A.xl,A.JU,D.bJo,null,null,null,!1,null)
o=new B.Cr(o,new C.fVG(607,787,p,d))
o.Np(n,null)
r.push(o)}u=n.jI(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hih,v)},
idq(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hh2(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.galn()
if(h==null)h=A.aCF
j=B.u2(4279308564)
w=B.w2(18)
v=new B.nV(B.u2(4287531653),3,A.ld)
u=i.length===0?"My links":i
u=B.a([B.xE(B.fe(u,m,m,m,B.hg(m,A.pQ,m,m,m,m,m,m,m,A.dE,m,m,12,m,A.eD,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xE(B.fe(A.a.i(l.c),m,m,m,D.fyw,m)))
u.push(new B.fY(m,8,m))
for(t=B.cX(h,0,B.dC(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bQ(t,t.gJ(0),s.k("bQ<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u2(4280690220)
o=new B.aaG(8,8)
n=A.a.i(r.b)
u.push(new B.oc(D.bCb,new C.ayL(new C.ajE(q),B.lT(m,B.fe(n.length===0?A.a.i(r.c):n,m,m,m,D.fAX,A.o0),m,new B.kW(p,m,new B.ak7(o,o,o,o),A.i7,m),m,m,D.bIF,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xE(B.fe(k,m,m,m,D.fAa,m))
u.push(new C.ayL(C.hNf(k),t))}return B.lT(m,B.zt(u,A.NT,A.lU),m,new B.kW(j,new B.q1(v,v,v,v),w,A.i7,m),m,m,D.bD1,m)},
fyz:function fyz(){},
fyy:function fyy(d,e){this.a=d
this.b=e},
fVG:function fVG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aig(d){var w,v
for(w=0;w<32;++w){v=D.Is[w]
if(v.a===d)return v}return null},
hxG(d){var w,v,u=A.a.cn(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cK.aO(A.a.b2(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hHq(d,e){return B.a5(d,!1).ce(B.ed(new C.h1x(e),!0,null,x.fB))},
hHp(d,e){return B.bU(A.L,null,new C.h1w(e),d,!0,!0,!0,null,!1,!1,x.fB)},
jd:function jd(d,e,f,g,h){var _=this
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
Op:function Op(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bme:function bme(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
e40:function e40(d){this.a=d},
e4_:function e4_(d,e,f){this.a=d
this.b=e
this.c=f},
e3Z:function e3Z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bu5:function bu5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
f9s:function f9s(d,e){this.a=d
this.b=e},
bh9:function bh9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b1w:function b1w(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cfE:function cfE(){},
cfF:function cfF(d){this.a=d},
cfG:function cfG(d,e,f){this.a=d
this.b=e
this.c=f},
cfH:function cfH(d,e,f){this.a=d
this.b=e
this.c=f},
h1x:function h1x(d){this.a=d},
a_F:function a_F(d,e){this.c=d
this.a=e},
aBU:function aBU(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
diy:function diy(d,e,f){this.a=d
this.b=e
this.c=f},
diD:function diD(d){this.a=d},
diE:function diE(d){this.a=d},
diC:function diC(d){this.a=d},
diF:function diF(d){this.a=d},
diB:function diB(d,e){this.a=d
this.b=e},
diG:function diG(d){this.a=d},
diA:function diA(d){this.a=d},
diH:function diH(d){this.a=d},
diz:function diz(d,e){this.a=d
this.b=e},
diI:function diI(d,e){this.a=d
this.b=e},
h1w:function h1w(d){this.a=d},
h1v:function h1v(d){this.a=d},
h1u:function h1u(d,e,f){this.a=d
this.b=e
this.c=f},
h1t:function h1t(d,e){this.a=d
this.b=e},
aNI:function aNI(){},
itW(d){return B.bU(A.L,null,new C.h3Y(),d,!0,!0,!0,null,!1,!1,x.N)},
h3Y:function h3Y(){},
a0_:function a0_(d){this.a=d},
biG:function biG(d){this.d=d
this.c=this.a=null},
dpl:function dpl(d){this.a=d},
dpm:function dpm(d,e){this.a=d
this.b=e},
dpn:function dpn(d){this.a=d},
i9K(d){var w,v=d.split("@")
if(v.length>1){w=B.ca(v[1],16)
if(w!=null)return B.b0(w)}return A.wq},
iod(d){var w=7000
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
ioc(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.i9K(d)
switch(q){case"shimmer":return B.og(A.M6,g,new C.fSd(p,A.j.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bi0(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.e2(A.A,B.d3(F.bXD(g,new B.Er(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.r(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bhI(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.j.D(0.55+s*0.45,0,1)
return B.d3(B.eI(A.A,e*0.5,B.e2(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dq()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fG(e)
u.n3(Math.sin(e)*0.3)
return B.dP(B.fB(A.A,g,r,u,!0),new B.r(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.du(!0,B.b3(r,r,r,new C.bqP(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.du(!0,B.b3(r,r,r,new C.bcw(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b2,A.t,B.a([new B.du(!0,B.b3(r,r,r,new C.bc9(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bxW(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.buU(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bu1(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b2,A.t,B.a([g,new B.du(!0,B.b3(r,r,r,new C.bh2(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.ac,A.f,B.a([B.bR(0,new B.du(!0,B.e2(A.A,new B.bM(new B.o(r,r,r,r,r,new B.bV(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a7),A.bi,r,r),1.6+s*0.15,r,r),r),0,0,0),B.eI(A.A,s*0.06,B.e2(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fSd:function fSd(d,e){this.a=d
this.b=e},
bi0:function bi0(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bhI:function bhI(d,e,f){this.b=d
this.c=e
this.a=f},
bqP:function bqP(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcw:function bcw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bc9:function bc9(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bxW:function bxW(d,e,f){this.b=d
this.c=e
this.a=f},
buU:function buU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bu1:function bu1(d,e,f){this.b=d
this.c=e
this.a=f},
bh2:function bh2(d,e,f){this.b=d
this.d=e
this.a=f},
dif:function dif(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ye:function ye(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fSg(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.lu},
ioi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.aZ(j,new C.fSh())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.I)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gH(B.aSJ(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ioh(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a_(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.cW(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.cW(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.j.D(s,0.06,u)}else{d.w=A.j.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.j.D(r*(d.w*0.001)+0.028,0.06,u)},
ahV(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ahV=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fKA(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(A.dU,null,new C.fKB(e),d,!0,!0,!1,A.lW,!1,!1,x.N),$async$ahV)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hQ())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hj0(d),$async$ahV)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.Hz(d,"Search states\u2026","",A.kg,"Choose state"),$async$ahV)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hhP(s)
if(p==null)p=A.d.gH(D.T1)
f=C.cE()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cE()
m=p.e
l=C.fSi(p.d)
k=x.u
j=B.a([C.ev(A.bn,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bq,A.a8,"",1,C.cE(),l,"","",0,!1,"",0,D.bl,4280172719,2,"",0,0,"",D.cv,D.lV,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dp(i,0.016,D.lv,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dp(0,0.058,D.f1,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dp(0,0.058,D.f1,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Lw("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Lw("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.u(k,C.heq(0.2,0.154,0.6,4291404327,i))
A.d.u(k,C.bCK("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.u(k,C.a2C("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.u(k,C.a2C("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.u(k,C.a2C("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.u(k,C.a2C("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.u(k,C.bCK("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dp(m,0.082,D.bl,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cE()
k.push(C.ev(A.bn,!1,i,A.aH,"marriage_field_utangulizi:"+A.j.ad(0.78,3),4280640491,9.5,A.bq,A.cD,"",0.074,g,null,"","",0,!1,"",0,D.bl,4280172719,2,y.O,0,0,"",D.cv,D.d1,0.78,0.11,0.388))
A.d.u(k,C.heq(0.22,0.47,0.56,4291404327,i))
A.d.u(k,C.bCK("MASHAHIDI",0.49,0.26,0.48,i))
A.d.u(k,C.hzO("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.u(k,C.hzO("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.u(k,C.a2C("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.u(k,C.a2C("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.u(k,C.bCJ("witness_mume_1",0.11,0.596,0.37,i))
A.d.u(k,C.bCJ("witness_mke_1",0.52,0.596,0.37,i))
A.d.u(k,C.bCK("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Lw("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Lw("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.u(k,C.bCJ("mchumba_mume",0.11,0.7,0.37,i))
A.d.u(k,C.bCJ("mchumba_mke",0.52,0.7,0.37,i))
A.d.u(k,C.bCK("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.u(k,C.a2C("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.u(k,C.bCJ("witness_mume_2",0.38,0.784,0.26,i))
A.d.u(k,C.a2C("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.heq(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Lw("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Lw("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.u(k,h)
A.d.u(j,k)
a0.$1(C.Cm(null,null,null,null,D.oY,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.t_(m,null,0,0,j,n,D.r4,"","","Hati ya Ndoa",D.dr)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ahV,v)},
fSh:function fSh(){},
fKA:function fKA(){},
fKB:function fKB(d){this.a=d},
fKy:function fKy(d){this.a=d},
fKz:function fKz(d){this.a=d},
icQ(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
icP(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.nh
case"lineThrough":return A.xv
default:return A.aH}},
ev(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eS(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hBW(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.SK[w]
if(v.b===u)return v}return D.dr},
i97(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d61[w]
if(v.b===u)return v}return D.d1},
ifF(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dyl[w]
if(v.b===u)return v}return D.bl},
t_(d,e,f,g,h,i,j,k,l,m,n){return new C.m3(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hsp(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.ib7(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.j.M(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.j.M(s)
r=C.hBW(d.h(0,"transition"))
q=B.aJ(d.h(0,"durationSeconds"))
q=q==null?m:A.j.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aJ(d.h(0,"designRevision"))
o=o==null?m:A.j.M(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.de(n,x.f)
n=B.cF(n,new C.cli(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a3(n).k("M.E"))}return C.t_(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
ib7(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aue[w]
if(v.b===u)return v}return D.nc},
Cm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.hU(p,t,a1,h,i,w,a0==null?B.a([C.t_(4294967295,null,0,0,null,C.cE(),D.r4,"","","",D.dr)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Xe(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i7d(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.j.M(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bh(J.k(s==null?"":s))
if(s==null)s=new B.V(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.z(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.kO(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kO(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aJ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aJ(a6.h(0,"signatureInkColor"))
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
else{f=J.b7(f,new C.cl5(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b7(e,new C.cl6(),x.N)
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
g=B.cF(g,new C.cl7(),g.$ti.k("M.E"),x.bt)
g=B.C(g,B.a3(g).k("M.E"))}return C.Cm(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.t_(4294967295,a3,0,0,a3,C.cE(),D.r4,"","","",D.dr)],x.g):g,v,p,o,s)},
kO(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i7d(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dzi[w]
if(v.b===u)return v}return D.Eh},
cE(){var w=Date.now(),v=$.je
$.je=v+1
return""+1000*w+"_"+v},
clz(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.Ei){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cE()
v=C.ev(A.K,!1,f.d.l(),A.aH,"",n,40,A.bq,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bl,m,2,o,0,0,"",D.cv,D.d1,0.84,0.08,0.3)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.K,!1,f.e.l(),A.aH,"",n,20,A.bq,A.cD,"",0.12,u,p,"","",0,!1,"",0,D.bl,m,2,"Click to add subtitle",0,0,"",D.cv,D.d1,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cE()
v=C.ev(A.bn,!1,f.d.l(),A.aH,"",n,32,A.bq,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bl,m,2,o,0,0,"",D.cv,D.d1,0.88,0.06,0.06)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.bn,!0,f.e.l(),A.aH,"",n,20,A.bq,A.cD,"",0.68,u,p,"","",0,!1,"",0,D.bl,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cv,D.d1,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cE()
v=C.ev(A.bn,!1,f.d.l(),A.aH,"",n,30,A.bq,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bl,m,2,"Two Column Slide",0,0,"",D.cv,D.d1,0.88,0.06,0.06)
u=C.cE()
t=f.e
u=C.ev(A.bn,!0,t.l(),A.aH,"",n,18,A.bq,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bl,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cv,D.d1,0.42,0.06,0.22)
s=C.cE()
A.d.u(w,B.a([v,u,C.ev(A.bn,!0,t.l(),A.aH,"",n,18,A.bq,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bl,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cv,D.d1,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.I(d.z,C.ev(A.K,!1,4294967295,A.aH,"",n,42,A.bq,A.u,"",0.2,C.cE(),p,"","",0,!1,"",0,D.bl,m,2,"Section Header",0,0,"",D.cv,D.d1,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cE()
v=C.ev(A.bn,!1,f.d.l(),A.aH,"",n,30,A.bq,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bl,m,2,"Compare",0,0,"",D.cv,D.d1,0.88,0.06,0.06)
u=C.cE()
t=f.c
u=C.ev(A.bn,!1,l,A.aH,"",t.j(0.12).l(),24,A.bq,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bl,t.l(),2,"",0,0,"",D.cv,D.fi,0.42,0.06,0.22)
s=C.cE()
r=f.e
s=C.ev(A.bn,!1,r.l(),A.aH,"",n,20,A.bq,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bl,m,2,"Option A",0,0,"",D.cv,D.d1,0.38,0.08,0.26)
q=C.cE()
t=C.ev(A.bn,!1,l,A.aH,"",t.j(0.06).l(),24,A.bq,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bl,t.j(0.5).l(),2,"",0,0,"",D.cv,D.fi,0.42,0.52,0.22)
q=C.cE()
A.d.u(w,B.a([v,u,s,t,C.ev(A.bn,!1,r.l(),A.aH,"",n,20,A.bq,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bl,m,2,"Option B",0,0,"",D.cv,D.d1,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cE()
v=C.ev(A.K,!1,f.d.l(),A.aH,"",n,36,A.bq,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bl,m,2,"TERM / QUESTION",0,0,"",D.cv,D.d1,0.8,0.1,0.12)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.K,!1,f.e.l(),A.aH,"",n,22,A.bq,A.cD,"",0.35,u,p,"","",0,!1,"",0,D.bl,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cv,D.d1,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cE()
v=C.ev(A.bn,!1,f.d.l(),A.aH,"",n,28,A.bq,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bl,m,2,"Quiz Question",0,0,"",D.cv,D.d1,0.88,0.06,0.06)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.bn,!1,f.e.l(),A.aH,"",n,20,A.bq,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bl,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cv,D.d1,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cE()
v=C.ev(A.bn,!1,f.d.l(),A.aH,"",n,26,A.bq,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bl,m,2,"Worksheet / Assignment",0,0,"",D.cv,D.d1,0.88,0.06,0.04)
u=C.cE()
A.d.u(w,B.a([v,C.ev(A.bn,!1,f.e.l(),A.aH,"",n,18,A.bq,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bl,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cv,D.d1,0.88,0.06,0.16)],x.u))
break}},
hZE(d){return A.d.dL(D.a64,new C.clA(d),new C.clB())},
hZB(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.V.aP(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aT(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.c6(v,C.Xe(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
haF(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.clv(t)
for(w=J.aT(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.I)(e),++v)s.$1(e[v])
w=t.$ti.k("b8<2>")
u=B.C(new B.b8(t,w),w.k("M.E"))
A.d.aZ(u,new C.clu())
return u},
hss(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.clq()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
at3(d){return C.hZz(d)},
hZz(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$at3=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.clt()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3P(m),$async$at3)
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
return B.b(B.aA(),$async$at3)
case 12:q=f
k=A.a.i(d.toLowerCase())
r=l.$1(B.aV(J.t(q.a,"ngmy_slides_decks_"+k)))
t=2
w=11
break
case 9:t=8
h=s.pop()
w=11
break
case 8:w=2
break
case 11:o=l.$1($.hsr.h(0,m))
n=C.haF(C.haF(j,r),o)
if(n.length===0){u=C.hss(C.hss(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$at3,v)},
clp(d){return C.hZy(d)},
hZy(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$clp=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$clp)
case 7:r=f
q=r.tV("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jC(q,B.U(q).c)
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
return B.i($async$clp,v)},
b3I(d,e){return C.hZA(d,e)},
hZA(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b3I=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b3I)
case 6:s=g
q=s.tV("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.I(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mi(r,J.ad(r)-500):r
w=7
return B.b(s.aC("StringList","ngmy_slides_deleted_"+p,o),$async$b3I)
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
return B.i($async$b3I,v)},
Xf(d,e){return C.hZC(d,e)},
hZC(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Xf=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.hsq.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.at3(a3),$async$Xf)
case 5:p=a6
case 4:w=6
return B.b(C.clp(a3),$async$Xf)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aT(p);m.C();){l=m.gR(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.I)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbt())k=f===g.gbt()&&k.b>g.gcF()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b8<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b8(n,m),new C.clw(o),l),l.k("M.E"))
A.d.aZ(e,new C.clx())
$.hsq.n(0,a0,e)
n=B.U(e).k("N<1,a9<n,@>>")
n=B.C(new B.N(e,new C.cly(),n),n.k("ak.E"))
r=A.V.av(n,null)
$.hsr.n(0,a0,r)
t=8
w=11
return B.b(B.aiI(a0,r),$async$Xf)
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
return B.b(B.aA(),$async$Xf)
case 16:q=a6
w=17
return B.b(q.aC("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Xf)
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
return B.i($async$Xf,v)},
JG:function JG(d,e){this.a=d
this.b=e},
at1:function at1(d,e){this.a=d
this.b=e},
vi:function vi(d,e){this.a=d
this.b=e},
mV:function mV(d,e){this.a=d
this.b=e},
hJ:function hJ(d,e){this.a=d
this.b=e},
eS:function eS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
m3:function m3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
clj:function clj(){},
clk:function clk(){},
cli:function cli(){},
hU:function hU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cl8:function cl8(){},
cl9:function cl9(){},
cl5:function cl5(){},
cl6:function cl6(){},
cl7:function cl7(){},
k1:function k1(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
clA:function clA(d){this.a=d},
clB:function clB(){},
clv:function clv(d){this.a=d},
clu:function clu(){},
clq:function clq(){},
clr:function clr(){},
cls:function cls(){},
clt:function clt(){},
clw:function clw(d){this.a=d},
clx:function clx(){},
cly:function cly(){},
iov(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fSV(e,v,d,B.aR(w))
w.$1(new C.fSR())
w.$1(new C.fSS())
w.$1(new C.fST())
w.$1(new C.fSU())
return v},
fSV:function fSV(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fSR:function fSR(){},
fSS:function fSS(){},
fST:function fST(){},
fSU:function fSU(){},
b3F:function b3F(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cle:function cle(d){this.a=d},
cld:function cld(){},
clf:function clf(){},
clg:function clg(d,e){this.a=d
this.b=e},
clh:function clh(d){this.a=d},
aq2:function aq2(d,e){this.c=d
this.a=e},
blX:function blX(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
dQV:function dQV(){},
aNr:function aNr(){},
clm(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$clm=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fnU)
u=!1
w=1
break}u=B.lg(!1,d,t,!1,null,A.a8T,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$clm,v)},
hZw(d){var w=A.d.bj(D.IB,new C.cln(d))
if(w<0)return!0
return w>=4},
hZx(d){var w=A.d.bj($.bHe(),new C.clo(d))
if(w<0)return!0
return w>=5},
cln:function cln(d){this.a=d},
clo:function clo(d){this.a=d},
iqe(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xs()
$.pZ().pf(t,new C.fVN(s),!0)
u=B.a([B.BV(v,A.pR,t)],x.p)
if(e.length!==0){w=B.l(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fyZ,v,v,v),A.f,v,v,new B.o(A.b5,v,v,w,v,v,A.n),v,v,v,v,A.n6,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b2,A.t,u,v)},
fVN:function fVN(d){this.a=d},
ipQ(){return C.hia()},
imD(){return C.bF9()},
ioO(){return C.hi1()},
aRM(d,e,f){var w=0,v=B.j(x.H),u
var $async$aRM=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fUT(d,f),$async$aRM)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aRM,v)},
fUT(d,e){var w=0,v=B.j(x.H),u
var $async$fUT=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bDi
if(u==null)u=e+".pdf"
w=2
return B.b(B.bU(A.L,null,new C.fUU(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fUT)
case 2:return B.h(null,v)}})
return B.i($async$fUT,v)},
fUU:function fUU(d,e){this.a=d
this.b=e},
aeM:function aeM(d,e,f){this.c=d
this.d=e
this.a=f},
eCX:function eCX(d,e){this.a=d
this.b=e},
eCY:function eCY(d,e){this.a=d
this.b=e},
eCZ:function eCZ(d,e){this.a=d
this.b=e},
eD_:function eD_(d){this.a=d},
af2:function af2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b3E(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b3D(g,m,f,d,e,h,l,k,j,o,i,null)},
hFh(d){return B.cn(new C.fSQ(d))},
hic(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ipY(d){if(d===D.cv)return"None"
return C.hic(d)},
bDP(d,e,f,g){return C.ifM(d,e,f,g)},
ifM(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bDP=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.heK&&t.pZ())t.eu()
$.heK=!0
s.a=null
w=3
return B.b(B.hO(A.bp,!0,"Animation preview",d,new C.fBj(s,e,g,f),null,A.eH,!0,x.H),$async$bDP)
case 3:s=s.a
if(s!=null)s.a1(0)
$.heK=!1
case 1:return B.h(u,v)}})
return B.i($async$bDP,v)},
h4O(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h4O=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.D(B.aF(d,A.c_,x.w).w.a.a*0.88,280,440)
s=f===D.cv
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hic(f)+" Slide transition preview"
s=s?Ai.GW:A.qA
w=3
return B.b(C.bDP(d,s,new B.a4(t,t*0.56,B.bu(B.l(14),new C.aKY(f,null),A.aq),null),r),$async$h4O)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h4O,v)},
hEx(d,e,f){var w,v,u=null,t=A.ck.aB(0,A.j.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d3(f,t)
case 2:case 17:return B.dP(B.d3(f,t),new B.r((1-t)*48,0))
case 3:return B.dP(B.d3(f,t),new B.r(-(1-t)*48,0))
case 4:case 21:return B.dP(B.d3(f,t),new B.r(0,(1-t)*36))
case 5:return B.dP(B.d3(f,t),new B.r(0,-(1-t)*36))
case 6:case 16:return B.e2(A.A,B.d3(f,t),0.5+t*0.5,u,u)
case 7:return B.e2(A.A,B.d3(f,t),1.4-t*0.4,u,u)
case 8:w=B.dq()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fG((1-t)*1.2)
return B.fB(A.A,B.d3(f,t),u,w,!0)
case 9:w=B.dq()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.k0((1-t)*1.2)
return B.fB(A.A,B.d3(f,t),u,w,!0)
case 10:case 19:w=B.dq()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n3((1-t)*0.8)
v=0.6+t*0.4
w.k6(v,v,v,1)
return B.fB(A.A,B.d3(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.d3(f,t),new B.r((1-t)*24,0))}},
bGI(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bGI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.j.D(B.aF(d,A.c_,x.w).w.a.a*0.88,300,440)
s=f===D.cv
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hic(f)+" Element animation preview"
s=s?Ai.GW:A.qA
w=3
return B.b(C.bDP(d,s,new B.a4(t,t*0.62,B.bu(B.l(14),new C.aBz(f,null),A.aq),null),r),$async$bGI)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bGI,v)},
ipX(d){var w,v,u,t,s=$.aho.W(0,d)
if(s!=null){$.aho.n(0,d,s)
return s}w=A.cK.aO(A.a.b2(d,A.a.cn(d,",")+1))
$.aho.n(0,d,w)
v=$.hfD=$.hfD+w.length
u=B.a3($.aho).k("cx<1>")
for(;;){if(!(v>41943040&&$.aho.a>1))break
t=new B.cx($.aho,u).gae(0)
if(!t.C())B.bk(B.fs())
v-=$.aho.W(0,t.gR(0)).length
$.hfD=v}return w},
ipC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kZ(0,d),j=B.C(k,B.a3(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.I)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.az(d,r,o)
m=f.$1(e)
v.push(new B.eq(n,l,l,A.cL,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TI(s,A.u))
v.push(new B.eq(n,l,l,A.cL,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TI(t,A.u))
v.push(new B.eq(n,l,l,A.cL,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TI(u,A.cD))
v.push(new B.eq(n,l,l,A.cL,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
v.push(B.cQ(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3O(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aI($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.jv(e))
return m
case"rounded":m=new B.aI($.S().r,A.aj,n,n,B.a([],m))
w=e.gdm()*0.18
m.E(new B.ja(B.bx(e,new B.aP(w,w))))
return m
case"triangle":m=new B.aI($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.aZ(e.gbD().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bw())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aI(w.r,A.aj,n,n,m)
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
v.ab()}}v.E(new B.bw())
return v
case"diamond":m=new B.aI($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.aZ(e.gbD().a,e.b))
m.E(new B.aq(e.c,e.gbD().b))
m.E(new B.aq(e.gbD().a,e.d))
m.E(new B.aq(e.a,e.gbD().b))
m.E(new B.bw())
return m
case"arch":m=new B.aI($.S().r,A.aj,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.bdN(new B.r(t,p),new B.aP(s,s))
m.E(new B.aq(t,u))
m.E(new B.bw())
return m
default:m=new B.aI($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.oA(e))
return m}},
fQj(d,e,f){return B.cn(new C.fQk(D.fg0.q(0,d),d,f,e))},
b3D:function b3D(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
clc:function clc(d){this.a=d},
clb:function clb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cla:function cla(){},
b3A:function b3A(d,e){this.b=d
this.a=e},
fSQ:function fSQ(d){this.a=d},
fSP:function fSP(d,e){this.a=d
this.b=e},
fBj:function fBj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBh:function fBh(d){this.a=d},
fBi:function fBi(d,e){this.a=d
this.b=e},
aKY:function aKY(d,e){this.c=d
this.a=e},
bxq:function bxq(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fi2:function fi2(d,e,f){this.a=d
this.b=e
this.c=f},
aLF:function aLF(d,e){this.b=d
this.a=e},
Wl:function Wl(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bma:function bma(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e1K:function e1K(d){this.a=d},
e1J:function e1J(d){this.a=d},
e1I:function e1I(d){this.a=d},
JF:function JF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cl4:function cl4(d){this.a=d},
cl3:function cl3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBz:function aBz(d,e){this.c=d
this.a=e},
bgt:function bgt(){this.d=0
this.c=this.a=null},
dfs:function dfs(d){this.a=d},
dfr:function dfr(d){this.a=d},
a93:function a93(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmR:function bmR(d,e){var _=this
_.d=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
eqj:function eqj(d,e,f){this.a=d
this.b=e
this.c=f},
b1z:function b1z(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bhG:function bhG(d,e,f){this.b=d
this.c=e
this.a=f},
bsV:function bsV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f6X:function f6X(){},
fQk:function fQk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
btZ:function btZ(d,e,f){this.b=d
this.c=e
this.a=f},
aNH:function aNH(){},
aOb:function aOb(){},
aPv:function aPv(){},
fTR(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fTR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xO.cp().MO(D.dw9,A.uO,!0),$async$fTR)
case 3:r=e
if(r==null||J.ct(r.a)){u=null
w=1
break}t=J.fq(r.a)
s=t.c
if(s==null)throw B.W("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.W("That file is too big. Use a file under 8 MB.")
u=C.ipw(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fTR,v)},
ipw(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a9m(d,new B.a1m(A.cV.gcu().aO(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.ihq(e)
if(A.a.i(w).length===0)throw B.W("No readable words were found in that Word file.")
return new C.a9m(d,null,w.length>6e4?A.a.az(w,0,6e4):w)}w=A.ca.LA(0,e,!0)
if(A.a.i(w).length===0)throw B.W("That file is empty.")
return new C.a9m(d,null,w.length>6e4?A.a.az(w,0,6e4):w)},
ihq(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cH6().cQS(B.rJ(d,A.is,o,o),o,o,!1).cSN(0,"word/document.xml")
if(n==null)return""
w=n.d_X()
v=A.ca.LA(0,w==null?$.hHX():w,!0).split("</w:p>")
u=new B.fg("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kZ(0,r)
p=A.a.i(B.cF(q,new C.fEo(),B.a3(q).k("M.E"),t).hf(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a9m:function a9m(d,e,f){this.a=d
this.b=e
this.c=f},
fEo:function fEo(){},
hZD(d,e,f,g,h,i,j,k,l){return new C.OV(l,e,d,g,f,i,h,j,k,null)},
OV:function OV(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGt:function aGt(d,e,f,g,h,i,j,k,l){var _=this
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
_.bw$=k
_.a9$=l
_.c=_.a=null},
eJb:function eJb(d){this.a=d},
eJ9:function eJ9(){},
eJa:function eJa(d){this.a=d},
eFz:function eFz(){},
eFA:function eFA(){},
eFB:function eFB(d,e){this.a=d
this.b=e},
eH9:function eH9(d){this.a=d},
eGY:function eGY(){},
eGZ:function eGZ(){},
eEX:function eEX(){},
eIh:function eIh(d){this.a=d},
eJ7:function eJ7(d,e){this.a=d
this.b=e},
eH7:function eH7(d,e){this.a=d
this.b=e},
eIV:function eIV(d){this.a=d},
eIW:function eIW(){},
eIX:function eIX(){},
eIY:function eIY(d){this.a=d},
eIZ:function eIZ(){},
eEl:function eEl(d){this.a=d},
eJ8:function eJ8(){},
eGg:function eGg(d,e){this.a=d
this.b=e},
eEj:function eEj(d){this.a=d},
eEk:function eEk(d){this.a=d},
eGD:function eGD(d){this.a=d},
eGE:function eGE(d,e,f){this.a=d
this.b=e
this.c=f},
eGF:function eGF(d){this.a=d},
eGf:function eGf(){},
eGe:function eGe(d){this.a=d},
eGc:function eGc(){},
eGb:function eGb(d){this.a=d},
eGd:function eGd(){},
eFv:function eFv(d){this.a=d},
eFw:function eFw(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGh:function eGh(d){this.a=d},
eGi:function eGi(d){this.a=d},
eGj:function eGj(d){this.a=d},
eGk:function eGk(d){this.a=d},
eGl:function eGl(d){this.a=d},
eGn:function eGn(d,e){this.a=d
this.b=e},
eEn:function eEn(){},
eEo:function eEo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGy:function eGy(){},
eGz:function eGz(d,e){this.a=d
this.b=e},
eGw:function eGw(d,e,f){this.a=d
this.b=e
this.c=f},
eGx:function eGx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGq:function eGq(d,e,f){this.a=d
this.b=e
this.c=f},
eGr:function eGr(d,e,f){this.a=d
this.b=e
this.c=f},
eGs:function eGs(d){this.a=d},
eGt:function eGt(d,e){this.a=d
this.b=e},
eGu:function eGu(d,e){this.a=d
this.b=e},
eGv:function eGv(d,e){this.a=d
this.b=e},
eGp:function eGp(d,e){this.a=d
this.b=e},
eGB:function eGB(d){this.a=d},
eGC:function eGC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eGA:function eGA(d){this.a=d},
eGT:function eGT(){},
eGU:function eGU(){},
eGV:function eGV(){},
eGW:function eGW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGQ:function eGQ(d){this.a=d},
eGS:function eGS(){},
eGR:function eGR(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eGO:function eGO(d,e,f){this.a=d
this.b=e
this.c=f},
eGP:function eGP(d,e){this.a=d
this.b=e},
eGX:function eGX(){},
eGo:function eGo(d,e){this.a=d
this.b=e},
eEE:function eEE(){},
eEF:function eEF(d,e,f){this.a=d
this.b=e
this.c=f},
eEG:function eEG(d){this.a=d},
eEH:function eEH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eED:function eED(d){this.a=d},
eH2:function eH2(d){this.a=d},
eH1:function eH1(d,e){this.a=d
this.b=e},
eH0:function eH0(d,e){this.a=d
this.b=e},
eH_:function eH_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH3:function eH3(d,e){this.a=d
this.b=e},
eDh:function eDh(d,e){this.a=d
this.b=e},
eEC:function eEC(d,e){this.a=d
this.b=e},
eEA:function eEA(d){this.a=d},
eHb:function eHb(d,e,f){this.a=d
this.b=e
this.c=f},
eEw:function eEw(d,e){this.a=d
this.b=e},
eEv:function eEv(d){this.a=d},
eHa:function eHa(d,e,f){this.a=d
this.b=e
this.c=f},
eEm:function eEm(d){this.a=d},
eEY:function eEY(){},
eIT:function eIT(d,e){this.a=d
this.b=e},
eIU:function eIU(d,e,f){this.a=d
this.b=e
this.c=f},
eIi:function eIi(d,e,f){this.a=d
this.b=e
this.c=f},
eDi:function eDi(d){this.a=d},
eDf:function eDf(d,e){this.a=d
this.b=e},
eD5:function eD5(d,e){this.a=d
this.b=e},
eD2:function eD2(d){this.a=d},
eD1:function eD1(d,e){this.a=d
this.b=e},
eD3:function eD3(d,e){this.a=d
this.b=e},
eEy:function eEy(d){this.a=d},
eEz:function eEz(d,e){this.a=d
this.b=e},
eEx:function eEx(d){this.a=d},
eDK:function eDK(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eDL:function eDL(d,e){this.a=d
this.b=e},
eDP:function eDP(d,e){this.a=d
this.b=e},
eDQ:function eDQ(d){this.a=d},
eDN:function eDN(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eDO:function eDO(d){this.a=d},
eDM:function eDM(){},
eDJ:function eDJ(d,e,f){this.a=d
this.b=e
this.c=f},
eGN:function eGN(d,e){this.a=d
this.b=e},
eJ1:function eJ1(d){this.a=d},
eJ2:function eJ2(d,e){this.a=d
this.b=e},
eJ3:function eJ3(d){this.a=d},
eJ4:function eJ4(d,e,f){this.a=d
this.b=e
this.c=f},
eJ0:function eJ0(d){this.a=d},
eIy:function eIy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIx:function eIx(d,e,f){this.a=d
this.b=e
this.c=f},
eIw:function eIw(){},
eIv:function eIv(d,e,f){this.a=d
this.b=e
this.c=f},
eIu:function eIu(d,e){this.a=d
this.b=e},
eIr:function eIr(d,e,f){this.a=d
this.b=e
this.c=f},
eIp:function eIp(d){this.a=d},
eIq:function eIq(d){this.a=d},
eIt:function eIt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eIs:function eIs(d){this.a=d},
eFr:function eFr(d,e){this.a=d
this.b=e},
eFq:function eFq(d,e){this.a=d
this.b=e},
eIj:function eIj(){},
eIS:function eIS(d,e){this.a=d
this.b=e},
eIQ:function eIQ(d){this.a=d},
eIR:function eIR(d){this.a=d},
eDa:function eDa(d,e){this.a=d
this.b=e},
eD8:function eD8(d){this.a=d},
eD9:function eD9(d){this.a=d},
eDb:function eDb(d,e){this.a=d
this.b=e},
eDc:function eDc(d,e,f){this.a=d
this.b=e
this.c=f},
eDg:function eDg(d,e){this.a=d
this.b=e},
eD7:function eD7(d,e,f){this.a=d
this.b=e
this.c=f},
eD6:function eD6(d){this.a=d},
eH8:function eH8(d,e,f){this.a=d
this.b=e
this.c=f},
eJ_:function eJ_(d,e,f){this.a=d
this.b=e
this.c=f},
eFu:function eFu(d,e,f){this.a=d
this.b=e
this.c=f},
eFt:function eFt(){},
eDT:function eDT(d,e,f){this.a=d
this.b=e
this.c=f},
eDU:function eDU(d){this.a=d},
eD4:function eD4(d,e){this.a=d
this.b=e},
eEW:function eEW(d,e){this.a=d
this.b=e},
eDd:function eDd(d,e){this.a=d
this.b=e},
eDm:function eDm(d){this.a=d},
eDn:function eDn(d,e){this.a=d
this.b=e},
eDo:function eDo(d,e){this.a=d
this.b=e},
eDl:function eDl(d){this.a=d},
eDz:function eDz(d,e){this.a=d
this.b=e},
eDk:function eDk(d){this.a=d},
eDC:function eDC(d){this.a=d},
eDD:function eDD(d){this.a=d},
eDE:function eDE(d){this.a=d},
eDF:function eDF(d){this.a=d},
eDG:function eDG(d){this.a=d},
eDH:function eDH(){},
eDI:function eDI(){},
eDp:function eDp(d){this.a=d},
eDq:function eDq(d){this.a=d},
eDr:function eDr(d){this.a=d},
eDs:function eDs(d){this.a=d},
eDt:function eDt(d){this.a=d},
eDu:function eDu(d){this.a=d},
eDv:function eDv(d){this.a=d},
eDw:function eDw(d){this.a=d},
eDx:function eDx(d){this.a=d},
eDy:function eDy(d){this.a=d},
eDA:function eDA(d){this.a=d},
eDB:function eDB(d,e){this.a=d
this.b=e},
eEV:function eEV(d,e,f){this.a=d
this.b=e
this.c=f},
eEU:function eEU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eET:function eET(d,e,f){this.a=d
this.b=e
this.c=f},
eES:function eES(d,e){this.a=d
this.b=e},
eDe:function eDe(d,e){this.a=d
this.b=e},
eDX:function eDX(d){this.a=d},
eDW:function eDW(d){this.a=d},
eDV:function eDV(d,e){this.a=d
this.b=e},
eDY:function eDY(d){this.a=d},
eDZ:function eDZ(d){this.a=d},
eE_:function eE_(){},
eE0:function eE0(d,e){this.a=d
this.b=e},
eEB:function eEB(d){this.a=d},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGK:function eGK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eGI:function eGI(d){this.a=d},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
eGG:function eGG(){},
eGH:function eGH(){},
eIk:function eIk(){},
eIl:function eIl(d,e,f){this.a=d
this.b=e
this.c=f},
eIm:function eIm(){},
eIn:function eIn(d){this.a=d},
eIo:function eIo(d,e){this.a=d
this.b=e},
eDj:function eDj(d,e){this.a=d
this.b=e},
eEp:function eEp(){},
eEq:function eEq(){},
eEr:function eEr(){},
eEu:function eEu(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEt:function eEt(d,e){this.a=d
this.b=e},
eEs:function eEs(d,e,f){this.a=d
this.b=e
this.c=f},
eFV:function eFV(d){this.a=d},
eFU:function eFU(){},
eFW:function eFW(d,e){this.a=d
this.b=e},
eFX:function eFX(d,e){this.a=d
this.b=e},
eFT:function eFT(d){this.a=d},
eFY:function eFY(d,e){this.a=d
this.b=e},
eFS:function eFS(d){this.a=d},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eFR:function eFR(d){this.a=d},
eG_:function eG_(d,e){this.a=d
this.b=e},
eFQ:function eFQ(d){this.a=d},
eG0:function eG0(d,e){this.a=d
this.b=e},
eFP:function eFP(d,e){this.a=d
this.b=e},
eG1:function eG1(d,e){this.a=d
this.b=e},
eFO:function eFO(d){this.a=d},
eG2:function eG2(d,e){this.a=d
this.b=e},
eFN:function eFN(d){this.a=d},
eFG:function eFG(d,e){this.a=d
this.b=e},
eFH:function eFH(d){this.a=d},
eFI:function eFI(d){this.a=d},
eFF:function eFF(d){this.a=d},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFE:function eFE(d){this.a=d},
eFK:function eFK(d,e){this.a=d
this.b=e},
eFD:function eFD(d){this.a=d},
eFL:function eFL(d,e){this.a=d
this.b=e},
eFC:function eFC(d){this.a=d},
eFM:function eFM(d){this.a=d},
eEO:function eEO(d){this.a=d},
eEP:function eEP(d){this.a=d},
eER:function eER(d){this.a=d},
eEJ:function eEJ(d){this.a=d},
eEI:function eEI(d,e){this.a=d
this.b=e},
eEK:function eEK(d,e){this.a=d
this.b=e},
eEL:function eEL(d){this.a=d},
eEM:function eEM(d){this.a=d},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEQ:function eEQ(d){this.a=d},
eJ5:function eJ5(d){this.a=d},
eJ6:function eJ6(d){this.a=d},
eG5:function eG5(d,e){this.a=d
this.b=e},
eG4:function eG4(d,e){this.a=d
this.b=e},
eG3:function eG3(d,e){this.a=d
this.b=e},
eG6:function eG6(d){this.a=d},
eG7:function eG7(d){this.a=d},
eHu:function eHu(d,e){this.a=d
this.b=e},
eHv:function eHv(d){this.a=d},
eHw:function eHw(d){this.a=d},
eHH:function eHH(d){this.a=d},
eHS:function eHS(d){this.a=d},
eI2:function eI2(d){this.a=d},
eI9:function eI9(d){this.a=d},
eIa:function eIa(d){this.a=d},
eIb:function eIb(d){this.a=d},
eIc:function eIc(d){this.a=d},
eId:function eId(d,e){this.a=d
this.b=e},
eHx:function eHx(d){this.a=d},
eHy:function eHy(d){this.a=d},
eHz:function eHz(d){this.a=d},
eHA:function eHA(d){this.a=d},
eHB:function eHB(d){this.a=d},
eHC:function eHC(d){this.a=d},
eHD:function eHD(d){this.a=d},
eHE:function eHE(d){this.a=d},
eHF:function eHF(d){this.a=d},
eHG:function eHG(d){this.a=d},
eHI:function eHI(d){this.a=d},
eHJ:function eHJ(d){this.a=d},
eHK:function eHK(d){this.a=d},
eHL:function eHL(d){this.a=d},
eHM:function eHM(d){this.a=d},
eHN:function eHN(d){this.a=d},
eHO:function eHO(d){this.a=d},
eHP:function eHP(d){this.a=d},
eHQ:function eHQ(d){this.a=d},
eHk:function eHk(d){this.a=d},
eHR:function eHR(d){this.a=d},
eHs:function eHs(d){this.a=d},
eHT:function eHT(d){this.a=d},
eHr:function eHr(d,e){this.a=d
this.b=e},
eHU:function eHU(d,e){this.a=d
this.b=e},
eHV:function eHV(d,e){this.a=d
this.b=e},
eHq:function eHq(d,e,f){this.a=d
this.b=e
this.c=f},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHt:function eHt(d){this.a=d},
eIe:function eIe(d,e){this.a=d
this.b=e},
eIg:function eIg(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eIf:function eIf(d,e){this.a=d
this.b=e},
eHW:function eHW(d,e,f){this.a=d
this.b=e
this.c=f},
eHp:function eHp(d,e,f){this.a=d
this.b=e
this.c=f},
eHf:function eHf(d,e,f){this.a=d
this.b=e
this.c=f},
eHd:function eHd(d,e){this.a=d
this.b=e},
eHX:function eHX(d,e){this.a=d
this.b=e},
eHo:function eHo(d,e){this.a=d
this.b=e},
eHe:function eHe(d,e){this.a=d
this.b=e},
eHc:function eHc(d,e){this.a=d
this.b=e},
eHY:function eHY(d){this.a=d},
eHn:function eHn(d){this.a=d},
eHZ:function eHZ(d){this.a=d},
eI_:function eI_(d){this.a=d},
eI0:function eI0(d){this.a=d},
eI1:function eI1(d){this.a=d},
eHm:function eHm(d){this.a=d},
eI3:function eI3(d){this.a=d},
eI4:function eI4(d){this.a=d},
eI5:function eI5(d,e){this.a=d
this.b=e},
eHl:function eHl(d){this.a=d},
eI6:function eI6(d,e){this.a=d
this.b=e},
eHj:function eHj(d){this.a=d},
eI7:function eI7(d,e){this.a=d
this.b=e},
eHi:function eHi(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
eHh:function eHh(d){this.a=d},
eDS:function eDS(d,e,f){this.a=d
this.b=e
this.c=f},
eDR:function eDR(d,e){this.a=d
this.b=e},
eIB:function eIB(d,e){this.a=d
this.b=e},
eIA:function eIA(d,e){this.a=d
this.b=e},
eIC:function eIC(d,e){this.a=d
this.b=e},
eIz:function eIz(d,e){this.a=d
this.b=e},
eF0:function eF0(d,e){this.a=d
this.b=e},
eF_:function eF_(d){this.a=d},
eF1:function eF1(d,e){this.a=d
this.b=e},
eEZ:function eEZ(d){this.a=d},
eFy:function eFy(){},
eFx:function eFx(){},
eIO:function eIO(d){this.a=d},
eIN:function eIN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eIM:function eIM(d,e){this.a=d
this.b=e},
eIH:function eIH(d,e){this.a=d
this.b=e},
eIL:function eIL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eII:function eII(d,e){this.a=d
this.b=e},
eID:function eID(d){this.a=d},
eIE:function eIE(d){this.a=d},
eIF:function eIF(d){this.a=d},
eIG:function eIG(d){this.a=d},
eIJ:function eIJ(d,e){this.a=d
this.b=e},
eIK:function eIK(d,e){this.a=d
this.b=e},
eIP:function eIP(d){this.a=d},
eEi:function eEi(d){this.a=d},
eEh:function eEh(d,e,f){this.a=d
this.b=e
this.c=f},
eEg:function eEg(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE5:function eE5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eE6:function eE6(d,e){this.a=d
this.b=e},
eE7:function eE7(d,e){this.a=d
this.b=e},
eE8:function eE8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE4:function eE4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE9:function eE9(d,e){this.a=d
this.b=e},
eEb:function eEb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEa:function eEa(d,e){this.a=d
this.b=e},
eEc:function eEc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eE3:function eE3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEd:function eEd(d,e){this.a=d
this.b=e},
eE2:function eE2(d,e){this.a=d
this.b=e},
eEe:function eEe(d,e){this.a=d
this.b=e},
eE1:function eE1(d){this.a=d},
eEf:function eEf(d,e){this.a=d
this.b=e},
eG9:function eG9(d){this.a=d},
eG8:function eG8(d){this.a=d},
eGa:function eGa(d,e){this.a=d
this.b=e},
eFe:function eFe(d,e){this.a=d
this.b=e},
eFf:function eFf(d,e){this.a=d
this.b=e},
eFd:function eFd(d,e){this.a=d
this.b=e},
eFg:function eFg(d,e){this.a=d
this.b=e},
eFc:function eFc(d,e){this.a=d
this.b=e},
eFh:function eFh(d,e){this.a=d
this.b=e},
eFb:function eFb(d,e){this.a=d
this.b=e},
eFi:function eFi(d,e){this.a=d
this.b=e},
eFa:function eFa(d,e){this.a=d
this.b=e},
eFj:function eFj(d,e){this.a=d
this.b=e},
eF9:function eF9(d,e){this.a=d
this.b=e},
eFk:function eFk(d,e,f){this.a=d
this.b=e
this.c=f},
eF8:function eF8(d,e){this.a=d
this.b=e},
eFl:function eFl(d,e,f){this.a=d
this.b=e
this.c=f},
eF7:function eF7(d,e){this.a=d
this.b=e},
eFm:function eFm(d,e){this.a=d
this.b=e},
eF6:function eF6(d,e,f){this.a=d
this.b=e
this.c=f},
eF3:function eF3(d,e){this.a=d
this.b=e},
eFn:function eFn(d,e){this.a=d
this.b=e},
eF5:function eF5(d,e){this.a=d
this.b=e},
eFo:function eFo(d,e){this.a=d
this.b=e},
eF4:function eF4(d,e,f){this.a=d
this.b=e
this.c=f},
eF2:function eF2(d,e){this.a=d
this.b=e},
eFp:function eFp(d,e){this.a=d
this.b=e},
eFs:function eFs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eD0:function eD0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eH6:function eH6(d,e){this.a=d
this.b=e},
eH4:function eH4(d){this.a=d},
eH5:function eH5(d,e){this.a=d
this.b=e},
agz:function agz(d,e,f){this.a=d
this.b=e
this.c=f},
aAW:function aAW(d,e,f){this.c=d
this.e=e
this.a=f},
bff:function bff(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b7$=e
_.c=_.a=null},
daU:function daU(d){this.a=d},
daT:function daT(d){this.a=d},
bfu:function bfu(d,e){this.c=d
this.a=e},
dbh:function dbh(d){this.a=d},
dbi:function dbi(d){this.a=d},
KI:function KI(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfe:function bfe(){this.d=!1
this.c=this.a=null},
daR:function daR(d){this.a=d},
daN:function daN(d){this.a=d},
daS:function daS(d){this.a=d},
daM:function daM(d){this.a=d},
daQ:function daQ(d){this.a=d},
daO:function daO(d){this.a=d},
daP:function daP(d,e){this.a=d
this.b=e},
QE:function QE(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0R:function a0R(d,e,f){this.c=d
this.d=e
this.a=f},
aGw:function aGw(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bw$=e
_.a9$=f
_.c=_.a=null},
eJM:function eJM(){},
eJC:function eJC(d){this.a=d},
eJL:function eJL(d){this.a=d},
eJD:function eJD(d){this.a=d},
eJE:function eJE(d){this.a=d},
eJy:function eJy(d){this.a=d},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJA:function eJA(d){this.a=d},
eJB:function eJB(d,e,f){this.a=d
this.b=e
this.c=f},
eJJ:function eJJ(){},
eJK:function eJK(d){this.a=d},
eJF:function eJF(d){this.a=d},
eJG:function eJG(d){this.a=d},
eJH:function eJH(d){this.a=d},
eJI:function eJI(d){this.a=d},
eJN:function eJN(d,e,f){this.a=d
this.b=e
this.c=f},
eJP:function eJP(d,e){this.a=d
this.b=e},
eJO:function eJO(d){this.a=d},
KO:function KO(d,e){this.c=d
this.a=e},
buu:function buu(d,e){this.b=d
this.a=e},
bke:function bke(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkd:function bkd(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aMm:function aMm(){},
aOo:function aOo(){},
bAi:function bAi(){},
aOp:function aOp(){},
fVO(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fVO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xO.cp().MO(B.a(["pdf"],x.s),A.uO,!0),$async$fVO)
case 3:q=e
if(q==null||J.ct(q.a)){u=null
w=1
break}t=J.fq(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.brB(s,"data:application/pdf;base64,"+A.cV.gcu().aO(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVO,v)},
iq8(d){var w,v,u,t,s,r
try{w=B.jM(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cD(w)
if(v!=null){s=v.b[1]
s.toString
u=B.ca(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kZ(0,w).gJ(0)
if(t>0){s=J.ajg(t,1,200)
return s}}catch(r){}return 1},
fVF(d){return C.iq7(d)},
iq7(d){var w=0,v=B.j(x.T),u
var $async$fVF=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVF,v)},
bFW(d,e,f,g){return C.iqh(d,e,f,g)},
iqh(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bFW=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.eb(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.j.D(b5.a,80,2400)
q=A.j.D(b5.b,80,2400)
p=B.hFT(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jk(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jk(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jk(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jk(b0),a9)}o=A.j.D(o-0.04,0,1)
n=A.j.D(n-0.04,0,1)
m=A.j.D(m+0.04,0,1)
l=A.j.D(l+0.04,0,1)
j=A.j.D(m-o,0.12,1)
i=A.j.D(l-n,0.12,1)
h=A.o.D(A.j.V(800*(i/j)),180,420)
$.S()
g=new B.q2(new B.pD())
f=B.zs(g,null)
a7=B.L()
a7.r=A.rE.gp(0)
f.aD(new B.a6(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bF
b1.e=A.dQ
b1.b=A.ab
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.I)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.r((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o4()
w=7
return B.b(a3.xI(800,h),$async$bFW)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hi(A.he),$async$bFW)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eQ(A.dK.gaU(a5))
a7=A.cV.gcu().aO(a7)
u="data:image/png;base64,"+a7
w=1
break
t=2
w=6
break
case 4:t=3
b3=s.pop()
a6=B.ac(b3)
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
return B.i($async$bFW,v)},
aSj(d,e,f){return C.iq5(d,e,f)},
iq5(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aSj=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.aiW(d,e,f,new C.fVD(r,q),q,"Sign document"),$async$aSj)
case 3:if(!new B.eb(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bFW(q,t,r.b,r.c),$async$aSj)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b3H(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSj,v)},
iqf(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hyt(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hyt(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.b_(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
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
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.lV&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hy4(q.ay)+";border:2px solid "+C.hy4(q.ch)+'"></div>'
break
case 5:l=C.hh2(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.galn()
if(p==null)p=A.aCF
n=B.U(p)
k=n.k("iz<1>")
j=new B.iz(p,0,8,k)
j.n9(p,0,8,n.c)
j=new B.bQ(j,j.gJ(0),k.k("bQ<ak.E>"))
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
hy4(d){var w=A.o.aJ(d,24)
return"rgba("+(A.o.aJ(d,16)&255)+","+(A.o.aJ(d,8)&255)+","+(d&255)+","+A.j.ad((w&255)/255,3)+")"},
hyt(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bFU(d,e){var w=0,v=B.j(x.H)
var $async$bFU=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fVM(e,C.iqf(e),d),d,null,!0,!0,x.H),$async$bFU)
case 2:return B.h(null,v)}})
return B.i($async$bFU,v)},
bFV(){var w=0,v=B.j(x.T),u,t,s
var $async$bFV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A2.Hs(92,2400),$async$bFV)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fVF(s),$async$bFV)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFV,v)},
aSk(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aSk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hih(d),$async$aSk)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A4.fYs(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSk,v)},
hso(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b3H:function b3H(d,e,f){this.a=d
this.b=e
this.c=f},
fVD:function fVD(d,e){this.a=d
this.b=e},
fVM:function fVM(d,e,f){this.a=d
this.b=e
this.c=f},
fVJ:function fVJ(d){this.a=d},
fVK:function fVK(d,e,f){this.a=d
this.b=e
this.c=f},
fVL:function fVL(d,e,f){this.a=d
this.b=e
this.c=f},
iq6(d){return C.kO(d.w)},
iqd(d){var w,v,u,t
if(d.length===0||!A.d.cC(d,C.irS()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zd(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hMg()
if(w.b.test(u))return u
return null},
hFV(d,e,f){var w,v,u=C.hVf(d),t=$.ov()
for(w=0;w<80;++w){v=u+A.a.b_(A.o.v(t.aw(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b_(A.o.v(Date.now()%1000),3,"0")},
iqj(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aT(d.a),v=new B.eJ(w,d.b);v.C();){u=w.gR(w).y
t=C.zd(u==null?"":u)
if(t!=null)s.I(0,t)}return s},
fVB(d,e){var w,v=d.y,u=C.zd(v==null?"":v)
if(u!=null)return d.y=u
w=C.iqj(new B.Y(e,new C.fVC(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hFV(v==null?"":v,null,w)},
iqi(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.kO(w.w))return null
v=w.y
return C.zd(v==null?"":v)},
hZF(){var w,v=$.ov(),u=J.e4(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.hf(u)},
Xi(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Xi=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Xi)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f5("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bN),$async$Xi)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
w=1
break}q=J.t(r,"stashes")
if(x.f.b(q)){o=B.a1(q,x.N,x.z)
u=o
w=1
break}t=2
w=7
break
case 5:t=4
m=s.pop()
p=B.ac(m)
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
return B.i($async$Xi,v)},
Xj(d){return C.hZG(d)},
hZG(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xj=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Xj)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hN("ngmy_slides_transfer_qr_stashes_v1",B.J(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().af()],x.N,x.z),!1,!1,A.cO,null),$async$Xj)
case 8:t=2
w=7
break
case 5:t=4
p=s.pop()
r=B.ac(p)
$.am.$1("[slides qr stash] save: "+B.w(r))
w=7
break
case 4:w=2
break
case 7:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Xj,v)},
a9o(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9o=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a9o)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Xi(),$async$a9o)
case 4:s=a6
r=C.zd(a2==null?"":a2)
if(r==null)r=a3!=null?C.hFV(a3,null,A.M):null
q=x.N
p=B.aR(q)
for(o=J.dp(s),n=J.aT(o.ghJ(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zd(J.k(k==null?"":k))
if(j!=null)p.I(0,j)}n=o.gdP(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dT.aO(t)
g.n(0,"payload",A.cV.gcu().aO(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().af())
if(D.Vb.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zd(J.k(q==null?"":q))
if(f==null)f=C.hst(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xj(s),$async$a9o)
case 7:u=new B.aI_(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hZF()
n=r==null
d=n?C.hst(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dT.aO(t)
q.n(0,"payload",A.cV.gcu().aO(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().af())
if(D.Vb.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xj(s),$async$a9o)
case 8:u=new B.aI_(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9o,v)},
hst(d){var w,v,u=$.ov()
for(w=0;w<200;++w){v="SL"+A.a.b_(A.o.v(u.aw(1000)),3,"0")
if(d.I(0,v))return v}return"SL"+A.a.b_(A.o.v(Date.now()%1000),3,"0")},
at5(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$at5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$at5)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Xi(),$async$at5)
case 6:t=f
s=J.a7(t)
r=s.gJ(t)
s.bq(t,new C.clC(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xj(t),$async$at5)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$at5,v)},
at4(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$at4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zd(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$at4)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Xi(),$async$at4)
case 6:t=o.i5(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zd(J.k(q==null?"":q))===p){u=C.a9n(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$at4,v)},
a9n(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a9n=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a9n)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Xi(),$async$a9n)
case 6:p=a1
o=J.a7(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a7(n)
k=B.aJ(l.h(n,"usesRemaining"))
j=k==null?null:A.j.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.ca.cI(0,A.cK.aO(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Vb.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.V.aP(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.V.av(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dL(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().af())
o.n(p,g,l)}w=7
return B.b(C.Xj(p),$async$a9n)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9n,v)},
iqc(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().af())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a9<n,@>>")
w=B.C(new B.N(d,new C.fVI(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fVQ(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().af())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.V.av(w,null)}return A.V.av(C.iqc(d==null?B.a([],x.D):d,f,g),null)},
fVP(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fVP=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a9o(h,d,e,f,g),$async$fVP)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zd(e==null?"":e)
u=new B.aHM(s,t)
w=1
break}t=A.dT.aO(h)
t=A.kK.gcu().aO(t)
u=new B.aHM(C.zd(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fVP,v)},
hij(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d5(q,"NGMYSLIDESYNC2|"))return!0
if(J.d5(q,"NGMYSLIDECODE|"))return!0
if(J.d5(q,"NGMY_SL:"))return!0
if(J.eK(q,s)||J.eK(q,r))return!0
if(J.d5(q,"{"))try{w=A.V.aP(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
iqg(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hij(u))return u
t=A.a.cn(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b2(u,t))
if(C.hij(s))return s}r=A.a.cn(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b2(u,r))
if(C.hij(s))return s}}return null},
fVE(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d5(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d5(t,"NGMY_SL:"))w=v.a(A.V.aP(0,A.ca.cI(0,A.cK.aO(J.nq(t,8))),null))
else w=v.a(A.V.aP(0,t,null))
v=C.i8A(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiH(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.at4(t[1]),$async$aiH)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fVE(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zd(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.at4(r),$async$aiH)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fVE(s)
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
return B.b(C.a9n(t[1]),$async$aiH)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fVE(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fVE(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiH,v)},
i8A(d){var w,v,u,t=J.a7(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Vb.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hig(C.Xe(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.de(u,x.f)
t=B.cF(t,new C.fqD(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a3(t).k("M.E"))
return t}return B.a([],x.D)},
hig(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cE())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aT(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.je
$.je=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.Xe(B.a1(o,x.N,x.z))
if(e&&C.kO(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bS(144e8).af()
return p},
bFE(){var w=0,v=B.j(x.aT),u,t,s
var $async$bFE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hr(),$async$bFE)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiH(s),$async$bFE)
case 4:t=e
u=J.ct(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFE,v)},
h40(d){var w=0,v=B.j(x.T),u,t
var $async$h40=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hO(D.Zv,!0,"Dismiss",d,new C.h41(),new C.h42(),A.GU,!0,x.N),$async$h40)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fm0)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h40,v)},
itZ(d,e,f,g,h){return B.a5(d,!1).ce(B.ed(new C.h43(h,e,g,f),!0,null,x.H))},
fVC:function fVC(d){this.a=d},
clC:function clC(d){this.a=d},
fVI:function fVI(){},
fqD:function fqD(d){this.a=d},
h41:function h41(){},
h42:function h42(){},
h43:function h43(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xg:function Xg(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGu:function aGu(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eJi:function eJi(){},
eJe:function eJe(d,e){this.a=d
this.b=e},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJf:function eJf(d){this.a=d},
eJg:function eJg(d){this.a=d},
eJj:function eJj(d){this.a=d},
eJk:function eJk(d){this.a=d},
eJn:function eJn(d){this.a=d},
eJo:function eJo(d){this.a=d},
eJm:function eJm(d){this.a=d},
eJp:function eJp(d){this.a=d},
eJl:function eJl(d){this.a=d},
eJq:function eJq(d,e){this.a=d
this.b=e},
eJd:function eJd(d,e){this.a=d
this.b=e},
eJc:function eJc(d,e){this.a=d
this.b=e},
Xh:function Xh(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnc:function bnc(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eJr:function eJr(d,e){this.a=d
this.b=e},
eJs:function eJs(d){this.a=d},
eJt:function eJt(){},
eJu:function eJu(d){this.a=d},
eJv:function eJv(d,e){this.a=d
this.b=e},
aGr:function aGr(d){this.a=d},
aGs:function aGs(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eCV:function eCV(d){this.a=d},
eCU:function eCU(){},
eCW:function eCW(d){this.a=d},
eCR:function eCR(d){this.a=d},
eCQ:function eCQ(){},
eCS:function eCS(d){this.a=d},
eCT:function eCT(d){this.a=d},
bxM:function bxM(){},
at6:function at6(d){this.a=d},
aGv:function aGv(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eJx:function eJx(d){this.a=d},
eJw:function eJw(d){this.a=d},
ie_(){var w,v,u,t
for(v=0;v<4;++v){w=D.djJ[v]
try{if(Af.c1C(w)){u=w
return u}}catch(t){}}return null},
Si(d,e){return C.imO(d,e)},
imO(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Si=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.ie_()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oY?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.j.V(b3?1280:1280*b2)
b5=c2.b=A.j.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qU(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cw(null,x.A)
b8=A.d.gH(c3)
b9=$.ax()
o=new B.eC(b8,b9)
n=new B.eC("Getting ready\u2026",b9)
m=new B.eC(0,b9)
l=B.pA(new C.fPN(c2,b7,o),!1,!1)
b6.ma(0,l)
b9=x.H
B.cg(null,A.bB,!1,null,new C.fPO(n,m),c6,null,!0,!0,b9)
k=new C.fPS(b7)
j=new C.fPT()
i=null
t=4
b3=c2.a
h=Am.aUB(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h73(h,30)
e=B.a([],x.aK)
b3=x.z
i=Af.aZF(f,B.J(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Ji.zb(i,"dataavailable",new C.fPP(e))
d=new B.c3(new B.bl($.bE,x.dT),x.b2)
A.Ji.zb(i,"stop",new C.fPQ(d))
J.ajl(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Si)
case 8:w=7
return B.b(c5.$1(d0),$async$Si)
case 7:a0=d0
J.h74(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ajl(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ajl(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Si)
case 15:w=14
return B.b(c5.$1(d0),$async$Si)
case 14:a0=d0
case 13:J.h74(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ajl(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbt())b3=b3===b8.gbt()&&0<b8.gcF()
else b3=!0
if(!b3){w=17
break}J.h74(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.ff,null,b9),$async$Si)
case 18:w=16
break
case 17:J.ajl(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ajl(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dg(0,A.ot),$async$Si)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hP(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n5(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HF(b0)
J.lN(b0)
B.bN(A.qz,new C.fPR(a7),b9)
u=null
r=[1]
w=5
break
r.push(6)
w=5
break
case 4:t=3
c4=s.pop()
b1=B.ac(c4)
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
J.lN(l)
if(p.pZ())p.eu()
c3=o
b3=$.ax()
c3.sib(b3)
J.aTe(c3,0)
c3=n
c3.sib(b3)
J.aTe(c3,0)
c3=m
c3.sib(b3)
J.aTe(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Si,v)},
fPN:function fPN(d,e,f){this.a=d
this.b=e
this.c=f},
fPM:function fPM(){},
fPO:function fPO(d,e){this.a=d
this.b=e},
fPS:function fPS(d){this.a=d},
fPT:function fPT(){},
fPP:function fPP(d){this.a=d},
fPQ:function fPQ(d){this.a=d},
fPR:function fPR(d){this.a=d},
by_:function by_(d,e,f){this.c=d
this.d=e
this.a=f},
fkG:function fkG(){},
fkH:function fkH(){},
clY(d){var w=0,v=B.j(x.at),u,t,s
var $async$clY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.ate(d,A.Av),$async$clY)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bC(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bC
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$clY,v)},
clX(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a94:function a94(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmW:function bmW(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
era:function era(d){this.a=d},
er8:function er8(d){this.a=d},
er9:function er9(d,e){this.a=d
this.b=e},
a9Y:function a9Y(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oW$=k
_.oX$=l
_.oY$=m
_.o7$=n},
a9Z:function a9Z(d,e){this.a=d
this.b=e},
b5m:function b5m(){},
cpS:function cpS(){},
cpT:function cpT(){},
cpU:function cpU(d,e,f,g,h,i,j,k,l){var _=this
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
hNf(d){return new C.ajE(d)},
a4f:function a4f(){},
ajE:function ajE(d){this.a=d},
aTy:function aTy(){},
ayL:function ayL(d,e){this.d=d
this.b=e
this.a=null},
aV_:function aV_(d){this.b=d
this.a=null},
bEy(d,e){var w=0,v=B.j(x.H),u
var $async$bEy=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gui().Mx(d,e),$async$bEy)
case 2:u=B.fYB()
w=3
return B.b(u,$async$bEy)
case 3:return B.h(null,v)}})
return B.i($async$bEy,v)},
hCZ(d,e){return(A.tu[(d^e)&255]^A.o.aJ(d,8))>>>0},
fHM(d,e,f,g,h,i){var w=C.ij3(d,A.dl,f,null,A.d4,g,h,i)
return w},
hF1(d){var w=F.hFM(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hVf(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pM.h(0,w)
if(v!=null)return v
for(u=A.pM.gdP(A.pM),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.az(s,0,2)
return A.a.az(s+"XX",0,2)},
hF9(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<83;++w)v+="- "+D.dyw[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bDM(d,e){return C.ifH(d,e)},
ifH(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bDM=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hP([d],"application/pdf")
n=x.z
q=B.aWL(B.a([r],x.e3),e,B.J(["type","application/pdf"],n,n))
p=B.cv(B.J(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eg(B.jR(o,"share",[p]),x.H),$async$bDM)
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
return B.i($async$bDM,v)},
hia(){var w=0,v=B.j(x.y),u,t,s
var $async$hia=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fyA
s=$.bDi
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bDM(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hia,v)},
bF9(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bF9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fyA
l=$.bDi
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A4.hze()?3:4
break
case 3:w=5
return B.b(C.bDM(m,k),$async$bF9)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bDj
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n5(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.HF(q)
w=10
return B.b(B.bN(A.a3,null,x.H),$async$bF9)
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
return B.i($async$bF9,v)},
hi1(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hi1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bDj
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.m_.rn(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hi1,v)},
hii(d,e){var w=0,v=B.j(x.H),u,t
var $async$hii=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hP([d],"text/html"))
t.toString
u=window
u.toString
A.m_.rn(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hii,v)},
b4i(d,e){var w=0,v=B.j(x.y),u
var $async$b4i=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b4k(d,e),$async$b4i)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b4j(d),$async$b4i)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b4i,v)}},D,Q,Ap,Aa,A3,X,Y,Aq,G,F,E,H,Z,R,A4,S,Ar,L,As,Ab,At,Ac,N,Au,Av,A_,M,A0,O,A1,Aw,Ad,Ax,P,Ae,A5,Ay,Af,Ag,Az,Ah,AA,Ai,Aj,AB,AC,T,AD,I,AE,U,V,K,A6,A7
J=c[1]
B=c[0]
A=c[2]
A2=c[63]
Ak=c[208]
A8=c[74]
Al=c[53]
Am=c[64]
W=c[225]
A9=c[57]
An=c[151]
Ao=c[235]
C=a.updateHolder(c[5],C)
D=c[223]
Q=c[142]
Ap=c[41]
Aa=c[227]
A3=c[224]
X=c[138]
Y=c[213]
Aq=c[134]
G=c[194]
F=c[35]
E=c[226]
H=c[96]
Z=c[123]
R=c[154]
A4=c[32]
S=c[181]
Ar=c[238]
L=c[162]
As=c[189]
Ab=c[106]
At=c[136]
Ac=c[118]
N=c[228]
Au=c[239]
Av=c[133]
A_=c[67]
M=c[202]
A0=c[83]
O=c[164]
A1=c[115]
Aw=c[125]
Ad=c[120]
Ax=c[230]
P=c[126]
Ae=c[144]
A5=c[236]
Ay=c[94]
Af=c[58]
Ag=c[198]
Az=c[40]
Ah=c[81]
AA=c[160]
Ai=c[152]
Aj=c[234]
AB=c[237]
AC=c[233]
T=c[75]
AD=c[231]
I=c[179]
AE=c[240]
U=c[51]
V=c[229]
K=c[210]
A6=c[232]
A7=c[112]
C.ok.prototype={
vL(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.ul(t,v)
return new C.ok(t===0?!1:w,v,t)},
bQg(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DK()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.ul(w,u)
return new C.ok(r===0?!1:s,u,r)},
bQN(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DK()
w=o-d
if(w<=0)return p.a?$.hjQ():$.DK()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.ul(w,u)
q=new C.ok(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aK(0,$.a41())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.W(B.dO("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ar(e,16)
if(A.o.F(e,16)===0)return r.bQg(v)
u=w+v+1
t=new Uint16Array(u)
C.hvE(r.b,w,e,t)
w=r.a
s=C.ul(u,t)
return new C.ok(s===0?!1:w,t,s)},
mH(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.W(B.dO("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ar(e,16)
u=A.o.F(e,16)
if(u===0)return n.bQN(v)
t=w-v
if(t<=0)return n.a?$.hjQ():$.DK()
s=n.b
r=new Uint16Array(t)
C.i4r(s,w,e,r)
w=n.a
q=C.ul(t,r)
p=new C.ok(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aK(0,$.a41())
for(o=0;o<v;++o)if(s[o]!==0)return p.aK(0,$.a41())}return p},
aS(d,e){var w,v=this.a
if(v===e.a){w=C.cP8(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9y(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9y(t,e)
if(s===0)return $.DK()
if(r===0)return t.a===e?t:t.vL(0)
w=s+1
v=new Uint16Array(w)
C.i4p(t.b,s,d.b,r,v)
u=C.ul(w,v)
return new C.ok(u===0?!1:e,v,u)},
HU(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DK()
w=d.c
if(w===0)return t.a===e?t:t.vL(0)
v=new Uint16Array(s)
C.bcp(t.b,s,d.b,w,v)
u=C.ul(s,v)
return new C.ok(u===0?!1:e,v,u)},
bD6(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.ul(r,u)
return new C.ok(!1,u,s)},
bD5(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.ul(u,r)
return new C.ok(!1,r,v)},
bD7(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.ul(p,m)
return new C.ok(s!==0,m,s)},
VK(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DK()
w=t.a
if(w===e.a){if(w){w=$.a41()
return t.HU(w,!0).bD7(e.HU(w,!0),!0).a9y(w,!0)}return t.bD6(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bD5(v.HU($.a41(),!1),!1)},
a5(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9y(e,v)
if(C.cP8(u.b,t,e.b,w)>=0)return u.HU(e,v)
return e.HU(u,!v)},
aK(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vL(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9y(e,v)
if(C.cP8(u.b,t,e.b,w)>=0)return u.HU(e,v)
return e.HU(u,!v)},
aM(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DK()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hvF(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.ul(w,t)
return new C.ok(q===0?!1:r,t,q)},
bQf(d){var w,v,u,t
if(this.c<d.c)return $.DK()
this.aUd(d)
w=$.hcG.cp()-$.azy.cp()
v=C.hcI($.hcF.cp(),$.azy.cp(),$.hcG.cp(),w)
u=C.ul(w,v)
t=new C.ok(!1,v,u)
return this.a!==d.a&&u>0?t.vL(0):t},
ctP(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aUd(d)
w=C.hcI($.hcF.cp(),0,$.azy.cp(),$.azy.cp())
v=C.ul($.azy.cp(),w)
u=new C.ok(!1,w,v)
if($.hcH.cp()>0)u=u.mH(0,$.hcH.cp())
return t.a&&u.c>0?u.vL(0):u},
aUd(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hvB&&d.c===$.hvD&&g.b===$.hvA&&d.b===$.hvC)return
w=d.b
v=d.c
u=16-A.o.galO(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hvz(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hvz(g.b,f,u,r)}else{r=C.hcI(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.hcJ(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cP8(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bcp(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bcp(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i4q(p,r,i);--o
C.hvF(h,j,0,r,o,s)
if(r[i]<h){m=C.hcJ(j,s,o,n)
C.bcp(r,l,n,m,r)
while(--h,r[i]<h)C.bcp(r,l,n,m,r)}--i}$.hvA=g.b
$.hvB=f
$.hvC=w
$.hvD=v
$.hcF.b=r
$.hcG.b=l
$.azy.b=s
$.hcH.b=u},
gX(d){var w,v,u,t=new C.cP9(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cPa().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.ok&&this.aS(0,e)===0},
tW(d,e){return this.aS(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vE(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galO(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aJ(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cPb(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cPc(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.ls(A.aI.gaU(w)).getFloat64(0,!0)},
v(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.v(-r.b[0])
return A.o.v(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vL(0):r
while(v.c>1){u=$.hK1()
if(u.c===0)B.bk(D.bc2)
t=v.ctP(u).v(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bQf(u)}w.push(A.o.v(v.b[0]))
if(q)w.push("-")
return new B.dr(w,x.bJ).hf(0)},
$iaUh:1,
$ihR:1}
C.aTG.prototype={
I(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
if(t!=null){this.a[t]=e
return}w=this.a
w.push(e)
v.n(0,u,w.length-1)},
gJ(d){return this.a.length},
h(d,e){return this.a[e]},
n(d,e,f){var w,v
if(e<0||e>=this.a.length)return
w=this.b
v=this.a
w.W(0,v[e].a)
v[e]=f
w.n(0,f.a,e)},
cSN(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gal(d){return A.d.gal(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.kl(w,w.length,B.U(w).k("kl<1>"))}}
C.SX.prototype={
d_X(){var w,v
if(this.as==null)this.bge()
w=this.as
v=w==null?null:w.ar0()
return v==null?null:v.eV()},
bge(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ar0().eV()
this.as=new C.bTb(v)}},
gZ(d){return this.at}}
C.a4Z.prototype={
a7(){return"CompressionType."+this.b}}
C.bKV.prototype={
eK(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cs()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.A4[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cs()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fQ(u,t)&A.A4[d])
s.c=t}return v}}
C.bJ8.prototype={
cQR(d,e){var w,v,u,t,s,r=this,q=new C.bKV(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eK(8)!==66||q.eK(8)!==90||q.eK(8)!==104)return!1
w=r.a=q.eK(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cs5(q)
if(t<0)return!1
if(t===0){q.eK(8)
q.eK(8)
q.eK(8)
q.eK(8)
s=r.cs8(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eK(8)
q.eK(8)
q.eK(8)
q.eK(8)
return!0}}return!0},
cs5(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eK(8)
if(t!==D.dC1[u])v=!1
if(t!==D.dcz[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cs8(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eK(1),d2=((d3.eK(8)<<8|d3.eK(8))<<8|d3.eK(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eK(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eK(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c6v()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eK(3)
if(q<2||q>6)return-1
v=d3.eK(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eK(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c1(6,$.hI0(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eK(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eK(1)===0)break
i=d3.eK(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hI_()
u=x.an
c9.y=B.c1(6,v,!1,u)
c9.z=B.c1(6,v,!1,u)
c9.Q=B.c1(6,v,!1,u)
c9.as=new Int32Array(6)
for(j=0;j<q;++j){v=c9.y
v[j]=new Int32Array(258)
u=c9.z
u[j]=new Int32Array(258)
o=c9.Q
o[j]=new Int32Array(258)
for(n=c9.fr,h=32,g=0,w=0;w<r;++w){f=n[j][w]
if(f>g)g=f
if(f<h)h=f}c9.c1H(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.aw5(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.aw5(d3)}while(a3===0||a3===1);++a5
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
a3=c9.aw5(d3)
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
c1=(c1<<8^D.IK[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.IQ[b9];++b9
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
if(b8===0){b8=D.IQ[b9];++b9
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
if(b8===0){b8=D.IQ[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.IQ[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.IQ[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.IK[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.IK[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.IK[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.IK[c1>>>24&255^c7&255])>>>0
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
aw5(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eK(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eK(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c1H(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c6v(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cH7.prototype={
aKo(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bTU(e)
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
if(w>0)e.aKr(w,!1)
r.csu(e)
q=r.r
v=r.f
u=e.aNx(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aT()!==33639248)break
s=new C.bb3()
s.d_W(0,u,e,f)
q.push(s)}},
csu(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a9e(20,r)
if(w.aT()!==117853008){d.c=s
return}w.aT()
v=w.tI()
w.aT()
d.c=v
if(d.aT()!==101075792){d.c=s
return}d.tI()
d.b4()
d.b4()
d.aT()
d.aT()
d.tI()
d.tI()
u=d.tI()
t=d.tI()
this.f=u
this.r=t
d.c=s},
bTU(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a9e(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.ans(A.is)
o.aOM(r.eV(),A.is,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aT()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cH5.prototype={}
C.aza.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cH8.prototype={
aKo(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aT()!==67324752)return
e.b4()
o.b=e.b4()
w=D.aJn.h(0,e.b4())
o.c=w==null?D.NN:w
o.d=e.b4()
o.e=e.b4()
o.f=e.aT()
o.r=e.aT()
o.w=e.aT()
v=e.b4()
u=e.b4()
o.x=e.apE(v)
o.y=e.hr(u).eV()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b0F:D.Fe
o.ay=f
o.Q=e.hr(t)
if(o.at!==D.Fe&&u>2){w=o.y
w.toString
s=B.rJ(w,A.is,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b4()===39169){s.b4()
s.b4()
s.apE(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b4()
o.at=D.b0G
o.ax=new C.cH5(r,q)
w=D.aJn.h(0,q)
o.c=w==null?D.NN:w}}}if((o.b&8)!==0){p=e.aT()
if(p===134695760)o.f=e.aT()
else o.f=p
o.r=e.aT()
o.w=e.aT()}},
gJ(d){return this.bpZ().length},
ar0(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rJ(new Uint8Array(0),A.is,q,q)
w=r.at
if(w!==D.Fe)if(p.gJ(0)<=0)r.at=D.Fe
else{if(w===D.b0F){p=r.bOy(p)
r.Q=p}else if(w===D.b0G){p=r.bOb(p)
r.Q=p}r.at=D.Fe}w=r.c
if(w===D.alh){v=p.c
u=B.dl()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.qc.Cc(p.eV(),!0,!1)
else{t=B.a9N(A.is,r.w)
p=r.Q
p.toString
A.qc.a5j(p,t,!0,!1)
u.b=t.Ht()}r.Q.c=v
return B.rJ(u.bl(),A.is,q,q)}else if(w===D.ali){s=B.a9N(A.is,32768)
p=r.Q
v=p.c
C.hNq().cQR(p,s)
u=s.Ht()
r.Q.c=v
return B.rJ(u,A.is,q,q)}else return B.rJ(p.eV(),A.is,q,q)},
bpZ(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eV()},
v(d){return this.x},
bc2(d){var w=this.ch,v=C.KE(C.hCZ(w[0].M(0),d))
w[0]=v
v=w[1].a5(0,v.VK(0,C.KE(255)))
w[1]=v
w[1]=v.aM(0,C.KE(134775813)).a5(0,C.KE(1)).VK(0,C.KE(4294967295))
w[2]=C.KE(C.hCZ(w[2].M(0),w[1].mH(0,24).M(0)))},
aTC(){var w=(this.ch[2].VK(0,C.KE(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOy(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rJ(new Uint8Array(0),A.is,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bc2(u[v.c++]^r.aTC())}t=r.Q.eV()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTC()
r.bc2(s)
u&2&&B.aj(t)
t[w]=s}return B.rJ(t,A.is,q,q)},
bOb(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hr(8).eV()
v=16}else if(k===2){w=d.hr(12).eV()
v=24}else{w=d.hr(16).eV()
v=32}u=d.hr(2).eV()
t=d.hr(d.gJ(0)-10)
s=d.hr(10)
r=t.eV()
k=this.ay
k.toString
q=C.i44(k,w,v)
p=new Uint8Array(B.cf(A.aI.du(q,0,v)))
k=v*2
o=new Uint8Array(B.cf(A.aI.du(q,v,k)))
if(!C.hv8(A.aI.du(q,k,k+2),u))throw B.W(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bHJ(k,new Uint8Array(16),p)
k=x.S
m=J.a6v(0,k)
m=n.r=new C.cpH(m)
m.c=!0
m.b=m.bpf(!0,new C.auH(p))
if(m.c)m.d=B.bp(D.oW,!0,k)
else m.d=B.bp(D.zT,!0,k)
l=C.htk(C.htm(),64)
l.biF(new C.auH(o))
n.w=l
n.d_s(r,0,r.length)
k=s.eV()
m=n.x
m===$&&B.c()
if(!C.hv8(k,m))throw B.W(B.fm("macs don't match"))
return B.rJ(r,A.is,null,null)}}
C.bb3.prototype={
d_W(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.apE(w)
if(v>0){t=e.hr(v).eV()
n.ax=t
if(v>=4){s=B.rJ(t,A.is,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b4()
p=s.b4()
o=s.a9e(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tI()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tI()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tI()
p-=8}if(p>=4&&n.y===65535)n.y=o.aT()}}}}if(u>0)e.apE(u)
f.c=n.as
t=new C.cH8(D.NN,n,D.Fe,B.a([C.KE(0),C.KE(0),C.KE(0)],x.f3))
n.ch=t
t.aKo(0,f,g)},
v(d){return this.at}}
C.cH6.prototype={
cQS(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cH7(B.a([],x.fT))
this.a=g
g.aKo(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aTG(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.SX(o,A.o.ar(Date.now(),1000),0):C.hlh(o,q.w,q)
v.I(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hlh(o,q.w,q)
if(k.as==null)k.bge()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.ans(A.is)
j.aOM(o,A.is,h,h)}i=j==null?h:j.eV()
if(i!=null)new B.GR(!1).E4(i,0,h,!0)}}return v}}
C.bHJ.prototype={
d_s(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.D3(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hN9(u,m.a)
q=m.r
if(16>u.byteLength)B.bk(B.dO("Input buffer too short",null))
if(16>w.byteLength)B.bk(B.dO("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bS5(u,0,w,0,o)}else{o===$&&B.c()
q.bOC(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LS(w,0)
m.x=A.aI.du(m.x,0,10)
w=m.w
l=w.a
l.iq(0)
w=w.d
w===$&&B.c()
l.D3(0,w,0,w.length)
return f}}
C.cpM.prototype={}
C.cpQ.prototype={}
C.cpK.prototype={}
C.auH.prototype={}
C.cpP.prototype={
cR6(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ef(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.biF(new C.auH(A.aI.fO(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bTd(n.a,n.b,t,s,r)
r+=v}A.aI.ha(f,g,g+w,s)
return o.a.c},
bTd(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.W(B.dO("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.D3(0,d,0,d.length)
v.D3(0,f,0,4)
u=m.c
u===$&&B.c()
w.LS(u,0)
u=m.c
A.aI.ha(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.D3(0,s,0,s.length)
w.LS(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cpL.prototype={}
C.cpJ.prototype={}
C.auI.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.auI){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tW(d,e){var w=this.a
w===$&&B.c()
w=A.o.tW(w,e.gc1Y())
if(!w)e.gc1Y()
return w},
aMX(d,e){this.a=0
this.b=d},
tZ(d){return this.aMX(d,null)},
aNA(d){var w,v=this,u=v.b
u===$&&B.c()
w=u+d
u=w>>>0
v.b=u
if(w!==u){u=v.a
u===$&&B.c();++u
v.a=u
v.a=u>>>0}},
v(d){var w=this,v=new B.fg(""),u=w.a
u===$&&B.c()
w.b3E(v,u)
u=w.b
u===$&&B.c()
w.b3E(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3E(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bv(v,w,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i)}}
C.cpO.prototype={
iq(d){var w,v=this
v.a.tZ(0)
v.c=0
A.aI.hx(v.b,0,4,0)
v.w=0
w=v.r
A.d.hx(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aqu(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b57(u,0)
v.c=0}v.a.aNA(1)},
D3(d,e,f,g){var w=this.cqP(e,f,g)
f+=w
g-=w
w=this.cqQ(e,f,g)
this.cqG(e,f+w,g-w)},
LS(d,e){var w,v=this,u=C.htl(v.a),t=u.a
t===$&&B.c()
t=C.hiT(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hiT(w,3)
v.cqK()
v.cqH(u)
v.auU()
v.ckQ(d,e)
v.iq(0)
return 20},
b57(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.ox(A.aI.gaU(d),d.byteOffset,d.length).getUint32(e,A.iF===w.d)
if(w.w===16)w.auU()},
auU(){this.d_r()
this.w=0
A.d.hx(this.r,0,16,0)},
cqG(d,e,f){while(f>0){this.aqu(d[e]);++e;--f}},
cqQ(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b57(d,e)
e+=4
f-=4
w.aNA(4)
v+=4}return v},
cqP(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqu(d[e]);++e;--f;++v}return v},
cqK(){this.aqu(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqu(0)}},
cqH(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.auU()
u=v.d
switch(u){case A.iF:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.FG:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.W(B.bc("Invalid endianness: "+u.v(0)))}},
ckQ(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iF===this.d,s=0;s<w;++s){r=v[s]
q=J.ox(A.aI.gaU(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gd6(d){return this.f}}
C.cpR.prototype={
d_r(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
C.cpN.prototype={
biF(d){var w,v,u,t,s=this,r=s.a
r.iq(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.D3(0,w,0,v)
w=s.d
w===$&&B.c()
r.LS(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aI.ha(t,0,v,w)}w=s.d
w===$&&B.c()
A.aI.hx(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aI.ha(w,0,u,s.d)
s.bdg(s.d,u,54)
s.bdg(s.e,u,92)
u=s.d
r.D3(0,u,0,u.length)},
LS(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LS(s,w)
s=u.e
t.D3(0,s,0,s.length)
v=t.LS(d,e)
s=u.e
A.aI.hx(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.D3(0,s,0,s.length)
return v},
bdg(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cpI.prototype={}
C.cpH.prototype={
a3y(d){return(D.oW[d&255]&255|(D.oW[d>>>8&255]&255)<<8|(D.oW[d>>>16&255]&255)<<16|D.oW[d>>>24&255]<<24)>>>0},
bpf(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.W(B.dO("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e4(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c1(4,0,!1,u)
switch(v){case 4:q=J.ox(A.aI.gaU(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3y((m>>>8|(m&$.qz[24])<<24)>>>0)^D.cOj[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.ox(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3y((k>>>8|(k&$.qz[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3y((k>>>8|(k&$.qz[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.ox(A.aI.gaU(e),e.byteOffset,w)
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
p=(p^f.a3y((g>>>8|(g&$.qz[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3y(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.W(B.bc("Should never get here"))}return s},
bS5(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.ox(A.aI.gaU(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.eo[a8&255]^C.nR(D.eo[a9>>>8&255],24)^C.nR(D.eo[b0>>>16&255],16)^C.nR(D.eo[b1>>>24&255],8)^b6[w][0]
m=D.eo[a9&255]^C.nR(D.eo[b0>>>8&255],24)^C.nR(D.eo[b1>>>16&255],16)^C.nR(D.eo[a8>>>24&255],8)^b6[w][1]
l=D.eo[b0&255]^C.nR(D.eo[b1>>>8&255],24)^C.nR(D.eo[a8>>>16&255],16)^C.nR(D.eo[a9>>>24&255],8)^b6[w][2]
b1=D.eo[b1&255]^C.nR(D.eo[a8>>>8&255],24)^C.nR(D.eo[a9>>>16&255],16)^C.nR(D.eo[b0>>>24&255],8)^b6[w][3]
a7=D.oW[n&255]
b0=D.oW[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oW[l>>>8&255]
a9=D.oW[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oW[b1>>>8&255]
h=D.oW[n>>>16&255]
g=D.oW[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oW[l>>>24&255]
s=s[3]
a1=J.ox(A.aI.gaU(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.ox(A.aI.gaU(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.ox(A.aI.gaU(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.ox(A.aI.gaU(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bOC(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.ox(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.ox(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.ox(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.ox(A.aI.gaU(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.en[a6&255]^C.nR(D.en[b0>>>8&255],24)^C.nR(D.en[a5>>>16&255],16)^C.nR(D.en[a4>>>24&255],8)^b5[a9][0]
o=D.en[a4&255]^C.nR(D.en[a6>>>8&255],24)^C.nR(D.en[b0>>>16&255],16)^C.nR(D.en[a5>>>24&255],8)^b5[a9][1]
n=D.en[a5&255]^C.nR(D.en[a4>>>8&255],24)^C.nR(D.en[a6>>>16&255],16)^C.nR(D.en[b0>>>24&255],8)^b5[a9][2]
b0=D.en[b0&255]^C.nR(D.en[a5>>>8&255],24)^C.nR(D.en[a4>>>16&255],16)^C.nR(D.en[a6>>>24&255],8)^b5[a9][3]
a4=D.zT[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zT[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zT[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zT[o>>>8&255]
i=D.zT[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zT[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.ox(A.aI.gaU(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bTa.prototype={}
C.bTb.prototype={
gJ(d){var w=this.a.length
return w},
ar0(){return B.rJ(this.a,A.is,null,null)}}
C.bcE.prototype={
vF(d){return C.i7r(d)}}
C.cAe.prototype={
Nu(d){var w=d.w,v=Math.max(1,A.j.cB(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abr(v,t+20,u+16,t,u,B.uw(d.x))},
nG(d){return!1}}
C.bUc.prototype={
cKU(d){if(this.b)throw B.W(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bUd(),x.E))},
n_(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$n_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.W(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$n_)
case 6:w=5
return B.b(p.bEy(f,r),$async$n_)
case 5:case 3:t.length===s||(0,B.I)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$n_,v)}}
C.axP.prototype={
a7(){return"SystemUiMode."+this.b}}
C.a9L.prototype={
A(d,e){if(e==null)return!1
if(J.bY(e)!==B.b4(this))return!1
return e instanceof C.a9L&&e.a===this.a},
gX(d){return B.bv(B.b4(this),B.xp(this.a),A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i,A.i)},
v(d){var w="<optimized out>#"
if(B.b4(this)===D.h8m)return"["+(w+B.ec(this.a))+"]"
return"[ObjectKey "+(w+B.ec(this.a))+"]"}}
C.a2e.prototype={
S(){return new C.aLi(B.aR(x.N))},
cYz(d){return this.d.$1(d)},
cWf(){return this.e.$0()}}
C.aLi.prototype={
Y(){this.a3()
this.PX()},
PX(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cWf(),$async$PX)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fj8(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PX,v)},
a_8(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fjc(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fjd(t))
w=3
return B.b(C.apc(p),$async$a_8)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fje(t,s,p))
w=4
return B.b(t.PX(),$async$a_8)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_8,v)},
a2t(d){return this.cv0(d)},
cv0(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a2t=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fj9(t))
s=J.t(d,"id")
w=3
return B.b(C.c4c(J.k(s==null?"":s)),$async$a2t)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fja(t))
w=1
break}q=C.hig(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cYz(B.a([q],x.D)),$async$a2t)
case 4:if(t.c==null){w=1
break}t.m(new C.fjb(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a2t,v)},
PW(d,e){return this.bP3(0,e)},
bP3(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PW=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a7(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.fj3(q),r,null,!0,!0,x.y),$async$PW)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fj4(t))
s=s.h(e,"id")
w=4
return B.b(C.apb(J.k(s==null?"":s)),$async$PW)
case 4:if(t.c==null){w=1
break}t.m(new C.fj5(t))
w=5
return B.b(t.PX(),$async$PW)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PW,v)},
cJT(d){var w=B.bh(d),v=w==null?null:w.bT()
if(v==null)return""
return A.iV[B.bL(v)-1]+" "+B.bX(v)},
aTt(d,e){var w=null,v=B.l(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Qt,A.n),w,e,w,w,w,w,w,e)},
aTs(d){return this.aTt(d,44)},
bak(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Qt:u,r=B.l(14),q=B.X(e,t?A.c:A.aE,u,u,u,17),p=x.p
q=B.a([q,A1.AQ,B.d(f,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aE,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.l(10)
A.d.u(q,B.a([A1.AQ,B.p(u,B.d(""+g,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bJq,u,u,u)],p))}return B.E(B.az(A.c1,B.cT(u,B.A(q,A.l,u,A.b8,A.h,0,u,u),u,u,A.b0,new B.o(u,u,u,r,u,s,A.n),A.h8,u,u,u,u,A.qG,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fji(this,d),u,u,u,u,u,u,!1,A.a4),1)},
coN(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d8.j(0.14):D.a_H,n=B.l(18),m=p?A.d8:A.dq
m=B.K(m,A.r,p?1.8:1)
w=this.aTs(A.qU)
v=B.d(d.b,q,1,A.a2,q,q,q,S.ac5,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cQ,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aXr,q,q,q)],s),A.E,q,A.e,A.h,0,A.p),1)
v=p?D.Qt:q
u=p?q:B.K(A.aT,A.r,1.6)
r=p?D.c05:q
return B.az(q,B.cT(q,B.A(B.a([w,A.bb,t,B.cT(q,r,q,q,A.b0,new B.o(q,q,u,q,q,v,A.a7),A.h2,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.h,0,q,q),q,q,A.b0,new B.o(o,q,m,n,q,q,A.n),A.h2,q,q,q,A.d9,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fj7(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cwC(d){var w,v,u,t,s,r=this,q=null,p=J.a7(d),o=p.h(d,"savedAt"),n=r.cJT(J.k(o==null?"":o))
o=B.l(18)
w=B.K(A.dq,A.r,1)
v=r.aTs(A.PB)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,S.ac5,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cQ,B.d(p+" slides"+t,q,q,q,q,q,q,D.aXr,q,q,q)],s),A.E,q,A.e,A.h,0,A.p),1)
p=r.b6O(A.hP,A.bv,"Bring it back",r.r?q:new C.fjf(r,d))
return B.p(q,B.A(B.a([v,A.bb,t,p,A.bm,r.b6O(A.ek,A.bY,"Delete",r.r?q:new C.fjg(r,d))],s),A.l,q,A.e,A.h,0,q,q),A.f,q,q,new B.o(D.a_H,q,w,o,q,q,A.n),q,q,q,A.d9,D.bDC,q,q,q)},
b6O(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.ha(B.az(w,B.p(w,B.X(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a7),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
av9(d,e,f){var w=null
return new B.D(D.bCB,B.x(B.a([B.X(d,A.aT,w,w,w,46),A.ae,B.d(e,w,w,w,w,w,w,D.fEs,w,w,w),A.aw,B.d(f,w,w,w,w,w,w,D.fwg,A.K,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ce
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aF(d,A.c_,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aT,i,i,B.l(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTt(A.zG,46),A.bb,D.bKp],t)
if(j.r)s.push(D.ewS)
s.push(B.aH(i,i,i,i,A.tq,i,i,i,new C.fjl(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.h,0,i,i)
r=A.c.j(0.05)
q=B.l(18)
p=B.K(A.dq,A.r,1)
o=J.a7(h)
q=B.a([A.T,u,new B.D(D.bGo,s,i),B.p(i,B.A(B.a([j.bak(0,A.zo,"Save",j.a.c.length),j.bak(1,A.HP,"Saved",o.gJ(h))],t),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bFo,A.eC,i,i,i)],t)
if(j.x!=null){u=(j.y?A.bY:A.bv).j(0.12)
s=B.l(14)
r=B.K((j.y?A.bY:A.bv).j(0.4),A.r,1)
p=j.y
n=p?A.HI:A.ec
n=B.X(n,p?A.bY:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.af,B.E(B.d(m,i,i,i,i,i,i,A.VP,i,i,i),1)],t),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bFk,A.hN,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fA6,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.az(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fDo,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fjm(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.h,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.av9(A.qU,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.I)(r),++l)s.push(j.coN(r[l]))
A.d.u(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.ewn)
else if(j.e==null)s.push(j.av9(A.a3c,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.av9(A.oC,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cwC(r.gR(r)))
A.d.u(u,s)}q.push(new B.di(1,A.cm,B.cm(u,i,i,A3.an6,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc95()
p=s?i:D.Qt
s=s?A.c.j(0.07):i
o=B.l(18)
n=u.a===0?i:B.a([new B.ab(0,A.G,A.b7.j(0.4),A.cy,18)],x.V)
u=u.a
m=u===0
k=B.X(A.zo,m?A.k0:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bG_,B.az(i,B.cT(i,B.A(B.a([k,A.Vp,new B.di(1,A.cm,new B.dF(A.dW,A.A,A.f,B.d(u,i,i,i,i,i,i,B.m(i,i,m?A.k0:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i),i)],t),A.l,i,A.b8,A.h,0,i,i),i,i,A.b0,new B.o(s,i,i,o,n,p,A.n),A.h8,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.T)
return B.p(i,B.bm(!0,B.x(q,A.l,i,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b8K,i,i,i,i,i,i,i,i)}}
C.oP.prototype={
aj(){return B.J(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().af()],x.N,x.z)}}
C.ZX.prototype={
S(){return new C.azK(B.a([],x.k),B.f4(null,x.H))},
ge4(){return this.c}}
C.azK.prototype={
Y(){this.a3()
this.Q6()},
Q6(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Q6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a3e(t.a.c),$async$Q6)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cQy(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Q6,v)},
cCW(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.oz(t.d,new C.cQB(d))
v=w<0
if(v&&C.i4t(d))return t.f
u=t.d
if(v)J.n3(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h8o(new C.cQC(t),v)
return t.f=t.f.bG(new C.cQD(t,d),v).eH(new C.cQE())},
Jl(d,e,f){return this.cij(0,e,f)},
b0w(d,e){return this.Jl(0,e,!1)},
cij(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jl=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).ce(B.ed(new C.cQx(t,e),!1,null,x.H)),$async$Jl)
case 3:w=4
return B.b(t.f,$async$Jl)
case 4:w=5
return B.b(t.Q6(),$async$Jl)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jl,v)},
b_M(d){var w=A.o.v(1000*Date.now()),v=d==null?D.dQC:d
this.Jl(0,new C.oP(w,v,new B.V(Date.now(),0,!1)),!0)},
c8x(){return this.b_M(null)},
aeT(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cQF(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeT)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b_M(s)
case 1:return B.h(u,v)}})
return B.i($async$aeT,v)},
Jk(d,e){return this.bOV(0,e)},
bOV(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jk=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cQs(e),s,null,!0,!0,x.y),$async$Jk)
case 3:if(g!==!0){w=1
break}t.m(new C.cQt(t,e))
w=4
return B.b(t.f,$async$Jk)
case 4:w=5
return B.b(C.ahK(t.a.c,e.a),$async$Jk)
case 5:w=6
return B.b(t.Q6(),$async$Jk)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jk,v)},
DQ(d){return this.bGY(d)},
bGY(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DQ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.cQo(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DQ)
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
return B.b(t.b0w(0,d),$async$DQ)
case 9:w=5
break
case 7:w=10
return B.b(F.hiV(r,d.b,null),$async$DQ)
case 10:w=5
break
case 8:w=11
return B.b(t.Jk(0,d),$async$DQ)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DQ,v)},
c1U(){var w,v,u,t,s=null,r=[D.dQF,D.dQD,D.dQE],q=new C.cQv(),p=B.l(26),o=x.V,n=B.a([new B.ab(0,A.G,A.d5.j(0.4),A.eR,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dyi[w]
u=A.c.j(0.18)
t=new B.aP(999,999)
l.push(B.p(s,B.d(v,s,s,s,s,s,s,A.p8,s,s,s),A.f,s,s,new B.o(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.oy,s,s,s))}return B.p(s,B.A(B.a([B.E(B.x(B.a([D.h3D,A.P,B.bZ(A.bH,l,A.br,s,6,6),A.aO,B.az(s,B.p(s,D.fds,A.f,s,s,new B.o(A.c,s,s,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.cJ,10)],o),s,A.n),s,s,s,s,W.anx,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cQu(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.h,0,A.p),1),new B.a4(130,110,new B.an(A.A,s,A.ac,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.h,0,s,s),A.f,s,s,new B.o(s,s,s,p,n,D.c8P,A.n),s,s,s,s,D.bGy,s,s,s)},
bGW(d){var w,v=null,u=d.b.d.length,t=B.l(6),s=B.a([new B.ab(0,A.G,A.w.j(0.5),A.cy,14)],x.V),r=x.p
s=B.p(v,B.bu(B.l(6),new B.an(A.a0,v,A.b2,A.t,B.a([new B.dF(A.c0,A.A,A.f,F.apO(d.b),v),D.eCU,B.ao(v,B.az(v,B.p(v,D.c0Y,A.f,v,v,D.b9I,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQj(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.ftm,v,v,v)
w=u===1?"":"s"
return B.az(v,B.x(B.a([new B.fH(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fAi,v,v,v)],r),A.E,v,A.e,A.h,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cQk(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQl(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eR(B.a([new B.D(Q.am0,B.ha(B.az(s,B.p(s,A.asX,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ab(0,A.G,A.b7.j(0.5),A.J,12)],x.V),E.x6,A.a7),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc9V(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nB,s,s,s,!0,s,s,s,s,s,D.h3H,s,s,s,1,s,!0)
if(t.e)r=D.bdn
else{w=t.c1U()
v=B.a([D.fPH,A.af],r)
if(J.cJ(t.d)){u=B.l(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fsP,s,s,s),A.f,s,s,new B.o(D.biB,s,s,u,s,s,A.n),s,s,s,s,A.z0,s,s,s))}r=B.a([new B.nI(A8.a15,new B.m5(w,s),s),new B.nI(D.bFU,new B.m5(B.A(v,A.l,s,A.e,A.h,0,s,s),s),s)],r)
if(J.ct(t.d))r.push(D.fkD)
else r.push(new B.nI(D.bFm,B.PU(new B.oT(new C.cQG(t),J.ad(t.d),!0,!0,!0,0,B.tq(),s),D.bcB),s))
r=B.w6(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c5(q,D.bhb,r,s,!1,!1,s,s)}}
C.ZV.prototype={
S(){return new C.azG(B.a([],x.bx))},
V_(d){return this.d.$1(d)}}
C.aH5.prototype={}
C.azG.prototype={
b3G(d,e,f){var w=$.ax(),v=new B.au(new B.ba(d,A.b6,A.aP),w),u=this.gb0v()
v.aW(0,u)
w=new B.au(new B.ba(e,A.b6,A.aP),w)
w.aW(0,u)
return new C.aH5(v,w,f)},
EE(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cy(A.qE,new C.cPN(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a3()
w=m.a.c.b
v=$.ax()
u=new B.au(new B.ba(w.a,A.b6,A.aP),v)
t=m.gb0v()
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
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b6,A.aP),v)
o.aW(0,t)
n=new B.au(new B.ba(p.b,A.b6,A.aP),v)
n.aW(0,t)
r.push(new C.aH5(o,n,p.c))}if(r.length===0)r.push(m.b3G("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpz()
q=r.a
q.V_(q.c)}q=r.d
q===$&&B.c()
w=q.U$=$.ax()
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
s.P$=0}r.a2()},
gpz(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.I)(s),++q){p=s[q]
t.push(new F.mS(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rP(n,w,v,t,u)},
Br(){var w=0,v=B.j(x.H),u=this,t
var $async$Br=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpz()
t=u.a
w=2
return B.b(t.V_(t.c),$async$Br)
case 2:return B.h(null,v)}})
return B.i($async$Br,v)},
c9T(){this.m(new C.cPM(this))
this.EE()},
b_r(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cPP(w,d,v))
w.EE()},
c9U(d,e){var w=A.d.cG(this.w,e)
this.m(new C.cPX())
this.EE()
$.aU.x1$.push(new C.cPY(w))},
Rp(d){return this.coD(d)},
coD(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rp=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().l9(80,1400,A.eQ),$async$Rp)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$Rp)
case 8:p=f
o=q.b.toLowerCase()
n=J.ajh(o,".png")?"image/png":"image/jpeg"
r.m(new C.cPQ(d,n,p))
r.EE()
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
return B.i($async$Rp,v)},
yu(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hHd(r,t.gpz()),$async$yu)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cPO(t,s))
t.EE()
case 1:return B.h(u,v)}})
return B.i($async$yu,v)},
coV(d){var w,v=this,u=null,t=F.fP3(d.c)
if(t==null)return new B.bK(A.a5,u,u,B.hs(D.bUZ,D.fSh,new C.cPS(v,d),u),u)
w=x.p
return new B.D(A.cx,new B.an(A.a0,u,A.ac,A.t,B.a([B.bu(B.l(12),B.fU(t,A.A,u,u,A.cl,A.c0,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b6P(A.jN,new C.cPT(v,d)),A.bm,v.b6P(A.cB,new C.cPU(v,d))],w),A.l,u,A.e,A.h,0,u,u),u,u,u,6,6,u)],w),u),u)},
b6P(d,e){var w=null
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(A.hO,B.X(d,A.c,w,w,w,18),w),A.cS,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.b5,0,w,w,A.cS,w,w,A.ai)},
K_(){var w=0,v=B.j(x.H),u,t=this,s
var $async$K_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Br(),$async$K_)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hiV(s,t.gpz(),new C.cPW(t)),$async$K_)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K_,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eR(B.a([new B.D(A.pu,B.hs(D.bZN,D.fYw,m.gaAW(),B.ft(l,l,l,l,l,l,l,l,l,l,l,A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aH(l,l,l,l,A.asW,l,l,l,new C.cPZ(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.ZB,l,1,l,l,l,!1,l,!1,E.nB,l,l,l,!0,l,l,l,l,l,D.fT9,l,l,l,1,l,!0),i=Az.aWX(M.lI,A.c,Ah.Yg,A.oP,D.fTU,m.gc9S()),h=B.l(18),g=m.gayU(),f=B.a([new B.ab(0,A.G,A.w.j(0.4),A.i4,12)],x.V)
f=B.az(l,B.p(l,new B.a4(92,142.1818181818182,new B.dF(A.dD,A.A,A.f,F.apO(m.gpz()),l),l),A.f,l,l,new B.o(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.p(l,B.A(B.a([f,A.ev,B.E(B.x(B.a([D.h5i,A.aw,B.d(F.hhj(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fGn,l,l,l),A.T,B.dh(E.asd,l,E.aYd,g,B.bo(A.d5,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.h,0,A.p),1)],k),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.o(E.ZB,l,l,h,l,l,A.n),l,l,l,l,A.bj,l,l,l)
g=m.d
g===$&&B.c()
g=B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(12),A.du),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.p6,!0,A.a6,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(12),A.du),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a6,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.P,w,A.P,B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(12),A.du),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a6,l,A.ao,l,l,l,l),A.aO],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aP(16,16)
u=new B.ay(M.lI.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fGW,l,l,l)
r=B.aH(l,l,l,l,D.bYo,l,l,l,v===0?l:new C.cQ_(m,v),l,l,l,l,"Move up",A.cg)
q=h.length
p=B.aH(l,l,l,l,D.c48,l,l,l,v===q-1?l:new C.cQ0(m,v),l,l,l,l,"Move down",A.cg)
q=q===1?l:new C.cQ1(m,v)
o=new B.aP(12,12)
n=new B.aP(12,12)
f.push(B.p(l,B.x(B.a([new B.c7(A.aL,A.e,A.h,A.l,l,A.p,l,0,B.a([s,A.b1,r,p,B.aH(l,l,l,l,B.X(A.ek,A.pq,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.cg)],k),l),B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e7(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.du),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,A.cd,!0,A.a6,l,A.ao,l,l,l,l),A.am,m.coV(h[v]),B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e7(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.du),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a6,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.h,0,A.p),A.f,l,l,new B.o(E.nB,l,new B.bF(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9L(g),A.em,D.bDU,l,l,l))}return B.oQ(!0,B.c5(j,E.ak_,B.cm(f,l,l,D.bEo,l,l,A.ah,!1),l,!1,!1,i,l),new C.cQ2(m),x.C)}}
C.azI.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.bY:E.nB,q=B.l(16),p=B.l(16),o=s?A.aA.j(0.08):A.c.j(0.04)
s=s?A.aA.j(0.16):A.d5.j(0.22)
w=B.l(12)
v=x.p
return new B.D(A.eP,B.aG(!1,A.a3,!0,t,B.aM(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bb,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.m(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bE,B.d(u.e,t,t,t,t,t,t,D.aWK,t,t,t)],v),A.E,t,A.e,A.h,0,A.p),1),B.X(A.eI,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.h,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bj,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.ai),t)}}
C.as8.prototype={
S(){return new C.aFT()}}
C.aFT.prototype={
Y(){this.a3()
this.a_T()},
by(d){this.bJ(d)
if(d.c!=this.a.c)this.a2i()},
a2i(){var w=0,v=B.j(x.H),u=this,t
var $async$a2i=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dN(t,x.H),$async$a2i)
case 2:u.d=null
if(u.c!=null)u.m(new C.emr(u))
w=3
return B.b(u.a_T(),$async$a2i)
case 3:return B.h(null,v)}})
return B.i($async$a2i,v)},
a_T(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_T=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d5(n,"http://")||J.d5(n,"https://")||J.d5(n,"data:")){o=B.ZA(B.cC(n,0,null),new B.Qg(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.W(o)}w=7
return B.b(o.iV(0).dg(0,A.qB),$async$a_T)
case 7:if(r.c==null){w=1
break}r.d.u0(!1)
r.m(new C.emp(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ac(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.emq(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_T,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
cd_(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hh(0)
w.m(new C.ems(w))}else{v.qr(0)
w.m(new C.emt(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.l(8*n.d)
m=B.a([D.jG.j(0.92),D.MG.j(0.95)],x.O)
w=B.K(A.c2.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.X(A.qV,A.c2,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return new B.bM(new B.o(o,o,w,n,o,new B.a8(A.ay,A.aD,A.x,m,o,o),A.n),A.bi,B.as(B.x(B.a([t,new B.a4(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.m(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.N,0,A.p),o,o,o),o)}if(p.f)return B.as(B.X(A.arn,A.aE,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.bef
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.l(6*n.d)
m=B.a([new B.dF(A.c0,A.A,A.t,new B.a4(r,q,new B.AM(s,o),o),o)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.p(o,B.X(A.hd,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a7),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.az(o,B.bu(n,new B.an(A.a0,o,A.b2,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gccZ(),o,o,o,o,o,o,!1,A.a4)}}
C.yc.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.jG.prototype={}
C.aeG.prototype={
B(d){return B.pi(new C.e8M(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.ae4.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.l(18),r=B.l(18),q=B.K(D.jG.j(t?0.35:0.4),A.r,1),p=t?D.Nm:A.c,o=x.V,n=B.a([new B.ab(0,A.G,A.w.j(t?0.3:0.08),A.cy,14)],o),m=B.l(10),l=B.K(A.c2.j(0.5),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dL,6)],o)
w=this.c
o=B.E(B.p(u,new B.fH(0.5625,C.in8(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ao2,u,u,u,u),1)
m=D.jG.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.m(u,u,t?A.c:D.jG,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a3,!0,u,B.aM(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cQ,B.d(w.c,u,2,A.a2,u,u,u,B.m(u,u,t?A.aE:D.bq_,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.h,0,A.p),A.f,u,u,new B.o(u,u,new B.bF(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.amh,u,u,u)],v),A.al,u,A.e,A.h,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)}}
C.yf.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.o8.prototype={}
C.blV.prototype={
a01(d){var w=null
return new B.bK(A.a5,w,w,B.BT(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.l(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
cdt(){return this.a01(1)},
azA(d){var w=null,v=B.l(8),u=B.K(A.iu,A.r,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.m(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ahA,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.K(A.iu,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.f,v,v,new B.o(v,v,B.K(A.iu,A.r,1.6),v,v,v,A.a7),v,22,v,v,v,v,v,22),new B.r(-8.36,0))],u),A.l,v,A.b8,A.h,0,v,v),A.aw,B.d("HATI YA NDOA",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.m(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.azA("TAARIFA ZA WANANDOA"),A.am,w.cdt(),A.cQ,w.a01(0.9),A.cQ,w.a01(0.7),A.P,w.azA("TAMKO LA MAKUBALIANO"),A.fC,w.a01(1),A.cQ,w.a01(0.95),A.P,w.azA("MASHAHIDI"),A.b1,B.d("NGMY",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.h,0,A.p)}}
C.aeJ.prototype={
B(d){return B.pi(new C.erd(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.agp.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.l(18),o=B.l(18),n=B.K(A.aF.j(q?0.35:0.4),A.r,1),m=q?D.bpw:A.c,l=x.V,k=B.a([new B.ab(0,A.G,A.w.j(q?0.3:0.08),A.cy,14)],l),j=B.l(10),i=B.K(A.aF.j(0.5),A.r,1)
l=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dL,6)],l)
w=this.c
v=C.hhP(w.a)
if(v==null)v=A.d.gH(D.T1)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fH(0.5625,new B.an(A.a0,r,A.b2,A.t,B.a([B.bR(0,B.fU(C.hhO(v.d),A.A,r,r,A.cl,A.c0,!0,r,!1,r,r),0,0,0),new B.D(A.amW,new C.blV(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ao2,r,r,r,r),1)
j=A.aF.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.m(r,r,q?A.c:S.Nn,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a3,!0,r,B.aM(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cQ,B.d(w.c,r,2,A.a2,r,r,r,B.m(r,r,q?A.aE:D.bhQ,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.h,0,A.p),A.f,r,r,new B.o(r,r,new B.bF(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.amh,r,r,r)],s),A.al,r,A.e,A.h,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.le.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a9d.prototype={}
C.X4.prototype={
S(){var w=$.ax()
return new C.aG9(new B.cw(null,x.A),new B.au(A.ax,w),new B.au(A.ax,w),B.mZ(0,null,null),A.d.gH(D.a6m),D.e06,B.a([],x.L),B.a([],x.gE))}}
C.aG9.prototype={
Y(){var w,v=this
v.a3()
v.w=v.a.c
v.z=new C.Ac(C.fT2(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fRU().bG(new C.eua(v),w)
$.rk().jo(0,"assets/images/ngmy_logo.png").bG(new C.eub(v),w).eH(new C.euc())},
t(){var w=this,v=w.e,u=$.ax()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.t()
w.a2()},
afL(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
JF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$JF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().l9(88,1600,A.eQ),$async$JF)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$JF)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hHu(m,p),$async$JF)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bGk(new B.qc(o,1),m),$async$JF)
case 10:if(r.c!=null)r.m(new C.etN(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ac(k)
r.afL("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JF,v)},
XR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hHu(s,q),$async$XR)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bGk(new B.qc(r,1),s),$async$XR)
case 4:if(t.c!=null)t.m(new C.etJ(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XR,v)},
afM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.etU(q))
t=4
q.a.toString
p=C.irH()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afM)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etV(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ac(i)
q.afL(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etW(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afM,v)},
a06(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a06=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.etP(q,i))
t=4
q.a.toString
p=C.irG()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a06)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.etQ(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ac(g)
if(q.c!=null)q.m(new C.etR(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etS(q))
$.aU.x1$.push(new C.etT(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a06,v)},
cdJ(d){this.m(new C.etO(this,d))},
EV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.etL(q))
t=4
w=7
return B.b($.aU.gmv(),$async$EV)
case 7:w=8
return B.b(B.bN(A.n0,null,x.H),$async$EV)
case 8:k=$.aU.ao$.x.h(0,q.d)
p=k==null?null:k.gbf()
if(!(p instanceof B.qm))throw B.W("The page is not ready yet.")
w=9
return B.b(p.lU(1800/p.gZ(0).a),$async$EV)
case 9:o=e
w=10
return B.b(o.hi(A.he),$async$EV)
case 10:n=e
if(n==null)throw B.W("Could not make the picture.")
w=11
return B.b(A9.ahM(J.eQ(A.dK.gaU(n)),"ngmy_news.png","image/png"),$async$EV)
case 11:m=e
q.afL(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
q.afL(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.etM(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EV,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.lq,a2,a2,a2,new C.eu1(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.c_k,a2,a2,a2,new C.eu2(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oO,a2,a2,a2,a4?a1.gb1N():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eR(v,a2,a2,!0,!0,A.Ch,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.fdD,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ab(0,A.G,A.w.j(0.6),A.eR,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fH(0.7142857142857143,new B.dF(A.dD,A.A,A.f,new B.en(new C.b3h(t,s,r,a1.x,a2),a1.d),a2),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,Z.tZ,a2,a2,a2)
t=a1.as?a2:a1.gcdI()
t=B.a([B.E(B.dh(D.c06,a2,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cd,a2,a2,a2),t,B.bo(D.ur,a2,a2,a2,A.c,A.hf,a2,a2,new B.b9(B.l(14),P.w1),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bu(B.l(10),B.fU(r,A.A,a2,a2,A.cl,A.c0,!1,48,!1,a2,48),A.aq)
A.d.u(t,B.a([A.as,r,B.aH(a2,a2,a2,a2,D.bXF,a2,a2,a2,a1.as?a2:a1.gbNw(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.h,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,Z.tZ,a2,a2,a2)
q=B.aN(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aVk("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ad,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dj,!0,A.a6,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.ds1[o]
p.push(B.n4(a2,D.ur,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pY,a2,a2,a2),A.hr,new C.eu3(a1,n),a2,a2,P.w1,a2))}p=B.bZ(A.bH,p,A.br,a2,6,8)
m=a1.Q
m=B.bZ(A.bH,B.a([D.h3Q,A.bb,B.jy(a2,a2,a2,D.fOo,a2,new C.eu4(a1),m==="en",a2,a2,a2,a2),A.af,B.jy(a2,a2,a2,D.fOj,a2,new C.eu5(a1),m==="sw",a2,a2,a2,a2)],w),A.vW,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,Z.tZ,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cX(D.a6m,0,B.dC(10,"count",x.S),j),h=i.$ti,i=new B.bQ(i,i.gJ(0),h.k("bQ<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aTM(g==null?h.a(g):g))}k=B.cm(k,a2,a2,a2,a2,a2,A.aL,!1)
i=B.a([],w)
for(j=B.cX(D.a6m,10,a2,j),h=j.$ti,j=new B.bQ(j,j.gJ(0),h.k("bQ<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aTM(g==null?h.a(g):g))}j=B.cm(i,a2,a2,a2,a2,a2,A.aL,!1)
i=a1.as?a2:a1.gcdL()
h=B.l(18)
v=B.a([new B.ab(0,A.G,A.bD.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cx,s,a2),t,A.aB,new B.D(A.cx,r,a2),q,A.P,p,A.T,m,A.aB,new B.D(A.cx,l,a2),new B.a4(a2,78,k,a2),A.P,new B.a4(a2,78,j,a2),A.aO,B.az(a2,B.p(A.A,B.A(B.a([D.c00,A.af,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fD,a2,a2,a2)],w),A.l,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.vc,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.e2,B.A(B.a([D.dLj,A.as,D.bKN],w),A.l,a2,A.e,A.h,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a9:A.a5
q=e?A.b7.j(0.35):D.ur
p=new B.aP(16,16)
d=new B.ay(A.bx,1,A.r,-1)
u.push(new B.bK(r,a2,a2,B.p(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fEb,a2,a2,a2),A.f,a2,Aa.Y1,new B.o(q,a2,new B.bF(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cx,A.hN,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.dd2[o]
t.push(B.n4(a2,D.ur,B.d(a0,a2,a2,a2,a2,a2,a2,A.KV,a2,a2,a2),A.hr,new C.eu6(a1,a0),a2,a2,P.w1,a2))}u.push(B.bZ(A.bH,t,A.br,a2,6,8))
u.push(A.T)
t=B.E(B.aN(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aVk("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eu7(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ad,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dj,!0,A.a6,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gcdK()
u.push(B.A(B.a([t,A.af,B.IE(A.zK,s,B.o2(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.h,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb1N()
u.push(B.dh(A.oO,a2,D.h_f,t,B.bo(A.dn,a2,a2,a2,a2,A.KC,a2,a2,new B.b9(B.l(16),A.a1),a2,a2,a2)))
A.d.u(v,u)}v=B.a([B.cm(v,a1.r,a2,A.amG,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.l(20)
s=B.K(E.kv.j(0.5),A.r,1)
v.push(B.bR(0,B.ea(B.as(B.p(a2,B.A(B.a([E.ab8,A.ev,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jB,a2,a2,a2)],w),A.l,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(E.C6,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bGQ,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c5(a3,A.Ch,new B.an(A.a0,a2,A.ac,A.t,v,a2),a2,!1,!1,a2,a2)},
aVk(d){var w=null
return B.bz(w,new B.b6(4,B.l(14),A.a1),w,A.eV,w,w,w,w,!0,w,w,w,w,w,w,D.ur,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.EY,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aTM(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.l(12),q=B.b0(d.f),p=s?A.bD:A.bx
p=B.K(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.k6,t,t,t,t),A.fC],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bCQ,t,t,t,t))
w.push(A.cQ)
w.push(new B.D(A.jq,B.d(d.b,t,1,A.a2,t,t,t,B.m(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.az(t,B.p(t,B.x(w,A.l,t,A.b8,A.h,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iQ,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.etK(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Ac.prototype={
bfq(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Ac(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cOD(d){var w=null
return this.bfq(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.J(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aF0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cjQ(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aT(g);v.C();){u=v.gR(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.cjO(),B.U(w).k("N<1,n>")).bY(0,new C.cjP())
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
return this.bfq(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gG8(d){return this.f}}
C.tP.prototype={
a7(){return"NewsLayout."+this.b}}
C.C7.prototype={
a7(){return"NewsFrame."+this.b}}
C.lB.prototype={}
C.b3h.prototype={
rZ(d,e,f,g,h,i,j){var w=null
return B.m(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b1P(d,e,f,g){return this.rZ(d,e,null,1.25,f,A.bq,g)},
QI(d,e,f,g,h){return this.rZ(d,e,f,1.25,g,A.bq,h)},
azG(d,e,f,g,h){return this.rZ(d,e,null,f,g,A.bq,h)},
azF(d,e,f,g,h){return this.rZ(d,e,f,g,0,A.bq,h)},
b1R(d,e,f,g,h){return this.rZ(d,e,null,f,0,g,h)},
cdP(d,e,f,g,h,i){return this.rZ(d,e,f,g,0,h,i)},
azE(d,e,f,g){return this.rZ(d,e,null,f,0,A.bq,g)},
afP(d,e,f){return this.rZ(d,e,null,f,0,A.bq,A.cY)},
b1Q(d,e,f,g,h){return this.rZ(d,e,f,g,0,h,A.cY)},
cdO(d,e,f,g){return this.rZ(d,e,null,f,0,g,A.cY)},
cdN(d,e,f,g){return this.rZ(d,e,f,g,0,A.bq,A.cY)},
afQ(d,e,f,g,h,i){return this.rZ(d,e,f,g,h,A.bq,i)},
b1O(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iM(new B.eq(d,u,u,A.cL,u,u,u,u,u,u,new B.F(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a6,A.bW,new B.jj(1),u,u,h,u,A.bX,u,A.cr)
v.mZ(g)
if(!v.b.a.c.gaGM())return w
w-=2}return j},
afN(d,e,f,g,h,i,j,k){return this.b1O(d,e,f,g,h,i,j,k,A.bq)},
aBR(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.u(t,B.a([new B.a4(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.h,0,A.p)},
aBQ(d){return this.aBR(null,!1,d)},
aiN(d,e){return this.aBR(null,d,e)},
cvJ(d,e){return this.aBR(d,!1,e)},
gb42(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaY1(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pr(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afN(w.gaY1(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaY1(),v,g,A.a2,v,v,v,w.azF(u,t,f,1.02,A.O),e,v,v)},
aY6(d){return this.Pr(d,A.K,null,2,78,30)},
ad0(d,e,f,g,h){return this.Pr(d,e,null,f,g,h)},
c1N(d,e,f,g,h){return this.Pr(d,A.K,e,f,g,h)},
c1M(d,e,f){return this.Pr(d,A.K,null,e,f,30)},
SH(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jK,B.d(s,u,g,A.a2,u,u,u,v.b1Q(w,v.b1O(t,w,A.cY,d,g,h,15,1.2,A.cI),f,1.2,A.cI),e,u,u),u)},
b9Z(d){return this.SH(d,A.K,null,3,24)},
aDk(d,e,f,g){return this.SH(d,e,null,f,g)},
cDp(d,e,f){return this.SH(d,A.K,e,3,f)},
ba_(d,e){return this.SH(d,e,null,3,24)},
cDn(d,e){return this.SH(d,A.K,null,3,e)},
cDo(d,e,f){return this.SH(d,e,null,3,f)},
atb(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f3,B.d(u.toUpperCase(),v,v,v,v,v,v,w.QI("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.h,0,v,v)},
Ol(){return this.atb(null,!0)},
ata(d){return this.atb(null,d)},
bJp(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.hZ,new B.a4(d,w,B.d(v,w,2,A.a2,w,w,w,this.cdO(this.d.as,13.5,1.2,A.cI),e,w,w),w),w)},
wc(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb42(),h=A.o.ar(j.bC(B.c_(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.if9(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b1P(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afN(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afN(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eS,l,l,l,m.afQ(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.l,l,A.e,A.h,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bFy(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.iY,A.h,0,l,l),A.am,m.aiN(!0,3)],s),A.l,l,A.e,A.h,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.ev,B.E(B.d(i,l,1,A.eS,l,l,l,m.azE(v,u*0.9,1,A.O),l,l,l),1)],w),A.l,l,A.e,A.h,0,l,l),A.T,B.A(B.a([B.d(C.bFy(j),l,l,l,l,l,l,m.QI(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.iY,A.h,0,l,l),A.P,m.cvJ(B.b0(h),3)],w),A.l,l,A.e,A.h,0,A.p)
case"logo":r=a0?52:64
w=m.gb42()
v=B.d("NGMY",l,l,l,l,l,l,m.azG(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.l(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.af,B.eI(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rZ(k,r*0.72,o,1.05,-0.5,A.cI,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b1,new B.di(1,A.cm,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afQ(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.e3,l,l),l)],n),A.l,l,A.e,A.h,0,l,l),A.P,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.h,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iY,A.h,0,l,l)
t=m.aiN(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azE(v,u,1,A.O),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.aw,t,new B.a4(l,s,l,l),v,new B.a4(l,q,l,l),m.aiN(!0,1.4),A.aw,B.d(C.bFy(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.aw,m.aBQ(3)],h),A.l,l,A.e,A.h,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azG(v,u,1,3,A.O),A.K,l,l),A.P,m.aiN(!0,1.2),A.aw,B.A(B.a([B.d(C.bFy(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.iY,A.h,0,l,l),A.aw,m.aBQ(3)],h),A.l,l,A.e,A.h,0,A.p)}},
aed(d){return this.wc(d,!1)},
afO(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.l(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.afQ("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
cdM(d,e){return this.afO(d,null,e,null)},
b_j(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.df(v),12)===0?12:A.o.F(B.df(v),12),t=B.b0(this.d.w).j(0.75),s=this.azF("Roboto",15,t,1,A.cD),r=B.X(E.apF,t,w,w,w,18),q=A.a.az(A.oT[B.bL(v)-1],0,3),p=A.a.b_(A.o.v(B.fS(v)),2,"0"),o=B.df(v)>=12?"PM":"AM"
return B.A(B.a([r,A.af,B.d(q+" "+B.bX(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.ha,w,w,w,1),B.X(d,t,w,w,w,19),A.af,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.h,0,w,w)},
ayl(){return this.b_j(A.n7)},
b71(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afQ("Roboto",this.afN(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aBU(d,e,f){return this.b71(d,e,f,30)},
aDn(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.t3,B.d(v,w,e,A.a2,w,w,w,this.cdN("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
ba3(d){return this.aDn(d,3,22)},
cDA(d,e){return this.aDn(d,e,22)},
ul(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fU(r,A.A,s,s,A.cl,A.c0,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BF(D.bJH,w,s)
if(v==="sepia")w=new B.BF(D.bJG,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.as(B.X(A.zg,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(new B.bM(new B.o(s,s,s,s,s,new B.bV(A.A,0.95,A.x,s,0,B.a([A.L,A.Zx.j(0.38)],x.O),s,s),A.n),A.bi,s,s))
return new B.a4(d,e,new B.an(A.a0,s,A.b2,A.t,v,s),s)},
qY(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.K(B.b0(i),A.r,3)
i=B.K(B.b0(i),A.r,1)
return B.p(j,B.p(j,k.ul(d-24,e-24),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,j,j,j,A.eC,j,j,j),A.f,j,j,new B.o(j,j,w,j,j,j,A.n),j,e,j,j,A.lO,j,j,d)
case 2:w=B.a([new B.ab(0,A.G,A.w.j(0.35),D.es8,14)],x.V)
v=k.ul(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eI(A.A,-0.035,B.p(j,B.x(B.a([v,B.E(B.as(B.d(u,j,2,A.a2,j,j,j,k.b1Q(i.as,13.5,D.bjz,1.1,A.cI),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.h,0,A.p),A.f,j,j,new B.o(D.bnu,j,j,j,w,j,A.n),j,e,j,j,D.bEj,j,j,d),j)
case 3:w=B.l(30)
i=B.K(B.b0(i.x),A.r,5)
return B.p(j,B.bu(B.l(25),k.ul(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.K(B.b0(i.x),A.r,6)
i=B.b0(i.f)
v=t-10
return new B.a4(d,e,B.as(B.p(j,B.hZ(k.ul(v,v),A.aq),A.f,j,j,new B.o(i,j,w,j,j,j,A.a7),j,t,j,j,A.lO,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ab(0,A.G,A.w.j(0.3),D.erP,10)],x.V)
return B.eI(A.A,0.025,new B.a4(d,e,new B.an(A.a0,j,A.ac,A.f,B.a([B.bR(0,B.p(j,k.ul(d-18,e-18),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,j,j,j,A.ta,j,j,j),0,0,0),B.ao(j,B.eI(A.A,-0.6,B.p(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ao(-10,B.eI(A.A,-0.6,B.p(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b0(i.x)
return new B.a4(d,e,B.b3(B.nW(k.ul(d,e),A.aq,D.hz5),new C.beV(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ul(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.j.bi(s));++m){l=new B.aP(2,2)
n.push(B.p(j,j,A.f,j,j,new B.o(A.bO,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cK(0,p,0,o,j,j,new B.c7(A.aL,A.r_,A.h,A.l,j,A.p,j,0,n,j),j))}return B.p(j,new B.an(A.a0,j,A.b2,A.t,w,j),A.f,A.ep,j,j,j,e,j,j,D.bIX,j,j,d)
case 8:w=d/2
v=B.xA(A.fR,new B.aP(w,w))
i=B.K(B.b0(i.x),A.r,5)
w-=5
return B.p(j,B.bu(B.xA(A.iD,new B.aP(w,w)),k.ul(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ab(0,A.G,A.w.j(0.35),A.fQ,22)],x.V)
return B.p(j,k.ul(d-20,e-20),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bU,j,j,d)
case 10:return new B.a4(d,e,B.nW(k.ul(d,e),A.aq,D.hGL),j)
case 0:i=B.K(B.b0(i.w),A.r,2.4)
return B.p(j,k.ul(d-14,e-14),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,e,j,j,A.eC,j,j,d)}},
aRg(d,e){return this.d.e===D.TE?A.bM:this.bJp(d,e)},
Xn(d){return this.aRg(d,A.K)},
gaCE(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCD(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.K(B.b0(v.w),A.r,1.6)
t=v.x
s=B.b0(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.as(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b1R(v.Q,19,1.15,A.cI,A.O),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.QI("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.aw)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afP(v.as,13,1.25),n,n,n),1))
A.d.u(q,r)}return B.p(n,B.jo(B.x(q,A.E,n,A.e,A.h,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bj,n,n,d)},
gcm7(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aaI(d,e,f,g){return B.cn(new C.cjR(this,e,d,f,g))},
aaH(d){return this.aaI(d,22,!0,18)},
XA(d,e){return this.aaI(d,22,!0,e)},
aSm(d,e,f){return this.aaI(d,22,e,f)},
bLq(d,e,f){return this.aaI(d,e,!0,f)},
bd3(d,e,f,g){return B.cn(new C.cjS(this,e,d,g,!0,f))},
ckV(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.aed(824),A.aB,k.aY6(824),k.b9Z(824),A.P,k.Ol(),A.ae,B.as(k.qY(824,360),j,j,j),k.Xn(824),A.ae,B.E(k.aaH(3),1)],x.p),A.al,j,A.e,A.h,0,A.p)
case 1:w=x.p
return B.x(B.a([k.aed(824),A.aO,new B.a4(j,350,B.A(B.a([new B.a4(440,j,B.x(B.a([k.ad0(440,A.bn,3,62,26),k.aDk(440,A.bn,2,20),A.b1,k.atb(B.b0(h.x),!1)],w),A.E,j,A.e,A.h,0,A.p),j),A.KD,B.x(B.a([k.qY(362,310),k.Xn(362)],w),A.l,j,A.e,A.h,0,A.p)],w),A.E,j,A.e,A.h,0,j,j),j),A.T,k.aBQ(2),A.ae,B.E(k.aaH(3),1)],w),A.al,j,A.e,A.h,0,A.p)
case 2:w=k.wc(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.c1N(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cDp(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.x(s,A.l,j,A.e,A.h,0,A.p),A.f,v,j,j,j,j,j,j,A.CE,j,j,j)
u=B.a([B.as(k.qY(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.TE){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.azF(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lN,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.ae,v,A.ae,new B.an(A.a0,j,A.ac,A.t,u,j),A.P,k.Ol(),A.T,B.E(k.XA(2,21),1)],t),A.al,j,A.e,A.h,0,A.p)
case 3:h=k.wc(824,!0)
w=k.qY(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.ae,new B.an(A.b4,j,A.ac,A.t,B.a([w,B.ao(0,B.p(j,k.Pr(780,A.bn,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.aZ,A.b4,A.x,v,j,j),A.n),j,j,j,j,D.bH8,j,j,j),j,j,0,0,j,j)],u),j),k.ba_(824,A.bn),A.P,k.Ol(),A.T,B.E(k.aaH(3),1)],u),A.al,j,A.e,A.h,0,A.p)
case 4:h=x.p
return B.x(B.a([k.aed(824),A.aB,k.aY6(824),k.b9Z(824),A.P,k.Ol(),A.ae,B.E(k.bd3(3,300,B.x(B.a([k.qY(300,300),k.Xn(300)],h),A.l,j,A.e,A.h,0,A.p),360),1)],h),A.al,j,A.e,A.h,0,A.p)
case 5:w=k.wc(824,!0)
v=x.p
u=B.x(B.a([k.ad0(440,A.bn,3,62,26),k.aDk(440,A.bn,2,20),A.b1,k.ata(!1)],v),A.E,j,A.e,A.h,0,A.p)
return B.x(B.a([w,A.by,new B.a4(j,400,B.A(B.a([new B.a4(440,j,u,j),A.aUB,new B.D(A.hZ,k.qY(364,h.e===D.TE?400:330),j)],v),A.E,j,A.e,A.h,0,j,j),j),A.aB,B.E(k.XA(2,21),1)],v),A.al,j,A.e,A.h,0,A.p)
case 6:return B.x(B.a([k.aed(824),A.ae,k.c1M(824,2,70),k.cDn(824,21),A.P,k.Ol(),A.ae,B.E(k.bd3(3,340,B.as(k.qY(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.h,0,A.p)
case 7:w=k.wc(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bFy(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.QI(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bj,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b1R(h.Q,24,1.15,A.cI,A.O),j,j,j))
v.push(A.b1)
if(k.gaCE())v.push(k.aCD(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a4(230,j,B.x(v,A.al,j,A.e,A.h,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.amf,j,j,j,1.2),new B.a4(570,j,B.x(B.a([k.ad0(570,A.bn,3,62,28),k.cDo(570,A.bn,20),A.P,k.ata(!1),A.P,B.as(k.qY(570,330),j,j,j),k.Xn(570),A.T,B.E(k.aSm(2,!1,17),1)],t),A.al,j,A.e,A.h,0,A.p),j)],t),A.E,j,A.e,A.h,0,j,j),1)],t),A.al,j,A.e,A.h,0,A.p)
case 8:w=k.wc(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.QI(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.ae,B.p(j,B.x(B.a([t,A.am,k.Pr(788,A.bn,v?A.w:B.b0(h.f),2,72,30)],s),A.E,j,A.e,A.h,0,A.p),A.f,u,j,j,j,j,j,j,D.bFp,j,j,j),k.ba_(824,A.bn),A.T,B.as(k.qY(824,310),j,j,j),k.Xn(824),A.P,k.Ol(),A.T,B.E(k.aaH(3),1)],s),A.al,j,A.e,A.h,0,A.p)
case 10:w=x.p
return B.x(B.a([k.wc(824,!0),A.aO,new B.an(A.a0,j,A.ac,A.t,B.a([k.qY(824,430),B.ao(18,k.cdM(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.aBU(824,3,66),k.ba3(824),A.ae,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.ayl(),A.aB,B.E(k.XA(2,18),1)],w),A.al,j,A.e,A.h,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.wc(824,!0),A.by,new B.a4(j,500,B.A(B.a([new B.a4(410,j,B.x(B.a([k.afO(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aO,k.b71(410,4,58,28),k.aDn(410,6,20),A.b1],w),A.E,j,A.e,A.h,0,A.p),j),W.aUC,k.qY(390,500)],w),A.E,j,A.e,A.h,0,j,j),j),A.aB,k.ayl(),A.aO,B.E(k.XA(2,18),1)],w),A.al,j,A.e,A.h,0,A.p)
case 12:w=k.wc(824,!0)
v=k.qY(824,420)
u=B.hSp(-0.25)
t=B.b0(h.x)
s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aO,new B.an(A.a0,j,A.ac,A.t,B.a([v,B.ao(22,B.fB(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cdP(i,30,A.c,1,A.cI,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bHo,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.aBU(824,3,62),k.ba3(824),A.ae,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ae,k.b_j(A.lS),A.aB,B.E(k.XA(2,18),1)],r),A.al,j,A.e,A.h,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.wc(824,!0)
u=h.w
t=x.p
w=B.a([k.qY(824,380),B.ao(j,k.afO(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.aBU(824,2,60)
r=k.cDA(824,2)
p=k.ayl()
o=B.E(k.aSm(2,!1,18),1)
n=B.K(B.b0(u).j(0.18),A.r,1)
m=B.l(18)
h=h.x
l=B.b0(h).j(0.05)
return B.x(B.a([v,A.aO,new B.an(A.a0,j,A.ac,A.t,w,j),A.aO,s,r,A.T,p,A.aB,o,A.ae,B.p(j,B.A(B.a([B.bu(B.l(14),k.ul(150,104),A.aq),A.p4,B.E(B.x(B.a([k.afO("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.azE(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.N,0,A.p),1),B.X(A.eI,B.b0(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.h,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bj,j,j,j)],t),A.al,j,A.e,A.h,0,A.p)
case 9:return B.x(B.a([k.wc(824,!0),A.by,k.ad0(824,A.bn,3,62,30),k.aDk(824,A.bn,2,22),A.T,k.ata(!1),A.T,B.as(k.qY(824,330),j,j,j),k.aRg(824,A.bn),A.aO,B.E(k.bLq(2,40,21),1)],x.p),A.al,j,A.e,A.h,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,new B.bM(new B.o(s,s,s,s,s,new B.a8(A.ay,A.aD,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bi,s,s),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b3(s,s,s,new C.bbm(B.b0(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bHV,B.x(B.a([B.E(t.ckV(),1),A.P,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.fC,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b1P(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.QI(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.iY,A.h,0,s,s)],o),A.al,s,A.e,A.h,0,A.p),s))
v=B.b0(w)
n.push(B.bR(0,new B.du(!0,B.b3(s,s,s,new C.bur(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b0(p).j(0.75)
v=B.K(B.b0(w).j(0.5),A.r,1.2)
u=B.l(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hZ(B.fU(q,A.A,s,s,A.cl,A.c0,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.n7,B.b0(w),s,s,s,28))
o.push(A.af)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azG(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,new B.du(!0,B.d3(B.p(s,B.A(o,A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bJ5,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a4(900,1260,B.jo(new B.an(A.a0,s,A.ac,A.t,n,s),A.t,s),s)}}
C.beW.prototype={
ju(d){return C.hvO(d)},
ka(d){return!1}}
C.beV.prototype={
a4(d,e){var w,v=C.hvO(e)
$.S()
w=B.L()
w.r=this.b.gp(0)
w.b=A.ab
w.c=6
return d.ag(v,w)},
aE(d){return!d.b.A(0,this.b)}}
C.bwY.prototype={
ju(d){var w,v,u,t,s,r,q,p,o=new B.e6()
o.d_(3)
w=$.S()
v=B.a([],x.v)
u=new B.aI(w.r,A.aj,null,null,v)
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
u.E(new B.bw())
return u},
ka(d){return!1}}
C.bbm.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e6()
o.d_(7)
$.S()
w=B.L()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.O(new B.r(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.r(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.sap(new B.bV(A.A,0.5,A.x,p,0,B.a([A.YU.j(0.13),A.L],v),p,p).aG(0,B.bW(r,q)))
d.O(r,q,w)}w.sap(p)},
aE(d){return!1}}
C.bur.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.fp(u,A.cr,u,u,u,B.cQ(u,u,u,u,u,u,u,u,u,B.m(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a6,A.bW,u,A.dA,A.bX)
s.ec()
w=d.c
J.br(w.save())
w.translate(t/2,e.b*0.52)
d.jr(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.r(-v/2,-t.gba(t)/2))
w.restore()},
aE(d){return!d.b.A(0,this.b)}}
C.X5.prototype={
S(){return new C.aGc()}}
C.aGc.prototype={
Y(){var w=this
w.a3()
B.fJf(w.a.c,null).bG(new C.euX(),x.g7).bG(new C.euY(w),x.a)
w.a.toString},
gaQ2(){var w=D.aAj[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazH(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaQ2()
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
q=A.j.D(v*p,q,p-q)-q
w=A.j.D(u*o,w,o-w)-w
return new B.a6(q,w,q+s,w+t)},
a08(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a08=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.euK(r))
t=4
q=r.gazH()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.q2(new B.pD())
m=B.zs(n,null)
i=B.L()
i.z=A.hn
m.q4(g,q,new B.a6(0,0,0+p,0+o),i)
w=7
return B.b(n.o4().xI(J.hl_(p),J.hl_(o)),$async$a08)
case 7:l=e
w=8
return B.b(l.hi(A.he),$async$a08)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.N(J.eQ(J.w0(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.euL(r))
r.c.L(x.q).f.T(D.fnj)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a08,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.lq,s,s,s,new C.euR(d),s,s,s,s,s,s),p=x.p
q=B.eR(B.a([B.bO(!1,D.h1T,s,s,!0,s,s,s,t.y||r==null?s:t.gcdQ(),s,s)],p),s,s,!0,!0,A.Ch,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h5V,s,s,s,1,s,!0)
if(r==null)p=A.m4
else{w=B.E(new B.D(A.bS,B.as(new B.fH(t.gaQ2(),B.cn(new C.euS(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iQ,B.jy(s,s,s,B.d(D.aAj[u].a,s,s,s,s,s,s,A.abM,s,s,s),s,new C.euT(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a4(s,40,B.cm(v,s,s,s,s,s,A.aL,!1),s),B.A(B.a([D.c0P,B.E(B.l_(s,s,s,6,1,new C.euU(t),t.f),1),D.c0o],p),A.l,s,A.e,A.h,0,s,s),D.h_8,A.am,B.bO(!1,D.fZR,s,s,!0,s,s,s,new C.euV(t,d),s,s)],p),A.l,s,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.ZM,s,s,s,s,s,s,D.bEM,s,s,s)],p),A.l,s,A.e,A.h,0,A.p)}return B.c5(q,A.Ch,p,s,!1,!1,s,s)}}
C.bet.prototype={
a4(d,e){var w
$.S()
w=B.L()
w.z=A.cl
return d.q4(this.b,this.c,new B.a6(0,0,0+e.a,0+e.b),w)},
aE(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a1d.prototype={
S(){var w=$.ax(),v=x.A
return new C.aHD(new B.au(A.ax,w),new B.au(new B.ba("NGMY",A.b6,A.aP),w),new B.cw(null,v),new B.cw(null,v),A.d.gH(D.a7_),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.oZ.prototype={}
C.aHD.prototype={
gaYf(){var w,v,u=this
if(u.p1)w=new B.rB(1,u.p2,0.9,u.p3).jc().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.j.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a3()
w.a.toString
w.p4=null
$.aU.x1$.push(new C.f4j(w))},
t(){var w=this.d,v=$.ax()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
ZF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.rk().jo(0,"assets/images/ngmy_logo.png"),$async$ZF)
case 7:q=e
p=J.eQ(J.w0(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bGk(new B.qc(p,1),o),$async$ZF)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f3b(r,p))
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
return B.i($async$ZF,v)},
QL(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QL=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().l9(92,1800,A.eQ),$async$QL)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$QL)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bGk(new B.qc(p,1),n),$async$QL)
case 9:if(r.c==null){w=1
break}r.m(new C.f3z(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.ac(l)
n=r.c
if(n!=null)n.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Could not open that picture. "+B.w(o),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QL,v)},
b6o(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aI=w.aR=w.aL=w.aH=w.a0=w.bb=w.bn=w.y2=0
w.b8=null
w.b6=0.25
w.bg=null
w.bK=0.5
w.aQ=1
w.c8=w.bH=w.bm=0
w.cO=w.c5=!1},
b_2(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bCW(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dvc)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bCW(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bCW(C.hfy(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bCW(C.hfy(1-a0*0.5,n,n,n),w)}return a1?C.bCW(C.hfy(-1,255,255,255),w):w},
aDt(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kZ(0,this.d.a.a),t=B.C(u,B.a3(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xG(u,v,w)
this.dx.pA(new C.f3J(t),!0)
return t},
b8Y(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDt()
w=C.ipp(e.d.a.a,e.db)
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
return C.ilK(d,k,v,a0,j,e.gaYf(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cBd(){return this.b8Y(null)},
DP(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aU.gmv(),$async$DP)
case 3:w=4
return B.b(B.bN(A.eU,null,x.H),$async$DP)
case 4:w=5
return B.b($.aU.gmv(),$async$DP)
case 5:s=$.aU.ao$.x.h(0,t.r)
r=s==null?null:s.gbf()
if(!(r instanceof B.qm)){u=null
w=1
break}w=7
return B.b(r.lU(1080/r.gZ(0).a),$async$DP)
case 7:w=6
return B.b(e.hi(A.he),$async$DP)
case 6:q=e
u=q==null?null:J.eQ(A.dK.gaU(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DP,v)},
abB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f2V(q))
t=4
w=7
return B.b(q.DP(),$async$abB)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cV.gcu().aO(p)
n=C.Cm(null,null,null,null,D.oY,6,!1,null,null,null,null,null,C.cE(),null,!1,null,"NGMY Quote",null,null,B.a([q.b8Y(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).N(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.ac(j)
l=q.c
if(l!=null)l.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(B.w(m),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f2W(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abB,v)},
B8(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$B8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f2T(q))
t=4
w=7
return B.b($.aU.gmv(),$async$B8)
case 7:w=8
return B.b(B.bN(A.n1,null,x.H),$async$B8)
case 8:w=9
return B.b($.aU.gmv(),$async$B8)
case 9:k=$.aU.ao$.x.h(0,q.f)
p=k==null?null:k.gbf()
if(!(p instanceof B.qm))throw B.W("The picture is not ready yet.")
w=10
return B.b(p.lU(1080/p.gZ(0).a),$async$B8)
case 10:o=e
w=11
return B.b(o.hi(A.he),$async$B8)
case 11:n=e
if(n==null)throw B.W("Could not make the picture.")
w=12
return B.b(A9.ahM(J.eQ(A.dK.gaU(n)),"ngmy_quote.png","image/png"),$async$B8)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.L(x.q).f
k.T(B.b2(null,null,null,null,null,A.t,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
k=q.c
if(k!=null)k.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(B.w(l),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.f2U(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$B8,v)},
co3(){var w=this.p4
w.toString
return B.cn(new C.f3s(this,w))},
b1Y(d,e){var w=null
return B.bz(w,w,w,w,w,D.fyi,w,w,!0,new B.b6(4,B.l(16),P.w1),w,w,w,w,w,D.ur,!0,w,w,w,w,new B.b6(4,B.l(16),D.b6o),w,w,w,w,w,w,w,w,Ae.F5,e,w,w,w,w,w,w,w,D.fE0,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yE(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.u(u,B.a([B.X(e,A.b7,w,w,w,15),A.bm],v))
u.push(B.d(d,w,w,w,w,w,w,D.aXn,w,w,w))
return new B.D(H.am5,B.A(u,A.l,w,A.e,A.h,0,w,w),w)},
b1X(d,e){var w=null,v=B.l(18),u=B.K(A.bx,A.r,1)
return B.p(w,B.aG(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.ik),A.f,w,w,new B.o(D.ur,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wk(d){return this.b1X(d,A.bI)},
oA(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.vc:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.l(30)
u=B.K(f?A.L:A.bx,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.u(s,B.a([B.X(e,q?A.c:A.k0,r,r,r,16),A.bm],t))
s.push(B.d(d,r,r,r,r,r,r,B.m(r,r,q?A.c:A.k0,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.az(r,B.cT(r,B.A(s,A.l,r,A.e,A.N,0,r,r),r,r,A.b0,new B.o(w,r,u,v,r,p,A.n),A.h8,r,r,r,r,A.H0,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahJ(d,e,f){return this.oA(d,null,e,f)},
azL(d,e,f,g,h,i,j){var w=null,v=B.l(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.ey:A.bx,s=x.p
v=B.a([B.cT(w,d,w,w,A.b0,new B.o(u,w,B.K(t,A.r,g?2:1),v,w,w,A.n),A.h8,w,e,w,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aE
A.d.u(v,B.a([A.aw,B.d(f,w,1,A.a2,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.az(w,new B.a4(j,w,B.x(v,A.l,w,A.e,A.N,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b20(d,e,f,g,h,i){return this.azL(d,e,f,g,h,5,i)},
kB(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aWa,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.az(u,D.ewr,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f3F(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.l(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.VU,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a1x,u,u,u))
s=B.A(s,A.l,u,A.e,A.h,0,u,u)
w=this.c
w.toString
w=B.abo(w).cPZ(A.b7,A.bx,A.b7.j(0.2),A.c,D.fcS,4)
return new B.D(A.yL,B.x(B.a([s,B.YY(B.l_(u,u,u,g,f,new C.f3G(this,h),A.j.D(e,f,g)),w)],t),A.l,u,A.e,A.h,0,A.p),u)},
ajM(d,e,f,g,h,i){return this.kB(d,e,f,g,h,null,i)},
aka(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.I)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b0(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bUA:o
n.push(B.az(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bF(p,p,p,p),o,o,o,A.a7),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f3I(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bZ(A.bH,n,A.br,o,10,10)},
bPA(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a7_
else{v=x.a8
w=B.C(new B.Y(D.a7_,new C.f2L(o),v),v.k("M.E"))}v=B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b1Y("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f2M(o),n,n,n,!1,n,n,!1,n,!0,n,A.ad,n,n,n,n,n,n,n,n,n,n,n,A.ac2,!0,A.a6,n,A.ao,n,n,n,n)
u=B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b1Y("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f2N(o),n,n,n,!1,n,n,!1,n,!0,n,A.ad,n,n,n,n,n,n,n,n,n,n,n,A.dj,!0,A.a6,n,A.ao,n,n,n,n)
t=o.yE("DESIGNS",A.uU)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d3L[q]
r.push(new B.D(A.iQ,o.ahJ(p,o.x===p,new C.f2O(o,p)),n))}return B.x(B.a([v,A.T,u,t,B.c9(B.A(r,A.l,n,A.e,A.h,0,n,n),A.t,n,A.y,n,n,n,n,A.aL),A.ae,new B.a4(n,118,B.hI(n,new C.f2P(o,w),w.length,n,n,n,A.aL,new C.f2Q(),!1),n),A.P,o.b1X(B.x(B.a([B.iU(A.b7,n,n,A.ag,!0,new C.f2R(o),n,D.fQP,n,D.fN_,o.k3),B.iU(A.b7,n,n,A.ag,!0,new C.f2S(o),n,n,n,D.fK7,o.k2)],s),A.l,n,A.e,A.h,0,A.p),A.amF)],s),A.E,n,A.e,A.h,0,A.p)},
cKa(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDt()
if(a7.length===0)return a5.wk(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.L1,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.I)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.az(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a3(u).k("ci.E"))
A.d.fg(m)
l=m.length!==0&&A.d.cC(m,new C.f48(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f4f(a5)
j=new C.f4h()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.L1,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.q(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.ey:A.bx
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.az(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.az(a6,B.p(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.F(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bF(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.OI,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f49(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wk(B.bZ(A.bH,o,A.vW,a6,6,6))
i=B.a([a5.oA("All words",N.ar6,!1,new C.f4a(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahJ("Sentence "+a3,!1,new C.f4b(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahJ("Clear picks",!1,new C.f4c(a5)))
i=B.bZ(A.bH,i,A.br,a6,8,8)
g=a5.yE("SIZE OF THE PICKED WORDS",D.aqz)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dBB[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f4d(e,k)
f.push(a5.ahJ(a0.b,l===a4,e))}return B.x(B.a([q,A.T,o,A.T,i,g,B.bZ(A.bH,f,A.br,a6,8,8),A.T,a5.oA("Make every word normal",A.kd,!1,new C.f4e(a5))],p),A.E,a6,A.e,A.h,0,A.p)},
cF7(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bKm,B.d(A.d.fc(D.aC5,new C.f3S(q)).b,p,p,p,p,p,p,D.fwC,p,p,p)],o),A.l,p,A.e,A.h,0,p,p),m=B.cn(new C.f3T(q)),l=q.yE("HIGHLIGHT BEHIND THE WORDS",A.a3u),k=q.p1?-1:q.k4
k=q.aka(k,new C.f3U(q),D.dfe)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.T,m,l,B.bZ(A.bH,B.a([k,B.az(p,B.p(p,D.bXz,A.f,p,p,new B.o(p,p,B.K(v,A.r,w?3:1),p,p,D.fpZ,A.a7),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f3X(q),p,p,p,p,p,p,!1,A.a4)],o),A.vW,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.L1,p,p,p)],o)
if(q.gaYf()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajM("Colour",l,0,360,new C.f3Y(q),""+A.j.V(l)+"\xb0")
k=q.p3
A.d.u(m,B.a([l,q.ajM("Shade",k,0.15,0.9,new C.f3Z(q),""+A.j.V(k*100))],o))}l=q.ok
m.push(q.kB("Strength",l,0.15,1,new C.f4_(q),1,""+A.j.V(l*100)+"%"))
A.d.u(n,B.a([A.T,q.wk(B.x(m,A.l,p,A.e,A.h,0,A.p))],o))}n.push(q.yE("LOOK",A.wZ))
m=B.a([q.oA("Bold",I.aqx,q.fy,new C.f40(q)),q.oA("Italic",I.aqy,q.go,new C.f41(q))],o)
for(u=0;u<3;++u){l={}
k=D.d50[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.vc:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bx,1,A.r,-1)
m.push(B.az(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bF(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f42(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bZ(A.bH,m,A.vW,p,8,8))
n.push(q.yE("COLOUR",A.lR))
n.push(q.aka(q.fx,new C.f43(q),D.drt))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.L1,p,p,p))
n.push(q.yE("SIZE AND PLACE",A.HW))
m=q.fr
m=q.kB("Text size",m,0.5,1.6,new C.f3V(q),1,""+A.j.V(m*100)+"%")
l=q.k1
n.push(q.wk(B.x(B.a([m,q.kB("Up / down",l,0.12,0.5,new C.f3W(q),0.3,""+A.j.V(l*100))],o),A.l,p,A.e,A.h,0,A.p)))
return B.x(n,A.E,p,A.e,A.h,0,A.p)},
co4(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.l(22)
v=B.K(A.b7.j(0.6),A.r,1.6)
u=B.a([A.b7.j(0.18),A.bD.j(0.12)],x.O)
return B.az(q,B.p(q,B.x(B.a([B.p(q,D.c2l,A.f,q,q,D.b9m,q,62,q,q,q,q,q,62),A.aB,D.fOh,A.am,D.fT7],x.p),A.l,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(D.ur,q,v,w,q,new B.a8(A.a5,A.a9,A.x,u,q,q),A.n),q,q,q,q,D.bFZ,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb2_(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bu(B.l(12),new B.a4(46,62,B.fU(p,A.A,120,q,A.cl,A.c0,!1,q,!1,q,q),q),A.aq),A.bb,B.E(B.x(B.a([D.fNN,A.P,B.bZ(A.bH,B.a([r.oA("Change",A.jN,!1,r.gb2_()),r.oA("Remove",A.ek,!1,new C.f3w(r))],w),A.br,q,6,6)],w),A.E,q,A.e,A.h,0,A.p),1)],w),A.l,q,A.e,A.h,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.dnx[t]
u.push(r.oA(s.b,s.a,r.at===t,new C.f3x(r,t)))}u=B.bZ(A.bH,u,A.br,q,8,8)
switch(r.at){case 0:s=r.c5Z(p)
break
case 1:s=r.c4S()
break
case 2:s=r.bLp()
break
case 3:s=r.bRT()
break
default:s=r.bNx()
break}return B.x(B.a([v,A.ae,u,A.aB,s,A.T,new B.bK(A.a5,q,q,r.oA("Reset the whole picture",A.kd,!1,new C.f3y(r)),q)],w),A.E,q,A.e,A.h,0,A.p)},
c5Z(d){var w=this,v=x.p
return B.x(B.a([B.bZ(A.bH,B.a([w.oA("Auto enhance",E.a36,!1,new C.f3o(w)),w.oA("Make words easy to read",A.nQ,!1,new C.f3p(w))],v),A.br,null,8,8),A.aB,B.cn(new C.f3q(w,d))],v),A.E,null,A.e,A.h,0,A.p)},
c4S(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kB("Exposure",n,-1.5,1.5,new C.f32(o),0,A.j.ad(n,1))
w=o.RG
w=o.kB("Brightness",w,-0.5,0.5,new C.f33(o),0,""+A.j.V(w*100))
v=o.rx
v=o.kB("Contrast",v,0.4,2,new C.f34(o),1,""+A.j.V(v*100))
u=o.xr
u=o.kB("Fade",u,0,1,new C.f35(o),0,""+A.j.V(u*100))
t=o.aL
t=o.kB("Spotlight",t,0,1,new C.f36(o),0,""+A.j.V(t*100))
s=o.a0
s=o.kB("Darken",s,0,0.85,new C.f37(o),0,""+A.j.V(s*100))
r=o.bb
r=o.kB("Vignette",r,0,0.9,new C.f38(o),0,""+A.j.V(r*100))
q=o.aI
q=o.kB("Shade behind words",q,0,0.85,new C.f39(o),0,""+A.j.V(q*100))
p=o.aR
return o.wk(B.x(B.a([n,w,v,u,t,s,r,q,o.kB("Shade top & bottom",p,0,0.85,new C.f3a(o),0,""+A.j.V(p*100))],x.p),A.l,null,A.e,A.h,0,A.p))},
bLp(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kB("Colour strength",q,0,2.2,new C.f2o(s),1,""+A.j.V(q*100))
w=s.to
w=s.kB("Warmth",w,-1,1,new C.f2p(s),0,""+A.j.V(w*100))
v=s.x1
v=s.kB("Tint",v,-1,1,new C.f2q(s),0,""+A.j.V(v*100))
u=s.x2
t=x.p
u=s.wk(B.x(B.a([q,w,v,s.kB("Shift colours",u,-180,180,new C.f2r(s),0,""+A.j.V(u)+"\xb0"),new B.bK(A.a5,r,r,s.oA("Negative",D.bSw,s.y1,new C.f2s(s)),r)],t),A.l,r,A.e,A.h,0,A.p))
v=s.yE("COLOUR WASH",A.PM)
w=s.b8
q=B.a([null],x.Z)
A.d.u(q,D.aAI)
t=B.a([u,v,s.aka(w,new C.f2t(s),q),A.P],t)
if(s.b8!=null){q=s.b6
t.push(s.wk(s.ajM("Wash strength",q,0,0.9,new C.f2u(s),""+A.j.V(q*100))))}return B.x(t,A.E,r,A.e,A.h,0,A.p)},
bRT(){var w,v,u,t,s,r=this,q=r.y2
q=r.kB("Blur",q,0,24,new C.f2X(r),0,A.o.v(A.j.V(q)))
w=r.bn
w=r.kB("Soft focus",w,0,1,new C.f2Y(r),0,""+A.j.V(w*100))
v=r.aH
u=x.p
v=r.wk(B.x(B.a([q,w,r.kB("Film grain",v,0,1,new C.f2Z(r),0,""+A.j.V(v*100))],u),A.l,null,A.e,A.h,0,A.p))
w=r.yE("LIGHT LEAK",D.bSf)
q=r.bg
t=B.a([null],x.Z)
s=x.S
A.d.u(t,B.cX(D.aAI,0,B.dC(8,"count",s),s))
u=B.a([v,w,r.aka(q,new C.f3_(r),t),A.P],u)
if(r.bg!=null){q=r.bK
u.push(r.wk(r.ajM("Leak strength",q,0,1,new C.f30(r),""+A.j.V(q*100))))}return B.x(u,A.E,null,A.e,A.h,0,A.p)},
bNx(){var w,v,u,t,s=this,r=s.aQ
r=s.kB("Zoom",r,1,3,new C.f2y(s),1,""+A.j.V(r*100)+"%")
w=s.bm
w=s.kB("Left / right",w,-1,1,new C.f2z(s),0,""+A.j.V(w*100))
v=s.bH
v=s.kB("Up / down",v,-1,1,new C.f2A(s),0,""+A.j.V(v*100))
u=s.c8
t=x.p
return B.x(B.a([s.wk(B.x(B.a([r,w,v,s.kB("Turn",u,-180,180,new C.f2B(s),0,""+A.j.V(u)+"\xb0")],t),A.l,null,A.e,A.h,0,A.p)),A.T,B.bZ(A.bH,B.a([s.oA("Turn 90\xb0",H.arB,!1,new C.f2C(s)),s.oA("Flip sideways",A.D7,s.c5,new C.f2D(s)),s.oA("Flip upside down",A.D7,s.cO,new C.f2E(s))],t),A.br,null,8,8)],t),A.E,null,A.e,A.h,0,A.p)},
c8G(){var w=null,v=B.l(22),u=B.K(A.bx,A.r,1)
return B.p(w,B.x(B.a([D.fd3,A.T,D.fPP,A.aB,B.az(w,B.p(A.A,D.fdh,A.f,w,w,new B.o(w,w,w,B.l(16),w,G.vc,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f3r(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(D.ur,w,u,v,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
c5M(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f3j(p),m=x.p,l=B.A(B.a([D.bKs,p.oA("Reset",A.kd,!1,new C.f3f(p))],m),A.l,o,A.e,A.h,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.L1,o,o,o),j=p.yE("SHAPE",A.arw),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.DH[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b20(n.$2(t,p.cy),62,u.b,s===t,new C.f3g(v,p),62))}}i=B.bZ(A.bH,i,A.br,o,8,8)
v=p.yE("RING",A.py)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.DA[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b20(n.$2(p.cx,t),62,r.b,q===t,new C.f3h(s,p),62))}u=B.bZ(A.bH,u,A.br,o,8,8)
s=p.CW
return B.x(B.a([l,A.aw,k,j,i,v,u,A.ae,p.wk(p.kB("Size",s,0.12,0.4,new C.f3i(p),0.22,""+A.j.V(s*100)))],m),A.E,o,A.e,A.h,0,A.p)},
b51(d){return new B.a4(null,d,new B.fH(0.5625,B.cn(new C.f3C(this)),null),null)},
cEk(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.l(18),n=B.K(A.bx,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.vc:q
t=new B.aP(14,14)
s=D.dpO[w]
r=v?A.c:A.aE
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aE
l.push(new B.by(1,A.ba,B.az(A.c1,B.cT(q,B.x(B.a([r,A.cQ,new B.dF(A.dW,A.A,A.f,B.d(s.b,q,q,q,q,q,q,new B.F(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.N,0,A.p),q,q,A.b0,new B.o(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bBq,q,q,q,q,A.hM,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f3L(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.p(q,B.A(l,A.l,q,A.e,A.h,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bDz,A.lO,q,q,q)},
aSV(){var w,v,u=this,t=null,s=u.cEk()
switch(u.as){case 0:w=u.bPA()
break
case 1:w=u.cKa()
break
case 2:w=u.cF7()
break
case 3:w=u.co4()
break
case 4:w=u.c5M()
break
default:w=u.c8G()
break}v=x.p
return B.bu(A.u9,B.ea(B.x(B.a([s,B.E(B.cm(B.a([w],v),t,t,D.bEN,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.h,0,A.p),D.ZM,!0),A.aq)},
aOX(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gceg(),p=B.l(16)
q=B.E(B.az(r,B.p(r,D.fdt,A.f,r,r,new B.o(A.c.j(0.08),r,B.K(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbRr()
w=B.l(16)
v=B.a([new B.ab(0,A.G,A.bD.j(0.35),A.cy,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(A.aUG)
else t.push(D.bWF)
t.push(A.af)
t.push(D.bMZ)
return B.p(r,B.A(B.a([q,A.as,B.E(B.az(r,B.p(r,B.A(t,A.l,r,A.b8,A.h,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.vc,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.h,0,r,r),A.f,r,r,D.b8t,r,r,r,r,Aw.a0W,r,r,r)},
b1Z(){var w=null
return new B.D(V.a1s,B.A(B.a([B.aH(w,w,w,w,A.n8,w,w,w,new C.f31(this),w,w,w,w,w,w),D.h4P,A.b1,D.c4M],x.p),A.l,w,A.e,A.h,0,w,w),w)},
B(d){var w=null
return B.c5(w,A.Ch,B.bm(!0,B.cn(new C.f4i(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bi4.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e6()
n.d_(7)
w=e.a
v=e.b
u=A.j.V(w*v/55)
$.S()
t=B.L()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.L()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.aD(new B.a6(s,p,s+1.1,p+1.1),o)}},
aE(d){return d.b!==this.b}}
C.rZ.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mt.prototype={}
C.Ad.prototype={
aj(){var w=this
return B.J(["at",w.a.aa().af(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.ob.prototype={}
C.wz.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a9l.prototype={}
C.at2.prototype={}
C.a1K.prototype={
S(){return new C.aJz(new B.au(A.ax,$.ax()),B.kb(!0,null,!0,!0,null,null,!1),D.dTH,B.a([],x.s),B.et([D.JD],x.Q))}}
C.aJz.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.f.t()
this.a2()},
a1v(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1v=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().CN(90,700,700,A.eQ),$async$a1v)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a1v)
case 8:p=e
if(r.c!=null)r.m(new C.faG(r,p,q))
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
return B.i($async$a1v,v)},
a1y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.i0().aK3(78,n,1100,1100),$async$a1y)
case 7:q=e
if(J.ct(q)){w=1
break}p=B.bp(r.y,!0,x.N)
n=J.aT(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fq(),$async$a1y)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.c6(p,"data:"+k+";base64,"+A.cV.gcu().aO(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.faH(r,p))
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
return B.i($async$a1y,v)},
b70(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fU(A.cK.aO(A.d.gal(d.split(","))),A.A,u,u,A.cl,A.c0,!0,u,!1,u,u)
return w}catch(v){}return D.bzz},
c5T(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cA2(C.fQj(w,this.b70(d),f),g)},
adX(d,e,f,g,h){var w=null,v=new C.faE(f,e),u=new C.faF(f,e),t=A.c.j(0.05),s=B.l(12),r=B.l(12),q=B.l(12),p=h==null,o=B.K(p?A.bx:A.b7.j(0.6),A.r,1)
if(p)p=new B.a4(34,30,new B.an(A.a0,w,A.ac,A.f,B.a([B.as(B.X(f?A.zx:A.Pz,A.bV,w,w,w,26),w,w,w),D.eCH],x.p),w),w)
else p=this.c5T(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a3,!0,s,B.aM(!1,r,!0,B.p(w,B.A(B.a([B.E(B.as(p,w,w,w),1),D.bWm],x.p),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.n5,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.faD(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
b_8(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bu(B.l(8),B.fU(A.cK.aO(A.d.gal(h.split(","))),A.A,p,p,A.cl,A.c0,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.l(14)
t=B.l(14)
s=B.l(14)
r=B.K(n?A.bx:A.bg.j(0.6),A.r,1)
q=o
n=q==null?B.X(d,A.ex,p,p,p,20):q
n=B.a([n,A.af,B.E(B.d(e,p,1,A.a2,p,p,p,A.L8,p,p,p),1)],x.p)
if(f!=null)n.push(B.az(p,H.Qk,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.p(p,B.A(n,A.l,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.k6,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ai)},
aa0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aa0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fTR(),$async$aa0)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.fam(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ac(n)
if(r.c!=null)r.m(new C.fan(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aa0,v)},
afY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$afY=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.fap(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.faq(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.far(r))
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
return B.b(C.fP1(q,r.cx,j,new C.b3G(r.z,r.Q,r.as,r.at),new C.fas(r),i,m,p,k),$async$afY)
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
n=B.ac(e)
if(r.c!=null)r.m(new C.fat(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afY,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aF(d,A.eT,g).w
g=B.aF(d,A.c_,g).w
w=B.as(B.p(h,h,A.f,h,h,new B.o(A.aT,h,h,B.l(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.az(h,B.p(h,D.bZI,A.f,h,h,new B.o(h,h,B.K(A.c.j(0.35),A.r,2),h,B.a([new B.ab(2,A.G,A.bg.j(0.5),A.J,24)],v),D.c8Y,A.a7),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.faU(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,H.Qk,h,h,h,i.ax?h:new C.faV(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbGh()
v=B.a([new B.ab(0,A.G,A.b7.j(0.45),A.J,10)],v)
s.push(B.ha(B.aG(!1,A.a3,!0,h,B.aM(!1,h,!0,B.p(h,B.X(i.e==null?A.tg:A.hc,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.x6,A.a7),h,40,h,h,h,h,h,40),A.cS,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cS,h,h,A.ai),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.N,0,h,h)
s=A.c.j(0.05)
v=B.aN(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bz(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.l(16),D.b5X),h,h,h,h,h,h,h,h,A0.EY,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iQ,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ad,h,h,h,h,h,h,h,h,h,h,h,D.aWM,!0,A.a6,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.faW(i)
s=i.b_8(A.l_,q,r,i.gcow(),s)
r=i.z
r=B.E(i.adX(new C.faY(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bm,B.E(i.adX(new C.faZ(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.h,0,h,h)],t),A.l,h,A.e,A.h,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.fb_(i)
s=i.b_8(A.uR,r,p,i.gcoE(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.adX(new C.fb0(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fUq,A.aw,D.fXn,A.by,u,A.P,D.fVK,A.aB,v,A.by,B.A(B.a([q,A.as,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bm,B.E(i.adX(new C.fb1(i),r,!0,n,o),1)],t),A.l,h,A.e,A.h,0,h,h)],t),A.l,h,A.e,A.h,0,A.p),1)],t),A.E,h,A.e,A.h,0,h,h),A.am,D.fZh],t)
w=i.w.a
if(w.length!==0){v=B.l(999)
u=B.K(D.bqW,A.r,1)
w=C.aig(w)
w=w==null?h:w.b
A.d.u(o,B.a([A.T,new B.bK(A.a5,h,h,B.p(h,B.A(B.a([D.c_R,A.bm,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.fCB,h,h,h),B.aM(!1,h,!0,D.ewI,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.fb2(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(D.biJ,h,u,v,h,h,A.n),h,h,h,h,D.bDd,h,h,h),h)],t))}o.push(A.by)
o.push(D.fKQ)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.dhu[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aE:A.bx,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.by(1,A.ba,new B.D(A.jq,B.az(h,B.cT(A.A,B.d(""+l,h,h,h,h,h,h,new B.F(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b0,new B.o(v,h,new B.bF(k,k,k,k),h,h,h,A.a7),A.eH,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fb3(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.h,0,h,h))
o.push(A.by)
o.push(D.h31)
o.push(A.P)
o.push(B.cn(new C.fb4(i)))
o.push(A.by)
o.push(D.fSt)
o.push(A.P)
w=B.a([i.b9X("auto","Let AI choose",A.e9,A.Sp)],t)
for(v=x.O,m=0;m<11;++m){j=D.xc[m]
u=j.d
w.push(i.b9X(j.a,j.b,j.c,B.a([B.b0(A.d.gH(u).a),B.b0(A.d.gH(u).b)],v)))}o.push(B.bZ(A.bH,w,A.br,h,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.l(16)
u=B.K(i.r?A.bg.j(0.5):A.bx,A.r,1)
o.push(B.p(h,B.iU(h,A.bg,h,h,h,new C.faX(i),D.bVO,D.h2g,h,D.fNf,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.u(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aVX,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gcek()
v=B.fw(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.l(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fjk:A.I8
o.push(new B.a4(h,54,B.lU(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.mF,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.c9(B.x(o,A.al,h,A.e,A.h,0,A.p),A.t,h,A.y,h,A.wD,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.afj,h,h,h,h,h,h,h,h),h)},
bTa(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.fau(this,p,d)
if(d===D.El)return new C.aG3(p,o,q)
w=B.l(16)
v=p?E.x6:q
u=p?q:A.c.j(0.05)
t=B.K(p?A.aE:A.bx,A.r,1)
s=B.X(p?A.ec:C.hZs(d),A.c,q,q,q,20)
r=C.hZt(d)
return B.az(q,B.cT(q,B.x(B.a([s,A.aw,new B.dF(A.dW,A.A,A.f,B.d(r,q,q,q,q,q,q,B.m(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],x.p),A.l,q,A.b8,A.h,0,A.p),q,q,A.b0,new B.o(u,q,t,w,q,v,A.n),A.h8,q,64,q,q,A.hO,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
b9X(d,e,f,g){var w,v=null,u=this.CW===d,t=B.l(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.aa:A.bx
r=B.K(r,A.r,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a5,A.a9,A.x,g,v,v),A.a7),v,26,v,v,v,v,v,26)
return B.az(v,B.cT(v,B.A(B.a([w,A1.AQ,B.d(e,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.N,0,v,v),v,v,A.b0,new B.o(s,v,r,t,v,v,A.n),A.eH,v,v,v,v,O.anS,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.faJ(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1J.prototype={
S(){return new C.aJy(new B.au(A.ax,$.ax()))}}
C.aJy.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a2()},
afZ(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$afZ=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.faf(r))
w=1
break}B.eZ()
r.m(new C.fag(r))
t=4
q=C.iqk(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.iq4(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.fah(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hfc()
f=$.Dl.h(0,k.a)
o=f==null||J.ct(f)?null:J.fq(f)
if(o==null){r.m(new C.fai(r))
w=1
break}n=C.iq2(o,r.a.c)
C.ipZ(r.a.c.a)
$.heo=!0
k=r.c
if(k!=null)B.a5(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hid(j)
h=C.hie(r.a.c)
e=C.hif(r.a.c)
w=7
return B.b(C.bFc(k,r.a.c.a,j,h,new C.faj(r),i,e,a0),$async$afZ)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ac(a1)
if(r.c!=null)r.m(new C.fak(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afZ,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aF(d,A.eT,i).w
i=B.aF(d,A.c_,i).w
w=B.as(B.p(j,j,A.f,j,j,new B.o(A.aT,j,j,B.l(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.arV,A.f,j,j,D.b88,j,34,j,j,j,j,j,34),A.as,D.bL6],v),A.l,j,A.e,A.h,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,A0.abI,j,j,j)
s=A.c.j(0.05)
s=B.aN(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bz(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.l(16),Ax.aeK),j,j,j,j,j,j,j,j,A0.EY,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ad,j,j,j,j,j,j,j,j,j,j,j,D.aWM,!0,A.a6,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.ddu[q]
o=B.d(p,j,j,j,j,j,j,AD.VO,j,j,j)
n=A.c.j(0.06)
r.push(B.n4(j,n,o,j,k.e?j:new C.fal(k,p),j,j,P.w1,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.T,B.bZ(A.bH,r,A.br,j,8,8)],v)
u=k.r
if(u!=null)A.d.u(w,B.a([A.ae,B.d(u,j,j,j,j,j,j,D.aVX,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gcel()
s=B.l(18)
r=B.l(18)
u=u?B.a([A.bg.j(0.5),A.eq.j(0.5)],x.O):D.cKW
o=B.a([new B.ab(0,A.G,A.bg.j(0.35),A.cy,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.ewE:D.c_q
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a7),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a3,!0,j,B.aM(!1,s,!0,B.eB(B.A(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.ht,j,j,j)],v),A.l,j,A.b8,A.h,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a5,A.a9,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.ai))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.c9(B.x(w,A.al,j,A.e,A.h,0,A.p),A.t,j,A.y,j,A.wD,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.afj,j,j,j,j,j,j,j,j),j)}}
C.b3G.prototype={}
C.aG3.prototype={
S(){return new C.bmT(null,null)}}
C.bmT.prototype={
gazM(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.qC,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gazM().t()
this.bA2()},
B(d){var w=null,v=this.a.d
return B.az(w,B.c4(this.gazM(),new C.eqD(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bkl.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dk1[t]
q=r.a*v
r=r.b*u
$.S()
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.r=A.wq.j(0.25+s*0.6).gp(0)
d.O(new B.r(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.r(q-o,r),new B.r(q+o,r+0),p)
d.ah(new B.r(q,r-o),new B.r(q+0,r+o),p)}}},
aE(d){return d.b!==this.b}}
C.atA.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a07.prototype={
S(){return new C.aDy()}}
C.aDy.prototype={
gak7(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.ait(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAR(){var w=this.e
return w===$?this.e=C.hid(this.a.c).q(0,D.El):w},
a9O(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9O=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dtj(s))
u=3
r=A.d.fc(D.xc,new C.dtk(s))
q=B.d0(C.hid(s.a.c),x.Q)
l=q
J.hd(l,D.El)
p=l
if(s.gAR())J.c6(p,D.El)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAR()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hie(i.c)
g=C.hif(s.a.c)
w=6
return B.b(C.bFc(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9O)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.ait(q,s.gak7())
f=q==null?null:q.b
n=f==null?s.gak7():f
if(!J.z(n,r.a)&&!s.gAR())throw B.W("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ac(d)
if(s.c!=null)s.m(new C.dtl(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9O,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.a_,k=m?A.aR:A.an,j=m?A.a_:A.c,i=B.l(28),h=B.K(m?A.bx:A.bk,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bE,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.m(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.h,0,A.p),1),e=o.f?n:new C.dto(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.X(A.cB,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.h,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.xc[w]
u=o.gak7()
t=o.f?n:new C.dtp(o,v)
f.push(new C.bvz(v,u===v.a,t,n))}f=B.kZ(1.25,f,3,10,10,n,A.e_,!0)
u=B.l(18)
t=o.gAR()?D.cbN:n
if(o.gAR())s=n
else s=m?A.bs:A.ch
r=B.X(A.e9,o.gAR()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.m(n,n,o.gAR()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.m(n,n,o.gAR()?A.aa:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.h,0,A.p),1)
p=o.gAR()
f=B.a([f,A.aB,B.p(n,B.A(B.a([r,A.as,q,B.b9j(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dtq(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,Q.amx,n,n,n)],g)
u=o.r
if(u!=null)A.d.u(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.fCV,n,n,n)],g))
f=B.c9(B.x(f,A.E,n,A.e,A.h,0,A.p),A.t,n,A.y,n,A.H7,n,n,A.ah)
u=o.f?n:o.gbFg()
t=B.bo(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.l(16),A.a1),n,n,n)
s=B.l(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.bGt,e,n),new B.di(1,A.cm,f,n),new B.D(A.H6,new B.a4(1/0,50,B.bI(B.eB(B.as(o.f?A.tV:D.fUW,n,n,n),n,new B.o(n,n,n,s,n,D.cam,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.uH,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bvz.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.l(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.K(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ab(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bK(A.lB,w,w,B.X(v.c,A.aa,w,w,w,18),w),new B.bK(A.lC,w,w,B.d(v.b,w,w,w,w,w,w,D.fCS,w,w,w),w)],x.p)
if(q)v.push(D.b35)
return B.az(w,B.cT(w,new B.an(A.a0,w,A.ac,A.t,v,w),w,w,A.b0,new B.o(w,w,p,t,s,new B.a8(A.ay,A.aD,A.x,r,w,w),A.n),A.eH,w,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.eqA.prototype={
aHz(d,e,f){return e+"@"+A.a.b_(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xh(d,e){return this.aHz(0,e,null)}}
C.aOd.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.b3C.prototype={
B(d){var w,v,u=null,t=C.hh2(this.c)
if(t==null)w=D.by1
else{w=B.aF(d,u,x.w).w.cPr(D.bCJ,D.fiu)
v=this.d
w=B.qb(new B.du(!v,B.apH(!1,t,!1,v,!1,390),u),w)}return new B.dF(A.dD,A.A,A.f,new B.a4(416,870,new C.bot(w,u),u),u)}}
C.bot.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dx2[w]
u=new B.aP(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.be(u,u,u,u),t,D.atV,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dys[w]
u=new B.aP(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.be(u,u,u,u),t,D.atV,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,new B.bM(new B.o(t,t,t,B.l(64),D.d2f,D.c8G,A.n),A.bi,t,t),0,0,0))
s.push(B.bR(3,new B.bM(new B.o(A.w,t,t,B.l(61),t,t,A.n),A.bi,t,t),3,3,3))
s.push(B.bR(13,B.bu(B.l(51),B.ea(this.c,A.w,!0),A.aq),13,13,13))
u=B.l(20)
s.push(B.ao(t,B.as(B.p(D.b3g,B.p(t,t,A.f,t,t,D.b8r,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.du(!0,B.bu(B.l(51),D.bzG,A.aq),t),13,13,13))
s.push(B.ao(22,new B.du(!0,B.as(B.p(t,t,A.f,t,t,new B.o(A.aa,t,t,B.l(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ac,A.f,s,t)}}
C.ly.prototype={
oM(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cE(),f=C.cE(),e=m.r
f=C.ev(A.K,!1,e.l(),A.aH,"",k,42,A.bq,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bl,j,2,"Your Presentation Title",0,0,"",D.nd,D.d1,0.84,0.08,0.26)
w=C.cE()
v=m.w
w=C.ev(A.K,!1,v.l(),A.aH,"",k,20,A.bq,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bl,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dr,D.d1,0.76,0.12,0.56)
u=C.cE()
t=m.d
s=x.u
t=C.t_(i,l,0,0,B.a([f,w,C.ev(A.bn,!1,4279310375,A.aH,"",t.j(0.8).l(),24,A.bq,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fP,t.l(),3,"",0,0,"",D.cv,D.fi,0.3,0.35,0.72)],s),C.cE(),D.nc,"","","Welcome",D.dr)
u=C.cE()
u=C.ev(A.bn,!1,e.l(),A.aH,"",k,34,A.bq,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bl,j,2,"Agenda",0,0,"",D.cv,D.d1,0.84,0.08,0.08)
w=C.cE()
w=C.t_(i,l,0,0,B.a([u,C.ev(A.bn,!0,v.l(),A.aH,"",k,22,A.bq,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bl,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vt,D.d1,0.8,0.1,0.26)],s),C.cE(),D.nc,"","","Agenda",D.dr)
u=C.cE()
u=C.ev(A.bn,!1,e.l(),A.aH,"",k,32,A.bq,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bl,j,2,"Main Idea",0,0,"",D.cv,D.d1,0.84,0.08,0.08)
f=C.cE()
f=C.t_(i,l,0,0,B.a([u,C.ev(A.bn,!0,v.l(),A.aH,"",k,21,A.bq,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bl,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cv,D.d1,0.8,0.1,0.26)],s),C.cE(),D.nc,"","","Key Point 1",D.dr)
u=C.cE()
u=C.ev(A.bn,!1,e.l(),A.aH,"",k,30,A.bq,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bl,j,2,"Compare & Contrast",0,0,"",D.cv,D.d1,0.84,0.08,0.08)
r=C.cE()
r=C.ev(A.bn,!0,v.l(),A.aH,"",k,18,A.bq,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bl,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cv,D.d1,0.4,0.08,0.24)
q=C.cE()
q=C.t_(i,l,0,0,B.a([u,r,C.ev(A.bn,!0,v.l(),A.aH,"",k,18,A.bq,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bl,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cv,D.d1,0.4,0.52,0.24)],s),C.cE(),D.nc,"","","Key Point 2",D.dr)
r=C.cE()
r=C.ev(A.K,!1,e.l(),A.aH,"",k,48,A.bq,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bl,j,2,h,0,0,"",D.dr,D.d1,0.8,0.1,0.32)
e=C.cE()
p=C.Cm(l,l,l,l,D.Eh,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.t_(i,l,0,0,B.a([r,C.ev(A.K,!1,v.l(),A.aH,"",k,22,A.bq,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bl,j,2,"Questions?",0,0,"",D.cv,D.d1,0.7,0.15,0.58)],s),C.cE(),D.nc,"","",h,D.dr)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.I)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fs.prototype={
ak(d){return this.e.$1(d)}}
C.ey.prototype={}
C.jd.prototype={}
C.Fj.prototype={
gaNz(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aig(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a4W(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fj(v,u,t,d==null?w.d:d)},
Gg(d){return this.a4W(null,d,null,null)},
aGd(d){return this.a4W(null,null,null,d)},
cPp(d,e){return this.a4W(d,e,null,null)},
bfi(d){return this.a4W(d,null,null,null)},
bfo(d){return this.a4W(null,null,d,null)}}
C.Op.prototype={
S(){return new C.bme(new B.eC(0,$.ax()),null,null)}}
C.bme.prototype={
Y(){var w,v=this
v.a3()
w=v.q1(new C.e40(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.U$=$.ax()
w.P$=0
this.bzw()},
B(d){var w=C.aig(this.a.c.a)
if(w==null)w=A.d.gH(D.Is)
return B.cn(new C.e4_(this,w,C.hxG(this.a.c.d)))}}
C.bu5.prototype={
B(d){return B.og(A.XS,this.e,new C.f9s(this,A.j.F(this.d*0.35,1.6)-0.3))}}
C.bh9.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVA(d,e,v)
break
case"confetti":w.bLT(d,e,v)
break
case"crown":w.bNy(d,e,v)
break
case"aurora":w.bGl(d,e,v)
break
case"champagne":w.bJK(d,e,v)
break
case"diamonds":w.bPJ(d,e,v)
break
case"starburst":w.cBX(d,e,v)
break
case"balloons":w.bGz(d,e,v)
break
case"galaxy":w.bV4(d,e,v)
break
case"redcarpet":w.csR(d,e,v)
break
case"coins":w.bLh(d,e,v)
break
case"lanterns":w.c4k(d,e,v)
break
case"hearts":w.c1Q(d,e,v)
break
case"petals":w.cnW(d,e,v)
break
case"butterflies":w.bIH(d,e,v)
break
case"neon":w.c8q(d,e,v)
break
case"disco":w.bPU(d,e,v)
break
case"sunrise":w.cDC(d,e,v)
break
case"pearls":w.cn_(d,e,v)
break
case"snow":w.cBE(d,e,v)
break
case"laurel":w.c4q(d,e,v)
break
case"ribbons":w.cvm(d,e,v)
break
case"kente":w.c48(d,e,v)
break
case"trophy":w.cHl(d,e,v)
break
case"shooting":w.czo(d,e,v)
break
case"bokeh":w.bGV(d,e,v)
break
case"orbits":w.ckB(d,e,v)
break
case"flowers":w.bUi(d,e,v)
break
case"music":w.c88(d,e,v)
break
case"mandala":w.c6z(d,e,v)
break
case"sparklers":w.cBL(d,e,v)
break
case"city":w.bKy(d,e,v)
break}},
tc(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.L()
v.r=g.j(A.j.D(h,0,1)).gp(0)
v.a=A.pd
u=new B.aI(w.r,A.aj,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.cc(w,t,w+f,t))
u.E(new B.cc(w,t,w,t+f))
u.E(new B.cc(w,t,w-f,t))
u.E(new B.cc(w,t,w,s))
u.E(new B.bw())
d.ag(u,v)
d.O(e,f*0.18,v)},
m3(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.j.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.tc(d,new B.r(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aVA(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m3(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.at],w),B.a([A.it,A.bD],w),B.a([A.eO,A.aG],w),B.a([A.c,A.aF],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.j.bi(l/2.8)
j=A.j.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cZ(i,1))
g=h+b7*(C.cZ(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cZ(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.kI(new B.r(h,b8),new B.r(g,f),A.ck.aB(0,j/0.22))
d.toString
$.S()
a0=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a0.sap(new B.a8(A.a5,A.a9,A.x,B.a([e[0].j(0),e[0]],w),null,null).aG(0,B.t1(new B.r(h,b8),d)))
a0.c=o
a0.d=A.bF
a1=B.kI(new B.r(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a1.r=A.c.gp(0)
c0.O(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.ck.aB(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.j.V(r))
a1=C.cZ(i,4)
if(a2<0.15){a5=1-a2/0.15
$.S()
a6=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.h6(A.G,p)
c0.O(new B.r(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cZ(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cZ(i,a9+60))
b2=new B.r(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.S()
b6=new B.ar(A.S,A.Q,A.W,A.X,A.U)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bF
b6.a=A.pd
c0.ah(new B.r(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cZ(i,a9+120)>0.5)this.tc(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bLT(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.j.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.S(),d=B.L()
d.sap(new B.a8(A.ay,A.aD,A.x,D.dr6,B.a([A.j.D(h-0.15,0,1),A.j.D(h,0,1),A.j.D(h+0.15,0,1)],x.x),null).aG(0,new B.a6(0,0,g,f)))
a0.aD(new B.a6(0,0,g,f),d)
d=Math.max(4,A.j.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.j.F(a2*(i*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a2*(0.8+C.cZ(u,4))+u)
q=i*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a2*(2+3*C.cZ(u,6))+u)
o=D.RT[A.o.D(A.j.bi(C.cZ(u,7)*5),0,4)]
J.br(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ar(A.S,A.Q,A.W,A.X,A.U)
t=Math.abs(p)
n.r=B.ap(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aI(e.r,A.aj,null,null,t)
e=-q*2
t.push(new B.aZ(e,0))
m.ab()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ak(r)
m.ab()}e=$.S()
t=new B.ar(A.S,A.Q,A.W,A.X,A.U)
t.r=B.b0(n.r).gp(0)
t.b=A.ab
t.c=q*0.35
a0.ag(m,t)}else a0.aD(B.bT(A.J,q*1.8*A.j.D(t,0.15,1),q),n)
g.restore()}this.m3(a0,a1,a2,25,A.bL,30)},
bNy(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.r(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.S()
o=B.a([],s)
n=new B.aI(p.r,A.aj,a4,a4,o)
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
p=new B.bw()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.sap(new B.bV(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bkR],v),a4,a4).aG(0,B.bW(w,u)))
a8.ag(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aI($.S().r,A.aj,a4,a4,B.a([],s))
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
j.E(new B.bw())
i=A.j.D(b0/1.8,0,1)
t=i>=1
if(t){o=B.L()
o.sap(new B.a8(A.aZ,A.b4,A.x,D.dpI,a4,a4).aG(0,new B.a6(a5,a6,p,v)))
a8.ag(j,o)
for(v=[D.eMT,D.eG8,D.eWr],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a0.r=d.gp(d)
a8.O(new B.r(e,o),m,a0)
a0=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a0.r=A.aa.gp(0)
a8.O(new B.r(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ar(A.S,A.Q,A.W,A.X,A.U)
h.r=A.hI.gp(0)
a8.O(new B.r(a5+l*a1,a6+m),o,h)}}for(v=B.zA(j),u=B.a([],x.X),p=new B.tG(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bk(B.jK(y.M));--h
p.j6()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a2.b=A.ab
a2.c=m
a2.e=A.dQ
a2.r=A.bL.gp(0)
a8.ag(new B.aI(o,e,a4,new B.ce([new B.BO(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.j.F(b0*0.5,1)
this.tc(a8,new B.r(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m3(a8,a9,b0,45,A.bL,40)},
bGl(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m3(a6,a7,a8,60,A.c,50)
w=[D.f87,D.f7P,D.f7I,D.f9h]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.S()
j=B.a([],q)
i=new B.aI(o.r,A.aj,null,null,j)
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
i.ab()}}$.S()
o=new B.ar(A.S,A.Q,A.W,A.X,A.U)
o.b=A.ab
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.pd
o.y=new B.h6(A.G,u)
a6.ag(i,o)
o=new B.ar(A.S,A.Q,A.W,A.X,A.U)
o.b=A.ab
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.pd
o.y=new B.h6(A.G,t)
a6.ag(i,o)}for(v=Math.max(4,A.j.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.j.F(u*(0.05+0.06*C.cZ(a2,1))+C.cZ(a2,2)*a1,a1)
s=C.cZ(a2,3)
r=Math.sin(a8+a2)
q=C.cZ(a2,4)
$.S()
o=new B.ar(A.S,A.Q,A.W,A.X,A.U)
o.r=A.wp.j(0.4+0.5*C.cZ(a2,5)).gp(0)
o.a=A.pd
a6.O(new B.r(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bJK(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.S(),e=B.L()
e.sap(new B.bV(A.A,0.5,A.x,n,0,B.a([A.i9.j(0.25+0.1*j),D.a__],x.O),n,n).aG(0,B.bW(new B.r(i,h),g)))
d.O(new B.r(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aI(g.r,A.aj,n,n,f)
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
u.ab()}g=$.S()
f=new B.ar(A.S,A.Q,A.W,A.X,A.U)
f.b=A.ab
f.c=j
f.r=D.RT[A.o.F(w,4)].j(0.7).gp(0)
d.ag(u,f)}for(j=Math.max(4,A.j.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.j.F(a1*(k*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*q,q)
s=m*(0.1+0.8*C.cZ(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cZ(w,4))
if(p<i){this.tc(d,new B.r(s,p),o*2.4,A.bL,A.j.D(p/i,0,1))
continue}$.S()
g=new B.ar(A.S,A.Q,A.W,A.X,A.U)
g.b=A.ab
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.rI.j(0.75).gp(0)
d.O(new B.r(s,p),o,g)
g=o*0.35
e=new B.ar(A.S,A.Q,A.W,A.X,A.U)
e.r=A.c.j(0.8).gp(0)
d.O(new B.r(s-g,p-g),f,e)}},
bPJ(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m3(b0,b1,b2,30,A.lh,60)
for(w=Math.max(4,A.j.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cZ(p,1))
n=a8+o*4
m=A.j.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a7+Math.sin(s+p)*a9*0.02
J.br(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aI(h.r,A.aj,a6,a6,g)
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
a2=new B.bw()
g.push(a2)
g=f.f
if(g!=null)a2.ak(g)
f.ab()
g=new B.ar(A.S,A.Q,A.W,A.X,A.U)
g.sap(new B.a8(A.ay,A.aD,A.x,D.dl9,a6,a6).aG(0,B.bT(A.J,k*1.2,o)))
b0.ag(f,g)
a4=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a4.b=A.ab
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.r(e,i),new B.r(a0,i),a4)
b0.ah(new B.r(h,j),new B.r(0,a1),a4)
b0.ah(new B.r(d,j),new B.r(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.tc(b0,new B.r(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cBX(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.r(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aI(p.r,A.aj,null,null,o)
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
p=new B.bw()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.r=A.bL.j(r?0.12:0.07).gp(0)
d.ag(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.j.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ar(A.S,A.Q,A.W,A.X,A.U)
u.b=A.ab
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
d.O(w,f*(0.15+0.6*k),u)}j=A.j.bi(a0/2.4)
k=A.j.F(a0,2.4)/2.4
for(v=Math.max(4,A.j.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bz_.aB(0,k)*(0.5+0.5*C.cZ(t,u)))
this.tc(d,new B.r(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.RT[A.o.D(A.j.bi(C.cZ(t,4)*5),0,4)],r)}},
bGz(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.j.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cZ(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.j.F(r*(0.05+0.05*C.cZ(p,2))+C.cZ(p,3)*n,n)
k=C.cZ(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aB8[A.o.F(p,6)]
i=$.S()
h=B.a([],t)
g=new B.aI(i.r,A.aj,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.S()
e=new B.ar(A.S,A.Q,A.W,A.X,A.U)
e.b=A.ab
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.ag(g,e)
a0=B.bT(new B.r(k,l),o*2.3,m)
m=new B.ar(A.S,A.Q,A.W,A.X,A.U)
e=B.ap(j,A.w,0.35)
e.toString
m.sap(new B.bV(D.b3l,0.9,A.x,a1,0,B.a([A.c,j,e],u),Y.aAZ,a1).aG(0,a0))
a5.c2(a0,m)
m=B.a([],t)
h=new B.aI(h.r,A.aj,a1,a1,m)
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
i=new B.bw()
m.push(i)
m=h.f
if(m!=null)i.ak(m)
h.ab()
m=new B.ar(A.S,A.Q,A.W,A.X,A.U)
m.r=B.ap(j,A.w,0.3).gp(0)
a5.ag(h,m)}for(w=Math.max(4,A.j.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.j.F(r*(0.1+0.1*C.cZ(p,11))+C.cZ(p,12)*n,n)
q=C.cZ(p,13)
J.br(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bT(A.J,t,u)
$.S()
q=new B.ar(A.S,A.Q,A.W,A.X,A.U)
q.r=D.aB8[A.o.F(p,6)].j(0.85).gp(0)
a5.aD(s,q)
a3.restore()}},
bV4(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.r(a7,a8)
this.m3(b0,b1,b2,50,A.c,70)
for(w=[D.f8g,D.f7V,D.f80],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.r(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.S()
l=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l.sap(new B.bV(A.A,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aG(0,B.bW(m,r)))
b0.O(m,r,l)}w=Math.max(4,A.j.V(420*this.d))
for(v=a6*0.6,u=b2*0.18,k=0;k<w;++k){j=A.o.F(k,3)
i=C.cZ(k,1)
h=v*Math.pow(i,0.8)
g=j*3.141592653589793*2/3+i*5.5+u+(C.cZ(k,2)-0.5)*0.5
r=Math.cos(g)
l=Math.sin(g)
f=B.ap(A.bL,A.ey,i)
f.toString
e=C.cZ(k,3)
$.S()
d=new B.ar(A.S,A.Q,A.W,A.X,A.U)
d.r=f.j(0.5+0.5*C.cZ(k,4)).gp(0)
d.a=A.pd
b0.O(new B.r(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.S()
a8=B.L()
a8.sap(new B.bV(A.A,0.5,A.x,a3,0,B.a([A.rI.j(0.55),D.ak2],t),a3,a3).aG(0,B.bW(a9,a7)))
b0.O(a9,a7,a8)
a0=A.j.F(b2,3.5)/3.5
if(a0<0.25){a1=A.j.bi(b2/3.5)
a2=new B.r(a4*(0.1+0.5*C.cZ(a1,9)),a5*0.1*C.cZ(a1,8))
a4=B.kI(a2,a2.a5(0,new B.r(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.kI(a2,a4,0.6)
a5.toString
a7=B.L()
a7.sap(new B.a8(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aG(0,B.t1(a2,a4)))
a7.c=a6*0.005
a7.d=A.bF
b0.ah(a5,a4,a7)}},
csR(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.S()
o=B.a([],t)
n=new B.aI(p.r,A.aj,b4,b4,o)
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
p=new B.bw()
o.push(p)
o=n.f
if(o!=null)p.ak(o)
n.ab()
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.sap(new B.bV(A.A,0.5,A.x,b4,0,B.a([A.rI.j(0.28),D.ak2],w),b4,b4).aG(0,B.bW(new B.r(r,v),u)))
p.a=A.pd
b8.ag(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.er:A.es)
a8=$.S()
a9=B.a([],t)
n=new B.aI(a8.r,A.aj,b4,b4,a9)
a9.push(new B.aZ(a4?0:b5,0))
n.ab()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=a4?i:a1
a8=new B.cc(a8,l,a4?h:a0,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.aq(a4?0:b5,b6)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=new B.bw()
a9.push(a8)
a9=n.f
if(a9!=null)a8.ak(a9)
n.ab()
a8=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a8.sap(new B.a8(A.a5,A.a9,A.x,a6,b4,b4).aG(0,new B.a6(a5,0,a5+j,k)))
b8.ag(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ar(A.S,A.Q,A.W,A.X,A.U)
b0.r=A.i9.gp(0)
b0.c=o
b0.d=A.bF
b8.ah(new B.r(a8,m),new B.r(a9,p),b0)}b1=new B.aI($.S().r,A.aj,b4,b4,B.a([],t))
w=b6*0.78
b1.E(new B.aZ(b5*0.42,w))
b1.E(new B.aq(b5*0.58,w))
b1.E(new B.aq(b5*0.8,b6))
b1.E(new B.aq(b5*0.2,b6))
b1.E(new B.bw())
v=B.L()
v.sap(D.cag.aG(0,new B.a6(0,w,0+b5,w+b6*0.22)))
b8.ag(b1,v)
for(w=Math.max(4,A.j.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.j.F(b6*(0.05+0.07*C.cZ(s,1))+C.cZ(s,2)*b2,b2)
t=C.cZ(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.tc(b8,new B.r(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cZ(s,4)),A.bL,0.3+0.7*((p+1)/2))}},
bLh(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.j.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cZ(u,1))
s=j+t*4
r=t*2
q=A.j.F(v*(0.12+0.12*C.cZ(u,2))+C.cZ(u,3)*s,s)-r
p=C.cZ(u,4)*k
o=Math.cos(f*(2+3*C.cZ(u,5))+u)
n=Math.abs(o)
m=B.bT(new B.r(p,q),r,r*A.j.D(n,0.12,1))
$.S()
r=new B.ar(A.S,A.Q,A.W,A.X,A.U)
r.sap(new B.a8(A.ay,A.aD,A.x,o>0?D.dC8:D.cQR,null,null).aG(0,m))
d.c2(m,r)
r=-(t*0.22)
l=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l.b=A.ab
l.c=Math.max(0.6,t*0.08)
l.r=D.bvC.gp(0)
d.c2(new B.a6(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.tc(d,new B.r(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m3(d,e,f,30,A.bL,110)},
c4k(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m3(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.j.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cZ(q,1))
o=a0+p*4
n=a0+p*2-A.j.F(u*(0.03+0.04*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.S()
i=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i.sap(new B.bV(A.A,0.5,A.x,e,0,B.a([At.yy.j(0.45*l),D.aiC],v),e,e).aG(0,B.bW(new B.r(m,n),k)))
a2.O(new B.r(m,n),k,i)
i=B.a([],r)
h=new B.aI(j.r,A.aj,e,e,i)
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
k=new B.bw()
i.push(k)
j=h.f
if(j!=null)k.ak(j)
h.ab()
k=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j=B.ap(D.bl8,A.c,0.2*l)
j.toString
k.sap(new B.a8(A.aZ,A.b4,A.x,B.a([D.bqv,j],v),e,e).aG(0,B.bT(new B.r(m,n),p*1.4,p)))
a2.ag(h,k)
k=new B.ar(A.S,A.Q,A.W,A.X,A.U)
k.r=A.c.j(l).gp(0)
a2.O(new B.r(m,n+p*0.55),p*0.12,k)}},
c1Q(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.j.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.j.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.br(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aI(m.r,A.aj,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.kn(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.kn(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bw()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.dbd[A.o.F(p,5)]
m=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l=B.ap(e,A.w,0.25)
l.toString
m.sap(new B.bV(A.nm,0.5,A.x,d,0,B.a([A.c,e,l],v),L.a5L,d).aG(0,B.bW(A.J,o*1.4)))
a3.ag(i,m)
u.restore()}this.m3(a3,a4,a5,30,A.it,130)},
cnW(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cZ(q,1))
o=f+p*4
n=A.j.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.br(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aI(n.r,A.aj,h,h,m)
n=-p
m.push(new B.aZ(0,n))
k.ab()
l=n*0.2
j=new B.cc(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
n=new B.cc(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ak(l)
k.ab()
n=new B.bw()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ar(A.S,A.Q,A.W,A.X,A.U)
m=(q&1)===0?D.cKV:D.dmx
n.sap(new B.a8(A.a5,A.a9,A.x,m,h,h).aG(0,B.bW(A.J,p)))
d.ag(k,n)
v.restore()}this.m3(d,a0,a1,25,A.bL,140)},
bIH(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m3(b1,b2,b3,40,A.bL,150)
for(w=Math.max(4,A.j.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cZ(r,1))
p=Math.sin(b3*(0.15+0.1*C.cZ(r,2))+r*2.1)
o=Math.sin(b3*(0.21+0.1*C.cZ(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.br(v.save())
v.translate(a8*(0.5+0.45*p),a9*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=p.length,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=q*0.04,h=(r&1)===0,g=q*0.2,f=q*0.8,e=q*1.2,d=m*1.3,a0=m*0.1,a1=0;a1<o;++a1){a2=p[a1]
J.br(v.save())
v.scale(a2*n,1)
a3=$.S()
a4=B.a([],u)
a5=new B.aI(a3.r,A.aj,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.kn(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.kn(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bw()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a3.sap(new B.a8(A.a5,A.a9,A.x,h?D.dme:D.dpc,a7,a7).aG(0,new B.a6(0,m,k,j)))
b1.ag(a5,a3)
a3=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a3.b=A.ab
a3.c=Math.max(0.6,i)
a3.r=D.C9.gp(0)
b1.ag(a5,a3)
v.restore()}$.S()
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.r=D.buQ.gp(0)
p.c=q*0.1
p.d=A.bF
b1.ah(new B.r(0,m*0.3),new B.r(0,q*0.4),p)
v.restore()}},
c8q(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.r(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.j.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.S()
r=new B.ar(A.S,A.Q,A.W,A.X,A.U)
r.b=A.ab
r.c=v
r.r=D.aCj[u].j((1-t)*0.9).gp(0)
r.y=new B.h6(A.G,v)
q=s*0.3
d.aq(B.bx(B.bT(g,s,s*1.6),new B.aP(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cZ(o,1)*4)+o)))
m=D.aCj[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bx(new B.a6(l,k,l+w,k+n),new B.aP(v,v))
$.S()
l=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l.r=m.j(0.85).gp(0)
l.y=new B.h6(A.aey,q)
d.aq(k,l)}},
bPU(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.r(d,w)
u=a1*0.09
for(t=Math.max(4,A.j.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cZ(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cZ(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bL,A.pg,A.dy][A.o.F(q,4)]
k=C.cZ(q,3)
$.S()
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.r=l.j(0.75).gp(0)
j.a=A.pd
j.y=new B.h6(A.G,r)
a2.O(new B.r(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.S()
t=B.L()
t.r=A.aE.gp(0)
t.c=1.2
a2.ah(new B.r(d,0),new B.r(d,w-u),t)
t=B.L()
t.r=A.cZ.gp(0)
a2.O(v,u,t)
t=a2.c
J.br(t.save())
a0=new B.aI(a0.r,A.aj,null,null,B.a([],x.v))
a0.E(new B.jv(B.bW(v,u)))
a2.mu(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.j.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.S()
e=new B.ar(A.S,A.Q,A.W,A.X,A.U)
e.r=B.ap(A.bh,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.aD(new B.a6(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.tc(a2,v.a5(0,new B.r(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cDC(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.ck.aB(0,A.j.D(a1/3,0,1))),e=new B.r(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.S()
r=B.a([],v)
q=new B.aI(s.r,A.aj,k,k,r)
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
s=new B.bw()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
s=new B.ar(A.S,A.Q,A.W,A.X,A.U)
s.r=A.bL.j(0.1).gp(0)
d.ag(q,s)}g=h*0.5
$.S()
f=B.L()
f.sap(new B.bV(A.A,0.5,A.x,k,0,B.a([D.bgl.j(0.6),D.aiC],x.O),k,k).aG(0,B.bW(e,g)))
d.O(e,g,f)
f=h*0.2
g=B.L()
g.sap(D.eDz.aG(0,B.bW(e,f)))
d.O(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.j.F(g*(1+u*0.3)+C.cZ(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l.r=A.c.j(0.18).gp(0)
d.c2(B.bT(new B.r(n,m),s,v),l)
d.c2(B.bT(new B.r(n+r,m-p),s,o),l)}this.m3(d,a0,a1,20,A.hI,180)},
cn_(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.S()
r=B.a([],u)
q=new B.aI(s.r,A.aj,h,h,r)
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
s=new B.bw()
r.push(s)
r=q.f
if(r!=null)s.ak(r)
q.ab()
$.S()
s=new B.ar(A.S,A.Q,A.W,A.X,A.U)
s.r=B.ap(A.cG,A.ji,t/3).j(0.55).gp(0)
d.ag(q,s)}for(w=Math.max(4,A.j.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cZ(k,1))
i=f-A.j.F(v*(0.04+0.05*C.cZ(k,2))+C.cZ(k,3)*l,l)
o=C.cZ(k,4)*g+Math.sin(a1+k)*e*0.02
$.S()
u=new B.ar(A.S,A.Q,A.W,A.X,A.U)
u.sap(new B.bV(Aq.Bm,0.5,A.x,h,0,D.dsQ,h,h).aG(0,B.bW(new B.r(o,i),j)))
d.O(new B.r(o,i),j,u)}this.m3(d,a0,a1,25,A.c,190)},
cBE(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.j.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cZ(r,1))
p=g+q*4
o=A.j.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bF
J.br(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.J,new B.r(0,o),l)
d.ah(new B.r(0,n),new B.r(m,k),l)
d.ah(new B.r(0,n),new B.r(j,k),l)}v.restore()}this.m3(d,e,a0,40,A.eO,200)},
c4q(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.r(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.j.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.j.cB(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.br(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bT(new B.r(o,0),p,q)
$.S()
e=new B.ar(A.S,A.Q,A.W,A.X,A.U)
e.sap(D.ca3.aG(0,new B.a6(0,n,m,l)))
a3.c2(f,e)
r.restore()}}$.S()
a0=B.L()
a0.b=A.ab
a0.c=a2*0.003
a0.r=D.blp.gp(0)
a3.O(w,v*1.08,a0)
d=a5*0.8
this.tc(a3,w.a5(0,new B.r(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m3(a3,a4,a5,40,A.bL,210)},
cvm(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i9,A.hI],a4),B.a([A.po,A.it],a4),B.a([A.aC,A.ey],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bQ<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.S()
l=B.a([],p)
k=new B.aI(m.r,A.aj,null,null,l)
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
k.ab()}j.push(new B.r(f,e+d))}for(m=new B.dr(j,t),m=new B.bQ(m,m.gJ(0),s);m.C();){i=m.d
if(i==null)i=r.a(i)
i=new B.aq(i.a,i.b)
l.push(i)
g=k.f
if(g!=null)i.ak(g)
k.ab()}m=new B.bw()
l.push(m)
l=k.f
if(l!=null)m.ak(l)
k.ab()
$.S()
m=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l=a5[n]
i=l[0]
m.sap(new B.a8(A.a5,A.a9,A.x,B.a([i,l[1],i],a4),A.mq,new B.mN(w)).aG(0,new B.a6(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.ag(k,m)}this.m3(a6,a7,a8,40,A.c,220)},
c48(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.j.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.j.bi(g/s),5)
a1=g+s
$.S()
a2=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a3=Math.abs(a0)
a2.r=D.a5O[a3].gp(0)
b0.aD(new B.a6(g,i,a1,f),a2)
a2=g+r
a4=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a4.r=D.a5O[A.o.F(a3+2,5)].gp(0)
b0.aD(new B.a6(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.j.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.j.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a5,a5)
u=C.cZ(a0,3)
t=C.cZ(a0,4)
this.tc(b0,new B.r(u*a6,l-a7),a8*(0.01+0.012*t),D.a5O[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cHl(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.r(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ar(A.S,A.Q,A.W,A.X,A.U)
p.c=u
p.r=A.bL.j(0.06).gp(0)
a4.ah(w,new B.r(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aI($.S().r,A.aj,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.E(new B.aZ(u,a2))
v=a1+v
m.E(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.E(new B.cc(v,r,p,l))
v=a2+n*0.95
m.E(new B.aq(p,v))
p=o*0.3
k=a2+n
m.E(new B.aq(a1+p,k))
m.E(new B.aq(a1-p,k))
q=a1-q
m.E(new B.aq(q,v))
m.E(new B.aq(q,l))
m.E(new B.cc(u,r,u,a2))
m.E(new B.bw())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bT(new B.r(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ar(A.S,A.Q,A.W,A.X,A.U)
d.b=A.ab
d.c=p
d.r=A.aF.gp(0)
a4.cP(f,e,3.141592653589793,!1,d)}a1=B.L()
a1.sap(new B.a8(A.a5,A.a9,A.x,D.dvG,A.aBf,null).aG(0,new B.a6(u,a2,r,k)))
a4.ag(m,a1)
a0=A.j.F(a6*0.6,1.4)
if(a0<1)this.tc(a4,new B.r(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bLU(a4,a5,a6,60)},
bLU(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.j.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.j.F(l*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.br(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bT(A.J,r*A.j.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ar(A.S,A.Q,A.W,A.X,A.U)
n.r=D.RT[A.o.F(p,5)].gp(0)
d.aD(o,n)
u.restore()}},
czo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m3(d,e,f,70,A.c,250)
for(w=Math.max(4,A.j.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cZ(p,1)*1.6
n=A.j.F(f+C.cZ(p,2)*o,o)/o
m=i*(C.cZ(p*7+A.j.bi((f+C.cZ(p,2)*o)/o),3)*1.2-0.1)
l=new B.r(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.r(m+t*k,v+u*k)
$.S()
k=new B.ar(A.S,A.Q,A.W,A.X,A.U)
k.sap(new B.a8(A.a5,A.a9,A.x,B.a([A.c.j(0),A.bL],s),null,null).aG(0,B.t1(j,l)))
k.c=r
k.d=A.bF
d.ah(j,l,k)
this.tc(d,l,q,A.c,1-n)}},
bGV(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.j.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cZ(s,1))
q=A.j.F(C.cZ(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.j.F(C.cZ(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.S()
n=new B.ar(A.S,A.Q,A.W,A.X,A.U)
m=A.o.F(s,5)
n.r=D.aE4[m].j(o).gp(0)
n.a=A.pd
n.y=new B.h6(A.G,r*0.12)
d.O(new B.r(q,p),r,n)
n=new B.ar(A.S,A.Q,A.W,A.X,A.U)
n.b=A.ab
n.c=Math.max(0.6,r*0.05)
n.r=D.aE4[m].j(o*1.4).gp(0)
d.O(new B.r(q,p),r,n)}},
ckB(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.br(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bT(A.J,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.S()
o=new B.ar(A.S,A.Q,A.W,A.X,A.U)
o.b=A.ab
o.c=u
o.r=A.bL.j(0.45).gp(0)
d.c2(p,o)
n=f*(0.9+q*0.25)+q
m=new B.r(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ar(A.S,A.Q,A.W,A.X,A.U)
o.r=A.hI.gp(0)
d.O(m,t,o)
o=new B.ar(A.S,A.Q,A.W,A.X,A.U)
o.r=A.i9.j(0.4).gp(0)
o.y=new B.h6(A.G,r)
d.O(m,s,o)
w.restore()}this.m3(d,e,f,45,A.bL,270)},
bUi(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.j.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
switch(n){case 0:l=new B.r(m*a1,p)
break
case 1:l=new B.r(m*a1,q)
break
case 2:l=new B.r(r,m*a2)
break
default:l=new B.r(s,m*a2)
break}k=A.j.F(a6+C.cZ(o,2)*4,4)/4
j=A.ei.aB(0,A.j.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.dj6[A.o.F(o,5)]
J.br(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bT(new B.r(0,l),i,j)
$.S()
a0=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a0.sap(new B.a8(A.aZ,A.b4,A.x,B.a([A.c,g],u),null,null).aG(0,B.bT(new B.r(0,l),f,h)))
a4.c2(d,a0)}$.S()
l=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l.r=A.i9.gp(0)
a4.O(A.J,h*0.3,l)
v.restore()}this.m3(a4,a5,a6,30,A.hI,280)},
c88(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.j.F(t+n/4,1)
l=B.bW(new B.r(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.b=A.ab
j.c=u
j.r=D.aAk[n].j((1-m)*0.8).gp(0)
a4.cP(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.j.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.j.F(v*(0.06+0.06*C.cZ(h,1))+C.cZ(h,2)*i,i)
f=C.cZ(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cZ(h,4))
d=D.aAk[A.o.F(h,4)]
$.S()
a0=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a0.r=d.gp(0)
J.br(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.c2(B.bT(A.J,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ar(A.S,A.Q,A.W,A.X,A.U)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.r(s,g),new B.r(s,p),o)
if((h&1)===0){o=new B.ar(A.S,A.Q,A.W,A.X,A.U)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.r(s,p),new B.r(f+e*1.6,g-e*2),o)}}},
c6z(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
a4/=2
a5/=2
w=new B.r(a4,a5)
for(v=a7.c,u=a6*0.003,t=a6*0.004,s=x.v,r=a9*0.08,q=0;q<4;++q){p=8+q*4
o=a6*(0.2+q*0.11)
n=(q&1)===0?1:-1
J.br(v.save())
v.translate(a4,a5)
v.rotate(r*n*(1+q*0.3)*180/3.141592653589793,0,0)
for(m=q/3,l=-o,k=l*1.16,j=l*0.12,i=l*0.82,h=o*0.12,g=l*1.12,f=6.283185307179586/p*180/3.141592653589793,e=0;e<p;++e){v.rotate(f,0,0)
d=$.S()
a0=B.a([],s)
a1=new B.aI(d.r,A.aj,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.ab()
d=new B.cc(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ak(a2)
a1.ab()
d=new B.cc(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ak(a0)
a1.ab()
d=new B.ar(A.S,A.Q,A.W,A.X,A.U)
d.b=A.ab
d.c=u
d.r=B.ap(A.bL,A.pg,m).j(0.7).gp(0)
a7.ag(a1,d)
d=new B.ar(A.S,A.Q,A.W,A.X,A.U)
d.r=A.hI.j(0.8).gp(0)
a7.O(new B.r(0,k),t,d)}v.restore()}a4=a6*0.17
$.S()
a5=B.L()
a5.sap(new B.bV(A.A,0.5,A.x,a3,0,B.a([A.i9.j(0.25),D.a__],x.O),a3,a3).aG(0,B.bW(w,a4)))
a7.O(w,a4,a5)
this.m3(a7,a8,a9,30,A.bL,300)},
cBL(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.r(j,i)
$.S()
g=new B.ar(A.S,A.Q,A.W,A.X,A.U)
g.r=A.bh.gp(0)
g.c=q
g.d=A.bF
b1.ah(new B.r(l,a9),h,g)
g=new B.ar(A.S,A.Q,A.W,A.X,A.U)
g.sap(new B.bV(A.A,0.5,A.x,null,0,B.a([A.hI,A.i9.j(0.6),D.a__],o),null,null).aG(0,B.bW(h,p)))
b1.O(h,p,g)
for(l=Math.max(4,A.j.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.j.F(b3+C.cZ(f,2)*e,e)/e
a0=A.j.bi((b3+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cZ(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.r(a4,a5)
a7=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a7.r=B.ap(A.hI,A.at,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bF
a7.a=A.pd
b1.ah(new B.r(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.r(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.r(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m3(b1,b2,b3,35,A.bL,310)},
bKy(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVA(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cZ(o,1))
m=a6*(0.14+0.24*C.cZ(o,2))
l=a6-m
k=new B.a6(p,l,p+n,l+m)
$.S()
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.sap(D.cb0.aG(0,k))
a7.aD(k,j)
i=A.j.bi(n/r)
h=A.j.bi(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cZ(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.S()
a4=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a4.r=A.bL.j(0.85).gp(0)
a7.aD(new B.a6(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.b1w.prototype={
B(d){var w,v=null,u=new C.cfE(),t=new C.cfG(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.at1,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cfF(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Is[w]))
return B.bZ(A.bH,s,A.br,v,12,10)}}
C.a_F.prototype={
S(){return new C.aBU()}}
C.aBU.prototype={
gwl(){var w=this.d
return w===$?this.d=this.a.c:w},
gb23(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b6,A.aP),$.ax())}return v},
gazN(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNz()
v=$.ax()
u.f!==$&&B.bD()
t=u.f=new B.au(new B.ba(w,A.b6,A.aP),v)}return t},
t(){var w=this.gb23(0),v=$.ax()
w.U$=v
w.P$=0
w=this.gazN()
w.U$=v
w.P$=0
this.a2()},
a0j(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a0j=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i0().CN(90,700,700,A.eQ),$async$a0j)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a0j)
case 8:p=e
o=q.b.toLowerCase()
n=J.ajh(o,".png")?"image/png":"image/jpeg"
r.m(new C.diy(r,n,p))
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
return B.i($async$a0j,v)},
b22(d){var w=null,v=A.c.j(0.07)
return B.bz(w,new B.b6(4,B.l(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.W0,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aig(p.gwl().a)
if(n==null)n=A.d.gH(D.Is)
w=p.gwl()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ac,A.t,B.a([B.bR(0,new C.Op(p.gwl(),!1,!0,new B.bj(w.a+v,x.W)),0,0,0),B.ao(o,B.IE(A.n8,new C.diD(d),B.o2(o,A.b5,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.IE(A.arT,new C.diE(p),B.o2(o,A.b5,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aWL,o,o,o)
t=B.E(B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb23(0),o,o,o,o,o,2,p.b22("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.diF(p),o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,A.h5,!0,A.a6,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.K(A.i9.j(0.6),A.r,1)
if(p.gwl().d.length===0)q=D.bY3
else{q=C.hxG(p.gwl().d)
if(q==null)q=new Uint8Array(0)
q=B.hZ(B.fU(q,A.A,o,o,A.cl,A.c0,!1,o,!1,o,o),A.aq)}r=B.a([t,A.af,B.az(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a7),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcem(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwl().d.length!==0)r.push(B.aH(o,o,o,o,H.Qk,o,o,o,new C.diG(p),o,o,o,o,"Remove logo",o))
return B.c5(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.T,B.A(r,A.l,o,A.e,A.h,0,o,o),A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gazN(),o,o,o,o,o,2,p.b22("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.diH(p),o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,A.dj,!0,A.a6,o,A.ao,o,o,o,o),A.ae,B.dh(D.bWW,o,D.h3W,new C.diI(p,d),B.bo(A.aF,o,o,o,A.w,o,A.co,o,new B.b9(B.l(14),A.a1),o,o,o))],u),A.al,o,A.e,A.N,0,A.p),A.f,o,o,D.b8D,o,o,o,o,A.H3,o,o,o)],u),A.l,o,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aNI.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.a0_.prototype={
S(){return new C.biG(new B.au(A.ax,$.ax()))}}
C.biG.prototype={
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.a_,l=n?A.aR:A.an,k=B.aF(d,A.c_,x.w).w,j=n?A.a_:A.c,i=B.l(28),h=B.K(n?A.bx:A.bk,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.m(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cB,l,o,o,o,o),o,o,o,new C.dpl(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.h,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d1E[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.F(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aT(v.b);v.C();){s=v.gR(v)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.ch
t.push(B.aM(!1,new B.be(r,r,r,r),!0,B.p(A.A,B.d(s,o,o,o,o,o,o,A.q0,o,o,o),A.f,o,o,new B.o(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dpm(this,s),o,o,o,o,o,o,o))}A.d.u(e,B.a([new B.D(A.hM,u,o),new B.CX(A.bH,6,6,A.br,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.m(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bs:A.aS
e.push(B.A(B.a([B.E(B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bz(o,new B.b6(4,B.l(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ad,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a6,o,A.ao,o,o,o,o),1),A.af,B.bI(A.aXL,o,new C.dpn(this),o)],g),A.l,o,A.e,A.h,0,o,o))
e.push(A.P)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.di(1,A.cm,B.cm(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.N,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.uH,A.a18,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bi0.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e6()
a1.d_(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.L()
u.y=A.OL
t=B.L()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.aw(4))+o)
i=A.j.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.r(l,h)
if(a1.ai()<0.25){f=B.ap(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.j.D(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.O(g,k*2.4,u)
t.r=e.gp(0)
a2.O(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.S()
a0=new B.ar(A.S,A.Q,A.W,A.X,A.U)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.r(l-d,h),new B.r(l+d,h+0),a0)
a2.ah(new B.r(l,h-d),new B.r(l+0,h+d),a0)}}},
aE(d){return d.b!==this.b}}
C.bhI.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bx(new B.a6(0,0,0+a3.a,0+a3.b),A.jP),e=this.b,d=Math.sin(e*2),a0=$.S(),a1=B.L()
a1.b=A.ab
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.mh
a2.aq(f,a1)
a1=x.v
a0=new B.aI(a0.r,A.aj,g,g,B.a([],a1))
a0.E(new B.ja(f))
v=new B.a5I(new B.tG(B.zA(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.j6()
u=a0.e
t=u[d].b
t===$&&B.c()
t=t.a.length()
s=e/6.283185307179586*t
w=B.ap(w,A.c,0.8)
w.toString
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.j.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.S()
k=new B.ar(A.S,A.Q,A.W,A.X,A.U)
k.b=A.ab
k.d=A.bF
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.j.F(o-q*(1-n/10),t)
i=A.j.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.ag(new B.aI(r,l,g,new B.ce([v,j,i,!0]),B.a([],a1)),k)
else{a2.ag(new B.aI(r,l,g,new B.ce([v,j,t,!0]),B.a([],a1)),k)
a2.ag(new B.aI(r,e.b,g,new B.ce([v,0,i,!0]),B.a([],a1)),k)}}a0.j6()
h=u[d].Hy(o).a
$.S()
l=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l.r=w.gp(0)
l.y=Ae.oz
a2.O(h,5,l)
l=new B.ar(A.S,A.Q,A.W,A.X,A.U)
l.r=A.c.gp(0)
a2.O(h,2,l)}},
aE(d){return d.b!==this.b}}
C.bqP.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e6()
f.d_(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h3()?-0.1:1.1
v=e.b*v
u=new B.r(w,v)
t=e.gaon()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.S()
j=B.a([],o)
i=new B.aI(k.r,A.aj,g,g,j)
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
k=new B.bw()
j.push(k)
j=i.f
if(j!=null)k.ak(j)
i.ab()
k=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j=B.a([s.j(0.16),s.j(0)],r)
k.sap(new B.alR(u,t,j,g,A.x,g,g,0))
k.y=A.kW
d.ag(i,k)}},
aE(d){return d.b!==this.b}}
C.bcw.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e6()
e.d_(this.c*7+3)
for(w=this.d,v=a0.a,u=Math.abs(v),t=a0.b,s=Math.abs(t),r=this.b,q=r*0.8,p=r*2,o=0;o<16;++o){n=e.ai()
m=e.ai()
l=Math.min(u,s)*(0.03+e.ai()*0.09)
k=e.ai()*3.141592653589793*2
j=(n+Math.sin(r+k)*0.04)*v
i=(m+Math.cos(q+k)*0.05)*t
h=0.08+0.1*(0.5+0.5*Math.sin(p+k))
if((o&1)===0)g=w
else{f=B.ap(w,A.c,0.6)
f.toString
g=f}$.S()
f=new B.ar(A.S,A.Q,A.W,A.X,A.U)
f.r=g.j(h).gp(0)
f.y=new B.h6(A.G,l*0.35)
d.O(new B.r(j,i),l,f)
f=new B.ar(A.S,A.Q,A.W,A.X,A.U)
f.b=A.ab
f.c=1
f.r=B.ap(g,A.c,0.5).j(h*0.9).gp(0)
d.O(new B.r(j,i),l,f)}},
aE(d){return d.b!==this.b}}
C.bc9.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e6()
e.d_(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.S()
i=B.a([],o)
h=new B.aI(j.r,A.aj,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.S()
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.b=A.ab
j.c=s
j.d=A.bF
if(n===1){i=B.ap(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.h6(A.G,u)
d.ag(h,j)}},
aE(d){return d.b!==this.b}}
C.bxW.prototype={
a4(d,e){var w,v,u=new B.a6(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.L()
t=(0.5+0.5*t)*0.12
w.sap(new B.bV(A.A,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),X.aBm,null).aG(0,u))
d.aD(u,w)
w=u.cq(-3)
v=B.L()
v.b=A.ab
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kW
d.aD(w,v)},
aE(d){return d.b!==this.b}}
C.buU.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.j.bi(f)*7,q=0;q<7;++q){p=new B.e6()
p.d_(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.j.F(A.j.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ap(s,A.c,0.7).j(m)
$.S()
j=new B.ar(A.S,A.Q,A.W,A.X,A.U)
j.r=k.gp(0)
j.c=1.4
j.d=A.bF
d.ah(new B.r(o-l,n),new B.r(o+l,n+0),j)
i=l*1.4
d.ah(new B.r(o,n-i),new B.r(o+0,n+i),j)
i=l*0.45
h=o-i
g=o+i
j.c=0.8
d.ah(new B.r(h,n-i),new B.r(g,n+i),j)
i=-l*0.45
d.ah(new B.r(h,n-i),new B.r(g,n+i),j)
i=new B.ar(A.S,A.Q,A.W,A.X,A.U)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.h6(A.G,l*0.3)
d.O(new B.r(o,n),l*0.35,i)}},
aE(d){return d.b!==this.b}}
C.bu1.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a6(0,0,0+e.a,0+e.b)
$.S()
v=B.L()
v.a=A.pd
v.sap(new B.a8(A.ay,A.aD,A.x,B.a([A.L,B.ap(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.j.D(u-0.15,0,1),A.j.D(u,0,1),A.j.D(u+0.15,0,1)],x.x),null).aG(0,w))
d.aD(w,v)},
aE(d){return d.b!==this.b}}
C.bh2.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdm(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.L()
w.b=A.ab
w.c=1.4
w.d=A.bF
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.L()
u.b=A.ab
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uM
r=new C.dif(this,r*0.16,d,u,w)
t=e.gdm()*0.045
r.$3(new B.r(t,t),1,1)
v=e.a-t
r.$3(new B.r(v,t),-1,1)
s=e.b-t
r.$3(new B.r(t,s),1,-1)
r.$3(new B.r(v,s),-1,-1)},
aE(d){return d.b!==this.b}}
C.ye.prototype={}
C.JG.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.at1.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vi.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mV.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hJ.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eS.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ev(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
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
u.n(0,"decoration",C.icQ(v.z))
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
C.m3.prototype={
hQ(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eS>")
n=B.C(new B.N(n,new C.clj(),m),m.k("ak.E"))
return C.t_(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a9<n,@>>")
n=B.C(new B.N(n,new C.clk(),m),m.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hU.prototype={
gbdy(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bh(v)},
gTh(){if(!C.kO(this.w))return!1
var w=this.gbdy()
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
q=B.U(r).k("N<1,m3>")
r=B.C(new B.N(r,new C.cl8(),q),q.k("ak.E"))
return C.Cm(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
aj(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.aa().af())
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
w=B.C(new B.N(w,new C.cl9(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.k1.prototype={}
C.b3F.prototype={
B(d){return B.cn(new C.cle(this))}}
C.aq2.prototype={
S(){return new C.blX(null,null)}}
C.blX.prototype={
gb24(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.fL,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gb24().t()
this.bze()},
B(d){return B.c4(this.gb24(),new C.dQV(),this.a.c)}}
C.aNr.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.aeM.prototype={
QO(d,e,f,g){return this.bTW(d,e,f,g)},
bTW(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QO=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QO)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).N(null)
t=d.L(x.q).f
t.T(B.b2(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ej,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QO,v)},
B(d){var w=this,v=null,u=B.l(22),t=B.K(A.c.j(0.08),A.r,1),s=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dk,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.u(n,B.a([A.aw,B.d(w.c,v,2,A.a2,v,v,v,B.m(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.da)
n.push(B.A(B.a([B.E(new C.af2(A.hP,"Download",A.c2,new C.eCX(w,d),!0,v),1),A.as,B.E(new C.af2(A.v0,"Share",A.bo,new C.eCY(w,d),!1,v),1),A.as,B.E(new C.af2(A.hQ,"Safari",A.b3,new C.eCZ(w,d),!1,v),1)],m),A.l,v,A.e,A.h,0,v,v))
n.push(A.aB)
n.push(B.bO(!1,B.d("Cancel",v,v,v,v,v,v,B.m(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eD_(d),v,v))
return B.bm(!0,new B.D(A.qH,B.x(B.a([B.p(v,B.x(n,A.al,v,A.e,A.h,0,A.p),A.f,v,v,new B.o(A.jl,v,t,u,s,v,A.n),v,v,v,v,A.H9,v,v,1/0)],m),A.l,v,A.e,A.N,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.af2.prototype={
B(d){var w=this,v=null,u=B.l(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.l(16),q=B.K(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a3,!0,v,B.aM(!1,u,!0,B.eB(B.x(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.N,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bIW,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.b3D.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.as8(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.cen().amp(1.35)
s=B.axG(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bER(v)
if(i.e&&i.w!=null)q=B.aN(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bo,h,h,h,h,2,D.c5B,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bj("slide_tf_"+g.a,x.W),h,A.xw,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ad,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AR,A.ao,h,A.VD,h,h)
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
w=n?t.cPc(B.b0(g.Q).j(0.45),A.cI):t
p=g.as
l=m?1:h
k=m?A.eS:A.EW
p=B.d(f,new B.bj("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.Vu:s
$.S()
j=B.L()
j.b=A.ab
j.c=3*w
j.e=A.dQ
j.r=A.av.gp(0)
j=i.cvp(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ac,A.t,B.a([j,i.cvn(k,t,l?A.Vu:s)],x.p),h)}else w=i.cvo(p,t,g.k2?A.Vu:s,m)
v=new B.mq(w,new B.bj("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.az(A.c1,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bK(r,h,h,q,h),h)
case 1:case 4:return i.c2x()
case 3:return i.cmZ()
case 2:return B.b3(h,h,h,new C.b3A(g,h),A.fS)
case 5:g=g.r
return new C.b3C(g,!i.e&&i.z==null,h)}},
cen(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k8
j=A.cI
break
case"shadow":v=o.d
e=B.a([new B.cU(D.aiA,new B.r(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cU(l,A.J,6*v),new B.cU(l,A.J,16*v),new B.cU(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bt
w=A.av
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.nh
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cU(A.bD,new B.r(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.ap(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cU(v,new B.r(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cU(A.b9,new B.r(-3*v,0),0),new B.cU(A.aA,new B.r(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cU(A.cN,A.J,8*v),new B.cU(A.aA,new B.r(0,-3*v),18*v)],x.r)
k=A.u
w=A.wd
break
case"ice":v=o.d
e=B.a([new B.cU(A.aG,A.J,10*v),new B.cU(A.cG,A.J,22*v)],x.r)
k=A.O
w=A.eO
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k8
break
case"comic":v=B.ap(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.dc3[q]
u.push(new B.cU(v,new B.r(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.r(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.L()
v=o.d
f.sap(D.c8l.aG(0,new B.a6(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.FQ,new B.r(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.L()
v=o.d
f.sap(D.c8I.aG(0,new B.a6(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cU(l,A.J,14*o.d)],x.r)
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
e=B.a([new B.cU(l.j(0.45),new B.r(u,u),0),new B.cU(l.j(0.2),new B.r(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.k8
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.m(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBN(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.ffm.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.clc(h)
v=r.k2?C.ipC(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eS:A.EW
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Z8(B.cQ(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cvp(d,e,f,g){return this.aBN(d,e,f,!1,g)},
cvn(d,e,f){return this.aBN(d,e,f,!1,null)},
cvo(d,e,f,g){return this.aBN(d,e,f,g,null)},
bER(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a9
default:return A.a5}},
c2x(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bM
return B.as(B.X(s.b===D.lu?A.I4:A.CY,A.aE,t,t,t,32),t,t,t)}w=u.bHV(r)
if(s.b===D.lu){s=B.l(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.K(A.cC,A.r,1),s,B.a([new B.ab(0,A.G,A.w.j(0.08),A.dL,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQI(r,!0)
return C.fQj(s.go,v,s.id)}return w},
aQI(d,e){var w,v,u,t
try{w=C.ipX(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.c7(u,"_bg")
u=B.cn(new C.clb(this,w,v,e))
return u}catch(t){return D.afY}},
bHV(d){return this.aQI(d,!1)},
cmZ(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.beg
return C.iqe(v,w.db,w.dx)}}
C.b3A.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.L(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.L()
w.r=B.b0(f.ch).gp(0)
w.b=A.ab
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a6(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aD(s,g)
d.aD(s,w)
break
case 1:d.c2(s,g)
d.c2(s,w)
break
case 2:r=new B.aI(h.r,A.aj,i,i,B.a([],x.v))
r.E(new B.aZ(u/2,0))
r.E(new B.aq(u,t))
r.E(new B.aq(0,t))
r.E(new B.bw())
d.ag(r,g)
d.ag(r,w)
break
case 3:r=new B.aI(h.r,A.aj,i,i,B.a([],x.v))
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
r.E(new B.bw())
d.ag(r,g)
d.ag(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.r(0,h),new B.r(u,h),w)
break
case 5:q=u*0.22
r=new B.aI(h.r,A.aj,i,i,B.a([],x.v))
r.E(new B.aZ(q,0))
r.E(new B.aq(u,0))
r.E(new B.aq(u-q,t))
r.E(new B.aq(0,t))
r.E(new B.bw())
d.ag(r,g)
d.ag(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aI(h.r,A.aj,i,i,f)
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
r.ab()}}r.E(new B.bw())
d.ag(r,g)
d.ag(r,w)
break}},
aE(d){return d.b!==this.b}}
C.aKY.prototype={
S(){return new C.bxq(null,null)}}
C.bxq.prototype={
Y(){var w,v=this
v.a3()
w=B.bn(null,A.hL,null,1,null,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBv()},
aQT(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O)
return new B.bM(new B.o(w,w,w,B.l(8),w,new B.a8(A.a5,A.a9,A.x,v,w,w),A.n),A.bi,B.as(B.d(d,w,w,w,w,w,w,A.dk,w,w,w),w,w,w),w)},
bF4(){var w,v=this,u=null,t=v.aQT("Slide A",A.bo),s=v.aQT("Slide B",A.b3)
if(v.a.c===D.cv)return new B.an(A.a0,u,A.b2,A.t,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.m(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c4(w,new C.fi2(v,s,t),u)},
B(d){return this.bF4()}}
C.aLF.prototype={
ju(d){return new B.a6(0,0,0+d.a*A.j.D(this.b,0,1),0+d.b)},
ka(d){return d.b!==this.b}}
C.Wl.prototype={
S(){return new C.bma(null,null)}}
C.bma.prototype={
Y(){var w,v,u=this
u.a3()
w=B.bn(null,A.Cp,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cv){w.sp(0,1)
return}B.bN(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1K(u),x.a)},
by(d){var w,v,u,t=this
t.bJ(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cv)w.sp(0,1)
else B.bN(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e1J(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzv()},
B(d){var w,v=this.a
if(v.c.dy===D.cv||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c4(w,new C.e1I(this),v.d)}}
C.JF.prototype={
B(d){return B.cn(new C.cl4(this))}}
C.aBz.prototype={
S(){return new C.bgt()}}
C.bgt.prototype={
Y(){this.a3()
if(this.a.c!==D.cv)B.bN(A.O3,new C.dfs(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cv)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.m(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.v(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Wl(C.ev(A.bn,!1,4279310375,A.aH,"",4294538006,24,A.bq,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bl,o,2,"",0,0,"",u,D.fi,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.c8,p,p,B.l(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bj("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.v(0)
n=q.d
t=C.ev(A.bn,!1,4294967295,A.aH,"",4280640491,22,A.bq,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bl,o,2,"Element flies in",0,0,"",q.a.c,D.d1,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.l(14)
v=new B.an(A.a0,p,A.ac,A.t,B.a([w,B.ao(32,new C.Wl(t,B.p(p,D.fQ_,A.f,p,p,new B.o(s,p,B.K(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jp,p,p,1/0),!0,1,new B.bj("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return new B.bM(D.b9c,A.bi,n,p)}}
C.a93.prototype={
S(){return new C.bmR(null,null)}}
C.bmR.prototype={
gb2H(){var w=this.a
if(w.e)w=D.ffy.q(0,w.c)||D.aTM.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a3()
if(v.gb2H()){w=C.iod(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bn(null,B.dw(0,0,0,w,0,0),null,1,null,v)
w.cK(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bA0()},
B(d){var w,v=this,u=v.d
if(!v.gb2H()||u==null)return v.a.d
w=v.a
return B.c4(u,new C.eqj(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b1z.prototype={
B(d){var w=null
return B.as(C.b3E(!0,w,!1,C.ev(A.K,!1,this.e.l(),A.aH,"",4280640491,this.f,A.bq,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bl,4280172719,2,"Aa",0,0,this.c,D.cv,D.d1,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bhG.prototype={
ju(d){return C.a3O(this.b,new B.a6(0,0,0+d.a,0+d.b).cq(-this.c))},
ka(d){return d.b!==this.b||d.c!==this.c}}
C.bsV.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a6(0,0,0+e.a,0+e.b).cq(-this.d),k=this.b,j=C.a3O(k,l),i=e.gdm(),h=new C.f6X()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.sap(D.aVl.aG(0,l))
d.ag(j,w)
k=C.a3O(k,l.cq(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.bvm.gp(0)
d.ag(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.sap(X.aVm.aG(0,l))
d.ag(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.h6(A.G,i*0.04)
d.ag(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.ag(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.sap(D.fpV.aG(0,l))
d.ag(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.ag(j,w)
k=C.a3O(k,l.cq(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.ag(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.b9.j(0.7).gp(0)
k.y=new B.h6(A.G,i*0.035)
d.ag(j,k)
k=h.$1(i*0.016)
k.r=A.pp.gp(0)
d.ag(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.sap(D.fpQ.aG(0,l))
d.ag(j,w)
w=C.a3O(k,l.cq(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.bi6.gp(0)
d.ag(w,v)
k=C.a3O(k,l.cq(i*0.03))
v=h.$1(i*0.004)
v.r=D.blb.gp(0)
d.ag(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.sap(D.aVl.aG(0,l))
d.ag(j,k)
for(k=B.zA(j),w=B.a([],x.X),k=new B.tG(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bk(B.jK(y.M));--r
k.j6()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.j.bi(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.j6()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.j6()
n=w[r].Hy(q*o/p).a
m=D.d9a[A.o.F(o,4)]
$.S()
q=new B.ar(A.S,A.Q,A.W,A.X,A.U)
q.r=m.gp(0)
d.O(n,v,q)
q=new B.ar(A.S,A.Q,A.W,A.X,A.U)
q.r=A.c.j(0.9).gp(0)
d.O(new B.r(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.sap(D.fpY.aG(0,l))
k.y=new B.h6(A.G,i*0.03)
d.ag(j,k)
k=h.$1(i*0.018)
k.sap(D.fpW.aG(0,l))
d.ag(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.ag(j,w)
k=C.a3O(k,l.cq(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.pi.gp(0)
d.ag(k,w)
break}},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.btZ.prototype={
a4(d,e){d.Gv(C.a3O(this.b,new B.a6(0,0,0+e.a,0+e.b).cq(-this.c)),A.w,e.gdm()*0.05,!1)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aNH.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.aOb.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.aPv.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.a9m.prototype={}
C.OV.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGt(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge4(){return this.c},
gUE(){return this.r},
gUF(){return this.w},
gMn(){return this.x}}
C.aGt.prototype={
Y(){var w,v,u=this
u.a3()
$.aU.c0$.push(u)
C.fVp()
$.hFW=new C.eJb(u)
w=B.bn(null,A.Cm,null,1,null,u)
w.f2(0,!0)
u.fy!==$&&B.aQ()
u.fy=w
v=$.heO.h(0,u.a.c)
if(v!=null){w=B.C(v,x.I)
u.d=w
u.x=!1}u.J3()},
by(d){var w,v,u=this
u.bJ(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Pi(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.J3()}},
jl(d){if(d===A.Bo||d===A.u8||d===A.u7||d===A.q9)this.uh()},
t(){var w,v,u,t=this
$.aU.hV(t)
if(!t.x){w=t.a.c
v=B.C(t.d,x.I)
$.heO.n(0,w,v)}w=t.at
if(w!=null)w.a1(0)
t.uh()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.ds(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.P$=0}for(w=t.CW,w=new B.ds(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hk()}for(w=t.cx,w=new B.ds(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.P$=0}t.bAd()},
gZ8(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPC(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
adr(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTh())return!1
return!0},
ky(){return this.adr(null)},
akp(){var w=this.c
if(w==null)return
w.L(x.q).f.T(D.foa)},
qR(){if(!this.ky())return!1
this.akp()
return!0},
atg(d){var w,v,u,t,s,r=this
if(r.adr(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hF0(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Av(){return this.atg(null)},
J3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$J3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.at3(k),$async$J3)
case 3:j=e
w=4
return B.b(C.b1M(k),$async$J3)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.haF(j,t.c5C())
w=t.gZ8()?5:7
break
case 5:r=t.gPC()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.a8z(r),$async$J3)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bq(s,new C.eFz())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.bq(s,new C.eFA())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.I)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zd(m==null?"":m)!=null)continue
C.fVB(n,s)
p=!0}t.m(new C.eFB(t,s))
l=B.C(s,x.I)
$.heO.n(0,k,l)
if(p||s.length>J.ad(j))t.uh()
case 1:return B.h(u,v)}})
return B.i($async$J3,v)},
c5C(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kO(w)&&w!==q}if(w)p.push(r)
return p},
ctR(d){var w,v=this,u=d.w
if(!C.kO(u)||u==="hati_kiapo_uongozi")return
v.abL(d)
w=A.d.bj(v.d,new C.eH9(d))
u=v.d
if(w>=0){u[w]=d.hQ()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c9(u,0,d.hQ())
v.db=!1},
cnV(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kO(s)&&s!=="hati_kiapo_uongozi"}if(s)u.ctR(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,hU>")
s=B.C(new B.cM(new B.Y(s,new C.eGY(),w.k("Y<1>")),new C.eGZ(),v),v.k("M.E"))
return s},
Pi(d){return this.bUm(d)},
uh(){return this.Pi(null)},
bUm(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cnV()
w=3
return B.b(C.Xf(d==null?t.a.c:d,s),$async$Pi)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.atg(r)?4:5
break
case 4:w=6
return B.b(C.Ow(r),$async$Pi)
case 6:q=r.x
p=A.a.i(q==null?t.gPC():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bj(t.d,new C.eEX())
q=t.d
if(o>=0)q[o]=r.hQ()
else A.d.c9(q,0,r.hQ())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pi,v)},
pM(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.kO(u.w))===!0?A.h8:A.lL
v.at=B.cy(w,new C.eIh(v))},
b25(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agz(u.hQ(),v.f,v.r))
if(w.length>40)A.d.cG(w,0)
A.d.a8(v.ay)},
cHD(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agz(w.e.hQ(),w.f,w.r))
w.m(new C.eJ7(w,v.pop()))
w.pM()},
csW(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agz(w.e.hQ(),w.f,w.r))
w.m(new C.eH7(w,v.pop()))
w.pM()},
oG(){var w,v,u=this
if(u.e==null)return
w=A.d.bj(u.d,new C.eIV(u))
if(w>=0){u.d[w]=u.e.hQ()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
YG(d){var w,v,u,t,s=this.gdB()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
yg(){var w,v,u,t
for(w=this.ch,v=new B.ds(w,w.r,w.e);v.C();){u=v.d
u.U$=$.ax()
u.P$=0}w.a8(0)
for(w=this.CW,v=new B.ds(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hk()}w.a8(0)},
KU(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdB()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d0(new B.cM(new B.Y(w,new C.eIW(),v.k("Y<1>")),new C.eIX(),u),u.k("M.E"))
w=this.ch
v=B.a3(w).k("cx<1>")
v=B.C(new B.cx(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.I)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.ax()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hk()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.I)(v),++r){n=v[r]
if(n.b!==D.d1)continue
p=n.a
m=w.c3(0,p,new C.eIY(n))
s.c3(0,p,new C.eIZ())
p=m.a.a
o=n.r
if(p!==o)m.sb1(0,o)}},
Im(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aV(u.d,new C.eEl(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPC()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hQ())}u.oG()
u.pM()},
akK(d,e){var w,v,u,t,s=this
if(s.ky())return
w=s.YG(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kO(v.w))===!0
if(u){C.ioh(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdB()
if(t!=null)C.ioi(t,w.d+w.f*0.5)}}s.Im()
s.oG()
s.pM()
if(u&&s.c!=null)s.m(new C.eJ8())},
cIL(d,e){var w=this,v=w.gdB()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Im()
w.oG()
w.pM()},
gdB(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqV(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.ime(o)
if(w!=null)return w
v=q.gdB()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.c2M(v)
t=q.c2L(v)
s=B.b0(v.e)
r=v.f
return new C.k1(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hZE(o)},
c2M(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
if(t.b===D.d1)s=t.w>=28||A.o.D(A.o.ar(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.a_},
c2L(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.d1&&t.w<28)return B.b0(t.Q)}return A.aM},
agI(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gZ8()){w.c.L(x.q).f.T(D.fmL)
return}w.abL(d)
w.b3o(C.bFd(d))
return}if(C.clX(v)){w.abL(d)
w.b3o(d)
return}w.m(new C.eGg(w,d))},
atP(){var w,v,u,t,s,r,q=this
q.a3t(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kO(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eEj(q))
if(r&&q.c!=null){u.toString
q.Kq(u,s)}return}q.uh()
q.m(new C.eEk(q))},
b3n(d){this.abL(d)
this.a0X(d,!0)},
abL(d){if(!C.kO(d.w))return
C.fVB(d,this.d)},
a0X(d,e){return this.cjN(d,e)},
b3o(d){return this.a0X(d,!1)},
cjN(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a0X=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bFd(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPC():r)
t.dy.W(0,q.toLowerCase())
C.a8w(t.a.c,q)}r=s}else r=d
w=C.clX(r.w)?3:4
break
case 3:w=5
return B.b(t.abM(r),$async$a0X)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aV(t.d,new C.eGD(l))
o=l.a.hQ()
n=C.kO(o.w)&&C.ipx(o)
t.m(new C.eGE(t,o,p))
if(n){m=A.d.bj(t.d,new C.eGF(o))
if(m>=0){t.d[m]=o.hQ()
t.uh()}}if(!t.adr(l.a))t.ZV()
r=!1
if(t.c!=null)if(!t.adr(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.atg(r)&&C.fRv(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.T(D.fnl)
case 1:return B.h(u,v)}})
return B.i($async$a0X,v)},
abM(d){return this.bSm(d)},
bSm(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lC(r.c,A.Av),$async$abM)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.lg(!1,r,s.c,s.d,null,A.Av,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abM,v)},
ou(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$ou=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.clX(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.clm(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ou,v)},
agp(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eGf(),s,null,!0,!0,x.H),$async$agp)
case 3:if(t.c==null){w=1
break}t.atP()
case 1:return B.h(u,v)}})
return B.i($async$agp,v)},
ago(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ago=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eGc(),s,null,!0,!0,x.H),$async$ago)
case 3:if(t.c==null){w=1
break}t.m(new C.eGd())
t.atP()
case 1:return B.h(u,v)}})
return B.i($async$ago,v)},
ZV(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ZV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$ZV)
case 3:r=e
if(B.k6(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aC("Bool","ngmy_marriage_hint_seen",!0),$async$ZV)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.flk)
case 1:return B.h(u,v)}})
return B.i($async$ZV,v)},
Kq(d,e){return this.cug(d,e)},
cug(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Kq=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ahS(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kq)
case 9:w=4
break
case 6:w=10
return B.b(C.ahT(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kq)
case 10:w=4
break
case 7:w=11
return B.b(C.ahU(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kq)
case 11:w=4
break
case 8:w=12
return B.b(C.ahV(s,t.gF1(),t.gF0(),!0,e,t.d),$async$Kq)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Kq,v)},
Zv(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Zv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.gZ8()){t.c.L(x.q).f.T(D.flx)
w=1
break}s=t.gPC()
w=t.a.d?3:4
break
case 3:r=t.c
r.toString
w=5
return B.b(B.Hz(r,"Search states\u2026",s,A.kg,"Hati ya Kiapo: which state?"),$async$Zv)
case 5:q=e
if(q==null||A.a.i(q).length===0||t.c==null){w=1
break}s=A.a.i(q)
case 4:r=t.a
p=r.d
o=!0
if(!p)if(!r.w){if(!r.x)if(r.r){r=A.a.i(r.z)
r=r.length!==0&&r.toLowerCase()===s.toLowerCase()}else r=!1
else r=o
o=r}r=t.c
r.toString
C.a3d(p,o,r,p,new C.eFv(t),new C.eFw(t),s)
case 1:return B.h(u,v)}})
return B.i($async$Zv,v)},
agJ(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(A.dU,null,new C.eGm(u),s,!0,!0,!1,A.lW,!1,!1,x.N),$async$agJ)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ahV(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ahS(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ahT(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ahU(s,u.gF1(),u.gF0(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.Zv()
return B.h(null,v)}})
return B.i($async$agJ,v)},
ciT(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b25()
w=C.cE()
v=C.Cm(t,t,t,t,D.Eh,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eGn(u,v))},
ab9(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ab9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qR()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itY(s),$async$ab9)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cC(q.r,new C.eEn())
t.dc(new C.eEo(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$ab9,v)},
aiK(d,e,f,g){var w=null,v=g?A.dq:A.ch,u=B.K(g?A.aT:A.cC,A.r,1)
return B.ha(B.az(w,B.p(w,B.X(d,g?A.c:A.aM,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a7),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a0W(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a0W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qR()){w=1
break}s=t.ke()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGy(),q),q.k("M.E"))}o=s!=null&&s.b===D.lV?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.T(D.fnx)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eGz(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a0W)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a0W,v)},
ah_(){return this.cjM()},
cjM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ah_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qR()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itK(s,t.f+1,o),$async$ah_)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jC(s,B.U(s).c)
p.a=A.d.bj(o.r,new C.eGB(q))
t.dc(new C.eGC(p,t,o,q,r))
t.c.L(x.q).f.T(D.fnW)
case 1:return B.h(u,v)}})
return B.i($async$ah_,v)},
ah6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ah6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qR()||!t.Av()){w=1
break}s=t.gdB()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eGT(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.T(D.fl4)
w=1
break}o=new B.N(p,new C.eGU(),B.U(p).k("N<1,G>")).f1(0,new C.eGV())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.I)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b6,A.aP),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bU(A.L,null,new C.eGW(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ah6)
case 3:for(r=new B.ds(r,r.r,r.e);r.C();){q=r.d
q.U$=$.ax()
q.P$=0}if(t.c!=null)t.m(new C.eGX())
case 1:return B.h(u,v)}})
return B.i($async$ah6,v)},
agM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qR()){w=1
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
return B.b(C.hHp(s,new C.Fj(r,q,p,o==null?"":o)),$async$agM)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.dc(new C.eGo(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aig(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agM,v)},
abF(){return this.bRE()},
bRE(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qR()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.itX(s,t.f+1,l),$async$abF)
case 3:r=e
q=$.heo
$.heo=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.dc(new C.eEE())
t.c.L(x.q).f.T(D.fkW)
w=1
break}if(!q){s=r.CW
s=C.hFU(l,s==null?"":s,!1)}else s=!1
if(s){t.dc(new C.eEF(t,l,r))
t.c.L(x.q).f.T(D.foq)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jC(s,B.U(s).c)
s=l.r
m.a=A.d.bj(s,new C.eEG(p))
o=s.length
t.dc(new C.eEH(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abF,v)},
aT7(d,e){if(e){this.ahz()
return}this.ciT(d,!1)},
bN8(){return this.aT7(null,!1)},
ahz(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.c3,null,new C.eH2(t),r,!0,!0,!0,A.pT,!1,!1,x.N),$async$ahz)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eH3(t,C.imd(s).oM()))
case 1:return B.h(u,v)}})
return B.i($async$ahz,v)},
dc(d){var w=this
if(w.qR())return
w.Im()
w.b25()
w.m(d)
w.KU()
w.oG()
w.pM()},
a9F(){this.dc(new C.eDh(this,D.nc))},
aUC(){var w=this.gdB()
if(w==null)return
this.dc(new C.eEC(this,w))},
aTI(){var w=this.e
if(w==null||w.r.length<=1)return
this.dc(new C.eEA(this))},
b6j(d,e){if(this.e==null||d===e)return
this.dc(new C.eHb(this,d,e))},
OP(d){return this.bP9(d)},
bP9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OP=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:if(!t.a.d){s=t.c
if(s!=null)s.L(x.q).f.T(D.fns)
w=1
break}s=d.x
r=A.a.i(s==null?t.gPC():s)
w=5
return B.b(C.a8y(r),$async$OP)
case 5:q=f
t.dy.W(0,r.toLowerCase())
C.a8w(t.a.c,r)
s=t.c
if(s!=null){s=s.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(q?"Hati ya Kiapo cha Uongozi of "+r+' is deleted for everyone. Tap "Create Hati ya Kiapo" to make a new one.':"Deleted on this phone. It will be deleted for everyone as soon as the app is online.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}case 4:s=d.a
C.at5(s)
w=6
return B.b(C.b3I(t.a.c,s),$async$OP)
case 6:if(t.c==null){w=1
break}t.m(new C.eEw(t,d))
w=7
return B.b(t.uh(),$async$OP)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OP,v)},
cud(d,e){var w=this
if(d.z){w.akp()
return}w.m(new C.eHa(w,d,e))
w.pM()},
ke(){var w,v,u,t,s,r=this.gdB()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
XF(d){return this.ch.c3(0,d.a,new C.eEm(d))},
avI(d){return this.CW.c3(0,d.a,new C.eEY())},
a3t(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.YG(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aU.ao$.d.c
if(u!=null)u.js()},
b9R(){return this.a3t(!0)},
a3p(d){var w,v,u=this
if(u.qR())return
if(!u.Av())return
w=u.YG(d)
if(w==null||w.b!==D.d1)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.XF(w).sb1(0,"")}u.m(new C.eIT(u,d))
$.aU.x1$.push(new C.eIU(u,d,w))},
bap(d){var w=this
if(d.b===D.d1&&!w.ky()&&w.Av()){w.a3p(d.a)
return}w.aCc(d.a)},
aCc(d){var w,v,u,t,s,r=this
if(r.ky())return
w=r.r
if(w!=null&&w!==d){v=r.YG(w)
if(v!=null&&v.b===D.d1){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eIi(r,s,d))
if(s||d==null){t=$.aU.ao$.d.c
if(t!=null)t.js()}},
aPc(){this.dc(new C.eDi(this))},
pt(d){return this.bE7(d)},
bE7(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ou(),$async$pt)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDf(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pt,v)},
WH(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A2.Hs(78,1920),$async$WH)
case 3:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eD5(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WH,v)},
WB(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdB()==null){w=1
break}w=3
return B.b(U.Dy(t.a.c),$async$WB)
case 3:s=e
if(t.c==null){w=1
break}r=J.a7(s)
if(r.gau(s)){t.c.L(x.q).f.T(D.fp0)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bU(null,null,new C.eD2(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$WB)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdB()==null){w=1
break}t.dc(new C.eD3(t,q))
case 1:return B.h(u,v)}})
return B.i($async$WB,v)},
auG(){var w=this,v=w.r
if(v==null||w.gdB()==null)return
if(A.d.aV(w.gdB().z,new C.eEy(v))){w.c.L(x.q).f.T(D.fo_)
return}if(w.w===v)w.a3t(!0)
w.dc(new C.eEz(w,v))},
bLn(){var w=this.ke(),v=w==null
if((v?null:w.b)===D.fi)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.d1)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aPV(d,e){var w=this,v=w.ke(),u=w.gdB(),t=w.e
if(t==null)return
w.dc(new C.eDK(w,v,d,e,t,u))},
bFI(d){return this.aPV(d,null)},
a9V(d){return this.bFQ(d)},
bFQ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9V=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.aaK.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.ou(),$async$a9V)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.ke()
if(s!=null){r=s.b
if(r===D.d1)t.bFI(s.w>=28||s.x.gdR(0)>=A.H.gdR(0)?d.d:d.e)
else if(r===D.fi){r=d.c
t.aPV(r.j(0.88),r)}w=1
break}t.dc(new C.eDP(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9V,v)},
a9U(d){return this.bFO(d)},
bFO(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.ke()
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
return B.b(t.ou(),$async$a9U)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDN(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9U,v)},
bFy(d){var w=this.gdB()
if(w==null)return
this.dc(new C.eDJ(this,w,d))},
a11(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a11=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.itT(r),$async$a11)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oG()
t.m(new C.eGN(t,s))
w=4
return B.b(t.uh(),$async$a11)
case 4:if(t.c!=null)t.agI(s)
case 1:return B.h(u,v)}})
return B.i($async$a11,v)},
abw(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3t(!0)
t.oG()
s=t.c
s.toString
w=3
return B.b(C.Si(s,q),$async$abw)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abw,v)},
Ea(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Ea=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oG()
t=4
w=7
return B.b(C.aSk(m),$async$Ea)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aRM(o,q,m.b),$async$Ea)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.ac(l)
o=r.c
if(o==null){w=1
break}o.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ea,v)},
FS(d,e){return this.cH0(d,e)},
cH0(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FS=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qR()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3t(!0)
t.oG()
s=h.a=t.e.hQ()}else{r=A.d.bj(t.d,new C.eJ1(d))
s=h.a=r>=0?t.d[r].hQ():d.hQ()}s=s.w
q=s==null
p=C.inc(q?"":s)
o=C.hEM(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eJ2(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.cA5(n.length,o,s),$async$FS)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.in6(h.a)
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
return B.b(t.cA4(n,o),$async$FS)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fc(t.d,new C.eJ3(s))
s=h.a.b
w=11
return B.b(t.cA2(k.b,s),$async$FS)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hQ()
case 5:j=C.inb(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.T(D.fpc)
w=1
break}w=12
return B.b(t.cA3(j.a,s,o,j.c),$async$FS)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eJ4(h,t,i))
t.pM()
case 1:return B.h(u,v)}})
return B.i($async$FS,v)},
cA5(d,e,f){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIy(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cA4(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIx(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cA2(d,e){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIr(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cA3(d,e,f,g){var w=this.c
w.toString
return B.bU(A.L,null,new C.eIt(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
acZ(){var w=null
return B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ad_(d,e,f,g){var w,v,u=null,t=B.l(16),s=B.ap(d,A.c3,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ab(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ay,A.aD,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.ev,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fAj,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.m(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.h,0,A.p),1)],v),A.E,u,A.e,A.h,0,u,u)},
aXY(d,e){var w=null,v=e.j(0.14),u=B.l(12),t=B.K(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Wf,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
aY0(d,e,f,g,h,i,j){var w=null,v=B.l(16),u=B.l(16),t=g?new B.a8(A.ay,A.aD,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.K(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.l(13),o=x.p
return B.aG(!1,A.a3,!0,w,B.aM(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bb,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.ni,w,w,w),A.cQ,B.d(h,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.h,0,A.p),1),B.X(A.zl,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eFr(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
c1G(d,e,f,g,h,i){return this.aY0(d,e,f,!1,g,h,i)},
ax1(d,e){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.K(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dk,w,w,w),A.bE,B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a1v,w,w,w)},
aY_(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.co,w,new B.b9(B.l(14),A.a1),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.o4,w,w,w),w,new C.eFq(d,f),v)},
aXZ(d,e){return this.aY_(d,e,null)},
KL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pz(l,s.c,s.d),$async$KL)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aM("=",l.length)+"\n\n"
q=new B.fg(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eJ(l,new C.eIj());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.abg(l.charCodeAt(0)==0?l:l,r.b),$async$KL)
case 4:l=t.a
w=5
return B.b(B.py(l.c,l.d),$async$KL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KL,v)},
II(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$II=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pz(q,s.c,s.d),$async$II)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.abg(A.V.av(r.aj(),null),r.b+".json"),$async$II)
case 4:q=t.a
w=5
return B.b(B.py(q.c,q.d),$async$II)
case 5:case 1:return B.h(u,v)}})
return B.i($async$II,v)},
b9A(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oG()
u.uh()
w=u.c
w.toString
v=B.ed(new C.eIS(u,t),!1,null,x.z)
B.a5(w,!1).ce(v)},
HW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ou(),$async$HW)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fVO(),$async$HW)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.iq8(s.a)
q=t.c
q.toString
w=5
return B.b(B.bU(A.av,null,new C.eDa(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HW)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.dc(new C.eDb(t,s))
w=1
break}if(p==="split")t.dc(new C.eDc(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HW,v)},
O8(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$O8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}w=3
return B.b(t.ou(),$async$O8)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aSj(s,null,null),$async$O8)
case 4:r=e
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eDg(t,r))
case 1:return B.h(u,v)}})
return B.i($async$O8,v)},
b65(d){var w=this.e
if(w==null||!C.kO(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aRh(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aSj(s,t==null?null:B.b0(t),u)},
a9D(d){return this.bDZ(d)},
bDZ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9D=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.Av()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fps)
w=1
break}w=3
return B.b(t.aRh(),$async$a9D)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eD7(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9D,v)},
aii(d){return this.csZ(d)},
csZ(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aii=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.Av()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.foz)
w=1
break}w=3
return B.b(t.aRh(),$async$aii)
case 3:r=f
if(r==null||t.gdB()==null){w=1
break}t.dc(new C.eH8(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$aii,v)},
cfx(){var w,v,u=this
if(u.ky())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bC(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cG1()}},
cG1(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.dc(new C.eJ_(this,r,(A.o.aJ(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c20(){var w,v,u,t,s,r=this.gdB()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.dc(new C.eFu(this,r,u.d))},
c6V(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kO(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fSg(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.lu&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
c6W(d){var w
if(this.ky())return!1
w=this.e
if((w==null?null:C.kO(w.w))!==!0)return!0
if(!this.Av())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fSg(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.lu&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
Og(d){return this.bGf(d)},
bGf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Og=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qR()){w=1
break}if(!t.Av()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fnm)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arC(p),$async$Og)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.T(D.fo1)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.Ow(r)
w=1
break}t.m(new C.eDT(t,d,o))
t.oG()
$.aU.x1$.push(new C.eDU(t))
case 1:return B.h(u,v)}})
return B.i($async$Og,v)},
WF(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ou(),$async$WF)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bFV(),$async$WF)
case 4:s=e
if(s==null||t.gdB()==null){w=1
break}t.dc(new C.eD4(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WF,v)},
P3(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.ou(),$async$P3)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.ke()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fVF(r),$async$P3)
case 4:q=e
if(q==null){w=1
break}t.dc(new C.eEW(s,q))
case 1:return B.h(u,v)}})
return B.i($async$P3,v)},
jj(d){this.dc(new C.eDd(this,d))},
qG(d){return this.bFr(d)},
bFr(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qR()){w=1
break}m=!D.aTP.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.ou(),$async$qG)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HW()
w=1
break A
case"sign_paper":t.O8()
w=1
break A
case"hd_photo":t.WF()
w=1
break A
case"sharpen":t.P3()
w=1
break A
case"print":t.Ea()
w=1
break A
case"rotate":s=t.ke()
if(s!=null)t.dc(new C.eDm(s))
w=1
break A
case"text_box":t.aPc()
w=1
break A
case"picture":t.WH()
w=1
break A
case"present":t.b9A()
w=1
break A
case"new_slide":t.a9F()
w=1
break A
case"export_json":t.II()
w=1
break A
case"outline_share":t.KL()
w=1
break A
case"flashcard_tool":t.vU(D.Jy)
w=1
break A
case"quiz_tool":t.vU(D.Jz)
w=1
break A
case"worksheet_tool":t.vU(D.JA)
w=1
break A
case"duplicate_el":s=t.ke()
if(s==null){w=1
break A}t.dc(new C.eDn(t,s))
w=1
break A
case"delete_el":t.auG()
w=1
break A
case"bring_fwd":s=t.ke()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eDo(t,s))
w=1
break A
case"send_back":s=t.ke()
if(s==null||t.gdB()==null){w=1
break A}t.dc(new C.eDz(t,s))
w=1
break A
case"align_left":s=t.ke()
if(s!=null)t.dc(new C.eDC(s))
w=1
break A
case"align_center":s=t.ke()
if(s!=null)t.dc(new C.eDD(s))
w=1
break A
case"align_right":s=t.ke()
if(s!=null)t.dc(new C.eDE(s))
w=1
break A
case"grayscale":case"brighten":t.P3()
w=1
break A
case"flip_h":s=t.ke()
if(s!=null)t.dc(new C.eDF(s))
w=1
break A
case"flip_v":s=t.ke()
if(s!=null)t.dc(new C.eDG(s))
w=1
break A
case"rectangle":t.pt(D.bl)
w=1
break A
case"circle":t.pt(D.f1)
w=1
break A
case"triangle":t.pt(D.kj)
w=1
break A
case"arrow":t.pt(D.Ej)
w=1
break A
case"line":case"divider":t.pt(D.fP)
w=1
break A
case"word_count":r=t.gdB()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eJ(q,new C.eDH()),o=0;p.C();){n=A.a.fw(A.a.i(q.gR(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eDI(),B.U(n).k("Y<1>")).gJ(0)}t.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cE()
t.jj(C.j8(A.K,!1,t.gqV().d.l(),A.aH,40,A.bq,A.u,0.18,q,"Presentation Title",0,D.nd,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cE()
t.jj(C.j8(A.K,!1,t.gqV().e.l(),A.aH,22,A.bq,A.a8,0.12,q,"Subtitle goes here",0,D.dr,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jj(C.j8(A.bn,!0,4279310375,A.aH,20,A.bq,A.a8,0.5,C.cE(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vt,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jj(C.j8(A.bn,!1,4279310375,A.aH,20,A.bq,A.a8,0.5,C.cE(),"1. First item\n2. Second item\n3. Third item",0,D.vs,0.8,0.1,0.22))
w=1
break A
case"quote":t.jj(C.j8(A.K,!1,4279310375,A.aH,24,A.cI,A.a8,0.25,C.cE(),'"Insert meaningful quote here."',0,D.dr,0.8,0.1,0.3))
w=1
break A
case"citation":t.jj(C.j8(A.bn,!1,4284773515,A.aH,14,A.bq,A.a8,0.1,C.cE(),"Author, Title (Year). Publisher.",0,D.vt,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jj(C.j8(A.e3,!1,4279310375,A.aH,14,A.bq,A.a8,0.08,C.cE(),C.bFX(),0,D.dr,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jj(C.j8(A.e3,!1,4279310375,A.aH,13,A.bq,A.a8,0.06,C.cE(),"Page "+(t.f+1),0,D.dr,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.dc(new C.eDp(t))
w=1
break A
case"footer_bar":t.dc(new C.eDq(t))
w=1
break A
case"highlight":t.dc(new C.eDr(t))
w=1
break A
case"redact":t.dc(new C.eDs(t))
w=1
break A
case"callout":t.dc(new C.eDt(t))
w=1
break A
case"checkboxes":t.jj(C.j8(A.bn,!1,4279310375,A.aH,20,A.bq,A.a8,0.45,C.cE(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dr,0.8,0.1,0.2))
w=1
break A
case"table":t.jj(C.j8(A.bn,!1,4279310375,A.aH,16,A.bq,A.a8,0.55,C.cE(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dr,0.8,0.1,0.18))
w=1
break A
case"memo":t.dc(new C.eDu(t))
w=1
break A
case"letter":t.jj(C.j8(A.bn,!1,4279179050,A.aH,17,A.bq,A.a8,0.82,C.cE(),C.bFX()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dr,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jj(C.j8(A.bn,!1,4279310375,A.aH,22,A.bq,A.O,0.76,C.cE(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vt,0.8,0.1,0.12))
w=1
break A
case"toc":t.jj(C.j8(A.bn,!1,4279310375,A.aH,18,A.bq,A.a8,0.76,C.cE(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dr,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jj(C.j8(A.bn,!1,4279310375,A.aH,16,A.bq,A.a8,0.08,C.cE(),"Signature: _________________________",0,D.dr,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jj(C.j8(A.bn,!1,4279310375,A.aH,16,A.bq,A.a8,0.08,C.cE(),"Initials: ______",0,D.dr,0.3,0.65,0.78))
w=1
break A
case"approved":t.jj(C.j8(A.K,!1,4278556265,A.aH,28,A.bq,A.u,0.12,C.cE(),"APPROVED",0,D.nd,0.32,0.62,0.08))
w=1
break A
case"draft":t.jj(C.j8(A.K,!1,4292617766,A.aH,28,A.bq,A.u,0.12,C.cE(),"DRAFT",0,D.dr,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jj(C.j8(A.K,!1,871318596,A.aH,36,A.bq,A.u,0.12,C.cE(),"CONFIDENTIAL",0,D.dr,0.8,0.1,0.42))
w=1
break A
case"sticky":t.dc(new C.eDv(t))
w=1
break A
case"progress":t.dc(new C.eDw(t))
w=1
break A
case"stars":t.jj(C.j8(A.K,!1,4279310375,A.aH,36,A.bq,A.a8,0.12,C.cE(),"\u2605\u2605\u2605\u2605\u2606",0,D.r5,0.8,0.1,0.4))
w=1
break A
case"equation":t.jj(C.j8(A.K,!1,4279310375,A.aH,32,A.bq,A.O,0.14,C.cE(),"y = mx + b",0,D.dr,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jj(C.j8(A.K,!1,4279310375,A.aH,18,A.bq,A.a8,0.2,C.cE(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vs,0.8,0.1,0.35))
w=1
break A
case"two_col":t.dc(new C.eDx(t))
w=1
break A
case"compare":t.dc(new C.eDy(t))
w=1
break A
case"link_text":t.jj(C.j8(A.bn,!1,4280640491,A.nh,16,A.bq,A.a8,0.1,C.cE(),"https://example.com",0,D.dr,0.8,0.1,0.5))
w=1
break A
case"phone":t.jj(C.j8(A.bn,!1,4279310375,A.aH,18,A.bq,A.a8,0.1,C.cE(),"(555) 123-4567",0,D.dr,0.8,0.1,0.5))
w=1
break A
case"email":t.jj(C.j8(A.bn,!1,4280640491,A.aH,18,A.bq,A.a8,0.1,C.cE(),"name@email.com",0,D.dr,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.dc(new C.eDA(t))
w=1
break A
case"cover_page":r=t.gdB()
if(r==null){w=1
break A}t.dc(new C.eDB(t,r))
w=1
break A
case"invoice":t.jj(C.j8(A.bn,!1,4279179050,A.aH,16,A.bq,A.a8,0.84,C.cE(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dr,0.8,0.1,0.08))
w=1
break A
case"resume":t.jj(C.j8(A.bn,!1,4279179050,A.aH,17,A.bq,A.a8,0.84,C.cE(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dr,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jj(C.j8(A.bn,!1,4279310375,A.aH,16,A.bq,A.a8,0.88,C.cE(),"MEETING MINUTES\nDate: "+C.bFX()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dr,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jj(C.j8(A.bn,!1,4279310375,A.aH,17,A.bq,A.a8,0.88,C.cE(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dr,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jj(C.j8(A.bn,!1,4279310375,A.aH,15,A.bq,A.a8,0.8,C.cE(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dr,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qG,v)},
czx(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.ffu.q(0,this.z)},
czw(d){if(this.ke()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bbj(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cv,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.l(12)
u=e?f:A.bx
u=B.K(u,A.r,o&&e?2:1)
t=C.ipY(d)
s=o?12:18
r=o?A.H:A.cY
if(o)if(e)q=f
else q=g?A.aa:A.an
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Qb,A.f,p,p,D.FE,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fn,B.az(p,new B.an(A.a0,p,A.ac,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bRV(d){var w,v=null,u=this.ke()
if(u==null)return A.bM
w=B.a([A.af,B.d("Anim:",v,v,v,v,v,v,B.m(v,v,d?A.aE:A.an,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bm],x.p)
A.d.u(w,new B.N(D.SK,new C.eEV(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.h,0,v,v)},
vU(d){return this.bE6(d)},
bE6(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aTJ.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.ou(),$async$vU)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDe(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.fdP
w=h.e
if(w==null)return h.bI0()
v=h.gdB()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aF(u,A.c_,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aF(u,A.eT,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c3:D.bku
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTh()}else j=!1
if(j)k.push(new C.a94(h.a.c,!1,h.e.gbdy(),h.gcfu(),g))
else if(s&&h.e!=null&&!h.ky()&&C.clX(h.e.w)){j=h.a
k.push(new C.a94(j.c,j.d,g,h.gcgD(),g))}if(s)k.push(h.bRQ(w,t,r))
if(s&&h.ky()){w=t?A.fZ:A.lj
j=B.l(14)
i=B.K(A.bo.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.c__,A.af,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.m(g,g,t?A.c:A.fZ,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.h,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yO,A.hN,g,g,g))}w=!n
if(w&&!h.ky())k.push(h.c7S(t,r))
if(w&&h.ky())k.push(h.cH1(t))
if(r&&h.ke()!=null&&w&&!h.ky())k.push(h.c7N(t))
j=B.a([],l)
if(q&&w)j.push(new B.a4(132,g,h.b9_(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a4(g,72,h.b9_(t,!1),g))
i.push(B.E(new B.bK(A.aZ,g,g,h.bJm(v,t,!s||p),g),1))
if(h.czx(r)&&u&&s&&!h.ky())i.push(h.cfg(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.h,0,A.p),1))
if(q&&!h.ky()&&h.czw(!1))j.push(new B.a4(240,g,h.bUL(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.h,0,g,g),1))
if(u&&s)k.push(new B.a4(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.h,0,A.p)],l)
if(o&&r)w.push(h.c7O(t))
return B.c5(g,m,B.bm(!1,new B.an(A.a0,g,A.ac,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bI0(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
if(w){p=r.fy
p===$&&B.c()
v=p.r
if(!(v!=null&&v.a!=null))p.f2(0,!0)}else{p=r.fy
p===$&&B.c()
v=p.r
if(v!=null&&v.a!=null)p.u4(0,!1)}p=w?A.c3:A.c
v=r.c
v.toString
v=B.aF(v,A.dM,x.w).w
u=r.a.e
t=x.p
s=B.a([r.ceo(A.bo,A.qO,new C.eDX(r),r.gciQ(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES"),A.by,B.A(B.a([B.E(r.asm(A.bo,A.i0,"Blank Presentation",new C.eDY(r)),1),A.as,B.E(r.asm(A.b3,A.v8,"Class Template",new C.eDZ(r)),1)],t),A.l,q,A.e,A.h,0,q,q)],t)
if(r.a.d&&r.gZ8()&&!A.d.aV(r.d,new C.eE_()))A.d.u(s,B.a([A.T,new B.mq(r.asm(A.c2,A.iU,"Create Hati ya Kiapo",r.gc4o()),D.hvb)],t))
s.push(A.ng)
s.push(B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.m(q,q,w?A.aE:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q))
s.push(A.ae)
t=r.d
if(t.length===0)s.push(r.bEU(w))
else{t=new B.i7(t,B.U(t).k("i7<1>"))
A.d.u(s,t.gdP(t).dN(0,new C.eE0(r,w),x.l))}return B.c5(q,p,B.bm(!1,B.cm(s,q,q,new B.Q(18,v.r.b+12,18,u),q,q,A.ah,!1),!0,!1,A.ag,!0,!1),q,!1,!1,q,q)},
bPX(){this.m(new C.eEB(this))
var w=this.c
w.toString
if(B.aF(w,A.c_,x.w).w.a.a<900){w=$.aU.ao$.d.c
if(w!=null)w.js()}},
ah0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.ke()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bU(A.L,null,new C.eGM(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$ah0)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ah0,v)},
Bw(d,e){return this.czT(d,e)},
czT(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$Bw=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hO(D.Zv,!0,"Dismiss",j,new C.eIk(),new C.eIl(r,d,e),A.iO,!0,x.N),$async$Bw)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.akp()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTh()){r.akp()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aSk(d),$async$Bw)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aRM(j,q,d.b),$async$Bw)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.ac(i)
j=r.c
if(j==null){w=1
break}j.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Could not create PDF: "+B.w(p),null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.FS(d,!1),$async$Bw)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hO(D.Zv,!0,"Dismiss",j,new C.eIm(),new C.eIn(d),A.a3,!0,x.y),$async$Bw)
case 20:if(g===!0)r.OP(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.ai2("Rename presentation",d.b),$async$Bw)
case 24:l=g
if(l!=null)r.cud(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cE())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eIo(r,k))
r.pM()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bw,v)},
b41(d,e){var w=null
return B.bO(!1,D.h_z,w,w,!0,w,w,w,e,w,B.ft(w,w,w,w,w,w,w,w,w,w,w,A.bo,w,w,w,A.az,w,A.lN,w,w,w,w,w,A.kB,w,w))},
bEU(d){var w,v=null
if(!d)return B.p(v,D.byg,A.f,v,v,B.a7s(A.aG,22),v,v,v,v,A.eA,v,v,1/0)
w=this.fy
w===$&&B.c()
return B.c4(w,new C.eDj(this,!0),v)},
bO2(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eEp(),x.dv).bY(0,new C.eEq()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.ama,this.aPv(v,e,new C.eEr(),f),null)},
aPv(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e0)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.u(q,B.a([B.X(p,g?A.aa:A.bw,n,n,n,10),A.rc],m))}p=d[v]
o=g?A.c.j(0.85):A.aM
q.push(B.d(p,n,1,n,n,n,n,new B.F(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.p(n,new B.c7(A.aL,A.e,A.N,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bF(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n6,n,n,n))
A.d.u(l,u)}return new B.dF(A.dW,A.a5,A.f,B.A(l,A.l,n,A.e,A.N,0,n,n),n)},
bES(d,e,f){return this.aPv(d,e,null,f)},
bO4(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dvZ
else if(v==="hati_kuhoweya")w=D.dg8
else{if(v==="hati_kiapo_uongozi")v=D.d1y
else v=C.kO(v)?D.d9x:A.IM
w=v}v=this.fy
v===$&&B.c()
return B.c4(v,new C.eEu(this,f,e,d,w),null)},
c7O(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.ke()
if(i==null||i.b!==D.d1)return A.bM
w=k.XF(i)
v=k.avI(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.Cx,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.m(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b1,B.bO(!1,D.fVW,j,j,!0,j,j,j,new C.eFV(k),j,j)],t),A.l,j,A.e,A.h,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.av:A.c
q=B.l(18)
p=B.K(A.bo.j(0.45),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hm,new B.bM(new B.o(r,j,p,q,o,j,A.n),A.bi,new B.D(A.eV,B.aN(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bo,j,j,j,j,2,D.c5j,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xw,j,j,j,j,j,j,!1,"\u2022",j,new C.eFW(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ad,j,j,j,j,j,j,j,j,j,j,j,B.m(j,j,d?A.c:A.a_,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a6,A.AR,A.ao,j,A.VD,j,j),j),j),j),1)
q=B.l(16)
p=d?A.bs:A.c
o=B.K(d?A.aM:A.bk,A.r,1)
n=B.E(B.c9(B.A(B.a([k.uL(G.Pb,j,new C.eFX(k,i),d),k.uL(G.a2D,j,new C.eFY(k,i),d),k.uL(I.aqA,j,new C.eFZ(k,i),d),k.uL(I.a3r,j,new C.eG_(k,i),d),k.uL(k.bEQ(i.as),j,new C.eG0(k,i),d),k.uL(D.arG,j,new C.eG1(k,i),d),k.uL(D.arF,j,new C.eG2(k,i),d)],t),A.l,j,A.e,A.h,0,j,j),A.t,j,A.y,j,j,j,j,A.aL),1)
m=A.j.M(i.w)
return B.bR(0,B.aG(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.amj,B.p(j,B.A(B.a([n,A.af,B.d(""+m+" pt",j,j,j,j,j,j,B.m(j,j,d?A.aE:A.an,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.de],t),A.l,j,A.e,A.h,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lP,j,j,j),j)],t),A.l,j,A.e,A.h,0,A.p),A.f,u,0,j,j,j,j,j,A.ai),0,0,0)},
c7N(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.ke()
if(m==null)return A.bM
w=m.b
v=w===D.d1
u=B.l(18)
t=x.O
t=d?B.a([A.bs,A.a_],t):B.a([A.c,A.aS],t)
s=B.K(d?A.aM:A.bk,A.r,1)
r=B.a([new B.ab(0,A.G,A.w.j(0.12),A.cy,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7B(A.j9,"Edit",new C.eFG(o,m),d,!0))
if(w===D.lV)p.push(o.b7B(A.I_,"Shape & ring",new C.eFH(o),d,!0))
p.push(o.uL(A.Dp,"Format",new C.eFI(o),d))
if(v)A.d.u(p,B.a([o.uL(G.Pb,n,new C.eFJ(o,m),d),o.uL(D.arG,n,new C.eFK(o,m),d),o.uL(D.arF,n,new C.eFL(o,m),d)],q))
p.push(A.b1)
p.push(o.cxK(A.ek,n,o.gaTG(),d,!0))
p.push(o.uL(A.hc,"Done",new C.eFM(o),d))
return B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a5,A.a9,A.x,t,n,n),A.n),n,n,n,A.Cu,A.lP,n,n,n)},
bEQ(d){switch(d.a){case 2:return D.a3o
case 1:case 5:return D.a3q
default:return D.a3p}},
c8I(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e3
default:return A.bn}},
aCa(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aA
else if(h)w=A.c
else{v=g?A.aa:A.aM
w=v}v=B.l(12)
u=B.l(12)
t=h?N.Ih:n
if(h)s=n
else s=g?A.c.j(0.06):A.ch
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.u(o,B.a([A.e0,B.d(e,n,n,n,n,n,n,B.m(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.pu,B.aG(!1,A.a3,!0,n,B.aM(!1,v,!1,B.eB(new B.D(new B.Q(q,8,q,8),B.A(o,A.l,n,A.e,A.N,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai),n)},
uL(d,e,f,g){return this.aCa(d,e,f,g,!1,!1)},
b7B(d,e,f,g,h){return this.aCa(d,e,f,g,h,!1)},
cxK(d,e,f,g,h){return this.aCa(d,e,f,g,!1,h)},
bRQ(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.l(20),m=x.O
m=e?B.a([A.bs,A.a_],m):B.a([A.c,A.oj],m)
w=B.K(e?A.aM:A.ph,A.r,1.2)
v=B.a([new B.ab(0,A.G,A.bo.j(e?0.18:0.1),A.cy,18)],x.V)
u=p.a3U(A.eL,"Back",p.gbL7(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.m(o,o,e?A.c:A.a_,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.de,B.E(B.A(B.a([new B.di(1,A.cm,t,o),A.af,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.m(o,o,e?A.bV:A.an,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.uA,o,A.e,A.h,0,A.d3,o),1)],q)
if(!p.ky()){u=p.a3U(A.pD,"Undo",p.ax.length===0?o:p.gcHC(),e)
A.d.u(r,B.a([u,p.a3U(D.bTm,"Redo",p.ay.length===0?o:p.gcsV(),e)],q))}r.push(p.a3U(A.zj,"PDF",new C.eEO(p),e))
r.push(p.a3U(A.hP,"Download as video",new C.eEP(p),e))
if(!p.ky())r.push(B.Cz(o,o,B.X(A.oH,e?A.aa:A.bw,o,o,o,o),new C.eEQ(p),A.J,new C.eER(p),A.ag,"More",x.N))
r.push(A.de)
r.push(B.aG(!1,A.a3,!0,o,B.aM(!1,B.l(14),!0,B.eB(D.ewL,o,new B.o(o,o,o,B.l(14),o,N.Ih,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaD_(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.ai))
return B.p(o,B.A(r,A.l,o,A.e,A.h,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ay,A.aD,A.x,m,o,o),A.n),o,o,o,D.bDg,D.bIK,o,o,o)},
cH1(d){var w=this,v=null,u=B.l(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.K(d?A.cu:A.bk,A.r,1)
return B.p(v,B.c9(B.A(B.a([w.j3(A.v5,"Print",new C.eJ5(w),d),w.j3(A.zj,"Download PDF",new C.eJ6(w),d),w.j3(A.qU,"Present",w.gaD_(),d)],x.p),A.l,v,A.e,A.h,0,v,v),A.t,v,A.y,v,v,v,v,A.aL),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yO,G.anZ,v,v,v)},
a3U(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.dC
else w=g?A.aa:A.aM
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cg)},
c7S(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.l(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.K(d?A.cu:A.bk,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eG5(r,d),t),t.k("ak.E"))
t.push(new B.D(A3.anE,new B.fh(new C.eG6(r),q),q))
A.d.u(t,w?B.a([new B.D(T.wG,r.aiK(A.kc,"Ending celebration",r.gcj2(),d),q),new B.D(T.wG,r.aiK(A.I_,"Logo ring & frame",r.gcjK(),d),q)],x.p):A.f5)
A.d.u(t,w?B.a([new B.D(T.wG,r.aiK(A.lR,"Look and feel",r.gcjL(),d),q),new B.D(T.wG,r.aiK(A.pF,"Edit this slide's text",r.gckh(),d),q)],x.p):A.f5)
t.push(new B.D(T.wG,B.ha(B.az(q,B.p(q,D.fdc,A.f,q,q,new B.o(q,q,q,B.l(999),B.a([new B.ab(0,A.G,M.lI.j(0.4),A.J,10)],x.V),D.atP,A.n),q,34,q,q,A.f3,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eG7(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.c9(B.A(t,A.l,q,A.e,A.h,0,q,q),A.t,q,A.y,q,D.bJd,q,q,A.aL)
s=e?8:10
return B.p(q,B.x(B.a([t,B.c9(r.cvl(d),A.t,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aL)],x.p),A.al,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yO,q,q,q,q)},
cvl(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.doY[v]
u.a=null
s=u.a=t.b
w.push(e.m0(e.cx6(s),t.a,new C.eHu(u,e),a3,D.aTJ.q(0,s)))}w.push(e.j3(A.kZ,"Notes Slide",new C.eHv(e),a3))
w.push(e.m0(A.HZ,"Quiz",new C.eHw(e),a3,!0))
w.push(e.m0(O.Hy,"Worksheet",new C.eHH(e),a3,!0))
w.push(e.m0(Y.I2,"Flashcard",new C.eHS(e),a3,!0))
w.push(e.m0(A.Q0,"Lab Report",new C.eI2(e),a3,!0))
w.push(e.m0(A.qS,"Rubric",new C.eI9(e),a3,!0))
w.push(e.m0(A.pA,"Minutes",new C.eIa(e),a3,!0))
w.push(e.m0(A.oF,"Syllabus",new C.eIb(e),a3,!0))
w.push(e.m0(A.a3Z,"Timeline",new C.eIc(e),a3,!0))
return B.A(w,A.l,d,A.e,A.h,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dqm[v]
w.push(e.m0(r.b,r.c,new C.eId(e,r),a3,!D.aTP.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.h,0,d,d)
case"Insert":return B.A(B.a([e.j3(A.wZ,a0,e.gaPb(),a3),e.j3(A.v_,"Picture",new C.eHx(e),a3),e.j3(A.zu,"Bio link",new C.eHy(e),a3),e.j3(A.a3Y,"Table",new C.eHz(e),a3),e.j3(A.Q4,"Sticky",new C.eHA(e),a3),e.j3(A.ti,"Divider",new C.eHB(e),a3),e.j3(A.zE,"Header",new C.eHC(e),a3),e.m0(A7.tf,"Rectangle",new C.eHD(e),a3,!0),e.m0(A.py,"Circle",new C.eHE(e),a3,!0),e.m0(A.a3b,"Triangle",new C.eHF(e),a3,!0),e.m0(A.js,"Arrow",new C.eHG(e),a3,!0),e.m0(D.bRK,"Parallelogram",new C.eHI(e),a3,!0),e.m0(D.bUk,"Hexagon",new C.eHJ(e),a3,!0),e.m0(A.ti,"Line",new C.eHK(e),a3,!0),e.m0(A.zj,"PDF",new C.eHL(e),a3,!0),e.m0(M.a46,"Signature",new C.eHM(e),a3,!0),e.j3(A6.D8,"Quote",new C.eHN(e),a3),e.j3(D.a2L,a1,new C.eHO(e),a3)],x.p),A.l,d,A.e,A.h,0,d,d)
case"Design":w=e.c
w.toString
w=B.aF(w,A.c_,x.w).w
u=x.p
t=B.A(B.a([e.aQ3("Wide 16:9",D.Eh,a3),e.aQ3("Short 9:16",D.oY,a3),new B.D(A.fn,B.n4(D.bWs,d,D.fS7,d,new C.eHP(e),d,d,d,d),d)],u),A.l,d,A.e,A.h,0,d,d)
q=B.A(B.a([e.bLm("This slide",!e.Q,a3,new C.eHQ(e)),A.bm,e.aSl("All slides",e.Q,a3,new C.eHR(e),!0)],u),A.l,d,A.e,A.h,0,d,d)
p=e.bLn()
p=B.d(p,d,d,d,d,d,d,B.m(d,d,a3?A.bV:A.bP,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a64,new C.eHT(e),n),n.k("ak.E"))
n=B.c9(B.A(n,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dro[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dC:A.aT,1.5,A.r,-1)
l.push(new B.D(A.fn,B.az(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bF(i,i,i,i),d,d,d,A.a7),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eHU(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.c9(B.A(l,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,A.aL)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bHe()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eHV(e,a3),g),g.k("ak.E"))
return new B.a4(w.a.a-20,d,B.x(B.a([t,A.P,q,A.am,p,A.P,o,A.aw,n,A.P,m,A.aw,l,A.P,j,A.aw,B.c9(B.A(h,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,A.aL),A.am,e.c4v(a3)],u),A.E,d,A.e,A.N,0,A.p),d)
case"Transitions":f=e.ke()
w=e.c
w.toString
w=B.aF(w,A.c_,x.w).w
u=new C.eHt(e)
t=new C.eIe(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.SK,f.dy,new C.eHW(e,u,f),A.b3)
A.d.u(p,B.a([o,A.aw,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.m(d,d,a3?A.aE:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.aw],q))}q=e.gdB()
q=q==null?d:q.r
p.push(t.$4(D.SK,q,new C.eHX(e,u),A.bo))
return new B.a4(w.a.a-20,d,B.x(p,A.E,d,A.e,A.N,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j3(A.kZ,w,new C.eHY(e),a3),e.j3(A.v5,"Print deck",new C.eHZ(e),a3),e.m0(D.apM,"Export JSON",new C.eI_(e),a3,!0),e.j3(A.fN,"Duplicate Slide",e.gaUB(),a3),e.j3(A.ek,a2,e.gaTH(),a3),e.cBe(a3)],x.p),A.l,d,A.e,A.h,0,d,d)
case"Home":default:f=e.ke()
w=x.p
u=B.a([e.j3(D.a2L,a1,new C.eI0(e),a3),e.j3(A.fN,"Duplicate",e.gaUB(),a3),e.j3(A.ek,a2,e.gaTH(),a3),e.j3(A.qU,"Present",e.gaD_(),a3),e.j3(A.Dn,a0,e.gaPb(),a3),e.j3(A.Dg,"Fit Text",new C.eI1(e),a3),e.j3(A.zj,"Download PDF",new C.eI3(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j3(A.jN,"Transfer",new C.eI4(e),a3))
if(f!=null){w=B.a([A.af,e.j3(G.Pb,"Bold",new C.eI5(e,f),a3),e.j3(G.a2D,"Italic",new C.eI6(e,f),a3),e.j3(G.apn,"Underline",new C.eI7(e,f),a3),e.j3(Ah.Pc,"Bullets",new C.eI8(e,f),a3),e.bUu(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bRV(a3))
w.push(e.j3(D.bQr,"Delete",e.gaTG(),a3))
A.d.u(u,w)}return B.A(u,A.l,d,A.e,A.h,0,d,d)}},
aQ3(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oY
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.acc,t,t,t)],v)
if(w)A.d.u(u,B.a([A.de,D.bVE],v))
return new B.D(A.fn,B.jy(t,t,t,B.A(u,A.l,t,A.e,A.N,0,t,t),t,new C.eDS(this,w,e),s===e,A.bo.j(0.25),t,t,t),t)},
cBe(d){var w,v,u,t,s,r=this,q=null,p=r.gdB()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.K(d?A.aT:A.cC,A.r,1)
u=B.l(8)
t=B.X(A.Hw,d?A.aE:A.an,q,q,q,14)
s=B.aH(q,q,q,q,D.asL,q,q,q,new C.eIB(r,p),q,q,q,q,q,A.cg)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.m(q,q,d?A.c:A.bp,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.asC,q,q,q,new C.eIC(r,p),q,q,q,q,q,A.cg)],x.p),A.l,q,A.e,A.N,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Hd,A.n5,q,q,q)},
cx6(d){switch(d.a){case 6:return Y.I2
case 7:return A.HZ
case 8:return O.Hy
case 4:return A.zE
default:return A.kZ}},
bUu(d,e){var w=null,v=B.K(e?A.aT:A.cC,A.r,1),u=B.l(8),t=B.aH(w,w,w,w,D.asL,w,w,w,new C.eF0(this,d),w,w,w,w,w,A.cg),s=A.j.M(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.m(w,w,e?A.c:A.bp,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.asC,w,w,w,new C.eF1(this,d),w,w,w,w,w,A.cg)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uL,A.n5,w,w,w)},
c4v(d){var w=null
return B.Cz(B.E4(B.X(A8.a2O,d?A.aa:A.bw,w,w,w,16),w,w,D.fXR,w,w,w),w,w,new C.eFy(),A.J,this.gbFx(),A.cp,"Slide layout",x.fO)},
m0(d,e,f,g,h){var w=null,v=B.l(14),u=B.l(14),t=g?A.c.j(0.06):A.ch,s=B.K(g?A.dq:A.bk,A.r,1),r=x.p,q=B.a([B.X(d,g?A.dy:A.bo,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Qb,A.f,w,w,D.FE,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fn,B.aG(!1,A.a3,!0,w,B.aM(!1,v,!0,B.eB(new B.D(A.hm,B.x(B.a([new B.an(A.a0,w,A.ac,A.f,q,w),A.cQ,B.d(e,w,w,w,w,w,w,B.m(w,w,g?A.aR:A.bw,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w)},
j3(d,e,f,g){return this.m0(d,e,f,g,!1)},
b9_(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aL
v=B.hI(t,new C.eIN(u,s,e,d),s.r.length,t,A.cp,t,w,new C.eIO(e),!1)
s=d?A.av:A.ch
w=B.a([],x.p)
if(e&&!u.ky())w.push(new B.D(A.cp,B.IE(E.at_,new C.eIP(u),B.o2(t,A.bo,t,t,t,t,t,t,t,t,t,t,E.aUu,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.l,t,A.e,A.h,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJm(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oY?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bK(A.aZ,v,v,new B.fH(w,B.az(v,B.cn(new C.eEh(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eEi(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bJo(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kO(a9.w))===!0,b1=b0&&C.fSg(b3),b2=b0&&b3.b===D.lu&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.ky())v=!b0||a7.c6W(b3)
else v=!1
if(!a7.ky())u=!b0||a7.c6V(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.c8:A.bo
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hhE(b3))o=a8
else if(p&&!a7.ky())o=a7.gcfw()
else o=a7.ky()?a8:new C.eE5(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c1:A.iR
i=w&&C.hhE(b3)&&a7.Av()?new C.eE6(a7,b3):a8
h=v&&b3.b===D.d1?new C.eE7(a7,b3):a8
g=u?new C.eE8(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bg
else e=q?A.c2:r
else e=A.L
e=B.K(e,A.r,t?2:0)
d=B.l(t?6:0)
if(b1)a0=A.c2.j(0.08)
else a0=b3.b===D.lu?A.L:a8
if(b1){a1=a7.ky()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.m(a8,a8,A.c2.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aF(a1,A.c_,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Av()
a3=b3.b===D.d1
a4=a3?a7.XF(b3):a8
a5=a3?a7.avI(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aF(a6,A.c_,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eE9(a7,b3):a8
a3=v&&a3?new C.eEa(a7,b3):a8
a6=C.b3E(q,a4,a1,b3,a5,a2,a3,new C.eEb(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.l(6)
d.push(B.ao(-4,B.az(a8,B.p(a8,D.bYu,A.f,a8,a8,new B.o(r,a8,B.K(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEc(a7,b3,b4,b5),a8,a8,new C.eEd(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ky()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.az(a8,B.p(a8,D.bZd,A.f,a8,a8,new B.o(A.cZ,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc2_(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ky()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.az(a8,B.p(a8,D.c_T,A.f,a8,a8,new B.o(A.c2,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a7),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEe(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.d1)if(a7.w!==a9){e=a7.c
e.toString
e=B.aF(e,A.c_,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.as(B.az(a8,B.p(a8,D.h61,A.f,a8,a8,new B.o(A.bo,a8,a8,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.ll,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEf(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.az(j,B.eI(A.A,f,new B.an(A.a0,a8,A.ac,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bj("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aSl(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bo.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.l(10)
u=B.K(e?A.bo:A.bx,A.r,1)
if(e)t=A.bo
else t=f?A.aE:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.m(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.u(t,B.a([A.de,B.p(r,D.Qb,A.f,r,r,D.FE,r,12,r,r,r,r,r,12)],s))
return B.az(r,B.p(r,B.A(t,A.l,r,A.e,A.N,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.hk,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bLm(d,e,f,g){return this.aSl(d,e,f,g,!1)},
cfg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.ax()
v.P$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b6,A.aP),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aS
t=f?A.y1:l
if(f)s=new B.bF(new B.ay(e?A.bx:A.bk,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tI,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.m(l,l,e?A.aa:A.bw,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b1,m.b41(e,new C.eG9(m))],q),A.l,l,A.e,A.h,0,l,l)
o=B.m(l,l,e?A.c:A.aM,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.m(l,l,e?A.bV:A.bP,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(10),A.du),l,A.bU,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eGa(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ad,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a6,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.h,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aVV(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.ke()
if(a2==null)return A.bM
w=new C.eFe(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.j.D(1-a2.c,0.06,1)
t=A.j.D(1-a2.d,0.06,1)
s=A.j.D(1-a2.e,0.01,1)
r=A.j.D(1-a2.f,0.01,1)
q=a5?A.e_:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.c:A.a_,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b1,a0.b41(a3,a0.gbPW())],p),A.l,a1,A.e,A.h,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fSE,B.E(B.l_(a1,a1,a1,u,0.05,new C.eFf(w,a2),A.j.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.h,0,a1,a1))
o.push(B.A(B.a([D.h4p,B.E(B.l_(a1,a1,a1,t,0.05,new C.eFg(w,a2),A.j.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.h,0,a1,a1))
n=a2.b
m=n===D.d1
if(m)o.push(B.A(B.a([D.fM8,B.E(B.l_(a1,a1,a1,96,10,new C.eFh(w,a2),A.j.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.h,0,a1,a1))
l=n===D.lV
if(l||n===D.lu||n===D.U7)A.d.u(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.fYF,B.E(B.l_(a1,a1,a1,s,0,new C.eFi(w,a2),A.j.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.h,0,a1,a1),B.A(B.a([D.h5J,B.E(B.l_(a1,a1,a1,r,0,new C.eFj(w,a2),A.j.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.h,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.DH[j]
i.a=null
g=h.a
i.a=g
k.push(B.jy(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.q_,a1,a1,a1),a1,new C.eFk(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bZ(A.bH,k,A.br,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.DA[j]
f.a=null
g=e.a
f.a=g
h.push(B.jy(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.q_,a1,a1,a1),a1,new C.eFl(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.u(o,B.a([A.P,l,A.am,k,A.P,i,A.am,B.bZ(A.bH,h,A.br,a1,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eFm(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.u(o,B.a([m,A.am,B.bZ(A.bH,l,A.br,a1,6,6),A.ae,B.hub(new C.eFn(w,a2),D.cD6,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.fi){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aE:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eFo(w,a2),m),m.k("ak.E"))
A.d.u(o,B.a([n,B.bZ(A.bH,m,A.br,a1,0,6)],p))}o.push(A.ae)
o.push(B.dh(D.c_F,a1,D.h_L,new C.eFp(a0,a5),B.bo(A.bG,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cm(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cu:A.c
p=a4?A.y1:a1
if(a4)o=new B.bF(new B.ay(a3?A.bx:A.bk,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tI,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.Cv,a1,a1,a1)},
bUL(d){return this.aVV(d,!1,!1,null)},
ceo(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.fy
q===$&&B.c()
q=B.c4(q,new C.eFs(s,f,d,e),r)
w=B.d(i,r,r,r,r,r,r,D.fBe,r,r,r)
v=s.c
v.toString
u=x.p
v=B.a([q,A.bb,B.E(B.x(B.a([w,A.bE,A.cQ,s.bES(D.d6H,d,B.P(v).ax.a===A.I)],u),A.E,r,A.e,A.h,0,A.p),1)],u)
q=x.V
A.d.u(v,B.a([A.af,B.dP(B.ha(B.aG(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eB(D.fjF,r,new B.o(r,r,B.K(A.c.j(0.55),A.r,1.3),r,B.a([new B.ab(0,A.G,A.c2.j(0.4),A.eu,8)],q),D.atU,A.a7),r,r,r),A.cS,!0,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai),r,"Documents (Hati)",r,r),A.J)],u))
t=B.A(v,A.l,r,A.e,A.h,0,r,r)
w=s.c
w.toString
if(B.P(w).ax.a!==A.I)q=B.a7s(A.bd,20)
else{w=B.l(20)
v=B.a([D.bgy,D.bh0],x.O)
u=B.K(d.j(0.45),A.r,1.2)
q=new B.o(r,r,u,w,B.a([new B.ab(0,A.G,d.j(0.18),A.cy,14)],q),new B.a8(A.ay,A.aD,A.x,v,r,r),A.n)}return B.p(r,t,A.f,r,r,q,r,r,r,r,A.bU,r,r,r)},
asm(d,e,f,g){var w,v,u=null,t=this.c
t.toString
if(B.P(t).ax.a===A.dm){t=B.l(22)
w=A.a.q(f,"Kiapo")
v=B.a7s(w?A.bd:A.aG,22)
w=w?A.bd:A.aG
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.eB(B.x(B.a([new B.VH(w,48,e,u,u),A.ae,B.d(f,u,u,u,u,u,u,D.fsO,A.K,u,u)],x.p),A.l,u,A.b8,A.h,0,A.p),u,v,u,A.CD,1/0),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)}t=this.fy
t===$&&B.c()
return B.c4(t,new C.eD0(this,g,d,e,f),u)},
ai2(d,e){return this.cr8(d,e)},
cr8(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$ai2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.au(new B.ba(e,A.b6,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eH6(d,q),p,null,!0,!0,x.N),$async$ai2)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ai2,v)},
QP(d){var w=d.bT()
return""+B.bL(w)+"/"+B.bX(w)+"/"+B.bC(w)}}
C.agz.prototype={}
C.aAW.prototype={
S(){return new C.bff(null,null)}}
C.bff.prototype={
gcDz(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bL(u)+"/"+B.bX(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a3()
w=B.bn(u,A.qC,u,1,u,v)
w.f2(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,D.bBL,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.by6()},
JI(d){var w=0.12+d*0.09,v=A.j.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ck.aB(0,new B.hS(w,v,A.ck).aB(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.D(D.bHw,B.c4(new B.hb(B.a([u,w],x.dS)),new C.daU(this),v),v),v,v,v)}}
C.bfu.prototype={
B(d){var w=null,v=B.l(22),u=B.K(A.aM,A.r,1),t=x.p
return B.as(new B.D(D.bHN,B.aG(!1,A.a3,!0,w,B.p(w,B.bu(B.l(22),B.x(B.a([new B.D(D.bGY,B.x(B.a([B.p(w,D.bZj,A.f,w,w,new B.o(A.aA.j(0.12),w,w,B.l(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.h1X,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fCx,A.K,w,w)],t),A.l,w,A.e,A.h,0,A.p),w),A.e2,D.bAO,B.A(B.a([B.E(B.bO(!1,D.fQN,w,w,!0,w,w,w,new C.dbh(d),w,B.ft(w,w,w,w,w,w,w,w,w,w,w,A.bP,w,w,w,w,w,A.nH,w,A.p2,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bs,w,w,w,48,w,w,w,w,w,1),B.E(B.bO(!1,D.fWg,w,w,!0,w,w,w,new C.dbi(d),w,B.ft(w,w,w,w,w,w,w,w,w,w,w,A.aA,w,w,w,w,w,A.nH,w,A.p2,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.h,0,w,w)],t),A.l,w,A.e,A.N,0,A.p),A.aq),A.f,w,Aa.Y1,new B.o(A.av,w,u,v,D.d74,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w),w,w,w)}}
C.KI.prototype={
S(){return new C.bfe()}}
C.bfe.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.l(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.K(m.j(l?0.34:0.28),A.r,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ab(0,A.G,m.j(0.08),A.dL,8)],t)
s=m.j(l?0.16:0.14)
r=B.l(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.d3(B.az(o,B.uK(B.cT(o,B.A(B.a([r,A.as,new B.di(1,A.cm,B.d(q,o,2,A.a2,o,o,o,B.m(o,o,l?A.eZ:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.b8,A.N,0,o,o),o,o,A.b0,new B.o(n,o,u,v,t,o,A.n),A.eH,o,o,o,o,A.nI,o,o,1/0),A.ck,A.jo,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.daP(p,d),new C.daQ(p),new C.daR(p),new C.daS(p),o,o,o,!1,A.a4),k),new B.r(0,(1-k)*16))}}
C.QE.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.l(16),s=B.l(16),r=B.l(14),q=B.K(A.c.j(0.5),A.r,1.2),p=x.p
return B.aG(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.eV,B.A(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ay,A.aD,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.ev,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.ni,v,v,v),A.bE,B.d(w.f,v,v,v,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.h,0,A.p),1),B.X(A.eI,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ai)}}
C.a0R.prototype={
S(){return new C.aGw(D.dr,null,null)}}
C.aGw.prototype={
ga_1(){var w,v=this,u=v.w
if(u===$){w=B.bn(null,D.bBk,null,1,null,v)
v.w!==$&&B.bD()
v.w=w
u=w}return u},
b9t(d){if(!this.a.c.ay)return
this.x=d
this.ga_1().iz(0,0)},
Y(){var w,v=this
v.a3()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.axM(D.fqd)
C.imK()
v.Sh()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.ga_1().t()
v=w.z
if(v!=null)v.a1(0)
C.axM(D.fqe)
C.imN()
w.bAe()},
cGq(){B.jZ()
this.m(new C.eJM())
var w=this.c.L(x.q).f
w.a67()
if($.bnd)w.T(D.fn1)},
Sh(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cy(B.dw(0,0,0,0,0,A.o.D(C.hso(u,w),1,120)),new C.eJC(v))},
cG3(){var w,v=this
v.m(new C.eJL(v))
if(v.r)v.Sh()
else{w=v.f
if(w!=null)w.a1(0)}},
gaXR(){var w=this.a.c.db
return(w==null?"":w).length!==0},
czZ(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eJD(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cy(A.lM,new C.eJE(w))},
azO(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eJy(u))
u.Sh()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaXR()){u.czZ()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eJz(u,A.o.F(w+1,s)))
u.b9t(w)
u.Sh()}},
cpN(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eJA(v))
v.Sh()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eJB(v,w,t))
v.b9t(w)
v.Sh()}},
cBu(d){var w,v=this,u=v.e
if(u===D.cv){u=v.d
u===$&&B.c()
return new B.mq(d,new B.bj(u,x.ac))}w=v.cBv(u)
u=v.d
u===$&&B.c()
return B.oB(new B.mq(d,new B.bj(u,x.ac)),w,new C.eJJ(),A.b0,A.b0,new C.eJK(v))},
cBv(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bBH
case 16:return A.iP
case 18:return A.n0
default:return A.me}},
cBt(d,e,f){var w,v,u,t=null,s=B.cG(A.ck,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d2(s,!1,e,t)
case 2:case 17:w=x.K
return B.jL(e,new B.bg(s,new B.bq(A.tJ,A.J,w),w.k("bg<bP.T>")),t,!0)
case 3:w=x.K
return B.jL(e,new B.bg(s,new B.bq(A.Ul,A.J,w),w.k("bg<bP.T>")),t,!0)
case 4:case 21:w=x.K
return B.jL(e,new B.bg(s,new B.bq(A.hq,A.J,w),w.k("bg<bP.T>")),t,!0)
case 5:w=x.K
return B.jL(e,new B.bg(s,new B.bq(A.tH,A.J,w),w.k("bg<bP.T>")),t,!0)
case 6:case 16:w=x.b
return B.ik(A.A,new B.d2(s,!1,e,t),t,new B.bg(s,new B.bq(0.82,1,w),w.k("bg<bP.T>")))
case 7:w=x.b
return B.ik(A.A,new B.d2(s,!1,e,t),t,new B.bg(s,new B.bq(1.18,1,w),w.k("bg<bP.T>")))
case 8:return B.c4(s,new C.eJF(s),e)
case 9:return B.c4(s,new C.eJG(s),e)
case 10:return B.c4(s,new C.eJH(s),e)
case 11:return B.c4(s,new C.eJI(s),e)
case 12:w=x.b
return new B.d2(s,!1,B.ik(A.A,e,t,new B.bg(s,new B.bq(1.03,1,w),w.k("bg<bP.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jo(B.jL(e,new B.bg(s,new B.bq(A.tJ,A.J,v),v.k("bg<bP.T>")),t,!0),A.t,new C.buu(w,t))
case 15:w=x.K
return B.jL(e,new B.bg(s,new B.bq(A.Ul,A.J,w),w.k("bg<bP.T>")),t,!0)
case 19:w=B.dq()
w.n3((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k6(v,u,v,1)
return B.fB(A.A,B.d3(e,s.gp(0)),t,w,!0)
case 20:return B.eI(A.A,(1-s.gp(0))*0.2,new B.d2(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jo(new C.aq2(B.c4(n.ga_1(),new C.eJN(n,v,w),m),m),A.t,m)}else{t=B.r3(new C.JF(w,!0,!1,m))
l=B.b0(w.e)
u=n.cBu(B.ea(B.jo(t,A.t,m),l,!0))}l=B.l(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.hso(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.p8,m,m,m),A.bm,D.c0M],k),A.l,m,A.e,A.N,0,m,m),A.f,m,m,new B.o(A.b5,m,m,l,m,m,A.n),m,m,m,m,A.hl,m,m,m)
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
l.push(B.bR(0,new C.Op(new C.Fj(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oY?0.5625:1.7777777777777777
l.push(B.as(new B.fH(r,B.jo(B.v2(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bnd){r=B.IE(A.lq,new C.eJO(d),B.o2(m,A.b5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.A(B.a([r,A.af,B.IE(B.X(n.r?An.v4:A.hd,m,m,m,m,m),n.gcG2(),B.o2(m,A.b5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.h,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.l(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h5,m,m,m),A.f,m,m,new B.o(A.b5,m,m,r,m,m,A.n),m,m,m,m,A.hl,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.u(l,k)}l.push(B.ao(m,B.bm(!0,B.az(A.c1,B.p(A.lB,$.bnd?A.bM:s,A.f,m,m,m,m,64,m,m,D.bCq,m,m,150),A.y,!1,m,n.gcGp(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c5(m,A.w,B.az(m,new B.an(A.a0,m,A.b2,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eJP(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KO.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.anp,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b8V,w,w,w,w,w,w,w,w)}}
C.buu.prototype={
ju(d){return new B.a6(0,0,0+d.a*A.j.D(this.b,0,1),0+d.b)},
ka(d){return d.b!==this.b}}
C.bke.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.l(999)
break
case"rounded":w=B.l(18)
break
case"arch":w=D.b5H
break
default:w=B.l(6)
break}v=s.e
u=B.K(v?A.aC:A.L,A.r,2.5)
if(q==="circle")q=B.l(999)
else{t=B.l(q==="rounded"?9:3)
q=t}w=B.cT(r,B.as(B.p(r,r,A.f,r,r,new B.o(r,r,r,q,r,E.x6,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b0,new B.o(s.f,r,u,w,r,r,A.n),A.h8,r,64,r,r,r,r,r,64)
return B.az(r,new B.a4(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.m(r,r,v?A.aC:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.h,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bkd.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dFh.h(0,p)
if(o==null)o=D.dqx
p=p==="none"
w=p?q:new B.a8(A.a5,A.a9,A.x,o,q,q)
p=p?A.cA.j(0.25):q
v=r.e
u=v?B.K(A.aC,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.arX:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a7),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a7),q,52,q,q,A.eC,q,q,52)
return B.az(q,new B.a4(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.m(q,q,v?A.aC:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.h,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aMm.prototype={
aY(){this.b5()
this.b3()
this.dI()},
t(){var w=this,v=w.b7$
if(v!=null)v.a6(0,w.gdC())
w.b7$=null
w.a2()}}
C.aOo.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.bAi.prototype={}
C.aOp.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbA())
w.a9$=null
w.a2()},
aY(){this.b5()
this.b3()
this.bB()}}
C.b3H.prototype={}
C.Xg.prototype={
S(){return new C.aGu()},
bkg(d){return this.e.$1(d)}}
C.aGu.prototype={
gb7H(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabU(){var w,v
if(this.d==="all")return B.bp(this.a.d,!0,x.I)
w=this.gb7H()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaQV(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb7H()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb8Z(){return A.d.cE(this.gabU(),0,new C.eJi())},
Y(){var w,v=this
v.a3()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RT()},
RT(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RT=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b4i(s.c,s.f),$async$RT)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eJe(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RT,v)},
JK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabU()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.I)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fVB(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pz(o,q.c,q.f),$async$JK)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ed(new C.eJh(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).ce(q),$async$JK)
case 4:q=t.a
w=5
return B.b(B.py(q.c,q.f),$async$JK)
case 5:w=6
return B.b(t.RT(),$async$JK)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JK,v)},
Sf(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Sf=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hC(o,D.ejL,!0,"NgmySlidesTransferScan",x.N),$async$Sf)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eJf(t))
w=4
return B.b(C.aiH(s),$async$Sf)
case 4:r=e
t.m(new C.eJg(t))
o=J.a7(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.T(D.flQ)
w=1
break}w=5
return B.b(t.a.bkg(r),$async$Sf)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).N(null)
q=t.c.L(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.T(B.b2(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Sf,v)},
JJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabU()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pz(s,r.c,r.f),$async$JJ)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fVQ(null,A.d.gH(n),s,t.a.f)}else q=C.fVQ(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.He(q,"ngmy_slides_"+p,!1),$async$JJ)
case 4:o=e
s=t.a
w=5
return B.b(B.py(s.c,s.f),$async$JJ)
case 5:w=6
return B.b(t.RT(),$async$JJ)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JJ,v)},
a44(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a44=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eJj(t))
w=3
return B.b(C.bFE(),$async$a44)
case 3:s=e
t.m(new C.eJk(t))
if(s==null||J.ct(s)){w=1
break}w=4
return B.b(t.a.bkg(s),$async$a44)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).N(null)
r=t.c.L(x.q).f
q=J.a7(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.T(B.b2(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a44,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.bB:A.ch,k=o.gabU().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bV(A.A,0.5,A.x,n,0,B.a([A.bo.j(0.22),A.L],x.O),n,n),A.a7),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cB,m?A.aa:A.an,n,n,n,n),n,n,n,new C.eJn(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.m(n,n,m?A.c:A.a_,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.tT],h),A.l,n,A.e,A.h,0,n,n)
w=B.l(24)
v=B.a([new B.ab(0,A.G,A.bo.j(0.35),A.eR,24)],x.V)
u=B.ao(n,B.X(A.qO,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.l(16)
s=B.a([u,B.A(B.a([B.p(n,D.c1k,A.f,n,n,new B.o(t,n,B.K(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.ev,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.m(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.aw,D.bMH],h),A.E,n,A.e,A.h,0,A.p),1)],h),A.l,n,A.e,A.h,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.ha(B.az(A.c1,D.fjI,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gckt(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a0,n,A.ac,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a4C,A.n),n,n,n,n,E.a1i,n,n,1/0),A.e2,o.azP(m,"What to transfer"),A.ae,B.A(B.a([B.E(o.b_k(A.qU,m,new C.eJo(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.b_k(D.bRD,m,new C.eJp(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.h,0,n,n)],h)
if(o.d==="one"){v=B.a([A.da,o.azP(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.l(16)
s=B.K(m?A.bx:A.bk,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.m(n,n,m?A.aE:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bS,n,n,n))}else A.d.u(v,new B.N(u,new C.eJq(o,m),B.U(u).k("N<1,v>")))
A.d.u(w,v)}w.push(A.ng)
w.push(o.azP(m,"Transfer options"))
w.push(A.ae)
w.push(B.A(B.a([B.E(o.aso(A.aG,k,!0,A.jt,m,o.r,o.gces(),"Scan on another device","Show QR"),1),A.as,B.E(o.aOW(A.jF,!0,A.ju,m,o.gcwG(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.h,0,n,n))
w.push(A.T)
w.push(B.A(B.a([B.E(o.bDl(A.aV,k,A.hP,m,o.r,o.gcep(),"Download .json","Backup file"),1),A.as,B.E(o.aOW(A.at,!0,AC.zD,m,o.gcIW(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.h,0,n,n))
if(k){v=A.bo.j(m?0.12:0.08)
u=B.l(16)
t=B.K(A.bo.j(0.28),A.r,1)
s=B.X(A.lm,A.bo.j(0.9),n,n,n,18)
r=o.gaQV()
q=o.gb8Z()
p=o.gb8Z()===1?"":"s"
A.d.u(w,B.a([A.by,B.p(n,B.A(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.m(n,n,m?A.aa:A.bw,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bI,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Aj.OH,i,n),B.E(B.cm(w,n,n,D.bG4,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,V.Ym,A.f,A.dX,n,n,n,n,n,n,n,n,n,n))
return B.c5(n,l,new B.an(A.a0,n,A.ac,A.t,j,n),n,!1,!1,n,n)},
ahd(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.it7(s,t.d,t.e),$async$ahd)
case 2:return B.h(null,v)}})
return B.i($async$ahd,v)},
azP(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bo,w,w,B.l(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.af,B.d(e.toUpperCase(),w,w,w,w,w,w,B.m(w,w,d?A.aE:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,w,w)},
b_k(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.l(18),q=B.l(18),p=e?A.av:A.c
if(g)w=A.bo
else w=e?A.bx:A.bk
w=B.K(w,A.r,g?2:1)
v=g?B.a([new B.ab(0,A.G,A.bo.j(0.2),A.cy,14)],x.V):s
u=A.bo.j(g?0.2:0.1)
t=B.l(12)
t=B.p(s,B.X(d,A.bo,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.m(s,s,e?A.c:A.a_,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a3,!0,s,B.aM(!1,r,!0,B.eB(new B.D(A.bI,B.x(B.a([t,A.T,u,A.bE,B.d(h,s,s,s,s,s,s,B.m(s,s,e?A.aE:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.h,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai)},
bO3(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.l(16),n=e?A.av:A.c,m=B.l(16)
if(p)w=A.bo
else w=e?A.bx:A.bk
w=B.K(w,A.r,p?2:1)
v=B.p(q,D.c1z,A.f,q,q,new B.o(q,q,q,B.l(12),q,new B.a8(A.a5,A.a9,A.x,B.a([A.bo,A.bo.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.m(q,q,e?A.c:A.a_,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.m(q,q,e?A.aE:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.h,0,A.p),1)
u=p?A.ec:A.py
if(p)r=A.bo
else r=e?A.aT:A.dC
return new B.D(A.cx,B.aG(!1,A.a3,!0,q,B.aM(!1,o,!0,B.p(q,B.A(B.a([v,A.bb,t,B.X(u,r,q,q,q,q)],s),A.l,q,A.e,A.h,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bI,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eJd(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q)},
aso(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.l(18),o=B.l(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bx:A.bk
w=B.K(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.l(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.ta,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.asw,A.f,s,s,D.b8H,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.m(s,s,h?A.c:A.a_,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d3(B.aG(!1,A.a3,!0,s,B.aM(!1,p,!0,B.eB(new B.D(E.a0Y,B.x(B.a([new B.an(A.a0,s,A.ac,A.f,u,s),A.ae,v,A.bE,B.d(k,s,s,s,s,s,s,B.m(s,s,h?A.aE:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.h,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai),r)},
aOW(d,e,f,g,h,i,j){return this.aso(d,e,!1,f,g,!1,h,i,j)},
bDl(d,e,f,g,h,i,j,k){return this.aso(d,e,!1,f,g,h,i,j,k)}}
C.Xh.prototype={
S(){return new C.bnc()}}
C.bnc.prototype={
Y(){this.a3()
this.ag_()},
ag_(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$ag_=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fVQ(null,A.d.gH(m),k,r.a.f):C.fVQ(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kO(A.d.gH(n).w))C.fVB(A.d.gH(r.a.d),D.dof)
n=r.a
m=n.c
n=C.iqd(n.d)
w=7
return B.b(C.fVP(p,C.iqi(r.a.d),n,m,q),$async$ag_)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eJr(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eJs(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ag_,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.bB:A.ch,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cE(k.a.d,0,new C.eJt())
v=B.aH(j,j,j,j,B.X(A.eL,i?A.aa:A.an,j,j,j,18),j,j,j,new C.eJu(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.m(j,j,i?A.c:A.a_,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.tT],u),A.l,j,A.e,A.h,0,j,j)
t=B.l(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dk,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.m(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.h,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a4C,A.n),j,j,j,j,E.a1i,j,j,1/0)
q=B.l(24)
s=B.K(A.aG.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.VK,A.K,j,j))
else if(k.d==null)r.push(D.ewj)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.l(16)
n=B.a([new B.ab(0,A.G,A.aC.j(0.35),A.cy,18)],x.V)
m=k.e
m.toString
A.d.u(p,B.a([D.fRj,A.am,B.az(j,B.p(j,B.A(B.a([D.c3a,A.as,B.d(m,j,j,j,j,j,j,D.fCX,j,j,j)],u),A.l,j,A.e,A.N,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c89,A.n),j,j,j,j,A_.an9,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eJv(k,d),j,j,j,j,j,j,!1,A.a4),A.P,D.fVN,A.aB],u))}o=A.c.j(0.04)
n=B.l(22)
m=B.K(A.bx,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.qe(j,j,!1,l,j,!0,!0,j,!1,D.bwT),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.u(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hs,A.K,j,j))
return B.c5(j,h,B.bm(!0,B.x(B.a([new B.D(Aj.OH,v,j),B.E(B.c9(B.x(B.a([t,A.aO,B.p(j,B.x(r,A.l,j,A.e,A.h,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.cac,A.n),j,j,j,j,A.uK,j,j,1/0)],u),A.l,j,A.e,A.h,0,A.p),A.t,j,A.y,j,E.anu,j,j,A.ah),1)],u),A.l,j,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aGr.prototype={
S(){return new C.aGs(new B.au(A.ax,$.ax()),B.kb(!0,null,!0,!0,null,null,!1))}}
C.aGs.prototype={
Y(){var w=this
w.a3()
w.e.aW(0,new C.eCV(w))
$.aU.x1$.push(new C.eCW(w))},
t(){var w=this.d
w.U$=$.ax()
w.P$=0
this.e.t()
this.a2()},
b27(){var w,v=this.c
v.toString
w=C.zd(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aF(a2,A.eT,x.w).w,i=B.l(28),h=B.K(A.bo.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ab(0,A.G,A.bo.j(0.28),A.vz,36),D.aft],g),e=B.l(28),d=A.c.j(0.16),a0=B.l(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.bZn,A.f,k,k,new B.o(d,k,B.K(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ae,D.fOi,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.m(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.h,0,A.p),A.f,k,k,D.b97,k,k,k,k,A.wE,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.geb()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.a_
o=new B.aP(14,14)
if(q)n=A.bo
else n=r?A.bo.j(0.55):A.aM
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ab(0,A.G,A.bo.j(0.28),A.J,12)],g):k
t.push(new B.by(1,A.ba,B.cT(A.A,B.d(p,k,k,k,k,k,k,D.fw6,k,k,k),k,k,A.b0,new B.o(s,k,new B.bF(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.h8,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(A1.AQ)
A.d.u(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.h,0,k,k),B.bR(0,B.d3(B.aN(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c61,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uX(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C3(5,k),new C.bxM()],x.aS),k,k,A.aVK,k,5,k,1,k,k,!1,"\u2022",k,new C.eCR(l),k,new C.eCS(l),k,!1,k,k,!1,k,!0,k,A.ad,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a6,k,A.mB,k,k,k,k),0),0,0,0)],a1)
d=C.zd(w.a.a.toUpperCase())==null?k:l.gcet()
return B.as(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a3,!0,k,new B.cN(Ag.Mc,B.p(k,B.bu(e,B.x(B.a([a0,new B.D(D.bGB,B.x(B.a([new B.an(A.a0,k,A.ac,A.t,g,k),A.T,D.fMA,A.by,new B.a4(1/0,50,B.bI(D.h2R,k,d,B.bo(A.bo,A.bs,A.an,k,A.c,k,k,k,new B.b9(B.l(16),A.a1),k,k,k)),k),A.am,B.bO(!1,A.o6,k,k,!0,k,k,k,new C.eCT(a2),k,B.ft(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.h,0,A.p),k)],a1),A.l,k,A.e,A.N,0,A.p),A.aq),A.f,k,k,new B.o(A.bB,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.ai),k),k,k,k)}}
C.bxM.prototype={
p0(d,e){var w=e.a.toUpperCase()
return e.cPu(B.hl(A.bA,w.length),w)}}
C.at6.prototype={
S(){return new C.aGv(B.zV(A.NY,A.od,A.vg))}}
C.aGv.prototype={
t(){this.d.t()
this.a2()},
b26(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j2(w,d)},
abP(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h40(s),$async$abP)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b26("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abP,v)},
cer(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=C.iqg(w[u])
if(t!=null){this.b26(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.x1,s,s,s,t.gbSt(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eR(B.a([r,B.aH(s,s,s,s,B.X(q?A.uW:Ao.PJ,s,s,s,s,s),s,s,s,new C.eJx(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.bB,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.h43,s,s,s,1,s,!0)
r=B.zU(t.d,A.c0,t.gceq())
w=B.l(28)
w=B.as(B.p(s,s,A.f,s,s,new B.o(s,s,B.K(A.bo,A.r,3),w,B.a([new B.ab(2,A.G,A.bo.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.l(16)
return B.c5(p,A.w,new B.an(A.a0,s,A.b2,A.t,B.a([r,w,B.ao(32,B.p(s,D.fSp,A.f,s,s,new B.o(v,s,B.K(A.bo.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jp,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.by_.prototype={
B(d){var w=null,v=B.l(24),u=B.K(A.aM,A.r,1)
return B.aG(!1,A.a3,!0,w,B.p(w,B.x(B.a([B.p(w,H.asb,A.f,w,w,D.b8R,w,56,w,w,w,w,w,56),A.aO,D.h3L,A.am,new B.k5(this.c,new C.fkG(),w,w,x.cI),A.aO,new B.k5(this.d,new C.fkH(),w,w,x.cl),A.ae,D.h3J],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,Ag.Mc,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,N.a1p,D.bHe,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)}}
C.a94.prototype={
S(){return new C.bmW(A.bC)},
gd1(){return this.c}}
C.bmW.prototype={
Y(){var w=this
w.a3()
if(w.a.d)return
w.a0l()
w.d=B.dg(A.fL,new C.era(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
a0l(){return this.ct1()},
ct1(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0l=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.er8(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bC(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.clY(p.c),$async$a0l)
case 6:r=e
q.a=r==null?A.bC:r
case 4:if(t.c==null){w=1
break}t.m(new C.er9(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a0l,v)},
bUC(d){var w,v,u=d.a,t=A.o.ar(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ar(u,6e7)%60
v=A.o.ar(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b_(A.o.v(w),2,"0")+"m "+A.a.b_(A.o.v(v),2,"0")+"s left"
return A.a.b_(A.o.v(w),2,"0")+":"+A.a.b_(A.o.v(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bM
w=s.e.a
v=A.o.ar(w,6e7)<30&&A.o.ar(w,36e8)<999?A.aA:A.c2
w=v.j(0.14)
u=B.l(14)
t=B.K(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.X(A.Hw,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bUC(s.e),r,r,r,r,r,r,B.m(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.h,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,X.ame,A.hN,r,r,1/0)}}
C.a9Y.prototype={
ny(){var w,v,u,t=this
t.y0()
w=t.cx
v=t.c
w.buB(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qk(B.J(["/S",D.eA3,"/URI",new B.t0(B.XT(w.as),A.vC,!0)],x.N,u),u))}}
C.a9Z.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b5m.prototype={
bCk(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.eym],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcSY(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.ka(w,new C.cpS(),B.a3(w).k("ka<ci.E,H>")).f1(0,new C.cpT())},
aFk(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hj(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.u1(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jt(d.a,d.b))
s.n(0,"/Border",B.u1(H.aug))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.h8(t.gcSY()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qk(w,x.Y))}}
C.cpU.prototype={}
C.a4f.prototype={}
C.ajE.prototype={}
C.aTy.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lC(d)
q.MK(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjB(w)
u=x.N
t=x.Y
s=new C.cpU(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bCk(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qk(B.J(["/Type",D.eA1],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a9Y(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.I(0,r)
v.dx.push(r)}}
C.ayL.prototype={}
C.aV_.prototype={
fV(d){var w,v,u,t,s=this
s.lC(d)
w=s.b
if(w!=null){v=B.dq()
u=s.a
v.ed(u.a,u.b,0,1)
u=d.b
u.ir()
t=s.a
t.toString
u.LT(t)
u.Tw(0)
u.po(0,v)
w.fV(d)
u.nB(0)}}}
var z=a.updateTypes(["aB<~>()","~(m3)","R(hU)","~()","R(eS)","R(oP)","R(m3)","~(hU)","R(eS,eS)","KO(Z)","R(ob)","R(ly)","aB<R>()","H(H,hU)","ai<Ad>()","n(ob)","R(a9l)","n(m3)","n(wz)","R(Fs)","H(hU,hU)","a9<n,@>(hU)","n(eS)","v(eS)","cK(eS)","v(hJ)","~(hJ)","eS(n,G,G,G,G,G{align:qp,anim:hJ,bullets:R,color:H?,delay:H,fx:n,key:n,style:Ix,weight:o_})","eS(n,G,G,G,G,G,H{align:qp,style:Ix,weight:o_})","eS(n,G,H)","~(ai<oP>)","R(Ad)","R(n,ai<Ad>)","H(oP,oP)","ob()","a9<n,@>(oP)","a2e(Z)","eS(vi,G,G,G,G,H{fx:n,key:n,rotation:G})","eS(n,G,G,G,G{anim:hJ,delay:H,fx:n,key:n})","ZX(Z)","aB<~>(oP)","R(mS)","a1K(Z)","a1J(Z)","ZV(Z)","a07(Z)","eS(vi,G,G,G,G,H,n,n{anim:hJ,delay:H,rotation:G,stroke:H,strokeWidth:G})","eS(n,G,G,G,G,G,n,n,H)","eS(G,G,n,H{size:G})","Qt(Z)","ly()","v(rP,G,G)","oP(a9<@,@>)","Fs()","fk(eS)","v(jd)","a_F(Z)","~(Fj)","a0_(Z)","H(eS,eS)","eS(eS)","a9<n,@>(eS)","eS(a9<@,@>)","m3(m3)","a9<n,@>(m3)","m3(a9<@,@>)","R(k1)","k1()","~(v8)","n(hU)","V(ai<hU>)","V(hU)","R(n,hU)","aeG(Z)","~(R(eS,eS))","ae4(Z,H)","aeJ(Z)","u(m3,R)","agp(Z,H)","aeM(Z)","X4(Z)","~(mV)","hU(hU)","G(eS)","X5(Z)","a0R(Z)","hU()","a1d(Z)","aB<~>(ai<hU>)","v(bA<H,hU>)","D(k1)","D(Fs)","aB<~>(hJ,~())","v(ai<hJ>,hJ?,~(hJ),u)","ai<FP>()","ai<jI<mV>>(Z)","jI<mV>(mV)","hU(a9<@,@>)","Xg(Z)","R(mt)","Xh(Z)","v(hU)","~(ml)","JF(Z,m3,v?)","H(a9Z)","aB<ai<a9<n,@>>?>()","n(n)","aB<Ac>({paper:n?,photo:dJ?,request:n,template!lB})","aB<a9d>({doc!Ac,history:ai<+(n,n)>,instruction!n,photo:dJ?,template!lB})","ai<hU>(n?)"])
C.cP9.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:66}
C.cPa.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:70}
C.cPb.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galO(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mH(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:70}
C.cPc.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bUd.prototype={
$1(d){return J.eF(A.dK.gaU(d),d.byteOffset,d.byteLength)},
$S:1696}
C.fHL.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iX(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iX(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iX(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iX(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1697}
C.c4a.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:30}
C.c4b.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aS(v,J.k(w==null?"":w))},
$S:41}
C.c4d.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fYS.prototype={
$1(d){return new C.a2e(this.a,this.b,C.ir8(),null)},
$S:z+36}
C.fj8.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fjc.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fjd.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fje.prototype={
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
C.fj9.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fja.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fjb.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fj3.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hr,w,w,w)
return B.ej(B.a([B.bO(!1,E.aXS,w,w,!0,w,w,w,new C.fj1(d),w,w),B.bO(!1,D.fPM,w,w,!0,w,w,w,new C.fj2(d),w,w)],x.p),w,w,D.a_H,v,w,w,w,w,D.h4n,w)},
$S:18}
C.fj1.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.fj2.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.fj4.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fj5.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fji.prototype={
$0(){var w=this.a
return w.m(new C.fjh(w,this.b))},
$S:0}
C.fjh.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fj7.prototype={
$0(){var w=this.a
return w.m(new C.fj6(w,this.b,this.c))},
$S:0}
C.fj6.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.I(0,v)},
$S:0}
C.fjf.prototype={
$0(){return this.a.a2t(this.b)},
$S:0}
C.fjg.prototype={
$0(){return this.a.PW(0,this.b)},
$S:0}
C.fjl.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fjm.prototype={
$0(){var w=this.a
return w.m(new C.fjk(w,this.b))},
$S:0}
C.fjk.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.u(0,new B.N(w,new C.fjj(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fjj.prototype={
$1(d){return d.a},
$S:z+69}
C.fqE.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hpw(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cE)
t=t.h(0,"updatedAt")
u=B.bh(J.k(t==null?"":t))
return new C.oP(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+52}
C.fqF.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fKY.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.I)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbt())q=n===o.gbt()&&p.b>o.gcF()}if(q)v.n(0,s,t)}},
$S:z+30}
C.fKW.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fKX.prototype={
$2(d,e){return e.c.aS(0,d.c)},
$S:z+33}
C.fYk.prototype={
$1(d){return d.aj()},
$S:z+35}
C.fHp.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fZd.prototype={
$1(d){return new C.ZX(this.a,null)},
$S:z+39}
C.cQw.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+41}
C.cQy.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cQB.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQC.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cQA())},
$S:11}
C.cQA.prototype={
$0(){},
$S:0}
C.cQD.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a3e(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cD(s)
p=q.bj(s,new C.cQz(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aiQ(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:280}
C.cQz.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQE.prototype={
$1(d){},
$S:31}
C.cQx.prototype={
$1(d){return new C.ZV(this.b,this.a.gcCV(),null)},
$S:z+44}
C.cQF.prototype={
$1(d){return D.hxY},
$S:z+49}
C.cQs.prototype={
$1(d){var w=null,v=B.l(24),u=B.K(D.a_a,A.r,1),t=x.p
return B.as(B.aG(!1,A.a3,!0,w,B.p(w,B.x(B.a([new B.D(D.bH0,B.x(B.a([B.p(w,D.bWt,A.f,w,w,new B.o(A.aA.j(0.14),w,w,w,w,w,A.a7),w,56,w,w,w,w,w,56),A.aO,D.fOJ,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fBP,A.K,w,w)],t),A.l,w,A.e,A.h,0,A.p),w),A.e2,new B.D(A.qH,B.A(B.a([B.E(B.dV(D.fVP,new C.cQq(d),B.dj(w,w,w,w,w,w,w,w,w,E.nB,w,w,A.co,w,new B.b9(B.l(14),A.a1),D.b68,w,w,w,w)),1),A.as,B.E(B.bI(D.h15,w,new C.cQr(d),B.bo(A.bG,w,w,w,w,w,A.co,w,new B.b9(B.l(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.h,0,w,w),w)],t),A.l,w,A.e,A.N,0,A.p),A.f,w,A.w2,new B.o(D.ahj,w,u,v,D.dc0,w,A.n),w,w,w,N.a1p,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)},
$S:1698}
C.cQq.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.cQr.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.cQt.prototype={
$0(){return J.nT(this.a.d,new C.cQp(this.b))},
$S:0}
C.cQp.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQo.prototype={
$1(d){var w,v,u,t=null,s=B.l(28),r=B.K(D.a_a,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.c0D,A.f,t,t,new B.o(t,t,t,B.l(14),t,D.atP,A.n),t,44,t,t,t,t,t,44),A.bb,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aXx,t,t,t),A.bE,D.h10],q),A.E,t,A.e,A.h,0,A.p),1)],q),A.l,t,A.e,A.h,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dAg[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.azI(u[1],u[2],u[3],new C.cQm(v,d),!1,t))}q.push(A.am)
q.push(D.bAR)
q.push(A.am)
q.push(new C.azI(A.ek,"Delete book","Remove it from this device",new C.cQn(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.E,t,A.e,A.N,0,A.p),A.f,t,t,new B.o(D.ahj,t,r,s,t,t,A.n),t,t,t,A.uH,A.H4,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cQm.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.cQn.prototype={
$0(){B.a5(this.a,!1).N("delete")
return null},
$S:0}
C.cQv.prototype={
$3(d,e,f){var w=null,v=B.l(4),u=B.a([new B.ab(0,A.G,A.w.j(0.45),A.aMK,12)],x.V)
return B.dP(B.eI(A.A,e,B.p(w,B.bu(B.l(4),new B.a4(62,95.81818181818181,new B.dF(A.dD,A.A,A.f,F.apO(d),w),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.r(f,0))},
$S:z+51}
C.cQu.prototype={
$0(){return this.a.c8x()},
$S:0}
C.cQl.prototype={
$0(){return this.a.b0w(0,this.b)},
$S:0}
C.cQk.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cQj.prototype={
$0(){return this.a.DQ(this.b)},
$S:0}
C.cQG.prototype={
$2(d,e){var w=this.a
return w.bGW(J.t(w.d,e))},
$S:42}
C.cPN.prototype={
$0(){var w=this.a
if(w.c!=null)w.Br()},
$S:0}
C.cPM.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3G("Page "+(v.length+1),"",""))},
$S:0}
C.cPP.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cPX.prototype={
$0(){},
$S:0}
C.cPY.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:7}
C.cPQ.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cV.gcu().aO(this.c)},
$S:0}
C.cPO.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cPS.prototype={
$0(){return this.a.Rp(this.b)},
$S:0}
C.cPT.prototype={
$0(){return this.a.Rp(this.b)},
$S:0}
C.cPU.prototype={
$0(){var w=this.a
w.m(new C.cPR(this.b))
w.EE()},
$S:0}
C.cPR.prototype={
$0(){return this.a.c=""},
$S:0}
C.cPW.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cPV(w,d))
w.EE()},
$S:z+68}
C.cPV.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cQ2.prototype={
$2(d,e){if(d)this.a.Br()},
$S:127}
C.cPZ.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Br(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.T(D.fot)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cQ_.prototype={
$0(){return this.a.b_r(this.b,-1)},
$S:0}
C.cQ0.prototype={
$0(){return this.a.b_r(this.b,1)},
$S:0}
C.cQ1.prototype={
$0(){return this.a.c9U(0,this.b)},
$S:0}
C.fPx.prototype={
$1(d){return C.hzK()},
$S:44}
C.fPy.prototype={
$1(d){return null},
$S:31}
C.fv4.prototype={
$1(d){return null},
$S:31}
C.fQw.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:297}
C.fQv.prototype={
$2(d,e){return A.o.aS(e.length,d.length)},
$S:215}
C.fQC.prototype={
$1(d){var w=this.a
return C.hhv(d)===w||C.hEI(d)===w},
$S:z+4}
C.fu6.prototype={
$1(d){return A.a.b_(A.o.v(d),2,"0")},
$S:78}
C.cg2.prototype={
$1(d){return d.length!==0},
$S:3}
C.cg3.prototype={
$2(d,e){return C.hXl(d,e)},
$S:z+72}
C.cg5.prototype={
$1(d){var w,v,u,t=this.a.h(0,d.a)
if(x.f.b(t)){w=J.t(t,"at")
v=B.bh(J.k(w==null?"":w))}else v=null
w=J.t(d.b,"at")
u=B.bh(w==null?"":w)
if(u!=null)w=v==null||u.ca(v)
else w=!1
return w},
$S:1699}
C.fPv.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fPw.prototype={
$1(d){return C.fSg(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fKk.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.yY,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fWs,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I9,w,D.fQp,new C.fKi(d),B.bo(A.c2,w,w,w,A.w,w,A.co,w,w,w,w,w)),A.T,B.em(A.va,w,D.fXK,new C.fKj(d),B.dj(w,w,w,w,w,w,w,w,w,A.aa,w,w,A.co,w,w,R.y2,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKi.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fKj.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fKl.prototype={
$1(d){var w=null
return B.ej(B.a([B.bO(!1,D.fMq,w,w,!0,w,w,w,new C.fKg(d),w,w),B.bI(D.h3p,w,new C.fKh(d),w)],x.p),w,w,w,D.h5m,w,w,w,w,D.fMj,w)},
$S:18}
C.fKg.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.fKh.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.emr.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.emp.prototype={
$0(){return this.a.e=!0},
$S:0}
C.emq.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ems.prototype={
$0(){return this.a.r=!1},
$S:0}
C.emt.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fQB.prototype={
$1(d){return A.a.b_(A.o.v(d),2,"0")},
$S:78}
C.fQx.prototype={
$2$h$w(d,e){var w=null
return new B.bK(A.a5,w,w,B.BT(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.l(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1700}
C.fQz.prototype={
$1(d){var w=null,v=B.l(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.fDc,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:142}
C.fQA.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.iu,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.iu,A.r,1.5),w,w,w,A.a7),w,d,w,w,w,w,w,d),new B.r(-d*0.38,0))],x.p),A.l,w,A.b8,A.h,0,w,w)},
$0(){return this.$1$size(18)},
$S:1701}
C.fQy.prototype={
$2$female$size(d,e){var w=null,v=d?D.ajy:this.a,u=B.K(A.iu,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a7),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.ac,A.t,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.l(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ahA,w,u,w,w,w,A.a7),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1702}
C.h1N.prototype={
$1(d){return new C.aeG(this.a,this.b,null)},
$S:z+73}
C.e8M.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bxt:A.Nr,q=B.K(D.jG.j(0.25),A.r,1),p=B.as(B.p(t,t,A.f,t,t,new B.o(A.c2.j(0.45),t,t,B.l(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.l(15)
o=B.p(t,D.asv,A.f,t,t,new B.o(t,t,B.K(A.c.j(0.5),A.r,1.2),o,B.a([new B.ab(0,A.G,D.jG.j(0.35),A.eu,10)],x.V),D.caR,A.n),t,t,t,t,A.yP,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(Q.a1e,B.x(B.a([p,A.aB,B.A(B.a([o,A.bb,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.m(t,t,s?A.c:D.jG,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bE,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fCm,t,t,t)],u),A.E,t,A.e,A.h,0,A.p),1)],u),A.l,t,A.e,A.h,0,t,t)],u),A.l,t,A.e,A.h,0,A.p),t),B.E(B.it(!0,t,e,A.y,D.aUN,new C.e8L(w,this.c),v,D.an3,t,A.ah,!1),1)],u),A.l,t,A.e,A.h,0,A.p),A.f,t,t,new B.o(r,t,q,A.mK,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:118}
C.e8L.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ae4(w,new C.e8K(this.b,w),null)},
$S:z+75}
C.e8K.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fKo.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fKp.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yY,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.h_4,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I9,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKm(d),B.bo(D.jG,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.T,B.em(A.oP,w,D.Wl,new C.fKn(d),B.dj(w,w,w,w,w,w,w,w,w,A.aa,w,w,A.co,w,w,R.y2,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKm.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fKn.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fKs.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fKt.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yY,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fNt,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I9,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKq(d),B.bo(D.jG,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.T,B.em(A.oP,w,D.Wl,new C.fKr(d),B.dj(w,w,w,w,w,w,w,w,w,A.aa,w,w,A.co,w,w,R.y2,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKq.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fKr.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.fKw.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fKx.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yY,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fUb,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I9,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKu(d),B.bo(D.jG,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.T,B.em(A.oP,w,D.Wl,new C.fKv(d),B.dj(w,w,w,w,w,w,w,w,w,A.aa,w,w,A.co,w,w,R.y2,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKu.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fKv.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.h3k.prototype={
$1(d){return D.hD5},
$S:z+76}
C.erd.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bnM:A.Nr,s=B.K(A.aF.j(0.25),A.r,1),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.aF.j(0.45),v,v,B.l(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.l(15)
q=B.p(v,D.c36,A.f,v,v,new B.o(v,v,B.K(A.c.j(0.5),A.r,1.2),q,B.a([new B.ab(0,A.G,A.c2.j(0.35),A.eu,10)],x.V),D.atU,A.n),v,v,v,v,A.yP,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(Q.a1e,B.x(B.a([r,A.aB,B.A(B.a([q,A.bb,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.m(v,v,u?A.c:S.Nn,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bE,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fzJ,v,v,v)],w),A.E,v,A.e,A.h,0,A.p),1)],w),A.l,v,A.e,A.h,0,v,v)],w),A.l,v,A.e,A.h,0,A.p),v),B.E(B.it(!0,v,e,A.y,D.aUN,new C.erc(this.b),19,D.an3,v,A.ah,!1),1)],w),A.l,v,A.e,A.h,0,A.p),A.f,v,v,new B.o(t,v,s,A.mK,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.erc.prototype={
$2(d,e){var w=D.T1[e]
return new C.agp(w,new C.erb(this.a,w),null)},
$S:z+78}
C.erb.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fSk.prototype={
$0(){return B.hgl(C.iew(this.a))},
$S:316}
C.fSj.prototype={
$0(){var w=C.hhO(this.a)
return"data:image/png;base64,"+A.cV.gcu().aO(w)},
$S:23}
C.fsf.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.ju(d,e),new B.ju(w,e+v),new B.ju(d+f*14,e),new B.ju(w,e-v)],x.J)
B.a39(this.a,C.fJ(4291404327),v)},
$S:715}
C.h3v.prototype={
$1(d){return new C.X4(this.a,null)},
$S:z+80}
C.eua.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eu9())},
$S:28}
C.eu9.prototype={
$0(){},
$S:0}
C.eub.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eu8(w,d))},
$S:1704}
C.eu8.prototype={
$0(){return this.a.x=J.eQ(A.dK.gaU(this.b))},
$S:0}
C.euc.prototype={
$1(d){},
$S:31}
C.etN.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etJ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.etU.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.etV.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eKL)},
$S:0}
C.etW.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etP.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cf)},
$S:0}
C.etQ.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.etR.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.etS.prototype={
$0(){return this.a.as=!1},
$S:0}
C.etT.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.ms(v,A.e6,A.iy)}},
$S:7}
C.etO.prototype={
$0(){var w=this.a,v=w.z,u=C.fT2(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cOD(C.fT2(t))},
$S:0}
C.etL.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.etM.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eu1.prototype={
$0(){return B.a5(this.a,!1).hU()},
$S:0}
C.eu2.prototype={
$0(){var w=this.a
return w.m(new C.eu0(w))},
$S:0}
C.eu0.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eu3.prototype={
$0(){var w=this.a
return w.m(new C.eu_(w,this.b))},
$S:0}
C.eu_.prototype={
$0(){var w=this.b.b
this.a.e.sb1(0,w)
return w},
$S:0}
C.eu4.prototype={
$1(d){var w=this.a
return w.m(new C.etZ(w))},
$S:9}
C.etZ.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eu5.prototype={
$1(d){var w=this.a
return w.m(new C.etY(w))},
$S:9}
C.etY.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eu6.prototype={
$0(){var w=this.a
return w.m(new C.etX(w,this.b))},
$S:0}
C.etX.prototype={
$0(){var w=this.b
this.a.f.sb1(0,w)
return w},
$S:0}
C.eu7.prototype={
$1(d){return this.a.a06()},
$S:2}
C.etK.prototype={
$0(){return this.a.cdJ(this.b)},
$S:0}
C.cjQ.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:328}
C.cjO.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.cjP.prototype={
$1(d){return d.length!==0},
$S:3}
C.fRV.prototype={
boT(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bUc(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.I)(e),++t){s=e[t]
r.cKU($.rk().jo(0,"assets/news_fonts/"+s))}w=2
return B.b(r.n_(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boT(d,e)},
$S:1705}
C.fQb.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQd.prototype={
$1(d){var w=this.a.a
w=A.d.aN(A.d.du(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:78}
C.fQc.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fp(t,A.cr,t,t,t,B.cQ(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.rg,A.bW,t,A.dA,A.bX)
v=this.a
w.mZ(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.frO.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.frP(),B.U(w).k("Y<1>")).gJ(0)},
$S:247}
C.frP.prototype={
$1(d){return d.length!==0},
$S:3}
C.frM.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:225}
C.frN.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:225}
C.cjR.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCE()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hhu(i,new B.F(!0,h,a6,k,a6,a6,q,A.cY,A.bq,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.he1(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aN(n.gcm7(),"\n\n")
d=B.fp(a6,A.cr,a6,a6,a6,B.cQ(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afP(k,q,1.28),j),A.rg,A.bW,a6,A.dA,A.bX)
d.mZ(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hhu(i,new B.F(!0,h,a6,k,a6,a6,q,A.cY,A.bq,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.he1(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afP(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.by(1,A.ba,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.rg,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCD(s,j))
i.push(new B.a4(s,a6,B.x(h,A.E,a6,A.e,A.h,0,A.p),a6))
A.d.u(m,i)}return B.A(m,A.E,a6,A.e,A.h,0,a6,a6)},
$S:342}
C.cjS.prototype={
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
n=o.gaCE()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hhu(f,new B.F(!0,e,a5,i,a5,a5,h,A.cY,A.bq,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.he1(g.length===0?B.a([a6],n):g,l))break}a1=o.afP(i,h,1.28)
a2=new C.cjT(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.KD,new B.a4(v,a5,a4.f,a5),A.KD,a2.$2(l[1],u)],n),A.E,a5,A.e,A.h,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bJp,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.by(1,A.ba,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.rg,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCD(r,g))
f.push(new B.a4(r,a5,B.x(e,A.E,a5,A.e,A.h,0,A.p),a5))
A.d.u(k,f)}return B.x(B.a([new B.a4(a5,q,v,a5),A.ae,B.E(B.A(k,A.E,a5,A.e,A.h,0,a5,a5),1)],n),A.l,a5,A.e,A.h,0,A.p)},
$S:159}
C.cjT.prototype={
$2(d,e){var w=null
return new B.a4(e,w,B.d(d,w,w,w,w,w,w,this.a,A.rg,w,w),w)},
$S:716}
C.h3y.prototype={
$1(d){return new C.X5(this.a,this.b,null)},
$S:z+84}
C.euX.prototype={
$1(d){return d.ld()},
$S:1707}
C.euY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euW(w,d))},
$S:1708}
C.euW.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.euK.prototype={
$0(){return this.a.y=!0},
$S:0}
C.euL.prototype={
$0(){return this.a.y=!1},
$S:0}
C.euR.prototype={
$0(){return B.a5(this.a,!1).eu()},
$S:0}
C.euS.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.K(A.bD,A.r,2.5)
return B.az(w,B.p(w,B.b3(w,w,w,new C.bet(u,v.gazH(),w),A.fS),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.euP(v),new C.euQ(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:37}
C.euP.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:251}
C.euQ.prototype={
$1(d){var w=this.a
w.m(new C.euM(w,d,this.b,this.c))},
$S:234}
C.euM.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.j.D(s.x*r.d,1,6)
w=s.gazH()
r=r.a
v=t.c
u=t.d
s.r=A.j.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.j.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.euT.prototype={
$1(d){var w=this.a
return w.m(new C.euO(w,this.b))},
$S:9}
C.euO.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.euU.prototype={
$1(d){var w=this.a
return w.m(new C.euN(w,d))},
$S:6}
C.euN.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euV.prototype={
$0(){return B.a5(this.b,!1).N(this.a.a.c)},
$S:0}
C.h3O.prototype={
$1(d){return D.hFT},
$S:z+87}
C.f4j.prototype={
$1(d){return this.a.ZF()},
$S:7}
C.f3b.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cV.gcu().aO(v)},
$S:0}
C.f3z.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f3J.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f2V.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f2W.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f2T.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f2U.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f3s.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f3t(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jo(B.r3(q>0.2?F.bXD(r,new B.Er(q,q,A.x)):r),A.t,v)],x.p)
w=t.bn
if(w>0.02)q.push(B.jo(B.d3(B.r3(F.bXD(s.$1(!0),new B.Er(12,12,A.x))),w*0.75),A.t,v))
s=t.b8
if(s!=null&&t.b6>0)q.push(B.ea(v,B.b0(s).j(t.b6),!0))
s=t.bg
if(s!=null&&t.bK>0){s=B.b0(s).j(t.bK)
w=t.bg
w.toString
q.push(new B.bM(new B.o(v,v,v,v,v,new B.bV(D.b3w,1.15,A.x,v,0,B.a([s,B.b0(w).j(0)],x.O),v,v),A.n),A.bi,v,v))}s=t.aL
if(s>0)q.push(new B.bM(new B.o(v,v,v,v,v,new B.bV(D.b3f,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bi,v,v))
s=t.aR
if(s>0)q.push(new B.bM(new B.o(v,v,v,v,v,new B.a8(A.aZ,A.b4,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.dax,v),A.n),A.bi,v,v))
if(t.aI>0){s=t.k1
q.push(B.ao(v,new B.bM(new B.o(v,v,v,v,v,new B.a8(A.aZ,A.b4,A.x,B.a([A.w.j(0),A.w.j(t.aI),A.w.j(t.aI),A.w.j(0)],x.O),D.dmv,v),A.n),A.bi,v,v),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a0
if(s>0)q.push(B.ea(v,A.w.j(s),!0))
s=t.bb
if(s>0)q.push(new B.bM(new B.o(v,v,v,v,v,new B.bV(A.A,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.djj,v),A.n),A.bi,v,v))
t=t.aH
if(t>0)q.push(B.b3(v,v,v,new C.bi4(t,v),A.az))
return new B.an(A.a0,v,A.b2,A.t,q,v)},
$S:63}
C.f3t.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fU(r.b,A.A,q,q,A.cl,A.c0,!0,q,!1,q,q),o=r.a,n=o.b_2(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bm
v=o.aQ
u=v-1
t=o.bH
s=o.c5?-1:1
return B.dP(B.e2(A.A,B.eI(A.A,l,B.fB(A.A,new B.BF(new B.uS(q,q,n,A.ye),p,q),q,B.wm(s,o.cO?-1:1,1),!0),q),v*w,q,q),new B.r(-m*r.d*u/2,-t*r.c*u/2))},
$S:612}
C.f3F.prototype={
$0(){return this.a.m(new C.f3E(this.b,this.c))},
$S:0}
C.f3E.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f3G.prototype={
$1(d){return this.a.m(new C.f3D(this.b,d))},
$S:6}
C.f3D.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f3I.prototype={
$0(){return this.a.m(new C.f3H(this.b,this.c))},
$S:0}
C.f3H.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f2L.prototype={
$1(d){return d.c===this.a.x},
$S:z+99}
C.f2M.prototype={
$1(d){var w=this.a
return w.m(w.gcEi())},
$S:2}
C.f2N.prototype={
$1(d){return this.a.m(new C.f2K())},
$S:2}
C.f2K.prototype={
$0(){},
$S:0}
C.f2O.prototype={
$0(){var w=this.a
return w.m(new C.f2J(w,this.b))},
$S:0}
C.f2J.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f2Q.prototype={
$2(d,e){return A.as},
$S:36}
C.f2P.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.l(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bx
q=B.K(q,A.r,t?2.5:1)
r=B.cT(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.m(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b0,new B.o(w,w,q,s,w,new B.a8(A.aZ,A.b4,A.x,r,w,w),A.n),A.h8,w,94,w,w,w,w,w,70)
return B.az(w,new B.a4(70,w,B.x(B.a([r,A.fC,B.d(v.b,w,1,A.a2,w,w,w,B.m(w,w,t?A.c:A.aE,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f2I(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:79}
C.f2I.prototype={
$0(){var w=this.a
return w.m(new C.f2F(w,this.b))},
$S:0}
C.f2F.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f2R.prototype={
$1(d){var w=this.a
return w.m(new C.f2H(w,d))},
$S:9}
C.f2H.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f2S.prototype={
$1(d){var w=this.a
return w.m(new C.f2G(w,d))},
$S:9}
C.f2G.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f48.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f4f.prototype={
$1(d){var w=this.a
return w.m(new C.f4g(w,d))},
$S:29}
C.f4g.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.dZ(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f4h.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:163}
C.f49.prototype={
$0(){var w=this.a
return w.m(new C.f47(w,this.b))},
$S:0}
C.f47.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.I(0,v)},
$S:0}
C.f4a.prototype={
$0(){var w=this.a
return w.m(new C.f46(w,this.b))},
$S:0}
C.f46.prototype={
$0(){var w,v=this.b.length,u=J.e4(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.u(0,u)},
$S:0}
C.f4b.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f45(v,w.b,w.c,w.d))},
$S:0}
C.f45.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.u(0,w)},
$S:0}
C.f4c.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gti(v))},
$S:0}
C.f4d.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f4e.prototype={
$0(){var w=this.a
return w.m(new C.f44(w))},
$S:0}
C.f44.prototype={
$0(){var w=this.a.db
return A.d.hx(w,0,w.length,0)},
$S:0}
C.f3S.prototype={
$1(d){return d.a===this.a.dy},
$S:231}
C.f3T.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aC5[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azL(new B.ns(new B.be(n,n,n,n),A.aq,new B.bM(new B.o(j,j,j,j,j,new B.a8(A.a5,A.a9,A.x,m,j,j),A.n),A.bi,new C.b1z(l,B.b0(k==null?v.w.x:k),A.j.D(w,12,26),j),j),j),u,q.b,o===p,new C.f3R(r,v),2,i))}return B.bZ(A.bH,h,A.br,j,7,7)},
$S:174}
C.f3R.prototype={
$0(){var w=this.b
return w.m(new C.f3M(this.a,w))},
$S:0}
C.f3M.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f3U.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:151}
C.f3X.prototype={
$0(){var w=this.a
return w.m(new C.f3Q(w))},
$S:0}
C.f3Q.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f3Y.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f3Z.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f4_.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f40.prototype={
$0(){var w=this.a
return w.m(new C.f3P(w))},
$S:0}
C.f3P.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f41.prototype={
$0(){var w=this.a
return w.m(new C.f3O(w))},
$S:0}
C.f3O.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f42.prototype={
$0(){var w=this.b
return w.m(new C.f3N(this.a,w))},
$S:0}
C.f3N.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f43.prototype={
$1(d){return this.a.fx=d},
$S:151}
C.f3V.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f3W.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f3w.prototype={
$0(){var w=this.a
return w.m(new C.f3v(w))},
$S:0}
C.f3v.prototype={
$0(){var w=this.a
w.p4=null
w.b6o()},
$S:0}
C.f3x.prototype={
$0(){var w=this.a
return w.m(new C.f3u(w,this.b))},
$S:0}
C.f3u.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f3y.prototype={
$0(){var w=this.a
return w.m(w.gcuF())},
$S:0}
C.f3o.prototype={
$0(){var w=this.a
return w.m(new C.f3n(w))},
$S:0}
C.f3n.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f3p.prototype={
$0(){var w=this.a
return w.m(new C.f3m(w))},
$S:0}
C.f3m.prototype={
$0(){var w=this.a
w.aI=0.55
w.a0=Math.max(w.a0,0.12)},
$S:0}
C.f3q.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.djK[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.azL(new B.ns(new B.be(p,p,p,p),A.aq,new B.a4(1/0,1/0,new B.BF(new B.uS(o,o,v.b_2(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.ye),B.fU(u,A.A,140,o,A.cl,A.c0,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f3l(v,s),3,n))}return B.bZ(A.bH,m,A.br,o,10,8)},
$S:174}
C.f3l.prototype={
$0(){var w=this.a
return w.m(new C.f3k(w,this.b))},
$S:0}
C.f3k.prototype={
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
C.f32.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f33.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f34.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f35.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f36.prototype={
$1(d){return this.a.aL=d},
$S:6}
C.f37.prototype={
$1(d){return this.a.a0=d},
$S:6}
C.f38.prototype={
$1(d){return this.a.bb=d},
$S:6}
C.f39.prototype={
$1(d){return this.a.aI=d},
$S:6}
C.f3a.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f2o.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f2p.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f2q.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f2r.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f2s.prototype={
$0(){var w=this.a
return w.m(new C.f2n(w))},
$S:0}
C.f2n.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f2t.prototype={
$1(d){return this.a.b8=d},
$S:151}
C.f2u.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.f2X.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f2Y.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f2Z.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f3_.prototype={
$1(d){return this.a.bg=d},
$S:151}
C.f30.prototype={
$1(d){return this.a.bK=d},
$S:6}
C.f2y.prototype={
$1(d){return this.a.aQ=d},
$S:6}
C.f2z.prototype={
$1(d){return this.a.bm=d},
$S:6}
C.f2A.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f2B.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.f2C.prototype={
$0(){var w=this.a
return w.m(new C.f2x(w))},
$S:0}
C.f2x.prototype={
$0(){var w=this.a
return w.c8=A.j.F(w.c8+90+180,360)-180},
$S:0}
C.f2D.prototype={
$0(){var w=this.a
return w.m(new C.f2w(w))},
$S:0}
C.f2w.prototype={
$0(){var w=this.a
return w.c5=!w.c5},
$S:0}
C.f2E.prototype={
$0(){var w=this.a
return w.m(new C.f2v(w))},
$S:0}
C.f2v.prototype={
$0(){var w=this.a
return w.cO=!w.cO},
$S:0}
C.f3r.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.itN(v,w.p4)},
$S:0}
C.f3j.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bxN:B.fU(v,A.A,w,w,A.cl,A.c0,!1,w,!1,w,w)
return C.fQj(d.length===0?"rounded":d,u,e)},
$S:115}
C.f3f.prototype={
$0(){var w=this.a
return w.m(new C.f3e(w))},
$S:0}
C.f3e.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f3g.prototype={
$0(){var w=this.b
return w.m(new C.f3d(this.a,w))},
$S:0}
C.f3d.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f3h.prototype={
$0(){var w=this.b
return w.m(new C.f3c(this.a,w))},
$S:0}
C.f3c.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f3i.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.j.D(w.ay,0,1-d)
w.ch=A.j.D(w.ch,0,0.95)},
$S:6}
C.f3C.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.l(20),p=B.a([new B.ab(-4,A.G,A.b7.j(0.35),A.J,30)],x.V),o=B.l(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.en(n.co3(),n.r))
l.push(new C.JF(n.cBd(),!1,!1,t))
o=B.bR(0,B.bu(o,new B.en(new B.an(A.a0,t,A.b2,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.l(8)
return B.p(t,new B.an(A.a0,t,A.ac,A.t,B.a([o,B.ao(t,B.az(A.c1,new B.bM(new B.o(t,t,B.K(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bi,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f3B(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:176}
C.f3B.prototype={
$1(d){var w=this.a
return w.m(new C.f3A(w,d,this.b,this.c))},
$S:19}
C.f3A.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.j.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.j.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f3L.prototype={
$0(){var w=this.a
return w.m(new C.f3K(w,this.b))},
$S:0}
C.f3K.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f31.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).hU()},
$S:0}
C.f4i.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a4(Math.min(s*0.4,460),t,B.x(B.a([w.b1Z(),B.E(B.as(w.b51(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.h,0,A.p),t),B.E(B.x(B.a([B.E(w.aSV(),1),w.aOX()],v),A.l,t,A.e,A.h,0,A.p),1)],v),A.l,t,A.e,A.h,0,t,t)}u=A.j.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b1Z(),new B.D(A.hM,B.as(s.b51(u),t,t,t),t),B.E(s.aSV(),1),s.aOX()],x.p),A.l,t,A.e,A.h,0,A.p)},
$S:585}
C.fNA.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ev(k,!1,j,A.aH,"",4280640491,i,l,m,"",h,C.bDx(),null,"","",0,!1,"",0,D.bl,4280172719,2,d,0,0,"",D.cv,D.d1,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bq,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bq,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bq,A.O)},
$S:z+28}
C.fNz.prototype={
$3(d,e,f){var w=this,v=C.bDx(),u=w.b?A.H:A.cD,t=w.c?A.cI:A.bq
return C.ev(w.d,!1,f,A.aH,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bl,4280172719,2,d,0,w.f,w.e,D.cv,D.d1,0.82,0.09,w.a)},
$S:z+29}
C.cll.prototype={
$1(d){return B.w(d)},
$S:17}
C.fVq.prototype={
$0(){return this.a},
$S:z+14}
C.fA_.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+31}
C.fA0.prototype={
$2(d,e){return J.ct(e)},
$S:z+32}
C.fVs.prototype={
$0(){return B.a([],x.o)},
$S:z+14}
C.fVv.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fVw.prototype={
$0(){return A.d.gH(D.xc)},
$S:z+34}
C.fVo.prototype={
$1(d){return d.a},
$S:z+15}
C.fVr.prototype={
$1(d){return d.a},
$S:z+15}
C.fTl.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fTm.prototype={
$1(d){return d.length!==0},
$S:3}
C.fTn.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fNE.prototype={
$0(){return C.cE()},
$S:23}
C.fNH.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cv,s=u?n:0
return C.ev(j,l,v,A.aH,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bl,4280172719,2,d,s,0,"",t,D.d1,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dr,!1,null,0,"","",A.bq,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dr,!1,null,0,"",j,A.bq,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dr,!1,null,0,j,k,A.bq,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bq,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bq,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dr,!1,k,l,"",m,A.bq,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,null,0,"",k,A.bq,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,D.dr,!1,j,k,"",l,A.bq,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,!1,k,0,l,m,A.bq,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bn,j,k,l,m,"",n,A.bq,A.a8)},
$S:z+27}
C.fNG.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ev(A.bn,!1,4279310375,A.aH,"",i,24,A.bq,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cv,D.fi,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+37}
C.fNF.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cv,t=v?j:0
return C.ev(A.bn,!1,4279310375,A.aH,"",4280640491,24,A.bq,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bl,4280172719,2,"",t,0,"",u,D.lV,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.r5,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+38}
C.fND.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+16}
C.fQ4.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hAO.c3(0,A.a.i(s.w).toLowerCase(),new C.fQ2(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c3(0,s.r,new C.fQ3(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bA(t.e,new B.brf(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1711}
C.fQ2.prototype={
$0(){return F.aPW(this.a.w)},
$S:201}
C.fQ3.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bCp("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hE(2,w,A.ca,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:201}
C.frI.prototype={
$1(d){return d.a==="bio"},
$S:z+16}
C.frJ.prototype={
$1(d){return d.a},
$S:z+17}
C.frK.prototype={
$1(d){return d.b},
$S:z+18}
C.h4_.prototype={
$1(d){return D.hG8},
$S:z+42}
C.faG.prototype={
$0(){return this.a.x=C.i5T(this.b,this.c.b)},
$S:0}
C.faH.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.faE.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:420}
C.faF.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:420}
C.faD.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bU(A.av,null,new C.fay(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.km,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.faz(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hHq(o,m.cPp(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.faA(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.fay.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.faC(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.bdT,A.f,p,p,D.b8A,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.DA:D.DH,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a4(64,64,C.fQj(v,i.b70(h),u),p)))}t=B.kZ(1,m,4,10,10,p,A.e_,!0)
if(!l)return B.bm(!0,new B.D(Ac.yW,t,p),!0,!1,A.ag,!0,!0)
s=new C.faB(i,d)
m=B.aF(d,A.c_,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Is[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,m.a.b*0.85),B.c9(B.x(B.a([D.fSy,A.T,t,A.e2,D.fdk,A.aw,D.h2K,A.T,B.kZ(1.15,l,3,10,10,p,A.e_,!0)],n),A.E,p,A.e,A.h,0,A.p),A.t,p,A.y,p,Ac.yW,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.faC.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.l(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bd:A.dq
return B.az(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.K(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hO,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.fax(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1712}
C.fax.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.faB.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.l(12),r=t?A.bL:A.bx
r=B.K(r,A.r,t?2.5:1)
w=B.l(10)
u=B.E(B.p(v,B.bu(w,d.length===0?B.p(v,D.at1,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.du(!0,new C.Op(u.Gg(d),!0,!1,v),v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.az(v,B.x(B.a([u,A.aw,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,t?A.bL:A.aa,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.h,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.faw(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:115}
C.faw.prototype={
$0(){B.a5(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.faz.prototype={
$0(){var w=this.a
return w.w=w.w.Gg("")},
$S:0}
C.faA.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fam.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.fan.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.fap.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.faq.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.far.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.fas.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.fao(w,d))},
$S:2}
C.fao.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.fat.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.faU.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.faV.prototype={
$0(){var w=this.a
return w.m(new C.faT(w))},
$S:0}
C.faT.prototype={
$0(){return this.a.e=null},
$S:0}
C.faW.prototype={
$0(){var w=this.a
return w.m(new C.faS(w))},
$S:0}
C.faS.prototype={
$0(){return this.a.x=null},
$S:0}
C.faY.prototype={
$1(d){var w=this.a
return w.m(new C.faR(w,d))},
$S:35}
C.faR.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.faZ.prototype={
$1(d){var w=this.a
return w.m(new C.faQ(w,d))},
$S:35}
C.faQ.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fb_.prototype={
$0(){var w=this.a
return w.m(new C.faP(w))},
$S:0}
C.faP.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.fb0.prototype={
$1(d){var w=this.a
return w.m(new C.faO(w,d))},
$S:35}
C.faO.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.fb1.prototype={
$1(d){var w=this.a
return w.m(new C.faN(w,d))},
$S:35}
C.faN.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.fb2.prototype={
$0(){var w=this.a
return w.m(new C.faM(w))},
$S:0}
C.faM.prototype={
$0(){var w=this.a
return w.w=w.w.Gg("")},
$S:0}
C.fb3.prototype={
$0(){var w=this.a
return w.m(new C.faL(w,this.b))},
$S:0}
C.faL.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fb4.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a4(u,null,w.bTa(D.a6t[v]),null))
return B.bZ(A.bH,t,A.br,null,8,8)},
$S:174}
C.faX.prototype={
$1(d){var w=this.a
return w.m(new C.faK(w,d))},
$S:9}
C.faK.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.fau.prototype={
$0(){var w=this.a
return w.m(new C.fav(w,this.b,this.c))},
$S:0}
C.fav.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.I(0,w)},
$S:0}
C.faJ.prototype={
$0(){var w=this.a
return w.m(new C.faI(w,this.b))},
$S:0}
C.faI.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h3Z.prototype={
$1(d){return new C.a1J(this.a,this.b,null)},
$S:z+43}
C.faf.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.fag.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.fah.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aM3?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.fai.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.faj.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.fae(w,d))},
$S:2}
C.fae.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.fak.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.fal.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.az(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hl(A.bA,w.length),A.aP))},
$S:0}
C.fzg.prototype={
$1(d){return d.a===this.a},
$S:231}
C.eqD.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazM(),n=o.x
n===$&&B.c()
w=B.l(16)
v=p.a.c
u=v?D.d3X:D.dmc
t=A.wq.j(v?1:0.55)
v=p.a.c
t=B.K(t,A.r,v?1.8:1.2)
s=A.wq.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ab(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.l(15)
n=B.bR(0,B.b3(q,q,q,new C.bkl(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bR(0,B.bUt(B.eI(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a5,A.a9,A.x,B.a([A.L,D.blQ.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.r(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bu(s,new B.an(A.a0,q,A.ac,A.t,B.a([n,o,B.as(B.x(B.a([B.X(p.a.c?A.ec:A.mo,A.wq,q,q,q,20),A.aw,new B.dF(A.dW,A.A,A.f,B.og(A.jV,D.fLN,new C.eqC()),q)],r),A.l,q,A.e,A.N,0,A.p),q,q,q),B.ao(q,B.p(q,D.fIc,A.f,q,q,new B.o(A.wq,q,q,B.l(6),q,q,A.n),q,q,q,q,O.anN,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ay,A.aD,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.eqC.prototype={
$1(d){return D.c8X.aG(0,d)},
$S:73}
C.fVx.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fVy.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:231}
C.fVz.prototype={
$2(d,e){return A.o.aS(e.a.length,d.a.length)},
$S:1713}
C.fVA.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:13}
C.fVt.prototype={
$1(d){return d.a},
$S:z+17}
C.fVu.prototype={
$1(d){return d.b},
$S:z+18}
C.h3c.prototype={
$1(d){return new C.a07(this.a,this.b,null)},
$S:z+45}
C.dtj.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dtk.prototype={
$1(d){return d.a===this.a.gak7()},
$S:z+10}
C.dtl.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dto.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dtp.prototype={
$0(){var w=this.a
return w.m(new C.dtn(w,this.b))},
$S:0}
C.dtn.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dtq.prototype={
$1(d){var w=this.a
return w.m(new C.dtm(w,d))},
$S:9}
C.dtm.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqB.prototype={
$1$2(d,e,f){var w=B.bp(d,!0,f)
A.d.e0(w,this.a)
return B.cX(w,0,B.dC(e,"count",x.S),B.U(w).c).dq(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1714}
C.fo0.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ev(A.bn,!1,4279310375,A.aH,"",i,24,A.bq,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.fi,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cv,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+46}
C.fo2.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ev(A.K,!1,this.b.d,A.aH,"",4280640491,i,A.bq,A.cY,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bl,4280172719,2,d,l,0,"",D.nd,D.d1,g,e,f)},
$S:z+47}
C.fo1.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xh(0,"twinkle")
w=t===D.bl?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.nd,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+48}
C.fo_.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fOL.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fOM.prototype={
$0(){return A.d.gH(D.IB)},
$S:z+50}
C.fON.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fq8.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fV_.prototype={
$1(d){var w=2450411,v=4281908728
C.dA(d,C.dB(4280171146,1,0,D.bl,w,0,0.52,0,0))
C.dA(d,C.dB(v,1,0,D.bl,w,0,0.04,0.48,0))
C.dA(d,C.dB(4294047225,0.38,0,D.bl,w,0,0.48,0.52,0.62))
C.dA(d,C.dB(v,0.006,0,D.fP,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fV0.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dA(d,C.dB(4280172719,0.8,0,D.bl,w,0,0.36,0.58,0.1))
C.dA(d,C.dB(v,0.64,0,D.bl,w,0,0.28,0.64,0.18))
C.dA(d,C.dB(4282090230,0.44,0,D.bl,w,0,0.2,0.7,0.28))
C.dA(d,C.dB(v,0.006,0,D.fP,v,3,0.22,0.08,0.12))
C.dA(d,C.dB(u,0.004,0,D.fP,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fV1.prototype={
$1(d){var w=2450411,v=4279548070
C.dA(d,C.dB(4279080072,0.11,0,D.bl,w,0,1,0,0))
C.dA(d,C.dB(4279310375,0.11,0,D.bl,w,0,1,0,0.89))
C.dA(d,C.dB(856528008,0.72,0,D.kk,w,0,0.28,0.72,0.14))
C.dA(d,C.dB(1426953352,0.2,0,D.kk,w,0,0.2,0.78,0.22))
C.dA(d,C.dB(v,0.004,0,D.fP,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fVc.prototype={
$1(d){var w=2450411
C.dA(d,C.dB(4279203438,0.55,0,D.kk,w,0,0.5,0.55,-0.05))
C.dA(d,C.dB(4280171146,0.5,0,D.kk,w,0,0.45,0.62,0.35))
C.dA(d,C.dB(4280640491,0.4,0.3,D.kj,w,0,0.35,0.68,0.55))
C.dA(d,C.dB(571438702,0.12,0,D.bl,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fVh.prototype={
$1(d){var w=4280472558
C.dA(d,C.dB(4279310375,0.75,-0.4,D.kj,2450411,0,0.75,-0.15,0.35))
C.dA(d,C.dB(w,0.55,0,D.bl,2450411,0,0.06,0.42,0.38))
C.dA(d,C.dB(w,0.006,0,D.fP,w,3,0.35,0.08,0.08))
C.dA(d,C.dB(2282478,0.12,0,D.bl,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVi.prototype={
$1(d){var w=2450411,v=4280640491
C.dA(d,C.dB(3423541034,0.48,0,D.bl,w,0,1,0,0))
C.dA(d,C.dB(v,0.12,-0.08,D.kk,w,0,1.1,-0.05,0.38))
C.dA(d,C.dB(858088427,0.35,0,D.bl,w,0,0.42,0.55,0.05))
C.dA(d,C.dB(v,0.006,0,D.fP,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fVj.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d2O[w]
u=Date.now()
t=$.je
$.je=t+1
v=new C.eS("design_"+(""+1000*u+"_"+t),D.fi,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bq,A.aH,4279310375,A.bn,null,D.bl,v,4294967295,2,0,!1,"",0,D.cv,0,"","","","","",!1,0)
u=$.Lj
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dA(d,C.dB(s,0.006,0,D.fP,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fVk.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ap(A.ma,A.dy,w/3).l()
u=Date.now()
t=$.je
$.je=t+1
v=new C.eS("design_"+(""+1000*u+"_"+t),D.fi,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bq,A.aH,4279310375,A.bn,null,D.Ej,v,2450411,0,0,!1,"",0,D.cv,0,"","","","","",!1,0)
u=$.Lj
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dA(d,C.dB(s,0.006,0,D.fP,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fVl.prototype={
$1(d){var w=4294967295
C.dA(d,C.dB(4280640491,1,0,D.bl,2450411,0,0.42,0,0))
C.dA(d,C.dB(4280110808,1.1,1.57,D.kj,2450411,0,0.18,0.35,-0.05))
C.dA(d,C.dB(w,0.006,0,D.fP,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVm.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dA(d,C.dB(w,0.1,0,D.bl,v,0,1,0,0))
C.dA(d,C.dB(u,0.012,0,D.bl,v,0,1,0,0.1))
C.dA(d,C.dB(u,0.006,0,D.fP,u,3,0.42,0.06,0.14))
C.dA(d,C.dB(403446057,0.68,0,D.kk,v,0,0.22,0.72,0.18))
C.dA(d,C.dB(w,0.1,0,D.bl,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVn.prototype={
$1(d){var w=4278630100
C.dA(d,C.dB(4279310375,1.2,0.15,D.kk,2450411,0,0.55,-0.2,-0.1))
C.dA(d,C.dB(w,1.1,0.15,D.bl,2450411,0,0.08,0.15,-0.05))
C.dA(d,C.dB(1120295,0.18,0,D.bl,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fV2.prototype={
$1(d){var w=4292617766
C.dA(d,C.dB(4282714634,0.65,-0.2,D.kj,2450411,0,0.65,-0.1,0.45))
C.dA(d,C.dB(w,0.5,-0.15,D.kj,2450411,0,0.5,0.05,0.55))
C.dA(d,C.dB(w,0.006,0,D.fP,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fV3.prototype={
$1(d){var w=2450411
C.dA(d,C.dB(4278413729,0.35,3.14,D.kj,w,0,0.45,-0.05,0.7))
C.dA(d,C.dB(4278355143,0.3,3.14,D.kj,w,0,0.4,0.25,0.75))
C.dA(d,C.dB(4279150057,0.32,3.14,D.kj,w,0,0.5,0.55,0.72))
C.dA(d,C.dB(863884284,0.22,0,D.f1,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fV4.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dA(d,C.dB(w,0.14,0,D.bl,v,0,0.14,0.02,0.02))
C.dA(d,C.dB(2282478,0.14,0,D.bl,u,3,0.14,0.84,0.02))
C.dA(d,C.dB(w,0.28,0,D.kk,v,0,0.35,-0.08,0.78))
C.dA(d,C.dB(u,0.22,0.5,D.kj,v,0,0.3,0.72,0.78))
C.dA(d,C.dB(w,0.006,0,D.fP,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fV5.prototype={
$1(d){var w=4293571336,v=1156231944
C.dA(d,C.dB(1841431,0.92,0,D.bl,w,3,0.92,0.04,0.04))
C.dA(d,C.dB(v,0.15,0,D.kj,2450411,0,0.15,0.02,0.02))
C.dA(d,C.dB(v,0.15,3.14,D.kj,2450411,0,0.15,0.83,0.83))
C.dA(d,C.dB(w,0.004,0,D.fP,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fV6.prototype={
$1(d){var w=4279080072,v=2450411
C.dA(d,C.dB(w,0.14,0,D.lv,v,0,0.14,0.68,0.18))
C.dA(d,C.dB(4279548070,0.14,0,D.lv,v,0,0.14,0.78,0.28))
C.dA(d,C.dB(4281193663,0.14,0,D.lv,v,0,0.14,0.68,0.38))
C.dA(d,C.dB(4284410580,0.14,0,D.lv,v,0,0.14,0.78,0.48))
C.dA(d,C.dB(4279203438,0.14,0,D.lv,v,0,0.14,0.68,0.58))
C.dA(d,C.dB(w,0.006,0,D.fP,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fV7.prototype={
$1(d){var w=2450411,v=4280640491
C.dA(d,C.dB(3708753706,0.42,0,D.bl,w,0,1,0,0))
C.dA(d,C.dB(v,0.06,-0.05,D.kk,w,0,1,0,0.38))
C.dA(d,C.dB(859356664,0.25,0,D.f1,w,0,0.25,0.7,0.08))
C.dA(d,C.dB(v,0.006,0,D.fP,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fV8.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ap(A.ma,A.dy,w/3).l()
u=Date.now()
t=$.je
$.je=t+1
v=new C.eS("design_"+(""+1000*u+"_"+t),D.fi,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bq,A.aH,4279310375,A.bn,null,D.Ej,v,2450411,0,0,!1,"",0,D.cv,0,"","","","","",!1,0)
u=$.Lj
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dA(d,C.dB(4280172719,0.08,0,D.bl,2450411,0,1,0,0))
C.dA(d,C.dB(s,0.006,0,D.fP,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fV9.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.je
$.je=u+1
u=new C.eS("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bq,A.aH,s,A.bn,null,D.fP,t,t,0,0,!1,"",0,D.cv,0,"","","","","",!1,0)
v=$.Lj
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dA(d,C.dB(s,0.75,0,D.bl,2450411,0,0.22,0.72,0.1))
C.dA(d,C.dB(872415231,0.16,0,D.bl,2450411,0,0.16,0.75,0.15))
C.dA(d,C.dB(s,0.006,0,D.fP,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVa.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dA(d,C.dB(4674921,0.9,0,D.bl,4287931320,2,0.9,0.05,0.05))
C.dA(d,C.dB(w,0.08,0,D.bl,v,0,0.08,0.03,0.03))
C.dA(d,C.dB(u,0.08,0,D.bl,v,0,0.08,0.89,0.03))
C.dA(d,C.dB(u,0.08,0,D.bl,v,0,0.08,0.03,0.89))
C.dA(d,C.dB(w,0.08,0,D.bl,v,0,0.08,0.89,0.89))
C.dA(d,C.dB(w,0.004,0,D.fP,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fVb.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.je
$.je=t+1
t=new C.eS("design_"+(""+1000*u+"_"+t),D.fi,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bq,A.aH,r,A.bn,null,D.bl,4294967295,4280640491,2,0,!1,"",0,D.cv,0,"","","","","",!1,0)
u=$.Lj
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ap(A.dh,A.ct,w/2).l()
t=Date.now()
s=$.je
$.je=s+1
u=new C.eS("design_"+(""+1000*t+"_"+s),D.fi,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bq,A.aH,r,A.bn,null,D.bl,u,q,0,0,!1,"",0,D.cv,0,"","","","","",!1,0)
v=$.Lj
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dA(d,C.dB(4280171146,1,0,D.bl,q,0,0.48,0,0))
C.dA(d,C.dB(4280172719,1.1,1.57,D.kj,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fVd.prototype={
$1(d){var w=2450411
C.dA(d,C.dB(870995980,0.55,0.45,D.kk,w,0,0.55,-0.12,-0.08))
C.dA(d,C.dB(856996006,0.45,0.45,D.kk,w,0,0.45,0.62,-0.05))
C.dA(d,C.dB(16777215,0.38,0.45,D.kk,4293548044,5,0.38,0.52,0.12))
C.dA(d,C.dB(585783308,0.3,0.45,D.kk,w,0,0.3,0.56,0.16))
C.dA(d,C.dB(4279548070,0.06,0,D.bl,w,0,0.16,0.38,0.04))
C.dA(d,C.dB(1156208652,0.28,0,D.f1,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVe.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dA(d,C.dB(w,1,0,D.bl,v,0,0.07,0,0))
C.dA(d,C.dB(u,0.1,0,D.bl,t,1,0.46,0.48,0.14))
C.dA(d,C.dB(u,0.1,0,D.bl,t,1,0.46,0.48,0.28))
C.dA(d,C.dB(u,0.1,0,D.bl,t,1,0.46,0.48,0.42))
C.dA(d,C.dB(s,0.08,0,D.f1,v,0,0.08,0.5,0.16))
C.dA(d,C.dB(w,0.08,0,D.f1,v,0,0.08,0.5,0.3))
C.dA(d,C.dB(4279548070,0.08,0,D.f1,v,0,0.08,0.5,0.44))
C.dA(d,C.dB(16777215,0.32,0.45,D.kk,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fVf.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dA(d,C.dB(4294047225,0.08,0,D.bl,t,2,0.1,0.02,0.06))
C.dA(d,C.dB(s,0.42,0,D.bl,2450411,0,0.36,0.58,0.18))
C.dA(d,C.dB(872415231,0.12,0,D.bl,2450411,0,0.28,0.62,0.24))
C.dA(d,C.dB(16777215,0.28,0,D.f1,s,4,0.32,0,0.72))
C.dA(d,C.dB(r,0.006,0,D.fP,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.je
$.je=u+1
u=new C.eS("design_"+(""+1000*v+"_"+u),D.fi,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bq,A.aH,4279310375,A.bn,null,D.f1,16777215,t,2,0,!1,"",0,D.cv,0,"","","","","",!1,0)
v=$.Lj
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fVg.prototype={
$1(d){var w=2450411,v=4279548070
C.dA(d,C.dB(3423541034,0.55,0,D.bl,w,0,1,0,0))
C.dA(d,C.dB(4009754623,0.56,0.45,D.kk,w,0,0.56,0.22,0.18))
C.dA(d,C.dB(3439329279,0.44,0.45,D.kk,w,0,0.44,0.28,0.24))
C.dA(d,C.dB(v,0.07,0,D.bl,w,0,0.22,0.34,0.62))
C.dA(d,C.dB(v,1,0,D.bl,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fMB.prototype={
$1(d){return d.a===this.a},
$S:z+19}
C.fMC.prototype={
$0(){return A.d.gH($.bHe())},
$S:z+53}
C.fyz.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.fyy.prototype={
$1(d){return C.idr(d,this.a,this.b)},
$S:z+54}
C.fVG.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wm(1.0375,1.01875,1)
return new B.fY(v,u,new C.aV_(B.i2Q(A.w_,C.idu(w.c,w.d,v,u),t)))},
$S:423}
C.e40.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:7}
C.e4_.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=this.a,s=t.d,r=t.a.d?0.45:1
return B.jo(new B.an(A.a0,w,A.b2,A.t,B.a([new B.bM(new B.o(w,w,w,w,w,new B.bV(A.Fx,1.2,A.x,w,0,u.d,w,w),A.n),A.bi,w,w),new B.en(B.b3(w,w,w,new C.bh9(u.a,s,r,s),A.az),w),B.as(new B.k5(s,new C.e3Z(t,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:305}
C.e3Z.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ei.aB(0,A.j.D(e/1.4,0,1)),p=A.j.D(e/0.9,0,1),o=A.j.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ab(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.u(j,B.a([B.p(r,B.hZ(B.fU(i,A.A,r,r,A.cl,A.c0,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.h1(A.A,0,6.283185307179586,A.x,t,r,new B.mN(e*0.8)),A.a7),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a4(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bu5(i,e,B.d(v,r,r,r,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.J,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a4(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d3(B.dP(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a5,A.a9,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a4(r,m*0.022,r,r),B.d(w.a.c.gaNz(),r,r,r,r,r,r,B.m(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.N,0,A.p),new B.r(0,(1-o)*m*0.03)),o))
return B.d3(B.e2(A.A,new B.D(new B.Q(l,0,l,0),B.x(j,A.l,r,A.e,A.N,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:101}
C.f9s.prototype={
$1(d){var w=this.b
return new B.a8(A.ay,A.aD,A.x,this.a.c,B.a([0,A.j.D(w-0.1,0,1),A.j.D(w,0,1),A.j.D(w+0.1,0,1),1],x.x),null).aG(0,d)},
$S:73}
C.cfE.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.l(14),t=g?A.bL:A.bx
t=B.K(t,A.r,g?2.5:1)
w=g?B.a([new B.ab(0,A.G,A.i9.j(0.4),A.J,14)],x.V):v
w=B.cT(v,B.bu(B.l(12),d,A.aq),v,v,A.b0,new B.o(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v,v)
return B.az(v,new B.a4(112,v,B.x(B.a([w,A.fC,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,g?A.bL:A.aa,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.h,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1715}
C.cfF.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gg(""))},
$S:0}
C.cfG.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.du(!0,new C.Op(v.Gg(u),!0,!1,null),null),d.b,new C.cfH(w,this.c,d),v.a===u)},
$S:z+55}
C.cfH.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hHq(u.b,t.c.Gg(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h1x.prototype={
$1(d){return new C.a_F(this.a,null)},
$S:z+56}
C.diy.prototype={
$0(){var w=this.a
w.d=w.gwl().bfi("data:"+this.b+";base64,"+A.cV.gcu().aO(this.c));++w.r},
$S:0}
C.diD.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.diE.prototype={
$0(){var w=this.a
return w.m(new C.diC(w))},
$S:0}
C.diC.prototype={
$0(){return this.a.r++},
$S:0}
C.diF.prototype={
$1(d){var w=this.a
return w.m(new C.diB(w,d))},
$S:2}
C.diB.prototype={
$0(){var w=this.a
return w.d=w.gwl().aGd(this.b)},
$S:0}
C.diG.prototype={
$0(){var w=this.a
return w.m(new C.diA(w))},
$S:0}
C.diA.prototype={
$0(){var w=this.a
return w.d=w.gwl().bfi("")},
$S:0}
C.diH.prototype={
$1(d){var w=this.a
return w.m(new C.diz(w,d))},
$S:2}
C.diz.prototype={
$0(){var w=this.a
return w.d=w.gwl().bfo(this.b)},
$S:0}
C.diI.prototype={
$0(){var w=this.a
w=w.gwl().bfo(w.gazN().a.a)
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.h1w.prototype={
$1(d){var w={}
w.a=this.a
return new B.e1(new C.h1v(w),null)},
$S:20}
C.h1v.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cN(new B.aY(0,1/0,0,B.aF(d,A.c_,x.w).w.a.b*0.85),B.c9(B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.h_K,A.aw,D.h0_,A.aB,new C.b1w(v.a,new C.h1u(v,e,d),!0,w)],x.p),A.E,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b98,w,w,w,w,A.Op,w,w,w)},
$S:164}
C.h1u.prototype={
$1(d){this.b.$1(new C.h1t(this.a,d))
B.a5(this.c,!1).N(d)},
$S:z+57}
C.h1t.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h3Y.prototype={
$1(d){return D.hAd},
$S:z+58}
C.dpl.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dpm.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).N(this.b)
return null},
$S:0}
C.dpn.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).N(v)}},
$S:0}
C.fSd.prototype={
$1(d){var w=this.b
return new B.a8(A.ay,A.aD,A.x,B.a([A.L,B.ap(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.j.D(w-0.12,0,1),A.j.D(w,0,1),A.j.D(w+0.12,0,1)],x.x),null).aG(0,d)},
$S:73}
C.dif.prototype={
$3(d,e,f){var w,v=this,u=new B.aI($.S().r,A.aj,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.cc(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cc(w,q+p,w,q+p*1.2))
u.E(new B.DP(B.bW(new B.r(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.ag(u,v.d)
s.ag(u,v.e)
p=B.L()
p.r=B.ap(v.a.d,A.c,0.6).gp(0)
s.O(new B.r(w,o),2.2,p)},
$S:438}
C.fSh.prototype={
$2(d,e){return A.j.aS(d.c,e.c)},
$S:z+59}
C.fKA.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fKB.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.yY,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fIu,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.I9,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fKy(d),B.bo(A.c2,w,w,w,A.c,w,A.co,w,w,w,w,w)),A.T,B.em(A.oP,w,D.Wl,new C.fKz(d),B.dj(w,w,w,w,w,w,w,w,w,A.aa,w,w,A.co,w,w,R.y2,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fKy.prototype={
$0(){B.a5(this.a,!1).N("continue")
return null},
$S:0}
C.fKz.prototype={
$0(){B.a5(this.a,!1).N("new")
return null},
$S:0}
C.clj.prototype={
$1(d){return d.hQ()},
$S:z+60}
C.clk.prototype={
$1(d){return d.aj()},
$S:z+61}
C.cli.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.j.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.j.M(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.j.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.i97(b2.h(0,"type"))
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
n=A.aEb[A.o.D(b4,0,8)]
m=D.d62[A.o.D(w,0,1)]
l=C.icP(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.j.M(k)
if(k==null)k=4279310375
j=A.aAx[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.ifF(b2.h(0,"shape"))
g=B.aJ(b2.h(0,"fillColor"))
g=g==null?b1:A.j.M(g)
if(g==null)g=4280640491
f=B.aJ(b2.h(0,"strokeColor"))
f=f==null?b1:A.j.M(f)
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
a2=a2==null?b1:A.j.M(a2)
if(a2==null)a2=0
a3=C.hBW(b2.h(0,"textTransition"))
a4=B.aJ(b2.h(0,"textAnimDelayMs"))
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
b2=B.aJ(b2.h(0,"textBg"))
b2=b2==null?b1:A.j.M(b2)
return C.ev(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+62}
C.cl8.prototype={
$1(d){return d.hQ()},
$S:z+63}
C.cl9.prototype={
$1(d){return d.aj()},
$S:z+64}
C.cl5.prototype={
$1(d){return B.w(d)},
$S:17}
C.cl6.prototype={
$1(d){return B.w(d)},
$S:17}
C.cl7.prototype={
$1(d){return C.hsp(B.a1(d,x.N,x.z))},
$S:z+65}
C.clA.prototype={
$1(d){return d.a===this.a},
$S:z+66}
C.clB.prototype={
$0(){return A.d.gH(D.a64)},
$S:z+67}
C.clv.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.n(0,u,d.hQ())},
$S:z+7}
C.clu.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.clq.prototype={
$1(d){return new B.N(d,new C.clr(),B.U(d).k("N<1,V>")).f1(0,new C.cls())},
$S:z+70}
C.clr.prototype={
$1(d){return d.f},
$S:z+71}
C.cls.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:718}
C.clt.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hZB(d)},
$S:z+109}
C.clw.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.clx.prototype={
$2(d,e){return e.f.aS(0,d.f)},
$S:z+20}
C.cly.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fSV.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.I)(w),++r){q=w[r]
p=q.a
if(s.am(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.I)(o),++l){k=o[l]
j=k.a
if(t.q(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.I(0,j)
break}}}},
$S:z+74}
C.fSR.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fSS.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fST.prototype={
$2(d,e){var w
if(d.b===D.d1){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fSU.prototype={
$2(d,e){return d.b===D.fi&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cle.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.iov(b2,b3),b5=B.a3(b4).k("b8<2>")
b5=B.cF(new B.b8(b4,b5),new C.cld(),b5.k("M.E"),x.N)
w=B.d0(b5,B.a3(b5).k("M.E"))
b1=b1.e
v=A.qy.aB(0,A.j.D(b1,0,1))
u=new C.clf()
b5=B.ap(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ap(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.clg(a9,b7.d)
r=new C.clh(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.I)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.k2.aB(0,A.j.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kJ(A.j.D(1-k,0,1),B.dP(B.e2(A.A,r.$1(l),1-k*0.06,a8,a8),new B.r(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.I)(b2),++m){i=b2[m]
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
a4.ay=B.ap(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.ap(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lV&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b2,A.t,B.a([new B.kJ(A.j.D(o,0,1),r.$1(l),a8),new B.kJ(A.j.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iV(B.wQ(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.j.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cv)a7=D.nd
p.push(s.$5(i.c,i.d,i.e,i.f,C.hEx(a7,a6,r.$1(i))))}}return new B.bM(new B.o(a8,a8,a8,a8,a8,new B.a8(A.a5,A.a9,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bi,new B.an(A.a0,a8,A.ac,A.t,p,a8),a8)},
$S:439}
C.cld.prototype={
$1(d){return d.a},
$S:z+22}
C.clf.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+77}
C.clg.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1719}
C.clh.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a93(v,C.b3E(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dQV.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e2(new B.d7(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cln.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.clo.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
C.fVN.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:296}
C.fUU.prototype={
$1(d){return new C.aeM(this.a,this.b,null)},
$S:z+79}
C.eCX.prototype={
$0(){return this.a.QO(this.b,C.irP(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eCY.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QO(this.b,C.irR(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eCZ.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QO(this.b,C.irQ(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eD_.prototype={
$0(){A4.hEh()
B.a5(this.a,!1).N(null)},
$S:0}
C.clc.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.m(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1720}
C.clb.prototype={
$2(d,e){var w,v=this,u=null,t=B.dQ(d,A.o9),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.j.V(A.j.D(p*Math.max(B.jk(r),5),96,1500))
t=v.b
w=v.c||v.d?A.c0:A.dD
return B.fU(t,A.A,o,new C.cla(),A.cl,w,!0,u,!1,new B.bj("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1721}
C.cla.prototype={
$3(d,e,f){return D.afY},
$S:227}
C.fSQ.prototype={
$2(d,e){var w,v,u,t=null,s=B.l(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ay,A.aD,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.cX(r,0,B.dC(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cK>")
r=B.C(new B.N(r,new C.fSP(e.b,e.d),u),u.k("ak.E"))
return B.bu(s,new B.bM(new B.o(v,t,t,t,t,w,A.n),A.bi,new B.an(A.a0,t,A.ac,A.t,r,t),t),A.aq)},
$S:1722}
C.fSP.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b3E(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fBj.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cy(r.b,new C.fBh(d))
w=B.aF(d,A.c_,x.w).w
v=B.l(22)
u=B.K(A.bx,A.r,1)
t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.fQ,28)],x.V)
s=x.p
return new B.d2(e,!1,B.as(B.aG(!1,A.a3,!0,q,B.p(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jR,q,q,q),A.aw,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.h,0,A.p),1),B.bO(!1,A.B4,q,q,!0,q,q,q,new C.fBi(p,d),q,B.ft(q,q,A.bo,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Cz,q,new B.b9(B.l(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.h,0,q,q),A.aB,r.d],s),A.l,q,A.e,A.N,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.ha,A.CF,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q,q,q),q)},
$C:"$3",
$R:3,
$S:267}
C.fBh.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pZ())B.a5(w,!0).eu()},
$S:0}
C.fBi.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a5(this.b,!0).eu()},
$S:0}
C.fi2.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.r((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.r(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.r(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.dP(u.b,new B.r(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.e2(A.A,B.d3(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.e2(A.A,B.d3(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dq()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fG(r*3.14159)
return B.fB(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dq()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.k0(r*3.14159)
return B.fB(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dq()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fG(r*1.2)
s.k0(r*0.5)
return B.fB(A.A,B.d3(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dq()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fG(-r*1.4)
return B.fB(A.a9,B.d3(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(B.e2(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jo(u.b,A.t,new C.aLF(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.jo(u.b,A.t,new C.aLF(1-r,t))],x.p),t)
case 16:v=D.bcO.aB(0,r)
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.e2(A.A,B.d3(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(B.ea(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dq()
s.n3(r*6.28)
s.k6(r,r,r,1)
return B.fB(A.A,u.b,t,s,!0)
case 20:return B.eI(A.A,(r-0.5)*0.35,new B.an(A.a0,t,A.b2,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t),t)}},
$S:69}
C.e1K.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.e1J.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:11}
C.e1I.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hEx(v,w,e)},
$S:69}
C.cl4.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a5,A.a9,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("N<1,cK>")
q=B.C(new B.N(v,new C.cl3(q,w,e.b,e.d),s),s.k("ak.E"))
return new B.bM(new B.o(t,r,r,r,r,u,A.n),A.bi,new B.an(A.a0,r,A.ac,A.f,q,r),r)},
$S:439}
C.cl3.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cv?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a93(m,new C.Wl(d,C.b3E(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dfs.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dfr(w))},
$S:11}
C.dfr.prototype={
$0(){return this.a.d++},
$S:0}
C.eqj.prototype={
$2(d,e){var w,v=null,u=A.o.ar(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aTM.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ioc(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dq()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.ed(0,w*7,0,1)
s.fG(Math.sin(t)*0.32)
s.k0(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k6(w,w,w,1)
return B.fB(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.e2(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.r(s*14,w*10))
default:s=Math.sin(t)
return B.d3(B.e2(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:69}
C.f6X.prototype={
$1(d){var w
$.S()
w=B.L()
w.b=A.ab
w.c=d
w.e=A.dQ
return w},
$S:1723}
C.fQk.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdm()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.btZ(u,t,r),A.az))
w.push(B.nW(s.d,A.aq,new C.bhG(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bsV(u,q,t,r),A.az))
return B.as(new B.a4(v.a,v.b,new B.an(A.a0,r,A.b2,A.t,w,r),r),r,r,r)},
$S:217}
C.fEo.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:297}
C.eJb.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(U.Dy(t.a.a.c),$async$$0)
case 3:s=e
r=J.a7(s)
if(r.gau(s)){u=null
w=1
break}u=r.dL(s,new C.eJ9(),new C.eJa(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1724}
C.eJ9.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:202}
C.eJa.prototype={
$0(){return J.fq(this.a)},
$S:1726}
C.eFz.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eFA.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eFB.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eH9.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGY.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eGZ.prototype={
$1(d){return d.hQ()},
$S:z+82}
C.eEX.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eIh.prototype={
$0(){this.a.uh()},
$S:0}
C.eJ7.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oG()
w.KU()},
$S:0}
C.eH7.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oG()
w.KU()},
$S:0}
C.eIV.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eIW.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eIX.prototype={
$1(d){return d.a},
$S:z+22}
C.eIY.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aP),$.ax())},
$S:250}
C.eIZ.prototype={
$0(){return B.kb(!0,null,!0,!0,null,null,!1)},
$S:719}
C.eEl.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eJ8.prototype={
$0(){},
$S:0}
C.eGg.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yg()
w.KU()},
$S:0}
C.eEj.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.yg()},
$S:0}
C.eEk.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.yg()},
$S:0}
C.eGD.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eGE.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yg()
w.KU()
w.z="Home"},
$S:0}
C.eGF.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGf.prototype={
$1(d){var w=null
return B.ej(B.a([B.bO(!1,A.Wk,w,w,!0,w,w,w,new C.eGe(d),w,w)],x.p),w,w,w,D.h1C,w,w,w,w,D.fIY,w)},
$S:18}
C.eGe.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eGc.prototype={
$1(d){var w=null
return B.ej(B.a([B.bO(!1,A.Wk,w,w,!0,w,w,w,new C.eGb(d),w,w)],x.p),w,w,w,D.fNa,w,w,w,w,D.fKO,w)},
$S:18}
C.eGb.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eGd.prototype={
$0(){},
$S:0}
C.eFv.prototype={
$1(d){return this.a.b3n(C.bFd(d))},
$S:z+7}
C.eFw.prototype={
$1(d){return this.a.agI(C.bFd(d))},
$S:z+7}
C.eGm.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.h1G,A.aw,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.QE(A.tg,D.aBW,"HATI YA KUHOWA","Hati ya mahari",new C.eGh(d),w),A.T,new C.QE(A.h3,D.djM,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eGi(d),w),A.T,new C.QE(A.hz,D.d41,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eGj(d),w),A.T,new C.QE(A.ig,D.d20,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eGk(d),w)],v)
if(this.a.gZ8())A.d.u(u,B.a([A.T,new C.QE(A.iU,D.cNM,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eGl(d),w)],v))
return B.bm(!0,B.c9(B.x(u,A.al,w,A.e,A.N,0,A.p),A.t,w,A.y,w,E.yY,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:27}
C.eGh.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.eGi.prototype={
$0(){B.a5(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.eGj.prototype={
$0(){B.a5(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.eGk.prototype={
$0(){B.a5(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.eGl.prototype={
$0(){B.a5(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.eGn.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yg()},
$S:0}
C.eEn.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eEo.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.u(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nx(r,v.f+1,q);++v.f
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
C.eGy.prototype={
$1(d){return d.b===D.lV},
$S:z+4}
C.eGz.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.e1(new C.eGw(w,this.a,v),null)},
$S:20}
C.eGw.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eGx(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.a_,j=l?A.aR:A.an,i=l?A.bs:A.ch,h=l?A.a_:A.c,g=B.l(28),f=B.K(l?A.bx:A.bk,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.m(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bE,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.h,0,A.p),1),B.aH(q,q,q,q,B.X(A.cB,j,q,q,q,q),q,q,q,new C.eGs(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.h,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.DH[w]
v.a=null
t=v.a=u.a
a1.push(new C.bke(t,u.b,p.a===t,i,k,new C.eGt(v,m),q))}a1=B.bZ(A.bH,a1,A.br,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.DA[w]
s.a=null
t=s.a=r.a
u.push(new C.bkd(t,r.b,p.b===t,k,j,new C.eGu(s,m),q))}return B.bm(!0,B.p(q,B.c9(B.x(B.a([d,A.aO,a0,A.T,a1,A.by,v,A.T,B.bZ(A.bH,u,A.br,q,12,12),A.by,new B.a4(1/0,48,B.em(D.c4T,q,D.h45,new C.eGv(o,n),B.dj(q,q,q,q,q,q,q,q,q,A.aC,q,q,q,q,new B.b9(B.l(16),A.a1),D.b6E,q,q,q,q)),q)],e),A.E,q,A.e,A.N,0,A.p),A.t,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.uH,D.bFJ,q,q,q),!0,!1,A.ag,!0,!0)},
$S:88}
C.eGx.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eGq(w.a,d,e))
w.b.dc(new C.eGr(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1729}
C.eGq.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eGr.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eGs.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eGt.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eGu.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eGv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A2.Hs(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.dc(new C.eGp(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGp.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eGB.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGC.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eGA(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nx(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yg()},
$S:0}
C.eGA.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eGT.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eGU.prototype={
$1(d){return d.w},
$S:z+83}
C.eGV.prototype={
$2(d,e){return d>e?d:e},
$S:82}
C.eGW.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.a_,s=u?A.aR:A.an,r=u?A.bs:A.aS,q=u?A.a_:A.c,p=B.l(28),o=B.K(u?A.bx:A.bk,A.r,1),n=B.aF(d,A.c_,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.A(B.a([B.p(v,D.bZ9,A.f,v,v,D.b80,v,38,v,v,v,v,v,38),A.bb,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.h,0,A.p),1),B.aH(v,v,v,v,B.X(A.cB,s,v,v,v,v),v,v,v,new C.eGQ(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.h,0,v,v),A.aB,new B.di(1,A.cm,B.hI(v,new C.eGR(m,k,w.c,s,w.d,t,r),k.length,v,A.fn,v,A.ah,new C.eGS(),!0),v)],l),A.E,v,A.e,A.N,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.uH,A.a18,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eGQ.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eGS.prototype={
$2(d,e){return A.ae},
$S:36}
C.eGR.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.m(q,q,o?A.aC:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cD
t=B.m(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.c1y,q,q,q,new C.eGO(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bI0,n,q),B.aN(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bz(q,new B.b6(4,B.l(16),A.a1),q,A.eV,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.l(16),D.b6j),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eGP(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ad,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a6,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.h,0,A.p)},
$S:720}
C.eGO.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.itW(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geD()?p.a:q.a.length
n=p.geD()?p.b:q.a.length
m=A.a.oc(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hl(A.bA,o+s.length),A.aP))
l.akK(k,m)
l.pM()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eGP.prototype={
$1(d){var w=this.a
w.akK(this.b.a,d)
w.pM()},
$S:2}
C.eGX.prototype={
$0(){},
$S:0}
C.eGo.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eEE.prototype={
$0(){},
$S:0}
C.eEF.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hFU(this.b,w,!0)
w=this.a
w.r=null
w.yg()},
$S:0}
C.eEG.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eEH.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eED(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nx(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yg()},
$S:0}
C.eED.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eH2.prototype={
$1(d){return B.pi(new C.eH1(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:146}
C.eH1.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.anr,B.x(B.a([D.h_6,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.h,0,A.p),w),B.E(B.it(!0,w,e,A.y,D.fkh,new C.eH0(this.a,this.b),20,A.uJ,w,A.ah,!1),1)],v),A.al,w,A.e,A.h,0,A.p)},
$S:442}
C.eH0.prototype={
$2(d,e){var w=null,v=D.IB[e],u=C.hZw(v),t=B.l(16),s=B.l(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.K(q.j(0.45),A.r,1),o=q.j(0.2),n=B.l(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.m(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fM,w,w,w)],m)
if(u)A.d.u(n,B.a([A.bm,B.p(w,D.fdg,A.f,w,w,new B.o(A.dV.j(0.85),w,w,B.l(8),w,w,A.n),w,w,w,w,A.n6,w,w,w)],m))
return B.aG(!1,A.a3,!0,w,B.aM(!1,t,!0,B.p(w,B.x(B.a([B.A(n,A.l,w,A.e,A.h,0,w,w),A.b1,B.d(v.b,w,w,w,w,w,w,B.m(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.m(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a5,A.a9,A.x,r,w,w),A.n),w,w,w,w,A.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eH_(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:81}
C.eH_.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.clm(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eH3.prototype={
$0(){var w=this.a
w.e=this.b.hQ()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yg()},
$S:0}
C.eDh.prototype={
$0(){var w,v=this.a,u=v.gqV(),t=C.t_(4294967295,null,0,0,null,C.cE(),D.nc,"","","",D.dr),s=this.b
C.clz(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.Ei){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eEC.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cE())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aT(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.je
$.je=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hsp(q));++v.f},
$S:0}
C.eEA.prototype={
$0(){var w=this.a
A.d.cG(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eHb.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cG(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eEw.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.d,new C.eEv(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eEv.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHa.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eEm.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aP),$.ax())},
$S:250}
C.eEY.prototype={
$0(){return B.kb(!0,null,!0,!0,null,null,!1)},
$S:719}
C.eIT.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eIU.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avI(w).fW()
v=u.XF(w)
v.stY(B.hl(A.bA,v.a.a.length))},
$S:7}
C.eIi.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.YG(v)
if(u!=null&&u.b===D.d1)w.XF(u).sb1(0,u.r)}else w.w=null},
$S:0}
C.eDi.prototype={
$0(){var w=C.cE(),v=this.a,u=C.ev(A.bn,!1,v.gqV().e.l(),A.aH,"",4280640491,24,A.bq,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bl,4280172719,2,"Tap to edit text",0,0,"",D.cv,D.d1,0.7,0.15,0.2)
A.d.I(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eDf.prototype={
$0(){var w=C.cE(),v=this.a,u=C.ev(A.bn,!1,4279310375,A.aH,"",v.gqV().c.j(0.25).l(),24,A.bq,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqV().c.l(),2,"",0,0,"",D.cv,D.fi,0.25,0.3,0.3)
A.d.I(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eD5.prototype={
$0(){var w=C.ev(A.bn,!1,4279310375,A.aH,"",4280640491,24,A.bq,A.a8,"",0.55,C.cE(),this.b,"","",0,!1,"",0,D.bl,4280172719,2,"",0,0,"",D.cv,D.lV,0.6,0.2,0.18),v=this.a
A.d.I(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eD2.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.cc_],x.p)
for(w=J.aT(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.galn().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dI(!1,r,r,r,!0,r,r,r,!0,r,r,D.bWM,r,r,r,r,new C.eD1(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cm(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.eD1.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eD3.prototype={
$0(){var w=A.j.D(0.23131034482758622,0.12,0.5),v=C.cE(),u=this.b,t=A.V.av(u.aj(),null),s=C.ev(A.bn,!1,4279310375,A.aH,u.b,4280640491,24,A.bq,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bl,4280172719,2,t,0,0,"",D.cv,D.a8P,w,0.5-w/2,0.07)
t=this.a
A.d.I(t.gdB().z,s)
t.r=s.a},
$S:0}
C.eEy.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eEz.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.gdB().z,new C.eEx(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.ax()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eEx.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eDK.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.d1)s.Q=t.c.l()
else if(w===D.fi){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eDL(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.I)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eDL.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eDP.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eDQ(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.I)(s),++u)v.$1(s[u])}else{t=s.gdB()
if(t!=null)v.$1(t)}},
$S:0}
C.eDQ.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eDN.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.d1){s.Q=t.c
return}w=new C.eDO(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.I)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eDO.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eJ(w,new C.eDM()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eDM.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eDJ.prototype={
$0(){return C.clz(this.b,this.c,this.a.gqV())},
$S:0}
C.eGN.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.eJ1.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJ2.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eJ3.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJ4.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bj(s,new C.eJ0(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTh()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hQ()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.yg()
t.KU()}},
$S:0}
C.eJ0.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eIy.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acZ(),s=w.b,r=u.ad_(A.fq,A.jN,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.l(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.K(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.by,B.p(v,B.A(B.a([B.E(u.aXY(w.c,A.an),1),new B.D(A.fB,B.p(v,D.bWR,A.f,v,v,new B.o(A.fq.j(0.18),v,v,v,v,v,A.a7),v,34,v,v,v,v,v,34),v),B.E(u.aXY(s,A.fq),1)],n),A.l,v,A.e,A.h,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ay,A.aD,A.x,p,v,v),A.n),v,v,v,v,A.bI,v,v,v),A.by,u.aY0(A.fq,d,D.bSW,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.u(p,B.a([A.T,u.c1G(A.aG,d,A.uX,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aXZ(d,"Not now"))
return new C.KO(B.x(p,A.al,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.eIx.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KO(B.x(B.a([v.acZ(),A.P,v.ad_(A.aG,D.bSA,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cN(new B.aY(0,1/0,0,B.aF(d,A.c_,x.w).w.a.b*0.42),B.hI(w,new C.eIv(v,u,d),u.length,w,w,w,A.ah,new C.eIw(),!0),w),A.aB,v.aXZ(d,"Cancel")],x.p),A.al,w,A.e,A.N,0,A.p),w)},
$S:z+9}
C.eIw.prototype={
$2(d,e){return A.T},
$S:36}
C.eIv.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.l(16),t=A.c.j(0.05),s=B.l(16),r=B.K(A.c.j(0.08),A.r,1),q=x.p
return B.aG(!1,A.a3,!0,w,B.aM(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.asv,A.f,w,w,new B.o(w,w,w,B.l(12),w,D.c8T,A.n),w,42,w,w,w,w,w,42),A.bb,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.ni,w,w,w),A.cQ,B.d("Updated "+this.a.QP(v.f),w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.h,0,A.p),1),B.X(A.eI,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bI,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eIu(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:81}
C.eIu.prototype={
$0(){B.a5(this.a,!1).N(this.b.a)
return null},
$S:0}
C.eIr.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.acZ()
t=t.ad_(A.at,A.v9,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KO(B.x(B.a([s,A.P,t,A.by,B.A(B.a([B.E(B.dV(A.acl,new C.eIp(d),B.dj(u,u,u,u,u,u,u,u,u,A.c,u,u,A.co,u,new B.b9(B.l(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.as,B.E(B.bI(D.fLo,u,new C.eIq(d),B.bo(A.fq,u,u,u,A.c,u,A.co,u,new B.b9(B.l(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.h,0,u,u)],v),A.al,u,A.e,A.N,0,A.p),u)},
$S:z+9}
C.eIp.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.eIq.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eIt.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.acZ(),s=w.b,r=u.ad_(A.aV,A.ec,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.ax1("Names",""+w.c),1),A.af,B.E(u.ax1("Fields",""+w.d),1),A.af,B.E(u.ax1("Signatures",""+w.e),1)],q),A.l,v,A.e,A.h,0,v,v),o=B.bo(A.bo,v,v,v,A.c,v,A.yM,v,new B.b9(B.l(14),A.a1),v,v,v)
return new C.KO(B.x(B.a([t,A.P,r,A.aO,p,A.by,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.o4,v,v,v),v,new C.eIs(d),o),A.T,u.aY_(d,"Stay here",!1)],q),A.al,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.eIs.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.eFr.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eFq.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eIj.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eIS.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0R(A.d.dL(w.d,new C.eIQ(v),new C.eIR(v)).hQ(),w.f,null)},
$S:z+85}
C.eIQ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eIR.prototype={
$0(){return this.a},
$S:z+86}
C.eDa.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bI,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h5,w,w,w),w),B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.bYG,w,w,w,w,new C.eD8(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fJm,w,w,w)],x.p)
if(v>1)t.push(B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZZ,w,w,w,w,new C.eD9(d),!1,w,w,w,w,w,D.h5n,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dj,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eD8.prototype={
$0(){B.a5(this.a,!1).N("scroll")
return null},
$S:0}
C.eD9.prototype={
$0(){B.a5(this.a,!1).N("split")
return null},
$S:0}
C.eDb.prototype={
$0(){var w=this.b,v=w.c,u=C.ev(A.bn,!1,4279310375,A.aH,v,4280640491,24,A.bq,A.a8,"",0.84,C.cE(),w.b,"","",0,!1,"",0,D.bl,4280172719,2,v,0,0,"",D.cv,D.U7,0.88,0.06,0.08)
v=this.a
A.d.I(v.gdB().z,u)
v.r=u.a},
$S:0}
C.eDc.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.je
$.je=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.je
$.je=k+1
m.push(new C.eS(""+1000*l+"_"+k,D.U7,0.04,0.06,0.92,0.88,v,24,A.a8,A.bq,A.aH,4279310375,A.bn,u,D.bl,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cv,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.m3(""+1000*p+"_"+o,r+n,"",D.r4,4294967295,null,D.dr,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eDg.prototype={
$0(){var w,v=C.cE(),u=this.a,t=u.e
t=(t==null?null:C.kO(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ev(A.bn,!1,4279310375,A.aH,t,4280640491,24,A.bq,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bl,4280172719,2,"",0,0,"",D.cv,D.lu,0.35,0.55,0.62)
A.d.I(u.gdB().z,w)
u.r=w.a},
$S:0}
C.eD7.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b65(o)
w=C.cE()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ev(A.bn,!1,4279310375,A.aH,"marriage_sign_placed_"+A.a.e3(v.db,"marriage_sign_",""),4280640491,24,A.bq,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bl,4280172719,2,"",0,0,"",D.cv,D.lu,s,u,t)
A.d.I(p.gdB().z,q)
A.d.bq(p.gdB().z,new C.eD6(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.inU(p)}},
$S:0}
C.eD6.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eH8.prototype={
$0(){var w=this.a,v=this.b
w.b65(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eJ_.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eFu.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bq(r.z,new C.eFt())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eFt.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eDT.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eDU.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.uh()},
$S:7}
C.eD4.prototype={
$0(){var w=C.ev(A.bn,!1,4279310375,A.aH,"HD Photo",4280640491,24,A.bq,A.a8,"",0.8,C.cE(),this.b,"","",0,!1,"",0,D.bl,4280172719,2,"",0,0,"",D.cv,D.lV,0.8,0.1,0.1),v=this.a
A.d.I(v.gdB().z,w)
v.r=w.a},
$S:0}
C.eEW.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eDd.prototype={
$0(){var w=this.a,v=this.b
A.d.I(w.gdB().z,v)
w.r=v.a},
$S:0}
C.eDm.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eDn.prototype={
$0(){var w=this.b.hQ(),v=C.cE(),u=A.j.D(w.c+0.04,0,0.92),t=A.j.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ev(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.I(t.gdB().z,f)
t.r=f.a},
$S:0}
C.eDo.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eDl(v))
if(u>=0&&u<w.length-1){A.d.cG(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.eDl.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDz.prototype={
$0(){var w=this.a.gdB().z,v=this.b,u=A.d.bj(w,new C.eDk(v))
if(u>0){A.d.cG(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.eDk.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eDC.prototype={
$0(){return this.a.as=A.bn},
$S:0}
C.eDD.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eDE.prototype={
$0(){return this.a.as=A.e3},
$S:0}
C.eDF.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eDG.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eDH.prototype={
$1(d){return d.b===D.d1},
$S:z+4}
C.eDI.prototype={
$1(d){return d.length!==0},
$S:3}
C.eDp.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.I(v,C.DD(w.gqV().c.j(0.18).l(),0.1,u,D.bl,0,2,1,0,0))
u=w.gdB().z
v=C.cE()
A.d.I(u,C.j8(A.bn,!1,w.gqV().d.l(),A.aH,18,A.bq,A.H,0.07,v,"Document Header",0,D.dr,0.9,0.05,0.02))},
$S:0}
C.eDq.prototype={
$0(){var w,v=this.a,u=v.gdB().z,t=C.cE()
A.d.I(u,C.DD(v.gqV().c.j(0.12).l(),0.1,t,D.bl,0,2,1,0,0.9))
t=v.gdB().z
u=C.cE()
w=C.bFX()
A.d.I(t,C.j8(A.K,!1,v.gqV().e.l(),A.aH,12,A.bq,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dr,0.9,0.05,0.92))},
$S:0}
C.eDr.prototype={
$0(){A.d.I(this.a.gdB().z,C.DD(1727914055,0.12,C.cE(),D.bl,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eDs.prototype={
$0(){var w=4279310375
A.d.I(this.a.gdB().z,C.DD(w,0.08,C.cE(),D.bl,w,2,0.5,0.2,0.4))},
$S:0}
C.eDt.prototype={
$0(){var w=this.a,v=w.gdB().z,u=C.cE()
A.d.I(v,C.DD(w.gqV().c.j(0.35).l(),0.12,u,D.Ej,4280640491,2,0.2,0.15,0.55))
A.d.I(w.gdB().z,C.j8(A.bn,!1,4279310375,A.aH,18,A.bq,A.a8,0.15,C.cE(),"Important note",0,D.r5,0.5,0.38,0.52))},
$S:0}
C.eDu.prototype={
$0(){var w=this.a
A.d.I(w.gdB().z,C.DD(4294507260,0.78,C.cE(),D.bl,4291548641,1.5,0.84,0.08,0.1))
A.d.I(w.gdB().z,C.j8(A.bn,!1,4279179050,A.aH,16,A.bq,A.a8,0.7,C.cE(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bFX()+"\n\nSubject:\n\nBody text\u2026",0,D.dr,0.76,0.12,0.14))},
$S:0}
C.eDv.prototype={
$0(){var w=this.a
A.d.I(w.gdB().z,C.DD(4294897802,0.28,C.cE(),D.bl,4294626325,2,0.3,0.62,0.12))
A.d.I(w.gdB().z,C.j8(A.bn,!1,4285611794,A.aH,15,A.bq,A.a8,0.24,C.cE(),"Sticky note",0,D.aLS,0.26,0.64,0.14))},
$S:0}
C.eDw.prototype={
$0(){var w=4280640491,v=this.a
A.d.I(v.gdB().z,C.DD(4293060848,0.04,C.cE(),D.bl,4291548641,2,0.8,0.1,0.48))
A.d.I(v.gdB().z,C.DD(w,0.04,C.cE(),D.bl,w,2,0.55,0.1,0.48))},
$S:0}
C.eDx.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdB().z,C.j8(A.bn,!1,w,A.aH,18,A.bq,A.a8,0.62,C.cE(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.JB,0.42,0.06,0.18))
A.d.I(v.gdB().z,C.j8(A.bn,!1,w,A.aH,18,A.bq,A.a8,0.62,C.cE(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vs,0.42,0.52,0.18))},
$S:0}
C.eDy.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdB().z,C.DD(858088427,0.62,C.cE(),D.bl,4280640491,2,0.42,0.05,0.18))
A.d.I(v.gdB().z,C.DD(856004201,0.62,C.cE(),D.bl,4278556265,2,0.42,0.53,0.18))
A.d.I(v.gdB().z,C.j8(A.bn,!1,w,A.aH,20,A.bq,A.H,0.1,C.cE(),"Option A",0,D.dr,0.36,0.08,0.2))
A.d.I(v.gdB().z,C.j8(A.bn,!1,w,A.aH,20,A.bq,A.H,0.1,C.cE(),"Option B",0,D.dr,0.36,0.56,0.2))},
$S:0}
C.eDA.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdB().z,C.DD(4294967295,0.36,C.cE(),D.bl,w,2,0.24,0.38,0.28))
A.d.I(v.gdB().z,C.j8(A.K,!1,w,A.aH,14,A.bq,A.a8,0.12,C.cE(),"[ QR CODE ]",0,D.dr,0.24,0.38,0.4))},
$S:0}
C.eDB.prototype={
$0(){return C.clz(this.b,D.U8,this.a.gqV())},
$S:0}
C.eEV.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.aaI.q(0,d),t=this.a
return t.bbj(d,v===d,A.b3,this.c,new C.eEU(t,u,d,w),u)},
$S:z+25}
C.eEU.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.ou(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bGI(r,new C.eET(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eET.prototype={
$0(){return this.a.dc(new C.eES(this.b,this.c))},
$S:0}
C.eES.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eDe.prototype={
$0(){var w,v=this.a,u=v.gqV(),t=C.t_(4294967295,null,0,0,null,C.cE(),D.nc,"","","",D.dr),s=this.b
C.clz(t,s,u)
w=v.gdB()
if(w!=null&&s!==D.Ei){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eDX.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.itZ(p,q.d,s,new C.eDW(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.uh(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDW.prototype={
$1(d){return this.boj(d)},
boj(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eDV(t,d))
w=2
return B.b(t.uh(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+88}
C.eDV.prototype={
$0(){var w,v,u
for(w=J.aT(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eDY.prototype={
$0(){return this.a.bN8()},
$S:0}
C.eDZ.prototype={
$0(){return this.a.aT7("Class Presentation",!0)},
$S:0}
C.eE_.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eE0.prototype={
$1(d){return this.a.bO4(d.b,this.b,d.a)},
$S:z+89}
C.eEB.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aF(w,A.c_,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eGM.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aF(d,A.eT,x.w).w.f.d),new B.e1(new C.eGL(this.a,this.b),null),null)},
$S:65}
C.eGL.prototype={
$2(d,e){return B.pi(new C.eGK(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:665}
C.eGK.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.K(u?A.bx:A.bk,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.T,r,new B.D(A.amP,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.m(v,v,u?A.c:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b1,B.bO(!1,A.B4,v,v,!0,v,v,v,new C.eGI(w.c),v,v)],q),A.l,v,A.e,A.h,0,v,v),v),B.E(B.cm(B.a([p.aVV(u,!0,!0,new C.eGJ(p,w.d))],q),e,v,D.bDm,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.h,0,A.p),A.f,v,v,new B.o(t,v,s,A.lc,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:118}
C.eGI.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eGJ.prototype={
$0(){this.b.$1(new C.eGG())
var w=this.a
if(w.c!=null)w.m(new C.eGH())},
$S:0}
C.eGG.prototype={
$0(){},
$S:0}
C.eGH.prototype={
$0(){},
$S:0}
C.eIk.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:89}
C.eIl.prototype={
$4(d,e,f,g){var w=A.ck.aB(0,e.gp(0))
return B.d3(B.e2(A.A,new C.aAW(this.b,this.a.a.d,null),0.94+w*0.06,null,null),w)},
$S:264}
C.eIm.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:89}
C.eIn.prototype={
$4(d,e,f,g){var w=A.ck.aB(0,e.gp(0))
return B.d3(B.e2(A.A,new C.bfu(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:264}
C.eIo.prototype={
$0(){return A.d.c9(this.a.d,0,C.Xe(this.b))},
$S:0}
C.eDj.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.aB(0,o)
o=B.l(22)
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.qi.j(0.75)],t)
r=B.K(A.b_.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b_.j(0.35+q),A.ci.j(0.18),A.L],t)
q=B.K(A.b_.j(0.45+q),A.r,1)
t=B.p(p,B.X(A_.Pq,u?A.aa:A.a_,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bV(A.A,0.5,A.x,p,0,t,p,p),A.a7),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.m(p,p,u?A.c:A.a_,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bu(o,B.uB(A.fj,B.p(p,B.x(B.a([t,A.aB,q,A.am,B.d(y.K,p,p,p,p,p,p,B.m(p,p,u?A.aE:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ay,A.aD,A.x,s,p,p),A.n),p,p,p,p,A.eA,p,p,1/0),14,!1),A.aq)},
$S:314}
C.eEp.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eEq.prototype={
$1(d){return d.length!==0},
$S:3}
C.eEr.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.ke
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a3z:A.CW}return w},
$S:721}
C.eEu.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=m.b
v=A.dH.aB(0,A.j.F(j+w*0.12,1))
j=m.c
u=j?l:new B.o(l,l,l,B.l(20),A.II,l,A.n)
t=B.l(20)
s=m.d
r=B.l(20)
if(j)q=B.a([A.c.j(0.1+v*0.04),A.av.j(0.78)],x.O)
else{q=(A.o.ar(w,1)&1)===0
p=B.ap(A.c,q?A.aG:A.bd,0.1)
p.toString
o=B.ap(A.c,q?A.aG:A.bd,0.24)
o.toString
o=B.a([p,o],x.O)
q=o}p=!j
if(p)o=B.VI((A.o.ar(w,1)&1)===0?A.aG:A.bd,!0)[0].j(0.75)
else o=A.d.gH(m.e).j(0.34+v*0.22)
o=B.K(o,A.r,p?1.5:1.25)
n=B.l(10)
if(j)w=m.e
else{w=(A.o.ar(w,1)&1)===0
p=B.VI(w?A.aG:A.bd,!0)[0]
p=B.a([p,B.VI(w?A.aG:A.bd,!0)[1]],x.O)
w=p}w=B.p(l,B.X(C.kO(s.w)?A.tg:A.qU,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,n,l,new B.a8(A.a5,A.a9,A.x,w,l,l),A.n),l,36,l,l,l,l,l,52)
p=s.b
p=B.d(p.toUpperCase(),l,l,l,l,l,l,B.m(l,l,j?A.c:A.a_,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=s.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QP(s.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QP(s.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QP(s.f)
else if(n==="hati_kiapo_uongozi"){n=s.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QP(s.f)}else n=""+s.r.length+" slides \u2022 Updated "+k.QP(s.f)
n=k.bO2(n,A.d.gH(m.e),j)
return B.p(l,B.bu(t,new B.a9e(B.aG(!1,A.a3,!0,l,B.aM(!1,l,!0,B.p(l,B.dI(!1,A.H_,l,l,!0,l,l,l,!0,l,l,w,l,l,l,l,l,!1,l,l,l,l,l,n,l,p,l,B.aH(l,l,l,l,B.X(A.oH,j?A.aE:A.bP,l,l,l,l),l,l,l,new C.eEs(k,s,j),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,o,r,l,new B.a8(A.ay,A.aD,A.x,q,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eEt(k,s),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai),l),A.aq),A.f,l,l,u,l,l,l,A.kz,l,l,l,l)},
$S:90}
C.eEt.prototype={
$0(){return this.a.agI(this.b)},
$S:0}
C.eEs.prototype={
$0(){return this.a.Bw(this.b,this.c)},
$S:0}
C.eFV.prototype={
$0(){var w=this.a
w.b9R()
w.m(new C.eFU())},
$S:0}
C.eFU.prototype={
$0(){},
$S:0}
C.eFW.prototype={
$1(d){return this.a.akK(this.b.a,d)},
$S:2}
C.eFX.prototype={
$0(){this.a.dc(new C.eFT(this.b))},
$S:0}
C.eFT.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cD:A.O},
$S:0}
C.eFY.prototype={
$0(){this.a.dc(new C.eFS(this.b))},
$S:0}
C.eFS.prototype={
$0(){var w=this.a
return w.y=w.y===A.cI?A.bq:A.cI},
$S:0}
C.eFZ.prototype={
$0(){this.a.dc(new C.eFR(this.b))},
$S:0}
C.eFR.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.nh},
$S:0}
C.eG_.prototype={
$0(){this.a.dc(new C.eFQ(this.b))},
$S:0}
C.eFQ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eG0.prototype={
$0(){var w=this.a
w.dc(new C.eFP(w,this.b))},
$S:0}
C.eFP.prototype={
$0(){var w=this.b
return w.as=this.a.c8I(w.as)},
$S:0}
C.eG1.prototype={
$0(){return this.a.dc(new C.eFO(this.b))},
$S:0}
C.eFO.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w+2,10,96)},
$S:0}
C.eG2.prototype={
$0(){return this.a.dc(new C.eFN(this.b))},
$S:0}
C.eFN.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w-2,10,96)},
$S:0}
C.eFG.prototype={
$0(){return this.a.a3p(this.b.a)},
$S:0}
C.eFH.prototype={
$0(){this.a.a0W()
return null},
$S:0}
C.eFI.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aF(v,A.c_,x.w).w.a.a<900)w.ah0()
else w.m(new C.eFF(w))},
$S:0}
C.eFF.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eFJ.prototype={
$0(){this.a.dc(new C.eFE(this.b))},
$S:0}
C.eFE.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cD:A.O},
$S:0}
C.eFK.prototype={
$0(){return this.a.dc(new C.eFD(this.b))},
$S:0}
C.eFD.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w+2,10,96)},
$S:0}
C.eFL.prototype={
$0(){return this.a.dc(new C.eFC(this.b))},
$S:0}
C.eFC.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w-2,10,96)},
$S:0}
C.eFM.prototype={
$0(){return this.a.aCc(null)},
$S:0}
C.eEO.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eEP.prototype={
$0(){this.a.abw()
return null},
$S:0}
C.eER.prototype={
$1(d){return this.bok(d)},
bok(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KL(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bU(A.av,null,new C.eEJ(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.dc(new C.eEK(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEL(r))
s=s.c.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eEM(r))
s=s.c.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hHp(q,new C.Fj(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.dc(new C.eEN(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aig(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:97}
C.eEJ.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.ex1],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dj,p,p,p)
q=u.e===s?D.bYQ:p
o.push(B.dI(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eEI(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.l,p,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eEI.prototype={
$0(){B.a5(this.a,!1).N(this.b)
return null},
$S:0}
C.eEK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eEL.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eEM.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eEN.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eEQ.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Ao(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Ao(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Ao(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aig(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eCy,q,v,u,B.Ao(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:136}
C.eJ5.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFU(w,v)}},
$S:0}
C.eJ6.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eG5.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.l(999),q=s?D.c8N:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.ch
if(s)v=A.c
else v=this.b?A.aR:A.bw
return new B.D(A.fn,B.az(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b0,new B.o(w,u,u,r,u,q,A.n),A.eH,u,u,u,u,A.lN,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eG4(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:147}
C.eG4.prototype={
$0(){var w=this.a
return w.m(new C.eG3(w,this.b))},
$S:0}
C.eG3.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eG6.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a6E:E.aC1
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbRD():t.gbNt()
return B.ha(B.az(u,B.p(u,D.arV,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ab(0,A.G,A.d.gH(v).j(0.45),A.J,10)],x.V),new B.a8(A.a5,A.a9,A.x,v,u,u),A.a7),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1733}
C.eG7.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.itc(v,w.a.c)},
$S:0}
C.eHu.prototype={
$0(){return this.b.vU(this.a.a)},
$S:0}
C.eHv.prototype={
$0(){return this.a.vU(D.nc)},
$S:0}
C.eHw.prototype={
$0(){return this.a.vU(D.Jz)},
$S:0}
C.eHH.prototype={
$0(){return this.a.vU(D.JA)},
$S:0}
C.eHS.prototype={
$0(){return this.a.vU(D.Jy)},
$S:0}
C.eI2.prototype={
$0(){return this.a.qG("lab_report")},
$S:0}
C.eI9.prototype={
$0(){return this.a.qG("rubric")},
$S:0}
C.eIa.prototype={
$0(){return this.a.qG("minutes")},
$S:0}
C.eIb.prototype={
$0(){return this.a.qG("agenda")},
$S:0}
C.eIc.prototype={
$0(){return this.a.qG("timeline")},
$S:0}
C.eId.prototype={
$0(){return this.a.qG(this.b.a)},
$S:0}
C.eHx.prototype={
$0(){this.a.WH()
return null},
$S:0}
C.eHy.prototype={
$0(){this.a.WB()
return null},
$S:0}
C.eHz.prototype={
$0(){return this.a.qG("table")},
$S:0}
C.eHA.prototype={
$0(){return this.a.qG("sticky")},
$S:0}
C.eHB.prototype={
$0(){return this.a.qG("divider")},
$S:0}
C.eHC.prototype={
$0(){return this.a.qG("header_bar")},
$S:0}
C.eHD.prototype={
$0(){return this.a.pt(D.bl)},
$S:0}
C.eHE.prototype={
$0(){return this.a.pt(D.f1)},
$S:0}
C.eHF.prototype={
$0(){return this.a.pt(D.kj)},
$S:0}
C.eHG.prototype={
$0(){return this.a.pt(D.Ej)},
$S:0}
C.eHI.prototype={
$0(){return this.a.pt(D.kk)},
$S:0}
C.eHJ.prototype={
$0(){return this.a.pt(D.lv)},
$S:0}
C.eHK.prototype={
$0(){return this.a.pt(D.fP)},
$S:0}
C.eHL.prototype={
$0(){this.a.HW()
return null},
$S:0}
C.eHM.prototype={
$0(){this.a.O8()
return null},
$S:0}
C.eHN.prototype={
$0(){return this.a.qG("quote")},
$S:0}
C.eHO.prototype={
$0(){return this.a.a9F()},
$S:0}
C.eHP.prototype={
$0(){this.a.a11()
return null},
$S:0}
C.eHQ.prototype={
$0(){var w=this.a
return w.m(new C.eHk(w))},
$S:0}
C.eHk.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eHR.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.ou(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eHs(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHs.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eHT.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.ke()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.aaK.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.K(t,A.r,v?2.5:1),s,s,new B.a8(A.a5,A.a9,A.x,u,s,s),A.a7),s,26,s,s,s,s,s,26)],x.p)
if(D.aaK.q(0,q))u.push(B.ao(s,B.p(s,D.Qb,A.f,s,s,D.FE,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fn,B.az(s,B.ha(new B.an(A.a0,s,A.ac,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eHr(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+90}
C.eHr.prototype={
$0(){this.a.a9V(this.b)
return null},
$S:0}
C.eHU.prototype={
$0(){this.a.a9U(this.b)
return null},
$S:0}
C.eHV.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hZx(d),p=this.a,o=B.l(8),n=p.gdB()
n=n==null?r:n.x
w=d.a
n=n===w?A.bo:A.aT
v=p.gdB()
n=B.K(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.l(8)
t=B.l(7)
s=C.t_(4294967295,r,0,0,r,"preview_"+w,D.r4,"","","",D.dr)
C.hDV(s,w)
w=x.p
u=B.a([B.bu(o,B.p(r,B.bu(t,C.hFh(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.asw,A.f,r,r,D.FE,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iQ,B.az(r,B.x(B.a([new B.an(A.a0,r,A.ac,A.t,u,r),A.cQ,B.d(d.b,r,r,r,r,r,r,B.m(r,r,this.b?A.aE:A.an,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.h,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eHq(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+91}
C.eHq.prototype={
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
return B.b(s.ou(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.dc(new C.eHg(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHg.prototype={
$0(){return C.hDV(this.a,this.b.a)},
$S:0}
C.eHt.prototype={
bol(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.aaI.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.ou(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bol(d,e)},
$S:z+92}
C.eIe.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eIg(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.c9(B.A(v,A.l,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,A.aL)},
$S:z+93}
C.eIg.prototype={
$1(d){var w=this
return w.a.bbj(d,w.b===d,w.c,w.d,new C.eIf(w.e,d),!D.aaI.q(0,d))},
$S:z+25}
C.eIf.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eHW.prototype={
$1(d){this.b.$2(d,new C.eHp(this.a,d,this.c))
return null},
$S:z+26}
C.eHp.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bGI(u,new C.eHf(v,this.c,w),w)},
$S:0}
C.eHf.prototype={
$0(){return this.a.dc(new C.eHd(this.b,this.c))},
$S:0}
C.eHd.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eHX.prototype={
$1(d){this.b.$2(d,new C.eHo(this.a,d))
return null},
$S:z+26}
C.eHo.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h4O(u,new C.eHe(v,w),w)},
$S:0}
C.eHe.prototype={
$0(){var w=this.a
return w.dc(new C.eHc(w,this.b))},
$S:0}
C.eHc.prototype={
$0(){return this.a.gdB().r=this.b},
$S:0}
C.eHY.prototype={
$0(){var w=this.a
return w.m(new C.eHn(w))},
$S:0}
C.eHn.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eHZ.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bFU(w,v)}},
$S:0}
C.eI_.prototype={
$0(){this.a.II()
return null},
$S:0}
C.eI0.prototype={
$0(){return this.a.a9F()},
$S:0}
C.eI1.prototype={
$0(){var w=this.a,v=w.ke()
if(v!=null&&v.b===D.d1)w.dc(new C.eHm(v))},
$S:0}
C.eHm.prototype={
$0(){var w=this.a
w.f=A.j.D(w.f*1.25,0.08,1.8)
w.e=A.j.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eI3.prototype={
$0(){this.a.Ea()
return null},
$S:0}
C.eI4.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FS(v,!0)
return null},
$S:0}
C.eI5.prototype={
$0(){this.a.dc(new C.eHl(this.b))},
$S:0}
C.eHl.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cD:A.O},
$S:0}
C.eI6.prototype={
$0(){this.a.dc(new C.eHj(this.b))},
$S:0}
C.eHj.prototype={
$0(){var w=this.a
return w.y=w.y===A.cI?A.bq:A.cI},
$S:0}
C.eI7.prototype={
$0(){this.a.dc(new C.eHi(this.b))},
$S:0}
C.eHi.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.nh},
$S:0}
C.eI8.prototype={
$0(){this.a.dc(new C.eHh(this.b))},
$S:0}
C.eHh.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eDS.prototype={
$1(d){return this.boi(d)},
boi(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.ou(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.dc(new C.eDR(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:195}
C.eDR.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eIB.prototype={
$0(){var w=this.a
return w.dc(new C.eIA(w,this.b))},
$S:0}
C.eIA.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eIC.prototype={
$0(){var w=this.a
return w.dc(new C.eIz(w,this.b))},
$S:0}
C.eIz.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eF0.prototype={
$0(){return this.a.dc(new C.eF_(this.b))},
$S:0}
C.eF_.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w-2,10,96)},
$S:0}
C.eF1.prototype={
$0(){return this.a.dc(new C.eEZ(this.b))},
$S:0}
C.eEZ.prototype={
$0(){var w=this.a
return w.w=A.j.D(w.w+2,10,96)},
$S:0}
C.eFy.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.aue,new C.eFx(),w),w.k("ak.E"))
return w},
$S:z+95}
C.eFx.prototype={
$1(d){var w=null
return B.Ao(B.d(d.b,w,w,w,w,w,w,A.lY,w,w,w),48,d,x.fO)},
$S:z+96}
C.eIO.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a4(v,w?8:0,null,null)},
$S:36}
C.eIN.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ky()?q:new C.eIL(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.l(8)
if(o)v=A.bo
else v=r.d?A.aT:A.cC
v=B.K(v,A.r,o?2:1)
u=r.d?A.cu:A.c
t=B.bR(0,C.hFh(r.b.r[e]),0,0,0)
s=B.l(4)
return B.az(q,B.p(q,new B.an(A.a0,q,A.ac,A.t,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.o1,q,q,q),A.f,q,q,new B.o(A.b5,q,q,s,q,q,A.n),q,q,q,q,A.anO,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eIM(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:79}
C.eIM.prototype={
$0(){var w=this.a
return w.m(new C.eIH(w,this.b))},
$S:0}
C.eIH.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KU()},
$S:0}
C.eIL.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bU(null,null,new C.eII(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eIJ(q,s))
q.aUC()}else if(r==="del"){q=t.a
q.m(new C.eIK(q,s))
q.aTI()}else if(r==="up")t.a.b6j(s,s-1)
else if(r==="down")t.a.b6j(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eII.prototype={
$1(d){var w=null,v=B.a([B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_C,w,w,w,w,new C.eID(d),!1,w,w,w,w,w,w,w,D.fKl,w,w,w),B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_v,w,w,w,w,new C.eIE(d),!1,w,w,w,w,w,w,w,A.xE,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZJ,w,w,w,w,new C.eIF(d),!1,w,w,w,w,w,w,w,D.fSO,w,w,w))
if(u<this.b.r.length-1)v.push(B.dI(!1,w,w,w,!0,w,w,w,!0,w,w,D.c0U,w,w,w,w,new C.eIG(d),!1,w,w,w,w,w,w,w,D.fK9,w,w,w))
return B.bm(!0,B.x(v,A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eID.prototype={
$0(){B.a5(this.a,!1).N("dup")
return null},
$S:0}
C.eIE.prototype={
$0(){B.a5(this.a,!1).N("del")
return null},
$S:0}
C.eIF.prototype={
$0(){B.a5(this.a,!1).N("up")
return null},
$S:0}
C.eIG.prototype={
$0(){B.a5(this.a,!1).N("down")
return null},
$S:0}
C.eIJ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIK.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eIP.prototype={
$0(){return this.a.a9F()},
$S:0}
C.eEi.prototype={
$0(){var w=this.a
w.b9R()
w.aCc(null)},
$S:0}
C.eEh.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.l(4),n=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.ay,A.aD,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.l(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.ay,A.aD,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bu(s,new B.bM(new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bi,A.l7,p),A.aq)],x.p)
r=m.z
q=this.c
A.d.u(s,new B.N(r,new C.eEg(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.m(p,p,q?A.aE:A.bP,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return new B.bM(new B.o(v,p,p,o,n,w,A.n),A.bi,new B.an(A.a0,p,A.ac,A.f,s,new B.bj("canvas_"+m.a+"_"+u+"_"+t,x.W)),p)},
$S:439}
C.eEg.prototype={
$1(d){var w=this
return w.a.bJo(d,w.b,w.c,w.d)},
$S:z+23}
C.eE5.prototype={
$0(){var w=this
if(w.b){w.a.Og(w.c)
return}if(w.d){w.a.a9D(w.c)
return}if(w.e){w.a.aii(w.c)
return}if(w.f)w.a.bap(w.c)},
$S:0}
C.eE6.prototype={
$0(){this.a.Og(this.b)
return null},
$S:0}
C.eE7.prototype={
$0(){return this.a.a3p(this.b.a)},
$S:0}
C.eE8.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eE4(u,d,w.c,w.d))
v.Im()
v.oG()
v.pM()},
$S:19}
C.eE4.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.j.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.j.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eE9.prototype={
$1(d){return this.a.akK(this.b.a,d)},
$S:2}
C.eEb.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hhE(w))u.a.Og(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.bap(v)},
$S:0}
C.eEa.prototype={
$0(){return this.a.a3p(this.b.a)},
$S:0}
C.eEc.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eE3(w.b,d,w.c,w.d))
v.Im()
v.oG()
v.pM()},
$S:19}
C.eE3.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.j.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.j.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.d1)v.w=A.j.D(v.w+u*0.15,10,120)},
$S:0}
C.eEd.prototype={
$1(d){var w=this.a
w.m(new C.eE2(this.b,d))
w.Im()
w.oG()
w.pM()},
$S:234}
C.eE2.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.j.D(w.e*v,0.04,1.8)
w.f=A.j.D(w.f*v,0.04,1.8)
if(w.b===D.d1)w.w=A.j.D(w.w*v,10,120)},
$S:0}
C.eEe.prototype={
$0(){var w=this.a
w.m(new C.eE1(this.b))
w.Im()
w.oG()
w.pM()},
$S:0}
C.eE1.prototype={
$0(){this.a.r=C.hEK()},
$S:0}
C.eEf.prototype={
$0(){return this.a.a3p(this.b.a)},
$S:0}
C.eG9.prototype={
$0(){var w=this.a
return w.m(new C.eG8(w))},
$S:0}
C.eG8.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eGa.prototype={
$1(d){return this.a.cIL(this.b.a,d)},
$S:2}
C.eFe.prototype={
$1(d){var w
this.a.dc(d)
w=this.b
if(w!=null)w.$0()},
$S:166}
C.eFf.prototype={
$1(d){return this.a.$1(new C.eFd(this.b,d))},
$S:6}
C.eFd.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eFg.prototype={
$1(d){return this.a.$1(new C.eFc(this.b,d))},
$S:6}
C.eFc.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eFh.prototype={
$1(d){return this.a.$1(new C.eFb(this.b,d))},
$S:6}
C.eFb.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eFi.prototype={
$1(d){return this.a.$1(new C.eFa(this.b,d))},
$S:6}
C.eFa.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eFj.prototype={
$1(d){return this.a.$1(new C.eF9(this.b,d))},
$S:6}
C.eF9.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eFk.prototype={
$1(d){return this.b.$1(new C.eF8(this.a,this.c))},
$S:9}
C.eF8.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eFl.prototype={
$1(d){return this.b.$1(new C.eF7(this.a,this.c))},
$S:9}
C.eF7.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eFm.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bo:A.cA
return B.az(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.K(s,A.r,t?2:1),w,w,w,A.a7),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eF6(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:434}
C.eF6.prototype={
$0(){return this.a.$1(new C.eF3(this.b,this.c))},
$S:0}
C.eF3.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eFn.prototype={
$1(d){return this.a.$1(new C.eF5(this.b,d))},
$S:1734}
C.eF5.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eFo.prototype={
$1(d){var w=null
return B.az(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a7),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eF4(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:434}
C.eF4.prototype={
$0(){return this.a.$1(new C.eF2(this.b,this.c))},
$S:0}
C.eF2.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eFp.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pZ()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eu()}v.a.auG()},
$S:0}
C.eFs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a.fy
k===$&&B.c()
k=k.x
k===$&&B.c()
w=A.dH.aB(0,k)
k=B.l(16)
v=B.l(16)
u=B.P(d).ax.a===A.dm?A.aZ:A.ay
t=B.P(d).ax.a===A.dm?A.b4:A.aD
if(B.P(d).ax.a===A.dm)s=D.d53
else{s=m.c
r=B.ap(s,A.b_,0.35+w*0.15)
r.toString
r=B.a([s,r],x.O)
s=r}r=B.K(A.c.j(0.3+w*0.2),A.r,1.2)
q=B.a([B.X(m.d,A.c,l,l,l,26)],x.p)
p=B.l(6)
o=m.c
n=B.K(o,A.r,1.2)
q.push(B.ao(2,B.p(l,B.X(A.v9,o,l,l,l,10),A.f,l,l,new B.o(A.c,l,n,p,l,l,A.n),l,l,l,l,A.nK,l,l,l),l,l,l,2,l,l))
return B.aG(!1,A.a3,!0,l,B.aM(!1,k,!0,B.eB(new B.a4(48,48,new B.an(A.A,l,A.ac,A.t,q,l),l),l,new B.o(l,l,r,v,l,new B.a8(u,t,A.x,s,l,l),A.n),l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.b,l,l,l,l,l,l,l),A.f,A.L,0,l,A.L,l,l,l,A.ai)},
$S:141}
C.eD0.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.aB(0,o)
o=B.l(22)
v=B.l(22)
u=q.c
t=B.ap(u,A.b_,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.K(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.K(A.c.j(0.4+w*0.15),A.r,1)
return B.aG(!1,A.a3,!0,p,B.aM(!1,o,!0,B.eB(B.x(B.a([B.e2(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a7),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ae,B.d(q.e,p,p,p,p,p,p,A.j1,A.K,p,p)],x.p),A.l,p,A.b8,A.h,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ay,A.aD,A.x,u,p,p),A.n),p,A.CD,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.ai)},
$S:141}
C.eH6.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.atp,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a6,w,A.ao,w,w,w,w)
return B.ej(B.a([B.bO(!1,A.ds,w,w,!0,w,w,w,new C.eH4(d),w,w),B.bI(A.ri,w,new C.eH5(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eH4.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eH5.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).N(w)
return null},
$S:0}
C.daU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.d
h===$&&B.c()
h=h.x
h===$&&B.c()
w=A.dH.aB(0,h)
h=i.e
h===$&&B.c()
v=h.x
v===$&&B.c()
u=A.ei.aB(0,A.j.D(v,0,1))
h=h.x
h===$&&B.c()
h=A.e6.aB(0,h)
v=B.l(22)
t=B.ap(A.aM,A.d.gH(C.kO(i.a.c.w)?D.vl:K.nR),w*0.35)
t.toString
t=B.K(t,A.r,1.2)
s=x.V
r=B.a([new B.ab(w*2,A.G,A.d.gH(C.kO(i.a.c.w)?D.vl:K.nR).j(0.18+w*0.12),A.J,32+w*10),D.aft],s)
q=B.l(22)
p=x.O
o=B.ao(j,B.p(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bV(A.aZ,0.9,A.x,j,0,B.a([A.d.gH(C.kO(i.a.c.w)?D.vl:K.nR).j(0.22+w*0.1),A.L],p),j,j),A.n),j,80,j,j,j,j,j,j),j,j,0,0,-28,j)
n=64+w*6
m=A.d.gH(C.kO(i.a.c.w)?D.vl:K.nR).j(0.28+w*0.14)
p=B.p(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bV(A.A,0.5,A.x,j,0,B.a([m,A.d.gal(C.kO(i.a.c.w)?D.vl:K.nR).j(0.08),A.L],p),j,j),A.a7),j,n,j,j,j,j,j,n)
n=B.l(14)
m=i.a.c.w
l=C.kO(m)?D.vl:K.nR
s=B.a([new B.ab(0,A.G,A.d.gH(C.kO(m)?D.vl:K.nR).j(0.45+w*0.2),A.cy,18)],s)
m=x.p
l=B.a([p,B.e2(A.A,B.p(j,B.X(C.kO(i.a.c.w)?A.tg:A.qU,A.c,j,j,j,22),A.f,j,j,new B.o(j,j,j,n,s,new B.a8(A.ay,A.aD,A.x,l,j,j),A.n),j,46,j,j,j,j,j,46),1+w*0.04,j,j)],m)
s=B.a([new B.an(A.A,j,A.ac,A.t,l,j),A.T,B.d("PRESENTATION",j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kO(i.a.c.w)?D.vl:K.nR).j(0.85+w*0.15),j,j,j,j,j,j,j,j,10,j,j,A.H,j,j,!0,j,1.4,j,j,j,j,j,j),A.K,j,j),A.fC,B.d(i.a.c.b,j,2,A.a2,j,j,j,D.fBN,A.K,j,j),A.aw,B.d(i.gcDz(),j,j,j,j,j,j,D.fGT,A.K,j,j),A.aB],m)
p=i.a.c
if(p.z){p=p.gTh()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.u(s,B.a([B.d(p,j,j,j,j,j,j,B.m(j,j,A.d.gH(C.kO(i.a.c.w)?D.vl:K.nR).j(0.9),j,j,j,j,j,j,j,j,11,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),A.ae],m))}s.push(new C.KI(A.zj,"Download PDF","pdf",A.d8,i.JI(0),!1,j))
p=i.a.c
if(!p.z||p.gTh()){p=i.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KI(A.jN,"Transfer to "+C.hEM(p==null?"":p),"transfer_hati",A.aV,i.JI(1),!1,j)],m))}p=i.a.c
if(!p.z){p=p.w
n=i.JI(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KI(D.bRX,"Rename presentation","rename",A.ci,n,!1,j),A.am,new C.KI(A.apI,"Duplicate","duplicate",A.b7,i.JI(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,j)],m))}p=i.a
n=p.c
l=n.w
k=l==="hati_kiapo_uongozi"
if(!k||p.e){p=k?"Delete for everyone":"Delete presentation"
if(n.z)n=1
else n=l==="hati_kuhowa"||l==="hati_kuhoweya"?4:3
A.d.u(s,B.a([A.P,new C.KI(A.ek,p,"delete",A.aA,i.JI(n),!0,j)],m))}s.push(A.aw)
p=i.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=i.JI(p)
n=i.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=i.JI(n)
s.push(B.dP(B.d3(B.bO(!1,E.aXI,j,j,!0,j,j,j,new C.daT(d),j,B.ft(j,j,j,j,j,j,j,j,j,j,j,A.bP,j,j,j,A.az,j,D.bGG,j,j,j,j,j,A.kB,j,j)),n),new B.r(0,(1-p)*8)))
return B.e2(A.A,B.d3(B.aG(!1,A.a3,!0,j,B.p(j,B.bu(q,new B.an(A.a0,j,A.ac,A.t,B.a([o,new B.D(D.bFO,B.x(s,A.l,j,A.e,A.N,0,A.p),j)],m),j),A.aq),A.f,j,A.Y0,new B.o(A.av,j,t,v,r,j,A.n),j,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.ai),h),0.88+u*0.12,j,j)},
$S:45}
C.daT.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.dbh.prototype={
$0(){B.a5(this.a,!1).N(!1)
return null},
$S:0}
C.dbi.prototype={
$0(){B.a5(this.a,!1).N(!0)
return null},
$S:0}
C.daR.prototype={
$1(d){var w=this.a
return w.m(new C.daN(w))},
$S:22}
C.daN.prototype={
$0(){return this.a.d=!0},
$S:0}
C.daS.prototype={
$1(d){var w=this.a
return w.m(new C.daM(w))},
$S:61}
C.daM.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daQ.prototype={
$0(){var w=this.a
return w.m(new C.daO(w))},
$S:0}
C.daO.prototype={
$0(){return this.a.d=!1},
$S:0}
C.daP.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).N(w)
return null},
$S:0}
C.eJM.prototype={
$0(){return $.bnd=!$.bnd},
$S:0}
C.eJC.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaXR())u.azO()},
$S:0}
C.eJL.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eJD.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eJE.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azO()},
$S:0}
C.eJy.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eJz.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eJA.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eJB.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eJJ.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b2,A.t,w,null)},
$S:1735}
C.eJK.prototype={
$2(d,e){var w
if(e.gc4(e)===A.ir)return new B.d2(e,!1,d,null)
w=this.a
return w.cBt(w.e,d,e)},
$S:443}
C.eJF.prototype={
$2(d,e){var w=B.dq(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fG((1-v.gp(0))*1.5708)
return B.fB(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJG.prototype={
$2(d,e){var w=B.dq(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k0((1-v.gp(0))*1.5708)
return B.fB(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJH.prototype={
$2(d,e){var w=B.dq(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fG(v.gp(0)*0.8)
w.k0(v.gp(0)*0.35)
return B.fB(A.A,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJI.prototype={
$2(d,e){var w=B.dq(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fG(-v.gp(0)*1.2)
return B.fB(A.a9,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eJN.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.ga_1().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.ga_1().x
t===$&&B.c()
return new C.b3F(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.JF(v.c,t,!0,new B.bj("cine"+u,x.W))},
$S:710}
C.eJP.prototype={
$1(d){var w=this.a
if(d.b.a>B.aF(this.b,A.c_,x.w).w.a.a*0.55)w.azO()
else w.cpN()},
$S:61}
C.eJO.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fVD.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.u(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:444}
C.fVM.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ej(B.a([B.bO(!1,A.ds,w,w,!0,w,w,w,new C.fVJ(d),w,w),B.bO(!1,D.h_s,w,w,!0,w,w,w,new C.fVK(d,this.b,v),w,w),B.bI(A.aY0,w,new C.fVL(d,v,this.c),w)],x.p),w,w,O.uu,new B.a4(320,w,t,w),w,w,w,w,D.h1_,w)},
$S:18}
C.fVJ.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.fVK.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
C.hii(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fVL.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aSk(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aRM(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fVC.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.clC.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:637}
C.fVI.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fqD.prototype={
$1(d){return C.hig(C.Xe(B.a1(d,x.N,x.z)),this.a)},
$S:z+97}
C.h41.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:89}
C.h42.prototype={
$4(d,e,f,g){var w=A.ck.aB(0,e.gp(0))
return B.d3(B.e2(A.A,D.hD7,0.94+w*0.06,null,null),w)},
$S:264}
C.h43.prototype={
$1(d){var w=this
return new C.Xg(w.a,w.b,w.c,w.d,null)},
$S:z+98}
C.eJi.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eJe.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eJh.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Xh(u,this.b,w.gaQV(),v,null)},
$S:z+100}
C.eJf.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eJg.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eJj.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eJk.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eJn.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eJo.prototype={
$0(){var w=this.a
return w.m(new C.eJm(w))},
$S:0}
C.eJm.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eJp.prototype={
$0(){var w=this.a
return w.m(new C.eJl(w))},
$S:0}
C.eJl.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eJq.prototype={
$1(d){return this.a.bO3(d,this.b)},
$S:z+101}
C.eJd.prototype={
$0(){var w=this.a
return w.m(new C.eJc(w,this.b))},
$S:0}
C.eJc.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eJr.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eJs.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eJt.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eJu.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eJv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fy(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.T(D.fnn)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eCV.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eCU())},
$S:0}
C.eCU.prototype={
$0(){},
$S:0}
C.eCW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:7}
C.eCR.prototype={
$1(d){return this.a.m(new C.eCQ())},
$S:2}
C.eCQ.prototype={
$0(){},
$S:0}
C.eCS.prototype={
$1(d){return this.a.b27()},
$S:2}
C.eCT.prototype={
$0(){B.a5(this.a,!1).N(null)
return null},
$S:0}
C.eJx.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qv(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eJw(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eJw.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fPN.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.en(new B.k5(this.c,new C.fPM(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:221}
C.fPM.prototype={
$3(d,e,f){return new C.JF(e,!1,!1,new B.bj(e.a,x.W))},
$S:z+103}
C.fPO.prototype={
$1(d){var w=null
return B.oQ(!1,B.as(new C.by_(this.a,this.b,w),w,w,w),w,x.z)},
$S:343}
C.fPS.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aU.gmv(),$async$$0)
case 3:w=4
return B.b(B.bN(A.me,null,x.H),$async$$0)
case 4:w=5
return B.b($.aU.gmv(),$async$$0)
case 5:s=$.aU.ao$.x.h(0,t.a)
r=s==null?null:s.gbf()
if(!(r instanceof B.qm))throw B.W("Could not draw the slide.")
u=r.lU(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1738}
C.fPT.prototype={
boQ(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hi(A.he),$async$$1)
case 3:r=f
if(r==null)throw B.W("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hP([J.eQ(A.dK.gaU(r))],"image/png"))
t.toString
s=Ap.h8y(t)
w=4
return B.b(new B.qu(s,"load",!1,x.ev).gH(0).dg(0,A.k3),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.boQ(d)},
$S:1739}
C.fPP.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:155}
C.fPQ.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h0(0)},
$S:155}
C.fPR.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fkG.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fy7,A.K,w,w)},
$S:1740}
C.fkH.prototype={
$3(d,e,f){var w=null,v=B.l(99)
return B.bu(v,B.kr(A.bs,w,A.dP,8,w,e===0?w:e,w),A.aq)},
$S:652}
C.era.prototype={
$1(d){this.a.a0l()
return null},
$S:12}
C.er8.prototype={
$0(){return this.a.e=D.bBA},
$S:0}
C.er9.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bC
return this.b.e=w},
$S:0}
C.cpS.prototype={
$1(d){return A.o.dz(1,d.a)},
$S:z+104}
C.cpT.prototype={
$2(d,e){return(d|e)>>>0},
$S:66};(function aliases(){var w=C.aOd.prototype
w.bA2=w.t
w=C.aNI.prototype
w.bzw=w.t
w=C.aNr.prototype
w.bze=w.t
w=C.aNH.prototype
w.bzv=w.t
w=C.aOb.prototype
w.bA0=w.t
w=C.aPv.prototype
w.bBv=w.t
w=C.aMm.prototype
w.by6=w.t
w=C.aOo.prototype
w.bAd=w.t
w=C.aOp.prototype
w.bAe=w.t
w=C.b5m.prototype
w.buB=w.aFk})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"ir8","apa",105)
v(C.aLi.prototype,"gc95","a_8",0)
var r
u(r=C.azK.prototype,"gcCV","cCW",40)
v(r,"gc9V","aeT",0)
v(r=C.azG.prototype,"gb0v","EE",3)
v(r,"gc9S","c9T",3)
v(r,"gayU","yu",0)
v(r,"gaAW","K_",0)
t(C,"irz","hXh",106)
v(C.aFT.prototype,"gccZ","cd_",3)
s(C,"irH",0,null,["$4$paper$photo$request$template"],["fX2"],107,0)
s(C,"irG",0,null,["$5$doc$history$instruction$photo$template"],["bFb"],108,0)
v(r=C.aG9.prototype,"gcdI","JF",0)
v(r,"gbNw","XR",0)
v(r,"gcdL","afM",0)
v(r,"gcdK","a06",0)
v(r,"gb1N","EV",0)
v(C.aGc.prototype,"gcdQ","a08",0)
v(r=C.aHD.prototype,"gb2_","QL",0)
v(r,"gcuF","b6o",3)
v(r,"gcEi","aDt",94)
v(r,"gbRr","abB",0)
v(r,"gceg","B8",0)
v(r=C.aJz.prototype,"gcow","a1v",0)
v(r,"gcoE","a1y",0)
v(r,"gbGh","aa0",0)
v(r,"gcek","afY",0)
v(C.aJy.prototype,"gcel","afZ",0)
v(C.aDy.prototype,"gbFg","a9O",0)
v(C.aBU.prototype,"gcem","a0j",0)
w(C,"irR","ipQ",12)
w(C,"irP","imD",12)
w(C,"irQ","ioO",12)
v(r=C.aGt.prototype,"gcHC","cHD",3)
v(r,"gcsV","csW",3)
u(r,"gF0","agI",7)
v(r,"gbL7","atP",3)
u(r,"gF1","b3n",7)
v(r,"gcgD","agp",0)
v(r,"gcfu","ago",0)
v(r,"gc4o","Zv",0)
v(r,"gciQ","agJ",0)
v(r,"gbNt","ab9",0)
v(r,"gcjK","a0W",0)
v(r,"gcjL","ah_",0)
v(r,"gckh","ah6",0)
v(r,"gcj2","agM",0)
v(r,"gbRD","abF",0)
v(r,"gaUB","aUC",3)
v(r,"gaTH","aTI",3)
v(r,"gaPb","aPc",3)
v(r,"gaTG","auG",3)
u(r,"gbFx","bFy",81)
v(r,"gaD_","b9A",3)
v(r,"gcfw","cfx",3)
v(r,"gc2_","c20",3)
v(r,"gbPW","bPX",3)
v(r=C.aGw.prototype,"gcGp","cGq",3)
v(r,"gcG2","cG3",3)
t(C,"irS","iq6",2)
v(r=C.aGu.prototype,"gces","JK",0)
v(r,"gcwG","Sf",0)
v(r,"gcep","JJ",0)
v(r,"gcIW","a44",0)
v(r,"gckt","ahd",0)
v(C.aGs.prototype,"gcet","b27",3)
v(r=C.aGv.prototype,"gbSt","abP",0)
u(r,"gceq","cer",102)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aE,[C.ok,C.SX,C.bKV,C.bJ8,C.cH7,C.cH5,C.bTa,C.bb3,C.cH6,C.bHJ,C.cpM,C.cpK,C.cpL,C.cpJ,C.auI,C.cpI,C.bUc,C.oP,C.aH5,C.jG,C.o8,C.a9d,C.Ac,C.lB,C.oZ,C.mt,C.Ad,C.ob,C.a9l,C.at2,C.b3G,C.eqA,C.ly,C.Fs,C.ey,C.jd,C.Fj,C.ye,C.eS,C.m3,C.hU,C.k1,C.a9m,C.agz,C.b3H,C.b5m,C.a4f])
u(B.jz,[C.cP9,C.c4b,C.fKX,C.cQG,C.cQ2,C.fQv,C.cg3,C.e8M,C.e8L,C.erd,C.erc,C.fRV,C.frM,C.frN,C.cjR,C.cjS,C.cjT,C.euS,C.f3s,C.f2Q,C.f2P,C.f3T,C.f3q,C.f3j,C.f3C,C.f4i,C.fA0,C.faC,C.faB,C.fb4,C.eqD,C.fVz,C.e4_,C.h1v,C.fSh,C.clu,C.cls,C.clx,C.fSR,C.fSS,C.fST,C.fSU,C.cle,C.clf,C.dQV,C.clb,C.fSQ,C.fi2,C.e1I,C.cl4,C.eqj,C.fQk,C.eGw,C.eGV,C.eGS,C.eGR,C.eH1,C.eH0,C.eIw,C.eIv,C.eGL,C.eGK,C.eDj,C.eEu,C.eHt,C.eIO,C.eIN,C.eEh,C.eFs,C.eD0,C.daU,C.eJJ,C.eJK,C.eJF,C.eJG,C.eJH,C.eJI,C.eJN,C.clC,C.eJi,C.eJt,C.cpT])
u(B.hx,[C.cPa,C.cPb,C.bUd,C.fHL,C.c4a,C.c4d,C.fYS,C.fjc,C.fj3,C.fjj,C.fqE,C.fqF,C.fKY,C.fKW,C.fYk,C.fHp,C.fZd,C.cQw,C.cQB,C.cQD,C.cQz,C.cQE,C.cQx,C.cQF,C.cQs,C.cQp,C.cQo,C.cQv,C.cPY,C.cPW,C.fPx,C.fPy,C.fv4,C.fQw,C.fQC,C.fu6,C.cg2,C.cg5,C.fPv,C.fPw,C.fKk,C.fKl,C.fQB,C.fQx,C.fQz,C.fQA,C.fQy,C.h1N,C.fKo,C.fKp,C.fKs,C.fKt,C.fKw,C.fKx,C.h3k,C.fsf,C.h3v,C.eua,C.eub,C.euc,C.etT,C.eu4,C.eu5,C.eu7,C.cjQ,C.cjO,C.cjP,C.fQb,C.fQd,C.fQc,C.frO,C.frP,C.h3y,C.euX,C.euY,C.euP,C.euQ,C.euT,C.euU,C.h3O,C.f4j,C.f3J,C.f3t,C.f3G,C.f2L,C.f2M,C.f2N,C.f2R,C.f2S,C.f48,C.f4f,C.f4h,C.f3S,C.f3U,C.f3Y,C.f3Z,C.f4_,C.f43,C.f3V,C.f3W,C.f32,C.f33,C.f34,C.f35,C.f36,C.f37,C.f38,C.f39,C.f3a,C.f2o,C.f2p,C.f2q,C.f2r,C.f2t,C.f2u,C.f2X,C.f2Y,C.f2Z,C.f3_,C.f30,C.f2y,C.f2z,C.f2A,C.f2B,C.f3i,C.f3B,C.fNA,C.fNz,C.cll,C.fA_,C.fVv,C.fVo,C.fVr,C.fTl,C.fTm,C.fTn,C.fNH,C.fNG,C.fNF,C.fND,C.frI,C.frJ,C.frK,C.h4_,C.faE,C.faF,C.fay,C.fas,C.faY,C.faZ,C.fb0,C.fb1,C.faX,C.h3Z,C.faj,C.fzg,C.eqC,C.fVx,C.fVy,C.fVA,C.fVt,C.fVu,C.h3c,C.dtk,C.dtq,C.eqB,C.fo0,C.fo2,C.fo1,C.fo_,C.fOL,C.fON,C.fq8,C.fV_,C.fV0,C.fV1,C.fVc,C.fVh,C.fVi,C.fVj,C.fVk,C.fVl,C.fVm,C.fVn,C.fV2,C.fV3,C.fV4,C.fV5,C.fV6,C.fV7,C.fV8,C.fV9,C.fVa,C.fVb,C.fVd,C.fVe,C.fVf,C.fVg,C.fMB,C.fyz,C.fyy,C.fVG,C.e40,C.e3Z,C.f9s,C.cfE,C.cfG,C.h1x,C.diF,C.diH,C.h1w,C.h1u,C.h3Y,C.fSd,C.dif,C.fKA,C.fKB,C.clj,C.clk,C.cli,C.cl8,C.cl9,C.cl5,C.cl6,C.cl7,C.clA,C.clv,C.clq,C.clr,C.clt,C.clw,C.cly,C.fSV,C.cld,C.clg,C.clh,C.cln,C.clo,C.fVN,C.fUU,C.clc,C.cla,C.fSP,C.fBj,C.cl3,C.f6X,C.fEo,C.eJ9,C.eFz,C.eFA,C.eH9,C.eGY,C.eGZ,C.eEX,C.eIV,C.eIW,C.eIX,C.eEl,C.eGD,C.eGF,C.eGf,C.eGc,C.eFv,C.eFw,C.eGm,C.eEn,C.eGy,C.eGz,C.eGx,C.eGB,C.eGA,C.eGT,C.eGU,C.eGW,C.eGP,C.eEG,C.eED,C.eH2,C.eEv,C.eIU,C.eD2,C.eEy,C.eEx,C.eDL,C.eDQ,C.eDO,C.eDM,C.eJ1,C.eJ2,C.eJ3,C.eJ0,C.eIy,C.eIx,C.eIr,C.eIt,C.eIj,C.eIS,C.eIQ,C.eDa,C.eD6,C.eFt,C.eDU,C.eDl,C.eDk,C.eDH,C.eDI,C.eEV,C.eDW,C.eE_,C.eE0,C.eGM,C.eIk,C.eIl,C.eIm,C.eIn,C.eEp,C.eEq,C.eEr,C.eFW,C.eER,C.eEJ,C.eEQ,C.eG5,C.eG6,C.eHT,C.eHV,C.eIe,C.eIg,C.eHW,C.eHX,C.eDS,C.eFy,C.eFx,C.eII,C.eEg,C.eE8,C.eE9,C.eEc,C.eEd,C.eGa,C.eFe,C.eFf,C.eFg,C.eFh,C.eFi,C.eFj,C.eFk,C.eFl,C.eFm,C.eFn,C.eFo,C.eH6,C.daR,C.daS,C.eJP,C.fVD,C.fVM,C.fVC,C.fVI,C.fqD,C.h41,C.h42,C.h43,C.eJh,C.eJq,C.eCW,C.eCR,C.eCS,C.fPN,C.fPM,C.fPO,C.fPT,C.fPP,C.fPQ,C.fkG,C.fkH,C.era,C.cpS])
u(B.iO,[C.cPc,C.fj8,C.fjd,C.fje,C.fj9,C.fja,C.fjb,C.fj1,C.fj2,C.fj4,C.fj5,C.fji,C.fjh,C.fj7,C.fj6,C.fjf,C.fjg,C.fjl,C.fjm,C.fjk,C.cQy,C.cQC,C.cQA,C.cQq,C.cQr,C.cQt,C.cQm,C.cQn,C.cQu,C.cQl,C.cQk,C.cQj,C.cPN,C.cPM,C.cPP,C.cPX,C.cPQ,C.cPO,C.cPS,C.cPT,C.cPU,C.cPR,C.cPV,C.cPZ,C.cQ_,C.cQ0,C.cQ1,C.fKi,C.fKj,C.fKg,C.fKh,C.emr,C.emp,C.emq,C.ems,C.emt,C.e8K,C.fKm,C.fKn,C.fKq,C.fKr,C.fKu,C.fKv,C.erb,C.fSk,C.fSj,C.eu9,C.eu8,C.etN,C.etJ,C.etU,C.etV,C.etW,C.etP,C.etQ,C.etR,C.etS,C.etO,C.etL,C.etM,C.eu1,C.eu2,C.eu0,C.eu3,C.eu_,C.etZ,C.etY,C.eu6,C.etX,C.etK,C.euW,C.euK,C.euL,C.euR,C.euM,C.euO,C.euN,C.euV,C.f3b,C.f3z,C.f2V,C.f2W,C.f2T,C.f2U,C.f3F,C.f3E,C.f3D,C.f3I,C.f3H,C.f2K,C.f2O,C.f2J,C.f2I,C.f2F,C.f2H,C.f2G,C.f4g,C.f49,C.f47,C.f4a,C.f46,C.f4b,C.f45,C.f4c,C.f4d,C.f4e,C.f44,C.f3R,C.f3M,C.f3X,C.f3Q,C.f40,C.f3P,C.f41,C.f3O,C.f42,C.f3N,C.f3w,C.f3v,C.f3x,C.f3u,C.f3y,C.f3o,C.f3n,C.f3p,C.f3m,C.f3l,C.f3k,C.f2s,C.f2n,C.f2C,C.f2x,C.f2D,C.f2w,C.f2E,C.f2v,C.f3r,C.f3f,C.f3e,C.f3g,C.f3d,C.f3h,C.f3c,C.f3A,C.f3L,C.f3K,C.f31,C.fVq,C.fVs,C.fVw,C.fNE,C.fQ4,C.fQ2,C.fQ3,C.faG,C.faH,C.faD,C.fax,C.faw,C.faz,C.faA,C.fam,C.fan,C.fap,C.faq,C.far,C.fao,C.fat,C.faU,C.faV,C.faT,C.faW,C.faS,C.faR,C.faQ,C.fb_,C.faP,C.faO,C.faN,C.fb2,C.faM,C.fb3,C.faL,C.faK,C.fau,C.fav,C.faJ,C.faI,C.faf,C.fag,C.fah,C.fai,C.fae,C.fak,C.fal,C.dtj,C.dtl,C.dto,C.dtp,C.dtn,C.dtm,C.fOM,C.fMC,C.cfF,C.cfH,C.diy,C.diD,C.diE,C.diC,C.diB,C.diG,C.diA,C.diz,C.diI,C.h1t,C.dpl,C.dpm,C.dpn,C.fKy,C.fKz,C.clB,C.eCX,C.eCY,C.eCZ,C.eD_,C.fBh,C.fBi,C.e1K,C.e1J,C.dfs,C.dfr,C.eJb,C.eJa,C.eFB,C.eIh,C.eJ7,C.eH7,C.eIY,C.eIZ,C.eJ8,C.eGg,C.eEj,C.eEk,C.eGE,C.eGe,C.eGb,C.eGd,C.eGh,C.eGi,C.eGj,C.eGk,C.eGl,C.eGn,C.eEo,C.eGq,C.eGr,C.eGs,C.eGt,C.eGu,C.eGv,C.eGp,C.eGC,C.eGQ,C.eGO,C.eGX,C.eGo,C.eEE,C.eEF,C.eEH,C.eH_,C.eH3,C.eDh,C.eEC,C.eEA,C.eHb,C.eEw,C.eHa,C.eEm,C.eEY,C.eIT,C.eIi,C.eDi,C.eDf,C.eD5,C.eD1,C.eD3,C.eEz,C.eDK,C.eDP,C.eDN,C.eDJ,C.eGN,C.eJ4,C.eIu,C.eIp,C.eIq,C.eIs,C.eFr,C.eFq,C.eIR,C.eD8,C.eD9,C.eDb,C.eDc,C.eDg,C.eD7,C.eH8,C.eJ_,C.eFu,C.eDT,C.eD4,C.eEW,C.eDd,C.eDm,C.eDn,C.eDo,C.eDz,C.eDC,C.eDD,C.eDE,C.eDF,C.eDG,C.eDp,C.eDq,C.eDr,C.eDs,C.eDt,C.eDu,C.eDv,C.eDw,C.eDx,C.eDy,C.eDA,C.eDB,C.eEU,C.eET,C.eES,C.eDe,C.eDX,C.eDV,C.eDY,C.eDZ,C.eEB,C.eGI,C.eGJ,C.eGG,C.eGH,C.eIo,C.eEt,C.eEs,C.eFV,C.eFU,C.eFX,C.eFT,C.eFY,C.eFS,C.eFZ,C.eFR,C.eG_,C.eFQ,C.eG0,C.eFP,C.eG1,C.eFO,C.eG2,C.eFN,C.eFG,C.eFH,C.eFI,C.eFF,C.eFJ,C.eFE,C.eFK,C.eFD,C.eFL,C.eFC,C.eFM,C.eEO,C.eEP,C.eEI,C.eEK,C.eEL,C.eEM,C.eEN,C.eJ5,C.eJ6,C.eG4,C.eG3,C.eG7,C.eHu,C.eHv,C.eHw,C.eHH,C.eHS,C.eI2,C.eI9,C.eIa,C.eIb,C.eIc,C.eId,C.eHx,C.eHy,C.eHz,C.eHA,C.eHB,C.eHC,C.eHD,C.eHE,C.eHF,C.eHG,C.eHI,C.eHJ,C.eHK,C.eHL,C.eHM,C.eHN,C.eHO,C.eHP,C.eHQ,C.eHk,C.eHR,C.eHs,C.eHr,C.eHU,C.eHq,C.eHg,C.eIf,C.eHp,C.eHf,C.eHd,C.eHo,C.eHe,C.eHc,C.eHY,C.eHn,C.eHZ,C.eI_,C.eI0,C.eI1,C.eHm,C.eI3,C.eI4,C.eI5,C.eHl,C.eI6,C.eHj,C.eI7,C.eHi,C.eI8,C.eHh,C.eDR,C.eIB,C.eIA,C.eIC,C.eIz,C.eF0,C.eF_,C.eF1,C.eEZ,C.eIM,C.eIH,C.eIL,C.eID,C.eIE,C.eIF,C.eIG,C.eIJ,C.eIK,C.eIP,C.eEi,C.eE5,C.eE6,C.eE7,C.eE4,C.eEb,C.eEa,C.eE3,C.eE2,C.eEe,C.eE1,C.eEf,C.eG9,C.eG8,C.eFd,C.eFc,C.eFb,C.eFa,C.eF9,C.eF8,C.eF7,C.eF6,C.eF3,C.eF5,C.eF4,C.eF2,C.eFp,C.eH4,C.eH5,C.daT,C.dbh,C.dbi,C.daN,C.daM,C.daQ,C.daO,C.daP,C.eJM,C.eJC,C.eJL,C.eJD,C.eJE,C.eJy,C.eJz,C.eJA,C.eJB,C.eJO,C.fVJ,C.fVK,C.fVL,C.eJe,C.eJf,C.eJg,C.eJj,C.eJk,C.eJn,C.eJo,C.eJm,C.eJp,C.eJl,C.eJd,C.eJc,C.eJr,C.eJs,C.eJu,C.eJv,C.eCV,C.eCU,C.eCQ,C.eCT,C.eJx,C.eJw,C.fPS,C.fPR,C.er8,C.er9])
t(C.aTG,B.M)
u(B.lo,[C.a4Z,C.aza,C.axP,C.yc,C.yf,C.le,C.tP,C.C7,C.rZ,C.wz,C.atA,C.JG,C.at1,C.vi,C.mV,C.hJ,C.a9Z])
u(C.bTa,[C.cH8,C.bTb])
u(C.cpM,[C.cpQ,C.auH])
t(C.cpP,C.cpK)
t(C.cpO,C.cpJ)
t(C.cpR,C.cpO)
t(C.cpN,C.cpL)
t(C.cpH,C.cpI)
t(C.bcE,B.pg)
t(C.cAe,B.axh)
t(C.a9L,B.xZ)
u(B.af,[C.a2e,C.ZX,C.ZV,C.as8,C.X4,C.X5,C.a1d,C.a1K,C.a1J,C.aG3,C.a07,C.Op,C.a_F,C.a0_,C.aq2,C.aKY,C.Wl,C.aBz,C.a93,C.OV,C.aAW,C.KI,C.a0R,C.Xg,C.Xh,C.aGr,C.at6,C.a94])
u(B.ah,[C.aLi,C.azK,C.azG,C.aFT,C.aG9,C.aGc,C.aHD,C.aJz,C.aJy,C.aOd,C.aDy,C.aNI,C.aBU,C.biG,C.aNr,C.aPv,C.aNH,C.bgt,C.aOb,C.aOo,C.aMm,C.bfe,C.aOp,C.aGu,C.bnc,C.aGs,C.aGv,C.bmW])
u(B.aw,[C.azI,C.aeG,C.ae4,C.blV,C.aeJ,C.agp,C.b3h,C.bvz,C.b3C,C.bot,C.bu5,C.b1w,C.b3F,C.aeM,C.af2,C.b3D,C.JF,C.b1z,C.bfu,C.QE,C.KO,C.bke,C.bkd,C.by_])
u(B.I4,[C.beW,C.bwY,C.aLF,C.bhG,C.buu])
u(B.mn,[C.beV,C.bbm,C.bur,C.bet,C.bi4,C.bkl,C.bh9,C.bi0,C.bhI,C.bqP,C.bcw,C.bc9,C.bxW,C.buU,C.bu1,C.bh2,C.b3A,C.bsV,C.btZ])
t(C.bmT,C.aOd)
t(C.bme,C.aNI)
t(C.blX,C.aNr)
t(C.bxq,C.aPv)
t(C.bma,C.aNH)
t(C.bmR,C.aOb)
t(C.bAi,C.aOo)
t(C.aGt,C.bAi)
t(C.bff,C.aMm)
t(C.aGw,C.aOp)
t(C.bxM,B.j5)
t(C.a9Y,B.kK)
t(C.cpU,C.b5m)
t(C.ajE,C.a4f)
u(B.YW,[C.aTy,C.aV_])
t(C.ayL,C.aTy)
w(C.aOd,B.cd)
w(C.aNI,B.cd)
w(C.aNr,B.cd)
w(C.aNH,B.cd)
w(C.aOb,B.cd)
w(C.aPv,B.cd)
w(C.aMm,B.eO)
w(C.aOo,B.cd)
v(C.bAi,B.eD)
w(C.aOp,B.cd)})()
B.j6(b.typeUniverse,JSON.parse('{"aUh":{"hR":["aUh"]},"ok":{"aUh":[],"hR":["aUh"]},"aTG":{"M":["SX"],"M.E":"SX"},"bcE":{"pg":[]},"a9L":{"xZ":[],"oI":[]},"a2e":{"af":[],"v":[]},"aLi":{"ah":["a2e"]},"ZX":{"af":[],"v":[]},"ZV":{"af":[],"v":[]},"azK":{"ah":["ZX"]},"azG":{"ah":["ZV"]},"azI":{"aw":[],"v":[]},"as8":{"af":[],"v":[]},"aFT":{"ah":["as8"]},"aeG":{"aw":[],"v":[]},"ae4":{"aw":[],"v":[]},"aeJ":{"aw":[],"v":[]},"agp":{"aw":[],"v":[]},"blV":{"aw":[],"v":[]},"X4":{"af":[],"v":[]},"aG9":{"ah":["X4"]},"b3h":{"aw":[],"v":[]},"beW":{"aC":[]},"beV":{"aC":[]},"bwY":{"aC":[]},"bbm":{"aC":[]},"bur":{"aC":[]},"X5":{"af":[],"v":[]},"aGc":{"ah":["X5"]},"bet":{"aC":[]},"a1d":{"af":[],"v":[]},"aHD":{"ah":["a1d"]},"bi4":{"aC":[]},"a1K":{"af":[],"v":[]},"a1J":{"af":[],"v":[]},"aG3":{"af":[],"v":[]},"a07":{"af":[],"v":[]},"aJz":{"ah":["a1K"]},"aJy":{"ah":["a1J"]},"bmT":{"ah":["aG3"]},"bkl":{"aC":[]},"aDy":{"ah":["a07"]},"bvz":{"aw":[],"v":[]},"b3C":{"aw":[],"v":[]},"bot":{"aw":[],"v":[]},"Op":{"af":[],"v":[]},"a_F":{"af":[],"v":[]},"bme":{"ah":["Op"]},"bu5":{"aw":[],"v":[]},"bh9":{"aC":[]},"b1w":{"aw":[],"v":[]},"aBU":{"ah":["a_F"]},"a0_":{"af":[],"v":[]},"biG":{"ah":["a0_"]},"bi0":{"aC":[]},"bhI":{"aC":[]},"bqP":{"aC":[]},"bcw":{"aC":[]},"bc9":{"aC":[]},"bxW":{"aC":[]},"buU":{"aC":[]},"bu1":{"aC":[]},"bh2":{"aC":[]},"aq2":{"af":[],"v":[]},"b3F":{"aw":[],"v":[]},"blX":{"ah":["aq2"]},"aeM":{"aw":[],"v":[]},"af2":{"aw":[],"v":[]},"aKY":{"af":[],"v":[]},"Wl":{"af":[],"v":[]},"JF":{"aw":[],"v":[]},"aBz":{"af":[],"v":[]},"a93":{"af":[],"v":[]},"b3D":{"aw":[],"v":[]},"b3A":{"aC":[]},"bxq":{"ah":["aKY"]},"aLF":{"aC":[]},"bma":{"ah":["Wl"]},"bgt":{"ah":["aBz"]},"bmR":{"ah":["a93"]},"b1z":{"aw":[],"v":[]},"bhG":{"aC":[]},"bsV":{"aC":[]},"btZ":{"aC":[]},"aAW":{"af":[],"v":[]},"KI":{"af":[],"v":[]},"a0R":{"af":[],"v":[]},"KO":{"aw":[],"v":[]},"OV":{"af":[],"v":[]},"aGt":{"ah":["OV"],"eD":[]},"bff":{"ah":["aAW"]},"bfu":{"aw":[],"v":[]},"bfe":{"ah":["KI"]},"QE":{"aw":[],"v":[]},"aGw":{"ah":["a0R"]},"buu":{"aC":[]},"bke":{"aw":[],"v":[]},"bkd":{"aw":[],"v":[]},"Xg":{"af":[],"v":[]},"Xh":{"af":[],"v":[]},"aGr":{"af":[],"v":[]},"at6":{"af":[],"v":[]},"aGu":{"ah":["Xg"]},"bnc":{"ah":["Xh"]},"aGs":{"ah":["aGr"]},"bxM":{"j5":[]},"aGv":{"ah":["at6"]},"by_":{"aw":[],"v":[]},"a94":{"af":[],"v":[]},"bmW":{"ah":["a94"]},"a9Y":{"kK":["fA<eX>"],"kw":["fA<eX>"]},"ajE":{"a4f":[]},"aTy":{"ji":[],"fk":[]},"ayL":{"ji":[],"fk":[]},"aV_":{"ji":[],"fk":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",K:"Open Blank or Class Template to start \u2014 nothing is saved until you edit.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.at
return{bu:w("MC"),U:w("w3<qp>"),bz:w("u"),M:w("db<n>"),bo:w("jW"),g7:w("Ui"),gc:w("aB<iJ?>"),bq:w("aB<~>"),cc:w("C_"),fS:w("EH"),an:w("IP"),bm:w("O<SX>"),X:w("O<T_>"),f3:w("O<aUh>"),aK:w("O<nr>"),V:w("O<ab>"),O:w("O<u>"),fA:w("O<lV>"),d5:w("O<aB<bA<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dJ>>"),fG:w("O<aB<~>>"),aF:w("O<nz>"),cd:w("O<ai<jG>>"),ez:w("O<a9<n,aE>>"),d:w("O<a9<n,@>>"),B:w("O<mS>"),h:w("O<jG>"),gE:w("O<Ac>"),k:w("O<oP>"),g:w("O<m3>"),D:w("O<hU>"),u:w("O<eS>"),m:w("O<vi>"),i:w("O<hJ>"),aC:w("O<a9l>"),o:w("O<Ad>"),e3:w("O<aE>"),dN:w("O<r>"),v:w("O<fW>"),cR:w("O<j3>"),J:w("O<ju>"),gx:w("O<pE<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(G,G)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j5>"),p:w("O<v>"),eR:w("O<fk>"),fT:w("O<bb3>"),bx:w("O<aH5>"),gz:w("O<agz>"),x:w("O<G>"),t:w("O<H>"),dS:w("O<aC?>"),bA:w("O<r?>"),Z:w("O<H?>"),cA:w("O<ck>"),A:w("cw<ah<af>>"),gL:w("ai<oP>"),R:w("ai<hU>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bA<H,+icon3d,picture(n?,n?)>"),P:w("a9<n,@>"),f:w("a9<@,@>"),gI:w("a9<H,+icon3d,picture(n?,n?)>"),bR:w("N<hJ,v>"),eC:w("N<ob,n>"),cT:w("N<k1,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<H,q7>"),gh:w("N<mV,jI<mV>>"),w:w("iw"),ei:w("iJ"),g2:w("rP"),fB:w("Fj"),b6:w("Ac"),gX:w("a9d"),dt:w("lB"),ea:w("oP"),bt:w("m3"),I:w("hU"),F:w("eS"),fO:w("mV"),ff:w("vi"),fP:w("hJ"),Q:w("wz"),dO:w("at2"),a:w("cu"),C:w("aE"),dw:w("auI"),di:w("a9Z"),Y:w("eX"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FP"),dB:w("dr<r>"),bJ:w("dr<n>"),_:w("e0<n>"),N:w("n"),fw:w("qp"),bO:w("au"),K:w("bq<r>"),b:w("bq<G>"),E:w("dJ"),W:w("bj<n>"),ac:w("bj<H>"),ex:w("k5<m3>"),cI:w("k5<n>"),cl:w("k5<G>"),b4:w("Y<ly>"),a8:w("Y<mt>"),fR:w("Y<+(n,n)>"),co:w("eb<r>"),l:w("v"),b2:w("c3<~>"),ev:w("qu<e_>"),dT:w("bl<~>"),q:w("mB"),y:w("R"),gR:w("G"),z:w("@"),S:w("H"),at:w("bd?"),gw:w("ai<a9<n,@>>?"),aT:w("ai<hU>?"),c:w("ai<@>?"),aP:w("iJ?"),af:w("hU?"),go:w("b3H?"),a6:w("a9m?"),cK:w("aE?"),bZ:w("+bytes,dataUrl,fileName(dJ,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dJ?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b35=new B.bK(A.ay,null,null,H.ata,null)
D.b3f=new B.d7(0,-0.15)
D.b3g=new B.d7(0.62,0)
D.b3l=new B.d7(-0.35,-0.45)
D.b3w=new B.d7(0.9,-0.85)
D.b5H=new B.be(H.UO,H.UO,A.fR,A.fR)
D.b5X=new B.ay(A.b7,1,A.r,-1)
D.brW=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b68=new B.ay(D.brW,1,A.r,-1)
D.b6j=new B.ay(A.aC,1.5,A.r,-1)
D.b6o=new B.ay(A.b7,1.6,A.r,-1)
D.b6E=new B.ay(A.aC,1.4,A.r,-1)
D.b80=new B.o(null,null,null,null,null,N.Ih,A.a7)
D.ca1=new B.a8(A.a5,A.a9,A.x,G.a6E,null,null)
D.b88=new B.o(null,null,null,null,null,D.ca1,A.a7)
D.afj=new B.o(A.av,null,null,A.u9,null,null,A.n)
D.bkI=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.brT=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d95=w([D.bkI,D.brT],x.O)
D.eDY=new B.bV(A.A,0.5,A.x,null,0,D.d95,null,null)
D.b8r=new B.o(null,null,null,null,null,D.eDY,A.a7)
D.ZM=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b6U=new B.bF(P.w1,A.a1,A.a1,A.a1)
D.b8t=new B.o(D.ZM,null,D.b6U,null,null,null,A.n)
D.cbL=new B.a8(A.a5,A.a9,A.x,A.Sp,null,null)
D.b8A=new B.o(null,null,null,null,null,D.cbL,A.a7)
D.agZ=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b8D=new B.o(D.agZ,null,null,A.rs,null,null,A.n)
D.b8H=new B.o(A.k_,null,null,null,null,null,A.a7)
D.b8K=new B.o(S.aig,null,H.aeW,A.mK,null,null,A.n)
D.FE=new B.o(A.dV,null,null,null,null,null,A.a7)
D.b8R=new B.o(null,null,null,null,null,E.x6,A.a7)
D.des=w([E.ajg,A.c3],x.O)
D.cbp=new B.a8(A.aZ,A.b4,A.x,D.des,null,null)
D.b8V=new B.o(null,null,null,A.mK,null,D.cbp,A.n)
D.dqa=w([A.bo,A.dV,A.jF],x.O)
D.a4C=new B.a8(A.ay,A.aD,A.x,D.dqa,null,null)
D.b97=new B.o(null,null,null,null,null,D.a4C,A.n)
D.b98=new B.o(D.agZ,null,null,A.lc,null,null,A.n)
D.cDl=w([A.dh,A.bo],x.O)
D.cbf=new B.a8(A.ay,A.aD,A.x,D.cDl,null,null)
D.b9c=new B.o(null,null,null,null,null,D.cbf,A.n)
D.b9m=new B.o(null,null,null,null,null,G.vc,A.a7)
D.b9I=new B.o(A.ajh,null,null,null,null,null,A.a7)
D.blJ=new B.u(0.5647058823529412,0,0,0,A.q)
D.aft=new B.ab(0,A.G,D.blJ,A.JO,28)
D.bc2=new B.aYu()
D.bcB=new C.cAe()
D.bcO=new C.bcE()
D.afY=new B.cj(A.A,null,null,A.a4r,null)
D.bft=new B.fl(null,null,null,null,null,E.nB,null,null,null,null)
D.bdn=new B.cj(A.A,null,null,D.bft,null)
D.bUY=new B.ae(A.e9,28,A.c,null,null,null)
D.bdT=new B.cj(A.A,null,null,D.bUY,null)
D.bfq=new B.fl(2,null,null,null,null,A.c2,null,null,null,null)
D.bef=new B.cj(A.A,null,null,D.bfq,null)
D.bVi=new B.ae(A5.HY,40,A.bG,null,null,null)
D.beg=new B.cj(A.A,null,null,D.bVi,null)
D.bgl=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bgy=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bh0=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bhb=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bhQ=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.bi6=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.bi8=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.MG=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.biB=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.biJ=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ahj=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bjz=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bku=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.ahA=new B.u(1,1,1,0.9725490196078431,A.q)
D.bkR=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bl8=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.blb=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.blp=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.blQ=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bnu=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.Zv=new B.u(0.8509803921568627,0,0,0,A.q)
D.bnF=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.bnM=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.aiA=new B.u(0.6,0,0,0,A.q)
D.aiC=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bpw=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.ur=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bq_=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.bqv=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.bqW=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ajy=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.a__=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.C9=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.Nm=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jG=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.ak2=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.a_a=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.buQ=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bvm=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bvC=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.a_H=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bwT=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.bxt=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.bxN=new B.hQ(A.aT,!0,null,null)
D.fEZ=new B.F(!0,A.aE,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5f=new B.B("Bio link",null,D.fEZ,null,null,null,null,null,null,null,null,null)
D.bea=new B.cj(A.A,null,null,D.h5f,null)
D.by1=new B.hQ(A.BK,!0,D.bea,null)
D.dSL=new B.VH(A.aG,56,A_.Pq,null,null)
D.fBu=new B.F(!0,A.bB,null,null,null,null,null,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOc=new B.B("No presentations yet",null,D.fBu,null,null,null,null,null,null,null,null,null)
D.fG2=new B.F(!0,A.cz,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLw=new B.B(y.K,null,D.fG2,null,A.K,null,null,null,null,null,null,null)
D.d8W=w([D.dSL,A.aB,D.fOc,A.am,D.fLw],x.p)
D.byg=new B.fn(A.ah,A.e,A.h,A.l,null,A.p,null,0,D.d8W,null)
D.NN=new C.a4Z(0,"none")
D.alh=new C.a4Z(1,"deflate")
D.ali=new C.a4Z(2,"bzip2")
D.bz_=new B.kD(0.165,0.84,0.44,1)
D.deM=w([A.c8,A.dP,A.aC],x.O)
D.cau=new B.a8(A.ay,A.aD,A.x,D.deM,null,null)
D.b85=new B.o(null,null,null,null,null,D.cau,A.n)
D.c3D=new B.ae(A.eW,null,A.aa,null,null,null)
D.beO=new B.cj(A.A,null,null,D.c3D,null)
D.bzz=new B.bM(D.b85,A.bi,D.beO,null)
D.bv5=new B.u(0.058823529411764705,1,1,1,A.q)
D.dij=w([A.bx,A.rE,A.rE,D.bv5],x.O)
D.cUX=w([0,0.32,0.7,1],x.x)
D.cb5=new B.a8(A.ay,A.aD,A.x,D.dij,D.cUX,null)
D.b7V=new B.o(null,null,null,null,null,D.cb5,A.n)
D.bzG=new B.bM(D.b7V,A.bi,null,null)
D.bAO=new B.mK(1,1,null,null,null,A.bs,null)
D.bAR=new B.mK(1,null,null,null,null,D.a_a,null)
D.bBk=new B.bd(125e4)
D.bBq=new B.bd(17e4)
D.bBA=new B.bd(35964e8)
D.bBH=new B.bd(55e4)
D.bBL=new B.bd(68e4)
D.bCb=new B.ir(0,0,0,5)
D.bCq=new B.Q(0,16,16,0)
D.bCB=new B.Q(0,36,0,36)
D.bCJ=new B.Q(0,54,0,0)
D.bCQ=new B.Q(10,0,10,3)
D.bD1=new B.ir(10,16,10,10)
D.bDd=new B.Q(10,6,4,6)
D.bDg=new B.Q(10,8,10,6)
D.amh=new B.Q(11,8,11,11)
D.bDm=new B.Q(12,0,12,24)
D.bDz=new B.Q(12,12,12,4)
D.bDC=new B.Q(12,12,8,12)
D.bDD=new B.Q(12,14,12,10)
D.bDU=new B.Q(12,8,8,12)
D.bEj=new B.Q(14,14,14,0)
D.bEo=new B.Q(14,14,14,90)
D.bEM=new B.Q(16,10,16,16)
D.bEN=new B.Q(16,10,16,20)
D.an3=new B.Q(16,6,16,28)
D.bFk=new B.Q(18,0,18,10)
D.bFm=new B.Q(18,0,18,30)
D.bFo=new B.Q(18,10,18,12)
D.bFp=new B.Q(18,10,18,14)
D.bFJ=new B.Q(18,16,14,18)
D.bFO=new B.Q(18,18,18,12)
D.bFU=new B.Q(18,26,18,12)
D.bFZ=new B.Q(18,34,18,34)
D.bG_=new B.Q(18,4,18,14)
D.bG4=new B.Q(18,8,18,24)
D.bGo=new B.Q(20,16,14,4)
D.bGt=new B.Q(20,18,12,4)
D.bGy=new B.Q(20,20,12,20)
D.bGB=new B.Q(20,22,20,20)
D.bGG=new B.Q(20,6,20,6)
D.bGQ=new B.Q(22,18,22,18)
D.bGY=new B.Q(22,24,22,0)
D.bH0=new B.Q(22,24,22,4)
D.bH8=new B.Q(22,60,22,22)
D.bHe=new B.Q(24,24,24,22)
D.bHo=new B.Q(26,10,60,10)
D.bHw=new B.Q(28,44,28,44)
D.bHN=new B.Q(32,44,32,44)
D.bHV=new B.Q(38,30,38,20)
D.bI0=new B.Q(4,0,0,6)
D.bIc=new B.ir(4,4,4,4)
D.bIF=new B.ir(6,5,6,5)
D.bIK=new B.Q(6,6,8,6)
D.bIW=new B.Q(8,14,8,14)
D.bIX=new B.Q(8,22,8,22)
D.bJ5=new B.Q(8,6,12,6)
D.bJd=new B.Q(8,8,8,4)
D.ao2=new B.Q(9,9,9,6)
D.bJo=new B.ir(2.5,2.5,2.5,2.5)
D.bJp=new B.Q(10.5,0,10.5,0)
D.bJq=new B.Q(7,1.5,7,1.5)
D.d5P=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bJG=new B.uS(null,null,D.d5P,A.ye)
D.d2x=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bJH=new B.uS(null,null,D.d2x,A.ye)
D.aXn=new B.F(!0,A.aE,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h4x=new B.B("WORD DESIGN",null,D.aXn,null,null,null,null,null,null,null,null,null)
D.bKm=new B.by(1,A.ba,D.h4x,null)
D.h49=new B.B("Slides database",null,Ad.vK,null,null,null,null,null,null,null,null,null)
D.h1n=new B.B("Admin only \xb7 keep as many as you like",null,W.aWP,null,null,null,null,null,null,null,null,null)
D.dzh=w([D.h49,A.bE,D.h1n],x.p)
D.bys=new B.fn(A.ah,A.e,A.h,A.E,null,A.p,null,0,D.dzh,null)
D.bKp=new B.by(1,A.ba,D.bys,null)
D.fWx=new B.B("NGMY logo",null,A.fD,null,null,null,null,null,null,null,null,null)
D.bKs=new B.by(1,A.ba,D.fWx,null)
D.fCA=new B.F(!0,A.aa,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6A=new B.B("TALK TO THE EDITOR",null,D.fCA,null,null,null,null,null,null,null,null,null)
D.bKN=new B.by(1,A.ba,D.h6A,null)
D.fQ6=new B.B("Tell the AI what to change",null,Ad.vK,null,null,null,null,null,null,null,null,null)
D.bL6=new B.by(1,A.ba,D.fQ6,null)
D.bMC=new B.Ew(!0,"video/mp4")
D.fAH=new B.F(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO2=new B.B("Move presentations between devices",null,D.fAH,null,null,null,!1,null,null,1,null,null)
D.bMH=new B.dF(A.dW,A.a5,A.f,D.fO2,null)
D.fPh=new B.B("Edit in Slides",null,A.j1,null,null,null,null,null,null,null,null,null)
D.bMJ=new B.dF(A.dW,A.A,A.f,D.fPh,null)
D.bMZ=new B.di(1,A.cm,D.bMJ,null)
D.a2L=new B.a_(60988,"MaterialIcons",!1)
D.bQr=new B.a_(61352,"MaterialIcons",!1)
D.apM=new B.a_(61531,"MaterialIcons",!1)
D.bRD=new B.a_(63062,"MaterialIcons",!1)
D.bRK=new B.a_(63109,"MaterialIcons",!1)
D.bRX=new B.a_(63206,"MaterialIcons",!1)
D.aqo=new B.a_(63238,"MaterialIcons",!1)
D.bSf=new B.a_(63338,"MaterialIcons",!1)
D.a3o=new B.a_(63365,"MaterialIcons",!1)
D.a3p=new B.a_(63367,"MaterialIcons",!1)
D.a3q=new B.a_(63368,"MaterialIcons",!1)
D.aqz=new B.a_(63384,"MaterialIcons",!1)
D.bSw=new B.a_(63525,"MaterialIcons",!1)
D.bSA=new B.a_(63568,"MaterialIcons",!1)
D.bSW=new B.a_(983072,"MaterialIcons",!1)
D.bTm=new B.a_(983271,"MaterialIcons",!0)
D.arF=new B.a_(983965,"MaterialIcons",!1)
D.arG=new B.a_(983966,"MaterialIcons",!1)
D.bUk=new B.a_(984592,"MaterialIcons",!1)
D.bUA=new B.ae(A.uS,16,A.aE,null,null,null)
D.arV=new B.ae(A.oG,18,A.c,null,null,null)
D.bUZ=new B.ae(A.CV,18,M.lI,null,null,null)
D.bVE=new B.ae(A.jL,11,null,null,null,null)
D.bVO=new B.ae(A.a33,null,A.ex,null,null,null)
D.bWm=new B.ae(A.th,18,A.aE,null,null,null)
D.bWs=new B.ae(A6.D8,14,null,null,null,null)
D.bWt=new B.ae(A.ek,28,A.bY,null,null,null)
D.bWF=new B.ae(A.qU,20,A.c,null,null,null)
D.bWM=new B.ae(A.zu,null,null,null,null,null)
D.bWR=new B.ae(A.js,18,A.fI,null,null,null)
D.bWW=new B.ae(A.kc,null,null,null,null,null)
D.bRF=new B.a_(63065,"MaterialIcons",!1)
D.bXz=new B.ae(D.bRF,15,A.c,null,null,null)
D.bRL=new B.a_(63113,"MaterialIcons",!1)
D.bXF=new B.ae(D.bRL,null,A.aa,null,null,null)
D.bY3=new B.ae(A.uR,22,A.bL,null,null,null)
D.bYo=new B.ae(A.td,18,null,null,null,null)
D.bYu=new B.ae(A.Dg,12,A.c,null,null,null)
D.bTZ=new B.a_(983687,"MaterialIcons",!1)
D.bYG=new B.ae(D.bTZ,null,A.bo,null,null,null)
D.bYQ=new B.ae(A.hc,null,A.bo,null,null,null)
D.bZ9=new B.ae(A.pF,22,A.c,null,null,null)
D.bZd=new B.ae(A.cB,13,A.c,null,null,null)
D.bZj=new B.ae(A.ek,26,A.aA,null,null,null)
D.bZn=new B.ae(A.tl,26,A.c,null,null,null)
D.Qb=new B.ae(A.jL,8,A.c,null,null,null)
D.bZI=new B.ae(A.oG,40,A.c,null,null,null)
D.bZJ=new B.ae(A.bPo,null,null,null,null,null)
D.bZN=new B.ae(A.v5,20,null,null,null,null)
D.bTY=new B.a_(983683,"MaterialIcons",!1)
D.bZZ=new B.ae(D.bTY,null,A.b3,null,null,null)
D.c__=new B.ae(A.jL,16,A.bo,null,null,null)
D.c_k=new B.ae(A.pD,null,null,null,null,null)
D.asv=new B.ae(A.tg,22,A.c,null,null,null)
D.c_q=new B.ae(A.e9,17,A.c,null,null,null)
D.asw=new B.ae(A.jL,9,A.c,null,null,null)
D.c_v=new B.ae(A.wM,null,null,null,null,null)
D.bPF=new B.a_(57744,"MaterialIcons",!1)
D.c_C=new B.ae(D.bPF,null,null,null,null,null)
D.c_F=new B.ae(A.wM,16,null,null,null,null)
D.bUs=new B.a_(985181,"MaterialIcons",!1)
D.I9=new B.ae(D.bUs,null,null,null,null,null)
D.c_R=new B.ae(A.kc,16,A.bL,null,null,null)
D.bTP=new B.a_(983615,"MaterialIcons",!1)
D.c_T=new B.ae(D.bTP,12,A.c,null,null,null)
D.asC=new B.ae(A.zf,16,null,null,null,null)
D.c00=new B.ae(A.e9,21,A.c,null,null,null)
D.c05=new B.ae(A.hc,17,A.c,null,null,null)
D.c06=new B.ae(A.uR,null,null,null,null,null)
D.c0o=new B.ae(A.a43,20,A.aE,null,null,null)
D.c0D=new B.ae(A.oF,22,E.nB,null,null,null)
D.c0M=new B.ae(A.qT,13,A.aa,null,null,null)
D.c0P=new B.ae(A.arq,20,A.aE,null,null,null)
D.bPm=new B.a_(57495,"MaterialIcons",!1)
D.c0U=new B.ae(D.bPm,null,null,null,null,null)
D.c0Y=new B.ae(A.oH,18,A.c,null,null,null)
D.c1k=new B.ae(A.v9,28,A.c,null,null,null)
D.c1y=new B.ae(D.aqo,null,A.aC,null,null,null)
D.c1z=new B.ae(A.qU,22,A.c,null,null,null)
D.asL=new B.ae(A.a2H,16,null,null,null,null)
D.c2l=new B.ae(A.uR,32,A.c,null,null,null)
D.c36=new B.ae(A.iU,22,A.c,null,null,null)
D.c3a=new B.ae(A.tl,22,A.aa,null,null,null)
D.at1=new B.ae(A.uS,null,A.bV,null,null,null)
D.c48=new B.ae(A.qN,18,null,null,null,null)
D.c4M=new B.ae(A.e9,18,A.bt,null,null,null)
D.c4T=new B.ae(A.arl,null,null,null,null,null)
D.c5j=new B.e7(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aXb,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eN,!0,null,null,null,null)
D.fsf=new B.F(!0,A.bP,null,null,null,null,null,A.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c5B=new B.e7(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.fsf,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eN,!0,null,null,null,null)
D.c61=new B.e7(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eN,!0,null,null,null,null)
D.da8=w([A.dV,A.aC],x.O)
D.c89=new B.a8(A.a5,A.a9,A.x,D.da8,null,null)
D.c8l=new B.a8(A.aZ,A.b4,A.Ws,A.aAa,null,null)
D.bgQ=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.blS=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bpx=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bjq=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cUZ=w([D.bgQ,D.blS,D.bpx,D.bjq],x.O)
D.c8G=new B.a8(A.ay,A.aD,A.x,D.cUZ,A.IG,null)
D.dzp=w([A.cN,A.bD,A.b7],x.O)
D.c8I=new B.a8(A.aZ,A.b4,A.Ws,D.dzp,null,null)
D.dB1=w([A.bo,A.ci],x.O)
D.c8N=new B.a8(A.a5,A.a9,A.x,D.dB1,null,null)
D.dvq=w([A.h0,A.d5,A.at],x.O)
D.c8P=new B.a8(A.ay,A.aD,A.x,D.dvq,null,null)
D.dgx=w([A.cU,A.fq],x.O)
D.c8T=new B.a8(A.a5,A.a9,A.x,D.dgx,null,null)
D.dzj=w([M.lI,A.d5],x.O)
D.atP=new B.a8(A.a5,A.a9,A.x,D.dzj,null,null)
D.bmA=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dzg=w([D.bmA,A.wq,A.c2],x.O)
D.c8X=new B.a8(A.a5,A.a9,A.x,D.dzg,null,null)
D.dbV=w([A.bc,A.dn,A.eq],x.O)
D.c8Y=new B.a8(A.ay,A.aD,A.x,D.dbV,null,null)
D.Qt=new B.a8(A.a5,A.a9,A.x,A.J_,null,null)
D.bw_=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cNR=w([D.bw_,A.c2,A.jH],x.O)
D.atU=new B.a8(A.ay,A.aD,A.x,D.cNR,null,null)
D.dmo=w([A.um,A.aF,D.C9],x.O)
D.ca3=new B.a8(A.a5,A.a9,A.x,D.dmo,null,null)
D.bxu=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bkt=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.bqK=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.db_=w([D.bxu,D.bkt,D.bqK],x.O)
D.atV=new B.a8(A.a5,A.a9,A.x,D.db_,null,null)
D.bmC=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.cc2=w([AB.akW,D.bmC],x.O)
D.cac=new B.a8(A.aZ,A.b4,A.x,D.cc2,null,null)
D.d8T=w([A.nz,A.bG],x.O)
D.cag=new B.a8(A.aZ,A.b4,A.x,D.d8T,null,null)
D.drV=w([A.aC,A.dP],x.O)
D.cam=new B.a8(A.a5,A.a9,A.x,D.drV,null,null)
D.ajL=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aBW=w([D.ajL,D.jG,D.MG],x.O)
D.caR=new B.a8(A.ay,A.aD,A.x,D.aBW,null,null)
D.cNJ=w([A.dB,A.dI],x.O)
D.cb0=new B.a8(A.aZ,A.b4,A.x,D.cNJ,null,null)
D.doK=w([A.we,A.C1],x.O)
D.cbN=new B.a8(A.a5,A.a9,A.x,D.doK,null,null)
D.fY8=new B.B("Which Bio link?",null,A.cF,null,null,null,null,null,null,null,null,null)
D.cc_=new B.qa(null,D.fY8,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zT=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a8F=new C.le(2,"elegantNavy")
D.hK4=w([A.ZX,D.jG,A.c2],x.O)
D.ki=new C.yc(0,"classic")
D.a8u=new C.jG("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a8F,4294967035,4279378237,4290283019,D.ki)
D.aLy=new C.le(3,"elegantGold")
D.bgk=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bhv=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ai4=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hJx=w([D.bgk,D.bhv,D.ai4],x.O)
D.a8s=new C.jG("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aLy,4294966515,4281016592,4289102906,D.ki)
D.dYi=new C.le(22,"goldRibbon")
D.hJt=w([A.ZX,D.jG,A.iu],x.O)
D.a8l=new C.jG("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dYi,4294967035,4279378237,4291404327,D.ki)
D.dYj=new C.le(23,"goldBaroque")
D.aiO=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hJz=w([D.aiO,A.aF,A.jH],x.O)
D.a8m=new C.jG("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dYj,4294964964,4283053072,4292128567,D.ki)
D.dYl=new C.le(4,"elegantEmerald")
D.biR=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bjR=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hJF=w([D.biR,D.bjR,A.iu],x.O)
D.a8n=new C.jG("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dYl,4294376440,4279122734,4291404327,D.ki)
D.dYm=new C.le(5,"elegantBurgundy")
D.boc=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hJM=w([D.boc,A.aha,A.iu],x.O)
D.a8q=new C.jG("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dYm,4294965238,4283043359,4291404327,D.ki)
D.dYf=new C.le(19,"goldFiligree")
D.Nu=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hJA=w([D.Nu,A.aF,A.jH],x.O)
D.a8o=new C.jG("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dYf,4294966259,4279378237,4292128567,D.ki)
D.dYg=new C.le(20,"goldLaurel")
D.bvQ=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hJN=w([A.My,A.iu,D.bvQ],x.O)
D.a8p=new C.jG("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dYg,4294966776,4282000405,4291404327,D.ki)
D.dYh=new C.le(21,"goldCrest")
D.ah1=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bvX=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hJC=w([D.ah1,A.aF,D.bvX],x.O)
D.a8t=new C.jG("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dYh,4294965484,4283053072,4292128567,D.ki)
D.dYk=new C.le(24,"goldStar")
D.bxm=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hJG=w([D.bxm,A.aF,D.jG],x.O)
D.a8r=new C.jG("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dYk,4294966518,4279378237,4292128567,D.ki)
D.Ij=w([D.a8u,D.a8s,D.a8l,D.a8m,D.a8n,D.a8q,D.a8o,D.a8p,D.a8t,D.a8r],x.h)
D.r4=new C.mV(0,"blank")
D.U8=new C.mV(1,"title")
D.nc=new C.mV(2,"titleContent")
D.ehV=new C.mV(3,"twoColumn")
D.Ei=new C.mV(4,"section")
D.ehW=new C.mV(5,"comparison")
D.Jy=new C.mV(6,"flashcard")
D.Jz=new C.mV(7,"quiz")
D.JA=new C.mV(8,"worksheet")
D.aue=w([D.r4,D.U8,D.nc,D.ehV,D.Ei,D.ehW,D.Jy,D.Jz,D.JA],B.at("O<mV>"))
D.aD2=w([Ar.Zc,A.dI],x.O)
D.l2=w([A.c2,A.bL,A.hI,A.i9,D.C9],x.O)
D.dU1=new C.jd("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aD2,D.l2)
D.bwf=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.boa=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d96=w([D.bwf,D.boa],x.O)
D.dTT=new C.jd("confetti","Golden Confetti","Together we rise",D.d96,D.l2)
D.d5W=w([A.nq,A.YL],x.O)
D.dTU=new C.jd("crown","Crown of Glory","Built for our community",D.d5W,D.l2)
D.bkg=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bnO=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.ddl=w([D.bkg,D.bnO],x.O)
D.ve=w([A.bP,A.aS,A.c,A.bk,A.an],x.O)
D.dTO=new C.jd("aurora","Aurora Gala","A brighter future, together",D.ddl,D.ve)
D.bpz=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.doS=w([G.agB,D.bpz],x.O)
D.dU4=new C.jd("champagne","Champagne Toast","Cheers to every member",D.doS,D.l2)
D.dU5=new C.jd("diamonds","Diamond Rain","Every member is a jewel",A3.aDN,D.ve)
D.bhj=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bne=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.duC=w([D.bhj,D.bne],x.O)
D.dTJ=new C.jd("starburst","Golden Starburst","Thank you!",D.duC,D.l2)
D.cc9=w([A.fy,A.ys],x.O)
D.agL=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.S3=w([A.po,A.it,A.wr,A.pg,D.agL],x.O)
D.dUc=new C.jd("balloons","Luxury Balloons","Let's celebrate",D.cc9,D.S3)
D.d57=w([A.Z0,A.w],x.O)
D.dU0=new C.jd("galaxy","Galaxy Spiral","The sky is not the limit",D.d57,D.ve)
D.btY=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dl5=w([A.kx,D.btY],x.O)
D.dTW=new C.jd("redcarpet","Red Carpet","Tonight we shine",D.dl5,D.l2)
D.brq=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bpj=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dpQ=w([D.brq,D.bpj],x.O)
D.dTL=new C.jd("coins","Gold Coin Rain","Every contribution counts",D.dpQ,D.l2)
D.dxw=w([A.dB,A.i8],x.O)
D.dTR=new C.jd("lanterns","Sky Lanterns","Lighting the way together",D.dxw,D.l2)
D.blv=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d2U=w([A.yu,D.blv],x.O)
D.dTN=new C.jd("hearts","Floating Hearts","Made with love",D.d2U,D.S3)
D.bhZ=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.biY=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dze=w([D.bhZ,D.biY],x.O)
D.dUb=new C.jd("petals","Rose Petals","Thank you, from our hearts",D.dze,D.S3)
D.bv3=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dv_=w([A.li,D.bv3],x.O)
D.dTI=new C.jd("butterflies","Golden Butterflies","New beginnings",D.dv_,D.l2)
D.bqF=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d4_=w([D.bqF,A.w],x.O)
D.dU3=new C.jd("neon","Neon Night","Let's go!",D.d4_,D.ve)
D.bmR=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.ds7=w([A.N2,D.bmR],x.O)
D.dU6=new C.jd("disco","Disco Ball","Party time",D.ds7,D.ve)
D.brf=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.drC=w([A.h0,D.brf],x.O)
D.dTM=new C.jd("sunrise","Golden Sunrise","A new day for our community",D.drC,D.l2)
D.drc=w([A.rK,A.dI],x.O)
D.dU7=new C.jd("pearls","Ocean Pearls","Deep roots, bright future",D.drc,D.ve)
D.bkn=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.drq=w([D.bkn,A.dI],x.O)
D.dUa=new C.jd("snow","Winter Gala","Warm wishes to all",D.drq,D.ve)
D.bgt=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bhK=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dy1=w([D.bgt,D.bhK],x.O)
D.dU_=new C.jd("laurel","Laurel Victory","We did it together",D.dy1,D.l2)
D.bgj=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.bnK=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d1O=w([D.bgj,D.bnK],x.O)
D.dU9=new C.jd("ribbons","Silk Ribbons","Elegance in every step",D.d1O,D.l2)
D.boW=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cNG=w([G.C8,D.boW],x.O)
D.dTX=new C.jd("kente","Kente Pride","Proud of our roots",D.cNG,D.l2)
D.bs6=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bvr=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.df9=w([D.bs6,D.bvr],x.O)
D.dTS=new C.jd("trophy","Trophy Shine","Winners together",D.df9,D.l2)
D.dry=w([As.MN,A.w],x.O)
D.dTK=new C.jd("shooting","Shooting Stars","Make a wish",D.dry,D.ve)
D.bgC=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.akH=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dyk=w([D.bgC,D.akH],x.O)
D.dTY=new C.jd("bokeh","Golden Bokeh","Shine bright",D.dyk,D.l2)
D.bh2=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dlX=w([D.bh2,A.w],x.O)
D.dTQ=new C.jd("orbits","Golden Orbits","Always moving forward",D.dlX,D.l2)
D.bv4=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.dia=w([A.ai_,D.bv4],x.O)
D.dTV=new C.jd("flowers","Blooming Garden","Growing together",D.dia,D.S3)
D.bgO=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bhA=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dwZ=w([D.bgO,D.bhA],x.O)
D.dTP=new C.jd("music","Music Party","Celebrate with us",D.dwZ,D.ve)
D.biC=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bvT=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d37=w([D.biC,D.bvT],x.O)
D.dU8=new C.jd("mandala","Royal Mandala","Harmony and unity",D.d37,D.l2)
D.dig=w([G.C8,D.akH],x.O)
D.dU2=new C.jd("sparklers","Golden Sparklers","Light up the night",D.dig,D.l2)
D.dTZ=new C.jd("city","City Lights","The whole city celebrates",D.aD2,D.l2)
D.Is=w([D.dU1,D.dTT,D.dTU,D.dTO,D.dU4,D.dU5,D.dTJ,D.dUc,D.dU0,D.dTW,D.dTL,D.dTR,D.dTN,D.dUb,D.dTI,D.dU3,D.dU6,D.dTM,D.dU7,D.dUa,D.dU_,D.dU9,D.dTX,D.dTS,D.dTK,D.dTY,D.dTQ,D.dTV,D.dTP,D.dU8,D.dU2,D.dTZ],B.at("O<jd>"))
D.eJU=new B.y("","No ring")
D.f_9=new B.y("platinum","Platinum")
D.eWd=new B.y("glow","Glow")
D.eNy=new B.y("double","Double line")
D.eMs=new B.y("framed","Gallery frame")
D.eJq=new B.y("rosegold","Rose gold")
D.eX1=new B.y("jewels","Jeweled")
D.eTG=new B.y("aurora","Aurora")
D.DA=w([D.eJU,A.UU,D.f_9,D.eWd,L.aSl,D.eNy,A.aSj,D.eMs,D.eJq,D.eX1,D.eTG],x.L)
D.cwN=w([D.a8o,D.a8p,D.a8t,D.a8l,D.a8m,D.a8r],x.h)
D.c0e=new B.ae(G.apm,16,null,null,null,null)
D.bbq=new B.w3(A.bn,D.c0e,null,x.U)
D.bPO=new B.a_(58027,"MaterialIcons",!1)
D.bUG=new B.ae(D.bPO,16,null,null,null,null)
D.bbo=new B.w3(A.K,D.bUG,null,x.U)
D.bPP=new B.a_(58030,"MaterialIcons",!1)
D.bYN=new B.ae(D.bPP,16,null,null,null,null)
D.bbr=new B.w3(A.e3,D.bYN,null,x.U)
D.cD6=w([D.bbq,D.bbo,D.bbr],B.at("O<w3<qp>>"))
D.cKV=w([A.Ce,A.hF],x.O)
D.cKW=w([A.bc,A.bg,A.eq],x.O)
D.RT=w([A.bL,A.i9,A.hI,A.aF,A.pg],x.O)
D.cNM=w([A.c2,D.jG,D.MG],x.O)
D.cOj=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eHe=new B.y(4278913286,4280030216)
D.eHw=new B.y(4279373061,4278518787)
D.eHD=new B.y(4279898630,4278847235)
D.dew=w([D.eHe,D.eHw,D.eHD],x.n)
D.d9S=w(["\u265b","\u269c","\u2726"],x.s)
D.dYd=new C.ye("Royal Onyx & Gold",D.dew,4292128567,4294370209,4294965479,3874020544,D.d9S)
D.eH1=new B.y(4278326799,4278598442)
D.eH3=new B.y(4278395929,4278258953)
D.eHa=new B.y(4278599728,4278327826)
D.dxn=w([D.eH1,D.eH3,D.eHa],x.n)
D.d3S=w(["\u269c","\u2756","\u2727"],x.s)
D.dYa=new C.ye("Imperial Emerald",D.dxn,4293050997,4294699968,4294180856,3872254170,D.d3S)
D.eH4=new B.y(4278455076,4278918747)
D.eH9=new B.y(4278587439,4278322714)
D.eHn=new B.y(4279051376,4278455076)
D.dvm=w([D.eH4,D.eH9,D.eHn],x.n)
D.dmI=w(["\u2654","\u2726","\u2748"],x.s)
D.dY4=new C.ye("Sapphire Crown",D.dvm,4291417834,4294967295,4294310143,3871986666,D.dmI)
D.eHB=new B.y(4279894534,4283041554)
D.eHN=new B.y(4281008906,4279042307)
D.eHV=new B.y(4284221976,4279894534)
D.dBI=w([D.eHB,D.eHN,D.eHV],x.n)
D.d5g=w(["\u265b","\u2766","\u2726"],x.s)
D.dY6=new C.ye("Ruby Throne",D.dBI,4293378685,4294963145,4294964466,3874213833,D.d5g)
D.eHv=new B.y(4279371039,4281995100)
D.eHF=new B.y(4280092723,4278714896)
D.eHS=new B.y(4283045242,4279371039)
D.dxL=w([D.eHv,D.eHF,D.eHS],x.n)
D.dvL=w(["\u2655","\u2756","\u2727"],x.s)
D.dYb=new C.ye("Amethyst Palace",D.dxL,4293314984,4294963421,4294702591,3873229802,D.dvL)
D.eH6=new B.y(4278519045,4280032287)
D.eHo=new B.y(4279111184,4278321666)
D.eHK=new B.y(4280492839,4278716426)
D.du4=w([D.eH6,D.eHo,D.eHK],x.n)
D.dkS=w(["\u2726","\u25c6","\u2742"],x.s)
D.dY8=new C.ye("Obsidian & Platinum",D.du4,4293256418,4294967295,4294638330,3872378836,D.dkS)
D.eHC=new B.y(4279896588,4282194463)
D.eHL=new B.y(4280553487,4279043334)
D.eHT=new B.y(4283048488,4279896588)
D.dki=w([D.eHC,D.eHL,D.eHT],x.n)
D.dzK=w(["\u2766","\u273f","\u2727"],x.s)
D.dY5=new C.ye("Rose Gold Velvet",D.dki,4293440672,4294960345,4294964979,3874214602,D.dzK)
D.eH7=new B.y(4278520340,4279180595)
D.eHc=new B.y(4278718495,4278322443)
D.eHz=new B.y(4279510591,4278520340)
D.cUD=w([D.eH7,D.eHc,D.eHz],x.n)
D.dlC=w(["\u269c","\u2736","\u2756"],x.s)
D.dY9=new C.ye("Midnight Brass",D.cUD,4291405148,4293975208,4294439914,3872837564,D.dlC)
D.eI7=new B.y(4294703086,4293780428)
D.eI3=new B.y(4294307549,4293187253)
D.eI8=new B.y(4294966517,4293977807)
D.d7D=w([D.eI7,D.eI3,D.eI8],x.n)
D.dm0=w(["\u269c","\u265b","\u2726"],x.s)
D.dYc=new C.ye("Ivory Marble & Gold",D.d7D,4289760572,4286209048,4280951062,3863625518,D.dm0)
D.eHi=new B.y(4278978566,4280555024)
D.eHy=new B.y(4279504137,4278518530)
D.eHP=new B.y(4281211923,4278978566)
D.d56=w([D.eHi,D.eHy,D.eHP],x.n)
D.dwy=w(["\u2742","\u2726","\u265c"],x.s)
D.dY7=new C.ye("Onyx & Copper",D.d56,4291856987,4294365880,4294964718,3873885630,D.dwy)
D.cOr=w([D.dYd,D.dYa,D.dY4,D.dY6,D.dYb,D.dY8,D.dY5,D.dY9,D.dYc,D.dY7],B.at("O<ye>"))
D.cQR=w([A.aF,D.C9,A.i9],x.O)
D.ePN=new B.y("Original",null)
D.ePX=new B.y("Wide 16:9",1.7777777777777777)
D.eSj=new B.y("Landscape 3:2",1.5)
D.ePd=new B.y("Photo 4:3",1.3333333333333333)
D.f30=new B.y("Portrait 3:4",0.75)
D.aAj=w([D.ePN,D.ePX,D.eSj,D.ePd,L.aS9,D.f30],B.at("O<+(n,G?)>"))
D.aAk=w([A.i9,A.c4,A.b9,A.bd],x.O)
D.eSv=new B.y("","Original")
D.eUo=new B.y("circle","Circle")
D.f_Y=new B.y("rounded","Rounded")
D.f0Y=new B.y("triangle","Triangle")
D.eWt=new B.y("hexagon","Hexagon")
D.eUP=new B.y("diamond","Diamond")
D.eTF=new B.y("arch","Arch")
D.DH=w([D.eSv,D.eUo,D.f_Y,D.f0Y,D.eWt,D.eUP,D.eTF],x.L)
D.dT7=new C.ly("classic_blue","Classic Blue","Normal",A.bo,A.c,A.lj,A.dh,A.aM)
D.dTn=new C.ly("campus_green","Campus Green","Normal",A.b3,A.nx,A.up,A.hj,A.cP)
D.dTe=new C.ly("warm_sand","Warm Sand","Normal",A.e1,A.hI,A.bL,A.iv,A.oi)
D.dTl=new C.ly("slate_minimal","Slate Minimal","Normal",A.bw,A.aS,A.bk,A.a_,A.aM)
D.dT6=new C.ly("coral_fresh","Coral Fresh","Normal",A.c8,A.hX,A.qf,A.k1,A.ui)
D.dTm=new C.ly("lavender_calm","Lavender Calm","Normal",A.b7,A.pl,A.om,A.mS,A.ku)
D.dT8=new C.ly("ocean_breeze","Ocean Breeze","Normal",A.fq,A.rT,A.wa,A.rD,A.ok)
D.ajT=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dTj=new C.ly("berry_pop","Berry Pop","Normal",A.fc,D.ajT,A.kM,G.a_E,A.Cf)
D.dT9=new C.ly("midnight_pro","Midnight Pro","Professional",A.aC,A.a_,A.dB,A.kM,A.cC)
D.dTi=new C.ly("executive_navy","Executive Navy","Professional",A.d8,A.aj4,A.dh,A.lh,A.bP)
D.dTg=new C.ly("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.bs,A.a_,A.aS,A.cC)
D.dTa=new C.ly("corporate_steel","Corporate Steel","Professional",A.on,A.a_,A.ma,A.fK,A.bP)
D.dTd=new C.ly("gold_luxe","Gold Luxe","Luxury",A.mP,A.dU,A.pn,A.mV,A.bL)
D.brk=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dTh=new C.ly("rose_gold_elite","Rose Gold Elite","Luxury",A.hF,D.brk,A.a_k,A.it,A.pg)
D.dTk=new C.ly("platinum_night","Platinum Night","Luxury",A.cC,A.dI,A.bs,A.aS,A.bk)
D.dTo=new C.ly("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.ql,A.fd,A.qt,A.jY)
D.dT5=new C.ly("royal_purple","Royal Purple","Luxury",A.nv,A.Zj,A.ku,A.kM,A.Mx)
D.dTf=new C.ly("neon_pitch","Neon Pitch","Bold",A.b9,A.dI,A.a_,A.b_,A.bk)
D.dTc=new C.ly("crimson_impact","Crimson Impact","Bold",A.bG,A.kx,A.er,A.rU,A.eZ)
D.dTb=new C.ly("sunset_gallery","Sunset Gallery","Bold",A.fJ,A.ui,A.k1,A.qf,A.mX)
D.IB=w([D.dT7,D.dTn,D.dTe,D.dTl,D.dT6,D.dTm,D.dT8,D.dTj,D.dT9,D.dTi,D.dTg,D.dTa,D.dTd,D.dTh,D.dTk,D.dTo,D.dT5,D.dTf,D.dTc,D.dTb],B.at("O<ly>"))
D.d1y=w([A.c2,D.jG],x.O)
D.dkz=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eTp=new B.y("Faces & people",D.dkz)
D.cQV=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eFR=new B.y("Ideas & work",D.cQV)
D.dao=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eWy=new B.y("Nature",D.dao)
D.dkI=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ePL=new B.y("Places & things",D.dkI)
D.de2=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eTK=new B.y("Symbols",D.de2)
D.d1E=w([D.eTp,D.eFR,D.eWy,D.ePL,D.eTK],B.at("O<+(n,ai<n>)>"))
D.bgT=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d20=w([A.c2,D.ai4,D.bgT],x.O)
D.baG=new B.ab(0,A.G,A.FQ,A.aMo,40)
D.bai=new B.ab(0,A.G,A.pi,A.eu,8)
D.d2f=w([D.baG,D.bai],x.V)
D.d2O=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aAI=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a5O=w([A.i9,A.eq,A.bG,A.av,A.c8],x.O)
D.d3L=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aik=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d3X=w([A.a_7,D.aik,A.a_7],x.O)
D.d41=w([A.iu,D.jG,D.MG],x.O)
D.ePx=new B.y(A.bn,D.a3p)
D.eQZ=new B.y(A.K,D.a3o)
D.eKG=new B.y(A.e3,D.a3q)
D.d50=w([D.ePx,D.eQZ,D.eKG],B.at("O<+(qp,a_)>"))
D.d53=w([A.b7,A.aC],x.O)
D.d1=new C.JG(0,"text")
D.lV=new C.JG(1,"image")
D.fi=new C.JG(2,"shape")
D.U7=new C.JG(3,"pdf")
D.lu=new C.JG(4,"signature")
D.a8P=new C.JG(5,"bio")
D.d61=w([D.d1,D.lV,D.fi,D.U7,D.lu,D.a8P],B.at("O<JG>"))
D.d62=w([A.bq,A.cI],B.at("O<Ix>"))
D.d6H=w(["School","Documents","Sign & present"],x.s)
D.baM=new B.ab(0,A.G,A.akw,A.vz,28)
D.d74=w([D.baM],x.V)
D.d7n=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Sb=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aB8=w([A.i9,A.GE,A.bk,A.c,A.po,A.aF],x.O)
D.f2p=new B.y(0.1,0.08)
D.eWw=new B.y(0.3,0.05)
D.eK8=new B.y(0.55,0.1)
D.eOt=new B.y(0.8,0.06)
D.eRK=new B.y(0.92,0.16)
D.eRd=new B.y(0.2,0.2)
D.eOY=new B.y(0.7,0.22)
D.eVb=new B.y(0.05,0.4)
D.eSb=new B.y(0.95,0.45)
D.eKW=new B.y(0.12,0.7)
D.eNc=new B.y(0.88,0.75)
D.eNk=new B.y(0.4,0.9)
D.eIp=new B.y(0.65,0.93)
D.eO6=new B.y(0.25,0.97)
D.ePu=new B.y(0.85,0.9)
D.eLO=new B.y(0.5,0.04)
D.d91=w([D.f2p,D.eWw,D.eK8,D.eOt,D.eRK,D.eRd,D.eOY,D.eVb,D.eSb,D.eKW,D.eNc,D.eNk,D.eIp,D.eO6,D.ePu,D.eLO],x.G)
D.d9a=w([A.c,A.hF,A.aG,A.aV],x.O)
D.ejx=new C.k1("office_blue","Office Blue",A.bo,A.dh,A.aM,A.c,A.lj)
D.ejI=new C.k1("campus_green","Campus Green",A.b3,A.hj,A.cP,A.nx,A.up)
D.ejy=new C.k1("sunset","Sunset",A.fJ,A.k1,A.oi,A.hX,A.qf)
D.ejz=new C.k1("midnight","Midnight",A.aC,A.kM,A.cC,A.a_,A.dB)
D.ejK=new C.k1("classic","Classic",A.d5,A.dU,A.m8,A.hI,A.h_)
D.ejH=new C.k1("rose_gold","Rose Gold",A.hF,A.yv,A.yu,A.wr,A.Ce)
D.ejs=new C.k1("ocean_teal","Ocean Teal",A.fq,A.rD,A.ok,A.rT,A.wa)
D.ejr=new C.k1("slate_pro","Slate Pro",A.bw,A.a_,A.aM,A.aS,A.bk)
D.ejq=new C.k1("neon_night","Neon Night",A.b9,A.b_,A.bk,A.dI,A.a_)
D.ejC=new C.k1("lavender","Lavender",A.b7,A.mS,A.ku,A.pl,A.om)
D.ejE=new C.k1("coral","Coral",A.c8,A.k1,A.ui,A.hX,A.mX)
D.ejt=new C.k1("forest","Forest",A.hG,A.eb,A.cu,A.m9,A.ex)
D.eju=new C.k1("berry","Berry",A.fc,G.a_E,A.Cf,D.ajT,A.kM)
D.ejB=new C.k1("sand","Sand",A.e1,A.iv,A.oi,A.hI,A.bL)
D.ejG=new C.k1("ice","Ice",A.on,A.Gb,A.aM,A.oj,A.fK)
D.ejw=new C.k1("charcoal","Charcoal",A.an,A.aS,A.cC,A.bs,A.a_)
D.ejp=new C.k1("mint","Mint",A.aV,A.fY,A.hj,A.m9,A.qt)
D.ejF=new C.k1("crimson","Crimson",A.bG,A.nz,A.kx,A.GC,A.rU)
D.bjQ=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.ejA=new C.k1("gold","Gold",A.mP,A.we,A.pn,D.bjQ,A.mV)
D.ejD=new C.k1("aqua","Aqua",A.bT,A.C7,A.pj,A.qi,A.pp)
D.ejv=new C.k1("plum","Plum",A.nv,A.ys,A.Cf,A.Gc,A.rO)
D.ejJ=new C.k1("steel","Steel",A.d8,A.dh,A.bs,A.lj,A.lh)
D.a64=w([D.ejx,D.ejI,D.ejy,D.ejz,D.ejK,D.ejH,D.ejs,D.ejr,D.ejq,D.ejC,D.ejE,D.ejt,D.eju,D.ejB,D.ejG,D.ejw,D.ejp,D.ejF,D.ejA,D.ejD,D.ejv,D.ejJ],B.at("O<k1>"))
D.d9x=w([A.c2,A.jH],x.O)
D.U9=new C.hJ(10,"rotate3d")
D.JC=new C.hJ(8,"flip")
D.aLR=new C.hJ(19,"spiral")
D.r5=new C.hJ(16,"bounce")
D.aLU=new C.hJ(9,"flipVertical")
D.d9y=w([D.U9,D.JC,D.aLR,D.r5,D.aLU],x.i)
D.en=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.dax=w([0,0.32,0.68,1],x.x)
D.nd=new C.hJ(6,"zoom")
D.vt=new C.hJ(4,"slideUp")
D.vs=new C.hJ(2,"slideLeft")
D.daI=w([D.nd,D.JC,D.vt,D.U9,D.vs],x.i)
D.dbd=w([A.c4,A.hF,A.it,A.i9,A.c],x.O)
D.baA=new B.ab(0,A.G,D.aiA,A.vz,30)
D.dc0=w([D.baA],x.V)
D.ev7=new B.r(0,-2.5)
D.euZ=new B.r(-2.5,0)
D.etb=new B.r(2.5,0)
D.dc3=w([A.Un,A.a9f,A.aN1,A.a9e,D.ev7,A.a9h,D.euZ,D.etb],x.dN)
D.IK=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.dcz=w([23,114,69,56,80,144],x.t)
D.dd2=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.ddu=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dfe=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dfj=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bl=new C.vi(0,"rectangle")
D.f1=new C.vi(1,"circle")
D.lv=new C.vi(6,"hexagon")
D.dfz=w([D.bl,D.f1,D.lv],x.m)
D.oW=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ak1=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dg8=w([D.ak1,A.eb],x.O)
D.eKp=new B.y("","Classic")
D.eID=new B.y("caps","Bold caps")
D.eVe=new B.y("elegant","Elegant")
D.f0h=new B.y("shadow","Shadow")
D.eOR=new B.y("neon","Neon glow")
D.eYY=new B.y("marker","Highlighter")
D.f0v=new B.y("stamp","Stamp")
D.eNK=new B.y("threed","3D")
D.eVK=new B.y("fire","Fire")
D.eWI=new B.y("ice","Ice")
D.eUn=new B.y("chalk","Chalk")
D.eUs=new B.y("comic","Comic")
D.f1N=new B.y("softglow","Soft glow")
D.eXL=new B.y("lowercase","Lowercase")
D.eUX=new B.y("double","Echo")
D.f1W=new B.y("whisper","Whisper")
D.aC5=w([D.eKp,D.eID,D.eVe,D.f0h,D.eOR,L.aSk,D.eYY,D.f0v,L.aSm,D.eNK,L.aSe,D.eVK,D.eWI,D.eUn,D.eUs,A.UU,Au.aSn,D.f1N,D.eXL,D.eUX,D.f1W],x.L)
D.dhu=w([3,5,7,10,12,15],x.t)
D.dj6=w([A.c4,A.bL,A.c,A.ey,A.cN],x.O)
D.dJH=new C.tP(10,"cardWorld")
D.Eb=new C.C7(3,"rounded")
D.e0d=new C.lB("world","NGMY World",D.dJH,D.Eb,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dJI=new C.tP(11,"cardSplit")
D.e09=new C.lB("business","Business Wire",D.dJI,D.Eb,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dJJ=new C.tP(12,"cardBreaking")
D.e0m=new C.lB("breaking","Breaking Red",D.dJJ,D.Eb,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dJK=new C.tP(13,"cardFeature")
D.e0f=new C.lB("feature","Tech Feature",D.dJK,D.Eb,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aKu=new C.tP(6,"circle")
D.aKo=new C.C7(4,"circle")
D.e0j=new C.lB("parchment","Royal Circle",D.aKu,D.aKo,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.e08=new C.lB("ocean","Blue Ocean",D.aKu,D.aKo,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dJN=new C.tP(7,"rail")
D.aKn=new C.C7(1,"double")
D.e0a=new C.lB("forest","Green Leaf",D.dJN,D.aKn,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aKr=new C.tP(1,"sideBySide")
D.e0o=new C.lB("herald","NGMY Herald",D.aKr,D.Eb,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aKq=new C.tP(0,"classic")
D.a8_=new C.C7(9,"shadow")
D.e0n=new C.lB("daily","The Daily",D.aKq,D.a8_,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dJL=new C.tP(2,"splash")
D.aKp=new C.C7(6,"cutCorner")
D.e07=new C.lB("tabloid","Big Tabloid",D.dJL,D.aKp,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aKv=new C.tP(9,"minimal")
D.e0i=new C.lB("modern","Modern Digest",D.aKv,D.Eb,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aKs=new C.tP(3,"magazine")
D.aKm=new C.C7(0,"plain")
D.e0e=new C.lB("midnight","Midnight Edition",D.aKs,D.aKm,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dJO=new C.tP(8,"banner")
D.e0g=new C.lB("metro","Metro Wire",D.dJO,D.aKp,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dJG=new C.C7(8,"arch")
D.e0h=new C.lB("sunrise","Sunrise Post",D.aKs,D.dJG,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aKt=new C.tP(5,"scrapbook")
D.dJF=new C.C7(5,"tape")
D.e0c=new C.lB("neon","Neon Beat",D.aKt,D.dJF,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dJM=new C.tP(4,"wrap")
D.e0p=new C.lB("gold","Golden Press",D.dJM,D.a8_,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.e0q=new C.lB("minimal","Paper White",D.aKv,D.a8_,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.e0b=new C.lB("gazette","Fresh Gazette",D.aKq,D.aKn,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.e0l=new C.lB("times","Classic Times",D.aKr,D.aKm,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.TE=new C.C7(2,"polaroid")
D.e0k=new C.lB("scrapbook","Memory Scrapbook",D.aKt,D.TE,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a6m=w([D.e0d,D.e09,D.e0m,D.e0f,D.e0j,D.e08,D.e0a,D.e0o,D.e0n,D.e07,D.e0i,D.e0e,D.e0g,D.e0h,D.e0c,D.e0p,D.e0q,D.e0b,D.e0l,D.e0k],B.at("O<lB>"))
D.djj=w([0.45,1],x.x)
D.IQ=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.djJ=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hEQ=new C.oZ("Original",0,1,1,0,0,0)
D.hEU=new C.oZ("Black & white",0,1.1,0,0,0,0)
D.hEH=new C.oZ("Noir",-0.05,1.55,0,0,0,0)
D.hEL=new C.oZ("Sepia",0,1,0.25,0.9,0,0)
D.hEK=new C.oZ("Vivid",0,1.15,1.6,0,0,0)
D.hED=new C.oZ("Pop",0,1.3,1.9,0,0,0)
D.hEF=new C.oZ("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hER=new C.oZ("Matte",0,0.9,0.85,0,0,0.55)
D.hEM=new C.oZ("Cool",0,1.05,1,-0.8,0,0)
D.hET=new C.oZ("Warm",0.03,1.05,1.1,0.8,0,0)
D.hEE=new C.oZ("Golden hour",0.04,1,1.25,1,0,0)
D.hEJ=new C.oZ("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hES=new C.oZ("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hEI=new C.oZ("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hEO=new C.oZ("Retro",0,0.9,0.7,0.4,0,0.35)
D.hEN=new C.oZ("Forest",0,1,1.2,-0.1,-0.45,0)
D.hEP=new C.oZ("Rose",0,1,1.1,0.3,0.4,0)
D.hEG=new C.oZ("Ocean",0,1,1.2,-0.5,-0.2,0)
D.djK=w([D.hEQ,D.hEU,D.hEH,D.hEL,D.hEK,D.hED,D.hEF,D.hER,D.hEM,D.hET,D.hEE,D.hEJ,D.hES,D.hEI,D.hEO,D.hEN,D.hEP,D.hEG],B.at("O<oZ>"))
D.bge=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.djM=w([D.ak1,A.eb,D.bge],x.O)
D.eFK=new B.y(0.12,0.3)
D.eWT=new B.y(0.26,0.75)
D.eVa=new B.y(0.8,0.22)
D.f0H=new B.y(0.9,0.7)
D.eXK=new B.y(0.5,0.15)
D.eZS=new B.y(0.65,0.85)
D.eMi=new B.y(0.08,0.85)
D.dk1=w([D.eFK,D.eWT,D.eVa,D.f0H,D.eXK,D.eZS,D.eMi],x.G)
D.aCj=w([A.b9,A.c4,A.bd,A.bc],x.O)
D.dkW=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dl9=w([A.c,A.fK,A.dy,A.wh],x.O)
D.bk5=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dmc=w([D.bk5,D.aik],x.O)
D.dme=w([A.um,A.aF],x.O)
D.dmv=w([0,0.25,0.75,1],x.x)
D.dmx=w([A.yj,A.po],x.O)
D.aLr=new C.le(10,"kenteSunset")
D.hJv=w([D.aiO,A.kt,A.aF],x.O)
D.dWq=new C.jG("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aLr,4294964964,4282000405,4279983648,D.ki)
D.aLs=new C.le(11,"indigoMudcloth")
D.bhp=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hJJ=w([D.bhp,A.aih,A.iu],x.O)
D.dWy=new C.jG("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aLs,4294439140,4279903102,4279903102,D.ki)
D.aLt=new C.le(12,"adinkraRoyal")
D.bwI=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hJK=w([D.ah1,D.bwI,A.aF],x.O)
D.dWA=new C.jG("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aLt,4294965484,4285218591,4287322667,D.ki)
D.aLu=new C.le(13,"nileLotus")
D.bst=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.box=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hJP=w([D.bst,D.box,A.iu],x.O)
D.dWz=new C.jG("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aLu,4294244340,4279196764,4279196764,D.ki)
D.aLv=new C.le(14,"shweshweIvory")
D.bmo=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.bkZ=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bhY=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hJw=w([D.bmo,D.bkZ,D.bhY],x.O)
D.dWv=new C.jG("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aLv,4294505710,4279970378,4291058750,D.ki)
D.tD=new C.le(15,"certIvoryNavy")
D.hJu=w([D.Nu,D.jG,A.iu],x.O)
D.aL1=new C.yc(1,"ringsNdoa")
D.dWs=new C.jG("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.tD,4294966259,4279378237,4291404327,D.aL1)
D.a8w=new C.yc(2,"coupleCards")
D.dWn=new C.jG("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.tD,4294966259,4279378237,4291404327,D.a8w)
D.Ee=new C.le(18,"certIvoryNavyBar")
D.ah0=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hJI=w([D.ah0,D.jG,A.iu],x.O)
D.aL2=new C.yc(3,"kuhoweshaForm")
D.dWl=new C.jG("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Ee,4294966519,4279378237,4291404327,D.aL2)
D.aiy=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hK1=w([D.Nu,D.aiy,A.iu],x.O)
D.a8x=new C.yc(4,"mahariPande")
D.dWo=new C.jG("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.tD,4294966259,4279904068,4291404327,D.a8x)
D.aLw=new C.le(16,"certIvoryGreen")
D.blG=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hJy=w([A.My,D.blG,A.iu],x.O)
D.aL3=new C.yc(5,"familiaMti")
D.dWu=new C.jG("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aLw,4294966776,4280241466,4291404327,D.aL3)
D.a8y=new C.yc(6,"ndoaSafi")
D.dWm=new C.jG("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Ee,4294966519,4279378237,4291404327,D.a8y)
D.bqE=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hJB=w([D.Nu,A.iu,D.bqE],x.O)
D.a8z=new C.yc(7,"peteWide")
D.dWr=new C.jG("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.tD,4294966259,4282001936,4291404327,D.a8z)
D.dWB=new C.yc(8,"muhuriCrest")
D.dWk=new C.jG("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.tD,4294966259,4279378237,4291404327,D.dWB)
D.hJL=w([D.ah0,D.aiy,A.iu],x.O)
D.dWC=new C.yc(9,"fomuWazi")
D.dWx=new C.jG("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Ee,4294966519,4279904068,4291404327,D.dWC)
D.aLx=new C.le(17,"certIvoryRose")
D.bmt=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hJO=w([D.bmt,D.ajy,A.iu],x.O)
D.a8v=new C.yc(10,"upendoOrnate")
D.dWt=new C.jG("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aLx,4294965493,4286200650,4291404327,D.a8v)
D.dn0=w([D.dWq,D.dWy,D.dWA,D.dWz,D.dWv,D.dWs,D.dWn,D.dWl,D.dWo,D.dWu,D.dWm,D.dWr,D.dWk,D.dWx,D.dWt],x.h)
D.eo=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.JD=new C.wz(0,"emojis")
D.Ek=new C.wz(1,"pictures")
D.JE=new C.wz(2,"icons3d")
D.a8R=new C.wz(3,"animations")
D.Ub=new C.wz(4,"videoMotion")
D.El=new C.wz(5,"luxe")
D.a6t=w([D.JD,D.Ek,D.JE,D.a8R,D.Ub,D.El],B.at("O<wz>"))
D.f_v=new B.y(A.e9,"Looks")
D.eOm=new B.y(A.Dr,"Light")
D.eOj=new B.y(A.lR,"Colour")
D.eMj=new B.y(A.wO,"Effects")
D.aqk=new B.a_(63112,"MaterialIcons",!1)
D.eIT=new B.y(D.aqk,"Crop")
D.dnx=w([D.f_v,D.eOm,D.eOj,D.eMj,D.eIT],x.f2)
D.dof=w([],x.D)
D.hJZ=w([],x.L)
D.eMx=new B.y("Flashcard",D.Jy)
D.eQp=new B.y("Quiz",D.Jz)
D.eSq=new B.y("Worksheet",D.JA)
D.ePp=new B.y("Notes",D.nc)
D.eQX=new B.y("Section",D.Ei)
D.doY=w([D.eMx,D.eQp,D.eSq,D.ePp,D.eQX],B.at("O<+(n,mV)>"))
D.dYn=new C.le(6,"beadedPearl")
D.bpn=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hK2=w([H.a_j,D.bpn,A.iu],x.O)
D.aL_=new C.jG("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dYn,4294966774,4286209070,4291404327,D.ki)
D.dYo=new C.le(7,"artDeco")
D.btS=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bx2=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hK0=w([D.btS,D.bx2,A.c2],x.O)
D.aL0=new C.jG("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dYo,4294440434,4280228630,4290283019,D.ki)
D.dYp=new C.le(8,"rosetteCorners")
D.bw5=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bka=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bpg=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hJE=w([D.bw5,D.bka,D.bpg],x.O)
D.aKZ=new C.jG("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dYp,4294702831,4285218602,4291394365,D.ki)
D.dYq=new C.le(9,"modernLedger")
D.hJD=w([A.c,D.jG,D.jG],x.O)
D.aKY=new C.jG("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dYq,4294967295,4279378237,4279378237,D.ki)
D.dp1=w([D.aL_,D.aL0,D.aKZ,D.aKY],x.h)
D.dpc=w([A.it,A.po],x.O)
D.cv=new C.hJ(0,"none")
D.dr=new C.hJ(1,"fade")
D.JB=new C.hJ(3,"slideRight")
D.aLT=new C.hJ(5,"slideDown")
D.ei1=new C.hJ(7,"zoomOut")
D.a8Q=new C.hJ(11,"cube")
D.ehX=new C.hJ(12,"blur")
D.aLQ=new C.hJ(13,"dissolve")
D.ehY=new C.hJ(14,"wipeLeft")
D.ehZ=new C.hJ(15,"wipeRight")
D.Ua=new C.hJ(17,"push")
D.ei_=new C.hJ(18,"flash")
D.aLS=new C.hJ(20,"swing")
D.ei0=new C.hJ(21,"curtain")
D.SK=w([D.cv,D.dr,D.vs,D.JB,D.vt,D.aLT,D.nd,D.ei1,D.JC,D.aLU,D.U9,D.a8Q,D.ehX,D.aLQ,D.ehY,D.ehZ,D.r5,D.Ua,D.ei_,D.aLR,D.aLS,D.ei0],x.i)
D.SL=w([D.a8u,D.a8s,D.a8l,D.a8m,D.a8n,D.a8q,D.a8o,D.a8p,D.a8t,D.a8r,D.aL_,D.aL0,D.aKZ,D.aKY],x.h)
D.dpE=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dpI=w([A.rI,A.i9,A.c2],x.O)
D.eNE=new B.y(A.uU,"Design")
D.f16=new B.y(D.aqz,"Word sizes")
D.eXt=new B.y(A.Dn,"Text")
D.bTb=new B.a_(983182,"MaterialIcons",!1)
D.eXy=new B.y(D.bTb,"Photo")
D.eIs=new B.y(A.l_,"Logo")
D.f2n=new B.y(A.I6,"News")
D.dpO=w([D.eNE,D.f16,D.eXt,D.eXy,D.eIs,D.f2n],x.f2)
D.dpP=w(["golddust","sparkle","sheen"],x.s)
D.ejo=new C.ey("upload_pdf",A5.HY,"Upload PDF")
D.eiy=new C.ey("sign_paper",A.I4,"Sign Paper")
D.bSp=new B.a_(63438,"MaterialIcons",!1)
D.ejk=new C.ey("hd_photo",D.bSp,"HD Photo")
D.eiq=new C.ey("sharpen",E.a36,"Sharpen")
D.eiA=new C.ey("print",A5.HY,"Download PDF")
D.ej1=new C.ey("rotate",D.aqk,"Rotate")
D.eiJ=new C.ey("text_box",A.Dn,"Text Box")
D.eiL=new C.ey("picture",A.v_,"Picture")
D.eiH=new C.ey("title",A.wZ,"Title")
D.eiD=new C.ey("subtitle",V.ar7,"Subtitle")
D.eja=new C.ey("bullets",I.a3r,"Bullet List")
D.eiE=new C.ey("numbered",A.PN,"Numbered")
D.ejd=new C.ey("quote",A6.D8,"Quote")
D.eiQ=new C.ey("citation",A.oF,"Citation")
D.ejg=new C.ey("date_stamp",Ak.a39,"Date Stamp")
D.ej3=new C.ey("page_number",A.wY,"Page #")
D.ej7=new C.ey("header_bar",A.zE,"Header")
D.eiK=new C.ey("footer_bar",Av.a4_,"Footer")
D.eiz=new C.ey("divider",A.ti,"Divider")
D.eiv=new C.ey("highlight",A.a3u,"Highlight")
D.ej9=new C.ey("redact",A.to,"Redact")
D.eiX=new C.ey("callout",A.D1,"Callout")
D.eji=new C.ey("checkboxes",I.apG,"Checklist")
D.eiU=new C.ey("table",A.a3Y,"Table")
D.eiO=new C.ey("memo",I.a3H,"Memo")
D.eiY=new C.ey("letter",A.HT,"Letter")
D.bS3=new B.a_(63259,"MaterialIcons",!0)
D.eip=new C.ey("agenda",D.bS3,"Agenda")
D.eiB=new C.ey("toc",AE.aqM,"Contents")
D.bSl=new B.a_(63406,"MaterialIcons",!1)
D.eiV=new C.ey("sig_line",D.bSl,"Sign Line")
D.eii=new C.ey("initial_line",A.j9,"Initials")
D.eil=new C.ey("approved",A.l_,"APPROVED")
D.ej_=new C.ey("draft",A.pF,"DRAFT")
D.ej5=new C.ey("confidential",A.jL,"Confidential")
D.ej8=new C.ey("sticky",A.Q4,"Sticky Note")
D.ejh=new C.ey("progress",A.aqL,"Progress")
D.bTE=new B.a_(983507,"MaterialIcons",!1)
D.eiw=new C.ey("stars",D.bTE,"Star Rating")
D.eig=new C.ey("equation",A.aqC,"Equation")
D.eir=new C.ey("timeline",A.a3Z,"Timeline")
D.eiP=new C.ey("two_col",A.a40,"Two Columns")
D.eit=new C.ey("compare",AA.a3d,"Compare")
D.eie=new C.ey("duplicate_el",A.fN,"Duplicate")
D.ejm=new C.ey("delete_el",A.ek,"Delete")
D.ejc=new C.ey("bring_fwd",H.aqv,"Bring Front")
D.eij=new C.ey("send_back",H.aqu,"Send Back")
D.eiZ=new C.ey("align_left",D.a3p,"Align L")
D.ej4=new C.ey("align_center",D.a3o,"Align C")
D.ejl=new C.ey("align_right",D.a3q,"Align R")
D.eiI=new C.ey("word_count",A_.a2M,"Word Count")
D.eiF=new C.ey("link_text",A.hR,"Link")
D.ej2=new C.ey("phone",A.iT,"Phone")
D.eiu=new C.ey("email",A.D5,"Email")
D.ejn=new C.ey("qr_placeholder",A.jt,"QR Placeholder")
D.eio=new C.ey("rectangle",A7.tf,"Rectangle")
D.eiT=new C.ey("circle",A.py,"Circle")
D.eik=new C.ey("arrow",A.js,"Arrow")
D.ejb=new C.ey("line",A.ti,"Line")
D.eix=new C.ey("triangle",A.a3b,"Triangle")
D.bSa=new B.a_(63318,"MaterialIcons",!1)
D.eiC=new C.ey("grayscale",D.bSa,"Grayscale")
D.eiM=new C.ey("brighten",I.aq_,"Brighten")
D.eiR=new C.ey("flip_h",A.D7,"Flip H")
D.bSh=new B.a_(63348,"MaterialIcons",!1)
D.ejj=new C.ey("flip_v",D.bSh,"Flip V")
D.ej6=new C.ey("cover_page",A.qO,"Cover Page")
D.eih=new C.ey("invoice",A.h3,"Invoice")
D.eis=new C.ey("resume",A.mj,"Resume")
D.eiG=new C.ey("minutes",A.pA,"Minutes")
D.eim=new C.ey("lab_report",A.Q0,"Lab Report")
D.ein=new C.ey("rubric",A.qS,"Rubric")
D.eiS=new C.ey("flashcard_tool",Y.I2,"Flashcard")
D.eje=new C.ey("quiz_tool",A.HZ,"Quiz Block")
D.eiW=new C.ey("worksheet_tool",O.Hy,"Worksheet")
D.ej0=new C.ey("outline_share",A.I0,"Share Outline")
D.ejf=new C.ey("export_json",D.apM,"Export JSON")
D.eif=new C.ey("new_slide",D.a2L,"New Slide")
D.eiN=new C.ey("present",A.qU,"Present")
D.dqm=w([D.ejo,D.eiy,D.ejk,D.eiq,D.eiA,D.ej1,D.eiJ,D.eiL,D.eiH,D.eiD,D.eja,D.eiE,D.ejd,D.eiQ,D.ejg,D.ej3,D.ej7,D.eiK,D.eiz,D.eiv,D.ej9,D.eiX,D.eji,D.eiU,D.eiO,D.eiY,D.eip,D.eiB,D.eiV,D.eii,D.eil,D.ej_,D.ej5,D.ej8,D.ejh,D.eiw,D.eig,D.eir,D.eiP,D.eit,D.eie,D.ejm,D.ejc,D.eij,D.eiZ,D.ej4,D.ejl,D.eiI,D.eiF,D.ej2,D.eiu,D.ejn,D.eio,D.eiT,D.eik,D.ejb,D.eix,D.eiC,D.eiM,D.eiR,D.ejj,D.ej6,D.eih,D.eis,D.eiG,D.eim,D.ein,D.eiS,D.eje,D.eiW,D.ej0,D.ejf,D.eif,D.eiN],B.at("O<ey>"))
D.dqx=w([A.cC,A.an],x.O)
D.eHZ=new B.y(4286331629,4292552567)
D.eHM=new B.y(4280640491,4278630100)
D.eI6=new B.y(4294538006,4292943176)
D.eH8=new B.y(4278556265,4280640491)
D.dkd=w([D.eHZ,D.eHM,D.eI6,D.eH8],x.n)
D.cGW=w([4294626325,4280472558,4294210230],x.t)
D.ei9=new C.ob("colorful","Colorful",A.lR,D.dkd,4294967295,3875536895,D.cGW,D.nd)
D.eHA=new B.y(4279522093,4279657780)
D.eHQ=new B.y(4281750292,4283268111)
D.eHb=new B.y(4278603323,4279203438)
D.eHR=new B.y(4282343954,4279599165)
D.cS7=w([D.eHA,D.eHQ,D.eHb,D.eHR],x.n)
D.cGE=w([4288931381,4294829706,4287033260],x.t)
D.ei5=new C.ob("nature","Nature",A.I5,D.cS7,4294442727,3874290891,D.cGE,D.dr)
D.eHu=new B.y(4279369771,4283178389)
D.eHr=new B.y(4279179050,4286456526)
D.eHI=new B.y(4280163147,4290648157)
D.eH0=new B.y(4278322711,4285343961)
D.d9M=w([D.eHu,D.eHr,D.eHI,D.eH0],x.n)
D.cGS=w([4294210230,4280472558,4289170426],x.t)
D.ei3=new C.ob("vibe","Vibe",A.PQ,D.d9M,4294967295,3874869502,D.cGS,D.vs)
D.eI2=new B.y(4290007817,4292552567)
D.eHX=new B.y(4286328082,4294286859)
D.eI1=new B.y(4288485197,4294538006)
D.eHW=new B.y(4285343961,4293675161)
D.ccE=w([D.eI2,D.eHX,D.eI1,D.eHW],x.n)
D.cGX=w([4294829706,4294967295,4284999929],x.t)
D.ei4=new C.ob("celebration","Celebration",A.kc,D.ccE,4294967295,4009752557,D.cGX,D.r5)
D.eHp=new B.y(4279179050,4280171146)
D.eHt=new B.y(4279310375,4280232247)
D.eHh=new B.y(4278916151,4280172719)
D.eHq=new B.y(4279179050,4281549141)
D.d1U=w([D.eHp,D.eHt,D.eHh,D.eHq],x.n)
D.cGz=w([4281908728,4294626325,4287931320],x.t)
D.ei8=new C.ob("professional","Professional",A.zm,D.d1U,4294967295,3872118241,D.cGz,D.Ua)
D.eHl=new B.y(4278995566,4278413729)
D.eHd=new B.y(4278727492,4279137424)
D.eHJ=new B.y(4280171146,4278751666)
D.eHm=new B.y(4278995566,4279590517)
D.cKN=w([D.eHl,D.eHd,D.eHJ,D.eHm],x.n)
D.cGC=w([4286436348,4284410580,4294829706],x.t)
D.eia=new C.ob("ocean","Ocean",I.a42,D.cKN,4294967295,3873501950,D.cGC,D.vt)
D.eHY=new B.y(4286328082,4294538006)
D.eI_=new B.y(4286781507,4294677052)
D.eHU=new B.y(4283178389,4294197086)
D.eI0=new B.y(4288295954,4294688548)
D.cZ4=w([D.eHY,D.eI_,D.eHU,D.eI0],x.n)
D.cGY=w([4294829706,4294967295,4294747557],x.t)
D.eib=new C.ob("sunset","Sunset",A.Q7,D.cZ4,4294967295,4009749973,D.cGY,D.dr)
D.eIa=new B.y(4294967295,4294047225)
D.eI5=new B.y(4294507260,4294967295)
D.eI9=new B.y(4294967295,4293060848)
D.eI4=new B.y(4294507260,4294047225)
D.dd8=w([D.eIa,D.eI5,D.eI9,D.eI4],x.n)
D.cGx=w([4280640491,4279179050,4287931320],x.t)
D.ei7=new C.ob("minimal","Minimal",A7.tf,D.dd8,4279179050,4282865001,D.cGx,D.dr)
D.eHk=new B.y(4278979081,4280886564)
D.eHE=new B.y(4280031511,4278979081)
D.eHs=new B.y(4279308561,4281148438)
D.eHj=new B.y(4278979081,4280031511)
D.dsA=w([D.eHk,D.eHE,D.eHs,D.eHj],x.n)
D.cGL=w([4292128567,4294829706,4289241758],x.t)
D.eic=new C.ob("elegant","Elegant",A.mo,D.dsA,4294898631,3873957348,D.cGL,D.aLQ)
D.eHG=new B.y(4280159034,4282058596)
D.eHg=new B.y(4278916151,4280163147)
D.eHO=new B.y(4281208933,4278916151)
D.eHx=new B.y(4279502891,4283178389)
D.dAr=w([D.eHG,D.eHg,D.eHO,D.eHx],x.n)
D.cGU=w([4294296657,4292128567,4291081725],x.t)
D.ei6=new C.ob("royal","Royal Gold",A.iU,D.dAr,4294965222,3874084351,D.cGU,D.nd)
D.eH5=new B.y(4278464302,4280163147)
D.eHf=new B.y(4278916151,4279455306)
D.eHH=new B.y(4280163147,4283040846)
D.eH2=new B.y(4278332450,4281413249)
D.djP=w([D.eH5,D.eHf,D.eHH,D.eH2],x.n)
D.cGy=w([4281193663,4289170426,4294210230],x.t)
D.eid=new C.ob("aurora","Aurora Glow",A.e9,D.djP,4293983738,3869766608,D.cGy,D.dr)
D.xc=w([D.ei9,D.ei5,D.ei3,D.ei4,D.ei8,D.eia,D.eib,D.ei7,D.eic,D.ei6,D.eid],B.at("O<ob>"))
D.bpY=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.dr6=w([A.rE,D.bpY,A.rE],x.O)
D.dro=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.drt=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eXl=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eNe=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eRZ=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eEw=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eQB=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eOJ=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eTe=new B.y("Surprise me","")
D.ds1=w([D.eXl,D.eNe,D.eRZ,D.eEw,D.eQB,D.eOJ,D.eTe],x.L)
D.bi_=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bur=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dsQ=w([A.c,D.bi_,D.bur],x.O)
D.dvc=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aLp=new C.le(0,"heritageGold")
D.bog=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.boh=new B.u(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.q)
D.hK3=w([D.bog,D.boh,A.aF],x.O)
D.dWw=new C.jG("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aLp,4294570461,4284234270,4292128567,D.ki)
D.aLq=new C.le(1,"heritageCrimson")
D.bga=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bmq=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.buc=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hJH=w([D.bga,D.bmq,D.buc],x.O)
D.dWp=new C.jG("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aLq,4294635750,4285213214,4292912216,D.ki)
D.dvh=w([D.a8u,D.a8s,D.dWw,D.dWp,D.a8n,D.a8q],x.h)
D.e1t=new C.rZ(1,"circuit")
D.e1W=new C.mt("neural","Neural Link","Robotic",D.e1t,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.e1s=new C.rZ(0,"grid")
D.e1T=new C.mt("signal","Signal Grid","Robotic",D.e1s,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.e1y=new C.rZ(2,"hexes")
D.e1E=new C.mt("core","Core Protocol","Robotic",D.e1y,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aLN=new C.rZ(11,"diagonal")
D.e1P=new C.mt("steel","Steel Tech","Robotic",D.aLN,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aLO=new C.rZ(3,"rings")
D.e1D=new C.mt("vault","Vault Gold","Robotic",D.aLO,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.e1w=new C.rZ(13,"leaves")
D.e1G=new C.mt("forest","Forest Morning","Nature",D.e1w,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aLP=new C.rZ(5,"waves")
D.e1N=new C.mt("ocean","Ocean Calm","Nature",D.aLP,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.e1z=new C.rZ(6,"sunset")
D.e1S=new C.mt("sunset","Sunset Glow","Nature",D.e1z,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.e1A=new C.rZ(7,"mountains")
D.e1F=new C.mt("mountain","Mountain Air","Nature",D.e1A,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.e1B=new C.rZ(8,"stars")
D.e1M=new C.mt("night","Night Sky","Nature",D.e1B,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a8O=new C.rZ(4,"orbs")
D.e1K=new C.mt("aurora","Aurora","Nature",D.a8O,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.e1U=new C.mt("sand","Sand Dune","Nature",D.aLP,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.e1C=new C.rZ(9,"rays")
D.e1J=new C.mt("golden","Golden Hour","Warm",D.e1C,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.e1H=new C.mt("royal","Royal Purple","Warm",D.aLN,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.e1I=new C.mt("rose","Rose Petal","Warm",D.a8O,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.e1v=new C.rZ(12,"blocks")
D.e1L=new C.mt("electric","Electric Blue","Bold",D.e1v,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.e1V=new C.mt("mint","Fresh Mint","Bold",D.a8O,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.e1x=new C.rZ(14,"minimal")
D.e1R=new C.mt("white","Clean White","Clean",D.e1x,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.e1u=new C.rZ(10,"frame")
D.e1O=new C.mt("midnight","Midnight Gold","Clean",D.e1u,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.e1Q=new C.mt("community","Community Green","Clean",D.aLO,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a7_=w([D.e1W,D.e1T,D.e1E,D.e1P,D.e1D,D.e1G,D.e1N,D.e1S,D.e1F,D.e1M,D.e1K,D.e1U,D.e1J,D.e1H,D.e1I,D.e1L,D.e1V,D.e1R,D.e1O,D.e1Q],B.at("O<mt>"))
D.dvG=w([D.C9,A.um,A.i9,A.c2],x.O)
D.dvZ=w([D.ajL,D.jG],x.O)
D.dw9=w(["pdf","docx","txt","md"],x.s)
D.f6A=new B.b5(-3,150,34)
D.f6B=new B.b5(-3,214,62)
D.f6C=new B.b5(-3,288,62)
D.dx2=w([D.f6A,D.f6B,D.f6C],B.at("O<+(G,G,G)>"))
D.dxy=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dyi=w(["Write","Design","Print & fold"],x.s)
D.kj=new C.vi(2,"triangle")
D.Ej=new C.vi(3,"arrow")
D.fP=new C.vi(4,"line")
D.kk=new C.vi(5,"parallelogram")
D.dyl=w([D.bl,D.f1,D.kj,D.Ej,D.fP,D.kk,D.lv],x.m)
D.eG_=new B.y(240,96)
D.eIL=new B.y(560,46)
D.dys=w([D.eG_,D.eIL],x.G)
D.dyw=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","NOTHING DISAPPEARS ON THE BENCH: every face of the wiring bench is drawn from both sides, so from behind or from inside the open box nothing goes missing or can be seen through. THE STRIP AT THE BOTTOM: on iPhone the engine measures the page by documentElement.clientHeight, which can stay smaller than the visible screen after the keyboard has gone; index.html now reports the visible height (visualViewport) when it is taller, so the app is drawn to the very bottom.","BENCH: NO SCREWS SEEN THROUGH, NO HOLES IN THE WALL, A ROOM AROUND IT: screws, slots and plates on the outlet or switch are drawn on top only from the side they are mounted on, so from the other side the body hides them (no screws of the far side seen through the outlet). The wall is one front and one back surface with a real opening for the box, so no seams show as holes or stripes when the view turns. A floor, a ceiling and two side walls stand around the bench, so turning never looks out into black nothing.","BENCH SEEN FROM ANY ANGLE, ESSENTIALS TILES, OATH PAPER PER STATE: on the wiring bench everything behind the front of the wall (the box, the cable, the ends of the wires inside the box) is drawn before the wall, so from the side the wall hides it and it shows only through the opening, as in a real wall; before, the box and the cable showed through the wall when the view turned. In Business Essentials the top frame is its own row and the tiles sit under it, so they never scroll up into it. In NGMY Slides the app admin first chooses the state, then opens, edits or creates the Hati ya Kiapo cha Uongozi of that state (one paper per state).","CIVIC REGISTRY ID AND THE LEADERSHIP OATH PAPER: the ID icon and the member name at the top of the Civic Registry follow the same rule as the ID card on the home page and come from the account in the database, so they no longer disappear after the app is closed, reset or reinstalled (a member removed from the registry still gets no ID). Hati ya Kiapo cha Uongozi in NGMY Slides can be deleted only by the app admin (Delete for everyone): it is then gone for every user on every phone, an old copy can never be saved back, and only the admin can create a new one, with the Create Hati ya Kiapo button in NGMY Slides.","BUSINESS ESSENTIALS KEEPS WHAT YOU TYPE: notes, notebooks, contacts, quick tasks, medicines, site map, hotlines, Bible words, My Vault list and Where I Put It now save into the large storage of the device (IndexedDB) with a copy in the small storage when there is room. Before, everything went into the small browser storage, which the rest of the app also fills; when it was full new entries silently failed to save, and one damaged note could make the list look empty so the next save wiped every note. Now a damaged entry is skipped instead, and if a note cannot be saved a message says so. Every Business Essentials page shows its name in a frame in the middle at the top, like the Construction Lab and Core Protocol, including Create a note.","CORE PROTOCOL TITLE AND PROTECTED FIXES: Core Protocol now has its name in a frame in the middle at the top with the back button at the side, like the Construction Lab, and the page slides up under the clock. The fixes for the black bar and the approved page layouts are protected: the website is only published when a set of checks confirms they are all still in place, so they cannot be undone by accident.","NO BLACK BAR AT THE TOP OR BOTTOM ON iPHONE: in Safari and in the app saved to the Home Screen the app is no longer pinned to the screen (Safari cut a pinned layer off above its bottom bar and filled the rest with black); it now runs to the bottom edge of the screen, under the Safari bar, with the menu kept above the bar. Pages whose list used to stop below the clock (a dark band at the top when scrolling up) now let the list slide up under the clock, like the Advisors page: My Profile, NGMY Slides, Invest, Documents, Construction Lab and its lessons, Doc Share, Local Growth, Account, Market and Worksheets.","THE BLACK BAR AT THE BOTTOM AFTER TYPING: on iPhone, when the keyboard closes, iOS can leave the page pushed up a little without saying so; the app is the right size but sits too high, and the empty page shows as a dark bar along the bottom. The page now puts itself back in place as soon as typing ends, whenever the visible area moves, and with a light check twice a second while nobody is typing. PHONE UNLOCK: the Phone (paste a YouTube or any video link and it plays) is now a small round button right beside the X at the top, instead of a big card in the list.","CONTRIBUTION POP-UP AND THANK-YOU: the home pop-up that asks for a contribution never comes to someone who has contributed to the campaign going now. A contribution is recognised the same way the registrar report does it (the email of the record, the member email written inside it, or the registry number), the list is read from the cloud strictly (if it cannot be read nobody is asked), and the phone remembers that the person gave to this campaign. A member counts as contributed however their app login is linked to their registry record: the same email, the registry number, the linked app email set with the ID card, a granted ID card with the same phone, the app login the registrar writes into each contribution, or the mark the registrar puts on the member record (gave this much to this campaign). Instead of the ask, twice a day when the app opens (once before noon and once after noon), until the contribution is over, that person gets a Swahili orange pop-up, Hongera, with their name in a gold frame (MCHANGIAJI), the amount they contributed and what it was for.","TURNING ROUND THE DEVICE: on the wiring bench (outlets, switches, lights, fans and the others) the view can be turned to the left or the right as far as the back of the device, but not all the way round; once the view is behind the wall the wall is left out so the back of the outlet, the box and the cable can be seen.","LOGIN AND BOTTOM OF THE PAGE: the login logo and title paint correctly again (two ring gradients with three colours had no colour stops, which newer Flutter refuses to paint, so the login looked broken; the same was fixed in the Vault games), and in a browser tab the page now follows the real visible height (100dvh) so no dark strip is left at the bottom.","CONTRIBUTION POP-UP: when the app opens (and when it comes back after eight minutes or more), a member of a state that has a contribution (help mode) going, inside its circle (all members, a city or a room), who has NOT contributed to that campaign yet, gets a big rounded pop-up in the middle of the screen with space at both sides. The pop-up is all in Swahili and orange like Help + Insurance, with fine lines at the back, a band of light, floating sparks, a ring turning round the badge, a shine on the button and things sliding in one by one. The two buttons at the top are Fungua Usajili wa Raia (goes straight to the Civic Registry) and a round Close button. Below: the name of the state, what the contribution is for (the heading asks Mchango huu ni wa nini?), and where to send it (Cash App opens, Zelle and the phone number with dashes, tap to copy or call). A member who has contributed to the campaign that is going now never gets it, and one who gave to an earlier campaign does; it cannot be told offline, so then it does not show. The Civic Registry itself is unchanged and still shows the campaign.","ZOOM IN A ROOM: in every room view (houses, jobs, lessons) the plus and minus buttons, the mouse wheel and the pinch go toward and away from what the middle of the screen looks at (an outlet, a switch, a wall), not toward the middle of the room.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","HOUSE CARE CARD DOWNLOAD AND REGISTRAR VIEW ONLY: in the Help Center, House and insurance, House Care, a member sees the very same House Care card as on the home screen (due date, status, name, price and agreement) with a white round download button that saves the card as a picture. The price and agreement line (for example 25 dollars a month and 1-year agreement) sits on the right of the name, as before, and is always shown whole (the name gives way first). An Authorized Registrar who opens another state with that state code sees Search, Rankings and a Members list marked view only, with a yellow View only banner: they can look but cannot enroll, edit, remove, manage cities, help mode or anything else there. Their registrar tools work only in their home state.","AUTHORIZED REGISTRAR STATE CODE POP-UP: when an Authorized Registrar changes to another state, a redesigned pop-up asks for that state Civic Registry code: a purple shield badge, the move shown as two chips (your state, arrow, the new state), a rounded code field with a key icon and a show or hide eye, a red line if the code is wrong, a reminder that registrar tools stay in the home state, and a big Verify and Change button with Cancel under it. Light and dark mode.","MENUS OPEN AT ONCE: a few seconds after the home screen opens, NGMY quietly loads every big menu in the background (Growth Income, the Vault Arcade, the Core Protocol and the Construction Lab, Studio tools like invoices and video, the Market Hub, Help Center, State Wallet, Menu Studio and more), one after another, from the copy already stored on the phone. So no menu shows a loading circle the first time it is opened after the app starts. It costs no data and needs no internet once the app was opened online before.","NGMY ADS ON THE LAB TVS: in Core Protocol, the Electronics Lab TVs, phones and screens (and the TVs in the Construction Lab houses and the city) play NGMY ads made like real TV commercials. There are 14 ads, one for each NGMY feature: Civic Registry, Jobs and Help, NGMY Store, Kiswahili School, Document Scanner, Invoices, Family Tree, Wallet, Game Center, Electronics Lab, Advisors, Construction Lab, Creator Hub and Business Cards. Each ad is ten seconds: a real looking phone turns in 3D in a lit studio and shows the feature working on its screen, then a 3D coin, card or medal spins, then the end card with the NGMY name and an Open NGMY button. On the big TV screen (tap a lab TV 3 times quickly) you can tap the picture to spin the phone or the coin, swipe left or right for the next or the previous ad, pick any ad from the chapter strip at the bottom (the ADS key on the remote opens all 14), and tap Learn more to see what the feature does and where to find it in NGMY, with a Watch again button. Two channels changed name: channel 9 is now NGMY Civic Registry and channel 10 is NGMY Creator Hub.","CREATE INVOICE AND THE IRON TRIANGLE: in Create Invoice the fields are grouped in frames with an icon and a title (Invoice details, Your business, Bill to and more) in BOTH light mode and dark mode; in dark mode the frames are deep night purple with a purple edge and the fields are rounded with purple icons. The Iron Triangle (FAST, CHEAP, GOOD - pick any two) is a brushed steel plate the size and shape of a bank card: the triangle and its name on the left, the three switches on the right, and the result on a dark steel plate UNDER the card (not inside it); the green Quote Calc frame fits the card and the plate with no empty space. The Quote Calc window is only as tall as what is inside it (the Iron Triangle and the Price Calculator), so there is no empty space at the bottom; on a short screen it scrolls.","ALL THE NEMA OUTLETS IN THE CONSTRUCTION LAB: there is also the dual-function AFCI/GFCI outlet that the newer electrical code asks for in kitchens and laundry rooms (TEST and RESET buttons and a green light, wired on the LINE screws), and the lesson tiles now pair up two in every row. The slots and holes of every outlet stay visible from any side when you turn the view. 23 more outlets from the NEMA charts, each a lesson tile and a possible city job, each with its real face in the room, on the bench and in the framed house: the old 2-prong 1-15 (no ground), the 6-15 and 6-30 (240 volts, no neutral), the big 60 amp 14-60, the RV shore power 50 amp twist-lock, the twist-locks L5-20, L5-30, L6-20, L6-30, L14-20 and the old L2-20 with no ground, the 277 volt 7-15, 7-20 and 7-30 (brown hot and grey neutral), the three-phase Y 18-20 (three hots and a neutral), the three-phase 15-20, 15-30, 15-50 and 15-60 (black, red and blue hots and a ground, the third hot on screw Z), the three-phase twist-locks L15-30, L21-30 (five wires), L16-30 and L22-30 (480 volt brown, orange and yellow hots). The 1-15 and the 6-15 and 277 volt faces are white, the 18-20 grey, the rest dark.","MORE AMERICAN OUTLETS IN THE CONSTRUCTION LAB: besides the outlet, GFCI, split, 240 volt, isolated ground, dryer, range and washer outlets, there are lessons for the AFCI outlet (arc-fault, LINE screws), the tamper-resistant TR outlet (child shutters), the USB outlet, the 20 amp 5-20 outlet with the T slot, the outdoor weather-resistant GFCI under a bubble cover, the smart Wi-Fi outlet (needs the neutral), the electric car charger 14-50, the RV 30 amp TT-30 (120 volts only), the welder 6-50 (two hots and a ground) and the generator twist-lock L14-30. On the wiring bench the green ground screw on the strap is always visible from the front, and the room around the bench goes on behind the wall and is closed at both ends, so turning all the way round never shows black. Each is a tile on the Lessons page. Jobs in the city (and practice jobs) pick their second outlet from all of these, so every job can be a different kind of outlet, with the same boxes as before.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","HELPER GIFTS AND ROSTER: a member who is the first to contribute 3 times in a row earns a helper gift that the admin grants. The admin chooses how it is given: an NGMY store money card (a QR code the chosen store scans), or Cash App or Zelle with no store needed. For Cash App or Zelle the admin types the phone number the member should call or text and an optional note; the member then sees a green (Cash App) or purple (Zelle) gift pop-up with the amount, that number and Call and Text buttons every time they open the app, until they tap Received. The printed Civic Registry roster carries a light NGMY watermark behind it (between the earlier strong one and the too faint one).","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","LIGHT AND DARK LOOK: in My Profile the appearance can be Light, Dark or Auto. Light mode is plain and calm: thick white cards with a wide soft shadow all round on a very light grey page, frames in the colourful reference style (a thick bright colour rim, rich colour inside with soft waves and glowing dots, still) on the four home frames and the Tool Hub (Business Card Creator green, Menu Studio gold, Essentials blue, each with its name and a round colour icon above, the light sample card in the middle and a round shiny play button, no dark fade), home frames in two colours only (Neural Link and Core Protocol blue, Signal Grid and Vault Channel purple), Hub, Creator Toolkit, Core Protocol, NGMY Slides and the NGMY Advisors filter frames with colour: a soft sky blue or soft lavender wash (white at the top) with a thin edge and a soft shadow of the same colour, a whole row at a time (one row blue, the next row purple, never mixed tile by tile), the four NGMY Hub tiles all in one colour, NGMY Services in a solid purple frame, the NGMY badge at the top of home in light gold, pure white pages, NGMY Slides opening at once when you come back to it (no loading every time), Civic Registry words in a dark readable grey in light mode, a Create Invoice form grouped into framed sections with rounded fields and icons, and the Quote Calc Iron Triangle made of brushed steel (when a third of FAST, CHEAP, GOOD is turned on, one of the other two turns off at random, not in a fixed order), pages that are loading stay light in light mode, each icon in a full colour app-style tile with a white icon, clear dark text, a white bottom menu with grey icons where the chosen tab is white in a dark circle, and nothing glowing or moving. This includes NGMY Slides, Creator Toolkit, Business Card and Menu Studio, My Profile, the Loan Service and Growth Income buttons on home, and the Core Protocol page, which is white in light mode. Dark mode keeps the futuristic look with glowing rings and moving scan lines. NGMY Advisors keep their own look in both modes.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.hKe=new C.yf(0,"classic")
D.dYt=new C.o8("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aLp,4294570461,4282000405,4284234270)
D.dYF=new C.o8("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aLq,4294635750,4281999378,4285213214)
D.dYu=new C.o8("elegant_navy","Umoja Mzuri",y.s,D.a8F,4294967035,4279378237,4290283019)
D.dYH=new C.o8("elegant_gold","Umoja wa Dhahabu",y.Q,D.aLy,4294966515,4281016592,4289102906)
D.dYJ=new C.o8("kente_sunset","Kente ya Jua",y.H,D.aLr,4294964964,4282000405,4279983648)
D.dYr=new C.o8("indigo_mudcloth","Nguo ya Indigo",y.n,D.aLs,4294439140,4279903102,4279903102)
D.dYw=new C.o8("adinkra_royal","Muhuri wa Adinkra",y.z,D.aLt,4294965484,4285218591,4287322667)
D.dYB=new C.o8("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aLu,4294244340,4279196764,4279196764)
D.dYD=new C.o8("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aLv,4294505710,4279970378,4291058750)
D.hKf=new C.yf(1,"ringsNdoa")
D.dYv=new C.o8("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.tD,4294966259,4279378237,4291404327)
D.hKh=new C.yf(2,"coupleCards")
D.dYG=new C.o8("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.tD,4294966259,4279378237,4291404327)
D.hKi=new C.yf(3,"kuhoweshaForm")
D.dYC=new C.o8("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Ee,4294966519,4279378237,4291404327)
D.hKj=new C.yf(4,"mahariPande")
D.dYs=new C.o8("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.tD,4294966259,4279904068,4291404327)
D.hKk=new C.yf(5,"familiaMti")
D.dYI=new C.o8("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aLw,4294966776,4280241466,4291404327)
D.hKl=new C.yf(6,"ndoaSafi")
D.dYz=new C.o8("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Ee,4294966519,4279378237,4291404327)
D.hKm=new C.yf(7,"peteWide")
D.dYy=new C.o8("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.tD,4294966259,4282001936,4291404327)
D.hKn=new C.yf(8,"muhuriCrest")
D.dYx=new C.o8("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.tD,4294966259,4279378237,4291404327)
D.hKo=new C.yf(9,"fomuWazi")
D.dYA=new C.o8("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Ee,4294966519,4279904068,4291404327)
D.hKg=new C.yf(10,"upendoOrnate")
D.dYE=new C.o8("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aLx,4294965493,4286200650,4291404327)
D.T1=w([D.dYt,D.dYF,D.dYu,D.dYH,D.dYJ,D.dYr,D.dYw,D.dYB,D.dYD,D.dYv,D.dYG,D.dYC,D.dYs,D.dYI,D.dYz,D.dYy,D.dYx,D.dYA,D.dYE],B.at("O<o8>"))
D.Eh=new C.at1(0,"landscape169")
D.oY=new C.at1(1,"portrait916")
D.dzi=w([D.Eh,D.oY],B.at("O<at1>"))
D.aE4=w([A.i9,A.bL,A.cN,A.it,A.c],x.O)
D.vl=w([A.c2,A.iv],x.O)
D.eF_=new B.y(1000,"M")
D.eKe=new B.y(900,"CM")
D.eIF=new B.y(500,"D")
D.eGW=new B.y(400,"CD")
D.eF0=new B.y(100,"C")
D.eKf=new B.y(90,"XC")
D.eIG=new B.y(50,"L")
D.eGX=new B.y(40,"XL")
D.eF6=new B.y(10,"X")
D.eKr=new B.y(9,"IX")
D.eIX=new B.y(5,"V")
D.eIr=new B.y(4,"IV")
D.eFD=new B.y(1,"I")
D.dA5=w([D.eF_,D.eKe,D.eIF,D.eGW,D.eF0,D.eKf,D.eIG,D.eGX,D.eF6,D.eKr,D.eIX,D.eIr,D.eFD],x.ek)
D.f7T=new B.ce(["open",A.j9,"Open & write","Keep writing this book"])
D.f8m=new B.ce(["print",A.v5,"Print as a book","Fold and staple it"])
D.dAg=w([D.f7T,D.f8m],B.at("O<+(n,a_,n,n)>"))
D.dB0=w([D.a8Q,D.nd,D.JC,D.Ua,D.dr,D.U9],x.i)
D.eY5=new B.y(-1,"Small")
D.eEL=new B.y(0,"Normal")
D.eFA=new B.y(1,"Big")
D.eGg=new B.y(2,"Huge")
D.dBB=w([D.eY5,D.eEL,D.eFA,D.eGg],x.ek)
D.dC1=w([49,65,89,38,83,89],x.t)
D.dC8=w([A.um,A.i9,A.c2],x.O)
D.dCC=w([D.dr,D.nd,D.vs,D.a8Q,D.JC,D.Ua],x.i)
D.aJn=new B.d_([0,D.NN,8,D.alh,12,D.ali],B.at("d_<H,a4Z>"))
D.eoe={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d24=w([A.bL,X.a_g],x.O)
D.doI=w([A.b_,A.bo],x.O)
D.diS=w([A.c4,A.aG,A.bt],x.O)
D.dAh=w([A.cC,A.bw],x.O)
D.daM=w([A.b9,A.fc],x.O)
D.dlN=w([A.b7,A.fy],x.O)
D.bm3=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dl3=w([D.bm3,A.po],x.O)
D.deY=w([A.hu,A.yo],x.O)
D.day=w([A.bv,A.ci],x.O)
D.dFh=new B.bs(D.eoe,[D.d24,Q.aub,D.doI,D.diS,D.dAh,D.daM,D.dlN,D.dl3,D.deY,D.day],B.at("bs<n,ai<u>>"))
D.enm={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a7D=new B.bs(D.enm,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.at("bs<n,n>"))
D.a7J=new B.bs(A.i3,[],B.at("bs<H,+icon3d,picture(n?,n?)>"))
D.dLj=new F.NT(30,null)
D.dQy=new F.mS("Chapter 1","","","")
D.dz4=w([D.dQy],x.B)
D.dQC=new F.rP("My Book","","",D.dz4,E.aKQ)
D.dQA=new F.v8("starry",null,null,null,null,"","","")
D.dQD=new F.rP("Dream Big","","",E.a6B,D.dQA)
D.dQB=new F.v8("story",null,null,null,null,"","","")
D.dQE=new F.rP("Little Lion","","",E.a6B,D.dQB)
D.dQz=new F.v8("vintage",null,null,null,null,"","","")
D.dQF=new F.rP("Our Story","","",E.a6B,D.dQz)
D.dTH=new C.Fj("","NGMY","","")
D.e06=new C.Ac("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.ei2=new C.b3G(null,null,null,null)
D.ejL=new C.at6(null)
D.ejW=new C.atA(0,"smaller")
D.ejX=new C.atA(1,"bigger")
D.aM3=new C.atA(2,"fit")
D.erP=new B.r(3,6)
D.es8=new B.r(4,8)
D.ewj=new B.D(E.am9,V.agf,null)
D.ewn=new B.D(A.a0I,A.m4,null)
D.bUX=new B.ae(A.kd,16,A.bV,null,null,null)
D.ewr=new B.D(A.iQ,D.bUX,null)
D.bfz=new B.fl(2.2,null,null,null,null,A.c,null,null,null,null)
D.ewE=new B.D(A.OG,D.bfz,null)
D.c4K=new B.ae(A.cB,16,A.aE,null,null,null)
D.ewI=new B.D(A.eC,D.c4K,null)
D.fRz=new B.B("Play",null,A.o5,null,null,null,null,null,null,null,null,null)
D.doZ=w([W.asD,A.vI,D.fRz],x.p)
D.fd9=new B.c7(A.aL,A.e,A.N,A.l,null,A.p,null,0,D.doZ,null)
D.ewL=new B.D(A.nI,D.fd9,null)
D.bfI=new B.fl(2.4,null,null,null,null,null,null,null,null,null)
D.fjA=new B.a4(20,20,D.bfI,null)
D.ewS=new B.D(A.iQ,D.fjA,null)
D.h03=new B.B("Seconds per slide",null,A.h5,null,null,null,null,null,null,null,null,null)
D.ex1=new B.D(A.bj,D.h03,null)
D.eym=new C.a9Z(2,"print")
D.eyp=new B.j3(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eA1=new B.hj("/Annot")
D.eA3=new B.hj("/URI")
D.fLv=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eCy=new B.jI("share",48,D.fLv,null,B.at("jI<n>"))
D.c4E=new B.ae(A.e9,14,A.ey,null,null,null)
D.eCH=new B.cK(null,-2,-2,null,null,null,D.c4E,null)
D.d4p=w([A.ZT,A.L],x.O)
D.cbo=new B.a8(A.a5,A.a9,A.x,D.d4p,null,null)
D.b7Y=new B.o(null,null,null,null,null,D.cbo,A.n)
D.bzv=new B.bM(D.b7Y,A.bi,null,null)
D.eCU=new B.cK(0,0,null,0,8,null,D.bzv,null)
D.du5=w([A.hI,A.mX,A.c8],x.O)
D.eDz=new B.bV(A.A,0.5,A.x,null,0,D.du5,null,null)
D.eG8=new B.y(0.22,A.bo)
D.eKL=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eMT=new B.y(0.5,A.hF)
D.eWr=new B.y(0.78,A.aV)
D.f7I=new B.ce([A.bd,0.22,0.7,2.6])
D.f7P=new B.ce([A.b9,0.36,1.2,1.3])
D.f7V=new B.ce([A.dP,0.28,0.2,0.4])
D.f80=new B.ce([A.cG,0.05,0.3,0.35])
D.f87=new B.ce([A.bv,0.28,0.9,0])
D.f8g=new B.ce([A.aC,-0.25,-0.15,0.45])
D.f9h=new B.ce([A.c4,0.42,1,4.1])
D.fcS=new B.aaY(9)
D.bW3=new B.ae(A.I6,28,A.bt,null,null,null)
D.h0B=new B.B("NGMY News",null,A.dk,null,null,null,null,null,null,null,null,null)
D.bJX=new B.by(1,A.ba,D.h0B,null)
D.dxB=w([D.bW3,A.as,D.bJX],x.p)
D.fd3=new B.c7(A.aL,A.e,A.h,A.l,null,A.p,null,0,D.dxB,null)
D.bWe=new B.ae(A.oF,16,A.c,null,null,null)
D.h2c=new B.B("Book",null,A.o3,null,null,null,null,null,null,null,null,null)
D.dC7=w([D.bWe,A.e0,D.h2c],x.p)
D.fdc=new B.c7(A.aL,A.e,A.N,A.l,null,A.p,null,0,D.dC7,null)
D.c27=new B.ae(A.jL,10,A.c,null,null,null)
D.fPx=new B.B("Pro",null,A.o1,null,null,null,null,null,null,null,null,null)
D.dp3=w([D.c27,A.rc,D.fPx],x.p)
D.fdg=new B.c7(A.aL,A.e,A.N,A.l,null,A.p,null,0,D.dp3,null)
D.h01=new B.B("Make a newspaper",null,A.L4,null,null,null,null,null,null,null,null,null)
D.ccC=w([E.a4o,A.af,D.h01],x.p)
D.fdh=new B.c7(A.aL,A.e,A.N,A.l,null,A.p,null,0,D.ccC,null)
D.c0v=new B.ae(A.kc,18,A.bL,null,null,null)
D.fRN=new B.B("Ending celebration",null,A.ht,null,null,null,null,null,null,null,null,null)
D.dwC=w([D.c0v,A.bm,D.fRN],x.p)
D.fdk=new B.c7(A.aL,A.e,A.h,A.l,null,A.p,null,0,D.dwC,null)
D.c1T=new B.ae(A.j9,18,A.k1,null,null,null)
D.fuJ=new B.F(!0,A.k1,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h2v=new B.B("Write",null,D.fuJ,null,null,null,null,null,null,null,null,null)
D.dcX=w([D.c1T,A.af,D.h2v],x.p)
D.fds=new B.c7(A.aL,A.e,A.N,A.l,null,A.p,null,0,D.dcX,null)
D.fPv=new B.B("Download picture",null,A.o2,null,null,null,null,null,null,null,null,null)
D.bML=new B.dF(A.dW,A.A,A.f,D.fPv,null)
D.bMX=new B.di(1,A.cm,D.bML,null)
D.dpu=w([N.asu,A.af,D.bMX],x.p)
D.fdt=new B.c7(A.aL,A.b8,A.h,A.l,null,A.p,null,0,D.dpu,null)
D.bY1=new B.ae(A.I6,22,A.bt,null,null,null)
D.fZz=new B.B("NGMY NEWS",null,L.abA,null,null,null,null,null,null,null,null,null)
D.d3O=w([D.bY1,A.af,D.fZz],x.p)
D.fdD=new B.c7(A.aL,A.e,A.N,A.l,null,A.p,null,0,D.d3O,null)
D.fdP=new B.pF(!1,!1,null,V.Ym,null,A.c3,null,null,null)
D.aaI=new B.iR([D.cv,D.dr,D.vs,D.JB,D.vt,D.aLT],B.at("iR<hJ>"))
D.eq2={title:0,quote:1,closing:2,bio:3}
D.ffj=new B.db(D.eq2,4,x.M)
D.enI={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.ffm=new B.db(D.enI,5,x.M)
D.eph={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.aaK=new B.db(D.eph,8,x.M)
D.eor={Design:0,Transitions:1,Insert:2}
D.ffu=new B.db(D.eor,3,x.M)
D.hKx=new B.iR([D.a8R],B.at("iR<wz>"))
D.eoA={float3d:0,drift:1,pulse:2}
D.ffy=new B.db(D.eoA,3,x.M)
D.aTJ=new B.iR([D.Jy,D.Jz,D.JA],B.at("iR<mV>"))
D.enG={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aTM=new B.db(D.enG,14,x.M)
D.hKy=new B.db(A.i3,0,B.at("db<wz>"))
D.eox={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Vb=new B.db(D.eox,4,x.M)
D.eny={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aTP=new B.db(D.eny,30,x.M)
D.eoG={circle:0,triangle:1,hexagon:2,diamond:3}
D.fg0=new B.db(D.eoG,4,x.M)
D.fiu=new B.av(390,844)
D.fjk=new B.a4(20,20,A.Ms,null)
D.aUE=new B.a4(null,2.5,null,null)
D.c1X=new B.ae(A.iU,19,A.c,null,null,null)
D.fjF=new B.a4(38,38,D.c1X,null)
D.c02=new B.ae(A.zG,22,A.c,null,null,null)
D.fjI=new B.a4(40,40,D.c02,null)
D.fkh=new B.hK(2,10,10,1.15,null)
D.aUN=new B.hK(2,16,14,0.62,null)
D.bHM=new B.Q(32,30,32,40)
D.bhe=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bW0=new B.ae(A.qO,56,D.bhe,null,null,null)
D.akl=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fwU=new B.F(!0,D.akl,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fWq=new B.B("Your books will live here.",null,D.fwU,null,A.K,null,null,null,null,null,null,null)
D.dfZ=w([D.bW0,A.T,D.fWq],x.p)
D.byr=new B.fn(A.ah,A.e,A.h,A.l,null,A.p,null,0,D.dfZ,null)
D.ex_=new B.D(D.bHM,D.byr,null)
D.fkD=new B.m5(D.ex_,null)
D.fWm=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fkV=new B.b1(D.fWm,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fUp=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fkW=new B.b1(D.fUp,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fZD=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fl4=new B.b1(D.fZD,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h_c=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.flk=new B.b1(D.h_c,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fT1=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.flx=new B.b1(D.fT1,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h6x=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.flQ=new B.b1(D.h6x,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3x=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fm0=new B.b1(D.h3x,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h_l=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fmL=new B.b1(D.h_l,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fNF=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.fn1=new B.b1(D.fNF,null,null,null,null,null,null,null,A.j0,null,null,null,null,A.ou,!1,null,null,null,A.t,null)
D.fPF=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.fnj=new B.b1(D.fPF,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fW1=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.fnl=new B.b1(D.fW1,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fVI=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.fnm=new B.b1(D.fVI,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h1t=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.fnn=new B.b1(D.h1t,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h4o=new B.B("Only the admin can delete Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fns=new B.b1(D.h4o,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fJG=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fnx=new B.b1(D.fJG,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fQQ=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fnU=new B.b1(D.fQQ,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h5c=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fnW=new B.b1(D.h5c,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h4J=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fo_=new B.b1(D.h4J,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fIA=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fo1=new B.b1(D.fIA,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0w=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.foa=new B.b1(D.h0w,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h4h=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.foq=new B.b1(D.h4h,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h47=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fot=new B.b1(D.h47,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fIr=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.foz=new B.b1(D.fIr,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fMD=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fp0=new B.b1(D.fMD,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h3l=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fpc=new B.b1(D.h3l,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fMp=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fps=new B.b1(D.fMp,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bpC=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d2m=w([A.it,A.po,D.bpC,D.agL,A.it],x.O)
D.fpQ=new B.h1(A.A,0,6.283185307179586,A.x,D.d2m,null,null)
D.dc4=w([A.bL,A.c2,A.i9,D.C9,A.bL],x.O)
D.aVl=new B.h1(A.A,0,6.283185307179586,A.x,D.dc4,null,null)
D.drm=w([A.c4,A.bd,A.b9,A.bc,A.bt,A.c4],x.O)
D.fpV=new B.h1(A.A,0,6.283185307179586,A.x,D.drm,null,null)
D.d4F=w([A.qt,A.pp,A.om,A.it,A.qt],x.O)
D.fpW=new B.h1(A.A,0,6.283185307179586,A.x,D.d4F,null,null)
D.dzT=w([A.bv,A.b9,A.bd,A.c4,A.bv],x.O)
D.fpY=new B.h1(A.A,0,6.283185307179586,A.x,D.dzT,null,null)
D.bkX=new B.u(1,0,1,0,A.q)
D.bpX=new B.u(1,0,1,1,A.q)
D.bmM=new B.u(1,0,0,1,A.q)
D.biE=new B.u(1,1,0,1,A.q)
D.dvy=w([A.MJ,A.aiY,D.bkX,D.bpX,D.bmM,D.biE,A.MJ],x.O)
D.fpZ=new B.h1(A.A,0,6.283185307179586,A.x,D.dvy,null,null)
D.fqd=new C.axP(2,"immersiveSticky")
D.fqe=new C.axP(3,"edgeToEdge")
D.fqf=new C.axP(4,"manual")
D.fsO=new B.F(!0,A.bB,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsP=new B.F(!0,A.og,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aVX=new B.F(!0,A.eZ,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ftm=new B.F(!0,E.nB,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fw6=new B.F(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwg=new B.F(!0,A.bV,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwC=new B.F(!0,A.ey,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy7=new B.F(!0,A.bP,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyi=new B.F(!0,A.k0,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyw=new B.t8(!0,A.JX,null,null,null,null,A.dE,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyZ=new B.F(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzJ=new B.F(!0,A.jH,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA6=new B.F(!0,A.aE,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eys=new B.j3(1,1,0.7568627450980392,0.027450980392156862)
D.fAa=new B.t8(!0,D.eys,null,null,null,null,A.dE,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.aj6=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aWK=new B.F(!0,D.aj6,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAi=new B.F(!0,D.akl,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAj=new B.F(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWM=new B.F(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAX=new B.t8(!0,A.pQ,null,null,null,null,A.dE,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBe=new B.F(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBN=new B.F(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBP=new B.F(!0,D.aj6,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.L1=new B.F(!0,A.aE,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCm=new B.F(!0,A.c2,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCx=new B.F(!0,A.bP,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCB=new B.F(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCS=new B.F(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a68,null,null,null)
D.fCV=new B.F(!0,A.bY,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCX=new B.F(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDc=new B.F(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDo=new B.F(!0,A.dy,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE0=new B.F(!0,A.aR,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEb=new B.F(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEs=new B.F(!0,A.aa,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXr=new B.F(!0,A.bV,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bvS=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fGn=new B.F(!0,D.bvS,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXx=new B.F(!0,E.nB,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGT=new B.F(!0,A.bP,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fGW=new B.F(!0,M.lI,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fze=new B.F(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIc=new B.B("NEW",null,D.fze,null,null,null,null,null,null,null,null,null)
D.fIu=new B.B("Hati ya Kuhowesha",null,A.fT,null,null,null,null,null,null,null,null,null)
D.fIY=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fJm=new B.B("Scrollable PDF on this slide",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fK7=new B.B("Big quote mark",null,A.jB,null,null,null,null,null,null,null,null,null)
D.fK9=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fKl=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fKO=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fKQ=new B.B("How many slides?",null,A.h5,null,null,null,null,null,null,null,null,null)
D.fLo=new B.B("Transfer",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fuM=new B.F(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fLN=new B.B("Luxury FX",null,D.fuM,null,null,null,null,null,null,null,null,null)
D.fM8=new B.B("Font",null,A.tY,null,null,null,null,null,null,null,null,null)
D.fMj=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fMq=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fFS=new B.F(!0,A.bP,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMA=new B.B("Example  GA847",null,D.fFS,null,null,null,null,null,null,null,null,null)
D.fN_=new B.B("Design shapes",null,A.jB,null,null,null,null,null,null,null,null,null)
D.fNa=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fNf=new B.B("Non-stop (loop)",null,A.h5,null,null,null,null,null,null,null,null,null)
D.fNt=new B.B("Hati ya Kuhoweya",null,A.fT,null,null,null,null,null,null,null,null,null)
D.fNN=new B.B("Photo studio",null,A.fD,null,null,null,null,null,null,null,null,null)
D.fOh=new B.B("Add your picture",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fyx=new B.F(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOi=new B.B("Enter document code",null,D.fyx,null,A.K,null,null,null,null,null,null,null)
D.fOj=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fOo=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fvU=new B.F(!0,E.nB,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fOJ=new B.B("Delete this book?",null,D.fvU,null,A.K,null,null,null,null,null,null,null)
D.fAM=new B.F(!0,E.nB,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPH=new B.B("Your library",null,D.fAM,null,null,null,null,null,null,null,null,null)
D.fPM=new B.B("Delete",null,A.aWD,null,null,null,null,null,null,null,null,null)
D.fPP=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Ay.F2,null,null,null,null,null,null,null,null,null)
D.fQ_=new B.B("Element flies in",null,A.aWQ,null,null,null,null,null,null,null,null,null)
D.Wl=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fQp=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fQN=new B.B("Cancel",null,E.aX0,null,null,null,null,null,null,null,null,null)
D.fQP=new B.B("The lines and circles that come with the design",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fEB=new B.F(!0,A.hJ,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fRj=new B.B("DOCUMENT CODE",null,D.fEB,null,null,null,null,null,null,null,null,null)
D.fS7=new B.B("Quotes",null,G.acc,null,null,null,null,null,null,null,null,null)
D.fxU=new B.F(!0,M.lI,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSh=new B.B("Add a picture",null,D.fxU,null,null,null,null,null,null,null,null,null)
D.fSp=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.VY,null,A.K,null,null,null,null,null,null,null)
D.fSt=new B.B("Look & feel",null,A.h5,null,null,null,null,null,null,null,null,null)
D.fSy=new B.B("Rings",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fSE=new B.B("W",null,A.tY,null,null,null,null,null,null,null,null,null)
D.fSO=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fT7=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.W7,null,A.K,null,null,null,null,null,null,null)
D.fT9=new B.B("Write your book",null,A.cF,null,null,null,null,null,null,null,null,null)
D.fTU=new B.B("Add page",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fUb=new B.B("Malipo ya Awamu ya Mahari",null,A.fT,null,null,null,null,null,null,null,null,null)
D.fym=new B.F(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fUq=new B.B("Create with AI",null,D.fym,null,A.K,null,null,null,null,null,null,null)
D.fUW=new B.B("Apply look",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fz3=new B.F(!0,A.ex,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVK=new B.B("Type your presentation below",null,D.fz3,null,A.K,null,null,null,null,null,null,null)
D.fVN=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,L.aXB,null,A.K,null,null,null,null,null,null,null)
D.fVP=new B.B("Keep it",null,A.cd,null,null,null,null,null,null,null,null,null)
D.ftF=new B.F(!0,A.ct,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVW=new B.B("Done",null,D.ftF,null,null,null,null,null,null,null,null,null)
D.fWg=new B.B("Delete",null,A.o4,null,null,null,null,null,null,null,null,null)
D.fWs=new B.B("Hati ya Kiapo cha Uongozi",null,A.fT,null,null,null,null,null,null,null,null,null)
D.fxc=new B.F(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXn=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fxc,null,A.K,null,null,null,null,null,null,null)
D.fXK=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fXR=new B.B("Layout",null,A.Wb,null,null,null,null,null,null,null,null,null)
D.fYw=new B.B("Print",null,A.cF,null,null,null,null,null,null,null,null,null)
D.fYF=new B.B("X",null,A.tY,null,null,null,null,null,null,null,null,null)
D.fZh=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Ab.xy,null,null,null,null,null,null,null,null,null)
D.fZR=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.h_4=new B.B("Hati ya Kuhowa",null,A.fT,null,null,null,null,null,null,null,null,null)
D.h_6=new B.B("Choose a class template",null,A.fT,null,null,null,null,null,null,null,null,null)
D.h_8=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.h_f=new B.B("Download the newspaper picture",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h_s=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.h_z=new B.B("Done",null,A.aXp,null,null,null,null,null,null,null,null,null)
D.h_K=new B.B("Ending celebration",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h_L=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.h0_=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Ab.tX,null,null,null,null,null,null,null,null,null)
D.h1_=new B.B("Export presentation",null,A.dj,null,null,null,null,null,null,null,null,null)
D.h10=new B.B("What would you like to do?",null,D.aWK,null,null,null,null,null,null,null,null,null)
D.h15=new B.B("Delete",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h1C=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.h1G=new B.B("Hati (Documents)",null,A.fT,null,null,null,null,null,null,null,null,null)
D.h1T=new B.B("Done",null,A.lz,null,null,null,null,null,null,null,null,null)
D.fFI=new B.F(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h1X=new B.B("Delete presentation?",null,D.fFI,null,A.K,null,null,null,null,null,null,null)
D.h2g=new B.B("After the last slide it starts again from the first",null,A.hs,null,null,null,null,null,null,null,null,null)
D.h2s=new B.B("\ud83c\udf33",null,A.F1,null,A.K,null,null,null,null,null,null,null)
D.h2K=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hs,null,null,null,null,null,null,null,null,null)
D.h2R=new B.B("Transfer document",null,A.mF,null,null,null,null,null,null,null,null,null)
D.h31=new B.B("Add to the slides",null,A.h5,null,null,null,null,null,null,null,null,null)
D.h3p=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fvp=new B.F(!0,A.c,null,null,null,null,24,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3D=new B.B("Make a book",null,D.fvp,null,null,null,null,null,null,null,null,null)
D.h3H=new B.B("Books",null,A.cF,null,null,null,null,null,null,null,null,null)
D.fxM=new B.F(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3J=new B.B("Keep this page open until it finishes.",null,D.fxM,null,null,null,null,null,null,null,null,null)
D.h3L=new B.B("Making your video",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h3Q=new B.B("LANGUAGE",null,Z.tZ,null,null,null,null,null,null,null,null,null)
D.h3W=new B.B("Use this ending",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h43=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.h45=new B.B("Upload a different logo",null,A.cd,null,null,null,null,null,null,null,null,null)
D.h4n=new B.B("Delete from the database?",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h4p=new B.B("H",null,A.tY,null,null,null,null,null,null,null,null,null)
D.h4P=new B.B("NGMY Quotes",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h5i=new B.B("Cover",null,D.aXx,null,null,null,null,null,null,null,null,null)
D.h5m=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h5n=new B.B("Each page becomes its own slide you can present",null,A.hs,null,null,null,null,null,null,null,null,null)
D.h5J=new B.B("Y",null,A.tY,null,null,null,null,null,null,null,null,null)
D.h5V=new B.B("Crop the picture",null,A.lz,null,null,null,null,null,null,null,null,null)
D.h61=new B.B("Edit text",null,A.KZ,null,null,null,null,null,null,null,null,null)
D.h8m=B.dS("a9L")
D.hvb=new B.bj("slides-create-kiapo",x.W)
D.Fe=new C.aza(0,"none")
D.b0F=new C.aza(1,"zipCrypto")
D.b0G=new C.aza(2,"aes")
D.hxY=new F.Qt("","",null)
D.hz5=new C.beW(null)
D.hAd=new C.a0_(null)
D.hD5=new C.aeJ(null)
D.hD7=new C.aGr(null)
D.hFT=new C.a1d(null)
D.hG8=new C.a1K(null)
D.hGL=new C.bwY(null)})();(function staticFields(){$.hvA=null
$.hvB=null
$.hvC=null
$.hvD=null
$.hcF=B.wX("_lastQuoRemDigits")
$.hcG=B.wX("_lastQuoRemUsed")
$.azy=B.wX("_lastRemUsed")
$.hcH=B.wX("_lastRem_nsh")
$.qz=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.Ch=B.T(x.N,x.I)
$.cg4=!1
$.hrf=null
$.Ci=B.T(x.N,B.at("a9<n,n>"))
$.hAE=B.T(B.at("le"),x.N)
$.hAR=B.T(B.at("le"),x.E)
$.hyJ=!1
$.bCD="q"
$.Rx=0
$.Dl=B.T(x.N,B.at("ai<Ad>"))
$.hz6=!1
$.heo=!1
$.hFW=null
$.iat=B.T(x.N,B.at("aB<n?>"))
$.Lj=""
$.je=0
$.hsr=function(){var w=x.N
return B.T(w,w)}()
$.hsq=B.T(x.N,x.R)
$.heK=!1
$.aho=B.T(x.N,x.E)
$.hfD=0
$.heO=B.T(x.N,x.R)
$.bnd=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iA5","DK",()=>C.bco(0))
w($,"iA3","a41",()=>C.bco(1))
w($,"iA4","hK3",()=>C.bco(2))
w($,"iA2","hjQ",()=>$.a41().vL(0))
w($,"iA0","hK1",()=>C.bco(1e4))
w($,"iA1","hK2",()=>B.F_(8))
w($,"ivM","hHX",()=>B.F_(0))
w($,"ivU","hI0",()=>B.F_(0))
w($,"ivT","hI_",()=>B.c31(0))
w($,"iE6","hMe",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a7D.gdP(D.a7D),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iEy","bHe",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.nd(new C.fV_(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.nd(new C.fV0(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.nd(new C.fV1(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.nd(new C.fVc(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.nd(new C.fVh(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.nd(new C.fVi(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.nd(new C.fVj(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.nd(new C.fVk(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.nd(new C.fVl(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.nd(new C.fVm(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.nd(new C.fVn(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.nd(new C.fV2(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.nd(new C.fV3(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.nd(new C.fV4(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.nd(new C.fV5(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.nd(new C.fV6(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.nd(new C.fV7(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.nd(new C.fV8(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.nd(new C.fV9(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.nd(new C.fVa(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.nd(new C.fVb(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.nd(new C.fVd(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.nd(new C.fVe(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.nd(new C.fVf(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.nd(new C.fVg(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.at("O<Fs>"))})
w($,"iE9","hMg",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["puPK/ZksB9N5OxZMw0ha1Si8iCI="]=a.current})($__dart_deferred_initializers__);