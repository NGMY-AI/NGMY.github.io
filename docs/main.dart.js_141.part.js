((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tI(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fVw(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Ju(d){var w
if(d===0)return $.CP()
if(d===1)return $.a2g()
if(d===2)return $.hpH()
if(Math.abs(d)<4294967296)return C.b9e(A.o.N(d))
w=C.hKm(d)
return w},
b9e(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tI(4,w)
return new C.nR(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tI(1,w)
return new C.nR(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tI(2,w)
return new C.nR(v===0?!1:s,w,v)}v=A.o.an(A.o.gajx(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tI(v,w)
return new C.nR(v===0?!1:s,w,v)},
hKm(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CP()
w=$.hpG()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l6(A.aH.gaM(w))
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
q=new C.nR(!1,r,4)
if(s<0)p=q.mq(0,-s)
else p=s>0?q.dV(0,s):q
return p},
fVx(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hcv(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dV(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fF(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dV(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hcq(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.E(f,16)===0)return C.fVx(d,e,s,g)
w=e+s+1
C.hcv(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hKp(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dV(1,r)-1,o=A.o.fF(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dV(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fF(u,r)}w&2&&B.aj(g)
g[n]=o},
cEd(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hKn(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9f(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
hcw(d,e,f,g,h,i){var w,v,u,t,s,r
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
hKo(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e4((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nR:function nR(d,e,f){this.a=d
this.b=e
this.c=f},
cEe:function cEe(){},
cEf:function cEf(){},
cEg:function cEg(d,e){this.a=d
this.b=e},
cEh:function cEh(d){this.a=d},
aQK:function aQK(d,e){this.a=d
this.b=e},
h2n(d,e,f){var w=new C.Rt(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Rt:function Rt(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3s:function a3s(d,e){this.a=d
this.b=e},
bH_:function bH_(d){this.a=d
this.c=this.b=0},
hsU(){return new C.bFm()},
bFm:function bFm(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cwo:function cwo(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hK4(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcVA(d)))
v=f*2+2
u=C.ha7(C.ha9(),64)
t=new C.cgd(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cge(e,1000,v)
s=new Uint8Array(v)
return A.aH.dq(s,0,t.cJ1(w,0,s,0))},
cwm:function cwm(d,e){this.c=d
this.d=e},
awA:function awA(d,e){this.a=d
this.b=e},
cwp:function cwp(d,e,f,g){var _=this
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
b7W:function b7W(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cwn:function cwn(){this.a=$},
hbV(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hsD(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bDX:function bDX(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h06(d,e){e&=31
return(d&$.q5[e])<<e>>>0},
np(d,e){e&=31
return(d>>>e|C.h06(d,32-e))>>>0},
ha8(d){var w,v=new C.asi()
if(B.iH(d))v.aJr(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
ha9(){var w=C.ha8(0),v=new Uint8Array(4),u=x.S
u=new C.cgf(w,v,A.DS,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.ly(0)
return u},
ha7(d,e){var w=new C.cgb(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cga:function cga(){},
cge:function cge(d,e,f){this.a=d
this.b=e
this.c=f},
cg8:function cg8(){},
ash:function ash(d){this.a=d},
cgd:function cgd(d){this.a=$
this.b=d
this.c=$},
cg9:function cg9(){},
cg7:function cg7(){},
asi:function asi(){this.b=this.a=$},
cgc:function cgc(){},
cgf:function cgf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cgb:function cgb(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cg6:function cg6(){},
cg5:function cg5(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bNg:function bNg(){},
bNh:function bNh(d){this.a=d},
hNj(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9u:function b9u(){},
cqd:function cqd(){},
bO9:function bO9(d,e){this.a=d
this.b=!1
this.c=e},
bOa:function bOa(){},
hWd(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
ave(d){var w=0,v=B.j(x.H),u
var $async$ave=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eWS?2:4
break
case 2:w=5
return B.b(A.k6.fY("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$ave)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k6.fY("SystemChrome.setEnabledSystemUIOverlays",C.hWd(null),u),$async$ave)
case 6:case 3:return B.h(null,v)}})
return B.i($async$ave,v)},
avh:function avh(d,e){this.a=d
this.b=e},
a83:function a83(d){this.a=d},
fRv(d,e){return new C.aVc(e,d,null)},
aVc:function aVc(d,e,f){this.e=d
this.c=e
this.a=f},
aA8:function aA8(d,e,f,g,h){var _=this
_.ah=d
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
hYQ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.frn(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bv(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
frn:function frn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
an7(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$an7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agx("ngmy_menu_lib_v1_zzslides_index",A.bH),$async$an7)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d9(s,x.f)
t=B.cF(t,new C.bYO(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b1(r,new C.bYP())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an7,v)},
an9(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$an9=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an7(),$async$an9)
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
l=new B.S(Date.now(),0,!1).a6().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.no("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$an9)
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
return B.b(B.no("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$an9)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an9,v)},
bYQ(d){return C.hyl(d)},
hyl(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bYQ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agx("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hK),$async$bYQ)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.VC(B.a2(q,x.N,x.z))
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
return B.i($async$bYQ,v)},
an8(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$an8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an7(),$async$an8)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nq(r,new C.bYR(d))
w=4
return B.b(B.no("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$an8)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aON("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$an8)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an8,v)},
bYO:function bYO(){},
bYP:function bYP(){},
bYR:function bYR(d){this.a=d},
i7M(d,e,f){return B.bQ(A.K,null,new C.fHm(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fHm:function fHm(d,e,f){this.a=d
this.b=e
this.c=f},
a0v:function a0v(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIx:function aIx(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f5b:function f5b(d,e){this.a=d
this.b=e},
f5f:function f5f(d){this.a=d},
f5g:function f5g(d){this.a=d},
f5h:function f5h(d,e,f){this.a=d
this.b=e
this.c=f},
f5c:function f5c(d){this.a=d},
f5d:function f5d(d){this.a=d},
f5e:function f5e(d,e){this.a=d
this.b=e},
f56:function f56(d){this.a=d},
f54:function f54(d){this.a=d},
f55:function f55(d){this.a=d},
f57:function f57(d){this.a=d},
f58:function f58(d){this.a=d},
f5l:function f5l(d,e){this.a=d
this.b=e},
f5k:function f5k(d,e){this.a=d
this.b=e},
f5a:function f5a(d,e,f){this.a=d
this.b=e
this.c=f},
f59:function f59(d,e,f){this.a=d
this.b=e
this.c=f},
f5i:function f5i(d,e){this.a=d
this.b=e},
f5j:function f5j(d,e){this.a=d
this.b=e},
f5o:function f5o(d){this.a=d},
f5p:function f5p(d,e){this.a=d
this.b=e},
f5n:function f5n(d,e){this.a=d
this.b=e},
f5m:function f5m(){},
heV(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aH(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cF(v,new C.fcr(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a1<J.E>")
v=B.C(new B.a1(v,new C.fcs(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1t(d){return C.i_5(d)},
i_5(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1t=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fu_(n)
t=4
j=m
i=C
w=7
return B.b(B.a22("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1t)
case 7:j.$1(i.heV(f))
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
return B.b(B.aA(),$async$a1t)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.heV(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a1<J.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fcA(d),$async$a1t)
case 13:p=j.C(new i.a1(h,new g.ftY(f),o),o.k("J.E"))
A.d.b1(p,new C.ftZ())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1t,v)},
ah8(d,e){return C.i7r(d,e)},
i7r(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ah8=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fGR(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ah_("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah8)
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
return B.b(B.aA(),$async$ah8)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah8)
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
return B.i($async$ah8,v)},
fcA(d){return C.hOJ(d)},
hOJ(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fcA=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fcA)
case 7:r=f
q=r.t7("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kD(q,B.U(q).c)
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
return B.i($async$fcA,v)},
afX(d,e){return C.hYI(d,e)},
hYI(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afX=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$afX)
case 6:s=g
r=B.aX(x.N)
q=s.t7("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h0(r,q)
J.ch(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("co.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$afX)
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
return B.b(C.a1t(d),$async$afX)
case 8:n=g
J.nq(n,new C.fr3(e))
w=9
return B.b(C.ah8(d,n),$async$afX)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afX,v)},
i7R(d,e){return B.a5(d,!1).c5(B.e8(new C.fHI(e),!0,null,x.H))},
hKr(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cFA())},
oh:function oh(d,e,f){this.a=d
this.b=e
this.c=f},
fcr:function fcr(){},
fcs:function fcs(){},
fu_:function fu_(d){this.a=d},
ftY:function ftY(d){this.a=d},
ftZ:function ftZ(){},
fGR:function fGR(){},
fr3:function fr3(d){this.a=d},
fHI:function fHI(d){this.a=d},
Yf:function Yf(d,e){this.c=d
this.a=e},
ax7:function ax7(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cFA:function cFA(){},
cFC:function cFC(d,e){this.a=d
this.b=e},
cFF:function cFF(d){this.a=d},
cFG:function cFG(d){this.a=d},
cFE:function cFE(){},
cFH:function cFH(d,e){this.a=d
this.b=e},
cFD:function cFD(d){this.a=d},
cFI:function cFI(){},
cFB:function cFB(d,e){this.a=d
this.b=e},
cFJ:function cFJ(){},
cFw:function cFw(d){this.a=d},
cFu:function cFu(d){this.a=d},
cFv:function cFv(d){this.a=d},
cFx:function cFx(d,e){this.a=d
this.b=e},
cFt:function cFt(d){this.a=d},
cFs:function cFs(d){this.a=d},
cFq:function cFq(d,e){this.a=d
this.b=e},
cFr:function cFr(d){this.a=d},
cFz:function cFz(){},
cFy:function cFy(d){this.a=d},
cFp:function cFp(d,e){this.a=d
this.b=e},
cFo:function cFo(d,e){this.a=d
this.b=e},
cFn:function cFn(d,e){this.a=d
this.b=e},
cFK:function cFK(d){this.a=d},
Yd:function Yd(d,e,f){this.c=d
this.d=e
this.a=f},
aEp:function aEp(d,e,f){this.a=d
this.b=e
this.c=f},
ax3:function ax3(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cER:function cER(d){this.a=d},
cEQ:function cEQ(d){this.a=d},
cET:function cET(d,e,f){this.a=d
this.b=e
this.c=f},
cF0:function cF0(){},
cF1:function cF1(d){this.a=d},
cEU:function cEU(d,e,f){this.a=d
this.b=e
this.c=f},
cES:function cES(d,e){this.a=d
this.b=e},
cEW:function cEW(d,e){this.a=d
this.b=e},
cEX:function cEX(d,e){this.a=d
this.b=e},
cEY:function cEY(d,e){this.a=d
this.b=e},
cEV:function cEV(d){this.a=d},
cF_:function cF_(d){this.a=d},
cEZ:function cEZ(d,e){this.a=d
this.b=e},
cF6:function cF6(d){this.a=d},
cF2:function cF2(d,e){this.a=d
this.b=e},
cF3:function cF3(d,e){this.a=d
this.b=e},
cF4:function cF4(d,e){this.a=d
this.b=e},
cF5:function cF5(d,e){this.a=d
this.b=e},
ax5:function ax5(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i1q(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bz(new C.fyw(),x.H).eM(new C.fyx())}}else if(s)C.hgn()}catch(t){}},
hgn(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eM(new C.fgQ())}catch(u){}},
i1t(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fyw:function fyw(){},
fyx:function fyx(){},
fgQ:function fgQ(){},
hkY(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gK(A.a.ed(v,w,"").split(":"))},
hkV(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l1)return null
return A.a.b3(w,14)},
fZR(d){var w
if(d.b!==D.l1)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b3(w,21)},
i1T(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hkZ(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i1O(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kV(0,f)
t=x.N
u=B.cF(u,new C.fzv(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kV(0,f),u=new B.Jt(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Ra(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Ra(A.a.b3(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i1M(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.b1(q,new C.fzu())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aPK(w,u,s,0)}return w},
i1Q(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a3A:$.hrH(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gaf(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hkW(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fdt(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hkY(q)===e)return q}return null},
i1R(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b3(v,u)
return A.d.gK(D.Gu).a},
i1S(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adQ(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adQ(0,0,0)
v=C.fdt(b6,b0)
u=C.fdt(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i1Q(b2,C.i1O(C.hkW(b2),v.r))
if(s.a!==0){u.r=C.i1M(C.hkW(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hkY(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.ea(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fdt(b6,n)
i=C.fdt(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gK(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.fZR(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hkV(a8)===a0||C.fZR(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QD(a1,new C.fzB(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j0
$.j0=a9+1
A.d.J(a1,new C.eK(""+1000*a6+"_"+a9,D.l1,a2,a3,a4,a5,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,d.at,D.bf,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cm,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adQ(k,t,e)},
i1N(d){var w=C.i1R(d)
if(d.w==="hati_kuhowa")return C.hki("",w)
return C.hkh("",w)},
fzv:function fzv(){},
fzu:function fzu(){},
fzB:function fzB(d){this.a=d},
hg6(){var w=new B.S(Date.now(),0,!1),v=new C.ffT()
return B.t(v.$1(B.bR(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
fZZ(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fAt(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l1&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hlb(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fAt(d)
w=B.bi(u)
if(w==null)return!C.fAt(d)
return new B.S(Date.now(),0,!1).a6().cZ(w.a6().bQ(18e9))},
i2y(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hCm(d){return A.a.i(d).toLowerCase()},
api(d){return C.hCo(d)},
hCo(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$api=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$api)
case 7:r=f
p=r.t7("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.L(o,C.i65(),B.U(o).k("L<1,n>")).c_(0,new C.c8n())
o=B.db(o,o.$ti.k("J.E"))
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
return B.i($async$api,v)},
aph(d,e){return C.hCn(d,e)},
hCn(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$aph=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.api(d),$async$aph)
case 3:r=g
if(!J.ch(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$aph)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qe(r)),$async$aph)
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
return B.i($async$aph,v)},
apj(d,e){return C.hCp(d,e)},
hCp(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apj=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.api(d),$async$apj)
case 3:r=g
if(!J.hF(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apj)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qe(r)),$async$apj)
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
return B.i($async$apj,v)},
UV(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UV=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fT_&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$UV)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aH(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jy(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.VC(B.a2(f.a(n.b),e,a0)))}$.a6T=o}}t=2
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
return B.b(B.c3(),$async$UV)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tW("civic_hati_kiapo_uongozi",null,A.ef),$async$UV)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jy(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.VC(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a6T.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcz()
else f=!0
f=!f}else f=!0
if(f)$.a6T.n(0,i.a,i.b)}w=20
return B.b(C.apk(),$async$UV)
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
case 16:case 9:$.fT_=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UV,v)},
apk(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apk=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$apk)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6T,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ag())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$apk)
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
return B.i($async$apk,v)},
aZD(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZD=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.UV(!1),$async$aZD)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6T.h(0,t)
r=s==null?null:s.hC()
if(r==null){u=null
w=1
break}u=C.bBu(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZD,v)},
a6U(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6U=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hC()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6T.n(0,d,o)
$.fT_=!0
w=3
return B.b(C.apk(),$async$a6U)
case 3:w=4
return B.b(B.c3(),$async$a6U)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6T,n=new B.cK(n,B.a3(n).k("cK<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ag())}w=9
return B.b(B.no("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6U)
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
return B.i($async$a6U,v)},
apl(d){var w=0,v=B.j(x.T),u,t,s
var $async$apl=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hY().a5a(A.eG),$async$apl)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fj(),$async$apl)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZC(t,d),$async$apl)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apl,v)},
aZC(d,e){return C.hCq(d,e)},
hCq(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZC=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZC)
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
p=n.ia("media")
w=8
return B.b(p.wV(q,new Uint8Array(B.ce(d)),D.byL),$async$aZC)
case 8:n=p.Cv(q)
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
return B.i($async$aZC,v)},
Kl(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
ff8(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
fX0(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ep(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cF,A.N,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
feH(d,e,f,g){return C.ff8(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fX1(d,e,f,g,h,i,j,k){var w=C.cD()
return C.ep(A.qk,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bn,A.a5,"",h,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
hg5(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gK(A.a.ed(v,w,"").split(":"))},
bBu(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gK(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.hg5(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l1&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hC()}h=C.fZv(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Bw(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gK(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.hg5(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.l1&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bo(a1.z,new C.fyu(a2))}else A.d.bo(a1.z,new C.fyv())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fAt(a0))a0.ax=a6.f.a6().ac()
return a0},
fZv(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fBg(D.a4B),l=C.cD(),k=x.u,j=B.a([C.ep(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bn,A.a5,"",1,C.cD(),m,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lu,1,0,0)],k),i=B.a([],k)
i.push(C.Kl("NGMY",A.L,236069181,52,A.bn,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Kl("TAREHE:",A.bg,o,16,A.bn,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fX0("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hg6()))
i.push(C.feH(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Kl("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bn,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Kl("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.ff8(0,0.002,D.fs,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fX1("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fX1("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fX1("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.ff8(268435456,0.175,D.bf,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Kl("VIDEO YA KIAPO",A.bg,o,10,A.bn,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ep(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bn,A.a5,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lu,0.77,0.115,0.492))
i.push(C.Kl("Rais Anayeapa:",A.bg,p,15,A.bn,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Kl("Jina:",A.bg,p,13,A.bn,A.N,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fX0("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.feH(0.195,0.7130000000000001,0.62,n))
i.push(C.Kl("Sahihi:",A.bg,p,13,A.bn,A.N,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ep(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bn,A.a5,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,0.38,0.21500000000000002,0.73))
i.push(C.feH(0.21500000000000002,0.795,0.38,n))
i.push(C.Kl("Tarehe:",A.bg,p,13,A.bn,A.N,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fX0("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hg6()))
i.push(C.feH(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.ff8(0,0.032,D.bf,o,1,"state_box",0.72,0.14,0.875),C.Kl("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bn,A.N,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rp(4294967035,t,0,0,j,l,D.q9,"","",u,D.dd)
return C.Bw(t,t,t,t,D.oa,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ag7(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag7=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.T(D.eRH)
w=1
break}w=3
return B.b(C.UV(!0),$async$ag7)
case 3:w=4
return B.b(C.aZD(p),$async$ag7)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hlb(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bQ(D.bcK,null,new C.ftl(p),f,!0,!0,!1,A.lv,!1,!1,x.N),$async$ag7)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.ftm(),f,null,!0,!0,x.y),$async$ag7)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fZv(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.T(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fZv(p))
case 1:return B.h(u,v)}})
return B.i($async$ag7,v)},
ffT:function ffT(){},
c8n:function c8n(){},
fyu:function fyu(d){this.a=d},
fyv:function fyv(){},
ftl:function ftl(d){this.a=d},
ftj:function ftj(d){this.a=d},
ftk:function ftk(d){this.a=d},
ftm:function ftm(){},
fth:function fth(d){this.a=d},
fti:function fti(d){this.a=d},
apQ:function apQ(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDb:function aDb(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e8v:function e8v(d){this.a=d},
e8t:function e8t(d){this.a=d},
e8u:function e8u(d){this.a=d},
e8w:function e8w(d){this.a=d},
e8x:function e8x(d){this.a=d},
ws(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",j,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
hfK(d,e,f){var w=4291404327
return B.a([C.q4(0,f,D.eL,w,2,"ring_l",f,d-f*0.42,e),C.q4(0,f,D.eL,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fe7(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q4(4294967288,f,D.eL,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q4(h,s,D.eL,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q4(h,f*0.46,D.eL,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q4(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
fe6(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ep(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cF,A.N,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,l,0,0,"",D.cm,D.cQ,g,e,f)},
byU(d,e,f,g){return C.q4(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hfJ(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q4(0,0.036,D.bf,h,1.4,"banner_box_"+d,w,v,e),C.ws(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hkX(){var w=new B.S(Date.now(),0,!1),v=new C.fzA()
return B.t(v.$1(B.bR(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
hfL(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.ws(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fe6("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.byU(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.ws("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bn,A.a5,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,s,t,g-0.004),C.byU(t,g+0.044,s,w)],x.u)},
agz(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dbw,D.ch9,D.d4i,D.d66],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
fWj(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fBg(d.d),v=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cD(),w,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,1,0,0)],x.u)
A.d.v(v,C.hR8(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hR8(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.ws("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hfK(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hfK(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fe7(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fe7(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.ws("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q4(0,0.062,D.eL,b1,1.6,"crest_o",0.11,0.445,0.012),C.q4(0,0.046,D.eL,b1,1,"crest_i",0.084,0.458,0.02),C.ws("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q4(0,0.002,D.fs,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q4(b9,0.016,D.l2,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q4(0,0.002,D.fs,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.ws("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fe6("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hkX()),C.byU(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.ws(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.q4(c0,0.0026,D.bf,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.q4(c3.e,0.138,D.bf,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.ep(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bn,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.bf,b3,2,c5,0,0,"",D.cm,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.q4(0,0.036,D.bf,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.ep(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bn,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bf,b3,2,c7,0,0,"",D.cm,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hfJ(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.ws(c9,A.bg,b9,d0,A.N,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fe6("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
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
d=B.a([new C.eK(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bn,A.aD,c0,A.bg,a9,D.bf,b2,b3,2,0,!1,s,0,D.cm,0,"","","","","",!1,0),j,new C.eK(""+1000*f+"_"+e,D.f0,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bn,A.aD,b6,A.bg,a9,D.fs,0,b5,0.8,0,!1,g,0,D.cm,0,"","","","","",!1,0)],c1)
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
A.d.v(d,B.a([new C.eK(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bn,A.aD,b7,A.dM,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cm,0,"","","","","",!1,0),new C.eK(""+1000*i+"_"+h,D.f0,a1,a2,0.046,0.025875,"",24,A.a5,A.bn,A.aD,b6,A.bg,a9,D.bf,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cm,0,"","","","","",!1,0),new C.eK(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bn,A.aD,b7,A.L,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cm,0,"","","","","",!1,0),new C.eK(""+1000*e+"_"+a3,D.f0,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bn,A.aD,b6,A.bg,a9,D.bf,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cm,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hfJ("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a4q||w===D.a4s||w===D.a4p||w===D.a4r){w=t-0.008
A.d.v(c2,C.fe7(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fe7(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q4(0,a4,D.bf,c0,1.3,"wit_table_border",0.82,0.09,t),C.q4(c0,a4,D.bf,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q4(0,0.0022,D.fs,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.ws("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.ws("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hfL("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hfL("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q4(0,0.11,D.bf,c0,1.2,"mw_box",0.82,0.09,t),C.ws("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.ws("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fe6("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.byU(0.215,p,0.3116,b5),C.ws("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.ep(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bn,A.a5,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,0.3161999999999999,0.5738,s-0.044),C.byU(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q4(0,0.032,D.bf,c0,1,"state_box",0.7,0.15,a8),C.ws("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.N,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i1P(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h_8(d.d),p=new C.fzw(s),o=new C.fzx(s),n=d.z,m=n===D.a4q||n===D.a4s||n===D.a4p||n===D.a4r,l=n===D.aEO||n===D.a4t||n===D.aEP,k=B.bZ(0,B.fL(q,A.A,t,t,A.cj,A.bR,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a4t?26:16
i.push(new C.fzz().$1$size(w))}if(n===D.aEQ)i.push(D.fwl)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hC,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aNP,p.$1$w(0.9),D.aNP,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b8a,t,n,w,t,t,A.n),t,t,t,t,A.aio,t,t,t))
i.push(A.am)
i.push(new C.fzy(r).$1("NIMETOWE"))
i.push(A.h0)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.LQ,new B.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.bC(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b0,A.r,B.a([k,new B.D(A.agY,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hkh(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agz(e,t)
if(r==null)r=A.d.gK(D.Gu)
w=C.cD()
v=C.rp(r.e,t,0,0,C.fWj(r,0.165,y.O,D.d6G,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.q9,"","",s,D.dd)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bw(t,t,t,t,D.oa,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hki(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agz(e,t)
if(r==null)r=A.d.gK(D.Gu)
w=C.cD()
v=C.rp(r.e,t,0,0,C.fWj(r,0.165,y.f,D.d2s,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.q9,"","",s,D.dd)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bw(t,t,t,t,D.oa,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCQ(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bQ(A.K,null,new C.fL9(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCQ,v)},
ag8(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag8=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a1<1>")
p=B.C(new B.a1(i,new C.ftp(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.L4,null,new C.ftq(p),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$ag8)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCQ(d,"Hati ya Kuhowa",D.Gu),$async$ag8)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L_(d,"Tafuta jimbo\u2026","",A.k1,"Chagua jimbo"),$async$ag8)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hkh(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag8,v)},
ag9(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag9=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a1<1>")
p=B.C(new B.a1(i,new C.ftt(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.L4,null,new C.ftu(p),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$ag9)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCQ(d,"Hati ya Kuhoweya",D.Gu),$async$ag9)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L_(d,"Tafuta jimbo\u2026","",A.k1,"Chagua jimbo"),$async$ag9)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hki(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag9,v)},
aga(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$aga=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a1<1>")
m=B.C(new B.a1(i,new C.ftx(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.L4,null,new C.fty(m),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$aga)
case 5:t=k
if(t==="continue"){f.$1(A.d.gK(m).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCQ(d,"Malipo ya Awamu ya Mahari",D.Qf),$async$aga)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L_(d,"Tafuta jimbo\u2026","",A.k1,"Chagua jimbo"),$async$aga)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agz(s,D.Qf)
if(q==null)q=A.d.gK(D.Qf)
n=C.cD()
p=C.rp(q.e,null,0,0,C.fWj(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cYv,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.q9,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Bw(null,null,null,null,D.oa,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$aga,v)},
xq:function xq(d,e){this.a=d
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
fzA:function fzA(){},
fzw:function fzw(d){this.a=d},
fzy:function fzy(d){this.a=d},
fzz:function fzz(){},
fzx:function fzx(d){this.a=d},
fL9:function fL9(d,e){this.a=d
this.b=e},
acV:function acV(d,e,f){this.c=d
this.d=e
this.a=f},
dXS:function dXS(d,e,f){this.a=d
this.b=e
this.c=f},
dXR:function dXR(d,e){this.a=d
this.b=e},
dXQ:function dXQ(d,e){this.a=d
this.b=e},
acj:function acj(d,e,f){this.c=d
this.d=e
this.a=f},
ftp:function ftp(){},
ftq:function ftq(d){this.a=d},
ftn:function ftn(d){this.a=d},
fto:function fto(d){this.a=d},
ftt:function ftt(){},
ftu:function ftu(d){this.a=d},
ftr:function ftr(d){this.a=d},
fts:function fts(d){this.a=d},
ftx:function ftx(){},
fty:function fty(d){this.a=d},
ftv:function ftv(d){this.a=d},
ftw:function ftw(d){this.a=d},
Ko(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.ep(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,k,l,m)},
Cw(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
hgq(d,e,f){return C.Cw(0,0.002,D.fs,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bz3(d,e,f,g,h){return B.a([C.Cw(4294967288,0.032,D.bf,4291404327,1.15,"pill_"+d,g,f,e),C.Ko(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fX5(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cw(0,0.002,D.fs,g,1,"orn_l_"+t,u,d,v),C.Cw(h,0.016,D.l2,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cw(0,0.002,D.fs,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0R(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Ko(d,A.bg,j,i,A.N,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.ep(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cF,A.N,"",0.02,s,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,t,u,g-0.002),C.hgq(u,g+0.018,t)],x.u)},
hgr(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cw(h,0.028,D.bf,h,0,"chv_"+d,g,e,f),C.Cw(w,0.024,D.l2,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cw(w,0.024,D.l2,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Ko(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bz2(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Ko("Sahihi:",A.bg,h,10,A.N,0.02,"is_"+d,0.12,e,f),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bn,A.a5,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,v,w,f-0.006),C.hgq(w,f+0.016,v)],x.u)},
h_9(d){var w,v
for(w=0;w<19;++w){v=D.Qs[w]
if(v.a===d)return v}return null},
i45(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agz(A.a.b3(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agz(A.a.b3(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b3(k,18)
w=C.agz(u,D.Qf)
v=w==null?l:w.d
if(v==null){w=C.agz(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h_9(A.a.b3(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hhf.a9(0)
$.hhs.a9(0)
t=C.fBg(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h0d(d){var w=0,v=B.j(x.T),u
var $async$h0d=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bQ(A.K,null,new C.fMC(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0d,v)},
xt:function xt(d,e){this.a=d
this.b=e},
nE:function nE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
biy:function biy(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fMC:function fMC(){},
acY:function acY(d){this.a=d},
edK:function edK(d,e){this.a=d
this.b=e},
edJ:function edJ(d){this.a=d},
edI:function edI(d,e){this.a=d
this.b=e},
aeE:function aeE(d,e,f){this.c=d
this.d=e
this.a=f},
h_8(d){return $.hhs.cg(0,d,new C.fBi(d))},
fBg(d){return $.hhf.cg(0,d,new C.fBh(d))},
fz(d){return B.fQz(d>>>16&255,d>>>8&255,d&255,255)},
hUb(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hix(4294570461,4293910718,4284234270,u)
case 1:return C.hix(4294635750,4293975240,t,4292912216)
case 2:w=C.fcI(s,4294505966,r)
C.byO(w,14,16,p)
C.kt(w,8,9,464,836,u,1.2)
C.Cs(w,2,2,1,1,u,10)
C.Cs(w,478,2,-1,1,u,10)
C.Cs(w,2,852,1,-1,u,10)
C.Cs(w,478,852,-1,-1,u,10)
return w
case 3:return C.fcI(4294966515,4294373082,4289102906)
case 4:return C.hOY(C.fcI(4294376440,4293653998,4290287194))
case 5:w=C.fcI(4294965238,4294437098,4288444980)
C.byO(w,14,16,4283043359)
C.kt(w,6,7,468,840,u,1)
C.kt(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yj(v,n,4294175448)
C.rK(v,n)
C.kt(v,24,24,432,806,4286209070,1)
C.a0F(v,12,12,468,12,o,3,20)
C.a0F(v,12,842,468,842,o,3,20)
C.a0F(v,12,12,12,842,o,3,20)
C.a0F(v,468,12,468,842,o,3,20)
return v
case 7:return C.hN_(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yj(v,m,4293911504)
C.rK(v,m)
C.kt(v,28,28,424,798,l,1)
C.flE(v,28,28,l,k)
C.flE(v,452,28,l,k)
C.flE(v,28,826,l,k)
C.flE(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yj(v,j,4294111986)
C.rK(v,j)
C.kt(v,18,18,444,818,4292401368,0.7)
B.iK(v,!0,C.fz(p),0,13,0,853)
return v
case 10:return C.hQV(i,4294173372)
case 11:return C.hS_(4294439140,4293449662)
case 12:return C.hMS(h,4294239432)
case 13:return C.hRr(4294244340,4293193448)
case 14:return C.hVL(4294505710,4293780694)
case 15:return C.fbG(4294966259,4294439138,o,p,q)
case 16:return C.fbG(4294966776,4294178544,o,g,g)
case 17:return C.fbG(4294965493,4294504170,o,4286200650,q)
case 18:return C.fbG(4294966519,4294373862,o,p,p)
case 19:return C.hQ2()
case 20:return C.hQ3()
case 21:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yj(v,h,4293976768)
C.rK(v,h)
C.byO(v,14,16,p)
B.iK(v,!0,C.fz(u),4,475,4,9)
B.iK(v,!0,C.fz(u),4,475,844,849)
B.iK(v,!0,C.fz(u),4,9,4,849)
B.iK(v,!0,C.fz(u),470,475,4,849)
C.a0F(v,10,12,470,12,u,2,16)
C.a0F(v,10,842,470,842,u,2,16)
C.a0F(v,10,12,10,842,u,2,18)
C.a0F(v,470,12,470,842,u,2,18)
C.Cs(v,2,2,1,1,t,10)
C.Cs(v,478,2,-1,1,t,10)
C.Cs(v,2,852,1,-1,t,10)
C.Cs(v,478,852,-1,-1,t,10)
C.kt(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yj(v,s,4294438872)
C.rK(v,s)
C.kt(v,14,16,452,822,o,2.2)
C.kt(v,22,24,436,806,o,1)
C.fYp(v,!1,!1,o,p,p,36,14,16)
C.kJ(v,240,20,7,o,!0)
C.kJ(v,240,834,7,o,!0)
C.kJ(v,18,427,7,o,!0)
C.kJ(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yj(v,i,4293910712)
C.rK(v,i)
B.iK(v,!0,C.fz(u),0,479,0,20)
B.iK(v,!0,C.fz(u),0,479,834,853)
B.iK(v,!0,C.fz(u),0,20,0,853)
B.iK(v,!0,C.fz(u),460,479,0,853)
B.iK(v,!0,C.fz(f),5,474,5,9)
B.iK(v,!0,C.fz(f),5,474,844,848)
B.iK(v,!0,C.fz(f),5,9,5,848)
B.iK(v,!0,C.fz(f),470,474,5,848)
C.kt(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hn(q,q,A.cb,0,A.e3,854,q,0,3,q,A.cb,480,!1)
C.yj(v,e,4294174404)
C.rK(v,e)
C.byO(v,14,16,p)
B.iK(v,!0,C.fz(u),3,476,3,8)
B.iK(v,!0,C.fz(u),3,476,845,850)
B.iK(v,!0,C.fz(u),3,8,3,850)
B.iK(v,!0,C.fz(u),471,476,3,850)
C.kt(v,9,10,462,834,t,1)
C.kt(v,14,16,452,822,u,1.8)
C.kJ(v,240,8,4,u,!0)
C.kJ(v,240,846,4,u,!0)
C.kJ(v,8,427,4,u,!0)
C.kJ(v,472,427,4,u,!0)
C.kJ(v,8,8,3,t,!0)
C.kJ(v,472,8,3,t,!0)
C.kJ(v,8,846,3,t,!0)
C.kJ(v,472,846,3,t,!0)
return v}},
yj(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kL(d,!1,A.dc,new B.RO(s),r,A.cX,1,0,w-1,k,k);++k}},
rK(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eM()
n.dB(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aC(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aC(v==null?0:v)
v=d.a
s=v==null?o:v.dR(u,t,o)
if(s==null)s=new B.iE()
v=A.o.D(A.k.N(s.gb5(s))-3,0,255)
r=A.o.D(A.k.N(s.gbc())-3,0,255)
q=A.o.D(A.k.N(s.gb9(s))-2,0,255)
p=d.a
if(p!=null)p.jJ(u,t,v,r,q,255)}},
kt(d,e,f,g,h,i,j){var w,v=null,u=C.fz(i),t=e+g
B.kL(d,!0,A.dc,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kL(d,!0,A.dc,u,v,A.cX,j,e,t,w,w)
B.kL(d,!0,A.dc,u,v,A.cX,j,e,e,f,w)
B.kL(d,!0,A.dc,u,v,A.cX,j,t,t,f,w)},
Cs(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kL(d,!0,A.dc,C.fz(i),u,A.cX,2,e,e+g*j,f,f)
B.kL(d,!0,A.dc,C.fz(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kL(d,!0,A.dc,C.fz(i),u,A.cX,1,w,e+g*t,v,v)
B.kL(d,!0,A.dc,C.fz(i),u,A.cX,1,w,w,v,f+h*t)},
hix(d,e,f,g){var w=null,v=B.hn(w,w,A.cb,0,A.e3,854,w,0,3,w,A.cb,480,!1)
C.yj(v,d,e)
C.rK(v,d)
B.iK(v,!0,C.fz(f),0,479,0,28)
B.iK(v,!0,C.fz(f),0,479,826,853)
B.iK(v,!0,C.fz(f),0,28,0,853)
B.iK(v,!0,C.fz(f),452,479,0,853)
C.kt(v,5,5,470,844,g,1.1)
C.kt(v,28,28,424,798,g,1.6)
C.Cs(v,2,2,1,1,g,11)
C.Cs(v,478,2,-1,1,g,11)
C.Cs(v,2,852,1,-1,g,11)
C.Cs(v,478,852,-1,-1,g,11)
return v},
fcI(d,e,f){var w=null,v=B.hn(w,w,A.cb,0,A.e3,854,w,0,3,w,A.cb,480,!1)
C.yj(v,d,e)
C.rK(v,d)
C.kt(v,14,16,452,822,f,1.6)
C.kt(v,20,22,440,810,f,0.8)
return v},
byO(d,e,f,g){var w,v=C.fz(g)
B.iK(d,!0,v,0,479,0,f-1)
w=854-f
B.iK(d,!0,v,0,479,w,853);--w
B.iK(d,!0,v,0,e-1,f,w)
B.iK(d,!0,v,480-e,479,f,w)},
hOY(d){var w,v,u=4291404327
C.byO(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kJ(d,w,8,3,u,!0)
C.kJ(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kJ(d,7,v,3,u,!0)
C.kJ(d,473,v,3,u,!0)}return d},
foG(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jf(e,f),new B.jf(e+g*n,f),new B.jf(e,f+h*n)],t)
B.a1q(d,C.fz(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jf(s,u),new B.jf(e+g*v,u),new B.jf(s,f+h*v)],t)
B.a1q(d,C.fz(k),t)
t=A.k.V(n*0.39)
C.kJ(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kJ(d,e+g*t,f+h*3,4,k,!0)
C.kJ(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kJ(d,e+g*t,f,5,k,!0)
C.kJ(d,e,f+h*t,5,k,!0)}},
fYp(d,e,f,g,h,i,j,k,l){var w,v
C.foG(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.foG(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.foG(d,k,v,1,-1,e,f,g,h,i,j)
C.foG(d,w,v,-1,-1,e,f,g,h,i,j)},
a0F(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l1(d,!0,A.dc,new B.qW(p),null,A.cX,j,r,q)}},
fnM(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kL(d,!0,A.dc,new B.qW(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kL(d,!0,A.dc,new B.qW(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hN_(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cb,0,A.e3,854,o,0,3,o,A.cb,480,!1)
C.yj(n,d,e)
C.rK(n,d)
C.kt(n,20,20,440,814,f,1.2)
C.fnM(n,0,0,1,1,g)
C.fnM(n,480,0,-1,1,g)
C.fnM(n,0,854,1,-1,g)
C.fnM(n,480,854,-1,-1,g)
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
B.kL(n,!0,A.dc,new B.qW(p),o,A.cX,1.2,240,r,60,q)}return n},
flE(d,e,f,g,h){var w
C.fro(d,!0,C.fz(g),13,e,f)
C.fro(d,!0,C.fz(g),9,e,f)
w=B.a([new B.jf(e,f-4),new B.jf(e+4,f),new B.jf(e,f+4),new B.jf(e-4,f)],x.J)
B.a1q(d,C.fz(h),w)},
kJ(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jf(e,v),new B.jf(u,f),new B.jf(e,t),new B.jf(s,f)],x.J)
if(i){B.a1q(d,C.fz(h),r)
return}B.kL(d,!0,A.dc,C.fz(h),w,A.cX,1,e,u,v,f)
B.kL(d,!0,A.dc,C.fz(h),w,A.cX,1,u,e,f,t)
B.kL(d,!0,A.dc,C.fz(h),w,A.cX,1,e,s,t,f)
B.kL(d,!0,A.dc,C.fz(h),w,A.cX,1,s,e,f,v)},
fbF(d,e,f,g,h,i,j){var w,v=B.a([new B.jf(e,f),new B.jf(e+g*28,f),new B.jf(e,f+h*28)],x.J)
B.a1q(d,C.fz(i),v)
v=e+g*14
w=f+h*14
C.kJ(d,v,w,6,j,!0)
C.kJ(d,v,w,3,i,!0)},
fbG(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cb,0,A.e3,854,w,0,3,w,A.cb,480,!1)
C.yj(v,d,e)
C.rK(v,d)
C.kt(v,18,18,444,818,f,2)
C.kt(v,26,26,428,802,f,0.9)
if(h!=null)B.iK(v,!0,C.fz(h),28,451,28,34)
C.fbF(v,18,18,1,1,g,f)
C.fbF(v,462,18,-1,1,g,f)
C.fbF(v,18,836,1,-1,g,f)
C.fbF(v,462,836,-1,-1,g,f)
return v},
hQ2(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cb,0,A.e3,854,v,0,3,v,A.cb,480,!1)
C.yj(r,u,4294240980)
C.rK(r,u)
C.kt(r,10,12,460,830,t,3.2)
C.kt(r,18,20,444,814,s,1.2)
C.kt(r,24,26,432,802,t,1.8)
C.fYp(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kJ(r,w,16,3,t,!0)
C.kJ(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kJ(r,16,w,3,t,!0)
C.kJ(r,464,w,3,t,!0)}return r},
hQ3(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cb,0,A.e3,854,t,0,3,t,A.cb,480,!1)
C.yj(p,s,4294373080)
C.rK(p,s)
C.kt(p,16,18,448,818,r,2.4)
C.kt(p,24,26,432,802,4286209044,1)
w=new C.fdZ(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fYp(p,!1,!0,r,q,q,34,16,18)
return p},
bzu(d,e,f,g,h,i){B.iK(d,!0,C.fz(i),e,e+g,f,f+h)},
bAj(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kL(d,!1,A.dc,new B.RO(i),null,A.cX,1,e,w,l,l)}},
hQU(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kL(d,!1,A.dc,new B.qW(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
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
B.kL(d,!1,A.dc,new B.qW(r),null,A.cX,1,t,t,f,s);++q}},
hQV(d,e){var w,v,u=null,t=B.hn(u,u,A.cb,0,A.e3,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hQU(t,v,w,30,D.cRn,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzu(t,44,44,392,766,d)
C.bAj(t,44,44,392,766,d,e)
C.rK(t,d)
C.kt(t,44,44,392,766,4292128567,2.2)
C.kt(t,50,50,380,754,4279898632,0.8)
return t},
hRZ(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kJ(d,e,f,7,h,!0)
C.kJ(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kL(d,!0,A.dc,C.fz(h),o,A.cX,1.6,w,u,v,t)
B.kL(d,!0,A.dc,C.fz(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kL(d,!0,A.dc,new B.qW(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kL(d,!0,A.dc,C.fz(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kL(d,!0,A.dc,C.fz(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l1(d,!0,A.dc,C.fz(h),o,A.cX,2,e,f)}},
hS_(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cb,0,A.e3,854,s,0,3,s,A.cb,480,!1)
B.iK(r,!0,C.fz(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hRZ(r,u,v,w,4292391514)}C.bzu(r,46,46,388,762,d)
C.bAj(r,46,46,388,762,d,e)
C.rK(r,d)
C.kt(r,46,46,388,762,4291404327,1.8)
return r},
hdX(d,e,f,g){C.fro(d,!0,C.fz(g),16,e,f)
C.fro(d,!0,C.fz(g),11,e,f)
C.kJ(d,e,f,6,g,!0)
B.kL(d,!0,A.dc,C.fz(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kL(d,!0,A.dc,C.fz(g),null,A.cX,1.3,e,e,f-14,f+14)},
hMS(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cb,0,A.e3,854,v,0,3,v,A.cb,480,!1)
B.iK(s,!0,C.fz(4280948752),0,479,0,853)
B.iK(s,!0,C.fz(u),0,479,0,78)
B.iK(s,!0,C.fz(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hdX(s,w,39,t)
C.hdX(s,w,815,t)}C.bzu(s,38,92,404,670,d)
C.bAj(s,38,92,404,670,d,e)
C.rK(s,d)
C.kt(s,38,92,404,670,t,1.8)
C.kt(s,45,99,390,656,4287322667,0.8)
return s},
hRq(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jf(e,f),new B.jf(q-5,w),new B.jf(q,f-(18-Math.abs(r)*3)),new B.jf(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1q(d,new B.qW(o),p)}B.l1(d,!0,A.dc,C.fz(4292128567),null,A.cX,3,e,f)},
hRr(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cb,0,A.e3,854,s,0,3,s,A.cb,480,!1)
C.yj(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kL(q,!0,A.dc,new B.qW(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kL(q,!0,A.dc,new B.qW(u),s,A.cX,1.1,v,v,0,853)}B.iK(q,!0,C.fz(r),0,479,0,70)
B.iK(q,!0,C.fz(r),0,479,798,853)
for(t=0;t<5;++t)C.hRq(q,70+t*85,48,4292128567)
C.bzu(q,48,78,384,712,d)
C.bAj(q,48,78,384,712,d,e)
C.rK(q,d)
C.kt(q,48,78,384,712,4291404327,1.6)
return q},
hVL(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cb,0,A.e3,854,t,0,3,t,A.cb,480,!1)
B.iK(r,!0,C.fz(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kJ(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l1(r,!0,A.dc,new B.qW(u),t,A.cX,1,v,w)}C.bzu(r,40,40,400,774,d)
C.bAj(r,40,40,400,774,d,e)
C.rK(r,d)
C.kt(r,40,40,400,774,4291058750,2)
C.kt(r,48,48,384,758,s,0.8)
return r},
kS:function kS(d,e){this.a=d
this.b=e},
fBi:function fBi(d){this.a=d},
fBh:function fBh(d){this.a=d},
fdZ:function fdZ(d){this.a=d},
fBW(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hRT(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fWZ(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oC(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aH(0,Ai.agv(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
af1(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$af1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vg(null,""),$async$af1)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n3(n)
if(e==null)s=A.hp
else{r=C.hRT(e)
s=B.a([new B.a_F(A.cS.gcw().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qM(t,d,s,E.F1),$async$af1)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.KP(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$af1,v)},
bBY(d){return C.i3M(d)},
i3M(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bBY=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.af1(r,null),$async$bBY)
case 7:q=f
p=C.fWZ(q)
if(p==null){u=d
w=1
break}o=d.aBR(p)
if(o.r.length===0||A.d.aI(o.r," ").length<A.d.aI(d.r," ").length*0.5){u=d
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
return B.i($async$bBY,v)},
hhR(d){var w,v=F.fZr(d)
v=B.aK(v,"book","newspaper")
if(F.a1J(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fFR(d,e,f,g){return C.i5D(d,e,f,g)},
i5D(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fFR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fBW(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hlk()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.af1('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hhR(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fFR)
case 3:r=m.fWZ(i)
if(r==null)throw B.V(y.S)
q=new C.zl(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aBR(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1J(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1J(A.d.aI(t," "))==="sw"?C.bBY(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFR,v)},
bBs(d,e,f,g,h){return C.i1o(d,e,f,g,h)},
i1o(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBs=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fM(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hlk()
k=A.R.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.af1('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hhR(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBs)
case 3:p=j.fWZ(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cz(o)){n=d.aBR(B.a2(o,x.N,x.z))
m=A.R.ao(n.ag(),null)!==A.R.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1J(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bBY(n),$async$bBs)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7x(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBs,v)},
a7x:function a7x(d,e,f){this.a=d
this.b=e
this.c=f},
i8p(d,e){return B.a5(d,!1).c5(B.e8(new C.fMN(e),!0,null,x.H))},
fMN:function fMN(d){this.a=d},
Vq:function Vq(d,e){this.c=d
this.a=e},
aDu:function aDu(d,e,f,g,h,i,j,k){var _=this
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
eh1:function eh1(d){this.a=d},
eh0:function eh0(){},
eh2:function eh2(d){this.a=d},
eh_:function eh_(d,e){this.a=d
this.b=e},
eh3:function eh3(){},
egE:function egE(d,e){this.a=d
this.b=e},
egA:function egA(d,e){this.a=d
this.b=e},
egL:function egL(d){this.a=d},
egM:function egM(d,e){this.a=d
this.b=e},
egN:function egN(d){this.a=d},
egG:function egG(d,e){this.a=d
this.b=e},
egH:function egH(d,e){this.a=d
this.b=e},
egI:function egI(d,e){this.a=d
this.b=e},
egJ:function egJ(d){this.a=d},
egK:function egK(d){this.a=d},
egF:function egF(d,e){this.a=d
this.b=e},
egC:function egC(d){this.a=d},
egD:function egD(d){this.a=d},
egT:function egT(d){this.a=d},
egU:function egU(d){this.a=d},
egS:function egS(d){this.a=d},
egV:function egV(d,e){this.a=d
this.b=e},
egR:function egR(d,e){this.a=d
this.b=e},
egW:function egW(d){this.a=d},
egQ:function egQ(d){this.a=d},
egX:function egX(d){this.a=d},
egP:function egP(d){this.a=d},
egY:function egY(d,e){this.a=d
this.b=e},
egO:function egO(d,e){this.a=d
this.b=e},
egZ:function egZ(d){this.a=d},
egB:function egB(d,e){this.a=d
this.b=e},
fAS(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fAS=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hfs){w=1
break}r=new C.fAT()
t=4
q=x.s
w=7
return B.b(B.iM(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fAS)
case 7:$.hfs=!0
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
return B.i($async$fAS,v)},
bBP(d){return A.GP[B.mx(d)-1]+", "+A.oX[B.bH(d)-1]+" "+B.bR(d)+", "+B.bA(d)},
hUQ(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dfD[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fZQ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fE(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a1(v,new C.fza(),B.U(v).k("a1<1>")))
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
continue}o=new C.fzc(j,h)
n=new C.fzb(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iV(o.$1(l)))
j.a+=l}return u},
fWI(d,e){var w=new C.fdA()
return A.d.cI(e,0,new C.fdy(w))>=A.d.cI(d,0,new C.fdz(w))},
hcC(d){var w,v,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
u.F(new B.b5(46,0))
w=d.a
u.F(new B.ap(w,0))
v=d.b
u.F(new B.ap(w,v-46))
u.F(new B.ap(w-46,v))
u.F(new B.ap(0,v))
u.F(new B.ap(0,46))
u.F(new B.bF())
return u},
zl:function zl(d,e,f,g,h,i,j,k,l,m){var _=this
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
cc3:function cc3(d){this.a=d},
cc1:function cc1(){},
cc2:function cc2(){},
td:function td(d,e){this.a=d
this.b=e},
Bj:function Bj(d,e){this.a=d
this.b=e},
le:function le(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fAT:function fAT(){},
fza:function fza(){},
fzc:function fzc(d,e){this.a=d
this.b=e},
fzb:function fzb(d,e,f){this.a=d
this.b=e
this.c=f},
fdA:function fdA(){},
fdB:function fdB(){},
fdy:function fdy(d){this.a=d},
fdz:function fdz(d){this.a=d},
b08:function b08(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cc4:function cc4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cc5:function cc5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cc6:function cc6(d){this.a=d},
bbJ:function bbJ(d){this.a=d},
bbI:function bbI(d,e){this.b=d
this.a=e},
btk:function btk(d){this.a=d},
b8d:function b8d(d,e){this.b=d
this.a=e},
bqP:function bqP(d,e){this.b=d
this.a=e},
hnf(d,e){return B.a5(d,!1).c5(B.e8(new C.fMQ(e,null),!0,null,x.E))},
fMQ:function fMQ(d,e){this.a=d
this.b=e},
Vt:function Vt(d,e,f){this.c=d
this.d=e
this.a=f},
aDy:function aDy(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eic:function eic(){},
eid:function eid(d){this.a=d},
eib:function eib(d,e){this.a=d
this.b=e},
ei_:function ei_(d){this.a=d},
ei0:function ei0(d){this.a=d},
ei6:function ei6(d){this.a=d},
ei7:function ei7(d,e){this.a=d
this.b=e},
ei4:function ei4(d){this.a=d},
ei5:function ei5(d,e,f){this.a=d
this.b=e
this.c=f},
ei1:function ei1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ei8:function ei8(d,e){this.a=d
this.b=e},
ei3:function ei3(d,e){this.a=d
this.b=e},
ei9:function ei9(d){this.a=d},
ei2:function ei2(d,e){this.a=d
this.b=e},
eia:function eia(d,e){this.a=d
this.b=e},
bbf:function bbf(d,e,f){this.b=d
this.c=e
this.a=f},
i8v(d){return B.a5(d,!1).c5(B.e8(new C.fN5(),!0,null,x.I))},
bzf(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fY6(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fN5:function fN5(){},
a_w:function a_w(d){this.a=d},
ot:function ot(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEV:function aEV(d,e,f,g,h,i,j,k,l){var _=this
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
_.aF=_.aN=_.aE=_.az=_.Y=_.b6=_.bd=_.y2=0
_.b0=null
_.b_=0.25
_.ba=null
_.bM=0.5
_.aS=1
_.c8=_.bU=_.bj=0
_.cX=_.cU=!1
_.c=_.a=null},
eRN:function eRN(d){this.a=d},
eQF:function eQF(d,e){this.a=d
this.b=e},
eR2:function eR2(d,e){this.a=d
this.b=e},
eRc:function eRc(d){this.a=d},
eQo:function eQo(d){this.a=d},
eQp:function eQp(d){this.a=d},
eQm:function eQm(d){this.a=d},
eQn:function eQn(d){this.a=d},
eQW:function eQW(d,e){this.a=d
this.b=e},
eQX:function eQX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eR8:function eR8(d,e,f){this.a=d
this.b=e
this.c=f},
eR7:function eR7(d,e){this.a=d
this.b=e},
eR9:function eR9(d,e){this.a=d
this.b=e},
eR6:function eR6(d,e){this.a=d
this.b=e},
eRb:function eRb(d,e,f){this.a=d
this.b=e
this.c=f},
eRa:function eRa(d,e){this.a=d
this.b=e},
eQe:function eQe(d){this.a=d},
eQf:function eQf(d){this.a=d},
eQg:function eQg(d){this.a=d},
eQd:function eQd(){},
eQh:function eQh(d,e){this.a=d
this.b=e},
eQc:function eQc(d,e){this.a=d
this.b=e},
eQj:function eQj(){},
eQi:function eQi(d,e){this.a=d
this.b=e},
eQb:function eQb(d,e){this.a=d
this.b=e},
eQ8:function eQ8(d,e){this.a=d
this.b=e},
eQk:function eQk(d){this.a=d},
eQa:function eQa(d,e){this.a=d
this.b=e},
eQl:function eQl(d){this.a=d},
eQ9:function eQ9(d,e){this.a=d
this.b=e},
eRC:function eRC(d,e){this.a=d
this.b=e},
eRJ:function eRJ(d){this.a=d},
eRK:function eRK(d,e){this.a=d
this.b=e},
eRL:function eRL(){},
eRD:function eRD(d,e){this.a=d
this.b=e},
eRB:function eRB(d,e){this.a=d
this.b=e},
eRE:function eRE(d,e){this.a=d
this.b=e},
eRA:function eRA(d,e){this.a=d
this.b=e},
eRF:function eRF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRz:function eRz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRG:function eRG(d){this.a=d},
eRH:function eRH(d,e){this.a=d
this.b=e},
eRI:function eRI(d){this.a=d},
eRy:function eRy(d){this.a=d},
eRl:function eRl(d){this.a=d},
eRm:function eRm(d){this.a=d},
eRk:function eRk(d,e){this.a=d
this.b=e},
eRf:function eRf(d,e){this.a=d
this.b=e},
eRn:function eRn(d){this.a=d},
eRq:function eRq(d){this.a=d},
eRj:function eRj(d){this.a=d},
eRr:function eRr(d){this.a=d},
eRs:function eRs(d){this.a=d},
eRt:function eRt(d){this.a=d},
eRu:function eRu(d){this.a=d},
eRi:function eRi(d){this.a=d},
eRv:function eRv(d){this.a=d},
eRh:function eRh(d){this.a=d},
eRw:function eRw(d,e){this.a=d
this.b=e},
eRg:function eRg(d,e){this.a=d
this.b=e},
eRx:function eRx(d){this.a=d},
eRo:function eRo(d){this.a=d},
eRp:function eRp(d){this.a=d},
eR_:function eR_(d){this.a=d},
eQZ:function eQZ(d){this.a=d},
eR0:function eR0(d,e){this.a=d
this.b=e},
eQY:function eQY(d,e){this.a=d
this.b=e},
eR1:function eR1(d){this.a=d},
eQS:function eQS(d){this.a=d},
eQR:function eQR(d){this.a=d},
eQT:function eQT(d){this.a=d},
eQQ:function eQQ(d){this.a=d},
eQU:function eQU(d,e){this.a=d
this.b=e},
eQP:function eQP(d,e){this.a=d
this.b=e},
eQO:function eQO(d,e){this.a=d
this.b=e},
eQw:function eQw(d){this.a=d},
eQx:function eQx(d){this.a=d},
eQy:function eQy(d){this.a=d},
eQz:function eQz(d){this.a=d},
eQA:function eQA(d){this.a=d},
eQB:function eQB(d){this.a=d},
eQC:function eQC(d){this.a=d},
eQD:function eQD(d){this.a=d},
eQE:function eQE(d){this.a=d},
ePS:function ePS(d){this.a=d},
ePT:function ePT(d){this.a=d},
ePU:function ePU(d){this.a=d},
ePV:function ePV(d){this.a=d},
ePW:function ePW(d){this.a=d},
ePR:function ePR(d){this.a=d},
ePX:function ePX(d){this.a=d},
ePY:function ePY(d){this.a=d},
eQq:function eQq(d){this.a=d},
eQr:function eQr(d){this.a=d},
eQs:function eQs(d){this.a=d},
eQt:function eQt(d){this.a=d},
eQu:function eQu(d){this.a=d},
eQ1:function eQ1(d){this.a=d},
eQ2:function eQ2(d){this.a=d},
eQ3:function eQ3(d){this.a=d},
eQ4:function eQ4(d){this.a=d},
eQ5:function eQ5(d){this.a=d},
eQ0:function eQ0(d){this.a=d},
eQ6:function eQ6(d){this.a=d},
eQ_:function eQ_(d){this.a=d},
eQ7:function eQ7(d){this.a=d},
ePZ:function ePZ(d){this.a=d},
eQV:function eQV(d){this.a=d},
eQN:function eQN(d){this.a=d},
eQJ:function eQJ(d){this.a=d},
eQI:function eQI(d){this.a=d},
eQK:function eQK(d,e){this.a=d
this.b=e},
eQH:function eQH(d,e){this.a=d
this.b=e},
eQL:function eQL(d,e){this.a=d
this.b=e},
eQG:function eQG(d,e){this.a=d
this.b=e},
eQM:function eQM(d){this.a=d},
eR5:function eR5(d){this.a=d},
eR4:function eR4(d,e,f){this.a=d
this.b=e
this.c=f},
eR3:function eR3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRe:function eRe(d,e){this.a=d
this.b=e},
eRd:function eRd(d,e){this.a=d
this.b=e},
eQv:function eQv(d){this.a=d},
eRM:function eRM(d){this.a=d},
beO:function beO(d,e){this.b=d
this.a=e},
i3X(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i3Y(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kV(0,d),m=B.C(n,B.a3(n).k("J.E"))
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
bzQ(){var w=$.byY,v=$.Q7
$.Q7=v+1
return w+"_"+v},
i9(d,e,f,g,h,i,j){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,C.bzQ(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cm,D.f0,g,e,f)},
nU(d,e,f,g){var w=f*9
return C.i9(D.eL,d-f/2,e-w/32,f,w/16,g,0)},
hOy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.byY
p=$.Q7
$.Q7=p+1
w.push(new C.eK(q+"_"+p,D.f0,0,r,1,0.0016,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.bf,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.byY
p=$.Q7
$.Q7=p+1
w.push(new C.eK(q+"_"+p,D.f0,o,0,0.004,1,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.bf,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nU(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nU(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i9(D.bf,0.08,0.08,0.5,0.003,v,0),C.i9(D.bf,0.58,0.08,0.004,0.06,v,0),C.i9(D.bf,0.58,0.14,0.34,0.003,v,0),C.i9(D.bf,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i9(D.bf,0.08,0.8,0.004,0.14,t,0),C.i9(D.bf,0.08,0.94,0.6,0.003,t,0),C.nU(0.58,0.08,0.05,e),C.nU(0.92,0.22,0.05,e),C.nU(0.08,0.8,0.05,f),C.nU(0.68,0.94,0.05,f),C.nU(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i9(D.l2,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i9(D.l2,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i9(D.l2,0.7,0.8,0.22,0.12,w|1140850688,0),C.i9(D.l2,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nU(0.5,0.5,1.5,w|335544320),C.nU(0.5,0.5,1.15,w|402653184),C.nU(0.5,0.5,0.8,v|436207616),C.nU(0.95,0.05,0.4,v|855638016),C.nU(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nU(0.85,0.08,0.7,w|1140850688),C.nU(0.1,0.35,0.5,v|855638016),C.nU(0.9,0.62,0.55,v|771751936),C.nU(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i9(D.bf,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i9(D.bf,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i9(D.bf,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i9(D.bf,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nU(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nU(0.5,0.2,0.65,(w|3422552064)>>>0),C.nU(0.5,0.2,0.95,w|855638016),C.i9(D.bf,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i9(D.bf,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i9(D.jH,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i9(D.jH,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i9(D.jH,0.15,0.86,0.6,0.14,1712265002,0),C.nU(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cSN[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.byY
l=$.Q7
$.Q7=l+1
w.push(new C.eK(m+"_"+l,D.f0,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.eL,q,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nU(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i9(D.jH,0.35,-0.1,0.3,0.62,w|855638016,0),C.i9(D.jH,0.05,-0.1,0.3,0.55,v,-0.5),C.i9(D.jH,0.65,-0.1,0.3,0.55,v,0.5),C.nU(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i9(D.bf,0.06,0.04,0.88,0.002,e,0),C.i9(D.bf,0.06,0.96,0.88,0.002,e,0),C.i9(D.bf,0.06,0.04,0.004,0.92,e,0),C.i9(D.bf,0.936,0.04,0.004,0.92,e,0),C.i9(D.bf,0.09,0.07,0.82,0.001,w,0),C.i9(D.bf,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i9(D.jI,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i9(D.jI,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i9(D.jI,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i9(D.bf,0,0,0.3,0.09,w|1140850688,0),C.i9(D.bf,0.7,0.9,0.3,0.1,v|1426063360,0),C.i9(D.bf,0.82,0.04,0.12,0.07,w|771751936,0),C.i9(D.bf,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i9(D.eL,0.62,0.02,0.5,0.16,v,0.6),C.i9(D.eL,0.78,0.12,0.4,0.12,u,0.9),C.i9(D.eL,-0.12,0.8,0.5,0.16,u,-0.6),C.i9(D.eL,-0.05,0.9,0.4,0.12,v,-0.9),C.nU(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i9(D.bf,0.09,0.12,0.16,0.006,e,0),C.i9(D.bf,0.05,0.03,0.9,0.001,w,0),C.i9(D.bf,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i0s(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.byY=j
$.Q7=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fwz()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bn,A.a5,"",1,C.bzQ(),g,"","",0,!1,"",0,D.bf,l,2,"",0,0,"",D.cm,D.lu,1,0,0))
if(a9)A.d.v(q,C.hOy(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i3X(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fwy(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bn,A.a5,a1,a3*9/16,C.bzQ(),a0,"","",0,!1,a2,0,D.bf,l,2,"",0,0,"",D.cm,D.lu,a3,a4,a5))
return C.rp(s,r,0,0,q,j+"_slide",D.q9,"","","",D.dd)},
ro:function ro(d,e){this.a=d
this.b=e},
m3:function m3(d,e,f,g,h,i,j,k,l,m){var _=this
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
fwz:function fwz(){},
fwy:function fwy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hEA(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cdr(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bS()
w=w.h(d,"request")
return new C.zn(u,t,s,B.t(w==null?"":w))},
fEe(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fEe=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hfP){w=1
break}$.hfP=!0
t=4
w=7
return B.b(B.aA(),$async$fEe)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aH(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jy(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hEA(m)
if(l!=null)J.ch(n,l)}$.Ct.cg(0,B.t(o.a),new C.fEf(n))}C.fXN()
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
return B.i($async$fEe,v)},
fXN(){var w,v=new B.S(Date.now(),0,!1).bQ(-12e8)
for(w=new B.dt($.Ct,$.Ct.r,$.Ct.e);w.C();)J.nq(w.d,new C.fkR(v))
$.Ct.bo($.Ct,new C.fkS())},
aNw(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNw=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aNw)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Ct,B.a3($.Ct).k("cK<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gR(h)
g=o
J.ch(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aNw)
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
return B.i($async$aNw,v)},
i4y(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fXN()
w=$.Ct.cg(0,d,new C.fEh())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.pv(w,0,new C.zn(new B.S(v,0,!1),f,u,g))
C.aNw()},
i4v(d){var w,v=$.Ct.h(0,d)
if(v==null||J.cn(v))return
w=J.cG(v)
w.cC(v,0)
if(w.gam(v))$.Ct.W(0,d)
C.aNw()},
zn:function zn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdr:function cdr(){},
fEf:function fEf(d){this.a=d},
fkR:function fkR(d){this.a=d},
fkS:function fkS(){},
fEh:function fEh(){},
i4A(d){return A.d.dL(D.vZ,new C.fEk(d),new C.fEl())},
hEy(d){var w
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
hEx(d){var w
switch(d.a){case 0:w=D.akO
break
case 1:w=A.yf
break
case 2:w=A.alS
break
case 3:w=K.akq
break
case 4:w=A.ali
break
case 5:w=A.lS
break
default:w=null}return w},
hRw(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.PG[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.PG[w]
if(!B.cX(v.toLowerCase(),t,0))u=B.cX(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hEz(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.R.ao(B.F(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
i4w(d,e,f,g,h){var w=new B.L(D.vZ,new C.fEd(),x.eC).aI(0,", "),v=""+d,u=C.hlc(h),t=F.fxY(h),s=C.hhq(g),r=e.t(0,D.HL)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HM)?'- New slides get an "icon3d" from: '+A.d.aI(D.PG,", ")+".\n":"",p=e.t(0,D.CA)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i4x(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.L(D.vZ,new C.fEg(),x.eC).aI(0,", "),p=new B.fe("")
if(e.t(0,D.HL)){p.a=s
w=s}else w=""
if(e.t(0,D.HM))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.PG,", ")+".\n")
if(e.t(0,D.CA))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hlc(d)
v=F.fxY(d)
u=C.hhq(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agL(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CS(a3,"{"),a5=J.fQ9(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.L8(a3,a4,a5+1)
try{w=A.R.aH(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fCd(),m).c_(0,new C.fCe())
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
f=C.hRw(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a7F(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fp(u).b:q))
p=A.d.b4(D.vZ,new C.fCf(r))?r:a7
o=C.fk5(J.q(w,"logo_frame"),D.BZ)
n=C.fk5(J.q(w,"logo_ring"),D.BU)
m=C.fk5(J.q(w,"photo_frame"),D.BZ)
l=C.fk5(J.q(w,"photo_ring"),D.BU)
return new C.aqG(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1f(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hkk(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CB),f7=f6?C.hLd():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eM()
v.dB(f7.w+1)
u=f7.a
t=B.bn(u.b,!0,x.dL)
A.d.fv(t,v)
s=u.c
s=new C.nI("luxe",u.a,A.lS,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i4A(f9.b)
r=g2.t(0,D.a4K)||f6
q=g2.t(0,D.HL)
p=g2.t(0,D.RB)
o=new C.fwD()
n=B.a([],x.g)
m=new C.fwG(o,w,r)
l=new C.fwF(o,r)
k=new C.fwE(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.b4(u,new C.fwC(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cUj[b8]
c0=D.cTf[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eMO.t(0,b2.a)){c7=b0+1
c5=g8[A.o.E(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eL,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eL,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eL,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mE,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qa,500,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Ry
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eL,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.l2,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bf,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Cy
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eL,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eL,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mE,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.N))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qa,500,f2,f0))
d3=D.mD
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eL,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bf,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uj:D.cm
c1.push(new C.eK(b4,D.a4I,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bn,A.aD,4279310375,A.bg,e4,D.bf,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mD
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eL,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eL,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mE,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qa,450,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Ry
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eL,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eL,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bf,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bf,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aI(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.HJ,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mD}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hMR(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dhV[A.o.E(b1,6)]:s
n.push(new C.lF(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bw(e4,e4,e4,e4,D.Cx,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fz0(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fz0=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.CA)
n=e.t(0,D.HM)
if(!o&&!n){u=D.a3H
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fz3(o,s[r],n,$.hQh,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iM(t,x.e),$async$fz0)
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
return B.i($async$fz0,v)},
fy0(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fy0=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i4x(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMS(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fy0)
case 3:u=s.aNc(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fy0,v)},
bBt(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBt=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ea(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.i4y(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agL(i,"colorful")
t=C.i4w(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMS(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hp),$async$bBt)
case 3:u=o.aNc(m,f,h,g,D.dWj,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBt,v)},
aMS(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMS=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vg(null,""),$async$aMS)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n3(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qM(t,d,g,null),$async$aMS)
case 7:q=i
p=q.b
if(p!=null){o=C.agL(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KP(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMS,v)},
aNc(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNc=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.CA)||e.t(0,D.HM)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.db(e,x.Q)
t.W(0,D.CA)}w=6
return B.b(C.fz0(d,t),$async$aNc)
case 6:s=k
w=4
break
case 5:s=D.a3H
case 4:t=d.c
w=A.d.b4(t,new C.fdv())?7:9
break
case 7:r=$.hm4
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aNc)
case 10:q=k
p=q!=null?A.R.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hkk(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hEz(new C.aqG(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("L<1,n>")
t=B.C(new B.L(m,new C.fdw(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jP<co.E,n>")
t=B.C(new B.jP(e,new C.fdx(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.RB)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNc,v)},
h_y(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a2v[v]
if(A.d.t(t,u.b))w.J(0,u)}return w},
i8A(d){return B.bQ(A.K,null,new C.fNh(),d,!0,!0,!0,null,!1,!1,x.I)},
hLQ(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcw().aJ(d)},
i8z(d,e,f){return B.bQ(A.K,null,new C.fNg(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h_z(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h_A(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fk5(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b4(e,new C.fk6(w))?w:""},
hhq(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hm2(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agL(a1==null?"":a1,a0),a3=C.agL(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a1<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.ra(new B.a1(r,new C.fEm(t[p]),q))
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
g=B.C(new B.a1(k,new C.fEn(),v),r)
A.d.b1(g,new C.fEo())
if(g.length===0)continue
f=new C.fEp(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i4R(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aFU
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dYe
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dYf
return null},
hh1(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bv(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i4B(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oa
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
if(C.hh1(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hh1(n,i,v,u))if(n.w>10){f=h+1
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
i4z(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agL(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a2v[r]
if(q.b===s)w.J(0,q)}}v=C.h_z(e)
u=C.h_A(e)
p=C.hkk(n,D.a3H,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("L<1,n>")
o=B.C(new B.L(o,new C.fEi(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jP<co.E,n>")
o=B.C(new B.jP(w,new C.fEj(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.RB)
return p},
i8m(d,e,f){return B.bQ(A.K,null,new C.fMu(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hLd(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eM()
s.dB(t)
w=D.cyp[s.aC(10)]
v=new C.ed7(s)
u=x.N
return new C.ed6(w,s.aC(4),J.fp(v.$1$2(D.cYI,1,x.ff)),w.r[s.aC(3)],v.$1$2(D.ddA,2+s.aC(2),u),v.$1$2(D.d6Q,2,u),v.$1$2(D.dgt,4,x.fP),t)},
hMR(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eM()
a1.dB(a5.w+a3*13)
w=new C.f9Z(a4)
v=new C.fa0(a4,d)
u=new C.fa_(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fT(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fT(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eL,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1f(a0,52),"lux_spot",a5.wt(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.bf,0,0,1,1,0,"lux_back",a5.wt(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.bf,0,0,1,1,0,"lux_back2",a5.aEf(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.022,0.038,0.956,0.924,0,g,a5.wt(0,f),D.dd,150,C.a1f(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.018,0.032,0.964,0.936,0,g,a5.wt(0,f),D.dd,120,C.a1f(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a1f(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bf,0,0,1,1,0,"lux_filigree",a5.wt(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.bf,0.08,0.06,0.84,0.004,C.a1f(a0,208),"lux_rule",a5.aEf(0,"shimmer",r),D.ui,150))
a2.push(w.$10$anim$delay(D.bf,0.08,0.936,0.84,0.004,C.a1f(a0,144),"lux_rule2","",D.HJ,220))}l=!A.d.b4(a2,new C.f9Y())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wt(0,"crest"),350))
else{o=a1.hc()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wt(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1f(r,242)
j=a5.wt(0,"orbit")
i=s===D.bf?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qa,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eL,t-0.007,0.9495,0.014,0.025,C.a1f(r,242),"lux_g2",a5.wt(0,"orbit"),D.qa,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bf,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fT(a0,16),8,"0").toUpperCase()))}if((A.d.gK(d.b).a&16777215)<8421504)a2.push(w.$8(D.bf,0,0,1,1,0,"lux_velvet",a5.wt(0,"velvet")))},
nI:function nI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEk:function fEk(d){this.a=d},
fEl:function fEl(){},
vU:function vU(d,e){this.a=d
this.b=e},
a7F:function a7F(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqG:function aqG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fEd:function fEd(){},
fEg:function fEg(){},
fCd:function fCd(){},
fCe:function fCe(){},
fCf:function fCf(d){this.a=d},
fwD:function fwD(){},
fwG:function fwG(d,e,f){this.a=d
this.b=e
this.c=f},
fwF:function fwF(d,e){this.a=d
this.b=e},
fwE:function fwE(d,e){this.a=d
this.b=e},
fwC:function fwC(d){this.a=d},
fz3:function fz3(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fz1:function fz1(d){this.a=d},
fz2:function fz2(d){this.a=d},
fdv:function fdv(){},
fdw:function fdw(){},
fdx:function fdx(){},
fNh:function fNh(){},
a02:function a02(d){this.a=d},
aGQ:function aGQ(d,e,f,g,h){var _=this
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
eXZ:function eXZ(d,e,f){this.a=d
this.b=e
this.c=f},
eY_:function eY_(d,e){this.a=d
this.b=e},
eXX:function eXX(d,e){this.a=d
this.b=e},
eXY:function eXY(d,e){this.a=d
this.b=e},
eXW:function eXW(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eXR:function eXR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eXV:function eXV(d,e){this.a=d
this.b=e},
eXQ:function eXQ(d,e){this.a=d
this.b=e},
eXU:function eXU(d,e){this.a=d
this.b=e},
eXP:function eXP(d,e){this.a=d
this.b=e},
eXS:function eXS(d){this.a=d},
eXT:function eXT(d,e){this.a=d
this.b=e},
eXF:function eXF(d,e){this.a=d
this.b=e},
eXG:function eXG(d,e){this.a=d
this.b=e},
eXI:function eXI(d){this.a=d},
eXJ:function eXJ(d){this.a=d},
eXK:function eXK(d){this.a=d},
eXL:function eXL(d){this.a=d},
eXH:function eXH(d,e){this.a=d
this.b=e},
eXM:function eXM(d,e){this.a=d
this.b=e},
eYc:function eYc(d){this.a=d},
eYd:function eYd(d){this.a=d},
eYb:function eYb(d){this.a=d},
eYe:function eYe(d){this.a=d},
eYa:function eYa(d){this.a=d},
eYg:function eYg(d){this.a=d},
eY9:function eY9(d,e){this.a=d
this.b=e},
eYh:function eYh(d){this.a=d},
eY8:function eY8(d,e){this.a=d
this.b=e},
eYi:function eYi(d){this.a=d},
eY7:function eY7(d){this.a=d},
eYj:function eYj(d){this.a=d},
eY6:function eY6(d,e){this.a=d
this.b=e},
eYk:function eYk(d){this.a=d},
eY5:function eY5(d,e){this.a=d
this.b=e},
eYl:function eYl(d){this.a=d},
eY4:function eY4(d){this.a=d},
eYm:function eYm(d,e){this.a=d
this.b=e},
eY3:function eY3(d,e){this.a=d
this.b=e},
eYn:function eYn(d){this.a=d},
eYf:function eYf(d){this.a=d},
eY2:function eY2(d,e){this.a=d
this.b=e},
eXN:function eXN(d,e,f){this.a=d
this.b=e
this.c=f},
eXO:function eXO(d,e,f){this.a=d
this.b=e
this.c=f},
eY1:function eY1(d,e){this.a=d
this.b=e},
eY0:function eY0(d,e){this.a=d
this.b=e},
fNg:function fNg(d,e){this.a=d
this.b=e},
a01:function a01(d,e,f){this.c=d
this.d=e
this.a=f},
aGP:function aGP(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eXy:function eXy(d){this.a=d},
eXz:function eXz(d){this.a=d},
eXA:function eXA(d,e){this.a=d
this.b=e},
eXB:function eXB(d){this.a=d},
eXC:function eXC(d){this.a=d},
eXx:function eXx(d,e){this.a=d
this.b=e},
eXD:function eXD(d,e){this.a=d
this.b=e},
eXE:function eXE(d,e){this.a=d
this.b=e},
fk6:function fk6(d){this.a=d},
b0w:function b0w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDn:function aDn(d,e,f){this.c=d
this.d=e
this.a=f},
bjt:function bjt(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
ed9:function ed9(d){this.a=d},
ed8:function ed8(){},
bh0:function bh0(d,e){this.b=d
this.a=e},
fEm:function fEm(d){this.a=d},
fEn:function fEn(){},
fEo:function fEo(){},
fEp:function fEp(d){this.a=d},
arf:function arf(d,e){this.a=d
this.b=e},
fEi:function fEi(){},
fEj:function fEj(){},
fMu:function fMu(d,e){this.a=d
this.b=e},
Zo:function Zo(d,e,f){this.c=d
this.d=e
this.a=f},
aAQ:function aAQ(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dic:function dic(d){this.a=d},
did:function did(d){this.a=d},
die:function die(d,e){this.a=d
this.b=e},
dih:function dih(d){this.a=d},
dii:function dii(d,e){this.a=d
this.b=e},
dig:function dig(d,e){this.a=d
this.b=e},
dij:function dij(d){this.a=d},
dif:function dif(d,e){this.a=d
this.b=e},
brV:function brV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ed6:function ed6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ed7:function ed7(d){this.a=d},
f9Z:function f9Z(d){this.a=d},
fa0:function fa0(d,e){this.a=d
this.b=e},
fa_:function fa_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9Y:function f9Y(){},
aLo:function aLo(){},
fZo(d){var w,v,u
try{w=A.R.aH(0,d,null)
if(x.f.b(w)){v=B.vM(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0s:function b0s(d,e,f){this.c=d
this.d=e
this.a=f},
bl6:function bl6(d,e){this.c=d
this.a=e},
i0V(d){return A.d.dL(D.GM,new C.fxK(d),new C.fxL())},
i0W(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b3(t,6)
if(w.length===0)return null
v=new B.a1(D.GM,new C.fxM(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gK(0)
return new C.jG("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lb:function lb(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fxK:function fxK(d){this.a=d},
fxL:function fxL(){},
fxM:function fxM(d){this.a=d},
mS(d,e,f,g,h){return new C.Et(f,g,d)},
hO4(d){var w=d.z,v=B.U(w).k("a1<1>")
w=B.C(new B.a1(w,new C.fbZ(),v),v.k("J.E"))
d.z=w
d.x=""},
dw(d,e){var w=$.Kd
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dx(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cm,D.f0,j,k,l)},
hk7(d,e){var w
C.hO4(d)
w=A.d.dL($.bDt(),new C.fvA(e),new C.fvB())
$.Kd=w.a
d.x=w.a;++d.y
try{w.bA(d)}finally{$.Kd=""}d.z=B.bn(d.z,!0,x.F)},
Et:function Et(d,e,f){this.a=d
this.b=e
this.e=f},
fbZ:function fbZ(){},
fDP:function fDP(){},
fDQ:function fDQ(){},
fDR:function fDR(){},
fE1:function fE1(){},
fE6:function fE6(){},
fE7:function fE7(){},
fE8:function fE8(){},
fE9:function fE9(){},
fEa:function fEa(){},
fEb:function fEb(){},
fEc:function fEc(){},
fDS:function fDS(){},
fDT:function fDT(){},
fDU:function fDU(){},
fDV:function fDV(){},
fDW:function fDW(){},
fDX:function fDX(){},
fDY:function fDY(){},
fDZ:function fDZ(){},
fE_:function fE_(){},
fE0:function fE0(){},
fE2:function fE2(){},
fE3:function fE3(){},
fE4:function fE4(){},
fE5:function fE5(){},
fvA:function fvA(d){this.a=d},
fvB:function fvB(){},
iU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ep(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bf,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CK(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cm,D.f0,j,k,l)},
bCc(){var w=new B.S(Date.now(),0,!1)
return A.ig[B.bH(w)-1]+" "+B.bR(w)+", "+B.bA(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bzA(d){return new B.iP((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hT8(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amr(A.cG.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hTc(d){var w=d.r
if(!d.cy)return w
return new B.L(B.a(w.split("\n"),x.s),new C.fjF(),x.dv).aI(0,"\n")},
hTb(d){switch(d.a){case 2:return A.ns
case 1:case 5:return A.eXm
default:return A.T4}},
hT5(d){switch(d.a){case 2:return A.uU
case 1:case 5:return A.UT
default:return A.a9C}},
hT9(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bzA(u),q=(s&255)===0?v:C.bzA(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.ns(q,p,A.kJ)
w=new B.pw(t,t,t,t)}switch(d.ax.a){case 1:return B.lu(v,v,v,new B.kA(r,w,v,A.aaR,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wV(B.lu(v,v,q,v,p+0.4,v,v,v))
default:return B.lu(v,v,v,new B.kA(r,w,B.vo(4),A.hF,v),v,v,v,v)}},
hT7(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f0?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hT5(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hTc(d)
t=C.bzA(d.Q)
s=d.x.a>=700?A.el:A.vv
r=d.y===A.cF?A.xT:A.ajh
q=d.z
p=new B.CV(w,l,l,B.fb(u,l,l,l,B.h5(l,t,1===q.a?A.aOO:A.aON,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hTb(d.as)))
break
case 1:case 4:o=C.hT8(d.at)
n=i===D.lu&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wV(B.fb(w,l,l,l,B.h5(l,A.rx,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HD(o,n?A.aaN:A.Vg,l,l)
break
case 3:w=new B.ns(A.I1,1,A.kJ)
u=B.vo(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lu(A.uU,B.fb(t,l,l,l,B.h5(l,D.e9x,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.el,l,!0,l,l,l,l),A.ns),l,new B.kA(E.aHc,new B.pw(w,w,w,w),u,A.hF,l),l,l,l,l)
break
case 2:p=C.hT9(d,e)
break
case 5:p=C.hT6(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hbO(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.as0(m/255,p)}if(w)return new F.w_(k,l,j,l,new B.RV(new B.kz(g,g,f,1/0),p))
if(i===D.l1){i=new B.ns(A.I1,1,A.kJ)
i=B.lu(A.uU,p,l,new B.kA(A.p3,new B.pw(i,i,i,i),B.vo(4),A.hF,l),l,l,D.bvf,l)}else i=p
return new F.w_(k,l,j,l,new B.fO(g,f,i))},
hTa(d,e,f,g){var w,v=null,u=C.bzA(d.e),t=d.f
t=B.a([F.haq(t!=null?B.lu(v,v,v,new B.kA(v,v,v,A.hF,new B.aW0(E.UU,A.a9w,B.a([u,C.bzA(t)],x.cR),v)),v,v,v,v):B.lu(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.L(w,new C.fjE(f,g),B.U(w).k("L<1,ff>")))
return F.cqG(t)},
h_C(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h_C=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3U(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.Wb(A.wa,A.HZ,D.bwm,null,null,null,!1,null)
o=new B.BC(o,new C.fEv(607,787,p,d))
o.Mk(n,null)
r.push(o)}u=n.k6(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_C,v)},
hT6(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fZo(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaj8()
if(h==null)h=A.awN
j=B.tq(4279308564)
w=B.vo(18)
v=new B.ns(B.tq(4287531653),3,A.kJ)
u=i.length===0?"My links":i
u=B.a([B.wV(B.fb(u,m,m,m,B.h5(m,A.p3,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.el,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wV(B.fb(A.a.i(l.c),m,m,m,D.f3w,m)))
u.push(new B.fO(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bS(t,t.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tq(4280690220)
o=new B.a8Y(8,8)
n=A.a.i(r.b)
u.push(new B.nJ(D.bpz,new C.awc(new C.ahS(q),B.lu(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.f5P,A.ns),m,new B.kA(p,m,new B.aii(o,o,o,o),A.hF,m),m,m,D.bvF,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wV(B.fb(k,m,m,m,D.f53,m))
u.push(new C.awc(C.hsJ(k),t))}return B.lu(m,B.yG(u,A.Ly,A.ls),m,new B.kA(j,new B.pw(v,v,v,v),w,A.hF,m),m,m,D.bqo,m)},
fjF:function fjF(){},
fjE:function fjE(d,e){this.a=d
this.b=e},
fEv:function fEv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agy(d){var w,v
for(w=0;w<32;++w){v=D.GD[w]
if(v.a===d)return v}return null},
hes(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aJ(A.a.b3(d,u+1))
return w}catch(v){return null}},
cW(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hnb(d,e){return B.a5(d,!1).c5(B.e8(new C.fKU(e),!0,null,x.fB))},
hna(d,e){return B.bQ(A.K,null,new C.fKT(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iZ:function iZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ek:function Ek(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ne:function Ne(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biQ:function biQ(d,e,f){var _=this
_.d=d
_.e=$
_.bs$=e
_.a8$=f
_.c=_.a=null},
dTC:function dTC(d){this.a=d},
dTB:function dTB(d,e,f){this.a=d
this.b=e
this.c=f},
dTA:function dTA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqu:function bqu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eWM:function eWM(d,e){this.a=d
this.b=e},
bdU:function bdU(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZm:function aZm(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7Z:function c7Z(){},
c8_:function c8_(d){this.a=d},
c80:function c80(d,e,f){this.a=d
this.b=e
this.c=f},
c81:function c81(d,e,f){this.a=d
this.b=e
this.c=f},
fKU:function fKU(d){this.a=d},
YX:function YX(d,e){this.c=d
this.a=e},
azd:function azd(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d7p:function d7p(d,e,f){this.a=d
this.b=e
this.c=f},
d7u:function d7u(d){this.a=d},
d7v:function d7v(d){this.a=d},
d7t:function d7t(d){this.a=d},
d7w:function d7w(d){this.a=d},
d7s:function d7s(d,e){this.a=d
this.b=e},
d7x:function d7x(d){this.a=d},
d7r:function d7r(d){this.a=d},
d7y:function d7y(d){this.a=d},
d7q:function d7q(d,e){this.a=d
this.b=e},
d7z:function d7z(d,e){this.a=d
this.b=e},
fKT:function fKT(d){this.a=d},
fKS:function fKS(d){this.a=d},
fKR:function fKR(d,e,f){this.a=d
this.b=e
this.c=f},
fKQ:function fKQ(d,e){this.a=d
this.b=e},
aKS:function aKS(){},
i8y(d){return B.bQ(A.K,null,new C.fNf(),d,!0,!0,!0,null,!1,!1,x.N)},
fNf:function fNf(){},
Zh:function Zh(d){this.a=d},
bfn:function bfn(d){this.d=d
this.c=this.a=null},
deb:function deb(d){this.a=d},
dec:function dec(d,e){this.a=d
this.b=e},
ded:function ded(d){this.a=d},
hPA(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.xk},
i2Q(d){var w,v=A.d.gK(d.split("@"))
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
i2P(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gK(d.split("@")),p=C.hPA(d)
switch(q){case"shimmer":return B.nN(A.a9Y,g,new C.fBb(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beL(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.dc(C.fRv(g,B.a4K(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bes(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eG(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fB(e)
u.mL(Math.sin(e)*0.3)
return B.dU(B.fs(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.bnm(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9m(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9_(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bug(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.brh(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bqq(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdN(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e1(B.ed(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.be),1.6+s*0.15,r,r),!0,r),0,0,0),B.eG(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fBb:function fBb(d,e){this.a=d
this.b=e},
beL:function beL(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bes:function bes(d,e,f){this.b=d
this.c=e
this.a=f},
bnm:function bnm(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9m:function b9m(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9_:function b9_(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bug:function bug(d,e,f){this.b=d
this.c=e
this.a=f},
brh:function brh(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqq:function bqq(d,e,f){this.b=d
this.c=e
this.a=f},
bdN:function bdN(d,e,f){this.b=d
this.d=e
this.a=f},
d76:function d76(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xs:function xs(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fBe(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l1},
i2V(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b1(j,new C.fBf())
s=A.d.gK(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gK(B.aPK(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i2U(d,e){var w,v,u,t,s,r=d.db
if(!A.a.a0(r,"marriage_field_"))return
w=r.split(":")
r=w.length
if(r>1){v=B.d5(w[1])
u=v==null?d.e:v}else u=d.e
t=r>2?B.d5(w[2]):null
r=A.a.i(e).length
if(r===0){d.e=u
if(t!=null)d.w=t
return}if(t!=null){s=r*(t*0.001)+0.028
if(s<=u){d.w=t
d.e=A.k.D(s,0.06,u)}else{d.w=A.k.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.k.D(r*(d.w*0.001)+0.028,0.06,u)},
agb(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agb=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a1<1>")
e=B.C(new B.a1(a4,new C.ftB(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(A.dH,null,new C.ftC(e),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$agb)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gK(e).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h0d(d),$async$agb)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.L_(d,"Search states\u2026","",A.k1,"Choose state"),$async$agb)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h_9(s)
if(p==null)p=A.d.gK(D.Qs)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fBg(p.d)
k=x.u
j=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cD(),l,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Cw(i,0.016,D.l2,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cw(0,0.058,D.eL,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cw(0,0.058,D.eL,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Ko("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Ko("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fX5(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bz3("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0R("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0R("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0R("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0R("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bz3("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cw(m,0.082,D.bf,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.ep(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bn,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.bf,4280172719,2,y.O,0,0,"",D.cm,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fX5(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bz3("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hgr("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hgr("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0R("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0R("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bz2("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bz2("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bz3("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Ko("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Ko("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bz2("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bz2("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bz3("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0R("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bz2("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0R("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.fX5(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Ko("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Ko("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bw(null,null,null,null,D.oa,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rp(m,null,0,0,j,n,D.q9,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
fBf:function fBf(){},
ftB:function ftB(){},
ftC:function ftC(d){this.a=d},
ftz:function ftz(d){this.a=d},
ftA:function ftA(d){this.a=d},
hSB(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hSA(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mJ
case"lineThrough":return A.zv
default:return A.aD}},
ep(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eK(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hiv(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Qe[w]
if(v.b===u)return v}return D.dd},
hOZ(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cQ9[w]
if(v.b===u)return v}return D.cQ},
hVp(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.ded[w]
if(v.b===u)return v}return D.bf},
rp(d,e,f,g,h,i,j,k,l,m,n){return new C.lF(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h9a(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hQZ(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hiv(d.h(0,"transition"))
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
else{n=J.d9(n,x.f)
n=B.cF(n,new C.cdo(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a3(n).k("J.E"))}return C.rp(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hQZ(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aoB[w]
if(v.b===u)return v}return D.mD},
Bw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i0(p,t,a1,h,i,w,a0==null?B.a([C.rp(4294967295,null,0,0,null,C.cD(),D.q9,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VC(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hN6(a6.h(0,"aspectRatio"))
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
o=C.kv(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.kv(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
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
else{f=J.b6(f,new C.cdb(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cdc(),x.N)
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
else{g=J.d9(g,x.f)
g=B.cF(g,new C.cdd(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a3(g).k("J.E"))}return C.Bw(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rp(4294967295,a3,0,0,a3,C.cD(),D.q9,"","","",D.dd)],x.g):g,v,p,o,s)},
kv(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hN6(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.df2[w]
if(v.b===u)return v}return D.Cx},
cD(){var w=Date.now(),v=$.j0
$.j0=v+1
return""+1000*w+"_"+v},
cdF(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Cy){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cD()
v=C.ep(A.L,!1,f.d.l(),A.aD,"",n,40,A.bn,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cm,D.cQ,0.84,0.08,0.3)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.L,!1,f.e.l(),A.aD,"",n,20,A.bn,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.bf,m,2,"Click to add subtitle",0,0,"",D.cm,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,32,A.bn,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.bg,!0,f.e.l(),A.aD,"",n,20,A.bn,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.bf,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cm,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bn,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Two Column Slide",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cD()
t=f.e
u=C.ep(A.bg,!0,t.l(),A.aD,"",n,18,A.bn,A.a5,"",0.7,u,p,"","",0,!1,"",0,D.bf,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cm,D.cQ,0.42,0.06,0.22)
s=C.cD()
A.d.v(w,B.a([v,u,C.ep(A.bg,!0,t.l(),A.aD,"",n,18,A.bn,A.a5,"",0.7,s,p,"","",0,!1,"",0,D.bf,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cm,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.ep(A.L,!1,4294967295,A.aD,"",n,42,A.bn,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bf,m,2,"Section Header",0,0,"",D.cm,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bn,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Compare",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.ep(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bn,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.bf,t.l(),2,"",0,0,"",D.cm,D.f0,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bn,A.N,"",0.6,s,p,"","",0,!1,"",0,D.bf,m,2,"Option A",0,0,"",D.cm,D.cQ,0.38,0.08,0.26)
q=C.cD()
t=C.ep(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bn,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.bf,t.j(0.5).l(),2,"",0,0,"",D.cm,D.f0,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bn,A.N,"",0.6,q,p,"","",0,!1,"",0,D.bf,m,2,"Option B",0,0,"",D.cm,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cD()
v=C.ep(A.L,!1,f.d.l(),A.aD,"",n,36,A.bn,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bf,m,2,"TERM / QUESTION",0,0,"",D.cm,D.cQ,0.8,0.1,0.12)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.L,!1,f.e.l(),A.aD,"",n,22,A.bn,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.bf,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cm,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,28,A.bn,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bf,m,2,"Quiz Question",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.bg,!1,f.e.l(),A.aD,"",n,20,A.bn,A.a5,"",0.62,u,p,"","",0,!1,"",0,D.bf,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cm,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,26,A.bn,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bf,m,2,"Worksheet / Assignment",0,0,"",D.cm,D.cQ,0.88,0.06,0.04)
u=C.cD()
A.d.v(w,B.a([v,C.ep(A.bg,!1,f.e.l(),A.aD,"",n,18,A.bn,A.a5,"",0.78,u,p,"","",0,!1,"",0,D.bf,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cm,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hEJ(d){return A.d.dL(D.a29,new C.cdG(d),new C.cdH())},
hEG(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aH(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.ch(v,C.VC(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fTB(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cdB(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.b1(u,new C.cdA())
return u},
h9d(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cdw()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aqH(d){return C.hEE(d)},
hEE(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cdz()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a22(m),$async$aqH)
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
return B.b(B.aA(),$async$aqH)
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
case 11:o=l.$1($.h9c.h(0,m))
n=C.fTB(C.fTB(j,r),o)
if(n.length===0){u=C.h9d(C.h9d(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqH,v)},
cdv(d){return C.hED(d)},
hED(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cdv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cdv)
case 7:r=f
q=r.t7("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kD(q,B.U(q).c)
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
return B.i($async$cdv,v)},
b0y(d,e){return C.hEF(d,e)},
hEF(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0y=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b0y)
case 6:s=g
q=s.t7("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.L7(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b0y)
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
return B.i($async$b0y,v)},
VD(d,e){return C.hEH(d,e)},
hEH(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VD=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h9b.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqH(a3),$async$VD)
case 5:p=a6
case 4:w=6
return B.b(C.cdv(a3),$async$VD)
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
if(f<=g.gbq())k=f===g.gbq()&&k.b>g.gcz()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a1<J.E>")
e=B.C(new B.a1(new B.bc(n,m),new C.cdC(o),l),l.k("J.E"))
A.d.b1(e,new C.cdD())
$.h9b.n(0,a0,e)
n=B.U(e).k("L<1,a4<n,@>>")
n=B.C(new B.L(e,new C.cdE(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.h9c.n(0,a0,r)
t=8
w=11
return B.b(B.ah_(a0,r),$async$VD)
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
return B.b(B.aA(),$async$VD)
case 16:q=a6
w=17
return B.b(q.ar("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$VD)
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
return B.i($async$VD,v)},
Ix:function Ix(d,e){this.a=d
this.b=e},
aqF:function aqF(d,e){this.a=d
this.b=e},
uB:function uB(d,e){this.a=d
this.b=e},
mv:function mv(d,e){this.a=d
this.b=e},
hz:function hz(d,e){this.a=d
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
lF:function lF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cdp:function cdp(){},
cdq:function cdq(){},
cdo:function cdo(){},
i0:function i0(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
cde:function cde(){},
cdf:function cdf(){},
cdb:function cdb(){},
cdc:function cdc(){},
cdd:function cdd(){},
jG:function jG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cdG:function cdG(d){this.a=d},
cdH:function cdH(){},
cdB:function cdB(d){this.a=d},
cdA:function cdA(){},
cdw:function cdw(){},
cdx:function cdx(){},
cdy:function cdy(){},
cdz:function cdz(){},
cdC:function cdC(d){this.a=d},
cdD:function cdD(){},
cdE:function cdE(){},
i35(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fBO(e,v,d,B.aX(w))
w.$1(new C.fBK())
w.$1(new C.fBL())
w.$1(new C.fBM())
w.$1(new C.fBN())
return v},
fBO:function fBO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBK:function fBK(){},
fBL:function fBL(){},
fBM:function fBM(){},
fBN:function fBN(){},
b0v:function b0v(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdk:function cdk(d){this.a=d},
cdj:function cdj(){},
cdl:function cdl(){},
cdm:function cdm(d,e){this.a=d
this.b=e},
cdn:function cdn(d){this.a=d},
anQ:function anQ(d,e){this.c=d
this.a=e},
biA:function biA(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
dFR:function dFR(){},
aKD:function aKD(){},
cds(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cds=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.T(D.eUz)
u=!1
w=1
break}u=B.kU(!1,d,t,!1,null,A.a4M,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cds,v)},
hEB(d){var w=A.d.bf(D.GM,new C.cdt(d))
if(w<0)return!0
return w>=4},
hEC(d){var w=A.d.bf($.bDt(),new C.cdu(d))
if(w<0)return!0
return w>=5},
cdt:function cdt(d){this.a=d},
cdu:function cdu(d){this.a=d},
i4L(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yu()
$.qb().pT(t,new C.fEC(s),!0)
u=B.a([B.DG(v,A.qd,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f4_,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.ne,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b0,A.r,u,v)},
fEC:function fEC(d){this.a=d},
i4m(){return C.h_v()},
i1j(){return C.bBq()},
i3m(){return C.h_m()},
aOQ(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fDI(d,f),$async$aOQ)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOQ,v)},
fDI(d,e){var w=0,v=B.j(x.H),u
var $async$fDI=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzB
if(u==null)u=e+".pdf"
w=2
return B.b(B.bQ(A.K,null,new C.fDJ(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fDI)
case 2:return B.h(null,v)}})
return B.i($async$fDI,v)},
fDJ:function fDJ(d,e){this.a=d
this.b=e},
ad0:function ad0(d,e,f){this.c=d
this.d=e
this.a=f},
epz:function epz(d,e){this.a=d
this.b=e},
epA:function epA(d,e){this.a=d
this.b=e},
epB:function epB(d,e){this.a=d
this.b=e},
epC:function epC(d){this.a=d},
adi:function adi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0u(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0t(g,m,f,d,e,h,l,k,j,o,i,null)},
hlr(d){return B.cq(new C.fBJ(d))},
h_x(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i4u(d){if(d===D.cm)return"None"
return C.h_x(d)},
bA6(d,e,f,g){return C.hVw(d,e,f,g)},
hVw(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bA6=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fXo&&t.px())t.eK()
$.fXo=!0
s.a=null
w=3
return B.b(B.hT(A.bi,!0,"Animation preview",d,new C.fmc(s,e,g,f),null,A.eF,!0,x.H),$async$bA6)
case 3:s=s.a
if(s!=null)s.a7(0)
$.fXo=!1
case 1:return B.h(u,v)}})
return B.i($async$bA6,v)},
fO3(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fO3=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bV,x.w).w.a.a*0.88,280,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h_x(f)+" Slide transition preview"
s=s?Af.F5:A.vg
w=3
return B.b(C.bA6(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aIe(f,null),A.aq),null),r),$async$fO3)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fO3,v)},
hkK(d,e,f){var w,v,u=null,t=A.ct.aw(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dc(f,t)
case 2:case 17:return B.dU(B.dc(f,t),new B.u((1-t)*48,0))
case 3:return B.dU(B.dc(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dU(B.dc(f,t),new B.u(0,(1-t)*36))
case 5:return B.dU(B.dc(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.ed(A.A,B.dc(f,t),0.5+t*0.5,u,u)
case 7:return B.ed(A.A,B.dc(f,t),1.4-t*0.4,u,u)
case 8:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fB((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 9:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.jZ((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mL((1-t)*0.8)
v=0.6+t*0.4
w.jI(v,v,v,1)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dc(f,t),new B.u((1-t)*24,0))}},
bCZ(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bCZ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bV,x.w).w.a.a*0.88,300,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h_x(f)+" Element animation preview"
s=s?Af.F5:A.vg
w=3
return B.b(C.bA6(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.ayY(f,null),A.aq),null),r),$async$bCZ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bCZ,v)},
i4t(d){var w,v,u,t,s=$.afF.W(0,d)
if(s!=null){$.afF.n(0,d,s)
return s}w=A.cG.aJ(A.a.b3(d,A.a.cJ(d,",")+1))
$.afF.n(0,d,w)
v=$.fYb=$.fYb+w.length
u=B.a3($.afF).k("cu<1>")
for(;;){if(!(v>41943040&&$.afF.a>1))break
t=new B.cu($.afF,u).gaf(0)
if(!t.C())B.b9(B.fy())
v-=$.afF.W(0,t.gR(0)).length
$.fYb=v}return w},
i4a(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kV(0,d),j=B.C(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Sl(s,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Sl(t,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Sl(u,A.cv))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b3(d,r)
v.push(B.de(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a21(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.F(new B.k1(e))
return m
case"rounded":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.gdO()*0.18
m.F(new B.iW(B.bx(e,new B.aT(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
w=e.d
m.F(new B.ap(e.c,w))
m.F(new B.ap(e.a,w))
m.F(new B.bF())
return m
case"hexagon":w=$.W()
m=B.a([],m)
v=new B.aO(w.r,A.ap,n,n,m)
for(w=e.a,u=e.c-w,w+=u/2,t=e.b,s=e.d-t,t+=s/2,r=0;r<6;++r){q=0.5235987755982988+r*3.141592653589793/3
p=w+Math.cos(q)*u/2
o=t+Math.sin(q)*s/2
if(r===0){p=new B.b5(p,o)
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
v.e=null}}v.F(new B.bF())
return v
case"diamond":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
m.F(new B.ap(e.c,e.gbP().b))
m.F(new B.ap(e.gbP().a,e.d))
m.F(new B.ap(e.a,e.gbP().b))
m.F(new B.bF())
return m
case"arch":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.F(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.F(new B.ap(w,p))
m.b9b(new B.u(t,p),new B.aT(s,s))
m.F(new B.ap(t,u))
m.F(new B.bF())
return m
default:m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.F(new B.o1(e))
return m}},
fzi(d,e,f){return B.cq(new C.fzj(D.eNc.t(0,d),d,f,e))},
b0t:function b0t(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cdi:function cdi(d){this.a=d},
cdh:function cdh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdg:function cdg(){},
b0q:function b0q(d,e){this.b=d
this.a=e},
fBJ:function fBJ(d){this.a=d},
fBI:function fBI(d,e){this.a=d
this.b=e},
fmc:function fmc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fma:function fma(d){this.a=d},
fmb:function fmb(d,e){this.a=d
this.b=e},
aIe:function aIe(d,e){this.c=d
this.a=e},
btN:function btN(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
f4h:function f4h(d,e,f){this.a=d
this.b=e
this.c=f},
aIR:function aIR(d,e){this.b=d
this.a=e},
UF:function UF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biN:function biN(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
dRP:function dRP(d){this.a=d},
dRO:function dRO(d){this.a=d},
dRN:function dRN(d){this.a=d},
Iw:function Iw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cda:function cda(d){this.a=d},
cd9:function cd9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayY:function ayY(d,e){this.c=d
this.a=e},
bdg:function bdg(){this.d=0
this.c=this.a=null},
d4l:function d4l(d){this.a=d},
d4k:function d4k(d){this.a=d},
a7n:function a7n(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjr:function bjr(d,e){var _=this
_.d=null
_.bs$=d
_.a8$=e
_.c=_.a=null},
ecQ:function ecQ(d,e,f){this.a=d
this.b=e
this.c=f},
aZp:function aZp(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
beq:function beq(d,e,f){this.b=d
this.c=e
this.a=f},
bpn:function bpn(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eUp:function eUp(){},
fzj:function fzj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqn:function bqn(d,e,f){this.b=d
this.c=e
this.a=f},
aKR:function aKR(){},
aLm:function aLm(){},
aMJ:function aMJ(){},
fCJ(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fCJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x3.c6().LK(D.dci,A.tL,!0),$async$fCJ)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fp(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i44(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fCJ,v)},
i44(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7G(d,new B.a_F(A.cS.gcw().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hX8(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7G(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c6.Ky(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7G(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hX8(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cwn().cIN(B.r9(d,A.hW,o,o),o,o,!1).cKw(0,"word/document.xml")
if(n==null)return""
w=n.cSw()
v=A.c6.Ky(0,w==null?$.hnI():w,!0).split("</w:p>")
u=new B.fe("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kV(0,r)
p=A.a.i(B.cF(q,new C.fp4(),B.a3(q).k("J.E"),t).fZ(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7G:function a7G(d,e,f){this.a=d
this.b=e
this.c=f},
fp4:function fp4(){},
hEI(d,e,f,g,h,i,j,k,l){return new C.NG(l,e,d,g,f,i,h,j,k,null)},
NG:function NG(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDO:function aDO(d,e,f,g,h,i,j,k,l){var _=this
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
_.bs$=k
_.a8$=l
_.c=_.a=null},
evN:function evN(d){this.a=d},
evL:function evL(){},
evM:function evM(d){this.a=d},
esa:function esa(){},
esb:function esb(){},
esc:function esc(d,e){this.a=d
this.b=e},
etL:function etL(d){this.a=d},
etz:function etz(){},
etA:function etA(){},
ery:function ery(){},
euT:function euT(d){this.a=d},
evJ:function evJ(d,e){this.a=d
this.b=e},
etJ:function etJ(d,e){this.a=d
this.b=e},
evw:function evw(d){this.a=d},
evx:function evx(){},
evy:function evy(){},
evz:function evz(d){this.a=d},
evA:function evA(){},
eqX:function eqX(d){this.a=d},
evK:function evK(){},
esS:function esS(d,e){this.a=d
this.b=e},
eqV:function eqV(d){this.a=d},
eqW:function eqW(d){this.a=d},
ete:function ete(d){this.a=d},
etf:function etf(d,e,f){this.a=d
this.b=e
this.c=f},
etg:function etg(d){this.a=d},
esR:function esR(){},
esQ:function esQ(d){this.a=d},
esO:function esO(){},
esN:function esN(d){this.a=d},
esP:function esP(){},
es6:function es6(d){this.a=d},
es7:function es7(d){this.a=d},
esY:function esY(d){this.a=d},
esT:function esT(d){this.a=d},
esU:function esU(d){this.a=d},
esV:function esV(d){this.a=d},
esW:function esW(d){this.a=d},
esX:function esX(d){this.a=d},
esZ:function esZ(d,e){this.a=d
this.b=e},
eqZ:function eqZ(){},
er_:function er_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et9:function et9(){},
eta:function eta(d,e){this.a=d
this.b=e},
et7:function et7(d,e,f){this.a=d
this.b=e
this.c=f},
et8:function et8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et1:function et1(d,e,f){this.a=d
this.b=e
this.c=f},
et2:function et2(d,e,f){this.a=d
this.b=e
this.c=f},
et3:function et3(d){this.a=d},
et4:function et4(d,e){this.a=d
this.b=e},
et5:function et5(d,e){this.a=d
this.b=e},
et6:function et6(d,e){this.a=d
this.b=e},
et0:function et0(d,e){this.a=d
this.b=e},
etc:function etc(d){this.a=d},
etd:function etd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etb:function etb(d){this.a=d},
etu:function etu(){},
etv:function etv(){},
etw:function etw(){},
etx:function etx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etr:function etr(d){this.a=d},
ett:function ett(){},
ets:function ets(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
etp:function etp(d,e,f){this.a=d
this.b=e
this.c=f},
etq:function etq(d,e){this.a=d
this.b=e},
ety:function ety(){},
et_:function et_(d,e){this.a=d
this.b=e},
erf:function erf(){},
erg:function erg(d,e,f){this.a=d
this.b=e
this.c=f},
erh:function erh(d){this.a=d},
eri:function eri(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ere:function ere(d){this.a=d},
etE:function etE(d){this.a=d},
etD:function etD(d,e){this.a=d
this.b=e},
etC:function etC(d,e){this.a=d
this.b=e},
etB:function etB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etF:function etF(d,e){this.a=d
this.b=e},
epU:function epU(d,e){this.a=d
this.b=e},
erd:function erd(d,e){this.a=d
this.b=e},
erb:function erb(d){this.a=d},
etN:function etN(d,e,f){this.a=d
this.b=e
this.c=f},
er7:function er7(d,e){this.a=d
this.b=e},
er6:function er6(d){this.a=d},
etM:function etM(d,e,f){this.a=d
this.b=e
this.c=f},
eqY:function eqY(d){this.a=d},
erz:function erz(){},
evu:function evu(d,e){this.a=d
this.b=e},
evv:function evv(d,e,f){this.a=d
this.b=e
this.c=f},
euU:function euU(d,e,f){this.a=d
this.b=e
this.c=f},
epV:function epV(d){this.a=d},
epS:function epS(d,e){this.a=d
this.b=e},
epI:function epI(d,e){this.a=d
this.b=e},
epF:function epF(d){this.a=d},
epE:function epE(d,e){this.a=d
this.b=e},
epG:function epG(d,e){this.a=d
this.b=e},
er9:function er9(d){this.a=d},
era:function era(d,e){this.a=d
this.b=e},
er8:function er8(d){this.a=d},
eqm:function eqm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eqn:function eqn(d,e){this.a=d
this.b=e},
eqr:function eqr(d,e){this.a=d
this.b=e},
eqs:function eqs(d){this.a=d},
eqp:function eqp(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqq:function eqq(d){this.a=d},
eqo:function eqo(){},
eql:function eql(d,e,f){this.a=d
this.b=e
this.c=f},
eto:function eto(d,e){this.a=d
this.b=e},
evD:function evD(d){this.a=d},
evE:function evE(d,e){this.a=d
this.b=e},
evF:function evF(d){this.a=d},
evG:function evG(d,e,f){this.a=d
this.b=e
this.c=f},
evC:function evC(d){this.a=d},
ev9:function ev9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev8:function ev8(d,e,f){this.a=d
this.b=e
this.c=f},
ev7:function ev7(){},
ev6:function ev6(d,e,f){this.a=d
this.b=e
this.c=f},
ev5:function ev5(d,e){this.a=d
this.b=e},
ev2:function ev2(d,e,f){this.a=d
this.b=e
this.c=f},
ev0:function ev0(d){this.a=d},
ev1:function ev1(d){this.a=d},
ev4:function ev4(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ev3:function ev3(d){this.a=d},
es2:function es2(d,e){this.a=d
this.b=e},
es1:function es1(d,e){this.a=d
this.b=e},
euV:function euV(){},
evt:function evt(d,e){this.a=d
this.b=e},
evr:function evr(d){this.a=d},
evs:function evs(d){this.a=d},
epN:function epN(d,e){this.a=d
this.b=e},
epL:function epL(d){this.a=d},
epM:function epM(d){this.a=d},
epO:function epO(d,e){this.a=d
this.b=e},
epP:function epP(d,e,f){this.a=d
this.b=e
this.c=f},
epT:function epT(d,e){this.a=d
this.b=e},
epK:function epK(d,e,f){this.a=d
this.b=e
this.c=f},
epJ:function epJ(d){this.a=d},
etK:function etK(d,e,f){this.a=d
this.b=e
this.c=f},
evB:function evB(d,e,f){this.a=d
this.b=e
this.c=f},
es5:function es5(d,e,f){this.a=d
this.b=e
this.c=f},
es4:function es4(){},
eqv:function eqv(d,e,f){this.a=d
this.b=e
this.c=f},
eqw:function eqw(d){this.a=d},
epH:function epH(d,e){this.a=d
this.b=e},
erx:function erx(d,e){this.a=d
this.b=e},
epQ:function epQ(d,e){this.a=d
this.b=e},
epZ:function epZ(d){this.a=d},
eq_:function eq_(d,e){this.a=d
this.b=e},
eq0:function eq0(d,e){this.a=d
this.b=e},
epY:function epY(d){this.a=d},
eqb:function eqb(d,e){this.a=d
this.b=e},
epX:function epX(d){this.a=d},
eqe:function eqe(d){this.a=d},
eqf:function eqf(d){this.a=d},
eqg:function eqg(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqi:function eqi(d){this.a=d},
eqj:function eqj(){},
eqk:function eqk(){},
eq1:function eq1(d){this.a=d},
eq2:function eq2(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq6:function eq6(d){this.a=d},
eq7:function eq7(d){this.a=d},
eq8:function eq8(d){this.a=d},
eq9:function eq9(d){this.a=d},
eqa:function eqa(d){this.a=d},
eqc:function eqc(d){this.a=d},
eqd:function eqd(d,e){this.a=d
this.b=e},
erw:function erw(d,e,f){this.a=d
this.b=e
this.c=f},
erv:function erv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eru:function eru(d,e,f){this.a=d
this.b=e
this.c=f},
ert:function ert(d,e){this.a=d
this.b=e},
epR:function epR(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
eqy:function eqy(d){this.a=d},
eqx:function eqx(d,e){this.a=d
this.b=e},
eqA:function eqA(d){this.a=d},
eqB:function eqB(d){this.a=d},
eqC:function eqC(d,e){this.a=d
this.b=e},
erc:function erc(d){this.a=d},
etn:function etn(d,e){this.a=d
this.b=e},
etm:function etm(d,e){this.a=d
this.b=e},
etl:function etl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etj:function etj(d){this.a=d},
etk:function etk(d,e){this.a=d
this.b=e},
eth:function eth(){},
eti:function eti(){},
euW:function euW(){},
euX:function euX(d,e){this.a=d
this.b=e},
euY:function euY(){},
euZ:function euZ(d){this.a=d},
ev_:function ev_(d,e){this.a=d
this.b=e},
epW:function epW(d,e){this.a=d
this.b=e},
er0:function er0(){},
er1:function er1(){},
er2:function er2(){},
er5:function er5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
er4:function er4(d,e){this.a=d
this.b=e},
er3:function er3(d,e,f){this.a=d
this.b=e
this.c=f},
esw:function esw(d){this.a=d},
esv:function esv(){},
esx:function esx(d,e){this.a=d
this.b=e},
esy:function esy(d,e){this.a=d
this.b=e},
esu:function esu(d){this.a=d},
esz:function esz(d,e){this.a=d
this.b=e},
est:function est(d){this.a=d},
esA:function esA(d,e){this.a=d
this.b=e},
ess:function ess(d){this.a=d},
esB:function esB(d,e){this.a=d
this.b=e},
esr:function esr(d){this.a=d},
esC:function esC(d,e){this.a=d
this.b=e},
esq:function esq(d,e){this.a=d
this.b=e},
esD:function esD(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esE:function esE(d,e){this.a=d
this.b=e},
eso:function eso(d){this.a=d},
esh:function esh(d,e){this.a=d
this.b=e},
esi:function esi(d){this.a=d},
esj:function esj(d){this.a=d},
esg:function esg(d){this.a=d},
esk:function esk(d,e){this.a=d
this.b=e},
esf:function esf(d){this.a=d},
esl:function esl(d,e){this.a=d
this.b=e},
ese:function ese(d){this.a=d},
esm:function esm(d,e){this.a=d
this.b=e},
esd:function esd(d){this.a=d},
esn:function esn(d){this.a=d},
erp:function erp(d){this.a=d},
erq:function erq(d){this.a=d},
ers:function ers(d){this.a=d},
erk:function erk(d){this.a=d},
erj:function erj(d,e){this.a=d
this.b=e},
erl:function erl(d,e){this.a=d
this.b=e},
erm:function erm(d){this.a=d},
ern:function ern(d){this.a=d},
ero:function ero(d,e){this.a=d
this.b=e},
err:function err(d){this.a=d},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
esH:function esH(d,e){this.a=d
this.b=e},
esG:function esG(d,e){this.a=d
this.b=e},
esF:function esF(d,e){this.a=d
this.b=e},
esI:function esI(d){this.a=d},
esJ:function esJ(d){this.a=d},
eu5:function eu5(d,e){this.a=d
this.b=e},
eu6:function eu6(d){this.a=d},
eu7:function eu7(d){this.a=d},
eui:function eui(d){this.a=d},
eut:function eut(d){this.a=d},
euE:function euE(d){this.a=d},
euL:function euL(d){this.a=d},
euM:function euM(d){this.a=d},
euN:function euN(d){this.a=d},
euO:function euO(d){this.a=d},
euP:function euP(d,e){this.a=d
this.b=e},
eu8:function eu8(d){this.a=d},
eu9:function eu9(d){this.a=d},
eua:function eua(d){this.a=d},
eub:function eub(d){this.a=d},
euc:function euc(d){this.a=d},
eud:function eud(d){this.a=d},
eue:function eue(d){this.a=d},
euf:function euf(d){this.a=d},
eug:function eug(d){this.a=d},
euh:function euh(d){this.a=d},
euj:function euj(d){this.a=d},
euk:function euk(d){this.a=d},
eul:function eul(d){this.a=d},
eum:function eum(d){this.a=d},
eun:function eun(d){this.a=d},
euo:function euo(d){this.a=d},
eup:function eup(d){this.a=d},
euq:function euq(d){this.a=d},
eur:function eur(d){this.a=d},
etW:function etW(d){this.a=d},
eus:function eus(d){this.a=d},
eu3:function eu3(d){this.a=d},
euu:function euu(d){this.a=d},
eu2:function eu2(d,e){this.a=d
this.b=e},
euv:function euv(d,e){this.a=d
this.b=e},
euw:function euw(d,e){this.a=d
this.b=e},
eu1:function eu1(d,e,f){this.a=d
this.b=e
this.c=f},
etS:function etS(d,e){this.a=d
this.b=e},
eu4:function eu4(d){this.a=d},
euQ:function euQ(d,e){this.a=d
this.b=e},
euS:function euS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euR:function euR(d,e){this.a=d
this.b=e},
eux:function eux(d,e,f){this.a=d
this.b=e
this.c=f},
eu0:function eu0(d,e,f){this.a=d
this.b=e
this.c=f},
etR:function etR(d,e,f){this.a=d
this.b=e
this.c=f},
etP:function etP(d,e){this.a=d
this.b=e},
euy:function euy(d,e){this.a=d
this.b=e},
eu_:function eu_(d,e){this.a=d
this.b=e},
etQ:function etQ(d,e){this.a=d
this.b=e},
etO:function etO(d,e){this.a=d
this.b=e},
euz:function euz(d){this.a=d},
etZ:function etZ(d){this.a=d},
euA:function euA(d){this.a=d},
euB:function euB(d){this.a=d},
euC:function euC(d){this.a=d},
euD:function euD(d){this.a=d},
etY:function etY(d){this.a=d},
euF:function euF(d){this.a=d},
euG:function euG(d){this.a=d},
euH:function euH(d,e){this.a=d
this.b=e},
etX:function etX(d){this.a=d},
euI:function euI(d,e){this.a=d
this.b=e},
etV:function etV(d){this.a=d},
euJ:function euJ(d,e){this.a=d
this.b=e},
etU:function etU(d){this.a=d},
euK:function euK(d,e){this.a=d
this.b=e},
etT:function etT(d){this.a=d},
equ:function equ(d,e,f){this.a=d
this.b=e
this.c=f},
eqt:function eqt(d,e){this.a=d
this.b=e},
evc:function evc(d,e){this.a=d
this.b=e},
evb:function evb(d,e){this.a=d
this.b=e},
evd:function evd(d,e){this.a=d
this.b=e},
eva:function eva(d,e){this.a=d
this.b=e},
erC:function erC(d,e){this.a=d
this.b=e},
erB:function erB(d){this.a=d},
erD:function erD(d,e){this.a=d
this.b=e},
erA:function erA(d){this.a=d},
es9:function es9(){},
es8:function es8(){},
evp:function evp(d){this.a=d},
evo:function evo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evn:function evn(d,e){this.a=d
this.b=e},
evi:function evi(d,e){this.a=d
this.b=e},
evm:function evm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evj:function evj(d,e){this.a=d
this.b=e},
eve:function eve(d){this.a=d},
evf:function evf(d){this.a=d},
evg:function evg(d){this.a=d},
evh:function evh(d){this.a=d},
evk:function evk(d,e){this.a=d
this.b=e},
evl:function evl(d,e){this.a=d
this.b=e},
evq:function evq(d){this.a=d},
eqU:function eqU(d){this.a=d},
eqT:function eqT(d,e,f){this.a=d
this.b=e
this.c=f},
eqS:function eqS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqH:function eqH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqK:function eqK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqG:function eqG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqL:function eqL(d,e){this.a=d
this.b=e},
eqN:function eqN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqM:function eqM(d,e){this.a=d
this.b=e},
eqO:function eqO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqF:function eqF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqP:function eqP(d,e){this.a=d
this.b=e},
eqE:function eqE(d,e){this.a=d
this.b=e},
eqQ:function eqQ(d,e){this.a=d
this.b=e},
eqD:function eqD(d){this.a=d},
eqR:function eqR(d,e){this.a=d
this.b=e},
esL:function esL(d){this.a=d},
esK:function esK(d){this.a=d},
esM:function esM(d,e){this.a=d
this.b=e},
erQ:function erQ(d,e){this.a=d
this.b=e},
erR:function erR(d,e){this.a=d
this.b=e},
erP:function erP(d,e){this.a=d
this.b=e},
erS:function erS(d,e){this.a=d
this.b=e},
erO:function erO(d,e){this.a=d
this.b=e},
erT:function erT(d,e){this.a=d
this.b=e},
erN:function erN(d,e){this.a=d
this.b=e},
erU:function erU(d,e){this.a=d
this.b=e},
erM:function erM(d,e){this.a=d
this.b=e},
erV:function erV(d,e){this.a=d
this.b=e},
erL:function erL(d,e){this.a=d
this.b=e},
erW:function erW(d,e,f){this.a=d
this.b=e
this.c=f},
erK:function erK(d,e){this.a=d
this.b=e},
erX:function erX(d,e,f){this.a=d
this.b=e
this.c=f},
erJ:function erJ(d,e){this.a=d
this.b=e},
erY:function erY(d,e){this.a=d
this.b=e},
erI:function erI(d,e,f){this.a=d
this.b=e
this.c=f},
erF:function erF(d,e){this.a=d
this.b=e},
erZ:function erZ(d,e){this.a=d
this.b=e},
erH:function erH(d,e){this.a=d
this.b=e},
es_:function es_(d,e){this.a=d
this.b=e},
erG:function erG(d,e,f){this.a=d
this.b=e
this.c=f},
erE:function erE(d,e){this.a=d
this.b=e},
es0:function es0(d,e){this.a=d
this.b=e},
es3:function es3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epD:function epD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etI:function etI(d,e){this.a=d
this.b=e},
etG:function etG(d){this.a=d},
etH:function etH(d,e){this.a=d
this.b=e},
aeO:function aeO(d,e,f){this.a=d
this.b=e
this.c=f},
ayk:function ayk(d,e){this.c=d
this.a=e},
bc2:function bc2(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b2$=e
_.c=_.a=null},
d_X:function d_X(d){this.a=d},
d_W:function d_W(d){this.a=d},
bcg:function bcg(d,e){this.c=d
this.a=e},
d0i:function d0i(d){this.a=d},
d0j:function d0j(d){this.a=d},
Jy:function Jy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bc1:function bc1(){this.d=!1
this.c=this.a=null},
d_U:function d_U(d){this.a=d},
d_Q:function d_Q(d){this.a=d},
d_V:function d_V(d){this.a=d},
d_P:function d_P(d){this.a=d},
d_T:function d_T(d){this.a=d},
d_R:function d_R(d){this.a=d},
d_S:function d_S(d,e){this.a=d
this.b=e},
Pl:function Pl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_8:function a_8(d,e,f){this.c=d
this.d=e
this.a=f},
aDR:function aDR(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bs$=e
_.a8$=f
_.c=_.a=null},
ewn:function ewn(){},
ewd:function ewd(d){this.a=d},
ewm:function ewm(d){this.a=d},
ewe:function ewe(d){this.a=d},
ewf:function ewf(d){this.a=d},
ew9:function ew9(d){this.a=d},
ewa:function ewa(d,e){this.a=d
this.b=e},
ewb:function ewb(d){this.a=d},
ewc:function ewc(d,e,f){this.a=d
this.b=e
this.c=f},
ewk:function ewk(){},
ewl:function ewl(d){this.a=d},
ewg:function ewg(d){this.a=d},
ewh:function ewh(d){this.a=d},
ewi:function ewi(d){this.a=d},
ewj:function ewj(d){this.a=d},
ewo:function ewo(d,e,f){this.a=d
this.b=e
this.c=f},
ewq:function ewq(d,e){this.a=d
this.b=e},
ewp:function ewp(d){this.a=d},
JF:function JF(d,e){this.c=d
this.a=e},
bqS:function bqS(d,e){this.b=d
this.a=e},
bgV:function bgV(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgU:function bgU(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJy:function aJy(){},
aLA:function aLA(){},
bwB:function bwB(){},
aLB:function aLB(){},
fED(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fED=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x3.c6().LK(B.a(["pdf"],x.s),A.tL,!0),$async$fED)
case 3:q=e
if(q==null||J.cn(q.a)){u=null
w=1
break}t=J.fp(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bo8(s,"data:application/pdf;base64,"+A.cS.gcw().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fED,v)},
i4F(d){var w,v,u,t,s,r
try{w=B.js(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kV(0,w).gM(0)
if(t>0){s=J.aQb(t,1,200)
return s}}catch(r){}return 1},
fEu(d){return C.i4E(d)},
i4E(d){var w=0,v=B.j(x.T),u
var $async$fEu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fEu,v)},
bCb(d,e,f,g){return C.i4O(d,e,f,g)},
i4O(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCb=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hm1(b9,new B.ar(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lO(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lO(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lO(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lO(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.qV()
f=B.Da(g,null)
a7=B.N()
a7.r=A.qJ.gp(0)
f.aY(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bP
b1.e=A.fB
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
b2.delete()}a0=a2}a3=g.pD()
w=7
return B.b(a3.zf(800,h),$async$bCb)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hr(A.fY),$async$bCb)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dD.gaM(a5))
a7=A.cS.gcw().aJ(a7)
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
return B.i($async$bCb,v)},
aPp(d,e,f){return C.i4C(d,e,f)},
i4C(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPp=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.az:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahe(d,e,f,new C.fEs(r,q),q,"Sign document"),$async$aPp)
case 3:if(!new B.e9(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCb(q,t,r.b,r.c),$async$aPp)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0x(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPp,v)},
i4M(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hfe(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hfe(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b3(A.a.aT(A.o.fT(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b3(A.a.aT(A.o.fT(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lu&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.heR(q.ay)+";border:2px solid "+C.heR(q.ch)+'"></div>'
break
case 5:l=C.fZo(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaj8()
if(p==null)p=A.awN
n=B.U(p)
k=n.k("nj<1>")
j=new B.nj(p,0,8,k)
j.zE(p,0,8,n.c)
j=new B.bS(j,j.gM(0),k.k("bS<ak.E>"))
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
heR(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
hfe(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bC9(d,e){var w=0,v=B.j(x.H)
var $async$bC9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fEB(e,C.i4M(e),d),d,null,!0,!0,x.H),$async$bC9)
case 2:return B.h(null,v)}})
return B.i($async$bC9,v)},
bCa(){var w=0,v=B.j(x.T),u,t,s
var $async$bCa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gr(92,2400),$async$bCa)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fEu(s),$async$bCa)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCa,v)},
aPq(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h_C(d),$async$aPq)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fGZ(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPq,v)},
h99(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0x:function b0x(d,e,f){this.a=d
this.b=e
this.c=f},
fEs:function fEs(d,e){this.a=d
this.b=e},
fEB:function fEB(d,e,f){this.a=d
this.b=e
this.c=f},
fEy:function fEy(d){this.a=d},
fEz:function fEz(d,e,f){this.a=d
this.b=e
this.c=f},
fEA:function fEA(d,e,f){this.a=d
this.b=e
this.c=f},
i4D(d){return C.kv(d.w)},
i4K(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.i6u()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
ys(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hrJ()
if(w.b.test(u))return u
return null},
hm3(d,e,f){var w,v,u=C.hAk(d),t=$.pr()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aC(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i4Q(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f6(w,d.b);v.C();){u=w.gR(w).y
t=C.ys(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fEq(d,e){var w,v=d.y,u=C.ys(v==null?"":v)
if(u!=null)return d.y=u
w=C.i4Q(new B.a1(e,new C.fEr(d),B.U(e).k("a1<1>")))
v=d.x
return d.y=C.hm3(v==null?"":v,null,w)},
i4P(d){var w,v
if(d.length!==1)return null
w=A.d.gK(d)
if(!C.kv(w.w))return null
v=w.y
return C.ys(v==null?"":v)},
hEK(){var w,v=$.pr(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aC(32)]
return"SL"+A.d.fZ(u)},
VG(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VG)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f3("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bH),$async$VG)
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
return B.i($async$VG,v)},
VH(d){return C.hEL(d)},
hEL(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VH)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hE("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cH,null),$async$VH)
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
return B.i($async$VH,v)},
a7I(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7I=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7I)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VG(),$async$a7I)
case 4:s=a6
r=C.ys(a2==null?"":a2)
if(r==null)r=a3!=null?C.hm3(a3,null,A.Iq):null
q=x.N
p=B.aX(q)
for(o=J.dm(s),n=J.aV(o.gi5(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.ys(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdK(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gR(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dJ.aJ(t)
g.n(0,"payload",A.cS.gcw().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.SH.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.ys(J.k(q==null?"":q))
if(f==null)f=C.h9e(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VH(s),$async$a7I)
case 7:u=new B.aFh(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hEK()
n=r==null
d=n?C.h9e(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cS.gcw().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.SH.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VH(s),$async$a7I)
case 8:u=new B.aFh(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7I,v)},
h9e(d){var w,v,u=$.pr()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aC(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aqJ(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqJ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqJ)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VG(),$async$aqJ)
case 6:t=f
s=J.a6(t)
r=s.gM(t)
s.bo(t,new C.cdI(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VH(t),$async$aqJ)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqJ,v)},
aqI(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.ys(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqI)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VG(),$async$aqI)
case 6:t=o.jy(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.ys(J.k(q==null?"":q))===p){u=C.a7H(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqI,v)},
a7H(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7H=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7H)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VG(),$async$a7H)
case 6:p=a1
o=J.a6(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a6(n)
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
try{s=A.c6.ca(0,A.cG.aJ(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.SH.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aH(0,s,null)
if(m.b(r)){q=B.a2(r,x.N,x.z)
J.aF(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dW(B.a2(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.VH(p),$async$a7H)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7H,v)},
i4J(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("L<1,a4<n,@>>")
w=B.C(new B.L(d,new C.fEx(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fEF(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.R.ao(w,null)}return A.R.ao(C.i4J(d==null?B.a([],x.D):d,f,g),null)},
fEE(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fEE=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7I(h,d,e,f,g),$async$fEE)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.ys(e==null?"":e)
u=new B.aF4(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.kc.gcw().aJ(t)
u=new B.aF4(C.ys(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fEE,v)},
h_E(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d_(q,"NGMYSLIDESYNC2|"))return!0
if(J.d_(q,"NGMYSLIDECODE|"))return!0
if(J.d_(q,"NGMY_SL:"))return!0
if(J.f0(q,s)||J.f0(q,r))return!0
if(J.d_(q,"{"))try{w=A.R.aH(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i4N(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h_E(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b3(v,u))
if(C.h_E(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b3(v,s))
if(C.h_E(t))return t}}return null},
fEt(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d_(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d_(t,"NGMY_SL:"))w=v.a(A.R.aH(0,A.c6.ca(0,A.cG.aJ(J.mF(t,8))),null))
else w=v.a(A.R.aH(0,t,null))
v=C.hOv(w)
return v}catch(u){v=B.a([],x.D)
return v}},
agZ(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$agZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqI(t[1]),$async$agZ)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fEt(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.ys(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqI(r),$async$agZ)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fEt(s)
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
return B.b(C.a7H(t[1]),$async$agZ)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fEt(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fEt(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agZ,v)},
hOv(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.SH.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h_B(C.VC(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cF(t,new C.fcq(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
h_B(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cD())
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
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.VC(B.a2(o,x.N,x.z))
if(e&&C.kv(p.w))p.Q=new B.S(Date.now(),0,!1).a6().bQ(144e8).ac()
return p},
bBV(){var w=0,v=B.j(x.aT),u,t,s
var $async$bBV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gq(),$async$bBV)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.agZ(s),$async$bBV)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBV,v)},
fNi(d){var w=0,v=B.j(x.T),u,t
var $async$fNi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hT(D.Wo,!0,"Dismiss",d,new C.fNj(),new C.fNk(),A.F3,!0,x.N),$async$fNi)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.T(D.eSM)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNi,v)},
i8B(d,e,f,g,h){return B.a5(d,!1).c5(B.e8(new C.fNl(h,e,g,f),!0,null,x.H))},
fEr:function fEr(d){this.a=d},
cdI:function cdI(d){this.a=d},
fEx:function fEx(){},
fcq:function fcq(d){this.a=d},
fNj:function fNj(){},
fNk:function fNk(){},
fNl:function fNl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
VE:function VE(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDP:function aDP(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
evU:function evU(){},
evQ:function evQ(d,e){this.a=d
this.b=e},
evT:function evT(d,e){this.a=d
this.b=e},
evR:function evR(d){this.a=d},
evS:function evS(d){this.a=d},
evV:function evV(d){this.a=d},
evW:function evW(d){this.a=d},
evZ:function evZ(d){this.a=d},
ew_:function ew_(d){this.a=d},
evY:function evY(d){this.a=d},
ew0:function ew0(d){this.a=d},
evX:function evX(d){this.a=d},
ew1:function ew1(d,e){this.a=d
this.b=e},
evP:function evP(d,e){this.a=d
this.b=e},
evO:function evO(d,e){this.a=d
this.b=e},
VF:function VF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjN:function bjN(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ew2:function ew2(d,e){this.a=d
this.b=e},
ew3:function ew3(d){this.a=d},
ew4:function ew4(){},
ew5:function ew5(d){this.a=d},
ew6:function ew6(d,e){this.a=d
this.b=e},
aDM:function aDM(d){this.a=d},
aDN:function aDN(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
epx:function epx(d){this.a=d},
epw:function epw(){},
epy:function epy(d){this.a=d},
ept:function ept(d){this.a=d},
eps:function eps(){},
epu:function epu(d){this.a=d},
epv:function epv(d){this.a=d},
bu7:function bu7(){},
aqK:function aqK(d){this.a=d},
aDQ:function aDQ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ew8:function ew8(d){this.a=d},
ew7:function ew7(d){this.a=d},
hTF(){var w,v,u,t
for(v=0;v<4;++v){w=D.d1q[v]
try{if(Ac.bWl(w)){u=w
return u}}catch(t){}}return null},
QR(d,e){return C.i1u(d,e)},
i1u(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QR=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hTF()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oa?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qt(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gK(c3)
b9=$.aw()
o=new B.eS(b8,b9)
n=new B.eS("Getting ready\u2026",b9)
m=new B.eS(0,b9)
l=B.oi(new C.fyM(c2,b7,o),!1,!1)
b6.lO(0,l)
b9=x.H
B.ca(null,A.d9,!1,null,new C.fyN(n,m),c6,null,!0,!0,b9)
k=new C.fyR(b7)
j=new C.fyS()
i=null
t=4
b3=c2.a
h=Aj.aRG(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fQ0(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWz(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Hp.yi(i,"dataavailable",new C.fyO(e))
d=new B.bX(new B.bg($.bz,x.dT),x.b2)
A.Hp.yi(i,"stop",new C.fyP(d))
J.ahA(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QR)
case 8:w=7
return B.b(c5.$1(d0),$async$QR)
case 7:a0=d0
J.fQ2(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahA(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ahA(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QR)
case 15:w=14
return B.b(c5.$1(d0),$async$QR)
case 14:a0=d0
case 13:J.fQ2(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahA(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bQ(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcz()
else b3=!0
if(!b3){w=17
break}J.fQ2(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fq,null,b9),$async$QR)
case 18:w=16
break
case 17:J.ahA(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahA(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nU),$async$QR)
case 19:a5=A.d.gK(q.split(";"))
a6=B.hO(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.A(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.n5(a7)
c0.download=B.t(J.ad(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.L4(b0)
J.lU(b0)
B.bN(A.nT,new C.fyQ(a7),b9)
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
J.lU(l)
if(p.px())p.eK()
c3=o
b3=$.aw()
c3.shX(b3)
J.aQf(c3,0)
c3=n
c3.shX(b3)
J.aQf(c3,0)
c3=m
c3.shX(b3)
J.aQf(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QR,v)},
fyM:function fyM(d,e,f){this.a=d
this.b=e
this.c=f},
fyL:function fyL(){},
fyN:function fyN(d,e){this.a=d
this.b=e},
fyR:function fyR(d){this.a=d},
fyS:function fyS(){},
fyO:function fyO(d){this.a=d},
fyP:function fyP(d){this.a=d},
fyQ:function fyQ(d){this.a=d},
buj:function buj(d,e,f){this.c=d
this.d=e
this.a=f},
f6J:function f6J(){},
f6K:function f6K(){},
ce4(d){var w=0,v=B.j(x.at),u,t,s
var $async$ce4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqU(d,A.zc),$async$ce4)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bB(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ce4,v)},
ce3(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7o:function a7o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjw:function bjw(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
edH:function edH(d){this.a=d},
edF:function edF(d){this.a=d},
edG:function edG(d,e){this.a=d
this.b=e},
a8g:function a8g(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.os$=k
_.ot$=l
_.ou$=m
_.nN$=n},
a8h:function a8h(d,e){this.a=d
this.b=e},
b2a:function b2a(){},
cgg:function cgg(){},
cgh:function cgh(){},
cgi:function cgi(d,e,f,g,h,i,j,k,l){var _=this
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
hsJ(d){return new C.ahS(d)},
a2t:function a2t(){},
ahS:function ahS(d){this.a=d},
aQA:function aQA(){},
awc:function awc(d,e){this.d=d
this.b=e
this.a=null},
aS4:function aS4(d){this.b=d
this.a=null},
ftV(d,e){var w=0,v=B.j(x.H)
var $async$ftV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxv().Lt(d,e),$async$ftV)
case 2:B.fH4()
return B.h(null,v)}})
return B.i($async$ftV,v)},
hjl(d,e){return(A.ri[(d^e)&255]^A.o.aA(d,8))>>>0},
fro(d,e,f,g,h,i){var w=C.hYQ(d,A.dc,f,null,A.cX,g,h,i)
return w},
hlc(d){var w=F.hlV(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hAk(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.p0.h(0,w)
if(v!=null)return v
for(u=A.p0.gdK(A.p0),u=u.gaf(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hlk(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<44;++w)v+="- "+D.cno[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bA3(d,e){return C.hVr(d,e)},
hVr(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bA3=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hO([d],"application/pdf")
n=x.z
q=B.aTJ(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cB(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.jZ(o,"share",[p]),x.H),$async$bA3)
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
return B.i($async$bA3,v)},
h_v(){var w=0,v=B.j(x.y),u,t,s
var $async$h_v=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fjG
s=$.bzB
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bA3(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_v,v)},
bBq(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fjG
l=$.bzB
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hfV()?3:4
break
case 3:w=5
return B.b(C.bA3(m,k),$async$bBq)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzC
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
J.L4(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bBq)
case 10:J.lU(q)
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
return B.i($async$bBq,v)},
h_m(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h_m=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzC
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.ly.uF(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h_m,v)},
h_D(d,e){var w=0,v=B.j(x.H),u,t
var $async$h_D=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hO([d],"text/html"))
t.toString
u=window
u.toString
A.ly.uF(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h_D,v)},
b17(d,e){var w=0,v=B.j(x.y),u
var $async$b17=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b19(d,e),$async$b17)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b18(d),$async$b17)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b17,v)}},D,H,I,Am,A8,X,V,An,G,F,E,W,Q,Y,Z,Ao,Ap,A9,L,Aq,A_,O,A0,Aa,M,Ab,Ar,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,K,Az,S,T,AA,N,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[194]
A5=c[66]
Ai=c[49]
A6=c[159]
Aj=c[57]
U=c[209]
A7=c[52]
Ak=c[136]
Al=c[219]
C=a.updateHolder(c[4],C)
D=c[207]
H=c[91]
I=c[124]
Am=c[36]
A8=c[211]
X=c[208]
V=c[197]
An=c[118]
G=c[178]
F=c[31]
E=c[210]
W=c[120]
Q=c[138]
Y=c[29]
Z=c[166]
Ao=c[221]
Ap=c[174]
A9=c[108]
L=c[212]
Aq=c[117]
A_=c[60]
O=c[188]
A0=c[75]
Aa=c[99]
M=c[147]
Ab=c[98]
Ar=c[89]
As=c[214]
P=c[112]
A1=c[127]
At=c[87]
Au=c[122]
Ac=c[53]
Ad=c[184]
Av=c[35]
Ae=c[73]
Af=c[137]
Ag=c[218]
Aw=c[220]
Ax=c[217]
R=c[67]
Ay=c[215]
K=c[163]
Az=c[175]
S=c[47]
T=c[213]
AA=c[222]
N=c[195]
A2=c[216]
A3=c[105]
A4=c[56]
C.nR.prototype={
v_(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tI(t,v)
return new C.nR(t===0?!1:w,v,t)},
bKw(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CP()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tI(w,u)
return new C.nR(r===0?!1:s,u,r)},
bL0(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CP()
w=o-d
if(w<=0)return p.a?$.h1_():$.CP()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tI(w,u)
q=new C.nR(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aB(0,$.a2g())
return q},
dV(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.E(e,16)===0)return r.bKw(v)
u=w+v+1
t=new Uint16Array(u)
C.hcv(r.b,w,e,t)
w=r.a
s=C.tI(u,t)
return new C.nR(s===0?!1:w,t,s)},
mq(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.E(e,16)
if(u===0)return n.bL0(v)
t=w-v
if(t<=0)return n.a?$.h1_():$.CP()
s=n.b
r=new Uint16Array(t)
C.hKp(s,w,e,r)
w=n.a
q=C.tI(t,r)
p=new C.nR(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dV(1,u)-1)!==0)return p.aB(0,$.a2g())
for(o=0;o<v;++o)if(s[o]!==0)return p.aB(0,$.a2g())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cEd(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7A(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7A(t,e)
if(s===0)return $.CP()
if(r===0)return t.a===e?t:t.v_(0)
w=s+1
v=new Uint16Array(w)
C.hKn(t.b,s,d.b,r,v)
u=C.tI(w,v)
return new C.nR(u===0?!1:e,v,u)},
H4(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CP()
w=d.c
if(w===0)return t.a===e?t:t.v_(0)
v=new Uint16Array(s)
C.b9f(t.b,s,d.b,w,v)
u=C.tI(s,v)
return new C.nR(u===0?!1:e,v,u)},
bxx(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tI(r,u)
return new C.nR(!1,u,s)},
bxw(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tI(u,r)
return new C.nR(!1,r,v)},
bxy(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tI(p,m)
return new C.nR(s!==0,m,s)},
Un(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CP()
w=t.a
if(w===e.a){if(w){w=$.a2g()
return t.H4(w,!0).bxy(e.H4(w,!0),!0).a7A(w,!0)}return t.bxx(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bxw(v.H4($.a2g(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7A(e,v)
if(C.cEd(u.b,t,e.b,w)>=0)return u.H4(e,v)
return e.H4(u,!v)},
aB(d,e){var w,v,u=this,t=u.c
if(t===0)return e.v_(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7A(e,v)
if(C.cEd(u.b,t,e.b,w)>=0)return u.H4(e,v)
return e.H4(u,!v)},
aG(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CP()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hcw(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tI(w,t)
return new C.nR(q===0?!1:r,t,q)},
bKv(d){var w,v,u,t
if(this.c<d.c)return $.CP()
this.aQw(d)
w=$.fVu.c6()-$.awW.c6()
v=C.fVw($.fVt.c6(),$.awW.c6(),$.fVu.c6(),w)
u=C.tI(w,v)
t=new C.nR(!1,v,u)
return this.a!==d.a&&u>0?t.v_(0):t},
cms(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQw(d)
w=C.fVw($.fVt.c6(),0,$.awW.c6(),$.awW.c6())
v=C.tI($.awW.c6(),w)
u=new C.nR(!1,w,v)
if($.fVv.c6()>0)u=u.mq(0,$.fVv.c6())
return t.a&&u.c>0?u.v_(0):u},
aQw(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hcs&&d.c===$.hcu&&g.b===$.hcr&&d.b===$.hct)return
w=d.b
v=d.c
u=16-A.o.gajx(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hcq(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hcq(g.b,f,u,r)}else{r=C.fVw(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fVx(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cEd(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9f(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9f(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hKo(p,r,i);--o
C.hcw(h,j,0,r,o,s)
if(r[i]<h){m=C.fVx(j,s,o,n)
C.b9f(r,l,n,m,r)
while(--h,r[i]<h)C.b9f(r,l,n,m,r)}--i}$.hcr=g.b
$.hcs=f
$.hct=w
$.hcu=v
$.fVt.b=r
$.fVu.b=l
$.awW.b=s
$.fVv.b=u},
gX(d){var w,v,u,t=new C.cEe(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cEf().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nR&&this.aL(0,e)===0},
t8(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uT(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajx(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cEg(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cEh(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l6(A.aH.gaM(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.v_(0):r
while(v.c>1){u=$.hpF()
if(u.c===0)B.b9(D.b2B)
t=v.cms(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bKv(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).fZ(0)},
$iaRj:1,
$ihI:1}
C.aQK.prototype={
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
cKw(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gK(d){return A.d.gK(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gco(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.k2(w,w.length,B.U(w).k("k2<1>"))}}
C.Rt.prototype={
cSw(){var w,v
if(this.as==null)this.bbB()
w=this.as
v=w==null?null:w.aoe()
return v==null?null:v.eG()},
bbB(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aoe().eG()
this.as=new C.bNh(v)}},
gZ(d){return this.at}}
C.a3s.prototype={
a5(){return"CompressionType."+this.b}}
C.bH_.prototype={
es(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dV(v,u)+(s.b&A.yM[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dV(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fF(u,t)&A.yM[d])
s.c=t}return v}}
C.bFm.prototype={
cIM(d,e){var w,v,u,t,s,r=this,q=new C.bH_(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.es(8)!==66||q.es(8)!==90||q.es(8)!==104)return!1
w=r.a=q.es(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.ckJ(q)
if(t<0)return!1
if(t===0){q.es(8)
q.es(8)
q.es(8)
q.es(8)
s=r.ckM(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.es(8)
q.es(8)
q.es(8)
q.es(8)
return!0}}return!0},
ckJ(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.es(8)
if(t!==D.dhn[u])v=!1
if(t!==D.cW0[u])w=!1
if(!w&&!v)return-1}return v?0:2},
ckM(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.es(1),d2=((d3.es(8)<<8|d3.es(8))<<8|d3.es(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.es(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.es(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c01()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.es(3)
if(q<2||q>6)return-1
v=d3.es(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.es(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hnM(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.es(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.es(1)===0)break
i=d3.es(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hnL()
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
if(f<h)h=f}c9.bWt(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.at2(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.at2(d3)}while(a3===0||a3===1);++a5
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
a3=c9.at2(d3)
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
d4.bH(c3)
c1=(c1<<8^D.GU[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GW[b9];++b9
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
if(b8===0){b8=D.GW[b9];++b9
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
if(b8===0){b8=D.GW[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GW[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GW[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bH(c3)
c1=c1<<8^D.GU[c1>>>24&255^v];--c2}d4.bH(c3)
c1=(c1<<8^D.GU[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bH(c7)
c1=(c1<<8^D.GU[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bH(c7)
c1=(c1<<8^D.GU[c1>>>24&255^c7&255])>>>0
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
at2(d){var w,v,u,t,s=this,r=s.ay
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
t=d.es(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.es(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bWt(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c01(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cwo.prototype={
aGY(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bNL(e)
if(q<0)return
e.c=q
if(e.aK()!==101010256)return
e.aU()
e.aU()
e.aU()
e.aU()
r.f=e.aK()
r.r=e.aK()
w=e.aU()
if(w>0)e.aH0(w,!1)
r.cl6(e)
q=r.r
v=r.f
u=e.aK_(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b7W()
s.cSv(0,u,e,f)
q.push(s)}},
cl6(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7d(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rX()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rX()
d.aU()
d.aU()
d.aK()
d.aK()
d.rX()
d.rX()
u=d.rX()
t=d.rX()
this.f=u
this.r=t
d.c=s},
bNL(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7d(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alp(A.hW)
o.aLg(r.eG(),A.hW,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cwm.prototype={}
C.awA.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cwp.prototype={
aGY(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aDh.h(0,e.aU())
o.c=w==null?D.Ls:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.an2(v)
o.y=e.he(u).eG()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aTG:D.Dr
o.ay=f
o.Q=e.he(t)
if(o.at!==D.Dr&&u>2){w=o.y
w.toString
s=B.r9(w,A.hW,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.an2(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aTH
o.ax=new C.cwm(r,q)
w=D.aDh.h(0,q)
o.c=w==null?D.Ls:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bl7().length},
aoe(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r9(new Uint8Array(0),A.hW,q,q)
w=r.at
if(w!==D.Dr)if(p.gM(0)<=0)r.at=D.Dr
else{if(w===D.aTG){p=r.bIO(p)
r.Q=p}else if(w===D.aTH){p=r.bIr(p)
r.Q=p}r.at=D.Dr}w=r.c
if(w===D.afR){v=p.c
u=B.dk()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.po.Bn(p.eG(),!0,!1)
else{t=B.a85(A.hW,r.w)
p=r.Q
p.toString
A.po.a3p(p,t,!0,!1)
u.b=t.GF()}r.Q.c=v
return B.r9(u.bg(),A.hW,q,q)}else if(w===D.afS){s=B.a85(A.hW,32768)
p=r.Q
v=p.c
C.hsU().cIM(p,s)
u=s.GF()
r.Q.c=v
return B.r9(u,A.hW,q,q)}else return B.r9(p.eG(),A.hW,q,q)},
bl7(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eG()},
u(d){return this.x},
b7v(d){var w=this.ch,v=C.Ju(C.hjl(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Un(0,C.Ju(255)))
w[1]=v
w[1]=v.aG(0,C.Ju(134775813)).ad(0,C.Ju(1)).Un(0,C.Ju(4294967295))
w[2]=C.Ju(C.hjl(w[2].N(0),w[1].mq(0,24).N(0)))},
aPV(){var w=(this.ch[2].Un(0,C.Ju(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bIO(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r9(new Uint8Array(0),A.hW,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b7v(u[v.c++]^r.aPV())}t=r.Q.eG()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPV()
r.b7v(s)
u&2&&B.aj(t)
t[w]=s}return B.r9(t,A.hW,q,q)},
bIr(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.he(8).eG()
v=16}else if(k===2){w=d.he(12).eG()
v=24}else{w=d.he(16).eG()
v=32}u=d.he(2).eG()
t=d.he(d.gM(0)-10)
s=d.he(10)
r=t.eG()
k=this.ay
k.toString
q=C.hK4(k,w,v)
p=new Uint8Array(B.ce(A.aH.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aH.dq(q,v,k)))
if(!C.hbV(A.aH.dq(q,k,k+2),u))throw B.V(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bDX(k,new Uint8Array(16),p)
k=x.S
m=J.a4S(0,k)
m=n.r=new C.cg5(m)
m.c=!0
m.b=m.bkq(!0,new C.ash(p))
if(m.c)m.d=B.bn(D.o7,!0,k)
else m.d=B.bn(D.yE,!0,k)
l=C.ha7(C.ha9(),64)
l.bdW(new C.ash(o))
n.w=l
n.cS4(r,0,r.length)
k=s.eG()
m=n.x
m===$&&B.c()
if(!C.hbV(k,m))throw B.V(B.fm("macs don't match"))
return B.r9(r,A.hW,null,null)}}
C.b7W.prototype={
cSv(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.aU()
e.aU()
e.aU()
e.aU()
e.aU()
e.aU()
e.aK()
n.w=e.aK()
n.x=e.aK()
w=e.aU()
v=e.aU()
u=e.aU()
n.y=e.aU()
e.aU()
n.Q=e.aK()
n.as=e.aK()
if(w>0)n.at=e.an2(w)
if(v>0){t=e.he(v).eG()
n.ax=t
if(v>=4){s=B.r9(t,A.hW,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a7d(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rX()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rX()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rX()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.an2(u)
f.c=n.as
t=new C.cwp(D.Ls,n,D.Dr,B.a([C.Ju(0),C.Ju(0),C.Ju(0)],x.f3))
n.ch=t
t.aGY(0,f,g)},
u(d){return this.at}}
C.cwn.prototype={
cIN(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cwo(B.a([],x.fT))
this.a=g
g.aGY(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQK(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Rt(o,A.o.an(Date.now(),1000),0):C.h2n(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h2n(o,q.w,q)
if(k.as==null)k.bbB()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alp(A.hW)
j.aLg(o,A.hW,h,h)}i=j==null?h:j.eG()
if(i!=null)new B.FP(!1).Dl(i,0,h,!0)}}return v}}
C.bDX.prototype={
cS4(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Ci(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hsD(u,m.a)
q=m.r
if(16>u.byteLength)B.b9(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.b9(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bM6(u,0,w,0,o)}else{o===$&&B.c()
q.bIS(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KP(w,0)
m.x=A.aH.dq(m.x,0,10)
w=m.w
l=w.a
l.ly(0)
w=w.d
w===$&&B.c()
l.Ci(0,w,0,w.length)
return f}}
C.cga.prototype={}
C.cge.prototype={}
C.cg8.prototype={}
C.ash.prototype={}
C.cgd.prototype={
cJ1(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e4(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bdW(new C.ash(A.aH.fM(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bN6(n.a,n.b,t,s,r)
r+=v}A.aH.hg(f,g,g+w,s)
return o.a.c},
bN6(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Ci(0,d,0,d.length)
v.Ci(0,f,0,4)
u=m.c
u===$&&B.c()
w.KP(u,0)
u=m.c
A.aH.hg(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Ci(0,s,0,s.length)
w.KP(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cg9.prototype={}
C.cg7.prototype={}
C.asi.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.asi){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
t8(d,e){var w=this.a
w===$&&B.c()
w=A.o.t8(w,e.gbWK())
if(!w)e.gbWK()
return w},
aJr(d,e){this.a=0
this.b=d},
td(d){return this.aJr(d,null)},
aK2(d){var w,v=this,u=v.b
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
w.b_g(v,u)
u=w.b
u===$&&B.c()
w.b_g(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_g(d,e){var w,v=A.o.fT(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cgc.prototype={
ly(d){var w,v=this
v.a.td(0)
v.c=0
A.aH.h1(v.b,0,4,0)
v.w=0
w=v.r
A.d.h1(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
anJ(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b0L(u,0)
v.c=0}v.a.aK2(1)},
Ci(d,e,f,g){var w=this.cjv(e,f,g)
f+=w
g-=w
w=this.cjw(e,f,g)
this.cjm(e,f+w,g-w)},
KP(d,e){var w,v=this,u=C.ha8(v.a),t=u.a
t===$&&B.c()
t=C.h06(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h06(w,3)
v.cjq()
v.cjn(u)
v.arU()
v.cdA(d,e)
v.ly(0)
return 20},
b0L(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o0(A.aH.gaM(d),d.byteOffset,d.length).getUint32(e,A.i7===w.d)
if(w.w===16)w.arU()},
arU(){this.cS3()
this.w=0
A.d.h1(this.r,0,16,0)},
cjm(d,e,f){while(f>0){this.anJ(d[e]);++e;--f}},
cjw(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b0L(d,e)
e+=4
f-=4
w.aK2(4)
v+=4}return v},
cjv(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anJ(d[e]);++e;--f;++v}return v},
cjq(){this.anJ(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anJ(0)}},
cjn(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.arU()
u=v.d
switch(u){case A.i7:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.DS:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
cdA(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i7===this.d,s=0;s<w;++s){r=v[s]
q=J.o0(A.aH.gaM(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cgf.prototype={
cS3(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.q5[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.q5[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.q5[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q5[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.q5[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q5[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.q5[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q5[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.q5[30]
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
C.cgb.prototype={
bdW(d){var w,v,u,t,s=this,r=s.a
r.ly(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Ci(0,w,0,v)
w=s.d
w===$&&B.c()
r.KP(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hg(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.h1(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hg(w,0,u,s.d)
s.b8E(s.d,u,54)
s.b8E(s.e,u,92)
u=s.d
r.Ci(0,u,0,u.length)},
KP(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KP(s,w)
s=u.e
t.Ci(0,s,0,s.length)
v=t.KP(d,e)
s=u.e
A.aH.h1(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Ci(0,s,0,s.length)
return v},
b8E(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cg6.prototype={}
C.cg5.prototype={
a1M(d){return(D.o7[d&255]&255|(D.o7[d>>>8&255]&255)<<8|(D.o7[d>>>16&255]&255)<<16|D.o7[d>>>24&255]<<24)>>>0},
bkq(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.o0(A.aH.gaM(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1M((m>>>8|(m&$.q5[24])<<24)>>>0)^D.cyh[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.o0(A.aH.gaM(e),e.byteOffset,w)
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
p=(p^f.a1M((k>>>8|(k&$.q5[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1M((k>>>8|(k&$.q5[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.o0(A.aH.gaM(e),e.byteOffset,w)
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
p=(p^f.a1M((g>>>8|(g&$.q5[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1M(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bM6(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o0(A.aH.gaM(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e8[a8&255]
u=D.e8[a9>>>8&255]
t=$.q5[8]
s=D.e8[b0>>>16&255]
r=$.q5[16]
q=D.e8[b1>>>24&255]
p=$.q5[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e8[a8&255]^C.np(D.e8[a9>>>8&255],24)^C.np(D.e8[b0>>>16&255],16)^C.np(D.e8[b1>>>24&255],8)^b6[w][0]
m=D.e8[a9&255]^C.np(D.e8[b0>>>8&255],24)^C.np(D.e8[b1>>>16&255],16)^C.np(D.e8[a8>>>24&255],8)^b6[w][1]
l=D.e8[b0&255]^C.np(D.e8[b1>>>8&255],24)^C.np(D.e8[a8>>>16&255],16)^C.np(D.e8[a9>>>24&255],8)^b6[w][2]
b1=D.e8[b1&255]^C.np(D.e8[a8>>>8&255],24)^C.np(D.e8[a9>>>16&255],16)^C.np(D.e8[b0>>>24&255],8)^b6[w][3]
a7=D.o7[n&255]
b0=D.o7[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.o7[l>>>8&255]
a9=D.o7[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.o7[b1>>>8&255]
h=D.o7[n>>>16&255]
g=D.o7[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.o7[l>>>24&255]
s=s[3]
a1=J.o0(A.aH.gaM(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.o0(A.aH.gaM(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.o0(A.aH.gaM(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.o0(A.aH.gaM(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bIS(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o0(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o0(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o0(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o0(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e7[a6&255]
v=D.e7[b0>>>8&255]
u=$.q5[8]
t=D.e7[a5>>>16&255]
s=$.q5[16]
r=D.e7[a4>>>24&255]
q=$.q5[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e7[a6&255]^C.np(D.e7[b0>>>8&255],24)^C.np(D.e7[a5>>>16&255],16)^C.np(D.e7[a4>>>24&255],8)^b5[a9][0]
o=D.e7[a4&255]^C.np(D.e7[a6>>>8&255],24)^C.np(D.e7[b0>>>16&255],16)^C.np(D.e7[a5>>>24&255],8)^b5[a9][1]
n=D.e7[a5&255]^C.np(D.e7[a4>>>8&255],24)^C.np(D.e7[a6>>>16&255],16)^C.np(D.e7[b0>>>24&255],8)^b5[a9][2]
b0=D.e7[b0&255]^C.np(D.e7[a5>>>8&255],24)^C.np(D.e7[a4>>>16&255],16)^C.np(D.e7[a6>>>24&255],8)^b5[a9][3]
a4=D.yE[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yE[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yE[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yE[o>>>8&255]
i=D.yE[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yE[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.o0(A.aH.gaM(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bNg.prototype={}
C.bNh.prototype={
gM(d){var w=this.a.length
return w},
aoe(){return B.r9(this.a,A.hW,null,null)}}
C.b9u.prototype={
uV(d){return C.hNj(d)}}
C.cqd.prototype={
Mo(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9I(v,t+20,u+16,t,u,B.tS(d.x))},
nn(d){return!1}}
C.bO9.prototype={
cD1(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bOa(),x.E))},
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
return B.b(p.ftV(f,r),$async$mH)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mH,v)}}
C.avh.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a83.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a83&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wJ(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fC0)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aVc.prototype={
c0(d){var w=new C.aA8(!0,this.e,null,new B.dh(),B.ci())
w.bZ()
w.scE(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syz(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFA()}}}
C.aA8.prototype={
syz(d,e){return},
gpt(){var w=this.ab$
return w!=null},
gl1(){var w=this.ab$
return w!=null},
Md(d){var w=d==null?B.h4P(null):d
w.sa4j(this.ak)
return w}}
C.a0v.prototype={
S(){return new C.aIx(B.aX(x.N))},
cQf(d){return this.d.$1(d)},
cO2(){return this.e.$0()}}
C.aIx.prototype={
a_(){this.a1()
this.OM()},
OM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cO2(),$async$OM)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f5b(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OM,v)},
Yx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a1<1>")
p=B.C(new B.a1(r,new C.f5f(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f5g(t))
w=3
return B.b(C.an9(p),$async$Yx)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f5h(t,s,p))
w=4
return B.b(t.OM(),$async$Yx)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yx,v)},
a0K(d){return this.cnG(d)},
cnG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0K=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f5c(t))
s=J.q(d,"id")
w=3
return B.b(C.bYQ(J.k(s==null?"":s)),$async$a0K)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f5d(t))
w=1
break}q=C.h_B(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cQf(B.a([q],x.D)),$async$a0K)
case 4:if(t.c==null){w=1
break}t.m(new C.f5e(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0K,v)},
OL(d,e){return this.bJi(0,e)},
bJi(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f56(q),r,null,!0,!0,x.y),$async$OL)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f57(t))
s=s.h(e,"id")
w=4
return B.b(C.an8(J.k(s==null?"":s)),$async$OL)
case 4:if(t.c==null){w=1
break}t.m(new C.f58(t))
w=5
return B.b(t.OM(),$async$OL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OL,v)},
cC3(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ig[B.bH(v)-1]+" "+B.bR(v)},
aPM(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.O_,A.n),w,e,w,w,w,w,w,e)},
aPL(d){return this.aPM(d,44)},
b5S(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.O_:u,r=B.m(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.IE,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([M.IE,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bwo,u,u,u)],p))}return B.E(B.aD(A.c4,B.df(u,B.B(q,A.m,u,A.b9,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hx,u,u,u,A.tC,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f5l(this,d),u,u,u,u,u,u,!1,A.a8),1)},
cht(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d3.j(0.14):D.Xi,n=B.m(18),m=p?A.d3:A.dq
m=B.I(m,A.q,p?1.8:1)
w=this.aPL(A.pY)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aQp,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.v(B.a([v,A.cV,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aQr,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.O_:q
u=p?q:B.I(A.b3,A.q,1.6)
r=p?D.bMl:q
return B.aD(q,B.df(q,B.B(B.a([w,A.bd,t,B.df(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fG,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fG,q,q,A.da,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f5a(this,p,d),q,q,q,q,q,q,!1,A.a8)},
cpe(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cC3(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dq,A.q,1)
v=r.aPL(A.Nb)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aQp,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.v(B.a([u,A.cV,B.d(p+" slides"+t,q,q,q,q,q,q,D.aQr,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b2v(A.hB,A.bu,"Bring it back",r.r?q:new C.f5i(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bp,r.b2v(A.e6,A.cf,"Delete",r.r?q:new C.f5j(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Xi,q,w,o,q,q,A.n),q,q,q,A.da,D.bqW,q,q,q)},
b2v(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hs(B.aD(w,B.p(w,B.X(d,v?A.b3:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
as9(d,e,f){var w=null
return new B.D(D.bq_,B.v(B.a([B.X(d,A.b3,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f8U,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.f1s,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c9
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bV,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b3,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPM(A.yr,46),A.bd,D.bxg],t)
if(j.r)s.push(D.e81)
s.push(B.aH(i,i,i,i,A.NL,i,i,i,new C.f5o(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dq,A.q,1)
o=J.a6(h)
q=B.a([A.S,u,new B.D(D.btt,s,i),B.p(i,B.B(B.a([j.b5S(0,A.y2,"Save",j.a.c.length),j.b5S(1,A.Nq,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bsy,A.ek,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cf:A.bu).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cf:A.bu).j(0.4),A.q,1)
p=j.y
n=p?A.Nc:A.eg
n=B.X(n,p?A.cf:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a7j,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bsu,A.iz,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f5_,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aD(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f80,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f5p(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.as9(A.pY,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.cht(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e7A)
else if(j.e==null)s.push(j.as9(A.akA,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.as9(A.oK,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.cpe(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cn,B.cw(u,i,X.ahG,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc2y()
p=s?i:D.O_
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cx,18)],x.V)
u=u.a
m=u===0
k=B.X(A.y2,m?A.jd:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bt6,B.aD(i,B.df(i,B.B(B.a([k,A.a6L,new B.dq(1,A.cn,B.f4(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jd:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.ei),i)],t),A.m,i,A.b9,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hx,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bl(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b_A,i,i,i,i,i,i,i,i)}}
C.oh.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.Yf.prototype={
S(){return new C.ax7(B.a([],x.k),B.f8(null,x.H))},
ge_(){return this.c}}
C.ax7.prototype={
a_(){this.a1()
this.OU()},
OU(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1t(t.a.c),$async$OU)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cFC(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OU,v)},
cvn(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qd(t.d,new C.cFF(d))
v=w<0
if(v&&C.hKr(d))return t.f
u=t.d
if(v)J.pv(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fRi(new C.cFG(t),v)
return t.f=t.f.bz(new C.cFH(t,d),v).eM(new C.cFI())},
Io(d,e,f){return this.cb7(0,e,f)},
aXq(d,e){return this.Io(0,e,!1)},
cb7(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Io=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).c5(B.e8(new C.cFB(t,e),!1,null,x.H)),$async$Io)
case 3:w=4
return B.b(t.f,$async$Io)
case 4:w=5
return B.b(t.OU(),$async$Io)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Io,v)},
aWH(d){var w=A.o.u(1000*Date.now()),v=d==null?D.du2:d
this.Io(0,new C.oh(w,v,new B.S(Date.now(),0,!1)),!0)},
c22(){return this.aWH(null)},
acM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.cFJ(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aWH(s)
case 1:return B.h(u,v)}})
return B.i($async$acM,v)},
In(d,e){return this.bJa(0,e)},
bJa(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$In=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cFw(e),s,null,!0,!0,x.y),$async$In)
case 3:if(g!==!0){w=1
break}t.m(new C.cFx(t,e))
w=4
return B.b(t.f,$async$In)
case 4:w=5
return B.b(C.afX(t.a.c,e.a),$async$In)
case 5:w=6
return B.b(t.OU(),$async$In)
case 6:case 1:return B.h(u,v)}})
return B.i($async$In,v)},
D4(d){return this.bBm(d)},
bBm(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$D4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.cFs(d),r,!0,!0,!1,null,!1,!1,x.N),$async$D4)
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
return B.b(t.aXq(0,d),$async$D4)
case 9:w=5
break
case 7:w=10
return B.b(F.h08(r,d.b,null),$async$D4)
case 10:w=5
break
case 8:w=11
return B.b(t.In(0,d),$async$D4)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$D4,v)},
bWH(){var w,v,u=null,t=[D.du5,D.du3,D.du4],s=new C.cFz(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d5.j(0.4),A.eU,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.x(D.dea[w],u,A.ol,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bq(v,v,v,v),u,u,A.n),u,u,u,u,A.nZ,u,u,u))}return B.p(u,B.B(B.a([B.E(B.v(B.a([D.fxw,A.O,B.bW(A.bz,n,A.bq,6,6),A.aP,B.aD(u,B.p(u,D.eLk,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ai3,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cFy(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bUu,A.n),u,u,u,u,D.btD,u,u,u)},
bBk(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cx,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b0,A.r,B.a([B.f4(A.A,F.anH(d.b),A.f,A.bR),D.edy,B.ao(v,B.aD(v,B.p(v,D.bN7,A.f,v,v,D.b0u,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFn(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eZQ,v,v,v)
w=u===1?"":"s"
return B.aD(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f5b,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cFo(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFp(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eC(B.a([new B.D(I.agz,B.hs(B.aD(s,B.p(s,A.anj,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.J,12)],x.V),E.vU,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc3j(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n0,s,s,s,!0,s,s,s,s,s,D.fxA,s,s,s,1,s,!0)
if(t.e)r=D.b3S
else{w=t.bWH()
v=B.a([D.fjo,A.ab],r)
if(J.cz(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eZh,s,s,s),A.f,s,s,new B.o(D.b8A,s,s,u,s,s,A.n),s,s,s,s,A.xL,s,s,s))}r=B.a([new B.nO(A5.Ys,new B.m7(w,s),s),new B.nO(D.bt0,new B.m7(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eRp)
else r.push(new B.nO(D.bsw,B.OF(new B.om(new C.cFK(t),J.ad(t.d),!0,!0,!0,0,B.rR(),s),D.b39),s))
r=B.vt(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b7o,r,s,!1,!1,s,s)}}
C.Yd.prototype={
S(){return new C.ax3(B.a([],x.bx))},
TB(d){return this.d.$1(d)}}
C.aEp.prototype={}
C.ax3.prototype={
b_i(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b5,A.aN),w),u=this.gaXp()
v.aO(0,u)
w=new B.as(new B.bb(e,A.b5,A.aN),w)
w.aO(0,u)
return new C.aEp(v,w,f)},
DU(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pN,new C.cER(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.bb(w.a,A.b5,A.aN),v)
t=m.gaXp()
u.aO(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b5,A.aN),v)
u.aO(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b5,A.aN),v)
u.aO(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b5,A.aN),v)
o.aO(0,t)
n=new B.as(new B.bb(p.b,A.b5,A.aN),v)
n.aO(0,t)
r.push(new C.aEp(o,n,p.c))}if(r.length===0)r.push(m.b_i("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.gp8()
q=r.a
q.TB(q.c)}q=r.d
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
s.P$=0}r.a2()},
gp8(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mr(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.re(n,w,v,t,u)},
AF(){var w=0,v=B.j(x.H),u=this,t
var $async$AF=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gp8()
t=u.a
w=2
return B.b(t.TB(t.c),$async$AF)
case 2:return B.h(null,v)}})
return B.i($async$AF,v)},
c3h(){this.m(new C.cEQ(this))
this.DU()},
aWo(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cET(w,d,v))
w.DU()},
c3i(d,e){var w=A.d.cC(this.w,e)
this.m(new C.cF0())
this.DU()
$.aW.x1$.push(new C.cF1(w))},
Q4(d){return this.chj(d)},
chj(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q4=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l4(80,1400,A.eG),$async$Q4)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$Q4)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahv(o,".png")?"image/png":"image/jpeg"
r.m(new C.cEU(d,n,p))
r.DU()
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
return B.i($async$Q4,v)},
xE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hmZ(r,t.gp8()),$async$xE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cES(t,s))
t.DU()
case 1:return B.h(u,v)}})
return B.i($async$xE,v)},
chB(d){var w,v=this,u=null,t=F.fy2(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hg(D.bGr,D.flR,new C.cEW(v,d),u),u)
w=x.p
return new B.D(A.cA,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.cj,A.bR,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b2w(A.ks,new C.cEX(v,d)),A.bp,v.b2w(A.cD,new C.cEY(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b2w(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hy,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
Ip(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ip=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AF(),$async$Ip)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h08(s,t.gp8(),new C.cF_(t)),$async$Ip)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ip,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eC(B.a([new B.D(A.r_,B.hg(D.bL6,D.frO,n.gavN(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.ani,m,m,m,new C.cF2(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Wu,m,1,m,m,m,!1,m,!1,E.n0,m,m,m,!0,m,m,m,m,m,D.fmI,m,m,m,1,m,!0),j=Av.aTU(O.lf,A.c,Ae.Vo,A.o3,D.fnr,n.gc3g()),i=B.m(18),h=n.gavM(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jp,12)],x.V)
g=B.aD(m,B.p(m,new B.a7(92,142.1818181818182,B.f4(A.A,F.anH(n.gp8()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.eo,B.E(B.v(B.a([D.fz5,A.at,B.d(F.fZF(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.faC,m,m,m),A.S,B.di(E.amz,E.aRd,h,B.bm(A.d5,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Wu,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ok,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.O,w,A.O,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aP],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.lf.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bJQ,m,m,m,v===0?m:new C.cF3(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aH(m,m,m,m,D.bQ5,m,m,m,v===r-1?m:new C.cF4(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cF5(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.v(B.a([new B.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.fb9,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aH(m,m,m,m,B.X(A.e6,A.oD,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.chB(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n0,m,new B.bO(u,u,u,u),new B.bq(w,w,w,w),m,m,A.n),m,m,new C.a83(h),A.e5,D.bra,m,m,m))}return B.oj(!0,B.c8(k,E.aeK,B.cw(g,m,D.brC,m,m,A.ah,!1),m,!1,!1,j,m),new C.cF6(n),x.C)}}
C.ax5.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cf:E.n0,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d5.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eK,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aPL,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ey,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.apQ.prototype={
S(){return new C.aDb()}}
C.aDb.prototype={
a_(){this.a1()
this.Zb()},
bt(d){this.bD(d)
if(d.c!=this.a.c)this.a0z()},
a0z(){var w=0,v=B.j(x.H),u=this,t
var $async$a0z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0z)
case 2:u.d=null
if(u.c!=null)u.m(new C.e8v(u))
w=3
return B.b(u.Zb(),$async$a0z)
case 3:return B.h(null,v)}})
return B.i($async$a0z,v)},
Zb(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zb=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d_(n,"http://")||J.d_(n,"https://")||J.d_(n,"data:")){o=B.XS(B.cx(n,0,null),new B.P1(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ib(0).cM(0,A.pJ),$async$Zb)
case 7:if(r.c==null){w=1
break}r.d.tf(!1)
r.m(new C.e8t(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e8u(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zb,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c6_(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h4(0)
w.m(new C.e8w(w))}else{v.pS(0)
w.m(new C.e8x(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.m(8*n.d)
m=B.a([D.ja.j(0.92),D.Kx.j(0.95)],x.O)
w=B.I(A.bZ.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.q0,A.bZ,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.N,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.be)}if(p.f)return B.av(B.X(A.alQ,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b4H
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f4(A.A,new B.a7(r,q,new B.A_(s,o),o),A.r,A.bR)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iC,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aD(o,B.bw(n,new B.an(A.W,o,A.b0,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc5Z(),o,o,o,o,o,o,!1,A.a8)}}
C.xq.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jo.prototype={}
C.acV.prototype={
B(d){return B.oN(new C.dXS(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acj.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.ja.j(t?0.35:0.4),A.q,1),p=t?D.L4:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cx,14)],o),m=B.m(10),l=B.I(A.bZ.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fG(0.5625,C.i1P(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aiy,u,u,u,u),1)
m=D.ja.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.ja,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cV,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.beD,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.agP,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xt.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nE.prototype={}
C.biy.prototype={
Zk(d){var w=null
return new B.bI(A.a3,w,w,B.DE(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c6r(){return this.Zk(1)},
awq(d){var w=null,v=B.m(8),u=B.I(A.hY,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.acK,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hY,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hY,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b9,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awq("TAARIFA ZA WANANDOA"),A.am,w.c6r(),A.cV,w.Zk(0.9),A.cV,w.Zk(0.7),A.O,w.awq("TAMKO LA MAKUBALIANO"),A.h0,w.Zk(1),A.cV,w.Zk(0.95),A.O,w.awq("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acY.prototype={
B(d){return B.oN(new C.edK(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeE.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bed:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cx,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.h_9(w.a)
if(v==null)v=A.d.gK(D.Qs)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b0,A.r,B.a([B.bZ(0,B.fL(C.h_8(v.d),A.A,r,r,A.cj,A.bR,!0,r,!1,r,r),0,0,0),new B.D(A.ahx,new C.biy(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aiy,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.L5,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cV,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b7U,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.agP,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kS.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7x.prototype={}
C.Vq.prototype={
S(){var w=$.aw()
return new C.aDu(new B.cs(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.mz(0,null,null),A.d.gK(D.a2o),D.dEn,B.a([],x.L),B.a([],x.gE))}}
C.aDu.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zl(C.fBW(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fAS().bz(new C.eh1(v),w)
$.qP().jy(0,"assets/images/ngmy_logo.png").bz(new C.eh2(v),w).eM(new C.eh3())},
q(){var w=this,v=w.e,u=$.aw()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.q()
w.a2()},
agG(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.T(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
II(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$II=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l4(88,1600,A.eG),$async$II)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$II)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hnf(m,p),$async$II)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCz(new B.pJ(o,1),m),$async$II)
case 10:if(r.c!=null)r.m(new C.egE(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agG("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$II,v)},
Wp(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hnf(s,q),$async$Wp)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCz(new B.pJ(r,1),s),$async$Wp)
case 4:if(t.c!=null)t.m(new C.egA(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wp,v)},
adB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.egL(q))
t=4
q.a.toString
p=C.i6g()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adB)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.egM(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agG(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.egN(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adB,v)},
Zp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Zp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.egG(q,i))
t=4
q.a.toString
p=C.i6f()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Zp)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.egH(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.egI(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.egJ(q))
$.aW.x1$.push(new C.egK(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zp,v)},
c6H(d){this.m(new C.egF(this,d))},
Eb(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Eb=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.egC(q))
t=4
w=7
return B.b($.aW.gmC(),$async$Eb)
case 7:w=8
return B.b(B.bN(A.n8,null,x.H),$async$Eb)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pU))throw B.V("The page is not ready yet.")
w=9
return B.b(p.lY(1800/p.gZ(0).a),$async$Eb)
case 9:o=e
w=10
return B.b(o.hr(A.fY),$async$Eb)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.ag_(J.eT(A.dD.gaM(n)),"ngmy_news.png","image/png"),$async$Eb)
case 11:m=e
q.agG(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agG(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.egD(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Eb,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kY,a2,a2,a2,new C.egT(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bLC,a2,a2,a2,new C.egU(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oT,a2,a2,a2,a4?a1.gaYw():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eC(v,a2,a2,!0,!0,A.AJ,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eLu,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eU,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f4(A.A,new B.ev(new C.b08(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.J_,a2,a2,a2)
t=a1.as?a2:a1.gc6G()
t=B.a([B.E(B.di(D.bMm,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bm(D.ti,a2,a2,a2,A.c,A.fN,a2,a2,new B.b7(B.m(14),P.uW),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.cj,A.bR,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bJ8,a2,a2,a2,a1.as?a2:a1.gbHM(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.J_,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aRC("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dm,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d8N[o]
p.push(B.mH(a2,D.ti,new B.x(n.a,a2,A.pc,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.egV(a1,n),a2,a2,P.uW,a2))}p=B.bW(A.bz,p,A.bq,6,8)
m=a1.Q
m=B.bW(A.bz,B.a([D.fxJ,A.bd,B.j7(a2,a2,a2,D.fic,a2,new C.egW(a1),m==="en",a2,a2,a2,a2),A.ab,B.j7(a2,a2,a2,D.fi7,a2,new C.egX(a1),m==="sw",a2,a2,a2,a2)],w),A.rS,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.J_,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dd(D.a2o,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQ5(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dd(D.a2o,10,a2,j),h=j.$ti,j=new B.bS(j,j.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQ5(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc6J()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cA,s,a2),t,A.aB,new B.D(A.cA,r,a2),q,A.O,p,A.S,m,A.aB,new B.D(A.cA,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aP,B.aD(a2,B.p(A.A,B.B(B.a([D.bMg,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.u4,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.dZ,B.B(B.a([D.doV,A.av,D.bxz],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b7.j(0.35):D.ti
p=new B.aT(16,16)
d=new B.ay(A.bG,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f8G,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.Vb,new B.o(q,a2,new B.bO(d,d,d,d),new B.bq(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cA,A.iz,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cWs[o]
t.push(B.mH(a2,D.ti,new B.x(a0,a2,A.IS,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.egY(a1,a0),a2,a2,P.uW,a2))}u.push(B.bW(A.bz,t,A.bq,6,8))
u.push(A.S)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aRC("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.egZ(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dm,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc6I()
u.push(B.B(B.a([t,A.ab,B.Hx(A.yw,s,B.ny(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaYw()
u.push(B.di(A.oT,D.ftk,t,B.bm(A.cZ,a2,a2,a2,a2,A.IC,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cw(v,a1.r,A.ahj,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jR.j(0.5),A.q,1)
v.push(B.bZ(0,B.el(B.av(B.p(a2,B.B(B.a([E.a6M,A.eo,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iI,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.AA,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.btV,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.AJ,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aRC(d){var w=null
return B.bs(w,new B.b4(4,B.m(14),A.Y),w,A.eQ,w,w,w,w,!0,w,w,w,w,w,w,D.ti,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.IN,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQ5(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bG
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kS,t,t,t,t),A.h0],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bqd,t,t,t,t))
w.push(A.cV)
w.push(new B.D(A.ji,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aD(t,B.p(t,B.v(w,A.m,t,A.b9,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iV,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.egB(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.zl.prototype={
baM(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zl(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cGx(d){var w=null
return this.baM(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cc3(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fE(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.L(w,new C.cc1(),B.U(w).k("L<1,n>")).c_(0,new C.cc2())
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
return this.baM(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFn(d){return this.f}}
C.td.prototype={
a5(){return"NewsLayout."+this.b}}
C.Bj.prototype={
a5(){return"NewsFrame."+this.b}}
C.le.prototype={}
C.b08.prototype={
rf(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aYy(d,e,f,g){return this.rf(d,e,null,1.25,f,A.bn,g)},
Pq(d,e,f,g,h){return this.rf(d,e,f,1.25,g,A.bn,h)},
aww(d,e,f,g,h){return this.rf(d,e,null,f,g,A.bn,h)},
awv(d,e,f,g,h){return this.rf(d,e,f,g,0,A.bn,h)},
aYA(d,e,f,g,h){return this.rf(d,e,null,f,0,g,h)},
c6N(d,e,f,g,h,i){return this.rf(d,e,f,g,0,h,i)},
awu(d,e,f,g){return this.rf(d,e,null,f,0,A.bn,g)},
adE(d,e,f){return this.rf(d,e,null,f,0,A.bn,A.cN)},
aYz(d,e,f,g,h){return this.rf(d,e,f,g,0,h,A.cN)},
c6M(d,e,f,g){return this.rf(d,e,null,f,0,g,A.cN)},
c6L(d,e,f,g){return this.rf(d,e,f,g,0,A.bn,A.cN)},
adF(d,e,f,g,h,i){return this.rf(d,e,f,g,h,A.bn,i)},
aYx(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kh(new B.eq(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.ca,new B.ju(1),u,u,h,u,A.c8,u)
v.wC(g)
if(!v.b.a.c.gaDv())return w
w-=2}return j},
adC(d,e,f,g,h,i,j,k){return this.aYx(d,e,f,g,h,i,j,k,A.bn)},
ayF(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayE(d){return this.ayF(null,!1,d)},
agu(d,e){return this.ayF(null,d,e)},
con(d,e){return this.ayF(d,!1,e)},
gb_G(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaUd(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Oh(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adC(w.gaUd(),u,A.N,d,g,h,i,1.02)
return B.d(w.gaUd(),v,g,A.a2,v,v,v,w.awv(u,t,f,1.02,A.N),e,v,v)},
aUi(d){return this.Oh(d,A.L,null,2,78,30)},
ab2(d,e,f,g,h){return this.Oh(d,e,null,f,g,h)},
bWz(d,e,f,g,h){return this.Oh(d,A.L,e,f,g,h)},
bWy(d,e,f){return this.Oh(d,A.L,null,e,f,30)},
Rm(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.kp,B.d(s,u,g,A.a2,u,u,u,v.aYz(w,v.aYx(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b5y(d){return this.Rm(d,A.L,null,3,24)},
aA9(d,e,f,g){return this.Rm(d,e,null,f,g)},
cvR(d,e,f){return this.Rm(d,A.L,e,3,f)},
b5z(d,e){return this.Rm(d,e,null,3,24)},
cvP(d,e){return this.Rm(d,A.L,null,3,e)},
cvQ(d,e,f){return this.Rm(d,e,null,3,f)},
aqa(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fV,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Pq("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Ne(){return this.aqa(null,!0)},
aq9(d){return this.aqa(null,d)},
bDG(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i_,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c6M(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vs(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_G(),h=A.o.an(j.bB(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hUQ(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aYy(k,12,1.2,A.N),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adC(i,v,A.N,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adC(i.toUpperCase(),v,A.N,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eD,l,l,l,m.adF(v,u*0.84,h,1,1,A.N),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bBP(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hC,A.j,0,l,l),A.am,m.agu(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eo,B.E(B.d(i,l,1,A.eD,l,l,l,m.awu(v,u*0.9,1,A.N),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.B(B.a([B.d(C.bBP(j),l,l,l,l,l,l,m.Pq(k,13,B.b0(h),0.6,A.N),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hC,A.j,0,l,l),A.O,m.con(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb_G()
v=B.d("NGMY",l,l,l,l,l,l,m.aww(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.B(B.a([v,A.ab,B.eG(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rf(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b6,new B.dq(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adF(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.N),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l)
t=m.agu(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awu(v,u,1,A.N),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agu(!0,1.4),A.at,B.d(C.bBP(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayE(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.aww(v,u,1,3,A.N),A.L,l,l),A.O,m.agu(!0,1.2),A.at,B.B(B.a([B.d(C.bBP(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l),A.at,m.ayE(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aca(d){return this.vs(d,!1)},
adD(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adF("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c6K(d,e){return this.adD(d,null,e,null)},
aWg(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.E(B.dl(v),12)===0?12:A.o.E(B.dl(v),12),t=B.b0(this.d.w).j(0.75),s=this.awv("Roboto",15,t,1,A.cv),r=B.X(E.ajX,t,w,w,w,18),q=A.a.ap(A.oX[B.bH(v)-1],0,3),p=A.a.aT(A.o.u(B.fZ(v)),2,"0"),o=B.dl(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bR(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fJ,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avg(){return this.aWg(A.mu)},
b2K(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adF("Roboto",this.adC(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayI(d,e,f){return this.b2K(d,e,f,30)},
aAc(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vh,B.d(v,w,e,A.a2,w,w,w,this.c6L("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b5D(d){return this.aAc(d,3,22)},
cw1(d,e){return this.aAc(d,e,22)},
ty(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cj,A.bR,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dc(D.bwF,w,s)
if(v==="sepia")w=new B.Dc(D.bwE,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.xY,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.Wq.j(0.38)],x.O),s,s),A.n),A.be))
return new B.a7(d,e,new B.an(A.W,s,A.b0,A.r,v,s),s)},
qn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.ty(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ek,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lP,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e45,14)],x.V)
v=l.ty(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eG(A.A,-0.035,B.p(k,B.v(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aYz(j.as,13.5,D.b9q,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bcC,k,k,k,w,k,A.n),k,e,k,k,D.brx,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.ty(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hU(l.ty(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lP,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e3W,10)],x.V)
return B.eG(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.ty(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.r2,k,k,k),0,0,0),B.ao(k,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nt(l.ty(d,e),A.aq,D.fT2),new C.bbI(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.ty(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bv(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bq(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cm(A.aO,A.q4,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b0,A.r,w,k),A.f,A.ea,k,k,k,e,k,k,D.bvV,k,k,d)
case 8:w=d/2
v=B.wR(A.he,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wR(A.hD,new B.aT(w,w)),l.ty(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fM,22)],x.V)
return B.p(k,l.ty(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nt(l.ty(d,e),A.aq,D.fZ4),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.ty(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ek,k,k,d)}},
aNH(d,e){return this.d.e===D.R5?A.bI:this.bDG(d,e)},
VY(d){return this.aNH(d,A.L)},
gazu(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azt(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aYA(v.Q,19,1.15,A.cF,A.N),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Pq("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.adE(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jz(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gceR(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8L(d,e,f,g){return B.cq(new C.cc4(this,e,d,f,g))},
a8K(d){return this.a8L(d,22,!0,18)},
W8(d,e){return this.a8L(d,22,!0,e)},
aOJ(d,e,f){return this.a8L(d,22,e,f)},
bFH(d,e,f){return this.a8L(d,e,!0,f)},
b8u(d,e,f,g){return B.cq(new C.cc5(this,e,d,g,!0,f))},
cdF(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.aca(824),A.aB,k.aUi(824),k.b5y(824),A.O,k.Ne(),A.ac,B.av(k.qn(824,360),j,j,j),k.VY(824),A.ac,B.E(k.a8K(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.aca(824),A.aP,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.v(B.a([k.ab2(440,A.bg,3,62,26),k.aA9(440,A.bg,2,20),A.b6,k.aqa(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.ID,B.v(B.a([k.qn(362,310),k.VY(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayE(2),A.ac,B.E(k.a8K(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vs(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bWz(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cvR(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.B4,j,j,j)
u=B.a([B.av(k.qn(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.R5){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awv(i,14,A.c,1.15,A.N),j,j,j),A.f,h,j,j,j,j,j,j,A.lN,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.O,k.Ne(),A.S,B.E(k.W8(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vs(824,!0)
w=k.qn(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b4,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.Oh(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b_,A.b4,A.x,v,j,j),A.n),j,j,j,j,D.bud,j,j,j),j,j,0,0,j,j)],u),j),k.b5z(824,A.bg),A.O,k.Ne(),A.S,B.E(k.a8K(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.aca(824),A.aB,k.aUi(824),k.b5y(824),A.O,k.Ne(),A.ac,B.E(k.b8u(3,300,B.v(B.a([k.qn(300,300),k.VY(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vs(824,!0)
v=x.p
u=B.v(B.a([k.ab2(440,A.bg,3,62,26),k.aA9(440,A.bg,2,20),A.b6,k.aq9(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aNN,new B.D(A.i_,k.qn(364,h.e===D.R5?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.W8(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.aca(824),A.ac,k.bWy(824,2,70),k.cvP(824,21),A.O,k.Ne(),A.ac,B.E(k.b8u(3,340,B.av(k.qn(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vs(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBP(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Pq(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aYA(h.Q,24,1.15,A.cF,A.N),j,j,j))
v.push(A.b6)
if(k.gazu())v.push(k.azt(230,250))
return B.v(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.agN,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.ab2(570,A.bg,3,62,28),k.cvQ(570,A.bg,20),A.O,k.aq9(!1),A.O,B.av(k.qn(570,330),j,j,j),k.VY(570),A.S,B.E(k.aOJ(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vs(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Pq(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.am,k.Oh(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bsz,j,j,j),k.b5z(824,A.bg),A.S,B.av(k.qn(824,310),j,j,j),k.VY(824),A.O,k.Ne(),A.S,B.E(k.a8K(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vs(824,!0),A.aP,new B.an(A.W,j,A.aa,A.r,B.a([k.qn(824,430),B.ao(18,k.c6K(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.ayI(824,3,66),k.b5D(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avg(),A.aB,B.E(k.W8(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vs(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.v(B.a([k.adD(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aP,k.b2K(410,4,58,28),k.aAc(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),U.aNO,k.qn(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avg(),A.aP,B.E(k.W8(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vs(824,!0)
v=k.qn(824,420)
u=B.hxv(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aP,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c6N(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.but,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.ayI(824,3,62),k.b5D(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aWg(A.lo),A.aB,B.E(k.W8(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vs(824,!0)
u=h.w
t=x.p
w=B.a([k.qn(824,380),B.ao(j,k.adD(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayI(824,2,60)
r=k.cw1(824,2)
p=k.avg()
o=B.E(k.aOJ(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aP,new B.an(A.W,j,A.aa,A.r,w,j),A.aP,s,r,A.S,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.m(14),k.ty(150,104),A.aq),A.og,B.E(B.v(B.a([k.adD("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.awu(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.ey,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vs(824,!0),A.by,k.ab2(824,A.bg,3,62,30),k.aA9(824,A.bg,2,22),A.S,k.aq9(!1),A.S,B.av(k.qn(824,330),j,j,j),k.aNH(824,A.bg),A.aP,B.E(k.bFH(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c0(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.be),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b8d(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.D(D.buZ,B.v(B.a([B.E(t.cdF(),1),A.O,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h0,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aYy(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Pq(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hC,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bqP(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hU(B.fL(q,A.A,s,s,A.cj,A.bR,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mu,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.aww(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dc(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bw2,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jz(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbJ.prototype={
j4(d){return C.hcC(d)},
jL(d){return!1}}
C.bbI.prototype={
a4(d,e){var w,v=C.hcC(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aP(v,w)},
au(d){return!d.b.A(0,this.b)}}
C.btk.prototype={
j4(d){var w,v,u,t,s,r,q,p,o=new B.eM()
o.dB(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ap,null,null,v)
u.F(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bA(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.F(new B.ap(t,8))
w=d.b
r=w-8
u.F(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bA(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.F(new B.ap(0,r))
u.F(new B.bF())
return u},
jL(d){return!1}}
C.b8d.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eM()
k.dB(7)
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
w.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.Ky.j(0.13),A.K],v),l,l).av(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
au(d){return!1}}
C.bqP.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.hr(u,u,u,u,B.de(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.ca,u,A.e0,A.c8)
s.ey()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.j1(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.u(-v/2,-t.gbe(t)/2))
w.restore()},
au(d){return!d.b.A(0,this.b)}}
C.Vt.prototype={
S(){return new C.aDy()}}
C.aDy.prototype={
a_(){var w=this
w.a1()
B.fZ1(w.a.c,null).bz(new C.eic(),x.g7).bz(new C.eid(w),x.a)
w.a.toString},
gaMw(){var w=D.auC[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawx(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaMw()
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
Zr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.ei_(r))
t=4
q=r.gawx()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qV()
m=B.Da(n,null)
i=B.N()
i.Q=A.fW
m.rH(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pD().zf(J.h27(p),J.h27(o)),$async$Zr)
case 7:l=e
w=8
return B.b(l.hr(A.fY),$async$Zr)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.O(J.eT(J.vk(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ei0(r))
r.c.I(x.q).f.T(D.eU_)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zr,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kY,s,s,s,new C.ei6(d),s,s,s,s,s,s),p=x.p
q=B.eC(B.a([B.bK(!1,D.fvO,s,s,!0,s,s,t.y||r==null?s:t.gc6O(),s,s)],p),s,s,!0,!0,A.AJ,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fzH,s,s,s,1,s,!0)
if(r==null)p=A.lF
else{w=B.E(new B.D(A.bU,B.av(new B.fG(t.gaMw(),B.cq(new C.ei7(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iV,B.j7(s,s,s,new B.x(D.auC[u].a,s,E.aPz,s,s,s,s,s,s,s,s,s),s,new C.ei8(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bl(!0,B.v(B.a([new B.a7(s,40,B.cw(v,s,s,s,s,A.aO,!1),s),B.B(B.a([D.bMZ,B.E(B.kZ(s,s,s,6,1,new C.ei9(t),t.f),1),D.bMB],p),A.m,s,A.e,A.j,0,s,s),D.fte,A.am,B.bK(!1,D.fsZ,s,s,!0,s,s,new C.eia(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.WE,s,s,s,s,s,s,D.brV,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.AJ,p,s,!1,!1,s,s)}}
C.bbf.prototype={
a4(d,e){var w
$.W()
w=B.N()
w.Q=A.cj
return d.rH(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
au(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_w.prototype={
S(){var w=$.aw(),v=x.A
return new C.aEV(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b5,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gK(D.a2Y),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.ot.prototype={}
C.aEV.prototype={
gaUq(){var w,v,u=this
if(u.p1)w=new B.vB(1,u.p2,0.9,u.p3).iB().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eRN(w))},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
Y4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Y4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qP().jy(0,"assets/images/ngmy_logo.png"),$async$Y4)
case 7:q=e
p=J.eT(J.vk(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCz(new B.pJ(p,1),o),$async$Y4)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eQF(r,p))
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
return B.i($async$Y4,v)},
Pt(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pt=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l4(92,1800,A.eG),$async$Pt)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$Pt)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCz(new B.pJ(p,1),n),$async$Pt)
case 9:if(r.c==null){w=1
break}r.m(new C.eR2(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.aa(l)
n=r.c
if(n!=null)n.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pt,v)},
b26(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aF=w.aN=w.aE=w.az=w.Y=w.b6=w.bd=w.y2=0
w.b0=null
w.b_=0.25
w.ba=null
w.bM=0.5
w.aS=1
w.c8=w.bU=w.bj=0
w.cX=w.cU=!1},
aW0(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzf(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dbs)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzf(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzf(C.fY6(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzf(C.fY6(1-a0*0.5,n,n,n),w)}return a1?C.bzf(C.fY6(-1,255,255,255),w):w},
aAi(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kV(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.z8(u,v,w)
this.dx.p9(new C.eRc(t),!0)
return t},
b4D(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAi()
w=C.i3Y(e.d.a.a,e.db)
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
return C.i0s(d,k,v,a0,j,e.gaUq(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
ctP(){return this.b4D(null)},
D3(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$D3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmC(),$async$D3)
case 3:w=4
return B.b(B.bN(A.eJ,null,x.H),$async$D3)
case 4:w=5
return B.b($.aW.gmC(),$async$D3)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pU)){u=null
w=1
break}w=7
return B.b(r.lY(1080/r.gZ(0).a),$async$D3)
case 7:w=6
return B.b(e.hr(A.fY),$async$D3)
case 6:q=e
u=q==null?null:J.eT(A.dD.gaM(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$D3,v)},
a9C(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9C=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eQo(q))
t=4
w=7
return B.b(q.D3(),$async$a9C)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcw().aJ(p)
n=C.Bw(null,null,null,null,D.oa,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b4D(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.aa(j)
l=q.c
if(l!=null)l.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eQp(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9C,v)},
An(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$An=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eQm(q))
t=4
w=7
return B.b($.aW.gmC(),$async$An)
case 7:w=8
return B.b(B.bN(A.oG,null,x.H),$async$An)
case 8:w=9
return B.b($.aW.gmC(),$async$An)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pU))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.lY(1080/p.gZ(0).a),$async$An)
case 10:o=e
w=11
return B.b(o.hr(A.fY),$async$An)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.ag_(J.eT(A.dD.gaM(n)),"ngmy_quote.png","image/png"),$async$An)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.T(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
k=q.c
if(k!=null)k.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eQn(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$An,v)},
cgL(){var w=this.p4
w.toString
return B.cq(new C.eQW(this,w))},
aYH(d,e){var w=null
return B.bs(w,w,w,w,w,D.f3i,w,w,!0,new B.b4(4,B.m(16),P.uW),w,w,w,w,w,D.ti,!0,w,w,w,w,new B.b4(4,B.m(16),D.aYe),w,w,w,w,w,w,w,w,A1.Di,e,w,w,w,w,w,w,w,D.f8x,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xL(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aQm,w,w,w))
return new B.D(H.agE,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aYG(d,e){var w=null,v=B.m(18),u=B.I(A.bG,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jD),A.f,w,w,new B.o(D.ti,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vz(d){return this.aYG(d,A.bC)},
o9(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.u4:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bG,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jd,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jd,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aD(r,B.df(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hx,r,r,r,A.F8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
aft(d,e,f){return this.o9(d,null,e,f)},
awB(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.eA:A.bG,s=x.p
v=B.a([B.df(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hx,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aD(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aYK(d,e,f,g,h,i){return this.awB(d,e,f,g,h,5,i)},
kg(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f0k,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aD(u,D.e7E,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eR8(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aPr,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.YS,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auI(w).cHV(A.b7,A.bG,A.b7.j(0.2),A.c,D.eKN,4)
return new B.D(A.xw,B.v(B.a([s,B.a9E(B.kZ(u,u,u,g,f,new C.eR9(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahu(d,e,f,g,h,i){return this.kg(d,e,f,g,h,null,i)},
ahW(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b0(u)
r=d==u
q=r?A.c:A.b3
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bG3:o
n.push(B.aD(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eRb(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bW(A.bz,n,A.bq,10,10)},
bJQ(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2Y
else{v=x.a8
w=B.C(new B.a1(D.a2Y,new C.eQe(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aYH("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eQf(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7M,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aYH("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eQg(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dm,!0,A.a4,n,A.an,n,n,n,n)
t=o.xL("DESIGNS",A.tS)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cO6[q]
r.push(new B.D(A.iV,o.aft(p,o.x===p,new C.eQh(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hJ(n,new C.eQi(o,w),w.length,n,n,A.aO,new C.eQj(),!1),n),A.O,o.aYG(B.v(B.a([B.iF(A.b7,n,n,A.af,!0,new C.eQk(o),n,D.fku,n,D.fgV,o.k3),B.iF(A.b7,n,n,A.af,!0,new C.eQl(o),n,n,n,D.fe8,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ahi)],s),A.F,n,A.e,A.j,0,A.p)},
cCj(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAi()
if(a7.length===0)return a5.vz(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.J0,a6,a6,a6))
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
A.d.fm(m)
l=m.length!==0&&A.d.d7(m,new C.eRC(a5,m))?a5.db[A.d.gK(m)]:a6
k=new C.eRJ(a5)
j=new C.eRL()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.J0,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aT(11,11)
f=u.t(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eA:A.bG
d=new B.ay(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a5
o.push(B.aD(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bq(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Mm,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eRD(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vz(B.bW(A.bz,o,A.rS,6,6))
i=B.a([a5.o9("All words",L.alx,!1,new C.eRE(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.aft("Sentence "+a3,!1,new C.eRF(a5,a7,v,a2)))
a2=a3}}i.push(a5.aft("Clear picks",!1,new C.eRG(a5)))
i=B.bW(A.bz,i,A.bq,8,8)
g=a5.xL("SIZE OF THE PICKED WORDS",D.al_)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dgY[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eRH(e,k)
f.push(a5.aft(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bW(A.bz,f,A.bq,8,8),A.S,a5.o9("Make every word normal",A.ln,!1,new C.eRI(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cxw(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bxd,B.d(A.d.hE(D.awj,new C.eRl(q)).b,p,p,p,p,p,p,D.f1N,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cq(new C.eRm(q)),l=q.xL("HIGHLIGHT BEHIND THE WORDS",A.a_M),k=q.p1?-1:q.k4
k=q.ahW(k,new C.eRn(q),D.cYr)
w=q.p1
v=w?A.c:A.b3
n=B.a([n,A.S,m,l,B.bW(A.bz,B.a([k,B.aD(p,B.p(p,D.bJ2,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eWB,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eRq(q),p,p,p,p,p,p,!1,A.a8)],o),A.rS,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.J0,p,p,p)],o)
if(q.gaUq()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahu("Colour",l,0,360,new C.eRr(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahu("Shade",k,0.15,0.9,new C.eRs(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kg("Strength",l,0.15,1,new C.eRt(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vz(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xL("LOOK",A.yk))
m=B.a([q.o9("Bold",K.akY,q.fy,new C.eRu(q)),q.o9("Italic",K.akZ,q.go,new C.eRv(q))],o)
for(u=0;u<3;++u){l={}
k=D.cPh[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.u4:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bG,1,A.q,-1)
m.push(B.aD(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bq(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eRw(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bW(A.bz,m,A.rS,8,8))
n.push(q.xL("COLOUR",A.nh))
n.push(q.ahW(q.fx,new C.eRx(q),D.d8h))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.J0,p,p,p))
n.push(q.xL("SIZE AND PLACE",A.G5))
m=q.fr
m=q.kg("Text size",m,0.5,1.6,new C.eRo(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vz(B.v(B.a([m,q.kg("Up / down",l,0.12,0.5,new C.eRp(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cgM(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b7.j(0.6),A.q,1.6)
u=B.a([A.b7.j(0.18),A.bA.j(0.12)],x.O)
return B.aD(p,B.p(p,B.v(B.a([B.p(p,D.bOo,A.f,p,p,D.b0b,p,62,p,p,p,p,p,62),A.aB,D.fi5,A.am,D.fmG],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.ti,p,v,w,p,new B.a8(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bt5,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaYJ(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.B(B.a([B.bw(B.m(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.cj,A.bR,!1,p,!1,p,p),p),A.aq),A.bd,B.E(B.v(B.a([D.fhE,A.O,B.bW(A.bz,B.a([q.o9("Change",A.ks,!1,q.gaYJ()),q.o9("Remove",A.e6,!1,new C.eR_(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d4M[t]
u.push(q.o9(s.b,s.a,q.at===t,new C.eR0(q,t)))}u=B.bW(A.bz,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c_w(o)
break A}if(1===r){s=q.bZv()
break A}if(2===r){s=q.bFG()
break A}if(3===r){s=q.bLY()
break A}s=q.bHN()
break A}return B.v(B.a([v,A.ac,u,A.aB,s,A.S,new B.bI(A.a3,p,p,q.o9("Reset the whole picture",A.ln,!1,new C.eR1(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c_w(d){var w=this,v=x.p
return B.v(B.a([B.bW(A.bz,B.a([w.o9("Auto enhance",E.a_p,!1,new C.eQS(w)),w.o9("Make words easy to read",A.oQ,!1,new C.eQT(w))],v),A.bq,8,8),A.aB,B.cq(new C.eQU(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bZv(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kg("Exposure",n,-1.5,1.5,new C.eQw(o),0,A.k.aa(n,1))
w=o.RG
w=o.kg("Brightness",w,-0.5,0.5,new C.eQx(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kg("Contrast",v,0.4,2,new C.eQy(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kg("Fade",u,0,1,new C.eQz(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kg("Spotlight",t,0,1,new C.eQA(o),0,""+A.k.V(t*100))
s=o.Y
s=o.kg("Darken",s,0,0.85,new C.eQB(o),0,""+A.k.V(s*100))
r=o.b6
r=o.kg("Vignette",r,0,0.9,new C.eQC(o),0,""+A.k.V(r*100))
q=o.aF
q=o.kg("Shade behind words",q,0,0.85,new C.eQD(o),0,""+A.k.V(q*100))
p=o.aN
return o.vz(B.v(B.a([n,w,v,u,t,s,r,q,o.kg("Shade top & bottom",p,0,0.85,new C.eQE(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bFG(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kg("Colour strength",q,0,2.2,new C.ePS(s),1,""+A.k.V(q*100))
w=s.to
w=s.kg("Warmth",w,-1,1,new C.ePT(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kg("Tint",v,-1,1,new C.ePU(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vz(B.v(B.a([q,w,v,s.kg("Shift colours",u,-180,180,new C.ePV(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.o9("Negative",D.bE1,s.y1,new C.ePW(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xL("COLOUR WASH",A.Nl)
w=s.b0
q=B.a([null],x.Z)
A.d.v(q,D.av1)
t=B.a([u,v,s.ahW(w,new C.ePX(s),q),A.O],t)
if(s.b0!=null){q=s.b_
t.push(s.vz(s.ahu("Wash strength",q,0,0.9,new C.ePY(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bLY(){var w,v,u,t,s,r=this,q=r.y2
q=r.kg("Blur",q,0,24,new C.eQq(r),0,A.o.u(A.k.V(q)))
w=r.bd
w=r.kg("Soft focus",w,0,1,new C.eQr(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vz(B.v(B.a([q,w,r.kg("Film grain",v,0,1,new C.eQs(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xL("LIGHT LEAK",I.akU)
q=r.ba
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.av1,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahW(q,new C.eQt(r),t),A.O],u)
if(r.ba!=null){q=r.bM
u.push(r.vz(r.ahu("Leak strength",q,0,1,new C.eQu(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bHN(){var w,v,u,t,s=this,r=s.aS
r=s.kg("Zoom",r,1,3,new C.eQ1(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.kg("Left / right",w,-1,1,new C.eQ2(s),0,""+A.k.V(w*100))
v=s.bU
v=s.kg("Up / down",v,-1,1,new C.eQ3(s),0,""+A.k.V(v*100))
u=s.c8
t=x.p
return B.v(B.a([s.vz(B.v(B.a([r,w,v,s.kg("Turn",u,-180,180,new C.eQ4(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bW(A.bz,B.a([s.o9("Turn 90\xb0",H.am3,!1,new C.eQ5(s)),s.o9("Flip sideways",A.FU,s.cU,new C.eQ6(s)),s.o9("Flip upside down",A.FU,s.cX,new C.eQ7(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c2b(){var w=null,v=B.m(22),u=B.I(A.bG,A.q,1)
return B.p(w,B.v(B.a([D.eKZ,A.S,D.fjv,A.aB,B.aD(w,B.p(A.A,D.eLb,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.u4,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQV(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.ti,w,u,v,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
c_k(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eQN(p),m=x.p,l=B.B(B.a([D.bxj,p.o9("Reset",A.ln,!1,new C.eQJ(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.J0,o,o,o),j=p.xL("SHAPE",A.am_),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BZ[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aYK(n.$2(t,p.cy),62,u.b,s===t,new C.eQK(v,p),62))}}i=B.bW(A.bz,i,A.bq,8,8)
v=p.xL("RING",A.r4)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BU[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aYK(n.$2(p.cx,t),62,r.b,q===t,new C.eQL(s,p),62))}u=B.bW(A.bz,u,A.bq,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vz(p.kg("Size",s,0.12,0.4,new C.eQM(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b0E(d){return new B.a7(null,d,new B.fG(0.5625,B.cq(new C.eR5(this)),null),null)},
cwN(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bG,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.u4:q
t=new B.aT(14,14)
s=D.d6P[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bC(1,A.bh,B.aD(A.c4,B.df(q,B.v(B.a([r,A.cV,new B.qi(A.ei,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bq(t,t,t,t),q,u,A.n),D.boP,q,q,q,A.hL,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eRe(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bqT,A.lP,q,q,q)},
aPe(){var w,v,u=this,t=null,s=u.cwN(),r=u.as
A:{if(0===r){w=u.bJQ()
break A}if(1===r){w=u.cCj()
break A}if(2===r){w=u.cxw()
break A}if(3===r){w=u.cgM()
break A}if(4===r){w=u.c_k()
break A}w=u.c2b()
break A}v=x.p
return B.bw(A.rY,B.el(B.v(B.a([s,B.E(B.cw(B.a([w],v),t,D.brW,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.WE,!0),A.aq)},
aLt(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc7e(),p=B.m(16)
q=B.E(B.aD(r,B.p(r,D.eLl,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b3,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbLy()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cx,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eQj)
else t.push(D.bI7)
t.push(A.ab)
t.push(D.bz4)
return B.p(r,B.B(B.a([q,A.av,B.E(B.aD(r,B.p(r,B.B(t,A.m,r,A.b9,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.u4,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b_j,r,r,r,r,G.ah6,r,r,r)},
aYI(){var w=null
return new B.D(T.YO,B.B(B.a([B.aH(w,w,w,w,A.my,w,w,w,new C.eQv(this),w,w,w,w,w,w),D.fyE,A.b6,D.bQH],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.AJ,B.bl(!0,B.cq(new C.eRM(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.beO.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eM()
m.dB(7)
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
au(d){return d.b!==this.b}}
C.ro.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m3.prototype={}
C.zn.prototype={
ag(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nI.prototype={}
C.vU.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a7F.prototype={}
C.aqG.prototype={}
C.a02.prototype={
S(){return new C.aGQ(new B.as(A.as,$.aw()),B.jQ(!0,null,!0,!0,null,null,!1),D.dx6,B.a([],x.s),B.et([D.HL],x.Q))}}
C.aGQ.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_M(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_M=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().BY(90,700,700,A.eG),$async$a_M)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$a_M)
case 8:p=e
if(r.c!=null)r.m(new C.eXZ(r,p,q))
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
return B.i($async$a_M,v)},
a_P(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_P=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hY().aGH(78,n,1100,1100),$async$a_P)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bn(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fj(),$async$a_P)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ch(p,"data:"+k+";base64,"+A.cS.gcw().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eY_(r,p))
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
return B.i($async$a_P,v)},
b2J(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cG.aJ(A.d.gal(d.split(","))),A.A,u,u,A.cj,A.bR,!0,u,!1,u,u)
return w}catch(v){}return D.bn4},
c_q(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cq1(C.fzi(w,this.b2J(d),f),g)},
abW(d,e,f,g,h){var w=null,v=new C.eXX(f,e),u=new C.eXY(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bG:A.b7.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BD:A.Na,A.c1,w,w,w,26),w,w,w),D.edm],x.p),w),w)
else p=this.c_q(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bHP],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mp,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXW(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aW6(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cG.aJ(A.d.gal(h.split(","))),A.A,p,p,A.cj,A.bR,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bG:A.bl.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.eu,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.TH,p,p,p),1)],x.p)
if(f!=null)n.push(B.aD(p,D.a0I,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a84(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a84=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fCJ(),$async$a84)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eXF(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eXG(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a84,v)},
adN(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adN=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eXI(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eXJ(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eXK(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.ch(p,h)}w=7
return B.b(C.fy0(q,r.cx,j,new C.b0w(r.z,r.Q,r.as,r.at),new C.eXL(r),i,m,p,k),$async$adN)
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
if(p!=null)B.a5(p,!1).O(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.aa(e)
if(r.c!=null)r.m(new C.eXM(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adN,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eE,g).w
g=B.aI(d,A.bV,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b3,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aD(h,B.p(h,D.bL1,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bl.j(0.5),A.J,24)],v),D.bUE,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eYc(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0I,h,h,h,i.ax?h:new C.eYd(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbAH()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.J,10)],v)
s.push(B.hs(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vE:A.hA,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vU,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aXM),h,h,h,h,h,h,h,h,A0.IN,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iV,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aPN,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eYe(i)
s=i.aW6(A.lp,q,r,i.gchc(),s)
r=i.z
r=B.E(i.abW(new C.eYg(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.v(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.abW(new C.eYh(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gK(s)
p=i.y.length===0?h:new C.eYi(i)
s=i.aW6(A.vB,r,p,i.gchk(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gK(o)
p=B.E(i.abW(new C.eYj(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gK(n)
o=B.a([w,A.aB,D.fnV,A.at,D.fqK,A.by,u,A.O,D.fpc,A.aB,v,A.by,B.B(B.a([q,A.av,B.E(B.v(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.abW(new C.eYk(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fsr],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bfq,A.q,1)
w=C.agy(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bM6,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f7h,h,h,h),B.aL(!1,h,!0,D.e7U,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eYl(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b8G,h,u,v,h,h,A.n),h,h,h,h,D.bqA,h,h,h),h)],t))}o.push(A.by)
o.push(D.feQ)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d_w[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bG,1,A.q,-1)
u=u?A.u:A.N
w.push(new B.bC(1,A.bh,new B.D(A.ji,B.aD(h,B.df(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eF,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eYm(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fwV)
o.push(A.O)
o.push(B.cq(new C.eYn(i)))
o.push(A.by)
o.push(D.fm2)
o.push(A.O)
w=B.a([i.b5w("auto","Let AI choose",A.dW,A.PU)],t)
for(v=x.O,m=0;m<11;++m){j=D.vZ[m]
u=j.d
w.push(i.b5w(j.a,j.b,j.c,B.a([B.b0(A.d.gK(u).a),B.b0(A.d.gK(u).b)],v)))}o.push(B.bW(A.bz,w,A.bq,8,8))
o.push(A.aP)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bl.j(0.5):A.bG,A.q,1)
o.push(B.p(h,B.iF(h,A.bl,h,h,h,new C.eYf(i),D.bHg,D.fwa,h,D.fh7,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aP2,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc7i()
v=B.fn(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eQ9:A.Gi
o.push(new B.a7(h,54,B.lv(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.pb,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bl(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vt,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aaG,h,h,h,h,h,h,h,h),h)},
bN3(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eXN(this,p,d)
if(d===D.CB)return new C.aDn(p,o,q)
w=B.m(16)
v=p?E.vU:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bG,A.q,1)
s=B.X(p?A.eg:C.hEx(d),A.c,q,q,q,20)
r=C.hEy(d)
return B.aD(q,B.df(q,B.v(B.a([s,A.at,B.f4(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.ei)],x.p),A.m,q,A.b9,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hx,q,64,q,A.hy,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b5w(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bG
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aD(v,B.df(v,B.B(B.a([w,M.IE,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eF,v,v,v,M.aip,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eY1(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a01.prototype={
S(){return new C.aGP(new B.as(A.as,$.aw()))}}
C.aGP.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
adO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adO=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eXy(r))
w=1
break}B.eU()
r.m(new C.eXz(r))
t=4
q=C.i4R(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i4B(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eXA(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fXN()
f=$.Ct.h(0,k.a)
o=f==null||J.cn(f)?null:J.fp(f)
if(o==null){r.m(new C.eXB(r))
w=1
break}n=C.i4z(o,r.a.c)
C.i4v(r.a.c.a)
$.fX3=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h_y(j)
h=C.h_z(r.a.c)
e=C.h_A(r.a.c)
w=7
return B.b(C.bBt(k,r.a.c.a,j,h,new C.eXC(r),i,e,a0),$async$adO)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eXD(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adO,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eE,i).w
i=B.aI(d,A.bV,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b3,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.amj,A.f,j,j,D.aZZ,j,34,j,j,j,j,j,34),A.av,D.bxU],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a7r,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.aaa),j,j,j,j,j,j,j,j,A0.IN,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aPN,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cWS[q]
o=A.c.j(0.06)
n=k.e?j:new C.eXE(k,p)
r.push(B.mH(j,o,new B.x(p,j,Ay.Tg,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uW,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.S,B.bW(A.bz,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aP2,j,j,j)],v))
w.push(A.aP)
u=k.e
t=u?j:k.gc7j()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bl.j(0.5),A.eH.j(0.5)],x.O):D.cv0
o=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.cx,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e7Q:D.bLG
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eE(B.B(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hT,j,j,j)],v),A.m,j,A.b9,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bl(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vt,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aaG,j,j,j,j,j,j,j,j),j)}}
C.b0w.prototype={}
C.aDn.prototype={
S(){return new C.bjt(null,null)}}
C.bjt.prototype={
gawC(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pL,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawC().q()
this.buB()},
B(d){var w=null,v=this.a.d
return B.aD(w,B.c6(this.gawC(),new C.ed9(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bh0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d1E[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xk.j(0.25+r*0.6).gp(0)
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
au(d){return d.b!==this.b}}
C.arf.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.Zo.prototype={
S(){return new C.aAQ()}}
C.aAQ.prototype={
gahT(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agL(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gA7(){var w=this.e
return w===$?this.e=C.h_y(this.a.c).t(0,D.CB):w},
a7S(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7S=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dic(s))
u=3
r=A.d.hE(D.vZ,new C.did(s))
q=B.db(C.h_y(s.a.c),x.Q)
l=q
J.hF(l,D.CB)
p=l
if(s.gA7())J.ch(p,D.CB)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gA7()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h_z(i.c)
g=C.h_A(s.a.c)
w=6
return B.b(C.bBt(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7S)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agL(q,s.gahT())
f=q==null?null:q.b
n=f==null?s.gahT():f
if(!J.A(n,r.a)&&!s.gA7())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.die(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7S,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aS:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bG:A.aL,A.q,1),g=x.p,f=B.E(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bB,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dih(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cD,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vZ[w]
u=o.gahT()
t=o.f?n:new C.dii(o,v)
f.push(new C.brV(v,u===v.a,t,n))}f=B.lZ(1.25,f,3,10,10,n,A.dR,!0)
u=B.m(18)
t=o.gA7()?D.bXq:n
if(o.gA7())s=n
else s=m?A.bo:A.bK
r=B.X(A.dW,o.gA7()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gA7()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gA7()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gA7()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.av,q,B.aa8(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dij(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,I.ah9,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f7A,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fg,n,n,A.ah)
u=o.f?n:o.gbzG()
t=B.bm(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bl(!0,B.p(n,B.v(B.a([new B.D(D.bty,e,n),new B.dq(1,A.cn,f,n),new B.D(A.Ff,new B.a7(1/0,50,B.bG(B.eE(B.av(o.f?A.rI:D.foo,n,n,n),n,new B.o(n,n,n,s,n,D.bVZ,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tD,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.brV.prototype={
B(d){var w=null,v=this.c,u=A.d.gK(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.la,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lA,w,w,B.d(v.b,w,w,w,w,w,w,D.f7y,w,w,w),w)],x.p)
if(q)v.push(D.aVR)
return B.aD(w,B.df(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eF,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.ed6.prototype={
aEf(d,e,f){return e+"@"+A.a.aT(A.o.fT(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wt(d,e){return this.aEf(0,e,null)}}
C.aLo.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.b0s.prototype={
B(d){var w,v,u=null,t=C.fZo(this.c)
if(t==null)w=D.blC
else{w=B.aI(d,u,x.w).w.cHm(D.bq6,D.ePn)
v=this.d
w=B.ta(B.e1(B.anA(!1,t,!1,v,!1,390),!v,u),w)}return B.f4(A.A,new B.a7(416,870,new C.bl6(w,u),u),A.f,A.du)}}
C.bl6.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dd6[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.aoe,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dei[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.aoe,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c0(t,new B.o(t,t,t,B.m(64),D.cMR,D.bUm,A.n),A.be),0,0,0))
s.push(B.bZ(3,B.c0(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.be),3,3,3))
s.push(B.bZ(13,B.bw(B.m(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aW2,B.p(t,t,A.f,t,t,D.b_h,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.m(51),D.bna,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.lb.prototype={
pw(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.ep(A.L,!1,e.l(),A.aD,"",k,42,A.bn,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bf,j,2,"Your Presentation Title",0,0,"",D.mE,D.cQ,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.ep(A.L,!1,v.l(),A.aD,"",k,20,A.bn,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.bf,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rp(i,l,0,0,B.a([f,w,C.ep(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bn,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fs,t.l(),3,"",0,0,"",D.cm,D.f0,0.3,0.35,0.72)],s),C.cD(),D.mD,"","","Welcome",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,34,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Agenda",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
w=C.cD()
w=C.rp(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.bf,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uj,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mD,"","","Agenda",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,32,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Main Idea",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
f=C.cD()
f=C.rp(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,21,A.bn,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.bf,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cm,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mD,"","","Key Point 1",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,30,A.bn,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bf,j,2,"Compare & Contrast",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
r=C.cD()
r=C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.bf,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.08,0.24)
q=C.cD()
q=C.rp(i,l,0,0,B.a([u,r,C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.bf,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.52,0.24)],s),C.cD(),D.mD,"","","Key Point 2",D.dd)
r=C.cD()
r=C.ep(A.L,!1,e.l(),A.aD,"",k,48,A.bn,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bf,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cD()
p=C.Bw(l,l,l,l,D.Cx,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rp(i,l,0,0,B.a([r,C.ep(A.L,!1,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.bf,j,2,"Questions?",0,0,"",D.cm,D.cQ,0.7,0.15,0.58)],s),C.cD(),D.mD,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Et.prototype={
bA(d){return this.e.$1(d)}}
C.eu.prototype={}
C.iZ.prototype={}
C.Ek.prototype={
gaK1(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agy(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a36(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ek(v,u,t,d==null?w.d:d)},
Fu(d){return this.a36(null,d,null,null)},
aD_(d){return this.a36(null,null,null,d)},
cHk(d,e){return this.a36(d,e,null,null)},
baD(d){return this.a36(d,null,null,null)},
baK(d){return this.a36(null,null,d,null)}}
C.Ne.prototype={
S(){return new C.biQ(new B.eS(0,$.aw()),null,null)}}
C.biQ.prototype={
a_(){var w,v=this
v.a1()
w=v.qx(new C.dTC(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.iT(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.U$=$.aw()
w.P$=0
this.bu3()},
B(d){var w=C.agy(this.a.c.a)
if(w==null)w=A.d.gK(D.GD)
return B.cq(new C.dTB(this,w,C.hes(this.a.c.d)))}}
C.bqu.prototype={
B(d){return B.nN(A.V1,this.e,new C.eWM(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.bdU.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aRR(d,e,v)
break
case"confetti":w.bGb(d,e,v)
break
case"crown":w.bHO(d,e,v)
break
case"aurora":w.bAL(d,e,v)
break
case"champagne":w.bE0(d,e,v)
break
case"diamonds":w.bJZ(d,e,v)
break
case"starburst":w.cuw(d,e,v)
break
case"balloons":w.bAZ(d,e,v)
break
case"galaxy":w.bOQ(d,e,v)
break
case"redcarpet":w.clu(d,e,v)
break
case"coins":w.bFy(d,e,v)
break
case"lanterns":w.bZ0(d,e,v)
break
case"hearts":w.bWD(d,e,v)
break
case"petals":w.cgE(d,e,v)
break
case"butterflies":w.bD1(d,e,v)
break
case"neon":w.c1W(d,e,v)
break
case"disco":w.bK9(d,e,v)
break
case"sunrise":w.cw3(d,e,v)
break
case"pearls":w.cfI(d,e,v)
break
case"snow":w.cub(d,e,v)
break
case"laurel":w.bZ6(d,e,v)
break
case"ribbons":w.co2(d,e,v)
break
case"kente":w.bYP(d,e,v)
break
case"trophy":w.czI(d,e,v)
break
case"shooting":w.cs_(d,e,v)
break
case"bokeh":w.bBj(d,e,v)
break
case"orbits":w.cdm(d,e,v)
break
case"flowers":w.bO6(d,e,v)
break
case"music":w.c1E(d,e,v)
break
case"mandala":w.c05(d,e,v)
break
case"sparklers":w.cuk(d,e,v)
break
case"city":w.bEQ(d,e,v)
break}},
rt(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nB
u=new B.aO(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.F(new B.b5(w,s))
u.F(new B.cU(w,t,w+f,t))
u.F(new B.cU(w,t,w,t+f))
u.F(new B.cU(w,t,w-f,t))
u.F(new B.cU(w,t,w,s))
u.F(new B.bF())
d.aP(u,v)
d.ae(e,f*0.18,v)},
lI(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cW(q,v)*2.5)+C.cW(q,u)*6.28)+1)/2
this.rt(d,new B.u(C.cW(q,t)*o,C.cW(q,s)*n),m*(0.006+0.014*C.cW(q,r))*(0.5+p),h,p*p)}},
aRR(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lI(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aF],w),B.a([A.ir,A.bA],w),B.a([A.ev,A.aR],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bv(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cW(h,1))
f=g+c0*(C.cW(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cW(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.lh(new B.u(g,c1),new B.u(f,e),A.ct.aw(0,i/0.22))
a0.toString
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.rr(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bP
a2=B.lh(new B.u(g,c1),a0,0.75)
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
a6=A.ct.aw(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cW(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hw(A.G,o)
a3=a8.H()
t.drawCircle(f,e,p*a4,a3)
a3.delete()}for(a4=a5>0.45,a8=a7*0.8,a2=c2*(0.16+0.1*a2)*a6,a9=a5*a5*c2*0.12,b0=a9*0.8,b1=0;b1<a0;++b1){b2=b1/a0*3.141592653589793*2+C.cW(h,b1+10)*0.2
b3=a2*(0.75+0.25*C.cW(h,b1+60))
b4=f+Math.cos(b2)*b3
b5=e+Math.sin(b2)*b3+a9
b6=Math.cos(b2)
b7=Math.sin(b2)
b8=(b1&1)===0?d[0]:d[1]
$.W()
b9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bP
b9.a=A.nB
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cW(h,b1+120)>0.5)this.rt(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bGb(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d7W,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aY(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cW(u,1)))+C.cW(u,2)*w,w)
s=C.cW(u,3)
r=Math.sin(a3*(0.8+C.cW(u,4))+u)
q=h*(0.012+0.012*C.cW(u,5))
p=Math.cos(a3*(2+3*C.cW(u,6))+u)
o=D.Pm[A.o.D(A.k.bv(C.cW(u,7)*5),0,4)]
J.by(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cW(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.E(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ap,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bA(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cE(m.gbK().a.snapshot()):t).a,k)
k.delete()}else{t=B.cl(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c_(t),k)
k.delete()}f.restore()}this.lI(a1,a2,a3,25,A.bL,30)},
bHO(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.u(a5,a6)
for(v=x.O,u=a7*1.2,t=a8.a,s=b0*0.12,r=x.v,q=0;q<16;++q){p=q/16*3.141592653589793*2+s
o=$.W()
n=B.a([],r)
m=new B.aO(o.r,A.ap,a4,a4,n)
n.push(new B.b5(a5,a6))
o=p-0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
o=p+0.07
n.push(new B.ap(a5+Math.cos(o)*a7*1.2,a6+Math.sin(o)*a7*1.2))
n.push(new B.bF())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bav],v),a4,a4).av(0,B.bU(w,u)))
l=o.H()
o=m.gbK().a.snapshot()
t.drawPath((m.e=new B.cE(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.W().r,A.ap,a4,a4,B.a([],r))
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
i.F(new B.bF())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.N()
n.saq(new B.a8(A.b_,A.b4,A.x,D.d6K,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aP(i,n)
for(v=[D.emK,D.egw,D.evR],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.hX.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.x1(i),u=B.a([],x.X),o=new B.vw(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b9(B.jW(y.M));--f
o.jq()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cC([new B.Hd(o,f),0,d*h,!0]),B.a([],r))
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fB
f.r=A.bL.gp(0)
l=f.H()
f=d.gbK().a.snapshot()
t.drawPath((d.e=new B.cE(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rt(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lI(a8,a9,b0,45,A.bL,40)},
bAL(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lI(a8,a9,b0,60,A.c,50)
w=[D.eGH,D.eGp,D.eGj,D.eHF]
for(v=a7*0.01,u=a8.a,t=a7*0.14,s=a7*0.06,r=a5+10,q=a5/40,p=x.v,o=0;o<4;++o){n=w[o].a
m=n[0]
l=n[1]
k=n[2]
j=n[3]
n=$.W()
i=B.a([],p)
h=new B.aO(n.r,A.ap,null,null,i)
for(n=a6*l,g=b0*k,f=g*1.4,e=0;e<=r;e+=q){d=e/a5
a0=n+Math.sin(d*4+g+j)*a7*0.07+Math.sin(d*9-f+j)*a7*0.025
if(e===0){d=new B.b5(e,a0)
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
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nB
n.z=new B.hw(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbK().a.snapshot()):n).a,a2)
a2.delete()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nB
n.z=new B.hw(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbK().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cW(a4,1))+C.cW(a4,2)*a3,a3)
r=C.cW(a4,3)
q=Math.sin(b0+a4)
p=C.cW(a4,4)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.vd.j(0.4+0.5*C.cW(a4,5)).gp(0)
n.a=A.nB
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bE0(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hH.j(0.25+0.1*h),D.WO],x.O),l,l).av(0,B.bU(new B.u(g,f),e)))
a1.ae(new B.u(g,f),e,a0)
for(h=i*0.008,g=a1.a,f=a3*3,e=x.v,w=0;w<6;++w){v=(w&1)===0
a0=B.a([],e)
u=new B.aO(d.r,A.ap,l,l,a0)
d=v?0:k
t=j*(0.05+w*0.07)
a0.push(new B.b5(d,t))
for(s=1;s<=20;++s){d=s/20*k
r=v?d*0.45:k-d*0.45
d=new B.ap(r,t+s*i*0.012+Math.sin(s*0.8+f+w)*i*0.02)
a0.push(d)
q=u.f
if(q!=null)d.bA(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.Pm[A.o.E(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cE(u.gbK().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cW(w,1)))+C.cW(w,2)*o,o)
r=k*(0.1+0.8*C.cW(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cW(w,4))
if(n<f){this.rt(a1,new B.u(r,n),m*2.4,A.bL,A.k.D(n/f,0,1))
continue}$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.Au.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bJZ(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lI(a9,b0,b1,30,A.lc,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cW(p,1))
n=a7+o*4
m=A.k.E(t*(0.04+0.06*C.cW(p,2))+C.cW(p,3)*n,n)-o*2
l=C.cW(p,4)*a6+Math.sin(s+p)*a8*0.02
J.by(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.W()
g=B.a([],q)
f=new B.aO(h.r,A.ap,a5,a5,g)
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
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.ax,A.aC,A.x,D.d2E,a5,a5).av(0,B.cl(A.J,k*1.2,o)))
a2=g.H()
g=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cE(g)).a,a2)
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
if(a4>0.85)this.rt(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cuw(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
for(w=d.a,v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.W()
o=B.a([],v)
n=new B.aO(p.r,A.ap,null,null,o)
o.push(new B.b5(h,g))
p=s-q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
p=s+q
o.push(new B.ap(h+Math.cos(p)*f*1.3,g+Math.sin(p)*f*1.3))
o.push(new B.bF())
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbK().a.snapshot()
w.drawPath((n.e=new B.cE(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.E(a0+l*0.6,1.8)/1.8
$.W()
u=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bv(a0/2.4)
k=A.k.E(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cW(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bmy.aw(0,k)*(0.5+0.5*C.cW(t,v)))
this.rt(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cW(t,3)),D.Pm[A.o.D(A.k.bv(C.cW(t,4)*5),0,4)],u)}},
bAZ(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cW(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cW(o,2))+C.cW(o,3)*m,m)
j=C.cW(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.avq[A.o.E(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ap,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bA(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cE(f.gbK().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cl(new B.u(j,k),n*2.3,l)
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bT(D.aW5,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.avh,a3).av(0,a2))
a1=l.H()
u.drawOval(B.c_(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ap,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bF())
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbK().a.snapshot()
u.drawPath((g.e=new B.cE(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cW(o,11))+C.cW(o,12)*m,m)
r=C.cW(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cl(A.J,t,v)
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.avq[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c_(s),a1)
a1.delete()
u.restore()}},
bOQ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lI(b1,b2,b3,50,A.c,70)
for(w=[D.eGP,D.eGv,D.eGB],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bU(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.E(i,3)
g=C.cW(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cW(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bL,A.eA,g)
k.toString
d=C.cW(i,3)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cW(i,4)).gp(0)
a0.a=A.nB
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.Au.j(0.55),D.aeM],u),a4,a4).av(0,B.bU(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bv(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cW(a2,9)),a6*0.1*C.cW(a2,8))
a5=B.lh(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lh(a3,a5,0.6)
a6.toString
a8=B.N()
a8.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.rr(a3,a5)))
a8.c=a7*0.005
a8.d=A.bP
b1.bC(a6,a5,a8)}},
clu(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
for(w=x.O,v=b9.a,u=-b8*0.05,t=b7*1.3,s=x.v,r=0;r<3;++r){q=b6*(0.2+r*0.3)
p=1.5707963267948966+Math.sin(c1*(0.5+r*0.15)+r*2)*0.45
o=$.W()
n=B.a([],s)
m=new B.aO(o.r,A.ap,b5,b5,n)
n.push(new B.b5(q,u))
o=p-0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
o=p+0.16
n.push(new B.ap(q+Math.cos(o)*t,u+Math.sin(o)*t))
n.push(new B.bF())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.Au.j(0.28),D.aeM],w),b5,b5).av(0,B.bU(new B.u(q,u),t)))
o.a=A.nB
l=o.H()
q=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cE(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.er:A.eP)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cU(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a9.saq(new B.a8(A.a3,A.a7,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cE(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hH.gp(0)
b1.c=o
b1.d=A.bP
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ap,b5,b5,B.a([],s))
w=b7*0.78
b2.F(new B.b5(b6*0.42,w))
b2.F(new B.ap(b6*0.58,w))
b2.F(new B.ap(b6*0.8,b7))
b2.F(new B.ap(b6*0.2,b7))
b2.F(new B.bF())
v=B.N()
v.saq(D.bVT.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aP(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cW(r,1))+C.cW(r,2)*b3,b3)
u=C.cW(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rt(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cW(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bFy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cW(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cW(t,2))+C.cW(t,3)*r,r)-q
o=C.cW(t,4)*i
n=Math.cos(f*(2+3*C.cW(t,5))+t)
m=Math.abs(n)
l=B.cl(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.dhu:D.cAH,null,null).av(0,l))
k=q.H()
v.drawOval(B.c_(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bjs.gp(0)
k=j.H()
v.drawOval(B.c_(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rt(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lI(d,e,f,30,A.bL,110)},
bZ0(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lI(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cW(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cW(p,2))+C.cW(p,3)*n,n)
l=C.cW(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bT(A.A,0.5,A.x,d,0,B.a([W.X_.j(0.45*k),D.adB],u),d,d).av(0,B.bU(new B.u(l,m),j)))
g=h.H()
v.drawCircle(l,m,j,g)
g.delete()
j=B.a([],q)
f=new B.aO(i.r,A.ap,d,d,j)
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
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.baG,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b_,A.b4,A.x,B.a([D.bf2,i],u),d,d).av(0,B.cl(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cE(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bWD(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cW(p,1))
n=a1+o*4
m=A.k.E(s*(0.05+0.06*C.cW(p,2))+C.cW(p,3)*n,n)
l=C.cW(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.by(v.save())
v.translate(l*a0+k*a2*0.03,a1+o*2-m)
v.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
v.scale(j,j)
m=$.W()
l=B.a([],t)
i=new B.aO(m.r,A.ap,d,d,l)
m=o*0.9
l.push(new B.b5(0,m))
k=-o
h=k*0.2
g=k*1.6
l.push(new B.pA(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pA(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cUO[A.o.E(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bT(A.rV,0.5,A.x,d,0,B.a([A.c,f,l],u),I.a1R,d).av(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbK().a.snapshot()
v.drawPath((i.e=new B.cE(m)).a,e)
e.delete()
v.restore()}this.lI(a3,a4,a5,30,A.ir,130)},
cgE(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cW(q,1))
o=g+p*4
n=A.k.E(t*(0.05+0.06*C.cW(q,2))+C.cW(q,3)*o,o)
m=C.cW(q,4)
l=Math.sin(s+q*0.7)
J.by(v.save())
v.translate(m*h+l*f*0.06,n-p*2)
v.rotate((a0*(0.5+C.cW(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.W()
m=B.a([],u)
k=new B.aO(n.r,A.ap,i,i,m)
n=-p
m.push(new B.b5(0,n))
l=n*0.2
m.push(new B.cU(p,l,0,p))
m.push(new B.cU(n,l,0,n))
m.push(new B.bF())
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cv_:D.d3U
n.saq(new B.a8(A.a3,A.a7,A.x,m,i,i).av(0,B.bU(A.J,p)))
j=n.H()
n=k.gbK().a.snapshot()
v.drawPath((k.e=new B.cE(n)).a,j)
j.delete()
v.restore()}this.lI(d,e,a0,25,A.bL,140)},
bD1(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lI(b0,b1,b2,40,A.bL,150)
for(w=Math.max(4,A.k.V(16*this.d)),v=b0.a,u=x.v,t=b2*9,s=b2*0.5,r=0;r<w;++r){q=a9*(0.035+0.025*C.cW(r,1))
p=Math.sin(b2*(0.15+0.1*C.cW(r,2))+r*2.1)
o=Math.sin(b2*(0.21+0.1*C.cW(r,3))+r*1.3)
n=0.25+0.75*Math.abs(Math.cos(t+r))
J.by(v.save())
v.translate(a7*(0.5+0.45*p),a8*(0.5+0.42*o))
v.rotate(Math.sin(s+r)*0.4*180/3.141592653589793,0,0)
for(p=[-1,1],o=q*0.04,m=-q,l=q*1.4,k=0+l,j=m+q*2,i=(r&1)===0,h=q*0.2,g=q*0.8,f=q*1.2,e=m*1.3,d=m*0.1,a0=0;a0<2;++a0){a1=p[a0]
J.by(v.save())
v.scale(a1*n,1)
a2=$.W()
a3=B.a([],u)
a4=new B.aO(a2.r,A.ap,a6,a6,a3)
a3.push(new B.b5(0,0))
a3.push(new B.pA(f,e,l,d,h,0))
a3.push(new B.pA(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a7,A.x,i?D.d3D:D.d6e,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbK().a.snapshot()
v.drawPath((a4.e=new B.cE(a2)).a,a5)
a5.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AC.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cE(a4.gbK().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.biL.gp(0)
p.c=q*0.1
p.d=A.bP
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c1W(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.awt[t].j((1-s)*0.9).gp(0)
q.z=new B.hw(A.G,v)
p=r*0.3
p=B.bx(B.cl(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cW(m,1)*4)+m)))
k=D.awt[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hw(A.a9Z,p)
o=j.H()
u.drawRRect(B.er(i),o)
o.delete()}},
bK9(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cW(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cW(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nG,A.dv][A.o.E(p,4)]
j=C.cW(p,3)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nB
i.z=new B.hw(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bC(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.N()
t.r=A.dA.gp(0)
a3.ae(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ap,null,null,B.a([],x.v))
a1.F(new B.k1(B.bU(v,u)))
a3.qu(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.E(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bk,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c_(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rt(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cw3(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.aw(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aO(r.r,A.ap,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bF())
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bL.j(0.1).gp(0)
o=r.H()
r=p.gbK().a.snapshot()
w.drawPath((p.e=new B.cE(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b6I.j(0.6),D.adB],x.O),h,h).av(0,B.bU(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.N()
d.saq(D.eec.av(0,B.bU(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cW(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cl(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()
i=B.cl(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c_(i),o)
o.delete()}this.lI(a2,a3,a4,20,A.hX,180)},
cfI(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ap,f,f,q)
q.push(new B.b5(0,d))
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
r=new B.bF()
q.push(r)
q=p.f
if(q!=null)r.bA(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cz,A.j6,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cE(p.gbK().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cW(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cW(i,2))+C.cW(i,3)*j,j)
n=C.cW(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bT(An.pk,0.5,A.x,f,0,D.d9x,f,f).av(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lI(a1,a2,a3,25,A.c,190)},
cub(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cW(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cW(r,2))+C.cW(r,3)*p,p)
n=C.cW(r,4)
m=Math.sin(t+r)
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cW(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bP
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
h.delete()}v.restore()}this.lI(d,a0,a1,40,A.ev,200)},
bZ6(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.u(a0,a1)
v=a2*0.4
for(u=[-1,1],t=13*A.k.D(a5/2,0,1),s=a3.a,r=a2*0.05,q=a2*0.02,p=r/2,o=-q,n=0+r,m=o+q*2,l=0;l<2;++l){k=u[l]
for(j=k>0,i=0;i<A.k.dw(t);++i){h=1.5707963267948966+k*(0.35+i/13*2.2)
g=Math.cos(h)
f=Math.sin(h)
J.by(s.save())
s.translate(a0+g*v,a1+f*v)
s.rotate((h+(j?0.6:2.541592653589793))*180/3.141592653589793,0,0)
g=B.cl(new B.u(p,0),q,r)
$.W()
f=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
f.saq(D.bVF.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c_(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.baV.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.rt(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lI(a3,a4,a5,40,A.bL,210)},
co2(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hH,A.hX],a6),B.a([A.oA,A.ir],a6),B.a([A.aE,A.eA],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
k=B.a([],o)
j=new B.aO(l.r,A.ap,null,null,k)
i=B.a([],n)
for(l=m*0.2,h=a4*(0.3+l),l=b0*(0.8+l),g=0;g<=40;++g){f=g/40
e=f*a3
d=h+Math.sin(f*5+l+m)*a5*0.1
a0=a5*(0.03+0.03*(0.5+0.5*Math.sin(f*7+p+m)))
f=d-a0
if(g===0){f=new B.b5(e,f)
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
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bS(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bA(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bF()
k.push(l)
k=j.f
if(k!=null)l.bA(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.saq(new B.a8(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),I.aw7,new B.mm(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cE(j.gbK().a.snapshot()):l).a,a2)
a2.delete()}this.lI(a8,a9,b0,40,A.c,220)},
bYP(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.E(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.E(A.k.bv(g/t),5)
a1=g+t
$.W()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a1U[a3].gp(0)
a4=a2.H()
s.drawRect(B.c_(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1U[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c_(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cW(a0,1))+C.cW(a0,2)*a6,a6)
v=C.cW(a0,3)
t=C.cW(a0,4)
this.rt(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1U[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
czI(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
l=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.F(new B.b5(v,a2))
w=a1+w
l.F(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.F(new B.cU(w,r,p,k))
w=a2+m*0.95
l.F(new B.ap(p,w))
p=n*0.3
j=a2+m
l.F(new B.ap(a1+p,j))
l.F(new B.ap(a1-p,j))
q=a1-q
l.F(new B.ap(q,w))
l.F(new B.ap(q,k))
l.F(new B.cU(v,r,v,a2))
l.F(new B.bF())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cl(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c_(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.N()
a1.saq(new B.a8(A.a3,A.a7,A.x,D.dbT,A.avx,null).av(0,new B.a9(v,a2,r,j)))
a4.aP(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rt(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bGc(a4,a5,a6,60)},
bGc(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cW(p,31))+C.cW(p,32)*v,v)
n=C.cW(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cl(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.Pm[A.o.E(p,5)].gp(0)
m=n.H()
u.drawRect(B.c_(o),m)
m.delete()
u.restore()}},
cs_(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lI(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cW(o,1)*1.6
m=A.k.E(a2+C.cW(o,2)*n,n)/n
l=e*(C.cW(o*7+A.k.bv((a2+C.cW(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bL],s),null,null).av(0,B.rr(new B.u(l,h),i)))
g.c=r
g.d=A.bP
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rt(a0,i,p,A.c,1-m)}},
bBj(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cW(r,1))
p=A.k.E(C.cW(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cW(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.axZ[l].j(n).gp(0)
m.a=A.nB
m.z=new B.hw(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.axZ[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cdm(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.by(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cl(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
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
k.r=A.hX.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hH.j(0.4).gp(0)
k.z=new B.hw(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lI(d,e,f,45,A.bL,270)},
bO6(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.E(o,4)
m=C.cW(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.E(a7+C.cW(o,2)*4,4)/4
j=A.ew.aw(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cW(o,3))*(j*i)
if(h<=0.5)continue
g=D.d0R[A.o.E(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cl(new B.u(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b_,A.b4,A.x,B.a([A.c,g],u),null,null).av(0,B.cl(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c_(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hH.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lI(a5,a6,a7,30,A.hX,280)},
c1E(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.auD[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c_(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cW(g,1))+C.cW(g,2)*h,h)
e=C.cW(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cW(g,4))
a0=D.auD[A.o.E(g,4)]
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.by(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cl(A.J,d,d*1.5)
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
c05(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a1=new B.aO(d.r,A.ap,a3,a3,a0)
a0.push(new B.b5(0,i))
a0.push(new B.cU(h,m,0,g))
a0.push(new B.cU(j,m,0,i))
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bL,A.nG,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbK().a.snapshot()
v.drawPath((a1.e=new B.cE(d)).a,a2)
a2.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hX.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.saq(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hH.j(0.25),D.WO],x.O),a3,a3).av(0,B.bU(w,a4)))
a7.ae(w,a4,a5)
this.lI(a7,a8,a9,30,A.bL,300)},
cuk(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bk.gp(0)
h.c=q
h.d=A.bP
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.saq(new B.bT(A.A,0.5,A.x,null,0,B.a([A.hX,A.hH.j(0.6),D.WO],o),null,null).av(0,B.bU(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cW(f,1)
d=A.k.E(b2+C.cW(f,2)*e,e)/e
a0=A.k.bv((b2+C.cW(f,2)*e)/e)
a1=C.cW(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cW(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hX,A.aF,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bP
a6.a=A.nB
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
g.delete()}}}this.lI(b0,b1,b2,35,A.bL,310)},
bEQ(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aRR(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cW(n,1))
l=a8*(0.14+0.24*C.cW(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bWB.av(0,j))
h=i.H()
r.drawRect(B.c_(j),h)
h.delete()
g=A.k.bv(m/q)
f=A.k.bv(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cW(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bL.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c_(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aZm.prototype={
B(d){var w,v=null,u=new C.c7Z(),t=new C.c80(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ann,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c8_(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.GD[w]))
return B.bW(A.bz,s,A.bq,12,10)}}
C.YX.prototype={
S(){return new C.azd()}}
C.azd.prototype={
gvA(){var w=this.d
return w===$?this.d=this.a.c:w},
gaYN(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b5,A.aN),$.aw())}return v},
gawD(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaK1()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.as(new B.bb(w,A.b5,A.aN),v)}return t},
q(){var w=this.gaYN(0),v=$.aw()
w.U$=v
w.P$=0
w=this.gawD()
w.U$=v
w.P$=0
this.a2()},
ZC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ZC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().BY(90,700,700,A.eG),$async$ZC)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$ZC)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahv(o,".png")?"image/png":"image/jpeg"
r.m(new C.d7p(r,n,p))
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
return B.i($async$ZC,v)},
aYM(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aPS,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agy(p.gvA().a)
if(n==null)n=A.d.gK(D.GD)
w=p.gvA()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.Ne(p.gvA(),!1,!0,new B.cy(w.a+v,x.W)),0,0,0),B.ao(o,B.Hx(A.my,new C.d7u(d),B.ny(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hx(D.bGa,new C.d7v(p),B.ny(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aPM,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaYN(0),o,o,o,o,o,2,p.aYM("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7w(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hs,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hH.j(0.6),A.q,1)
if(p.gvA().d.length===0)q=D.bJw
else{q=C.hes(p.gvA().d)
if(q==null)q=new Uint8Array(0)
q=B.hU(B.fL(q,A.A,o,o,A.cj,A.bR,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aD(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7k(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvA().d.length!==0)r.push(B.aH(o,o,o,o,D.a0I,o,o,o,new C.d7x(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bl(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.B(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawD(),o,o,o,o,o,2,p.aYM("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7y(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dm,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.di(D.bIp,D.fxQ,new C.d7z(p,d),B.bm(A.aw,o,o,o,A.w,o,A.cl,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.b_t,o,o,o,o,A.Fc,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKS.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.Zh.prototype={
S(){return new C.bfn(new B.as(A.as,$.aw()))}}
C.bfn.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aS:A.ak,k=B.aI(d,A.bV,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bG:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cD,l,o,o,o,o),o,o,o,new C.deb(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cMh[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bK
u.push(B.aL(!1,new B.bq(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.rL,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bq(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dec(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hL,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.C5(A.bz,6,6,A.bq,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aQ
e.push(B.B(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aQK,new C.ded(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bl(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cn,B.cw(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tD,A.Yv,o,o,o),!0,!1,A.af,!0,!0)}}
C.beL.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eM()
a2.dB(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.QW
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aC(4))+n)
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
au(d){return d.b!==this.b}}
C.bes.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.ky),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lt
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ap,a0,a0,B.a([],a5))
a4.F(new B.iW(a1))
v=new B.Sg(new B.vw(B.x1(a4),!1,B.a([],x.X))).gK(0)
a4=v.a
a3=v.b
a4.jq()
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
j.d=A.bP
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cC([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cC([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cC([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbK().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}}a4.jq()
e=u[a3].Mt(n).a
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mC
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
au(d){return d.b!==this.b}}
C.bnm.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eM()
e.dB(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hc()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galW()*1.4
for(s=this.d,r=x.O,q=d.a,p=this.b,o=p*0.25,p*=2,n=x.v,m=0;m<14;++m){l=o+m*3.141592653589793*2/14
k=0.06+0.04*Math.sin(p+m)
j=$.W()
i=B.a([],n)
h=new B.aO(j.r,A.ap,f,f,i)
i.push(new B.b5(w,v))
j=l-k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
j=l+k
i.push(new B.ap(w+Math.cos(j)*t,v+Math.sin(j)*t))
i.push(new B.bF())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.saq(B.aUs(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jo
g=j.H()
j=h.gbK().a.snapshot()
q.drawPath((h.e=new B.cE(j)).a,g)
g.delete()}},
au(d){return d.b!==this.b}}
C.b9m.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eM()
a0.dB(this.c*7+3)
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
e.z=new B.hw(A.G,k*0.35)
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
au(d){return d.b!==this.b}}
C.b9_.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eM()
a0.dB(this.c+11)
for(w=this.b,v=a2.b,u=v*0.04,t=a1.a,s=this.d,r=v*0.08,q=a2.a,p=q/24,o=w*2,n=x.v,m=0;m<3;++m){l=v*(0.25+m*0.25+(a0.aj()-0.5)*0.1)
k=v*(0.06+a0.aj()*0.05)
j=a0.aj()*3.141592653589793*2
i=$.W()
h=B.a([],n)
g=new B.aO(i.r,A.ap,null,null,h)
h.push(new B.b5(0,l))
for(f=0;f<=q;f+=p){i=f/q
i=new B.ap(f,l+Math.sin(i*3.141592653589793*2+w+j)*k+Math.sin(i*7+o)*k*0.25)
h.push(i)
e=g.f
if(e!=null)i.bA(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bP
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hw(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cE(g.gbK().a.snapshot()):i).a,d)
d.delete()}},
au(d){return d.b!==this.b}}
C.bug.prototype={
a4(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.saq(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cTA,null).av(0,u))
d.aY(u,w)
w=u.cB(-3)
v=B.N()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jo
d.aY(w,v)},
au(d){return d.b!==this.b}}
C.brh.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bv(d)*7,p=0;p<7;++p){o=new B.eM()
o.dB(q+p)
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
i.d=A.bP
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
g.z=new B.hw(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
au(d){return d.b!==this.b}}
C.bqq.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.nB
v.saq(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aY(w,v)},
au(d){return d.b!==this.b}}
C.bdN.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdO(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.ae
w.c=1.4
w.d=A.bP
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.rn
r=new C.d76(this,r*0.16,d,u,w)
t=e.gdO()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
au(d){return d.b!==this.b}}
C.xs.prototype={}
C.Ix.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.aqF.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uB.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mv.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hz.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eK.prototype={
hC(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.ep(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
ag(){var w,v=this,u=B.T(x.N,x.z)
u.n(0,"id",v.a)
u.n(0,"type",v.b.b)
u.n(0,"x",v.c)
u.n(0,"y",v.d)
u.n(0,"w",v.e)
u.n(0,"h",v.f)
u.n(0,"text",v.r)
u.n(0,"fontSize",v.w)
u.n(0,"fontWeight",v.x.gdJ(0))
u.n(0,"fontStyle",v.y.a)
u.n(0,"decoration",C.hSB(v.z))
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
C.lF.prototype={
hC(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("L<1,eK>")
n=B.C(new B.L(n,new C.cdp(),m),m.k("ak.E"))
return C.rp(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("L<1,a4<n,@>>")
n=B.C(new B.L(n,new C.cdq(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i0.prototype={
gb8Y(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRV(){if(!C.kv(this.w))return!1
var w=this.gb8Y()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cZ(w.bS())},
hC(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("L<1,lF>")
r=B.C(new B.L(r,new C.cde(),q),q.k("ak.E"))
return C.Bw(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
ag(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.a6().ac())
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
v=B.U(w).k("L<1,a4<n,@>>")
w=B.C(new B.L(w,new C.cdf(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jG.prototype={}
C.b0v.prototype={
B(d){return B.cq(new C.cdk(this))}}
C.anQ.prototype={
S(){return new C.biA(null,null)}}
C.biA.prototype={
gaYO(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fU,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaYO().q()
this.btO()},
B(d){return B.c6(this.gaYO(),new C.dFR(),this.a.c)}}
C.aKD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.ad0.prototype={
Pw(d,e,f,g){return this.bNN(d,e,f,g)},
bNN(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Pw=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Pw)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).O(null)
t=d.I(x.q).f
t.T(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ef,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pw,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dl,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dr,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aP,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adi(A.hB,"Download",A.bZ,new C.epz(w,d),!0,v),1),A.av,B.E(new C.adi(A.vG,"Share",A.bj,new C.epA(w,d),!1,v),1),A.av,B.E(new C.adi(A.hn,"Safari",A.aZ,new C.epB(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.epC(d),v,v))
return B.bl(!0,new B.D(A.pO,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iQ,v,t,u,s,v,A.n),v,v,v,v,A.Fj,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adi.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eE(B.v(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bvU,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b0t.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apQ(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c7l().ak7(1.35)
s=B.av7(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bzg(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bRu,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cy("slide_tf_"+g.a,x.W),h,A.wj,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zu,A.an,h,A.T7,h,h)
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
w=n?t.cH7(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eD:A.D7
p=B.d(f,new B.cy("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.SZ:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fB
j.r=A.az.gp(0)
j=i.co5(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.co3(k,t,l?A.SZ:s)],x.p),h)}else w=i.co4(p,t,g.k2?A.SZ:s,m)
v=new B.nd(w,new B.cy("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aD(A.c4,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bXj()
case 3:return i.cfH()
case 2:return B.b3(h,h,h,new C.b0q(g,h),A.f1)
case 5:g=g.r
return new C.b0s(g,!i.e&&i.z==null,h)}},
c7l(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jY
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cR(D.adz,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cR(l,A.J,6*v),new B.cR(l,A.J,16*v),new B.cR(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.c7
w=A.az
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mJ
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cR(A.bA,new B.u(v,v),0)],x.r)
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
w=W.Kw
break
case"ice":v=o.d
e=B.a([new B.cR(A.aR,A.J,10*v),new B.cR(A.cz,A.J,22*v)],x.r)
k=A.N
w=A.ev
break
case"chalk":h=o.d
e=B.a([new B.cR(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jY
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cVy[q]
u.push(new B.cR(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.saq(D.bU3.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.Kk,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.saq(D.bUo.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cR(l,A.J,14*o.d)],x.r)
w=l
k=A.a5
break
case"lowercase":h=2*o.d
w=l
k=A.cv
break
case"double":v=o.d
u=5*v
v=10*v
e=B.a([new B.cR(l.j(0.45),new B.u(u,u),0),new B.cR(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jY
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ayA(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eMQ.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cdi(h)
v=r.k2?C.i4a(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eD:A.D7
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Xt(B.de(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
co5(d,e,f,g){return this.ayA(d,e,f,!1,g)},
co3(d,e,f){return this.ayA(d,e,f,!1,null)},
co4(d,e,f,g){return this.ayA(d,e,f,g,null)},
bzg(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bXj(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.av(B.X(s.b===D.l1?A.Gd:A.Bp,A.aA,t,t,t,32),t,t,t)}w=u.bCf(r)
if(s.b===D.l1){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aNa(r,!0)
return C.fzi(s.go,v,s.id)}return w},
aNa(d,e){var w,v,u,t
try{w=C.i4t(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cq(new C.cdh(this,w,v,e))
return u}catch(t){return D.abl}},
bCf(d){return this.aNa(d,!1)},
cfH(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b4I
return C.i4L(v,w.db,w.dx)}}
C.b0q.prototype={
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
switch(f.ax.a){case 0:d.aY(s,g)
d.aY(s,w)
break
case 1:d.hR(s,g)
d.hR(s,w)
break
case 2:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
break
case 3:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
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
r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
break
case 4:h=t/2
w.c=v+2
d.bC(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
r.F(new B.b5(q,0))
r.F(new B.ap(u,0))
r.F(new B.ap(u-q,t))
r.F(new B.ap(0,t))
r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aO(h.r,A.ap,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b5(k,j)
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
r.e=null}}r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
break}},
au(d){return d.b!==this.b}}
C.aIe.prototype={
S(){return new C.btN(null,null)}}
C.btN.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.id,null,1,null,v)
w.cH(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bw6()},
aNl(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c0(B.av(B.d(d,w,w,w,w,w,w,A.dr,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a7,A.x,v,w,w),A.n),A.be)},
bzu(){var w,v=this,u=null,t=v.aNl("Slide A",A.bj),s=v.aNl("Slide B",A.aZ)
if(v.a.c===D.cm)return new B.an(A.W,u,A.b0,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f4h(v,s,t),u)},
B(d){return this.bzu()}}
C.aIR.prototype={
j4(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.UF.prototype={
S(){return new C.biN(null,null)}}
C.biN.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AR,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cm){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRP(u),x.a)},
bt(d){var w,v,u,t=this
t.bD(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cm)w.sp(0,1)
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRO(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bu2()},
B(d){var w,v=this.a
if(v.c.dy===D.cm||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dRN(this),v.d)}}
C.Iw.prototype={
B(d){return B.cq(new C.cda(this))}}
C.ayY.prototype={
S(){return new C.bdg()}}
C.bdg.prototype={
a_(){this.a1()
if(this.a.c!==D.cm)B.bN(A.LI,new C.d4l(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cm)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.N,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UF(C.ep(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bn,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bf,o,2,"",0,0,"",u,D.f0,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cg,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cy("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ep(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bn,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bf,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.UF(t,B.p(p,D.fjG,A.f,p,p,new B.o(s,p,B.I(A.b3,A.q,1),r,p,p,A.n),p,p,p,p,A.jh,p,p,1/0),!0,1,new B.cy("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b01,A.be)}}
C.a7n.prototype={
S(){return new C.bjr(null,null)}}
C.bjr.prototype={
gaZk(){var w=this.a
if(w.e)w=D.eMX.t(0,w.c)||D.aN0.t(0,A.d.gK(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZk()){w=C.i2Q(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.buz()},
B(d){var w,v=this,u=v.d
if(!v.gaZk()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.ecQ(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZp.prototype={
B(d){var w=null
return B.av(C.b0u(!0,w,!1,C.ep(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bn,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.bf,4280172719,2,"Aa",0,0,this.c,D.cm,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.beq.prototype={
j4(d){return C.a21(this.b,new B.a9(0,0,0+d.a,0+d.b).cB(-this.c))},
jL(d){return d.b!==this.b||d.c!==this.c}}
C.bpn.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cB(-this.d),g=this.b,f=C.a21(g,h),e=a1.gdO(),d=new C.eUp()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aOw.av(0,h))
a0.aP(f,w)
g=C.a21(g,h.cB(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bje.gp(0)
a0.aP(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eWy.av(0,h))
a0.aP(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hw(A.G,e*0.04)
a0.aP(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aP(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saq(D.eWw.av(0,h))
a0.aP(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a21(g,h.cB(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aP(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hw(A.G,e*0.035)
a0.aP(f,g)
g=d.$1(e*0.016)
g.r=A.oB.gp(0)
a0.aP(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eWr.av(0,h))
a0.aP(f,w)
w=C.a21(g,h.cB(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b89.gp(0)
a0.aP(w,v)
g=C.a21(g,h.cB(e*0.03))
v=d.$1(e*0.004)
v.r=D.baJ.gp(0)
a0.aP(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aOw.av(0,h))
a0.aP(f,g)
for(g=B.x1(f),w=B.a([],x.X),g=new B.vw(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b9(B.jW(y.M));--q
g.jq()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bv(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jq()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jq()
m=w[q].Mt(p*n/o).a
l=D.cSU[A.o.E(n,4)]
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
g.saq(D.eWA.av(0,h))
g.z=new B.hw(A.G,e*0.03)
a0.aP(f,g)
g=d.$1(e*0.018)
g.saq(D.eWx.av(0,h))
a0.aP(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a21(g,h.cB(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nI.gp(0)
a0.aP(g,w)
break}},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqn.prototype={
a4(d,e){d.FJ(C.a21(this.b,new B.a9(0,0,0+e.a,0+e.b).cB(-this.c)),A.w,e.gdO()*0.05,!1)},
au(d){return d.b!==this.b||d.c!==this.c}}
C.aKR.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.aLm.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.aMJ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.a7G.prototype={}
C.NG.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aDO(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
ge_(){return this.c},
gTe(){return this.r},
gTf(){return this.w},
gLk(){return this.x}}
C.aDO.prototype={
a_(){var w,v=this
v.a1()
$.aW.c2$.push(v)
C.fEe()
$.hm4=new C.evN(v)
w=B.bj(null,A.AP,null,1,null,v)
w.fd(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Ib()},
bt(d){var w,v,u=this
u.bD(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.O8(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Ib()}},
iY(d){if(d===A.zV||d===A.rX||d===A.rW||d===A.pl)this.tv()},
q(){var w,v,u,t=this
$.aW.hH(t)
w=t.at
if(w!=null)w.a7(0)
t.tv()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.h5()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}t.buN()},
gaaX(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOs(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abr(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRV())return!1
return!0},
kd(){return this.abr(null)},
aia(){var w=this.c
if(w==null)return
w.I(x.q).f.T(D.eUQ)},
qf(){if(!this.kd())return!1
this.aia()
return!0},
aqf(d){var w,v,u,t,s,r=this
if(r.abr(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hlb(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zM(){return this.aqf(null)},
Ib(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ib=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqH(k),$async$Ib)
case 3:j=e
w=4
return B.b(C.api(k),$async$Ib)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fTB(j,t.c_b())
w=t.gaaX()?5:7
break
case 5:r=t.gOs()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZD(r),$async$Ib)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bo(s,new C.esa())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bo(s,new C.esb())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.ys(m==null?"":m)!=null)continue
C.fEq(n,s)
p=!0}t.m(new C.esc(t,s))
if(p||s.length>J.ad(j))t.tv()
case 1:return B.h(u,v)}})
return B.i($async$Ib,v)},
c_b(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kv(w)&&w!==q}if(w)p.push(r)
return p},
cmu(d){var w,v=this,u=d.w
if(!C.kv(u)||u==="hati_kiapo_uongozi")return
v.a9M(d)
w=A.d.bf(v.d,new C.etL(d))
u=v.d
if(w>=0){u[w]=d.hC()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hC())
v.db=!1},
cgD(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kv(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cmu(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,i0>")
s=B.C(new B.cQ(new B.a1(s,new C.etz(),w.k("a1<1>")),new C.etA(),v),v.k("J.E"))
return s},
O8(d){return this.bOa(d)},
tv(){return this.O8(null)},
bOa(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$O8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cgD()
w=3
return B.b(C.VD(d==null?t.a.c:d,s),$async$O8)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqf(r)?4:5
break
case 4:w=6
return B.b(C.a6U(r),$async$O8)
case 6:q=r.x
p=A.a.i(q==null?t.gOs():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bf(t.d,new C.ery())
q=t.d
if(o>=0)q[o]=r.hC()
else A.d.ck(q,0,r.hC())
case 5:case 1:return B.h(u,v)}})
return B.i($async$O8,v)},
pi(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.kv(u.w))===!0?A.hx:A.lM
v.at=B.cM(w,new C.euT(v))},
aYP(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeO(u.hC(),v.f,v.r))
if(w.length>40)A.d.cC(w,0)
A.d.a9(v.ay)},
czW(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeO(w.e.hC(),w.f,w.r))
w.m(new C.evJ(w,v.pop()))
w.pi()},
clz(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeO(w.e.hC(),w.f,w.r))
w.m(new C.etJ(w,v.pop()))
w.pi()},
oe(){var w,v,u=this
if(u.e==null)return
w=A.d.bf(u.d,new C.evw(u))
if(w>=0){u.d[w]=u.e.hC()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xc(d){var w,v,u,t,s=this.gdr()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xo(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.U$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.h5()}w.a9(0)},
JS(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdr()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cQ<1,n>")
t=B.db(new B.cQ(new B.a1(w,new C.evx(),v.k("a1<1>")),new C.evy(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.h5()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.evz(n))
s.cg(0,p,new C.evA())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hx(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b4(u.d,new C.eqX(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOs()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hC())}u.oe()
u.pi()},
aix(d,e){var w,v,u,t,s=this
if(s.kd())return
w=s.Xc(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kv(v.w))===!0
if(u){C.i2U(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.i2V(t,w.d+w.f*0.5)}}s.Hx()
s.oe()
s.pi()
if(u&&s.c!=null)s.m(new C.evK())},
cB_(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hx()
w.oe()
w.pi()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqk(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i0W(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gK(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bXy(v)
t=q.bXx(v)
s=B.b0(v.e)
r=v.f
return new C.jG(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hEJ(o)},
bXy(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bXx(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
aes(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaX()){w.c.I(x.q).f.T(D.eTs)
return}w.a9M(d)
w.b_0(C.bBu(d))
return}if(C.ce3(v)){w.a9M(d)
w.b_0(d)
return}w.m(new C.esS(w,d))},
aqP(){var w,v,u,t,s,r,q=this
q.a1G(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kv(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eqV(q))
if(r&&q.c!=null){u.toString
q.Js(u,s)}return}q.tv()
q.m(new C.eqW(q))},
b__(d){this.a9M(d)
this.a_c(d,!0)},
a9M(d){if(!C.kv(d.w))return
C.fEq(d,this.d)},
a_c(d,e){return this.ccy(d,e)},
b_0(d){return this.a_c(d,!1)},
ccy(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_c=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBu(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOs():r)
t.dy.W(0,q.toLowerCase())
C.apj(t.a.c,q)}r=s}else r=d
w=C.ce3(r.w)?3:4
break
case 3:w=5
return B.b(t.a9N(r),$async$a_c)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b4(t.d,new C.ete(l))
o=l.a.hC()
n=C.kv(o.w)&&C.i45(o)
t.m(new C.etf(t,o,p))
if(n){m=A.d.bf(t.d,new C.etg(o))
if(m>=0){t.d[m]=o.hC()
t.tv()}}if(!t.abr(l.a))t.Yk()
r=!1
if(t.c!=null)if(!t.abr(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqf(r)&&C.fAt(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.T(D.eU1)
case 1:return B.h(u,v)}})
return B.i($async$a_c,v)},
a9N(d){return this.bMm(d)},
bMm(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9N=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lf(r.c,A.zc),$async$a9N)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kU(!1,r,s.c,s.d,null,A.zc,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9N,v)},
o5(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ce3(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cds(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o5,v)},
ae9(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esR(),s,null,!0,!0,x.H),$async$ae9)
case 3:if(t.c==null){w=1
break}t.aqP()
case 1:return B.h(u,v)}})
return B.i($async$ae9,v)},
ae8(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esO(),s,null,!0,!0,x.H),$async$ae8)
case 3:if(t.c==null){w=1
break}t.m(new C.esP())
t.aqP()
case 1:return B.h(u,v)}})
return B.i($async$ae8,v)},
Yk(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$Yk)
case 3:r=e
if(B.jL(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Yk)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(D.eS5)
case 1:return B.h(u,v)}})
return B.i($async$Yk,v)},
Js(d,e){return this.cmV(d,e)},
cmV(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Js=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ag8(s,t.gEi(),t.gEh(),!0,e,t.d),$async$Js)
case 9:w=4
break
case 6:w=10
return B.b(C.ag9(s,t.gEi(),t.gEh(),!0,e,t.d),$async$Js)
case 10:w=4
break
case 7:w=11
return B.b(C.aga(s,t.gEi(),t.gEh(),!0,e,t.d),$async$Js)
case 11:w=4
break
case 8:w=12
return B.b(C.agb(s,t.gEi(),t.gEh(),!0,e,t.d),$async$Js)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Js,v)},
bZ4(){var w,v,u,t,s=this
if(!s.gaaX()){s.c.I(x.q).f.T(D.eSi)
return}w=s.gOs()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ag7(u,t,v,new C.es6(s),new C.es7(s),w)},
aet(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aet=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bQ(A.dH,null,new C.esY(u),s,!0,!0,!1,A.lv,!1,!1,x.N),$async$aet)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agb(s,u.gEi(),u.gEh(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ag8(s,u.gEi(),u.gEh(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ag9(s,u.gEi(),u.gEh(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aga(s,u.gEi(),u.gEh(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bZ4()
return B.h(null,v)}})
return B.i($async$aet,v)},
cbF(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aYP()
w=C.cD()
v=C.Bw(t,t,t,t,D.Cx,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.esZ(u,v))},
a9d(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qf()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i8A(s),$async$a9d)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.eqZ())
t.d3(new C.er_(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.T(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9d,v)},
agr(d,e,f,g){var w=null,v=g?A.dq:A.bK,u=B.I(g?A.b3:A.cr,A.q,1)
return B.hs(B.aD(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
a_b(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_b=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qf()){w=1
break}s=t.jP()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a1<1>")
p=B.C(new B.a1(r,new C.et9(),q),q.k("J.E"))}o=s!=null&&s.b===D.lu?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.T(D.eUc)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.eta(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_b)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_b,v)},
aeK(){return this.ccx()},
ccx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aeK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qf()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i8m(s,t.f+1,o),$async$aeK)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kD(s,B.U(s).c)
p.a=A.d.bf(o.r,new C.etc(q))
t.d3(new C.etd(p,t,o,q,r))
t.c.I(x.q).f.T(D.eUB)
case 1:return B.h(u,v)}})
return B.i($async$aeK,v)},
aeR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qf()||!t.zM()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a1<1>")
p=B.C(new B.a1(r,new C.etu(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.T(D.eRR)
w=1
break}o=new B.L(p,new C.etv(),B.U(p).k("L<1,M>")).fb(0,new C.etw())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b5,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bQ(A.K,null,new C.etx(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeR)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.U$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.ety())
case 1:return B.h(u,v)}})
return B.i($async$aeR,v)},
aew(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aew=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qf()){w=1
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
return B.b(C.hna(s,new C.Ek(r,q,p,o==null?"":o)),$async$aew)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d3(new C.et_(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agy(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aew,v)},
a9G(){return this.bLJ()},
bLJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9G=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qf()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i8z(s,t.f+1,l),$async$a9G)
case 3:r=e
q=$.fX3
$.fX3=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d3(new C.erf())
t.c.I(x.q).f.T(D.eRI)
w=1
break}if(!q){s=r.CW
s=C.hm2(l,s==null?"":s,!1)}else s=!1
if(s){t.d3(new C.erg(t,l,r))
t.c.I(x.q).f.T(D.eV4)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kD(s,B.U(s).c)
s=l.r
m.a=A.d.bf(s,new C.erh(p))
o=s.length
t.d3(new C.eri(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9G,v)},
aPq(d,e){if(e){this.afj()
return}this.cbF(d,!1)},
bHo(){return this.aPq(null,!1)},
afj(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.bY,null,new C.etE(t),r,!0,!0,!0,A.p6,!1,!1,x.N),$async$afj)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.etF(t,C.i0V(s).pw()))
case 1:return B.h(u,v)}})
return B.i($async$afj,v)},
d3(d){var w=this
if(w.qf())return
w.Hx()
w.aYP()
w.m(d)
w.JS()
w.oe()
w.pi()},
a7H(){this.d3(new C.epU(this,D.mD))},
aQT(){var w=this.gdr()
if(w==null)return
this.d3(new C.erd(this,w))},
aQ1(){var w=this.e
if(w==null||w.r.length<=1)return
this.d3(new C.erb(this))},
b20(d,e){if(this.e==null||d===e)return
this.d3(new C.etN(this,d,e))},
NG(d){return this.bJo(d)},
bJo(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOs():s)
w=5
return B.b(C.aph(t.a.c,r),$async$NG)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.aqJ(s)
w=6
return B.b(C.b0y(t.a.c,s),$async$NG)
case 6:if(t.c==null){w=1
break}t.m(new C.er7(t,d))
w=7
return B.b(t.tv(),$async$NG)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NG,v)},
cmS(d,e){var w=this
if(d.z){w.aia()
return}w.m(new C.etM(w,d,e))
w.pi()},
jP(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wd(d){return this.ch.cg(0,d.a,new C.eqY(d))},
asF(d){return this.CW.cg(0,d.a,new C.erz())},
a1G(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xc(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jE()},
b5q(){return this.a1G(!0)},
a1E(d){var w,v,u=this
if(u.qf())return
if(!u.zM())return
w=u.Xc(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wd(w).saV(0,"")}u.m(new C.evu(u,d))
$.aW.x1$.push(new C.evv(u,d,w))},
b5W(d){var w=this
if(d.b===D.cQ&&!w.kd()&&w.zM()){w.a1E(d.a)
return}w.az0(d.a)},
az0(d){var w,v,u,t,s,r=this
if(r.kd())return
w=r.r
if(w!=null&&w!==d){v=r.Xc(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.euU(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jE()}},
aLJ(){this.d3(new C.epV(this))},
oZ(d){return this.byx(d)},
byx(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o5(),$async$oZ)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epS(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oZ,v)},
Vm(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gr(78,1920),$async$Vm)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.epI(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vm,v)},
Vg(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdr()==null){w=1
break}w=3
return B.b(S.CF(t.a.c),$async$Vg)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gam(s)){t.c.I(x.q).f.T(D.eVE)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gK(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bQ(null,null,new C.epF(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Vg)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d3(new C.epG(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Vg,v)},
arF(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b4(w.gdr().z,new C.er9(v))){w.c.I(x.q).f.T(D.eUF)
return}if(w.w===v)w.a1G(!0)
w.d3(new C.era(w,v))},
bFE(){var w=this.jP(),v=w==null
if((v?null:w.b)===D.f0)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMq(d,e){var w=this,v=w.jP(),u=w.gdr(),t=w.e
if(t==null)return
w.d3(new C.eqm(w,v,d,e,t,u))},
bA7(d){return this.aMq(d,null)},
a7Z(d){return this.bAf(d)},
bAf(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7Z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a6m.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o5(),$async$a7Z)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jP()
if(s!=null){r=s.b
if(r===D.cQ)t.bA7(s.w>=28||s.x.gdJ(0)>=A.H.gdJ(0)?d.d:d.e)
else if(r===D.f0){r=d.c
t.aMq(r.j(0.88),r)}w=1
break}t.d3(new C.eqr(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7Z,v)},
a7Y(d){return this.bAd(d)},
bAd(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7Y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jP()
r=t.gdr()
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
return B.b(t.o5(),$async$a7Y)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.eqp(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7Y,v)},
bzY(d){var w=this.gdr()
if(w==null)return
this.d3(new C.eql(this,w,d))},
a_h(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i8v(r),$async$a_h)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oe()
t.m(new C.eto(t,s))
w=4
return B.b(t.tv(),$async$a_h)
case 4:if(t.c!=null)t.aes(s)
case 1:return B.h(u,v)}})
return B.i($async$a_h,v)},
a9y(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9y=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1G(!0)
t.oe()
s=t.c
s.toString
w=3
return B.b(C.QR(s,q),$async$a9y)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.T(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9y,v)},
Dr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oe()
t=4
w=7
return B.b(C.aPq(m),$async$Dr)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOQ(o,q,m.b),$async$Dr)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.aa(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dr,v)},
F5(d,e){return this.czo(d,e)},
czo(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$F5=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qf()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1G(!0)
t.oe()
s=h.a=t.e.hC()}else{r=A.d.bf(t.d,new C.evD(d))
s=h.a=r>=0?t.d[r].hC():d.hC()}s=s.w
q=s==null
p=C.i1T(q?"":s)
o=C.hkZ(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a1<1>")
n=B.C(new B.a1(s,new C.evE(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.csI(n.length,o,s),$async$F5)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i1N(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gK(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.csH(n,o),$async$F5)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.hE(t.d,new C.evF(s))
s=h.a.b
w=11
return B.b(t.csF(k.b,s),$async$F5)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hC()
case 5:j=C.i1S(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.T(D.eVP)
w=1
break}w=12
return B.b(t.csG(j.a,s,o,j.c),$async$F5)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.evG(h,t,i))
t.pi()
case 1:return B.h(u,v)}})
return B.i($async$F5,v)},
csI(d,e,f){var w=this.c
w.toString
return B.bQ(A.K,null,new C.ev9(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
csH(d,e){var w=this.c
w.toString
return B.bQ(A.K,null,new C.ev8(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
csF(d,e){var w=this.c
w.toString
return B.bQ(A.K,null,new C.ev2(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
csG(d,e,f,g){var w=this.c
w.toString
return B.bQ(A.K,null,new C.ev4(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
ab0(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ab1(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bY,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dl,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eo,B.E(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f5c,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aU9(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.TE,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aUc(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nw,w,w,w),A.cV,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Bs,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.es2(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bWs(d,e,f,g,h,i){return this.aUc(d,e,f,!1,g,h,i)},
atZ(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dr,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.YQ,w,w,w)},
aUb(d,e,f){var w=null,v=B.bm(A.c.j(0.08),w,w,w,A.c,w,A.cl,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nu,w,w,w),new C.es1(d,f),v)},
aUa(d,e){return this.aUb(d,e,null)},
JJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p3(l,s.c,s.d),$async$JJ)
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
for(l=A.d.gaf(o.z),n=new B.f6(l,new C.euV());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9x(l.charCodeAt(0)==0?l:l,r.b),$async$JJ)
case 4:l=t.a
w=5
return B.b(B.p2(l.c,l.d),$async$JJ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JJ,v)},
HS(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p3(q,s.c,s.d),$async$HS)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9x(A.R.ao(r.ag(),null),r.b+".json"),$async$HS)
case 4:q=t.a
w=5
return B.b(B.p2(q.c,q.d),$async$HS)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HS,v)},
b5a(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oe()
u.tv()
w=u.c
w.toString
v=B.e8(new C.evt(u,t),!1,null,x.z)
B.a5(w,!1).c5(v)},
H6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$H6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o5(),$async$H6)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fED(),$async$H6)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i4F(s.a)
q=t.c
q.toString
w=5
return B.b(B.bQ(A.az,null,new C.epN(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$H6)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d3(new C.epO(t,s))
w=1
break}if(p==="split")t.d3(new C.epP(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$H6,v)},
N1(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$N1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qf()){w=1
break}w=3
return B.b(t.o5(),$async$N1)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPp(s,null,null),$async$N1)
case 4:r=e
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.epT(t,r))
case 1:return B.h(u,v)}})
return B.i($async$N1,v)},
b1O(d){var w=this.e
if(w==null||!C.kv(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNI(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPp(s,t==null?null:B.b0(t),u)},
a7F(d){return this.byo(d)},
byo(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qf()){w=1
break}if(!t.zM()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(D.eW3)
w=1
break}w=3
return B.b(t.aNI(),$async$a7F)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.epK(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7F,v)},
ag4(d){return this.clC(d)},
clC(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ag4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qf()){w=1
break}if(!t.zM()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(D.eVc)
w=1
break}w=3
return B.b(t.aNI(),$async$ag4)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.etK(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ag4,v)},
c8m(){var w,v,u=this
if(u.kd())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bB(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cyq()}},
cyq(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d3(new C.evB(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bWN(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d3(new C.es5(this,r,u.d))},
c0r(d){var w
if(this.kd())return!1
w=this.e
if((w==null?null:C.kv(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fBe(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l1&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c0s(d){var w
if(this.kd())return!1
w=this.e
if((w==null?null:C.kv(w.w))!==!0)return!0
if(!this.zM())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fBe(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l1&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Na(d){return this.bAF(d)},
bAF(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Na=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qf()){w=1
break}if(!t.zM()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(D.eU2)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apl(p),$async$Na)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.T(D.eUH)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gK(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6U(r)
w=1
break}t.m(new C.eqv(t,d,o))
t.oe()
$.aW.x1$.push(new C.eqw(t))
case 1:return B.h(u,v)}})
return B.i($async$Na,v)},
Vk(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o5(),$async$Vk)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCa(),$async$Vk)
case 4:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.epH(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vk,v)},
NU(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$NU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o5(),$async$NU)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jP()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fEu(r),$async$NU)
case 4:q=e
if(q==null){w=1
break}t.d3(new C.erx(s,q))
case 1:return B.h(u,v)}})
return B.i($async$NU,v)},
iU(d){this.d3(new C.epQ(this,d))},
q5(d){return this.bzR(d)},
bzR(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qf()){w=1
break}m=!D.aN3.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o5(),$async$q5)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.H6()
w=1
break A
case"sign_paper":t.N1()
w=1
break A
case"hd_photo":t.Vk()
w=1
break A
case"sharpen":t.NU()
w=1
break A
case"print":t.Dr()
w=1
break A
case"rotate":s=t.jP()
if(s!=null)t.d3(new C.epZ(s))
w=1
break A
case"text_box":t.aLJ()
w=1
break A
case"picture":t.Vm()
w=1
break A
case"present":t.b5a()
w=1
break A
case"new_slide":t.a7H()
w=1
break A
case"export_json":t.HS()
w=1
break A
case"outline_share":t.JJ()
w=1
break A
case"flashcard_tool":t.v8(D.HG)
w=1
break A
case"quiz_tool":t.v8(D.HH)
w=1
break A
case"worksheet_tool":t.v8(D.HI)
w=1
break A
case"duplicate_el":s=t.jP()
if(s==null){w=1
break A}t.d3(new C.eq_(t,s))
w=1
break A
case"delete_el":t.arF()
w=1
break A
case"bring_fwd":s=t.jP()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.eq0(t,s))
w=1
break A
case"send_back":s=t.jP()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.eqb(t,s))
w=1
break A
case"align_left":s=t.jP()
if(s!=null)t.d3(new C.eqe(s))
w=1
break A
case"align_center":s=t.jP()
if(s!=null)t.d3(new C.eqf(s))
w=1
break A
case"align_right":s=t.jP()
if(s!=null)t.d3(new C.eqg(s))
w=1
break A
case"grayscale":case"brighten":t.NU()
w=1
break A
case"flip_h":s=t.jP()
if(s!=null)t.d3(new C.eqh(s))
w=1
break A
case"flip_v":s=t.jP()
if(s!=null)t.d3(new C.eqi(s))
w=1
break A
case"rectangle":t.oZ(D.bf)
w=1
break A
case"circle":t.oZ(D.eL)
w=1
break A
case"triangle":t.oZ(D.jH)
w=1
break A
case"arrow":t.oZ(D.Cz)
w=1
break A
case"line":case"divider":t.oZ(D.fs)
w=1
break A
case"word_count":r=t.gdr()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.f6(q,new C.eqj()),o=0;p.C();){n=A.a.fE(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a1(n,new C.eqk(),B.U(n).k("a1<1>")).gM(0)}t.c.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.iU(C.iU(A.L,!1,t.gqk().d.l(),A.aD,40,A.bn,A.u,0.18,q,"Presentation Title",0,D.mE,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.iU(C.iU(A.L,!1,t.gqk().e.l(),A.aD,22,A.bn,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iU(C.iU(A.bg,!0,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uj,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iU(C.iU(A.bg,!1,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.ui,0.8,0.1,0.22))
w=1
break A
case"quote":t.iU(C.iU(A.L,!1,4279310375,A.aD,24,A.cF,A.a5,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iU(C.iU(A.bg,!1,4284773515,A.aD,14,A.bn,A.a5,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.uj,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iU(C.iU(A.dM,!1,4279310375,A.aD,14,A.bn,A.a5,0.08,C.cD(),C.bCc(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iU(C.iU(A.dM,!1,4279310375,A.aD,13,A.bn,A.a5,0.06,C.cD(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d3(new C.eq1(t))
w=1
break A
case"footer_bar":t.d3(new C.eq2(t))
w=1
break A
case"highlight":t.d3(new C.eq3(t))
w=1
break A
case"redact":t.d3(new C.eq4(t))
w=1
break A
case"callout":t.d3(new C.eq5(t))
w=1
break A
case"checkboxes":t.iU(C.iU(A.bg,!1,4279310375,A.aD,20,A.bn,A.a5,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iU(C.iU(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d3(new C.eq6(t))
w=1
break A
case"letter":t.iU(C.iU(A.bg,!1,4279179050,A.aD,17,A.bn,A.a5,0.82,C.cD(),C.bCc()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iU(C.iU(A.bg,!1,4279310375,A.aD,22,A.bn,A.N,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uj,0.8,0.1,0.12))
w=1
break A
case"toc":t.iU(C.iU(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iU(C.iU(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.08,C.cD(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iU(C.iU(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.08,C.cD(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iU(C.iU(A.L,!1,4278556265,A.aD,28,A.bn,A.u,0.12,C.cD(),"APPROVED",0,D.mE,0.32,0.62,0.08))
w=1
break A
case"draft":t.iU(C.iU(A.L,!1,4292617766,A.aD,28,A.bn,A.u,0.12,C.cD(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iU(C.iU(A.L,!1,871318596,A.aD,36,A.bn,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d3(new C.eq7(t))
w=1
break A
case"progress":t.d3(new C.eq8(t))
w=1
break A
case"stars":t.iU(C.iU(A.L,!1,4279310375,A.aD,36,A.bn,A.a5,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qa,0.8,0.1,0.4))
w=1
break A
case"equation":t.iU(C.iU(A.L,!1,4279310375,A.aD,32,A.bn,A.N,0.14,C.cD(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iU(C.iU(A.L,!1,4279310375,A.aD,18,A.bn,A.a5,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ui,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d3(new C.eq9(t))
w=1
break A
case"compare":t.d3(new C.eqa(t))
w=1
break A
case"link_text":t.iU(C.iU(A.bg,!1,4280640491,A.mJ,16,A.bn,A.a5,0.1,C.cD(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iU(C.iU(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.1,C.cD(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iU(C.iU(A.bg,!1,4280640491,A.aD,18,A.bn,A.a5,0.1,C.cD(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d3(new C.eqc(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d3(new C.eqd(t,r))
w=1
break A
case"invoice":t.iU(C.iU(A.bg,!1,4279179050,A.aD,16,A.bn,A.a5,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iU(C.iU(A.bg,!1,4279179050,A.aD,17,A.bn,A.a5,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iU(C.iU(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bCc()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iU(C.iU(A.bg,!1,4279310375,A.aD,17,A.bn,A.a5,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iU(C.iU(A.bg,!1,4279310375,A.aD,15,A.bn,A.a5,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q5,v)},
cs8(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eMU.t(0,this.z)},
cs7(d){if(this.jP()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b6M(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cm,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.I(u,A.q,o&&e?2:1)
t=C.i4u(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.NM,A.f,p,p,D.DQ,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fz,B.aD(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bLZ(d){var w,v=null,u=this.jP()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.L(D.Qe,new C.erw(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
v8(d){return this.byw(d)},
byw(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aMY.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o5(),$async$v8)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epR(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eLG
w=h.e
if(w==null)return h.bCl()
v=h.gdr()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bV,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eE,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bY:D.bab
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRV()}else j=!1
if(j)k.push(new C.a7o(h.a.c,!1,h.e.gb8Y(),h.gc8j(),g))
else if(s&&h.e!=null&&!h.kd()&&C.ce3(h.e.w)){j=h.a
k.push(new C.a7o(j.c,j.d,g,h.gc9s(),g))}if(s)k.push(h.bLV(w,t,r))
if(s&&h.kd()){w=t?A.fo:A.kl
j=B.m(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bLh,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fo,g,g,g,g,g,g,g,g,12,g,g,A.N,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AW,A.iz,g,g,g))}w=!n
if(w&&!h.kd())k.push(h.c1n(t,r))
if(w&&h.kd())k.push(h.czp(t))
if(r&&h.jP()!=null&&w&&!h.kd())k.push(h.c1j(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b4F(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b4F(t,!1),g))
i.push(B.E(new B.bI(A.b_,g,g,h.bDD(v,t,!s||p),g),1))
if(h.cs8(r)&&u&&s&&!h.kd())i.push(h.c86(v,t,r))
j.push(B.E(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kd()&&h.cs7(!1))j.push(new B.a7(240,g,h.bOy(t),g))
k.push(B.E(B.B(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c1k(t))
return B.c8(g,m,B.bl(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bCl(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bY:A.bK
v=r.a.e
u=r.c7m(A.bj,A.pS,new C.eqz(r),r.gcbC(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aLr(A.bj,A.hz,"Blank Presentation",new C.eqA(r)),1),A.av,B.E(r.aLr(A.aZ,A.vN,"Class Template",new C.eqB(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mI,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bzj(w))
else{t=new B.hZ(t,B.U(t).k("hZ<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.eqC(r,w),x.l))}return B.c8(q,p,B.bl(!1,B.cw(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bKc(){this.m(new C.erc(this))
var w=this.c
w.toString
if(B.aI(w,A.bV,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jE()}},
aeL(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jP()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.etn(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aeL)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeL,v)},
AK(d,e){return this.csv(d,e)},
csv(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AK=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hT(D.Wo,!0,"Dismiss",j,new C.euW(),new C.euX(d,e),A.ix,!0,x.N),$async$AK)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aia()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRV()){r.aia()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPq(d),$async$AK)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOQ(j,q,d.b),$async$AK)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.aa(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.F5(d,!1),$async$AK)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hT(D.Wo,!0,"Dismiss",j,new C.euY(),new C.euZ(d),A.a1,!0,x.y),$async$AK)
case 20:if(g===!0)r.NG(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afO("Rename presentation",d.b),$async$AK)
case 24:l=g
if(l!=null)r.cmS(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.ev_(r,k))
r.pi()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AK,v)},
b_F(d,e){var w=null
return B.bK(!1,D.ftD,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lN,w,w,w,w,w,A.k3,w,w))},
bzj(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.epW(this,d),null)},
bIi(d,e,f){var w=new B.L(B.a(d.split(" \u2022 "),x.s),new C.er0(),x.dv).c_(0,new C.er1()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.agI,this.aM0(v,e,new C.er2(),f),null)},
aM0(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ec)
t=e.j(g?0.14:0.1)
s=new B.aT(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bv,n,n,n,10),A.qh],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cm(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bq(s,s,s,s),n,n,A.n),n,n,n,n,A.ne,n,n,n))
A.d.v(l,u)}return B.f4(A.a3,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.ei)},
bzh(d,e,f){return this.aM0(d,e,null,f)},
bIk(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dc8
else if(v==="hati_kuhoweya")w=D.cZg
else{if(v==="hati_kiapo_uongozi")v=D.cMb
else v=C.kv(v)?D.cTe:A.PQ
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.er5(this,f,d,e,w),null)},
c1k(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jP()
if(i==null||i.b!==D.cQ)return A.bI
w=k.Wd(i)
v=k.asF(i)
u=A.w.j(0.55)
t=x.p
s=B.bl(!1,new B.D(A.AZ,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bK(!1,D.fpo,j,j,!0,j,j,new C.esw(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.az:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h7,B.c0(new B.D(A.eQ,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bRc,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wj,j,j,j,j,j,j,!1,"\u2022",j,new C.esx(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zu,A.an,j,A.T7,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.be),j),1)
q=B.m(16)
p=d?A.bo:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.cd(B.B(B.a([k.tV(G.MK,j,new C.esy(k,i),d),k.tV(G.a__,j,new C.esz(k,i),d),k.tV(K.al0,j,new C.esA(k,i),d),k.tV(K.a_G,j,new C.esB(k,i),d),k.tV(k.bzf(i.as),j,new C.esC(k,i),d),k.tV(D.am8,j,new C.esD(k,i),d),k.tV(D.am7,j,new C.esE(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.D(H.agR,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lj,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c1j(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jP()
if(m==null)return A.bI
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bo,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cx,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b3j(A.jk,"Edit",new C.esh(o,m),d,!0))
if(w===D.lu)p.push(o.b3j(A.G8,"Shape & ring",new C.esi(o),d,!0))
p.push(o.tV(A.BJ,"Format",new C.esj(o),d))
if(v)A.d.v(p,B.a([o.tV(G.MK,n,new C.esk(o,m),d),o.tV(D.am8,n,new C.esl(o,m),d),o.tV(D.am7,n,new C.esm(o,m),d)],q))
p.push(A.b6)
p.push(o.cqk(A.e6,n,o.gaQ_(),d,!0))
p.push(o.tV(A.hA,"Done",new C.esn(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AX,A.lj,n,n,n)},
bzf(d){switch(d.a){case 2:return D.a_D
case 1:case 5:return D.a_F
default:return D.a_E}},
c2c(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.bg}},
az_(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?L.Gs:n
if(h)s=n
else s=g?A.c.j(0.06):A.bK
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ec,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.r_,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eE(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tV(d,e,f,g){return this.az_(d,e,f,g,!1,!1)},
b3j(d,e,f,g,h){return this.az_(d,e,f,g,h,!1)},
cqk(d,e,f,g,h){return this.az_(d,e,f,g,!1,h)},
bLV(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bo,A.M],m):B.a([A.c,A.mS],m)
w=B.I(e?A.aK:A.ou,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cx,18)],x.V)
u=p.a26(A.eC,"Back",p.gbFo(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dq(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c1:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.N,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.ts,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.kd()){u=p.a26(A.rc,"Undo",p.ax.length===0?o:p.gczV(),e)
A.d.v(r,B.a([u,p.a26(D.bEO,"Redo",p.ay.length===0?o:p.gcly(),e)],q))}r.push(p.a26(A.y_,"PDF",new C.erp(p),e))
r.push(p.a26(A.hB,"Download as video",new C.erq(p),e))
if(!p.kd())r.push(B.BK(o,o,B.X(A.o1,e?A.ad:A.bv,o,o,o,o),new C.err(p),A.J,new C.ers(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.eE(D.e7X,o,new B.o(o,o,o,B.m(14),o,L.Gs,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazQ(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bqD,D.bvJ,o,o,o)},
czp(d){var w=this,v=null,u=B.m(18),t=d?A.az.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.q,1)
return B.p(v,B.cd(B.B(B.a([w.iE(A.tZ,"Print",new C.evH(w),d),w.iE(A.y_,"Download PDF",new C.evI(w),d),w.iE(A.pY,"Present",w.gazQ(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AW,G.aiw,v,v,v)},
a26(d,e,f,g){var w,v=null
if(f==null)w=g?A.b3:A.dp
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c1n(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.az.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.q,1)
t=x.f0
t=B.C(new B.L(p,new C.esH(r,d),t),t.k("ak.E"))
t.push(new B.D(X.aia,new B.fg(new C.esI(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vu,r.agr(A.lk,"Ending celebration",r.gcbP(),d),q),new B.D(R.vu,r.agr(A.G8,"Logo ring & frame",r.gccv(),d),q)],x.p):A.ha)
A.d.v(t,w?B.a([new B.D(R.vu,r.agr(A.nh,"Look and feel",r.gccw(),d),q),new B.D(R.vu,r.agr(A.oS,"Edit this slide's text",r.gcd2(),d),q)],x.p):A.ha)
t.push(new B.D(R.vu,B.hs(B.aD(q,B.p(q,D.eL6,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lf.j(0.4),A.J,10)],x.V),D.ao8,A.n),q,34,q,q,A.fV,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.esJ(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bwb,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.co1(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AW,q,q,q,q)},
co1(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d62[v]
u.a=null
s=u.a=t.b
w.push(e.lF(e.cpK(s),t.a,new C.eu5(u,e),a3,D.aMY.t(0,s)))}w.push(e.iE(A.kV,"Notes Slide",new C.eu6(e),a3))
w.push(e.lF(A.G7,"Quiz",new C.eu7(e),a3,!0))
w.push(e.lF(M.FL,"Worksheet",new C.eui(e),a3,!0))
w.push(e.lF(V.Ga,"Flashcard",new C.eut(e),a3,!0))
w.push(e.lF(A.NB,"Lab Report",new C.euE(e),a3,!0))
w.push(e.lF(A.tT,"Rubric",new C.euL(e),a3,!0))
w.push(e.lF(A.oM,"Minutes",new C.euM(e),a3,!0))
w.push(e.lF(A.o0,"Syllabus",new C.euN(e),a3,!0))
w.push(e.lF(A.NG,"Timeline",new C.euO(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d7f[v]
w.push(e.lF(r.b,r.c,new C.euP(e,r),a3,!D.aN3.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iE(A.yk,a0,e.gaLI(),a3),e.iE(A.tW,"Picture",new C.eu8(e),a3),e.iE(A.ye,"Bio link",new C.eu9(e),a3),e.iE(A.a0a,"Table",new C.eua(e),a3),e.iE(A.NF,"Sticky",new C.eub(e),a3),e.iE(A.tV,"Divider",new C.euc(e),a3),e.iE(A.BK,"Header",new C.eud(e),a3),e.lF(A3.vD,"Rectangle",new C.eue(e),a3,!0),e.lF(A.r4,"Circle",new C.euf(e),a3,!0),e.lF(A.a_v,"Triangle",new C.eug(e),a3,!0),e.lF(A.iW,"Arrow",new C.euh(e),a3,!0),e.lF(D.bDh,"Parallelogram",new C.euj(e),a3,!0),e.lF(D.bFM,"Hexagon",new C.euk(e),a3,!0),e.lF(A.tV,"Line",new C.eul(e),a3,!0),e.lF(A.y_,"PDF",new C.eum(e),a3,!0),e.lF(O.a0k,"Signature",new C.eun(e),a3,!0),e.iE(A2.Bz,"Quote",new C.euo(e),a3),e.iE(D.a_7,a1,new C.eup(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bV,x.w).w
u=x.p
t=B.B(B.a([e.aMx("Wide 16:9",D.Cx,a3),e.aMx("Short 9:16",D.oa,a3),new B.D(A.fz,B.mH(D.bHV,d,D.flJ,d,new C.euq(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bFD("This slide",!e.Q,a3,new C.eur(e)),A.bp,e.aOI("All slides",e.Q,a3,new C.eus(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bFE()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.L(D.a29,new C.euu(e),n),n.k("ak.E"))
n=B.cd(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d8d[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dp:A.b3,1.5,A.q,-1)
l.push(new B.D(A.fz,B.aD(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.euv(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDt()
g=B.U(h).k("L<1,D>")
h=B.C(new B.L(h,new C.euw(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.O,q,A.am,p,A.O,o,A.at,n,A.O,m,A.at,l,A.O,j,A.at,B.cd(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.am,e.bZb(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jP()
w=e.c
w.toString
w=B.aI(w,A.bV,x.w).w
u=new C.eu4(e)
t=new C.euQ(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Qe,f.dy,new C.eux(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.Qe,q,new C.euy(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iE(A.kV,w,new C.euz(e),a3),e.iE(A.tZ,"Print deck",new C.euA(e),a3),e.lF(D.ak3,"Export JSON",new C.euB(e),a3,!0),e.iE(A.fL,"Duplicate Slide",e.gaQS(),a3),e.iE(A.e6,a2,e.gaQ0(),a3),e.ctQ(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jP()
w=x.p
u=B.a([e.iE(D.a_7,a1,new C.euC(e),a3),e.iE(A.fL,"Duplicate",e.gaQS(),a3),e.iE(A.e6,a2,e.gaQ0(),a3),e.iE(A.pY,"Present",e.gazQ(),a3),e.iE(A.BI,a0,e.gaLI(),a3),e.iE(A.BC,"Fit Text",new C.euD(e),a3),e.iE(A.y_,"Download PDF",new C.euF(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iE(A.ks,"Transfer",new C.euG(e),a3))
if(f!=null){w=B.a([A.ab,e.iE(G.MK,"Bold",new C.euH(e,f),a3),e.iE(G.a__,"Italic",new C.euI(e,f),a3),e.iE(G.ajF,"Underline",new C.euJ(e,f),a3),e.iE(Ae.ML,"Bullets",new C.euK(e,f),a3),e.bOh(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bLZ(a3))
w.push(e.iE(D.bBV,"Delete",e.gaQ_(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aMx(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oa
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7U,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bH6],v))
return new B.D(A.fz,B.j7(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.equ(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
ctQ(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b3:A.cr,A.q,1)
u=B.m(8)
t=B.X(A.FJ,d?A.aA:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.an7,q,q,q,new C.evc(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.amY,q,q,q,new C.evd(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fp,A.mp,q,q,q)},
cpK(d){switch(d.a){case 6:return V.Ga
case 7:return A.G7
case 8:return M.FL
case 4:return A.BK
default:return A.kV}},
bOh(d,e){var w=null,v=B.I(e?A.b3:A.cr,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.an7,w,w,w,new C.erC(this,d),w,w,w,w,w,A.cc),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.amY,w,w,w,new C.erD(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xJ,A.mp,w,w,w)},
bZb(d){var w=null
return B.BK(B.D9(B.X(A5.a_a,d?A.ad:A.bv,w,w,w,16),w,w,D.frb,w,w,w),w,w,new C.es9(),A.J,this.gbzX(),A.cp,"Slide layout",x.fO)},
lF(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bK,s=B.I(g?A.dq:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dv:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.NM,A.f,w,w,D.DQ,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fz,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eE(new B.D(A.h7,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cV,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iE(d,e,f,g){return this.lF(d,e,f,g,!1)},
b4F(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hJ(t,new C.evo(u,s,e,d),s.r.length,A.cp,t,w,new C.evp(e),!1)
s=d?A.az:A.bK
w=B.a([],x.p)
if(e&&!u.kd())w.push(new B.D(A.cp,B.Hx(E.anl,new C.evq(u),B.ny(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aNG,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bDD(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oa?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b_,v,v,new B.fG(w,B.aD(v,B.cq(new C.eqT(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eqU(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bDF(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kv(a9.w))===!0,b1=b0&&C.fBe(b3),b2=b0&&b3.b===D.l1&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kd())v=!b0||a7.c0s(b3)
else v=!1
if(!a7.kd())u=!b0||a7.c0r(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cg:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fZZ(b3))o=a8
else if(p&&!a7.kd())o=a7.gc8l()
else o=a7.kd()?a8:new C.eqH(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c4:A.jB
i=w&&C.fZZ(b3)&&a7.zM()?new C.eqI(a7,b3):a8
h=v&&b3.b===D.cQ?new C.eqJ(a7,b3):a8
g=u?new C.eqK(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bl
else e=q?A.bZ:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bZ.j(0.08)
else a0=b3.b===D.l1?A.K:a8
if(b1){a1=a7.kd()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bZ.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.N,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bV,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zM()
a3=b3.b===D.cQ
a4=a3?a7.Wd(b3):a8
a5=a3?a7.asF(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bV,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eqL(a7,b3):a8
a3=v&&a3?new C.eqM(a7,b3):a8
a6=C.b0u(q,a4,a1,b3,a5,a2,a3,new C.eqN(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aD(a8,B.p(a8,D.bJW,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqO(a7,b3,b4,b5),a8,a8,new C.eqP(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kd()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aD(a8,B.p(a8,D.bKA,A.f,a8,a8,new B.o(A.dA,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbWM(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kd()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aD(a8,B.p(a8,D.bM8,A.f,a8,a8,new B.o(A.bZ,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqQ(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bV,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aD(a8,B.p(a8,D.fzN,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kT,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqR(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aD(j,B.eG(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cy("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOI(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bG,A.q,1)
if(e)t=A.bj
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.NM,A.f,r,r,D.DQ,r,12,r,r,r,r,r,12)],s))
return B.aD(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bFD(d,e,f,g){return this.aOI(d,e,f,g,!1)},
c86(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b5,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.az:A.aQ
t=f?A.wL:l
if(f)s=new B.bO(new B.ay(e?A.bG:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rw,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.b_F(e,new C.esL(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.am,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.m(10),A.dg),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.esM(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aS9(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jP()
if(a2==null)return A.bI
w=new C.erQ(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dR:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.b_F(a3,a0.gbKb())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fmd,B.E(B.kZ(a1,a1,a1,u,0.05,new C.erR(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fyg,B.E(B.kZ(a1,a1,a1,t,0.05,new C.erS(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.fg6,B.E(B.kZ(a1,a1,a1,96,10,new C.erT(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lu
if(l||n===D.l1||n===D.Rx)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.frT,B.E(B.kZ(a1,a1,a1,s,0,new C.erU(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fzw,B.E(B.kZ(a1,a1,a1,r,0,new C.erV(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BZ[j]
i.a=null
g=h.a
i.a=g
k.push(B.j7(a1,a1,a1,new B.x(h.b,a1,A.qn,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erW(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bW(A.bz,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BU[j]
f.a=null
g=e.a
f.a=g
h.push(B.j7(a1,a1,a1,new B.x(e.b,a1,A.qn,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erX(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bW(A.bz,h,A.bq,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.L(v,new C.erY(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bW(A.bz,l,A.bq,6,6),A.ac,B.hb_(new C.erZ(w,a2),D.cnl,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.f0){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.L(v,new C.es_(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bW(A.bz,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.di(D.bLV,D.ftO,new C.es0(a0,a5),B.bm(A.bD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wL:a1
if(a4)o=new B.bO(new B.ay(a3?A.bG:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rw,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.F7,a1,a1,a1)},
bOy(d){return this.aS9(d,!1,!1,null)},
c7m(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.es3(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f65,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.v(B.a([w,A.bB,A.cV,r.bzh(D.cQL,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hs(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eE(D.eQu,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bZ.j(0.4),A.em,8)],p),D.aod,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b6V,D.b7i],v):B.a([A.c,A.kl],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cx,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aLr(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.epD(this,g,d,e,f),null)},
afO(d,e){return this.cjP(d,e)},
cjP(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b5,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.etI(d,q),p,null,!0,!0,x.N),$async$afO)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afO,v)},
Px(d){var w=d.bS()
return""+B.bH(w)+"/"+B.bR(w)+"/"+B.bA(w)}}
C.aeO.prototype={}
C.ayk.prototype={
S(){return new C.bc2(null,null)}}
C.bc2.prototype={
gcw0(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bH(u)+"/"+B.bR(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pL,u,1,u,v)
w.fd(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.bp8,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bsG()},
IL(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.aw(0,new B.hP(w,v,A.ct).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.buA,B.c6(new B.h6(B.a([u,w],x.dS)),new C.d_X(this),v),v),v,v,v)}}
C.bcg.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.D(D.buR,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.D(D.bu2,B.v(B.a([B.p(w,D.bKG,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aP,D.fvT,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f7e,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dZ,D.boc,B.B(B.a([B.E(B.bK(!1,D.fkr,w,w,!0,w,w,new C.d0i(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.nb,w,A.oe,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fpJ,w,w,!0,w,w,new C.d0j(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nb,w,A.oe,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.Vb,new B.o(A.az,w,u,v,D.cR4,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.Jy.prototype={
S(){return new C.bc1()}}
C.bc1.prototype={
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
return B.dU(B.dc(B.aD(o,B.vm(B.df(o,B.B(B.a([r,A.av,new B.dq(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f4:A.c,o,o,o,o,o,o,o,o,13,o,o,A.N,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b9,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eF,o,o,o,A.nX,o,o,1/0),A.ct,A.jf,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d_S(p,d),new C.d_T(p),new C.d_U(p),new C.d_V(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.Pl.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eQ,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eo,B.E(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nw,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.a_8.prototype={
S(){return new C.aDR(D.dd,null,null)}}
C.aDR.prototype={
gYq(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.boJ,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b54(d){if(!this.a.c.ay)return
this.x=d
this.gYq().iz(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.ave(D.eWQ)
C.i1q()
v.QW()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYq().q()
v=w.z
if(v!=null)v.a7(0)
C.ave(D.eWR)
C.i1t()
w.buO()},
cyN(){B.jl()
this.m(new C.ewn())
var w=this.c.I(x.q).f
w.a4d()
if($.bjO)w.T(D.eTI)},
QW(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h99(u,w),1,120)),new C.ewd(v))},
cys(){var w,v=this
v.m(new C.ewm(v))
if(v.r)v.QW()
else{w=v.f
if(w!=null)w.a7(0)}},
gaU2(){var w=this.a.c.db
return(w==null?"":w).length!==0},
csB(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.ewe(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lh,new C.ewf(w))},
avu(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.ew9(u))
u.QW()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaU2()){u.csB()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ewa(u,A.o.E(w+1,s)))
u.b54(w)
u.QW()}},
cit(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.ewb(v))
v.QW()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.ewc(v,w,t))
v.b54(w)
v.QW()}},
cu1(d){var w,v=this,u=v.e
if(u===D.cm){u=v.d
u===$&&B.c()
return new B.nd(d,new B.cy(u,x.ac))}w=v.cu2(u)
u=v.d
u===$&&B.c()
return B.qf(new B.nd(d,new B.cy(u,x.ac)),w,new C.ewk(),A.bc,A.bc,new C.ewl(v))},
cu2(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bp4
case 16:return A.ko
case 18:return A.n8
default:return A.n9}},
cu0(d,e,f){var w,v,u,t=null,s=B.cI(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.ur,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.RN,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.ij,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.uq,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.il(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bp(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.il(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bp(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.ewg(s),e)
case 9:return B.c6(s,new C.ewh(s),e)
case 10:return B.c6(s,new C.ewi(s),e)
case 11:return B.c6(s,new C.ewj(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.il(A.A,e,t,new B.bf(s,new B.bp(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jz(B.jr(e,new B.bf(s,new B.bp(A.ur,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqS(w,t))
case 15:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.RN,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mL((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jI(v,u,v,1)
return B.fs(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eG(A.A,(1-s.gp(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jz(new C.anQ(B.c6(n.gYq(),new C.ewo(n,v,w),m),m),A.r,m)}else{t=B.ru(new C.Iw(w,!0,!1,m))
l=B.b0(w.e)
u=n.cu1(B.el(B.jz(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.h99(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ol,m,m,m),A.bp,D.bMX],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fI,m,m,m)
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
l.push(B.bZ(0,new C.Ne(new C.Ek(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oa?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jz(B.ul(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjO){r=B.Hx(A.kY,new C.ewp(d),B.ny(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bl(!0,B.B(B.a([r,A.ab,B.Hx(B.X(n.r?Ak.yc:A.iC,m,m,m,m,m),n.gcyr(),B.ny(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bl(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hs,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fI,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bl(!0,B.aD(A.c4,B.p(A.la,$.bjO?A.bI:s,A.f,m,m,m,m,64,m,m,D.bpQ,m,m,150),A.y,!1,m,n.gcyM(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aD(m,new B.an(A.W,m,A.b0,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ewq(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.JF.prototype={
B(d){var w=null
return B.p(w,B.bl(!0,new B.D(E.ahX,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_K,w,w,w,w,w,w,w,w)}}
C.bqS.prototype={
j4(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.bgV.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aXy
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.df(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vU,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hx,r,64,r,r,r,r,64)
return B.aD(r,new B.a7(78,r,B.v(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bgU.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dkw.h(0,p)
if(o==null)o=D.d7p
p=p==="none"
w=p?q:new B.a8(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?K.amk:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ek,q,q,52)
return B.aD(q,new B.a7(66,q,B.v(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aJy.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b2$
if(v!=null)v.a3(0,w.gdC())
w.b2$=null
w.a2()}}
C.aLA.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.bwB.prototype={}
C.aLB.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.b0x.prototype={}
C.VE.prototype={
S(){return new C.aDP()},
bfA(d){return this.e.$1(d)}}
C.aDP.prototype={
gb3p(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9W(){var w,v
if(this.d==="all")return B.bn(this.a.d,!0,x.I)
w=this.gb3p()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNn(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3p()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb4E(){return A.d.cI(this.ga9W(),0,new C.evU())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gK(w).a
v.Qx()},
Qx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b17(s.c,s.f),$async$Qx)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.evQ(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qx,v)},
IN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9W()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fEq(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p3(o,q.c,q.f),$async$IN)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e8(new C.evT(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).c5(q),$async$IN)
case 4:q=t.a
w=5
return B.b(B.p2(q.c,q.f),$async$IN)
case 5:w=6
return B.b(t.Qx(),$async$IN)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IN,v)},
QU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hy(o,D.dY1,!0,"NgmySlidesTransferScan",x.N),$async$QU)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.evR(t))
w=4
return B.b(C.agZ(s),$async$QU)
case 4:r=e
t.m(new C.evS(t))
o=J.a6(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.T(D.eSB)
w=1
break}w=5
return B.b(t.a.bfA(r),$async$QU)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).O(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.T(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QU,v)},
IM(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9W()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p3(s,r.c,r.f),$async$IM)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fEF(null,A.d.gK(n),s,t.a.f)}else q=C.fEF(n,null,r.c,r.f)
if(n.length===1){s=A.d.gK(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gf(q,"ngmy_slides_"+p,!1),$async$IM)
case 4:o=e
s=t.a
w=5
return B.b(B.p2(s.c,s.f),$async$IM)
case 5:w=6
return B.b(t.Qx(),$async$IM)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IM,v)},
a2h(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.evV(t))
w=3
return B.b(C.bBV(),$async$a2h)
case 3:s=e
t.m(new C.evW(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bfA(s),$async$a2h)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a6(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.T(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2h,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.d9:A.bK,k=o.ga9W().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cD,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.evZ(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zs],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eU,24)],x.V)
u=B.ao(n,B.X(A.pS,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bNs,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eo,B.E(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.byP],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hs(B.aD(A.c4,D.eQw,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcde(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0Q,A.n),n,n,n,n,E.YE,n,n,1/0),A.dZ,o.awE(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aWh(A.pY,m,new C.ew_(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.aWh(D.bD9,m,new C.ew0(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.awE(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.az:A.c
t=B.m(16)
s=B.I(m?A.bG:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bU,n,n,n))}else A.d.v(v,new B.L(u,new C.ew1(o,m),B.U(u).k("L<1,r>")))
A.d.v(w,v)}w.push(A.mI)
w.push(o.awE(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.app(A.aR,k,!0,A.jn,m,o.r,o.gc7q(),"Scan on another device","Show QR"),1),A.av,B.E(o.aLs(A.jS,!0,A.iX,m,o.gcpj(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.B(B.a([B.E(o.bxM(A.aV,k,A.hB,m,o.r,o.gc7n(),"Download .json","Backup file"),1),A.av,B.E(o.aLs(A.aF,!0,Ax.ym,m,o.gcBa(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.lm,A.bj.j(0.9),n,n,n,18)
r=o.gaNn()
q=o.gb4E()
p=o.gb4E()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bl(!0,B.v(B.a([new B.D(Ag.Ml,i,n),B.E(B.cw(w,n,D.btc,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Vv,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aeY(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i7M(s,t.d,t.e),$async$aeY)
case 2:return B.h(null,v)}})
return B.i($async$aeY,v)},
awE(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aWh(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.az:A.c
if(g)w=A.bj
else w=e?A.bG:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cx,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eE(new B.D(A.bC,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bIj(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.az:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bG:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bND,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.eg:A.r4
if(p)r=A.bj
else r=e?A.b3:A.dp
return new B.D(A.cA,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.evP(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
app(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.az:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.r2,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.amS,A.f,s,s,D.b_x,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eE(new B.D(E.Yj,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aLs(d,e,f,g,h,i,j){return this.app(d,e,!1,f,g,!1,h,i,j)},
bxM(d,e,f,g,h,i,j,k){return this.app(d,e,!1,f,g,h,i,j,k)}}
C.VF.prototype={
S(){return new C.bjN()}}
C.bjN.prototype={
a_(){this.a1()
this.adP()},
adP(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adP=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fEF(null,A.d.gK(m),k,r.a.f):C.fEF(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gK(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kv(A.d.gK(n).w))C.fEq(A.d.gK(r.a.d),D.d5o)
n=r.a
m=n.c
n=C.i4K(n.d)
w=7
return B.b(C.fEE(p,C.i4P(r.a.d),n,m,q),$async$adP)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.ew2(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.ew3(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adP,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.d9:A.bK,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.ew4())
v=B.aH(j,j,j,j,B.X(A.eC,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.ew5(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zs],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dr,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.N,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0Q,A.n),j,j,j,j,E.YE,j,j,1/0)
q=B.m(24)
s=B.I(A.aR.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7e,A.L,j,j))
else if(k.d==null)r.push(D.e7w)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cx,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fkV,A.am,B.aD(j,B.p(j,B.B(B.a([D.bPa,A.av,B.d(m,j,j,j,j,j,j,D.f7C,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bTS,A.n),j,j,j,j,A_.ahJ,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ew6(k,d),j,j,j,j,j,j,!1,A.a8),A.O,D.fpf,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bG,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pL(j,j,!1,l,j,!0,!0,j,!1,D.bkz),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hf,A.L,j,j))
return B.c8(j,h,B.bl(!0,B.v(B.a([new B.D(Ag.Ml,v,j),B.E(B.cd(B.v(B.a([t,A.aP,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bVP,A.n),j,j,j,j,A.tI,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ai1,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDM.prototype={
S(){return new C.aDN(new B.as(A.as,$.aw()),B.jQ(!0,null,!0,!0,null,null,!1))}}
C.aDN.prototype={
a_(){var w=this
w.a1()
w.e.aO(0,new C.epx(w))
$.aW.x1$.push(new C.epy(w))},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aYR(){var w,v=this.c
v.toString
w=C.ys(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eE,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.up,36),D.aaQ],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bKJ,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fi6,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b_X,k,k,k,k,A.xI,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge5()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.az:A.M
o=new B.aT(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bC(1,A.bh,B.df(A.A,new B.x(p,k,D.f1i,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bq(o,o,o,o),n,k,A.n),A.hx,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.IE)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bRV,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.uc(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bf(5,k),new C.bu7()],x.aS),k,k,A.aOV,k,5,k,1,k,k,!1,"\u2022",k,new C.ept(l),k,new C.epu(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m2,k,k,k,k),0),0,0,0)],a1)
d=C.ys(w.a.a.toUpperCase())==null?k:l.gc7r()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cS(Ad.K4,B.p(k,B.bw(e,B.v(B.a([a0,new B.D(D.btG,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fgv,A.by,new B.a7(1/0,50,B.bG(D.fwK,d,B.bm(A.bj,A.bo,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.nx,k,k,!0,k,k,new C.epv(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.d9,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.bu7.prototype={
oy(d,e){var w=e.a.toUpperCase()
return e.cHp(B.hb(A.bw,w.length),w)}}
C.aqK.prototype={
S(){return new C.aDQ(B.z4(A.LD,A.nE,A.u7))}}
C.aDQ.prototype={
q(){this.d.q()
this.a2()},
aYQ(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iO(w,d)},
a9Q(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9Q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fNi(s),$async$a9Q)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aYQ("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9Q,v)},
c7p(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.i4N(w[u])
if(t!=null){this.aYQ(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vR,s,s,s,t.gbMt(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eC(B.a([r,B.aH(s,s,s,s,B.X(q?A.r7:Al.Nh,s,s,s,s,s),s,s,s,new C.ew8(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.d9,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fxY,s,s,s,1,s,!0)
r=B.z3(t.d,A.bR,t.gc7o())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b0,A.r,B.a([r,w,B.ao(32,B.p(s,D.flZ,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jh,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.buj.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,H.amw,A.f,w,w,D.b_G,w,56,w,w,w,w,w,56),A.aP,D.fxE,A.am,new B.ki(this.c,new C.f6J(),w,w,x.cI),A.aP,new B.ki(this.d,new C.f6K(),w,w,x.cl),A.ac,D.fxB],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.K4,new B.o(A.az,w,u,v,w,w,A.n),w,w,w,L.YL,D.buj,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7o.prototype={
S(){return new C.bjw(A.bx)},
gdd(){return this.c}}
C.bjw.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.ZD()
w.d=B.dv(A.fU,new C.edH(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
ZD(){return this.clF()},
clF(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.edF(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bB(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ce4(p.c),$async$ZD)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.edG(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$ZD,v)},
bOp(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.bZ
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.FJ,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bOp(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.agM,A.iz,r,r,1/0)}}
C.a8g.prototype={
nd(){var w,v,u,t=this
t.x9()
w=t.cx
v=t.c
w.bpk(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pS(B.F(["/S",D.ebb,"/URI",new B.rq(B.Wc(w.as),A.us,!0)],x.N,u),u))}}
C.a8h.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b2a.prototype={
bwQ(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e9u],x.di)
this.w!==$&&B.aP()
this.w=w},
gcKI(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jP(w,new C.cgg(),B.a3(w).k("jP<co.E,H>")).fb(0,new C.cgh())},
aC8(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h9(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tp(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.je(d.a,d.b))
s.n(0,"/Border",B.tp(H.aoD))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fY(t.gcKI()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pS(w,x.Y))}}
C.cgi.prototype={}
C.a2t.prototype={}
C.ahS.prototype={}
C.aQA.prototype={
h_(d){var w,v,u,t,s,r,q=this,p=null
q.le(d)
q.LG(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.beY(w)
u=x.N
t=x.Y
s=new C.cgi(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bwQ(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pS(B.F(["/Type",D.eb9],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8g(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.awc.prototype={}
C.aS4.prototype={
h_(d){var w,v,u,t,s=this
s.le(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e7(u.a,u.b,0,1)
u=d.b
u.i6()
t=s.a
t.toString
u.KQ(t)
u.S9(0)
u.oT(0,v)
w.h_(d)
u.ng(0)}}}
var z=a.updateTypes(["az<~>()","~(lF)","R(i0)","~()","R(eK)","R(oh)","R(lF)","~(i0)","R(eK,eK)","JF(Y)","R(nI)","R(lb)","az<R>()","H(H,i0)","a4<n,@>(i0)","ai<zn>()","n(nI)","R(a7F)","n(lF)","n(vU)","R(Et)","H(i0,i0)","n(eK)","r(eK)","cL(eK)","r(hz)","~(hz)","eK(uB,M,M,M,M,H{fx:n,key:n,rotation:M})","eK(n,M,H)","H(oh,oh)","R(zn)","R(n,ai<zn>)","a4<n,@>(oh)","nI()","Yf(Y)","eK(n,M,M,M,M,M{align:pY,anim:hz,bullets:R,color:H?,delay:H,fx:n,key:n,style:Hs,weight:oO})","a0v(Y)","eK(n,M,M,M,M{anim:hz,delay:H,fx:n,key:n})","az<~>(oh)","R(mr)","Yd(Y)","a02(Y)","a01(Y)","Pb(Y)","Zo(Y)","eK(uB,M,M,M,M,H,n,n{anim:hz,delay:H,rotation:M,stroke:H,strokeWidth:M})","eK(n,M,M,M,M,M,n,n,H)","eK(M,M,n,H{size:M})","r(re,M,M)","lb()","oh(a4<@,@>)","~(ur)","Et()","ff(eK)","r(iZ)","YX(Y)","~(Ek)","Zh(Y)","H(eK,eK)","eK(eK)","a4<n,@>(eK)","eK(a4<@,@>)","lF(lF)","a4<n,@>(lF)","lF(a4<@,@>)","R(jG)","jG()","n(i0)","~(ai<oh>)","S(ai<i0>)","S(i0)","ai<i0>(n?)","acj(Y,H)","~(R(eK,eK))","acY(Y)","aeE(Y,H)","w(lF,R)","Vq(Y)","ad0(Y)","Vt(Y)","~(mv)","i0(i0)","M(eK)","a_w(Y)","a_8(Y)","i0()","ai<EP>()","az<~>(ai<i0>)","r(bv<H,i0>)","D(jG)","D(Et)","az<~>(hz,~())","r(ai<hz>,hz?,~(hz),w)","R(m3)","ai<jq<mv>>(Y)","jq<mv>(mv)","i0(a4<@,@>)","VE(Y)","eK(n,M,M,M,M,M,H{align:pY,style:Hs,weight:oO})","VF(Y)","r(i0)","~(lX)","Iw(Y,lF,r?)","H(a8h)","az<ai<a4<n,@>>?>()","n(n)","az<zl>({paper:n?,photo:dD?,request:n,template!le})","az<a7x>({doc!zl,history:ai<+(n,n)>,instruction!n,photo:dD?,template!le})","acV(Y)"])
C.cEe.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cEf.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cEg.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajx(s):16;--w.c}w.b=A.o.dV(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mq(v,t)
w.b=v-A.o.dV(q,t)
w.a=t
return q},
$S:74}
C.cEh.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bOa.prototype={
$1(d){return J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)},
$S:1666}
C.frn.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iJ(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iJ(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iJ(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iJ(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bYO.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:29}
C.bYP.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:44}
C.bYR.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fHm.prototype={
$1(d){return new C.a0v(this.a,this.b,C.i5F(),null)},
$S:z+36}
C.f5b.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f5f.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f5g.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f5h.prototype={
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
C.f5c.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f5d.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f5e.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f56.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hE,w,w,w)
return B.ek(B.a([B.bK(!1,D.fkn,w,w,!0,w,w,new C.f54(d),w,w),B.bK(!1,D.fjt,w,w,!0,w,w,new C.f55(d),w,w)],x.p),w,w,D.Xi,v,w,w,w,w,D.fyf,w)},
$S:20}
C.f54.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.f55.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.f57.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f58.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f5l.prototype={
$0(){var w=this.a
return w.m(new C.f5k(w,this.b))},
$S:0}
C.f5k.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f5a.prototype={
$0(){var w=this.a
return w.m(new C.f59(w,this.b,this.c))},
$S:0}
C.f59.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.f5i.prototype={
$0(){return this.a.a0K(this.b)},
$S:0}
C.f5j.prototype={
$0(){return this.a.OL(0,this.b)},
$S:0}
C.f5o.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.f5p.prototype={
$0(){var w=this.a
return w.m(new C.f5n(w,this.b))},
$S:0}
C.f5n.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.L(w,new C.f5m(),B.U(w).k("L<1,n>")))}},
$S:0}
C.f5m.prototype={
$1(d){return d.a},
$S:z+67}
C.fcr.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h6o(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cB)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.oh(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fcs.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fu_.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.K)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcz()}if(q)v.n(0,s,t)}},
$S:z+68}
C.ftY.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.ftZ.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fGR.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fr3.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fHI.prototype={
$1(d){return new C.Yf(this.a,null)},
$S:z+34}
C.cFA.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cFC.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFF.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFG.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFE())},
$S:11}
C.cFE.prototype={
$0(){},
$S:0}
C.cFH.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1t(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cG(s)
p=q.bf(s,new C.cFD(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ah8(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:311}
C.cFD.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFI.prototype={
$1(d){},
$S:27}
C.cFB.prototype={
$1(d){return new C.Yd(this.b,this.a.gcvm(),null)},
$S:z+40}
C.cFJ.prototype={
$1(d){return D.fRX},
$S:z+43}
C.cFw.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.WY,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.D(D.bu5,B.v(B.a([B.p(w,D.bHW,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aP,D.fix,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f6E,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dZ,new B.D(A.pO,B.B(B.a([B.E(B.dT(D.fph,new C.cFu(d),B.dj(w,w,w,w,w,w,w,w,w,E.n0,w,w,A.cl,w,new B.b7(B.m(14),A.Y),D.aXY,w,w,w,w)),1),A.av,B.E(B.bG(D.fv2,new C.cFv(d),B.bm(A.bD,w,w,w,w,w,A.cl,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wO,new B.o(D.acw,w,u,v,D.cVv,w,A.n),w,w,w,L.YL,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1668}
C.cFu.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.cFv.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.cFx.prototype={
$0(){return J.nq(this.a.d,new C.cFt(this.b))},
$S:0}
C.cFt.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFs.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.WY,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bMQ,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.ao8,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aQz,t,t,t),A.bB,D.fuZ],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dfN[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ax5(u[1],u[2],u[3],new C.cFq(v,d),!1,t))}q.push(A.am)
q.push(D.bof)
q.push(A.am)
q.push(new C.ax5(A.e6,"Delete book","Remove it from this device",new C.cFr(d),!0,t))
return B.bl(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.acw,t,r,s,t,t,A.n),t,t,t,A.tD,E.Yp,t,t,t),!0,!1,A.af,!0,!0)},
$S:24}
C.cFq.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.cFr.prototype={
$0(){B.a5(this.a,!1).O("delete")
return null},
$S:0}
C.cFz.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aGu,12)],x.V)
return B.dU(B.eG(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f4(A.A,F.anH(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cFy.prototype={
$0(){return this.a.c22()},
$S:0}
C.cFp.prototype={
$0(){return this.a.aXq(0,this.b)},
$S:0}
C.cFo.prototype={
$0(){return this.a.D4(this.b)},
$S:0}
C.cFn.prototype={
$0(){return this.a.D4(this.b)},
$S:0}
C.cFK.prototype={
$2(d,e){var w=this.a
return w.bBk(J.q(w.d,e))},
$S:41}
C.cER.prototype={
$0(){var w=this.a
if(w.c!=null)w.AF()},
$S:0}
C.cEQ.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_i("Page "+(v.length+1),"",""))},
$S:0}
C.cET.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cF0.prototype={
$0(){},
$S:0}
C.cF1.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:8}
C.cEU.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcw().aJ(this.c)},
$S:0}
C.cES.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cEW.prototype={
$0(){return this.a.Q4(this.b)},
$S:0}
C.cEX.prototype={
$0(){return this.a.Q4(this.b)},
$S:0}
C.cEY.prototype={
$0(){var w=this.a
w.m(new C.cEV(this.b))
w.DU()},
$S:0}
C.cEV.prototype={
$0(){return this.a.c=""},
$S:0}
C.cF_.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cEZ(w,d))
w.DU()},
$S:z+51}
C.cEZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cF6.prototype={
$2(d,e){if(d)this.a.AF()},
$S:118}
C.cF2.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AF(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.T(D.eV6)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cF3.prototype={
$0(){return this.a.aWo(this.b,-1)},
$S:0}
C.cF4.prototype={
$0(){return this.a.aWo(this.b,1)},
$S:0}
C.cF5.prototype={
$0(){return this.a.c3i(0,this.b)},
$S:0}
C.fyw.prototype={
$1(d){return C.hgn()},
$S:42}
C.fyx.prototype={
$1(d){return null},
$S:27}
C.fgQ.prototype={
$1(d){return null},
$S:27}
C.fzv.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:323}
C.fzu.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:246}
C.fzB.prototype={
$1(d){var w=this.a
return C.fZR(d)===w||C.hkV(d)===w},
$S:z+4}
C.ffT.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:81}
C.c8n.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyu.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fyv.prototype={
$1(d){return C.fBe(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.ftl.prototype={
$1(d){var w=null
return B.bl(!0,new B.D(E.xH,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fpS,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.di(D.Gj,D.fk3,new C.ftj(d),B.bm(A.bZ,w,w,w,A.w,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.vQ,D.fr5,new C.ftk(d),B.dj(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.ftj.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.ftk.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.ftm.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.fgn,w,w,!0,w,w,new C.fth(d),w,w),B.bG(D.fxh,new C.fti(d),w)],x.p),w,w,w,D.fz9,w,w,w,w,D.fgh,w)},
$S:20}
C.fth.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.fti.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e8v.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e8t.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e8u.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e8w.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e8x.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fzA.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:81}
C.fzw.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.DE(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fzy.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f7P,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:159}
C.fzz.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hY,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hY,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b9,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fzx.prototype={
$2$female$size(d,e){var w=null,v=d?D.aen:this.a,u=B.I(A.hY,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.acK,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fL9.prototype={
$1(d){return new C.acV(this.a,this.b,null)},
$S:z+108}
C.dXS.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bl3:A.L8,q=B.I(D.ja.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bZ.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.amR,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.ja.j(0.35),A.em,10)],x.V),D.bWq,A.n),t,t,t,t,A.xz,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.D(I.YA,B.v(B.a([p,A.aB,B.B(B.a([o,A.bd,B.E(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.ja,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f76,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ig(!0,t,e,A.y,D.aNX,new C.dXR(w,this.c),v,D.ahE,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m9,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dXR.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acj(w,new C.dXQ(this.b,w),null)},
$S:z+72}
C.dXQ.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.ftp.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.ftq.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xH,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fta,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.di(D.Gj,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftn(d),B.bm(D.ja,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.o3,D.TL,new C.fto(d),B.dj(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.ftn.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fto.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.ftt.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.ftu.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xH,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fhl,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.di(D.Gj,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftr(d),B.bm(D.ja,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.o3,D.TL,new C.fts(d),B.dj(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.ftr.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fts.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.ftx.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fty.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xH,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fnG,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.di(D.Gj,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftv(d),B.bm(D.ja,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.o3,D.TL,new C.ftw(d),B.dj(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.ftv.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.ftw.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fMC.prototype={
$1(d){return D.fVI},
$S:z+74}
C.edK.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bcR:A.L8,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bP6,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bZ.j(0.35),A.em,10)],x.V),D.aod,A.n),v,v,v,v,A.xz,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.D(I.YA,B.v(B.a([r,A.aB,B.B(B.a([q,A.bd,B.E(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.L5,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f4C,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ig(!0,v,e,A.y,D.aNX,new C.edJ(this.b),19,D.ahE,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m9,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.edJ.prototype={
$2(d,e){var w=D.Qs[e]
return new C.aeE(w,new C.edI(this.a,w),null)},
$S:z+75}
C.edI.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fBi.prototype={
$0(){return B.fYQ(C.hUb(this.a))},
$S:288}
C.fBh.prototype={
$0(){var w=C.h_8(this.a)
return"data:image/png;base64,"+A.cS.gcw().aJ(w)},
$S:23}
C.fdZ.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jf(d,e),new B.jf(w,e+v),new B.jf(d+f*14,e),new B.jf(w,e-v)],x.J)
B.a1q(this.a,C.fz(4291404327),v)},
$S:703}
C.fMN.prototype={
$1(d){return new C.Vq(this.a,null)},
$S:z+77}
C.eh1.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eh0())},
$S:30}
C.eh0.prototype={
$0(){},
$S:0}
C.eh2.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eh_(w,d))},
$S:1673}
C.eh_.prototype={
$0(){return this.a.x=J.eT(A.dD.gaM(this.b))},
$S:0}
C.eh3.prototype={
$1(d){},
$S:27}
C.egE.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.egA.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.egL.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.egM.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.ekI)},
$S:0}
C.egN.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egG.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bO(0,A.c5)},
$S:0}
C.egH.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.egI.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.egJ.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egK.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m9(v,A.dU,A.ic)}},
$S:8}
C.egF.prototype={
$0(){var w=this.a,v=w.z,u=C.fBW(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cGx(C.fBW(t))},
$S:0}
C.egC.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.egD.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egT.prototype={
$0(){return B.a5(this.a,!1).lR()},
$S:0}
C.egU.prototype={
$0(){var w=this.a
return w.m(new C.egS(w))},
$S:0}
C.egS.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.egV.prototype={
$0(){var w=this.a
return w.m(new C.egR(w,this.b))},
$S:0}
C.egR.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.egW.prototype={
$1(d){var w=this.a
return w.m(new C.egQ(w))},
$S:9}
C.egQ.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.egX.prototype={
$1(d){var w=this.a
return w.m(new C.egP(w))},
$S:9}
C.egP.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.egY.prototype={
$0(){var w=this.a
return w.m(new C.egO(w,this.b))},
$S:0}
C.egO.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.egZ.prototype={
$1(d){return this.a.Zp()},
$S:2}
C.egB.prototype={
$0(){return this.a.c6H(this.b)},
$S:0}
C.cc3.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:299}
C.cc1.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cc2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAT.prototype={
bk3(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bO9(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cD1($.qP().jy(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mH(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bk3(d,e)},
$S:1674}
C.fza.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzc.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:81}
C.fzb.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.hr(t,t,t,t,B.de(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qk,A.ca,t,A.e0,A.c8)
v=this.a
w.wC(v.b)
u=w.b.a.c
return u.gbe(u)<=v.a},
$S:33}
C.fdA.prototype={
$1(d){var w=A.a.fE(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a1(w,new C.fdB(),B.U(w).k("a1<1>")).gM(0)},
$S:239}
C.fdB.prototype={
$1(d){return d.length!==0},
$S:3}
C.fdy.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:217}
C.fdz.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:217}
C.cc4.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazu()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.fZQ(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fWI(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gceR(),"\n\n")
d=B.hr(a6,a6,a6,a6,B.de(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adE(k,q,1.28),j),A.qk,A.ca,a6,A.e0,A.c8)
d.wC(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbe(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fZQ(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fWI(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adE(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bC(1,A.bh,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qk,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azt(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:348}
C.cc5.prototype={
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
n=o.gazu()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.fZQ(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bn,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fWI(g.length===0?B.a([a6],n):g,l))break}a1=o.adE(i,h,1.28)
a2=new C.cc6(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.ID,new B.a7(v,a5,a4.f,a5),A.ID,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bwn,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bC(1,A.bh,new B.x(l[2+a3],a5,a1,a5,A.qk,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azt(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:147}
C.cc6.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qk,w,w),w)},
$S:1675}
C.fMQ.prototype={
$1(d){return new C.Vt(this.a,this.b,null)},
$S:z+79}
C.eic.prototype={
$1(d){return d.m_()},
$S:1676}
C.eid.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eib(w,d))},
$S:1677}
C.eib.prototype={
$0(){var w=this.b
return this.a.d=w.gfs(w)},
$S:0}
C.ei_.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ei0.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ei6.prototype={
$0(){return B.a5(this.a,!1).eK()},
$S:0}
C.ei7.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aD(w,B.p(w,B.b3(w,w,w,new C.bbf(u,v.gawx(),w),A.f1),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ei4(v),new C.ei5(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.ei4.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:243}
C.ei5.prototype={
$1(d){var w=this.a
w.m(new C.ei1(w,d,this.b,this.c))},
$S:206}
C.ei1.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawx()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ei8.prototype={
$1(d){var w=this.a
return w.m(new C.ei3(w,this.b))},
$S:9}
C.ei3.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ei9.prototype={
$1(d){var w=this.a
return w.m(new C.ei2(w,d))},
$S:6}
C.ei2.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eia.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.fN5.prototype={
$1(d){return D.fYv},
$S:z+83}
C.eRN.prototype={
$1(d){return this.a.Y4()},
$S:8}
C.eQF.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcw().aJ(v)},
$S:0}
C.eR2.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eRc.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eQo.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eQp.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eQm.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eQn.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eQW.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eQX(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jz(B.ru(p>0.2?C.fRv(q,B.a4K(p,p,A.x)):q),A.r,u)],x.p)
w=s.bd
if(w>0.02){v=B.a4K(12,12,A.x)
p.push(B.jz(B.dc(B.ru(C.fRv(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b0
if(r!=null&&s.b_>0)p.push(B.el(u,B.b0(r).j(s.b_),!0))
r=s.ba
if(r!=null&&s.bM>0){r=B.b0(r).j(s.bM)
w=s.ba
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aWf,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.be))}r=s.aE
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aW0,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.be))
r=s.aN
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b4,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aN)],x.O),D.cUa,u),A.n),A.be))
if(s.aF>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b4,A.x,B.a([A.w.j(0),A.w.j(s.aF),A.w.j(s.aF),A.w.j(0)],x.O),D.d3S,u),A.n),A.be),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b6
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d12,u),A.n),A.be))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.beO(s,u),A.au))
return new B.an(A.W,u,A.b0,A.r,p,u)},
$S:64}
C.eQX.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cj,A.bR,!0,q,!1,q,q),o=r.a,n=o.aW0(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bj
v=o.aS
u=v-1
t=o.bU
s=o.cU?-1:1
return B.dU(B.ed(A.A,B.eG(A.A,l,B.fs(A.A,new B.Dc(new B.yJ(q,q,n,A.Ag),p,q),q,B.vH(s,o.cX?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:605}
C.eR8.prototype={
$0(){return this.a.m(new C.eR7(this.b,this.c))},
$S:0}
C.eR7.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eR9.prototype={
$1(d){return this.a.m(new C.eR6(this.b,d))},
$S:6}
C.eR6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eRb.prototype={
$0(){return this.a.m(new C.eRa(this.b,this.c))},
$S:0}
C.eRa.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQe.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eQf.prototype={
$1(d){var w=this.a
return w.m(w.gcwL())},
$S:2}
C.eQg.prototype={
$1(d){return this.a.m(new C.eQd())},
$S:2}
C.eQd.prototype={
$0(){},
$S:0}
C.eQh.prototype={
$0(){var w=this.a
return w.m(new C.eQc(w,this.b))},
$S:0}
C.eQc.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eQj.prototype={
$2(d,e){return A.av},
$S:36}
C.eQi.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bG
q=B.I(q,A.q,t?2.5:1)
r=B.df(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b_,A.b4,A.x,r,w,w),A.n),A.hx,w,94,w,w,w,w,70)
return B.aD(w,new B.a7(70,w,B.v(B.a([r,A.h0,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQb(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:77}
C.eQb.prototype={
$0(){var w=this.a
return w.m(new C.eQ8(w,this.b))},
$S:0}
C.eQ8.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eQk.prototype={
$1(d){var w=this.a
return w.m(new C.eQa(w,d))},
$S:9}
C.eQa.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eQl.prototype={
$1(d){var w=this.a
return w.m(new C.eQ9(w,d))},
$S:9}
C.eQ9.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eRC.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gK(this.b)]},
$S:33}
C.eRJ.prototype={
$1(d){var w=this.a
return w.m(new C.eRK(w,d))},
$S:28}
C.eRK.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ea(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eRL.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:256}
C.eRD.prototype={
$0(){var w=this.a
return w.m(new C.eRB(w,this.b))},
$S:0}
C.eRB.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.eRE.prototype={
$0(){var w=this.a
return w.m(new C.eRA(w,this.b))},
$S:0}
C.eRA.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eRF.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eRz(v,w.b,w.c,w.d))},
$S:0}
C.eRz.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eRG.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grz(v))},
$S:0}
C.eRH.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eRI.prototype={
$0(){var w=this.a
return w.m(new C.eRy(w))},
$S:0}
C.eRy.prototype={
$0(){var w=this.a.db
return A.d.h1(w,0,w.length,0)},
$S:0}
C.eRl.prototype={
$1(d){return d.a===this.a.dy},
$S:221}
C.eRm.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.awj[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awB(new B.n7(new B.bq(n,n,n,n),A.aq,new B.kP(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a7,A.x,m,j,j),A.n),A.be,new C.aZp(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eRk(r,v),2,i))}return B.bW(A.bz,h,A.bq,7,7)},
$S:160}
C.eRk.prototype={
$0(){var w=this.b
return w.m(new C.eRf(this.a,w))},
$S:0}
C.eRf.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eRn.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:234}
C.eRq.prototype={
$0(){var w=this.a
return w.m(new C.eRj(w))},
$S:0}
C.eRj.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eRr.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eRs.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eRt.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eRu.prototype={
$0(){var w=this.a
return w.m(new C.eRi(w))},
$S:0}
C.eRi.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eRv.prototype={
$0(){var w=this.a
return w.m(new C.eRh(w))},
$S:0}
C.eRh.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eRw.prototype={
$0(){var w=this.b
return w.m(new C.eRg(this.a,w))},
$S:0}
C.eRg.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eRx.prototype={
$1(d){return this.a.fx=d},
$S:234}
C.eRo.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eRp.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eR_.prototype={
$0(){var w=this.a
return w.m(new C.eQZ(w))},
$S:0}
C.eQZ.prototype={
$0(){var w=this.a
w.p4=null
w.b26()},
$S:0}
C.eR0.prototype={
$0(){var w=this.a
return w.m(new C.eQY(w,this.b))},
$S:0}
C.eQY.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eR1.prototype={
$0(){var w=this.a
return w.m(w.gcnj())},
$S:0}
C.eQS.prototype={
$0(){var w=this.a
return w.m(new C.eQR(w))},
$S:0}
C.eQR.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eQT.prototype={
$0(){var w=this.a
return w.m(new C.eQQ(w))},
$S:0}
C.eQQ.prototype={
$0(){var w=this.a
w.aF=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eQU.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d1r[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.awB(new B.n7(new B.bq(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dc(new B.yJ(o,o,v.aW0(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Ag),B.fL(u,A.A,140,o,A.cj,A.bR,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eQP(v,s),3,n))}return B.bW(A.bz,m,A.bq,10,8)},
$S:160}
C.eQP.prototype={
$0(){var w=this.a
return w.m(new C.eQO(w,this.b))},
$S:0}
C.eQO.prototype={
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
C.eQw.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eQx.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eQy.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eQz.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eQA.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eQB.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eQC.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.eQD.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eQE.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.ePS.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.ePT.prototype={
$1(d){return this.a.to=d},
$S:6}
C.ePU.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.ePV.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.ePW.prototype={
$0(){var w=this.a
return w.m(new C.ePR(w))},
$S:0}
C.ePR.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.ePX.prototype={
$1(d){return this.a.b0=d},
$S:234}
C.ePY.prototype={
$1(d){return this.a.b_=d},
$S:6}
C.eQq.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eQr.prototype={
$1(d){return this.a.bd=d},
$S:6}
C.eQs.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eQt.prototype={
$1(d){return this.a.ba=d},
$S:234}
C.eQu.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.eQ1.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.eQ2.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eQ3.prototype={
$1(d){return this.a.bU=d},
$S:6}
C.eQ4.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.eQ5.prototype={
$0(){var w=this.a
return w.m(new C.eQ0(w))},
$S:0}
C.eQ0.prototype={
$0(){var w=this.a
return w.c8=A.k.E(w.c8+90+180,360)-180},
$S:0}
C.eQ6.prototype={
$0(){var w=this.a
return w.m(new C.eQ_(w))},
$S:0}
C.eQ_.prototype={
$0(){var w=this.a
return w.cU=!w.cU},
$S:0}
C.eQ7.prototype={
$0(){var w=this.a
return w.m(new C.ePZ(w))},
$S:0}
C.ePZ.prototype={
$0(){var w=this.a
return w.cX=!w.cX},
$S:0}
C.eQV.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i8p(v,w.p4)},
$S:0}
C.eQN.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.blm:B.fL(v,A.A,w,w,A.cj,A.bR,!1,w,!1,w,w)
return C.fzi(d.length===0?"rounded":d,u,e)},
$S:143}
C.eQJ.prototype={
$0(){var w=this.a
return w.m(new C.eQI(w))},
$S:0}
C.eQI.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eQK.prototype={
$0(){var w=this.b
return w.m(new C.eQH(this.a,w))},
$S:0}
C.eQH.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eQL.prototype={
$0(){var w=this.b
return w.m(new C.eQG(this.a,w))},
$S:0}
C.eQG.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eQM.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eR5.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ev(n.cgL(),n.r))
l.push(new C.Iw(n.ctP(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ev(new B.an(A.W,t,A.b0,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aD(A.c4,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.be),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eR4(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:211}
C.eR4.prototype={
$1(d){var w=this.a
return w.m(new C.eR3(w,d,this.b,this.c))},
$S:18}
C.eR3.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eRe.prototype={
$0(){var w=this.a
return w.m(new C.eRd(w,this.b))},
$S:0}
C.eRd.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eQv.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).lR()},
$S:0}
C.eRM.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aYI(),B.E(B.av(w.b0E(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.v(B.a([B.E(w.aPe(),1),w.aLt()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aYI(),new B.D(A.hL,B.av(s.b0E(u),t,t,t),t),B.E(s.aPe(),1),s.aLt()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:569}
C.fwz.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ep(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzQ(),null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bn,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,A.N)},
$S:z+98}
C.fwy.prototype={
$3(d,e,f){var w=this,v=C.bzQ(),u=w.b?A.H:A.cv,t=w.c?A.cF:A.bn
return C.ep(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bf,4280172719,2,d,0,w.f,w.e,D.cm,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cdr.prototype={
$1(d){return B.t(d)},
$S:17}
C.fEf.prototype={
$0(){return this.a},
$S:z+15}
C.fkR.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fkS.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fEh.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fEk.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fEl.prototype={
$0(){return A.d.gK(D.vZ)},
$S:z+33}
C.fEd.prototype={
$1(d){return d.a},
$S:z+16}
C.fEg.prototype={
$1(d){return d.a},
$S:z+16}
C.fCd.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fCe.prototype={
$1(d){return d.length!==0},
$S:3}
C.fCf.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fwD.prototype={
$0(){return C.cD()},
$S:23}
C.fwG.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cm,s=u?n:0
return C.ep(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bf,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"","",A.bn,A.a5)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"",j,A.bn,A.a5)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,j,k,A.bn,A.a5)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bn,A.a5)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bn,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dd,!1,k,l,"",m,A.bn,A.a5)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bn,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,j,k,"",l,A.bn,A.a5)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bn,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bn,A.a5)},
$S:z+35}
C.fwF.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cm,D.f0,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fwE.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cm,t=v?j:0
return C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.bf,4280172719,2,"",t,0,"",u,D.lu,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qa,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fwC.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fz3.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hhp.cg(0,A.a.i(s.w).toLowerCase(),new C.fz1(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fz2(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bnO(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fz1.prototype={
$0(){return F.aN9(this.a.w)},
$S:199}
C.fz2.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byK("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hD(2,w,A.c6,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:199}
C.fdv.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fdw.prototype={
$1(d){return d.a},
$S:z+18}
C.fdx.prototype={
$1(d){return d.b},
$S:z+19}
C.fNh.prototype={
$1(d){return D.fYM},
$S:z+41}
C.eXZ.prototype={
$0(){return this.a.x=C.hLQ(this.b,this.c.b)},
$S:0}
C.eY_.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eXX.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:414}
C.eXY.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:414}
C.eXW.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bQ(A.az,null,new C.eXR(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kz,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b3(s,7)
if(r.length===0){n.m(new C.eXS(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hnb(o,m.cHk(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eXT(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eXR.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eXV(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b4l,A.f,p,p,D.b_q,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BU:D.BZ,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fzi(v,i.b2J(h),u),p)))}t=B.lZ(1,m,4,10,10,p,A.dR,!0)
if(!l)return B.bl(!0,new B.D(A9.vq,t,p),!0,!1,A.af,!0,!0)
s=new C.eXU(i,d)
m=B.aI(d,A.bV,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.GD[e]
l.push(s.$2(r.a,r.b))}return B.bl(!0,new B.cS(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fm7,A.S,t,A.dZ,D.eLe,A.at,D.fwD,A.S,B.lZ(1.15,l,3,10,10,p,A.dR,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.vq,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:24}
C.eXV.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bt:A.dq
return B.aD(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hy,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eXQ(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eXQ.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eXU.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bL:A.bG
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.ann,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.Ne(u.Fu(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aD(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXP(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:143}
C.eXP.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eXS.prototype={
$0(){var w=this.a
return w.w=w.w.Fu("")},
$S:0}
C.eXT.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eXF.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eXG.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eXI.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eXJ.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eXK.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eXL.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eXH(w,d))},
$S:2}
C.eXH.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eXM.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eYc.prototype={
$0(){return this.a.f.fK()},
$S:0}
C.eYd.prototype={
$0(){var w=this.a
return w.m(new C.eYb(w))},
$S:0}
C.eYb.prototype={
$0(){return this.a.e=null},
$S:0}
C.eYe.prototype={
$0(){var w=this.a
return w.m(new C.eYa(w))},
$S:0}
C.eYa.prototype={
$0(){return this.a.x=null},
$S:0}
C.eYg.prototype={
$1(d){var w=this.a
return w.m(new C.eY9(w,d))},
$S:32}
C.eY9.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eYh.prototype={
$1(d){var w=this.a
return w.m(new C.eY8(w,d))},
$S:32}
C.eY8.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eYi.prototype={
$0(){var w=this.a
return w.m(new C.eY7(w))},
$S:0}
C.eY7.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eYj.prototype={
$1(d){var w=this.a
return w.m(new C.eY6(w,d))},
$S:32}
C.eY6.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eYk.prototype={
$1(d){var w=this.a
return w.m(new C.eY5(w,d))},
$S:32}
C.eY5.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eYl.prototype={
$0(){var w=this.a
return w.m(new C.eY4(w))},
$S:0}
C.eY4.prototype={
$0(){var w=this.a
return w.w=w.w.Fu("")},
$S:0}
C.eYm.prototype={
$0(){var w=this.a
return w.m(new C.eY3(w,this.b))},
$S:0}
C.eY3.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eYn.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bN3(D.a2v[v]),null))
return B.bW(A.bz,t,A.bq,8,8)},
$S:160}
C.eYf.prototype={
$1(d){var w=this.a
return w.m(new C.eY2(w,d))},
$S:9}
C.eY2.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eXN.prototype={
$0(){var w=this.a
return w.m(new C.eXO(w,this.b,this.c))},
$S:0}
C.eXO.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.eY1.prototype={
$0(){var w=this.a
return w.m(new C.eY0(w,this.b))},
$S:0}
C.eY0.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fNg.prototype={
$1(d){return new C.a01(this.a,this.b,null)},
$S:z+42}
C.eXy.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eXz.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eXA.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aFU?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eXB.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eXC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eXx(w,d))},
$S:2}
C.eXx.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eXD.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eXE.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.hb(A.bw,w.length),A.aN))},
$S:0}
C.fk6.prototype={
$1(d){return d.a===this.a},
$S:221}
C.ed9.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawC(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cOh:D.d3C
t=D.xk.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xk.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bh0(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bOq(B.eG(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a7,A.x,B.a([A.K,D.bbf.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.X(p.a.c?A.eg:A.lS,D.xk,q,q,q,20),A.at,B.f4(A.A,B.nN(A.js,D.ffK,new C.ed8()),A.f,A.ei)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.fcn,A.f,q,q,new B.o(D.xk,q,q,B.m(6),q,q,A.n),q,q,q,q,M.aik,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:93}
C.ed8.prototype={
$1(d){return D.bUD.av(0,d)},
$S:66}
C.fEm.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fEn.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:221}
C.fEo.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fEp.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fEi.prototype={
$1(d){return d.a},
$S:z+18}
C.fEj.prototype={
$1(d){return d.b},
$S:z+19}
C.fMu.prototype={
$1(d){return new C.Zo(this.a,this.b,null)},
$S:z+44}
C.dic.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.did.prototype={
$1(d){return d.a===this.a.gahT()},
$S:z+10}
C.die.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dih.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dii.prototype={
$0(){var w=this.a
return w.m(new C.dig(w,this.b))},
$S:0}
C.dig.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dij.prototype={
$1(d){var w=this.a
return w.m(new C.dif(w,d))},
$S:9}
C.dif.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ed7.prototype={
$1$2(d,e,f){var w=B.bn(d,!0,f)
A.d.fv(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dH(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f9Z.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f0,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cm,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.fa0.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ep(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bn,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bf,4280172719,2,d,l,0,"",D.mE,D.cQ,g,e,f)},
$S:z+46}
C.fa_.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wt(0,"twinkle")
w=t===D.bf?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mE,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f9Y.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fxK.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fxL.prototype={
$0(){return A.d.gK(D.GM)},
$S:z+49}
C.fxM.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fbZ.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fDP.prototype={
$1(d){var w=2450411,v=4281908728
C.dw(d,C.dx(4280171146,1,0,D.bf,w,0,0.52,0,0))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.04,0.48,0))
C.dw(d,C.dx(4294047225,0.38,0,D.bf,w,0,0.48,0.52,0.62))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDQ.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dw(d,C.dx(4280172719,0.8,0,D.bf,w,0,0.36,0.58,0.1))
C.dw(d,C.dx(v,0.64,0,D.bf,w,0,0.28,0.64,0.18))
C.dw(d,C.dx(4282090230,0.44,0,D.bf,w,0,0.2,0.7,0.28))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.22,0.08,0.12))
C.dw(d,C.dx(u,0.004,0,D.fs,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fDR.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(4279080072,0.11,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4279310375,0.11,0,D.bf,w,0,1,0,0.89))
C.dw(d,C.dx(856528008,0.72,0,D.jI,w,0,0.28,0.72,0.14))
C.dw(d,C.dx(1426953352,0.2,0,D.jI,w,0,0.2,0.78,0.22))
C.dw(d,C.dx(v,0.004,0,D.fs,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fE1.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4279203438,0.55,0,D.jI,w,0,0.5,0.55,-0.05))
C.dw(d,C.dx(4280171146,0.5,0,D.jI,w,0,0.45,0.62,0.35))
C.dw(d,C.dx(4280640491,0.4,0.3,D.jH,w,0,0.35,0.68,0.55))
C.dw(d,C.dx(571438702,0.12,0,D.bf,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fE6.prototype={
$1(d){var w=4280472558
C.dw(d,C.dx(4279310375,0.75,-0.4,D.jH,2450411,0,0.75,-0.15,0.35))
C.dw(d,C.dx(w,0.55,0,D.bf,2450411,0,0.06,0.42,0.38))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.35,0.08,0.08))
C.dw(d,C.dx(2282478,0.12,0,D.bf,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fE7.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3423541034,0.48,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.12,-0.08,D.jI,w,0,1.1,-0.05,0.38))
C.dw(d,C.dx(858088427,0.35,0,D.bf,w,0,0.42,0.55,0.05))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fE8.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cNk[w]
u=Date.now()
t=$.j0
$.j0=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f0,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.bf,v,4294967295,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fE9.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mh,A.dv,w/3).l()
u=Date.now()
t=$.j0
$.j0=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f0,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.Cz,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fEa.prototype={
$1(d){var w=4294967295
C.dw(d,C.dx(4280640491,1,0,D.bf,2450411,0,0.42,0,0))
C.dw(d,C.dx(4280110808,1.1,1.57,D.jH,2450411,0,0.18,0.35,-0.05))
C.dw(d,C.dx(w,0.006,0,D.fs,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEb.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0))
C.dw(d,C.dx(u,0.012,0,D.bf,v,0,1,0,0.1))
C.dw(d,C.dx(u,0.006,0,D.fs,u,3,0.42,0.06,0.14))
C.dw(d,C.dx(403446057,0.68,0,D.jI,v,0,0.22,0.72,0.18))
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEc.prototype={
$1(d){var w=4278630100
C.dw(d,C.dx(4279310375,1.2,0.15,D.jI,2450411,0,0.55,-0.2,-0.1))
C.dw(d,C.dx(w,1.1,0.15,D.bf,2450411,0,0.08,0.15,-0.05))
C.dw(d,C.dx(1120295,0.18,0,D.bf,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDS.prototype={
$1(d){var w=4292617766
C.dw(d,C.dx(4282714634,0.65,-0.2,D.jH,2450411,0,0.65,-0.1,0.45))
C.dw(d,C.dx(w,0.5,-0.15,D.jH,2450411,0,0.5,0.05,0.55))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fDT.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4278413729,0.35,3.14,D.jH,w,0,0.45,-0.05,0.7))
C.dw(d,C.dx(4278355143,0.3,3.14,D.jH,w,0,0.4,0.25,0.75))
C.dw(d,C.dx(4279150057,0.32,3.14,D.jH,w,0,0.5,0.55,0.72))
C.dw(d,C.dx(863884284,0.22,0,D.eL,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fDU.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dw(d,C.dx(w,0.14,0,D.bf,v,0,0.14,0.02,0.02))
C.dw(d,C.dx(2282478,0.14,0,D.bf,u,3,0.14,0.84,0.02))
C.dw(d,C.dx(w,0.28,0,D.jI,v,0,0.35,-0.08,0.78))
C.dw(d,C.dx(u,0.22,0.5,D.jH,v,0,0.3,0.72,0.78))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fDV.prototype={
$1(d){var w=4293571336,v=1156231944
C.dw(d,C.dx(1841431,0.92,0,D.bf,w,3,0.92,0.04,0.04))
C.dw(d,C.dx(v,0.15,0,D.jH,2450411,0,0.15,0.02,0.02))
C.dw(d,C.dx(v,0.15,3.14,D.jH,2450411,0,0.15,0.83,0.83))
C.dw(d,C.dx(w,0.004,0,D.fs,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fDW.prototype={
$1(d){var w=4279080072,v=2450411
C.dw(d,C.dx(w,0.14,0,D.l2,v,0,0.14,0.68,0.18))
C.dw(d,C.dx(4279548070,0.14,0,D.l2,v,0,0.14,0.78,0.28))
C.dw(d,C.dx(4281193663,0.14,0,D.l2,v,0,0.14,0.68,0.38))
C.dw(d,C.dx(4284410580,0.14,0,D.l2,v,0,0.14,0.78,0.48))
C.dw(d,C.dx(4279203438,0.14,0,D.l2,v,0,0.14,0.68,0.58))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fDX.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3708753706,0.42,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.06,-0.05,D.jI,w,0,1,0,0.38))
C.dw(d,C.dx(859356664,0.25,0,D.eL,w,0,0.25,0.7,0.08))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fDY.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mh,A.dv,w/3).l()
u=Date.now()
t=$.j0
$.j0=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f0,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.Cz,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(4280172719,0.08,0,D.bf,2450411,0,1,0,0))
C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fDZ.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j0
$.j0=u+1
u=new C.eK("design_"+(""+1000*v+"_"+u),D.f0,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bn,A.aD,s,A.bg,null,D.fs,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kd
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(s,0.75,0,D.bf,2450411,0,0.22,0.72,0.1))
C.dw(d,C.dx(872415231,0.16,0,D.bf,2450411,0,0.16,0.75,0.15))
C.dw(d,C.dx(s,0.006,0,D.fs,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fE_.prototype={
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
C.fE0.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j0
$.j0=t+1
t=new C.eK("design_"+(""+1000*u+"_"+t),D.f0,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bn,A.aD,r,A.bg,null,D.bf,4294967295,4280640491,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.di,A.co,w/2).l()
t=Date.now()
s=$.j0
$.j0=s+1
u=new C.eK("design_"+(""+1000*t+"_"+s),D.f0,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bn,A.aD,r,A.bg,null,D.bf,u,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kd
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(4280171146,1,0,D.bf,q,0,0.48,0,0))
C.dw(d,C.dx(4280172719,1.1,1.57,D.jH,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fE2.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(870995980,0.55,0.45,D.jI,w,0,0.55,-0.12,-0.08))
C.dw(d,C.dx(856996006,0.45,0.45,D.jI,w,0,0.45,0.62,-0.05))
C.dw(d,C.dx(16777215,0.38,0.45,D.jI,4293548044,5,0.38,0.52,0.12))
C.dw(d,C.dx(585783308,0.3,0.45,D.jI,w,0,0.3,0.56,0.16))
C.dw(d,C.dx(4279548070,0.06,0,D.bf,w,0,0.16,0.38,0.04))
C.dw(d,C.dx(1156208652,0.28,0,D.eL,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fE3.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dw(d,C.dx(w,1,0,D.bf,v,0,0.07,0,0))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.14))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.28))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.42))
C.dw(d,C.dx(s,0.08,0,D.eL,v,0,0.08,0.5,0.16))
C.dw(d,C.dx(w,0.08,0,D.eL,v,0,0.08,0.5,0.3))
C.dw(d,C.dx(4279548070,0.08,0,D.eL,v,0,0.08,0.5,0.44))
C.dw(d,C.dx(16777215,0.32,0.45,D.jI,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fE4.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dw(d,C.dx(4294047225,0.08,0,D.bf,t,2,0.1,0.02,0.06))
C.dw(d,C.dx(s,0.42,0,D.bf,2450411,0,0.36,0.58,0.18))
C.dw(d,C.dx(872415231,0.12,0,D.bf,2450411,0,0.28,0.62,0.24))
C.dw(d,C.dx(16777215,0.28,0,D.eL,s,4,0.32,0,0.72))
C.dw(d,C.dx(r,0.006,0,D.fs,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j0
$.j0=u+1
u=new C.eK("design_"+(""+1000*v+"_"+u),D.f0,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.eL,16777215,t,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kd
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fE5.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(3423541034,0.55,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4009754623,0.56,0.45,D.jI,w,0,0.56,0.22,0.18))
C.dw(d,C.dx(3439329279,0.44,0.45,D.jI,w,0,0.44,0.28,0.24))
C.dw(d,C.dx(v,0.07,0,D.bf,w,0,0.22,0.34,0.62))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fvA.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fvB.prototype={
$0(){return A.d.gK($.bDt())},
$S:z+52}
C.fjF.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fjE.prototype={
$1(d){return C.hT7(d,this.a,this.b)},
$S:z+53}
C.fEv.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vH(1.0375,1.01875,1)
return new B.fO(v,u,new C.aS4(B.hIR(A.uU,C.hTa(w.c,w.d,v,u),t)))},
$S:417}
C.dTC.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dTB.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.bT(A.JK,1.2,A.x,w,0,u.d,w,w),A.n),A.be),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jz(new B.an(A.W,w,A.b0,A.r,B.a([t,new B.ev(B.b3(w,w,w,new C.bdU(u.a,r,q,r),A.au),w),B.av(new B.ki(r,new C.dTA(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:345}
C.dTA.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.aw(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gK(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hU(B.fL(i,A.A,r,r,A.cj,A.bR,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fT(A.A,0,6.283185307179586,A.x,t,r,new B.mm(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqu(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaK1(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:105}
C.eWM.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:66}
C.c7Z.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bL:A.bG
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hH.j(0.4),A.J,14)],x.V):v
w=B.df(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eF,v,72,v,v,v,v,v)
return B.aD(v,new B.a7(112,v,B.v(B.a([w,A.h0,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c8_.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fu(""))},
$S:0}
C.c80.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.Ne(v.Fu(u),!0,!1,null),!0,null),d.b,new C.c81(w,this.c,d),v.a===u)},
$S:z+54}
C.c81.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hnb(u.b,t.c.Fu(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fKU.prototype={
$1(d){return new C.YX(this.a,null)},
$S:z+55}
C.d7p.prototype={
$0(){var w=this.a
w.d=w.gvA().baD("data:"+this.b+";base64,"+A.cS.gcw().aJ(this.c));++w.r},
$S:0}
C.d7u.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d7v.prototype={
$0(){var w=this.a
return w.m(new C.d7t(w))},
$S:0}
C.d7t.prototype={
$0(){return this.a.r++},
$S:0}
C.d7w.prototype={
$1(d){var w=this.a
return w.m(new C.d7s(w,d))},
$S:2}
C.d7s.prototype={
$0(){var w=this.a
return w.d=w.gvA().aD_(this.b)},
$S:0}
C.d7x.prototype={
$0(){var w=this.a
return w.m(new C.d7r(w))},
$S:0}
C.d7r.prototype={
$0(){var w=this.a
return w.d=w.gvA().baD("")},
$S:0}
C.d7y.prototype={
$1(d){var w=this.a
return w.m(new C.d7q(w,d))},
$S:2}
C.d7q.prototype={
$0(){var w=this.a
return w.d=w.gvA().baK(this.b)},
$S:0}
C.d7z.prototype={
$0(){var w=this.a
w=w.gvA().baK(w.gawD().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fKT.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fKS(w),null)},
$S:21}
C.fKS.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bl(!0,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bV,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.ftN,A.at,D.fu2,A.aB,new C.aZm(v.a,new C.fKR(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_Y,w,w,w,w,A.M5,w,w,w)},
$S:172}
C.fKR.prototype={
$1(d){this.b.$1(new C.fKQ(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fKQ.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fNf.prototype={
$1(d){return D.fU9},
$S:z+57}
C.deb.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dec.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).O(this.b)
return null},
$S:0}
C.ded.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).O(v)}},
$S:0}
C.fBb.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:66}
C.d76.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cU(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cU(w,q+p,w,q+p*1.2))
u.F(new B.CU(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aP(u,v.d)
s.aP(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ae(new B.u(w,o),2.2,p)},
$S:704}
C.fBf.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.ftB.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.ftC.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xH,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fcE,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.di(D.Gj,B.d('Endelea na "'+A.d.gK(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftz(d),B.bm(A.bZ,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.o3,D.TL,new C.ftA(d),B.dj(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.ftz.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.ftA.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.cdp.prototype={
$1(d){return d.hC()},
$S:z+59}
C.cdq.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cdo.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a2(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a5.gdJ(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hOZ(b2.h(0,"type"))
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
n=A.ay6[A.o.D(b4,0,8)]
m=D.cQa[A.o.D(w,0,1)]
l=C.hSA(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.auP[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hVp(b2.h(0,"shape"))
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
a3=C.hiv(b2.h(0,"textTransition"))
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
return C.ep(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.cde.prototype={
$1(d){return d.hC()},
$S:z+62}
C.cdf.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cdb.prototype={
$1(d){return B.t(d)},
$S:17}
C.cdc.prototype={
$1(d){return B.t(d)},
$S:17}
C.cdd.prototype={
$1(d){return C.h9a(B.a2(d,x.N,x.z))},
$S:z+64}
C.cdG.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cdH.prototype={
$0(){return A.d.gK(D.a29)},
$S:z+66}
C.cdB.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hC())},
$S:z+7}
C.cdA.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdw.prototype={
$1(d){return new B.L(d,new C.cdx(),B.U(d).k("L<1,S>")).fb(0,new C.cdy())},
$S:z+69}
C.cdx.prototype={
$1(d){return d.f},
$S:z+70}
C.cdy.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:705}
C.cdz.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hEG(d)},
$S:z+71}
C.cdC.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cdD.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdE.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fBO.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.K)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.K)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fBK.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fBL.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fBM.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fBN.prototype={
$2(d,e){return d.b===D.f0&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cdk.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i35(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cF(new B.bc(b4,b5),new C.cdj(),b5.k("J.E"),x.N)
w=B.db(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pH.aw(0,A.k.D(b1,0,1))
u=new C.cdl()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cdm(a9,b7.d)
r=new C.cdn(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jx.aw(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kF(A.k.D(1-k,0,1),B.dU(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.K)(b2),++m){i=b2[m]
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
if(a2===D.f0){a4=i.hC()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lu&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b0,A.r,B.a([new B.kF(A.k.D(o,0,1),r.$1(l),a8),new B.kF(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iG(B.wb(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cm)a7=D.mE
p.push(s.$5(i.c,i.d,i.e,i.f,C.hkK(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.be)},
$S:433}
C.cdj.prototype={
$1(d){return d.a},
$S:z+22}
C.cdl.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cdm.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cdn.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7n(v,C.b0u(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dFR.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cdt.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cdu.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fEC.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:322}
C.fDJ.prototype={
$1(d){return new C.ad0(this.a,this.b,null)},
$S:z+78}
C.epz.prototype={
$0(){return this.a.Pw(this.b,C.i6r(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.epA.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pw(this.b,C.i6t(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.epB.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pw(this.b,C.i6s(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.epC.prototype={
$0(){Y.hku()
B.a5(this.a,!1).O(null)},
$S:0}
C.cdi.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cdh.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nz),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lO(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bR:A.du
return B.fL(t,A.A,o,new C.cdg(),A.cj,w,!0,u,!1,new B.cy("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cdg.prototype={
$3(d,e,f){return D.abl},
$S:218}
C.fBJ.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.dd(r,0,B.dJ(6,"count",x.S),B.U(r).c)
u=r.$ti.k("L<ak.E,cL>")
r=B.C(new B.L(r,new C.fBI(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c0(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.be),A.aq)},
$S:1692}
C.fBI.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0u(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fmc.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fma(d))
w=B.aI(d,A.bV,x.w).w
v=B.m(22)
u=B.I(A.bG,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fM,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.B(B.a([B.E(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.jM,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zE,q,q,!0,q,q,new C.fmb(p,d),q,B.fv(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.F9,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.az,q,u,v,t,q,A.n),q,q,q,A.fJ,A.Fi,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:267}
C.fma.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).px())B.a5(w,!0).eK()},
$S:0}
C.fmb.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a5(this.b,!0).eK()},
$S:0}
C.f4h.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dU(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dc(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dc(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fB(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.jZ(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fB(r*1.2)
s.jZ(r*0.5)
return B.fs(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fB(-r*1.4)
return B.fs(A.a7,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jz(u.b,A.r,new C.aIR(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jz(u.b,A.r,new C.aIR(1-r,t))],x.p),t)
case 16:v=D.b3l.aw(0,r)
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mL(r*6.28)
s.jI(r,r,r,1)
return B.fs(A.A,u.b,t,s,!0)
case 20:return B.eG(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:59}
C.dRP.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRO.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRN.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hkK(v,w,e)},
$S:59}
C.cda.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b0(v.e)
t=v.f
t.toString
t=new B.a8(A.a3,A.a7,A.x,B.a([u,B.b0(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b0(v.e):r
v=v.z
s=B.U(v).k("L<1,cL>")
q=B.C(new B.L(v,new C.cd9(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c0(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.be)},
$S:433}
C.cd9.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cm?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7n(m,new C.UF(d,C.b0u(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d4l.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d4k(w))},
$S:11}
C.d4k.prototype={
$0(){return this.a.d++},
$S:0}
C.ecQ.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aN0.t(0,A.d.gK(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i2P(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e7(0,w*7,0,1)
s.fB(Math.sin(t)*0.32)
s.jZ(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jI(w,w,w,1)
return B.fs(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dc(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:59}
C.eUp.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fB
return w},
$S:1693}
C.fzj.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.ar(o,o):new B.ar(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdO()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqn(u,t,r),A.au))
w.push(B.nt(s.d,A.aq,new C.beq(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpn(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b0,A.r,w,r),r),r,r,r)},
$S:259}
C.fp4.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:323}
C.evN.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CF(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.evL(),new C.evM(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.evL.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:194}
C.evM.prototype={
$0(){return J.fp(this.a)},
$S:1696}
C.esa.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.esb.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.esc.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.etL.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.etz.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.etA.prototype={
$1(d){return d.hC()},
$S:z+81}
C.ery.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.euT.prototype={
$0(){this.a.tv()},
$S:0}
C.evJ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oe()
w.JS()},
$S:0}
C.etJ.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oe()
w.JS()},
$S:0}
C.evw.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.evx.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.evy.prototype={
$1(d){return d.a},
$S:z+22}
C.evz.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aN),$.aw())},
$S:236}
C.evA.prototype={
$0(){return B.jQ(!0,null,!0,!0,null,null,!1)},
$S:706}
C.eqX.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.evK.prototype={
$0(){},
$S:0}
C.esS.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()
w.JS()},
$S:0}
C.eqV.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xo()},
$S:0}
C.eqW.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xo()},
$S:0}
C.ete.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.etf.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()
w.JS()
w.z="Home"},
$S:0}
C.etg.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esR.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TK,w,w,!0,w,w,new C.esQ(d),w,w)],x.p),w,w,w,D.fvx,w,w,w,w,D.fd5,w)},
$S:20}
C.esQ.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esO.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TK,w,w,!0,w,w,new C.esN(d),w,w)],x.p),w,w,w,D.fh3,w,w,w,w,D.feO,w)},
$S:20}
C.esN.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esP.prototype={
$0(){},
$S:0}
C.es6.prototype={
$1(d){return this.a.b__(C.bBu(d))},
$S:z+7}
C.es7.prototype={
$1(d){return this.a.aes(C.bBu(d))},
$S:z+7}
C.esY.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fvB,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Pl(A.vE,D.awb,"HATI YA KUHOWA","Hati ya mahari",new C.esT(d),w),A.S,new C.Pl(A.h9,D.d1s,"HATI YA KUHOWESHA","Hati ya kupokea",new C.esU(d),w),A.S,new C.Pl(A.i1,D.cOn,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.esV(d),w),A.S,new C.Pl(A.hN,D.cMF,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.esW(d),w)],v)
if(this.a.gaaX())A.d.v(u,B.a([A.S,new C.Pl(A.iY,D.cxK,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.esX(d),w)],v))
return B.bl(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xH,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:24}
C.esT.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.esU.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.esV.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.esW.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.esX.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.esZ.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()},
$S:0}
C.eqZ.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.er_.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a9(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nc(r,v.f+1,q);++v.f
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
C.et9.prototype={
$1(d){return d.b===D.lu},
$S:z+4}
C.eta.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gK(v).go
w.b=A.d.gK(v).id
return new B.e0(new C.et7(w,this.a,v),null)},
$S:21}
C.et7.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.et8(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aS:A.ak,i=l?A.bo:A.bK,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bG:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cD,j,q,q,q,q),q,q,q,new C.et3(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BZ[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgV(t,u.b,p.a===t,i,k,new C.et4(v,m),q))}a1=B.bW(A.bz,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BU[w]
s.a=null
t=s.a=r.a
u.push(new C.bgU(t,r.b,p.b===t,k,j,new C.et5(s,m),q))}return B.bl(!0,B.p(q,B.cd(B.v(B.a([d,A.aP,a0,A.S,a1,A.by,v,A.S,B.bW(A.bz,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.eB(D.bQN,D.fy_,new C.et6(o,n),B.dj(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aYu,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tD,D.bsQ,q,q,q),!0,!1,A.af,!0,!0)},
$S:87}
C.et8.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.et1(w.a,d,e))
w.b.d3(new C.et2(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.et1.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.et2.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.et3.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.et4.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.et5.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.et6.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gr(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d3(new C.et0(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.et0.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.etc.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etd.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bo(v,new C.etb(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nc(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xo()},
$S:0}
C.etb.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etu.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.etv.prototype={
$1(d){return d.w},
$S:z+82}
C.etw.prototype={
$2(d,e){return d>e?d:e},
$S:88}
C.etx.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aS:A.ak,r=u?A.bo:A.aQ,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bG:A.aL,A.q,1),n=B.aI(d,A.bV,x.w).w,m=w.a,l=x.p,k=w.b
return B.bl(!0,B.p(v,B.v(B.a([B.B(B.a([B.p(v,D.bKw,A.f,v,v,D.aZR,v,38,v,v,v,v,v,38),A.bd,B.E(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cD,s,v,v,v,v),v,v,v,new C.etr(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.cn,B.hJ(v,new C.ets(m,k,w.c,s,w.d,t,r),k.length,A.fz,v,A.ah,new C.ett(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tD,A.Yv,v,v,v),!0,!1,A.af,!0,!0)},
$S:24}
C.etr.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ett.prototype={
$2(d,e){return A.ac},
$S:36}
C.ets.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bNC,q,q,q,new C.etp(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.D(D.bv3,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.m(16),A.Y),q,A.eQ,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aY9),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.etq(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:476}
C.etp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i8y(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gex()?p.a:q.a.length
n=p.gex()?p.b:q.a.length
m=A.a.oJ(q.a,o,n,s)
r.bO(0,new B.bb(m,B.hb(A.bw,o+s.length),A.aN))
l.aix(k,m)
l.pi()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etq.prototype={
$1(d){var w=this.a
w.aix(this.b.a,d)
w.pi()},
$S:2}
C.ety.prototype={
$0(){},
$S:0}
C.et_.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.erf.prototype={
$0(){},
$S:0}
C.erg.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hm2(this.b,w,!0)
w=this.a
w.r=null
w.xo()},
$S:0}
C.erh.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eri.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bo(v,new C.ere(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nc(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xo()},
$S:0}
C.ere.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etE.prototype={
$1(d){return B.oN(new C.etD(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:128}
C.etD.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.D(E.ai_,B.v(B.a([D.ftc,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.ig(!0,w,e,A.y,D.eR4,new C.etC(this.a,this.b),20,A.tG,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:436}
C.etC.prototype={
$2(d,e){var w=null,v=D.GM[e],u=C.hEB(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fK,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eLa,A.f,w,w,new B.o(A.dN.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.ne,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etB(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:76}
C.etB.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cds(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etF.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()},
$S:0}
C.epU.prototype={
$0(){var w,v=this.a,u=v.gqk(),t=C.rp(4294967295,null,0,0,null,C.cD(),D.mD,"","","",D.dd),s=this.b
C.cdF(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cy){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.erd.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j0
$.j0=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.h9a(q));++v.f},
$S:0}
C.erb.prototype={
$0(){var w=this.a
A.d.cC(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.etN.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cC(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.er7.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bo(v.d,new C.er6(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.er6.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.etM.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eqY.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aN),$.aw())},
$S:236}
C.erz.prototype={
$0(){return B.jQ(!0,null,!0,!0,null,null,!1)},
$S:706}
C.evu.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.evv.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asF(w).fK()
v=u.Wd(w)
v.stb(B.hb(A.bw,v.a.a.length))},
$S:8}
C.euU.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xc(v)
if(u!=null&&u.b===D.cQ)w.Wd(u).saV(0,u.r)}else w.w=null},
$S:0}
C.epV.prototype={
$0(){var w=C.cD(),v=this.a,u=C.ep(A.bg,!1,v.gqk().e.l(),A.aD,"",4280640491,24,A.bn,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.bf,4280172719,2,"Tap to edit text",0,0,"",D.cm,D.cQ,0.7,0.15,0.2)
A.d.J(v.gdr().z,u)
v.r=u.a},
$S:0}
C.epS.prototype={
$0(){var w=C.cD(),v=this.a,u=C.ep(A.bg,!1,4279310375,A.aD,"",v.gqk().c.j(0.25).l(),24,A.bn,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqk().c.l(),2,"",0,0,"",D.cm,D.f0,0.25,0.3,0.3)
A.d.J(v.gdr().z,u)
v.r=u.a},
$S:0}
C.epI.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,0.6,0.2,0.18),v=this.a
A.d.J(v.gdr().z,w)
v.r=w.a},
$S:0}
C.epF.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bXB],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaj8().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bIe,r,r,r,r,new C.epE(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bl(!0,B.cw(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:24}
C.epE.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.epG.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.R.ao(u.ag(),null),s=C.ep(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bn,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.bf,4280172719,2,t,0,0,"",D.cm,D.a4I,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdr().z,s)
t.r=s.a},
$S:0}
C.er9.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.era.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bo(v.gdr().z,new C.er8(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.er8.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eqm.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f0){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eqn(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eqn.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eqr.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eqs(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.eqs.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eqp.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.eqq(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eqq.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.f6(w,new C.eqo()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.eqo.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eql.prototype={
$0(){return C.cdF(this.b,this.c,this.a.gqk())},
$S:0}
C.eto.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.evD.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evE.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.evF.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evG.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bf(s,new C.evC(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRV()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hC()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xo()
t.JS()}},
$S:0}
C.evC.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ev9.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ab0(),s=w.b,r=u.ab1(A.fb,A.ks,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.O,r,A.by,B.p(v,B.B(B.a([B.E(u.aU9(w.c,A.ak),1),new B.D(A.fr,B.p(v,D.bIk,A.f,v,v,new B.o(A.fb.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aU9(s,A.fb),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.by,u.aUc(A.fb,d,D.bEp,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bWs(A.aR,d,A.tU,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aUa(d,"Not now"))
return new C.JF(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ev8.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JF(B.v(B.a([v.ab0(),A.O,v.ab1(A.aR,D.bE4,"Pick which saved document should receive the details.","Choose "+this.b),A.aP,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bV,x.w).w.a.b*0.42),B.hJ(w,new C.ev6(v,u,d),u.length,w,w,A.ah,new C.ev7(),!0),w),A.aB,v.aUa(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.ev7.prototype={
$2(d,e){return A.S},
$S:36}
C.ev6.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.amR,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bUy,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nw,w,w,w),A.cV,B.d("Updated "+this.a.Px(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ev5(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:76}
C.ev5.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.ev2.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.ab0()
t=t.ab1(A.aF,A.u2,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JF(B.v(B.a([s,A.O,t,A.by,B.B(B.a([B.E(B.dT(A.a81,new C.ev0(d),B.dj(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cl,u,new B.b7(B.m(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.av,B.E(B.bG(D.ffo,new C.ev1(d),B.bm(A.fb,u,u,u,A.c,u,A.cl,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.ev0.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.ev1.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ev4.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ab0(),s=w.b,r=u.ab1(A.aV,A.eg,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.atZ("Names",""+w.c),1),A.ab,B.E(u.atZ("Fields",""+w.d),1),A.ab,B.E(u.atZ("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bm(A.bj,v,v,v,A.c,v,A.xx,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.JF(B.v(B.a([t,A.O,r,A.aP,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nu,v,v,v),new C.ev3(d),o),A.S,u.aUb(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ev3.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.es2.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.es1.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.euV.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.evt.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_8(A.d.dL(w.d,new C.evr(v),new C.evs(v)).hC(),w.f,null)},
$S:z+84}
C.evr.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evs.prototype={
$0(){return this.a},
$S:z+85}
C.epN.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hs,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bK6,w,w,w,w,new C.epL(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fdp,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLg,w,w,w,w,new C.epM(d),!1,w,w,w,w,w,D.fza,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dm,w,w,w),w,w,w))
return B.bl(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
C.epL.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.epM.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.epO.prototype={
$0(){var w=this.b,v=w.c,u=C.ep(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bn,A.a5,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bf,4280172719,2,v,0,0,"",D.cm,D.Rx,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdr().z,u)
v.r=u.a},
$S:0}
C.epP.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j0
$.j0=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j0
$.j0=k+1
m.push(new C.eK(""+1000*l+"_"+k,D.Rx,0.04,0.06,0.92,0.88,v,24,A.a5,A.bn,A.aD,4279310375,A.bg,u,D.bf,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cm,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lF(""+1000*p+"_"+o,r+n,"",D.q9,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.epT.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kv(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ep(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bn,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l1,0.35,0.55,0.62)
A.d.J(u.gdr().z,w)
u.r=w.a},
$S:0}
C.epK.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b1O(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ed(v.db,"marriage_sign_",""),4280640491,24,A.bn,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l1,s,u,t)
A.d.J(p.gdr().z,q)
A.d.bo(p.gdr().z,new C.epJ(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i2y(p)}},
$S:0}
C.epJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etK.prototype={
$0(){var w=this.a,v=this.b
w.b1O(v)
this.c.at=v.a
w.r=null},
$S:0}
C.evB.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.es5.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bo(r.z,new C.es4())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.es4.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eqv.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eqw.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tv()},
$S:8}
C.epH.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bn,A.a5,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,0.8,0.1,0.1),v=this.a
A.d.J(v.gdr().z,w)
v.r=w.a},
$S:0}
C.erx.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.epQ.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdr().z,v)
w.r=v.a},
$S:0}
C.epZ.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eq_.prototype={
$0(){var w=this.b.hC(),v=C.cD(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ep(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdr().z,f)
t.r=f.a},
$S:0}
C.eq0.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bf(w,new C.epY(v))
if(u>=0&&u<w.length-1){A.d.cC(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.epY.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqb.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bf(w,new C.epX(v))
if(u>0){A.d.cC(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.epX.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqe.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.eqf.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.eqg.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.eqh.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eqi.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eqj.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eqk.prototype={
$1(d){return d.length!==0},
$S:3}
C.eq1.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cD()
A.d.J(v,C.CK(w.gqk().c.j(0.18).l(),0.1,u,D.bf,0,2,1,0,0))
u=w.gdr().z
v=C.cD()
A.d.J(u,C.iU(A.bg,!1,w.gqk().d.l(),A.aD,18,A.bn,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.eq2.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cD()
A.d.J(u,C.CK(v.gqk().c.j(0.12).l(),0.1,t,D.bf,0,2,1,0,0.9))
t=v.gdr().z
u=C.cD()
w=C.bCc()
A.d.J(t,C.iU(A.L,!1,v.gqk().e.l(),A.aD,12,A.bn,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.eq3.prototype={
$0(){A.d.J(this.a.gdr().z,C.CK(1727914055,0.12,C.cD(),D.bf,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eq4.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdr().z,C.CK(w,0.08,C.cD(),D.bf,w,2,0.5,0.2,0.4))},
$S:0}
C.eq5.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cD()
A.d.J(v,C.CK(w.gqk().c.j(0.35).l(),0.12,u,D.Cz,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdr().z,C.iU(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.15,C.cD(),"Important note",0,D.qa,0.5,0.38,0.52))},
$S:0}
C.eq6.prototype={
$0(){var w=this.a
A.d.J(w.gdr().z,C.CK(4294507260,0.78,C.cD(),D.bf,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdr().z,C.iU(A.bg,!1,4279179050,A.aD,16,A.bn,A.a5,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCc()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.eq7.prototype={
$0(){var w=this.a
A.d.J(w.gdr().z,C.CK(4294897802,0.28,C.cD(),D.bf,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdr().z,C.iU(A.bg,!1,4285611794,A.aD,15,A.bn,A.a5,0.24,C.cD(),"Sticky note",0,D.aFJ,0.26,0.64,0.14))},
$S:0}
C.eq8.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdr().z,C.CK(4293060848,0.04,C.cD(),D.bf,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdr().z,C.CK(w,0.04,C.cD(),D.bf,w,2,0.55,0.1,0.48))},
$S:0}
C.eq9.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdr().z,C.iU(A.bg,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.HJ,0.42,0.06,0.18))
A.d.J(v.gdr().z,C.iU(A.bg,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ui,0.42,0.52,0.18))},
$S:0}
C.eqa.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdr().z,C.CK(858088427,0.62,C.cD(),D.bf,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdr().z,C.CK(856004201,0.62,C.cD(),D.bf,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdr().z,C.iU(A.bg,!1,w,A.aD,20,A.bn,A.H,0.1,C.cD(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.J(v.gdr().z,C.iU(A.bg,!1,w,A.aD,20,A.bn,A.H,0.1,C.cD(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.eqc.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdr().z,C.CK(4294967295,0.36,C.cD(),D.bf,w,2,0.24,0.38,0.28))
A.d.J(v.gdr().z,C.iU(A.L,!1,w,A.aD,14,A.bn,A.a5,0.12,C.cD(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.eqd.prototype={
$0(){return C.cdF(this.b,D.Ry,this.a.gqk())},
$S:0}
C.erw.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a6l.t(0,d),t=this.a
return t.b6M(d,v===d,A.aZ,this.c,new C.erv(t,u,d,w),u)},
$S:z+25}
C.erv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o5(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bCZ(r,new C.eru(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eru.prototype={
$0(){return this.a.d3(new C.ert(this.b,this.c))},
$S:0}
C.ert.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.epR.prototype={
$0(){var w,v=this.a,u=v.gqk(),t=C.rp(4294967295,null,0,0,null,C.cD(),D.mD,"","","",D.dd),s=this.b
C.cdF(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cy){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eqz.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i8B(p,q.d,s,new C.eqy(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tv(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqy.prototype={
$1(d){return this.bjt(d)},
bjt(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eqx(t,d))
w=2
return B.b(t.tv(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eqx.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.eqA.prototype={
$0(){return this.a.bHo()},
$S:0}
C.eqB.prototype={
$0(){return this.a.aPq("Class Presentation",!0)},
$S:0}
C.eqC.prototype={
$1(d){return this.a.bIk(d.b,this.b,d.a)},
$S:z+88}
C.erc.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bV,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.etn.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eE,x.w).w.f.d),new B.e0(new C.etm(this.a,this.b),null),null)},
$S:60}
C.etm.prototype={
$2(d,e){return B.oN(new C.etl(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:657}
C.etl.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.az:A.c,s=B.I(u?A.bG:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.D(A.ahr,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bK(!1,A.zE,v,v,!0,v,v,new C.etj(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cw(B.a([p.aS9(u,!0,!0,new C.etk(p,w.d))],q),e,D.bqH,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kI,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.etj.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.etk.prototype={
$0(){this.b.$1(new C.eth())
var w=this.a
if(w.c!=null)w.m(new C.eti())},
$S:0}
C.eth.prototype={
$0(){},
$S:0}
C.eti.prototype={
$0(){},
$S:0}
C.euW.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:94}
C.euX.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,new C.ayk(this.a,null),0.94+w*0.06,null,null),w)},
$S:437}
C.euY.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:94}
C.euZ.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,new C.bcg(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:437}
C.ev_.prototype={
$0(){return A.d.ck(this.a.d,0,C.VC(this.b))},
$S:0}
C.epW.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.az.j(0.72)],t):B.a([A.c.j(0.88),A.pu.j(0.75)],t)
r=B.I(A.b1.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b1.j(0.35+q),A.ce.j(0.18),A.K],t)
q=B.I(A.b1.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_j,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tV(A.fw,B.p(p,B.v(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:304}
C.er0.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.er1.prototype={
$1(d){return d.length!==0},
$S:3}
C.er2.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kr
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_Q:A.Bn}return w},
$S:707}
C.er5.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aw(0,A.k.E(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.az.j(0.78)],s):B.a([A.c.j(0.92),A.mS.j(0.82)],s)
r=m.e
q=A.d.gK(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.X(C.kv(v.w)?A.vE:A.pY,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Px(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Px(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Px(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Px(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Px(v.f)
r=k.bIi(n,A.d.gK(r),t)
return B.p(l,B.bw(j,new B.a7y(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.M2,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.o1,t?A.aA:A.bJ,l,l,l,l),l,l,l,new C.er3(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.er4(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.da,l,l,l,l)},
$S:93}
C.er4.prototype={
$0(){return this.a.aes(this.b)},
$S:0}
C.er3.prototype={
$0(){return this.a.AK(this.b,this.c)},
$S:0}
C.esw.prototype={
$0(){var w=this.a
w.b5q()
w.m(new C.esv())},
$S:0}
C.esv.prototype={
$0(){},
$S:0}
C.esx.prototype={
$1(d){return this.a.aix(this.b.a,d)},
$S:2}
C.esy.prototype={
$0(){this.a.d3(new C.esu(this.b))},
$S:0}
C.esu.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.N)?A.cv:A.N},
$S:0}
C.esz.prototype={
$0(){this.a.d3(new C.est(this.b))},
$S:0}
C.est.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.esA.prototype={
$0(){this.a.d3(new C.ess(this.b))},
$S:0}
C.ess.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mJ},
$S:0}
C.esB.prototype={
$0(){this.a.d3(new C.esr(this.b))},
$S:0}
C.esr.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.esC.prototype={
$0(){var w=this.a
w.d3(new C.esq(w,this.b))},
$S:0}
C.esq.prototype={
$0(){var w=this.b
return w.as=this.a.c2c(w.as)},
$S:0}
C.esD.prototype={
$0(){return this.a.d3(new C.esp(this.b))},
$S:0}
C.esp.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.esE.prototype={
$0(){return this.a.d3(new C.eso(this.b))},
$S:0}
C.eso.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.esh.prototype={
$0(){return this.a.a1E(this.b.a)},
$S:0}
C.esi.prototype={
$0(){this.a.a_b()
return null},
$S:0}
C.esj.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bV,x.w).w.a.a<900)w.aeL()
else w.m(new C.esg(w))},
$S:0}
C.esg.prototype={
$0(){return this.a.as=!0},
$S:0}
C.esk.prototype={
$0(){this.a.d3(new C.esf(this.b))},
$S:0}
C.esf.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.N)?A.cv:A.N},
$S:0}
C.esl.prototype={
$0(){return this.a.d3(new C.ese(this.b))},
$S:0}
C.ese.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.esm.prototype={
$0(){return this.a.d3(new C.esd(this.b))},
$S:0}
C.esd.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.esn.prototype={
$0(){return this.a.az0(null)},
$S:0}
C.erp.prototype={
$0(){this.a.Dr()
return null},
$S:0}
C.erq.prototype={
$0(){this.a.a9y()
return null},
$S:0}
C.ers.prototype={
$1(d){return this.bju(d)},
bju(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JJ(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bQ(A.az,null,new C.erk(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d3(new C.erl(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.erm(r))
s=s.c.I(x.q).f
s.T(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.ern(r))
s=s.c.I(x.q).f
s.T(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hna(q,new C.Ek(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d3(new C.ero(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agy(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:92}
C.erk.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e89],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bKd:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.erj(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dm,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bl(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
C.erj.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.erl.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.erm.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.ern.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.ero.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.err.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zz(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zz(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zz(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agy(r?t:s.db)
s=s==null?t:s.b
return B.a([D.edd,q,v,u,B.zz(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:139}
C.evH.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC9(w,v)}},
$S:0}
C.evI.prototype={
$0(){this.a.Dr()
return null},
$S:0}
C.esH.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bUs:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bK
if(s)v=A.c
else v=this.b?A.aS:A.bv
return new B.D(A.fz,B.aD(u,B.df(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eF,u,u,u,A.lN,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.esG(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:140}
C.esG.prototype={
$0(){var w=this.a
return w.m(new C.esF(w,this.b))},
$S:0}
C.esF.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.esI.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2G:E.awh
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbLI():t.gbHJ()
return B.hs(B.aD(u,B.p(u,D.amj,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gK(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.esJ.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i7R(v,w.a.c)},
$S:0}
C.eu5.prototype={
$0(){return this.b.v8(this.a.a)},
$S:0}
C.eu6.prototype={
$0(){return this.a.v8(D.mD)},
$S:0}
C.eu7.prototype={
$0(){return this.a.v8(D.HH)},
$S:0}
C.eui.prototype={
$0(){return this.a.v8(D.HI)},
$S:0}
C.eut.prototype={
$0(){return this.a.v8(D.HG)},
$S:0}
C.euE.prototype={
$0(){return this.a.q5("lab_report")},
$S:0}
C.euL.prototype={
$0(){return this.a.q5("rubric")},
$S:0}
C.euM.prototype={
$0(){return this.a.q5("minutes")},
$S:0}
C.euN.prototype={
$0(){return this.a.q5("agenda")},
$S:0}
C.euO.prototype={
$0(){return this.a.q5("timeline")},
$S:0}
C.euP.prototype={
$0(){return this.a.q5(this.b.a)},
$S:0}
C.eu8.prototype={
$0(){this.a.Vm()
return null},
$S:0}
C.eu9.prototype={
$0(){this.a.Vg()
return null},
$S:0}
C.eua.prototype={
$0(){return this.a.q5("table")},
$S:0}
C.eub.prototype={
$0(){return this.a.q5("sticky")},
$S:0}
C.euc.prototype={
$0(){return this.a.q5("divider")},
$S:0}
C.eud.prototype={
$0(){return this.a.q5("header_bar")},
$S:0}
C.eue.prototype={
$0(){return this.a.oZ(D.bf)},
$S:0}
C.euf.prototype={
$0(){return this.a.oZ(D.eL)},
$S:0}
C.eug.prototype={
$0(){return this.a.oZ(D.jH)},
$S:0}
C.euh.prototype={
$0(){return this.a.oZ(D.Cz)},
$S:0}
C.euj.prototype={
$0(){return this.a.oZ(D.jI)},
$S:0}
C.euk.prototype={
$0(){return this.a.oZ(D.l2)},
$S:0}
C.eul.prototype={
$0(){return this.a.oZ(D.fs)},
$S:0}
C.eum.prototype={
$0(){this.a.H6()
return null},
$S:0}
C.eun.prototype={
$0(){this.a.N1()
return null},
$S:0}
C.euo.prototype={
$0(){return this.a.q5("quote")},
$S:0}
C.eup.prototype={
$0(){return this.a.a7H()},
$S:0}
C.euq.prototype={
$0(){this.a.a_h()
return null},
$S:0}
C.eur.prototype={
$0(){var w=this.a
return w.m(new C.etW(w))},
$S:0}
C.etW.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eus.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o5(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eu3(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eu3.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.euu.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jP()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a6m.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b3
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a6m.t(0,q))u.push(B.ao(s,B.p(s,D.NM,A.f,s,s,D.DQ,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fz,B.aD(s,B.hs(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eu2(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.eu2.prototype={
$0(){this.a.a7Z(this.b)
return null},
$S:0}
C.euv.prototype={
$0(){this.a.a7Y(this.b)
return null},
$S:0}
C.euw.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hEC(d),p=this.a,o=B.m(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b3
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rp(4294967295,r,0,0,r,"preview_"+w,D.q9,"","","",D.dd)
C.hk7(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hlr(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.amS,A.f,r,r,D.DQ,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iV,B.aD(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cV,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eu1(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.eu1.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdr()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.o5(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d3(new C.etS(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etS.prototype={
$0(){return C.hk7(this.a,this.b.a)},
$S:0}
C.eu4.prototype={
bjv(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a6l.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o5(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjv(d,e)},
$S:z+91}
C.euQ.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("L<1,r>")
v=B.C(new B.L(d,new C.euS(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.euS.prototype={
$1(d){var w=this
return w.a.b6M(d,w.b===d,w.c,w.d,new C.euR(w.e,d),!D.a6l.t(0,d))},
$S:z+25}
C.euR.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eux.prototype={
$1(d){this.b.$2(d,new C.eu0(this.a,d,this.c))
return null},
$S:z+26}
C.eu0.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bCZ(u,new C.etR(v,this.c,w),w)},
$S:0}
C.etR.prototype={
$0(){return this.a.d3(new C.etP(this.b,this.c))},
$S:0}
C.etP.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.euy.prototype={
$1(d){this.b.$2(d,new C.eu_(this.a,d))
return null},
$S:z+26}
C.eu_.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fO3(u,new C.etQ(v,w),w)},
$S:0}
C.etQ.prototype={
$0(){var w=this.a
return w.d3(new C.etO(w,this.b))},
$S:0}
C.etO.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.euz.prototype={
$0(){var w=this.a
return w.m(new C.etZ(w))},
$S:0}
C.etZ.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.euA.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC9(w,v)}},
$S:0}
C.euB.prototype={
$0(){this.a.HS()
return null},
$S:0}
C.euC.prototype={
$0(){return this.a.a7H()},
$S:0}
C.euD.prototype={
$0(){var w=this.a,v=w.jP()
if(v!=null&&v.b===D.cQ)w.d3(new C.etY(v))},
$S:0}
C.etY.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.euF.prototype={
$0(){this.a.Dr()
return null},
$S:0}
C.euG.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.F5(v,!0)
return null},
$S:0}
C.euH.prototype={
$0(){this.a.d3(new C.etX(this.b))},
$S:0}
C.etX.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.N)?A.cv:A.N},
$S:0}
C.euI.prototype={
$0(){this.a.d3(new C.etV(this.b))},
$S:0}
C.etV.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.euJ.prototype={
$0(){this.a.d3(new C.etU(this.b))},
$S:0}
C.etU.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mJ},
$S:0}
C.euK.prototype={
$0(){this.a.d3(new C.etT(this.b))},
$S:0}
C.etT.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.equ.prototype={
$1(d){return this.bjs(d)},
bjs(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o5(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d3(new C.eqt(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:197}
C.eqt.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.evc.prototype={
$0(){var w=this.a
return w.d3(new C.evb(w,this.b))},
$S:0}
C.evb.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.evd.prototype={
$0(){var w=this.a
return w.d3(new C.eva(w,this.b))},
$S:0}
C.eva.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.erC.prototype={
$0(){return this.a.d3(new C.erB(this.b))},
$S:0}
C.erB.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erD.prototype={
$0(){return this.a.d3(new C.erA(this.b))},
$S:0}
C.erA.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.es9.prototype={
$1(d){var w=x.gh
w=B.C(new B.L(D.aoB,new C.es8(),w),w.k("ak.E"))
return w},
$S:z+94}
C.es8.prototype={
$1(d){var w=null
return B.zz(B.d(d.b,w,w,w,w,w,w,A.m5,w,w,w),48,d,x.fO)},
$S:z+95}
C.evp.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.evo.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kd()?q:new C.evm(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b3:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.cC:A.c
t=B.bZ(0,C.hlr(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aD(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nt,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ail,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.evn(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:77}
C.evn.prototype={
$0(){var w=this.a
return w.m(new C.evi(w,this.b))},
$S:0}
C.evi.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JS()},
$S:0}
C.evm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bQ(null,null,new C.evj(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.evk(q,s))
q.aQT()}else if(r==="del"){q=t.a
q.m(new C.evl(q,s))
q.aQ1()}else if(r==="up")t.a.b20(s,s-1)
else if(r==="down")t.a.b20(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evj.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLS,w,w,w,w,new C.eve(d),!1,w,w,w,w,w,w,w,D.fem,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLL,w,w,w,w,new C.evf(d),!1,w,w,w,w,w,w,w,A.wo,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bL2,w,w,w,w,new C.evg(d),!1,w,w,w,w,w,w,w,D.fmn,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bN3,w,w,w,w,new C.evh(d),!1,w,w,w,w,w,w,w,D.feb,w,w,w))
return B.bl(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
C.eve.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.evf.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.evg.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.evh.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.evk.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.evl.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.evq.prototype={
$0(){return this.a.a7H()},
$S:0}
C.eqU.prototype={
$0(){var w=this.a
w.b5q()
w.az0(null)},
$S:0}
C.eqT.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dl,24)],x.V),m=this.b
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
s=B.a([B.bw(s,B.c0(A.kB,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.be),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.L(r,new C.eqS(this.a,e.b,e.d,q),B.U(r).k("L<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.W,p,A.aa,A.f,s,new B.cy("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.be)},
$S:433}
C.eqS.prototype={
$1(d){var w=this
return w.a.bDF(d,w.b,w.c,w.d)},
$S:z+23}
C.eqH.prototype={
$0(){var w=this
if(w.b){w.a.Na(w.c)
return}if(w.d){w.a.a7F(w.c)
return}if(w.e){w.a.ag4(w.c)
return}if(w.f)w.a.b5W(w.c)},
$S:0}
C.eqI.prototype={
$0(){this.a.Na(this.b)
return null},
$S:0}
C.eqJ.prototype={
$0(){return this.a.a1E(this.b.a)},
$S:0}
C.eqK.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eqG(u,d,w.c,w.d))
v.Hx()
v.oe()
v.pi()},
$S:18}
C.eqG.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eqL.prototype={
$1(d){return this.a.aix(this.b.a,d)},
$S:2}
C.eqN.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fZZ(w))u.a.Na(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b5W(v)},
$S:0}
C.eqM.prototype={
$0(){return this.a.a1E(this.b.a)},
$S:0}
C.eqO.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eqF(w.b,d,w.c,w.d))
v.Hx()
v.oe()
v.pi()},
$S:18}
C.eqF.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eqP.prototype={
$1(d){var w=this.a
w.m(new C.eqE(this.b,d))
w.Hx()
w.oe()
w.pi()},
$S:206}
C.eqE.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eqQ.prototype={
$0(){var w=this.a
w.m(new C.eqD(this.b))
w.Hx()
w.oe()
w.pi()},
$S:0}
C.eqD.prototype={
$0(){this.a.r=C.hkX()},
$S:0}
C.eqR.prototype={
$0(){return this.a.a1E(this.b.a)},
$S:0}
C.esL.prototype={
$0(){var w=this.a
return w.m(new C.esK(w))},
$S:0}
C.esK.prototype={
$0(){return this.a.y=!1},
$S:0}
C.esM.prototype={
$1(d){return this.a.cB_(this.b.a,d)},
$S:2}
C.erQ.prototype={
$1(d){var w
this.a.d3(d)
w=this.b
if(w!=null)w.$0()},
$S:174}
C.erR.prototype={
$1(d){return this.a.$1(new C.erP(this.b,d))},
$S:6}
C.erP.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.erS.prototype={
$1(d){return this.a.$1(new C.erO(this.b,d))},
$S:6}
C.erO.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.erT.prototype={
$1(d){return this.a.$1(new C.erN(this.b,d))},
$S:6}
C.erN.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erU.prototype={
$1(d){return this.a.$1(new C.erM(this.b,d))},
$S:6}
C.erM.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.erV.prototype={
$1(d){return this.a.$1(new C.erL(this.b,d))},
$S:6}
C.erL.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.erW.prototype={
$1(d){return this.b.$1(new C.erK(this.a,this.c))},
$S:9}
C.erK.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.erX.prototype={
$1(d){return this.b.$1(new C.erJ(this.a,this.c))},
$S:9}
C.erJ.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.erY.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aD(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erI(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:428}
C.erI.prototype={
$0(){return this.a.$1(new C.erF(this.b,this.c))},
$S:0}
C.erF.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.erZ.prototype={
$1(d){return this.a.$1(new C.erH(this.b,d))},
$S:1705}
C.erH.prototype={
$0(){var w=this.b
return this.a.as=w.gK(w)},
$S:0}
C.es_.prototype={
$1(d){var w=null
return B.aD(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erG(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:428}
C.erG.prototype={
$0(){return this.a.$1(new C.erE(this.b,this.c))},
$S:0}
C.erE.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.es0.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).px()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eK()}v.a.arF()},
$S:0}
C.es3.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.aw(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b1,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.u2,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nd,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eE(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:136}
C.epD.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b1,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eE(B.v(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j2,A.L,p,p)],x.p),A.m,p,A.b9,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.Fd,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:136}
C.etI.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.anK,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.etG(d),w,w),B.bG(A.pf,new C.etH(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.etG.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.etH.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.d_X.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.aw(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ew.aw(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.aw(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gK(C.kv(j.a.c.w)?D.ub:N.nl),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gK(C.kv(j.a.c.w)?D.ub:N.nl).j(0.18+w*0.12),A.J,32+w*10),D.aaQ],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b_,0.9,A.x,k,0,B.a([A.d.gK(C.kv(j.a.c.w)?D.ub:N.nl).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gK(C.kv(j.a.c.w)?D.ub:N.nl).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kv(j.a.c.w)?D.ub:N.nl).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kv(m)?D.ub:N.nl
s=B.a([new B.ac(0,A.G,A.d.gK(C.kv(m)?D.ub:N.nl).j(0.45+w*0.2),A.cx,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kv(j.a.c.w)?A.vE:A.pY,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gK(C.kv(j.a.c.w)?D.ub:N.nl).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h0,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f6C,A.L,k,k),A.at,B.d(j.gcw0(),k,k,k,k,k,k,D.fb6,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gRV()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gK(C.kv(j.a.c.w)?D.ub:N.nl).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.N,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jy(A.y_,"Download PDF","pdf",A.d3,j.IL(0),!1,k))
p=j.a.c
if(!p.z||p.gRV()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jy(A.ks,"Transfer to "+C.hkZ(p==null?"":p),"transfer_hati",A.aV,j.IL(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.IL(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jy(D.bDt,"Rename presentation","rename",A.ce,n,!1,k),A.am,new C.Jy(A.ak_,"Duplicate","duplicate",A.b7,j.IL(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jy(A.e6,"Delete presentation","delete",A.ay,j.IL(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.IL(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.IL(n)
s.push(B.dU(B.dc(B.bK(!1,E.aQH,k,k,!0,k,k,new C.d_W(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.btL,k,k,k,k,k,A.k3,k,k)),n),new B.u(0,(1-p)*8)))
return B.ed(A.A,B.dc(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.bsV,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Va,new B.o(A.az,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:46}
C.d_W.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d0i.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d0j.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d_U.prototype={
$1(d){var w=this.a
return w.m(new C.d_Q(w))},
$S:22}
C.d_Q.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d_V.prototype={
$1(d){var w=this.a
return w.m(new C.d_P(w))},
$S:50}
C.d_P.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_T.prototype={
$0(){var w=this.a
return w.m(new C.d_R(w))},
$S:0}
C.d_R.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_S.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.ewn.prototype={
$0(){return $.bjO=!$.bjO},
$S:0}
C.ewd.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaU2())u.avu()},
$S:0}
C.ewm.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ewe.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ewf.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avu()},
$S:0}
C.ew9.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gK(w.a.c.r).r
w.d=0},
$S:0}
C.ewa.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ewb.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ewc.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.ewk.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.r,w,null)},
$S:1706}
C.ewl.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hV)return new B.cZ(e,!1,d,null)
w=this.a
return w.cu0(w.e,d,e)},
$S:438}
C.ewg.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fB((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.ewh.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.jZ((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.ewi.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fB(v.gp(0)*0.8)
w.jZ(v.gp(0)*0.35)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.ewj.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fB(-v.gp(0)*1.2)
return B.fs(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.ewo.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYq().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYq().x
t===$&&B.c()
return new C.b0v(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Iw(v.c,t,!0,new B.cy("cine"+u,x.W))},
$S:698}
C.ewq.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bV,x.w).w.a.a*0.55)w.avu()
else w.cit()},
$S:50}
C.ewp.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fEs.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:439}
C.fEB.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fEy(d),w,w),B.bK(!1,D.ftw,w,w,!0,w,w,new C.fEz(d,this.b,v),w,w),B.bG(A.aQZ,new C.fEA(d,v,this.c),w)],x.p),w,w,M.tk,new B.a7(320,w,t,w),w,w,w,w,D.fuY,w)},
$S:20}
C.fEy.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fEz.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.h_D(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fEA.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPq(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aOQ(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fEr.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cdI.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:631}
C.fEx.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fcq.prototype={
$1(d){return C.h_B(C.VC(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fNj.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:94}
C.fNk.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,D.fVK,0.94+w*0.06,null,null),w)},
$S:437}
C.fNl.prototype={
$1(d){var w=this
return new C.VE(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.evU.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.evT.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VF(u,this.b,w.gaNn(),v,null)},
$S:z+99}
C.evR.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evS.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evV.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evW.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evZ.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ew_.prototype={
$0(){var w=this.a
return w.m(new C.evY(w))},
$S:0}
C.evY.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ew0.prototype={
$0(){var w=this.a
return w.m(new C.evX(w))},
$S:0}
C.evX.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ew1.prototype={
$1(d){return this.a.bIj(d,this.b)},
$S:z+100}
C.evP.prototype={
$0(){var w=this.a
return w.m(new C.evO(w,this.b))},
$S:0}
C.evO.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ew2.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ew3.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ew4.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ew5.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ew6.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fJ(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.T(D.eU3)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.epx.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.epw())},
$S:0}
C.epw.prototype={
$0(){},
$S:0}
C.epy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fK()},
$S:8}
C.ept.prototype={
$1(d){return this.a.m(new C.eps())},
$S:2}
C.eps.prototype={
$0(){},
$S:0}
C.epu.prototype={
$1(d){return this.a.aYR()},
$S:2}
C.epv.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ew8.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pW(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ew7(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ew7.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fyM.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ev(new B.ki(this.c,new C.fyL(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:212}
C.fyL.prototype={
$3(d,e,f){return new C.Iw(e,!1,!1,new B.cy(e.a,x.W))},
$S:z+102}
C.fyN.prototype={
$1(d){var w=null
return B.oj(!1,B.av(new C.buj(this.a,this.b,w),w,w,w),w,x.z)},
$S:339}
C.fyR.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmC(),$async$$0)
case 3:w=4
return B.b(B.bN(A.n9,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmC(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gb8()
if(!(r instanceof B.pU))throw B.V("Could not draw the slide.")
u=r.lY(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fyS.prototype={
bk0(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.fY),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hO([J.eT(A.dD.gaM(r))],"image/png"))
t.toString
s=Am.fRt(t)
w=4
return B.b(new B.q_(s,"load",!1,x.ev).gK(0).cM(0,A.jy),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bk0(d)},
$S:1710}
C.fyO.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:148}
C.fyP.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fQ(0)},
$S:148}
C.fyQ.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f6J.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f39,A.L,w,w)},
$S:1711}
C.f6K.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.m1(A.bo,w,A.dQ,8,w,e===0?w:e,w),A.aq)},
$S:645}
C.edH.prototype={
$1(d){this.a.ZD()
return null},
$S:12}
C.edF.prototype={
$0(){return this.a.e=D.boZ},
$S:0}
C.edG.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cgg.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cgh.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLo.prototype
w.buB=w.q
w=C.aKS.prototype
w.bu3=w.q
w=C.aKD.prototype
w.btO=w.q
w=C.aKR.prototype
w.bu2=w.q
w=C.aLm.prototype
w.buz=w.q
w=C.aMJ.prototype
w.bw6=w.q
w=C.aJy.prototype
w.bsG=w.q
w=C.aLA.prototype
w.buN=w.q
w=C.aLB.prototype
w.buO=w.q
w=C.b2a.prototype
w.bpk=w.aC8})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i5F","an7",104)
v(C.aIx.prototype,"gc2y","Yx",0)
var r
u(r=C.ax7.prototype,"gcvm","cvn",38)
v(r,"gc3j","acM",0)
v(r=C.ax3.prototype,"gaXp","DU",3)
v(r,"gc3g","c3h",3)
v(r,"gavM","xE",0)
v(r,"gavN","Ip",0)
t(C,"i65","hCm",105)
v(C.aDb.prototype,"gc5Z","c6_",3)
s(C,"i6g",0,null,["$4$paper$photo$request$template"],["fFR"],106,0)
s(C,"i6f",0,null,["$5$doc$history$instruction$photo$template"],["bBs"],107,0)
v(r=C.aDu.prototype,"gc6G","II",0)
v(r,"gbHM","Wp",0)
v(r,"gc6J","adB",0)
v(r,"gc6I","Zp",0)
v(r,"gaYw","Eb",0)
v(C.aDy.prototype,"gc6O","Zr",0)
v(r=C.aEV.prototype,"gaYJ","Pt",0)
v(r,"gcnj","b26",3)
v(r,"gcwL","aAi",86)
v(r,"gbLy","a9C",0)
v(r,"gc7e","An",0)
v(r=C.aGQ.prototype,"gchc","a_M",0)
v(r,"gchk","a_P",0)
v(r,"gbAH","a84",0)
v(r,"gc7i","adN",0)
v(C.aGP.prototype,"gc7j","adO",0)
v(C.aAQ.prototype,"gbzG","a7S",0)
v(C.azd.prototype,"gc7k","ZC",0)
w(C,"i6t","i4m",12)
w(C,"i6r","i1j",12)
w(C,"i6s","i3m",12)
v(r=C.aDO.prototype,"gczV","czW",3)
v(r,"gcly","clz",3)
u(r,"gEh","aes",7)
v(r,"gbFo","aqP",3)
u(r,"gEi","b__",7)
v(r,"gc9s","ae9",0)
v(r,"gc8j","ae8",0)
v(r,"gcbC","aet",0)
v(r,"gbHJ","a9d",0)
v(r,"gccv","a_b",0)
v(r,"gccw","aeK",0)
v(r,"gcd2","aeR",0)
v(r,"gcbP","aew",0)
v(r,"gbLI","a9G",0)
v(r,"gaQS","aQT",3)
v(r,"gaQ0","aQ1",3)
v(r,"gaLI","aLJ",3)
v(r,"gaQ_","arF",3)
u(r,"gbzX","bzY",80)
v(r,"gazQ","b5a",3)
v(r,"gc8l","c8m",3)
v(r,"gbWM","bWN",3)
v(r,"gbKb","bKc",3)
v(r=C.aDR.prototype,"gcyM","cyN",3)
v(r,"gcyr","cys",3)
t(C,"i6u","i4D",2)
v(r=C.aDP.prototype,"gc7q","IN",0)
v(r,"gcpj","QU",0)
v(r,"gc7n","IM",0)
v(r,"gcBa","a2h",0)
v(r,"gcde","aeY",0)
v(C.aDN.prototype,"gc7r","aYR",3)
v(r=C.aDQ.prototype,"gbMt","a9Q",0)
u(r,"gc7o","c7p",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nR,C.Rt,C.bH_,C.bFm,C.cwo,C.cwm,C.bNg,C.b7W,C.cwn,C.bDX,C.cga,C.cg8,C.cg9,C.cg7,C.asi,C.cg6,C.bO9,C.oh,C.aEp,C.jo,C.nE,C.a7x,C.zl,C.le,C.ot,C.m3,C.zn,C.nI,C.a7F,C.aqG,C.b0w,C.ed6,C.lb,C.Et,C.eu,C.iZ,C.Ek,C.xs,C.eK,C.lF,C.i0,C.jG,C.a7G,C.aeO,C.b0x,C.b2a,C.a2t])
u(B.kk,[C.cEe,C.bYP,C.ftZ,C.cFK,C.cF6,C.fzu,C.dXS,C.dXR,C.edK,C.edJ,C.fAT,C.fdy,C.fdz,C.cc4,C.cc5,C.cc6,C.ei7,C.eQW,C.eQj,C.eQi,C.eRm,C.eQU,C.eQN,C.eR5,C.eRM,C.fkS,C.eXV,C.eXU,C.eYn,C.ed9,C.fEo,C.dTB,C.fKS,C.fBf,C.cdA,C.cdy,C.cdD,C.fBK,C.fBL,C.fBM,C.fBN,C.cdk,C.cdl,C.dFR,C.cdh,C.fBJ,C.f4h,C.dRN,C.cda,C.ecQ,C.fzj,C.et7,C.etw,C.ett,C.ets,C.etD,C.etC,C.ev7,C.ev6,C.etm,C.etl,C.epW,C.er5,C.eu4,C.evp,C.evo,C.eqT,C.es3,C.epD,C.d_X,C.ewk,C.ewl,C.ewg,C.ewh,C.ewi,C.ewj,C.ewo,C.cdI,C.evU,C.ew4,C.cgh])
u(B.hV,[C.cEf,C.cEg,C.bOa,C.frn,C.bYO,C.bYR,C.fHm,C.f5f,C.f56,C.f5m,C.fcr,C.fcs,C.fu_,C.ftY,C.fGR,C.fr3,C.fHI,C.cFA,C.cFF,C.cFH,C.cFD,C.cFI,C.cFB,C.cFJ,C.cFw,C.cFt,C.cFs,C.cFz,C.cF1,C.cF_,C.fyw,C.fyx,C.fgQ,C.fzv,C.fzB,C.ffT,C.c8n,C.fyu,C.fyv,C.ftl,C.ftm,C.fzA,C.fzw,C.fzy,C.fzz,C.fzx,C.fL9,C.ftp,C.ftq,C.ftt,C.ftu,C.ftx,C.fty,C.fMC,C.fdZ,C.fMN,C.eh1,C.eh2,C.eh3,C.egK,C.egW,C.egX,C.egZ,C.cc3,C.cc1,C.cc2,C.fza,C.fzc,C.fzb,C.fdA,C.fdB,C.fMQ,C.eic,C.eid,C.ei4,C.ei5,C.ei8,C.ei9,C.fN5,C.eRN,C.eRc,C.eQX,C.eR9,C.eQe,C.eQf,C.eQg,C.eQk,C.eQl,C.eRC,C.eRJ,C.eRL,C.eRl,C.eRn,C.eRr,C.eRs,C.eRt,C.eRx,C.eRo,C.eRp,C.eQw,C.eQx,C.eQy,C.eQz,C.eQA,C.eQB,C.eQC,C.eQD,C.eQE,C.ePS,C.ePT,C.ePU,C.ePV,C.ePX,C.ePY,C.eQq,C.eQr,C.eQs,C.eQt,C.eQu,C.eQ1,C.eQ2,C.eQ3,C.eQ4,C.eQM,C.eR4,C.fwz,C.fwy,C.cdr,C.fkR,C.fEk,C.fEd,C.fEg,C.fCd,C.fCe,C.fCf,C.fwG,C.fwF,C.fwE,C.fwC,C.fdv,C.fdw,C.fdx,C.fNh,C.eXX,C.eXY,C.eXR,C.eXL,C.eYg,C.eYh,C.eYj,C.eYk,C.eYf,C.fNg,C.eXC,C.fk6,C.ed8,C.fEm,C.fEn,C.fEp,C.fEi,C.fEj,C.fMu,C.did,C.dij,C.ed7,C.f9Z,C.fa0,C.fa_,C.f9Y,C.fxK,C.fxM,C.fbZ,C.fDP,C.fDQ,C.fDR,C.fE1,C.fE6,C.fE7,C.fE8,C.fE9,C.fEa,C.fEb,C.fEc,C.fDS,C.fDT,C.fDU,C.fDV,C.fDW,C.fDX,C.fDY,C.fDZ,C.fE_,C.fE0,C.fE2,C.fE3,C.fE4,C.fE5,C.fvA,C.fjF,C.fjE,C.fEv,C.dTC,C.dTA,C.eWM,C.c7Z,C.c80,C.fKU,C.d7w,C.d7y,C.fKT,C.fKR,C.fNf,C.fBb,C.d76,C.ftB,C.ftC,C.cdp,C.cdq,C.cdo,C.cde,C.cdf,C.cdb,C.cdc,C.cdd,C.cdG,C.cdB,C.cdw,C.cdx,C.cdz,C.cdC,C.cdE,C.fBO,C.cdj,C.cdm,C.cdn,C.cdt,C.cdu,C.fEC,C.fDJ,C.cdi,C.cdg,C.fBI,C.fmc,C.cd9,C.eUp,C.fp4,C.evL,C.esa,C.esb,C.etL,C.etz,C.etA,C.ery,C.evw,C.evx,C.evy,C.eqX,C.ete,C.etg,C.esR,C.esO,C.es6,C.es7,C.esY,C.eqZ,C.et9,C.eta,C.et8,C.etc,C.etb,C.etu,C.etv,C.etx,C.etq,C.erh,C.ere,C.etE,C.er6,C.evv,C.epF,C.er9,C.er8,C.eqn,C.eqs,C.eqq,C.eqo,C.evD,C.evE,C.evF,C.evC,C.ev9,C.ev8,C.ev2,C.ev4,C.euV,C.evt,C.evr,C.epN,C.epJ,C.es4,C.eqw,C.epY,C.epX,C.eqj,C.eqk,C.erw,C.eqy,C.eqC,C.etn,C.euW,C.euX,C.euY,C.euZ,C.er0,C.er1,C.er2,C.esx,C.ers,C.erk,C.err,C.esH,C.esI,C.euu,C.euw,C.euQ,C.euS,C.eux,C.euy,C.equ,C.es9,C.es8,C.evj,C.eqS,C.eqK,C.eqL,C.eqO,C.eqP,C.esM,C.erQ,C.erR,C.erS,C.erT,C.erU,C.erV,C.erW,C.erX,C.erY,C.erZ,C.es_,C.etI,C.d_U,C.d_V,C.ewq,C.fEs,C.fEB,C.fEr,C.fEx,C.fcq,C.fNj,C.fNk,C.fNl,C.evT,C.ew1,C.epy,C.ept,C.epu,C.fyM,C.fyL,C.fyN,C.fyS,C.fyO,C.fyP,C.f6J,C.f6K,C.edH,C.cgg])
u(B.j8,[C.cEh,C.f5b,C.f5g,C.f5h,C.f5c,C.f5d,C.f5e,C.f54,C.f55,C.f57,C.f58,C.f5l,C.f5k,C.f5a,C.f59,C.f5i,C.f5j,C.f5o,C.f5p,C.f5n,C.cFC,C.cFG,C.cFE,C.cFu,C.cFv,C.cFx,C.cFq,C.cFr,C.cFy,C.cFp,C.cFo,C.cFn,C.cER,C.cEQ,C.cET,C.cF0,C.cEU,C.cES,C.cEW,C.cEX,C.cEY,C.cEV,C.cEZ,C.cF2,C.cF3,C.cF4,C.cF5,C.ftj,C.ftk,C.fth,C.fti,C.e8v,C.e8t,C.e8u,C.e8w,C.e8x,C.dXQ,C.ftn,C.fto,C.ftr,C.fts,C.ftv,C.ftw,C.edI,C.fBi,C.fBh,C.eh0,C.eh_,C.egE,C.egA,C.egL,C.egM,C.egN,C.egG,C.egH,C.egI,C.egJ,C.egF,C.egC,C.egD,C.egT,C.egU,C.egS,C.egV,C.egR,C.egQ,C.egP,C.egY,C.egO,C.egB,C.eib,C.ei_,C.ei0,C.ei6,C.ei1,C.ei3,C.ei2,C.eia,C.eQF,C.eR2,C.eQo,C.eQp,C.eQm,C.eQn,C.eR8,C.eR7,C.eR6,C.eRb,C.eRa,C.eQd,C.eQh,C.eQc,C.eQb,C.eQ8,C.eQa,C.eQ9,C.eRK,C.eRD,C.eRB,C.eRE,C.eRA,C.eRF,C.eRz,C.eRG,C.eRH,C.eRI,C.eRy,C.eRk,C.eRf,C.eRq,C.eRj,C.eRu,C.eRi,C.eRv,C.eRh,C.eRw,C.eRg,C.eR_,C.eQZ,C.eR0,C.eQY,C.eR1,C.eQS,C.eQR,C.eQT,C.eQQ,C.eQP,C.eQO,C.ePW,C.ePR,C.eQ5,C.eQ0,C.eQ6,C.eQ_,C.eQ7,C.ePZ,C.eQV,C.eQJ,C.eQI,C.eQK,C.eQH,C.eQL,C.eQG,C.eR3,C.eRe,C.eRd,C.eQv,C.fEf,C.fEh,C.fEl,C.fwD,C.fz3,C.fz1,C.fz2,C.eXZ,C.eY_,C.eXW,C.eXQ,C.eXP,C.eXS,C.eXT,C.eXF,C.eXG,C.eXI,C.eXJ,C.eXK,C.eXH,C.eXM,C.eYc,C.eYd,C.eYb,C.eYe,C.eYa,C.eY9,C.eY8,C.eYi,C.eY7,C.eY6,C.eY5,C.eYl,C.eY4,C.eYm,C.eY3,C.eY2,C.eXN,C.eXO,C.eY1,C.eY0,C.eXy,C.eXz,C.eXA,C.eXB,C.eXx,C.eXD,C.eXE,C.dic,C.die,C.dih,C.dii,C.dig,C.dif,C.fxL,C.fvB,C.c8_,C.c81,C.d7p,C.d7u,C.d7v,C.d7t,C.d7s,C.d7x,C.d7r,C.d7q,C.d7z,C.fKQ,C.deb,C.dec,C.ded,C.ftz,C.ftA,C.cdH,C.epz,C.epA,C.epB,C.epC,C.fma,C.fmb,C.dRP,C.dRO,C.d4l,C.d4k,C.evN,C.evM,C.esc,C.euT,C.evJ,C.etJ,C.evz,C.evA,C.evK,C.esS,C.eqV,C.eqW,C.etf,C.esQ,C.esN,C.esP,C.esT,C.esU,C.esV,C.esW,C.esX,C.esZ,C.er_,C.et1,C.et2,C.et3,C.et4,C.et5,C.et6,C.et0,C.etd,C.etr,C.etp,C.ety,C.et_,C.erf,C.erg,C.eri,C.etB,C.etF,C.epU,C.erd,C.erb,C.etN,C.er7,C.etM,C.eqY,C.erz,C.evu,C.euU,C.epV,C.epS,C.epI,C.epE,C.epG,C.era,C.eqm,C.eqr,C.eqp,C.eql,C.eto,C.evG,C.ev5,C.ev0,C.ev1,C.ev3,C.es2,C.es1,C.evs,C.epL,C.epM,C.epO,C.epP,C.epT,C.epK,C.etK,C.evB,C.es5,C.eqv,C.epH,C.erx,C.epQ,C.epZ,C.eq_,C.eq0,C.eqb,C.eqe,C.eqf,C.eqg,C.eqh,C.eqi,C.eq1,C.eq2,C.eq3,C.eq4,C.eq5,C.eq6,C.eq7,C.eq8,C.eq9,C.eqa,C.eqc,C.eqd,C.erv,C.eru,C.ert,C.epR,C.eqz,C.eqx,C.eqA,C.eqB,C.erc,C.etj,C.etk,C.eth,C.eti,C.ev_,C.er4,C.er3,C.esw,C.esv,C.esy,C.esu,C.esz,C.est,C.esA,C.ess,C.esB,C.esr,C.esC,C.esq,C.esD,C.esp,C.esE,C.eso,C.esh,C.esi,C.esj,C.esg,C.esk,C.esf,C.esl,C.ese,C.esm,C.esd,C.esn,C.erp,C.erq,C.erj,C.erl,C.erm,C.ern,C.ero,C.evH,C.evI,C.esG,C.esF,C.esJ,C.eu5,C.eu6,C.eu7,C.eui,C.eut,C.euE,C.euL,C.euM,C.euN,C.euO,C.euP,C.eu8,C.eu9,C.eua,C.eub,C.euc,C.eud,C.eue,C.euf,C.eug,C.euh,C.euj,C.euk,C.eul,C.eum,C.eun,C.euo,C.eup,C.euq,C.eur,C.etW,C.eus,C.eu3,C.eu2,C.euv,C.eu1,C.etS,C.euR,C.eu0,C.etR,C.etP,C.eu_,C.etQ,C.etO,C.euz,C.etZ,C.euA,C.euB,C.euC,C.euD,C.etY,C.euF,C.euG,C.euH,C.etX,C.euI,C.etV,C.euJ,C.etU,C.euK,C.etT,C.eqt,C.evc,C.evb,C.evd,C.eva,C.erC,C.erB,C.erD,C.erA,C.evn,C.evi,C.evm,C.eve,C.evf,C.evg,C.evh,C.evk,C.evl,C.evq,C.eqU,C.eqH,C.eqI,C.eqJ,C.eqG,C.eqN,C.eqM,C.eqF,C.eqE,C.eqQ,C.eqD,C.eqR,C.esL,C.esK,C.erP,C.erO,C.erN,C.erM,C.erL,C.erK,C.erJ,C.erI,C.erF,C.erH,C.erG,C.erE,C.es0,C.etG,C.etH,C.d_W,C.d0i,C.d0j,C.d_Q,C.d_P,C.d_T,C.d_R,C.d_S,C.ewn,C.ewd,C.ewm,C.ewe,C.ewf,C.ew9,C.ewa,C.ewb,C.ewc,C.ewp,C.fEy,C.fEz,C.fEA,C.evQ,C.evR,C.evS,C.evV,C.evW,C.evZ,C.ew_,C.evY,C.ew0,C.evX,C.evP,C.evO,C.ew2,C.ew3,C.ew5,C.ew6,C.epx,C.epw,C.eps,C.epv,C.ew8,C.ew7,C.fyR,C.fyQ,C.edF,C.edG])
t(C.aQK,B.J)
u(B.m9,[C.a3s,C.awA,C.avh,C.xq,C.xt,C.kS,C.td,C.Bj,C.ro,C.vU,C.arf,C.Ix,C.aqF,C.uB,C.mv,C.hz,C.a8h])
u(C.bNg,[C.cwp,C.bNh])
u(C.cga,[C.cge,C.ash])
t(C.cgd,C.cg8)
t(C.cgc,C.cg7)
t(C.cgf,C.cgc)
t(C.cgb,C.cg9)
t(C.cg5,C.cg6)
t(C.b9u,B.oL)
t(C.cqd,B.auK)
t(C.a83,B.xd)
t(C.aVc,B.dG)
t(C.aA8,B.atC)
u(B.ag,[C.a0v,C.Yf,C.Yd,C.apQ,C.Vq,C.Vt,C.a_w,C.a02,C.a01,C.aDn,C.Zo,C.Ne,C.YX,C.Zh,C.anQ,C.aIe,C.UF,C.ayY,C.a7n,C.NG,C.ayk,C.Jy,C.a_8,C.VE,C.VF,C.aDM,C.aqK,C.a7o])
u(B.ah,[C.aIx,C.ax7,C.ax3,C.aDb,C.aDu,C.aDy,C.aEV,C.aGQ,C.aGP,C.aLo,C.aAQ,C.aKS,C.azd,C.bfn,C.aKD,C.aMJ,C.aKR,C.bdg,C.aLm,C.aLA,C.aJy,C.bc1,C.aLB,C.aDP,C.bjN,C.aDN,C.aDQ,C.bjw])
u(B.au,[C.ax5,C.acV,C.acj,C.biy,C.acY,C.aeE,C.b08,C.brV,C.b0s,C.bl6,C.bqu,C.aZm,C.b0v,C.ad0,C.adi,C.b0t,C.Iw,C.aZp,C.bcg,C.Pl,C.JF,C.bgV,C.bgU,C.buj])
u(B.H1,[C.bbJ,C.btk,C.aIR,C.beq,C.bqS])
u(B.mL,[C.bbI,C.b8d,C.bqP,C.bbf,C.beO,C.bh0,C.bdU,C.beL,C.bes,C.bnm,C.b9m,C.b9_,C.bug,C.brh,C.bqq,C.bdN,C.b0q,C.bpn,C.bqn])
t(C.bjt,C.aLo)
t(C.biQ,C.aKS)
t(C.biA,C.aKD)
t(C.btN,C.aMJ)
t(C.biN,C.aKR)
t(C.bjr,C.aLm)
t(C.bwB,C.aLA)
t(C.aDO,C.bwB)
t(C.bc2,C.aJy)
t(C.aDR,C.aLB)
t(C.bu7,B.iR)
t(C.a8g,B.kr)
t(C.cgi,C.b2a)
t(C.ahS,C.a2t)
u(B.Xg,[C.aQA,C.aS4])
t(C.awc,C.aQA)
w(C.aLo,B.c9)
w(C.aKS,B.c9)
w(C.aKD,B.c9)
w(C.aKR,B.c9)
w(C.aLm,B.c9)
w(C.aMJ,B.c9)
w(C.aJy,B.eR)
w(C.aLA,B.c9)
v(C.bwB,B.ey)
w(C.aLB,B.c9)})()
B.jY(b.typeUniverse,JSON.parse('{"aRj":{"hI":["aRj"]},"nR":{"aRj":[],"hI":["aRj"]},"aQK":{"J":["Rt"],"J.E":"Rt"},"b9u":{"oL":[]},"a83":{"xd":[],"oa":[]},"aVc":{"dG":[],"cA":[],"r":[]},"aA8":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a0v":{"ag":[],"r":[]},"aIx":{"ah":["a0v"]},"Yf":{"ag":[],"r":[]},"Yd":{"ag":[],"r":[]},"ax7":{"ah":["Yf"]},"ax3":{"ah":["Yd"]},"ax5":{"au":[],"r":[]},"apQ":{"ag":[],"r":[]},"aDb":{"ah":["apQ"]},"acV":{"au":[],"r":[]},"acj":{"au":[],"r":[]},"acY":{"au":[],"r":[]},"aeE":{"au":[],"r":[]},"biy":{"au":[],"r":[]},"Vq":{"ag":[],"r":[]},"aDu":{"ah":["Vq"]},"b08":{"au":[],"r":[]},"bbJ":{"aB":[]},"bbI":{"aB":[]},"btk":{"aB":[]},"b8d":{"aB":[]},"bqP":{"aB":[]},"Vt":{"ag":[],"r":[]},"aDy":{"ah":["Vt"]},"bbf":{"aB":[]},"a_w":{"ag":[],"r":[]},"aEV":{"ah":["a_w"]},"beO":{"aB":[]},"a02":{"ag":[],"r":[]},"a01":{"ag":[],"r":[]},"aDn":{"ag":[],"r":[]},"Zo":{"ag":[],"r":[]},"aGQ":{"ah":["a02"]},"aGP":{"ah":["a01"]},"bjt":{"ah":["aDn"]},"bh0":{"aB":[]},"aAQ":{"ah":["Zo"]},"brV":{"au":[],"r":[]},"b0s":{"au":[],"r":[]},"bl6":{"au":[],"r":[]},"Ne":{"ag":[],"r":[]},"YX":{"ag":[],"r":[]},"biQ":{"ah":["Ne"]},"bqu":{"au":[],"r":[]},"bdU":{"aB":[]},"aZm":{"au":[],"r":[]},"azd":{"ah":["YX"]},"Zh":{"ag":[],"r":[]},"bfn":{"ah":["Zh"]},"beL":{"aB":[]},"bes":{"aB":[]},"bnm":{"aB":[]},"b9m":{"aB":[]},"b9_":{"aB":[]},"bug":{"aB":[]},"brh":{"aB":[]},"bqq":{"aB":[]},"bdN":{"aB":[]},"anQ":{"ag":[],"r":[]},"b0v":{"au":[],"r":[]},"biA":{"ah":["anQ"]},"ad0":{"au":[],"r":[]},"adi":{"au":[],"r":[]},"aIe":{"ag":[],"r":[]},"UF":{"ag":[],"r":[]},"Iw":{"au":[],"r":[]},"ayY":{"ag":[],"r":[]},"a7n":{"ag":[],"r":[]},"b0t":{"au":[],"r":[]},"b0q":{"aB":[]},"btN":{"ah":["aIe"]},"aIR":{"aB":[]},"biN":{"ah":["UF"]},"bdg":{"ah":["ayY"]},"bjr":{"ah":["a7n"]},"aZp":{"au":[],"r":[]},"beq":{"aB":[]},"bpn":{"aB":[]},"bqn":{"aB":[]},"ayk":{"ag":[],"r":[]},"Jy":{"ag":[],"r":[]},"a_8":{"ag":[],"r":[]},"JF":{"au":[],"r":[]},"NG":{"ag":[],"r":[]},"aDO":{"ah":["NG"],"ey":[]},"bc2":{"ah":["ayk"]},"bcg":{"au":[],"r":[]},"bc1":{"ah":["Jy"]},"Pl":{"au":[],"r":[]},"aDR":{"ah":["a_8"]},"bqS":{"aB":[]},"bgV":{"au":[],"r":[]},"bgU":{"au":[],"r":[]},"VE":{"ag":[],"r":[]},"VF":{"ag":[],"r":[]},"aDM":{"ag":[],"r":[]},"aqK":{"ag":[],"r":[]},"aDP":{"ah":["VE"]},"bjN":{"ah":["VF"]},"aDN":{"ah":["aDM"]},"bu7":{"iR":[]},"aDQ":{"ah":["aqK"]},"buj":{"au":[],"r":[]},"a7o":{"ag":[],"r":[]},"bjw":{"ah":["a7o"]},"a8g":{"kr":["fr<eP>"],"ke":["fr<eP>"]},"ahS":{"a2t":[]},"aQA":{"j2":[],"ff":[]},"awc":{"j2":[],"ff":[]},"aS4":{"j2":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Ls"),U:w("vp<pY>"),bz:w("w"),M:w("eI<n>"),bo:w("jB"),g7:w("LX"),gc:w("az<iu?>"),bq:w("az<~>"),cc:w("M9"),fS:w("DL"),an:w("HI"),bm:w("O<Rt>"),X:w("O<a2B>"),f3:w("O<aRj>"),aK:w("O<n6>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lx>"),d5:w("O<az<bv<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<az<dD>>"),fG:w("O<az<~>>"),aF:w("O<nc>"),cd:w("O<ai<jo>>"),ez:w("O<a4<n,aC>>"),d:w("O<a4<n,@>>"),B:w("O<mr>"),h:w("O<jo>"),gE:w("O<zl>"),k:w("O<oh>"),g:w("O<lF>"),D:w("O<i0>"),u:w("O<eK>"),m:w("O<uB>"),i:w("O<hz>"),aC:w("O<a7F>"),o:w("O<zn>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<hp>"),cR:w("O<iP>"),J:w("O<jf>"),gx:w("O<p5<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(M,M)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cR>"),s:w("O<n>"),aS:w("O<iR>"),p:w("O<r>"),eR:w("O<ff>"),fT:w("O<b7W>"),bx:w("O<aEp>"),gz:w("O<aeO>"),x:w("O<M>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<oh>"),R:w("ai<i0>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<H,+icon3d,picture(n?,n?)>"),bR:w("L<hz,r>"),eC:w("L<nI,n>"),cT:w("L<jG,D>"),dv:w("L<n,n>"),f0:w("L<n,r>"),gN:w("L<H,pC>"),gh:w("L<mv,jq<mv>>"),w:w("iA"),ei:w("iu"),g2:w("re"),fB:w("Ek"),b6:w("zl"),gX:w("a7x"),dt:w("le"),ea:w("oh"),bt:w("lF"),I:w("i0"),F:w("eK"),fO:w("mv"),ff:w("uB"),fP:w("hz"),Q:w("vU"),dO:w("aqG"),a:w("cr"),C:w("aC"),dw:w("asi"),di:w("a8h"),Y:w("eP"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EP"),dB:w("dz<u>"),bJ:w("dz<n>"),_:w("e_<n>"),N:w("n"),fw:w("pY"),bO:w("as"),K:w("bp<u>"),b:w("bp<M>"),E:w("dD"),W:w("cy<n>"),ac:w("cy<H>"),ex:w("ki<lF>"),cI:w("ki<n>"),cl:w("ki<M>"),b4:w("a1<lb>"),a8:w("a1<m3>"),fR:w("a1<+(n,n)>"),co:w("e9<u>"),l:w("r"),b2:w("bX<~>"),ev:w("q_<dX>"),dT:w("bg<~>"),cQ:w("aA8"),q:w("mZ"),y:w("R"),gR:w("M"),z:w("@"),S:w("H"),at:w("ba?"),gw:w("ai<a4<n,@>>?"),aT:w("ai<i0>?"),c:w("ai<@>?"),aP:w("iu?"),af:w("i0?"),go:w("b0x?"),a6:w("a7G?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVR=new B.bI(A.ax,null,null,H.anu,null)
D.aW0=new B.da(0,-0.15)
D.aW2=new B.da(0.62,0)
D.aW5=new B.da(-0.35,-0.45)
D.aWf=new B.da(0.9,-0.85)
D.aXy=new B.bq(H.Sd,H.Sd,A.he,A.he)
D.aXM=new B.ay(A.b7,1,A.q,-1)
D.bgi=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aXY=new B.ay(D.bgi,1,A.q,-1)
D.aY9=new B.ay(A.aE,1.5,A.q,-1)
D.aYe=new B.ay(A.b7,1.6,A.q,-1)
D.aYu=new B.ay(A.aE,1.4,A.q,-1)
D.aZR=new B.o(null,null,null,null,null,L.Gs,A.a6)
D.bVD=new B.a8(A.a3,A.a7,A.x,G.a2G,null,null)
D.aZZ=new B.o(null,null,null,null,null,D.bVD,A.a6)
D.aaG=new B.o(A.az,null,null,A.rY,null,null,A.n)
D.bam=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bgf=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cSR=w([D.bam,D.bgf],x.O)
D.eeC=new B.bT(A.A,0.5,A.x,null,0,D.cSR,null,null)
D.b_h=new B.o(null,null,null,null,null,D.eeC,A.a6)
D.WE=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aYK=new B.bO(P.uW,A.Y,A.Y,A.Y)
D.b_j=new B.o(D.WE,null,D.aYK,null,null,null,A.n)
D.bXo=new B.a8(A.a3,A.a7,A.x,A.PU,null,null)
D.b_q=new B.o(null,null,null,null,null,D.bXo,A.a6)
D.acd=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b_t=new B.o(D.acd,null,null,A.qy,null,null,A.n)
D.b_x=new B.o(A.kk,null,null,null,null,null,A.a6)
D.b_A=new B.o(Z.adh,null,H.aal,A.m9,null,null,A.n)
D.DQ=new B.o(A.dN,null,null,null,null,null,A.a6)
D.b_G=new B.o(null,null,null,null,null,E.vU,A.a6)
D.cXI=w([E.aea,A.bY],x.O)
D.bX_=new B.a8(A.b_,A.b4,A.x,D.cXI,null,null)
D.b_K=new B.o(null,null,null,A.m9,null,D.bX_,A.n)
D.d79=w([A.bj,A.dN,A.jS],x.O)
D.a0Q=new B.a8(A.ax,A.aC,A.x,D.d79,null,null)
D.b_X=new B.o(null,null,null,null,null,D.a0Q,A.n)
D.b_Y=new B.o(D.acd,null,null,A.kI,null,null,A.n)
D.cnz=w([A.di,A.bj],x.O)
D.bWR=new B.a8(A.ax,A.aC,A.x,D.cnz,null,null)
D.b01=new B.o(null,null,null,null,null,D.bWR,A.n)
D.b0b=new B.o(null,null,null,null,null,G.u4,A.a6)
D.b0u=new B.o(A.aec,null,null,null,null,null,A.a6)
D.bba=new B.w(0.5647058823529412,0,0,0,A.t)
D.aaQ=new B.ac(0,A.G,D.bba,A.RJ,28)
D.b2B=new B.aVp()
D.b39=new C.cqd()
D.b3l=new C.b9u()
D.abl=new B.cp(A.A,null,null,A.a0F,null)
D.b5S=new B.fj(null,null,null,null,null,E.n0,null,null,null,null)
D.b3S=new B.cp(A.A,null,null,D.b5S,null)
D.bGq=new B.ae(A.dW,28,A.c,null,null,null)
D.b4l=new B.cp(A.A,null,null,D.bGq,null)
D.b5P=new B.fj(2,null,null,null,null,A.bZ,null,null,null,null)
D.b4H=new B.cp(A.A,null,null,D.b5P,null)
D.bGL=new B.ae(L.Ny,40,A.bD,null,null,null)
D.b4I=new B.cp(A.A,null,null,D.bGL,null)
D.b6I=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b6V=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b7i=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b7o=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b7U=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b89=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b8a=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Kx=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b8A=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b8G=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.acw=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b9q=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bab=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.acK=new B.w(1,1,1,0.9725490196078431,A.t)
D.bav=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.baG=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.baJ=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.baV=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bbf=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bcC=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Wo=new B.w(0.8509803921568627,0,0,0,A.t)
D.bcK=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bcR=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.adz=new B.w(0.6,0,0,0,A.t)
D.adB=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bed=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.ti=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.beD=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bf2=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bfq=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aen=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.WO=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AC=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.L4=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.ja=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aeM=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.WY=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.biL=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bje=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bjs=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Xi=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bkz=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xk=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bl3=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.blm=new B.hH(A.b3,!0,null,null)
D.f9n=new B.G(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fz2=new B.x("Bio link",null,D.f9n,null,null,null,null,null,null,null,null,null)
D.b4B=new B.cp(A.A,null,null,D.fz2,null)
D.blC=new B.hH(A.VM,!0,D.b4B,null)
D.Ls=new C.a3s(0,"none")
D.afR=new C.a3s(1,"deflate")
D.afS=new C.a3s(2,"bzip2")
D.bmy=new B.km(0.165,0.84,0.44,1)
D.cY1=w([A.cg,A.dQ,A.aE],x.O)
D.bW7=new B.a8(A.ax,A.aC,A.x,D.cY1,null,null)
D.aZW=new B.o(null,null,null,null,null,D.bW7,A.n)
D.bPB=new B.ae(A.eS,null,A.ad,null,null,null)
D.b5c=new B.cp(A.A,null,null,D.bPB,null)
D.bn4=new B.kP(D.aZW,A.be,D.b5c,null)
D.bj0=new B.w(0.058823529411764705,1,1,1,A.t)
D.d0a=w([A.bG,A.qJ,A.qJ,D.bj0],x.O)
D.cEK=w([0,0.32,0.7,1],x.x)
D.bWG=new B.a8(A.ax,A.aC,A.x,D.d0a,D.cEK,null)
D.aZL=new B.o(null,null,null,null,null,D.bWG,A.n)
D.bna=new B.kP(D.aZL,A.be,null,null)
D.boc=new B.mj(1,1,null,null,null,A.bo,null)
D.bof=new B.mj(1,null,null,null,null,D.WY,null)
D.boJ=new B.ba(125e4)
D.boP=new B.ba(17e4)
D.boZ=new B.ba(35964e8)
D.bp4=new B.ba(55e4)
D.bp8=new B.ba(68e4)
D.bpz=new B.ic(0,0,0,5)
D.bpQ=new B.Q(0,16,16,0)
D.bq_=new B.Q(0,36,0,36)
D.bq6=new B.Q(0,54,0,0)
D.bqd=new B.Q(10,0,10,3)
D.bqo=new B.ic(10,16,10,10)
D.bqA=new B.Q(10,6,4,6)
D.bqD=new B.Q(10,8,10,6)
D.agP=new B.Q(11,8,11,11)
D.bqH=new B.Q(12,0,12,24)
D.bqT=new B.Q(12,12,12,4)
D.bqW=new B.Q(12,12,8,12)
D.bra=new B.Q(12,8,8,12)
D.brx=new B.Q(14,14,14,0)
D.brC=new B.Q(14,14,14,90)
D.brV=new B.Q(16,10,16,16)
D.brW=new B.Q(16,10,16,20)
D.ahE=new B.Q(16,6,16,28)
D.bsu=new B.Q(18,0,18,10)
D.bsw=new B.Q(18,0,18,30)
D.bsy=new B.Q(18,10,18,12)
D.bsz=new B.Q(18,10,18,14)
D.bsQ=new B.Q(18,16,14,18)
D.bsV=new B.Q(18,18,18,12)
D.bt0=new B.Q(18,26,18,12)
D.bt5=new B.Q(18,34,18,34)
D.bt6=new B.Q(18,4,18,14)
D.btc=new B.Q(18,8,18,24)
D.btt=new B.Q(20,16,14,4)
D.bty=new B.Q(20,18,12,4)
D.btD=new B.Q(20,20,12,20)
D.btG=new B.Q(20,22,20,20)
D.btL=new B.Q(20,6,20,6)
D.btV=new B.Q(22,18,22,18)
D.bu2=new B.Q(22,24,22,0)
D.bu5=new B.Q(22,24,22,4)
D.bud=new B.Q(22,60,22,22)
D.buj=new B.Q(24,24,24,22)
D.but=new B.Q(26,10,60,10)
D.buA=new B.Q(28,44,28,44)
D.buR=new B.Q(32,44,32,44)
D.buZ=new B.Q(38,30,38,20)
D.bv3=new B.Q(4,0,0,6)
D.bvf=new B.ic(4,4,4,4)
D.bvF=new B.ic(6,5,6,5)
D.bvJ=new B.Q(6,6,8,6)
D.bvU=new B.Q(8,14,8,14)
D.bvV=new B.Q(8,22,8,22)
D.bw2=new B.Q(8,6,12,6)
D.bwb=new B.Q(8,8,8,4)
D.aiy=new B.Q(9,9,9,6)
D.bwm=new B.ic(2.5,2.5,2.5,2.5)
D.bwn=new B.Q(10.5,0,10.5,0)
D.bwo=new B.Q(7,1.5,7,1.5)
D.cQ_=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bwE=new B.yJ(null,null,D.cQ_,A.Ag)
D.cN5=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bwF=new B.yJ(null,null,D.cN5,A.Ag)
D.aQm=new B.G(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fym=new B.x("WORD DESIGN",null,D.aQm,null,null,null,null,null,null,null,null,null)
D.bxd=new B.bC(1,A.bh,D.fym,null)
D.fy2=new B.x("Slides database",null,Ab.ql,null,null,null,null,null,null,null,null,null)
D.fvk=new B.x("Admin only \xb7 keep as many as you like",null,U.aPQ,null,null,null,null,null,null,null,null,null)
D.df1=w([D.fy2,A.bB,D.fvk],x.p)
D.bm1=new B.fl(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.df1,null)
D.bxg=new B.bC(1,A.bh,D.bm1,null)
D.fpX=new B.x("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bxj=new B.bC(1,A.bh,D.fpX,null)
D.f7g=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAh=new B.x("TALK TO THE EDITOR",null,D.f7g,null,null,null,null,null,null,null,null,null)
D.bxz=new B.bC(1,A.bh,D.fAh,null)
D.fjM=new B.x("Tell the AI what to change",null,Ab.ql,null,null,null,null,null,null,null,null,null)
D.bxU=new B.bC(1,A.bh,D.fjM,null)
D.byL=new B.Dz(!0,"video/mp4")
D.f5A=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new B.x("Move presentations between devices",null,D.f5A,null,null,null,!1,null,null,1,null,null)
D.byP=new B.qi(A.ei,A.a3,A.f,D.fhU,null)
D.fj1=new B.x("Edit in Slides",null,A.j2,null,null,null,null,null,null,null,null,null)
D.byQ=new B.qi(A.ei,A.A,A.f,D.fj1,null)
D.bz4=new B.dq(1,A.cn,D.byQ,null)
D.a_7=new B.a_(60988,"MaterialIcons",!1)
D.bBV=new B.a_(61352,"MaterialIcons",!1)
D.ak3=new B.a_(61531,"MaterialIcons",!1)
D.bD9=new B.a_(63062,"MaterialIcons",!1)
D.bDh=new B.a_(63109,"MaterialIcons",!1)
D.bDt=new B.a_(63206,"MaterialIcons",!1)
D.akO=new B.a_(63238,"MaterialIcons",!1)
D.a_D=new B.a_(63365,"MaterialIcons",!1)
D.a_E=new B.a_(63367,"MaterialIcons",!1)
D.a_F=new B.a_(63368,"MaterialIcons",!1)
D.al_=new B.a_(63384,"MaterialIcons",!1)
D.bE1=new B.a_(63525,"MaterialIcons",!1)
D.bE4=new B.a_(63568,"MaterialIcons",!1)
D.bEp=new B.a_(983072,"MaterialIcons",!1)
D.bEO=new B.a_(983271,"MaterialIcons",!0)
D.am7=new B.a_(983965,"MaterialIcons",!1)
D.am8=new B.a_(983966,"MaterialIcons",!1)
D.bFM=new B.a_(984592,"MaterialIcons",!1)
D.bG3=new B.ae(A.tQ,16,A.aA,null,null,null)
D.bGa=new B.ae(A.mv,null,A.c,null,null,null)
D.amj=new B.ae(A.pX,18,A.c,null,null,null)
D.bGr=new B.ae(A.Bm,18,O.lf,null,null,null)
D.bH6=new B.ae(A.jl,11,null,null,null,null)
D.bHg=new B.ae(A.a_n,null,A.eu,null,null,null)
D.bHP=new B.ae(A.r6,18,A.aA,null,null,null)
D.bHV=new B.ae(A2.Bz,14,null,null,null,null)
D.bHW=new B.ae(A.e6,28,A.cf,null,null,null)
D.bI7=new B.ae(A.pY,20,A.c,null,null,null)
D.bIe=new B.ae(A.ye,null,null,null,null,null)
D.bIk=new B.ae(A.iW,18,A.hw,null,null,null)
D.bIp=new B.ae(A.lk,null,null,null,null,null)
D.bDc=new B.a_(63065,"MaterialIcons",!1)
D.bJ2=new B.ae(D.bDc,15,A.c,null,null,null)
D.bDi=new B.a_(63113,"MaterialIcons",!1)
D.bJ8=new B.ae(D.bDi,null,A.ad,null,null,null)
D.bJw=new B.ae(A.vB,22,A.bL,null,null,null)
D.bJQ=new B.ae(A.vC,18,null,null,null,null)
D.bJW=new B.ae(A.BC,12,A.c,null,null,null)
D.bFo=new B.a_(983687,"MaterialIcons",!1)
D.bK6=new B.ae(D.bFo,null,A.bj,null,null,null)
D.bKd=new B.ae(A.hA,null,A.bj,null,null,null)
D.bKw=new B.ae(A.oS,22,A.c,null,null,null)
D.bKA=new B.ae(A.cD,13,A.c,null,null,null)
D.bKG=new B.ae(A.e6,26,A.ay,null,null,null)
D.bKJ=new B.ae(A.rb,26,A.c,null,null,null)
D.NM=new B.ae(A.jl,8,A.c,null,null,null)
D.bL1=new B.ae(A.pX,40,A.c,null,null,null)
D.bL2=new B.ae(A.bAS,null,null,null,null,null)
D.bL6=new B.ae(A.tZ,20,null,null,null,null)
D.bFn=new B.a_(983683,"MaterialIcons",!1)
D.bLg=new B.ae(D.bFn,null,A.aZ,null,null,null)
D.bLh=new B.ae(A.jl,16,A.bj,null,null,null)
D.bLC=new B.ae(A.rc,null,null,null,null,null)
D.amR=new B.ae(A.vE,22,A.c,null,null,null)
D.bLG=new B.ae(A.dW,17,A.c,null,null,null)
D.amS=new B.ae(A.jl,9,A.c,null,null,null)
D.bLL=new B.ae(A.vy,null,null,null,null,null)
D.bB8=new B.a_(57744,"MaterialIcons",!1)
D.bLS=new B.ae(D.bB8,null,null,null,null,null)
D.bLV=new B.ae(A.vy,16,null,null,null,null)
D.bFV=new B.a_(985181,"MaterialIcons",!1)
D.Gj=new B.ae(D.bFV,null,null,null,null,null)
D.bM6=new B.ae(A.lk,16,A.bL,null,null,null)
D.bFf=new B.a_(983615,"MaterialIcons",!1)
D.bM8=new B.ae(D.bFf,12,A.c,null,null,null)
D.amY=new B.ae(A.xX,16,null,null,null,null)
D.bMg=new B.ae(A.dW,21,A.c,null,null,null)
D.bMl=new B.ae(A.hA,17,A.c,null,null,null)
D.bMm=new B.ae(A.vB,null,null,null,null,null)
D.bMB=new B.ae(A.a0i,20,A.aA,null,null,null)
D.bMQ=new B.ae(A.o0,22,E.n0,null,null,null)
D.bMX=new B.ae(A.pW,13,A.ad,null,null,null)
D.bMZ=new B.ae(A.alU,20,A.aA,null,null,null)
D.bAQ=new B.a_(57495,"MaterialIcons",!1)
D.bN3=new B.ae(D.bAQ,null,null,null,null,null)
D.bN7=new B.ae(A.o1,18,A.c,null,null,null)
D.bNs=new B.ae(A.u2,28,A.c,null,null,null)
D.bNC=new B.ae(D.akO,null,A.aE,null,null,null)
D.bND=new B.ae(A.pY,22,A.c,null,null,null)
D.an7=new B.ae(A.a_3,16,null,null,null,null)
D.bOo=new B.ae(A.vB,32,A.c,null,null,null)
D.bP6=new B.ae(A.iY,22,A.c,null,null,null)
D.bPa=new B.ae(A.rb,22,A.ad,null,null,null)
D.ann=new B.ae(A.tQ,null,A.c1,null,null,null)
D.bQ5=new B.ae(A.tP,18,null,null,null,null)
D.bQH=new B.ae(A.dW,18,A.c7,null,null,null)
D.a0I=new B.ae(A.cD,18,A.aA,null,null,null)
D.bQN=new B.ae(A.alO,null,null,null,null,null)
D.bRc=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aQ9,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.eYQ=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bRu=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eYQ,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.bRV=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.cTO=w([A.dN,A.aE],x.O)
D.bTS=new B.a8(A.a3,A.a7,A.x,D.cTO,null,null)
D.bU3=new B.a8(A.b_,A.b4,A.TS,A.aut,null,null)
D.b78=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bbi=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bee=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b9i=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cEM=w([D.b78,D.bbi,D.bee,D.b9i],x.O)
D.bUm=new B.a8(A.ax,A.aC,A.x,D.cEM,A.GS,null)
D.df8=w([A.cs,A.bA,A.b7],x.O)
D.bUo=new B.a8(A.b_,A.b4,A.TS,D.df8,null,null)
D.dgu=w([A.bj,A.ce],x.O)
D.bUs=new B.a8(A.a3,A.a7,A.x,D.dgu,null,null)
D.dbF=w([A.hl,A.d5,A.aF],x.O)
D.bUu=new B.a8(A.ax,A.aC,A.x,D.dbF,null,null)
D.cZF=w([A.cY,A.fb],x.O)
D.bUy=new B.a8(A.a3,A.a7,A.x,D.cZF,null,null)
D.df3=w([O.lf,A.d5],x.O)
D.ao8=new B.a8(A.a3,A.a7,A.x,D.df3,null,null)
D.bbS=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.df0=w([D.bbS,D.xk,A.bZ],x.O)
D.bUD=new B.a8(A.a3,A.a7,A.x,D.df0,null,null)
D.cVq=w([A.b2,A.cZ,A.eH],x.O)
D.bUE=new B.a8(A.ax,A.aC,A.x,D.cVq,null,null)
D.O_=new B.a8(A.a3,A.a7,A.x,A.H6,null,null)
D.bjP=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cxP=w([D.bjP,A.bZ,A.jc],x.O)
D.aod=new B.a8(A.ax,A.aC,A.x,D.cxP,null,null)
D.d3M=w([A.v6,A.aw,D.AC],x.O)
D.bVF=new B.a8(A.a3,A.a7,A.x,D.d3M,null,null)
D.bl4=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.baa=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bff=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cUA=w([D.bl4,D.baa,D.bff],x.O)
D.aoe=new B.a8(A.a3,A.a7,A.x,D.cUA,null,null)
D.bbU=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bXE=w([Aw.afz,D.bbU],x.O)
D.bVP=new B.a8(A.b_,A.b4,A.x,D.bXE,null,null)
D.cSF=w([A.mZ,A.bD],x.O)
D.bVT=new B.a8(A.b_,A.b4,A.x,D.cSF,null,null)
D.d8G=w([A.aE,A.dQ],x.O)
D.bVZ=new B.a8(A.a3,A.a7,A.x,D.d8G,null,null)
D.aex=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.awb=w([D.aex,D.ja,D.Kx],x.O)
D.bWq=new B.a8(A.ax,A.aC,A.x,D.awb,null,null)
D.cxH=w([A.dx,A.dL],x.O)
D.bWB=new B.a8(A.b_,A.b4,A.x,D.cxH,null,null)
D.d5R=w([A.v2,Az.Es],x.O)
D.bXq=new B.a8(A.a3,A.a7,A.x,D.d5R,null,null)
D.frr=new B.x("Which Bio link?",null,A.cy,null,null,null,null,null,null,null,null,null)
D.bXB=new B.pI(null,D.frr,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yE=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a4B=new C.kS(2,"elegantNavy")
D.h1v=w([A.WM,D.ja,A.bZ],x.O)
D.jG=new C.xq(0,"classic")
D.a4o=new C.jo("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a4B,4294967035,4279378237,4290283019,D.jG)
D.aFp=new C.kS(3,"elegantGold")
D.b6H=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b7D=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.ad7=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.h0Y=w([D.b6H,D.b7D,D.ad7],x.O)
D.a4m=new C.jo("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aFp,4294966515,4281016592,4289102906,D.jG)
D.dBy=new C.kS(22,"goldRibbon")
D.h0U=w([A.WM,D.ja,A.hY],x.O)
D.a4f=new C.jo("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dBy,4294967035,4279378237,4291404327,D.jG)
D.dBz=new C.kS(23,"goldBaroque")
D.adL=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.h1_=w([D.adL,A.aw,A.jc],x.O)
D.a4g=new C.jo("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dBz,4294964964,4283053072,4292128567,D.jG)
D.dBB=new C.kS(4,"elegantEmerald")
D.b8M=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b9G=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.h15=w([D.b8M,D.b9G,A.hY],x.O)
D.a4h=new C.jo("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dBB,4294376440,4279122734,4291404327,D.jG)
D.dBC=new C.kS(5,"elegantBurgundy")
D.bdf=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.h1c=w([D.bdf,A.aco,A.hY],x.O)
D.a4k=new C.jo("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dBC,4294965238,4283043359,4291404327,D.jG)
D.dBv=new C.kS(19,"goldFiligree")
D.Lb=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.h10=w([D.Lb,A.aw,A.jc],x.O)
D.a4i=new C.jo("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dBv,4294966259,4279378237,4292128567,D.jG)
D.dBw=new C.kS(20,"goldLaurel")
D.bjF=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.h1d=w([A.Kp,A.hY,D.bjF],x.O)
D.a4j=new C.jo("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dBw,4294966776,4282000405,4291404327,D.jG)
D.dBx=new C.kS(21,"goldCrest")
D.acg=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bjM=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.h12=w([D.acg,A.aw,D.bjM],x.O)
D.a4n=new C.jo("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dBx,4294965484,4283053072,4292128567,D.jG)
D.dBA=new C.kS(24,"goldStar")
D.bkY=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.h16=w([D.bkY,A.aw,D.ja],x.O)
D.a4l=new C.jo("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dBA,4294966518,4279378237,4292128567,D.jG)
D.Gu=w([D.a4o,D.a4m,D.a4f,D.a4g,D.a4h,D.a4k,D.a4i,D.a4j,D.a4n,D.a4l],x.h)
D.q9=new C.mv(0,"blank")
D.Ry=new C.mv(1,"title")
D.mD=new C.mv(2,"titleContent")
D.dWb=new C.mv(3,"twoColumn")
D.Cy=new C.mv(4,"section")
D.dWc=new C.mv(5,"comparison")
D.HG=new C.mv(6,"flashcard")
D.HH=new C.mv(7,"quiz")
D.HI=new C.mv(8,"worksheet")
D.aoB=w([D.q9,D.Ry,D.mD,D.dWb,D.Cy,D.dWc,D.HG,D.HH,D.HI],B.ax("O<mv>"))
D.axb=w([Ao.W9,A.dL],x.O)
D.ku=w([A.bZ,A.bL,A.hX,A.hH,D.AC],x.O)
D.dxr=new C.iZ("fireworks","Royal Fireworks","Thank you for celebrating with us",D.axb,D.ku)
D.bjX=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bdd=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cSS=w([D.bjX,D.bdd],x.O)
D.dxi=new C.iZ("confetti","Golden Confetti","Together we rise",D.cSS,D.ku)
D.cQ4=w([A.nF,A.VP],x.O)
D.dxj=new C.iZ("crown","Crown of Glory","Built for our community",D.cQ4,D.ku)
D.ba0=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bcT=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cWK=w([D.ba0,D.bcT],x.O)
D.u6=w([A.bJ,A.aQ,A.c,A.aL,A.ak],x.O)
D.dxd=new C.iZ("aurora","Aurora Gala","A brighter future, together",D.cWK,D.u6)
D.beg=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d5X=w([G.abU,D.beg],x.O)
D.dxu=new C.iZ("champagne","Champagne Toast","Cheers to every member",D.d5X,D.ku)
D.dxv=new C.iZ("diamonds","Diamond Rain","Every member is a jewel",X.axO,D.u6)
D.b7u=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bcp=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.daX=w([D.b7u,D.bcp],x.O)
D.dx8=new C.iZ("starburst","Golden Starburst","Thank you!",D.daX,D.ku)
D.bXK=w([A.fa,A.xc],x.O)
D.ac2=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Py=w([A.oA,A.ir,A.ve,A.nG,D.ac2],x.O)
D.dxC=new C.iZ("balloons","Luxury Balloons","Let's celebrate",D.bXK,D.Py)
D.cPn=w([A.VY,A.w],x.O)
D.dxq=new C.iZ("galaxy","Galaxy Spiral","The sky is not the limit",D.cPn,D.u6)
D.bi2=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d2B=w([A.kj,D.bi2],x.O)
D.dxl=new C.iZ("redcarpet","Red Carpet","Tonight we shine",D.d2B,D.ku)
D.bfT=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.be3=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d6R=w([D.bfT,D.be3],x.O)
D.dxa=new C.iZ("coins","Gold Coin Rain","Every contribution counts",D.d6R,D.ku)
D.ddy=w([A.dx,A.hG],x.O)
D.dxg=new C.iZ("lanterns","Sky Lanterns","Lighting the way together",D.ddy,D.ku)
D.baZ=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cNo=w([A.xe,D.baZ],x.O)
D.dxc=new C.iZ("hearts","Floating Hearts","Made with love",D.cNo,D.Py)
D.b82=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b8S=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.deZ=w([D.b82,D.b8S],x.O)
D.dxB=new C.iZ("petals","Rose Petals","Thank you, from our hearts",D.deZ,D.Py)
D.biZ=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.dbg=w([A.le,D.biZ],x.O)
D.dx7=new C.iZ("butterflies","Golden Butterflies","New beginnings",D.dbg,D.ku)
D.bfc=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cOk=w([D.bfc,A.w],x.O)
D.dxt=new C.iZ("neon","Neon Night","Let's go!",D.cOk,D.u6)
D.bc6=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d8R=w([A.KO,D.bc6],x.O)
D.dxw=new C.iZ("disco","Disco Ball","Party time",D.d8R,D.u6)
D.bfK=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d8o=w([A.hl,D.bfK],x.O)
D.dxb=new C.iZ("sunrise","Golden Sunrise","A new day for our community",D.d8o,D.ku)
D.d80=w([A.qM,A.dL],x.O)
D.dxx=new C.iZ("pearls","Ocean Pearls","Deep roots, bright future",D.d80,D.u6)
D.ba5=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d8f=w([D.ba5,A.dL],x.O)
D.dxA=new C.iZ("snow","Winter Gala","Warm wishes to all",D.d8f,D.u6)
D.b6R=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b7O=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.ddW=w([D.b6R,D.b7O],x.O)
D.dxp=new C.iZ("laurel","Laurel Victory","We did it together",D.ddW,D.ku)
D.b6G=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bcP=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cMu=w([D.b6G,D.bcP],x.O)
D.dxz=new C.iZ("ribbons","Silk Ribbons","Elegance in every step",D.cMu,D.ku)
D.bdN=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cxE=w([G.AB,D.bdN],x.O)
D.dxm=new C.iZ("kente","Kente Pride","Proud of our roots",D.cxE,D.ku)
D.bgr=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bji=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cYn=w([D.bgr,D.bji],x.O)
D.dxh=new C.iZ("trophy","Trophy Shine","Winners together",D.cYn,D.ku)
D.d8l=w([Ap.KC,A.w],x.O)
D.dx9=new C.iZ("shooting","Shooting Stars","Make a wish",D.d8l,D.u6)
D.b6Y=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.afn=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dec=w([D.b6Y,D.afn],x.O)
D.dxn=new C.iZ("bokeh","Golden Bokeh","Shine bright",D.dec,D.ku)
D.b7j=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d3q=w([D.b7j,A.w],x.O)
D.dxf=new C.iZ("orbits","Golden Orbits","Always moving forward",D.d3q,D.ku)
D.bj_=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d03=w([A.ad3,D.bj_],x.O)
D.dxk=new C.iZ("flowers","Blooming Garden","Growing together",D.d03,D.Py)
D.b76=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b7I=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dd1=w([D.b76,D.b7I],x.O)
D.dxe=new C.iZ("music","Music Party","Celebrate with us",D.dd1,D.u6)
D.b8B=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bjI=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cNA=w([D.b8B,D.bjI],x.O)
D.dxy=new C.iZ("mandala","Royal Mandala","Harmony and unity",D.cNA,D.ku)
D.d08=w([G.AB,D.afn],x.O)
D.dxs=new C.iZ("sparklers","Golden Sparklers","Light up the night",D.d08,D.ku)
D.dxo=new C.iZ("city","City Lights","The whole city celebrates",D.axb,D.ku)
D.GD=w([D.dxr,D.dxi,D.dxj,D.dxd,D.dxu,D.dxv,D.dx8,D.dxC,D.dxq,D.dxl,D.dxa,D.dxg,D.dxc,D.dxB,D.dx7,D.dxt,D.dxw,D.dxb,D.dxx,D.dxA,D.dxp,D.dxz,D.dxm,D.dxh,D.dx9,D.dxn,D.dxf,D.dxk,D.dxe,D.dxy,D.dxs,D.dxo],B.ax("O<iZ>"))
D.ejY=new B.z("","No ring")
D.ez0=new B.z("platinum","Platinum")
D.evF=new B.z("glow","Glow")
D.eno=new B.z("double","Double line")
D.emj=new B.z("framed","Gallery frame")
D.ejz=new B.z("rosegold","Rose gold")
D.ewp=new B.z("jewels","Jeweled")
D.et7=new B.z("aurora","Aurora")
D.BU=w([D.ejY,A.a5R,D.ez0,D.evF,I.aLT,D.eno,A.a5T,D.emj,D.ejz,D.ewp,D.et7],x.L)
D.ch9=w([D.a4i,D.a4j,D.a4n,D.a4f,D.a4g,D.a4l],x.h)
D.bMu=new B.ae(G.ajE,16,null,null,null,null)
D.b1X=new B.vp(A.bg,D.bMu,null,x.U)
D.bBh=new B.a_(58027,"MaterialIcons",!1)
D.bG9=new B.ae(D.bBh,16,null,null,null,null)
D.b1V=new B.vp(A.L,D.bG9,null,x.U)
D.bBi=new B.a_(58030,"MaterialIcons",!1)
D.bKc=new B.ae(D.bBi,16,null,null,null,null)
D.b1Y=new B.vp(A.dM,D.bKc,null,x.U)
D.cnl=w([D.b1X,D.b1V,D.b1Y],B.ax("O<vp<pY>>"))
D.cno=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cv_=w([A.AG,A.hi],x.O)
D.cv0=w([A.b2,A.bl,A.eH],x.O)
D.Pm=w([A.bL,A.hH,A.hX,A.aw,A.nG],x.O)
D.cxK=w([A.bZ,D.ja,D.Kx],x.O)
D.cyh=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ehs=new B.z(4278913286,4280030216)
D.ehK=new B.z(4279373061,4278518787)
D.ehR=new B.z(4279898630,4278847235)
D.cXM=w([D.ehs,D.ehK,D.ehR],x.n)
D.cTx=w(["\u265b","\u269c","\u2726"],x.s)
D.dBt=new C.xs("Royal Onyx & Gold",D.cXM,4292128567,4294370209,4294965479,3874020544,D.cTx)
D.ehf=new B.z(4278326799,4278598442)
D.ehh=new B.z(4278395929,4278258953)
D.eho=new B.z(4278599728,4278327826)
D.ddp=w([D.ehf,D.ehh,D.eho],x.n)
D.cOc=w(["\u269c","\u2756","\u2727"],x.s)
D.dBq=new C.xs("Imperial Emerald",D.ddp,4293050997,4294699968,4294180856,3872254170,D.cOc)
D.ehi=new B.z(4278455076,4278918747)
D.ehn=new B.z(4278587439,4278322714)
D.ehB=new B.z(4279051376,4278455076)
D.dbB=w([D.ehi,D.ehn,D.ehB],x.n)
D.d42=w(["\u2654","\u2726","\u2748"],x.s)
D.dBk=new C.xs("Sapphire Crown",D.dbB,4291417834,4294967295,4294310143,3871986666,D.d42)
D.ehP=new B.z(4279894534,4283041554)
D.ei0=new B.z(4281008906,4279042307)
D.ei8=new B.z(4284221976,4279894534)
D.dh3=w([D.ehP,D.ei0,D.ei8],x.n)
D.cPw=w(["\u265b","\u2766","\u2726"],x.s)
D.dBm=new C.xs("Ruby Throne",D.dh3,4293378685,4294963145,4294964466,3874213833,D.cPw)
D.ehJ=new B.z(4279371039,4281995100)
D.ehT=new B.z(4280092723,4278714896)
D.ei5=new B.z(4283045242,4279371039)
D.ddM=w([D.ehJ,D.ehT,D.ei5],x.n)
D.dbX=w(["\u2655","\u2756","\u2727"],x.s)
D.dBr=new C.xs("Amethyst Palace",D.ddM,4293314984,4294963421,4294702591,3873229802,D.dbX)
D.ehk=new B.z(4278519045,4280032287)
D.ehC=new B.z(4279111184,4278321666)
D.ehY=new B.z(4280492839,4278716426)
D.dau=w([D.ehk,D.ehC,D.ehY],x.n)
D.d2o=w(["\u2726","\u25c6","\u2742"],x.s)
D.dBo=new C.xs("Obsidian & Platinum",D.dau,4293256418,4294967295,4294638330,3872378836,D.d2o)
D.ehQ=new B.z(4279896588,4282194463)
D.ehZ=new B.z(4280553487,4279043334)
D.ei6=new B.z(4283048488,4279896588)
D.d1T=w([D.ehQ,D.ehZ,D.ei6],x.n)
D.dfm=w(["\u2766","\u273f","\u2727"],x.s)
D.dBl=new C.xs("Rose Gold Velvet",D.d1T,4293440672,4294960345,4294964979,3874214602,D.dfm)
D.ehl=new B.z(4278520340,4279180595)
D.ehq=new B.z(4278718495,4278322443)
D.ehN=new B.z(4279510591,4278520340)
D.cEs=w([D.ehl,D.ehq,D.ehN],x.n)
D.d34=w(["\u269c","\u2736","\u2756"],x.s)
D.dBp=new C.xs("Midnight Brass",D.cEs,4291405148,4293975208,4294439914,3872837564,D.d34)
D.eil=new B.z(4294703086,4293780428)
D.eih=new B.z(4294307549,4293187253)
D.eim=new B.z(4294966517,4293977807)
D.cRC=w([D.eil,D.eih,D.eim],x.n)
D.d3t=w(["\u269c","\u265b","\u2726"],x.s)
D.dBs=new C.xs("Ivory Marble & Gold",D.cRC,4289760572,4286209048,4280951062,3863625518,D.d3t)
D.ehw=new B.z(4278978566,4280555024)
D.ehM=new B.z(4279504137,4278518530)
D.ei2=new B.z(4281211923,4278978566)
D.cPm=w([D.ehw,D.ehM,D.ei2],x.n)
D.dcF=w(["\u2742","\u2726","\u265c"],x.s)
D.dBn=new C.xs("Onyx & Copper",D.cPm,4291856987,4294365880,4294964718,3873885630,D.dcF)
D.cyp=w([D.dBt,D.dBq,D.dBk,D.dBm,D.dBr,D.dBo,D.dBl,D.dBp,D.dBs,D.dBn],B.ax("O<xs>"))
D.cAH=w([A.aw,D.AC,A.hH],x.O)
D.epv=new B.z("Original",null)
D.epD=new B.z("Wide 16:9",1.7777777777777777)
D.erS=new B.z("Landscape 3:2",1.5)
D.eoY=new B.z("Photo 4:3",1.3333333333333333)
D.eqH=new B.z("Square",1)
D.eCC=new B.z("Portrait 3:4",0.75)
D.auC=w([D.epv,D.epD,D.erS,D.eoY,D.eqH,D.eCC],B.ax("O<+(n,M?)>"))
D.auD=w([A.hH,A.bW,A.b8,A.bt],x.O)
D.es2=new B.z("","Original")
D.etR=new B.z("circle","Circle")
D.ezL=new B.z("rounded","Rounded")
D.eAF=new B.z("triangle","Triangle")
D.evT=new B.z("hexagon","Hexagon")
D.eug=new B.z("diamond","Diamond")
D.et6=new B.z("arch","Arch")
D.BZ=w([D.es2,D.etR,D.ezL,D.eAF,D.evT,D.eug,D.et6],x.L)
D.dwx=new C.lb("classic_blue","Classic Blue","Normal",A.bj,A.c,A.kl,A.di,A.aK)
D.dwN=new C.lb("campus_green","Campus Green","Normal",A.aZ,A.mX,A.tf,A.h5,A.ee)
D.dwE=new C.lb("warm_sand","Warm Sand","Normal",A.dT,A.hX,A.bL,A.ia,A.nK)
D.dwL=new C.lb("slate_minimal","Slate Minimal","Normal",A.bv,A.aQ,A.aL,A.M,A.aK)
D.dww=new C.lb("coral_fresh","Coral Fresh","Normal",A.cg,A.it,A.qG,A.jU,A.t8)
D.dwM=new C.lb("lavender_calm","Lavender Calm","Normal",A.b7,A.ps,A.Aq,A.pw,A.j7)
D.dwy=new C.lb("ocean_breeze","Ocean Breeze","Normal",A.fb,A.qS,A.t4,A.ta,A.nL)
D.aeD=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dwJ=new C.lb("berry_pop","Berry Pop","Normal",A.fj,D.aeD,A.ke,G.Xg,A.EN)
D.dwz=new C.lb("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.ke,A.cr)
D.dwI=new C.lb("executive_navy","Executive Navy","Professional",A.d3,A.ae_,A.di,A.lc,A.bJ)
D.dwG=new C.lb("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bo,A.M,A.aQ,A.cr)
D.dwA=new C.lb("corporate_steel","Corporate Steel","Professional",A.mV,A.M,A.mh,A.f6,A.bJ)
D.dwD=new C.lb("gold_luxe","Gold Luxe","Luxury",A.mU,A.dH,A.oz,A.lH,A.bL)
D.bfO=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dwH=new C.lb("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bfO,A.X4,A.ir,A.nG)
D.dwK=new C.lb("platinum_night","Platinum Night","Luxury",A.cr,A.dL,A.bo,A.aQ,A.aL)
D.dwO=new C.lb("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pz,A.eZ,A.pG,A.jv)
D.dwv=new C.lb("royal_purple","Royal Purple","Luxury",A.mW,A.Wf,A.j7,A.ke,A.Kn)
D.dwF=new C.lb("neon_pitch","Neon Pitch","Bold",A.b8,A.dL,A.M,A.b1,A.aL)
D.dwC=new C.lb("crimson_impact","Crimson Impact","Bold",A.bD,A.kj,A.er,A.tq,A.f4)
D.dwB=new C.lb("sunset_gallery","Sunset Gallery","Bold",A.fk,A.t8,A.jU,A.qG,A.mg)
D.GM=w([D.dwx,D.dwN,D.dwE,D.dwL,D.dww,D.dwM,D.dwy,D.dwJ,D.dwz,D.dwI,D.dwG,D.dwA,D.dwD,D.dwH,D.dwK,D.dwO,D.dwv,D.dwF,D.dwC,D.dwB],B.ax("O<lb>"))
D.cMb=w([A.bZ,D.ja],x.O)
D.d28=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.esT=new B.z("Faces & people",D.d28)
D.cAL=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.egf=new B.z("Ideas & work",D.cAL)
D.cU2=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.evY=new B.z("Nature",D.cU2)
D.d2h=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.ept=new B.z("Places & things",D.d2h)
D.cXl=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.etb=new B.z("Symbols",D.cXl)
D.cMh=w([D.esT,D.egf,D.evY,D.ept,D.etb],B.ax("O<+(n,ai<n>)>"))
D.b7b=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cMF=w([A.bZ,D.ad7,D.b7b],x.O)
D.b1i=new B.ac(0,A.G,A.Kk,A.aGe,40)
D.b1_=new B.ac(0,A.G,A.nI,A.em,8)
D.cMR=w([D.b1i,D.b1_],x.V)
D.cNk=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.av1=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1U=w([A.hH,A.eH,A.bD,A.az,A.cg],x.O)
D.cO6=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.adl=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cOh=w([A.WV,D.adl,A.WV],x.O)
D.cOn=w([A.hY,D.ja,D.Kx],x.O)
D.epg=new B.z(A.bg,D.a_E)
D.eqC=new B.z(A.L,D.a_D)
D.ekD=new B.z(A.dM,D.a_F)
D.cPh=w([D.epg,D.eqC,D.ekD],B.ax("O<+(pY,a_)>"))
D.cQ=new C.Ix(0,"text")
D.lu=new C.Ix(1,"image")
D.f0=new C.Ix(2,"shape")
D.Rx=new C.Ix(3,"pdf")
D.l1=new C.Ix(4,"signature")
D.a4I=new C.Ix(5,"bio")
D.cQ9=w([D.cQ,D.lu,D.f0,D.Rx,D.l1,D.a4I],B.ax("O<Ix>"))
D.cQa=w([A.bn,A.cF],B.ax("O<Hs>"))
D.cQL=w(["School","Documents","Sign & present"],x.s)
D.b1n=new B.ac(0,A.G,A.afd,A.up,28)
D.cR4=w([D.b1n],x.V)
D.cRn=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.PG=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.avq=w([A.hH,A.EM,A.aL,A.c,A.oA,A.aw],x.O)
D.eC_=new B.z(0.1,0.08)
D.evW=new B.z(0.3,0.05)
D.eka=new B.z(0.55,0.1)
D.eog=new B.z(0.8,0.06)
D.erl=new B.z(0.92,0.16)
D.eqR=new B.z(0.2,0.2)
D.eoJ=new B.z(0.7,0.22)
D.euD=new B.z(0.05,0.4)
D.erK=new B.z(0.95,0.45)
D.ekS=new B.z(0.12,0.7)
D.en2=new B.z(0.88,0.75)
D.ena=new B.z(0.4,0.9)
D.eiB=new B.z(0.65,0.93)
D.enT=new B.z(0.25,0.97)
D.epd=new B.z(0.85,0.9)
D.elH=new B.z(0.5,0.04)
D.cSN=w([D.eC_,D.evW,D.eka,D.eog,D.erl,D.eqR,D.eoJ,D.euD,D.erK,D.ekS,D.en2,D.ena,D.eiB,D.enT,D.epd,D.elH],x.G)
D.cSU=w([A.c,A.hi,A.aR,A.aV],x.O)
D.dXO=new C.jG("office_blue","Office Blue",A.bj,A.di,A.aK,A.c,A.kl)
D.dXZ=new C.jG("campus_green","Campus Green",A.aZ,A.h5,A.ee,A.mX,A.tf)
D.dXP=new C.jG("sunset","Sunset",A.fk,A.jU,A.nK,A.it,A.qG)
D.dXQ=new C.jG("midnight","Midnight",A.aE,A.ke,A.cr,A.M,A.dx)
D.dY0=new C.jG("classic","Classic",A.d5,A.dH,A.lI,A.hX,A.h3)
D.dXY=new C.jG("rose_gold","Rose Gold",A.hi,A.xg,A.xe,A.ve,A.AG)
D.dXJ=new C.jG("ocean_teal","Ocean Teal",A.fb,A.ta,A.nL,A.qS,A.t4)
D.dXI=new C.jG("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aQ,A.aL)
D.dXH=new C.jG("neon_night","Neon Night",A.b8,A.b1,A.aL,A.dL,A.M)
D.dXT=new C.jG("lavender","Lavender",A.b7,A.pw,A.j7,A.ps,A.Aq)
D.dXV=new C.jG("coral","Coral",A.cg,A.jU,A.t8,A.it,A.mg)
D.dXK=new C.jG("forest","Forest",A.hk,A.dX,A.cC,A.lJ,A.eu)
D.dXL=new C.jG("berry","Berry",A.fj,G.Xg,A.EN,D.aeD,A.ke)
D.dXS=new C.jG("sand","Sand",A.dT,A.ia,A.nK,A.hX,A.bL)
D.dXX=new C.jG("ice","Ice",A.mV,A.KP,A.aK,A.mS,A.f6)
D.dXN=new C.jG("charcoal","Charcoal",A.ak,A.aQ,A.cr,A.bo,A.M)
D.dXG=new C.jG("mint","Mint",A.aV,A.fx,A.h5,A.lJ,A.pG)
D.dXW=new C.jG("crimson","Crimson",A.bD,A.mZ,A.kj,A.EK,A.tq)
D.b9F=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dXR=new C.jG("gold","Gold",A.mU,A.v2,A.oz,D.b9F,A.lH)
D.dXU=new C.jG("aqua","Aqua",A.bN,A.EA,A.ow,A.pu,A.oB)
D.dXM=new C.jG("plum","Plum",A.mW,A.xc,A.EN,A.Eo,A.qQ)
D.dY_=new C.jG("steel","Steel",A.d3,A.di,A.bo,A.kl,A.lc)
D.a29=w([D.dXO,D.dXZ,D.dXP,D.dXQ,D.dY0,D.dXY,D.dXJ,D.dXI,D.dXH,D.dXT,D.dXV,D.dXK,D.dXL,D.dXS,D.dXX,D.dXN,D.dXG,D.dXW,D.dXR,D.dXU,D.dXM,D.dY_],B.ax("O<jG>"))
D.cTe=w([A.bZ,A.jc],x.O)
D.Rz=new C.hz(10,"rotate3d")
D.HK=new C.hz(8,"flip")
D.aFI=new C.hz(19,"spiral")
D.qa=new C.hz(16,"bounce")
D.aFL=new C.hz(9,"flipVertical")
D.cTf=w([D.Rz,D.HK,D.aFI,D.qa,D.aFL],x.i)
D.e7=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cTA=w([0.62,1],x.x)
D.cUa=w([0,0.32,0.68,1],x.x)
D.mE=new C.hz(6,"zoom")
D.uj=new C.hz(4,"slideUp")
D.ui=new C.hz(2,"slideLeft")
D.cUj=w([D.mE,D.HK,D.uj,D.Rz,D.ui],x.i)
D.cUO=w([A.bW,A.hi,A.ir,A.hH,A.c],x.O)
D.b1d=new B.ac(0,A.G,D.adz,A.up,30)
D.cVv=w([D.b1d],x.V)
D.e6r=new B.u(0,-2.5)
D.e6h=new B.u(-2.5,0)
D.e5_=new B.u(2.5,0)
D.cVy=w([A.RP,A.a54,A.aGK,A.a53,D.e6r,I.aGG,D.e6h,D.e5_],x.dN)
D.GU=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cW0=w([23,114,69,56,80,144],x.t)
D.cWs=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cWS=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cYr=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cYv=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bf=new C.uB(0,"rectangle")
D.eL=new C.uB(1,"circle")
D.l2=new C.uB(6,"hexagon")
D.cYI=w([D.bf,D.eL,D.l2],x.m)
D.o7=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aeL=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cZg=w([D.aeL,A.dX],x.O)
D.ekl=new B.z("","Classic")
D.eiP=new B.z("caps","Bold caps")
D.euG=new B.z("elegant","Elegant")
D.eA3=new B.z("shadow","Shadow")
D.eoC=new B.z("neon","Neon glow")
D.eyH=new B.z("outline","Outline")
D.exT=new B.z("marker","Highlighter")
D.eAe=new B.z("stamp","Stamp")
D.ezG=new B.z("retro","Retro")
D.enA=new B.z("threed","3D")
D.evb=new B.z("fire","Fire")
D.ew7=new B.z("ice","Ice")
D.etQ=new B.z("chalk","Chalk")
D.etV=new B.z("comic","Comic")
D.eAg=new B.z("sunset","Sunset")
D.eBo=new B.z("softglow","Soft glow")
D.ex6=new B.z("lowercase","Lowercase")
D.eun=new B.z("double","Echo")
D.eBx=new B.z("whisper","Whisper")
D.awj=w([D.ekl,D.eiP,D.euG,D.eA3,D.eoC,D.eyH,D.exT,D.eAe,D.ezG,D.enA,I.aLR,D.evb,D.ew7,D.etQ,D.etV,A.a5R,D.eAg,D.eBo,D.ex6,D.eun,D.eBx],x.L)
D.d_w=w([3,5,7,10,12,15],x.t)
D.d0R=w([A.bW,A.bL,A.c,A.eA,A.cs],x.O)
D.dob=new C.td(10,"cardWorld")
D.Cq=new C.Bj(3,"rounded")
D.dEu=new C.le("world","NGMY World",D.dob,D.Cq,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.doc=new C.td(11,"cardSplit")
D.dEq=new C.le("business","Business Wire",D.doc,D.Cq,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dod=new C.td(12,"cardBreaking")
D.dED=new C.le("breaking","Breaking Red",D.dod,D.Cq,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.doe=new C.td(13,"cardFeature")
D.dEw=new C.le("feature","Tech Feature",D.doe,D.Cq,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aEe=new C.td(6,"circle")
D.aE8=new C.Bj(4,"circle")
D.dEA=new C.le("parchment","Royal Circle",D.aEe,D.aE8,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dEp=new C.le("ocean","Blue Ocean",D.aEe,D.aE8,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.doh=new C.td(7,"rail")
D.aE7=new C.Bj(1,"double")
D.dEr=new C.le("forest","Green Leaf",D.doh,D.aE7,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aEb=new C.td(1,"sideBySide")
D.dEF=new C.le("herald","NGMY Herald",D.aEb,D.Cq,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aEa=new C.td(0,"classic")
D.a3V=new C.Bj(9,"shadow")
D.dEE=new C.le("daily","The Daily",D.aEa,D.a3V,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dof=new C.td(2,"splash")
D.aE9=new C.Bj(6,"cutCorner")
D.dEo=new C.le("tabloid","Big Tabloid",D.dof,D.aE9,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aEf=new C.td(9,"minimal")
D.dEz=new C.le("modern","Modern Digest",D.aEf,D.Cq,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aEc=new C.td(3,"magazine")
D.aE6=new C.Bj(0,"plain")
D.dEv=new C.le("midnight","Midnight Edition",D.aEc,D.aE6,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.doi=new C.td(8,"banner")
D.dEx=new C.le("metro","Metro Wire",D.doi,D.aE9,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.doa=new C.Bj(8,"arch")
D.dEy=new C.le("sunrise","Sunrise Post",D.aEc,D.doa,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aEd=new C.td(5,"scrapbook")
D.do9=new C.Bj(5,"tape")
D.dEt=new C.le("neon","Neon Beat",D.aEd,D.do9,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dog=new C.td(4,"wrap")
D.dEG=new C.le("gold","Golden Press",D.dog,D.a3V,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dEH=new C.le("minimal","Paper White",D.aEf,D.a3V,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dEs=new C.le("gazette","Fresh Gazette",D.aEa,D.aE7,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dEC=new C.le("times","Classic Times",D.aEb,D.aE6,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.R5=new C.Bj(2,"polaroid")
D.dEB=new C.le("scrapbook","Memory Scrapbook",D.aEd,D.R5,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a2o=w([D.dEu,D.dEq,D.dED,D.dEw,D.dEA,D.dEp,D.dEr,D.dEF,D.dEE,D.dEo,D.dEz,D.dEv,D.dEx,D.dEy,D.dEt,D.dEG,D.dEH,D.dEs,D.dEC,D.dEB],B.ax("O<le>"))
D.d12=w([0.45,1],x.x)
D.GW=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d1q=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fXs=new C.ot("Original",0,1,1,0,0,0)
D.fXw=new C.ot("Black & white",0,1.1,0,0,0,0)
D.fXj=new C.ot("Noir",-0.05,1.55,0,0,0,0)
D.fXn=new C.ot("Sepia",0,1,0.25,0.9,0,0)
D.fXm=new C.ot("Vivid",0,1.15,1.6,0,0,0)
D.fXf=new C.ot("Pop",0,1.3,1.9,0,0,0)
D.fXh=new C.ot("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fXt=new C.ot("Matte",0,0.9,0.85,0,0,0.55)
D.fXo=new C.ot("Cool",0,1.05,1,-0.8,0,0)
D.fXv=new C.ot("Warm",0.03,1.05,1.1,0.8,0,0)
D.fXg=new C.ot("Golden hour",0.04,1,1.25,1,0,0)
D.fXl=new C.ot("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fXu=new C.ot("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fXk=new C.ot("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fXq=new C.ot("Retro",0,0.9,0.7,0.4,0,0.35)
D.fXp=new C.ot("Forest",0,1,1.2,-0.1,-0.45,0)
D.fXr=new C.ot("Rose",0,1,1.1,0.3,0.4,0)
D.fXi=new C.ot("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d1r=w([D.fXs,D.fXw,D.fXj,D.fXn,D.fXm,D.fXf,D.fXh,D.fXt,D.fXo,D.fXv,D.fXg,D.fXl,D.fXu,D.fXk,D.fXq,D.fXp,D.fXr,D.fXi],B.ax("O<ot>"))
D.b6C=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d1s=w([D.aeL,A.dX,D.b6C],x.O)
D.eg8=new B.z(0.12,0.3)
D.ewi=new B.z(0.26,0.75)
D.euC=new B.z(0.8,0.22)
D.eAo=new B.z(0.9,0.7)
D.ex5=new B.z(0.5,0.15)
D.eyJ=new B.z(0.65,0.85)
D.ema=new B.z(0.08,0.85)
D.d1E=w([D.eg8,D.ewi,D.euC,D.eAo,D.ex5,D.eyJ,D.ema],x.G)
D.awt=w([A.b8,A.bW,A.bt,A.b2],x.O)
D.d2s=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d2E=w([A.c,A.f6,A.dv,A.v4],x.O)
D.b9S=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d3C=w([D.b9S,D.adl],x.O)
D.d3D=w([A.v6,A.aw],x.O)
D.d3S=w([0,0.25,0.75,1],x.x)
D.d3U=w([A.x4,A.oA],x.O)
D.aFi=new C.kS(10,"kenteSunset")
D.h0W=w([D.adL,A.jQ,A.aw],x.O)
D.dzL=new C.jo("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aFi,4294964964,4282000405,4279983648,D.jG)
D.aFj=new C.kS(11,"indigoMudcloth")
D.b7z=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.h19=w([D.b7z,A.adi,A.hY],x.O)
D.dzT=new C.jo("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aFj,4294439140,4279903102,4279903102,D.jG)
D.aFk=new C.kS(12,"adinkraRoyal")
D.bkp=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.h1a=w([D.acg,D.bkp,A.aw],x.O)
D.dzV=new C.jo("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aFk,4294965484,4285218591,4287322667,D.jG)
D.aFl=new C.kS(13,"nileLotus")
D.bgI=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bds=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.h1f=w([D.bgI,D.bds,A.hY],x.O)
D.dzU=new C.jo("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFl,4294244340,4279196764,4279196764,D.jG)
D.aFm=new C.kS(14,"shweshweIvory")
D.bbI=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.baz=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b81=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.h0X=w([D.bbI,D.baz,D.b81],x.O)
D.dzQ=new C.jo("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFm,4294505710,4279970378,4291058750,D.jG)
D.rs=new C.kS(15,"certIvoryNavy")
D.h0V=w([D.Lb,D.ja,A.hY],x.O)
D.aEO=new C.xq(1,"ringsNdoa")
D.dzN=new C.jo("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rs,4294966259,4279378237,4291404327,D.aEO)
D.a4q=new C.xq(2,"coupleCards")
D.dzI=new C.jo("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rs,4294966259,4279378237,4291404327,D.a4q)
D.Ct=new C.kS(18,"certIvoryNavyBar")
D.acf=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.h18=w([D.acf,D.ja,A.hY],x.O)
D.aEP=new C.xq(3,"kuhoweshaForm")
D.dzG=new C.jo("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Ct,4294966519,4279378237,4291404327,D.aEP)
D.adx=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.h1s=w([D.Lb,D.adx,A.hY],x.O)
D.a4r=new C.xq(4,"mahariPande")
D.dzJ=new C.jo("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rs,4294966259,4279904068,4291404327,D.a4r)
D.aFn=new C.kS(16,"certIvoryGreen")
D.bb8=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.h0Z=w([A.Kp,D.bb8,A.hY],x.O)
D.aEQ=new C.xq(5,"familiaMti")
D.dzP=new C.jo("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aFn,4294966776,4280241466,4291404327,D.aEQ)
D.a4s=new C.xq(6,"ndoaSafi")
D.dzH=new C.jo("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Ct,4294966519,4279378237,4291404327,D.a4s)
D.bfb=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.h11=w([D.Lb,A.hY,D.bfb],x.O)
D.a4t=new C.xq(7,"peteWide")
D.dzM=new C.jo("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rs,4294966259,4282001936,4291404327,D.a4t)
D.dzW=new C.xq(8,"muhuriCrest")
D.dzF=new C.jo("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rs,4294966259,4279378237,4291404327,D.dzW)
D.h1b=w([D.acf,D.adx,A.hY],x.O)
D.dzX=new C.xq(9,"fomuWazi")
D.dzS=new C.jo("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Ct,4294966519,4279904068,4291404327,D.dzX)
D.aFo=new C.kS(17,"certIvoryRose")
D.bbM=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.h1e=w([D.bbM,D.aen,A.hY],x.O)
D.a4p=new C.xq(10,"upendoOrnate")
D.dzO=new C.jo("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aFo,4294965493,4286200650,4291404327,D.a4p)
D.d4i=w([D.dzL,D.dzT,D.dzV,D.dzU,D.dzQ,D.dzN,D.dzI,D.dzG,D.dzJ,D.dzP,D.dzH,D.dzM,D.dzF,D.dzS,D.dzO],x.h)
D.e8=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HL=new C.vU(0,"emojis")
D.CA=new C.vU(1,"pictures")
D.HM=new C.vU(2,"icons3d")
D.a4K=new C.vU(3,"animations")
D.RB=new C.vU(4,"videoMotion")
D.CB=new C.vU(5,"luxe")
D.a2v=w([D.HL,D.CA,D.HM,D.a4K,D.RB,D.CB],B.ax("O<vU>"))
D.ezj=new B.z(A.dW,"Looks")
D.eo9=new B.z(A.yq,"Light")
D.eo5=new B.z(A.nh,"Colour")
D.emb=new B.z(A.y1,"Effects")
D.akI=new B.a_(63112,"MaterialIcons",!1)
D.ej4=new B.z(D.akI,"Crop")
D.d4M=w([D.ezj,D.eo9,D.eo5,D.emb,D.ej4],x.f2)
D.d5o=w([],x.D)
D.h1p=w([],x.L)
D.emo=new B.z("Flashcard",D.HG)
D.eq4=new B.z("Quiz",D.HH)
D.erY=new B.z("Worksheet",D.HI)
D.ep8=new B.z("Notes",D.mD)
D.eqA=new B.z("Section",D.Cy)
D.d62=w([D.emo,D.eq4,D.erY,D.ep8,D.eqA],B.ax("O<+(n,mv)>"))
D.dBD=new C.kS(6,"beadedPearl")
D.be6=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.h1t=w([H.X3,D.be6,A.hY],x.O)
D.aEM=new C.jo("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dBD,4294966774,4286209070,4291404327,D.jG)
D.dBE=new C.kS(7,"artDeco")
D.bhX=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bkG=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.h1r=w([D.bhX,D.bkG,A.bZ],x.O)
D.aEN=new C.jo("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dBE,4294440434,4280228630,4290283019,D.jG)
D.dBF=new C.kS(8,"rosetteCorners")
D.bjS=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b9W=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.be1=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.h14=w([D.bjS,D.b9W,D.be1],x.O)
D.aEL=new C.jo("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dBF,4294702831,4285218602,4291394365,D.jG)
D.dBG=new C.kS(9,"modernLedger")
D.h13=w([A.c,D.ja,D.ja],x.O)
D.aEK=new C.jo("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dBG,4294967295,4279378237,4279378237,D.jG)
D.d66=w([D.aEM,D.aEN,D.aEL,D.aEK],x.h)
D.d6e=w([A.ir,A.oA],x.O)
D.cm=new C.hz(0,"none")
D.dd=new C.hz(1,"fade")
D.HJ=new C.hz(3,"slideRight")
D.aFK=new C.hz(5,"slideDown")
D.dWi=new C.hz(7,"zoomOut")
D.a4J=new C.hz(11,"cube")
D.dWd=new C.hz(12,"blur")
D.aFH=new C.hz(13,"dissolve")
D.dWe=new C.hz(14,"wipeLeft")
D.dWf=new C.hz(15,"wipeRight")
D.RA=new C.hz(17,"push")
D.dWg=new C.hz(18,"flash")
D.aFJ=new C.hz(20,"swing")
D.dWh=new C.hz(21,"curtain")
D.Qe=w([D.cm,D.dd,D.ui,D.HJ,D.uj,D.aFK,D.mE,D.dWi,D.HK,D.aFL,D.Rz,D.a4J,D.dWd,D.aFH,D.dWe,D.dWf,D.qa,D.RA,D.dWg,D.aFI,D.aFJ,D.dWh],x.i)
D.Qf=w([D.a4o,D.a4m,D.a4f,D.a4g,D.a4h,D.a4k,D.a4i,D.a4j,D.a4n,D.a4l,D.aEM,D.aEN,D.aEL,D.aEK],x.h)
D.d6G=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d6K=w([A.Au,A.hH,A.bZ],x.O)
D.enu=new B.z(A.tS,"Design")
D.eAO=new B.z(D.al_,"Word sizes")
D.ewQ=new B.z(A.BI,"Text")
D.bEE=new B.a_(983182,"MaterialIcons",!1)
D.ewU=new B.z(D.bEE,"Photo")
D.eiE=new B.z(A.lp,"Logo")
D.eBY=new B.z(A.Gg,"News")
D.d6P=w([D.enu,D.eAO,D.ewQ,D.ewU,D.eiE,D.eBY],x.f2)
D.d6Q=w(["golddust","sparkle","sheen"],x.s)
D.dXF=new C.eu("upload_pdf",L.Ny,"Upload PDF")
D.dWP=new C.eu("sign_paper",A.Gd,"Sign Paper")
D.bDV=new B.a_(63438,"MaterialIcons",!1)
D.dXB=new C.eu("hd_photo",D.bDV,"HD Photo")
D.dWH=new C.eu("sharpen",E.a_p,"Sharpen")
D.dWR=new C.eu("print",L.Ny,"Download PDF")
D.dXi=new C.eu("rotate",D.akI,"Rotate")
D.dX_=new C.eu("text_box",A.BI,"Text Box")
D.dX1=new C.eu("picture",A.tW,"Picture")
D.dWY=new C.eu("title",A.yk,"Title")
D.dWU=new C.eu("subtitle",T.alz,"Subtitle")
D.dXr=new C.eu("bullets",K.a_G,"Bullet List")
D.dWV=new C.eu("numbered",A.Nm,"Numbered")
D.dXu=new C.eu("quote",A2.Bz,"Quote")
D.dX6=new C.eu("citation",A.o0,"Citation")
D.dXx=new C.eu("date_stamp",Ah.a_u,"Date Stamp")
D.dXk=new C.eu("page_number",A.yj,"Page #")
D.dXo=new C.eu("header_bar",A.BK,"Header")
D.dX0=new C.eu("footer_bar",Aq.a0d,"Footer")
D.dWQ=new C.eu("divider",A.tV,"Divider")
D.dWM=new C.eu("highlight",A.a_M,"Highlight")
D.dXq=new C.eu("redact",A.yn,"Redact")
D.dXd=new C.eu("callout",A.Bv,"Callout")
D.dXz=new C.eu("checkboxes",K.ajY,"Checklist")
D.dXa=new C.eu("table",A.a0a,"Table")
D.dX4=new C.eu("memo",K.a_X,"Memo")
D.dXe=new C.eu("letter",A.G3,"Letter")
D.bDx=new B.a_(63259,"MaterialIcons",!0)
D.dWG=new C.eu("agenda",D.bDx,"Agenda")
D.dWS=new C.eu("toc",AA.alb,"Contents")
D.bDR=new B.a_(63406,"MaterialIcons",!1)
D.dXb=new C.eu("sig_line",D.bDR,"Sign Line")
D.dWz=new C.eu("initial_line",A.jk,"Initials")
D.dWC=new C.eu("approved",A.lp,"APPROVED")
D.dXg=new C.eu("draft",A.oS,"DRAFT")
D.dXm=new C.eu("confidential",A.jl,"Confidential")
D.dXp=new C.eu("sticky",A.NF,"Sticky Note")
D.dXy=new C.eu("progress",A.ala,"Progress")
D.bF7=new B.a_(983507,"MaterialIcons",!1)
D.dWN=new C.eu("stars",D.bF7,"Star Rating")
D.dWx=new C.eu("equation",A.al1,"Equation")
D.dWI=new C.eu("timeline",A.NG,"Timeline")
D.dX5=new C.eu("two_col",A.a0e,"Two Columns")
D.dWK=new C.eu("compare",A1.a_x,"Compare")
D.dWv=new C.eu("duplicate_el",A.fL,"Duplicate")
D.dXD=new C.eu("delete_el",A.e6,"Delete")
D.dXt=new C.eu("bring_fwd",H.akW,"Bring Front")
D.dWA=new C.eu("send_back",H.akV,"Send Back")
D.dXf=new C.eu("align_left",D.a_E,"Align L")
D.dXl=new C.eu("align_center",D.a_D,"Align C")
D.dXC=new C.eu("align_right",D.a_F,"Align R")
D.dWZ=new C.eu("word_count",A_.a_8,"Word Count")
D.dWW=new C.eu("link_text",A.ho,"Link")
D.dXj=new C.eu("phone",A.iB,"Phone")
D.dWL=new C.eu("email",A.Bx,"Email")
D.dXE=new C.eu("qr_placeholder",A.jn,"QR Placeholder")
D.dWF=new C.eu("rectangle",A3.vD,"Rectangle")
D.dX9=new C.eu("circle",A.r4,"Circle")
D.dWB=new C.eu("arrow",A.iW,"Arrow")
D.dXs=new C.eu("line",A.tV,"Line")
D.dWO=new C.eu("triangle",A.a_v,"Triangle")
D.bDF=new B.a_(63318,"MaterialIcons",!1)
D.dWT=new C.eu("grayscale",D.bDF,"Grayscale")
D.dX2=new C.eu("brighten",K.akh,"Brighten")
D.dX7=new C.eu("flip_h",A.FU,"Flip H")
D.bDM=new B.a_(63348,"MaterialIcons",!1)
D.dXA=new C.eu("flip_v",D.bDM,"Flip V")
D.dXn=new C.eu("cover_page",A.pS,"Cover Page")
D.dWy=new C.eu("invoice",A.h9,"Invoice")
D.dWJ=new C.eu("resume",A.mq,"Resume")
D.dWX=new C.eu("minutes",A.oM,"Minutes")
D.dWD=new C.eu("lab_report",A.NB,"Lab Report")
D.dWE=new C.eu("rubric",A.tT,"Rubric")
D.dX8=new C.eu("flashcard_tool",V.Ga,"Flashcard")
D.dXv=new C.eu("quiz_tool",A.G7,"Quiz Block")
D.dXc=new C.eu("worksheet_tool",M.FL,"Worksheet")
D.dXh=new C.eu("outline_share",A.ND,"Share Outline")
D.dXw=new C.eu("export_json",D.ak3,"Export JSON")
D.dWw=new C.eu("new_slide",D.a_7,"New Slide")
D.dX3=new C.eu("present",A.pY,"Present")
D.d7f=w([D.dXF,D.dWP,D.dXB,D.dWH,D.dWR,D.dXi,D.dX_,D.dX1,D.dWY,D.dWU,D.dXr,D.dWV,D.dXu,D.dX6,D.dXx,D.dXk,D.dXo,D.dX0,D.dWQ,D.dWM,D.dXq,D.dXd,D.dXz,D.dXa,D.dX4,D.dXe,D.dWG,D.dWS,D.dXb,D.dWz,D.dWC,D.dXg,D.dXm,D.dXp,D.dXy,D.dWN,D.dWx,D.dWI,D.dX5,D.dWK,D.dWv,D.dXD,D.dXt,D.dWA,D.dXf,D.dXl,D.dXC,D.dWZ,D.dWW,D.dXj,D.dWL,D.dXE,D.dWF,D.dX9,D.dWB,D.dXs,D.dWO,D.dWT,D.dX2,D.dX7,D.dXA,D.dXn,D.dWy,D.dWJ,D.dWX,D.dWD,D.dWE,D.dX8,D.dXv,D.dXc,D.dXh,D.dXw,D.dWw,D.dX3],B.ax("O<eu>"))
D.d7p=w([A.cr,A.ak],x.O)
D.eic=new B.z(4286331629,4292552567)
D.ei_=new B.z(4280640491,4278630100)
D.eik=new B.z(4294538006,4292943176)
D.ehm=new B.z(4278556265,4280640491)
D.d1O=w([D.eic,D.ei_,D.eik,D.ehm],x.n)
D.cr5=w([4294626325,4280472558,4294210230],x.t)
D.dWq=new C.nI("colorful","Colorful",A.nh,D.d1O,4294967295,3875536895,D.cr5,D.mE)
D.ehO=new B.z(4279522093,4279657780)
D.ei3=new B.z(4281750292,4283268111)
D.ehp=new B.z(4278603323,4279203438)
D.ei4=new B.z(4282343954,4279599165)
D.cBY=w([D.ehO,D.ei3,D.ehp,D.ei4],x.n)
D.cqO=w([4288931381,4294829706,4287033260],x.t)
D.dWm=new C.nI("nature","Nature",A.Ge,D.cBY,4294442727,3874290891,D.cqO,D.dd)
D.ehI=new B.z(4279369771,4283178389)
D.ehF=new B.z(4279179050,4286456526)
D.ehW=new B.z(4280163147,4290648157)
D.ehe=new B.z(4278322711,4285343961)
D.cTs=w([D.ehI,D.ehF,D.ehW,D.ehe],x.n)
D.cr1=w([4294210230,4280472558,4289170426],x.t)
D.dWk=new C.nI("vibe","Vibe",A.a_K,D.cTs,4294967295,3874869502,D.cr1,D.ui)
D.eig=new B.z(4290007817,4292552567)
D.eia=new B.z(4286328082,4294286859)
D.eif=new B.z(4288485197,4294538006)
D.ei9=new B.z(4285343961,4293675161)
D.bYa=w([D.eig,D.eia,D.eif,D.ei9],x.n)
D.cr6=w([4294829706,4294967295,4284999929],x.t)
D.dWl=new C.nI("celebration","Celebration",A.lk,D.bYa,4294967295,4009752557,D.cr6,D.qa)
D.ehD=new B.z(4279179050,4280171146)
D.ehH=new B.z(4279310375,4280232247)
D.ehv=new B.z(4278916151,4280172719)
D.ehE=new B.z(4279179050,4281549141)
D.cMy=w([D.ehD,D.ehH,D.ehv,D.ehE],x.n)
D.cqJ=w([4281908728,4294626325,4287931320],x.t)
D.dWp=new C.nI("professional","Professional",A.Bt,D.cMy,4294967295,3872118241,D.cqJ,D.RA)
D.ehz=new B.z(4278995566,4278413729)
D.ehr=new B.z(4278727492,4279137424)
D.ehX=new B.z(4280171146,4278751666)
D.ehA=new B.z(4278995566,4279590517)
D.cuT=w([D.ehz,D.ehr,D.ehX,D.ehA],x.n)
D.cqM=w([4286436348,4284410580,4294829706],x.t)
D.dWr=new C.nI("ocean","Ocean",K.a0g,D.cuT,4294967295,3873501950,D.cqM,D.uj)
D.eib=new B.z(4286328082,4294538006)
D.eid=new B.z(4286781507,4294677052)
D.ei7=new B.z(4283178389,4294197086)
D.eie=new B.z(4288295954,4294688548)
D.cIK=w([D.eib,D.eid,D.ei7,D.eie],x.n)
D.cr7=w([4294829706,4294967295,4294747557],x.t)
D.dWs=new C.nI("sunset","Sunset",A.NI,D.cIK,4294967295,4009749973,D.cr7,D.dd)
D.eio=new B.z(4294967295,4294047225)
D.eij=new B.z(4294507260,4294967295)
D.ein=new B.z(4294967295,4293060848)
D.eii=new B.z(4294507260,4294047225)
D.cWy=w([D.eio,D.eij,D.ein,D.eii],x.n)
D.cqH=w([4280640491,4279179050,4287931320],x.t)
D.dWo=new C.nI("minimal","Minimal",A3.vD,D.cWy,4279179050,4282865001,D.cqH,D.dd)
D.ehy=new B.z(4278979081,4280886564)
D.ehS=new B.z(4280031511,4278979081)
D.ehG=new B.z(4279308561,4281148438)
D.ehx=new B.z(4278979081,4280031511)
D.d9k=w([D.ehy,D.ehS,D.ehG,D.ehx],x.n)
D.cqV=w([4292128567,4294829706,4289241758],x.t)
D.dWt=new C.nI("elegant","Elegant",A.lS,D.d9k,4294898631,3873957348,D.cqV,D.aFH)
D.ehU=new B.z(4280159034,4282058596)
D.ehu=new B.z(4278916151,4280163147)
D.ei1=new B.z(4281208933,4278916151)
D.ehL=new B.z(4279502891,4283178389)
D.dfX=w([D.ehU,D.ehu,D.ei1,D.ehL],x.n)
D.cr3=w([4294296657,4292128567,4291081725],x.t)
D.dWn=new C.nI("royal","Royal Gold",A.iY,D.dfX,4294965222,3874084351,D.cr3,D.mE)
D.ehj=new B.z(4278464302,4280163147)
D.eht=new B.z(4278916151,4279455306)
D.ehV=new B.z(4280163147,4283040846)
D.ehg=new B.z(4278332450,4281413249)
D.d1v=w([D.ehj,D.eht,D.ehV,D.ehg],x.n)
D.cqI=w([4281193663,4289170426,4294210230],x.t)
D.dWu=new C.nI("aurora","Aurora Glow",A.dW,D.d1v,4293983738,3869766608,D.cqI,D.dd)
D.vZ=w([D.dWq,D.dWm,D.dWk,D.dWl,D.dWp,D.dWr,D.dWs,D.dWo,D.dWt,D.dWn,D.dWu],B.ax("O<nI>"))
D.beB=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d7W=w([A.qJ,D.beB,A.qJ],x.O)
D.d8d=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d8h=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.ewI=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.en4=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ery=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.efb=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eqe=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eou=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.esI=new B.z("Surprise me","")
D.d8N=w([D.ewI,D.en4,D.ery,D.efb,D.eqe,D.eou,D.esI],x.L)
D.b83=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.biq=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d9x=w([A.c,D.b83,D.biq],x.O)
D.dbs=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aFg=new C.kS(0,"heritageGold")
D.bdh=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.h1u=w([D.bdh,W.adI,A.aw],x.O)
D.dzR=new C.jo("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aFg,4294570461,4284234270,4292128567,D.jG)
D.aFh=new C.kS(1,"heritageCrimson")
D.b6y=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bbJ=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.big=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.h17=w([D.b6y,D.bbJ,D.big],x.O)
D.dzK=new C.jo("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aFh,4294635750,4285213214,4292912216,D.jG)
D.dbw=w([D.a4o,D.a4m,D.dzR,D.dzK,D.a4h,D.a4k],x.h)
D.dFK=new C.ro(1,"circuit")
D.dGc=new C.m3("neural","Neural Link","Robotic",D.dFK,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dFJ=new C.ro(0,"grid")
D.dG9=new C.m3("signal","Signal Grid","Robotic",D.dFJ,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dFP=new C.ro(2,"hexes")
D.dFV=new C.m3("core","Core Protocol","Robotic",D.dFP,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aFE=new C.ro(11,"diagonal")
D.dG5=new C.m3("steel","Steel Tech","Robotic",D.aFE,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aFF=new C.ro(3,"rings")
D.dFU=new C.m3("vault","Vault Gold","Robotic",D.aFF,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dFN=new C.ro(13,"leaves")
D.dFX=new C.m3("forest","Forest Morning","Nature",D.dFN,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aFG=new C.ro(5,"waves")
D.dG3=new C.m3("ocean","Ocean Calm","Nature",D.aFG,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dFQ=new C.ro(6,"sunset")
D.dG8=new C.m3("sunset","Sunset Glow","Nature",D.dFQ,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dFR=new C.ro(7,"mountains")
D.dFW=new C.m3("mountain","Mountain Air","Nature",D.dFR,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dFS=new C.ro(8,"stars")
D.dG2=new C.m3("night","Night Sky","Nature",D.dFS,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a4H=new C.ro(4,"orbs")
D.dG0=new C.m3("aurora","Aurora","Nature",D.a4H,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dGa=new C.m3("sand","Sand Dune","Nature",D.aFG,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dFT=new C.ro(9,"rays")
D.dG_=new C.m3("golden","Golden Hour","Warm",D.dFT,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dFY=new C.m3("royal","Royal Purple","Warm",D.aFE,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dFZ=new C.m3("rose","Rose Petal","Warm",D.a4H,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dFM=new C.ro(12,"blocks")
D.dG1=new C.m3("electric","Electric Blue","Bold",D.dFM,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dGb=new C.m3("mint","Fresh Mint","Bold",D.a4H,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dFO=new C.ro(14,"minimal")
D.dG7=new C.m3("white","Clean White","Clean",D.dFO,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dFL=new C.ro(10,"frame")
D.dG4=new C.m3("midnight","Midnight Gold","Clean",D.dFL,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dG6=new C.m3("community","Community Green","Clean",D.aFF,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2Y=w([D.dGc,D.dG9,D.dFV,D.dG5,D.dFU,D.dFX,D.dG3,D.dG8,D.dFW,D.dG2,D.dG0,D.dGa,D.dG_,D.dFY,D.dFZ,D.dG1,D.dGb,D.dG7,D.dG4,D.dG6],B.ax("O<m3>"))
D.dbT=w([D.AC,A.v6,A.hH,A.bZ],x.O)
D.dc8=w([D.aex,D.ja],x.O)
D.dci=w(["pdf","docx","txt","md"],x.s)
D.eFs=new B.bo(-3,150,34)
D.eFt=new B.bo(-3,214,62)
D.eFu=new B.bo(-3,288,62)
D.dd6=w([D.eFs,D.eFt,D.eFu],B.ax("O<+(M,M,M)>"))
D.ddA=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dea=w(["Write","Design","Print & fold"],x.s)
D.jH=new C.uB(2,"triangle")
D.Cz=new C.uB(3,"arrow")
D.fs=new C.uB(4,"line")
D.jI=new C.uB(5,"parallelogram")
D.ded=w([D.bf,D.eL,D.jH,D.Cz,D.fs,D.jI,D.l2],x.m)
D.egn=new B.z(240,96)
D.eiX=new B.z(560,46)
D.dei=w([D.egn,D.eiX],x.G)
D.h1F=new C.xt(0,"classic")
D.dBJ=new C.nE("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aFg,4294570461,4282000405,4284234270)
D.dBV=new C.nE("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aFh,4294635750,4281999378,4285213214)
D.dBK=new C.nE("elegant_navy","Umoja Mzuri",y.s,D.a4B,4294967035,4279378237,4290283019)
D.dBX=new C.nE("elegant_gold","Umoja wa Dhahabu",y.Q,D.aFp,4294966515,4281016592,4289102906)
D.dBZ=new C.nE("kente_sunset","Kente ya Jua",y.H,D.aFi,4294964964,4282000405,4279983648)
D.dBH=new C.nE("indigo_mudcloth","Nguo ya Indigo",y.n,D.aFj,4294439140,4279903102,4279903102)
D.dBM=new C.nE("adinkra_royal","Muhuri wa Adinkra",y.z,D.aFk,4294965484,4285218591,4287322667)
D.dBR=new C.nE("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFl,4294244340,4279196764,4279196764)
D.dBT=new C.nE("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFm,4294505710,4279970378,4291058750)
D.h1G=new C.xt(1,"ringsNdoa")
D.dBL=new C.nE("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rs,4294966259,4279378237,4291404327)
D.h1I=new C.xt(2,"coupleCards")
D.dBW=new C.nE("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rs,4294966259,4279378237,4291404327)
D.h1J=new C.xt(3,"kuhoweshaForm")
D.dBS=new C.nE("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Ct,4294966519,4279378237,4291404327)
D.h1K=new C.xt(4,"mahariPande")
D.dBI=new C.nE("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rs,4294966259,4279904068,4291404327)
D.h1L=new C.xt(5,"familiaMti")
D.dBY=new C.nE("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aFn,4294966776,4280241466,4291404327)
D.h1M=new C.xt(6,"ndoaSafi")
D.dBP=new C.nE("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Ct,4294966519,4279378237,4291404327)
D.h1N=new C.xt(7,"peteWide")
D.dBO=new C.nE("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rs,4294966259,4282001936,4291404327)
D.h1O=new C.xt(8,"muhuriCrest")
D.dBN=new C.nE("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rs,4294966259,4279378237,4291404327)
D.h1P=new C.xt(9,"fomuWazi")
D.dBQ=new C.nE("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Ct,4294966519,4279904068,4291404327)
D.h1H=new C.xt(10,"upendoOrnate")
D.dBU=new C.nE("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aFo,4294965493,4286200650,4291404327)
D.Qs=w([D.dBJ,D.dBV,D.dBK,D.dBX,D.dBZ,D.dBH,D.dBM,D.dBR,D.dBT,D.dBL,D.dBW,D.dBS,D.dBI,D.dBY,D.dBP,D.dBO,D.dBN,D.dBQ,D.dBU],B.ax("O<nE>"))
D.Cx=new C.aqF(0,"landscape169")
D.oa=new C.aqF(1,"portrait916")
D.df2=w([D.Cx,D.oa],B.ax("O<aqF>"))
D.axZ=w([A.hH,A.bL,A.cs,A.ir,A.c],x.O)
D.ub=w([A.bZ,A.ia],x.O)
D.efz=new B.z(1000,"M")
D.ekc=new B.z(900,"CM")
D.eiR=new B.z(500,"D")
D.ehb=new B.z(400,"CD")
D.efA=new B.z(100,"C")
D.ekd=new B.z(90,"XC")
D.eiS=new B.z(50,"L")
D.ehc=new B.z(40,"XL")
D.efE=new B.z(10,"X")
D.ekn=new B.z(9,"IX")
D.ej8=new B.z(5,"V")
D.eiD=new B.z(4,"IV")
D.eg3=new B.z(1,"I")
D.dfD=w([D.efz,D.ekc,D.eiR,D.ehb,D.efA,D.ekd,D.eiS,D.ehc,D.efE,D.ekn,D.ej8,D.eiD,D.eg3],x.ek)
D.eGt=new B.cC(["open",A.jk,"Open & write","Keep writing this book"])
D.eGU=new B.cC(["print",A.tZ,"Print as a book","Fold and staple it"])
D.dfN=w([D.eGt,D.eGU],B.ax("O<+(n,a_,n,n)>"))
D.dgt=w([D.a4J,D.mE,D.HK,D.RA,D.dd,D.Rz],x.i)
D.exi=new B.z(-1,"Small")
D.efn=new B.z(0,"Normal")
D.eg2=new B.z(1,"Big")
D.egD=new B.z(2,"Huge")
D.dgY=w([D.exi,D.efn,D.eg2,D.egD],x.ek)
D.dhn=w([49,65,89,38,83,89],x.t)
D.dhu=w([A.v6,A.hH,A.bZ],x.O)
D.dhV=w([D.dd,D.mE,D.ui,D.a4J,D.HK,D.RA],x.i)
D.aDh=new B.dS([0,D.Ls,8,D.afR,12,D.afS],B.ax("dS<H,a3s>"))
D.e1p={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bi8=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cMI=w([A.bL,D.bi8],x.O)
D.d5P=w([A.b1,A.bj],x.O)
D.d0C=w([A.bW,A.aR,A.c7],x.O)
D.dfO=w([A.cr,A.bv],x.O)
D.cUn=w([A.b8,A.fj],x.O)
D.d3h=w([A.b7,A.fa],x.O)
D.bbu=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d2z=w([D.bbu,A.oA],x.O)
D.cYd=w([A.h1,A.x8],x.O)
D.cUb=w([A.bu,A.ce],x.O)
D.dkw=new B.bk(D.e1p,[D.cMI,I.aox,D.d5P,D.d0C,D.dfO,D.cUn,D.d3h,D.d2z,D.cYd,D.cUb],B.ax("bk<n,ai<w>>"))
D.e0z={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a3A=new B.bk(D.e0z,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<n,n>"))
D.a3H=new B.bk(A.i5,[],B.ax("bk<H,+icon3d,picture(n?,n?)>"))
D.doV=new F.MI(30,null)
D.dtZ=new F.mr("Chapter 1","","","")
D.deP=w([D.dtZ],x.B)
D.du2=new F.re("My Book","","",D.deP,E.aEA)
D.du0=new F.ur("starry",null,null,null,null,"","","")
D.du3=new F.re("Dream Big","","",E.a2E,D.du0)
D.du1=new F.ur("story",null,null,null,null,"","","")
D.du4=new F.re("Little Lion","","",E.a2E,D.du1)
D.du_=new F.ur("vintage",null,null,null,null,"","","")
D.du5=new F.re("Our Story","","",E.a2E,D.du_)
D.dx6=new C.Ek("","NGMY","","")
D.dEn=new C.zl("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dWj=new C.b0w(null,null,null,null)
D.dY1=new C.aqK(null)
D.dYe=new C.arf(0,"smaller")
D.dYf=new C.arf(1,"bigger")
D.aFU=new C.arf(2,"fit")
D.e3W=new B.u(3,6)
D.e45=new B.u(4,8)
D.e7w=new B.D(E.agH,T.abD,null)
D.e7A=new B.D(A.Y4,A.lF,null)
D.bGp=new B.ae(A.ln,16,A.c1,null,null,null)
D.e7E=new B.D(A.iV,D.bGp,null)
D.b5X=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e7Q=new B.D(A.Fo,D.b5X,null)
D.bQF=new B.ae(A.cD,16,A.aA,null,null,null)
D.e7U=new B.D(A.ek,D.bQF,null)
D.fl9=new B.x("Play",null,A.nv,null,null,null,null,null,null,null,null,null)
D.d63=w([U.amZ,A.rG,D.fl9],x.p)
D.eL4=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d63,null)
D.e7X=new B.D(A.nX,D.eL4,null)
D.b65=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eQp=new B.a7(20,20,D.b65,null)
D.e81=new B.D(A.iV,D.eQp,null)
D.fu5=new B.x("Seconds per slide",null,A.hs,null,null,null,null,null,null,null,null,null)
D.e89=new B.D(A.bm,D.fu5,null)
D.e9u=new C.a8h(2,"print")
D.e9x=new B.iP(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eb9=new B.h9("/Annot")
D.ebb=new B.h9("/URI")
D.ffx=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.edd=new B.jq("share",48,D.ffx,null,B.ax("jq<n>"))
D.bQz=new B.ae(A.dW,14,A.eA,null,null,null)
D.edm=new B.cL(null,-2,-2,null,null,null,D.bQz,null)
D.cOJ=w([H.aeb,A.K],x.O)
D.bWZ=new B.a8(A.a3,A.a7,A.x,D.cOJ,null,null)
D.aZO=new B.o(null,null,null,null,null,D.bWZ,A.n)
D.bn1=new B.kP(D.aZO,A.be,null,null)
D.edy=new B.cL(0,0,null,0,8,null,D.bn1,null)
D.dav=w([A.hX,A.mg,A.cg],x.O)
D.eec=new B.bT(A.A,0.5,A.x,null,0,D.dav,null,null)
D.egw=new B.z(0.22,A.bj)
D.ekI=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.emK=new B.z(0.5,A.hi)
D.evR=new B.z(0.78,A.aV)
D.eGj=new B.cC([A.bt,0.22,0.7,2.6])
D.eGp=new B.cC([A.b8,0.36,1.2,1.3])
D.eGv=new B.cC([A.dQ,0.28,0.2,0.4])
D.eGB=new B.cC([A.cz,0.05,0.3,0.35])
D.eGH=new B.cC([A.bu,0.28,0.9,0])
D.eGP=new B.cC([A.aE,-0.25,-0.15,0.45])
D.eHF=new B.cC([A.bW,0.42,1,4.1])
D.eKN=new B.a9e(9)
D.bHw=new B.ae(A.Gg,28,A.c7,null,null,null)
D.fuD=new B.x("NGMY News",null,A.dr,null,null,null,null,null,null,null,null,null)
D.bwM=new B.bC(1,A.bh,D.fuD,null)
D.ddD=w([D.bHw,A.av,D.bwM],x.p)
D.eKZ=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.ddD,null)
D.bHH=new B.ae(A.o0,16,A.c,null,null,null)
D.fw6=new B.x("Book",null,A.oj,null,null,null,null,null,null,null,null,null)
D.dht=w([D.bHH,A.ec,D.fw6],x.p)
D.eL6=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.dht,null)
D.bO9=new B.ae(A.jl,10,A.c,null,null,null)
D.fjg=new B.x("Pro",null,A.nt,null,null,null,null,null,null,null,null,null)
D.d68=w([D.bO9,A.qh,D.fjg],x.p)
D.eLa=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d68,null)
D.fu4=new B.x("Make a newspaper",null,Au.TB,null,null,null,null,null,null,null,null,null)
D.bY8=w([E.a0C,A.ab,D.fu4],x.p)
D.eLb=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bY8,null)
D.bMI=new B.ae(A.lk,18,A.bL,null,null,null)
D.fln=new B.x("Ending celebration",null,A.hT,null,null,null,null,null,null,null,null,null)
D.dcI=w([D.bMI,A.bp,D.fln],x.p)
D.eLe=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dcI,null)
D.bNW=new B.ae(A.jk,18,A.jU,null,null,null)
D.f03=new B.G(!0,A.jU,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwn=new B.x("Write",null,D.f03,null,null,null,null,null,null,null,null,null)
D.cWm=w([D.bNW,A.ab,D.fwn],x.p)
D.eLk=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cWm,null)
D.fje=new B.x("Download picture",null,A.p9,null,null,null,null,null,null,null,null,null)
D.byS=new B.qi(A.ei,A.A,A.f,D.fje,null)
D.bz2=new B.dq(1,A.cn,D.byS,null)
D.d6v=w([L.amP,A.ab,D.bz2],x.p)
D.eLl=new B.cm(A.aO,A.b9,A.j,A.m,null,A.p,null,0,D.d6v,null)
D.bJu=new B.ae(A.Gg,22,A.c7,null,null,null)
D.fsK=new B.x("NGMY NEWS",null,I.a7h,null,null,null,null,null,null,null,null,null)
D.cO9=w([D.bJu,A.ab,D.fsK],x.p)
D.eLu=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cO9,null)
D.eLG=new B.p6(!1,!1,null,T.Vv,null,A.bY,null,null,null)
D.a6l=new B.jk([D.cm,D.dd,D.ui,D.HJ,D.uj,D.aFK],B.ax("jk<hz>"))
D.e2K={title:0,quote:1,closing:2,bio:3}
D.eMO=new B.eI(D.e2K,4,x.M)
D.e0R={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eMQ=new B.eI(D.e0R,5,x.M)
D.e2e={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a6m=new B.eI(D.e2e,8,x.M)
D.e1x={Design:0,Transitions:1,Insert:2}
D.eMU=new B.eI(D.e1x,3,x.M)
D.h1X=new B.jk([D.a4K],B.ax("jk<vU>"))
D.e1G={float3d:0,drift:1,pulse:2}
D.eMX=new B.eI(D.e1G,3,x.M)
D.aMY=new B.jk([D.HG,D.HH,D.HI],B.ax("jk<mv>"))
D.e0O={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aN0=new B.eI(D.e0O,14,x.M)
D.h1Y=new B.eI(A.i5,0,B.ax("eI<vU>"))
D.e1D={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.SH=new B.eI(D.e1D,4,x.M)
D.e0H={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aN3=new B.eI(D.e0H,30,x.M)
D.e1L={circle:0,triangle:1,hexagon:2,diamond:3}
D.eNc=new B.eI(D.e1L,4,x.M)
D.ePn=new B.ar(390,844)
D.eQ9=new B.a7(20,20,A6.Ki,null)
D.aNP=new B.a7(null,2.5,null,null)
D.eQj=new B.a7(18,18,A6.Ki,null)
D.bO_=new B.ae(A.iY,19,A.c,null,null,null)
D.eQu=new B.a7(38,38,D.bO_,null)
D.bMi=new B.ae(A.yr,22,A.c,null,null,null)
D.eQw=new B.a7(40,40,D.bMi,null)
D.eR4=new B.hM(2,10,10,1.15,null)
D.aNX=new B.hM(2,16,14,0.62,null)
D.buQ=new B.Q(32,30,32,40)
D.b7q=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bHt=new B.ae(A.pS,56,D.b7q,null,null,null)
D.af4=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f20=new B.G(!0,D.af4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpQ=new B.x("Your books will live here.",null,D.f20,null,A.L,null,null,null,null,null,null,null)
D.cZ7=w([D.bHt,A.S,D.fpQ],x.p)
D.bm0=new B.fl(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cZ7,null)
D.e87=new B.D(D.buQ,D.bm0,null)
D.eRp=new B.m7(D.e87,null)
D.fpN=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eRH=new B.b1(D.fpN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fnU=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eRI=new B.b1(D.fnU,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsN=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eRR=new B.b1(D.fsN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fti=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eS5=new B.b1(D.fti,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fmA=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eSi=new B.b1(D.fmA,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fAe=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eSB=new B.b1(D.fAe,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxq=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eSM=new B.b1(D.fxq,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftq=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eTs=new B.b1(D.ftq,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhx=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eTI=new B.b1(D.fhx,null,null,null,null,null,null,null,A.im,null,null,null,null,A.pI,!1,null,null,null,A.r,null)
D.fjm=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eU_=new B.b1(D.fjm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fpu=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eU1=new B.b1(D.fpu,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fpa=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eU2=new B.b1(D.fpa,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvp=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eU3=new B.b1(D.fvp,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fdJ=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eUc=new B.b1(D.fdJ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fkv=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eUz=new B.b1(D.fkv,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fz0=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eUB=new B.b1(D.fz0,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fyy=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eUF=new B.b1(D.fyy,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fcJ=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eUH=new B.b1(D.fcJ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuy=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eUQ=new B.b1(D.fuy,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fy9=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eV4=new B.b1(D.fy9,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fy0=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eV6=new B.b1(D.fy0,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fcB=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eVc=new B.b1(D.fcB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fgy=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eVE=new B.b1(D.fgy,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxd=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eVP=new B.b1(D.fxd,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fgm=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eW3=new B.b1(D.fgm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bei=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cMW=w([A.ir,A.oA,D.bei,D.ac2,A.ir],x.O)
D.eWr=new B.fT(A.A,0,6.283185307179586,A.x,D.cMW,null,null)
D.cVz=w([A.bL,A.bZ,A.hH,D.AC,A.bL],x.O)
D.aOw=new B.fT(A.A,0,6.283185307179586,A.x,D.cVz,null,null)
D.d8b=w([A.bW,A.bt,A.b8,A.b2,A.c7,A.bW],x.O)
D.eWw=new B.fT(A.A,0,6.283185307179586,A.x,D.d8b,null,null)
D.cOX=w([A.pG,A.oB,A.Aq,A.ir,A.pG],x.O)
D.eWx=new B.fT(A.A,0,6.283185307179586,A.x,D.cOX,null,null)
D.d85=w([A.aQ,A.bJ,A.aL,A.ak,A.aQ],x.O)
D.eWy=new B.fT(A.A,0,6.283185307179586,A.x,D.d85,null,null)
D.dft=w([A.bu,A.b8,A.bt,A.bW,A.bu],x.O)
D.eWA=new B.fT(A.A,0,6.283185307179586,A.x,D.dft,null,null)
D.beA=new B.w(1,0,1,1,A.t)
D.b8D=new B.w(1,1,0,1,A.t)
D.dbL=w([A.Ee,A.adV,I.acP,D.beA,I.add,D.b8D,A.Ee],x.O)
D.eWB=new B.fT(A.A,0,6.283185307179586,A.x,D.dbL,null,null)
D.eWQ=new C.avh(2,"immersiveSticky")
D.eWR=new C.avh(3,"edgeToEdge")
D.eWS=new C.avh(4,"manual")
D.eZh=new B.G(!0,A.ov,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aP2=new B.G(!0,A.f4,null,null,null,null,12.5,A.N,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZQ=new B.G(!0,E.n0,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0k=new B.G(!0,A.ad,null,null,null,null,13,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1i=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1s=new B.G(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1N=new B.G(!0,A.eA,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f39=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3i=new B.G(!0,A.jd,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3w=new B.ry(!0,A.I1,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4_=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4C=new B.G(!0,A.jc,null,null,null,null,11.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5_=new B.G(!0,A.aA,null,null,null,null,12.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e9A=new B.iP(1,1,0.7568627450980392,0.027450980392156862)
D.f53=new B.ry(!0,D.e9A,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae1=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aPL=new B.G(!0,D.ae1,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5b=new B.G(!0,D.af4,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5c=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPN=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5P=new B.ry(!0,A.p3,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f65=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6C=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6E=new B.G(!0,D.ae1,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.J0=new B.G(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f76=new B.G(!0,A.bZ,null,null,null,null,11.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7e=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7h=new B.G(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7y=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.avK,null,null,null)
D.f7A=new B.G(!0,A.cf,null,null,null,null,null,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7C=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7P=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f80=new B.G(!0,A.dv,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8x=new B.G(!0,A.aS,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8G=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8U=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQp=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQr=new B.G(!0,A.c1,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bjH=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.faC=new B.G(!0,D.bjH,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQz=new B.G(!0,E.n0,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb6=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fb9=new B.G(!0,O.lf,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4d=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcn=new B.x("NEW",null,D.f4d,null,null,null,null,null,null,null,null,null)
D.fcE=new B.x("Hati ya Kuhowesha",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fd5=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fdp=new B.x("Scrollable PDF on this slide",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fe8=new B.x("Big quote mark",null,A.iI,null,null,null,null,null,null,null,null,null)
D.feb=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fem=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.feO=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.feQ=new B.x("How many slides?",null,A.hs,null,null,null,null,null,null,null,null,null)
D.ffo=new B.x("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f06=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffK=new B.x("Luxury FX",null,D.f06,null,null,null,null,null,null,null,null,null)
D.fg6=new B.x("Font",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fgh=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fgn=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.faa=new B.G(!0,A.bJ,null,null,null,null,12,A.N,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgv=new B.x("Example  GA847",null,D.faa,null,null,null,null,null,null,null,null,null)
D.fgV=new B.x("Design shapes",null,A.iI,null,null,null,null,null,null,null,null,null)
D.fh3=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fh7=new B.x("Non-stop (loop)",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fhl=new B.x("Hati ya Kuhoweya",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fhE=new B.x("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.fi5=new B.x("Add your picture",null,A.jM,null,null,null,null,null,null,null,null,null)
D.f3x=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fi6=new B.x("Enter document code",null,D.f3x,null,A.L,null,null,null,null,null,null,null)
D.fi7=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fic=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.f18=new B.G(!0,E.n0,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fix=new B.x("Delete this book?",null,D.f18,null,A.L,null,null,null,null,null,null,null)
D.f5F=new B.G(!0,E.n0,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjo=new B.x("Your library",null,D.f5F,null,null,null,null,null,null,null,null,null)
D.fjt=new B.x("Delete",null,A.aPF,null,null,null,null,null,null,null,null,null)
D.fjv=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.Df,null,null,null,null,null,null,null,null,null)
D.fjG=new B.x("Element flies in",null,A.aPR,null,null,null,null,null,null,null,null,null)
D.TL=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fk3=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fkn=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fkr=new B.x("Cancel",null,E.aQ1,null,null,null,null,null,null,null,null,null)
D.fku=new B.x("The lines and circles that come with the design",null,A.hf,null,null,null,null,null,null,null,null,null)
D.f91=new B.G(!0,A.fT,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkV=new B.x("DOCUMENT CODE",null,D.f91,null,null,null,null,null,null,null,null,null)
D.flJ=new B.x("Quotes",null,G.a7U,null,null,null,null,null,null,null,null,null)
D.f2X=new B.G(!0,O.lf,null,null,null,null,null,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flR=new B.x("Add a picture",null,D.f2X,null,null,null,null,null,null,null,null,null)
D.flZ=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a7A,null,A.L,null,null,null,null,null,null,null)
D.fm2=new B.x("Look & feel",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fm7=new B.x("Rings",null,A.hT,null,null,null,null,null,null,null,null,null)
D.fmd=new B.x("W",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fmn=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fmG=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.Tx,null,A.L,null,null,null,null,null,null,null)
D.fmI=new B.x("Write your book",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fnr=new B.x("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fnG=new B.x("Malipo ya Awamu ya Mahari",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f3m=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnV=new B.x("Create with AI",null,D.f3m,null,A.L,null,null,null,null,null,null,null)
D.foo=new B.x("Apply look",null,A.hT,null,null,null,null,null,null,null,null,null)
D.f44=new B.G(!0,A.eu,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpc=new B.x("Type your presentation below",null,D.f44,null,A.L,null,null,null,null,null,null,null)
D.fpf=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,I.aQC,null,A.L,null,null,null,null,null,null,null)
D.fph=new B.x("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f_6=new B.G(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpo=new B.x("Done",null,D.f_6,null,null,null,null,null,null,null,null,null)
D.fpJ=new B.x("Delete",null,A.nu,null,null,null,null,null,null,null,null,null)
D.fpS=new B.x("Hati ya Kiapo cha Uongozi",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f2i=new B.G(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqK=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.f2i,null,A.L,null,null,null,null,null,null,null)
D.fr5=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.frb=new B.x("Layout",null,A.TD,null,null,null,null,null,null,null,null,null)
D.frO=new B.x("Print",null,A.cy,null,null,null,null,null,null,null,null,null)
D.frT=new B.x("X",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fsr=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.De,null,null,null,null,null,null,null,null,null)
D.fsZ=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fta=new B.x("Hati ya Kuhowa",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ftc=new B.x("Choose a class template",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fte=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.ftk=new B.x("Download the newspaper picture",null,A.cy,null,null,null,null,null,null,null,null,null)
D.ftw=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.ftD=new B.x("Done",null,A.aQo,null,null,null,null,null,null,null,null,null)
D.ftN=new B.x("Ending celebration",null,A.dr,null,null,null,null,null,null,null,null,null)
D.ftO=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fu2=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.IR,null,null,null,null,null,null,null,null,null)
D.fuY=new B.x("Export presentation",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fuZ=new B.x("What would you like to do?",null,D.aPL,null,null,null,null,null,null,null,null,null)
D.fv2=new B.x("Delete",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fvx=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fvB=new B.x("Hati (Documents)",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fvO=new B.x("Done",null,A.l7,null,null,null,null,null,null,null,null,null)
D.fa0=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvT=new B.x("Delete presentation?",null,D.fa0,null,A.L,null,null,null,null,null,null,null)
D.fwa=new B.x("After the last slide it starts again from the first",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fwl=new B.x("\ud83c\udf33",null,A.IV,null,A.L,null,null,null,null,null,null,null)
D.fwD=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fwK=new B.x("Transfer document",null,A.pb,null,null,null,null,null,null,null,null,null)
D.fwV=new B.x("Add to the slides",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fxh=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fxw=new B.x("Make a book",null,K.aPj,null,null,null,null,null,null,null,null,null)
D.fxA=new B.x("Books",null,A.cy,null,null,null,null,null,null,null,null,null)
D.f2Q=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxB=new B.x("Keep this page open until it finishes.",null,D.f2Q,null,null,null,null,null,null,null,null,null)
D.fxE=new B.x("Making your video",null,A.dr,null,null,null,null,null,null,null,null,null)
D.fxJ=new B.x("LANGUAGE",null,H.J_,null,null,null,null,null,null,null,null,null)
D.fxQ=new B.x("Use this ending",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fxY=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fy_=new B.x("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fyf=new B.x("Delete from the database?",null,A.jM,null,null,null,null,null,null,null,null,null)
D.fyg=new B.x("H",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fyE=new B.x("NGMY Quotes",null,A.dr,null,null,null,null,null,null,null,null,null)
D.fz5=new B.x("Cover",null,D.aQz,null,null,null,null,null,null,null,null,null)
D.fz9=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fza=new B.x("Each page becomes its own slide you can present",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fzw=new B.x("Y",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fzH=new B.x("Crop the picture",null,A.l7,null,null,null,null,null,null,null,null,null)
D.fzN=new B.x("Edit text",null,A.IW,null,null,null,null,null,null,null,null,null)
D.fC0=B.dR("a83")
D.Dr=new C.awA(0,"none")
D.aTG=new C.awA(1,"zipCrypto")
D.aTH=new C.awA(2,"aes")
D.fRX=new F.Pb("","",null)
D.fT2=new C.bbJ(null)
D.fU9=new C.Zh(null)
D.fVI=new C.acY(null)
D.fVK=new C.aDM(null)
D.fYv=new C.a_w(null)
D.fYM=new C.a02(null)
D.fZ4=new C.btk(null)})();(function staticFields(){$.hcr=null
$.hcs=null
$.hct=null
$.hcu=null
$.fVt=B.v0("_lastQuoRemDigits")
$.fVu=B.v0("_lastQuoRemUsed")
$.awW=B.v0("_lastRemUsed")
$.fVv=B.v0("_lastRem_nsh")
$.q5=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6T=B.T(x.N,x.I)
$.fT_=!1
$.hhf=B.T(B.ax("kS"),x.N)
$.hhs=B.T(B.ax("kS"),x.E)
$.hfs=!1
$.byY="q"
$.Q7=0
$.Ct=B.T(x.N,B.ax("ai<zn>"))
$.hfP=!1
$.fX3=!1
$.hm4=null
$.hQh=B.T(x.N,B.ax("az<n?>"))
$.Kd=""
$.j0=0
$.h9c=function(){var w=x.N
return B.T(w,w)}()
$.h9b=B.T(x.N,x.R)
$.fXo=!1
$.afF=B.T(x.N,x.E)
$.fYb=0
$.bjO=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iev","CP",()=>C.b9e(0))
w($,"iet","a2g",()=>C.b9e(1))
w($,"ieu","hpH",()=>C.b9e(2))
w($,"ies","h1_",()=>$.a2g().v_(0))
w($,"ieq","hpF",()=>C.b9e(1e4))
w($,"ier","hpG",()=>B.E2(8))
w($,"iai","hnI",()=>B.E2(0))
w($,"iaq","hnM",()=>B.E2(0))
w($,"iap","hnL",()=>B.bXK(0))
w($,"iia","hrH",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a3A.gdK(D.a3A),v=v.gaf(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"iiB","bDt",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mS(new C.fDP(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mS(new C.fDQ(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mS(new C.fDR(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mS(new C.fE1(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mS(new C.fE6(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mS(new C.fE7(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mS(new C.fE8(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mS(new C.fE9(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mS(new C.fEa(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mS(new C.fEb(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mS(new C.fEc(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mS(new C.fDS(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mS(new C.fDT(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mS(new C.fDU(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mS(new C.fDV(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mS(new C.fDW(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mS(new C.fDX(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mS(new C.fDY(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mS(new C.fDZ(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mS(new C.fE_(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mS(new C.fE0(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mS(new C.fE2(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mS(new C.fE3(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mS(new C.fE4(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mS(new C.fE5(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<Et>"))})
w($,"iid","hrJ",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["Y13wjb6S8Y8j799onVXPs+W796g="]=a.current})($__dart_deferred_initializers__);