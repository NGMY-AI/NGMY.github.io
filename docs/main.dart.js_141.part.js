((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tK(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fWk(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Ju(d){var w
if(d===0)return $.CQ()
if(d===1)return $.a2h()
if(d===2)return $.hqx()
if(Math.abs(d)<4294967296)return C.b9h(A.o.N(d))
w=C.hLc(d)
return w},
b9h(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tK(4,w)
return new C.nR(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tK(1,w)
return new C.nR(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tK(2,w)
return new C.nR(v===0?!1:s,w,v)}v=A.o.an(A.o.gajD(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tK(v,w)
return new C.nR(v===0?!1:s,w,v)},
hLc(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CQ()
w=$.hqw()
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
if(s<0)p=q.mr(0,-s)
else p=s>0?q.dW(0,s):q
return p},
fWl(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hdm(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dW(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fF(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dW(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hdh(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.E(f,16)===0)return C.fWl(d,e,s,g)
w=e+s+1
C.hdm(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hLf(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dW(1,r)-1,o=A.o.fF(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dW(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fF(u,r)}w&2&&B.aj(g)
g[n]=o},
cEg(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hLd(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b9i(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
hdn(d,e,f,g,h,i){var w,v,u,t,s,r
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
hLe(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e5((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nR:function nR(d,e,f){this.a=d
this.b=e
this.c=f},
cEh:function cEh(){},
cEi:function cEi(){},
cEj:function cEj(d,e){this.a=d
this.b=e},
cEk:function cEk(d){this.a=d},
aQN:function aQN(d,e){this.a=d
this.b=e},
h3d(d,e,f){var w=new C.Rt(d,A.o.an(Date.now(),1000),e)
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
bH1:function bH1(d){this.a=d
this.c=this.b=0},
htK(){return new C.bFo()},
bFo:function bFo(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cwr:function cwr(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hKV(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcW2(d)))
v=f*2+2
u=C.haZ(C.hb0(),64)
t=new C.cgg(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cgh(e,1000,v)
s=new Uint8Array(v)
return A.aH.dq(s,0,t.cJv(w,0,s,0))},
cwp:function cwp(d,e){this.c=d
this.d=e},
awC:function awC(d,e){this.a=d
this.b=e},
cws:function cws(d,e,f,g){var _=this
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
b7Z:function b7Z(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cwq:function cwq(){this.a=$},
hcM(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
htt(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bDZ:function bDZ(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
h0V(d,e){e&=31
return(d&$.q5[e])<<e>>>0},
np(d,e){e&=31
return(d>>>e|C.h0V(d,32-e))>>>0},
hb_(d){var w,v=new C.ask()
if(B.iI(d))v.aJA(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hb0(){var w=C.hb_(0),v=new Uint8Array(4),u=x.S
u=new C.cgi(w,v,A.DV,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lB(0)
return u},
haZ(d,e){var w=new C.cge(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cgd:function cgd(){},
cgh:function cgh(d,e,f){this.a=d
this.b=e
this.c=f},
cgb:function cgb(){},
asj:function asj(d){this.a=d},
cgg:function cgg(d){this.a=$
this.b=d
this.c=$},
cgc:function cgc(){},
cga:function cga(){},
ask:function ask(){this.b=this.a=$},
cgf:function cgf(){},
cgi:function cgi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cge:function cge(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cg9:function cg9(){},
cg8:function cg8(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bNi:function bNi(){},
bNj:function bNj(d){this.a=d},
hO9(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9x:function b9x(){},
cqg:function cqg(){},
bOb:function bOb(d,e){this.a=d
this.b=!1
this.c=e},
bOc:function bOc(){},
hX4(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avg(d){var w=0,v=B.j(x.H),u
var $async$avg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eXi?2:4
break
case 2:w=5
return B.b(A.k9.fZ("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$avg)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k9.fZ("SystemChrome.setEnabledSystemUIOverlays",C.hX4(null),u),$async$avg)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avg,v)},
avj:function avj(d,e){this.a=d
this.b=e},
a84:function a84(d){this.a=d},
fSj(d,e){return new C.aVf(e,d,null)},
aVf:function aVf(d,e,f){this.e=d
this.c=e
this.a=f},
aAa:function aAa(d,e,f,g,h){var _=this
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
hZI(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fsb(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
fsb:function fsb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
an9(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$an9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agy("ngmy_menu_lib_v1_zzslides_index",A.bH),$async$an9)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d9(s,x.f)
t=B.cF(t,new C.bYR(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b2(r,new C.bYS())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an9,v)},
anb(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$anb=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an9(),$async$anb)
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
return B.b(B.no("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$anb)
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
return B.b(B.no("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],t,q),null),$async$anb)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$anb,v)},
bYT(d){return C.hzb(d)},
hzb(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bYT=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agy("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hL),$async$bYT)
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
return B.i($async$bYT,v)},
ana(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$ana=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an9(),$async$ana)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nq(r,new C.bYU(d))
w=4
return B.b(B.no("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],x.N,x.z),null),$async$ana)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOQ("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$ana)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ana,v)},
bYR:function bYR(){},
bYS:function bYS(){},
bYU:function bYU(d){this.a=d},
i8E(d,e,f){return B.bR(A.K,null,new C.fIa(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fIa:function fIa(d,e,f){this.a=d
this.b=e
this.c=f},
a0w:function a0w(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIz:function aIz(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f5S:function f5S(d,e){this.a=d
this.b=e},
f5W:function f5W(d){this.a=d},
f5X:function f5X(d){this.a=d},
f5Y:function f5Y(d,e,f){this.a=d
this.b=e
this.c=f},
f5T:function f5T(d){this.a=d},
f5U:function f5U(d){this.a=d},
f5V:function f5V(d,e){this.a=d
this.b=e},
f5N:function f5N(d){this.a=d},
f5L:function f5L(d){this.a=d},
f5M:function f5M(d){this.a=d},
f5O:function f5O(d){this.a=d},
f5P:function f5P(d){this.a=d},
f61:function f61(d,e){this.a=d
this.b=e},
f60:function f60(d,e){this.a=d
this.b=e},
f5R:function f5R(d,e,f){this.a=d
this.b=e
this.c=f},
f5Q:function f5Q(d,e,f){this.a=d
this.b=e
this.c=f},
f5Z:function f5Z(d,e){this.a=d
this.b=e},
f6_:function f6_(d,e){this.a=d
this.b=e},
f64:function f64(d){this.a=d},
f65:function f65(d,e){this.a=d
this.b=e},
f63:function f63(d,e){this.a=d
this.b=e},
f62:function f62(){},
hfM(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aI(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cF(v,new C.fd7(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a_<J.E>")
v=B.C(new B.a_(v,new C.fd8(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1u(d){return C.i_Y(d)},
i_Y(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1u=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fuO(n)
t=4
j=m
i=C
w=7
return B.b(B.a23("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1u)
case 7:j.$1(i.hfM(f))
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
return B.b(B.aA(),$async$a1u)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hfM(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fdg(d),$async$a1u)
case 13:p=j.C(new i.a_(h,new g.fuM(f),o),o.k("J.E"))
A.d.b2(p,new C.fuN())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1u,v)},
ah9(d,e){return C.i8j(d,e)},
i8j(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ah9=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fHF(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.ah0("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah9)
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
return B.b(B.aA(),$async$ah9)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah9)
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
return B.i($async$ah9,v)},
fdg(d){return C.hPz(d)},
hPz(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fdg=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fdg)
case 7:r=f
q=r.t8("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
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
return B.i($async$fdg,v)},
afY(d,e){return C.hZA(d,e)},
hZA(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afY=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$afY)
case 6:s=g
r=B.aX(x.N)
q=s.t8("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h1(r,q)
J.ch(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("co.E"))
w=7
return B.b(s.ar("StringList","ngmy_books_deleted_v1_"+r,q),$async$afY)
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
return B.b(C.a1u(d),$async$afY)
case 8:n=g
J.nq(n,new C.frS(e))
w=9
return B.b(C.ah9(d,n),$async$afY)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afY,v)},
i8J(d,e){return B.a6(d,!1).cl(B.e8(new C.fIw(e),!0,null,x.H))},
hLh(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cFD())},
oh:function oh(d,e,f){this.a=d
this.b=e
this.c=f},
fd7:function fd7(){},
fd8:function fd8(){},
fuO:function fuO(d){this.a=d},
fuM:function fuM(d){this.a=d},
fuN:function fuN(){},
fHF:function fHF(){},
frS:function frS(d){this.a=d},
fIw:function fIw(d){this.a=d},
Yf:function Yf(d,e){this.c=d
this.a=e},
ax9:function ax9(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cFD:function cFD(){},
cFF:function cFF(d,e){this.a=d
this.b=e},
cFI:function cFI(d){this.a=d},
cFJ:function cFJ(d){this.a=d},
cFH:function cFH(){},
cFK:function cFK(d,e){this.a=d
this.b=e},
cFG:function cFG(d){this.a=d},
cFL:function cFL(){},
cFE:function cFE(d,e){this.a=d
this.b=e},
cFM:function cFM(){},
cFz:function cFz(d){this.a=d},
cFx:function cFx(d){this.a=d},
cFy:function cFy(d){this.a=d},
cFA:function cFA(d,e){this.a=d
this.b=e},
cFw:function cFw(d){this.a=d},
cFv:function cFv(d){this.a=d},
cFt:function cFt(d,e){this.a=d
this.b=e},
cFu:function cFu(d){this.a=d},
cFC:function cFC(){},
cFB:function cFB(d){this.a=d},
cFs:function cFs(d,e){this.a=d
this.b=e},
cFr:function cFr(d,e){this.a=d
this.b=e},
cFq:function cFq(d,e){this.a=d
this.b=e},
cFN:function cFN(d){this.a=d},
Yd:function Yd(d,e,f){this.c=d
this.d=e
this.a=f},
aEr:function aEr(d,e,f){this.a=d
this.b=e
this.c=f},
ax5:function ax5(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cEU:function cEU(d){this.a=d},
cET:function cET(d){this.a=d},
cEW:function cEW(d,e,f){this.a=d
this.b=e
this.c=f},
cF3:function cF3(){},
cF4:function cF4(d){this.a=d},
cEX:function cEX(d,e,f){this.a=d
this.b=e
this.c=f},
cEV:function cEV(d,e){this.a=d
this.b=e},
cEZ:function cEZ(d,e){this.a=d
this.b=e},
cF_:function cF_(d,e){this.a=d
this.b=e},
cF0:function cF0(d,e){this.a=d
this.b=e},
cEY:function cEY(d){this.a=d},
cF2:function cF2(d){this.a=d},
cF1:function cF1(d,e){this.a=d
this.b=e},
cF9:function cF9(d){this.a=d},
cF5:function cF5(d,e){this.a=d
this.b=e},
cF6:function cF6(d,e){this.a=d
this.b=e},
cF7:function cF7(d,e){this.a=d
this.b=e},
cF8:function cF8(d,e){this.a=d
this.b=e},
ax7:function ax7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i2i(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bB(new C.fzk(),x.H).eL(new C.fzl())}}else if(s)C.hhe()}catch(t){}},
hhe(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eL(new C.fhw())}catch(u){}},
i2l(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fzk:function fzk(){},
fzl:function fzl(){},
fhw:function fhw(){},
hlQ(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gJ(A.a.ef(v,w,"").split(":"))},
hlN(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l2)return null
return A.a.b4(w,14)},
h_F(d){var w
if(d.b!==D.l2)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b4(w,21)},
i2L(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hlR(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i2G(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kW(0,f)
t=x.N
u=B.cF(u,new C.fAj(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kW(0,f),u=new B.Jt(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Ra(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Ra(A.a.b4(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i2E(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.b2(q,new C.fAi())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.K)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aPN(w,u,s,0)}return w},
i2I(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a3G:$.hsx(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gae(s);s.C();){w=s.gR(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hlO(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fe9(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
if(C.hlQ(q)===e)return q}return null},
i2J(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b4(v,u)
return A.d.gJ(D.Gy).a},
i2K(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adR(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adR(0,0,0)
v=C.fe9(b6,b0)
u=C.fe9(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i2I(b2,C.i2G(C.hlO(b2),v.r))
if(s.a!==0){u.r=C.i2E(C.hlO(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){l=C.hlQ(o[m])
if(l==null||l==="utangulizi")continue
r.L(0,l)}for(q=B.ea(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fe9(b6,n)
i=C.fe9(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gJ(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.K)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.K)(o),++m){d=o[m]
a0=C.h_F(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.K)(a1),++a7){a8=a1[a7]
if(C.hlN(a8)===a0||C.h_F(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QJ(a1,new C.fAp(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j1
$.j1=a9+1
A.d.L(a1,new C.eK(""+1000*a6+"_"+a9,D.l2,a2,a3,a4,a5,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,d.at,D.bf,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cm,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adR(k,t,e)},
i2F(d){var w=C.i2J(d)
if(d.w==="hati_kuhowa")return C.hla("",w)
return C.hl9("",w)},
fAj:function fAj(){},
fAi:function fAi(){},
fAp:function fAp(d){this.a=d},
hgY(){var w=new B.S(Date.now(),0,!1),v=new C.fgz()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
h_N(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fBh(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l2&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hm3(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fBh(d)
w=B.bi(u)
if(w==null)return!C.fBh(d)
return new B.S(Date.now(),0,!1).a7().cZ(w.a7().bR(18e9))},
i3q(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a7().ac()},
hDc(d){return A.a.i(d).toLowerCase()},
apk(d){return C.hDe(d)},
hDe(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$apk=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$apk)
case 7:r=f
p=r.t8("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.L(o,C.i6Y(),B.U(o).k("L<1,m>")).c_(0,new C.c8q())
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
return B.i($async$apk,v)},
apj(d,e){return C.hDd(d,e)},
hDd(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apj=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apk(d),$async$apj)
case 3:r=g
if(!J.ch(r,o)){w=1
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
apl(d,e){return C.hDf(d,e)},
hDf(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apl=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.apk(d),$async$apl)
case 3:r=g
if(!J.hF(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apl)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qe(r)),$async$apl)
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
return B.i($async$apl,v)},
UV(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UV=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fTO&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$UV)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aI(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jy(p),d=d.gae(d),a0=x.z;d.C();){n=d.gR(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.VC(B.a2(f.a(n.b),e,a0)))}$.a6U=o}}t=2
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
return B.b(B.tY("civic_hati_kiapo_uongozi",null,A.ee),$async$UV)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.jy(f.a(J.q(l,"byState"))),e=e.gae(e),d=x.z;e.C();){j=e.gR(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.VC(B.a2(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){f=o.d
f.toString
i=f
h=$.a6U.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbq())f=d===e.gbq()&&f.b<e.gcz()
else f=!0
f=!f}else f=!0
if(f)$.a6U.n(0,i.a,i.b)}w=20
return B.b(C.apm(),$async$UV)
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
case 16:case 9:$.fTO=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UV,v)},
apm(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apm=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$apm)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6U,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ag())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$apm)
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
return B.i($async$apm,v)},
aZG(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.UV(!1),$async$aZG)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6U.h(0,t)
r=s==null?null:s.hF()
if(r==null){u=null
w=1
break}u=C.bBw(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZG,v)},
a6V(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6V=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hF()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.K)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6U.n(0,d,o)
$.fTO=!0
w=3
return B.b(C.apm(),$async$a6V)
case 3:w=4
return B.b(B.c3(),$async$a6V)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6U,n=new B.cK(n,B.a3(n).k("cK<1,2>")).gae(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ag())}w=9
return B.b(B.no("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a7().ac()],e,x.z),null),$async$a6V)
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
return B.i($async$a6V,v)},
apn(d){var w=0,v=B.j(x.T),u,t,s
var $async$apn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hY().a5g(A.eH),$async$apn)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fl(),$async$apn)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZF(t,d),$async$apn)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apn,v)},
aZF(d,e){return C.hDg(d,e)},
hDg(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZF=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZF)
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
p=n.ib("media")
w=8
return B.b(p.wU(q,new Uint8Array(B.ce(d)),D.byT),$async$aZF)
case 8:n=p.Cy(q)
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
return B.i($async$aZF,v)},
Kl(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
ffP(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
fXP(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ep(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.cF,A.N,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
ffn(d,e,f,g){return C.ffP(0,0.002,D.fr,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fXQ(d,e,f,g,h,i,j,k){var w=C.cD()
return C.ep(A.qn,!1,j,A.aD,"marriage_field_"+d+":"+A.k.ab(g,3),4280640491,i,A.bn,A.a5,"",h,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
hgX(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gJ(A.a.ef(v,w,"").split(":"))},
bBw(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gJ(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.K)(t),++n){m=t[n]
l=C.hgX(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l2&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hF()}h=C.h_j(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Bx(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gJ(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.K)(w),++n){m=w[n]
l=C.hgX(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.l2&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bp(a1.z,new C.fzi(a2))}else A.d.bp(a1.z,new C.fzj())
A.d.L(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fBh(a0))a0.ax=a6.f.a7().ac()
return a0},
h_j(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fC4(D.a4H),l=C.cD(),k=x.u,j=B.a([C.ep(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bn,A.a5,"",1,C.cD(),m,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lu,1,0,0)],k),i=B.a([],k)
i.push(C.Kl("NGMY",A.L,236069181,52,A.bn,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Kl("TAREHE:",A.bg,o,16,A.bn,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fXP("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hgY()))
i.push(C.ffn(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Kl("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bn,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Kl("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.ffP(0,0.002,D.fr,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fXQ("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fXQ("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fXQ("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.ffP(268435456,0.175,D.bf,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Kl("VIDEO YA KIAPO",A.bg,o,10,A.bn,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ep(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bn,A.a5,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lu,0.77,0.115,0.492))
i.push(C.Kl("Rais Anayeapa:",A.bg,p,15,A.bn,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Kl("Jina:",A.bg,p,13,A.bn,A.N,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fXP("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.ffn(0.195,0.7130000000000001,0.62,n))
i.push(C.Kl("Sahihi:",A.bg,p,13,A.bn,A.N,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ep(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bn,A.a5,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,0.38,0.21500000000000002,0.73))
i.push(C.ffn(0.21500000000000002,0.795,0.38,n))
i.push(C.Kl("Tarehe:",A.bg,p,13,A.bn,A.N,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fXP("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hgY()))
i.push(C.ffn(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.ffP(0,0.032,D.bf,o,1,"state_box",0.72,0.14,0.875),C.Kl("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bn,A.N,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rr(4294967035,t,0,0,j,l,D.qb,"","",u,D.dd)
return C.Bx(t,t,t,t,D.oc,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ag8(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag8=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.U(D.eS7)
w=1
break}w=3
return B.b(C.UV(!0),$async$ag8)
case 3:w=4
return B.b(C.aZG(p),$async$ag8)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hm3(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bR(D.bcT,null,new C.fu9(p),f,!0,!0,!1,A.lv,!1,!1,x.N),$async$ag8)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cb(null,null,!0,null,new C.fua(),f,null,!0,!0,x.y),$async$ag8)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.h_j(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.h_j(p))
case 1:return B.h(u,v)}})
return B.i($async$ag8,v)},
fgz:function fgz(){},
c8q:function c8q(){},
fzi:function fzi(d){this.a=d},
fzj:function fzj(){},
fu9:function fu9(d){this.a=d},
fu7:function fu7(d){this.a=d},
fu8:function fu8(d){this.a=d},
fua:function fua(){},
fu5:function fu5(d){this.a=d},
fu6:function fu6(d){this.a=d},
apS:function apS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDd:function aDd(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e9b:function e9b(d){this.a=d},
e99:function e99(d){this.a=d},
e9a:function e9a(d){this.a=d},
e9c:function e9c(d){this.a=d},
e9d:function e9d(d){this.a=d},
wu(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",j,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
hgB(d,e,f){var w=4291404327
return B.a([C.q4(0,f,D.eL,w,2,"ring_l",f,d-f*0.42,e),C.q4(0,f,D.eL,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
feO(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q4(4294967288,f,D.eL,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q4(h,s,D.eL,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q4(h,f*0.46,D.eL,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q4(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
feN(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ep(h,!1,k,A.aD,i?u+A.k.ab(g,3)+":"+A.o.ab(j,1):u+A.k.ab(g,3),4280640491,j,A.cF,A.N,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,l,0,0,"",D.cm,D.cQ,g,e,f)},
byX(d,e,f,g){return C.q4(0,0.002,D.fr,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hgA(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q4(0,0.036,D.bf,h,1.4,"banner_box_"+d,w,v,e),C.wu(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hlP(){var w=new B.S(Date.now(),0,!1),v=new C.fAo()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
hgC(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wu(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.feN("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.byX(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wu("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bn,A.a5,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,s,t,g-0.004),C.byX(t,g+0.044,s,w)],x.u)},
agA(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dbH,D.chk,D.d4s,D.d6g],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.K)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gR(0)
if(u.a===d)return u}return null},
fX7(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fC4(d.d),v=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cD(),w,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,1,0,0)],x.u)
A.d.v(v,C.hRZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hRZ(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wu("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hgB(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hgB(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.feO(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.feO(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wu("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q4(0,0.062,D.eL,b1,1.6,"crest_o",0.11,0.445,0.012),C.q4(0,0.046,D.eL,b1,1,"crest_i",0.084,0.458,0.02),C.wu("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q4(0,0.002,D.fr,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q4(b9,0.016,D.l3,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q4(0,0.002,D.fr,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wu("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.feN("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hlP()),C.byX(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wu(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.q4(c0,0.0026,D.bf,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.q4(c3.e,0.138,D.bf,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.ep(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.82,3),b2,19,A.bn,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.bf,b3,2,c5,0,0,"",D.cm,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.q4(0,0.036,D.bf,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.ep(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.ab(r,3),b2,30,A.bn,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bf,b3,2,c7,0,0,"",D.cm,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hgA(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wu(c9,A.bg,b9,d0,A.N,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.feN("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.j1
$.j1=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.j1
$.j1=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eK(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bn,A.aD,c0,A.bg,a9,D.bf,b2,b3,2,0,!1,s,0,D.cm,0,"","","","","",!1,0),j,new C.eK(""+1000*f+"_"+e,D.f0,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bn,A.aD,b6,A.bg,a9,D.fr,0,b5,0.8,0,!1,g,0,D.cm,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.j1
$.j1=p+1
i=Date.now()
h=$.j1
$.j1=h+1
g=Date.now()
f=$.j1
$.j1=f+1
e=Date.now()
a3=$.j1
$.j1=a3+1
A.d.v(d,B.a([new C.eK(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bn,A.aD,b7,A.dM,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cm,0,"","","","","",!1,0),new C.eK(""+1000*i+"_"+h,D.f0,a1,a2,0.046,0.025875,"",24,A.a5,A.bn,A.aD,b6,A.bg,a9,D.bf,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cm,0,"","","","","",!1,0),new C.eK(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bn,A.aD,b7,A.L,a9,D.bf,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cm,0,"","","","","",!1,0),new C.eK(""+1000*e+"_"+a3,D.f0,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bn,A.aD,b6,A.bg,a9,D.bf,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cm,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hgA("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a4w||w===D.a4y||w===D.a4v||w===D.a4x){w=t-0.008
A.d.v(c2,C.feO(0.21,w,0.044,!0,b0))
A.d.v(c2,C.feO(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q4(0,a4,D.bf,c0,1.3,"wit_table_border",0.82,0.09,t),C.q4(c0,a4,D.bf,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q4(0,0.0022,D.fr,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wu("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wu("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hgC("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hgC("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q4(0,0.11,D.bf,c0,1.2,"mw_box",0.82,0.09,t),C.wu("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wu("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.feN("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.byX(0.215,p,0.3116,b5),C.wu("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.ep(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bn,A.a5,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,0.3161999999999999,0.5738,s-0.044),C.byX(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q4(0,0.032,D.bf,c0,1,"state_box",0.7,0.15,a8),C.wu("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.N,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i2H(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h_X(d.d),p=new C.fAk(s),o=new C.fAl(s),n=d.z,m=n===D.a4w||n===D.a4y||n===D.a4v||n===D.a4x,l=n===D.aET||n===D.a4z||n===D.aEU,k=B.bZ(0,B.fL(q,A.A,t,t,A.cj,A.bT,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a4z?26:16
i.push(new C.fAn().$1$size(w))}if(n===D.aEV)i.push(D.fwU)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hC,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.n(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aNU,p.$1$w(0.9),D.aNU,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b8j,t,n,w,t,t,A.n),t,t,t,t,A.aiu,t,t,t))
i.push(A.am)
i.push(new C.fAm(r).$1("NIMETOWE"))
i.push(A.h0)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.LY,new B.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.bC(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b7)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b0,A.r,B.a([k,new B.D(A.ah3,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hl9(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agA(e,t)
if(r==null)r=A.d.gJ(D.Gy)
w=C.cD()
v=C.rr(r.e,t,0,0,C.fX7(r,0.165,y.O,D.d6Q,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.qb,"","",s,D.dd)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bx(t,t,t,t,D.oc,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hla(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agA(e,t)
if(r==null)r=A.d.gJ(D.Gy)
w=C.cD()
v=C.rr(r.e,t,0,0,C.fX7(r,0.165,y.f,D.d2C,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.qb,"","",s,D.dd)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bx(t,t,t,t,D.oc,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCS(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCS=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fLY(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCS,v)},
ag9(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag9=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fud(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.L9,null,new C.fue(p),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$ag9)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(p).hF())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCS(d,"Hati ya Kuhowa",D.Gy),$async$ag9)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L_(d,"Tafuta jimbo\u2026","",A.k4,"Chagua jimbo"),$async$ag9)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hl9(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag9,v)},
aga(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aga=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a_<1>")
p=B.C(new B.a_(i,new C.fuh(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.L9,null,new C.fui(p),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$aga)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(p).hF())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCS(d,"Hati ya Kuhoweya",D.Gy),$async$aga)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L_(d,"Tafuta jimbo\u2026","",A.k4,"Chagua jimbo"),$async$aga)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hla(r,s))
case 1:return B.h(u,v)}})
return B.i($async$aga,v)},
agb(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$agb=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a_<1>")
m=B.C(new B.a_(i,new C.ful(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(D.L9,null,new C.fum(m),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$agb)
case 5:t=k
if(t==="continue"){f.$1(A.d.gJ(m).hF())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCS(d,"Malipo ya Awamu ya Mahari",D.Qo),$async$agb)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.L_(d,"Tafuta jimbo\u2026","",A.k4,"Chagua jimbo"),$async$agb)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agA(s,D.Qo)
if(q==null)q=A.d.gJ(D.Qo)
n=C.cD()
p=C.rr(q.e,null,0,0,C.fX7(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cYF,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.qb,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cD()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Bx(null,null,null,null,D.oc,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
xs:function xs(d,e){this.a=d
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
fAo:function fAo(){},
fAk:function fAk(d){this.a=d},
fAm:function fAm(d){this.a=d},
fAn:function fAn(){},
fAl:function fAl(d){this.a=d},
fLY:function fLY(d,e){this.a=d
this.b=e},
acW:function acW(d,e,f){this.c=d
this.d=e
this.a=f},
dXU:function dXU(d,e,f){this.a=d
this.b=e
this.c=f},
dXT:function dXT(d,e){this.a=d
this.b=e},
dXS:function dXS(d,e){this.a=d
this.b=e},
ack:function ack(d,e,f){this.c=d
this.d=e
this.a=f},
fud:function fud(){},
fue:function fue(d){this.a=d},
fub:function fub(d){this.a=d},
fuc:function fuc(d){this.a=d},
fuh:function fuh(){},
fui:function fui(d){this.a=d},
fuf:function fuf(d){this.a=d},
fug:function fug(d){this.a=d},
ful:function ful(){},
fum:function fum(d){this.a=d},
fuj:function fuj(d){this.a=d},
fuk:function fuk(d){this.a=d},
Ko(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.ep(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,k,l,m)},
Cx(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
hhh(d,e,f){return C.Cx(0,0.002,D.fr,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bz6(d,e,f,g,h){return B.a([C.Cx(4294967288,0.032,D.bf,4291404327,1.15,"pill_"+d,g,f,e),C.Ko(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fXU(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cx(0,0.002,D.fr,g,1,"orn_l_"+t,u,d,v),C.Cx(h,0.016,D.l3,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cx(0,0.002,D.fr,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0S(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Ko(d,A.bg,j,i,A.N,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.ep(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.ab(t,3),4280640491,i,A.cF,A.N,"",0.02,s,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,t,u,g-0.002),C.hhh(u,g+0.018,t)],x.u)},
hhi(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cx(h,0.028,D.bf,h,0,"chv_"+d,g,e,f),C.Cx(w,0.024,D.l3,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cx(w,0.024,D.l3,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Ko(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bz5(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Ko("Sahihi:",A.bg,h,10,A.N,0.02,"is_"+d,0.12,e,f),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bn,A.a5,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,v,w,f-0.006),C.hhh(w,f+0.016,v)],x.u)},
h_Y(d){var w,v
for(w=0;w<19;++w){v=D.QB[w]
if(v.a===d)return v}return null},
i4Y(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agA(A.a.b4(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agA(A.a.b4(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b4(k,18)
w=C.agA(u,D.Qo)
v=w==null?l:w.d
if(v==null){w=C.agA(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h_Y(A.a.b4(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hi6.a9(0)
$.hij.a9(0)
t=C.fC4(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.K)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h11(d){var w=0,v=B.j(x.T),u
var $async$h11=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bR(A.K,null,new C.fNq(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h11,v)},
xv:function xv(d,e){this.a=d
this.b=e},
nE:function nE(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
biB:function biB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fNq:function fNq(){},
acZ:function acZ(d){this.a=d},
eeq:function eeq(d,e){this.a=d
this.b=e},
eep:function eep(d){this.a=d},
eeo:function eeo(d,e){this.a=d
this.b=e},
aeF:function aeF(d,e,f){this.c=d
this.d=e
this.a=f},
h_X(d){return $.hij.cg(0,d,new C.fC6(d))},
fC4(d){return $.hi6.cg(0,d,new C.fC5(d))},
fz(d){return B.fRn(d>>>16&255,d>>>8&255,d&255,255)},
hV1(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hjo(4294570461,4293910718,4284234270,u)
case 1:return C.hjo(4294635750,4293975240,t,4292912216)
case 2:w=C.fdo(s,4294505966,r)
C.byR(w,14,16,p)
C.kt(w,8,9,464,836,u,1.2)
C.Ct(w,2,2,1,1,u,10)
C.Ct(w,478,2,-1,1,u,10)
C.Ct(w,2,852,1,-1,u,10)
C.Ct(w,478,852,-1,-1,u,10)
return w
case 3:return C.fdo(4294966515,4294373082,4289102906)
case 4:return C.hPO(C.fdo(4294376440,4293653998,4290287194))
case 5:w=C.fdo(4294965238,4294437098,4288444980)
C.byR(w,14,16,4283043359)
C.kt(w,6,7,468,840,u,1)
C.kt(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,n,4294175448)
C.rN(v,n)
C.kt(v,24,24,432,806,4286209070,1)
C.a0G(v,12,12,468,12,o,3,20)
C.a0G(v,12,842,468,842,o,3,20)
C.a0G(v,12,12,12,842,o,3,20)
C.a0G(v,468,12,468,842,o,3,20)
return v
case 7:return C.hNQ(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,m,4293911504)
C.rN(v,m)
C.kt(v,28,28,424,798,l,1)
C.fmk(v,28,28,l,k)
C.fmk(v,452,28,l,k)
C.fmk(v,28,826,l,k)
C.fmk(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,j,4294111986)
C.rN(v,j)
C.kt(v,18,18,444,818,4292401368,0.7)
B.iK(v,!0,C.fz(p),0,13,0,853)
return v
case 10:return C.hRL(i,4294173372)
case 11:return C.hSQ(4294439140,4293449662)
case 12:return C.hNI(h,4294239432)
case 13:return C.hSh(4294244340,4293193448)
case 14:return C.hWC(4294505710,4293780694)
case 15:return C.fcm(4294966259,4294439138,o,p,q)
case 16:return C.fcm(4294966776,4294178544,o,g,g)
case 17:return C.fcm(4294965493,4294504170,o,4286200650,q)
case 18:return C.fcm(4294966519,4294373862,o,p,p)
case 19:return C.hQT()
case 20:return C.hQU()
case 21:v=B.hn(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,h,4293976768)
C.rN(v,h)
C.byR(v,14,16,p)
B.iK(v,!0,C.fz(u),4,475,4,9)
B.iK(v,!0,C.fz(u),4,475,844,849)
B.iK(v,!0,C.fz(u),4,9,4,849)
B.iK(v,!0,C.fz(u),470,475,4,849)
C.a0G(v,10,12,470,12,u,2,16)
C.a0G(v,10,842,470,842,u,2,16)
C.a0G(v,10,12,10,842,u,2,18)
C.a0G(v,470,12,470,842,u,2,18)
C.Ct(v,2,2,1,1,t,10)
C.Ct(v,478,2,-1,1,t,10)
C.Ct(v,2,852,1,-1,t,10)
C.Ct(v,478,852,-1,-1,t,10)
C.kt(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hn(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,s,4294438872)
C.rN(v,s)
C.kt(v,14,16,452,822,o,2.2)
C.kt(v,22,24,436,806,o,1)
C.fZd(v,!1,!1,o,p,p,36,14,16)
C.kJ(v,240,20,7,o,!0)
C.kJ(v,240,834,7,o,!0)
C.kJ(v,18,427,7,o,!0)
C.kJ(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,i,4293910712)
C.rN(v,i)
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
case 24:v=B.hn(q,q,A.cc,0,A.e3,854,q,0,3,q,A.cc,480,!1)
C.yk(v,e,4294174404)
C.rN(v,e)
C.byR(v,14,16,p)
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
yk(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
rN(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eM()
n.dB(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dS(u,t,o)
if(s==null)s=new B.iF()
v=A.o.D(A.k.N(s.gb6(s))-3,0,255)
r=A.o.D(A.k.N(s.gbb())-3,0,255)
q=A.o.D(A.k.N(s.gb9(s))-2,0,255)
p=d.a
if(p!=null)p.jJ(u,t,v,r,q,255)}},
kt(d,e,f,g,h,i,j){var w,v=null,u=C.fz(i),t=e+g
B.kL(d,!0,A.dc,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kL(d,!0,A.dc,u,v,A.cX,j,e,t,w,w)
B.kL(d,!0,A.dc,u,v,A.cX,j,e,e,f,w)
B.kL(d,!0,A.dc,u,v,A.cX,j,t,t,f,w)},
Ct(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kL(d,!0,A.dc,C.fz(i),u,A.cX,2,e,e+g*j,f,f)
B.kL(d,!0,A.dc,C.fz(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kL(d,!0,A.dc,C.fz(i),u,A.cX,1,w,e+g*t,v,v)
B.kL(d,!0,A.dc,C.fz(i),u,A.cX,1,w,w,v,f+h*t)},
hjo(d,e,f,g){var w=null,v=B.hn(w,w,A.cc,0,A.e3,854,w,0,3,w,A.cc,480,!1)
C.yk(v,d,e)
C.rN(v,d)
B.iK(v,!0,C.fz(f),0,479,0,28)
B.iK(v,!0,C.fz(f),0,479,826,853)
B.iK(v,!0,C.fz(f),0,28,0,853)
B.iK(v,!0,C.fz(f),452,479,0,853)
C.kt(v,5,5,470,844,g,1.1)
C.kt(v,28,28,424,798,g,1.6)
C.Ct(v,2,2,1,1,g,11)
C.Ct(v,478,2,-1,1,g,11)
C.Ct(v,2,852,1,-1,g,11)
C.Ct(v,478,852,-1,-1,g,11)
return v},
fdo(d,e,f){var w=null,v=B.hn(w,w,A.cc,0,A.e3,854,w,0,3,w,A.cc,480,!1)
C.yk(v,d,e)
C.rN(v,d)
C.kt(v,14,16,452,822,f,1.6)
C.kt(v,20,22,440,810,f,0.8)
return v},
byR(d,e,f,g){var w,v=C.fz(g)
B.iK(d,!0,v,0,479,0,f-1)
w=854-f
B.iK(d,!0,v,0,479,w,853);--w
B.iK(d,!0,v,0,e-1,f,w)
B.iK(d,!0,v,480-e,479,f,w)},
hPO(d){var w,v,u=4291404327
C.byR(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kJ(d,w,8,3,u,!0)
C.kJ(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kJ(d,7,v,3,u,!0)
C.kJ(d,473,v,3,u,!0)}return d},
fpn(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jf(e,f),new B.jf(e+g*n,f),new B.jf(e,f+h*n)],t)
B.a1r(d,C.fz(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jf(s,u),new B.jf(e+g*v,u),new B.jf(s,f+h*v)],t)
B.a1r(d,C.fz(k),t)
t=A.k.V(n*0.39)
C.kJ(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kJ(d,e+g*t,f+h*3,4,k,!0)
C.kJ(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kJ(d,e+g*t,f,5,k,!0)
C.kJ(d,e,f+h*t,5,k,!0)}},
fZd(d,e,f,g,h,i,j,k,l){var w,v
C.fpn(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fpn(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fpn(d,k,v,1,-1,e,f,g,h,i,j)
C.fpn(d,w,v,-1,-1,e,f,g,h,i,j)},
a0G(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l1(d,!0,A.dc,new B.qX(p),null,A.cX,j,r,q)}},
fot(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kL(d,!0,A.dc,new B.qX(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kL(d,!0,A.dc,new B.qX(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hNQ(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cc,0,A.e3,854,o,0,3,o,A.cc,480,!1)
C.yk(n,d,e)
C.rN(n,d)
C.kt(n,20,20,440,814,f,1.2)
C.fot(n,0,0,1,1,g)
C.fot(n,480,0,-1,1,g)
C.fot(n,0,854,1,-1,g)
C.fot(n,480,854,-1,-1,g)
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
B.kL(n,!0,A.dc,new B.qX(p),o,A.cX,1.2,240,r,60,q)}return n},
fmk(d,e,f,g,h){var w
C.fsc(d,!0,C.fz(g),13,e,f)
C.fsc(d,!0,C.fz(g),9,e,f)
w=B.a([new B.jf(e,f-4),new B.jf(e+4,f),new B.jf(e,f+4),new B.jf(e-4,f)],x.J)
B.a1r(d,C.fz(h),w)},
kJ(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jf(e,v),new B.jf(u,f),new B.jf(e,t),new B.jf(s,f)],x.J)
if(i){B.a1r(d,C.fz(h),r)
return}B.kL(d,!0,A.dc,C.fz(h),w,A.cX,1,e,u,v,f)
B.kL(d,!0,A.dc,C.fz(h),w,A.cX,1,u,e,f,t)
B.kL(d,!0,A.dc,C.fz(h),w,A.cX,1,e,s,t,f)
B.kL(d,!0,A.dc,C.fz(h),w,A.cX,1,s,e,f,v)},
fcl(d,e,f,g,h,i,j){var w,v=B.a([new B.jf(e,f),new B.jf(e+g*28,f),new B.jf(e,f+h*28)],x.J)
B.a1r(d,C.fz(i),v)
v=e+g*14
w=f+h*14
C.kJ(d,v,w,6,j,!0)
C.kJ(d,v,w,3,i,!0)},
fcm(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cc,0,A.e3,854,w,0,3,w,A.cc,480,!1)
C.yk(v,d,e)
C.rN(v,d)
C.kt(v,18,18,444,818,f,2)
C.kt(v,26,26,428,802,f,0.9)
if(h!=null)B.iK(v,!0,C.fz(h),28,451,28,34)
C.fcl(v,18,18,1,1,g,f)
C.fcl(v,462,18,-1,1,g,f)
C.fcl(v,18,836,1,-1,g,f)
C.fcl(v,462,836,-1,-1,g,f)
return v},
hQT(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cc,0,A.e3,854,v,0,3,v,A.cc,480,!1)
C.yk(r,u,4294240980)
C.rN(r,u)
C.kt(r,10,12,460,830,t,3.2)
C.kt(r,18,20,444,814,s,1.2)
C.kt(r,24,26,432,802,t,1.8)
C.fZd(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kJ(r,w,16,3,t,!0)
C.kJ(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kJ(r,16,w,3,t,!0)
C.kJ(r,464,w,3,t,!0)}return r},
hQU(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cc,0,A.e3,854,t,0,3,t,A.cc,480,!1)
C.yk(p,s,4294373080)
C.rN(p,s)
C.kt(p,16,18,448,818,r,2.4)
C.kt(p,24,26,432,802,4286209044,1)
w=new C.feF(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fZd(p,!1,!0,r,q,q,34,16,18)
return p},
bzx(d,e,f,g,h,i){B.iK(d,!0,C.fz(i),e,e+g,f,f+h)},
bAm(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
hRK(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kL(d,!1,A.dc,new B.qX(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
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
B.kL(d,!1,A.dc,new B.qX(r),null,A.cX,1,t,t,f,s);++q}},
hRL(d,e){var w,v,u=null,t=B.hn(u,u,A.cc,0,A.e3,854,u,0,3,u,A.cc,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hRK(t,v,w,30,D.cRx,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzx(t,44,44,392,766,d)
C.bAm(t,44,44,392,766,d,e)
C.rN(t,d)
C.kt(t,44,44,392,766,4292128567,2.2)
C.kt(t,50,50,380,754,4279898632,0.8)
return t},
hSP(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
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
B.kL(d,!0,A.dc,new B.qX(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kL(d,!0,A.dc,C.fz(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kL(d,!0,A.dc,C.fz(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l1(d,!0,A.dc,C.fz(h),o,A.cX,2,e,f)}},
hSQ(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cc,0,A.e3,854,s,0,3,s,A.cc,480,!1)
B.iK(r,!0,C.fz(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hSP(r,u,v,w,4292391514)}C.bzx(r,46,46,388,762,d)
C.bAm(r,46,46,388,762,d,e)
C.rN(r,d)
C.kt(r,46,46,388,762,4291404327,1.8)
return r},
heO(d,e,f,g){C.fsc(d,!0,C.fz(g),16,e,f)
C.fsc(d,!0,C.fz(g),11,e,f)
C.kJ(d,e,f,6,g,!0)
B.kL(d,!0,A.dc,C.fz(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kL(d,!0,A.dc,C.fz(g),null,A.cX,1.3,e,e,f-14,f+14)},
hNI(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cc,0,A.e3,854,v,0,3,v,A.cc,480,!1)
B.iK(s,!0,C.fz(4280948752),0,479,0,853)
B.iK(s,!0,C.fz(u),0,479,0,78)
B.iK(s,!0,C.fz(u),0,479,776,853)
for(w=28;w<460;w+=44){C.heO(s,w,39,t)
C.heO(s,w,815,t)}C.bzx(s,38,92,404,670,d)
C.bAm(s,38,92,404,670,d,e)
C.rN(s,d)
C.kt(s,38,92,404,670,t,1.8)
C.kt(s,45,99,390,656,4287322667,0.8)
return s},
hSg(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jf(e,f),new B.jf(q-5,w),new B.jf(q,f-(18-Math.abs(r)*3)),new B.jf(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1r(d,new B.qX(o),p)}B.l1(d,!0,A.dc,C.fz(4292128567),null,A.cX,3,e,f)},
hSh(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cc,0,A.e3,854,s,0,3,s,A.cc,480,!1)
C.yk(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kL(q,!0,A.dc,new B.qX(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kL(q,!0,A.dc,new B.qX(u),s,A.cX,1.1,v,v,0,853)}B.iK(q,!0,C.fz(r),0,479,0,70)
B.iK(q,!0,C.fz(r),0,479,798,853)
for(t=0;t<5;++t)C.hSg(q,70+t*85,48,4292128567)
C.bzx(q,48,78,384,712,d)
C.bAm(q,48,78,384,712,d,e)
C.rN(q,d)
C.kt(q,48,78,384,712,4291404327,1.6)
return q},
hWC(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cc,0,A.e3,854,t,0,3,t,A.cc,480,!1)
B.iK(r,!0,C.fz(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kJ(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l1(r,!0,A.dc,new B.qX(u),t,A.cX,1,v,w)}C.bzx(r,40,40,400,774,d)
C.bAm(r,40,40,400,774,d,e)
C.rN(r,d)
C.kt(r,40,40,400,774,4291058750,2)
C.kt(r,48,48,384,758,s,0.8)
return r},
kS:function kS(d,e){this.a=d
this.b=e},
fC6:function fC6(d){this.a=d},
fC5:function fC5(d){this.a=d},
feF:function feF(d){this.a=d},
fCK(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hSJ(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fXN(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oD(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aI(0,Ai.agw(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
af2(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$af2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vh(null,""),$async$af2)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n3(n)
if(e==null)s=A.hq
else{r=C.hSJ(e)
s=B.a([new B.a_G(A.cS.gcw().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qM(t,d,s,E.F2),$async$af2)
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
return B.i($async$af2,v)},
bC_(d){return C.i4E(d)},
i4E(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bC_=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.af2(r,null),$async$bC_)
case 7:q=f
p=C.fXN(q)
if(p==null){u=d
w=1
break}o=d.aC0(p)
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
return B.i($async$bC_,v)},
hiI(d){var w,v=F.h_f(d)
v=B.aK(v,"book","newspaper")
if(F.a1K(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fGF(d,e,f,g){return C.i6v(d,e,f,g)},
i6v(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fGF=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fCK(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hmc()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.af2('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hiI(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fGF)
case 3:r=m.fXN(i)
if(r==null)throw B.V(y.S)
q=new C.zl(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aC0(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aH(t," ")
if(F.a1K(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1K(A.d.aH(t," "))==="sw"?C.bC_(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fGF,v)},
bBu(d,e,f,g,h){return C.i2g(d,e,f,g,h)},
i2g(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBu=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fN(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.K)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aH(l,"\n")
l=C.hmc()
k=A.R.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.af2('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hiI(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBu)
case 3:p=j.fXN(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cz(o)){n=d.aC0(B.a2(o,x.N,x.z))
m=A.R.ao(n.ag(),null)!==A.R.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1K(A.d.aH(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bC_(n),$async$bBu)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7y(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBu,v)},
a7y:function a7y(d,e,f){this.a=d
this.b=e
this.c=f},
i9h(d,e){return B.a6(d,!1).cl(B.e8(new C.fNB(e),!0,null,x.H))},
fNB:function fNB(d){this.a=d},
Vq:function Vq(d,e){this.c=d
this.a=e},
aDw:function aDw(d,e,f,g,h,i,j,k){var _=this
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
ehI:function ehI(d){this.a=d},
ehH:function ehH(){},
ehJ:function ehJ(d){this.a=d},
ehG:function ehG(d,e){this.a=d
this.b=e},
ehK:function ehK(){},
ehk:function ehk(d,e){this.a=d
this.b=e},
ehg:function ehg(d,e){this.a=d
this.b=e},
ehr:function ehr(d){this.a=d},
ehs:function ehs(d,e){this.a=d
this.b=e},
eht:function eht(d){this.a=d},
ehm:function ehm(d,e){this.a=d
this.b=e},
ehn:function ehn(d,e){this.a=d
this.b=e},
eho:function eho(d,e){this.a=d
this.b=e},
ehp:function ehp(d){this.a=d},
ehq:function ehq(d){this.a=d},
ehl:function ehl(d,e){this.a=d
this.b=e},
ehi:function ehi(d){this.a=d},
ehj:function ehj(d){this.a=d},
ehz:function ehz(d){this.a=d},
ehA:function ehA(d){this.a=d},
ehy:function ehy(d){this.a=d},
ehB:function ehB(d,e){this.a=d
this.b=e},
ehx:function ehx(d,e){this.a=d
this.b=e},
ehC:function ehC(d){this.a=d},
ehw:function ehw(d){this.a=d},
ehD:function ehD(d){this.a=d},
ehv:function ehv(d){this.a=d},
ehE:function ehE(d,e){this.a=d
this.b=e},
ehu:function ehu(d,e){this.a=d
this.b=e},
ehF:function ehF(d){this.a=d},
ehh:function ehh(d,e){this.a=d
this.b=e},
fBG(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fBG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hgj){w=1
break}r=new C.fBH()
t=4
q=x.s
w=7
return B.b(B.iN(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fBG)
case 7:$.hgj=!0
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
return B.i($async$fBG,v)},
bBR(d){return A.GT[B.mx(d)-1]+", "+A.oY[B.bH(d)-1]+" "+B.bQ(d)+", "+B.bA(d)},
hVG(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dfR[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
h_E(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fE(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a_(v,new C.fzZ(),B.U(v).k("a_<1>")))
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
continue}o=new C.fA0(j,h)
n=new C.fA_(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iX(o.$1(l)))
j.a+=l}return u},
fXw(d,e){var w=new C.feg()
return A.d.cI(e,0,new C.fee(w))>=A.d.cI(d,0,new C.fef(w))},
hdt(d){var w,v,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v))
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
cc6:function cc6(d){this.a=d},
cc4:function cc4(){},
cc5:function cc5(){},
tf:function tf(d,e){this.a=d
this.b=e},
Bk:function Bk(d,e){this.a=d
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
fBH:function fBH(){},
fzZ:function fzZ(){},
fA0:function fA0(d,e){this.a=d
this.b=e},
fA_:function fA_(d,e,f){this.a=d
this.b=e
this.c=f},
feg:function feg(){},
feh:function feh(){},
fee:function fee(d){this.a=d},
fef:function fef(d){this.a=d},
b0b:function b0b(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cc7:function cc7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cc8:function cc8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cc9:function cc9(d){this.a=d},
bbM:function bbM(d){this.a=d},
bbL:function bbL(d,e){this.b=d
this.a=e},
btn:function btn(d){this.a=d},
b8g:function b8g(d,e){this.b=d
this.a=e},
bqS:function bqS(d,e){this.b=d
this.a=e},
ho7(d,e){return B.a6(d,!1).cl(B.e8(new C.fNE(e,null),!0,null,x.E))},
fNE:function fNE(d,e){this.a=d
this.b=e},
Vt:function Vt(d,e,f){this.c=d
this.d=e
this.a=f},
aDA:function aDA(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
eiT:function eiT(){},
eiU:function eiU(d){this.a=d},
eiS:function eiS(d,e){this.a=d
this.b=e},
eiG:function eiG(d){this.a=d},
eiH:function eiH(d){this.a=d},
eiN:function eiN(d){this.a=d},
eiO:function eiO(d,e){this.a=d
this.b=e},
eiL:function eiL(d){this.a=d},
eiM:function eiM(d,e,f){this.a=d
this.b=e
this.c=f},
eiI:function eiI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eiP:function eiP(d,e){this.a=d
this.b=e},
eiK:function eiK(d,e){this.a=d
this.b=e},
eiQ:function eiQ(d){this.a=d},
eiJ:function eiJ(d,e){this.a=d
this.b=e},
eiR:function eiR(d,e){this.a=d
this.b=e},
bbi:function bbi(d,e,f){this.b=d
this.c=e
this.a=f},
i9n(d){return B.a6(d,!1).cl(B.e8(new C.fNU(),!0,null,x.I))},
bzi(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fYV(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fNU:function fNU(){},
a_x:function a_x(d){this.a=d},
ot:function ot(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEX:function aEX(d,e,f,g,h,i,j,k,l){var _=this
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
_.aF=_.aO=_.aE=_.av=_.Y=_.aW=_.bg=_.y2=0
_.b0=null
_.b1=0.25
_.bc=null
_.bJ=0.5
_.aR=1
_.c4=_.bQ=_.bi=0
_.cM=_.cL=!1
_.c=_.a=null},
eSt:function eSt(d){this.a=d},
eRl:function eRl(d,e){this.a=d
this.b=e},
eRJ:function eRJ(d,e){this.a=d
this.b=e},
eRT:function eRT(d){this.a=d},
eR4:function eR4(d){this.a=d},
eR5:function eR5(d){this.a=d},
eR2:function eR2(d){this.a=d},
eR3:function eR3(d){this.a=d},
eRC:function eRC(d,e){this.a=d
this.b=e},
eRD:function eRD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRP:function eRP(d,e,f){this.a=d
this.b=e
this.c=f},
eRO:function eRO(d,e){this.a=d
this.b=e},
eRQ:function eRQ(d,e){this.a=d
this.b=e},
eRN:function eRN(d,e){this.a=d
this.b=e},
eRS:function eRS(d,e,f){this.a=d
this.b=e
this.c=f},
eRR:function eRR(d,e){this.a=d
this.b=e},
eQV:function eQV(d){this.a=d},
eQW:function eQW(d){this.a=d},
eQX:function eQX(d){this.a=d},
eQU:function eQU(){},
eQY:function eQY(d,e){this.a=d
this.b=e},
eQT:function eQT(d,e){this.a=d
this.b=e},
eR_:function eR_(){},
eQZ:function eQZ(d,e){this.a=d
this.b=e},
eQS:function eQS(d,e){this.a=d
this.b=e},
eQP:function eQP(d,e){this.a=d
this.b=e},
eR0:function eR0(d){this.a=d},
eQR:function eQR(d,e){this.a=d
this.b=e},
eR1:function eR1(d){this.a=d},
eQQ:function eQQ(d,e){this.a=d
this.b=e},
eSi:function eSi(d,e){this.a=d
this.b=e},
eSp:function eSp(d){this.a=d},
eSq:function eSq(d,e){this.a=d
this.b=e},
eSr:function eSr(){},
eSj:function eSj(d,e){this.a=d
this.b=e},
eSh:function eSh(d,e){this.a=d
this.b=e},
eSk:function eSk(d,e){this.a=d
this.b=e},
eSg:function eSg(d,e){this.a=d
this.b=e},
eSl:function eSl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSf:function eSf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eSm:function eSm(d){this.a=d},
eSn:function eSn(d,e){this.a=d
this.b=e},
eSo:function eSo(d){this.a=d},
eSe:function eSe(d){this.a=d},
eS1:function eS1(d){this.a=d},
eS2:function eS2(d){this.a=d},
eS0:function eS0(d,e){this.a=d
this.b=e},
eRW:function eRW(d,e){this.a=d
this.b=e},
eS3:function eS3(d){this.a=d},
eS6:function eS6(d){this.a=d},
eS_:function eS_(d){this.a=d},
eS7:function eS7(d){this.a=d},
eS8:function eS8(d){this.a=d},
eS9:function eS9(d){this.a=d},
eSa:function eSa(d){this.a=d},
eRZ:function eRZ(d){this.a=d},
eSb:function eSb(d){this.a=d},
eRY:function eRY(d){this.a=d},
eSc:function eSc(d,e){this.a=d
this.b=e},
eRX:function eRX(d,e){this.a=d
this.b=e},
eSd:function eSd(d){this.a=d},
eS4:function eS4(d){this.a=d},
eS5:function eS5(d){this.a=d},
eRG:function eRG(d){this.a=d},
eRF:function eRF(d){this.a=d},
eRH:function eRH(d,e){this.a=d
this.b=e},
eRE:function eRE(d,e){this.a=d
this.b=e},
eRI:function eRI(d){this.a=d},
eRy:function eRy(d){this.a=d},
eRx:function eRx(d){this.a=d},
eRz:function eRz(d){this.a=d},
eRw:function eRw(d){this.a=d},
eRA:function eRA(d,e){this.a=d
this.b=e},
eRv:function eRv(d,e){this.a=d
this.b=e},
eRu:function eRu(d,e){this.a=d
this.b=e},
eRc:function eRc(d){this.a=d},
eRd:function eRd(d){this.a=d},
eRe:function eRe(d){this.a=d},
eRf:function eRf(d){this.a=d},
eRg:function eRg(d){this.a=d},
eRh:function eRh(d){this.a=d},
eRi:function eRi(d){this.a=d},
eRj:function eRj(d){this.a=d},
eRk:function eRk(d){this.a=d},
eQy:function eQy(d){this.a=d},
eQz:function eQz(d){this.a=d},
eQA:function eQA(d){this.a=d},
eQB:function eQB(d){this.a=d},
eQC:function eQC(d){this.a=d},
eQx:function eQx(d){this.a=d},
eQD:function eQD(d){this.a=d},
eQE:function eQE(d){this.a=d},
eR6:function eR6(d){this.a=d},
eR7:function eR7(d){this.a=d},
eR8:function eR8(d){this.a=d},
eR9:function eR9(d){this.a=d},
eRa:function eRa(d){this.a=d},
eQI:function eQI(d){this.a=d},
eQJ:function eQJ(d){this.a=d},
eQK:function eQK(d){this.a=d},
eQL:function eQL(d){this.a=d},
eQM:function eQM(d){this.a=d},
eQH:function eQH(d){this.a=d},
eQN:function eQN(d){this.a=d},
eQG:function eQG(d){this.a=d},
eQO:function eQO(d){this.a=d},
eQF:function eQF(d){this.a=d},
eRB:function eRB(d){this.a=d},
eRt:function eRt(d){this.a=d},
eRp:function eRp(d){this.a=d},
eRo:function eRo(d){this.a=d},
eRq:function eRq(d,e){this.a=d
this.b=e},
eRn:function eRn(d,e){this.a=d
this.b=e},
eRr:function eRr(d,e){this.a=d
this.b=e},
eRm:function eRm(d,e){this.a=d
this.b=e},
eRs:function eRs(d){this.a=d},
eRM:function eRM(d){this.a=d},
eRL:function eRL(d,e,f){this.a=d
this.b=e
this.c=f},
eRK:function eRK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRV:function eRV(d,e){this.a=d
this.b=e},
eRU:function eRU(d,e){this.a=d
this.b=e},
eRb:function eRb(d){this.a=d},
eSs:function eSs(d){this.a=d},
beR:function beR(d,e){this.b=d
this.a=e},
i4P(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i4Q(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kW(0,d),m=B.C(n,B.a3(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b4(d,v)
return n.charCodeAt(0)==0?n:n},
bzT(){var w=$.bz0,v=$.Q7
$.Q7=v+1
return w+"_"+v},
i9(d,e,f,g,h,i,j){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,C.bzT(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cm,D.f0,g,e,f)},
nU(d,e,f,g){var w=f*9
return C.i9(D.eL,d-f/2,e-w/32,f,w/16,g,0)},
hPo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.bz0
p=$.Q7
$.Q7=p+1
w.push(new C.eK(q+"_"+p,D.f0,0,r,1,0.0016,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.bf,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.bz0
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
return B.a([C.i9(D.l3,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i9(D.l3,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i9(D.l3,0.7,0.8,0.22,0.12,w|1140850688,0),C.i9(D.l3,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
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
return B.a([C.i9(D.jL,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i9(D.jL,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i9(D.jL,0.15,0.86,0.6,0.14,1712265002,0),C.nU(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cSX[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.bz0
l=$.Q7
$.Q7=l+1
w.push(new C.eK(m+"_"+l,D.f0,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.eL,q,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nU(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i9(D.jL,0.35,-0.1,0.3,0.62,w|855638016,0),C.i9(D.jL,0.05,-0.1,0.3,0.55,v,-0.5),C.i9(D.jL,0.65,-0.1,0.3,0.55,v,0.5),C.nU(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i9(D.bf,0.06,0.04,0.88,0.002,e,0),C.i9(D.bf,0.06,0.96,0.88,0.002,e,0),C.i9(D.bf,0.06,0.04,0.004,0.92,e,0),C.i9(D.bf,0.936,0.04,0.004,0.92,e,0),C.i9(D.bf,0.09,0.07,0.82,0.001,w,0),C.i9(D.bf,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i9(D.jM,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i9(D.jM,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i9(D.jM,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i9(D.bf,0,0,0.3,0.09,w|1140850688,0),C.i9(D.bf,0.7,0.9,0.3,0.1,v|1426063360,0),C.i9(D.bf,0.82,0.04,0.12,0.07,w|771751936,0),C.i9(D.bf,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i9(D.eL,0.62,0.02,0.5,0.16,v,0.6),C.i9(D.eL,0.78,0.12,0.4,0.12,u,0.9),C.i9(D.eL,-0.12,0.8,0.5,0.16,u,-0.6),C.i9(D.eL,-0.05,0.9,0.4,0.12,v,-0.9),C.nU(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i9(D.bf,0.09,0.12,0.16,0.006,e,0),C.i9(D.bf,0.05,0.03,0.9,0.001,w,0),C.i9(D.bf,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i1k(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bz0=j
$.Q7=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fxn()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bn,A.a5,"",1,C.bzT(),g,"","",0,!1,"",0,D.bf,l,2,"",0,0,"",D.cm,D.lu,1,0,0))
if(a9)A.d.v(q,C.hPo(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i4P(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fxm(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bn,A.a5,a1,a3*9/16,C.bzT(),a0,"","",0,!1,a2,0,D.bf,l,2,"",0,0,"",D.cm,D.lu,a3,a4,a5))
return C.rr(s,r,0,0,q,j+"_slide",D.qb,"","","",D.dd)},
rq:function rq(d,e){this.a=d
this.b=e},
m4:function m4(d,e,f,g,h,i,j,k,l,m){var _=this
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
fxn:function fxn(){},
fxm:function fxm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hFq(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a5(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cdu(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bT()
w=w.h(d,"request")
return new C.zn(u,t,s,B.t(w==null?"":w))},
fF2(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fF2=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hgG){w=1
break}$.hgG=!0
t=4
w=7
return B.b(B.aA(),$async$fF2)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aI(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jy(p),k=k.gae(k),j=x.j,i=x.o;k.C();){o=k.gR(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gR(h)
l=C.hFq(m)
if(l!=null)J.ch(n,l)}$.Cu.cg(0,B.t(o.a),new C.fF3(n))}C.fYB()
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
return B.i($async$fF2,v)},
fYB(){var w,v=new B.S(Date.now(),0,!1).bR(-12e8)
for(w=new B.dt($.Cu,$.Cu.r,$.Cu.e);w.C();)J.nq(w.d,new C.flx(v))
$.Cu.bp($.Cu,new C.fly())},
aNy(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNy=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aNy)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Cu,B.a3($.Cu).k("cK<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gR(h)
g=o
J.ch(p,B.F(["at",g.a.a7().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aNy)
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
return B.i($async$aNy,v)},
i5q(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fYB()
w=$.Cu.cg(0,d,new C.fF5())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.pv(w,0,new C.zn(new B.S(v,0,!1),f,u,g))
C.aNy()},
i5n(d){var w,v=$.Cu.h(0,d)
if(v==null||J.cn(v))return
w=J.cG(v)
w.cA(v,0)
if(w.gam(v))$.Cu.W(0,d)
C.aNy()},
zn:function zn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdu:function cdu(){},
fF3:function fF3(d){this.a=d},
flx:function flx(d){this.a=d},
fly:function fly(){},
fF5:function fF5(){},
i5s(d){return A.d.dL(D.vY,new C.fF8(d),new C.fF9())},
hFo(d){var w
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
hFn(d){var w
switch(d.a){case 0:w=D.akU
break
case 1:w=A.yg
break
case 2:w=A.alY
break
case 3:w=K.akw
break
case 4:w=A.alo
break
case 5:w=A.lT
break
default:w=null}return w},
hSm(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.PP[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.PP[w]
if(!B.cS(v.toLowerCase(),t,0))u=B.cS(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hFp(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i5o(d,e,f,g,h){var w=new B.L(D.vY,new C.fF1(),x.eC).aH(0,", "),v=""+d,u=C.hm4(h),t=F.fyM(h),s=C.hih(g),r=e.t(0,D.HP)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HQ)?'- New slides get an "icon3d" from: '+A.d.aH(D.PP,", ")+".\n":"",p=e.t(0,D.CD)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i5p(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.L(D.vY,new C.fF4(),x.eC).aH(0,", "),p=new B.fe("")
if(e.t(0,D.HP)){p.a=s
w=s}else w=""
if(e.t(0,D.HQ))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aH(D.PP,", ")+".\n")
if(e.t(0,D.CD))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hm4(d)
v=F.fyM(d)
u=C.hih(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agM(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CT(a3,"{"),a5=J.fQY(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.L8(a3,a4,a5+1)
try{w=A.R.aI(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gR(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fD1(),m).c_(0,new C.fD2())
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
f=C.hSm(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c8(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a7G(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fp(u).b:q))
p=A.d.b5(D.vY,new C.fD3(r))?r:a7
o=C.fkM(J.q(w,"logo_frame"),D.C0)
n=C.fkM(J.q(w,"logo_ring"),D.BW)
m=C.fkM(J.q(w,"photo_frame"),D.C0)
l=C.fkM(J.q(w,"photo_ring"),D.BW)
return new C.aqI(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1g(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hlc(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CE),f7=f6?C.hM3():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eM()
v.dB(f7.w+1)
u=f7.a
t=B.bn(u.b,!0,x.dL)
A.d.fn(t,v)
s=u.c
s=new C.nI("luxe",u.a,A.lT,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i5s(f9.b)
r=g2.t(0,D.a4Q)||f6
q=g2.t(0,D.HP)
p=g2.t(0,D.RK)
o=new C.fxr()
n=B.a([],x.g)
m=new C.fxu(o,w,r)
l=new C.fxt(o,r)
k=new C.fxs(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a5(g0),a7=!A.d.b5(u,new C.fxq(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cUt[b8]
c0=D.cTp[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eNd.t(0,b2.a)){c7=b0+1
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
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mG,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.qc,500,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.RH
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eL,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.l3,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bf,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.CB
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eL,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eL,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mG,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.N))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.qc,500,f2,f0))
d3=D.mF
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eL,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bf,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uk:D.cm
c1.push(new C.eK(b4,D.a4O,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bn,A.aD,4279310375,A.bg,e4,D.bf,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mF
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eL,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eL,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mG,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.qc,450,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.RH
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
b4=A.d.aH(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.HN,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mF}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hNH(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.di8[A.o.E(b1,6)]:s
n.push(new C.lF(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bx(e4,e4,e4,e4,D.CA,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fzP(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fzP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.CD)
n=e.t(0,D.HQ)
if(!o&&!n){u=D.a3N
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fzS(o,s[r],n,$.hR7,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iN(t,x.e),$async$fzP)
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
return B.i($async$fzP,v)},
fyP(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fyP=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i5p(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMU(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fyP)
case 3:u=s.aNe(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyP,v)},
bBv(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBv=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ea(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.L(0,(q==null?r.a(q):q).b)}C.i5q(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agM(i,"colorful")
t=C.i5o(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMU(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hq),$async$bBv)
case 3:u=o.aNe(m,f,h,g,D.dWx,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBv,v)},
aMU(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMU=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vh(null,""),$async$aMU)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n3(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qM(t,d,g,null),$async$aMU)
case 7:q=i
p=q.b
if(p!=null){o=C.agM(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KP(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMU,v)},
aNe(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNe=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.CD)||e.t(0,D.HQ)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.db(e,x.Q)
t.W(0,D.CD)}w=6
return B.b(C.fzP(d,t),$async$aNe)
case 6:s=k
w=4
break
case 5:s=D.a3N
case 4:t=d.c
w=A.d.b5(t,new C.feb())?7:9
break
case 7:r=$.hmX
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aNe)
case 10:q=k
p=q!=null?A.R.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hlc(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hFp(new C.aqI(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("L<1,m>")
t=B.C(new B.L(m,new C.fec(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jP<co.E,m>")
t=B.C(new B.jP(e,new C.fed(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.RK)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNe,v)},
h0m(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a2B[v]
if(A.d.t(t,u.b))w.L(0,u)}return w},
i9s(d){return B.bR(A.K,null,new C.fO5(),d,!0,!0,!0,null,!1,!1,x.I)},
hMG(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcw().aJ(d)},
i9r(d,e,f){return B.bR(A.K,null,new C.fO4(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h0n(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h0o(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fkM(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b5(e,new C.fkN(w))?w:""},
hih(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hmV(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agM(a1==null?"":a1,a0),a3=C.agM(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a_<1>"),p=0;p<t.length;t.length===v||(0,B.K)(t),++p){o=B.rc(new B.a_(r,new C.fFa(t[p]),q))
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
g=B.C(new B.a_(k,new C.fFb(),v),r)
A.d.b2(g,new C.fFc())
if(g.length===0)continue
f=new C.fFd(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.K)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i5J(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aFZ
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dYs
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dYt
return null},
hhT(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bv(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i5t(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oc
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
if(C.hhT(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hhT(n,i,v,u))if(n.w>10){f=h+1
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
i5r(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agM(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.K)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a2B[r]
if(q.b===s)w.L(0,q)}}v=C.h0n(e)
u=C.h0o(e)
p=C.hlc(n,D.a3N,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("L<1,m>")
o=B.C(new B.L(o,new C.fF6(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jP<co.E,m>")
o=B.C(new B.jP(w,new C.fF7(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.RK)
return p},
i9e(d,e,f){return B.bR(A.K,null,new C.fNi(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hM3(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eM()
s.dB(t)
w=D.cyz[s.aB(10)]
v=new C.edO(s)
u=x.N
return new C.edN(w,s.aB(4),J.fp(v.$1$2(D.cYS,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.ddM,2+s.aB(2),u),v.$1$2(D.d7_,2,u),v.$1$2(D.dgH,4,x.fP),t)},
hNH(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eM()
a1.dB(a5.w+a3*13)
w=new C.faF(a4)
v=new C.faH(a4,d)
u=new C.faG(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.K)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fU(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fU(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eL,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1g(a0,52),"lux_spot",a5.ws(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.bf,0,0,1,1,0,"lux_back",a5.ws(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.bf,0,0,1,1,0,"lux_back2",a5.aEo(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.022,0.038,0.956,0.924,0,g,a5.ws(0,f),D.dd,150,C.a1g(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.018,0.032,0.964,0.936,0,g,a5.ws(0,f),D.dd,120,C.a1g(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a1g(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bf,0,0,1,1,0,"lux_filigree",a5.ws(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.bf,0.08,0.06,0.84,0.004,C.a1g(a0,208),"lux_rule",a5.aEo(0,"shimmer",r),D.uj,150))
a2.push(w.$10$anim$delay(D.bf,0.08,0.936,0.84,0.004,C.a1g(a0,144),"lux_rule2","",D.HN,220))}l=!A.d.b5(a2,new C.faE())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.ws(0,"crest"),350))
else{o=a1.hd()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.ws(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a1g(r,242)
j=a5.ws(0,"orbit")
i=s===D.bf?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.qc,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eL,t-0.007,0.9495,0.014,0.025,C.a1g(r,242),"lux_g2",a5.ws(0,"orbit"),D.qc,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){h=t[q]
a2.push(w.$8(D.bf,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fU(a0,16),8,"0").toUpperCase()))}if((A.d.gJ(d.b).a&16777215)<8421504)a2.push(w.$8(D.bf,0,0,1,1,0,"lux_velvet",a5.ws(0,"velvet")))},
nI:function nI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fF8:function fF8(d){this.a=d},
fF9:function fF9(){},
vV:function vV(d,e){this.a=d
this.b=e},
a7G:function a7G(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqI:function aqI(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fF1:function fF1(){},
fF4:function fF4(){},
fD1:function fD1(){},
fD2:function fD2(){},
fD3:function fD3(d){this.a=d},
fxr:function fxr(){},
fxu:function fxu(d,e,f){this.a=d
this.b=e
this.c=f},
fxt:function fxt(d,e){this.a=d
this.b=e},
fxs:function fxs(d,e){this.a=d
this.b=e},
fxq:function fxq(d){this.a=d},
fzS:function fzS(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fzQ:function fzQ(d){this.a=d},
fzR:function fzR(d){this.a=d},
feb:function feb(){},
fec:function fec(){},
fed:function fed(){},
fO5:function fO5(){},
a03:function a03(d){this.a=d},
aGS:function aGS(d,e,f,g,h){var _=this
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
eYF:function eYF(d,e,f){this.a=d
this.b=e
this.c=f},
eYG:function eYG(d,e){this.a=d
this.b=e},
eYD:function eYD(d,e){this.a=d
this.b=e},
eYE:function eYE(d,e){this.a=d
this.b=e},
eYC:function eYC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eYx:function eYx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eYB:function eYB(d,e){this.a=d
this.b=e},
eYw:function eYw(d,e){this.a=d
this.b=e},
eYA:function eYA(d,e){this.a=d
this.b=e},
eYv:function eYv(d,e){this.a=d
this.b=e},
eYy:function eYy(d){this.a=d},
eYz:function eYz(d,e){this.a=d
this.b=e},
eYl:function eYl(d,e){this.a=d
this.b=e},
eYm:function eYm(d,e){this.a=d
this.b=e},
eYo:function eYo(d){this.a=d},
eYp:function eYp(d){this.a=d},
eYq:function eYq(d){this.a=d},
eYr:function eYr(d){this.a=d},
eYn:function eYn(d,e){this.a=d
this.b=e},
eYs:function eYs(d,e){this.a=d
this.b=e},
eYT:function eYT(d){this.a=d},
eYU:function eYU(d){this.a=d},
eYS:function eYS(d){this.a=d},
eYV:function eYV(d){this.a=d},
eYR:function eYR(d){this.a=d},
eYX:function eYX(d){this.a=d},
eYQ:function eYQ(d,e){this.a=d
this.b=e},
eYY:function eYY(d){this.a=d},
eYP:function eYP(d,e){this.a=d
this.b=e},
eYZ:function eYZ(d){this.a=d},
eYO:function eYO(d){this.a=d},
eZ_:function eZ_(d){this.a=d},
eYN:function eYN(d,e){this.a=d
this.b=e},
eZ0:function eZ0(d){this.a=d},
eYM:function eYM(d,e){this.a=d
this.b=e},
eZ1:function eZ1(d){this.a=d},
eYL:function eYL(d){this.a=d},
eZ2:function eZ2(d,e){this.a=d
this.b=e},
eYK:function eYK(d,e){this.a=d
this.b=e},
eZ3:function eZ3(d){this.a=d},
eYW:function eYW(d){this.a=d},
eYJ:function eYJ(d,e){this.a=d
this.b=e},
eYt:function eYt(d,e,f){this.a=d
this.b=e
this.c=f},
eYu:function eYu(d,e,f){this.a=d
this.b=e
this.c=f},
eYI:function eYI(d,e){this.a=d
this.b=e},
eYH:function eYH(d,e){this.a=d
this.b=e},
fO4:function fO4(d,e){this.a=d
this.b=e},
a02:function a02(d,e,f){this.c=d
this.d=e
this.a=f},
aGR:function aGR(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eYe:function eYe(d){this.a=d},
eYf:function eYf(d){this.a=d},
eYg:function eYg(d,e){this.a=d
this.b=e},
eYh:function eYh(d){this.a=d},
eYi:function eYi(d){this.a=d},
eYd:function eYd(d,e){this.a=d
this.b=e},
eYj:function eYj(d,e){this.a=d
this.b=e},
eYk:function eYk(d,e){this.a=d
this.b=e},
fkN:function fkN(d){this.a=d},
b0z:function b0z(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDp:function aDp(d,e,f){this.c=d
this.d=e
this.a=f},
bjw:function bjw(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
edQ:function edQ(d){this.a=d},
edP:function edP(){},
bh3:function bh3(d,e){this.b=d
this.a=e},
fFa:function fFa(d){this.a=d},
fFb:function fFb(){},
fFc:function fFc(){},
fFd:function fFd(d){this.a=d},
arh:function arh(d,e){this.a=d
this.b=e},
fF6:function fF6(){},
fF7:function fF7(){},
fNi:function fNi(d,e){this.a=d
this.b=e},
Zo:function Zo(d,e,f){this.c=d
this.d=e
this.a=f},
aAS:function aAS(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dif:function dif(d){this.a=d},
dig:function dig(d){this.a=d},
dih:function dih(d,e){this.a=d
this.b=e},
dik:function dik(d){this.a=d},
dil:function dil(d,e){this.a=d
this.b=e},
dij:function dij(d,e){this.a=d
this.b=e},
dim:function dim(d){this.a=d},
dii:function dii(d,e){this.a=d
this.b=e},
brY:function brY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
edN:function edN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
edO:function edO(d){this.a=d},
faF:function faF(d){this.a=d},
faH:function faH(d,e){this.a=d
this.b=e},
faG:function faG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
faE:function faE(){},
aLq:function aLq(){},
h_c(d){var w,v,u
try{w=A.R.aI(0,d,null)
if(x.f.b(w)){v=B.vN(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0v:function b0v(d,e,f){this.c=d
this.d=e
this.a=f},
bl9:function bl9(d,e){this.c=d
this.a=e},
i1N(d){return A.d.dL(D.GQ,new C.fyy(d),new C.fyz())},
i1O(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b4(t,6)
if(w.length===0)return null
v=new B.a_(D.GQ,new C.fyA(w),x.b4)
if(!v.gae(0).C())return null
u=v.gJ(0)
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
fyy:function fyy(d){this.a=d},
fyz:function fyz(){},
fyA:function fyA(d){this.a=d},
mS(d,e,f,g,h){return new C.Eu(f,g,d)},
hOV(d){var w=d.z,v=B.U(w).k("a_<1>")
w=B.C(new B.a_(w,new C.fcF(),v),v.k("J.E"))
d.z=w
d.x=""},
dw(d,e){var w=$.Kd
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dx(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cm,D.f0,j,k,l)},
hl_(d,e){var w
C.hOV(d)
w=A.d.dL($.bDv(),new C.fwo(e),new C.fwp())
$.Kd=w.a
d.x=w.a;++d.y
try{w.bC(d)}finally{$.Kd=""}d.z=B.bn(d.z,!0,x.F)},
Eu:function Eu(d,e,f){this.a=d
this.b=e
this.e=f},
fcF:function fcF(){},
fED:function fED(){},
fEE:function fEE(){},
fEF:function fEF(){},
fEQ:function fEQ(){},
fEV:function fEV(){},
fEW:function fEW(){},
fEX:function fEX(){},
fEY:function fEY(){},
fEZ:function fEZ(){},
fF_:function fF_(){},
fF0:function fF0(){},
fEG:function fEG(){},
fEH:function fEH(){},
fEI:function fEI(){},
fEJ:function fEJ(){},
fEK:function fEK(){},
fEL:function fEL(){},
fEM:function fEM(){},
fEN:function fEN(){},
fEO:function fEO(){},
fEP:function fEP(){},
fER:function fER(){},
fES:function fES(){},
fET:function fET(){},
fEU:function fEU(){},
fwo:function fwo(d){this.a=d},
fwp:function fwp(){},
iW(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ep(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bf,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CL(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cm,D.f0,j,k,l)},
bCe(){var w=new B.S(Date.now(),0,!1)
return A.ig[B.bH(w)-1]+" "+B.bQ(w)+", "+B.bA(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bzD(d){return new B.iR((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hTZ(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amt(A.cG.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hU2(d){var w=d.r
if(!d.cy)return w
return new B.L(B.a(w.split("\n"),x.s),new C.fkl(),x.dv).aH(0,"\n")},
hU1(d){switch(d.a){case 2:return A.ns
case 1:case 5:return A.eXN
default:return A.Tc}},
hTW(d){switch(d.a){case 2:return A.uU
case 1:case 5:return A.V2
default:return A.a9H}},
hU_(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bzD(u),q=(s&255)===0?v:C.bzD(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.ns(q,p,A.kL)
w=new B.pw(t,t,t,t)}switch(d.ax.a){case 1:return B.lu(v,v,v,new B.kA(r,w,v,A.aaW,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wX(B.lu(v,v,q,v,p+0.4,v,v,v))
default:return B.lu(v,v,v,new B.kA(r,w,B.vp(4),A.hG,v),v,v,v,v)}},
hTY(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f0?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hTW(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hU2(d)
t=C.bzD(d.Q)
s=d.x.a>=700?A.el:A.vu
r=d.y===A.cF?A.xU:A.ajn
q=d.z
p=new B.CW(w,l,l,B.fb(u,l,l,l,B.h5(l,t,1===q.a?A.aOT:A.aOS,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hU1(d.as)))
break
case 1:case 4:o=C.hTZ(d.at)
n=i===D.lu&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wX(B.fb(w,l,l,l,B.h5(l,A.rA,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HD(o,n?A.aaS:A.Vq,l,l)
break
case 3:w=new B.ns(A.I5,1,A.kL)
u=B.vp(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lu(A.uU,B.fb(t,l,l,l,B.h5(l,D.e9M,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.el,l,!0,l,l,l,l),A.ns),l,new B.kA(E.aHh,new B.pw(w,w,w,w),u,A.hG,l),l,l,l,l)
break
case 2:p=C.hU_(d,e)
break
case 5:p=C.hTX(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hcF(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.as2(m/255,p)}if(w)return new F.w0(k,l,j,l,new B.RV(new B.kz(g,g,f,1/0),p))
if(i===D.l2){i=new B.ns(A.I5,1,A.kL)
i=B.lu(A.uU,p,l,new B.kA(A.p3,new B.pw(i,i,i,i),B.vp(4),A.hG,l),l,l,D.bvm,l)}else i=p
return new F.w0(k,l,j,l,new B.fO(g,f,i))},
hU0(d,e,f,g){var w,v=null,u=C.bzD(d.e),t=d.f
t=B.a([F.hbh(t!=null?B.lu(v,v,v,new B.kA(v,v,v,A.hG,new B.aW3(E.V3,A.a9B,B.a([u,C.bzD(t)],x.cR),v)),v,v,v,v):B.lu(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.L(w,new C.fkk(f,g),B.U(w).k("L<1,ff>")))
return F.cqJ(t)},
h0q(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h0q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3U(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.K)(t),++q){p=t[q]
o=new B.Wb(A.w9,A.I2,D.bwt,null,null,null,!1,null)
o=new B.BD(o,new C.fFj(607,787,p,d))
o.Mq(n,null)
r.push(o)}u=n.k7(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0q,v)},
hTX(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.h_c(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaje()
if(h==null)h=A.awR
j=B.ts(4279308564)
w=B.vp(18)
v=new B.ns(B.ts(4287531653),3,A.kL)
u=i.length===0?"My links":i
u=B.a([B.wX(B.fb(u,m,m,m,B.h5(m,A.p3,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.el,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wX(B.fb(A.a.i(l.c),m,m,m,D.f3X,m)))
u.push(new B.fO(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bS(t,t.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.ts(4280690220)
o=new B.a8Z(8,8)
n=A.a.i(r.b)
u.push(new B.nJ(D.bpG,new C.awe(new C.ahT(q),B.lu(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.f6f,A.ns),m,new B.kA(p,m,new B.aij(o,o,o,o),A.hG,m),m,m,D.bvM,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wX(B.fb(k,m,m,m,D.f5u,m))
u.push(new C.awe(C.htz(k),t))}return B.lu(m,B.yH(u,A.LE,A.ls),m,new B.kA(j,new B.pw(v,v,v,v),w,A.hG,m),m,m,D.bqv,m)},
fkl:function fkl(){},
fkk:function fkk(d,e){this.a=d
this.b=e},
fFj:function fFj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agz(d){var w,v
for(w=0;w<32;++w){v=D.GH[w]
if(v.a===d)return v}return null},
hfj(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aJ(A.a.b4(d,u+1))
return w}catch(v){return null}},
cX(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
ho3(d,e){return B.a6(d,!1).cl(B.e8(new C.fLI(e),!0,null,x.fB))},
ho2(d,e){return B.bR(A.K,null,new C.fLH(e),d,!0,!0,!0,null,!1,!1,x.fB)},
j_:function j_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
El:function El(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ne:function Ne(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biT:function biT(d,e,f){var _=this
_.d=d
_.e=$
_.bt$=e
_.a8$=f
_.c=_.a=null},
dTE:function dTE(d){this.a=d},
dTD:function dTD(d,e,f){this.a=d
this.b=e
this.c=f},
dTC:function dTC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqx:function bqx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eXs:function eXs(d,e){this.a=d
this.b=e},
bdX:function bdX(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZp:function aZp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c81:function c81(){},
c82:function c82(d){this.a=d},
c83:function c83(d,e,f){this.a=d
this.b=e
this.c=f},
c84:function c84(d,e,f){this.a=d
this.b=e
this.c=f},
fLI:function fLI(d){this.a=d},
YX:function YX(d,e){this.c=d
this.a=e},
azf:function azf(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d7s:function d7s(d,e,f){this.a=d
this.b=e
this.c=f},
d7x:function d7x(d){this.a=d},
d7y:function d7y(d){this.a=d},
d7w:function d7w(d){this.a=d},
d7z:function d7z(d){this.a=d},
d7v:function d7v(d,e){this.a=d
this.b=e},
d7A:function d7A(d){this.a=d},
d7u:function d7u(d){this.a=d},
d7B:function d7B(d){this.a=d},
d7t:function d7t(d,e){this.a=d
this.b=e},
d7C:function d7C(d,e){this.a=d
this.b=e},
fLH:function fLH(d){this.a=d},
fLG:function fLG(d){this.a=d},
fLF:function fLF(d,e,f){this.a=d
this.b=e
this.c=f},
fLE:function fLE(d,e){this.a=d
this.b=e},
aKU:function aKU(){},
i9q(d){return B.bR(A.K,null,new C.fO3(),d,!0,!0,!0,null,!1,!1,x.N)},
fO3:function fO3(){},
Zh:function Zh(d){this.a=d},
bfq:function bfq(d){this.d=d
this.c=this.a=null},
dee:function dee(d){this.a=d},
def:function def(d,e){this.a=d
this.b=e},
deg:function deg(d){this.a=d},
hQq(d){var w,v=d.split("@")
if(v.length>1){w=B.c8(v[1],16)
if(w!=null)return B.b0(w)}return D.xk},
i3I(d){var w,v=A.d.gJ(d.split("@"))
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
i3H(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gJ(d.split("@")),p=C.hQq(d)
switch(q){case"shimmer":return B.nN(A.aa2,g,new C.fC_(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beO(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.dc(C.fSj(g,B.a4L(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bev(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eH(A.A,e*0.5,B.ed(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dp()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fB(e)
u.mL(Math.sin(e)*0.3)
return B.dU(B.ft(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.bnp(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9p(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b0,A.r,B.a([B.e1(B.b3(r,r,r,new C.b92(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.buj(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.brk(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bqt(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdQ(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e1(B.ed(A.A,B.c0(r,new B.o(r,r,r,r,r,new B.bT(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.be),1.6+s*0.15,r,r),!0,r),0,0,0),B.eH(A.A,s*0.06,B.ed(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fC_:function fC_(d,e){this.a=d
this.b=e},
beO:function beO(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bev:function bev(d,e,f){this.b=d
this.c=e
this.a=f},
bnp:function bnp(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9p:function b9p(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b92:function b92(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
buj:function buj(d,e,f){this.b=d
this.c=e
this.a=f},
brk:function brk(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqt:function bqt(d,e,f){this.b=d
this.c=e
this.a=f},
bdQ:function bdQ(d,e,f){this.b=d
this.d=e
this.a=f},
d79:function d79(d,e,f,g,h){var _=this
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
fC2(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l2},
i3N(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b2(j,new C.fC3())
s=A.d.gJ(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.K)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gJ(B.aPN(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i3M(d,e){var w,v,u,t,s,r=d.db
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
agc(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$agc=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a_<1>")
e=B.C(new B.a_(a4,new C.fup(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bR(A.dH,null,new C.fuq(e),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$agc)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gJ(e).hF())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h11(d),$async$agc)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.L_(d,"Search states\u2026","",A.k4,"Choose state"),$async$agc)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h_Y(s)
if(p==null)p=A.d.gJ(D.QB)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fC4(p.d)
k=x.u
j=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cD(),l,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Cx(i,0.016,D.l3,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cx(0,0.058,D.eL,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cx(0,0.058,D.eL,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Ko("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Ko("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fXU(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bz6("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0S("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0S("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0S("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0S("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bz6("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cx(m,0.082,D.bf,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.ep(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.ab(0.78,3),4280640491,9.5,A.bn,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.bf,4280172719,2,y.O,0,0,"",D.cm,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fXU(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bz6("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hhi("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hhi("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0S("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0S("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.bz5("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.bz5("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.bz6("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Ko("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Ko("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.bz5("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.bz5("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.bz6("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0S("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.bz5("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0S("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.fXU(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Ko("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Ko("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bx(null,null,null,null,D.oc,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rr(m,null,0,0,j,n,D.qb,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agc,v)},
fC3:function fC3(){},
fup:function fup(){},
fuq:function fuq(d){this.a=d},
fun:function fun(d){this.a=d},
fuo:function fuo(d){this.a=d},
hTr(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hTq(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mL
case"lineThrough":return A.zw
default:return A.aD}},
ep(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eK(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hjm(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Qn[w]
if(v.b===u)return v}return D.dd},
hPP(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cQj[w]
if(v.b===u)return v}return D.cQ},
hWf(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.deq[w]
if(v.b===u)return v}return D.bf},
rr(d,e,f,g,h,i,j,k,l,m,n){return new C.lF(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
ha1(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hRP(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hjm(d.h(0,"transition"))
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
n=B.cF(n,new C.cdr(),n.$ti.k("J.E"),x.F)
n=B.C(n,B.a3(n).k("J.E"))}return C.rr(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hRP(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aoF[w]
if(v.b===u)return v}return D.mF},
Bx(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i0(p,t,a1,h,i,w,a0==null?B.a([C.rr(4294967295,null,0,0,null,C.cD(),D.qb,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VC(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hNX(a6.h(0,"aspectRatio"))
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
else{f=J.b6(f,new C.cde(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.cdf(),x.N)
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
g=B.cF(g,new C.cdg(),g.$ti.k("J.E"),x.bt)
g=B.C(g,B.a3(g).k("J.E"))}return C.Bx(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rr(4294967295,a3,0,0,a3,C.cD(),D.qb,"","","",D.dd)],x.g):g,v,p,o,s)},
kv(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hNX(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dfg[w]
if(v.b===u)return v}return D.CA},
cD(){var w=Date.now(),v=$.j1
$.j1=v+1
return""+1000*w+"_"+v},
cdI(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.CB){d.e=f.f.l()
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
A.d.L(d.z,C.ep(A.L,!1,4294967295,A.aD,"",n,42,A.bn,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bf,m,2,"Section Header",0,0,"",D.cm,D.cQ,0.84,0.08,0.38))
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
hFz(d){return A.d.dL(D.a2f,new C.cdJ(d),new C.cdK())},
hFw(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aI(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gR(t)
if(!q.b(u))continue
try{J.ch(v,C.VC(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fUp(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cdE(t)
for(w=J.aV(d);w.C();)s.$1(w.gR(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.K)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.b2(u,new C.cdD())
return u},
ha4(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cdz()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aqJ(d){return C.hFu(d)},
hFu(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqJ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cdC()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a23(m),$async$aqJ)
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
return B.b(B.aA(),$async$aqJ)
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
case 11:o=l.$1($.ha3.h(0,m))
n=C.fUp(C.fUp(j,r),o)
if(n.length===0){u=C.ha4(C.ha4(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqJ,v)},
cdy(d){return C.hFt(d)},
hFt(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cdy=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cdy)
case 7:r=f
q=r.t8("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
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
return B.i($async$cdy,v)},
b0B(d,e){return C.hFv(d,e)},
hFv(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0B=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b0B)
case 6:s=g
q=s.t8("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.L(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.L7(r,J.ad(r)-500):r
w=7
return B.b(s.ar("StringList","ngmy_slides_deleted_"+p,o),$async$b0B)
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
return B.i($async$b0B,v)},
VD(d,e){return C.hFx(d,e)},
hFx(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VD=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.ha2.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqJ(a3),$async$VD)
case 5:p=a6
case 4:w=6
return B.b(C.cdy(a3),$async$VD)
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
l=m.k("a_<J.E>")
e=B.C(new B.a_(new B.bc(n,m),new C.cdF(o),l),l.k("J.E"))
A.d.b2(e,new C.cdG())
$.ha2.n(0,a0,e)
n=B.U(e).k("L<1,a4<m,@>>")
n=B.C(new B.L(e,new C.cdH(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.ha3.n(0,a0,r)
t=8
w=11
return B.b(B.ah0(a0,r),$async$VD)
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
aqH:function aqH(d,e){this.a=d
this.b=e},
uD:function uD(d,e){this.a=d
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
cds:function cds(){},
cdt:function cdt(){},
cdr:function cdr(){},
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
cdh:function cdh(){},
cdi:function cdi(){},
cde:function cde(){},
cdf:function cdf(){},
cdg:function cdg(){},
jG:function jG(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cdJ:function cdJ(d){this.a=d},
cdK:function cdK(){},
cdE:function cdE(d){this.a=d},
cdD:function cdD(){},
cdz:function cdz(){},
cdA:function cdA(){},
cdB:function cdB(){},
cdC:function cdC(){},
cdF:function cdF(d){this.a=d},
cdG:function cdG(){},
cdH:function cdH(){},
i3Y(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fCC(e,v,d,B.aX(w))
w.$1(new C.fCy())
w.$1(new C.fCz())
w.$1(new C.fCA())
w.$1(new C.fCB())
return v},
fCC:function fCC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fCy:function fCy(){},
fCz:function fCz(){},
fCA:function fCA(){},
fCB:function fCB(){},
b0y:function b0y(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdn:function cdn(d){this.a=d},
cdm:function cdm(){},
cdo:function cdo(){},
cdp:function cdp(d,e){this.a=d
this.b=e},
cdq:function cdq(d){this.a=d},
anS:function anS(d,e){this.c=d
this.a=e},
biD:function biD(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
dFT:function dFT(){},
aKF:function aKF(){},
cdv(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cdv=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.U(D.eV_)
u=!1
w=1
break}u=B.kU(!1,d,t,!1,null,A.a4S,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdv,v)},
hFr(d){var w=A.d.be(D.GQ,new C.cdw(d))
if(w<0)return!0
return w>=4},
hFs(d){var w=A.d.be($.bDv(),new C.cdx(d))
if(w<0)return!0
return w>=5},
cdw:function cdw(d){this.a=d},
cdx:function cdx(d){this.a=d},
i5D(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yv()
$.qb().pU(t,new C.fFq(s),!0)
u=B.a([B.DH(v,A.qf,t)],x.p)
if(e.length!==0){w=B.n(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f4q,v,v,v),A.f,v,v,new B.o(A.aW,v,v,w,v,v,A.n),v,v,v,v,A.ne,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b0,A.r,u,v)},
fFq:function fFq(d){this.a=d},
i5e(){return C.h0j()},
i2b(){return C.bBs()},
i4e(){return C.h0a()},
aOT(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fEw(d,f),$async$aOT)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOT,v)},
fEw(d,e){var w=0,v=B.j(x.H),u
var $async$fEw=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzE
if(u==null)u=e+".pdf"
w=2
return B.b(B.bR(A.K,null,new C.fEx(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fEw)
case 2:return B.h(null,v)}})
return B.i($async$fEw,v)},
fEx:function fEx(d,e){this.a=d
this.b=e},
ad1:function ad1(d,e,f){this.c=d
this.d=e
this.a=f},
eqf:function eqf(d,e){this.a=d
this.b=e},
eqg:function eqg(d,e){this.a=d
this.b=e},
eqh:function eqh(d,e){this.a=d
this.b=e},
eqi:function eqi(d){this.a=d},
adj:function adj(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0x(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0w(g,m,f,d,e,h,l,k,j,o,i,null)},
hmj(d){return B.cq(new C.fCx(d))},
h0l(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i5m(d){if(d===D.cm)return"None"
return C.h0l(d)},
bA9(d,e,f,g){return C.hWm(d,e,f,g)},
hWm(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bA9=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.fYc&&t.py())t.eN()
$.fYc=!0
s.a=null
w=3
return B.b(B.hT(A.bi,!0,"Animation preview",d,new C.fmT(s,e,g,f),null,A.eG,!0,x.H),$async$bA9)
case 3:s=s.a
if(s!=null)s.a6(0)
$.fYc=!1
case 1:return B.h(u,v)}})
return B.i($async$bA9,v)},
fOS(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fOS=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bV,x.w).w.a.a*0.88,280,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h0l(f)+" Slide transition preview"
s=s?Af.F6:A.vg
w=3
return B.b(C.bA9(d,s,new B.a7(t,t*0.56,B.bw(B.n(14),new C.aIg(f,null),A.aq),null),r),$async$fOS)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fOS,v)},
hlC(d,e,f){var w,v,u=null,t=A.ct.az(0,A.k.D(e,0,1))
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
return B.ft(A.A,B.dc(f,t),u,w,!0)
case 9:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.k_((1-t)*1.2)
return B.ft(A.A,B.dc(f,t),u,w,!0)
case 10:case 19:w=B.dp()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mL((1-t)*0.8)
v=0.6+t*0.4
w.jI(v,v,v,1)
return B.ft(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dc(f,t),new B.u((1-t)*24,0))}},
bD0(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bD0=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bV,x.w).w.a.a*0.88,300,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h0l(f)+" Element animation preview"
s=s?Af.F6:A.vg
w=3
return B.b(C.bA9(d,s,new B.a7(t,t*0.62,B.bw(B.n(14),new C.az_(f,null),A.aq),null),r),$async$bD0)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bD0,v)},
i5l(d){var w,v,u,t,s=$.afG.W(0,d)
if(s!=null){$.afG.n(0,d,s)
return s}w=A.cG.aJ(A.a.b4(d,A.a.cJ(d,",")+1))
$.afG.n(0,d,w)
v=$.fZ_=$.fZ_+w.length
u=B.a3($.afG).k("cu<1>")
for(;;){if(!(v>41943040&&$.afG.a>1))break
t=new B.cu($.afG,u).gae(0)
if(!t.C())B.b8(B.fr())
v-=$.afG.W(0,t.gR(0)).length
$.fZ_=v}return w},
i52(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kW(0,d),j=B.C(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.K)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.St(s,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.St(t,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.St(u,A.cv))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b4(d,r)
v.push(B.de(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a22(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.k1(e))
return m
case"rounded":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.gdO()*0.18
m.F(new B.iL(B.bx(e,new B.aT(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
w=e.d
m.F(new B.ap(e.c,w))
m.F(new B.ap(e.a,w))
m.F(new B.bF())
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
if(o!=null)p.bC(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}else{p=new B.ap(p,o)
m.push(p)
o=v.f
if(o!=null)p.bC(o)
p=v.e
if(p!=null)p.a.delete()
v.e=null}}v.F(new B.bF())
return v
case"diamond":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.b5(e.gbP().a,e.b))
m.F(new B.ap(e.c,e.gbP().b))
m.F(new B.ap(e.gbP().a,e.d))
m.F(new B.ap(e.a,e.gbP().b))
m.F(new B.bF())
return m
case"arch":m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
w=e.a
u=e.d
m.F(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.F(new B.ap(w,p))
m.b9r(new B.u(t,p),new B.aT(s,s))
m.F(new B.ap(t,u))
m.F(new B.bF())
return m
default:m=new B.aO($.W().r,A.ao,n,n,B.a([],m))
m.F(new B.o1(e))
return m}},
fA6(d,e,f){return B.cq(new C.fA7(D.eND.t(0,d),d,f,e))},
b0w:function b0w(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cdl:function cdl(d){this.a=d},
cdk:function cdk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdj:function cdj(){},
b0t:function b0t(d,e){this.b=d
this.a=e},
fCx:function fCx(d){this.a=d},
fCw:function fCw(d,e){this.a=d
this.b=e},
fmT:function fmT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmR:function fmR(d){this.a=d},
fmS:function fmS(d,e){this.a=d
this.b=e},
aIg:function aIg(d,e){this.c=d
this.a=e},
btQ:function btQ(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
f4Y:function f4Y(d,e,f){this.a=d
this.b=e
this.c=f},
aIT:function aIT(d,e){this.b=d
this.a=e},
UF:function UF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biQ:function biQ(d,e){var _=this
_.d=$
_.bt$=d
_.a8$=e
_.c=_.a=null},
dRR:function dRR(d){this.a=d},
dRQ:function dRQ(d){this.a=d},
dRP:function dRP(d){this.a=d},
Iw:function Iw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cdd:function cdd(d){this.a=d},
cdc:function cdc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
az_:function az_(d,e){this.c=d
this.a=e},
bdj:function bdj(){this.d=0
this.c=this.a=null},
d4o:function d4o(d){this.a=d},
d4n:function d4n(d){this.a=d},
a7o:function a7o(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bju:function bju(d,e){var _=this
_.d=null
_.bt$=d
_.a8$=e
_.c=_.a=null},
edw:function edw(d,e,f){this.a=d
this.b=e
this.c=f},
aZs:function aZs(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bet:function bet(d,e,f){this.b=d
this.c=e
this.a=f},
bpq:function bpq(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eV5:function eV5(){},
fA7:function fA7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqq:function bqq(d,e,f){this.b=d
this.c=e
this.a=f},
aKT:function aKT(){},
aLo:function aLo(){},
aML:function aML(){},
fDx(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fDx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x5.c7().LP(D.dcu,A.tM,!0),$async$fDx)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fp(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i4X(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDx,v)},
i4X(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7H(d,new B.a_G(A.cS.gcw().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hY_(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7H(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c7.KC(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7H(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hY_(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cwq().cJg(B.rb(d,A.hW,o,o),o,o,!1).cKZ(0,"word/document.xml")
if(n==null)return""
w=n.cT_()
v=A.c7.KC(0,w==null?$.hoy():w,!0).split("</w:p>")
u=new B.fe("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kW(0,r)
p=A.a.i(B.cF(q,new C.fpM(),B.a3(q).k("J.E"),t).h_(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7H:function a7H(d,e,f){this.a=d
this.b=e
this.c=f},
fpM:function fpM(){},
hFy(d,e,f,g,h,i,j,k,l){return new C.NG(l,e,d,g,f,i,h,j,k,null)},
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
aDQ:function aDQ(d,e,f,g,h,i,j,k,l){var _=this
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
_.a8$=l
_.c=_.a=null},
ewt:function ewt(d){this.a=d},
ewr:function ewr(){},
ews:function ews(d){this.a=d},
esR:function esR(){},
esS:function esS(){},
esT:function esT(d,e){this.a=d
this.b=e},
eur:function eur(d){this.a=d},
euf:function euf(){},
eug:function eug(){},
ese:function ese(){},
evz:function evz(d){this.a=d},
ewp:function ewp(d,e){this.a=d
this.b=e},
eup:function eup(d,e){this.a=d
this.b=e},
ewc:function ewc(d){this.a=d},
ewd:function ewd(){},
ewe:function ewe(){},
ewf:function ewf(d){this.a=d},
ewg:function ewg(){},
erD:function erD(d){this.a=d},
ewq:function ewq(){},
ety:function ety(d,e){this.a=d
this.b=e},
erB:function erB(d){this.a=d},
erC:function erC(d){this.a=d},
etV:function etV(d){this.a=d},
etW:function etW(d,e,f){this.a=d
this.b=e
this.c=f},
etX:function etX(d){this.a=d},
etx:function etx(){},
etw:function etw(d){this.a=d},
etu:function etu(){},
ett:function ett(d){this.a=d},
etv:function etv(){},
esN:function esN(d){this.a=d},
esO:function esO(d){this.a=d},
etE:function etE(d){this.a=d},
etz:function etz(d){this.a=d},
etA:function etA(d){this.a=d},
etB:function etB(d){this.a=d},
etC:function etC(d){this.a=d},
etD:function etD(d){this.a=d},
etF:function etF(d,e){this.a=d
this.b=e},
erF:function erF(){},
erG:function erG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etQ:function etQ(){},
etR:function etR(d,e){this.a=d
this.b=e},
etO:function etO(d,e,f){this.a=d
this.b=e
this.c=f},
etP:function etP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etI:function etI(d,e,f){this.a=d
this.b=e
this.c=f},
etJ:function etJ(d,e,f){this.a=d
this.b=e
this.c=f},
etK:function etK(d){this.a=d},
etL:function etL(d,e){this.a=d
this.b=e},
etM:function etM(d,e){this.a=d
this.b=e},
etN:function etN(d,e){this.a=d
this.b=e},
etH:function etH(d,e){this.a=d
this.b=e},
etT:function etT(d){this.a=d},
etU:function etU(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etS:function etS(d){this.a=d},
eua:function eua(){},
eub:function eub(){},
euc:function euc(){},
eud:function eud(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eu7:function eu7(d){this.a=d},
eu9:function eu9(){},
eu8:function eu8(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eu5:function eu5(d,e,f){this.a=d
this.b=e
this.c=f},
eu6:function eu6(d,e){this.a=d
this.b=e},
eue:function eue(){},
etG:function etG(d,e){this.a=d
this.b=e},
erW:function erW(){},
erX:function erX(d,e,f){this.a=d
this.b=e
this.c=f},
erY:function erY(d){this.a=d},
erZ:function erZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
erV:function erV(d){this.a=d},
euk:function euk(d){this.a=d},
euj:function euj(d,e){this.a=d
this.b=e},
eui:function eui(d,e){this.a=d
this.b=e},
euh:function euh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eul:function eul(d,e){this.a=d
this.b=e},
eqA:function eqA(d,e){this.a=d
this.b=e},
erU:function erU(d,e){this.a=d
this.b=e},
erS:function erS(d){this.a=d},
eut:function eut(d,e,f){this.a=d
this.b=e
this.c=f},
erO:function erO(d,e){this.a=d
this.b=e},
erN:function erN(d){this.a=d},
eus:function eus(d,e,f){this.a=d
this.b=e
this.c=f},
erE:function erE(d){this.a=d},
esf:function esf(){},
ewa:function ewa(d,e){this.a=d
this.b=e},
ewb:function ewb(d,e,f){this.a=d
this.b=e
this.c=f},
evA:function evA(d,e,f){this.a=d
this.b=e
this.c=f},
eqB:function eqB(d){this.a=d},
eqy:function eqy(d,e){this.a=d
this.b=e},
eqo:function eqo(d,e){this.a=d
this.b=e},
eql:function eql(d){this.a=d},
eqk:function eqk(d,e){this.a=d
this.b=e},
eqm:function eqm(d,e){this.a=d
this.b=e},
erQ:function erQ(d){this.a=d},
erR:function erR(d,e){this.a=d
this.b=e},
erP:function erP(d){this.a=d},
er2:function er2(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
er3:function er3(d,e){this.a=d
this.b=e},
er7:function er7(d,e){this.a=d
this.b=e},
er8:function er8(d){this.a=d},
er5:function er5(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
er6:function er6(d){this.a=d},
er4:function er4(){},
er1:function er1(d,e,f){this.a=d
this.b=e
this.c=f},
eu4:function eu4(d,e){this.a=d
this.b=e},
ewj:function ewj(d){this.a=d},
ewk:function ewk(d,e){this.a=d
this.b=e},
ewl:function ewl(d){this.a=d},
ewm:function ewm(d,e,f){this.a=d
this.b=e
this.c=f},
ewi:function ewi(d){this.a=d},
evQ:function evQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evP:function evP(d,e,f){this.a=d
this.b=e
this.c=f},
evO:function evO(){},
evN:function evN(d,e,f){this.a=d
this.b=e
this.c=f},
evM:function evM(d,e){this.a=d
this.b=e},
evJ:function evJ(d,e,f){this.a=d
this.b=e
this.c=f},
evH:function evH(d){this.a=d},
evI:function evI(d){this.a=d},
evL:function evL(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evK:function evK(d){this.a=d},
esJ:function esJ(d,e){this.a=d
this.b=e},
esI:function esI(d,e){this.a=d
this.b=e},
evB:function evB(){},
ew9:function ew9(d,e){this.a=d
this.b=e},
ew7:function ew7(d){this.a=d},
ew8:function ew8(d){this.a=d},
eqt:function eqt(d,e){this.a=d
this.b=e},
eqr:function eqr(d){this.a=d},
eqs:function eqs(d){this.a=d},
equ:function equ(d,e){this.a=d
this.b=e},
eqv:function eqv(d,e,f){this.a=d
this.b=e
this.c=f},
eqz:function eqz(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e,f){this.a=d
this.b=e
this.c=f},
eqp:function eqp(d){this.a=d},
euq:function euq(d,e,f){this.a=d
this.b=e
this.c=f},
ewh:function ewh(d,e,f){this.a=d
this.b=e
this.c=f},
esM:function esM(d,e,f){this.a=d
this.b=e
this.c=f},
esL:function esL(){},
erb:function erb(d,e,f){this.a=d
this.b=e
this.c=f},
erc:function erc(d){this.a=d},
eqn:function eqn(d,e){this.a=d
this.b=e},
esd:function esd(d,e){this.a=d
this.b=e},
eqw:function eqw(d,e){this.a=d
this.b=e},
eqF:function eqF(d){this.a=d},
eqG:function eqG(d,e){this.a=d
this.b=e},
eqH:function eqH(d,e){this.a=d
this.b=e},
eqE:function eqE(d){this.a=d},
eqS:function eqS(d,e){this.a=d
this.b=e},
eqD:function eqD(d){this.a=d},
eqV:function eqV(d){this.a=d},
eqW:function eqW(d){this.a=d},
eqX:function eqX(d){this.a=d},
eqY:function eqY(d){this.a=d},
eqZ:function eqZ(d){this.a=d},
er_:function er_(){},
er0:function er0(){},
eqI:function eqI(d){this.a=d},
eqJ:function eqJ(d){this.a=d},
eqK:function eqK(d){this.a=d},
eqL:function eqL(d){this.a=d},
eqM:function eqM(d){this.a=d},
eqN:function eqN(d){this.a=d},
eqO:function eqO(d){this.a=d},
eqP:function eqP(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
eqR:function eqR(d){this.a=d},
eqT:function eqT(d){this.a=d},
eqU:function eqU(d,e){this.a=d
this.b=e},
esc:function esc(d,e,f){this.a=d
this.b=e
this.c=f},
esb:function esb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esa:function esa(d,e,f){this.a=d
this.b=e
this.c=f},
es9:function es9(d,e){this.a=d
this.b=e},
eqx:function eqx(d,e){this.a=d
this.b=e},
erf:function erf(d){this.a=d},
ere:function ere(d){this.a=d},
erd:function erd(d,e){this.a=d
this.b=e},
erg:function erg(d){this.a=d},
erh:function erh(d){this.a=d},
eri:function eri(d,e){this.a=d
this.b=e},
erT:function erT(d){this.a=d},
eu3:function eu3(d,e){this.a=d
this.b=e},
eu2:function eu2(d,e){this.a=d
this.b=e},
eu1:function eu1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eu_:function eu_(d){this.a=d},
eu0:function eu0(d,e){this.a=d
this.b=e},
etY:function etY(){},
etZ:function etZ(){},
evC:function evC(){},
evD:function evD(d,e){this.a=d
this.b=e},
evE:function evE(){},
evF:function evF(d){this.a=d},
evG:function evG(d,e){this.a=d
this.b=e},
eqC:function eqC(d,e){this.a=d
this.b=e},
erH:function erH(){},
erI:function erI(){},
erJ:function erJ(){},
erM:function erM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
erL:function erL(d,e){this.a=d
this.b=e},
erK:function erK(d,e,f){this.a=d
this.b=e
this.c=f},
etc:function etc(d){this.a=d},
etb:function etb(){},
etd:function etd(d,e){this.a=d
this.b=e},
ete:function ete(d,e){this.a=d
this.b=e},
eta:function eta(d){this.a=d},
etf:function etf(d,e){this.a=d
this.b=e},
et9:function et9(d){this.a=d},
etg:function etg(d,e){this.a=d
this.b=e},
et8:function et8(d){this.a=d},
eth:function eth(d,e){this.a=d
this.b=e},
et7:function et7(d){this.a=d},
eti:function eti(d,e){this.a=d
this.b=e},
et6:function et6(d,e){this.a=d
this.b=e},
etj:function etj(d,e){this.a=d
this.b=e},
et5:function et5(d){this.a=d},
etk:function etk(d,e){this.a=d
this.b=e},
et4:function et4(d){this.a=d},
esY:function esY(d,e){this.a=d
this.b=e},
esZ:function esZ(d){this.a=d},
et_:function et_(d){this.a=d},
esX:function esX(d){this.a=d},
et0:function et0(d,e){this.a=d
this.b=e},
esW:function esW(d){this.a=d},
et1:function et1(d,e){this.a=d
this.b=e},
esV:function esV(d){this.a=d},
et2:function et2(d,e){this.a=d
this.b=e},
esU:function esU(d){this.a=d},
et3:function et3(d){this.a=d},
es5:function es5(d){this.a=d},
es6:function es6(d){this.a=d},
es8:function es8(d){this.a=d},
es0:function es0(d){this.a=d},
es_:function es_(d,e){this.a=d
this.b=e},
es1:function es1(d,e){this.a=d
this.b=e},
es2:function es2(d){this.a=d},
es3:function es3(d){this.a=d},
es4:function es4(d,e){this.a=d
this.b=e},
es7:function es7(d){this.a=d},
ewn:function ewn(d){this.a=d},
ewo:function ewo(d){this.a=d},
etn:function etn(d,e){this.a=d
this.b=e},
etm:function etm(d,e){this.a=d
this.b=e},
etl:function etl(d,e){this.a=d
this.b=e},
eto:function eto(d){this.a=d},
etp:function etp(d){this.a=d},
euM:function euM(d,e){this.a=d
this.b=e},
euN:function euN(d){this.a=d},
euO:function euO(d){this.a=d},
euZ:function euZ(d){this.a=d},
ev9:function ev9(d){this.a=d},
evk:function evk(d){this.a=d},
evr:function evr(d){this.a=d},
evs:function evs(d){this.a=d},
evt:function evt(d){this.a=d},
evu:function evu(d){this.a=d},
evv:function evv(d,e){this.a=d
this.b=e},
euP:function euP(d){this.a=d},
euQ:function euQ(d){this.a=d},
euR:function euR(d){this.a=d},
euS:function euS(d){this.a=d},
euT:function euT(d){this.a=d},
euU:function euU(d){this.a=d},
euV:function euV(d){this.a=d},
euW:function euW(d){this.a=d},
euX:function euX(d){this.a=d},
euY:function euY(d){this.a=d},
ev_:function ev_(d){this.a=d},
ev0:function ev0(d){this.a=d},
ev1:function ev1(d){this.a=d},
ev2:function ev2(d){this.a=d},
ev3:function ev3(d){this.a=d},
ev4:function ev4(d){this.a=d},
ev5:function ev5(d){this.a=d},
ev6:function ev6(d){this.a=d},
ev7:function ev7(d){this.a=d},
euC:function euC(d){this.a=d},
ev8:function ev8(d){this.a=d},
euK:function euK(d){this.a=d},
eva:function eva(d){this.a=d},
euJ:function euJ(d,e){this.a=d
this.b=e},
evb:function evb(d,e){this.a=d
this.b=e},
evc:function evc(d,e){this.a=d
this.b=e},
euI:function euI(d,e,f){this.a=d
this.b=e
this.c=f},
euy:function euy(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
evw:function evw(d,e){this.a=d
this.b=e},
evy:function evy(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
evx:function evx(d,e){this.a=d
this.b=e},
evd:function evd(d,e,f){this.a=d
this.b=e
this.c=f},
euH:function euH(d,e,f){this.a=d
this.b=e
this.c=f},
eux:function eux(d,e,f){this.a=d
this.b=e
this.c=f},
euv:function euv(d,e){this.a=d
this.b=e},
eve:function eve(d,e){this.a=d
this.b=e},
euG:function euG(d,e){this.a=d
this.b=e},
euw:function euw(d,e){this.a=d
this.b=e},
euu:function euu(d,e){this.a=d
this.b=e},
evf:function evf(d){this.a=d},
euF:function euF(d){this.a=d},
evg:function evg(d){this.a=d},
evh:function evh(d){this.a=d},
evi:function evi(d){this.a=d},
evj:function evj(d){this.a=d},
euE:function euE(d){this.a=d},
evl:function evl(d){this.a=d},
evm:function evm(d){this.a=d},
evn:function evn(d,e){this.a=d
this.b=e},
euD:function euD(d){this.a=d},
evo:function evo(d,e){this.a=d
this.b=e},
euB:function euB(d){this.a=d},
evp:function evp(d,e){this.a=d
this.b=e},
euA:function euA(d){this.a=d},
evq:function evq(d,e){this.a=d
this.b=e},
euz:function euz(d){this.a=d},
era:function era(d,e,f){this.a=d
this.b=e
this.c=f},
er9:function er9(d,e){this.a=d
this.b=e},
evT:function evT(d,e){this.a=d
this.b=e},
evS:function evS(d,e){this.a=d
this.b=e},
evU:function evU(d,e){this.a=d
this.b=e},
evR:function evR(d,e){this.a=d
this.b=e},
esi:function esi(d,e){this.a=d
this.b=e},
esh:function esh(d){this.a=d},
esj:function esj(d,e){this.a=d
this.b=e},
esg:function esg(d){this.a=d},
esQ:function esQ(){},
esP:function esP(){},
ew5:function ew5(d){this.a=d},
ew4:function ew4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew3:function ew3(d,e){this.a=d
this.b=e},
evZ:function evZ(d,e){this.a=d
this.b=e},
ew2:function ew2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ew_:function ew_(d,e){this.a=d
this.b=e},
evV:function evV(d){this.a=d},
evW:function evW(d){this.a=d},
evX:function evX(d){this.a=d},
evY:function evY(d){this.a=d},
ew0:function ew0(d,e){this.a=d
this.b=e},
ew1:function ew1(d,e){this.a=d
this.b=e},
ew6:function ew6(d){this.a=d},
erA:function erA(d){this.a=d},
erz:function erz(d,e,f){this.a=d
this.b=e
this.c=f},
ery:function ery(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ern:function ern(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ero:function ero(d,e){this.a=d
this.b=e},
erp:function erp(d,e){this.a=d
this.b=e},
erq:function erq(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erm:function erm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
err:function err(d,e){this.a=d
this.b=e},
ert:function ert(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ers:function ers(d,e){this.a=d
this.b=e},
eru:function eru(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erl:function erl(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erv:function erv(d,e){this.a=d
this.b=e},
erk:function erk(d,e){this.a=d
this.b=e},
erw:function erw(d,e){this.a=d
this.b=e},
erj:function erj(d){this.a=d},
erx:function erx(d,e){this.a=d
this.b=e},
etr:function etr(d){this.a=d},
etq:function etq(d){this.a=d},
ets:function ets(d,e){this.a=d
this.b=e},
esw:function esw(d,e){this.a=d
this.b=e},
esx:function esx(d,e){this.a=d
this.b=e},
esv:function esv(d,e){this.a=d
this.b=e},
esy:function esy(d,e){this.a=d
this.b=e},
esu:function esu(d,e){this.a=d
this.b=e},
esz:function esz(d,e){this.a=d
this.b=e},
est:function est(d,e){this.a=d
this.b=e},
esA:function esA(d,e){this.a=d
this.b=e},
ess:function ess(d,e){this.a=d
this.b=e},
esB:function esB(d,e){this.a=d
this.b=e},
esr:function esr(d,e){this.a=d
this.b=e},
esC:function esC(d,e,f){this.a=d
this.b=e
this.c=f},
esq:function esq(d,e){this.a=d
this.b=e},
esD:function esD(d,e,f){this.a=d
this.b=e
this.c=f},
esp:function esp(d,e){this.a=d
this.b=e},
esE:function esE(d,e){this.a=d
this.b=e},
eso:function eso(d,e,f){this.a=d
this.b=e
this.c=f},
esl:function esl(d,e){this.a=d
this.b=e},
esF:function esF(d,e){this.a=d
this.b=e},
esn:function esn(d,e){this.a=d
this.b=e},
esG:function esG(d,e){this.a=d
this.b=e},
esm:function esm(d,e,f){this.a=d
this.b=e
this.c=f},
esk:function esk(d,e){this.a=d
this.b=e},
esH:function esH(d,e){this.a=d
this.b=e},
esK:function esK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqj:function eqj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euo:function euo(d,e){this.a=d
this.b=e},
eum:function eum(d){this.a=d},
eun:function eun(d,e){this.a=d
this.b=e},
aeP:function aeP(d,e,f){this.a=d
this.b=e
this.c=f},
aym:function aym(d,e){this.c=d
this.a=e},
bc5:function bc5(d,e){var _=this
_.e=_.d=$
_.cQ$=d
_.b3$=e
_.c=_.a=null},
d0_:function d0_(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
bcj:function bcj(d,e){this.c=d
this.a=e},
d0l:function d0l(d){this.a=d},
d0m:function d0m(d){this.a=d},
Jy:function Jy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bc4:function bc4(){this.d=!1
this.c=this.a=null},
d_X:function d_X(d){this.a=d},
d_T:function d_T(d){this.a=d},
d_Y:function d_Y(d){this.a=d},
d_S:function d_S(d){this.a=d},
d_W:function d_W(d){this.a=d},
d_U:function d_U(d){this.a=d},
d_V:function d_V(d,e){this.a=d
this.b=e},
Pl:function Pl(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_9:function a_9(d,e,f){this.c=d
this.d=e
this.a=f},
aDT:function aDT(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bt$=e
_.a8$=f
_.c=_.a=null},
ex3:function ex3(){},
ewU:function ewU(d){this.a=d},
ex2:function ex2(d){this.a=d},
ewV:function ewV(d){this.a=d},
ewW:function ewW(d){this.a=d},
ewQ:function ewQ(d){this.a=d},
ewR:function ewR(d,e){this.a=d
this.b=e},
ewS:function ewS(d){this.a=d},
ewT:function ewT(d,e,f){this.a=d
this.b=e
this.c=f},
ex0:function ex0(){},
ex1:function ex1(d){this.a=d},
ewX:function ewX(d){this.a=d},
ewY:function ewY(d){this.a=d},
ewZ:function ewZ(d){this.a=d},
ex_:function ex_(d){this.a=d},
ex4:function ex4(d,e,f){this.a=d
this.b=e
this.c=f},
ex6:function ex6(d,e){this.a=d
this.b=e},
ex5:function ex5(d){this.a=d},
JF:function JF(d,e){this.c=d
this.a=e},
bqV:function bqV(d,e){this.b=d
this.a=e},
bgY:function bgY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgX:function bgX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJA:function aJA(){},
aLC:function aLC(){},
bwE:function bwE(){},
aLD:function aLD(){},
fFr(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fFr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x5.c7().LP(B.a(["pdf"],x.s),A.tM,!0),$async$fFr)
case 3:q=e
if(q==null||J.cn(q.a)){u=null
w=1
break}t=J.fp(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bob(s,"data:application/pdf;base64,"+A.cS.gcw().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFr,v)},
i5x(d){var w,v,u,t,s,r
try{w=B.js(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c8(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kW(0,w).gM(0)
if(t>0){s=J.aQe(t,1,200)
return s}}catch(r){}return 1},
fFi(d){return C.i5w(d)},
i5w(d){var w=0,v=B.j(x.T),u
var $async$fFi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFi,v)},
bCd(d,e,f,g){return C.i5G(d,e,f,g)},
i5G(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCd=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b6,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hmU(b9,new B.ar(r,q))
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
g=new B.qW()
f=B.Db(g,null)
a7=B.N()
a7.r=A.qL.gp(0)
f.aZ(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.N()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bQ
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
b2.delete()}a0=a2}a3=g.pE()
w=7
return B.b(a3.zh(800,h),$async$bCd)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.ht(A.fY),$async$bCd)
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
return B.i($async$bCd,v)},
aPs(d,e,f){return C.i5u(d,e,f)},
i5u(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPs=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.az:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahf(d,e,f,new C.fFg(r,q),q,"Sign document"),$async$aPs)
case 3:if(!new B.e9(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bCd(q,t,r.b,r.c),$async$aPs)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0A(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPs,v)},
i5E(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hg5(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hg5(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b4(A.a.aT(A.o.fU(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.K)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.ab(q.c*100,2)+"%;top:"+A.k.ab(q.d*100,2)+"%;width:"+A.k.ab(q.e*100,2)+"%;height:"+A.k.ab(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b4(A.a.aT(A.o.fU(q.Q,16),8,"0"),2)
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
case 2:d+='<div style="width:100%;height:100%;background:'+C.hfI(q.ay)+";border:2px solid "+C.hfI(q.ch)+'"></div>'
break
case 5:l=C.h_c(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaje()
if(p==null)p=A.awR
n=B.U(p)
k=n.k("nj<1>")
j=new B.nj(p,0,8,k)
j.zG(p,0,8,n.c)
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
hfI(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.ab((w&255)/255,3)+")"},
hg5(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bCb(d,e){var w=0,v=B.j(x.H)
var $async$bCb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cb(null,null,!0,null,new C.fFp(e,C.i5E(e),d),d,null,!0,!0,x.H),$async$bCb)
case 2:return B.h(null,v)}})
return B.i($async$bCb,v)},
bCc(){var w=0,v=B.j(x.T),u,t,s
var $async$bCc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gs(92,2400),$async$bCc)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fFi(s),$async$bCc)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCc,v)},
aPt(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h0q(d),$async$aPt)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fHN(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPt,v)},
ha0(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0A:function b0A(d,e,f){this.a=d
this.b=e
this.c=f},
fFg:function fFg(d,e){this.a=d
this.b=e},
fFp:function fFp(d,e,f){this.a=d
this.b=e
this.c=f},
fFm:function fFm(d){this.a=d},
fFn:function fFn(d,e,f){this.a=d
this.b=e
this.c=f},
fFo:function fFo(d,e,f){this.a=d
this.b=e
this.c=f},
i5v(d){return C.kv(d.w)},
i5C(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.i7m()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yt(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hsz()
if(w.b.test(u))return u
return null},
hmW(d,e,f){var w,v,u=C.hBa(d),t=$.pr()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i5I(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f3(w,d.b);v.C();){u=w.gR(w).y
t=C.yt(u==null?"":u)
if(t!=null)s.L(0,t)}return s},
fFe(d,e){var w,v=d.y,u=C.yt(v==null?"":v)
if(u!=null)return d.y=u
w=C.i5I(new B.a_(e,new C.fFf(d),B.U(e).k("a_<1>")))
v=d.x
return d.y=C.hmW(v==null?"":v,null,w)},
i5H(d){var w,v
if(d.length!==1)return null
w=A.d.gJ(d)
if(!C.kv(w.w))return null
v=w.y
return C.yt(v==null?"":v)},
hFA(){var w,v=$.pr(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.h_(u)},
VG(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$VG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VG)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f5("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bH),$async$VG)
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
VH(d){return C.hFB(d)},
hFB(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$VH=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$VH)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hE("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a7().ac()],x.N,x.z),!1,!1,A.cI,null),$async$VH)
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
a7J(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7J=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7J)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.VG(),$async$a7J)
case 4:s=a6
r=C.yt(a2==null?"":a2)
if(r==null)r=a3!=null?C.hmW(a3,null,A.Iu):null
q=x.N
p=B.aX(q)
for(o=J.dl(s),n=J.aV(o.gi6(s)),m=x.f;n.C();){l=n.gR(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yt(J.k(k==null?"":k))
if(j!=null)p.L(0,j)}n=o.gdK(s),n=n.gae(n),k=x.z
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
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a7().ac())
if(D.SP.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yt(J.k(q==null?"":q))
if(f==null)f=C.ha5(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VH(s),$async$a7J)
case 7:u=new B.aFj(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hFA()
n=r==null
d=n?C.ha5(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cS.gcw().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a7().ac())
if(D.SP.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VH(s),$async$a7J)
case 8:u=new B.aFj(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7J,v)},
ha5(d){var w,v,u=$.pr()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.L(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aqL(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqL=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqL)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VG(),$async$aqL)
case 6:t=f
s=J.a5(t)
r=s.gM(t)
s.bp(t,new C.cdL(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VH(t),$async$aqL)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqL,v)},
aqK(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yt(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqK)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VG(),$async$aqK)
case 6:t=o.jy(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gR(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yt(J.k(q==null?"":q))===p){u=C.a7I(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqK,v)},
a7I(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7I=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7I)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.VG(),$async$a7I)
case 6:p=a1
o=J.a5(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a5(n)
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
try{s=A.c7.ca(0,A.cG.aJ(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.SP.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aI(0,s,null)
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
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a7().ac())
o.n(p,g,l)}w=7
return B.b(C.VH(p),$async$a7I)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7I,v)},
i5B(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a7().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("L<1,a4<m,@>>")
w=B.C(new B.L(d,new C.fFl(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fFt(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a7().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.R.ao(w,null)}return A.R.ao(C.i5B(d==null?B.a([],x.D):d,f,g),null)},
fFs(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fFs=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7J(h,d,e,f,g),$async$fFs)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yt(e==null?"":e)
u=new B.aF6(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.kg.gcw().aJ(t)
u=new B.aF6(C.yt(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fFs,v)},
h0s(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d0(q,"NGMYSLIDESYNC2|"))return!0
if(J.d0(q,"NGMYSLIDECODE|"))return!0
if(J.d0(q,"NGMY_SL:"))return!0
if(J.f0(q,s)||J.f0(q,r))return!0
if(J.d0(q,"{"))try{w=A.R.aI(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.A(v,s)||J.A(v,r)
return u}}catch(t){}return!1},
i5F(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h0s(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b4(v,u))
if(C.h0s(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b4(v,s))
if(C.h0s(t))return t}}return null},
fFh(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d0(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d0(t,"NGMY_SL:"))w=v.a(A.R.aI(0,A.c7.ca(0,A.cG.aJ(J.mF(t,8))),null))
else w=v.a(A.R.aI(0,t,null))
v=C.hPl(w)
return v}catch(u){v=B.a([],x.D)
return v}},
ah_(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$ah_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqK(t[1]),$async$ah_)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fFh(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yt(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqK(r),$async$ah_)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fFh(s)
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
return B.b(C.a7I(t[1]),$async$ah_)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fFh(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fFh(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ah_,v)},
hPl(d){var w,v,u,t=J.a5(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.SP.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h0p(C.VC(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cF(t,new C.fd6(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
h0p(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cD())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gR(u)
if(t.b(s)){r=Date.now()
q=$.j1
$.j1=q+1
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.VC(B.a2(o,x.N,x.z))
if(e&&C.kv(p.w))p.Q=new B.S(Date.now(),0,!1).a7().bR(144e8).ac()
return p},
bBX(){var w=0,v=B.j(x.aT),u,t,s
var $async$bBX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gr(),$async$bBX)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.ah_(s),$async$bBX)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBX,v)},
fO6(d){var w=0,v=B.j(x.T),u,t
var $async$fO6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hT(D.Wy,!0,"Dismiss",d,new C.fO7(),new C.fO8(),A.F4,!0,x.N),$async$fO6)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.U(D.eTc)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fO6,v)},
i9t(d,e,f,g,h){return B.a6(d,!1).cl(B.e8(new C.fO9(h,e,g,f),!0,null,x.H))},
fFf:function fFf(d){this.a=d},
cdL:function cdL(d){this.a=d},
fFl:function fFl(){},
fd6:function fd6(d){this.a=d},
fO7:function fO7(){},
fO8:function fO8(){},
fO9:function fO9(d,e,f,g){var _=this
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
aDR:function aDR(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
ewA:function ewA(){},
eww:function eww(d,e){this.a=d
this.b=e},
ewz:function ewz(d,e){this.a=d
this.b=e},
ewx:function ewx(d){this.a=d},
ewy:function ewy(d){this.a=d},
ewB:function ewB(d){this.a=d},
ewC:function ewC(d){this.a=d},
ewF:function ewF(d){this.a=d},
ewG:function ewG(d){this.a=d},
ewE:function ewE(d){this.a=d},
ewH:function ewH(d){this.a=d},
ewD:function ewD(d){this.a=d},
ewI:function ewI(d,e){this.a=d
this.b=e},
ewv:function ewv(d,e){this.a=d
this.b=e},
ewu:function ewu(d,e){this.a=d
this.b=e},
VF:function VF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjQ:function bjQ(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
ewJ:function ewJ(d,e){this.a=d
this.b=e},
ewK:function ewK(d){this.a=d},
ewL:function ewL(){},
ewM:function ewM(d){this.a=d},
ewN:function ewN(d,e){this.a=d
this.b=e},
aDO:function aDO(d){this.a=d},
aDP:function aDP(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eqd:function eqd(d){this.a=d},
eqc:function eqc(){},
eqe:function eqe(d){this.a=d},
eq9:function eq9(d){this.a=d},
eq8:function eq8(){},
eqa:function eqa(d){this.a=d},
eqb:function eqb(d){this.a=d},
bua:function bua(){},
aqM:function aqM(d){this.a=d},
aDS:function aDS(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ewP:function ewP(d){this.a=d},
ewO:function ewO(d){this.a=d},
hUv(){var w,v,u,t
for(v=0;v<4;++v){w=D.d1A[v]
try{if(Ac.bWo(w)){u=w
return u}}catch(t){}}return null},
QR(d,e){return C.i2m(d,e)},
i2m(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QR=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hUv()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oc?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qt(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gJ(c3)
b9=$.aw()
o=new B.eS(b8,b9)
n=new B.eS("Getting ready\u2026",b9)
m=new B.eS(0,b9)
l=B.oi(new C.fzA(c2,b7,o),!1,!1)
b6.lR(0,l)
b9=x.H
B.cb(null,A.d9,!1,null,new C.fzB(n,m),c6,null,!0,!0,b9)
k=new C.fzF(b7)
j=new C.fzG()
i=null
t=4
b3=c2.a
h=Aj.aRJ(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fQP(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWC(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Ht.yk(i,"dataavailable",new C.fzC(e))
d=new B.bW(new B.bg($.bz,x.dT),x.b2)
A.Ht.yk(i,"stop",new C.fzD(d))
J.ahB(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QR)
case 8:w=7
return B.b(c5.$1(d0),$async$QR)
case 7:a0=d0
J.fQR(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahB(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ahB(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QR)
case 15:w=14
return B.b(c5.$1(d0),$async$QR)
case 14:a0=d0
case 13:J.fQR(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahB(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bR(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcz()
else b3=!0
if(!b3){w=17
break}J.fQR(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fp,null,b9),$async$QR)
case 18:w=16
break
case 17:J.ahB(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahB(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cO(0,A.nV),$async$QR)
case 19:a5=A.d.gJ(q.split(";"))
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
J.lV(b0)
B.bN(A.nU,new C.fzE(a7),b9)
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
J.lV(l)
if(p.py())p.eN()
c3=o
b3=$.aw()
c3.shX(b3)
J.aQi(c3,0)
c3=n
c3.shX(b3)
J.aQi(c3,0)
c3=m
c3.shX(b3)
J.aQi(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QR,v)},
fzA:function fzA(d,e,f){this.a=d
this.b=e
this.c=f},
fzz:function fzz(){},
fzB:function fzB(d,e){this.a=d
this.b=e},
fzF:function fzF(d){this.a=d},
fzG:function fzG(){},
fzC:function fzC(d){this.a=d},
fzD:function fzD(d){this.a=d},
fzE:function fzE(d){this.a=d},
bum:function bum(d,e,f){this.c=d
this.d=e
this.a=f},
f7p:function f7p(){},
f7q:function f7q(){},
ce7(d){var w=0,v=B.j(x.at),u,t,s
var $async$ce7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqW(d,A.zd),$async$ce7)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bD(new B.S(Date.now(),0,!1))
if(t.a<0){u=A.bx
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$ce7,v)},
ce6(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7p:function a7p(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjz:function bjz(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
een:function een(d){this.a=d},
eel:function eel(d){this.a=d},
eem:function eem(d,e){this.a=d
this.b=e},
a8h:function a8h(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a8i:function a8i(d,e){this.a=d
this.b=e},
b2d:function b2d(){},
cgj:function cgj(){},
cgk:function cgk(){},
cgl:function cgl(d,e,f,g,h,i,j,k,l){var _=this
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
htz(d){return new C.ahT(d)},
a2u:function a2u(){},
ahT:function ahT(d){this.a=d},
aQD:function aQD(){},
awe:function awe(d,e){this.d=d
this.b=e
this.a=null},
aS7:function aS7(d){this.b=d
this.a=null},
fuJ(d,e){var w=0,v=B.j(x.H)
var $async$fuJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxv().Lx(d,e),$async$fuJ)
case 2:B.fHT()
return B.h(null,v)}})
return B.i($async$fuJ,v)},
hkd(d,e){return(A.rl[(d^e)&255]^A.o.aA(d,8))>>>0},
fsc(d,e,f,g,h,i){var w=C.hZI(d,A.dc,f,null,A.cX,g,h,i)
return w},
hm4(d){var w=F.hmN(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hBa(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.p0.h(0,w)
if(v!=null)return v
for(u=A.p0.gdK(A.p0),u=u.gae(u);u.C();){t=u.gR(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hmc(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<44;++w)v+="- "+D.ddR[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bA6(d,e){return C.hWh(d,e)},
hWh(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bA6=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hO([d],"application/pdf")
n=x.z
q=B.aTM(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cB(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.ei(B.jZ(o,"share",[p]),x.H),$async$bA6)
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
return B.i($async$bA6,v)},
h0j(){var w=0,v=B.j(x.y),u,t,s
var $async$h0j=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fkm
s=$.bzE
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bA6(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h0j,v)},
bBs(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBs=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fkm
l=$.bzE
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hgM()?3:4
break
case 3:w=5
return B.b(C.bA6(m,k),$async$bBs)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzF
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
return B.b(B.bN(A.a1,null,x.H),$async$bBs)
case 10:J.lV(q)
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
return B.i($async$bBs,v)},
h0a(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h0a=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzF
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
return B.i($async$h0a,v)},
h0r(d,e){var w=0,v=B.j(x.H),u,t
var $async$h0r=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hO([d],"text/html"))
t.toString
u=window
u.toString
A.ly.uF(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h0r,v)},
b1a(d,e){var w=0,v=B.j(x.y),u
var $async$b1a=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b1c(d,e),$async$b1a)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b1b(d),$async$b1a)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b1a,v)}},D,H,I,Am,A8,X,V,An,G,F,E,W,Q,Y,Z,Ao,Ap,A9,L,Aq,A_,O,A0,Aa,M,Ab,Ar,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,K,Az,S,T,AA,N,A2,A3,A4
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
Aa=c[102]
M=c[149]
Ab=c[101]
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
C.nR.prototype={
uZ(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tK(t,v)
return new C.nR(t===0?!1:w,v,t)},
bKQ(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CQ()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tK(w,u)
return new C.nR(r===0?!1:s,u,r)},
bLk(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CQ()
w=o-d
if(w<=0)return p.a?$.h1Q():$.CQ()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tK(w,u)
q=new C.nR(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a2h())
return q},
dW(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.E(e,16)===0)return r.bKQ(v)
u=w+v+1
t=new Uint16Array(u)
C.hdm(r.b,w,e,t)
w=r.a
s=C.tK(u,t)
return new C.nR(s===0?!1:w,t,s)},
mr(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.E(e,16)
if(u===0)return n.bLk(v)
t=w-v
if(t<=0)return n.a?$.h1Q():$.CQ()
s=n.b
r=new Uint16Array(t)
C.hLf(s,w,e,r)
w=n.a
q=C.tK(t,r)
p=new C.nR(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dW(1,u)-1)!==0)return p.aC(0,$.a2h())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a2h())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cEg(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7G(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7G(t,e)
if(s===0)return $.CQ()
if(r===0)return t.a===e?t:t.uZ(0)
w=s+1
v=new Uint16Array(w)
C.hLd(t.b,s,d.b,r,v)
u=C.tK(w,v)
return new C.nR(u===0?!1:e,v,u)},
H7(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CQ()
w=d.c
if(w===0)return t.a===e?t:t.uZ(0)
v=new Uint16Array(s)
C.b9i(t.b,s,d.b,w,v)
u=C.tK(s,v)
return new C.nR(u===0?!1:e,v,u)},
bxQ(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tK(r,u)
return new C.nR(!1,u,s)},
bxP(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tK(u,r)
return new C.nR(!1,r,v)},
bxR(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tK(p,m)
return new C.nR(s!==0,m,s)},
Us(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CQ()
w=t.a
if(w===e.a){if(w){w=$.a2h()
return t.H7(w,!0).bxR(e.H7(w,!0),!0).a7G(w,!0)}return t.bxQ(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bxP(v.H7($.a2h(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7G(e,v)
if(C.cEg(u.b,t,e.b,w)>=0)return u.H7(e,v)
return e.H7(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uZ(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7G(e,v)
if(C.cEg(u.b,t,e.b,w)>=0)return u.H7(e,v)
return e.H7(u,!v)},
aG(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CQ()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hdn(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tK(w,t)
return new C.nR(q===0?!1:r,t,q)},
bKP(d){var w,v,u,t
if(this.c<d.c)return $.CQ()
this.aQG(d)
w=$.fWi.c7()-$.awY.c7()
v=C.fWk($.fWh.c7(),$.awY.c7(),$.fWi.c7(),w)
u=C.tK(w,v)
t=new C.nR(!1,v,u)
return this.a!==d.a&&u>0?t.uZ(0):t},
cmT(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQG(d)
w=C.fWk($.fWh.c7(),0,$.awY.c7(),$.awY.c7())
v=C.tK($.awY.c7(),w)
u=new C.nR(!1,w,v)
if($.fWj.c7()>0)u=u.mr(0,$.fWj.c7())
return t.a&&u.c>0?u.uZ(0):u},
aQG(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hdj&&d.c===$.hdl&&g.b===$.hdi&&d.b===$.hdk)return
w=d.b
v=d.c
u=16-A.o.gajD(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hdh(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hdh(g.b,f,u,r)}else{r=C.fWk(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fWl(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cEg(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9i(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9i(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hLe(p,r,i);--o
C.hdn(h,j,0,r,o,s)
if(r[i]<h){m=C.fWl(j,s,o,n)
C.b9i(r,l,n,m,r)
while(--h,r[i]<h)C.b9i(r,l,n,m,r)}--i}$.hdi=g.b
$.hdj=f
$.hdk=w
$.hdl=v
$.fWh.b=r
$.fWi.b=l
$.awY.b=s
$.fWj.b=u},
gX(d){var w,v,u,t=new C.cEh(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cEi().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nR&&this.aL(0,e)===0},
t9(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uT(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajD(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cEj(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cEk(w)
if(J.A(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l6(A.aH.gaM(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uZ(0):r
while(v.c>1){u=$.hqv()
if(u.c===0)B.b8(D.b2J)
t=v.cmT(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bKP(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).h_(0)},
$iaRm:1,
$ihI:1}
C.aQN.prototype={
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
cKZ(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gJ(d){return A.d.gJ(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gco(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.k2(w,w.length,B.U(w).k("k2<1>"))}}
C.Rt.prototype={
cT_(){var w,v
if(this.as==null)this.bbS()
w=this.as
v=w==null?null:w.aoj()
return v==null?null:v.eI()},
bbS(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aoj().eI()
this.as=new C.bNj(v)}},
gZ(d){return this.at}}
C.a3s.prototype={
a5(){return"CompressionType."+this.b}}
C.bH1.prototype={
eu(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dW(v,u)+(s.b&A.yN[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dW(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fF(u,t)&A.yN[d])
s.c=t}return v}}
C.bFo.prototype={
cJf(d,e){var w,v,u,t,s,r=this,q=new C.bH1(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eu(8)!==66||q.eu(8)!==90||q.eu(8)!==104)return!1
w=r.a=q.eu(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.cl9(q)
if(t<0)return!1
if(t===0){q.eu(8)
q.eu(8)
q.eu(8)
q.eu(8)
s=r.clc(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eu(8)
q.eu(8)
q.eu(8)
q.eu(8)
return!0}}return!0},
cl9(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eu(8)
if(t!==D.dhB[u])v=!1
if(t!==D.cWa[u])w=!1
if(!w&&!v)return-1}return v?0:2},
clc(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eu(1),d2=((d3.eu(8)<<8|d3.eu(8))<<8|d3.eu(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eu(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eu(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c0p()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eu(3)
if(q<2||q>6)return-1
v=d3.eu(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eu(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c2(6,$.hoC(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eu(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eu(1)===0)break
i=d3.eu(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hoB()
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
if(f<h)h=f}c9.bWQ(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.at8(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.at8(d3)}while(a3===0||a3===1);++a5
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
a3=c9.at8(d3)
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
d4.bI(c3)
c1=(c1<<8^D.GY[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.H_[b9];++b9
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
if(b8===0){b8=D.H_[b9];++b9
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
if(b8===0){b8=D.H_[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.H_[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.H_[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bI(c3)
c1=c1<<8^D.GY[c1>>>24&255^v];--c2}d4.bI(c3)
c1=(c1<<8^D.GY[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bI(c7)
c1=(c1<<8^D.GY[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bI(c7)
c1=(c1<<8^D.GY[c1>>>24&255^c7&255])>>>0
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
at8(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eu(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eu(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
bWQ(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c0p(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cwr.prototype={
aH5(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bO6(e)
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
if(w>0)e.aH8(w,!1)
r.clx(e)
q=r.r
v=r.f
u=e.aK8(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b7Z()
s.cSZ(0,u,e,f)
q.push(s)}},
clx(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7j(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rY()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rY()
d.aU()
d.aU()
d.aK()
d.aK()
d.rY()
d.rY()
u=d.rY()
t=d.rY()
this.f=u
this.r=t
d.c=s},
bO6(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a7j(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alr(A.hW)
o.aLp(r.eI(),A.hW,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cwp.prototype={}
C.awC.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cws.prototype={
aH5(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aDm.h(0,e.aU())
o.c=w==null?D.Ly:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.an7(v)
o.y=e.hf(u).eI()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aTK:D.Du
o.ay=f
o.Q=e.hf(t)
if(o.at!==D.Du&&u>2){w=o.y
w.toString
s=B.rb(w,A.hW,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.an7(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aTL
o.ax=new C.cwp(r,q)
w=D.aDm.h(0,q)
o.c=w==null?D.Ly:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.blq().length},
aoj(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rb(new Uint8Array(0),A.hW,q,q)
w=r.at
if(w!==D.Du)if(p.gM(0)<=0)r.at=D.Du
else{if(w===D.aTK){p=r.bJ7(p)
r.Q=p}else if(w===D.aTL){p=r.bIL(p)
r.Q=p}r.at=D.Du}w=r.c
if(w===D.afX){v=p.c
u=B.dj()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pq.Bp(p.eI(),!0,!1)
else{t=B.a86(A.hW,r.w)
p=r.Q
p.toString
A.pq.a3v(p,t,!0,!1)
u.b=t.GI()}r.Q.c=v
return B.rb(u.bf(),A.hW,q,q)}else if(w===D.afY){s=B.a86(A.hW,32768)
p=r.Q
v=p.c
C.htK().cJf(p,s)
u=s.GI()
r.Q.c=v
return B.rb(u,A.hW,q,q)}else return B.rb(p.eI(),A.hW,q,q)},
blq(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eI()},
u(d){return this.x},
b7L(d){var w=this.ch,v=C.Ju(C.hkd(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Us(0,C.Ju(255)))
w[1]=v
w[1]=v.aG(0,C.Ju(134775813)).ad(0,C.Ju(1)).Us(0,C.Ju(4294967295))
w[2]=C.Ju(C.hkd(w[2].N(0),w[1].mr(0,24).N(0)))},
aQ4(){var w=(this.ch[2].Us(0,C.Ju(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bJ7(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rb(new Uint8Array(0),A.hW,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b7L(u[v.c++]^r.aQ4())}t=r.Q.eI()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aQ4()
r.b7L(s)
u&2&&B.aj(t)
t[w]=s}return B.rb(t,A.hW,q,q)},
bIL(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hf(8).eI()
v=16}else if(k===2){w=d.hf(12).eI()
v=24}else{w=d.hf(16).eI()
v=32}u=d.hf(2).eI()
t=d.hf(d.gM(0)-10)
s=d.hf(10)
r=t.eI()
k=this.ay
k.toString
q=C.hKV(k,w,v)
p=new Uint8Array(B.ce(A.aH.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aH.dq(q,v,k)))
if(!C.hcM(A.aH.dq(q,k,k+2),u))throw B.V(B.fm("password error"))
k=new Uint8Array(16)
n=new C.bDZ(k,new Uint8Array(16),p)
k=x.S
m=J.a4T(0,k)
m=n.r=new C.cg8(m)
m.c=!0
m.b=m.bkJ(!0,new C.asj(p))
if(m.c)m.d=B.bn(D.o8,!0,k)
else m.d=B.bn(D.yF,!0,k)
l=C.haZ(C.hb0(),64)
l.bee(new C.asj(o))
n.w=l
n.cSy(r,0,r.length)
k=s.eI()
m=n.x
m===$&&B.c()
if(!C.hcM(k,m))throw B.V(B.fm("macs don't match"))
return B.rb(r,A.hW,null,null)}}
C.b7Z.prototype={
cSZ(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.an7(w)
if(v>0){t=e.hf(v).eI()
n.ax=t
if(v>=4){s=B.rb(t,A.hW,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a7j(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rY()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rY()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rY()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.an7(u)
f.c=n.as
t=new C.cws(D.Ly,n,D.Du,B.a([C.Ju(0),C.Ju(0),C.Ju(0)],x.f3))
n.ch=t
t.aH5(0,f,g)},
u(d){return this.at}}
C.cwq.prototype={
cJg(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cwr(B.a([],x.fT))
this.a=g
g.aH5(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQN(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.K)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Rt(o,A.o.an(Date.now(),1000),0):C.h3d(o,q.w,q)
v.L(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h3d(o,q.w,q)
if(k.as==null)k.bbS()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alr(A.hW)
j.aLp(o,A.hW,h,h)}i=j==null?h:j.eI()
if(i!=null)new B.FQ(!1).Do(i,0,h,!0)}}return v}}
C.bDZ.prototype={
cSy(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cl(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.htt(u,m.a)
q=m.r
if(16>u.byteLength)B.b8(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.b8(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bMs(u,0,w,0,o)}else{o===$&&B.c()
q.bJb(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KT(w,0)
m.x=A.aH.dq(m.x,0,10)
w=m.w
l=w.a
l.lB(0)
w=w.d
w===$&&B.c()
l.Cl(0,w,0,w.length)
return f}}
C.cgd.prototype={}
C.cgh.prototype={}
C.cgb.prototype={}
C.asj.prototype={}
C.cgg.prototype={
cJv(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e5(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bee(new C.asj(A.aH.fN(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bNs(n.a,n.b,t,s,r)
r+=v}A.aH.hh(f,g,g+w,s)
return o.a.c},
bNs(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cl(0,d,0,d.length)
v.Cl(0,f,0,4)
u=m.c
u===$&&B.c()
w.KT(u,0)
u=m.c
A.aH.hh(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cl(0,s,0,s.length)
w.KT(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cgc.prototype={}
C.cga.prototype={}
C.ask.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.ask){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
t9(d,e){var w=this.a
w===$&&B.c()
w=A.o.t9(w,e.gbX6())
if(!w)e.gbX6()
return w},
aJA(d,e){this.a=0
this.b=d},
td(d){return this.aJA(d,null)},
aKb(d){var w,v=this,u=v.b
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
w.b_w(v,u)
u=w.b
u===$&&B.c()
w.b_w(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_w(d,e){var w,v=A.o.fU(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cgf.prototype={
lB(d){var w,v=this
v.a.td(0)
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
anO(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b10(u,0)
v.c=0}v.a.aKb(1)},
Cl(d,e,f,g){var w=this.cjV(e,f,g)
f+=w
g-=w
w=this.cjW(e,f,g)
this.cjM(e,f+w,g-w)},
KT(d,e){var w,v=this,u=C.hb_(v.a),t=u.a
t===$&&B.c()
t=C.h0V(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h0V(w,3)
v.cjQ()
v.cjN(u)
v.as_()
v.ce_(d,e)
v.lB(0)
return 20},
b10(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o0(A.aH.gaM(d),d.byteOffset,d.length).getUint32(e,A.i7===w.d)
if(w.w===16)w.as_()},
as_(){this.cSx()
this.w=0
A.d.h2(this.r,0,16,0)},
cjM(d,e,f){while(f>0){this.anO(d[e]);++e;--f}},
cjW(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b10(d,e)
e+=4
f-=4
w.aKb(4)
v+=4}return v},
cjV(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anO(d[e]);++e;--f;++v}return v},
cjQ(){this.anO(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anO(0)}},
cjN(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.as_()
u=v.d
switch(u){case A.i7:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.DV:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
ce_(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i7===this.d,s=0;s<w;++s){r=v[s]
q=J.o0(A.aH.gaM(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cgi.prototype={
cSx(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
C.cge.prototype={
bee(d){var w,v,u,t,s=this,r=s.a
r.lB(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cl(0,w,0,v)
w=s.d
w===$&&B.c()
r.KT(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aH.hh(t,0,v,w)}w=s.d
w===$&&B.c()
A.aH.h2(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aH.hh(w,0,u,s.d)
s.b8U(s.d,u,54)
s.b8U(s.e,u,92)
u=s.d
r.Cl(0,u,0,u.length)},
KT(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KT(s,w)
s=u.e
t.Cl(0,s,0,s.length)
v=t.KT(d,e)
s=u.e
A.aH.h2(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cl(0,s,0,s.length)
return v},
b8U(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cg9.prototype={}
C.cg8.prototype={
a1S(d){return(D.o8[d&255]&255|(D.o8[d>>>8&255]&255)<<8|(D.o8[d>>>16&255]&255)<<16|D.o8[d>>>24&255]<<24)>>>0},
bkJ(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
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
for(r=1;r<=10;++r){p=(p^f.a1S((m>>>8|(m&$.q5[24])<<24)>>>0)^D.cyr[r-1])>>>0
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
p=(p^f.a1S((k>>>8|(k&$.q5[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1S((k>>>8|(k&$.q5[24])<<24)>>>0)^i)>>>0
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
p=(p^f.a1S((g>>>8|(g&$.q5[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1S(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bMs(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o0(A.aH.gaM(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
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
a7=D.o8[n&255]
b0=D.o8[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.o8[l>>>8&255]
a9=D.o8[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.o8[b1>>>8&255]
h=D.o8[n>>>16&255]
g=D.o8[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.o8[l>>>24&255]
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
bJb(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o0(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o0(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o0(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o0(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
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
a4=D.yF[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yF[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yF[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yF[o>>>8&255]
i=D.yF[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yF[b0&255]
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
C.bNi.prototype={}
C.bNj.prototype={
gM(d){var w=this.a.length
return w},
aoj(){return B.rb(this.a,A.hW,null,null)}}
C.b9x.prototype={
uV(d){return C.hO9(d)}}
C.cqg.prototype={
Mu(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9J(v,t+20,u+16,t,u,B.tU(d.x))},
nn(d){return!1}}
C.bOb.prototype={
cDv(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bB(new C.bOc(),x.E))},
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
return B.b(p.fuJ(f,r),$async$mH)
case 5:case 3:t.length===s||(0,B.K)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mH,v)}}
C.avj.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a84.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a84&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wL(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fCz)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aVf.prototype={
c0(d){var w=new C.aAa(!0,this.e,null,new B.dh(),B.ci())
w.bZ()
w.scE(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syB(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFJ()}}}
C.aAa.prototype={
syB(d,e){return},
gpu(){var w=this.aa$
return w!=null},
gl2(){var w=this.aa$
return w!=null},
Mj(d){var w=d==null?B.h5G(null):d
w.sa4p(this.ak)
return w}}
C.a0w.prototype={
S(){return new C.aIz(B.aX(x.N))},
cQI(d){return this.d.$1(d)},
cOv(){return this.e.$0()}}
C.aIz.prototype={
a_(){this.a1()
this.OS()},
OS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cOv(),$async$OS)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f5S(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OS,v)},
YD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$YD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a_<1>")
p=B.C(new B.a_(r,new C.f5W(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f5X(t))
w=3
return B.b(C.anb(p),$async$YD)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f5Y(t,s,p))
w=4
return B.b(t.OS(),$async$YD)
case 4:case 1:return B.h(u,v)}})
return B.i($async$YD,v)},
a0Q(d){return this.co6(d)},
co6(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0Q=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f5T(t))
s=J.q(d,"id")
w=3
return B.b(C.bYT(J.k(s==null?"":s)),$async$a0Q)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f5U(t))
w=1
break}q=C.h0p(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cQI(B.a([q],x.D)),$async$a0Q)
case 4:if(t.c==null){w=1
break}t.m(new C.f5V(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0Q,v)},
OR(d,e){return this.bJC(0,e)},
bJC(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OR=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a5(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.f5N(q),r,null,!0,!0,x.y),$async$OR)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f5O(t))
s=s.h(e,"id")
w=4
return B.b(C.ana(J.k(s==null?"":s)),$async$OR)
case 4:if(t.c==null){w=1
break}t.m(new C.f5P(t))
w=5
return B.b(t.OS(),$async$OR)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OR,v)},
cCx(d){var w=B.bi(d),v=w==null?null:w.bT()
if(v==null)return""
return A.ig[B.bH(v)-1]+" "+B.bQ(v)},
aPW(d,e){var w=null,v=B.n(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.O6,A.n),w,e,w,w,w,w,w,e)},
aPV(d){return this.aPW(d,44)},
b67(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.O6:u,r=B.n(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,M.II,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.n(10)
A.d.v(q,B.a([M.II,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bwv,u,u,u)],p))}return B.E(B.aD(A.c5,B.df(u,B.B(q,A.m,u,A.b8,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hy,u,u,u,A.tE,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f61(this,d),u,u,u,u,u,u,!1,A.a7),1)},
chT(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d3.j(0.14):D.Xs,n=B.n(18),m=p?A.d3:A.dr
m=B.I(m,A.q,p?1.8:1)
w=this.aPV(A.q_)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aQv,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.v(B.a([v,A.cV,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aQx,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.O6:q
u=p?q:B.I(A.b2,A.q,1.6)
r=p?D.bMu:q
return B.aD(q,B.df(q,B.B(B.a([w,A.bd,t,B.df(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fG,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fG,q,q,A.da,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f5R(this,p,d),q,q,q,q,q,q,!1,A.a7)},
cpF(d){var w,v,u,t,s,r=this,q=null,p=J.a5(d),o=p.h(d,"savedAt"),n=r.cCx(J.k(o==null?"":o))
o=B.n(18)
w=B.I(A.dr,A.q,1)
v=r.aPV(A.Nj)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aQv,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.v(B.a([u,A.cV,B.d(p+" slides"+t,q,q,q,q,q,q,D.aQx,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b2L(A.hB,A.bu,"Bring it back",r.r?q:new C.f5Z(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bp,r.b2L(A.e6,A.cb,"Delete",r.r?q:new C.f6_(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Xs,q,w,o,q,q,A.n),q,q,q,A.da,D.br2,q,q,q)},
b2L(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hs(B.aD(w,B.p(w,B.X(d,v?A.b2:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a7),w,f,w,w)},
asf(d,e,f){var w=null
return new B.D(D.bq6,B.v(B.a([B.X(d,A.b2,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f9l,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.f1T,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c9
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bV,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b2,i,i,B.n(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPW(A.ys,46),A.bd,D.bxn],t)
if(j.r)s.push(D.e8g)
s.push(B.aH(i,i,i,i,A.BN,i,i,i,new C.f64(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.n(18)
p=B.I(A.dr,A.q,1)
o=J.a5(h)
q=B.a([A.S,u,new B.D(D.btA,s,i),B.p(i,B.B(B.a([j.b67(0,A.y3,"Save",j.a.c.length),j.b67(1,A.Nx,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bsF,A.ek,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cb:A.bu).j(0.12)
s=B.n(14)
r=B.I((j.y?A.cb:A.bu).j(0.4),A.q,1)
p=j.y
n=p?A.Nk:A.ef
n=B.X(n,p?A.cb:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a7q,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bsB,A.iz,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f5q,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aD(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f8s,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f65(j,v),i,i,i,i,i,i,!1,A.a7))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.asf(A.q_,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.K)(r),++l)s.push(j.chT(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e7P)
else if(j.e==null)s.push(j.asf(A.akG,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.asf(A.oL,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cpF(r.gR(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cn,B.cw(u,i,X.ahM,i,i,A.ag,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc2W()
p=s?i:D.O6
s=s?A.c.j(0.07):i
o=B.n(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b6.j(0.4),A.cx,18)],x.V)
u=u.a
m=u===0
k=B.X(A.y3,m?A.je:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.btd,B.aD(i,B.df(i,B.B(B.a([k,A.a6S,new B.dq(1,A.cn,B.f6(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.je:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eh),i)],t),A.m,i,A.b8,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hy,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a7),i))}else q.push(A.S)
return B.p(i,B.bl(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b_F,i,i,i,i,i,i,i,i)}}
C.oh.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a7().ac()],x.N,x.z)}}
C.Yf.prototype={
S(){return new C.ax9(B.a([],x.k),B.f8(null,x.H))},
ge0(){return this.c}}
C.ax9.prototype={
a_(){this.a1()
this.P_()},
P_(){var w=0,v=B.j(x.H),u,t=this,s
var $async$P_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1u(t.a.c),$async$P_)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cFF(t,s))
case 1:return B.h(u,v)}})
return B.i($async$P_,v)},
cvR(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qd(t.d,new C.cFI(d))
v=w<0
if(v&&C.hLh(d))return t.f
u=t.d
if(v)J.pv(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fS6(new C.cFJ(t),v)
return t.f=t.f.bB(new C.cFK(t,d),v).eL(new C.cFL())},
Is(d,e,f){return this.cbx(0,e,f)},
aXG(d,e){return this.Is(0,e,!1)},
cbx(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Is=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).cl(B.e8(new C.cFE(t,e),!1,null,x.H)),$async$Is)
case 3:w=4
return B.b(t.f,$async$Is)
case 4:w=5
return B.b(t.P_(),$async$Is)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Is,v)},
aWX(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dug:d
this.Is(0,new C.oh(w,v,new B.S(Date.now(),0,!1)),!0)},
c2q(){return this.aWX(null)},
acS(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFM(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acS)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aWX(s)
case 1:return B.h(u,v)}})
return B.i($async$acS,v)},
Ir(d,e){return this.bJu(0,e)},
bJu(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ir=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.cFz(e),s,null,!0,!0,x.y),$async$Ir)
case 3:if(g!==!0){w=1
break}t.m(new C.cFA(t,e))
w=4
return B.b(t.f,$async$Ir)
case 4:w=5
return B.b(C.afY(t.a.c,e.a),$async$Ir)
case 5:w=6
return B.b(t.P_(),$async$Ir)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ir,v)},
D7(d){return this.bBF(d)},
bBF(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$D7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.cFv(d),r,!0,!0,!1,null,!1,!1,x.N),$async$D7)
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
return B.b(t.aXG(0,d),$async$D7)
case 9:w=5
break
case 7:w=10
return B.b(F.h0X(r,d.b,null),$async$D7)
case 10:w=5
break
case 8:w=11
return B.b(t.Ir(0,d),$async$D7)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$D7,v)},
bX3(){var w,v,u=null,t=[D.duj,D.duh,D.dui],s=new C.cFC(),r=B.n(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d5.j(0.4),A.eU,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.x(D.den[w],u,A.om,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.o_,u,u,u))}return B.p(u,B.B(B.a([B.E(B.v(B.a([D.fy4,A.O,B.bY(A.bz,n,A.bq,6,6),A.aP,B.aD(u,B.p(u,D.eLK,A.f,u,u,new B.o(A.c,u,u,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ai9,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cFB(this),u,u,u,u,u,u,!1,A.a7)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bUF,A.n),u,u,u,u,D.btK,u,u,u)},
bBD(d){var w,v=null,u=d.b.d.length,t=B.n(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cx,14)],x.V),r=x.p
s=B.p(v,B.bw(B.n(6),new B.an(A.W,v,A.b0,A.r,B.a([B.f6(A.A,F.anJ(d.b),A.f,A.bT),D.edN,B.ao(v,B.aD(v,B.p(v,D.bNh,A.f,v,v,D.b0B,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFq(this,d),v,v,v,v,v,v,!1,A.a7),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.f_g,v,v,v)
w=u===1?"":"s"
return B.aD(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.O,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f5C,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cFr(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFs(this,d),v,v,v,v,v,v,!1,A.a7)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eC(B.a([new B.D(I.agF,B.hs(B.aD(s,B.p(s,A.ano,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b6.j(0.5),A.J,12)],x.V),E.vT,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc3H(),s,s,s,s,s,s,!1,A.a7),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n1,s,s,s,!0,s,s,s,s,s,D.fy8,s,s,s,1,s,!0)
if(t.e)r=D.b4_
else{w=t.bX3()
v=B.a([D.fjQ,A.ab],r)
if(J.cz(t.d)){u=B.n(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eZI,s,s,s),A.f,s,s,new B.o(D.b8J,s,s,u,s,s,A.n),s,s,s,s,A.xM,s,s,s))}r=B.a([new B.nO(A5.YB,new B.m7(w,s),s),new B.nO(D.bt7,new B.m7(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eRQ)
else r.push(new B.nO(D.bsD,B.OF(new B.om(new C.cFN(t),J.ad(t.d),!0,!0,!0,0,B.rU(),s),D.b3h),s))
r=B.vu(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ag,!1,r)}return B.c7(q,D.b7x,r,s,!1,!1,s,s)}}
C.Yd.prototype={
S(){return new C.ax5(B.a([],x.bx))},
TH(d){return this.d.$1(d)}}
C.aEr.prototype={}
C.ax5.prototype={
b_y(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b5,A.aN),w),u=this.gaXF()
v.aN(0,u)
w=new B.as(new B.bb(e,A.b5,A.aN),w)
w.aN(0,u)
return new C.aEr(v,w,f)},
DX(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a6(0)
v.x=B.cM(A.pP,new C.cEU(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.bb(w.a,A.b5,A.aN),v)
t=m.gaXF()
u.aN(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b5,A.aN),v)
u.aN(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b5,A.aN),v)
u.aN(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.K)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b5,A.aN),v)
o.aN(0,t)
n=new B.as(new B.bb(p.b,A.b5,A.aN),v)
n.aN(0,t)
r.push(new C.aEr(o,n,p.c))}if(r.length===0)r.push(m.b_y("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a6(0)
if(r.y){r.a.c.b=r.gp9()
q=r.a
q.TH(q.c)}q=r.d
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
t.push(new F.mr(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rg(n,w,v,t,u)},
AG(){var w=0,v=B.j(x.H),u=this,t
var $async$AG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a6(0)
u.y=!1
u.a.c.b=u.gp9()
t=u.a
w=2
return B.b(t.TH(t.c),$async$AG)
case 2:return B.h(null,v)}})
return B.i($async$AG,v)},
c3F(){this.m(new C.cET(this))
this.DX()},
aWE(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cEW(w,d,v))
w.DX()},
c3G(d,e){var w=A.d.cA(this.w,e)
this.m(new C.cF3())
this.DX()
$.aW.x1$.push(new C.cF4(w))},
Qa(d){return this.chJ(d)},
chJ(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Qa=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l5(80,1400,A.eH),$async$Qa)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$Qa)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahw(o,".png")?"image/png":"image/jpeg"
r.m(new C.cEX(d,n,p))
r.DX()
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
return B.i($async$Qa,v)},
xE(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hnR(r,t.gp9()),$async$xE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cEV(t,s))
t.DX()
case 1:return B.h(u,v)}})
return B.i($async$xE,v)},
ci0(d){var w,v=this,u=null,t=F.fyR(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hg(D.bGA,D.fmi,new C.cEZ(v,d),u),u)
w=x.p
return new B.D(A.cA,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.n(12),B.fL(t,A.A,u,u,A.cj,A.bT,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b2M(A.kt,new C.cF_(v,d)),A.bp,v.b2M(A.cD,new C.cF0(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b2M(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hz,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aW,0,w,w,A.cL,w,w,A.ah)},
It(){var w=0,v=B.j(x.H),u,t=this,s
var $async$It=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AG(),$async$It)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h0X(s,t.gp9(),new C.cF2(t)),$async$It)
case 4:case 1:return B.h(u,v)}})
return B.i($async$It,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eC(B.a([new B.D(A.r1,B.hg(D.bLf,D.fsf,n.gavW(),B.fw(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.ann,m,m,m,new C.cF5(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.WE,m,1,m,m,m,!1,m,!1,E.n1,m,m,m,!0,m,m,m,m,m,D.fn9,m,m,m,1,m,!0),j=Av.aTX(O.lf,A.c,Ae.Vy,A.o4,D.fnT,n.gc3E()),i=B.n(18),h=n.gavV(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jq,12)],x.V)
g=B.aD(m,B.p(m,new B.a7(92,142.1818181818182,B.f6(A.A,F.anJ(n.gp9()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a7)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.er,B.E(B.v(B.a([D.fzE,A.at,B.d(F.h_t(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fb3,m,m,m),A.S,B.dn(E.amF,E.aRj,h,B.bm(A.d5,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.WE,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ol,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.O,w,A.O,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.n(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aP],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.lf.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bJZ,m,m,m,v===0?m:new C.cF6(n,v),m,m,m,m,"Move up",A.cd)
r=i.length
q=B.aH(m,m,m,m,D.bQf,m,m,m,v===r-1?m:new C.cF7(n,v),m,m,m,m,"Move down",A.cd)
r=r===1?m:new C.cF8(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.v(B.a([new B.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.fbB,m,m,m,m,m,m,m,m,m),A.b7,s,q,B.aH(m,m,m,m,B.X(A.e6,A.oE,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cd)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.ci0(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n1,m,new B.bO(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a84(h),A.e5,D.brh,m,m,m))}return B.oj(!0,B.c7(k,E.aeQ,B.cw(g,m,D.brJ,m,m,A.ag,!1),m,!1,!1,j,m),new C.cF9(n),x.C)}}
C.ax7.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cb:E.n1,q=B.n(16),p=B.n(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d5.j(0.22)
w=B.n(12)
v=x.p
return new B.D(A.eK,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(u.e,t,t,t,t,t,t,D.aPR,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ey,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ah),t)}}
C.apS.prototype={
S(){return new C.aDd()}}
C.aDd.prototype={
a_(){this.a1()
this.Zh()},
bu(d){this.bF(d)
if(d.c!=this.a.c)this.a0F()},
a0F(){var w=0,v=B.j(x.H),u=this,t
var $async$a0F=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0F)
case 2:u.d=null
if(u.c!=null)u.m(new C.e9b(u))
w=3
return B.b(u.Zh(),$async$a0F)
case 3:return B.h(null,v)}})
return B.i($async$a0F,v)},
Zh(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Zh=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d0(n,"http://")||J.d0(n,"https://")||J.d0(n,"data:")){o=B.XS(B.cx(n,0,null),new B.P1(!0))
r.d=o}else{o=B.fm("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ic(0).cO(0,A.pL),$async$Zh)
case 7:if(r.c==null){w=1
break}r.d.tf(!1)
r.m(new C.e99(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e9a(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zh,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c6o(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h5(0)
w.m(new C.e9c(w))}else{v.pT(0)
w.m(new C.e9d(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.n(8*n.d)
m=B.a([D.jb.j(0.92),D.KB.j(0.95)],x.O)
w=B.I(A.c_.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.q2,A.c_,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.N,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.be)}if(p.f)return B.av(B.X(A.alW,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b4P
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.n(6*n.d)
m=B.a([B.f6(A.A,new B.a7(r,q,new B.A_(s,o),o),A.r,A.bT)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iC,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aD(o,B.bw(n,new B.an(A.W,o,A.b0,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6n(),o,o,o,o,o,o,!1,A.a7)}}
C.xs.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jo.prototype={}
C.acW.prototype={
B(d){return B.oN(new C.dXU(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.ack.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.n(18),r=B.n(18),q=B.I(D.jb.j(t?0.35:0.4),A.q,1),p=t?D.L9:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cx,14)],o),m=B.n(10),l=B.I(A.c_.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fG(0.5625,C.i2H(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aiE,u,u,u,u),1)
m=D.jb.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.jb,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cV,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.beM,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.agV,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ah)}}
C.xv.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nE.prototype={}
C.biB.prototype={
Zq(d){var w=null
return new B.bI(A.a3,w,w,B.DF(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.n(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c6Q(){return this.Zq(1)},
awz(d){var w=null,v=B.n(8),u=B.I(A.hY,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.acP,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hY,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hY,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.b8,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awz("TAARIFA ZA WANANDOA"),A.am,w.c6Q(),A.cV,w.Zq(0.9),A.cV,w.Zq(0.7),A.O,w.awz("TAMKO LA MAKUBALIANO"),A.h0,w.Zq(1),A.cV,w.Zq(0.95),A.O,w.awz("MASHAHIDI"),A.b7,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acZ.prototype={
B(d){return B.oN(new C.eeq(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeF.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.n(18),o=B.n(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bem:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cx,14)],l),j=B.n(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.h_Y(w.a)
if(v==null)v=A.d.gJ(D.QB)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b0,A.r,B.a([B.bZ(0,B.fL(C.h_X(v.d),A.A,r,r,A.cj,A.bT,!0,r,!1,r,r),0,0,0),new B.D(A.ahD,new C.biB(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aiE,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.La,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cV,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b82,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.agV,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ah)}}
C.kS.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7y.prototype={}
C.Vq.prototype={
S(){var w=$.aw()
return new C.aDw(new B.cs(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.mz(0,null,null),A.d.gJ(D.a2u),D.dEB,B.a([],x.L),B.a([],x.gE))}}
C.aDw.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zl(C.fCK(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fBG().bB(new C.ehI(v),w)
$.qP().jz(0,"assets/images/ngmy_logo.png").bB(new C.ehJ(v),w).eL(new C.ehK())},
q(){var w=this,v=w.e,u=$.aw()
v.T$=u
v.P$=0
v=w.f
v.T$=u
v.P$=0
w.r.q()
w.a2()},
agM(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.U(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
IM(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l5(88,1600,A.eH),$async$IM)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$IM)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.ho7(m,p),$async$IM)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCB(new B.pJ(o,1),m),$async$IM)
case 10:if(r.c!=null)r.m(new C.ehk(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agM("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IM,v)},
Wu(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wu=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ho7(s,q),$async$Wu)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCB(new B.pJ(r,1),s),$async$Wu)
case 4:if(t.c!=null)t.m(new C.ehg(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wu,v)},
adH(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adH=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.ehr(q))
t=4
q.a.toString
p=C.i78()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adH)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ehs(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agM(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eht(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adH,v)},
Zv(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Zv=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.ehm(q,i))
t=4
q.a.toString
p=C.i77()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Zv)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.ehn(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.eho(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ehp(q))
$.aW.x1$.push(new C.ehq(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zv,v)},
c75(d){this.m(new C.ehl(this,d))},
Ee(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ee=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.ehi(q))
t=4
w=7
return B.b($.aW.gmC(),$async$Ee)
case 7:w=8
return B.b(B.bN(A.n8,null,x.H),$async$Ee)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pU))throw B.V("The page is not ready yet.")
w=9
return B.b(p.m_(1800/p.gZ(0).a),$async$Ee)
case 9:o=e
w=10
return B.b(o.ht(A.fY),$async$Ee)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.ag0(J.eT(A.dD.gaM(n)),"ngmy_news.png","image/png"),$async$Ee)
case 11:m=e
q.agM(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agM(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ehj(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ee,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.l_,a2,a2,a2,new C.ehz(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bLL,a2,a2,a2,new C.ehA(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oU,a2,a2,a2,a4?a1.gaYM():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eC(v,a2,a2,!0,!0,A.AK,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eLU,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eU,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f6(A.A,new B.ev(new C.b0b(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,H.J3,a2,a2,a2)
t=a1.as?a2:a1.gc74()
t=B.a([B.E(B.dn(D.bMv,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bm(D.tk,a2,a2,a2,A.c,A.fN,a2,a2,new B.b7(B.n(14),P.uW),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.n(10),B.fL(r,A.A,a2,a2,A.cj,A.bT,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bJh,a2,a2,a2,a1.as?a2:a1.gbI5(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,H.J3,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aRO("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dn,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d8Y[o]
p.push(B.mH(a2,D.tk,new B.x(n.a,a2,A.pc,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.ehB(a1,n),a2,a2,P.uW,a2))}p=B.bY(A.bz,p,A.bq,6,8)
m=a1.Q
m=B.bY(A.bz,B.a([D.fyh,A.bd,B.j8(a2,a2,a2,D.fiD,a2,new C.ehC(a1),m==="en",a2,a2,a2,a2),A.ab,B.j8(a2,a2,a2,D.fiy,a2,new C.ehD(a1),m==="sw",a2,a2,a2,a2)],w),A.rU,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,H.J3,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dd(D.a2u,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQf(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dd(D.a2u,10,a2,j),h=j.$ti,j=new B.bS(j,j.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQf(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc77()
h=B.n(18)
v=B.a([new B.ac(0,A.G,A.bC.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cA,s,a2),t,A.aB,new B.D(A.cA,r,a2),q,A.O,p,A.S,m,A.aB,new B.D(A.cA,l,a2),new B.a7(a2,78,k,a2),A.O,new B.a7(a2,78,j,a2),A.aP,B.aD(a2,B.p(A.A,B.B(B.a([D.bMp,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.u5,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a7)],w)
if(a4){u=B.a([A.dX,B.B(B.a([D.dp8,A.av,D.bxH],w),A.m,a2,A.e,A.j,0,a2,a2),A.O],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.K)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a8:A.a3
q=e?A.b6.j(0.35):D.tk
p=new B.aT(16,16)
d=new B.ay(A.bF,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f97,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.Vl,new B.o(q,a2,new B.bO(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cA,A.iz,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cWC[o]
t.push(B.mH(a2,D.tk,new B.x(a0,a2,A.IW,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hE,new C.ehE(a1,a0),a2,a2,P.uW,a2))}u.push(B.bY(A.bz,t,A.bq,6,8))
u.push(A.S)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aRO("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.ehF(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dn,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc76()
u.push(B.B(B.a([t,A.ab,B.Hx(A.yx,s,B.ny(a2,A.b6,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaYM()
u.push(B.dn(A.oU,D.ftQ,t,B.bm(A.cZ,a2,a2,a2,a2,A.IG,a2,a2,new B.b7(B.n(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cw(v,a1.r,A.ahp,a2,a2,A.ag,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.n(20)
s=B.I(E.jT.j(0.5),A.q,1)
v.push(B.bZ(0,B.el(B.av(B.p(a2,B.B(B.a([E.a6T,A.er,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iJ,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.AB,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bu1,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c7(a3,A.AK,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aRO(d){var w=null
return B.bs(w,new B.b4(4,B.n(14),A.Y),w,A.eQ,w,w,w,w,!0,w,w,w,w,w,w,D.tk,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.IR,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQf(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.n(12),q=B.b0(d.f),p=s?A.bC:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kU,t,t,t,t),A.h0],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bqk,t,t,t,t))
w.push(A.cV)
w.push(new B.D(A.jj,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aD(t,B.p(t,B.v(w,A.m,t,A.b8,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iW,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ehh(this,d),t,t,t,t,t,t,!1,A.a7)}}
C.zl.prototype={
bb2(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zl(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cH0(d){var w=null
return this.bb2(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aC0(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cc6(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gR(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fE(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.L(w,new C.cc4(),B.U(w).k("L<1,m>")).c_(0,new C.cc5())
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
return this.bb2(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFq(d){return this.f}}
C.tf.prototype={
a5(){return"NewsLayout."+this.b}}
C.Bk.prototype={
a5(){return"NewsFrame."+this.b}}
C.le.prototype={}
C.b0b.prototype={
rh(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aYO(d,e,f,g){return this.rh(d,e,null,1.25,f,A.bn,g)},
Pw(d,e,f,g,h){return this.rh(d,e,f,1.25,g,A.bn,h)},
awF(d,e,f,g,h){return this.rh(d,e,null,f,g,A.bn,h)},
awE(d,e,f,g,h){return this.rh(d,e,f,g,0,A.bn,h)},
aYQ(d,e,f,g,h){return this.rh(d,e,null,f,0,g,h)},
c7b(d,e,f,g,h,i){return this.rh(d,e,f,g,0,h,i)},
awD(d,e,f,g){return this.rh(d,e,null,f,0,A.bn,g)},
adK(d,e,f){return this.rh(d,e,null,f,0,A.bn,A.cN)},
aYP(d,e,f,g,h){return this.rh(d,e,f,g,0,h,A.cN)},
c7a(d,e,f,g){return this.rh(d,e,null,f,0,g,A.cN)},
c79(d,e,f,g){return this.rh(d,e,f,g,0,A.bn,A.cN)},
adL(d,e,f,g,h,i){return this.rh(d,e,f,g,h,A.bn,i)},
aYN(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kh(new B.eq(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.ca,new B.ju(1),u,u,h,u,A.c8,u)
v.wB(g)
if(!v.b.a.c.gaDE())return w
w-=2}return j},
adI(d,e,f,g,h,i,j,k){return this.aYN(d,e,f,g,h,i,j,k,A.bn)},
ayN(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayM(d){return this.ayN(null,!1,d)},
agA(d,e){return this.ayN(null,d,e)},
coO(d,e){return this.ayN(d,!1,e)},
gb_W(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaUp(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
On(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adI(w.gaUp(),u,A.N,d,g,h,i,1.02)
return B.d(w.gaUp(),v,g,A.a2,v,v,v,w.awE(u,t,f,1.02,A.N),e,v,v)},
aUu(d){return this.On(d,A.L,null,2,78,30)},
ab8(d,e,f,g,h){return this.On(d,e,null,f,g,h)},
bWW(d,e,f,g,h){return this.On(d,A.L,e,f,g,h)},
bWV(d,e,f){return this.On(d,A.L,null,e,f,30)},
Rs(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.jC,B.d(s,u,g,A.a2,u,u,u,v.aYP(w,v.aYN(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b5O(d){return this.Rs(d,A.L,null,3,24)},
aAi(d,e,f,g){return this.Rs(d,e,null,f,g)},
cwk(d,e,f){return this.Rs(d,A.L,e,3,f)},
b5P(d,e){return this.Rs(d,e,null,3,24)},
cwi(d,e){return this.Rs(d,A.L,null,3,e)},
cwj(d,e,f){return this.Rs(d,e,null,3,f)},
aqg(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fV,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Pw("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nk(){return this.aqg(null,!0)},
aqf(d){return this.aqg(null,d)},
bDZ(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.i_,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c7a(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vr(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_W(),h=A.o.an(j.bD(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hVG(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aYO(k,12,1.2,A.N),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adI(i,v,A.N,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adI(i.toUpperCase(),v,A.N,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eD,l,l,l,m.adL(v,u*0.84,h,1,1,A.N),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.O,B.B(B.a([B.d(C.bBR(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hC,A.j,0,l,l),A.am,m.agA(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.er,B.E(B.d(i,l,1,A.eD,l,l,l,m.awD(v,u*0.9,1,A.N),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.B(B.a([B.d(C.bBR(j),l,l,l,l,l,l,m.Pw(k,13,B.b0(h),0.6,A.N),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hC,A.j,0,l,l),A.O,m.coO(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb_W()
v=B.d("NGMY",l,l,l,l,l,l,m.awF(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.n(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.B(B.a([v,A.ab,B.eH(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rh(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b7,new B.dq(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adL(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.N),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.O,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l)
t=m.agA(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awD(v,u,1,A.N),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agA(!0,1.4),A.at,B.d(C.bBR(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayM(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.awF(v,u,1,3,A.N),A.L,l,l),A.O,m.agA(!0,1.2),A.at,B.B(B.a([B.d(C.bBR(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hC,A.j,0,l,l),A.at,m.ayM(3)],h),A.m,l,A.e,A.j,0,A.p)}},
acg(d){return this.vr(d,!1)},
adJ(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.n(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adL("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c78(d,e){return this.adJ(d,null,e,null)},
aWw(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.E(B.dk(v),12)===0?12:A.o.E(B.dk(v),12),t=B.b0(this.d.w).j(0.75),s=this.awE("Roboto",15,t,1,A.cv),r=B.X(E.ak2,t,w,w,w,18),q=A.a.ap(A.oY[B.bH(v)-1],0,3),p=A.a.aT(A.o.u(B.h_(v)),2,"0"),o=B.dk(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fJ,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avn(){return this.aWw(A.mw)},
b3_(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adL("Roboto",this.adI(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayQ(d,e,f){return this.b3_(d,e,f,30)},
aAl(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vh,B.d(v,w,e,A.a2,w,w,w,this.c79("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b5T(d){return this.aAl(d,3,22)},
cwv(d,e){return this.aAl(d,e,22)},
ty(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cj,A.bT,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dd(D.bwM,w,s)
if(v==="sepia")w=new B.Dd(D.bwL,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.xZ,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.WA.j(0.38)],x.O),s,s),A.n),A.be))
return new B.a7(d,e,new B.an(A.W,s,A.b0,A.r,v,s),s)},
qo(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.ty(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.ek,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lQ,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e4k,14)],x.V)
v=l.ty(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eH(A.A,-0.035,B.p(k,B.v(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aYP(j.as,13.5,D.b9z,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bcL,k,k,k,w,k,A.n),k,e,k,k,D.brE,k,k,d),k)
case 3:w=B.n(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.n(25),l.ty(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hU(l.ty(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lQ,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e4a,10)],x.V)
return B.eH(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.ty(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.r5,k,k,k),0,0,0),B.ao(k,B.eH(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eH(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nt(l.ty(d,e),A.aq,D.fUk),new C.bbL(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.ty(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bv(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cm(A.aO,A.q6,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b0,A.r,w,k),A.f,A.ea,k,k,k,e,k,k,D.bw1,k,k,d)
case 8:w=d/2
v=B.wT(A.hg,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wT(A.hD,new B.aT(w,w)),l.ty(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fM,22)],x.V)
return B.p(k,l.ty(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bS,k,k,d)
case 10:return new B.a7(d,e,B.nt(l.ty(d,e),A.aq,D.h_m),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.ty(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.ek,k,k,d)}},
aNQ(d,e){return this.d.e===D.Re?A.bI:this.bDZ(d,e)},
W2(d){return this.aNQ(d,A.L)},
gazC(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azB(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aYQ(v.Q,19,1.15,A.cF,A.N),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Pw("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.adK(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jz(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gcfg(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8R(d,e,f,g){return B.cq(new C.cc7(this,e,d,f,g))},
a8Q(d){return this.a8R(d,22,!0,18)},
Wd(d,e){return this.a8R(d,22,!0,e)},
aOS(d,e,f){return this.a8R(d,22,e,f)},
bG0(d,e,f){return this.a8R(d,e,!0,f)},
b8K(d,e,f,g){return B.cq(new C.cc8(this,e,d,g,!0,f))},
ce4(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.acg(824),A.aB,k.aUu(824),k.b5O(824),A.O,k.Nk(),A.ac,B.av(k.qo(824,360),j,j,j),k.W2(824),A.ac,B.E(k.a8Q(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.acg(824),A.aP,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.v(B.a([k.ab8(440,A.bg,3,62,26),k.aAi(440,A.bg,2,20),A.b7,k.aqg(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.IH,B.v(B.a([k.qo(362,310),k.W2(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayM(2),A.ac,B.E(k.a8Q(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vr(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bWW(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cwk(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.B5,j,j,j)
u=B.a([B.av(k.qo(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.Re){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awE(i,14,A.c,1.15,A.N),j,j,j),A.f,h,j,j,j,j,j,j,A.lO,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.O,k.Nk(),A.S,B.E(k.Wd(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vr(824,!0)
w=k.qo(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b4,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.On(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b_,A.b4,A.x,v,j,j),A.n),j,j,j,j,D.buk,j,j,j),j,j,0,0,j,j)],u),j),k.b5P(824,A.bg),A.O,k.Nk(),A.S,B.E(k.a8Q(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.acg(824),A.aB,k.aUu(824),k.b5O(824),A.O,k.Nk(),A.ac,B.E(k.b8K(3,300,B.v(B.a([k.qo(300,300),k.W2(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vr(824,!0)
v=x.p
u=B.v(B.a([k.ab8(440,A.bg,3,62,26),k.aAi(440,A.bg,2,20),A.b7,k.aqf(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aNS,new B.D(A.i_,k.qo(364,h.e===D.Re?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.Wd(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.acg(824),A.ac,k.bWV(824,2,70),k.cwi(824,21),A.O,k.Nk(),A.ac,B.E(k.b8K(3,340,B.av(k.qo(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vr(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBR(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Pw(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aYQ(h.Q,24,1.15,A.cF,A.N),j,j,j))
v.push(A.b7)
if(k.gazC())v.push(k.azB(230,250))
return B.v(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.agT,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.ab8(570,A.bg,3,62,28),k.cwj(570,A.bg,20),A.O,k.aqf(!1),A.O,B.av(k.qo(570,330),j,j,j),k.W2(570),A.S,B.E(k.aOS(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vr(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Pw(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.am,k.On(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bsG,j,j,j),k.b5P(824,A.bg),A.S,B.av(k.qo(824,310),j,j,j),k.W2(824),A.O,k.Nk(),A.S,B.E(k.a8Q(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vr(824,!0),A.aP,new B.an(A.W,j,A.aa,A.r,B.a([k.qo(824,430),B.ao(18,k.c78(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.ayQ(824,3,66),k.b5T(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avn(),A.aB,B.E(k.Wd(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vr(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.v(B.a([k.adJ(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aP,k.b3_(410,4,58,28),k.aAl(410,6,20),A.b7],w),A.F,j,A.e,A.j,0,A.p),j),U.aNT,k.qo(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avn(),A.aP,B.E(k.Wd(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vr(824,!0)
v=k.qo(824,420)
u=B.hyl(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aP,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.ft(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c7b(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.buA,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.ayQ(824,3,62),k.b5T(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aWw(A.lo),A.aB,B.E(k.Wd(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vr(824,!0)
u=h.w
t=x.p
w=B.a([k.qo(824,380),B.ao(j,k.adJ(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayQ(824,2,60)
r=k.cwv(824,2)
p=k.avn()
o=B.E(k.aOS(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.n(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aP,new B.an(A.W,j,A.aa,A.r,w,j),A.aP,s,r,A.S,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.n(14),k.ty(150,104),A.aq),A.oi,B.E(B.v(B.a([k.adJ("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.O,B.d(q,j,2,A.a2,j,j,j,k.awD(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.ey,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vr(824,!0),A.by,k.ab8(824,A.bg,3,62,30),k.aAi(824,A.bg,2,22),A.S,k.aqf(!1),A.S,B.av(k.qo(824,330),j,j,j),k.aNQ(824,A.bg),A.aP,B.E(k.bG0(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c0(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.be),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b8g(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.D(D.bv5,B.v(B.a([B.E(t.ce4(),1),A.O,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h0,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aYO(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Pw(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hC,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bqS(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.n(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hU(B.fL(q,A.A,s,s,A.cj,A.bT,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mw,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.awF(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dc(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bw9,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jz(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbM.prototype={
j6(d){return C.hdt(d)},
jL(d){return!1}}
C.bbL.prototype={
a4(d,e){var w,v=C.hdt(e)
$.W()
w=B.N()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aP(v,w)},
au(d){return!d.b.A(0,this.b)}}
C.btn.prototype={
j6(d){var w,v,u,t,s,r,q,p,o=new B.eM()
o.dB(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ao,null,null,v)
u.F(new B.b5(0,8))
for(t=d.a,s=0;s<t;s+=14){w=new B.ap(s,o.aj()*14)
v.push(w)
r=u.f
if(r!=null)w.bC(r)
w=u.e
if(w!=null)w.a.delete()
u.e=null}u.F(new B.ap(t,8))
w=d.b
r=w-8
u.F(new B.ap(t,r))
for(;t>0;t-=14){q=new B.ap(t,w-o.aj()*14)
v.push(q)
p=u.f
if(p!=null)q.bC(p)
q=u.e
if(q!=null)q.a.delete()
u.e=null}u.F(new B.ap(0,r))
u.F(new B.bF())
return u},
jL(d){return!1}}
C.b8g.prototype={
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
w.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.KC.j(0.13),A.K],v),l,l).aw(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
au(d){return!1}}
C.bqS.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.hr(u,u,u,u,B.de(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.ca,u,A.e0,A.c8)
s.ez()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.j3(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.u(-v/2,-t.gbd(t)/2))
w.restore()},
au(d){return!d.b.A(0,this.b)}}
C.Vt.prototype={
S(){return new C.aDA()}}
C.aDA.prototype={
a_(){var w=this
w.a1()
B.fZQ(w.a.c,null).bB(new C.eiT(),x.g7).bB(new C.eiU(w),x.a)
w.a.toString},
gaMF(){var w=D.auE[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawG(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaMF()
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
Zx(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zx=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.eiG(r))
t=4
q=r.gawG()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qW()
m=B.Db(n,null)
i=B.N()
i.Q=A.fW
m.rI(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pE().zh(J.h2Y(p),J.h2Y(o)),$async$Zx)
case 7:l=e
w=8
return B.b(l.ht(A.fY),$async$Zx)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.O(J.eT(J.vl(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eiH(r))
r.c.I(x.q).f.U(D.eUq)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zx,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.l_,s,s,s,new C.eiN(d),s,s,s,s,s,s),p=x.p
q=B.eC(B.a([B.bK(!1,D.fwl,s,s,!0,s,s,t.y||r==null?s:t.gc7c(),s,s)],p),s,s,!0,!0,A.AK,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fAf,s,s,s,1,s,!0)
if(r==null)p=A.lF
else{w=B.E(new B.D(A.bP,B.av(new B.fG(t.gaMF(),B.cq(new C.eiO(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iW,B.j8(s,s,s,new B.x(D.auE[u].a,s,E.aPF,s,s,s,s,s,s,s,s,s),s,new C.eiP(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bl(!0,B.v(B.a([new B.a7(s,40,B.cw(v,s,s,s,s,A.aO,!1),s),B.B(B.a([D.bN8,B.E(B.kZ(s,s,s,6,1,new C.eiQ(t),t.f),1),D.bML],p),A.m,s,A.e,A.j,0,s,s),D.ftK,A.am,B.bK(!1,D.ftt,s,s,!0,s,s,new C.eiR(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.WO,s,s,s,s,s,s,D.bs1,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c7(q,A.AK,p,s,!1,!1,s,s)}}
C.bbi.prototype={
a4(d,e){var w
$.W()
w=B.N()
w.Q=A.cj
return d.rI(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
au(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_x.prototype={
S(){var w=$.aw(),v=x.A
return new C.aEX(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b5,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gJ(D.a33),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.ot.prototype={}
C.aEX.prototype={
gaUC(){var w,v,u=this
if(u.p1)w=new B.vC(1,u.p2,0.9,u.p3).iC().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eSt(w))},
q(){var w=this.d,v=$.aw()
w.T$=v
w.P$=0
w=this.e
w.T$=v
w.P$=0
this.a2()},
Ya(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Ya=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qP().jz(0,"assets/images/ngmy_logo.png"),$async$Ya)
case 7:q=e
p=J.eT(J.vl(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCB(new B.pJ(p,1),o),$async$Ya)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eRl(r,p))
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
return B.i($async$Ya,v)},
Pz(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pz=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().l5(92,1800,A.eH),$async$Pz)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$Pz)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCB(new B.pJ(p,1),n),$async$Pz)
case 9:if(r.c==null){w=1
break}r.m(new C.eRJ(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.aa(l)
n=r.c
if(n!=null)n.I(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pz,v)},
b2m(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aF=w.aO=w.aE=w.av=w.Y=w.aW=w.bg=w.y2=0
w.b0=null
w.b1=0.25
w.bc=null
w.bJ=0.5
w.aR=1
w.c4=w.bQ=w.bi=0
w.cM=w.cL=!1},
aWg(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzi(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dbD)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzi(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzi(C.fYV(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzi(C.fYV(1-a0*0.5,n,n,n),w)}return a1?C.bzi(C.fYV(-1,255,255,255),w):w},
aAr(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kW(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.za(u,v,w)
this.dx.pa(new C.eRT(t),!0)
return t},
b4T(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAr()
w=C.i4Q(e.d.a.a,e.db)
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
return C.i1k(d,k,v,a0,j,e.gaUC(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cug(){return this.b4T(null)},
D6(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$D6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmC(),$async$D6)
case 3:w=4
return B.b(B.bN(A.eJ,null,x.H),$async$D6)
case 4:w=5
return B.b($.aW.gmC(),$async$D6)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pU)){u=null
w=1
break}w=7
return B.b(r.m_(1080/r.gZ(0).a),$async$D6)
case 7:w=6
return B.b(e.ht(A.fY),$async$D6)
case 6:q=e
u=q==null?null:J.eT(A.dD.gaM(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$D6,v)},
a9I(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9I=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eR4(q))
t=4
w=7
return B.b(q.D6(),$async$a9I)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcw().aJ(p)
n=C.Bx(null,null,null,null,D.oc,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b4T(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.aa(j)
l=q.c
if(l!=null)l.I(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eR5(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9I,v)},
Ao(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ao=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eR2(q))
t=4
w=7
return B.b($.aW.gmC(),$async$Ao)
case 7:w=8
return B.b(B.bN(A.oH,null,x.H),$async$Ao)
case 8:w=9
return B.b($.aW.gmC(),$async$Ao)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pU))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.m_(1080/p.gZ(0).a),$async$Ao)
case 10:o=e
w=11
return B.b(o.ht(A.fY),$async$Ao)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.ag0(J.eT(A.dD.gaM(n)),"ngmy_quote.png","image/png"),$async$Ao)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.U(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
k=q.c
if(k!=null)k.I(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eR3(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ao,v)},
cha(){var w=this.p4
w.toString
return B.cq(new C.eRC(this,w))},
aYX(d,e){var w=null
return B.bs(w,w,w,w,w,D.f3J,w,w,!0,new B.b4(4,B.n(16),P.uW),w,w,w,w,w,D.tk,!0,w,w,w,w,new B.b4(4,B.n(16),D.aYj),w,w,w,w,w,w,w,w,A1.Dl,e,w,w,w,w,w,w,w,D.f8Z,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xM(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b6,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aQs,w,w,w))
return new B.D(H.agK,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aYW(d,e){var w=null,v=B.n(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jH),A.f,w,w,new B.o(D.tk,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vy(d){return this.aYW(d,A.bA)},
oa(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.u5:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.n(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.je,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.je,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aD(r,B.df(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hy,r,r,r,A.F9,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
afz(d,e,f){return this.oa(d,null,e,f)},
awK(d,e,f,g,h,i,j){var w=null,v=B.n(12),u=g?A.b6.j(0.28):A.c.j(0.05),t=g?A.eA:A.bF,s=x.p
v=B.a([B.df(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hy,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aD(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a7)},
aZ_(d,e,f,g,h,i){return this.awK(d,e,f,g,h,5,i)},
kh(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f0L,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aD(u,D.e7T,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eRP(this,h,i),u,u,u,u,u,u,!1,A.a7))
w=A.c.j(0.08)
v=B.n(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aPx,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.Z0,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auK(w).cIo(A.b6,A.bF,A.b6.j(0.2),A.c,D.eLb,4)
return new B.D(A.xw,B.v(B.a([s,B.a9F(B.kZ(u,u,u,g,f,new C.eRQ(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahA(d,e,f,g,h,i){return this.kh(d,e,f,g,h,null,i)},
ai1(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.K)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.b2
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bGc:o
n.push(B.aD(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eRS(this,e,u),o,o,o,o,o,o,!1,A.a7))}return B.bY(A.bz,n,A.bq,10,10)},
bK9(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a33
else{v=x.a8
w=B.C(new B.a_(D.a33,new C.eQV(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aYX("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eQW(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7R,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aYX("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eQX(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dn,!0,A.a4,n,A.an,n,n,n,n)
t=o.xM("DESIGNS",A.tT)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cOg[q]
r.push(new B.D(A.iW,o.afz(p,o.x===p,new C.eQY(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.c9(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hJ(n,new C.eQZ(o,w),w.length,n,n,A.aO,new C.eR_(),!1),n),A.O,o.aYW(B.v(B.a([B.iG(A.b6,n,n,A.af,!0,new C.eR0(o),n,D.fkW,n,D.fhk,o.k3),B.iG(A.b6,n,n,A.af,!0,new C.eR1(o),n,n,n,D.feA,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.aho)],s),A.F,n,A.e,A.j,0,A.p)},
cCN(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAr()
if(a7.length===0)return a5.vy(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.J4,a6,a6,a6))
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
l=m.length!==0&&A.d.d7(m,new C.eSi(a5,m))?a5.db[A.d.gJ(m)]:a6
k=new C.eSp(a5)
j=new C.eSr()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.J4,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aT(11,11)
f=u.t(0,h)?A.b6.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.eA:A.bF
d=new B.ay(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a5
o.push(B.aD(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Mu,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eSj(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a7))}o=a5.vy(B.bY(A.bz,o,A.rU,6,6))
i=B.a([a5.oa("All words",L.alD,!1,new C.eSk(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afz("Sentence "+a3,!1,new C.eSl(a5,a7,v,a2)))
a2=a3}}i.push(a5.afz("Clear picks",!1,new C.eSm(a5)))
i=B.bY(A.bz,i,A.bq,8,8)
g=a5.xM("SIZE OF THE PICKED WORDS",D.al5)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dhb[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eSn(e,k)
f.push(a5.afz(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bY(A.bz,f,A.bq,8,8),A.S,a5.oa("Make every word normal",A.ln,!1,new C.eSo(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cy_(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bxk,B.d(A.d.hr(D.awl,new C.eS1(q)).b,p,p,p,p,p,p,D.f2d,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cq(new C.eS2(q)),l=q.xM("HIGHLIGHT BEHIND THE WORDS",A.a_V),k=q.p1?-1:q.k4
k=q.ai1(k,new C.eS3(q),D.cYB)
w=q.p1
v=w?A.c:A.b2
n=B.a([n,A.S,m,l,B.bY(A.bz,B.a([k,B.aD(p,B.p(p,D.bJb,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eX1,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eS6(q),p,p,p,p,p,p,!1,A.a7)],o),A.rU,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.J4,p,p,p)],o)
if(q.gaUC()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahA("Colour",l,0,360,new C.eS7(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahA("Shade",k,0.15,0.9,new C.eS8(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kh("Strength",l,0.15,1,new C.eS9(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vy(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xM("LOOK",A.yl))
m=B.a([q.oa("Bold",K.al3,q.fy,new C.eSa(q)),q.oa("Italic",K.al4,q.go,new C.eSb(q))],o)
for(u=0;u<3;++u){l={}
k=D.cPr[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.u5:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aD(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eSc(l,q),p,p,p,p,p,p,!1,A.a7))}n.push(B.bY(A.bz,m,A.rU,8,8))
n.push(q.xM("COLOUR",A.nh))
n.push(q.ai1(q.fx,new C.eSd(q),D.d8s))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.J4,p,p,p))
n.push(q.xM("SIZE AND PLACE",A.G9))
m=q.fr
m=q.kh("Text size",m,0.5,1.6,new C.eS4(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vy(B.v(B.a([m,q.kh("Up / down",l,0.12,0.5,new C.eS5(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
chb(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.n(22)
v=B.I(A.b6.j(0.6),A.q,1.6)
u=B.a([A.b6.j(0.18),A.bC.j(0.12)],x.O)
return B.aD(p,B.p(p,B.v(B.a([B.p(p,D.bOy,A.f,p,p,D.b0h,p,62,p,p,p,p,p,62),A.aB,D.fiw,A.am,D.fn7],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.tk,p,v,w,p,new B.a8(A.a3,A.a8,A.x,u,p,p),A.n),p,p,p,p,D.btc,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaYZ(),p,p,p,p,p,p,!1,A.a7)}w=x.p
v=B.B(B.a([B.bw(B.n(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.cj,A.bT,!1,p,!1,p,p),p),A.aq),A.bd,B.E(B.v(B.a([D.fi4,A.O,B.bY(A.bz,B.a([q.oa("Change",A.kt,!1,q.gaYZ()),q.oa("Remove",A.e6,!1,new C.eRG(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d4W[t]
u.push(q.oa(s.b,s.a,q.at===t,new C.eRH(q,t)))}u=B.bY(A.bz,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c_T(o)
break A}if(1===r){s=q.bZR()
break A}if(2===r){s=q.bG_()
break A}if(3===r){s=q.bMj()
break A}s=q.bI6()
break A}return B.v(B.a([v,A.ac,u,A.aB,s,A.S,new B.bI(A.a3,p,p,q.oa("Reset the whole picture",A.ln,!1,new C.eRI(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c_T(d){var w=this,v=x.p
return B.v(B.a([B.bY(A.bz,B.a([w.oa("Auto enhance",E.a_y,!1,new C.eRy(w)),w.oa("Make words easy to read",A.oR,!1,new C.eRz(w))],v),A.bq,8,8),A.aB,B.cq(new C.eRA(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bZR(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kh("Exposure",n,-1.5,1.5,new C.eRc(o),0,A.k.ab(n,1))
w=o.RG
w=o.kh("Brightness",w,-0.5,0.5,new C.eRd(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kh("Contrast",v,0.4,2,new C.eRe(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kh("Fade",u,0,1,new C.eRf(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kh("Spotlight",t,0,1,new C.eRg(o),0,""+A.k.V(t*100))
s=o.Y
s=o.kh("Darken",s,0,0.85,new C.eRh(o),0,""+A.k.V(s*100))
r=o.aW
r=o.kh("Vignette",r,0,0.9,new C.eRi(o),0,""+A.k.V(r*100))
q=o.aF
q=o.kh("Shade behind words",q,0,0.85,new C.eRj(o),0,""+A.k.V(q*100))
p=o.aO
return o.vy(B.v(B.a([n,w,v,u,t,s,r,q,o.kh("Shade top & bottom",p,0,0.85,new C.eRk(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bG_(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kh("Colour strength",q,0,2.2,new C.eQy(s),1,""+A.k.V(q*100))
w=s.to
w=s.kh("Warmth",w,-1,1,new C.eQz(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kh("Tint",v,-1,1,new C.eQA(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vy(B.v(B.a([q,w,v,s.kh("Shift colours",u,-180,180,new C.eQB(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.oa("Negative",D.bE9,s.y1,new C.eQC(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xM("COLOUR WASH",A.Ns)
w=s.b0
q=B.a([null],x.Z)
A.d.v(q,D.av3)
t=B.a([u,v,s.ai1(w,new C.eQD(s),q),A.O],t)
if(s.b0!=null){q=s.b1
t.push(s.vy(s.ahA("Wash strength",q,0,0.9,new C.eQE(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bMj(){var w,v,u,t,s,r=this,q=r.y2
q=r.kh("Blur",q,0,24,new C.eR6(r),0,A.o.u(A.k.V(q)))
w=r.bg
w=r.kh("Soft focus",w,0,1,new C.eR7(r),0,""+A.k.V(w*100))
v=r.av
u=x.p
v=r.vy(B.v(B.a([q,w,r.kh("Film grain",v,0,1,new C.eR8(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xM("LIGHT LEAK",I.al_)
q=r.bc
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.av3,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ai1(q,new C.eR9(r),t),A.O],u)
if(r.bc!=null){q=r.bJ
u.push(r.vy(r.ahA("Leak strength",q,0,1,new C.eRa(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bI6(){var w,v,u,t,s=this,r=s.aR
r=s.kh("Zoom",r,1,3,new C.eQI(s),1,""+A.k.V(r*100)+"%")
w=s.bi
w=s.kh("Left / right",w,-1,1,new C.eQJ(s),0,""+A.k.V(w*100))
v=s.bQ
v=s.kh("Up / down",v,-1,1,new C.eQK(s),0,""+A.k.V(v*100))
u=s.c4
t=x.p
return B.v(B.a([s.vy(B.v(B.a([r,w,v,s.kh("Turn",u,-180,180,new C.eQL(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bY(A.bz,B.a([s.oa("Turn 90\xb0",H.am9,!1,new C.eQM(s)),s.oa("Flip sideways",A.FW,s.cL,new C.eQN(s)),s.oa("Flip upside down",A.FW,s.cM,new C.eQO(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c2z(){var w=null,v=B.n(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eLn,A.S,D.fjY,A.aB,B.aD(w,B.p(A.A,D.eLA,A.f,w,w,new B.o(w,w,w,B.n(16),w,G.u5,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eRB(this),w,w,w,w,w,w,!1,A.a7)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.tk,w,u,v,w,w,A.n),w,w,w,w,A.bP,w,w,w)},
c_H(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eRt(p),m=x.p,l=B.B(B.a([D.bxq,p.oa("Reset",A.ln,!1,new C.eRp(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.J4,o,o,o),j=p.xM("SHAPE",A.am5),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.C0[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aZ_(n.$2(t,p.cy),62,u.b,s===t,new C.eRq(v,p),62))}}i=B.bY(A.bz,i,A.bq,8,8)
v=p.xM("RING",A.r7)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BW[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aZ_(n.$2(p.cx,t),62,r.b,q===t,new C.eRr(s,p),62))}u=B.bY(A.bz,u,A.bq,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vy(p.kh("Size",s,0.12,0.4,new C.eRs(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b0U(d){return new B.a7(null,d,new B.fG(0.5625,B.cq(new C.eRM(this)),null),null)},
cxg(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.n(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.u5:q
t=new B.aT(14,14)
s=D.d6Z[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bC(1,A.bh,B.aD(A.c5,B.df(q,B.v(B.a([r,A.cV,new B.qi(A.eh,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.boW,q,q,q,A.hM,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eRV(this,w),q,q,q,q,q,q,!1,A.a7),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.br_,A.lQ,q,q,q)},
aPn(){var w,v,u=this,t=null,s=u.cxg(),r=u.as
A:{if(0===r){w=u.bK9()
break A}if(1===r){w=u.cCN()
break A}if(2===r){w=u.cy_()
break A}if(3===r){w=u.chb()
break A}if(4===r){w=u.c_H()
break A}w=u.c2z()
break A}v=x.p
return B.bw(A.t_,B.el(B.v(B.a([s,B.E(B.cw(B.a([w],v),t,D.bs2,t,t,A.ag,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.WO,!0),A.aq)},
aLC(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc7D(),p=B.n(16)
q=B.E(B.aD(r,B.p(r,D.eLL,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b2,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a7),1)
p=s.Q?r:s.gbLU()
w=B.n(16)
v=B.a([new B.ac(0,A.G,A.bC.j(0.35),A.cx,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eQK)
else t.push(D.bIg)
t.push(A.ab)
t.push(D.bzc)
return B.p(r,B.B(B.a([q,A.av,B.E(B.aD(r,B.p(r,B.B(t,A.m,r,A.b8,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.u5,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a7),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b_o,r,r,r,r,G.ahc,r,r,r)},
aYY(){var w=null
return new B.D(T.YX,B.B(B.a([B.aH(w,w,w,w,A.mA,w,w,w,new C.eRb(this),w,w,w,w,w,w),D.fzc,A.b7,D.bQR],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c7(w,A.AK,B.bl(!0,B.cq(new C.eSs(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.beR.prototype={
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
C.rq.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m4.prototype={}
C.zn.prototype={
ag(){var w=this
return B.F(["at",w.a.a7().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nI.prototype={}
C.vV.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a7G.prototype={}
C.aqI.prototype={}
C.a03.prototype={
S(){return new C.aGS(new B.as(A.as,$.aw()),B.jQ(!0,null,!0,!0,null,null,!1),D.dxk,B.a([],x.s),B.et([D.HP],x.Q))}}
C.aGS.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_S(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_S=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().C0(90,700,700,A.eH),$async$a_S)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$a_S)
case 8:p=e
if(r.c!=null)r.m(new C.eYF(r,p,q))
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
return B.i($async$a_S,v)},
a_V(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_V=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hY().aGP(78,n,1100,1100),$async$a_V)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bn(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gR(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fl(),$async$a_V)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ch(p,"data:"+k+";base64,"+A.cS.gcw().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eYG(r,p))
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
return B.i($async$a_V,v)},
b2Z(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cG.aJ(A.d.gal(d.split(","))),A.A,u,u,A.cj,A.bT,!0,u,!1,u,u)
return w}catch(v){}return D.bnb},
c_N(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cq4(C.fA6(w,this.b2Z(d),f),g)},
ac1(d,e,f,g,h){var w=null,v=new C.eYD(f,e),u=new C.eYE(f,e),t=A.c.j(0.05),s=B.n(12),r=B.n(12),q=B.n(12),p=h==null,o=B.I(p?A.bF:A.b6.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BE:A.Ni,A.c2,w,w,w,26),w,w,w),D.edB],x.p),w),w)
else p=this.c_N(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bHY],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mr,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eYC(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ah)},
aWm(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.n(8),B.fL(A.cG.aJ(A.d.gal(h.split(","))),A.A,p,p,A.cj,A.bT,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.n(14)
t=B.n(14)
s=B.n(14)
r=B.I(n?A.bF:A.bk.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.eu,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.TR,p,p,p),1)],x.p)
if(f!=null)n.push(B.aD(p,D.a0O,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a7))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kU,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ah)},
a8a(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a8a=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fDx(),$async$a8a)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eYl(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eYm(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8a,v)},
adT(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adT=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eYo(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eYp(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eYq(r))
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
return B.b(C.fyP(q,r.cx,j,new C.b0z(r.z,r.Q,r.as,r.at),new C.eYr(r),i,m,p,k),$async$adT)
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
if(r.c!=null)r.m(new C.eYs(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adT,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eE,g).w
g=B.aI(d,A.bV,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b2,h,h,B.n(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aD(h,B.p(h,D.bLa,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bk.j(0.5),A.J,24)],v),D.bUP,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eYT(i),h,h,h,h,h,h,!1,A.a7),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0O,h,h,h,i.ax?h:new C.eYU(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbB_()
v=B.a([new B.ac(0,A.G,A.b6.j(0.45),A.J,10)],v)
s.push(B.hs(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vD:A.hn,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vT,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ah),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.n(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.n(16),D.aXR),h,h,h,h,h,h,h,h,A0.IR,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iW,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aPT,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eYV(i)
s=i.aWm(A.lp,q,r,i.gchC(),s)
r=i.z
r=B.E(i.ac1(new C.eYX(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.v(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.ac1(new C.eYY(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gJ(s)
p=i.y.length===0?h:new C.eYZ(i)
s=i.aWm(A.vA,r,p,i.gchK(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gJ(o)
p=B.E(i.ac1(new C.eZ_(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gJ(n)
o=B.a([w,A.aB,D.fom,A.at,D.frb,A.by,u,A.O,D.fpE,A.aB,v,A.by,B.B(B.a([q,A.av,B.E(B.v(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.ac1(new C.eZ0(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fsU],t)
w=i.w.a
if(w.length!==0){v=B.n(999)
u=B.I(D.bfy,A.q,1)
w=C.agz(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bMf,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f7J,h,h,h),B.aL(!1,h,!0,D.e88,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eZ1(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b8P,h,u,v,h,h,A.n),h,h,h,h,D.bqH,h,h,h),h)],t))}o.push(A.by)
o.push(D.ffh)
o.push(A.O)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d_G[m]
v=i.ch===l?A.b6:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bF,1,A.q,-1)
u=u?A.u:A.N
w.push(new B.bC(1,A.bh,new B.D(A.jj,B.aD(h,B.df(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eG,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eZ2(i,l),h,h,h,h,h,h,!1,A.a7),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fxt)
o.push(A.O)
o.push(B.cq(new C.eZ3(i)))
o.push(A.by)
o.push(D.fmu)
o.push(A.O)
w=B.a([i.b5M("auto","Let AI choose",A.dW,A.Q2)],t)
for(v=x.O,m=0;m<11;++m){j=D.vY[m]
u=j.d
w.push(i.b5M(j.a,j.b,j.c,B.a([B.b0(A.d.gJ(u).a),B.b0(A.d.gJ(u).b)],v)))}o.push(B.bY(A.bz,w,A.bq,8,8))
o.push(A.aP)
w=A.c.j(0.04)
v=B.n(16)
u=B.I(i.r?A.bk.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iG(h,A.bk,h,h,h,new C.eYW(i),D.bHp,D.fwJ,h,D.fhy,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aP7,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc7H()
v=B.fn(h,h,A.b6,A.b6.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.n(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eQA:A.Gm
o.push(new B.a7(h,54,B.lv(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.pb,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bl(!0,B.c9(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vs,h,h,A.ag),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aaL,h,h,h,h,h,h,h,h),h)},
bNp(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eYt(this,p,d)
if(d===D.CE)return new C.aDp(p,o,q)
w=B.n(16)
v=p?E.vT:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bF,A.q,1)
s=B.X(p?A.ef:C.hFn(d),A.c,q,q,q,20)
r=C.hFo(d)
return B.aD(q,B.df(q,B.v(B.a([s,A.at,B.f6(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eh)],x.p),A.m,q,A.b8,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hy,q,64,q,A.hz,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a7)},
b5M(d,e,f,g){var w,v=null,u=this.CW===d,t=B.n(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a8,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aD(v,B.df(v,B.B(B.a([w,M.II,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eG,v,v,v,M.aiv,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eYI(this,d),v,v,v,v,v,v,!1,A.a7)}}
C.a02.prototype={
S(){return new C.aGR(new B.as(A.as,$.aw()))}}
C.aGR.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
adU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adU=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eYe(r))
w=1
break}B.eU()
r.m(new C.eYf(r))
t=4
q=C.i5J(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i5t(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eYg(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fYB()
f=$.Cu.h(0,k.a)
o=f==null||J.cn(f)?null:J.fp(f)
if(o==null){r.m(new C.eYh(r))
w=1
break}n=C.i5r(o,r.a.c)
C.i5n(r.a.c.a)
$.fXS=!0
k=r.c
if(k!=null)B.a6(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h0m(j)
h=C.h0n(r.a.c)
e=C.h0o(r.a.c)
w=7
return B.b(C.bBv(k,r.a.c.a,j,h,new C.eYi(r),i,e,a0),$async$adU)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eYj(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eE,i).w
i=B.aI(d,A.bV,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b2,j,j,B.n(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.B(B.a([B.p(j,D.amp,A.f,j,j,D.b_3,j,34,j,j,j,j,j,34),A.av,D.by1],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a7y,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.n(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.n(16),As.aaf),j,j,j,j,j,j,j,j,A0.IR,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aPT,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cX1[q]
o=A.c.j(0.06)
n=k.e?j:new C.eYk(k,p)
r.push(B.mH(j,o,new B.x(p,j,Ay.To,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uW,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.S,B.bY(A.bz,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aP7,j,j,j)],v))
w.push(A.aP)
u=k.e
t=u?j:k.gc7I()
s=B.n(18)
r=B.n(18)
u=u?B.a([A.bk.j(0.5),A.eF.j(0.5)],x.O):D.cva
o=B.a([new B.ac(0,A.G,A.bk.j(0.35),A.cx,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e84:D.bLP
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eF(B.B(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hF,j,j,j)],v),A.m,j,A.b8,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a8,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ah))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bl(!0,B.c9(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vs,j,j,A.ag),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aaL,j,j,j,j,j,j,j,j),j)}}
C.b0z.prototype={}
C.aDp.prototype={
S(){return new C.bjw(null,null)}}
C.bjw.prototype={
gawL(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pN,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawL().q()
this.buU()},
B(d){var w=null,v=this.a.d
return B.aD(w,B.c6(this.gawL(),new C.edQ(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a7)}}
C.bh3.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d1O[s]
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
C.arh.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.Zo.prototype={
S(){return new C.aAS()}}
C.aAS.prototype={
gahZ(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agM(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gA9(){var w=this.e
return w===$?this.e=C.h0m(this.a.c).t(0,D.CE):w},
a7Y(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7Y=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dif(s))
u=3
r=A.d.hr(D.vY,new C.dig(s))
q=B.db(C.h0m(s.a.c),x.Q)
l=q
J.hF(l,D.CE)
p=l
if(s.gA9())J.ch(p,D.CE)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gA9()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h0n(i.c)
g=C.h0o(s.a.c)
w=6
return B.b(C.bBv(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7Y)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agM(q,s.gahZ())
f=q==null?null:q.b
n=f==null?s.gahZ():f
if(!J.A(n,r.a)&&!s.gA9())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.dih(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7Y,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aS:A.ak,j=m?A.M:A.c,i=B.n(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.E(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bD,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dik(d)
e=B.B(B.a([f,B.aH(n,n,n,n,B.X(A.cD,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vY[w]
u=o.gahZ()
t=o.f?n:new C.dil(o,v)
f.push(new C.brY(v,u===v.a,t,n))}f=B.m_(1.25,f,3,10,10,n,A.dR,!0)
u=B.n(18)
t=o.gA9()?D.bXB:n
if(o.gA9())s=n
else s=m?A.bo:A.bK
r=B.X(A.dW,o.gA9()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gA9()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gA9()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gA9()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.av,q,B.aa9(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dim(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,I.ahf,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f81,n,n,n)],g))
f=B.c9(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fh,n,n,A.ag)
u=o.f?n:o.gbzZ()
t=B.bm(A.K,n,n,n,n,n,A.af,n,new B.b7(B.n(16),A.Y),n,n,n)
s=B.n(16)
return B.bl(!0,B.p(n,B.v(B.a([new B.D(D.btF,e,n),new B.dq(1,A.cn,f,n),new B.D(A.Fg,new B.a7(1/0,50,B.bG(B.eF(B.av(o.f?A.rK:D.foR,n,n,n),n,new B.o(n,n,n,s,n,D.bW9,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tF,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.brY.prototype={
B(d){var w=null,v=this.c,u=A.d.gJ(v.d),t=B.n(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.la,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lA,w,w,B.d(v.b,w,w,w,w,w,w,D.f8_,w,w,w),w)],x.p)
if(q)v.push(D.aVV)
return B.aD(w,B.df(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eG,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a7)}}
C.edN.prototype={
aEo(d,e,f){return e+"@"+A.a.aT(A.o.fU(f==null?this.a.c:f,16),8,"0").toUpperCase()},
ws(d,e){return this.aEo(0,e,null)}}
C.aLq.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.b0v.prototype={
B(d){var w,v,u=null,t=C.h_c(this.c)
if(t==null)w=D.blJ
else{w=B.aI(d,u,x.w).w.cHQ(D.bqd,D.ePO)
v=this.d
w=B.tc(B.e1(B.anC(!1,t,!1,v,!1,390),!v,u),w)}return B.f6(A.A,new B.a7(416,870,new C.bl9(w,u),u),A.f,A.du)}}
C.bl9.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.ddi[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.aoj,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dev[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.aoj,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c0(t,new B.o(t,t,t,B.n(64),D.cN0,D.bUx,A.n),A.be),0,0,0))
s.push(B.bZ(3,B.c0(t,new B.o(A.w,t,t,B.n(61),t,t,A.n),A.be),3,3,3))
s.push(B.bZ(13,B.bw(B.n(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.n(20)
s.push(B.ao(t,B.av(B.p(D.aW6,B.p(t,t,A.f,t,t,D.b_m,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.n(51),D.bnh,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.n(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.lb.prototype={
px(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cD(),f=C.cD(),e=m.r
f=C.ep(A.L,!1,e.l(),A.aD,"",k,42,A.bn,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bf,j,2,"Your Presentation Title",0,0,"",D.mG,D.cQ,0.84,0.08,0.26)
w=C.cD()
v=m.w
w=C.ep(A.L,!1,v.l(),A.aD,"",k,20,A.bn,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.bf,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cD()
t=m.d
s=x.u
t=C.rr(i,l,0,0,B.a([f,w,C.ep(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bn,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fr,t.l(),3,"",0,0,"",D.cm,D.f0,0.3,0.35,0.72)],s),C.cD(),D.mF,"","","Welcome",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,34,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Agenda",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
w=C.cD()
w=C.rr(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.bf,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uk,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mF,"","","Agenda",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,32,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Main Idea",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
f=C.cD()
f=C.rr(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,21,A.bn,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.bf,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cm,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mF,"","","Key Point 1",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,30,A.bn,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bf,j,2,"Compare & Contrast",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
r=C.cD()
r=C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.bf,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.08,0.24)
q=C.cD()
q=C.rr(i,l,0,0,B.a([u,r,C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.bf,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.52,0.24)],s),C.cD(),D.mF,"","","Key Point 2",D.dd)
r=C.cD()
r=C.ep(A.L,!1,e.l(),A.aD,"",k,48,A.bn,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bf,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cD()
p=C.Bx(l,l,l,l,D.CA,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rr(i,l,0,0,B.a([r,C.ep(A.L,!1,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.bf,j,2,"Questions?",0,0,"",D.cm,D.cQ,0.7,0.15,0.58)],s),C.cD(),D.mF,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.K)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Eu.prototype={
bC(d){return this.e.$1(d)}}
C.eu.prototype={}
C.j_.prototype={}
C.El.prototype={
gaKa(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agz(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3c(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.El(v,u,t,d==null?w.d:d)},
Fx(d){return this.a3c(null,d,null,null)},
aD9(d){return this.a3c(null,null,null,d)},
cHO(d,e){return this.a3c(d,e,null,null)},
baU(d){return this.a3c(d,null,null,null)},
bb0(d){return this.a3c(null,null,d,null)}}
C.Ne.prototype={
S(){return new C.biT(new B.eS(0,$.aw()),null,null)}}
C.biT.prototype={
a_(){var w,v=this
v.a1()
w=v.qy(new C.dTE(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.iW(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.T$=$.aw()
w.P$=0
this.bum()},
B(d){var w=C.agz(this.a.c.a)
if(w==null)w=A.d.gJ(D.GH)
return B.cq(new C.dTD(this,w,C.hfj(this.a.c.d)))}}
C.bqx.prototype={
B(d){return B.nN(A.Vb,this.e,new C.eXs(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.bdX.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aS2(d,e,v)
break
case"confetti":w.bGv(d,e,v)
break
case"crown":w.bI7(d,e,v)
break
case"aurora":w.bB3(d,e,v)
break
case"champagne":w.bEk(d,e,v)
break
case"diamonds":w.bKi(d,e,v)
break
case"starburst":w.cuY(d,e,v)
break
case"balloons":w.bBh(d,e,v)
break
case"galaxy":w.bPb(d,e,v)
break
case"redcarpet":w.clV(d,e,v)
break
case"coins":w.bFS(d,e,v)
break
case"lanterns":w.bZn(d,e,v)
break
case"hearts":w.bX_(d,e,v)
break
case"petals":w.ch3(d,e,v)
break
case"butterflies":w.bDk(d,e,v)
break
case"neon":w.c2j(d,e,v)
break
case"disco":w.bKt(d,e,v)
break
case"sunrise":w.cwx(d,e,v)
break
case"pearls":w.cg7(d,e,v)
break
case"snow":w.cuD(d,e,v)
break
case"laurel":w.bZt(d,e,v)
break
case"ribbons":w.cot(d,e,v)
break
case"kente":w.bZb(d,e,v)
break
case"trophy":w.cAb(d,e,v)
break
case"shooting":w.csr(d,e,v)
break
case"bokeh":w.bBC(d,e,v)
break
case"orbits":w.cdM(d,e,v)
break
case"flowers":w.bOs(d,e,v)
break
case"music":w.c21(d,e,v)
break
case"mandala":w.c0t(d,e,v)
break
case"sparklers":w.cuM(d,e,v)
break
case"city":w.bF9(d,e,v)
break}},
rv(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.N()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.nC
u=new B.aO(w.r,A.ao,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.F(new B.b5(w,s))
u.F(new B.cV(w,t,w+f,t))
u.F(new B.cV(w,t,w,t+f))
u.F(new B.cV(w,t,w-f,t))
u.F(new B.cV(w,t,w,s))
u.F(new B.bF())
d.aP(u,v)
d.af(e,f*0.18,v)},
lK(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cX(q,v)*2.5)+C.cX(q,u)*6.28)+1)/2
this.rv(d,new B.u(C.cX(q,t)*o,C.cX(q,s)*n),m*(0.006+0.014*C.cX(q,r))*(0.5+p),h,p*p)}},
aS2(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lK(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aF],w),B.a([A.ir,A.bC],w),B.a([A.ev,A.aR],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bv(k/2.8)
i=A.k.E(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cX(h,1))
f=g+c0*(C.cX(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cX(h,3))
d=v[Math.abs(A.o.E(h,4))]
if(i<0.22){a0=B.lh(new B.u(g,c1),new B.u(f,e),A.ct.az(0,i/0.22))
a0.toString
$.W()
a1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a8,A.x,B.a([d[0].j(0),d[0]],w),null,null).aw(0,B.rt(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bQ
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
a6=A.ct.az(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cX(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hw(A.G,o)
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
b9.d=A.bQ
b9.a=A.nC
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cX(h,b1+120)>0.5)this.rv(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bGv(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d86,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).aw(0,new B.a9(0,0,f,e)))
a1.aZ(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.E(a3*(h*(0.08+0.12*C.cX(u,1)))+C.cX(u,2)*w,w)
s=C.cX(u,3)
r=Math.sin(a3*(0.8+C.cX(u,4))+u)
q=h*(0.012+0.012*C.cX(u,5))
p=Math.cos(a3*(2+3*C.cX(u,6))+u)
o=D.Pu[A.o.D(A.k.bv(C.cX(u,7)*5),0,4)]
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
if(r!=null)s.bC(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cE(m.gbM().a.snapshot()):t).a,k)
k.delete()}else{t=B.cl(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c_(t),k)
k.delete()}f.restore()}this.lK(a1,a2,a3,25,A.bL,30)},
bI7(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
n.push(new B.bF())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.baE],v),a4,a4).aw(0,B.bU(w,u)))
l=o.H()
o=m.gbM().a.snapshot()
t.drawPath((m.e=new B.cE(o)).a,l)
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
i.F(new B.bF())
h=A.k.D(b0/1.8,0,1)
s=h>=1
if(s){n=B.N()
n.saq(new B.a8(A.b_,A.b4,A.x,D.d6U,a4,a4).aw(0,new B.a9(a5,a6,o,v)))
a8.aP(i,n)
for(v=[D.en2,D.egM,D.ewf],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
l.delete()}}for(v=B.x3(i),u=B.a([],x.X),o=new B.vx(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.b8(B.jW(y.M));--f
o.jr()
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
f=d.gbM().a.snapshot()
t.drawPath((d.e=new B.cE(f)).a,l)
l.delete()}if(s){a3=A.k.E(b0*0.5,1)
this.rv(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lK(a8,a9,b0,45,A.bL,40)},
bB3(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lK(a8,a9,b0,60,A.c,50)
w=[D.eH5,D.eGO,D.eGI,D.eI3]
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
if(a1!=null)d.bC(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bC(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.nC
n.z=new B.hw(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbM().a.snapshot()):n).a,a2)
a2.delete()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.nC
n.z=new B.hw(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cE(h.gbM().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.E(t*(0.05+0.06*C.cX(a4,1))+C.cX(a4,2)*a3,a3)
r=C.cX(a4,3)
q=Math.sin(b0+a4)
p=C.cX(a4,4)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.vd.j(0.4+0.5*C.cX(a4,5)).gp(0)
n.a=A.nC
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bEk(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hI.j(0.25+0.1*h),D.WY],x.O),l,l).aw(0,B.bU(new B.u(g,f),e)))
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
if(q!=null)d.bC(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.Pu[A.o.E(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cE(u.gbM().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.E(a3*(i*(0.07+0.12*C.cX(w,1)))+C.cX(w,2)*o,o)
r=k*(0.1+0.8*C.cX(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cX(w,4))
if(n<f){this.rv(a1,new B.u(r,n),m*2.4,A.bL,A.k.D(n/f,0,1))
continue}$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.Av.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bKi(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lK(a9,b0,b1,30,A.lc,60)
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
g.push(new B.bF())
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.ax,A.aC,A.x,D.d2O,a5,a5).aw(0,B.cl(A.J,k*1.2,o)))
a2=g.H()
g=f.gbM().a.snapshot()
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
if(a4>0.85)this.rv(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
cuY(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
o.push(new B.bF())
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bL.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbM().a.snapshot()
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
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cX(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bmF.az(0,k)*(0.5+0.5*C.cX(t,v)))
this.rv(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cX(t,3)),D.Pu[A.o.D(A.k.bv(C.cX(t,4)*5),0,4)],u)}},
bBh(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cX(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cX(o,2))+C.cX(o,3)*m,m)
j=C.cX(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.avs[A.o.E(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ao,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bC(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cE(f.gbM().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cl(new B.u(j,k),n*2.3,l)
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bT(D.aW9,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.avj,a3).aw(0,a2))
a1=l.H()
u.drawOval(B.c_(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ao,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bF())
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbM().a.snapshot()
u.drawPath((g.e=new B.cE(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.E(q*(0.1+0.1*C.cX(o,11))+C.cX(o,12)*m,m)
r=C.cX(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cl(A.J,t,v)
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.avs[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c_(s),a1)
a1.delete()
u.restore()}},
bPb(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lK(b1,b2,b3,50,A.c,70)
for(w=[D.eHd,D.eGU,D.eH_],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
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
k=B.aq(A.bL,A.eA,g)
k.toString
d=C.cX(i,3)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cX(i,4)).gp(0)
a0.a=A.nC
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.N()
a9.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.Av.j(0.55),D.aeS],u),a4,a4).aw(0,B.bU(b0,a8)))
b1.af(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bv(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cX(a2,9)),a6*0.1*C.cX(a2,8))
a5=B.lh(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lh(a3,a5,0.6)
a6.toString
a8=B.N()
a8.saq(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.c],u),a4,a4).aw(0,B.rt(a3,a5)))
a8.c=a7*0.005
a8.d=A.bQ
b1.bE(a6,a5,a8)}},
clV(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
n.push(new B.bF())
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.Av.j(0.28),D.aeS],w),b5,b5).aw(0,B.bU(new B.u(q,u),t)))
o.a=A.nC
l=o.H()
q=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cE(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.eq:A.eP)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ao,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cV(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a9.saq(new B.a8(A.a3,A.a8,A.x,a7,b5,b5).aw(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbM().a.snapshot()
v.drawPath((m.e=new B.cE(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hI.gp(0)
b1.c=o
b1.d=A.bQ
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ao,b5,b5,B.a([],s))
w=b7*0.78
b2.F(new B.b5(b6*0.42,w))
b2.F(new B.ap(b6*0.58,w))
b2.F(new B.ap(b6*0.8,b7))
b2.F(new B.ap(b6*0.2,b7))
b2.F(new B.bF())
v=B.N()
v.saq(D.bW3.aw(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aP(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cX(r,1))+C.cX(r,2)*b3,b3)
u=C.cX(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rv(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cX(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bFS(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cX(t,1))
r=h+s*4
q=s*2
p=A.k.E(u*(0.12+0.12*C.cX(t,2))+C.cX(t,3)*r,r)-q
o=C.cX(t,4)*i
n=Math.cos(f*(2+3*C.cX(t,5))+t)
m=Math.abs(n)
l=B.cl(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.dhI:D.cAR,null,null).aw(0,l))
k=q.H()
v.drawOval(B.c_(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bjA.gp(0)
k=j.H()
v.drawOval(B.c_(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rv(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lK(d,e,f,30,A.bL,110)},
bZn(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lK(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cX(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cX(p,2))+C.cX(p,3)*n,n)
l=C.cX(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bT(A.A,0.5,A.x,d,0,B.a([W.X9.j(0.45*k),D.adG],u),d,d).aw(0,B.bU(new B.u(l,m),j)))
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
j.push(new B.bF())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.baP,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b_,A.b4,A.x,B.a([D.bfa,i],u),d,d).aw(0,B.cl(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbM().a.snapshot()
v.drawPath((f.e=new B.cE(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bX_(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
l.push(new B.pA(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pA(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cUY[A.o.E(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bT(A.rX,0.5,A.x,d,0,B.a([A.c,f,l],u),I.a1X,d).aw(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbM().a.snapshot()
v.drawPath((i.e=new B.cE(m)).a,e)
e.delete()
v.restore()}this.lK(a3,a4,a5,30,A.ir,130)},
ch3(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
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
m.push(new B.bF())
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cv9:D.d43
n.saq(new B.a8(A.a3,A.a8,A.x,m,i,i).aw(0,B.bU(A.J,p)))
j=n.H()
n=k.gbM().a.snapshot()
v.drawPath((k.e=new B.cE(n)).a,j)
j.delete()
v.restore()}this.lK(d,e,a0,25,A.bL,140)},
bDk(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lK(b0,b1,b2,40,A.bL,150)
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
a3.push(new B.pA(f,e,l,d,h,0))
a3.push(new B.pA(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a8,A.x,i?D.d3N:D.d6o,a6,a6).aw(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbM().a.snapshot()
v.drawPath((a4.e=new B.cE(a2)).a,a5)
a5.delete()
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.AD.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cE(a4.gbM().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.biT.gp(0)
p.c=q*0.1
p.d=A.bQ
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c2j(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.awx[t].j((1-s)*0.9).gp(0)
q.z=new B.hw(A.G,v)
p=r*0.3
p=B.bx(B.cl(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cX(m,1)*4)+m)))
k=D.awx[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hw(A.aa3,p)
o=j.H()
u.drawRRect(B.er(i),o)
o.delete()}},
bKt(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cX(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cX(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bL,A.nH,A.dv][A.o.E(p,4)]
j=C.cX(p,3)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.nC
i.z=new B.hw(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.N()
t.r=A.aA.gp(0)
t.c=1.2
a3.bE(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.N()
t.r=A.dA.gp(0)
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
this.rv(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cwx(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.az(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
for(w=a2.a,v=a4*0.3,u=x.v,t=0;t<20;++t){s=3.141592653589793+t/19*3.141592653589793+Math.sin(v)*0.03
r=$.W()
q=B.a([],u)
p=new B.aO(r.r,A.ao,h,h,q)
q.push(new B.b5(d,a0))
r=s-0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
r=s+0.04
q.push(new B.ap(d+Math.cos(r)*e*1.5,a0+Math.sin(r)*e*1.5))
q.push(new B.bF())
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bL.j(0.1).gp(0)
o=r.H()
r=p.gbM().a.snapshot()
w.drawPath((p.e=new B.cE(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b6R.j(0.6),D.adG],x.O),h,h).aw(0,B.bU(a1,d)))
a2.af(a1,d,a0)
a0=e*0.2
d=B.N()
d.saq(D.eer.aw(0,B.bU(a1,a0)))
a2.af(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.E(d*(1+t*0.3)+C.cX(t,1)*g*1.4,a0)-v
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
o.delete()}this.lK(a2,a3,a4,20,A.hX,180)},
cg7(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ao,f,f,q)
q.push(new B.b5(0,d))
for(r=d*(0.72+s*0.07),o=a3*(1+s*0.3),n=0;n<=v;n+=u){m=new B.ap(n,r+Math.sin(n/e*6+o+s)*a0*0.03)
q.push(m)
l=p.f
if(l!=null)m.bC(l)
m=p.e
if(m!=null)m.a.delete()
p.e=null}r=new B.ap(e,d)
q.push(r)
o=p.f
if(o!=null)r.bC(o)
r=p.e
if(r!=null)r.a.delete()
p.e=null
r=new B.bF()
q.push(r)
q=p.f
if(q!=null)r.bC(q)
r=p.e
if(r!=null)r.a.delete()
p.e=null
$.W()
r=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cz,A.j7,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cE(p.gbM().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cX(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cX(i,2))+C.cX(i,3)*j,j)
n=C.cX(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bT(An.pm,0.5,A.x,f,0,D.d9I,f,f).aw(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lK(a1,a2,a3,25,A.c,190)},
cuD(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cX(r,1))
p=f+q*4
o=A.k.E(u*(0.03+0.05*C.cX(r,2))+C.cX(r,3)*p,p)
n=C.cX(r,4)
m=Math.sin(t+r)
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cX(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bQ
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
h.delete()}v.restore()}this.lK(d,a0,a1,40,A.ev,200)},
bZt(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f.saq(D.bVQ.aw(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c_(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.bb3.gp(0)
a3.af(w,v*1.08,a0)
d=a5*0.8
this.rv(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lK(a3,a4,a5,40,A.bL,210)},
cot(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hI,A.hX],a6),B.a([A.oB,A.ir],a6),B.a([A.aE,A.eA],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bS<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
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
if(a1!=null)f.bC(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bC(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bS(l,l.gM(0),r);l.C();){h=l.d
if(h==null)h=q.a(h)
h=new B.ap(h.a,h.b)
k.push(h)
f=j.f
if(f!=null)h.bC(f)
h=j.e
if(h!=null)h.a.delete()
j.e=null}l=new B.bF()
k.push(l)
k=j.f
if(k!=null)l.bC(k)
l=j.e
if(l!=null)l.a.delete()
j.e=null
$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.saq(new B.a8(A.a3,A.a8,A.x,B.a([h,k[1],h],a6),I.aw9,new B.mm(w)).aw(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cE(j.gbM().a.snapshot()):l).a,a2)
a2.delete()}this.lK(a8,a9,b0,40,A.c,220)},
bZb(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2.r=D.a2_[a3].gp(0)
a4=a2.H()
s.drawRect(B.c_(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a2_[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c_(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cX(a0,1))+C.cX(a0,2)*a6,a6)
v=C.cX(a0,3)
t=C.cX(a0,4)
this.rv(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a2_[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cAb(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
a1.saq(new B.a8(A.a3,A.a8,A.x,D.dc3,A.avz,null).aw(0,new B.a9(v,a2,r,j)))
a4.aP(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rv(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bGw(a4,a5,a6,60)},
bGw(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.E(k*(0.1+0.1*C.cX(p,31))+C.cX(p,32)*v,v)
n=C.cX(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cl(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.Pu[A.o.E(p,5)].gp(0)
m=n.H()
u.drawRect(B.c_(o),m)
m.delete()
u.restore()}},
csr(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lK(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cX(o,1)*1.6
m=A.k.E(a2+C.cX(o,2)*n,n)/n
l=e*(C.cX(o*7+A.k.bv((a2+C.cX(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a8,A.x,B.a([A.c.j(0),A.bL],s),null,null).aw(0,B.rt(new B.u(l,h),i)))
g.c=r
g.d=A.bQ
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rv(a0,i,p,A.c,1-m)}},
bBC(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cX(r,1))
p=A.k.E(C.cX(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cX(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.ay3[l].j(n).gp(0)
m.a=A.nC
m.z=new B.hw(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.ay3[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cdM(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
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
k.r=A.hI.j(0.4).gp(0)
k.z=new B.hw(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lK(d,e,f,45,A.bL,270)},
bOs(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
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
g=D.d10[A.o.E(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cl(new B.u(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b_,A.b4,A.x,B.a([A.c,g],u),null,null).aw(0,B.cl(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c_(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hI.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lK(a5,a6,a7,30,A.hX,280)},
c21(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.auF[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c_(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cX(g,1))+C.cX(g,2)*h,h)
e=C.cX(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cX(g,4))
a0=D.auF[A.o.E(g,4)]
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
c0t(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d.r=B.aq(A.bL,A.nH,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbM().a.snapshot()
v.drawPath((a1.e=new B.cE(d)).a,a2)
a2.delete()
d=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hX.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.saq(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hI.j(0.25),D.WY],x.O),a3,a3).aw(0,B.bU(w,a4)))
a7.af(w,a4,a5)
this.lK(a7,a8,a9,30,A.bL,300)},
cuM(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bl.gp(0)
h.c=q
h.d=A.bQ
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.saq(new B.bT(A.A,0.5,A.x,null,0,B.a([A.hX,A.hI.j(0.6),D.WY],o),null,null).aw(0,B.bU(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cX(f,1)
d=A.k.E(b2+C.cX(f,2)*e,e)/e
a0=A.k.bv((b2+C.cX(f,2)*e)/e)
a1=C.cX(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cX(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hX,A.aF,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bQ
a6.a=A.nC
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
g.delete()}}}this.lK(b0,b1,b2,35,A.bL,310)},
bF9(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aS2(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cX(n,1))
l=a8*(0.14+0.24*C.cX(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bWM.aw(0,j))
h=i.H()
r.drawRect(B.c_(j),h)
h.delete()
g=A.k.bv(m/q)
f=A.k.bv(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cX(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bL.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c_(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
au(d){return d.b!==this.b||d.d!==this.d}}
C.aZp.prototype={
B(d){var w,v=null,u=new C.c81(),t=new C.c83(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.ans,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c82(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.GH[w]))
return B.bY(A.bz,s,A.bq,12,10)}}
C.YX.prototype={
S(){return new C.azf()}}
C.azf.prototype={
gvz(){var w=this.d
return w===$?this.d=this.a.c:w},
gaZ2(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b5,A.aN),$.aw())}return v},
gawM(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaKa()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.as(new B.bb(w,A.b5,A.aN),v)}return t},
q(){var w=this.gaZ2(0),v=$.aw()
w.T$=v
w.P$=0
w=this.gawM()
w.T$=v
w.P$=0
this.a2()},
ZI(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ZI=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().C0(90,700,700,A.eH),$async$ZI)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fl(),$async$ZI)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahw(o,".png")?"image/png":"image/jpeg"
r.m(new C.d7s(r,n,p))
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
return B.i($async$ZI,v)},
aZ1(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.n(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aPY,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agz(p.gvz().a)
if(n==null)n=A.d.gJ(D.GH)
w=p.gvz()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.Ne(p.gvz(),!1,!0,new B.cy(w.a+v,x.W)),0,0,0),B.ao(o,B.Hx(A.mA,new C.d7x(d),B.ny(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hx(D.bGj,new C.d7y(p),B.ny(o,A.aW,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aPS,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaZ2(0),o,o,o,o,o,2,p.aZ1("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7z(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.ht,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hI.j(0.6),A.q,1)
if(p.gvz().d.length===0)q=D.bJF
else{q=C.hfj(p.gvz().d)
if(q==null)q=new Uint8Array(0)
q=B.hU(B.fL(q,A.A,o,o,A.cj,A.bT,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aD(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7J(),o,o,o,o,o,o,!1,A.a7)],u)
if(p.gvz().d.length!==0)r.push(B.aH(o,o,o,o,D.a0O,o,o,o,new C.d7A(p),o,o,o,o,"Remove logo",o))
return B.c7(o,A.w,B.bl(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.B(r,A.m,o,A.e,A.j,0,o,o),A.O,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawM(),o,o,o,o,o,2,p.aZ1("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7B(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dn,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.dn(D.bIy,D.fyo,new C.d7C(p,d),B.bm(A.aw,o,o,o,A.w,o,A.cl,o,new B.b7(B.n(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.b_y,o,o,o,o,A.Fd,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKU.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.Zh.prototype={
S(){return new C.bfq(new B.as(A.as,$.aw()))}}
C.bfq.prototype={
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aS:A.ak,k=B.aI(d,A.bV,x.w).w,j=n?A.M:A.c,i=B.n(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cD,l,o,o,o,o),o,o,o,new C.dee(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cMr[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gR(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bK
u.push(B.aL(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.pe,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.def(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hM,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.C6(A.bz,6,6,A.bq,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.O)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aQ
e.push(B.B(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.n(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aQR,new C.deg(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.O)
return B.bl(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cn,B.cw(e,o,o,o,o,A.ag,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tF,A.YE,o,o,o),!0,!1,A.af,!0,!0)}}
C.beO.prototype={
a4(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eM()
a2.dB(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.N()
u.z=A.R4
t=B.N()
for(s=a3.a,r=this.d,q=w*2,p=a4.a,o=a4.b,n=0;n<46;++n){m=a2.aj()
l=a2.aj()
k=a2.aj()
j=0.8+a2.aj()*2.2
i=Math.sin(w*(3+a2.aB(4))+n)
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
C.bev.prototype={
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.kz),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lt
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ao,a0,a0,B.a([],a5))
a4.F(new B.iL(a1))
v=new B.Sg(new B.vx(B.x3(a4),!1,B.a([],x.X))).gJ(0)
a4=v.a
a3=v.b
a4.jr()
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
j.d=A.bQ
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.E(n-p*(1-m/10),t)
h=A.k.E(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cC([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cC([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cC([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbM().a.snapshot()
q.drawPath((k.e=new B.cE(f)).a,g)
g.delete()}}a4.jr()
e=u[a3].Mz(n).a
$.W()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mE
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
C.bnp.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eM()
e.dB(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hd()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.gam_()*1.4
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
i.push(new B.bF())
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.saq(B.aUv(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jp
g=j.H()
j=h.gbM().a.snapshot()
q.drawPath((h.e=new B.cE(j)).a,g)
g.delete()}},
au(d){return d.b!==this.b}}
C.b9p.prototype={
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
C.b92.prototype={
a4(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eM()
a0.dB(this.c+11)
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
if(e!=null)i.bC(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bQ
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hw(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cE(g.gbM().a.snapshot()):i).a,d)
d.delete()}},
au(d){return d.b!==this.b}}
C.buj.prototype={
a4(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.N()
t=(0.5+0.5*t)*0.12
w.saq(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cTK,null).aw(0,u))
d.aZ(u,w)
w=u.cC(-3)
v=B.N()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jp
d.aZ(w,v)},
au(d){return d.b!==this.b}}
C.brk.prototype={
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
i.d=A.bQ
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
C.bqt.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.N()
v.a=A.nC
v.saq(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).aw(0,w))
d.aZ(w,v)},
au(d){return d.b!==this.b}}
C.bdQ.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdO(),q=0.55+0.45*Math.sin(this.b)
$.W()
w=B.N()
w.b=A.ae
w.c=1.4
w.d=A.bQ
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.N()
u.b=A.ae
u.c=4
u.r=v.j(0.12*q).gp(0)
u.z=A.rq
r=new C.d79(this,r*0.16,d,u,w)
t=e.gdO()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
au(d){return d.b!==this.b}}
C.xu.prototype={}
C.Ix.prototype={
a5(){return"NgmySlideElementType."+this.b}}
C.aqH.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uD.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mv.prototype={
a5(){return"NgmySlideLayout."+this.b}}
C.hz.prototype={
a5(){return"NgmySlideTransition."+this.b}}
C.eK.prototype={
hF(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
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
u.n(0,"decoration",C.hTr(v.z))
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
hF(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("L<1,eK>")
n=B.C(new B.L(n,new C.cds(),m),m.k("ak.E"))
return C.rr(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("L<1,a4<m,@>>")
n=B.C(new B.L(n,new C.cdt(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i0.prototype={
gb9d(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gS0(){if(!C.kv(this.w))return!1
var w=this.gb9d()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cZ(w.bT())},
hF(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
r=B.C(new B.L(r,new C.cdh(),q),q.k("ak.E"))
return C.Bx(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
v=B.U(w).k("L<1,a4<m,@>>")
w=B.C(new B.L(w,new C.cdi(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jG.prototype={}
C.b0y.prototype={
B(d){return B.cq(new C.cdn(this))}}
C.anS.prototype={
S(){return new C.biD(null,null)}}
C.biD.prototype={
gaZ3(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fU,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaZ3().q()
this.bu6()},
B(d){return B.c6(this.gaZ3(),new C.dFT(),this.a.c)}}
C.aKF.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.ad1.prototype={
PC(d,e,f,g){return this.bO8(d,e,f,g)},
bO8(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$PC=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$PC)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).O(null)
t=d.I(x.q).f
t.U(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ee,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$PC,v)},
B(d){var w=this,v=null,u=B.n(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dm,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dj,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aP,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adj(A.hB,"Download",A.c_,new C.eqf(w,d),!0,v),1),A.av,B.E(new C.adj(A.vF,"Share",A.bj,new C.eqg(w,d),!1,v),1),A.av,B.E(new C.adj(A.ho,"Safari",A.aZ,new C.eqh(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eqi(d),v,v))
return B.bl(!0,new B.D(A.pQ,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iR,v,t,u,s,v,A.n),v,v,v,v,A.Fk,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adj.prototype={
B(d){var w=this,v=null,u=B.n(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.n(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eF(B.v(B.a([p,A.O,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bw0,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ah)}}
C.b0w.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apS(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c7K().akb(1.35)
s=B.av9(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bzz(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bRF,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cy("slide_tf_"+g.a,x.W),h,A.wi,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zv,A.an,h,A.Tf,h,h)
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
w=n?t.cHB(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eD:A.Da
p=B.d(f,new B.cy("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.T6:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fB
j.r=A.az.gp(0)
j=i.cow(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cou(k,t,l?A.T6:s)],x.p),h)}else w=i.cov(p,t,g.k2?A.T6:s,m)
v=new B.nd(w,new B.cy("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aD(A.c5,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a7)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bXG()
case 3:return i.cg6()
case 2:return B.b3(h,h,h,new C.b0t(g,h),A.f1)
case 5:g=g.r
return new C.b0v(g,!i.e&&i.z==null,h)}},
c7K(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k0
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cR(D.adE,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cR(l,A.J,6*v),new B.cR(l,A.J,16*v),new B.cR(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.bZ
w=A.az
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mL
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
e=B.a([new B.cR(A.b9,new B.u(-3*v,0),0),new B.cR(A.ay,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cR(A.cs,A.J,8*v),new B.cR(A.ay,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.KA
break
case"ice":v=o.d
e=B.a([new B.cR(A.aR,A.J,10*v),new B.cR(A.cz,A.J,22*v)],x.r)
k=A.N
w=A.ev
break
case"chalk":h=o.d
e=B.a([new B.cR(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k0
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cVI[q]
u.push(new B.cR(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.saq(D.bUe.aw(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.Ko,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.saq(D.bUz.aw(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
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
k=A.k0
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ayJ(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eNf.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cdl(h)
v=r.k2?C.i52(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eD:A.Da
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Xt(B.de(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cow(d,e,f,g){return this.ayJ(d,e,f,!1,g)},
cou(d,e,f){return this.ayJ(d,e,f,!1,null)},
cov(d,e,f,g){return this.ayJ(d,e,f,g,null)},
bzz(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a8
default:return A.a3}},
bXG(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.av(B.X(s.b===D.l2?A.Gh:A.Bq,A.aA,t,t,t,32),t,t,t)}w=u.bCy(r)
if(s.b===D.l2){s=B.n(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aNj(r,!0)
return C.fA6(s.go,v,s.id)}return w},
aNj(d,e){var w,v,u,t
try{w=C.i5l(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cq(new C.cdk(this,w,v,e))
return u}catch(t){return D.abq}},
bCy(d){return this.aNj(d,!1)},
cg6(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b4Q
return C.i5D(v,w.db,w.dx)}}
C.b0t.prototype={
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
case 1:d.hR(s,g)
d.hR(s,w)
break
case 2:r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
r.F(new B.b5(u/2,0))
r.F(new B.ap(u,t))
r.F(new B.ap(0,t))
r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
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
r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
break
case 4:h=t/2
w.c=v+2
d.bE(new B.u(0,h),new B.u(u,h),w)
break
case 5:q=u*0.22
r=new B.aO(h.r,A.ao,i,i,B.a([],x.v))
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
r=new B.aO(h.r,A.ao,i,i,f)
for(m=0;m<6;++m){l=1.0471975511965976*m-0.5235987755982988
k=p+n*Math.cos(l)
j=o+n*Math.sin(l)
if(m===0){h=new B.b5(k,j)
f.push(h)
v=r.f
if(v!=null)h.bC(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}else{h=new B.ap(k,j)
f.push(h)
v=r.f
if(v!=null)h.bC(v)
h=r.e
if(h!=null)h.a.delete()
r.e=null}}r.F(new B.bF())
d.aP(r,g)
d.aP(r,w)
break}},
au(d){return d.b!==this.b}}
C.aIg.prototype={
S(){return new C.btQ(null,null)}}
C.btQ.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.id,null,1,null,v)
w.cH(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bwp()},
aNu(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.n(8)
return B.c0(B.av(B.d(d,w,w,w,w,w,w,A.dj,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a8,A.x,v,w,w),A.n),A.be)},
bzN(){var w,v=this,u=null,t=v.aNu("Slide A",A.bj),s=v.aNu("Slide B",A.aZ)
if(v.a.c===D.cm)return new B.an(A.W,u,A.b0,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.N,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f4Y(v,s,t),u)},
B(d){return this.bzN()}}
C.aIT.prototype={
j6(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.UF.prototype={
S(){return new C.biQ(null,null)}}
C.biQ.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AS,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cm){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRR(u),x.a)},
bu(d){var w,v,u,t=this
t.bF(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cm)w.sp(0,1)
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRQ(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bul()},
B(d){var w,v=this.a
if(v.c.dy===D.cm||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dRP(this),v.d)}}
C.Iw.prototype={
B(d){return B.cq(new C.cdd(this))}}
C.az_.prototype={
S(){return new C.bdj()}}
C.bdj.prototype={
a_(){this.a1()
if(this.a.c!==D.cm)B.bN(A.LP,new C.d4o(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cm)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.N,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UF(C.ep(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bn,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bf,o,2,"",0,0,"",u,D.f0,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cg,p,p,B.n(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cy("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ep(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bn,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bf,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.n(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.UF(t,B.p(p,D.fk8,A.f,p,p,new B.o(s,p,B.I(A.b2,A.q,1),r,p,p,A.n),p,p,p,p,A.ji,p,p,1/0),!0,1,new B.cy("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b07,A.be)}}
C.a7o.prototype={
S(){return new C.bju(null,null)}}
C.bju.prototype={
gaZA(){var w=this.a
if(w.e)w=D.eNn.t(0,w.c)||D.aN5.t(0,A.d.gJ(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZA()){w=C.i3I(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.buS()},
B(d){var w,v=this,u=v.d
if(!v.gaZA()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.edw(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZs.prototype={
B(d){var w=null
return B.av(C.b0x(!0,w,!1,C.ep(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bn,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.bf,4280172719,2,"Aa",0,0,this.c,D.cm,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bet.prototype={
j6(d){return C.a22(this.b,new B.a9(0,0,0+d.a,0+d.b).cC(-this.c))},
jL(d){return d.b!==this.b||d.c!==this.c}}
C.bpq.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cC(-this.d),g=this.b,f=C.a22(g,h),e=a1.gdO(),d=new C.eV5()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aOB.aw(0,h))
a0.aP(f,w)
g=C.a22(g,h.cC(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bjm.gp(0)
a0.aP(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eWZ.aw(0,h))
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
g.saq(D.eWX.aw(0,h))
a0.aP(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a22(g,h.cC(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aP(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b9.j(0.7).gp(0)
g.z=new B.hw(A.G,e*0.035)
a0.aP(f,g)
g=d.$1(e*0.016)
g.r=A.oC.gp(0)
a0.aP(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eWS.aw(0,h))
a0.aP(f,w)
w=C.a22(g,h.cC(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b8i.gp(0)
a0.aP(w,v)
g=C.a22(g,h.cC(e*0.03))
v=d.$1(e*0.004)
v.r=D.baS.gp(0)
a0.aP(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aOB.aw(0,h))
a0.aP(f,g)
for(g=B.x3(f),w=B.a([],x.X),g=new B.vx(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.b8(B.jW(y.M));--q
g.jr()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bv(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jr()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jr()
m=w[q].Mz(p*n/o).a
l=D.cT3[A.o.E(n,4)]
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
g.saq(D.eX0.aw(0,h))
g.z=new B.hw(A.G,e*0.03)
a0.aP(f,g)
g=d.$1(e*0.018)
g.saq(D.eWY.aw(0,h))
a0.aP(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aP(f,w)
g=C.a22(g,h.cC(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nJ.gp(0)
a0.aP(g,w)
break}},
au(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqq.prototype={
a4(d,e){d.FM(C.a22(this.b,new B.a9(0,0,0+e.a,0+e.b).cC(-this.c)),A.w,e.gdO()*0.05,!1)},
au(d){return d.b!==this.b||d.c!==this.c}}
C.aKT.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.aLo.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.aML.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.a7H.prototype={}
C.NG.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aDQ(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
ge0(){return this.c},
gTm(){return this.r},
gTn(){return this.w},
gLo(){return this.x}}
C.aDQ.prototype={
a_(){var w,v=this
v.a1()
$.aW.c2$.push(v)
C.fF2()
$.hmX=new C.ewt(v)
w=B.bj(null,A.AQ,null,1,null,v)
w.ff(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.If()},
bu(d){var w,v,u=this
u.bF(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Oe(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.If()}},
j_(d){if(d===A.zW||d===A.rZ||d===A.rY||d===A.pn)this.tv()},
q(){var w,v,u,t=this
$.aW.hI(t)
w=t.at
if(w!=null)w.a6(0)
t.tv()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.h6()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.T$=$.aw()
v.P$=0}t.bv5()},
gab2(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOy(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abw(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gS0())return!1
return!0},
ke(){return this.abw(null)},
aig(){var w=this.c
if(w==null)return
w.I(x.q).f.U(D.eVg)},
qg(){if(!this.ke())return!1
this.aig()
return!0},
aql(d){var w,v,u,t,s,r=this
if(r.abw(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hm3(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zO(){return this.aql(null)},
If(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$If=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqJ(k),$async$If)
case 3:j=e
w=4
return B.b(C.apk(k),$async$If)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fUp(j,t.c_x())
w=t.gab2()?5:7
break
case 5:r=t.gOy()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZG(r),$async$If)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bp(s,new C.esR())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bp(s,new C.esS())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.K)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yt(m==null?"":m)!=null)continue
C.fFe(n,s)
p=!0}t.m(new C.esT(t,s))
if(p||s.length>J.ad(j))t.tv()
case 1:return B.h(u,v)}})
return B.i($async$If,v)},
c_x(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kv(w)&&w!==q}if(w)p.push(r)
return p},
cmV(d){var w,v=this,u=d.w
if(!C.kv(u)||u==="hati_kiapo_uongozi")return
v.a9S(d)
w=A.d.be(v.d,new C.eur(d))
u=v.d
if(w>=0){u[w]=d.hF()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hF())
v.db=!1},
ch2(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kv(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cmV(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,i0>")
s=B.C(new B.cQ(new B.a_(s,new C.euf(),w.k("a_<1>")),new C.eug(),v),v.k("J.E"))
return s},
Oe(d){return this.bOw(d)},
tv(){return this.Oe(null)},
bOw(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Oe=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.ch2()
w=3
return B.b(C.VD(d==null?t.a.c:d,s),$async$Oe)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aql(r)?4:5
break
case 4:w=6
return B.b(C.a6V(r),$async$Oe)
case 6:q=r.x
p=A.a.i(q==null?t.gOy():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.be(t.d,new C.ese())
q=t.d
if(o>=0)q[o]=r.hF()
else A.d.ck(q,0,r.hF())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Oe,v)},
pj(){var w,v=this,u=v.at
if(u!=null)u.a6(0)
u=v.e
w=(u==null?null:C.kv(u.w))===!0?A.hy:A.lM
v.at=B.cM(w,new C.evz(v))},
aZ4(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeP(u.hF(),v.f,v.r))
if(w.length>40)A.d.cA(w,0)
A.d.a9(v.ay)},
cAp(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeP(w.e.hF(),w.f,w.r))
w.m(new C.ewp(w,v.pop()))
w.pj()},
cm_(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeP(w.e.hF(),w.f,w.r))
w.m(new C.eup(w,v.pop()))
w.pj()},
of(){var w,v,u=this
if(u.e==null)return
w=A.d.be(u.d,new C.ewc(u))
if(w>=0){u.d[w]=u.e.hF()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
Xh(d){var w,v,u,t,s=this.gdr()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xo(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.T$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.h6()}w.a9(0)},
JW(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdr()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cQ<1,m>")
t=B.db(new B.cQ(new B.a_(w,new C.ewd(),v.k("a_<1>")),new C.ewe(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.K)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.T$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.h6()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.K)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.ewf(n))
s.cg(0,p,new C.ewg())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
HA(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b5(u.d,new C.erD(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOy()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hF())}u.of()
u.pj()},
aiD(d,e){var w,v,u,t,s=this
if(s.ke())return
w=s.Xh(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.kv(v.w))===!0
if(u){C.i3M(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.i3N(t,w.d+w.f*0.5)}}s.HA()
s.of()
s.pj()
if(u&&s.c!=null)s.m(new C.ewq())},
cBt(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.HA()
w.of()
w.pj()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gql(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i1O(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gJ(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bXV(v)
t=q.bXU(v)
s=B.b0(v.e)
r=v.f
return new C.jG(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hFz(o)},
bXV(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bXU(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
aey(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gab2()){w.c.I(x.q).f.U(D.eTT)
return}w.a9S(d)
w.b_g(C.bBw(d))
return}if(C.ce6(v)){w.a9S(d)
w.b_g(d)
return}w.m(new C.ety(w,d))},
aqV(){var w,v,u,t,s,r,q=this
q.a1N(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kv(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.erB(q))
if(r&&q.c!=null){u.toString
q.Jw(u,s)}return}q.tv()
q.m(new C.erC(q))},
b_f(d){this.a9S(d)
this.a_i(d,!0)},
a9S(d){if(!C.kv(d.w))return
C.fFe(d,this.d)},
a_i(d,e){return this.ccY(d,e)},
b_g(d){return this.a_i(d,!1)},
ccY(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_i=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBw(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOy():r)
t.dy.W(0,q.toLowerCase())
C.apl(t.a.c,q)}r=s}else r=d
w=C.ce6(r.w)?3:4
break
case 3:w=5
return B.b(t.a9T(r),$async$a_i)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b5(t.d,new C.etV(l))
o=l.a.hF()
n=C.kv(o.w)&&C.i4Y(o)
t.m(new C.etW(t,o,p))
if(n){m=A.d.be(t.d,new C.etX(o))
if(m>=0){t.d[m]=o.hF()
t.tv()}}if(!t.abw(l.a))t.Yq()
r=!1
if(t.c!=null)if(!t.abw(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aql(r)&&C.fBh(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.U(D.eUs)
case 1:return B.h(u,v)}})
return B.i($async$a_i,v)},
a9T(d){return this.bMI(d)},
bMI(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9T=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lf(r.c,A.zd),$async$a9T)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kU(!1,r,s.c,s.d,null,A.zd,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9T,v)},
o6(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.ce6(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cdv(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o6,v)},
aef(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aef=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.etx(),s,null,!0,!0,x.H),$async$aef)
case 3:if(t.c==null){w=1
break}t.aqV()
case 1:return B.h(u,v)}})
return B.i($async$aef,v)},
aee(){var w=0,v=B.j(x.H),u,t=this,s
var $async$aee=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cb(null,null,!1,null,new C.etu(),s,null,!0,!0,x.H),$async$aee)
case 3:if(t.c==null){w=1
break}t.m(new C.etv())
t.aqV()
case 1:return B.h(u,v)}})
return B.i($async$aee,v)},
Yq(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yq=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$Yq)
case 3:r=e
if(B.jL(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.ar("Bool","ngmy_marriage_hint_seen",!0),$async$Yq)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.U(D.eSw)
case 1:return B.h(u,v)}})
return B.i($async$Yq,v)},
Jw(d,e){return this.cnl(d,e)},
cnl(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jw=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ag9(s,t.gEl(),t.gEk(),!0,e,t.d),$async$Jw)
case 9:w=4
break
case 6:w=10
return B.b(C.aga(s,t.gEl(),t.gEk(),!0,e,t.d),$async$Jw)
case 10:w=4
break
case 7:w=11
return B.b(C.agb(s,t.gEl(),t.gEk(),!0,e,t.d),$async$Jw)
case 11:w=4
break
case 8:w=12
return B.b(C.agc(s,t.gEl(),t.gEk(),!0,e,t.d),$async$Jw)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Jw,v)},
bZr(){var w,v,u,t,s=this
if(!s.gab2()){s.c.I(x.q).f.U(D.eSJ)
return}w=s.gOy()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ag8(u,t,v,new C.esN(s),new C.esO(s),w)},
aez(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aez=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bR(A.dH,null,new C.etE(u),s,!0,!0,!1,A.lv,!1,!1,x.N),$async$aez)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agc(s,u.gEl(),u.gEk(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ag9(s,u.gEl(),u.gEk(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.aga(s,u.gEl(),u.gEk(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.agb(s,u.gEl(),u.gEk(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bZr()
return B.h(null,v)}})
return B.i($async$aez,v)},
cc4(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aZ4()
w=C.cD()
v=C.Bx(t,t,t,t,D.CA,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.etF(u,v))},
a9j(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9j=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9s(s),$async$a9j)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.erF())
t.d3(new C.erG(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9j,v)},
agx(d,e,f,g){var w=null,v=g?A.dr:A.bK,u=B.I(g?A.b2:A.cr,A.q,1)
return B.hs(B.aD(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a7),w,e,w,w)},
a_h(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qg()){w=1
break}s=t.jQ()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a_<1>")
p=B.C(new B.a_(r,new C.etQ(),q),q.k("J.E"))}o=s!=null&&s.b===D.lu?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.U(D.eUD)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.etR(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_h)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_h,v)},
aeQ(){return this.ccX()},
ccX(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aeQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9e(s,t.f+1,o),$async$aeQ)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kD(s,B.U(s).c)
p.a=A.d.be(o.r,new C.etT(q))
t.d3(new C.etU(p,t,o,q,r))
t.c.I(x.q).f.U(D.eV1)
case 1:return B.h(u,v)}})
return B.i($async$aeQ,v)},
aeX(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qg()||!t.zO()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a_<1>")
p=B.C(new B.a_(r,new C.eua(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.U(D.eSh)
w=1
break}o=new B.L(p,new C.eub(),B.U(p).k("L<1,M>")).fd(0,new C.euc())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.K)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b5,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bR(A.K,null,new C.eud(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeX)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.T$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.eue())
case 1:return B.h(u,v)}})
return B.i($async$aeX,v)},
aeC(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aeC=B.e(function(d,e){if(d===1)return B.f(e,v)
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
return B.b(C.ho2(s,new C.El(r,q,p,o==null?"":o)),$async$aeC)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d3(new C.etG(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agz(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aeC,v)},
a9M(){return this.bM4()},
bM4(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9M=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qg()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i9r(s,t.f+1,l),$async$a9M)
case 3:r=e
q=$.fXS
$.fXS=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d3(new C.erW())
t.c.I(x.q).f.U(D.eS8)
w=1
break}if(!q){s=r.CW
s=C.hmV(l,s==null?"":s,!1)}else s=!1
if(s){t.d3(new C.erX(t,l,r))
t.c.I(x.q).f.U(D.eVv)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kD(s,B.U(s).c)
s=l.r
m.a=A.d.be(s,new C.erY(p))
o=s.length
t.d3(new C.erZ(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9M,v)},
aPA(d,e){if(e){this.afp()
return}this.cc4(d,!1)},
bHI(){return this.aPA(null,!1)},
afp(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bR(A.bY,null,new C.euk(t),r,!0,!0,!0,A.p6,!1,!1,x.N),$async$afp)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eul(t,C.i1N(s).px()))
case 1:return B.h(u,v)}})
return B.i($async$afp,v)},
d3(d){var w=this
if(w.qg())return
w.HA()
w.aZ4()
w.m(d)
w.JW()
w.of()
w.pj()},
a7N(){this.d3(new C.eqA(this,D.mF))},
aR2(){var w=this.gdr()
if(w==null)return
this.d3(new C.erU(this,w))},
aQb(){var w=this.e
if(w==null||w.r.length<=1)return
this.d3(new C.erS(this))},
b2g(d,e){if(this.e==null||d===e)return
this.d3(new C.eut(this,d,e))},
NM(d){return this.bJI(d)},
bJI(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOy():s)
w=5
return B.b(C.apj(t.a.c,r),$async$NM)
case 5:t.dy.L(0,r.toLowerCase())
case 4:s=d.a
C.aqL(s)
w=6
return B.b(C.b0B(t.a.c,s),$async$NM)
case 6:if(t.c==null){w=1
break}t.m(new C.erO(t,d))
w=7
return B.b(t.tv(),$async$NM)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NM,v)},
cni(d,e){var w=this
if(d.z){w.aig()
return}w.m(new C.eus(w,d,e))
w.pj()},
jQ(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wi(d){return this.ch.cg(0,d.a,new C.erE(d))},
asL(d){return this.CW.cg(0,d.a,new C.esf())},
a1N(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xh(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jF()},
b5G(){return this.a1N(!0)},
a1K(d){var w,v,u=this
if(u.qg())return
if(!u.zO())return
w=u.Xh(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wi(w).saV(0,"")}u.m(new C.ewa(u,d))
$.aW.x1$.push(new C.ewb(u,d,w))},
b6b(d){var w=this
if(d.b===D.cQ&&!w.ke()&&w.zO()){w.a1K(d.a)
return}w.az8(d.a)},
az8(d){var w,v,u,t,s,r=this
if(r.ke())return
w=r.r
if(w!=null&&w!==d){v=r.Xh(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.evA(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jF()}},
aLS(){this.d3(new C.eqB(this))},
p_(d){return this.byQ(d)},
byQ(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$p_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$p_)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d3(new C.eqy(t,d))
case 1:return B.h(u,v)}})
return B.i($async$p_,v)},
Vr(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vr=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gs(78,1920),$async$Vr)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.eqo(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vr,v)},
Vl(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdr()==null){w=1
break}w=3
return B.b(S.CG(t.a.c),$async$Vl)
case 3:s=e
if(t.c==null){w=1
break}r=J.a5(s)
if(r.gam(s)){t.c.I(x.q).f.U(D.eW4)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gJ(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bR(null,null,new C.eql(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Vl)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d3(new C.eqm(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Vl,v)},
arL(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b5(w.gdr().z,new C.erQ(v))){w.c.I(x.q).f.U(D.eV5)
return}if(w.w===v)w.a1N(!0)
w.d3(new C.erR(w,v))},
bFY(){var w=this.jQ(),v=w==null
if((v?null:w.b)===D.f0)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMz(d,e){var w=this,v=w.jQ(),u=w.gdr(),t=w.e
if(t==null)return
w.d3(new C.er2(w,v,d,e,t,u))},
bAq(d){return this.aMz(d,null)},
a84(d){return this.bAy(d)},
bAy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a84=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a6t.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o6(),$async$a84)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jQ()
if(s!=null){r=s.b
if(r===D.cQ)t.bAq(s.w>=28||s.x.gdJ(0)>=A.H.gdJ(0)?d.d:d.e)
else if(r===D.f0){r=d.c
t.aMz(r.j(0.88),r)}w=1
break}t.d3(new C.er7(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a84,v)},
a83(d){return this.bAw(d)},
bAw(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a83=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jQ()
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
return B.b(t.o6(),$async$a83)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.er5(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a83,v)},
bAg(d){var w=this.gdr()
if(w==null)return
this.d3(new C.er1(this,w,d))},
a_n(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i9n(r),$async$a_n)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.of()
t.m(new C.eu4(t,s))
w=4
return B.b(t.tv(),$async$a_n)
case 4:if(t.c!=null)t.aey(s)
case 1:return B.h(u,v)}})
return B.i($async$a_n,v)},
a9E(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9E=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1N(!0)
t.of()
s=t.c
s.toString
w=3
return B.b(C.QR(s,q),$async$a9E)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9E,v)},
Du(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Du=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.of()
t=4
w=7
return B.b(C.aPt(m),$async$Du)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOT(o,q,m.b),$async$Du)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.aa(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Du,v)},
F8(d,e){return this.czS(d,e)},
czS(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$F8=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qg()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1N(!0)
t.of()
s=h.a=t.e.hF()}else{r=A.d.be(t.d,new C.ewj(d))
s=h.a=r>=0?t.d[r].hF():d.hF()}s=s.w
q=s==null
p=C.i2L(q?"":s)
o=C.hlR(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a_<1>")
n=B.C(new B.a_(s,new C.ewk(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.ct8(n.length,o,s),$async$F8)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i2F(h.a)
h.c=!0
w=5
break
case 6:s={}
l=n.length===1?A.d.gJ(n).a:null
s.a=l
w=l==null?7:9
break
case 7:g=s
w=10
return B.b(t.ct7(n,o),$async$F8)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.hr(t.d,new C.ewl(s))
s=h.a.b
w=11
return B.b(t.ct5(k.b,s),$async$F8)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hF()
case 5:j=C.i2K(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.U(D.eWf)
w=1
break}w=12
return B.b(t.ct6(j.a,s,o,j.c),$async$F8)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.ewm(h,t,i))
t.pj()
case 1:return B.h(u,v)}})
return B.i($async$F8,v)},
ct8(d,e,f){var w=this.c
w.toString
return B.bR(A.K,null,new C.evQ(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
ct7(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.evP(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
ct5(d,e){var w=this.c
w.toString
return B.bR(A.K,null,new C.evJ(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
ct6(d,e,f,g){var w=this.c
w.toString
return B.bR(A.K,null,new C.evL(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
ab6(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ab7(d,e,f,g){var w,v,u=null,t=B.n(16),s=B.aq(d,A.bY,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dm,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.er,B.E(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f5D,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aUl(d,e){var w=null,v=e.j(0.14),u=B.n(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.TO,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
aUo(d,e,f,g,h,i,j){var w=null,v=B.n(16),u=B.n(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.n(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nx,w,w,w),A.cV,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Bt,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.esJ(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
bWP(d,e,f,g,h,i){return this.aUo(d,e,f,!1,g,h,i)},
au4(d,e){var w=null,v=A.c.j(0.05),u=B.n(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dj,w,w,w),A.bD,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.YZ,w,w,w)},
aUn(d,e,f){var w=null,v=B.bm(A.c.j(0.08),w,w,w,A.c,w,A.cl,w,new B.b7(B.n(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nv,w,w,w),new C.esI(d,f),v)},
aUm(d,e){return this.aUn(d,e,null)},
JN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p3(l,s.c,s.d),$async$JN)
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
for(l=A.d.gae(o.z),n=new B.f3(l,new C.evB());n.C();){m=l.gR(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9y(l.charCodeAt(0)==0?l:l,r.b),$async$JN)
case 4:l=t.a
w=5
return B.b(B.p2(l.c,l.d),$async$JN)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JN,v)},
HV(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p3(q,s.c,s.d),$async$HV)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9y(A.R.ao(r.ag(),null),r.b+".json"),$async$HV)
case 4:q=t.a
w=5
return B.b(B.p2(q.c,q.d),$async$HV)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HV,v)},
b5q(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.of()
u.tv()
w=u.c
w.toString
v=B.e8(new C.ew9(u,t),!1,null,x.z)
B.a6(w,!1).cl(v)},
H9(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$H9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$H9)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fFr(),$async$H9)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i5x(s.a)
q=t.c
q.toString
w=5
return B.b(B.bR(A.az,null,new C.eqt(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$H9)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d3(new C.equ(t,s))
w=1
break}if(p==="split")t.d3(new C.eqv(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$H9,v)},
N7(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$N7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}w=3
return B.b(t.o6(),$async$N7)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPs(s,null,null),$async$N7)
case 4:r=e
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.eqz(t,r))
case 1:return B.h(u,v)}})
return B.i($async$N7,v)},
b23(d){var w=this.e
if(w==null||!C.kv(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNR(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPs(s,t==null?null:B.b0(t),u)},
a7L(d){return this.byH(d)},
byH(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7L=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zO()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.U(D.eWu)
w=1
break}w=3
return B.b(t.aNR(),$async$a7L)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.eqq(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7L,v)},
aga(d){return this.cm2(d)},
cm2(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aga=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zO()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.U(D.eVD)
w=1
break}w=3
return B.b(t.aNR(),$async$aga)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.euq(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$aga,v)},
c8M(){var w,v,u=this
if(u.ke())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bD(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cyU()}},
cyU(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d3(new C.ewh(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bX9(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d3(new C.esM(this,r,u.d))},
c0P(d){var w
if(this.ke())return!1
w=this.e
if((w==null?null:C.kv(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fC2(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l2&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c0Q(d){var w
if(this.ke())return!1
w=this.e
if((w==null?null:C.kv(w.w))!==!0)return!0
if(!this.zO())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fC2(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l2&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Ng(d){return this.bAY(d)},
bAY(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Ng=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qg()){w=1
break}if(!t.zO()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.U(D.eUt)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apn(p),$async$Ng)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.U(D.eV7)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gJ(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6V(r)
w=1
break}t.m(new C.erb(t,d,o))
t.of()
$.aW.x1$.push(new C.erc(t))
case 1:return B.h(u,v)}})
return B.i($async$Ng,v)},
Vp(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vp=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$Vp)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bCc(),$async$Vp)
case 4:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.eqn(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vp,v)},
O_(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$O_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o6(),$async$O_)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jQ()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fFi(r),$async$O_)
case 4:q=e
if(q==null){w=1
break}t.d3(new C.esd(s,q))
case 1:return B.h(u,v)}})
return B.i($async$O_,v)},
iX(d){this.d3(new C.eqw(this,d))},
q6(d){return this.bA9(d)},
bA9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qg()){w=1
break}m=!D.aN8.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o6(),$async$q6)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.H9()
w=1
break A
case"sign_paper":t.N7()
w=1
break A
case"hd_photo":t.Vp()
w=1
break A
case"sharpen":t.O_()
w=1
break A
case"print":t.Du()
w=1
break A
case"rotate":s=t.jQ()
if(s!=null)t.d3(new C.eqF(s))
w=1
break A
case"text_box":t.aLS()
w=1
break A
case"picture":t.Vr()
w=1
break A
case"present":t.b5q()
w=1
break A
case"new_slide":t.a7N()
w=1
break A
case"export_json":t.HV()
w=1
break A
case"outline_share":t.JN()
w=1
break A
case"flashcard_tool":t.v7(D.HK)
w=1
break A
case"quiz_tool":t.v7(D.HL)
w=1
break A
case"worksheet_tool":t.v7(D.HM)
w=1
break A
case"duplicate_el":s=t.jQ()
if(s==null){w=1
break A}t.d3(new C.eqG(t,s))
w=1
break A
case"delete_el":t.arL()
w=1
break A
case"bring_fwd":s=t.jQ()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.eqH(t,s))
w=1
break A
case"send_back":s=t.jQ()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.eqS(t,s))
w=1
break A
case"align_left":s=t.jQ()
if(s!=null)t.d3(new C.eqV(s))
w=1
break A
case"align_center":s=t.jQ()
if(s!=null)t.d3(new C.eqW(s))
w=1
break A
case"align_right":s=t.jQ()
if(s!=null)t.d3(new C.eqX(s))
w=1
break A
case"grayscale":case"brighten":t.O_()
w=1
break A
case"flip_h":s=t.jQ()
if(s!=null)t.d3(new C.eqY(s))
w=1
break A
case"flip_v":s=t.jQ()
if(s!=null)t.d3(new C.eqZ(s))
w=1
break A
case"rectangle":t.p_(D.bf)
w=1
break A
case"circle":t.p_(D.eL)
w=1
break A
case"triangle":t.p_(D.jL)
w=1
break A
case"arrow":t.p_(D.CC)
w=1
break A
case"line":case"divider":t.p_(D.fr)
w=1
break A
case"word_count":r=t.gdr()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.f3(q,new C.er_()),o=0;p.C();){n=A.a.fE(A.a.i(q.gR(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a_(n,new C.er0(),B.U(n).k("a_<1>")).gM(0)}t.c.I(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cD()
t.iX(C.iW(A.L,!1,t.gql().d.l(),A.aD,40,A.bn,A.u,0.18,q,"Presentation Title",0,D.mG,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cD()
t.iX(C.iW(A.L,!1,t.gql().e.l(),A.aD,22,A.bn,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iX(C.iW(A.bg,!0,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uk,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iX(C.iW(A.bg,!1,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.uj,0.8,0.1,0.22))
w=1
break A
case"quote":t.iX(C.iW(A.L,!1,4279310375,A.aD,24,A.cF,A.a5,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iX(C.iW(A.bg,!1,4284773515,A.aD,14,A.bn,A.a5,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.uk,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iX(C.iW(A.dM,!1,4279310375,A.aD,14,A.bn,A.a5,0.08,C.cD(),C.bCe(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iX(C.iW(A.dM,!1,4279310375,A.aD,13,A.bn,A.a5,0.06,C.cD(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d3(new C.eqI(t))
w=1
break A
case"footer_bar":t.d3(new C.eqJ(t))
w=1
break A
case"highlight":t.d3(new C.eqK(t))
w=1
break A
case"redact":t.d3(new C.eqL(t))
w=1
break A
case"callout":t.d3(new C.eqM(t))
w=1
break A
case"checkboxes":t.iX(C.iW(A.bg,!1,4279310375,A.aD,20,A.bn,A.a5,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iX(C.iW(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d3(new C.eqN(t))
w=1
break A
case"letter":t.iX(C.iW(A.bg,!1,4279179050,A.aD,17,A.bn,A.a5,0.82,C.cD(),C.bCe()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iX(C.iW(A.bg,!1,4279310375,A.aD,22,A.bn,A.N,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uk,0.8,0.1,0.12))
w=1
break A
case"toc":t.iX(C.iW(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.76,C.cD(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iX(C.iW(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.08,C.cD(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iX(C.iW(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.08,C.cD(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iX(C.iW(A.L,!1,4278556265,A.aD,28,A.bn,A.u,0.12,C.cD(),"APPROVED",0,D.mG,0.32,0.62,0.08))
w=1
break A
case"draft":t.iX(C.iW(A.L,!1,4292617766,A.aD,28,A.bn,A.u,0.12,C.cD(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iX(C.iW(A.L,!1,871318596,A.aD,36,A.bn,A.u,0.12,C.cD(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d3(new C.eqO(t))
w=1
break A
case"progress":t.d3(new C.eqP(t))
w=1
break A
case"stars":t.iX(C.iW(A.L,!1,4279310375,A.aD,36,A.bn,A.a5,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qc,0.8,0.1,0.4))
w=1
break A
case"equation":t.iX(C.iW(A.L,!1,4279310375,A.aD,32,A.bn,A.N,0.14,C.cD(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iX(C.iW(A.L,!1,4279310375,A.aD,18,A.bn,A.a5,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.uj,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d3(new C.eqQ(t))
w=1
break A
case"compare":t.d3(new C.eqR(t))
w=1
break A
case"link_text":t.iX(C.iW(A.bg,!1,4280640491,A.mL,16,A.bn,A.a5,0.1,C.cD(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iX(C.iW(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.1,C.cD(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iX(C.iW(A.bg,!1,4280640491,A.aD,18,A.bn,A.a5,0.1,C.cD(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d3(new C.eqT(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d3(new C.eqU(t,r))
w=1
break A
case"invoice":t.iX(C.iW(A.bg,!1,4279179050,A.aD,16,A.bn,A.a5,0.84,C.cD(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iX(C.iW(A.bg,!1,4279179050,A.aD,17,A.bn,A.a5,0.84,C.cD(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iX(C.iW(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.88,C.cD(),"MEETING MINUTES\nDate: "+C.bCe()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iX(C.iW(A.bg,!1,4279310375,A.aD,17,A.bn,A.a5,0.88,C.cD(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iX(C.iW(A.bg,!1,4279310375,A.aD,15,A.bn,A.a5,0.8,C.cD(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q6,v)},
csA(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eNj.t(0,this.z)},
csz(d){if(this.jQ()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b71(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cm,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.n(12)
u=e?f:A.bF
u=B.I(u,A.q,o&&e?2:1)
t=C.i5m(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.NS,A.f,p,p,D.DT,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fz,B.aD(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a7),p)},
bMk(d){var w,v=null,u=this.jQ()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.L(D.Qn,new C.esc(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
v7(d){return this.byP(d)},
byP(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aN2.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o6(),$async$v7)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.eqx(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v7,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eM5
w=h.e
if(w==null)return h.bCE()
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
m=t?A.bY:D.bak
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gS0()}else j=!1
if(j)k.push(new C.a7p(h.a.c,!1,h.e.gb9d(),h.gc8J(),g))
else if(s&&h.e!=null&&!h.ke()&&C.ce6(h.e.w)){j=h.a
k.push(new C.a7p(j.c,j.d,g,h.gc9S(),g))}if(s)k.push(h.bMg(w,t,r))
if(s&&h.ke()){w=t?A.fx:A.ko
j=B.n(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bLq,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fx,g,g,g,g,g,g,g,g,12,g,g,A.N,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AX,A.iz,g,g,g))}w=!n
if(w&&!h.ke())k.push(h.c1L(t,r))
if(w&&h.ke())k.push(h.czT(t))
if(r&&h.jQ()!=null&&w&&!h.ke())k.push(h.c1H(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b4V(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b4V(t,!1),g))
i.push(B.E(new B.bI(A.b_,g,g,h.bDW(v,t,!s||p),g),1))
if(h.csA(r)&&u&&s&&!h.ke())i.push(h.c8v(v,t,r))
j.push(B.E(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.ke()&&h.csz(!1))j.push(new B.a7(240,g,h.bOU(t),g))
k.push(B.E(B.B(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c1I(t))
return B.c7(g,m,B.bl(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bCE(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bY:A.bK
v=r.a.e
u=r.c7L(A.bj,A.pU,new C.erf(r),r.gcc1(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aLA(A.bj,A.hA,"Blank Presentation",new C.erg(r)),1),A.av,B.E(r.aLA(A.aZ,A.vM,"Class Template",new C.erh(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mK,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bzC(w))
else{t=new B.hZ(t,B.U(t).k("hZ<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.eri(r,w),x.l))}return B.c7(q,p,B.bl(!1,B.cw(u,q,new B.Q(18,12,18,v),q,q,A.ag,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bKw(){this.m(new C.erT(this))
var w=this.c
w.toString
if(B.aI(w,A.bV,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jF()}},
aeR(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jQ()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bR(A.K,null,new C.eu3(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aeR)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeR,v)},
AL(d,e){return this.csW(d,e)},
csW(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AL=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hT(D.Wy,!0,"Dismiss",j,new C.evC(),new C.evD(d,e),A.ix,!0,x.N),$async$AL)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.aig()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gS0()){r.aig()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPt(d),$async$AL)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOT(j,q,d.b),$async$AL)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.aa(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.F8(d,!1),$async$AL)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hT(D.Wy,!0,"Dismiss",j,new C.evE(),new C.evF(d),A.a1,!0,x.y),$async$AL)
case 20:if(g===!0)r.NM(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afU("Rename presentation",d.b),$async$AL)
case 24:l=g
if(l!=null)r.cni(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.evG(r,k))
r.pj()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AL,v)},
b_V(d,e){var w=null
return B.bK(!1,D.fu9,w,w,!0,w,w,e,w,B.fw(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lO,w,w,w,w,w,A.k6,w,w))},
bzC(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eqC(this,d),null)},
bIC(d,e,f){var w=new B.L(B.a(d.split(" \u2022 "),x.s),new C.erH(),x.dv).c_(0,new C.erI()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.agO,this.aM9(v,e,new C.erJ(),f),null)},
aM9(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.ec)
t=e.j(g?0.14:0.1)
s=new B.aT(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bv,n,n,n,10),A.qk],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cm(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.ne,n,n,n))
A.d.v(l,u)}return B.f6(A.a3,B.B(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eh)},
bzA(d,e,f){return this.aM9(d,e,null,f)},
bIE(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dck
else if(v==="hati_kuhoweya")w=D.cZq
else{if(v==="hati_kiapo_uongozi")v=D.cMl
else v=C.kv(v)?D.cTo:A.PZ
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.erM(this,f,d,e,w),null)},
c1I(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jQ()
if(i==null||i.b!==D.cQ)return A.bI
w=k.Wi(i)
v=k.asL(i)
u=A.w.j(0.55)
t=x.p
s=B.bl(!1,new B.D(A.B_,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b7,B.bK(!1,D.fpQ,j,j,!0,j,j,new C.etc(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.az:A.c
q=B.n(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h9,B.c0(new B.D(A.eQ,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bRn,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wi,j,j,j,j,j,j,!1,"\u2022",j,new C.etd(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zv,A.an,j,A.Tf,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.be),j),1)
q=B.n(16)
p=d?A.bo:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.c9(B.B(B.a([k.tV(G.MS,j,new C.ete(k,i),d),k.tV(G.a_8,j,new C.etf(k,i),d),k.tV(K.al6,j,new C.etg(k,i),d),k.tV(K.a_P,j,new C.eth(k,i),d),k.tV(k.bzy(i.as),j,new C.eti(k,i),d),k.tV(D.ame,j,new C.etj(k,i),d),k.tV(D.amd,j,new C.etk(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.D(H.agX,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lj,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ah),0,0,0)},
c1H(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jQ()
if(m==null)return A.bI
w=m.b
v=w===D.cQ
u=B.n(18)
t=x.O
t=d?B.a([A.bo,A.M],t):B.a([A.c,A.aQ],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cx,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b3z(A.jl,"Edit",new C.esY(o,m),d,!0))
if(w===D.lu)p.push(o.b3z(A.Gc,"Shape & ring",new C.esZ(o),d,!0))
p.push(o.tV(A.BK,"Format",new C.et_(o),d))
if(v)A.d.v(p,B.a([o.tV(G.MS,n,new C.et0(o,m),d),o.tV(D.ame,n,new C.et1(o,m),d),o.tV(D.amd,n,new C.et2(o,m),d)],q))
p.push(A.b7)
p.push(o.cqL(A.e6,n,o.gaQ9(),d,!0))
p.push(o.tV(A.hn,"Done",new C.et3(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a8,A.x,t,n,n),A.n),n,n,n,A.AY,A.lj,n,n,n)},
bzy(d){switch(d.a){case 2:return D.a_M
case 1:case 5:return D.a_O
default:return D.a_N}},
c2A(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.bg}},
az7(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.n(12)
u=B.n(12)
t=h?L.Gw:n
if(h)s=n
else s=g?A.c.j(0.06):A.bK
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ec,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.r1,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eF(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ah),n)},
tV(d,e,f,g){return this.az7(d,e,f,g,!1,!1)},
b3z(d,e,f,g,h){return this.az7(d,e,f,g,h,!1)},
cqL(d,e,f,g,h){return this.az7(d,e,f,g,!1,h)},
bMg(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.n(20),m=x.O
m=e?B.a([A.bo,A.M],m):B.a([A.c,A.mU],m)
w=B.I(e?A.aK:A.ov,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cx,18)],x.V)
u=p.a2c(A.eC,"Back",p.gbFI(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dq(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c2:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.N,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tu,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.ke()){u=p.a2c(A.rf,"Undo",p.ax.length===0?o:p.gcAo(),e)
A.d.v(r,B.a([u,p.a2c(D.bEX,"Redo",p.ay.length===0?o:p.gclZ(),e)],q))}r.push(p.a2c(A.y0,"PDF",new C.es5(p),e))
r.push(p.a2c(A.hB,"Download as video",new C.es6(p),e))
if(!p.ke())r.push(B.BL(o,o,B.X(A.o2,e?A.ad:A.bv,o,o,o,o),new C.es7(p),A.J,new C.es8(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.n(14),!0,B.eF(D.e8b,o,new B.o(o,o,o,B.n(14),o,L.Gw,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazY(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ah))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bqK,D.bvQ,o,o,o)},
czT(d){var w=this,v=null,u=B.n(18),t=d?A.az.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.q,1)
return B.p(v,B.c9(B.B(B.a([w.iG(A.u_,"Print",new C.ewn(w),d),w.iG(A.y0,"Download PDF",new C.ewo(w),d),w.iG(A.q_,"Present",w.gazY(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AX,G.aiC,v,v,v)},
a2c(d,e,f,g){var w,v=null
if(f==null)w=g?A.b2:A.dq
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cd)},
c1L(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.n(18)
v=d?A.az.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.q,1)
t=x.f0
t=B.C(new B.L(p,new C.etn(r,d),t),t.k("ak.E"))
t.push(new B.D(X.aig,new B.fg(new C.eto(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vt,r.agx(A.lk,"Ending celebration",r.gcce(),d),q),new B.D(R.vt,r.agx(A.Gc,"Logo ring & frame",r.gccV(),d),q)],x.p):A.hc)
A.d.v(t,w?B.a([new B.D(R.vt,r.agx(A.nh,"Look and feel",r.gccW(),d),q),new B.D(R.vt,r.agx(A.oT,"Edit this slide's text",r.gcds(),d),q)],x.p):A.hc)
t.push(new B.D(R.vt,B.hs(B.aD(q,B.p(q,D.eLv,A.f,q,q,new B.o(q,q,q,B.n(999),B.a([new B.ac(0,A.G,O.lf.j(0.4),A.J,10)],x.V),D.aod,A.n),q,34,q,q,A.fV,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.etp(r),q,q,q,q,q,q,!1,A.a7),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.c9(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bwi,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.c9(r.cos(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AX,q,q,q,q)},
cos(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d6c[v]
u.a=null
s=u.a=t.b
w.push(e.lH(e.cqa(s),t.a,new C.euM(u,e),a3,D.aN2.t(0,s)))}w.push(e.iG(A.kX,"Notes Slide",new C.euN(e),a3))
w.push(e.lH(A.Gb,"Quiz",new C.euO(e),a3,!0))
w.push(e.lH(M.FM,"Worksheet",new C.euZ(e),a3,!0))
w.push(e.lH(V.Ge,"Flashcard",new C.ev9(e),a3,!0))
w.push(e.lH(A.NH,"Lab Report",new C.evk(e),a3,!0))
w.push(e.lH(A.tU,"Rubric",new C.evr(e),a3,!0))
w.push(e.lH(A.oN,"Minutes",new C.evs(e),a3,!0))
w.push(e.lH(A.o1,"Syllabus",new C.evt(e),a3,!0))
w.push(e.lH(A.NN,"Timeline",new C.evu(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d7p[v]
w.push(e.lH(r.b,r.c,new C.evv(e,r),a3,!D.aN8.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iG(A.yl,a0,e.gaLR(),a3),e.iG(A.tX,"Picture",new C.euP(e),a3),e.iG(A.yf,"Bio link",new C.euQ(e),a3),e.iG(A.a0h,"Table",new C.euR(e),a3),e.iG(A.NL,"Sticky",new C.euS(e),a3),e.iG(A.tW,"Divider",new C.euT(e),a3),e.iG(A.BL,"Header",new C.euU(e),a3),e.lH(A3.vC,"Rectangle",new C.euV(e),a3,!0),e.lH(A.r7,"Circle",new C.euW(e),a3,!0),e.lH(A.a_E,"Triangle",new C.euX(e),a3,!0),e.lH(A.iX,"Arrow",new C.euY(e),a3,!0),e.lH(D.bDp,"Parallelogram",new C.ev_(e),a3,!0),e.lH(D.bFV,"Hexagon",new C.ev0(e),a3,!0),e.lH(A.tW,"Line",new C.ev1(e),a3,!0),e.lH(A.y0,"PDF",new C.ev2(e),a3,!0),e.lH(O.a0r,"Signature",new C.ev3(e),a3,!0),e.iG(A2.BA,"Quote",new C.ev4(e),a3),e.iG(D.a_g,a1,new C.ev5(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bV,x.w).w
u=x.p
t=B.B(B.a([e.aMG("Wide 16:9",D.CA,a3),e.aMG("Short 9:16",D.oc,a3),new B.D(A.fz,B.mH(D.bI3,d,D.fma,d,new C.ev6(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bFX("This slide",!e.Q,a3,new C.ev7(e)),A.bp,e.aOR("All slides",e.Q,a3,new C.ev8(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bFY()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c2:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.L(D.a2f,new C.eva(e),n),n.k("ak.E"))
n=B.c9(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d8o[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dq:A.b2,1.5,A.q,-1)
l.push(new B.D(A.fz,B.aD(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.evb(e,k),d,d,d,d,d,d,!1,A.a7),d))}l=B.c9(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDv()
g=B.U(h).k("L<1,D>")
h=B.C(new B.L(h,new C.evc(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.O,q,A.am,p,A.O,o,A.at,n,A.O,m,A.at,l,A.O,j,A.at,B.c9(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.am,e.bZy(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jQ()
w=e.c
w.toString
w=B.aI(w,A.bV,x.w).w
u=new C.euL(e)
t=new C.evw(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Qn,f.dy,new C.evd(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.O,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.Qn,q,new C.eve(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iG(A.kX,w,new C.evf(e),a3),e.iG(A.u_,"Print deck",new C.evg(e),a3),e.lH(D.ak9,"Export JSON",new C.evh(e),a3,!0),e.iG(A.fL,"Duplicate Slide",e.gaR1(),a3),e.iG(A.e6,a2,e.gaQa(),a3),e.cuh(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jQ()
w=x.p
u=B.a([e.iG(D.a_g,a1,new C.evi(e),a3),e.iG(A.fL,"Duplicate",e.gaR1(),a3),e.iG(A.e6,a2,e.gaQa(),a3),e.iG(A.q_,"Present",e.gazY(),a3),e.iG(A.BJ,a0,e.gaLR(),a3),e.iG(A.BD,"Fit Text",new C.evj(e),a3),e.iG(A.y0,"Download PDF",new C.evl(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iG(A.kt,"Transfer",new C.evm(e),a3))
if(f!=null){w=B.a([A.ab,e.iG(G.MS,"Bold",new C.evn(e,f),a3),e.iG(G.a_8,"Italic",new C.evo(e,f),a3),e.iG(G.ajL,"Underline",new C.evp(e,f),a3),e.iG(Ae.MT,"Bullets",new C.evq(e,f),a3),e.bOD(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bMk(a3))
w.push(e.iG(D.bC2,"Delete",e.gaQ9(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aMG(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oc
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7Z,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bHf],v))
return new B.D(A.fz,B.j8(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.era(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
cuh(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b2:A.cr,A.q,1)
u=B.n(8)
t=B.X(A.FK,d?A.aA:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.anc,q,q,q,new C.evT(r,p),q,q,q,q,q,A.cd)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.an3,q,q,q,new C.evU(r,p),q,q,q,q,q,A.cd)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fq,A.mr,q,q,q)},
cqa(d){switch(d.a){case 6:return V.Ge
case 7:return A.Gb
case 8:return M.FM
case 4:return A.BL
default:return A.kX}},
bOD(d,e){var w=null,v=B.I(e?A.b2:A.cr,A.q,1),u=B.n(8),t=B.aH(w,w,w,w,D.anc,w,w,w,new C.esi(this,d),w,w,w,w,w,A.cd),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.an3,w,w,w,new C.esj(this,d),w,w,w,w,w,A.cd)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xK,A.mr,w,w,w)},
bZy(d){var w=null
return B.BL(B.Da(B.X(A5.a_j,d?A.ad:A.bv,w,w,w,16),w,w,D.frD,w,w,w),w,w,new C.esQ(),A.J,this.gbAf(),A.cp,"Slide layout",x.fO)},
lH(d,e,f,g,h){var w=null,v=B.n(14),u=B.n(14),t=g?A.c.j(0.06):A.bK,s=B.I(g?A.dr:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dv:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.NS,A.f,w,w,D.DT,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fz,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eF(new B.D(A.h9,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cV,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w)},
iG(d,e,f,g){return this.lH(d,e,f,g,!1)},
b4V(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ag:A.aO
v=B.hJ(t,new C.ew4(u,s,e,d),s.r.length,A.cp,t,w,new C.ew5(e),!1)
s=d?A.az:A.bK
w=B.a([],x.p)
if(e&&!u.ke())w.push(new B.D(A.cp,B.Hx(E.anq,new C.ew6(u),B.ny(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aNL,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bDW(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oc?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b_,v,v,new B.fG(w,B.aD(v,B.cq(new C.erz(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.erA(this),v,v,v,v,v,v,!1,A.a7),v),v),v)},
bDY(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kv(a9.w))===!0,b1=b0&&C.fC2(b3),b2=b0&&b3.b===D.l2&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.ke())v=!b0||a7.c0Q(b3)
else v=!1
if(!a7.ke())u=!b0||a7.c0P(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cg:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.h_N(b3))o=a8
else if(p&&!a7.ke())o=a7.gc8L()
else o=a7.ke()?a8:new C.ern(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c5:A.jD
i=w&&C.h_N(b3)&&a7.zO()?new C.ero(a7,b3):a8
h=v&&b3.b===D.cQ?new C.erp(a7,b3):a8
g=u?new C.erq(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bk
else e=q?A.c_:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.n(t?6:0)
if(b1)a0=A.c_.j(0.08)
else a0=b3.b===D.l2?A.K:a8
if(b1){a1=a7.ke()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.c_.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.N,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bV,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zO()
a3=b3.b===D.cQ
a4=a3?a7.Wi(b3):a8
a5=a3?a7.asL(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bV,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.err(a7,b3):a8
a3=v&&a3?new C.ers(a7,b3):a8
a6=C.b0x(q,a4,a1,b3,a5,a2,a3,new C.ert(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.n(6)
d.push(B.ao(-4,B.aD(a8,B.p(a8,D.bK4,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eru(a7,b3,b4,b5),a8,a8,new C.erv(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.ke()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aD(a8,B.p(a8,D.bKJ,A.f,a8,a8,new B.o(A.dA,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbX8(),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.ke()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aD(a8,B.p(a8,D.bMh,A.f,a8,a8,new B.o(A.c_,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.erw(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bV,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aD(a8,B.p(a8,D.fAl,A.f,a8,a8,new B.o(A.bj,a8,a8,B.n(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kV,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.erx(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a7),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aD(j,B.eH(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a7),k*b5,new B.cy("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOR(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.n(10)
u=B.I(e?A.bj:A.bF,A.q,1)
if(e)t=A.bj
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.NS,A.f,r,r,D.DT,r,12,r,r,r,r,r,12)],s))
return B.aD(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a7)},
bFX(d,e,f,g){return this.aOR(d,e,f,g,!1)},
c8v(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.T$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b5,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.az:A.aQ
t=f?A.wL:l
if(f)s=new B.bO(new B.ay(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rz,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b7,m.b_V(e,new C.etr(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c2:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.am,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.n(10),A.dg),l,A.bS,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.ets(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aSl(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jQ()
if(a2==null)return A.bI
w=new C.esw(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dR:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b7,a0.b_V(a3,a0.gbKv())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.fmF,B.E(B.kZ(a1,a1,a1,u,0.05,new C.esx(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fyP,B.E(B.kZ(a1,a1,a1,t,0.05,new C.esy(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.fgw,B.E(B.kZ(a1,a1,a1,96,10,new C.esz(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lu
if(l||n===D.l2||n===D.RG)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.fsl,B.E(B.kZ(a1,a1,a1,s,0,new C.esA(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fA4,B.E(B.kZ(a1,a1,a1,r,0,new C.esB(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.C0[j]
i.a=null
g=h.a
i.a=g
k.push(B.j8(a1,a1,a1,new B.x(h.b,a1,A.qp,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.esC(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bY(A.bz,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BW[j]
f.a=null
g=e.a
f.a=g
h.push(B.j8(a1,a1,a1,new B.x(e.b,a1,A.qp,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.esD(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.O,l,A.am,k,A.O,i,A.am,B.bY(A.bz,h,A.bq,6,6)],p))}o.push(A.O)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.L(v,new C.esE(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bY(A.bz,l,A.bq,6,6),A.ac,B.hbR(new C.esF(w,a2),D.cnw,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.f0){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.L(v,new C.esG(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bY(A.bz,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.dn(D.bM3,D.fuk,new C.esH(a0,a5),B.bm(A.bB,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,q,a1,A.ag,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wL:a1
if(a4)o=new B.bO(new B.ay(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rz,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.F8,a1,a1,a1)},
bOU(d){return this.aSl(d,!1,!1,null)},
c7L(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.esK(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f6x,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.v(B.a([w,A.bD,A.cV,r.bzA(D.cQV,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hs(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eF(D.eQV,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.c_.j(0.4),A.em,8)],p),D.aoi,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.n(20)
v=x.O
v=s?B.a([D.b73,D.b7r],v):B.a([A.c,A.ko],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cx,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bS,q,q,q)},
aLA(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eqj(this,g,d,e,f),null)},
afU(d,e){return this.cke(d,e)},
cke(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afU=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b5,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.cb(null,null,!0,null,new C.euo(d,q),p,null,!0,!0,x.N),$async$afU)
case 3:s=g
q.T$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afU,v)},
PD(d){var w=d.bT()
return""+B.bH(w)+"/"+B.bQ(w)+"/"+B.bA(w)}}
C.aeP.prototype={}
C.aym.prototype={
S(){return new C.bc5(null,null)}}
C.bc5.prototype={
gcwu(){var w,v=this.a.c,u=v.f.bT(),t=""+B.bH(u)+"/"+B.bQ(u)+"/"+B.bA(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pN,u,1,u,v)
w.ff(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.bpf,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bsZ()},
IP(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.az(0,new B.hP(w,v,A.ct).az(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.buH,B.c6(new B.h6(B.a([u,w],x.dS)),new C.d0_(this),v),v),v,v,v)}}
C.bcj.prototype={
B(d){var w=null,v=B.n(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.D(D.buY,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.n(22),B.v(B.a([new B.D(D.bu9,B.v(B.a([B.p(w,D.bKP,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.n(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aP,D.fwq,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f7G,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dX,D.boj,B.B(B.a([B.E(B.bK(!1,D.fkU,w,w,!0,w,w,new C.d0l(d),w,B.fw(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.nb,w,A.og,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fqa,w,w,!0,w,w,new C.d0m(d),w,B.fw(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nb,w,A.og,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.Vl,new B.o(A.az,w,u,v,D.cRe,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w),w,w,w)}}
C.Jy.prototype={
S(){return new C.bc4()}}
C.bc4.prototype={
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.f,l=n.w,k=n.r
n=p.d
w=n?0.96:1
v=B.n(12)
if(l){u=0.1+(n?0.06:0)
n=u}else{u=0.08+(n?0.05:0)
n=u}n=m.j(n)
u=B.I(m.j(l?0.34:0.28),A.q,1)
t=x.V
t=p.d?B.a([],t):B.a([new B.ac(0,A.G,m.j(0.08),A.dE,8)],t)
s=m.j(l?0.16:0.14)
r=B.n(9)
q=p.a
r=B.p(o,B.X(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dU(B.dc(B.aD(o,B.vn(B.df(o,B.B(B.a([r,A.av,new B.dq(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f4:A.c,o,o,o,o,o,o,o,o,13,o,o,A.N,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.b8,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eG,o,o,o,A.nY,o,o,1/0),A.ct,A.jg,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d_V(p,d),new C.d_W(p),new C.d_X(p),new C.d_Y(p),o,o,o,!1,A.a7),k),new B.u(0,(1-k)*16))}}
C.Pl.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.n(16),s=B.n(16),r=B.n(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eQ,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.er,B.E(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nx,v,v,v),A.bD,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ah)}}
C.a_9.prototype={
S(){return new C.aDT(D.dd,null,null)}}
C.aDT.prototype={
gYw(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.boQ,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b5k(d){if(!this.a.c.ay)return
this.x=d
this.gYw().iA(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avg(D.eXg)
C.i2i()
v.R1()},
q(){var w=this,v=w.f
if(v!=null)v.a6(0)
w.gYw().q()
v=w.z
if(v!=null)v.a6(0)
C.avg(D.eXh)
C.i2l()
w.bv6()},
czg(){B.jl()
this.m(new C.ex3())
var w=this.c.I(x.q).f
w.a4j()
if($.bjR)w.U(D.eU8)},
R1(){var w,v=this,u=v.f
if(u!=null)u.a6(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.ha0(u,w),1,120)),new C.ewU(v))},
cyW(){var w,v=this
v.m(new C.ex2(v))
if(v.r)v.R1()
else{w=v.f
if(w!=null)w.a6(0)}},
gaUe(){var w=this.a.c.db
return(w==null?"":w).length!==0},
ct1(){var w=this,v=w.f
if(v!=null)v.a6(0)
w.m(new C.ewV(w))
v=w.z
if(v!=null)v.a6(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lh,new C.ewW(w))},
avC(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a6(0)
if(u.a.c.ch){u.m(new C.ewQ(u))
u.R1()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaUe()){u.ct1()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ewR(u,A.o.E(w+1,s)))
u.b5k(w)
u.R1()}},
ciT(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a6(0)
v.m(new C.ewS(v))
v.R1()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.ewT(v,w,t))
v.b5k(w)
v.R1()}},
cut(d){var w,v=this,u=v.e
if(u===D.cm){u=v.d
u===$&&B.c()
return new B.nd(d,new B.cy(u,x.ac))}w=v.cuu(u)
u=v.d
u===$&&B.c()
return B.qf(new B.nd(d,new B.cy(u,x.ac)),w,new C.ex0(),A.bc,A.bc,new C.ex1(v))},
cuu(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bpb
case 16:return A.kr
case 18:return A.n8
default:return A.n9}},
cus(d,e,f){var w,v,u,t=null,s=B.cI(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.us,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.RW,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.ij,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.ur,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.im(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bq(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.im(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bq(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.ewX(s),e)
case 9:return B.c6(s,new C.ewY(s),e)
case 10:return B.c6(s,new C.ewZ(s),e)
case 11:return B.c6(s,new C.ex_(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.im(A.A,e,t,new B.bf(s,new B.bq(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jz(B.jr(e,new B.bf(s,new B.bq(A.us,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqV(w,t))
case 15:w=x.K
return B.jr(e,new B.bf(s,new B.bq(A.RW,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dp()
w.mL((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jI(v,u,v,1)
return B.ft(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eH(A.A,(1-s.gp(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jz(new C.anS(B.c6(n.gYw(),new C.ex4(n,v,w),m),m),A.r,m)}else{t=B.rw(new C.Iw(w,!0,!1,m))
l=B.b0(w.e)
u=n.cut(B.el(B.jz(t,A.r,m),l,!0))}l=B.n(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.ha0(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.om,m,m,m),A.bp,D.bN6],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aW,m,m,l,m,m,A.n),m,m,m,m,A.fI,m,m,m)
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
l.push(B.bZ(0,new C.Ne(new C.El(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oc?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jz(B.un(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjR){r=B.Hx(A.l_,new C.ex5(d),B.ny(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bl(!0,B.B(B.a([r,A.ab,B.Hx(B.X(n.r?Ak.yd:A.iC,m,m,m,m,m),n.gcyV(),B.ny(m,A.aW,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.n(20)
k.push(B.ao(16,B.bl(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.ht,m,m,m),A.f,m,m,new B.o(A.aW,m,m,r,m,m,A.n),m,m,m,m,A.fI,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bl(!0,B.aD(A.c5,B.p(A.la,$.bjR?A.bI:s,A.f,m,m,m,m,64,m,m,D.bpX,m,m,150),A.y,!1,m,n.gczf(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a7),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c7(m,A.w,B.aD(m,new B.an(A.W,m,A.b0,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ex6(n,d),m,m,m,!1,A.a7),m,!1,!1,m,m)}}
C.JF.prototype={
B(d){var w=null
return B.p(w,B.bl(!0,new B.D(E.ai2,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_Q,w,w,w,w,w,w,w,w)}}
C.bqV.prototype={
j6(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.bgY.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.n(999)
break A}if("rounded"===q){w=B.n(18)
break A}if("arch"===q){w=D.aXC
break A}w=B.n(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.n(999)
else t=B.n(q==="rounded"?9:3)
w=B.df(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vT,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hy,r,64,r,r,r,r,64)
return B.aD(r,new B.a7(78,r,B.v(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a7)}}
C.bgX.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dkK.h(0,p)
if(o==null)o=D.d7A
p=p==="none"
w=p?q:new B.a8(A.a3,A.a8,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?K.amq:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.ek,q,q,52)
return B.aD(q,new B.a7(66,q,B.v(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a7)}}
C.aJA.prototype={
aS(){this.b_()
this.aY()
this.dI()},
q(){var w=this,v=w.b3$
if(v!=null)v.a3(0,w.gdC())
w.b3$=null
w.a2()}}
C.aLC.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.bwE.prototype={}
C.aLD.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gby())
w.a8$=null
w.a2()},
aS(){this.b_()
this.aY()
this.bz()}}
C.b0A.prototype={}
C.VE.prototype={
S(){return new C.aDR()},
bfT(d){return this.e.$1(d)}}
C.aDR.prototype={
gb3F(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gaa1(){var w,v
if(this.d==="all")return B.bn(this.a.d,!0,x.I)
w=this.gb3F()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNw(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3F()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb4U(){return A.d.cI(this.gaa1(),0,new C.ewA())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gJ(w).a
v.QD()},
QD(){var w=0,v=B.j(x.H),u,t=this,s
var $async$QD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b1a(s.c,s.f),$async$QD)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eww(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$QD,v)},
IR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gaa1()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.K)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fFe(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p3(o,q.c,q.f),$async$IR)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e8(new C.ewz(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).cl(q),$async$IR)
case 4:q=t.a
w=5
return B.b(B.p2(q.c,q.f),$async$IR)
case 5:w=6
return B.b(t.QD(),$async$IR)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IR,v)},
R_(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$R_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hy(o,D.dYf,!0,"NgmySlidesTransferScan",x.N),$async$R_)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.ewx(t))
w=4
return B.b(C.ah_(s),$async$R_)
case 4:r=e
t.m(new C.ewy(t))
o=J.a5(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.U(D.eT1)
w=1
break}w=5
return B.b(t.a.bfT(r),$async$R_)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).O(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$R_,v)},
IQ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IQ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gaa1()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p3(s,r.c,r.f),$async$IQ)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fFt(null,A.d.gJ(n),s,t.a.f)}else q=C.fFt(n,null,r.c,r.f)
if(n.length===1){s=A.d.gJ(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Gg(q,"ngmy_slides_"+p,!1),$async$IQ)
case 4:o=e
s=t.a
w=5
return B.b(B.p2(s.c,s.f),$async$IQ)
case 5:w=6
return B.b(t.QD(),$async$IQ)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.U(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IQ,v)},
a2n(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.ewB(t))
w=3
return B.b(C.bBX(),$async$a2n)
case 3:s=e
t.m(new C.ewC(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bfT(s),$async$a2n)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a5(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.U(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2n,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.d9:A.bK,k=o.gaa1().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cD,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.ewF(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zt],h),A.m,n,A.e,A.j,0,n,n)
w=B.n(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eU,24)],x.V)
u=B.ao(n,B.X(A.pU,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.n(16)
s=B.a([u,B.B(B.a([B.p(n,D.bNC,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.er,B.E(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.byX],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hs(B.aD(A.c5,D.eQX,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcdE(),n,n,n,n,n,n,!1,A.a7),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0W,A.n),n,n,n,n,E.YN,n,n,1/0),A.dX,o.awN(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aWx(A.q_,m,new C.ewG(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.aWx(D.bDh,m,new C.ewH(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.awN(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.az:A.c
t=B.n(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bP,n,n,n))}else A.d.v(v,new B.L(u,new C.ewI(o,m),B.U(u).k("L<1,r>")))
A.d.v(w,v)}w.push(A.mK)
w.push(o.awN(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.apv(A.aR,k,!0,A.jo,m,o.r,o.gc7P(),"Scan on another device","Show QR"),1),A.av,B.E(o.aLB(A.jU,!0,A.iY,m,o.gcpK(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.B(B.a([B.E(o.by4(A.aV,k,A.hB,m,o.r,o.gc7M(),"Download .json","Backup file"),1),A.av,B.E(o.aLB(A.aF,!0,Ax.yn,m,o.gcBE(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.n(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.lm,A.bj.j(0.9),n,n,n,18)
r=o.gaNw()
q=o.gb4U()
p=o.gb4U()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bA,n,n,n)],h))}j=B.a([j,B.bl(!0,B.v(B.a([new B.D(Ag.Mt,i,n),B.E(B.cw(w,n,D.btj,n,n,A.ag,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.VF,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c7(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
af3(){var w=0,v=B.j(x.H),u=this,t,s
var $async$af3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i8E(s,t.d,t.e),$async$af3)
case 2:return B.h(null,v)}})
return B.i($async$af3,v)},
awN(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.n(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aWx(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.n(18),q=B.n(18),p=e?A.az:A.c
if(g)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cx,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.n(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eF(new B.D(A.bA,B.v(B.a([t,A.S,u,A.bD,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah)},
bID(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.n(16),n=e?A.az:A.c,m=B.n(16)
if(p)w=A.bj
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bNN,A.f,q,q,new B.o(q,q,q,B.n(12),q,new B.a8(A.a3,A.a8,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ef:A.r7
if(p)r=A.bj
else r=e?A.b2:A.dq
return new B.D(A.cA,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bA,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.ewv(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q)},
apv(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.n(18),o=B.n(18),n=h?A.az:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.n(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.r5,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.amY,A.f,s,s,D.b_C,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eF(new B.D(E.Ys,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bD,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ah),r)},
aLB(d,e,f,g,h,i,j){return this.apv(d,e,!1,f,g,!1,h,i,j)},
by4(d,e,f,g,h,i,j,k){return this.apv(d,e,!1,f,g,h,i,j,k)}}
C.VF.prototype={
S(){return new C.bjQ()}}
C.bjQ.prototype={
a_(){this.a1()
this.adV()},
adV(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adV=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fFt(null,A.d.gJ(m),k,r.a.f):C.fFt(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gJ(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kv(A.d.gJ(n).w))C.fFe(A.d.gJ(r.a.d),D.d5y)
n=r.a
m=n.c
n=C.i5C(n.d)
w=7
return B.b(C.fFs(p,C.i5H(r.a.d),n,m,q),$async$adV)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.ewJ(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.ewK(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adV,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.d9:A.bK,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.ewL())
v=B.aH(j,j,j,j,B.X(A.eC,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.ewM(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zt],u),A.m,j,A.e,A.j,0,j,j)
t=B.n(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dj,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.O,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.N,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0W,A.n),j,j,j,j,E.YN,j,j,1/0)
q=B.n(24)
s=B.I(A.aR.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7l,A.L,j,j))
else if(k.d==null)r.push(D.e7L)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.n(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cx,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.flm,A.am,B.aD(j,B.p(j,B.B(B.a([D.bPl,A.av,B.d(m,j,j,j,j,j,j,D.f83,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bU2,A.n),j,j,j,j,A_.ahP,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ewN(k,d),j,j,j,j,j,j,!1,A.a7),A.O,D.fpH,A.aB],u))}o=A.c.j(0.04)
n=B.n(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pL(j,j,!1,l,j,!0,!0,j,!1,D.bkH),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.h1,A.L,j,j))
return B.c7(j,h,B.bl(!0,B.v(B.a([new B.D(Ag.Mt,v,j),B.E(B.c9(B.v(B.a([t,A.aP,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bW_,A.n),j,j,j,j,A.tK,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ai7,j,j,A.ag),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDO.prototype={
S(){return new C.aDP(new B.as(A.as,$.aw()),B.jQ(!0,null,!0,!0,null,null,!1))}}
C.aDP.prototype={
a_(){var w=this
w.a1()
w.e.aN(0,new C.eqd(w))
$.aW.x1$.push(new C.eqe(w))},
q(){var w=this.d
w.T$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aZ6(){var w,v=this.c
v.toString
w=C.yt(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eE,x.w).w,i=B.n(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.uq,36),D.aaV],g),e=B.n(28),d=A.c.j(0.16),a0=B.n(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bKS,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fix,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b02,k,k,k,k,A.xJ,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge7()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.az:A.M
o=new B.aT(14,14)
if(q)n=A.bj
else n=r?A.bj.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bj.j(0.28),A.J,12)],g):k
t.push(new B.bC(1,A.bh,B.df(A.A,new B.x(p,k,D.f1J,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hy,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(M.II)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bS5,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.ue(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bg(5,k),new C.bua()],x.aS),k,k,A.aP_,k,5,k,1,k,k,!1,"\u2022",k,new C.eq9(l),k,new C.eqa(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m3,k,k,k,k),0),0,0,0)],a1)
d=C.yt(w.a.a.toUpperCase())==null?k:l.gc7Q()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cT(Ad.K8,B.p(k,B.bw(e,B.v(B.a([a0,new B.D(D.btN,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fgV,A.by,new B.a7(1/0,50,B.bG(D.fxi,d,B.bm(A.bj,A.bo,A.ak,k,A.c,k,k,k,new B.b7(B.n(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.ny,k,k,!0,k,k,new C.eqb(a2),k,B.fw(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.d9,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ah),k),k,k,k)}}
C.bua.prototype={
oz(d,e){var w=e.a.toUpperCase()
return e.cHT(B.hb(A.bw,w.length),w)}}
C.aqM.prototype={
S(){return new C.aDS(B.z4(A.LJ,A.nF,A.u8))}}
C.aDS.prototype={
q(){this.d.q()
this.a2()},
aZ5(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iQ(w,d)},
a9W(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9W=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fO6(s),$async$a9W)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aZ5("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9W,v)},
c7O(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.K)(w),++u){t=C.i5F(w[u])
if(t!=null){this.aZ5(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vQ,s,s,s,t.gbMP(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eC(B.a([r,B.aH(s,s,s,s,B.X(q?A.ra:Al.Np,s,s,s,s,s),s,s,s,new C.ewP(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.d9,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fyw,s,s,s,1,s,!0)
r=B.z3(t.d,A.bT,t.gc7N())
w=B.n(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.n(16)
return B.c7(p,A.w,new B.an(A.W,s,A.b0,A.r,B.a([r,w,B.ao(32,B.p(s,D.fmq,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.ji,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.bum.prototype={
B(d){var w=null,v=B.n(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,H.amC,A.f,w,w,D.b_L,w,56,w,w,w,w,w,56),A.aP,D.fyc,A.am,new B.ki(this.c,new C.f7p(),w,w,x.cI),A.aP,new B.ki(this.d,new C.f7q(),w,w,x.cl),A.ac,D.fy9],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.K8,new B.o(A.az,w,u,v,w,w,A.n),w,w,w,L.YU,D.buq,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)}}
C.a7p.prototype={
S(){return new C.bjz(A.bx)},
gdd(){return this.c}}
C.bjz.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.ZJ()
w.d=B.du(A.fU,new C.een(w))},
q(){var w=this.d
if(w!=null)w.a6(0)
this.a2()},
ZJ(){return this.cm5()},
cm5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.eel(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bD(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.ce7(p.c),$async$ZJ)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.eem(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$ZJ,v)},
bOL(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.c_
w=v.j(0.14)
u=B.n(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.FK,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bOL(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.agS,A.iz,r,r,1/0)}}
C.a8h.prototype={
nd(){var w,v,u,t=this
t.x9()
w=t.cx
v=t.c
w.bpD(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pS(B.F(["/S",D.ebq,"/URI",new B.rs(B.Wc(w.as),A.ut,!0)],x.N,u),u))}}
C.a8i.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b2d.prototype={
bx8(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e9J],x.di)
this.w!==$&&B.aP()
this.w=w},
gcLa(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jP(w,new C.cgj(),B.a3(w).k("jP<co.E,H>")).fd(0,new C.cgk())},
aCi(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h9(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tr(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.je(d.a,d.b))
s.n(0,"/Border",B.tr(H.aoH))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fZ(t.gcLa()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pS(w,x.Y))}}
C.cgl.prototype={}
C.a2u.prototype={}
C.ahT.prototype={}
C.aQD.prototype={
h0(d){var w,v,u,t,s,r,q=this,p=null
q.lg(d)
q.LL(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bfg(w)
u=x.N
t=x.Y
s=new C.cgl(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bx8(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pS(B.F(["/Type",D.ebo],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8h(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.L(0,r)
v.dx.push(r)}}
C.awe.prototype={}
C.aS7.prototype={
h0(d){var w,v,u,t,s=this
s.lg(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e9(u.a,u.b,0,1)
u=d.b
u.i7()
t=s.a
t.toString
u.KU(t)
u.Sh(0)
u.oU(0,v)
w.h0(d)
u.ng(0)}}}
var z=a.updateTypes(["az<~>()","~(lF)","R(i0)","~()","R(eK)","R(oh)","R(lF)","~(i0)","R(eK,eK)","JF(Y)","R(nI)","R(lb)","az<R>()","H(H,i0)","a4<m,@>(i0)","ai<zn>()","m(nI)","R(a7G)","m(lF)","m(vV)","R(Eu)","H(i0,i0)","m(eK)","r(eK)","cL(eK)","r(hz)","~(hz)","eK(uD,M,M,M,M,H{fx:m,key:m,rotation:M})","eK(m,M,H)","H(oh,oh)","R(zn)","R(m,ai<zn>)","a4<m,@>(oh)","nI()","Yf(Y)","eK(m,M,M,M,M,M{align:pY,anim:hz,bullets:R,color:H?,delay:H,fx:m,key:m,style:Hs,weight:oO})","a0w(Y)","eK(m,M,M,M,M{anim:hz,delay:H,fx:m,key:m})","az<~>(oh)","R(mr)","Yd(Y)","a03(Y)","a02(Y)","Pb(Y)","Zo(Y)","eK(uD,M,M,M,M,H,m,m{anim:hz,delay:H,rotation:M,stroke:H,strokeWidth:M})","eK(m,M,M,M,M,M,m,m,H)","eK(M,M,m,H{size:M})","r(rg,M,M)","lb()","oh(a4<@,@>)","~(ut)","Eu()","ff(eK)","r(j_)","YX(Y)","~(El)","Zh(Y)","H(eK,eK)","eK(eK)","a4<m,@>(eK)","eK(a4<@,@>)","lF(lF)","a4<m,@>(lF)","lF(a4<@,@>)","R(jG)","jG()","m(i0)","~(ai<oh>)","S(ai<i0>)","S(i0)","ai<i0>(m?)","ack(Y,H)","~(R(eK,eK))","acZ(Y)","aeF(Y,H)","w(lF,R)","Vq(Y)","ad1(Y)","Vt(Y)","~(mv)","i0(i0)","M(eK)","a_x(Y)","a_9(Y)","i0()","ai<EQ>()","az<~>(ai<i0>)","r(bv<H,i0>)","D(jG)","D(Eu)","az<~>(hz,~())","r(ai<hz>,hz?,~(hz),w)","R(m4)","ai<jq<mv>>(Y)","jq<mv>(mv)","i0(a4<@,@>)","VE(Y)","eK(m,M,M,M,M,M,H{align:pY,style:Hs,weight:oO})","VF(Y)","r(i0)","~(lY)","Iw(Y,lF,r?)","H(a8i)","az<ai<a4<m,@>>?>()","m(m)","az<zl>({paper:m?,photo:dD?,request:m,template!le})","az<a7y>({doc!zl,history:ai<+(m,m)>,instruction!m,photo:dD?,template!le})","acW(Y)"])
C.cEh.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cEi.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:75}
C.cEj.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajD(s):16;--w.c}w.b=A.o.dW(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mr(v,t)
w.b=v-A.o.dW(q,t)
w.a=t
return q},
$S:75}
C.cEk.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bOc.prototype={
$1(d){return J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fsb.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iJ(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iJ(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iJ(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iJ(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bYR.prototype={
$1(d){return B.a2(d,x.N,x.z)},
$S:29}
C.bYS.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:43}
C.bYU.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fIa.prototype={
$1(d){return new C.a0w(this.a,this.b,C.i6x(),null)},
$S:z+36}
C.f5S.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f5W.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f5X.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f5Y.prototype={
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
C.f5T.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f5U.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f5V.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f5N.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hE,w,w,w)
return B.ek(B.a([B.bK(!1,D.fkQ,w,w,!0,w,w,new C.f5L(d),w,w),B.bK(!1,D.fjV,w,w,!0,w,w,new C.f5M(d),w,w)],x.p),w,w,D.Xs,v,w,w,w,w,D.fyO,w)},
$S:19}
C.f5L.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.f5M.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.f5O.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f5P.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f61.prototype={
$0(){var w=this.a
return w.m(new C.f60(w,this.b))},
$S:0}
C.f60.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f5R.prototype={
$0(){var w=this.a
return w.m(new C.f5Q(w,this.b,this.c))},
$S:0}
C.f5Q.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.L(0,v)},
$S:0}
C.f5Z.prototype={
$0(){return this.a.a0Q(this.b)},
$S:0}
C.f6_.prototype={
$0(){return this.a.OR(0,this.b)},
$S:0}
C.f64.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.f65.prototype={
$0(){var w=this.a
return w.m(new C.f63(w,this.b))},
$S:0}
C.f63.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.L(w,new C.f62(),B.U(w).k("L<1,m>")))}},
$S:0}
C.f62.prototype={
$1(d){return d.a},
$S:z+67}
C.fd7.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h7f(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cB)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.oh(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fd8.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fuO.prototype={
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
C.fuM.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fuN.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fHF.prototype={
$1(d){return d.ag()},
$S:z+32}
C.frS.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fIw.prototype={
$1(d){return new C.Yf(this.a,null)},
$S:z+34}
C.cFD.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cFF.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFI.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFJ.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFH())},
$S:11}
C.cFH.prototype={
$0(){},
$S:0}
C.cFK.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1u(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cG(s)
p=q.be(s,new C.cFG(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ah9(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:336}
C.cFG.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFL.prototype={
$1(d){},
$S:27}
C.cFE.prototype={
$1(d){return new C.Yd(this.b,this.a.gcvQ(),null)},
$S:z+40}
C.cFM.prototype={
$1(d){return D.fTe},
$S:z+43}
C.cFz.prototype={
$1(d){var w=null,v=B.n(24),u=B.I(D.X7,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.D(D.buc,B.v(B.a([B.p(w,D.bI4,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aP,D.fiY,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f75,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.dX,new B.D(A.pQ,B.B(B.a([B.E(B.dT(D.fpJ,new C.cFx(d),B.di(w,w,w,w,w,w,w,w,w,E.n1,w,w,A.cl,w,new B.b7(B.n(14),A.Y),D.aY2,w,w,w,w)),1),A.av,B.E(B.bG(D.fvz,new C.cFy(d),B.bm(A.bB,w,w,w,w,w,A.cl,w,new B.b7(B.n(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wO,new B.o(D.acB,w,u,v,D.cVF,w,A.n),w,w,w,L.YU,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah),w,w,w)},
$S:1668}
C.cFx.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.cFy.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.cFA.prototype={
$0(){return J.nq(this.a.d,new C.cFw(this.b))},
$S:0}
C.cFw.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFv.prototype={
$1(d){var w,v,u,t=null,s=B.n(28),r=B.I(D.X7,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bN_,A.f,t,t,new B.o(t,t,t,B.n(14),t,D.aod,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aQF,t,t,t),A.bD,D.fvv],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dg0[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ax7(u[1],u[2],u[3],new C.cFt(v,d),!1,t))}q.push(A.am)
q.push(D.bom)
q.push(A.am)
q.push(new C.ax7(A.e6,"Delete book","Remove it from this device",new C.cFu(d),!0,t))
return B.bl(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.acB,t,r,s,t,t,A.n),t,t,t,A.tF,E.Yy,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cFt.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.cFu.prototype={
$0(){B.a6(this.a,!1).O("delete")
return null},
$S:0}
C.cFC.prototype={
$3(d,e,f){var w=null,v=B.n(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aGz,12)],x.V)
return B.dU(B.eH(A.A,e,B.p(w,B.bw(B.n(4),new B.a7(62,95.81818181818181,B.f6(A.A,F.anJ(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cFB.prototype={
$0(){return this.a.c2q()},
$S:0}
C.cFs.prototype={
$0(){return this.a.aXG(0,this.b)},
$S:0}
C.cFr.prototype={
$0(){return this.a.D7(this.b)},
$S:0}
C.cFq.prototype={
$0(){return this.a.D7(this.b)},
$S:0}
C.cFN.prototype={
$2(d,e){var w=this.a
return w.bBD(J.q(w.d,e))},
$S:40}
C.cEU.prototype={
$0(){var w=this.a
if(w.c!=null)w.AG()},
$S:0}
C.cET.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_y("Page "+(v.length+1),"",""))},
$S:0}
C.cEW.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cF3.prototype={
$0(){},
$S:0}
C.cF4.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.T$=u
v.P$=0
w=w.b
w.T$=u
w.P$=0
return null},
$S:9}
C.cEX.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcw().aJ(this.c)},
$S:0}
C.cEV.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cEZ.prototype={
$0(){return this.a.Qa(this.b)},
$S:0}
C.cF_.prototype={
$0(){return this.a.Qa(this.b)},
$S:0}
C.cF0.prototype={
$0(){var w=this.a
w.m(new C.cEY(this.b))
w.DX()},
$S:0}
C.cEY.prototype={
$0(){return this.a.c=""},
$S:0}
C.cF2.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cF1(w,d))
w.DX()},
$S:z+51}
C.cF1.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cF9.prototype={
$2(d,e){if(d)this.a.AG()},
$S:126}
C.cF5.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AG(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.U(D.eVx)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cF6.prototype={
$0(){return this.a.aWE(this.b,-1)},
$S:0}
C.cF7.prototype={
$0(){return this.a.aWE(this.b,1)},
$S:0}
C.cF8.prototype={
$0(){return this.a.c3G(0,this.b)},
$S:0}
C.fzk.prototype={
$1(d){return C.hhe()},
$S:42}
C.fzl.prototype={
$1(d){return null},
$S:27}
C.fhw.prototype={
$1(d){return null},
$S:27}
C.fAj.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:344}
C.fAi.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:271}
C.fAp.prototype={
$1(d){var w=this.a
return C.h_F(d)===w||C.hlN(d)===w},
$S:z+4}
C.fgz.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:82}
C.c8q.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzi.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fzj.prototype={
$1(d){return C.fC2(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fu9.prototype={
$1(d){var w=null
return B.bl(!0,new B.D(E.xI,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fqj,A.O,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Gn,D.fkw,new C.fu7(d),B.bm(A.c_,w,w,w,A.w,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.vP,D.frx,new C.fu8(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fu7.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fu8.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fua.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.fgN,w,w,!0,w,w,new C.fu5(d),w,w),B.bG(D.fxQ,new C.fu6(d),w)],x.p),w,w,w,D.fzI,w,w,w,w,D.fgH,w)},
$S:19}
C.fu5.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.fu6.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.e9b.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e99.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e9a.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e9c.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e9d.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fAo.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:82}
C.fAk.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.DF(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.n(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fAm.prototype={
$1(d){var w=null,v=B.n(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f8g,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:146}
C.fAn.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hY,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hY,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.b8,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fAl.prototype={
$2$female$size(d,e){var w=null,v=d?D.aet:this.a,u=B.I(A.hY,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.n(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.acP,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fLY.prototype={
$1(d){return new C.acW(this.a,this.b,null)},
$S:z+108}
C.dXU.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bla:A.Ld,q=B.I(D.jb.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.c_.j(0.45),t,t,B.n(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.n(15)
o=B.p(t,D.amX,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.jb.j(0.35),A.em,10)],x.V),D.bWB,A.n),t,t,t,t,A.xz,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.D(I.YJ,B.v(B.a([p,A.aB,B.B(B.a([o,A.bd,B.E(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.jb,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bD,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f7y,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ig(!0,t,e,A.y,D.aO1,new C.dXT(w,this.c),v,D.ahK,t,A.ag,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.ma,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:116}
C.dXT.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ack(w,new C.dXS(this.b,w),null)},
$S:z+72}
C.dXS.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fud.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fue.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xI,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.ftG,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Gn,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fub(d),B.bm(D.jb,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.o4,D.TV,new C.fuc(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fub.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fuc.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fuh.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fui.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xI,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fhM,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Gn,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fuf(d),B.bm(D.jb,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.o4,D.TV,new C.fug(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fuf.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fug.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.ful.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fum.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xI,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fo7,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Gn,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fuj(d),B.bm(D.jb,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.o4,D.TV,new C.fuk(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fuj.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fuk.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.fNq.prototype={
$1(d){return D.fX_},
$S:z+74}
C.eeq.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bd_:A.Ld,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.n(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.n(15)
q=B.p(v,D.bPh,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.c_.j(0.35),A.em,10)],x.V),D.aoi,A.n),v,v,v,v,A.xz,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.D(I.YJ,B.v(B.a([r,A.aB,B.B(B.a([q,A.bd,B.E(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.La,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bD,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f52,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ig(!0,v,e,A.y,D.aO1,new C.eep(this.b),19,D.ahK,v,A.ag,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.ma,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.eep.prototype={
$2(d,e){var w=D.QB[e]
return new C.aeF(w,new C.eeo(this.a,w),null)},
$S:z+75}
C.eeo.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fC6.prototype={
$0(){return B.fZE(C.hV1(this.a))},
$S:276}
C.fC5.prototype={
$0(){var w=C.h_X(this.a)
return"data:image/png;base64,"+A.cS.gcw().aJ(w)},
$S:23}
C.feF.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jf(d,e),new B.jf(w,e+v),new B.jf(d+f*14,e),new B.jf(w,e-v)],x.J)
B.a1r(this.a,C.fz(4291404327),v)},
$S:559}
C.fNB.prototype={
$1(d){return new C.Vq(this.a,null)},
$S:z+77}
C.ehI.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehH())},
$S:30}
C.ehH.prototype={
$0(){},
$S:0}
C.ehJ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehG(w,d))},
$S:1673}
C.ehG.prototype={
$0(){return this.a.x=J.eT(A.dD.gaM(this.b))},
$S:0}
C.ehK.prototype={
$1(d){},
$S:27}
C.ehk.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ehg.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ehr.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.ehs.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.ekZ)},
$S:0}
C.eht.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ehm.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bO(0,A.c6)},
$S:0}
C.ehn.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.eho.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.ehp.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ehq.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.mb(v,A.dU,A.ic)}},
$S:9}
C.ehl.prototype={
$0(){var w=this.a,v=w.z,u=C.fCK(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cH0(C.fCK(t))},
$S:0}
C.ehi.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.ehj.prototype={
$0(){return this.a.as=!1},
$S:0}
C.ehz.prototype={
$0(){return B.a6(this.a,!1).lw()},
$S:0}
C.ehA.prototype={
$0(){var w=this.a
return w.m(new C.ehy(w))},
$S:0}
C.ehy.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.ehB.prototype={
$0(){var w=this.a
return w.m(new C.ehx(w,this.b))},
$S:0}
C.ehx.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.ehC.prototype={
$1(d){var w=this.a
return w.m(new C.ehw(w))},
$S:8}
C.ehw.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.ehD.prototype={
$1(d){var w=this.a
return w.m(new C.ehv(w))},
$S:8}
C.ehv.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.ehE.prototype={
$0(){var w=this.a
return w.m(new C.ehu(w,this.b))},
$S:0}
C.ehu.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.ehF.prototype={
$1(d){return this.a.Zv()},
$S:2}
C.ehh.prototype={
$0(){return this.a.c75(this.b)},
$S:0}
C.cc6.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:282}
C.cc4.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cc5.prototype={
$1(d){return d.length!==0},
$S:3}
C.fBH.prototype={
bkm(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bOb(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.K)(e),++t){s=e[t]
r.cDv($.qP().jz(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mH(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bkm(d,e)},
$S:1674}
C.fzZ.prototype={
$1(d){return d.length!==0},
$S:3}
C.fA0.prototype={
$1(d){var w=this.a.a
w=A.d.aH(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:82}
C.fA_.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.hr(t,t,t,t,B.de(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qn,A.ca,t,A.e0,A.c8)
v=this.a
w.wB(v.b)
u=w.b.a.c
return u.gbd(u)<=v.a},
$S:33}
C.feg.prototype={
$1(d){var w=A.a.fE(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a_(w,new C.feh(),B.U(w).k("a_<1>")).gM(0)},
$S:247}
C.feh.prototype={
$1(d){return d.length!==0},
$S:3}
C.fee.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.fef.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:216}
C.cc7.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazC()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,w-(f===t?r:0)))
o=C.h_E(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fXw(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aH(n.gcfg(),"\n\n")
d=B.hr(a6,a6,a6,a6,B.de(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adK(k,q,1.28),j),A.qn,A.ca,a6,A.e0,A.c8)
d.wB(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbd(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.h_E(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fXw(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adK(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bC(1,A.bh,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qn,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azB(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.B(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:385}
C.cc8.prototype={
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
n=o.gazC()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.z(u,q),new B.z(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.z(r,p-(a0===s?m:0)))
l=C.h_E(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bn,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fXw(g.length===0?B.a([a6],n):g,l))break}a1=o.adK(i,h,1.28)
a2=new C.cc9(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.IH,new B.a7(v,a5,a4.f,a5),A.IH,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bwu,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bC(1,A.bh,new B.x(l[2+a3],a5,a1,a5,A.qn,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azB(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:156}
C.cc9.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qn,w,w),w)},
$S:1675}
C.fNE.prototype={
$1(d){return new C.Vt(this.a,this.b,null)},
$S:z+79}
C.eiT.prototype={
$1(d){return d.m1()},
$S:1676}
C.eiU.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eiS(w,d))},
$S:1677}
C.eiS.prototype={
$0(){var w=this.b
return this.a.d=w.gfu(w)},
$S:0}
C.eiG.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eiH.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eiN.prototype={
$0(){return B.a6(this.a,!1).eN()},
$S:0}
C.eiO.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bC,A.q,2.5)
return B.aD(w,B.p(w,B.b3(w,w,w,new C.bbi(u,v.gawG(),w),A.f1),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eiL(v),new C.eiM(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a7)},
$S:35}
C.eiL.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:244}
C.eiM.prototype={
$1(d){var w=this.a
w.m(new C.eiI(w,d,this.b,this.c))},
$S:232}
C.eiI.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawG()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.eiP.prototype={
$1(d){var w=this.a
return w.m(new C.eiK(w,this.b))},
$S:8}
C.eiK.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eiQ.prototype={
$1(d){var w=this.a
return w.m(new C.eiJ(w,d))},
$S:6}
C.eiJ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eiR.prototype={
$0(){return B.a6(this.b,!1).O(this.a.a.c)},
$S:0}
C.fNU.prototype={
$1(d){return D.fZN},
$S:z+83}
C.eSt.prototype={
$1(d){return this.a.Ya()},
$S:9}
C.eRl.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcw().aJ(v)},
$S:0}
C.eRJ.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eRT.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eR4.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eR5.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eR2.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eR3.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eRC.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eRD(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jz(B.rw(p>0.2?C.fSj(q,B.a4L(p,p,A.x)):q),A.r,u)],x.p)
w=s.bg
if(w>0.02){v=B.a4L(12,12,A.x)
p.push(B.jz(B.dc(B.rw(C.fSj(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b0
if(r!=null&&s.b1>0)p.push(B.el(u,B.b0(r).j(s.b1),!0))
r=s.bc
if(r!=null&&s.bJ>0){r=B.b0(r).j(s.bJ)
w=s.bc
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aWj,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.be))}r=s.aE
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aW4,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.be))
r=s.aO
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b4,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aO)],x.O),D.cUk,u),A.n),A.be))
if(s.aF>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b4,A.x,B.a([A.w.j(0),A.w.j(s.aF),A.w.j(s.aF),A.w.j(0)],x.O),D.d41,u),A.n),A.be),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.aW
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d1c,u),A.n),A.be))
s=s.av
if(s>0)p.push(B.b3(u,u,u,new C.beR(s,u),A.au))
return new B.an(A.W,u,A.b0,A.r,p,u)},
$S:62}
C.eRD.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cj,A.bT,!0,q,!1,q,q),o=r.a,n=o.aWg(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c4,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bi
v=o.aR
u=v-1
t=o.bQ
s=o.cL?-1:1
return B.dU(B.ed(A.A,B.eH(A.A,l,B.ft(A.A,new B.Dd(new B.yK(q,q,n,A.Ah),p,q),q,B.vI(s,o.cM?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:604}
C.eRP.prototype={
$0(){return this.a.m(new C.eRO(this.b,this.c))},
$S:0}
C.eRO.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eRQ.prototype={
$1(d){return this.a.m(new C.eRN(this.b,d))},
$S:6}
C.eRN.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eRS.prototype={
$0(){return this.a.m(new C.eRR(this.b,this.c))},
$S:0}
C.eRR.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQV.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eQW.prototype={
$1(d){var w=this.a
return w.m(w.gcxe())},
$S:2}
C.eQX.prototype={
$1(d){return this.a.m(new C.eQU())},
$S:2}
C.eQU.prototype={
$0(){},
$S:0}
C.eQY.prototype={
$0(){var w=this.a
return w.m(new C.eQT(w,this.b))},
$S:0}
C.eQT.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eR_.prototype={
$2(d,e){return A.av},
$S:36}
C.eQZ.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.n(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.df(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b_,A.b4,A.x,r,w,w),A.n),A.hy,w,94,w,w,w,w,70)
return B.aD(w,new B.a7(70,w,B.v(B.a([r,A.h0,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.N,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQS(u,v),w,w,w,w,w,w,!1,A.a7)},
$S:74}
C.eQS.prototype={
$0(){var w=this.a
return w.m(new C.eQP(w,this.b))},
$S:0}
C.eQP.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eR0.prototype={
$1(d){var w=this.a
return w.m(new C.eQR(w,d))},
$S:8}
C.eQR.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eR1.prototype={
$1(d){var w=this.a
return w.m(new C.eQQ(w,d))},
$S:8}
C.eQQ.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eSi.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gJ(this.b)]},
$S:33}
C.eSp.prototype={
$1(d){var w=this.a
return w.m(new C.eSq(w,d))},
$S:28}
C.eSq.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ea(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eSr.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:255}
C.eSj.prototype={
$0(){var w=this.a
return w.m(new C.eSh(w,this.b))},
$S:0}
C.eSh.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.L(0,v)},
$S:0}
C.eSk.prototype={
$0(){var w=this.a
return w.m(new C.eSg(w,this.b))},
$S:0}
C.eSg.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eSl.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eSf(v,w.b,w.c,w.d))},
$S:0}
C.eSf.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eSm.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grB(v))},
$S:0}
C.eSn.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eSo.prototype={
$0(){var w=this.a
return w.m(new C.eSe(w))},
$S:0}
C.eSe.prototype={
$0(){var w=this.a.db
return A.d.h2(w,0,w.length,0)},
$S:0}
C.eS1.prototype={
$1(d){return d.a===this.a.dy},
$S:209}
C.eS2.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.awl[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awK(new B.n7(new B.bp(n,n,n,n),A.aq,new B.kP(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a8,A.x,m,j,j),A.n),A.be,new C.aZs(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eS0(r,v),2,i))}return B.bY(A.bz,h,A.bq,7,7)},
$S:167}
C.eS0.prototype={
$0(){var w=this.b
return w.m(new C.eRW(this.a,w))},
$S:0}
C.eRW.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eS3.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:223}
C.eS6.prototype={
$0(){var w=this.a
return w.m(new C.eS_(w))},
$S:0}
C.eS_.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eS7.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eS8.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eS9.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eSa.prototype={
$0(){var w=this.a
return w.m(new C.eRZ(w))},
$S:0}
C.eRZ.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eSb.prototype={
$0(){var w=this.a
return w.m(new C.eRY(w))},
$S:0}
C.eRY.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eSc.prototype={
$0(){var w=this.b
return w.m(new C.eRX(this.a,w))},
$S:0}
C.eRX.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eSd.prototype={
$1(d){return this.a.fx=d},
$S:223}
C.eS4.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eS5.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eRG.prototype={
$0(){var w=this.a
return w.m(new C.eRF(w))},
$S:0}
C.eRF.prototype={
$0(){var w=this.a
w.p4=null
w.b2m()},
$S:0}
C.eRH.prototype={
$0(){var w=this.a
return w.m(new C.eRE(w,this.b))},
$S:0}
C.eRE.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eRI.prototype={
$0(){var w=this.a
return w.m(w.gcnK())},
$S:0}
C.eRy.prototype={
$0(){var w=this.a
return w.m(new C.eRx(w))},
$S:0}
C.eRx.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eRz.prototype={
$0(){var w=this.a
return w.m(new C.eRw(w))},
$S:0}
C.eRw.prototype={
$0(){var w=this.a
w.aF=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eRA.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d1B[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.awK(new B.n7(new B.bp(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dd(new B.yK(o,o,v.aWg(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Ah),B.fL(u,A.A,140,o,A.cj,A.bT,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eRv(v,s),3,n))}return B.bY(A.bz,m,A.bq,10,8)},
$S:167}
C.eRv.prototype={
$0(){var w=this.a
return w.m(new C.eRu(w,this.b))},
$S:0}
C.eRu.prototype={
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
C.eRc.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eRd.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eRe.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eRf.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eRg.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eRh.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eRi.prototype={
$1(d){return this.a.aW=d},
$S:6}
C.eRj.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eRk.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.eQy.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eQz.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eQA.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eQB.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eQC.prototype={
$0(){var w=this.a
return w.m(new C.eQx(w))},
$S:0}
C.eQx.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eQD.prototype={
$1(d){return this.a.b0=d},
$S:223}
C.eQE.prototype={
$1(d){return this.a.b1=d},
$S:6}
C.eR6.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eR7.prototype={
$1(d){return this.a.bg=d},
$S:6}
C.eR8.prototype={
$1(d){return this.a.av=d},
$S:6}
C.eR9.prototype={
$1(d){return this.a.bc=d},
$S:223}
C.eRa.prototype={
$1(d){return this.a.bJ=d},
$S:6}
C.eQI.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.eQJ.prototype={
$1(d){return this.a.bi=d},
$S:6}
C.eQK.prototype={
$1(d){return this.a.bQ=d},
$S:6}
C.eQL.prototype={
$1(d){return this.a.c4=d},
$S:6}
C.eQM.prototype={
$0(){var w=this.a
return w.m(new C.eQH(w))},
$S:0}
C.eQH.prototype={
$0(){var w=this.a
return w.c4=A.k.E(w.c4+90+180,360)-180},
$S:0}
C.eQN.prototype={
$0(){var w=this.a
return w.m(new C.eQG(w))},
$S:0}
C.eQG.prototype={
$0(){var w=this.a
return w.cL=!w.cL},
$S:0}
C.eQO.prototype={
$0(){var w=this.a
return w.m(new C.eQF(w))},
$S:0}
C.eQF.prototype={
$0(){var w=this.a
return w.cM=!w.cM},
$S:0}
C.eRB.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i9h(v,w.p4)},
$S:0}
C.eRt.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.blt:B.fL(v,A.A,w,w,A.cj,A.bT,!1,w,!1,w,w)
return C.fA6(d.length===0?"rounded":d,u,e)},
$S:137}
C.eRp.prototype={
$0(){var w=this.a
return w.m(new C.eRo(w))},
$S:0}
C.eRo.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eRq.prototype={
$0(){var w=this.b
return w.m(new C.eRn(this.a,w))},
$S:0}
C.eRn.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eRr.prototype={
$0(){var w=this.b
return w.m(new C.eRm(this.a,w))},
$S:0}
C.eRm.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eRs.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eRM.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.n(20),p=B.a([new B.ac(-4,A.G,A.b6.j(0.35),A.J,30)],x.V),o=B.n(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ev(n.cha(),n.r))
l.push(new C.Iw(n.cug(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ev(new B.an(A.W,t,A.b0,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.n(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aD(A.c5,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.be),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eRL(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a7),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:211}
C.eRL.prototype={
$1(d){var w=this.a
return w.m(new C.eRK(w,d,this.b,this.c))},
$S:18}
C.eRK.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eRV.prototype={
$0(){var w=this.a
return w.m(new C.eRU(w,this.b))},
$S:0}
C.eRU.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eRb.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).lw()},
$S:0}
C.eSs.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aYY(),B.E(B.av(w.b0U(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.v(B.a([B.E(w.aPn(),1),w.aLC()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aYY(),new B.D(A.hM,B.av(s.b0U(u),t,t,t),t),B.E(s.aPn(),1),s.aLC()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:692}
C.fxn.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ep(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzT(),null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bn,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,A.N)},
$S:z+98}
C.fxm.prototype={
$3(d,e,f){var w=this,v=C.bzT(),u=w.b?A.H:A.cv,t=w.c?A.cF:A.bn
return C.ep(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bf,4280172719,2,d,0,w.f,w.e,D.cm,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cdu.prototype={
$1(d){return B.t(d)},
$S:17}
C.fF3.prototype={
$0(){return this.a},
$S:z+15}
C.flx.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fly.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fF5.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fF8.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fF9.prototype={
$0(){return A.d.gJ(D.vY)},
$S:z+33}
C.fF1.prototype={
$1(d){return d.a},
$S:z+16}
C.fF4.prototype={
$1(d){return d.a},
$S:z+16}
C.fD1.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fD2.prototype={
$1(d){return d.length!==0},
$S:3}
C.fD3.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fxr.prototype={
$0(){return C.cD()},
$S:23}
C.fxu.prototype={
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
C.fxt.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cm,D.f0,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fxs.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cm,t=v?j:0
return C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.bf,4280172719,2,"",t,0,"",u,D.lu,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qc,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fxq.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fzS.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hig.cg(0,A.a.i(s.w).toLowerCase(),new C.fzQ(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fzR(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bnR(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fzQ.prototype={
$0(){return F.aNb(this.a.w)},
$S:196}
C.fzR.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byN("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hD(2,w,A.c7,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:196}
C.feb.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fec.prototype={
$1(d){return d.a},
$S:z+18}
C.fed.prototype={
$1(d){return d.b},
$S:z+19}
C.fO5.prototype={
$1(d){return D.h_3},
$S:z+41}
C.eYF.prototype={
$0(){return this.a.x=C.hMG(this.b,this.c.b)},
$S:0}
C.eYG.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eYD.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:417}
C.eYE.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:417}
C.eYC.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bR(A.az,null,new C.eYx(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kA,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b4(s,7)
if(r.length===0){n.m(new C.eYy(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.ho3(o,m.cHO(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eYz(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eYx.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eYB(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b4t,A.f,p,p,D.b_v,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BW:D.C0,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fA6(v,i.b2Z(h),u),p)))}t=B.m_(1,m,4,10,10,p,A.dR,!0)
if(!l)return B.bl(!0,new B.D(A9.xF,t,p),!0,!1,A.af,!0,!0)
s=new C.eYA(i,d)
m=B.aI(d,A.bV,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.GH[e]
l.push(s.$2(r.a,r.b))}return B.bl(!0,new B.cT(new B.aY(0,1/0,0,m.a.b*0.85),B.c9(B.v(B.a([D.fmz,A.S,t,A.dX,D.eLD,A.at,D.fxb,A.S,B.m_(1.15,l,3,10,10,p,A.dR,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.xF,p,p,A.ag),p),!0,!1,A.af,!0,!0)},
$S:26}
C.eYB.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.n(16),t=v?A.b6.j(0.22):A.c.j(0.04),s=v?A.bt:A.dr
return B.aD(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hz,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eYw(this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:1682}
C.eYw.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eYA.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.n(12),r=t?A.bL:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.n(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.ans,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.Ne(u.Fx(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aD(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eYv(this.b,d),v,v,v,v,v,v,!1,A.a7)},
$S:137}
C.eYv.prototype={
$0(){B.a6(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eYy.prototype={
$0(){var w=this.a
return w.w=w.w.Fx("")},
$S:0}
C.eYz.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eYl.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eYm.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eYo.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eYp.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eYq.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eYr.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eYn(w,d))},
$S:2}
C.eYn.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eYs.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eYT.prototype={
$0(){return this.a.f.fL()},
$S:0}
C.eYU.prototype={
$0(){var w=this.a
return w.m(new C.eYS(w))},
$S:0}
C.eYS.prototype={
$0(){return this.a.e=null},
$S:0}
C.eYV.prototype={
$0(){var w=this.a
return w.m(new C.eYR(w))},
$S:0}
C.eYR.prototype={
$0(){return this.a.x=null},
$S:0}
C.eYX.prototype={
$1(d){var w=this.a
return w.m(new C.eYQ(w,d))},
$S:32}
C.eYQ.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eYY.prototype={
$1(d){var w=this.a
return w.m(new C.eYP(w,d))},
$S:32}
C.eYP.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eYZ.prototype={
$0(){var w=this.a
return w.m(new C.eYO(w))},
$S:0}
C.eYO.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eZ_.prototype={
$1(d){var w=this.a
return w.m(new C.eYN(w,d))},
$S:32}
C.eYN.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eZ0.prototype={
$1(d){var w=this.a
return w.m(new C.eYM(w,d))},
$S:32}
C.eYM.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eZ1.prototype={
$0(){var w=this.a
return w.m(new C.eYL(w))},
$S:0}
C.eYL.prototype={
$0(){var w=this.a
return w.w=w.w.Fx("")},
$S:0}
C.eZ2.prototype={
$0(){var w=this.a
return w.m(new C.eYK(w,this.b))},
$S:0}
C.eYK.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eZ3.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bNp(D.a2B[v]),null))
return B.bY(A.bz,t,A.bq,8,8)},
$S:167}
C.eYW.prototype={
$1(d){var w=this.a
return w.m(new C.eYJ(w,d))},
$S:8}
C.eYJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eYt.prototype={
$0(){var w=this.a
return w.m(new C.eYu(w,this.b,this.c))},
$S:0}
C.eYu.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.L(0,w)},
$S:0}
C.eYI.prototype={
$0(){var w=this.a
return w.m(new C.eYH(w,this.b))},
$S:0}
C.eYH.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fO4.prototype={
$1(d){return new C.a02(this.a,this.b,null)},
$S:z+42}
C.eYe.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eYf.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eYg.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aFZ?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eYh.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eYi.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eYd(w,d))},
$S:2}
C.eYd.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eYj.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eYk.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.hb(A.bw,w.length),A.aN))},
$S:0}
C.fkN.prototype={
$1(d){return d.a===this.a},
$S:209}
C.edQ.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawL(),n=o.x
n===$&&B.c()
w=B.n(16)
v=p.a.c
u=v?D.cOr:D.d3M
t=D.xk.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xk.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.n(15)
n=B.bZ(0,B.b3(q,q,q,new C.bh3(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bOs(B.eH(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a8,A.x,B.a([A.K,D.bbo.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.X(p.a.c?A.ef:A.lT,D.xk,q,q,q,20),A.at,B.f6(A.A,B.nN(A.jt,D.fga,new C.edP()),A.f,A.eh)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.fcP,A.f,q,q,new B.o(D.xk,q,q,B.n(6),q,q,A.n),q,q,q,q,M.aiq,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:91}
C.edP.prototype={
$1(d){return D.bUO.aw(0,d)},
$S:66}
C.fFa.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fFb.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:209}
C.fFc.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fFd.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.K)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fF6.prototype={
$1(d){return d.a},
$S:z+18}
C.fF7.prototype={
$1(d){return d.b},
$S:z+19}
C.fNi.prototype={
$1(d){return new C.Zo(this.a,this.b,null)},
$S:z+44}
C.dif.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dig.prototype={
$1(d){return d.a===this.a.gahZ()},
$S:z+10}
C.dih.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dik.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.dil.prototype={
$0(){var w=this.a
return w.m(new C.dij(w,this.b))},
$S:0}
C.dij.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dim.prototype={
$1(d){var w=this.a
return w.m(new C.dii(w,d))},
$S:8}
C.dii.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.edO.prototype={
$1$2(d,e,f){var w=B.bn(d,!0,f)
A.d.fn(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dH(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.faF.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f0,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cm,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.faH.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ep(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bn,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bf,4280172719,2,d,l,0,"",D.mG,D.cQ,g,e,f)},
$S:z+46}
C.faG.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.ws(0,"twinkle")
w=t===D.bf?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mG,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.faE.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fyy.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fyz.prototype={
$0(){return A.d.gJ(D.GQ)},
$S:z+49}
C.fyA.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fcF.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fED.prototype={
$1(d){var w=2450411,v=4281908728
C.dw(d,C.dx(4280171146,1,0,D.bf,w,0,0.52,0,0))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.04,0.48,0))
C.dw(d,C.dx(4294047225,0.38,0,D.bf,w,0,0.48,0.52,0.62))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEE.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dw(d,C.dx(4280172719,0.8,0,D.bf,w,0,0.36,0.58,0.1))
C.dw(d,C.dx(v,0.64,0,D.bf,w,0,0.28,0.64,0.18))
C.dw(d,C.dx(4282090230,0.44,0,D.bf,w,0,0.2,0.7,0.28))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.22,0.08,0.12))
C.dw(d,C.dx(u,0.004,0,D.fr,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fEF.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(4279080072,0.11,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4279310375,0.11,0,D.bf,w,0,1,0,0.89))
C.dw(d,C.dx(856528008,0.72,0,D.jM,w,0,0.28,0.72,0.14))
C.dw(d,C.dx(1426953352,0.2,0,D.jM,w,0,0.2,0.78,0.22))
C.dw(d,C.dx(v,0.004,0,D.fr,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fEQ.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4279203438,0.55,0,D.jM,w,0,0.5,0.55,-0.05))
C.dw(d,C.dx(4280171146,0.5,0,D.jM,w,0,0.45,0.62,0.35))
C.dw(d,C.dx(4280640491,0.4,0.3,D.jL,w,0,0.35,0.68,0.55))
C.dw(d,C.dx(571438702,0.12,0,D.bf,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fEV.prototype={
$1(d){var w=4280472558
C.dw(d,C.dx(4279310375,0.75,-0.4,D.jL,2450411,0,0.75,-0.15,0.35))
C.dw(d,C.dx(w,0.55,0,D.bf,2450411,0,0.06,0.42,0.38))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.35,0.08,0.08))
C.dw(d,C.dx(2282478,0.12,0,D.bf,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEW.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3423541034,0.48,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.12,-0.08,D.jM,w,0,1.1,-0.05,0.38))
C.dw(d,C.dx(858088427,0.35,0,D.bf,w,0,0.42,0.55,0.05))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fEX.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cNu[w]
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f0,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.bf,v,4294967295,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fEY.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mj,A.dv,w/3).l()
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f0,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.CC,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fEZ.prototype={
$1(d){var w=4294967295
C.dw(d,C.dx(4280640491,1,0,D.bf,2450411,0,0.42,0,0))
C.dw(d,C.dx(4280110808,1.1,1.57,D.jL,2450411,0,0.18,0.35,-0.05))
C.dw(d,C.dx(w,0.006,0,D.fr,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fF_.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0))
C.dw(d,C.dx(u,0.012,0,D.bf,v,0,1,0,0.1))
C.dw(d,C.dx(u,0.006,0,D.fr,u,3,0.42,0.06,0.14))
C.dw(d,C.dx(403446057,0.68,0,D.jM,v,0,0.22,0.72,0.18))
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fF0.prototype={
$1(d){var w=4278630100
C.dw(d,C.dx(4279310375,1.2,0.15,D.jM,2450411,0,0.55,-0.2,-0.1))
C.dw(d,C.dx(w,1.1,0.15,D.bf,2450411,0,0.08,0.15,-0.05))
C.dw(d,C.dx(1120295,0.18,0,D.bf,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEG.prototype={
$1(d){var w=4292617766
C.dw(d,C.dx(4282714634,0.65,-0.2,D.jL,2450411,0,0.65,-0.1,0.45))
C.dw(d,C.dx(w,0.5,-0.15,D.jL,2450411,0,0.5,0.05,0.55))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fEH.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4278413729,0.35,3.14,D.jL,w,0,0.45,-0.05,0.7))
C.dw(d,C.dx(4278355143,0.3,3.14,D.jL,w,0,0.4,0.25,0.75))
C.dw(d,C.dx(4279150057,0.32,3.14,D.jL,w,0,0.5,0.55,0.72))
C.dw(d,C.dx(863884284,0.22,0,D.eL,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fEI.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dw(d,C.dx(w,0.14,0,D.bf,v,0,0.14,0.02,0.02))
C.dw(d,C.dx(2282478,0.14,0,D.bf,u,3,0.14,0.84,0.02))
C.dw(d,C.dx(w,0.28,0,D.jM,v,0,0.35,-0.08,0.78))
C.dw(d,C.dx(u,0.22,0.5,D.jL,v,0,0.3,0.72,0.78))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fEJ.prototype={
$1(d){var w=4293571336,v=1156231944
C.dw(d,C.dx(1841431,0.92,0,D.bf,w,3,0.92,0.04,0.04))
C.dw(d,C.dx(v,0.15,0,D.jL,2450411,0,0.15,0.02,0.02))
C.dw(d,C.dx(v,0.15,3.14,D.jL,2450411,0,0.15,0.83,0.83))
C.dw(d,C.dx(w,0.004,0,D.fr,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fEK.prototype={
$1(d){var w=4279080072,v=2450411
C.dw(d,C.dx(w,0.14,0,D.l3,v,0,0.14,0.68,0.18))
C.dw(d,C.dx(4279548070,0.14,0,D.l3,v,0,0.14,0.78,0.28))
C.dw(d,C.dx(4281193663,0.14,0,D.l3,v,0,0.14,0.68,0.38))
C.dw(d,C.dx(4284410580,0.14,0,D.l3,v,0,0.14,0.78,0.48))
C.dw(d,C.dx(4279203438,0.14,0,D.l3,v,0,0.14,0.68,0.58))
C.dw(d,C.dx(w,0.006,0,D.fr,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fEL.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3708753706,0.42,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.06,-0.05,D.jM,w,0,1,0,0.38))
C.dw(d,C.dx(859356664,0.25,0,D.eL,w,0,0.25,0.7,0.08))
C.dw(d,C.dx(v,0.006,0,D.fr,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fEM.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mj,A.dv,w/3).l()
u=Date.now()
t=$.j1
$.j1=t+1
v=new C.eK("design_"+(""+1000*u+"_"+t),D.f0,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.CC,v,2450411,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(4280172719,0.08,0,D.bf,2450411,0,1,0,0))
C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fEN.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.j1
$.j1=u+1
u=new C.eK("design_"+(""+1000*v+"_"+u),D.f0,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bn,A.aD,s,A.bg,null,D.fr,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kd
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(s,0.75,0,D.bf,2450411,0,0.22,0.72,0.1))
C.dw(d,C.dx(872415231,0.16,0,D.bf,2450411,0,0.16,0.75,0.15))
C.dw(d,C.dx(s,0.006,0,D.fr,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fEO.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dw(d,C.dx(4674921,0.9,0,D.bf,4287931320,2,0.9,0.05,0.05))
C.dw(d,C.dx(w,0.08,0,D.bf,v,0,0.08,0.03,0.03))
C.dw(d,C.dx(u,0.08,0,D.bf,v,0,0.08,0.89,0.03))
C.dw(d,C.dx(u,0.08,0,D.bf,v,0,0.08,0.03,0.89))
C.dw(d,C.dx(w,0.08,0,D.bf,v,0,0.08,0.89,0.89))
C.dw(d,C.dx(w,0.004,0,D.fr,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fEP.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.j1
$.j1=t+1
t=new C.eK("design_"+(""+1000*u+"_"+t),D.f0,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bn,A.aD,r,A.bg,null,D.bf,4294967295,4280640491,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
u=$.Kd
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.di,A.co,w/2).l()
t=Date.now()
s=$.j1
$.j1=s+1
u=new C.eK("design_"+(""+1000*t+"_"+s),D.f0,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bn,A.aD,r,A.bg,null,D.bf,u,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kd
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(4280171146,1,0,D.bf,q,0,0.48,0,0))
C.dw(d,C.dx(4280172719,1.1,1.57,D.jL,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fER.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(870995980,0.55,0.45,D.jM,w,0,0.55,-0.12,-0.08))
C.dw(d,C.dx(856996006,0.45,0.45,D.jM,w,0,0.45,0.62,-0.05))
C.dw(d,C.dx(16777215,0.38,0.45,D.jM,4293548044,5,0.38,0.52,0.12))
C.dw(d,C.dx(585783308,0.3,0.45,D.jM,w,0,0.3,0.56,0.16))
C.dw(d,C.dx(4279548070,0.06,0,D.bf,w,0,0.16,0.38,0.04))
C.dw(d,C.dx(1156208652,0.28,0,D.eL,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fES.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dw(d,C.dx(w,1,0,D.bf,v,0,0.07,0,0))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.14))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.28))
C.dw(d,C.dx(u,0.1,0,D.bf,t,1,0.46,0.48,0.42))
C.dw(d,C.dx(s,0.08,0,D.eL,v,0,0.08,0.5,0.16))
C.dw(d,C.dx(w,0.08,0,D.eL,v,0,0.08,0.5,0.3))
C.dw(d,C.dx(4279548070,0.08,0,D.eL,v,0,0.08,0.5,0.44))
C.dw(d,C.dx(16777215,0.32,0.45,D.jM,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fET.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dw(d,C.dx(4294047225,0.08,0,D.bf,t,2,0.1,0.02,0.06))
C.dw(d,C.dx(s,0.42,0,D.bf,2450411,0,0.36,0.58,0.18))
C.dw(d,C.dx(872415231,0.12,0,D.bf,2450411,0,0.28,0.62,0.24))
C.dw(d,C.dx(16777215,0.28,0,D.eL,s,4,0.32,0,0.72))
C.dw(d,C.dx(r,0.006,0,D.fr,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.j1
$.j1=u+1
u=new C.eK("design_"+(""+1000*v+"_"+u),D.f0,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,null,D.eL,16777215,t,2,0,!1,"",0,D.cm,0,"","","","","",!1,0)
v=$.Kd
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fEU.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(3423541034,0.55,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4009754623,0.56,0.45,D.jM,w,0,0.56,0.22,0.18))
C.dw(d,C.dx(3439329279,0.44,0.45,D.jM,w,0,0.44,0.28,0.24))
C.dw(d,C.dx(v,0.07,0,D.bf,w,0,0.22,0.34,0.62))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fwo.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fwp.prototype={
$0(){return A.d.gJ($.bDv())},
$S:z+52}
C.fkl.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fkk.prototype={
$1(d){return C.hTY(d,this.a,this.b)},
$S:z+53}
C.fFj.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vI(1.0375,1.01875,1)
return new B.fO(v,u,new C.aS7(B.hJH(A.uU,C.hU0(w.c,w.d,v,u),t)))},
$S:414}
C.dTE.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dTD.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.bT(A.JO,1.2,A.x,w,0,u.d,w,w),A.n),A.be),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jz(new B.an(A.W,w,A.b0,A.r,B.a([t,new B.ev(B.b3(w,w,w,new C.bdX(u.a,r,q,r),A.au),w),B.av(new B.ki(r,new C.dTC(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:411}
C.dTC.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.az(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gJ(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hU(B.fL(i,A.A,r,r,A.cj,A.bT,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fT(A.A,0,6.283185307179586,A.x,t,r,new B.mm(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqx(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a8,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaKa(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:100}
C.eXs.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).aw(0,d)},
$S:66}
C.c81.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.n(14),t=g?A.bL:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hI.j(0.4),A.J,14)],x.V):v
w=B.df(v,B.bw(B.n(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eG,v,72,v,v,v,v,v)
return B.aD(v,new B.a7(112,v,B.v(B.a([w,A.h0,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a7)},
$S:1685}
C.c82.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fx(""))},
$S:0}
C.c83.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.Ne(v.Fx(u),!0,!1,null),!0,null),d.b,new C.c84(w,this.c,d),v.a===u)},
$S:z+54}
C.c84.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.ho3(u.b,t.c.Fx(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fLI.prototype={
$1(d){return new C.YX(this.a,null)},
$S:z+55}
C.d7s.prototype={
$0(){var w=this.a
w.d=w.gvz().baU("data:"+this.b+";base64,"+A.cS.gcw().aJ(this.c));++w.r},
$S:0}
C.d7x.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d7y.prototype={
$0(){var w=this.a
return w.m(new C.d7w(w))},
$S:0}
C.d7w.prototype={
$0(){return this.a.r++},
$S:0}
C.d7z.prototype={
$1(d){var w=this.a
return w.m(new C.d7v(w,d))},
$S:2}
C.d7v.prototype={
$0(){var w=this.a
return w.d=w.gvz().aD9(this.b)},
$S:0}
C.d7A.prototype={
$0(){var w=this.a
return w.m(new C.d7u(w))},
$S:0}
C.d7u.prototype={
$0(){var w=this.a
return w.d=w.gvz().baU("")},
$S:0}
C.d7B.prototype={
$1(d){var w=this.a
return w.m(new C.d7t(w,d))},
$S:2}
C.d7t.prototype={
$0(){var w=this.a
return w.d=w.gvz().bb0(this.b)},
$S:0}
C.d7C.prototype={
$0(){var w=this.a
w=w.gvz().bb0(w.gawM().a.a)
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.fLH.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fLG(w),null)},
$S:21}
C.fLG.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bl(!0,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bV,x.w).w.a.b*0.85),B.c9(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.fuj,A.at,D.fuz,A.aB,new C.aZp(v.a,new C.fLF(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ag),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b03,w,w,w,w,A.Md,w,w,w)},
$S:173}
C.fLF.prototype={
$1(d){this.b.$1(new C.fLE(this.a,d))
B.a6(this.c,!1).O(d)},
$S:z+56}
C.fLE.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fO3.prototype={
$1(d){return D.fVr},
$S:z+57}
C.dee.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.def.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).O(this.b)
return null},
$S:0}
C.deg.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).O(v)}},
$S:0}
C.fC_.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).aw(0,d)},
$S:66}
C.d79.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ao,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.F(new B.b5(t+r*1.2,o))
u.F(new B.cV(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.F(new B.cV(w,q+p,w,q+p*1.2))
u.F(new B.CV(B.bU(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aP(u,v.d)
s.aP(u,v.e)
p=B.N()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.af(new B.u(w,o),2.2,p)},
$S:554}
C.fC3.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fup.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fuq.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xI,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fd5,A.O,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aP,B.dn(D.Gn,B.d('Endelea na "'+A.d.gJ(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fun(d),B.bm(A.c_,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.eB(A.o4,D.TV,new C.fuo(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wM,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fun.prototype={
$0(){B.a6(this.a,!1).O("continue")
return null},
$S:0}
C.fuo.prototype={
$0(){B.a6(this.a,!1).O("new")
return null},
$S:0}
C.cds.prototype={
$1(d){return d.hF()},
$S:z+59}
C.cdt.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cdr.prototype={
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
u=C.hPP(b2.h(0,"type"))
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
n=A.ayb[A.o.D(b4,0,8)]
m=D.cQk[A.o.D(w,0,1)]
l=C.hTq(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.auR[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hWf(b2.h(0,"shape"))
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
a3=C.hjm(b2.h(0,"textTransition"))
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
C.cdh.prototype={
$1(d){return d.hF()},
$S:z+62}
C.cdi.prototype={
$1(d){return d.ag()},
$S:z+63}
C.cde.prototype={
$1(d){return B.t(d)},
$S:17}
C.cdf.prototype={
$1(d){return B.t(d)},
$S:17}
C.cdg.prototype={
$1(d){return C.ha1(B.a2(d,x.N,x.z))},
$S:z+64}
C.cdJ.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cdK.prototype={
$0(){return A.d.gJ(D.a2f)},
$S:z+66}
C.cdE.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hF())},
$S:z+7}
C.cdD.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdz.prototype={
$1(d){return new B.L(d,new C.cdA(),B.U(d).k("L<1,S>")).fd(0,new C.cdB())},
$S:z+69}
C.cdA.prototype={
$1(d){return d.f},
$S:z+70}
C.cdB.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:553}
C.cdC.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hFw(d)},
$S:z+71}
C.cdF.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cdG.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdH.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fCC.prototype={
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
C.fCy.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fCz.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fCA.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fCB.prototype={
$2(d,e){return d.b===D.f0&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cdn.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i3Y(b2,b3),b5=B.a3(b4).k("bc<2>")
b5=B.cF(new B.bc(b4,b5),new C.cdm(),b5.k("J.E"),x.N)
w=B.db(b5,B.a3(b5).k("J.E"))
b1=b1.e
v=A.pJ.az(0,A.k.D(b1,0,1))
u=new C.cdo()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cdp(a9,b7.d)
r=new C.cdq(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.K)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jy.az(0,A.k.D(n,0,1))
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
if(a2===D.f0){a4=i.hF()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lu&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b0,A.r,B.a([new B.kF(A.k.D(o,0,1),r.$1(l),a8),new B.kF(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iH(B.wd(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cm)a7=D.mG
p.push(s.$5(i.c,i.d,i.e,i.f,C.hlC(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a8,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.be)},
$S:394}
C.cdm.prototype={
$1(d){return d.a},
$S:z+22}
C.cdo.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cdp.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cdq.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7o(v,C.b0x(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dFT.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.ed(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.cdw.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cdx.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fFq.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:313}
C.fEx.prototype={
$1(d){return new C.ad1(this.a,this.b,null)},
$S:z+78}
C.eqf.prototype={
$0(){return this.a.PC(this.b,C.i7j(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eqg.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.PC(this.b,C.i7l(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eqh.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.PC(this.b,C.i7k(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eqi.prototype={
$0(){Y.hlm()
B.a6(this.a,!1).O(null)},
$S:0}
C.cdl.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cdk.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nA),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lP(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bT:A.du
return B.fL(t,A.A,o,new C.cdj(),A.cj,w,!0,u,!1,new B.cy("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cdj.prototype={
$3(d,e,f){return D.abq},
$S:217}
C.fCx.prototype={
$2(d,e){var w,v,u,t=null,s=B.n(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.dd(r,0,B.dJ(6,"count",x.S),B.U(r).c)
u=r.$ti.k("L<ak.E,cL>")
r=B.C(new B.L(r,new C.fCw(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c0(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.be),A.aq)},
$S:1692}
C.fCw.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0x(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fmT.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fmR(d))
w=B.aI(d,A.bV,x.w).w
v=B.n(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fM,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.B(B.a([B.E(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.kc,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zE,q,q,!0,q,q,new C.fmS(p,d),q,B.fw(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.Fa,q,new B.b7(B.n(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.az,q,u,v,t,q,A.n),q,q,q,A.fJ,A.Fj,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ah),q,q,q),q)},
$C:"$3",
$R:3,
$S:262}
C.fmR.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).py())B.a6(w,!0).eN()},
$S:0}
C.fmS.prototype={
$0(){var w=this.a.a
if(w!=null)w.a6(0)
B.a6(this.b,!0).eN()},
$S:0}
C.f4Y.prototype={
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
return B.ft(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.k_(r*3.14159)
return B.ft(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fB(r*1.2)
s.k_(r*0.5)
return B.ft(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fB(-r*1.4)
return B.ft(A.a8,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.ed(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jz(u.b,A.r,new C.aIT(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jz(u.b,A.r,new C.aIT(1-r,t))],x.p),t)
case 16:v=D.b3t.az(0,r)
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.ed(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(B.el(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dp()
s.mL(r*6.28)
s.jI(r,r,r,1)
return B.ft(A.A,u.b,t,s,!0)
case 20:return B.eH(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:58}
C.dRR.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRQ.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRP.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hlC(v,w,e)},
$S:58}
C.cdd.prototype={
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
s=B.U(v).k("L<1,cL>")
q=B.C(new B.L(v,new C.cdc(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c0(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.be)},
$S:394}
C.cdc.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cm?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7o(m,new C.UF(d,C.b0x(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d4o.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d4n(w))},
$S:11}
C.d4n.prototype={
$0(){return this.a.d++},
$S:0}
C.edw.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aN5.t(0,A.d.gJ(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i3H(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e9(0,w*7,0,1)
s.fB(Math.sin(t)*0.32)
s.k_(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jI(w,w,w,1)
return B.ft(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.ed(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dc(B.ed(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:58}
C.eV5.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fB
return w},
$S:1693}
C.fA7.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqq(u,t,r),A.au))
w.push(B.nt(s.d,A.aq,new C.bet(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpq(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b0,A.r,w,r),r),r,r,r)},
$S:257}
C.fpM.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:344}
C.ewt.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CG(t.a.a.c),$async$$0)
case 3:s=e
r=J.a5(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.ewr(),new C.ews(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.ewr.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:182}
C.ews.prototype={
$0(){return J.fp(this.a)},
$S:1696}
C.esR.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.esS.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.esT.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eur.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euf.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eug.prototype={
$1(d){return d.hF()},
$S:z+81}
C.ese.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.evz.prototype={
$0(){this.a.tv()},
$S:0}
C.ewp.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.JW()},
$S:0}
C.eup.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.of()
w.JW()},
$S:0}
C.ewc.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ewd.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ewe.prototype={
$1(d){return d.a},
$S:z+22}
C.ewf.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aN),$.aw())},
$S:254}
C.ewg.prototype={
$0(){return B.jQ(!0,null,!0,!0,null,null,!1)},
$S:537}
C.erD.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.ewq.prototype={
$0(){},
$S:0}
C.ety.prototype={
$0(){var w=this.a
w.e=this.b.hF()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()
w.JW()},
$S:0}
C.erB.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xo()},
$S:0}
C.erC.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xo()},
$S:0}
C.etV.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.etW.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()
w.JW()
w.z="Home"},
$S:0}
C.etX.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.etx.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TU,w,w,!0,w,w,new C.etw(d),w,w)],x.p),w,w,w,D.fw4,w,w,w,w,D.fdx,w)},
$S:19}
C.etw.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.etu.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TU,w,w,!0,w,w,new C.ett(d),w,w)],x.p),w,w,w,D.fhu,w,w,w,w,D.fff,w)},
$S:19}
C.ett.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.etv.prototype={
$0(){},
$S:0}
C.esN.prototype={
$1(d){return this.a.b_f(C.bBw(d))},
$S:z+7}
C.esO.prototype={
$1(d){return this.a.aey(C.bBw(d))},
$S:z+7}
C.etE.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b2,w,w,B.n(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fw8,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Pl(A.vD,D.awd,"HATI YA KUHOWA","Hati ya mahari",new C.etz(d),w),A.S,new C.Pl(A.hb,D.d1C,"HATI YA KUHOWESHA","Hati ya kupokea",new C.etA(d),w),A.S,new C.Pl(A.i1,D.cOx,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.etB(d),w),A.S,new C.Pl(A.hO,D.cMP,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.etC(d),w)],v)
if(this.a.gab2())A.d.v(u,B.a([A.S,new C.Pl(A.iZ,D.cxU,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.etD(d),w)],v))
return B.bl(!0,B.c9(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xI,w,w,A.ag),!0,!1,A.af,!0,!0)},
$S:26}
C.etz.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.etA.prototype={
$0(){B.a6(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.etB.prototype={
$0(){B.a6(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.etC.prototype={
$0(){B.a6(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.etD.prototype={
$0(){B.a6(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.etF.prototype={
$0(){var w=this.a
w.e=this.b.hF()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()},
$S:0}
C.erF.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.erG.prototype={
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
C.etQ.prototype={
$1(d){return d.b===D.lu},
$S:z+4}
C.etR.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gJ(v).go
w.b=A.d.gJ(v).id
return new B.e0(new C.etO(w,this.a,v),null)},
$S:21}
C.etO.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.etP(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aS:A.ak,i=l?A.bo:A.bK,h=l?A.M:A.c,g=B.n(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bD,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cD,j,q,q,q,q),q,q,q,new C.etK(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.C0[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgY(t,u.b,p.a===t,i,k,new C.etL(v,m),q))}a1=B.bY(A.bz,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BW[w]
s.a=null
t=s.a=r.a
u.push(new C.bgX(t,r.b,p.b===t,k,j,new C.etM(s,m),q))}return B.bl(!0,B.p(q,B.c9(B.v(B.a([d,A.aP,a0,A.S,a1,A.by,v,A.S,B.bY(A.bz,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.eB(D.bQX,D.fyy,new C.etN(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.n(16),A.Y),D.aYz,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ag),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tF,D.bsX,q,q,q),!0,!1,A.af,!0,!0)},
$S:86}
C.etP.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.etI(w.a,d,e))
w.b.d3(new C.etJ(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.etI.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.etJ.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.etK.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.etL.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.etM.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.etN.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gs(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d3(new C.etH(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etH.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.etT.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etU.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bp(v,new C.etS(t.d))
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
C.etS.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eua.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eub.prototype={
$1(d){return d.w},
$S:z+82}
C.euc.prototype={
$2(d,e){return d>e?d:e},
$S:88}
C.eud.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aS:A.ak,r=u?A.bo:A.aQ,q=u?A.M:A.c,p=B.n(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bV,x.w).w,m=w.a,l=x.p,k=w.b
return B.bl(!0,B.p(v,B.v(B.a([B.B(B.a([B.p(v,D.bKF,A.f,v,v,D.aZW,v,38,v,v,v,v,v,38),A.bd,B.E(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cD,s,v,v,v,v),v,v,v,new C.eu7(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.cn,B.hJ(v,new C.eu8(m,k,w.c,s,w.d,t,r),k.length,A.fz,v,A.ag,new C.eu9(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tF,A.YE,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.eu7.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eu9.prototype={
$2(d,e){return A.ac},
$S:36}
C.eu8.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bNM,q,q,q,new C.eu5(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.D(D.bva,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.n(16),A.Y),q,A.eQ,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.n(16),D.aYe),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eu6(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:530}
C.eu5.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i9q(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gey()?p.a:q.a.length
n=p.gey()?p.b:q.a.length
m=A.a.oK(q.a,o,n,s)
r.bO(0,new B.bb(m,B.hb(A.bw,o+s.length),A.aN))
l.aiD(k,m)
l.pj()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eu6.prototype={
$1(d){var w=this.a
w.aiD(this.b.a,d)
w.pj()},
$S:2}
C.eue.prototype={
$0(){},
$S:0}
C.etG.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.erW.prototype={
$0(){},
$S:0}
C.erX.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hmV(this.b,w,!0)
w=this.a
w.r=null
w.xo()},
$S:0}
C.erY.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.erZ.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bp(v,new C.erV(t.d))
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
C.erV.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.euk.prototype={
$1(d){return B.oN(new C.euj(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:128}
C.euj.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.D(E.ai5,B.v(B.a([D.ftI,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.ig(!0,w,e,A.y,D.eRv,new C.eui(this.a,this.b),20,A.tI,w,A.ag,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:383}
C.eui.prototype={
$2(d,e){var w=null,v=D.GQ[e],u=C.hFr(v),t=B.n(16),s=B.n(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.n(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fK,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eLz,A.f,w,w,new B.o(A.dN.j(0.85),w,w,B.n(8),w,w,A.n),w,w,w,w,A.ne,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b7,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a8,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.euh(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:77}
C.euh.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cdv(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eul.prototype={
$0(){var w=this.a
w.e=this.b.hF()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()},
$S:0}
C.eqA.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rr(4294967295,null,0,0,null,C.cD(),D.mF,"","","",D.dd),s=this.b
C.cdI(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.CB){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.erU.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gR(v)
if(u.b(t)){s=Date.now()
r=$.j1
$.j1=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.ha1(q));++v.f},
$S:0}
C.erS.prototype={
$0(){var w=this.a
A.d.cA(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eut.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cA(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.erO.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bp(v.d,new C.erN(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.erN.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eus.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.erE.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b5,A.aN),$.aw())},
$S:254}
C.esf.prototype={
$0(){return B.jQ(!0,null,!0,!0,null,null,!1)},
$S:537}
C.ewa.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.ewb.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asL(w).fL()
v=u.Wi(w)
v.stc(B.hb(A.bw,v.a.a.length))},
$S:9}
C.evA.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xh(v)
if(u!=null&&u.b===D.cQ)w.Wi(u).saV(0,u.r)}else w.w=null},
$S:0}
C.eqB.prototype={
$0(){var w=C.cD(),v=this.a,u=C.ep(A.bg,!1,v.gql().e.l(),A.aD,"",4280640491,24,A.bn,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.bf,4280172719,2,"Tap to edit text",0,0,"",D.cm,D.cQ,0.7,0.15,0.2)
A.d.L(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eqy.prototype={
$0(){var w=C.cD(),v=this.a,u=C.ep(A.bg,!1,4279310375,A.aD,"",v.gql().c.j(0.25).l(),24,A.bn,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gql().c.l(),2,"",0,0,"",D.cm,D.f0,0.25,0.3,0.3)
A.d.L(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eqo.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,0.6,0.2,0.18),v=this.a
A.d.L(v.gdr().z,w)
v.r=w.a},
$S:0}
C.eql.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bXM],x.p)
for(w=J.aV(this.a);w.C();){v=w.gR(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaje().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bIn,r,r,r,r,new C.eqk(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bl(!0,B.cw(q,r,r,r,r,A.ag,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.eqk.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.eqm.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.R.ao(u.ag(),null),s=C.ep(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bn,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.bf,4280172719,2,t,0,0,"",D.cm,D.a4O,w,0.5-w/2,0.07)
t=this.a
A.d.L(t.gdr().z,s)
t.r=s.a},
$S:0}
C.erQ.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.erR.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bp(v.gdr().z,new C.erP(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.T$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.erP.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.er2.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f0){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.er3(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.K)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.er3.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.er7.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.er8(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.K)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.er8.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.er5.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.er6(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.K)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.er6.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.f3(w,new C.er4()),u=this.a;v.C();)w.gR(0).Q=u},
$S:z+1}
C.er4.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.er1.prototype={
$0(){return C.cdI(this.b,this.c,this.a.gql())},
$S:0}
C.eu4.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.ewj.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewk.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.ewl.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ewm.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.be(s,new C.ewi(v))
if(w>=0)t.d[w]=v.b}if(v.a.gS0()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hF()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xo()
t.JW()}},
$S:0}
C.ewi.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.evQ.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ab6(),s=w.b,r=u.ab7(A.fb,A.kt,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.n(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.O,r,A.by,B.p(v,B.B(B.a([B.E(u.aUl(w.c,A.ak),1),new B.D(A.fq,B.p(v,D.bIt,A.f,v,v,new B.o(A.fb.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aUl(s,A.fb),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bA,v,v,v),A.by,u.aUo(A.fb,d,D.bEy,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bWP(A.aR,d,A.tV,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aUm(d,"Not now"))
return new C.JF(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.evP.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JF(B.v(B.a([v.ab6(),A.O,v.ab7(A.aR,D.bEd,"Pick which saved document should receive the details.","Choose "+this.b),A.aP,new B.cT(new B.aY(0,1/0,0,B.aI(d,A.bV,x.w).w.a.b*0.42),B.hJ(w,new C.evN(v,u,d),u.length,w,w,A.ag,new C.evO(),!0),w),A.aB,v.aUm(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.evO.prototype={
$2(d,e){return A.S},
$S:36}
C.evN.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.n(16),t=A.c.j(0.05),s=B.n(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.amX,A.f,w,w,new B.o(w,w,w,B.n(12),w,D.bUJ,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nx,w,w,w),A.cV,B.d("Updated "+this.a.PD(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bA,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.evM(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ah)},
$S:77}
C.evM.prototype={
$0(){B.a6(this.a,!1).O(this.b.a)
return null},
$S:0}
C.evJ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.ab6()
t=t.ab7(A.aF,A.u3,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JF(B.v(B.a([s,A.O,t,A.by,B.B(B.a([B.E(B.dT(A.a86,new C.evH(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cl,u,new B.b7(B.n(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.av,B.E(B.bG(D.ffP,new C.evI(d),B.bm(A.fb,u,u,u,A.c,u,A.cl,u,new B.b7(B.n(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.evH.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.evI.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.evL.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ab6(),s=w.b,r=u.ab7(A.aV,A.ef,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.au4("Names",""+w.c),1),A.ab,B.E(u.au4("Fields",""+w.d),1),A.ab,B.E(u.au4("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bm(A.bj,v,v,v,A.c,v,A.xx,v,new B.b7(B.n(14),A.Y),v,v,v)
return new C.JF(B.v(B.a([t,A.O,r,A.aP,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nv,v,v,v),new C.evK(d),o),A.S,u.aUn(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.evK.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.esJ.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.esI.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.evB.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.ew9.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_9(A.d.dL(w.d,new C.ew7(v),new C.ew8(v)).hF(),w.f,null)},
$S:z+84}
C.ew7.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.ew8.prototype={
$0(){return this.a},
$S:z+85}
C.eqt.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bA,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.ht,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKf,w,w,w,w,new C.eqr(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fdR,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLp,w,w,w,w,new C.eqs(d),!1,w,w,w,w,w,D.fzJ,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dn,w,w,w),w,w,w))
return B.bl(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eqr.prototype={
$0(){B.a6(this.a,!1).O("scroll")
return null},
$S:0}
C.eqs.prototype={
$0(){B.a6(this.a,!1).O("split")
return null},
$S:0}
C.equ.prototype={
$0(){var w=this.b,v=w.c,u=C.ep(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bn,A.a5,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bf,4280172719,2,v,0,0,"",D.cm,D.RG,0.88,0.06,0.08)
v=this.a
A.d.L(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eqv.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.j1
$.j1=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.j1
$.j1=k+1
m.push(new C.eK(""+1000*l+"_"+k,D.RG,0.04,0.06,0.92,0.88,v,24,A.a5,A.bn,A.aD,4279310375,A.bg,u,D.bf,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cm,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lF(""+1000*p+"_"+o,r+n,"",D.qb,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eqz.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kv(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ep(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bn,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l2,0.35,0.55,0.62)
A.d.L(u.gdr().z,w)
u.r=w.a},
$S:0}
C.eqq.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b23(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ef(v.db,"marriage_sign_",""),4280640491,24,A.bn,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l2,s,u,t)
A.d.L(p.gdr().z,q)
A.d.bp(p.gdr().z,new C.eqp(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i3q(p)}},
$S:0}
C.eqp.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.euq.prototype={
$0(){var w=this.a,v=this.b
w.b23(v)
this.c.at=v.a
w.r=null},
$S:0}
C.ewh.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.esM.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bp(r.z,new C.esL())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.esL.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.erb.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.erc.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tv()},
$S:9}
C.eqn.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bn,A.a5,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,0.8,0.1,0.1),v=this.a
A.d.L(v.gdr().z,w)
v.r=w.a},
$S:0}
C.esd.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eqw.prototype={
$0(){var w=this.a,v=this.b
A.d.L(w.gdr().z,v)
w.r=v.a},
$S:0}
C.eqF.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eqG.prototype={
$0(){var w=this.b.hF(),v=C.cD(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ep(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.L(t.gdr().z,f)
t.r=f.a},
$S:0}
C.eqH.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.be(w,new C.eqE(v))
if(u>=0&&u<w.length-1){A.d.cA(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.eqE.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqS.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.be(w,new C.eqD(v))
if(u>0){A.d.cA(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.eqD.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqV.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.eqW.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.eqX.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.eqY.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eqZ.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.er_.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.er0.prototype={
$1(d){return d.length!==0},
$S:3}
C.eqI.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cD()
A.d.L(v,C.CL(w.gql().c.j(0.18).l(),0.1,u,D.bf,0,2,1,0,0))
u=w.gdr().z
v=C.cD()
A.d.L(u,C.iW(A.bg,!1,w.gql().d.l(),A.aD,18,A.bn,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.eqJ.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cD()
A.d.L(u,C.CL(v.gql().c.j(0.12).l(),0.1,t,D.bf,0,2,1,0,0.9))
t=v.gdr().z
u=C.cD()
w=C.bCe()
A.d.L(t,C.iW(A.L,!1,v.gql().e.l(),A.aD,12,A.bn,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.eqK.prototype={
$0(){A.d.L(this.a.gdr().z,C.CL(1727914055,0.12,C.cD(),D.bf,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eqL.prototype={
$0(){var w=4279310375
A.d.L(this.a.gdr().z,C.CL(w,0.08,C.cD(),D.bf,w,2,0.5,0.2,0.4))},
$S:0}
C.eqM.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cD()
A.d.L(v,C.CL(w.gql().c.j(0.35).l(),0.12,u,D.CC,4280640491,2,0.2,0.15,0.55))
A.d.L(w.gdr().z,C.iW(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.15,C.cD(),"Important note",0,D.qc,0.5,0.38,0.52))},
$S:0}
C.eqN.prototype={
$0(){var w=this.a
A.d.L(w.gdr().z,C.CL(4294507260,0.78,C.cD(),D.bf,4291548641,1.5,0.84,0.08,0.1))
A.d.L(w.gdr().z,C.iW(A.bg,!1,4279179050,A.aD,16,A.bn,A.a5,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCe()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.eqO.prototype={
$0(){var w=this.a
A.d.L(w.gdr().z,C.CL(4294897802,0.28,C.cD(),D.bf,4294626325,2,0.3,0.62,0.12))
A.d.L(w.gdr().z,C.iW(A.bg,!1,4285611794,A.aD,15,A.bn,A.a5,0.24,C.cD(),"Sticky note",0,D.aFO,0.26,0.64,0.14))},
$S:0}
C.eqP.prototype={
$0(){var w=4280640491,v=this.a
A.d.L(v.gdr().z,C.CL(4293060848,0.04,C.cD(),D.bf,4291548641,2,0.8,0.1,0.48))
A.d.L(v.gdr().z,C.CL(w,0.04,C.cD(),D.bf,w,2,0.55,0.1,0.48))},
$S:0}
C.eqQ.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdr().z,C.iW(A.bg,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.HN,0.42,0.06,0.18))
A.d.L(v.gdr().z,C.iW(A.bg,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.uj,0.42,0.52,0.18))},
$S:0}
C.eqR.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdr().z,C.CL(858088427,0.62,C.cD(),D.bf,4280640491,2,0.42,0.05,0.18))
A.d.L(v.gdr().z,C.CL(856004201,0.62,C.cD(),D.bf,4278556265,2,0.42,0.53,0.18))
A.d.L(v.gdr().z,C.iW(A.bg,!1,w,A.aD,20,A.bn,A.H,0.1,C.cD(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.L(v.gdr().z,C.iW(A.bg,!1,w,A.aD,20,A.bn,A.H,0.1,C.cD(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.eqT.prototype={
$0(){var w=4279310375,v=this.a
A.d.L(v.gdr().z,C.CL(4294967295,0.36,C.cD(),D.bf,w,2,0.24,0.38,0.28))
A.d.L(v.gdr().z,C.iW(A.L,!1,w,A.aD,14,A.bn,A.a5,0.12,C.cD(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.eqU.prototype={
$0(){return C.cdI(this.b,D.RH,this.a.gql())},
$S:0}
C.esc.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a6s.t(0,d),t=this.a
return t.b71(d,v===d,A.aZ,this.c,new C.esb(t,u,d,w),u)},
$S:z+25}
C.esb.prototype={
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
C.bD0(r,new C.esa(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esa.prototype={
$0(){return this.a.d3(new C.es9(this.b,this.c))},
$S:0}
C.es9.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eqx.prototype={
$0(){var w,v=this.a,u=v.gql(),t=C.rr(4294967295,null,0,0,null,C.cD(),D.mF,"","","",D.dd),s=this.b
C.cdI(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.CB){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.erf.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i9t(p,q.d,s,new C.ere(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tv(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ere.prototype={
$1(d){return this.bjM(d)},
bjM(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.erd(t,d))
w=2
return B.b(t.tv(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.erd.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gR(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.erg.prototype={
$0(){return this.a.bHI()},
$S:0}
C.erh.prototype={
$0(){return this.a.aPA("Class Presentation",!0)},
$S:0}
C.eri.prototype={
$1(d){return this.a.bIE(d.b,this.b,d.a)},
$S:z+88}
C.erT.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bV,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eu3.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eE,x.w).w.f.d),new B.e0(new C.eu2(this.a,this.b),null),null)},
$S:59}
C.eu2.prototype={
$2(d,e){return B.oN(new C.eu1(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:479}
C.eu1.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.az:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b2,v,v,B.n(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.D(A.ahx,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b7,B.bK(!1,A.zE,v,v,!0,v,v,new C.eu_(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cw(B.a([p.aSl(u,!0,!0,new C.eu0(p,w.d))],q),e,D.bqO,v,v,A.ag,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kK,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:116}
C.eu_.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eu0.prototype={
$0(){this.b.$1(new C.etY())
var w=this.a
if(w.c!=null)w.m(new C.etZ())},
$S:0}
C.etY.prototype={
$0(){},
$S:0}
C.etZ.prototype={
$0(){},
$S:0}
C.evC.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:96}
C.evD.prototype={
$4(d,e,f,g){var w=A.ct.az(0,e.gp(0))
return B.dc(B.ed(A.A,new C.aym(this.a,null),0.94+w*0.06,null,null),w)},
$S:382}
C.evE.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:96}
C.evF.prototype={
$4(d,e,f,g){var w=A.ct.az(0,e.gp(0))
return B.dc(B.ed(A.A,new C.bcj(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:382}
C.evG.prototype={
$0(){return A.d.ck(this.a.d,0,C.VC(this.b))},
$S:0}
C.eqC.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.az(0,o)
o=B.n(22)
v=B.n(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.az.j(0.72)],t):B.a([A.c.j(0.88),A.pw.j(0.75)],t)
r=B.I(A.b3.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b3.j(0.35+q),A.cf.j(0.18),A.K],t)
q=B.I(A.b3.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_s,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tX(A.fv,B.p(p,B.v(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:284}
C.erH.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.erI.prototype={
$1(d){return d.length!==0},
$S:3}
C.erJ.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.jF
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_Z:A.Bo}return w},
$S:524}
C.erM.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.az(0,A.k.E(j+m.b*0.12,1))
j=B.n(20)
v=m.c
u=B.n(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.az.j(0.78)],s):B.a([A.c.j(0.92),A.mU.j(0.82)],s)
r=m.e
q=A.d.gJ(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.n(10)
q=B.p(l,B.X(C.kv(v.w)?A.vD:A.q_,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a8,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.PD(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.PD(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.PD(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.PD(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.PD(v.f)
r=k.bIC(n,A.d.gJ(r),t)
return B.p(l,B.bw(j,new B.a7z(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.Ma,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.o2,t?A.aA:A.bJ,l,l,l,l),l,l,l,new C.erK(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.erL(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ah),l),A.aq),A.f,l,l,l,l,l,l,A.da,l,l,l,l)},
$S:91}
C.erL.prototype={
$0(){return this.a.aey(this.b)},
$S:0}
C.erK.prototype={
$0(){return this.a.AL(this.b,this.c)},
$S:0}
C.etc.prototype={
$0(){var w=this.a
w.b5G()
w.m(new C.etb())},
$S:0}
C.etb.prototype={
$0(){},
$S:0}
C.etd.prototype={
$1(d){return this.a.aiD(this.b.a,d)},
$S:2}
C.ete.prototype={
$0(){this.a.d3(new C.eta(this.b))},
$S:0}
C.eta.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.N)?A.cv:A.N},
$S:0}
C.etf.prototype={
$0(){this.a.d3(new C.et9(this.b))},
$S:0}
C.et9.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.etg.prototype={
$0(){this.a.d3(new C.et8(this.b))},
$S:0}
C.et8.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mL},
$S:0}
C.eth.prototype={
$0(){this.a.d3(new C.et7(this.b))},
$S:0}
C.et7.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eti.prototype={
$0(){var w=this.a
w.d3(new C.et6(w,this.b))},
$S:0}
C.et6.prototype={
$0(){var w=this.b
return w.as=this.a.c2A(w.as)},
$S:0}
C.etj.prototype={
$0(){return this.a.d3(new C.et5(this.b))},
$S:0}
C.et5.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.etk.prototype={
$0(){return this.a.d3(new C.et4(this.b))},
$S:0}
C.et4.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.esY.prototype={
$0(){return this.a.a1K(this.b.a)},
$S:0}
C.esZ.prototype={
$0(){this.a.a_h()
return null},
$S:0}
C.et_.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bV,x.w).w.a.a<900)w.aeR()
else w.m(new C.esX(w))},
$S:0}
C.esX.prototype={
$0(){return this.a.as=!0},
$S:0}
C.et0.prototype={
$0(){this.a.d3(new C.esW(this.b))},
$S:0}
C.esW.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.N)?A.cv:A.N},
$S:0}
C.et1.prototype={
$0(){return this.a.d3(new C.esV(this.b))},
$S:0}
C.esV.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.et2.prototype={
$0(){return this.a.d3(new C.esU(this.b))},
$S:0}
C.esU.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.et3.prototype={
$0(){return this.a.az8(null)},
$S:0}
C.es5.prototype={
$0(){this.a.Du()
return null},
$S:0}
C.es6.prototype={
$0(){this.a.a9E()
return null},
$S:0}
C.es8.prototype={
$1(d){return this.bjN(d)},
bjN(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JN(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bR(A.az,null,new C.es0(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d3(new C.es1(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.es2(r))
s=s.c.I(x.q).f
s.U(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.es3(r))
s=s.c.I(x.q).f
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
return B.b(C.ho2(q,new C.El(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d3(new C.es4(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agz(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.U(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:94}
C.es0.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e8o],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bKm:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.es_(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dn,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bl(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.es_.prototype={
$0(){B.a6(this.a,!1).O(this.b)
return null},
$S:0}
C.es1.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.es2.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.es3.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.es4.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.es7.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zz(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zz(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zz(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agz(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eds,q,v,u,B.zz(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:140}
C.ewn.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCb(w,v)}},
$S:0}
C.ewo.prototype={
$0(){this.a.Du()
return null},
$S:0}
C.etn.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.n(999),q=s?D.bUD:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bK
if(s)v=A.c
else v=this.b?A.aS:A.bv
return new B.D(A.fz,B.aD(u,B.df(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eG,u,u,u,A.lO,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.etm(t,d),u,u,u,u,u,u,!1,A.a7),u)},
$S:127}
C.etm.prototype={
$0(){var w=this.a
return w.m(new C.etl(w,this.b))},
$S:0}
C.etl.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eto.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2M:E.awj
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbM3():t.gbI2()
return B.hs(B.aD(u,B.p(u,D.amp,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gJ(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a8,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a7),u,s,u,u)},
$S:1704}
C.etp.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i8J(v,w.a.c)},
$S:0}
C.euM.prototype={
$0(){return this.b.v7(this.a.a)},
$S:0}
C.euN.prototype={
$0(){return this.a.v7(D.mF)},
$S:0}
C.euO.prototype={
$0(){return this.a.v7(D.HL)},
$S:0}
C.euZ.prototype={
$0(){return this.a.v7(D.HM)},
$S:0}
C.ev9.prototype={
$0(){return this.a.v7(D.HK)},
$S:0}
C.evk.prototype={
$0(){return this.a.q6("lab_report")},
$S:0}
C.evr.prototype={
$0(){return this.a.q6("rubric")},
$S:0}
C.evs.prototype={
$0(){return this.a.q6("minutes")},
$S:0}
C.evt.prototype={
$0(){return this.a.q6("agenda")},
$S:0}
C.evu.prototype={
$0(){return this.a.q6("timeline")},
$S:0}
C.evv.prototype={
$0(){return this.a.q6(this.b.a)},
$S:0}
C.euP.prototype={
$0(){this.a.Vr()
return null},
$S:0}
C.euQ.prototype={
$0(){this.a.Vl()
return null},
$S:0}
C.euR.prototype={
$0(){return this.a.q6("table")},
$S:0}
C.euS.prototype={
$0(){return this.a.q6("sticky")},
$S:0}
C.euT.prototype={
$0(){return this.a.q6("divider")},
$S:0}
C.euU.prototype={
$0(){return this.a.q6("header_bar")},
$S:0}
C.euV.prototype={
$0(){return this.a.p_(D.bf)},
$S:0}
C.euW.prototype={
$0(){return this.a.p_(D.eL)},
$S:0}
C.euX.prototype={
$0(){return this.a.p_(D.jL)},
$S:0}
C.euY.prototype={
$0(){return this.a.p_(D.CC)},
$S:0}
C.ev_.prototype={
$0(){return this.a.p_(D.jM)},
$S:0}
C.ev0.prototype={
$0(){return this.a.p_(D.l3)},
$S:0}
C.ev1.prototype={
$0(){return this.a.p_(D.fr)},
$S:0}
C.ev2.prototype={
$0(){this.a.H9()
return null},
$S:0}
C.ev3.prototype={
$0(){this.a.N7()
return null},
$S:0}
C.ev4.prototype={
$0(){return this.a.q6("quote")},
$S:0}
C.ev5.prototype={
$0(){return this.a.a7N()},
$S:0}
C.ev6.prototype={
$0(){this.a.a_n()
return null},
$S:0}
C.ev7.prototype={
$0(){var w=this.a
return w.m(new C.euC(w))},
$S:0}
C.euC.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ev8.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o6(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.euK(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euK.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eva.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jQ()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a6t.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b2
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a8,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a6t.t(0,q))u.push(B.ao(s,B.p(s,D.NS,A.f,s,s,D.DT,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fz,B.aD(s,B.hs(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.euJ(r,d),s,s,s,s,s,s,!1,A.a7),s)},
$S:z+89}
C.euJ.prototype={
$0(){this.a.a84(this.b)
return null},
$S:0}
C.evb.prototype={
$0(){this.a.a83(this.b)
return null},
$S:0}
C.evc.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hFs(d),p=this.a,o=B.n(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b2
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.n(8)
t=B.n(7)
s=C.rr(4294967295,r,0,0,r,"preview_"+w,D.qb,"","","",D.dd)
C.hl_(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hmj(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.amY,A.f,r,r,D.DT,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iW,B.aD(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cV,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.N,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.euI(p,q,d),r,r,r,r,r,r,!1,A.a7),r)},
$S:z+90}
C.euI.prototype={
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
return B.b(s.o6(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d3(new C.euy(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.euy.prototype={
$0(){return C.hl_(this.a,this.b.a)},
$S:0}
C.euL.prototype={
bjO(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a6s.t(0,d)
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
$2(d,e){return this.bjO(d,e)},
$S:z+91}
C.evw.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("L<1,r>")
v=B.C(new B.L(d,new C.evy(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.c9(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.evy.prototype={
$1(d){var w=this
return w.a.b71(d,w.b===d,w.c,w.d,new C.evx(w.e,d),!D.a6s.t(0,d))},
$S:z+25}
C.evx.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.evd.prototype={
$1(d){this.b.$2(d,new C.euH(this.a,d,this.c))
return null},
$S:z+26}
C.euH.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bD0(u,new C.eux(v,this.c,w),w)},
$S:0}
C.eux.prototype={
$0(){return this.a.d3(new C.euv(this.b,this.c))},
$S:0}
C.euv.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eve.prototype={
$1(d){this.b.$2(d,new C.euG(this.a,d))
return null},
$S:z+26}
C.euG.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fOS(u,new C.euw(v,w),w)},
$S:0}
C.euw.prototype={
$0(){var w=this.a
return w.d3(new C.euu(w,this.b))},
$S:0}
C.euu.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.evf.prototype={
$0(){var w=this.a
return w.m(new C.euF(w))},
$S:0}
C.euF.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.evg.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bCb(w,v)}},
$S:0}
C.evh.prototype={
$0(){this.a.HV()
return null},
$S:0}
C.evi.prototype={
$0(){return this.a.a7N()},
$S:0}
C.evj.prototype={
$0(){var w=this.a,v=w.jQ()
if(v!=null&&v.b===D.cQ)w.d3(new C.euE(v))},
$S:0}
C.euE.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.evl.prototype={
$0(){this.a.Du()
return null},
$S:0}
C.evm.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.F8(v,!0)
return null},
$S:0}
C.evn.prototype={
$0(){this.a.d3(new C.euD(this.b))},
$S:0}
C.euD.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.N)?A.cv:A.N},
$S:0}
C.evo.prototype={
$0(){this.a.d3(new C.euB(this.b))},
$S:0}
C.euB.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.evp.prototype={
$0(){this.a.d3(new C.euA(this.b))},
$S:0}
C.euA.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mL},
$S:0}
C.evq.prototype={
$0(){this.a.d3(new C.euz(this.b))},
$S:0}
C.euz.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.era.prototype={
$1(d){return this.bjL(d)},
bjL(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d3(new C.er9(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:200}
C.er9.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.evT.prototype={
$0(){var w=this.a
return w.d3(new C.evS(w,this.b))},
$S:0}
C.evS.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.evU.prototype={
$0(){var w=this.a
return w.d3(new C.evR(w,this.b))},
$S:0}
C.evR.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.esi.prototype={
$0(){return this.a.d3(new C.esh(this.b))},
$S:0}
C.esh.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.esj.prototype={
$0(){return this.a.d3(new C.esg(this.b))},
$S:0}
C.esg.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.esQ.prototype={
$1(d){var w=x.gh
w=B.C(new B.L(D.aoF,new C.esP(),w),w.k("ak.E"))
return w},
$S:z+94}
C.esP.prototype={
$1(d){var w=null
return B.zz(B.d(d.b,w,w,w,w,w,w,A.m6,w,w,w),48,d,x.fO)},
$S:z+95}
C.ew5.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.ew4.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.ke()?q:new C.ew2(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.n(8)
if(o)v=A.bj
else v=r.d?A.b2:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.cC:A.c
t=B.bZ(0,C.hmj(r.b.r[e]),0,0,0)
s=B.n(4)
return B.aD(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nt,q,q,q),A.f,q,q,new B.o(A.aW,q,q,s,q,q,A.n),q,q,q,q,A.air,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.ew3(p,e),q,q,q,q,q,q,!1,A.a7)},
$S:74}
C.ew3.prototype={
$0(){var w=this.a
return w.m(new C.evZ(w,this.b))},
$S:0}
C.evZ.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JW()},
$S:0}
C.ew2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bR(null,null,new C.ew_(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.ew0(q,s))
q.aR2()}else if(r==="del"){q=t.a
q.m(new C.ew1(q,s))
q.aQb()}else if(r==="up")t.a.b2g(s,s-1)
else if(r==="down")t.a.b2g(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ew_.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bM0,w,w,w,w,new C.evV(d),!1,w,w,w,w,w,w,w,D.feO,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLU,w,w,w,w,new C.evW(d),!1,w,w,w,w,w,w,w,A.wo,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLb,w,w,w,w,new C.evX(d),!1,w,w,w,w,w,w,w,D.fmP,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bNd,w,w,w,w,new C.evY(d),!1,w,w,w,w,w,w,w,D.feD,w,w,w))
return B.bl(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.evV.prototype={
$0(){B.a6(this.a,!1).O("dup")
return null},
$S:0}
C.evW.prototype={
$0(){B.a6(this.a,!1).O("del")
return null},
$S:0}
C.evX.prototype={
$0(){B.a6(this.a,!1).O("up")
return null},
$S:0}
C.evY.prototype={
$0(){B.a6(this.a,!1).O("down")
return null},
$S:0}
C.ew0.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ew1.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ew6.prototype={
$0(){return this.a.a7N()},
$S:0}
C.erA.prototype={
$0(){var w=this.a
w.b5G()
w.az8(null)},
$S:0}
C.erz.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.n(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dm,24)],x.V),m=this.b
if(m.f!=null){w=B.b0(m.e)
v=m.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b0(m.e):p
u=m.x
t=m.y
s=B.n(4)
if(m.f!=null){r=B.b0(m.e)
q=m.f
q.toString
q=new B.a8(A.ax,A.aC,A.x,B.a([r,B.b0(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bw(s,B.c0(A.kC,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.be),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.L(r,new C.ery(this.a,e.b,e.d,q),B.U(r).k("L<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.W,p,A.aa,A.f,s,new B.cy("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.be)},
$S:394}
C.ery.prototype={
$1(d){var w=this
return w.a.bDY(d,w.b,w.c,w.d)},
$S:z+23}
C.ern.prototype={
$0(){var w=this
if(w.b){w.a.Ng(w.c)
return}if(w.d){w.a.a7L(w.c)
return}if(w.e){w.a.aga(w.c)
return}if(w.f)w.a.b6b(w.c)},
$S:0}
C.ero.prototype={
$0(){this.a.Ng(this.b)
return null},
$S:0}
C.erp.prototype={
$0(){return this.a.a1K(this.b.a)},
$S:0}
C.erq.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.erm(u,d,w.c,w.d))
v.HA()
v.of()
v.pj()},
$S:18}
C.erm.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.err.prototype={
$1(d){return this.a.aiD(this.b.a,d)},
$S:2}
C.ert.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.h_N(w))u.a.Ng(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b6b(v)},
$S:0}
C.ers.prototype={
$0(){return this.a.a1K(this.b.a)},
$S:0}
C.eru.prototype={
$1(d){var w=this,v=w.a
v.m(new C.erl(w.b,d,w.c,w.d))
v.HA()
v.of()
v.pj()},
$S:18}
C.erl.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.erv.prototype={
$1(d){var w=this.a
w.m(new C.erk(this.b,d))
w.HA()
w.of()
w.pj()},
$S:232}
C.erk.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.erw.prototype={
$0(){var w=this.a
w.m(new C.erj(this.b))
w.HA()
w.of()
w.pj()},
$S:0}
C.erj.prototype={
$0(){this.a.r=C.hlP()},
$S:0}
C.erx.prototype={
$0(){return this.a.a1K(this.b.a)},
$S:0}
C.etr.prototype={
$0(){var w=this.a
return w.m(new C.etq(w))},
$S:0}
C.etq.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ets.prototype={
$1(d){return this.a.cBt(this.b.a,d)},
$S:2}
C.esw.prototype={
$1(d){var w
this.a.d3(d)
w=this.b
if(w!=null)w.$0()},
$S:165}
C.esx.prototype={
$1(d){return this.a.$1(new C.esv(this.b,d))},
$S:6}
C.esv.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.esy.prototype={
$1(d){return this.a.$1(new C.esu(this.b,d))},
$S:6}
C.esu.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.esz.prototype={
$1(d){return this.a.$1(new C.est(this.b,d))},
$S:6}
C.est.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.esA.prototype={
$1(d){return this.a.$1(new C.ess(this.b,d))},
$S:6}
C.ess.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.esB.prototype={
$1(d){return this.a.$1(new C.esr(this.b,d))},
$S:6}
C.esr.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.esC.prototype={
$1(d){return this.b.$1(new C.esq(this.a,this.c))},
$S:8}
C.esq.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.esD.prototype={
$1(d){return this.b.$1(new C.esp(this.a,this.c))},
$S:8}
C.esp.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.esE.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aD(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eso(this.a,v,d),w,w,w,w,w,w,!1,A.a7)},
$S:396}
C.eso.prototype={
$0(){return this.a.$1(new C.esl(this.b,this.c))},
$S:0}
C.esl.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.esF.prototype={
$1(d){return this.a.$1(new C.esn(this.b,d))},
$S:1705}
C.esn.prototype={
$0(){var w=this.b
return this.a.as=w.gJ(w)},
$S:0}
C.esG.prototype={
$1(d){var w=null
return B.aD(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.esm(this.a,this.b,d),w,w,w,w,w,w,!1,A.a7)},
$S:396}
C.esm.prototype={
$0(){return this.a.$1(new C.esk(this.b,this.c))},
$S:0}
C.esk.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.esH.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).py()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eN()}v.a.arL()},
$S:0}
C.esK.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.az(0,m)
m=B.n(16)
v=B.n(16)
u=o.c
t=B.aq(u,A.b3,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.n(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.u3,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nd,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eF(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ah)},
$S:133}
C.eqj.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.az(0,o)
o=B.n(22)
v=B.n(22)
u=q.c
t=B.aq(u,A.b3,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eF(B.v(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j3,A.L,p,p)],x.p),A.m,p,A.b8,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.Fe,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ah)},
$S:133}
C.euo.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.anP,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.eum(d),w,w),B.bG(A.ph,new C.eun(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.eum.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.eun.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).O(w)
return null},
$S:0}
C.d0_.prototype={
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
i=A.dU.az(0,i)
v=B.n(22)
t=B.aq(A.aK,A.d.gJ(C.kv(j.a.c.w)?D.uc:N.nl),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gJ(C.kv(j.a.c.w)?D.uc:N.nl).j(0.18+w*0.12),A.J,32+w*10),D.aaV],s)
q=B.n(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b_,0.9,A.x,k,0,B.a([A.d.gJ(C.kv(j.a.c.w)?D.uc:N.nl).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gJ(C.kv(j.a.c.w)?D.uc:N.nl).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kv(j.a.c.w)?D.uc:N.nl).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.n(14)
m=j.a.c.w
l=C.kv(m)?D.uc:N.nl
s=B.a([new B.ac(0,A.G,A.d.gJ(C.kv(m)?D.uc:N.nl).j(0.45+w*0.2),A.cx,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kv(j.a.c.w)?A.vD:A.q_,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gJ(C.kv(j.a.c.w)?D.uc:N.nl).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h0,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f73,A.L,k,k),A.at,B.d(j.gcwu(),k,k,k,k,k,k,D.fby,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gS0()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gJ(C.kv(j.a.c.w)?D.uc:N.nl).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.N,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jy(A.y0,"Download PDF","pdf",A.d3,j.IP(0),!1,k))
p=j.a.c
if(!p.z||p.gS0()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jy(A.kt,"Transfer to "+C.hlR(p==null?"":p),"transfer_hati",A.aV,j.IP(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.IP(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jy(D.bDB,"Rename presentation","rename",A.cf,n,!1,k),A.am,new C.Jy(A.ak5,"Duplicate","duplicate",A.b6,j.IP(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.O)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jy(A.e6,"Delete presentation","delete",A.ay,j.IP(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.IP(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.IP(n)
s.push(B.dU(B.dc(B.bK(!1,E.aQO,k,k,!0,k,k,new C.d_Z(d),k,B.fw(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.btS,k,k,k,k,k,A.k6,k,k)),n),new B.u(0,(1-p)*8)))
return B.ed(A.A,B.dc(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.bt1,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Vk,new B.o(A.az,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ah),i),0.88+u*0.12,k,k)},
$S:45}
C.d_Z.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.d0l.prototype={
$0(){B.a6(this.a,!1).O(!1)
return null},
$S:0}
C.d0m.prototype={
$0(){B.a6(this.a,!1).O(!0)
return null},
$S:0}
C.d_X.prototype={
$1(d){var w=this.a
return w.m(new C.d_T(w))},
$S:22}
C.d_T.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d_Y.prototype={
$1(d){var w=this.a
return w.m(new C.d_S(w))},
$S:50}
C.d_S.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_W.prototype={
$0(){var w=this.a
return w.m(new C.d_U(w))},
$S:0}
C.d_U.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_V.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).O(w)
return null},
$S:0}
C.ex3.prototype={
$0(){return $.bjR=!$.bjR},
$S:0}
C.ewU.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaUe())u.avC()},
$S:0}
C.ex2.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ewV.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ewW.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avC()},
$S:0}
C.ewQ.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gJ(w.a.c.r).r
w.d=0},
$S:0}
C.ewR.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ewS.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ewT.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.ex0.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.r,w,null)},
$S:1706}
C.ex1.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hV)return new B.cZ(e,!1,d,null)
w=this.a
return w.cus(w.e,d,e)},
$S:380}
C.ewX.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fB((1-v.gp(0))*1.5708)
return B.ft(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.ewY.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k_((1-v.gp(0))*1.5708)
return B.ft(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.ewZ.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fB(v.gp(0)*0.8)
w.k_(v.gp(0)*0.35)
return B.ft(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.ex_.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fB(-v.gp(0)*1.2)
return B.ft(A.a8,B.dc(e,v.gp(0)),null,w,!0)},
$S:45}
C.ex4.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYw().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYw().x
t===$&&B.c()
return new C.b0y(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Iw(v.c,t,!0,new B.cy("cine"+u,x.W))},
$S:572}
C.ex6.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bV,x.w).w.a.a*0.55)w.avC()
else w.ciT()},
$S:50}
C.ex5.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fFg.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:377}
C.fFp.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fFm(d),w,w),B.bK(!1,D.fu2,w,w,!0,w,w,new C.fFn(d,this.b,v),w,w),B.bG(A.aR5,new C.fFo(d,v,this.c),w)],x.p),w,w,M.tm,new B.a7(320,w,t,w),w,w,w,w,D.fvu,w)},
$S:19}
C.fFm.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.fFn.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
C.h0r(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fFo.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPt(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aOT(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fFf.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cdL.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:546}
C.fFl.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fd6.prototype={
$1(d){return C.h0p(C.VC(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fO7.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:96}
C.fO8.prototype={
$4(d,e,f,g){var w=A.ct.az(0,e.gp(0))
return B.dc(B.ed(A.A,D.fX1,0.94+w*0.06,null,null),w)},
$S:382}
C.fO9.prototype={
$1(d){var w=this
return new C.VE(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.ewA.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eww.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.ewz.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VF(u,this.b,w.gaNw(),v,null)},
$S:z+99}
C.ewx.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ewy.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ewB.prototype={
$0(){return this.a.f=!0},
$S:0}
C.ewC.prototype={
$0(){return this.a.f=!1},
$S:0}
C.ewF.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ewG.prototype={
$0(){var w=this.a
return w.m(new C.ewE(w))},
$S:0}
C.ewE.prototype={
$0(){return this.a.d="one"},
$S:0}
C.ewH.prototype={
$0(){var w=this.a
return w.m(new C.ewD(w))},
$S:0}
C.ewD.prototype={
$0(){return this.a.d="all"},
$S:0}
C.ewI.prototype={
$1(d){return this.a.bID(d,this.b)},
$S:z+100}
C.ewv.prototype={
$0(){var w=this.a
return w.m(new C.ewu(w,this.b))},
$S:0}
C.ewu.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.ewJ.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ewK.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ewL.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ewM.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ewN.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fJ(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.U(D.eUu)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqd.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eqc())},
$S:0}
C.eqc.prototype={
$0(){},
$S:0}
C.eqe.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fL()},
$S:9}
C.eq9.prototype={
$1(d){return this.a.m(new C.eq8())},
$S:2}
C.eq8.prototype={
$0(){},
$S:0}
C.eqa.prototype={
$1(d){return this.a.aZ6()},
$S:2}
C.eqb.prototype={
$0(){B.a6(this.a,!1).O(null)
return null},
$S:0}
C.ewP.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pX(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ewO(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ewO.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fzA.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ev(new B.ki(this.c,new C.fzz(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:203}
C.fzz.prototype={
$3(d,e,f){return new C.Iw(e,!1,!1,new B.cy(e.a,x.W))},
$S:z+102}
C.fzB.prototype={
$1(d){var w=null
return B.oj(!1,B.av(new C.bum(this.a,this.b,w),w,w,w),w,x.z)},
$S:300}
C.fzF.prototype={
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
u=r.m_(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fzG.prototype={
bkj(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.ht(A.fY),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hO([J.eT(A.dD.gaM(r))],"image/png"))
t.toString
s=Am.fSh(t)
w=4
return B.b(new B.q_(s,"load",!1,x.ev).gJ(0).cO(0,A.jz),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bkj(d)},
$S:1710}
C.fzC.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:145}
C.fzD.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fR(0)},
$S:145}
C.fzE.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f7p.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f3A,A.L,w,w)},
$S:1711}
C.f7q.prototype={
$3(d,e,f){var w=null,v=B.n(99)
return B.bw(v,B.m2(A.bo,w,A.dQ,8,w,e===0?w:e,w),A.aq)},
$S:513}
C.een.prototype={
$1(d){this.a.ZJ()
return null},
$S:12}
C.eel.prototype={
$0(){return this.a.e=D.bp5},
$S:0}
C.eem.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cgj.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cgk.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLq.prototype
w.buU=w.q
w=C.aKU.prototype
w.bum=w.q
w=C.aKF.prototype
w.bu6=w.q
w=C.aKT.prototype
w.bul=w.q
w=C.aLo.prototype
w.buS=w.q
w=C.aML.prototype
w.bwp=w.q
w=C.aJA.prototype
w.bsZ=w.q
w=C.aLC.prototype
w.bv5=w.q
w=C.aLD.prototype
w.bv6=w.q
w=C.b2d.prototype
w.bpD=w.aCi})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i6x","an9",104)
v(C.aIz.prototype,"gc2W","YD",0)
var r
u(r=C.ax9.prototype,"gcvQ","cvR",38)
v(r,"gc3H","acS",0)
v(r=C.ax5.prototype,"gaXF","DX",3)
v(r,"gc3E","c3F",3)
v(r,"gavV","xE",0)
v(r,"gavW","It",0)
t(C,"i6Y","hDc",105)
v(C.aDd.prototype,"gc6n","c6o",3)
s(C,"i78",0,null,["$4$paper$photo$request$template"],["fGF"],106,0)
s(C,"i77",0,null,["$5$doc$history$instruction$photo$template"],["bBu"],107,0)
v(r=C.aDw.prototype,"gc74","IM",0)
v(r,"gbI5","Wu",0)
v(r,"gc77","adH",0)
v(r,"gc76","Zv",0)
v(r,"gaYM","Ee",0)
v(C.aDA.prototype,"gc7c","Zx",0)
v(r=C.aEX.prototype,"gaYZ","Pz",0)
v(r,"gcnK","b2m",3)
v(r,"gcxe","aAr",86)
v(r,"gbLU","a9I",0)
v(r,"gc7D","Ao",0)
v(r=C.aGS.prototype,"gchC","a_S",0)
v(r,"gchK","a_V",0)
v(r,"gbB_","a8a",0)
v(r,"gc7H","adT",0)
v(C.aGR.prototype,"gc7I","adU",0)
v(C.aAS.prototype,"gbzZ","a7Y",0)
v(C.azf.prototype,"gc7J","ZI",0)
w(C,"i7l","i5e",12)
w(C,"i7j","i2b",12)
w(C,"i7k","i4e",12)
v(r=C.aDQ.prototype,"gcAo","cAp",3)
v(r,"gclZ","cm_",3)
u(r,"gEk","aey",7)
v(r,"gbFI","aqV",3)
u(r,"gEl","b_f",7)
v(r,"gc9S","aef",0)
v(r,"gc8J","aee",0)
v(r,"gcc1","aez",0)
v(r,"gbI2","a9j",0)
v(r,"gccV","a_h",0)
v(r,"gccW","aeQ",0)
v(r,"gcds","aeX",0)
v(r,"gcce","aeC",0)
v(r,"gbM3","a9M",0)
v(r,"gaR1","aR2",3)
v(r,"gaQa","aQb",3)
v(r,"gaLR","aLS",3)
v(r,"gaQ9","arL",3)
u(r,"gbAf","bAg",80)
v(r,"gazY","b5q",3)
v(r,"gc8L","c8M",3)
v(r,"gbX8","bX9",3)
v(r,"gbKv","bKw",3)
v(r=C.aDT.prototype,"gczf","czg",3)
v(r,"gcyV","cyW",3)
t(C,"i7m","i5v",2)
v(r=C.aDR.prototype,"gc7P","IR",0)
v(r,"gcpK","R_",0)
v(r,"gc7M","IQ",0)
v(r,"gcBE","a2n",0)
v(r,"gcdE","af3",0)
v(C.aDP.prototype,"gc7Q","aZ6",3)
v(r=C.aDS.prototype,"gbMP","a9W",0)
u(r,"gc7N","c7O",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nR,C.Rt,C.bH1,C.bFo,C.cwr,C.cwp,C.bNi,C.b7Z,C.cwq,C.bDZ,C.cgd,C.cgb,C.cgc,C.cga,C.ask,C.cg9,C.bOb,C.oh,C.aEr,C.jo,C.nE,C.a7y,C.zl,C.le,C.ot,C.m4,C.zn,C.nI,C.a7G,C.aqI,C.b0z,C.edN,C.lb,C.Eu,C.eu,C.j_,C.El,C.xu,C.eK,C.lF,C.i0,C.jG,C.a7H,C.aeP,C.b0A,C.b2d,C.a2u])
u(B.kk,[C.cEh,C.bYS,C.fuN,C.cFN,C.cF9,C.fAi,C.dXU,C.dXT,C.eeq,C.eep,C.fBH,C.fee,C.fef,C.cc7,C.cc8,C.cc9,C.eiO,C.eRC,C.eR_,C.eQZ,C.eS2,C.eRA,C.eRt,C.eRM,C.eSs,C.fly,C.eYB,C.eYA,C.eZ3,C.edQ,C.fFc,C.dTD,C.fLG,C.fC3,C.cdD,C.cdB,C.cdG,C.fCy,C.fCz,C.fCA,C.fCB,C.cdn,C.cdo,C.dFT,C.cdk,C.fCx,C.f4Y,C.dRP,C.cdd,C.edw,C.fA7,C.etO,C.euc,C.eu9,C.eu8,C.euj,C.eui,C.evO,C.evN,C.eu2,C.eu1,C.eqC,C.erM,C.euL,C.ew5,C.ew4,C.erz,C.esK,C.eqj,C.d0_,C.ex0,C.ex1,C.ewX,C.ewY,C.ewZ,C.ex_,C.ex4,C.cdL,C.ewA,C.ewL,C.cgk])
u(B.hV,[C.cEi,C.cEj,C.bOc,C.fsb,C.bYR,C.bYU,C.fIa,C.f5W,C.f5N,C.f62,C.fd7,C.fd8,C.fuO,C.fuM,C.fHF,C.frS,C.fIw,C.cFD,C.cFI,C.cFK,C.cFG,C.cFL,C.cFE,C.cFM,C.cFz,C.cFw,C.cFv,C.cFC,C.cF4,C.cF2,C.fzk,C.fzl,C.fhw,C.fAj,C.fAp,C.fgz,C.c8q,C.fzi,C.fzj,C.fu9,C.fua,C.fAo,C.fAk,C.fAm,C.fAn,C.fAl,C.fLY,C.fud,C.fue,C.fuh,C.fui,C.ful,C.fum,C.fNq,C.feF,C.fNB,C.ehI,C.ehJ,C.ehK,C.ehq,C.ehC,C.ehD,C.ehF,C.cc6,C.cc4,C.cc5,C.fzZ,C.fA0,C.fA_,C.feg,C.feh,C.fNE,C.eiT,C.eiU,C.eiL,C.eiM,C.eiP,C.eiQ,C.fNU,C.eSt,C.eRT,C.eRD,C.eRQ,C.eQV,C.eQW,C.eQX,C.eR0,C.eR1,C.eSi,C.eSp,C.eSr,C.eS1,C.eS3,C.eS7,C.eS8,C.eS9,C.eSd,C.eS4,C.eS5,C.eRc,C.eRd,C.eRe,C.eRf,C.eRg,C.eRh,C.eRi,C.eRj,C.eRk,C.eQy,C.eQz,C.eQA,C.eQB,C.eQD,C.eQE,C.eR6,C.eR7,C.eR8,C.eR9,C.eRa,C.eQI,C.eQJ,C.eQK,C.eQL,C.eRs,C.eRL,C.fxn,C.fxm,C.cdu,C.flx,C.fF8,C.fF1,C.fF4,C.fD1,C.fD2,C.fD3,C.fxu,C.fxt,C.fxs,C.fxq,C.feb,C.fec,C.fed,C.fO5,C.eYD,C.eYE,C.eYx,C.eYr,C.eYX,C.eYY,C.eZ_,C.eZ0,C.eYW,C.fO4,C.eYi,C.fkN,C.edP,C.fFa,C.fFb,C.fFd,C.fF6,C.fF7,C.fNi,C.dig,C.dim,C.edO,C.faF,C.faH,C.faG,C.faE,C.fyy,C.fyA,C.fcF,C.fED,C.fEE,C.fEF,C.fEQ,C.fEV,C.fEW,C.fEX,C.fEY,C.fEZ,C.fF_,C.fF0,C.fEG,C.fEH,C.fEI,C.fEJ,C.fEK,C.fEL,C.fEM,C.fEN,C.fEO,C.fEP,C.fER,C.fES,C.fET,C.fEU,C.fwo,C.fkl,C.fkk,C.fFj,C.dTE,C.dTC,C.eXs,C.c81,C.c83,C.fLI,C.d7z,C.d7B,C.fLH,C.fLF,C.fO3,C.fC_,C.d79,C.fup,C.fuq,C.cds,C.cdt,C.cdr,C.cdh,C.cdi,C.cde,C.cdf,C.cdg,C.cdJ,C.cdE,C.cdz,C.cdA,C.cdC,C.cdF,C.cdH,C.fCC,C.cdm,C.cdp,C.cdq,C.cdw,C.cdx,C.fFq,C.fEx,C.cdl,C.cdj,C.fCw,C.fmT,C.cdc,C.eV5,C.fpM,C.ewr,C.esR,C.esS,C.eur,C.euf,C.eug,C.ese,C.ewc,C.ewd,C.ewe,C.erD,C.etV,C.etX,C.etx,C.etu,C.esN,C.esO,C.etE,C.erF,C.etQ,C.etR,C.etP,C.etT,C.etS,C.eua,C.eub,C.eud,C.eu6,C.erY,C.erV,C.euk,C.erN,C.ewb,C.eql,C.erQ,C.erP,C.er3,C.er8,C.er6,C.er4,C.ewj,C.ewk,C.ewl,C.ewi,C.evQ,C.evP,C.evJ,C.evL,C.evB,C.ew9,C.ew7,C.eqt,C.eqp,C.esL,C.erc,C.eqE,C.eqD,C.er_,C.er0,C.esc,C.ere,C.eri,C.eu3,C.evC,C.evD,C.evE,C.evF,C.erH,C.erI,C.erJ,C.etd,C.es8,C.es0,C.es7,C.etn,C.eto,C.eva,C.evc,C.evw,C.evy,C.evd,C.eve,C.era,C.esQ,C.esP,C.ew_,C.ery,C.erq,C.err,C.eru,C.erv,C.ets,C.esw,C.esx,C.esy,C.esz,C.esA,C.esB,C.esC,C.esD,C.esE,C.esF,C.esG,C.euo,C.d_X,C.d_Y,C.ex6,C.fFg,C.fFp,C.fFf,C.fFl,C.fd6,C.fO7,C.fO8,C.fO9,C.ewz,C.ewI,C.eqe,C.eq9,C.eqa,C.fzA,C.fzz,C.fzB,C.fzG,C.fzC,C.fzD,C.f7p,C.f7q,C.een,C.cgj])
u(B.j9,[C.cEk,C.f5S,C.f5X,C.f5Y,C.f5T,C.f5U,C.f5V,C.f5L,C.f5M,C.f5O,C.f5P,C.f61,C.f60,C.f5R,C.f5Q,C.f5Z,C.f6_,C.f64,C.f65,C.f63,C.cFF,C.cFJ,C.cFH,C.cFx,C.cFy,C.cFA,C.cFt,C.cFu,C.cFB,C.cFs,C.cFr,C.cFq,C.cEU,C.cET,C.cEW,C.cF3,C.cEX,C.cEV,C.cEZ,C.cF_,C.cF0,C.cEY,C.cF1,C.cF5,C.cF6,C.cF7,C.cF8,C.fu7,C.fu8,C.fu5,C.fu6,C.e9b,C.e99,C.e9a,C.e9c,C.e9d,C.dXS,C.fub,C.fuc,C.fuf,C.fug,C.fuj,C.fuk,C.eeo,C.fC6,C.fC5,C.ehH,C.ehG,C.ehk,C.ehg,C.ehr,C.ehs,C.eht,C.ehm,C.ehn,C.eho,C.ehp,C.ehl,C.ehi,C.ehj,C.ehz,C.ehA,C.ehy,C.ehB,C.ehx,C.ehw,C.ehv,C.ehE,C.ehu,C.ehh,C.eiS,C.eiG,C.eiH,C.eiN,C.eiI,C.eiK,C.eiJ,C.eiR,C.eRl,C.eRJ,C.eR4,C.eR5,C.eR2,C.eR3,C.eRP,C.eRO,C.eRN,C.eRS,C.eRR,C.eQU,C.eQY,C.eQT,C.eQS,C.eQP,C.eQR,C.eQQ,C.eSq,C.eSj,C.eSh,C.eSk,C.eSg,C.eSl,C.eSf,C.eSm,C.eSn,C.eSo,C.eSe,C.eS0,C.eRW,C.eS6,C.eS_,C.eSa,C.eRZ,C.eSb,C.eRY,C.eSc,C.eRX,C.eRG,C.eRF,C.eRH,C.eRE,C.eRI,C.eRy,C.eRx,C.eRz,C.eRw,C.eRv,C.eRu,C.eQC,C.eQx,C.eQM,C.eQH,C.eQN,C.eQG,C.eQO,C.eQF,C.eRB,C.eRp,C.eRo,C.eRq,C.eRn,C.eRr,C.eRm,C.eRK,C.eRV,C.eRU,C.eRb,C.fF3,C.fF5,C.fF9,C.fxr,C.fzS,C.fzQ,C.fzR,C.eYF,C.eYG,C.eYC,C.eYw,C.eYv,C.eYy,C.eYz,C.eYl,C.eYm,C.eYo,C.eYp,C.eYq,C.eYn,C.eYs,C.eYT,C.eYU,C.eYS,C.eYV,C.eYR,C.eYQ,C.eYP,C.eYZ,C.eYO,C.eYN,C.eYM,C.eZ1,C.eYL,C.eZ2,C.eYK,C.eYJ,C.eYt,C.eYu,C.eYI,C.eYH,C.eYe,C.eYf,C.eYg,C.eYh,C.eYd,C.eYj,C.eYk,C.dif,C.dih,C.dik,C.dil,C.dij,C.dii,C.fyz,C.fwp,C.c82,C.c84,C.d7s,C.d7x,C.d7y,C.d7w,C.d7v,C.d7A,C.d7u,C.d7t,C.d7C,C.fLE,C.dee,C.def,C.deg,C.fun,C.fuo,C.cdK,C.eqf,C.eqg,C.eqh,C.eqi,C.fmR,C.fmS,C.dRR,C.dRQ,C.d4o,C.d4n,C.ewt,C.ews,C.esT,C.evz,C.ewp,C.eup,C.ewf,C.ewg,C.ewq,C.ety,C.erB,C.erC,C.etW,C.etw,C.ett,C.etv,C.etz,C.etA,C.etB,C.etC,C.etD,C.etF,C.erG,C.etI,C.etJ,C.etK,C.etL,C.etM,C.etN,C.etH,C.etU,C.eu7,C.eu5,C.eue,C.etG,C.erW,C.erX,C.erZ,C.euh,C.eul,C.eqA,C.erU,C.erS,C.eut,C.erO,C.eus,C.erE,C.esf,C.ewa,C.evA,C.eqB,C.eqy,C.eqo,C.eqk,C.eqm,C.erR,C.er2,C.er7,C.er5,C.er1,C.eu4,C.ewm,C.evM,C.evH,C.evI,C.evK,C.esJ,C.esI,C.ew8,C.eqr,C.eqs,C.equ,C.eqv,C.eqz,C.eqq,C.euq,C.ewh,C.esM,C.erb,C.eqn,C.esd,C.eqw,C.eqF,C.eqG,C.eqH,C.eqS,C.eqV,C.eqW,C.eqX,C.eqY,C.eqZ,C.eqI,C.eqJ,C.eqK,C.eqL,C.eqM,C.eqN,C.eqO,C.eqP,C.eqQ,C.eqR,C.eqT,C.eqU,C.esb,C.esa,C.es9,C.eqx,C.erf,C.erd,C.erg,C.erh,C.erT,C.eu_,C.eu0,C.etY,C.etZ,C.evG,C.erL,C.erK,C.etc,C.etb,C.ete,C.eta,C.etf,C.et9,C.etg,C.et8,C.eth,C.et7,C.eti,C.et6,C.etj,C.et5,C.etk,C.et4,C.esY,C.esZ,C.et_,C.esX,C.et0,C.esW,C.et1,C.esV,C.et2,C.esU,C.et3,C.es5,C.es6,C.es_,C.es1,C.es2,C.es3,C.es4,C.ewn,C.ewo,C.etm,C.etl,C.etp,C.euM,C.euN,C.euO,C.euZ,C.ev9,C.evk,C.evr,C.evs,C.evt,C.evu,C.evv,C.euP,C.euQ,C.euR,C.euS,C.euT,C.euU,C.euV,C.euW,C.euX,C.euY,C.ev_,C.ev0,C.ev1,C.ev2,C.ev3,C.ev4,C.ev5,C.ev6,C.ev7,C.euC,C.ev8,C.euK,C.euJ,C.evb,C.euI,C.euy,C.evx,C.euH,C.eux,C.euv,C.euG,C.euw,C.euu,C.evf,C.euF,C.evg,C.evh,C.evi,C.evj,C.euE,C.evl,C.evm,C.evn,C.euD,C.evo,C.euB,C.evp,C.euA,C.evq,C.euz,C.er9,C.evT,C.evS,C.evU,C.evR,C.esi,C.esh,C.esj,C.esg,C.ew3,C.evZ,C.ew2,C.evV,C.evW,C.evX,C.evY,C.ew0,C.ew1,C.ew6,C.erA,C.ern,C.ero,C.erp,C.erm,C.ert,C.ers,C.erl,C.erk,C.erw,C.erj,C.erx,C.etr,C.etq,C.esv,C.esu,C.est,C.ess,C.esr,C.esq,C.esp,C.eso,C.esl,C.esn,C.esm,C.esk,C.esH,C.eum,C.eun,C.d_Z,C.d0l,C.d0m,C.d_T,C.d_S,C.d_W,C.d_U,C.d_V,C.ex3,C.ewU,C.ex2,C.ewV,C.ewW,C.ewQ,C.ewR,C.ewS,C.ewT,C.ex5,C.fFm,C.fFn,C.fFo,C.eww,C.ewx,C.ewy,C.ewB,C.ewC,C.ewF,C.ewG,C.ewE,C.ewH,C.ewD,C.ewv,C.ewu,C.ewJ,C.ewK,C.ewM,C.ewN,C.eqd,C.eqc,C.eq8,C.eqb,C.ewP,C.ewO,C.fzF,C.fzE,C.eel,C.eem])
t(C.aQN,B.J)
u(B.m9,[C.a3s,C.awC,C.avj,C.xs,C.xv,C.kS,C.tf,C.Bk,C.rq,C.vV,C.arh,C.Ix,C.aqH,C.uD,C.mv,C.hz,C.a8i])
u(C.bNi,[C.cws,C.bNj])
u(C.cgd,[C.cgh,C.asj])
t(C.cgg,C.cgb)
t(C.cgf,C.cga)
t(C.cgi,C.cgf)
t(C.cge,C.cgc)
t(C.cg8,C.cg9)
t(C.b9x,B.oL)
t(C.cqg,B.auM)
t(C.a84,B.xf)
t(C.aVf,B.dG)
t(C.aAa,B.atE)
u(B.ag,[C.a0w,C.Yf,C.Yd,C.apS,C.Vq,C.Vt,C.a_x,C.a03,C.a02,C.aDp,C.Zo,C.Ne,C.YX,C.Zh,C.anS,C.aIg,C.UF,C.az_,C.a7o,C.NG,C.aym,C.Jy,C.a_9,C.VE,C.VF,C.aDO,C.aqM,C.a7p])
u(B.ah,[C.aIz,C.ax9,C.ax5,C.aDd,C.aDw,C.aDA,C.aEX,C.aGS,C.aGR,C.aLq,C.aAS,C.aKU,C.azf,C.bfq,C.aKF,C.aML,C.aKT,C.bdj,C.aLo,C.aLC,C.aJA,C.bc4,C.aLD,C.aDR,C.bjQ,C.aDP,C.aDS,C.bjz])
u(B.au,[C.ax7,C.acW,C.ack,C.biB,C.acZ,C.aeF,C.b0b,C.brY,C.b0v,C.bl9,C.bqx,C.aZp,C.b0y,C.ad1,C.adj,C.b0w,C.Iw,C.aZs,C.bcj,C.Pl,C.JF,C.bgY,C.bgX,C.bum])
u(B.H1,[C.bbM,C.btn,C.aIT,C.bet,C.bqV])
u(B.mL,[C.bbL,C.b8g,C.bqS,C.bbi,C.beR,C.bh3,C.bdX,C.beO,C.bev,C.bnp,C.b9p,C.b92,C.buj,C.brk,C.bqt,C.bdQ,C.b0t,C.bpq,C.bqq])
t(C.bjw,C.aLq)
t(C.biT,C.aKU)
t(C.biD,C.aKF)
t(C.btQ,C.aML)
t(C.biQ,C.aKT)
t(C.bju,C.aLo)
t(C.bwE,C.aLC)
t(C.aDQ,C.bwE)
t(C.bc5,C.aJA)
t(C.aDT,C.aLD)
t(C.bua,B.iT)
t(C.a8h,B.kr)
t(C.cgl,C.b2d)
t(C.ahT,C.a2u)
u(B.Xg,[C.aQD,C.aS7])
t(C.awe,C.aQD)
w(C.aLq,B.ca)
w(C.aKU,B.ca)
w(C.aKF,B.ca)
w(C.aKT,B.ca)
w(C.aLo,B.ca)
w(C.aML,B.ca)
w(C.aJA,B.eR)
w(C.aLC,B.ca)
v(C.bwE,B.ey)
w(C.aLD,B.ca)})()
B.jY(b.typeUniverse,JSON.parse('{"aRm":{"hI":["aRm"]},"nR":{"aRm":[],"hI":["aRm"]},"aQN":{"J":["Rt"],"J.E":"Rt"},"b9x":{"oL":[]},"a84":{"xf":[],"oa":[]},"aVf":{"dG":[],"cA":[],"r":[]},"aAa":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a0w":{"ag":[],"r":[]},"aIz":{"ah":["a0w"]},"Yf":{"ag":[],"r":[]},"Yd":{"ag":[],"r":[]},"ax9":{"ah":["Yf"]},"ax5":{"ah":["Yd"]},"ax7":{"au":[],"r":[]},"apS":{"ag":[],"r":[]},"aDd":{"ah":["apS"]},"acW":{"au":[],"r":[]},"ack":{"au":[],"r":[]},"acZ":{"au":[],"r":[]},"aeF":{"au":[],"r":[]},"biB":{"au":[],"r":[]},"Vq":{"ag":[],"r":[]},"aDw":{"ah":["Vq"]},"b0b":{"au":[],"r":[]},"bbM":{"aB":[]},"bbL":{"aB":[]},"btn":{"aB":[]},"b8g":{"aB":[]},"bqS":{"aB":[]},"Vt":{"ag":[],"r":[]},"aDA":{"ah":["Vt"]},"bbi":{"aB":[]},"a_x":{"ag":[],"r":[]},"aEX":{"ah":["a_x"]},"beR":{"aB":[]},"a03":{"ag":[],"r":[]},"a02":{"ag":[],"r":[]},"aDp":{"ag":[],"r":[]},"Zo":{"ag":[],"r":[]},"aGS":{"ah":["a03"]},"aGR":{"ah":["a02"]},"bjw":{"ah":["aDp"]},"bh3":{"aB":[]},"aAS":{"ah":["Zo"]},"brY":{"au":[],"r":[]},"b0v":{"au":[],"r":[]},"bl9":{"au":[],"r":[]},"Ne":{"ag":[],"r":[]},"YX":{"ag":[],"r":[]},"biT":{"ah":["Ne"]},"bqx":{"au":[],"r":[]},"bdX":{"aB":[]},"aZp":{"au":[],"r":[]},"azf":{"ah":["YX"]},"Zh":{"ag":[],"r":[]},"bfq":{"ah":["Zh"]},"beO":{"aB":[]},"bev":{"aB":[]},"bnp":{"aB":[]},"b9p":{"aB":[]},"b92":{"aB":[]},"buj":{"aB":[]},"brk":{"aB":[]},"bqt":{"aB":[]},"bdQ":{"aB":[]},"anS":{"ag":[],"r":[]},"b0y":{"au":[],"r":[]},"biD":{"ah":["anS"]},"ad1":{"au":[],"r":[]},"adj":{"au":[],"r":[]},"aIg":{"ag":[],"r":[]},"UF":{"ag":[],"r":[]},"Iw":{"au":[],"r":[]},"az_":{"ag":[],"r":[]},"a7o":{"ag":[],"r":[]},"b0w":{"au":[],"r":[]},"b0t":{"aB":[]},"btQ":{"ah":["aIg"]},"aIT":{"aB":[]},"biQ":{"ah":["UF"]},"bdj":{"ah":["az_"]},"bju":{"ah":["a7o"]},"aZs":{"au":[],"r":[]},"bet":{"aB":[]},"bpq":{"aB":[]},"bqq":{"aB":[]},"aym":{"ag":[],"r":[]},"Jy":{"ag":[],"r":[]},"a_9":{"ag":[],"r":[]},"JF":{"au":[],"r":[]},"NG":{"ag":[],"r":[]},"aDQ":{"ah":["NG"],"ey":[]},"bc5":{"ah":["aym"]},"bcj":{"au":[],"r":[]},"bc4":{"ah":["Jy"]},"Pl":{"au":[],"r":[]},"aDT":{"ah":["a_9"]},"bqV":{"aB":[]},"bgY":{"au":[],"r":[]},"bgX":{"au":[],"r":[]},"VE":{"ag":[],"r":[]},"VF":{"ag":[],"r":[]},"aDO":{"ag":[],"r":[]},"aqM":{"ag":[],"r":[]},"aDR":{"ah":["VE"]},"bjQ":{"ah":["VF"]},"aDP":{"ah":["aDO"]},"bua":{"iT":[]},"aDS":{"ah":["aqM"]},"bum":{"au":[],"r":[]},"a7p":{"ag":[],"r":[]},"bjz":{"ah":["a7p"]},"a8h":{"kr":["fs<eP>"],"ke":["fs<eP>"]},"ahT":{"a2u":[]},"aQD":{"j3":[],"ff":[]},"awe":{"j3":[],"ff":[]},"aS7":{"j3":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Ls"),U:w("vq<pY>"),bz:w("w"),M:w("eD<m>"),bo:w("jB"),g7:w("LX"),gc:w("az<iw?>"),bq:w("az<~>"),cc:w("M9"),fS:w("DM"),an:w("HI"),bm:w("O<Rt>"),X:w("O<a2C>"),f3:w("O<aRm>"),aK:w("O<n6>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lx>"),d5:w("O<az<bv<H,+icon3d,picture(m?,m?)>>>"),bH:w("O<az<dD>>"),fG:w("O<az<~>>"),aF:w("O<nc>"),cd:w("O<ai<jo>>"),ez:w("O<a4<m,aC>>"),d:w("O<a4<m,@>>"),B:w("O<mr>"),h:w("O<jo>"),gE:w("O<zl>"),k:w("O<oh>"),g:w("O<lF>"),D:w("O<i0>"),u:w("O<eK>"),m:w("O<uD>"),i:w("O<hz>"),aC:w("O<a7G>"),o:w("O<zn>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<hp>"),cR:w("O<iR>"),J:w("O<jf>"),gx:w("O<p5<m>>"),f2:w("O<+(a0,m)>"),L:w("O<+(m,m)>"),aD:w("O<+data,mimeType(m,m)>"),G:w("O<+(M,M)>"),ek:w("O<+(H,m)>"),n:w("O<+(H,H)>"),r:w("O<cR>"),s:w("O<m>"),aS:w("O<iT>"),p:w("O<r>"),eR:w("O<ff>"),fT:w("O<b7Z>"),bx:w("O<aEr>"),gz:w("O<aeP>"),x:w("O<M>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<oh>"),R:w("ai<i0>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(m?,m?)>"),P:w("a4<m,@>"),f:w("a4<@,@>"),gI:w("a4<H,+icon3d,picture(m?,m?)>"),bR:w("L<hz,r>"),eC:w("L<nI,m>"),cT:w("L<jG,D>"),dv:w("L<m,m>"),f0:w("L<m,r>"),gN:w("L<H,pC>"),gh:w("L<mv,jq<mv>>"),w:w("iC"),ei:w("iw"),g2:w("rg"),fB:w("El"),b6:w("zl"),gX:w("a7y"),dt:w("le"),ea:w("oh"),bt:w("lF"),I:w("i0"),F:w("eK"),fO:w("mv"),ff:w("uD"),fP:w("hz"),Q:w("vV"),dO:w("aqI"),a:w("cr"),C:w("aC"),dw:w("ask"),di:w("a8i"),Y:w("eP"),fz:w("+(m,m)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(m?,m)"),aH:w("+icon3d,picture(m?,m?)"),cz:w("EQ"),dB:w("dz<u>"),bJ:w("dz<m>"),_:w("e_<m>"),N:w("m"),fw:w("pY"),bO:w("as"),K:w("bq<u>"),b:w("bq<M>"),E:w("dD"),W:w("cy<m>"),ac:w("cy<H>"),ex:w("ki<lF>"),cI:w("ki<m>"),cl:w("ki<M>"),b4:w("a_<lb>"),a8:w("a_<m4>"),fR:w("a_<+(m,m)>"),co:w("e9<u>"),l:w("r"),b2:w("bW<~>"),ev:w("q_<dX>"),dT:w("bg<~>"),cQ:w("aAa"),q:w("mZ"),y:w("R"),gR:w("M"),z:w("@"),S:w("H"),at:w("ba?"),gw:w("ai<a4<m,@>>?"),aT:w("ai<i0>?"),c:w("ai<@>?"),aP:w("iw?"),af:w("i0?"),go:w("b0A?"),a6:w("a7H?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,m,m)?"),gl:w("+claimCode,qrPayload,token(m?,m,m)?"),T:w("m?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVV=new B.bI(A.ax,null,null,H.anz,null)
D.aW4=new B.da(0,-0.15)
D.aW6=new B.da(0.62,0)
D.aW9=new B.da(-0.35,-0.45)
D.aWj=new B.da(0.9,-0.85)
D.aXC=new B.bp(H.Sm,H.Sm,A.hg,A.hg)
D.aXR=new B.ay(A.b6,1,A.q,-1)
D.bgq=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aY2=new B.ay(D.bgq,1,A.q,-1)
D.aYe=new B.ay(A.aE,1.5,A.q,-1)
D.aYj=new B.ay(A.b6,1.6,A.q,-1)
D.aYz=new B.ay(A.aE,1.4,A.q,-1)
D.aZW=new B.o(null,null,null,null,null,L.Gw,A.a6)
D.bVO=new B.a8(A.a3,A.a8,A.x,G.a2M,null,null)
D.b_3=new B.o(null,null,null,null,null,D.bVO,A.a6)
D.aaL=new B.o(A.az,null,null,A.t_,null,null,A.n)
D.bav=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bgn=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cT0=w([D.bav,D.bgn],x.O)
D.eeR=new B.bT(A.A,0.5,A.x,null,0,D.cT0,null,null)
D.b_m=new B.o(null,null,null,null,null,D.eeR,A.a6)
D.WO=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aYP=new B.bO(P.uW,A.Y,A.Y,A.Y)
D.b_o=new B.o(D.WO,null,D.aYP,null,null,null,A.n)
D.bXz=new B.a8(A.a3,A.a8,A.x,A.Q2,null,null)
D.b_v=new B.o(null,null,null,null,null,D.bXz,A.a6)
D.aci=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b_y=new B.o(D.aci,null,null,A.qA,null,null,A.n)
D.b_C=new B.o(A.jW,null,null,null,null,null,A.a6)
D.b_F=new B.o(Z.adm,null,H.aaq,A.ma,null,null,A.n)
D.DT=new B.o(A.dN,null,null,null,null,null,A.a6)
D.b_L=new B.o(null,null,null,null,null,E.vT,A.a6)
D.cXS=w([E.aeg,A.bY],x.O)
D.bXa=new B.a8(A.b_,A.b4,A.x,D.cXS,null,null)
D.b_Q=new B.o(null,null,null,A.ma,null,D.bXa,A.n)
D.d7j=w([A.bj,A.dN,A.jU],x.O)
D.a0W=new B.a8(A.ax,A.aC,A.x,D.d7j,null,null)
D.b02=new B.o(null,null,null,null,null,D.a0W,A.n)
D.b03=new B.o(D.aci,null,null,A.kK,null,null,A.n)
D.cnJ=w([A.di,A.bj],x.O)
D.bX1=new B.a8(A.ax,A.aC,A.x,D.cnJ,null,null)
D.b07=new B.o(null,null,null,null,null,D.bX1,A.n)
D.b0h=new B.o(null,null,null,null,null,G.u5,A.a6)
D.b0B=new B.o(A.aei,null,null,null,null,null,A.a6)
D.bbj=new B.w(0.5647058823529412,0,0,0,A.t)
D.aaV=new B.ac(0,A.G,D.bbj,A.RS,28)
D.b2J=new B.aVs()
D.b3h=new C.cqg()
D.b3t=new C.b9x()
D.abq=new B.cp(A.A,null,null,A.a0L,null)
D.b60=new B.fj(null,null,null,null,null,E.n1,null,null,null,null)
D.b4_=new B.cp(A.A,null,null,D.b60,null)
D.bGz=new B.ae(A.dW,28,A.c,null,null,null)
D.b4t=new B.cp(A.A,null,null,D.bGz,null)
D.b5Y=new B.fj(2,null,null,null,null,A.c_,null,null,null,null)
D.b4P=new B.cp(A.A,null,null,D.b5Y,null)
D.bGU=new B.ae(L.NE,40,A.bB,null,null,null)
D.b4Q=new B.cp(A.A,null,null,D.bGU,null)
D.b6R=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b73=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b7r=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b7x=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b82=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b8i=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b8j=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.KB=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b8J=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b8P=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.acB=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b9z=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.bak=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.acP=new B.w(1,1,1,0.9725490196078431,A.t)
D.baE=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.baP=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.baS=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.bb3=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bbo=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bcL=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Wy=new B.w(0.8509803921568627,0,0,0,A.t)
D.bcT=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bd_=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.adE=new B.w(0.6,0,0,0,A.t)
D.adG=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bem=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.tk=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.beM=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bfa=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bfy=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aet=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.WY=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AD=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.L9=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.jb=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aeS=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.X7=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.biT=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bjm=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bjA=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Xs=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bkH=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xk=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bla=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.blt=new B.hH(A.b2,!0,null,null)
D.f9P=new B.G(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzB=new B.x("Bio link",null,D.f9P,null,null,null,null,null,null,null,null,null)
D.b4J=new B.cp(A.A,null,null,D.fzB,null)
D.blJ=new B.hH(A.VW,!0,D.b4J,null)
D.Ly=new C.a3s(0,"none")
D.afX=new C.a3s(1,"deflate")
D.afY=new C.a3s(2,"bzip2")
D.bmF=new B.km(0.165,0.84,0.44,1)
D.cYb=w([A.cg,A.dQ,A.aE],x.O)
D.bWi=new B.a8(A.ax,A.aC,A.x,D.cYb,null,null)
D.b_0=new B.o(null,null,null,null,null,D.bWi,A.n)
D.bPL=new B.ae(A.eS,null,A.ad,null,null,null)
D.b5k=new B.cp(A.A,null,null,D.bPL,null)
D.bnb=new B.kP(D.b_0,A.be,D.b5k,null)
D.bj8=new B.w(0.058823529411764705,1,1,1,A.t)
D.d0l=w([A.bF,A.qL,A.qL,D.bj8],x.O)
D.cEU=w([0,0.32,0.7,1],x.x)
D.bWR=new B.a8(A.ax,A.aC,A.x,D.d0l,D.cEU,null)
D.aZQ=new B.o(null,null,null,null,null,D.bWR,A.n)
D.bnh=new B.kP(D.aZQ,A.be,null,null)
D.boj=new B.mj(1,1,null,null,null,A.bo,null)
D.bom=new B.mj(1,null,null,null,null,D.X7,null)
D.boQ=new B.ba(125e4)
D.boW=new B.ba(17e4)
D.bp5=new B.ba(35964e8)
D.bpb=new B.ba(55e4)
D.bpf=new B.ba(68e4)
D.bpG=new B.ic(0,0,0,5)
D.bpX=new B.Q(0,16,16,0)
D.bq6=new B.Q(0,36,0,36)
D.bqd=new B.Q(0,54,0,0)
D.bqk=new B.Q(10,0,10,3)
D.bqv=new B.ic(10,16,10,10)
D.bqH=new B.Q(10,6,4,6)
D.bqK=new B.Q(10,8,10,6)
D.agV=new B.Q(11,8,11,11)
D.bqO=new B.Q(12,0,12,24)
D.br_=new B.Q(12,12,12,4)
D.br2=new B.Q(12,12,8,12)
D.brh=new B.Q(12,8,8,12)
D.brE=new B.Q(14,14,14,0)
D.brJ=new B.Q(14,14,14,90)
D.bs1=new B.Q(16,10,16,16)
D.bs2=new B.Q(16,10,16,20)
D.ahK=new B.Q(16,6,16,28)
D.bsB=new B.Q(18,0,18,10)
D.bsD=new B.Q(18,0,18,30)
D.bsF=new B.Q(18,10,18,12)
D.bsG=new B.Q(18,10,18,14)
D.bsX=new B.Q(18,16,14,18)
D.bt1=new B.Q(18,18,18,12)
D.bt7=new B.Q(18,26,18,12)
D.btc=new B.Q(18,34,18,34)
D.btd=new B.Q(18,4,18,14)
D.btj=new B.Q(18,8,18,24)
D.btA=new B.Q(20,16,14,4)
D.btF=new B.Q(20,18,12,4)
D.btK=new B.Q(20,20,12,20)
D.btN=new B.Q(20,22,20,20)
D.btS=new B.Q(20,6,20,6)
D.bu1=new B.Q(22,18,22,18)
D.bu9=new B.Q(22,24,22,0)
D.buc=new B.Q(22,24,22,4)
D.buk=new B.Q(22,60,22,22)
D.buq=new B.Q(24,24,24,22)
D.buA=new B.Q(26,10,60,10)
D.buH=new B.Q(28,44,28,44)
D.buY=new B.Q(32,44,32,44)
D.bv5=new B.Q(38,30,38,20)
D.bva=new B.Q(4,0,0,6)
D.bvm=new B.ic(4,4,4,4)
D.bvM=new B.ic(6,5,6,5)
D.bvQ=new B.Q(6,6,8,6)
D.bw0=new B.Q(8,14,8,14)
D.bw1=new B.Q(8,22,8,22)
D.bw9=new B.Q(8,6,12,6)
D.bwi=new B.Q(8,8,8,4)
D.aiE=new B.Q(9,9,9,6)
D.bwt=new B.ic(2.5,2.5,2.5,2.5)
D.bwu=new B.Q(10.5,0,10.5,0)
D.bwv=new B.Q(7,1.5,7,1.5)
D.cQ9=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bwL=new B.yK(null,null,D.cQ9,A.Ah)
D.cNf=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bwM=new B.yK(null,null,D.cNf,A.Ah)
D.aQs=new B.G(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyV=new B.x("WORD DESIGN",null,D.aQs,null,null,null,null,null,null,null,null,null)
D.bxk=new B.bC(1,A.bh,D.fyV,null)
D.fyB=new B.x("Slides database",null,Ab.qo,null,null,null,null,null,null,null,null,null)
D.fvR=new B.x("Admin only \xb7 keep as many as you like",null,U.aPW,null,null,null,null,null,null,null,null,null)
D.dff=w([D.fyB,A.bD,D.fvR],x.p)
D.bm8=new B.fl(A.ag,A.e,A.j,A.F,null,A.p,null,0,D.dff,null)
D.bxn=new B.bC(1,A.bh,D.bm8,null)
D.fqo=new B.x("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bxq=new B.bC(1,A.bh,D.fqo,null)
D.f7I=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAQ=new B.x("TALK TO THE EDITOR",null,D.f7I,null,null,null,null,null,null,null,null,null)
D.bxH=new B.bC(1,A.bh,D.fAQ,null)
D.fke=new B.x("Tell the AI what to change",null,Ab.qo,null,null,null,null,null,null,null,null,null)
D.by1=new B.bC(1,A.bh,D.fke,null)
D.byT=new B.DA(!0,"video/mp4")
D.f60=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fik=new B.x("Move presentations between devices",null,D.f60,null,null,null,!1,null,null,1,null,null)
D.byX=new B.qi(A.eh,A.a3,A.f,D.fik,null)
D.fjs=new B.x("Edit in Slides",null,A.j3,null,null,null,null,null,null,null,null,null)
D.byY=new B.qi(A.eh,A.A,A.f,D.fjs,null)
D.bzc=new B.dq(1,A.cn,D.byY,null)
D.a_g=new B.a0(60988,"MaterialIcons",!1)
D.bC2=new B.a0(61352,"MaterialIcons",!1)
D.ak9=new B.a0(61531,"MaterialIcons",!1)
D.bDh=new B.a0(63062,"MaterialIcons",!1)
D.bDp=new B.a0(63109,"MaterialIcons",!1)
D.bDB=new B.a0(63206,"MaterialIcons",!1)
D.akU=new B.a0(63238,"MaterialIcons",!1)
D.a_M=new B.a0(63365,"MaterialIcons",!1)
D.a_N=new B.a0(63367,"MaterialIcons",!1)
D.a_O=new B.a0(63368,"MaterialIcons",!1)
D.al5=new B.a0(63384,"MaterialIcons",!1)
D.bE9=new B.a0(63525,"MaterialIcons",!1)
D.bEd=new B.a0(63568,"MaterialIcons",!1)
D.bEy=new B.a0(983072,"MaterialIcons",!1)
D.bEX=new B.a0(983271,"MaterialIcons",!0)
D.amd=new B.a0(983965,"MaterialIcons",!1)
D.ame=new B.a0(983966,"MaterialIcons",!1)
D.bFV=new B.a0(984592,"MaterialIcons",!1)
D.bGc=new B.ae(A.tR,16,A.aA,null,null,null)
D.bGj=new B.ae(A.mx,null,A.c,null,null,null)
D.amp=new B.ae(A.pZ,18,A.c,null,null,null)
D.bGA=new B.ae(A.Bn,18,O.lf,null,null,null)
D.bHf=new B.ae(A.jm,11,null,null,null,null)
D.bHp=new B.ae(A.a_w,null,A.eu,null,null,null)
D.bHY=new B.ae(A.r9,18,A.aA,null,null,null)
D.bI3=new B.ae(A2.BA,14,null,null,null,null)
D.bI4=new B.ae(A.e6,28,A.cb,null,null,null)
D.bIg=new B.ae(A.q_,20,A.c,null,null,null)
D.bIn=new B.ae(A.yf,null,null,null,null,null)
D.bIt=new B.ae(A.iX,18,A.hx,null,null,null)
D.bIy=new B.ae(A.lk,null,null,null,null,null)
D.bDk=new B.a0(63065,"MaterialIcons",!1)
D.bJb=new B.ae(D.bDk,15,A.c,null,null,null)
D.bDq=new B.a0(63113,"MaterialIcons",!1)
D.bJh=new B.ae(D.bDq,null,A.ad,null,null,null)
D.bJF=new B.ae(A.vA,22,A.bL,null,null,null)
D.bJZ=new B.ae(A.vB,18,null,null,null,null)
D.bK4=new B.ae(A.BD,12,A.c,null,null,null)
D.bFx=new B.a0(983687,"MaterialIcons",!1)
D.bKf=new B.ae(D.bFx,null,A.bj,null,null,null)
D.bKm=new B.ae(A.hn,null,A.bj,null,null,null)
D.bKF=new B.ae(A.oT,22,A.c,null,null,null)
D.bKJ=new B.ae(A.cD,13,A.c,null,null,null)
D.bKP=new B.ae(A.e6,26,A.ay,null,null,null)
D.bKS=new B.ae(A.re,26,A.c,null,null,null)
D.NS=new B.ae(A.jm,8,A.c,null,null,null)
D.bLa=new B.ae(A.pZ,40,A.c,null,null,null)
D.bLb=new B.ae(A.bB_,null,null,null,null,null)
D.bLf=new B.ae(A.u_,20,null,null,null,null)
D.bFw=new B.a0(983683,"MaterialIcons",!1)
D.bLp=new B.ae(D.bFw,null,A.aZ,null,null,null)
D.bLq=new B.ae(A.jm,16,A.bj,null,null,null)
D.bLL=new B.ae(A.rf,null,null,null,null,null)
D.amX=new B.ae(A.vD,22,A.c,null,null,null)
D.bLP=new B.ae(A.dW,17,A.c,null,null,null)
D.amY=new B.ae(A.jm,9,A.c,null,null,null)
D.bLU=new B.ae(A.vx,null,null,null,null,null)
D.bBg=new B.a0(57744,"MaterialIcons",!1)
D.bM0=new B.ae(D.bBg,null,null,null,null,null)
D.bM3=new B.ae(A.vx,16,null,null,null,null)
D.bG3=new B.a0(985181,"MaterialIcons",!1)
D.Gn=new B.ae(D.bG3,null,null,null,null,null)
D.bMf=new B.ae(A.lk,16,A.bL,null,null,null)
D.bFo=new B.a0(983615,"MaterialIcons",!1)
D.bMh=new B.ae(D.bFo,12,A.c,null,null,null)
D.an3=new B.ae(A.xY,16,null,null,null,null)
D.bMp=new B.ae(A.dW,21,A.c,null,null,null)
D.bMu=new B.ae(A.hn,17,A.c,null,null,null)
D.bMv=new B.ae(A.vA,null,null,null,null,null)
D.bML=new B.ae(A.a0p,20,A.aA,null,null,null)
D.bN_=new B.ae(A.o1,22,E.n1,null,null,null)
D.bN6=new B.ae(A.pY,13,A.ad,null,null,null)
D.bN8=new B.ae(A.am_,20,A.aA,null,null,null)
D.bAY=new B.a0(57495,"MaterialIcons",!1)
D.bNd=new B.ae(D.bAY,null,null,null,null,null)
D.bNh=new B.ae(A.o2,18,A.c,null,null,null)
D.bNC=new B.ae(A.u3,28,A.c,null,null,null)
D.bNM=new B.ae(D.akU,null,A.aE,null,null,null)
D.bNN=new B.ae(A.q_,22,A.c,null,null,null)
D.anc=new B.ae(A.a_c,16,null,null,null,null)
D.bOy=new B.ae(A.vA,32,A.c,null,null,null)
D.bPh=new B.ae(A.iZ,22,A.c,null,null,null)
D.bPl=new B.ae(A.re,22,A.ad,null,null,null)
D.ans=new B.ae(A.tR,null,A.c2,null,null,null)
D.bQf=new B.ae(A.tQ,18,null,null,null,null)
D.bQR=new B.ae(A.dW,18,A.bZ,null,null,null)
D.a0O=new B.ae(A.cD,18,A.aA,null,null,null)
D.bQX=new B.ae(A.alU,null,null,null,null,null)
D.bRn=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aQf,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.eZg=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bRF=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eZg,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.bS5=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.cTY=w([A.dN,A.aE],x.O)
D.bU2=new B.a8(A.a3,A.a8,A.x,D.cTY,null,null)
D.bUe=new B.a8(A.b_,A.b4,A.U1,A.auv,null,null)
D.b7h=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bbr=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.ben=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b9r=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cEW=w([D.b7h,D.bbr,D.ben,D.b9r],x.O)
D.bUx=new B.a8(A.ax,A.aC,A.x,D.cEW,A.GW,null)
D.dfm=w([A.cs,A.bC,A.b6],x.O)
D.bUz=new B.a8(A.b_,A.b4,A.U1,D.dfm,null,null)
D.dgI=w([A.bj,A.cf],x.O)
D.bUD=new B.a8(A.a3,A.a8,A.x,D.dgI,null,null)
D.dbQ=w([A.hl,A.d5,A.aF],x.O)
D.bUF=new B.a8(A.ax,A.aC,A.x,D.dbQ,null,null)
D.cZP=w([A.cY,A.fb],x.O)
D.bUJ=new B.a8(A.a3,A.a8,A.x,D.cZP,null,null)
D.dfh=w([O.lf,A.d5],x.O)
D.aod=new B.a8(A.a3,A.a8,A.x,D.dfh,null,null)
D.bc0=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dfe=w([D.bc0,D.xk,A.c_],x.O)
D.bUO=new B.a8(A.a3,A.a8,A.x,D.dfe,null,null)
D.cVA=w([A.b1,A.cZ,A.eF],x.O)
D.bUP=new B.a8(A.ax,A.aC,A.x,D.cVA,null,null)
D.O6=new B.a8(A.a3,A.a8,A.x,A.Ha,null,null)
D.bjX=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cxZ=w([D.bjX,A.c_,A.jd],x.O)
D.aoi=new B.a8(A.ax,A.aC,A.x,D.cxZ,null,null)
D.d3W=w([A.v6,A.aw,D.AD],x.O)
D.bVQ=new B.a8(A.a3,A.a8,A.x,D.d3W,null,null)
D.blb=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.baj=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bfn=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cUK=w([D.blb,D.baj,D.bfn],x.O)
D.aoj=new B.a8(A.a3,A.a8,A.x,D.cUK,null,null)
D.bc2=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bXP=w([Aw.afE,D.bc2],x.O)
D.bW_=new B.a8(A.b_,A.b4,A.x,D.bXP,null,null)
D.cSP=w([A.n0,A.bB],x.O)
D.bW3=new B.a8(A.b_,A.b4,A.x,D.cSP,null,null)
D.d8R=w([A.aE,A.dQ],x.O)
D.bW9=new B.a8(A.a3,A.a8,A.x,D.d8R,null,null)
D.aeD=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.awd=w([D.aeD,D.jb,D.KB],x.O)
D.bWB=new B.a8(A.ax,A.aC,A.x,D.awd,null,null)
D.cxR=w([A.dx,A.dL],x.O)
D.bWM=new B.a8(A.b_,A.b4,A.x,D.cxR,null,null)
D.d60=w([A.v2,Az.Eu],x.O)
D.bXB=new B.a8(A.a3,A.a8,A.x,D.d60,null,null)
D.frT=new B.x("Which Bio link?",null,A.cy,null,null,null,null,null,null,null,null,null)
D.bXM=new B.pI(null,D.frT,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yF=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a4H=new C.kS(2,"elegantNavy")
D.h2N=w([A.WW,D.jb,A.c_],x.O)
D.jK=new C.xs(0,"classic")
D.a4u=new C.jo("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a4H,4294967035,4279378237,4290283019,D.jK)
D.aFu=new C.kS(3,"elegantGold")
D.b6Q=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b7M=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.adc=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.h2f=w([D.b6Q,D.b7M,D.adc],x.O)
D.a4s=new C.jo("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aFu,4294966515,4281016592,4289102906,D.jK)
D.dBM=new C.kS(22,"goldRibbon")
D.h2b=w([A.WW,D.jb,A.hY],x.O)
D.a4l=new C.jo("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dBM,4294967035,4279378237,4291404327,D.jK)
D.dBN=new C.kS(23,"goldBaroque")
D.adQ=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.h2h=w([D.adQ,A.aw,A.jd],x.O)
D.a4m=new C.jo("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dBN,4294964964,4283053072,4292128567,D.jK)
D.dBP=new C.kS(4,"elegantEmerald")
D.b8V=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b9P=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.h2n=w([D.b8V,D.b9P,A.hY],x.O)
D.a4n=new C.jo("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dBP,4294376440,4279122734,4291404327,D.jK)
D.dBQ=new C.kS(5,"elegantBurgundy")
D.bdo=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.h2u=w([D.bdo,A.act,A.hY],x.O)
D.a4q=new C.jo("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dBQ,4294965238,4283043359,4291404327,D.jK)
D.dBJ=new C.kS(19,"goldFiligree")
D.Lg=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.h2i=w([D.Lg,A.aw,A.jd],x.O)
D.a4o=new C.jo("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dBJ,4294966259,4279378237,4292128567,D.jK)
D.dBK=new C.kS(20,"goldLaurel")
D.bjN=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.h2v=w([A.Kt,A.hY,D.bjN],x.O)
D.a4p=new C.jo("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dBK,4294966776,4282000405,4291404327,D.jK)
D.dBL=new C.kS(21,"goldCrest")
D.acl=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bjU=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.h2k=w([D.acl,A.aw,D.bjU],x.O)
D.a4t=new C.jo("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dBL,4294965484,4283053072,4292128567,D.jK)
D.dBO=new C.kS(24,"goldStar")
D.bl4=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.h2o=w([D.bl4,A.aw,D.jb],x.O)
D.a4r=new C.jo("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dBO,4294966518,4279378237,4292128567,D.jK)
D.Gy=w([D.a4u,D.a4s,D.a4l,D.a4m,D.a4n,D.a4q,D.a4o,D.a4p,D.a4t,D.a4r],x.h)
D.qb=new C.mv(0,"blank")
D.RH=new C.mv(1,"title")
D.mF=new C.mv(2,"titleContent")
D.dWp=new C.mv(3,"twoColumn")
D.CB=new C.mv(4,"section")
D.dWq=new C.mv(5,"comparison")
D.HK=new C.mv(6,"flashcard")
D.HL=new C.mv(7,"quiz")
D.HM=new C.mv(8,"worksheet")
D.aoF=w([D.qb,D.RH,D.mF,D.dWp,D.CB,D.dWq,D.HK,D.HL,D.HM],B.ax("O<mv>"))
D.axg=w([Ao.Wj,A.dL],x.O)
D.kv=w([A.c_,A.bL,A.hX,A.hI,D.AD],x.O)
D.dxF=new C.j_("fireworks","Royal Fireworks","Thank you for celebrating with us",D.axg,D.kv)
D.bk4=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bdm=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cT1=w([D.bk4,D.bdm],x.O)
D.dxw=new C.j_("confetti","Golden Confetti","Together we rise",D.cT1,D.kv)
D.cQe=w([A.nG,A.VZ],x.O)
D.dxx=new C.j_("crown","Crown of Glory","Built for our community",D.cQe,D.kv)
D.ba9=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bd1=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cWU=w([D.ba9,D.bd1],x.O)
D.u7=w([A.bJ,A.aQ,A.c,A.aL,A.ak],x.O)
D.dxr=new C.j_("aurora","Aurora Gala","A brighter future, together",D.cWU,D.u7)
D.bep=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d66=w([G.abZ,D.bep],x.O)
D.dxI=new C.j_("champagne","Champagne Toast","Cheers to every member",D.d66,D.kv)
D.dxJ=new C.j_("diamonds","Diamond Rain","Every member is a jewel",X.axT,D.u7)
D.b7D=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bcy=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.db7=w([D.b7D,D.bcy],x.O)
D.dxm=new C.j_("starburst","Golden Starburst","Thank you!",D.db7,D.kv)
D.bXV=w([A.fa,A.xc],x.O)
D.ac7=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.PH=w([A.oB,A.ir,A.ve,A.nH,D.ac7],x.O)
D.dxQ=new C.j_("balloons","Luxury Balloons","Let's celebrate",D.bXV,D.PH)
D.cPx=w([A.W7,A.w],x.O)
D.dxE=new C.j_("galaxy","Galaxy Spiral","The sky is not the limit",D.cPx,D.u7)
D.bia=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d2L=w([A.kn,D.bia],x.O)
D.dxz=new C.j_("redcarpet","Red Carpet","Tonight we shine",D.d2L,D.kv)
D.bg0=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bec=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d70=w([D.bg0,D.bec],x.O)
D.dxo=new C.j_("coins","Gold Coin Rain","Every contribution counts",D.d70,D.kv)
D.ddK=w([A.dx,A.hH],x.O)
D.dxu=new C.j_("lanterns","Sky Lanterns","Lighting the way together",D.ddK,D.kv)
D.bb7=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cNy=w([A.xe,D.bb7],x.O)
D.dxq=new C.j_("hearts","Floating Hearts","Made with love",D.cNy,D.PH)
D.b8b=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b90=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dfc=w([D.b8b,D.b90],x.O)
D.dxP=new C.j_("petals","Rose Petals","Thank you, from our hearts",D.dfc,D.PH)
D.bj6=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.dbr=w([A.le,D.bj6],x.O)
D.dxl=new C.j_("butterflies","Golden Butterflies","New beginnings",D.dbr,D.kv)
D.bfk=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cOu=w([D.bfk,A.w],x.O)
D.dxH=new C.j_("neon","Neon Night","Let's go!",D.cOu,D.u7)
D.bcf=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d91=w([A.KS,D.bcf],x.O)
D.dxK=new C.j_("disco","Disco Ball","Party time",D.d91,D.u7)
D.bfS=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d8z=w([A.hl,D.bfS],x.O)
D.dxp=new C.j_("sunrise","Golden Sunrise","A new day for our community",D.d8z,D.kv)
D.d8b=w([A.qO,A.dL],x.O)
D.dxL=new C.j_("pearls","Ocean Pearls","Deep roots, bright future",D.d8b,D.u7)
D.bae=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d8q=w([D.bae,A.dL],x.O)
D.dxO=new C.j_("snow","Winter Gala","Warm wishes to all",D.d8q,D.u7)
D.b7_=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b7X=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.de8=w([D.b7_,D.b7X],x.O)
D.dxD=new C.j_("laurel","Laurel Victory","We did it together",D.de8,D.kv)
D.b6P=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bcY=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cME=w([D.b6P,D.bcY],x.O)
D.dxN=new C.j_("ribbons","Silk Ribbons","Elegance in every step",D.cME,D.kv)
D.bdW=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cxO=w([G.AC,D.bdW],x.O)
D.dxA=new C.j_("kente","Kente Pride","Proud of our roots",D.cxO,D.kv)
D.bgz=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bjq=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cYx=w([D.bgz,D.bjq],x.O)
D.dxv=new C.j_("trophy","Trophy Shine","Winners together",D.cYx,D.kv)
D.d8w=w([Ap.KG,A.w],x.O)
D.dxn=new C.j_("shooting","Shooting Stars","Make a wish",D.d8w,D.u7)
D.b76=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.afs=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dep=w([D.b76,D.afs],x.O)
D.dxB=new C.j_("bokeh","Golden Bokeh","Shine bright",D.dep,D.kv)
D.b7s=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d3A=w([D.b7s,A.w],x.O)
D.dxt=new C.j_("orbits","Golden Orbits","Always moving forward",D.d3A,D.kv)
D.bj7=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d0e=w([A.ad8,D.bj7],x.O)
D.dxy=new C.j_("flowers","Blooming Garden","Growing together",D.d0e,D.PH)
D.b7f=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b7R=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.ddd=w([D.b7f,D.b7R],x.O)
D.dxs=new C.j_("music","Music Party","Celebrate with us",D.ddd,D.u7)
D.b8K=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bjQ=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cNK=w([D.b8K,D.bjQ],x.O)
D.dxM=new C.j_("mandala","Royal Mandala","Harmony and unity",D.cNK,D.kv)
D.d0j=w([G.AC,D.afs],x.O)
D.dxG=new C.j_("sparklers","Golden Sparklers","Light up the night",D.d0j,D.kv)
D.dxC=new C.j_("city","City Lights","The whole city celebrates",D.axg,D.kv)
D.GH=w([D.dxF,D.dxw,D.dxx,D.dxr,D.dxI,D.dxJ,D.dxm,D.dxQ,D.dxE,D.dxz,D.dxo,D.dxu,D.dxq,D.dxP,D.dxl,D.dxH,D.dxK,D.dxp,D.dxL,D.dxO,D.dxD,D.dxN,D.dxA,D.dxv,D.dxn,D.dxB,D.dxt,D.dxy,D.dxs,D.dxM,D.dxG,D.dxC],B.ax("O<j_>"))
D.eke=new B.z("","No ring")
D.ezo=new B.z("platinum","Platinum")
D.ew2=new B.z("glow","Glow")
D.enH=new B.z("double","Double line")
D.emB=new B.z("framed","Gallery frame")
D.ejQ=new B.z("rosegold","Rose gold")
D.ewO=new B.z("jewels","Jeweled")
D.ett=new B.z("aurora","Aurora")
D.BW=w([D.eke,A.a5X,D.ezo,D.ew2,I.aLY,D.enH,A.a5Z,D.emB,D.ejQ,D.ewO,D.ett],x.L)
D.chk=w([D.a4o,D.a4p,D.a4t,D.a4l,D.a4m,D.a4r],x.h)
D.bMD=new B.ae(G.ajK,16,null,null,null,null)
D.b24=new B.vq(A.bg,D.bMD,null,x.U)
D.bBp=new B.a0(58027,"MaterialIcons",!1)
D.bGi=new B.ae(D.bBp,16,null,null,null,null)
D.b22=new B.vq(A.L,D.bGi,null,x.U)
D.bBq=new B.a0(58030,"MaterialIcons",!1)
D.bKl=new B.ae(D.bBq,16,null,null,null,null)
D.b25=new B.vq(A.dM,D.bKl,null,x.U)
D.cnw=w([D.b24,D.b22,D.b25],B.ax("O<vq<pY>>"))
D.cv9=w([A.AH,A.hi],x.O)
D.cva=w([A.b1,A.bk,A.eF],x.O)
D.Pu=w([A.bL,A.hI,A.hX,A.aw,A.nH],x.O)
D.cxU=w([A.c_,D.jb,D.KB],x.O)
D.cyr=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ehI=new B.z(4278913286,4280030216)
D.ei_=new B.z(4279373061,4278518787)
D.ei6=new B.z(4279898630,4278847235)
D.cXW=w([D.ehI,D.ei_,D.ei6],x.n)
D.cTH=w(["\u265b","\u269c","\u2726"],x.s)
D.dBH=new C.xu("Royal Onyx & Gold",D.cXW,4292128567,4294370209,4294965479,3874020544,D.cTH)
D.ehv=new B.z(4278326799,4278598442)
D.ehx=new B.z(4278395929,4278258953)
D.ehE=new B.z(4278599728,4278327826)
D.ddB=w([D.ehv,D.ehx,D.ehE],x.n)
D.cOm=w(["\u269c","\u2756","\u2727"],x.s)
D.dBE=new C.xu("Imperial Emerald",D.ddB,4293050997,4294699968,4294180856,3872254170,D.cOm)
D.ehy=new B.z(4278455076,4278918747)
D.ehD=new B.z(4278587439,4278322714)
D.ehR=new B.z(4279051376,4278455076)
D.dbM=w([D.ehy,D.ehD,D.ehR],x.n)
D.d4c=w(["\u2654","\u2726","\u2748"],x.s)
D.dBy=new C.xu("Sapphire Crown",D.dbM,4291417834,4294967295,4294310143,3871986666,D.d4c)
D.ei4=new B.z(4279894534,4283041554)
D.eig=new B.z(4281008906,4279042307)
D.eio=new B.z(4284221976,4279894534)
D.dhh=w([D.ei4,D.eig,D.eio],x.n)
D.cPG=w(["\u265b","\u2766","\u2726"],x.s)
D.dBA=new C.xu("Ruby Throne",D.dhh,4293378685,4294963145,4294964466,3874213833,D.cPG)
D.ehZ=new B.z(4279371039,4281995100)
D.ei8=new B.z(4280092723,4278714896)
D.eil=new B.z(4283045242,4279371039)
D.ddZ=w([D.ehZ,D.ei8,D.eil],x.n)
D.dc7=w(["\u2655","\u2756","\u2727"],x.s)
D.dBF=new C.xu("Amethyst Palace",D.ddZ,4293314984,4294963421,4294702591,3873229802,D.dc7)
D.ehA=new B.z(4278519045,4280032287)
D.ehS=new B.z(4279111184,4278321666)
D.eid=new B.z(4280492839,4278716426)
D.daF=w([D.ehA,D.ehS,D.eid],x.n)
D.d2y=w(["\u2726","\u25c6","\u2742"],x.s)
D.dBC=new C.xu("Obsidian & Platinum",D.daF,4293256418,4294967295,4294638330,3872378836,D.d2y)
D.ei5=new B.z(4279896588,4282194463)
D.eie=new B.z(4280553487,4279043334)
D.eim=new B.z(4283048488,4279896588)
D.d22=w([D.ei5,D.eie,D.eim],x.n)
D.dfA=w(["\u2766","\u273f","\u2727"],x.s)
D.dBz=new C.xu("Rose Gold Velvet",D.d22,4293440672,4294960345,4294964979,3874214602,D.dfA)
D.ehB=new B.z(4278520340,4279180595)
D.ehG=new B.z(4278718495,4278322443)
D.ei2=new B.z(4279510591,4278520340)
D.cEC=w([D.ehB,D.ehG,D.ei2],x.n)
D.d3e=w(["\u269c","\u2736","\u2756"],x.s)
D.dBD=new C.xu("Midnight Brass",D.cEC,4291405148,4293975208,4294439914,3872837564,D.d3e)
D.eiB=new B.z(4294703086,4293780428)
D.eix=new B.z(4294307549,4293187253)
D.eiC=new B.z(4294966517,4293977807)
D.cRM=w([D.eiB,D.eix,D.eiC],x.n)
D.d3D=w(["\u269c","\u265b","\u2726"],x.s)
D.dBG=new C.xu("Ivory Marble & Gold",D.cRM,4289760572,4286209048,4280951062,3863625518,D.d3D)
D.ehM=new B.z(4278978566,4280555024)
D.ei1=new B.z(4279504137,4278518530)
D.eii=new B.z(4281211923,4278978566)
D.cPw=w([D.ehM,D.ei1,D.eii],x.n)
D.dcR=w(["\u2742","\u2726","\u265c"],x.s)
D.dBB=new C.xu("Onyx & Copper",D.cPw,4291856987,4294365880,4294964718,3873885630,D.dcR)
D.cyz=w([D.dBH,D.dBE,D.dBy,D.dBA,D.dBF,D.dBC,D.dBz,D.dBD,D.dBG,D.dBB],B.ax("O<xu>"))
D.cAR=w([A.aw,D.AD,A.hI],x.O)
D.epO=new B.z("Original",null)
D.epW=new B.z("Wide 16:9",1.7777777777777777)
D.esa=new B.z("Landscape 3:2",1.5)
D.epg=new B.z("Photo 4:3",1.3333333333333333)
D.er_=new B.z("Square",1)
D.eD0=new B.z("Portrait 3:4",0.75)
D.auE=w([D.epO,D.epW,D.esa,D.epg,D.er_,D.eD0],B.ax("O<+(m,M?)>"))
D.auF=w([A.hI,A.bW,A.b9,A.bt],x.O)
D.esl=new B.z("","Original")
D.eud=new B.z("circle","Circle")
D.eA8=new B.z("rounded","Rounded")
D.eB2=new B.z("triangle","Triangle")
D.ewh=new B.z("hexagon","Hexagon")
D.euD=new B.z("diamond","Diamond")
D.ets=new B.z("arch","Arch")
D.C0=w([D.esl,D.eud,D.eA8,D.eB2,D.ewh,D.euD,D.ets],x.L)
D.dwL=new C.lb("classic_blue","Classic Blue","Normal",A.bj,A.c,A.ko,A.di,A.aK)
D.dx0=new C.lb("campus_green","Campus Green","Normal",A.aZ,A.mZ,A.th,A.h7,A.ei)
D.dwS=new C.lb("warm_sand","Warm Sand","Normal",A.dT,A.hX,A.bL,A.ia,A.nL)
D.dwZ=new C.lb("slate_minimal","Slate Minimal","Normal",A.bv,A.aQ,A.aL,A.M,A.aK)
D.dwK=new C.lb("coral_fresh","Coral Fresh","Normal",A.cg,A.it,A.qI,A.jX,A.ta)
D.dx_=new C.lb("lavender_calm","Lavender Calm","Normal",A.b6,A.pu,A.Ar,A.py,A.j8)
D.dwM=new C.lb("ocean_breeze","Ocean Breeze","Normal",A.fb,A.qU,A.t6,A.tc,A.nM)
D.aeJ=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dwX=new C.lb("berry_pop","Berry Pop","Normal",A.fj,D.aeJ,A.ki,G.Xq,A.EP)
D.dwN=new C.lb("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.ki,A.cr)
D.dwW=new C.lb("executive_navy","Executive Navy","Professional",A.d3,A.ae4,A.di,A.lc,A.bJ)
D.dwU=new C.lb("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bo,A.M,A.aQ,A.cr)
D.dwO=new C.lb("corporate_steel","Corporate Steel","Professional",A.mX,A.M,A.mj,A.f6,A.bJ)
D.dwR=new C.lb("gold_luxe","Gold Luxe","Luxury",A.mW,A.dH,A.oA,A.lH,A.bL)
D.bfW=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dwV=new C.lb("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bfW,A.Xe,A.ir,A.nH)
D.dwY=new C.lb("platinum_night","Platinum Night","Luxury",A.cr,A.dL,A.bo,A.aQ,A.aL)
D.dx1=new C.lb("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pB,A.eZ,A.pI,A.jw)
D.dwJ=new C.lb("royal_purple","Royal Purple","Luxury",A.mY,A.Wp,A.j8,A.ki,A.Kr)
D.dwT=new C.lb("neon_pitch","Neon Pitch","Bold",A.b9,A.dL,A.M,A.b3,A.aL)
D.dwQ=new C.lb("crimson_impact","Crimson Impact","Bold",A.bB,A.kn,A.eq,A.ts,A.f4)
D.dwP=new C.lb("sunset_gallery","Sunset Gallery","Bold",A.fk,A.ta,A.jX,A.qI,A.mh)
D.GQ=w([D.dwL,D.dx0,D.dwS,D.dwZ,D.dwK,D.dx_,D.dwM,D.dwX,D.dwN,D.dwW,D.dwU,D.dwO,D.dwR,D.dwV,D.dwY,D.dx1,D.dwJ,D.dwT,D.dwQ,D.dwP],B.ax("O<lb>"))
D.cMl=w([A.c_,D.jb],x.O)
D.d2i=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.ete=new B.z("Faces & people",D.d2i)
D.cAV=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.egv=new B.z("Ideas & work",D.cAV)
D.cUc=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.ewm=new B.z("Nature",D.cUc)
D.d2r=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.epM=new B.z("Places & things",D.d2r)
D.cXv=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.etx=new B.z("Symbols",D.cXv)
D.cMr=w([D.ete,D.egv,D.ewm,D.epM,D.etx],B.ax("O<+(m,ai<m>)>"))
D.b7k=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cMP=w([A.c_,D.adc,D.b7k],x.O)
D.b1q=new B.ac(0,A.G,A.Ko,A.aGj,40)
D.b16=new B.ac(0,A.G,A.nJ,A.em,8)
D.cN0=w([D.b1q,D.b16],x.V)
D.cNu=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.av3=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a2_=w([A.hI,A.eF,A.bB,A.az,A.cg],x.O)
D.cOg=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.adq=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cOr=w([A.X4,D.adq,A.X4],x.O)
D.cOx=w([A.hY,D.jb,D.KB],x.O)
D.epz=new B.z(A.bg,D.a_N)
D.eqV=new B.z(A.L,D.a_M)
D.ekU=new B.z(A.dM,D.a_O)
D.cPr=w([D.epz,D.eqV,D.ekU],B.ax("O<+(pY,a0)>"))
D.cQ=new C.Ix(0,"text")
D.lu=new C.Ix(1,"image")
D.f0=new C.Ix(2,"shape")
D.RG=new C.Ix(3,"pdf")
D.l2=new C.Ix(4,"signature")
D.a4O=new C.Ix(5,"bio")
D.cQj=w([D.cQ,D.lu,D.f0,D.RG,D.l2,D.a4O],B.ax("O<Ix>"))
D.cQk=w([A.bn,A.cF],B.ax("O<Hs>"))
D.cQV=w(["School","Documents","Sign & present"],x.s)
D.b1v=new B.ac(0,A.G,A.afi,A.uq,28)
D.cRe=w([D.b1v],x.V)
D.cRx=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.PP=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.avs=w([A.hI,A.EO,A.aL,A.c,A.oB,A.aw],x.O)
D.eCp=new B.z(0.1,0.08)
D.ewk=new B.z(0.3,0.05)
D.ekr=new B.z(0.55,0.1)
D.eoz=new B.z(0.8,0.06)
D.erE=new B.z(0.92,0.16)
D.er9=new B.z(0.2,0.2)
D.ep1=new B.z(0.7,0.22)
D.ev_=new B.z(0.05,0.4)
D.es2=new B.z(0.95,0.45)
D.el8=new B.z(0.12,0.7)
D.enl=new B.z(0.88,0.75)
D.ent=new B.z(0.4,0.9)
D.eiR=new B.z(0.65,0.93)
D.eoc=new B.z(0.25,0.97)
D.epw=new B.z(0.85,0.9)
D.elY=new B.z(0.5,0.04)
D.cSX=w([D.eCp,D.ewk,D.ekr,D.eoz,D.erE,D.er9,D.ep1,D.ev_,D.es2,D.el8,D.enl,D.ent,D.eiR,D.eoc,D.epw,D.elY],x.G)
D.cT3=w([A.c,A.hi,A.aR,A.aV],x.O)
D.dY1=new C.jG("office_blue","Office Blue",A.bj,A.di,A.aK,A.c,A.ko)
D.dYc=new C.jG("campus_green","Campus Green",A.aZ,A.h7,A.ei,A.mZ,A.th)
D.dY2=new C.jG("sunset","Sunset",A.fk,A.jX,A.nL,A.it,A.qI)
D.dY3=new C.jG("midnight","Midnight",A.aE,A.ki,A.cr,A.M,A.dx)
D.dYe=new C.jG("classic","Classic",A.d5,A.dH,A.lI,A.hX,A.h5)
D.dYb=new C.jG("rose_gold","Rose Gold",A.hi,A.xg,A.xe,A.ve,A.AH)
D.dXX=new C.jG("ocean_teal","Ocean Teal",A.fb,A.tc,A.nM,A.qU,A.t6)
D.dXW=new C.jG("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aQ,A.aL)
D.dXV=new C.jG("neon_night","Neon Night",A.b9,A.b3,A.aL,A.dL,A.M)
D.dY6=new C.jG("lavender","Lavender",A.b6,A.py,A.j8,A.pu,A.Ar)
D.dY8=new C.jG("coral","Coral",A.cg,A.jX,A.ta,A.it,A.mh)
D.dXY=new C.jG("forest","Forest",A.hk,A.dY,A.cC,A.lJ,A.eu)
D.dXZ=new C.jG("berry","Berry",A.fj,G.Xq,A.EP,D.aeJ,A.ki)
D.dY5=new C.jG("sand","Sand",A.dT,A.ia,A.nL,A.hX,A.bL)
D.dYa=new C.jG("ice","Ice",A.mX,A.KT,A.aK,A.mU,A.f6)
D.dY0=new C.jG("charcoal","Charcoal",A.ak,A.aQ,A.cr,A.bo,A.M)
D.dXU=new C.jG("mint","Mint",A.aV,A.fw,A.h7,A.lJ,A.pI)
D.dY9=new C.jG("crimson","Crimson",A.bB,A.n0,A.kn,A.EM,A.ts)
D.b9O=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dY4=new C.jG("gold","Gold",A.mW,A.v2,A.oA,D.b9O,A.lH)
D.dY7=new C.jG("aqua","Aqua",A.bN,A.EC,A.ox,A.pw,A.oC)
D.dY_=new C.jG("plum","Plum",A.mY,A.xc,A.EP,A.Er,A.qS)
D.dYd=new C.jG("steel","Steel",A.d3,A.di,A.bo,A.ko,A.lc)
D.a2f=w([D.dY1,D.dYc,D.dY2,D.dY3,D.dYe,D.dYb,D.dXX,D.dXW,D.dXV,D.dY6,D.dY8,D.dXY,D.dXZ,D.dY5,D.dYa,D.dY0,D.dXU,D.dY9,D.dY4,D.dY7,D.dY_,D.dYd],B.ax("O<jG>"))
D.cTo=w([A.c_,A.jd],x.O)
D.RI=new C.hz(10,"rotate3d")
D.HO=new C.hz(8,"flip")
D.aFN=new C.hz(19,"spiral")
D.qc=new C.hz(16,"bounce")
D.aFQ=new C.hz(9,"flipVertical")
D.cTp=w([D.RI,D.HO,D.aFN,D.qc,D.aFQ],x.i)
D.e7=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cTK=w([0.62,1],x.x)
D.cUk=w([0,0.32,0.68,1],x.x)
D.mG=new C.hz(6,"zoom")
D.uk=new C.hz(4,"slideUp")
D.uj=new C.hz(2,"slideLeft")
D.cUt=w([D.mG,D.HO,D.uk,D.RI,D.uj],x.i)
D.cUY=w([A.bW,A.hi,A.ir,A.hI,A.c],x.O)
D.b1l=new B.ac(0,A.G,D.adE,A.uq,30)
D.cVF=w([D.b1l],x.V)
D.e6G=new B.u(0,-2.5)
D.e6w=new B.u(-2.5,0)
D.e5e=new B.u(2.5,0)
D.cVI=w([A.RY,A.a5a,A.aGP,A.a59,D.e6G,I.aGL,D.e6w,D.e5e],x.dN)
D.GY=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cWa=w([23,114,69,56,80,144],x.t)
D.cWC=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cX1=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cYB=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cYF=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bf=new C.uD(0,"rectangle")
D.eL=new C.uD(1,"circle")
D.l3=new C.uD(6,"hexagon")
D.cYS=w([D.bf,D.eL,D.l3],x.m)
D.o8=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aeR=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cZq=w([D.aeR,A.dY],x.O)
D.ekC=new B.z("","Classic")
D.ej5=new B.z("caps","Bold caps")
D.ev2=new B.z("elegant","Elegant")
D.eAr=new B.z("shadow","Shadow")
D.eoV=new B.z("neon","Neon glow")
D.ez4=new B.z("outline","Outline")
D.eyg=new B.z("marker","Highlighter")
D.eAC=new B.z("stamp","Stamp")
D.eA3=new B.z("retro","Retro")
D.enT=new B.z("threed","3D")
D.evz=new B.z("fire","Fire")
D.eww=new B.z("ice","Ice")
D.euc=new B.z("chalk","Chalk")
D.euh=new B.z("comic","Comic")
D.eAE=new B.z("sunset","Sunset")
D.eBM=new B.z("softglow","Soft glow")
D.exu=new B.z("lowercase","Lowercase")
D.euK=new B.z("double","Echo")
D.eBV=new B.z("whisper","Whisper")
D.awl=w([D.ekC,D.ej5,D.ev2,D.eAr,D.eoV,D.ez4,D.eyg,D.eAC,D.eA3,D.enT,I.aLW,D.evz,D.eww,D.euc,D.euh,A.a5X,D.eAE,D.eBM,D.exu,D.euK,D.eBV],x.L)
D.d_G=w([3,5,7,10,12,15],x.t)
D.d10=w([A.bW,A.bL,A.c,A.eA,A.cs],x.O)
D.dop=new C.tf(10,"cardWorld")
D.Ct=new C.Bk(3,"rounded")
D.dEI=new C.le("world","NGMY World",D.dop,D.Ct,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.doq=new C.tf(11,"cardSplit")
D.dEE=new C.le("business","Business Wire",D.doq,D.Ct,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dor=new C.tf(12,"cardBreaking")
D.dER=new C.le("breaking","Breaking Red",D.dor,D.Ct,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dos=new C.tf(13,"cardFeature")
D.dEK=new C.le("feature","Tech Feature",D.dos,D.Ct,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aEj=new C.tf(6,"circle")
D.aEd=new C.Bk(4,"circle")
D.dEO=new C.le("parchment","Royal Circle",D.aEj,D.aEd,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dED=new C.le("ocean","Blue Ocean",D.aEj,D.aEd,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dov=new C.tf(7,"rail")
D.aEc=new C.Bk(1,"double")
D.dEF=new C.le("forest","Green Leaf",D.dov,D.aEc,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aEg=new C.tf(1,"sideBySide")
D.dET=new C.le("herald","NGMY Herald",D.aEg,D.Ct,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aEf=new C.tf(0,"classic")
D.a40=new C.Bk(9,"shadow")
D.dES=new C.le("daily","The Daily",D.aEf,D.a40,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dot=new C.tf(2,"splash")
D.aEe=new C.Bk(6,"cutCorner")
D.dEC=new C.le("tabloid","Big Tabloid",D.dot,D.aEe,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aEk=new C.tf(9,"minimal")
D.dEN=new C.le("modern","Modern Digest",D.aEk,D.Ct,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aEh=new C.tf(3,"magazine")
D.aEb=new C.Bk(0,"plain")
D.dEJ=new C.le("midnight","Midnight Edition",D.aEh,D.aEb,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dow=new C.tf(8,"banner")
D.dEL=new C.le("metro","Metro Wire",D.dow,D.aEe,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.doo=new C.Bk(8,"arch")
D.dEM=new C.le("sunrise","Sunrise Post",D.aEh,D.doo,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aEi=new C.tf(5,"scrapbook")
D.don=new C.Bk(5,"tape")
D.dEH=new C.le("neon","Neon Beat",D.aEi,D.don,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dou=new C.tf(4,"wrap")
D.dEU=new C.le("gold","Golden Press",D.dou,D.a40,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dEV=new C.le("minimal","Paper White",D.aEk,D.a40,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dEG=new C.le("gazette","Fresh Gazette",D.aEf,D.aEc,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dEQ=new C.le("times","Classic Times",D.aEg,D.aEb,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.Re=new C.Bk(2,"polaroid")
D.dEP=new C.le("scrapbook","Memory Scrapbook",D.aEi,D.Re,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a2u=w([D.dEI,D.dEE,D.dER,D.dEK,D.dEO,D.dED,D.dEF,D.dET,D.dES,D.dEC,D.dEN,D.dEJ,D.dEL,D.dEM,D.dEH,D.dEU,D.dEV,D.dEG,D.dEQ,D.dEP],B.ax("O<le>"))
D.d1c=w([0.45,1],x.x)
D.H_=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d1A=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fYK=new C.ot("Original",0,1,1,0,0,0)
D.fYO=new C.ot("Black & white",0,1.1,0,0,0,0)
D.fYB=new C.ot("Noir",-0.05,1.55,0,0,0,0)
D.fYF=new C.ot("Sepia",0,1,0.25,0.9,0,0)
D.fYE=new C.ot("Vivid",0,1.15,1.6,0,0,0)
D.fYx=new C.ot("Pop",0,1.3,1.9,0,0,0)
D.fYz=new C.ot("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fYL=new C.ot("Matte",0,0.9,0.85,0,0,0.55)
D.fYG=new C.ot("Cool",0,1.05,1,-0.8,0,0)
D.fYN=new C.ot("Warm",0.03,1.05,1.1,0.8,0,0)
D.fYy=new C.ot("Golden hour",0.04,1,1.25,1,0,0)
D.fYD=new C.ot("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fYM=new C.ot("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fYC=new C.ot("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fYI=new C.ot("Retro",0,0.9,0.7,0.4,0,0.35)
D.fYH=new C.ot("Forest",0,1,1.2,-0.1,-0.45,0)
D.fYJ=new C.ot("Rose",0,1,1.1,0.3,0.4,0)
D.fYA=new C.ot("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d1B=w([D.fYK,D.fYO,D.fYB,D.fYF,D.fYE,D.fYx,D.fYz,D.fYL,D.fYG,D.fYN,D.fYy,D.fYD,D.fYM,D.fYC,D.fYI,D.fYH,D.fYJ,D.fYA],B.ax("O<ot>"))
D.b6L=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d1C=w([D.aeR,A.dY,D.b6L],x.O)
D.ego=new B.z(0.12,0.3)
D.ewH=new B.z(0.26,0.75)
D.euZ=new B.z(0.8,0.22)
D.eAM=new B.z(0.9,0.7)
D.ext=new B.z(0.5,0.15)
D.ez6=new B.z(0.65,0.85)
D.ems=new B.z(0.08,0.85)
D.d1O=w([D.ego,D.ewH,D.euZ,D.eAM,D.ext,D.ez6,D.ems],x.G)
D.awx=w([A.b9,A.bW,A.bt,A.b1],x.O)
D.d2C=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d2O=w([A.c,A.f6,A.dv,A.v4],x.O)
D.ba0=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d3M=w([D.ba0,D.adq],x.O)
D.d3N=w([A.v6,A.aw],x.O)
D.d41=w([0,0.25,0.75,1],x.x)
D.d43=w([A.x4,A.oB],x.O)
D.aFn=new C.kS(10,"kenteSunset")
D.h2d=w([D.adQ,A.jS,A.aw],x.O)
D.dzZ=new C.jo("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aFn,4294964964,4282000405,4279983648,D.jK)
D.aFo=new C.kS(11,"indigoMudcloth")
D.b7I=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.h2r=w([D.b7I,A.adn,A.hY],x.O)
D.dA6=new C.jo("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aFo,4294439140,4279903102,4279903102,D.jK)
D.aFp=new C.kS(12,"adinkraRoyal")
D.bkx=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.h2s=w([D.acl,D.bkx,A.aw],x.O)
D.dA8=new C.jo("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aFp,4294965484,4285218591,4287322667,D.jK)
D.aFq=new C.kS(13,"nileLotus")
D.bgQ=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bdB=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.h2x=w([D.bgQ,D.bdB,A.hY],x.O)
D.dA7=new C.jo("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFq,4294244340,4279196764,4279196764,D.jK)
D.aFr=new C.kS(14,"shweshweIvory")
D.bbR=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.baI=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b8a=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.h2e=w([D.bbR,D.baI,D.b8a],x.O)
D.dA3=new C.jo("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFr,4294505710,4279970378,4291058750,D.jK)
D.rv=new C.kS(15,"certIvoryNavy")
D.h2c=w([D.Lg,D.jb,A.hY],x.O)
D.aET=new C.xs(1,"ringsNdoa")
D.dA0=new C.jo("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rv,4294966259,4279378237,4291404327,D.aET)
D.a4w=new C.xs(2,"coupleCards")
D.dzW=new C.jo("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rv,4294966259,4279378237,4291404327,D.a4w)
D.Cw=new C.kS(18,"certIvoryNavyBar")
D.ack=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.h2q=w([D.ack,D.jb,A.hY],x.O)
D.aEU=new C.xs(3,"kuhoweshaForm")
D.dzU=new C.jo("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Cw,4294966519,4279378237,4291404327,D.aEU)
D.adC=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.h2K=w([D.Lg,D.adC,A.hY],x.O)
D.a4x=new C.xs(4,"mahariPande")
D.dzX=new C.jo("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rv,4294966259,4279904068,4291404327,D.a4x)
D.aFs=new C.kS(16,"certIvoryGreen")
D.bbh=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.h2g=w([A.Kt,D.bbh,A.hY],x.O)
D.aEV=new C.xs(5,"familiaMti")
D.dA2=new C.jo("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aFs,4294966776,4280241466,4291404327,D.aEV)
D.a4y=new C.xs(6,"ndoaSafi")
D.dzV=new C.jo("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Cw,4294966519,4279378237,4291404327,D.a4y)
D.bfj=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.h2j=w([D.Lg,A.hY,D.bfj],x.O)
D.a4z=new C.xs(7,"peteWide")
D.dA_=new C.jo("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rv,4294966259,4282001936,4291404327,D.a4z)
D.dA9=new C.xs(8,"muhuriCrest")
D.dzT=new C.jo("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rv,4294966259,4279378237,4291404327,D.dA9)
D.h2t=w([D.ack,D.adC,A.hY],x.O)
D.dAa=new C.xs(9,"fomuWazi")
D.dA5=new C.jo("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Cw,4294966519,4279904068,4291404327,D.dAa)
D.aFt=new C.kS(17,"certIvoryRose")
D.bbV=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.h2w=w([D.bbV,D.aet,A.hY],x.O)
D.a4v=new C.xs(10,"upendoOrnate")
D.dA1=new C.jo("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aFt,4294965493,4286200650,4291404327,D.a4v)
D.d4s=w([D.dzZ,D.dA6,D.dA8,D.dA7,D.dA3,D.dA0,D.dzW,D.dzU,D.dzX,D.dA2,D.dzV,D.dA_,D.dzT,D.dA5,D.dA1],x.h)
D.e8=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HP=new C.vV(0,"emojis")
D.CD=new C.vV(1,"pictures")
D.HQ=new C.vV(2,"icons3d")
D.a4Q=new C.vV(3,"animations")
D.RK=new C.vV(4,"videoMotion")
D.CE=new C.vV(5,"luxe")
D.a2B=w([D.HP,D.CD,D.HQ,D.a4Q,D.RK,D.CE],B.ax("O<vV>"))
D.ezH=new B.z(A.dW,"Looks")
D.eos=new B.z(A.yr,"Light")
D.eop=new B.z(A.nh,"Colour")
D.emt=new B.z(A.y2,"Effects")
D.akO=new B.a0(63112,"MaterialIcons",!1)
D.ejl=new B.z(D.akO,"Crop")
D.d4W=w([D.ezH,D.eos,D.eop,D.emt,D.ejl],x.f2)
D.d5y=w([],x.D)
D.h2H=w([],x.L)
D.emG=new B.z("Flashcard",D.HK)
D.eqn=new B.z("Quiz",D.HL)
D.esg=new B.z("Worksheet",D.HM)
D.epr=new B.z("Notes",D.mF)
D.eqT=new B.z("Section",D.CB)
D.d6c=w([D.emG,D.eqn,D.esg,D.epr,D.eqT],B.ax("O<+(m,mv)>"))
D.dBR=new C.kS(6,"beadedPearl")
D.bef=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.h2L=w([H.Xd,D.bef,A.hY],x.O)
D.aER=new C.jo("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dBR,4294966774,4286209070,4291404327,D.jK)
D.dBS=new C.kS(7,"artDeco")
D.bi4=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bkO=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.h2J=w([D.bi4,D.bkO,A.c_],x.O)
D.aES=new C.jo("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dBS,4294440434,4280228630,4290283019,D.jK)
D.dBT=new C.kS(8,"rosetteCorners")
D.bk_=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.ba4=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bea=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.h2m=w([D.bk_,D.ba4,D.bea],x.O)
D.aEQ=new C.jo("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dBT,4294702831,4285218602,4291394365,D.jK)
D.dBU=new C.kS(9,"modernLedger")
D.h2l=w([A.c,D.jb,D.jb],x.O)
D.aEP=new C.jo("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dBU,4294967295,4279378237,4279378237,D.jK)
D.d6g=w([D.aER,D.aES,D.aEQ,D.aEP],x.h)
D.d6o=w([A.ir,A.oB],x.O)
D.cm=new C.hz(0,"none")
D.dd=new C.hz(1,"fade")
D.HN=new C.hz(3,"slideRight")
D.aFP=new C.hz(5,"slideDown")
D.dWw=new C.hz(7,"zoomOut")
D.a4P=new C.hz(11,"cube")
D.dWr=new C.hz(12,"blur")
D.aFM=new C.hz(13,"dissolve")
D.dWs=new C.hz(14,"wipeLeft")
D.dWt=new C.hz(15,"wipeRight")
D.RJ=new C.hz(17,"push")
D.dWu=new C.hz(18,"flash")
D.aFO=new C.hz(20,"swing")
D.dWv=new C.hz(21,"curtain")
D.Qn=w([D.cm,D.dd,D.uj,D.HN,D.uk,D.aFP,D.mG,D.dWw,D.HO,D.aFQ,D.RI,D.a4P,D.dWr,D.aFM,D.dWs,D.dWt,D.qc,D.RJ,D.dWu,D.aFN,D.aFO,D.dWv],x.i)
D.Qo=w([D.a4u,D.a4s,D.a4l,D.a4m,D.a4n,D.a4q,D.a4o,D.a4p,D.a4t,D.a4r,D.aER,D.aES,D.aEQ,D.aEP],x.h)
D.d6Q=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d6U=w([A.Av,A.hI,A.c_],x.O)
D.enN=new B.z(A.tT,"Design")
D.eBb=new B.z(D.al5,"Word sizes")
D.exd=new B.z(A.BJ,"Text")
D.bEN=new B.a0(983182,"MaterialIcons",!1)
D.exh=new B.z(D.bEN,"Photo")
D.eiU=new B.z(A.lp,"Logo")
D.eCn=new B.z(A.Gk,"News")
D.d6Z=w([D.enN,D.eBb,D.exd,D.exh,D.eiU,D.eCn],x.f2)
D.d7_=w(["golddust","sparkle","sheen"],x.s)
D.dXT=new C.eu("upload_pdf",L.NE,"Upload PDF")
D.dX2=new C.eu("sign_paper",A.Gh,"Sign Paper")
D.bE2=new B.a0(63438,"MaterialIcons",!1)
D.dXP=new C.eu("hd_photo",D.bE2,"HD Photo")
D.dWV=new C.eu("sharpen",E.a_y,"Sharpen")
D.dX4=new C.eu("print",L.NE,"Download PDF")
D.dXw=new C.eu("rotate",D.akO,"Rotate")
D.dXd=new C.eu("text_box",A.BJ,"Text Box")
D.dXf=new C.eu("picture",A.tX,"Picture")
D.dXb=new C.eu("title",A.yl,"Title")
D.dX7=new C.eu("subtitle",T.alF,"Subtitle")
D.dXF=new C.eu("bullets",K.a_P,"Bullet List")
D.dX8=new C.eu("numbered",A.Nt,"Numbered")
D.dXI=new C.eu("quote",A2.BA,"Quote")
D.dXk=new C.eu("citation",A.o1,"Citation")
D.dXL=new C.eu("date_stamp",Ah.a_D,"Date Stamp")
D.dXy=new C.eu("page_number",A.yk,"Page #")
D.dXC=new C.eu("header_bar",A.BL,"Header")
D.dXe=new C.eu("footer_bar",Aq.a0k,"Footer")
D.dX3=new C.eu("divider",A.tW,"Divider")
D.dX_=new C.eu("highlight",A.a_V,"Highlight")
D.dXE=new C.eu("redact",A.yo,"Redact")
D.dXr=new C.eu("callout",A.Bw,"Callout")
D.dXN=new C.eu("checkboxes",K.ak3,"Checklist")
D.dXo=new C.eu("table",A.a0h,"Table")
D.dXi=new C.eu("memo",K.a04,"Memo")
D.dXs=new C.eu("letter",A.G6,"Letter")
D.bDF=new B.a0(63259,"MaterialIcons",!0)
D.dWU=new C.eu("agenda",D.bDF,"Agenda")
D.dX5=new C.eu("toc",AA.alh,"Contents")
D.bDZ=new B.a0(63406,"MaterialIcons",!1)
D.dXp=new C.eu("sig_line",D.bDZ,"Sign Line")
D.dWN=new C.eu("initial_line",A.jl,"Initials")
D.dWQ=new C.eu("approved",A.lp,"APPROVED")
D.dXu=new C.eu("draft",A.oT,"DRAFT")
D.dXA=new C.eu("confidential",A.jm,"Confidential")
D.dXD=new C.eu("sticky",A.NL,"Sticky Note")
D.dXM=new C.eu("progress",A.alg,"Progress")
D.bFg=new B.a0(983507,"MaterialIcons",!1)
D.dX0=new C.eu("stars",D.bFg,"Star Rating")
D.dWL=new C.eu("equation",A.al7,"Equation")
D.dWW=new C.eu("timeline",A.NN,"Timeline")
D.dXj=new C.eu("two_col",A.a0l,"Two Columns")
D.dWY=new C.eu("compare",A1.a_G,"Compare")
D.dWJ=new C.eu("duplicate_el",A.fL,"Duplicate")
D.dXR=new C.eu("delete_el",A.e6,"Delete")
D.dXH=new C.eu("bring_fwd",H.al1,"Bring Front")
D.dWO=new C.eu("send_back",H.al0,"Send Back")
D.dXt=new C.eu("align_left",D.a_N,"Align L")
D.dXz=new C.eu("align_center",D.a_M,"Align C")
D.dXQ=new C.eu("align_right",D.a_O,"Align R")
D.dXc=new C.eu("word_count",A_.a_h,"Word Count")
D.dX9=new C.eu("link_text",A.hp,"Link")
D.dXx=new C.eu("phone",A.iB,"Phone")
D.dWZ=new C.eu("email",A.By,"Email")
D.dXS=new C.eu("qr_placeholder",A.jo,"QR Placeholder")
D.dWT=new C.eu("rectangle",A3.vC,"Rectangle")
D.dXn=new C.eu("circle",A.r7,"Circle")
D.dWP=new C.eu("arrow",A.iX,"Arrow")
D.dXG=new C.eu("line",A.tW,"Line")
D.dX1=new C.eu("triangle",A.a_E,"Triangle")
D.bDN=new B.a0(63318,"MaterialIcons",!1)
D.dX6=new C.eu("grayscale",D.bDN,"Grayscale")
D.dXg=new C.eu("brighten",K.akn,"Brighten")
D.dXl=new C.eu("flip_h",A.FW,"Flip H")
D.bDU=new B.a0(63348,"MaterialIcons",!1)
D.dXO=new C.eu("flip_v",D.bDU,"Flip V")
D.dXB=new C.eu("cover_page",A.pU,"Cover Page")
D.dWM=new C.eu("invoice",A.hb,"Invoice")
D.dWX=new C.eu("resume",A.ms,"Resume")
D.dXa=new C.eu("minutes",A.oN,"Minutes")
D.dWR=new C.eu("lab_report",A.NH,"Lab Report")
D.dWS=new C.eu("rubric",A.tU,"Rubric")
D.dXm=new C.eu("flashcard_tool",V.Ge,"Flashcard")
D.dXJ=new C.eu("quiz_tool",A.Gb,"Quiz Block")
D.dXq=new C.eu("worksheet_tool",M.FM,"Worksheet")
D.dXv=new C.eu("outline_share",A.NJ,"Share Outline")
D.dXK=new C.eu("export_json",D.ak9,"Export JSON")
D.dWK=new C.eu("new_slide",D.a_g,"New Slide")
D.dXh=new C.eu("present",A.q_,"Present")
D.d7p=w([D.dXT,D.dX2,D.dXP,D.dWV,D.dX4,D.dXw,D.dXd,D.dXf,D.dXb,D.dX7,D.dXF,D.dX8,D.dXI,D.dXk,D.dXL,D.dXy,D.dXC,D.dXe,D.dX3,D.dX_,D.dXE,D.dXr,D.dXN,D.dXo,D.dXi,D.dXs,D.dWU,D.dX5,D.dXp,D.dWN,D.dWQ,D.dXu,D.dXA,D.dXD,D.dXM,D.dX0,D.dWL,D.dWW,D.dXj,D.dWY,D.dWJ,D.dXR,D.dXH,D.dWO,D.dXt,D.dXz,D.dXQ,D.dXc,D.dX9,D.dXx,D.dWZ,D.dXS,D.dWT,D.dXn,D.dWP,D.dXG,D.dX1,D.dX6,D.dXg,D.dXl,D.dXO,D.dXB,D.dWM,D.dWX,D.dXa,D.dWR,D.dWS,D.dXm,D.dXJ,D.dXq,D.dXv,D.dXK,D.dWK,D.dXh],B.ax("O<eu>"))
D.d7A=w([A.cr,A.ak],x.O)
D.eis=new B.z(4286331629,4292552567)
D.eif=new B.z(4280640491,4278630100)
D.eiA=new B.z(4294538006,4292943176)
D.ehC=new B.z(4278556265,4280640491)
D.d1Y=w([D.eis,D.eif,D.eiA,D.ehC],x.n)
D.crf=w([4294626325,4280472558,4294210230],x.t)
D.dWE=new C.nI("colorful","Colorful",A.nh,D.d1Y,4294967295,3875536895,D.crf,D.mG)
D.ei3=new B.z(4279522093,4279657780)
D.eij=new B.z(4281750292,4283268111)
D.ehF=new B.z(4278603323,4279203438)
D.eik=new B.z(4282343954,4279599165)
D.cC7=w([D.ei3,D.eij,D.ehF,D.eik],x.n)
D.cqY=w([4288931381,4294829706,4287033260],x.t)
D.dWA=new C.nI("nature","Nature",A.Gi,D.cC7,4294442727,3874290891,D.cqY,D.dd)
D.ehY=new B.z(4279369771,4283178389)
D.ehV=new B.z(4279179050,4286456526)
D.eib=new B.z(4280163147,4290648157)
D.ehu=new B.z(4278322711,4285343961)
D.cTC=w([D.ehY,D.ehV,D.eib,D.ehu],x.n)
D.crb=w([4294210230,4280472558,4289170426],x.t)
D.dWy=new C.nI("vibe","Vibe",A.a_T,D.cTC,4294967295,3874869502,D.crb,D.uj)
D.eiw=new B.z(4290007817,4292552567)
D.eiq=new B.z(4286328082,4294286859)
D.eiv=new B.z(4288485197,4294538006)
D.eip=new B.z(4285343961,4293675161)
D.bYl=w([D.eiw,D.eiq,D.eiv,D.eip],x.n)
D.crg=w([4294829706,4294967295,4284999929],x.t)
D.dWz=new C.nI("celebration","Celebration",A.lk,D.bYl,4294967295,4009752557,D.crg,D.qc)
D.ehT=new B.z(4279179050,4280171146)
D.ehX=new B.z(4279310375,4280232247)
D.ehL=new B.z(4278916151,4280172719)
D.ehU=new B.z(4279179050,4281549141)
D.cMI=w([D.ehT,D.ehX,D.ehL,D.ehU],x.n)
D.cqT=w([4281908728,4294626325,4287931320],x.t)
D.dWD=new C.nI("professional","Professional",A.Bu,D.cMI,4294967295,3872118241,D.cqT,D.RJ)
D.ehP=new B.z(4278995566,4278413729)
D.ehH=new B.z(4278727492,4279137424)
D.eic=new B.z(4280171146,4278751666)
D.ehQ=new B.z(4278995566,4279590517)
D.cv2=w([D.ehP,D.ehH,D.eic,D.ehQ],x.n)
D.cqW=w([4286436348,4284410580,4294829706],x.t)
D.dWF=new C.nI("ocean","Ocean",K.a0n,D.cv2,4294967295,3873501950,D.cqW,D.uk)
D.eir=new B.z(4286328082,4294538006)
D.eit=new B.z(4286781507,4294677052)
D.ein=new B.z(4283178389,4294197086)
D.eiu=new B.z(4288295954,4294688548)
D.cIU=w([D.eir,D.eit,D.ein,D.eiu],x.n)
D.crh=w([4294829706,4294967295,4294747557],x.t)
D.dWG=new C.nI("sunset","Sunset",A.NP,D.cIU,4294967295,4009749973,D.crh,D.dd)
D.eiE=new B.z(4294967295,4294047225)
D.eiz=new B.z(4294507260,4294967295)
D.eiD=new B.z(4294967295,4293060848)
D.eiy=new B.z(4294507260,4294047225)
D.cWI=w([D.eiE,D.eiz,D.eiD,D.eiy],x.n)
D.cqR=w([4280640491,4279179050,4287931320],x.t)
D.dWC=new C.nI("minimal","Minimal",A3.vC,D.cWI,4279179050,4282865001,D.cqR,D.dd)
D.ehO=new B.z(4278979081,4280886564)
D.ei7=new B.z(4280031511,4278979081)
D.ehW=new B.z(4279308561,4281148438)
D.ehN=new B.z(4278979081,4280031511)
D.d9v=w([D.ehO,D.ei7,D.ehW,D.ehN],x.n)
D.cr4=w([4292128567,4294829706,4289241758],x.t)
D.dWH=new C.nI("elegant","Elegant",A.lT,D.d9v,4294898631,3873957348,D.cr4,D.aFM)
D.ei9=new B.z(4280159034,4282058596)
D.ehK=new B.z(4278916151,4280163147)
D.eih=new B.z(4281208933,4278916151)
D.ei0=new B.z(4279502891,4283178389)
D.dga=w([D.ei9,D.ehK,D.eih,D.ei0],x.n)
D.crd=w([4294296657,4292128567,4291081725],x.t)
D.dWB=new C.nI("royal","Royal Gold",A.iZ,D.dga,4294965222,3874084351,D.crd,D.mG)
D.ehz=new B.z(4278464302,4280163147)
D.ehJ=new B.z(4278916151,4279455306)
D.eia=new B.z(4280163147,4283040846)
D.ehw=new B.z(4278332450,4281413249)
D.d1F=w([D.ehz,D.ehJ,D.eia,D.ehw],x.n)
D.cqS=w([4281193663,4289170426,4294210230],x.t)
D.dWI=new C.nI("aurora","Aurora Glow",A.dW,D.d1F,4293983738,3869766608,D.cqS,D.dd)
D.vY=w([D.dWE,D.dWA,D.dWy,D.dWz,D.dWD,D.dWF,D.dWG,D.dWC,D.dWH,D.dWB,D.dWI],B.ax("O<nI>"))
D.beK=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d86=w([A.qL,D.beK,A.qL],x.O)
D.d8o=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d8s=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.ex6=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.enn=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.erR=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.efq=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eqw=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eoN=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.et3=new B.z("Surprise me","")
D.d8Y=w([D.ex6,D.enn,D.erR,D.efq,D.eqw,D.eoN,D.et3],x.L)
D.b8c=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.biy=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d9I=w([A.c,D.b8c,D.biy],x.O)
D.dbD=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aFl=new C.kS(0,"heritageGold")
D.bdq=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.h2M=w([D.bdq,W.adN,A.aw],x.O)
D.dA4=new C.jo("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aFl,4294570461,4284234270,4292128567,D.jK)
D.aFm=new C.kS(1,"heritageCrimson")
D.b6H=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bbS=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bio=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.h2p=w([D.b6H,D.bbS,D.bio],x.O)
D.dzY=new C.jo("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aFm,4294635750,4285213214,4292912216,D.jK)
D.dbH=w([D.a4u,D.a4s,D.dA4,D.dzY,D.a4n,D.a4q],x.h)
D.dFY=new C.rq(1,"circuit")
D.dGq=new C.m4("neural","Neural Link","Robotic",D.dFY,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dFX=new C.rq(0,"grid")
D.dGn=new C.m4("signal","Signal Grid","Robotic",D.dFX,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dG2=new C.rq(2,"hexes")
D.dG8=new C.m4("core","Core Protocol","Robotic",D.dG2,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aFJ=new C.rq(11,"diagonal")
D.dGj=new C.m4("steel","Steel Tech","Robotic",D.aFJ,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aFK=new C.rq(3,"rings")
D.dG7=new C.m4("vault","Vault Gold","Robotic",D.aFK,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dG0=new C.rq(13,"leaves")
D.dGa=new C.m4("forest","Forest Morning","Nature",D.dG0,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aFL=new C.rq(5,"waves")
D.dGh=new C.m4("ocean","Ocean Calm","Nature",D.aFL,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dG3=new C.rq(6,"sunset")
D.dGm=new C.m4("sunset","Sunset Glow","Nature",D.dG3,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dG4=new C.rq(7,"mountains")
D.dG9=new C.m4("mountain","Mountain Air","Nature",D.dG4,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dG5=new C.rq(8,"stars")
D.dGg=new C.m4("night","Night Sky","Nature",D.dG5,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a4N=new C.rq(4,"orbs")
D.dGe=new C.m4("aurora","Aurora","Nature",D.a4N,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dGo=new C.m4("sand","Sand Dune","Nature",D.aFL,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dG6=new C.rq(9,"rays")
D.dGd=new C.m4("golden","Golden Hour","Warm",D.dG6,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dGb=new C.m4("royal","Royal Purple","Warm",D.aFJ,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dGc=new C.m4("rose","Rose Petal","Warm",D.a4N,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dG_=new C.rq(12,"blocks")
D.dGf=new C.m4("electric","Electric Blue","Bold",D.dG_,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dGp=new C.m4("mint","Fresh Mint","Bold",D.a4N,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dG1=new C.rq(14,"minimal")
D.dGl=new C.m4("white","Clean White","Clean",D.dG1,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dFZ=new C.rq(10,"frame")
D.dGi=new C.m4("midnight","Midnight Gold","Clean",D.dFZ,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dGk=new C.m4("community","Community Green","Clean",D.aFK,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a33=w([D.dGq,D.dGn,D.dG8,D.dGj,D.dG7,D.dGa,D.dGh,D.dGm,D.dG9,D.dGg,D.dGe,D.dGo,D.dGd,D.dGb,D.dGc,D.dGf,D.dGp,D.dGl,D.dGi,D.dGk],B.ax("O<m4>"))
D.dc3=w([D.AD,A.v6,A.hI,A.c_],x.O)
D.dck=w([D.aeD,D.jb],x.O)
D.dcu=w(["pdf","docx","txt","md"],x.s)
D.eFR=new B.bo(-3,150,34)
D.eFS=new B.bo(-3,214,62)
D.eFT=new B.bo(-3,288,62)
D.ddi=w([D.eFR,D.eFS,D.eFT],B.ax("O<+(M,M,M)>"))
D.ddM=w(["rays","bokeh","aurora","spotlight"],x.s)
D.ddR=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.den=w(["Write","Design","Print & fold"],x.s)
D.jL=new C.uD(2,"triangle")
D.CC=new C.uD(3,"arrow")
D.fr=new C.uD(4,"line")
D.jM=new C.uD(5,"parallelogram")
D.deq=w([D.bf,D.eL,D.jL,D.CC,D.fr,D.jM,D.l3],x.m)
D.egD=new B.z(240,96)
D.ejd=new B.z(560,46)
D.dev=w([D.egD,D.ejd],x.G)
D.h2X=new C.xv(0,"classic")
D.dBX=new C.nE("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aFl,4294570461,4282000405,4284234270)
D.dC8=new C.nE("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aFm,4294635750,4281999378,4285213214)
D.dBY=new C.nE("elegant_navy","Umoja Mzuri",y.s,D.a4H,4294967035,4279378237,4290283019)
D.dCa=new C.nE("elegant_gold","Umoja wa Dhahabu",y.Q,D.aFu,4294966515,4281016592,4289102906)
D.dCc=new C.nE("kente_sunset","Kente ya Jua",y.H,D.aFn,4294964964,4282000405,4279983648)
D.dBV=new C.nE("indigo_mudcloth","Nguo ya Indigo",y.n,D.aFo,4294439140,4279903102,4279903102)
D.dC_=new C.nE("adinkra_royal","Muhuri wa Adinkra",y.z,D.aFp,4294965484,4285218591,4287322667)
D.dC4=new C.nE("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFq,4294244340,4279196764,4279196764)
D.dC6=new C.nE("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFr,4294505710,4279970378,4291058750)
D.h2Y=new C.xv(1,"ringsNdoa")
D.dBZ=new C.nE("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rv,4294966259,4279378237,4291404327)
D.h3_=new C.xv(2,"coupleCards")
D.dC9=new C.nE("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rv,4294966259,4279378237,4291404327)
D.h30=new C.xv(3,"kuhoweshaForm")
D.dC5=new C.nE("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Cw,4294966519,4279378237,4291404327)
D.h31=new C.xv(4,"mahariPande")
D.dBW=new C.nE("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rv,4294966259,4279904068,4291404327)
D.h32=new C.xv(5,"familiaMti")
D.dCb=new C.nE("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aFs,4294966776,4280241466,4291404327)
D.h33=new C.xv(6,"ndoaSafi")
D.dC2=new C.nE("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Cw,4294966519,4279378237,4291404327)
D.h34=new C.xv(7,"peteWide")
D.dC1=new C.nE("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rv,4294966259,4282001936,4291404327)
D.h35=new C.xv(8,"muhuriCrest")
D.dC0=new C.nE("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rv,4294966259,4279378237,4291404327)
D.h36=new C.xv(9,"fomuWazi")
D.dC3=new C.nE("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Cw,4294966519,4279904068,4291404327)
D.h2Z=new C.xv(10,"upendoOrnate")
D.dC7=new C.nE("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aFt,4294965493,4286200650,4291404327)
D.QB=w([D.dBX,D.dC8,D.dBY,D.dCa,D.dCc,D.dBV,D.dC_,D.dC4,D.dC6,D.dBZ,D.dC9,D.dC5,D.dBW,D.dCb,D.dC2,D.dC1,D.dC0,D.dC3,D.dC7],B.ax("O<nE>"))
D.CA=new C.aqH(0,"landscape169")
D.oc=new C.aqH(1,"portrait916")
D.dfg=w([D.CA,D.oc],B.ax("O<aqH>"))
D.ay3=w([A.hI,A.bL,A.cs,A.ir,A.c],x.O)
D.uc=w([A.c_,A.ia],x.O)
D.efP=new B.z(1000,"M")
D.ekt=new B.z(900,"CM")
D.ej7=new B.z(500,"D")
D.ehr=new B.z(400,"CD")
D.efQ=new B.z(100,"C")
D.eku=new B.z(90,"XC")
D.ej8=new B.z(50,"L")
D.ehs=new B.z(40,"XL")
D.efU=new B.z(10,"X")
D.ekE=new B.z(9,"IX")
D.ejp=new B.z(5,"V")
D.eiT=new B.z(4,"IV")
D.egj=new B.z(1,"I")
D.dfR=w([D.efP,D.ekt,D.ej7,D.ehr,D.efQ,D.eku,D.ej8,D.ehs,D.efU,D.ekE,D.ejp,D.eiT,D.egj],x.ek)
D.eGS=new B.cC(["open",A.jl,"Open & write","Keep writing this book"])
D.eHi=new B.cC(["print",A.u_,"Print as a book","Fold and staple it"])
D.dg0=w([D.eGS,D.eHi],B.ax("O<+(m,a0,m,m)>"))
D.dgH=w([D.a4P,D.mG,D.HO,D.RJ,D.dd,D.RI],x.i)
D.exG=new B.z(-1,"Small")
D.efD=new B.z(0,"Normal")
D.egi=new B.z(1,"Big")
D.egT=new B.z(2,"Huge")
D.dhb=w([D.exG,D.efD,D.egi,D.egT],x.ek)
D.dhB=w([49,65,89,38,83,89],x.t)
D.dhI=w([A.v6,A.hI,A.c_],x.O)
D.di8=w([D.dd,D.mG,D.uj,D.a4P,D.HO,D.RJ],x.i)
D.aDm=new B.dS([0,D.Ly,8,D.afX,12,D.afY],B.ax("dS<H,a3s>"))
D.e1E={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.big=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cMS=w([A.bL,D.big],x.O)
D.d5Z=w([A.b3,A.bj],x.O)
D.d0N=w([A.bW,A.aR,A.bZ],x.O)
D.dg1=w([A.cr,A.bv],x.O)
D.cUx=w([A.b9,A.fj],x.O)
D.d3r=w([A.b6,A.fa],x.O)
D.bbD=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d2J=w([D.bbD,A.oB],x.O)
D.cYn=w([A.h3,A.x8],x.O)
D.cUl=w([A.bu,A.cf],x.O)
D.dkK=new B.bk(D.e1E,[D.cMS,I.aoB,D.d5Z,D.d0N,D.dg1,D.cUx,D.d3r,D.d2J,D.cYn,D.cUl],B.ax("bk<m,ai<w>>"))
D.e0N={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a3G=new B.bk(D.e0N,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<m,m>"))
D.a3N=new B.bk(A.i5,[],B.ax("bk<H,+icon3d,picture(m?,m?)>"))
D.dp8=new F.MI(30,null)
D.duc=new F.mr("Chapter 1","","","")
D.df2=w([D.duc],x.B)
D.dug=new F.rg("My Book","","",D.df2,E.aEF)
D.due=new F.ut("starry",null,null,null,null,"","","")
D.duh=new F.rg("Dream Big","","",E.a2K,D.due)
D.duf=new F.ut("story",null,null,null,null,"","","")
D.dui=new F.rg("Little Lion","","",E.a2K,D.duf)
D.dud=new F.ut("vintage",null,null,null,null,"","","")
D.duj=new F.rg("Our Story","","",E.a2K,D.dud)
D.dxk=new C.El("","NGMY","","")
D.dEB=new C.zl("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dWx=new C.b0z(null,null,null,null)
D.dYf=new C.aqM(null)
D.dYs=new C.arh(0,"smaller")
D.dYt=new C.arh(1,"bigger")
D.aFZ=new C.arh(2,"fit")
D.e4a=new B.u(3,6)
D.e4k=new B.u(4,8)
D.e7L=new B.D(E.agN,T.abI,null)
D.e7P=new B.D(A.Yd,A.lF,null)
D.bGy=new B.ae(A.ln,16,A.c2,null,null,null)
D.e7T=new B.D(A.iW,D.bGy,null)
D.b65=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e84=new B.D(A.Fp,D.b65,null)
D.bQP=new B.ae(A.cD,16,A.aA,null,null,null)
D.e88=new B.D(A.ek,D.bQP,null)
D.flB=new B.x("Play",null,A.nw,null,null,null,null,null,null,null,null,null)
D.d6d=w([U.an4,A.rI,D.flB],x.p)
D.eLt=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d6d,null)
D.e8b=new B.D(A.nY,D.eLt,null)
D.b6e=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eQQ=new B.a7(20,20,D.b6e,null)
D.e8g=new B.D(A.iW,D.eQQ,null)
D.fuC=new B.x("Seconds per slide",null,A.ht,null,null,null,null,null,null,null,null,null)
D.e8o=new B.D(A.bm,D.fuC,null)
D.e9J=new C.a8i(2,"print")
D.e9M=new B.iR(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.ebo=new B.h9("/Annot")
D.ebq=new B.h9("/URI")
D.ffY=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eds=new B.jq("share",48,D.ffY,null,B.ax("jq<m>"))
D.bQJ=new B.ae(A.dW,14,A.eA,null,null,null)
D.edB=new B.cL(null,-2,-2,null,null,null,D.bQJ,null)
D.cOT=w([H.aeh,A.K],x.O)
D.bX9=new B.a8(A.a3,A.a8,A.x,D.cOT,null,null)
D.aZT=new B.o(null,null,null,null,null,D.bX9,A.n)
D.bn8=new B.kP(D.aZT,A.be,null,null)
D.edN=new B.cL(0,0,null,0,8,null,D.bn8,null)
D.daG=w([A.hX,A.mh,A.cg],x.O)
D.eer=new B.bT(A.A,0.5,A.x,null,0,D.daG,null,null)
D.egM=new B.z(0.22,A.bj)
D.ekZ=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.en2=new B.z(0.5,A.hi)
D.ewf=new B.z(0.78,A.aV)
D.eGI=new B.cC([A.bt,0.22,0.7,2.6])
D.eGO=new B.cC([A.b9,0.36,1.2,1.3])
D.eGU=new B.cC([A.dQ,0.28,0.2,0.4])
D.eH_=new B.cC([A.cz,0.05,0.3,0.35])
D.eH5=new B.cC([A.bu,0.28,0.9,0])
D.eHd=new B.cC([A.aE,-0.25,-0.15,0.45])
D.eI3=new B.cC([A.bW,0.42,1,4.1])
D.eLb=new B.a9f(9)
D.bHF=new B.ae(A.Gk,28,A.bZ,null,null,null)
D.fv9=new B.x("NGMY News",null,A.dj,null,null,null,null,null,null,null,null,null)
D.bwT=new B.bC(1,A.bh,D.fv9,null)
D.ddP=w([D.bHF,A.av,D.bwT],x.p)
D.eLn=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.ddP,null)
D.bHQ=new B.ae(A.o1,16,A.c,null,null,null)
D.fwF=new B.x("Book",null,A.ok,null,null,null,null,null,null,null,null,null)
D.dhH=w([D.bHQ,A.ec,D.fwF],x.p)
D.eLv=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.dhH,null)
D.bOj=new B.ae(A.jm,10,A.c,null,null,null)
D.fjH=new B.x("Pro",null,A.nt,null,null,null,null,null,null,null,null,null)
D.d6i=w([D.bOj,A.qk,D.fjH],x.p)
D.eLz=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d6i,null)
D.fuB=new B.x("Make a newspaper",null,Au.TK,null,null,null,null,null,null,null,null,null)
D.bYj=w([E.a0I,A.ab,D.fuB],x.p)
D.eLA=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bYj,null)
D.bMS=new B.ae(A.lk,18,A.bL,null,null,null)
D.flP=new B.x("Ending celebration",null,A.hF,null,null,null,null,null,null,null,null,null)
D.dcU=w([D.bMS,A.bp,D.flP],x.p)
D.eLD=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dcU,null)
D.bO5=new B.ae(A.jl,18,A.jX,null,null,null)
D.f0u=new B.G(!0,A.jX,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwW=new B.x("Write",null,D.f0u,null,null,null,null,null,null,null,null,null)
D.cWw=w([D.bO5,A.ab,D.fwW],x.p)
D.eLK=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cWw,null)
D.fjF=new B.x("Download picture",null,A.p9,null,null,null,null,null,null,null,null,null)
D.bz_=new B.qi(A.eh,A.A,A.f,D.fjF,null)
D.bza=new B.dq(1,A.cn,D.bz_,null)
D.d6F=w([L.amV,A.ab,D.bza],x.p)
D.eLL=new B.cm(A.aO,A.b8,A.j,A.m,null,A.p,null,0,D.d6F,null)
D.bJD=new B.ae(A.Gk,22,A.bZ,null,null,null)
D.ftc=new B.x("NGMY NEWS",null,I.a7o,null,null,null,null,null,null,null,null,null)
D.cOj=w([D.bJD,A.ab,D.ftc],x.p)
D.eLU=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cOj,null)
D.eM5=new B.p6(!1,!1,null,T.VF,null,A.bY,null,null,null)
D.a6s=new B.jk([D.cm,D.dd,D.uj,D.HN,D.uk,D.aFP],B.ax("jk<hz>"))
D.e2Z={title:0,quote:1,closing:2,bio:3}
D.eNd=new B.eD(D.e2Z,4,x.M)
D.e15={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eNf=new B.eD(D.e15,5,x.M)
D.e2t={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a6t=new B.eD(D.e2t,8,x.M)
D.e1M={Design:0,Transitions:1,Insert:2}
D.eNj=new B.eD(D.e1M,3,x.M)
D.h3e=new B.jk([D.a4Q],B.ax("jk<vV>"))
D.e1V={float3d:0,drift:1,pulse:2}
D.eNn=new B.eD(D.e1V,3,x.M)
D.aN2=new B.jk([D.HK,D.HL,D.HM],B.ax("jk<mv>"))
D.e12={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aN5=new B.eD(D.e12,14,x.M)
D.h3f=new B.eD(A.i5,0,B.ax("eD<vV>"))
D.e1S={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.SP=new B.eD(D.e1S,4,x.M)
D.e0V={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aN8=new B.eD(D.e0V,30,x.M)
D.e2_={circle:0,triangle:1,hexagon:2,diamond:3}
D.eND=new B.eD(D.e2_,4,x.M)
D.ePO=new B.ar(390,844)
D.eQA=new B.a7(20,20,A6.Km,null)
D.aNU=new B.a7(null,2.5,null,null)
D.eQK=new B.a7(18,18,A6.Km,null)
D.bO9=new B.ae(A.iZ,19,A.c,null,null,null)
D.eQV=new B.a7(38,38,D.bO9,null)
D.bMr=new B.ae(A.ys,22,A.c,null,null,null)
D.eQX=new B.a7(40,40,D.bMr,null)
D.eRv=new B.hM(2,10,10,1.15,null)
D.aO1=new B.hM(2,16,14,0.62,null)
D.buX=new B.Q(32,30,32,40)
D.b7z=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bHC=new B.ae(A.pU,56,D.b7z,null,null,null)
D.af9=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f2r=new B.G(!0,D.af9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqh=new B.x("Your books will live here.",null,D.f2r,null,A.L,null,null,null,null,null,null,null)
D.cZh=w([D.bHC,A.S,D.fqh],x.p)
D.bm7=new B.fl(A.ag,A.e,A.j,A.m,null,A.p,null,0,D.cZh,null)
D.e8m=new B.D(D.buX,D.bm7,null)
D.eRQ=new B.m7(D.e8m,null)
D.fqe=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eS7=new B.b1(D.fqe,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fol=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eS8=new B.b1(D.fol,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftg=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eSh=new B.b1(D.ftg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftO=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eSw=new B.b1(D.ftO,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fn1=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eSJ=new B.b1(D.fn1,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fAN=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eT1=new B.b1(D.fAN,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxZ=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eTc=new B.b1(D.fxZ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftW=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eTT=new B.b1(D.ftW,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhY=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eU8=new B.b1(D.fhY,null,null,null,null,null,null,null,A.im,null,null,null,null,A.pK,!1,null,null,null,A.r,null)
D.fjO=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eUq=new B.b1(D.fjO,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fpW=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eUs=new B.b1(D.fpW,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fpC=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eUt=new B.b1(D.fpC,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvX=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eUu=new B.b1(D.fvX,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fea=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eUD=new B.b1(D.fea,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fkX=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eV_=new B.b1(D.fkX,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fzz=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eV1=new B.b1(D.fzz,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fz6=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eV5=new B.b1(D.fz6,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fda=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eV7=new B.b1(D.fda,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fv4=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eVg=new B.b1(D.fv4,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fyI=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eVv=new B.b1(D.fyI,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fyz=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eVx=new B.b1(D.fyz,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fd2=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eVD=new B.b1(D.fd2,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fgY=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eW4=new B.b1(D.fgY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxM=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eWf=new B.b1(D.fxM,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fgM=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eWu=new B.b1(D.fgM,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ber=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cN5=w([A.ir,A.oB,D.ber,D.ac7,A.ir],x.O)
D.eWS=new B.fT(A.A,0,6.283185307179586,A.x,D.cN5,null,null)
D.cVJ=w([A.bL,A.c_,A.hI,D.AD,A.bL],x.O)
D.aOB=new B.fT(A.A,0,6.283185307179586,A.x,D.cVJ,null,null)
D.d8m=w([A.bW,A.bt,A.b9,A.b1,A.bZ,A.bW],x.O)
D.eWX=new B.fT(A.A,0,6.283185307179586,A.x,D.d8m,null,null)
D.cP6=w([A.pI,A.oC,A.Ar,A.ir,A.pI],x.O)
D.eWY=new B.fT(A.A,0,6.283185307179586,A.x,D.cP6,null,null)
D.d8g=w([A.aQ,A.bJ,A.aL,A.ak,A.aQ],x.O)
D.eWZ=new B.fT(A.A,0,6.283185307179586,A.x,D.d8g,null,null)
D.dfH=w([A.bu,A.b9,A.bt,A.bW,A.bu],x.O)
D.eX0=new B.fT(A.A,0,6.283185307179586,A.x,D.dfH,null,null)
D.beJ=new B.w(1,0,1,1,A.t)
D.b8M=new B.w(1,1,0,1,A.t)
D.dbW=w([A.Eh,A.ae_,I.acU,D.beJ,I.adi,D.b8M,A.Eh],x.O)
D.eX1=new B.fT(A.A,0,6.283185307179586,A.x,D.dbW,null,null)
D.eXg=new C.avj(2,"immersiveSticky")
D.eXh=new C.avj(3,"edgeToEdge")
D.eXi=new C.avj(4,"manual")
D.eZI=new B.G(!0,A.ow,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aP7=new B.G(!0,A.f4,null,null,null,null,12.5,A.N,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_g=new B.G(!0,E.n1,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0L=new B.G(!0,A.ad,null,null,null,null,13,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1J=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1T=new B.G(!0,A.c2,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2d=new B.G(!0,A.eA,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3A=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3J=new B.G(!0,A.je,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3X=new B.rA(!0,A.I5,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4q=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f52=new B.G(!0,A.jd,null,null,null,null,11.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5q=new B.G(!0,A.aA,null,null,null,null,12.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e9P=new B.iR(1,1,0.7568627450980392,0.027450980392156862)
D.f5u=new B.rA(!0,D.e9P,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ae6=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aPR=new B.G(!0,D.ae6,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5C=new B.G(!0,D.af9,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5D=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPT=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6f=new B.rA(!0,A.p3,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6x=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f73=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f75=new B.G(!0,D.ae6,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.J4=new B.G(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7y=new B.G(!0,A.c_,null,null,null,null,11.5,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7G=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7J=new B.G(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8_=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.avM,null,null,null)
D.f81=new B.G(!0,A.cb,null,null,null,null,null,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f83=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8g=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8s=new B.G(!0,A.dv,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8Z=new B.G(!0,A.aS,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f97=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f9l=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQv=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQx=new B.G(!0,A.c2,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bjP=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fb3=new B.G(!0,D.bjP,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQF=new B.G(!0,E.n1,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fby=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fbB=new B.G(!0,O.lf,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4E=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcP=new B.x("NEW",null,D.f4E,null,null,null,null,null,null,null,null,null)
D.fd5=new B.x("Hati ya Kuhowesha",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fdx=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fdR=new B.x("Scrollable PDF on this slide",null,A.dn,null,null,null,null,null,null,null,null,null)
D.feA=new B.x("Big quote mark",null,A.iJ,null,null,null,null,null,null,null,null,null)
D.feD=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.feO=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fff=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.ffh=new B.x("How many slides?",null,A.ht,null,null,null,null,null,null,null,null,null)
D.ffP=new B.x("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f0x=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fga=new B.x("Luxury FX",null,D.f0x,null,null,null,null,null,null,null,null,null)
D.fgw=new B.x("Font",null,A.rN,null,null,null,null,null,null,null,null,null)
D.fgH=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fgN=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.faC=new B.G(!0,A.bJ,null,null,null,null,12,A.N,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgV=new B.x("Example  GA847",null,D.faC,null,null,null,null,null,null,null,null,null)
D.fhk=new B.x("Design shapes",null,A.iJ,null,null,null,null,null,null,null,null,null)
D.fhu=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fhy=new B.x("Non-stop (loop)",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fhM=new B.x("Hati ya Kuhoweya",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fi4=new B.x("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.fiw=new B.x("Add your picture",null,A.kc,null,null,null,null,null,null,null,null,null)
D.f3Y=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fix=new B.x("Enter document code",null,D.f3Y,null,A.L,null,null,null,null,null,null,null)
D.fiy=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fiD=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.f1z=new B.G(!0,E.n1,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fiY=new B.x("Delete this book?",null,D.f1z,null,A.L,null,null,null,null,null,null,null)
D.f65=new B.G(!0,E.n1,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fjQ=new B.x("Your library",null,D.f65,null,null,null,null,null,null,null,null,null)
D.fjV=new B.x("Delete",null,A.aPL,null,null,null,null,null,null,null,null,null)
D.fjY=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.Di,null,null,null,null,null,null,null,null,null)
D.fk8=new B.x("Element flies in",null,A.aPX,null,null,null,null,null,null,null,null,null)
D.TV=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fkw=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fkQ=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fkU=new B.x("Cancel",null,E.aQ7,null,null,null,null,null,null,null,null,null)
D.fkW=new B.x("The lines and circles that come with the design",null,A.h1,null,null,null,null,null,null,null,null,null)
D.f9t=new B.G(!0,A.fT,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flm=new B.x("DOCUMENT CODE",null,D.f9t,null,null,null,null,null,null,null,null,null)
D.fma=new B.x("Quotes",null,G.a7Z,null,null,null,null,null,null,null,null,null)
D.f3n=new B.G(!0,O.lf,null,null,null,null,null,A.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmi=new B.x("Add a picture",null,D.f3n,null,null,null,null,null,null,null,null,null)
D.fmq=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a7H,null,A.L,null,null,null,null,null,null,null)
D.fmu=new B.x("Look & feel",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fmz=new B.x("Rings",null,A.hF,null,null,null,null,null,null,null,null,null)
D.fmF=new B.x("W",null,A.rN,null,null,null,null,null,null,null,null,null)
D.fmP=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fn7=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.TG,null,A.L,null,null,null,null,null,null,null)
D.fn9=new B.x("Write your book",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fnT=new B.x("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fo7=new B.x("Malipo ya Awamu ya Mahari",null,A.h2,null,null,null,null,null,null,null,null,null)
D.f3N=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fom=new B.x("Create with AI",null,D.f3N,null,A.L,null,null,null,null,null,null,null)
D.foR=new B.x("Apply look",null,A.hF,null,null,null,null,null,null,null,null,null)
D.f4v=new B.G(!0,A.eu,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpE=new B.x("Type your presentation below",null,D.f4v,null,A.L,null,null,null,null,null,null,null)
D.fpH=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,I.aQI,null,A.L,null,null,null,null,null,null,null)
D.fpJ=new B.x("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f_x=new B.G(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpQ=new B.x("Done",null,D.f_x,null,null,null,null,null,null,null,null,null)
D.fqa=new B.x("Delete",null,A.nv,null,null,null,null,null,null,null,null,null)
D.fqj=new B.x("Hati ya Kiapo cha Uongozi",null,A.h2,null,null,null,null,null,null,null,null,null)
D.f2J=new B.G(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.frb=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.f2J,null,A.L,null,null,null,null,null,null,null)
D.frx=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.frD=new B.x("Layout",null,A.TM,null,null,null,null,null,null,null,null,null)
D.fsf=new B.x("Print",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fsl=new B.x("X",null,A.rN,null,null,null,null,null,null,null,null,null)
D.fsU=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.Dh,null,null,null,null,null,null,null,null,null)
D.ftt=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.ftG=new B.x("Hati ya Kuhowa",null,A.h2,null,null,null,null,null,null,null,null,null)
D.ftI=new B.x("Choose a class template",null,A.h2,null,null,null,null,null,null,null,null,null)
D.ftK=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.h1,null,null,null,null,null,null,null,null,null)
D.ftQ=new B.x("Download the newspaper picture",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fu2=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fu9=new B.x("Done",null,A.aQu,null,null,null,null,null,null,null,null,null)
D.fuj=new B.x("Ending celebration",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fuk=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fuz=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.IV,null,null,null,null,null,null,null,null,null)
D.fvu=new B.x("Export presentation",null,A.dn,null,null,null,null,null,null,null,null,null)
D.fvv=new B.x("What would you like to do?",null,D.aPR,null,null,null,null,null,null,null,null,null)
D.fvz=new B.x("Delete",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fw4=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fw8=new B.x("Hati (Documents)",null,A.h2,null,null,null,null,null,null,null,null,null)
D.fwl=new B.x("Done",null,A.l8,null,null,null,null,null,null,null,null,null)
D.fas=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwq=new B.x("Delete presentation?",null,D.fas,null,A.L,null,null,null,null,null,null,null)
D.fwJ=new B.x("After the last slide it starts again from the first",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fwU=new B.x("\ud83c\udf33",null,A.IZ,null,A.L,null,null,null,null,null,null,null)
D.fxb=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fxi=new B.x("Transfer document",null,A.pb,null,null,null,null,null,null,null,null,null)
D.fxt=new B.x("Add to the slides",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fxQ=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fy4=new B.x("Make a book",null,K.aPp,null,null,null,null,null,null,null,null,null)
D.fy8=new B.x("Books",null,A.cy,null,null,null,null,null,null,null,null,null)
D.f3g=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy9=new B.x("Keep this page open until it finishes.",null,D.f3g,null,null,null,null,null,null,null,null,null)
D.fyc=new B.x("Making your video",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fyh=new B.x("LANGUAGE",null,H.J3,null,null,null,null,null,null,null,null,null)
D.fyo=new B.x("Use this ending",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fyw=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fyy=new B.x("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fyO=new B.x("Delete from the database?",null,A.kc,null,null,null,null,null,null,null,null,null)
D.fyP=new B.x("H",null,A.rN,null,null,null,null,null,null,null,null,null)
D.fzc=new B.x("NGMY Quotes",null,A.dj,null,null,null,null,null,null,null,null,null)
D.fzE=new B.x("Cover",null,D.aQF,null,null,null,null,null,null,null,null,null)
D.fzI=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fzJ=new B.x("Each page becomes its own slide you can present",null,A.h1,null,null,null,null,null,null,null,null,null)
D.fA4=new B.x("Y",null,A.rN,null,null,null,null,null,null,null,null,null)
D.fAf=new B.x("Crop the picture",null,A.l8,null,null,null,null,null,null,null,null,null)
D.fAl=new B.x("Edit text",null,A.J_,null,null,null,null,null,null,null,null,null)
D.fCz=B.dR("a84")
D.Du=new C.awC(0,"none")
D.aTK=new C.awC(1,"zipCrypto")
D.aTL=new C.awC(2,"aes")
D.fTe=new F.Pb("","",null)
D.fUk=new C.bbM(null)
D.fVr=new C.Zh(null)
D.fX_=new C.acZ(null)
D.fX1=new C.aDO(null)
D.fZN=new C.a_x(null)
D.h_3=new C.a03(null)
D.h_m=new C.btn(null)})();(function staticFields(){$.hdi=null
$.hdj=null
$.hdk=null
$.hdl=null
$.fWh=B.v1("_lastQuoRemDigits")
$.fWi=B.v1("_lastQuoRemUsed")
$.awY=B.v1("_lastRemUsed")
$.fWj=B.v1("_lastRem_nsh")
$.q5=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6U=B.T(x.N,x.I)
$.fTO=!1
$.hi6=B.T(B.ax("kS"),x.N)
$.hij=B.T(B.ax("kS"),x.E)
$.hgj=!1
$.bz0="q"
$.Q7=0
$.Cu=B.T(x.N,B.ax("ai<zn>"))
$.hgG=!1
$.fXS=!1
$.hmX=null
$.hR7=B.T(x.N,B.ax("az<m?>"))
$.Kd=""
$.j1=0
$.ha3=function(){var w=x.N
return B.T(w,w)}()
$.ha2=B.T(x.N,x.R)
$.fYc=!1
$.afG=B.T(x.N,x.E)
$.fZ_=0
$.bjR=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ifn","CQ",()=>C.b9h(0))
w($,"ifl","a2h",()=>C.b9h(1))
w($,"ifm","hqx",()=>C.b9h(2))
w($,"ifk","h1Q",()=>$.a2h().uZ(0))
w($,"ifi","hqv",()=>C.b9h(1e4))
w($,"ifj","hqw",()=>B.E3(8))
w($,"iba","hoy",()=>B.E3(0))
w($,"ibi","hoC",()=>B.E3(0))
w($,"ibh","hoB",()=>B.bXN(0))
w($,"ij2","hsx",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a3G.gdK(D.a3G),v=v.gae(v);v.C();){u=v.gR(v)
t.n(0,u.b,u.a)}return t})
w($,"ijt","bDv",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mS(new C.fED(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mS(new C.fEE(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mS(new C.fEF(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mS(new C.fEQ(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mS(new C.fEV(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mS(new C.fEW(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mS(new C.fEX(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mS(new C.fEY(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mS(new C.fEZ(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mS(new C.fF_(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mS(new C.fF0(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mS(new C.fEG(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mS(new C.fEH(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mS(new C.fEI(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mS(new C.fEJ(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mS(new C.fEK(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mS(new C.fEL(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mS(new C.fEM(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mS(new C.fEN(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mS(new C.fEO(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mS(new C.fEP(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mS(new C.fER(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mS(new C.fES(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mS(new C.fET(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mS(new C.fEU(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<Eu>"))})
w($,"ij5","hsz",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["H2u1Kh0v0hxzf0ch5a0ocsFrsmA="]=a.current})($__dart_deferred_initializers__);