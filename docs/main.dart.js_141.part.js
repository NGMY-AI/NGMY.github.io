((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tI(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fVo(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Ju(d){var w
if(d===0)return $.CP()
if(d===1)return $.a2g()
if(d===2)return $.hpB()
if(Math.abs(d)<4294967296)return C.b9e(A.o.N(d))
w=C.hKg(d)
return w},
b9e(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tI(4,w)
return new C.nQ(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tI(1,w)
return new C.nQ(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tI(2,w)
return new C.nQ(v===0?!1:s,w,v)}v=A.o.an(A.o.gajx(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tI(v,w)
return new C.nQ(v===0?!1:s,w,v)},
hKg(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CP()
w=$.hpA()
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
q=new C.nQ(!1,r,4)
if(s<0)p=q.mq(0,-s)
else p=s>0?q.dV(0,s):q
return p},
fVp(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hcp(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.E(f,16),p=16-q,o=A.o.dV(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fF(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dV(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hck(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.E(f,16)===0)return C.fVp(d,e,s,g)
w=e+s+1
C.hcp(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hKj(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.E(f,16),q=16-r,p=A.o.dV(1,r)-1,o=A.o.fF(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dV(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fF(u,r)}w&2&&B.aj(g)
g[n]=o},
cEd(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hKh(d,e,f,g,h){var w,v,u
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
hcq(d,e,f,g,h,i){var w,v,u,t,s,r
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
hKi(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e4((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nQ:function nQ(d,e,f){this.a=d
this.b=e
this.c=f},
cEe:function cEe(){},
cEf:function cEf(){},
cEg:function cEg(d,e){this.a=d
this.b=e},
cEh:function cEh(d){this.a=d},
aQK:function aQK(d,e){this.a=d
this.b=e},
h2h(d,e,f){var w=new C.Rt(d,A.o.an(Date.now(),1000),e)
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
hsO(){return new C.bFm()},
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
hJZ(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcVs(d)))
v=f*2+2
u=C.ha1(C.ha3(),64)
t=new C.cgd(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cge(e,1000,v)
s=new Uint8Array(v)
return A.aH.dq(s,0,t.cIU(w,0,s,0))},
cwm:function cwm(d,e){this.c=d
this.d=e},
awz:function awz(d,e){this.a=d
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
hbP(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hsx(d,e){var w
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
h00(d,e){e&=31
return(d&$.q4[e])<<e>>>0},
no(d,e){e&=31
return(d>>>e|C.h00(d,32-e))>>>0},
ha2(d){var w,v=new C.ash()
if(B.iH(d))v.aJo(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
ha3(){var w=C.ha2(0),v=new Uint8Array(4),u=x.S
u=new C.cgf(w,v,A.DS,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.ly(0)
return u},
ha1(d,e){var w=new C.cgb(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cga:function cga(){},
cge:function cge(d,e,f){this.a=d
this.b=e
this.c=f},
cg8:function cg8(){},
asg:function asg(d){this.a=d},
cgd:function cgd(d){this.a=$
this.b=d
this.c=$},
cg9:function cg9(){},
cg7:function cg7(){},
ash:function ash(){this.b=this.a=$},
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
hNd(d){if(d<0.36363636363636365)return 7.5625*d*d
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
hW6(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
avd(d){var w=0,v=B.j(x.H),u
var $async$avd=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eWD?2:4
break
case 2:w=5
return B.b(A.k5.fY("SystemChrome.setEnabledSystemUIMode",d.a5(),u),$async$avd)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k5.fY("SystemChrome.setEnabledSystemUIOverlays",C.hW6(null),u),$async$avd)
case 6:case 3:return B.h(null,v)}})
return B.i($async$avd,v)},
avg:function avg(d,e){this.a=d
this.b=e},
a83:function a83(d){this.a=d},
fRn(d,e){return new C.aVc(e,d,null)},
aVc:function aVc(d,e,f){this.e=d
this.c=e
this.a=f},
aA7:function aA7(d,e,f,g,h){var _=this
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
hYJ(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.frh(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
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
frh:function frh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
an6(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$an6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agx("ngmy_menu_lib_v1_zzslides_index",A.bH),$async$an6)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d9(s,x.f)
t=B.cF(t,new C.bYO(),t.$ti.k("J.E"),x.P)
r=B.C(t,B.a3(t).k("J.E"))}else r=B.a([],x.d)
A.d.b0(r,new C.bYP())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an6,v)},
an8(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$an8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an6(),$async$an8)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aV(j);r.C();){q=r.gS(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a6().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nn("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$an8)
case 7:if(!f){w=5
break}s.n(0,p,B.F(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.L)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.C(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.nn("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$an8)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an8,v)},
bYQ(d){return C.hyf(d)},
hyf(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bYQ=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agx("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hJ),$async$bYQ)
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
an7(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$an7=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an6(),$async$an7)
case 3:r=f
if(r==null){u=!1
w=1
break}J.np(r,new C.bYR(d))
w=4
return B.b(B.nn("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$an7)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOM("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$an7)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an7,v)},
bYO:function bYO(){},
bYP:function bYP(){},
bYR:function bYR(d){this.a=d},
i7F(d,e,f){return B.bQ(A.K,null,new C.fHe(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fHe:function fHe(d,e,f){this.a=d
this.b=e
this.c=f},
a0v:function a0v(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIw:function aIw(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f57:function f57(d,e){this.a=d
this.b=e},
f5b:function f5b(d){this.a=d},
f5c:function f5c(d){this.a=d},
f5d:function f5d(d,e,f){this.a=d
this.b=e
this.c=f},
f58:function f58(d){this.a=d},
f59:function f59(d){this.a=d},
f5a:function f5a(d,e){this.a=d
this.b=e},
f52:function f52(d){this.a=d},
f50:function f50(d){this.a=d},
f51:function f51(d){this.a=d},
f53:function f53(d){this.a=d},
f54:function f54(d){this.a=d},
f5h:function f5h(d,e){this.a=d
this.b=e},
f5g:function f5g(d,e){this.a=d
this.b=e},
f56:function f56(d,e,f){this.a=d
this.b=e
this.c=f},
f55:function f55(d,e,f){this.a=d
this.b=e
this.c=f},
f5e:function f5e(d,e){this.a=d
this.b=e},
f5f:function f5f(d,e){this.a=d
this.b=e},
f5k:function f5k(d){this.a=d},
f5l:function f5l(d,e){this.a=d
this.b=e},
f5j:function f5j(d,e){this.a=d
this.b=e},
f5i:function f5i(){},
heP(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aH(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cF(v,new C.fcn(),v.$ti.k("J.E"),x.ea)
u=B.a3(v).k("a1<J.E>")
v=B.C(new B.a1(v,new C.fco(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1t(d){return C.hZZ(d)},
hZZ(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1t=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.ftU(n)
t=4
j=m
i=C
w=7
return B.b(B.a22("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1t)
case 7:j.$1(i.heP(f))
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
m.$1(C.heP(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
return B.b(C.fcw(d),$async$a1t)
case 13:p=j.C(new i.a1(h,new g.ftS(f),o),o.k("J.E"))
A.d.b0(p,new C.ftT())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1t,v)},
ah7(d,e){return C.i7k(d,e)},
i7k(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ah7=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fGJ(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.agZ("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah7)
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
return B.b(B.aA(),$async$ah7)
case 12:p=g
w=13
return B.b(p.ar("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah7)
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
return B.i($async$ah7,v)},
fcw(d){return C.hOD(d)},
hOD(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fcw=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fcw)
case 7:r=f
q=r.t6("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
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
return B.i($async$fcw,v)},
afX(d,e){return C.hYB(d,e)},
hYB(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afX=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$afX)
case 6:s=g
r=B.aX(x.N)
q=s.t6("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
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
J.np(n,new C.fqY(e))
w=9
return B.b(C.ah7(d,n),$async$afX)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afX,v)},
i7K(d,e){return B.a5(d,!1).c5(B.e8(new C.fHA(e),!0,null,x.H))},
hKl(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d7(w.d,new C.cFA())},
og:function og(d,e,f){this.a=d
this.b=e
this.c=f},
fcn:function fcn(){},
fco:function fco(){},
ftU:function ftU(d){this.a=d},
ftS:function ftS(d){this.a=d},
ftT:function ftT(){},
fGJ:function fGJ(){},
fqY:function fqY(d){this.a=d},
fHA:function fHA(d){this.a=d},
Yf:function Yf(d,e){this.c=d
this.a=e},
ax6:function ax6(d,e){var _=this
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
aEo:function aEo(d,e,f){this.a=d
this.b=e
this.c=f},
ax2:function ax2(d){var _=this
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
ax4:function ax4(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i1j(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.ei(v,x.cK).bz(new C.fyq(),x.H).eM(new C.fyr())}}else if(s)C.hgh()}catch(t){}},
hgh(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.ei(v,x.cK).eM(new C.fgM())}catch(u){}},
i1m(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fyq:function fyq(){},
fyr:function fyr(){},
fgM:function fgM(){},
hkS(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.ed(v,w,"").split(":"))},
hkP(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.l1)return null
return A.a.b2(w,14)},
fZJ(d){var w
if(d.b!==D.l1)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b2(w,21)},
i1M(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hkT(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i1H(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kV(0,f)
t=x.N
u=B.cF(u,new C.fzp(),B.a3(u).k("J.E"),t)
s=B.C(u,B.a3(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kV(0,f),u=new B.Jt(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.Ra(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.Ra(A.a.b2(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cF(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i1F(d,e){var w,v,u,t,s,r=B.a3(e).k("cu<1>"),q=B.C(new B.cu(e,r),r.k("J.E"))
A.d.b0(q,new C.fzo())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aPK(w,u,s,0)}return w},
i1J(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a3y:$.hrB(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gaf(s);s.C();){w=s.gS(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hkQ(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fdp(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hkS(q)===e)return q}return null},
i1K(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b2(v,u)
return A.d.gL(D.Gt).a},
i1L(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adQ(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adQ(0,0,0)
v=C.fdp(b6,b0)
u=C.fdp(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i1J(b2,C.i1H(C.hkQ(b2),v.r))
if(s.a!==0){u.r=C.i1F(C.hkQ(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hkS(o[m])
if(l==null||l==="utangulizi")continue
r.K(0,l)}for(q=B.ea(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fdp(b6,n)
i=C.fdp(b5,n)
if(j==null||i==null)continue
h=j.r
if(A.a.a0(n,"witness_")){g=A.a.i(h)
n=g.length===0||g==="[Jina la Shahidi]"}else n=!1
if(n)continue
if(A.a.i(h).length===0)continue
i.r=h;++k}q=b5.r
f=q.length===0?null:A.d.gL(q)
e=0
if(f!=null)for(q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){d=o[m]
a0=C.fZJ(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hkP(a8)===a0||C.fZJ(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QD(a1,new C.fzv(a0),!0)
a1=f.z
a6=Date.now()
a9=$.j0
$.j0=a9+1
A.d.K(a1,new C.eK(""+1000*a6+"_"+a9,D.l1,a2,a3,a4,a5,"",24,A.a5,A.bn,A.aD,4279310375,A.bg,d.at,D.bf,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cm,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adQ(k,t,e)},
i1G(d){var w=C.i1K(d)
if(d.w==="hati_kuhowa")return C.hkc("",w)
return C.hkb("",w)},
fzp:function fzp(){},
fzo:function fzo(){},
fzv:function fzv(d){this.a=d},
hg0(){var w=new B.S(Date.now(),0,!1),v=new C.ffP()
return B.t(v.$1(B.bR(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
fZR(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fAn(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.l1&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hl5(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fAn(d)
w=B.bi(u)
if(w==null)return!C.fAn(d)
return new B.S(Date.now(),0,!1).a6().cZ(w.a6().bQ(18e9))},
i2r(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hCg(d){return A.a.i(d).toLowerCase()},
aph(d){return C.hCi(d)},
hCi(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$aph=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$aph)
case 7:r=f
p=r.t6("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i5Z(),B.U(o).k("K<1,n>")).c_(0,new C.c8n())
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
return B.i($async$aph,v)},
apg(d,e){return C.hCh(d,e)},
hCh(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apg=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aph(d),$async$apg)
case 3:r=g
if(!J.ch(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apg)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qd(r)),$async$apg)
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
return B.i($async$apg,v)},
api(d,e){return C.hCj(d,e)},
hCj(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$api=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.aph(d),$async$api)
case 3:r=g
if(!J.hF(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$api)
case 8:q=g
w=9
return B.b(q.ar("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qd(r)),$async$api)
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
return B.i($async$api,v)},
UV(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UV=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fSS&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$UV)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aH(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.jy(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gS(d)
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
for(f=x.f,e=J.jy(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gS(e)
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
return B.b(C.apj(),$async$UV)
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
case 16:case 9:$.fSS=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UV,v)},
apj(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apj=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$apj)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6T,o=new B.cK(o,B.a3(o).k("cK<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ag())}w=7
return B.b(s.ar("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$apj)
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
return B.i($async$apj,v)},
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
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6T.n(0,d,o)
$.fSS=!0
w=3
return B.b(C.apj(),$async$a6U)
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
return B.b(B.nn("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6U)
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
apk(d){var w=0,v=B.j(x.T),u,t,s
var $async$apk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hY().a5a(A.eG),$async$apk)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fj(),$async$apk)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZC(t,d),$async$apk)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apk,v)},
aZC(d,e){return C.hCk(d,e)},
hCk(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
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
return B.b(p.wV(q,new Uint8Array(B.ce(d)),D.byD),$async$aZC)
case 8:n=p.Cs(q)
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
ff4(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
fWT(d,e,f,g,h,i,j,k){var w=C.cD(),v=A.k.D(i*0.0017,0.02,0.06)
return C.ep(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cF,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
feD(d,e,f,g){return C.ff4(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fWU(d,e,f,g,h,i,j,k){var w=C.cD()
return C.ep(A.qk,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bn,A.a5,"",h,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,g,e,f)},
hg_(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.ed(v,w,"").split(":"))},
bBu(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
if(a6.w!==a4)return a6
w=a6.x
v=w==null
u=A.a.i(v?"":w)
t=a6.r
s=t.length===0?a3:A.d.gL(t)
t=x.N
r=B.T(t,t)
q=a3
p=a3
if(s!=null)for(t=s.z,o=t.length,n=0;n<t.length;t.length===o||(0,B.L)(t),++n){m=t[n]
l=C.hg_(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.l1&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hC()}h=C.fZn(u)
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
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.hg_(m)
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
A.d.bo(a1.z,new C.fyo(a2))}else A.d.bo(a1.z,new C.fyp())
A.d.K(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fAn(a0))a0.ax=a6.f.a6().ac()
return a0},
fZn(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fBa(D.a4z),l=C.cD(),k=x.u,j=B.a([C.ep(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bn,A.a5,"",1,C.cD(),m,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lu,1,0,0)],k),i=B.a([],k)
i.push(C.Kl("NGMY",A.L,236069181,52,A.bn,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Kl("TAREHE:",A.bg,o,16,A.bn,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fWT("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.hg0()))
i.push(C.feD(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Kl("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bn,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Kl("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.ff4(0,0.002,D.fs,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fWU("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fWU("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fWU("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.ff4(268435456,0.175,D.bf,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Kl("VIDEO YA KIAPO",A.bg,o,10,A.bn,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.ep(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bn,A.a5,"",0.131,C.cD(),t,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cm,D.lu,0.77,0.115,0.492))
i.push(C.Kl("Rais Anayeapa:",A.bg,p,15,A.bn,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Kl("Jina:",A.bg,p,13,A.bn,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fWT("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.feD(0.195,0.7130000000000001,0.62,n))
i.push(C.Kl("Sahihi:",A.bg,p,13,A.bn,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.ep(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bn,A.a5,"",0.07,C.cD(),t,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,0.38,0.21500000000000002,0.73))
i.push(C.feD(0.21500000000000002,0.795,0.38,n))
i.push(C.Kl("Tarehe:",A.bg,p,13,A.bn,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fWT("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.hg0()))
i.push(C.feD(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.ff4(0,0.032,D.bf,o,1,"state_box",0.72,0.14,0.875),C.Kl("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bn,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rq(4294967035,t,0,0,j,l,D.q9,"","",u,D.dd)
return C.Bw(t,t,t,t,D.oa,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cD(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ag7(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag7=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.T(D.eRs)
w=1
break}w=3
return B.b(C.UV(!0),$async$ag7)
case 3:w=4
return B.b(C.aZD(p),$async$ag7)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hl5(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bQ(D.bcE,null,new C.ftf(p),f,!0,!0,!1,A.lv,!1,!1,x.N),$async$ag7)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.ftg(),f,null,!0,!0,x.y),$async$ag7)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fZn(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.T(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fZn(p))
case 1:return B.h(u,v)}})
return B.i($async$ag7,v)},
ffP:function ffP(){},
c8n:function c8n(){},
fyo:function fyo(d){this.a=d},
fyp:function fyp(){},
ftf:function ftf(d){this.a=d},
ftd:function ftd(d){this.a=d},
fte:function fte(d){this.a=d},
ftg:function ftg(){},
ftb:function ftb(d){this.a=d},
ftc:function ftc(d){this.a=d},
apP:function apP(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDa:function aDa(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e8r:function e8r(d){this.a=d},
e8p:function e8p(d){this.a=d},
e8q:function e8q(d){this.a=d},
e8s:function e8s(d){this.a=d},
e8t:function e8t(d){this.a=d},
wr(d,e,f,g,h,i,j,k,l,m,n){var w=C.cD()
return C.ep(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",j,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,l,m,n)},
hfE(d,e,f){var w=4291404327
return B.a([C.q3(0,f,D.eL,w,2,"ring_l",f,d-f*0.42,e),C.q3(0,f,D.eL,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fe3(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q3(4294967288,f,D.eL,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q3(h,s,D.eL,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q3(h,f*0.46,D.eL,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q3(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
fe2(d,e,f,g,h,i,j,k,l){var w=C.cD(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.ep(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cF,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,l,0,0,"",D.cm,D.cQ,g,e,f)},
byU(d,e,f,g){return C.q3(0,0.002,D.fs,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hfD(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q3(0,0.036,D.bf,h,1.4,"banner_box_"+d,w,v,e),C.wr(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hkR(){var w=new B.S(Date.now(),0,!1),v=new C.fzu()
return B.t(v.$1(B.bR(w)))+"/"+B.t(v.$1(B.bH(w)))+"/"+B.bA(w)},
hfF(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wr(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fe2("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.byU(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wr("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bn,A.a5,"",0.05,C.cD(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,s,t,g-0.004),C.byU(t,g+0.044,s,w)],x.u)},
agz(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.dbi,D.cgZ,D.d46,D.d5V],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gS(0)
if(u.a===d)return u}return null},
fWb(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fBa(d.d),v=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cD(),w,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,1,0,0)],x.u)
A.d.v(v,C.hR2(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hR2(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wr("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hfE(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hfE(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fe3(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fe3(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wr("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q3(0,0.062,D.eL,b1,1.6,"crest_o",0.11,0.445,0.012),C.q3(0,0.046,D.eL,b1,1,"crest_i",0.084,0.458,0.02),C.wr("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q3(0,0.002,D.fs,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q3(b9,0.016,D.l2,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q3(0,0.002,D.fs,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wr("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fe2("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hkR()),C.byU(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wr(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.q3(c0,0.0026,D.bf,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.q3(c3.e,0.138,D.bf,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cD()
c2.push(C.ep(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bn,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.bf,b3,2,c5,0,0,"",D.cm,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.q3(0,0.036,D.bf,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cD()
A.d.v(c2,B.a([s,C.ep(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bn,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.bf,b3,2,c7,0,0,"",D.cm,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hfD(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wr(c9,A.bg,b9,d0,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fe2("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
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
A.d.v(c2,C.hfD("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a4o||w===D.a4q||w===D.a4n||w===D.a4p){w=t-0.008
A.d.v(c2,C.fe3(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fe3(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q3(0,a4,D.bf,c0,1.3,"wit_table_border",0.82,0.09,t),C.q3(c0,a4,D.bf,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q3(0,0.0022,D.fs,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wr("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wr("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hfF("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hfF("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q3(0,0.11,D.bf,c0,1.2,"mw_box",0.82,0.09,t),C.wr("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wr("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fe2("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.byU(0.215,p,0.3116,b5),C.wr("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.ep(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bn,A.a5,"",0.044,C.cD(),a9,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,0.3161999999999999,0.5738,s-0.044),C.byU(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q3(0,0.032,D.bf,c0,1,"state_box",0.7,0.15,a8),C.wr("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i1I(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.h_0(d.d),p=new C.fzq(s),o=new C.fzr(s),n=d.z,m=n===D.a4o||n===D.a4q||n===D.a4n||n===D.a4p,l=n===D.aEI||n===D.a4r||n===D.aEJ,k=B.bZ(0,B.fL(q,A.A,t,t,A.cj,A.bS,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a4r?26:16
i.push(new C.fzt().$1$size(w))}if(n===D.aEK)i.push(D.fw9)
if(m)i.push(B.B(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hB,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.am)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aNK,p.$1$w(0.9),D.aNK,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b84,t,n,w,t,t,A.n),t,t,t,t,A.aij,t,t,t))
i.push(A.am)
i.push(new C.fzs(r).$1("NIMETOWE"))
i.push(A.h0)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.D(A.LP,new B.cm(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.db,new B.bD(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b0,A.r,B.a([k,new B.D(A.agU,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hkb(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agz(e,t)
if(r==null)r=A.d.gL(D.Gt)
w=C.cD()
v=C.rq(r.e,t,0,0,C.fWb(r,0.165,y.O,D.d6u,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.q9,"","",s,D.dd)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bw(t,t,t,t,D.oa,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hkc(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agz(e,t)
if(r==null)r=A.d.gL(D.Gt)
w=C.cD()
v=C.rq(r.e,t,0,0,C.fWb(r,0.165,y.f,D.d2g,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.q9,"","",s,D.dd)
w=C.cD()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bw(t,t,t,t,D.oa,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCQ(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCQ=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bQ(A.K,null,new C.fL1(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCQ,v)},
ag8(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag8=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a1<1>")
p=B.C(new B.a1(i,new C.ftj(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.L3,null,new C.ftk(p),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$ag8)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCQ(d,"Hati ya Kuhowa",D.Gt),$async$ag8)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KZ(d,"Tafuta jimbo\u2026","",A.k0,"Chagua jimbo"),$async$ag8)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hkb(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag8,v)},
ag9(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag9=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a1<1>")
p=B.C(new B.a1(i,new C.ftn(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.L3,null,new C.fto(p),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$ag9)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCQ(d,"Hati ya Kuhoweya",D.Gt),$async$ag9)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KZ(d,"Tafuta jimbo\u2026","",A.k0,"Chagua jimbo"),$async$ag9)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hkc(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag9,v)},
aga(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$aga=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a1<1>")
m=B.C(new B.a1(i,new C.ftr(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(D.L3,null,new C.fts(m),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$aga)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hC())
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
return B.b(B.KZ(d,"Tafuta jimbo\u2026","",A.k0,"Chagua jimbo"),$async$aga)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agz(s,D.Qf)
if(q==null)q=A.d.gL(D.Qf)
n=C.cD()
p=C.rq(q.e,null,0,0,C.fWb(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cYj,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.q9,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
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
fzu:function fzu(){},
fzq:function fzq(d){this.a=d},
fzs:function fzs(d){this.a=d},
fzt:function fzt(){},
fzr:function fzr(d){this.a=d},
fL1:function fL1(d,e){this.a=d
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
ftj:function ftj(){},
ftk:function ftk(d){this.a=d},
fth:function fth(d){this.a=d},
fti:function fti(d){this.a=d},
ftn:function ftn(){},
fto:function fto(d){this.a=d},
ftl:function ftl(d){this.a=d},
ftm:function ftm(d){this.a=d},
ftr:function ftr(){},
fts:function fts(d){this.a=d},
ftp:function ftp(d){this.a=d},
ftq:function ftq(d){this.a=d},
Ko(d,e,f,g,h,i,j,k,l,m){var w=C.cD()
return C.ep(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bn,h,"",i,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,k,l,m)},
Cw(d,e,f,g,h,i,j,k,l){var w=C.cD()
return C.ep(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bn,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cm,D.f0,j,k,l)},
hgk(d,e,f){return C.Cw(0,0.002,D.fs,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
bz3(d,e,f,g,h){return B.a([C.Cw(4294967288,0.032,D.bf,4291404327,1.15,"pill_"+d,g,f,e),C.Ko(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fWY(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cw(0,0.002,D.fs,g,1,"orn_l_"+t,u,d,v),C.Cw(h,0.016,D.l2,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cw(0,0.002,D.fs,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0R(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Ko(d,A.bg,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cD()
return B.a([v,C.ep(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cF,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cm,D.cQ,t,u,g-0.002),C.hgk(u,g+0.018,t)],x.u)},
hgl(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cw(h,0.028,D.bf,h,0,"chv_"+d,g,e,f),C.Cw(w,0.024,D.l2,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cw(w,0.024,D.l2,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Ko(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bz2(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Ko("Sahihi:",A.bg,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bn,A.a5,"",0.032,C.cD(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cm,D.f0,v,w,f-0.006),C.hgk(w,f+0.016,v)],x.u)},
h_1(d){var w,v
for(w=0;w<19;++w){v=D.Qs[w]
if(v.a===d)return v}return null},
i3Z(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agz(A.a.b2(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agz(A.a.b2(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b2(k,18)
w=C.agz(u,D.Qf)
v=w==null?l:w.d
if(v==null){w=C.agz(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.h_1(A.a.b2(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hh9.a9(0)
$.hhm.a9(0)
t=C.fBa(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
h07(d){var w=0,v=B.j(x.T),u
var $async$h07=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bQ(A.K,null,new C.fMu(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h07,v)},
xt:function xt(d,e){this.a=d
this.b=e},
nD:function nD(d,e,f,g,h,i,j){var _=this
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
fMu:function fMu(){},
acY:function acY(d){this.a=d},
edG:function edG(d,e){this.a=d
this.b=e},
edF:function edF(d){this.a=d},
edE:function edE(d,e){this.a=d
this.b=e},
aeE:function aeE(d,e,f){this.c=d
this.d=e
this.a=f},
h_0(d){return $.hhm.cg(0,d,new C.fBc(d))},
fBa(d){return $.hh9.cg(0,d,new C.fBb(d))},
fy(d){return B.fQr(d>>>16&255,d>>>8&255,d&255,255)},
hU5(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hir(4294570461,4293910718,4284234270,u)
case 1:return C.hir(4294635750,4293975240,t,4292912216)
case 2:w=C.fcE(s,4294505966,r)
C.byO(w,14,16,p)
C.kt(w,8,9,464,836,u,1.2)
C.Cs(w,2,2,1,1,u,10)
C.Cs(w,478,2,-1,1,u,10)
C.Cs(w,2,852,1,-1,u,10)
C.Cs(w,478,852,-1,-1,u,10)
return w
case 3:return C.fcE(4294966515,4294373082,4289102906)
case 4:return C.hOS(C.fcE(4294376440,4293653998,4290287194))
case 5:w=C.fcE(4294965238,4294437098,4288444980)
C.byO(w,14,16,4283043359)
C.kt(w,6,7,468,840,u,1)
C.kt(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hn(q,q,A.cb,0,A.e2,854,q,0,3,q,A.cb,480,!1)
C.yj(v,n,4294175448)
C.rL(v,n)
C.kt(v,24,24,432,806,4286209070,1)
C.a0F(v,12,12,468,12,o,3,20)
C.a0F(v,12,842,468,842,o,3,20)
C.a0F(v,12,12,12,842,o,3,20)
C.a0F(v,468,12,468,842,o,3,20)
return v
case 7:return C.hMU(4294440434,4293518297,4280228630,r)
case 8:v=B.hn(q,q,A.cb,0,A.e2,854,q,0,3,q,A.cb,480,!1)
C.yj(v,m,4293911504)
C.rL(v,m)
C.kt(v,28,28,424,798,l,1)
C.fly(v,28,28,l,k)
C.fly(v,452,28,l,k)
C.fly(v,28,826,l,k)
C.fly(v,452,826,l,k)
return v
case 9:v=B.hn(q,q,A.cb,0,A.e2,854,q,0,3,q,A.cb,480,!1)
C.yj(v,j,4294111986)
C.rL(v,j)
C.kt(v,18,18,444,818,4292401368,0.7)
B.iK(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hQP(i,4294173372)
case 11:return C.hRU(4294439140,4293449662)
case 12:return C.hMM(h,4294239432)
case 13:return C.hRl(4294244340,4293193448)
case 14:return C.hVE(4294505710,4293780694)
case 15:return C.fbC(4294966259,4294439138,o,p,q)
case 16:return C.fbC(4294966776,4294178544,o,g,g)
case 17:return C.fbC(4294965493,4294504170,o,4286200650,q)
case 18:return C.fbC(4294966519,4294373862,o,p,p)
case 19:return C.hPX()
case 20:return C.hPY()
case 21:v=B.hn(q,q,A.cb,0,A.e2,854,q,0,3,q,A.cb,480,!1)
C.yj(v,h,4293976768)
C.rL(v,h)
C.byO(v,14,16,p)
B.iK(v,!0,C.fy(u),4,475,4,9)
B.iK(v,!0,C.fy(u),4,475,844,849)
B.iK(v,!0,C.fy(u),4,9,4,849)
B.iK(v,!0,C.fy(u),470,475,4,849)
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
case 22:v=B.hn(q,q,A.cb,0,A.e2,854,q,0,3,q,A.cb,480,!1)
C.yj(v,s,4294438872)
C.rL(v,s)
C.kt(v,14,16,452,822,o,2.2)
C.kt(v,22,24,436,806,o,1)
C.fYh(v,!1,!1,o,p,p,36,14,16)
C.kJ(v,240,20,7,o,!0)
C.kJ(v,240,834,7,o,!0)
C.kJ(v,18,427,7,o,!0)
C.kJ(v,462,427,7,o,!0)
return v
case 23:v=B.hn(q,q,A.cb,0,A.e2,854,q,0,3,q,A.cb,480,!1)
C.yj(v,i,4293910712)
C.rL(v,i)
B.iK(v,!0,C.fy(u),0,479,0,20)
B.iK(v,!0,C.fy(u),0,479,834,853)
B.iK(v,!0,C.fy(u),0,20,0,853)
B.iK(v,!0,C.fy(u),460,479,0,853)
B.iK(v,!0,C.fy(f),5,474,5,9)
B.iK(v,!0,C.fy(f),5,474,844,848)
B.iK(v,!0,C.fy(f),5,9,5,848)
B.iK(v,!0,C.fy(f),470,474,5,848)
C.kt(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hn(q,q,A.cb,0,A.e2,854,q,0,3,q,A.cb,480,!1)
C.yj(v,e,4294174404)
C.rL(v,e)
C.byO(v,14,16,p)
B.iK(v,!0,C.fy(u),3,476,3,8)
B.iK(v,!0,C.fy(u),3,476,845,850)
B.iK(v,!0,C.fy(u),3,8,3,850)
B.iK(v,!0,C.fy(u),471,476,3,850)
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
rL(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eM()
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
r=A.o.D(A.k.N(s.gbb())-3,0,255)
q=A.o.D(A.k.N(s.gb9(s))-2,0,255)
p=d.a
if(p!=null)p.jJ(u,t,v,r,q,255)}},
kt(d,e,f,g,h,i,j){var w,v=null,u=C.fy(i),t=e+g
B.kL(d,!0,A.dc,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kL(d,!0,A.dc,u,v,A.cX,j,e,t,w,w)
B.kL(d,!0,A.dc,u,v,A.cX,j,e,e,f,w)
B.kL(d,!0,A.dc,u,v,A.cX,j,t,t,f,w)},
Cs(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kL(d,!0,A.dc,C.fy(i),u,A.cX,2,e,e+g*j,f,f)
B.kL(d,!0,A.dc,C.fy(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kL(d,!0,A.dc,C.fy(i),u,A.cX,1,w,e+g*t,v,v)
B.kL(d,!0,A.dc,C.fy(i),u,A.cX,1,w,w,v,f+h*t)},
hir(d,e,f,g){var w=null,v=B.hn(w,w,A.cb,0,A.e2,854,w,0,3,w,A.cb,480,!1)
C.yj(v,d,e)
C.rL(v,d)
B.iK(v,!0,C.fy(f),0,479,0,28)
B.iK(v,!0,C.fy(f),0,479,826,853)
B.iK(v,!0,C.fy(f),0,28,0,853)
B.iK(v,!0,C.fy(f),452,479,0,853)
C.kt(v,5,5,470,844,g,1.1)
C.kt(v,28,28,424,798,g,1.6)
C.Cs(v,2,2,1,1,g,11)
C.Cs(v,478,2,-1,1,g,11)
C.Cs(v,2,852,1,-1,g,11)
C.Cs(v,478,852,-1,-1,g,11)
return v},
fcE(d,e,f){var w=null,v=B.hn(w,w,A.cb,0,A.e2,854,w,0,3,w,A.cb,480,!1)
C.yj(v,d,e)
C.rL(v,d)
C.kt(v,14,16,452,822,f,1.6)
C.kt(v,20,22,440,810,f,0.8)
return v},
byO(d,e,f,g){var w,v=C.fy(g)
B.iK(d,!0,v,0,479,0,f-1)
w=854-f
B.iK(d,!0,v,0,479,w,853);--w
B.iK(d,!0,v,0,e-1,f,w)
B.iK(d,!0,v,480-e,479,f,w)},
hOS(d){var w,v,u=4291404327
C.byO(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kJ(d,w,8,3,u,!0)
C.kJ(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kJ(d,7,v,3,u,!0)
C.kJ(d,473,v,3,u,!0)}return d},
foA(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jf(e,f),new B.jf(e+g*n,f),new B.jf(e,f+h*n)],t)
B.a1q(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jf(s,u),new B.jf(e+g*v,u),new B.jf(s,f+h*v)],t)
B.a1q(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kJ(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kJ(d,e+g*t,f+h*3,4,k,!0)
C.kJ(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kJ(d,e+g*t,f,5,k,!0)
C.kJ(d,e,f+h*t,5,k,!0)}},
fYh(d,e,f,g,h,i,j,k,l){var w,v
C.foA(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.foA(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.foA(d,k,v,1,-1,e,f,g,h,i,j)
C.foA(d,w,v,-1,-1,e,f,g,h,i,j)},
a0F(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l1(d,!0,A.dc,new B.qX(p),null,A.cX,j,r,q)}},
fnG(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
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
hMU(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hn(o,o,A.cb,0,A.e2,854,o,0,3,o,A.cb,480,!1)
C.yj(n,d,e)
C.rL(n,d)
C.kt(n,20,20,440,814,f,1.2)
C.fnG(n,0,0,1,1,g)
C.fnG(n,480,0,-1,1,g)
C.fnG(n,0,854,1,-1,g)
C.fnG(n,480,854,-1,-1,g)
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
fly(d,e,f,g,h){var w
C.fri(d,!0,C.fy(g),13,e,f)
C.fri(d,!0,C.fy(g),9,e,f)
w=B.a([new B.jf(e,f-4),new B.jf(e+4,f),new B.jf(e,f+4),new B.jf(e-4,f)],x.J)
B.a1q(d,C.fy(h),w)},
kJ(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jf(e,v),new B.jf(u,f),new B.jf(e,t),new B.jf(s,f)],x.J)
if(i){B.a1q(d,C.fy(h),r)
return}B.kL(d,!0,A.dc,C.fy(h),w,A.cX,1,e,u,v,f)
B.kL(d,!0,A.dc,C.fy(h),w,A.cX,1,u,e,f,t)
B.kL(d,!0,A.dc,C.fy(h),w,A.cX,1,e,s,t,f)
B.kL(d,!0,A.dc,C.fy(h),w,A.cX,1,s,e,f,v)},
fbB(d,e,f,g,h,i,j){var w,v=B.a([new B.jf(e,f),new B.jf(e+g*28,f),new B.jf(e,f+h*28)],x.J)
B.a1q(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kJ(d,v,w,6,j,!0)
C.kJ(d,v,w,3,i,!0)},
fbC(d,e,f,g,h){var w=null,v=B.hn(w,w,A.cb,0,A.e2,854,w,0,3,w,A.cb,480,!1)
C.yj(v,d,e)
C.rL(v,d)
C.kt(v,18,18,444,818,f,2)
C.kt(v,26,26,428,802,f,0.9)
if(h!=null)B.iK(v,!0,C.fy(h),28,451,28,34)
C.fbB(v,18,18,1,1,g,f)
C.fbB(v,462,18,-1,1,g,f)
C.fbB(v,18,836,1,-1,g,f)
C.fbB(v,462,836,-1,-1,g,f)
return v},
hPX(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hn(v,v,A.cb,0,A.e2,854,v,0,3,v,A.cb,480,!1)
C.yj(r,u,4294240980)
C.rL(r,u)
C.kt(r,10,12,460,830,t,3.2)
C.kt(r,18,20,444,814,s,1.2)
C.kt(r,24,26,432,802,t,1.8)
C.fYh(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kJ(r,w,16,3,t,!0)
C.kJ(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kJ(r,16,w,3,t,!0)
C.kJ(r,464,w,3,t,!0)}return r},
hPY(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hn(t,t,A.cb,0,A.e2,854,t,0,3,t,A.cb,480,!1)
C.yj(p,s,4294373080)
C.rL(p,s)
C.kt(p,16,18,448,818,r,2.4)
C.kt(p,24,26,432,802,4286209044,1)
w=new C.fdV(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fYh(p,!1,!0,r,q,q,34,16,18)
return p},
bzu(d,e,f,g,h,i){B.iK(d,!0,C.fy(i),e,e+g,f,f+h)},
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
hQO(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
hQP(d,e){var w,v,u=null,t=B.hn(u,u,A.cb,0,A.e2,854,u,0,3,u,A.cb,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hQO(t,v,w,30,D.cRb,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzu(t,44,44,392,766,d)
C.bAj(t,44,44,392,766,d,e)
C.rL(t,d)
C.kt(t,44,44,392,766,4292128567,2.2)
C.kt(t,50,50,380,754,4279898632,0.8)
return t},
hRT(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.E(g,4)){case 0:C.kJ(d,e,f,7,h,!0)
C.kJ(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kL(d,!0,A.dc,C.fy(h),o,A.cX,1.6,w,u,v,t)
B.kL(d,!0,A.dc,C.fy(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kL(d,!0,A.dc,new B.qX(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kL(d,!0,A.dc,C.fy(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kL(d,!0,A.dc,C.fy(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l1(d,!0,A.dc,C.fy(h),o,A.cX,2,e,f)}},
hRU(d,e){var w,v,u,t,s=null,r=B.hn(s,s,A.cb,0,A.e2,854,s,0,3,s,A.cb,480,!1)
B.iK(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hRT(r,u,v,w,4292391514)}C.bzu(r,46,46,388,762,d)
C.bAj(r,46,46,388,762,d,e)
C.rL(r,d)
C.kt(r,46,46,388,762,4291404327,1.8)
return r},
hdR(d,e,f,g){C.fri(d,!0,C.fy(g),16,e,f)
C.fri(d,!0,C.fy(g),11,e,f)
C.kJ(d,e,f,6,g,!0)
B.kL(d,!0,A.dc,C.fy(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kL(d,!0,A.dc,C.fy(g),null,A.cX,1.3,e,e,f-14,f+14)},
hMM(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hn(v,v,A.cb,0,A.e2,854,v,0,3,v,A.cb,480,!1)
B.iK(s,!0,C.fy(4280948752),0,479,0,853)
B.iK(s,!0,C.fy(u),0,479,0,78)
B.iK(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hdR(s,w,39,t)
C.hdR(s,w,815,t)}C.bzu(s,38,92,404,670,d)
C.bAj(s,38,92,404,670,d,e)
C.rL(s,d)
C.kt(s,38,92,404,670,t,1.8)
C.kt(s,45,99,390,656,4287322667,0.8)
return s},
hRk(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jf(e,f),new B.jf(q-5,w),new B.jf(q,f-(18-Math.abs(r)*3)),new B.jf(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1q(d,new B.qX(o),p)}B.l1(d,!0,A.dc,C.fy(4292128567),null,A.cX,3,e,f)},
hRl(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hn(s,s,A.cb,0,A.e2,854,s,0,3,s,A.cb,480,!1)
C.yj(q,4278931279,4292330394)
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
B.kL(q,!0,A.dc,new B.qX(u),s,A.cX,1.1,v,v,0,853)}B.iK(q,!0,C.fy(r),0,479,0,70)
B.iK(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hRk(q,70+t*85,48,4292128567)
C.bzu(q,48,78,384,712,d)
C.bAj(q,48,78,384,712,d,e)
C.rL(q,d)
C.kt(q,48,78,384,712,4291404327,1.6)
return q},
hVE(d,e){var w,v,u,t=null,s=4279970378,r=B.hn(t,t,A.cb,0,A.e2,854,t,0,3,t,A.cb,480,!1)
B.iK(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kJ(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l1(r,!0,A.dc,new B.qX(u),t,A.cX,1,v,w)}C.bzu(r,40,40,400,774,d)
C.bAj(r,40,40,400,774,d,e)
C.rL(r,d)
C.kt(r,40,40,400,774,4291058750,2)
C.kt(r,48,48,384,758,s,0.8)
return r},
kS:function kS(d,e){this.a=d
this.b=e},
fBc:function fBc(d){this.a=d},
fBb:function fBb(d){this.a=d},
fdV:function fdV(d){this.a=d},
fBQ(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hRN(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fWR(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oC(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aH(0,Ai.agv(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a2(w,x.N,x.z):t
return v}catch(u){return t}},
af1(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$af1=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vf(null,""),$async$af1)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n3(n)
if(e==null)s=A.hp
else{r=C.hRN(e)
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
case 6:throw B.V(q!=null&&B.KO(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$af1,v)},
bBY(d){return C.i3F(d)},
i3F(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bBY=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.af1(r,null),$async$bBY)
case 7:q=f
p=C.fWR(q)
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
hhL(d){var w,v=F.fZj(d)
v=B.aK(v,"book","newspaper")
if(F.a1J(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fFL(d,e,f,g){return C.i5w(d,e,f,g)},
i5w(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fFL=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fBQ(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hle()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.af1('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hhL(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fFL)
case 3:r=m.fWR(i)
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
return B.i($async$fFL,v)},
bBs(d,e,f,g,h){return C.i1h(d,e,f,g,h)},
i1h(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBs=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fM(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hle()
k=A.R.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.af1('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hhL(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBs)
case 3:p=j.fWR(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cy(o)){n=d.aBR(B.a2(o,x.N,x.z))
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
i8i(d,e){return B.a5(d,!1).c5(B.e8(new C.fMF(e),!0,null,x.H))},
fMF:function fMF(d){this.a=d},
Vq:function Vq(d,e){this.c=d
this.a=e},
aDt:function aDt(d,e,f,g,h,i,j,k){var _=this
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
egY:function egY(d){this.a=d},
egX:function egX(){},
egZ:function egZ(d){this.a=d},
egW:function egW(d,e){this.a=d
this.b=e},
eh_:function eh_(){},
egA:function egA(d,e){this.a=d
this.b=e},
egw:function egw(d,e){this.a=d
this.b=e},
egH:function egH(d){this.a=d},
egI:function egI(d,e){this.a=d
this.b=e},
egJ:function egJ(d){this.a=d},
egC:function egC(d,e){this.a=d
this.b=e},
egD:function egD(d,e){this.a=d
this.b=e},
egE:function egE(d,e){this.a=d
this.b=e},
egF:function egF(d){this.a=d},
egG:function egG(d){this.a=d},
egB:function egB(d,e){this.a=d
this.b=e},
egy:function egy(d){this.a=d},
egz:function egz(d){this.a=d},
egP:function egP(d){this.a=d},
egQ:function egQ(d){this.a=d},
egO:function egO(d){this.a=d},
egR:function egR(d,e){this.a=d
this.b=e},
egN:function egN(d,e){this.a=d
this.b=e},
egS:function egS(d){this.a=d},
egM:function egM(d){this.a=d},
egT:function egT(d){this.a=d},
egL:function egL(d){this.a=d},
egU:function egU(d,e){this.a=d
this.b=e},
egK:function egK(d,e){this.a=d
this.b=e},
egV:function egV(d){this.a=d},
egx:function egx(d,e){this.a=d
this.b=e},
fAM(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fAM=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hfm){w=1
break}r=new C.fAN()
t=4
q=x.s
w=7
return B.b(B.iM(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fAM)
case 7:$.hfm=!0
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
return B.i($async$fAM,v)},
bBP(d){return A.GO[B.mx(d)-1]+", "+A.oW[B.bH(d)-1]+" "+B.bR(d)+", "+B.bA(d)},
hUK(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dfq[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fZI(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fE(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a1(v,new C.fz4(),B.U(v).k("a1<1>")))
if(w<d.length-1)h.push("\n\n")}u=B.a([],i)
j.a=0
for(i=f.length,t=0;t<f.length;f.length===i||(0,B.L)(f),++t){s={}
v=f[t]
s.a=s.b=null
r=v.a
s.b=r
q=v.b
s.a=q
v=j.a
p=h.length
if(v>=p||r<20||q<20){u.push("")
continue}o=new C.fz6(j,h)
n=new C.fz5(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iV(o.$1(l)))
j.a+=l}return u},
fWA(d,e){var w=new C.fdw()
return A.d.cI(e,0,new C.fdu(w))>=A.d.cI(d,0,new C.fdv(w))},
hcw(d){var w,v,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
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
fAN:function fAN(){},
fz4:function fz4(){},
fz6:function fz6(d,e){this.a=d
this.b=e},
fz5:function fz5(d,e,f){this.a=d
this.b=e
this.c=f},
fdw:function fdw(){},
fdx:function fdx(){},
fdu:function fdu(d){this.a=d},
fdv:function fdv(d){this.a=d},
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
hn9(d,e){return B.a5(d,!1).c5(B.e8(new C.fMI(e,null),!0,null,x.E))},
fMI:function fMI(d,e){this.a=d
this.b=e},
Vt:function Vt(d,e,f){this.c=d
this.d=e
this.a=f},
aDx:function aDx(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ei8:function ei8(){},
ei9:function ei9(d){this.a=d},
ei7:function ei7(d,e){this.a=d
this.b=e},
ehW:function ehW(d){this.a=d},
ehX:function ehX(d){this.a=d},
ei2:function ei2(d){this.a=d},
ei3:function ei3(d,e){this.a=d
this.b=e},
ei0:function ei0(d){this.a=d},
ei1:function ei1(d,e,f){this.a=d
this.b=e
this.c=f},
ehY:function ehY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ei4:function ei4(d,e){this.a=d
this.b=e},
ei_:function ei_(d,e){this.a=d
this.b=e},
ei5:function ei5(d){this.a=d},
ehZ:function ehZ(d,e){this.a=d
this.b=e},
ei6:function ei6(d,e){this.a=d
this.b=e},
bbf:function bbf(d,e,f){this.b=d
this.c=e
this.a=f},
i8o(d){return B.a5(d,!1).c5(B.e8(new C.fMY(),!0,null,x.I))},
bzf(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fXZ(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fMY:function fMY(){},
a_w:function a_w(d){this.a=d},
ot:function ot(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEU:function aEU(d,e,f,g,h,i,j,k,l){var _=this
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
_.aF=_.aN=_.aE=_.az=_.Y=_.b6=_.be=_.y2=0
_.b_=null
_.b3=0.25
_.bf=null
_.bM=0.5
_.aS=1
_.c8=_.bU=_.bj=0
_.cX=_.cU=!1
_.c=_.a=null},
eRJ:function eRJ(d){this.a=d},
eQB:function eQB(d,e){this.a=d
this.b=e},
eQZ:function eQZ(d,e){this.a=d
this.b=e},
eR8:function eR8(d){this.a=d},
eQk:function eQk(d){this.a=d},
eQl:function eQl(d){this.a=d},
eQi:function eQi(d){this.a=d},
eQj:function eQj(d){this.a=d},
eQS:function eQS(d,e){this.a=d
this.b=e},
eQT:function eQT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eR4:function eR4(d,e,f){this.a=d
this.b=e
this.c=f},
eR3:function eR3(d,e){this.a=d
this.b=e},
eR5:function eR5(d,e){this.a=d
this.b=e},
eR2:function eR2(d,e){this.a=d
this.b=e},
eR7:function eR7(d,e,f){this.a=d
this.b=e
this.c=f},
eR6:function eR6(d,e){this.a=d
this.b=e},
eQa:function eQa(d){this.a=d},
eQb:function eQb(d){this.a=d},
eQc:function eQc(d){this.a=d},
eQ9:function eQ9(){},
eQd:function eQd(d,e){this.a=d
this.b=e},
eQ8:function eQ8(d,e){this.a=d
this.b=e},
eQf:function eQf(){},
eQe:function eQe(d,e){this.a=d
this.b=e},
eQ7:function eQ7(d,e){this.a=d
this.b=e},
eQ4:function eQ4(d,e){this.a=d
this.b=e},
eQg:function eQg(d){this.a=d},
eQ6:function eQ6(d,e){this.a=d
this.b=e},
eQh:function eQh(d){this.a=d},
eQ5:function eQ5(d,e){this.a=d
this.b=e},
eRy:function eRy(d,e){this.a=d
this.b=e},
eRF:function eRF(d){this.a=d},
eRG:function eRG(d,e){this.a=d
this.b=e},
eRH:function eRH(){},
eRz:function eRz(d,e){this.a=d
this.b=e},
eRx:function eRx(d,e){this.a=d
this.b=e},
eRA:function eRA(d,e){this.a=d
this.b=e},
eRw:function eRw(d,e){this.a=d
this.b=e},
eRB:function eRB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRv:function eRv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRC:function eRC(d){this.a=d},
eRD:function eRD(d,e){this.a=d
this.b=e},
eRE:function eRE(d){this.a=d},
eRu:function eRu(d){this.a=d},
eRh:function eRh(d){this.a=d},
eRi:function eRi(d){this.a=d},
eRg:function eRg(d,e){this.a=d
this.b=e},
eRb:function eRb(d,e){this.a=d
this.b=e},
eRj:function eRj(d){this.a=d},
eRm:function eRm(d){this.a=d},
eRf:function eRf(d){this.a=d},
eRn:function eRn(d){this.a=d},
eRo:function eRo(d){this.a=d},
eRp:function eRp(d){this.a=d},
eRq:function eRq(d){this.a=d},
eRe:function eRe(d){this.a=d},
eRr:function eRr(d){this.a=d},
eRd:function eRd(d){this.a=d},
eRs:function eRs(d,e){this.a=d
this.b=e},
eRc:function eRc(d,e){this.a=d
this.b=e},
eRt:function eRt(d){this.a=d},
eRk:function eRk(d){this.a=d},
eRl:function eRl(d){this.a=d},
eQW:function eQW(d){this.a=d},
eQV:function eQV(d){this.a=d},
eQX:function eQX(d,e){this.a=d
this.b=e},
eQU:function eQU(d,e){this.a=d
this.b=e},
eQY:function eQY(d){this.a=d},
eQO:function eQO(d){this.a=d},
eQN:function eQN(d){this.a=d},
eQP:function eQP(d){this.a=d},
eQM:function eQM(d){this.a=d},
eQQ:function eQQ(d,e){this.a=d
this.b=e},
eQL:function eQL(d,e){this.a=d
this.b=e},
eQK:function eQK(d,e){this.a=d
this.b=e},
eQs:function eQs(d){this.a=d},
eQt:function eQt(d){this.a=d},
eQu:function eQu(d){this.a=d},
eQv:function eQv(d){this.a=d},
eQw:function eQw(d){this.a=d},
eQx:function eQx(d){this.a=d},
eQy:function eQy(d){this.a=d},
eQz:function eQz(d){this.a=d},
eQA:function eQA(d){this.a=d},
ePO:function ePO(d){this.a=d},
ePP:function ePP(d){this.a=d},
ePQ:function ePQ(d){this.a=d},
ePR:function ePR(d){this.a=d},
ePS:function ePS(d){this.a=d},
ePN:function ePN(d){this.a=d},
ePT:function ePT(d){this.a=d},
ePU:function ePU(d){this.a=d},
eQm:function eQm(d){this.a=d},
eQn:function eQn(d){this.a=d},
eQo:function eQo(d){this.a=d},
eQp:function eQp(d){this.a=d},
eQq:function eQq(d){this.a=d},
ePY:function ePY(d){this.a=d},
ePZ:function ePZ(d){this.a=d},
eQ_:function eQ_(d){this.a=d},
eQ0:function eQ0(d){this.a=d},
eQ1:function eQ1(d){this.a=d},
ePX:function ePX(d){this.a=d},
eQ2:function eQ2(d){this.a=d},
ePW:function ePW(d){this.a=d},
eQ3:function eQ3(d){this.a=d},
ePV:function ePV(d){this.a=d},
eQR:function eQR(d){this.a=d},
eQJ:function eQJ(d){this.a=d},
eQF:function eQF(d){this.a=d},
eQE:function eQE(d){this.a=d},
eQG:function eQG(d,e){this.a=d
this.b=e},
eQD:function eQD(d,e){this.a=d
this.b=e},
eQH:function eQH(d,e){this.a=d
this.b=e},
eQC:function eQC(d,e){this.a=d
this.b=e},
eQI:function eQI(d){this.a=d},
eR1:function eR1(d){this.a=d},
eR0:function eR0(d,e,f){this.a=d
this.b=e
this.c=f},
eR_:function eR_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eRa:function eRa(d,e){this.a=d
this.b=e},
eR9:function eR9(d,e){this.a=d
this.b=e},
eQr:function eQr(d){this.a=d},
eRI:function eRI(d){this.a=d},
beO:function beO(d,e){this.b=d
this.a=e},
i3Q(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i3R(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kV(0,d),m=B.C(n,B.a3(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b2(d,v)
return n.charCodeAt(0)==0?n:n},
bzQ(){var w=$.byY,v=$.Q6
$.Q6=v+1
return w+"_"+v},
i9(d,e,f,g,h,i,j){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,C.bzQ(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cm,D.f0,g,e,f)},
nT(d,e,f,g){var w=f*9
return C.i9(D.eL,d-f/2,e-w/32,f,w/16,g,0)},
hOs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.byY
p=$.Q6
$.Q6=p+1
w.push(new C.eK(q+"_"+p,D.f0,0,r,1,0.0016,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.bf,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.byY
p=$.Q6
$.Q6=p+1
w.push(new C.eK(q+"_"+p,D.f0,o,0,0.004,1,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.bf,t,t,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nT(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nT(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i9(D.bf,0.08,0.08,0.5,0.003,v,0),C.i9(D.bf,0.58,0.08,0.004,0.06,v,0),C.i9(D.bf,0.58,0.14,0.34,0.003,v,0),C.i9(D.bf,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i9(D.bf,0.08,0.8,0.004,0.14,t,0),C.i9(D.bf,0.08,0.94,0.6,0.003,t,0),C.nT(0.58,0.08,0.05,e),C.nT(0.92,0.22,0.05,e),C.nT(0.08,0.8,0.05,f),C.nT(0.68,0.94,0.05,f),C.nT(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i9(D.l2,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i9(D.l2,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i9(D.l2,0.7,0.8,0.22,0.12,w|1140850688,0),C.i9(D.l2,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nT(0.5,0.5,1.5,w|335544320),C.nT(0.5,0.5,1.15,w|402653184),C.nT(0.5,0.5,0.8,v|436207616),C.nT(0.95,0.05,0.4,v|855638016),C.nT(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nT(0.85,0.08,0.7,w|1140850688),C.nT(0.1,0.35,0.5,v|855638016),C.nT(0.9,0.62,0.55,v|771751936),C.nT(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i9(D.bf,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i9(D.bf,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i9(D.bf,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i9(D.bf,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nT(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nT(0.5,0.2,0.65,(w|3422552064)>>>0),C.nT(0.5,0.2,0.95,w|855638016),C.i9(D.bf,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i9(D.bf,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i9(D.jH,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i9(D.jH,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i9(D.jH,0.15,0.86,0.6,0.14,1712265002,0),C.nT(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cSC[n]
u=A.o.E(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.byY
l=$.Q6
$.Q6=l+1
w.push(new C.eK(m+"_"+l,D.f0,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bn,A.aD,k,A.bg,null,D.eL,q,q,0,0,!1,"",0,D.cm,0,"","","","","",!1,0))}w.push(C.nT(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i9(D.jH,0.35,-0.1,0.3,0.62,w|855638016,0),C.i9(D.jH,0.05,-0.1,0.3,0.55,v,-0.5),C.i9(D.jH,0.65,-0.1,0.3,0.55,v,0.5),C.nT(0.5,0.04,0.45,w|1711276032)],x.u)
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
return B.a([C.i9(D.eL,0.62,0.02,0.5,0.16,v,0.6),C.i9(D.eL,0.78,0.12,0.4,0.12,u,0.9),C.i9(D.eL,-0.12,0.8,0.5,0.16,u,-0.6),C.i9(D.eL,-0.05,0.9,0.4,0.12,v,-0.9),C.nT(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i9(D.bf,0.09,0.12,0.16,0.006,e,0),C.i9(D.bf,0.05,0.03,0.9,0.001,w,0),C.i9(D.bf,0.05,0.97,0.9,0.001,w,0)],x.u)}},
i0l(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.byY=j
$.Q6=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fwt()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bn,A.a5,"",1,C.bzQ(),g,"","",0,!1,"",0,D.bf,l,2,"",0,0,"",D.cm,D.lu,1,0,0))
if(a9)A.d.v(q,C.hOs(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i3Q(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fws(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.ep(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bn,A.a5,a1,a3*9/16,C.bzQ(),a0,"","",0,!1,a2,0,D.bf,l,2,"",0,0,"",D.cm,D.lu,a3,a4,a5))
return C.rq(s,r,0,0,q,j+"_slide",D.q9,"","","",D.dd)},
rp:function rp(d,e){this.a=d
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
fwt:function fwt(){},
fws:function fws(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hEu(d){var w,v,u,t,s
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
fE8(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fE8=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hfJ){w=1
break}$.hfJ=!0
t=4
w=7
return B.b(B.aA(),$async$fE8)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aH(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.jy(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gS(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gS(h)
l=C.hEu(m)
if(l!=null)J.ch(n,l)}$.Ct.cg(0,B.t(o.a),new C.fE9(n))}C.fXF()
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
return B.i($async$fE8,v)},
fXF(){var w,v=new B.S(Date.now(),0,!1).bQ(-12e8)
for(w=new B.dt($.Ct,$.Ct.r,$.Ct.e);w.C();)J.np(w.d,new C.fkL(v))
$.Ct.bo($.Ct,new C.fkM())},
aNv(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNv=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aNv)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Ct,B.a3($.Ct).k("cK<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gS(h)
g=o
J.ch(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.ar("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aNv)
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
return B.i($async$aNv,v)},
i4r(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fXF()
w=$.Ct.cg(0,d,new C.fEb())
v=Date.now()
u=B.C(e,B.a3(e).k("co.E"))
J.pu(w,0,new C.zn(new B.S(v,0,!1),f,u,g))
C.aNv()},
i4o(d){var w,v=$.Ct.h(0,d)
if(v==null||J.cn(v))return
w=J.cG(v)
w.cC(v,0)
if(w.gam(v))$.Ct.W(0,d)
C.aNv()},
zn:function zn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdr:function cdr(){},
fE9:function fE9(d){this.a=d},
fkL:function fkL(d){this.a=d},
fkM:function fkM(){},
fEb:function fEb(){},
i4t(d){return A.d.dL(D.vZ,new C.fEe(d),new C.fEf())},
hEs(d){var w
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
hEr(d){var w
switch(d.a){case 0:w=D.akJ
break
case 1:w=A.ye
break
case 2:w=A.alN
break
case 3:w=I.akl
break
case 4:w=A.ald
break
case 5:w=A.lS
break
default:w=null}return w},
hRq(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.PG[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.PG[w]
if(!B.cX(v.toLowerCase(),t,0))u=B.cX(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hEt(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
for(w=d.c,v=w.length,u=x.N,t=x.C,s=0;s<w.length;w.length===v||(0,B.L)(w),++s){r=w[s]
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
i4p(d,e,f,g,h){var w=new B.K(D.vZ,new C.fE7(),x.eC).aI(0,", "),v=""+d,u=C.hl6(h),t=F.fxS(h),s=C.hhk(g),r=e.t(0,D.HK)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HL)?'- New slides get an "icon3d" from: '+A.d.aI(D.PG,", ")+".\n":"",p=e.t(0,D.CA)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i4q(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vZ,new C.fEa(),x.eC).aI(0,", "),p=new B.fe("")
if(e.t(0,D.HK)){p.a=s
w=s}else w=""
if(e.t(0,D.HL))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.PG,", ")+".\n")
if(e.t(0,D.CA))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hl6(d)
v=F.fxS(d)
u=C.hhk(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agL(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CS(a3,"{"),a5=J.fQ1(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.L7(a3,a4,a5+1)
try{w=A.R.aH(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cn(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gS(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fC7(),m).c_(0,new C.fC8())
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
f=C.hRq(B.t(f==null?"":f))
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
p=A.d.b4(D.vZ,new C.fC9(r))?r:a7
o=C.fk_(J.q(w,"logo_frame"),D.BZ)
n=C.fk_(J.q(w,"logo_ring"),D.BU)
m=C.fk_(J.q(w,"photo_frame"),D.BZ)
l=C.fk_(J.q(w,"photo_ring"),D.BU)
return new C.aqF(q,p,u,o,n,m,l)}catch(a0){return a1}},
a1f(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hke(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.CB),f7=f6?C.hL7():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eM()
v.dB(f7.w+1)
u=f7.a
t=B.bn(u.b,!0,x.dL)
A.d.fv(t,v)
s=u.c
s=new C.nH("luxe",u.a,A.lS,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i4t(f9.b)
r=g2.t(0,D.a4I)||f6
q=g2.t(0,D.HK)
p=g2.t(0,D.RB)
o=new C.fwx()
n=B.a([],x.g)
m=new C.fwA(o,w,r)
l=new C.fwz(o,r)
k=new C.fwy(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.b4(u,new C.fww(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.E(b1,a3.length)]
b4=A.o.E(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.E(b1,5)
b9=D.cU8[b8]
c0=D.cT4[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eMz.t(0,b2.a)){c7=b0+1
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
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.O))
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
b8=r?D.uh:D.cm
c1.push(new C.eK(b4,D.a4G,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bn,A.aD,4279310375,A.bg,e4,D.bf,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
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
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.HI,!0,a2,250,f5))
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
e2.id=i?f:g7}}if(f8)C.hML(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.E(b1,b8.length)]}else b8=r?D.dhH[A.o.E(b1,6)]:s
n.push(new C.lF(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bw(e4,e4,e4,e4,D.Cx,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fyV(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fyV=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.CA)
n=e.t(0,D.HL)
if(!o&&!n){u=D.a3F
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fyY(o,s[r],n,$.hQb,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iM(t,x.e),$async$fyV)
case 3:q=m.aV(g)
case 4:if(!q.C()){w=5
break}p=q.gS(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fyV,v)},
fxV(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fxV=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i4q(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMR(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fxV)
case 3:u=s.aNb(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxV,v)},
bBt(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBt=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ea(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.K(0,(q==null?r.a(q):q).b)}C.i4r(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agL(i,"colorful")
t=C.i4p(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMR(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hp),$async$bBt)
case 3:u=o.aNb(m,f,h,g,D.dW5,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBt,v)},
aMR(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vf(null,""),$async$aMR)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n3(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qM(t,d,g,null),$async$aMR)
case 7:q=i
p=q.b
if(p!=null){o=C.agL(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KO(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMR,v)},
aNb(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aNb=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.CA)||e.t(0,D.HL)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.db(e,x.Q)
t.W(0,D.CA)}w=6
return B.b(C.fyV(d,t),$async$aNb)
case 6:s=k
w=4
break
case 5:s=D.a3F
case 4:t=d.c
w=A.d.b4(t,new C.fdr())?7:9
break
case 7:r=$.hlZ
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aNb)
case 10:q=k
p=q!=null?A.R.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hke(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hEt(new C.aqF(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("K<1,n>")
t=B.C(new B.K(m,new C.fds(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("jP<co.E,n>")
t=B.C(new B.jP(e,new C.fdt(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.RB)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aNb,v)},
h_q(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a2t[v]
if(A.d.t(t,u.b))w.K(0,u)}return w},
i8t(d){return B.bQ(A.K,null,new C.fN9(),d,!0,!0,!0,null,!1,!1,x.I)},
hLK(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcw().aJ(d)},
i8s(d,e,f){return B.bQ(A.K,null,new C.fN8(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
h_r(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
h_s(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fk_(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b4(e,new C.fk0(w))?w:""},
hhk(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hlX(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agL(a1==null?"":a1,a0),a3=C.agL(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a1<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.rb(new B.a1(r,new C.fEg(t[p]),q))
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
g=B.C(new B.a1(k,new C.fEh(),v),r)
A.d.b0(g,new C.fEi())
if(g.length===0)continue
f=new C.fEj(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i4K(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aFO
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dY0
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dY1
return null},
hgW(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bv(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i4u(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oa
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.L)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.L)(q),++o){n=q[o]
if(n.b!==D.cQ)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.k.D(m*0.85,10,120)
break
case 1:j=A.k.D(m*1.15,10,120)
if(C.hgW(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hgW(n,i,v,u))if(n.w>10){f=h+1
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
i4s(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agL(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a2t[r]
if(q.b===s)w.K(0,q)}}v=C.h_r(e)
u=C.h_s(e)
p=C.hke(n,D.a3F,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("K<1,n>")
o=B.C(new B.K(o,new C.fEc(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jP<co.E,n>")
o=B.C(new B.jP(w,new C.fEd(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.RB)
return p},
i8f(d,e,f){return B.bQ(A.K,null,new C.fMm(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hL7(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eM()
s.dB(t)
w=D.cyd[s.aC(10)]
v=new C.ed3(s)
u=x.N
return new C.ed2(w,s.aC(4),J.fp(v.$1$2(D.cYw,1,x.ff)),w.r[s.aC(3)],v.$1$2(D.ddm,2+s.aC(2),u),v.$1$2(D.d6E,2,u),v.$1$2(D.dgf,4,x.fP),t)},
hML(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eM()
a1.dB(a5.w+a3*13)
w=new C.f9V(a4)
v=new C.f9X(a4,d)
u=new C.f9W(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fT(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fT(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.E(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eL,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a1f(a0,52),"lux_spot",a5.wt(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.bf,0,0,1,1,0,"lux_back",a5.wt(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.bf,0,0,1,1,0,"lux_back2",a5.aEd(0,m,r)))
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
default:a2.push(w.$10$anim$delay(D.bf,0.08,0.06,0.84,0.004,C.a1f(a0,208),"lux_rule",a5.aEd(0,"shimmer",r),D.ug,150))
a2.push(w.$10$anim$delay(D.bf,0.08,0.936,0.84,0.004,C.a1f(a0,144),"lux_rule2","",D.HI,220))}l=!A.d.b4(a2,new C.f9U())||a3===0
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
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.bf,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fT(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.bf,0,0,1,1,0,"lux_velvet",a5.wt(0,"velvet")))},
nH:function nH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fEe:function fEe(d){this.a=d},
fEf:function fEf(){},
vT:function vT(d,e){this.a=d
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
aqF:function aqF(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fE7:function fE7(){},
fEa:function fEa(){},
fC7:function fC7(){},
fC8:function fC8(){},
fC9:function fC9(d){this.a=d},
fwx:function fwx(){},
fwA:function fwA(d,e,f){this.a=d
this.b=e
this.c=f},
fwz:function fwz(d,e){this.a=d
this.b=e},
fwy:function fwy(d,e){this.a=d
this.b=e},
fww:function fww(d){this.a=d},
fyY:function fyY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fyW:function fyW(d){this.a=d},
fyX:function fyX(d){this.a=d},
fdr:function fdr(){},
fds:function fds(){},
fdt:function fdt(){},
fN9:function fN9(){},
a02:function a02(d){this.a=d},
aGP:function aGP(d,e,f,g,h){var _=this
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
eXV:function eXV(d,e,f){this.a=d
this.b=e
this.c=f},
eXW:function eXW(d,e){this.a=d
this.b=e},
eXT:function eXT(d,e){this.a=d
this.b=e},
eXU:function eXU(d,e){this.a=d
this.b=e},
eXS:function eXS(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eXN:function eXN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eXR:function eXR(d,e){this.a=d
this.b=e},
eXM:function eXM(d,e){this.a=d
this.b=e},
eXQ:function eXQ(d,e){this.a=d
this.b=e},
eXL:function eXL(d,e){this.a=d
this.b=e},
eXO:function eXO(d){this.a=d},
eXP:function eXP(d,e){this.a=d
this.b=e},
eXB:function eXB(d,e){this.a=d
this.b=e},
eXC:function eXC(d,e){this.a=d
this.b=e},
eXE:function eXE(d){this.a=d},
eXF:function eXF(d){this.a=d},
eXG:function eXG(d){this.a=d},
eXH:function eXH(d){this.a=d},
eXD:function eXD(d,e){this.a=d
this.b=e},
eXI:function eXI(d,e){this.a=d
this.b=e},
eY8:function eY8(d){this.a=d},
eY9:function eY9(d){this.a=d},
eY7:function eY7(d){this.a=d},
eYa:function eYa(d){this.a=d},
eY6:function eY6(d){this.a=d},
eYc:function eYc(d){this.a=d},
eY5:function eY5(d,e){this.a=d
this.b=e},
eYd:function eYd(d){this.a=d},
eY4:function eY4(d,e){this.a=d
this.b=e},
eYe:function eYe(d){this.a=d},
eY3:function eY3(d){this.a=d},
eYf:function eYf(d){this.a=d},
eY2:function eY2(d,e){this.a=d
this.b=e},
eYg:function eYg(d){this.a=d},
eY1:function eY1(d,e){this.a=d
this.b=e},
eYh:function eYh(d){this.a=d},
eY0:function eY0(d){this.a=d},
eYi:function eYi(d,e){this.a=d
this.b=e},
eY_:function eY_(d,e){this.a=d
this.b=e},
eYj:function eYj(d){this.a=d},
eYb:function eYb(d){this.a=d},
eXZ:function eXZ(d,e){this.a=d
this.b=e},
eXJ:function eXJ(d,e,f){this.a=d
this.b=e
this.c=f},
eXK:function eXK(d,e,f){this.a=d
this.b=e
this.c=f},
eXY:function eXY(d,e){this.a=d
this.b=e},
eXX:function eXX(d,e){this.a=d
this.b=e},
fN8:function fN8(d,e){this.a=d
this.b=e},
a01:function a01(d,e,f){this.c=d
this.d=e
this.a=f},
aGO:function aGO(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eXu:function eXu(d){this.a=d},
eXv:function eXv(d){this.a=d},
eXw:function eXw(d,e){this.a=d
this.b=e},
eXx:function eXx(d){this.a=d},
eXy:function eXy(d){this.a=d},
eXt:function eXt(d,e){this.a=d
this.b=e},
eXz:function eXz(d,e){this.a=d
this.b=e},
eXA:function eXA(d,e){this.a=d
this.b=e},
fk0:function fk0(d){this.a=d},
b0w:function b0w(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDm:function aDm(d,e,f){this.c=d
this.d=e
this.a=f},
bjt:function bjt(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
ed5:function ed5(d){this.a=d},
ed4:function ed4(){},
bh0:function bh0(d,e){this.b=d
this.a=e},
fEg:function fEg(d){this.a=d},
fEh:function fEh(){},
fEi:function fEi(){},
fEj:function fEj(d){this.a=d},
are:function are(d,e){this.a=d
this.b=e},
fEc:function fEc(){},
fEd:function fEd(){},
fMm:function fMm(d,e){this.a=d
this.b=e},
Zo:function Zo(d,e,f){this.c=d
this.d=e
this.a=f},
aAP:function aAP(){var _=this
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
ed2:function ed2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ed3:function ed3(d){this.a=d},
f9V:function f9V(d){this.a=d},
f9X:function f9X(d,e){this.a=d
this.b=e},
f9W:function f9W(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f9U:function f9U(){},
aLn:function aLn(){},
fZg(d){var w,v,u
try{w=A.R.aH(0,d,null)
if(x.f.b(w)){v=B.vL(B.a2(w,x.N,x.z))
return v}}catch(u){}return null},
b0s:function b0s(d,e,f){this.c=d
this.d=e
this.a=f},
bl6:function bl6(d,e){this.c=d
this.a=e},
i0O(d){return A.d.dL(D.GL,new C.fxE(d),new C.fxF())},
i0P(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b2(t,6)
if(w.length===0)return null
v=new B.a1(D.GL,new C.fxG(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gL(0)
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
fxE:function fxE(d){this.a=d},
fxF:function fxF(){},
fxG:function fxG(d){this.a=d},
mS(d,e,f,g,h){return new C.Et(f,g,d)},
hNZ(d){var w=d.z,v=B.U(w).k("a1<1>")
w=B.C(new B.a1(w,new C.fbV(),v),v.k("J.E"))
d.z=w
d.x=""},
dw(d,e){var w=$.Kd
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dx(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,"design_"+C.cD(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cm,D.f0,j,k,l)},
hk1(d,e){var w
C.hNZ(d)
w=A.d.dL($.bDt(),new C.fvu(e),new C.fvv())
$.Kd=w.a
d.x=w.a;++d.y
try{w.bA(d)}finally{$.Kd=""}d.z=B.bn(d.z,!0,x.F)},
Et:function Et(d,e,f){this.a=d
this.b=e
this.e=f},
fbV:function fbV(){},
fDJ:function fDJ(){},
fDK:function fDK(){},
fDL:function fDL(){},
fDW:function fDW(){},
fE0:function fE0(){},
fE1:function fE1(){},
fE2:function fE2(){},
fE3:function fE3(){},
fE4:function fE4(){},
fE5:function fE5(){},
fE6:function fE6(){},
fDM:function fDM(){},
fDN:function fDN(){},
fDO:function fDO(){},
fDP:function fDP(){},
fDQ:function fDQ(){},
fDR:function fDR(){},
fDS:function fDS(){},
fDT:function fDT(){},
fDU:function fDU(){},
fDV:function fDV(){},
fDX:function fDX(){},
fDY:function fDY(){},
fDZ:function fDZ(){},
fE_:function fE_(){},
fvu:function fvu(d){this.a=d},
fvv:function fvv(){},
iU(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.ep(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bf,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CK(d,e,f,g,h,i,j,k,l){return C.ep(A.bg,!1,4279310375,A.aD,"",d,24,A.bn,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cm,D.f0,j,k,l)},
bCc(){var w=new B.S(Date.now(),0,!1)
return A.ih[B.bH(w)-1]+" "+B.bR(w)+", "+B.bA(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bzA(d){return new B.iP((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hT2(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amq(A.cG.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hT6(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.fjz(),x.dv).aI(0,"\n")},
hT5(d){switch(d.a){case 2:return A.ns
case 1:case 5:return A.eX7
default:return A.T3}},
hT_(d){switch(d.a){case 2:return A.uT
case 1:case 5:return A.UT
default:return A.a9z}},
hT3(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bzA(u),q=(s&255)===0?v:C.bzA(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nr(q,p,A.kK)
w=new B.pv(t,t,t,t)}switch(d.ax.a){case 1:return B.lu(v,v,v,new B.kA(r,w,v,A.aaN,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wV(B.lu(v,v,q,v,p+0.4,v,v,v))
default:return B.lu(v,v,v,new B.kA(r,w,B.vn(4),A.hE,v),v,v,v,v)}},
hT1(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f0?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hT_(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hT6(d)
t=C.bzA(d.Q)
s=d.x.a>=700?A.ek:A.vv
r=d.y===A.cF?A.xS:A.ajc
q=d.z
p=new B.CV(w,l,l,B.fb(u,l,l,l,B.h4(l,t,1===q.a?A.aOJ:A.aOI,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hT5(d.as)))
break
case 1:case 4:o=C.hT2(d.at)
n=i===D.lu&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wV(B.fb(w,l,l,l,B.h4(l,A.rx,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.HD(o,n?A.aaJ:A.Vg,l,l)
break
case 3:w=new B.nr(A.I0,1,A.kK)
u=B.vn(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lu(A.uT,B.fb(t,l,l,l,B.h4(l,D.e9j,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.ek,l,!0,l,l,l,l),A.ns),l,new B.kA(E.aH6,new B.pv(w,w,w,w),u,A.hE,l),l,l,l,l)
break
case 2:p=C.hT3(d,e)
break
case 5:p=C.hT0(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hbI(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.as_(m/255,p)}if(w)return new F.vZ(k,l,j,l,new B.RV(new B.kz(g,g,f,1/0),p))
if(i===D.l1){i=new B.nr(A.I0,1,A.kK)
i=B.lu(A.uT,p,l,new B.kA(A.p2,new B.pv(i,i,i,i),B.vn(4),A.hE,l),l,l,D.bv8,l)}else i=p
return new F.vZ(k,l,j,l,new B.fO(g,f,i))},
hT4(d,e,f,g){var w,v=null,u=C.bzA(d.e),t=d.f
t=B.a([F.hak(t!=null?B.lu(v,v,v,new B.kA(v,v,v,A.hE,new B.aW0(E.UU,A.a9t,B.a([u,C.bzA(t)],x.cR),v)),v,v,v,v):B.lu(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.fjy(f,g),B.U(w).k("K<1,ff>")))
return F.cqG(t)},
h_u(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$h_u=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3U(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.Wb(A.wa,A.HY,D.bwf,null,null,null,!1,null)
o=new B.BC(o,new C.fEp(607,787,p,d))
o.Mk(n,null)
r.push(o)}u=n.k6(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_u,v)},
hT0(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fZg(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaj8()
if(h==null)h=A.awH
j=B.tq(4279308564)
w=B.vn(18)
v=new B.nr(B.tq(4287531653),3,A.kK)
u=i.length===0?"My links":i
u=B.a([B.wV(B.fb(u,m,m,m,B.h4(m,A.p2,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.ek,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wV(B.fb(A.a.i(l.c),m,m,m,D.f3g,m)))
u.push(new B.fO(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bS(t,t.gM(0),s.k("bS<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tq(4280690220)
o=new B.a8Y(8,8)
n=A.a.i(r.b)
u.push(new B.nI(D.bpq,new C.awb(new C.ahR(q),B.lu(m,B.fb(n.length===0?A.a.i(r.c):n,m,m,m,D.f5z,A.ns),m,new B.kA(p,m,new B.aih(o,o,o,o),A.hE,m),m,m,D.bvy,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wV(B.fb(k,m,m,m,D.f4O,m))
u.push(new C.awb(C.hsD(k),t))}return B.lu(m,B.yG(u,A.Lx,A.ls),m,new B.kA(j,new B.pv(v,v,v,v),w,A.hE,m),m,m,D.bqg,m)},
fjz:function fjz(){},
fjy:function fjy(d,e){this.a=d
this.b=e},
fEp:function fEp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agy(d){var w,v
for(w=0;w<32;++w){v=D.GC[w]
if(v.a===d)return v}return null},
hem(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aJ(A.a.b2(d,u+1))
return w}catch(v){return null}},
cW(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hn5(d,e){return B.a5(d,!1).c5(B.e8(new C.fKM(e),!0,null,x.fB))},
hn4(d,e){return B.bQ(A.K,null,new C.fKL(e),d,!0,!0,!0,null,!1,!1,x.fB)},
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
Nd:function Nd(d,e,f,g){var _=this
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
eWI:function eWI(d,e){this.a=d
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
fKM:function fKM(d){this.a=d},
YX:function YX(d,e){this.c=d
this.a=e},
azc:function azc(){var _=this
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
fKL:function fKL(d){this.a=d},
fKK:function fKK(d){this.a=d},
fKJ:function fKJ(d,e,f){this.a=d
this.b=e
this.c=f},
fKI:function fKI(d,e){this.a=d
this.b=e},
aKR:function aKR(){},
i8r(d){return B.bQ(A.K,null,new C.fN7(),d,!0,!0,!0,null,!1,!1,x.N)},
fN7:function fN7(){},
Zh:function Zh(d){this.a=d},
bfn:function bfn(d){this.d=d
this.c=this.a=null},
deb:function deb(d){this.a=d},
dec:function dec(d,e){this.a=d
this.b=e},
ded:function ded(d){this.a=d},
hPu(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.xj},
i2J(d){var w,v=A.d.gL(d.split("@"))
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
i2I(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hPu(d)
switch(q){case"shimmer":return B.nM(A.a9V,g,new C.fB5(p,A.k.E(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b0,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beL(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.ed(A.A,B.dc(C.fRn(g,B.a4K(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
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
fB5:function fB5(d,e){this.a=d
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
fB8(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.l1},
i2O(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b0(j,new C.fB9())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gL(B.aPK(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i2N(d,e){var w,v,u,t,s,r=d.db
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
e=B.C(new B.a1(a4,new C.ftv(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bQ(A.dH,null,new C.ftw(e),d,!0,!0,!1,A.lv,!1,!1,x.N),$async$agb)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hC())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.h07(d),$async$agb)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.KZ(d,"Search states\u2026","",A.k0,"Choose state"),$async$agb)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.h_1(s)
if(p==null)p=A.d.gL(D.Qs)
f=C.cD()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cD()
m=p.e
l=C.fBa(p.d)
k=x.u
j=B.a([C.ep(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bn,A.a5,"",1,C.cD(),l,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Cw(i,0.016,D.l2,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cw(0,0.058,D.eL,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cw(0,0.058,D.eL,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Ko("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Ko("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fWY(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.bz3("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0R("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0R("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0R("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0R("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.bz3("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cw(m,0.082,D.bf,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cD()
k.push(C.ep(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bn,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.bf,4280172719,2,y.O,0,0,"",D.cm,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fWY(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.bz3("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.hgl("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.hgl("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
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
h=B.C(C.fWY(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Ko("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Ko("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bw(null,null,null,null,D.oa,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rq(m,null,0,0,j,n,D.q9,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$agb,v)},
fB9:function fB9(){},
ftv:function ftv(){},
ftw:function ftw(d){this.a=d},
ftt:function ftt(d){this.a=d},
ftu:function ftu(d){this.a=d},
hSv(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hSu(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mJ
case"lineThrough":return A.zu
default:return A.aD}},
ep(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eK(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hip(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Qe[w]
if(v.b===u)return v}return D.dd},
hOT(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cPY[w]
if(v.b===u)return v}return D.cQ},
hVi(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.de_[w]
if(v.b===u)return v}return D.bf},
rq(d,e,f,g,h,i,j,k,l,m,n){return new C.lF(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h94(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hQT(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hip(d.h(0,"transition"))
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
n=B.C(n,B.a3(n).k("J.E"))}return C.rq(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hQT(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aox[w]
if(v.b===u)return v}return D.mD},
Bw(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.i0(p,t,a1,h,i,w,a0==null?B.a([C.rq(4294967295,null,0,0,null,C.cD(),D.q9,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
VC(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hN0(a6.h(0,"aspectRatio"))
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
g=B.C(g,B.a3(g).k("J.E"))}return C.Bw(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rq(4294967295,a3,0,0,a3,C.cD(),D.q9,"","","",D.dd)],x.g):g,v,p,o,s)},
kv(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hN0(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.deQ[w]
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
A.d.K(d.z,C.ep(A.L,!1,4294967295,A.aD,"",n,42,A.bn,A.u,"",0.2,C.cD(),p,"","",0,!1,"",0,D.bf,m,2,"Section Header",0,0,"",D.cm,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cD()
v=C.ep(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bn,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Compare",0,0,"",D.cm,D.cQ,0.88,0.06,0.06)
u=C.cD()
t=f.c
u=C.ep(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bn,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.bf,t.l(),2,"",0,0,"",D.cm,D.f0,0.42,0.06,0.22)
s=C.cD()
r=f.e
s=C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bn,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bf,m,2,"Option A",0,0,"",D.cm,D.cQ,0.38,0.08,0.26)
q=C.cD()
t=C.ep(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bn,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.bf,t.j(0.5).l(),2,"",0,0,"",D.cm,D.f0,0.42,0.52,0.22)
q=C.cD()
A.d.v(w,B.a([v,u,s,t,C.ep(A.bg,!1,r.l(),A.aD,"",n,20,A.bn,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bf,m,2,"Option B",0,0,"",D.cm,D.cQ,0.38,0.54,0.26)],x.u))
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
hED(d){return A.d.dL(D.a27,new C.cdG(d),new C.cdH())},
hEA(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aH(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gS(t)
if(!q.b(u))continue
try{J.ch(v,C.VC(B.a2(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fTt(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cdB(t)
for(w=J.aV(d);w.C();)s.$1(w.gS(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.C(new B.bc(t,w),w.k("J.E"))
A.d.b0(u,new C.cdA())
return u},
h97(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cdw()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aqG(d){return C.hEy(d)},
hEy(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqG=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cdz()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a22(m),$async$aqG)
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
return B.b(B.aA(),$async$aqG)
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
case 11:o=l.$1($.h96.h(0,m))
n=C.fTt(C.fTt(j,r),o)
if(n.length===0){u=C.h97(C.h97(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqG,v)},
cdv(d){return C.hEx(d)},
hEx(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cdv=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cdv)
case 7:r=f
q=r.t6("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
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
b0y(d,e){return C.hEz(d,e)},
hEz(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0y=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b0y)
case 6:s=g
q=s.t6("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.K(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.L6(r,J.ad(r)-500):r
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
VD(d,e){return C.hEB(d,e)},
hEB(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$VD=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h95.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqG(a3),$async$VD)
case 5:p=a6
case 4:w=6
return B.b(C.cdv(a3),$async$VD)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gS(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.L)(a4),++j){i=a4[j]
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
A.d.b0(e,new C.cdD())
$.h95.n(0,a0,e)
n=B.U(e).k("K<1,a4<n,@>>")
n=B.C(new B.K(e,new C.cdE(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.h96.n(0,a0,r)
t=8
w=11
return B.b(B.agZ(a0,r),$async$VD)
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
aqE:function aqE(d,e){this.a=d
this.b=e},
uB:function uB(d,e){this.a=d
this.b=e},
mu:function mu(d,e){this.a=d
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
i2Z(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fBI(e,v,d,B.aX(w))
w.$1(new C.fBE())
w.$1(new C.fBF())
w.$1(new C.fBG())
w.$1(new C.fBH())
return v},
fBI:function fBI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBE:function fBE(){},
fBF:function fBF(){},
fBG:function fBG(){},
fBH:function fBH(){},
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
anP:function anP(d,e){this.c=d
this.a=e},
biA:function biA(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
dFR:function dFR(){},
aKC:function aKC(){},
cds(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cds=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.T(D.eUk)
u=!1
w=1
break}u=B.kU(!1,d,t,!1,null,A.a4K,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cds,v)},
hEv(d){var w=A.d.bd(D.GL,new C.cdt(d))
if(w<0)return!0
return w>=4},
hEw(d){var w=A.d.bd($.bDt(),new C.cdu(d))
if(w<0)return!0
return w>=5},
cdt:function cdt(d){this.a=d},
cdu:function cdu(d){this.a=d},
i4E(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yu()
$.qa().pT(t,new C.fEw(s),!0)
u=B.a([B.DG(v,A.qd,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f3K,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.ne,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b0,A.r,u,v)},
fEw:function fEw(d){this.a=d},
i4f(){return C.h_n()},
i1c(){return C.bBq()},
i3f(){return C.h_e()},
aOP(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOP=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fDC(d,f),$async$aOP)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOP,v)},
fDC(d,e){var w=0,v=B.j(x.H),u
var $async$fDC=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzB
if(u==null)u=e+".pdf"
w=2
return B.b(B.bQ(A.K,null,new C.fDD(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fDC)
case 2:return B.h(null,v)}})
return B.i($async$fDC,v)},
fDD:function fDD(d,e){this.a=d
this.b=e},
ad0:function ad0(d,e,f){this.c=d
this.d=e
this.a=f},
epv:function epv(d,e){this.a=d
this.b=e},
epw:function epw(d,e){this.a=d
this.b=e},
epx:function epx(d,e){this.a=d
this.b=e},
epy:function epy(d){this.a=d},
adi:function adi(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0u(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0t(g,m,f,d,e,h,l,k,j,o,i,null)},
hll(d){return B.cp(new C.fBD(d))},
h_p(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i4n(d){if(d===D.cm)return"None"
return C.h_p(d)},
bA6(d,e,f,g){return C.hVp(d,e,f,g)},
hVp(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bA6=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fXg&&t.px())t.eK()
$.fXg=!0
s.a=null
w=3
return B.b(B.hT(A.bi,!0,"Animation preview",d,new C.fm6(s,e,g,f),null,A.eF,!0,x.H),$async$bA6)
case 3:s=s.a
if(s!=null)s.a7(0)
$.fXg=!1
case 1:return B.h(u,v)}})
return B.i($async$bA6,v)},
fNW(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fNW=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bV,x.w).w.a.a*0.88,280,440)
s=f===D.cm
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.h_p(f)+" Slide transition preview"
s=s?Af.F5:A.vf
w=3
return B.b(C.bA6(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aId(f,null),A.aq),null),r),$async$fNW)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fNW,v)},
hkE(d,e,f){var w,v,u=null,t=A.ct.aw(0,A.k.D(e,0,1))
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
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.h_p(f)+" Element animation preview"
s=s?Af.F5:A.vf
w=3
return B.b(C.bA6(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.ayX(f,null),A.aq),null),r),$async$bCZ)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bCZ,v)},
i4m(d){var w,v,u,t,s=$.afF.W(0,d)
if(s!=null){$.afF.n(0,d,s)
return s}w=A.cG.aJ(A.a.b2(d,A.a.cJ(d,",")+1))
$.afF.n(0,d,w)
v=$.fY3=$.fY3+w.length
u=B.a3($.afF).k("cu<1>")
for(;;){if(!(v>41943040&&$.afF.a>1))break
t=new B.cu($.afF,u).gaf(0)
if(!t.C())B.ba(B.fA())
v-=$.afF.W(0,t.gS(0)).length
$.fY3=v}return w},
i43(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kV(0,d),j=B.C(k,B.a3(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Sl(s,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Sl(t,A.u))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Sl(u,A.cv))
v.push(new B.eq(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b2(d,r)
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
m.b97(new B.u(t,p),new B.aT(s,s))
m.F(new B.ap(t,u))
m.F(new B.bF())
return m
default:m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.F(new B.o0(e))
return m}},
fzc(d,e,f){return B.cp(new C.fzd(D.eMY.t(0,d),d,f,e))},
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
fBD:function fBD(d){this.a=d},
fBC:function fBC(d,e){this.a=d
this.b=e},
fm6:function fm6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fm4:function fm4(d){this.a=d},
fm5:function fm5(d,e){this.a=d
this.b=e},
aId:function aId(d,e){this.c=d
this.a=e},
btN:function btN(d,e){var _=this
_.d=$
_.bs$=d
_.a8$=e
_.c=_.a=null},
f4d:function f4d(d,e,f){this.a=d
this.b=e
this.c=f},
aIQ:function aIQ(d,e){this.b=d
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
ayX:function ayX(d,e){this.c=d
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
ecM:function ecM(d,e,f){this.a=d
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
eUl:function eUl(){},
fzd:function fzd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqn:function bqn(d,e,f){this.b=d
this.c=e
this.a=f},
aKQ:function aKQ(){},
aLl:function aLl(){},
aMI:function aMI(){},
fCD(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fCD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x3.c6().LK(D.dc4,A.tJ,!0),$async$fCD)
case 3:r=e
if(r==null||J.cn(r.a)){u=null
w=1
break}t=J.fp(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i3Y(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fCD,v)},
i3Y(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7G(d,new B.a_F(A.cS.gcw().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hX1(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7G(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c6.Ky(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7G(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hX1(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cwn().cIF(B.ra(d,A.hU,o,o),o,o,!1).cKo(0,"word/document.xml")
if(n==null)return""
w=n.cSp()
v=A.c6.Ky(0,w==null?$.hnC():w,!0).split("</w:p>")
u=new B.fe("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kV(0,r)
p=A.a.i(B.cF(q,new C.foZ(),B.a3(q).k("J.E"),t).fZ(0))
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
foZ:function foZ(){},
hEC(d,e,f,g,h,i,j,k,l){return new C.NF(l,e,d,g,f,i,h,j,k,null)},
NF:function NF(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDN:function aDN(d,e,f,g,h,i,j,k,l){var _=this
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
evJ:function evJ(d){this.a=d},
evH:function evH(){},
evI:function evI(d){this.a=d},
es6:function es6(){},
es7:function es7(){},
es8:function es8(d,e){this.a=d
this.b=e},
etH:function etH(d){this.a=d},
etv:function etv(){},
etw:function etw(){},
eru:function eru(){},
euP:function euP(d){this.a=d},
evF:function evF(d,e){this.a=d
this.b=e},
etF:function etF(d,e){this.a=d
this.b=e},
evs:function evs(d){this.a=d},
evt:function evt(){},
evu:function evu(){},
evv:function evv(d){this.a=d},
evw:function evw(){},
eqT:function eqT(d){this.a=d},
evG:function evG(){},
esO:function esO(d,e){this.a=d
this.b=e},
eqR:function eqR(d){this.a=d},
eqS:function eqS(d){this.a=d},
eta:function eta(d){this.a=d},
etb:function etb(d,e,f){this.a=d
this.b=e
this.c=f},
etc:function etc(d){this.a=d},
esN:function esN(){},
esM:function esM(d){this.a=d},
esK:function esK(){},
esJ:function esJ(d){this.a=d},
esL:function esL(){},
es2:function es2(d){this.a=d},
es3:function es3(d){this.a=d},
esU:function esU(d){this.a=d},
esP:function esP(d){this.a=d},
esQ:function esQ(d){this.a=d},
esR:function esR(d){this.a=d},
esS:function esS(d){this.a=d},
esT:function esT(d){this.a=d},
esV:function esV(d,e){this.a=d
this.b=e},
eqV:function eqV(){},
eqW:function eqW(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
et5:function et5(){},
et6:function et6(d,e){this.a=d
this.b=e},
et3:function et3(d,e,f){this.a=d
this.b=e
this.c=f},
et4:function et4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esY:function esY(d,e,f){this.a=d
this.b=e
this.c=f},
esZ:function esZ(d,e,f){this.a=d
this.b=e
this.c=f},
et_:function et_(d){this.a=d},
et0:function et0(d,e){this.a=d
this.b=e},
et1:function et1(d,e){this.a=d
this.b=e},
et2:function et2(d,e){this.a=d
this.b=e},
esX:function esX(d,e){this.a=d
this.b=e},
et8:function et8(d){this.a=d},
et9:function et9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
et7:function et7(d){this.a=d},
etq:function etq(){},
etr:function etr(){},
ets:function ets(){},
ett:function ett(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etn:function etn(d){this.a=d},
etp:function etp(){},
eto:function eto(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
etl:function etl(d,e,f){this.a=d
this.b=e
this.c=f},
etm:function etm(d,e){this.a=d
this.b=e},
etu:function etu(){},
esW:function esW(d,e){this.a=d
this.b=e},
erb:function erb(){},
erc:function erc(d,e,f){this.a=d
this.b=e
this.c=f},
erd:function erd(d){this.a=d},
ere:function ere(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
era:function era(d){this.a=d},
etA:function etA(d){this.a=d},
etz:function etz(d,e){this.a=d
this.b=e},
ety:function ety(d,e){this.a=d
this.b=e},
etx:function etx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etB:function etB(d,e){this.a=d
this.b=e},
epQ:function epQ(d,e){this.a=d
this.b=e},
er9:function er9(d,e){this.a=d
this.b=e},
er7:function er7(d){this.a=d},
etJ:function etJ(d,e,f){this.a=d
this.b=e
this.c=f},
er3:function er3(d,e){this.a=d
this.b=e},
er2:function er2(d){this.a=d},
etI:function etI(d,e,f){this.a=d
this.b=e
this.c=f},
eqU:function eqU(d){this.a=d},
erv:function erv(){},
evq:function evq(d,e){this.a=d
this.b=e},
evr:function evr(d,e,f){this.a=d
this.b=e
this.c=f},
euQ:function euQ(d,e,f){this.a=d
this.b=e
this.c=f},
epR:function epR(d){this.a=d},
epO:function epO(d,e){this.a=d
this.b=e},
epE:function epE(d,e){this.a=d
this.b=e},
epB:function epB(d){this.a=d},
epA:function epA(d,e){this.a=d
this.b=e},
epC:function epC(d,e){this.a=d
this.b=e},
er5:function er5(d){this.a=d},
er6:function er6(d,e){this.a=d
this.b=e},
er4:function er4(d){this.a=d},
eqi:function eqi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eqj:function eqj(d,e){this.a=d
this.b=e},
eqn:function eqn(d,e){this.a=d
this.b=e},
eqo:function eqo(d){this.a=d},
eql:function eql(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eqm:function eqm(d){this.a=d},
eqk:function eqk(){},
eqh:function eqh(d,e,f){this.a=d
this.b=e
this.c=f},
etk:function etk(d,e){this.a=d
this.b=e},
evz:function evz(d){this.a=d},
evA:function evA(d,e){this.a=d
this.b=e},
evB:function evB(d){this.a=d},
evC:function evC(d,e,f){this.a=d
this.b=e
this.c=f},
evy:function evy(d){this.a=d},
ev5:function ev5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ev4:function ev4(d,e,f){this.a=d
this.b=e
this.c=f},
ev3:function ev3(){},
ev2:function ev2(d,e,f){this.a=d
this.b=e
this.c=f},
ev1:function ev1(d,e){this.a=d
this.b=e},
euZ:function euZ(d,e,f){this.a=d
this.b=e
this.c=f},
euX:function euX(d){this.a=d},
euY:function euY(d){this.a=d},
ev0:function ev0(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ev_:function ev_(d){this.a=d},
erZ:function erZ(d,e){this.a=d
this.b=e},
erY:function erY(d,e){this.a=d
this.b=e},
euR:function euR(){},
evp:function evp(d,e){this.a=d
this.b=e},
evn:function evn(d){this.a=d},
evo:function evo(d){this.a=d},
epJ:function epJ(d,e){this.a=d
this.b=e},
epH:function epH(d){this.a=d},
epI:function epI(d){this.a=d},
epK:function epK(d,e){this.a=d
this.b=e},
epL:function epL(d,e,f){this.a=d
this.b=e
this.c=f},
epP:function epP(d,e){this.a=d
this.b=e},
epG:function epG(d,e,f){this.a=d
this.b=e
this.c=f},
epF:function epF(d){this.a=d},
etG:function etG(d,e,f){this.a=d
this.b=e
this.c=f},
evx:function evx(d,e,f){this.a=d
this.b=e
this.c=f},
es1:function es1(d,e,f){this.a=d
this.b=e
this.c=f},
es0:function es0(){},
eqr:function eqr(d,e,f){this.a=d
this.b=e
this.c=f},
eqs:function eqs(d){this.a=d},
epD:function epD(d,e){this.a=d
this.b=e},
ert:function ert(d,e){this.a=d
this.b=e},
epM:function epM(d,e){this.a=d
this.b=e},
epV:function epV(d){this.a=d},
epW:function epW(d,e){this.a=d
this.b=e},
epX:function epX(d,e){this.a=d
this.b=e},
epU:function epU(d){this.a=d},
eq7:function eq7(d,e){this.a=d
this.b=e},
epT:function epT(d){this.a=d},
eqa:function eqa(d){this.a=d},
eqb:function eqb(d){this.a=d},
eqc:function eqc(d){this.a=d},
eqd:function eqd(d){this.a=d},
eqe:function eqe(d){this.a=d},
eqf:function eqf(){},
eqg:function eqg(){},
epY:function epY(d){this.a=d},
epZ:function epZ(d){this.a=d},
eq_:function eq_(d){this.a=d},
eq0:function eq0(d){this.a=d},
eq1:function eq1(d){this.a=d},
eq2:function eq2(d){this.a=d},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d){this.a=d},
eq5:function eq5(d){this.a=d},
eq6:function eq6(d){this.a=d},
eq8:function eq8(d){this.a=d},
eq9:function eq9(d,e){this.a=d
this.b=e},
ers:function ers(d,e,f){this.a=d
this.b=e
this.c=f},
err:function err(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erq:function erq(d,e,f){this.a=d
this.b=e
this.c=f},
erp:function erp(d,e){this.a=d
this.b=e},
epN:function epN(d,e){this.a=d
this.b=e},
eqv:function eqv(d){this.a=d},
equ:function equ(d){this.a=d},
eqt:function eqt(d,e){this.a=d
this.b=e},
eqw:function eqw(d){this.a=d},
eqx:function eqx(d){this.a=d},
eqy:function eqy(d,e){this.a=d
this.b=e},
er8:function er8(d){this.a=d},
etj:function etj(d,e){this.a=d
this.b=e},
eti:function eti(d,e){this.a=d
this.b=e},
eth:function eth(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
etf:function etf(d){this.a=d},
etg:function etg(d,e){this.a=d
this.b=e},
etd:function etd(){},
ete:function ete(){},
euS:function euS(){},
euT:function euT(d,e){this.a=d
this.b=e},
euU:function euU(){},
euV:function euV(d){this.a=d},
euW:function euW(d,e){this.a=d
this.b=e},
epS:function epS(d,e){this.a=d
this.b=e},
eqX:function eqX(){},
eqY:function eqY(){},
eqZ:function eqZ(){},
er1:function er1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
er0:function er0(d,e){this.a=d
this.b=e},
er_:function er_(d,e,f){this.a=d
this.b=e
this.c=f},
ess:function ess(d){this.a=d},
esr:function esr(){},
est:function est(d,e){this.a=d
this.b=e},
esu:function esu(d,e){this.a=d
this.b=e},
esq:function esq(d){this.a=d},
esv:function esv(d,e){this.a=d
this.b=e},
esp:function esp(d){this.a=d},
esw:function esw(d,e){this.a=d
this.b=e},
eso:function eso(d){this.a=d},
esx:function esx(d,e){this.a=d
this.b=e},
esn:function esn(d){this.a=d},
esy:function esy(d,e){this.a=d
this.b=e},
esm:function esm(d,e){this.a=d
this.b=e},
esz:function esz(d,e){this.a=d
this.b=e},
esl:function esl(d){this.a=d},
esA:function esA(d,e){this.a=d
this.b=e},
esk:function esk(d){this.a=d},
esd:function esd(d,e){this.a=d
this.b=e},
ese:function ese(d){this.a=d},
esf:function esf(d){this.a=d},
esc:function esc(d){this.a=d},
esg:function esg(d,e){this.a=d
this.b=e},
esb:function esb(d){this.a=d},
esh:function esh(d,e){this.a=d
this.b=e},
esa:function esa(d){this.a=d},
esi:function esi(d,e){this.a=d
this.b=e},
es9:function es9(d){this.a=d},
esj:function esj(d){this.a=d},
erl:function erl(d){this.a=d},
erm:function erm(d){this.a=d},
ero:function ero(d){this.a=d},
erg:function erg(d){this.a=d},
erf:function erf(d,e){this.a=d
this.b=e},
erh:function erh(d,e){this.a=d
this.b=e},
eri:function eri(d){this.a=d},
erj:function erj(d){this.a=d},
erk:function erk(d,e){this.a=d
this.b=e},
ern:function ern(d){this.a=d},
evD:function evD(d){this.a=d},
evE:function evE(d){this.a=d},
esD:function esD(d,e){this.a=d
this.b=e},
esC:function esC(d,e){this.a=d
this.b=e},
esB:function esB(d,e){this.a=d
this.b=e},
esE:function esE(d){this.a=d},
esF:function esF(d){this.a=d},
eu1:function eu1(d,e){this.a=d
this.b=e},
eu2:function eu2(d){this.a=d},
eu3:function eu3(d){this.a=d},
eue:function eue(d){this.a=d},
eup:function eup(d){this.a=d},
euA:function euA(d){this.a=d},
euH:function euH(d){this.a=d},
euI:function euI(d){this.a=d},
euJ:function euJ(d){this.a=d},
euK:function euK(d){this.a=d},
euL:function euL(d,e){this.a=d
this.b=e},
eu4:function eu4(d){this.a=d},
eu5:function eu5(d){this.a=d},
eu6:function eu6(d){this.a=d},
eu7:function eu7(d){this.a=d},
eu8:function eu8(d){this.a=d},
eu9:function eu9(d){this.a=d},
eua:function eua(d){this.a=d},
eub:function eub(d){this.a=d},
euc:function euc(d){this.a=d},
eud:function eud(d){this.a=d},
euf:function euf(d){this.a=d},
eug:function eug(d){this.a=d},
euh:function euh(d){this.a=d},
eui:function eui(d){this.a=d},
euj:function euj(d){this.a=d},
euk:function euk(d){this.a=d},
eul:function eul(d){this.a=d},
eum:function eum(d){this.a=d},
eun:function eun(d){this.a=d},
etS:function etS(d){this.a=d},
euo:function euo(d){this.a=d},
eu_:function eu_(d){this.a=d},
euq:function euq(d){this.a=d},
etZ:function etZ(d,e){this.a=d
this.b=e},
eur:function eur(d,e){this.a=d
this.b=e},
eus:function eus(d,e){this.a=d
this.b=e},
etY:function etY(d,e,f){this.a=d
this.b=e
this.c=f},
etO:function etO(d,e){this.a=d
this.b=e},
eu0:function eu0(d){this.a=d},
euM:function euM(d,e){this.a=d
this.b=e},
euO:function euO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
euN:function euN(d,e){this.a=d
this.b=e},
eut:function eut(d,e,f){this.a=d
this.b=e
this.c=f},
etX:function etX(d,e,f){this.a=d
this.b=e
this.c=f},
etN:function etN(d,e,f){this.a=d
this.b=e
this.c=f},
etL:function etL(d,e){this.a=d
this.b=e},
euu:function euu(d,e){this.a=d
this.b=e},
etW:function etW(d,e){this.a=d
this.b=e},
etM:function etM(d,e){this.a=d
this.b=e},
etK:function etK(d,e){this.a=d
this.b=e},
euv:function euv(d){this.a=d},
etV:function etV(d){this.a=d},
euw:function euw(d){this.a=d},
eux:function eux(d){this.a=d},
euy:function euy(d){this.a=d},
euz:function euz(d){this.a=d},
etU:function etU(d){this.a=d},
euB:function euB(d){this.a=d},
euC:function euC(d){this.a=d},
euD:function euD(d,e){this.a=d
this.b=e},
etT:function etT(d){this.a=d},
euE:function euE(d,e){this.a=d
this.b=e},
etR:function etR(d){this.a=d},
euF:function euF(d,e){this.a=d
this.b=e},
etQ:function etQ(d){this.a=d},
euG:function euG(d,e){this.a=d
this.b=e},
etP:function etP(d){this.a=d},
eqq:function eqq(d,e,f){this.a=d
this.b=e
this.c=f},
eqp:function eqp(d,e){this.a=d
this.b=e},
ev8:function ev8(d,e){this.a=d
this.b=e},
ev7:function ev7(d,e){this.a=d
this.b=e},
ev9:function ev9(d,e){this.a=d
this.b=e},
ev6:function ev6(d,e){this.a=d
this.b=e},
ery:function ery(d,e){this.a=d
this.b=e},
erx:function erx(d){this.a=d},
erz:function erz(d,e){this.a=d
this.b=e},
erw:function erw(d){this.a=d},
es5:function es5(){},
es4:function es4(){},
evl:function evl(d){this.a=d},
evk:function evk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evj:function evj(d,e){this.a=d
this.b=e},
eve:function eve(d,e){this.a=d
this.b=e},
evi:function evi(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evf:function evf(d,e){this.a=d
this.b=e},
eva:function eva(d){this.a=d},
evb:function evb(d){this.a=d},
evc:function evc(d){this.a=d},
evd:function evd(d){this.a=d},
evg:function evg(d,e){this.a=d
this.b=e},
evh:function evh(d,e){this.a=d
this.b=e},
evm:function evm(d){this.a=d},
eqQ:function eqQ(d){this.a=d},
eqP:function eqP(d,e,f){this.a=d
this.b=e
this.c=f},
eqO:function eqO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqD:function eqD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eqE:function eqE(d,e){this.a=d
this.b=e},
eqF:function eqF(d,e){this.a=d
this.b=e},
eqG:function eqG(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqC:function eqC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqH:function eqH(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqK:function eqK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqB:function eqB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqL:function eqL(d,e){this.a=d
this.b=e},
eqA:function eqA(d,e){this.a=d
this.b=e},
eqM:function eqM(d,e){this.a=d
this.b=e},
eqz:function eqz(d){this.a=d},
eqN:function eqN(d,e){this.a=d
this.b=e},
esH:function esH(d){this.a=d},
esG:function esG(d){this.a=d},
esI:function esI(d,e){this.a=d
this.b=e},
erM:function erM(d,e){this.a=d
this.b=e},
erN:function erN(d,e){this.a=d
this.b=e},
erL:function erL(d,e){this.a=d
this.b=e},
erO:function erO(d,e){this.a=d
this.b=e},
erK:function erK(d,e){this.a=d
this.b=e},
erP:function erP(d,e){this.a=d
this.b=e},
erJ:function erJ(d,e){this.a=d
this.b=e},
erQ:function erQ(d,e){this.a=d
this.b=e},
erI:function erI(d,e){this.a=d
this.b=e},
erR:function erR(d,e){this.a=d
this.b=e},
erH:function erH(d,e){this.a=d
this.b=e},
erS:function erS(d,e,f){this.a=d
this.b=e
this.c=f},
erG:function erG(d,e){this.a=d
this.b=e},
erT:function erT(d,e,f){this.a=d
this.b=e
this.c=f},
erF:function erF(d,e){this.a=d
this.b=e},
erU:function erU(d,e){this.a=d
this.b=e},
erE:function erE(d,e,f){this.a=d
this.b=e
this.c=f},
erB:function erB(d,e){this.a=d
this.b=e},
erV:function erV(d,e){this.a=d
this.b=e},
erD:function erD(d,e){this.a=d
this.b=e},
erW:function erW(d,e){this.a=d
this.b=e},
erC:function erC(d,e,f){this.a=d
this.b=e
this.c=f},
erA:function erA(d,e){this.a=d
this.b=e},
erX:function erX(d,e){this.a=d
this.b=e},
es_:function es_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epz:function epz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etE:function etE(d,e){this.a=d
this.b=e},
etC:function etC(d){this.a=d},
etD:function etD(d,e){this.a=d
this.b=e},
aeO:function aeO(d,e,f){this.a=d
this.b=e
this.c=f},
ayj:function ayj(d,e){this.c=d
this.a=e},
bc2:function bc2(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b1$=e
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
Pk:function Pk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a_8:function a_8(d,e,f){this.c=d
this.d=e
this.a=f},
aDQ:function aDQ(d,e,f){var _=this
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
ewj:function ewj(){},
ew9:function ew9(d){this.a=d},
ewi:function ewi(d){this.a=d},
ewa:function ewa(d){this.a=d},
ewb:function ewb(d){this.a=d},
ew5:function ew5(d){this.a=d},
ew6:function ew6(d,e){this.a=d
this.b=e},
ew7:function ew7(d){this.a=d},
ew8:function ew8(d,e,f){this.a=d
this.b=e
this.c=f},
ewg:function ewg(){},
ewh:function ewh(d){this.a=d},
ewc:function ewc(d){this.a=d},
ewd:function ewd(d){this.a=d},
ewe:function ewe(d){this.a=d},
ewf:function ewf(d){this.a=d},
ewk:function ewk(d,e,f){this.a=d
this.b=e
this.c=f},
ewm:function ewm(d,e){this.a=d
this.b=e},
ewl:function ewl(d){this.a=d},
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
aJx:function aJx(){},
aLz:function aLz(){},
bwB:function bwB(){},
aLA:function aLA(){},
fEx(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fEx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.x3.c6().LK(B.a(["pdf"],x.s),A.tJ,!0),$async$fEx)
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
return B.i($async$fEx,v)},
i4y(d){var w,v,u,t,s,r
try{w=B.js(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cF(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kV(0,w).gM(0)
if(t>0){s=J.aQb(t,1,200)
return s}}catch(r){}return 1},
fEo(d){return C.i4x(d)},
i4x(d){var w=0,v=B.j(x.T),u
var $async$fEo=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fEo,v)},
bCb(d,e,f,g){return C.i4H(d,e,f,g)},
i4H(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bCb=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e9(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hlW(b9,new B.ar(r,q))
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
g=new B.qW()
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
for(a7=b6.length,a8=0;a8<b6.length;b6.length===a7||(0,B.L)(b6),++a8){a1=b6[a8]
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
aPp(d,e,f){return C.i4v(d,e,f)},
i4v(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPp=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.az:e
r.c=f==null?5.2:f
w=3
return B.b(B.ahd(d,e,f,new C.fEm(r,q),q,"Sign document"),$async$aPp)
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
i4F(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hf8(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hf8(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b2(A.a.aT(A.o.fT(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b2(A.a.aT(A.o.fT(q.Q,16),8,"0"),2)
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
case 2:d+='<div style="width:100%;height:100%;background:'+C.heL(q.ay)+";border:2px solid "+C.heL(q.ch)+'"></div>'
break
case 5:l=C.fZg(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaj8()
if(p==null)p=A.awH
n=B.U(p)
k=n.k("om<1>")
j=new B.om(p,0,8,k)
j.CP(p,0,8,n.c)
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
heL(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
hf8(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bC9(d,e){var w=0,v=B.j(x.H)
var $async$bC9=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fEv(e,C.i4F(e),d),d,null,!0,!0,x.H),$async$bC9)
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
return B.b(C.fEo(s),$async$bCa)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCa,v)},
aPq(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPq=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.h_u(d),$async$aPq)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fGR(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPq,v)},
h93(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0x:function b0x(d,e,f){this.a=d
this.b=e
this.c=f},
fEm:function fEm(d,e){this.a=d
this.b=e},
fEv:function fEv(d,e,f){this.a=d
this.b=e
this.c=f},
fEs:function fEs(d){this.a=d},
fEt:function fEt(d,e,f){this.a=d
this.b=e
this.c=f},
fEu:function fEu(d,e,f){this.a=d
this.b=e
this.c=f},
i4w(d){return C.kv(d.w)},
i4D(d){var w,v,u,t
if(d.length===0||!A.d.d7(d,C.i6n()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
ys(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hrD()
if(w.b.test(u))return u
return null},
hlY(d,e,f){var w,v,u=C.hAe(d),t=$.pq()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aC(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i4J(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.f6(w,d.b);v.C();){u=w.gS(w).y
t=C.ys(u==null?"":u)
if(t!=null)s.K(0,t)}return s},
fEk(d,e){var w,v=d.y,u=C.ys(v==null?"":v)
if(u!=null)return d.y=u
w=C.i4J(new B.a1(e,new C.fEl(d),B.U(e).k("a1<1>")))
v=d.x
return d.y=C.hlY(v==null?"":v,null,w)},
i4I(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.kv(w.w))return null
v=w.y
return C.ys(v==null?"":v)},
hEE(){var w,v=$.pq(),u=J.e3(10,x.N)
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
VH(d){return C.hEF(d)},
hEF(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
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
if(r==null)r=a3!=null?C.hlY(a3,null,A.Ip):null
q=x.N
p=B.aX(q)
for(o=J.dm(s),n=J.aV(o.gi4(s)),m=x.f;n.C();){l=n.gS(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.ys(J.k(k==null?"":k))
if(j!=null)p.K(0,j)}n=o.gdK(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gS(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a2(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dJ.aJ(t)
g.n(0,"payload",A.cS.gcw().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.SG.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.ys(J.k(q==null?"":q))
if(f==null)f=C.h98(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.VH(s),$async$a7I)
case 7:u=new B.aFg(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hEE()
n=r==null
d=n?C.h98(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cS.gcw().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.SG.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.VH(s),$async$a7I)
case 8:u=new B.aFg(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7I,v)},
h98(d){var w,v,u=$.pq()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aC(1000)),3,"0")
if(d.K(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aqI(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqI)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.VG(),$async$aqI)
case 6:t=f
s=J.a6(t)
r=s.gM(t)
s.bo(t,new C.cdI(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.VH(t),$async$aqI)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqI,v)},
aqH(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqH=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.ys(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqH)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.VG(),$async$aqH)
case 6:t=o.jy(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gS(t)
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
return B.i($async$aqH,v)},
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
if(D.SG.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.A(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aH(0,s,null)
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
i4C(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("K<1,a4<n,@>>")
w=B.C(new B.K(d,new C.fEr(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fEz(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.R.ao(w,null)}return A.R.ao(C.i4C(d==null?B.a([],x.D):d,f,g),null)},
fEy(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fEy=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7I(h,d,e,f,g),$async$fEy)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.ys(e==null?"":e)
u=new B.aF3(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.kd.gcw().aJ(t)
u=new B.aF3(C.ys(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fEy,v)},
h_w(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
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
i4G(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.h_w(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b2(v,u))
if(C.h_w(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b2(v,s))
if(C.h_w(t))return t}}return null},
fEn(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d_(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d_(t,"NGMY_SL:"))w=v.a(A.R.aH(0,A.c6.ca(0,A.cG.aJ(J.mF(t,8))),null))
else w=v.a(A.R.aH(0,t,null))
v=C.hOp(w)
return v}catch(u){v=B.a([],x.D)
return v}},
agY(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$agY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqH(t[1]),$async$agY)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fEn(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.ys(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqH(r),$async$agY)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fEn(s)
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
return B.b(C.a7H(t[1]),$async$agY)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fEn(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fEn(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agY,v)},
hOp(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.A(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.SG.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.h_t(C.VC(B.a2(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cF(t,new C.fcm(w),t.$ti.k("J.E"),x.I)
t=B.C(t,B.a3(t).k("J.E"))
return t}return B.a([],x.D)},
h_t(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cD())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gS(u)
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
return B.b(C.agY(s),$async$bBV)
case 4:t=e
u=J.cn(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBV,v)},
fNa(d){var w=0,v=B.j(x.T),u,t
var $async$fNa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hT(D.Wo,!0,"Dismiss",d,new C.fNb(),new C.fNc(),A.F3,!0,x.N),$async$fNa)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.T(D.eSx)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fNa,v)},
i8u(d,e,f,g,h){return B.a5(d,!1).c5(B.e8(new C.fNd(h,e,g,f),!0,null,x.H))},
fEl:function fEl(d){this.a=d},
cdI:function cdI(d){this.a=d},
fEr:function fEr(){},
fcm:function fcm(d){this.a=d},
fNb:function fNb(){},
fNc:function fNc(){},
fNd:function fNd(d,e,f,g){var _=this
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
aDO:function aDO(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
evQ:function evQ(){},
evM:function evM(d,e){this.a=d
this.b=e},
evP:function evP(d,e){this.a=d
this.b=e},
evN:function evN(d){this.a=d},
evO:function evO(d){this.a=d},
evR:function evR(d){this.a=d},
evS:function evS(d){this.a=d},
evV:function evV(d){this.a=d},
evW:function evW(d){this.a=d},
evU:function evU(d){this.a=d},
evX:function evX(d){this.a=d},
evT:function evT(d){this.a=d},
evY:function evY(d,e){this.a=d
this.b=e},
evL:function evL(d,e){this.a=d
this.b=e},
evK:function evK(d,e){this.a=d
this.b=e},
VF:function VF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjN:function bjN(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
evZ:function evZ(d,e){this.a=d
this.b=e},
ew_:function ew_(d){this.a=d},
ew0:function ew0(){},
ew1:function ew1(d){this.a=d},
ew2:function ew2(d,e){this.a=d
this.b=e},
aDL:function aDL(d){this.a=d},
aDM:function aDM(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
ept:function ept(d){this.a=d},
eps:function eps(){},
epu:function epu(d){this.a=d},
epp:function epp(d){this.a=d},
epo:function epo(){},
epq:function epq(d){this.a=d},
epr:function epr(d){this.a=d},
bu7:function bu7(){},
aqJ:function aqJ(d){this.a=d},
aDP:function aDP(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ew4:function ew4(d){this.a=d},
ew3:function ew3(d){this.a=d},
hTz(){var w,v,u,t
for(v=0;v<4;++v){w=D.d1e[v]
try{if(Ac.bWl(w)){u=w
return u}}catch(t){}}return null},
QR(d,e){return C.i1n(d,e)},
i1n(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QR=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hTz()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oa?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.E(b4,2)
c2.b=b5-A.o.E(b5,2)
b6=B.qs(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gL(c3)
b9=$.aw()
o=new B.eS(b8,b9)
n=new B.eS("Getting ready\u2026",b9)
m=new B.eS(0,b9)
l=B.oh(new C.fyG(c2,b7,o),!1,!1)
b6.lO(0,l)
b9=x.H
B.ca(null,A.d9,!1,null,new C.fyH(n,m),c6,null,!0,!0,b9)
k=new C.fyL(b7)
j=new C.fyM()
i=null
t=4
b3=c2.a
h=Aj.aRG(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fPT(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWz(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Ho.yi(i,"dataavailable",new C.fyI(e))
d=new B.bX(new B.bg($.bz,x.dT),x.b2)
A.Ho.yi(i,"stop",new C.fyJ(d))
J.ahz(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QR)
case 8:w=7
return B.b(c5.$1(d0),$async$QR)
case 7:a0=d0
J.fPV(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahz(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ahz(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QR)
case 15:w=14
return B.b(c5.$1(d0),$async$QR)
case 14:a0=d0
case 13:J.fPV(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahz(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bQ(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbq())b3=b3===b8.gbq()&&0<b8.gcz()
else b3=!0
if(!b3){w=17
break}J.fPV(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fq,null,b9),$async$QR)
case 18:w=16
break
case 17:J.ahz(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahz(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nU),$async$QR)
case 19:a5=A.d.gL(q.split(";"))
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
J.L3(b0)
J.lU(b0)
B.bN(A.nT,new C.fyK(a7),b9)
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
c3.shW(b3)
J.aQf(c3,0)
c3=n
c3.shW(b3)
J.aQf(c3,0)
c3=m
c3.shW(b3)
J.aQf(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QR,v)},
fyG:function fyG(d,e,f){this.a=d
this.b=e
this.c=f},
fyF:function fyF(){},
fyH:function fyH(d,e){this.a=d
this.b=e},
fyL:function fyL(d){this.a=d},
fyM:function fyM(){},
fyI:function fyI(d){this.a=d},
fyJ:function fyJ(d){this.a=d},
fyK:function fyK(d){this.a=d},
buj:function buj(d,e,f){this.c=d
this.d=e
this.a=f},
f6F:function f6F(){},
f6G:function f6G(){},
ce4(d){var w=0,v=B.j(x.at),u,t,s
var $async$ce4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqT(d,A.zb),$async$ce4)
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
edD:function edD(d){this.a=d},
edB:function edB(d){this.a=d},
edC:function edC(d,e){this.a=d
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
hsD(d){return new C.ahR(d)},
a2t:function a2t(){},
ahR:function ahR(d){this.a=d},
aQA:function aQA(){},
awb:function awb(d,e){this.d=d
this.b=e
this.a=null},
aS4:function aS4(d){this.b=d
this.a=null},
ftP(d,e){var w=0,v=B.j(x.H)
var $async$ftP=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxv().Lt(d,e),$async$ftP)
case 2:B.fGX()
return B.h(null,v)}})
return B.i($async$ftP,v)},
hjf(d,e){return(A.ri[(d^e)&255]^A.o.aA(d,8))>>>0},
fri(d,e,f,g,h,i){var w=C.hYJ(d,A.dc,f,null,A.cX,g,h,i)
return w},
hl6(d){var w=F.hlP(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hAe(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.p_.h(0,w)
if(v!=null)return v
for(u=A.p_.gdK(A.p_),u=u.gaf(u);u.C();){t=u.gS(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hle(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<44;++w)v+="- "+D.deJ[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bA3(d,e){return C.hVk(d,e)},
hVk(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
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
h_n(){var w=0,v=B.j(x.y),u,t,s
var $async$h_n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fjA
s=$.bzB
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bA3(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h_n,v)},
bBq(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fjA
l=$.bzB
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hfP()?3:4
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
J.L3(q)
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
h_e(){var w=0,v=B.j(x.y),u,t,s,r
var $async$h_e=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzC
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.ly.uE(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$h_e,v)},
h_v(d,e){var w=0,v=B.j(x.H),u,t
var $async$h_v=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hO([d],"text/html"))
t.toString
u=window
u.toString
A.ly.uE(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$h_v,v)},
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
return B.i($async$b17,v)}},D,N,H,Am,A8,X,V,An,G,F,E,W,Q,Y,Z,Ao,Ap,A9,K,Aq,A_,O,A0,Aa,L,Ab,Ar,As,P,A1,At,Au,Ac,Ad,Av,Ae,Af,Ag,Aw,Ax,R,Ay,I,Az,S,T,AA,M,A2,A3,A4
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
Ak=c[135]
Al=c[219]
C=a.updateHolder(c[4],C)
D=c[207]
N=c[90]
H=c[124]
Am=c[36]
A8=c[211]
X=c[208]
V=c[197]
An=c[118]
G=c[178]
F=c[31]
E=c[210]
W=c[120]
Q=c[137]
Y=c[29]
Z=c[166]
Ao=c[221]
Ap=c[174]
A9=c[105]
K=c[212]
Aq=c[117]
A_=c[60]
O=c[188]
A0=c[75]
Aa=c[112]
L=c[147]
Ab=c[106]
Ar=c[88]
As=c[214]
P=c[111]
A1=c[127]
At=c[86]
Au=c[122]
Ac=c[53]
Ad=c[184]
Av=c[35]
Ae=c[73]
Af=c[136]
Ag=c[218]
Aw=c[220]
Ax=c[217]
R=c[67]
Ay=c[215]
I=c[163]
Az=c[175]
S=c[47]
T=c[213]
AA=c[222]
M=c[195]
A2=c[216]
A3=c[102]
A4=c[56]
C.nQ.prototype={
uZ(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tI(t,v)
return new C.nQ(t===0?!1:w,v,t)},
bKq(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CP()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tI(w,u)
return new C.nQ(r===0?!1:s,u,r)},
bKV(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CP()
w=o-d
if(w<=0)return p.a?$.h0U():$.CP()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tI(w,u)
q=new C.nQ(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aB(0,$.a2g())
return q},
dV(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.E(e,16)===0)return r.bKq(v)
u=w+v+1
t=new Uint16Array(u)
C.hcp(r.b,w,e,t)
w=r.a
s=C.tI(u,t)
return new C.nQ(s===0?!1:w,t,s)},
mq(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.E(e,16)
if(u===0)return n.bKV(v)
t=w-v
if(t<=0)return n.a?$.h0U():$.CP()
s=n.b
r=new Uint16Array(t)
C.hKj(s,w,e,r)
w=n.a
q=C.tI(t,r)
p=new C.nQ(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dV(1,u)-1)!==0)return p.aB(0,$.a2g())
for(o=0;o<v;++o)if(s[o]!==0)return p.aB(0,$.a2g())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cEd(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7A(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7A(t,e)
if(s===0)return $.CP()
if(r===0)return t.a===e?t:t.uZ(0)
w=s+1
v=new Uint16Array(w)
C.hKh(t.b,s,d.b,r,v)
u=C.tI(w,v)
return new C.nQ(u===0?!1:e,v,u)},
H3(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CP()
w=d.c
if(w===0)return t.a===e?t:t.uZ(0)
v=new Uint16Array(s)
C.b9f(t.b,s,d.b,w,v)
u=C.tI(s,v)
return new C.nQ(u===0?!1:e,v,u)},
bxr(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tI(r,u)
return new C.nQ(!1,u,s)},
bxq(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tI(u,r)
return new C.nQ(!1,r,v)},
bxs(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tI(p,m)
return new C.nQ(s!==0,m,s)},
Un(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CP()
w=t.a
if(w===e.a){if(w){w=$.a2g()
return t.H3(w,!0).bxs(e.H3(w,!0),!0).a7A(w,!0)}return t.bxr(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bxq(v.H3($.a2g(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7A(e,v)
if(C.cEd(u.b,t,e.b,w)>=0)return u.H3(e,v)
return e.H3(u,!v)},
aB(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uZ(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7A(e,v)
if(C.cEd(u.b,t,e.b,w)>=0)return u.H3(e,v)
return e.H3(u,!v)},
aG(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CP()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hcq(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tI(w,t)
return new C.nQ(q===0?!1:r,t,q)},
bKp(d){var w,v,u,t
if(this.c<d.c)return $.CP()
this.aQt(d)
w=$.fVm.c6()-$.awV.c6()
v=C.fVo($.fVl.c6(),$.awV.c6(),$.fVm.c6(),w)
u=C.tI(w,v)
t=new C.nQ(!1,v,u)
return this.a!==d.a&&u>0?t.uZ(0):t},
cml(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQt(d)
w=C.fVo($.fVl.c6(),0,$.awV.c6(),$.awV.c6())
v=C.tI($.awV.c6(),w)
u=new C.nQ(!1,w,v)
if($.fVn.c6()>0)u=u.mq(0,$.fVn.c6())
return t.a&&u.c>0?u.uZ(0):u},
aQt(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hcm&&d.c===$.hco&&g.b===$.hcl&&d.b===$.hcn)return
w=d.b
v=d.c
u=16-A.o.gajx(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hck(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hck(g.b,f,u,r)}else{r=C.fVo(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fVp(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cEd(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b9f(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b9f(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hKi(p,r,i);--o
C.hcq(h,j,0,r,o,s)
if(r[i]<h){m=C.fVp(j,s,o,n)
C.b9f(r,l,n,m,r)
while(--h,r[i]<h)C.b9f(r,l,n,m,r)}--i}$.hcl=g.b
$.hcm=f
$.hcn=w
$.hco=v
$.fVl.b=r
$.fVm.b=l
$.awV.b=s
$.fVn.b=u},
gX(d){var w,v,u,t=new C.cEe(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cEf().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nQ&&this.aL(0,e)===0},
t7(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uS(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
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
v=q?r.uZ(0):r
while(v.c>1){u=$.hpz()
if(u.c===0)B.ba(D.b2t)
t=v.cml(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bKp(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).fZ(0)},
$iaRj:1,
$ihI:1}
C.aQK.prototype={
K(d,e){var w,v=this.b,u=e.a,t=v.h(0,u)
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
cKo(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gco(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.k2(w,w.length,B.U(w).k("k2<1>"))}}
C.Rt.prototype={
cSp(){var w,v
if(this.as==null)this.bbx()
w=this.as
v=w==null?null:w.aof()
return v==null?null:v.eG()},
bbx(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.aof().eG()
this.as=new C.bNh(v)}},
gZ(d){return this.at}}
C.a3s.prototype={
a5(){return"CompressionType."+this.b}}
C.bH_.prototype={
es(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dV(v,u)+(s.b&A.yL[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dV(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fF(u,t)&A.yL[d])
s.c=t}return v}}
C.bFm.prototype={
cIE(d,e){var w,v,u,t,s,r=this,q=new C.bH_(d)
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
t=r.ckD(q)
if(t<0)return!1
if(t===0){q.es(8)
q.es(8)
q.es(8)
q.es(8)
s=r.ckG(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.es(8)
q.es(8)
q.es(8)
q.es(8)
return!0}}return!0},
ckD(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.es(8)
if(t!==D.dh9[u])v=!1
if(t!==D.cVR[u])w=!1
if(!w&&!v)return-1}return v?0:2},
ckG(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.es(1),d2=((d3.es(8)<<8|d3.es(8))<<8|d3.es(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.es(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.es(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c_W()
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
u[w]=l}c9.fr=B.c2(6,$.hnG(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.es(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.es(1)===0)break
i=d3.es(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hnF()
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
if(f<h)h=f}c9.bWn(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.at3(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.at3(d3)}while(a3===0||a3===1);++a5
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
a3=c9.at3(d3)
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
c1=(c1<<8^D.GT[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GV[b9];++b9
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
if(b8===0){b8=D.GV[b9];++b9
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
if(b8===0){b8=D.GV[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GV[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GV[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bH(c3)
c1=c1<<8^D.GT[c1>>>24&255^v];--c2}d4.bH(c3)
c1=(c1<<8^D.GT[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bH(c7)
c1=(c1<<8^D.GT[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bH(c7)
c1=(c1<<8^D.GT[c1>>>24&255^c7&255])>>>0
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
at3(d){var w,v,u,t,s=this,r=s.ay
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
bWn(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c_W(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cwo.prototype={
aGV(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bNF(e)
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
if(w>0)e.aGY(w,!1)
r.cl0(e)
q=r.r
v=r.f
u=e.aJX(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b7W()
s.cSo(0,u,e,f)
q.push(s)}},
cl0(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a7d(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rW()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rW()
d.aU()
d.aU()
d.aK()
d.aK()
d.rW()
d.rW()
u=d.rW()
t=d.rW()
this.f=u
this.r=t
d.c=s},
bNF(d){var w,v,u,t,s,r,q,p,o,n
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
o=new B.alo(A.hU)
o.aLd(r.eG(),A.hU,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cwm.prototype={}
C.awz.prototype={
a5(){return"ZipEncryptionMode."+this.b}}
C.cwp.prototype={
aGV(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aDb.h(0,e.aU())
o.c=w==null?D.Lr:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.an3(v)
o.y=e.he(u).eG()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aTz:D.Dr
o.ay=f
o.Q=e.he(t)
if(o.at!==D.Dr&&u>2){w=o.y
w.toString
s=B.ra(w,A.hU,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.an3(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aTA
o.ax=new C.cwm(r,q)
w=D.aDb.h(0,q)
o.c=w==null?D.Lr:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bl2().length},
aof(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.ra(new Uint8Array(0),A.hU,q,q)
w=r.at
if(w!==D.Dr)if(p.gM(0)<=0)r.at=D.Dr
else{if(w===D.aTz){p=r.bII(p)
r.Q=p}else if(w===D.aTA){p=r.bIl(p)
r.Q=p}r.at=D.Dr}w=r.c
if(w===D.afN){v=p.c
u=B.dj()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.po.Bl(p.eG(),!0,!1)
else{t=B.a85(A.hU,r.w)
p=r.Q
p.toString
A.po.a3p(p,t,!0,!1)
u.b=t.GE()}r.Q.c=v
return B.ra(u.bg(),A.hU,q,q)}else if(w===D.afO){s=B.a85(A.hU,32768)
p=r.Q
v=p.c
C.hsO().cIE(p,s)
u=s.GE()
r.Q.c=v
return B.ra(u,A.hU,q,q)}else return B.ra(p.eG(),A.hU,q,q)},
bl2(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eG()},
u(d){return this.x},
b7r(d){var w=this.ch,v=C.Ju(C.hjf(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Un(0,C.Ju(255)))
w[1]=v
w[1]=v.aG(0,C.Ju(134775813)).ad(0,C.Ju(1)).Un(0,C.Ju(4294967295))
w[2]=C.Ju(C.hjf(w[2].N(0),w[1].mq(0,24).N(0)))},
aPS(){var w=(this.ch[2].Un(0,C.Ju(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bII(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.ra(new Uint8Array(0),A.hU,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b7r(u[v.c++]^r.aPS())}t=r.Q.eG()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPS()
r.b7r(s)
u&2&&B.aj(t)
t[w]=s}return B.ra(t,A.hU,q,q)},
bIl(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.he(8).eG()
v=16}else if(k===2){w=d.he(12).eG()
v=24}else{w=d.he(16).eG()
v=32}u=d.he(2).eG()
t=d.he(d.gM(0)-10)
s=d.he(10)
r=t.eG()
k=this.ay
k.toString
q=C.hJZ(k,w,v)
p=new Uint8Array(B.ce(A.aH.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aH.dq(q,v,k)))
if(!C.hbP(A.aH.dq(q,k,k+2),u))throw B.V(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bDX(k,new Uint8Array(16),p)
k=x.S
m=J.a4S(0,k)
m=n.r=new C.cg5(m)
m.c=!0
m.b=m.bkl(!0,new C.asg(p))
if(m.c)m.d=B.bn(D.o7,!0,k)
else m.d=B.bn(D.yD,!0,k)
l=C.ha1(C.ha3(),64)
l.bdR(new C.asg(o))
n.w=l
n.cRY(r,0,r.length)
k=s.eG()
m=n.x
m===$&&B.c()
if(!C.hbP(k,m))throw B.V(B.fl("macs don't match"))
return B.ra(r,A.hU,null,null)}}
C.b7W.prototype={
cSo(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.an3(w)
if(v>0){t=e.he(v).eG()
n.ax=t
if(v>=4){s=B.ra(t,A.hU,null,null)
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
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rW()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rW()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rW()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.an3(u)
f.c=n.as
t=new C.cwp(D.Lr,n,D.Dr,B.a([C.Ju(0),C.Ju(0),C.Ju(0)],x.f3))
n.ch=t
t.aGV(0,f,g)},
u(d){return this.at}}
C.cwn.prototype={
cIF(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cwo(B.a([],x.fT))
this.a=g
g.aGV(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQK(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Rt(o,A.o.an(Date.now(),1000),0):C.h2h(o,q.w,q)
v.K(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h2h(o,q.w,q)
if(k.as==null)k.bbx()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alo(A.hU)
j.aLd(o,A.hU,h,h)}i=j==null?h:j.eG()
if(i!=null)new B.FP(!1).Dj(i,0,h,!0)}}return v}}
C.bDX.prototype={
cRY(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Cf(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hsx(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bM0(u,0,w,0,o)}else{o===$&&B.c()
q.bIM(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
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
l.Cf(0,w,0,w.length)
return f}}
C.cga.prototype={}
C.cge.prototype={}
C.cg8.prototype={}
C.asg.prototype={}
C.cgd.prototype={
cIU(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e4(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bdR(new C.asg(A.aH.fM(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bN0(n.a,n.b,t,s,r)
r+=v}A.aH.hg(f,g,g+w,s)
return o.a.c},
bN0(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Cf(0,d,0,d.length)
v.Cf(0,f,0,4)
u=m.c
u===$&&B.c()
w.KP(u,0)
u=m.c
A.aH.hg(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Cf(0,s,0,s.length)
w.KP(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cg9.prototype={}
C.cg7.prototype={}
C.ash.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.ash){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
t7(d,e){var w=this.a
w===$&&B.c()
w=A.o.t7(w,e.gbWE())
if(!w)e.gbWE()
return w},
aJo(d,e){this.a=0
this.b=d},
tb(d){return this.aJo(d,null)},
aK_(d){var w,v=this,u=v.b
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
w.b_d(v,u)
u=w.b
u===$&&B.c()
w.b_d(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_d(d,e){var w,v=A.o.fT(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bt(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cgc.prototype={
ly(d){var w,v=this
v.a.tb(0)
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
anK(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b0I(u,0)
v.c=0}v.a.aK_(1)},
Cf(d,e,f,g){var w=this.cjp(e,f,g)
f+=w
g-=w
w=this.cjq(e,f,g)
this.cjg(e,f+w,g-w)},
KP(d,e){var w,v=this,u=C.ha2(v.a),t=u.a
t===$&&B.c()
t=C.h00(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.h00(w,3)
v.cjk()
v.cjh(u)
v.arV()
v.cdu(d,e)
v.ly(0)
return 20},
b0I(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.o_(A.aH.gaM(d),d.byteOffset,d.length).getUint32(e,A.i8===w.d)
if(w.w===16)w.arV()},
arV(){this.cRX()
this.w=0
A.d.h1(this.r,0,16,0)},
cjg(d,e,f){while(f>0){this.anK(d[e]);++e;--f}},
cjq(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b0I(d,e)
e+=4
f-=4
w.aK_(4)
v+=4}return v},
cjp(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anK(d[e]);++e;--f;++v}return v},
cjk(){this.anK(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anK(0)}},
cjh(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.arV()
u=v.d
switch(u){case A.i8:u=v.r
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
cdu(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i8===this.d,s=0;s<w;++s){r=v[s]
q=J.o_(A.aH.gaM(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cgf.prototype={
cRX(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.q4[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.q4[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.q4[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q4[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.q4[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q4[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.q4[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q4[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.q4[30]
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
bdR(d){var w,v,u,t,s=this,r=s.a
r.ly(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Cf(0,w,0,v)
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
s.b8A(s.d,u,54)
s.b8A(s.e,u,92)
u=s.d
r.Cf(0,u,0,u.length)},
KP(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KP(s,w)
s=u.e
t.Cf(0,s,0,s.length)
v=t.KP(d,e)
s=u.e
A.aH.h1(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Cf(0,s,0,s.length)
return v},
b8A(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cg6.prototype={}
C.cg5.prototype={
a1M(d){return(D.o7[d&255]&255|(D.o7[d>>>8&255]&255)<<8|(D.o7[d>>>16&255]&255)<<16|D.o7[d>>>24&255]<<24)>>>0},
bkl(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.o_(A.aH.gaM(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1M((m>>>8|(m&$.q4[24])<<24)>>>0)^D.cy5[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.o_(A.aH.gaM(e),e.byteOffset,w)
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
p=(p^f.a1M((k>>>8|(k&$.q4[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1M((k>>>8|(k&$.q4[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.o_(A.aH.gaM(e),e.byteOffset,w)
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
p=(p^f.a1M((g>>>8|(g&$.q4[24])<<24)>>>0)^j)>>>0
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
bM0(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.o_(A.aH.gaM(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e8[a8&255]
u=D.e8[a9>>>8&255]
t=$.q4[8]
s=D.e8[b0>>>16&255]
r=$.q4[16]
q=D.e8[b1>>>24&255]
p=$.q4[24]
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
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e8[a8&255]^C.no(D.e8[a9>>>8&255],24)^C.no(D.e8[b0>>>16&255],16)^C.no(D.e8[b1>>>24&255],8)^b6[w][0]
m=D.e8[a9&255]^C.no(D.e8[b0>>>8&255],24)^C.no(D.e8[b1>>>16&255],16)^C.no(D.e8[a8>>>24&255],8)^b6[w][1]
l=D.e8[b0&255]^C.no(D.e8[b1>>>8&255],24)^C.no(D.e8[a8>>>16&255],16)^C.no(D.e8[a9>>>24&255],8)^b6[w][2]
b1=D.e8[b1&255]^C.no(D.e8[a8>>>8&255],24)^C.no(D.e8[a9>>>16&255],16)^C.no(D.e8[b0>>>24&255],8)^b6[w][3]
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
a1=J.o_(A.aH.gaM(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.o_(A.aH.gaM(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.o_(A.aH.gaM(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.o_(A.aH.gaM(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bIM(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.o_(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.o_(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.o_(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.o_(A.aH.gaM(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e7[a6&255]
v=D.e7[b0>>>8&255]
u=$.q4[8]
t=D.e7[a5>>>16&255]
s=$.q4[16]
r=D.e7[a4>>>24&255]
q=$.q4[24]
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
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e7[a6&255]^C.no(D.e7[b0>>>8&255],24)^C.no(D.e7[a5>>>16&255],16)^C.no(D.e7[a4>>>24&255],8)^b5[a9][0]
o=D.e7[a4&255]^C.no(D.e7[a6>>>8&255],24)^C.no(D.e7[b0>>>16&255],16)^C.no(D.e7[a5>>>24&255],8)^b5[a9][1]
n=D.e7[a5&255]^C.no(D.e7[a4>>>8&255],24)^C.no(D.e7[a6>>>16&255],16)^C.no(D.e7[b0>>>24&255],8)^b5[a9][2]
b0=D.e7[b0&255]^C.no(D.e7[a5>>>8&255],24)^C.no(D.e7[a4>>>16&255],16)^C.no(D.e7[a6>>>24&255],8)^b5[a9][3]
a4=D.yD[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yD[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yD[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yD[o>>>8&255]
i=D.yD[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yD[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.o_(A.aH.gaM(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bNg.prototype={}
C.bNh.prototype={
gM(d){var w=this.a.length
return w},
aof(){return B.ra(this.a,A.hU,null,null)}}
C.b9u.prototype={
uU(d){return C.hNd(d)}}
C.cqd.prototype={
Mo(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9I(v,t+20,u+16,t,u,B.tS(d.x))},
nn(d){return!1}}
C.bO9.prototype={
cCU(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
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
return B.b(p.ftP(f,r),$async$mH)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mH,v)}}
C.avg.prototype={
a5(){return"SystemUiMode."+this.b}}
C.a83.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a83&&e.a===this.a},
gX(d){return B.bt(B.b_(this),B.wJ(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fBQ)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aVc.prototype={
c0(d){var w=new C.aA7(!0,this.e,null,new B.dh(),B.ci())
w.bZ()
w.scE(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.syz(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFx()}}}
C.aA7.prototype={
syz(d,e){return},
gpt(){var w=this.ab$
return w!=null},
gl1(){var w=this.ab$
return w!=null},
Md(d){var w=d==null?B.h4J(null):d
w.sa4j(this.ak)
return w}}
C.a0v.prototype={
R(){return new C.aIw(B.aX(x.N))},
cQ8(d){return this.d.$1(d)},
cNW(){return this.e.$0()}}
C.aIw.prototype={
a_(){this.a1()
this.OM()},
OM(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cNW(),$async$OM)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f57(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OM,v)},
Yx(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a1<1>")
p=B.C(new B.a1(r,new C.f5b(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f5c(t))
w=3
return B.b(C.an8(p),$async$Yx)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f5d(t,s,p))
w=4
return B.b(t.OM(),$async$Yx)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yx,v)},
a0K(d){return this.cnA(d)},
cnA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0K=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f58(t))
s=J.q(d,"id")
w=3
return B.b(C.bYQ(J.k(s==null?"":s)),$async$a0K)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f59(t))
w=1
break}q=C.h_t(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cQ8(B.a([q],x.D)),$async$a0K)
case 4:if(t.c==null){w=1
break}t.m(new C.f5a(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0K,v)},
OL(d,e){return this.bJc(0,e)},
bJc(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f52(q),r,null,!0,!0,x.y),$async$OL)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f53(t))
s=s.h(e,"id")
w=4
return B.b(C.an7(J.k(s==null?"":s)),$async$OL)
case 4:if(t.c==null){w=1
break}t.m(new C.f54(t))
w=5
return B.b(t.OM(),$async$OL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OL,v)},
cBW(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ih[B.bH(v)-1]+" "+B.bR(v)},
aPJ(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.O_,A.n),w,e,w,w,w,w,w,e)},
aPI(d){return this.aPJ(d,44)},
b5O(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.O_:u,r=B.m(14),q=B.X(e,t?A.c:A.aA,u,u,u,17),p=x.p
q=B.a([q,L.ID,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aA,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.ID,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aS,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bwh,u,u,u)],p))}return B.E(B.aE(A.c4,B.dk(u,B.B(q,A.m,u,A.bb,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hY,u,u,u,A.vh,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f5h(this,d),u,u,u,u,u,u,!1,A.a8),1)},
chn(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d3.j(0.14):D.Xi,n=B.m(18),m=p?A.d3:A.dr
m=B.I(m,A.q,p?1.8:1)
w=this.aPI(A.pY)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aQk,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.v(B.a([v,A.cV,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aQm,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.O_:q
u=p?q:B.I(A.b3,A.q,1.6)
r=p?D.bMb:q
return B.aE(q,B.dk(q,B.B(B.a([w,A.bd,t,B.dk(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fG,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fG,q,q,A.da,A.bm,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f56(this,p,d),q,q,q,q,q,q,!1,A.a8)},
cp7(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cBW(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dr,A.q,1)
v=r.aPI(A.Nb)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aQk,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.v(B.a([u,A.cV,B.d(p+" slides"+t,q,q,q,q,q,q,D.aQm,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b2r(A.hA,A.bu,"Bring it back",r.r?q:new C.f5e(r,d))
return B.p(q,B.B(B.a([v,A.bd,t,p,A.bp,r.b2r(A.e6,A.cf,"Delete",r.r?q:new C.f5f(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.Xi,q,w,o,q,q,A.n),q,q,q,A.da,D.bqO,q,q,q)},
b2r(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hs(B.aE(w,B.p(w,B.X(d,v?A.b3:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
asa(d,e,f){var w=null
return new B.D(D.bpS,B.v(B.a([B.X(d,A.b3,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f8E,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.f1c,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c9
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bV,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b3,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPJ(A.yq,46),A.bd,D.bx9],t)
if(j.r)s.push(D.e7O)
s.push(B.aH(i,i,i,i,A.NL,i,i,i,new C.f5k(d),i,i,i,i,i,i))
s=B.B(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dr,A.q,1)
o=J.a6(h)
q=B.a([A.S,u,new B.D(D.btm,s,i),B.p(i,B.B(B.a([j.b5O(0,A.y1,"Save",j.a.c.length),j.b5O(1,A.Nq,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bsq,A.eq,i,i,i)],t)
if(j.x!=null){u=(j.y?A.cf:A.bu).j(0.12)
s=B.m(14)
r=B.I((j.y?A.cf:A.bu).j(0.4),A.q,1)
p=j.y
n=p?A.Nc:A.eg
n=B.X(n,p?A.cf:A.bu,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.B(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a7g,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bsm,A.i_,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f4K,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f7L,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f5l(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.B(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.asa(A.pY,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.chn(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e7m)
else if(j.e==null)s.push(j.asa(A.akv,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.asa(A.oJ,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.cp7(r.gS(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cn,B.cz(u,i,X.ahC,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc2s()
p=s?i:D.O_
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cB,18)],x.V)
u=u.a
m=u===0
k=B.X(A.y1,m?A.jd:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bsZ,B.aE(i,B.dk(i,B.B(B.a([k,A.a6J,new B.dq(1,A.cn,B.f4(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.jd:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.ei),i)],t),A.m,i,A.bb,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hY,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bl(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b_s,i,i,i,i,i,i,i,i)}}
C.og.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.Yf.prototype={
R(){return new C.ax6(B.a([],x.k),B.f8(null,x.H))},
ge_(){return this.c}}
C.ax6.prototype={
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
cvf(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.qc(t.d,new C.cFF(d))
v=w<0
if(v&&C.hKl(d))return t.f
u=t.d
if(v)J.pu(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fRa(new C.cFG(t),v)
return t.f=t.f.bz(new C.cFH(t,d),v).eM(new C.cFI())},
In(d,e,f){return this.cb1(0,e,f)},
aXn(d,e){return this.In(0,e,!1)},
cb1(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$In=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).c5(B.e8(new C.cFB(t,e),!1,null,x.H)),$async$In)
case 3:w=4
return B.b(t.f,$async$In)
case 4:w=5
return B.b(t.OU(),$async$In)
case 5:case 1:return B.h(u,v)}})
return B.i($async$In,v)},
aWE(d){var w=A.o.u(1000*Date.now()),v=d==null?D.dtP:d
this.In(0,new C.og(w,v,new B.S(Date.now(),0,!1)),!0)},
c1X(){return this.aWE(null)},
acM(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acM=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.cFJ(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acM)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aWE(s)
case 1:return B.h(u,v)}})
return B.i($async$acM,v)},
Im(d,e){return this.bJ4(0,e)},
bJ4(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Im=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cFw(e),s,null,!0,!0,x.y),$async$Im)
case 3:if(g!==!0){w=1
break}t.m(new C.cFx(t,e))
w=4
return B.b(t.f,$async$Im)
case 4:w=5
return B.b(C.afX(t.a.c,e.a),$async$Im)
case 5:w=6
return B.b(t.OU(),$async$Im)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Im,v)},
D2(d){return this.bBg(d)},
bBg(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$D2=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.cFs(d),r,!0,!0,!1,null,!1,!1,x.N),$async$D2)
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
return B.b(t.aXn(0,d),$async$D2)
case 9:w=5
break
case 7:w=10
return B.b(F.h02(r,d.b,null),$async$D2)
case 10:w=5
break
case 8:w=11
return B.b(t.Im(0,d),$async$D2)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$D2,v)},
bWB(){var w,v,u=null,t=[D.dtS,D.dtQ,D.dtR],s=new C.cFz(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d5.j(0.4),A.eU,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.x(D.ddX[w],u,A.ok,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bq(v,v,v,v),u,u,A.n),u,u,u,u,A.nZ,u,u,u))}return B.p(u,B.B(B.a([B.E(B.v(B.a([D.fxl,A.N,B.bV(A.bz,n,A.bq,6,6),A.aQ,B.aE(u,B.p(u,D.eL6,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ahZ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cFy(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bUj,A.n),u,u,u,u,D.btw,u,u,u)},
bBe(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cB,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b0,A.r,B.a([B.f4(A.A,F.anG(d.b),A.f,A.bS),D.edk,B.ao(v,B.aE(v,B.p(v,D.bMY,A.f,v,v,D.b0m,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFn(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eZB,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f4W,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cFo(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cFp(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eC(B.a([new B.D(H.agw,B.hs(B.aE(s,B.p(s,A.anf,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.J,12)],x.V),E.vU,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc3d(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.n0,s,s,s,!0,s,s,s,s,s,D.fxp,s,s,s,1,s,!0)
if(t.e)r=D.b3K
else{w=t.bWB()
v=B.a([D.fj9,A.ab],r)
if(J.cy(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eZ2,s,s,s),A.f,s,s,new B.o(D.b8u,s,s,u,s,s,A.n),s,s,s,s,A.xK,s,s,s))}r=B.a([new B.nN(A5.Yr,new B.m6(w,s),s),new B.nN(D.bsT,new B.m6(B.B(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cn(t.d))r.push(D.eRa)
else r.push(new B.nN(D.bso,B.OE(new B.ol(new C.cFK(t),J.ad(t.d),!0,!0,!0,0,B.rS(),s),D.b31),s))
r=B.vs(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b7i,r,s,!1,!1,s,s)}}
C.Yd.prototype={
R(){return new C.ax2(B.a([],x.bx))},
TB(d){return this.d.$1(d)}}
C.aEo.prototype={}
C.ax2.prototype={
b_f(d,e,f){var w=$.aw(),v=new B.as(new B.bb(d,A.b4,A.aN),w),u=this.gaXm()
v.aO(0,u)
w=new B.as(new B.bb(e,A.b4,A.aN),w)
w.aO(0,u)
return new C.aEo(v,w,f)},
DS(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pN,new C.cER(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.as(new B.bb(w.a,A.b4,A.aN),v)
t=m.gaXm()
u.aO(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.as(new B.bb(w.b,A.b4,A.aN),v)
u.aO(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.as(new B.bb(w.c,A.b4,A.aN),v)
u.aO(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.as(new B.bb(p.a,A.b4,A.aN),v)
o.aO(0,t)
n=new B.as(new B.bb(p.b,A.b4,A.aN),v)
n.aO(0,t)
r.push(new C.aEo(o,n,p.c))}if(r.length===0)r.push(m.b_f("Page 1","",""))},
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
for(s=o.w,r=s.length,q=0;q<s.length;s.length===r||(0,B.L)(s),++q){p=s[q]
t.push(new F.mq(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rf(n,w,v,t,u)},
AD(){var w=0,v=B.j(x.H),u=this,t
var $async$AD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gp8()
t=u.a
w=2
return B.b(t.TB(t.c),$async$AD)
case 2:return B.h(null,v)}})
return B.i($async$AD,v)},
c3b(){this.m(new C.cEQ(this))
this.DS()},
aWl(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cET(w,d,v))
w.DS()},
c3c(d,e){var w=A.d.cC(this.w,e)
this.m(new C.cF0())
this.DS()
$.aW.x1$.push(new C.cF1(w))},
Q4(d){return this.chd(d)},
chd(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
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
n=J.ahu(o,".png")?"image/png":"image/jpeg"
r.m(new C.cEU(d,n,p))
r.DS()
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
return B.b(F.hmT(r,t.gp8()),$async$xE)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cES(t,s))
t.DS()
case 1:return B.h(u,v)}})
return B.i($async$xE,v)},
chv(d){var w,v=this,u=null,t=F.fxX(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hg(D.bGj,D.flC,new C.cEW(v,d),u),u)
w=x.p
return new B.D(A.cz,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.cj,A.bS,!0,140,!1,u,1/0),A.aq),B.ao(u,B.B(B.a([v.b2s(A.ku,new C.cEX(v,d)),A.bp,v.b2s(A.cD,new C.cEY(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b2s(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.D(A.hx,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
Io(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Io=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.AD(),$async$Io)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.h02(s,t.gp8(),new C.cF_(t)),$async$Io)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Io,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eC(B.a([new B.D(A.r_,B.hg(D.bKX,D.frB,n.gavO(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bL,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.ane,m,m,m,new C.cF2(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Wu,m,1,m,m,m,!1,m,!1,E.n0,m,m,m,!0,m,m,m,m,m,D.fmu,m,m,m,1,m,!0),j=Av.aTU(O.lf,A.c,Ae.Vo,A.o3,D.fne,n.gc3a()),i=B.m(18),h=n.gavN(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jp,12)],x.V)
g=B.aE(m,B.p(m,new B.a7(92,142.1818181818182,B.f4(A.A,F.anG(n.gp8()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.B(B.a([g,A.er,B.E(B.v(B.a([D.fyU,A.at,B.d(F.fZx(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.fam,m,m,m),A.S,B.df(E.amu,E.aR8,h,B.bm(A.d5,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Wu,m,m,i,m,m,A.n),m,m,m,m,A.bm,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.oj,!0,A.a4,m,A.an,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aB,h,A.N,w,A.N,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.bs(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.lf.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bJH,m,m,m,v===0?m:new C.cF3(n,v),m,m,m,m,"Move up",A.cc)
r=i.length
q=B.aH(m,m,m,m,D.bPX,m,m,m,v===r-1?m:new C.cF4(n,v),m,m,m,m,"Move down",A.cc)
r=r===1?m:new C.cF5(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.v(B.a([new B.cm(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.faU,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aH(m,m,m,m,B.X(A.e6,A.oC,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.cc)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.ck,!0,A.a4,m,A.an,m,m,m,m),A.am,n.chv(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bq(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.an,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.n0,m,new B.bO(u,u,u,u),new B.bq(w,w,w,w),m,m,A.n),m,m,new C.a83(h),A.e5,D.br2,m,m,m))}return B.oi(!0,B.c8(k,E.aeG,B.cz(g,m,D.bru,m,m,A.ah,!1),m,!1,!1,j,m),new C.cF6(n),x.C)}}
C.ax4.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.cf:E.n0,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d5.j(0.22)
w=B.m(12)
v=x.p
return new B.D(A.eK,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.B(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bd,B.E(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aPG,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ey,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bm,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.apP.prototype={
R(){return new C.aDa()}}
C.aDa.prototype={
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
if(u.c!=null)u.m(new C.e8r(u))
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
if(J.d_(n,"http://")||J.d_(n,"https://")||J.d_(n,"data:")){o=B.XS(B.cw(n,0,null),new B.P0(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.ib(0).cM(0,A.pJ),$async$Zb)
case 7:if(r.c==null){w=1
break}r.d.td(!1)
r.m(new C.e8p(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e8q(r))
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
c5U(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h4(0)
w.m(new C.e8s(w))}else{v.pS(0)
w.m(new C.e8t(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bI
n=B.m(8*n.d)
m=B.a([D.ja.j(0.92),D.Kw.j(0.95)],x.O)
w=B.I(A.bY.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.q0,A.bY,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c0(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.be)}if(p.f)return B.av(B.X(A.alL,A.aA,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b4z
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f4(A.A,new B.a7(r,q,new B.A_(s,o),o),A.r,A.bS)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iW,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bw(n,new B.an(A.W,o,A.b0,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc5T(),o,o,o,o,o,o,!1,A.a8)}}
C.xq.prototype={
a5(){return"NgmyHatiLayoutKind."+this.b}}
C.jo.prototype={}
C.acV.prototype={
B(d){return B.oN(new C.dXS(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.acj.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.ja.j(t?0.35:0.4),A.q,1),p=t?D.L3:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cB,14)],o),m=B.m(10),l=B.I(A.bY.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fG(0.5625,C.i1I(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.ait,u,u,u,u),1)
m=D.ja.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.ja,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cV,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.aA:D.bex,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.agL,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xt.prototype={
a5(){return"NgmyMarriageLayoutKind."+this.b}}
C.nD.prototype={}
C.biy.prototype={
Zk(d){var w=null
return new B.bI(A.a3,w,w,B.DE(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c6l(){return this.Zk(1)},
awr(d){var w=null,v=B.m(8),u=B.I(A.hW,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.acG,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.B(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hW,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hW,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.bb,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.am,w.awr("TAARIFA ZA WANANDOA"),A.am,w.c6l(),A.cV,w.Zk(0.9),A.cV,w.Zk(0.7),A.N,w.awr("TAMKO LA MAKUBALIANO"),A.h0,w.Zk(1),A.cV,w.Zk(0.95),A.N,w.awr("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acY.prototype={
B(d){return B.oN(new C.edG(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeE.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.be7:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cB,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.h_1(w.a)
if(v==null)v=A.d.gL(D.Qs)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b0,A.r,B.a([B.bZ(0,B.fL(C.h_0(v.d),A.A,r,r,A.cj,A.bS,!0,r,!1,r,r),0,0,0),new B.D(A.aht,new C.biy(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.ait,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.L4,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cV,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.aA:D.b7O,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.agL,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kS.prototype={
a5(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7x.prototype={}
C.Vq.prototype={
R(){var w=$.aw()
return new C.aDt(new B.cs(null,x.A),new B.as(A.as,w),new B.as(A.as,w),B.mz(0,null,null),A.d.gL(D.a2m),D.dE9,B.a([],x.L),B.a([],x.gE))}}
C.aDt.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zl(C.fBQ(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fAM().bz(new C.egY(v),w)
$.qP().jy(0,"assets/images/ngmy_logo.png").bz(new C.egZ(v),w).eM(new C.eh_())},
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
return B.b(C.hn9(m,p),$async$II)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCz(new B.pI(o,1),m),$async$II)
case 10:if(r.c!=null)r.m(new C.egA(r,o))
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
return B.b(C.hn9(s,q),$async$Wp)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCz(new B.pI(r,1),s),$async$Wp)
case 4:if(t.c!=null)t.m(new C.egw(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wp,v)},
adB(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$adB=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.egH(q))
t=4
q.a.toString
p=C.i69()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$adB)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.egI(q,n))
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
if(q.c!=null)q.m(new C.egJ(q))
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
break}q.m(new C.egC(q,i))
t=4
q.a.toString
p=C.i68()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Zp)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.egD(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.egE(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.egF(q))
$.aW.x1$.push(new C.egG(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zp,v)},
c6B(d){this.m(new C.egB(this,d))},
E9(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$E9=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.egy(q))
t=4
w=7
return B.b($.aW.gmC(),$async$E9)
case 7:w=8
return B.b(B.bN(A.n8,null,x.H),$async$E9)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pT))throw B.V("The page is not ready yet.")
w=9
return B.b(p.lY(1800/p.gZ(0).a),$async$E9)
case 9:o=e
w=10
return B.b(o.hr(A.fY),$async$E9)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.ag_(J.eT(A.dD.gaM(n)),"ngmy_news.png","image/png"),$async$E9)
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
if(q.c!=null)q.m(new C.egz(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E9,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kY,a2,a2,a2,new C.egP(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bLs,a2,a2,a2,new C.egQ(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oS,a2,a2,a2,a4?a1.gaYt():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eC(v,a2,a2,!0,!0,A.AJ,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eLf,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eU,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f4(A.A,new B.ev(new C.b08(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.Tv,a2,a2,a2)
t=a1.as?a2:a1.gc6A()
t=B.a([B.E(B.df(D.bMc,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.ck,a2,a2,a2),t,B.bm(D.th,a2,a2,a2,A.c,A.fN,a2,a2,new B.b7(B.m(14),P.uV),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.cj,A.bS,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bJ_,a2,a2,a2,a1.as?a2:a1.gbHG(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.B(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.Tv,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aRz("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dn,!0,A.a4,a2,A.an,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d8A[o]
p.push(B.mH(a2,D.th,new B.x(n.a,a2,A.pc,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.egR(a1,n),a2,a2,P.uV,a2))}p=B.bV(A.bz,p,A.bq,6,8)
m=a1.Q
m=B.bV(A.bz,B.a([D.fxy,A.bd,B.j7(a2,a2,a2,D.fhX,a2,new C.egS(a1),m==="en",a2,a2,a2,a2),A.ab,B.j7(a2,a2,a2,D.fhS,a2,new C.egT(a1),m==="sw",a2,a2,a2,a2)],w),A.rR,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.Tv,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dd(D.a2m,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bS(i,i.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aQ2(g==null?h.a(g):g))}k=B.cz(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dd(D.a2m,10,a2,j),h=j.$ti,j=new B.bS(j,j.gM(0),h.k("bS<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aQ2(g==null?h.a(g):g))}j=B.cz(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc6D()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cz,s,a2),t,A.aB,new B.D(A.cz,r,a2),q,A.N,p,A.S,m,A.aB,new B.D(A.cz,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aQ,B.aE(a2,B.p(A.A,B.B(B.a([D.bM6,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.u2,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e3,B.B(B.a([D.doH,A.av,D.bxs],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b7.j(0.35):D.th
p=new B.aT(16,16)
d=new B.ay(A.bG,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f8q,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.Vb,new B.o(q,a2,new B.bO(d,d,d,d),new B.bq(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cz,A.i_,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cWh[o]
t.push(B.mH(a2,D.th,new B.x(a0,a2,A.IR,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.egU(a1,a0),a2,a2,P.uV,a2))}u.push(B.bV(A.bz,t,A.bq,6,8))
u.push(A.S)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aRz("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.egV(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dn,!0,A.a4,a2,A.an,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc6C()
u.push(B.B(B.a([t,A.ab,B.Hx(A.yv,s,B.nx(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gaYt()
u.push(B.df(A.oS,D.ft8,t,B.bm(A.cZ,a2,a2,a2,a2,A.IB,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cz(v,a1.r,A.ahf,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jQ.j(0.5),A.q,1)
v.push(B.bZ(0,B.el(B.av(B.p(a2,B.B(B.a([E.a6K,A.er,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iH,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.AA,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.btO,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.AJ,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aRz(d){var w=null
return B.bs(w,new B.b4(4,B.m(14),A.Y),w,A.eQ,w,w,w,w,!0,w,w,w,w,w,w,D.th,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.IM,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aQ2(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bG
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.kS,t,t,t,t),A.h0],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bq5,t,t,t,t))
w.push(A.cV)
w.push(new B.D(A.ji,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.bb,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iU,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.egx(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.zl.prototype={
baI(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zl(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cGp(d){var w=null
return this.baI(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBR(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cc3(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gS(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fE(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.cc1(),B.U(w).k("K<1,n>")).c_(0,new C.cc2())
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
return this.baI(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFl(d){return this.f}}
C.td.prototype={
a5(){return"NewsLayout."+this.b}}
C.Bj.prototype={
a5(){return"NewsFrame."+this.b}}
C.le.prototype={}
C.b08.prototype={
rf(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aYv(d,e,f,g){return this.rf(d,e,null,1.25,f,A.bn,g)},
Pq(d,e,f,g,h){return this.rf(d,e,f,1.25,g,A.bn,h)},
awx(d,e,f,g,h){return this.rf(d,e,null,f,g,A.bn,h)},
aww(d,e,f,g,h){return this.rf(d,e,f,g,0,A.bn,h)},
aYx(d,e,f,g,h){return this.rf(d,e,null,f,0,g,h)},
c6H(d,e,f,g,h,i){return this.rf(d,e,f,g,0,h,i)},
awv(d,e,f,g){return this.rf(d,e,null,f,0,A.bn,g)},
adE(d,e,f){return this.rf(d,e,null,f,0,A.bn,A.cN)},
aYw(d,e,f,g,h){return this.rf(d,e,f,g,0,h,A.cN)},
c6G(d,e,f,g){return this.rf(d,e,null,f,0,g,A.cN)},
c6F(d,e,f,g){return this.rf(d,e,f,g,0,A.bn,A.cN)},
adF(d,e,f,g,h,i){return this.rf(d,e,f,g,h,A.bn,i)},
aYu(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kh(new B.eq(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.ca,new B.ju(1),u,u,h,u,A.c8,u)
v.wC(g)
if(!v.b.a.c.gaDt())return w
w-=2}return j},
adC(d,e,f,g,h,i,j,k){return this.aYu(d,e,f,g,h,i,j,k,A.bn)},
ayF(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayE(d){return this.ayF(null,!1,d)},
agu(d,e){return this.ayF(null,d,e)},
cog(d,e){return this.ayF(d,!1,e)},
gb_D(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaUa(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Oh(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adC(w.gaUa(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaUa(),v,g,A.a2,v,v,v,w.aww(u,t,f,1.02,A.O),e,v,v)},
aUf(d){return this.Oh(d,A.L,null,2,78,30)},
ab2(d,e,f,g,h){return this.Oh(d,e,null,f,g,h)},
bWt(d,e,f,g,h){return this.Oh(d,A.L,e,f,g,h)},
bWs(d,e,f){return this.Oh(d,A.L,null,e,f,30)},
Rm(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bI
w=v.d.as
return new B.D(A.kr,B.d(s,u,g,A.a2,u,u,u,v.aYw(w,v.aYu(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b5u(d){return this.Rm(d,A.L,null,3,24)},
aA9(d,e,f,g){return this.Rm(d,e,null,f,g)},
cvJ(d,e,f){return this.Rm(d,A.L,e,3,f)},
b5v(d,e){return this.Rm(d,e,null,3,24)},
cvH(d,e){return this.Rm(d,A.L,null,3,e)},
cvI(d,e,f){return this.Rm(d,e,null,3,f)},
aqb(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.fV,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Pq("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.B(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Ne(){return this.aqb(null,!0)},
aqa(d){return this.aqb(null,d)},
bDA(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bI
return new B.D(A.hZ,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c6G(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vs(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_D(),h=A.o.an(j.bB(B.c1(B.bA(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hUK(Math.max(1,B.bA(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aYv(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adC(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adC(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.B(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eD,l,l,l,m.adF(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.B(B.a([B.d(C.bBP(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hB,A.j,0,l,l),A.am,m.agu(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.B(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.er,B.E(B.d(i,l,1,A.eD,l,l,l,m.awv(v,u*0.9,1,A.O),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.B(B.a([B.d(C.bBP(j),l,l,l,l,l,l,m.Pq(k,13,B.b0(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hB,A.j,0,l,l),A.N,m.cog(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb_D()
v=B.d("NGMY",l,l,l,l,l,l,m.awx(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.B(B.a([v,A.ab,B.eG(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.rf(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b6,new B.dq(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adF(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.O),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.B(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l)
t=m.agu(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awv(v,u,1,A.O),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agu(!0,1.4),A.at,B.d(C.bBP(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayE(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.awx(v,u,1,3,A.O),A.L,l,l),A.N,m.agu(!0,1.2),A.at,B.B(B.a([B.d(C.bBP(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l),A.at,m.ayE(3)],h),A.m,l,A.e,A.j,0,A.p)}},
aca(d){return this.vs(d,!1)},
adD(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adF("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c6E(d,e){return this.adD(d,null,e,null)},
aWd(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.E(B.dl(v),12)===0?12:A.o.E(B.dl(v),12),t=B.b0(this.d.w).j(0.75),s=this.aww("Roboto",15,t,1,A.cv),r=B.X(E.ajS,t,w,w,w,18),q=A.a.ap(A.oW[B.bH(v)-1],0,3),p=A.a.aT(A.o.u(B.fZ(v)),2,"0"),o=B.dl(v)>=12?"PM":"AM"
return B.B(B.a([r,A.ab,B.d(q+" "+B.bR(v)+", "+B.bA(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fJ,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
avh(){return this.aWd(A.mu)},
b2G(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adF("Roboto",this.adC(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayI(d,e,f){return this.b2G(d,e,f,30)},
aAc(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bI
return new B.D(A.vg,B.d(v,w,e,A.a2,w,w,w,this.c6F("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b5z(d){return this.aAc(d,3,22)},
cvU(d,e){return this.aAc(d,e,22)},
tw(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cj,A.bS,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.Dc(D.bwy,w,s)
if(v==="sepia")w=new B.Dc(D.bwx,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.xX,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c0(s,new B.o(s,s,s,s,s,new B.bT(A.A,0.95,A.x,s,0,B.a([A.K,A.Wq.j(0.38)],x.O),s,s),A.n),A.be))
return new B.a7(d,e,new B.an(A.W,s,A.b0,A.r,v,s),s)},
qn(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tw(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.eq,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lP,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e3S,14)],x.V)
v=l.tw(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eG(A.A,-0.035,B.p(k,B.v(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aYw(j.as,13.5,D.b9k,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bcw,k,k,k,w,k,A.n),k,e,k,k,D.brp,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.tw(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hU(l.tw(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lP,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e3I,10)],x.V)
return B.eG(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tw(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.r2,k,k,k),0,0,0),B.ao(k,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bL.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.ns(l.tw(d,e),A.aq,D.fSO),new C.bbI(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.tw(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bv(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bO,k,k,new B.bq(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cm(A.aO,A.q4,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b0,A.r,w,k),A.f,A.ea,k,k,k,e,k,k,D.bvO,k,k,d)
case 8:w=d/2
v=B.wR(A.he,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wR(A.hC,new B.aT(w,w)),l.tw(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fM,22)],x.V)
return B.p(k,l.tw(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bU,k,k,d)
case 10:return new B.a7(d,e,B.ns(l.tw(d,e),A.aq,D.fYQ),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tw(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.eq,k,k,d)}},
aNE(d,e){return this.d.e===D.R5?A.bI:this.bDA(d,e)},
VY(d){return this.aNE(d,A.L)},
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aYx(v.Q,19,1.15,A.cF,A.O),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Pq("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.adE(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jz(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bm,n,n,d)},
gceL(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8L(d,e,f,g){return B.cp(new C.cc4(this,e,d,f,g))},
a8K(d){return this.a8L(d,22,!0,18)},
W8(d,e){return this.a8L(d,22,!0,e)},
aOG(d,e,f){return this.a8L(d,22,e,f)},
bFB(d,e,f){return this.a8L(d,e,!0,f)},
b8q(d,e,f,g){return B.cp(new C.cc5(this,e,d,g,!0,f))},
cdz(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.aca(824),A.aB,k.aUf(824),k.b5u(824),A.N,k.Ne(),A.ac,B.av(k.qn(824,360),j,j,j),k.VY(824),A.ac,B.E(k.a8K(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.aca(824),A.aQ,new B.a7(j,350,B.B(B.a([new B.a7(440,j,B.v(B.a([k.ab2(440,A.bg,3,62,26),k.aA9(440,A.bg,2,20),A.b6,k.aqb(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.IC,B.v(B.a([k.qn(362,310),k.VY(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayE(2),A.ac,B.E(k.a8K(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vs(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bWt(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cvJ(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.B4,j,j,j)
u=B.a([B.av(k.qn(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.R5){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.aww(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lN,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.N,k.Ne(),A.S,B.E(k.W8(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vs(824,!0)
w=k.qn(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b5,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.Oh(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b_,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.bu6,j,j,j),j,j,0,0,j,j)],u),j),k.b5v(824,A.bg),A.N,k.Ne(),A.S,B.E(k.a8K(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.aca(824),A.aB,k.aUf(824),k.b5u(824),A.N,k.Ne(),A.ac,B.E(k.b8q(3,300,B.v(B.a([k.qn(300,300),k.VY(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vs(824,!0)
v=x.p
u=B.v(B.a([k.ab2(440,A.bg,3,62,26),k.aA9(440,A.bg,2,20),A.b6,k.aqa(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.by,new B.a7(j,400,B.B(B.a([new B.a7(440,j,u,j),A.aNI,new B.D(A.hZ,k.qn(364,h.e===D.R5?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aB,B.E(k.W8(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.aca(824),A.ac,k.bWs(824,2,70),k.cvH(824,21),A.N,k.Ne(),A.ac,B.E(k.b8q(3,340,B.av(k.qn(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vs(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBP(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Pq(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bm,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aYx(h.Q,24,1.15,A.cF,A.O),j,j,j))
v.push(A.b6)
if(k.gazu())v.push(k.azt(230,250))
return B.v(B.a([w,A.aB,B.E(B.B(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.agJ,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.ab2(570,A.bg,3,62,28),k.cvI(570,A.bg,20),A.N,k.aqa(!1),A.N,B.av(k.qn(570,330),j,j,j),k.VY(570),A.S,B.E(k.aOG(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vs(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Pq(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.am,k.Oh(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.bsr,j,j,j),k.b5v(824,A.bg),A.S,B.av(k.qn(824,310),j,j,j),k.VY(824),A.N,k.Ne(),A.S,B.E(k.a8K(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vs(824,!0),A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([k.qn(824,430),B.ao(18,k.c6E(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.ayI(824,3,66),k.b5z(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.avh(),A.aB,B.E(k.W8(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vs(824,!0),A.by,new B.a7(j,500,B.B(B.a([new B.a7(410,j,B.v(B.a([k.adD(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aQ,k.b2G(410,4,58,28),k.aAc(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),U.aNJ,k.qn(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aB,k.avh(),A.aQ,B.E(k.W8(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vs(824,!0)
v=k.qn(824,420)
u=B.hxp(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c6H(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bum,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.ayI(824,3,62),k.b5z(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aWd(A.lo),A.aB,B.E(k.W8(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vs(824,!0)
u=h.w
t=x.p
w=B.a([k.qn(824,380),B.ao(j,k.adD(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayI(824,2,60)
r=k.cvU(824,2)
p=k.avh()
o=B.E(k.aOG(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aQ,new B.an(A.W,j,A.aa,A.r,w,j),A.aQ,s,r,A.S,p,A.aB,o,A.ac,B.p(j,B.B(B.a([B.bw(B.m(14),k.tw(150,104),A.aq),A.og,B.E(B.v(B.a([k.adD("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a2,j,j,j,k.awv(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.ey,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bm,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vs(824,!0),A.by,k.ab2(824,A.bg,3,62,30),k.aA9(824,A.bg,2,22),A.S,k.aqa(!1),A.S,B.av(k.qn(824,330),j,j,j),k.aNE(824,A.bg),A.aQ,B.E(k.bFB(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c0(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.be),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b8d(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.D(D.buS,B.v(B.a([B.E(t.cdz(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h0,B.B(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aYv(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Pq(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hB,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bqP(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hU(B.fL(q,A.A,s,s,A.cj,A.bS,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mu,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.awx(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dc(B.p(s,B.B(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bvW,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jz(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbJ.prototype={
j4(d){return C.hcw(d)},
jL(d){return!1}}
C.bbI.prototype={
a4(d,e){var w,v=C.hcw(e)
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
w.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.Kx.j(0.13),A.K],v),l,l).av(0,B.bU(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
au(d){return!1}}
C.bqP.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.hr(u,u,u,u,B.de(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.ca,u,A.e_,A.c8)
s.ey()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.j1(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
au(d){return!d.b.A(0,this.b)}}
C.Vt.prototype={
R(){return new C.aDx()}}
C.aDx.prototype={
a_(){var w=this
w.a1()
B.fYU(w.a.c,null).bz(new C.ei8(),x.g7).bz(new C.ei9(w),x.a)
w.a.toString},
gaMt(){var w=D.aux[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawy(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaMt()
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
break}r.m(new C.ehW(r))
t=4
q=r.gawy()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qW()
m=B.Da(n,null)
i=B.N()
i.Q=A.fW
m.rG(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pD().zf(J.h21(p),J.h21(o)),$async$Zr)
case 7:l=e
w=8
return B.b(l.hr(A.fY),$async$Zr)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.O(J.eT(J.vj(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.ehX(r))
r.c.I(x.q).f.T(D.eTL)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zr,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kY,s,s,s,new C.ei2(d),s,s,s,s,s,s),p=x.p
q=B.eC(B.a([B.bK(!1,D.fvD,s,s,!0,s,s,t.y||r==null?s:t.gc6I(),s,s)],p),s,s,!0,!0,A.AJ,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fzw,s,s,s,1,s,!0)
if(r==null)p=A.lF
else{w=B.E(new B.D(A.bR,B.av(new B.fG(t.gaMt(),B.cp(new C.ei3(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iU,B.j7(s,s,s,new B.x(D.aux[u].a,s,E.aPu,s,s,s,s,s,s,s,s,s),s,new C.ei4(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bl(!0,B.v(B.a([new B.a7(s,40,B.cz(v,s,s,s,s,A.aO,!1),s),B.B(B.a([D.bMP,B.E(B.kZ(s,s,s,6,1,new C.ei5(t),t.f),1),D.bMr],p),A.m,s,A.e,A.j,0,s,s),D.ft2,A.am,B.bK(!1,D.fsN,s,s,!0,s,s,new C.ei6(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.WE,s,s,s,s,s,s,D.brN,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.AJ,p,s,!1,!1,s,s)}}
C.bbf.prototype={
a4(d,e){var w
$.W()
w=B.N()
w.Q=A.cj
return d.rG(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
au(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_w.prototype={
R(){var w=$.aw(),v=x.A
return new C.aEU(new B.as(A.as,w),new B.as(new B.bb("NGMY",A.b4,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gL(D.a2W),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.ot.prototype={}
C.aEU.prototype={
gaUn(){var w,v,u=this
if(u.p1)w=new B.vA(1,u.p2,0.9,u.p3).iB().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eRJ(w))},
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
p=J.eT(J.vj(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCz(new B.pI(p,1),o),$async$Y4)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.eQB(r,p))
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
return B.b(F.bCz(new B.pI(p,1),n),$async$Pt)
case 9:if(r.c==null){w=1
break}r.m(new C.eQZ(r,p))
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
b23(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aF=w.aN=w.aE=w.az=w.Y=w.b6=w.be=w.y2=0
w.b_=null
w.b3=0.25
w.bf=null
w.bM=0.5
w.aS=1
w.c8=w.bU=w.bj=0
w.cX=w.cU=!1},
aVY(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bzf(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dbe)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bzf(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bzf(C.fXZ(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bzf(C.fXZ(1-a0*0.5,n,n,n),w)}return a1?C.bzf(C.fXZ(-1,255,255,255),w):w},
aAi(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kV(0,this.d.a.a),t=B.C(u,B.a3(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.z8(u,v,w)
this.dx.p9(new C.eR8(t),!0)
return t},
b4z(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAi()
w=C.i3R(e.d.a.a,e.db)
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
return C.i0l(d,k,v,a0,j,e.gaUn(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
ctH(){return this.b4z(null)},
D1(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$D1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmC(),$async$D1)
case 3:w=4
return B.b(B.bN(A.eJ,null,x.H),$async$D1)
case 4:w=5
return B.b($.aW.gmC(),$async$D1)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pT)){u=null
w=1
break}w=7
return B.b(r.lY(1080/r.gZ(0).a),$async$D1)
case 7:w=6
return B.b(e.hr(A.fY),$async$D1)
case 6:q=e
u=q==null?null:J.eT(A.dD.gaM(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$D1,v)},
a9C(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9C=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eQk(q))
t=4
w=7
return B.b(q.D1(),$async$a9C)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcw().aJ(p)
n=C.Bw(null,null,null,null,D.oa,6,!1,null,null,null,null,null,C.cD(),null,!1,null,"NGMY Quote",null,null,B.a([q.b4z(o)],x.g),"office_blue",null,!1,null)
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
if(q.c!=null)q.m(new C.eQl(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9C,v)},
Al(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Al=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.eQi(q))
t=4
w=7
return B.b($.aW.gmC(),$async$Al)
case 7:w=8
return B.b(B.bN(A.oF,null,x.H),$async$Al)
case 8:w=9
return B.b($.aW.gmC(),$async$Al)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pT))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.lY(1080/p.gZ(0).a),$async$Al)
case 10:o=e
w=11
return B.b(o.hr(A.fY),$async$Al)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.ag_(J.eT(A.dD.gaM(n)),"ngmy_quote.png","image/png"),$async$Al)
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
if(q.c!=null)q.m(new C.eQj(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Al,v)},
cgF(){var w=this.p4
w.toString
return B.cp(new C.eQS(this,w))},
aYE(d,e){var w=null
return B.bs(w,w,w,w,w,D.f32,w,w,!0,new B.b4(4,B.m(16),P.uV),w,w,w,w,w,D.th,!0,w,w,w,w,new B.b4(4,B.m(16),D.aY6),w,w,w,w,w,w,w,w,A1.Di,e,w,w,w,w,w,w,w,D.f8h,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xL(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aQh,w,w,w))
return new B.D(D.bpK,B.B(u,A.m,w,A.e,A.j,0,w,w),w)},
aYD(d,e){var w=null,v=B.m(18),u=B.I(A.bG,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jD),A.f,w,w,new B.o(D.th,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vz(d){return this.aYD(d,A.bD)},
o9(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.u2:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bG,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.jd,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.jd,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.dk(r,B.B(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hY,r,r,r,A.F8,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
aft(d,e,f){return this.o9(d,null,e,f)},
awC(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.eA:A.bG,s=x.p
v=B.a([B.dk(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hY,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aA
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aYH(d,e,f,g,h,i){return this.awC(d,e,f,g,h,5,i)},
kg(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.f04,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e7q,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eR4(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aPm,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.YR,u,u,u))
s=B.B(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auH(w).cHN(A.b7,A.bG,A.b7.j(0.2),A.c,D.eKz,4)
return new B.D(A.xv,B.v(B.a([s,B.a9E(B.kZ(u,u,u,g,f,new C.eR5(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahu(d,e,f,g,h,i){return this.kg(d,e,f,g,h,null,i)},
ahW(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dr:B.b0(u)
r=d==u
q=r?A.c:A.b3
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bFW:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eR7(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bV(A.bz,n,A.bq,10,10)},
bJK(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2W
else{v=x.a8
w=B.C(new B.a1(D.a2W,new C.eQa(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aYE("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eQb(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7J,!0,A.a4,n,A.an,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aYE("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.eQc(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dn,!0,A.a4,n,A.an,n,n,n,n)
t=o.xL("DESIGNS",A.tQ)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cNW[q]
r.push(new B.D(A.iU,o.aft(p,o.x===p,new C.eQd(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.B(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hJ(n,new C.eQe(o,w),w.length,n,n,A.aO,new C.eQf(),!1),n),A.N,o.aYD(B.v(B.a([B.iF(A.b7,n,n,A.af,!0,new C.eQg(o),n,D.fkf,n,D.fgG,o.k3),B.iF(A.b7,n,n,A.af,!0,new C.eQh(o),n,n,n,D.fdT,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.ahe)],s),A.F,n,A.e,A.j,0,A.p)},
cCb(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAi()
if(a7.length===0)return a5.vz(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.J_,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.L)(a7),++s){r=a7[s]
v.push(t)
q=B.af('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.ap(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a3(u).k("co.E"))
A.d.fm(m)
l=m.length!==0&&A.d.d7(m,new C.eRy(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eRF(a5)
j=new C.eRH()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.J_,a6,a6,a6)
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
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bq(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Mm,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eRz(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vz(B.bV(A.bz,o,A.rR,6,6))
i=B.a([a5.o9("All words",K.als,!1,new C.eRA(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.aft("Sentence "+a3,!1,new C.eRB(a5,a7,v,a2)))
a2=a3}}i.push(a5.aft("Clear picks",!1,new C.eRC(a5)))
i=B.bV(A.bz,i,A.bq,8,8)
g=a5.xL("SIZE OF THE PICKED WORDS",D.akV)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dgK[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eRD(e,k)
f.push(a5.aft(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bV(A.bz,f,A.bq,8,8),A.S,a5.o9("Make every word normal",A.ln,!1,new C.eRE(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cxo(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.B(B.a([D.bx6,B.d(A.d.hR(D.awd,new C.eRh(q)).b,p,p,p,p,p,p,D.f1x,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cp(new C.eRi(q)),l=q.xL("HIGHLIGHT BEHIND THE WORDS",A.a_L),k=q.p1?-1:q.k4
k=q.ahW(k,new C.eRj(q),D.cYf)
w=q.p1
v=w?A.c:A.b3
n=B.a([n,A.S,m,l,B.bV(A.bz,B.a([k,B.aE(p,B.p(p,D.bIU,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eWm,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eRm(q),p,p,p,p,p,p,!1,A.a8)],o),A.rR,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.J_,p,p,p)],o)
if(q.gaUn()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahu("Colour",l,0,360,new C.eRn(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahu("Shade",k,0.15,0.9,new C.eRo(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.kg("Strength",l,0.15,1,new C.eRp(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vz(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xL("LOOK",A.yj))
m=B.a([q.o9("Bold",I.akT,q.fy,new C.eRq(q)),q.o9("Italic",I.akU,q.go,new C.eRr(q))],o)
for(u=0;u<3;++u){l={}
k=D.cP5[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.u2:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bG,1,A.q,-1)
m.push(B.aE(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bq(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eRs(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bV(A.bz,m,A.rR,8,8))
n.push(q.xL("COLOUR",A.nh))
n.push(q.ahW(q.fx,new C.eRt(q),D.d84))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.J_,p,p,p))
n.push(q.xL("SIZE AND PLACE",A.G4))
m=q.fr
m=q.kg("Text size",m,0.5,1.6,new C.eRk(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vz(B.v(B.a([m,q.kg("Up / down",l,0.12,0.5,new C.eRl(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cgG(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b7.j(0.6),A.q,1.6)
u=B.a([A.b7.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bOe,A.f,p,p,D.b03,p,62,p,p,p,p,p,62),A.aB,D.fhQ,A.am,D.fms],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.th,p,v,w,p,new B.a8(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bsY,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaYG(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.B(B.a([B.bw(B.m(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.cj,A.bS,!1,p,!1,p,p),p),A.aq),A.bd,B.E(B.v(B.a([D.fhq,A.N,B.bV(A.bz,B.a([q.o9("Change",A.ku,!1,q.gaYG()),q.o9("Remove",A.e6,!1,new C.eQW(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d4A[t]
u.push(q.o9(s.b,s.a,q.at===t,new C.eQX(q,t)))}u=B.bV(A.bz,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c_q(o)
break A}if(1===r){s=q.bZp()
break A}if(2===r){s=q.bFA()
break A}if(3===r){s=q.bLS()
break A}s=q.bHH()
break A}return B.v(B.a([v,A.ac,u,A.aB,s,A.S,new B.bI(A.a3,p,p,q.o9("Reset the whole picture",A.ln,!1,new C.eQY(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c_q(d){var w=this,v=x.p
return B.v(B.a([B.bV(A.bz,B.a([w.o9("Auto enhance",E.a_o,!1,new C.eQO(w)),w.o9("Make words easy to read",A.oP,!1,new C.eQP(w))],v),A.bq,8,8),A.aB,B.cp(new C.eQQ(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bZp(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kg("Exposure",n,-1.5,1.5,new C.eQs(o),0,A.k.aa(n,1))
w=o.RG
w=o.kg("Brightness",w,-0.5,0.5,new C.eQt(o),0,""+A.k.V(w*100))
v=o.rx
v=o.kg("Contrast",v,0.4,2,new C.eQu(o),1,""+A.k.V(v*100))
u=o.xr
u=o.kg("Fade",u,0,1,new C.eQv(o),0,""+A.k.V(u*100))
t=o.aE
t=o.kg("Spotlight",t,0,1,new C.eQw(o),0,""+A.k.V(t*100))
s=o.Y
s=o.kg("Darken",s,0,0.85,new C.eQx(o),0,""+A.k.V(s*100))
r=o.b6
r=o.kg("Vignette",r,0,0.9,new C.eQy(o),0,""+A.k.V(r*100))
q=o.aF
q=o.kg("Shade behind words",q,0,0.85,new C.eQz(o),0,""+A.k.V(q*100))
p=o.aN
return o.vz(B.v(B.a([n,w,v,u,t,s,r,q,o.kg("Shade top & bottom",p,0,0.85,new C.eQA(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bFA(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kg("Colour strength",q,0,2.2,new C.ePO(s),1,""+A.k.V(q*100))
w=s.to
w=s.kg("Warmth",w,-1,1,new C.ePP(s),0,""+A.k.V(w*100))
v=s.x1
v=s.kg("Tint",v,-1,1,new C.ePQ(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vz(B.v(B.a([q,w,v,s.kg("Shift colours",u,-180,180,new C.ePR(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.o9("Negative",D.bDU,s.y1,new C.ePS(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xL("COLOUR WASH",A.Nl)
w=s.b_
q=B.a([null],x.Z)
A.d.v(q,D.auX)
t=B.a([u,v,s.ahW(w,new C.ePT(s),q),A.N],t)
if(s.b_!=null){q=s.b3
t.push(s.vz(s.ahu("Wash strength",q,0,0.9,new C.ePU(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bLS(){var w,v,u,t,s,r=this,q=r.y2
q=r.kg("Blur",q,0,24,new C.eQm(r),0,A.o.u(A.k.V(q)))
w=r.be
w=r.kg("Soft focus",w,0,1,new C.eQn(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vz(B.v(B.a([q,w,r.kg("Film grain",v,0,1,new C.eQo(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xL("LIGHT LEAK",H.akP)
q=r.bf
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.auX,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahW(q,new C.eQp(r),t),A.N],u)
if(r.bf!=null){q=r.bM
u.push(r.vz(r.ahu("Leak strength",q,0,1,new C.eQq(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bHH(){var w,v,u,t,s=this,r=s.aS
r=s.kg("Zoom",r,1,3,new C.ePY(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.kg("Left / right",w,-1,1,new C.ePZ(s),0,""+A.k.V(w*100))
v=s.bU
v=s.kg("Up / down",v,-1,1,new C.eQ_(s),0,""+A.k.V(v*100))
u=s.c8
t=x.p
return B.v(B.a([s.vz(B.v(B.a([r,w,v,s.kg("Turn",u,-180,180,new C.eQ0(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bV(A.bz,B.a([s.o9("Turn 90\xb0",N.alZ,!1,new C.eQ1(s)),s.o9("Flip sideways",A.FT,s.cU,new C.eQ2(s)),s.o9("Flip upside down",A.FT,s.cX,new C.eQ3(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c25(){var w=null,v=B.m(22),u=B.I(A.bG,A.q,1)
return B.p(w,B.v(B.a([D.eKM,A.S,D.fjg,A.aB,B.aE(w,B.p(A.A,D.eKZ,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.u2,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQR(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.th,w,u,v,w,w,A.n),w,w,w,w,A.bR,w,w,w)},
c_e(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.eQJ(p),m=x.p,l=B.B(B.a([D.bxc,p.o9("Reset",A.ln,!1,new C.eQF(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.J_,o,o,o),j=p.xL("SHAPE",A.alV),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BZ[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aYH(n.$2(t,p.cy),62,u.b,s===t,new C.eQG(v,p),62))}}i=B.bV(A.bz,i,A.bq,8,8)
v=p.xL("RING",A.r4)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BU[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aYH(n.$2(p.cx,t),62,r.b,q===t,new C.eQH(s,p),62))}u=B.bV(A.bz,u,A.bq,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vz(p.kg("Size",s,0.12,0.4,new C.eQI(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b0B(d){return new B.a7(null,d,new B.fG(0.5625,B.cp(new C.eR1(this)),null),null)},
cwF(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bG,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.u2:q
t=new B.aT(14,14)
s=D.d6D[w]
r=v?A.c:A.aA
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.aA
l.push(new B.bD(1,A.bh,B.aE(A.c4,B.dk(q,B.v(B.a([r,A.cV,new B.qh(A.ei,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bq(t,t,t,t),q,u,A.n),D.boG,q,q,q,A.hK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eRa(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.B(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bqL,A.lP,q,q,q)},
aPb(){var w,v,u=this,t=null,s=u.cwF(),r=u.as
A:{if(0===r){w=u.bJK()
break A}if(1===r){w=u.cCb()
break A}if(2===r){w=u.cxo()
break A}if(3===r){w=u.cgG()
break A}if(4===r){w=u.c_e()
break A}w=u.c25()
break A}v=x.p
return B.bw(A.rX,B.el(B.v(B.a([s,B.E(B.cz(B.a([w],v),t,D.brO,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.WE,!0),A.aq)},
aLq(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc78(),p=B.m(16)
q=B.E(B.aE(r,B.p(r,D.eL7,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b3,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbLs()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cB,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eQ4)
else t.push(D.bHZ)
t.push(A.ab)
t.push(D.byX)
return B.p(r,B.B(B.a([q,A.av,B.E(B.aE(r,B.p(r,B.B(t,A.m,r,A.bb,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.u2,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.b_c,r,r,r,r,G.ah2,r,r,r)},
aYF(){var w=null
return new B.D(T.YN,B.B(B.a([B.aH(w,w,w,w,A.my,w,w,w,new C.eQr(this),w,w,w,w,w,w),D.fys,A.b6,D.bQy],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.AJ,B.bl(!0,B.cp(new C.eRI(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
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
C.rp.prototype={
a5(){return"NgmyQuoteDeco."+this.b}}
C.m3.prototype={}
C.zn.prototype={
ag(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nH.prototype={}
C.vT.prototype={
a5(){return"NgmySlidesAiExtra."+this.b}}
C.a7F.prototype={}
C.aqF.prototype={}
C.a02.prototype={
R(){return new C.aGP(new B.as(A.as,$.aw()),B.jQ(!0,null,!0,!0,null,null,!1),D.dwT,B.a([],x.s),B.et([D.HK],x.Q))}}
C.aGP.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_M(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_M=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().BV(90,700,700,A.eG),$async$a_M)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$a_M)
case 8:p=e
if(r.c!=null)r.m(new C.eXV(r,p,q))
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
return B.b(new B.hY().aGE(78,n,1100,1100),$async$a_P)
case 7:q=e
if(J.cn(q)){w=1
break}p=B.bn(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gS(n)
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
case 9:if(r.c!=null)r.m(new C.eXW(r,p))
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
b2F(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cG.aJ(A.d.gal(d.split(","))),A.A,u,u,A.cj,A.bS,!0,u,!1,u,u)
return w}catch(v){}return D.bmW},
c_k(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cq1(C.fzc(w,this.b2F(d),f),g)},
abW(d,e,f,g,h){var w=null,v=new C.eXT(f,e),u=new C.eXU(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bG:A.b7.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BD:A.Na,A.c1,w,w,w,26),w,w,w),D.ed8],x.p),w),w)
else p=this.c_k(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.B(B.a([B.E(B.av(p,w,w,w),1),D.bHG],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mp,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eXS(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aW3(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cG.aJ(A.d.gal(h.split(","))),A.A,p,p,A.cj,A.bS,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bG:A.bl.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.eu,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.TH,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a0G,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.B(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kS,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a84(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a84=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fCD(),$async$a84)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eXB(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eXC(r,p))
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
if(f.length<6&&r.e==null){r.m(new C.eXE(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eXF(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eXG(r))
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
return B.b(C.fxV(q,r.cx,j,new C.b0w(r.z,r.Q,r.as,r.at),new C.eXH(r),i,m,p,k),$async$adN)
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
if(r.c!=null)r.m(new C.eXI(r,n))
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
u=B.av(B.aE(h,B.p(h,D.bKS,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bl.j(0.5),A.J,24)],v),D.bUt,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eY8(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0G,h,h,h,i.ax?h:new C.eY9(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbAB()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.J,10)],v)
s.push(B.hs(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vE:A.hz,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vU,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.B(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.bs(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aXE),h,h,h,h,h,h,h,h,A0.IM,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iU,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aPI,!0,A.a4,h,A.an,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eYa(i)
s=i.aW3(A.lp,q,r,i.gch6(),s)
r=i.z
r=B.E(i.abW(new C.eYc(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.v(B.a([s,A.am,B.B(B.a([r,A.bp,B.E(i.abW(new C.eYd(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eYe(i)
s=i.aW3(A.vB,r,p,i.gche(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.E(i.abW(new C.eYf(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.aB,D.fnI,A.at,D.fqx,A.by,u,A.N,D.fp_,A.aB,v,A.by,B.B(B.a([q,A.av,B.E(B.v(B.a([s,A.am,B.B(B.a([p,A.bp,B.E(i.abW(new C.eYg(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.am,D.fsf],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.bfk,A.q,1)
w=C.agy(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.B(B.a([D.bLX,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f71,h,h,h),B.aL(!1,h,!0,D.e7G,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eYh(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b8A,h,u,v,h,h,A.n),h,h,h,h,D.bqs,h,h,h),h)],t))}o.push(A.by)
o.push(D.feA)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.d_k[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aA:A.bG,1,A.q,-1)
u=u?A.u:A.O
w.push(new B.bD(1,A.bh,new B.D(A.ji,B.aE(h,B.dk(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eF,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eYi(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.B(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.fwJ)
o.push(A.N)
o.push(B.cp(new C.eYj(i)))
o.push(A.by)
o.push(D.flO)
o.push(A.N)
w=B.a([i.b5s("auto","Let AI choose",A.dW,A.PU)],t)
for(v=x.O,m=0;m<11;++m){j=D.vZ[m]
u=j.d
w.push(i.b5s(j.a,j.b,j.c,B.a([B.b0(A.d.gL(u).a),B.b0(A.d.gL(u).b)],v)))}o.push(B.bV(A.bz,w,A.bq,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bl.j(0.5):A.bG,A.q,1)
o.push(B.p(h,B.iF(h,A.bl,h,h,h,new C.eYb(i),D.bH7,D.fvZ,h,D.fgT,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aOY,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc7c()
v=B.fn(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.ePV:A.Gh
o.push(new B.a7(h,54,B.lv(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.pb,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bl(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vt,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aaC,h,h,h,h,h,h,h,h),h)},
bMY(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eXJ(this,p,d)
if(d===D.CB)return new C.aDm(p,o,q)
w=B.m(16)
v=p?E.vU:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.aA:A.bG,A.q,1)
s=B.X(p?A.eg:C.hEr(d),A.c,q,q,q,20)
r=C.hEs(d)
return B.aE(q,B.dk(q,B.v(B.a([s,A.at,B.f4(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.ei)],x.p),A.m,q,A.bb,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hY,q,64,q,A.hx,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b5s(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bG
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.dk(v,B.B(B.a([w,L.ID,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eF,v,v,v,L.aik,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXY(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a01.prototype={
R(){return new C.aGO(new B.as(A.as,$.aw()))}}
C.aGO.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
adO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adO=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eXu(r))
w=1
break}B.eU()
r.m(new C.eXv(r))
t=4
q=C.i4K(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i4u(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eXw(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fXF()
f=$.Ct.h(0,k.a)
o=f==null||J.cn(f)?null:J.fp(f)
if(o==null){r.m(new C.eXx(r))
w=1
break}n=C.i4s(o,r.a.c)
C.i4o(r.a.c.a)
$.fWW=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.h_q(j)
h=C.h_r(r.a.c)
e=C.h_s(r.a.c)
w=7
return B.b(C.bBt(k,r.a.c.a,j,h,new C.eXy(r),i,e,a0),$async$adO)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eXz(r,l))
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
u=B.B(B.a([B.p(j,D.ame,A.f,j,j,D.aZS,j,34,j,j,j,j,j,34),A.av,D.bxM],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,Ar.a7o,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.bs(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),As.aa7),j,j,j,j,j,j,j,j,A0.IM,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aPI,!0,A.a4,j,A.an,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cWG[q]
o=A.c.j(0.06)
n=k.e?j:new C.eXA(k,p)
r.push(B.mH(j,o,new B.x(p,j,Ay.Tg,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uV,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.S,B.bV(A.bz,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aOY,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gc7d()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bl.j(0.5),A.eH.j(0.5)],x.O):D.cuP
o=B.a([new B.ac(0,A.G,A.bl.j(0.35),A.cB,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e7C:D.bLw
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eE(B.B(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.i7,j,j,j)],v),A.m,j,A.bb,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bl(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vt,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aaC,j,j,j,j,j,j,j,j),j)}}
C.b0w.prototype={}
C.aDm.prototype={
R(){return new C.bjt(null,null)}}
C.bjt.prototype={
gawD(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pL,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gawD().q()
this.buv()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gawD(),new C.ed5(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bh0.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d1s[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xj.j(0.25+r*0.6).gp(0)
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
C.are.prototype={
a5(){return"NgmyTextCommand."+this.b}}
C.Zo.prototype={
R(){return new C.aAP()}}
C.aAP.prototype={
gahT(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agL(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gA6(){var w=this.e
return w===$?this.e=C.h_q(this.a.c).t(0,D.CB):w},
a7S(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7S=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dic(s))
u=3
r=A.d.hR(D.vZ,new C.did(s))
q=B.db(C.h_q(s.a.c),x.Q)
l=q
J.hF(l,D.CB)
p=l
if(s.gA6())J.ch(p,D.CB)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gA6()?" with Luxury FX":""
i=s.a
h=i.d
i=C.h_r(i.c)
g=C.h_s(s.a.c)
w=6
return B.b(C.bBt(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7S)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agL(q,s.gahT())
f=q==null?null:q.b
n=f==null?s.gahT():f
if(!J.A(n,r.a)&&!s.gA6())throw B.V("The AI did not change the look. Try again.")
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
t=o.gA6()?D.bXe:n
if(o.gA6())s=n
else s=m?A.bo:A.bK
r=B.X(A.dW,o.gA6()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gA6()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gA6()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gA6()
f=B.a([f,A.aB,B.p(n,B.B(B.a([r,A.av,q,B.aa8(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dij(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.ah5,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f7k,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fg,n,n,A.ah)
u=o.f?n:o.gbzA()
t=B.bm(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bl(!0,B.p(n,B.v(B.a([new B.D(D.btr,e,n),new B.dq(1,A.cn,f,n),new B.D(A.Ff,new B.a7(1/0,50,B.bG(B.eE(B.av(o.f?A.rI:D.foa,n,n,n),n,new B.o(n,n,n,s,n,D.bVN,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tB,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.brV.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.la,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lA,w,w,B.d(v.b,w,w,w,w,w,w,D.f7i,w,w,w),w)],x.p)
if(q)v.push(D.aVK)
return B.aE(w,B.dk(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eF,w,w,w,A.cp,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.ed2.prototype={
aEd(d,e,f){return e+"@"+A.a.aT(A.o.fT(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wt(d,e){return this.aEd(0,e,null)}}
C.aLn.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.b0s.prototype={
B(d){var w,v,u=null,t=C.fZg(this.c)
if(t==null)w=D.blu
else{w=B.aI(d,u,x.w).w.cHe(D.bpZ,D.eP8)
v=this.d
w=B.ta(B.e1(B.anz(!1,t,!1,v,!1,390),!v,u),w)}return B.f4(A.A,new B.a7(416,870,new C.bl6(w,u),u),A.f,A.du)}}
C.bl6.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dcT[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.aoa,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.de4[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bq(u,u,u,u),t,D.aoa,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c0(t,new B.o(t,t,t,B.m(64),D.cMG,D.bUb,A.n),A.be),0,0,0))
s.push(B.bZ(3,B.c0(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.be),3,3,3))
s.push(B.bZ(13,B.bw(B.m(51),B.el(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aVW,B.p(t,t,A.f,t,t,D.b_a,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.m(51),D.bn1,A.aq),!0,t),13,13,13))
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
t=C.rq(i,l,0,0,B.a([f,w,C.ep(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bn,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fs,t.l(),3,"",0,0,"",D.cm,D.f0,0.3,0.35,0.72)],s),C.cD(),D.mD,"","","Welcome",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,34,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Agenda",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
w=C.cD()
w=C.rq(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.bf,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uh,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mD,"","","Agenda",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,32,A.bn,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Main Idea",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
f=C.cD()
f=C.rq(i,l,0,0,B.a([u,C.ep(A.bg,!0,v.l(),A.aD,"",k,21,A.bn,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.bf,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cm,D.cQ,0.8,0.1,0.26)],s),C.cD(),D.mD,"","","Key Point 1",D.dd)
u=C.cD()
u=C.ep(A.bg,!1,e.l(),A.aD,"",k,30,A.bn,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bf,j,2,"Compare & Contrast",0,0,"",D.cm,D.cQ,0.84,0.08,0.08)
r=C.cD()
r=C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.bf,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.08,0.24)
q=C.cD()
q=C.rq(i,l,0,0,B.a([u,r,C.ep(A.bg,!0,v.l(),A.aD,"",k,18,A.bn,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.bf,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cm,D.cQ,0.4,0.52,0.24)],s),C.cD(),D.mD,"","","Key Point 2",D.dd)
r=C.cD()
r=C.ep(A.L,!1,e.l(),A.aD,"",k,48,A.bn,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bf,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cD()
p=C.Bw(l,l,l,l,D.Cx,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rq(i,l,0,0,B.a([r,C.ep(A.L,!1,v.l(),A.aD,"",k,22,A.bn,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.bf,j,2,"Questions?",0,0,"",D.cm,D.cQ,0.7,0.15,0.58)],s),C.cD(),D.mD,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Et.prototype={
bA(d){return this.e.$1(d)}}
C.eu.prototype={}
C.iZ.prototype={}
C.Ek.prototype={
gaJZ(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agy(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a36(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ek(v,u,t,d==null?w.d:d)},
Fs(d){return this.a36(null,d,null,null)},
aCZ(d){return this.a36(null,null,null,d)},
cHc(d,e){return this.a36(d,e,null,null)},
baz(d){return this.a36(d,null,null,null)},
baG(d){return this.a36(null,null,d,null)}}
C.Nd.prototype={
R(){return new C.biQ(new B.eS(0,$.aw()),null,null)}}
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
this.btY()},
B(d){var w=C.agy(this.a.c.a)
if(w==null)w=A.d.gL(D.GC)
return B.cp(new C.dTB(this,w,C.hem(this.a.c.d)))}}
C.bqu.prototype={
B(d){return B.nM(A.V1,this.e,new C.eWI(this,A.k.E(this.d*0.35,1.6)-0.3))}}
C.bdU.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aRO(d,e,v)
break
case"confetti":w.bG5(d,e,v)
break
case"crown":w.bHI(d,e,v)
break
case"aurora":w.bAF(d,e,v)
break
case"champagne":w.bDV(d,e,v)
break
case"diamonds":w.bJT(d,e,v)
break
case"starburst":w.cuo(d,e,v)
break
case"balloons":w.bAT(d,e,v)
break
case"galaxy":w.bOK(d,e,v)
break
case"redcarpet":w.clo(d,e,v)
break
case"coins":w.bFs(d,e,v)
break
case"lanterns":w.bYV(d,e,v)
break
case"hearts":w.bWx(d,e,v)
break
case"petals":w.cgy(d,e,v)
break
case"butterflies":w.bCW(d,e,v)
break
case"neon":w.c1Q(d,e,v)
break
case"disco":w.bK3(d,e,v)
break
case"sunrise":w.cvW(d,e,v)
break
case"pearls":w.cfC(d,e,v)
break
case"snow":w.cu3(d,e,v)
break
case"laurel":w.bZ0(d,e,v)
break
case"ribbons":w.cnX(d,e,v)
break
case"kente":w.bYJ(d,e,v)
break
case"trophy":w.czA(d,e,v)
break
case"shooting":w.crS(d,e,v)
break
case"bokeh":w.bBd(d,e,v)
break
case"orbits":w.cdg(d,e,v)
break
case"flowers":w.bO0(d,e,v)
break
case"music":w.c1y(d,e,v)
break
case"mandala":w.c0_(d,e,v)
break
case"sparklers":w.cuc(d,e,v)
break
case"city":w.bEK(d,e,v)
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
aRO(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lI(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.aF],w),B.a([A.is,A.bA],w),B.a([A.ev,A.aR],w),B.a([A.c,A.aw],w)]
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
a1.saq(new B.a8(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.rs(new B.u(g,c1),a0)))
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
bG5(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.E(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.N()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d7J,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
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
bHI(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
o.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.bap],v),a4,a4).av(0,B.bU(w,u)))
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
n.saq(new B.a8(A.b_,A.b5,A.x,D.d6y,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aP(i,n)
for(v=[D.emw,D.egi,D.evD],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.hV.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.x1(i),u=B.a([],x.X),o=new B.vv(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jW(y.M));--f
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
bAF(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lI(a8,a9,b0,60,A.c,50)
w=[D.eGt,D.eGb,D.eG5,D.eHr]
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
n.r=A.vc.j(0.4+0.5*C.cW(a4,5)).gp(0)
n.a=A.nB
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bDV(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.N()
a0.saq(new B.bT(A.A,0.5,A.x,l,0,B.a([A.hG.j(0.25+0.1*h),D.WO],x.O),l,l).av(0,B.bU(new B.u(g,f),e)))
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
bJT(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
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
g.saq(new B.a8(A.ax,A.aC,A.x,D.d2s,a5,a5).av(0,B.cl(A.J,k*1.2,o)))
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
cuo(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
i=f*(0.1+0.55*D.bmp.aw(0,k)*(0.5+0.5*C.cW(t,v)))
this.rt(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cW(t,3)),D.Pm[A.o.D(A.k.bv(C.cW(t,4)*5),0,4)],u)}},
bAT(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cW(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.E(q*(0.05+0.05*C.cW(o,2))+C.cW(o,3)*m,m)
j=C.cW(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.avl[A.o.E(o,6)]
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
l.saq(new B.bT(D.aVZ,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.avc,a3).av(0,a2))
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
r.r=D.avl[A.o.E(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c_(s),a1)
a1.delete()
u.restore()}},
bOK(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lI(b1,b2,b3,50,A.c,70)
for(w=[D.eGB,D.eGh,D.eGn],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
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
a9.saq(new B.bT(A.A,0.5,A.x,a4,0,B.a([A.Au.j(0.55),D.aeI],u),a4,a4).av(0,B.bU(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.E(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bv(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cW(a2,9)),a6*0.1*C.cW(a2,8))
a5=B.lh(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lh(a3,a5,0.6)
a6.toString
a8=B.N()
a8.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.rs(a3,a5)))
a8.c=a7*0.005
a8.d=A.bP
b1.bC(a6,a5,a8)}},
clo(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o.saq(new B.bT(A.A,0.5,A.x,b5,0,B.a([A.Au.j(0.28),D.aeI],w),b5,b5).av(0,B.bU(new B.u(q,u),t)))
o.a=A.nB
l=o.H()
q=m.gbK().a.snapshot()
v.drawPath((m.e=new B.cE(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.ep:A.eP)
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
b1.r=A.hG.gp(0)
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
v.saq(D.bVH.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aP(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.E(b7*(0.05+0.07*C.cW(r,1))+C.cW(r,2)*b3,b3)
u=C.cW(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rt(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cW(r,4)),A.bL,0.3+0.7*((q+1)/2))}},
bFs(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
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
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.dhg:D.cAv,null,null).av(0,l))
k=q.H()
v.drawOval(B.c_(l),k)
k.delete()
q=-(s*0.22)
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.bjm.gp(0)
k=j.H()
v.drawOval(B.c_(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rt(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lI(d,e,f,30,A.bL,110)},
bYV(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lI(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cW(p,1))
n=a1+o*4
m=a1+o*2-A.k.E(t*(0.03+0.04*C.cW(p,2))+C.cW(p,3)*n,n)
l=C.cW(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bT(A.A,0.5,A.x,d,0,B.a([W.X_.j(0.45*k),D.adx],u),d,d).av(0,B.bU(new B.u(l,m),j)))
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
i=B.aq(D.baA,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b_,A.b5,A.x,B.a([D.beX,i],u),d,d).av(0,B.cl(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbK().a.snapshot()
v.drawPath((f.e=new B.cE(j)).a,g)
g.delete()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bWx(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
l.push(new B.pz(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pz(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cUD[A.o.E(p,5)]
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bT(A.rU,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a1P,d).av(0,B.bU(A.J,o*1.4)))
e=m.H()
m=i.gbK().a.snapshot()
v.drawPath((i.e=new B.cE(m)).a,e)
e.delete()
v.restore()}this.lI(a3,a4,a5,30,A.is,130)},
cgy(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
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
m=(q&1)===0?D.cuO:D.d3I
n.saq(new B.a8(A.a3,A.a7,A.x,m,i,i).av(0,B.bU(A.J,p)))
j=n.H()
n=k.gbK().a.snapshot()
v.drawPath((k.e=new B.cE(n)).a,j)
j.delete()
v.restore()}this.lI(d,e,a0,25,A.bL,140)},
bCW(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
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
a3.push(new B.pz(f,e,l,d,h,0))
a3.push(new B.pz(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a7,A.x,i?D.d3r:D.d62,a6,a6).av(0,new B.a9(0,m,k,j)))
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
p.r=D.biF.gp(0)
p.c=q*0.1
p.d=A.bP
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c1Q(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.E(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.awn[t].j((1-s)*0.9).gp(0)
q.z=new B.hw(A.G,v)
p=r*0.3
p=B.bx(B.cl(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cW(m,1)*4)+m)))
k=D.awn[A.o.E(m,4)]
j=m*n+h
i=g-l
i=B.bx(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hw(A.a9W,p)
o=j.H()
u.drawRRect(B.er(i),o)
o.delete()}},
bK3(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
cvW(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.aw(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
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
a0.saq(new B.bT(A.A,0.5,A.x,h,0,B.a([D.b6C.j(0.6),D.adx],x.O),h,h).av(0,B.bU(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.N()
d.saq(D.edZ.av(0,B.bU(a1,a0)))
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
o.delete()}this.lI(a2,a3,a4,20,A.hV,180)},
cfC(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
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
r.r=B.aq(A.cy,A.j6,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cE(p.gbK().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cW(i,1))
g=d-A.k.E(u*(0.04+0.05*C.cW(i,2))+C.cW(i,3)*j,j)
n=C.cW(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bT(An.pk,0.5,A.x,f,0,D.d9k,f,f).av(0,B.bU(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lI(a1,a2,a3,25,A.c,190)},
cu3(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
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
bZ0(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
f.saq(D.bVt.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c_(g),e)
e.delete()
s.restore()}}$.W()
a0=B.N()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.baP.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.rt(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lI(a3,a4,a5,40,A.bL,210)},
cnX(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hG,A.hV],a6),B.a([A.oz,A.is],a6),B.a([A.aE,A.eA],a6)]
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
l.saq(new B.a8(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.aw1,new B.ml(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cE(j.gbK().a.snapshot()):l).a,a2)
a2.delete()}this.lI(a8,a9,b0,40,A.c,220)},
bYJ(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
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
a2.r=D.a1S[a3].gp(0)
a4=a2.H()
s.drawRect(B.c_(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1S[A.o.E(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c_(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.E(n*(0.04+0.05*C.cW(a0,1))+C.cW(a0,2)*a6,a6)
v=C.cW(a0,3)
t=C.cW(a0,4)
this.rt(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1S[A.o.E(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
czA(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
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
a1.saq(new B.a8(A.a3,A.a7,A.x,D.dbF,A.avs,null).av(0,new B.a9(v,a2,r,j)))
a4.aP(l,a1)
a0=A.k.E(a6*0.6,1.4)
if(a0<1)this.rt(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bG6(a4,a5,a6,60)},
bG6(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
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
crS(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
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
g.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bL],s),null,null).av(0,B.rs(new B.u(l,h),i)))
g.c=r
g.d=A.bP
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rt(a0,i,p,A.c,1-m)}},
bBd(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cW(r,1))
p=A.k.E(C.cW(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.E(C.cW(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.E(r,5)
m.r=D.axT[l].j(n).gp(0)
m.a=A.nB
m.z=new B.hw(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.axT[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
cdg(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
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
k.r=A.hV.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hG.j(0.4).gp(0)
k.z=new B.hw(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lI(d,e,f,45,A.bL,270)},
bO0(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
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
g=D.d0F[A.o.E(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cl(new B.u(0,l),i,j)
$.W()
a0=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b_,A.b5,A.x,B.a([A.c,g],u),null,null).av(0,B.cl(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c_(d),a1)
a1.delete()}$.W()
l=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hG.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lI(a5,a6,a7,30,A.hV,280)},
c1y(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.E(t+n/4,1)
l=B.bU(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.auy[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c_(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.E(v*(0.06+0.06*C.cW(g,1))+C.cW(g,2)*h,h)
e=C.cW(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cW(g,4))
a0=D.auy[A.o.E(g,4)]
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
c0_(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d.r=A.hV.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.N()
a5.saq(new B.bT(A.A,0.5,A.x,a3,0,B.a([A.hG.j(0.25),D.WO],x.O),a3,a3).av(0,B.bU(w,a4)))
a7.ae(w,a4,a5)
this.lI(a7,a8,a9,30,A.bL,300)},
cuc(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
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
l.saq(new B.bT(A.A,0.5,A.x,null,0,B.a([A.hV,A.hG.j(0.6),D.WO],o),null,null).av(0,B.bU(new B.u(j,i),p)))
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
a6.r=B.aq(A.hV,A.aF,d).j(1-d).gp(0)
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
bEK(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aRO(a9,new B.ar(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cW(n,1))
l=a8*(0.14+0.24*C.cW(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.at(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bWp.av(0,j))
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
B(d){var w,v=null,u=new C.c7Z(),t=new C.c80(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.anj,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c8_(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.GC[w]))
return B.bV(A.bz,s,A.bq,12,10)}}
C.YX.prototype={
R(){return new C.azc()}}
C.azc.prototype={
gvA(){var w=this.d
return w===$?this.d=this.a.c:w},
gaYK(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.as(new B.bb(w.b,A.b4,A.aN),$.aw())}return v},
gawE(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJZ()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.as(new B.bb(w,A.b4,A.aN),v)}return t},
q(){var w=this.gaYK(0),v=$.aw()
w.U$=v
w.P$=0
w=this.gawE()
w.U$=v
w.P$=0
this.a2()},
ZC(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$ZC=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hY().BV(90,700,700,A.eG),$async$ZC)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fj(),$async$ZC)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahu(o,".png")?"image/png":"image/jpeg"
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
aYJ(d){var w=null,v=A.c.j(0.07)
return B.bs(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aPN,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agy(p.gvA().a)
if(n==null)n=A.d.gL(D.GC)
w=p.gvA()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.Nd(p.gvA(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.Hx(A.my,new C.d7u(d),B.nx(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hx(D.bG2,new C.d7v(p),B.nx(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aPH,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaYK(0),o,o,o,o,o,2,p.aYJ("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7w(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.hs,!0,A.a4,o,A.an,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hG.j(0.6),A.q,1)
if(p.gvA().d.length===0)q=D.bJn
else{q=C.hem(p.gvA().d)
if(q==null)q=new Uint8Array(0)
q=B.hU(B.fL(q,A.A,o,o,A.cj,A.bS,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc7e(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvA().d.length!==0)r.push(B.aH(o,o,o,o,D.a0G,o,o,o,new C.d7x(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bl(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.B(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawE(),o,o,o,o,o,2,p.aYJ("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7y(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dn,!0,A.a4,o,A.an,o,o,o,o),A.ac,B.df(D.bIg,D.fxF,new C.d7z(p,d),B.bm(A.aw,o,o,o,A.w,o,A.cl,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.b_l,o,o,o,o,A.Fc,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKR.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.Zh.prototype={
R(){return new C.bfn(new B.as(A.as,$.aw()))}}
C.bfn.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aS:A.ak,k=B.aI(d,A.bV,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bG:A.aL,A.q,1),g=x.p,f=B.B(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cD,l,o,o,o,o),o,o,o,new C.deb(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cM6[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gS(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bK
u.push(B.aL(!1,new B.bq(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uG,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bq(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dec(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.D(A.hK,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.C5(A.bz,6,6,A.bq,u,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bo:A.aP
e.push(B.B(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.bs(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.an,o,o,o,o),1),A.ab,B.bG(A.aQF,new C.ded(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bl(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cn,B.cz(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tB,A.Yu,o,o,o),!0,!1,A.af,!0,!0)}}
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
a4(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bx(new B.a9(0,0,0+a7.a,0+a7.b),A.kA),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.N()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lt
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ap,a0,a0,B.a([],a5))
a4.F(new B.iW(a1))
v=new B.Sg(new B.vv(B.x1(a4),!1,B.a([],x.X))).gL(0)
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
t=a0.galX()*1.4
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
w.saq(new B.bT(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cTp,null).av(0,u))
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
C.aqE.prototype={
a5(){return"NgmySlideAspectRatio."+this.b}}
C.uB.prototype={
a5(){return"NgmySlideShapeKind."+this.b}}
C.mu.prototype={
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
u.n(0,"decoration",C.hSv(v.z))
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
hC(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,eK>")
n=B.C(new B.K(n,new C.cdp(),m),m.k("ak.E"))
return C.rq(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,a4<n,@>>")
n=B.C(new B.K(n,new C.cdq(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.i0.prototype={
gb8U(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRV(){if(!C.kv(this.w))return!1
var w=this.gb8U()
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
q=B.U(r).k("K<1,lF>")
r=B.C(new B.K(r,new C.cde(),q),q.k("ak.E"))
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
v=B.U(w).k("K<1,a4<n,@>>")
w=B.C(new B.K(w,new C.cdf(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jG.prototype={}
C.b0v.prototype={
B(d){return B.cp(new C.cdk(this))}}
C.anP.prototype={
R(){return new C.biA(null,null)}}
C.biA.prototype={
gaYL(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fU,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaYL().q()
this.btI()},
B(d){return B.c6(this.gaYL(),new C.dFR(),this.a.c)}}
C.aKC.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.ad0.prototype={
Pw(d,e,f,g){return this.bNH(d,e,f,g)},
bNH(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
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
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dl,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dm,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d7)
n.push(B.B(B.a([B.E(new C.adi(A.hA,"Download",A.bY,new C.epv(w,d),!0,v),1),A.av,B.E(new C.adi(A.vG,"Share",A.bj,new C.epw(w,d),!1,v),1),A.av,B.E(new C.adi(A.hn,"Safari",A.aZ,new C.epx(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aB)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.epy(d),v,v))
return B.bl(!0,new B.D(A.pO,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iP,v,t,u,s,v,A.n),v,v,v,v,A.Fj,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.adi.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eE(B.v(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bvN,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b0t.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apP(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c7f().ak7(1.35)
s=B.av6(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bza(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bj,h,h,h,h,2,D.bRl,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.wj,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zt,A.an,h,A.T6,h,h)
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
w=n?t.cH_(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eD:A.D7
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.SY:s
$.W()
j=B.N()
j.b=A.ae
j.c=3*w
j.e=A.fB
j.r=A.az.gp(0)
j=i.co_(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cnY(k,t,l?A.SY:s)],x.p),h)}else w=i.cnZ(p,t,g.k2?A.SY:s,m)
v=new B.nd(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c4,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.D(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bXd()
case 3:return i.cfB()
case 2:return B.b3(h,h,h,new C.b0q(g,h),A.f1)
case 5:g=g.r
return new C.b0s(g,!i.e&&i.z==null,h)}},
c7f(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jX
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cR(D.adv,new B.u(0,4*v),8*v)],x.r)
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
w=W.Kv
break
case"ice":v=o.d
e=B.a([new B.cR(A.aR,A.J,10*v),new B.cR(A.cy,A.J,22*v)],x.r)
k=A.O
w=A.ev
break
case"chalk":h=o.d
e=B.a([new B.cR(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jX
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cVn[q]
u.push(new B.cR(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cR(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.N()
v=o.d
f.saq(D.bTT.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cR(A.Kj,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.N()
v=o.d
f.saq(D.bUd.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
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
k=A.jX
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ayB(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eMB.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cdi(h)
v=r.k2?C.i43(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eD:A.D7
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Xt(B.de(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
co_(d,e,f,g){return this.ayB(d,e,f,!1,g)},
cnY(d,e,f){return this.ayB(d,e,f,!1,null)},
cnZ(d,e,f,g){return this.ayB(d,e,f,g,null)},
bza(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bXd(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bI
return B.av(B.X(s.b===D.l1?A.Gc:A.Bp,A.aA,t,t,t,32),t,t,t)}w=u.bC9(r)
if(s.b===D.l1){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cr,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aN7(r,!0)
return C.fzc(s.go,v,s.id)}return w},
aN7(d,e){var w,v,u,t
try{w=C.i4m(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cp(new C.cdh(this,w,v,e))
return u}catch(t){return D.abh}},
bC9(d){return this.aN7(d,!1)},
cfB(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b4A
return C.i4E(v,w.db,w.dx)}}
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
case 1:d.hP(s,g)
d.hP(s,w)
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
C.aId.prototype={
R(){return new C.btN(null,null)}}
C.btN.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.ie,null,1,null,v)
w.cH(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bw0()},
aNi(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c0(B.av(B.d(d,w,w,w,w,w,w,A.dm,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a7,A.x,v,w,w),A.n),A.be)},
bzo(){var w,v=this,u=null,t=v.aNi("Slide A",A.bj),s=v.aNi("Slide B",A.aZ)
if(v.a.c===D.cm)return new B.an(A.W,u,A.b0,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f4d(v,s,t),u)},
B(d){return this.bzo()}}
C.aIQ.prototype={
j4(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.UF.prototype={
R(){return new C.biN(null,null)}}
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
this.btX()},
B(d){var w,v=this.a
if(v.c.dy===D.cm||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dRN(this),v.d)}}
C.Iw.prototype={
B(d){return B.cp(new C.cda(this))}}
C.ayX.prototype={
R(){return new C.bdg()}}
C.bdg.prototype={
a_(){this.a1()
if(this.a.c!==D.cm)B.bN(A.LH,new C.d4l(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cm)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.UF(C.ep(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bn,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bf,o,2,"",0,0,"",u,D.f0,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.cg,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.ep(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bn,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bf,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.UF(t,B.p(p,D.fjr,A.f,p,p,new B.o(s,p,B.I(A.b3,A.q,1),r,p,p,A.n),p,p,p,p,A.jh,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c0(n,D.b_U,A.be)}}
C.a7n.prototype={
R(){return new C.bjr(null,null)}}
C.bjr.prototype={
gaZh(){var w=this.a
if(w.e)w=D.eMI.t(0,w.c)||D.aMW.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZh()){w=C.i2J(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.but()},
B(d){var w,v=this,u=v.d
if(!v.gaZh()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.ecM(v,u,A.o.E(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZp.prototype={
B(d){var w=null
return B.av(C.b0u(!0,w,!1,C.ep(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bn,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.bf,4280172719,2,"Aa",0,0,this.c,D.cm,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.beq.prototype={
j4(d){return C.a21(this.b,new B.a9(0,0,0+d.a,0+d.b).cB(-this.c))},
jL(d){return d.b!==this.b||d.c!==this.c}}
C.bpn.prototype={
a4(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cB(-this.d),g=this.b,f=C.a21(g,h),e=a1.gdO(),d=new C.eUl()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aOr.av(0,h))
a0.aP(f,w)
g=C.a21(g,h.cB(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bj8.gp(0)
a0.aP(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eWj.av(0,h))
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
g.saq(D.eWh.av(0,h))
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
g.r=A.oA.gp(0)
a0.aP(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eWc.av(0,h))
a0.aP(f,w)
w=C.a21(g,h.cB(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b83.gp(0)
a0.aP(w,v)
g=C.a21(g,h.cB(e*0.03))
v=d.$1(e*0.004)
v.r=D.baD.gp(0)
a0.aP(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aOr.av(0,h))
a0.aP(f,g)
for(g=B.x1(f),w=B.a([],x.X),g=new B.vv(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jW(y.M));--q
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
l=D.cSJ[A.o.E(n,4)]
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
g.saq(D.eWl.av(0,h))
g.z=new B.hw(A.G,e*0.03)
a0.aP(f,g)
g=d.$1(e*0.018)
g.saq(D.eWi.av(0,h))
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
a4(d,e){d.FH(C.a21(this.b,new B.a9(0,0,0+e.a,0+e.b).cB(-this.c)),A.w,e.gdO()*0.05,!1)},
au(d){return d.b!==this.b||d.c!==this.c}}
C.aKQ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.aLl.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.aMI.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.a7G.prototype={}
C.NF.prototype={
R(){var w=x.gz,v=x.N,u=x.bO
return new C.aDN(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
ge_(){return this.c},
gTe(){return this.r},
gTf(){return this.w},
gLk(){return this.x}}
C.aDN.prototype={
a_(){var w,v=this
v.a1()
$.aW.c2$.push(v)
C.fE8()
$.hlZ=new C.evJ(v)
w=B.bj(null,A.AP,null,1,null,v)
w.fd(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.Ia()},
bt(d){var w,v,u=this
u.bD(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.O8(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.Ia()}},
iY(d){if(d===A.zV||d===A.rW||d===A.rV||d===A.pl)this.tt()},
q(){var w,v,u,t=this
$.aW.hF(t)
w=t.at
if(w!=null)w.a7(0)
t.tt()
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
v.P$=0}t.buH()},
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
w.I(x.q).f.T(D.eUB)},
qf(){if(!this.kd())return!1
this.aia()
return!0},
aqg(d){var w,v,u,t,s,r=this
if(r.abr(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hl5(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zL(){return this.aqg(null)},
Ia(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$Ia=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqG(k),$async$Ia)
case 3:j=e
w=4
return B.b(C.aph(k),$async$Ia)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fTt(j,t.c_5())
w=t.gaaX()?5:7
break
case 5:r=t.gOs()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZD(r),$async$Ia)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bo(s,new C.es6())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bo(s,new C.es7())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.ys(m==null?"":m)!=null)continue
C.fEk(n,s)
p=!0}t.m(new C.es8(t,s))
if(p||s.length>J.ad(j))t.tt()
case 1:return B.h(u,v)}})
return B.i($async$Ia,v)},
c_5(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.kv(w)&&w!==q}if(w)p.push(r)
return p},
cmn(d){var w,v=this,u=d.w
if(!C.kv(u)||u==="hati_kiapo_uongozi")return
v.a9M(d)
w=A.d.bd(v.d,new C.etH(d))
u=v.d
if(w>=0){u[w]=d.hC()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hC())
v.db=!1},
cgx(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.kv(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cmn(t)
s=u.d
w=B.U(s)
v=w.k("cQ<1,i0>")
s=B.C(new B.cQ(new B.a1(s,new C.etv(),w.k("a1<1>")),new C.etw(),v),v.k("J.E"))
return s},
O8(d){return this.bO4(d)},
tt(){return this.O8(null)},
bO4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$O8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cgx()
w=3
return B.b(C.VD(d==null?t.a.c:d,s),$async$O8)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aqg(r)?4:5
break
case 4:w=6
return B.b(C.a6U(r),$async$O8)
case 6:q=r.x
p=A.a.i(q==null?t.gOs():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bd(t.d,new C.eru())
q=t.d
if(o>=0)q[o]=r.hC()
else A.d.ck(q,0,r.hC())
case 5:case 1:return B.h(u,v)}})
return B.i($async$O8,v)},
pi(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.kv(u.w))===!0?A.hY:A.lM
v.at=B.cM(w,new C.euP(v))},
aYM(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeO(u.hC(),v.f,v.r))
if(w.length>40)A.d.cC(w,0)
A.d.a9(v.ay)},
czO(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeO(w.e.hC(),w.f,w.r))
w.m(new C.evF(w,v.pop()))
w.pi()},
clt(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeO(w.e.hC(),w.f,w.r))
w.m(new C.etF(w,v.pop()))
w.pi()},
oe(){var w,v,u=this
if(u.e==null)return
w=A.d.bd(u.d,new C.evs(u))
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
t=B.db(new B.cQ(new B.a1(w,new C.evt(),v.k("a1<1>")),new C.evu(),u),u.k("J.E"))
w=this.ch
v=B.a3(w).k("cu<1>")
v=B.C(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.h5()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.evv(n))
s.cg(0,p,new C.evw())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hw(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b4(u.d,new C.eqT(u))){v=u.e
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
if(u){C.i2N(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.i2O(t,w.d+w.f*0.5)}}s.Hw()
s.oe()
s.pi()
if(u&&s.c!=null)s.m(new C.evG())},
cAS(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hw()
w.oe()
w.pi()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqk(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i0P(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bXs(v)
t=q.bXr(v)
s=B.b0(v.e)
r=v.f
return new C.jG(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hED(o)},
bXs(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bXr(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
aes(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaX()){w.c.I(x.q).f.T(D.eTd)
return}w.a9M(d)
w.aZY(C.bBu(d))
return}if(C.ce3(v)){w.a9M(d)
w.aZY(d)
return}w.m(new C.esO(w,d))},
aqQ(){var w,v,u,t,s,r,q=this
q.a1G(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.kv(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eqR(q))
if(r&&q.c!=null){u.toString
q.Js(u,s)}return}q.tt()
q.m(new C.eqS(q))},
aZX(d){this.a9M(d)
this.a_c(d,!0)},
a9M(d){if(!C.kv(d.w))return
C.fEk(d,this.d)},
a_c(d,e){return this.ccs(d,e)},
aZY(d){return this.a_c(d,!1)},
ccs(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_c=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBu(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOs():r)
t.dy.W(0,q.toLowerCase())
C.api(t.a.c,q)}r=s}else r=d
w=C.ce3(r.w)?3:4
break
case 3:w=5
return B.b(t.a9N(r),$async$a_c)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b4(t.d,new C.eta(l))
o=l.a.hC()
n=C.kv(o.w)&&C.i3Z(o)
t.m(new C.etb(t,o,p))
if(n){m=A.d.bd(t.d,new C.etc(o))
if(m>=0){t.d[m]=o.hC()
t.tt()}}if(!t.abr(l.a))t.Yk()
r=!1
if(t.c!=null)if(!t.abr(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aqg(r)&&C.fAn(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.T(D.eTN)
case 1:return B.h(u,v)}})
return B.i($async$a_c,v)},
a9N(d){return this.bMg(d)},
bMg(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9N=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lf(r.c,A.zb),$async$a9N)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kU(!1,r,s.c,s.d,null,A.zb,null)
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
return B.b(B.ca(null,null,!1,null,new C.esN(),s,null,!0,!0,x.H),$async$ae9)
case 3:if(t.c==null){w=1
break}t.aqQ()
case 1:return B.h(u,v)}})
return B.i($async$ae9,v)},
ae8(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.esK(),s,null,!0,!0,x.H),$async$ae8)
case 3:if(t.c==null){w=1
break}t.m(new C.esL())
t.aqQ()
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
break}s.I(x.q).f.T(D.eRR)
case 1:return B.h(u,v)}})
return B.i($async$Yk,v)},
Js(d,e){return this.cmP(d,e)},
cmP(d,e){var w=0,v=B.j(x.H),u,t=this,s
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
return B.b(C.ag8(s,t.gEg(),t.gEf(),!0,e,t.d),$async$Js)
case 9:w=4
break
case 6:w=10
return B.b(C.ag9(s,t.gEg(),t.gEf(),!0,e,t.d),$async$Js)
case 10:w=4
break
case 7:w=11
return B.b(C.aga(s,t.gEg(),t.gEf(),!0,e,t.d),$async$Js)
case 11:w=4
break
case 8:w=12
return B.b(C.agb(s,t.gEg(),t.gEf(),!0,e,t.d),$async$Js)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Js,v)},
bYZ(){var w,v,u,t,s=this
if(!s.gaaX()){s.c.I(x.q).f.T(D.eS3)
return}w=s.gOs()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ag7(u,t,v,new C.es2(s),new C.es3(s),w)},
aet(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aet=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bQ(A.dH,null,new C.esU(u),s,!0,!0,!1,A.lv,!1,!1,x.N),$async$aet)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.agb(s,u.gEg(),u.gEf(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ag8(s,u.gEg(),u.gEf(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ag9(s,u.gEg(),u.gEf(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.aga(s,u.gEg(),u.gEf(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bYZ()
return B.h(null,v)}})
return B.i($async$aet,v)},
cbz(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aYM()
w=C.cD()
v=C.Bw(t,t,t,t,D.Cx,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.esV(u,v))},
a9d(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a9d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qf()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i8t(s),$async$a9d)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d7(q.r,new C.eqV())
t.d3(new C.eqW(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.T(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9d,v)},
agr(d,e,f,g){var w=null,v=g?A.dr:A.bK,u=B.I(g?A.b3:A.cr,A.q,1)
return B.hs(B.aE(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
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
p=B.C(new B.a1(r,new C.et5(),q),q.k("J.E"))}o=s!=null&&s.b===D.lu?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.T(D.eTY)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bQ(A.K,null,new C.et6(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_b)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_b,v)},
aeK(){return this.ccr()},
ccr(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aeK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qf()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i8f(s,t.f+1,o),$async$aeK)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kD(s,B.U(s).c)
p.a=A.d.bd(o.r,new C.et8(q))
t.d3(new C.et9(p,t,o,q,r))
t.c.I(x.q).f.T(D.eUm)
case 1:return B.h(u,v)}})
return B.i($async$aeK,v)},
aeR(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qf()||!t.zL()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a1<1>")
p=B.C(new B.a1(r,new C.etq(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.T(D.eRC)
w=1
break}o=new B.K(p,new C.etr(),B.U(p).k("K<1,M>")).fb(0,new C.ets())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.as(new B.bb(l,A.b4,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bQ(A.K,null,new C.ett(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeR)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.U$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.etu())
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
return B.b(C.hn4(s,new C.Ek(r,q,p,o==null?"":o)),$async$aew)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d3(new C.esW(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agy(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aew,v)},
a9G(){return this.bLD()},
bLD(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9G=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qf()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i8s(s,t.f+1,l),$async$a9G)
case 3:r=e
q=$.fWW
$.fWW=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d3(new C.erb())
t.c.I(x.q).f.T(D.eRt)
w=1
break}if(!q){s=r.CW
s=C.hlX(l,s==null?"":s,!1)}else s=!1
if(s){t.d3(new C.erc(t,l,r))
t.c.I(x.q).f.T(D.eUQ)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kD(s,B.U(s).c)
s=l.r
m.a=A.d.bd(s,new C.erd(p))
o=s.length
t.d3(new C.ere(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9G,v)},
aPn(d,e){if(e){this.afj()
return}this.cbz(d,!1)},
bHi(){return this.aPn(null,!1)},
afj(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afj=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bQ(A.bX,null,new C.etA(t),r,!0,!0,!0,A.p5,!1,!1,x.N),$async$afj)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.etB(t,C.i0O(s).pw()))
case 1:return B.h(u,v)}})
return B.i($async$afj,v)},
d3(d){var w=this
if(w.qf())return
w.Hw()
w.aYM()
w.m(d)
w.JS()
w.oe()
w.pi()},
a7H(){this.d3(new C.epQ(this,D.mD))},
aQQ(){var w=this.gdr()
if(w==null)return
this.d3(new C.er9(this,w))},
aPZ(){var w=this.e
if(w==null||w.r.length<=1)return
this.d3(new C.er7(this))},
b1Y(d,e){if(this.e==null||d===e)return
this.d3(new C.etJ(this,d,e))},
NG(d){return this.bJi(d)},
bJi(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NG=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOs():s)
w=5
return B.b(C.apg(t.a.c,r),$async$NG)
case 5:t.dy.K(0,r.toLowerCase())
case 4:s=d.a
C.aqI(s)
w=6
return B.b(C.b0y(t.a.c,s),$async$NG)
case 6:if(t.c==null){w=1
break}t.m(new C.er3(t,d))
w=7
return B.b(t.tt(),$async$NG)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NG,v)},
cmM(d,e){var w=this
if(d.z){w.aia()
return}w.m(new C.etI(w,d,e))
w.pi()},
jP(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
Wd(d){return this.ch.cg(0,d.a,new C.eqU(d))},
asG(d){return this.CW.cg(0,d.a,new C.erv())},
a1G(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.Xc(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jE()},
b5m(){return this.a1G(!0)},
a1E(d){var w,v,u=this
if(u.qf())return
if(!u.zL())return
w=u.Xc(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.Wd(w).saV(0,"")}u.m(new C.evq(u,d))
$.aW.x1$.push(new C.evr(u,d,w))},
b5S(d){var w=this
if(d.b===D.cQ&&!w.kd()&&w.zL()){w.a1E(d.a)
return}w.az0(d.a)},
az0(d){var w,v,u,t,s,r=this
if(r.kd())return
w=r.r
if(w!=null&&w!==d){v=r.Xc(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.euQ(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jE()}},
aLG(){this.d3(new C.epR(this))},
oZ(d){return this.byr(d)},
byr(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oZ=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o5(),$async$oZ)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epO(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oZ,v)},
Vm(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vm=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gr(78,1920),$async$Vm)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.epE(t,s))
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
if(r.gam(s)){t.c.I(x.q).f.T(D.eVp)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bQ(null,null,new C.epB(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Vg)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d3(new C.epC(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Vg,v)},
arG(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b4(w.gdr().z,new C.er5(v))){w.c.I(x.q).f.T(D.eUq)
return}if(w.w===v)w.a1G(!0)
w.d3(new C.er6(w,v))},
bFy(){var w=this.jP(),v=w==null
if((v?null:w.b)===D.f0)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMn(d,e){var w=this,v=w.jP(),u=w.gdr(),t=w.e
if(t==null)return
w.d3(new C.eqi(w,v,d,e,t,u))},
bA1(d){return this.aMn(d,null)},
a7Z(d){return this.bA9(d)},
bA9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7Z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a6k.t(0,A.a.i(d.a))||t.Q
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
if(r===D.cQ)t.bA1(s.w>=28||s.x.gdJ(0)>=A.H.gdJ(0)?d.d:d.e)
else if(r===D.f0){r=d.c
t.aMn(r.j(0.88),r)}w=1
break}t.d3(new C.eqn(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7Z,v)},
a7Y(d){return this.bA7(d)},
bA7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
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
break}t.d3(new C.eql(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7Y,v)},
bzS(d){var w=this.gdr()
if(w==null)return
this.d3(new C.eqh(this,w,d))},
a_h(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_h=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i8o(r),$async$a_h)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oe()
t.m(new C.etk(t,s))
w=4
return B.b(t.tt(),$async$a_h)
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
Dp(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dp=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oe()
t=4
w=7
return B.b(C.aPq(m),$async$Dp)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOP(o,q,m.b),$async$Dp)
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
return B.i($async$Dp,v)},
F3(d,e){return this.czg(d,e)},
czg(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$F3=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qf()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1G(!0)
t.oe()
s=h.a=t.e.hC()}else{r=A.d.bd(t.d,new C.evz(d))
s=h.a=r>=0?t.d[r].hC():d.hC()}s=s.w
q=s==null
p=C.i1M(q?"":s)
o=C.hkT(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a1<1>")
n=B.C(new B.a1(s,new C.evA(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.csA(n.length,o,s),$async$F3)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i1G(h.a)
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
return B.b(t.csz(n,o),$async$F3)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.hR(t.d,new C.evB(s))
s=h.a.b
w=11
return B.b(t.csx(k.b,s),$async$F3)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hC()
case 5:j=C.i1L(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.T(D.eVA)
w=1
break}w=12
return B.b(t.csy(j.a,s,o,j.c),$async$F3)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.evC(h,t,i))
t.pi()
case 1:return B.h(u,v)}})
return B.i($async$F3,v)},
csA(d,e,f){var w=this.c
w.toString
return B.bQ(A.K,null,new C.ev5(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
csz(d,e){var w=this.c
w.toString
return B.bQ(A.K,null,new C.ev4(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
csx(d,e){var w=this.c
w.toString
return B.bQ(A.K,null,new C.euZ(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
csy(d,e,f,g){var w=this.c
w.toString
return B.bQ(A.K,null,new C.ev0(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
ab0(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ab1(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bX,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dl,18)],x.V)
v=x.p
return B.B(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.er,B.E(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f4X,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aU6(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.TE,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
aU9(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.B(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bd,B.E(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nw,w,w,w),A.cV,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Bs,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bD,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.erZ(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bWm(d,e,f,g,h,i){return this.aU9(d,e,f,!1,g,h,i)},
au_(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dm,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.YP,w,w,w)},
aU8(d,e,f){var w=null,v=B.bm(A.c.j(0.08),w,w,w,A.c,w,A.cl,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bG(B.d(e,w,w,w,w,w,w,A.nu,w,w,w),new C.erY(d,f),v)},
aU7(d,e){return this.aU8(d,e,null)},
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
for(l=A.d.gaf(o.z),n=new B.f6(l,new C.euR());n.C();){m=l.gS(0).r
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
HR(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p3(q,s.c,s.d),$async$HR)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9x(A.R.ao(r.ag(),null),r.b+".json"),$async$HR)
case 4:q=t.a
w=5
return B.b(B.p2(q.c,q.d),$async$HR)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HR,v)},
b56(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oe()
u.tt()
w=u.c
w.toString
v=B.e8(new C.evp(u,t),!1,null,x.z)
B.a5(w,!1).c5(v)},
H5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$H5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o5(),$async$H5)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fEx(),$async$H5)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i4y(s.a)
q=t.c
q.toString
w=5
return B.b(B.bQ(A.az,null,new C.epJ(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$H5)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d3(new C.epK(t,s))
w=1
break}if(p==="split")t.d3(new C.epL(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$H5,v)},
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
break}t.d3(new C.epP(t,r))
case 1:return B.h(u,v)}})
return B.i($async$N1,v)},
b1L(d){var w=this.e
if(w==null||!C.kv(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNF(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPp(s,t==null?null:B.b0(t),u)},
a7F(d){return this.byi(d)},
byi(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7F=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qf()){w=1
break}if(!t.zL()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(D.eVP)
w=1
break}w=3
return B.b(t.aNF(),$async$a7F)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.epG(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7F,v)},
ag4(d){return this.clw(d)},
clw(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ag4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qf()){w=1
break}if(!t.zL()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(D.eUY)
w=1
break}w=3
return B.b(t.aNF(),$async$ag4)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.etG(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$ag4,v)},
c8g(){var w,v,u=this
if(u.kd())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bB(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cyi()}},
cyi(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d3(new C.evx(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bWH(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d3(new C.es1(this,r,u.d))},
c0l(d){var w
if(this.kd())return!1
w=this.e
if((w==null?null:C.kv(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fB8(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l1&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c0m(d){var w
if(this.kd())return!1
w=this.e
if((w==null?null:C.kv(w.w))!==!0)return!0
if(!this.zL())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fB8(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.l1&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
Na(d){return this.bAz(d)},
bAz(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Na=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qf()){w=1
break}if(!t.zL()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.T(D.eTO)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apk(p),$async$Na)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.T(D.eUs)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6U(r)
w=1
break}t.m(new C.eqr(t,d,o))
t.oe()
$.aW.x1$.push(new C.eqs(t))
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
break}t.d3(new C.epD(t,s))
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
return B.b(C.fEo(r),$async$NU)
case 4:q=e
if(q==null){w=1
break}t.d3(new C.ert(s,q))
case 1:return B.h(u,v)}})
return B.i($async$NU,v)},
iU(d){this.d3(new C.epM(this,d))},
q5(d){return this.bzL(d)},
bzL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q5=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qf()){w=1
break}m=!D.aMZ.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o5(),$async$q5)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.H5()
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
case"print":t.Dp()
w=1
break A
case"rotate":s=t.jP()
if(s!=null)t.d3(new C.epV(s))
w=1
break A
case"text_box":t.aLG()
w=1
break A
case"picture":t.Vm()
w=1
break A
case"present":t.b56()
w=1
break A
case"new_slide":t.a7H()
w=1
break A
case"export_json":t.HR()
w=1
break A
case"outline_share":t.JJ()
w=1
break A
case"flashcard_tool":t.v8(D.HF)
w=1
break A
case"quiz_tool":t.v8(D.HG)
w=1
break A
case"worksheet_tool":t.v8(D.HH)
w=1
break A
case"duplicate_el":s=t.jP()
if(s==null){w=1
break A}t.d3(new C.epW(t,s))
w=1
break A
case"delete_el":t.arG()
w=1
break A
case"bring_fwd":s=t.jP()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.epX(t,s))
w=1
break A
case"send_back":s=t.jP()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.eq7(t,s))
w=1
break A
case"align_left":s=t.jP()
if(s!=null)t.d3(new C.eqa(s))
w=1
break A
case"align_center":s=t.jP()
if(s!=null)t.d3(new C.eqb(s))
w=1
break A
case"align_right":s=t.jP()
if(s!=null)t.d3(new C.eqc(s))
w=1
break A
case"grayscale":case"brighten":t.NU()
w=1
break A
case"flip_h":s=t.jP()
if(s!=null)t.d3(new C.eqd(s))
w=1
break A
case"flip_v":s=t.jP()
if(s!=null)t.d3(new C.eqe(s))
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
break A}for(q=A.d.gaf(r.z),p=new B.f6(q,new C.eqf()),o=0;p.C();){n=A.a.fE(A.a.i(q.gS(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a1(n,new C.eqg(),B.U(n).k("a1<1>")).gM(0)}t.c.I(x.q).f.T(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
case"bullets":t.iU(C.iU(A.bg,!0,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cD(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uh,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iU(C.iU(A.bg,!1,4279310375,A.aD,20,A.bn,A.a5,0.5,C.cD(),"1. First item\n2. Second item\n3. Third item",0,D.ug,0.8,0.1,0.22))
w=1
break A
case"quote":t.iU(C.iU(A.L,!1,4279310375,A.aD,24,A.cF,A.a5,0.25,C.cD(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iU(C.iU(A.bg,!1,4284773515,A.aD,14,A.bn,A.a5,0.1,C.cD(),"Author, Title (Year). Publisher.",0,D.uh,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iU(C.iU(A.dM,!1,4279310375,A.aD,14,A.bn,A.a5,0.08,C.cD(),C.bCc(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iU(C.iU(A.dM,!1,4279310375,A.aD,13,A.bn,A.a5,0.06,C.cD(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d3(new C.epY(t))
w=1
break A
case"footer_bar":t.d3(new C.epZ(t))
w=1
break A
case"highlight":t.d3(new C.eq_(t))
w=1
break A
case"redact":t.d3(new C.eq0(t))
w=1
break A
case"callout":t.d3(new C.eq1(t))
w=1
break A
case"checkboxes":t.iU(C.iU(A.bg,!1,4279310375,A.aD,20,A.bn,A.a5,0.45,C.cD(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iU(C.iU(A.bg,!1,4279310375,A.aD,16,A.bn,A.a5,0.55,C.cD(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d3(new C.eq2(t))
w=1
break A
case"letter":t.iU(C.iU(A.bg,!1,4279179050,A.aD,17,A.bn,A.a5,0.82,C.cD(),C.bCc()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iU(C.iU(A.bg,!1,4279310375,A.aD,22,A.bn,A.O,0.76,C.cD(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uh,0.8,0.1,0.12))
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
case"sticky":t.d3(new C.eq3(t))
w=1
break A
case"progress":t.d3(new C.eq4(t))
w=1
break A
case"stars":t.iU(C.iU(A.L,!1,4279310375,A.aD,36,A.bn,A.a5,0.12,C.cD(),"\u2605\u2605\u2605\u2605\u2606",0,D.qa,0.8,0.1,0.4))
w=1
break A
case"equation":t.iU(C.iU(A.L,!1,4279310375,A.aD,32,A.bn,A.O,0.14,C.cD(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iU(C.iU(A.L,!1,4279310375,A.aD,18,A.bn,A.a5,0.2,C.cD(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ug,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d3(new C.eq5(t))
w=1
break A
case"compare":t.d3(new C.eq6(t))
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
case"qr_placeholder":t.d3(new C.eq8(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d3(new C.eq9(t,r))
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
cs0(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eMF.t(0,this.z)},
cs_(d){if(this.jP()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b6I(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cm,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bG
u=B.I(u,A.q,o&&e?2:1)
t=C.i4n(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.NM,A.f,p,p,D.DQ,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.fz,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bLT(d){var w,v=null,u=this.jP()
if(u==null)return A.bI
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.aA:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.Qe,new C.ers(this,u,d),x.bR))
return B.B(w,A.m,v,A.e,A.j,0,v,v)},
v8(d){return this.byq(d)},
byq(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aMT.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o5(),$async$v8)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epN(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v8,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eLr
w=h.e
if(w==null)return h.bCf()
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
m=t?A.bX:D.ba5
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRV()}else j=!1
if(j)k.push(new C.a7o(h.a.c,!1,h.e.gb8U(),h.gc8d(),g))
else if(s&&h.e!=null&&!h.kd()&&C.ce3(h.e.w)){j=h.a
k.push(new C.a7o(j.c,j.d,g,h.gc9m(),g))}if(s)k.push(h.bLP(w,t,r))
if(s&&h.kd()){w=t?A.fo:A.kn
j=B.m(14)
i=B.I(A.bj.j(0.35),A.q,1)
k.push(B.p(g,B.B(B.a([D.bL7,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fo,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AW,A.i_,g,g,g))}w=!n
if(w&&!h.kd())k.push(h.c1h(t,r))
if(w&&h.kd())k.push(h.czh(t))
if(r&&h.jP()!=null&&w&&!h.kd())k.push(h.c1d(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b4B(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b4B(t,!1),g))
i.push(B.E(new B.bI(A.b_,g,g,h.bDx(v,t,!s||p),g),1))
if(h.cs0(r)&&u&&s&&!h.kd())i.push(h.c80(v,t,r))
j.push(B.E(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kd()&&h.cs_(!1))j.push(new B.a7(240,g,h.bOs(t),g))
k.push(B.E(B.B(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c1e(t))
return B.c8(g,m,B.bl(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bCf(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bX:A.bK
v=r.a.e
u=r.c7g(A.bj,A.pS,new C.eqv(r),r.gcbw(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.B(B.a([B.E(r.aLo(A.bj,A.hy,"Blank Presentation",new C.eqw(r)),1),A.av,B.E(r.aLo(A.aZ,A.vN,"Class Template",new C.eqx(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mI,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bzd(w))
else{t=new B.hZ(t,B.U(t).k("hZ<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.eqy(r,w),x.l))}return B.c8(q,p,B.bl(!1,B.cz(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bK6(){this.m(new C.er8(this))
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
return B.b(B.bQ(A.K,null,new C.etj(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aeL)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeL,v)},
AI(d,e){return this.csm(d,e)},
csm(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AI=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hT(D.Wo,!0,"Dismiss",j,new C.euS(),new C.euT(d,e),A.iy,!0,x.N),$async$AI)
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
return B.b(C.aPq(d),$async$AI)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOP(j,q,d.b),$async$AI)
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
return B.b(r.F3(d,!1),$async$AI)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hT(D.Wo,!0,"Dismiss",j,new C.euU(),new C.euV(d),A.a1,!0,x.y),$async$AI)
case 20:if(g===!0)r.NG(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afO("Rename presentation",d.b),$async$AI)
case 24:l=g
if(l!=null)r.cmM(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cD())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.euW(r,k))
r.pi()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AI,v)},
b_C(d,e){var w=null
return B.bK(!1,D.ftr,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bj,w,w,w,A.au,w,A.lN,w,w,w,w,w,A.k2,w,w))},
bzd(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.epS(this,d),null)},
bIc(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.eqX(),x.dv).c_(0,new C.eqY()),v=B.C(w,w.$ti.k("J.E"))
return new B.D(G.agE,this.aLY(v,e,new C.eqZ(),f),null)},
aLY(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
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
bzb(d,e,f){return this.aLY(d,e,null,f)},
bIe(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dbV
else if(v==="hati_kuhoweya")w=D.cZ4
else{if(v==="hati_kiapo_uongozi")v=D.cM0
else v=C.kv(v)?D.cT3:A.PQ
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.er1(this,f,d,e,w),null)},
c1e(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jP()
if(i==null||i.b!==D.cQ)return A.bI
w=k.Wd(i)
v=k.asG(i)
u=A.w.j(0.55)
t=x.p
s=B.bl(!1,new B.D(A.AZ,B.B(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bK(!1,D.fpb,j,j,!0,j,j,new C.ess(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.az:A.c
q=B.m(18)
p=B.I(A.bj.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.h7,B.c0(new B.D(A.eQ,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bj,j,j,j,j,2,D.bR3,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wj,j,j,j,j,j,j,!1,"\u2022",j,new C.est(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zt,A.an,j,A.T6,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.be),j),1)
q=B.m(16)
p=d?A.bo:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.cd(B.B(B.a([k.tT(G.MK,j,new C.esu(k,i),d),k.tT(G.ZZ,j,new C.esv(k,i),d),k.tT(I.akW,j,new C.esw(k,i),d),k.tT(I.a_F,j,new C.esx(k,i),d),k.tT(k.bz9(i.as),j,new C.esy(k,i),d),k.tT(D.am3,j,new C.esz(k,i),d),k.tT(D.am2,j,new C.esA(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.D(N.agN,B.p(j,B.B(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.aA:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.db],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lj,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c1d(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jP()
if(m==null)return A.bI
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bo,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cB,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b3f(A.jk,"Edit",new C.esd(o,m),d,!0))
if(w===D.lu)p.push(o.b3f(A.G7,"Shape & ring",new C.ese(o),d,!0))
p.push(o.tT(A.BJ,"Format",new C.esf(o),d))
if(v)A.d.v(p,B.a([o.tT(G.MK,n,new C.esg(o,m),d),o.tT(D.am3,n,new C.esh(o,m),d),o.tT(D.am2,n,new C.esi(o,m),d)],q))
p.push(A.b6)
p.push(o.cqd(A.e6,n,o.gaPX(),d,!0))
p.push(o.tT(A.hz,"Done",new C.esj(o),d))
return B.p(n,B.B(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AX,A.lj,n,n,n)},
bz9(d){switch(d.a){case 2:return D.a_C
case 1:case 5:return D.a_E
default:return D.a_D}},
c26(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.bg}},
az_(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Gr:n
if(h)s=n
else s=g?A.c.j(0.06):A.bK
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.ec,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.r_,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eE(new B.D(new B.Q(q,8,q,8),B.B(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tT(d,e,f,g){return this.az_(d,e,f,g,!1,!1)},
b3f(d,e,f,g,h){return this.az_(d,e,f,g,h,!1)},
cqd(d,e,f,g,h){return this.az_(d,e,f,g,!1,h)},
bLP(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bo,A.M],m):B.a([A.c,A.mS],m)
w=B.I(e?A.aK:A.ot,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bj.j(e?0.18:0.1),A.cB,18)],x.V)
u=p.a26(A.eC,"Back",p.gbFi(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.db,B.E(B.B(B.a([new B.dq(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c1:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tr,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.kd()){u=p.a26(A.rc,"Undo",p.ax.length===0?o:p.gczN(),e)
A.d.v(r,B.a([u,p.a26(D.bEG,"Redo",p.ay.length===0?o:p.gcls(),e)],q))}r.push(p.a26(A.xZ,"PDF",new C.erl(p),e))
r.push(p.a26(A.hA,"Download as video",new C.erm(p),e))
if(!p.kd())r.push(B.BK(o,o,B.X(A.o1,e?A.ad:A.bv,o,o,o,o),new C.ern(p),A.J,new C.ero(p),A.af,"More",x.N))
r.push(A.db)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.eE(D.e7J,o,new B.o(o,o,o,B.m(14),o,K.Gr,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazQ(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.B(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bqv,D.bvC,o,o,o)},
czh(d){var w=this,v=null,u=B.m(18),t=d?A.az.j(0.92):A.c.j(0.96),s=B.I(d?A.cC:A.aL,A.q,1)
return B.p(v,B.cd(B.B(B.a([w.iE(A.tX,"Print",new C.evD(w),d),w.iE(A.xZ,"Download PDF",new C.evE(w),d),w.iE(A.pY,"Present",w.gazQ(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AW,G.air,v,v,v)},
a26(d,e,f,g){var w,v=null
if(f==null)w=g?A.b3:A.dq
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cc)},
c1h(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.az.j(0.92):A.c.j(0.96)
u=B.I(d?A.cC:A.aL,A.q,1)
t=x.f0
t=B.C(new B.K(p,new C.esD(r,d),t),t.k("ak.E"))
t.push(new B.D(X.ai5,new B.fg(new C.esE(r),q),q))
A.d.v(t,w?B.a([new B.D(R.vu,r.agr(A.lk,"Ending celebration",r.gcbJ(),d),q),new B.D(R.vu,r.agr(A.G7,"Logo ring & frame",r.gccp(),d),q)],x.p):A.ha)
A.d.v(t,w?B.a([new B.D(R.vu,r.agr(A.nh,"Look and feel",r.gccq(),d),q),new B.D(R.vu,r.agr(A.oR,"Edit this slide's text",r.gccX(),d),q)],x.p):A.ha)
t.push(new B.D(R.vu,B.hs(B.aE(q,B.p(q,D.eKU,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.lf.j(0.4),A.J,10)],x.V),D.ao4,A.n),q,34,q,q,A.fV,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.esF(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.B(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bw4,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cnW(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AW,q,q,q,q)},
cnW(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d5R[v]
u.a=null
s=u.a=t.b
w.push(e.lF(e.cpD(s),t.a,new C.eu1(u,e),a3,D.aMT.t(0,s)))}w.push(e.iE(A.kV,"Notes Slide",new C.eu2(e),a3))
w.push(e.lF(A.G6,"Quiz",new C.eu3(e),a3,!0))
w.push(e.lF(L.FK,"Worksheet",new C.eue(e),a3,!0))
w.push(e.lF(V.G9,"Flashcard",new C.eup(e),a3,!0))
w.push(e.lF(A.NB,"Lab Report",new C.euA(e),a3,!0))
w.push(e.lF(A.tR,"Rubric",new C.euH(e),a3,!0))
w.push(e.lF(A.oL,"Minutes",new C.euI(e),a3,!0))
w.push(e.lF(A.o0,"Syllabus",new C.euJ(e),a3,!0))
w.push(e.lF(A.NG,"Timeline",new C.euK(e),a3,!0))
return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d73[v]
w.push(e.lF(r.b,r.c,new C.euL(e,r),a3,!D.aMZ.t(0,A.a.i(r.a))))}return B.B(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.B(B.a([e.iE(A.yj,a0,e.gaLF(),a3),e.iE(A.tU,"Picture",new C.eu4(e),a3),e.iE(A.yd,"Bio link",new C.eu5(e),a3),e.iE(A.a09,"Table",new C.eu6(e),a3),e.iE(A.NF,"Sticky",new C.eu7(e),a3),e.iE(A.tT,"Divider",new C.eu8(e),a3),e.iE(A.BK,"Header",new C.eu9(e),a3),e.lF(A3.vD,"Rectangle",new C.eua(e),a3,!0),e.lF(A.r4,"Circle",new C.eub(e),a3,!0),e.lF(A.a_u,"Triangle",new C.euc(e),a3,!0),e.lF(A.iV,"Arrow",new C.eud(e),a3,!0),e.lF(D.bD9,"Parallelogram",new C.euf(e),a3,!0),e.lF(D.bFE,"Hexagon",new C.eug(e),a3,!0),e.lF(A.tT,"Line",new C.euh(e),a3,!0),e.lF(A.xZ,"PDF",new C.eui(e),a3,!0),e.lF(O.a0j,"Signature",new C.euj(e),a3,!0),e.iE(A2.Bz,"Quote",new C.euk(e),a3),e.iE(D.a_6,a1,new C.eul(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bV,x.w).w
u=x.p
t=B.B(B.a([e.aMu("Wide 16:9",D.Cx,a3),e.aMu("Short 9:16",D.oa,a3),new B.D(A.fz,B.mH(D.bHM,d,D.flu,d,new C.eum(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.B(B.a([e.bFx("This slide",!e.Q,a3,new C.eun(e)),A.bp,e.aOF("All slides",e.Q,a3,new C.euo(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bFy()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.K(D.a27,new C.euq(e),n),n.k("ak.E"))
n=B.cd(B.B(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d80[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dq:A.b3,1.5,A.q,-1)
l.push(new B.D(A.fz,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eur(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.B(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDt()
g=B.U(h).k("K<1,D>")
h=B.C(new B.K(h,new C.eus(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.N,q,A.am,p,A.N,o,A.at,n,A.N,m,A.at,l,A.N,j,A.at,B.cd(B.B(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.am,e.bZ5(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jP()
w=e.c
w.toString
w=B.aI(w,A.bV,x.w).w
u=new C.eu0(e)
t=new C.euM(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Qe,f.dy,new C.eut(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.aA:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.Qe,q,new C.euu(e,u),A.bj))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.B(B.a([e.iE(A.kV,w,new C.euv(e),a3),e.iE(A.tX,"Print deck",new C.euw(e),a3),e.lF(D.ajZ,"Export JSON",new C.eux(e),a3,!0),e.iE(A.fL,"Duplicate Slide",e.gaQP(),a3),e.iE(A.e6,a2,e.gaPY(),a3),e.ctI(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jP()
w=x.p
u=B.a([e.iE(D.a_6,a1,new C.euy(e),a3),e.iE(A.fL,"Duplicate",e.gaQP(),a3),e.iE(A.e6,a2,e.gaPY(),a3),e.iE(A.pY,"Present",e.gazQ(),a3),e.iE(A.BI,a0,e.gaLF(),a3),e.iE(A.BC,"Fit Text",new C.euz(e),a3),e.iE(A.xZ,"Download PDF",new C.euB(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iE(A.ku,"Transfer",new C.euC(e),a3))
if(f!=null){w=B.a([A.ab,e.iE(G.MK,"Bold",new C.euD(e,f),a3),e.iE(G.ZZ,"Italic",new C.euE(e,f),a3),e.iE(G.ajA,"Underline",new C.euF(e,f),a3),e.iE(Ae.ML,"Bullets",new C.euG(e,f),a3),e.bOb(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bLT(a3))
w.push(e.iE(D.bBN,"Delete",e.gaPX(),a3))
A.d.v(u,w)}return B.B(u,A.m,d,A.e,A.j,0,d,d)}},
aMu(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oa
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7R,t,t,t)],v)
if(w)A.d.v(u,B.a([A.db,D.bGY],v))
return new B.D(A.fz,B.j7(t,t,t,B.B(u,A.m,t,A.e,A.Q,0,t,t),t,new C.eqq(this,w,e),s===e,A.bj.j(0.25),t,t,t),t)},
ctI(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bI
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b3:A.cr,A.q,1)
u=B.m(8)
t=B.X(A.FI,d?A.aA:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.an3,q,q,q,new C.ev8(r,p),q,q,q,q,q,A.cc)
return B.p(q,B.B(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.amU,q,q,q,new C.ev9(r,p),q,q,q,q,q,A.cc)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fo,A.mp,q,q,q)},
cpD(d){switch(d.a){case 6:return V.G9
case 7:return A.G6
case 8:return L.FK
case 4:return A.BK
default:return A.kV}},
bOb(d,e){var w=null,v=B.I(e?A.b3:A.cr,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.an3,w,w,w,new C.ery(this,d),w,w,w,w,w,A.cc),s=A.k.N(d.w)
return B.p(w,B.B(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.amU,w,w,w,new C.erz(this,d),w,w,w,w,w,A.cc)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xI,A.mp,w,w,w)},
bZ5(d){var w=null
return B.BK(B.D9(B.X(A5.a_9,d?A.ad:A.bv,w,w,w,16),w,w,D.fqZ,w,w,w),w,w,new C.es5(),A.J,this.gbzR(),A.cp,"Slide layout",x.fO)},
lF(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bK,s=B.I(g?A.dr:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dv:A.bj,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.NM,A.f,w,w,D.DQ,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.fz,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eE(new B.D(A.h7,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cV,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aS:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iE(d,e,f,g){return this.lF(d,e,f,g,!1)},
b4B(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hJ(t,new C.evk(u,s,e,d),s.r.length,A.cp,t,w,new C.evl(e),!1)
s=d?A.az:A.bK
w=B.a([],x.p)
if(e&&!u.kd())w.push(new B.D(A.cp,B.Hx(E.anh,new C.evm(u),B.nx(t,A.bj,t,t,t,t,t,t,t,t,t,t,E.aNB,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bDx(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oa?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bI(A.b_,v,v,new B.fG(w,B.aE(v,B.cp(new C.eqP(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eqQ(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bDz(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.kv(a9.w))===!0,b1=b0&&C.fB8(b3),b2=b0&&b3.b===D.l1&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kd())v=!b0||a7.c0m(b3)
else v=!1
if(!a7.kd())u=!b0||a7.c0l(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.cg:A.bj
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fZR(b3))o=a8
else if(p&&!a7.kd())o=a7.gc8f()
else o=a7.kd()?a8:new C.eqD(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c4:A.jB
i=w&&C.fZR(b3)&&a7.zL()?new C.eqE(a7,b3):a8
h=v&&b3.b===D.cQ?new C.eqF(a7,b3):a8
g=u?new C.eqG(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bl
else e=q?A.bY:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bY.j(0.08)
else a0=b3.b===D.l1?A.K:a8
if(b1){a1=a7.kd()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bY.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bV,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zL()
a3=b3.b===D.cQ
a4=a3?a7.Wd(b3):a8
a5=a3?a7.asG(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bV,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eqH(a7,b3):a8
a3=v&&a3?new C.eqI(a7,b3):a8
a6=C.b0u(q,a4,a1,b3,a5,a2,a3,new C.eqJ(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bJN,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqK(a7,b3,b4,b5),a8,a8,new C.eqL(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kd()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bKr,A.f,a8,a8,new B.o(A.dA,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbWG(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kd()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bLZ,A.f,a8,a8,new B.o(A.bY,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqM(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bV,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fzC,A.f,a8,a8,new B.o(A.bj,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kT,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eqN(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eG(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOF(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bj.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bj:A.bG,A.q,1)
if(e)t=A.bj
else t=f?A.aA:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.db,B.p(r,D.NM,A.f,r,r,D.DQ,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.B(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h6,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bFx(d,e,f,g){return this.aOF(d,e,f,g,!1)},
c80(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.as(new B.bb(v,A.b4,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.az:A.aP
t=f?A.wK:l
if(f)s=new B.bO(new B.ay(e?A.bG:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rw,16)],x.V):l
q=x.p
p=B.B(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.b_C(e,new C.esH(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.am,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.bs(l,new B.b4(4,B.m(10),A.dg),l,A.bU,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.esI(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.an,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aS6(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jP()
if(a2==null)return A.bI
w=new C.erM(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dR:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.B(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.b_C(a3,a0.gbK5())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.B(B.a([D.flZ,B.E(B.kZ(a1,a1,a1,u,0.05,new C.erN(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.B(B.a([D.fy4,B.E(B.kZ(a1,a1,a1,t,0.05,new C.erO(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.B(B.a([D.ffS,B.E(B.kZ(a1,a1,a1,96,10,new C.erP(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lu
if(l||n===D.l1||n===D.Rx)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.B(B.a([D.frG,B.E(B.kZ(a1,a1,a1,s,0,new C.erQ(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.B(B.a([D.fzl,B.E(B.kZ(a1,a1,a1,r,0,new C.erR(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BZ[j]
i.a=null
g=h.a
i.a=g
k.push(B.j7(a1,a1,a1,new B.x(h.b,a1,A.qn,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erS(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bV(A.bz,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BU[j]
f.a=null
g=e.a
f.a=g
h.push(B.j7(a1,a1,a1,new B.x(e.b,a1,A.qn,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.erT(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.am,k,A.N,i,A.am,B.bV(A.bz,h,A.bq,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.K(v,new C.erU(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.am,B.bV(A.bz,l,A.bq,6,6),A.ac,B.haU(new C.erV(w,a2),D.cna,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.f0){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.aA:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.K(v,new C.erW(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bV(A.bz,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.df(D.bLL,D.ftC,new C.erX(a0,a5),B.bm(A.bC,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cz(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cC:A.c
p=a4?A.wK:a1
if(a4)o=new B.bO(new B.ay(a3?A.bG:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rw,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.F7,a1,a1,a1)},
bOs(d){return this.aS6(d,!1,!1,null)},
c7g(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.es_(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f5Q,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bd,B.E(B.v(B.a([w,A.bB,A.cV,r.bzb(D.cQz,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hs(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eE(D.eQf,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bY.j(0.4),A.el,8)],p),D.ao9,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.B(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b6P,D.b7c],v):B.a([A.c,A.kn],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cB,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bU,q,q,q)},
aLo(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.epz(this,g,d,e,f),null)},
afO(d,e){return this.cjJ(d,e)},
cjJ(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afO=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.as(new B.bb(e,A.b4,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.etE(d,q),p,null,!0,!0,x.N),$async$afO)
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
C.ayj.prototype={
R(){return new C.bc2(null,null)}}
C.bc2.prototype={
gcvT(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bH(u)+"/"+B.bR(u)+"/"+B.bA(u),s=v.w
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
w=B.bj(u,D.bp_,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bsA()},
IL(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.aw(0,new B.hP(w,v,A.ct).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.D(D.but,B.c6(new B.h5(B.a([u,w],x.dS)),new C.d_X(this),v),v),v,v,v)}}
C.bcg.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.D(D.buK,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.D(D.btW,B.v(B.a([B.p(w,D.bKx,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fvI,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f6Z,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e3,D.bo3,B.B(B.a([B.E(B.bK(!1,D.fkc,w,w,!0,w,w,new C.d0i(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.nb,w,A.oe,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bo,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fpw,w,w,!0,w,w,new C.d0j(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.nb,w,A.oe,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.Vb,new B.o(A.az,w,u,v,D.cQT,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.Jy.prototype={
R(){return new C.bc1()}}
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
return B.dU(B.dc(B.aE(o,B.vl(B.dk(o,B.B(B.a([r,A.av,new B.dq(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f4:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eF,o,o,o,A.nX,o,o,1/0),A.ct,A.jf,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d_S(p,d),new C.d_T(p),new C.d_U(p),new C.d_V(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.Pk.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.D(A.eQ,B.B(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.er,B.E(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nw,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.a_8.prototype={
R(){return new C.aDQ(D.dd,null,null)}}
C.aDQ.prototype={
gYq(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.boA,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b50(d){if(!this.a.c.ay)return
this.x=d
this.gYq().iz(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.avd(D.eWB)
C.i1j()
v.QW()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYq().q()
v=w.z
if(v!=null)v.a7(0)
C.avd(D.eWC)
C.i1m()
w.buI()},
cyF(){B.jl()
this.m(new C.ewj())
var w=this.c.I(x.q).f
w.a4d()
if($.bjO)w.T(D.eTt)},
QW(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h93(u,w),1,120)),new C.ew9(v))},
cyk(){var w,v=this
v.m(new C.ewi(v))
if(v.r)v.QW()
else{w=v.f
if(w!=null)w.a7(0)}},
gaU_(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cst(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.ewa(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lh,new C.ewb(w))},
avv(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.ew5(u))
u.QW()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaU_()){u.cst()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ew6(u,A.o.E(w+1,s)))
u.b50(w)
u.QW()}},
cin(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.ew7(v))
v.QW()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.ew8(v,w,t))
v.b50(w)
v.QW()}},
ctU(d){var w,v=this,u=v.e
if(u===D.cm){u=v.d
u===$&&B.c()
return new B.nd(d,new B.cx(u,x.ac))}w=v.ctV(u)
u=v.d
u===$&&B.c()
return B.qe(new B.nd(d,new B.cx(u,x.ac)),w,new C.ewg(),A.bc,A.bc,new C.ewh(v))},
ctV(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.boW
case 16:return A.kq
case 18:return A.n8
default:return A.n9}},
ctT(d,e,f){var w,v,u,t=null,s=B.cI(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.up,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.RN,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.ik,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jr(e,new B.bf(s,new B.bp(A.uo,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.il(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bp(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.il(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bp(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.ewc(s),e)
case 9:return B.c6(s,new C.ewd(s),e)
case 10:return B.c6(s,new C.ewe(s),e)
case 11:return B.c6(s,new C.ewf(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.il(A.A,e,t,new B.bf(s,new B.bp(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jz(B.jr(e,new B.bf(s,new B.bp(A.up,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqS(w,t))
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
u=B.jz(new C.anP(B.c6(n.gYq(),new C.ewk(n,v,w),m),m),A.r,m)}else{t=B.rv(new C.Iw(w,!0,!1,m))
l=B.b0(w.e)
u=n.ctU(B.el(B.jz(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.B(B.a([B.d(n.r?"Auto "+C.h93(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.ok,m,m,m),A.bp,D.bMN],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fI,m,m,m)
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
l.push(B.bZ(0,new C.Nd(new C.Ek(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oa?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jz(B.ul(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjO){r=B.Hx(A.kY,new C.ewl(d),B.nx(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bl(!0,B.B(B.a([r,A.ab,B.Hx(B.X(n.r?Ak.yb:A.iW,m,m,m,m,m),n.gcyj(),B.nx(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bl(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.hs,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fI,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bl(!0,B.aE(A.c4,B.p(A.la,$.bjO?A.bI:s,A.f,m,m,m,m,64,m,m,D.bpH,m,m,150),A.y,!1,m,n.gcyE(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aE(m,new B.an(A.W,m,A.b0,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.ewm(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.JF.prototype={
B(d){var w=null
return B.p(w,B.bl(!0,new B.D(E.ahS,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_C,w,w,w,w,w,w,w,w)}}
C.bqS.prototype={
j4(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jL(d){return d.b!==this.b}}
C.bgV.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aXq
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.dk(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vU,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hY,r,64,r,r,r,r,64)
return B.aE(r,new B.a7(78,r,B.v(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bgU.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dki.h(0,p)
if(o==null)o=D.d7c
p=p==="none"
w=p?q:new B.a8(A.a3,A.a7,A.x,o,q,q)
p=p?A.cU.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.amg:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eq,q,q,52)
return B.aE(q,new B.a7(66,q,B.v(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aJx.prototype={
aR(){this.aZ()
this.aX()
this.dI()},
q(){var w=this,v=w.b1$
if(v!=null)v.a3(0,w.gdC())
w.b1$=null
w.a2()}}
C.aLz.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.bwB.prototype={}
C.aLA.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbx())
w.a8$=null
w.a2()},
aR(){this.aZ()
this.aX()
this.by()}}
C.b0x.prototype={}
C.VE.prototype={
R(){return new C.aDO()},
bfv(d){return this.e.$1(d)}}
C.aDO.prototype={
gb3l(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9W(){var w,v
if(this.d==="all")return B.bn(this.a.d,!0,x.I)
w=this.gb3l()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNk(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3l()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb4A(){return A.d.cI(this.ga9W(),0,new C.evQ())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Qx()},
Qx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b17(s.c,s.f),$async$Qx)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.evM(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qx,v)},
IN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9W()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fEk(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p3(o,q.c,q.f),$async$IN)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e8(new C.evP(t,p),!1,null,x.H)
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
return B.b(B.hy(o,D.dXO,!0,"NgmySlidesTransferScan",x.N),$async$QU)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.evN(t))
w=4
return B.b(C.agY(s),$async$QU)
case 4:r=e
t.m(new C.evO(t))
o=J.a6(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.T(D.eSm)
w=1
break}w=5
return B.b(t.a.bfv(r),$async$QU)
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
q=C.fEz(null,A.d.gL(n),s,t.a.f)}else q=C.fEz(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
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
for(;;)switch(w){case 0:t.m(new C.evR(t))
w=3
return B.b(C.bBV(),$async$a2h)
case 3:s=e
t.m(new C.evS(t))
if(s==null||J.cn(s)){w=1
break}w=4
return B.b(t.a.bfv(s),$async$a2h)
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
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.d9:A.bK,k=o.ga9W().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bT(A.A,0.5,A.x,n,0,B.a([A.bj.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cD,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.evV(d),n,n,n,n,n,n),h=x.p
i=B.B(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zr],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bj.j(0.35),A.eU,24)],x.V)
u=B.ao(n,B.X(A.pS,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.B(B.a([B.p(n,D.bNi,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.er,B.E(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.byH],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hs(B.aE(A.c4,D.eQh,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gcd8(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0O,A.n),n,n,n,n,E.YD,n,n,1/0),A.e3,o.awF(m,"What to transfer"),A.ac,B.B(B.a([B.E(o.aWe(A.pY,m,new C.evW(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.aWe(D.bD1,m,new C.evX(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d7,o.awF(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.az:A.c
t=B.m(16)
s=B.I(m?A.bG:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.aA:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bR,n,n,n))}else A.d.v(v,new B.K(u,new C.evY(o,m),B.U(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mI)
w.push(o.awF(m,"Transfer options"))
w.push(A.ac)
w.push(B.B(B.a([B.E(o.apq(A.aR,k,!0,A.jn,m,o.r,o.gc7k(),"Scan on another device","Show QR"),1),A.av,B.E(o.aLp(A.jR,!0,A.iX,m,o.gcpc(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.B(B.a([B.E(o.bxG(A.aV,k,A.hA,m,o.r,o.gc7h(),"Download .json","Backup file"),1),A.av,B.E(o.aLp(A.aF,!0,Ax.yl,m,o.gcB2(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bj.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bj.j(0.28),A.q,1)
s=B.X(A.lm,A.bj.j(0.9),n,n,n,18)
r=o.gaNk()
q=o.gb4A()
p=o.gb4A()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.B(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bD,n,n,n)],h))}j=B.a([j,B.bl(!0,B.v(B.a([new B.D(Ag.Ml,i,n),B.E(B.cz(w,n,D.bt4,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Vv,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aeY(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i7F(s,t.d,t.e),$async$aeY)
case 2:return B.h(null,v)}})
return B.i($async$aeY,v)},
awF(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bj,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.B(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.aA:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aWe(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.az:A.c
if(g)w=A.bj
else w=e?A.bG:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bj.j(0.2),A.cB,14)],x.V):s
u=A.bj.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bj,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cp,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eE(new B.D(A.bD,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bId(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.az:A.c,m=B.m(16)
if(p)w=A.bj
else w=e?A.bG:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bNt,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a7,A.x,B.a([A.bj,A.bj.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.aA:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.eg:A.r4
if(p)r=A.bj
else r=e?A.b3:A.dq
return new B.D(A.cz,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.B(B.a([v,A.bd,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bD,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.evL(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
apq(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.az:A.c
if(f)w=d.j(0.45)
else w=h?A.bG:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.r2,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.amO,A.f,s,s,D.b_p,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eE(new B.D(E.Yi,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.aA:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aLp(d,e,f,g,h,i,j){return this.apq(d,e,!1,f,g,!1,h,i,j)},
bxG(d,e,f,g,h,i,j,k){return this.apq(d,e,!1,f,g,h,i,j,k)}}
C.VF.prototype={
R(){return new C.bjN()}}
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
q=l===1?C.fEz(null,A.d.gL(m),k,r.a.f):C.fEz(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.kv(A.d.gL(n).w))C.fEk(A.d.gL(r.a.d),D.d5c)
n=r.a
m=n.c
n=C.i4D(n.d)
w=7
return B.b(C.fEy(p,C.i4I(r.a.d),n,m,q),$async$adP)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.evZ(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.ew_(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adP,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.d9:A.bK,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.ew0())
v=B.aH(j,j,j,j,B.X(A.eC,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.ew1(d),j,j,j,j,j,j)
u=x.p
v=B.B(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zr],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dm,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0O,A.n),j,j,j,j,E.YD,j,j,1/0)
q=B.m(24)
s=B.I(A.aR.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a7c,A.L,j,j))
else if(k.d==null)r.push(D.e7i)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cB,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fkG,A.am,B.aE(j,B.p(j,B.B(B.a([D.bP0,A.av,B.d(m,j,j,j,j,j,j,D.f7m,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bTH,A.n),j,j,j,j,A_.ahF,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ew2(k,d),j,j,j,j,j,j,!1,A.a8),A.N,D.fp2,A.aB],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bG,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pK(j,j,!1,l,j,!0,!0,j,!1,D.bkt),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cp,j,j,j))
A.d.v(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hf,A.L,j,j))
return B.c8(j,h,B.bl(!0,B.v(B.a([new B.D(Ag.Ml,v,j),B.E(B.cd(B.v(B.a([t,A.aQ,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bVD,A.n),j,j,j,j,A.tG,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ahX,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDL.prototype={
R(){return new C.aDM(new B.as(A.as,$.aw()),B.jQ(!0,null,!0,!0,null,null,!1))}}
C.aDM.prototype={
a_(){var w=this
w.a1()
w.e.aO(0,new C.ept(w))
$.aW.x1$.push(new C.epu(w))},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aYO(){var w,v=this.c
v.toString
w=C.ys(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eE,x.w).w,i=B.m(28),h=B.I(A.bj.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bj.j(0.28),A.un,36),D.aaM],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bKA,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.fhR,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b_P,k,k,k,k,A.xH,k,k,1/0)
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
t.push(new B.bD(1,A.bh,B.dk(A.A,new B.x(p,k,D.f12,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bq(o,o,o,o),n,k,A.n),A.hY,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.ID)
A.d.v(d,t)}g=B.a([B.B(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bRM,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.uc(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.Bf(5,k),new C.bu7()],x.aS),k,k,A.aOQ,k,5,k,1,k,k,!1,"\u2022",k,new C.epp(l),k,new C.epq(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m2,k,k,k,k),0),0,0,0)],a1)
d=C.ys(w.a.a.toUpperCase())==null?k:l.gc7l()
return B.av(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cS(Ad.K3,B.p(k,B.bw(e,B.v(B.a([a0,new B.D(D.btz,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fgg,A.by,new B.a7(1/0,50,B.bG(D.fwy,d,B.bm(A.bj,A.bo,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.am,B.bK(!1,A.nx,k,k,!0,k,k,new C.epr(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.d9,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.bu7.prototype={
oy(d,e){var w=e.a.toUpperCase()
return e.cHh(B.ha(A.bw,w.length),w)}}
C.aqJ.prototype={
R(){return new C.aDP(B.z4(A.LC,A.nE,A.u5))}}
C.aDP.prototype={
q(){this.d.q()
this.a2()},
aYN(d){var w,v=this
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
return B.b(C.fNa(s),$async$a9Q)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aYN("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9Q,v)},
c7j(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i4G(w[u])
if(t!=null){this.aYN(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vR,s,s,s,t.gbMn(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eC(B.a([r,B.aH(s,s,s,s,B.X(q?A.r7:Al.Nh,s,s,s,s,s),s,s,s,new C.ew4(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.d9,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fxN,s,s,s,1,s,!0)
r=B.z3(t.d,A.bS,t.gc7i())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bj,A.q,3),w,B.a([new B.ac(2,A.G,A.bj.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b0,A.r,B.a([r,w,B.ao(32,B.p(s,D.flK,A.f,s,s,new B.o(v,s,B.I(A.bj.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.jh,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.buj.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bIL,A.f,w,w,D.b_y,w,56,w,w,w,w,w,56),A.aQ,D.fxt,A.am,new B.ki(this.c,new C.f6F(),w,w,x.cI),A.aQ,new B.ki(this.d,new C.f6G(),w,w,x.cl),A.ac,D.fxq],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.K3,new B.o(A.az,w,u,v,w,w,A.n),w,w,w,K.YK,D.buc,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7o.prototype={
R(){return new C.bjw(A.bx)},
gdd(){return this.c}}
C.bjw.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.ZD()
w.d=B.dv(A.fU,new C.edD(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
ZD(){return this.clz()},
clz(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$ZD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.edB(t))
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
break}t.m(new C.edC(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$ZD,v)},
bOj(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bI
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.bY
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.B(B.a([B.X(A.FI,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bOj(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.agI,A.i_,r,r,1/0)}}
C.a8g.prototype={
nd(){var w,v,u,t=this
t.x9()
w=t.cx
v=t.c
w.bpe(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pR(B.F(["/S",D.eaY,"/URI",new B.rr(B.Wc(w.as),A.uq,!0)],x.N,u),u))}}
C.a8h.prototype={
a5(){return"PdfAnnotFlags."+this.b}}
C.b2a.prototype={
bwK(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e9g],x.di)
this.w!==$&&B.aP()
this.w=w},
gcKA(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jP(w,new C.cgg(),B.a3(w).k("jP<co.E,H>")).fb(0,new C.cgh())},
aC8(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h8(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tp(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.je(d.a,d.b))
s.n(0,"/Border",B.tp(N.aoz))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fY(t.gcKA()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pR(w,x.Y))}}
C.cgi.prototype={}
C.a2t.prototype={}
C.ahR.prototype={}
C.aQA.prototype={
h_(d){var w,v,u,t,s,r,q=this,p=null
q.le(d)
q.LG(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.beT(w)
u=x.N
t=x.Y
s=new C.cgi(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bwK(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pR(B.F(["/Type",D.eaW],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8g(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.K(0,r)
v.dx.push(r)}}
C.awb.prototype={}
C.aS4.prototype={
h_(d){var w,v,u,t,s=this
s.le(d)
w=s.b
if(w!=null){v=B.dp()
u=s.a
v.e7(u.a,u.b,0,1)
u=d.b
u.i5()
t=s.a
t.toString
u.KQ(t)
u.S9(0)
u.oT(0,v)
w.h_(d)
u.ng(0)}}}
var z=a.updateTypes(["az<~>()","~(lF)","R(i0)","~()","R(eK)","R(og)","R(lF)","~(i0)","R(eK,eK)","JF(Y)","R(nH)","R(lb)","az<R>()","H(H,i0)","a4<n,@>(i0)","ai<zn>()","n(nH)","R(a7F)","n(lF)","n(vT)","R(Et)","H(i0,i0)","n(eK)","r(eK)","cL(eK)","r(hz)","~(hz)","eK(uB,M,M,M,M,H{fx:n,key:n,rotation:M})","eK(n,M,H)","H(og,og)","R(zn)","R(n,ai<zn>)","a4<n,@>(og)","nH()","Yf(Y)","eK(n,M,M,M,M,M{align:pX,anim:hz,bullets:R,color:H?,delay:H,fx:n,key:n,style:Hs,weight:oO})","a0v(Y)","eK(n,M,M,M,M{anim:hz,delay:H,fx:n,key:n})","az<~>(og)","R(mq)","Yd(Y)","a02(Y)","a01(Y)","Pa(Y)","Zo(Y)","eK(uB,M,M,M,M,H,n,n{anim:hz,delay:H,rotation:M,stroke:H,strokeWidth:M})","eK(n,M,M,M,M,M,n,n,H)","eK(M,M,n,H{size:M})","r(rf,M,M)","lb()","og(a4<@,@>)","~(ur)","Et()","ff(eK)","r(iZ)","YX(Y)","~(Ek)","Zh(Y)","H(eK,eK)","eK(eK)","a4<n,@>(eK)","eK(a4<@,@>)","lF(lF)","a4<n,@>(lF)","lF(a4<@,@>)","R(jG)","jG()","n(i0)","~(ai<og>)","S(ai<i0>)","S(i0)","ai<i0>(n?)","acj(Y,H)","~(R(eK,eK))","acY(Y)","aeE(Y,H)","w(lF,R)","Vq(Y)","ad0(Y)","Vt(Y)","~(mu)","i0(i0)","M(eK)","a_w(Y)","a_8(Y)","i0()","ai<EP>()","az<~>(ai<i0>)","r(bv<H,i0>)","D(jG)","D(Et)","az<~>(hz,~())","r(ai<hz>,hz?,~(hz),w)","R(m3)","ai<jq<mu>>(Y)","jq<mu>(mu)","i0(a4<@,@>)","VE(Y)","eK(n,M,M,M,M,M,H{align:pX,style:Hs,weight:oO})","VF(Y)","r(i0)","~(lX)","Iw(Y,lF,r?)","H(a8h)","az<ai<a4<n,@>>?>()","n(n)","az<zl>({paper:n?,photo:dD?,request:n,template!le})","az<a7x>({doc!zl,history:ai<+(n,n)>,instruction!n,photo:dD?,template!le})","acV(Y)"])
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
C.frh.prototype={
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
C.fHe.prototype={
$1(d){return new C.a0v(this.a,this.b,C.i5y(),null)},
$S:z+36}
C.f57.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f5b.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f5c.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f5d.prototype={
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
C.f58.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f59.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f5a.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f52.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hD,w,w,w)
return B.ek(B.a([B.bK(!1,D.fk8,w,w,!0,w,w,new C.f50(d),w,w),B.bK(!1,D.fje,w,w,!0,w,w,new C.f51(d),w,w)],x.p),w,w,D.Xi,v,w,w,w,w,D.fy3,w)},
$S:20}
C.f50.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.f51.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.f53.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f54.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f5h.prototype={
$0(){var w=this.a
return w.m(new C.f5g(w,this.b))},
$S:0}
C.f5g.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f56.prototype={
$0(){var w=this.a
return w.m(new C.f55(w,this.b,this.c))},
$S:0}
C.f55.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.K(0,v)},
$S:0}
C.f5e.prototype={
$0(){return this.a.a0K(this.b)},
$S:0}
C.f5f.prototype={
$0(){return this.a.OL(0,this.b)},
$S:0}
C.f5k.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.f5l.prototype={
$0(){var w=this.a
return w.m(new C.f5j(w,this.b))},
$S:0}
C.f5j.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f5i(),B.U(w).k("K<1,n>")))}},
$S:0}
C.f5i.prototype={
$1(d){return d.a},
$S:z+67}
C.fcn.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a2(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h6i(w.b(t.h(0,"doc"))?B.a2(w.a(t.h(0,"doc")),v,u):A.cA)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.og(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fco.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.ftU.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbq())q=n===o.gbq()&&p.b>o.gcz()}if(q)v.n(0,s,t)}},
$S:z+68}
C.ftS.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.ftT.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fGJ.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fqY.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fHA.prototype={
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
p=q.bd(s,new C.cFD(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ah7(t.a.c,s),$async$$1)
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
$1(d){return new C.Yd(this.b,this.a.gcve(),null)},
$S:z+40}
C.cFJ.prototype={
$1(d){return D.fRI},
$S:z+43}
C.cFw.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.WY,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.D(D.btZ,B.v(B.a([B.p(w,D.bHN,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.fih,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f6o,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e3,new B.D(A.pO,B.B(B.a([B.E(B.dT(D.fp4,new C.cFu(d),B.di(w,w,w,w,w,w,w,w,w,E.n0,w,w,A.cl,w,new B.b7(B.m(14),A.Y),D.aXQ,w,w,w,w)),1),A.av,B.E(B.bG(D.fuS,new C.cFv(d),B.bm(A.bC,w,w,w,w,w,A.cl,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wN,new B.o(D.acs,w,u,v,D.cVk,w,A.n),w,w,w,K.YK,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
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
$0(){return J.np(this.a.d,new C.cFt(this.b))},
$S:0}
C.cFt.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFs.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.WY,A.q,1),q=x.p
q=B.a([B.B(B.a([B.p(t,D.bMG,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.ao4,A.n),t,44,t,t,t,t,t,44),A.bd,B.E(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aQu,t,t,t),A.bB,D.fuO],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dfA[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.ax4(u[1],u[2],u[3],new C.cFq(v,d),!1,t))}q.push(A.am)
q.push(D.bo6)
q.push(A.am)
q.push(new C.ax4(A.e6,"Delete book","Remove it from this device",new C.cFr(d),!0,t))
return B.bl(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.acs,t,r,s,t,t,A.n),t,t,t,A.tB,E.Yo,t,t,t),!0,!1,A.af,!0,!0)},
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
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aGo,12)],x.V)
return B.dU(B.eG(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f4(A.A,F.anG(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cFy.prototype={
$0(){return this.a.c1X()},
$S:0}
C.cFp.prototype={
$0(){return this.a.aXn(0,this.b)},
$S:0}
C.cFo.prototype={
$0(){return this.a.D2(this.b)},
$S:0}
C.cFn.prototype={
$0(){return this.a.D2(this.b)},
$S:0}
C.cFK.prototype={
$2(d,e){var w=this.a
return w.bBe(J.q(w.d,e))},
$S:41}
C.cER.prototype={
$0(){var w=this.a
if(w.c!=null)w.AD()},
$S:0}
C.cEQ.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_f("Page "+(v.length+1),"",""))},
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
w.DS()},
$S:0}
C.cEV.prototype={
$0(){return this.a.c=""},
$S:0}
C.cF_.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cEZ(w,d))
w.DS()},
$S:z+51}
C.cEZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cF6.prototype={
$2(d,e){if(d)this.a.AD()},
$S:118}
C.cF2.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.AD(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.T(D.eUS)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cF3.prototype={
$0(){return this.a.aWl(this.b,-1)},
$S:0}
C.cF4.prototype={
$0(){return this.a.aWl(this.b,1)},
$S:0}
C.cF5.prototype={
$0(){return this.a.c3c(0,this.b)},
$S:0}
C.fyq.prototype={
$1(d){return C.hgh()},
$S:42}
C.fyr.prototype={
$1(d){return null},
$S:27}
C.fgM.prototype={
$1(d){return null},
$S:27}
C.fzp.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:323}
C.fzo.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:246}
C.fzv.prototype={
$1(d){var w=this.a
return C.fZJ(d)===w||C.hkP(d)===w},
$S:z+4}
C.ffP.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:81}
C.c8n.prototype={
$1(d){return d.length!==0},
$S:3}
C.fyo.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fyp.prototype={
$1(d){return C.fB8(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.ftf.prototype={
$1(d){var w=null
return B.bl(!0,new B.D(E.xG,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fpF,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.df(D.Gi,D.fjP,new C.ftd(d),B.bm(A.bY,w,w,w,A.w,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.vQ,D.fqT,new C.fte(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wL,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.ftd.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fte.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.ftg.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,D.fg8,w,w,!0,w,w,new C.ftb(d),w,w),B.bG(D.fx5,new C.ftc(d),w)],x.p),w,w,w,D.fyY,w,w,w,w,D.fg2,w)},
$S:20}
C.ftb.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.ftc.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e8r.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e8p.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e8q.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e8s.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e8t.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fzu.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:81}
C.fzq.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.DE(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fzs.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f7z,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:186}
C.fzt.prototype={
$1$size(d){var w=null
return B.B(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hW,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hW,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fzr.prototype={
$2$female$size(d,e){var w=null,v=d?D.aej:this.a,u=B.I(A.hW,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.acG,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fL1.prototype={
$1(d){return new C.acV(this.a,this.b,null)},
$S:z+108}
C.dXS.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bkW:A.L7,q=B.I(D.ja.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bY.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.amN,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.ja.j(0.35),A.el,10)],x.V),D.bWe,A.n),t,t,t,t,A.xy,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.D(H.Yz,B.v(B.a([p,A.aB,B.B(B.a([o,A.bd,B.E(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.ja,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f6R,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ig(!0,t,e,A.y,D.aNS,new C.dXR(w,this.c),v,D.ahA,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m9,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dXR.prototype={
$2(d,e){var w=this.a.d[e]
return new C.acj(w,new C.dXQ(this.b,w),null)},
$S:z+72}
C.dXQ.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.ftj.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.ftk.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xG,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fsZ,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.df(D.Gi,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fth(d),B.bm(D.ja,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.o3,D.TL,new C.fti(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wL,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.fth.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fti.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.ftn.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fto.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xG,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fh7,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.df(D.Gi,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftl(d),B.bm(D.ja,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.o3,D.TL,new C.ftm(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wL,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.ftl.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.ftm.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.ftr.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fts.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xG,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fnt,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.df(D.Gi,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftp(d),B.bm(D.ja,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.o3,D.TL,new C.ftq(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wL,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.ftp.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.ftq.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fMu.prototype={
$1(d){return D.fVt},
$S:z+74}
C.edG.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bcL:A.L7,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bOX,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bY.j(0.35),A.el,10)],x.V),D.ao9,A.n),v,v,v,v,A.xy,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.D(H.Yz,B.v(B.a([r,A.aB,B.B(B.a([q,A.bd,B.E(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.L4,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f4m,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ig(!0,v,e,A.y,D.aNS,new C.edF(this.b),19,D.ahA,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m9,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.edF.prototype={
$2(d,e){var w=D.Qs[e]
return new C.aeE(w,new C.edE(this.a,w),null)},
$S:z+75}
C.edE.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fBc.prototype={
$0(){return B.fYI(C.hU5(this.a))},
$S:288}
C.fBb.prototype={
$0(){var w=C.h_0(this.a)
return"data:image/png;base64,"+A.cS.gcw().aJ(w)},
$S:23}
C.fdV.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jf(d,e),new B.jf(w,e+v),new B.jf(d+f*14,e),new B.jf(w,e-v)],x.J)
B.a1q(this.a,C.fy(4291404327),v)},
$S:703}
C.fMF.prototype={
$1(d){return new C.Vq(this.a,null)},
$S:z+77}
C.egY.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.egX())},
$S:30}
C.egX.prototype={
$0(){},
$S:0}
C.egZ.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.egW(w,d))},
$S:1673}
C.egW.prototype={
$0(){return this.a.x=J.eT(A.dD.gaM(this.b))},
$S:0}
C.eh_.prototype={
$1(d){},
$S:27}
C.egA.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.egw.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.egH.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.egI.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.eku)},
$S:0}
C.egJ.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egC.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.z("you",this.b))
w.f.bO(0,A.c5)},
$S:0}
C.egD.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.z("ai",v.a))},
$S:0}
C.egE.prototype={
$0(){return this.a.ax.push(new B.z("ai",B.t(this.b)))},
$S:0}
C.egF.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egG.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m9(v,A.dU,A.id)}},
$S:8}
C.egB.prototype={
$0(){var w=this.a,v=w.z,u=C.fBQ(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cGp(C.fBQ(t))},
$S:0}
C.egy.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.egz.prototype={
$0(){return this.a.as=!1},
$S:0}
C.egP.prototype={
$0(){return B.a5(this.a,!1).lR()},
$S:0}
C.egQ.prototype={
$0(){var w=this.a
return w.m(new C.egO(w))},
$S:0}
C.egO.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.egR.prototype={
$0(){var w=this.a
return w.m(new C.egN(w,this.b))},
$S:0}
C.egN.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.egS.prototype={
$1(d){var w=this.a
return w.m(new C.egM(w))},
$S:9}
C.egM.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.egT.prototype={
$1(d){var w=this.a
return w.m(new C.egL(w))},
$S:9}
C.egL.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.egU.prototype={
$0(){var w=this.a
return w.m(new C.egK(w,this.b))},
$S:0}
C.egK.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.egV.prototype={
$1(d){return this.a.Zp()},
$S:2}
C.egx.prototype={
$0(){return this.a.c6B(this.b)},
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
C.fAN.prototype={
bjZ(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bO9(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cCU($.qP().jy(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mH(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjZ(d,e)},
$S:1674}
C.fz4.prototype={
$1(d){return d.length!==0},
$S:3}
C.fz6.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:81}
C.fz5.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.hr(t,t,t,t,B.de(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qk,A.ca,t,A.e_,A.c8)
v=this.a
w.wC(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:33}
C.fdw.prototype={
$1(d){var w=A.a.fE(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a1(w,new C.fdx(),B.U(w).k("a1<1>")).gM(0)},
$S:239}
C.fdx.prototype={
$1(d){return d.length!==0},
$S:3}
C.fdu.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:217}
C.fdv.prototype={
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
o=C.fZI(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fWA(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gceL(),"\n\n")
d=B.hr(a6,a6,a6,a6,B.de(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adE(k,q,1.28),j),A.qk,A.ca,a6,A.e_,A.c8)
d.wC(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.z(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fZI(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bn,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fWA(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adE(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bD(1,A.bh,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qk,a6,a6,a6,a6,a6,a6,a6),a6)],p)
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
l=C.fZI(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bn,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fWA(g.length===0?B.a([a6],n):g,l))break}a1=o.adE(i,h,1.28)
a2=new C.cc6(a1)
n=x.p
v=B.B(B.a([a2.$2(l[0],u),A.IC,new B.a7(v,a5,a4.f,a5),A.IC,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bwg,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bD(1,A.bh,new B.x(l[2+a3],a5,a1,a5,A.qk,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azt(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.B(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:155}
C.cc6.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qk,w,w),w)},
$S:1675}
C.fMI.prototype={
$1(d){return new C.Vt(this.a,this.b,null)},
$S:z+79}
C.ei8.prototype={
$1(d){return d.m_()},
$S:1676}
C.ei9.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ei7(w,d))},
$S:1677}
C.ei7.prototype={
$0(){var w=this.b
return this.a.d=w.gfs(w)},
$S:0}
C.ehW.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ehX.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ei2.prototype={
$0(){return B.a5(this.a,!1).eK()},
$S:0}
C.ei3.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.bbf(u,v.gawy(),w),A.f1),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ei0(v),new C.ei1(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.ei0.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:243}
C.ei1.prototype={
$1(d){var w=this.a
w.m(new C.ehY(w,d,this.b,this.c))},
$S:206}
C.ehY.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawy()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ei4.prototype={
$1(d){var w=this.a
return w.m(new C.ei_(w,this.b))},
$S:9}
C.ei_.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ei5.prototype={
$1(d){var w=this.a
return w.m(new C.ehZ(w,d))},
$S:6}
C.ehZ.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ei6.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.fMY.prototype={
$1(d){return D.fYg},
$S:z+83}
C.eRJ.prototype={
$1(d){return this.a.Y4()},
$S:8}
C.eQB.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcw().aJ(v)},
$S:0}
C.eQZ.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eR8.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.eQk.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eQl.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eQi.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eQj.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eQS.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.eQT(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jz(B.rv(p>0.2?C.fRn(q,B.a4K(p,p,A.x)):q),A.r,u)],x.p)
w=s.be
if(w>0.02){v=B.a4K(12,12,A.x)
p.push(B.jz(B.dc(B.rv(C.fRn(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b_
if(r!=null&&s.b3>0)p.push(B.el(u,B.b0(r).j(s.b3),!0))
r=s.bf
if(r!=null&&s.bM>0){r=B.b0(r).j(s.bM)
w=s.bf
w.toString
p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aW8,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.be))}r=s.aE
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(D.aVU,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.be))
r=s.aN
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b5,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aN)],x.O),D.cU_,u),A.n),A.be))
if(s.aF>0){r=s.k1
p.push(B.ao(u,B.c0(u,new B.o(u,u,u,u,u,new B.a8(A.b_,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aF),A.w.j(s.aF),A.w.j(0)],x.O),D.d3G,u),A.n),A.be),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Y
if(r>0)p.push(B.el(u,A.w.j(r),!0))
r=s.b6
if(r>0)p.push(B.c0(u,new B.o(u,u,u,u,u,new B.bT(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d0R,u),A.n),A.be))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.beO(s,u),A.au))
return new B.an(A.W,u,A.b0,A.r,p,u)},
$S:64}
C.eQT.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cj,A.bS,!0,q,!1,q,q),o=r.a,n=o.aVY(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c8,l=m*3.141592653589793/180
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
return B.dU(B.ed(A.A,B.eG(A.A,l,B.fs(A.A,new B.Dc(new B.yJ(q,q,n,A.Ag),p,q),q,B.vG(s,o.cX?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:605}
C.eR4.prototype={
$0(){return this.a.m(new C.eR3(this.b,this.c))},
$S:0}
C.eR3.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eR5.prototype={
$1(d){return this.a.m(new C.eR2(this.b,d))},
$S:6}
C.eR2.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eR7.prototype={
$0(){return this.a.m(new C.eR6(this.b,this.c))},
$S:0}
C.eR6.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQa.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eQb.prototype={
$1(d){var w=this.a
return w.m(w.gcwD())},
$S:2}
C.eQc.prototype={
$1(d){return this.a.m(new C.eQ9())},
$S:2}
C.eQ9.prototype={
$0(){},
$S:0}
C.eQd.prototype={
$0(){var w=this.a
return w.m(new C.eQ8(w,this.b))},
$S:0}
C.eQ8.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.eQf.prototype={
$2(d,e){return A.av},
$S:36}
C.eQe.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bG
q=B.I(q,A.q,t?2.5:1)
r=B.dk(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b_,A.b5,A.x,r,w,w),A.n),A.hY,w,94,w,w,w,w,70)
return B.aE(w,new B.a7(70,w,B.v(B.a([r,A.h0,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.aA,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eQ7(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:77}
C.eQ7.prototype={
$0(){var w=this.a
return w.m(new C.eQ4(w,this.b))},
$S:0}
C.eQ4.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eQg.prototype={
$1(d){var w=this.a
return w.m(new C.eQ6(w,d))},
$S:9}
C.eQ6.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.eQh.prototype={
$1(d){var w=this.a
return w.m(new C.eQ5(w,d))},
$S:9}
C.eQ5.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eRy.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:33}
C.eRF.prototype={
$1(d){var w=this.a
return w.m(new C.eRG(w,d))},
$S:28}
C.eRG.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ea(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eRH.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:256}
C.eRz.prototype={
$0(){var w=this.a
return w.m(new C.eRx(w,this.b))},
$S:0}
C.eRx.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.K(0,v)},
$S:0}
C.eRA.prototype={
$0(){var w=this.a
return w.m(new C.eRw(w,this.b))},
$S:0}
C.eRw.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eRB.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eRv(v,w.b,w.c,w.d))},
$S:0}
C.eRv.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eRC.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grz(v))},
$S:0}
C.eRD.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eRE.prototype={
$0(){var w=this.a
return w.m(new C.eRu(w))},
$S:0}
C.eRu.prototype={
$0(){var w=this.a.db
return A.d.h1(w,0,w.length,0)},
$S:0}
C.eRh.prototype={
$1(d){return d.a===this.a.dy},
$S:221}
C.eRi.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.awd[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awC(new B.n7(new B.bq(n,n,n,n),A.aq,new B.kP(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a7,A.x,m,j,j),A.n),A.be,new C.aZp(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eRg(r,v),2,i))}return B.bV(A.bz,h,A.bq,7,7)},
$S:171}
C.eRg.prototype={
$0(){var w=this.b
return w.m(new C.eRb(this.a,w))},
$S:0}
C.eRb.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eRj.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:234}
C.eRm.prototype={
$0(){var w=this.a
return w.m(new C.eRf(w))},
$S:0}
C.eRf.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eRn.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eRo.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eRp.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eRq.prototype={
$0(){var w=this.a
return w.m(new C.eRe(w))},
$S:0}
C.eRe.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eRr.prototype={
$0(){var w=this.a
return w.m(new C.eRd(w))},
$S:0}
C.eRd.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eRs.prototype={
$0(){var w=this.b
return w.m(new C.eRc(this.a,w))},
$S:0}
C.eRc.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eRt.prototype={
$1(d){return this.a.fx=d},
$S:234}
C.eRk.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eRl.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.eQW.prototype={
$0(){var w=this.a
return w.m(new C.eQV(w))},
$S:0}
C.eQV.prototype={
$0(){var w=this.a
w.p4=null
w.b23()},
$S:0}
C.eQX.prototype={
$0(){var w=this.a
return w.m(new C.eQU(w,this.b))},
$S:0}
C.eQU.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eQY.prototype={
$0(){var w=this.a
return w.m(w.gcnd())},
$S:0}
C.eQO.prototype={
$0(){var w=this.a
return w.m(new C.eQN(w))},
$S:0}
C.eQN.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.eQP.prototype={
$0(){var w=this.a
return w.m(new C.eQM(w))},
$S:0}
C.eQM.prototype={
$0(){var w=this.a
w.aF=0.55
w.Y=Math.max(w.Y,0.12)},
$S:0}
C.eQQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d1f[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.awC(new B.n7(new B.bq(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.Dc(new B.yJ(o,o,v.aVY(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Ag),B.fL(u,A.A,140,o,A.cj,A.bS,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.eQL(v,s),3,n))}return B.bV(A.bz,m,A.bq,10,8)},
$S:171}
C.eQL.prototype={
$0(){var w=this.a
return w.m(new C.eQK(w,this.b))},
$S:0}
C.eQK.prototype={
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
C.eQs.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.eQt.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.eQu.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.eQv.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.eQw.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.eQx.prototype={
$1(d){return this.a.Y=d},
$S:6}
C.eQy.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.eQz.prototype={
$1(d){return this.a.aF=d},
$S:6}
C.eQA.prototype={
$1(d){return this.a.aN=d},
$S:6}
C.ePO.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.ePP.prototype={
$1(d){return this.a.to=d},
$S:6}
C.ePQ.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.ePR.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.ePS.prototype={
$0(){var w=this.a
return w.m(new C.ePN(w))},
$S:0}
C.ePN.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.ePT.prototype={
$1(d){return this.a.b_=d},
$S:234}
C.ePU.prototype={
$1(d){return this.a.b3=d},
$S:6}
C.eQm.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.eQn.prototype={
$1(d){return this.a.be=d},
$S:6}
C.eQo.prototype={
$1(d){return this.a.az=d},
$S:6}
C.eQp.prototype={
$1(d){return this.a.bf=d},
$S:234}
C.eQq.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.ePY.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.ePZ.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eQ_.prototype={
$1(d){return this.a.bU=d},
$S:6}
C.eQ0.prototype={
$1(d){return this.a.c8=d},
$S:6}
C.eQ1.prototype={
$0(){var w=this.a
return w.m(new C.ePX(w))},
$S:0}
C.ePX.prototype={
$0(){var w=this.a
return w.c8=A.k.E(w.c8+90+180,360)-180},
$S:0}
C.eQ2.prototype={
$0(){var w=this.a
return w.m(new C.ePW(w))},
$S:0}
C.ePW.prototype={
$0(){var w=this.a
return w.cU=!w.cU},
$S:0}
C.eQ3.prototype={
$0(){var w=this.a
return w.m(new C.ePV(w))},
$S:0}
C.ePV.prototype={
$0(){var w=this.a
return w.cX=!w.cX},
$S:0}
C.eQR.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i8i(v,w.p4)},
$S:0}
C.eQJ.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.ble:B.fL(v,A.A,w,w,A.cj,A.bS,!1,w,!1,w,w)
return C.fzc(d.length===0?"rounded":d,u,e)},
$S:137}
C.eQF.prototype={
$0(){var w=this.a
return w.m(new C.eQE(w))},
$S:0}
C.eQE.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.eQG.prototype={
$0(){var w=this.b
return w.m(new C.eQD(this.a,w))},
$S:0}
C.eQD.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.eQH.prototype={
$0(){var w=this.b
return w.m(new C.eQC(this.a,w))},
$S:0}
C.eQC.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.eQI.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eR1.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ev(n.cgF(),n.r))
l.push(new C.Iw(n.ctH(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ev(new B.an(A.W,t,A.b0,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aE(A.c4,B.c0(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.be),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.eR0(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:211}
C.eR0.prototype={
$1(d){var w=this.a
return w.m(new C.eR_(w,d,this.b,this.c))},
$S:18}
C.eR_.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eRa.prototype={
$0(){var w=this.a
return w.m(new C.eR9(w,this.b))},
$S:0}
C.eR9.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eQr.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).lR()},
$S:0}
C.eRI.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.B(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aYF(),B.E(B.av(w.b0B(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.v(B.a([B.E(w.aPb(),1),w.aLq()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aYF(),new B.D(A.hK,B.av(s.b0B(u),t,t,t),t),B.E(s.aPb(),1),s.aLq()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:569}
C.fwt.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.ep(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzQ(),null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cm,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bn,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bn,A.O)},
$S:z+98}
C.fws.prototype={
$3(d,e,f){var w=this,v=C.bzQ(),u=w.b?A.H:A.cv,t=w.c?A.cF:A.bn
return C.ep(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bf,4280172719,2,d,0,w.f,w.e,D.cm,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cdr.prototype={
$1(d){return B.t(d)},
$S:17}
C.fE9.prototype={
$0(){return this.a},
$S:z+15}
C.fkL.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fkM.prototype={
$2(d,e){return J.cn(e)},
$S:z+31}
C.fEb.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fEe.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fEf.prototype={
$0(){return A.d.gL(D.vZ)},
$S:z+33}
C.fE7.prototype={
$1(d){return d.a},
$S:z+16}
C.fEa.prototype={
$1(d){return d.a},
$S:z+16}
C.fC7.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fC8.prototype={
$1(d){return d.length!==0},
$S:3}
C.fC9.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fwx.prototype={
$0(){return C.cD()},
$S:23}
C.fwA.prototype={
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
C.fwz.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cm,D.f0,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fwy.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cm,t=v?j:0
return C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.bf,4280172719,2,"",t,0,"",u,D.lu,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.qa,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fww.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fyY.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hhj.cg(0,A.a.i(s.w).toLowerCase(),new C.fyW(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fyX(s)),$async$$0)
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
C.fyW.prototype={
$0(){return F.aN8(this.a.w)},
$S:199}
C.fyX.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byK("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hD(2,w,A.c6,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:199}
C.fdr.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fds.prototype={
$1(d){return d.a},
$S:z+18}
C.fdt.prototype={
$1(d){return d.b},
$S:z+19}
C.fN9.prototype={
$1(d){return D.fYx},
$S:z+41}
C.eXV.prototype={
$0(){return this.a.x=C.hLK(this.b,this.c.b)},
$S:0}
C.eXW.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eXT.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:414}
C.eXU.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:414}
C.eXS.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bQ(A.az,null,new C.eXN(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k6,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b2(s,7)
if(r.length===0){n.m(new C.eXO(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hn5(o,m.cHc(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eXP(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eXN.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eXR(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b4d,A.f,p,p,D.b_j,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BU:D.BZ,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fzc(v,i.b2F(h),u),p)))}t=B.lZ(1,m,4,10,10,p,A.dR,!0)
if(!l)return B.bl(!0,new B.D(A9.vq,t,p),!0,!1,A.af,!0,!0)
s=new C.eXQ(i,d)
m=B.aI(d,A.bV,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.GC[e]
l.push(s.$2(r.a,r.b))}return B.bl(!0,new B.cS(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.flT,A.S,t,A.e3,D.eL1,A.at,D.fwr,A.S,B.lZ(1.15,l,3,10,10,p,A.dR,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.vq,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:24}
C.eXR.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bt:A.dr
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hx,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eXM(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eXM.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eXQ.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bL:A.bG
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.anj,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.Nd(u.Fs(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bL:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eXL(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:137}
C.eXL.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eXO.prototype={
$0(){var w=this.a
return w.w=w.w.Fs("")},
$S:0}
C.eXP.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eXB.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eXC.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eXE.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eXF.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eXG.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eXH.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eXD(w,d))},
$S:2}
C.eXD.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eXI.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eY8.prototype={
$0(){return this.a.f.fK()},
$S:0}
C.eY9.prototype={
$0(){var w=this.a
return w.m(new C.eY7(w))},
$S:0}
C.eY7.prototype={
$0(){return this.a.e=null},
$S:0}
C.eYa.prototype={
$0(){var w=this.a
return w.m(new C.eY6(w))},
$S:0}
C.eY6.prototype={
$0(){return this.a.x=null},
$S:0}
C.eYc.prototype={
$1(d){var w=this.a
return w.m(new C.eY5(w,d))},
$S:32}
C.eY5.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eYd.prototype={
$1(d){var w=this.a
return w.m(new C.eY4(w,d))},
$S:32}
C.eY4.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eYe.prototype={
$0(){var w=this.a
return w.m(new C.eY3(w))},
$S:0}
C.eY3.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eYf.prototype={
$1(d){var w=this.a
return w.m(new C.eY2(w,d))},
$S:32}
C.eY2.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eYg.prototype={
$1(d){var w=this.a
return w.m(new C.eY1(w,d))},
$S:32}
C.eY1.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eYh.prototype={
$0(){var w=this.a
return w.m(new C.eY0(w))},
$S:0}
C.eY0.prototype={
$0(){var w=this.a
return w.w=w.w.Fs("")},
$S:0}
C.eYi.prototype={
$0(){var w=this.a
return w.m(new C.eY_(w,this.b))},
$S:0}
C.eY_.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eYj.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bMY(D.a2t[v]),null))
return B.bV(A.bz,t,A.bq,8,8)},
$S:171}
C.eYb.prototype={
$1(d){var w=this.a
return w.m(new C.eXZ(w,d))},
$S:9}
C.eXZ.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eXJ.prototype={
$0(){var w=this.a
return w.m(new C.eXK(w,this.b,this.c))},
$S:0}
C.eXK.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.K(0,w)},
$S:0}
C.eXY.prototype={
$0(){var w=this.a
return w.m(new C.eXX(w,this.b))},
$S:0}
C.eXX.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fN8.prototype={
$1(d){return new C.a01(this.a,this.b,null)},
$S:z+42}
C.eXu.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eXv.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eXw.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aFO?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eXx.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eXy.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eXt(w,d))},
$S:2}
C.eXt.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eXz.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eXA.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.ha(A.bw,w.length),A.aN))},
$S:0}
C.fk0.prototype={
$1(d){return d.a===this.a},
$S:221}
C.ed5.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gawD(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cO6:D.d3q
t=D.xj.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xj.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bh0(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bOq(B.eG(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a7,A.x,B.a([A.K,D.bb9.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.X(p.a.c?A.eg:A.lS,D.xj,q,q,q,20),A.at,B.f4(A.A,B.nM(A.js,D.ffu,new C.ed4()),A.f,A.ei)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.fc7,A.f,q,q,new B.o(D.xj,q,q,B.m(6),q,q,A.n),q,q,q,q,L.aif,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:93}
C.ed4.prototype={
$1(d){return D.bUs.av(0,d)},
$S:66}
C.fEg.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fEh.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:221}
C.fEi.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fEj.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fEc.prototype={
$1(d){return d.a},
$S:z+18}
C.fEd.prototype={
$1(d){return d.b},
$S:z+19}
C.fMm.prototype={
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
C.ed3.prototype={
$1$2(d,e,f){var w=B.bn(d,!0,f)
A.d.fv(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dH(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f9V.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.ep(A.bg,!1,4279310375,A.aD,"",i,24,A.bn,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f0,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cm,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f9X.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.ep(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bn,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bf,4280172719,2,d,l,0,"",D.mE,D.cQ,g,e,f)},
$S:z+46}
C.f9W.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wt(0,"twinkle")
w=t===D.bf?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mE,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f9U.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fxE.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fxF.prototype={
$0(){return A.d.gL(D.GL)},
$S:z+49}
C.fxG.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fbV.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fDJ.prototype={
$1(d){var w=2450411,v=4281908728
C.dw(d,C.dx(4280171146,1,0,D.bf,w,0,0.52,0,0))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.04,0.48,0))
C.dw(d,C.dx(4294047225,0.38,0,D.bf,w,0,0.48,0.52,0.62))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDK.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dw(d,C.dx(4280172719,0.8,0,D.bf,w,0,0.36,0.58,0.1))
C.dw(d,C.dx(v,0.64,0,D.bf,w,0,0.28,0.64,0.18))
C.dw(d,C.dx(4282090230,0.44,0,D.bf,w,0,0.2,0.7,0.28))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.22,0.08,0.12))
C.dw(d,C.dx(u,0.004,0,D.fs,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fDL.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(4279080072,0.11,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4279310375,0.11,0,D.bf,w,0,1,0,0.89))
C.dw(d,C.dx(856528008,0.72,0,D.jI,w,0,0.28,0.72,0.14))
C.dw(d,C.dx(1426953352,0.2,0,D.jI,w,0,0.2,0.78,0.22))
C.dw(d,C.dx(v,0.004,0,D.fs,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fDW.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4279203438,0.55,0,D.jI,w,0,0.5,0.55,-0.05))
C.dw(d,C.dx(4280171146,0.5,0,D.jI,w,0,0.45,0.62,0.35))
C.dw(d,C.dx(4280640491,0.4,0.3,D.jH,w,0,0.35,0.68,0.55))
C.dw(d,C.dx(571438702,0.12,0,D.bf,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fE0.prototype={
$1(d){var w=4280472558
C.dw(d,C.dx(4279310375,0.75,-0.4,D.jH,2450411,0,0.75,-0.15,0.35))
C.dw(d,C.dx(w,0.55,0,D.bf,2450411,0,0.06,0.42,0.38))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.35,0.08,0.08))
C.dw(d,C.dx(2282478,0.12,0,D.bf,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fE1.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3423541034,0.48,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.12,-0.08,D.jI,w,0,1.1,-0.05,0.38))
C.dw(d,C.dx(858088427,0.35,0,D.bf,w,0,0.42,0.55,0.05))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fE2.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cN9[w]
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
C.fE3.prototype={
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
C.fE4.prototype={
$1(d){var w=4294967295
C.dw(d,C.dx(4280640491,1,0,D.bf,2450411,0,0.42,0,0))
C.dw(d,C.dx(4280110808,1.1,1.57,D.jH,2450411,0,0.18,0.35,-0.05))
C.dw(d,C.dx(w,0.006,0,D.fs,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fE5.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0))
C.dw(d,C.dx(u,0.012,0,D.bf,v,0,1,0,0.1))
C.dw(d,C.dx(u,0.006,0,D.fs,u,3,0.42,0.06,0.14))
C.dw(d,C.dx(403446057,0.68,0,D.jI,v,0,0.22,0.72,0.18))
C.dw(d,C.dx(w,0.1,0,D.bf,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fE6.prototype={
$1(d){var w=4278630100
C.dw(d,C.dx(4279310375,1.2,0.15,D.jI,2450411,0,0.55,-0.2,-0.1))
C.dw(d,C.dx(w,1.1,0.15,D.bf,2450411,0,0.08,0.15,-0.05))
C.dw(d,C.dx(1120295,0.18,0,D.bf,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fDM.prototype={
$1(d){var w=4292617766
C.dw(d,C.dx(4282714634,0.65,-0.2,D.jH,2450411,0,0.65,-0.1,0.45))
C.dw(d,C.dx(w,0.5,-0.15,D.jH,2450411,0,0.5,0.05,0.55))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fDN.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4278413729,0.35,3.14,D.jH,w,0,0.45,-0.05,0.7))
C.dw(d,C.dx(4278355143,0.3,3.14,D.jH,w,0,0.4,0.25,0.75))
C.dw(d,C.dx(4279150057,0.32,3.14,D.jH,w,0,0.5,0.55,0.72))
C.dw(d,C.dx(863884284,0.22,0,D.eL,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fDO.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dw(d,C.dx(w,0.14,0,D.bf,v,0,0.14,0.02,0.02))
C.dw(d,C.dx(2282478,0.14,0,D.bf,u,3,0.14,0.84,0.02))
C.dw(d,C.dx(w,0.28,0,D.jI,v,0,0.35,-0.08,0.78))
C.dw(d,C.dx(u,0.22,0.5,D.jH,v,0,0.3,0.72,0.78))
C.dw(d,C.dx(w,0.006,0,D.fs,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fDP.prototype={
$1(d){var w=4293571336,v=1156231944
C.dw(d,C.dx(1841431,0.92,0,D.bf,w,3,0.92,0.04,0.04))
C.dw(d,C.dx(v,0.15,0,D.jH,2450411,0,0.15,0.02,0.02))
C.dw(d,C.dx(v,0.15,3.14,D.jH,2450411,0,0.15,0.83,0.83))
C.dw(d,C.dx(w,0.004,0,D.fs,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fDQ.prototype={
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
C.fDR.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3708753706,0.42,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(v,0.06,-0.05,D.jI,w,0,1,0,0.38))
C.dw(d,C.dx(859356664,0.25,0,D.eL,w,0,0.25,0.7,0.08))
C.dw(d,C.dx(v,0.006,0,D.fs,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fDS.prototype={
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
C.fDT.prototype={
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
C.fDU.prototype={
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
C.fDV.prototype={
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
C.fDX.prototype={
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
C.fDY.prototype={
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
C.fDZ.prototype={
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
C.fE_.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(3423541034,0.55,0,D.bf,w,0,1,0,0))
C.dw(d,C.dx(4009754623,0.56,0.45,D.jI,w,0,0.56,0.22,0.18))
C.dw(d,C.dx(3439329279,0.44,0.45,D.jI,w,0,0.44,0.28,0.24))
C.dw(d,C.dx(v,0.07,0,D.bf,w,0,0.22,0.34,0.62))
C.dw(d,C.dx(v,1,0,D.bf,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fvu.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fvv.prototype={
$0(){return A.d.gL($.bDt())},
$S:z+52}
C.fjz.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fjy.prototype={
$1(d){return C.hT1(d,this.a,this.b)},
$S:z+53}
C.fEp.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vG(1.0375,1.01875,1)
return new B.fO(v,u,new C.aS4(B.hIL(A.uT,C.hT4(w.c,w.d,v,u),t)))},
$S:417}
C.dTC.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.dTB.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c0(w,new B.o(w,w,w,w,w,new B.bT(A.JJ,1.2,A.x,w,0,u.d,w,w),A.n),A.be),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jz(new B.an(A.W,w,A.b0,A.r,B.a([t,new B.ev(B.b3(w,w,w,new C.bdU(u.a,r,q,r),A.au),w),B.av(new B.ki(r,new C.dTA(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:345}
C.dTA.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ew.aw(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hU(B.fL(i,A.A,r,r,A.cj,A.bS,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fT(A.A,0,6.283185307179586,A.x,t,r,new B.ml(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqu(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cR(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaJZ(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.ed(A.A,new B.D(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:105}
C.eWI.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:66}
C.c7Z.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bL:A.bG
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hG.j(0.4),A.J,14)],x.V):v
w=B.dk(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eF,v,72,v,v,v,v,v)
return B.aE(v,new B.a7(112,v,B.v(B.a([w,A.h0,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bL:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c8_.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fs(""))},
$S:0}
C.c80.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.Nd(v.Fs(u),!0,!1,null),!0,null),d.b,new C.c81(w,this.c,d),v.a===u)},
$S:z+54}
C.c81.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hn5(u.b,t.c.Fs(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fKM.prototype={
$1(d){return new C.YX(this.a,null)},
$S:z+55}
C.d7p.prototype={
$0(){var w=this.a
w.d=w.gvA().baz("data:"+this.b+";base64,"+A.cS.gcw().aJ(this.c));++w.r},
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
return w.d=w.gvA().aCZ(this.b)},
$S:0}
C.d7x.prototype={
$0(){var w=this.a
return w.m(new C.d7r(w))},
$S:0}
C.d7r.prototype={
$0(){var w=this.a
return w.d=w.gvA().baz("")},
$S:0}
C.d7y.prototype={
$1(d){var w=this.a
return w.m(new C.d7q(w,d))},
$S:2}
C.d7q.prototype={
$0(){var w=this.a
return w.d=w.gvA().baG(this.b)},
$S:0}
C.d7z.prototype={
$0(){var w=this.a
w=w.gvA().baG(w.gawE().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fKL.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fKK(w),null)},
$S:21}
C.fKK.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bl(!0,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bV,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.ftB,A.at,D.ftR,A.aB,new C.aZm(v.a,new C.fKJ(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_Q,w,w,w,w,A.M4,w,w,w)},
$S:191}
C.fKJ.prototype={
$1(d){this.b.$1(new C.fKI(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fKI.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fN7.prototype={
$1(d){return D.fTV},
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
C.fB5.prototype={
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
C.fB9.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.ftv.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.ftw.prototype={
$1(d){var w=null,v=this.a
return B.bl(!0,new B.D(E.xG,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fco,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.df(D.Gi,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.ftt(d),B.bm(A.bY,w,w,w,A.c,w,A.cl,w,w,w,w,w)),A.S,B.ey(A.o3,D.TL,new C.ftu(d),B.di(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.cl,w,w,Q.wL,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:24}
C.ftt.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.ftu.prototype={
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
u=C.hOT(b2.h(0,"type"))
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
n=A.ay0[A.o.D(b4,0,8)]
m=D.cPZ[A.o.D(w,0,1)]
l=C.hSu(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.auK[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hVi(b2.h(0,"shape"))
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
a3=C.hip(b2.h(0,"textTransition"))
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
$1(d){return C.h94(B.a2(d,x.N,x.z))},
$S:z+64}
C.cdG.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cdH.prototype={
$0(){return A.d.gL(D.a27)},
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
$1(d){return new B.K(d,new C.cdx(),B.U(d).k("K<1,S>")).fb(0,new C.cdy())},
$S:z+69}
C.cdx.prototype={
$1(d){return d.f},
$S:z+70}
C.cdy.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:705}
C.cdz.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hEA(d)},
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
C.fBI.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.K(0,j)
break}}}},
$S:z+73}
C.fBE.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fBF.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fBG.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fBH.prototype={
$2(d,e){return d.b===D.f0&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cdk.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i2Z(b2,b3),b5=B.a3(b4).k("bc<2>")
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
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.jx.aw(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kF(A.k.D(1-k,0,1),B.dU(B.ed(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
a2=a3===0?a5:new B.iG(B.wa(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cm)a7=D.mE
p.push(s.$5(i.c,i.d,i.e,i.f,C.hkE(a7,a6,r.$1(i))))}}return B.c0(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.be)},
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
C.fEw.prototype={
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
C.fDD.prototype={
$1(d){return new C.ad0(this.a,this.b,null)},
$S:z+78}
C.epv.prototype={
$0(){return this.a.Pw(this.b,C.i6k(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.epw.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pw(this.b,C.i6m(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.epx.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pw(this.b,C.i6l(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.epy.prototype={
$0(){Y.hko()
B.a5(this.a,!1).O(null)},
$S:0}
C.cdi.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cdh.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nz),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lO(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bS:A.du
return B.fL(t,A.A,o,new C.cdg(),A.cj,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cdg.prototype={
$3(d,e,f){return D.abh},
$S:218}
C.fBD.prototype={
$2(d,e){var w,v,u,t=null,s=B.m(6),r=this.a
if(r.f!=null){w=B.b0(r.e)
v=r.f
v.toString
v=new B.a8(A.ax,A.aC,A.x,B.a([w,B.b0(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b0(r.e):t
r=r.z
r=B.dd(r,0,B.dJ(6,"count",x.S),B.U(r).c)
u=r.$ti.k("K<ak.E,cL>")
r=B.C(new B.K(r,new C.fBC(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c0(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.be),A.aq)},
$S:1692}
C.fBC.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0u(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fm6.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fm4(d))
w=B.aI(d,A.bV,x.w).w
v=B.m(22)
u=B.I(A.bG,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fM,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.B(B.a([B.E(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.k9,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zE,q,q,!0,q,q,new C.fm5(p,d),q,B.fv(q,q,A.bj,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.F9,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aB,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.az,q,u,v,t,q,A.n),q,q,q,A.fJ,A.Fi,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:267}
C.fm4.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).px())B.a5(w,!0).eK()},
$S:0}
C.fm5.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a5(this.b,!0).eK()},
$S:0}
C.f4d.prototype={
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
case 14:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jz(u.b,A.r,new C.aIQ(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b0,A.r,B.a([u.c,B.jz(u.b,A.r,new C.aIQ(1-r,t))],x.p),t)
case 16:v=D.b3d.aw(0,r)
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
return C.hkE(v,w,e)},
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
s=B.U(v).k("K<1,cL>")
q=B.C(new B.K(v,new C.cd9(q,w,e.b,e.d),s),s.k("ak.E"))
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
C.ecM.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.E(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aMW.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i2I(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dp()
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
C.eUl.prototype={
$1(d){var w
$.W()
w=B.N()
w.b=A.ae
w.c=d
w.e=A.fB
return w},
$S:1693}
C.fzd.prototype={
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
w.push(B.ns(s.d,A.aq,new C.beq(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpn(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b0,A.r,w,r),r),r,r,r)},
$S:259}
C.foZ.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:323}
C.evJ.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CF(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.evH(),new C.evI(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.evH.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:194}
C.evI.prototype={
$0(){return J.fp(this.a)},
$S:1696}
C.es6.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.es7.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.es8.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.etH.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.etv.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.etw.prototype={
$1(d){return d.hC()},
$S:z+81}
C.eru.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.euP.prototype={
$0(){this.a.tt()},
$S:0}
C.evF.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oe()
w.JS()},
$S:0}
C.etF.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oe()
w.JS()},
$S:0}
C.evs.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.evt.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.evu.prototype={
$1(d){return d.a},
$S:z+22}
C.evv.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aN),$.aw())},
$S:236}
C.evw.prototype={
$0(){return B.jQ(!0,null,!0,!0,null,null,!1)},
$S:706}
C.eqT.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.evG.prototype={
$0(){},
$S:0}
C.esO.prototype={
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
C.eqR.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xo()},
$S:0}
C.eqS.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xo()},
$S:0}
C.eta.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.etb.prototype={
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
C.etc.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esN.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TK,w,w,!0,w,w,new C.esM(d),w,w)],x.p),w,w,w,D.fvm,w,w,w,w,D.fcQ,w)},
$S:20}
C.esM.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esK.prototype={
$1(d){var w=null
return B.ek(B.a([B.bK(!1,A.TK,w,w,!0,w,w,new C.esJ(d),w,w)],x.p),w,w,w,D.fgP,w,w,w,w,D.fey,w)},
$S:20}
C.esJ.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esL.prototype={
$0(){},
$S:0}
C.es2.prototype={
$1(d){return this.a.aZX(C.bBu(d))},
$S:z+7}
C.es3.prototype={
$1(d){return this.a.aes(C.bBu(d))},
$S:z+7}
C.esU.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fvq,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Pk(A.vE,D.aw5,"HATI YA KUHOWA","Hati ya mahari",new C.esP(d),w),A.S,new C.Pk(A.h9,D.d1g,"HATI YA KUHOWESHA","Hati ya kupokea",new C.esQ(d),w),A.S,new C.Pk(A.i1,D.cOc,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.esR(d),w),A.S,new C.Pk(A.hM,D.cMu,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.esS(d),w)],v)
if(this.a.gaaX())A.d.v(u,B.a([A.S,new C.Pk(A.iY,D.cxy,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.esT(d),w)],v))
return B.bl(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xG,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:24}
C.esP.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.esQ.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.esR.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.esS.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.esT.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.esV.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()},
$S:0}
C.eqV.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eqW.prototype={
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
C.et5.prototype={
$1(d){return d.b===D.lu},
$S:z+4}
C.et6.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.e0(new C.et3(w,this.a,v),null)},
$S:21}
C.et3.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.et4(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aS:A.ak,i=l?A.bo:A.bK,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bG:A.aL,A.q,1),e=x.p,d=B.B(B.a([B.E(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cD,j,q,q,q,q),q,q,q,new C.et_(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BZ[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgV(t,u.b,p.a===t,i,k,new C.et0(v,m),q))}a1=B.bV(A.bz,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BU[w]
s.a=null
t=s.a=r.a
u.push(new C.bgU(t,r.b,p.b===t,k,j,new C.et1(s,m),q))}return B.bl(!0,B.p(q,B.cd(B.v(B.a([d,A.aQ,a0,A.S,a1,A.by,v,A.S,B.bV(A.bz,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.ey(D.bQE,D.fxO,new C.et2(o,n),B.di(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aYm,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tB,D.bsI,q,q,q),!0,!1,A.af,!0,!0)},
$S:85}
C.et4.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.esY(w.a,d,e))
w.b.d3(new C.esZ(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.esY.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.esZ.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.et_.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.et0.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.et1.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.et2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gr(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d3(new C.esX(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esX.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.et8.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.et9.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bo(v,new C.et7(t.d))
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
C.et7.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etq.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.etr.prototype={
$1(d){return d.w},
$S:z+82}
C.ets.prototype={
$2(d,e){return d>e?d:e},
$S:88}
C.ett.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aS:A.ak,r=u?A.bo:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bG:A.aL,A.q,1),n=B.aI(d,A.bV,x.w).w,m=w.a,l=x.p,k=w.b
return B.bl(!0,B.p(v,B.v(B.a([B.B(B.a([B.p(v,D.bKn,A.f,v,v,D.aZK,v,38,v,v,v,v,v,38),A.bd,B.E(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cD,s,v,v,v,v),v,v,v,new C.etn(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aB,new B.dq(1,A.cn,B.hJ(v,new C.eto(m,k,w.c,s,w.d,t,r),k.length,A.fz,v,A.ah,new C.etp(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tB,A.Yu,v,v,v),!0,!1,A.af,!0,!0)},
$S:24}
C.etn.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.etp.prototype={
$2(d,e){return A.ac},
$S:36}
C.eto.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bNs,q,q,q,new C.etl(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.D(D.buX,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.bs(q,new B.b4(4,B.m(16),A.Y),q,A.eQ,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aY1),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.etm(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.an,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:476}
C.etl.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i8r(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gex()?p.a:q.a.length
n=p.gex()?p.b:q.a.length
m=A.a.oJ(q.a,o,n,s)
r.bO(0,new B.bb(m,B.ha(A.bw,o+s.length),A.aN))
l.aix(k,m)
l.pi()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etm.prototype={
$1(d){var w=this.a
w.aix(this.b.a,d)
w.pi()},
$S:2}
C.etu.prototype={
$0(){},
$S:0}
C.esW.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.erb.prototype={
$0(){},
$S:0}
C.erc.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hlX(this.b,w,!0)
w=this.a
w.r=null
w.xo()},
$S:0}
C.erd.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.ere.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bo(v,new C.era(t.d))
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
C.era.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.etA.prototype={
$1(d){return B.oN(new C.etz(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:133}
C.etz.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.D(E.ahV,B.v(B.a([D.ft0,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.ig(!0,w,e,A.y,D.eQQ,new C.ety(this.a,this.b),20,A.tE,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:436}
C.ety.prototype={
$2(d,e){var w=null,v=D.GL[e],u=C.hEv(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fK,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eKY,A.f,w,w,new B.o(A.dN.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.ne,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.B(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bm,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.etx(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:76}
C.etx.prototype={
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
C.etB.prototype={
$0(){var w=this.a
w.e=this.b.hC()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xo()},
$S:0}
C.epQ.prototype={
$0(){var w,v=this.a,u=v.gqk(),t=C.rq(4294967295,null,0,0,null,C.cD(),D.mD,"","","",D.dd),s=this.b
C.cdF(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cy){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.er9.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cD())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gS(v)
if(u.b(t)){s=Date.now()
r=$.j0
$.j0=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.h94(q));++v.f},
$S:0}
C.er7.prototype={
$0(){var w=this.a
A.d.cC(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.etJ.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cC(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.er3.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bo(v.d,new C.er2(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.er2.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.etI.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eqU.prototype={
$0(){var w=this.a.r
return new B.as(new B.bb(w,A.b4,A.aN),$.aw())},
$S:236}
C.erv.prototype={
$0(){return B.jQ(!0,null,!0,!0,null,null,!1)},
$S:706}
C.evq.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.evr.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asG(w).fK()
v=u.Wd(w)
v.sta(B.ha(A.bw,v.a.a.length))},
$S:8}
C.euQ.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.Xc(v)
if(u!=null&&u.b===D.cQ)w.Wd(u).saV(0,u.r)}else w.w=null},
$S:0}
C.epR.prototype={
$0(){var w=C.cD(),v=this.a,u=C.ep(A.bg,!1,v.gqk().e.l(),A.aD,"",4280640491,24,A.bn,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.bf,4280172719,2,"Tap to edit text",0,0,"",D.cm,D.cQ,0.7,0.15,0.2)
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.epO.prototype={
$0(){var w=C.cD(),v=this.a,u=C.ep(A.bg,!1,4279310375,A.aD,"",v.gqk().c.j(0.25).l(),24,A.bn,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqk().c.l(),2,"",0,0,"",D.cm,D.f0,0.25,0.3,0.3)
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.epE.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bn,A.a5,"",0.55,C.cD(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,0.6,0.2,0.18),v=this.a
A.d.K(v.gdr().z,w)
v.r=w.a},
$S:0}
C.epB.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bXp],x.p)
for(w=J.aV(this.a);w.C();){v=w.gS(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaj8().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bI5,r,r,r,r,new C.epA(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bl(!0,B.cz(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:24}
C.epA.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.epC.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cD(),u=this.b,t=A.R.ao(u.ag(),null),s=C.ep(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bn,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.bf,4280172719,2,t,0,0,"",D.cm,D.a4G,w,0.5-w/2,0.07)
t=this.a
A.d.K(t.gdr().z,s)
t.r=s.a},
$S:0}
C.er5.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.er6.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bo(v.gdr().z,new C.er4(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.er4.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eqi.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f0){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eqj(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eqj.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eqn.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eqo(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.eqo.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eql.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.eqm(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eqm.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.f6(w,new C.eqk()),u=this.a;v.C();)w.gS(0).Q=u},
$S:z+1}
C.eqk.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eqh.prototype={
$0(){return C.cdF(this.b,this.c,this.a.gqk())},
$S:0}
C.etk.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.evz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evA.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.evB.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evC.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bd(s,new C.evy(v))
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
C.evy.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.ev5.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ab0(),s=w.b,r=u.ab1(A.fb,A.ku,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.N,r,A.by,B.p(v,B.B(B.a([B.E(u.aU6(w.c,A.ak),1),new B.D(A.fr,B.p(v,D.bIb,A.f,v,v,new B.o(A.fb.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aU6(s,A.fb),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bD,v,v,v),A.by,u.aU9(A.fb,d,D.bEh,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bWm(A.aR,d,A.tS,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aU7(d,"Not now"))
return new C.JF(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ev4.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.JF(B.v(B.a([v.ab0(),A.N,v.ab1(A.aR,D.bDX,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bV,x.w).w.a.b*0.42),B.hJ(w,new C.ev2(v,u,d),u.length,w,w,A.ah,new C.ev3(),!0),w),A.aB,v.aU7(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.ev3.prototype={
$2(d,e){return A.S},
$S:36}
C.ev2.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.B(B.a([B.p(w,D.amN,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bUn,A.n),w,42,w,w,w,w,w,42),A.bd,B.E(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nw,w,w,w),A.cV,B.d("Updated "+this.a.Px(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ey,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bD,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.ev1(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:76}
C.ev1.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.euZ.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.ab0()
t=t.ab1(A.aF,A.u0,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.JF(B.v(B.a([s,A.N,t,A.by,B.B(B.a([B.E(B.dT(A.a7Z,new C.euX(d),B.di(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cl,u,new B.b7(B.m(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.av,B.E(B.bG(D.ff8,new C.euY(d),B.bm(A.fb,u,u,u,A.c,u,A.cl,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.euX.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.euY.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.ev0.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ab0(),s=w.b,r=u.ab1(A.aV,A.eg,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.B(B.a([B.E(u.au_("Names",""+w.c),1),A.ab,B.E(u.au_("Fields",""+w.d),1),A.ab,B.E(u.au_("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bm(A.bj,v,v,v,A.c,v,A.xw,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.JF(B.v(B.a([t,A.N,r,A.aQ,p,A.by,B.bG(B.d("Open "+s,v,v,v,v,v,v,A.nu,v,v,v),new C.ev_(d),o),A.S,u.aU8(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.ev_.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.erZ.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.erY.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.euR.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.evp.prototype={
$1(d){var w=this.a,v=this.b
return new C.a_8(A.d.dL(w.d,new C.evn(v),new C.evo(v)).hC(),w.f,null)},
$S:z+84}
C.evn.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.evo.prototype={
$0(){return this.a},
$S:z+85}
C.epJ.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bD,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.hs,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bJY,w,w,w,w,new C.epH(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fd9,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bL6,w,w,w,w,new C.epI(d),!1,w,w,w,w,w,D.fyZ,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dn,w,w,w),w,w,w))
return B.bl(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
C.epH.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.epI.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.epK.prototype={
$0(){var w=this.b,v=w.c,u=C.ep(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bn,A.a5,"",0.84,C.cD(),w.b,"","",0,!1,"",0,D.bf,4280172719,2,v,0,0,"",D.cm,D.Rx,0.88,0.06,0.08)
v=this.a
A.d.K(v.gdr().z,u)
v.r=u.a},
$S:0}
C.epL.prototype={
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
C.epP.prototype={
$0(){var w,v=C.cD(),u=this.a,t=u.e
t=(t==null?null:C.kv(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.ep(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bn,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l1,0.35,0.55,0.62)
A.d.K(u.gdr().z,w)
u.r=w.a},
$S:0}
C.epG.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b1L(o)
w=C.cD()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.ep(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ed(v.db,"marriage_sign_",""),4280640491,24,A.bn,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.l1,s,u,t)
A.d.K(p.gdr().z,q)
A.d.bo(p.gdr().z,new C.epF(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i2r(p)}},
$S:0}
C.epF.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.etG.prototype={
$0(){var w=this.a,v=this.b
w.b1L(v)
this.c.at=v.a
w.r=null},
$S:0}
C.evx.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.es1.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bo(r.z,new C.es0())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.es0.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eqr.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eqs.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tt()},
$S:8}
C.epD.prototype={
$0(){var w=C.ep(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bn,A.a5,"",0.8,C.cD(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cm,D.lu,0.8,0.1,0.1),v=this.a
A.d.K(v.gdr().z,w)
v.r=w.a},
$S:0}
C.ert.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.epM.prototype={
$0(){var w=this.a,v=this.b
A.d.K(w.gdr().z,v)
w.r=v.a},
$S:0}
C.epV.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.epW.prototype={
$0(){var w=this.b.hC(),v=C.cD(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.ep(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.K(t.gdr().z,f)
t.r=f.a},
$S:0}
C.epX.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.epU(v))
if(u>=0&&u<w.length-1){A.d.cC(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.epU.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eq7.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.epT(v))
if(u>0){A.d.cC(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.epT.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eqa.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.eqb.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.eqc.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.eqd.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eqe.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eqf.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eqg.prototype={
$1(d){return d.length!==0},
$S:3}
C.epY.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cD()
A.d.K(v,C.CK(w.gqk().c.j(0.18).l(),0.1,u,D.bf,0,2,1,0,0))
u=w.gdr().z
v=C.cD()
A.d.K(u,C.iU(A.bg,!1,w.gqk().d.l(),A.aD,18,A.bn,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.epZ.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cD()
A.d.K(u,C.CK(v.gqk().c.j(0.12).l(),0.1,t,D.bf,0,2,1,0,0.9))
t=v.gdr().z
u=C.cD()
w=C.bCc()
A.d.K(t,C.iU(A.L,!1,v.gqk().e.l(),A.aD,12,A.bn,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.eq_.prototype={
$0(){A.d.K(this.a.gdr().z,C.CK(1727914055,0.12,C.cD(),D.bf,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eq0.prototype={
$0(){var w=4279310375
A.d.K(this.a.gdr().z,C.CK(w,0.08,C.cD(),D.bf,w,2,0.5,0.2,0.4))},
$S:0}
C.eq1.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cD()
A.d.K(v,C.CK(w.gqk().c.j(0.35).l(),0.12,u,D.Cz,4280640491,2,0.2,0.15,0.55))
A.d.K(w.gdr().z,C.iU(A.bg,!1,4279310375,A.aD,18,A.bn,A.a5,0.15,C.cD(),"Important note",0,D.qa,0.5,0.38,0.52))},
$S:0}
C.eq2.prototype={
$0(){var w=this.a
A.d.K(w.gdr().z,C.CK(4294507260,0.78,C.cD(),D.bf,4291548641,1.5,0.84,0.08,0.1))
A.d.K(w.gdr().z,C.iU(A.bg,!1,4279179050,A.aD,16,A.bn,A.a5,0.7,C.cD(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bCc()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.eq3.prototype={
$0(){var w=this.a
A.d.K(w.gdr().z,C.CK(4294897802,0.28,C.cD(),D.bf,4294626325,2,0.3,0.62,0.12))
A.d.K(w.gdr().z,C.iU(A.bg,!1,4285611794,A.aD,15,A.bn,A.a5,0.24,C.cD(),"Sticky note",0,D.aFD,0.26,0.64,0.14))},
$S:0}
C.eq4.prototype={
$0(){var w=4280640491,v=this.a
A.d.K(v.gdr().z,C.CK(4293060848,0.04,C.cD(),D.bf,4291548641,2,0.8,0.1,0.48))
A.d.K(v.gdr().z,C.CK(w,0.04,C.cD(),D.bf,w,2,0.55,0.1,0.48))},
$S:0}
C.eq5.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.iU(A.bg,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cD(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.HI,0.42,0.06,0.18))
A.d.K(v.gdr().z,C.iU(A.bg,!1,w,A.aD,18,A.bn,A.a5,0.62,C.cD(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ug,0.42,0.52,0.18))},
$S:0}
C.eq6.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.CK(858088427,0.62,C.cD(),D.bf,4280640491,2,0.42,0.05,0.18))
A.d.K(v.gdr().z,C.CK(856004201,0.62,C.cD(),D.bf,4278556265,2,0.42,0.53,0.18))
A.d.K(v.gdr().z,C.iU(A.bg,!1,w,A.aD,20,A.bn,A.H,0.1,C.cD(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.K(v.gdr().z,C.iU(A.bg,!1,w,A.aD,20,A.bn,A.H,0.1,C.cD(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.eq8.prototype={
$0(){var w=4279310375,v=this.a
A.d.K(v.gdr().z,C.CK(4294967295,0.36,C.cD(),D.bf,w,2,0.24,0.38,0.28))
A.d.K(v.gdr().z,C.iU(A.L,!1,w,A.aD,14,A.bn,A.a5,0.12,C.cD(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.eq9.prototype={
$0(){return C.cdF(this.b,D.Ry,this.a.gqk())},
$S:0}
C.ers.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a6j.t(0,d),t=this.a
return t.b6I(d,v===d,A.aZ,this.c,new C.err(t,u,d,w),u)},
$S:z+25}
C.err.prototype={
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
C.bCZ(r,new C.erq(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erq.prototype={
$0(){return this.a.d3(new C.erp(this.b,this.c))},
$S:0}
C.erp.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.epN.prototype={
$0(){var w,v=this.a,u=v.gqk(),t=C.rq(4294967295,null,0,0,null,C.cD(),D.mD,"","","",D.dd),s=this.b
C.cdF(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Cy){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eqv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i8u(p,q.d,s,new C.equ(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tt(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.equ.prototype={
$1(d){return this.bjo(d)},
bjo(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eqt(t,d))
w=2
return B.b(t.tt(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.eqt.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gS(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.eqw.prototype={
$0(){return this.a.bHi()},
$S:0}
C.eqx.prototype={
$0(){return this.a.aPn("Class Presentation",!0)},
$S:0}
C.eqy.prototype={
$1(d){return this.a.bIe(d.b,this.b,d.a)},
$S:z+88}
C.er8.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bV,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.etj.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aI(d,A.eE,x.w).w.f.d),new B.e0(new C.eti(this.a,this.b),null),null)},
$S:60}
C.eti.prototype={
$2(d,e){return B.oN(new C.eth(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:657}
C.eth.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.az:A.c,s=B.I(u?A.bG:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.D(A.ahn,B.B(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bK(!1,A.zE,v,v,!0,v,v,new C.etf(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cz(B.a([p.aS6(u,!0,!0,new C.etg(p,w.d))],q),e,D.bqz,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kJ,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.etf.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.etg.prototype={
$0(){this.b.$1(new C.etd())
var w=this.a
if(w.c!=null)w.m(new C.ete())},
$S:0}
C.etd.prototype={
$0(){},
$S:0}
C.ete.prototype={
$0(){},
$S:0}
C.euS.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:94}
C.euT.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,new C.ayj(this.a,null),0.94+w*0.06,null,null),w)},
$S:437}
C.euU.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:94}
C.euV.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,new C.bcg(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:437}
C.euW.prototype={
$0(){return A.d.ck(this.a.d,0,C.VC(this.b))},
$S:0}
C.epS.prototype={
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
t=B.p(p,B.X(A_.a_i,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bT(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tV(A.fw,B.p(p,B.v(B.a([t,A.aB,q,A.am,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.aA:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ex,p,p,1/0),14,!1),A.aq)},
$S:304}
C.eqX.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.eqY.prototype={
$1(d){return d.length!==0},
$S:3}
C.eqZ.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.kt
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_P:A.Bn}return w},
$S:707}
C.er1.prototype={
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
q=A.d.gL(r)
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
r=k.bIc(n,A.d.gL(r),t)
return B.p(l,B.bw(j,new B.a7y(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.M1,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.o1,t?A.aA:A.bJ,l,l,l,l),l,l,l,new C.er_(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.er0(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.da,l,l,l,l)},
$S:93}
C.er0.prototype={
$0(){return this.a.aes(this.b)},
$S:0}
C.er_.prototype={
$0(){return this.a.AI(this.b,this.c)},
$S:0}
C.ess.prototype={
$0(){var w=this.a
w.b5m()
w.m(new C.esr())},
$S:0}
C.esr.prototype={
$0(){},
$S:0}
C.est.prototype={
$1(d){return this.a.aix(this.b.a,d)},
$S:2}
C.esu.prototype={
$0(){this.a.d3(new C.esq(this.b))},
$S:0}
C.esq.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.esv.prototype={
$0(){this.a.d3(new C.esp(this.b))},
$S:0}
C.esp.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.esw.prototype={
$0(){this.a.d3(new C.eso(this.b))},
$S:0}
C.eso.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mJ},
$S:0}
C.esx.prototype={
$0(){this.a.d3(new C.esn(this.b))},
$S:0}
C.esn.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.esy.prototype={
$0(){var w=this.a
w.d3(new C.esm(w,this.b))},
$S:0}
C.esm.prototype={
$0(){var w=this.b
return w.as=this.a.c26(w.as)},
$S:0}
C.esz.prototype={
$0(){return this.a.d3(new C.esl(this.b))},
$S:0}
C.esl.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.esA.prototype={
$0(){return this.a.d3(new C.esk(this.b))},
$S:0}
C.esk.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.esd.prototype={
$0(){return this.a.a1E(this.b.a)},
$S:0}
C.ese.prototype={
$0(){this.a.a_b()
return null},
$S:0}
C.esf.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bV,x.w).w.a.a<900)w.aeL()
else w.m(new C.esc(w))},
$S:0}
C.esc.prototype={
$0(){return this.a.as=!0},
$S:0}
C.esg.prototype={
$0(){this.a.d3(new C.esb(this.b))},
$S:0}
C.esb.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.esh.prototype={
$0(){return this.a.d3(new C.esa(this.b))},
$S:0}
C.esa.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.esi.prototype={
$0(){return this.a.d3(new C.es9(this.b))},
$S:0}
C.es9.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.esj.prototype={
$0(){return this.a.az0(null)},
$S:0}
C.erl.prototype={
$0(){this.a.Dp()
return null},
$S:0}
C.erm.prototype={
$0(){this.a.a9y()
return null},
$S:0}
C.ero.prototype={
$1(d){return this.bjp(d)},
bjp(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(B.bQ(A.az,null,new C.erg(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d3(new C.erh(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.eri(r))
s=s.c.I(x.q).f
s.T(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.erj(r))
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
return B.b(C.hn4(q,new C.Ek(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d3(new C.erk(r,p))
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
C.erg.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e7W],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bK4:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.erf(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dn,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bl(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
C.erf.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.erh.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eri.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.erj.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.erk.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.ern.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zz(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zz(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zz(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agy(r?t:s.db)
s=s==null?t:s.b
return B.a([D.ed_,q,v,u,B.zz(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:135}
C.evD.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC9(w,v)}},
$S:0}
C.evE.prototype={
$0(){this.a.Dp()
return null},
$S:0}
C.esD.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bUh:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bK
if(s)v=A.c
else v=this.b?A.aS:A.bv
return new B.D(A.fz,B.aE(u,B.dk(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eF,u,u,u,A.lN,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.esC(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:127}
C.esC.prototype={
$0(){var w=this.a
return w.m(new C.esB(w,this.b))},
$S:0}
C.esB.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.esE.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2E:E.awb
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbLC():t.gbHD()
return B.hs(B.aE(u,B.p(u,D.ame,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.esF.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i7K(v,w.a.c)},
$S:0}
C.eu1.prototype={
$0(){return this.b.v8(this.a.a)},
$S:0}
C.eu2.prototype={
$0(){return this.a.v8(D.mD)},
$S:0}
C.eu3.prototype={
$0(){return this.a.v8(D.HG)},
$S:0}
C.eue.prototype={
$0(){return this.a.v8(D.HH)},
$S:0}
C.eup.prototype={
$0(){return this.a.v8(D.HF)},
$S:0}
C.euA.prototype={
$0(){return this.a.q5("lab_report")},
$S:0}
C.euH.prototype={
$0(){return this.a.q5("rubric")},
$S:0}
C.euI.prototype={
$0(){return this.a.q5("minutes")},
$S:0}
C.euJ.prototype={
$0(){return this.a.q5("agenda")},
$S:0}
C.euK.prototype={
$0(){return this.a.q5("timeline")},
$S:0}
C.euL.prototype={
$0(){return this.a.q5(this.b.a)},
$S:0}
C.eu4.prototype={
$0(){this.a.Vm()
return null},
$S:0}
C.eu5.prototype={
$0(){this.a.Vg()
return null},
$S:0}
C.eu6.prototype={
$0(){return this.a.q5("table")},
$S:0}
C.eu7.prototype={
$0(){return this.a.q5("sticky")},
$S:0}
C.eu8.prototype={
$0(){return this.a.q5("divider")},
$S:0}
C.eu9.prototype={
$0(){return this.a.q5("header_bar")},
$S:0}
C.eua.prototype={
$0(){return this.a.oZ(D.bf)},
$S:0}
C.eub.prototype={
$0(){return this.a.oZ(D.eL)},
$S:0}
C.euc.prototype={
$0(){return this.a.oZ(D.jH)},
$S:0}
C.eud.prototype={
$0(){return this.a.oZ(D.Cz)},
$S:0}
C.euf.prototype={
$0(){return this.a.oZ(D.jI)},
$S:0}
C.eug.prototype={
$0(){return this.a.oZ(D.l2)},
$S:0}
C.euh.prototype={
$0(){return this.a.oZ(D.fs)},
$S:0}
C.eui.prototype={
$0(){this.a.H5()
return null},
$S:0}
C.euj.prototype={
$0(){this.a.N1()
return null},
$S:0}
C.euk.prototype={
$0(){return this.a.q5("quote")},
$S:0}
C.eul.prototype={
$0(){return this.a.a7H()},
$S:0}
C.eum.prototype={
$0(){this.a.a_h()
return null},
$S:0}
C.eun.prototype={
$0(){var w=this.a
return w.m(new C.etS(w))},
$S:0}
C.etS.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.euo.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o5(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eu_(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eu_.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.euq.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jP()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a6k.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b3
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a6k.t(0,q))u.push(B.ao(s,B.p(s,D.NM,A.f,s,s,D.DQ,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.fz,B.aE(s,B.hs(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.etZ(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.etZ.prototype={
$0(){this.a.a7Z(this.b)
return null},
$S:0}
C.eur.prototype={
$0(){this.a.a7Y(this.b)
return null},
$S:0}
C.eus.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hEw(d),p=this.a,o=B.m(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bj:A.b3
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rq(4294967295,r,0,0,r,"preview_"+w,D.q9,"","","",D.dd)
C.hk1(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hll(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.amO,A.f,r,r,D.DQ,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iU,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cV,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.aA:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.etY(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.etY.prototype={
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
break}s.d3(new C.etO(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.etO.prototype={
$0(){return C.hk1(this.a,this.b.a)},
$S:0}
C.eu0.prototype={
bjq(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a6j.t(0,d)
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
$2(d,e){return this.bjq(d,e)},
$S:z+91}
C.euM.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("K<1,r>")
v=B.C(new B.K(d,new C.euO(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.B(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.euO.prototype={
$1(d){var w=this
return w.a.b6I(d,w.b===d,w.c,w.d,new C.euN(w.e,d),!D.a6j.t(0,d))},
$S:z+25}
C.euN.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eut.prototype={
$1(d){this.b.$2(d,new C.etX(this.a,d,this.c))
return null},
$S:z+26}
C.etX.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bCZ(u,new C.etN(v,this.c,w),w)},
$S:0}
C.etN.prototype={
$0(){return this.a.d3(new C.etL(this.b,this.c))},
$S:0}
C.etL.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.euu.prototype={
$1(d){this.b.$2(d,new C.etW(this.a,d))
return null},
$S:z+26}
C.etW.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fNW(u,new C.etM(v,w),w)},
$S:0}
C.etM.prototype={
$0(){var w=this.a
return w.d3(new C.etK(w,this.b))},
$S:0}
C.etK.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.euv.prototype={
$0(){var w=this.a
return w.m(new C.etV(w))},
$S:0}
C.etV.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.euw.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC9(w,v)}},
$S:0}
C.eux.prototype={
$0(){this.a.HR()
return null},
$S:0}
C.euy.prototype={
$0(){return this.a.a7H()},
$S:0}
C.euz.prototype={
$0(){var w=this.a,v=w.jP()
if(v!=null&&v.b===D.cQ)w.d3(new C.etU(v))},
$S:0}
C.etU.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.euB.prototype={
$0(){this.a.Dp()
return null},
$S:0}
C.euC.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.F3(v,!0)
return null},
$S:0}
C.euD.prototype={
$0(){this.a.d3(new C.etT(this.b))},
$S:0}
C.etT.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cv:A.O},
$S:0}
C.euE.prototype={
$0(){this.a.d3(new C.etR(this.b))},
$S:0}
C.etR.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bn:A.cF},
$S:0}
C.euF.prototype={
$0(){this.a.d3(new C.etQ(this.b))},
$S:0}
C.etQ.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mJ},
$S:0}
C.euG.prototype={
$0(){this.a.d3(new C.etP(this.b))},
$S:0}
C.etP.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eqq.prototype={
$1(d){return this.bjn(d)},
bjn(d){var w=0,v=B.j(x.H),u,t=this,s,r
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
break}s.d3(new C.eqp(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:176}
C.eqp.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.ev8.prototype={
$0(){var w=this.a
return w.d3(new C.ev7(w,this.b))},
$S:0}
C.ev7.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.ev9.prototype={
$0(){var w=this.a
return w.d3(new C.ev6(w,this.b))},
$S:0}
C.ev6.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.ery.prototype={
$0(){return this.a.d3(new C.erx(this.b))},
$S:0}
C.erx.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erz.prototype={
$0(){return this.a.d3(new C.erw(this.b))},
$S:0}
C.erw.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.es5.prototype={
$1(d){var w=x.gh
w=B.C(new B.K(D.aox,new C.es4(),w),w.k("ak.E"))
return w},
$S:z+94}
C.es4.prototype={
$1(d){var w=null
return B.zz(B.d(d.b,w,w,w,w,w,w,A.m5,w,w,w),48,d,x.fO)},
$S:z+95}
C.evl.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.evk.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kd()?q:new C.evi(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bj
else v=r.d?A.b3:A.cr
v=B.I(v,A.q,o?2:1)
u=r.d?A.cC:A.c
t=B.bZ(0,C.hll(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nt,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.aig,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.evj(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:77}
C.evj.prototype={
$0(){var w=this.a
return w.m(new C.eve(w,this.b))},
$S:0}
C.eve.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JS()},
$S:0}
C.evi.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bQ(null,null,new C.evf(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.evg(q,s))
q.aQQ()}else if(r==="del"){q=t.a
q.m(new C.evh(q,s))
q.aPZ()}else if(r==="up")t.a.b1Y(s,s-1)
else if(r==="down")t.a.b1Y(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.evf.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLI,w,w,w,w,new C.eva(d),!1,w,w,w,w,w,w,w,D.fe6,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLB,w,w,w,w,new C.evb(d),!1,w,w,w,w,w,w,w,A.wn,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKT,w,w,w,w,new C.evc(d),!1,w,w,w,w,w,w,w,D.fm8,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bMU,w,w,w,w,new C.evd(d),!1,w,w,w,w,w,w,w,D.fdW,w,w,w))
return B.bl(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:24}
C.eva.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.evb.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.evc.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.evd.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.evg.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.evh.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.evm.prototype={
$0(){return this.a.a7H()},
$S:0}
C.eqQ.prototype={
$0(){var w=this.a
w.b5m()
w.az0(null)},
$S:0}
C.eqP.prototype={
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
s=B.a([B.bw(s,B.c0(A.kC,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.be),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.K(r,new C.eqO(this.a,e.b,e.d,q),B.U(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.aA:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c0(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.be)},
$S:433}
C.eqO.prototype={
$1(d){var w=this
return w.a.bDz(d,w.b,w.c,w.d)},
$S:z+23}
C.eqD.prototype={
$0(){var w=this
if(w.b){w.a.Na(w.c)
return}if(w.d){w.a.a7F(w.c)
return}if(w.e){w.a.ag4(w.c)
return}if(w.f)w.a.b5S(w.c)},
$S:0}
C.eqE.prototype={
$0(){this.a.Na(this.b)
return null},
$S:0}
C.eqF.prototype={
$0(){return this.a.a1E(this.b.a)},
$S:0}
C.eqG.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eqC(u,d,w.c,w.d))
v.Hw()
v.oe()
v.pi()},
$S:18}
C.eqC.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eqH.prototype={
$1(d){return this.a.aix(this.b.a,d)},
$S:2}
C.eqJ.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fZR(w))u.a.Na(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b5S(v)},
$S:0}
C.eqI.prototype={
$0(){return this.a.a1E(this.b.a)},
$S:0}
C.eqK.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eqB(w.b,d,w.c,w.d))
v.Hw()
v.oe()
v.pi()},
$S:18}
C.eqB.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.eqL.prototype={
$1(d){var w=this.a
w.m(new C.eqA(this.b,d))
w.Hw()
w.oe()
w.pi()},
$S:206}
C.eqA.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.eqM.prototype={
$0(){var w=this.a
w.m(new C.eqz(this.b))
w.Hw()
w.oe()
w.pi()},
$S:0}
C.eqz.prototype={
$0(){this.a.r=C.hkR()},
$S:0}
C.eqN.prototype={
$0(){return this.a.a1E(this.b.a)},
$S:0}
C.esH.prototype={
$0(){var w=this.a
return w.m(new C.esG(w))},
$S:0}
C.esG.prototype={
$0(){return this.a.y=!1},
$S:0}
C.esI.prototype={
$1(d){return this.a.cAS(this.b.a,d)},
$S:2}
C.erM.prototype={
$1(d){var w
this.a.d3(d)
w=this.b
if(w!=null)w.$0()},
$S:168}
C.erN.prototype={
$1(d){return this.a.$1(new C.erL(this.b,d))},
$S:6}
C.erL.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.erO.prototype={
$1(d){return this.a.$1(new C.erK(this.b,d))},
$S:6}
C.erK.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.erP.prototype={
$1(d){return this.a.$1(new C.erJ(this.b,d))},
$S:6}
C.erJ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.erQ.prototype={
$1(d){return this.a.$1(new C.erI(this.b,d))},
$S:6}
C.erI.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.erR.prototype={
$1(d){return this.a.$1(new C.erH(this.b,d))},
$S:6}
C.erH.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.erS.prototype={
$1(d){return this.b.$1(new C.erG(this.a,this.c))},
$S:9}
C.erG.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.erT.prototype={
$1(d){return this.b.$1(new C.erF(this.a,this.c))},
$S:9}
C.erF.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.erU.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bj:A.cU
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erE(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:428}
C.erE.prototype={
$0(){return this.a.$1(new C.erB(this.b,this.c))},
$S:0}
C.erB.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.erV.prototype={
$1(d){return this.a.$1(new C.erD(this.b,d))},
$S:1705}
C.erD.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.erW.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.erC(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:428}
C.erC.prototype={
$0(){return this.a.$1(new C.erA(this.b,this.c))},
$S:0}
C.erA.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.erX.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).px()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eK()}v.a.arG()},
$S:0}
C.es_.prototype={
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
r.push(B.ao(2,B.p(n,B.X(A.u0,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.nd,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eE(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:140}
C.epz.prototype={
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
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eE(B.v(B.a([B.ed(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j2,A.L,p,p)],x.p),A.m,p,A.bb,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.Fd,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:140}
C.etE.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.anG,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.an,w,w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.etC(d),w,w),B.bG(A.pf,new C.etD(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:20}
C.etC.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.etD.prototype={
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
t=B.aq(A.aK,A.d.gL(C.kv(j.a.c.w)?D.u9:M.nl),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gL(C.kv(j.a.c.w)?D.u9:M.nl).j(0.18+w*0.12),A.J,32+w*10),D.aaM],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.b_,0.9,A.x,k,0,B.a([A.d.gL(C.kv(j.a.c.w)?D.u9:M.nl).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.kv(j.a.c.w)?D.u9:M.nl).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bT(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.kv(j.a.c.w)?D.u9:M.nl).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.kv(m)?D.u9:M.nl
s=B.a([new B.ac(0,A.G,A.d.gL(C.kv(m)?D.u9:M.nl).j(0.45+w*0.2),A.cB,18)],s)
m=x.p
l=B.a([p,B.ed(A.A,B.p(k,B.X(C.kv(j.a.c.w)?A.vE:A.pY,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kv(j.a.c.w)?D.u9:M.nl).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h0,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f6m,A.L,k,k),A.at,B.d(j.gcvT(),k,k,k,k,k,k,D.faR,A.L,k,k),A.aB],m)
p=j.a.c
if(p.z){p=p.gRV()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.kv(j.a.c.w)?D.u9:M.nl).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.O,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jy(A.xZ,"Download PDF","pdf",A.d3,j.IL(0),!1,k))
p=j.a.c
if(!p.z||p.gRV()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jy(A.ku,"Transfer to "+C.hkT(p==null?"":p),"transfer_hati",A.aV,j.IL(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.IL(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.am,new C.Jy(D.bDl,"Rename presentation","rename",A.ce,n,!1,k),A.am,new C.Jy(A.ajV,"Duplicate","duplicate",A.b7,j.IL(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
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
s.push(B.dU(B.dc(B.bK(!1,E.aQC,k,k,!0,k,k,new C.d_W(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.btE,k,k,k,k,k,A.k2,k,k)),n),new B.u(0,(1-p)*8)))
return B.ed(A.A,B.dc(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.D(D.bsN,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.Va,new B.o(A.az,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
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
C.ewj.prototype={
$0(){return $.bjO=!$.bjO},
$S:0}
C.ew9.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaU_())u.avv()},
$S:0}
C.ewi.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ewa.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ewb.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avv()},
$S:0}
C.ew5.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.ew6.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ew7.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ew8.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.E(w-1+v,v)},
$S:0}
C.ewg.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b0,A.r,w,null)},
$S:1706}
C.ewh.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hT)return new B.cZ(e,!1,d,null)
w=this.a
return w.ctT(w.e,d,e)},
$S:438}
C.ewc.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fB((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.ewd.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.jZ((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.ewe.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fB(v.gp(0)*0.8)
w.jZ(v.gp(0)*0.35)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.ewf.prototype={
$2(d,e){var w=B.dp(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fB(-v.gp(0)*1.2)
return B.fs(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.ewk.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYq().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYq().x
t===$&&B.c()
return new C.b0v(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Iw(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:698}
C.ewm.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bV,x.w).w.a.a*0.55)w.avv()
else w.cin()},
$S:50}
C.ewl.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fEm.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:439}
C.fEv.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fEs(d),w,w),B.bK(!1,D.ftk,w,w,!0,w,w,new C.fEt(d,this.b,v),w,w),B.bG(A.aQU,new C.fEu(d,v,this.c),w)],x.p),w,w,L.tj,new B.a7(320,w,t,w),w,w,w,w,D.fuN,w)},
$S:20}
C.fEs.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fEt.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.h_v(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fEu.prototype={
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
return B.b(C.aOP(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fEl.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cdI.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:631}
C.fEr.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fcm.prototype={
$1(d){return C.h_t(C.VC(B.a2(d,x.N,x.z)),this.a)},
$S:z+96}
C.fNb.prototype={
$3(d,e,f){return A.bI},
$C:"$3",
$R:3,
$S:94}
C.fNc.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.ed(A.A,D.fVv,0.94+w*0.06,null,null),w)},
$S:437}
C.fNd.prototype={
$1(d){var w=this
return new C.VE(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.evQ.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.evM.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.evP.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.VF(u,this.b,w.gaNk(),v,null)},
$S:z+99}
C.evN.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evO.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evR.prototype={
$0(){return this.a.f=!0},
$S:0}
C.evS.prototype={
$0(){return this.a.f=!1},
$S:0}
C.evV.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.evW.prototype={
$0(){var w=this.a
return w.m(new C.evU(w))},
$S:0}
C.evU.prototype={
$0(){return this.a.d="one"},
$S:0}
C.evX.prototype={
$0(){var w=this.a
return w.m(new C.evT(w))},
$S:0}
C.evT.prototype={
$0(){return this.a.d="all"},
$S:0}
C.evY.prototype={
$1(d){return this.a.bId(d,this.b)},
$S:z+100}
C.evL.prototype={
$0(){var w=this.a
return w.m(new C.evK(w,this.b))},
$S:0}
C.evK.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.evZ.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.ew_.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.ew0.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ew1.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ew2.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fJ(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.T(D.eTP)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.ept.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eps())},
$S:0}
C.eps.prototype={
$0(){},
$S:0}
C.epu.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fK()},
$S:8}
C.epp.prototype={
$1(d){return this.a.m(new C.epo())},
$S:2}
C.epo.prototype={
$0(){},
$S:0}
C.epq.prototype={
$1(d){return this.a.aYO()},
$S:2}
C.epr.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ew4.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pW(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ew3(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ew3.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fyG.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ev(new B.ki(this.c,new C.fyF(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:212}
C.fyF.prototype={
$3(d,e,f){return new C.Iw(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fyH.prototype={
$1(d){var w=null
return B.oi(!1,B.av(new C.buj(this.a,this.b,w),w,w,w),w,x.z)},
$S:339}
C.fyL.prototype={
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
if(!(r instanceof B.pT))throw B.V("Could not draw the slide.")
u=r.lY(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fyM.prototype={
bjW(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hr(A.fY),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hO([J.eT(A.dD.gaM(r))],"image/png"))
t.toString
s=Am.fRl(t)
w=4
return B.b(new B.pZ(s,"load",!1,x.ev).gL(0).cM(0,A.jy),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bjW(d)},
$S:1710}
C.fyI.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:144}
C.fyJ.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fQ(0)},
$S:144}
C.fyK.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f6F.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f2U,A.L,w,w)},
$S:1711}
C.f6G.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.m1(A.bo,w,A.dQ,8,w,e===0?w:e,w),A.aq)},
$S:645}
C.edD.prototype={
$1(d){this.a.ZD()
return null},
$S:12}
C.edB.prototype={
$0(){return this.a.e=D.boQ},
$S:0}
C.edC.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cgg.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cgh.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLn.prototype
w.buv=w.q
w=C.aKR.prototype
w.btY=w.q
w=C.aKC.prototype
w.btI=w.q
w=C.aKQ.prototype
w.btX=w.q
w=C.aLl.prototype
w.but=w.q
w=C.aMI.prototype
w.bw0=w.q
w=C.aJx.prototype
w.bsA=w.q
w=C.aLz.prototype
w.buH=w.q
w=C.aLA.prototype
w.buI=w.q
w=C.b2a.prototype
w.bpe=w.aC8})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i5y","an6",104)
v(C.aIw.prototype,"gc2s","Yx",0)
var r
u(r=C.ax6.prototype,"gcve","cvf",38)
v(r,"gc3d","acM",0)
v(r=C.ax2.prototype,"gaXm","DS",3)
v(r,"gc3a","c3b",3)
v(r,"gavN","xE",0)
v(r,"gavO","Io",0)
t(C,"i5Z","hCg",105)
v(C.aDa.prototype,"gc5T","c5U",3)
s(C,"i69",0,null,["$4$paper$photo$request$template"],["fFL"],106,0)
s(C,"i68",0,null,["$5$doc$history$instruction$photo$template"],["bBs"],107,0)
v(r=C.aDt.prototype,"gc6A","II",0)
v(r,"gbHG","Wp",0)
v(r,"gc6D","adB",0)
v(r,"gc6C","Zp",0)
v(r,"gaYt","E9",0)
v(C.aDx.prototype,"gc6I","Zr",0)
v(r=C.aEU.prototype,"gaYG","Pt",0)
v(r,"gcnd","b23",3)
v(r,"gcwD","aAi",86)
v(r,"gbLs","a9C",0)
v(r,"gc78","Al",0)
v(r=C.aGP.prototype,"gch6","a_M",0)
v(r,"gche","a_P",0)
v(r,"gbAB","a84",0)
v(r,"gc7c","adN",0)
v(C.aGO.prototype,"gc7d","adO",0)
v(C.aAP.prototype,"gbzA","a7S",0)
v(C.azc.prototype,"gc7e","ZC",0)
w(C,"i6m","i4f",12)
w(C,"i6k","i1c",12)
w(C,"i6l","i3f",12)
v(r=C.aDN.prototype,"gczN","czO",3)
v(r,"gcls","clt",3)
u(r,"gEf","aes",7)
v(r,"gbFi","aqQ",3)
u(r,"gEg","aZX",7)
v(r,"gc9m","ae9",0)
v(r,"gc8d","ae8",0)
v(r,"gcbw","aet",0)
v(r,"gbHD","a9d",0)
v(r,"gccp","a_b",0)
v(r,"gccq","aeK",0)
v(r,"gccX","aeR",0)
v(r,"gcbJ","aew",0)
v(r,"gbLC","a9G",0)
v(r,"gaQP","aQQ",3)
v(r,"gaPY","aPZ",3)
v(r,"gaLF","aLG",3)
v(r,"gaPX","arG",3)
u(r,"gbzR","bzS",80)
v(r,"gazQ","b56",3)
v(r,"gc8f","c8g",3)
v(r,"gbWG","bWH",3)
v(r,"gbK5","bK6",3)
v(r=C.aDQ.prototype,"gcyE","cyF",3)
v(r,"gcyj","cyk",3)
t(C,"i6n","i4w",2)
v(r=C.aDO.prototype,"gc7k","IN",0)
v(r,"gcpc","QU",0)
v(r,"gc7h","IM",0)
v(r,"gcB2","a2h",0)
v(r,"gcd8","aeY",0)
v(C.aDM.prototype,"gc7l","aYO",3)
v(r=C.aDP.prototype,"gbMn","a9Q",0)
u(r,"gc7i","c7j",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nQ,C.Rt,C.bH_,C.bFm,C.cwo,C.cwm,C.bNg,C.b7W,C.cwn,C.bDX,C.cga,C.cg8,C.cg9,C.cg7,C.ash,C.cg6,C.bO9,C.og,C.aEo,C.jo,C.nD,C.a7x,C.zl,C.le,C.ot,C.m3,C.zn,C.nH,C.a7F,C.aqF,C.b0w,C.ed2,C.lb,C.Et,C.eu,C.iZ,C.Ek,C.xs,C.eK,C.lF,C.i0,C.jG,C.a7G,C.aeO,C.b0x,C.b2a,C.a2t])
u(B.kk,[C.cEe,C.bYP,C.ftT,C.cFK,C.cF6,C.fzo,C.dXS,C.dXR,C.edG,C.edF,C.fAN,C.fdu,C.fdv,C.cc4,C.cc5,C.cc6,C.ei3,C.eQS,C.eQf,C.eQe,C.eRi,C.eQQ,C.eQJ,C.eR1,C.eRI,C.fkM,C.eXR,C.eXQ,C.eYj,C.ed5,C.fEi,C.dTB,C.fKK,C.fB9,C.cdA,C.cdy,C.cdD,C.fBE,C.fBF,C.fBG,C.fBH,C.cdk,C.cdl,C.dFR,C.cdh,C.fBD,C.f4d,C.dRN,C.cda,C.ecM,C.fzd,C.et3,C.ets,C.etp,C.eto,C.etz,C.ety,C.ev3,C.ev2,C.eti,C.eth,C.epS,C.er1,C.eu0,C.evl,C.evk,C.eqP,C.es_,C.epz,C.d_X,C.ewg,C.ewh,C.ewc,C.ewd,C.ewe,C.ewf,C.ewk,C.cdI,C.evQ,C.ew0,C.cgh])
u(B.hV,[C.cEf,C.cEg,C.bOa,C.frh,C.bYO,C.bYR,C.fHe,C.f5b,C.f52,C.f5i,C.fcn,C.fco,C.ftU,C.ftS,C.fGJ,C.fqY,C.fHA,C.cFA,C.cFF,C.cFH,C.cFD,C.cFI,C.cFB,C.cFJ,C.cFw,C.cFt,C.cFs,C.cFz,C.cF1,C.cF_,C.fyq,C.fyr,C.fgM,C.fzp,C.fzv,C.ffP,C.c8n,C.fyo,C.fyp,C.ftf,C.ftg,C.fzu,C.fzq,C.fzs,C.fzt,C.fzr,C.fL1,C.ftj,C.ftk,C.ftn,C.fto,C.ftr,C.fts,C.fMu,C.fdV,C.fMF,C.egY,C.egZ,C.eh_,C.egG,C.egS,C.egT,C.egV,C.cc3,C.cc1,C.cc2,C.fz4,C.fz6,C.fz5,C.fdw,C.fdx,C.fMI,C.ei8,C.ei9,C.ei0,C.ei1,C.ei4,C.ei5,C.fMY,C.eRJ,C.eR8,C.eQT,C.eR5,C.eQa,C.eQb,C.eQc,C.eQg,C.eQh,C.eRy,C.eRF,C.eRH,C.eRh,C.eRj,C.eRn,C.eRo,C.eRp,C.eRt,C.eRk,C.eRl,C.eQs,C.eQt,C.eQu,C.eQv,C.eQw,C.eQx,C.eQy,C.eQz,C.eQA,C.ePO,C.ePP,C.ePQ,C.ePR,C.ePT,C.ePU,C.eQm,C.eQn,C.eQo,C.eQp,C.eQq,C.ePY,C.ePZ,C.eQ_,C.eQ0,C.eQI,C.eR0,C.fwt,C.fws,C.cdr,C.fkL,C.fEe,C.fE7,C.fEa,C.fC7,C.fC8,C.fC9,C.fwA,C.fwz,C.fwy,C.fww,C.fdr,C.fds,C.fdt,C.fN9,C.eXT,C.eXU,C.eXN,C.eXH,C.eYc,C.eYd,C.eYf,C.eYg,C.eYb,C.fN8,C.eXy,C.fk0,C.ed4,C.fEg,C.fEh,C.fEj,C.fEc,C.fEd,C.fMm,C.did,C.dij,C.ed3,C.f9V,C.f9X,C.f9W,C.f9U,C.fxE,C.fxG,C.fbV,C.fDJ,C.fDK,C.fDL,C.fDW,C.fE0,C.fE1,C.fE2,C.fE3,C.fE4,C.fE5,C.fE6,C.fDM,C.fDN,C.fDO,C.fDP,C.fDQ,C.fDR,C.fDS,C.fDT,C.fDU,C.fDV,C.fDX,C.fDY,C.fDZ,C.fE_,C.fvu,C.fjz,C.fjy,C.fEp,C.dTC,C.dTA,C.eWI,C.c7Z,C.c80,C.fKM,C.d7w,C.d7y,C.fKL,C.fKJ,C.fN7,C.fB5,C.d76,C.ftv,C.ftw,C.cdp,C.cdq,C.cdo,C.cde,C.cdf,C.cdb,C.cdc,C.cdd,C.cdG,C.cdB,C.cdw,C.cdx,C.cdz,C.cdC,C.cdE,C.fBI,C.cdj,C.cdm,C.cdn,C.cdt,C.cdu,C.fEw,C.fDD,C.cdi,C.cdg,C.fBC,C.fm6,C.cd9,C.eUl,C.foZ,C.evH,C.es6,C.es7,C.etH,C.etv,C.etw,C.eru,C.evs,C.evt,C.evu,C.eqT,C.eta,C.etc,C.esN,C.esK,C.es2,C.es3,C.esU,C.eqV,C.et5,C.et6,C.et4,C.et8,C.et7,C.etq,C.etr,C.ett,C.etm,C.erd,C.era,C.etA,C.er2,C.evr,C.epB,C.er5,C.er4,C.eqj,C.eqo,C.eqm,C.eqk,C.evz,C.evA,C.evB,C.evy,C.ev5,C.ev4,C.euZ,C.ev0,C.euR,C.evp,C.evn,C.epJ,C.epF,C.es0,C.eqs,C.epU,C.epT,C.eqf,C.eqg,C.ers,C.equ,C.eqy,C.etj,C.euS,C.euT,C.euU,C.euV,C.eqX,C.eqY,C.eqZ,C.est,C.ero,C.erg,C.ern,C.esD,C.esE,C.euq,C.eus,C.euM,C.euO,C.eut,C.euu,C.eqq,C.es5,C.es4,C.evf,C.eqO,C.eqG,C.eqH,C.eqK,C.eqL,C.esI,C.erM,C.erN,C.erO,C.erP,C.erQ,C.erR,C.erS,C.erT,C.erU,C.erV,C.erW,C.etE,C.d_U,C.d_V,C.ewm,C.fEm,C.fEv,C.fEl,C.fEr,C.fcm,C.fNb,C.fNc,C.fNd,C.evP,C.evY,C.epu,C.epp,C.epq,C.fyG,C.fyF,C.fyH,C.fyM,C.fyI,C.fyJ,C.f6F,C.f6G,C.edD,C.cgg])
u(B.j8,[C.cEh,C.f57,C.f5c,C.f5d,C.f58,C.f59,C.f5a,C.f50,C.f51,C.f53,C.f54,C.f5h,C.f5g,C.f56,C.f55,C.f5e,C.f5f,C.f5k,C.f5l,C.f5j,C.cFC,C.cFG,C.cFE,C.cFu,C.cFv,C.cFx,C.cFq,C.cFr,C.cFy,C.cFp,C.cFo,C.cFn,C.cER,C.cEQ,C.cET,C.cF0,C.cEU,C.cES,C.cEW,C.cEX,C.cEY,C.cEV,C.cEZ,C.cF2,C.cF3,C.cF4,C.cF5,C.ftd,C.fte,C.ftb,C.ftc,C.e8r,C.e8p,C.e8q,C.e8s,C.e8t,C.dXQ,C.fth,C.fti,C.ftl,C.ftm,C.ftp,C.ftq,C.edE,C.fBc,C.fBb,C.egX,C.egW,C.egA,C.egw,C.egH,C.egI,C.egJ,C.egC,C.egD,C.egE,C.egF,C.egB,C.egy,C.egz,C.egP,C.egQ,C.egO,C.egR,C.egN,C.egM,C.egL,C.egU,C.egK,C.egx,C.ei7,C.ehW,C.ehX,C.ei2,C.ehY,C.ei_,C.ehZ,C.ei6,C.eQB,C.eQZ,C.eQk,C.eQl,C.eQi,C.eQj,C.eR4,C.eR3,C.eR2,C.eR7,C.eR6,C.eQ9,C.eQd,C.eQ8,C.eQ7,C.eQ4,C.eQ6,C.eQ5,C.eRG,C.eRz,C.eRx,C.eRA,C.eRw,C.eRB,C.eRv,C.eRC,C.eRD,C.eRE,C.eRu,C.eRg,C.eRb,C.eRm,C.eRf,C.eRq,C.eRe,C.eRr,C.eRd,C.eRs,C.eRc,C.eQW,C.eQV,C.eQX,C.eQU,C.eQY,C.eQO,C.eQN,C.eQP,C.eQM,C.eQL,C.eQK,C.ePS,C.ePN,C.eQ1,C.ePX,C.eQ2,C.ePW,C.eQ3,C.ePV,C.eQR,C.eQF,C.eQE,C.eQG,C.eQD,C.eQH,C.eQC,C.eR_,C.eRa,C.eR9,C.eQr,C.fE9,C.fEb,C.fEf,C.fwx,C.fyY,C.fyW,C.fyX,C.eXV,C.eXW,C.eXS,C.eXM,C.eXL,C.eXO,C.eXP,C.eXB,C.eXC,C.eXE,C.eXF,C.eXG,C.eXD,C.eXI,C.eY8,C.eY9,C.eY7,C.eYa,C.eY6,C.eY5,C.eY4,C.eYe,C.eY3,C.eY2,C.eY1,C.eYh,C.eY0,C.eYi,C.eY_,C.eXZ,C.eXJ,C.eXK,C.eXY,C.eXX,C.eXu,C.eXv,C.eXw,C.eXx,C.eXt,C.eXz,C.eXA,C.dic,C.die,C.dih,C.dii,C.dig,C.dif,C.fxF,C.fvv,C.c8_,C.c81,C.d7p,C.d7u,C.d7v,C.d7t,C.d7s,C.d7x,C.d7r,C.d7q,C.d7z,C.fKI,C.deb,C.dec,C.ded,C.ftt,C.ftu,C.cdH,C.epv,C.epw,C.epx,C.epy,C.fm4,C.fm5,C.dRP,C.dRO,C.d4l,C.d4k,C.evJ,C.evI,C.es8,C.euP,C.evF,C.etF,C.evv,C.evw,C.evG,C.esO,C.eqR,C.eqS,C.etb,C.esM,C.esJ,C.esL,C.esP,C.esQ,C.esR,C.esS,C.esT,C.esV,C.eqW,C.esY,C.esZ,C.et_,C.et0,C.et1,C.et2,C.esX,C.et9,C.etn,C.etl,C.etu,C.esW,C.erb,C.erc,C.ere,C.etx,C.etB,C.epQ,C.er9,C.er7,C.etJ,C.er3,C.etI,C.eqU,C.erv,C.evq,C.euQ,C.epR,C.epO,C.epE,C.epA,C.epC,C.er6,C.eqi,C.eqn,C.eql,C.eqh,C.etk,C.evC,C.ev1,C.euX,C.euY,C.ev_,C.erZ,C.erY,C.evo,C.epH,C.epI,C.epK,C.epL,C.epP,C.epG,C.etG,C.evx,C.es1,C.eqr,C.epD,C.ert,C.epM,C.epV,C.epW,C.epX,C.eq7,C.eqa,C.eqb,C.eqc,C.eqd,C.eqe,C.epY,C.epZ,C.eq_,C.eq0,C.eq1,C.eq2,C.eq3,C.eq4,C.eq5,C.eq6,C.eq8,C.eq9,C.err,C.erq,C.erp,C.epN,C.eqv,C.eqt,C.eqw,C.eqx,C.er8,C.etf,C.etg,C.etd,C.ete,C.euW,C.er0,C.er_,C.ess,C.esr,C.esu,C.esq,C.esv,C.esp,C.esw,C.eso,C.esx,C.esn,C.esy,C.esm,C.esz,C.esl,C.esA,C.esk,C.esd,C.ese,C.esf,C.esc,C.esg,C.esb,C.esh,C.esa,C.esi,C.es9,C.esj,C.erl,C.erm,C.erf,C.erh,C.eri,C.erj,C.erk,C.evD,C.evE,C.esC,C.esB,C.esF,C.eu1,C.eu2,C.eu3,C.eue,C.eup,C.euA,C.euH,C.euI,C.euJ,C.euK,C.euL,C.eu4,C.eu5,C.eu6,C.eu7,C.eu8,C.eu9,C.eua,C.eub,C.euc,C.eud,C.euf,C.eug,C.euh,C.eui,C.euj,C.euk,C.eul,C.eum,C.eun,C.etS,C.euo,C.eu_,C.etZ,C.eur,C.etY,C.etO,C.euN,C.etX,C.etN,C.etL,C.etW,C.etM,C.etK,C.euv,C.etV,C.euw,C.eux,C.euy,C.euz,C.etU,C.euB,C.euC,C.euD,C.etT,C.euE,C.etR,C.euF,C.etQ,C.euG,C.etP,C.eqp,C.ev8,C.ev7,C.ev9,C.ev6,C.ery,C.erx,C.erz,C.erw,C.evj,C.eve,C.evi,C.eva,C.evb,C.evc,C.evd,C.evg,C.evh,C.evm,C.eqQ,C.eqD,C.eqE,C.eqF,C.eqC,C.eqJ,C.eqI,C.eqB,C.eqA,C.eqM,C.eqz,C.eqN,C.esH,C.esG,C.erL,C.erK,C.erJ,C.erI,C.erH,C.erG,C.erF,C.erE,C.erB,C.erD,C.erC,C.erA,C.erX,C.etC,C.etD,C.d_W,C.d0i,C.d0j,C.d_Q,C.d_P,C.d_T,C.d_R,C.d_S,C.ewj,C.ew9,C.ewi,C.ewa,C.ewb,C.ew5,C.ew6,C.ew7,C.ew8,C.ewl,C.fEs,C.fEt,C.fEu,C.evM,C.evN,C.evO,C.evR,C.evS,C.evV,C.evW,C.evU,C.evX,C.evT,C.evL,C.evK,C.evZ,C.ew_,C.ew1,C.ew2,C.ept,C.eps,C.epo,C.epr,C.ew4,C.ew3,C.fyL,C.fyK,C.edB,C.edC])
t(C.aQK,B.J)
u(B.m8,[C.a3s,C.awz,C.avg,C.xq,C.xt,C.kS,C.td,C.Bj,C.rp,C.vT,C.are,C.Ix,C.aqE,C.uB,C.mu,C.hz,C.a8h])
u(C.bNg,[C.cwp,C.bNh])
u(C.cga,[C.cge,C.asg])
t(C.cgd,C.cg8)
t(C.cgc,C.cg7)
t(C.cgf,C.cgc)
t(C.cgb,C.cg9)
t(C.cg5,C.cg6)
t(C.b9u,B.oL)
t(C.cqd,B.auJ)
t(C.a83,B.xd)
t(C.aVc,B.dG)
t(C.aA7,B.atB)
u(B.ag,[C.a0v,C.Yf,C.Yd,C.apP,C.Vq,C.Vt,C.a_w,C.a02,C.a01,C.aDm,C.Zo,C.Nd,C.YX,C.Zh,C.anP,C.aId,C.UF,C.ayX,C.a7n,C.NF,C.ayj,C.Jy,C.a_8,C.VE,C.VF,C.aDL,C.aqJ,C.a7o])
u(B.ah,[C.aIw,C.ax6,C.ax2,C.aDa,C.aDt,C.aDx,C.aEU,C.aGP,C.aGO,C.aLn,C.aAP,C.aKR,C.azc,C.bfn,C.aKC,C.aMI,C.aKQ,C.bdg,C.aLl,C.aLz,C.aJx,C.bc1,C.aLA,C.aDO,C.bjN,C.aDM,C.aDP,C.bjw])
u(B.au,[C.ax4,C.acV,C.acj,C.biy,C.acY,C.aeE,C.b08,C.brV,C.b0s,C.bl6,C.bqu,C.aZm,C.b0v,C.ad0,C.adi,C.b0t,C.Iw,C.aZp,C.bcg,C.Pk,C.JF,C.bgV,C.bgU,C.buj])
u(B.H1,[C.bbJ,C.btk,C.aIQ,C.beq,C.bqS])
u(B.mL,[C.bbI,C.b8d,C.bqP,C.bbf,C.beO,C.bh0,C.bdU,C.beL,C.bes,C.bnm,C.b9m,C.b9_,C.bug,C.brh,C.bqq,C.bdN,C.b0q,C.bpn,C.bqn])
t(C.bjt,C.aLn)
t(C.biQ,C.aKR)
t(C.biA,C.aKC)
t(C.btN,C.aMI)
t(C.biN,C.aKQ)
t(C.bjr,C.aLl)
t(C.bwB,C.aLz)
t(C.aDN,C.bwB)
t(C.bc2,C.aJx)
t(C.aDQ,C.aLA)
t(C.bu7,B.iR)
t(C.a8g,B.kr)
t(C.cgi,C.b2a)
t(C.ahR,C.a2t)
u(B.Xg,[C.aQA,C.aS4])
t(C.awb,C.aQA)
w(C.aLn,B.c9)
w(C.aKR,B.c9)
w(C.aKC,B.c9)
w(C.aKQ,B.c9)
w(C.aLl,B.c9)
w(C.aMI,B.c9)
w(C.aJx,B.eR)
w(C.aLz,B.c9)
v(C.bwB,B.ez)
w(C.aLA,B.c9)})()
B.jY(b.typeUniverse,JSON.parse('{"aRj":{"hI":["aRj"]},"nQ":{"aRj":[],"hI":["aRj"]},"aQK":{"J":["Rt"],"J.E":"Rt"},"b9u":{"oL":[]},"a83":{"xd":[],"o9":[]},"aVc":{"dG":[],"cA":[],"r":[]},"aA7":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a0v":{"ag":[],"r":[]},"aIw":{"ah":["a0v"]},"Yf":{"ag":[],"r":[]},"Yd":{"ag":[],"r":[]},"ax6":{"ah":["Yf"]},"ax2":{"ah":["Yd"]},"ax4":{"au":[],"r":[]},"apP":{"ag":[],"r":[]},"aDa":{"ah":["apP"]},"acV":{"au":[],"r":[]},"acj":{"au":[],"r":[]},"acY":{"au":[],"r":[]},"aeE":{"au":[],"r":[]},"biy":{"au":[],"r":[]},"Vq":{"ag":[],"r":[]},"aDt":{"ah":["Vq"]},"b08":{"au":[],"r":[]},"bbJ":{"aB":[]},"bbI":{"aB":[]},"btk":{"aB":[]},"b8d":{"aB":[]},"bqP":{"aB":[]},"Vt":{"ag":[],"r":[]},"aDx":{"ah":["Vt"]},"bbf":{"aB":[]},"a_w":{"ag":[],"r":[]},"aEU":{"ah":["a_w"]},"beO":{"aB":[]},"a02":{"ag":[],"r":[]},"a01":{"ag":[],"r":[]},"aDm":{"ag":[],"r":[]},"Zo":{"ag":[],"r":[]},"aGP":{"ah":["a02"]},"aGO":{"ah":["a01"]},"bjt":{"ah":["aDm"]},"bh0":{"aB":[]},"aAP":{"ah":["Zo"]},"brV":{"au":[],"r":[]},"b0s":{"au":[],"r":[]},"bl6":{"au":[],"r":[]},"Nd":{"ag":[],"r":[]},"YX":{"ag":[],"r":[]},"biQ":{"ah":["Nd"]},"bqu":{"au":[],"r":[]},"bdU":{"aB":[]},"aZm":{"au":[],"r":[]},"azc":{"ah":["YX"]},"Zh":{"ag":[],"r":[]},"bfn":{"ah":["Zh"]},"beL":{"aB":[]},"bes":{"aB":[]},"bnm":{"aB":[]},"b9m":{"aB":[]},"b9_":{"aB":[]},"bug":{"aB":[]},"brh":{"aB":[]},"bqq":{"aB":[]},"bdN":{"aB":[]},"anP":{"ag":[],"r":[]},"b0v":{"au":[],"r":[]},"biA":{"ah":["anP"]},"ad0":{"au":[],"r":[]},"adi":{"au":[],"r":[]},"aId":{"ag":[],"r":[]},"UF":{"ag":[],"r":[]},"Iw":{"au":[],"r":[]},"ayX":{"ag":[],"r":[]},"a7n":{"ag":[],"r":[]},"b0t":{"au":[],"r":[]},"b0q":{"aB":[]},"btN":{"ah":["aId"]},"aIQ":{"aB":[]},"biN":{"ah":["UF"]},"bdg":{"ah":["ayX"]},"bjr":{"ah":["a7n"]},"aZp":{"au":[],"r":[]},"beq":{"aB":[]},"bpn":{"aB":[]},"bqn":{"aB":[]},"ayj":{"ag":[],"r":[]},"Jy":{"ag":[],"r":[]},"a_8":{"ag":[],"r":[]},"JF":{"au":[],"r":[]},"NF":{"ag":[],"r":[]},"aDN":{"ah":["NF"],"ez":[]},"bc2":{"ah":["ayj"]},"bcg":{"au":[],"r":[]},"bc1":{"ah":["Jy"]},"Pk":{"au":[],"r":[]},"aDQ":{"ah":["a_8"]},"bqS":{"aB":[]},"bgV":{"au":[],"r":[]},"bgU":{"au":[],"r":[]},"VE":{"ag":[],"r":[]},"VF":{"ag":[],"r":[]},"aDL":{"ag":[],"r":[]},"aqJ":{"ag":[],"r":[]},"aDO":{"ah":["VE"]},"bjN":{"ah":["VF"]},"aDM":{"ah":["aDL"]},"bu7":{"iR":[]},"aDP":{"ah":["aqJ"]},"buj":{"au":[],"r":[]},"a7o":{"ag":[],"r":[]},"bjw":{"ah":["a7o"]},"a8g":{"kr":["fr<eP>"],"ke":["fr<eP>"]},"ahR":{"a2t":[]},"aQA":{"j2":[],"ff":[]},"awb":{"j2":[],"ff":[]},"aS4":{"j2":[],"ff":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Lr"),U:w("vo<pX>"),bz:w("w"),M:w("eI<n>"),bo:w("jB"),g7:w("LW"),gc:w("az<iu?>"),bq:w("az<~>"),cc:w("M8"),fS:w("DL"),an:w("HI"),bm:w("O<Rt>"),X:w("O<a2B>"),f3:w("O<aRj>"),aK:w("O<n6>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lx>"),d5:w("O<az<bv<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<az<dD>>"),fG:w("O<az<~>>"),aF:w("O<nc>"),cd:w("O<ai<jo>>"),ez:w("O<a4<n,aC>>"),d:w("O<a4<n,@>>"),B:w("O<mq>"),h:w("O<jo>"),gE:w("O<zl>"),k:w("O<og>"),g:w("O<lF>"),D:w("O<i0>"),u:w("O<eK>"),m:w("O<uB>"),i:w("O<hz>"),aC:w("O<a7F>"),o:w("O<zn>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<hp>"),cR:w("O<iP>"),J:w("O<jf>"),gx:w("O<p5<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(M,M)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cR>"),s:w("O<n>"),aS:w("O<iR>"),p:w("O<r>"),eR:w("O<ff>"),fT:w("O<b7W>"),bx:w("O<aEo>"),gz:w("O<aeO>"),x:w("O<M>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<og>"),R:w("ai<i0>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(n?,n?)>"),P:w("a4<n,@>"),f:w("a4<@,@>"),gI:w("a4<H,+icon3d,picture(n?,n?)>"),bR:w("K<hz,r>"),eC:w("K<nH,n>"),cT:w("K<jG,D>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<H,pB>"),gh:w("K<mu,jq<mu>>"),w:w("iA"),ei:w("iu"),g2:w("rf"),fB:w("Ek"),b6:w("zl"),gX:w("a7x"),dt:w("le"),ea:w("og"),bt:w("lF"),I:w("i0"),F:w("eK"),fO:w("mu"),ff:w("uB"),fP:w("hz"),Q:w("vT"),dO:w("aqF"),a:w("cq"),C:w("aC"),dw:w("ash"),di:w("a8h"),Y:w("eP"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EP"),dB:w("dz<u>"),bJ:w("dz<n>"),_:w("e_<n>"),N:w("n"),fw:w("pX"),bO:w("as"),K:w("bp<u>"),b:w("bp<M>"),E:w("dD"),W:w("cx<n>"),ac:w("cx<H>"),ex:w("ki<lF>"),cI:w("ki<n>"),cl:w("ki<M>"),b4:w("a1<lb>"),a8:w("a1<m3>"),fR:w("a1<+(n,n)>"),co:w("e9<u>"),l:w("r"),b2:w("bX<~>"),ev:w("pZ<dX>"),dT:w("bg<~>"),cQ:w("aA7"),q:w("mZ"),y:w("R"),gR:w("M"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a4<n,@>>?"),aT:w("ai<i0>?"),c:w("ai<@>?"),aP:w("iu?"),af:w("i0?"),go:w("b0x?"),a6:w("a7G?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVK=new B.bI(A.ax,null,null,N.anq,null)
D.aVU=new B.da(0,-0.15)
D.aVW=new B.da(0.62,0)
D.aVZ=new B.da(-0.35,-0.45)
D.aW8=new B.da(0.9,-0.85)
D.aLz=new B.aT(30,30)
D.aXq=new B.bq(D.aLz,D.aLz,A.he,A.he)
D.aXE=new B.ay(A.b7,1,A.q,-1)
D.bgc=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aXQ=new B.ay(D.bgc,1,A.q,-1)
D.aY1=new B.ay(A.aE,1.5,A.q,-1)
D.aY6=new B.ay(A.b7,1.6,A.q,-1)
D.aYm=new B.ay(A.aE,1.4,A.q,-1)
D.aZK=new B.o(null,null,null,null,null,K.Gr,A.a6)
D.bVr=new B.a8(A.a3,A.a7,A.x,G.a2E,null,null)
D.aZS=new B.o(null,null,null,null,null,D.bVr,A.a6)
D.aaC=new B.o(A.az,null,null,A.rX,null,null,A.n)
D.bag=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bg9=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cSG=w([D.bag,D.bg9],x.O)
D.eeo=new B.bT(A.A,0.5,A.x,null,0,D.cSG,null,null)
D.b_a=new B.o(null,null,null,null,null,D.eeo,A.a6)
D.WE=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aYC=new B.bO(P.uV,A.Y,A.Y,A.Y)
D.b_c=new B.o(D.WE,null,D.aYC,null,null,null,A.n)
D.bXc=new B.a8(A.a3,A.a7,A.x,A.PU,null,null)
D.b_j=new B.o(null,null,null,null,null,D.bXc,A.a6)
D.ac9=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.b_l=new B.o(D.ac9,null,null,A.qy,null,null,A.n)
D.b_p=new B.o(A.km,null,null,null,null,null,A.a6)
D.aYJ=new B.bO(A.A3,A.Y,A.Y,A.Y)
D.b_s=new B.o(Z.add,null,D.aYJ,A.m9,null,null,A.n)
D.DQ=new B.o(A.dN,null,null,null,null,null,A.a6)
D.b_y=new B.o(null,null,null,null,null,E.vU,A.a6)
D.cXw=w([E.ae6,A.bX],x.O)
D.bWO=new B.a8(A.b_,A.b5,A.x,D.cXw,null,null)
D.b_C=new B.o(null,null,null,A.m9,null,D.bWO,A.n)
D.d6Y=w([A.bj,A.dN,A.jR],x.O)
D.a0O=new B.a8(A.ax,A.aC,A.x,D.d6Y,null,null)
D.b_P=new B.o(null,null,null,null,null,D.a0O,A.n)
D.b_Q=new B.o(D.ac9,null,null,A.kJ,null,null,A.n)
D.cnn=w([A.di,A.bj],x.O)
D.bWF=new B.a8(A.ax,A.aC,A.x,D.cnn,null,null)
D.b_U=new B.o(null,null,null,null,null,D.bWF,A.n)
D.b03=new B.o(null,null,null,null,null,G.u2,A.a6)
D.b0m=new B.o(A.ae8,null,null,null,null,null,A.a6)
D.bb4=new B.w(0.5647058823529412,0,0,0,A.t)
D.aaM=new B.ac(0,A.G,D.bb4,A.RJ,28)
D.b2t=new B.aVp()
D.b31=new C.cqd()
D.b3d=new C.b9u()
D.abh=new B.cr(A.A,null,null,A.a0D,null)
D.b5M=new B.fj(null,null,null,null,null,E.n0,null,null,null,null)
D.b3K=new B.cr(A.A,null,null,D.b5M,null)
D.bGi=new B.ae(A.dW,28,A.c,null,null,null)
D.b4d=new B.cr(A.A,null,null,D.bGi,null)
D.b5J=new B.fj(2,null,null,null,null,A.bY,null,null,null,null)
D.b4z=new B.cr(A.A,null,null,D.b5J,null)
D.bGC=new B.ae(K.Ny,40,A.bC,null,null,null)
D.b4A=new B.cr(A.A,null,null,D.bGC,null)
D.b6C=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b6P=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b7c=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b7i=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b7O=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b83=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b84=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Kw=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b8u=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b8A=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.acs=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b9k=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.ba5=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.acG=new B.w(1,1,1,0.9725490196078431,A.t)
D.bap=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.baA=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.baD=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.baP=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bb9=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bcw=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Wo=new B.w(0.8509803921568627,0,0,0,A.t)
D.bcE=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bcL=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.adv=new B.w(0.6,0,0,0,A.t)
D.adx=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.be7=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.th=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bex=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.beX=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.bfk=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.aej=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.WO=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.AC=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.L3=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.ja=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aeI=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.WY=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.biF=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bj8=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.bjm=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.Xi=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bkt=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xj=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bkW=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.ble=new B.hH(A.b3,!0,null,null)
D.f97=new B.G(!0,A.aA,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fyR=new B.x("Bio link",null,D.f97,null,null,null,null,null,null,null,null,null)
D.b4t=new B.cr(A.A,null,null,D.fyR,null)
D.blu=new B.hH(A.VM,!0,D.b4t,null)
D.Lr=new C.a3s(0,"none")
D.afN=new C.a3s(1,"deflate")
D.afO=new C.a3s(2,"bzip2")
D.bmp=new B.km(0.165,0.84,0.44,1)
D.cXQ=w([A.cg,A.dQ,A.aE],x.O)
D.bVW=new B.a8(A.ax,A.aC,A.x,D.cXQ,null,null)
D.aZP=new B.o(null,null,null,null,null,D.bVW,A.n)
D.bPr=new B.ae(A.eS,null,A.ad,null,null,null)
D.b54=new B.cr(A.A,null,null,D.bPr,null)
D.bmW=new B.kP(D.aZP,A.be,D.b54,null)
D.biV=new B.w(0.058823529411764705,1,1,1,A.t)
D.d_Z=w([A.bG,A.qJ,A.qJ,D.biV],x.O)
D.cEy=w([0,0.32,0.7,1],x.x)
D.bWu=new B.a8(A.ax,A.aC,A.x,D.d_Z,D.cEy,null)
D.aZE=new B.o(null,null,null,null,null,D.bWu,A.n)
D.bn1=new B.kP(D.aZE,A.be,null,null)
D.bo3=new B.mi(1,1,null,null,null,A.bo,null)
D.bo6=new B.mi(1,null,null,null,null,D.WY,null)
D.boA=new B.b9(125e4)
D.boG=new B.b9(17e4)
D.boQ=new B.b9(35964e8)
D.boW=new B.b9(55e4)
D.bp_=new B.b9(68e4)
D.bpq=new B.ic(0,0,0,5)
D.bpH=new B.Q(0,16,16,0)
D.bpK=new B.Q(0,18,0,8)
D.bpS=new B.Q(0,36,0,36)
D.bpZ=new B.Q(0,54,0,0)
D.bq5=new B.Q(10,0,10,3)
D.bqg=new B.ic(10,16,10,10)
D.bqs=new B.Q(10,6,4,6)
D.bqv=new B.Q(10,8,10,6)
D.agL=new B.Q(11,8,11,11)
D.bqz=new B.Q(12,0,12,24)
D.bqL=new B.Q(12,12,12,4)
D.bqO=new B.Q(12,12,8,12)
D.br2=new B.Q(12,8,8,12)
D.brp=new B.Q(14,14,14,0)
D.bru=new B.Q(14,14,14,90)
D.brN=new B.Q(16,10,16,16)
D.brO=new B.Q(16,10,16,20)
D.ahA=new B.Q(16,6,16,28)
D.bsm=new B.Q(18,0,18,10)
D.bso=new B.Q(18,0,18,30)
D.bsq=new B.Q(18,10,18,12)
D.bsr=new B.Q(18,10,18,14)
D.bsI=new B.Q(18,16,14,18)
D.bsN=new B.Q(18,18,18,12)
D.bsT=new B.Q(18,26,18,12)
D.bsY=new B.Q(18,34,18,34)
D.bsZ=new B.Q(18,4,18,14)
D.bt4=new B.Q(18,8,18,24)
D.btm=new B.Q(20,16,14,4)
D.btr=new B.Q(20,18,12,4)
D.btw=new B.Q(20,20,12,20)
D.btz=new B.Q(20,22,20,20)
D.btE=new B.Q(20,6,20,6)
D.btO=new B.Q(22,18,22,18)
D.btW=new B.Q(22,24,22,0)
D.btZ=new B.Q(22,24,22,4)
D.bu6=new B.Q(22,60,22,22)
D.buc=new B.Q(24,24,24,22)
D.bum=new B.Q(26,10,60,10)
D.but=new B.Q(28,44,28,44)
D.buK=new B.Q(32,44,32,44)
D.buS=new B.Q(38,30,38,20)
D.buX=new B.Q(4,0,0,6)
D.bv8=new B.ic(4,4,4,4)
D.bvy=new B.ic(6,5,6,5)
D.bvC=new B.Q(6,6,8,6)
D.bvN=new B.Q(8,14,8,14)
D.bvO=new B.Q(8,22,8,22)
D.bvW=new B.Q(8,6,12,6)
D.bw4=new B.Q(8,8,8,4)
D.ait=new B.Q(9,9,9,6)
D.bwf=new B.ic(2.5,2.5,2.5,2.5)
D.bwg=new B.Q(10.5,0,10.5,0)
D.bwh=new B.Q(7,1.5,7,1.5)
D.cPO=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bwx=new B.yJ(null,null,D.cPO,A.Ag)
D.cMV=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bwy=new B.yJ(null,null,D.cMV,A.Ag)
D.aQh=new B.G(!0,A.aA,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fya=new B.x("WORD DESIGN",null,D.aQh,null,null,null,null,null,null,null,null,null)
D.bx6=new B.bD(1,A.bh,D.fya,null)
D.fxR=new B.x("Slides database",null,Ab.ql,null,null,null,null,null,null,null,null,null)
D.fv9=new B.x("Admin only \xb7 keep as many as you like",null,U.aPL,null,null,null,null,null,null,null,null,null)
D.deP=w([D.fxR,A.bB,D.fv9],x.p)
D.blT=new B.fm(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.deP,null)
D.bx9=new B.bD(1,A.bh,D.blT,null)
D.fpK=new B.x("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bxc=new B.bD(1,A.bh,D.fpK,null)
D.f70=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA6=new B.x("TALK TO THE EDITOR",null,D.f70,null,null,null,null,null,null,null,null,null)
D.bxs=new B.bD(1,A.bh,D.fA6,null)
D.fjx=new B.x("Tell the AI what to change",null,Ab.ql,null,null,null,null,null,null,null,null,null)
D.bxM=new B.bD(1,A.bh,D.fjx,null)
D.byD=new B.Dz(!0,"video/mp4")
D.f5k=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhG=new B.x("Move presentations between devices",null,D.f5k,null,null,null,!1,null,null,1,null,null)
D.byH=new B.qh(A.ei,A.a3,A.f,D.fhG,null)
D.fiN=new B.x("Edit in Slides",null,A.j2,null,null,null,null,null,null,null,null,null)
D.byI=new B.qh(A.ei,A.A,A.f,D.fiN,null)
D.byX=new B.dq(1,A.cn,D.byI,null)
D.a_6=new B.a_(60988,"MaterialIcons",!1)
D.bBN=new B.a_(61352,"MaterialIcons",!1)
D.ajZ=new B.a_(61531,"MaterialIcons",!1)
D.bD1=new B.a_(63062,"MaterialIcons",!1)
D.bD9=new B.a_(63109,"MaterialIcons",!1)
D.bDl=new B.a_(63206,"MaterialIcons",!1)
D.akJ=new B.a_(63238,"MaterialIcons",!1)
D.a_C=new B.a_(63365,"MaterialIcons",!1)
D.a_D=new B.a_(63367,"MaterialIcons",!1)
D.a_E=new B.a_(63368,"MaterialIcons",!1)
D.akV=new B.a_(63384,"MaterialIcons",!1)
D.bDU=new B.a_(63525,"MaterialIcons",!1)
D.bDX=new B.a_(63568,"MaterialIcons",!1)
D.bEh=new B.a_(983072,"MaterialIcons",!1)
D.bEG=new B.a_(983271,"MaterialIcons",!0)
D.am2=new B.a_(983965,"MaterialIcons",!1)
D.am3=new B.a_(983966,"MaterialIcons",!1)
D.bFE=new B.a_(984592,"MaterialIcons",!1)
D.bFW=new B.ae(A.tO,16,A.aA,null,null,null)
D.bG2=new B.ae(A.mv,null,A.c,null,null,null)
D.ame=new B.ae(A.pX,18,A.c,null,null,null)
D.bGj=new B.ae(A.Bm,18,O.lf,null,null,null)
D.bGY=new B.ae(A.jl,11,null,null,null,null)
D.bH7=new B.ae(A.a_m,null,A.eu,null,null,null)
D.bHG=new B.ae(A.r6,18,A.aA,null,null,null)
D.bHM=new B.ae(A2.Bz,14,null,null,null,null)
D.bHN=new B.ae(A.e6,28,A.cf,null,null,null)
D.bHZ=new B.ae(A.pY,20,A.c,null,null,null)
D.bI5=new B.ae(A.yd,null,null,null,null,null)
D.bIb=new B.ae(A.iV,18,A.hw,null,null,null)
D.bIg=new B.ae(A.lk,null,null,null,null,null)
D.bIL=new B.ae(A.a_T,28,A.c,null,null,null)
D.bD4=new B.a_(63065,"MaterialIcons",!1)
D.bIU=new B.ae(D.bD4,15,A.c,null,null,null)
D.bDa=new B.a_(63113,"MaterialIcons",!1)
D.bJ_=new B.ae(D.bDa,null,A.ad,null,null,null)
D.bJn=new B.ae(A.vB,22,A.bL,null,null,null)
D.bJH=new B.ae(A.vC,18,null,null,null,null)
D.bJN=new B.ae(A.BC,12,A.c,null,null,null)
D.bFg=new B.a_(983687,"MaterialIcons",!1)
D.bJY=new B.ae(D.bFg,null,A.bj,null,null,null)
D.bK4=new B.ae(A.hz,null,A.bj,null,null,null)
D.bKn=new B.ae(A.oR,22,A.c,null,null,null)
D.bKr=new B.ae(A.cD,13,A.c,null,null,null)
D.bKx=new B.ae(A.e6,26,A.ay,null,null,null)
D.bKA=new B.ae(A.rb,26,A.c,null,null,null)
D.NM=new B.ae(A.jl,8,A.c,null,null,null)
D.bKS=new B.ae(A.pX,40,A.c,null,null,null)
D.bKT=new B.ae(A.bAK,null,null,null,null,null)
D.bKX=new B.ae(A.tX,20,null,null,null,null)
D.bFf=new B.a_(983683,"MaterialIcons",!1)
D.bL6=new B.ae(D.bFf,null,A.aZ,null,null,null)
D.bL7=new B.ae(A.jl,16,A.bj,null,null,null)
D.bLs=new B.ae(A.rc,null,null,null,null,null)
D.amN=new B.ae(A.vE,22,A.c,null,null,null)
D.bLw=new B.ae(A.dW,17,A.c,null,null,null)
D.amO=new B.ae(A.jl,9,A.c,null,null,null)
D.bLB=new B.ae(A.vy,null,null,null,null,null)
D.bB0=new B.a_(57744,"MaterialIcons",!1)
D.bLI=new B.ae(D.bB0,null,null,null,null,null)
D.bLL=new B.ae(A.vy,16,null,null,null,null)
D.bFN=new B.a_(985181,"MaterialIcons",!1)
D.Gi=new B.ae(D.bFN,null,null,null,null,null)
D.bLX=new B.ae(A.lk,16,A.bL,null,null,null)
D.bF7=new B.a_(983615,"MaterialIcons",!1)
D.bLZ=new B.ae(D.bF7,12,A.c,null,null,null)
D.amU=new B.ae(A.xW,16,null,null,null,null)
D.bM6=new B.ae(A.dW,21,A.c,null,null,null)
D.bMb=new B.ae(A.hz,17,A.c,null,null,null)
D.bMc=new B.ae(A.vB,null,null,null,null,null)
D.bMr=new B.ae(A.a0h,20,A.aA,null,null,null)
D.bMG=new B.ae(A.o0,22,E.n0,null,null,null)
D.bMN=new B.ae(A.pW,13,A.ad,null,null,null)
D.bMP=new B.ae(A.alP,20,A.aA,null,null,null)
D.bAI=new B.a_(57495,"MaterialIcons",!1)
D.bMU=new B.ae(D.bAI,null,null,null,null,null)
D.bMY=new B.ae(A.o1,18,A.c,null,null,null)
D.bNi=new B.ae(A.u0,28,A.c,null,null,null)
D.bNs=new B.ae(D.akJ,null,A.aE,null,null,null)
D.bNt=new B.ae(A.pY,22,A.c,null,null,null)
D.an3=new B.ae(A.a_2,16,null,null,null,null)
D.bOe=new B.ae(A.vB,32,A.c,null,null,null)
D.bOX=new B.ae(A.iY,22,A.c,null,null,null)
D.bP0=new B.ae(A.rb,22,A.ad,null,null,null)
D.anj=new B.ae(A.tO,null,A.c1,null,null,null)
D.bPX=new B.ae(A.tN,18,null,null,null,null)
D.bQy=new B.ae(A.dW,18,A.c7,null,null,null)
D.a0G=new B.ae(A.cD,18,A.aA,null,null,null)
D.bQE=new B.ae(A.alJ,null,null,null,null,null)
D.bR3=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aQ4,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.eYB=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bRl=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eYB,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.bRM=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ez,!0,null,null,null,null)
D.cTD=w([A.dN,A.aE],x.O)
D.bTH=new B.a8(A.a3,A.a7,A.x,D.cTD,null,null)
D.bTT=new B.a8(A.b_,A.b5,A.TS,A.aup,null,null)
D.b72=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bbc=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.be8=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b9c=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cEA=w([D.b72,D.bbc,D.be8,D.b9c],x.O)
D.bUb=new B.a8(A.ax,A.aC,A.x,D.cEA,A.GR,null)
D.deW=w([A.cs,A.bA,A.b7],x.O)
D.bUd=new B.a8(A.b_,A.b5,A.TS,D.deW,null,null)
D.dgg=w([A.bj,A.ce],x.O)
D.bUh=new B.a8(A.a3,A.a7,A.x,D.dgg,null,null)
D.dbr=w([A.hl,A.d5,A.aF],x.O)
D.bUj=new B.a8(A.ax,A.aC,A.x,D.dbr,null,null)
D.cZt=w([A.cY,A.fb],x.O)
D.bUn=new B.a8(A.a3,A.a7,A.x,D.cZt,null,null)
D.deR=w([O.lf,A.d5],x.O)
D.ao4=new B.a8(A.a3,A.a7,A.x,D.deR,null,null)
D.bbM=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.deO=w([D.bbM,D.xj,A.bY],x.O)
D.bUs=new B.a8(A.a3,A.a7,A.x,D.deO,null,null)
D.cVf=w([A.b2,A.cZ,A.eH],x.O)
D.bUt=new B.a8(A.ax,A.aC,A.x,D.cVf,null,null)
D.O_=new B.a8(A.a3,A.a7,A.x,A.H5,null,null)
D.bjJ=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cxD=w([D.bjJ,A.bY,A.jc],x.O)
D.ao9=new B.a8(A.ax,A.aC,A.x,D.cxD,null,null)
D.d3A=w([A.v5,A.aw,D.AC],x.O)
D.bVt=new B.a8(A.a3,A.a7,A.x,D.d3A,null,null)
D.bkX=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.ba4=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.bf9=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cUp=w([D.bkX,D.ba4,D.bf9],x.O)
D.aoa=new B.a8(A.a3,A.a7,A.x,D.cUp,null,null)
D.bbO=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bXs=w([Aw.afv,D.bbO],x.O)
D.bVD=new B.a8(A.b_,A.b5,A.x,D.bXs,null,null)
D.cSu=w([A.mZ,A.bC],x.O)
D.bVH=new B.a8(A.b_,A.b5,A.x,D.cSu,null,null)
D.d8t=w([A.aE,A.dQ],x.O)
D.bVN=new B.a8(A.a3,A.a7,A.x,D.d8t,null,null)
D.aet=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.aw5=w([D.aet,D.ja,D.Kw],x.O)
D.bWe=new B.a8(A.ax,A.aC,A.x,D.aw5,null,null)
D.cxv=w([A.dx,A.dL],x.O)
D.bWp=new B.a8(A.b_,A.b5,A.x,D.cxv,null,null)
D.d5F=w([A.v1,Az.Es],x.O)
D.bXe=new B.a8(A.a3,A.a7,A.x,D.d5F,null,null)
D.fre=new B.x("Which Bio link?",null,A.cx,null,null,null,null,null,null,null,null,null)
D.bXp=new B.pH(null,D.fre,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yD=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a4z=new C.kS(2,"elegantNavy")
D.h1g=w([A.WM,D.ja,A.bY],x.O)
D.jG=new C.xq(0,"classic")
D.a4m=new C.jo("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a4z,4294967035,4279378237,4290283019,D.jG)
D.aFj=new C.kS(3,"elegantGold")
D.b6B=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b7x=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.ad3=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.h0J=w([D.b6B,D.b7x,D.ad3],x.O)
D.a4k=new C.jo("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aFj,4294966515,4281016592,4289102906,D.jG)
D.dBk=new C.kS(22,"goldRibbon")
D.h0F=w([A.WM,D.ja,A.hW],x.O)
D.a4d=new C.jo("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dBk,4294967035,4279378237,4291404327,D.jG)
D.dBl=new C.kS(23,"goldBaroque")
D.adH=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.h0L=w([D.adH,A.aw,A.jc],x.O)
D.a4e=new C.jo("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dBl,4294964964,4283053072,4292128567,D.jG)
D.dBn=new C.kS(4,"elegantEmerald")
D.b8G=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b9A=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.h0R=w([D.b8G,D.b9A,A.hW],x.O)
D.a4f=new C.jo("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dBn,4294376440,4279122734,4291404327,D.jG)
D.dBo=new C.kS(5,"elegantBurgundy")
D.bd9=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.h0Y=w([D.bd9,A.ack,A.hW],x.O)
D.a4i=new C.jo("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dBo,4294965238,4283043359,4291404327,D.jG)
D.dBh=new C.kS(19,"goldFiligree")
D.La=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.h0M=w([D.La,A.aw,A.jc],x.O)
D.a4g=new C.jo("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dBh,4294966259,4279378237,4292128567,D.jG)
D.dBi=new C.kS(20,"goldLaurel")
D.bjz=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.h0Z=w([A.Ko,A.hW,D.bjz],x.O)
D.a4h=new C.jo("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dBi,4294966776,4282000405,4291404327,D.jG)
D.dBj=new C.kS(21,"goldCrest")
D.acc=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.bjG=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.h0O=w([D.acc,A.aw,D.bjG],x.O)
D.a4l=new C.jo("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dBj,4294965484,4283053072,4292128567,D.jG)
D.dBm=new C.kS(24,"goldStar")
D.bkQ=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.h0S=w([D.bkQ,A.aw,D.ja],x.O)
D.a4j=new C.jo("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dBm,4294966518,4279378237,4292128567,D.jG)
D.Gt=w([D.a4m,D.a4k,D.a4d,D.a4e,D.a4f,D.a4i,D.a4g,D.a4h,D.a4l,D.a4j],x.h)
D.q9=new C.mu(0,"blank")
D.Ry=new C.mu(1,"title")
D.mD=new C.mu(2,"titleContent")
D.dVY=new C.mu(3,"twoColumn")
D.Cy=new C.mu(4,"section")
D.dVZ=new C.mu(5,"comparison")
D.HF=new C.mu(6,"flashcard")
D.HG=new C.mu(7,"quiz")
D.HH=new C.mu(8,"worksheet")
D.aox=w([D.q9,D.Ry,D.mD,D.dVY,D.Cy,D.dVZ,D.HF,D.HG,D.HH],B.ax("O<mu>"))
D.ax5=w([Ao.W9,A.dL],x.O)
D.kw=w([A.bY,A.bL,A.hV,A.hG,D.AC],x.O)
D.dxd=new C.iZ("fireworks","Royal Fireworks","Thank you for celebrating with us",D.ax5,D.kw)
D.bjR=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bd7=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cSH=w([D.bjR,D.bd7],x.O)
D.dx4=new C.iZ("confetti","Golden Confetti","Together we rise",D.cSH,D.kw)
D.cPT=w([A.nF,A.VP],x.O)
D.dx5=new C.iZ("crown","Crown of Glory","Built for our community",D.cPT,D.kw)
D.b9V=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bcN=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cWz=w([D.b9V,D.bcN],x.O)
D.u4=w([A.bJ,A.aP,A.c,A.aL,A.ak],x.O)
D.dx_=new C.iZ("aurora","Aurora Gala","A brighter future, together",D.cWz,D.u4)
D.bea=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d5L=w([G.abQ,D.bea],x.O)
D.dxg=new C.iZ("champagne","Champagne Toast","Cheers to every member",D.d5L,D.kw)
D.dxh=new C.iZ("diamonds","Diamond Rain","Every member is a jewel",X.axI,D.u4)
D.b7o=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bcj=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.daJ=w([D.b7o,D.bcj],x.O)
D.dwV=new C.iZ("starburst","Golden Starburst","Thank you!",D.daJ,D.kw)
D.bXy=w([A.fa,A.xb],x.O)
D.abZ=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Py=w([A.oz,A.is,A.vd,A.nG,D.abZ],x.O)
D.dxo=new C.iZ("balloons","Luxury Balloons","Let's celebrate",D.bXy,D.Py)
D.cPb=w([A.VY,A.w],x.O)
D.dxc=new C.iZ("galaxy","Galaxy Spiral","The sky is not the limit",D.cPb,D.u4)
D.bhX=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d2p=w([A.kl,D.bhX],x.O)
D.dx7=new C.iZ("redcarpet","Red Carpet","Tonight we shine",D.d2p,D.kw)
D.bfN=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bdY=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d6F=w([D.bfN,D.bdY],x.O)
D.dwX=new C.iZ("coins","Gold Coin Rain","Every contribution counts",D.d6F,D.kw)
D.ddk=w([A.dx,A.hF],x.O)
D.dx2=new C.iZ("lanterns","Sky Lanterns","Lighting the way together",D.ddk,D.kw)
D.baT=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cNd=w([A.xd,D.baT],x.O)
D.dwZ=new C.iZ("hearts","Floating Hearts","Made with love",D.cNd,D.Py)
D.b7X=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b8M=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.deM=w([D.b7X,D.b8M],x.O)
D.dxn=new C.iZ("petals","Rose Petals","Thank you, from our hearts",D.deM,D.Py)
D.biT=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.db2=w([A.le,D.biT],x.O)
D.dwU=new C.iZ("butterflies","Golden Butterflies","New beginnings",D.db2,D.kw)
D.bf6=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cO9=w([D.bf6,A.w],x.O)
D.dxf=new C.iZ("neon","Neon Night","Let's go!",D.cO9,D.u4)
D.bc0=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d8E=w([A.KN,D.bc0],x.O)
D.dxi=new C.iZ("disco","Disco Ball","Party time",D.d8E,D.u4)
D.bfE=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d8b=w([A.hl,D.bfE],x.O)
D.dwY=new C.iZ("sunrise","Golden Sunrise","A new day for our community",D.d8b,D.kw)
D.d7O=w([A.qM,A.dL],x.O)
D.dxj=new C.iZ("pearls","Ocean Pearls","Deep roots, bright future",D.d7O,D.u4)
D.ba_=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d82=w([D.ba_,A.dL],x.O)
D.dxm=new C.iZ("snow","Winter Gala","Warm wishes to all",D.d82,D.u4)
D.b6L=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b7I=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.ddI=w([D.b6L,D.b7I],x.O)
D.dxb=new C.iZ("laurel","Laurel Victory","We did it together",D.ddI,D.kw)
D.b6A=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bcJ=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cMj=w([D.b6A,D.bcJ],x.O)
D.dxl=new C.iZ("ribbons","Silk Ribbons","Elegance in every step",D.cMj,D.kw)
D.bdH=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cxs=w([G.AB,D.bdH],x.O)
D.dx8=new C.iZ("kente","Kente Pride","Proud of our roots",D.cxs,D.kw)
D.bgl=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.bjc=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cYb=w([D.bgl,D.bjc],x.O)
D.dx3=new C.iZ("trophy","Trophy Shine","Winners together",D.cYb,D.kw)
D.d88=w([Ap.KB,A.w],x.O)
D.dwW=new C.iZ("shooting","Shooting Stars","Make a wish",D.d88,D.u4)
D.b6S=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.afj=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.ddZ=w([D.b6S,D.afj],x.O)
D.dx9=new C.iZ("bokeh","Golden Bokeh","Shine bright",D.ddZ,D.kw)
D.b7d=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d3e=w([D.b7d,A.w],x.O)
D.dx1=new C.iZ("orbits","Golden Orbits","Always moving forward",D.d3e,D.kw)
D.biU=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.d_S=w([A.ad_,D.biU],x.O)
D.dx6=new C.iZ("flowers","Blooming Garden","Growing together",D.d_S,D.Py)
D.b70=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b7C=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.dcO=w([D.b70,D.b7C],x.O)
D.dx0=new C.iZ("music","Music Party","Celebrate with us",D.dcO,D.u4)
D.b8v=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.bjC=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cNp=w([D.b8v,D.bjC],x.O)
D.dxk=new C.iZ("mandala","Royal Mandala","Harmony and unity",D.cNp,D.kw)
D.d_X=w([G.AB,D.afj],x.O)
D.dxe=new C.iZ("sparklers","Golden Sparklers","Light up the night",D.d_X,D.kw)
D.dxa=new C.iZ("city","City Lights","The whole city celebrates",D.ax5,D.kw)
D.GC=w([D.dxd,D.dx4,D.dx5,D.dx_,D.dxg,D.dxh,D.dwV,D.dxo,D.dxc,D.dx7,D.dwX,D.dx2,D.dwZ,D.dxn,D.dwU,D.dxf,D.dxi,D.dwY,D.dxj,D.dxm,D.dxb,D.dxl,D.dx8,D.dx3,D.dwW,D.dx9,D.dx1,D.dx6,D.dx0,D.dxk,D.dxe,D.dxa],B.ax("O<iZ>"))
D.ejK=new B.z("","No ring")
D.eyN=new B.z("platinum","Platinum")
D.evr=new B.z("glow","Glow")
D.ena=new B.z("double","Double line")
D.em5=new B.z("framed","Gallery frame")
D.ejl=new B.z("rosegold","Rose gold")
D.ewb=new B.z("jewels","Jeweled")
D.esU=new B.z("aurora","Aurora")
D.BU=w([D.ejK,A.a5P,D.eyN,D.evr,H.aLO,D.ena,A.a5R,D.em5,D.ejl,D.ewb,D.esU],x.L)
D.cgZ=w([D.a4g,D.a4h,D.a4l,D.a4d,D.a4e,D.a4j],x.h)
D.bMk=new B.ae(G.ajz,16,null,null,null,null)
D.b1P=new B.vo(A.bg,D.bMk,null,x.U)
D.bB9=new B.a_(58027,"MaterialIcons",!1)
D.bG1=new B.ae(D.bB9,16,null,null,null,null)
D.b1N=new B.vo(A.L,D.bG1,null,x.U)
D.bBa=new B.a_(58030,"MaterialIcons",!1)
D.bK3=new B.ae(D.bBa,16,null,null,null,null)
D.b1Q=new B.vo(A.dM,D.bK3,null,x.U)
D.cna=w([D.b1P,D.b1N,D.b1Q],B.ax("O<vo<pX>>"))
D.cuO=w([A.AG,A.hi],x.O)
D.cuP=w([A.b2,A.bl,A.eH],x.O)
D.Pm=w([A.bL,A.hG,A.hV,A.aw,A.nG],x.O)
D.cxy=w([A.bY,D.ja,D.Kw],x.O)
D.cy5=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ehe=new B.z(4278913286,4280030216)
D.ehw=new B.z(4279373061,4278518787)
D.ehD=new B.z(4279898630,4278847235)
D.cXA=w([D.ehe,D.ehw,D.ehD],x.n)
D.cTm=w(["\u265b","\u269c","\u2726"],x.s)
D.dBf=new C.xs("Royal Onyx & Gold",D.cXA,4292128567,4294370209,4294965479,3874020544,D.cTm)
D.eh1=new B.z(4278326799,4278598442)
D.eh3=new B.z(4278395929,4278258953)
D.eha=new B.z(4278599728,4278327826)
D.ddb=w([D.eh1,D.eh3,D.eha],x.n)
D.cO1=w(["\u269c","\u2756","\u2727"],x.s)
D.dBc=new C.xs("Imperial Emerald",D.ddb,4293050997,4294699968,4294180856,3872254170,D.cO1)
D.eh4=new B.z(4278455076,4278918747)
D.eh9=new B.z(4278587439,4278322714)
D.ehn=new B.z(4279051376,4278455076)
D.dbn=w([D.eh4,D.eh9,D.ehn],x.n)
D.d3R=w(["\u2654","\u2726","\u2748"],x.s)
D.dB6=new C.xs("Sapphire Crown",D.dbn,4291417834,4294967295,4294310143,3871986666,D.d3R)
D.ehB=new B.z(4279894534,4283041554)
D.ehN=new B.z(4281008906,4279042307)
D.ehV=new B.z(4284221976,4279894534)
D.dgQ=w([D.ehB,D.ehN,D.ehV],x.n)
D.cPk=w(["\u265b","\u2766","\u2726"],x.s)
D.dB8=new C.xs("Ruby Throne",D.dgQ,4293378685,4294963145,4294964466,3874213833,D.cPk)
D.ehv=new B.z(4279371039,4281995100)
D.ehF=new B.z(4280092723,4278714896)
D.ehS=new B.z(4283045242,4279371039)
D.ddy=w([D.ehv,D.ehF,D.ehS],x.n)
D.dbJ=w(["\u2655","\u2756","\u2727"],x.s)
D.dBd=new C.xs("Amethyst Palace",D.ddy,4293314984,4294963421,4294702591,3873229802,D.dbJ)
D.eh6=new B.z(4278519045,4280032287)
D.eho=new B.z(4279111184,4278321666)
D.ehK=new B.z(4280492839,4278716426)
D.dag=w([D.eh6,D.eho,D.ehK],x.n)
D.d2c=w(["\u2726","\u25c6","\u2742"],x.s)
D.dBa=new C.xs("Obsidian & Platinum",D.dag,4293256418,4294967295,4294638330,3872378836,D.d2c)
D.ehC=new B.z(4279896588,4282194463)
D.ehL=new B.z(4280553487,4279043334)
D.ehT=new B.z(4283048488,4279896588)
D.d1H=w([D.ehC,D.ehL,D.ehT],x.n)
D.df9=w(["\u2766","\u273f","\u2727"],x.s)
D.dB7=new C.xs("Rose Gold Velvet",D.d1H,4293440672,4294960345,4294964979,3874214602,D.df9)
D.eh7=new B.z(4278520340,4279180595)
D.ehc=new B.z(4278718495,4278322443)
D.ehz=new B.z(4279510591,4278520340)
D.cEg=w([D.eh7,D.ehc,D.ehz],x.n)
D.d2T=w(["\u269c","\u2736","\u2756"],x.s)
D.dBb=new C.xs("Midnight Brass",D.cEg,4291405148,4293975208,4294439914,3872837564,D.d2T)
D.ei7=new B.z(4294703086,4293780428)
D.ei3=new B.z(4294307549,4293187253)
D.ei8=new B.z(4294966517,4293977807)
D.cRq=w([D.ei7,D.ei3,D.ei8],x.n)
D.d3h=w(["\u269c","\u265b","\u2726"],x.s)
D.dBe=new C.xs("Ivory Marble & Gold",D.cRq,4289760572,4286209048,4280951062,3863625518,D.d3h)
D.ehi=new B.z(4278978566,4280555024)
D.ehy=new B.z(4279504137,4278518530)
D.ehP=new B.z(4281211923,4278978566)
D.cPa=w([D.ehi,D.ehy,D.ehP],x.n)
D.dcr=w(["\u2742","\u2726","\u265c"],x.s)
D.dB9=new C.xs("Onyx & Copper",D.cPa,4291856987,4294365880,4294964718,3873885630,D.dcr)
D.cyd=w([D.dBf,D.dBc,D.dB6,D.dB8,D.dBd,D.dBa,D.dB7,D.dBb,D.dBe,D.dB9],B.ax("O<xs>"))
D.cAv=w([A.aw,D.AC,A.hG],x.O)
D.eph=new B.z("Original",null)
D.epp=new B.z("Wide 16:9",1.7777777777777777)
D.erE=new B.z("Landscape 3:2",1.5)
D.eoK=new B.z("Photo 4:3",1.3333333333333333)
D.eqt=new B.z("Square",1)
D.eCo=new B.z("Portrait 3:4",0.75)
D.aux=w([D.eph,D.epp,D.erE,D.eoK,D.eqt,D.eCo],B.ax("O<+(n,M?)>"))
D.auy=w([A.hG,A.bZ,A.b8,A.bt],x.O)
D.erP=new B.z("","Original")
D.etD=new B.z("circle","Circle")
D.ezx=new B.z("rounded","Rounded")
D.eAr=new B.z("triangle","Triangle")
D.evF=new B.z("hexagon","Hexagon")
D.eu2=new B.z("diamond","Diamond")
D.esT=new B.z("arch","Arch")
D.BZ=w([D.erP,D.etD,D.ezx,D.eAr,D.evF,D.eu2,D.esT],x.L)
D.dwj=new C.lb("classic_blue","Classic Blue","Normal",A.bj,A.c,A.kn,A.di,A.aK)
D.dwz=new C.lb("campus_green","Campus Green","Normal",A.aZ,A.mX,A.te,A.h5,A.ee)
D.dwq=new C.lb("warm_sand","Warm Sand","Normal",A.dT,A.hV,A.bL,A.ib,A.nK)
D.dwx=new C.lb("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aL,A.M,A.aK)
D.dwi=new C.lb("coral_fresh","Coral Fresh","Normal",A.cg,A.iu,A.qG,A.jT,A.t7)
D.dwy=new C.lb("lavender_calm","Lavender Calm","Normal",A.b7,A.ps,A.Aq,A.pw,A.j7)
D.dwk=new C.lb("ocean_breeze","Ocean Breeze","Normal",A.fb,A.qS,A.t3,A.t9,A.nL)
D.aez=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.dwv=new C.lb("berry_pop","Berry Pop","Normal",A.fj,D.aez,A.kf,G.Xg,A.EN)
D.dwl=new C.lb("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.kf,A.cr)
D.dwu=new C.lb("executive_navy","Executive Navy","Professional",A.d3,A.adW,A.di,A.lc,A.bJ)
D.dws=new C.lb("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bo,A.M,A.aP,A.cr)
D.dwm=new C.lb("corporate_steel","Corporate Steel","Professional",A.mV,A.M,A.mh,A.f6,A.bJ)
D.dwp=new C.lb("gold_luxe","Gold Luxe","Luxury",A.mU,A.dH,A.oy,A.lH,A.bL)
D.bfI=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.dwt=new C.lb("rose_gold_elite","Rose Gold Elite","Luxury",A.hi,D.bfI,A.X4,A.is,A.nG)
D.dww=new C.lb("platinum_night","Platinum Night","Luxury",A.cr,A.dL,A.bo,A.aP,A.aL)
D.dwA=new C.lb("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.pz,A.eZ,A.pG,A.jv)
D.dwh=new C.lb("royal_purple","Royal Purple","Luxury",A.mW,A.Wf,A.j7,A.kf,A.Km)
D.dwr=new C.lb("neon_pitch","Neon Pitch","Bold",A.b8,A.dL,A.M,A.b1,A.aL)
D.dwo=new C.lb("crimson_impact","Crimson Impact","Bold",A.bC,A.kl,A.ep,A.tp,A.f4)
D.dwn=new C.lb("sunset_gallery","Sunset Gallery","Bold",A.fk,A.t7,A.jT,A.qG,A.mg)
D.GL=w([D.dwj,D.dwz,D.dwq,D.dwx,D.dwi,D.dwy,D.dwk,D.dwv,D.dwl,D.dwu,D.dws,D.dwm,D.dwp,D.dwt,D.dww,D.dwA,D.dwh,D.dwr,D.dwo,D.dwn],B.ax("O<lb>"))
D.cM0=w([A.bY,D.ja],x.O)
D.d1X=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.esF=new B.z("Faces & people",D.d1X)
D.cAz=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eg1=new B.z("Ideas & work",D.cAz)
D.cTS=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.evK=new B.z("Nature",D.cTS)
D.d25=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.epf=new B.z("Places & things",D.d25)
D.cX9=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.esY=new B.z("Symbols",D.cX9)
D.cM6=w([D.esF,D.eg1,D.evK,D.epf,D.esY],B.ax("O<+(n,ai<n>)>"))
D.b75=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cMu=w([A.bY,D.ad3,D.b75],x.O)
D.b1a=new B.ac(0,A.G,A.Kj,A.aG8,40)
D.b0S=new B.ac(0,A.G,A.nI,A.el,8)
D.cMG=w([D.b1a,D.b0S],x.V)
D.cN9=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.auX=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1S=w([A.hG,A.eH,A.bC,A.az,A.cg],x.O)
D.cNW=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.adh=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cO6=w([A.WV,D.adh,A.WV],x.O)
D.cOc=w([A.hW,D.ja,D.Kw],x.O)
D.ep2=new B.z(A.bg,D.a_D)
D.eqo=new B.z(A.L,D.a_C)
D.ekp=new B.z(A.dM,D.a_E)
D.cP5=w([D.ep2,D.eqo,D.ekp],B.ax("O<+(pX,a_)>"))
D.cQ=new C.Ix(0,"text")
D.lu=new C.Ix(1,"image")
D.f0=new C.Ix(2,"shape")
D.Rx=new C.Ix(3,"pdf")
D.l1=new C.Ix(4,"signature")
D.a4G=new C.Ix(5,"bio")
D.cPY=w([D.cQ,D.lu,D.f0,D.Rx,D.l1,D.a4G],B.ax("O<Ix>"))
D.cPZ=w([A.bn,A.cF],B.ax("O<Hs>"))
D.cQz=w(["School","Documents","Sign & present"],x.s)
D.b1f=new B.ac(0,A.G,A.af9,A.un,28)
D.cQT=w([D.b1f],x.V)
D.cRb=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.PG=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.avl=w([A.hG,A.EM,A.aL,A.c,A.oz,A.aw],x.O)
D.eBM=new B.z(0.1,0.08)
D.evI=new B.z(0.3,0.05)
D.ejX=new B.z(0.55,0.1)
D.eo2=new B.z(0.8,0.06)
D.er7=new B.z(0.92,0.16)
D.eqD=new B.z(0.2,0.2)
D.eov=new B.z(0.7,0.22)
D.eup=new B.z(0.05,0.4)
D.erw=new B.z(0.95,0.45)
D.ekE=new B.z(0.12,0.7)
D.emP=new B.z(0.88,0.75)
D.emX=new B.z(0.4,0.9)
D.ein=new B.z(0.65,0.93)
D.enF=new B.z(0.25,0.97)
D.ep_=new B.z(0.85,0.9)
D.elt=new B.z(0.5,0.04)
D.cSC=w([D.eBM,D.evI,D.ejX,D.eo2,D.er7,D.eqD,D.eov,D.eup,D.erw,D.ekE,D.emP,D.emX,D.ein,D.enF,D.ep_,D.elt],x.G)
D.cSJ=w([A.c,A.hi,A.aR,A.aV],x.O)
D.dXA=new C.jG("office_blue","Office Blue",A.bj,A.di,A.aK,A.c,A.kn)
D.dXL=new C.jG("campus_green","Campus Green",A.aZ,A.h5,A.ee,A.mX,A.te)
D.dXB=new C.jG("sunset","Sunset",A.fk,A.jT,A.nK,A.iu,A.qG)
D.dXC=new C.jG("midnight","Midnight",A.aE,A.kf,A.cr,A.M,A.dx)
D.dXN=new C.jG("classic","Classic",A.d5,A.dH,A.lI,A.hV,A.h3)
D.dXK=new C.jG("rose_gold","Rose Gold",A.hi,A.xf,A.xd,A.vd,A.AG)
D.dXv=new C.jG("ocean_teal","Ocean Teal",A.fb,A.t9,A.nL,A.qS,A.t3)
D.dXu=new C.jG("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aP,A.aL)
D.dXt=new C.jG("neon_night","Neon Night",A.b8,A.b1,A.aL,A.dL,A.M)
D.dXF=new C.jG("lavender","Lavender",A.b7,A.pw,A.j7,A.ps,A.Aq)
D.dXH=new C.jG("coral","Coral",A.cg,A.jT,A.t7,A.iu,A.mg)
D.dXw=new C.jG("forest","Forest",A.hk,A.dX,A.cC,A.lJ,A.eu)
D.dXx=new C.jG("berry","Berry",A.fj,G.Xg,A.EN,D.aez,A.kf)
D.dXE=new C.jG("sand","Sand",A.dT,A.ib,A.nK,A.hV,A.bL)
D.dXJ=new C.jG("ice","Ice",A.mV,A.KO,A.aK,A.mS,A.f6)
D.dXz=new C.jG("charcoal","Charcoal",A.ak,A.aP,A.cr,A.bo,A.M)
D.dXs=new C.jG("mint","Mint",A.aV,A.fx,A.h5,A.lJ,A.pG)
D.dXI=new C.jG("crimson","Crimson",A.bC,A.mZ,A.kl,A.EK,A.tp)
D.b9z=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dXD=new C.jG("gold","Gold",A.mU,A.v1,A.oy,D.b9z,A.lH)
D.dXG=new C.jG("aqua","Aqua",A.bN,A.EA,A.ov,A.pu,A.oA)
D.dXy=new C.jG("plum","Plum",A.mW,A.xb,A.EN,A.Eo,A.qQ)
D.dXM=new C.jG("steel","Steel",A.d3,A.di,A.bo,A.kn,A.lc)
D.a27=w([D.dXA,D.dXL,D.dXB,D.dXC,D.dXN,D.dXK,D.dXv,D.dXu,D.dXt,D.dXF,D.dXH,D.dXw,D.dXx,D.dXE,D.dXJ,D.dXz,D.dXs,D.dXI,D.dXD,D.dXG,D.dXy,D.dXM],B.ax("O<jG>"))
D.cT3=w([A.bY,A.jc],x.O)
D.Rz=new C.hz(10,"rotate3d")
D.HJ=new C.hz(8,"flip")
D.aFC=new C.hz(19,"spiral")
D.qa=new C.hz(16,"bounce")
D.aFF=new C.hz(9,"flipVertical")
D.cT4=w([D.Rz,D.HJ,D.aFC,D.qa,D.aFF],x.i)
D.e7=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cTp=w([0.62,1],x.x)
D.cU_=w([0,0.32,0.68,1],x.x)
D.mE=new C.hz(6,"zoom")
D.uh=new C.hz(4,"slideUp")
D.ug=new C.hz(2,"slideLeft")
D.cU8=w([D.mE,D.HJ,D.uh,D.Rz,D.ug],x.i)
D.cUD=w([A.bZ,A.hi,A.is,A.hG,A.c],x.O)
D.b15=new B.ac(0,A.G,D.adv,A.un,30)
D.cVk=w([D.b15],x.V)
D.e6d=new B.u(0,-2.5)
D.e63=new B.u(-2.5,0)
D.e4M=new B.u(2.5,0)
D.cVn=w([A.RP,A.a52,A.aGE,A.a51,D.e6d,H.aGA,D.e63,D.e4M],x.dN)
D.GT=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cVR=w([23,114,69,56,80,144],x.t)
D.cWh=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cWG=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cYf=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cYj=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bf=new C.uB(0,"rectangle")
D.eL=new C.uB(1,"circle")
D.l2=new C.uB(6,"hexagon")
D.cYw=w([D.bf,D.eL,D.l2],x.m)
D.o7=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.aeH=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cZ4=w([D.aeH,A.dX],x.O)
D.ek7=new B.z("","Classic")
D.eiB=new B.z("caps","Bold caps")
D.eus=new B.z("elegant","Elegant")
D.ezQ=new B.z("shadow","Shadow")
D.eoo=new B.z("neon","Neon glow")
D.eyt=new B.z("outline","Outline")
D.exF=new B.z("marker","Highlighter")
D.eA0=new B.z("stamp","Stamp")
D.ezs=new B.z("retro","Retro")
D.enm=new B.z("threed","3D")
D.euY=new B.z("fire","Fire")
D.evU=new B.z("ice","Ice")
D.etC=new B.z("chalk","Chalk")
D.etH=new B.z("comic","Comic")
D.eA2=new B.z("sunset","Sunset")
D.eBa=new B.z("softglow","Soft glow")
D.ewT=new B.z("lowercase","Lowercase")
D.eu9=new B.z("double","Echo")
D.eBj=new B.z("whisper","Whisper")
D.awd=w([D.ek7,D.eiB,D.eus,D.ezQ,D.eoo,D.eyt,D.exF,D.eA0,D.ezs,D.enm,H.aLM,D.euY,D.evU,D.etC,D.etH,A.a5P,D.eA2,D.eBa,D.ewT,D.eu9,D.eBj],x.L)
D.d_k=w([3,5,7,10,12,15],x.t)
D.d0F=w([A.bZ,A.bL,A.c,A.eA,A.cs],x.O)
D.dnY=new C.td(10,"cardWorld")
D.Cq=new C.Bj(3,"rounded")
D.dEg=new C.le("world","NGMY World",D.dnY,D.Cq,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dnZ=new C.td(11,"cardSplit")
D.dEc=new C.le("business","Business Wire",D.dnZ,D.Cq,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.do_=new C.td(12,"cardBreaking")
D.dEp=new C.le("breaking","Breaking Red",D.do_,D.Cq,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.do0=new C.td(13,"cardFeature")
D.dEi=new C.le("feature","Tech Feature",D.do0,D.Cq,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aE8=new C.td(6,"circle")
D.aE2=new C.Bj(4,"circle")
D.dEm=new C.le("parchment","Royal Circle",D.aE8,D.aE2,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dEb=new C.le("ocean","Blue Ocean",D.aE8,D.aE2,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.do3=new C.td(7,"rail")
D.aE1=new C.Bj(1,"double")
D.dEd=new C.le("forest","Green Leaf",D.do3,D.aE1,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aE5=new C.td(1,"sideBySide")
D.dEr=new C.le("herald","NGMY Herald",D.aE5,D.Cq,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aE4=new C.td(0,"classic")
D.a3T=new C.Bj(9,"shadow")
D.dEq=new C.le("daily","The Daily",D.aE4,D.a3T,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.do1=new C.td(2,"splash")
D.aE3=new C.Bj(6,"cutCorner")
D.dEa=new C.le("tabloid","Big Tabloid",D.do1,D.aE3,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aE9=new C.td(9,"minimal")
D.dEl=new C.le("modern","Modern Digest",D.aE9,D.Cq,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aE6=new C.td(3,"magazine")
D.aE0=new C.Bj(0,"plain")
D.dEh=new C.le("midnight","Midnight Edition",D.aE6,D.aE0,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.do4=new C.td(8,"banner")
D.dEj=new C.le("metro","Metro Wire",D.do4,D.aE3,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dnX=new C.Bj(8,"arch")
D.dEk=new C.le("sunrise","Sunrise Post",D.aE6,D.dnX,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aE7=new C.td(5,"scrapbook")
D.dnW=new C.Bj(5,"tape")
D.dEf=new C.le("neon","Neon Beat",D.aE7,D.dnW,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.do2=new C.td(4,"wrap")
D.dEs=new C.le("gold","Golden Press",D.do2,D.a3T,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dEt=new C.le("minimal","Paper White",D.aE9,D.a3T,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dEe=new C.le("gazette","Fresh Gazette",D.aE4,D.aE1,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dEo=new C.le("times","Classic Times",D.aE5,D.aE0,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.R5=new C.Bj(2,"polaroid")
D.dEn=new C.le("scrapbook","Memory Scrapbook",D.aE7,D.R5,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a2m=w([D.dEg,D.dEc,D.dEp,D.dEi,D.dEm,D.dEb,D.dEd,D.dEr,D.dEq,D.dEa,D.dEl,D.dEh,D.dEj,D.dEk,D.dEf,D.dEs,D.dEt,D.dEe,D.dEo,D.dEn],B.ax("O<le>"))
D.d0R=w([0.45,1],x.x)
D.GV=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d1e=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fXd=new C.ot("Original",0,1,1,0,0,0)
D.fXh=new C.ot("Black & white",0,1.1,0,0,0,0)
D.fX4=new C.ot("Noir",-0.05,1.55,0,0,0,0)
D.fX8=new C.ot("Sepia",0,1,0.25,0.9,0,0)
D.fX7=new C.ot("Vivid",0,1.15,1.6,0,0,0)
D.fX0=new C.ot("Pop",0,1.3,1.9,0,0,0)
D.fX2=new C.ot("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fXe=new C.ot("Matte",0,0.9,0.85,0,0,0.55)
D.fX9=new C.ot("Cool",0,1.05,1,-0.8,0,0)
D.fXg=new C.ot("Warm",0.03,1.05,1.1,0.8,0,0)
D.fX1=new C.ot("Golden hour",0.04,1,1.25,1,0,0)
D.fX6=new C.ot("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fXf=new C.ot("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fX5=new C.ot("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fXb=new C.ot("Retro",0,0.9,0.7,0.4,0,0.35)
D.fXa=new C.ot("Forest",0,1,1.2,-0.1,-0.45,0)
D.fXc=new C.ot("Rose",0,1,1.1,0.3,0.4,0)
D.fX3=new C.ot("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d1f=w([D.fXd,D.fXh,D.fX4,D.fX8,D.fX7,D.fX0,D.fX2,D.fXe,D.fX9,D.fXg,D.fX1,D.fX6,D.fXf,D.fX5,D.fXb,D.fXa,D.fXc,D.fX3],B.ax("O<ot>"))
D.b6w=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d1g=w([D.aeH,A.dX,D.b6w],x.O)
D.efV=new B.z(0.12,0.3)
D.ew4=new B.z(0.26,0.75)
D.euo=new B.z(0.8,0.22)
D.eAa=new B.z(0.9,0.7)
D.ewS=new B.z(0.5,0.15)
D.eyv=new B.z(0.65,0.85)
D.elX=new B.z(0.08,0.85)
D.d1s=w([D.efV,D.ew4,D.euo,D.eAa,D.ewS,D.eyv,D.elX],x.G)
D.awn=w([A.b8,A.bZ,A.bt,A.b2],x.O)
D.d2g=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d2s=w([A.c,A.f6,A.dv,A.v3],x.O)
D.b9M=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d3q=w([D.b9M,D.adh],x.O)
D.d3r=w([A.v5,A.aw],x.O)
D.d3G=w([0,0.25,0.75,1],x.x)
D.d3I=w([A.x3,A.oz],x.O)
D.aFc=new C.kS(10,"kenteSunset")
D.h0H=w([D.adH,A.jP,A.aw],x.O)
D.dzx=new C.jo("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aFc,4294964964,4282000405,4279983648,D.jG)
D.aFd=new C.kS(11,"indigoMudcloth")
D.b7t=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.h0V=w([D.b7t,A.ade,A.hW],x.O)
D.dzF=new C.jo("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aFd,4294439140,4279903102,4279903102,D.jG)
D.aFe=new C.kS(12,"adinkraRoyal")
D.bkj=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.h0W=w([D.acc,D.bkj,A.aw],x.O)
D.dzH=new C.jo("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aFe,4294965484,4285218591,4287322667,D.jG)
D.aFf=new C.kS(13,"nileLotus")
D.bgC=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bdm=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.h10=w([D.bgC,D.bdm,A.hW],x.O)
D.dzG=new C.jo("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFf,4294244340,4279196764,4279196764,D.jG)
D.aFg=new C.kS(14,"shweshweIvory")
D.bbC=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.bat=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b7W=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.h0I=w([D.bbC,D.bat,D.b7W],x.O)
D.dzC=new C.jo("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFg,4294505710,4279970378,4291058750,D.jG)
D.rs=new C.kS(15,"certIvoryNavy")
D.h0G=w([D.La,D.ja,A.hW],x.O)
D.aEI=new C.xq(1,"ringsNdoa")
D.dzz=new C.jo("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rs,4294966259,4279378237,4291404327,D.aEI)
D.a4o=new C.xq(2,"coupleCards")
D.dzu=new C.jo("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rs,4294966259,4279378237,4291404327,D.a4o)
D.Ct=new C.kS(18,"certIvoryNavyBar")
D.acb=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.h0U=w([D.acb,D.ja,A.hW],x.O)
D.aEJ=new C.xq(3,"kuhoweshaForm")
D.dzs=new C.jo("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Ct,4294966519,4279378237,4291404327,D.aEJ)
D.adt=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.h1d=w([D.La,D.adt,A.hW],x.O)
D.a4p=new C.xq(4,"mahariPande")
D.dzv=new C.jo("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rs,4294966259,4279904068,4291404327,D.a4p)
D.aFh=new C.kS(16,"certIvoryGreen")
D.bb2=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.h0K=w([A.Ko,D.bb2,A.hW],x.O)
D.aEK=new C.xq(5,"familiaMti")
D.dzB=new C.jo("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aFh,4294966776,4280241466,4291404327,D.aEK)
D.a4q=new C.xq(6,"ndoaSafi")
D.dzt=new C.jo("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Ct,4294966519,4279378237,4291404327,D.a4q)
D.bf5=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.h0N=w([D.La,A.hW,D.bf5],x.O)
D.a4r=new C.xq(7,"peteWide")
D.dzy=new C.jo("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rs,4294966259,4282001936,4291404327,D.a4r)
D.dzI=new C.xq(8,"muhuriCrest")
D.dzr=new C.jo("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rs,4294966259,4279378237,4291404327,D.dzI)
D.h0X=w([D.acb,D.adt,A.hW],x.O)
D.dzJ=new C.xq(9,"fomuWazi")
D.dzE=new C.jo("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Ct,4294966519,4279904068,4291404327,D.dzJ)
D.aFi=new C.kS(17,"certIvoryRose")
D.bbG=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.h1_=w([D.bbG,D.aej,A.hW],x.O)
D.a4n=new C.xq(10,"upendoOrnate")
D.dzA=new C.jo("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aFi,4294965493,4286200650,4291404327,D.a4n)
D.d46=w([D.dzx,D.dzF,D.dzH,D.dzG,D.dzC,D.dzz,D.dzu,D.dzs,D.dzv,D.dzB,D.dzt,D.dzy,D.dzr,D.dzE,D.dzA],x.h)
D.e8=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HK=new C.vT(0,"emojis")
D.CA=new C.vT(1,"pictures")
D.HL=new C.vT(2,"icons3d")
D.a4I=new C.vT(3,"animations")
D.RB=new C.vT(4,"videoMotion")
D.CB=new C.vT(5,"luxe")
D.a2t=w([D.HK,D.CA,D.HL,D.a4I,D.RB,D.CB],B.ax("O<vT>"))
D.ez5=new B.z(A.dW,"Looks")
D.enW=new B.z(A.yp,"Light")
D.enS=new B.z(A.nh,"Colour")
D.elY=new B.z(A.y0,"Effects")
D.akD=new B.a_(63112,"MaterialIcons",!1)
D.eiR=new B.z(D.akD,"Crop")
D.d4A=w([D.ez5,D.enW,D.enS,D.elY,D.eiR],x.f2)
D.d5c=w([],x.D)
D.h1a=w([],x.L)
D.ema=new B.z("Flashcard",D.HF)
D.epR=new B.z("Quiz",D.HG)
D.erK=new B.z("Worksheet",D.HH)
D.eoV=new B.z("Notes",D.mD)
D.eqm=new B.z("Section",D.Cy)
D.d5R=w([D.ema,D.epR,D.erK,D.eoV,D.eqm],B.ax("O<+(n,mu)>"))
D.dBp=new C.kS(6,"beadedPearl")
D.be0=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.h1e=w([N.X3,D.be0,A.hW],x.O)
D.aEG=new C.jo("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dBp,4294966774,4286209070,4291404327,D.jG)
D.dBq=new C.kS(7,"artDeco")
D.bhR=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bkA=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.h1c=w([D.bhR,D.bkA,A.bY],x.O)
D.aEH=new C.jo("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dBq,4294440434,4280228630,4290283019,D.jG)
D.dBr=new C.kS(8,"rosetteCorners")
D.bjM=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b9Q=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bdW=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.h0Q=w([D.bjM,D.b9Q,D.bdW],x.O)
D.aEF=new C.jo("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dBr,4294702831,4285218602,4291394365,D.jG)
D.dBs=new C.kS(9,"modernLedger")
D.h0P=w([A.c,D.ja,D.ja],x.O)
D.aEE=new C.jo("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dBs,4294967295,4279378237,4279378237,D.jG)
D.d5V=w([D.aEG,D.aEH,D.aEF,D.aEE],x.h)
D.d62=w([A.is,A.oz],x.O)
D.cm=new C.hz(0,"none")
D.dd=new C.hz(1,"fade")
D.HI=new C.hz(3,"slideRight")
D.aFE=new C.hz(5,"slideDown")
D.dW4=new C.hz(7,"zoomOut")
D.a4H=new C.hz(11,"cube")
D.dW_=new C.hz(12,"blur")
D.aFB=new C.hz(13,"dissolve")
D.dW0=new C.hz(14,"wipeLeft")
D.dW1=new C.hz(15,"wipeRight")
D.RA=new C.hz(17,"push")
D.dW2=new C.hz(18,"flash")
D.aFD=new C.hz(20,"swing")
D.dW3=new C.hz(21,"curtain")
D.Qe=w([D.cm,D.dd,D.ug,D.HI,D.uh,D.aFE,D.mE,D.dW4,D.HJ,D.aFF,D.Rz,D.a4H,D.dW_,D.aFB,D.dW0,D.dW1,D.qa,D.RA,D.dW2,D.aFC,D.aFD,D.dW3],x.i)
D.Qf=w([D.a4m,D.a4k,D.a4d,D.a4e,D.a4f,D.a4i,D.a4g,D.a4h,D.a4l,D.a4j,D.aEG,D.aEH,D.aEF,D.aEE],x.h)
D.d6u=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d6y=w([A.Au,A.hG,A.bY],x.O)
D.eng=new B.z(A.tQ,"Design")
D.eAA=new B.z(D.akV,"Word sizes")
D.ewC=new B.z(A.BI,"Text")
D.bEw=new B.a_(983182,"MaterialIcons",!1)
D.ewG=new B.z(D.bEw,"Photo")
D.eiq=new B.z(A.lp,"Logo")
D.eBK=new B.z(A.Gf,"News")
D.d6D=w([D.eng,D.eAA,D.ewC,D.ewG,D.eiq,D.eBK],x.f2)
D.d6E=w(["golddust","sparkle","sheen"],x.s)
D.dXr=new C.eu("upload_pdf",K.Ny,"Upload PDF")
D.dWB=new C.eu("sign_paper",A.Gc,"Sign Paper")
D.bDN=new B.a_(63438,"MaterialIcons",!1)
D.dXn=new C.eu("hd_photo",D.bDN,"HD Photo")
D.dWt=new C.eu("sharpen",E.a_o,"Sharpen")
D.dWD=new C.eu("print",K.Ny,"Download PDF")
D.dX4=new C.eu("rotate",D.akD,"Rotate")
D.dWM=new C.eu("text_box",A.BI,"Text Box")
D.dWO=new C.eu("picture",A.tU,"Picture")
D.dWK=new C.eu("title",A.yj,"Title")
D.dWG=new C.eu("subtitle",T.alu,"Subtitle")
D.dXd=new C.eu("bullets",I.a_F,"Bullet List")
D.dWH=new C.eu("numbered",A.Nm,"Numbered")
D.dXg=new C.eu("quote",A2.Bz,"Quote")
D.dWT=new C.eu("citation",A.o0,"Citation")
D.dXj=new C.eu("date_stamp",Ah.a_t,"Date Stamp")
D.dX6=new C.eu("page_number",A.yi,"Page #")
D.dXa=new C.eu("header_bar",A.BK,"Header")
D.dWN=new C.eu("footer_bar",Aq.a0c,"Footer")
D.dWC=new C.eu("divider",A.tT,"Divider")
D.dWy=new C.eu("highlight",A.a_L,"Highlight")
D.dXc=new C.eu("redact",A.ym,"Redact")
D.dX_=new C.eu("callout",A.Bv,"Callout")
D.dXl=new C.eu("checkboxes",I.ajT,"Checklist")
D.dWX=new C.eu("table",A.a09,"Table")
D.dWR=new C.eu("memo",I.a_W,"Memo")
D.dX0=new C.eu("letter",A.G2,"Letter")
D.bDp=new B.a_(63259,"MaterialIcons",!0)
D.dWs=new C.eu("agenda",D.bDp,"Agenda")
D.dWE=new C.eu("toc",AA.al6,"Contents")
D.bDJ=new B.a_(63406,"MaterialIcons",!1)
D.dWY=new C.eu("sig_line",D.bDJ,"Sign Line")
D.dWl=new C.eu("initial_line",A.jk,"Initials")
D.dWo=new C.eu("approved",A.lp,"APPROVED")
D.dX2=new C.eu("draft",A.oR,"DRAFT")
D.dX8=new C.eu("confidential",A.jl,"Confidential")
D.dXb=new C.eu("sticky",A.NF,"Sticky Note")
D.dXk=new C.eu("progress",A.al5,"Progress")
D.bF_=new B.a_(983507,"MaterialIcons",!1)
D.dWz=new C.eu("stars",D.bF_,"Star Rating")
D.dWj=new C.eu("equation",A.akX,"Equation")
D.dWu=new C.eu("timeline",A.NG,"Timeline")
D.dWS=new C.eu("two_col",A.a0d,"Two Columns")
D.dWw=new C.eu("compare",A1.a_w,"Compare")
D.dWh=new C.eu("duplicate_el",A.fL,"Duplicate")
D.dXp=new C.eu("delete_el",A.e6,"Delete")
D.dXf=new C.eu("bring_fwd",N.akR,"Bring Front")
D.dWm=new C.eu("send_back",N.akQ,"Send Back")
D.dX1=new C.eu("align_left",D.a_D,"Align L")
D.dX7=new C.eu("align_center",D.a_C,"Align C")
D.dXo=new C.eu("align_right",D.a_E,"Align R")
D.dWL=new C.eu("word_count",A_.a_7,"Word Count")
D.dWI=new C.eu("link_text",A.ho,"Link")
D.dX5=new C.eu("phone",A.iB,"Phone")
D.dWx=new C.eu("email",A.Bx,"Email")
D.dXq=new C.eu("qr_placeholder",A.jn,"QR Placeholder")
D.dWr=new C.eu("rectangle",A3.vD,"Rectangle")
D.dWW=new C.eu("circle",A.r4,"Circle")
D.dWn=new C.eu("arrow",A.iV,"Arrow")
D.dXe=new C.eu("line",A.tT,"Line")
D.dWA=new C.eu("triangle",A.a_u,"Triangle")
D.bDx=new B.a_(63318,"MaterialIcons",!1)
D.dWF=new C.eu("grayscale",D.bDx,"Grayscale")
D.dWP=new C.eu("brighten",I.akc,"Brighten")
D.dWU=new C.eu("flip_h",A.FT,"Flip H")
D.bDE=new B.a_(63348,"MaterialIcons",!1)
D.dXm=new C.eu("flip_v",D.bDE,"Flip V")
D.dX9=new C.eu("cover_page",A.pS,"Cover Page")
D.dWk=new C.eu("invoice",A.h9,"Invoice")
D.dWv=new C.eu("resume",A.mq,"Resume")
D.dWJ=new C.eu("minutes",A.oL,"Minutes")
D.dWp=new C.eu("lab_report",A.NB,"Lab Report")
D.dWq=new C.eu("rubric",A.tR,"Rubric")
D.dWV=new C.eu("flashcard_tool",V.G9,"Flashcard")
D.dXh=new C.eu("quiz_tool",A.G6,"Quiz Block")
D.dWZ=new C.eu("worksheet_tool",L.FK,"Worksheet")
D.dX3=new C.eu("outline_share",A.ND,"Share Outline")
D.dXi=new C.eu("export_json",D.ajZ,"Export JSON")
D.dWi=new C.eu("new_slide",D.a_6,"New Slide")
D.dWQ=new C.eu("present",A.pY,"Present")
D.d73=w([D.dXr,D.dWB,D.dXn,D.dWt,D.dWD,D.dX4,D.dWM,D.dWO,D.dWK,D.dWG,D.dXd,D.dWH,D.dXg,D.dWT,D.dXj,D.dX6,D.dXa,D.dWN,D.dWC,D.dWy,D.dXc,D.dX_,D.dXl,D.dWX,D.dWR,D.dX0,D.dWs,D.dWE,D.dWY,D.dWl,D.dWo,D.dX2,D.dX8,D.dXb,D.dXk,D.dWz,D.dWj,D.dWu,D.dWS,D.dWw,D.dWh,D.dXp,D.dXf,D.dWm,D.dX1,D.dX7,D.dXo,D.dWL,D.dWI,D.dX5,D.dWx,D.dXq,D.dWr,D.dWW,D.dWn,D.dXe,D.dWA,D.dWF,D.dWP,D.dWU,D.dXm,D.dX9,D.dWk,D.dWv,D.dWJ,D.dWp,D.dWq,D.dWV,D.dXh,D.dWZ,D.dX3,D.dXi,D.dWi,D.dWQ],B.ax("O<eu>"))
D.d7c=w([A.cr,A.ak],x.O)
D.ehZ=new B.z(4286331629,4292552567)
D.ehM=new B.z(4280640491,4278630100)
D.ei6=new B.z(4294538006,4292943176)
D.eh8=new B.z(4278556265,4280640491)
D.d1C=w([D.ehZ,D.ehM,D.ei6,D.eh8],x.n)
D.cqU=w([4294626325,4280472558,4294210230],x.t)
D.dWc=new C.nH("colorful","Colorful",A.nh,D.d1C,4294967295,3875536895,D.cqU,D.mE)
D.ehA=new B.z(4279522093,4279657780)
D.ehQ=new B.z(4281750292,4283268111)
D.ehb=new B.z(4278603323,4279203438)
D.ehR=new B.z(4282343954,4279599165)
D.cBM=w([D.ehA,D.ehQ,D.ehb,D.ehR],x.n)
D.cqC=w([4288931381,4294829706,4287033260],x.t)
D.dW8=new C.nH("nature","Nature",A.Gd,D.cBM,4294442727,3874290891,D.cqC,D.dd)
D.ehu=new B.z(4279369771,4283178389)
D.ehr=new B.z(4279179050,4286456526)
D.ehI=new B.z(4280163147,4290648157)
D.eh0=new B.z(4278322711,4285343961)
D.cTh=w([D.ehu,D.ehr,D.ehI,D.eh0],x.n)
D.cqQ=w([4294210230,4280472558,4289170426],x.t)
D.dW6=new C.nH("vibe","Vibe",A.a_J,D.cTh,4294967295,3874869502,D.cqQ,D.ug)
D.ei2=new B.z(4290007817,4292552567)
D.ehX=new B.z(4286328082,4294286859)
D.ei1=new B.z(4288485197,4294538006)
D.ehW=new B.z(4285343961,4293675161)
D.bXZ=w([D.ei2,D.ehX,D.ei1,D.ehW],x.n)
D.cqV=w([4294829706,4294967295,4284999929],x.t)
D.dW7=new C.nH("celebration","Celebration",A.lk,D.bXZ,4294967295,4009752557,D.cqV,D.qa)
D.ehp=new B.z(4279179050,4280171146)
D.eht=new B.z(4279310375,4280232247)
D.ehh=new B.z(4278916151,4280172719)
D.ehq=new B.z(4279179050,4281549141)
D.cMn=w([D.ehp,D.eht,D.ehh,D.ehq],x.n)
D.cqx=w([4281908728,4294626325,4287931320],x.t)
D.dWb=new C.nH("professional","Professional",A.Bt,D.cMn,4294967295,3872118241,D.cqx,D.RA)
D.ehl=new B.z(4278995566,4278413729)
D.ehd=new B.z(4278727492,4279137424)
D.ehJ=new B.z(4280171146,4278751666)
D.ehm=new B.z(4278995566,4279590517)
D.cuH=w([D.ehl,D.ehd,D.ehJ,D.ehm],x.n)
D.cqA=w([4286436348,4284410580,4294829706],x.t)
D.dWd=new C.nH("ocean","Ocean",I.a0f,D.cuH,4294967295,3873501950,D.cqA,D.uh)
D.ehY=new B.z(4286328082,4294538006)
D.ei_=new B.z(4286781507,4294677052)
D.ehU=new B.z(4283178389,4294197086)
D.ei0=new B.z(4288295954,4294688548)
D.cIz=w([D.ehY,D.ei_,D.ehU,D.ei0],x.n)
D.cqW=w([4294829706,4294967295,4294747557],x.t)
D.dWe=new C.nH("sunset","Sunset",A.NI,D.cIz,4294967295,4009749973,D.cqW,D.dd)
D.eia=new B.z(4294967295,4294047225)
D.ei5=new B.z(4294507260,4294967295)
D.ei9=new B.z(4294967295,4293060848)
D.ei4=new B.z(4294507260,4294047225)
D.cWn=w([D.eia,D.ei5,D.ei9,D.ei4],x.n)
D.cqv=w([4280640491,4279179050,4287931320],x.t)
D.dWa=new C.nH("minimal","Minimal",A3.vD,D.cWn,4279179050,4282865001,D.cqv,D.dd)
D.ehk=new B.z(4278979081,4280886564)
D.ehE=new B.z(4280031511,4278979081)
D.ehs=new B.z(4279308561,4281148438)
D.ehj=new B.z(4278979081,4280031511)
D.d97=w([D.ehk,D.ehE,D.ehs,D.ehj],x.n)
D.cqJ=w([4292128567,4294829706,4289241758],x.t)
D.dWf=new C.nH("elegant","Elegant",A.lS,D.d97,4294898631,3873957348,D.cqJ,D.aFB)
D.ehG=new B.z(4280159034,4282058596)
D.ehg=new B.z(4278916151,4280163147)
D.ehO=new B.z(4281208933,4278916151)
D.ehx=new B.z(4279502891,4283178389)
D.dfK=w([D.ehG,D.ehg,D.ehO,D.ehx],x.n)
D.cqS=w([4294296657,4292128567,4291081725],x.t)
D.dW9=new C.nH("royal","Royal Gold",A.iY,D.dfK,4294965222,3874084351,D.cqS,D.mE)
D.eh5=new B.z(4278464302,4280163147)
D.ehf=new B.z(4278916151,4279455306)
D.ehH=new B.z(4280163147,4283040846)
D.eh2=new B.z(4278332450,4281413249)
D.d1j=w([D.eh5,D.ehf,D.ehH,D.eh2],x.n)
D.cqw=w([4281193663,4289170426,4294210230],x.t)
D.dWg=new C.nH("aurora","Aurora Glow",A.dW,D.d1j,4293983738,3869766608,D.cqw,D.dd)
D.vZ=w([D.dWc,D.dW8,D.dW6,D.dW7,D.dWb,D.dWd,D.dWe,D.dWa,D.dWf,D.dW9,D.dWg],B.ax("O<nH>"))
D.bev=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d7J=w([A.qJ,D.bev,A.qJ],x.O)
D.d80=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d84=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.ewu=new B.z("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.emR=new B.z("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.erk=new B.z("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eeY=new B.z("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eq0=new B.z("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.eog=new B.z("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.esu=new B.z("Surprise me","")
D.d8A=w([D.ewu,D.emR,D.erk,D.eeY,D.eq0,D.eog,D.esu],x.L)
D.b7Y=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bik=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d9k=w([A.c,D.b7Y,D.bik],x.O)
D.dbe=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aFa=new C.kS(0,"heritageGold")
D.bdb=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.h1f=w([D.bdb,W.adE,A.aw],x.O)
D.dzD=new C.jo("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aFa,4294570461,4284234270,4292128567,D.jG)
D.aFb=new C.kS(1,"heritageCrimson")
D.b6s=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.bbD=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bia=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.h0T=w([D.b6s,D.bbD,D.bia],x.O)
D.dzw=new C.jo("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aFb,4294635750,4285213214,4292912216,D.jG)
D.dbi=w([D.a4m,D.a4k,D.dzD,D.dzw,D.a4f,D.a4i],x.h)
D.dFw=new C.rp(1,"circuit")
D.dFZ=new C.m3("neural","Neural Link","Robotic",D.dFw,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dFv=new C.rp(0,"grid")
D.dFW=new C.m3("signal","Signal Grid","Robotic",D.dFv,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dFB=new C.rp(2,"hexes")
D.dFH=new C.m3("core","Core Protocol","Robotic",D.dFB,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aFy=new C.rp(11,"diagonal")
D.dFS=new C.m3("steel","Steel Tech","Robotic",D.aFy,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aFz=new C.rp(3,"rings")
D.dFG=new C.m3("vault","Vault Gold","Robotic",D.aFz,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dFz=new C.rp(13,"leaves")
D.dFJ=new C.m3("forest","Forest Morning","Nature",D.dFz,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aFA=new C.rp(5,"waves")
D.dFQ=new C.m3("ocean","Ocean Calm","Nature",D.aFA,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dFC=new C.rp(6,"sunset")
D.dFV=new C.m3("sunset","Sunset Glow","Nature",D.dFC,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dFD=new C.rp(7,"mountains")
D.dFI=new C.m3("mountain","Mountain Air","Nature",D.dFD,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dFE=new C.rp(8,"stars")
D.dFP=new C.m3("night","Night Sky","Nature",D.dFE,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a4F=new C.rp(4,"orbs")
D.dFN=new C.m3("aurora","Aurora","Nature",D.a4F,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dFX=new C.m3("sand","Sand Dune","Nature",D.aFA,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dFF=new C.rp(9,"rays")
D.dFM=new C.m3("golden","Golden Hour","Warm",D.dFF,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dFK=new C.m3("royal","Royal Purple","Warm",D.aFy,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dFL=new C.m3("rose","Rose Petal","Warm",D.a4F,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dFy=new C.rp(12,"blocks")
D.dFO=new C.m3("electric","Electric Blue","Bold",D.dFy,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dFY=new C.m3("mint","Fresh Mint","Bold",D.a4F,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dFA=new C.rp(14,"minimal")
D.dFU=new C.m3("white","Clean White","Clean",D.dFA,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dFx=new C.rp(10,"frame")
D.dFR=new C.m3("midnight","Midnight Gold","Clean",D.dFx,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dFT=new C.m3("community","Community Green","Clean",D.aFz,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2W=w([D.dFZ,D.dFW,D.dFH,D.dFS,D.dFG,D.dFJ,D.dFQ,D.dFV,D.dFI,D.dFP,D.dFN,D.dFX,D.dFM,D.dFK,D.dFL,D.dFO,D.dFY,D.dFU,D.dFR,D.dFT],B.ax("O<m3>"))
D.dbF=w([D.AC,A.v5,A.hG,A.bY],x.O)
D.dbV=w([D.aet,D.ja],x.O)
D.dc4=w(["pdf","docx","txt","md"],x.s)
D.eFe=new B.bo(-3,150,34)
D.eFf=new B.bo(-3,214,62)
D.eFg=new B.bo(-3,288,62)
D.dcT=w([D.eFe,D.eFf,D.eFg],B.ax("O<+(M,M,M)>"))
D.ddm=w(["rays","bokeh","aurora","spotlight"],x.s)
D.ddX=w(["Write","Design","Print & fold"],x.s)
D.jH=new C.uB(2,"triangle")
D.Cz=new C.uB(3,"arrow")
D.fs=new C.uB(4,"line")
D.jI=new C.uB(5,"parallelogram")
D.de_=w([D.bf,D.eL,D.jH,D.Cz,D.fs,D.jI,D.l2],x.m)
D.eg9=new B.z(240,96)
D.eiJ=new B.z(560,46)
D.de4=w([D.eg9,D.eiJ],x.G)
D.deJ=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). The big billboard behind the house now reads the right way up.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.h1q=new C.xt(0,"classic")
D.dBv=new C.nD("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aFa,4294570461,4282000405,4284234270)
D.dBH=new C.nD("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aFb,4294635750,4281999378,4285213214)
D.dBw=new C.nD("elegant_navy","Umoja Mzuri",y.s,D.a4z,4294967035,4279378237,4290283019)
D.dBJ=new C.nD("elegant_gold","Umoja wa Dhahabu",y.Q,D.aFj,4294966515,4281016592,4289102906)
D.dBL=new C.nD("kente_sunset","Kente ya Jua",y.H,D.aFc,4294964964,4282000405,4279983648)
D.dBt=new C.nD("indigo_mudcloth","Nguo ya Indigo",y.n,D.aFd,4294439140,4279903102,4279903102)
D.dBy=new C.nD("adinkra_royal","Muhuri wa Adinkra",y.z,D.aFe,4294965484,4285218591,4287322667)
D.dBD=new C.nD("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aFf,4294244340,4279196764,4279196764)
D.dBF=new C.nD("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aFg,4294505710,4279970378,4291058750)
D.h1r=new C.xt(1,"ringsNdoa")
D.dBx=new C.nD("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rs,4294966259,4279378237,4291404327)
D.h1t=new C.xt(2,"coupleCards")
D.dBI=new C.nD("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rs,4294966259,4279378237,4291404327)
D.h1u=new C.xt(3,"kuhoweshaForm")
D.dBE=new C.nD("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Ct,4294966519,4279378237,4291404327)
D.h1v=new C.xt(4,"mahariPande")
D.dBu=new C.nD("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rs,4294966259,4279904068,4291404327)
D.h1w=new C.xt(5,"familiaMti")
D.dBK=new C.nD("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aFh,4294966776,4280241466,4291404327)
D.h1x=new C.xt(6,"ndoaSafi")
D.dBB=new C.nD("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Ct,4294966519,4279378237,4291404327)
D.h1y=new C.xt(7,"peteWide")
D.dBA=new C.nD("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rs,4294966259,4282001936,4291404327)
D.h1z=new C.xt(8,"muhuriCrest")
D.dBz=new C.nD("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rs,4294966259,4279378237,4291404327)
D.h1A=new C.xt(9,"fomuWazi")
D.dBC=new C.nD("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Ct,4294966519,4279904068,4291404327)
D.h1s=new C.xt(10,"upendoOrnate")
D.dBG=new C.nD("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aFi,4294965493,4286200650,4291404327)
D.Qs=w([D.dBv,D.dBH,D.dBw,D.dBJ,D.dBL,D.dBt,D.dBy,D.dBD,D.dBF,D.dBx,D.dBI,D.dBE,D.dBu,D.dBK,D.dBB,D.dBA,D.dBz,D.dBC,D.dBG],B.ax("O<nD>"))
D.Cx=new C.aqE(0,"landscape169")
D.oa=new C.aqE(1,"portrait916")
D.deQ=w([D.Cx,D.oa],B.ax("O<aqE>"))
D.axT=w([A.hG,A.bL,A.cs,A.is,A.c],x.O)
D.u9=w([A.bY,A.ib],x.O)
D.efl=new B.z(1000,"M")
D.ejZ=new B.z(900,"CM")
D.eiD=new B.z(500,"D")
D.egY=new B.z(400,"CD")
D.efm=new B.z(100,"C")
D.ek_=new B.z(90,"XC")
D.eiE=new B.z(50,"L")
D.egZ=new B.z(40,"XL")
D.efq=new B.z(10,"X")
D.ek9=new B.z(9,"IX")
D.eiV=new B.z(5,"V")
D.eip=new B.z(4,"IV")
D.efQ=new B.z(1,"I")
D.dfq=w([D.efl,D.ejZ,D.eiD,D.egY,D.efm,D.ek_,D.eiE,D.egZ,D.efq,D.ek9,D.eiV,D.eip,D.efQ],x.ek)
D.eGf=new B.cC(["open",A.jk,"Open & write","Keep writing this book"])
D.eGG=new B.cC(["print",A.tX,"Print as a book","Fold and staple it"])
D.dfA=w([D.eGf,D.eGG],B.ax("O<+(n,a_,n,n)>"))
D.dgf=w([D.a4H,D.mE,D.HJ,D.RA,D.dd,D.Rz],x.i)
D.ex4=new B.z(-1,"Small")
D.ef9=new B.z(0,"Normal")
D.efP=new B.z(1,"Big")
D.egp=new B.z(2,"Huge")
D.dgK=w([D.ex4,D.ef9,D.efP,D.egp],x.ek)
D.dh9=w([49,65,89,38,83,89],x.t)
D.dhg=w([A.v5,A.hG,A.bY],x.O)
D.dhH=w([D.dd,D.mE,D.ug,D.a4H,D.HJ,D.RA],x.i)
D.aDb=new B.dS([0,D.Lr,8,D.afN,12,D.afO],B.ax("dS<H,a3s>"))
D.e1b={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bi2=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cMx=w([A.bL,D.bi2],x.O)
D.d5D=w([A.b1,A.bj],x.O)
D.d0q=w([A.bZ,A.aR,A.c7],x.O)
D.dfB=w([A.cr,A.bv],x.O)
D.cUc=w([A.b8,A.fj],x.O)
D.d35=w([A.b7,A.fa],x.O)
D.bbo=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d2n=w([D.bbo,A.oz],x.O)
D.cY1=w([A.h1,A.x7],x.O)
D.cU0=w([A.bu,A.ce],x.O)
D.dki=new B.bk(D.e1b,[D.cMx,H.aot,D.d5D,D.d0q,D.dfB,D.cUc,D.d35,D.d2n,D.cY1,D.cU0],B.ax("bk<n,ai<w>>"))
D.e0l={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a3y=new B.bk(D.e0l,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<n,n>"))
D.a3F=new B.bk(A.i5,[],B.ax("bk<H,+icon3d,picture(n?,n?)>"))
D.doH=new F.MH(30,null)
D.dtL=new F.mq("Chapter 1","","","")
D.deB=w([D.dtL],x.B)
D.dtP=new F.rf("My Book","","",D.deB,E.aEu)
D.dtN=new F.ur("starry",null,null,null,null,"","","")
D.dtQ=new F.rf("Dream Big","","",E.a2C,D.dtN)
D.dtO=new F.ur("story",null,null,null,null,"","","")
D.dtR=new F.rf("Little Lion","","",E.a2C,D.dtO)
D.dtM=new F.ur("vintage",null,null,null,null,"","","")
D.dtS=new F.rf("Our Story","","",E.a2C,D.dtM)
D.dwT=new C.Ek("","NGMY","","")
D.dE9=new C.zl("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dW5=new C.b0w(null,null,null,null)
D.dXO=new C.aqJ(null)
D.dY0=new C.are(0,"smaller")
D.dY1=new C.are(1,"bigger")
D.aFO=new C.are(2,"fit")
D.e3I=new B.u(3,6)
D.e3S=new B.u(4,8)
D.e7i=new B.D(E.agD,T.abz,null)
D.e7m=new B.D(A.Y3,A.lF,null)
D.bGh=new B.ae(A.ln,16,A.c1,null,null,null)
D.e7q=new B.D(A.iU,D.bGh,null)
D.b5R=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e7C=new B.D(A.Fn,D.b5R,null)
D.bQw=new B.ae(A.cD,16,A.aA,null,null,null)
D.e7G=new B.D(A.eq,D.bQw,null)
D.fkV=new B.x("Play",null,A.nv,null,null,null,null,null,null,null,null,null)
D.d5S=w([U.amV,A.rG,D.fkV],x.p)
D.eKS=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d5S,null)
D.e7J=new B.D(A.nX,D.eKS,null)
D.b6_=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eQa=new B.a7(20,20,D.b6_,null)
D.e7O=new B.D(A.iU,D.eQa,null)
D.ftU=new B.x("Seconds per slide",null,A.hs,null,null,null,null,null,null,null,null,null)
D.e7W=new B.D(A.bm,D.ftU,null)
D.e9g=new C.a8h(2,"print")
D.e9j=new B.iP(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eaW=new B.h8("/Annot")
D.eaY=new B.h8("/URI")
D.ffh=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.ed_=new B.jq("share",48,D.ffh,null,B.ax("jq<n>"))
D.bQq=new B.ae(A.dW,14,A.eA,null,null,null)
D.ed8=new B.cL(null,-2,-2,null,null,null,D.bQq,null)
D.cOx=w([N.ae7,A.K],x.O)
D.bWN=new B.a8(A.a3,A.a7,A.x,D.cOx,null,null)
D.aZH=new B.o(null,null,null,null,null,D.bWN,A.n)
D.bmT=new B.kP(D.aZH,A.be,null,null)
D.edk=new B.cL(0,0,null,0,8,null,D.bmT,null)
D.dah=w([A.hV,A.mg,A.cg],x.O)
D.edZ=new B.bT(A.A,0.5,A.x,null,0,D.dah,null,null)
D.egi=new B.z(0.22,A.bj)
D.eku=new B.z("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.emw=new B.z(0.5,A.hi)
D.evD=new B.z(0.78,A.aV)
D.eG5=new B.cC([A.bt,0.22,0.7,2.6])
D.eGb=new B.cC([A.b8,0.36,1.2,1.3])
D.eGh=new B.cC([A.dQ,0.28,0.2,0.4])
D.eGn=new B.cC([A.cy,0.05,0.3,0.35])
D.eGt=new B.cC([A.bu,0.28,0.9,0])
D.eGB=new B.cC([A.aE,-0.25,-0.15,0.45])
D.eHr=new B.cC([A.bZ,0.42,1,4.1])
D.eKz=new B.a9e(9)
D.bHn=new B.ae(A.Gf,28,A.c7,null,null,null)
D.fur=new B.x("NGMY News",null,A.dm,null,null,null,null,null,null,null,null,null)
D.bwG=new B.bD(1,A.bh,D.fur,null)
D.ddp=w([D.bHn,A.av,D.bwG],x.p)
D.eKM=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.ddp,null)
D.bHy=new B.ae(A.o0,16,A.c,null,null,null)
D.fvV=new B.x("Book",null,A.oi,null,null,null,null,null,null,null,null,null)
D.dhf=w([D.bHy,A.ec,D.fvV],x.p)
D.eKU=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.dhf,null)
D.bO_=new B.ae(A.jl,10,A.c,null,null,null)
D.fj1=new B.x("Pro",null,A.nt,null,null,null,null,null,null,null,null,null)
D.d5X=w([D.bO_,A.qh,D.fj1],x.p)
D.eKY=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d5X,null)
D.ftT=new B.x("Make a newspaper",null,Au.TB,null,null,null,null,null,null,null,null,null)
D.bXX=w([E.a0A,A.ab,D.ftT],x.p)
D.eKZ=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bXX,null)
D.bMy=new B.ae(A.lk,18,A.bL,null,null,null)
D.fl8=new B.x("Ending celebration",null,A.i7,null,null,null,null,null,null,null,null,null)
D.dcu=w([D.bMy,A.bp,D.fl8],x.p)
D.eL1=new B.cm(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dcu,null)
D.bNM=new B.ae(A.jk,18,A.jT,null,null,null)
D.f_O=new B.G(!0,A.jT,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fwb=new B.x("Write",null,D.f_O,null,null,null,null,null,null,null,null,null)
D.cWb=w([D.bNM,A.ab,D.fwb],x.p)
D.eL6=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cWb,null)
D.fj_=new B.x("Download picture",null,A.p9,null,null,null,null,null,null,null,null,null)
D.byK=new B.qh(A.ei,A.A,A.f,D.fj_,null)
D.byV=new B.dq(1,A.cn,D.byK,null)
D.d6j=w([K.amL,A.ab,D.byV],x.p)
D.eL7=new B.cm(A.aO,A.bb,A.j,A.m,null,A.p,null,0,D.d6j,null)
D.bJl=new B.ae(A.Gf,22,A.c7,null,null,null)
D.fsy=new B.x("NGMY NEWS",null,H.a7e,null,null,null,null,null,null,null,null,null)
D.cNZ=w([D.bJl,A.ab,D.fsy],x.p)
D.eLf=new B.cm(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cNZ,null)
D.eLr=new B.p6(!1,!1,null,T.Vv,null,A.bX,null,null,null)
D.a6j=new B.jk([D.cm,D.dd,D.ug,D.HI,D.uh,D.aFE],B.ax("jk<hz>"))
D.e2w={title:0,quote:1,closing:2,bio:3}
D.eMz=new B.eI(D.e2w,4,x.M)
D.e0D={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eMB=new B.eI(D.e0D,5,x.M)
D.e20={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a6k=new B.eI(D.e20,8,x.M)
D.e1j={Design:0,Transitions:1,Insert:2}
D.eMF=new B.eI(D.e1j,3,x.M)
D.h1I=new B.jk([D.a4I],B.ax("jk<vT>"))
D.e1s={float3d:0,drift:1,pulse:2}
D.eMI=new B.eI(D.e1s,3,x.M)
D.aMT=new B.jk([D.HF,D.HG,D.HH],B.ax("jk<mu>"))
D.e0A={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aMW=new B.eI(D.e0A,14,x.M)
D.h1J=new B.eI(A.i5,0,B.ax("eI<vT>"))
D.e1p={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.SG=new B.eI(D.e1p,4,x.M)
D.e0t={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aMZ=new B.eI(D.e0t,30,x.M)
D.e1x={circle:0,triangle:1,hexagon:2,diamond:3}
D.eMY=new B.eI(D.e1x,4,x.M)
D.eP8=new B.ar(390,844)
D.ePV=new B.a7(20,20,A6.Kh,null)
D.aNK=new B.a7(null,2.5,null,null)
D.eQ4=new B.a7(18,18,A6.Kh,null)
D.bNQ=new B.ae(A.iY,19,A.c,null,null,null)
D.eQf=new B.a7(38,38,D.bNQ,null)
D.bM8=new B.ae(A.yq,22,A.c,null,null,null)
D.eQh=new B.a7(40,40,D.bM8,null)
D.eQQ=new B.hM(2,10,10,1.15,null)
D.aNS=new B.hM(2,16,14,0.62,null)
D.buJ=new B.Q(32,30,32,40)
D.b7k=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bHk=new B.ae(A.pS,56,D.b7k,null,null,null)
D.af0=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f1L=new B.G(!0,D.af0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpD=new B.x("Your books will live here.",null,D.f1L,null,A.L,null,null,null,null,null,null,null)
D.cYW=w([D.bHk,A.S,D.fpD],x.p)
D.blS=new B.fm(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cYW,null)
D.e7U=new B.D(D.buJ,D.blS,null)
D.eRa=new B.m6(D.e7U,null)
D.fpA=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eRs=new B.b1(D.fpA,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fnH=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eRt=new B.b1(D.fnH,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fsB=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eRC=new B.b1(D.fsB,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ft6=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eRR=new B.b1(D.ft6,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fmm=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eS3=new B.b1(D.fmm,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fA3=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.eSm=new B.b1(D.fA3,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxf=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.eSx=new B.b1(D.fxf,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fte=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eTd=new B.b1(D.fte,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhj=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eTt=new B.b1(D.fhj,null,null,null,null,null,null,null,A.io,null,null,null,null,A.pI,!1,null,null,null,A.r,null)
D.fj7=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eTL=new B.b1(D.fj7,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fph=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eTN=new B.b1(D.fph,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.foY=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eTO=new B.b1(D.foY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fve=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eTP=new B.b1(D.fve,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fdt=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eTY=new B.b1(D.fdt,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fkg=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eUk=new B.b1(D.fkg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fyP=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eUm=new B.b1(D.fyP,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fym=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eUq=new B.b1(D.fym,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fct=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eUs=new B.b1(D.fct,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fum=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eUB=new B.b1(D.fum,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxY=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eUQ=new B.b1(D.fxY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fxP=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eUS=new B.b1(D.fxP,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fcl=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eUY=new B.b1(D.fcl,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fgj=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eVp=new B.b1(D.fgj,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fx1=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eVA=new B.b1(D.fx1,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fg7=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eVP=new B.b1(D.fg7,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bec=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cML=w([A.is,A.oz,D.bec,D.abZ,A.is],x.O)
D.eWc=new B.fT(A.A,0,6.283185307179586,A.x,D.cML,null,null)
D.cVo=w([A.bL,A.bY,A.hG,D.AC,A.bL],x.O)
D.aOr=new B.fT(A.A,0,6.283185307179586,A.x,D.cVo,null,null)
D.d7Z=w([A.bZ,A.bt,A.b8,A.b2,A.c7,A.bZ],x.O)
D.eWh=new B.fT(A.A,0,6.283185307179586,A.x,D.d7Z,null,null)
D.cOL=w([A.pG,A.oA,A.Aq,A.is,A.pG],x.O)
D.eWi=new B.fT(A.A,0,6.283185307179586,A.x,D.cOL,null,null)
D.d7T=w([A.aP,A.bJ,A.aL,A.ak,A.aP],x.O)
D.eWj=new B.fT(A.A,0,6.283185307179586,A.x,D.d7T,null,null)
D.dfg=w([A.bu,A.b8,A.bt,A.bZ,A.bu],x.O)
D.eWl=new B.fT(A.A,0,6.283185307179586,A.x,D.dfg,null,null)
D.beu=new B.w(1,0,1,1,A.t)
D.b8x=new B.w(1,1,0,1,A.t)
D.dbx=w([A.Ee,A.adR,H.acL,D.beu,H.ad9,D.b8x,A.Ee],x.O)
D.eWm=new B.fT(A.A,0,6.283185307179586,A.x,D.dbx,null,null)
D.eWB=new C.avg(2,"immersiveSticky")
D.eWC=new C.avg(3,"edgeToEdge")
D.eWD=new C.avg(4,"manual")
D.eZ2=new B.G(!0,A.ou,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOY=new B.G(!0,A.f4,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZB=new B.G(!0,E.n0,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f04=new B.G(!0,A.ad,null,null,null,null,13,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f12=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1c=new B.G(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1x=new B.G(!0,A.eA,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2U=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f32=new B.G(!0,A.jd,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3g=new B.rz(!0,A.I0,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3K=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4m=new B.G(!0,A.jc,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4K=new B.G(!0,A.aA,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e9m=new B.iP(1,1,0.7568627450980392,0.027450980392156862)
D.f4O=new B.rz(!0,D.e9m,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.adY=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aPG=new B.G(!0,D.adY,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4W=new B.G(!0,D.af0,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4X=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPI=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5z=new B.rz(!0,A.p2,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5Q=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Tv=new B.G(!0,A.aA,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6m=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6o=new B.G(!0,D.adY,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.J_=new B.G(!0,A.aA,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6R=new B.G(!0,A.bY,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f6Z=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f71=new B.G(!0,A.bL,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7i=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.avF,null,null,null)
D.f7k=new B.G(!0,A.cf,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7m=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7z=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7L=new B.G(!0,A.dv,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8h=new B.G(!0,A.aS,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8q=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f8E=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQk=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQm=new B.G(!0,A.c1,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bjB=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.fam=new B.G(!0,D.bjB,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQu=new B.G(!0,E.n0,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faR=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.faU=new B.G(!0,O.lf,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3Y=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fc7=new B.x("NEW",null,D.f3Y,null,null,null,null,null,null,null,null,null)
D.fco=new B.x("Hati ya Kuhowesha",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fcQ=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fd9=new B.x("Scrollable PDF on this slide",null,A.dn,null,null,null,null,null,null,null,null,null)
D.fdT=new B.x("Big quote mark",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fdW=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fey=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.feA=new B.x("How many slides?",null,A.hs,null,null,null,null,null,null,null,null,null)
D.ff8=new B.x("Transfer",null,A.ck,null,null,null,null,null,null,null,null,null)
D.f_R=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffu=new B.x("Luxury FX",null,D.f_R,null,null,null,null,null,null,null,null,null)
D.ffS=new B.x("Font",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fg2=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fg8=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f9V=new B.G(!0,A.bJ,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fgg=new B.x("Example  GA847",null,D.f9V,null,null,null,null,null,null,null,null,null)
D.fgG=new B.x("Design shapes",null,A.iH,null,null,null,null,null,null,null,null,null)
D.fgP=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fgT=new B.x("Non-stop (loop)",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fh7=new B.x("Hati ya Kuhoweya",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fhq=new B.x("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.fhQ=new B.x("Add your picture",null,A.k9,null,null,null,null,null,null,null,null,null)
D.f3h=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhR=new B.x("Enter document code",null,D.f3h,null,A.L,null,null,null,null,null,null,null)
D.fhS=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fhX=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.f0T=new B.G(!0,E.n0,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fih=new B.x("Delete this book?",null,D.f0T,null,A.L,null,null,null,null,null,null,null)
D.f5p=new B.G(!0,E.n0,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fj9=new B.x("Your library",null,D.f5p,null,null,null,null,null,null,null,null,null)
D.fje=new B.x("Delete",null,A.aPA,null,null,null,null,null,null,null,null,null)
D.fjg=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,At.Df,null,null,null,null,null,null,null,null,null)
D.fjr=new B.x("Element flies in",null,A.aPM,null,null,null,null,null,null,null,null,null)
D.TL=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fjP=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fk8=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fkc=new B.x("Cancel",null,E.aPX,null,null,null,null,null,null,null,null,null)
D.fkf=new B.x("The lines and circles that come with the design",null,A.hf,null,null,null,null,null,null,null,null,null)
D.f8M=new B.G(!0,A.fT,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkG=new B.x("DOCUMENT CODE",null,D.f8M,null,null,null,null,null,null,null,null,null)
D.flu=new B.x("Quotes",null,G.a7R,null,null,null,null,null,null,null,null,null)
D.f2H=new B.G(!0,O.lf,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flC=new B.x("Add a picture",null,D.f2H,null,null,null,null,null,null,null,null,null)
D.flK=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a7x,null,A.L,null,null,null,null,null,null,null)
D.flO=new B.x("Look & feel",null,A.hs,null,null,null,null,null,null,null,null,null)
D.flT=new B.x("Rings",null,A.i7,null,null,null,null,null,null,null,null,null)
D.flZ=new B.x("W",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fm8=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fms=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.IZ,null,A.L,null,null,null,null,null,null,null)
D.fmu=new B.x("Write your book",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fne=new B.x("Add page",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fnt=new B.x("Malipo ya Awamu ya Mahari",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f36=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnI=new B.x("Create with AI",null,D.f36,null,A.L,null,null,null,null,null,null,null)
D.foa=new B.x("Apply look",null,A.i7,null,null,null,null,null,null,null,null,null)
D.f3P=new B.G(!0,A.eu,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fp_=new B.x("Type your presentation below",null,D.f3P,null,A.L,null,null,null,null,null,null,null)
D.fp2=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aQx,null,A.L,null,null,null,null,null,null,null)
D.fp4=new B.x("Keep it",null,A.ck,null,null,null,null,null,null,null,null,null)
D.eZS=new B.G(!0,A.co,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fpb=new B.x("Done",null,D.eZS,null,null,null,null,null,null,null,null,null)
D.fpw=new B.x("Delete",null,A.nu,null,null,null,null,null,null,null,null,null)
D.fpF=new B.x("Hati ya Kiapo cha Uongozi",null,A.hg,null,null,null,null,null,null,null,null,null)
D.f22=new B.G(!0,A.aS,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fqx=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.f22,null,A.L,null,null,null,null,null,null,null)
D.fqT=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fqZ=new B.x("Layout",null,A.TD,null,null,null,null,null,null,null,null,null)
D.frB=new B.x("Print",null,A.cx,null,null,null,null,null,null,null,null,null)
D.frG=new B.x("X",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fsf=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.De,null,null,null,null,null,null,null,null,null)
D.fsN=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fsZ=new B.x("Hati ya Kuhowa",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ft0=new B.x("Choose a class template",null,A.hg,null,null,null,null,null,null,null,null,null)
D.ft2=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.ft8=new B.x("Download the newspaper picture",null,A.cx,null,null,null,null,null,null,null,null,null)
D.ftk=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.ftr=new B.x("Done",null,A.aQj,null,null,null,null,null,null,null,null,null)
D.ftB=new B.x("Ending celebration",null,A.dm,null,null,null,null,null,null,null,null,null)
D.ftC=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.ftR=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.IQ,null,null,null,null,null,null,null,null,null)
D.fuN=new B.x("Export presentation",null,A.dn,null,null,null,null,null,null,null,null,null)
D.fuO=new B.x("What would you like to do?",null,D.aPG,null,null,null,null,null,null,null,null,null)
D.fuS=new B.x("Delete",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fvm=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fvq=new B.x("Hati (Documents)",null,A.hg,null,null,null,null,null,null,null,null,null)
D.fvD=new B.x("Done",null,A.l7,null,null,null,null,null,null,null,null,null)
D.f9L=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvI=new B.x("Delete presentation?",null,D.f9L,null,A.L,null,null,null,null,null,null,null)
D.fvZ=new B.x("After the last slide it starts again from the first",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fw9=new B.x("\ud83c\udf33",null,A.IU,null,A.L,null,null,null,null,null,null,null)
D.fwr=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fwy=new B.x("Transfer document",null,A.pb,null,null,null,null,null,null,null,null,null)
D.fwJ=new B.x("Add to the slides",null,A.hs,null,null,null,null,null,null,null,null,null)
D.fx5=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fxl=new B.x("Make a book",null,I.aPe,null,null,null,null,null,null,null,null,null)
D.fxp=new B.x("Books",null,A.cx,null,null,null,null,null,null,null,null,null)
D.f2A=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxq=new B.x("Keep this page open until it finishes.",null,D.f2A,null,null,null,null,null,null,null,null,null)
D.fxt=new B.x("Making your video",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fxy=new B.x("LANGUAGE",null,D.Tv,null,null,null,null,null,null,null,null,null)
D.fxF=new B.x("Use this ending",null,A.cx,null,null,null,null,null,null,null,null,null)
D.fxN=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxO=new B.x("Upload a different logo",null,A.ck,null,null,null,null,null,null,null,null,null)
D.fy3=new B.x("Delete from the database?",null,A.k9,null,null,null,null,null,null,null,null,null)
D.fy4=new B.x("H",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fys=new B.x("NGMY Quotes",null,A.dm,null,null,null,null,null,null,null,null,null)
D.fyU=new B.x("Cover",null,D.aQu,null,null,null,null,null,null,null,null,null)
D.fyY=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fyZ=new B.x("Each page becomes its own slide you can present",null,A.hf,null,null,null,null,null,null,null,null,null)
D.fzl=new B.x("Y",null,A.rK,null,null,null,null,null,null,null,null,null)
D.fzw=new B.x("Crop the picture",null,A.l7,null,null,null,null,null,null,null,null,null)
D.fzC=new B.x("Edit text",null,A.IV,null,null,null,null,null,null,null,null,null)
D.fBQ=B.dR("a83")
D.Dr=new C.awz(0,"none")
D.aTz=new C.awz(1,"zipCrypto")
D.aTA=new C.awz(2,"aes")
D.fRI=new F.Pa("","",null)
D.fSO=new C.bbJ(null)
D.fTV=new C.Zh(null)
D.fVt=new C.acY(null)
D.fVv=new C.aDL(null)
D.fYg=new C.a_w(null)
D.fYx=new C.a02(null)
D.fYQ=new C.btk(null)})();(function staticFields(){$.hcl=null
$.hcm=null
$.hcn=null
$.hco=null
$.fVl=B.v0("_lastQuoRemDigits")
$.fVm=B.v0("_lastQuoRemUsed")
$.awV=B.v0("_lastRemUsed")
$.fVn=B.v0("_lastRem_nsh")
$.q4=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6T=B.T(x.N,x.I)
$.fSS=!1
$.hh9=B.T(B.ax("kS"),x.N)
$.hhm=B.T(B.ax("kS"),x.E)
$.hfm=!1
$.byY="q"
$.Q6=0
$.Ct=B.T(x.N,B.ax("ai<zn>"))
$.hfJ=!1
$.fWW=!1
$.hlZ=null
$.hQb=B.T(x.N,B.ax("az<n?>"))
$.Kd=""
$.j0=0
$.h96=function(){var w=x.N
return B.T(w,w)}()
$.h95=B.T(x.N,x.R)
$.fXg=!1
$.afF=B.T(x.N,x.E)
$.fY3=0
$.bjO=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"ieo","CP",()=>C.b9e(0))
w($,"iem","a2g",()=>C.b9e(1))
w($,"ien","hpB",()=>C.b9e(2))
w($,"iel","h0U",()=>$.a2g().uZ(0))
w($,"iej","hpz",()=>C.b9e(1e4))
w($,"iek","hpA",()=>B.E2(8))
w($,"iab","hnC",()=>B.E2(0))
w($,"iaj","hnG",()=>B.E2(0))
w($,"iai","hnF",()=>B.bXK(0))
w($,"ii3","hrB",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a3y.gdK(D.a3y),v=v.gaf(v);v.C();){u=v.gS(v)
t.n(0,u.b,u.a)}return t})
w($,"iiu","bDt",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mS(new C.fDJ(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mS(new C.fDK(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mS(new C.fDL(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mS(new C.fDW(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mS(new C.fE0(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mS(new C.fE1(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mS(new C.fE2(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mS(new C.fE3(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mS(new C.fE4(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mS(new C.fE5(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mS(new C.fE6(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mS(new C.fDM(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mS(new C.fDN(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mS(new C.fDO(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mS(new C.fDP(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mS(new C.fDQ(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mS(new C.fDR(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mS(new C.fDS(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mS(new C.fDT(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mS(new C.fDU(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mS(new C.fDV(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mS(new C.fDX(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mS(new C.fDY(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mS(new C.fDZ(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mS(new C.fE_(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<Et>"))})
w($,"ii6","hrD",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["iIp3VWwwDWuG7MzRLyJDXGZXpNc="]=a.current})($__dart_deferred_initializers__);