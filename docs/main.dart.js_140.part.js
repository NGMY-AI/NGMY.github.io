((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,Ah,A5,Ai,A6,Aj,U,A7,Ak,Al,C={
tE(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
fU5(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
Jn(d){var w
if(d===0)return $.CK()
if(d===1)return $.a28()
if(d===2)return $.ho9()
if(Math.abs(d)<4294967296)return C.b97(A.o.N(d))
w=C.hIO(d)
return w},
b97(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.tE(4,w)
return new C.nP(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.tE(1,w)
return new C.nP(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aA(d,16)
v=C.tE(2,w)
return new C.nP(v===0?!1:s,w,v)}v=A.o.an(A.o.gajp(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.an(d,65536)}v=C.tE(v,w)
return new C.nP(v===0?!1:s,w,v)},
hIO(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.V(B.dI("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.CK()
w=$.ho8()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.l5(A.aG.gaM(w))
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
q=new C.nP(!1,r,4)
if(s<0)p=q.mo(0,-s)
else p=s>0?q.dU(0,s):q
return p},
fU6(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hb0(d,e,f,g){var w,v,u,t,s,r=A.o.an(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dU(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fE(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dU(t&o,q)}v&2&&B.aj(g)
g[r]=u},
haW(d,e,f,g){var w,v,u,t,s=A.o.an(f,16)
if(A.o.F(f,16)===0)return C.fU6(d,e,s,g)
w=e+s+1
C.hb0(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
hIR(d,e,f,g){var w,v,u,t,s=A.o.an(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dU(1,r)-1,o=A.o.fE(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dU(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fE(u,r)}w&2&&B.aj(g)
g[n]=o},
cDV(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
hIP(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
b98(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aA(v,16)&1)}},
hb1(d,e,f,g,h,i){var w,v,u,t,s,r
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
hIQ(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.e5((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
nP:function nP(d,e,f){this.a=d
this.b=e
this.c=f},
cDW:function cDW(){},
cDX:function cDX(){},
cDY:function cDY(d,e){this.a=d
this.b=e},
cDZ:function cDZ(d){this.a=d},
aQE:function aQE(d,e){this.a=d
this.b=e},
h0V(d,e,f){var w=new C.Rj(d,A.o.an(Date.now(),1000),e)
w.Q=f
return w},
Rj:function Rj(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a3k:function a3k(d,e){this.a=d
this.b=e},
bGU:function bGU(d){this.a=d
this.c=this.b=0},
hrm(){return new C.bFg()},
bFg:function bFg(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cw5:function cw5(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
hIw(d,e,f){var w,v,u,t,s
if(d.gam(d))return new Uint8Array(0)
w=new Uint8Array(B.ce(d.gcUO(d)))
v=f*2+2
u=C.h8D(C.h8F(),64)
t=new C.cfX(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cfY(e,1000,v)
s=new Uint8Array(v)
return A.aG.dq(s,0,t.cIf(w,0,s,0))},
cw3:function cw3(d,e){this.c=d
this.d=e},
awr:function awr(d,e){this.a=d
this.b=e},
cw6:function cw6(d,e,f,g){var _=this
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
b7P:function b7P(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cw4:function cw4(){this.a=$},
haq(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hr5(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bDR:function bDR(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
fZF(d,e){e&=31
return(d&$.q0[e])<<e>>>0},
nn(d,e){e&=31
return(d>>>e|C.fZF(d,32-e))>>>0},
h8E(d){var w,v=new C.as8()
if(B.iG(d))v.aJh(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
h8F(){var w=C.h8E(0),v=new Uint8Array(4),u=x.S
u=new C.cfZ(w,v,A.DN,5,B.c2(5,0,!1,u),B.c2(80,0,!1,u))
u.lw(0)
return u},
h8D(d,e){var w=new C.cfV(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cfU:function cfU(){},
cfY:function cfY(d,e,f){this.a=d
this.b=e
this.c=f},
cfS:function cfS(){},
as7:function as7(d){this.a=d},
cfX:function cfX(d){this.a=$
this.b=d
this.c=$},
cfT:function cfT(){},
cfR:function cfR(){},
as8:function as8(){this.b=this.a=$},
cfW:function cfW(){},
cfZ:function cfZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cfV:function cfV(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cfQ:function cfQ(){},
cfP:function cfP(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bN1:function bN1(){},
bN2:function bN2(d){this.a=d},
hLK(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
b9n:function b9n(){},
cpX:function cpX(){},
bNV:function bNV(d,e){this.a=d
this.b=!1
this.c=e},
bNW:function bNW(){},
hUC(d){var w,v,u=B.a([],x.s)
for(w=d.length,v=0;v<w;++v)u.push(d[v].u(0))
return u},
av4(d){var w=0,v=B.j(x.H),u
var $async$av4=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=x.H
w=d!==D.eTC?2:4
break
case 2:w=5
return B.b(A.k3.fW("SystemChrome.setEnabledSystemUIMode",d.a4(),u),$async$av4)
case 5:w=3
break
case 4:null.toString
w=6
return B.b(A.k3.fW("SystemChrome.setEnabledSystemUIOverlays",C.hUC(null),u),$async$av4)
case 6:case 3:return B.h(null,v)}})
return B.i($async$av4,v)},
av7:function av7(d,e){this.a=d
this.b=e},
a7Y:function a7Y(d){this.a=d},
fQ2(d,e){return new C.aV6(e,d,null)},
aV6:function aV6(d,e,f){this.e=d
this.c=e
this.a=f},
aA_:function aA_(d,e,f,g,h){var _=this
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
hXd(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fq1(15,d,f,e,g,h),o=i*i,n=A.k.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.k.bt(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fq1:function fq1(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
an_(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$an_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.agt("ngmy_menu_lib_v1_zzslides_index",A.bG),$async$an_)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.q(t,"items")
if(x.j.b(s)){t=J.d9(s,x.f)
t=B.cD(t,new C.bYx(),t.$ti.k("J.E"),x.P)
r=B.B(t,B.a4(t).k("J.E"))}else r=B.a([],x.d)
A.d.b0(r,new C.bYy())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an_,v)},
an1(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$an1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an_(),$async$an1)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aV(j);r.C();){q=r.gT(r)
p=J.q(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.S(Date.now(),0,!1).a6().ac()
p=m.a
k=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.nm("ngmy_menu_lib_v1_zzslide_"+B.aK(p,k,""),B.F(["deck",m.ag(),"savedAt",l],t,q),null),$async$an1)
case 7:if(!f){w=5
break}s.n(0,p,B.F(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.L)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("bc<2>")
s=B.B(new B.bc(s,r),r.k("J.E"))
w=10
return B.b(B.nm("ngmy_menu_lib_v1_zzslides_index",B.F(["items",s,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],t,q),null),$async$an1)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an1,v)},
bYz(d){return C.hwN(d)},
hwN(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$bYz=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.agt("ngmy_menu_lib_v1_zzslide_"+B.aK(d,o,""),A.hJ),$async$bYz)
case 7:r=f
o=r.b
q=o==null?null:J.q(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Vs(B.a1(q,x.N,x.z))
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
return B.i($async$bYz,v)},
an0(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$an0=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.an_(),$async$an0)
case 3:r=f
if(r==null){u=!1
w=1
break}J.no(r,new C.bYA(d))
w=4
return B.b(B.nm("ngmy_menu_lib_v1_zzslides_index",B.F(["items",r,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),null),$async$an0)
case 4:t=f
w=t?5:6
break
case 5:s=B.af("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(S.aOF("ngmy_menu_lib_v1_zzslide_"+B.aK(d,s,"")),$async$an0)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$an0,v)},
bYx:function bYx(){},
bYy:function bYy(){},
bYA:function bYA(d){this.a=d},
i69(d,e,f){return B.bU(A.K,null,new C.fFY(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fFY:function fFY(d,e,f){this.a=d
this.b=e
this.c=f},
a0m:function a0m(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aIo:function aIo(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
f45:function f45(d,e){this.a=d
this.b=e},
f49:function f49(d){this.a=d},
f4a:function f4a(d){this.a=d},
f4b:function f4b(d,e,f){this.a=d
this.b=e
this.c=f},
f46:function f46(d){this.a=d},
f47:function f47(d){this.a=d},
f48:function f48(d,e){this.a=d
this.b=e},
f40:function f40(d){this.a=d},
f3Z:function f3Z(d){this.a=d},
f4_:function f4_(d){this.a=d},
f41:function f41(d){this.a=d},
f42:function f42(d){this.a=d},
f4f:function f4f(d,e){this.a=d
this.b=e},
f4e:function f4e(d,e){this.a=d
this.b=e},
f44:function f44(d,e,f){this.a=d
this.b=e
this.c=f},
f43:function f43(d,e,f){this.a=d
this.b=e
this.c=f},
f4c:function f4c(d,e){this.a=d
this.b=e},
f4d:function f4d(d,e){this.a=d
this.b=e},
f4i:function f4i(d){this.a=d},
f4j:function f4j(d,e){this.a=d
this.b=e},
f4h:function f4h(d,e){this.a=d
this.b=e},
f4g:function f4g(){},
hdp(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.d9(w,x.f)
v=B.cD(v,new C.fbk(),v.$ti.k("J.E"),x.ea)
u=B.a4(v).k("a2<J.E>")
v=B.B(new B.a2(v,new C.fbl(),u),u.k("J.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a1l(d){return C.hYt(d)},
hYt(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a1l=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fsE(n)
t=4
j=m
i=C
w=7
return B.b(B.a1V("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a1l)
case 7:j.$1(i.hdp(f))
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
return B.b(B.aA(),$async$a1l)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hdp(B.aU(J.q(r.a,"ngmy_books_v1_"+p))))
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
o=p.k("a2<J.E>")
j=B
i=B
h=new B.bc(n,p)
g=C
w=13
return B.b(C.fbt(d),$async$a1l)
case 13:p=j.B(new i.a2(h,new g.fsC(f),o),o.k("J.E"))
A.d.b0(p,new C.fsD())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a1l,v)},
ah2(d,e){return C.i5P(d,e)},
i5P(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$ah2=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b6(e,new C.fFs(),x.P)
n=B.B(n,n.$ti.k("ak.E"))
r=A.R.ao(n,null)
q=!1
t=4
w=7
return B.b(B.agV("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah2)
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
return B.b(B.aA(),$async$ah2)
case 12:p=g
w=13
return B.b(p.au("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$ah2)
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
return B.i($async$ah2,v)},
fbt(d){return C.hN9(d)},
hN9(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$fbt=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$fbt)
case 7:r=f
q=r.t4("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kB(q,B.U(q).c)
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
return B.i($async$fbt,v)},
afT(d,e){return C.hX5(d,e)},
hX5(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$afT=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$afT)
case 6:s=g
r=B.aX(x.N)
q=s.t4("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h_(r,q)
J.ch(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.B(q,B.a4(q).k("co.E"))
w=7
return B.b(s.au("StringList","ngmy_books_deleted_v1_"+r,q),$async$afT)
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
return B.b(C.a1l(d),$async$afT)
case 8:n=g
J.no(n,new C.fpI(e))
w=9
return B.b(C.ah2(d,n),$async$afT)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$afT,v)},
i6e(d,e){return B.a5(d,!1).c8(B.e8(new C.fGj(e),!0,null,x.H))},
hIT(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.d8(w.d,new C.cFh())},
of:function of(d,e,f){this.a=d
this.b=e
this.c=f},
fbk:function fbk(){},
fbl:function fbl(){},
fsE:function fsE(d){this.a=d},
fsC:function fsC(d){this.a=d},
fsD:function fsD(){},
fFs:function fFs(){},
fpI:function fpI(d){this.a=d},
fGj:function fGj(d){this.a=d},
Y6:function Y6(d,e){this.c=d
this.a=e},
awZ:function awZ(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cFh:function cFh(){},
cFj:function cFj(d,e){this.a=d
this.b=e},
cFm:function cFm(d){this.a=d},
cFn:function cFn(d){this.a=d},
cFl:function cFl(){},
cFo:function cFo(d,e){this.a=d
this.b=e},
cFk:function cFk(d){this.a=d},
cFp:function cFp(){},
cFi:function cFi(d,e){this.a=d
this.b=e},
cFq:function cFq(){},
cFd:function cFd(d){this.a=d},
cFb:function cFb(d){this.a=d},
cFc:function cFc(d){this.a=d},
cFe:function cFe(d,e){this.a=d
this.b=e},
cFa:function cFa(d){this.a=d},
cF9:function cF9(d){this.a=d},
cF7:function cF7(d,e){this.a=d
this.b=e},
cF8:function cF8(d){this.a=d},
cFg:function cFg(){},
cFf:function cFf(d){this.a=d},
cF6:function cF6(d,e){this.a=d
this.b=e},
cF5:function cF5(d,e){this.a=d
this.b=e},
cF4:function cF4(d,e){this.a=d
this.b=e},
cFr:function cFr(d){this.a=d},
Y4:function Y4(d,e,f){this.c=d
this.d=e
this.a=f},
aEg:function aEg(d,e,f){this.a=d
this.b=e
this.c=f},
awV:function awV(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cEy:function cEy(d){this.a=d},
cEx:function cEx(d){this.a=d},
cEA:function cEA(d,e,f){this.a=d
this.b=e
this.c=f},
cEI:function cEI(){},
cEJ:function cEJ(d){this.a=d},
cEB:function cEB(d,e,f){this.a=d
this.b=e
this.c=f},
cEz:function cEz(d,e){this.a=d
this.b=e},
cED:function cED(d,e){this.a=d
this.b=e},
cEE:function cEE(d,e){this.a=d
this.b=e},
cEF:function cEF(d,e){this.a=d
this.b=e},
cEC:function cEC(d){this.a=d},
cEH:function cEH(d){this.a=d},
cEG:function cEG(d,e){this.a=d
this.b=e},
cEO:function cEO(d){this.a=d},
cEK:function cEK(d,e){this.a=d
this.b=e},
cEL:function cEL(d,e){this.a=d
this.b=e},
cEM:function cEM(d,e){this.a=d
this.b=e},
cEN:function cEN(d,e){this.a=d
this.b=e},
awX:function awX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
i_O(){var w,v,u,t,s=!1
try{u=document
if(u.fullscreenElement==null){w=u.documentElement
if(w!=null){v=w.requestFullscreen()
if(s&&v!=null)B.eh(v,x.cK).bz(new C.fxa(),x.H).eU(new C.fxb())}}else if(s)C.heS()}catch(t){}},
heS(){var w,v,u
try{w=window.screen.orientation
if(w==null)return
v=w.lock("landscape")
if(v!=null)B.eh(v,x.cK).eU(new C.ffJ())}catch(u){}},
i_R(){var w,v,u
try{w=window.screen.orientation
if(w!=null)w.unlock()}catch(v){}try{u=document
if(u.fullscreenElement!=null)u.webkitExitFullscreen()}catch(v){}},
fxa:function fxa(){},
fxb:function fxb(){},
ffJ:function ffJ(){},
hjs(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.ec(v,w,"").split(":"))},
hjp(d){var w=d.db
if(!A.a.a0(w,"marriage_sign_"))return null
if(A.a.a0(w,"marriage_sign_placed_"))return null
if(d.b===D.kW)return null
return A.a.b1(w,14)},
fYp(d){var w
if(d.b!==D.kW)return null
w=d.db
if(!A.a.a0(w,"marriage_sign_placed_"))return null
return A.a.b1(w,21)},
i0g(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hjt(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
i0b(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.af("\\s+",!0,!1,!1,!1),f=A.a.i(B.aK(d,g," "))
g=B.af("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aK(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.af("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kS(0,f)
t=x.N
u=B.cD(u,new C.fy9(),B.a4(u).k("J.E"),t)
s=B.B(u,B.a4(u).k("J.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kS(0,f),u=new B.Jm(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.R0(A.a.ap(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.R0(A.a.b1(f,q)):p)+"\\.?$"
l=B.af(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
i09(d,e){var w,v,u,t,s,r=B.a4(e).k("cu<1>"),q=B.B(new B.cu(e,r),r.k("J.E"))
A.d.b0(q,new C.fy8())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.L)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a0(s,"[")&&A.a.cb(s,"]"))continue
w=B.aPE(w,u,s,0)}return w},
i0d(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a3e:$.hq9(),s=x.N,r=B.T(s,s)
for(s=t.gdK(t),s=s.gaf(s);s.C();){w=s.gT(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a0(u,"[")&&A.a.cb(u,"]"))continue
r.n(0,w.b,u)}return r},
hjq(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fcm(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
if(C.hjs(q)===e)return q}return null},
i0e(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a0(v,w))return A.a.b1(v,u)
return A.d.gL(D.Gp).a},
i0f(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.adM(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.adM(0,0,0)
v=C.fcm(b6,b0)
u=C.fcm(b5,b0)
t=0
if(v!=null&&u!=null){s=C.i0d(b2,C.i0b(C.hjq(b2),v.r))
if(s.a!==0){u.r=C.i09(C.hjq(b4),s)
t=s.a}}r=B.aX(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.L)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.L)(o),++m){l=C.hjs(o[m])
if(l==null||l==="utangulizi")continue
r.J(0,l)}for(q=B.ec(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fcm(b6,n)
i=C.fcm(b5,n)
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
a0=C.fYp(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.L)(a1),++a7){a8=a1[a7]
if(C.hjp(a8)===a0||C.fYp(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.QB(a1,new C.fyf(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iZ
$.iZ=a9+1
A.d.J(a1,new C.eJ(""+1000*a6+"_"+a9,D.kW,a2,a3,a4,a5,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,d.at,D.be,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cl,0,"","","","","",!1,0));++e}b5.f=new B.S(Date.now(),0,!1)
return new B.adM(k,t,e)},
i0a(d){var w=C.i0e(d)
if(d.w==="hati_kuhowa")return C.hiN("",w)
return C.hiM("",w)},
fy9:function fy9(){},
fy8:function fy8(){},
fyf:function fyf(d){this.a=d},
heB(){var w=new B.S(Date.now(),0,!1),v=new C.feM()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.bz(w)},
fYx(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))&&v.length!==0},
fz7(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.kW&&A.a.a0(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hjG(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fz7(d)
w=B.bi(u)
if(w==null)return!C.fz7(d)
return new B.S(Date.now(),0,!1).a6().cZ(w.a6().bP(18e9))},
i0W(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.S(Date.now(),0,!1).a6().ac()},
hAO(d){return A.a.i(d).toLowerCase()},
ap9(d){return C.hAQ(d)},
hAQ(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$ap9=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$ap9)
case 7:r=f
p=r.t4("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.T:p
o=q
o=new B.K(o,C.i4t(),B.U(o).k("K<1,n>")).c_(0,new C.c86())
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
return B.i($async$ap9,v)},
ap8(d,e){return C.hAP(d,e)},
hAP(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$ap8=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ap9(d),$async$ap8)
case 3:r=g
if(!J.ch(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$ap8)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qa(r)),$async$ap8)
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
return B.i($async$ap8,v)},
apa(d,e){return C.hAR(d,e)},
hAR(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$apa=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.ap9(d),$async$apa)
case 3:r=g
if(!J.hD(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$apa)
case 8:q=g
w=9
return B.b(q.au("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.qa(r)),$async$apa)
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
return B.i($async$apa,v)},
UK(a5){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$UK=B.e(function(a6,a7){if(a6===1){s.push(a7)
w=t}for(;;)switch(w){case 0:if($.fRx&&!a5){w=1
break}t=4
w=7
return B.b(B.aA(),$async$UK)
case 7:r=a7
q=B.aU(J.q(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.R.aG(0,q,null)
f=x.f
if(f.b(p)){e=x.N
o=B.T(e,x.I)
for(d=J.ju(p),d=d.gaf(d),a0=x.z;d.C();){n=d.gT(d)
if(f.b(n.b))J.aF(o,J.k(n.a),C.Vs(B.a1(f.a(n.b),e,a0)))}$.a6N=o}}t=2
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
return B.b(B.c3(),$async$UK)
case 12:case 11:w=a7?8:9
break
case 8:t=14
w=17
return B.b(B.tR("civic_hati_kiapo_uongozi",null,A.ed),$async$UK)
case 17:l=a7
w=l!=null&&x.f.b(J.q(l,"byState"))?18:19
break
case 18:o=x.N
k=B.T(o,x.I)
for(f=x.f,e=J.ju(f.a(J.q(l,"byState"))),e=e.gaf(e),d=x.z;e.C();){j=e.gT(e)
if(!f.b(j.b))continue
J.aF(k,J.k(j.a),C.Vs(B.a1(f.a(j.b),o,d)))}for(o=k,o=new B.cK(o,B.a4(o).k("cK<1,2>")).gaf(0);o.C();){f=o.d
f.toString
i=f
h=$.a6N.h(0,i.a)
if(h!=null){f=i.b.f
e=h.f
d=f.a
if(d>=e.gbo())f=d===e.gbo()&&f.b<e.gcz()
else f=!0
f=!f}else f=!0
if(f)$.a6N.n(0,i.a,i.b)}w=20
return B.b(C.apb(),$async$UK)
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
case 16:case 9:$.fRx=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$UK,v)},
apb(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$apb=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$apb)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.a6N,o=new B.cK(o,B.a4(o).k("cK<1,2>")).gaf(0);o.C();){n=o.d
n.toString
q=n
J.aF(r,q.a,q.b.ag())}w=7
return B.b(s.au("String","ngmy_civic_hati_kiapo_uongozi_v1",A.R.ao(r,null)),$async$apb)
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
return B.i($async$apb,v)},
aZx(d){var w=0,v=B.j(x.af),u,t,s,r
var $async$aZx=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.UK(!1),$async$aZx)
case 3:t=A.a.i(d).toLowerCase()
if(t.length===0){u=null
w=1
break}s=$.a6N.h(0,t)
r=s==null?null:s.hB()
if(r==null){u=null
w=1
break}u=C.bBn(r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aZx,v)},
a6O(a1){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$a6O=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:e=a1.x
d=A.a.i(A.a.i(e==null?"":e)).toLowerCase()
if(d.length===0){u=!1
w=1
break}a1.w="hati_kiapo_uongozi"
a1.f=new B.S(Date.now(),0,!1)
o=a1.hB()
for(e=o.r,n=e.length,m=0;m<e.length;e.length===n||(0,B.L)(e),++m)for(l=e[m].z,k=l.length,j=0;j<k;++j){i=l[j]
h=i.at
g=A.a.i(h==null?"":h)
h=i.db
if((h==="__kiapo_video__"||A.a.a0(h,"__kiapo_video___"))&&A.a.a0(g,"data:"))i.at=null}$.a6N.n(0,d,o)
$.fRx=!0
w=3
return B.b(C.apb(),$async$a6O)
case 3:w=4
return B.b(B.c3(),$async$a6O)
case 4:if(!a3){u=!1
w=1
break}t=6
e=x.N
r=B.T(e,x.P)
for(n=$.a6N,n=new B.cK(n,B.a4(n).k("cK<1,2>")).gaf(0);n.C();){l=n.d
l.toString
q=l
J.aF(r,q.a,q.b.ag())}w=9
return B.b(B.nm("civic_hati_kiapo_uongozi",B.F(["byState",r,"updatedAt",new B.S(Date.now(),0,!1).a6().ac()],e,x.z),null),$async$a6O)
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
return B.i($async$a6O,v)},
apc(d){var w=0,v=B.j(x.T),u,t,s
var $async$apc=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.hW().a54(A.eG),$async$apc)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fi(),$async$apc)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.aZw(t,d),$async$apc)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apc,v)},
aZw(d,e){return C.hAS(d,e)},
hAS(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$aZw=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c3(),$async$aZw)
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
p=n.i8("media")
w=8
return B.b(p.wN(q,new Uint8Array(B.ce(d)),D.bxO),$async$aZw)
case 8:n=p.Cn(q)
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
return B.i($async$aZw,v)},
Ke(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.eo(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cl,D.cQ,l,m,n)},
fe1(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f0,j,k,l)},
fVA(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.k.D(i*0.0017,0.02,0.06)
return C.eo(h,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cl,D.cQ,g,e,f)},
fdA(d,e,f,g){return C.fe1(0,0.002,D.fq,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
fVB(d,e,f,g,h,i,j,k){var w=C.cC()
return C.eo(A.qg,!1,j,A.aD,"marriage_field_"+d+":"+A.k.aa(g,3),4280640491,i,A.bl,A.a5,"",h,w,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cl,D.cQ,g,e,f)},
heA(d){var w="marriage_field_",v=d.db
if(!A.a.a0(v,w))return null
return A.d.gL(A.a.ec(v,w,"").split(":"))},
bBn(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.heA(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a0(i,a5))&&j.length!==0)q=k
if(m.b===D.kW&&A.a.a0(i,"marriage_sign_placed_rais"))p=m.hB()}h=C.fY3(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Bq(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gL(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.L)(w),++n){m=w[n]
l=C.heA(m)
if(l!=null&&r.ai(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a0(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a0(t,"marriage_sign_")&&!A.a.a0(t,"marriage_sign_placed_")&&m.b!==D.kW&&A.a.cb(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bn(a1.z,new C.fx8(a2))}else A.d.bn(a1.z,new C.fx9())
A.d.J(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fz7(a0))a0.ax=a6.f.a6().ac()
return a0},
fY3(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fzV(D.a4f),l=C.cC(),k=x.u,j=B.a([C.eo(A.bg,!1,s,A.aD,"marriage_locked_bg",r,24,A.bl,A.a5,"",1,C.cC(),m,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cl,D.lq,1,0,0)],k),i=B.a([],k)
i.push(C.Ke("NGMY",A.L,236069181,52,A.bl,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Ke("TAREHE:",A.bg,o,16,A.bl,A.H,A.k.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.fVA("tarehe",0.8059999999999999,0.026,0.18,A.bg,16,p,C.heB()))
i.push(C.fdA(0.8099999999999999,0.026+A.k.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Ke("HATI YA KIAPO CHA UONGOZI",A.L,p,26,A.bl,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Ke("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.L,o,11,A.cF,A.a5,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fe1(0,0.002,D.fq,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.fVB("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.fVB("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.fVB("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fe1(268435456,0.175,D.be,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Ke("VIDEO YA KIAPO",A.bg,o,10,A.bl,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.eo(A.bg,!1,s,A.aD,"__kiapo_video__",r,24,A.bl,A.a5,"",0.131,C.cC(),t,"","",0,!1,"",0,D.be,q,2,"",0,0,"",D.cl,D.lq,0.77,0.115,0.492))
i.push(C.Ke("Rais Anayeapa:",A.bg,p,15,A.bl,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Ke("Jina:",A.bg,p,13,A.bl,A.P,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.fVA("rais_jina",0.195,0.6930000000000001,0.62,A.bg,13,p,""))
i.push(C.fdA(0.195,0.7130000000000001,0.62,n))
i.push(C.Ke("Sahihi:",A.bg,p,13,A.bl,A.P,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.eo(A.bg,!1,s,A.aD,"marriage_sign_rais",0,24,A.bl,A.a5,"",0.07,C.cC(),t,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cl,D.f0,0.38,0.21500000000000002,0.73))
i.push(C.fdA(0.21500000000000002,0.795,0.38,n))
i.push(C.Ke("Tarehe:",A.bg,p,13,A.bl,A.P,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.fVA("rais_tarehe",0.745,0.74,0.2,A.bg,12,p,C.heB()))
i.push(C.fdA(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.v(i,B.a([C.fe1(0,0.032,D.be,o,1,"state_box",0.72,0.14,0.875),C.Ke("EMO 'YA M'MBONDO "+w,A.L,p,14,A.bl,A.P,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.v(j,i)
v=C.rn(4294967035,t,0,0,j,l,D.q5,"","",u,D.dd)
return C.Bq(t,t,t,t,D.o7,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
ag3(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag3=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:p=A.a.i(i)
if(p.length===0){if(f.e!=null)f.I(x.q).f.S(D.eOr)
w=1
break}w=3
return B.b(C.UK(!0),$async$ag3)
case 3:w=4
return B.b(C.aZx(p),$async$ag3)
case 4:t=k
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hjG(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bU(D.bbW,null,new C.fs_(p),f,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag3)
case 9:r=k
if(r==="continue"){h.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.ca(null,null,!0,null,new C.fs0(),f,null,!0,!0,x.y),$async$ag3)
case 10:if(k!==!0||f.e==null){w=1
break}g.$1(C.fY3(p))
w=1
break
case 8:h.$1(t)
w=1
break
case 6:if(!s){if(f.e!=null){q=f.I(x.q).f
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}g.$1(C.fY3(p))
case 1:return B.h(u,v)}})
return B.i($async$ag3,v)},
feM:function feM(){},
c86:function c86(){},
fx8:function fx8(d){this.a=d},
fx9:function fx9(){},
fs_:function fs_(d){this.a=d},
frY:function frY(d){this.a=d},
frZ:function frZ(d){this.a=d},
fs0:function fs0(){},
frW:function frW(d){this.a=d},
frX:function frX(d){this.a=d},
apH:function apH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aD2:function aD2(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
e7E:function e7E(d){this.a=d},
e7C:function e7C(d){this.a=d},
e7D:function e7D(d){this.a=d},
e7F:function e7F(d){this.a=d},
e7G:function e7G(d){this.a=d},
wo(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.eo(e,!1,f,A.aD,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",j,D.be,4280172719,2,d,0,0,"",D.cl,D.cQ,l,m,n)},
hee(d,e,f){var w=4291404327
return B.a([C.q_(0,f,D.eJ,w,2,"ring_l",f,d-f*0.42,e),C.q_(0,f,D.eJ,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
fd0(d,e,f,g,h){var w,v,u="ps_"+g,t=C.q_(4294967288,f,D.eJ,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.q_(h,s,D.eJ,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.q_(h,f*0.46,D.eJ,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
q_(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f0,j,k,l)},
fd_(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.k.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.eo(h,!1,k,A.aD,i?u+A.k.aa(g,3)+":"+A.o.aa(j,1):u+A.k.aa(g,3),4280640491,j,A.cF,A.P,"",v,w,null,"","",0,!1,"",0,D.be,4280172719,2,l,0,0,"",D.cl,D.cQ,g,e,f)},
byN(d,e,f,g){return C.q_(0,0.002,D.fq,g,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.002)},
hed(d,e,f,g,h){var w=A.k.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.q_(0,0.036,D.be,h,1.4,"banner_box_"+d,w,v,e),C.wo(d,A.L,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
hjr(){var w=new B.S(Date.now(),0,!1),v=new C.fye()
return B.t(v.$1(B.bQ(w)))+"/"+B.t(v.$1(B.bG(w)))+"/"+B.bz(w)},
hef(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.wo(r+".",A.bg,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.fd_("witness_"+d+"_"+r+"_name",q,g,p,A.bg,!0,16,j,"[Jina la Shahidi]"),C.byN(q,g+A.k.D(0.0272,0.02,0.06),p,w),C.wo("Sahihi:",A.bg,j,15,A.a5,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d+"_witness_"+r,0,24,A.bl,A.a5,"",0.05,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cl,D.f0,s,t,g-0.004),C.byN(t,g+0.044,s,w)],x.u)},
agv(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.d9F,D.cfP,D.d2y,D.d4o],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.L)(s),++w)for(v=A.d.gaf(s[w]);v.C();){u=v.gT(0)
if(u.a===d)return u}return null},
fUT(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=C.fzV(d.d),v=B.a([C.eo(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),w,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cl,D.lq,1,0,0)],x.u)
A.d.v(v,C.hPz(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return v},
hPz(c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9=null,b0=4286200650,b1=4291404327,b2=4280640491,b3=4280172719,b4="marriage_locked",b5=4293056712,b6=4279310375,b7=4279673674,b8="marriage_locked_",b9=c3.f,c0=c3.r,c1=x.u,c2=B.a([],c1)
c2.push(C.wo("NGMY",A.L,b9&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=c3.z
switch(w.a){case 1:case 3:A.d.v(c2,C.hee(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.v(c2,C.hee(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.v(c2,C.fd0(0.16,0.018,0.052,!1,b9))
A.d.v(c2,C.fd0(0.79,0.018,0.052,!0,b0))
v=0.072
break
case 5:c2.push(C.wo("\ud83c\udf33",A.L,4279898632,22,A.a5,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.v(c2,B.a([C.q_(0,0.062,D.eJ,b1,1.6,"crest_o",0.11,0.445,0.012),C.q_(0,0.046,D.eJ,b1,1,"crest_i",0.084,0.458,0.02),C.wo("MUHURI",A.L,b9,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],c1))
v=0.078
break
case 4:case 9:A.d.v(c2,B.a([C.q_(0,0.002,D.fq,b1,1,"orn_l_0.018",0.24,0.2,0.024),C.q_(b9,0.016,D.kX,b1,0.9,"orn_c_0.018",0.024,0.488,0.018),C.q_(0,0.002,D.fq,b1,1,"orn_r_0.018",0.24,0.518,0.024)],c1))
v=0.04
break
case 0:v=d5
break
default:v=d5}A.d.v(c2,B.a([C.wo("TAREHE:",A.bg,c0,20,A.H,A.k.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.fd_("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bg,!1,21,b9,C.hjr()),C.byN(0.814,0.026+A.k.D(0.035699999999999996,0.02,0.06)*0.8,0.12,c0)],c1))
c2.push(C.wo(d2,A.L,b9,d3,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
c2.push(C.q_(c0,0.0026,D.be,c0,0,"title_rule_1",0.82*d4,0.09+0.82*(1-d4)/2,u))
t=u+0.028
c2.push(C.q_(c3.e,0.138,D.be,c0,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
s=C.cC()
c2.push(C.eo(A.bg,!1,b9,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.82,3),b2,19,A.bl,A.cv,"",0.128,s,a9,"","",0,!1,"",0,D.be,b3,2,c5,0,0,"",D.cl,D.cQ,0.82,0.09,t))
t+=c4
if(c8){r=A.k.D(c7.length*30*0.00058+0.08,0.2,0.5)
q=0.09+(0.82-r)/2
s=C.q_(0,0.036,D.be,c0,1.4,"banner_box_nimetowe_label",r,q,t)
p=C.cC()
A.d.v(c2,B.a([s,C.eo(A.L,!1,c0,A.aD,"marriage_field_nimetowe_label:"+A.k.aa(r,3),b2,30,A.bl,A.u,"",0.025199999999999997,p,a9,"","",0,!1,"",0,D.be,b3,2,c7,0,0,"",D.cl,D.cQ,r,q,t+0.00612)],c1))}else A.d.v(c2,C.hed(c7,t,0.09,0.82,c0))
t+=0.048
c2.push(C.wo(c9,A.bg,b9,d0,A.P,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){s=c6[o-1]
n=o===1
m=A.k.D(0.7779999999999999-(n?0.328:0),0.22,1)
l=n?A.k.D(0.037399999999999996,0.02,0.06):A.k.D(0.0272,0.02,0.06)
p=""+o
k=t+0.002
j=C.fd_("mahari_"+p,0.132,k,m,A.bg,!1,16,b9,s)
if(n)j.f=l
s="nim_n_"+p
i=Date.now()
h=$.iZ
$.iZ=h+1
s=s.length===0?b4:b8+s
g="nim_ul_"+p
f=Date.now()
e=$.iZ
$.iZ=e+1
g=g.length===0?b4:b8+g
d=B.a([new C.eJ(""+1000*i+"_"+h,D.cQ,0.09,t+0.004,0.032,0.022,p+".",13,A.H,A.bl,A.aD,c0,A.bg,a9,D.be,b2,b3,2,0,!1,s,0,D.cl,0,"","","","","",!1,0),j,new C.eJ(""+1000*f+"_"+e,D.f0,0.132,k+l+0.002,0.7779999999999999,0.002,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.fq,0,b5,0.8,0,!1,g,0,D.cl,0,"","","","","",!1,0)],c1)
if(n){a0=0.132+m+0.008
a1=a0+0.268+0.004
a2=k+(l-0.025875)/2
s=Date.now()
p=$.iZ
$.iZ=p+1
i=Date.now()
h=$.iZ
$.iZ=h+1
g=Date.now()
f=$.iZ
$.iZ=f+1
e=Date.now()
a3=$.iZ
$.iZ=a3+1
A.d.v(d,B.a([new C.eJ(""+1000*s+"_"+p,D.cQ,a0,k,0.268,l,"AKUNA DENI",22,A.u,A.bl,A.aD,b7,A.dM,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_deni",0,D.cl,0,"","","","","",!1,0),new C.eJ(""+1000*i+"_"+h,D.f0,a1,a2,0.046,0.025875,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,b7,2,0,!1,"marriage_locked_nim_akuna_box",0,D.cl,0,"","","","","",!1,0),new C.eJ(""+1000*g+"_"+f,D.cQ,a1,a2-0.002,0.046,0.029875,"\u2713",18,A.u,A.bl,A.aD,b7,A.L,a9,D.be,b2,b3,2,0,!1,"marriage_locked_nim_akuna_tick",0,D.cl,0,"","","","","",!1,0),new C.eJ(""+1000*e+"_"+a3,D.f0,a0,k,a1+0.046-a0,l,"",24,A.a5,A.bl,A.aD,b6,A.bg,a9,D.be,0,0,0,0,!1,"marriage_locked_nim_akuna_hit",0,D.cl,0,"","","","","",!1,0)],c1))}A.d.v(c2,d)
t+=0.04}t+=0.006
A.d.v(c2,C.hed("MASHAHIDI",t,0.09,0.82,c0))
t+=0.046
if(w===D.a44||w===D.a46||w===D.a43||w===D.a45){w=t-0.008
A.d.v(c2,C.fd0(0.21,w,0.044,!0,b0))
A.d.v(c2,C.fd0(0.7459999999999999,w,0.044,!1,b9))
t+=0.012}a4=0.05+d6*0.056+0.011
w=t+0.05
s=t+0.012
A.d.v(c2,B.a([C.q_(0,a4,D.be,c0,1.3,"wit_table_border",0.82,0.09,t),C.q_(c0,a4,D.be,c0,0,"wit_table_divider",0.0024,0.4988,t),C.q_(0,0.0022,D.fq,c0,1.1,"wit_table_hdrline",0.82,0.09,w),C.wo("UPANDE WA MKE",A.L,c0,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,s),C.wo("UPANDE WA MUME",A.L,c0,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,s)],c1))
a5=w+0.01
for(a6=1;a6<=d6;++a6){A.d.v(c2,C.hef("mke",a6,0.106,a5,0.378,c0,b9))
A.d.v(c2,C.hef("mume",a6,0.516,a5,0.378,c0,b9))
a5+=0.056}t=t+a4+0.012
w=t+0.056
s=t+0.09
p=s-0.002
A.d.v(c2,B.a([C.q_(0,0.11,D.be,c0,1.2,"mw_box",0.82,0.09,t),C.wo("MWANDISHI",A.bg,c0,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.wo("Jina:",A.bg,b9,15,A.a5,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.fd_("mwandishi_jina",0.215,w,0.3116,A.bg,!0,15,b9,""),C.byN(0.215,p,0.3116,b5),C.wo("Sahihi:",A.bg,b9,15,A.a5,0.028,0,"mw_sl",0.09,0.5,w),C.eo(A.bg,!1,b6,A.aD,"marriage_sign_mwandishi",0,24,A.bl,A.a5,"",0.044,C.cC(),a9,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cl,D.f0,0.3161999999999999,0.5738,s-0.044),C.byN(0.5738,p,0.3161999999999999,b5)],c1))
a7=A.a.i(d1)
if(a7.length!==0){a8=t+0.11+0.006
A.d.v(c2,B.a([C.q_(0,0.032,D.be,c0,1,"state_box",0.7,0.15,a8),C.wo("EMO 'YA M'MBONDO "+a7,A.L,b9,26,A.P,0.026000000000000002,0,"state_text",0.7,0.15,a8+0.003)],c1))}return c2},
i0c(d){var w,v,u,t=null,s=B.b0(d.f),r=B.b0(d.r),q=C.fYH(d.d),p=new C.fya(s),o=new C.fyb(s),n=d.z,m=n===D.a44||n===D.a46||n===D.a43||n===D.a45,l=n===D.aEl||n===D.a47||n===D.aEm,k=B.bZ(0,B.fL(q,A.A,t,t,A.cm,A.bR,!0,t,!1,t,t),0,0,0),j=x.p,i=B.a([],j)
if(l){w=n===D.a47?26:16
i.push(new C.fyd().$1$size(w))}if(n===D.aEn)i.push(D.ft4)
if(m)i.push(B.A(B.a([o.$1$female(!1),o.$1$female(!0)],j),A.m,t,A.hB,A.j,0,t,t))
i.push(B.d("HATI YA KUHOWA",t,t,t,t,t,t,B.l(t,t,s,t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
i.push(A.an)
n=B.I(r,A.q,1.1)
w=B.m(4)
i.push(B.p(t,B.v(B.a([p.$0(),D.aNo,p.$1$w(0.9),D.aNo,p.$1$w(0.75)],j),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(D.b7u,t,n,w,t,t,A.n),t,t,t,t,A.ai1,t,t,t))
i.push(A.an)
i.push(new C.fyc(r).$1("NIMETOWE"))
i.push(A.h_)
v=J.e3(3,x.l)
for(u=0;u<3;++u)v[u]=new B.C(A.LG,new B.cn(A.aO,A.e,A.j,A.m,t,A.p,t,0,B.a([B.p(t,t,A.f,t,t,new B.o(r,t,t,t,t,t,A.a6),t,7,t,t,t,t,t,7),A.d9,new B.bD(1,A.bh,p.$1$h(4),t)],j),t),t)
A.d.v(i,v)
i.push(A.b6)
i.push(B.d(d.b,t,t,t,t,t,t,B.l(t,t,s.j(0.85),t,t,t,t,t,t,t,t,8,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),A.L,t,t))
return new B.an(A.W,t,A.b_,A.r,B.a([k,new B.C(A.agA,B.v(i,A.aj,t,A.e,A.j,0,A.p),t)],j),t)},
hiM(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.agv(e,t)
if(r==null)r=A.d.gL(D.Gp)
w=C.cC()
v=C.rn(r.e,t,0,0,C.fUT(r,0.165,y.O,D.d4Y,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.q5,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bq(t,t,t,t,D.o7,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hiN(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.agv(e,t)
if(r==null)r=A.d.gL(D.Gp)
w=C.cC()
v=C.rn(r.e,t,0,0,C.fUT(r,0.165,y.f,D.d0K,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.q5,"","",s,D.dd)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Bq(t,t,t,t,D.o7,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bCK(d,e,f){var w=0,v=B.j(x.T),u
var $async$bCK=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bU(A.K,null,new C.fJL(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bCK,v)},
ag4(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag4=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fs3(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.KU,null,new C.fs4(p),d,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag4)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hB())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCK(d,"Hati ya Kuhowa",D.Gp),$async$ag4)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KS(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$ag4)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hiM(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag4,v)},
ag5(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ag5=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("a2<1>")
p=B.B(new B.a2(i,new C.fs7(),q),q.k("J.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.KU,null,new C.fs8(p),d,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag5)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(p).hB())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCK(d,"Hati ya Kuhoweya",D.Gp),$async$ag5)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KS(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$ag5)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hiN(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ag5,v)},
ag6(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ag6=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("a2<1>")
m=B.B(new B.a2(i,new C.fsb(),n),n.k("J.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(D.KU,null,new C.fsc(m),d,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag6)
case 5:t=k
if(t==="continue"){f.$1(A.d.gL(m).hB())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bCK(d,"Malipo ya Awamu ya Mahari",D.Q6),$async$ag6)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.KS(d,"Tafuta jimbo\u2026","",A.jZ,"Chagua jimbo"),$async$ag6)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.agv(s,D.Q6)
if(q==null)q=A.d.gL(D.Q6)
n=C.cC()
p=C.rn(q.e,null,0,0,C.fUT(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.cWR,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.q5,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dd)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Bq(null,null,null,null,D.o7,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ag6,v)},
xl:function xl(d,e){this.a=d
this.b=e},
jk:function jk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fye:function fye(){},
fya:function fya(d){this.a=d},
fyc:function fyc(d){this.a=d},
fyd:function fyd(){},
fyb:function fyb(d){this.a=d},
fJL:function fJL(d,e){this.a=d
this.b=e},
acQ:function acQ(d,e,f){this.c=d
this.d=e
this.a=f},
dXw:function dXw(d,e,f){this.a=d
this.b=e
this.c=f},
dXv:function dXv(d,e){this.a=d
this.b=e},
dXu:function dXu(d,e){this.a=d
this.b=e},
ace:function ace(d,e,f){this.c=d
this.d=e
this.a=f},
fs3:function fs3(){},
fs4:function fs4(d){this.a=d},
fs1:function fs1(d){this.a=d},
fs2:function fs2(d){this.a=d},
fs7:function fs7(){},
fs8:function fs8(d){this.a=d},
fs5:function fs5(d){this.a=d},
fs6:function fs6(d){this.a=d},
fsb:function fsb(){},
fsc:function fsc(d){this.a=d},
fs9:function fs9(d){this.a=d},
fsa:function fsa(d){this.a=d},
Kh(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.eo(e,!1,f,A.aD,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bl,h,"",i,w,null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cl,D.cQ,k,l,m)},
Cr(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.eo(A.bg,!1,4279310375,A.aD,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bl,A.a5,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cl,D.f0,j,k,l)},
heV(d,e,f){return C.Cr(0,0.002,D.fq,4293056712,0.8,"ul_"+B.t(d)+"_"+B.t(e),f,d,e+0.022)},
byX(d,e,f,g,h){return B.a([C.Cr(4294967288,0.032,D.be,4291404327,1.15,"pill_"+d,g,f,e),C.Kh(d,A.L,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
fVF(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.t(e)
return B.a([C.Cr(0,0.002,D.fq,g,1,"orn_l_"+t,u,d,v),C.Cr(h,0.016,D.kX,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Cr(0,0.002,D.fq,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a0I(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.Kh(d,A.bg,j,i,A.P,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.eo(A.L,!1,j,A.aD,"marriage_field_"+e+":"+A.k.aa(t,3),4280640491,i,A.cF,A.P,"",0.02,s,null,"","",0,!1,"",0,D.be,4280172719,2,k,0,0,"",D.cl,D.cQ,t,u,g-0.002),C.heV(u,g+0.018,t)],x.u)},
heW(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Cr(h,0.028,D.be,h,0,"chv_"+d,g,e,f),C.Cr(w,0.024,D.kX,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Cr(w,0.024,D.kX,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.Kh(d,A.L,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
byW(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.Kh("Sahihi:",A.bg,h,10,A.P,0.02,"is_"+d,0.12,e,f),C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_"+d,0,24,A.bl,A.a5,"",0.032,C.cC(),null,"","",0,!1,"",0,D.be,0,2,"",0,0,"",D.cl,D.f0,v,w,f-0.006),C.heV(w,f+0.016,v)],x.u)},
fYI(d){var w,v
for(w=0;w<19;++w){v=D.Qj[w]
if(v.a===d)return v}return null},
i2t(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a0(k,"hati_kuhowa_")){w=C.agv(A.a.b1(k,12),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_kuhoweya_")){w=C.agv(A.a.b1(k,14),l)
v=w==null?l:w.d}else if(A.a.a0(k,"hati_malipo_awamu_")){u=A.a.b1(k,18)
w=C.agv(u,D.Q6)
v=w==null?l:w.d
if(v==null){w=C.agv(u,l)
v=w==null?l:w.d}}else if(A.a.a0(k,"marriage_")){w=C.fYI(A.a.b1(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hfK.a9(0)
$.hfX.a9(0)
t=C.fzV(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.L)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
fZM(d){var w=0,v=B.j(x.T),u
var $async$fZM=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bU(A.K,null,new C.fLd(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZM,v)},
xo:function xo(d,e){this.a=d
this.b=e},
nC:function nC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bir:function bir(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fLd:function fLd(){},
acT:function acT(d){this.a=d},
ecT:function ecT(d,e){this.a=d
this.b=e},
ecS:function ecS(d){this.a=d},
ecR:function ecR(d,e){this.a=d
this.b=e},
aeA:function aeA(d,e,f){this.c=d
this.d=e
this.a=f},
fYH(d){return $.hfX.cg(0,d,new C.fzX(d))},
fzV(d){return $.hfK.cg(0,d,new C.fzW(d))},
fy(d){return B.fP6(d>>>16&255,d>>>8&255,d&255,255)},
hSB(d){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4291404327,n=4294966774,m=4294702831,l=4285218602,k=4291394365,j=4294967295,i=4294964964,h=4294965484,g=4280241466,f=4287326484,e=4294966518
switch(d.a){case 0:return C.hh1(4294570461,4293910718,4284234270,u)
case 1:return C.hh1(4294635750,4293975240,t,4292912216)
case 2:w=C.fbB(s,4294505966,r)
C.byH(w,14,16,p)
C.ks(w,8,9,464,836,u,1.2)
C.Cn(w,2,2,1,1,u,10)
C.Cn(w,478,2,-1,1,u,10)
C.Cn(w,2,852,1,-1,u,10)
C.Cn(w,478,852,-1,-1,u,10)
return w
case 3:return C.fbB(4294966515,4294373082,4289102906)
case 4:return C.hNo(C.fbB(4294376440,4293653998,4290287194))
case 5:w=C.fbB(4294965238,4294437098,4288444980)
C.byH(w,14,16,4283043359)
C.ks(w,6,7,468,840,u,1)
C.ks(w,9,10,462,834,o,0.7)
return w
case 6:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,n,4294175448)
C.rH(v,n)
C.ks(v,24,24,432,806,4286209070,1)
C.a0w(v,12,12,468,12,o,3,20)
C.a0w(v,12,842,468,842,o,3,20)
C.a0w(v,12,12,12,842,o,3,20)
C.a0w(v,468,12,468,842,o,3,20)
return v
case 7:return C.hLq(4294440434,4293518297,4280228630,r)
case 8:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,m,4293911504)
C.rH(v,m)
C.ks(v,28,28,424,798,l,1)
C.fkl(v,28,28,l,k)
C.fkl(v,452,28,l,k)
C.fkl(v,28,826,l,k)
C.fkl(v,452,826,l,k)
return v
case 9:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,j,4294111986)
C.rH(v,j)
C.ks(v,18,18,444,818,4292401368,0.7)
B.iI(v,!0,C.fy(p),0,13,0,853)
return v
case 10:return C.hPl(i,4294173372)
case 11:return C.hQq(4294439140,4293449662)
case 12:return C.hLi(h,4294239432)
case 13:return C.hPS(4294244340,4293193448)
case 14:return C.hU9(4294505710,4293780694)
case 15:return C.faz(4294966259,4294439138,o,p,q)
case 16:return C.faz(4294966776,4294178544,o,g,g)
case 17:return C.faz(4294965493,4294504170,o,4286200650,q)
case 18:return C.faz(4294966519,4294373862,o,p,p)
case 19:return C.hOt()
case 20:return C.hOu()
case 21:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,h,4293976768)
C.rH(v,h)
C.byH(v,14,16,p)
B.iI(v,!0,C.fy(u),4,475,4,9)
B.iI(v,!0,C.fy(u),4,475,844,849)
B.iI(v,!0,C.fy(u),4,9,4,849)
B.iI(v,!0,C.fy(u),470,475,4,849)
C.a0w(v,10,12,470,12,u,2,16)
C.a0w(v,10,842,470,842,u,2,16)
C.a0w(v,10,12,10,842,u,2,18)
C.a0w(v,470,12,470,842,u,2,18)
C.Cn(v,2,2,1,1,t,10)
C.Cn(v,478,2,-1,1,t,10)
C.Cn(v,2,852,1,-1,t,10)
C.Cn(v,478,852,-1,-1,t,10)
C.ks(v,14,16,452,822,u,1.8)
return v
case 22:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,s,4294438872)
C.rH(v,s)
C.ks(v,14,16,452,822,o,2.2)
C.ks(v,22,24,436,806,o,1)
C.fWY(v,!1,!1,o,p,p,36,14,16)
C.kG(v,240,20,7,o,!0)
C.kG(v,240,834,7,o,!0)
C.kG(v,18,427,7,o,!0)
C.kG(v,462,427,7,o,!0)
return v
case 23:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,i,4293910712)
C.rH(v,i)
B.iI(v,!0,C.fy(u),0,479,0,20)
B.iI(v,!0,C.fy(u),0,479,834,853)
B.iI(v,!0,C.fy(u),0,20,0,853)
B.iI(v,!0,C.fy(u),460,479,0,853)
B.iI(v,!0,C.fy(f),5,474,5,9)
B.iI(v,!0,C.fy(f),5,474,844,848)
B.iI(v,!0,C.fy(f),5,9,5,848)
B.iI(v,!0,C.fy(f),470,474,5,848)
C.ks(v,28,28,424,798,f,1.4)
return v
case 24:v=B.hl(q,q,A.c9,0,A.e0,854,q,0,3,q,A.c9,480,!1)
C.ye(v,e,4294174404)
C.rH(v,e)
C.byH(v,14,16,p)
B.iI(v,!0,C.fy(u),3,476,3,8)
B.iI(v,!0,C.fy(u),3,476,845,850)
B.iI(v,!0,C.fy(u),3,8,3,850)
B.iI(v,!0,C.fy(u),471,476,3,850)
C.ks(v,9,10,462,834,t,1)
C.ks(v,14,16,452,822,u,1.8)
C.kG(v,240,8,4,u,!0)
C.kG(v,240,846,4,u,!0)
C.kG(v,8,427,4,u,!0)
C.kG(v,472,427,4,u,!0)
C.kG(v,8,8,3,t,!0)
C.kG(v,472,8,3,t,!0)
C.kG(v,8,846,3,t,!0)
C.kG(v,472,846,3,t,!0)
return v}},
ye(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
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
B.kI(d,!1,A.da,new B.RD(s),r,A.cX,1,0,w-1,k,k);++k}},
rH(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.eL()
n.dB(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aB(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aB(v==null?0:v)
v=d.a
s=v==null?o:v.dQ(u,t,o)
if(s==null)s=new B.iD()
v=A.o.D(A.k.N(s.gb4(s))-3,0,255)
r=A.o.D(A.k.N(s.gbb())-3,0,255)
q=A.o.D(A.k.N(s.gba(s))-2,0,255)
p=d.a
if(p!=null)p.jI(u,t,v,r,q,255)}},
ks(d,e,f,g,h,i,j){var w,v=null,u=C.fy(i),t=e+g
B.kI(d,!0,A.da,u,v,A.cX,j,e,t,f,f)
w=f+h
B.kI(d,!0,A.da,u,v,A.cX,j,e,t,w,w)
B.kI(d,!0,A.da,u,v,A.cX,j,e,e,f,w)
B.kI(d,!0,A.da,u,v,A.cX,j,t,t,f,w)},
Cn(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.k.V(j*0.72),8,j-2)
B.kI(d,!0,A.da,C.fy(i),u,A.cX,2,e,e+g*j,f,f)
B.kI(d,!0,A.da,C.fy(i),u,A.cX,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.kI(d,!0,A.da,C.fy(i),u,A.cX,1,w,e+g*t,v,v)
B.kI(d,!0,A.da,C.fy(i),u,A.cX,1,w,w,v,f+h*t)},
hh1(d,e,f,g){var w=null,v=B.hl(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.ye(v,d,e)
C.rH(v,d)
B.iI(v,!0,C.fy(f),0,479,0,28)
B.iI(v,!0,C.fy(f),0,479,826,853)
B.iI(v,!0,C.fy(f),0,28,0,853)
B.iI(v,!0,C.fy(f),452,479,0,853)
C.ks(v,5,5,470,844,g,1.1)
C.ks(v,28,28,424,798,g,1.6)
C.Cn(v,2,2,1,1,g,11)
C.Cn(v,478,2,-1,1,g,11)
C.Cn(v,2,852,1,-1,g,11)
C.Cn(v,478,852,-1,-1,g,11)
return v},
fbB(d,e,f){var w=null,v=B.hl(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.ye(v,d,e)
C.rH(v,d)
C.ks(v,14,16,452,822,f,1.6)
C.ks(v,20,22,440,810,f,0.8)
return v},
byH(d,e,f,g){var w,v=C.fy(g)
B.iI(d,!0,v,0,479,0,f-1)
w=854-f
B.iI(d,!0,v,0,479,w,853);--w
B.iI(d,!0,v,0,e-1,f,w)
B.iI(d,!0,v,480-e,479,f,w)},
hNo(d){var w,v,u=4291404327
C.byH(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.kG(d,w,8,3,u,!0)
C.kG(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.kG(d,7,v,3,u,!0)
C.kG(d,473,v,3,u,!0)}return d},
fnk(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.jc(e,f),new B.jc(e+g*n,f),new B.jc(e,f+h*n)],t)
B.a1i(d,C.fy(m),s)
w=A.o.D(A.k.V(n*0.17),5,8)
v=A.k.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.jc(s,u),new B.jc(e+g*v,u),new B.jc(s,f+h*v)],t)
B.a1i(d,C.fy(k),t)
t=A.k.V(n*0.39)
C.kG(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.kG(d,e+g*t,f+h*3,4,k,!0)
C.kG(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.kG(d,e+g*t,f,5,k,!0)
C.kG(d,e,f+h*t,5,k,!0)}},
fWY(d,e,f,g,h,i,j,k,l){var w,v
C.fnk(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fnk(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fnk(d,k,v,1,-1,e,f,g,h,i,j)
C.fnk(d,w,v,-1,-1,e,f,g,h,i,j)},
a0w(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.k.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.k.V(e+o*s)
q=A.k.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.l0(d,!0,A.da,new B.qU(p),null,A.cX,j,r,q)}},
fmt(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kI(d,!0,A.da,new B.qU(o),null,A.cX,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.kI(d,!0,A.da,new B.qU(o),null,A.cX,1.4,q,q,p,p+h*r)}},
hLq(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.hl(o,o,A.c9,0,A.e0,854,o,0,3,o,A.c9,480,!1)
C.ye(n,d,e)
C.rH(n,d)
C.ks(n,20,20,440,814,f,1.2)
C.fmt(n,0,0,1,1,g)
C.fmt(n,480,0,-1,1,g)
C.fmt(n,0,854,1,-1,g)
C.fmt(n,480,854,-1,-1,g)
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
B.kI(n,!0,A.da,new B.qU(p),o,A.cX,1.2,240,r,60,q)}return n},
fkl(d,e,f,g,h){var w
C.fq2(d,!0,C.fy(g),13,e,f)
C.fq2(d,!0,C.fy(g),9,e,f)
w=B.a([new B.jc(e,f-4),new B.jc(e+4,f),new B.jc(e,f+4),new B.jc(e-4,f)],x.J)
B.a1i(d,C.fy(h),w)},
kG(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.jc(e,v),new B.jc(u,f),new B.jc(e,t),new B.jc(s,f)],x.J)
if(i){B.a1i(d,C.fy(h),r)
return}B.kI(d,!0,A.da,C.fy(h),w,A.cX,1,e,u,v,f)
B.kI(d,!0,A.da,C.fy(h),w,A.cX,1,u,e,f,t)
B.kI(d,!0,A.da,C.fy(h),w,A.cX,1,e,s,t,f)
B.kI(d,!0,A.da,C.fy(h),w,A.cX,1,s,e,f,v)},
fay(d,e,f,g,h,i,j){var w,v=B.a([new B.jc(e,f),new B.jc(e+g*28,f),new B.jc(e,f+h*28)],x.J)
B.a1i(d,C.fy(i),v)
v=e+g*14
w=f+h*14
C.kG(d,v,w,6,j,!0)
C.kG(d,v,w,3,i,!0)},
faz(d,e,f,g,h){var w=null,v=B.hl(w,w,A.c9,0,A.e0,854,w,0,3,w,A.c9,480,!1)
C.ye(v,d,e)
C.rH(v,d)
C.ks(v,18,18,444,818,f,2)
C.ks(v,26,26,428,802,f,0.9)
if(h!=null)B.iI(v,!0,C.fy(h),28,451,28,34)
C.fay(v,18,18,1,1,g,f)
C.fay(v,462,18,-1,1,g,f)
C.fay(v,18,836,1,-1,g,f)
C.fay(v,462,836,-1,-1,g,f)
return v},
hOt(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.hl(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
C.ye(r,u,4294240980)
C.rH(r,u)
C.ks(r,10,12,460,830,t,3.2)
C.ks(r,18,20,444,814,s,1.2)
C.ks(r,24,26,432,802,t,1.8)
C.fWY(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.kG(r,w,16,3,t,!0)
C.kG(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.kG(r,16,w,3,t,!0)
C.kG(r,464,w,3,t,!0)}return r},
hOu(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.hl(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
C.ye(p,s,4294373080)
C.rH(p,s)
C.ks(p,16,18,448,818,r,2.4)
C.ks(p,24,26,432,802,4286209044,1)
w=new C.fcS(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.fWY(p,!1,!0,r,q,q,34,16,18)
return p},
bzn(d,e,f,g,h,i){B.iI(d,!0,C.fy(i),e,e+g,f,f+h)},
bAc(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
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
B.kI(d,!1,A.da,new B.RD(i),null,A.cX,1,e,w,l,l)}},
hPk(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.kI(d,!1,A.da,new B.qU(r),null,A.cX,1,e,s,t,t);++v}return}w=f+g-1
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
B.kI(d,!1,A.da,new B.qU(r),null,A.cX,1,t,t,f,s);++q}},
hPl(d,e){var w,v,u=null,t=B.hl(u,u,A.c9,0,A.e0,854,u,0,3,u,A.c9,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.hPk(t,v,w,30,D.cPP,(A.o.an(v,30)+A.o.an(w,30)&1)===0)
C.bzn(t,44,44,392,766,d)
C.bAc(t,44,44,392,766,d,e)
C.rH(t,d)
C.ks(t,44,44,392,766,4292128567,2.2)
C.ks(t,50,50,380,754,4279898632,0.8)
return t},
hQp(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.kG(d,e,f,7,h,!0)
C.kG(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.kI(d,!0,A.da,C.fy(h),o,A.cX,1.6,w,u,v,t)
B.kI(d,!0,A.da,C.fy(h),o,A.cX,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.kI(d,!0,A.da,new B.qU(p),o,A.cX,1.2,w,v,q,q)}break
default:B.kI(d,!0,A.da,C.fy(h),o,A.cX,1.5,e-8,e+8,f,f)
B.kI(d,!0,A.da,C.fy(h),o,A.cX,1.5,e,e,f-8,f+8)
B.l0(d,!0,A.da,C.fy(h),o,A.cX,2,e,f)}},
hQq(d,e){var w,v,u,t,s=null,r=B.hl(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
B.iI(r,!0,C.fy(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.hQp(r,u,v,w,4292391514)}C.bzn(r,46,46,388,762,d)
C.bAc(r,46,46,388,762,d,e)
C.rH(r,d)
C.ks(r,46,46,388,762,4291404327,1.8)
return r},
hcs(d,e,f,g){C.fq2(d,!0,C.fy(g),16,e,f)
C.fq2(d,!0,C.fy(g),11,e,f)
C.kG(d,e,f,6,g,!0)
B.kI(d,!0,A.da,C.fy(g),null,A.cX,1.3,e-14,e+14,f,f)
B.kI(d,!0,A.da,C.fy(g),null,A.cX,1.3,e,e,f-14,f+14)},
hLi(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.hl(v,v,A.c9,0,A.e0,854,v,0,3,v,A.c9,480,!1)
B.iI(s,!0,C.fy(4280948752),0,479,0,853)
B.iI(s,!0,C.fy(u),0,479,0,78)
B.iI(s,!0,C.fy(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hcs(s,w,39,t)
C.hcs(s,w,815,t)}C.bzn(s,38,92,404,670,d)
C.bAc(s,38,92,404,670,d,e)
C.rH(s,d)
C.ks(s,38,92,404,670,t,1.8)
C.ks(s,45,99,390,656,4287322667,0.8)
return s},
hPR(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.jc(e,f),new B.jc(q-5,w),new B.jc(q,f-(18-Math.abs(r)*3)),new B.jc(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.a1i(d,new B.qU(o),p)}B.l0(d,!0,A.da,C.fy(4292128567),null,A.cX,3,e,f)},
hPS(d,e){var w,v,u,t,s=null,r=4279196764,q=B.hl(s,s,A.c9,0,A.e0,854,s,0,3,s,A.c9,480,!1)
C.ye(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.kI(q,!0,A.da,new B.qU(v),s,A.cX,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.kI(q,!0,A.da,new B.qU(u),s,A.cX,1.1,v,v,0,853)}B.iI(q,!0,C.fy(r),0,479,0,70)
B.iI(q,!0,C.fy(r),0,479,798,853)
for(t=0;t<5;++t)C.hPR(q,70+t*85,48,4292128567)
C.bzn(q,48,78,384,712,d)
C.bAc(q,48,78,384,712,d,e)
C.rH(q,d)
C.ks(q,48,78,384,712,4291404327,1.6)
return q},
hU9(d,e){var w,v,u,t=null,s=4279970378,r=B.hl(t,t,A.c9,0,A.e0,854,t,0,3,t,A.c9,480,!1)
B.iI(r,!0,C.fy(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.kG(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.l0(r,!0,A.da,new B.qU(u),t,A.cX,1,v,w)}C.bzn(r,40,40,400,774,d)
C.bAc(r,40,40,400,774,d,e)
C.rH(r,d)
C.ks(r,40,40,400,774,4291058750,2)
C.ks(r,48,48,384,758,s,0.8)
return r},
kQ:function kQ(d,e){this.a=d
this.b=e},
fzX:function fzX(d){this.a=d},
fzW:function fzW(d){this.a=d},
fcS:function fcS(d){this.a=d},
fAA(d){var w,v=d.a
A:{if("gazette"===v){w="The NGMY Gazette"
break A}if("chronicle"===v){w="The NGMY Chronicle"
break A}if("times"===v){w="The NGMY Times"
break A}if("daily"===v){w="The NGMY Daily"
break A}if("tabloid"===v){w="The Big NGMY"
break A}if("modern"===v){w="NGMY Digest"
break A}if("midnight"===v){w="The Midnight NGMY"
break A}w="The NGMY Herald"
break A}return w},
hQj(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
fVy(d){var w,v,u,t=null,s=A.a.cJ(d,"{"),r=A.a.oA(d,"}")
if(s<0||r<=s)return t
try{w=A.R.aG(0,Ai.agr(A.a.ap(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
aeY(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$aeY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vc(null,""),$async$aeY)
case 3:n=g
if(A.a.i(n).length===0)throw B.V("AI is not available right now. Please try again later.")
t=B.n1(n)
if(e==null)s=A.hl
else{r=C.hQj(e)
s=B.a([new B.a_w(A.cT.gcw().aJ(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.qK(t,d,s,E.EX),$async$aeY)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.V(q!=null&&B.KH(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$aeY,v)},
bBR(d){return C.i29(d)},
i29(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bBR=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.R.ao(d.ag(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.aeY(r,null),$async$bBR)
case 7:q=f
p=C.fVy(q)
if(p==null){u=d
w=1
break}o=d.aBK(p)
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
return B.i($async$bBR,v)},
hgl(d){var w,v=F.fY_(d)
v=B.aK(v,"book","newspaper")
if(F.a1B(d)!=="sw"){w=B.af("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fEv(d,e,f,g){return C.i40(d,e,f,g)},
i40(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fEv=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fAA(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hjP()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.aeY('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hgl(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fEv)
case 3:r=m.fVy(i)
if(r==null)throw B.V(y.S)
q=new C.zf(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","").aBK(r)
t=q.r
if(t.length===0)throw B.V("The AI did not write a story. Try again.")
s=n+" "+A.d.aI(t," ")
if(F.a1B(s)!=="sw"){p=B.af("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a1B(A.d.aI(t," "))==="sw"?C.bBR(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fEv,v)},
bBl(d,e,f,g,h){return C.i_M(d,e,f,g,h)},
i_M(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bBl=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fL(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.L)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aI(l,"\n")
l=C.hjP()
k=A.R.ao(d.ag(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.aeY('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hgl(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bBl)
case 3:p=j.fVy(a0)
if(p==null)throw B.V(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cy(o)){n=d.aBK(B.a1(o,x.N,x.z))
m=A.R.ao(n.ag(),null)!==A.R.ao(d.ag(),null)}else{n=d
m=!1}w=m&&F.a1B(A.d.aI(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bBR(n),$async$bBl)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a7r(A.a.i(B.t(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBl,v)},
a7r:function a7r(d,e,f){this.a=d
this.b=e
this.c=f},
i6N(d,e){return B.a5(d,!1).c8(B.e8(new C.fLo(e),!0,null,x.H))},
fLo:function fLo(d){this.a=d},
Vf:function Vf(d,e){this.c=d
this.a=e},
aDl:function aDl(d,e,f,g,h,i,j,k){var _=this
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
ega:function ega(d){this.a=d},
eg9:function eg9(){},
egb:function egb(d){this.a=d},
eg8:function eg8(d,e){this.a=d
this.b=e},
egc:function egc(){},
efN:function efN(d,e){this.a=d
this.b=e},
efJ:function efJ(d,e){this.a=d
this.b=e},
efU:function efU(d){this.a=d},
efV:function efV(d,e){this.a=d
this.b=e},
efW:function efW(d){this.a=d},
efP:function efP(d,e){this.a=d
this.b=e},
efQ:function efQ(d,e){this.a=d
this.b=e},
efR:function efR(d,e){this.a=d
this.b=e},
efS:function efS(d){this.a=d},
efT:function efT(d){this.a=d},
efO:function efO(d,e){this.a=d
this.b=e},
efL:function efL(d){this.a=d},
efM:function efM(d){this.a=d},
eg1:function eg1(d){this.a=d},
eg2:function eg2(d){this.a=d},
eg0:function eg0(d){this.a=d},
eg3:function eg3(d,e){this.a=d
this.b=e},
eg_:function eg_(d,e){this.a=d
this.b=e},
eg4:function eg4(d){this.a=d},
efZ:function efZ(d){this.a=d},
eg5:function eg5(d){this.a=d},
efY:function efY(d){this.a=d},
eg6:function eg6(d,e){this.a=d
this.b=e},
efX:function efX(d,e){this.a=d
this.b=e},
eg7:function eg7(d){this.a=d},
efK:function efK(d,e){this.a=d
this.b=e},
fzw(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fzw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hdX){w=1
break}r=new C.fzx()
t=4
q=x.s
w=7
return B.b(B.iK(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fzw)
case 7:$.hdX=!0
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
return B.i($async$fzw,v)},
bBI(d){return A.GL[B.mv(d)-1]+", "+A.oQ[B.bG(d)-1]+" "+B.bQ(d)+", "+B.bz(d)},
hTf(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.ddK[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
fYo(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fD(d[w],B.af("[ \\t]+",!0,!1,!1,!1))
A.d.v(h,new B.a2(v,new C.fxP(),B.U(v).k("a2<1>")))
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
continue}o=new C.fxR(j,h)
n=new C.fxQ(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.an(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.iT(o.$1(l)))
j.a+=l}return u},
fVh(d,e){var w=new C.fct()
return A.d.cI(e,0,new C.fcr(w))>=A.d.cI(d,0,new C.fcs(w))},
hb7(d){var w,v,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
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
zf:function zf(d,e,f,g,h,i,j,k,l,m){var _=this
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
cbO:function cbO(d){this.a=d},
cbM:function cbM(){},
cbN:function cbN(){},
t9:function t9(d,e){this.a=d
this.b=e},
Bd:function Bd(d,e){this.a=d
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
fzx:function fzx(){},
fxP:function fxP(){},
fxR:function fxR(d,e){this.a=d
this.b=e},
fxQ:function fxQ(d,e,f){this.a=d
this.b=e
this.c=f},
fct:function fct(){},
fcu:function fcu(){},
fcr:function fcr(d){this.a=d},
fcs:function fcs(d){this.a=d},
b02:function b02(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
cbP:function cbP(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
cbQ:function cbQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cbR:function cbR(d){this.a=d},
bbC:function bbC(d){this.a=d},
bbB:function bbB(d,e){this.b=d
this.a=e},
btd:function btd(d){this.a=d},
b86:function b86(d,e){this.b=d
this.a=e},
bqI:function bqI(d,e){this.b=d
this.a=e},
hlJ(d,e){return B.a5(d,!1).c8(B.e8(new C.fLr(e,null),!0,null,x.E))},
fLr:function fLr(d,e){this.a=d
this.b=e},
Vi:function Vi(d,e,f){this.c=d
this.d=e
this.a=f},
aDp:function aDp(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
ehl:function ehl(){},
ehm:function ehm(d){this.a=d},
ehk:function ehk(d,e){this.a=d
this.b=e},
eh8:function eh8(d){this.a=d},
eh9:function eh9(d){this.a=d},
ehf:function ehf(d){this.a=d},
ehg:function ehg(d,e){this.a=d
this.b=e},
ehd:function ehd(d){this.a=d},
ehe:function ehe(d,e,f){this.a=d
this.b=e
this.c=f},
eha:function eha(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ehh:function ehh(d,e){this.a=d
this.b=e},
ehc:function ehc(d,e){this.a=d
this.b=e},
ehi:function ehi(d){this.a=d},
ehb:function ehb(d,e){this.a=d
this.b=e},
ehj:function ehj(d,e){this.a=d
this.b=e},
bb8:function bb8(d,e,f){this.b=d
this.c=e
this.a=f},
i6T(d){return B.a5(d,!1).c8(B.e8(new C.fLH(),!0,null,x.I))},
bz8(d,e){var w,v,u,t,s,r,q=B.c2(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
fWG(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
fLH:function fLH(){},
a_n:function a_n(d){this.a=d},
os:function os(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aEM:function aEM(d,e,f,g,h,i,j,k,l){var _=this
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
_.aH=_.aP=_.aE=_.az=_.Z=_.b6=_.bh=_.y2=0
_.b3=null
_.b2=0.25
_.be=null
_.bM=0.5
_.aS=1
_.c7=_.bU=_.bj=0
_.cX=_.cU=!1
_.c=_.a=null},
eQH:function eQH(d){this.a=d},
ePz:function ePz(d,e){this.a=d
this.b=e},
ePX:function ePX(d,e){this.a=d
this.b=e},
eQ6:function eQ6(d){this.a=d},
ePi:function ePi(d){this.a=d},
ePj:function ePj(d){this.a=d},
ePg:function ePg(d){this.a=d},
ePh:function ePh(d){this.a=d},
ePQ:function ePQ(d,e){this.a=d
this.b=e},
ePR:function ePR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQ2:function eQ2(d,e,f){this.a=d
this.b=e
this.c=f},
eQ1:function eQ1(d,e){this.a=d
this.b=e},
eQ3:function eQ3(d,e){this.a=d
this.b=e},
eQ0:function eQ0(d,e){this.a=d
this.b=e},
eQ5:function eQ5(d,e,f){this.a=d
this.b=e
this.c=f},
eQ4:function eQ4(d,e){this.a=d
this.b=e},
eP8:function eP8(d){this.a=d},
eP9:function eP9(d){this.a=d},
ePa:function ePa(d){this.a=d},
eP7:function eP7(){},
ePb:function ePb(d,e){this.a=d
this.b=e},
eP6:function eP6(d,e){this.a=d
this.b=e},
ePd:function ePd(){},
ePc:function ePc(d,e){this.a=d
this.b=e},
eP5:function eP5(d,e){this.a=d
this.b=e},
eP2:function eP2(d,e){this.a=d
this.b=e},
ePe:function ePe(d){this.a=d},
eP4:function eP4(d,e){this.a=d
this.b=e},
ePf:function ePf(d){this.a=d},
eP3:function eP3(d,e){this.a=d
this.b=e},
eQw:function eQw(d,e){this.a=d
this.b=e},
eQD:function eQD(d){this.a=d},
eQE:function eQE(d,e){this.a=d
this.b=e},
eQF:function eQF(){},
eQx:function eQx(d,e){this.a=d
this.b=e},
eQv:function eQv(d,e){this.a=d
this.b=e},
eQy:function eQy(d,e){this.a=d
this.b=e},
eQu:function eQu(d,e){this.a=d
this.b=e},
eQz:function eQz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQt:function eQt(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQA:function eQA(d){this.a=d},
eQB:function eQB(d,e){this.a=d
this.b=e},
eQC:function eQC(d){this.a=d},
eQs:function eQs(d){this.a=d},
eQf:function eQf(d){this.a=d},
eQg:function eQg(d){this.a=d},
eQe:function eQe(d,e){this.a=d
this.b=e},
eQ9:function eQ9(d,e){this.a=d
this.b=e},
eQh:function eQh(d){this.a=d},
eQk:function eQk(d){this.a=d},
eQd:function eQd(d){this.a=d},
eQl:function eQl(d){this.a=d},
eQm:function eQm(d){this.a=d},
eQn:function eQn(d){this.a=d},
eQo:function eQo(d){this.a=d},
eQc:function eQc(d){this.a=d},
eQp:function eQp(d){this.a=d},
eQb:function eQb(d){this.a=d},
eQq:function eQq(d,e){this.a=d
this.b=e},
eQa:function eQa(d,e){this.a=d
this.b=e},
eQr:function eQr(d){this.a=d},
eQi:function eQi(d){this.a=d},
eQj:function eQj(d){this.a=d},
ePU:function ePU(d){this.a=d},
ePT:function ePT(d){this.a=d},
ePV:function ePV(d,e){this.a=d
this.b=e},
ePS:function ePS(d,e){this.a=d
this.b=e},
ePW:function ePW(d){this.a=d},
ePM:function ePM(d){this.a=d},
ePL:function ePL(d){this.a=d},
ePN:function ePN(d){this.a=d},
ePK:function ePK(d){this.a=d},
ePO:function ePO(d,e){this.a=d
this.b=e},
ePJ:function ePJ(d,e){this.a=d
this.b=e},
ePI:function ePI(d,e){this.a=d
this.b=e},
ePq:function ePq(d){this.a=d},
ePr:function ePr(d){this.a=d},
ePs:function ePs(d){this.a=d},
ePt:function ePt(d){this.a=d},
ePu:function ePu(d){this.a=d},
ePv:function ePv(d){this.a=d},
ePw:function ePw(d){this.a=d},
ePx:function ePx(d){this.a=d},
ePy:function ePy(d){this.a=d},
eOM:function eOM(d){this.a=d},
eON:function eON(d){this.a=d},
eOO:function eOO(d){this.a=d},
eOP:function eOP(d){this.a=d},
eOQ:function eOQ(d){this.a=d},
eOL:function eOL(d){this.a=d},
eOR:function eOR(d){this.a=d},
eOS:function eOS(d){this.a=d},
ePk:function ePk(d){this.a=d},
ePl:function ePl(d){this.a=d},
ePm:function ePm(d){this.a=d},
ePn:function ePn(d){this.a=d},
ePo:function ePo(d){this.a=d},
eOW:function eOW(d){this.a=d},
eOX:function eOX(d){this.a=d},
eOY:function eOY(d){this.a=d},
eOZ:function eOZ(d){this.a=d},
eP_:function eP_(d){this.a=d},
eOV:function eOV(d){this.a=d},
eP0:function eP0(d){this.a=d},
eOU:function eOU(d){this.a=d},
eP1:function eP1(d){this.a=d},
eOT:function eOT(d){this.a=d},
ePP:function ePP(d){this.a=d},
ePH:function ePH(d){this.a=d},
ePD:function ePD(d){this.a=d},
ePC:function ePC(d){this.a=d},
ePE:function ePE(d,e){this.a=d
this.b=e},
ePB:function ePB(d,e){this.a=d
this.b=e},
ePF:function ePF(d,e){this.a=d
this.b=e},
ePA:function ePA(d,e){this.a=d
this.b=e},
ePG:function ePG(d){this.a=d},
eQ_:function eQ_(d){this.a=d},
ePZ:function ePZ(d,e,f){this.a=d
this.b=e
this.c=f},
ePY:function ePY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eQ8:function eQ8(d,e){this.a=d
this.b=e},
eQ7:function eQ7(d,e){this.a=d
this.b=e},
ePp:function ePp(d){this.a=d},
eQG:function eQG(d){this.a=d},
beH:function beH(d,e){this.b=d
this.a=e},
i2k(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
i2l(d,e){var w,v,u,t,s,r,q,p,o,n=B.af("\\S+",!0,!1,!1,!1).kS(0,d),m=B.B(n,B.a4(n).k("J.E"))
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
v=t.index+t[0].length}n=w.a=n+A.a.b1(d,v)
return n.charCodeAt(0)==0?n:n},
bzJ(){var w=$.byR,v=$.PY
$.PY=v+1
return w+"_"+v},
i8(d,e,f,g,h,i,j){return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,C.bzJ(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cl,D.f0,g,e,f)},
nS(d,e,f,g){var w=f*9
return C.i8(D.eJ,d-f/2,e-w/32,f,w/16,g,0)},
hMZ(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=e&16777215,t=u|855638016,s=0;s<7;++s){r=v[s]
q=$.byR
p=$.PY
$.PY=p+1
w.push(new C.eJ(q+"_"+p,D.f0,0,r,1,0.0016,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],t=u|570425344,s=0;s<3;++s){o=v[s]
q=$.byR
p=$.PY
$.PY=p+1
w.push(new C.eJ(q+"_"+p,D.f0,o,0,0.004,1,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.be,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.nS(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.nS(0.1,0.92,0.6,u|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.i8(D.be,0.08,0.08,0.5,0.003,v,0),C.i8(D.be,0.58,0.08,0.004,0.06,v,0),C.i8(D.be,0.58,0.14,0.34,0.003,v,0),C.i8(D.be,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.i8(D.be,0.08,0.8,0.004,0.14,t,0),C.i8(D.be,0.08,0.94,0.6,0.003,t,0),C.nS(0.58,0.08,0.05,e),C.nS(0.92,0.22,0.05,e),C.nS(0.08,0.8,0.05,f),C.nS(0.68,0.94,0.05,f),C.nS(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.i8(D.kX,0.62,0.04,0.34,0.2,w|855638016,0.2),C.i8(D.kX,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.i8(D.kX,0.7,0.8,0.22,0.12,w|1140850688,0),C.i8(D.kX,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.nS(0.5,0.5,1.5,w|335544320),C.nS(0.5,0.5,1.15,w|402653184),C.nS(0.5,0.5,0.8,v|436207616),C.nS(0.95,0.05,0.4,v|855638016),C.nS(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.nS(0.85,0.08,0.7,w|1140850688),C.nS(0.1,0.35,0.5,v|855638016),C.nS(0.9,0.62,0.55,v|771751936),C.nS(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.i8(D.be,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.i8(D.be,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.i8(D.be,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.i8(D.be,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.nS(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.nS(0.5,0.2,0.65,(w|3422552064)>>>0),C.nS(0.5,0.2,0.95,w|855638016),C.i8(D.be,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.i8(D.be,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.i8(D.jF,-0.1,0.78,0.7,0.2,w|1426063360,0),C.i8(D.jF,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.i8(D.jF,0.15,0.86,0.6,0.14,1712265002,0),C.nS(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(n=0;n<16;++n){v=D.cRd[n]
u=A.o.F(n,3)===0
t=u?0.035:0.02
q=(n&1)===0?e:f
q=((u?255:170)<<24|q&16777215)>>>0
p=t*9
m=$.byR
l=$.PY
$.PY=l+1
w.push(new C.eJ(m+"_"+l,D.f0,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a5,A.bl,A.aD,k,A.bg,null,D.eJ,q,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0))}w.push(C.nS(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.i8(D.jF,0.35,-0.1,0.3,0.62,w|855638016,0),C.i8(D.jF,0.05,-0.1,0.3,0.55,v,-0.5),C.i8(D.jF,0.65,-0.1,0.3,0.55,v,0.5),C.nS(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.i8(D.be,0.06,0.04,0.88,0.002,e,0),C.i8(D.be,0.06,0.96,0.88,0.002,e,0),C.i8(D.be,0.06,0.04,0.004,0.92,e,0),C.i8(D.be,0.936,0.04,0.004,0.92,e,0),C.i8(D.be,0.09,0.07,0.82,0.001,w,0),C.i8(D.be,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.i8(D.jG,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.i8(D.jG,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.i8(D.jG,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.i8(D.be,0,0,0.3,0.09,w|1140850688,0),C.i8(D.be,0.7,0.9,0.3,0.1,v|1426063360,0),C.i8(D.be,0.82,0.04,0.12,0.07,w|771751936,0),C.i8(D.be,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.i8(D.eJ,0.62,0.02,0.5,0.16,v,0.6),C.i8(D.eJ,0.78,0.12,0.4,0.12,u,0.9),C.i8(D.eJ,-0.12,0.8,0.5,0.16,u,-0.6),C.i8(D.eJ,-0.05,0.9,0.4,0.12,v,-0.9),C.nS(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.i8(D.be,0.09,0.12,0.16,0.006,e,0),C.i8(D.be,0.05,0.03,0.9,0.001,w,0),C.i8(D.be,0.05,0.97,0.9,0.001,w,0)],x.u)}},
hZQ(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.byR=j
$.PY=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fvd()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.eo(A.bg,!1,n,A.aD,"ngmy_quote_background",m,24,A.bl,A.a5,"",1,C.bzJ(),g,"","",0,!1,"",0,D.be,l,2,"",0,0,"",D.cl,D.lq,1,0,0))
if(a9)A.d.v(q,C.hMZ(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.k.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.af("[*~^]",!0,!1,!1,!1)
p=C.i2k(B.aK(w,p,""))
o=A.a.t(w,B.af("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fvc(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.k.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cF,A.a5))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a5))
if(a0!=null&&a0.length!==0)q.push(C.eo(A.bg,!1,n,A.aD,"ngmy_quote_logo",m,24,A.bl,A.a5,a1,a3*9/16,C.bzJ(),a0,"","",0,!1,a2,0,D.be,l,2,"",0,0,"",D.cl,D.lq,a3,a4,a5))
return C.rn(s,r,0,0,q,j+"_slide",D.q5,"","","",D.dd)},
rm:function rm(d,e){this.a=d
this.b=e},
m1:function m1(d,e,f,g,h,i,j,k,l,m){var _=this
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
fvd:function fvd(){},
fvc:function fvc(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
hD1(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a6(d)
v=B.bi(B.t(w.h(d,"at")))
u=w.h(d,"outline")
t=B.t(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b6(u.a(w.h(d,"extras")),new C.cda(),x.N)
s=B.B(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bS()
w=w.h(d,"request")
return new C.zh(u,t,s,B.t(w==null?"":w))},
fCT(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fCT=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hej){w=1
break}$.hej=!0
t=4
w=7
return B.b(B.aA(),$async$fCT)
case 7:r=e
q=B.aU(J.q(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.R.aG(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.ju(p),k=k.gaf(k),j=x.j,i=x.o;k.C();){o=k.gT(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aV(j.a(o.b));h.C();){m=h.gT(h)
l=C.hD1(m)
if(l!=null)J.ch(n,l)}$.Co.cg(0,B.t(o.a),new C.fCU(n))}C.fWm()
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
return B.i($async$fCT,v)},
fWm(){var w,v=new B.S(Date.now(),0,!1).bP(-12e8)
for(w=new B.dt($.Co,$.Co.r,$.Co.e);w.C();)J.no(w.d,new C.fjy(v))
$.Co.bn($.Co,new C.fjz())},
aNo(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aNo=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aNo)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cK($.Co,B.a4($.Co).k("cK<1,2>")).gaf(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aV(q.b);h.C();){o=h.gT(h)
g=o
J.ch(p,B.F(["at",g.a.a6().ac(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aF(r,i,p)}n=r
w=7
return B.b(s.au("String","ngmy_slides_ai_history_v1",A.R.ao(n,null)),$async$aNo)
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
return B.i($async$aNo,v)},
i2W(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.fWm()
w=$.Co.cg(0,d,new C.fCW())
v=Date.now()
u=B.B(e,B.a4(e).k("co.E"))
J.pq(w,0,new C.zh(new B.S(v,0,!1),f,u,g))
C.aNo()},
i2T(d){var w,v=$.Co.h(0,d)
if(v==null||J.cl(v))return
w=J.cE(v)
w.cB(v,0)
if(w.gam(v))$.Co.W(0,d)
C.aNo()},
zh:function zh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cda:function cda(){},
fCU:function fCU(d){this.a=d},
fjy:function fjy(d){this.a=d},
fjz:function fjz(){},
fCW:function fCW(){},
i2Y(d){return A.d.dL(D.vT,new C.fCZ(d),new C.fD_())},
hD_(d){var w
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
hCZ(d){var w
switch(d.a){case 0:w=D.akq
break
case 1:w=A.y9
break
case 2:w=A.aly
break
case 3:w=I.ak3
break
case 4:w=A.akW
break
case 5:w=A.lO
break
default:w=null}return w},
hPX(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Pw[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Pw[w]
if(!B.cX(v.toLowerCase(),t,0))u=B.cX(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
hD0(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
i2U(d,e,f,g,h){var w=new B.K(D.vT,new C.fCS(),x.eC).aI(0,", "),v=""+d,u=C.hjH(h),t=F.fwC(h),s=C.hfV(g),r=e.t(0,D.HG)?'- New slides get an "emoji".\n':"",q=e.t(0,D.HH)?'- New slides get an "icon3d" from: '+A.d.aI(D.Pw,", ")+".\n":"",p=e.t(0,D.Cv)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
i2V(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.K(D.vT,new C.fCV(),x.eC).aI(0,", "),p=new B.fd("")
if(e.t(0,D.HG)){p.a=s
w=s}else w=""
if(e.t(0,D.HH))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aI(D.Pw,", ")+".\n")
if(e.t(0,D.Cv))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hjH(d)
v=F.fwC(d)
u=C.hfV(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.u(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
agH(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.CN(a3,"{"),a5=J.fOH(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.L0(a3,a4,a5+1)
try{w=A.R.aG(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.q(w,"slides")
p=x.j
if(!p.b(v)||J.cl(v))return a1
u=B.a([],x.aC)
for(o=J.aV(v),n=x.s,m=x.N;o.C();){t=o.gT(o)
if(!q.b(t))continue
if(p.b(J.q(t,a2))){l=J.b6(p.a(J.q(t,a2)),new C.fAS(),m).c_(0,new C.fAT())
k=B.B(l,l.$ti.k("J.E"))}else k=B.a([],n)
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
f=C.hPX(B.t(f==null?"":f))
if(f==null)f=""
e=J.q(t,"image_query")
if(e==null)e=J.q(t,"imageQuery")
e=A.a.i(B.t(e==null?"":e))
d=J.q(t,"picture")
d=B.c7(B.t(d==null?0:d),a1)
if(d==null)d=0
J.ch(u,new C.a7z(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.q(w,"style")
r=A.a.i(B.t(q==null?a7:q)).toLowerCase()
q=J.q(w,"title")
q=A.a.i(B.t(q==null?J.fo(u).b:q))
p=A.d.b5(D.vT,new C.fAU(r))?r:a7
o=C.fiN(J.q(w,"logo_frame"),D.BV)
n=C.fiN(J.q(w,"logo_ring"),D.BQ)
m=C.fiN(J.q(w,"photo_frame"),D.BV)
l=C.fiN(J.q(w,"photo_ring"),D.BQ)
return new C.aqw(q,p,u,o,n,m,l)}catch(a0){return a1}},
a16(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hiP(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.t(0,D.Cw),f7=f6?C.hJF():e4,f8=f7==null
if(f8)w=e4
else{v=new B.eL()
v.dB(f7.w+1)
u=f7.a
t=B.bm(u.b,!0,x.dL)
A.d.fu(t,v)
s=u.c
s=new C.nG("luxe",u.a,A.lO,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dd)
w=s}if(w==null)w=C.i2Y(f9.b)
r=g2.t(0,D.a4o)||f6
q=g2.t(0,D.HG)
p=g2.t(0,D.Rs)
o=new C.fvh()
n=B.a([],x.g)
m=new C.fvk(o,w,r)
l=new C.fvj(o,r)
k=new C.fvi(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a6(g0),a7=!A.d.b5(u,new C.fvg(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.cSL[b8]
c0=D.cRG[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.eJB.t(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eJ,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eJ,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eJ,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.mB,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.L,D.q6,500,f2,f0))
c1.push(l.$8$fx$key(D.be,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.L,a2,300,f5))
d3=D.Rp
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eJ,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.kX,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.be,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Ct
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eJ,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eJ,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.mB,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.L,b9,e5,A.cF,A.P))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.L,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.L,D.q6,500,f2,f0))
d3=D.mA
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eJ,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.be,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.uc:D.cl
c1.push(new C.eJ(b4,D.a4m,0.64,0.05,0.27,0.9,g1,24,A.a5,A.bl,A.aD,4279310375,A.bg,e4,D.be,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.mA
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eJ,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eJ,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.mB,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.L,D.q6,450,f2,f0))
c1.push(l.$8$fx$key(D.be,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.L,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.L,a2,300,f5))
d3=D.Rp
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eJ,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eJ,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.be,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.be,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aI(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.HE,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.mA}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dd,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.hLh(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dg0[A.o.F(b1,6)]:s
n.push(new C.lD(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Bq(e4,e4,e4,e4,D.Cs,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.ap(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fxF(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fxF=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.t(0,D.Cv)
n=e.t(0,D.HH)
if(!o&&!n){u=D.a3l
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fxI(o,s[r],n,$.hOI,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iK(t,x.e),$async$fxF)
case 3:q=m.aV(g)
case 4:if(!q.C()){w=5
break}p=q.gT(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fxF,v)},
fwF(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fwF=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.i2V(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aMJ(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fwF)
case 3:u=s.aN4(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fwF,v)},
bBm(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bBm=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aX(x.N)
for(s=B.ec(f,f.r,B.a4(f).c),r=s.$ti.c;s.C();){q=s.d
t.J(0,(q==null?r.a(q):q).b)}C.i2W(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.agH(i,"colorful")
t=C.i2U(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aMJ(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.hl),$async$bBm)
case 3:u=o.aN4(m,f,h,g,D.dUc,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBm,v)},
aMJ(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aMJ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vc(null,""),$async$aMJ)
case 3:n=i
if(A.a.i(n).length===0)throw B.V("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.n1(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.qK(t,d,g,null),$async$aMJ)
case 7:q=i
p=q.b
if(p!=null){o=C.agH(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.V(s!=null&&B.KH(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aMJ,v)},
aN4(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aN4=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.t(0,D.Cv)||e.t(0,D.HH)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.db(e,x.Q)
t.W(0,D.Cv)}w=6
return B.b(C.fxF(d,t),$async$aN4)
case 6:s=k
w=4
break
case 5:s=D.a3l
case 4:t=d.c
w=A.d.b5(t,new C.fco())?7:9
break
case 7:r=$.hkz
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dP(r,x.aP),$async$aN4)
case 10:q=k
p=q!=null?A.R.ao(q.ag(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hiP(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.hD0(new C.aqw(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("K<1,n>")
t=B.B(new B.K(m,new C.fcp(),n),n.k("ak.E"))
l.cx=t
t=B.a4(e).k("jL<co.E,n>")
t=B.B(new B.jL(e,new C.fcq(),t),t.k("J.E"))
l.cy=t
l.ay=e.t(0,D.Rs)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aN4,v)},
fZ6(d){var w,v,u,t=d.cy
if(t==null)t=A.T
w=B.aX(x.Q)
for(v=0;v<6;++v){u=D.a2c[v]
if(A.d.t(t,u.b))w.J(0,u)}return w},
i6Y(d){return B.bU(A.K,null,new C.fLT(),d,!0,!0,!0,null,!1,!1,x.I)},
hKh(d,e){var w,v=e.toLowerCase()
if(A.a.cb(v,".png"))w="image/png"
else w=A.a.cb(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cT.gcw().aJ(d)},
i6X(d,e,f){return B.bU(A.K,null,new C.fLS(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
fZ7(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
fZ8(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.t(o,p))o.push(p)}return o},
fiN(d,e){var w=A.a.i(B.t(d==null?"":d)).toLowerCase()
return A.d.b5(e,new C.fiO(w))?w:""},
hfV(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hkx(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.agH(a1==null?"":a1,a0),a3=C.agH(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("a2<1>"),p=0;p<t.length;t.length===v||(0,B.L)(t),++p){o=B.r8(new B.a2(r,new C.fD0(t[p]),q))
if(o==null)return!1
s.push(o)}for(v=w.length,n=0;n<v;++n){m=w[n]
l=u[n]
if(m.a!==l.a||m.f!==l.f||m.r!==l.r||m.w!==l.w||m.x!==l.x)return!1
if(m.d.length!==l.d.length)return!1}if(!a6)return!0
for(v=x.fR,r=v.k("J.E"),q=x.L,n=0;n<w.length;++n){m=w[n]
l=u[n]
k=B.a([new B.y(m.b,l.b),new B.y(m.c,l.c)],q)
for(j=m.d,i=l.d,h=0;h<j.length;++h)k.push(new B.y(j[h],i[h]))
k.push(new B.y(m.e,l.e))
g=B.B(new B.a2(k,new C.fD1(),v),r)
A.d.b0(g,new C.fD2())
if(g.length===0)continue
f=new C.fD3(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.L)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
i3e(d){var w=d.toLowerCase(),v=B.af("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aFr
v=B.af("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dW7
v=B.af("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.dW8
return null},
hfw(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.k.bt(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.k.dw(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
i2Z(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.o7
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
if(C.hfw(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hfw(n,i,v,u))if(n.w>10){f=h+1
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
i2X(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.agH(o,"colorful")
if(n==null)throw B.V("That earlier version could not be read.")
w=B.aX(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.L)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a2c[r]
if(q.b===s)w.J(0,q)}}v=C.fZ7(e)
u=C.fZ8(e)
p=C.hiP(n,D.a3l,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("K<1,n>")
o=B.B(new B.K(o,new C.fCX(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("jL<co.E,n>")
o=B.B(new B.jL(w,new C.fCY(),o),o.k("J.E"))
p.cy=o
p.ay=w.t(0,D.Rs)
return p},
i6K(d,e,f){return B.bU(A.K,null,new C.fL5(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hJF(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.eL()
s.dB(t)
w=D.cwV[s.aB(10)]
v=new C.ecg(s)
u=x.N
return new C.ecf(w,s.aB(4),J.fo(v.$1$2(D.cX3,1,x.ff)),w.r[s.aB(3)],v.$1$2(D.dbI,2+s.aB(2),u),v.$1$2(D.d57,2,u),v.$1$2(D.dez,4,x.fP),t)},
hLh(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.eL()
a1.dB(a5.w+a3*13)
w=new C.f8S(a4)
v=new C.f8U(a4,d)
u=new C.f8T(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.L)(a2),++q){p=a2[q]
if(p.b===D.cQ){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.aT(A.o.fS(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.aT(A.o.fS(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.ck(a2,0,w.$8(D.eJ,0.1+a1.aj()*0.45,0.05+a1.aj()*0.3,0.45,0.75,C.a16(a0,52),"lux_spot",a5.wm(0,"spotlight")))
else A.d.ck(a2,0,w.$8(D.be,0,0,1,1,0,"lux_back",a5.wm(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.ck(a2,1,w.$8(D.be,0,0,1,1,0,"lux_back2",a5.aE8(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.022,0.038,0.956,0.924,0,g,a5.wm(0,f),D.dd,150,C.a16(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.018,0.032,0.964,0.936,0,g,a5.wm(0,f),D.dd,120,C.a16(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.be,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dd,260,C.a16(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.be,0,0,1,1,0,"lux_filigree",a5.wm(0,"filigree"),D.dd,200))
break
default:a2.push(w.$10$anim$delay(D.be,0.08,0.06,0.84,0.004,C.a16(a0,208),"lux_rule",a5.aE8(0,"shimmer",r),D.ub,150))
a2.push(w.$10$anim$delay(D.be,0.08,0.936,0.84,0.004,C.a16(a0,144),"lux_rule2","",D.HE,220))}l=!A.d.b5(a2,new C.f8R())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.wm(0,"crest"),350))
else{o=a1.hb()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.wm(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a16(r,242)
j=a5.wm(0,"orbit")
i=s===D.be?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.q6,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eJ,t-0.007,0.9495,0.014,0.025,C.a16(r,242),"lux_g2",a5.wm(0,"orbit"),D.q6,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){h=t[q]
a2.push(w.$8(D.be,0,0,1,1,0,"lux_"+h,h+"@"+A.a.aT(A.o.fS(a0,16),8,"0").toUpperCase()))}if((A.d.gL(d.b).a&16777215)<8421504)a2.push(w.$8(D.be,0,0,1,1,0,"lux_velvet",a5.wm(0,"velvet")))},
nG:function nG(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fCZ:function fCZ(d){this.a=d},
fD_:function fD_(){},
vQ:function vQ(d,e){this.a=d
this.b=e},
a7z:function a7z(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
aqw:function aqw(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fCS:function fCS(){},
fCV:function fCV(){},
fAS:function fAS(){},
fAT:function fAT(){},
fAU:function fAU(d){this.a=d},
fvh:function fvh(){},
fvk:function fvk(d,e,f){this.a=d
this.b=e
this.c=f},
fvj:function fvj(d,e){this.a=d
this.b=e},
fvi:function fvi(d,e){this.a=d
this.b=e},
fvg:function fvg(d){this.a=d},
fxI:function fxI(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fxG:function fxG(d){this.a=d},
fxH:function fxH(d){this.a=d},
fco:function fco(){},
fcp:function fcp(){},
fcq:function fcq(){},
fLT:function fLT(){},
a_U:function a_U(d){this.a=d},
aGH:function aGH(d,e,f,g,h){var _=this
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
eWT:function eWT(d,e,f){this.a=d
this.b=e
this.c=f},
eWU:function eWU(d,e){this.a=d
this.b=e},
eWR:function eWR(d,e){this.a=d
this.b=e},
eWS:function eWS(d,e){this.a=d
this.b=e},
eWQ:function eWQ(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eWL:function eWL(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eWP:function eWP(d,e){this.a=d
this.b=e},
eWK:function eWK(d,e){this.a=d
this.b=e},
eWO:function eWO(d,e){this.a=d
this.b=e},
eWJ:function eWJ(d,e){this.a=d
this.b=e},
eWM:function eWM(d){this.a=d},
eWN:function eWN(d,e){this.a=d
this.b=e},
eWz:function eWz(d,e){this.a=d
this.b=e},
eWA:function eWA(d,e){this.a=d
this.b=e},
eWC:function eWC(d){this.a=d},
eWD:function eWD(d){this.a=d},
eWE:function eWE(d){this.a=d},
eWF:function eWF(d){this.a=d},
eWB:function eWB(d,e){this.a=d
this.b=e},
eWG:function eWG(d,e){this.a=d
this.b=e},
eX6:function eX6(d){this.a=d},
eX7:function eX7(d){this.a=d},
eX5:function eX5(d){this.a=d},
eX8:function eX8(d){this.a=d},
eX4:function eX4(d){this.a=d},
eXa:function eXa(d){this.a=d},
eX3:function eX3(d,e){this.a=d
this.b=e},
eXb:function eXb(d){this.a=d},
eX2:function eX2(d,e){this.a=d
this.b=e},
eXc:function eXc(d){this.a=d},
eX1:function eX1(d){this.a=d},
eXd:function eXd(d){this.a=d},
eX0:function eX0(d,e){this.a=d
this.b=e},
eXe:function eXe(d){this.a=d},
eX_:function eX_(d,e){this.a=d
this.b=e},
eXf:function eXf(d){this.a=d},
eWZ:function eWZ(d){this.a=d},
eXg:function eXg(d,e){this.a=d
this.b=e},
eWY:function eWY(d,e){this.a=d
this.b=e},
eXh:function eXh(d){this.a=d},
eX9:function eX9(d){this.a=d},
eWX:function eWX(d,e){this.a=d
this.b=e},
eWH:function eWH(d,e,f){this.a=d
this.b=e
this.c=f},
eWI:function eWI(d,e,f){this.a=d
this.b=e
this.c=f},
eWW:function eWW(d,e){this.a=d
this.b=e},
eWV:function eWV(d,e){this.a=d
this.b=e},
fLS:function fLS(d,e){this.a=d
this.b=e},
a_T:function a_T(d,e,f){this.c=d
this.d=e
this.a=f},
aGG:function aGG(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
eWs:function eWs(d){this.a=d},
eWt:function eWt(d){this.a=d},
eWu:function eWu(d,e){this.a=d
this.b=e},
eWv:function eWv(d){this.a=d},
eWw:function eWw(d){this.a=d},
eWr:function eWr(d,e){this.a=d
this.b=e},
eWx:function eWx(d,e){this.a=d
this.b=e},
eWy:function eWy(d,e){this.a=d
this.b=e},
fiO:function fiO(d){this.a=d},
b0q:function b0q(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aDe:function aDe(d,e,f){this.c=d
this.d=e
this.a=f},
bjm:function bjm(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
eci:function eci(d){this.a=d},
ech:function ech(){},
bgU:function bgU(d,e){this.b=d
this.a=e},
fD0:function fD0(d){this.a=d},
fD1:function fD1(){},
fD2:function fD2(){},
fD3:function fD3(d){this.a=d},
ar5:function ar5(d,e){this.a=d
this.b=e},
fCX:function fCX(){},
fCY:function fCY(){},
fL5:function fL5(d,e){this.a=d
this.b=e},
Zf:function Zf(d,e,f){this.c=d
this.d=e
this.a=f},
aAH:function aAH(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dhP:function dhP(d){this.a=d},
dhQ:function dhQ(d){this.a=d},
dhR:function dhR(d,e){this.a=d
this.b=e},
dhU:function dhU(d){this.a=d},
dhV:function dhV(d,e){this.a=d
this.b=e},
dhT:function dhT(d,e){this.a=d
this.b=e},
dhW:function dhW(d){this.a=d},
dhS:function dhS(d,e){this.a=d
this.b=e},
brO:function brO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ecf:function ecf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ecg:function ecg(d){this.a=d},
f8S:function f8S(d){this.a=d},
f8U:function f8U(d,e){this.a=d
this.b=e},
f8T:function f8T(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f8R:function f8R(){},
aLf:function aLf(){},
fXX(d){var w,v,u
try{w=A.R.aG(0,d,null)
if(x.f.b(w)){v=B.vI(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b0m:function b0m(d,e,f){this.c=d
this.d=e
this.a=f},
bl_:function bl_(d,e){this.c=d
this.a=e},
i_i(d){return A.d.dL(D.GI,new C.fwo(d),new C.fwp())},
i_j(d){var w,v,u,t=A.a.i(d)
if(!A.a.a0(t,"class_"))return null
w=A.a.b1(t,6)
if(w.length===0)return null
v=new B.a2(D.GI,new C.fwq(w),x.b4)
if(!v.gaf(0).C())return null
u=v.gL(0)
return new C.jC("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
la:function la(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fwo:function fwo(d){this.a=d},
fwp:function fwp(){},
fwq:function fwq(d){this.a=d},
mQ(d,e,f,g,h){return new C.En(f,g,d)},
hMv(d){var w=d.z,v=B.U(w).k("a2<1>")
w=B.B(new B.a2(w,new C.faS(),v),v.k("J.E"))
d.z=w
d.x=""},
dw(d,e){var w=$.K6
e.db="__design__:"+(w.length===0?"layer":w)
A.d.ck(d.z,0,e)},
dx(d,e,f,g,h,i,j,k,l){return C.eo(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cl,D.f0,j,k,l)},
hiC(d,e){var w
C.hMv(d)
w=A.d.dL($.bDn(),new C.fue(e),new C.fuf())
$.K6=w.a
d.x=w.a;++d.y
try{w.bx(d)}finally{$.K6=""}d.z=B.bm(d.z,!0,x.F)},
En:function En(d,e,f){this.a=d
this.b=e
this.e=f},
faS:function faS(){},
fCt:function fCt(){},
fCu:function fCu(){},
fCv:function fCv(){},
fCG:function fCG(){},
fCL:function fCL(){},
fCM:function fCM(){},
fCN:function fCN(){},
fCO:function fCO(){},
fCP:function fCP(){},
fCQ:function fCQ(){},
fCR:function fCR(){},
fCw:function fCw(){},
fCx:function fCx(){},
fCy:function fCy(){},
fCz:function fCz(){},
fCA:function fCA(){},
fCB:function fCB(){},
fCC:function fCC(){},
fCD:function fCD(){},
fCE:function fCE(){},
fCF:function fCF(){},
fCH:function fCH(){},
fCI:function fCI(){},
fCJ:function fCJ(){},
fCK:function fCK(){},
fue:function fue(d){this.a=d},
fuf:function fuf(){},
iS(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.eo(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.be,4280172719,2,m,n,0,"",o,D.cQ,p,q,r)},
CF(d,e,f,g,h,i,j,k,l){return C.eo(A.bg,!1,4279310375,A.aD,"",d,24,A.bl,A.a5,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cl,D.f0,j,k,l)},
bC5(){var w=new B.S(Date.now(),0,!1)
return A.ic[B.bG(w)-1]+" "+B.bQ(w)+", "+B.bz(w)},
eu:function eu(d,e,f){this.a=d
this.b=e
this.c=f},
bzt(d){return new B.iN((A.o.aA(d,24)&255)/255,(A.o.aA(d,16)&255)/255,(A.o.aA(d,8)&255)/255,(d&255)/255)},
hRz(d){var w,v
if(d==null||!A.a.a0(d,"data:image"))return null
try{w=B.amj(A.cG.aJ(A.d.gal(d.split(","))))
return w}catch(v){return null}},
hRD(d){var w=d.r
if(!d.cy)return w
return new B.K(B.a(w.split("\n"),x.s),new C.fim(),x.dv).aI(0,"\n")},
hRC(d){switch(d.a){case 2:return A.np
case 1:case 5:return A.eU6
default:return A.ST}},
hRw(d){switch(d.a){case 2:return A.uN
case 1:case 5:return A.UJ
default:return A.a9b}},
hRA(d,e){var w,v=null,u=d.ay,t=A.o.aA(u,24),s=A.o.aA(d.ch,24),r=(t&255)===0?v:C.bzt(u),q=(s&255)===0?v:C.bzt(d.ch),p=A.k.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.nq(q,p,A.kD)
w=new B.pr(t,t,t,t)}switch(d.ax.a){case 1:return B.ls(v,v,v,new B.ky(r,w,v,A.aap,v),v,v,v,v)
case 4:return u?new B.fO(v,v,v):B.wQ(B.ls(v,v,q,v,p+0.4,v,v,v))
default:return B.ls(v,v,v,new B.ky(r,w,B.vk(4),A.hE,v),v,v,v,v)}},
hRy(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f0?0.4:12,g=A.k.D(d.e*e,h,e),f=A.k.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.hRw(d.as)
v=A.k.D(d.w*(e/960),3,96)
u=C.hRD(d)
t=C.bzt(d.Q)
s=d.x.a>=700?A.ej:A.vo
r=d.y===A.cF?A.xN:A.aiV
q=d.z
p=new B.CQ(w,l,l,B.fa(u,l,l,l,B.h2(l,t,1===q.a?A.aOn:A.aOm,l,l,l,l,l,l,A.ds,l,l,v,r,s,l,!0,l,l,l,l),C.hRC(d.as)))
break
case 1:case 4:o=C.hRz(d.at)
n=i===D.lq&&d.c===0&&d.d===0&&d.e===1&&d.f===1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.wQ(B.fa(w,l,l,l,B.h2(l,A.rr,l,l,l,l,l,l,l,A.ds,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.Hw(o,n?A.aal:A.V5,l,l)
break
case 3:w=new B.nq(A.HX,1,A.kD)
u=B.vk(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.ls(A.uN,B.fa(t,l,l,l,B.h2(l,D.e7o,l,l,l,l,l,l,l,A.ds,l,l,11,l,A.ej,l,!0,l,l,l,l),A.np),l,new B.ky(E.aGK,new B.pr(w,w,w,w),u,A.hE,l),l,l,l,l)
break
case 2:p=C.hRA(d,e)
break
case 5:p=C.hRx(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.haj(-w,p)
w=i===D.cQ
if(w){m=A.o.aA(d.Q,24)&255
if(m<255)p=new B.arR(m/255,p)}if(w)return new F.vW(k,l,j,l,new B.RK(new B.kx(g,g,f,1/0),p))
if(i===D.kW){i=new B.nq(A.HX,1,A.kD)
i=B.ls(A.uN,p,l,new B.ky(A.oX,new B.pr(i,i,i,i),B.vk(4),A.hE,l),l,l,D.buj,l)}else i=p
return new F.vW(k,l,j,l,new B.fO(g,f,i))},
hRB(d,e,f,g){var w,v=null,u=C.bzt(d.e),t=d.f
t=B.a([F.h8W(t!=null?B.ls(v,v,v,new B.ky(v,v,v,A.hE,new B.aVV(E.UK,A.a95,B.a([u,C.bzt(t)],x.cR),v)),v,v,v,v):B.ls(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.v(t,new B.K(w,new C.fil(f,g),B.U(w).k("K<1,fe>")))
return F.cqp(t)},
fZa(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$fZa=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a3M(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.L)(t),++q){p=t[q]
o=new B.W1(A.w4,A.HU,D.bvr,null,null,null,!1,null)
o=new B.Bw(o,new C.fD9(607,787,p,d))
o.Mi(n,null)
r.push(o)}u=n.k0(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZa,v)},
hRx(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.fXX(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.gaj_()
if(h==null)h=A.awm
j=B.tm(4279308564)
w=B.vk(18)
v=new B.nq(B.tm(4287531653),3,A.kD)
u=i.length===0?"My links":i
u=B.a([B.wQ(B.fa(u,m,m,m,B.h2(m,A.oX,m,m,m,m,m,m,m,A.ds,m,m,12,m,A.ej,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.wQ(B.fa(A.a.i(l.c),m,m,m,D.f0g,m)))
u.push(new B.fO(m,8,m))
for(t=B.dd(h,0,B.dJ(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bR(t,t.gM(0),s.k("bR<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.tm(4280690220)
o=new B.a8T(8,8)
n=A.a.i(r.b)
u.push(new B.nH(D.boE,new C.aw2(new C.ahM(q),B.ls(m,B.fa(n.length===0?A.a.i(r.c):n,m,m,m,D.f2z,A.np),m,new B.ky(p,m,new B.aic(o,o,o,o),A.hE,m),m,m,D.buK,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.wQ(B.fa(k,m,m,m,D.f1O,m))
u.push(new C.aw2(C.hrb(k),t))}return B.ls(m,B.yB(u,A.Lo,A.lo),m,new B.ky(j,new B.pr(v,v,v,v),w,A.hE,m),m,m,D.bpu,m)},
fim:function fim(){},
fil:function fil(d,e){this.a=d
this.b=e},
fD9:function fD9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
agu(d){var w,v
for(w=0;w<32;++w){v=D.Gy[w]
if(v.a===d)return v}return null},
hcX(d){var w,v,u=A.a.cJ(d,",")
if(!A.a.a0(d,"data:")||u<0)return null
try{w=A.cG.aJ(A.a.b1(d,u+1))
return w}catch(v){return null}},
cW(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hlF(d,e){return B.a5(d,!1).c8(B.e8(new C.fJv(e),!0,null,x.fB))},
hlE(d,e){return B.bU(A.K,null,new C.fJu(e),d,!0,!0,!0,null,!1,!1,x.fB)},
iX:function iX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Ee:function Ee(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
N6:function N6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
biJ:function biJ(d,e,f){var _=this
_.d=d
_.e=$
_.bq$=e
_.a8$=f
_.c=_.a=null},
dTg:function dTg(d){this.a=d},
dTf:function dTf(d,e,f){this.a=d
this.b=e
this.c=f},
dTe:function dTe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqn:function bqn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
eVG:function eVG(d,e){this.a=d
this.b=e},
bdN:function bdN(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
aZg:function aZg(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
c7I:function c7I(){},
c7J:function c7J(d){this.a=d},
c7K:function c7K(d,e,f){this.a=d
this.b=e
this.c=f},
c7L:function c7L(d,e,f){this.a=d
this.b=e
this.c=f},
fJv:function fJv(d){this.a=d},
YO:function YO(d,e){this.c=d
this.a=e},
az4:function az4(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
d71:function d71(d,e,f){this.a=d
this.b=e
this.c=f},
d76:function d76(d){this.a=d},
d77:function d77(d){this.a=d},
d75:function d75(d){this.a=d},
d78:function d78(d){this.a=d},
d74:function d74(d,e){this.a=d
this.b=e},
d79:function d79(d){this.a=d},
d73:function d73(d){this.a=d},
d7a:function d7a(d){this.a=d},
d72:function d72(d,e){this.a=d
this.b=e},
d7b:function d7b(d,e){this.a=d
this.b=e},
fJu:function fJu(d){this.a=d},
fJt:function fJt(d){this.a=d},
fJs:function fJs(d,e,f){this.a=d
this.b=e
this.c=f},
fJr:function fJr(d,e){this.a=d
this.b=e},
aKJ:function aKJ(){},
i6W(d){return B.bU(A.K,null,new C.fLR(),d,!0,!0,!0,null,!1,!1,x.N)},
fLR:function fLR(){},
Z8:function Z8(d){this.a=d},
bfg:function bfg(d){this.d=d
this.c=this.a=null},
ddO:function ddO(d){this.a=d},
ddP:function ddP(d,e){this.a=d
this.b=e},
ddQ:function ddQ(d){this.a=d},
hO0(d){var w,v=d.split("@")
if(v.length>1){w=B.c7(v[1],16)
if(w!=null)return B.b0(w)}return D.xe},
i1d(d){var w,v=A.d.gL(d.split("@"))
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
i1c(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gL(d.split("@")),p=C.hO0(d)
switch(q){case"shimmer":return B.nL(A.a9x,g,new C.fzQ(p,A.k.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.beE(e,f,p,r),A.au),!0,r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dU(B.eb(A.A,B.dc(C.fQ2(g,B.a4D(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.u(w*60,v*26))
case"goldframe":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bel(e,p,r),A.au),!0,r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.k.D(0.55+s*0.45,0,1)
return B.dc(B.eG(A.A,e*0.5,B.eb(A.A,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dm()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fA(e)
u.mI(Math.sin(e)*0.3)
return B.dU(B.fs(A.A,g,r,u,!0),new B.u(w*22,v*12))
case"rays":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.bnf(e,f,p,r),A.au),!0,r),g],x.p),r)
case"bokeh":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.b9f(e,f,p,r),A.au),!0,r),g],x.p),r)
case"aurora":return new B.an(A.W,r,A.b_,A.r,B.a([B.e1(B.b3(r,r,r,new C.b8T(e,f,p,r),A.au),!0,r),g],x.p),r)
case"velvet":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bu9(e,p,r),A.au),!0,r)],x.p),r)
case"sparkle":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bra(e,f,p,r),A.au),!0,r)],x.p),r)
case"sheen":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bqj(e,p,r),A.au),!0,r)],x.p),r)
case"filigree":return new B.an(A.W,r,A.b_,A.r,B.a([g,B.e1(B.b3(r,r,r,new C.bdG(e,p,r),A.au),!0,r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.A,r,A.aa,A.f,B.a([B.bZ(0,B.e1(B.eb(A.A,B.c_(r,new B.o(r,r,r,r,r,new B.bS(A.A,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bd),1.6+s*0.15,r,r),!0,r),0,0,0),B.eG(A.A,s*0.06,B.eb(A.A,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fzQ:function fzQ(d,e){this.a=d
this.b=e},
beE:function beE(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bel:function bel(d,e,f){this.b=d
this.c=e
this.a=f},
bnf:function bnf(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b9f:function b9f(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b8T:function b8T(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bu9:function bu9(d,e,f){this.b=d
this.c=e
this.a=f},
bra:function bra(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bqj:function bqj(d,e,f){this.b=d
this.c=e
this.a=f},
bdG:function bdG(d,e,f){this.b=d
this.d=e
this.a=f},
d6J:function d6J(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
xn:function xn(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fzT(d){var w=d.db
return A.a.a0(w,"marriage_sign_")&&!A.a.a0(w,"marriage_sign_placed_")&&d.b!==D.kW},
i1i(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(A.a.a0(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b0(j,new C.fzU())
s=A.d.gL(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.L)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a0(v,k)){q=A.d.gL(B.aPE(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
i1h(d,e){var w,v,u,t,s,r=d.db
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
ag7(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ag7=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("a2<1>")
e=B.B(new B.a2(a4,new C.fsf(),f),f.k("J.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bU(A.dH,null,new C.fsg(e),d,!0,!0,!1,A.lr,!1,!1,x.N),$async$ag7)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gL(e).hB())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.fZM(d),$async$ag7)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.KS(d,"Search states\u2026","",A.jZ,"Choose state"),$async$ag7)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.fYI(s)
if(p==null)p=A.d.gL(D.Qj)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fzV(p.d)
k=x.u
j=B.a([C.eo(A.bg,!1,4279310375,A.aD,"marriage_locked_bg",4280640491,24,A.bl,A.a5,"",1,C.cC(),l,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cl,D.lq,1,0,0)],k)
i=p.f
h=x.F
k=B.B(B.a([C.Cr(i,0.016,D.kX,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Cr(0,0.058,D.eJ,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Cr(0,0.058,D.eJ,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.Kh("HATI YA NDOA",A.L,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.Kh("Hati ya Makubaliano ya Ndoa",A.L,i,12,A.a5,0.018,"subtitle",0.78,0.11,0.134))
A.d.v(k,C.fVF(0.2,0.154,0.6,4291404327,i))
A.d.v(k,C.byX("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.v(k,C.a0I("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.v(k,C.a0I("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.v(k,C.a0I("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.v(k,C.a0I("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.v(k,C.byX("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Cr(m,0.082,D.be,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.eo(A.bg,!1,i,A.aD,"marriage_field_utangulizi:"+A.k.aa(0.78,3),4280640491,9.5,A.bl,A.cv,"",0.074,g,null,"","",0,!1,"",0,D.be,4280172719,2,y.O,0,0,"",D.cl,D.cQ,0.78,0.11,0.388))
A.d.v(k,C.fVF(0.22,0.47,0.56,4291404327,i))
A.d.v(k,C.byX("MASHAHIDI",0.49,0.26,0.48,i))
A.d.v(k,C.heW("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.v(k,C.heW("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.v(k,C.a0I("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.v(k,C.a0I("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.v(k,C.byW("witness_mume_1",0.11,0.596,0.37,i))
A.d.v(k,C.byW("witness_mke_1",0.52,0.596,0.37,i))
A.d.v(k,C.byX("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.Kh("Mume",A.L,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.Kh("Mke",A.L,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.v(k,C.byW("mchumba_mume",0.11,0.7,0.37,i))
A.d.v(k,C.byW("mchumba_mke",0.52,0.7,0.37,i))
A.d.v(k,C.byX("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.v(k,C.a0I("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.v(k,C.byW("witness_mume_2",0.38,0.784,0.26,i))
A.d.v(k,C.a0I("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.B(C.fVF(0.22,0.83,0.56,4291404327,i),h)
h.push(C.Kh("NGMY",A.L,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.Kh("Nakala ya Hati",A.L,4291404327,9,A.a5,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.v(k,h)
A.d.v(j,k)
a0.$1(C.Bq(null,null,null,null,D.o7,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.rn(m,null,0,0,j,n,D.q5,"","","Hati ya Ndoa",D.dd)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ag7,v)},
fzU:function fzU(){},
fsf:function fsf(){},
fsg:function fsg(d){this.a=d},
fsd:function fsd(d){this.a=d},
fse:function fse(d){this.a=d},
hR1(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
hR0(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.mG
case"lineThrough":return A.zp
default:return A.aD}},
eo(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eJ(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hh_(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.Q5[w]
if(v.b===u)return v}return D.dd},
hNp(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.cOB[w]
if(v.b===u)return v}return D.cQ},
hTO(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dck[w]
if(v.b===u)return v}return D.be},
rn(d,e,f,g,h,i,j,k,l,m,n){return new C.lD(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
h7G(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.hPp(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.k.N(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.k.N(s)
r=C.hh_(d.h(0,"transition"))
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
n=B.cD(n,new C.cd7(),n.$ti.k("J.E"),x.F)
n=B.B(n,B.a4(n).k("J.E"))}return C.rn(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
hPp(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.aoe[w]
if(v.b===u)return v}return D.mA},
Bq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.S(Date.now(),0,!1):a4
return new C.hZ(p,t,a1,h,i,w,a0==null?B.a([C.rn(4294967295,null,0,0,null,C.cC(),D.q5,"","","",D.dd)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Vs(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.hLx(a6.h(0,"aspectRatio"))
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
if(J.z(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
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
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b6(f,new C.ccV(),x.N)
f=B.B(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b6(e,new C.ccW(),x.N)
e=B.B(e,e.$ti.k("ak.E"))}d=a6.h(0,"finaleStyle")
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
g=B.cD(g,new C.ccX(),g.$ti.k("J.E"),x.bt)
g=B.B(g,B.a4(g).k("J.E"))}return C.Bq(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.rn(4294967295,a3,0,0,a3,C.cC(),D.q5,"","","",D.dd)],x.g):g,v,p,o,s)},
ku(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
hLx(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dda[w]
if(v.b===u)return v}return D.Cs},
cC(){var w=Date.now(),v=$.iZ
$.iZ=v+1
return""+1000*w+"_"+v},
cdo(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a9(d.z)
if(e!==D.Ct){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.eo(A.L,!1,f.d.l(),A.aD,"",n,40,A.bl,A.u,"",0.2,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cl,D.cQ,0.84,0.08,0.3)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.L,!1,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.12,u,p,"","",0,!1,"",0,D.be,m,2,"Click to add subtitle",0,0,"",D.cl,D.cQ,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,32,A.bl,A.u,"",0.14,v,p,"","",0,!1,"",0,D.be,m,2,o,0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!0,f.e.l(),A.aD,"",n,20,A.bl,A.cv,"",0.68,u,p,"","",0,!1,"",0,D.be,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cl,D.cQ,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Two Column Slide",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.eo(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a5,"",0.7,u,p,"","",0,!1,"",0,D.be,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cl,D.cQ,0.42,0.06,0.22)
s=C.cC()
A.d.v(w,B.a([v,u,C.eo(A.bg,!0,t.l(),A.aD,"",n,18,A.bl,A.a5,"",0.7,s,p,"","",0,!1,"",0,D.be,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cl,D.cQ,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.J(d.z,C.eo(A.L,!1,4294967295,A.aD,"",n,42,A.bl,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.be,m,2,"Section Header",0,0,"",D.cl,D.cQ,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,30,A.bl,A.u,"",0.12,v,p,"","",0,!1,"",0,D.be,m,2,"Compare",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.eo(A.bg,!1,l,A.aD,"",t.j(0.12).l(),24,A.bl,A.a5,"",0.68,u,p,"","",0,!1,"",0,D.be,t.l(),2,"",0,0,"",D.cl,D.f0,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.eo(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.P,"",0.6,s,p,"","",0,!1,"",0,D.be,m,2,"Option A",0,0,"",D.cl,D.cQ,0.38,0.08,0.26)
q=C.cC()
t=C.eo(A.bg,!1,l,A.aD,"",t.j(0.06).l(),24,A.bl,A.a5,"",0.68,q,p,"","",0,!1,"",0,D.be,t.j(0.5).l(),2,"",0,0,"",D.cl,D.f0,0.42,0.52,0.22)
q=C.cC()
A.d.v(w,B.a([v,u,s,t,C.eo(A.bg,!1,r.l(),A.aD,"",n,20,A.bl,A.P,"",0.6,q,p,"","",0,!1,"",0,D.be,m,2,"Option B",0,0,"",D.cl,D.cQ,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.eo(A.L,!1,f.d.l(),A.aD,"",n,36,A.bl,A.u,"",0.35,v,p,"","",0,!1,"",0,D.be,m,2,"TERM / QUESTION",0,0,"",D.cl,D.cQ,0.8,0.1,0.12)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.L,!1,f.e.l(),A.aD,"",n,22,A.bl,A.cv,"",0.35,u,p,"","",0,!1,"",0,D.be,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cl,D.cQ,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,28,A.bl,A.u,"",0.18,v,p,"","",0,!1,"",0,D.be,m,2,"Quiz Question",0,0,"",D.cl,D.cQ,0.88,0.06,0.06)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!1,f.e.l(),A.aD,"",n,20,A.bl,A.a5,"",0.62,u,p,"","",0,!1,"",0,D.be,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cl,D.cQ,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.eo(A.bg,!1,f.d.l(),A.aD,"",n,26,A.bl,A.u,"",0.1,v,p,"","",0,!1,"",0,D.be,m,2,"Worksheet / Assignment",0,0,"",D.cl,D.cQ,0.88,0.06,0.04)
u=C.cC()
A.d.v(w,B.a([v,C.eo(A.bg,!1,f.e.l(),A.aD,"",n,18,A.bl,A.a5,"",0.78,u,p,"","",0,!1,"",0,D.be,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cl,D.cQ,0.88,0.06,0.16)],x.u))
break}},
hDa(d){return A.d.dL(D.a1R,new C.cdp(d),new C.cdq())},
hD7(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.R.aG(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aV(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gT(t)
if(!q.b(u))continue
try{J.ch(v,C.Vs(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
fS9(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cdk(t)
for(w=J.aV(d);w.C();)s.$1(w.gT(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.L)(e),++v)s.$1(e[v])
w=t.$ti.k("bc<2>")
u=B.B(new B.bc(t,w),w.k("J.E"))
A.d.b0(u,new C.cdj())
return u},
h7J(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.cdf()
if(u!==w)return u>=w?d:e
return v.$1(d).cc(v.$1(e))?d:e},
aqx(d){return C.hD5(d)},
hD5(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$aqx=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.cdi()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a1V(m),$async$aqx)
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
return B.b(B.aA(),$async$aqx)
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
case 11:o=l.$1($.h7I.h(0,m))
n=C.fS9(C.fS9(j,r),o)
if(n.length===0){u=C.h7J(C.h7J(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aqx,v)},
cde(d){return C.hD4(d)},
hD4(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$cde=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$cde)
case 7:r=f
q=r.t4("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.T
q=B.kB(q,B.U(q).c)
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
return B.i($async$cde,v)},
b0s(d,e){return C.hD6(d,e)},
hD6(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b0s=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b0s)
case 6:s=g
q=s.t4("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.J(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.L_(r,J.ad(r)-500):r
w=7
return B.b(s.au("StringList","ngmy_slides_deleted_"+p,o),$async$b0s)
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
return B.i($async$b0s,v)},
Vt(d,e){return C.hD8(d,e)},
hD8(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Vt=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.h7H.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.aqx(a3),$async$Vt)
case 5:p=a6
case 4:w=6
return B.b(C.cde(a3),$async$Vt)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aV(p);m.C();){l=m.gT(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.L)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbo())k=f===g.gbo()&&k.b>g.gcz()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("bc<2>")
l=m.k("a2<J.E>")
e=B.B(new B.a2(new B.bc(n,m),new C.cdl(o),l),l.k("J.E"))
A.d.b0(e,new C.cdm())
$.h7H.n(0,a0,e)
n=B.U(e).k("K<1,a3<n,@>>")
n=B.B(new B.K(e,new C.cdn(),n),n.k("ak.E"))
r=A.R.ao(n,null)
$.h7I.n(0,a0,r)
t=8
w=11
return B.b(B.agV(a0,r),$async$Vt)
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
return B.b(B.aA(),$async$Vt)
case 16:q=a6
w=17
return B.b(q.au("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Vt)
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
return B.i($async$Vt,v)},
Ip:function Ip(d,e){this.a=d
this.b=e},
aqv:function aqv(d,e){this.a=d
this.b=e},
uy:function uy(d,e){this.a=d
this.b=e},
ms:function ms(d,e){this.a=d
this.b=e},
hx:function hx(d,e){this.a=d
this.b=e},
eJ:function eJ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
lD:function lD(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cd8:function cd8(){},
cd9:function cd9(){},
cd7:function cd7(){},
hZ:function hZ(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
ccY:function ccY(){},
ccZ:function ccZ(){},
ccV:function ccV(){},
ccW:function ccW(){},
ccX:function ccX(){},
jC:function jC(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cdp:function cdp(d){this.a=d},
cdq:function cdq(){},
cdk:function cdk(d){this.a=d},
cdj:function cdj(){},
cdf:function cdf(){},
cdg:function cdg(){},
cdh:function cdh(){},
cdi:function cdi(){},
cdl:function cdl(d){this.a=d},
cdm:function cdm(){},
cdn:function cdn(){},
i1t(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fAs(e,v,d,B.aX(w))
w.$1(new C.fAo())
w.$1(new C.fAp())
w.$1(new C.fAq())
w.$1(new C.fAr())
return v},
fAs:function fAs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fAo:function fAo(){},
fAp:function fAp(){},
fAq:function fAq(){},
fAr:function fAr(){},
b0p:function b0p(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cd3:function cd3(d){this.a=d},
cd2:function cd2(){},
cd4:function cd4(){},
cd5:function cd5(d,e){this.a=d
this.b=e},
cd6:function cd6(d){this.a=d},
anI:function anI(d,e){this.c=d
this.a=e},
bit:function bit(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
dFs:function dFs(){},
aKu:function aKu(){},
cdb(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$cdb=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.eRj)
u=!1
w=1
break}u=B.kS(!1,d,t,!1,null,A.a4q,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cdb,v)},
hD2(d){var w=A.d.bd(D.GI,new C.cdc(d))
if(w<0)return!0
return w>=4},
hD3(d){var w=A.d.bd($.bDn(),new C.cdd(d))
if(w<0)return!0
return w>=5},
cdc:function cdc(d){this.a=d},
cdd:function cdd(d){this.a=d},
i38(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.yq()
$.q6().pR(t,new C.fDg(s),!0)
u=B.a([B.DA(v,A.q9,t)],x.p)
if(e.length!==0){w=B.m(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.f0K,v,v,v),A.f,v,v,new B.o(A.aX,v,v,w,v,v,A.n),v,v,v,v,A.na,v,v,v),v,v,4,v,4,v))}return new B.an(A.W,v,A.b_,A.r,u,v)},
fDg:function fDg(d){this.a=d},
i2K(){return C.fZ3()},
i_H(){return C.bBj()},
i1K(){return C.fYV()},
aOI(d,e,f){var w=0,v=B.j(x.H),u
var $async$aOI=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fCm(d,f),$async$aOI)
case 5:w=1
break
case 4:if(d.e!=null)d.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aOI,v)},
fCm(d,e){var w=0,v=B.j(x.H),u
var $async$fCm=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bzu
if(u==null)u=e+".pdf"
w=2
return B.b(B.bU(A.K,null,new C.fCn(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fCm)
case 2:return B.h(null,v)}})
return B.i($async$fCm,v)},
fCn:function fCn(d,e){this.a=d
this.b=e},
acW:function acW(d,e,f){this.c=d
this.d=e
this.a=f},
eot:function eot(d,e){this.a=d
this.b=e},
eou:function eou(d,e){this.a=d
this.b=e},
eov:function eov(d,e){this.a=d
this.b=e},
eow:function eow(d){this.a=d},
add:function add(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b0o(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b0n(g,m,f,d,e,h,l,k,j,o,i,null)},
hjW(d){return B.cp(new C.fAn(d))},
fZ5(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
i2S(d){if(d===D.cl)return"None"
return C.fZ5(d)},
bA_(d,e,f,g){return C.hTV(d,e,f,g)},
hTV(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bA_=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a5(d,!0)
if($.fVY&&t.pv())t.eJ()
$.fVY=!0
s.a=null
w=3
return B.b(B.hR(A.bi,!0,"Animation preview",d,new C.fkU(s,e,g,f),null,A.eE,!0,x.H),$async$bA_)
case 3:s=s.a
if(s!=null)s.a7(0)
$.fVY=!1
case 1:return B.h(u,v)}})
return B.i($async$bA_,v)},
fMF(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$fMF=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bU,x.w).w.a.a*0.88,280,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.fZ5(f)+" Slide transition preview"
s=s?Af.F0:A.v8
w=3
return B.b(C.bA_(d,s,new B.a7(t,t*0.56,B.bw(B.m(14),new C.aI5(f,null),A.aq),null),r),$async$fMF)
case 3:case 1:return B.h(u,v)}})
return B.i($async$fMF,v)},
hje(d,e,f){var w,v,u=null,t=A.ct.aw(0,A.k.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.dc(f,t)
case 2:case 17:return B.dU(B.dc(f,t),new B.u((1-t)*48,0))
case 3:return B.dU(B.dc(f,t),new B.u(-(1-t)*48,0))
case 4:case 21:return B.dU(B.dc(f,t),new B.u(0,(1-t)*36))
case 5:return B.dU(B.dc(f,t),new B.u(0,-(1-t)*36))
case 6:case 16:return B.eb(A.A,B.dc(f,t),0.5+t*0.5,u,u)
case 7:return B.eb(A.A,B.dc(f,t),1.4-t*0.4,u,u)
case 8:w=B.dm()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fA((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 9:w=B.dm()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.jX((1-t)*1.2)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 10:case 19:w=B.dm()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.mI((1-t)*0.8)
v=0.6+t*0.4
w.jH(v,v,v,1)
return B.fs(A.A,B.dc(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dU(B.dc(f,t),new B.u((1-t)*24,0))}},
bCT(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bCT=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.k.D(B.aI(d,A.bU,x.w).w.a.a*0.88,300,440)
s=f===D.cl
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.fZ5(f)+" Element animation preview"
s=s?Af.F0:A.v8
w=3
return B.b(C.bA_(d,s,new B.a7(t,t*0.62,B.bw(B.m(14),new C.ayP(f,null),A.aq),null),r),$async$bCT)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bCT,v)},
i2R(d){var w,v,u,t,s=$.afB.W(0,d)
if(s!=null){$.afB.n(0,d,s)
return s}w=A.cG.aJ(A.a.b1(d,A.a.cJ(d,",")+1))
$.afB.n(0,d,w)
v=$.fWL=$.fWL+w.length
u=B.a4($.afB).k("cu<1>")
for(;;){if(!(v>41943040&&$.afB.a>1))break
t=new B.cu($.afB,u).gaf(0)
if(!t.C())B.ba(B.fA())
v-=$.afB.W(0,t.gT(0)).length
$.fWL=v}return w},
i2y(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.af("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kS(0,d),j=B.B(k,B.a4(k).k("J.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.L)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.ap(d,r,o)
m=f.$1(e)
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.Si(s,A.u))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.Si(t,A.u))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.Si(u,A.cv))
v.push(new B.ep(n,l,l,A.cO,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b1(d,r)
v.push(B.dn(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a1U(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.k_(e))
return m
case"rounded":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.gee()*0.18
m.E(new B.iU(B.bA(e,new B.aT(w,w))))
return m
case"triangle":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbQ().a,e.b))
w=e.d
m.E(new B.ap(e.c,w))
m.E(new B.ap(e.a,w))
m.E(new B.bF())
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
case"diamond":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.b5(e.gbQ().a,e.b))
m.E(new B.ap(e.c,e.gbQ().b))
m.E(new B.ap(e.gbQ().a,e.d))
m.E(new B.ap(e.a,e.gbQ().b))
m.E(new B.bF())
return m
case"arch":m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.b5(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.ap(w,p))
m.b8Z(new B.u(t,p),new B.aT(s,s))
m.E(new B.ap(t,u))
m.E(new B.bF())
return m
default:m=new B.aO($.W().r,A.ap,n,n,B.a([],m))
m.E(new B.o_(e))
return m}},
fxX(d,e,f){return B.cp(new C.fxY(D.eK_.t(0,d),d,f,e))},
b0n:function b0n(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
cd1:function cd1(d){this.a=d},
cd0:function cd0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cd_:function cd_(){},
b0k:function b0k(d,e){this.b=d
this.a=e},
fAn:function fAn(d){this.a=d},
fAm:function fAm(d,e){this.a=d
this.b=e},
fkU:function fkU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkS:function fkS(d){this.a=d},
fkT:function fkT(d,e){this.a=d
this.b=e},
aI5:function aI5(d,e){this.c=d
this.a=e},
btG:function btG(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
f3b:function f3b(d,e,f){this.a=d
this.b=e
this.c=f},
aII:function aII(d,e){this.b=d
this.a=e},
Uu:function Uu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
biG:function biG(d,e){var _=this
_.d=$
_.bq$=d
_.a8$=e
_.c=_.a=null},
dRt:function dRt(d){this.a=d},
dRs:function dRs(d){this.a=d},
dRr:function dRr(d){this.a=d},
Io:function Io(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ccU:function ccU(d){this.a=d},
ccT:function ccT(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ayP:function ayP(d,e){this.c=d
this.a=e},
bd9:function bd9(){this.d=0
this.c=this.a=null},
d3Y:function d3Y(d){this.a=d},
d3X:function d3X(d){this.a=d},
a7h:function a7h(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjk:function bjk(d,e){var _=this
_.d=null
_.bq$=d
_.a8$=e
_.c=_.a=null},
ebZ:function ebZ(d,e,f){this.a=d
this.b=e
this.c=f},
aZj:function aZj(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bej:function bej(d,e,f){this.b=d
this.c=e
this.a=f},
bpg:function bpg(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
eTj:function eTj(){},
fxY:function fxY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bqg:function bqg(d,e,f){this.b=d
this.c=e
this.a=f},
aKI:function aKI(){},
aLd:function aLd(){},
aMA:function aMA(){},
fBn(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fBn=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wZ.c5().LI(D.daq,A.tF,!0),$async$fBn)
case 3:r=e
if(r==null||J.cl(r.a)){u=null
w=1
break}t=J.fo(r.a)
s=t.c
if(s==null)throw B.V("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.V("That file is too big. Use a file under 8 MB.")
u=C.i2s(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fBn,v)},
i2s(d,e){var w,v=d.toLowerCase()
if(A.a.cb(v,".pdf"))return new C.a7A(d,new B.a_w(A.cT.gcw().aJ(e),"application/pdf"),"")
if(A.a.cb(v,".docx")){w=C.hVw(e)
if(A.a.i(w).length===0)throw B.V("No readable words were found in that Word file.")
return new C.a7A(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)}w=A.c6.Kv(0,e,!0)
if(A.a.i(w).length===0)throw B.V("That file is empty.")
return new C.a7A(d,null,w.length>6e4?A.a.ap(w,0,6e4):w)},
hVw(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cw4().cI0(B.r7(d,A.hT,o,o),o,o,!1).cJJ(0,"word/document.xml")
if(n==null)return""
w=n.cRL()
v=A.c6.Kv(0,w==null?$.hma():w,!0).split("</w:p>")
u=new B.fd("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.af("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kS(0,r)
p=A.a.i(B.cD(q,new C.fnJ(),B.a4(q).k("J.E"),t).fX(0))
if(p.length!==0){q=B.aK(p,"&lt;","<")
q=B.aK(q,"&gt;",">")
q=B.aK(q,"&quot;",'"')
q=B.aK(q,"&apos;","'")
q=B.aK(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a7A:function a7A(d,e,f){this.a=d
this.b=e
this.c=f},
fnJ:function fnJ(){},
hD9(d,e,f,g,h,i,j,k,l){return new C.Ny(l,e,d,g,f,i,h,j,k,null)},
Ny:function Ny(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDF:function aDF(d,e,f,g,h,i,j,k,l){var _=this
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
_.a8$=l
_.c=_.a=null},
euH:function euH(d){this.a=d},
euF:function euF(){},
euG:function euG(d){this.a=d},
er4:function er4(){},
er5:function er5(){},
er6:function er6(d,e){this.a=d
this.b=e},
esF:function esF(d){this.a=d},
est:function est(){},
esu:function esu(){},
eqs:function eqs(){},
etN:function etN(d){this.a=d},
euD:function euD(d,e){this.a=d
this.b=e},
esD:function esD(d,e){this.a=d
this.b=e},
euq:function euq(d){this.a=d},
eur:function eur(){},
eus:function eus(){},
eut:function eut(d){this.a=d},
euu:function euu(){},
epR:function epR(d){this.a=d},
euE:function euE(){},
erM:function erM(d,e){this.a=d
this.b=e},
epP:function epP(d){this.a=d},
epQ:function epQ(d){this.a=d},
es8:function es8(d){this.a=d},
es9:function es9(d,e,f){this.a=d
this.b=e
this.c=f},
esa:function esa(d){this.a=d},
erL:function erL(){},
erK:function erK(d){this.a=d},
erI:function erI(){},
erH:function erH(d){this.a=d},
erJ:function erJ(){},
er0:function er0(d){this.a=d},
er1:function er1(d){this.a=d},
erS:function erS(d){this.a=d},
erN:function erN(d){this.a=d},
erO:function erO(d){this.a=d},
erP:function erP(d){this.a=d},
erQ:function erQ(d){this.a=d},
erR:function erR(d){this.a=d},
erT:function erT(d,e){this.a=d
this.b=e},
epT:function epT(){},
epU:function epU(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
es3:function es3(){},
es4:function es4(d,e){this.a=d
this.b=e},
es1:function es1(d,e,f){this.a=d
this.b=e
this.c=f},
es2:function es2(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
erW:function erW(d,e,f){this.a=d
this.b=e
this.c=f},
erX:function erX(d,e,f){this.a=d
this.b=e
this.c=f},
erY:function erY(d){this.a=d},
erZ:function erZ(d,e){this.a=d
this.b=e},
es_:function es_(d,e){this.a=d
this.b=e},
es0:function es0(d,e){this.a=d
this.b=e},
erV:function erV(d,e){this.a=d
this.b=e},
es6:function es6(d){this.a=d},
es7:function es7(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
es5:function es5(d){this.a=d},
eso:function eso(){},
esp:function esp(){},
esq:function esq(){},
esr:function esr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esl:function esl(d){this.a=d},
esn:function esn(){},
esm:function esm(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
esj:function esj(d,e,f){this.a=d
this.b=e
this.c=f},
esk:function esk(d,e){this.a=d
this.b=e},
ess:function ess(){},
erU:function erU(d,e){this.a=d
this.b=e},
eq9:function eq9(){},
eqa:function eqa(d,e,f){this.a=d
this.b=e
this.c=f},
eqb:function eqb(d){this.a=d},
eqc:function eqc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eq8:function eq8(d){this.a=d},
esy:function esy(d){this.a=d},
esx:function esx(d,e){this.a=d
this.b=e},
esw:function esw(d,e){this.a=d
this.b=e},
esv:function esv(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esz:function esz(d,e){this.a=d
this.b=e},
eoO:function eoO(d,e){this.a=d
this.b=e},
eq7:function eq7(d,e){this.a=d
this.b=e},
eq5:function eq5(d){this.a=d},
esH:function esH(d,e,f){this.a=d
this.b=e
this.c=f},
eq1:function eq1(d,e){this.a=d
this.b=e},
eq0:function eq0(d){this.a=d},
esG:function esG(d,e,f){this.a=d
this.b=e
this.c=f},
epS:function epS(d){this.a=d},
eqt:function eqt(){},
euo:function euo(d,e){this.a=d
this.b=e},
eup:function eup(d,e,f){this.a=d
this.b=e
this.c=f},
etO:function etO(d,e,f){this.a=d
this.b=e
this.c=f},
eoP:function eoP(d){this.a=d},
eoM:function eoM(d,e){this.a=d
this.b=e},
eoC:function eoC(d,e){this.a=d
this.b=e},
eoz:function eoz(d){this.a=d},
eoy:function eoy(d,e){this.a=d
this.b=e},
eoA:function eoA(d,e){this.a=d
this.b=e},
eq3:function eq3(d){this.a=d},
eq4:function eq4(d,e){this.a=d
this.b=e},
eq2:function eq2(d){this.a=d},
epg:function epg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eph:function eph(d,e){this.a=d
this.b=e},
epl:function epl(d,e){this.a=d
this.b=e},
epm:function epm(d){this.a=d},
epj:function epj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
epk:function epk(d){this.a=d},
epi:function epi(){},
epf:function epf(d,e,f){this.a=d
this.b=e
this.c=f},
esi:function esi(d,e){this.a=d
this.b=e},
eux:function eux(d){this.a=d},
euy:function euy(d,e){this.a=d
this.b=e},
euz:function euz(d){this.a=d},
euA:function euA(d,e,f){this.a=d
this.b=e
this.c=f},
euw:function euw(d){this.a=d},
eu3:function eu3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eu2:function eu2(d,e,f){this.a=d
this.b=e
this.c=f},
eu1:function eu1(){},
eu0:function eu0(d,e,f){this.a=d
this.b=e
this.c=f},
eu_:function eu_(d,e){this.a=d
this.b=e},
etX:function etX(d,e,f){this.a=d
this.b=e
this.c=f},
etV:function etV(d){this.a=d},
etW:function etW(d){this.a=d},
etZ:function etZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etY:function etY(d){this.a=d},
eqX:function eqX(d,e){this.a=d
this.b=e},
eqW:function eqW(d,e){this.a=d
this.b=e},
etP:function etP(){},
eun:function eun(d,e){this.a=d
this.b=e},
eul:function eul(d){this.a=d},
eum:function eum(d){this.a=d},
eoH:function eoH(d,e){this.a=d
this.b=e},
eoF:function eoF(d){this.a=d},
eoG:function eoG(d){this.a=d},
eoI:function eoI(d,e){this.a=d
this.b=e},
eoJ:function eoJ(d,e,f){this.a=d
this.b=e
this.c=f},
eoN:function eoN(d,e){this.a=d
this.b=e},
eoE:function eoE(d,e,f){this.a=d
this.b=e
this.c=f},
eoD:function eoD(d){this.a=d},
esE:function esE(d,e,f){this.a=d
this.b=e
this.c=f},
euv:function euv(d,e,f){this.a=d
this.b=e
this.c=f},
er_:function er_(d,e,f){this.a=d
this.b=e
this.c=f},
eqZ:function eqZ(){},
epp:function epp(d,e,f){this.a=d
this.b=e
this.c=f},
epq:function epq(d){this.a=d},
eoB:function eoB(d,e){this.a=d
this.b=e},
eqr:function eqr(d,e){this.a=d
this.b=e},
eoK:function eoK(d,e){this.a=d
this.b=e},
eoT:function eoT(d){this.a=d},
eoU:function eoU(d,e){this.a=d
this.b=e},
eoV:function eoV(d,e){this.a=d
this.b=e},
eoS:function eoS(d){this.a=d},
ep5:function ep5(d,e){this.a=d
this.b=e},
eoR:function eoR(d){this.a=d},
ep8:function ep8(d){this.a=d},
ep9:function ep9(d){this.a=d},
epa:function epa(d){this.a=d},
epb:function epb(d){this.a=d},
epc:function epc(d){this.a=d},
epd:function epd(){},
epe:function epe(){},
eoW:function eoW(d){this.a=d},
eoX:function eoX(d){this.a=d},
eoY:function eoY(d){this.a=d},
eoZ:function eoZ(d){this.a=d},
ep_:function ep_(d){this.a=d},
ep0:function ep0(d){this.a=d},
ep1:function ep1(d){this.a=d},
ep2:function ep2(d){this.a=d},
ep3:function ep3(d){this.a=d},
ep4:function ep4(d){this.a=d},
ep6:function ep6(d){this.a=d},
ep7:function ep7(d,e){this.a=d
this.b=e},
eqq:function eqq(d,e,f){this.a=d
this.b=e
this.c=f},
eqp:function eqp(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eqo:function eqo(d,e,f){this.a=d
this.b=e
this.c=f},
eqn:function eqn(d,e){this.a=d
this.b=e},
eoL:function eoL(d,e){this.a=d
this.b=e},
ept:function ept(d){this.a=d},
eps:function eps(d){this.a=d},
epr:function epr(d,e){this.a=d
this.b=e},
epu:function epu(d){this.a=d},
epv:function epv(d){this.a=d},
epw:function epw(d,e){this.a=d
this.b=e},
eq6:function eq6(d){this.a=d},
esh:function esh(d,e){this.a=d
this.b=e},
esg:function esg(d,e){this.a=d
this.b=e},
esf:function esf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
esd:function esd(d){this.a=d},
ese:function ese(d,e){this.a=d
this.b=e},
esb:function esb(){},
esc:function esc(){},
etQ:function etQ(){},
etR:function etR(d,e){this.a=d
this.b=e},
etS:function etS(){},
etT:function etT(d){this.a=d},
etU:function etU(d,e){this.a=d
this.b=e},
eoQ:function eoQ(d,e){this.a=d
this.b=e},
epV:function epV(){},
epW:function epW(){},
epX:function epX(){},
eq_:function eq_(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
epZ:function epZ(d,e){this.a=d
this.b=e},
epY:function epY(d,e,f){this.a=d
this.b=e
this.c=f},
erq:function erq(d){this.a=d},
erp:function erp(){},
err:function err(d,e){this.a=d
this.b=e},
ers:function ers(d,e){this.a=d
this.b=e},
ero:function ero(d){this.a=d},
ert:function ert(d,e){this.a=d
this.b=e},
ern:function ern(d){this.a=d},
eru:function eru(d,e){this.a=d
this.b=e},
erm:function erm(d){this.a=d},
erv:function erv(d,e){this.a=d
this.b=e},
erl:function erl(d){this.a=d},
erw:function erw(d,e){this.a=d
this.b=e},
erk:function erk(d,e){this.a=d
this.b=e},
erx:function erx(d,e){this.a=d
this.b=e},
erj:function erj(d){this.a=d},
ery:function ery(d,e){this.a=d
this.b=e},
eri:function eri(d){this.a=d},
erb:function erb(d,e){this.a=d
this.b=e},
erc:function erc(d){this.a=d},
erd:function erd(d){this.a=d},
era:function era(d){this.a=d},
ere:function ere(d,e){this.a=d
this.b=e},
er9:function er9(d){this.a=d},
erf:function erf(d,e){this.a=d
this.b=e},
er8:function er8(d){this.a=d},
erg:function erg(d,e){this.a=d
this.b=e},
er7:function er7(d){this.a=d},
erh:function erh(d){this.a=d},
eqj:function eqj(d){this.a=d},
eqk:function eqk(d){this.a=d},
eqm:function eqm(d){this.a=d},
eqe:function eqe(d){this.a=d},
eqd:function eqd(d,e){this.a=d
this.b=e},
eqf:function eqf(d,e){this.a=d
this.b=e},
eqg:function eqg(d){this.a=d},
eqh:function eqh(d){this.a=d},
eqi:function eqi(d,e){this.a=d
this.b=e},
eql:function eql(d){this.a=d},
euB:function euB(d){this.a=d},
euC:function euC(d){this.a=d},
erB:function erB(d,e){this.a=d
this.b=e},
erA:function erA(d,e){this.a=d
this.b=e},
erz:function erz(d,e){this.a=d
this.b=e},
erC:function erC(d){this.a=d},
erD:function erD(d){this.a=d},
et_:function et_(d,e){this.a=d
this.b=e},
et0:function et0(d){this.a=d},
et1:function et1(d){this.a=d},
etc:function etc(d){this.a=d},
etn:function etn(d){this.a=d},
ety:function ety(d){this.a=d},
etF:function etF(d){this.a=d},
etG:function etG(d){this.a=d},
etH:function etH(d){this.a=d},
etI:function etI(d){this.a=d},
etJ:function etJ(d,e){this.a=d
this.b=e},
et2:function et2(d){this.a=d},
et3:function et3(d){this.a=d},
et4:function et4(d){this.a=d},
et5:function et5(d){this.a=d},
et6:function et6(d){this.a=d},
et7:function et7(d){this.a=d},
et8:function et8(d){this.a=d},
et9:function et9(d){this.a=d},
eta:function eta(d){this.a=d},
etb:function etb(d){this.a=d},
etd:function etd(d){this.a=d},
ete:function ete(d){this.a=d},
etf:function etf(d){this.a=d},
etg:function etg(d){this.a=d},
eth:function eth(d){this.a=d},
eti:function eti(d){this.a=d},
etj:function etj(d){this.a=d},
etk:function etk(d){this.a=d},
etl:function etl(d){this.a=d},
esQ:function esQ(d){this.a=d},
etm:function etm(d){this.a=d},
esY:function esY(d){this.a=d},
eto:function eto(d){this.a=d},
esX:function esX(d,e){this.a=d
this.b=e},
etp:function etp(d,e){this.a=d
this.b=e},
etq:function etq(d,e){this.a=d
this.b=e},
esW:function esW(d,e,f){this.a=d
this.b=e
this.c=f},
esM:function esM(d,e){this.a=d
this.b=e},
esZ:function esZ(d){this.a=d},
etK:function etK(d,e){this.a=d
this.b=e},
etM:function etM(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
etL:function etL(d,e){this.a=d
this.b=e},
etr:function etr(d,e,f){this.a=d
this.b=e
this.c=f},
esV:function esV(d,e,f){this.a=d
this.b=e
this.c=f},
esL:function esL(d,e,f){this.a=d
this.b=e
this.c=f},
esJ:function esJ(d,e){this.a=d
this.b=e},
ets:function ets(d,e){this.a=d
this.b=e},
esU:function esU(d,e){this.a=d
this.b=e},
esK:function esK(d,e){this.a=d
this.b=e},
esI:function esI(d,e){this.a=d
this.b=e},
ett:function ett(d){this.a=d},
esT:function esT(d){this.a=d},
etu:function etu(d){this.a=d},
etv:function etv(d){this.a=d},
etw:function etw(d){this.a=d},
etx:function etx(d){this.a=d},
esS:function esS(d){this.a=d},
etz:function etz(d){this.a=d},
etA:function etA(d){this.a=d},
etB:function etB(d,e){this.a=d
this.b=e},
esR:function esR(d){this.a=d},
etC:function etC(d,e){this.a=d
this.b=e},
esP:function esP(d){this.a=d},
etD:function etD(d,e){this.a=d
this.b=e},
esO:function esO(d){this.a=d},
etE:function etE(d,e){this.a=d
this.b=e},
esN:function esN(d){this.a=d},
epo:function epo(d,e,f){this.a=d
this.b=e
this.c=f},
epn:function epn(d,e){this.a=d
this.b=e},
eu6:function eu6(d,e){this.a=d
this.b=e},
eu5:function eu5(d,e){this.a=d
this.b=e},
eu7:function eu7(d,e){this.a=d
this.b=e},
eu4:function eu4(d,e){this.a=d
this.b=e},
eqw:function eqw(d,e){this.a=d
this.b=e},
eqv:function eqv(d){this.a=d},
eqx:function eqx(d,e){this.a=d
this.b=e},
equ:function equ(d){this.a=d},
er3:function er3(){},
er2:function er2(){},
euj:function euj(d){this.a=d},
eui:function eui(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
euh:function euh(d,e){this.a=d
this.b=e},
euc:function euc(d,e){this.a=d
this.b=e},
eug:function eug(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eud:function eud(d,e){this.a=d
this.b=e},
eu8:function eu8(d){this.a=d},
eu9:function eu9(d){this.a=d},
eua:function eua(d){this.a=d},
eub:function eub(d){this.a=d},
eue:function eue(d,e){this.a=d
this.b=e},
euf:function euf(d,e){this.a=d
this.b=e},
euk:function euk(d){this.a=d},
epO:function epO(d){this.a=d},
epN:function epN(d,e,f){this.a=d
this.b=e
this.c=f},
epM:function epM(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epB:function epB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
epC:function epC(d,e){this.a=d
this.b=e},
epD:function epD(d,e){this.a=d
this.b=e},
epE:function epE(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epA:function epA(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epF:function epF(d,e){this.a=d
this.b=e},
epH:function epH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epG:function epG(d,e){this.a=d
this.b=e},
epI:function epI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epz:function epz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
epJ:function epJ(d,e){this.a=d
this.b=e},
epy:function epy(d,e){this.a=d
this.b=e},
epK:function epK(d,e){this.a=d
this.b=e},
epx:function epx(d){this.a=d},
epL:function epL(d,e){this.a=d
this.b=e},
erF:function erF(d){this.a=d},
erE:function erE(d){this.a=d},
erG:function erG(d,e){this.a=d
this.b=e},
eqK:function eqK(d,e){this.a=d
this.b=e},
eqL:function eqL(d,e){this.a=d
this.b=e},
eqJ:function eqJ(d,e){this.a=d
this.b=e},
eqM:function eqM(d,e){this.a=d
this.b=e},
eqI:function eqI(d,e){this.a=d
this.b=e},
eqN:function eqN(d,e){this.a=d
this.b=e},
eqH:function eqH(d,e){this.a=d
this.b=e},
eqO:function eqO(d,e){this.a=d
this.b=e},
eqG:function eqG(d,e){this.a=d
this.b=e},
eqP:function eqP(d,e){this.a=d
this.b=e},
eqF:function eqF(d,e){this.a=d
this.b=e},
eqQ:function eqQ(d,e,f){this.a=d
this.b=e
this.c=f},
eqE:function eqE(d,e){this.a=d
this.b=e},
eqR:function eqR(d,e,f){this.a=d
this.b=e
this.c=f},
eqD:function eqD(d,e){this.a=d
this.b=e},
eqS:function eqS(d,e){this.a=d
this.b=e},
eqC:function eqC(d,e,f){this.a=d
this.b=e
this.c=f},
eqz:function eqz(d,e){this.a=d
this.b=e},
eqT:function eqT(d,e){this.a=d
this.b=e},
eqB:function eqB(d,e){this.a=d
this.b=e},
eqU:function eqU(d,e){this.a=d
this.b=e},
eqA:function eqA(d,e,f){this.a=d
this.b=e
this.c=f},
eqy:function eqy(d,e){this.a=d
this.b=e},
eqV:function eqV(d,e){this.a=d
this.b=e},
eqY:function eqY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eox:function eox(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
esC:function esC(d,e){this.a=d
this.b=e},
esA:function esA(d){this.a=d},
esB:function esB(d,e){this.a=d
this.b=e},
aeK:function aeK(d,e,f){this.a=d
this.b=e
this.c=f},
ayb:function ayb(d,e){this.c=d
this.a=e},
bbW:function bbW(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b_$=e
_.c=_.a=null},
d_E:function d_E(d){this.a=d},
d_D:function d_D(d){this.a=d},
bc9:function bc9(d,e){this.c=d
this.a=e},
d0_:function d0_(d){this.a=d},
d00:function d00(d){this.a=d},
Jr:function Jr(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bbV:function bbV(){this.d=!1
this.c=this.a=null},
d_B:function d_B(d){this.a=d},
d_x:function d_x(d){this.a=d},
d_C:function d_C(d){this.a=d},
d_w:function d_w(d){this.a=d},
d_A:function d_A(d){this.a=d},
d_y:function d_y(d){this.a=d},
d_z:function d_z(d,e){this.a=d
this.b=e},
Pb:function Pb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a__:function a__(d,e,f){this.c=d
this.d=e
this.a=f},
aDI:function aDI(d,e,f){var _=this
_.d=$
_.e=d
_.f=null
_.r=!0
_.w=$
_.x=null
_.y=!1
_.z=null
_.bq$=e
_.a8$=f
_.c=_.a=null},
evh:function evh(){},
ev7:function ev7(d){this.a=d},
evg:function evg(d){this.a=d},
ev8:function ev8(d){this.a=d},
ev9:function ev9(d){this.a=d},
ev3:function ev3(d){this.a=d},
ev4:function ev4(d,e){this.a=d
this.b=e},
ev5:function ev5(d){this.a=d},
ev6:function ev6(d,e,f){this.a=d
this.b=e
this.c=f},
eve:function eve(){},
evf:function evf(d){this.a=d},
eva:function eva(d){this.a=d},
evb:function evb(d){this.a=d},
evc:function evc(d){this.a=d},
evd:function evd(d){this.a=d},
evi:function evi(d,e,f){this.a=d
this.b=e
this.c=f},
evk:function evk(d,e){this.a=d
this.b=e},
evj:function evj(d){this.a=d},
Jy:function Jy(d,e){this.c=d
this.a=e},
bqL:function bqL(d,e){this.b=d
this.a=e},
bgO:function bgO(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bgN:function bgN(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aJp:function aJp(){},
aLr:function aLr(){},
bwu:function bwu(){},
aLs:function aLs(){},
fDh(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fDh=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.wZ.c5().LI(B.a(["pdf"],x.s),A.tF,!0),$async$fDh)
case 3:q=e
if(q==null||J.cl(q.a)){u=null
w=1
break}t=J.fo(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.bo1(s,"data:application/pdf;base64,"+A.cT.gcw().aJ(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDh,v)},
i32(d){var w,v,u,t,s,r
try{w=B.jo(d,0,null)
v=B.af("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.c7(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.af("/Type\\s*/Page\\b",!0,!1,!1,!1).kS(0,w).gM(0)
if(t>0){s=J.aQ5(t,1,200)
return s}}catch(r){}return 1},
fD8(d){return C.i31(d)},
i31(d){var w=0,v=B.j(x.T),u
var $async$fD8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a0(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fD8,v)},
bC4(d,e,f,g){return C.i3b(d,e,f,g)},
i3b(b6,b7,b8,b9){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$bC4=B.e(function(c0,c1){if(c0===1){s.push(c1)
w=t}for(;;)switch(w){case 0:if(!new B.e7(b6,x.co).gaf(0).C()){u=null
w=1
break}t=4
r=A.k.D(b7.a,80,2400)
q=A.k.D(b7.b,80,2400)
p=B.hkw(b9,new B.at(r,q))
o=1
n=1
m=0
l=0
for(a7=b6.length,a8=0;a8<a7;++a8){k=b6[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.lM(a9),b0)
b0=n
a9=k.b
n=Math.min(B.lM(b0),a9)
a9=m
b0=k.a
m=Math.max(B.lM(a9),b0)
b0=l
a9=k.b
l=Math.max(B.lM(b0),a9)}o=A.k.D(o-0.04,0,1)
n=A.k.D(n-0.04,0,1)
m=A.k.D(m+0.04,0,1)
l=A.k.D(l+0.04,0,1)
j=A.k.D(m-o,0.12,1)
i=A.k.D(l-n,0.12,1)
h=A.o.D(A.k.V(800*(i/j)),180,420)
$.W()
g=new B.qT()
f=B.D5(g,null)
a7=B.M()
a7.r=A.qE.gp(0)
f.aZ(new B.a9(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.M()
b1.r=b8.gp(b8)
b1.c=p*e
b1.d=A.bO
b1.e=A.fA
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
b2.delete()}a0=a2}a3=g.pB()
w=7
return B.b(a3.z7(800,h),$async$bC4)
case 7:a4=c1
a3.q()
w=8
return B.b(a4.hq(A.fX),$async$bC4)
case 8:a5=c1
a4.q()
if(a5==null){u=null
w=1
break}a7=J.eT(A.dD.gaM(a5))
a7=A.cT.gcw().aJ(a7)
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
return B.i($async$bC4,v)},
aPi(d,e,f){return C.i3_(d,e,f)},
i3_(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aPi=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.aB:e
r.c=f==null?5.2:f
w=3
return B.b(B.ah8(d,e,f,new C.fD6(r,q),q,"Sign document"),$async$aPi)
case 3:if(!new B.e7(q,x.co).gaf(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bC4(q,t,r.b,r.c),$async$aPi)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b0r(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPi,v)},
i39(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hdJ(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hdJ(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b1(A.a.aT(A.o.fS(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.L)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.k.aa(q.c*100,2)+"%;top:"+A.k.aa(q.d*100,2)+"%;width:"+A.k.aa(q.e*100,2)+"%;height:"+A.k.aa(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b1(A.a.aT(A.o.fS(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d+='<div class="txt" style="font-size:'+B.t(p)+"px;color:#"+o+'">'+B.aK(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a0(n,"data:image")){m=p===D.lq&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aK(p,"&",h)
p=B.aK(p,"<",g)
p=B.aK(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aK(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hdl(q.ay)+";border:2px solid "+C.hdl(q.ch)+'"></div>'
break
case 5:l=C.fXX(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aK(n,"&",h)
n=B.aK(n,"<",g)
n=B.aK(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aK(n,'"',e)+"</div>")
p=p?null:l.gaj_()
if(p==null)p=A.awm
n=B.U(p)
k=n.k("ol<1>")
j=new B.ol(p,0,8,k)
j.CL(p,0,8,n.c)
j=new B.bR(j,j.gM(0),k.k("bR<ak.E>"))
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
hdl(d){var w=A.o.aA(d,24)
return"rgba("+(A.o.aA(d,16)&255)+","+(A.o.aA(d,8)&255)+","+(d&255)+","+A.k.aa((w&255)/255,3)+")"},
hdJ(d){var w=B.aK(d,"&","&amp;")
w=B.aK(w,"<","&lt;")
w=B.aK(w,">","&gt;")
return B.aK(w,'"',"&quot;")},
bC2(d,e){var w=0,v=B.j(x.H)
var $async$bC2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.ca(null,null,!0,null,new C.fDf(e,C.i39(e),d),d,null,!0,!0,x.H),$async$bC2)
case 2:return B.h(null,v)}})
return B.i($async$bC2,v)},
bC3(){var w=0,v=B.j(x.T),u,t,s
var $async$bC3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gk(92,2400),$async$bC3)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fD8(s),$async$bC3)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bC3,v)},
aPj(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aPj=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.fZa(d),$async$aPj)
case 3:t=f
s=A.a.i(d.b)
r=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aK(s,r,"_"))
u=Y.fFA(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aPj,v)},
h7F(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b0r:function b0r(d,e,f){this.a=d
this.b=e
this.c=f},
fD6:function fD6(d,e){this.a=d
this.b=e},
fDf:function fDf(d,e,f){this.a=d
this.b=e
this.c=f},
fDc:function fDc(d){this.a=d},
fDd:function fDd(d,e,f){this.a=d
this.b=e
this.c=f},
fDe:function fDe(d,e,f){this.a=d
this.b=e
this.c=f},
i30(d){return C.ku(d.w)},
i37(d){var w,v,u,t
if(d.length===0||!A.d.d8(d,C.i4S()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
yo(d){var w=A.a.i(d),v=B.af("[^A-Z0-9]",!0,!1,!1,!1),u=B.aK(w.toUpperCase(),v,"")
w=$.hqb()
if(w.b.test(u))return u
return null},
hky(d,e,f){var w,v,u=C.hyM(d),t=$.pm()
for(w=0;w<80;++w){v=u+A.a.aT(A.o.u(t.aB(1000)),3,"0")
if(!f.t(0,v))return v}return u+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
i3d(d){var w,v,u,t,s=B.aX(x.N)
for(w=J.aV(d.a),v=new B.fi(w,d.b);v.C();){u=w.gT(w).y
t=C.yo(u==null?"":u)
if(t!=null)s.J(0,t)}return s},
fD4(d,e){var w,v=d.y,u=C.yo(v==null?"":v)
if(u!=null)return d.y=u
w=C.i3d(new B.a2(e,new C.fD5(d),B.U(e).k("a2<1>")))
v=d.x
return d.y=C.hky(v==null?"":v,null,w)},
i3c(d){var w,v
if(d.length!==1)return null
w=A.d.gL(d)
if(!C.ku(w.w))return null
v=w.y
return C.yo(v==null?"":v)},
hDb(){var w,v=$.pm(),u=J.e3(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aB(32)]
return"SL"+A.d.fX(u)},
Vw(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Vw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$Vw)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f3("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bG),$async$Vw)
case 8:r=e
if(r==null){u=B.T(x.N,x.z)
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
return B.i($async$Vw,v)},
Vx(d){return C.hDc(d)},
hDc(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Vx=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$Vx)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hC("ngmy_slides_transfer_qr_stashes_v1",B.F(["stashes",d,"savedAt",new B.S(Date.now(),0,!1).a6().ac()],x.N,x.z),!1,!1,A.cH,null),$async$Vx)
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
return B.i($async$Vx,v)},
a7C(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7C=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c3(),$async$a7C)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Vw(),$async$a7C)
case 4:s=a6
r=C.yo(a2==null?"":a2)
if(r==null)r=a3!=null?C.hky(a3,null,A.Ik):null
q=x.N
p=B.aX(q)
for(o=J.dk(s),n=J.aV(o.gi2(s)),m=x.f;n.C();){l=n.gT(n)
if(!m.b(l))continue
k=J.q(l,"claimCode")
j=C.yo(J.k(k==null?"":k))
if(j!=null)p.J(0,j)}n=o.gdK(s),n=n.gaf(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gT(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dJ.aJ(t)
g.n(0,"payload",A.cT.gcw().aJ(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sv.t(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.yo(J.k(q==null?"":q))
if(f==null)f=C.h7K(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Vx(s),$async$a7C)
case 7:u=new B.aF8(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.hDb()
n=r==null
d=n?C.h7K(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dJ.aJ(t)
q.n(0,"payload",A.cT.gcw().aJ(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.S(Date.now(),0,!1).a6().ac())
if(D.Sv.t(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Vx(s),$async$a7C)
case 8:u=new B.aF8(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7C,v)},
h7K(d){var w,v,u=$.pm()
for(w=0;w<200;++w){v="SL"+A.a.aT(A.o.u(u.aB(1000)),3,"0")
if(d.J(0,v))return v}return"SL"+A.a.aT(A.o.u(Date.now()%1000),3,"0")},
aqz(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$aqz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqz)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Vw(),$async$aqz)
case 6:t=f
s=J.a6(t)
r=s.gM(t)
s.bn(t,new C.cdr(q))
w=s.gM(t)!==r?7:8
break
case 7:w=9
return B.b(C.Vx(t),$async$aqz)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$aqz,v)},
aqy(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$aqy=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.yo(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$aqy)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Vw(),$async$aqy)
case 6:t=o.ju(f),t=t.gaf(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gT(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.q(q,"claimCode")
if(C.yo(J.k(q==null?"":q))===p){u=C.a7B(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aqy,v)},
a7B(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a7B=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c3(),$async$a7B)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Vw(),$async$a7B)
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
if(D.Sv.t(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.R.aG(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aF(q,"sharedByAdmin",!0)
s=A.R.ao(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dW(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.S(Date.now(),0,!1).a6().ac())
o.n(p,g,l)}w=7
return B.b(C.Vx(p),$async$a7B)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a7B,v)},
i36(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("K<1,a3<n,@>>")
w=B.B(new B.K(d,new C.fDb(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fDj(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.S(Date.now(),0,!1).a6().ac())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.ag())
return A.R.ao(w,null)}return A.R.ao(C.i36(d==null?B.a([],x.D):d,f,g),null)},
fDi(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fDi=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a7C(h,d,e,f,g),$async$fDi)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.yo(e==null?"":e)
u=new B.aEW(s,t)
w=1
break}t=A.dJ.aJ(h)
t=A.k9.gcw().aJ(t)
u=new B.aEW(C.yo(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fDi,v)},
fZc(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d_(q,"NGMYSLIDESYNC2|"))return!0
if(J.d_(q,"NGMYSLIDECODE|"))return!0
if(J.d_(q,"NGMY_SL:"))return!0
if(J.f0(q,s)||J.f0(q,r))return!0
if(J.d_(q,"{"))try{w=A.R.aG(0,q,null)
if(x.f.b(w)){u=J.q(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
i3a(d){var w,v,u,t,s,r=d.z,q=r==null?null:A.a.i(r)
r=d.d
for(r=[q,r==null?null:A.a.i(r)],w=0;w<2;++w){v=r[w]
if(v==null||v.length===0)continue
if(C.fZc(v))return v
u=A.a.cJ(v,"NGMYSLIDESYNC2|")
if(u>=0){t=A.a.i(A.a.b1(v,u))
if(C.fZc(t))return t}s=A.a.cJ(v,"NGMY_SL:")
if(s>=0){t=A.a.i(A.a.b1(v,s))
if(C.fZc(t))return t}}return null},
fD7(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d_(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d_(t,"NGMY_SL:"))w=v.a(A.R.aG(0,A.c6.ca(0,A.cG.aJ(J.mD(t,8))),null))
else w=v.a(A.R.aG(0,t,null))
v=C.hMW(w)
return v}catch(u){v=B.a([],x.D)
return v}},
agU(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$agU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a0(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.aqy(t[1]),$async$agU)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fD7(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.yo(q)
w=r!=null&&!A.a.t(q,"|")&&!A.a.a0(q,"{")?8:9
break
case 8:w=10
return B.b(C.aqy(r),$async$agU)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fD7(s)
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
return B.b(C.a7B(t[1]),$async$agU)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fD7(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fD7(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$agU,v)},
hMW(d){var w,v,u,t=J.a6(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Sv.t(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.fZ9(C.Vs(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.d9(u,x.f)
t=B.cD(t,new C.fbj(w),t.$ti.k("J.E"),x.I)
t=B.B(t,B.a4(t).k("J.E"))
return t}return B.a([],x.D)},
fZ9(d,e){var w,v,u,t,s,r,q,p,o=d.ag()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aV(v),t=x.f;u.C();){s=u.gT(u)
if(t.b(s)){r=Date.now()
q=$.iZ
$.iZ=q+1
J.aF(s,"id",""+1000*r+"_"+q)}}p=C.Vs(B.a1(o,x.N,x.z))
if(e&&C.ku(p.w))p.Q=new B.S(Date.now(),0,!1).a6().bP(144e8).ac()
return p},
bBO(){var w=0,v=B.j(x.aT),u,t,s
var $async$bBO=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Gj(),$async$bBO)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.agU(s),$async$bBO)
case 4:t=e
u=J.cl(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bBO,v)},
fLU(d){var w=0,v=B.j(x.T),u,t
var $async$fLU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hR(D.Wd,!0,"Dismiss",d,new C.fLV(),new C.fLW(),A.EZ,!0,x.N),$async$fLU)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.I(x.q).f.S(D.ePw)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fLU,v)},
i6Z(d,e,f,g,h){return B.a5(d,!1).c8(B.e8(new C.fLX(h,e,g,f),!0,null,x.H))},
fD5:function fD5(d){this.a=d},
cdr:function cdr(d){this.a=d},
fDb:function fDb(){},
fbj:function fbj(d){this.a=d},
fLV:function fLV(){},
fLW:function fLW(){},
fLX:function fLX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Vu:function Vu(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aDG:function aDG(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
euO:function euO(){},
euK:function euK(d,e){this.a=d
this.b=e},
euN:function euN(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
euM:function euM(d){this.a=d},
euP:function euP(d){this.a=d},
euQ:function euQ(d){this.a=d},
euT:function euT(d){this.a=d},
euU:function euU(d){this.a=d},
euS:function euS(d){this.a=d},
euV:function euV(d){this.a=d},
euR:function euR(d){this.a=d},
euW:function euW(d,e){this.a=d
this.b=e},
euJ:function euJ(d,e){this.a=d
this.b=e},
euI:function euI(d,e){this.a=d
this.b=e},
Vv:function Vv(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjG:function bjG(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
euX:function euX(d,e){this.a=d
this.b=e},
euY:function euY(d){this.a=d},
euZ:function euZ(){},
ev_:function ev_(d){this.a=d},
ev0:function ev0(d,e){this.a=d
this.b=e},
aDD:function aDD(d){this.a=d},
aDE:function aDE(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eor:function eor(d){this.a=d},
eoq:function eoq(){},
eos:function eos(d){this.a=d},
eon:function eon(d){this.a=d},
eom:function eom(){},
eoo:function eoo(d){this.a=d},
eop:function eop(d){this.a=d},
bu0:function bu0(){},
aqA:function aqA(d){this.a=d},
aDH:function aDH(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
ev2:function ev2(d){this.a=d},
ev1:function ev1(d){this.a=d},
hS5(){var w,v,u,t
for(v=0;v<4;++v){w=D.d_I[v]
try{if(Ac.bW4(w)){u=w
return u}}catch(t){}}return null},
QH(d,e){return C.i_S(d,e)},
i_S(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$QH=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.hS5()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.o7?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.k.V(b3?1280:1280*b2)
b5=c2.b=A.k.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qr(c6,!0)
b6.toString
p=B.a5(c6,!0)
b7=new B.cs(null,x.A)
b8=A.d.gL(c3)
b9=$.aw()
o=new B.eS(b8,b9)
n=new B.eS("Getting ready\u2026",b9)
m=new B.eS(0,b9)
l=B.og(new C.fxq(c2,b7,o),!1,!1)
b6.lM(0,l)
b9=x.H
B.ca(null,A.db,!1,null,new C.fxr(n,m),c6,null,!0,!0,b9)
k=new C.fxv(b7)
j=new C.fxw()
i=null
t=4
b3=c2.a
h=Aj.aRA(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.fOy(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ac.aWt(f,B.F(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Hk.ya(i,"dataavailable",new C.fxs(e))
d=new B.bW(new B.bg($.bx,x.dT),x.b2)
A.Hk.ya(i,"stop",new C.fxt(d))
J.ahu(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$QH)
case 8:w=7
return B.b(c5.$1(d0),$async$QH)
case 7:a0=d0
J.fOA(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ahu(n,"Drawing slide "+B.t(a1+1)+" of "+b8+"\u2026")
J.ahu(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$QH)
case 15:w=14
return B.b(c5.$1(d0),$async$QH)
case 14:a0=d0
case 13:J.fOA(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ahu(n,"Recording slide "+B.t(a1+1)+" of "+c3.length+" \xb7 "+B.t(a3)+" s")
a4=new B.S(Date.now(),0,!1).bP(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbo())b3=b3===b8.gbo()&&0<b8.gcz()
else b3=!0
if(!b3){w=17
break}J.fOA(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fo,null,b9),$async$QH)
case 18:w=16
break
case 17:J.ahu(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ahu(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.cM(0,A.nR),$async$QH)
case 19:a5=A.d.gL(q.split(";"))
a6=B.hM(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.af("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aK(c3,b3,"_"))
c0=B.n3(a7)
c0.download=B.t(J.ad(a9)===0?"presentation":a9)+"."+B.t(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.KX(b0)
J.lS(b0)
B.bN(A.nQ,new C.fxu(a7),b9)
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
J.lS(l)
if(p.pv())p.eJ()
c3=o
b3=$.aw()
c3.shT(b3)
J.aQ9(c3,0)
c3=n
c3.shT(b3)
J.aQ9(c3,0)
c3=m
c3.shT(b3)
J.aQ9(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$QH,v)},
fxq:function fxq(d,e,f){this.a=d
this.b=e
this.c=f},
fxp:function fxp(){},
fxr:function fxr(d,e){this.a=d
this.b=e},
fxv:function fxv(d){this.a=d},
fxw:function fxw(){},
fxs:function fxs(d){this.a=d},
fxt:function fxt(d){this.a=d},
fxu:function fxu(d){this.a=d},
buc:function buc(d,e,f){this.c=d
this.d=e
this.a=f},
f5D:function f5D(){},
f5E:function f5E(){},
cdO(d){var w=0,v=B.j(x.at),u,t,s
var $async$cdO=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aqK(d,A.z6),$async$cdO)
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
return B.i($async$cdO,v)},
cdN(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a7i:function a7i(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bjp:function bjp(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
ecQ:function ecQ(d){this.a=d},
ecO:function ecO(d){this.a=d},
ecP:function ecP(d,e){this.a=d
this.b=e},
a8a:function a8a(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.oq$=k
_.or$=l
_.os$=m
_.nK$=n},
a8b:function a8b(d,e){this.a=d
this.b=e},
b24:function b24(){},
cg_:function cg_(){},
cg0:function cg0(){},
cg1:function cg1(d,e,f,g,h,i,j,k,l){var _=this
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
hrb(d){return new C.ahM(d)},
a2l:function a2l(){},
ahM:function ahM(d){this.a=d},
aQu:function aQu(){},
aw2:function aw2(d,e){this.d=d
this.b=e
this.a=null},
aRZ:function aRZ(d){this.b=d
this.a=null},
fsz(d,e){var w=0,v=B.j(x.H)
var $async$fsz=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.W().gxn().Lr(d,e),$async$fsz)
case 2:B.fFG()
return B.h(null,v)}})
return B.i($async$fsz,v)},
hhQ(d,e){return(A.rc[(d^e)&255]^A.o.aA(d,8))>>>0},
fq2(d,e,f,g,h,i){var w=C.hXd(d,A.da,f,null,A.cX,g,h,i)
return w},
hjH(d){var w=F.hkp(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hyM(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.oU.h(0,w)
if(v!=null)return v
for(u=A.oU.gdK(A.oU),u=u.gaf(u);u.C();){t=u.gT(u).b
if(t.toLowerCase()===w)return t}u=B.af("[^A-Z]",!0,!1,!1,!1)
s=B.aK(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.ap(s,0,2)
return A.a.ap(s+"XX",0,2)},
hjP(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<38;++w)v+="- "+D.cNO[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 30 free minutes, then Advisors subscription for unlimited chat (admins unlimited).\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bzX(d,e){return C.hTQ(d,e)},
hTQ(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bzX=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hM([d],"application/pdf")
n=x.z
q=B.aTD(B.a([r],x.e3),e,B.F(["type","application/pdf"],n,n))
p=B.cB(B.F(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eh(B.jX(o,"share",[p]),x.H),$async$bzX)
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
return B.i($async$bzX,v)},
fZ3(){var w=0,v=B.j(x.y),u,t,s
var $async$fZ3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fin
s=$.bzu
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bzX(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fZ3,v)},
bBj(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bBj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fin
l=$.bzu
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=Y.hep()?3:4
break
case 3:w=5
return B.b(C.bzX(m,k),$async$bBj)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bzv
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n3(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.KX(q)
w=10
return B.b(B.bN(A.a1,null,x.H),$async$bBj)
case 10:J.lS(q)
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
return B.i($async$bBj,v)},
fYV(){var w=0,v=B.j(x.y),u,t,s,r
var $async$fYV=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bzv
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.lu.uz(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$fYV,v)},
fZb(d,e){var w=0,v=B.j(x.H),u,t
var $async$fZb=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hM([d],"text/html"))
t.toString
u=window
u.toString
A.lu.uz(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$fZb,v)},
b11(d,e){var w=0,v=B.j(x.y),u
var $async$b11=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b13(d,e),$async$b11)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b12(d),$async$b11)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b11,v)}},D,N,H,Am,A8,X,V,An,G,F,E,Ao,W,Q,Y,Z,Ap,Aq,A9,K,Ar,A_,O,A0,Aa,L,Ab,As,At,P,A1,Au,Av,Ac,Ad,Aw,Ae,Af,Ag,Ax,Ay,R,Az,I,AA,AB,S,T,M,A2,A3,A4
J=c[1]
B=c[0]
A=c[2]
Ah=c[192]
A5=c[66]
Ai=c[49]
A6=c[157]
Aj=c[57]
U=c[207]
A7=c[52]
Ak=c[133]
Al=c[217]
C=a.updateHolder(c[4],C)
D=c[205]
N=c[90]
H=c[121]
Am=c[36]
A8=c[209]
X=c[206]
V=c[195]
An=c[113]
G=c[176]
F=c[31]
E=c[208]
Ao=c[97]
W=c[117]
Q=c[135]
Y=c[29]
Z=c[164]
Ap=c[219]
Aq=c[172]
A9=c[138]
K=c[210]
Ar=c[112]
A_=c[60]
O=c[186]
A0=c[75]
Aa=c[114]
L=c[145]
Ab=c[102]
As=c[88]
At=c[212]
P=c[106]
A1=c[124]
Au=c[86]
Av=c[119]
Ac=c[53]
Ad=c[182]
Aw=c[35]
Ae=c[73]
Af=c[134]
Ag=c[216]
Ax=c[218]
Ay=c[215]
R=c[67]
Az=c[213]
I=c[161]
AA=c[173]
AB=c[220]
S=c[47]
T=c[211]
M=c[193]
A2=c[214]
A3=c[100]
A4=c[56]
C.nP.prototype={
uT(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.tE(t,v)
return new C.nP(t===0?!1:w,v,t)},
bKd(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.CK()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.tE(w,u)
return new C.nP(r===0?!1:s,u,r)},
bKI(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.CK()
w=o-d
if(w<=0)return p.a?$.h_x():$.CK()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.tE(w,u)
q=new C.nP(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aC(0,$.a28())
return q},
dU(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.an(e,16)
if(A.o.F(e,16)===0)return r.bKd(v)
u=w+v+1
t=new Uint16Array(u)
C.hb0(r.b,w,e,t)
w=r.a
s=C.tE(u,t)
return new C.nP(s===0?!1:w,t,s)},
mo(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.V(B.dI("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.an(e,16)
u=A.o.F(e,16)
if(u===0)return n.bKI(v)
t=w-v
if(t<=0)return n.a?$.h_x():$.CK()
s=n.b
r=new Uint16Array(t)
C.hIR(s,w,e,r)
w=n.a
q=C.tE(t,r)
p=new C.nP(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dU(1,u)-1)!==0)return p.aC(0,$.a28())
for(o=0;o<v;++o)if(s[o]!==0)return p.aC(0,$.a28())}return p},
aL(d,e){var w,v=this.a
if(v===e.a){w=C.cDV(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a7t(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a7t(t,e)
if(s===0)return $.CK()
if(r===0)return t.a===e?t:t.uT(0)
w=s+1
v=new Uint16Array(w)
C.hIP(t.b,s,d.b,r,v)
u=C.tE(w,v)
return new C.nP(u===0?!1:e,v,u)},
GZ(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.CK()
w=d.c
if(w===0)return t.a===e?t:t.uT(0)
v=new Uint16Array(s)
C.b98(t.b,s,d.b,w,v)
u=C.tE(s,v)
return new C.nP(u===0?!1:e,v,u)},
bxg(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.tE(r,u)
return new C.nP(!1,u,s)},
bxf(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.tE(u,r)
return new C.nP(!1,r,v)},
bxh(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.tE(p,m)
return new C.nP(s!==0,m,s)},
Uj(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.CK()
w=t.a
if(w===e.a){if(w){w=$.a28()
return t.GZ(w,!0).bxh(e.GZ(w,!0),!0).a7t(w,!0)}return t.bxg(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bxf(v.GZ($.a28(),!1),!1)},
ad(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a7t(e,v)
if(C.cDV(u.b,t,e.b,w)>=0)return u.GZ(e,v)
return e.GZ(u,!v)},
aC(d,e){var w,v,u=this,t=u.c
if(t===0)return e.uT(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a7t(e,v)
if(C.cDV(u.b,t,e.b,w)>=0)return u.GZ(e,v)
return e.GZ(u,!v)},
aF(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.CK()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hb1(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.tE(w,t)
return new C.nP(q===0?!1:r,t,q)},
bKc(d){var w,v,u,t
if(this.c<d.c)return $.CK()
this.aQm(d)
w=$.fU3.c5()-$.awN.c5()
v=C.fU5($.fU2.c5(),$.awN.c5(),$.fU3.c5(),w)
u=C.tE(w,v)
t=new C.nP(!1,v,u)
return this.a!==d.a&&u>0?t.uT(0):t},
clQ(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aQm(d)
w=C.fU5($.fU2.c5(),0,$.awN.c5(),$.awN.c5())
v=C.tE($.awN.c5(),w)
u=new C.nP(!1,w,v)
if($.fU4.c5()>0)u=u.mo(0,$.fU4.c5())
return t.a&&u.c>0?u.uT(0):u},
aQm(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.haY&&d.c===$.hb_&&g.b===$.haX&&d.b===$.haZ)return
w=d.b
v=d.c
u=16-A.o.gajp(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.haW(w,v,u,t)
r=new Uint16Array(f+5)
q=C.haW(g.b,f,u,r)}else{r=C.fU5(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.fU6(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cDV(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.b98(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.b98(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.hIQ(p,r,i);--o
C.hb1(h,j,0,r,o,s)
if(r[i]<h){m=C.fU6(j,s,o,n)
C.b98(r,l,n,m,r)
while(--h,r[i]<h)C.b98(r,l,n,m,r)}--i}$.haX=g.b
$.haY=f
$.haZ=w
$.hb_=v
$.fU2.b=r
$.fU3.b=l
$.awN.b=s
$.fU4.b=u},
gX(d){var w,v,u,t=new C.cDW(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cDX().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.nP&&this.aL(0,e)===0},
t5(d,e){return this.aL(0,e)>0},
N(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
uN(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.gajp(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aA(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cDY(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cDZ(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.l5(A.aG.gaM(w)).getFloat64(0,!0)},
u(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.u(-r.b[0])
return A.o.u(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.uT(0):r
while(v.c>1){u=$.ho7()
if(u.c===0)B.ba(D.b1Y)
t=v.clQ(u).u(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bKc(u)}w.push(A.o.u(v.b[0]))
if(q)w.push("-")
return new B.dz(w,x.bJ).fX(0)},
$iaRd:1,
$ihG:1}
C.aQE.prototype={
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
cJJ(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gL(d){return A.d.gL(this.a)},
gal(d){return A.d.gal(this.a)},
gam(d){return this.a.length===0},
gco(d){return this.a.length!==0},
gaf(d){var w=this.a
return new J.k0(w,w.length,B.U(w).k("k0<1>"))}}
C.Rj.prototype={
cRL(){var w,v
if(this.as==null)this.bbo()
w=this.as
v=w==null?null:w.ao7()
return v==null?null:v.eE()},
bbo(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ao7().eE()
this.as=new C.bN2(v)}},
gY(d){return this.at}}
C.a3k.prototype={
a4(){return"CompressionType."+this.b}}
C.bGU.prototype={
eq(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.cq()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dU(v,u)+(s.b&A.yG[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.cq()}w=A.o.dU(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fE(u,t)&A.yG[d])
s.c=t}return v}}
C.bFg.prototype={
cI_(d,e){var w,v,u,t,s,r=this,q=new C.bGU(d)
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
t=r.ck7(q)
if(t<0)return!1
if(t===0){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
s=r.cka(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eq(8)
q.eq(8)
q.eq(8)
q.eq(8)
return!0}}return!0},
ck7(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eq(8)
if(t!==D.dft[u])v=!1
if(t!==D.cUs[u])w=!1
if(!w&&!v)return-1}return v?0:2},
cka(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eq(1),d2=((d3.eq(8)<<8|d3.eq(8))<<8|d3.eq(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eq(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eq(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c_z()
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
u[w]=l}c9.fr=B.c2(6,$.hme(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eq(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eq(1)===0)break
i=d3.eq(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hmd()
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
if(f<h)h=f}c9.bW6(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.asW(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.asW(d3)}while(a3===0||a3===1);++a5
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
a3=c9.asW(d3)
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
d4.bG(c3)
c1=(c1<<8^D.GP[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.GR[b9];++b9
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
if(b8===0){b8=D.GR[b9];++b9
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
if(b8===0){b8=D.GR[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.GR[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.GR[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bG(c3)
c1=c1<<8^D.GP[c1>>>24&255^v];--c2}d4.bG(c3)
c1=(c1<<8^D.GP[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bG(c7)
c1=(c1<<8^D.GP[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bG(c7)
c1=(c1<<8^D.GP[c1>>>24&255^c7&255])>>>0
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
asW(d){var w,v,u,t,s=this,r=s.ay
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
bW6(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c_z(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cw5.prototype={
aGP(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bNq(e)
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
if(w>0)e.aGS(w,!1)
r.ckv(e)
q=r.r
v=r.f
u=e.aJQ(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aK()!==33639248)break
s=new C.b7P()
s.cRK(0,u,e,f)
q.push(s)}},
ckv(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a76(20,r)
if(w.aK()!==117853008){d.c=s
return}w.aK()
v=w.rU()
w.aK()
d.c=v
if(d.aK()!==101075792){d.c=s
return}d.rU()
d.aU()
d.aU()
d.aK()
d.aK()
d.rU()
d.rU()
u=d.rU()
t=d.rU()
this.f=u
this.r=t
d.c=s},
bNq(d){var w,v,u,t,s,r,q,p,o,n
if(d.gM(0)<=4)return-1
w=d.c
v=d.gM(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a76(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.alh(A.hT)
o.aL6(r.eE(),A.hT,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aK()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cw3.prototype={}
C.awr.prototype={
a4(){return"ZipEncryptionMode."+this.b}}
C.cw6.prototype={
aGP(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aK()!==67324752)return
e.aU()
o.b=e.aU()
w=D.aCP.h(0,e.aU())
o.c=w==null?D.Li:w
o.d=e.aU()
o.e=e.aU()
o.f=e.aK()
o.r=e.aK()
o.w=e.aK()
v=e.aU()
u=e.aU()
o.x=e.amV(v)
o.y=e.hd(u).eE()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.aT2:D.Dm
o.ay=f
o.Q=e.hd(t)
if(o.at!==D.Dm&&u>2){w=o.y
w.toString
s=B.r7(w,A.hT,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.aU()===39169){s.aU()
s.aU()
s.amV(2)
w=s.b
w.toString
r=w[s.c++]
q=s.aU()
o.at=D.aT3
o.ax=new C.cw3(r,q)
w=D.aCP.h(0,q)
o.c=w==null?D.Li:w}}}if((o.b&8)!==0){p=e.aK()
if(p===134695760)o.f=e.aK()
else o.f=p
o.r=e.aK()
o.w=e.aK()}},
gM(d){return this.bkS().length},
ao7(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.r7(new Uint8Array(0),A.hT,q,q)
w=r.at
if(w!==D.Dm)if(p.gM(0)<=0)r.at=D.Dm
else{if(w===D.aT2){p=r.bIv(p)
r.Q=p}else if(w===D.aT3){p=r.bI8(p)
r.Q=p}r.at=D.Dm}w=r.c
if(w===D.aft){v=p.c
u=B.dh()
p=r.Q
if(p.gM(0)<=524288e3)u.b=A.pi.Be(p.eE(),!0,!1)
else{t=B.a8_(A.hT,r.w)
p=r.Q
p.toString
A.pi.a3j(p,t,!0,!1)
u.b=t.Gz()}r.Q.c=v
return B.r7(u.bf(),A.hT,q,q)}else if(w===D.afu){s=B.a8_(A.hT,32768)
p=r.Q
v=p.c
C.hrm().cI_(p,s)
u=s.Gz()
r.Q.c=v
return B.r7(u,A.hT,q,q)}else return B.r7(p.eE(),A.hT,q,q)},
bkS(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eE()},
u(d){return this.x},
b7i(d){var w=this.ch,v=C.Jn(C.hhQ(w[0].N(0),d))
w[0]=v
v=w[1].ad(0,v.Uj(0,C.Jn(255)))
w[1]=v
w[1]=v.aF(0,C.Jn(134775813)).ad(0,C.Jn(1)).Uj(0,C.Jn(4294967295))
w[2]=C.Jn(C.hhQ(w[2].N(0),w[1].mo(0,24).N(0)))},
aPL(){var w=(this.ch[2].Uj(0,C.Jn(65535)).N(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bIv(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.r7(new Uint8Array(0),A.hT,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.b7i(u[v.c++]^r.aPL())}t=r.Q.eE()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aPL()
r.b7i(s)
u&2&&B.aj(t)
t[w]=s}return B.r7(t,A.hT,q,q)},
bI8(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hd(8).eE()
v=16}else if(k===2){w=d.hd(12).eE()
v=24}else{w=d.hd(16).eE()
v=32}u=d.hd(2).eE()
t=d.hd(d.gM(0)-10)
s=d.hd(10)
r=t.eE()
k=this.ay
k.toString
q=C.hIw(k,w,v)
p=new Uint8Array(B.ce(A.aG.dq(q,0,v)))
k=v*2
o=new Uint8Array(B.ce(A.aG.dq(q,v,k)))
if(!C.haq(A.aG.dq(q,k,k+2),u))throw B.V(B.fl("password error"))
k=new Uint8Array(16)
n=new C.bDR(k,new Uint8Array(16),p)
k=x.S
m=J.a4L(0,k)
m=n.r=new C.cfP(m)
m.c=!0
m.b=m.bka(!0,new C.as7(p))
if(m.c)m.d=B.bm(D.o4,!0,k)
else m.d=B.bm(D.yy,!0,k)
l=C.h8D(C.h8F(),64)
l.bdH(new C.as7(o))
n.w=l
n.cRi(r,0,r.length)
k=s.eE()
m=n.x
m===$&&B.c()
if(!C.haq(k,m))throw B.V(B.fl("macs don't match"))
return B.r7(r,A.hT,null,null)}}
C.b7P.prototype={
cRK(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
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
if(w>0)n.at=e.amV(w)
if(v>0){t=e.hd(v).eE()
n.ax=t
if(v>=4){s=B.r7(t,A.hT,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.aU()
p=s.aU()
o=s.a76(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.rU()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.rU()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.rU()
p-=8}if(p>=4&&n.y===65535)n.y=o.aK()}}}}if(u>0)e.amV(u)
f.c=n.as
t=new C.cw6(D.Li,n,D.Dm,B.a([C.Jn(0),C.Jn(0),C.Jn(0)],x.f3))
n.ch=t
t.aGP(0,f,g)},
u(d){return this.at}}
C.cw4.prototype={
cI0(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cw5(B.a([],x.fT))
this.a=g
g.aGP(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aQE(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.L)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.cb(o,"/")||A.a.cb(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.Rj(o,A.o.an(Date.now(),1000),0):C.h0V(o,q.w,q)
v.J(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.h0V(o,q.w,q)
if(k.as==null)k.bbo()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.alh(A.hT)
j.aL6(o,A.hT,h,h)}i=j==null?h:j.eE()
if(i!=null)new B.FI(!1).De(i,0,h,!0)}}return v}}
C.bDR.prototype={
cRi(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.Ca(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hr5(u,m.a)
q=m.r
if(16>u.byteLength)B.ba(B.dI("Input buffer too short",null))
if(16>w.byteLength)B.ba(B.dI("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bLO(u,0,w,0,o)}else{o===$&&B.c()
q.bIz(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.KM(w,0)
m.x=A.aG.dq(m.x,0,10)
w=m.w
l=w.a
l.lw(0)
w=w.d
w===$&&B.c()
l.Ca(0,w,0,w.length)
return f}}
C.cfU.prototype={}
C.cfY.prototype={}
C.cfS.prototype={}
C.as7.prototype={}
C.cfX.prototype={
cIf(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.e5(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.bdH(new C.as7(A.aG.fL(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bMM(n.a,n.b,t,s,r)
r+=v}A.aG.hf(f,g,g+w,s)
return o.a.c},
bMM(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.V(B.dI("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.Ca(0,d,0,d.length)
v.Ca(0,f,0,4)
u=m.c
u===$&&B.c()
w.KM(u,0)
u=m.c
A.aG.hf(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.Ca(0,s,0,s.length)
w.KM(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cfT.prototype={}
C.cfR.prototype={}
C.as8.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.as8){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
t5(d,e){var w=this.a
w===$&&B.c()
w=A.o.t5(w,e.gbWn())
if(!w)e.gbWn()
return w},
aJh(d,e){this.a=0
this.b=d},
t9(d){return this.aJh(d,null)},
aJT(d){var w,v=this,u=v.b
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
w.b_5(v,u)
u=w.b
u===$&&B.c()
w.b_5(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b_5(d,e){var w,v=A.o.fS(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bs(v,w,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)}}
C.cfW.prototype={
lw(d){var w,v=this
v.a.t9(0)
v.c=0
A.aG.h_(v.b,0,4,0)
v.w=0
w=v.r
A.d.h_(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
anC(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b0A(u,0)
v.c=0}v.a.aJT(1)},
Ca(d,e,f,g){var w=this.ciU(e,f,g)
f+=w
g-=w
w=this.ciV(e,f,g)
this.ciL(e,f+w,g-w)},
KM(d,e){var w,v=this,u=C.h8E(v.a),t=u.a
t===$&&B.c()
t=C.fZF(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.fZF(w,3)
v.ciP()
v.ciM(u)
v.arM()
v.ccZ(d,e)
v.lw(0)
return 20},
b0A(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.nZ(A.aG.gaM(d),d.byteOffset,d.length).getUint32(e,A.i6===w.d)
if(w.w===16)w.arM()},
arM(){this.cRh()
this.w=0
A.d.h_(this.r,0,16,0)},
ciL(d,e,f){while(f>0){this.anC(d[e]);++e;--f}},
ciV(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b0A(d,e)
e+=4
f-=4
w.aJT(4)
v+=4}return v},
ciU(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.anC(d[e]);++e;--f;++v}return v},
ciP(){this.anC(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.anC(0)}},
ciM(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.arM()
u=v.d
switch(u){case A.i6:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.DN:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.V(B.bd("Invalid endianness: "+u.u(0)))}},
ccZ(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.i6===this.d,s=0;s<w;++s){r=v[s]
q=J.nZ(A.aG.gaM(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gdc(d){return this.f}}
C.cfZ.prototype={
cRh(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.q0[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.q0[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.q0[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q0[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.q0[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q0[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.q0[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.q0[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.q0[30]
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
C.cfV.prototype={
bdH(d){var w,v,u,t,s=this,r=s.a
r.lw(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.Ca(0,w,0,v)
w=s.d
w===$&&B.c()
r.KM(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aG.hf(t,0,v,w)}w=s.d
w===$&&B.c()
A.aG.h_(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aG.hf(w,0,u,s.d)
s.b8r(s.d,u,54)
s.b8r(s.e,u,92)
u=s.d
r.Ca(0,u,0,u.length)},
KM(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.KM(s,w)
s=u.e
t.Ca(0,s,0,s.length)
v=t.KM(d,e)
s=u.e
A.aG.h_(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.Ca(0,s,0,s.length)
return v},
b8r(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cfQ.prototype={}
C.cfP.prototype={
a1G(d){return(D.o4[d&255]&255|(D.o4[d>>>8&255]&255)<<8|(D.o4[d>>>16&255]&255)<<16|D.o4[d>>>24&255]<<24)>>>0},
bka(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.V(B.dI("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e3(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c2(4,0,!1,u)
switch(v){case 4:q=J.nZ(A.aG.gaM(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a1G((m>>>8|(m&$.q0[24])<<24)>>>0)^D.cwN[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.nZ(A.aG.gaM(e),e.byteOffset,w)
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
p=(p^f.a1G((k>>>8|(k&$.q0[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a1G((k>>>8|(k&$.q0[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.nZ(A.aG.gaM(e),e.byteOffset,w)
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
p=(p^f.a1G((g>>>8|(g&$.q0[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a1G(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.V(B.bd("Should never get here"))}return s},
bLO(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.nZ(A.aG.gaM(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.e7[a8&255]
u=D.e7[a9>>>8&255]
t=$.q0[8]
s=D.e7[b0>>>16&255]
r=$.q0[16]
q=D.e7[b1>>>24&255]
p=$.q0[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.e7[a9&255]
s=D.e7[b0>>>8&255]
u=D.e7[b1>>>16&255]
v=D.e7[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.e7[b0&255]
u=D.e7[b1>>>8&255]
s=D.e7[a8>>>16&255]
q=D.e7[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.e7[b1&255]
a8=D.e7[a8>>>8&255]
a9=D.e7[a9>>>16&255]
b0=D.e7[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.e7[n&255]
b0=D.e7[m>>>8&255]
a9=D.e7[l>>>16&255]
a8=D.e7[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.e7[m&255]
b0=D.e7[l>>>8&255]
o=D.e7[b1>>>16&255]
s=D.e7[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.e7[l&255]
o=D.e7[b1>>>8&255]
b0=D.e7[n>>>16&255]
u=D.e7[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.e7[b1&255]
o=D.e7[n>>>8&255]
s=D.e7[m>>>16&255]
v=D.e7[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.e7[a8&255]^C.nn(D.e7[a9>>>8&255],24)^C.nn(D.e7[b0>>>16&255],16)^C.nn(D.e7[b1>>>24&255],8)^b6[w][0]
m=D.e7[a9&255]^C.nn(D.e7[b0>>>8&255],24)^C.nn(D.e7[b1>>>16&255],16)^C.nn(D.e7[a8>>>24&255],8)^b6[w][1]
l=D.e7[b0&255]^C.nn(D.e7[b1>>>8&255],24)^C.nn(D.e7[a8>>>16&255],16)^C.nn(D.e7[a9>>>24&255],8)^b6[w][2]
b1=D.e7[b1&255]^C.nn(D.e7[a8>>>8&255],24)^C.nn(D.e7[a9>>>16&255],16)^C.nn(D.e7[b0>>>24&255],8)^b6[w][3]
a7=D.o4[n&255]
b0=D.o4[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.o4[l>>>8&255]
a9=D.o4[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.o4[b1>>>8&255]
h=D.o4[n>>>16&255]
g=D.o4[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.o4[l>>>24&255]
s=s[3]
a1=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.nZ(A.aG.gaM(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bIz(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.nZ(A.aG.gaM(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.e6[a6&255]
v=D.e6[b0>>>8&255]
u=$.q0[8]
t=D.e6[a5>>>16&255]
s=$.q0[16]
r=D.e6[a4>>>24&255]
q=$.q0[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.e6[a4&255]
t=D.e6[a6>>>8&255]
v=D.e6[b0>>>16&255]
w=D.e6[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.e6[a5&255]
v=D.e6[a4>>>8&255]
t=D.e6[a6>>>16&255]
r=D.e6[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.e6[b0&255]
a5=D.e6[a5>>>8&255]
a4=D.e6[a4>>>16&255]
a6=D.e6[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.e6[p&255]
a6=D.e6[b0>>>8&255]
a4=D.e6[n>>>16&255]
a5=D.e6[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.e6[o&255]
a4=D.e6[p>>>8&255]
a7=D.e6[b0>>>16&255]
t=D.e6[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.e6[n&255]
a7=D.e6[o>>>8&255]
a5=D.e6[p>>>16&255]
v=D.e6[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.e6[b0&255]
a7=D.e6[n>>>8&255]
t=D.e6[o>>>16&255]
w=D.e6[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.e6[a6&255]^C.nn(D.e6[b0>>>8&255],24)^C.nn(D.e6[a5>>>16&255],16)^C.nn(D.e6[a4>>>24&255],8)^b5[a9][0]
o=D.e6[a4&255]^C.nn(D.e6[a6>>>8&255],24)^C.nn(D.e6[b0>>>16&255],16)^C.nn(D.e6[a5>>>24&255],8)^b5[a9][1]
n=D.e6[a5&255]^C.nn(D.e6[a4>>>8&255],24)^C.nn(D.e6[a6>>>16&255],16)^C.nn(D.e6[b0>>>24&255],8)^b5[a9][2]
b0=D.e6[b0&255]^C.nn(D.e6[a5>>>8&255],24)^C.nn(D.e6[a4>>>16&255],16)^C.nn(D.e6[a6>>>24&255],8)^b5[a9][3]
a4=D.yy[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.yy[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.yy[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.yy[o>>>8&255]
i=D.yy[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.yy[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.nZ(A.aG.gaM(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bN1.prototype={}
C.bN2.prototype={
gM(d){var w=this.a.length
return w},
ao7(){return B.r7(this.a,A.hT,null,null)}}
C.b9n.prototype={
uP(d){return C.hLK(d)}}
C.cpX.prototype={
Mm(d){var w=d.w,v=Math.max(1,A.k.dw(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.a9E(v,t+20,u+16,t,u,B.tN(d.x))},
nl(d){return!1}}
C.bNV.prototype={
cCh(d){if(this.b)throw B.V(B.bd("FontLoader is already loaded"))
this.c.push(d.bz(new C.bNW(),x.E))},
mE(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$mE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.V(B.bd("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$mE)
case 6:w=5
return B.b(p.fsz(f,r),$async$mE)
case 5:case 3:t.length===s||(0,B.L)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$mE,v)}}
C.av7.prototype={
a4(){return"SystemUiMode."+this.b}}
C.a7Y.prototype={
A(d,e){if(e==null)return!1
if(J.bM(e)!==B.b_(this))return!1
return e instanceof C.a7Y&&e.a===this.a},
gX(d){return B.bs(B.b_(this),B.wE(this.a),A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h,A.h)},
u(d){var w="<optimized out>#"
if(B.b_(this)===D.fyK)return"["+(w+B.e4(this.a))+"]"
return"[ObjectKey "+(w+B.e4(this.a))+"]"}}
C.aV6.prototype={
c0(d){var w=new C.aA_(!0,this.e,null,new B.df(),B.ci())
w.bZ()
w.scD(null)
return w},
c9(d,e){var w
x.cQ.a(e)
e.sys(0,!0)
w=this.e
if(!w.A(0,e.ak)){e.ak=w
e.aFr()}}}
C.aA_.prototype={
sys(d,e){return},
gpr(){var w=this.ab$
return w!=null},
gl0(){var w=this.ab$
return w!=null},
Mb(d){var w=d==null?B.h3k(null):d
w.sa4d(this.ak)
return w}}
C.a0m.prototype={
R(){return new C.aIo(B.aX(x.N))},
cPt(d){return this.d.$1(d)},
cNg(){return this.e.$0()}}
C.aIo.prototype={
a_(){this.a1()
this.OK()},
OK(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cNg(),$async$OK)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f45(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OK,v)},
Yt(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Yt=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.f49(t),q),q.k("J.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.f4a(t))
w=3
return B.b(C.an1(p),$async$Yt)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.f4b(t,s,p))
w=4
return B.b(t.OK(),$async$Yt)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Yt,v)},
a0E(d){return this.cn4(d)},
cn4(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a0E=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.f46(t))
s=J.q(d,"id")
w=3
return B.b(C.bYz(J.k(s==null?"":s)),$async$a0E)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.f47(t))
w=1
break}q=C.fZ9(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cPt(B.a([q],x.D)),$async$a0E)
case 4:if(t.c==null){w=1
break}t.m(new C.f48(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a0E,v)},
OJ(d,e){return this.bJ_(0,e)},
bJ_(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a6(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.f40(q),r,null,!0,!0,x.y),$async$OJ)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.f41(t))
s=s.h(e,"id")
w=4
return B.b(C.an0(J.k(s==null?"":s)),$async$OJ)
case 4:if(t.c==null){w=1
break}t.m(new C.f42(t))
w=5
return B.b(t.OK(),$async$OJ)
case 5:case 1:return B.h(u,v)}})
return B.i($async$OJ,v)},
cBk(d){var w=B.bi(d),v=w==null?null:w.bS()
if(v==null)return""
return A.ic[B.bG(v)-1]+" "+B.bQ(v)},
aPC(d,e){var w=null,v=B.m(e*0.3)
return B.p(w,B.X(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.NQ,A.n),w,e,w,w,w,w,w,e)},
aPB(d){return this.aPC(d,44)},
b5F(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.NQ:u,r=B.m(14),q=B.X(e,t?A.c:A.az,u,u,u,17),p=x.p
q=B.a([q,L.Iy,B.d(f,u,u,u,u,u,u,B.l(u,u,t?A.c:A.az,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.m(10)
A.d.v(q,B.a([L.Iy,B.p(u,B.d(""+g,u,u,u,u,u,u,B.l(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bvt,u,u,u)],p))}return B.E(B.aE(A.c4,B.di(u,B.A(q,A.m,u,A.bb,A.j,0,u,u),u,u,A.bc,new B.o(u,u,u,r,u,s,A.n),A.hX,u,u,u,A.vb,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f4f(this,d),u,u,u,u,u,u,!1,A.a8),1)},
cgS(d){var w,v,u,t,s,r,q=null,p=this.d.t(0,d.a),o=p?A.d6.j(0.14):D.X6,n=B.m(18),m=p?A.d6:A.dq
m=B.I(m,A.q,p?1.8:1)
w=this.aPB(A.pU)
v=B.d(d.b,q,1,A.a2,q,q,q,D.aPY,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.v(B.a([v,A.cS,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aQ_,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
v=p?D.NQ:q
u=p?q:B.I(A.b3,A.q,1.6)
r=p?D.bLe:q
return B.aE(q,B.di(q,B.A(B.a([w,A.bf,t,B.di(q,r,q,q,A.bc,new B.o(q,q,u,q,q,v,A.a6),A.fG,q,26,q,q,q,q,26)],s),A.m,q,A.e,A.j,0,q,q),q,q,A.bc,new B.o(o,q,m,n,q,q,A.n),A.fG,q,q,A.dc,A.bj,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f44(this,p,d),q,q,q,q,q,q,!1,A.a8)},
coC(d){var w,v,u,t,s,r=this,q=null,p=J.a6(d),o=p.h(d,"savedAt"),n=r.cBk(J.k(o==null?"":o))
o=B.m(18)
w=B.I(A.dq,A.q,1)
v=r.aPB(A.N2)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,D.aPY,q,q,q)
p=p.h(d,"slides")
p=B.t(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.v(B.a([u,A.cS,B.d(p+" slides"+t,q,q,q,q,q,q,D.aQ_,q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
p=r.b2j(A.hA,A.bt,"Bring it back",r.r?q:new C.f4c(r,d))
return B.p(q,B.A(B.a([v,A.bf,t,p,A.bp,r.b2j(A.e5,A.c7,"Delete",r.r?q:new C.f4d(r,d))],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(D.X6,q,w,o,q,q,A.n),q,q,q,A.dc,D.bq1,q,q,q)},
b2j(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hp(B.aE(w,B.p(w,B.X(d,v?A.b3:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a8),w,f,w,w)},
as1(d,e,f){var w=null
return new B.C(D.bp5,B.v(B.a([B.X(d,A.b3,w,w,w,46),A.ac,B.d(e,w,w,w,w,w,w,D.f5F,w,w,w),A.at,B.d(f,w,w,w,w,w,w,D.eZc,A.L,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.c8
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aI(d,A.bU,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.b3,i,i,B.m(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aPC(A.yl,46),A.bf,D.bwk],t)
if(j.r)s.push(D.e5T)
s.push(B.aH(i,i,i,i,A.NB,i,i,i,new C.f4i(d),i,i,i,i,i,i))
s=B.A(s,A.m,i,A.e,A.j,0,i,i)
r=A.c.j(0.05)
q=B.m(18)
p=B.I(A.dq,A.q,1)
o=J.a6(h)
q=B.a([A.S,u,new B.C(D.bsy,s,i),B.p(i,B.A(B.a([j.b5F(0,A.xX,"Save",j.a.c.length),j.b5F(1,A.Nh,"Saved",o.gM(h))],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.brC,A.eo,i,i,i)],t)
if(j.x!=null){u=(j.y?A.c7:A.bt).j(0.12)
s=B.m(14)
r=B.I((j.y?A.c7:A.bt).j(0.4),A.q,1)
p=j.y
n=p?A.N3:A.ee
n=B.X(n,p?A.c7:A.bt,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ab,B.E(B.d(m,i,i,i,i,i,i,A.a6W,i,i,i),1)],t),A.m,i,A.e,A.j,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bry,A.ix,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.f1K,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.aE(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.f4M,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.f4j(j,v),i,i,i,i,i,i,!1,A.a8))
s=B.a([B.A(s,A.m,i,A.e,A.j,0,i,i),A.S],t)
if(j.a.c.length===0)s.push(j.as1(A.pU,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.L)(r),++l)s.push(j.cgS(r[l]))
A.d.v(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.e5r)
else if(j.e==null)s.push(j.as1(A.akd,"Could not reach the database","Check the connection, then open this again."))
else if(o.gam(h))s.push(j.as1(A.oE,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gaf(h);r.C();)s.push(j.coC(r.gT(r)))
A.d.v(u,s)}q.push(new B.dq(1,A.cn,B.cz(u,i,X.ahk,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc22()
p=s?i:D.NQ
s=s?A.c.j(0.07):i
o=B.m(18)
n=u.a===0?i:B.a([new B.ac(0,A.G,A.b7.j(0.4),A.cx,18)],x.V)
u=u.a
m=u===0
k=B.X(A.xX,m?A.ja:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.C(D.bsa,B.aE(i,B.di(i,B.A(B.a([k,A.a6p,new B.dq(1,A.cn,B.f4(A.A,B.d(u,i,i,i,i,i,i,B.l(i,i,m?A.ja:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),A.f,A.eg),i)],t),A.m,i,A.bb,A.j,0,i,i),i,i,A.bc,new B.o(s,i,i,o,n,p,A.n),A.hX,i,54,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a8),i))}else q.push(A.S)
return B.p(i,B.bn(!0,B.v(q,A.m,i,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.aZW,i,i,i,i,i,i,i,i)}}
C.of.prototype={
ag(){return B.F(["id",this.a,"doc",this.b.ag(),"updatedAt",this.c.a6().ac()],x.N,x.z)}}
C.Y6.prototype={
R(){return new C.awZ(B.a([],x.k),B.f7(null,x.H))},
gdY(){return this.c}}
C.awZ.prototype={
a_(){this.a1()
this.OS()},
OS(){var w=0,v=B.j(x.H),u,t=this,s
var $async$OS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a1l(t.a.c),$async$OS)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cFj(t,s))
case 1:return B.h(u,v)}})
return B.i($async$OS,v)},
cuG(d){var w,v,u,t=this
d.c=new B.S(Date.now(),0,!1)
w=J.q9(t.d,new C.cFm(d))
v=w<0
if(v&&C.hIT(d))return t.f
u=t.d
if(v)J.pq(u,0,d)
else J.aF(u,w,d)
v=x.a
B.fPQ(new C.cFn(t),v)
return t.f=t.f.bz(new C.cFo(t,d),v).eU(new C.cFp())},
Ij(d,e,f){return this.caw(0,e,f)},
aXd(d,e){return this.Ij(0,e,!1)},
caw(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ij=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a5(s,!1).c8(B.e8(new C.cFi(t,e),!1,null,x.H)),$async$Ij)
case 3:w=4
return B.b(t.f,$async$Ij)
case 4:w=5
return B.b(t.OS(),$async$Ij)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Ij,v)},
aWu(d){var w=A.o.u(1000*Date.now()),v=d==null?D.drX:d
this.Ij(0,new C.of(w,v,new B.S(Date.now(),0,!1)),!0)},
c1y(){return this.aWu(null)},
acD(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$acD=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.cFq(),r,!1,!1,!0,null,!1,!1,x.g2),$async$acD)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.aWu(s)
case 1:return B.h(u,v)}})
return B.i($async$acD,v)},
Ii(d,e){return this.bIS(0,e)},
bIS(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ii=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.cFd(e),s,null,!0,!0,x.y),$async$Ii)
case 3:if(g!==!0){w=1
break}t.m(new C.cFe(t,e))
w=4
return B.b(t.f,$async$Ii)
case 4:w=5
return B.b(C.afT(t.a.c,e.a),$async$Ii)
case 5:w=6
return B.b(t.OS(),$async$Ii)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Ii,v)},
CY(d){return this.bB3(d)},
bB3(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$CY=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.cF9(d),r,!0,!0,!1,null,!1,!1,x.N),$async$CY)
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
return B.b(t.aXd(0,d),$async$CY)
case 9:w=5
break
case 7:w=10
return B.b(F.fZH(r,d.b,null),$async$CY)
case 10:w=5
break
case 8:w=11
return B.b(t.Ii(0,d),$async$CY)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$CY,v)},
bWk(){var w,v,u=null,t=[D.ds_,D.drY,D.drZ],s=new C.cFg(),r=B.m(26),q=x.V,p=B.a([new B.ac(0,A.G,A.d8.j(0.4),A.eT,24)],q),o=x.p,n=B.a([],o)
for(w=0;w<3;++w){v=new B.aT(999,999)
n.push(B.p(u,new B.x(D.dch[w],u,A.oh,u,u,u,u,u,u,u,u,u),A.f,u,u,new B.o(A.c.j(0.18),u,u,new B.bp(v,v,v,v),u,u,A.n),u,u,u,u,A.nW,u,u,u))}return B.p(u,B.A(B.a([B.E(B.v(B.a([D.fuf,A.N,B.bY(A.bz,n,A.bq,6,6),A.aQ,B.aE(u,B.p(u,D.eI8,A.f,u,u,new B.o(A.c,u,u,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.cJ,10)],q),u,A.n),u,u,u,u,U.ahI,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.cFf(this),u,u,u,u,u,u,!1,A.a8)],o),A.F,u,A.e,A.j,0,A.p),1),new B.a7(130,110,new B.an(A.A,u,A.aa,A.r,B.a([s.$3(t[0],-0.22,-30),s.$3(t[2],0.22,30),s.$3(t[1],0,0)],o),u),u)],o),A.m,u,A.e,A.j,0,u,u),A.f,u,u,new B.o(u,u,u,r,p,D.bTd,A.n),u,u,u,u,D.bsI,u,u,u)},
bB1(d){var w,v=null,u=d.b.d.length,t=B.m(6),s=B.a([new B.ac(0,A.G,A.w.j(0.5),A.cx,14)],x.V),r=x.p
s=B.p(v,B.bw(B.m(6),new B.an(A.W,v,A.b_,A.r,B.a([B.f4(A.A,F.anz(d.b),A.f,A.bR),D.ebl,B.ao(v,B.aE(v,B.p(v,D.bM0,A.f,v,v,D.b_R,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cF4(this,d),v,v,v,v,v,v,!1,A.a8),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.eWB,v,v,v)
w=u===1?"":"s"
return B.aE(v,B.v(B.a([new B.fG(0.6470588235294118,s,v),A.N,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.f1W,v,v,v)],r),A.F,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cF5(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cF6(this,d),v,v,v,v,v,v,!1,A.a8)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eC(B.a([new B.C(H.agc,B.hp(B.aE(s,B.p(s,A.amY,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ac(0,A.G,A.b7.j(0.5),A.J,12)],x.V),E.vN,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gc2O(),s,s,s,s,s,s,!1,A.a8),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.K,s,1,!0,s,0,!1,s,!1,E.mZ,s,s,s,!0,s,s,s,s,s,D.fuj,s,s,s,1,s,!0)
if(t.e)r=D.b3e
else{w=t.bWk()
v=B.a([D.fg4,A.ab],r)
if(J.cy(t.d)){u=B.m(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.eW2,s,s,s),A.f,s,s,new B.o(D.b7T,s,s,u,s,s,A.n),s,s,s,s,A.xF,s,s,s))}r=B.a([new B.nM(A5.Yd,new B.m4(w,s),s),new B.nM(D.bs4,new B.m4(B.A(v,A.m,s,A.e,A.j,0,s,s),s),s)],r)
if(J.cl(t.d))r.push(D.eO9)
else r.push(new B.nM(D.brA,B.Ow(new B.ok(new C.cFr(t),J.ad(t.d),!0,!0,!0,0,B.rO(),s),D.b2w),s))
r=B.vp(0,s,A.r,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c8(q,D.b6H,r,s,!1,!1,s,s)}}
C.Y4.prototype={
R(){return new C.awV(B.a([],x.bx))},
Tx(d){return this.d.$1(d)}}
C.aEg.prototype={}
C.awV.prototype={
b_7(d,e,f){var w=$.aw(),v=new B.ar(new B.bb(d,A.b4,A.aN),w),u=this.gaXc()
v.aN(0,u)
w=new B.ar(new B.bb(e,A.b4,A.aN),w)
w.aN(0,u)
return new C.aEg(v,w,f)},
DN(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a7(0)
v.x=B.cM(A.pI,new C.cEy(v))},
a_(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a1()
w=m.a.c.b
v=$.aw()
u=new B.ar(new B.bb(w.a,A.b4,A.aN),v)
t=m.gaXc()
u.aN(0,t)
m.d!==$&&B.aP()
m.d=u
u=new B.ar(new B.bb(w.b,A.b4,A.aN),v)
u.aN(0,t)
m.e!==$&&B.aP()
m.e=u
u=new B.ar(new B.bb(w.c,A.b4,A.aN),v)
u.aN(0,t)
m.f!==$&&B.aP()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.L)(u),++q){p=u[q]
o=new B.ar(new B.bb(p.a,A.b4,A.aN),v)
o.aN(0,t)
n=new B.ar(new B.bb(p.b,A.b4,A.aN),v)
n.aN(0,t)
r.push(new C.aEg(o,n,p.c))}if(r.length===0)r.push(m.b_7("Page 1","",""))},
q(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a7(0)
if(r.y){r.a.c.b=r.gp6()
q=r.a
q.Tx(q.c)}q=r.d
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
gp6(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mo(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rc(n,w,v,t,u)},
Aw(){var w=0,v=B.j(x.H),u=this,t
var $async$Aw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a7(0)
u.y=!1
u.a.c.b=u.gp6()
t=u.a
w=2
return B.b(t.Tx(t.c),$async$Aw)
case 2:return B.h(null,v)}})
return B.i($async$Aw,v)},
c2M(){this.m(new C.cEx(this))
this.DN()},
aWb(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cEA(w,d,v))
w.DN()},
c2N(d,e){var w=A.d.cB(this.w,e)
this.m(new C.cEI())
this.DN()
$.aW.x1$.push(new C.cEJ(w))},
Q2(d){return this.cgI(d)},
cgI(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Q2=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l3(80,1400,A.eG),$async$Q2)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Q2)
case 8:p=f
o=q.b.toLowerCase()
n=J.ahp(o,".png")?"image/png":"image/jpeg"
r.m(new C.cEB(d,n,p))
r.DN()
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
return B.i($async$Q2,v)},
xw(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$xw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hls(r,t.gp6()),$async$xw)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cEz(t,s))
t.DN()
case 1:return B.h(u,v)}})
return B.i($async$xw,v)},
ch_(d){var w,v=this,u=null,t=F.fwH(d.c)
if(t==null)return new B.bI(A.a3,u,u,B.hd(D.bFm,D.fix,new C.cED(v,d),u),u)
w=x.p
return new B.C(A.cC,new B.an(A.W,u,A.aa,A.r,B.a([B.bw(B.m(12),B.fL(t,A.A,u,u,A.cm,A.bR,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b2k(A.kR,new C.cEE(v,d)),A.bp,v.b2k(A.cB,new C.cEF(v,d))],w),A.m,u,A.e,A.j,0,u,u),u,u,u,6,6,u)],w),u),u)},
b2k(d,e){var w=null
return B.aG(!1,A.a1,!0,w,B.aL(!1,w,!0,new B.C(A.hx,B.X(d,A.c,w,w,w,18),w),A.cL,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.aX,0,w,w,A.cL,w,w,A.ag)},
Ik(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ik=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Aw(),$async$Ik)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.fZH(s,t.gp6(),new C.cEH(t)),$async$Ik)
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ik,v)},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=x.p,k=B.eC(B.a([new B.C(A.qU,B.hd(D.bK_,D.fov,n.gavG(),B.fv(m,m,m,m,m,m,m,m,m,m,m,A.bK,m,m,m,m,m,m,m,m,m,m,m,m,m,m)),m),B.aH(m,m,m,m,A.amX,m,m,m,new C.cEK(n,d),m,m,m,m,"Save",m)],l),m,m,!0,!0,E.Wj,m,1,m,m,m,!1,m,!1,E.mZ,m,m,m,!0,m,m,m,m,m,D.fjo,m,m,m,1,m,!0),j=Aw.aTO(O.la,A.c,Ae.Vd,A.o0,D.fk9,n.gc2L()),i=B.m(18),h=n.gavF(),g=B.a([new B.ac(0,A.G,A.w.j(0.4),A.jl,12)],x.V)
g=B.aE(m,B.p(m,new B.a7(92,142.1818181818182,B.f4(A.A,F.anz(n.gp6()),A.f,A.du),m),A.f,m,m,new B.o(m,m,m,m,g,m,A.n),m,m,m,m,m,m,m,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,h,m,m,m,m,m,m,!1,A.a8)
w=n.r
w===$&&B.c()
i=B.p(m,B.A(B.a([g,A.eB,B.E(B.v(B.a([D.fvO,A.at,B.d(F.fYd(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",m,m,m,m,m,m,D.f7n,m,m,m),A.S,B.dp(E.ame,E.aQK,h,B.bl(A.d8,m,m,m,m,m,m,m,m,m,m,m))],l),A.F,m,A.e,A.j,0,A.p),1)],l),A.m,m,A.e,A.j,0,m,m),A.f,m,m,new B.o(E.Wj,m,m,i,m,m,A.n),m,m,m,m,A.bj,m,m,m)
h=n.d
h===$&&B.c()
h=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),h,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Book title",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.og,!0,A.a4,m,A.am,m,m,m,m)
w=n.e
w===$&&B.c()
w=B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),w,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Subtitle (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)
g=n.f
g===$&&B.c()
g=B.a([i,A.aA,h,A.N,w,A.N,B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),g,m,m,m,m,m,2,B.br(m,new B.b4(4,B.m(12),A.dg),m,m,m,m,m,m,!0,m,m,m,m,m,m,A.c,!0,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,"Author (optional)",!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m),A.aQ],l)
for(i=n.w,v=0;v<i.length;v=t){h=i[v]
w=new B.aT(16,16)
u=new B.ay(O.la.j(0.18),1,A.q,-1)
t=v+1
s=B.aH(m,m,m,m,D.bIK,m,m,m,v===0?m:new C.cEL(n,v),m,m,m,m,"Move up",A.ca)
r=i.length
q=B.aH(m,m,m,m,D.bOY,m,m,m,v===r-1?m:new C.cEM(n,v),m,m,m,m,"Move down",A.ca)
r=r===1?m:new C.cEN(n,v)
p=new B.aT(12,12)
o=new B.aT(12,12)
g.push(B.p(m,B.v(B.a([new B.cn(A.aO,A.e,A.j,A.m,m,A.p,m,0,B.a([new B.x("Page "+t,m,D.f7V,m,m,m,m,m,m,m,m,m),A.b6,s,q,B.aH(m,m,m,m,B.X(A.e5,A.ox,m,m,m,18),m,m,m,r,m,m,m,m,"Remove page",A.ca)],l),m),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].a,m,m,m,m,m,2,new B.e2(m,m,m,"Title",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(p,p,p,p),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,1,m,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,A.cj,!0,A.a4,m,A.am,m,m,m,m),A.an,n.ch_(i[v]),B.aM(m,A.T,!1,m,!0,A.r,m,B.aN(),i[v].b,m,m,m,m,m,2,new B.e2(m,m,m,"Write here\u2026 long pages flow onto the next paper page",m,m,m,m,m,m,m,m,m,m,m,m,!0,!0,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.c,m,m,m,m,m,m,m,new B.b4(4,new B.bp(o,o,o,o),A.dg),!0,m,m,m,m),A.y,!0,m,!0,m,!1,m,A.ai,m,m,m,m,m,m,m,m,m,m,5,m,!1,"\u2022",m,m,m,m,m,!1,m,m,!1,m,!0,m,A.a9,m,m,m,m,m,m,m,m,m,m,m,m,!0,A.a4,m,A.am,m,m,m,m)],l),A.m,m,A.e,A.j,0,A.p),A.f,m,m,new B.o(E.mZ,m,new B.bO(u,u,u,u),new B.bp(w,w,w,w),m,m,A.n),m,m,new C.a7Y(h),A.e4,D.bqg,m,m,m))}return B.oh(!0,B.c8(k,E.aek,B.cz(g,m,D.bqG,m,m,A.ah,!1),m,!1,!1,j,m),new C.cEO(n),x.C)}}
C.awX.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.c7:E.mZ,q=B.m(16),p=B.m(16),o=s?A.ay.j(0.08):A.c.j(0.04)
s=s?A.ay.j(0.16):A.d8.j(0.22)
w=B.m(12)
v=x.p
return new B.C(A.eO,B.aG(!1,A.a1,!0,t,B.aL(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.X(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bf,B.E(B.v(B.a([B.d(u.d,t,t,t,t,t,t,B.l(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(u.e,t,t,t,t,t,t,D.aPj,t,t,t)],v),A.F,t,A.e,A.j,0,A.p),1),B.X(A.ex,r.j(0.6),t,t,t,t)],v),A.m,t,A.e,A.j,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bj,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.K,0,t,t,t,t,t,A.ag),t)}}
C.apH.prototype={
R(){return new C.aD2()}}
C.aD2.prototype={
a_(){this.a1()
this.Z5()},
br(d){this.bC(d)
if(d.c!=this.a.c)this.a0t()},
a0t(){var w=0,v=B.j(x.H),u=this,t
var $async$a0t=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.q()
w=2
return B.b(x.bq.b(t)?t:B.dP(t,x.H),$async$a0t)
case 2:u.d=null
if(u.c!=null)u.m(new C.e7E(u))
w=3
return B.b(u.Z5(),$async$a0t)
case 3:return B.h(null,v)}})
return B.i($async$a0t,v)},
Z5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Z5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d_(n,"http://")||J.d_(n,"https://")||J.d_(n,"data:")){o=B.XI(B.cw(n,0,null),new B.OT(!0))
r.d=o}else{o=B.fl("unsupported video ref")
throw B.V(o)}w=7
return B.b(o.i9(0).cM(0,A.pE),$async$Z5)
case 7:if(r.c==null){w=1
break}r.d.tb(!1)
r.m(new C.e7C(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.aa(m)
$.am.$1("[kiapo video] "+B.t(q))
if(r.c!=null)r.m(new C.e7D(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Z5,v)},
q(){var w=this.d
if(w!=null)w.q()
this.a2()},
c5p(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.h2(0)
w.m(new C.e7F(w))}else{v.pQ(0)
w.m(new C.e7G(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bH
n=B.m(8*n.d)
m=B.a([D.j7.j(0.92),D.Ko.j(0.95)],x.O)
w=B.I(A.bZ.j(0.55),A.q,1)
v=p.a
u=v.d
t=B.X(A.pX,A.bZ,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return B.c_(B.av(B.v(B.a([t,new B.a7(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.l(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),A.L,o,o)],x.p),A.m,o,A.e,A.Q,0,A.p),o,o,o),new B.o(o,o,w,n,o,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),A.bd)}if(p.f)return B.av(B.X(A.alw,A.az,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.b43
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.m(6*n.d)
m=B.a([B.f4(A.A,new B.a7(r,q,new B.zS(s,o),o),A.r,A.bR)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.av(B.p(o,B.X(A.iV,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.aE(o,B.bw(n,new B.an(A.W,o,A.b_,A.r,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc5o(),o,o,o,o,o,o,!1,A.a8)}}
C.xl.prototype={
a4(){return"NgmyHatiLayoutKind."+this.b}}
C.jk.prototype={}
C.acQ.prototype={
B(d){return B.oL(new C.dXw(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.ace.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.m(18),r=B.m(18),q=B.I(D.j7.j(t?0.35:0.4),A.q,1),p=t?D.KU:A.c,o=x.V,n=B.a([new B.ac(0,A.G,A.w.j(t?0.3:0.08),A.cx,14)],o),m=B.m(10),l=B.I(A.bZ.j(0.5),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],o)
w=this.c
o=B.E(B.p(u,new B.fG(0.5625,C.i0c(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aib,u,u,u,u),1)
m=D.j7.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.l(u,u,t?A.c:D.j7,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a1,!0,u,B.aL(!1,s,!0,B.p(u,B.v(B.a([o,B.p(u,B.v(B.a([l,A.cS,B.d(w.c,u,2,A.a2,u,u,u,B.l(u,u,t?A.az:D.bdP,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(u,u,new B.bO(new B.ay(m,1,A.q,-1),A.Y,A.Y,A.Y),u,u,u,A.n),u,u,u,u,D.ags,u,u,u)],v),A.aj,u,A.e,A.j,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.K,0,u,u,u,u,u,A.ag)}}
C.xo.prototype={
a4(){return"NgmyMarriageLayoutKind."+this.b}}
C.nC.prototype={}
C.bir.prototype={
Ze(d){var w=null
return new B.bI(A.a3,w,w,B.Dy(A.A,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.m(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
c5R(){return this.Ze(1)},
awk(d){var w=null,v=B.m(8),u=B.I(A.hV,A.q,0.9)
return B.p(A.A,B.d(d,w,w,w,w,w,w,B.l(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.acl,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.v(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dU(B.p(v,v,A.f,v,v,new B.o(v,v,B.I(A.hV,A.q,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.u(-8.36,0))],u),A.m,v,A.bb,A.j,0,v,v),A.at,B.d("HATI YA NDOA",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.l(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v),A.an,w.awk("TAARIFA ZA WANANDOA"),A.an,w.c5R(),A.cS,w.Ze(0.9),A.cS,w.Ze(0.7),A.N,w.awk("TAMKO LA MAKUBALIANO"),A.h_,w.Ze(1),A.cS,w.Ze(0.95),A.N,w.awk("MASHAHIDI"),A.b6,B.d("NGMY",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.l(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.m,v,A.e,A.j,0,A.p)}}
C.acT.prototype={
B(d){return B.oL(new C.ecT(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.aeA.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.m(18),o=B.m(18),n=B.I(A.aw.j(q?0.35:0.4),A.q,1),m=q?D.bdp:A.c,l=x.V,k=B.a([new B.ac(0,A.G,A.w.j(q?0.3:0.08),A.cx,14)],l),j=B.m(10),i=B.I(A.aw.j(0.5),A.q,1)
l=B.a([new B.ac(0,A.G,A.w.j(0.14),A.dE,6)],l)
w=this.c
v=C.fYI(w.a)
if(v==null)v=A.d.gL(D.Qj)
u=B.b0(v.f)
t=B.b0(v.r)
s=x.p
l=B.E(B.p(r,new B.fG(0.5625,new B.an(A.W,r,A.b_,A.r,B.a([B.bZ(0,B.fL(C.fYH(v.d),A.A,r,r,A.cm,A.bR,!0,r,!1,r,r),0,0,0),new B.C(A.ahb,new C.bir(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aib,r,r,r,r),1)
j=A.aw.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.l(r,r,q?A.c:Z.KV,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a1,!0,r,B.aL(!1,p,!0,B.p(r,B.v(B.a([l,B.p(r,B.v(B.a([i,A.cS,B.d(w.c,r,2,A.a2,r,r,r,B.l(r,r,q?A.az:D.b7c,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.F,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(r,r,new B.bO(new B.ay(j,1,A.q,-1),A.Y,A.Y,A.Y),r,r,r,A.n),r,r,r,r,D.ags,r,r,r)],s),A.aj,r,A.e,A.j,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.K,0,r,r,r,r,r,A.ag)}}
C.kQ.prototype={
a4(){return"NgmyMarriagePaperStyle."+this.b}}
C.a7r.prototype={}
C.Vf.prototype={
R(){var w=$.aw()
return new C.aDl(new B.cs(null,x.A),new B.ar(A.as,w),new B.ar(A.as,w),B.mx(0,null,null),A.d.gL(D.a25),D.dCh,B.a([],x.L),B.a([],x.gE))}}
C.aDl.prototype={
a_(){var w,v=this
v.a1()
v.w=v.a.c
v.z=new C.zf(C.fAA(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
w=x.a
C.fzw().bz(new C.ega(v),w)
$.qN().jw(0,"assets/images/ngmy_logo.png").bz(new C.egb(v),w).eU(new C.egc())},
q(){var w=this,v=w.e,u=$.aw()
v.U$=u
v.P$=0
v=w.f
v.U$=u
v.P$=0
w.r.q()
w.a2()},
agx(d){var w=null,v=this.c
if(v!=null)v.I(x.q).f.S(B.b2(w,w,w,w,w,A.r,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.U,w,w,w,w,w,w,w,w,w,w))},
IF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$IF=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l3(88,1600,A.eG),$async$IF)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$IF)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hlJ(m,p),$async$IF)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bCs(new B.pE(o,1),m),$async$IF)
case 10:if(r.c!=null)r.m(new C.efN(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.aa(k)
r.agx("Could not open that picture. "+B.t(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$IF,v)},
Wl(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Wl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hlJ(s,q),$async$Wl)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bCs(new B.pE(r,1),s),$async$Wl)
case 4:if(t.c!=null)t.m(new C.efJ(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Wl,v)},
ads(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$ads=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.efU(q))
t=4
q.a.toString
p=C.i4E()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$ads)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.efV(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.aa(i)
q.agx(B.t(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.efW(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ads,v)},
Zj(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$Zj=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.efP(q,i))
t=4
q.a.toString
p=C.i4D()
h=q.z
m=q.y
l=q.w
k=B.B(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$Zj)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.efQ(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.aa(g)
if(q.c!=null)q.m(new C.efR(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.efS(q))
$.aW.x1$.push(new C.efT(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zj,v)},
c66(d){this.m(new C.efO(this,d))},
E5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$E5=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.efL(q))
t=4
w=7
return B.b($.aW.gmz(),$async$E5)
case 7:w=8
return B.b(B.bN(A.n4,null,x.H),$async$E5)
case 8:k=$.aW.ak$.x.h(0,q.d)
p=k==null?null:k.gb8()
if(!(p instanceof B.pP))throw B.V("The page is not ready yet.")
w=9
return B.b(p.lW(1800/p.gY(0).a),$async$E5)
case 9:o=e
w=10
return B.b(o.hq(A.fX),$async$E5)
case 10:n=e
if(n==null)throw B.V("Could not make the picture.")
w=11
return B.b(A7.afW(J.eT(A.dD.gaM(n)),"ngmy_news.png","image/png"),$async$E5)
case 11:m=e
q.agx(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
q.agx(B.t(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.efM(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$E5,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aH(a2,a2,a2,a2,A.kT,a2,a2,a2,new C.eg1(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aH(a2,a2,a2,a2,D.bKv,a2,a2,a2,new C.eg2(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aH(a2,a2,a2,a2,A.oM,a2,a2,a2,a4?a1.gaYl():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eC(v,a2,a2,!0,!0,A.AF,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.eIh,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ac(0,A.G,A.w.j(0.6),A.eT,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fG(0.7142857142857143,B.f4(A.A,new B.ev(new C.b02(t,s,r,a1.x,a2),a1.d),A.f,A.du),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,D.Tn,a2,a2,a2)
t=a1.as?a2:a1.gc65()
t=B.a([B.E(B.dp(D.bLf,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cj,a2,a2,a2),t,B.bl(D.td,a2,a2,a2,A.c,A.fN,a2,a2,new B.b7(B.m(14),P.uP),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bw(B.m(10),B.fL(r,A.A,a2,a2,A.cm,A.bR,!1,48,!1,a2,48),A.aq)
A.d.v(t,B.a([A.av,r,B.aH(a2,a2,a2,a2,D.bI2,a2,a2,a2,a1.as?a2:a1.gbHt(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.m,a2,A.e,A.j,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,D.Tn,a2,a2,a2)
q=B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.e,a2,a2,a2,a2,a2,2,a1.aRs("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dm,!0,A.a4,a2,A.am,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.d72[o]
p.push(B.mF(a2,D.td,new B.x(n.a,a2,A.p6,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.eg3(a1,n),a2,a2,P.uP,a2))}p=B.bY(A.bz,p,A.bq,6,8)
m=a1.Q
m=B.bY(A.bz,B.a([D.fus,A.bf,B.j5(a2,a2,a2,D.feT,a2,new C.eg4(a1),m==="en",a2,a2,a2,a2),A.ab,B.j5(a2,a2,a2,D.feO,a2,new C.eg5(a1),m==="sw",a2,a2,a2,a2)],w),A.rM,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,D.Tn,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.dd(D.a25,0,B.dJ(10,"count",x.S),j),h=i.$ti,i=new B.bR(i,i.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aPW(g==null?h.a(g):g))}k=B.cz(k,a2,a2,a2,a2,A.aO,!1)
i=B.a([],w)
for(j=B.dd(D.a25,10,a2,j),h=j.$ti,j=new B.bR(j,j.gM(0),h.k("bR<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aPW(g==null?h.a(g):g))}j=B.cz(i,a2,a2,a2,a2,A.aO,!1)
i=a1.as?a2:a1.gc68()
h=B.m(18)
v=B.a([new B.ac(0,A.G,A.bA.j(0.4),A.J,18)],v)
v=B.a([u,A.aA,new B.C(A.cC,s,a2),t,A.aA,new B.C(A.cC,r,a2),q,A.N,p,A.S,m,A.aA,new B.C(A.cC,l,a2),new B.a7(a2,78,k,a2),A.N,new B.a7(a2,78,j,a2),A.aQ,B.aE(a2,B.p(A.A,B.A(B.a([D.bL9,A.ab,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fO,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.tZ,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a8)],w)
if(a4){u=B.a([A.e1,B.A(B.a([D.dmP,A.av,D.bwD],w),A.m,a2,A.e,A.j,0,a2,a2),A.N],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.L)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a7:A.a3
q=e?A.b7.j(0.35):D.td
p=new B.aT(16,16)
d=new B.ay(A.bF,1,A.q,-1)
u.push(new B.bI(r,a2,a2,B.p(a2,new B.x(f.b,a2,D.f5r,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.f,a2,A8.V1,new B.o(q,a2,new B.bO(d,d,d,d),new B.bp(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cC,A.ix,a2,a2,a2),a2))}u.push(A.an)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.cUS[o]
t.push(B.mF(a2,D.td,new B.x(a0,a2,A.IM,a2,a2,a2,a2,a2,a2,a2,a2,a2),A.hD,new C.eg6(a1,a0),a2,a2,P.uP,a2))}u.push(B.bY(A.bz,t,A.bq,6,8))
u.push(A.S)
t=B.E(B.aM(a2,A.T,!1,a2,!0,A.r,a2,B.aN(),a1.f,a2,a2,a2,a2,a2,2,a1.aRs("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ai,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.eg7(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.a9,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dm,!0,A.a4,a2,A.am,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gc67()
u.push(B.A(B.a([t,A.ab,B.Hq(A.yq,s,B.nw(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.m,a2,A.e,A.j,0,a2,a2))
u.push(A.aA)
t=a1.as?a2:a1.gaYl()
u.push(B.dp(A.oM,D.fq2,t,B.bl(A.cZ,a2,a2,a2,a2,A.Iw,a2,a2,new B.b7(B.m(16),A.Y),a2,a2,a2)))
A.d.v(v,u)}v=B.a([B.cz(v,a1.r,A.agY,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.m(20)
s=B.I(E.jO.j(0.5),A.q,1)
v.push(B.bZ(0,B.ek(B.av(B.p(a2,B.A(B.a([E.a6q,A.eB,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.iG,a2,a2,a2)],w),A.m,a2,A.e,A.Q,0,a2,a2),A.f,a2,a2,new B.o(E.Aw,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bsZ,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c8(a3,A.AF,new B.an(A.W,a2,A.aa,A.r,v,a2),a2,!1,!1,a2,a2)},
aRs(d){var w=null
return B.br(w,new B.b4(4,B.m(14),A.Y),w,A.eP,w,w,w,w,!0,w,w,w,w,w,w,D.td,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.IH,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aPW(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.m(12),q=B.b0(d.f),p=s?A.bA:A.bF
p=B.I(p,A.q,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b0(d.x),t,t,t,5,t,A.ld,t,t,t,t),A.h_],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b0(v).j(0.5),t,t,t,2,t,D.bpj,t,t,t,t))
w.push(A.cS)
w.push(new B.C(A.jf,B.d(d.b,t,1,A.a2,t,t,t,B.l(t,t,B.b0(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.aE(t,B.p(t,B.v(w,A.m,t,A.bb,A.j,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.jd,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.efK(this,d),t,t,t,t,t,t,!1,A.a8)}}
C.zf.prototype={
baz(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.zf(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cFM(d){var w=null
return this.baz(w,w,w,w,w,d,w,w,w,w)},
ag(){var w=this
return B.F(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aBK(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.cbO(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aV(g);v.C();){u=v.gT(v)
if(A.a.i(B.t(u)).length!==0)w.push(A.a.i(B.t(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fD(g,B.af("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.K(w,new C.cbM(),B.U(w).k("K<1,n>")).c_(0,new C.cbN())
t=B.B(w,w.$ti.k("J.E"))}else t=k
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
return this.baz(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gFg(d){return this.f}}
C.t9.prototype={
a4(){return"NewsLayout."+this.b}}
C.Bd.prototype={
a4(){return"NewsFrame."+this.b}}
C.ld.prototype={}
C.b02.prototype={
re(d,e,f,g,h,i,j){var w=null
return B.l(w,w,f==null?B.b0(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
aYn(d,e,f,g){return this.re(d,e,null,1.25,f,A.bl,g)},
Po(d,e,f,g,h){return this.re(d,e,f,1.25,g,A.bl,h)},
awq(d,e,f,g,h){return this.re(d,e,null,f,g,A.bl,h)},
awp(d,e,f,g,h){return this.re(d,e,f,g,0,A.bl,h)},
aYp(d,e,f,g,h){return this.re(d,e,null,f,0,g,h)},
c6c(d,e,f,g,h,i){return this.re(d,e,f,g,0,h,i)},
awo(d,e,f,g){return this.re(d,e,null,f,0,A.bl,g)},
adv(d,e,f){return this.re(d,e,null,f,0,A.bl,A.cN)},
aYo(d,e,f,g,h){return this.re(d,e,f,g,0,h,A.cN)},
c6b(d,e,f,g){return this.re(d,e,null,f,0,g,A.cN)},
c6a(d,e,f,g){return this.re(d,e,f,g,0,A.bl,A.cN)},
adw(d,e,f,g,h,i){return this.re(d,e,f,g,h,A.bl,i)},
aYm(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.kr(new B.ep(d,u,u,A.cO,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a4,A.cg,new B.jq(1),u,u,h,u,A.ce,u)
v.BE(g)
if(!v.b.a.c.gaDn())return w
w-=2}return j},
adt(d,e,f,g,h,i,j,k){return this.aYm(d,e,f,g,h,i,j,k,A.bl)},
ayy(d,e,f){var w=null,v=d==null?B.b0(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.v(t,B.a([new B.a7(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.v(t,A.m,w,A.e,A.j,0,A.p)},
ayx(d){return this.ayy(null,!1,d)},
agl(d,e){return this.ayy(null,d,e)},
cnL(d,e){return this.ayy(d,!1,e)},
gb_v(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaU1(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Of(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.adt(w.gaU1(),u,A.P,d,g,h,i,1.02)
return B.d(w.gaU1(),v,g,A.a2,v,v,v,w.awp(u,t,f,1.02,A.P),e,v,v)},
aU6(d){return this.Of(d,A.L,null,2,78,30)},
aaV(d,e,f,g,h){return this.Of(d,e,null,f,g,h)},
bWc(d,e,f,g,h){return this.Of(d,A.L,e,f,g,h)},
bWb(d,e,f){return this.Of(d,A.L,null,e,f,30)},
Rj(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bH
w=v.d.as
return new B.C(A.kk,B.d(s,u,g,A.a2,u,u,u,v.aYo(w,v.aYm(t,w,A.cN,d,g,h,15,1.2,A.cF),f,1.2,A.cF),e,u,u),u)},
b5l(d){return this.Rj(d,A.L,null,3,24)},
aA2(d,e,f,g){return this.Rj(d,e,null,f,g)},
cv9(d,e,f){return this.Rj(d,A.L,e,3,f)},
b5m(d,e){return this.Rj(d,e,null,3,24)},
cv7(d,e){return this.Rj(d,A.L,null,3,e)},
cv8(d,e,f){return this.Rj(d,e,null,3,f)},
aq3(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.C(A.fU,B.d(u.toUpperCase(),v,v,v,v,v,v,w.Po("Roboto",12,d==null?B.b0(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b0(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.m,v,A.e,A.j,0,v,v)},
Nc(){return this.aq3(null,!0)},
aq2(d){return this.aq3(null,d)},
bDn(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bH
return new B.C(A.hY,new B.a7(d,w,B.d(v,w,2,A.a2,w,w,w,this.c6b(this.d.as,13.5,1.2,A.cF),e,w,w),w),w)},
vl(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.S(Date.now(),0,!1),i=m.gb_v(),h=A.o.an(j.by(B.c1(B.bz(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.hTf(Math.max(1,B.bz(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.aYn(k,12,1.2,A.P),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.adt(i,v,A.P,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.adt(i.toUpperCase(),v,A.P,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b0(h.x)
h=h.ch?B.b0(h.f):A.c
s=x.p
return B.v(B.a([B.p(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eC,l,l,l,m.adw(v,u*0.84,h,1,1,A.P),l,l,l),1)],s),A.m,l,A.e,A.j,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.N,B.A(B.a([B.d(C.bBI(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.m,l,A.hB,A.j,0,l,l),A.an,m.agl(!0,3)],s),A.m,l,A.e,A.j,0,A.p)
case"split":h=h.x
w=x.p
return B.v(B.a([B.A(B.a([B.p(l,l,A.f,B.b0(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eB,B.E(B.d(i,l,1,A.eC,l,l,l,m.awo(v,u*0.9,1,A.P),l,l,l),1)],w),A.m,l,A.e,A.j,0,l,l),A.S,B.A(B.a([B.d(C.bBI(j),l,l,l,l,l,l,m.Po(k,13,B.b0(h),0.6,A.P),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.m,l,A.hB,A.j,0,l,l),A.N,m.cnL(B.b0(h),3)],w),A.m,l,A.e,A.j,0,A.p)
case"logo":r=a0?52:64
w=m.gb_v()
v=B.d("NGMY",l,l,l,l,l,l,m.awq(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b0(h.x)
p=B.m(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.v(B.a([B.A(B.a([v,A.ab,B.eG(A.A,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.re(k,r*0.72,o,1.05,-0.5,A.cF,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b6,new B.dq(1,A.cn,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.adw(k,12.5,B.b0(h).j(0.85),1.3,1.2,A.P),A.dM,l,l),l)],n),A.m,l,A.e,A.j,0,l,l),A.N,B.p(l,l,A.f,B.b0(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.m,l,A.e,A.j,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l)
t=m.agl(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.awo(v,u,1,A.P),A.L,l,l)
q=a0?4:8
return B.v(B.a([w,A.at,t,new B.a7(l,s,l,l),v,new B.a7(l,q,l,l),m.agl(!0,1.4),A.at,B.d(C.bBI(j).toUpperCase(),l,l,l,l,l,l,f,A.L,l,l),A.at,m.ayx(3)],h),A.m,l,A.e,A.j,0,A.p)
default:h=x.p
return B.v(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.awq(v,u,1,3,A.P),A.L,l,l),A.N,m.agl(!0,1.2),A.at,B.A(B.a([B.d(C.bBI(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.m,l,A.hB,A.j,0,l,l),A.at,m.ayx(3)],h),A.m,l,A.e,A.j,0,A.p)}},
ac1(d){return this.vl(d,!1)},
adu(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b0(this.d.x):e,s=B.m(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.adw("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
c69(d,e){return this.adu(d,null,e,null)},
aW3(d){var w=null,v=new B.S(Date.now(),0,!1),u=A.o.F(B.dj(v),12)===0?12:A.o.F(B.dj(v),12),t=B.b0(this.d.w).j(0.75),s=this.awp("Roboto",15,t,1,A.cv),r=B.X(E.ajA,t,w,w,w,18),q=A.a.ap(A.oQ[B.bG(v)-1],0,3),p=A.a.aT(A.o.u(B.fY(v)),2,"0"),o=B.dj(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ab,B.d(q+" "+B.bQ(v)+", "+B.bz(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.fJ,w,w,w,1),B.X(d,t,w,w,w,19),A.ab,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
av8(){return this.aW3(A.mr)},
b2y(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.adw("Roboto",this.adt(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
ayB(d,e,f){return this.b2y(d,e,f,30)},
aA5(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bH
return new B.C(A.va,B.d(v,w,e,A.a2,w,w,w,this.c6a("Roboto",f,B.b0(this.d.w).j(0.88),1.35),w,w,w),w)},
b5q(d){return this.aA5(d,3,22)},
cvk(d,e){return this.aA5(d,e,22)},
tu(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fL(r,A.A,s,s,A.cm,A.bR,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.D7(D.bvK,w,s)
if(v==="sepia")w=new B.D7(D.bvJ,w,s)}else{r=this.d
v=r.w
u=B.b0(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.av(B.X(A.xS,B.b0(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(B.c_(s,new B.o(s,s,s,s,s,new B.bS(A.A,0.95,A.x,s,0,B.a([A.K,A.Wf.j(0.38)],x.O),s,s),A.n),A.bd))
return new B.a7(d,e,new B.an(A.W,s,A.b_,A.r,v,s),s)},
qk(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=l.d
switch(j.e.a){case 1:j=j.w
w=B.I(B.b0(j),A.q,3)
j=B.I(B.b0(j),A.q,1)
return B.p(k,B.p(k,l.tu(d-24,e-24),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,k,k,k,A.eo,k,k,k),A.f,k,k,new B.o(k,k,w,k,k,k,A.n),k,e,k,k,A.lL,k,k,d)
case 2:w=B.a([new B.ac(0,A.G,A.w.j(0.35),D.e1X,14)],x.V)
v=l.tu(d-28,e-28-58)
u=A.a.i(l.c.f)
if(u.length===0)u="NGMY"
return B.eG(A.A,-0.035,B.p(k,B.v(B.a([v,B.E(B.av(B.d(u,k,2,A.a2,k,k,k,l.aYo(j.as,13.5,D.b8H,1.1,A.cF),A.L,k,k),k,k,k),1)],x.p),A.m,k,A.e,A.j,0,A.p),A.f,k,k,new B.o(D.bbO,k,k,k,w,k,A.n),k,e,k,k,D.bqB,k,k,d),k)
case 3:w=B.m(30)
j=B.I(B.b0(j.x),A.q,5)
return B.p(k,B.bw(B.m(25),l.tu(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,w,k,k,A.n),k,e,k,k,k,k,k,d)
case 4:t=Math.min(d,e)
w=B.I(B.b0(j.x),A.q,6)
j=B.b0(j.f)
v=t-10
return new B.a7(d,e,B.av(B.p(k,B.hS(l.tu(v,v),A.aq),A.f,k,k,new B.o(j,k,w,k,k,k,A.a6),k,t,k,k,A.lL,k,k,t),k,k,k),k)
case 5:j=B.a([new B.ac(0,A.G,A.w.j(0.3),D.e1N,10)],x.V)
return B.eG(A.A,0.025,new B.a7(d,e,new B.an(A.W,k,A.aa,A.f,B.a([B.bZ(0,B.p(k,l.tu(d-18,e-18),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,k,k,k,A.qX,k,k,k),0,0,0),B.ao(k,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,-18,k,-10,k),B.ao(-10,B.eG(A.A,-0.6,B.p(k,k,A.f,A.bK.j(0.85),k,k,k,26,k,k,k,k,k,90),k),k,k,k,-18,k,k)],x.p),k),k),k)
case 6:j=B.b0(j.x)
return new B.a7(d,e,B.b3(B.nr(l.tu(d,e),A.aq,D.fO0),new C.bbB(j,k),k,k,A.au),k)
case 7:j=x.p
w=B.a([l.tu(d-16,e-44)],j)
for(v=[!0,!1],u=d/34,s=0;s<2;++s){r=v[s]
q=r?-18:k
p=r?k:-18
o=B.a([],j)
for(n=0;n<Math.max(6,A.k.bt(u));++n){m=new B.aT(2,2)
o.push(B.p(k,k,A.f,k,k,new B.o(A.bS,k,k,new B.bp(m,m,m,m),k,k,A.n),k,10,k,k,k,k,k,14))}w.push(new B.cL(0,q,0,p,k,k,new B.cn(A.aO,A.q0,A.j,A.m,k,A.p,k,0,o,k),k))}return B.p(k,new B.an(A.W,k,A.b_,A.r,w,k),A.f,A.e9,k,k,k,e,k,k,D.bv0,k,k,d)
case 8:w=d/2
v=B.wM(A.hd,new B.aT(w,w))
j=B.I(B.b0(j.x),A.q,5)
w-=5
return B.p(k,B.bw(B.wM(A.hC,new B.aT(w,w)),l.tu(d-10,e-10),A.aq),A.f,k,k,new B.o(k,k,j,v,k,k,A.n),k,e,k,k,k,k,k,d)
case 9:j=B.a([new B.ac(0,A.G,A.w.j(0.35),A.fM,22)],x.V)
return B.p(k,l.tu(d-20,e-20),A.f,k,k,new B.o(A.c,k,k,k,j,k,A.n),k,e,k,k,A.bT,k,k,d)
case 10:return new B.a7(d,e,B.nr(l.tu(d,e),A.aq,D.fU3),k)
case 0:j=B.I(B.b0(j.w),A.q,2.4)
return B.p(k,l.tu(d-14,e-14),A.f,k,k,new B.o(k,k,j,k,k,k,A.n),k,e,k,k,A.eo,k,k,d)}},
aNx(d,e){return this.d.e===D.QX?A.bH:this.bDn(d,e)},
VU(d){return this.aNx(d,A.L)},
gazn(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
azm(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
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
if(m.length!==0&&w.length===0)q.push(B.E(B.av(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.aYp(v.Q,19,1.15,A.cF,A.P),A.L,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.Po("Roboto",12.5,B.b0(t),1.2,A.u),n,n,n))
if(p)r.push(A.at)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.adv(v.as,13,1.25),n,n,n),1))
A.d.v(q,r)}return B.p(n,B.jv(B.v(q,A.F,n,A.e,A.j,0,A.p),A.r,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bj,n,n,d)},
gcef(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
a8E(d,e,f,g){return B.cp(new C.cbP(this,e,d,f,g))},
a8D(d){return this.a8E(d,22,!0,18)},
W4(d,e){return this.a8E(d,22,!0,e)},
aOz(d,e,f){return this.a8E(d,22,e,f)},
bFo(d,e,f){return this.a8E(d,e,!0,f)},
b8h(d,e,f,g){return B.cp(new C.cbQ(this,e,d,g,!0,f))},
cd3(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.v(B.a([k.ac1(824),A.aA,k.aU6(824),k.b5l(824),A.N,k.Nc(),A.ac,B.av(k.qk(824,360),j,j,j),k.VU(824),A.ac,B.E(k.a8D(3),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 1:w=x.p
return B.v(B.a([k.ac1(824),A.aQ,new B.a7(j,350,B.A(B.a([new B.a7(440,j,B.v(B.a([k.aaV(440,A.bg,3,62,26),k.aA2(440,A.bg,2,20),A.b6,k.aq3(B.b0(h.x),!1)],w),A.F,j,A.e,A.j,0,A.p),j),A.Ix,B.v(B.a([k.qk(362,310),k.VU(362)],w),A.m,j,A.e,A.j,0,A.p)],w),A.F,j,A.e,A.j,0,j,j),j),A.S,k.ayx(2),A.ac,B.E(k.a8D(3),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 2:w=k.vl(824,!0)
v=B.b0(h.x)
u=h.ch
t=x.p
s=B.a([k.bWc(788,u?B.b0(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cv9(788,u?B.b0(h.f):A.c,22))
v=B.p(j,B.v(s,A.m,j,A.e,A.j,0,A.p),A.f,v,j,j,j,j,j,j,A.B1,j,j,j)
u=B.a([B.av(k.qk(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.QX){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.awp(i,14,A.c,1.15,A.P),j,j,j),A.f,h,j,j,j,j,j,j,A.lJ,j,j,j),j,j,0,0,j,j))}return B.v(B.a([w,A.ac,v,A.ac,new B.an(A.W,j,A.aa,A.r,u,j),A.N,k.Nc(),A.S,B.E(k.W4(2,21),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 3:h=k.vl(824,!0)
w=k.qk(824,560)
v=B.a([A.K,A.w.j(0.85)],x.O)
u=x.p
return B.v(B.a([h,A.ac,new B.an(A.b5,j,A.aa,A.r,B.a([w,B.ao(0,B.p(j,k.Of(780,A.bg,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a8(A.b0,A.b5,A.x,v,j,j),A.n),j,j,j,j,D.bth,j,j,j),j,j,0,0,j,j)],u),j),k.b5m(824,A.bg),A.N,k.Nc(),A.S,B.E(k.a8D(3),1)],u),A.aj,j,A.e,A.j,0,A.p)
case 4:h=x.p
return B.v(B.a([k.ac1(824),A.aA,k.aU6(824),k.b5l(824),A.N,k.Nc(),A.ac,B.E(k.b8h(3,300,B.v(B.a([k.qk(300,300),k.VU(300)],h),A.m,j,A.e,A.j,0,A.p),360),1)],h),A.aj,j,A.e,A.j,0,A.p)
case 5:w=k.vl(824,!0)
v=x.p
u=B.v(B.a([k.aaV(440,A.bg,3,62,26),k.aA2(440,A.bg,2,20),A.b6,k.aq2(!1)],v),A.F,j,A.e,A.j,0,A.p)
return B.v(B.a([w,A.by,new B.a7(j,400,B.A(B.a([new B.a7(440,j,u,j),A.aNm,new B.C(A.hY,k.qk(364,h.e===D.QX?400:330),j)],v),A.F,j,A.e,A.j,0,j,j),j),A.aA,B.E(k.W4(2,21),1)],v),A.aj,j,A.e,A.j,0,A.p)
case 6:return B.v(B.a([k.ac1(824),A.ac,k.bWb(824,2,70),k.cv7(824,21),A.N,k.Nc(),A.ac,B.E(k.b8h(3,340,B.av(k.qk(340,340),j,j,j),350),1)],x.p),A.aj,j,A.e,A.j,0,A.p)
case 7:w=k.vl(824,!0)
v=B.b0(h.x)
u=Date.now()
u=C.bBI(new B.S(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.Po(i,13,h.ch?B.b0(h.f):A.c,1.2,A.u),A.L,j,j),A.f,v,j,j,j,j,j,j,A.bj,j,j,j),A.aA],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.aYp(h.Q,24,1.15,A.cF,A.P),j,j,j))
v.push(A.b6)
if(k.gazn())v.push(k.azm(230,250))
return B.v(B.a([w,A.aA,B.E(B.A(B.a([new B.a7(230,j,B.v(v,A.aj,j,A.e,A.j,0,A.p),j),B.p(j,j,A.f,B.b0(h.w),j,j,j,j,j,A.agq,j,j,j,1.2),new B.a7(570,j,B.v(B.a([k.aaV(570,A.bg,3,62,28),k.cv8(570,A.bg,20),A.N,k.aq2(!1),A.N,B.av(k.qk(570,330),j,j,j),k.VU(570),A.S,B.E(k.aOz(2,!1,17),1)],t),A.aj,j,A.e,A.j,0,A.p),j)],t),A.F,j,A.e,A.j,0,j,j),1)],t),A.aj,j,A.e,A.j,0,A.p)
case 8:w=k.vl(824,!0)
v=h.ch
u=v?B.b0(h.x):B.b0(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.Po(i,13,v?A.w:B.b0(h.x),3,A.u),j,j,j)
s=x.p
return B.v(B.a([w,A.ac,B.p(j,B.v(B.a([t,A.an,k.Of(788,A.bg,v?A.w:B.b0(h.f),2,72,30)],s),A.F,j,A.e,A.j,0,A.p),A.f,u,j,j,j,j,j,j,D.brD,j,j,j),k.b5m(824,A.bg),A.S,B.av(k.qk(824,310),j,j,j),k.VU(824),A.N,k.Nc(),A.S,B.E(k.a8D(3),1)],s),A.aj,j,A.e,A.j,0,A.p)
case 10:w=x.p
return B.v(B.a([k.vl(824,!0),A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([k.qk(824,430),B.ao(18,k.c69(k.c.b,17),j,j,18,j,j,j)],w),j),A.by,k.ayB(824,3,66),k.b5q(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.av8(),A.aA,B.E(k.W4(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 11:h=h.x
w=x.p
return B.v(B.a([k.vl(824,!0),A.by,new B.a7(j,500,B.A(B.a([new B.a7(410,j,B.v(B.a([k.adu(k.c.b,B.b0(h).j(0.14),15,B.b0(h)),A.aQ,k.b2y(410,4,58,28),k.aA5(410,6,20),A.b6],w),A.F,j,A.e,A.j,0,A.p),j),U.aNn,k.qk(390,500)],w),A.F,j,A.e,A.j,0,j,j),j),A.aA,k.av8(),A.aQ,B.E(k.W4(2,18),1)],w),A.aj,j,A.e,A.j,0,A.p)
case 12:w=k.vl(824,!0)
v=k.qk(824,420)
u=B.hvX(-0.25)
t=B.b0(h.x)
s=B.a([new B.ac(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.v(B.a([w,A.aQ,new B.an(A.W,j,A.aa,A.r,B.a([v,B.ao(22,B.fs(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.c6c(i,30,A.c,1,A.cF,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.btx,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.by,k.ayB(824,3,62),k.b5q(824),A.ac,B.p(j,j,A.f,B.b0(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.ac,k.aW3(A.lk),A.aA,B.E(k.W4(2,18),1)],r),A.aj,j,A.e,A.j,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.vl(824,!0)
u=h.w
t=x.p
w=B.a([k.qk(824,380),B.ao(j,k.adu(w.b,B.b0(u).j(0.85),15,B.b0(h.f)),j,j,16,j,16,j)],t)
s=k.ayB(824,2,60)
r=k.cvk(824,2)
p=k.av8()
o=B.E(k.aOz(2,!1,18),1)
n=B.I(B.b0(u).j(0.18),A.q,1)
m=B.m(18)
h=h.x
l=B.b0(h).j(0.05)
return B.v(B.a([v,A.aQ,new B.an(A.W,j,A.aa,A.r,w,j),A.aQ,s,r,A.S,p,A.aA,o,A.ac,B.p(j,B.A(B.a([B.bw(B.m(14),k.tu(150,104),A.aq),A.od,B.E(B.v(B.a([k.adu("RELATED",B.b0(h).j(0.14),12,B.b0(h)),A.N,B.d(q,j,2,A.a2,j,j,j,k.awo(i,19,1.15,A.H),j,j,j)],t),A.F,j,A.e,A.Q,0,A.p),1),B.X(A.ex,B.b0(u).j(0.6),j,j,j,30)],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bj,j,j,j)],t),A.aj,j,A.e,A.j,0,A.p)
case 9:return B.v(B.a([k.vl(824,!0),A.by,k.aaV(824,A.bg,3,62,30),k.aA2(824,A.bg,2,22),A.S,k.aq2(!1),A.S,B.av(k.qk(824,330),j,j,j),k.aNx(824,A.bg),A.aQ,B.E(k.bFo(2,40,21),1)],x.p),A.aj,j,A.e,A.j,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bZ(0,B.c_(s,new B.o(s,s,s,s,s,new B.a8(A.ax,A.aC,A.x,B.a([B.b0(p),B.b0(q.r)],x.O),s,s),A.n),A.bd),0,0,0)],o)
if(q.ax)n.push(B.bZ(0,B.b3(s,s,s,new C.b86(B.b0(q.w),s),A.au),0,0,0))
w=q.w
n.push(new B.C(D.bu2,B.v(B.a([B.E(t.cd3(),1),A.N,B.p(s,s,A.f,B.b0(w),s,s,s,1.4,s,s,s,s,s,s),A.h_,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.aYn(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.Po(r,11,B.b0(q.x),1.4,A.u),s,s,s)],o),A.m,s,A.hB,A.j,0,s,s)],o),A.aj,s,A.e,A.j,0,A.p),s))
v=B.b0(w)
n.push(B.bZ(0,B.e1(B.b3(s,s,s,new C.bqI(v.j(q.ch?0.07:0.06),s),A.au),!0,s),0,0,0))
p=B.b0(p).j(0.75)
v=B.I(B.b0(w).j(0.5),A.q,1.2)
u=B.m(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.hS(B.fL(q,A.A,s,s,A.cm,A.bR,!1,30,!1,s,30),A.aq))
else o.push(B.X(A.mr,B.b0(w),s,s,s,28))
o.push(A.ab)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.awq(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,B.e1(B.dc(B.p(s,B.A(o,A.m,s,A.e,A.Q,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bv8,s,s,s),0.6),!0,s),s,s,s,40,s,s))
return new B.a7(900,1260,B.jv(new B.an(A.W,s,A.aa,A.r,n,s),A.r,s),s)}}
C.bbC.prototype={
j0(d){return C.hb7(d)},
jK(d){return!1}}
C.bbB.prototype={
a5(d,e){var w,v=C.hb7(e)
$.W()
w=B.M()
w.r=this.b.gp(0)
w.b=A.ae
w.c=6
return d.aO(v,w)},
ar(d){return!d.b.A(0,this.b)}}
C.btd.prototype={
j0(d){var w,v,u,t,s,r,q,p,o=new B.eL()
o.dB(3)
w=$.W()
v=B.a([],x.v)
u=new B.aO(w.r,A.ap,null,null,v)
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
jK(d){return!1}}
C.b86.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=new B.eL()
k.dB(7)
$.W()
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
w.saq(new B.bS(A.A,0.5,A.x,l,0,B.a([A.Kp.j(0.13),A.K],v),l,l).av(0,B.bT(new B.u(q,p),m)))
n=w.H()
s.drawCircle(q,p,m,n)
n.delete()}w.saq(l)},
ar(d){return!1}}
C.bqI.prototype={
a5(d,e){var w,v,u=null,t=e.a,s=B.i1(u,u,u,u,B.dn(u,u,u,u,u,u,u,u,u,B.l(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a4,A.cg,u,A.eh,A.ce)
s.eI()
w=d.a
J.by(w.save())
w.translate(t/2,e.b*0.52)
d.iZ(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a5(d,new B.u(-v/2,-t.gbc(t)/2))
w.restore()},
ar(d){return!d.b.A(0,this.b)}}
C.Vi.prototype={
R(){return new C.aDp()}}
C.aDp.prototype={
a_(){var w=this
w.a1()
B.fXA(w.a.c,null).bz(new C.ehl(),x.g7).bz(new C.ehm(w),x.a)
w.a.toString},
gaMm(){var w=D.aud[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gawr(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaMm()
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
Zl(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$Zl=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.eh8(r))
t=4
q=r.gawr()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.W()
n=new B.qT()
m=B.D5(n,null)
i=B.M()
i.Q=A.fV
m.wg(g,q,new B.a9(0,0,0+p,0+o),i)
w=7
return B.b(n.pB().z7(J.h0F(p),J.h0F(o)),$async$Zl)
case 7:l=e
w=8
return B.b(l.hq(A.fX),$async$Zl)
case 8:k=e
j=r.c
if(j!=null){j=B.a5(j,!1)
i=k
i.toString
j.O(J.eT(J.vg(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.eh9(r))
r.c.I(x.q).f.S(D.eQK)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Zl,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aH(s,s,s,s,A.kT,s,s,s,new C.ehf(d),s,s,s,s,s,s),p=x.p
q=B.eC(B.a([B.bK(!1,D.fsy,s,s,!0,s,s,t.y||r==null?s:t.gc6d(),s,s)],p),s,s,!0,!0,A.AF,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.fwq,s,s,s,1,s,!0)
if(r==null)p=A.lB
else{w=B.E(new B.C(A.bQ,B.av(new B.fG(t.gaMm(),B.cp(new C.ehg(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.C(A.jd,B.j5(s,s,s,new B.x(D.aud[u].a,s,E.aP8,s,s,s,s,s,s,s,s,s),s,new C.ehh(t,u),t.e===u,s,s,s,s),s))
p=B.v(B.a([w,B.p(s,B.bn(!0,B.v(B.a([new B.a7(s,40,B.cz(v,s,s,s,s,A.aO,!1),s),B.A(B.a([D.bLS,B.E(B.kX(s,s,s,6,1,new C.ehi(t),t.f),1),D.bLu],p),A.m,s,A.e,A.j,0,s,s),D.fpX,A.an,B.bK(!1,D.fpH,s,s,!0,s,s,new C.ehj(t,d),s,s)],p),A.m,s,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!1),A.f,D.Wt,s,s,s,s,s,s,D.bqZ,s,s,s)],p),A.m,s,A.e,A.j,0,A.p)}return B.c8(q,A.AF,p,s,!1,!1,s,s)}}
C.bb8.prototype={
a5(d,e){var w
$.W()
w=B.M()
w.Q=A.cm
return d.wg(this.b,this.c,new B.a9(0,0,0+e.a,0+e.b),w)},
ar(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a_n.prototype={
R(){var w=$.aw(),v=x.A
return new C.aEM(new B.ar(A.as,w),new B.ar(new B.bb("NGMY",A.b4,A.aN),w),new B.cs(null,v),new B.cs(null,v),A.d.gL(D.a2D),"quote"+1000*Date.now(),B.a([],x.t),B.aX(x.S),A.L)}}
C.os.prototype={}
C.aEM.prototype={
gaUe(){var w,v,u=this
if(u.p1)w=new B.vx(1,u.p2,0.9,u.p3).iy().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.k.V(u.ok*255),0,255)<<24|w)>>>0},
a_(){var w=this
w.a1()
w.a.toString
w.p4=null
$.aW.x1$.push(new C.eQH(w))},
q(){var w=this.d,v=$.aw()
w.U$=v
w.P$=0
w=this.e
w.U$=v
w.P$=0
this.a2()},
Y0(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$Y0=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qN().jw(0,"assets/images/ngmy_logo.png"),$async$Y0)
case 7:q=e
p=J.eT(J.vg(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bCs(new B.pE(p,1),o),$async$Y0)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.ePz(r,p))
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
return B.i($async$Y0,v)},
Pr(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Pr=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().l3(92,1800,A.eG),$async$Pr)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Pr)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bCs(new B.pE(p,1),n),$async$Pr)
case 9:if(r.c==null){w=1
break}r.m(new C.ePX(r,p))
t=2
w=6
break
case 4:t=3
l=s.pop()
o=B.aa(l)
n=r.c
if(n!=null)n.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not open that picture. "+B.t(o),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Pr,v)},
b1W(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aH=w.aP=w.aE=w.az=w.Z=w.b6=w.bh=w.y2=0
w.b3=null
w.b2=0.25
w.be=null
w.bM=0.5
w.aS=1
w.c7=w.bU=w.bj=0
w.cX=w.cU=!1},
aVO(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bz8(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.d9B)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bz8(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bz8(C.fWG(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bz8(C.fWG(1-a0*0.5,n,n,n),w)}return a1?C.bz8(C.fWG(-1,255,255,255),w):w},
aAb(){var w,v,u=B.af("\\S+",!0,!1,!1,!1).kS(0,this.d.a.a),t=B.B(u,B.a4(u).k("J.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.z0(u,v,w)
this.dx.p7(new C.eQ6(t),!0)
return t},
b4r(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aAb()
w=C.i2l(e.d.a.a,e.db)
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
return C.hZQ(d,k,v,a0,j,e.gaUe(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
ct5(){return this.b4r(null)},
CX(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$CX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aW.gmz(),$async$CX)
case 3:w=4
return B.b(B.bN(A.eI,null,x.H),$async$CX)
case 4:w=5
return B.b($.aW.gmz(),$async$CX)
case 5:s=$.aW.ak$.x.h(0,t.r)
r=s==null?null:s.gb8()
if(!(r instanceof B.pP)){u=null
w=1
break}w=7
return B.b(r.lW(1080/r.gY(0).a),$async$CX)
case 7:w=6
return B.b(e.hq(A.fX),$async$CX)
case 6:q=e
u=q==null?null:J.eT(A.dD.gaM(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$CX,v)},
a9v(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$a9v=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePi(q))
t=4
w=7
return B.b(q.CX(),$async$a9v)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cT.gcw().aJ(p)
n=C.Bq(null,null,null,null,D.o7,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b4r(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a5(l,!1).O(n)
r.push(6)
w=5
break
case 4:t=3
j=s.pop()
m=B.aa(j)
l=q.c
if(l!=null)l.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(m),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ePj(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a9v,v)},
Ae(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Ae=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.ePg(q))
t=4
w=7
return B.b($.aW.gmz(),$async$Ae)
case 7:w=8
return B.b(B.bN(A.oA,null,x.H),$async$Ae)
case 8:w=9
return B.b($.aW.gmz(),$async$Ae)
case 9:k=$.aW.ak$.x.h(0,q.f)
p=k==null?null:k.gb8()
if(!(p instanceof B.pP))throw B.V("The picture is not ready yet.")
w=10
return B.b(p.lW(1080/p.gY(0).a),$async$Ae)
case 10:o=e
w=11
return B.b(o.hq(A.fX),$async$Ae)
case 11:n=e
if(n==null)throw B.V("Could not make the picture.")
w=12
return B.b(A7.afW(J.eT(A.dD.gaM(n)),"ngmy_quote.png","image/png"),$async$Ae)
case 12:m=e
k=q.c
if(k==null){r=[1]
w=5
break}k=k.I(x.q).f
k.S(B.b2(null,null,null,null,null,A.r,null,B.d(m?"Your quote picture is ready. Check your downloads.":"Downloading is not available here. Use Edit in Slides, then PDF.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.aa(i)
k=q.c
if(k!=null)k.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(B.t(l),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.ePh(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Ae,v)},
cg9(){var w=this.p4
w.toString
return B.cp(new C.ePQ(this,w))},
aYw(d,e){var w=null
return B.br(w,w,w,w,w,D.f02,w,w,!0,new B.b4(4,B.m(16),P.uP),w,w,w,w,w,D.td,!0,w,w,w,w,new B.b4(4,B.m(16),D.aXA),w,w,w,w,w,w,w,w,A1.Dd,e,w,w,w,w,w,w,w,D.f5i,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
xD(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.v(u,B.a([B.X(e,A.b7,w,w,w,15),A.bp],v))
u.push(B.d(d,w,w,w,w,w,w,D.aPV,w,w,w))
return new B.C(D.boY,B.A(u,A.m,w,A.e,A.j,0,w,w),w)},
aYv(d,e){var w=null,v=B.m(18),u=B.I(A.bF,A.q,1)
return B.p(w,B.aG(!1,A.a1,!0,w,d,A.f,w,0,w,w,w,w,w,A.jB),A.f,w,w,new B.o(D.td,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
vs(d){return this.aYv(d,A.bC)},
o7(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.tZ:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.m(30)
u=B.I(f?A.K:A.bF,A.q,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.v(s,B.a([B.X(e,q?A.c:A.ja,r,r,r,16),A.bp],t))
s.push(B.d(d,r,r,r,r,r,r,B.l(r,r,q?A.c:A.ja,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.aE(r,B.di(r,B.A(s,A.m,r,A.e,A.Q,0,r,r),r,r,A.bc,new B.o(w,r,u,v,r,p,A.n),A.hX,r,r,r,A.F3,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
afk(d,e,f){return this.o7(d,null,e,f)},
awv(d,e,f,g,h,i,j){var w=null,v=B.m(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.ez:A.bF,s=x.p
v=B.a([B.di(w,d,w,w,A.bc,new B.o(u,w,B.I(t,A.q,g?2:1),v,w,w,A.n),A.hX,w,e,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.az
A.d.v(v,B.a([A.at,B.d(f,w,1,A.a2,w,w,w,B.l(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.aE(w,new B.a7(j,w,B.v(v,A.m,w,A.e,A.Q,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a8)},
aYz(d,e,f,g,h,i){return this.awv(d,e,f,g,h,5,i)},
ke(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,D.eY4,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.aE(u,D.e5v,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eQ2(this,h,i),u,u,u,u,u,u,!1,A.a8))
w=A.c.j(0.08)
v=B.m(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.aP0,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.YD,u,u,u))
s=B.A(s,A.m,u,A.e,A.j,0,u,u)
w=this.c
w.toString
w=B.auy(w).cH8(A.b7,A.bF,A.b7.j(0.2),A.c,D.eHC,4)
return new B.C(A.xq,B.v(B.a([s,B.a9A(B.kX(u,u,u,g,f,new C.eQ3(this,h),A.k.D(e,f,g)),w)],t),A.m,u,A.e,A.j,0,A.p),u)},
ahl(d,e,f,g,h,i){return this.ke(d,e,f,g,h,null,i)},
ahN(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.L)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b0(u)
r=d==u
q=r?A.c:A.b3
p=new B.ay(q,r?3:1,A.q,-1)
t=t?D.bEZ:o
n.push(B.aE(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bO(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.eQ5(this,e,u),o,o,o,o,o,o,!1,A.a8))}return B.bY(A.bz,n,A.bq,10,10)},
bJx(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a2D
else{v=x.a8
w=B.B(new B.a2(D.a2D,new C.eP8(o),v),v.k("J.E"))}v=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.d,n,n,n,n,n,2,o.aYw("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.eP9(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.a7o,!0,A.a4,n,A.am,n,n,n,n)
u=B.aM(n,A.T,!1,n,!0,A.r,n,B.aN(),o.e,n,n,n,n,n,2,o.aYw("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ai,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.ePa(o),n,n,n,!1,n,n,!1,n,!0,n,A.a9,n,n,n,n,n,n,n,n,n,n,n,A.dm,!0,A.a4,n,A.am,n,n,n,n)
t=o.xD("DESIGNS",A.tM)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.cMy[q]
r.push(new B.C(A.jd,o.afk(p,o.x===p,new C.ePb(o,p)),n))}return B.v(B.a([v,A.S,u,t,B.cd(B.A(r,A.m,n,A.e,A.j,0,n,n),A.r,n,A.y,n,n,n,n,A.aO),A.ac,new B.a7(n,118,B.hH(n,new C.ePc(o,w),w.length,n,n,A.aO,new C.ePd(),!1),n),A.N,o.aYv(B.v(B.a([B.iE(A.b7,n,n,A.af,!0,new C.ePe(o),n,D.fha,n,D.fdD,o.k3),B.iE(A.b7,n,n,A.af,!0,new C.ePf(o),n,n,n,D.faT,o.k2)],s),A.m,n,A.e,A.j,0,A.p),A.agX)],s),A.F,n,A.e,A.j,0,A.p)},
cBA(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aAb()
if(a7.length===0)return a5.vs(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.IU,a6,a6,a6))
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
m=B.B(u,B.a4(u).k("co.E"))
A.d.fk(m)
l=m.length!==0&&A.d.d8(m,new C.eQw(a5,m))?a5.db[A.d.gL(m)]:a6
k=new C.eQD(a5)
j=new C.eQF()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.IU,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aT(11,11)
f=u.t(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.t(0,h)?A.ez:A.bF
d=new B.ay(e,u.t(0,h)?2:1,A.q,-1)
e=a7[h].b
a0=e.index
e=A.a.ap(w,a0,a0+e[0].length)
a0=B.af("[*~^]",!0,!1,!1,!1)
e=B.aK(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a5
o.push(B.aE(a6,B.p(a6,new B.x(e,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6,a6,a6,a6,a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bO(d,d,d,d),new B.bp(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.Md,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.eQx(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a8))}o=a5.vs(B.bY(A.bz,o,A.rM,6,6))
i=B.a([a5.o7("All words",K.alc,!1,new C.eQy(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.afk("Sentence "+a3,!1,new C.eQz(a5,a7,v,a2)))
a2=a3}}i.push(a5.afk("Clear picks",!1,new C.eQA(a5)))
i=B.bY(A.bz,i,A.bq,8,8)
g=a5.xD("SIZE OF THE PICKED WORDS",D.akC)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.df3[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.eQB(e,k)
f.push(a5.afk(a0.b,l===a4,e))}return B.v(B.a([q,A.S,o,A.S,i,g,B.bY(A.bz,f,A.bq,8,8),A.S,a5.o7("Make every word normal",A.lj,!1,new C.eQC(a5))],p),A.F,a6,A.e,A.j,0,A.p)},
cwO(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bwh,B.d(A.d.iH(D.avU,new C.eQf(q)).b,p,p,p,p,p,p,D.eZx,p,p,p)],o),A.m,p,A.e,A.j,0,p,p),m=B.cp(new C.eQg(q)),l=q.xD("HIGHLIGHT BEHIND THE WORDS",A.a_w),k=q.p1?-1:q.k4
k=q.ahN(k,new C.eQh(q),D.cWN)
w=q.p1
v=w?A.c:A.b3
n=B.a([n,A.S,m,l,B.bY(A.bz,B.a([k,B.aE(p,B.p(p,D.bHX,A.f,p,p,new B.o(p,p,B.I(v,A.q,w?3:1),p,p,D.eTl,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQk(q),p,p,p,p,p,p,!1,A.a8)],o),A.rM,10,10),A.an,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.IU,p,p,p)],o)
if(q.gaUe()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ahl("Colour",l,0,360,new C.eQl(q),""+A.k.V(l)+"\xb0")
k=q.p3
A.d.v(m,B.a([l,q.ahl("Shade",k,0.15,0.9,new C.eQm(q),""+A.k.V(k*100))],o))}l=q.ok
m.push(q.ke("Strength",l,0.15,1,new C.eQn(q),1,""+A.k.V(l*100)+"%"))
A.d.v(n,B.a([A.S,q.vs(B.v(m,A.m,p,A.e,A.j,0,A.p))],o))}n.push(q.xD("LOOK",A.ye))
m=B.a([q.o7("Bold",I.akA,q.fy,new C.eQo(q)),q.o7("Italic",I.akB,q.go,new C.eQp(q))],o)
for(u=0;u<3;++u){l={}
k=D.cNI[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.tZ:p
w=w?p:A.c.j(0.07)
s=new B.aT(14,14)
r=new B.ay(q.id===l.a?A.K:A.bF,1,A.q,-1)
m.push(B.aE(p,B.p(p,B.X(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bO(r,r,r,r),new B.bp(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.eQq(l,q),p,p,p,p,p,p,!1,A.a8))}n.push(B.bY(A.bz,m,A.rM,8,8))
n.push(q.xD("COLOUR",A.nd))
n.push(q.ahN(q.fx,new C.eQr(q),D.d6x))
n.push(A.an)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.IU,p,p,p))
n.push(q.xD("SIZE AND PLACE",A.G_))
m=q.fr
m=q.ke("Text size",m,0.5,1.6,new C.eQi(q),1,""+A.k.V(m*100)+"%")
l=q.k1
n.push(q.vs(B.v(B.a([m,q.ke("Up / down",l,0.12,0.5,new C.eQj(q),0.3,""+A.k.V(l*100))],o),A.m,p,A.e,A.j,0,A.p)))
return B.v(n,A.F,p,A.e,A.j,0,A.p)},
cga(){var w,v,u,t,s,r,q=this,p=null,o=q.p4
if(o==null){w=B.m(22)
v=B.I(A.b7.j(0.6),A.q,1.6)
u=B.a([A.b7.j(0.18),A.bA.j(0.12)],x.O)
return B.aE(p,B.p(p,B.v(B.a([B.p(p,D.bNh,A.f,p,p,D.b_y,p,62,p,p,p,p,p,62),A.aA,D.feM,A.an,D.fjm],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(D.td,p,v,w,p,new B.a8(A.a3,A.a7,A.x,u,p,p),A.n),p,p,p,p,D.bs9,p,p,1/0),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,q.gaYy(),p,p,p,p,p,p,!1,A.a8)}w=x.p
v=B.A(B.a([B.bw(B.m(12),new B.a7(46,62,B.fL(o,A.A,120,p,A.cm,A.bR,!1,p,!1,p,p),p),A.aq),A.bf,B.E(B.v(B.a([D.fem,A.N,B.bY(A.bz,B.a([q.o7("Change",A.kR,!1,q.gaYy()),q.o7("Remove",A.e5,!1,new C.ePU(q))],w),A.bq,6,6)],w),A.F,p,A.e,A.j,0,A.p),1)],w),A.m,p,A.e,A.j,0,p,p)
u=B.a([],w)
for(t=0;t<5;++t){s=D.d33[t]
u.push(q.o7(s.b,s.a,q.at===t,new C.ePV(q,t)))}u=B.bY(A.bz,u,A.bq,8,8)
r=q.at
A:{if(0===r){s=q.c_3(o)
break A}if(1===r){s=q.bZ6()
break A}if(2===r){s=q.bFn()
break A}if(3===r){s=q.bLF()
break A}s=q.bHu()
break A}return B.v(B.a([v,A.ac,u,A.aA,s,A.S,new B.bI(A.a3,p,p,q.o7("Reset the whole picture",A.lj,!1,new C.ePW(q)),p)],w),A.F,p,A.e,A.j,0,A.p)},
c_3(d){var w=this,v=x.p
return B.v(B.a([B.bY(A.bz,B.a([w.o7("Auto enhance",E.a_a,!1,new C.ePM(w)),w.o7("Make words easy to read",A.oJ,!1,new C.ePN(w))],v),A.bq,8,8),A.aA,B.cp(new C.ePO(w,d))],v),A.F,null,A.e,A.j,0,A.p)},
bZ6(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.ke("Exposure",n,-1.5,1.5,new C.ePq(o),0,A.k.aa(n,1))
w=o.RG
w=o.ke("Brightness",w,-0.5,0.5,new C.ePr(o),0,""+A.k.V(w*100))
v=o.rx
v=o.ke("Contrast",v,0.4,2,new C.ePs(o),1,""+A.k.V(v*100))
u=o.xr
u=o.ke("Fade",u,0,1,new C.ePt(o),0,""+A.k.V(u*100))
t=o.aE
t=o.ke("Spotlight",t,0,1,new C.ePu(o),0,""+A.k.V(t*100))
s=o.Z
s=o.ke("Darken",s,0,0.85,new C.ePv(o),0,""+A.k.V(s*100))
r=o.b6
r=o.ke("Vignette",r,0,0.9,new C.ePw(o),0,""+A.k.V(r*100))
q=o.aH
q=o.ke("Shade behind words",q,0,0.85,new C.ePx(o),0,""+A.k.V(q*100))
p=o.aP
return o.vs(B.v(B.a([n,w,v,u,t,s,r,q,o.ke("Shade top & bottom",p,0,0.85,new C.ePy(o),0,""+A.k.V(p*100))],x.p),A.m,null,A.e,A.j,0,A.p))},
bFn(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.ke("Colour strength",q,0,2.2,new C.eOM(s),1,""+A.k.V(q*100))
w=s.to
w=s.ke("Warmth",w,-1,1,new C.eON(s),0,""+A.k.V(w*100))
v=s.x1
v=s.ke("Tint",v,-1,1,new C.eOO(s),0,""+A.k.V(v*100))
u=s.x2
t=x.p
u=s.vs(B.v(B.a([q,w,v,s.ke("Shift colours",u,-180,180,new C.eOP(s),0,""+A.k.V(u)+"\xb0"),new B.bI(A.a3,r,r,s.o7("Negative",D.bCZ,s.y1,new C.eOQ(s)),r)],t),A.m,r,A.e,A.j,0,A.p))
v=s.xD("COLOUR WASH",A.Nc)
w=s.b3
q=B.a([null],x.Z)
A.d.v(q,D.auD)
t=B.a([u,v,s.ahN(w,new C.eOR(s),q),A.N],t)
if(s.b3!=null){q=s.b2
t.push(s.vs(s.ahl("Wash strength",q,0,0.9,new C.eOS(s),""+A.k.V(q*100))))}return B.v(t,A.F,r,A.e,A.j,0,A.p)},
bLF(){var w,v,u,t,s,r=this,q=r.y2
q=r.ke("Blur",q,0,24,new C.ePk(r),0,A.o.u(A.k.V(q)))
w=r.bh
w=r.ke("Soft focus",w,0,1,new C.ePl(r),0,""+A.k.V(w*100))
v=r.az
u=x.p
v=r.vs(B.v(B.a([q,w,r.ke("Film grain",v,0,1,new C.ePm(r),0,""+A.k.V(v*100))],u),A.m,null,A.e,A.j,0,A.p))
w=r.xD("LIGHT LEAK",H.akw)
q=r.be
t=B.a([null],x.Z)
s=x.S
A.d.v(t,B.dd(D.auD,0,B.dJ(8,"count",s),s))
u=B.a([v,w,r.ahN(q,new C.ePn(r),t),A.N],u)
if(r.be!=null){q=r.bM
u.push(r.vs(r.ahl("Leak strength",q,0,1,new C.ePo(r),""+A.k.V(q*100))))}return B.v(u,A.F,null,A.e,A.j,0,A.p)},
bHu(){var w,v,u,t,s=this,r=s.aS
r=s.ke("Zoom",r,1,3,new C.eOW(s),1,""+A.k.V(r*100)+"%")
w=s.bj
w=s.ke("Left / right",w,-1,1,new C.eOX(s),0,""+A.k.V(w*100))
v=s.bU
v=s.ke("Up / down",v,-1,1,new C.eOY(s),0,""+A.k.V(v*100))
u=s.c7
t=x.p
return B.v(B.a([s.vs(B.v(B.a([r,w,v,s.ke("Turn",u,-180,180,new C.eOZ(s),0,""+A.k.V(u)+"\xb0")],t),A.m,null,A.e,A.j,0,A.p)),A.S,B.bY(A.bz,B.a([s.o7("Turn 90\xb0",N.alK,!1,new C.eP_(s)),s.o7("Flip sideways",A.FO,s.cU,new C.eP0(s)),s.o7("Flip upside down",A.FO,s.cX,new C.eP1(s))],t),A.bq,8,8)],t),A.F,null,A.e,A.j,0,A.p)},
c1H(){var w=null,v=B.m(22),u=B.I(A.bF,A.q,1)
return B.p(w,B.v(B.a([D.eHO,A.S,D.fgb,A.aA,B.aE(w,B.p(A.A,D.eI0,A.f,w,w,new B.o(w,w,w,B.m(16),w,G.tZ,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ePP(this),w,w,w,w,w,w,!1,A.a8)],x.p),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(D.td,w,u,v,w,w,A.n),w,w,w,w,A.bQ,w,w,w)},
bZW(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.ePH(p),m=x.p,l=B.A(B.a([D.bwn,p.o7("Reset",A.lj,!1,new C.ePD(p))],m),A.m,o,A.e,A.j,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.IU,o,o,o),j=p.xD("SHAPE",A.alG),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.BV[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.aYz(n.$2(t,p.cy),62,u.b,s===t,new C.ePE(v,p),62))}}i=B.bY(A.bz,i,A.bq,8,8)
v=p.xD("RING",A.qZ)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.BQ[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.aYz(n.$2(p.cx,t),62,r.b,q===t,new C.ePF(s,p),62))}u=B.bY(A.bz,u,A.bq,8,8)
s=p.CW
return B.v(B.a([l,A.at,k,j,i,v,u,A.ac,p.vs(p.ke("Size",s,0.12,0.4,new C.ePG(p),0.22,""+A.k.V(s*100)))],m),A.F,o,A.e,A.j,0,A.p)},
b0t(d){return new B.a7(null,d,new B.fG(0.5625,B.cp(new C.eQ_(this)),null),null)},
cw5(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.m(18),n=B.I(A.bF,A.q,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.tZ:q
t=new B.aT(14,14)
s=D.d56[w]
r=v?A.c:A.az
r=B.X(s.a,r,q,q,q,19)
v=v?A.c:A.az
l.push(new B.bD(1,A.bh,B.aE(A.c4,B.di(q,B.v(B.a([r,A.cS,new B.qe(A.eg,A.A,A.f,new B.x(s.b,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q,q,q,q,q,q,q),q)],m),A.m,q,A.e,A.Q,0,A.p),q,q,A.bc,new B.o(q,q,q,new B.bp(t,t,t,t),q,u,A.n),D.bnU,q,q,q,A.hK,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eQ8(this,w),q,q,q,q,q,q,!1,A.a8),q))}return B.p(q,B.A(l,A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bpZ,A.lL,q,q,q)},
aP4(){var w,v,u=this,t=null,s=u.cw5(),r=u.as
A:{if(0===r){w=u.bJx()
break A}if(1===r){w=u.cBA()
break A}if(2===r){w=u.cwO()
break A}if(3===r){w=u.cga()
break A}if(4===r){w=u.bZW()
break A}w=u.c1H()
break A}v=x.p
return B.bw(A.rS,B.ek(B.v(B.a([s,B.E(B.cz(B.a([w],v),t,D.br_,t,t,A.ah,!1),1)],v),A.m,t,A.e,A.j,0,A.p),D.Wt,!0),A.aq)},
aLj(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gc6E(),p=B.m(16)
q=B.E(B.aE(r,B.p(r,D.eI9,A.f,r,r,new B.o(A.c.j(0.08),r,B.I(A.b3,A.q,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a8),1)
p=s.Q?r:s.gbLf()
w=B.m(16)
v=B.a([new B.ac(0,A.G,A.bA.j(0.35),A.cx,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(D.eN3)
else t.push(D.bH1)
t.push(A.ab)
t.push(D.by7)
return B.p(r,B.A(B.a([q,A.av,B.E(B.aE(r,B.p(r,B.A(t,A.m,r,A.bb,A.j,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.tZ,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a8),1)],u),A.m,r,A.e,A.j,0,r,r),A.f,r,r,D.aZG,r,r,r,r,G.agK,r,r,r)},
aYx(){var w=null
return new B.C(T.Yz,B.A(B.a([B.aH(w,w,w,w,A.mv,w,w,w,new C.ePp(this),w,w,w,w,w,w),D.fvm,A.b6,D.bPz],x.p),A.m,w,A.e,A.j,0,w,w),w)},
B(d){var w=null
return B.c8(w,A.AF,B.bn(!0,B.cp(new C.eQG(this)),!0,!1,A.af,!0,!0),w,!1,!1,w,w)}}
C.beH.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m=new B.eL()
m.dB(7)
w=e.a
v=e.b
u=A.k.V(w*v/55)
$.W()
t=B.M()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.M()
r.r=A.w.j(0.2*s).gp(0)
for(s=d.a,q=0;q<u;++q){p=m.aj()*w
o=m.aj()*v
n=((q&1)===0?t:r).H()
s.drawRect(B.c0(new B.a9(p,o,p+1.1,o+1.1)),n)
n.delete()}},
ar(d){return d.b!==this.b}}
C.rm.prototype={
a4(){return"NgmyQuoteDeco."+this.b}}
C.m1.prototype={}
C.zh.prototype={
ag(){var w=this
return B.F(["at",w.a.a6().ac(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.nG.prototype={}
C.vQ.prototype={
a4(){return"NgmySlidesAiExtra."+this.b}}
C.a7z.prototype={}
C.aqw.prototype={}
C.a_U.prototype={
R(){return new C.aGH(new B.ar(A.as,$.aw()),B.jM(!0,null,!0,!0,null,null,!1),D.dv1,B.a([],x.s),B.et([D.HG],x.Q))}}
C.aGH.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.f.q()
this.a2()},
a_G(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a_G=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BQ(90,700,700,A.eG),$async$a_G)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$a_G)
case 8:p=e
if(r.c!=null)r.m(new C.eWT(r,p,q))
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
return B.i($async$a_G,v)},
a_J(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_J=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.hW().aGy(78,n,1100,1100),$async$a_J)
case 7:q=e
if(J.cl(q)){w=1
break}p=B.bm(r.y,!0,x.N)
n=J.aV(q)
case 8:if(!n.C()){w=9
break}o=n.gT(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fi(),$async$a_J)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.cb(l,".png"))k="image/png"
else k=A.a.cb(l,".webp")?"image/webp":"image/jpeg"
J.ch(p,"data:"+k+";base64,"+A.cT.gcw().aJ(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.eWU(r,p))
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
return B.i($async$a_J,v)},
b2x(d){var w,v,u=null
if(d!=null&&A.a.t(d,","))try{w=B.fL(A.cG.aJ(A.d.gal(d.split(","))),A.A,u,u,A.cm,A.bR,!0,u,!1,u,u)
return w}catch(v){}return D.bm9},
c_1(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cpL(C.fxX(w,this.b2x(d),f),g)},
abN(d,e,f,g,h){var w=null,v=new C.eWR(f,e),u=new C.eWS(f,e),t=A.c.j(0.05),s=B.m(12),r=B.m(12),q=B.m(12),p=h==null,o=B.I(p?A.bF:A.b7.j(0.6),A.q,1)
if(p)p=new B.a7(34,30,new B.an(A.W,w,A.aa,A.f,B.a([B.av(B.X(f?A.BA:A.N1,A.c1,w,w,w,26),w,w,w),D.eb9],x.p),w),w)
else p=this.c_1(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.p(w,B.A(B.a([B.E(B.av(p,w,w,w),1),D.bGJ],x.p),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.mn,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eWQ(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ag)},
aVU(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.t(h,","))try{o=B.bw(B.m(8),B.fL(A.cG.aJ(A.d.gal(h.split(","))),A.A,p,p,A.cm,A.bR,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.m(14)
t=B.m(14)
s=B.m(14)
r=B.I(n?A.bF:A.bo.j(0.6),A.q,1)
q=o
n=q==null?B.X(d,A.es,p,p,p,20):q
n=B.a([n,A.ab,B.E(B.d(e,p,1,A.a2,p,p,p,A.Ty,p,p,p),1)],x.p)
if(f!=null)n.push(B.aE(p,D.a0q,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a8))
return B.aG(!1,A.a1,!0,u,B.aL(!1,t,!0,B.p(p,B.A(n,A.m,p,A.e,A.j,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.ld,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ag)},
a7Y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a7Y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fBn(),$async$a7Y)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.eWz(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.aa(n)
if(r.c!=null)r.m(new C.eWA(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a7Y,v)},
adE(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$adE=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.eWC(r))
w=1
break}if(r.x==null){m=B.af("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.eWD(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.eWE(r))
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
return B.b(C.fwF(q,r.cx,j,new C.b0q(r.z,r.Q,r.as,r.at),new C.eWF(r),i,m,p,k),$async$adE)
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
if(r.c!=null)r.m(new C.eWG(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adE,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aI(d,A.eD,g).w
g=B.aI(d,A.bU,g).w
w=B.av(B.p(h,h,A.f,h,h,new B.o(A.b3,h,h,B.m(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.av(B.aE(h,B.p(h,D.bJV,A.f,h,h,new B.o(h,h,B.I(A.c.j(0.35),A.q,2),h,B.a([new B.ac(2,A.G,A.bo.j(0.5),A.J,24)],v),D.bTn,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eX6(i),h,h,h,h,h,h,!1,A.a8),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aH(h,h,h,h,D.a0q,h,h,h,i.ax?h:new C.eX7(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbAq()
v=B.a([new B.ac(0,A.G,A.b7.j(0.45),A.J,10)],v)
s.push(B.hp(B.aG(!1,A.a1,!0,h,B.aL(!1,h,!0,B.p(h,B.X(i.e==null?A.vx:A.hz,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.vN,A.a6),h,40,h,h,h,h,h,40),A.cL,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.K,0,h,h,A.cL,h,h,A.ag),h,r,h,h))
v=B.A(s,A.m,h,A.e,A.Q,0,h,h)
s=A.c.j(0.05)
v=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.d,h,h,h,h,h,2,B.br(h,h,h,h,h,h,h,h,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b4(4,B.m(16),D.aX7),h,h,h,h,h,h,h,h,A0.IH,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.C(A.jd,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ai,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,h,D.aPl,!0,A.a4,h,A.am,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.eX8(i)
s=i.aVU(A.ll,q,r,i.gcgB(),s)
r=i.z
r=B.E(i.abN(new C.eXa(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.v(B.a([s,A.an,B.A(B.a([r,A.bp,B.E(i.abN(new C.eXb(i),i.z,!0,i.x,q),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gL(s)
p=i.y.length===0?h:new C.eXc(i)
s=i.aVU(A.vu,r,p,i.gcgJ(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gL(o)
p=B.E(i.abN(new C.eXd(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gL(n)
o=B.a([w,A.aA,D.fkD,A.at,D.fnq,A.by,u,A.N,D.flT,A.aA,v,A.by,B.A(B.a([q,A.av,B.E(B.v(B.a([s,A.an,B.A(B.a([p,A.bp,B.E(i.abN(new C.eXe(i),r,!0,n,o),1)],t),A.m,h,A.e,A.j,0,h,h)],t),A.m,h,A.e,A.j,0,A.p),1)],t),A.F,h,A.e,A.j,0,h,h),A.an,D.fp9],t)
w=i.w.a
if(w.length!==0){v=B.m(999)
u=B.I(D.beB,A.q,1)
w=C.agu(w)
w=w==null?h:w.b
A.d.v(o,B.a([A.S,new B.bI(A.a3,h,h,B.p(h,B.A(B.a([D.bL_,A.bp,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,D.f42,h,h,h),B.aL(!1,h,!0,D.e5L,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.eXf(i),h,h,h,h,h,h,h)],t),A.m,h,A.e,A.Q,0,h,h),A.f,h,h,new B.o(D.b7Y,h,u,v,h,h,A.n),h,h,h,h,D.bpG,h,h,h),h)],t))}o.push(A.by)
o.push(D.fbA)
o.push(A.N)
w=B.a([],t)
for(m=0;m<6;++m){l=D.cYP[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.az:A.bF,1,A.q,-1)
u=u?A.u:A.P
w.push(new B.bD(1,A.bh,new B.C(A.jf,B.aE(h,B.di(A.A,new B.x(""+l,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h,h,h,h,h,h,h),h,h,A.bc,new B.o(v,h,new B.bO(k,k,k,k),h,h,h,A.a6),A.eE,h,42,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.eXg(i,l),h,h,h,h,h,h,!1,A.a8),h),h))}o.push(B.A(w,A.m,h,A.e,A.j,0,h,h))
o.push(A.by)
o.push(D.ftE)
o.push(A.N)
o.push(B.cp(new C.eXh(i)))
o.push(A.by)
o.push(D.fiJ)
o.push(A.N)
w=B.a([i.b5j("auto","Let AI choose",A.dW,A.PL)],t)
for(v=x.O,m=0;m<11;++m){j=D.vT[m]
u=j.d
w.push(i.b5j(j.a,j.b,j.c,B.a([B.b0(A.d.gL(u).a),B.b0(A.d.gL(u).b)],v)))}o.push(B.bY(A.bz,w,A.bq,8,8))
o.push(A.aQ)
w=A.c.j(0.04)
v=B.m(16)
u=B.I(i.r?A.bo.j(0.5):A.bF,A.q,1)
o.push(B.p(h,B.iE(h,A.bo,h,h,h,new C.eX9(i),D.bGa,D.fsU,h,D.fdQ,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.v(o,B.a([A.aA,B.d(w,h,h,h,h,h,h,D.aOC,h,h,h)],t))
o.push(A.by)
w=i.ax?h:i.gc6I()
v=B.fm(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b7(B.m(18),A.Y),h,h,h,h,h)
u=i.ax
t=u?D.eMU:A.Gd
o.push(new B.a7(h,54,B.lt(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.p5,h,h,h),w,v),h))
return new B.C(new B.Q(0,0,0,f.f.d),B.p(h,B.bn(!0,B.cd(B.v(o,A.aj,h,A.e,A.j,0,A.p),A.r,h,A.y,h,A.vm,h,h,A.ah),!0,!1,A.af,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.aae,h,h,h,h,h,h,h,h),h)},
bMJ(d){var w,v,u,t,s,r,q=null,p=this.cx.t(0,d),o=new C.eWH(this,p,d)
if(d===D.Cw)return new C.aDe(p,o,q)
w=B.m(16)
v=p?E.vN:q
u=p?q:A.c.j(0.05)
t=B.I(p?A.az:A.bF,A.q,1)
s=B.X(p?A.ee:C.hCZ(d),A.c,q,q,q,20)
r=C.hD_(d)
return B.aE(q,B.di(q,B.v(B.a([s,A.at,B.f4(A.A,B.d(r,q,q,q,q,q,q,B.l(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.f,A.eg)],x.p),A.m,q,A.bb,A.j,0,A.p),q,q,A.bc,new B.o(u,q,t,w,q,v,A.n),A.hX,q,64,q,A.hx,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a8)},
b5j(d,e,f,g){var w,v=null,u=this.CW===d,t=B.m(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ad:A.bF
r=B.I(r,A.q,u?1.6:1)
w=B.p(v,B.X(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a8(A.a3,A.a7,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.aE(v,B.di(v,B.A(B.a([w,L.Iy,B.d(e,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a5,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,v,v),v,v,A.bc,new B.o(s,v,r,t,v,v,A.n),A.eE,v,v,v,L.ai2,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eWW(this,d),v,v,v,v,v,v,!1,A.a8)}}
C.a_T.prototype={
R(){return new C.aGG(new B.ar(A.as,$.aw()))}}
C.aGG.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
adF(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$adF=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.eWs(r))
w=1
break}B.eU()
r.m(new C.eWt(r))
t=4
q=C.i3e(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.af("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.i2Z(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.eWu(r,q))
w=1
break}k=r.c
if(k!=null)B.a5(k,!1).O(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.af("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.fWm()
f=$.Co.h(0,k.a)
o=f==null||J.cl(f)?null:J.fo(f)
if(o==null){r.m(new C.eWv(r))
w=1
break}n=C.i2X(o,r.a.c)
C.i2T(r.a.c.a)
$.fVD=!0
k=r.c
if(k!=null)B.a5(k,!1).O(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.fZ6(j)
h=C.fZ7(r.a.c)
e=C.fZ8(r.a.c)
w=7
return B.b(C.bBm(k,r.a.c.a,j,h,new C.eWw(r),i,e,a0),$async$adF)
case 7:m=a3
k=r.c
if(k!=null)B.a5(k,!1).O(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.aa(a1)
if(r.c!=null)r.m(new C.eWx(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adF,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aI(d,A.eD,i).w
i=B.aI(d,A.bU,i).w
w=B.av(B.p(j,j,A.f,j,j,new B.o(A.b3,j,j,B.m(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.alZ,A.f,j,j,D.aZl,j,34,j,j,j,j,j,34),A.av,D.bwX],v),A.m,j,A.e,A.j,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,As.a73,j,j,j)
s=A.c.j(0.05)
s=B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),k.d,j,j,j,j,j,2,B.br(j,j,j,j,j,j,j,j,!0,new B.b4(4,B.m(16),new B.ay(A.c.j(0.1),1,A.q,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b4(4,B.m(16),At.a9K),j,j,j,j,j,j,j,j,A0.IH,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ai,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,D.aPl,!0,A.a4,j,A.am,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.cVg[q]
o=A.c.j(0.06)
n=k.e?j:new C.eWy(k,p)
r.push(B.mF(j,o,new B.x(p,j,Az.T6,j,j,j,j,j,j,j,j,j),j,n,j,j,P.uP,j))}w=B.a([w,A.aA,u,A.an,t,A.aA,s,A.S,B.bY(A.bz,r,A.bq,8,8)],v)
u=k.r
if(u!=null)A.d.v(w,B.a([A.ac,B.d(u,j,j,j,j,j,j,D.aOC,j,j,j)],v))
w.push(A.aQ)
u=k.e
t=u?j:k.gc6J()
s=B.m(18)
r=B.m(18)
u=u?B.a([A.bo.j(0.5),A.f6.j(0.5)],x.O):D.ctz
o=B.a([new B.ac(0,A.G,A.bo.j(0.35),A.cx,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.e5H:D.bKz
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a1,!0,j,B.aL(!1,s,!0,B.eE(B.A(B.a([n,A.av,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.i5,j,j,j)],v),A.m,j,A.bb,A.j,0,j,j),j,new B.o(j,j,j,r,o,new B.a8(A.a3,A.a7,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.K,0,j,j,j,j,j,A.ag))
return new B.C(new B.Q(0,0,0,h.f.d),B.p(j,B.bn(!0,B.cd(B.v(w,A.aj,j,A.e,A.j,0,A.p),A.r,j,A.y,j,A.vm,j,j,A.ah),!0,!1,A.af,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.aae,j,j,j,j,j,j,j,j),j)}}
C.b0q.prototype={}
C.aDe.prototype={
R(){return new C.bjm(null,null)}}
C.bjm.prototype={
gaww(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.pG,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaww().q()
this.buk()},
B(d){var w=null,v=this.a.d
return B.aE(w,B.c6(this.gaww(),new C.eci(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a8)}}
C.bgU.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m
for(w=this.b*2,v=e.a,u=e.b,t=d.a,s=0;s<7;++s){r=0.5+0.5*Math.sin(w+s*1.7)
q=D.d_W[s]
p=q.a*v
q=q.b*u
$.W()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.r=D.xe.j(0.25+r*0.6).gp(0)
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
ar(d){return d.b!==this.b}}
C.ar5.prototype={
a4(){return"NgmyTextCommand."+this.b}}
C.Zf.prototype={
R(){return new C.aAH()}}
C.aAH.prototype={
gahK(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.agH(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gzZ(){var w=this.e
return w===$?this.e=C.fZ6(this.a.c).t(0,D.Cw):w},
a7L(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a7L=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dhP(s))
u=3
r=A.d.iH(D.vT,new C.dhQ(s))
q=B.db(C.fZ6(s.a.c),x.Q)
l=q
J.hD(l,D.Cw)
p=l
if(s.gzZ())J.ch(p,D.Cw)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gzZ()?" with Luxury FX":""
i=s.a
h=i.d
i=C.fZ7(i.c)
g=C.fZ8(s.a.c)
w=6
return B.b(C.bBm(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a7L)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.agH(q,s.gahK())
f=q==null?null:q.b
n=f==null?s.gahK():f
if(!J.z(n,r.a)&&!s.gzZ())throw B.V("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a5(q,!1).O(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.aa(d)
if(s.c!=null)s.m(new C.dhR(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a7L,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.M,k=m?A.aR:A.ak,j=m?A.M:A.c,i=B.m(28),h=B.I(m?A.bF:A.aL,A.q,1),g=x.p,f=B.E(B.v(B.a([B.d("Look and feel",n,n,n,n,n,n,B.l(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bB,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.l(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1),e=o.f?n:new C.dhU(d)
e=B.A(B.a([f,B.aH(n,n,n,n,B.X(A.cB,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.m,n,A.e,A.j,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.vT[w]
u=o.gahK()
t=o.f?n:new C.dhV(o,v)
f.push(new C.brO(v,u===v.a,t,n))}f=B.lX(1.25,f,3,10,10,n,A.dQ,!0)
u=B.m(18)
t=o.gzZ()?D.bW6:n
if(o.gzZ())s=n
else s=m?A.bm:A.bM
r=B.X(A.dW,o.gzZ()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.l(n,n,o.gzZ()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.v(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.l(n,n,o.gzZ()?A.ad:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.F,n,A.e,A.j,0,A.p),1)
p=o.gzZ()
f=B.a([f,A.aA,B.p(n,B.A(B.a([r,A.av,q,B.aa4(n,A.c,n,A.bK,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dhW(o),n,n,n,n,n,n,n,n,p)],g),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,H.agN,n,n,n)],g)
u=o.r
if(u!=null)A.d.v(f,B.a([A.S,B.d(u,n,n,n,n,n,n,D.f4l,n,n,n)],g))
f=B.cd(B.v(f,A.F,n,A.e,A.j,0,A.p),A.r,n,A.y,n,A.Fb,n,n,A.ah)
u=o.f?n:o.gbzp()
t=B.bl(A.K,n,n,n,n,n,A.af,n,new B.b7(B.m(16),A.Y),n,n,n)
s=B.m(16)
return B.bn(!0,B.p(n,B.v(B.a([new B.C(D.bsD,e,n),new B.dq(1,A.cn,f,n),new B.C(A.Fa,new B.a7(1/0,50,B.bH(B.eE(B.av(o.f?A.rC:D.fl5,n,n,n),n,new B.o(n,n,n,s,n,D.bUG,A.n),n,n,n),u,t),n),n)],g),A.m,n,A.e,A.Q,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.tx,n,n,n,n),!0,!1,A.af,!0,!0)}}
C.brO.prototype={
B(d){var w=null,v=this.c,u=A.d.gL(v.d),t=B.m(16),s=u.a,r=B.a([B.b0(s),B.b0(u.b)],x.O),q=this.d,p=B.I(q?A.c:A.K,A.q,2.5)
s=q?B.a([new B.ac(0,A.G,B.b0(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bI(A.l5,w,w,B.X(v.c,A.ad,w,w,w,18),w),new B.bI(A.lw,w,w,B.d(v.b,w,w,w,w,w,w,D.f4j,w,w,w),w)],x.p)
if(q)v.push(D.aVd)
return B.aE(w,B.di(w,new B.an(A.W,w,A.aa,A.r,v,w),w,w,A.bc,new B.o(w,w,p,t,s,new B.a8(A.ax,A.aC,A.x,r,w,w),A.n),A.eE,w,w,w,A.co,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a8)}}
C.ecf.prototype={
aE8(d,e,f){return e+"@"+A.a.aT(A.o.fS(f==null?this.a.c:f,16),8,"0").toUpperCase()},
wm(d,e){return this.aE8(0,e,null)}}
C.aLf.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.b0m.prototype={
B(d){var w,v,u=null,t=C.fXX(this.c)
if(t==null)w=D.bkJ
else{w=B.aI(d,u,x.w).w.cGB(D.bpc,D.eM8)
v=this.d
w=B.ul(B.e1(B.ans(!1,t,!1,v,!1,390),!v,u),w)}return B.f4(A.A,new B.a7(416,870,new C.bl_(w,u),u),A.f,A.du)}}
C.bl_.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dbe[w]
u=new B.aT(3,3)
s.push(new B.cL(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.anT,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dcp[w]
u=new B.aT(3,3)
s.push(new B.cL(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.bp(u,u,u,u),t,D.anT,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bZ(0,B.c_(t,new B.o(t,t,t,B.m(64),D.cLk,D.bT5,A.n),A.bd),0,0,0))
s.push(B.bZ(3,B.c_(t,new B.o(A.w,t,t,B.m(61),t,t,A.n),A.bd),3,3,3))
s.push(B.bZ(13,B.bw(B.m(51),B.ek(this.c,A.w,!0),A.aq),13,13,13))
u=B.m(20)
s.push(B.ao(t,B.av(B.p(D.aVp,B.p(t,t,A.f,t,t,D.aZE,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bZ(13,B.e1(B.bw(B.m(51),D.bmf,A.aq),!0,t),13,13,13))
s.push(B.ao(22,B.e1(B.av(B.p(t,t,A.f,t,t,new B.o(A.ad,t,t,B.m(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),!0,t),t,t,0,0,t,t))
return new B.an(A.W,t,A.aa,A.f,s,t)}}
C.la.prototype={
pu(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.eo(A.L,!1,e.l(),A.aD,"",k,42,A.bl,A.u,"",0.22,f,l,"","",0,!1,"",0,D.be,j,2,"Your Presentation Title",0,0,"",D.mB,D.cQ,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.eo(A.L,!1,v.l(),A.aD,"",k,20,A.bl,A.a5,"",0.12,w,l,"","",0,!1,"",0,D.be,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dd,D.cQ,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.rn(i,l,0,0,B.a([f,w,C.eo(A.bg,!1,4279310375,A.aD,"",t.j(0.8).l(),24,A.bl,A.a5,"",0.006,u,l,"","",0,!1,"",0,D.fq,t.l(),3,"",0,0,"",D.cl,D.f0,0.3,0.35,0.72)],s),C.cC(),D.mA,"","","Welcome",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,34,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Agenda",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
w=C.cC()
w=C.rn(i,l,0,0,B.a([u,C.eo(A.bg,!0,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.6,w,l,"","",0,!1,"",0,D.be,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.uc,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mA,"","","Agenda",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,32,A.bl,A.u,"",0.14,u,l,"","",0,!1,"",0,D.be,j,2,"Main Idea",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
f=C.cC()
f=C.rn(i,l,0,0,B.a([u,C.eo(A.bg,!0,v.l(),A.aD,"",k,21,A.bl,A.a5,"",0.62,f,l,"","",0,!1,"",0,D.be,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cl,D.cQ,0.8,0.1,0.26)],s),C.cC(),D.mA,"","","Key Point 1",D.dd)
u=C.cC()
u=C.eo(A.bg,!1,e.l(),A.aD,"",k,30,A.bl,A.u,"",0.12,u,l,"","",0,!1,"",0,D.be,j,2,"Compare & Contrast",0,0,"",D.cl,D.cQ,0.84,0.08,0.08)
r=C.cC()
r=C.eo(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,r,l,"","",0,!1,"",0,D.be,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cQ,0.4,0.08,0.24)
q=C.cC()
q=C.rn(i,l,0,0,B.a([u,r,C.eo(A.bg,!0,v.l(),A.aD,"",k,18,A.bl,A.a5,"",0.62,q,l,"","",0,!1,"",0,D.be,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cl,D.cQ,0.4,0.52,0.24)],s),C.cC(),D.mA,"","","Key Point 2",D.dd)
r=C.cC()
r=C.eo(A.L,!1,e.l(),A.aD,"",k,48,A.bl,A.u,"",0.2,r,l,"","",0,!1,"",0,D.be,j,2,h,0,0,"",D.dd,D.cQ,0.8,0.1,0.32)
e=C.cC()
p=C.Bq(l,l,l,l,D.Cs,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.rn(i,l,0,0,B.a([r,C.eo(A.L,!1,v.l(),A.aD,"",k,22,A.bl,A.a5,"",0.1,e,l,"","",0,!1,"",0,D.be,j,2,"Questions?",0,0,"",D.cl,D.cQ,0.7,0.15,0.58)],s),C.cC(),D.mA,"","",h,D.dd)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.L)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.En.prototype={
bx(d){return this.e.$1(d)}}
C.eu.prototype={}
C.iX.prototype={}
C.Ee.prototype={
gaJS(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.agu(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a3_(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Ee(v,u,t,d==null?w.d:d)},
Fo(d){return this.a3_(null,d,null,null)},
aCS(d){return this.a3_(null,null,null,d)},
cGz(d,e){return this.a3_(d,e,null,null)},
baq(d){return this.a3_(d,null,null,null)},
bax(d){return this.a3_(null,null,d,null)}}
C.N6.prototype={
R(){return new C.biJ(new B.eS(0,$.aw()),null,null)}}
C.biJ.prototype={
a_(){var w,v=this
v.a1()
w=v.qu(new C.dTg(v))
v.e!==$&&B.aP()
v.e=w
if(v.a.e)w.iR(0)
else v.d.sp(0,3.2)},
q(){var w=this.e
w===$&&B.c()
w.q()
w=this.d
w.U$=$.aw()
w.P$=0
this.btN()},
B(d){var w=C.agu(this.a.c.a)
if(w==null)w=A.d.gL(D.Gy)
return B.cp(new C.dTf(this,w,C.hcX(this.a.c.d)))}}
C.bqn.prototype={
B(d){return B.nL(A.US,this.e,new C.eVG(this,A.k.F(this.d*0.35,1.6)-0.3))}}
C.bdN.prototype={
a5(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aRH(d,e,v)
break
case"confetti":w.bFT(d,e,v)
break
case"crown":w.bHv(d,e,v)
break
case"aurora":w.bAu(d,e,v)
break
case"champagne":w.bDI(d,e,v)
break
case"diamonds":w.bJG(d,e,v)
break
case"starburst":w.ctO(d,e,v)
break
case"balloons":w.bAI(d,e,v)
break
case"galaxy":w.bOt(d,e,v)
break
case"redcarpet":w.ckT(d,e,v)
break
case"coins":w.bFf(d,e,v)
break
case"lanterns":w.bYC(d,e,v)
break
case"hearts":w.bWg(d,e,v)
break
case"petals":w.cg2(d,e,v)
break
case"butterflies":w.bCJ(d,e,v)
break
case"neon":w.c1r(d,e,v)
break
case"disco":w.bJR(d,e,v)
break
case"sunrise":w.cvm(d,e,v)
break
case"pearls":w.cf6(d,e,v)
break
case"snow":w.ctt(d,e,v)
break
case"laurel":w.bYI(d,e,v)
break
case"ribbons":w.cnr(d,e,v)
break
case"kente":w.bYq(d,e,v)
break
case"trophy":w.cyZ(d,e,v)
break
case"shooting":w.crj(d,e,v)
break
case"bokeh":w.bB0(d,e,v)
break
case"orbits":w.ccL(d,e,v)
break
case"flowers":w.bNL(d,e,v)
break
case"music":w.c1b(d,e,v)
break
case"mandala":w.c_D(d,e,v)
break
case"sparklers":w.ctC(d,e,v)
break
case"city":w.bEx(d,e,v)
break}},
rs(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.W()
v=B.M()
v.r=g.j(A.k.D(h,0,1)).gp(0)
v.a=A.ny
u=new B.aO(w.r,A.ap,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.b5(w,s))
u.E(new B.cU(w,t,w+f,t))
u.E(new B.cU(w,t,w,t+f))
u.E(new B.cU(w,t,w-f,t))
u.E(new B.cU(w,t,w,s))
u.E(new B.bF())
d.aO(u,v)
d.ae(e,f*0.18,v)},
lG(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.k.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cW(q,v)*2.5)+C.cW(q,u)*6.28)+1)/2
this.rs(d,new B.u(C.cW(q,t)*o,C.cW(q,s)*n),m*(0.006+0.014*C.cW(q,r))*(0.5+p),h,p*p)}},
aRH(c3,c4,c5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0=c4.a,c1=c4.b,c2=Math.min(c0,c1)
this.lG(c3,c4,c5,40,A.c,10)
w=x.O
v=[B.a([A.bK,A.aH],w),B.a([A.io,A.bA],w),B.a([A.et,A.aS],w),B.a([A.c,A.aw],w)]
for(u=c2*0.005,t=c3.a,s=c2*0.012,r=c5*30,q=46*this.d,p=c2*0.08,o=c2*0.04,n=c2*0.006,m=c2*0.008,l=0;l<7;++l){k=c5+l*2.8/7
j=A.k.bt(k/2.8)
i=A.k.F(k,2.8)/2.8
h=l*97+j*13
g=c0*(0.15+0.7*C.cW(h,1))
f=g+c0*(C.cW(h,2)-0.5)*0.15
e=c1*(0.12+0.35*C.cW(h,3))
d=v[Math.abs(A.o.F(h,4))]
if(i<0.22){a0=B.lg(new B.u(g,c1),new B.u(f,e),A.ct.aw(0,i/0.22))
a0.toString
$.W()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.saq(new B.a8(A.a3,A.a7,A.x,B.a([d[0].j(0),d[0]],w),null,null).av(0,B.rp(new B.u(g,c1),a0)))
a1.c=n
a1.d=A.bO
a2=B.lg(new B.u(g,c1),a0,0.75)
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
a6=A.ct.aw(0,a5)
a0=1-a5
a7=a0*a0
a0=Math.max(4,A.k.V(q))
a2=C.cW(h,4)
if(a5<0.15){a4=1-a5/0.15
$.W()
a8=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a8.r=d[0].j(0.5*a4).gp(0)
a8.z=new B.hu(A.G,o)
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
b9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b9.r=b8.j(a8).gp(0)
b9.c=u
b9.d=A.bO
b9.a=A.ny
a3=b9.H()
t.drawLine.apply(t,[f+b6*b3*0.82,e+b7*b3*0.82+b0,b4,b5,a3])
a3.delete()
if(a4&&C.cW(h,b1+120)>0.5)this.rs(c3,new B.u(b4,b5),s,A.c,a7*(0.5+0.5*Math.sin(r+b1)))}}}},
bFT(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=a2.a,i=a2.b,h=Math.min(j,i),g=A.k.F(a3*0.25,1.6)-0.3,f=0+j,e=0+i,d=$.W(),a0=B.M()
a0.saq(new B.a8(A.ax,A.aC,A.x,D.d6c,B.a([A.k.D(g-0.15,0,1),A.k.D(g,0,1),A.k.D(g+0.15,0,1)],x.x),null).av(0,new B.a9(0,0,f,e)))
a1.aZ(new B.a9(0,0,f,e),a0)
a0=Math.max(4,A.k.V(150*this.d))
for(f=a1.a,w=i+h*0.1,i=h*0.05,e=a3*4,v=x.v,u=0;u<a0;++u){t=A.k.F(a3*(h*(0.08+0.12*C.cW(u,1)))+C.cW(u,2)*w,w)
s=C.cW(u,3)
r=Math.sin(a3*(0.8+C.cW(u,4))+u)
q=h*(0.012+0.012*C.cW(u,5))
p=Math.cos(a3*(2+3*C.cW(u,6))+u)
o=D.Pc[A.o.D(A.k.bt(C.cW(u,7)*5),0,4)]
J.by(f.save())
f.translate(s*j+r*h*0.04,t-i)
f.rotate((a3*(0.6+C.cW(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t=Math.abs(p)
n.r=B.aq(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aO(d.r,A.ap,null,null,t)
d=-q*2
t.push(new B.b5(d,0))
for(l=1;l<=8;++l){s=new B.ap(d+l*q*0.5,Math.sin(l*1.2+e)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.bx(r)
s=m.e
if(s!=null)s.a.delete()
m.e=null}d=$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=B.b0(n.r).gp(0)
t.b=A.ae
t.c=q*0.35
k=t.H()
t=m.e
f.drawPath((t==null?m.e=new B.cF(m.gbL().a.snapshot()):t).a,k)
k.delete()}else{t=B.cm(A.J,q*1.8*A.k.D(t,0.15,1),q)
k=n.H()
f.drawRect(B.c0(t),k)
k.delete()}f.restore()}this.lG(a1,a2,a3,25,A.bK,30)},
bHv(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
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
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.bK.j(0.22),D.b9J],v),a4,a4).av(0,B.bT(w,u)))
l=o.H()
o=m.gbL().a.snapshot()
t.drawPath((m.e=new B.cF(o)).a,l)
l.delete()}k=a7*0.28
j=a7*0.16
a5-=k/2
a6=a6-a7*0.15-j
i=new B.aO($.W().r,A.ap,a4,a4,B.a([],r))
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
n.saq(new B.a8(A.b0,A.b5,A.x,D.d51,a4,a4).av(0,new B.a9(a5,a6,o,v)))
a8.aO(i,n)
for(v=[D.ekd,D.eeg,D.etg],o=a6+j*0.78,n=a7*0.016,g=a7*0.005,f=o-g,e=0;e<3;++e){d=v[e]
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
g.r=A.hU.gp(0)
l=g.H()
t.drawCircle(a5+k*a2,a6+n,o,l)
l.delete()}}for(v=B.wX(i),u=B.a([],x.X),o=new B.vs(v,!1,u),n=v.a,g=a7*0.008;o.C();){f=o.c
if(f===0||o.f)B.ba(B.jU(y.M));--f
o.jn()
d=u[f].b
d===$&&B.c()
d=d.a.length()
d=new B.aO(n,v.b,a4,new B.cI([new B.H6(o,f),0,d*h,!0]),B.a([],r))
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.b=A.ae
f.c=g
f.e=A.fA
f.r=A.bK.gp(0)
l=f.H()
f=d.gbL().a.snapshot()
t.drawPath((d.e=new B.cF(f)).a,l)
l.delete()}if(s){a3=A.k.F(b0*0.5,1)
this.rs(a8,new B.u(a5+k*a3,a6+j*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.lG(a8,a9,b0,45,A.bK,40)},
bAu(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
this.lG(a8,a9,b0,60,A.c,50)
w=[D.eDw,D.eDe,D.eD8,D.eEu]
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
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}else{d=new B.ap(e,a0)
i.push(d)
a1=h.f
if(a1!=null)d.bx(a1)
d=h.e
if(d!=null)d.a.delete()
h.e=null}}$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=t
n.r=m.j(0.28).gp(0)
n.a=A.ny
n.z=new B.hu(A.G,s)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbL().a.snapshot()):n).a,a2)
a2.delete()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.b=A.ae
n.c=v
n.r=m.j(0.55).gp(0)
n.a=A.ny
n.z=new B.hu(A.G,v)
a2=n.H()
n=h.e
u.drawPath((n==null?h.e=new B.cF(h.gbL().a.snapshot()):n).a,a2)
a2.delete()}for(v=Math.max(4,A.k.V(40*this.d)),a3=a6+20,t=b0*a7,a4=0;a4<v;++a4){s=A.k.F(t*(0.05+0.06*C.cW(a4,1))+C.cW(a4,2)*a3,a3)
r=C.cW(a4,3)
q=Math.sin(b0+a4)
p=C.cW(a4,4)
$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=A.xd.j(0.4+0.5*C.cW(a4,5)).gp(0)
n.a=A.ny
a2=n.H()
u.drawCircle(r*a5+q*a7*0.02,a6-s,a7*(0.003+0.004*p),a2)
a2.delete()}},
bDI(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=a2.a,j=a2.b,i=Math.min(k,j),h=Math.sin(a3*1.5),g=k/2,f=j*0.5,e=i*0.55,d=$.W(),a0=B.M()
a0.saq(new B.bS(A.A,0.5,A.x,l,0,B.a([A.hG.j(0.25+0.1*h),D.WC],x.O),l,l).av(0,B.bT(new B.u(g,f),e)))
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
if(q!=null)d.bx(q)
d=u.e
if(d!=null)d.a.delete()
u.e=null}d=$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.b=A.ae
a0.c=h
a0.r=D.Pc[A.o.F(w,4)].j(0.7).gp(0)
p=a0.H()
a0=u.e
g.drawPath((a0==null?u.e=new B.cF(u.gbL().a.snapshot()):a0).a,p)
p.delete()}for(h=Math.max(4,A.k.V(110*this.d)),f=j*0.08,o=j*1.1,e=a3*2,w=0;w<h;++w){n=j-A.k.F(a3*(i*(0.07+0.12*C.cW(w,1)))+C.cW(w,2)*o,o)
r=k*(0.1+0.8*C.cW(w,3))+Math.sin(e+w)*i*0.015
m=i*(0.004+0.012*C.cW(w,4))
if(n<f){this.rs(a1,new B.u(r,n),m*2.4,A.bK,A.k.D(n/f,0,1))
continue}$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
a0=m*0.25
d.c=Math.max(0.8,a0)
d.r=A.Aq.j(0.75).gp(0)
p=d.H()
g.drawCircle(r,n,m,p)
p.delete()
d=m*0.35
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.r=A.c.j(0.8).gp(0)
p=t.H()
g.drawCircle(r-d,n-d,a0,p)
p.delete()}},
bJG(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=null,a6=b0.a,a7=b0.b,a8=Math.min(a6,a7)
this.lG(a9,b0,b1,30,A.l7,60)
for(w=Math.max(4,A.k.V(42*this.d)),v=a9.a,u=b1*2.2,t=b1*a8,s=b1*0.7,r=b1*0.8,q=x.v,p=0;p<w;++p){o=a8*(0.025+0.035*C.cW(p,1))
n=a7+o*4
m=A.k.F(t*(0.04+0.06*C.cW(p,2))+C.cW(p,3)*n,n)-o*2
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
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.ax,A.aC,A.x,D.d0W,a5,a5).av(0,B.cm(A.J,k*1.2,o)))
a2=g.H()
g=f.gbL().a.snapshot()
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
if(a4>0.85)this.rs(a9,new B.u(l+o*0.2,m-o*0.3),o*0.9,A.c,(a4-0.85)/0.15)}},
ctO(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
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
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=A.bK.j(r?0.12:0.07).gp(0)
m=p.H()
r=n.gbL().a.snapshot()
w.drawPath((n.e=new B.cF(r)).a,m)
m.delete()}for(v=f*0.008,l=0;l<3;++l){k=A.k.F(a0+l*0.6,1.8)/1.8
$.W()
u=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
u.b=A.ae
r=1-k
u.c=v*r
u.r=A.bK.j(r*0.6).gp(0)
m=u.H()
w.drawCircle(h,g,f*(0.15+0.6*k),m)
m.delete()}j=A.k.bt(a0/2.4)
k=A.k.F(a0,2.4)/2.4
for(w=Math.max(4,A.k.V(70*this.d)),v=j+1,u=(1-k)*1.2,t=0;t<w;++t){s=C.cW(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.blD.aw(0,k)*(0.5+0.5*C.cW(t,v)))
this.rs(d,new B.u(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cW(t,3)),D.Pc[A.o.D(A.k.bt(C.cW(t,4)*5),0,4)],u)}},
bAI(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
for(w=this.d,v=Math.max(4,A.k.V(22*w)),u=a7.a,t=x.O,s=x.v,r=a9*2,q=a9*a6,p=a9*0.9,o=0;o<v;++o){n=a6*(0.045+0.035*C.cW(o,1))
m=a5+n*6
l=n*2
k=a5+l-A.k.F(q*(0.05+0.05*C.cW(o,2))+C.cW(o,3)*m,m)
j=C.cW(o,4)*a4+Math.sin(p+o*1.3)*a6*0.03
i=D.av1[A.o.F(o,6)]
h=$.W()
g=B.a([],s)
f=new B.aO(h.r,A.ap,a3,a3,g)
h=k+n*1.15
g.push(new B.b5(j,h))
for(e=1;e<=6;++e){d=new B.ap(j+Math.sin(e*1.4+r+o)*n*0.15,h+e*n*0.35)
g.push(d)
a0=f.f
if(a0!=null)d.bx(a0)
d=f.e
if(d!=null)d.a.delete()
f.e=null}g=$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=Math.max(0.7,n*0.03)
d.r=A.c.j(0.6).gp(0)
a1=d.H()
d=f.e
u.drawPath((d==null?f.e=new B.cF(f.gbL().a.snapshot()):d).a,a1)
a1.delete()
a2=B.cm(new B.u(j,k),n*2.3,l)
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d=B.aq(i,A.w,0.35)
d.toString
l.saq(new B.bS(D.aVs,0.9,A.x,a3,0,B.a([A.c,i,d],t),V.auT,a3).av(0,a2))
a1=l.H()
u.drawOval(B.c0(a2),a1)
a1.delete()
l=B.a([],s)
g=new B.aO(g.r,A.ap,a3,a3,l)
d=n*0.12
l.push(new B.b5(j-d,h))
l.push(new B.ap(j+d,h))
l.push(new B.ap(j,k+n))
l.push(new B.bF())
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=B.aq(i,A.w,0.3).gp(0)
a1=l.H()
l=g.gbL().a.snapshot()
u.drawPath((g.e=new B.cF(l)).a,a1)
a1.delete()}for(w=Math.max(4,A.k.V(60*w)),m=a5+20,a5=a9*3,v=a6*0.012,t=a6*0.02,o=0;o<w;++o){s=A.k.F(q*(0.1+0.1*C.cW(o,11))+C.cW(o,12)*m,m)
r=C.cW(o,13)
J.by(u.save())
u.translate(r*a4,s-10)
u.rotate((a5+o)*180/3.141592653589793,0,0)
s=B.cm(A.J,t,v)
$.W()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=D.av1[A.o.F(o,6)].j(0.85).gp(0)
a1=r.H()
u.drawRect(B.c0(s),a1)
a1.delete()
u.restore()}},
bOt(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=b2.a,a6=b2.b,a7=Math.min(a5,a6),a8=a5/2,a9=a6/2,b0=new B.u(a8,a9)
this.lG(b1,b2,b3,50,A.c,70)
for(w=[D.eDE,D.eDk,D.eDq],v=b3*0.3,u=x.O,t=b1.a,s=0;s<3;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
r=a8+(p*a5+Math.sin(v)*a7*0.03)
m=a9+o*a6
l=a7*n
$.W()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([q.j(0.32+0.08*Math.sin(b3)),q.j(0)],u),a4,a4).av(0,B.bT(new B.u(r,m),l)))
j=k.H()
t.drawCircle(r,m,l,j)
j.delete()}w=Math.max(4,A.k.V(420*this.d))
for(v=a7*0.6,r=b3*0.18,i=0;i<w;++i){h=A.o.F(i,3)
g=C.cW(i,1)
f=v*Math.pow(g,0.8)
e=h*3.141592653589793*2/3+g*5.5+r+(C.cW(i,2)-0.5)*0.5
m=Math.cos(e)
l=Math.sin(e)
k=B.aq(A.bK,A.ez,g)
k.toString
d=C.cW(i,3)
$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.r=k.j(0.5+0.5*C.cW(i,4)).gp(0)
a0.a=A.ny
j=a0.H()
t.drawCircle(a8+m*f,a9+l*f*0.62,a7*(0.0025+0.004*d),j)
j.delete()}a8=a7*0.12
$.W()
a9=B.M()
a9.saq(new B.bS(A.A,0.5,A.x,a4,0,B.a([A.Aq.j(0.55),D.aem],u),a4,a4).av(0,B.bT(b0,a8)))
b1.ae(b0,a8,a9)
a1=A.k.F(b3,3.5)/3.5
if(a1<0.25){a2=A.k.bt(b3/3.5)
a3=new B.u(a5*(0.1+0.5*C.cW(a2,9)),a6*0.1*C.cW(a2,8))
a5=B.lg(a3,a3.ad(0,new B.u(v,a7*0.3)),a1/0.25)
a5.toString
a6=B.lg(a3,a5,0.6)
a6.toString
a8=B.M()
a8.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.c],u),a4,a4).av(0,B.rp(a3,a5)))
a8.c=a7*0.005
a8.d=A.bO
b1.bA(a6,a5,a8)}},
ckT(b9,c0,c1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5=null,b6=c0.a,b7=c0.b,b8=Math.min(b6,b7)
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
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.saq(new B.bS(A.A,0.5,A.x,b5,0,B.a([A.Aq.j(0.28),D.aem],w),b5,b5).av(0,B.bT(new B.u(q,u),t)))
o.a=A.ny
l=o.H()
q=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cF(q)).a,l)
l.delete()}for(u=[!0,!1],q=b7*0.52,o=b8*0.012,n=b7*0.5,k=b7*0.55,j=0+b7,i=b6*0.16,h=i*0.55,g=i*0.9,f=i*0.62,e=i*0.95,d=b6-e,a0=b6-f,a1=b6-g,a2=b6-h,a3=b6-i,a4=0;a4<2;++a4){a5=u[a4]
a6=a5?0:a3
a7=B.a([],w)
for(a8=0;a8<7;++a8)a7.push((a8&1)===0?A.er:A.eN)
a9=$.W()
b0=B.a([],s)
m=new B.aO(a9.r,A.ap,b5,b5,b0)
b0.push(new B.b5(a5?0:b6,0))
b0.push(new B.ap(a5?i:a3,0))
a9=a5?h:a2
b0.push(new B.cU(a9,k,a5?g:a1,b7))
b0.push(new B.ap(a5?0:b6,b7))
b0.push(new B.bF())
a9=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a9.saq(new B.a8(A.a3,A.a7,A.x,a7,b5,b5).av(0,new B.a9(a6,0,a6+i,j)))
l=a9.H()
a9=m.gbL().a.snapshot()
v.drawPath((m.e=new B.cF(a9)).a,l)
l.delete()
a9=a5?f:a0
b0=a5?e:d
b1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
b1.r=A.hG.gp(0)
b1.c=o
b1.d=A.bO
l=b1.H()
v.drawLine.apply(v,[a9,n,b0,q,l])
l.delete()}b2=new B.aO($.W().r,A.ap,b5,b5,B.a([],s))
w=b7*0.78
b2.E(new B.b5(b6*0.42,w))
b2.E(new B.ap(b6*0.58,w))
b2.E(new B.ap(b6*0.8,b7))
b2.E(new B.ap(b6*0.2,b7))
b2.E(new B.bF())
v=B.M()
v.saq(D.bUA.av(0,new B.a9(0,w,0+b6,w+b7*0.22)))
b9.aO(b2,v)
for(w=Math.max(4,A.k.V(80*this.d)),b3=b7+10,b7=c1*b8,v=c1*5,r=0;r<w;++r){b4=A.k.F(b7*(0.05+0.07*C.cW(r,1))+C.cW(r,2)*b3,b3)
u=C.cW(r,3)
s=Math.sin(c1+r)
q=Math.sin(v+r)
this.rs(b9,new B.u(b6*(0.15+0.7*u)+s*b8*0.01,b4),b8*(0.006+0.008*C.cW(r,4)),A.bK,0.3+0.7*((q+1)/2))}},
bFf(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=e.b,g=Math.min(i,h)
for(w=Math.max(4,A.k.V(55*this.d)),v=d.a,u=f*g,t=0;t<w;++t){s=g*(0.02+0.02*C.cW(t,1))
r=h+s*4
q=s*2
p=A.k.F(u*(0.12+0.12*C.cW(t,2))+C.cW(t,3)*r,r)-q
o=C.cW(t,4)*i
n=Math.cos(f*(2+3*C.cW(t,5))+t)
m=Math.abs(n)
l=B.cm(new B.u(o,p),q,q*A.k.D(m,0.12,1))
$.W()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.saq(new B.a8(A.ax,A.aC,A.x,n>0?D.dfA:D.czc,null,null).av(0,l))
k=q.H()
v.drawOval(B.c0(l),k)
k.delete()
q=-(s*0.22)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=Math.max(0.6,s*0.08)
j.r=D.biA.gp(0)
k=j.H()
v.drawOval(B.c0(new B.a9(l.a-q,l.b-q,l.c+q,l.d+q)),k)
k.delete()
if(m>0.97)this.rs(d,new B.u(o+s*0.3,p-s*0.4),s*0.9,A.c,0.9)}this.lG(d,e,f,30,A.bK,110)},
bYC(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
this.lG(a3,a4,a5,50,A.c,120)
for(w=Math.max(4,A.k.V(26*this.d)),v=a3.a,u=x.O,t=a5*a2,s=a5*0.6,r=a5*9,q=x.v,p=0;p<w;++p){o=a2*(0.035+0.035*C.cW(p,1))
n=a1+o*4
m=a1+o*2-A.k.F(t*(0.03+0.04*C.cW(p,2))+C.cW(p,3)*n,n)
l=C.cW(p,4)*a0+Math.sin(s+p)*a2*0.03
k=0.8+0.2*Math.sin(r+p*3)
j=o*2.2
i=$.W()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.saq(new B.bS(A.A,0.5,A.x,d,0,B.a([W.WP.j(0.45*k),D.adb],u),d,d).av(0,B.bT(new B.u(l,m),j)))
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
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i=B.aq(D.b9U,A.c,0.2*k)
i.toString
j.saq(new B.a8(A.b0,A.b5,A.x,B.a([D.bee,i],u),d,d).av(0,B.cm(new B.u(l,m),o*1.4,o)))
g=j.H()
j=f.gbL().a.snapshot()
v.drawPath((f.e=new B.cF(j)).a,g)
g.delete()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(k).gp(0)
g=j.H()
v.drawCircle(l,m+o*0.55,o*0.12,g)
g.delete()}},
bWg(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.k.V(40*this.d)),v=a3.a,u=x.O,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cW(p,1))
n=a1+o*4
m=A.k.F(s*(0.05+0.06*C.cW(p,2))+C.cW(p,3)*n,n)
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
l.push(new B.pv(k*1.8,h,k*0.9,g,0,k*0.55))
l.push(new B.pv(m,g,o*1.8,h,0,m))
l.push(new B.bF())
f=D.cTf[A.o.F(p,5)]
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=B.aq(f,A.w,0.25)
l.toString
m.saq(new B.bS(A.rP,0.5,A.x,d,0,B.a([A.c,f,l],u),H.a1z,d).av(0,B.bT(A.J,o*1.4)))
e=m.H()
m=i.gbL().a.snapshot()
v.drawPath((i.e=new B.cF(m)).a,e)
e.delete()
v.restore()}this.lG(a3,a4,a5,30,A.io,130)},
cg2(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=x.v,t=a0*f,s=a0*0.9,r=a0*2,q=0;q<w;++q){p=f*(0.015+0.02*C.cW(q,1))
o=g+p*4
n=A.k.F(t*(0.05+0.06*C.cW(q,2))+C.cW(q,3)*o,o)
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
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m=(q&1)===0?D.cty:D.d29
n.saq(new B.a8(A.a3,A.a7,A.x,m,i,i).av(0,B.bT(A.J,p)))
j=n.H()
n=k.gbL().a.snapshot()
v.drawPath((k.e=new B.cF(n)).a,j)
j.delete()
v.restore()}this.lG(d,e,a0,25,A.bK,140)},
bCJ(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.lG(b0,b1,b2,40,A.bK,150)
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
a3.push(new B.pv(f,e,l,d,h,0))
a3.push(new B.pv(q,h,g,q,0,h))
a3.push(new B.bF())
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.saq(new B.a8(A.a3,A.a7,A.x,i?D.d1U:D.d4w,a6,a6).av(0,new B.a9(0,m,k,j)))
a5=a2.H()
a2=a4.gbL().a.snapshot()
v.drawPath((a4.e=new B.cF(a2)).a,a5)
a5.delete()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a2.b=A.ae
a2.c=Math.max(0.6,o)
a2.r=D.Ay.gp(0)
a5=a2.H()
a2=a4.e
v.drawPath((a2==null?a4.e=new B.cF(a4.gbL().a.snapshot()):a2).a,a5)
a5.delete()
v.restore()}$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.r=D.bhT.gp(0)
p.c=q*0.1
p.d=A.bO
a5=p.H()
v.drawLine.apply(v,[0,m*0.3,0,q*0.4,a5])
a5.delete()
v.restore()}},
c1r(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=a0.a,g=a0.b,f=Math.min(h,g),e=new B.u(h/2,g/2)
for(w=a1*0.45,v=f*0.012,u=d.a,t=0;t<4;++t){s=A.k.F(w+t/4,1)
r=f*(0.2+0.7*s)
$.W()
q=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
q.b=A.ae
q.c=v
q.r=D.aw3[t].j((1-s)*0.9).gp(0)
q.z=new B.hu(A.G,v)
p=r*0.3
p=B.bA(B.cm(e,r,r*1.6),new B.aT(p,p))
o=q.H()
u.drawRRect(B.er(p),o)
o.delete()}n=h/28
for(h=n*0.15,w=n*0.7,v=n*0.3,p=f*0.01,m=0;m<28;++m){l=g*(0.05+0.18*(0.5+0.5*Math.sin(a1*(3+C.cW(m,1)*4)+m)))
k=D.aw3[A.o.F(m,4)]
j=m*n+h
i=g-l
i=B.bA(new B.a9(j,i,j+w,i+l),new B.aT(v,v))
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=k.j(0.85).gp(0)
j.z=new B.hu(A.a9y,p)
o=j.H()
u.drawRRect(B.er(i),o)
o.delete()}},
bJR(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
w=a2*0.12
v=new B.u(a0,w)
u=a2*0.09
for(t=Math.max(4,A.k.V(60*this.d)),s=a5*0.6,a1*=0.55,r=a2*0.004,q=a3.a,p=0;p<t;++p){o=C.cW(p,1)*3.141592653589793*2+s
n=a2*(0.2+0.8*C.cW(p,2))
m=Math.cos(o)
l=Math.sin(o)
k=[A.c,A.bK,A.mP,A.dv][A.o.F(p,4)]
j=C.cW(p,3)
$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.r=k.j(0.75).gp(0)
i.a=A.ny
i.z=new B.hu(A.G,r)
h=i.H()
q.drawCircle(a0+m*n*1.4,a1+l*n*0.5,a2*(0.008+0.01*j),h)
h.delete()}a1=$.W()
t=B.M()
t.r=A.az.gp(0)
t.c=1.2
a3.bA(new B.u(a0,0),new B.u(a0,w-u),t)
t=B.M()
t.r=A.dA.gp(0)
a3.ae(v,u,t)
J.by(q.save())
a1=new B.aO(a1.r,A.ap,null,null,B.a([],x.v))
a1.E(new B.k_(B.bT(v,u)))
a3.qr(0,a1)
g=u/4
for(a1=a5*g*2,t=g*0.9,s=a5*4,f=-4;f<4;++f)for(r=w+f*g,m=r+t,l=f*2.3,e=-6;e<6;++e){j=a0+e*g+A.k.F(a1,g)
i=Math.sin(e*1.7+l+s)
$.W()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=B.aq(A.bn,A.c,0.4+0.6*((i+1)/2)).gp(0)
h=d.H()
q.drawRect(B.c0(new B.a9(j,r,j+t,m)),h)
h.delete()}q.restore()
a0=-u*0.4
this.rs(a3,v.ad(0,new B.u(a0,a0)),u*0.6,A.c,0.6+0.4*Math.sin(a5*5))},
cvm(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a3.a,f=a3.b,e=Math.min(g,f),d=g/2,a0=f*(1.05-0.25*A.ct.aw(0,A.k.D(a4/3,0,1))),a1=new B.u(d,a0)
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
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=A.bK.j(0.1).gp(0)
o=r.H()
r=p.gbL().a.snapshot()
w.drawPath((p.e=new B.cF(r)).a,o)
o.delete()}d=e*0.5
$.W()
a0=B.M()
a0.saq(new B.bS(A.A,0.5,A.x,h,0,B.a([D.b60.j(0.6),D.adb],x.O),h,h).av(0,B.bT(a1,d)))
a2.ae(a1,d,a0)
a0=e*0.2
d=B.M()
d.saq(D.ec_.av(0,B.bT(a1,a0)))
a2.ae(a1,a0,d)
for(d=a4*e*0.03,a0=g*1.4,v=g*0.2,u=e*0.35,r=e*0.07,q=e*0.06,n=e*0.03,m=e*0.18,t=0;t<5;++t){l=A.k.F(d*(1+t*0.3)+C.cW(t,1)*g*1.4,a0)-v
k=f*(0.15+0.12*t)
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.r=A.c.j(0.18).gp(0)
i=B.cm(new B.u(l,k),r,u)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()
i=B.cm(new B.u(l+q,k-n),r,m)
o=j.H()
w.drawOval(B.c0(i),o)
o.delete()}this.lG(a2,a3,a4,20,A.hU,180)},
cf6(a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=a2.a,d=a2.b,a0=Math.min(e,d)
for(w=a1.a,v=e+10,u=e/30,t=x.v,s=0;s<4;++s){r=$.W()
q=B.a([],t)
p=new B.aO(r.r,A.ap,f,f,q)
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
$.W()
r=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
r.r=B.aq(A.cz,A.j5,s/3).j(0.55).gp(0)
k=r.H()
r=p.e
w.drawPath((r==null?p.e=new B.cF(p.gbL().a.snapshot()):r).a,k)
k.delete()}for(v=Math.max(4,A.k.V(45*this.d)),j=d*0.95,d*=0.9,u=a3*a0,i=0;i<v;++i){h=a0*(0.012+0.02*C.cW(i,1))
g=d-A.k.F(u*(0.04+0.05*C.cW(i,2))+C.cW(i,3)*j,j)
n=C.cW(i,4)*e+Math.sin(a3+i)*a0*0.02
$.W()
t=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
t.saq(new B.bS(An.pe,0.5,A.x,f,0,D.d7N,f,f).av(0,B.bT(new B.u(n,g),h)))
k=t.H()
w.drawCircle(n,g,h,k)
k.delete()}this.lG(a1,a2,a3,25,A.c,190)},
ctt(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.k.V(70*this.d)),v=d.a,u=a1*e,t=a1*0.7,s=a1*0.4,r=0;r<w;++r){q=e*(0.01+0.025*C.cW(r,1))
p=f+q*4
o=A.k.F(u*(0.03+0.05*C.cW(r,2))+C.cW(r,3)*p,p)
n=C.cW(r,4)
m=Math.sin(t+r)
$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.c.j(0.6+0.4*C.cW(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bO
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
h.delete()}v.restore()}this.lG(d,a0,a1,40,A.et,200)},
bYI(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
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
g=B.cm(new B.u(p,0),q,r)
$.W()
f=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
f.saq(D.bUn.av(0,new B.a9(0,o,n,m)))
e=f.H()
s.drawOval(B.c0(g),e)
e.delete()
s.restore()}}$.W()
a0=B.M()
a0.b=A.ae
a0.c=a2*0.003
a0.r=D.ba7.gp(0)
a3.ae(w,v*1.08,a0)
d=a5*0.8
this.rs(a3,w.ad(0,new B.u(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.lG(a3,a4,a5,40,A.bK,210)},
cnr(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a9.a,a4=a9.b,a5=Math.min(a3,a4),a6=x.O,a7=[B.a([A.hG,A.hU],a6),B.a([A.ou,A.io],a6),B.a([A.aE,A.ez],a6)]
for(w=b0*0.3,v=0+a3,u=0+a4,t=a8.a,s=x.dB,r=s.k("bR<ak.E>"),q=s.k("ak.E"),p=b0*1.5,o=x.v,n=x.dN,m=0;m<3;++m){l=$.W()
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
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}else{f=new B.ap(e,f)
k.push(f)
a1=j.f
if(a1!=null)f.bx(a1)
f=j.e
if(f!=null)f.a.delete()
j.e=null}i.push(new B.u(e,d+a0))}for(l=new B.dz(i,s),l=new B.bR(l,l.gM(0),r);l.C();){h=l.d
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
$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k=a7[m]
h=k[0]
l.saq(new B.a8(A.a3,A.a7,A.x,B.a([h,k[1],h],a6),H.avI,new B.mj(w)).av(0,new B.a9(0,0,v,u)))
l.r=A.c.j(0.85).gp(0)
a2=l.H()
l=j.e
t.drawPath((l==null?j.e=new B.cF(j.gbL().a.snapshot()):l).a,a2)
a2.delete()}this.lG(a8,a9,b0,40,A.c,220)},
bYq(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b2.a,a8=b2.b,a9=Math.min(a7,a8),b0=a9*0.09
for(w=[!0,!1],v=b0*2,u=a7+v,t=b0*0.5,s=b1.a,r=b0*0.1,q=b0*0.35,p=b0*0.3,o=-b0*2,n=b3*a9,m=n*0.08,l=a8-b0,k=0;k<2;++k){j=w[k]
i=j?0:l
h=A.k.F(m,v)
g=o+(j?h:-h)
f=i+b0
e=i+q
d=e+p
for(;g<u;g=a1){a0=A.o.F(A.k.bt(g/t),5)
a1=g+t
$.W()
a2=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a3=Math.abs(a0)
a2.r=D.a1C[a3].gp(0)
a4=a2.H()
s.drawRect(B.c0(new B.a9(g,i,a1,f)),a4)
a4.delete()
a2=g+r
a5=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a5.r=D.a1C[A.o.F(a3+2,5)].gp(0)
a4=a5.H()
s.drawRect(B.c0(new B.a9(a2,e,a2+p,d)),a4)
a4.delete()}}for(w=Math.max(4,A.k.V(36*this.d)),u=b3*3,a6=a8-v,a0=0;a0<w;++a0){a8=A.k.F(n*(0.04+0.05*C.cW(a0,1))+C.cW(a0,2)*a6,a6)
v=C.cW(a0,3)
t=C.cW(a0,4)
this.rs(b1,new B.u(v*a7,l-a8),a9*(0.01+0.012*t),D.a1C[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(u+a0))}},
cyZ(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
for(w=a6*0.2,v=a3*0.03,u=a4.a,t=0;t<18;++t){s=t/18*3.141592653589793*2+w
r=Math.cos(s)
q=Math.sin(s)
$.W()
p=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
p.c=v
p.r=A.bK.j(0.06).gp(0)
o=p.H()
u.drawLine.apply(u,[a1,a2,a1+r*a3*1.2,a2+q*a3*1.2,o])
o.delete()}n=a3*0.16
m=a3*0.17
a2=a2-m-m
l=new B.aO($.W().r,A.ap,null,null,B.a([],x.v))
w=n/2
v=a1-w
l.E(new B.b5(v,a2))
w=a1+w
l.E(new B.ap(w,a2))
r=a2+m*0.75
q=n*0.1
p=a1+q
k=a2+m*0.8
l.E(new B.cU(w,r,p,k))
w=a2+m*0.95
l.E(new B.ap(p,w))
p=n*0.3
j=a2+m
l.E(new B.ap(a1+p,j))
l.E(new B.ap(a1-p,j))
q=a1-q
l.E(new B.ap(q,w))
l.E(new B.ap(q,k))
l.E(new B.cU(v,r,v,a2))
l.E(new B.bF())
r=v+n
for(w=[-1,1],q=a3*0.012,p=a2+m*0.25,k=n*0.4,i=m*0.35,h=0;h<2;++h){g=w[h]
f=B.cm(new B.u(a1+g*n*0.5,p),i,k)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=q
d.r=A.aw.gp(0)
o=d.H()
u.drawArc.apply(u,[B.c0(f),e*57.29577951308232,180,!1,o])
o.delete()}a1=B.M()
a1.saq(new B.a8(A.a3,A.a7,A.x,D.da1,A.av8,null).av(0,new B.a9(v,a2,r,j)))
a4.aO(l,a1)
a0=A.k.F(a6*0.6,1.4)
if(a0<1)this.rs(a4,new B.u(v+(r-v)*a0,a2+(j-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bFU(a4,a5,a6,60)},
bFU(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.k.V(g*this.d)),v=k+20,k=f*j,u=d.a,t=f*3,s=j*0.012,r=j*0.02,q=f*4,p=0;p<w;++p){o=A.k.F(k*(0.1+0.1*C.cW(p,31))+C.cW(p,32)*v,v)
n=C.cW(p,33)
J.by(u.save())
u.translate(n*l,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.cm(A.J,r*A.k.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.W()
n=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
n.r=D.Pc[A.o.F(p,5)].gp(0)
m=n.H()
u.drawRect(B.c0(o),m)
m.delete()
u.restore()}},
crj(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a1.a,d=Math.min(e,a1.b)
this.lG(a0,a1,a2,70,A.c,250)
for(w=Math.max(4,A.k.V(12*this.d)),v=-d*0.1,u=d*1.4,t=-0.6*u,s=x.O,r=d*0.006,q=a0.a,p=d*0.018,o=0;o<w;++o){n=1.6+C.cW(o,1)*1.6
m=A.k.F(a2+C.cW(o,2)*n,n)/n
l=e*(C.cW(o*7+A.k.bt((a2+C.cW(o,2)*n)/n),3)*1.2-0.1)
k=l+t*m
j=v+u*m
i=new B.u(k,j)
h=Math.max(0,m-0.18)
l+=t*h
h=v+u*h
$.W()
g=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
g.saq(new B.a8(A.a3,A.a7,A.x,B.a([A.c.j(0),A.bK],s),null,null).av(0,B.rp(new B.u(l,h),i)))
g.c=r
g.d=A.bO
f=g.H()
q.drawLine.apply(q,[l,h,k,j,f])
f.delete()
this.rs(a0,i,p,A.c,1-m)}},
bB0(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
for(w=Math.max(4,A.k.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=d.a,r=0;r<w;++r){q=h*(0.03+0.09*C.cW(r,1))
p=A.k.F(C.cW(r,2)*j+Math.sin(v+r)*h*0.12,j)
o=A.k.F(C.cW(r,3)*i+Math.cos(u+r*1.3)*h*0.1,i)
n=0.12+0.18*(0.5+0.5*Math.sin(t+r))
$.W()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l=A.o.F(r,5)
m.r=D.axx[l].j(n).gp(0)
m.a=A.ny
m.z=new B.hu(A.G,q*0.12)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()
m=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
m.b=A.ae
m.c=Math.max(0.6,q*0.05)
m.r=D.axx[l].j(n*1.4).gp(0)
k=m.H()
s.drawCircle(p,o,q,k)
k.delete()}},
ccL(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i)
j/=2
i/=2
for(w=d.a,v=f*0.05,u=h*0.003,t=h*0.012,s=h*0.03,r=h*0.02,q=0;q<4;++q){J.by(w.save())
w.translate(j,i)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.cm(A.J,h*(0.28+q*0.05),h*(0.8+q*0.12))
$.W()
o=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
o.b=A.ae
o.c=u
o.r=A.bK.j(0.45).gp(0)
n=o.H()
w.drawOval(B.c0(p),n)
n.delete()
m=f*(0.9+q*0.25)+q
o=Math.cos(m)*(p.c-p.a)/2
l=Math.sin(m)*(p.d-p.b)/2
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hU.gp(0)
n=k.H()
w.drawCircle(o,l,t,n)
n.delete()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=A.hG.j(0.4).gp(0)
k.z=new B.hu(A.G,r)
n=k.H()
w.drawCircle(o,l,s,n)
n.delete()
w.restore()}this.lG(d,e,f,45,A.bK,270)},
bNL(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=Math.max(4,A.k.V(22*this.d)),v=a5.a,u=x.O,t=a7*0.3,s=a2*0.94,r=a2*0.06,q=a3*0.92,p=a3*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cW(o,1)
A:{if(0===n){l=new B.u(m*a2,p)
break A}if(1===n){l=new B.u(m*a2,q)
break A}if(2===n){l=new B.u(r,m*a3)
break A}l=new B.u(s,m*a3)
break A}k=A.k.F(a7+C.cW(o,2)*4,4)/4
j=A.ev.aw(0,A.k.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a4*(0.03+0.03*C.cW(o,3))*(j*i)
if(h<=0.5)continue
g=D.d_a[A.o.F(o,5)]
J.by(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.cm(new B.u(0,l),i,j)
$.W()
a0=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a0.saq(new B.a8(A.b0,A.b5,A.x,B.a([A.c,g],u),null,null).av(0,B.cm(new B.u(0,l),f,h)))
a1=a0.H()
v.drawOval(B.c0(d),a1)
a1.delete()}$.W()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.r=A.hG.gp(0)
a1=l.H()
v.drawCircle(0,0,h*0.3,a1)
a1.delete()
v.restore()}this.lG(a5,a6,a7,30,A.hU,280)},
c1b(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=[0,1],v=a4*0.008,u=a5.a,t=a7*0.6,s=a3/2,r=0;r<2;++r){q=w[r]
for(p=q===0,o=a2*q,n=0;n<4;++n){m=A.k.F(t+n/4,1)
l=B.bT(new B.u(o,s),a4*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.c=v
j.r=D.aue[n].j((1-m)*0.8).gp(0)
i=j.H()
u.drawArc.apply(u,[B.c0(l),k*57.29577951308232,119.99999999999999,!1,i])
i.delete()}}for(w=Math.max(4,A.k.V(26*this.d)),h=a3+30,v=a7*a4,t=a7*1.5,g=0;g<w;++g){f=a3-A.k.F(v*(0.06+0.06*C.cW(g,1))+C.cW(g,2)*h,h)
e=C.cW(g,3)*a2+Math.sin(t+g)*a4*0.04
d=a4*(0.015+0.012*C.cW(g,4))
a0=D.aue[A.o.F(g,4)]
$.W()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=a0.gp(0)
J.by(u.save())
u.translate(e,f)
u.rotate(-17.188733853924695,0,0)
s=B.cm(A.J,d,d*1.5)
i=a1.H()
u.drawOval(B.c0(s),i)
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
c_D(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.b=A.ae
d.c=t
d.r=B.aq(A.bK,A.mP,k).j(0.7).gp(0)
a2=d.H()
d=a1.gbL().a.snapshot()
v.drawPath((a1.e=new B.cF(d)).a,a2)
a2.delete()
d=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
d.r=A.hU.j(0.8).gp(0)
a2=d.H()
v.drawCircle(0,l,u,a2)
a2.delete()}v.restore()}a4=a6*0.17
$.W()
a5=B.M()
a5.saq(new B.bS(A.A,0.5,A.x,a3,0,B.a([A.hG.j(0.25),D.WC],x.O),a3,a3).av(0,B.bT(w,a4)))
a7.ae(w,a4,a5)
this.lG(a7,a8,a9,30,A.bK,300)},
ctC(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
for(w=[-1,1],v=70*this.d,u=a9*0.003,t=b0.a,s=a7/2,a8*=0.95,r=b2*1.3,q=a9*0.008,p=a9*0.06,o=x.O,n=0;n<2;++n){m=w[n]
l=s+m*a7*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*a9*0.45-m*a9*0.08)
i=a8+-Math.cos(k)*a9*0.45
$.W()
h=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
h.r=A.bn.gp(0)
h.c=q
h.d=A.bO
g=h.H()
t.drawLine.apply(t,[l,a8,j,i,g])
g.delete()
l=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
l.saq(new B.bS(A.A,0.5,A.x,null,0,B.a([A.hU,A.hG.j(0.6),D.WC],o),null,null).av(0,B.bT(new B.u(j,i),p)))
g=l.H()
t.drawCircle(j,i,p,g)
g.delete()
for(l=Math.max(4,A.k.V(v)),f=0;f<l;++f){e=0.5+0.4*C.cW(f,1)
d=A.k.F(b2+C.cW(f,2)*e,e)/e
a0=A.k.bt((b2+C.cW(f,2)*e)/e)
a1=C.cW(f*31+a0,3)*3.141592653589793*2
a2=a9*(0.06+0.16*C.cW(f*17+a0,4))
h=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=B.aq(A.hU,A.aH,d).j(1-d).gp(0)
a6.c=Math.max(0.8,u)
a6.d=A.bO
a6.a=A.ny
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
g.delete()}}}this.lG(b0,b1,b2,35,A.bK,310)},
bEx(a9,b0,b1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=b0.a,a8=b0.b
this.aRH(a9,new B.at(a7,a8*0.75),b1*0.9)
w=Math.min(a7,a8)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=a9.a,q=w*0.025,p=w*0.035,o=0,n=0;o<a7;){m=w*(0.08+0.1*C.cW(n,1))
l=a8*(0.14+0.24*C.cW(n,2))
k=a8-l
j=new B.a9(o,k,o+m,k+l)
$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.saq(D.bVi.av(0,j))
h=i.H()
r.drawRect(B.c0(j),h)
h.delete()
g=A.k.bt(m/q)
f=A.k.bt(l/p)
for(i=o+u,k+=t,e=n*50,d=0;d<g;++d)for(a0=i+d*w*0.025,a1=a0+t,a2=e+d,a3=d*1.7,a4=0;a4<f;++a4){if(!(Math.sin(b1*(0.3+C.cW(a2,a4))+a3+a4*2.3+n)>0.2))continue
a5=k+a4*w*0.035
$.W()
a6=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a6.r=A.bK.j(0.85).gp(0)
h=a6.H()
r.drawRect(B.c0(new B.a9(a0,a5,a1,a5+s)),h)
h.delete()}o+=m+v;++n}},
ar(d){return d.b!==this.b||d.d!==this.d}}
C.aZg.prototype={
B(d){var w,v=null,u=new C.c7I(),t=new C.c7K(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.an1,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.c7J(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Gy[w]))
return B.bY(A.bz,s,A.bq,12,10)}}
C.YO.prototype={
R(){return new C.az4()}}
C.az4.prototype={
gvt(){var w=this.d
return w===$?this.d=this.a.c:w},
gaYC(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.ar(new B.bb(w.b,A.b4,A.aN),$.aw())}return v},
gawx(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaJS()
v=$.aw()
u.f!==$&&B.bL()
t=u.f=new B.ar(new B.bb(w,A.b4,A.aN),v)}return t},
q(){var w=this.gaYC(0),v=$.aw()
w.U$=v
w.P$=0
w=this.gawx()
w.U$=v
w.P$=0
this.a2()},
Zw(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Zw=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.hW().BQ(90,700,700,A.eG),$async$Zw)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fi(),$async$Zw)
case 8:p=e
o=q.b.toLowerCase()
n=J.ahp(o,".png")?"image/png":"image/jpeg"
r.m(new C.d71(r,n,p))
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
return B.i($async$Zw,v)},
aYB(d){var w=null,v=A.c.j(0.07)
return B.br(w,new B.b4(4,B.m(12),A.Y),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.aPq,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.agu(p.gvt().a)
if(n==null)n=A.d.gL(D.Gy)
w=p.gvt()
v=p.r
u=x.p
v=B.E(new B.an(A.W,o,A.aa,A.r,B.a([B.bZ(0,new C.N6(p.gvt(),!1,!0,new B.cx(w.a+v,x.W)),0,0,0),B.ao(o,B.Hq(A.mv,new C.d76(d),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.Hq(D.bF5,new C.d77(p),B.nw(o,A.aX,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aPk,o,o,o)
t=B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gaYC(0),o,o,o,o,o,2,p.aYB("Big words"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d78(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.ho,!0,A.a4,o,A.am,o,o,o,o),1)
s=A.c.j(0.07)
r=B.I(A.hG.j(0.6),A.q,1)
if(p.gvt().d.length===0)q=D.bIq
else{q=C.hcX(p.gvt().d)
if(q==null)q=new Uint8Array(0)
q=B.hS(B.fL(q,A.A,o,o,A.cm,A.bR,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ab,B.aE(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gc6K(),o,o,o,o,o,o,!1,A.a8)],u)
if(p.gvt().d.length!==0)r.push(B.aH(o,o,o,o,D.a0q,o,o,o,new C.d79(p),o,o,o,o,"Remove logo",o))
return B.c8(o,A.w,B.bn(!0,B.v(B.a([v,B.p(o,B.v(B.a([w,A.S,B.A(r,A.m,o,A.e,A.j,0,o,o),A.N,B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),p.gawx(),o,o,o,o,o,2,p.aYB("Line under it"),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.d7a(p),o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,A.dm,!0,A.a4,o,A.am,o,o,o,o),A.ac,B.dp(D.bHj,D.fuz,new C.d7b(p,d),B.bl(A.aw,o,o,o,A.w,o,A.ck,o,new B.b7(B.m(14),A.Y),o,o,o))],u),A.aj,o,A.e,A.Q,0,A.p),A.f,o,o,D.aZP,o,o,o,o,A.F7,o,o,o)],u),A.m,o,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),o,!1,!1,o,o)}}
C.aKJ.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.Z8.prototype={
R(){return new C.bfg(new B.ar(A.as,$.aw()))}}
C.bfg.prototype={
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.M,l=n?A.aR:A.ak,k=B.aI(d,A.bU,x.w).w,j=n?A.M:A.c,i=B.m(28),h=B.I(n?A.bF:A.aL,A.q,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.l(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aH(o,o,o,o,B.X(A.cB,l,o,o,o,o),o,o,o,new C.ddO(d),o,o,o,o,o,o)],g),A.m,o,A.e,A.j,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.cKL[w]
u=B.a([],g)
for(t=J.aV(v.b);t.C();){s=t.gT(t)
r=new B.aT(12,12)
q=new B.aT(12,12)
p=n?A.c.j(0.06):A.bM
u.push(B.aL(!1,new B.bp(r,r,r,r),!0,B.p(A.A,new B.x(s,o,A.uB,o,o,o,o,o,o,o,o,o),A.f,o,o,new B.o(p,o,o,new B.bp(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.ddP(this,s),o,o,o,o,o,o,o))}A.d.v(e,B.a([new B.C(A.hK,new B.x(v.a.toUpperCase(),o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o,o,o,o,o,o,o),o),new B.C0(A.bz,6,6,A.bq,u,o)],g))}e.push(A.aA)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.l(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.N)
v=B.l(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bm:A.aP
e.push(B.A(B.a([B.E(B.aM(o,A.T,!1,o,!0,A.r,o,B.aN(),this.d,o,o,o,o,o,2,B.br(o,new B.b4(4,B.m(14),A.Y),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ai,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.a9,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a4,o,A.am,o,o,o,o),1),A.ab,B.bH(A.aQi,new C.ddQ(this),o)],g),A.m,o,A.e,A.j,0,o,o))
e.push(A.N)
return B.bn(!0,B.p(o,B.v(B.a([f,new B.dq(1,A.cn,B.cz(e,o,o,o,o,A.ah,!0),o)],g),A.F,o,A.e,A.Q,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.tx,A.Yg,o,o,o),!0,!1,A.af,!0,!0)}}
C.beE.prototype={
a5(a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.eL()
a2.dB(this.c)
w=this.b
v=w/6.283185307179586
$.W()
u=B.M()
u.z=A.QN
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
$.W()
a1=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
a1.r=e.gp(0)
a1.c=1
d=a1.H()
s.drawLine.apply(s,[k-a0,g,k+a0,g+0,d])
d.delete()
d=a1.H()
s.drawLine.apply(s,[k,g-a0,k+0,g+a0,d])
d.delete()}}},
ar(d){return d.b!==this.b}}
C.bel.prototype={
a5(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=null,a1=B.bA(new B.a9(0,0,0+a7.a,0+a7.b),A.ks),a2=this.b,a3=Math.sin(a2*2),a4=$.W(),a5=B.M()
a5.b=A.ae
a5.c=6
w=this.c
a5.r=w.j(0.12+(0.5+a3*0.5)*0.18).gp(0)
a5.z=A.lp
a6.aD(a1,a5)
a5=x.v
a4=new B.aO(a4.r,A.ap,a0,a0,B.a([],a5))
a4.E(new B.iU(a1))
v=new B.S5(new B.vs(B.wX(a4),!1,B.a([],x.X))).gL(0)
a4=v.a
a3=v.b
a4.jn()
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
$.W()
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.b=A.ae
j.d=A.bO
j.c=1.5+2*m/10
j.r=w.j(k).gp(0)
i=A.k.F(n-p*(1-m/10),t)
h=A.k.F(n-p*(1-k),t)
k=a2.b
if(i<=h){k=new B.aO(r,k,a0,new B.cI([v,i,h,!0]),B.a([],a5))
g=j.H()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}else{k=new B.aO(r,k,a0,new B.cI([v,i,t,!0]),B.a([],a5))
g=j.H()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()
k=new B.aO(r,a2.b,a0,new B.cI([v,0,h,!0]),B.a([],a5))
g=j.H()
f=k.gbL().a.snapshot()
q.drawPath((k.e=new B.cF(f)).a,g)
g.delete()}}a4.jn()
e=u[a3].Mr(n).a
$.W()
k=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
k.r=w.gp(0)
k.z=A1.mz
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
ar(d){return d.b!==this.b}}
C.bnf.prototype={
a5(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=null,e=new B.eL()
e.dB(this.c)
w=a0.a*(0.2+e.aj()*0.6)
v=e.hb()?-0.1:1.1
v=a0.b*v
u=new B.u(w,v)
t=a0.galO()*1.4
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
j=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
j.saq(B.aUm(u,t,B.a([s.j(0.16),s.j(0)],r),f,A.x,f,f,0))
j.z=A.jk
g=j.H()
j=h.gbL().a.snapshot()
q.drawPath((h.e=new B.cF(j)).a,g)
g.delete()}},
ar(d){return d.b!==this.b}}
C.b9f.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eL()
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
e=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
e.r=f.j(g).gp(0)
e.z=new B.hu(A.G,k*0.35)
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
ar(d){return d.b!==this.b}}
C.b8T.prototype={
a5(a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=new B.eL()
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
if(e!=null)i.bx(e)
i=g.e
if(i!=null)i.a.delete()
g.e=null}$.W()
i=new B.as(A.X,A.V,A.a_,A.a0,A.Z)
i.b=A.ae
i.c=r
i.d=A.bO
if(m===1){h=B.aq(s,A.c,0.5)
h.toString}else h=s
i.r=h.j(0.07+0.04*Math.sin(w+m)).gp(0)
i.z=new B.hu(A.G,u)
d=i.H()
i=g.e
t.drawPath((i==null?g.e=new B.cF(g.gbL().a.snapshot()):i).a,d)
d.delete()}},
ar(d){return d.b!==this.b}}
C.bu9.prototype={
a5(d,e){var w,v,u=new B.a9(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.W()
w=B.M()
t=(0.5+0.5*t)*0.12
w.saq(new B.bS(A.A,0.95,A.x,null,0,B.a([A.K,A.w.j(0.28+t)],x.O),D.cS1,null).av(0,u))
d.aZ(u,w)
w=u.cF(-3)
v=B.M()
v.b=A.ae
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.z=A.jk
d.aZ(w,v)},
ar(d){return d.b!==this.b}}
C.bra.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=this.b/6.283185307179586*3
for(w=a1.a,v=Math.abs(w),u=a1.b,t=Math.abs(u),s=this.d,r=a0.a,q=this.c*31+A.k.bt(d)*7,p=0;p<7;++p){o=new B.eL()
o.dB(q+p)
n=o.aj()*w
m=o.aj()*u
l=Math.sin(A.k.F(A.k.F(d,1)+p/7,1)*3.141592653589793)
if(l<0.05)continue
k=Math.min(v,t)*(0.02+o.aj()*0.025)*l
j=B.aq(s,A.c,0.7).j(l)
$.W()
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
g.z=new B.hu(A.G,k*0.3)
h=g.H()
r.drawCircle(n,m,k*0.35,h)
h.delete()}},
ar(d){return d.b!==this.b}}
C.bqj.prototype={
a5(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a9(0,0,0+e.a,0+e.b)
$.W()
v=B.M()
v.a=A.ny
v.saq(new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.c,A.c,0.6).j(0.16),A.K],x.O),B.a([A.k.D(u-0.15,0,1),A.k.D(u,0,1),A.k.D(u+0.15,0,1)],x.x),null).av(0,w))
d.aZ(w,v)},
ar(d){return d.b!==this.b}}
C.bdG.prototype={
a5(d,e){var w,v,u,t,s,r=e.gee(),q=0.55+0.45*Math.sin(this.b)
$.W()
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
u.z=A.rh
r=new C.d6J(this,r*0.16,d,u,w)
t=e.gee()*0.045
r.$3(new B.u(t,t),1,1)
v=e.a-t
r.$3(new B.u(v,t),-1,1)
s=e.b-t
r.$3(new B.u(t,s),1,-1)
r.$3(new B.u(v,s),-1,-1)},
ar(d){return d.b!==this.b}}
C.xn.prototype={}
C.Ip.prototype={
a4(){return"NgmySlideElementType."+this.b}}
C.aqv.prototype={
a4(){return"NgmySlideAspectRatio."+this.b}}
C.uy.prototype={
a4(){return"NgmySlideShapeKind."+this.b}}
C.ms.prototype={
a4(){return"NgmySlideLayout."+this.b}}
C.hx.prototype={
a4(){return"NgmySlideTransition."+this.b}}
C.eJ.prototype={
hB(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.eo(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
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
u.n(0,"decoration",C.hR1(v.z))
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
C.lD.prototype={
hB(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,eJ>")
n=B.B(new B.K(n,new C.cd8(),m),m.k("ak.E"))
return C.rn(t,s,o,q,n,w.a,u,v,p,w.b,r)},
ag(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("K<1,a3<n,@>>")
n=B.B(new B.K(n,new C.cd9(),m),m.k("ak.E"))
return B.F(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hZ.prototype={
gb8L(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bi(v)},
gRS(){if(!C.ku(this.w))return!1
var w=this.gb8L()
if(w==null)return!1
return new B.S(Date.now(),0,!1).cZ(w.bS())},
hB(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("K<1,lD>")
r=B.B(new B.K(r,new C.ccY(),q),q.k("ak.E"))
return C.Bq(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
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
v=B.U(w).k("K<1,a3<n,@>>")
w=B.B(new B.K(w,new C.ccZ(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.jC.prototype={}
C.b0p.prototype={
B(d){return B.cp(new C.cd3(this))}}
C.anI.prototype={
R(){return new C.bit(null,null)}}
C.bit.prototype={
gaYD(){var w,v=this,u=v.d
if(u===$){w=B.bj(null,A.fT,null,1,null,v)
w.cH(0)
v.d!==$&&B.bL()
v.d=w
u=w}return u},
q(){this.gaYD().q()
this.btx()},
B(d){return B.c6(this.gaYD(),new C.dFs(),this.a.c)}}
C.aKu.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.acW.prototype={
Pu(d,e,f,g){return this.bNs(d,e,f,g)},
bNs(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$Pu=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$Pu)
case 3:s=i
if(d.e==null){w=1
break}B.a5(d,!1).O(null)
t=d.I(x.q).f
t.S(B.b2(null,null,null,null,null,A.r,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ed,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Pu,v)},
B(d){var w=this,v=null,u=B.m(22),t=B.I(A.c.j(0.08),A.q,1),s=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dl,A.L,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aQ,p,A.an,B.d(o,v,n,A.a2,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m)
if(!q)A.d.v(n,B.a([A.at,B.d(w.c,v,2,A.a2,v,v,v,B.l(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a5,v,v,!0,v,v,v,v,v,v,v,v),A.L,v,v)],m))
n.push(A.d5)
n.push(B.A(B.a([B.E(new C.add(A.hA,"Download",A.bZ,new C.eot(w,d),!0,v),1),A.av,B.E(new C.add(A.vz,"Share",A.bk,new C.eou(w,d),!1,v),1),A.av,B.E(new C.add(A.hj,"Safari",A.aZ,new C.eov(w,d),!1,v),1)],m),A.m,v,A.e,A.j,0,v,v))
n.push(A.aA)
n.push(B.bK(!1,B.d("Cancel",v,v,v,v,v,v,B.l(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,new C.eow(d),v,v))
return B.bn(!0,new B.C(A.pJ,B.v(B.a([B.p(v,B.v(n,A.aj,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(A.iP,v,t,u,s,v,A.n),v,v,v,v,A.Fe,v,v,1/0)],m),A.m,v,A.e,A.Q,0,A.p),v),!0,!1,A.af,!0,!0)}}
C.add.prototype={
B(d){var w=this,v=null,u=B.m(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.m(16),q=B.I(t?w.e.j(0.55):A.c.j(0.1),A.q,1),p=t?w.e:A.c
p=B.X(w.c,p,v,v,v,26)
return B.aG(!1,A.a1,!0,v,B.aL(!1,u,!0,B.eE(B.v(B.a([p,A.N,B.d(w.d,v,v,v,v,v,v,B.l(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.Q,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bv_,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.K,0,v,v,v,v,v,A.ag)}}
C.b0n.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a0(f,"__kiapo_video___"))return new C.apH(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.c6L().ak_(1.35)
s=B.auY(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bz_(v)
if(i.e&&i.w!=null)q=B.aM(h,A.T,!1,h,!0,A.r,h,B.aN(),i.w,A.bk,h,h,h,h,2,D.bQm,A.y,!0,h,!0,h,!1,i.x,A.ai,h,h,h,new B.cx("slide_tf_"+g.a,x.W),h,A.wd,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.a9,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.zo,A.am,h,A.SW,h,h)
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
w=n?t.cGm(B.b0(g.Q).j(0.45),A.cF):t
p=g.as
l=m?1:h
k=m?A.eC:A.D2
p=B.d(f,new B.cx("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.SN:s
$.W()
j=B.M()
j.b=A.ae
j.c=3*w
j.e=A.fA
j.r=A.aB.gp(0)
j=i.cnu(p,t,k,j)
k=g.r
w=new B.an(A.W,h,A.aa,A.r,B.a([j,i.cns(k,t,l?A.SN:s)],x.p),h)}else w=i.cnt(p,t,g.k2?A.SN:s,m)
v=new B.nb(w,new B.cx("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.aE(A.c4,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a8)}return new B.C(u,new B.bI(r,h,h,q,h),h)
case 1:case 4:return i.bWV()
case 3:return i.cf5()
case 2:return B.b3(h,h,h,new C.b0k(g,h),A.f1)
case 5:g=g.r
return new C.b0m(g,!i.e&&i.z==null,h)}},
c6L(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b0(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.jV
j=A.cF
break
case"shadow":v=o.d
e=B.a([new B.cQ(D.ad9,new B.u(0,4*v),8*v)],x.r)
w=l
break
case"neon":v=o.d
e=B.a([new B.cQ(l,A.J,6*v),new B.cQ(l,A.J,16*v),new B.cQ(l.j(0.8),A.J,30*v)],x.r)
w=l
break
case"marker":k=A.u
g=A.cd
w=A.aB
break
case"stamp":h=6*o.d
w=l
k=A.u
i=A.mG
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cQ(A.bA,new B.u(v,v),0)],x.r)
w=l
k=A.u
break
case"threed":v=B.aq(l,A.w,0.65)
v.toString
u=B.a([],x.r)
for(t=o.d,s=1;s<=6;++s){r=s*t
u.push(new B.cQ(v,new B.u(r,r),0))}e=u
w=l
k=A.u
break
case"glitch":v=o.d
h=2*v
e=B.a([new B.cQ(A.b8,new B.u(-3*v,0),0),new B.cQ(A.ay,new B.u(3*v,0),0)],x.r)
w=l
k=A.u
break
case"fire":v=o.d
e=B.a([new B.cQ(A.cs,A.J,8*v),new B.cQ(A.ay,new B.u(0,-3*v),18*v)],x.r)
k=A.u
w=W.Kn
break
case"ice":v=o.d
e=B.a([new B.cQ(A.aS,A.J,10*v),new B.cQ(A.cz,A.J,22*v)],x.r)
k=A.P
w=A.et
break
case"chalk":h=o.d
e=B.a([new B.cQ(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.jV
break
case"comic":v=B.aq(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.cU_[q]
u.push(new B.cQ(v,new B.u(p.a*t,p.b*t),0))}u.push(new B.cQ(v,new B.u(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.W()
f=B.M()
v=o.d
f.saq(D.bSN.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cQ(A.Kc,new B.u(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.W()
f=B.M()
v=o.d
f.saq(D.bT7.av(0,new B.a9(0,0,0+900*v,0+m.w*v*1.6)))
w=l
k=A.u
break
case"softglow":e=B.a([new B.cQ(l,A.J,14*o.d)],x.r)
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
e=B.a([new B.cQ(l.j(0.45),new B.u(u,u),0),new B.cQ(l.j(0.2),new B.u(v,v),0)],x.r)
w=l
break
case"whisper":h=6*o.d
w=l
k=A.jV
break
default:w=l}v=m.w
u=f==null?w:n
m=m.k3
m=m!==0?B.b0(m):g
return B.l(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
ayu(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.eJD.t(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.cd1(h)
v=r.k2?C.i2y(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eC:A.D2
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Xj(B.dn(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cnu(d,e,f,g){return this.ayu(d,e,f,!1,g)},
cns(d,e,f){return this.ayu(d,e,f,!1,null)},
cnt(d,e,f,g){return this.ayu(d,e,f,g,null)},
bz_(d){switch(d.a){case 2:return A.A
case 1:case 5:return A.a7
default:return A.a3}},
bWV(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a0(r,"data:image")){if(!u.as)return A.bH
return B.av(B.X(s.b===D.kW?A.G8:A.Bm,A.az,t,t,t,32),t,t,t)}w=u.bBX(r)
if(s.b===D.kW){s=B.m(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.I(A.cq,A.q,1),s,B.a([new B.ac(0,A.G,A.w.j(0.08),A.dE,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aN0(r,!0)
return C.fxX(s.go,v,s.id)}return w},
aN0(d,e){var w,v,u,t
try{w=C.i2R(d)
u=this.c.db
v=u==="marriage_locked_bg"||A.a.cb(u,"_bg")
u=B.cp(new C.cd0(this,w,v,e))
return u}catch(t){return D.aaU}},
bBX(d){return this.aN0(d,!1)},
cf5(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.b44
return C.i38(v,w.db,w.dx)}}
C.b0k.prototype={
a5(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.W(),g=B.M(),f=this.b
g.r=B.b0(f.ay).gp(0)
w=B.M()
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
case 1:d.hN(s,g)
d.hN(s,w)
break
case 2:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
r.E(new B.b5(u/2,0))
r.E(new B.ap(u,t))
r.E(new B.ap(0,t))
r.E(new B.bF())
d.aO(r,g)
d.aO(r,w)
break
case 3:r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
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
r=new B.aO(h.r,A.ap,i,i,B.a([],x.v))
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
r=new B.aO(h.r,A.ap,i,i,f)
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
ar(d){return d.b!==this.b}}
C.aI5.prototype={
R(){return new C.btG(null,null)}}
C.btG.prototype={
a_(){var w,v=this
v.a1()
w=B.bj(null,A.ib,null,1,null,v)
w.cH(0)
v.d!==$&&B.aP()
v.d=w},
q(){var w=this.d
w===$&&B.c()
w.q()
this.bvQ()},
aNb(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O),u=B.m(8)
return B.c_(B.av(B.d(d,w,w,w,w,w,w,A.dl,w,w,w),w,w,w),new B.o(w,w,w,u,w,new B.a8(A.a3,A.a7,A.x,v,w,w),A.n),A.bd)},
bzd(){var w,v=this,u=null,t=v.aNb("Slide A",A.bk),s=v.aNb("Slide B",A.aZ)
if(v.a.c===D.cl)return new B.an(A.W,u,A.b_,A.r,B.a([t,B.av(B.d("No transition",u,u,u,u,u,u,B.l(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.P,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.f3b(v,s,t),u)},
B(d){return this.bzd()}}
C.aII.prototype={
j0(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jK(d){return d.b!==this.b}}
C.Uu.prototype={
R(){return new C.biG(null,null)}}
C.biG.prototype={
a_(){var w,v,u=this
u.a1()
w=B.bj(null,A.AN,null,1,null,u)
u.d!==$&&B.aP()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cl){w.sp(0,1)
return}B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRt(u),x.a)},
br(d){var w,v,u,t=this
t.bC(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cl)w.sp(0,1)
else B.bN(B.dC(0,0,0,v.c.fr+v.f*120,0,0),new C.dRs(t),x.a)}},
q(){var w=this.d
w===$&&B.c()
w.q()
this.btM()},
B(d){var w,v=this.a
if(v.c.dy===D.cl||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.dRr(this),v.d)}}
C.Io.prototype={
B(d){return B.cp(new C.ccU(this))}}
C.ayP.prototype={
R(){return new C.bd9()}}
C.bd9.prototype={
a_(){this.a1()
if(this.a.c!==D.cl)B.bN(A.Ly,new C.d3Y(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cl)n=B.av(B.d("No animation on elements",p,p,p,p,p,p,B.l(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.P,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.u(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Uu(C.eo(A.bg,!1,4279310375,A.aD,"",4294538006,24,A.bl,A.a5,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.be,o,2,"",0,0,"",u,D.f0,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.ci,p,p,B.m(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.cx("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.u(0)
n=q.d
t=C.eo(A.bg,!1,4294967295,A.aD,"",4280640491,22,A.bl,A.a5,"",0.2,"preview_text",p,"","",0,!1,"",0,D.be,o,2,"Element flies in",0,0,"",q.a.c,D.cQ,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.m(14)
v=new B.an(A.W,p,A.aa,A.r,B.a([w,B.ao(32,new C.Uu(t,B.p(p,D.fgm,A.f,p,p,new B.o(s,p,B.I(A.b3,A.q,1),r,p,p,A.n),p,p,p,p,A.je,p,p,1/0),!0,1,new B.cx("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return B.c_(n,D.b_o,A.bd)}}
C.a7h.prototype={
R(){return new C.bjk(null,null)}}
C.bjk.prototype={
gaZ9(){var w=this.a
if(w.e)w=D.eJK.t(0,w.c)||D.aMA.t(0,A.d.gL(this.a.c.split("@")))
else w=!1
return w},
a_(){var w,v=this
v.a1()
if(v.gaZ9()){w=C.i1d(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bj(null,B.dC(0,0,0,w,0,0),null,1,null,v)
w.cH(0)
v.d=w}},
q(){var w=this.d
if(w!=null)w.q()
this.bui()},
B(d){var w,v=this,u=v.d
if(!v.gaZ9()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.ebZ(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.aZj.prototype={
B(d){var w=null
return B.av(C.b0o(!0,w,!1,C.eo(A.L,!1,this.e.l(),A.aD,"",4280640491,this.f,A.bl,A.a5,"",0.2,"fx",w,"","",0,!1,"",0,D.be,4280172719,2,"Aa",0,0,this.c,D.cl,D.cQ,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gY(d){return this.f}}
C.bej.prototype={
j0(d){return C.a1U(this.b,new B.a9(0,0,0+d.a,0+d.b).cF(-this.c))},
jK(d){return d.b!==this.b||d.c!==this.c}}
C.bpg.prototype={
a5(a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=new B.a9(0,0,0+a1.a,0+a1.b).cF(-this.d),g=this.b,f=C.a1U(g,h),e=a1.gee(),d=new C.eTj()
switch(this.c){case"gold":w=d.$1(e*0.045)
w.saq(D.aO5.av(0,h))
a0.aO(f,w)
g=C.a1U(g,h.cF(-(e*0.03)))
w=d.$1(e*0.006)
w.r=D.bim.gp(0)
a0.aO(g,w)
break
case"platinum":g=d.$1(e*0.04)
g.saq(D.eTi.av(0,h))
a0.aO(f,g)
break
case"glow":g=d.$1(e*0.05)
g.r=A.c.j(0.55).gp(0)
g.z=new B.hu(A.G,e*0.04)
a0.aO(f,g)
g=d.$1(e*0.012)
g.r=A.c.gp(0)
a0.aO(f,g)
break
case"rainbow":g=d.$1(e*0.04)
g.saq(D.eTg.av(0,h))
a0.aO(f,g)
break
case"double":w=d.$1(e*0.012)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1U(g,h.cF(e*0.03))
w=d.$1(e*0.008)
w.r=A.c.j(0.75).gp(0)
a0.aO(g,w)
break
case"neon":g=d.$1(e*0.06)
g.r=A.b8.j(0.7).gp(0)
g.z=new B.hu(A.G,e*0.035)
a0.aO(f,g)
g=d.$1(e*0.016)
g.r=A.ov.gp(0)
a0.aO(f,g)
break
case"rosegold":w=d.$1(e*0.05)
w.saq(D.eTb.av(0,h))
a0.aO(f,w)
w=C.a1U(g,h.cF(-(e*0.032)))
v=d.$1(e*0.006)
v.r=D.b7t.gp(0)
a0.aO(w,v)
g=C.a1U(g,h.cF(e*0.03))
v=d.$1(e*0.004)
v.r=D.b9X.gp(0)
a0.aO(g,v)
break
case"jewels":g=d.$1(e*0.055)
g.saq(D.aO5.av(0,h))
a0.aO(f,g)
for(g=B.wX(f),w=B.a([],x.X),g=new B.vs(g,!1,w),v=e*0.018,u=a0.a,t=-e*0.006,s=e*0.006,r=e*0.09;g.C();){q=g.c
if(q===0||g.f)B.ba(B.jU(y.M));--q
g.jn()
p=w[q].b
p===$&&B.c()
o=A.o.D(A.k.bt(p.a.length()/r),8,40)
for(n=0;n<o;++n){g.jn()
p=w[q].b
p===$&&B.c()
p=p.a.length()
g.jn()
m=w[q].Mr(p*n/o).a
l=D.cRk[A.o.F(n,4)]
$.W()
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
g.saq(D.eTk.av(0,h))
g.z=new B.hu(A.G,e*0.03)
a0.aO(f,g)
g=d.$1(e*0.018)
g.saq(D.eTh.av(0,h))
a0.aO(f,g)
break
case"framed":w=d.$1(e*0.07)
w.r=A.c.gp(0)
a0.aO(f,w)
g=C.a1U(g,h.cF(-(e*0.035)))
w=d.$1(e*0.004)
w.r=A.nE.gp(0)
a0.aO(g,w)
break}},
ar(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bqg.prototype={
a5(d,e){d.FD(C.a1U(this.b,new B.a9(0,0,0+e.a,0+e.b).cF(-this.c)),A.w,e.gee()*0.05,!1)},
ar(d){return d.b!==this.b||d.c!==this.c}}
C.aKI.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.aLd.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.aMA.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.a7A.prototype={}
C.Ny.prototype={
R(){var w=x.gz,v=x.N,u=x.bO
return new C.aDF(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aX(v),null,null)},
gdY(){return this.c},
gTa(){return this.r},
gTb(){return this.w},
gLi(){return this.x}}
C.aDF.prototype={
a_(){var w,v=this
v.a1()
$.aW.c2$.push(v)
C.fCT()
$.hkz=new C.euH(v)
w=B.bj(null,A.AL,null,1,null,v)
w.fc(0,!0)
v.fy!==$&&B.aP()
v.fy=w
v.I6()},
br(d){var w,v,u=this
u.bC(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.O6(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.I6()}},
iV(d){if(d===A.zR||d===A.rR||d===A.rQ||d===A.pf)this.tr()},
q(){var w,v,u,t=this
$.aW.hE(t)
w=t.at
if(w!=null)w.a7(0)
t.tr()
w=t.fy
w===$&&B.c()
w.q()
for(w=t.ch,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}for(w=t.CW,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.h3()}for(w=t.cx,w=new B.dt(w,w.r,w.e);w.C();){v=w.d
v.U$=$.aw()
v.P$=0}t.buw()},
gaaP(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gOq(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
abi(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gRS())return!1
return!0},
kb(){return this.abi(null)},
ai1(){var w=this.c
if(w==null)return
w.I(x.q).f.S(D.eRA)},
qd(){if(!this.kb())return!1
this.ai1()
return!0},
aq8(d){var w,v,u,t,s,r=this
if(r.abi(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hjG(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
zE(){return this.aq8(null)},
I6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$I6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.aqx(k),$async$I6)
case 3:j=e
w=4
return B.b(C.ap9(k),$async$I6)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.fS9(j,t.bZN())
w=t.gaaP()?5:7
break
case 5:r=t.gOq()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.aZx(r),$async$I6)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bn(s,new C.er4())
if(!t.dy.t(0,A.a.i(r).toLowerCase()))A.d.ck(s,0,q)}case 9:w=6
break
case 7:A.d.bn(s,new C.er5())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.L)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.yo(m==null?"":m)!=null)continue
C.fD4(n,s)
p=!0}t.m(new C.er6(t,s))
if(p||s.length>J.ad(j))t.tr()
case 1:return B.h(u,v)}})
return B.i($async$I6,v)},
bZN(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.ku(w)&&w!==q}if(w)p.push(r)
return p},
clS(d){var w,v=this,u=d.w
if(!C.ku(u)||u==="hati_kiapo_uongozi")return
v.a9F(d)
w=A.d.bd(v.d,new C.esF(d))
u=v.d
if(w>=0){u[w]=d.hB()
v.d[w].f=new B.S(Date.now(),0,!1)}else A.d.ck(u,0,d.hB())
v.db=!1},
cg1(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.ku(s)&&s!=="hati_kiapo_uongozi"}if(s)u.clS(t)
s=u.d
w=B.U(s)
v=w.k("cR<1,hZ>")
s=B.B(new B.cR(new B.a2(s,new C.est(),w.k("a2<1>")),new C.esu(),v),v.k("J.E"))
return s},
O6(d){return this.bNP(d)},
tr(){return this.O6(null)},
bNP(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$O6=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cg1()
w=3
return B.b(C.Vt(d==null?t.a.c:d,s),$async$O6)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.aq8(r)?4:5
break
case 4:w=6
return B.b(C.a6O(r),$async$O6)
case 6:q=r.x
p=A.a.i(q==null?t.gOq():q)
if(t.dy.t(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bd(t.d,new C.eqs())
q=t.d
if(o>=0)q[o]=r.hB()
else A.d.ck(q,0,r.hB())
case 5:case 1:return B.h(u,v)}})
return B.i($async$O6,v)},
pg(){var w,v=this,u=v.at
if(u!=null)u.a7(0)
u=v.e
w=(u==null?null:C.ku(u.w))===!0?A.hX:A.lI
v.at=B.cM(w,new C.etN(v))},
aYE(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.aeK(u.hB(),v.f,v.r))
if(w.length>40)A.d.cB(w,0)
A.d.a9(v.ay)},
czc(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.aeK(w.e.hB(),w.f,w.r))
w.m(new C.euD(w,v.pop()))
w.pg()},
ckY(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.aeK(w.e.hB(),w.f,w.r))
w.m(new C.esD(w,v.pop()))
w.pg()},
oc(){var w,v,u=this
if(u.e==null)return
w=A.d.bd(u.d,new C.euq(u))
if(w>=0){u.d[w]=u.e.hB()
u.d[w].f=new B.S(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.S(Date.now(),0,!1)},
X8(d){var w,v,u,t,s=this.gdr()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
xh(){var w,v,u,t
for(w=this.ch,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
u.U$=$.aw()
u.P$=0}w.a9(0)
for(w=this.CW,v=new B.dt(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.h3()}w.a9(0)},
JP(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdr()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cR<1,n>")
t=B.db(new B.cR(new B.a2(w,new C.eur(),v.k("a2<1>")),new C.eus(),u),u.k("J.E"))
w=this.ch
v=B.a4(w).k("cu<1>")
v=B.B(new B.cu(w,v),v.k("J.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.L)(v),++r){q=v[r]
if(!t.t(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.aw()
p.P$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.h3()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.L)(v),++r){n=v[r]
if(n.b!==D.cQ)continue
p=n.a
m=w.cg(0,p,new C.eut(n))
s.cg(0,p,new C.euu())
p=m.a.a
o=n.r
if(p!==o)m.saV(0,o)}},
Hs(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.b5(u.d,new C.epR(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gOq()
w=u.dy.t(0,A.a.i(v).toLowerCase())}if(!w)A.d.ck(u.d,0,u.e.hB())}u.oc()
u.pg()},
aio(d,e){var w,v,u,t,s=this
if(s.kb())return
w=s.X8(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.ku(v.w))===!0
if(u){C.i1h(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdr()
if(t!=null)C.i1i(t,w.d+w.f*0.5)}}s.Hs()
s.oc()
s.pg()
if(u&&s.c!=null)s.m(new C.euE())},
cAg(d,e){var w=this,v=w.gdr()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Hs()
w.oc()
w.pg()},
gdr(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqh(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.i_j(o)
if(w!=null)return w
v=q.gdr()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gL(p.r):null}if(v!=null&&A.a.a0(o,"class_")){p=v.f
p=B.b0(p==null?v.e:p)
u=q.bX9(v)
t=q.bX8(v)
s=B.b0(v.e)
r=v.f
return new C.jC(o,"Class template",p,u,t,s,r==null?null:B.b0(r))}return C.hDa(o)},
bX9(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=w[u]
if(t.b===D.cQ)s=t.w>=28||A.o.D(A.o.an(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b0(t.Q)}return A.M},
bX8(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.cQ&&t.w<28)return B.b0(t.Q)}return A.aK},
aej(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gaaP()){w.c.I(x.q).f.S(D.eQc)
return}w.a9F(d)
w.aZQ(C.bBn(d))
return}if(C.cdN(v)){w.a9F(d)
w.aZQ(d)
return}w.m(new C.erM(w,d))},
aqH(){var w,v,u,t,s,r,q=this
q.a1A(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.ku(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.epP(q))
if(r&&q.c!=null){u.toString
q.Jp(u,s)}return}q.tr()
q.m(new C.epQ(q))},
aZP(d){this.a9F(d)
this.a_6(d,!0)},
a9F(d){if(!C.ku(d.w))return
C.fD4(d,this.d)},
a_6(d,e){return this.cbX(d,e)},
aZQ(d){return this.a_6(d,!1)},
cbX(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a_6=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bBn(d)
if(e){r=s.x
q=A.a.i(r==null?t.gOq():r)
t.dy.W(0,q.toLowerCase())
C.apa(t.a.c,q)}r=s}else r=d
w=C.cdN(r.w)?3:4
break
case 3:w=5
return B.b(t.a9G(r),$async$a_6)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.b5(t.d,new C.es8(l))
o=l.a.hB()
n=C.ku(o.w)&&C.i2t(o)
t.m(new C.es9(t,o,p))
if(n){m=A.d.bd(t.d,new C.esa(o))
if(m>=0){t.d[m]=o.hB()
t.tr()}}if(!t.abi(l.a))t.Yg()
r=!1
if(t.c!=null)if(!t.abi(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.aq8(r)&&C.fz7(l.a)}else l=r
else l=r
if(l)t.c.I(x.q).f.S(D.eQM)
case 1:return B.h(u,v)}})
return B.i($async$a_6,v)},
a9G(d){return this.bM3(d)},
bM3(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$a9G=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.le(r.c,A.z6),$async$a9G)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.kS(!1,r,s.c,s.d,null,A.z6,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9G,v)},
o2(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$o2=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cdN(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.cdb(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$o2,v)},
ae0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.erL(),s,null,!0,!0,x.H),$async$ae0)
case 3:if(t.c==null){w=1
break}t.aqH()
case 1:return B.h(u,v)}})
return B.i($async$ae0,v)},
ae_(){var w=0,v=B.j(x.H),u,t=this,s
var $async$ae_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.ca(null,null,!1,null,new C.erI(),s,null,!0,!0,x.H),$async$ae_)
case 3:if(t.c==null){w=1
break}t.m(new C.erJ())
t.aqH()
case 1:return B.h(u,v)}})
return B.i($async$ae_,v)},
Yg(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Yg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$Yg)
case 3:r=e
if(B.kg(J.q(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.au("Bool","ngmy_marriage_hint_seen",!0),$async$Yg)
case 4:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eOQ)
case 1:return B.h(u,v)}})
return B.i($async$Yg,v)},
Jp(d,e){return this.cmi(d,e)},
cmi(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jp=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ag4(s,t.gEc(),t.gEb(),!0,e,t.d),$async$Jp)
case 9:w=4
break
case 6:w=10
return B.b(C.ag5(s,t.gEc(),t.gEb(),!0,e,t.d),$async$Jp)
case 10:w=4
break
case 7:w=11
return B.b(C.ag6(s,t.gEc(),t.gEb(),!0,e,t.d),$async$Jp)
case 11:w=4
break
case 8:w=12
return B.b(C.ag7(s,t.gEc(),t.gEb(),!0,e,t.d),$async$Jp)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Jp,v)},
bYG(){var w,v,u,t,s=this
if(!s.gaaP()){s.c.I(x.q).f.S(D.eP2)
return}w=s.gOq()
v=s.a
u=v.d
t=!0
if(!u)if(!v.w){if(!v.x)if(v.r){v=A.a.i(v.z)
v=v.length!==0&&v.toLowerCase()===w.toLowerCase()}else v=!1
else v=t
t=v}v=s.c
v.toString
C.ag3(u,t,v,new C.er0(s),new C.er1(s),w)},
aek(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aek=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bU(A.dH,null,new C.erS(u),s,!0,!0,!1,A.lr,!1,!1,x.N),$async$aek)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ag7(s,u.gEc(),u.gEb(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ag4(s,u.gEc(),u.gEb(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ag5(s,u.gEc(),u.gEb(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ag6(s,u.gEc(),u.gEb(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.bYG()
return B.h(null,v)}})
return B.i($async$aek,v)},
cb3(d,e){var w,v,u=this,t=null
if(u.e!=null)u.aYE()
w=C.cC()
v=C.Bq(t,t,t,t,D.Cs,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.erT(u,v))},
a96(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$a96=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qd()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i6Y(s),$async$a96)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.d8(q.r,new C.epT())
t.d3(new C.epU(t,p,q,r))
s=t.c.I(x.q).f
o=r.r.length
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a96,v)},
agi(d,e,f,g){var w=null,v=g?A.dq:A.bM,u=B.I(g?A.b3:A.cq,A.q,1)
return B.hp(B.aE(w,B.p(w,B.X(d,g?A.c:A.aK,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a8),w,e,w,w)},
a_5(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a_5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qd()){w=1
break}s=t.jN()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.es3(),q),q.k("J.E"))}o=s!=null&&s.b===D.lq?B.a([s],x.u):p
if(o.length===0){t.c.I(x.q).f.S(D.eQX)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.es4(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a_5)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a_5,v)},
aeB(){return this.cbW()},
cbW(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$aeB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qd()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i6K(s,t.f+1,o),$async$aeB)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.T
q=B.kB(s,B.U(s).c)
p.a=A.d.bd(o.r,new C.es6(q))
t.d3(new C.es7(p,t,o,q,r))
t.c.I(x.q).f.S(D.eRl)
case 1:return B.h(u,v)}})
return B.i($async$aeB,v)},
aeI(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$aeI=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qd()||!t.zE()){w=1
break}s=t.gdr()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("a2<1>")
p=B.B(new B.a2(r,new C.eso(),q),q.k("J.E"))
if(p.length===0){t.c.I(x.q).f.S(D.eOB)
w=1
break}o=new B.K(p,new C.esp(),B.U(p).k("K<1,N>")).fa(0,new C.esq())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.L)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.ar(new B.bb(l,A.b4,A.aN),$.aw()))}q=t.c
q.toString
w=3
return B.b(B.bU(A.K,null,new C.esr(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$aeI)
case 3:for(r=new B.dt(r,r.r,r.e);r.C();){q=r.d
q.U$=$.aw()
q.P$=0}if(t.c!=null)t.m(new C.ess())
case 1:return B.h(u,v)}})
return B.i($async$aeI,v)},
aen(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$aen=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qd()){w=1
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
return B.b(C.hlE(s,new C.Ee(r,q,p,o==null?"":o)),$async$aen)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.d3(new C.erU(m,n))
s=t.c.I(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.agu(r)
r=B.t(r==null?null:r.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aen,v)},
a9z(){return this.bLq()},
bLq(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a9z=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qd()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.i6X(s,t.f+1,l),$async$a9z)
case 3:r=e
q=$.fVD
$.fVD=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.d3(new C.eq9())
t.c.I(x.q).f.S(D.eOs)
w=1
break}if(!q){s=r.CW
s=C.hkx(l,s==null?"":s,!1)}else s=!1
if(s){t.d3(new C.eqa(t,l,r))
t.c.I(x.q).f.S(D.eRP)
w=1
break}s=l.cx
if(s==null)s=A.T
p=B.kB(s,B.U(s).c)
s=l.r
m.a=A.d.bd(s,new C.eqb(p))
o=s.length
t.d3(new C.eqc(m,t,l,p,r))
n=s.length-o
s=t.c.I(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9z,v)},
aPg(d,e){if(e){this.afa()
return}this.cb3(d,!1)},
bH5(){return this.aPg(null,!1)},
afa(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bU(A.bY,null,new C.esy(t),r,!0,!0,!0,A.p_,!1,!1,x.N),$async$afa)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.esz(t,C.i_i(s).pu()))
case 1:return B.h(u,v)}})
return B.i($async$afa,v)},
d3(d){var w=this
if(w.qd())return
w.Hs()
w.aYE()
w.m(d)
w.JP()
w.oc()
w.pg()},
a7A(){this.d3(new C.eoO(this,D.mA))},
aQJ(){var w=this.gdr()
if(w==null)return
this.d3(new C.eq7(this,w))},
aPS(){var w=this.e
if(w==null||w.r.length<=1)return
this.d3(new C.eq5(this))},
b1Q(d,e){if(this.e==null||d===e)return
this.d3(new C.esH(this,d,e))},
NE(d){return this.bJ5(d)},
bJ5(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$NE=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:s=d.x
r=A.a.i(s==null?t.gOq():s)
w=5
return B.b(C.ap8(t.a.c,r),$async$NE)
case 5:t.dy.J(0,r.toLowerCase())
case 4:s=d.a
C.aqz(s)
w=6
return B.b(C.b0s(t.a.c,s),$async$NE)
case 6:if(t.c==null){w=1
break}t.m(new C.eq1(t,d))
w=7
return B.b(t.tr(),$async$NE)
case 7:case 1:return B.h(u,v)}})
return B.i($async$NE,v)},
cmf(d,e){var w=this
if(d.z){w.ai1()
return}w.m(new C.esG(w,d,e))
w.pg()},
jN(){var w,v,u,t,s,r=this.gdr()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
W9(d){return this.ch.cg(0,d.a,new C.epS(d))},
asx(d){return this.CW.cg(0,d.a,new C.eqt())},
a1A(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.X8(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aW.ak$.d.c
if(u!=null)u.jD()},
b5d(){return this.a1A(!0)},
a1y(d){var w,v,u=this
if(u.qd())return
if(!u.zE())return
w=u.X8(d)
if(w==null||w.b!==D.cQ)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.W9(w).saV(0,"")}u.m(new C.euo(u,d))
$.aW.x1$.push(new C.eup(u,d,w))},
b5J(d){var w=this
if(d.b===D.cQ&&!w.kb()&&w.zE()){w.a1y(d.a)
return}w.ayU(d.a)},
ayU(d){var w,v,u,t,s,r=this
if(r.kb())return
w=r.r
if(w!=null&&w!==d){v=r.X8(w)
if(v!=null&&v.b===D.cQ){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.etO(r,s,d))
if(s||d==null){t=$.aW.ak$.d.c
if(t!=null)t.jD()}},
aLz(){this.d3(new C.eoP(this))},
oX(d){return this.byg(d)},
byg(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$oX=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o2(),$async$oX)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.d3(new C.eoM(t,d))
case 1:return B.h(u,v)}})
return B.i($async$oX,v)},
Vi(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vi=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gk(78,1920),$async$Vi)
case 3:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.eoC(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vi,v)},
Vc(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$Vc=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdr()==null){w=1
break}w=3
return B.b(S.CA(t.a.c),$async$Vc)
case 3:s=e
if(t.c==null){w=1
break}r=J.a6(s)
if(r.gam(s)){t.c.I(x.q).f.S(D.eSo)
w=1
break}w=r.gM(s)===1?4:6
break
case 4:q=r.gL(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bU(null,null,new C.eoz(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$Vc)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdr()==null){w=1
break}t.d3(new C.eoA(t,q))
case 1:return B.h(u,v)}})
return B.i($async$Vc,v)},
arx(){var w=this,v=w.r
if(v==null||w.gdr()==null)return
if(A.d.b5(w.gdr().z,new C.eq3(v))){w.c.I(x.q).f.S(D.eRp)
return}if(w.w===v)w.a1A(!0)
w.d3(new C.eq4(w,v))},
bFl(){var w=this.jN(),v=w==null
if((v?null:w.b)===D.f0)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.cQ)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aMg(d,e){var w=this,v=w.jN(),u=w.gdr(),t=w.e
if(t==null)return
w.d3(new C.epg(w,v,d,e,t,u))},
bzR(d){return this.aMg(d,null)},
a7S(d){return this.bzZ(d)},
bzZ(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a7S=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.a60.t(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.o2(),$async$a7S)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.jN()
if(s!=null){r=s.b
if(r===D.cQ)t.bzR(s.w>=28||s.x.gdJ(0)>=A.H.gdJ(0)?d.d:d.e)
else if(r===D.f0){r=d.c
t.aMg(r.j(0.88),r)}w=1
break}t.d3(new C.epl(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a7S,v)},
a7R(d){return this.bzX(d)},
bzX(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a7R=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.jN()
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
return B.b(t.o2(),$async$a7R)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.epj(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a7R,v)},
bzH(d){var w=this.gdr()
if(w==null)return
this.d3(new C.epf(this,w,d))},
a_b(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a_b=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.i6T(r),$async$a_b)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oc()
t.m(new C.esi(t,s))
w=4
return B.b(t.tr(),$async$a_b)
case 4:if(t.c!=null)t.aej(s)
case 1:return B.h(u,v)}})
return B.i($async$a_b,v)},
a9r(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9r=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a1A(!0)
t.oc()
s=t.c
s.toString
w=3
return B.b(C.QH(s,q),$async$a9r)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a9r,v)},
Dk(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Dk=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oc()
t=4
w=7
return B.b(C.aPj(m),$async$Dk)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aOI(o,q,m.b),$async$Dk)
case 8:t=2
w=6
break
case 4:t=3
l=s.pop()
p=B.aa(l)
o=r.c
if(o==null){w=1
break}o.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Dk,v)},
F_(d,e){return this.cyG(d,e)},
cyG(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$F_=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qd()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a1A(!0)
t.oc()
s=h.a=t.e.hB()}else{r=A.d.bd(t.d,new C.eux(d))
s=h.a=r>=0?t.d[r].hB():d.hB()}s=s.w
q=s==null
p=C.i0g(q?"":s)
o=C.hjt(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("a2<1>")
n=B.B(new B.a2(s,new C.euy(h,p),q),q.k("J.E"))
s=h.a.b
w=3
return B.b(t.cs0(n.length,o,s),$async$F_)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.i0a(h.a)
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
return B.b(t.cs_(n,o),$async$F_)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.iH(t.d,new C.euz(s))
s=h.a.b
w=11
return B.b(t.crY(k.b,s),$async$F_)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hB()
case 5:j=C.i0f(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.I(x.q).f.S(D.eSz)
w=1
break}w=12
return B.b(t.crZ(j.a,s,o,j.c),$async$F_)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.euA(h,t,i))
t.pg()
case 1:return B.h(u,v)}})
return B.i($async$F_,v)},
cs0(d,e,f){var w=this.c
w.toString
return B.bU(A.K,null,new C.eu3(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cs_(d,e){var w=this.c
w.toString
return B.bU(A.K,null,new C.eu2(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
crY(d,e){var w=this.c
w.toString
return B.bU(A.K,null,new C.etX(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
crZ(d,e,f,g){var w=this.c
w.toString
return B.bU(A.K,null,new C.etZ(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
aaT(){var w=null
return B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
aaU(d,e,f,g){var w,v,u=null,t=B.m(16),s=B.aq(d,A.bY,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ac(0,A.G,d.j(0.28),A.dk,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.X(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a8(A.ax,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eB,B.E(B.v(B.a([B.d(g,u,u,u,u,u,u,D.f1X,u,u,u),A.an,B.d(f,u,u,u,u,u,u,B.l(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a5,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.F,u,A.e,A.j,0,A.p),1)],v),A.F,u,A.e,A.j,0,u,u)},
aTY(d,e){var w=null,v=e.j(0.14),u=B.m(12),t=B.I(e.j(0.22),A.q,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Tw,A.L,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bT,w,w,w)},
aU0(d,e,f,g,h,i,j){var w=null,v=B.m(16),u=B.m(16),t=g?new B.a8(A.ax,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.I(g?d.j(0.45):A.c.j(0.08),A.q,1),q=d.j(g?0.22:0.14),p=B.m(13),o=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.X(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bf,B.E(B.v(B.a([B.d(i,w,w,w,w,w,w,A.nt,w,w,w),A.cS,B.d(h,w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a5,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.F,w,A.e,A.j,0,A.p),1),B.X(A.Bp,A.c.j(0.35),w,w,w,14)],o),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eqX(e,j),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
bW5(d,e,f,g,h,i){return this.aU0(d,e,f,!1,g,h,i)},
atS(d,e){var w=null,v=A.c.j(0.05),u=B.m(14),t=B.I(A.c.j(0.08),A.q,1)
return B.p(w,B.v(B.a([B.d(e,w,w,w,w,w,w,A.dl,w,w,w),A.bB,B.d(d,w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.YB,w,w,w)},
aU_(d,e,f){var w=null,v=B.bl(A.c.j(0.08),w,w,w,A.c,w,A.ck,w,new B.b7(B.m(14),A.Y),w,w,w)
return B.bH(B.d(e,w,w,w,w,w,w,A.nr,w,w,w),new C.eqW(d,f),v)},
aTZ(d,e){return this.aU_(d,e,null)},
JG(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$JG=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.p0(l,s.c,s.d),$async$JG)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aF("=",l.length)+"\n\n"
q=new B.fd(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gaf(o.z),n=new B.fi(l,new C.etP());n.C();){m=l.gT(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aK(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.a9t(l.charCodeAt(0)==0?l:l,r.b),$async$JG)
case 4:l=t.a
w=5
return B.b(B.p_(l.c,l.d),$async$JG)
case 5:case 1:return B.h(u,v)}})
return B.i($async$JG,v)},
HN(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$HN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.p0(q,s.c,s.d),$async$HN)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.a9t(A.R.ao(r.ag(),null),r.b+".json"),$async$HN)
case 4:q=t.a
w=5
return B.b(B.p_(q.c,q.d),$async$HN)
case 5:case 1:return B.h(u,v)}})
return B.i($async$HN,v)},
b4Y(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oc()
u.tr()
w=u.c
w.toString
v=B.e8(new C.eun(u,t),!1,null,x.z)
B.a5(w,!1).c8(v)},
H0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$H0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o2(),$async$H0)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fDh(),$async$H0)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.i32(s.a)
q=t.c
q.toString
w=5
return B.b(B.bU(A.aB,null,new C.eoH(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$H0)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.d3(new C.eoI(t,s))
w=1
break}if(p==="split")t.d3(new C.eoJ(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$H0,v)},
N_(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$N_=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}w=3
return B.b(t.o2(),$async$N_)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aPi(s,null,null),$async$N_)
case 4:r=e
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.eoN(t,r))
case 1:return B.h(u,v)}})
return B.i($async$N_,v)},
b1D(d){var w=this.e
if(w==null||!C.ku(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aNy(){var w,v,u,t,s=this.c
s.toString
w=this.e
v=w==null
u=v?null:w.as
t=v?null:w.at
return C.aPi(s,t==null?null:B.b0(t),u)},
a7y(d){return this.by7(d)},
by7(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a7y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zE()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eSO)
w=1
break}w=3
return B.b(t.aNy(),$async$a7y)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.eoE(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a7y,v)},
afW(d){return this.cl0(d)},
cl0(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$afW=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zE()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eRX)
w=1
break}w=3
return B.b(t.aNy(),$async$afW)
case 3:r=f
if(r==null||t.gdr()==null){w=1
break}t.d3(new C.esE(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$afW,v)},
c7L(){var w,v,u=this
if(u.kb())return
w=new B.S(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.by(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cxI()}},
cxI(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.d3(new C.euv(this,r,(A.o.aA(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
bWq(){var w,v,u,t,s,r=this.gdr()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.d3(new C.er_(this,r,u.d))},
c_Z(d){var w
if(this.kb())return!1
w=this.e
if((w==null?null:C.ku(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(A.a.a0(w,"marriage_field_"))return!1
if(C.fzT(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kW&&A.a.a0(w,"marriage_sign_"))return!1
return!1},
c0_(d){var w
if(this.kb())return!1
w=this.e
if((w==null?null:C.ku(w.w))!==!0)return!0
if(!this.zE())return!1
w=d.db
if(w==="marriage_locked"||A.a.a0(w,"marriage_locked_"))return!1
if(C.fzT(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a0(w,"__kiapo_video___"))return!1
if(d.b===D.kW&&A.a.a0(w,"marriage_sign_"))return!1
return A.a.a0(w,"marriage_field_")},
N8(d){return this.bAo(d)},
bAo(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$N8=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qd()){w=1
break}if(!t.zE()){s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(D.eQN)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.apc(p),$async$N8)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.I(x.q).f.S(D.eRr)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gL(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a0(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.a6O(r)
w=1
break}t.m(new C.epp(t,d,o))
t.oc()
$.aW.x1$.push(new C.epq(t))
case 1:return B.h(u,v)}})
return B.i($async$N8,v)},
Vg(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Vg=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o2(),$async$Vg)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bC3(),$async$Vg)
case 4:s=e
if(s==null||t.gdr()==null){w=1
break}t.d3(new C.eoB(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Vg,v)},
NS(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$NS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.o2(),$async$NS)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.jN()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fD8(r),$async$NS)
case 4:q=e
if(q==null){w=1
break}t.d3(new C.eqr(s,q))
case 1:return B.h(u,v)}})
return B.i($async$NS,v)},
iS(d){this.d3(new C.eoK(this,d))},
q3(d){return this.bzA(d)},
bzA(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$q3=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qd()){w=1
break}m=!D.aMD.t(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.o2(),$async$q3)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.H0()
w=1
break A
case"sign_paper":t.N_()
w=1
break A
case"hd_photo":t.Vg()
w=1
break A
case"sharpen":t.NS()
w=1
break A
case"print":t.Dk()
w=1
break A
case"rotate":s=t.jN()
if(s!=null)t.d3(new C.eoT(s))
w=1
break A
case"text_box":t.aLz()
w=1
break A
case"picture":t.Vi()
w=1
break A
case"present":t.b4Y()
w=1
break A
case"new_slide":t.a7A()
w=1
break A
case"export_json":t.HN()
w=1
break A
case"outline_share":t.JG()
w=1
break A
case"flashcard_tool":t.v1(D.HB)
w=1
break A
case"quiz_tool":t.v1(D.HC)
w=1
break A
case"worksheet_tool":t.v1(D.HD)
w=1
break A
case"duplicate_el":s=t.jN()
if(s==null){w=1
break A}t.d3(new C.eoU(t,s))
w=1
break A
case"delete_el":t.arx()
w=1
break A
case"bring_fwd":s=t.jN()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.eoV(t,s))
w=1
break A
case"send_back":s=t.jN()
if(s==null||t.gdr()==null){w=1
break A}t.d3(new C.ep5(t,s))
w=1
break A
case"align_left":s=t.jN()
if(s!=null)t.d3(new C.ep8(s))
w=1
break A
case"align_center":s=t.jN()
if(s!=null)t.d3(new C.ep9(s))
w=1
break A
case"align_right":s=t.jN()
if(s!=null)t.d3(new C.epa(s))
w=1
break A
case"grayscale":case"brighten":t.NS()
w=1
break A
case"flip_h":s=t.jN()
if(s!=null)t.d3(new C.epb(s))
w=1
break A
case"flip_v":s=t.jN()
if(s!=null)t.d3(new C.epc(s))
w=1
break A
case"rectangle":t.oX(D.be)
w=1
break A
case"circle":t.oX(D.eJ)
w=1
break A
case"triangle":t.oX(D.jF)
w=1
break A
case"arrow":t.oX(D.Cu)
w=1
break A
case"line":case"divider":t.oX(D.fq)
w=1
break A
case"word_count":r=t.gdr()
if(r==null){w=1
break A}for(q=A.d.gaf(r.z),p=new B.fi(q,new C.epd()),o=0;p.C();){n=A.a.fD(A.a.i(q.gT(0).r),B.af("\\s+",!0,!1,!1,!1))
o+=new B.a2(n,new C.epe(),B.U(n).k("a2<1>")).gM(0)}t.c.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.iS(C.iS(A.L,!1,t.gqh().d.l(),A.aD,40,A.bl,A.u,0.18,q,"Presentation Title",0,D.mB,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.iS(C.iS(A.L,!1,t.gqh().e.l(),A.aD,22,A.bl,A.a5,0.12,q,"Subtitle goes here",0,D.dd,0.8,0.1,0.48))
w=1
break A
case"bullets":t.iS(C.iS(A.bg,!0,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.uc,0.8,0.1,0.22))
w=1
break A
case"numbered":t.iS(C.iS(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.ub,0.8,0.1,0.22))
w=1
break A
case"quote":t.iS(C.iS(A.L,!1,4279310375,A.aD,24,A.cF,A.a5,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dd,0.8,0.1,0.3))
w=1
break A
case"citation":t.iS(C.iS(A.bg,!1,4284773515,A.aD,14,A.bl,A.a5,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.uc,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.iS(C.iS(A.dM,!1,4279310375,A.aD,14,A.bl,A.a5,0.08,C.cC(),C.bC5(),0,D.dd,0.24,0.72,0.04))
w=1
break A
case"page_number":t.iS(C.iS(A.dM,!1,4279310375,A.aD,13,A.bl,A.a5,0.06,C.cC(),"Page "+(t.f+1),0,D.dd,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.d3(new C.eoW(t))
w=1
break A
case"footer_bar":t.d3(new C.eoX(t))
w=1
break A
case"highlight":t.d3(new C.eoY(t))
w=1
break A
case"redact":t.d3(new C.eoZ(t))
w=1
break A
case"callout":t.d3(new C.ep_(t))
w=1
break A
case"checkboxes":t.iS(C.iS(A.bg,!1,4279310375,A.aD,20,A.bl,A.a5,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dd,0.8,0.1,0.2))
w=1
break A
case"table":t.iS(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dd,0.8,0.1,0.18))
w=1
break A
case"memo":t.d3(new C.ep0(t))
w=1
break A
case"letter":t.iS(C.iS(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.82,C.cC(),C.bC5()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"agenda":t.iS(C.iS(A.bg,!1,4279310375,A.aD,22,A.bl,A.P,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.uc,0.8,0.1,0.12))
w=1
break A
case"toc":t.iS(C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dd,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.iS(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Signature: _________________________",0,D.dd,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.iS(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.08,C.cC(),"Initials: ______",0,D.dd,0.3,0.65,0.78))
w=1
break A
case"approved":t.iS(C.iS(A.L,!1,4278556265,A.aD,28,A.bl,A.u,0.12,C.cC(),"APPROVED",0,D.mB,0.32,0.62,0.08))
w=1
break A
case"draft":t.iS(C.iS(A.L,!1,4292617766,A.aD,28,A.bl,A.u,0.12,C.cC(),"DRAFT",0,D.dd,0.32,0.62,0.08))
w=1
break A
case"confidential":t.iS(C.iS(A.L,!1,871318596,A.aD,36,A.bl,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dd,0.8,0.1,0.42))
w=1
break A
case"sticky":t.d3(new C.ep1(t))
w=1
break A
case"progress":t.d3(new C.ep2(t))
w=1
break A
case"stars":t.iS(C.iS(A.L,!1,4279310375,A.aD,36,A.bl,A.a5,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.q6,0.8,0.1,0.4))
w=1
break A
case"equation":t.iS(C.iS(A.L,!1,4279310375,A.aD,32,A.bl,A.P,0.14,C.cC(),"y = mx + b",0,D.dd,0.8,0.1,0.38))
w=1
break A
case"timeline":t.iS(C.iS(A.L,!1,4279310375,A.aD,18,A.bl,A.a5,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.ub,0.8,0.1,0.35))
w=1
break A
case"two_col":t.d3(new C.ep3(t))
w=1
break A
case"compare":t.d3(new C.ep4(t))
w=1
break A
case"link_text":t.iS(C.iS(A.bg,!1,4280640491,A.mG,16,A.bl,A.a5,0.1,C.cC(),"https://example.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"phone":t.iS(C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.1,C.cC(),"(555) 123-4567",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"email":t.iS(C.iS(A.bg,!1,4280640491,A.aD,18,A.bl,A.a5,0.1,C.cC(),"name@email.com",0,D.dd,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.d3(new C.ep6(t))
w=1
break A
case"cover_page":r=t.gdr()
if(r==null){w=1
break A}t.d3(new C.ep7(t,r))
w=1
break A
case"invoice":t.iS(C.iS(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"resume":t.iS(C.iS(A.bg,!1,4279179050,A.aD,17,A.bl,A.a5,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dd,0.8,0.1,0.08))
w=1
break A
case"minutes":t.iS(C.iS(A.bg,!1,4279310375,A.aD,16,A.bl,A.a5,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bC5()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.iS(C.iS(A.bg,!1,4279310375,A.aD,17,A.bl,A.a5,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dd,0.8,0.1,0.06))
w=1
break A
case"rubric":t.iS(C.iS(A.bg,!1,4279310375,A.aD,15,A.bl,A.a5,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dd,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$q3,v)},
crs(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.eJH.t(0,this.z)},
crr(d){if(this.jN()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
b6z(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cl,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.m(12)
u=e?f:A.bF
u=B.I(u,A.q,o&&e?2:1)
t=C.i2S(d)
s=o?12:18
r=o?A.H:A.cN
if(o)if(e)q=f
else q=g?A.ad:A.ak
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.l(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.NC,A.f,p,p,D.DL,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.C(A.fy,B.aE(p,new B.an(A.W,p,A.aa,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a8),p)},
bLG(d){var w,v=null,u=this.jN()
if(u==null)return A.bH
w=B.a([A.ab,B.d("Anim:",v,v,v,v,v,v,B.l(v,v,d?A.az:A.ak,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bp],x.p)
A.d.v(w,new B.K(D.Q5,new C.eqq(this,u,d),x.bR))
return B.A(w,A.m,v,A.e,A.j,0,v,v)},
v1(d){return this.byf(d)},
byf(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$v1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aMx.t(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.o2(),$async$v1)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.d3(new C.eoL(t,d))
case 1:return B.h(u,v)}})
return B.i($async$v1,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.eIt
w=h.e
if(w==null)return h.bC2()
v=h.gdr()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aI(u,A.bU,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aI(u,A.eD,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.bY:D.b9q
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gRS()}else j=!1
if(j)k.push(new C.a7i(h.a.c,!1,h.e.gb8L(),h.gc7I(),g))
else if(s&&h.e!=null&&!h.kb()&&C.cdN(h.e.w)){j=h.a
k.push(new C.a7i(j.c,j.d,g,h.gc8R(),g))}if(s)k.push(h.bLC(w,t,r))
if(s&&h.kb()){w=t?A.fm:A.kh
j=B.m(14)
i=B.I(A.bk.j(0.35),A.q,1)
k.push(B.p(g,B.A(B.a([D.bKa,A.ab,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.l(g,g,t?A.c:A.fm,g,g,g,g,g,g,g,g,12,g,g,A.P,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.m,g,A.e,A.j,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.AS,A.ix,g,g,g))}w=!n
if(w&&!h.kb())k.push(h.c0V(t,r))
if(w&&h.kb())k.push(h.cyH(t))
if(r&&h.jN()!=null&&w&&!h.kb())k.push(h.c0R(t))
j=B.a([],l)
if(q&&w)j.push(new B.a7(132,g,h.b4t(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a7(g,72,h.b4t(t,!1),g))
i.push(B.E(new B.bI(A.b0,g,g,h.bDk(v,t,!s||p),g),1))
if(h.crs(r)&&u&&s&&!h.kb())i.push(h.c7w(v,t,r))
j.push(B.E(B.v(i,A.m,g,A.e,A.j,0,A.p),1))
if(q&&!h.kb()&&h.crr(!1))j.push(new B.a7(240,g,h.bOc(t),g))
k.push(B.E(B.A(j,A.aj,g,A.e,A.j,0,g,g),1))
if(u&&s)k.push(new B.a7(g,r?72:h.a.e,g,g))
w=B.a([B.v(k,A.m,g,A.e,A.j,0,A.p)],l)
if(o&&r)w.push(h.c0S(t))
return B.c8(g,m,B.bn(!1,new B.an(A.W,g,A.aa,A.r,w,g),!0,!1,A.af,!0,!0),g,!1,!1,g,!1)},
bC2(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
p=w?A.bY:A.bM
v=r.a.e
u=r.c6M(A.bk,A.pN,new C.ept(r),r.gcb0(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES")
t=x.p
s=B.A(B.a([B.E(r.aLh(A.bk,A.hy,"Blank Presentation",new C.epu(r)),1),A.av,B.E(r.aLh(A.aZ,A.vG,"Class Template",new C.epv(r)),1)],t),A.m,q,A.e,A.j,0,q,q)
u=B.a([u,A.by,s,A.mF,B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.l(q,q,w?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q),A.ac],t)
t=r.d
if(t.length===0)u.push(r.bz2(w))
else{t=new B.hX(t,B.U(t).k("hX<1>"))
A.d.v(u,t.gdK(t).dt(0,new C.epw(r,w),x.l))}return B.c8(q,p,B.bn(!1,B.cz(u,q,new B.Q(18,12,18,v),q,q,A.ah,!1),!0,!1,A.af,!0,!0),q,!1,!1,q,q)},
bJU(){this.m(new C.eq6(this))
var w=this.c
w.toString
if(B.aI(w,A.bU,x.w).w.a.a<900){w=$.aW.ak$.d.c
if(w!=null)w.jD()}},
aeC(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeC=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.jN()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bU(A.K,null,new C.esh(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$aeC)
case 3:case 1:return B.h(u,v)}})
return B.i($async$aeC,v)},
AB(d,e){return this.crO(d,e)},
crO(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$AB=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hR(D.Wd,!0,"Dismiss",j,new C.etQ(),new C.etR(d,e),A.iv,!0,x.N),$async$AB)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.ai1()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gRS()){r.ai1()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aPj(d),$async$AB)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aOI(j,q,d.b),$async$AB)
case 12:t=2
w=10
break
case 8:t=7
i=s.pop()
p=B.aa(i)
j=r.c
if(j==null){w=1
break}j.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d("Could not create PDF: "+B.t(p),null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=10
break
case 7:w=2
break
case 10:w=5
break
case 6:w=n?13:15
break
case 13:w=16
return B.b(r.F_(d,!1),$async$AB)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hR(D.Wd,!0,"Dismiss",j,new C.etS(),new C.etT(d),A.a1,!0,x.y),$async$AB)
case 20:if(g===!0)r.NE(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.afF("Rename presentation",d.b),$async$AB)
case 24:l=g
if(l!=null)r.cmf(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.ag()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.etU(r,k))
r.pg()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$AB,v)},
b_u(d,e){var w=null
return B.bK(!1,D.fql,w,w,!0,w,w,e,w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bk,w,w,w,A.au,w,A.lJ,w,w,w,w,w,A.k0,w,w))},
bz2(d){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eoQ(this,d),null)},
bI_(d,e,f){var w=new B.K(B.a(d.split(" \u2022 "),x.s),new C.epV(),x.dv).c_(0,new C.epW()),v=B.B(w,w.$ti.k("J.E"))
return new B.C(G.agk,this.aLR(v,e,new C.epX(),f),null)},
aLR(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.eb)
t=e.j(g?0.14:0.1)
s=new B.aT(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.q,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.v(q,B.a([B.X(p,g?A.ad:A.bv,n,n,n,10),A.qd],m))}p=d[v]
o=g?A.c.j(0.85):A.aK
q.push(new B.x(p,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n,n,n,n,1,n,n))
u.push(B.p(n,new B.cn(A.aO,A.e,A.Q,A.m,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bO(r,r,r,r),new B.bp(s,s,s,s),n,n,A.n),n,n,n,n,A.na,n,n,n))
A.d.v(l,u)}return B.f4(A.a3,B.A(l,A.m,n,A.e,A.Q,0,n,n),A.f,A.eg)},
bz0(d,e,f){return this.aLR(d,e,null,f)},
bI1(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dah
else if(v==="hati_kuhoweya")w=D.cXB
else{if(v==="hati_kiapo_uongozi")v=D.cKF
else v=C.ku(v)?D.cRF:A.PH
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eq_(this,f,d,e,w),null)},
c0S(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.jN()
if(i==null||i.b!==D.cQ)return A.bH
w=k.W9(i)
v=k.asx(i)
u=A.w.j(0.55)
t=x.p
s=B.bn(!1,new B.C(A.AV,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.l(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b6,B.bK(!1,D.fm4,j,j,!0,j,j,new C.erq(k),j,j)],t),A.m,j,A.e,A.j,0,j,j),j),!0,!1,A.af,!0,!0)
r=d?A.aB:A.c
q=B.m(18)
p=B.I(A.bk.j(0.45),A.q,1)
o=B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.C(A.h6,B.c_(new B.C(A.eP,B.aM(j,A.T,!0,j,!0,A.r,j,B.aN(),w,A.bk,j,j,j,j,2,D.bQ4,A.y,!0,j,!0,j,!0,v,A.ai,j,j,j,j,j,A.wd,j,j,j,j,j,j,!1,"\u2022",j,new C.err(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.a9,j,j,j,j,j,j,j,j,j,j,j,B.l(j,j,d?A.c:A.M,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a4,A.zo,A.am,j,A.SW,j,j),j),new B.o(r,j,p,q,o,j,A.n),A.bd),j),1)
q=B.m(16)
p=d?A.bm:A.c
o=B.I(d?A.aK:A.aL,A.q,1)
n=B.E(B.cd(B.A(B.a([k.tP(G.MB,j,new C.ers(k,i),d),k.tP(G.ZL,j,new C.ert(k,i),d),k.tP(I.akD,j,new C.eru(k,i),d),k.tP(I.a_r,j,new C.erv(k,i),d),k.tP(k.byZ(i.as),j,new C.erw(k,i),d),k.tP(D.alP,j,new C.erx(k,i),d),k.tP(D.alO,j,new C.ery(k,i),d)],t),A.m,j,A.e,A.j,0,j,j),A.r,j,A.y,j,j,j,j,A.aO),1)
m=A.k.N(i.w)
return B.bZ(0,B.aG(!1,A.a1,!0,j,B.v(B.a([s,r,new B.C(N.agt,B.p(j,B.A(B.a([n,A.ab,B.d(""+m+" pt",j,j,j,j,j,j,B.l(j,j,d?A.az:A.ak,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.d9],t),A.m,j,A.e,A.j,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lf,j,j,j),j)],t),A.m,j,A.e,A.j,0,A.p),A.f,u,0,j,j,j,j,j,A.ag),0,0,0)},
c0R(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.jN()
if(m==null)return A.bH
w=m.b
v=w===D.cQ
u=B.m(18)
t=x.O
t=d?B.a([A.bm,A.M],t):B.a([A.c,A.aP],t)
s=B.I(d?A.aK:A.aL,A.q,1)
r=B.a([new B.ac(0,A.G,A.w.j(0.12),A.cx,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b37(A.jg,"Edit",new C.erb(o,m),d,!0))
if(w===D.lq)p.push(o.b37(A.G2,"Shape & ring",new C.erc(o),d,!0))
p.push(o.tP(A.BF,"Format",new C.erd(o),d))
if(v)A.d.v(p,B.a([o.tP(G.MB,n,new C.ere(o,m),d),o.tP(D.alP,n,new C.erf(o,m),d),o.tP(D.alO,n,new C.erg(o,m),d)],q))
p.push(A.b6)
p.push(o.cpH(A.e5,n,o.gaPQ(),d,!0))
p.push(o.tP(A.hz,"Done",new C.erh(o),d))
return B.p(n,B.A(p,A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a8(A.a3,A.a7,A.x,t,n,n),A.n),n,n,n,A.AT,A.lf,n,n,n)},
byZ(d){switch(d.a){case 2:return D.a_o
case 1:case 5:return D.a_q
default:return D.a_p}},
c1I(d){switch(d.a){case 0:case 4:return A.L
case 2:return A.dM
default:return A.bg}},
ayT(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.ay
else if(h)w=A.c
else{v=g?A.ad:A.aK
w=v}v=B.m(12)
u=B.m(12)
t=h?K.Gn:n
if(h)s=n
else s=g?A.c.j(0.06):A.bM
r=e==null
q=r?10:12
p=x.p
o=B.a([B.X(d,w,n,n,n,16)],p)
if(!r)A.d.v(o,B.a([A.eb,B.d(e,n,n,n,n,n,n,B.l(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.C(A.qU,B.aG(!1,A.a1,!0,n,B.aL(!1,v,!1,B.eE(new B.C(new B.Q(q,8,q,8),B.A(o,A.m,n,A.e,A.Q,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.K,0,n,n,n,n,n,A.ag),n)},
tP(d,e,f,g){return this.ayT(d,e,f,g,!1,!1)},
b37(d,e,f,g,h){return this.ayT(d,e,f,g,h,!1)},
cpH(d,e,f,g,h){return this.ayT(d,e,f,g,!1,h)},
bLC(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.m(20),m=x.O
m=e?B.a([A.bm,A.M],m):B.a([A.c,A.mR],m)
w=B.I(e?A.aK:A.pk,A.q,1.2)
v=B.a([new B.ac(0,A.G,A.bk.j(e?0.18:0.1),A.cx,18)],x.V)
u=p.a20(A.eA,"Back",p.gbF5(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.l(o,o,e?A.c:A.M,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.d9,B.E(B.A(B.a([new B.dq(1,A.cn,t,o),A.ab,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.l(o,o,e?A.c1:A.ak,o,o,o,o,o,o,o,o,11,o,o,A.P,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.tn,o,A.e,A.j,0,A.cW,o),1)],q)
if(!p.kb()){u=p.a20(A.r6,"Undo",p.ax.length===0?o:p.gczb(),e)
A.d.v(r,B.a([u,p.a20(D.bDK,"Redo",p.ay.length===0?o:p.gckX(),e)],q))}r.push(p.a20(A.xU,"PDF",new C.eqj(p),e))
r.push(p.a20(A.hA,"Download as video",new C.eqk(p),e))
if(!p.kb())r.push(B.BE(o,o,B.X(A.nZ,e?A.ad:A.bv,o,o,o,o),new C.eql(p),A.J,new C.eqm(p),A.af,"More",x.N))
r.push(A.d9)
r.push(B.aG(!1,A.a1,!0,o,B.aL(!1,B.m(14),!0,B.eE(D.e5O,o,new B.o(o,o,o,B.m(14),o,K.Gn,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gazJ(),o,o,o,o,o,o,o),A.f,A.K,0,o,o,o,o,o,A.ag))
return B.p(o,B.A(r,A.m,o,A.e,A.j,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a8(A.ax,A.aC,A.x,m,o,o),A.n),o,o,o,D.bpJ,D.buP,o,o,o)},
cyH(d){var w=this,v=null,u=B.m(18),t=d?A.aB.j(0.92):A.c.j(0.96),s=B.I(d?A.cE:A.aL,A.q,1)
return B.p(v,B.cd(B.A(B.a([w.iB(A.tT,"Print",new C.euB(w),d),w.iB(A.xU,"Download PDF",new C.euC(w),d),w.iB(A.pU,"Present",w.gazJ(),d)],x.p),A.m,v,A.e,A.j,0,v,v),A.r,v,A.y,v,v,v,v,A.aO),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.AS,G.ai9,v,v,v)},
a20(d,e,f,g){var w,v=null
if(f==null)w=g?A.b3:A.dp
else w=g?A.ad:A.aK
return B.aH(v,v,v,v,B.X(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.ca)},
c0V(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.m(18)
v=d?A.aB.j(0.92):A.c.j(0.96)
u=B.I(d?A.cE:A.aL,A.q,1)
t=x.f0
t=B.B(new B.K(p,new C.erB(r,d),t),t.k("ak.E"))
t.push(new B.C(X.ahP,new B.ff(new C.erC(r),q),q))
A.d.v(t,w?B.a([new B.C(R.vn,r.agi(A.lg,"Ending celebration",r.gcbd(),d),q),new B.C(R.vn,r.agi(A.G2,"Logo ring & frame",r.gcbU(),d),q)],x.p):A.h9)
A.d.v(t,w?B.a([new B.C(R.vn,r.agi(A.nd,"Look and feel",r.gcbV(),d),q),new B.C(R.vn,r.agi(A.oL,"Edit this slide's text",r.gccr(),d),q)],x.p):A.h9)
t.push(new B.C(R.vn,B.hp(B.aE(q,B.p(q,D.eHW,A.f,q,q,new B.o(q,q,q,B.m(999),B.a([new B.ac(0,A.G,O.la.j(0.4),A.J,10)],x.V),D.anN,A.n),q,34,q,q,A.fU,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.erD(r),q,q,q,q,q,q,!1,A.a8),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.cd(B.A(t,A.m,q,A.e,A.j,0,q,q),A.r,q,A.y,q,D.bvh,q,q,A.aO)
s=e?8:10
return B.p(q,B.v(B.a([t,B.cd(r.cnq(d),A.r,q,A.y,q,new B.Q(8,2,8,s),q,q,A.aO)],x.p),A.aj,q,A.e,A.j,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.AS,q,q,q,q)},
cnq(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.d4k[v]
u.a=null
s=u.a=t.b
w.push(e.lD(e.cp6(s),t.a,new C.et_(u,e),a3,D.aMx.t(0,s)))}w.push(e.iB(A.kP,"Notes Slide",new C.et0(e),a3))
w.push(e.lD(A.G1,"Quiz",new C.et1(e),a3,!0))
w.push(e.lD(L.FF,"Worksheet",new C.etc(e),a3,!0))
w.push(e.lD(V.G4,"Flashcard",new C.etn(e),a3,!0))
w.push(e.lD(A.Ns,"Lab Report",new C.ety(e),a3,!0))
w.push(e.lD(A.tN,"Rubric",new C.etF(e),a3,!0))
w.push(e.lD(A.oF,"Minutes",new C.etG(e),a3,!0))
w.push(e.lD(A.nY,"Syllabus",new C.etH(e),a3,!0))
w.push(e.lD(A.Nw,"Timeline",new C.etI(e),a3,!0))
return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.d5x[v]
w.push(e.lD(r.b,r.c,new C.etJ(e,r),a3,!D.aMD.t(0,A.a.i(r.a))))}return B.A(w,A.m,d,A.e,A.j,0,d,d)
case"Insert":return B.A(B.a([e.iB(A.ye,a0,e.gaLy(),a3),e.iB(A.tQ,"Picture",new C.et2(e),a3),e.iB(A.y8,"Bio link",new C.et3(e),a3),e.iB(A.a_V,"Table",new C.et4(e),a3),e.iB(A.Nv,"Sticky",new C.et5(e),a3),e.iB(A.tP,"Divider",new C.et6(e),a3),e.iB(A.BG,"Header",new C.et7(e),a3),e.lD(A3.vw,"Rectangle",new C.et8(e),a3,!0),e.lD(A.qZ,"Circle",new C.et9(e),a3,!0),e.lD(A.a_g,"Triangle",new C.eta(e),a3,!0),e.lD(A.iU,"Arrow",new C.etb(e),a3,!0),e.lD(D.bCe,"Parallelogram",new C.etd(e),a3,!0),e.lD(D.bEH,"Hexagon",new C.ete(e),a3,!0),e.lD(A.tP,"Line",new C.etf(e),a3,!0),e.lD(A.xU,"PDF",new C.etg(e),a3,!0),e.lD(O.a03,"Signature",new C.eth(e),a3,!0),e.iB(A2.Bw,"Quote",new C.eti(e),a3),e.iB(D.ZT,a1,new C.etj(e),a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Design":w=e.c
w.toString
w=B.aI(w,A.bU,x.w).w
u=x.p
t=B.A(B.a([e.aMn("Wide 16:9",D.Cs,a3),e.aMn("Short 9:16",D.o7,a3),new B.C(A.fy,B.mF(D.bGP,d,D.fip,d,new C.etk(e),d,d,d,d),d)],u),A.m,d,A.e,A.j,0,d,d)
q=B.A(B.a([e.bFk("This slide",!e.Q,a3,new C.etl(e)),A.bp,e.aOy("All slides",e.Q,a3,new C.etm(e),!0)],u),A.m,d,A.e,A.j,0,d,d)
p=e.bFl()
p=B.d(p,d,d,d,d,d,d,B.l(d,d,a3?A.c1:A.bJ,d,d,d,d,d,d,d,d,10,d,d,A.a5,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.B(new B.K(D.a1R,new C.eto(e),n),n.k("ak.E"))
n=B.cd(B.A(n,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.d6t[v]
j=B.b0(k)
i=new B.ay(k===4294967295?A.dp:A.b3,1.5,A.q,-1)
l.push(new B.C(A.fy,B.aE(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bO(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.etp(e,k),d,d,d,d,d,d,!1,A.a8),d))}l=B.cd(B.A(l,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bDn()
g=B.U(h).k("K<1,C>")
h=B.B(new B.K(h,new C.etq(e,a3),g),g.k("ak.E"))
return new B.a7(w.a.a-20,d,B.v(B.a([t,A.N,q,A.an,p,A.N,o,A.at,n,A.N,m,A.at,l,A.N,j,A.at,B.cd(B.A(h,A.m,d,A.e,A.j,0,d,d),A.r,d,A.y,d,d,d,d,A.aO),A.an,e.bYN(a3)],u),A.F,d,A.e,A.Q,0,A.p),d)
case"Transitions":f=e.jN()
w=e.c
w.toString
w=B.aI(w,A.bU,x.w).w
u=new C.esZ(e)
t=new C.etK(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.Q5,f.dy,new C.etr(e,u,f),A.aZ)
A.d.v(p,B.a([o,A.at,n,A.N,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.l(d,d,a3?A.az:A.ak,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.at],q))}q=e.gdr()
q=q==null?d:q.r
p.push(t.$4(D.Q5,q,new C.ets(e,u),A.bk))
return new B.a7(w.a.a-20,d,B.v(p,A.F,d,A.e,A.Q,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.iB(A.kP,w,new C.ett(e),a3),e.iB(A.tT,"Print deck",new C.etu(e),a3),e.lD(D.ajH,"Export JSON",new C.etv(e),a3,!0),e.iB(A.fL,"Duplicate Slide",e.gaQI(),a3),e.iB(A.e5,a2,e.gaPR(),a3),e.ct6(a3)],x.p),A.m,d,A.e,A.j,0,d,d)
case"Home":default:f=e.jN()
w=x.p
u=B.a([e.iB(D.ZT,a1,new C.etw(e),a3),e.iB(A.fL,"Duplicate",e.gaQI(),a3),e.iB(A.e5,a2,e.gaPR(),a3),e.iB(A.pU,"Present",e.gazJ(),a3),e.iB(A.BE,a0,e.gaLy(),a3),e.iB(A.Bz,"Fit Text",new C.etx(e),a3),e.iB(A.xU,"Download PDF",new C.etz(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.iB(A.kR,"Transfer",new C.etA(e),a3))
if(f!=null){w=B.a([A.ab,e.iB(G.MB,"Bold",new C.etB(e,f),a3),e.iB(G.ZL,"Italic",new C.etC(e,f),a3),e.iB(G.aji,"Underline",new C.etD(e,f),a3),e.iB(Ae.MC,"Bullets",new C.etE(e,f),a3),e.bNW(f,a3)],w)
if(!A.a.a0(f.db,"__design__"))w.push(e.bLG(a3))
w.push(e.iB(D.bAT,"Delete",e.gaPQ(),a3))
A.d.v(u,w)}return B.A(u,A.m,d,A.e,A.j,0,d,d)}},
aMn(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.o7
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.a7x,t,t,t)],v)
if(w)A.d.v(u,B.a([A.d9,D.bG0],v))
return new B.C(A.fy,B.j5(t,t,t,B.A(u,A.m,t,A.e,A.Q,0,t,t),t,new C.epo(this,w,e),s===e,A.bk.j(0.25),t,t,t),t)},
ct6(d){var w,v,u,t,s,r=this,q=null,p=r.gdr()
if(p==null)return A.bH
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.I(d?A.b3:A.cq,A.q,1)
u=B.m(8)
t=B.X(A.FD,d?A.az:A.ak,q,q,q,14)
s=B.aH(q,q,q,q,D.amN,q,q,q,new C.eu6(r,p),q,q,q,q,q,A.ca)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.l(q,q,d?A.c:A.bi,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aH(q,q,q,q,D.amE,q,q,q,new C.eu7(r,p),q,q,q,q,q,A.ca)],x.p),A.m,q,A.e,A.Q,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Fj,A.mn,q,q,q)},
cp6(d){switch(d.a){case 6:return V.G4
case 7:return A.G1
case 8:return L.FF
case 4:return A.BG
default:return A.kP}},
bNW(d,e){var w=null,v=B.I(e?A.b3:A.cq,A.q,1),u=B.m(8),t=B.aH(w,w,w,w,D.amN,w,w,w,new C.eqw(this,d),w,w,w,w,w,A.ca),s=A.k.N(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.l(w,w,e?A.c:A.bi,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aH(w,w,w,w,D.amE,w,w,w,new C.eqx(this,d),w,w,w,w,w,A.ca)],x.p),A.m,w,A.e,A.Q,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.xD,A.mn,w,w,w)},
bYN(d){var w=null
return B.BE(B.D4(B.X(A5.ZW,d?A.ad:A.bv,w,w,w,16),w,w,D.fnS,w,w,w),w,w,new C.er3(),A.J,this.gbzG(),A.co,"Slide layout",x.fO)},
lD(d,e,f,g,h){var w=null,v=B.m(14),u=B.m(14),t=g?A.c.j(0.06):A.bM,s=B.I(g?A.dq:A.aL,A.q,1),r=x.p,q=B.a([B.X(d,g?A.dv:A.bk,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.NC,A.f,w,w,D.DL,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.C(A.fy,B.aG(!1,A.a1,!0,w,B.aL(!1,v,!0,B.eE(new B.C(A.h6,B.v(B.a([new B.an(A.W,w,A.aa,A.f,q,w),A.cS,B.d(e,w,w,w,w,w,w,B.l(w,w,g?A.aR:A.bv,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.m,w,A.e,A.Q,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w)},
iB(d,e,f,g){return this.lD(d,e,f,g,!1)},
b4t(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aO
v=B.hH(t,new C.eui(u,s,e,d),s.r.length,A.co,t,w,new C.euj(e),!1)
s=d?A.aB:A.bM
w=B.a([],x.p)
if(e&&!u.kb())w.push(new B.C(A.co,B.Hq(E.an_,new C.euk(u),B.nw(t,A.bk,t,t,t,t,t,t,t,t,t,t,E.aNf,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.v(w,A.m,t,A.e,A.j,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bDk(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.o7?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.C(new B.Q(u,u,u,u),new B.bI(A.b0,v,v,new B.fG(w,B.aE(v,B.cp(new C.epN(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.epO(this),v,v,v,v,v,v,!1,A.a8),v),v),v)},
bDm(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.ku(a9.w))===!0,b1=b0&&C.fzT(b3),b2=b0&&b3.b===D.kW&&A.a.a0(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a0(a9,"__kiapo_video___")}else w=!1
if(!a7.kb())v=!b0||a7.c0_(b3)
else v=!1
if(!a7.kb())u=!b0||a7.c_Z(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a0(a9,"__design__")||A.a.a0(b3.a,"design_")?A.ci:A.bk
q=b0&&A.a.a0(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.fYx(b3))o=a8
else if(p&&!a7.kb())o=a7.gc7K()
else o=a7.kb()?a8:new C.epB(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.c4:A.jy
i=w&&C.fYx(b3)&&a7.zE()?new C.epC(a7,b3):a8
h=v&&b3.b===D.cQ?new C.epD(a7,b3):a8
g=u?new C.epE(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bo
else e=q?A.bZ:r
else e=A.K
e=B.I(e,A.q,t?2:0)
d=B.m(t?6:0)
if(b1)a0=A.bZ.j(0.08)
else a0=b3.b===D.kW?A.K:a8
if(b1){a1=a7.kb()?"":"Tap to sign"
a1=B.av(B.d(a1,a8,a8,a8,a8,a8,a8,B.l(a8,a8,A.bZ.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.P,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aI(a1,A.bU,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.zE()
a3=b3.b===D.cQ
a4=a3?a7.W9(b3):a8
a5=a3?a7.asx(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aI(a6,A.bU,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.epF(a7,b3):a8
a3=v&&a3?new C.epG(a7,b3):a8
a6=C.b0o(q,a4,a1,b3,a5,a2,a3,new C.epH(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.m(6)
d.push(B.ao(-4,B.aE(a8,B.p(a8,D.bIQ,A.f,a8,a8,new B.o(r,a8,B.I(A.c,A.q,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.epI(a7,b3,b4,b5),a8,a8,new C.epJ(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kb()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bJu,A.f,a8,a8,new B.o(A.dA,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gbWp(),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kb()&&A.a.a0(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.aE(a8,B.p(a8,D.bL1,A.f,a8,a8,new B.o(A.bZ,a8,B.I(A.c,A.q,1.2),a8,B.a([new B.ac(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.epK(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.cQ)if(a7.w!==a9){e=a7.c
e.toString
e=B.aI(e,A.bU,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.av(B.aE(a8,B.p(a8,D.fww,A.f,a8,a8,new B.o(A.bk,a8,a8,B.m(999),B.a([new B.ac(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.kN,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.epL(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a8),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.aE(j,B.eG(A.A,f,new B.an(A.W,a8,A.aa,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a8),k*b5,new B.cx("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aOy(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bk.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.m(10)
u=B.I(e?A.bk:A.bF,A.q,1)
if(e)t=A.bk
else t=f?A.az:A.ak
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.l(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.v(t,B.a([A.d9,B.p(r,D.NC,A.f,r,r,D.DL,r,12,r,r,r,r,r,12)],s))
return B.aE(r,B.p(r,B.A(t,A.m,r,A.e,A.Q,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.h5,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a8)},
bFk(d,e,f,g){return this.aOy(d,e,f,g,!1)},
c7w(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.aw()
v.P$=0}v=d.c
w.n(0,k,new B.ar(new B.bb(v,A.b4,A.aN),$.aw()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.aB:A.aP
t=f?A.wD:l
if(f)s=new B.bO(new B.ay(e?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else s=l
r=f?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rq,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.l(l,l,e?A.ad:A.bv,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b6,m.b_u(e,new C.erF(m))],q),A.m,l,A.e,A.j,0,l,l)
o=B.l(l,l,e?A.c:A.aK,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.l(l,l,e?A.c1:A.bJ,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.v(B.a([p,A.an,B.E(B.aM(l,A.T,!1,l,!0,A.r,l,B.aN(),k,l,l,l,l,l,2,B.br(l,new B.b4(4,B.m(10),A.dg),l,A.bT,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ai,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.erG(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.a9,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a4,l,A.am,l,l,l,l),1)],q),A.aj,l,A.e,A.j,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aS_(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.jN()
if(a2==null)return A.bH
w=new C.eqK(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.k.D(1-a2.c,0.06,1)
t=A.k.D(1-a2.d,0.06,1)
s=A.k.D(1-a2.e,0.01,1)
r=A.k.D(1-a2.f,0.01,1)
q=a5?A.dQ:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.c:A.M,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b6,a0.b_u(a3,a0.gbJT())],p),A.m,a1,A.e,A.j,0,a1,a1))
if(n)o.push(A.S)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fiU,B.E(B.kX(a1,a1,a1,u,0.05,new C.eqL(w,a2),A.k.D(a2.e,0.05,u)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
o.push(B.A(B.a([D.fuZ,B.E(B.kX(a1,a1,a1,t,0.05,new C.eqM(w,a2),A.k.D(a2.f,0.05,t)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
n=a2.b
m=n===D.cQ
if(m)o.push(B.A(B.a([D.fcP,B.E(B.kX(a1,a1,a1,96,10,new C.eqN(w,a2),A.k.D(a2.w,10,96)),1)],p),A.m,a1,A.e,A.j,0,a1,a1))
l=n===D.lq
if(l||n===D.kW||n===D.Ro)A.d.v(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.foA,B.E(B.kX(a1,a1,a1,s,0,new C.eqO(w,a2),A.k.D(a2.c,0,s)),1)],p),A.m,a1,A.e,A.j,0,a1,a1),B.A(B.a([D.fwf,B.E(B.kX(a1,a1,a1,r,0,new C.eqP(w,a2),A.k.D(a2.d,0,r)),1)],p),A.m,a1,A.e,A.j,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.BV[j]
i.a=null
g=h.a
i.a=g
k.push(B.j5(a1,a1,a1,new B.x(h.b,a1,A.qi,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eqQ(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bY(A.bz,k,A.bq,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.BQ[j]
f.a=null
g=e.a
f.a=g
h.push(B.j5(a1,a1,a1,new B.x(e.b,a1,A.qi,a1,a1,a1,a1,a1,a1,a1,a1,a1),a1,new C.eqR(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.v(o,B.a([A.N,l,A.an,k,A.N,i,A.an,B.bY(A.bz,h,A.bq,6,6)],p))}o.push(A.N)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.B(new B.K(v,new C.eqS(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.v(o,B.a([m,A.an,B.bY(A.bz,l,A.bq,6,6),A.ac,B.h9v(new C.eqT(w,a2),D.clZ,B.et([a2.as],k),!0,a1,k)],p))}if(n===D.f0){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.l(a1,a1,a3?A.az:A.ak,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.B(new B.K(v,new C.eqU(w,a2),m),m.k("ak.E"))
A.d.v(o,B.a([n,B.bY(A.bz,m,A.bq,0,6)],p))}o.push(A.ac)
o.push(B.dp(D.bKO,D.fqw,new C.eqV(a0,a5),B.bl(A.bI,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cz(o,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.cE:A.c
p=a4?A.wD:a1
if(a4)o=new B.bO(new B.ay(a3?A.bF:A.aL,1,A.q,-1),A.Y,A.Y,A.Y)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ac(0,A.G,A.w.j(0.12),A.rq,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.F2,a1,a1,a1)},
bOc(d){return this.aS_(d,!1,!1,null)},
c6M(d,e,f,g,h,i){var w,v,u,t,s,r=this,q=null,p=r.fy
p===$&&B.c()
p=B.c6(p,new C.eqY(r,f,d,e),q)
w=B.d(i,q,q,q,q,q,q,D.f2Q,q,q,q)
v=r.c
v.toString
u=x.p
v=B.a([p,A.bf,B.E(B.v(B.a([w,A.bB,A.cS,r.bz0(D.cPc,d,B.P(v).ax.a===A.I)],u),A.F,q,A.e,A.j,0,A.p),1)],u)
p=x.V
A.d.v(v,B.a([A.ab,B.dU(B.hp(B.aG(!1,A.a1,!0,q,B.aL(!1,q,!0,B.eE(D.eNe,q,new B.o(q,q,B.I(A.c.j(0.55),A.q,1.3),q,B.a([new B.ac(0,A.G,A.bZ.j(0.4),A.ek,8)],p),D.anS,A.a6),q,q,q),A.cL,!0,q,q,q,q,q,q,q,q,q,q,q,g,q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,"Documents (Hati)",q,q),A.J)],u))
t=B.A(v,A.m,q,A.e,A.j,0,q,q)
w=r.c
w.toString
s=B.P(w).ax.a===A.I
w=B.m(20)
v=x.O
v=s?B.a([D.b6d,D.b6B],v):B.a([A.c,A.kh],v)
u=B.I(d.j(s?0.45:0.25),A.q,1.2)
return B.p(q,t,A.f,q,q,new B.o(q,q,u,w,B.a([new B.ac(0,A.G,d.j(s?0.18:0.1),A.cx,14)],p),new B.a8(A.ax,A.aC,A.x,v,q,q),A.n),q,q,q,q,A.bT,q,q,q)},
aLh(d,e,f,g){var w=this.fy
w===$&&B.c()
return B.c6(w,new C.eox(this,g,d,e,f),null)},
afF(d,e){return this.cjd(d,e)},
cjd(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$afF=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.aw()
q=new B.ar(new B.bb(e,A.b4,A.aN),r)
p=t.c
p.toString
w=3
return B.b(B.ca(null,null,!0,null,new C.esC(d,q),p,null,!0,!0,x.N),$async$afF)
case 3:s=g
q.U$=r
q.P$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$afF,v)},
Pv(d){var w=d.bS()
return""+B.bG(w)+"/"+B.bQ(w)+"/"+B.bz(w)}}
C.aeK.prototype={}
C.ayb.prototype={
R(){return new C.bbW(null,null)}}
C.bbW.prototype={
gcvj(){var w,v=this.a.c,u=v.f.bS(),t=""+B.bG(u)+"/"+B.bQ(u)+"/"+B.bz(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
a_(){var w,v=this,u=null
v.a1()
w=B.bj(u,A.pG,u,1,u,v)
w.fc(0,!0)
v.d!==$&&B.aP()
v.d=w
w=B.bj(u,D.bod,u,1,u,v)
w.cs(0)
v.e!==$&&B.aP()
v.e=w},
q(){var w=this.d
w===$&&B.c()
w.q()
w=this.e
w===$&&B.c()
w.q()
this.bsp()},
II(d){var w=0.12+d*0.09,v=A.k.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.ct.aw(0,new B.hN(w,v,A.ct).aw(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.av(new B.C(D.btE,B.c6(new B.h3(B.a([u,w],x.dS)),new C.d_E(this),v),v),v,v,v)}}
C.bc9.prototype={
B(d){var w=null,v=B.m(22),u=B.I(A.aK,A.q,1),t=x.p
return B.av(new B.C(D.btV,B.aG(!1,A.a1,!0,w,B.p(w,B.bw(B.m(22),B.v(B.a([new B.C(D.bt6,B.v(B.a([B.p(w,D.bJA,A.f,w,w,new B.o(A.ay.j(0.12),w,w,B.m(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aQ,D.fsD,A.S,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.f4_,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,D.bnh,B.A(B.a([B.E(B.bK(!1,D.fh8,w,w,!0,w,w,new C.d0_(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.bJ,w,w,w,w,w,A.n7,w,A.ob,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bm,w,w,w,48,w,w,w,w,w,1),B.E(B.bK(!1,D.fmp,w,w,!0,w,w,new C.d00(d),w,B.fv(w,w,w,w,w,w,w,w,w,w,w,A.ay,w,w,w,w,w,A.n7,w,A.ob,w,w,w,w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w)],t),A.m,w,A.e,A.Q,0,A.p),A.aq),A.f,w,A8.V1,new B.o(A.aB,w,u,v,D.cPw,w,A.n),w,w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w),w,w,w)}}
C.Jr.prototype={
R(){return new C.bbV()}}
C.bbV.prototype={
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
return B.dU(B.dc(B.aE(o,B.vi(B.di(o,B.A(B.a([r,A.av,new B.dq(1,A.cn,B.d(q,o,2,A.a2,o,o,o,B.l(o,o,l?A.f3:A.c,o,o,o,o,o,o,o,o,13,o,o,A.P,o,1.2,!0,o,o,o,o,o,o,o,o),A.L,o,o),o)],x.p),A.m,o,A.bb,A.Q,0,o,o),o,o,A.bc,new B.o(n,o,u,v,t,o,A.n),A.eE,o,o,o,A.nU,o,o,1/0),A.ct,A.jb,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.d_z(p,d),new C.d_A(p),new C.d_B(p),new C.d_C(p),o,o,o,!1,A.a8),k),new B.u(0,(1-k)*16))}}
C.Pb.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.m(16),s=B.m(16),r=B.m(14),q=B.I(A.c.j(0.5),A.q,1.2),p=x.p
return B.aG(!1,A.a1,!0,t,B.aL(!1,s,!0,new B.C(A.eP,B.A(B.a([B.p(v,B.X(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a8(A.ax,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eB,B.E(B.v(B.a([B.d(w.e,v,v,v,v,v,v,A.nt,v,v,v),A.bB,B.d(w.f,v,v,v,v,v,v,B.l(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.F,v,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.4),v,v,v,v)],p),A.m,v,A.e,A.j,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ag)}}
C.a__.prototype={
R(){return new C.aDI(D.dd,null,null)}}
C.aDI.prototype={
gYm(){var w,v=this,u=v.w
if(u===$){w=B.bj(null,D.bnO,null,1,null,v)
v.w!==$&&B.bL()
v.w=w
u=w}return u},
b4T(d){if(!this.a.c.ay)return
this.x=d
this.gYm().iw(0,0)},
a_(){var w,v=this
v.a1()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
C.av4(D.eTA)
C.i_O()
v.QU()},
q(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.gYm().q()
v=w.z
if(v!=null)v.a7(0)
C.av4(D.eTB)
C.i_R()
w.bux()},
cy4(){B.jh()
this.m(new C.evh())
var w=this.c.I(x.q).f
w.a47()
if($.bjH)w.S(D.eQs)},
QU(){var w,v=this,u=v.f
if(u!=null)u.a7(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cM(B.dC(0,0,0,0,0,A.o.D(C.h7F(u,w),1,120)),new C.ev7(v))},
cxK(){var w,v=this
v.m(new C.evg(v))
if(v.r)v.QU()
else{w=v.f
if(w!=null)w.a7(0)}},
gaTR(){var w=this.a.c.db
return(w==null?"":w).length!==0},
crU(){var w=this,v=w.f
if(v!=null)v.a7(0)
w.m(new C.ev8(w))
v=w.z
if(v!=null)v.a7(0)
if(w.a.c.ch&&w.r)w.z=B.cM(A.lc,new C.ev9(w))},
avn(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a7(0)
if(u.a.c.ch){u.m(new C.ev3(u))
u.QU()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaTR()){u.crU()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.ev4(u,A.o.F(w+1,s)))
u.b4T(w)
u.QU()}},
chS(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a7(0)
v.m(new C.ev5(v))
v.QU()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.ev6(v,w,t))
v.b4T(w)
v.QU()}},
cti(d){var w,v=this,u=v.e
if(u===D.cl){u=v.d
u===$&&B.c()
return new B.nb(d,new B.cx(u,x.ac))}w=v.ctj(u)
u=v.d
u===$&&B.c()
return B.qb(new B.nb(d,new B.cx(u,x.ac)),w,new C.eve(),A.bc,A.bc,new C.evf(v))},
ctj(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bo9
case 16:return A.kj
case 18:return A.n4
default:return A.n5}},
cth(d,e,f){var w,v,u,t=null,s=B.cH(A.ct,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.cZ(s,!1,e,t)
case 2:case 17:w=x.K
return B.jn(e,new B.bf(s,new B.bo(A.uk,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 3:w=x.K
return B.jn(e,new B.bf(s,new B.bo(A.RE,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 4:case 21:w=x.K
return B.jn(e,new B.bf(s,new B.bo(A.ig,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 5:w=x.K
return B.jn(e,new B.bf(s,new B.bo(A.uj,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 6:case 16:w=x.b
return B.ik(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bo(0.82,1,w),w.k("bf<bJ.T>")))
case 7:w=x.b
return B.ik(A.A,new B.cZ(s,!1,e,t),t,new B.bf(s,new B.bo(1.18,1,w),w.k("bf<bJ.T>")))
case 8:return B.c6(s,new C.eva(s),e)
case 9:return B.c6(s,new C.evb(s),e)
case 10:return B.c6(s,new C.evc(s),e)
case 11:return B.c6(s,new C.evd(s),e)
case 12:w=x.b
return new B.cZ(s,!1,B.ik(A.A,e,t,new B.bf(s,new B.bo(1.03,1,w),w.k("bf<bJ.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jv(B.jn(e,new B.bf(s,new B.bo(A.uk,A.J,v),v.k("bf<bJ.T>")),t,!0),A.r,new C.bqL(w,t))
case 15:w=x.K
return B.jn(e,new B.bf(s,new B.bo(A.RE,A.J,w),w.k("bf<bJ.T>")),t,!0)
case 19:w=B.dm()
w.mI((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.jH(v,u,v,1)
return B.fs(A.A,B.dc(e,s.gp(0)),t,w,!0)
case 20:return B.eG(A.A,(1-s.gp(0))*0.2,new B.cZ(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jv(new C.anI(B.c6(n.gYm(),new C.evi(n,v,w),m),m),A.r,m)}else{t=B.rr(new C.Io(w,!0,!1,m))
l=B.b0(w.e)
u=n.cti(B.ek(B.jv(t,A.r,m),l,!0))}l=B.m(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.h7F(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.oh,m,m,m),A.bp,D.bLQ],k),A.m,m,A.e,A.Q,0,m,m),A.f,m,m,new B.o(A.aX,m,m,l,m,m,A.n),m,m,m,m,A.fI,m,m,m)
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
l.push(B.bZ(0,new C.N6(new C.Ee(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.o7?0.5625:1.7777777777777777
l.push(B.av(new B.fG(r,B.jv(B.uh(A.af,u,!0,4,1,!0,!0,m),A.r,m),m),m,m,m))}if(!$.bjH){r=B.Hq(A.kT,new C.evj(d),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bn(!0,B.A(B.a([r,A.ab,B.Hq(B.X(n.r?Ak.y6:A.iV,m,m,m,m,m),n.gcxJ(),B.nw(m,A.aX,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.m,m,A.e,A.j,0,m,m),!0,!1,A.af,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.m(20)
k.push(B.ao(16,B.bn(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.ho,m,m,m),A.f,m,m,new B.o(A.aX,m,m,r,m,m,A.n),m,m,m,m,A.fI,m,m,m),!0,!1,A.af,!0,!0),m,m,m,16,m,m))}A.d.v(l,k)}l.push(B.ao(m,B.bn(!0,B.aE(A.c4,B.p(A.l5,$.bjH?A.bH:s,A.f,m,m,m,m,64,m,m,D.boV,m,m,150),A.y,!1,m,n.gcy3(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a8),!0,!1,A.af,!0,!0),m,m,m,0,0,m))
return B.c8(m,A.w,B.aE(m,new B.an(A.W,m,A.b_,A.r,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.evk(n,d),m,m,m,!1,A.a8),m,!1,!1,m,m)}}
C.Jy.prototype={
B(d){var w=null
return B.p(w,B.bn(!0,new B.C(E.ahB,this.c,w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_6,w,w,w,w,w,w,w,w)}}
C.bqL.prototype={
j0(d){return new B.a9(0,0,0+d.a*A.k.D(this.b,0,1),0+d.b)},
jK(d){return d.b!==this.b}}
C.bgO.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
A:{if("circle"===q){w=B.m(999)
break A}if("rounded"===q){w=B.m(18)
break A}if("arch"===q){w=D.aWU
break A}w=B.m(6)
break A}v=s.e
u=B.I(v?A.aE:A.K,A.q,2.5)
if(q==="circle")t=B.m(999)
else t=B.m(q==="rounded"?9:3)
w=B.di(r,B.av(B.p(r,r,A.f,r,r,new B.o(r,r,r,t,r,E.vN,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.bc,new B.o(s.f,r,u,w,r,r,A.n),A.hX,r,64,r,r,r,r,64)
return B.aE(r,new B.a7(78,r,B.v(B.a([w,A.an,B.d(s.d,r,1,A.a2,r,r,r,B.l(r,r,v?A.aE:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.m,r,A.e,A.j,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a8)}}
C.bgN.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.diD.h(0,p)
if(o==null)o=D.d5G
p=p==="none"
w=p?q:new B.a8(A.a3,A.a7,A.x,o,q,q)
p=p?A.cV.j(0.25):q
v=r.e
u=v?B.I(A.aE,A.q,2.5):q
t=r.r.j(0.15)
s=v?I.am0:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eo,q,q,52)
return B.aE(q,new B.a7(66,q,B.v(B.a([w,A.an,B.d(r.d,q,1,A.a2,q,q,q,B.l(q,q,v?A.aE:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.L,q,q)],x.p),A.m,q,A.e,A.j,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a8)}}
C.aJp.prototype={
aR(){this.aY()
this.aX()
this.dI()},
q(){var w=this,v=w.b_$
if(v!=null)v.a3(0,w.gdC())
w.b_$=null
w.a2()}}
C.aLr.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.bwu.prototype={}
C.aLs.prototype={
q(){var w=this,v=w.a8$
if(v!=null)v.a3(0,w.gbv())
w.a8$=null
w.a2()},
aR(){this.aY()
this.aX()
this.bw()}}
C.b0r.prototype={}
C.Vu.prototype={
R(){return new C.aDG()},
bfm(d){return this.e.$1(d)}}
C.aDG.prototype={
gb3d(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
ga9P(){var w,v
if(this.d==="all")return B.bm(this.a.d,!0,x.I)
w=this.gb3d()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaNd(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb3d()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb4s(){return A.d.cI(this.ga9P(),0,new C.euO())},
a_(){var w,v=this
v.a1()
w=v.a.d
if(w.length!==0)v.e=A.d.gL(w).a
v.Qv()},
Qv(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Qv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b11(s.c,s.f),$async$Qv)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.euK(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$Qv,v)},
IK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$IK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.ga9P()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.L)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fD4(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.p0(o,q.c,q.f),$async$IK)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.e8(new C.euN(t,p),!1,null,x.H)
w=4
return B.b(B.a5(o,!1).c8(q),$async$IK)
case 4:q=t.a
w=5
return B.b(B.p_(q.c,q.f),$async$IK)
case 5:w=6
return B.b(t.Qv(),$async$IK)
case 6:case 1:return B.h(u,v)}})
return B.i($async$IK,v)},
QS(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$QS=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hw(o,D.dVV,!0,"NgmySlidesTransferScan",x.N),$async$QS)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.euL(t))
w=4
return B.b(C.agU(s),$async$QS)
case 4:r=e
t.m(new C.euM(t))
o=J.a6(r)
if(o.gam(r)){o=t.c
if(o==null){w=1
break}o.I(x.q).f.S(D.ePl)
w=1
break}w=5
return B.b(t.a.bfm(r),$async$QS)
case 5:q=t.c
if(q==null){w=1
break}B.a5(q,!1).O(null)
q=t.c.I(x.q).f
p=o.gM(r)
o=o.gM(r)===1?"":"s"
q.S(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QS,v)},
IJ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$IJ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.ga9P()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.p0(s,r.c,r.f),$async$IJ)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fDj(null,A.d.gL(n),s,t.a.f)}else q=C.fDj(n,null,r.c,r.f)
if(n.length===1){s=A.d.gL(n).b
r=B.af("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aK(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.G8(q,"ngmy_slides_"+p,!1),$async$IJ)
case 4:o=e
s=t.a
w=5
return B.b(B.p_(s.c,s.f),$async$IJ)
case 5:w=6
return B.b(t.Qv(),$async$IJ)
case 6:s=t.c
if(s==null){w=1
break}s.I(x.q).f.S(B.b2(null,null,null,null,null,A.r,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$IJ,v)},
a2b(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a2b=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.euP(t))
w=3
return B.b(C.bBO(),$async$a2b)
case 3:s=e
t.m(new C.euQ(t))
if(s==null||J.cl(s)){w=1
break}w=4
return B.b(t.a.bfm(s),$async$a2b)
case 4:r=t.c
if(r==null){w=1
break}B.a5(r,!1).O(null)
r=t.c.I(x.q).f
q=J.a6(s)
p=q.gM(s)
q=q.gM(s)===1?"":"s"
r.S(B.b2(null,null,null,null,null,A.r,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a2b,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.db:A.bM,k=o.ga9P().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bS(A.A,0.5,A.x,n,0,B.a([A.bk.j(0.22),A.K],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aH(n,n,n,n,B.X(A.cB,m?A.ad:A.ak,n,n,n,n),n,n,n,new C.euT(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.l(n,n,m?A.c:A.M,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.L,n,n),1),A.zm],h),A.m,n,A.e,A.j,0,n,n)
w=B.m(24)
v=B.a([new B.ac(0,A.G,A.bk.j(0.35),A.eT,24)],x.V)
u=B.ao(n,B.X(A.pN,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.m(16)
s=B.a([u,B.A(B.a([B.p(n,D.bMl,A.f,n,n,new B.o(t,n,B.I(A.c.j(0.35),A.q,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eB,B.E(B.v(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.l(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.at,D.bxS],h),A.F,n,A.e,A.j,0,A.p),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hp(B.aE(A.c4,D.eNg,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gccD(),n,n,n,n,n,n,!1,A.a8),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.W,n,A.aa,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a0y,A.n),n,n,n,n,E.Yp,n,n,1/0),A.e1,o.awy(m,"What to transfer"),A.ac,B.A(B.a([B.E(o.aW4(A.pU,m,new C.euU(o),o.d==="one","Pick a single deck","One presentation"),1),A.av,B.E(o.aW4(D.bC6,m,new C.euV(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.m,n,A.e,A.j,0,n,n)],h)
if(o.d==="one"){v=B.a([A.d5,o.awy(m,"Choose presentation"),A.S],h)
u=o.a.d
if(u.length===0){u=m?A.aB:A.c
t=B.m(16)
s=B.I(m?A.bF:A.aL,A.q,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.l(n,n,m?A.az:A.ak,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bQ,n,n,n))}else A.d.v(v,new B.K(u,new C.euW(o,m),B.U(u).k("K<1,r>")))
A.d.v(w,v)}w.push(A.mF)
w.push(o.awy(m,"Transfer options"))
w.push(A.ac)
w.push(B.A(B.a([B.E(o.api(A.aS,k,!0,A.jj,m,o.r,o.gc6Q(),"Scan on another device","Show QR"),1),A.av,B.E(o.aLi(A.jP,!0,A.iW,m,o.gcoH(),"Receive presentations","Scan QR"),1)],h),A.m,n,A.e,A.j,0,n,n))
w.push(A.S)
w.push(B.A(B.a([B.E(o.bxv(A.aV,k,A.hA,m,o.r,o.gc6N(),"Download .json","Backup file"),1),A.av,B.E(o.aLi(A.aH,!0,Ay.yg,m,o.gcAr(),"Import backup","Upload file"),1)],h),A.m,n,A.e,A.j,0,n,n))
if(k){v=A.bk.j(m?0.12:0.08)
u=B.m(16)
t=B.I(A.bk.j(0.28),A.q,1)
s=B.X(A.li,A.bk.j(0.9),n,n,n,18)
r=o.gaNd()
q=o.gb4s()
p=o.gb4s()===1?"":"s"
A.d.v(w,B.a([A.by,B.p(n,B.A(B.a([s,A.av,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.l(n,n,m?A.ad:A.bv,n,n,n,n,n,n,n,n,12,n,n,A.a5,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.m,n,A.e,A.j,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bC,n,n,n)],h))}j=B.a([j,B.bn(!0,B.v(B.a([new B.C(Ag.Mc,i,n),B.E(B.cz(w,n,D.bsg,n,n,A.ah,!1),1)],h),A.m,n,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0)],h)
if(o.f)j.push(B.p(n,T.Vk,A.f,A.dB,n,n,n,n,n,n,n,n,n,n))
return B.c8(n,l,new B.an(A.W,n,A.aa,A.r,j,n),n,!1,!1,n,n)},
aeP(){var w=0,v=B.j(x.H),u=this,t,s
var $async$aeP=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.i69(s,t.d,t.e),$async$aeP)
case 2:return B.h(null,v)}})
return B.i($async$aeP,v)},
awy(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bk,w,w,B.m(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ab,B.d(e.toUpperCase(),w,w,w,w,w,w,B.l(w,w,d?A.az:A.ak,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,w,w)},
aW4(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.m(18),q=B.m(18),p=e?A.aB:A.c
if(g)w=A.bk
else w=e?A.bF:A.aL
w=B.I(w,A.q,g?2:1)
v=g?B.a([new B.ac(0,A.G,A.bk.j(0.2),A.cx,14)],x.V):s
u=A.bk.j(g?0.2:0.1)
t=B.m(12)
t=B.p(s,B.X(d,A.bk,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.co,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.l(s,s,e?A.c:A.M,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a1,!0,s,B.aL(!1,r,!0,B.eE(new B.C(A.bC,B.v(B.a([t,A.S,u,A.bB,B.d(h,s,s,s,s,s,s,B.l(s,s,e?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag)},
bI0(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.m(16),n=e?A.aB:A.c,m=B.m(16)
if(p)w=A.bk
else w=e?A.bF:A.aL
w=B.I(w,A.q,p?2:1)
v=B.p(q,D.bMw,A.f,q,q,new B.o(q,q,q,B.m(12),q,new B.a8(A.a3,A.a7,A.x,B.a([A.bk,A.bk.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.l(q,q,e?A.c:A.M,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.v(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.l(q,q,e?A.az:A.ak,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1)
u=p?A.ee:A.qZ
if(p)r=A.bk
else r=e?A.b3:A.dp
return new B.C(A.cC,B.aG(!1,A.a1,!0,q,B.aL(!1,o,!0,B.p(q,B.A(B.a([v,A.bf,t,B.X(u,r,q,q,q,q)],s),A.m,q,A.e,A.j,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bC,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.euJ(this,d),q,q,q,q,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q)},
api(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.m(18),o=B.m(18),n=h?A.aB:A.c
if(f)w=d.j(0.45)
else w=h?A.bF:A.aL
w=B.I(w,A.q,f?1.5:1)
v=d.j(0.14)
u=B.m(12)
t=x.p
u=B.a([B.p(s,B.X(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.qX,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.amy,A.f,s,s,D.aZT,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.l(s,s,h?A.c:A.M,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.dc(B.aG(!1,A.a1,!0,s,B.aL(!1,p,!0,B.eE(new B.C(E.Y5,B.v(B.a([new B.an(A.W,s,A.aa,A.f,u,s),A.ac,v,A.bB,B.d(k,s,s,s,s,s,s,B.l(s,s,h?A.az:A.ak,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.F,s,A.e,A.j,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.K,0,s,s,s,s,s,A.ag),r)},
aLi(d,e,f,g,h,i,j){return this.api(d,e,!1,f,g,!1,h,i,j)},
bxv(d,e,f,g,h,i,j,k){return this.api(d,e,!1,f,g,h,i,j,k)}}
C.Vv.prototype={
R(){return new C.bjG()}}
C.bjG.prototype={
a_(){this.a1()
this.adG()},
adG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$adG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fDj(null,A.d.gL(m),k,r.a.f):C.fDj(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gL(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.ku(A.d.gL(n).w))C.fD4(A.d.gL(r.a.d),D.d3G)
n=r.a
m=n.c
n=C.i37(n.d)
w=7
return B.b(C.fDi(p,C.i3c(r.a.d),n,m,q),$async$adG)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.euX(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.euY(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$adG,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.db:A.bM,g=k.d
g=g==null?j:A.a.a0(g,"NGMYSLIDESYNC2|")
w=A.d.cI(k.a.d,0,new C.euZ())
v=B.aH(j,j,j,j,B.X(A.eA,i?A.ad:A.ak,j,j,j,18),j,j,j,new C.ev_(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.l(j,j,i?A.c:A.M,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.L,j,j),1),A.zm],u),A.m,j,A.e,A.j,0,j,j)
t=B.m(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dl,A.L,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.v(B.a([r,A.N,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.l(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.P,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a0y,A.n),j,j,j,j,E.Yp,j,j,1/0)
q=B.m(24)
s=B.I(A.aS.j(0.35),A.q,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.a6T,A.L,j,j))
else if(k.d==null)r.push(D.e5n)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.m(16)
n=B.a([new B.ac(0,A.G,A.aE.j(0.35),A.cx,18)],x.V)
m=k.e
m.toString
A.d.v(p,B.a([D.fhB,A.an,B.aE(j,B.p(j,B.A(B.a([D.bO3,A.av,B.d(m,j,j,j,j,j,j,D.f4n,j,j,j)],u),A.m,j,A.e,A.Q,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.bSB,A.n),j,j,j,j,A_.ahn,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.ev0(k,d),j,j,j,j,j,j,!1,A.a8),A.N,D.flW,A.aA],u))}o=A.c.j(0.04)
n=B.m(22)
m=B.I(A.bF,A.q,1)
l=k.d
l.toString
p.push(B.p(j,B.pG(j,j,!1,l,j,!0,!0,j,!1,D.bjI),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.co,j,j,j))
A.d.v(r,p)}r.push(A.aA)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.hp,A.L,j,j))
return B.c8(j,h,B.bn(!0,B.v(B.a([new B.C(Ag.Mc,v,j),B.E(B.cd(B.v(B.a([t,A.aQ,B.p(j,B.v(r,A.m,j,A.e,A.j,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.bUw,A.n),j,j,j,j,A.tC,j,j,1/0)],u),A.m,j,A.e,A.j,0,A.p),A.r,j,A.y,j,E.ahG,j,j,A.ah),1)],u),A.m,j,A.e,A.j,0,A.p),!0,!1,A.af,!0,!0),j,!1,!1,j,j)}}
C.aDD.prototype={
R(){return new C.aDE(new B.ar(A.as,$.aw()),B.jM(!0,null,!0,!0,null,null,!1))}}
C.aDE.prototype={
a_(){var w=this
w.a1()
w.e.aN(0,new C.eor(w))
$.aW.x1$.push(new C.eos(w))},
q(){var w=this.d
w.U$=$.aw()
w.P$=0
this.e.q()
this.a2()},
aYG(){var w,v=this.c
v.toString
w=C.yo(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a5(v,!1).O(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aI(a2,A.eD,x.w).w,i=B.m(28),h=B.I(A.bk.j(0.4),A.q,1.2),g=x.V,f=B.a([new B.ac(0,A.G,A.bk.j(0.28),A.ui,36),D.aao],g),e=B.m(28),d=A.c.j(0.16),a0=B.m(16),a1=x.p
a0=B.p(k,B.v(B.a([B.p(k,D.bJD,A.f,k,k,new B.o(d,k,B.I(A.c.j(0.28),A.q,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.ac,D.feN,A.an,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.l(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a5,k,1.35,!0,k,k,k,k,k,k,k,k),A.L,k,k)],a1),A.m,k,A.e,A.j,0,A.p),A.f,k,k,D.b_j,k,k,k,k,A.xC,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.av)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.ge2()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.aB:A.M
o=new B.aT(14,14)
if(q)n=A.bk
else n=r?A.bk.j(0.55):A.aK
m=new B.ay(n,q?2:1.2,A.q,-1)
n=q?B.a([new B.ac(0,A.G,A.bk.j(0.28),A.J,12)],g):k
t.push(new B.bD(1,A.bh,B.di(A.A,new B.x(p,k,D.eZ2,k,k,k,k,k,k,k,k,k),k,k,A.bc,new B.o(s,k,new B.bO(m,m,m,m),new B.bp(o,o,o,o),n,k,A.n),A.hX,k,56,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(L.Iy)
A.d.v(d,t)}g=B.a([B.A(d,A.m,k,A.e,A.j,0,k,k),B.bZ(0,B.dc(B.aM(k,A.T,!0,k,!0,A.r,k,B.aN(),w,k,k,k,k,k,2,D.bQN,A.y,!0,k,!0,k,!1,v,A.ai,k,k,B.a([new B.u8(B.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.B9(5,k),new C.bu0()],x.aS),k,k,A.aOu,k,5,k,1,k,k,!1,"\u2022",k,new C.eon(l),k,new C.eoo(l),k,!1,k,k,!1,k,!0,k,A.a9,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a4,k,A.m_,k,k,k,k),0),0,0,0)],a1)
d=C.yo(w.a.a.toUpperCase())==null?k:l.gc6R()
return B.av(new B.C(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a1,!0,k,new B.cS(Ad.JY,B.p(k,B.bw(e,B.v(B.a([a0,new B.C(D.bsL,B.v(B.a([new B.an(A.W,k,A.aa,A.r,g,k),A.S,D.fdd,A.by,new B.a7(1/0,50,B.bH(D.ftt,d,B.bl(A.bk,A.bm,A.ak,k,A.c,k,k,k,new B.b7(B.m(16),A.Y),k,k,k)),k),A.an,B.bK(!1,A.nu,k,k,!0,k,k,new C.eop(a2),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.m,k,A.e,A.j,0,A.p),k)],a1),A.m,k,A.e,A.Q,0,A.p),A.aq),A.f,k,k,new B.o(A.db,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.K,0,k,k,k,k,k,A.ag),k),k,k,k)}}
C.bu0.prototype={
ow(d,e){var w=e.a.toUpperCase()
return e.cGE(B.h8(A.bw,w.length),w)}}
C.aqA.prototype={
R(){return new C.aDH(B.yZ(A.Lt,A.nB,A.u1))}}
C.aDH.prototype={
q(){this.d.q()
this.a2()},
aYF(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.iM(w,d)},
a9J(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9J=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.fLU(s),$async$a9J)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.aYF("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$a9J,v)},
c6P(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.L)(w),++u){t=C.i3a(w[u])
if(t!=null){this.aYF(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aH(s,s,s,s,A.vK,s,s,s,t.gbMa(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eC(B.a([r,B.aH(s,s,s,s,B.X(q?A.r1:Al.N8,s,s,s,s,s),s,s,s,new C.ev2(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.db,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.fuH,s,s,s,1,s,!0)
r=B.yY(t.d,A.bR,t.gc6O())
w=B.m(28)
w=B.av(B.p(s,s,A.f,s,s,new B.o(s,s,B.I(A.bk,A.q,3),w,B.a([new B.ac(2,A.G,A.bk.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.m(16)
return B.c8(p,A.w,new B.an(A.W,s,A.b_,A.r,B.a([r,w,B.ao(32,B.p(s,D.fiF,A.f,s,s,new B.o(v,s,B.I(A.bk.j(0.45),A.q,1),u,s,s,A.n),s,s,s,s,A.je,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.buc.prototype={
B(d){var w=null,v=B.m(24),u=B.I(A.aK,A.q,1)
return B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([B.p(w,D.bHO,A.f,w,w,D.b_2,w,56,w,w,w,w,w,56),A.aQ,D.fun,A.an,new B.kf(this.c,new C.f5D(),w,w,x.cI),A.aQ,new B.kf(this.d,new C.f5E(),w,w,x.cl),A.ac,D.fuk],x.p),A.m,w,A.e,A.Q,0,A.p),A.f,w,Ad.JY,new B.o(A.aB,w,u,v,w,w,A.n),w,w,w,K.Yw,D.btn,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)}}
C.a7i.prototype={
R(){return new C.bjp(A.bx)},
gdd(){return this.c}}
C.bjp.prototype={
a_(){var w=this
w.a1()
if(w.a.d)return
w.Zx()
w.d=B.dv(A.fT,new C.ecQ(w))},
q(){var w=this.d
if(w!=null)w.a7(0)
this.a2()},
Zx(){return this.cl3()},
cl3(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$Zx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.ecO(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.by(new B.S(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cdO(p.c),$async$Zx)
case 6:r=e
q.a=r==null?A.bx:r
case 4:if(t.c==null){w=1
break}t.m(new C.ecP(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$Zx,v)},
bO3(d){var w,v,u=d.a,t=A.o.an(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.an(u,6e7)%60
v=A.o.an(u,1e6)%60
if(t>0)return""+t+"h "+A.a.aT(A.o.u(w),2,"0")+"m "+A.a.aT(A.o.u(v),2,"0")+"s left"
return A.a.aT(A.o.u(w),2,"0")+":"+A.a.aT(A.o.u(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bH
w=s.e.a
v=A.o.an(w,6e7)<30&&A.o.an(w,36e8)<999?A.ay:A.bZ
w=v.j(0.14)
u=B.m(14)
t=B.I(v.j(0.55),A.q,1)
return B.p(r,B.A(B.a([B.X(A.FD,v,r,r,r,20),A.av,B.E(B.d("Marriage document session \xb7 "+s.bO3(s.e),r,r,r,r,r,r,B.l(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.m,r,A.e,A.j,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,W.ago,A.ix,r,r,1/0)}}
C.a8a.prototype={
nb(){var w,v,u,t=this
t.x_()
w=t.cx
v=t.c
w.bp3(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.pN(B.F(["/S",D.e92,"/URI",new B.ro(B.W2(w.as),A.ul,!0)],x.N,u),u))}}
C.a8b.prototype={
a4(){return"PdfAnnotFlags."+this.b}}
C.b24.prototype={
bwz(d,e,f,g,h,i,j,k,l,m){var w=B.et([D.e7l],x.di)
this.w!==$&&B.aP()
this.w=w},
gcJV(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.jL(w,new C.cg_(),B.a4(w).k("jL<co.E,H>")).fa(0,new C.cg0())},
aC1(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.h6(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.tl(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jb(d.a,d.b))
s.n(0,"/Border",B.tl(N.aog))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.fX(t.gcJV()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.pN(w,x.Y))}}
C.cg1.prototype={}
C.a2l.prototype={}
C.ahM.prototype={}
C.aQu.prototype={
fY(d){var w,v,u,t,s,r,q=this,p=null
q.ld(d)
q.LE(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.beJ(w)
u=x.N
t=x.Y
s=new C.cg1(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bwz(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.pN(B.F(["/Type",D.e90],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.a8a(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.J(0,r)
v.dx.push(r)}}
C.aw2.prototype={}
C.aRZ.prototype={
fY(d){var w,v,u,t,s=this
s.ld(d)
w=s.b
if(w!=null){v=B.dm()
u=s.a
v.e4(u.a,u.b,0,1)
u=d.b
u.i3()
t=s.a
t.toString
u.KN(t)
u.S6(0)
u.oR(0,v)
w.fY(d)
u.ne(0)}}}
var z=a.updateTypes(["az<~>()","~(lD)","R(hZ)","~()","R(eJ)","R(of)","R(lD)","~(hZ)","R(eJ,eJ)","Jy(Y)","R(nG)","R(la)","az<R>()","H(H,hZ)","a3<n,@>(hZ)","ai<zh>()","n(nG)","R(a7z)","n(lD)","n(vQ)","R(En)","H(hZ,hZ)","n(eJ)","r(eJ)","cL(eJ)","r(hx)","~(hx)","eJ(uy,N,N,N,N,H{fx:n,key:n,rotation:N})","eJ(n,N,H)","H(of,of)","R(zh)","R(n,ai<zh>)","a3<n,@>(of)","nG()","Y6(Y)","eJ(n,N,N,N,N,N{align:pT,anim:hx,bullets:R,color:H?,delay:H,fx:n,key:n,style:Hl,weight:qg})","a0m(Y)","eJ(n,N,N,N,N{anim:hx,delay:H,fx:n,key:n})","az<~>(of)","R(mo)","Y4(Y)","a_U(Y)","a_T(Y)","P1(Y)","Zf(Y)","eJ(uy,N,N,N,N,H,n,n{anim:hx,delay:H,rotation:N,stroke:H,strokeWidth:N})","eJ(n,N,N,N,N,N,n,n,H)","eJ(N,N,n,H{size:N})","r(rc,N,N)","la()","of(a3<@,@>)","~(uo)","En()","fe(eJ)","r(iX)","YO(Y)","~(Ee)","Z8(Y)","H(eJ,eJ)","eJ(eJ)","a3<n,@>(eJ)","eJ(a3<@,@>)","lD(lD)","a3<n,@>(lD)","lD(a3<@,@>)","R(jC)","jC()","n(hZ)","~(ai<of>)","S(ai<hZ>)","S(hZ)","ai<hZ>(n?)","ace(Y,H)","~(R(eJ,eJ))","acT(Y)","aeA(Y,H)","w(lD,R)","Vf(Y)","acW(Y)","Vi(Y)","~(ms)","hZ(hZ)","N(eJ)","a_n(Y)","a__(Y)","hZ()","ai<EJ>()","az<~>(ai<hZ>)","r(bv<H,hZ>)","C(jC)","C(En)","az<~>(hx,~())","r(ai<hx>,hx?,~(hx),w)","R(m1)","ai<jm<ms>>(Y)","jm<ms>(ms)","hZ(a3<@,@>)","Vu(Y)","eJ(n,N,N,N,N,N,H{align:pT,style:Hl,weight:qg})","Vv(Y)","r(hZ)","~(lV)","Io(Y,lD,r?)","H(a8b)","az<ai<a3<n,@>>?>()","n(n)","az<zf>({paper:n?,photo:dD?,request:n,template!ld})","az<a7r>({doc!zf,history:ai<+(n,n)>,instruction!n,photo:dD?,template!ld})","acQ(Y)"])
C.cDW.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:73}
C.cDX.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:74}
C.cDY.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.gajp(s):16;--w.c}w.b=A.o.dU(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mo(v,t)
w.b=v-A.o.dU(q,t)
w.a=t
return q},
$S:74}
C.cDZ.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bNW.prototype={
$1(d){return J.eZ(A.dD.gaM(d),d.byteOffset,d.byteLength)},
$S:1666}
C.fq1.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.iH(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.iH(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.iH(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.iH(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1667}
C.bYx.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:27}
C.bYy.prototype={
$2(d,e){var w,v=J.q(e,"savedAt")
v=J.k(v==null?"":v)
w=J.q(d,"savedAt")
return A.a.aL(v,J.k(w==null?"":w))},
$S:43}
C.bYA.prototype={
$1(d){var w=J.q(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fFY.prototype={
$1(d){return new C.a0m(this.a,this.b,C.i42(),null)},
$S:z+36}
C.f45.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.f49.prototype={
$1(d){return this.a.d.t(0,d.a)},
$S:z+2}
C.f4a.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f4b.prototype={
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
C.f46.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.f47.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.f48.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.f40.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hD,w,w,w)
return B.ej(B.a([B.bK(!1,D.fh4,w,w,!0,w,w,new C.f3Z(d),w,w),B.bK(!1,D.fg9,w,w,!0,w,w,new C.f4_(d),w,w)],x.p),w,w,D.X6,v,w,w,w,w,D.fuY,w)},
$S:19}
C.f3Z.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.f4_.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.f41.prototype={
$0(){return this.a.r=!0},
$S:0}
C.f42.prototype={
$0(){return this.a.r=!1},
$S:0}
C.f4f.prototype={
$0(){var w=this.a
return w.m(new C.f4e(w,this.b))},
$S:0}
C.f4e.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f44.prototype={
$0(){var w=this.a
return w.m(new C.f43(w,this.b,this.c))},
$S:0}
C.f43.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.J(0,v)},
$S:0}
C.f4c.prototype={
$0(){return this.a.a0E(this.b)},
$S:0}
C.f4d.prototype={
$0(){return this.a.OJ(0,this.b)},
$S:0}
C.f4i.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.f4j.prototype={
$0(){var w=this.a
return w.m(new C.f4h(w,this.b))},
$S:0}
C.f4h.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a9(0)
else{w=w.a.c
v.v(0,new B.K(w,new C.f4g(),B.U(w).k("K<1,n>")))}},
$S:0}
C.f4g.prototype={
$1(d){return d.a},
$S:z+67}
C.fbk.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.h4U(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cA)
t=t.h(0,"updatedAt")
u=B.bi(J.k(t==null?"":t))
return new C.of(s,v,u==null?new B.S(Date.now(),0,!1):u)},
$S:z+50}
C.fbl.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fsE.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.L)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbo())q=n===o.gbo()&&p.b>o.gcz()}if(q)v.n(0,s,t)}},
$S:z+68}
C.fsC.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+5}
C.fsD.prototype={
$2(d,e){return e.c.aL(0,d.c)},
$S:z+29}
C.fFs.prototype={
$1(d){return d.ag()},
$S:z+32}
C.fpI.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.fGj.prototype={
$1(d){return new C.Y6(this.a,null)},
$S:z+34}
C.cFh.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+39}
C.cFj.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cFm.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFn.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cFl())},
$S:11}
C.cFl.prototype={
$0(){},
$S:0}
C.cFo.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a1l(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bd(s,new C.cFk(r))
if(p<0)q.ck(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.ah2(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:330}
C.cFk.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cFp.prototype={
$1(d){},
$S:31}
C.cFi.prototype={
$1(d){return new C.Y4(this.b,this.a.gcuF(),null)},
$S:z+40}
C.cFq.prototype={
$1(d){return D.fMV},
$S:z+43}
C.cFd.prototype={
$1(d){var w=null,v=B.m(24),u=B.I(D.WN,A.q,1),t=x.p
return B.av(B.aG(!1,A.a1,!0,w,B.p(w,B.v(B.a([new B.C(D.bt9,B.v(B.a([B.p(w,D.bGQ,A.f,w,w,new B.o(A.ay.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aQ,D.ffd,A.S,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.f3p,A.L,w,w)],t),A.m,w,A.e,A.j,0,A.p),w),A.e1,new B.C(A.pJ,B.A(B.a([B.E(B.dT(D.flY,new C.cFb(d),B.dg(w,w,w,w,w,w,w,w,w,E.mZ,w,w,A.ck,w,new B.b7(B.m(14),A.Y),D.aXj,w,w,w,w)),1),A.av,B.E(B.bH(D.frN,new C.cFc(d),B.bl(A.bI,w,w,w,w,w,A.ck,w,new B.b7(B.m(14),A.Y),w,w,w)),1)],t),A.m,w,A.e,A.j,0,w,w),w)],t),A.m,w,A.e,A.Q,0,A.p),A.f,w,A.wG,new B.o(D.ac7,w,u,v,D.cTX,w,A.n),w,w,w,K.Yw,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag),w,w,w)},
$S:1668}
C.cFb.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.cFc.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.cFe.prototype={
$0(){return J.no(this.a.d,new C.cFa(this.b))},
$S:0}
C.cFa.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cF9.prototype={
$1(d){var w,v,u,t=null,s=B.m(28),r=B.I(D.WN,A.q,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.bLJ,A.f,t,t,new B.o(t,t,t,B.m(14),t,D.anN,A.n),t,44,t,t,t,t,t,44),A.bf,B.E(B.v(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aQ7,t,t,t),A.bB,D.frJ],q),A.F,t,A.e,A.j,0,A.p),1)],q),A.m,t,A.e,A.j,0,t,t),A.aA],q)
for(w=0;w<2;++w){v={}
u=D.ddU[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.awX(u[1],u[2],u[3],new C.cF7(v,d),!1,t))}q.push(A.an)
q.push(D.bnk)
q.push(A.an)
q.push(new C.awX(A.e5,"Delete book","Remove it from this device",new C.cF8(d),!0,t))
return B.bn(!0,B.p(t,B.v(q,A.F,t,A.e,A.Q,0,A.p),A.f,t,t,new B.o(D.ac7,t,r,s,t,t,A.n),t,t,t,A.tx,Ao.LY,t,t,t),!0,!1,A.af,!0,!0)},
$S:26}
C.cF7.prototype={
$0(){var w=this.a.a
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.cF8.prototype={
$0(){B.a5(this.a,!1).O("delete")
return null},
$S:0}
C.cFg.prototype={
$3(d,e,f){var w=null,v=B.m(4),u=B.a([new B.ac(0,A.G,A.w.j(0.45),A.aG1,12)],x.V)
return B.dU(B.eG(A.A,e,B.p(w,B.bw(B.m(4),new B.a7(62,95.81818181818181,B.f4(A.A,F.anz(d),A.f,A.du),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.u(f,0))},
$S:z+48}
C.cFf.prototype={
$0(){return this.a.c1y()},
$S:0}
C.cF6.prototype={
$0(){return this.a.aXd(0,this.b)},
$S:0}
C.cF5.prototype={
$0(){return this.a.CY(this.b)},
$S:0}
C.cF4.prototype={
$0(){return this.a.CY(this.b)},
$S:0}
C.cFr.prototype={
$2(d,e){var w=this.a
return w.bB1(J.q(w.d,e))},
$S:40}
C.cEy.prototype={
$0(){var w=this.a
if(w.c!=null)w.Aw()},
$S:0}
C.cEx.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b_7("Page "+(v.length+1),"",""))},
$S:0}
C.cEA.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cEI.prototype={
$0(){},
$S:0}
C.cEJ.prototype={
$1(d){var w=this.a,v=w.a,u=$.aw()
v.U$=u
v.P$=0
w=w.b
w.U$=u
w.P$=0
return null},
$S:9}
C.cEB.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cT.gcw().aJ(this.c)},
$S:0}
C.cEz.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cED.prototype={
$0(){return this.a.Q2(this.b)},
$S:0}
C.cEE.prototype={
$0(){return this.a.Q2(this.b)},
$S:0}
C.cEF.prototype={
$0(){var w=this.a
w.m(new C.cEC(this.b))
w.DN()},
$S:0}
C.cEC.prototype={
$0(){return this.a.c=""},
$S:0}
C.cEH.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cEG(w,d))
w.DN()},
$S:z+51}
C.cEG.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cEO.prototype={
$2(d,e){if(d)this.a.Aw()},
$S:120}
C.cEK.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Aw(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.I(x.q).f.S(D.eRR)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cEL.prototype={
$0(){return this.a.aWb(this.b,-1)},
$S:0}
C.cEM.prototype={
$0(){return this.a.aWb(this.b,1)},
$S:0}
C.cEN.prototype={
$0(){return this.a.c2N(0,this.b)},
$S:0}
C.fxa.prototype={
$1(d){return C.heS()},
$S:44}
C.fxb.prototype={
$1(d){return null},
$S:31}
C.ffJ.prototype={
$1(d){return null},
$S:31}
C.fy9.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:323}
C.fy8.prototype={
$2(d,e){return A.o.aL(e.length,d.length)},
$S:245}
C.fyf.prototype={
$1(d){var w=this.a
return C.fYp(d)===w||C.hjp(d)===w},
$S:z+4}
C.feM.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:78}
C.c86.prototype={
$1(d){return d.length!==0},
$S:3}
C.fx8.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fx9.prototype={
$1(d){return C.fzT(d)&&A.a.t(d.db,"rais")},
$S:z+4}
C.fs_.prototype={
$1(d){var w=null
return B.bn(!0,new B.C(E.xB,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fmy,A.N,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.Ge,D.fgL,new C.frY(d),B.bl(A.bZ,w,w,w,A.w,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.vJ,D.fnM,new C.frZ(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.frY.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.frZ.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fs0.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,D.fd5,w,w,!0,w,w,new C.frW(d),w,w),B.bH(D.fu0,new C.frX(d),w)],x.p),w,w,w,D.fvS,w,w,w,w,D.fd_,w)},
$S:19}
C.frW.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.frX.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.e7E.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.e7C.prototype={
$0(){return this.a.e=!0},
$S:0}
C.e7D.prototype={
$0(){return this.a.f=!0},
$S:0}
C.e7F.prototype={
$0(){return this.a.r=!1},
$S:0}
C.e7G.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fye.prototype={
$1(d){return A.a.aT(A.o.u(d),2,"0")},
$S:78}
C.fya.prototype={
$2$h$w(d,e){var w=null
return new B.bI(A.a3,w,w,B.Dy(A.A,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.m(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1669}
C.fyc.prototype={
$1(d){var w=null,v=B.m(3)
return B.p(A.A,B.d(d,w,w,w,w,w,w,D.f4A,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:191}
C.fyd.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dU(B.p(w,w,A.f,w,w,new B.o(w,w,B.I(A.hV,A.q,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.u(-d*0.38,0))],x.p),A.m,w,A.bb,A.j,0,w,w)},
$0(){return this.$1$size(18)},
$S:1670}
C.fyb.prototype={
$2$female$size(d,e){var w=null,v=d?D.adX:this.a,u=B.I(A.hV,A.q,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.A,w,A.aa,A.r,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.m(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.acl,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1671}
C.fJL.prototype={
$1(d){return new C.acQ(this.a,this.b,null)},
$S:z+108}
C.dXw.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bkb:A.KY,q=B.I(D.j7.j(0.25),A.q,1),p=B.av(B.p(t,t,A.f,t,t,new B.o(A.bZ.j(0.45),t,t,B.m(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.m(15)
o=B.p(t,D.amx,A.f,t,t,new B.o(t,t,B.I(A.c.j(0.5),A.q,1.2),o,B.a([new B.ac(0,A.G,D.j7.j(0.35),A.ek,10)],x.V),D.bV7,A.n),t,t,t,t,A.xt,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.v(B.a([new B.C(H.Yl,B.v(B.a([p,A.aA,B.A(B.a([o,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.l(t,t,s?A.c:D.j7,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bB,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.f3S,t,t,t)],u),A.F,t,A.e,A.j,0,A.p),1)],u),A.m,t,A.e,A.j,0,t,t)],u),A.m,t,A.e,A.j,0,A.p),t),B.E(B.ie(!0,t,e,A.y,D.aNw,new C.dXv(w,this.c),v,D.ahi,t,A.ah,!1),1)],u),A.m,t,A.e,A.j,0,A.p),A.f,t,t,new B.o(r,t,q,A.m5,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:114}
C.dXv.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ace(w,new C.dXu(this.b,w),null)},
$S:z+72}
C.dXu.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fs3.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fs4.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xB,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fpT,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.Ge,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fs1(d),B.bl(D.j7,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TC,new C.fs2(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fs1.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fs2.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fs7.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fs8.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xB,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fe3,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.Ge,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fs5(d),B.bl(D.j7,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TC,new C.fs6(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fs5.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fs6.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fsb.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fsc.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xB,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fko,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.Ge,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fs9(d),B.bl(D.j7,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TC,new C.fsa(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fs9.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fsa.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.fLd.prototype={
$1(d){return D.fQH},
$S:z+74}
C.ecT.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.bc2:A.KY,s=B.I(A.aw.j(0.25),A.q,1),r=B.av(B.p(v,v,A.f,v,v,new B.o(A.aw.j(0.45),v,v,B.m(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.m(15)
q=B.p(v,D.bO_,A.f,v,v,new B.o(v,v,B.I(A.c.j(0.5),A.q,1.2),q,B.a([new B.ac(0,A.G,A.bZ.j(0.35),A.ek,10)],x.V),D.anS,A.n),v,v,v,v,A.xt,v,v,v)
w=x.p
return B.p(v,B.v(B.a([new B.C(H.Yl,B.v(B.a([r,A.aA,B.A(B.a([q,A.bf,B.E(B.v(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.l(v,v,u?A.c:Z.KV,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bB,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.f1m,v,v,v)],w),A.F,v,A.e,A.j,0,A.p),1)],w),A.m,v,A.e,A.j,0,v,v)],w),A.m,v,A.e,A.j,0,A.p),v),B.E(B.ie(!0,v,e,A.y,D.aNw,new C.ecS(this.b),19,D.ahi,v,A.ah,!1),1)],w),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.m5,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.ecS.prototype={
$2(d,e){var w=D.Qj[e]
return new C.aeA(w,new C.ecR(this.a,w),null)},
$S:z+75}
C.ecR.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.fzX.prototype={
$0(){return B.fXo(C.hSB(this.a))},
$S:289}
C.fzW.prototype={
$0(){var w=C.fYH(this.a)
return"data:image/png;base64,"+A.cT.gcw().aJ(w)},
$S:22}
C.fcS.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.jc(d,e),new B.jc(w,e+v),new B.jc(d+f*14,e),new B.jc(w,e-v)],x.J)
B.a1i(this.a,C.fy(4291404327),v)},
$S:702}
C.fLo.prototype={
$1(d){return new C.Vf(this.a,null)},
$S:z+77}
C.ega.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eg9())},
$S:29}
C.eg9.prototype={
$0(){},
$S:0}
C.egb.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eg8(w,d))},
$S:1673}
C.eg8.prototype={
$0(){return this.a.x=J.eT(A.dD.gaM(this.b))},
$S:0}
C.egc.prototype={
$1(d){},
$S:31}
C.efN.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.efJ.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.efU.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.efV.prototype={
$0(){var w=this.a
A.d.a9(w.ay)
w.z=this.b
w=w.ax
A.d.a9(w)
w.push(D.eib)},
$S:0}
C.efW.prototype={
$0(){return this.a.as=!1},
$S:0}
C.efP.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bO(0,A.c5)},
$S:0}
C.efQ.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.efR.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.t(this.b)))},
$S:0}
C.efS.prototype={
$0(){return this.a.as=!1},
$S:0}
C.efT.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd_(v).Q
v.toString
w.m8(v,A.dU,A.ia)}},
$S:9}
C.efO.prototype={
$0(){var w=this.a,v=w.z,u=C.fAA(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cFM(C.fAA(t))},
$S:0}
C.efL.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.efM.prototype={
$0(){return this.a.as=!1},
$S:0}
C.eg1.prototype={
$0(){return B.a5(this.a,!1).lP()},
$S:0}
C.eg2.prototype={
$0(){var w=this.a
return w.m(new C.eg0(w))},
$S:0}
C.eg0.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.eg3.prototype={
$0(){var w=this.a
return w.m(new C.eg_(w,this.b))},
$S:0}
C.eg_.prototype={
$0(){var w=this.b.b
this.a.e.saV(0,w)
return w},
$S:0}
C.eg4.prototype={
$1(d){var w=this.a
return w.m(new C.efZ(w))},
$S:8}
C.efZ.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.eg5.prototype={
$1(d){var w=this.a
return w.m(new C.efY(w))},
$S:8}
C.efY.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.eg6.prototype={
$0(){var w=this.a
return w.m(new C.efX(w,this.b))},
$S:0}
C.efX.prototype={
$0(){var w=this.b
this.a.f.saV(0,w)
return w},
$S:0}
C.eg7.prototype={
$1(d){return this.a.Zj()},
$S:2}
C.efK.prototype={
$0(){return this.a.c66(this.b)},
$S:0}
C.cbO.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:274}
C.cbM.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.cbN.prototype={
$1(d){return d.length!==0},
$S:3}
C.fzx.prototype={
bjO(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bNV(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.L)(e),++t){s=e[t]
r.cCh($.qN().jw(0,"assets/news_fonts/"+s))}w=2
return B.b(r.mE(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjO(d,e)},
$S:1674}
C.fxP.prototype={
$1(d){return d.length!==0},
$S:3}
C.fxR.prototype={
$1(d){var w=this.a.a
w=A.d.aI(A.d.dq(this.b,w,w+d)," ")
w=B.aK(w," \n\n ","\n\n")
w=B.aK(w," \n\n","\n\n")
return B.aK(w,"\n\n ","\n\n")},
$S:78}
C.fxQ.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.i1(t,t,t,t,B.dn(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.qg,A.cg,t,A.eh,A.ce)
v=this.a
w.BE(v.b)
u=w.b.a.c
return u.gbc(u)<=v.a},
$S:32}
C.fct.prototype={
$1(d){var w=A.a.fD(d,B.af("\\s+",!0,!1,!1,!1))
return new B.a2(w,new C.fcu(),B.U(w).k("a2<1>")).gM(0)},
$S:236}
C.fcu.prototype={
$1(d){return d.length!==0},
$S:3}
C.fcr.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:220}
C.fcs.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:220}
C.cbP.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gazn()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.fYo(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fVh(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aI(n.gcef(),"\n\n")
d=B.i1(a6,a6,a6,a6,B.dn(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.adv(k,q,1.28),j),A.qg,A.cg,a6,A.eh,A.ce)
d.BE(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gbc(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b0(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.fYo(i,new B.G(!0,h,a6,k,a6,a6,q,A.cN,A.bl,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.fVh(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.adv(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.C(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b0(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.bD(1,A.bh,new B.x(o.length>a4?o[a4]:"",a6,a3,a6,A.qg,a6,a6,a6,a6,a6,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.azm(s,j))
i.push(new B.a7(s,a6,B.v(h,A.F,a6,A.e,A.j,0,A.p),a6))
A.d.v(m,i)}return B.A(m,A.F,a6,A.e,A.j,0,a6,a6)},
$S:348}
C.cbQ.prototype={
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
n=o.gazn()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b0(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.fYo(f,new B.G(!0,e,a5,i,a5,a5,h,A.cN,A.bl,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.fVh(g.length===0?B.a([a6],n):g,l))break}a1=o.adv(i,h,1.28)
a2=new C.cbR(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.Ix,new B.a7(v,a5,a4.f,a5),A.Ix,a2.$2(l[1],u)],n),A.F,a5,A.e,A.j,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.C(D.bvs,B.p(a5,a5,A.f,B.b0(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.bD(1,A.bh,new B.x(l[2+a3],a5,a1,a5,A.qg,a5,a5,a5,a5,a5,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.azm(r,g))
f.push(new B.a7(r,a5,B.v(e,A.F,a5,A.e,A.j,0,A.p),a5))
A.d.v(k,f)}return B.v(B.a([new B.a7(a5,q,v,a5),A.ac,B.E(B.A(k,A.F,a5,A.e,A.j,0,a5,a5),1)],n),A.m,a5,A.e,A.j,0,A.p)},
$S:151}
C.cbR.prototype={
$2(d,e){var w=null
return new B.a7(e,w,B.d(d,w,w,w,w,w,w,this.a,A.qg,w,w),w)},
$S:1675}
C.fLr.prototype={
$1(d){return new C.Vi(this.a,this.b,null)},
$S:z+79}
C.ehl.prototype={
$1(d){return d.lY()},
$S:1676}
C.ehm.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.ehk(w,d))},
$S:1677}
C.ehk.prototype={
$0(){var w=this.b
return this.a.d=w.gfp(w)},
$S:0}
C.eh8.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eh9.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ehf.prototype={
$0(){return B.a5(this.a,!1).eJ()},
$S:0}
C.ehg.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.I(A.bA,A.q,2.5)
return B.aE(w,B.p(w,B.b3(w,w,w,new C.bb8(u,v.gawr(),w),A.f1),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.ehd(v),new C.ehe(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a8)},
$S:35}
C.ehd.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:246}
C.ehe.prototype={
$1(d){var w=this.a
w.m(new C.eha(w,d,this.b,this.c))},
$S:217}
C.eha.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.k.D(s.x*r.d,1,6)
w=s.gawr()
r=r.a
v=t.c
u=t.d
s.r=A.k.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.k.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.ehh.prototype={
$1(d){var w=this.a
return w.m(new C.ehc(w,this.b))},
$S:8}
C.ehc.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ehi.prototype={
$1(d){var w=this.a
return w.m(new C.ehb(w,d))},
$S:6}
C.ehb.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.ehj.prototype={
$0(){return B.a5(this.b,!1).O(this.a.a.c)},
$S:0}
C.fLH.prototype={
$1(d){return D.fTu},
$S:z+83}
C.eQH.prototype={
$1(d){return this.a.Y0()},
$S:9}
C.ePz.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cT.gcw().aJ(v)},
$S:0}
C.ePX.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.eQ6.prototype={
$1(d){return d>=this.a.length},
$S:32}
C.ePi.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePj.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ePg.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.ePh.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.ePQ.prototype={
$2(d,e){var w,v,u=null,t=e.d,s=this.a,r=new C.ePR(s,this.b,t,e.b),q=r.$1(!0),p=s.y2
p=B.a([B.jv(B.rr(p>0.2?C.fQ2(q,B.a4D(p,p,A.x)):q),A.r,u)],x.p)
w=s.bh
if(w>0.02){v=B.a4D(12,12,A.x)
p.push(B.jv(B.dc(B.rr(C.fQ2(r.$1(!0),v)),w*0.75),A.r,u))}r=s.b3
if(r!=null&&s.b2>0)p.push(B.ek(u,B.b0(r).j(s.b2),!0))
r=s.be
if(r!=null&&s.bM>0){r=B.b0(r).j(s.bM)
w=s.be
w.toString
p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bS(D.aVC,1.15,A.x,u,0,B.a([r,B.b0(w).j(0)],x.O),u,u),A.n),A.bd))}r=s.aE
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bS(D.aVn,0.8,A.x,u,0,B.a([A.c.j(r*0.55),A.c.j(0)],x.O),u,u),A.n),A.bd))
r=s.aP
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b5,A.x,B.a([A.w.j(r),A.K,A.K,A.w.j(s.aP)],x.O),D.cSC,u),A.n),A.bd))
if(s.aH>0){r=s.k1
p.push(B.ao(u,B.c_(u,new B.o(u,u,u,u,u,new B.a8(A.b0,A.b5,A.x,B.a([A.w.j(0),A.w.j(s.aH),A.w.j(s.aH),A.w.j(0)],x.O),D.d27,u),A.n),A.bd),0.48*t,u,0,0,(r-0.06)*t,u))}r=s.Z
if(r>0)p.push(B.ek(u,A.w.j(r),!0))
r=s.b6
if(r>0)p.push(B.c_(u,new B.o(u,u,u,u,u,new B.bS(A.A,0.95,A.x,u,0,B.a([A.K,A.w.j(r)],x.O),D.d_m,u),A.n),A.bd))
s=s.az
if(s>0)p.push(B.b3(u,u,u,new C.beH(s,u),A.au))
return new B.an(A.W,u,A.b_,A.r,p,u)},
$S:64}
C.ePR.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fL(r.b,A.A,q,q,A.cm,A.bR,!0,q,!1,q,q),o=r.a,n=o.aVO(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c7,l=m*3.141592653589793/180
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
return B.dU(B.eb(A.A,B.eG(A.A,l,B.fs(A.A,new B.D7(new B.yE(q,q,n,A.Ac),p,q),q,B.vD(s,o.cX?-1:1,1),!0),q),v*w,q,q),new B.u(-m*r.d*u/2,-t*r.c*u/2))},
$S:605}
C.eQ2.prototype={
$0(){return this.a.m(new C.eQ1(this.b,this.c))},
$S:0}
C.eQ1.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQ3.prototype={
$1(d){return this.a.m(new C.eQ0(this.b,d))},
$S:6}
C.eQ0.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eQ5.prototype={
$0(){return this.a.m(new C.eQ4(this.b,this.c))},
$S:0}
C.eQ4.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eP8.prototype={
$1(d){return d.c===this.a.x},
$S:z+93}
C.eP9.prototype={
$1(d){var w=this.a
return w.m(w.gcw3())},
$S:2}
C.ePa.prototype={
$1(d){return this.a.m(new C.eP7())},
$S:2}
C.eP7.prototype={
$0(){},
$S:0}
C.ePb.prototype={
$0(){var w=this.a
return w.m(new C.eP6(w,this.b))},
$S:0}
C.eP6.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.ePd.prototype={
$2(d,e){return A.av},
$S:36}
C.ePc.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.m(14),r=B.a([B.b0(v.e),B.b0(v.f)],x.O),q=t?A.c:A.bF
q=B.I(q,A.q,t?2.5:1)
r=B.di(w,B.av(B.d("\u201c",w,w,w,w,w,w,B.l(w,w,B.b0(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.bc,new B.o(w,w,q,s,w,new B.a8(A.b0,A.b5,A.x,r,w,w),A.n),A.hX,w,94,w,w,w,w,70)
return B.aE(w,new B.a7(70,w,B.v(B.a([r,A.h_,B.d(v.b,w,1,A.a2,w,w,w,B.l(w,w,t?A.c:A.az,w,w,w,w,w,w,w,w,10.5,w,w,A.P,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.m,w,A.e,A.j,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eP5(u,v),w,w,w,w,w,w,!1,A.a8)},
$S:76}
C.eP5.prototype={
$0(){var w=this.a
return w.m(new C.eP2(w,this.b))},
$S:0}
C.eP2.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.ePe.prototype={
$1(d){var w=this.a
return w.m(new C.eP4(w,d))},
$S:8}
C.eP4.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.ePf.prototype={
$1(d){var w=this.a
return w.m(new C.eP3(w,d))},
$S:8}
C.eP3.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.eQw.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gL(this.b)]},
$S:32}
C.eQD.prototype={
$1(d){var w=this.a
return w.m(new C.eQE(w,d))},
$S:28}
C.eQE.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.ec(v,v.r,B.a4(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.eQF.prototype={
$1(d){var w
A:{if(1===d){w=20
break A}if(2===d){w=28
break A}if(-1===d){w=11
break A}w=15
break A}return w},
$S:256}
C.eQx.prototype={
$0(){var w=this.a
return w.m(new C.eQv(w,this.b))},
$S:0}
C.eQv.prototype={
$0(){var w=this.a.dx,v=this.b
return w.t(0,v)?w.W(0,v):w.J(0,v)},
$S:0}
C.eQy.prototype={
$0(){var w=this.a
return w.m(new C.eQu(w,this.b))},
$S:0}
C.eQu.prototype={
$0(){var w,v=this.b.length,u=J.e3(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.v(0,u)},
$S:0}
C.eQz.prototype={
$0(){var w=this,v=w.a
return v.m(new C.eQt(v,w.b,w.c,w.d))},
$S:0}
C.eQt.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a9(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.v(0,w)},
$S:0}
C.eQA.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.grw(v))},
$S:0}
C.eQB.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.eQC.prototype={
$0(){var w=this.a
return w.m(new C.eQs(w))},
$S:0}
C.eQs.prototype={
$0(){var w=this.a.db
return A.d.h_(w,0,w.length,0)},
$S:0}
C.eQf.prototype={
$1(d){return d.a===this.a.dy},
$S:212}
C.eQg.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.avU[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aT(9,9)
m=B.a([B.b0(v.w.e),B.b0(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.awv(new B.n5(new B.bp(n,n,n,n),A.aq,new B.kN(new B.o(j,j,j,j,j,new B.a8(A.a3,A.a7,A.x,m,j,j),A.n),A.bd,new C.aZj(l,B.b0(k==null?v.w.x:k),A.k.D(w,12,26),j),j),j),u,q.b,o===p,new C.eQe(r,v),2,i))}return B.bY(A.bz,h,A.bq,7,7)},
$S:166}
C.eQe.prototype={
$0(){var w=this.b
return w.m(new C.eQ9(this.a,w))},
$S:0}
C.eQ9.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.eQh.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:226}
C.eQk.prototype={
$0(){var w=this.a
return w.m(new C.eQd(w))},
$S:0}
C.eQd.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.eQl.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.eQm.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.eQn.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.eQo.prototype={
$0(){var w=this.a
return w.m(new C.eQc(w))},
$S:0}
C.eQc.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.eQp.prototype={
$0(){var w=this.a
return w.m(new C.eQb(w))},
$S:0}
C.eQb.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.eQq.prototype={
$0(){var w=this.b
return w.m(new C.eQa(this.a,w))},
$S:0}
C.eQa.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eQr.prototype={
$1(d){return this.a.fx=d},
$S:226}
C.eQi.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.eQj.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.ePU.prototype={
$0(){var w=this.a
return w.m(new C.ePT(w))},
$S:0}
C.ePT.prototype={
$0(){var w=this.a
w.p4=null
w.b1W()},
$S:0}
C.ePV.prototype={
$0(){var w=this.a
return w.m(new C.ePS(w,this.b))},
$S:0}
C.ePS.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.ePW.prototype={
$0(){var w=this.a
return w.m(w.gcmI())},
$S:0}
C.ePM.prototype={
$0(){var w=this.a
return w.m(new C.ePL(w))},
$S:0}
C.ePL.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.ePN.prototype={
$0(){var w=this.a
return w.m(new C.ePK(w))},
$S:0}
C.ePK.prototype={
$0(){var w=this.a
w.aH=0.55
w.Z=Math.max(w.Z,0.12)},
$S:0}
C.ePO.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.d_J[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aT(9,9)
m.push(v.awv(new B.n5(new B.bp(p,p,p,p),A.aq,new B.a7(1/0,1/0,new B.D7(new B.yE(o,o,v.aVO(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.Ac),B.fL(u,A.A,140,o,A.cm,A.bR,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.ePJ(v,s),3,n))}return B.bY(A.bz,m,A.bq,10,8)},
$S:166}
C.ePJ.prototype={
$0(){var w=this.a
return w.m(new C.ePI(w,this.b))},
$S:0}
C.ePI.prototype={
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
C.ePq.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.ePr.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.ePs.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.ePt.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.ePu.prototype={
$1(d){return this.a.aE=d},
$S:6}
C.ePv.prototype={
$1(d){return this.a.Z=d},
$S:6}
C.ePw.prototype={
$1(d){return this.a.b6=d},
$S:6}
C.ePx.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.ePy.prototype={
$1(d){return this.a.aP=d},
$S:6}
C.eOM.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.eON.prototype={
$1(d){return this.a.to=d},
$S:6}
C.eOO.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.eOP.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.eOQ.prototype={
$0(){var w=this.a
return w.m(new C.eOL(w))},
$S:0}
C.eOL.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.eOR.prototype={
$1(d){return this.a.b3=d},
$S:226}
C.eOS.prototype={
$1(d){return this.a.b2=d},
$S:6}
C.ePk.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.ePl.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.ePm.prototype={
$1(d){return this.a.az=d},
$S:6}
C.ePn.prototype={
$1(d){return this.a.be=d},
$S:226}
C.ePo.prototype={
$1(d){return this.a.bM=d},
$S:6}
C.eOW.prototype={
$1(d){return this.a.aS=d},
$S:6}
C.eOX.prototype={
$1(d){return this.a.bj=d},
$S:6}
C.eOY.prototype={
$1(d){return this.a.bU=d},
$S:6}
C.eOZ.prototype={
$1(d){return this.a.c7=d},
$S:6}
C.eP_.prototype={
$0(){var w=this.a
return w.m(new C.eOV(w))},
$S:0}
C.eOV.prototype={
$0(){var w=this.a
return w.c7=A.k.F(w.c7+90+180,360)-180},
$S:0}
C.eP0.prototype={
$0(){var w=this.a
return w.m(new C.eOU(w))},
$S:0}
C.eOU.prototype={
$0(){var w=this.a
return w.cU=!w.cU},
$S:0}
C.eP1.prototype={
$0(){var w=this.a
return w.m(new C.eOT(w))},
$S:0}
C.eOT.prototype={
$0(){var w=this.a
return w.cX=!w.cX},
$S:0}
C.ePP.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i6N(v,w.p4)},
$S:0}
C.ePH.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.bkt:B.fL(v,A.A,w,w,A.cm,A.bR,!1,w,!1,w,w)
return C.fxX(d.length===0?"rounded":d,u,e)},
$S:142}
C.ePD.prototype={
$0(){var w=this.a
return w.m(new C.ePC(w))},
$S:0}
C.ePC.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.ePE.prototype={
$0(){var w=this.b
return w.m(new C.ePB(this.a,w))},
$S:0}
C.ePB.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.ePF.prototype={
$0(){var w=this.b
return w.m(new C.ePA(this.a,w))},
$S:0}
C.ePA.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.ePG.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.k.D(w.ay,0,1-d)
w.ch=A.k.D(w.ch,0,0.95)},
$S:6}
C.eQ_.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.m(20),p=B.a([new B.ac(-4,A.G,A.b7.j(0.35),A.J,30)],x.V),o=B.m(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.ev(n.cg9(),n.r))
l.push(new C.Io(n.ct5(),!1,!1,t))
o=B.bZ(0,B.bw(o,new B.ev(new B.an(A.W,t,A.b_,A.r,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.m(8)
return B.p(t,new B.an(A.W,t,A.aa,A.r,B.a([o,B.ao(t,B.aE(A.c4,B.c_(t,new B.o(t,t,B.I(A.c.j(0.3),A.q,1),u,t,t,A.n),A.bd),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.ePZ(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a8),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:215}
C.ePZ.prototype={
$1(d){var w=this.a
return w.m(new C.ePY(w,d,this.b,this.c))},
$S:18}
C.ePY.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.k.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.k.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.eQ8.prototype={
$0(){var w=this.a
return w.m(new C.eQ7(w,this.b))},
$S:0}
C.eQ7.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.ePp.prototype={
$0(){var w=this.a.c
w.toString
return B.a5(w,!1).lP()},
$S:0}
C.eQG.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a7(Math.min(s*0.4,460),t,B.v(B.a([w.aYx(),B.E(B.av(w.b0t(Math.max(240,e.d-110)),t,t,t),1)],v),A.m,t,A.e,A.j,0,A.p),t),B.E(B.v(B.a([B.E(w.aP4(),1),w.aLj()],v),A.m,t,A.e,A.j,0,A.p),1)],v),A.m,t,A.e,A.j,0,t,t)}u=A.k.D(e.d*0.36,190,360)
s=this.a
return B.v(B.a([s.aYx(),new B.C(A.hK,B.av(s.b0t(u),t,t,t),t),B.E(s.aP4(),1),s.aLj()],x.p),A.m,t,A.e,A.j,0,A.p)},
$S:570}
C.fvd.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.eo(k,!1,j,A.aD,"",4280640491,i,l,m,"",h,C.bzJ(),null,"","",0,!1,"",0,D.be,4280172719,2,d,0,0,"",D.cl,D.cQ,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bl,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.L,A.bl,A.P)},
$S:z+98}
C.fvc.prototype={
$3(d,e,f){var w=this,v=C.bzJ(),u=w.b?A.H:A.cv,t=w.c?A.cF:A.bl
return C.eo(w.d,!1,f,A.aD,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.be,4280172719,2,d,0,w.f,w.e,D.cl,D.cQ,0.82,0.09,w.a)},
$S:z+28}
C.cda.prototype={
$1(d){return B.t(d)},
$S:17}
C.fCU.prototype={
$0(){return this.a},
$S:z+15}
C.fjy.prototype={
$1(d){return d.a.cZ(this.a)},
$S:z+30}
C.fjz.prototype={
$2(d,e){return J.cl(e)},
$S:z+31}
C.fCW.prototype={
$0(){return B.a([],x.o)},
$S:z+15}
C.fCZ.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fD_.prototype={
$0(){return A.d.gL(D.vT)},
$S:z+33}
C.fCS.prototype={
$1(d){return d.a},
$S:z+16}
C.fCV.prototype={
$1(d){return d.a},
$S:z+16}
C.fAS.prototype={
$1(d){return A.a.i(B.t(d))},
$S:17}
C.fAT.prototype={
$1(d){return d.length!==0},
$S:3}
C.fAU.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fvh.prototype={
$0(){return C.cC()},
$S:22}
C.fvk.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cl,s=u?n:0
return C.eo(j,l,v,A.aD,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.be,4280172719,2,d,s,0,"",t,D.cQ,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"","",A.bl,A.a5)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,"",j,A.bl,A.a5)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,null,0,j,k,A.bl,A.a5)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bl,A.a5)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bl,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dd,!1,k,l,"",m,A.bl,A.a5)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,null,0,"",k,A.bl,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,D.dd,!1,j,k,"",l,A.bl,A.a5)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,!1,k,0,l,m,A.bl,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bg,j,k,l,m,"",n,A.bl,A.a5)},
$S:z+35}
C.fvj.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cl,D.f0,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+27}
C.fvi.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cl,t=v?j:0
return C.eo(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",h,w,d,v?k:"",l,0,!1,"",0,D.be,4280172719,2,"",t,0,"",u,D.lq,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.q6,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+37}
C.fvg.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+17}
C.fxI.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hfU.cg(0,A.a.i(s.w).toLowerCase(),new C.fxG(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.cg(0,s.r,new C.fxH(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bv(t.e,new B.bnH(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1681}
C.fxG.prototype={
$0(){return F.aN0(this.a.w)},
$S:188}
C.fxH.prototype={
$0(){var w=this.a.r,v=B.aK(w.toLowerCase()," ","_")
return F.byD("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hB(2,w,A.c6,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:188}
C.fco.prototype={
$1(d){return d.a==="bio"},
$S:z+17}
C.fcp.prototype={
$1(d){return d.a},
$S:z+18}
C.fcq.prototype={
$1(d){return d.b},
$S:z+19}
C.fLT.prototype={
$1(d){return D.fTL},
$S:z+41}
C.eWT.prototype={
$0(){return this.a.x=C.hKh(this.b,this.c.b)},
$S:0}
C.eWU.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.eWR.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:414}
C.eWS.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:414}
C.eWQ.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bU(A.aB,null,new C.eWL(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.k4,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a0(s,"finale:")?4:5
break
case 4:r=A.a.b1(s,7)
if(r.length===0){n.m(new C.eWM(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hlF(o,m.cGz(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.eWN(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eWL.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.eWP(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.b3I,A.f,p,p,D.aZN,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.BQ:D.BV,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a7(64,64,C.fxX(v,i.b2x(h),u),p)))}t=B.lX(1,m,4,10,10,p,A.dQ,!0)
if(!l)return B.bn(!0,new B.C(A9.B_,t,p),!0,!1,A.af,!0,!0)
s=new C.eWO(i,d)
m=B.aI(d,A.bU,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Gy[e]
l.push(s.$2(r.a,r.b))}return B.bn(!0,new B.cS(new B.aY(0,1/0,0,m.a.b*0.85),B.cd(B.v(B.a([D.fiO,A.S,t,A.e1,D.eI3,A.at,D.ftm,A.S,B.lX(1.15,l,3,10,10,p,A.dQ,!0)],n),A.F,p,A.e,A.j,0,A.p),A.r,p,A.y,p,A9.B_,p,p,A.ah),p),!0,!1,A.af,!0,!0)},
$S:26}
C.eWP.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.m(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bu:A.dq
return B.aE(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.I(s,A.q,v?2:1),u,w,w,A.n),w,w,w,w,A.hx,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eWK(this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:1682}
C.eWK.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eWO.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.m(12),r=t?A.bK:A.bF
r=B.I(r,A.q,t?2.5:1)
w=B.m(10)
u=B.E(B.p(v,B.bw(w,d.length===0?B.p(v,D.an1,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):B.e1(new C.N6(u.Fo(d),!0,!1,v),!0,v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.aE(v,B.v(B.a([u,A.at,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,t?A.bK:A.ad,v,v,v,v,v,v,v,v,10.5,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eWJ(this.b,d),v,v,v,v,v,v,!1,A.a8)},
$S:142}
C.eWJ.prototype={
$0(){B.a5(this.a,!1).O("finale:"+this.b)
return null},
$S:0}
C.eWM.prototype={
$0(){var w=this.a
return w.w=w.w.Fo("")},
$S:0}
C.eWN.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eWz.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.eWA.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.eWC.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.eWD.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.eWE.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.eWF.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eWB(w,d))},
$S:2}
C.eWB.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eWG.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.t(this.b)},
$S:0}
C.eX6.prototype={
$0(){return this.a.f.fJ()},
$S:0}
C.eX7.prototype={
$0(){var w=this.a
return w.m(new C.eX5(w))},
$S:0}
C.eX5.prototype={
$0(){return this.a.e=null},
$S:0}
C.eX8.prototype={
$0(){var w=this.a
return w.m(new C.eX4(w))},
$S:0}
C.eX4.prototype={
$0(){return this.a.x=null},
$S:0}
C.eXa.prototype={
$1(d){var w=this.a
return w.m(new C.eX3(w,d))},
$S:33}
C.eX3.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eXb.prototype={
$1(d){var w=this.a
return w.m(new C.eX2(w,d))},
$S:33}
C.eX2.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eXc.prototype={
$0(){var w=this.a
return w.m(new C.eX1(w))},
$S:0}
C.eX1.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.eXd.prototype={
$1(d){var w=this.a
return w.m(new C.eX0(w,d))},
$S:33}
C.eX0.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.eXe.prototype={
$1(d){var w=this.a
return w.m(new C.eX_(w,d))},
$S:33}
C.eX_.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eXf.prototype={
$0(){var w=this.a
return w.m(new C.eWZ(w))},
$S:0}
C.eWZ.prototype={
$0(){var w=this.a
return w.w=w.w.Fo("")},
$S:0}
C.eXg.prototype={
$0(){var w=this.a
return w.m(new C.eWY(w,this.b))},
$S:0}
C.eWY.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.eXh.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a7(u,null,w.bMJ(D.a2c[v]),null))
return B.bY(A.bz,t,A.bq,8,8)},
$S:166}
C.eX9.prototype={
$1(d){var w=this.a
return w.m(new C.eWX(w,d))},
$S:8}
C.eWX.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eWH.prototype={
$0(){var w=this.a
return w.m(new C.eWI(w,this.b,this.c))},
$S:0}
C.eWI.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.J(0,w)},
$S:0}
C.eWW.prototype={
$0(){var w=this.a
return w.m(new C.eWV(w,this.b))},
$S:0}
C.eWV.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.fLS.prototype={
$1(d){return new C.a_T(this.a,this.b,null)},
$S:z+42}
C.eWs.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.eWt.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.eWu.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aFr?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.eWv.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.eWw.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.eWr(w,d))},
$S:2}
C.eWr.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eWx.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.t(this.b)},
$S:0}
C.eWy.prototype={
$0(){var w=this.b
if(A.a.cb(w,"\u2026"))w=A.a.ap(w,0,w.length-1)
this.a.d.bO(0,new B.bb(w,B.h8(A.bw,w.length),A.aN))},
$S:0}
C.fiO.prototype={
$1(d){return d.a===this.a},
$S:212}
C.eci.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gaww(),n=o.x
n===$&&B.c()
w=B.m(16)
v=p.a.c
u=v?D.cMJ:D.d1T
t=D.xe.j(v?1:0.55)
v=p.a.c
t=B.I(t,A.q,v?1.8:1.2)
s=D.xe.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ac(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.m(15)
n=B.bZ(0,B.b3(q,q,q,new C.bgU(n*6.283,q),A.au),0,0,0)
o=o.x
o=B.bZ(0,B.bOb(B.eG(A.A,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a8(A.a3,A.a7,A.x,B.a([A.K,D.bas.j(0.28),A.K],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.u(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bw(s,new B.an(A.W,q,A.aa,A.r,B.a([n,o,B.av(B.v(B.a([B.X(p.a.c?A.ee:A.lO,D.xe,q,q,q,20),A.at,B.f4(A.A,B.nL(A.jo,D.fcs,new C.ech()),A.f,A.eg)],r),A.m,q,A.e,A.Q,0,A.p),q,q,q),B.ao(q,B.p(q,D.f97,A.f,q,q,new B.o(D.xe,q,q,B.m(6),q,q,A.n),q,q,q,q,L.ahY,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a8(A.ax,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:90}
C.ech.prototype={
$1(d){return D.bTm.av(0,d)},
$S:66}
C.fD0.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fD1.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:212}
C.fD2.prototype={
$2(d,e){return A.o.aL(e.a.length,d.a.length)},
$S:1683}
C.fD3.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.L)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aK(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aK(u,p,q.toUpperCase())}return u},
$S:14}
C.fCX.prototype={
$1(d){return d.a},
$S:z+18}
C.fCY.prototype={
$1(d){return d.b},
$S:z+19}
C.fL5.prototype={
$1(d){return new C.Zf(this.a,this.b,null)},
$S:z+44}
C.dhP.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dhQ.prototype={
$1(d){return d.a===this.a.gahK()},
$S:z+10}
C.dhR.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dhU.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.dhV.prototype={
$0(){var w=this.a
return w.m(new C.dhT(w,this.b))},
$S:0}
C.dhT.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dhW.prototype={
$1(d){var w=this.a
return w.m(new C.dhS(w,d))},
$S:8}
C.dhS.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.ecg.prototype={
$1$2(d,e,f){var w=B.bm(d,!0,f)
A.d.fu(w,this.a)
return B.dd(w,0,B.dJ(e,"count",x.S),B.U(w).c).dH(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1684}
C.f8S.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.eo(A.bg,!1,4279310375,A.aD,"",i,24,A.bl,A.a5,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f0,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cl,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+45}
C.f8U.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.eo(A.L,!1,this.b.d,A.aD,"",4280640491,i,A.bl,A.cN,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.be,4280172719,2,d,l,0,"",D.mB,D.cQ,g,e,f)},
$S:z+46}
C.f8T.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.wm(0,"twinkle")
w=t===D.be?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.mB,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+47}
C.f8R.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fwo.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fwp.prototype={
$0(){return A.d.gL(D.GI)},
$S:z+49}
C.fwq.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.faS.prototype={
$1(d){return!(A.a.a0(d.db,"__design__")||A.a.a0(d.a,"design_"))},
$S:z+4}
C.fCt.prototype={
$1(d){var w=2450411,v=4281908728
C.dw(d,C.dx(4280171146,1,0,D.be,w,0,0.52,0,0))
C.dw(d,C.dx(v,1,0,D.be,w,0,0.04,0.48,0))
C.dw(d,C.dx(4294047225,0.38,0,D.be,w,0,0.48,0.52,0.62))
C.dw(d,C.dx(v,0.006,0,D.fq,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCu.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dw(d,C.dx(4280172719,0.8,0,D.be,w,0,0.36,0.58,0.1))
C.dw(d,C.dx(v,0.64,0,D.be,w,0,0.28,0.64,0.18))
C.dw(d,C.dx(4282090230,0.44,0,D.be,w,0,0.2,0.7,0.28))
C.dw(d,C.dx(v,0.006,0,D.fq,v,3,0.22,0.08,0.12))
C.dw(d,C.dx(u,0.004,0,D.fq,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fCv.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(4279080072,0.11,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(4279310375,0.11,0,D.be,w,0,1,0,0.89))
C.dw(d,C.dx(856528008,0.72,0,D.jG,w,0,0.28,0.72,0.14))
C.dw(d,C.dx(1426953352,0.2,0,D.jG,w,0,0.2,0.78,0.22))
C.dw(d,C.dx(v,0.004,0,D.fq,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fCG.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4279203438,0.55,0,D.jG,w,0,0.5,0.55,-0.05))
C.dw(d,C.dx(4280171146,0.5,0,D.jG,w,0,0.45,0.62,0.35))
C.dw(d,C.dx(4280640491,0.4,0.3,D.jF,w,0,0.35,0.68,0.55))
C.dw(d,C.dx(571438702,0.12,0,D.be,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fCL.prototype={
$1(d){var w=4280472558
C.dw(d,C.dx(4279310375,0.75,-0.4,D.jF,2450411,0,0.75,-0.15,0.35))
C.dw(d,C.dx(w,0.55,0,D.be,2450411,0,0.06,0.42,0.38))
C.dw(d,C.dx(w,0.006,0,D.fq,w,3,0.35,0.08,0.08))
C.dw(d,C.dx(2282478,0.12,0,D.be,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCM.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3423541034,0.48,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(v,0.12,-0.08,D.jG,w,0,1.1,-0.05,0.38))
C.dw(d,C.dx(858088427,0.35,0,D.be,w,0,0.42,0.55,0.05))
C.dw(d,C.dx(v,0.006,0,D.fq,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fCN.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.cLM[w]
u=Date.now()
t=$.iZ
$.iZ=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f0,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.be,v,4294967295,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.K6
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fq,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fCO.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.aq(A.mf,A.dv,w/3).l()
u=Date.now()
t=$.iZ
$.iZ=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f0,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cu,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.K6
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(s,0.006,0,D.fq,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fCP.prototype={
$1(d){var w=4294967295
C.dw(d,C.dx(4280640491,1,0,D.be,2450411,0,0.42,0,0))
C.dw(d,C.dx(4280110808,1.1,1.57,D.jF,2450411,0,0.18,0.35,-0.05))
C.dw(d,C.dx(w,0.006,0,D.fq,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCQ.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dw(d,C.dx(w,0.1,0,D.be,v,0,1,0,0))
C.dw(d,C.dx(u,0.012,0,D.be,v,0,1,0,0.1))
C.dw(d,C.dx(u,0.006,0,D.fq,u,3,0.42,0.06,0.14))
C.dw(d,C.dx(403446057,0.68,0,D.jG,v,0,0.22,0.72,0.18))
C.dw(d,C.dx(w,0.1,0,D.be,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCR.prototype={
$1(d){var w=4278630100
C.dw(d,C.dx(4279310375,1.2,0.15,D.jG,2450411,0,0.55,-0.2,-0.1))
C.dw(d,C.dx(w,1.1,0.15,D.be,2450411,0,0.08,0.15,-0.05))
C.dw(d,C.dx(1120295,0.18,0,D.be,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCw.prototype={
$1(d){var w=4292617766
C.dw(d,C.dx(4282714634,0.65,-0.2,D.jF,2450411,0,0.65,-0.1,0.45))
C.dw(d,C.dx(w,0.5,-0.15,D.jF,2450411,0,0.5,0.05,0.55))
C.dw(d,C.dx(w,0.006,0,D.fq,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fCx.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(4278413729,0.35,3.14,D.jF,w,0,0.45,-0.05,0.7))
C.dw(d,C.dx(4278355143,0.3,3.14,D.jF,w,0,0.4,0.25,0.75))
C.dw(d,C.dx(4279150057,0.32,3.14,D.jF,w,0,0.5,0.55,0.72))
C.dw(d,C.dx(863884284,0.22,0,D.eJ,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fCy.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dw(d,C.dx(w,0.14,0,D.be,v,0,0.14,0.02,0.02))
C.dw(d,C.dx(2282478,0.14,0,D.be,u,3,0.14,0.84,0.02))
C.dw(d,C.dx(w,0.28,0,D.jG,v,0,0.35,-0.08,0.78))
C.dw(d,C.dx(u,0.22,0.5,D.jF,v,0,0.3,0.72,0.78))
C.dw(d,C.dx(w,0.006,0,D.fq,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fCz.prototype={
$1(d){var w=4293571336,v=1156231944
C.dw(d,C.dx(1841431,0.92,0,D.be,w,3,0.92,0.04,0.04))
C.dw(d,C.dx(v,0.15,0,D.jF,2450411,0,0.15,0.02,0.02))
C.dw(d,C.dx(v,0.15,3.14,D.jF,2450411,0,0.15,0.83,0.83))
C.dw(d,C.dx(w,0.004,0,D.fq,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fCA.prototype={
$1(d){var w=4279080072,v=2450411
C.dw(d,C.dx(w,0.14,0,D.kX,v,0,0.14,0.68,0.18))
C.dw(d,C.dx(4279548070,0.14,0,D.kX,v,0,0.14,0.78,0.28))
C.dw(d,C.dx(4281193663,0.14,0,D.kX,v,0,0.14,0.68,0.38))
C.dw(d,C.dx(4284410580,0.14,0,D.kX,v,0,0.14,0.78,0.48))
C.dw(d,C.dx(4279203438,0.14,0,D.kX,v,0,0.14,0.68,0.58))
C.dw(d,C.dx(w,0.006,0,D.fq,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fCB.prototype={
$1(d){var w=2450411,v=4280640491
C.dw(d,C.dx(3708753706,0.42,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(v,0.06,-0.05,D.jG,w,0,1,0,0.38))
C.dw(d,C.dx(859356664,0.25,0,D.eJ,w,0,0.25,0.7,0.08))
C.dw(d,C.dx(v,0.006,0,D.fq,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fCC.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.aq(A.mf,A.dv,w/3).l()
u=Date.now()
t=$.iZ
$.iZ=t+1
v=new C.eJ("design_"+(""+1000*u+"_"+t),D.f0,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.Cu,v,2450411,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.K6
v.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,v)}C.dw(d,C.dx(4280172719,0.08,0,D.be,2450411,0,1,0,0))
C.dw(d,C.dx(s,0.006,0,D.fq,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fCD.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iZ
$.iZ=u+1
u=new C.eJ("design_"+(""+1000*v+"_"+u),D.f0,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a5,A.bl,A.aD,s,A.bg,null,D.fq,t,t,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.K6
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(s,0.75,0,D.be,2450411,0,0.22,0.72,0.1))
C.dw(d,C.dx(872415231,0.16,0,D.be,2450411,0,0.16,0.75,0.15))
C.dw(d,C.dx(s,0.006,0,D.fq,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCE.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dw(d,C.dx(4674921,0.9,0,D.be,4287931320,2,0.9,0.05,0.05))
C.dw(d,C.dx(w,0.08,0,D.be,v,0,0.08,0.03,0.03))
C.dw(d,C.dx(u,0.08,0,D.be,v,0,0.08,0.89,0.03))
C.dw(d,C.dx(u,0.08,0,D.be,v,0,0.08,0.03,0.89))
C.dw(d,C.dx(w,0.08,0,D.be,v,0,0.08,0.89,0.89))
C.dw(d,C.dx(w,0.004,0,D.fq,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fCF.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iZ
$.iZ=t+1
t=new C.eJ("design_"+(""+1000*u+"_"+t),D.f0,0.55,0.14+v,0.38,0.18,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,4294967295,4280640491,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
u=$.K6
t.db="__design__:"+(u.length===0?"layer":u)
A.d.ck(d.z,0,t)
u=B.aq(A.dr,A.cr,w/2).l()
t=Date.now()
s=$.iZ
$.iZ=s+1
u=new C.eJ("design_"+(""+1000*t+"_"+s),D.f0,0.57,0.16+v,0.06,0.14,"",24,A.a5,A.bl,A.aD,r,A.bg,null,D.be,u,q,0,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.K6
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}C.dw(d,C.dx(4280171146,1,0,D.be,q,0,0.48,0,0))
C.dw(d,C.dx(4280172719,1.1,1.57,D.jF,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fCH.prototype={
$1(d){var w=2450411
C.dw(d,C.dx(870995980,0.55,0.45,D.jG,w,0,0.55,-0.12,-0.08))
C.dw(d,C.dx(856996006,0.45,0.45,D.jG,w,0,0.45,0.62,-0.05))
C.dw(d,C.dx(16777215,0.38,0.45,D.jG,4293548044,5,0.38,0.52,0.12))
C.dw(d,C.dx(585783308,0.3,0.45,D.jG,w,0,0.3,0.56,0.16))
C.dw(d,C.dx(4279548070,0.06,0,D.be,w,0,0.16,0.38,0.04))
C.dw(d,C.dx(1156208652,0.28,0,D.eJ,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fCI.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dw(d,C.dx(w,1,0,D.be,v,0,0.07,0,0))
C.dw(d,C.dx(u,0.1,0,D.be,t,1,0.46,0.48,0.14))
C.dw(d,C.dx(u,0.1,0,D.be,t,1,0.46,0.48,0.28))
C.dw(d,C.dx(u,0.1,0,D.be,t,1,0.46,0.48,0.42))
C.dw(d,C.dx(s,0.08,0,D.eJ,v,0,0.08,0.5,0.16))
C.dw(d,C.dx(w,0.08,0,D.eJ,v,0,0.08,0.5,0.3))
C.dw(d,C.dx(4279548070,0.08,0,D.eJ,v,0,0.08,0.5,0.44))
C.dw(d,C.dx(16777215,0.32,0.45,D.jG,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fCJ.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dw(d,C.dx(4294047225,0.08,0,D.be,t,2,0.1,0.02,0.06))
C.dw(d,C.dx(s,0.42,0,D.be,2450411,0,0.36,0.58,0.18))
C.dw(d,C.dx(872415231,0.12,0,D.be,2450411,0,0.28,0.62,0.24))
C.dw(d,C.dx(16777215,0.28,0,D.eJ,s,4,0.32,0,0.72))
C.dw(d,C.dx(r,0.006,0,D.fq,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iZ
$.iZ=u+1
u=new C.eJ("design_"+(""+1000*v+"_"+u),D.f0,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a5,A.bl,A.aD,4279310375,A.bg,null,D.eJ,16777215,t,2,0,!1,"",0,D.cl,0,"","","","","",!1,0)
v=$.K6
u.db="__design__:"+(v.length===0?"layer":v)
A.d.ck(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fCK.prototype={
$1(d){var w=2450411,v=4279548070
C.dw(d,C.dx(3423541034,0.55,0,D.be,w,0,1,0,0))
C.dw(d,C.dx(4009754623,0.56,0.45,D.jG,w,0,0.56,0.22,0.18))
C.dw(d,C.dx(3439329279,0.44,0.45,D.jG,w,0,0.44,0.28,0.24))
C.dw(d,C.dx(v,0.07,0,D.be,w,0,0.22,0.34,0.62))
C.dw(d,C.dx(v,1,0,D.be,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fue.prototype={
$1(d){return d.a===this.a},
$S:z+20}
C.fuf.prototype={
$0(){return A.d.gL($.bDn())},
$S:z+52}
C.fim.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a0(w,"\u2022")?w:"\u2022 "+w},
$S:14}
C.fil.prototype={
$1(d){return C.hRy(d,this.a,this.b)},
$S:z+53}
C.fD9.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.vD(1.0375,1.01875,1)
return new B.fO(v,u,new C.aRZ(B.hHi(A.uN,C.hRB(w.c,w.d,v,u),t)))},
$S:417}
C.dTg.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:9}
C.dTf.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=B.c_(w,new B.o(w,w,w,w,w,new B.bS(A.JD,1.2,A.x,w,0,u.d,w,w),A.n),A.bd),s=this.a,r=s.d,q=s.a.d?0.45:1
return B.jv(new B.an(A.W,w,A.b_,A.r,B.a([t,new B.ev(B.b3(w,w,w,new C.bdN(u.a,r,q,r),A.au),w),B.av(new B.kf(r,new C.dTe(s,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.r,w)},
$S:356}
C.dTe.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ev.aw(0,A.k.D(e/1.4,0,1)),p=A.k.D(e/0.9,0,1),o=A.k.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.B(u,x.bz)
t.push(A.d.gL(u))
u=B.a([new B.ac(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.v(j,B.a([B.p(r,B.hS(B.fL(i,A.A,r,r,A.cm,A.bR,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.fS(A.A,0,6.283185307179586,A.x,t,r,new B.mj(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a7(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.bqn(i,e,B.d(v,r,r,r,r,r,r,B.l(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cQ(i[1].j(0.6),A.J,t)],x.r),r,r),A.L,r,r),r))
j.push(new B.a7(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.dc(B.dU(B.v(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a8(A.a3,A.a7,A.x,B.a([A.K,i[1],A.K],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a7(r,m*0.022,r,r),B.d(w.a.c.gaJS(),r,r,r,r,r,r,B.l(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a5,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.L,r,r)],k),A.m,r,A.e,A.Q,0,A.p),new B.u(0,(1-o)*m*0.03)),o))
return B.dc(B.eb(A.A,new B.C(new B.Q(l,0,l,0),B.v(j,A.m,r,A.e,A.Q,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:103}
C.eVG.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,this.a.c,B.a([0,A.k.D(w-0.1,0,1),A.k.D(w,0,1),A.k.D(w+0.1,0,1),1],x.x),null).av(0,d)},
$S:66}
C.c7I.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.m(14),t=g?A.bK:A.bF
t=B.I(t,A.q,g?2.5:1)
w=g?B.a([new B.ac(0,A.G,A.hG.j(0.4),A.J,14)],x.V):v
w=B.di(v,B.bw(B.m(12),d,A.aq),v,v,A.bc,new B.o(v,v,t,u,w,v,A.n),A.eE,v,72,v,v,v,v,v)
return B.aE(v,new B.a7(112,v,B.v(B.a([w,A.h_,B.d(e,v,1,A.a2,v,v,v,B.l(v,v,g?A.bK:A.ad,v,v,v,v,v,v,v,v,11,v,v,A.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.m,v,A.e,A.j,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a8)},
$S:1685}
C.c7J.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Fo(""))},
$S:0}
C.c7K.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(B.e1(new C.N6(v.Fo(u),!0,!1,null),!0,null),d.b,new C.c7L(w,this.c,d),v.a===u)},
$S:z+54}
C.c7L.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hlF(u.b,t.c.Fo(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fJv.prototype={
$1(d){return new C.YO(this.a,null)},
$S:z+55}
C.d71.prototype={
$0(){var w=this.a
w.d=w.gvt().baq("data:"+this.b+";base64,"+A.cT.gcw().aJ(this.c));++w.r},
$S:0}
C.d76.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d77.prototype={
$0(){var w=this.a
return w.m(new C.d75(w))},
$S:0}
C.d75.prototype={
$0(){return this.a.r++},
$S:0}
C.d78.prototype={
$1(d){var w=this.a
return w.m(new C.d74(w,d))},
$S:2}
C.d74.prototype={
$0(){var w=this.a
return w.d=w.gvt().aCS(this.b)},
$S:0}
C.d79.prototype={
$0(){var w=this.a
return w.m(new C.d73(w))},
$S:0}
C.d73.prototype={
$0(){var w=this.a
return w.d=w.gvt().baq("")},
$S:0}
C.d7a.prototype={
$1(d){var w=this.a
return w.m(new C.d72(w,d))},
$S:2}
C.d72.prototype={
$0(){var w=this.a
return w.d=w.gvt().bax(this.b)},
$S:0}
C.d7b.prototype={
$0(){var w=this.a
w=w.gvt().bax(w.gawx().a.a)
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.fJu.prototype={
$1(d){var w={}
w.a=this.a
return new B.e0(new C.fJt(w),null)},
$S:21}
C.fJt.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bn(!0,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bU,x.w).w.a.b*0.85),B.cd(B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aA,D.fqv,A.at,D.fqL,A.aA,new C.aZg(v.a,new C.fJs(v,e,d),!0,w)],x.p),A.F,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,w,w,w,A.ah),w),!0,!1,A.af,!0,!1),A.f,w,w,D.b_k,w,w,w,w,A.LW,w,w,w)},
$S:180}
C.fJs.prototype={
$1(d){this.b.$1(new C.fJr(this.a,d))
B.a5(this.c,!1).O(d)},
$S:z+56}
C.fJr.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.fLR.prototype={
$1(d){return D.fP7},
$S:z+57}
C.ddO.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ddP.prototype={
$0(){var w=this.a.c
w.toString
B.a5(w,!1).O(this.b)
return null},
$S:0}
C.ddQ.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a5(w,!1).O(v)}},
$S:0}
C.fzQ.prototype={
$1(d){var w=this.b
return new B.a8(A.ax,A.aC,A.x,B.a([A.K,B.aq(this.a,A.c,0.75).j(0.9),A.K],x.O),B.a([A.k.D(w-0.12,0,1),A.k.D(w,0,1),A.k.D(w+0.12,0,1)],x.x),null).av(0,d)},
$S:66}
C.d6J.prototype={
$3(d,e,f){var w,v=this,u=new B.aO($.W().r,A.ap,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.b5(t+r*1.2,o))
u.E(new B.cU(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.cU(w,q+p,w,q+p*1.2))
u.E(new B.CP(B.bT(new B.u(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.aO(u,v.d)
s.aO(u,v.e)
p=B.M()
p.r=B.aq(v.a.d,A.c,0.6).gp(0)
s.ae(new B.u(w,o),2.2,p)},
$S:703}
C.fzU.prototype={
$2(d,e){return A.k.aL(d.c,e.c)},
$S:z+58}
C.fsf.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fsg.prototype={
$1(d){var w=null,v=this.a
return B.bn(!0,new B.C(E.xB,B.v(B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.f9n,A.N,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aQ,B.dp(D.Ge,B.d('Endelea na "'+A.d.gL(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fsd(d),B.bl(A.bZ,w,w,w,A.c,w,A.ck,w,w,w,w,w)),A.S,B.ey(A.o0,D.TC,new C.fse(d),B.dg(w,w,w,w,w,w,w,w,w,A.ad,w,w,A.ck,w,w,Q.wE,w,w,w,w))],x.p),A.aj,w,A.e,A.Q,0,A.p),w),!0,!1,A.af,!0,!0)},
$S:26}
C.fsd.prototype={
$0(){B.a5(this.a,!1).O("continue")
return null},
$S:0}
C.fse.prototype={
$0(){B.a5(this.a,!1).O("new")
return null},
$S:0}
C.cd8.prototype={
$1(d){return d.hB()},
$S:z+59}
C.cd9.prototype={
$1(d){return d.ag()},
$S:z+60}
C.cd7.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.k.N(b3)
if(b4==null)b4=A.a5.gdJ(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.k.N(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.k.N(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.hNp(b2.h(0,"type"))
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
n=A.axF[A.o.D(b4,0,8)]
m=D.cOC[A.o.D(w,0,1)]
l=C.hR0(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.k.N(k)
if(k==null)k=4279310375
j=A.auq[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.hTO(b2.h(0,"shape"))
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
a0=J.z(b2.h(0,"bulletList"),!0)
a1=b2.h(0,"fileName")
a1=J.k(a1==null?"":a1)
a2=B.aJ(b2.h(0,"pdfPage"))
a2=a2==null?b1:A.k.N(a2)
if(a2==null)a2=0
a3=C.hh_(b2.h(0,"textTransition"))
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
b0=J.z(b2.h(0,"rich"),!0)
b2=B.aJ(b2.h(0,"textBg"))
b2=b2==null?b1:A.k.N(b2)
return C.eo(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+61}
C.ccY.prototype={
$1(d){return d.hB()},
$S:z+62}
C.ccZ.prototype={
$1(d){return d.ag()},
$S:z+63}
C.ccV.prototype={
$1(d){return B.t(d)},
$S:17}
C.ccW.prototype={
$1(d){return B.t(d)},
$S:17}
C.ccX.prototype={
$1(d){return C.h7G(B.a1(d,x.N,x.z))},
$S:z+64}
C.cdp.prototype={
$1(d){return d.a===this.a},
$S:z+65}
C.cdq.prototype={
$0(){return A.d.gL(D.a1R)},
$S:z+66}
C.cdk.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.cc(d.f))w.n(0,u,d.hB())},
$S:z+7}
C.cdj.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdf.prototype={
$1(d){return new B.K(d,new C.cdg(),B.U(d).k("K<1,S>")).fa(0,new C.cdh())},
$S:z+69}
C.cdg.prototype={
$1(d){return d.f},
$S:z+70}
C.cdh.prototype={
$2(d,e){return d.cc(e)?d:e},
$S:704}
C.cdi.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.hD7(d)},
$S:z+71}
C.cdl.prototype={
$1(d){return!this.a.t(0,d.a)},
$S:z+2}
C.cdm.prototype={
$2(d,e){return e.f.aL(0,d.f)},
$S:z+21}
C.cdn.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fAs.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this
for(w=i.a.z,v=w.length,u=i.c,t=i.d,s=i.b,r=0;r<w.length;w.length===v||(0,B.L)(w),++r){q=w[r]
p=q.a
if(s.ai(0,p))continue
for(o=u.z,n=o.length,m=q.b,l=0;l<o.length;o.length===n||(0,B.L)(o),++l){k=o[l]
j=k.a
if(t.t(0,j)||k.b!==m)continue
if(d.$2(k,q)){s.n(0,p,k)
t.J(0,j)
break}}}},
$S:z+73}
C.fAo.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fAp.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fAq.prototype={
$2(d,e){var w
if(d.b===D.cQ){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fAr.prototype={
$2(d,e){return d.b===D.f0&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.cd3.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.i1t(b2,b3),b5=B.a4(b4).k("bc<2>")
b5=B.cD(new B.bc(b4,b5),new C.cd2(),b5.k("J.E"),x.N)
w=B.db(b5,B.a4(b5).k("J.E"))
b1=b1.e
v=A.pC.aw(0,A.k.D(b1,0,1))
u=new C.cd4()
b5=B.aq(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.aq(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.cd5(a9,b7.d)
r=new C.cd6(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.L)(b2),++m){l=b2[m]
if(w.t(0,l.a))continue
k=A.ju.aw(0,A.k.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kC(A.k.D(1-k,0,1),B.dU(B.eb(A.A,r.$1(l),1-k*0.06,a8,a8),new B.u(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.L)(b2),++m){i=b2[m]
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
if(a2===D.f0){a4=i.hB()
a4.ay=B.aq(B.b0(l.ay),B.b0(i.ay),v).l()
a4.ch=B.aq(B.b0(l.ch),B.b0(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.lq&&l.at==i.at?r.$1(i):new B.an(A.W,a8,A.b_,A.r,B.a([new B.kC(A.k.D(o,0,1),r.$1(l),a8),new B.kC(A.k.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iF(B.w7(a3),a8,A.A,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.k.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cl)a7=D.mB
p.push(s.$5(i.c,i.d,i.e,i.f,C.hje(a7,a6,r.$1(i))))}}return B.c_(new B.an(A.W,a8,A.aa,A.r,p,a8),new B.o(a8,a8,a8,a8,a8,new B.a8(A.a3,A.a7,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bd)},
$S:433}
C.cd2.prototype={
$1(d){return d.a},
$S:z+22}
C.cd4.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b0(w)},
$S:z+76}
C.cd5.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1689}
C.cd6.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a7h(v,C.b0o(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dFs.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.eb(new B.da(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:46}
C.cdc.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.cdd.prototype={
$1(d){return d.a===this.a.a},
$S:z+20}
C.fDg.prototype={
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
C.fCn.prototype={
$1(d){return new C.acW(this.a,this.b,null)},
$S:z+78}
C.eot.prototype={
$0(){return this.a.Pu(this.b,C.i4P(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eou.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.Pu(this.b,C.i4R(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eov.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.Pu(this.b,C.i4Q(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eow.prototype={
$0(){Y.hiZ()
B.a5(this.a,!1).O(null)},
$S:0}
C.cd1.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.l(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1690}
C.cd0.prototype={
$2(d,e){var w,v=this,u=null,t=B.dM(d,A.nw),s=t==null?u:t.b,r=s==null?2:s,q=e.b,p=isFinite(q)?q:0,o=p<=0?u:A.k.V(A.k.D(p*Math.max(B.lM(r),5),96,1500))
t=v.b
w=v.c||v.d?A.bR:A.du
return B.fL(t,A.A,o,new C.cd_(),A.cm,w,!0,u,!1,new B.cx("img_"+v.a.c.a+"_"+t.length,x.W),u)},
$S:1691}
C.cd_.prototype={
$3(d,e,f){return D.aaU},
$S:228}
C.fAn.prototype={
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
r=B.B(new B.K(r,new C.fAm(e.b,e.d),u),u.k("ak.E"))
return B.bw(s,B.c_(new B.an(A.W,t,A.aa,A.r,r,t),new B.o(v,t,t,t,t,w,A.n),A.bd),A.aq)},
$S:1692}
C.fAm.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b0o(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fkU.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cM(r.b,new C.fkS(d))
w=B.aI(d,A.bU,x.w).w
v=B.m(22)
u=B.I(A.bF,A.q,1)
t=B.a([new B.ac(0,A.G,A.w.j(0.45),A.fM,28)],x.V)
s=x.p
return new B.cZ(e,!1,B.av(B.aG(!1,A.a1,!0,q,B.p(q,B.v(B.a([B.A(B.a([B.E(B.v(B.a([B.d(r.c,q,q,q,q,q,q,A.l1,q,q,q),A.at,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.l(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a5,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.F,q,A.e,A.j,0,A.p),1),B.bK(!1,A.zz,q,q,!0,q,q,new C.fkT(p,d),q,B.fv(q,q,A.bk,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.F4,q,new B.b7(B.m(12),A.Y),q,q,q,q,q,q))],s),A.m,q,A.e,A.j,0,q,q),A.aA,r.d],s),A.m,q,A.e,A.Q,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.aB,q,u,v,t,q,A.n),q,q,q,A.fJ,A.Fd,q,q,q),A.f,A.K,0,q,q,q,q,q,A.ag),q,q,q),q)},
$C:"$3",
$R:3,
$S:258}
C.fkS.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a5(w,!0).pv())B.a5(w,!0).eJ()},
$S:0}
C.fkT.prototype={
$0(){var w=this.a.a
if(w!=null)w.a7(0)
B.a5(this.b,!0).eJ()},
$S:0}
C.f3b.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dU(u.b,new B.u((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dU(u.b,new B.u(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dU(u.b,new B.u(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dU(u.b,new B.u(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.dc(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.dc(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fA(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.jX(r*3.14159)
return B.fs(A.A,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fA(r*1.2)
s.jX(r*0.5)
return B.fs(A.A,B.dc(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fA(-r*1.4)
return B.fs(A.a7,B.dc(u.b,r),t,s,!0)
case 12:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(B.eb(A.A,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jv(u.b,A.r,new C.aII(r,t))],x.p),t)
case 15:return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.jv(u.b,A.r,new C.aII(1-r,t))],x.p),t)
case 16:v=D.b2I.aw(0,r)
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.eb(A.A,B.dc(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(B.ek(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dm()
s.mI(r*6.28)
s.jH(r,r,r,1)
return B.fs(A.A,u.b,t,s,!0)
case 20:return B.eG(A.A,(r-0.5)*0.35,new B.an(A.W,t,A.b_,A.r,B.a([u.c,B.dc(u.b,r)],x.p),t),t)}},
$S:60}
C.dRt.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRs.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cs(0)}},
$S:11}
C.dRr.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hje(v,w,e)},
$S:60}
C.ccU.prototype={
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
q=B.B(new B.K(v,new C.ccT(q,w,e.b,e.d),s),s.k("ak.E"))
return B.c_(new B.an(A.W,r,A.aa,A.f,q,r),new B.o(t,r,r,r,r,u,A.n),A.bd)},
$S:433}
C.ccT.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cl?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a7h(m,new C.Uu(d,C.b0o(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.d3Y.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.d3X(w))},
$S:11}
C.d3X.prototype={
$0(){return this.a.d++},
$S:0}
C.ebZ.prototype={
$2(d,e){var w,v=null,u=A.o.an(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aMA.t(0,A.d.gL(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.i1c(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dm()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.e4(0,w*7,0,1)
s.fA(Math.sin(t)*0.32)
s.jX(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.jH(w,w,w,1)
return B.fs(A.A,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dU(B.eb(A.A,e,1+Math.sin(t*0.5)*0.05,v,v),new B.u(s*14,w*10))
default:s=Math.sin(t)
return B.dc(B.eb(A.A,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:60}
C.eTj.prototype={
$1(d){var w
$.W()
w=B.M()
w.b=A.ae
w.c=d
w.e=A.fA
return w},
$S:1693}
C.fxY.prototype={
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
if(q==="framed"||q==="gold")w.push(B.b3(r,r,r,new C.bqg(u,t,r),A.au))
w.push(B.nr(s.d,A.aq,new C.bej(u,t,r)))
if(!p)w.push(B.b3(r,r,r,new C.bpg(u,q,t,r),A.au))
return B.av(new B.a7(v.a,v.b,new B.an(A.W,r,A.b_,A.r,w,r),r),r,r,r)},
$S:235}
C.fnJ.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:323}
C.euH.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(S.CA(t.a.a.c),$async$$0)
case 3:s=e
r=J.a6(s)
if(r.gam(s)){u=null
w=1
break}u=r.dL(s,new C.euF(),new C.euG(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1694}
C.euF.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:197}
C.euG.prototype={
$0(){return J.fo(this.a)},
$S:1696}
C.er4.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.er5.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.er6.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.esF.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.est.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.esu.prototype={
$1(d){return d.hB()},
$S:z+81}
C.eqs.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.etN.prototype={
$0(){this.a.tr()},
$S:0}
C.euD.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oc()
w.JP()},
$S:0}
C.esD.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oc()
w.JP()},
$S:0}
C.euq.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eur.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eus.prototype={
$1(d){return d.a},
$S:z+22}
C.eut.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b4,A.aN),$.aw())},
$S:254}
C.euu.prototype={
$0(){return B.jM(!0,null,!0,!0,null,null,!1)},
$S:706}
C.epR.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.euE.prototype={
$0(){},
$S:0}
C.erM.prototype={
$0(){var w=this.a
w.e=this.b.hB()
w.f=0
w.r=null
w.db=!1
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xh()
w.JP()},
$S:0}
C.epP.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.xh()},
$S:0}
C.epQ.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.xh()},
$S:0}
C.es8.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.es9.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xh()
w.JP()
w.z="Home"},
$S:0}
C.esa.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.erL.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,A.TB,w,w,!0,w,w,new C.erK(d),w,w)],x.p),w,w,w,D.fsh,w,w,w,w,D.f9Q,w)},
$S:19}
C.erK.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.erI.prototype={
$1(d){var w=null
return B.ej(B.a([B.bK(!1,A.TB,w,w,!0,w,w,new C.erH(d),w,w)],x.p),w,w,w,D.fdM,w,w,w,w,D.fby,w)},
$S:19}
C.erH.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.erJ.prototype={
$0(){},
$S:0}
C.er0.prototype={
$1(d){return this.a.aZP(C.bBn(d))},
$S:z+7}
C.er1.prototype={
$1(d){return this.a.aej(C.bBn(d))},
$S:z+7}
C.erS.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.av(B.p(w,w,A.f,w,w,new B.o(A.b3,w,w,B.m(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.by,D.fsl,A.at,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.by,new C.Pb(A.vx,D.avM,"HATI YA KUHOWA","Hati ya mahari",new C.erN(d),w),A.S,new C.Pb(A.h8,D.d_K,"HATI YA KUHOWESHA","Hati ya kupokea",new C.erO(d),w),A.S,new C.Pb(A.i_,D.cMP,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.erP(d),w),A.S,new C.Pb(A.hL,D.cL8,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.erQ(d),w)],v)
if(this.a.gaaP())A.d.v(u,B.a([A.S,new C.Pb(A.iX,D.cwf,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.erR(d),w)],v))
return B.bn(!0,B.cd(B.v(u,A.aj,w,A.e,A.Q,0,A.p),A.r,w,A.y,w,E.xB,w,w,A.ah),!0,!1,A.af,!0,!0)},
$S:26}
C.erN.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhowa")
return null},
$S:0}
C.erO.prototype={
$0(){B.a5(this.a,!1).O("hati_kuhoweya")
return null},
$S:0}
C.erP.prototype={
$0(){B.a5(this.a,!1).O("marriage_agreement")
return null},
$S:0}
C.erQ.prototype={
$0(){B.a5(this.a,!1).O("hati_malipo_awamu")
return null},
$S:0}
C.erR.prototype={
$0(){B.a5(this.a,!1).O("hati_kiapo_uongozi")
return null},
$S:0}
C.erT.prototype={
$0(){var w=this.a
w.e=this.b.hB()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xh()},
$S:0}
C.epT.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.epU.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a9(r)
A.d.v(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a0(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.na(r,v.f+1,q);++v.f
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
C.es3.prototype={
$1(d){return d.b===D.lq},
$S:z+4}
C.es4.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gL(v).go
w.b=A.d.gL(v).id
return new B.e0(new C.es1(w,this.a,v),null)},
$S:21}
C.es1.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.es2(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.M,j=l?A.aR:A.ak,i=l?A.bm:A.bM,h=l?A.M:A.c,g=B.m(28),f=B.I(l?A.bF:A.aL,A.q,1),e=x.p,d=B.A(B.a([B.E(B.v(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.l(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bB,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.F,q,A.e,A.j,0,A.p),1),B.aH(q,q,q,q,B.X(A.cB,j,q,q,q,q),q,q,q,new C.erY(a2),q,q,q,q,q,q)],e),A.m,q,A.e,A.j,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.BV[w]
v.a=null
t=v.a=u.a
a1.push(new C.bgO(t,u.b,p.a===t,i,k,new C.erZ(v,m),q))}a1=B.bY(A.bz,a1,A.bq,10,10)
v=B.d("RING",q,q,q,q,q,q,B.l(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.BQ[w]
s.a=null
t=s.a=r.a
u.push(new C.bgN(t,r.b,p.b===t,k,j,new C.es_(s,m),q))}return B.bn(!0,B.p(q,B.cd(B.v(B.a([d,A.aQ,a0,A.S,a1,A.by,v,A.S,B.bY(A.bz,u,A.bq,12,12),A.by,new B.a7(1/0,48,B.ey(D.bPF,D.fuI,new C.es0(o,n),B.dg(q,q,q,q,q,q,q,q,q,A.aE,q,q,q,q,new B.b7(B.m(16),A.Y),D.aXQ,q,q,q,q)),q)],e),A.F,q,A.e,A.Q,0,A.p),A.r,q,A.y,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.tx,D.brU,q,q,q),!0,!1,A.af,!0,!0)},
$S:85}
C.es2.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.erW(w.a,d,e))
w.b.d3(new C.erX(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1699}
C.erW.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.erX.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.erY.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.erZ.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.es_.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.es0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A4.Gk(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.d3(new C.erV(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.erV.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.es6.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.es7.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.es5(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.na(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xh()},
$S:0}
C.es5.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eso.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.esp.prototype={
$1(d){return d.w},
$S:z+82}
C.esq.prototype={
$2(d,e){return d>e?d:e},
$S:88}
C.esr.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.M,s=u?A.aR:A.ak,r=u?A.bm:A.aP,q=u?A.M:A.c,p=B.m(28),o=B.I(u?A.bF:A.aL,A.q,1),n=B.aI(d,A.bU,x.w).w,m=w.a,l=x.p,k=w.b
return B.bn(!0,B.p(v,B.v(B.a([B.A(B.a([B.p(v,D.bJq,A.f,v,v,D.aZd,v,38,v,v,v,v,v,38),A.bf,B.E(B.v(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.l(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.l(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.F,v,A.e,A.j,0,A.p),1),B.aH(v,v,v,v,B.X(A.cB,s,v,v,v,v),v,v,v,new C.esl(d),v,v,v,v,v,v)],l),A.m,v,A.e,A.j,0,v,v),A.aA,new B.dq(1,A.cn,B.hH(v,new C.esm(m,k,w.c,s,w.d,t,r),k.length,A.fy,v,A.ah,new C.esn(),!0),v)],l),A.F,v,A.e,A.Q,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.tx,A.Yg,v,v,v),!0,!1,A.af,!0,!0)},
$S:26}
C.esl.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esn.prototype={
$2(d,e){return A.ac},
$S:36}
C.esm.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.l(q,q,o?A.aE:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cv
t=B.l(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aH(q,q,q,q,D.bMv,q,q,q,new C.esj(s,w,p),q,q,q,q,"Add an icon",q)
return B.v(B.a([new B.C(D.bu7,n,q),B.aM(q,A.T,!1,q,!0,A.r,q,B.aN(),v,q,q,q,q,q,2,B.br(q,new B.b4(4,B.m(16),A.Y),q,A.eP,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b4(4,B.m(16),D.aXv),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ai,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.esk(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.a9,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a4,q,A.am,q,q,q,q)],x.p),A.F,q,A.e,A.j,0,A.p)},
$S:707}
C.esj.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.i6W(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.gew()?p.a:q.a.length
n=p.gew()?p.b:q.a.length
m=A.a.oH(q.a,o,n,s)
r.bO(0,new B.bb(m,B.h8(A.bw,o+s.length),A.aN))
l.aio(k,m)
l.pg()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esk.prototype={
$1(d){var w=this.a
w.aio(this.b.a,d)
w.pg()},
$S:2}
C.ess.prototype={
$0(){},
$S:0}
C.erU.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eq9.prototype={
$0(){},
$S:0}
C.eqa.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hkx(this.b,w,!0)
w=this.a
w.r=null
w.xh()},
$S:0}
C.eqb.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.eqc.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bn(v,new C.eq8(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.na(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.xh()},
$S:0}
C.eq8.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+6}
C.esy.prototype={
$1(d){return B.oL(new C.esx(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:137}
C.esx.prototype={
$2(d,e){var w=null,v=x.p
return B.v(B.a([new B.C(E.ahE,B.v(B.a([D.fpV,A.an,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.l(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.F,w,A.e,A.j,0,A.p),w),B.E(B.ie(!0,w,e,A.y,D.eNP,new C.esw(this.a,this.b),20,A.tA,w,A.ah,!1),1)],v),A.aj,w,A.e,A.j,0,A.p)},
$S:435}
C.esw.prototype={
$2(d,e){var w=null,v=D.GI[e],u=C.hD2(v),t=B.m(16),s=B.m(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.I(q.j(0.45),A.q,1),o=q.j(0.2),n=B.m(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.l(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fK,w,w,w)],m)
if(u)A.d.v(n,B.a([A.bp,B.p(w,D.eI_,A.f,w,w,new B.o(A.dS.j(0.85),w,w,B.m(8),w,w,A.n),w,w,w,w,A.na,w,w,w)],m))
return B.aG(!1,A.a1,!0,w,B.aL(!1,t,!0,B.p(w,B.v(B.a([B.A(n,A.m,w,A.e,A.j,0,w,w),A.b6,B.d(v.b,w,w,w,w,w,w,B.l(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.l(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.F,w,A.e,A.j,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a8(A.a3,A.a7,A.x,r,w,w),A.n),w,w,w,w,A.bj,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.esv(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:75}
C.esv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.cdb(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a5(s,!1).O(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esz.prototype={
$0(){var w=this.a
w.e=this.b.hB()
w.f=0
w.r=null
w.db=!0
A.d.a9(w.ax)
A.d.a9(w.ay)
w.xh()},
$S:0}
C.eoO.prototype={
$0(){var w,v=this.a,u=v.gqh(),t=C.rn(4294967295,null,0,0,null,C.cC(),D.mA,"","","",D.dd),s=this.b
C.cdo(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Ct){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eq7.prototype={
$0(){var w,v,u,t,s,r,q=this.b.ag()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aV(w),u=x.f;v.C();){t=v.gT(v)
if(u.b(t)){s=Date.now()
r=$.iZ
$.iZ=r+1
J.aF(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.ck(v.e.r,v.f+1,C.h7G(q));++v.f},
$S:0}
C.eq5.prototype={
$0(){var w=this.a
A.d.cB(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.esH.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cB(v.e.r,u),s=this.c
A.d.ck(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eq1.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.d,new C.eq0(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eq0.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.esG.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.S(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.epS.prototype={
$0(){var w=this.a.r
return new B.ar(new B.bb(w,A.b4,A.aN),$.aw())},
$S:254}
C.eqt.prototype={
$0(){return B.jM(!0,null,!0,!0,null,null,!1)},
$S:706}
C.euo.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eup.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.asx(w).fJ()
v=u.W9(w)
v.st8(B.h8(A.bw,v.a.a.length))},
$S:9}
C.etO.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.X8(v)
if(u!=null&&u.b===D.cQ)w.W9(u).saV(0,u.r)}else w.w=null},
$S:0}
C.eoP.prototype={
$0(){var w=C.cC(),v=this.a,u=C.eo(A.bg,!1,v.gqh().e.l(),A.aD,"",4280640491,24,A.bl,A.a5,"",0.22,w,null,"","",0,!1,"",0,D.be,4280172719,2,"Tap to edit text",0,0,"",D.cl,D.cQ,0.7,0.15,0.2)
A.d.J(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eoM.prototype={
$0(){var w=C.cC(),v=this.a,u=C.eo(A.bg,!1,4279310375,A.aD,"",v.gqh().c.j(0.25).l(),24,A.bl,A.a5,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqh().c.l(),2,"",0,0,"",D.cl,D.f0,0.25,0.3,0.3)
A.d.J(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eoC.prototype={
$0(){var w=C.eo(A.bg,!1,4279310375,A.aD,"",4280640491,24,A.bl,A.a5,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cl,D.lq,0.6,0.2,0.18),v=this.a
A.d.J(v.gdr().z,w)
v.r=w.a},
$S:0}
C.eoz.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.bWh],x.p)
for(w=J.aV(this.a);w.C();){v=w.gT(w)
u=A.a.i(v.b)
if(u.length===0)u="My Bio"
t=v.gaj_().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,D.bH8,r,r,r,r,new C.eoy(d,v),!1,r,r,r,r,r,new B.x(""+t+" links"+s,r,r,r,r,r,r,A.a2,r,1,r,r),r,new B.x(u,r,r,r,r,r,r,r,r,r,r,r),r,r,r))}return B.bn(!0,B.cz(q,r,r,r,r,A.ah,!0),!0,!1,A.af,!0,!0)},
$S:26}
C.eoy.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eoA.prototype={
$0(){var w=A.k.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.R.ao(u.ag(),null),s=C.eo(A.bg,!1,4279310375,A.aD,u.b,4280640491,24,A.bl,A.a5,"",0.86,v,null,"","",0,!1,"",0,D.be,4280172719,2,t,0,0,"",D.cl,D.a4m,w,0.5-w/2,0.07)
t=this.a
A.d.J(t.gdr().z,s)
t.r=s.a},
$S:0}
C.eq3.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eq4.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bn(v.gdr().z,new C.eq2(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.aw()
w.P$=0}v=v.CW.W(0,u)
if(v!=null)v.q()},
$S:0}
C.eq2.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.epg.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.cQ)s.Q=t.c.l()
else if(w===D.f0){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eph(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.L)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eph.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.epl.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.epm(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.L)(s),++u)v.$1(s[u])}else{t=s.gdr()
if(t!=null)v.$1(t)}},
$S:0}
C.epm.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.epj.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.cQ){s.Q=t.c
return}w=new C.epk(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.L)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.epk.prototype={
$1(d){var w,v,u
for(w=A.d.gaf(d.z),v=new B.fi(w,new C.epi()),u=this.a;v.C();)w.gT(0).Q=u},
$S:z+1}
C.epi.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.epf.prototype={
$0(){return C.cdo(this.b,this.c,this.a.gqh())},
$S:0}
C.esi.prototype={
$0(){return A.d.ck(this.a.d,0,this.b)},
$S:0}
C.eux.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euy.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.euz.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.euA.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.ck(s,0,v.b)
else{w=A.d.bd(s,new C.euw(v))
if(w>=0)t.d[w]=v.b}if(v.a.gRS()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hB()
t.f=0
t.r=null
t.db=!1
A.d.a9(t.ax)
A.d.a9(t.ay)
t.xh()
t.JP()}},
$S:0}
C.euw.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eu3.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaT(),s=w.b,r=u.aaU(A.f8,A.kR,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.m(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.I(A.c.j(0.08),A.q,1),n=x.p
p=B.a([t,A.N,r,A.by,B.p(v,B.A(B.a([B.E(u.aTY(w.c,A.ak),1),new B.C(A.fp,B.p(v,D.bHe,A.f,v,v,new B.o(A.f8.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aTY(s,A.f8),1)],n),A.m,v,A.e,A.j,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a8(A.ax,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bC,v,v,v),A.by,u.aU0(A.f8,d,D.bDm,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.v(p,B.a([A.S,u.bW5(A.aS,d,A.tO,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aA)
p.push(u.aTZ(d,"Not now"))
return new C.Jy(B.v(p,A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.eu2.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.Jy(B.v(B.a([v.aaT(),A.N,v.aaU(A.aS,D.bD1,"Pick which saved document should receive the details.","Choose "+this.b),A.aQ,new B.cS(new B.aY(0,1/0,0,B.aI(d,A.bU,x.w).w.a.b*0.42),B.hH(w,new C.eu0(v,u,d),u.length,w,w,A.ah,new C.eu1(),!0),w),A.aA,v.aTZ(d,"Cancel")],x.p),A.aj,w,A.e,A.Q,0,A.p),w)},
$S:z+9}
C.eu1.prototype={
$2(d,e){return A.S},
$S:36}
C.eu0.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.m(16),t=A.c.j(0.05),s=B.m(16),r=B.I(A.c.j(0.08),A.q,1),q=x.p
return B.aG(!1,A.a1,!0,w,B.aL(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.amx,A.f,w,w,new B.o(w,w,w,B.m(12),w,D.bTh,A.n),w,42,w,w,w,w,w,42),A.bf,B.E(B.v(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nt,w,w,w),A.cS,B.d("Updated "+this.a.Pv(v.f),w,w,w,w,w,w,B.l(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a5,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.F,w,A.e,A.j,0,A.p),1),B.X(A.ex,A.c.j(0.35),w,w,w,w)],q),A.m,w,A.e,A.j,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bC,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eu_(this.c,v),w,w,w,w,w,w,w),A.f,A.K,0,w,w,w,w,w,A.ag)},
$S:75}
C.eu_.prototype={
$0(){B.a5(this.a,!1).O(this.b.a)
return null},
$S:0}
C.etX.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.aaT()
t=t.aaU(A.aH,A.tX,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.Jy(B.v(B.a([s,A.N,t,A.by,B.A(B.a([B.E(B.dT(A.a7F,new C.etV(d),B.dg(u,u,u,u,u,u,u,u,u,A.c,u,u,A.ck,u,new B.b7(B.m(14),A.Y),new B.ay(w,1,A.q,-1),u,u,u,u)),1),A.av,B.E(B.bH(D.fc7,new C.etW(d),B.bl(A.f8,u,u,u,A.c,u,A.ck,u,new B.b7(B.m(14),A.Y),u,u,u)),1)],v),A.m,u,A.e,A.j,0,u,u)],v),A.aj,u,A.e,A.Q,0,A.p),u)},
$S:z+9}
C.etV.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.etW.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.etZ.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.aaT(),s=w.b,r=u.aaU(A.aV,A.ee,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.atS("Names",""+w.c),1),A.ab,B.E(u.atS("Fields",""+w.d),1),A.ab,B.E(u.atS("Signatures",""+w.e),1)],q),A.m,v,A.e,A.j,0,v,v),o=B.bl(A.bk,v,v,v,A.c,v,A.xr,v,new B.b7(B.m(14),A.Y),v,v,v)
return new C.Jy(B.v(B.a([t,A.N,r,A.aQ,p,A.by,B.bH(B.d("Open "+s,v,v,v,v,v,v,A.nr,v,v,v),new C.etY(d),o),A.S,u.aU_(d,"Stay here",!1)],q),A.aj,v,A.e,A.Q,0,A.p),v)},
$S:z+9}
C.etY.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.eqX.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eqW.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.etP.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.eun.prototype={
$1(d){var w=this.a,v=this.b
return new C.a__(A.d.dL(w.d,new C.eul(v),new C.eum(v)).hB(),w.f,null)},
$S:z+84}
C.eul.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eum.prototype={
$0(){return this.a},
$S:z+85}
C.eoH.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.C(A.bC,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.ho,w,w,w),w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bJ0,w,w,w,w,new C.eoF(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.l(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fa9,w,w,w)],x.p)
if(v>1)t.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bK9,w,w,w,w,new C.eoG(d),!1,w,w,w,w,w,D.fvT,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dm,w,w,w),w,w,w))
return B.bn(!0,B.v(t,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eoF.prototype={
$0(){B.a5(this.a,!1).O("scroll")
return null},
$S:0}
C.eoG.prototype={
$0(){B.a5(this.a,!1).O("split")
return null},
$S:0}
C.eoI.prototype={
$0(){var w=this.b,v=w.c,u=C.eo(A.bg,!1,4279310375,A.aD,v,4280640491,24,A.bl,A.a5,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.be,4280172719,2,v,0,0,"",D.cl,D.Ro,0.88,0.06,0.08)
v=this.a
A.d.J(v.gdr().z,u)
v.r=u.a},
$S:0}
C.eoJ.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iZ
$.iZ=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iZ
$.iZ=k+1
m.push(new C.eJ(""+1000*l+"_"+k,D.Ro,0.04,0.06,0.92,0.88,v,24,A.a5,A.bl,A.aD,4279310375,A.bg,u,D.be,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cl,0,"","","","","",!1,0))
A.d.ck(j.e.r,i+q-1,new C.lD(""+1000*p+"_"+o,r+n,"",D.q5,4294967295,null,D.dd,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eoN.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.ku(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.eo(A.bg,!1,4279310375,A.aD,t,4280640491,24,A.bl,A.a5,"",0.22,v,this.b.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cl,D.kW,0.35,0.55,0.62)
A.d.J(u.gdr().z,w)
u.r=w.a},
$S:0}
C.eoE.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b1D(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.eo(A.bg,!1,4279310375,A.aD,"marriage_sign_placed_"+A.a.ec(v.db,"marriage_sign_",""),4280640491,24,A.bl,A.a5,"",r,w,o.a,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cl,D.kW,s,u,t)
A.d.J(p.gdr().z,q)
A.d.bn(p.gdr().z,new C.eoD(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.t(v.db,"rais")){p.toString
C.i0W(p)}},
$S:0}
C.eoD.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.esE.prototype={
$0(){var w=this.a,v=this.b
w.b1D(v)
this.c.at=v.a
w.r=null},
$S:0}
C.euv.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.er_.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bn(r.z,new C.eqZ())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eqZ.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||A.a.a0(w,"marriage_field_mahari_4:")},
$S:z+4}
C.epp.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.epq.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.tr()},
$S:9}
C.eoB.prototype={
$0(){var w=C.eo(A.bg,!1,4279310375,A.aD,"HD Photo",4280640491,24,A.bl,A.a5,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.be,4280172719,2,"",0,0,"",D.cl,D.lq,0.8,0.1,0.1),v=this.a
A.d.J(v.gdr().z,w)
v.r=w.a},
$S:0}
C.eqr.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eoK.prototype={
$0(){var w=this.a,v=this.b
A.d.J(w.gdr().z,v)
w.r=v.a},
$S:0}
C.eoT.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eoU.prototype={
$0(){var w=this.b.hB(),v=C.cC(),u=A.k.D(w.c+0.04,0,0.92),t=A.k.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.eo(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.J(t.gdr().z,f)
t.r=f.a},
$S:0}
C.eoV.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.eoS(v))
if(u>=0&&u<w.length-1){A.d.cB(w,u)
A.d.ck(w,u+1,v)}},
$S:0}
C.eoS.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ep5.prototype={
$0(){var w=this.a.gdr().z,v=this.b,u=A.d.bd(w,new C.eoR(v))
if(u>0){A.d.cB(w,u)
A.d.ck(w,u-1,v)}},
$S:0}
C.eoR.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.ep8.prototype={
$0(){return this.a.as=A.bg},
$S:0}
C.ep9.prototype={
$0(){return this.a.as=A.L},
$S:0}
C.epa.prototype={
$0(){return this.a.as=A.dM},
$S:0}
C.epb.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.epc.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.epd.prototype={
$1(d){return d.b===D.cQ},
$S:z+4}
C.epe.prototype={
$1(d){return d.length!==0},
$S:3}
C.eoW.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.J(v,C.CF(w.gqh().c.j(0.18).l(),0.1,u,D.be,0,2,1,0,0))
u=w.gdr().z
v=C.cC()
A.d.J(u,C.iS(A.bg,!1,w.gqh().d.l(),A.aD,18,A.bl,A.H,0.07,v,"Document Header",0,D.dd,0.9,0.05,0.02))},
$S:0}
C.eoX.prototype={
$0(){var w,v=this.a,u=v.gdr().z,t=C.cC()
A.d.J(u,C.CF(v.gqh().c.j(0.12).l(),0.1,t,D.be,0,2,1,0,0.9))
t=v.gdr().z
u=C.cC()
w=C.bC5()
A.d.J(t,C.iS(A.L,!1,v.gqh().e.l(),A.aD,12,A.bl,A.a5,0.06,u,"Footer \xb7 "+w,0,D.dd,0.9,0.05,0.92))},
$S:0}
C.eoY.prototype={
$0(){A.d.J(this.a.gdr().z,C.CF(1727914055,0.12,C.cC(),D.be,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eoZ.prototype={
$0(){var w=4279310375
A.d.J(this.a.gdr().z,C.CF(w,0.08,C.cC(),D.be,w,2,0.5,0.2,0.4))},
$S:0}
C.ep_.prototype={
$0(){var w=this.a,v=w.gdr().z,u=C.cC()
A.d.J(v,C.CF(w.gqh().c.j(0.35).l(),0.12,u,D.Cu,4280640491,2,0.2,0.15,0.55))
A.d.J(w.gdr().z,C.iS(A.bg,!1,4279310375,A.aD,18,A.bl,A.a5,0.15,C.cC(),"Important note",0,D.q6,0.5,0.38,0.52))},
$S:0}
C.ep0.prototype={
$0(){var w=this.a
A.d.J(w.gdr().z,C.CF(4294507260,0.78,C.cC(),D.be,4291548641,1.5,0.84,0.08,0.1))
A.d.J(w.gdr().z,C.iS(A.bg,!1,4279179050,A.aD,16,A.bl,A.a5,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bC5()+"\n\nSubject:\n\nBody text\u2026",0,D.dd,0.76,0.12,0.14))},
$S:0}
C.ep1.prototype={
$0(){var w=this.a
A.d.J(w.gdr().z,C.CF(4294897802,0.28,C.cC(),D.be,4294626325,2,0.3,0.62,0.12))
A.d.J(w.gdr().z,C.iS(A.bg,!1,4285611794,A.aD,15,A.bl,A.a5,0.24,C.cC(),"Sticky note",0,D.aFg,0.26,0.64,0.14))},
$S:0}
C.ep2.prototype={
$0(){var w=4280640491,v=this.a
A.d.J(v.gdr().z,C.CF(4293060848,0.04,C.cC(),D.be,4291548641,2,0.8,0.1,0.48))
A.d.J(v.gdr().z,C.CF(w,0.04,C.cC(),D.be,w,2,0.55,0.1,0.48))},
$S:0}
C.ep3.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdr().z,C.iS(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.HE,0.42,0.06,0.18))
A.d.J(v.gdr().z,C.iS(A.bg,!1,w,A.aD,18,A.bl,A.a5,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.ub,0.42,0.52,0.18))},
$S:0}
C.ep4.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdr().z,C.CF(858088427,0.62,C.cC(),D.be,4280640491,2,0.42,0.05,0.18))
A.d.J(v.gdr().z,C.CF(856004201,0.62,C.cC(),D.be,4278556265,2,0.42,0.53,0.18))
A.d.J(v.gdr().z,C.iS(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option A",0,D.dd,0.36,0.08,0.2))
A.d.J(v.gdr().z,C.iS(A.bg,!1,w,A.aD,20,A.bl,A.H,0.1,C.cC(),"Option B",0,D.dd,0.36,0.56,0.2))},
$S:0}
C.ep6.prototype={
$0(){var w=4279310375,v=this.a
A.d.J(v.gdr().z,C.CF(4294967295,0.36,C.cC(),D.be,w,2,0.24,0.38,0.28))
A.d.J(v.gdr().z,C.iS(A.L,!1,w,A.aD,14,A.bl,A.a5,0.12,C.cC(),"[ QR CODE ]",0,D.dd,0.24,0.38,0.4))},
$S:0}
C.ep7.prototype={
$0(){return C.cdo(this.b,D.Rp,this.a.gqh())},
$S:0}
C.eqq.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.a6_.t(0,d),t=this.a
return t.b6z(d,v===d,A.aZ,this.c,new C.eqp(t,u,d,w),u)},
$S:z+25}
C.eqp.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.o2(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bCT(r,new C.eqo(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eqo.prototype={
$0(){return this.a.d3(new C.eqn(this.b,this.c))},
$S:0}
C.eqn.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eoL.prototype={
$0(){var w,v=this.a,u=v.gqh(),t=C.rn(4294967295,null,0,0,null,C.cC(),D.mA,"","","",D.dd),s=this.b
C.cdo(t,s,u)
w=v.gdr()
if(w!=null&&s!==D.Ct){t.e=w.e
t.f=w.f}A.d.ck(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.ept.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.i6Z(p,q.d,s,new C.eps(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.tr(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eps.prototype={
$1(d){return this.bjd(d)},
bjd(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.epr(t,d))
w=2
return B.b(t.tr(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+87}
C.epr.prototype={
$0(){var w,v,u
for(w=J.aV(this.b),v=this.a;w.C();){u=w.gT(w)
A.d.ck(v.d,0,u)}},
$S:0}
C.epu.prototype={
$0(){return this.a.bH5()},
$S:0}
C.epv.prototype={
$0(){return this.a.aPg("Class Presentation",!0)},
$S:0}
C.epw.prototype={
$1(d){return this.a.bI1(d.b,this.b,d.a)},
$S:z+88}
C.eq6.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aI(w,A.bU,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.esh.prototype={
$1(d){return new B.C(new B.Q(0,0,0,B.aI(d,A.eD,x.w).w.f.d),new B.e0(new C.esg(this.a,this.b),null),null)},
$S:59}
C.esg.prototype={
$2(d,e){return B.oL(new C.esf(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:656}
C.esf.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.aB:A.c,s=B.I(u?A.bF:A.aL,A.q,1),r=B.p(v,v,A.f,v,v,new B.o(A.b3,v,v,B.m(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.v(B.a([A.S,r,new B.C(A.ah5,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.l(v,v,u?A.c:A.M,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b6,B.bK(!1,A.zz,v,v,!0,v,v,new C.esd(w.c),v,v)],q),A.m,v,A.e,A.j,0,v,v),v),B.E(B.cz(B.a([p.aS_(u,!0,!0,new C.ese(p,w.d))],q),e,D.bpN,v,v,A.ah,!1),1)],q),A.m,v,A.e,A.j,0,A.p),A.f,v,v,new B.o(t,v,s,A.kC,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:114}
C.esd.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ese.prototype={
$0(){this.b.$1(new C.esb())
var w=this.a
if(w.c!=null)w.m(new C.esc())},
$S:0}
C.esb.prototype={
$0(){},
$S:0}
C.esc.prototype={
$0(){},
$S:0}
C.etQ.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:96}
C.etR.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.eb(A.A,new C.ayb(this.a,null),0.94+w*0.06,null,null),w)},
$S:436}
C.etS.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:96}
C.etT.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.eb(A.A,new C.bc9(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:436}
C.etU.prototype={
$0(){return A.d.ck(this.a.d,0,C.Vs(this.b))},
$S:0}
C.eoQ.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.72)],t):B.a([A.c.j(0.88),A.po.j(0.75)],t)
r=B.I(A.b2.j(0.28+w*0.22),A.q,1.3)
q=w*0.2
t=B.a([A.b2.j(0.35+q),A.cc.j(0.18),A.K],t)
q=B.I(A.b2.j(0.45+q),A.q,1)
t=B.p(p,B.X(A_.a_4,u?A.ad:A.M,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bS(A.A,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.l(p,p,u?A.c:A.M,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bw(o,B.tQ(A.fu,B.p(p,B.v(B.a([t,A.aA,q,A.an,B.d("Open Blank or Class Template to start \u2014 nothing is saved until you edit.",p,p,p,p,p,p,B.l(p,p,u?A.az:A.ak,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.L,p,p)],x.p),A.m,p,A.e,A.j,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a8(A.ax,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.ew,p,p,1/0),14,!1),A.aq)},
$S:294}
C.epV.prototype={
$1(d){return A.a.i(d)},
$S:14}
C.epW.prototype={
$1(d){return d.length!==0},
$S:3}
C.epX.prototype={
$1(d){var w
if(A.a.a0(d,"Updated"))w=A.km
else{w=B.af("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a_A:A.Bk}return w},
$S:708}
C.eq_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=A.dC.aw(0,A.k.F(j+m.b*0.12,1))
j=B.m(20)
v=m.c
u=B.m(20)
t=m.d
s=x.O
s=t?B.a([A.c.j(0.1+w*0.04),A.aB.j(0.78)],s):B.a([A.c.j(0.92),A.mR.j(0.82)],s)
r=m.e
q=A.d.gL(r)
p=t?0.34:0.26
p=B.I(q.j(p+w*0.22),A.q,1.25)
q=B.m(10)
q=B.p(l,B.X(C.ku(v.w)?A.vx:A.pU,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,q,l,new B.a8(A.a3,A.a7,A.x,r,l,l),A.n),l,36,l,l,l,l,l,52)
o=v.b
o=B.d(o.toUpperCase(),l,l,l,l,l,l,B.l(l,l,t?A.c:A.M,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=v.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.Pv(v.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.Pv(v.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.Pv(v.f)
else if(n==="hati_kiapo_uongozi"){n=v.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.t(n)+" \u2022 Updated "+k.Pv(v.f)}else n=""+v.r.length+" slides \u2022 Updated "+k.Pv(v.f)
r=k.bI_(n,A.d.gL(r),t)
return B.p(l,B.bw(j,new B.a7s(B.aG(!1,A.a1,!0,l,B.aL(!1,l,!0,B.p(l,B.dL(!1,A.LT,l,l,!0,l,l,l,!0,l,q,l,l,l,l,l,!1,l,l,l,l,l,r,l,o,l,B.aH(l,l,l,l,B.X(A.nZ,t?A.az:A.bJ,l,l,l,l),l,l,l,new C.epY(k,v,t),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,p,u,l,new B.a8(A.ax,A.aC,A.x,s,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.epZ(k,v),l,l,l,l,l,l,l),A.f,A.K,0,l,l,l,l,l,A.ag),l),A.aq),A.f,l,l,l,l,l,l,A.dc,l,l,l,l)},
$S:90}
C.epZ.prototype={
$0(){return this.a.aej(this.b)},
$S:0}
C.epY.prototype={
$0(){return this.a.AB(this.b,this.c)},
$S:0}
C.erq.prototype={
$0(){var w=this.a
w.b5d()
w.m(new C.erp())},
$S:0}
C.erp.prototype={
$0(){},
$S:0}
C.err.prototype={
$1(d){return this.a.aio(this.b.a,d)},
$S:2}
C.ers.prototype={
$0(){this.a.d3(new C.ero(this.b))},
$S:0}
C.ero.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.ert.prototype={
$0(){this.a.d3(new C.ern(this.b))},
$S:0}
C.ern.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bl:A.cF},
$S:0}
C.eru.prototype={
$0(){this.a.d3(new C.erm(this.b))},
$S:0}
C.erm.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mG},
$S:0}
C.erv.prototype={
$0(){this.a.d3(new C.erl(this.b))},
$S:0}
C.erl.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.erw.prototype={
$0(){var w=this.a
w.d3(new C.erk(w,this.b))},
$S:0}
C.erk.prototype={
$0(){var w=this.b
return w.as=this.a.c1I(w.as)},
$S:0}
C.erx.prototype={
$0(){return this.a.d3(new C.erj(this.b))},
$S:0}
C.erj.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.ery.prototype={
$0(){return this.a.d3(new C.eri(this.b))},
$S:0}
C.eri.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erb.prototype={
$0(){return this.a.a1y(this.b.a)},
$S:0}
C.erc.prototype={
$0(){this.a.a_5()
return null},
$S:0}
C.erd.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aI(v,A.bU,x.w).w.a.a<900)w.aeC()
else w.m(new C.era(w))},
$S:0}
C.era.prototype={
$0(){return this.a.as=!0},
$S:0}
C.ere.prototype={
$0(){this.a.d3(new C.er9(this.b))},
$S:0}
C.er9.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.erf.prototype={
$0(){return this.a.d3(new C.er8(this.b))},
$S:0}
C.er8.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.erg.prototype={
$0(){return this.a.d3(new C.er7(this.b))},
$S:0}
C.er7.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.erh.prototype={
$0(){return this.a.ayU(null)},
$S:0}
C.eqj.prototype={
$0(){this.a.Dk()
return null},
$S:0}
C.eqk.prototype={
$0(){this.a.a9r()
return null},
$S:0}
C.eqm.prototype={
$1(d){return this.bje(d)},
bje(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.JG(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bU(A.aB,null,new C.eqe(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.d3(new C.eqf(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.eqg(r))
s=s.c.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.d3(new C.eqh(r))
s=s.c.I(x.q).f
s.S(B.b2(null,null,null,null,null,A.r,null,B.d(r.ch?"Non-stop on \u2014 the show starts over after the last slide.":"Non-stop off \u2014 the show stops on the last slide.",null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
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
return B.b(C.hlE(q,new C.Ee(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.d3(new C.eqi(r,p))
s=s.c.I(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.agu(q)
q=B.t(q==null?null:q.b)+" will play after your last slide."}s.S(B.b2(null,null,null,null,null,A.r,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.U,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:95}
C.eqe.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.e60],x.p)
for(w=[3,5,8,10,15,20,30,60],v=this.a,u=0;u<8;++u){t=w[u]
s=v.e===t?D.bJ7:r
q.push(B.dL(!1,r,r,r,!0,r,r,r,!0,r,r,r,r,r,r,new C.eqd(d,t),!1,r,r,r,r,r,r,r,new B.x(""+t+" seconds",r,A.dm,r,r,r,r,r,r,r,r,r),r,s,r))}return B.bn(!0,B.v(q,A.m,r,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eqd.prototype={
$0(){B.a5(this.a,!1).O(this.b)
return null},
$S:0}
C.eqf.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqg.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eqh.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eqi.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eql.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.zs(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.zs(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.zs(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.agu(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eb0,q,v,u,B.zs(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:129}
C.euB.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC2(w,v)}},
$S:0}
C.euC.prototype={
$0(){this.a.Dk()
return null},
$S:0}
C.erB.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.m(999),q=s?D.bTb:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.bM
if(s)v=A.c
else v=this.b?A.aR:A.bv
return new B.C(A.fy,B.aE(u,B.di(u,B.d(d,u,u,u,u,u,u,B.l(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.bc,new B.o(w,u,u,r,u,q,A.n),A.eE,u,u,u,A.lJ,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.erA(t,d),u,u,u,u,u,u,!1,A.a8),u)},
$S:131}
C.erA.prototype={
$0(){var w=this.a
return w.m(new C.erz(w,this.b))},
$S:0}
C.erz.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.erC.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a2n:E.avS
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbLp():t.gbHq()
return B.hp(B.aE(u,B.p(u,D.alZ,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ac(0,A.G,A.d.gL(v).j(0.45),A.J,10)],x.V),new B.a8(A.a3,A.a7,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a8),u,s,u,u)},
$S:1704}
C.erD.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.i6e(v,w.a.c)},
$S:0}
C.et_.prototype={
$0(){return this.b.v1(this.a.a)},
$S:0}
C.et0.prototype={
$0(){return this.a.v1(D.mA)},
$S:0}
C.et1.prototype={
$0(){return this.a.v1(D.HC)},
$S:0}
C.etc.prototype={
$0(){return this.a.v1(D.HD)},
$S:0}
C.etn.prototype={
$0(){return this.a.v1(D.HB)},
$S:0}
C.ety.prototype={
$0(){return this.a.q3("lab_report")},
$S:0}
C.etF.prototype={
$0(){return this.a.q3("rubric")},
$S:0}
C.etG.prototype={
$0(){return this.a.q3("minutes")},
$S:0}
C.etH.prototype={
$0(){return this.a.q3("agenda")},
$S:0}
C.etI.prototype={
$0(){return this.a.q3("timeline")},
$S:0}
C.etJ.prototype={
$0(){return this.a.q3(this.b.a)},
$S:0}
C.et2.prototype={
$0(){this.a.Vi()
return null},
$S:0}
C.et3.prototype={
$0(){this.a.Vc()
return null},
$S:0}
C.et4.prototype={
$0(){return this.a.q3("table")},
$S:0}
C.et5.prototype={
$0(){return this.a.q3("sticky")},
$S:0}
C.et6.prototype={
$0(){return this.a.q3("divider")},
$S:0}
C.et7.prototype={
$0(){return this.a.q3("header_bar")},
$S:0}
C.et8.prototype={
$0(){return this.a.oX(D.be)},
$S:0}
C.et9.prototype={
$0(){return this.a.oX(D.eJ)},
$S:0}
C.eta.prototype={
$0(){return this.a.oX(D.jF)},
$S:0}
C.etb.prototype={
$0(){return this.a.oX(D.Cu)},
$S:0}
C.etd.prototype={
$0(){return this.a.oX(D.jG)},
$S:0}
C.ete.prototype={
$0(){return this.a.oX(D.kX)},
$S:0}
C.etf.prototype={
$0(){return this.a.oX(D.fq)},
$S:0}
C.etg.prototype={
$0(){this.a.H0()
return null},
$S:0}
C.eth.prototype={
$0(){this.a.N_()
return null},
$S:0}
C.eti.prototype={
$0(){return this.a.q3("quote")},
$S:0}
C.etj.prototype={
$0(){return this.a.a7A()},
$S:0}
C.etk.prototype={
$0(){this.a.a_b()
return null},
$S:0}
C.etl.prototype={
$0(){var w=this.a
return w.m(new C.esQ(w))},
$S:0}
C.esQ.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.etm.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.o2(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.esY(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esY.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eto.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.jN()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.a60.t(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.b3
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.I(t,A.q,v?2.5:1),s,s,new B.a8(A.a3,A.a7,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.a60.t(0,q))u.push(B.ao(s,B.p(s,D.NC,A.f,s,s,D.DL,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.C(A.fy,B.aE(s,B.hp(new B.an(A.W,s,A.aa,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.esX(r,d),s,s,s,s,s,s,!1,A.a8),s)},
$S:z+89}
C.esX.prototype={
$0(){this.a.a7S(this.b)
return null},
$S:0}
C.etp.prototype={
$0(){this.a.a7R(this.b)
return null},
$S:0}
C.etq.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.hD3(d),p=this.a,o=B.m(8),n=p.gdr()
n=n==null?r:n.x
w=d.a
n=n===w?A.bk:A.b3
v=p.gdr()
n=B.I(n,A.q,(v==null?r:v.x)===w?2.5:1)
u=B.m(8)
t=B.m(7)
s=C.rn(4294967295,r,0,0,r,"preview_"+w,D.q5,"","","",D.dd)
C.hiC(s,w)
w=x.p
u=B.a([B.bw(o,B.p(r,B.bw(t,C.hjW(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.amy,A.f,r,r,D.DL,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.C(A.jd,B.aE(r,B.v(B.a([new B.an(A.W,r,A.aa,A.r,u,r),A.cS,B.d(d.b,r,r,r,r,r,r,B.l(r,r,this.b?A.az:A.ak,r,r,r,r,r,r,r,r,9,r,r,A.P,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.m,r,A.e,A.j,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.esW(p,q,d),r,r,r,r,r,r,!1,A.a8),r)},
$S:z+90}
C.esW.prototype={
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
return B.b(s.o2(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.d3(new C.esM(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.esM.prototype={
$0(){return C.hiC(this.a,this.b.a)},
$S:0}
C.esZ.prototype={
bjf(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.a6_.t(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.o2(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bjf(d,e)},
$S:z+91}
C.etK.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("K<1,r>")
v=B.B(new B.K(d,new C.etM(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.cd(B.A(v,A.m,w,A.e,A.j,0,w,w),A.r,w,A.y,w,w,w,w,A.aO)},
$S:z+92}
C.etM.prototype={
$1(d){var w=this
return w.a.b6z(d,w.b===d,w.c,w.d,new C.etL(w.e,d),!D.a6_.t(0,d))},
$S:z+25}
C.etL.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.etr.prototype={
$1(d){this.b.$2(d,new C.esV(this.a,d,this.c))
return null},
$S:z+26}
C.esV.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bCT(u,new C.esL(v,this.c,w),w)},
$S:0}
C.esL.prototype={
$0(){return this.a.d3(new C.esJ(this.b,this.c))},
$S:0}
C.esJ.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.ets.prototype={
$1(d){this.b.$2(d,new C.esU(this.a,d))
return null},
$S:z+26}
C.esU.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.fMF(u,new C.esK(v,w),w)},
$S:0}
C.esK.prototype={
$0(){var w=this.a
return w.d3(new C.esI(w,this.b))},
$S:0}
C.esI.prototype={
$0(){return this.a.gdr().r=this.b},
$S:0}
C.ett.prototype={
$0(){var w=this.a
return w.m(new C.esT(w))},
$S:0}
C.esT.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.etu.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bC2(w,v)}},
$S:0}
C.etv.prototype={
$0(){this.a.HN()
return null},
$S:0}
C.etw.prototype={
$0(){return this.a.a7A()},
$S:0}
C.etx.prototype={
$0(){var w=this.a,v=w.jN()
if(v!=null&&v.b===D.cQ)w.d3(new C.esS(v))},
$S:0}
C.esS.prototype={
$0(){var w=this.a
w.f=A.k.D(w.f*1.25,0.08,1.8)
w.e=A.k.D(w.e*1.1,0.08,1.8)},
$S:0}
C.etz.prototype={
$0(){this.a.Dk()
return null},
$S:0}
C.etA.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.F_(v,!0)
return null},
$S:0}
C.etB.prototype={
$0(){this.a.d3(new C.esR(this.b))},
$S:0}
C.esR.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.P)?A.cv:A.P},
$S:0}
C.etC.prototype={
$0(){this.a.d3(new C.esP(this.b))},
$S:0}
C.esP.prototype={
$0(){var w=this.a
return w.y=w.y===A.cF?A.bl:A.cF},
$S:0}
C.etD.prototype={
$0(){this.a.d3(new C.esO(this.b))},
$S:0}
C.esO.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aD:A.mG},
$S:0}
C.etE.prototype={
$0(){this.a.d3(new C.esN(this.b))},
$S:0}
C.esN.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.epo.prototype={
$1(d){return this.bjc(d)},
bjc(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.o2(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.d3(new C.epn(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:178}
C.epn.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eu6.prototype={
$0(){var w=this.a
return w.d3(new C.eu5(w,this.b))},
$S:0}
C.eu5.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eu7.prototype={
$0(){var w=this.a
return w.d3(new C.eu4(w,this.b))},
$S:0}
C.eu4.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eqw.prototype={
$0(){return this.a.d3(new C.eqv(this.b))},
$S:0}
C.eqv.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w-2,10,96)},
$S:0}
C.eqx.prototype={
$0(){return this.a.d3(new C.equ(this.b))},
$S:0}
C.equ.prototype={
$0(){var w=this.a
return w.w=A.k.D(w.w+2,10,96)},
$S:0}
C.er3.prototype={
$1(d){var w=x.gh
w=B.B(new B.K(D.aoe,new C.er2(),w),w.k("ak.E"))
return w},
$S:z+94}
C.er2.prototype={
$1(d){var w=null
return B.zs(B.d(d.b,w,w,w,w,w,w,A.mI,w,w,w),48,d,x.fO)},
$S:z+95}
C.euj.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a7(v,w?8:0,null,null)},
$S:36}
C.eui.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kb()?q:new C.eug(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.m(8)
if(o)v=A.bk
else v=r.d?A.b3:A.cq
v=B.I(v,A.q,o?2:1)
u=r.d?A.cE:A.c
t=B.bZ(0,C.hjW(r.b.r[e]),0,0,0)
s=B.m(4)
return B.aE(q,B.p(q,new B.an(A.W,q,A.aa,A.r,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.nq,q,q,q),A.f,q,q,new B.o(A.aX,q,q,s,q,q,A.n),q,q,q,q,A.ahZ,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.euh(p,e),q,q,q,q,q,q,!1,A.a8)},
$S:76}
C.euh.prototype={
$0(){var w=this.a
return w.m(new C.euc(w,this.b))},
$S:0}
C.euc.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.JP()},
$S:0}
C.eug.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bU(null,null,new C.eud(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eue(q,s))
q.aQJ()}else if(r==="del"){q=t.a
q.m(new C.euf(q,s))
q.aPS()}else if(r==="up")t.a.b1Q(s,s-1)
else if(r==="down")t.a.b1Q(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eud.prototype={
$1(d){var w=null,v=B.a([B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKL,w,w,w,w,new C.eu8(d),!1,w,w,w,w,w,w,w,D.fb6,w,w,w),B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bKE,w,w,w,w,new C.eu9(d),!1,w,w,w,w,w,w,w,A.wh,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bJW,w,w,w,w,new C.eua(d),!1,w,w,w,w,w,w,w,D.fj3,w,w,w))
if(u<this.b.r.length-1)v.push(B.dL(!1,w,w,w,!0,w,w,w,!0,w,D.bLX,w,w,w,w,new C.eub(d),!1,w,w,w,w,w,w,w,D.faW,w,w,w))
return B.bn(!0,B.v(v,A.m,w,A.e,A.Q,0,A.p),!0,!1,A.af,!0,!0)},
$S:26}
C.eu8.prototype={
$0(){B.a5(this.a,!1).O("dup")
return null},
$S:0}
C.eu9.prototype={
$0(){B.a5(this.a,!1).O("del")
return null},
$S:0}
C.eua.prototype={
$0(){B.a5(this.a,!1).O("up")
return null},
$S:0}
C.eub.prototype={
$0(){B.a5(this.a,!1).O("down")
return null},
$S:0}
C.eue.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euf.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.euk.prototype={
$0(){return this.a.a7A()},
$S:0}
C.epO.prototype={
$0(){var w=this.a
w.b5d()
w.ayU(null)},
$S:0}
C.epN.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.m(4),n=B.a([new B.ac(0,A.G,A.w.j(0.35),A.dk,24)],x.V),m=this.b
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
s=B.a([B.bw(s,B.c_(A.ku,new B.o(m.f==null?B.b0(m.e):p,p,p,p,p,r,A.n),A.bd),A.aq)],x.p)
r=m.z
q=this.c
A.d.v(s,new B.K(r,new C.epM(this.a,e.b,e.d,q),B.U(r).k("K<1,r>")))
if(m.z.length===0)s.push(B.av(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.l(p,p,q?A.az:A.bJ,p,p,p,p,p,p,p,p,p,p,p,A.a5,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return B.c_(new B.an(A.W,p,A.aa,A.f,s,new B.cx("canvas_"+m.a+"_"+u+"_"+t,x.W)),new B.o(v,p,p,o,n,w,A.n),A.bd)},
$S:433}
C.epM.prototype={
$1(d){var w=this
return w.a.bDm(d,w.b,w.c,w.d)},
$S:z+23}
C.epB.prototype={
$0(){var w=this
if(w.b){w.a.N8(w.c)
return}if(w.d){w.a.a7y(w.c)
return}if(w.e){w.a.afW(w.c)
return}if(w.f)w.a.b5J(w.c)},
$S:0}
C.epC.prototype={
$0(){this.a.N8(this.b)
return null},
$S:0}
C.epD.prototype={
$0(){return this.a.a1y(this.b.a)},
$S:0}
C.epE.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.epA(u,d,w.c,w.d))
v.Hs()
v.oc()
v.pg()},
$S:18}
C.epA.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.k.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.k.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.epF.prototype={
$1(d){return this.a.aio(this.b.a,d)},
$S:2}
C.epH.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.fYx(w))u.a.N8(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.b5J(v)},
$S:0}
C.epG.prototype={
$0(){return this.a.a1y(this.b.a)},
$S:0}
C.epI.prototype={
$1(d){var w=this,v=w.a
v.m(new C.epz(w.b,d,w.c,w.d))
v.Hs()
v.oc()
v.pg()},
$S:18}
C.epz.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.k.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.k.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.cQ)v.w=A.k.D(v.w+u*0.15,10,120)},
$S:0}
C.epJ.prototype={
$1(d){var w=this.a
w.m(new C.epy(this.b,d))
w.Hs()
w.oc()
w.pg()},
$S:217}
C.epy.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.k.D(w.e*v,0.04,1.8)
w.f=A.k.D(w.f*v,0.04,1.8)
if(w.b===D.cQ)w.w=A.k.D(w.w*v,10,120)},
$S:0}
C.epK.prototype={
$0(){var w=this.a
w.m(new C.epx(this.b))
w.Hs()
w.oc()
w.pg()},
$S:0}
C.epx.prototype={
$0(){this.a.r=C.hjr()},
$S:0}
C.epL.prototype={
$0(){return this.a.a1y(this.b.a)},
$S:0}
C.erF.prototype={
$0(){var w=this.a
return w.m(new C.erE(w))},
$S:0}
C.erE.prototype={
$0(){return this.a.y=!1},
$S:0}
C.erG.prototype={
$1(d){return this.a.cAg(this.b.a,d)},
$S:2}
C.eqK.prototype={
$1(d){var w
this.a.d3(d)
w=this.b
if(w!=null)w.$0()},
$S:171}
C.eqL.prototype={
$1(d){return this.a.$1(new C.eqJ(this.b,d))},
$S:6}
C.eqJ.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eqM.prototype={
$1(d){return this.a.$1(new C.eqI(this.b,d))},
$S:6}
C.eqI.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eqN.prototype={
$1(d){return this.a.$1(new C.eqH(this.b,d))},
$S:6}
C.eqH.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eqO.prototype={
$1(d){return this.a.$1(new C.eqG(this.b,d))},
$S:6}
C.eqG.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eqP.prototype={
$1(d){return this.a.$1(new C.eqF(this.b,d))},
$S:6}
C.eqF.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eqQ.prototype={
$1(d){return this.b.$1(new C.eqE(this.a,this.c))},
$S:8}
C.eqE.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eqR.prototype={
$1(d){return this.b.$1(new C.eqD(this.a,this.c))},
$S:8}
C.eqD.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eqS.prototype={
$1(d){var w=null,v=this.b,u=B.b0(d),t=v.Q===d,s=t?A.bk:A.cV
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.I(s,A.q,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqC(this.a,v,d),w,w,w,w,w,w,!1,A.a8)},
$S:428}
C.eqC.prototype={
$0(){return this.a.$1(new C.eqz(this.b,this.c))},
$S:0}
C.eqz.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eqT.prototype={
$1(d){return this.a.$1(new C.eqB(this.b,d))},
$S:1705}
C.eqB.prototype={
$0(){var w=this.b
return this.a.as=w.gL(w)},
$S:0}
C.eqU.prototype={
$1(d){var w=null
return B.aE(w,B.p(w,w,A.f,w,w,new B.o(B.b0(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eqA(this.a,this.b,d),w,w,w,w,w,w,!1,A.a8)},
$S:428}
C.eqA.prototype={
$0(){return this.a.$1(new C.eqy(this.b,this.c))},
$S:0}
C.eqy.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eqV.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a5(w,!1).pv()}else w=!1
if(w){w=v.a.c
w.toString
B.a5(w,!1).eJ()}v.a.arx()},
$S:0}
C.eqY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.a.fy
m===$&&B.c()
m=m.x
m===$&&B.c()
w=A.dC.aw(0,m)
m=B.m(16)
v=B.m(16)
u=o.c
t=B.aq(u,A.b2,0.35+w*0.15)
t.toString
t=B.a([u,t],x.O)
s=B.I(A.c.j(0.3+w*0.2),A.q,1.2)
r=B.a([B.X(o.d,A.c,n,n,n,26)],x.p)
q=B.m(6)
p=B.I(u,A.q,1.2)
r.push(B.ao(2,B.p(n,B.X(A.tX,u,n,n,n,10),A.f,n,n,new B.o(A.c,n,p,q,n,n,A.n),n,n,n,n,A.n9,n,n,n),n,n,n,2,n,n))
return B.aG(!1,A.a1,!0,n,B.aL(!1,m,!0,B.eE(new B.a7(48,48,new B.an(A.A,n,A.aa,A.r,r,n),n),n,new B.o(n,n,s,v,n,new B.a8(A.ax,A.aC,A.x,t,n,n),A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,o.b,n,n,n,n,n,n,n),A.f,A.K,0,n,A.K,n,n,n,A.ag)},
$S:126}
C.eox.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dC.aw(0,o)
o=B.m(22)
v=B.m(22)
u=q.c
t=B.aq(u,A.b2,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.I(A.c.j(0.28+w*0.22),A.q,1.35)
s=A.c.j(0.14+w*0.08)
r=B.I(A.c.j(0.4+w*0.15),A.q,1)
return B.aG(!1,A.a1,!0,p,B.aL(!1,o,!0,B.eE(B.v(B.a([B.eb(A.A,B.p(p,B.X(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.ac,B.d(q.e,p,p,p,p,p,p,A.j1,A.L,p,p)],x.p),A.m,p,A.bb,A.j,0,A.p),p,new B.o(p,p,t,v,p,new B.a8(A.ax,A.aC,A.x,u,p,p),A.n),p,A.F8,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.K,0,p,A.K,p,p,p,A.ag)},
$S:126}
C.esC.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aM(w,A.T,!0,w,!0,A.r,w,B.aN(),u,w,w,w,w,w,2,A.ano,A.y,!0,w,!0,w,!1,w,A.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a4,w,A.am,w,w,w,w)
return B.ej(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.esA(d),w,w),B.bH(A.p9,new C.esB(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:19}
C.esA.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.esB.prototype={
$0(){var w=this.b.a.a
B.a5(this.a,!1).O(w)
return null},
$S:0}
C.d_E.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=this.a,i=j.d
i===$&&B.c()
i=i.x
i===$&&B.c()
w=A.dC.aw(0,i)
i=j.e
i===$&&B.c()
v=i.x
v===$&&B.c()
u=A.ev.aw(0,A.k.D(v,0,1))
i=i.x
i===$&&B.c()
i=A.dU.aw(0,i)
v=B.m(22)
t=B.aq(A.aK,A.d.gL(C.ku(j.a.c.w)?D.u4:M.ni),w*0.35)
t.toString
t=B.I(t,A.q,1.2)
s=x.V
r=B.a([new B.ac(w*2,A.G,A.d.gL(C.ku(j.a.c.w)?D.u4:M.ni).j(0.18+w*0.12),A.J,32+w*10),D.aao],s)
q=B.m(22)
p=x.O
o=B.ao(k,B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.b0,0.9,A.x,k,0,B.a([A.d.gL(C.ku(j.a.c.w)?D.u4:M.ni).j(0.22+w*0.1),A.K],p),k,k),A.n),k,80,k,k,k,k,k,k),k,k,0,0,-28,k)
n=64+w*6
m=A.d.gL(C.ku(j.a.c.w)?D.u4:M.ni).j(0.28+w*0.14)
p=B.p(k,k,A.f,k,k,new B.o(k,k,k,k,k,new B.bS(A.A,0.5,A.x,k,0,B.a([m,A.d.gal(C.ku(j.a.c.w)?D.u4:M.ni).j(0.08),A.K],p),k,k),A.a6),k,n,k,k,k,k,k,n)
n=B.m(14)
m=j.a.c.w
l=C.ku(m)?D.u4:M.ni
s=B.a([new B.ac(0,A.G,A.d.gL(C.ku(m)?D.u4:M.ni).j(0.45+w*0.2),A.cx,18)],s)
m=x.p
l=B.a([p,B.eb(A.A,B.p(k,B.X(C.ku(j.a.c.w)?A.vx:A.pU,A.c,k,k,k,22),A.f,k,k,new B.o(k,k,k,n,s,new B.a8(A.ax,A.aC,A.x,l,k,k),A.n),k,46,k,k,k,k,k,46),1+w*0.04,k,k)],m)
s=B.a([new B.an(A.A,k,A.aa,A.r,l,k),A.S,B.d("PRESENTATION",k,k,k,k,k,k,B.l(k,k,A.d.gL(C.ku(j.a.c.w)?D.u4:M.ni).j(0.85+w*0.15),k,k,k,k,k,k,k,k,10,k,k,A.H,k,k,!0,k,1.4,k,k,k,k,k,k),A.L,k,k),A.h_,B.d(j.a.c.b,k,2,A.a2,k,k,k,D.f3n,A.L,k,k),A.at,B.d(j.gcvj(),k,k,k,k,k,k,D.f7S,A.L,k,k),A.aA],m)
p=j.a.c
if(p.z){p=p.gRS()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.v(s,B.a([B.d(p,k,k,k,k,k,k,B.l(k,k,A.d.gL(C.ku(j.a.c.w)?D.u4:M.ni).j(0.9),k,k,k,k,k,k,k,k,11,k,k,A.P,k,k,!0,k,k,k,k,k,k,k,k),A.L,k,k),A.ac],m))}s.push(new C.Jr(A.xU,"Download PDF","pdf",A.d6,j.II(0),!1,k))
p=j.a.c
if(!p.z||p.gRS()){p=j.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jr(A.kR,"Transfer to "+C.hjt(p==null?"":p),"transfer_hati",A.aV,j.II(1),!1,k)],m))}p=j.a.c
if(!p.z){p=p.w
n=j.II(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=j.a.c.w
A.d.v(s,B.a([A.an,new C.Jr(D.bCp,"Rename presentation","rename",A.cc,n,!1,k),A.an,new C.Jr(A.ajD,"Duplicate","duplicate",A.b7,j.II(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,k)],m))}s.push(A.N)
p=j.a.c
if(p.z)p=1
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?4:3}s.push(new C.Jr(A.e5,"Delete presentation","delete",A.ay,j.II(p),!0,k))
s.push(A.at)
p=j.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=j.II(p)
n=j.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=j.II(n)
s.push(B.dU(B.dc(B.bK(!1,E.aQf,k,k,!0,k,k,new C.d_D(d),k,B.fv(k,k,k,k,k,k,k,k,k,k,k,A.bJ,k,k,k,A.au,k,D.bsQ,k,k,k,k,k,A.k0,k,k)),n),new B.u(0,(1-p)*8)))
return B.eb(A.A,B.dc(B.aG(!1,A.a1,!0,k,B.p(k,B.bw(q,new B.an(A.W,k,A.aa,A.r,B.a([o,new B.C(D.brZ,B.v(s,A.m,k,A.e,A.Q,0,A.p),k)],m),k),A.aq),A.f,k,A.V0,new B.o(A.aB,k,t,v,r,k,A.n),k,k,k,k,k,k,k,k),A.f,A.K,0,k,k,k,k,k,A.ag),i),0.88+u*0.12,k,k)},
$S:46}
C.d_D.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.d0_.prototype={
$0(){B.a5(this.a,!1).O(!1)
return null},
$S:0}
C.d00.prototype={
$0(){B.a5(this.a,!1).O(!0)
return null},
$S:0}
C.d_B.prototype={
$1(d){var w=this.a
return w.m(new C.d_x(w))},
$S:23}
C.d_x.prototype={
$0(){return this.a.d=!0},
$S:0}
C.d_C.prototype={
$1(d){var w=this.a
return w.m(new C.d_w(w))},
$S:50}
C.d_w.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_A.prototype={
$0(){var w=this.a
return w.m(new C.d_y(w))},
$S:0}
C.d_y.prototype={
$0(){return this.a.d=!1},
$S:0}
C.d_z.prototype={
$0(){var w=this.a.a.e
B.a5(this.b,!1).O(w)
return null},
$S:0}
C.evh.prototype={
$0(){return $.bjH=!$.bjH},
$S:0}
C.ev7.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaTR())u.avn()},
$S:0}
C.evg.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.ev8.prototype={
$0(){return this.a.y=!0},
$S:0}
C.ev9.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.avn()},
$S:0}
C.ev3.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gL(w.a.c.r).r
w.d=0},
$S:0}
C.ev4.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.ev5.prototype={
$0(){return this.a.y=!1},
$S:0}
C.ev6.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eve.prototype={
$2(d,e){var w=B.B(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.A,null,A.b_,A.r,w,null)},
$S:1706}
C.evf.prototype={
$2(d,e){var w
if(e.gc3(e)===A.hS)return new B.cZ(e,!1,d,null)
w=this.a
return w.cth(w.e,d,e)},
$S:437}
C.eva.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fA((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evb.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.jX((1-v.gp(0))*1.5708)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evc.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fA(v.gp(0)*0.8)
w.jX(v.gp(0)*0.35)
return B.fs(A.A,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evd.prototype={
$2(d,e){var w=B.dm(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fA(-v.gp(0)*1.2)
return B.fs(A.a7,B.dc(e,v.gp(0)),null,w,!0)},
$S:46}
C.evi.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.gYm().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.gYm().x
t===$&&B.c()
return new C.b0p(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Io(v.c,t,!0,new B.cx("cine"+u,x.W))},
$S:697}
C.evk.prototype={
$1(d){var w=this.a
if(d.b.a>B.aI(this.b,A.bU,x.w).w.a.a*0.55)w.avn()
else w.chS()},
$S:50}
C.evj.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fD6.prototype={
$4(d,e,f,g){var w=this.b
A.d.a9(w)
A.d.v(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:438}
C.fDf.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.l(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ej(B.a([B.bK(!1,A.de,w,w,!0,w,w,new C.fDc(d),w,w),B.bK(!1,D.fqe,w,w,!0,w,w,new C.fDd(d,this.b,v),w,w),B.bH(A.aQw,new C.fDe(d,v,this.c),w)],x.p),w,w,L.tf,new B.a7(320,w,t,w),w,w,w,w,D.frI,w)},
$S:19}
C.fDc.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.fDd.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
C.fZb(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fDe.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a5(u.a,!1).O(null)
t=u.b
w=2
return B.b(C.aPj(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aOI(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fD5.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cdr.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.q(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:630}
C.fDb.prototype={
$1(d){return d.ag()},
$S:z+14}
C.fbj.prototype={
$1(d){return C.fZ9(C.Vs(B.a1(d,x.N,x.z)),this.a)},
$S:z+96}
C.fLV.prototype={
$3(d,e,f){return A.bH},
$C:"$3",
$R:3,
$S:96}
C.fLW.prototype={
$4(d,e,f,g){var w=A.ct.aw(0,e.gp(0))
return B.dc(B.eb(A.A,D.fQJ,0.94+w*0.06,null,null),w)},
$S:436}
C.fLX.prototype={
$1(d){var w=this
return new C.Vu(w.a,w.b,w.c,w.d,null)},
$S:z+97}
C.euO.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.euK.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.euN.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Vv(u,this.b,w.gaNd(),v,null)},
$S:z+99}
C.euL.prototype={
$0(){return this.a.f=!0},
$S:0}
C.euM.prototype={
$0(){return this.a.f=!1},
$S:0}
C.euP.prototype={
$0(){return this.a.f=!0},
$S:0}
C.euQ.prototype={
$0(){return this.a.f=!1},
$S:0}
C.euT.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.euU.prototype={
$0(){var w=this.a
return w.m(new C.euS(w))},
$S:0}
C.euS.prototype={
$0(){return this.a.d="one"},
$S:0}
C.euV.prototype={
$0(){var w=this.a
return w.m(new C.euR(w))},
$S:0}
C.euR.prototype={
$0(){return this.a.d="all"},
$S:0}
C.euW.prototype={
$1(d){return this.a.bI0(d,this.b)},
$S:z+100}
C.euJ.prototype={
$0(){var w=this.a
return w.m(new C.euI(w,this.b))},
$S:0}
C.euI.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.euX.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.euY.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.euZ.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.ev_.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ev0.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fJ(new B.fC(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.I(x.q).f.S(D.eQO)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eor.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eoq())},
$S:0}
C.eoq.prototype={
$0(){},
$S:0}
C.eos.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fJ()},
$S:9}
C.eon.prototype={
$1(d){return this.a.m(new C.eom())},
$S:2}
C.eom.prototype={
$0(){},
$S:0}
C.eoo.prototype={
$1(d){return this.a.aYG()},
$S:2}
C.eop.prototype={
$0(){B.a5(this.a,!1).O(null)
return null},
$S:0}
C.ev2.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.pU(),$async$$0)
case 2:if(t.c!=null)t.m(new C.ev1(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.ev1.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fxq.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.ev(new B.kf(this.c,new C.fxp(),w,w,x.ex),this.b),v.b,w,0,w,0,u)},
$S:218}
C.fxp.prototype={
$3(d,e,f){return new C.Io(e,!1,!1,new B.cx(e.a,x.W))},
$S:z+102}
C.fxr.prototype={
$1(d){var w=null
return B.oh(!1,B.av(new C.buc(this.a,this.b,w),w,w,w),w,x.z)},
$S:339}
C.fxv.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aW.gmz(),$async$$0)
case 3:w=4
return B.b(B.bN(A.n5,null,x.H),$async$$0)
case 4:w=5
return B.b($.aW.gmz(),$async$$0)
case 5:s=$.aW.ak$.x.h(0,t.a)
r=s==null?null:s.gb8()
if(!(r instanceof B.pP))throw B.V("Could not draw the slide.")
u=r.lW(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1709}
C.fxw.prototype={
bjL(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hq(A.fX),$async$$1)
case 3:r=f
if(r==null)throw B.V("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hM([J.eT(A.dD.gaM(r))],"image/png"))
t.toString
s=Am.fQ0(t)
w=4
return B.b(new B.pV(s,"load",!1,x.ev).gL(0).cM(0,A.jv),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bjL(d)},
$S:1710}
C.fxs.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:145}
C.fxt.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.fP(0)},
$S:145}
C.fxu.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.f5D.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.f_U,A.L,w,w)},
$S:1711}
C.f5E.prototype={
$3(d,e,f){var w=null,v=B.m(99)
return B.bw(v,B.m_(A.bm,w,A.dP,8,w,e===0?w:e,w),A.aq)},
$S:644}
C.ecQ.prototype={
$1(d){this.a.Zx()
return null},
$S:12}
C.ecO.prototype={
$0(){return this.a.e=D.bo3},
$S:0}
C.ecP.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bx
return this.b.e=w},
$S:0}
C.cg_.prototype={
$1(d){return A.o.dv(1,d.a)},
$S:z+103}
C.cg0.prototype={
$2(d,e){return(d|e)>>>0},
$S:73};(function aliases(){var w=C.aLf.prototype
w.buk=w.q
w=C.aKJ.prototype
w.btN=w.q
w=C.aKu.prototype
w.btx=w.q
w=C.aKI.prototype
w.btM=w.q
w=C.aLd.prototype
w.bui=w.q
w=C.aMA.prototype
w.bvQ=w.q
w=C.aJp.prototype
w.bsp=w.q
w=C.aLr.prototype
w.buw=w.q
w=C.aLs.prototype
w.bux=w.q
w=C.b24.prototype
w.bp3=w.aC1})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"i42","an_",104)
v(C.aIo.prototype,"gc22","Yt",0)
var r
u(r=C.awZ.prototype,"gcuF","cuG",38)
v(r,"gc2O","acD",0)
v(r=C.awV.prototype,"gaXc","DN",3)
v(r,"gc2L","c2M",3)
v(r,"gavF","xw",0)
v(r,"gavG","Ik",0)
t(C,"i4t","hAO",105)
v(C.aD2.prototype,"gc5o","c5p",3)
s(C,"i4E",0,null,["$4$paper$photo$request$template"],["fEv"],106,0)
s(C,"i4D",0,null,["$5$doc$history$instruction$photo$template"],["bBl"],107,0)
v(r=C.aDl.prototype,"gc65","IF",0)
v(r,"gbHt","Wl",0)
v(r,"gc68","ads",0)
v(r,"gc67","Zj",0)
v(r,"gaYl","E5",0)
v(C.aDp.prototype,"gc6d","Zl",0)
v(r=C.aEM.prototype,"gaYy","Pr",0)
v(r,"gcmI","b1W",3)
v(r,"gcw3","aAb",86)
v(r,"gbLf","a9v",0)
v(r,"gc6E","Ae",0)
v(r=C.aGH.prototype,"gcgB","a_G",0)
v(r,"gcgJ","a_J",0)
v(r,"gbAq","a7Y",0)
v(r,"gc6I","adE",0)
v(C.aGG.prototype,"gc6J","adF",0)
v(C.aAH.prototype,"gbzp","a7L",0)
v(C.az4.prototype,"gc6K","Zw",0)
w(C,"i4R","i2K",12)
w(C,"i4P","i_H",12)
w(C,"i4Q","i1K",12)
v(r=C.aDF.prototype,"gczb","czc",3)
v(r,"gckX","ckY",3)
u(r,"gEb","aej",7)
v(r,"gbF5","aqH",3)
u(r,"gEc","aZP",7)
v(r,"gc8R","ae0",0)
v(r,"gc7I","ae_",0)
v(r,"gcb0","aek",0)
v(r,"gbHq","a96",0)
v(r,"gcbU","a_5",0)
v(r,"gcbV","aeB",0)
v(r,"gccr","aeI",0)
v(r,"gcbd","aen",0)
v(r,"gbLp","a9z",0)
v(r,"gaQI","aQJ",3)
v(r,"gaPR","aPS",3)
v(r,"gaLy","aLz",3)
v(r,"gaPQ","arx",3)
u(r,"gbzG","bzH",80)
v(r,"gazJ","b4Y",3)
v(r,"gc7K","c7L",3)
v(r,"gbWp","bWq",3)
v(r,"gbJT","bJU",3)
v(r=C.aDI.prototype,"gcy3","cy4",3)
v(r,"gcxJ","cxK",3)
t(C,"i4S","i30",2)
v(r=C.aDG.prototype,"gc6Q","IK",0)
v(r,"gcoH","QS",0)
v(r,"gc6N","IJ",0)
v(r,"gcAr","a2b",0)
v(r,"gccD","aeP",0)
v(C.aDE.prototype,"gc6R","aYG",3)
v(r=C.aDH.prototype,"gbMa","a9J",0)
u(r,"gc6O","c6P",101)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aC,[C.nP,C.Rj,C.bGU,C.bFg,C.cw5,C.cw3,C.bN1,C.b7P,C.cw4,C.bDR,C.cfU,C.cfS,C.cfT,C.cfR,C.as8,C.cfQ,C.bNV,C.of,C.aEg,C.jk,C.nC,C.a7r,C.zf,C.ld,C.os,C.m1,C.zh,C.nG,C.a7z,C.aqw,C.b0q,C.ecf,C.la,C.En,C.eu,C.iX,C.Ee,C.xn,C.eJ,C.lD,C.hZ,C.jC,C.a7A,C.aeK,C.b0r,C.b24,C.a2l])
u(B.ki,[C.cDW,C.bYy,C.fsD,C.cFr,C.cEO,C.fy8,C.dXw,C.dXv,C.ecT,C.ecS,C.fzx,C.fcr,C.fcs,C.cbP,C.cbQ,C.cbR,C.ehg,C.ePQ,C.ePd,C.ePc,C.eQg,C.ePO,C.ePH,C.eQ_,C.eQG,C.fjz,C.eWP,C.eWO,C.eXh,C.eci,C.fD2,C.dTf,C.fJt,C.fzU,C.cdj,C.cdh,C.cdm,C.fAo,C.fAp,C.fAq,C.fAr,C.cd3,C.cd4,C.dFs,C.cd0,C.fAn,C.f3b,C.dRr,C.ccU,C.ebZ,C.fxY,C.es1,C.esq,C.esn,C.esm,C.esx,C.esw,C.eu1,C.eu0,C.esg,C.esf,C.eoQ,C.eq_,C.esZ,C.euj,C.eui,C.epN,C.eqY,C.eox,C.d_E,C.eve,C.evf,C.eva,C.evb,C.evc,C.evd,C.evi,C.cdr,C.euO,C.euZ,C.cg0])
u(B.hT,[C.cDX,C.cDY,C.bNW,C.fq1,C.bYx,C.bYA,C.fFY,C.f49,C.f40,C.f4g,C.fbk,C.fbl,C.fsE,C.fsC,C.fFs,C.fpI,C.fGj,C.cFh,C.cFm,C.cFo,C.cFk,C.cFp,C.cFi,C.cFq,C.cFd,C.cFa,C.cF9,C.cFg,C.cEJ,C.cEH,C.fxa,C.fxb,C.ffJ,C.fy9,C.fyf,C.feM,C.c86,C.fx8,C.fx9,C.fs_,C.fs0,C.fye,C.fya,C.fyc,C.fyd,C.fyb,C.fJL,C.fs3,C.fs4,C.fs7,C.fs8,C.fsb,C.fsc,C.fLd,C.fcS,C.fLo,C.ega,C.egb,C.egc,C.efT,C.eg4,C.eg5,C.eg7,C.cbO,C.cbM,C.cbN,C.fxP,C.fxR,C.fxQ,C.fct,C.fcu,C.fLr,C.ehl,C.ehm,C.ehd,C.ehe,C.ehh,C.ehi,C.fLH,C.eQH,C.eQ6,C.ePR,C.eQ3,C.eP8,C.eP9,C.ePa,C.ePe,C.ePf,C.eQw,C.eQD,C.eQF,C.eQf,C.eQh,C.eQl,C.eQm,C.eQn,C.eQr,C.eQi,C.eQj,C.ePq,C.ePr,C.ePs,C.ePt,C.ePu,C.ePv,C.ePw,C.ePx,C.ePy,C.eOM,C.eON,C.eOO,C.eOP,C.eOR,C.eOS,C.ePk,C.ePl,C.ePm,C.ePn,C.ePo,C.eOW,C.eOX,C.eOY,C.eOZ,C.ePG,C.ePZ,C.fvd,C.fvc,C.cda,C.fjy,C.fCZ,C.fCS,C.fCV,C.fAS,C.fAT,C.fAU,C.fvk,C.fvj,C.fvi,C.fvg,C.fco,C.fcp,C.fcq,C.fLT,C.eWR,C.eWS,C.eWL,C.eWF,C.eXa,C.eXb,C.eXd,C.eXe,C.eX9,C.fLS,C.eWw,C.fiO,C.ech,C.fD0,C.fD1,C.fD3,C.fCX,C.fCY,C.fL5,C.dhQ,C.dhW,C.ecg,C.f8S,C.f8U,C.f8T,C.f8R,C.fwo,C.fwq,C.faS,C.fCt,C.fCu,C.fCv,C.fCG,C.fCL,C.fCM,C.fCN,C.fCO,C.fCP,C.fCQ,C.fCR,C.fCw,C.fCx,C.fCy,C.fCz,C.fCA,C.fCB,C.fCC,C.fCD,C.fCE,C.fCF,C.fCH,C.fCI,C.fCJ,C.fCK,C.fue,C.fim,C.fil,C.fD9,C.dTg,C.dTe,C.eVG,C.c7I,C.c7K,C.fJv,C.d78,C.d7a,C.fJu,C.fJs,C.fLR,C.fzQ,C.d6J,C.fsf,C.fsg,C.cd8,C.cd9,C.cd7,C.ccY,C.ccZ,C.ccV,C.ccW,C.ccX,C.cdp,C.cdk,C.cdf,C.cdg,C.cdi,C.cdl,C.cdn,C.fAs,C.cd2,C.cd5,C.cd6,C.cdc,C.cdd,C.fDg,C.fCn,C.cd1,C.cd_,C.fAm,C.fkU,C.ccT,C.eTj,C.fnJ,C.euF,C.er4,C.er5,C.esF,C.est,C.esu,C.eqs,C.euq,C.eur,C.eus,C.epR,C.es8,C.esa,C.erL,C.erI,C.er0,C.er1,C.erS,C.epT,C.es3,C.es4,C.es2,C.es6,C.es5,C.eso,C.esp,C.esr,C.esk,C.eqb,C.eq8,C.esy,C.eq0,C.eup,C.eoz,C.eq3,C.eq2,C.eph,C.epm,C.epk,C.epi,C.eux,C.euy,C.euz,C.euw,C.eu3,C.eu2,C.etX,C.etZ,C.etP,C.eun,C.eul,C.eoH,C.eoD,C.eqZ,C.epq,C.eoS,C.eoR,C.epd,C.epe,C.eqq,C.eps,C.epw,C.esh,C.etQ,C.etR,C.etS,C.etT,C.epV,C.epW,C.epX,C.err,C.eqm,C.eqe,C.eql,C.erB,C.erC,C.eto,C.etq,C.etK,C.etM,C.etr,C.ets,C.epo,C.er3,C.er2,C.eud,C.epM,C.epE,C.epF,C.epI,C.epJ,C.erG,C.eqK,C.eqL,C.eqM,C.eqN,C.eqO,C.eqP,C.eqQ,C.eqR,C.eqS,C.eqT,C.eqU,C.esC,C.d_B,C.d_C,C.evk,C.fD6,C.fDf,C.fD5,C.fDb,C.fbj,C.fLV,C.fLW,C.fLX,C.euN,C.euW,C.eos,C.eon,C.eoo,C.fxq,C.fxp,C.fxr,C.fxw,C.fxs,C.fxt,C.f5D,C.f5E,C.ecQ,C.cg_])
u(B.j6,[C.cDZ,C.f45,C.f4a,C.f4b,C.f46,C.f47,C.f48,C.f3Z,C.f4_,C.f41,C.f42,C.f4f,C.f4e,C.f44,C.f43,C.f4c,C.f4d,C.f4i,C.f4j,C.f4h,C.cFj,C.cFn,C.cFl,C.cFb,C.cFc,C.cFe,C.cF7,C.cF8,C.cFf,C.cF6,C.cF5,C.cF4,C.cEy,C.cEx,C.cEA,C.cEI,C.cEB,C.cEz,C.cED,C.cEE,C.cEF,C.cEC,C.cEG,C.cEK,C.cEL,C.cEM,C.cEN,C.frY,C.frZ,C.frW,C.frX,C.e7E,C.e7C,C.e7D,C.e7F,C.e7G,C.dXu,C.fs1,C.fs2,C.fs5,C.fs6,C.fs9,C.fsa,C.ecR,C.fzX,C.fzW,C.eg9,C.eg8,C.efN,C.efJ,C.efU,C.efV,C.efW,C.efP,C.efQ,C.efR,C.efS,C.efO,C.efL,C.efM,C.eg1,C.eg2,C.eg0,C.eg3,C.eg_,C.efZ,C.efY,C.eg6,C.efX,C.efK,C.ehk,C.eh8,C.eh9,C.ehf,C.eha,C.ehc,C.ehb,C.ehj,C.ePz,C.ePX,C.ePi,C.ePj,C.ePg,C.ePh,C.eQ2,C.eQ1,C.eQ0,C.eQ5,C.eQ4,C.eP7,C.ePb,C.eP6,C.eP5,C.eP2,C.eP4,C.eP3,C.eQE,C.eQx,C.eQv,C.eQy,C.eQu,C.eQz,C.eQt,C.eQA,C.eQB,C.eQC,C.eQs,C.eQe,C.eQ9,C.eQk,C.eQd,C.eQo,C.eQc,C.eQp,C.eQb,C.eQq,C.eQa,C.ePU,C.ePT,C.ePV,C.ePS,C.ePW,C.ePM,C.ePL,C.ePN,C.ePK,C.ePJ,C.ePI,C.eOQ,C.eOL,C.eP_,C.eOV,C.eP0,C.eOU,C.eP1,C.eOT,C.ePP,C.ePD,C.ePC,C.ePE,C.ePB,C.ePF,C.ePA,C.ePY,C.eQ8,C.eQ7,C.ePp,C.fCU,C.fCW,C.fD_,C.fvh,C.fxI,C.fxG,C.fxH,C.eWT,C.eWU,C.eWQ,C.eWK,C.eWJ,C.eWM,C.eWN,C.eWz,C.eWA,C.eWC,C.eWD,C.eWE,C.eWB,C.eWG,C.eX6,C.eX7,C.eX5,C.eX8,C.eX4,C.eX3,C.eX2,C.eXc,C.eX1,C.eX0,C.eX_,C.eXf,C.eWZ,C.eXg,C.eWY,C.eWX,C.eWH,C.eWI,C.eWW,C.eWV,C.eWs,C.eWt,C.eWu,C.eWv,C.eWr,C.eWx,C.eWy,C.dhP,C.dhR,C.dhU,C.dhV,C.dhT,C.dhS,C.fwp,C.fuf,C.c7J,C.c7L,C.d71,C.d76,C.d77,C.d75,C.d74,C.d79,C.d73,C.d72,C.d7b,C.fJr,C.ddO,C.ddP,C.ddQ,C.fsd,C.fse,C.cdq,C.eot,C.eou,C.eov,C.eow,C.fkS,C.fkT,C.dRt,C.dRs,C.d3Y,C.d3X,C.euH,C.euG,C.er6,C.etN,C.euD,C.esD,C.eut,C.euu,C.euE,C.erM,C.epP,C.epQ,C.es9,C.erK,C.erH,C.erJ,C.erN,C.erO,C.erP,C.erQ,C.erR,C.erT,C.epU,C.erW,C.erX,C.erY,C.erZ,C.es_,C.es0,C.erV,C.es7,C.esl,C.esj,C.ess,C.erU,C.eq9,C.eqa,C.eqc,C.esv,C.esz,C.eoO,C.eq7,C.eq5,C.esH,C.eq1,C.esG,C.epS,C.eqt,C.euo,C.etO,C.eoP,C.eoM,C.eoC,C.eoy,C.eoA,C.eq4,C.epg,C.epl,C.epj,C.epf,C.esi,C.euA,C.eu_,C.etV,C.etW,C.etY,C.eqX,C.eqW,C.eum,C.eoF,C.eoG,C.eoI,C.eoJ,C.eoN,C.eoE,C.esE,C.euv,C.er_,C.epp,C.eoB,C.eqr,C.eoK,C.eoT,C.eoU,C.eoV,C.ep5,C.ep8,C.ep9,C.epa,C.epb,C.epc,C.eoW,C.eoX,C.eoY,C.eoZ,C.ep_,C.ep0,C.ep1,C.ep2,C.ep3,C.ep4,C.ep6,C.ep7,C.eqp,C.eqo,C.eqn,C.eoL,C.ept,C.epr,C.epu,C.epv,C.eq6,C.esd,C.ese,C.esb,C.esc,C.etU,C.epZ,C.epY,C.erq,C.erp,C.ers,C.ero,C.ert,C.ern,C.eru,C.erm,C.erv,C.erl,C.erw,C.erk,C.erx,C.erj,C.ery,C.eri,C.erb,C.erc,C.erd,C.era,C.ere,C.er9,C.erf,C.er8,C.erg,C.er7,C.erh,C.eqj,C.eqk,C.eqd,C.eqf,C.eqg,C.eqh,C.eqi,C.euB,C.euC,C.erA,C.erz,C.erD,C.et_,C.et0,C.et1,C.etc,C.etn,C.ety,C.etF,C.etG,C.etH,C.etI,C.etJ,C.et2,C.et3,C.et4,C.et5,C.et6,C.et7,C.et8,C.et9,C.eta,C.etb,C.etd,C.ete,C.etf,C.etg,C.eth,C.eti,C.etj,C.etk,C.etl,C.esQ,C.etm,C.esY,C.esX,C.etp,C.esW,C.esM,C.etL,C.esV,C.esL,C.esJ,C.esU,C.esK,C.esI,C.ett,C.esT,C.etu,C.etv,C.etw,C.etx,C.esS,C.etz,C.etA,C.etB,C.esR,C.etC,C.esP,C.etD,C.esO,C.etE,C.esN,C.epn,C.eu6,C.eu5,C.eu7,C.eu4,C.eqw,C.eqv,C.eqx,C.equ,C.euh,C.euc,C.eug,C.eu8,C.eu9,C.eua,C.eub,C.eue,C.euf,C.euk,C.epO,C.epB,C.epC,C.epD,C.epA,C.epH,C.epG,C.epz,C.epy,C.epK,C.epx,C.epL,C.erF,C.erE,C.eqJ,C.eqI,C.eqH,C.eqG,C.eqF,C.eqE,C.eqD,C.eqC,C.eqz,C.eqB,C.eqA,C.eqy,C.eqV,C.esA,C.esB,C.d_D,C.d0_,C.d00,C.d_x,C.d_w,C.d_A,C.d_y,C.d_z,C.evh,C.ev7,C.evg,C.ev8,C.ev9,C.ev3,C.ev4,C.ev5,C.ev6,C.evj,C.fDc,C.fDd,C.fDe,C.euK,C.euL,C.euM,C.euP,C.euQ,C.euT,C.euU,C.euS,C.euV,C.euR,C.euJ,C.euI,C.euX,C.euY,C.ev_,C.ev0,C.eor,C.eoq,C.eom,C.eop,C.ev2,C.ev1,C.fxv,C.fxu,C.ecO,C.ecP])
t(C.aQE,B.J)
u(B.m6,[C.a3k,C.awr,C.av7,C.xl,C.xo,C.kQ,C.t9,C.Bd,C.rm,C.vQ,C.ar5,C.Ip,C.aqv,C.uy,C.ms,C.hx,C.a8b])
u(C.bN1,[C.cw6,C.bN2])
u(C.cfU,[C.cfY,C.as7])
t(C.cfX,C.cfS)
t(C.cfW,C.cfR)
t(C.cfZ,C.cfW)
t(C.cfV,C.cfT)
t(C.cfP,C.cfQ)
t(C.b9n,B.oJ)
t(C.cpX,B.auA)
t(C.a7Y,B.x8)
t(C.aV6,B.dG)
t(C.aA_,B.ats)
u(B.ag,[C.a0m,C.Y6,C.Y4,C.apH,C.Vf,C.Vi,C.a_n,C.a_U,C.a_T,C.aDe,C.Zf,C.N6,C.YO,C.Z8,C.anI,C.aI5,C.Uu,C.ayP,C.a7h,C.Ny,C.ayb,C.Jr,C.a__,C.Vu,C.Vv,C.aDD,C.aqA,C.a7i])
u(B.ah,[C.aIo,C.awZ,C.awV,C.aD2,C.aDl,C.aDp,C.aEM,C.aGH,C.aGG,C.aLf,C.aAH,C.aKJ,C.az4,C.bfg,C.aKu,C.aMA,C.aKI,C.bd9,C.aLd,C.aLr,C.aJp,C.bbV,C.aLs,C.aDG,C.bjG,C.aDE,C.aDH,C.bjp])
u(B.au,[C.awX,C.acQ,C.ace,C.bir,C.acT,C.aeA,C.b02,C.brO,C.b0m,C.bl_,C.bqn,C.aZg,C.b0p,C.acW,C.add,C.b0n,C.Io,C.aZj,C.bc9,C.Pb,C.Jy,C.bgO,C.bgN,C.buc])
u(B.GU,[C.bbC,C.btd,C.aII,C.bej,C.bqL])
u(B.mJ,[C.bbB,C.b86,C.bqI,C.bb8,C.beH,C.bgU,C.bdN,C.beE,C.bel,C.bnf,C.b9f,C.b8T,C.bu9,C.bra,C.bqj,C.bdG,C.b0k,C.bpg,C.bqg])
t(C.bjm,C.aLf)
t(C.biJ,C.aKJ)
t(C.bit,C.aKu)
t(C.btG,C.aMA)
t(C.biG,C.aKI)
t(C.bjk,C.aLd)
t(C.bwu,C.aLr)
t(C.aDF,C.bwu)
t(C.bbW,C.aJp)
t(C.aDI,C.aLs)
t(C.bu0,B.iP)
t(C.a8a,B.kp)
t(C.cg1,C.b24)
t(C.ahM,C.a2l)
u(B.X6,[C.aQu,C.aRZ])
t(C.aw2,C.aQu)
w(C.aLf,B.c9)
w(C.aKJ,B.c9)
w(C.aKu,B.c9)
w(C.aKI,B.c9)
w(C.aLd,B.c9)
w(C.aMA,B.c9)
w(C.aJp,B.eR)
w(C.aLr,B.c9)
v(C.bwu,B.ez)
w(C.aLs,B.c9)})()
B.jW(b.typeUniverse,JSON.parse('{"aRd":{"hG":["aRd"]},"nP":{"aRd":[],"hG":["aRd"]},"aQE":{"J":["Rj"],"J.E":"Rj"},"b9n":{"oJ":[]},"a7Y":{"x8":[],"o8":[]},"aV6":{"dG":[],"cA":[],"r":[]},"aA_":{"aS":[],"d6":["aS"],"aR":[],"cv":[]},"a0m":{"ag":[],"r":[]},"aIo":{"ah":["a0m"]},"Y6":{"ag":[],"r":[]},"Y4":{"ag":[],"r":[]},"awZ":{"ah":["Y6"]},"awV":{"ah":["Y4"]},"awX":{"au":[],"r":[]},"apH":{"ag":[],"r":[]},"aD2":{"ah":["apH"]},"acQ":{"au":[],"r":[]},"ace":{"au":[],"r":[]},"acT":{"au":[],"r":[]},"aeA":{"au":[],"r":[]},"bir":{"au":[],"r":[]},"Vf":{"ag":[],"r":[]},"aDl":{"ah":["Vf"]},"b02":{"au":[],"r":[]},"bbC":{"aB":[]},"bbB":{"aB":[]},"btd":{"aB":[]},"b86":{"aB":[]},"bqI":{"aB":[]},"Vi":{"ag":[],"r":[]},"aDp":{"ah":["Vi"]},"bb8":{"aB":[]},"a_n":{"ag":[],"r":[]},"aEM":{"ah":["a_n"]},"beH":{"aB":[]},"a_U":{"ag":[],"r":[]},"a_T":{"ag":[],"r":[]},"aDe":{"ag":[],"r":[]},"Zf":{"ag":[],"r":[]},"aGH":{"ah":["a_U"]},"aGG":{"ah":["a_T"]},"bjm":{"ah":["aDe"]},"bgU":{"aB":[]},"aAH":{"ah":["Zf"]},"brO":{"au":[],"r":[]},"b0m":{"au":[],"r":[]},"bl_":{"au":[],"r":[]},"N6":{"ag":[],"r":[]},"YO":{"ag":[],"r":[]},"biJ":{"ah":["N6"]},"bqn":{"au":[],"r":[]},"bdN":{"aB":[]},"aZg":{"au":[],"r":[]},"az4":{"ah":["YO"]},"Z8":{"ag":[],"r":[]},"bfg":{"ah":["Z8"]},"beE":{"aB":[]},"bel":{"aB":[]},"bnf":{"aB":[]},"b9f":{"aB":[]},"b8T":{"aB":[]},"bu9":{"aB":[]},"bra":{"aB":[]},"bqj":{"aB":[]},"bdG":{"aB":[]},"anI":{"ag":[],"r":[]},"b0p":{"au":[],"r":[]},"bit":{"ah":["anI"]},"acW":{"au":[],"r":[]},"add":{"au":[],"r":[]},"aI5":{"ag":[],"r":[]},"Uu":{"ag":[],"r":[]},"Io":{"au":[],"r":[]},"ayP":{"ag":[],"r":[]},"a7h":{"ag":[],"r":[]},"b0n":{"au":[],"r":[]},"b0k":{"aB":[]},"btG":{"ah":["aI5"]},"aII":{"aB":[]},"biG":{"ah":["Uu"]},"bd9":{"ah":["ayP"]},"bjk":{"ah":["a7h"]},"aZj":{"au":[],"r":[]},"bej":{"aB":[]},"bpg":{"aB":[]},"bqg":{"aB":[]},"ayb":{"ag":[],"r":[]},"Jr":{"ag":[],"r":[]},"a__":{"ag":[],"r":[]},"Jy":{"au":[],"r":[]},"Ny":{"ag":[],"r":[]},"aDF":{"ah":["Ny"],"ez":[]},"bbW":{"ah":["ayb"]},"bc9":{"au":[],"r":[]},"bbV":{"ah":["Jr"]},"Pb":{"au":[],"r":[]},"aDI":{"ah":["a__"]},"bqL":{"aB":[]},"bgO":{"au":[],"r":[]},"bgN":{"au":[],"r":[]},"Vu":{"ag":[],"r":[]},"Vv":{"ag":[],"r":[]},"aDD":{"ag":[],"r":[]},"aqA":{"ag":[],"r":[]},"aDG":{"ah":["Vu"]},"bjG":{"ah":["Vv"]},"aDE":{"ah":["aDD"]},"bu0":{"iP":[]},"aDH":{"ah":["aqA"]},"buc":{"au":[],"r":[]},"a7i":{"ag":[],"r":[]},"bjp":{"ah":["a7i"]},"a8a":{"kp":["fr<eP>"],"kc":["fr<eP>"]},"ahM":{"a2l":[]},"aQu":{"j0":[],"fe":[]},"aw2":{"j0":[],"fe":[]},"aRZ":{"j0":[],"fe":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.ax
return{bu:w("Lk"),U:w("vl<pT>"),bz:w("w"),M:w("eM<n>"),bo:w("jx"),g7:w("LP"),gc:w("az<it?>"),bq:w("az<~>"),cc:w("M1"),fS:w("DF"),an:w("HB"),bm:w("O<Rj>"),X:w("O<a2t>"),f3:w("O<aRd>"),aK:w("O<n4>"),V:w("O<ac>"),O:w("O<w>"),fA:w("O<lv>"),d5:w("O<az<bv<H,+icon3d,picture(n?,n?)>>>"),bH:w("O<az<dD>>"),fG:w("O<az<~>>"),aF:w("O<na>"),cd:w("O<ai<jk>>"),ez:w("O<a3<n,aC>>"),d:w("O<a3<n,@>>"),B:w("O<mo>"),h:w("O<jk>"),gE:w("O<zf>"),k:w("O<of>"),g:w("O<lD>"),D:w("O<hZ>"),u:w("O<eJ>"),m:w("O<uy>"),i:w("O<hx>"),aC:w("O<a7z>"),o:w("O<zh>"),e3:w("O<aC>"),dN:w("O<u>"),v:w("O<hn>"),cR:w("O<iN>"),J:w("O<jc>"),gx:w("O<p2<n>>"),f2:w("O<+(a0,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(N,N)>"),ek:w("O<+(H,n)>"),n:w("O<+(H,H)>"),r:w("O<cQ>"),s:w("O<n>"),aS:w("O<iP>"),p:w("O<r>"),eR:w("O<fe>"),fT:w("O<b7P>"),bx:w("O<aEg>"),gz:w("O<aeK>"),x:w("O<N>"),t:w("O<H>"),dS:w("O<aB?>"),bA:w("O<u?>"),Z:w("O<H?>"),cA:w("O<cf>"),A:w("cs<ah<ag>>"),gL:w("ai<of>"),R:w("ai<hZ>"),j:w("ai<@>"),bW:w("ai<H>"),e:w("bv<H,+icon3d,picture(n?,n?)>"),P:w("a3<n,@>"),f:w("a3<@,@>"),gI:w("a3<H,+icon3d,picture(n?,n?)>"),bR:w("K<hx,r>"),eC:w("K<nG,n>"),cT:w("K<jC,C>"),dv:w("K<n,n>"),f0:w("K<n,r>"),gN:w("K<H,px>"),gh:w("K<ms,jm<ms>>"),w:w("iz"),ei:w("it"),g2:w("rc"),fB:w("Ee"),b6:w("zf"),gX:w("a7r"),dt:w("ld"),ea:w("of"),bt:w("lD"),I:w("hZ"),F:w("eJ"),fO:w("ms"),ff:w("uy"),fP:w("hx"),Q:w("vQ"),dO:w("aqw"),a:w("cq"),C:w("aC"),dw:w("as8"),di:w("a8b"),Y:w("eP"),fz:w("+(n,n)"),dL:w("+(H,H)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("EJ"),dB:w("dz<u>"),bJ:w("dz<n>"),_:w("e_<n>"),N:w("n"),fw:w("pT"),bO:w("ar"),K:w("bo<u>"),b:w("bo<N>"),E:w("dD"),W:w("cx<n>"),ac:w("cx<H>"),ex:w("kf<lD>"),cI:w("kf<n>"),cl:w("kf<N>"),b4:w("a2<la>"),a8:w("a2<m1>"),fR:w("a2<+(n,n)>"),co:w("e7<u>"),l:w("r"),b2:w("bW<~>"),ev:w("pV<dX>"),dT:w("bg<~>"),cQ:w("aA_"),q:w("mX"),y:w("R"),gR:w("N"),z:w("@"),S:w("H"),at:w("b9?"),gw:w("ai<a3<n,@>>?"),aT:w("ai<hZ>?"),c:w("ai<@>?"),aP:w("it?"),af:w("hZ?"),go:w("b0r?"),a6:w("a7A?"),cK:w("aC?"),bZ:w("+bytes,dataUrl,fileName(dD,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dD?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.aVd=new B.bI(A.ax,null,null,N.an8,null)
D.aVn=new B.da(0,-0.15)
D.aVp=new B.da(0.62,0)
D.aVs=new B.da(-0.35,-0.45)
D.aVC=new B.da(0.9,-0.85)
D.aLd=new B.aT(30,30)
D.aWU=new B.bp(D.aLd,D.aLd,A.hd,A.hd)
D.aX7=new B.ay(A.b7,1,A.q,-1)
D.bft=new B.w(1,0.4196078431372549,0.2901960784313726,0.2,A.t)
D.aXj=new B.ay(D.bft,1,A.q,-1)
D.aXv=new B.ay(A.aE,1.5,A.q,-1)
D.aXA=new B.ay(A.b7,1.6,A.q,-1)
D.aXQ=new B.ay(A.aE,1.4,A.q,-1)
D.aZd=new B.o(null,null,null,null,null,K.Gn,A.a6)
D.bUl=new B.a8(A.a3,A.a7,A.x,G.a2n,null,null)
D.aZl=new B.o(null,null,null,null,null,D.bUl,A.a6)
D.aae=new B.o(A.aB,null,null,A.rS,null,null,A.n)
D.b9B=new B.w(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.t)
D.bfq=new B.w(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.t)
D.cRh=w([D.b9B,D.bfq],x.O)
D.ecp=new B.bS(A.A,0.5,A.x,null,0,D.cRh,null,null)
D.aZE=new B.o(null,null,null,null,null,D.ecp,A.a6)
D.Wt=new B.w(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.t)
D.aY5=new B.bO(P.uP,A.Y,A.Y,A.Y)
D.aZG=new B.o(D.Wt,null,D.aY5,null,null,null,A.n)
D.bW4=new B.a8(A.a3,A.a7,A.x,A.PL,null,null)
D.aZN=new B.o(null,null,null,null,null,D.bW4,A.a6)
D.abN=new B.w(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.t)
D.aZP=new B.o(D.abN,null,null,A.qt,null,null,A.n)
D.aZT=new B.o(A.kg,null,null,null,null,null,A.a6)
D.aYc=new B.bO(A.A_,A.Y,A.Y,A.Y)
D.aZW=new B.o(Z.acT,null,D.aYc,A.m5,null,null,A.n)
D.DL=new B.o(A.dS,null,null,null,null,null,A.a6)
D.b_2=new B.o(null,null,null,null,null,E.vN,A.a6)
D.cW4=w([E.adL,A.bY],x.O)
D.bVG=new B.a8(A.b0,A.b5,A.x,D.cW4,null,null)
D.b_6=new B.o(null,null,null,A.m5,null,D.bVG,A.n)
D.d5r=w([A.bk,A.dS,A.jP],x.O)
D.a0y=new B.a8(A.ax,A.aC,A.x,D.d5r,null,null)
D.b_j=new B.o(null,null,null,null,null,D.a0y,A.n)
D.b_k=new B.o(D.abN,null,null,A.kC,null,null,A.n)
D.cma=w([A.dr,A.bk],x.O)
D.bVy=new B.a8(A.ax,A.aC,A.x,D.cma,null,null)
D.b_o=new B.o(null,null,null,null,null,D.bVy,A.n)
D.b_y=new B.o(null,null,null,null,null,G.tZ,A.a6)
D.b_R=new B.o(A.adN,null,null,null,null,null,A.a6)
D.ban=new B.w(0.5647058823529412,0,0,0,A.t)
D.aao=new B.ac(0,A.G,D.ban,A.RA,28)
D.b1Y=new B.aVj()
D.b2w=new C.cpX()
D.b2I=new C.b9n()
D.aaU=new B.cr(A.A,null,null,A.a0n,null)
D.b5e=new B.fj(null,null,null,null,null,E.mZ,null,null,null,null)
D.b3e=new B.cr(A.A,null,null,D.b5e,null)
D.bFl=new B.ae(A.dW,28,A.c,null,null,null)
D.b3I=new B.cr(A.A,null,null,D.bFl,null)
D.b5b=new B.fj(2,null,null,null,null,A.bZ,null,null,null,null)
D.b43=new B.cr(A.A,null,null,D.b5b,null)
D.bFF=new B.ae(K.Np,40,A.bI,null,null,null)
D.b44=new B.cr(A.A,null,null,D.bFF,null)
D.b60=new B.w(1,1,0.9019607843137255,0.6549019607843137,A.t)
D.b6d=new B.w(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.t)
D.b6B=new B.w(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.t)
D.b6H=new B.w(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.t)
D.b7c=new B.w(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.t)
D.b7t=new B.w(0.8,1,0.9450980392156862,0.9490196078431372,A.t)
D.b7u=new B.w(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.t)
D.Ko=new B.w(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.t)
D.b7T=new B.w(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.t)
D.b7Y=new B.w(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.ac7=new B.w(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.t)
D.b8H=new B.w(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.t)
D.b9q=new B.w(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.t)
D.acl=new B.w(1,1,1,0.9725490196078431,A.t)
D.b9J=new B.w(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.b9U=new B.w(1,1,0.5490196078431373,0.10196078431372549,A.t)
D.b9X=new B.w(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.t)
D.ba7=new B.w(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.bas=new B.w(1,1,0.9568627450980393,0.8392156862745098,A.t)
D.bbO=new B.w(1,1,0.996078431372549,0.9725490196078431,A.t)
D.Wd=new B.w(0.8509803921568627,0,0,0,A.t)
D.bbW=new B.w(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.t)
D.bc2=new B.w(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.t)
D.ad9=new B.w(0.6,0,0,0,A.t)
D.adb=new B.w(0,1,0.7019607843137254,0.2784313725490196,A.t)
D.bdp=new B.w(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.t)
D.td=new B.w(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.t)
D.bdP=new B.w(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.t)
D.bee=new B.w(1,1,0.8784313725490196,0.6392156862745098,A.t)
D.beB=new B.w(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.adX=new B.w(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.t)
D.WC=new B.w(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.t)
D.Ay=new B.w(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.t)
D.KU=new B.w(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.t)
D.j7=new B.w(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.t)
D.aem=new B.w(0,1,0.9686274509803922,0.8392156862745098,A.t)
D.WN=new B.w(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.t)
D.bhT=new B.w(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.t)
D.bim=new B.w(0.6,1,0.9686274509803922,0.9019607843137255,A.t)
D.biA=new B.w(0.6,1,0.984313725490196,0.9215686274509803,A.t)
D.X6=new B.w(1,0.07450980392156863,0.10980392156862745,0.2,A.t)
D.bjI=new B.w(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.t)
D.xe=new B.w(1,0.9137254901960784,0.7686274509803922,0.41568627450980394,A.t)
D.bkb=new B.w(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.t)
D.bkt=new B.hF(A.b3,!0,null,null)
D.f68=new B.G(!0,A.az,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fvL=new B.x("Bio link",null,D.f68,null,null,null,null,null,null,null,null,null)
D.b3Y=new B.cr(A.A,null,null,D.fvL,null)
D.bkJ=new B.hF(A.VB,!0,D.b3Y,null)
D.Li=new C.a3k(0,"none")
D.aft=new C.a3k(1,"deflate")
D.afu=new C.a3k(2,"bzip2")
D.blD=new B.kk(0.165,0.84,0.44,1)
D.cWo=w([A.ci,A.dP,A.aE],x.O)
D.bUP=new B.a8(A.ax,A.aC,A.x,D.cWo,null,null)
D.aZi=new B.o(null,null,null,null,null,D.bUP,A.n)
D.bOs=new B.ae(A.eR,null,A.ad,null,null,null)
D.b4z=new B.cr(A.A,null,null,D.bOs,null)
D.bm9=new B.kN(D.aZi,A.bd,D.b4z,null)
D.bi8=new B.w(0.058823529411764705,1,1,1,A.t)
D.cZu=w([A.bF,A.qE,A.qE,D.bi8],x.O)
D.cDe=w([0,0.32,0.7,1],x.x)
D.bVn=new B.a8(A.ax,A.aC,A.x,D.cZu,D.cDe,null)
D.aZ7=new B.o(null,null,null,null,null,D.bVn,A.n)
D.bmf=new B.kN(D.aZ7,A.bd,null,null)
D.bnh=new B.mg(1,1,null,null,null,A.bm,null)
D.bnk=new B.mg(1,null,null,null,null,D.WN,null)
D.bnO=new B.b9(125e4)
D.bnU=new B.b9(17e4)
D.bo3=new B.b9(35964e8)
D.bo9=new B.b9(55e4)
D.bod=new B.b9(68e4)
D.boE=new B.ib(0,0,0,5)
D.boV=new B.Q(0,16,16,0)
D.boY=new B.Q(0,18,0,8)
D.bp5=new B.Q(0,36,0,36)
D.bpc=new B.Q(0,54,0,0)
D.bpj=new B.Q(10,0,10,3)
D.bpu=new B.ib(10,16,10,10)
D.bpG=new B.Q(10,6,4,6)
D.bpJ=new B.Q(10,8,10,6)
D.ags=new B.Q(11,8,11,11)
D.bpN=new B.Q(12,0,12,24)
D.bpZ=new B.Q(12,12,12,4)
D.bq1=new B.Q(12,12,8,12)
D.bqg=new B.Q(12,8,8,12)
D.bqB=new B.Q(14,14,14,0)
D.bqG=new B.Q(14,14,14,90)
D.bqZ=new B.Q(16,10,16,16)
D.br_=new B.Q(16,10,16,20)
D.ahi=new B.Q(16,6,16,28)
D.bry=new B.Q(18,0,18,10)
D.brA=new B.Q(18,0,18,30)
D.brC=new B.Q(18,10,18,12)
D.brD=new B.Q(18,10,18,14)
D.brU=new B.Q(18,16,14,18)
D.brZ=new B.Q(18,18,18,12)
D.bs4=new B.Q(18,26,18,12)
D.bs9=new B.Q(18,34,18,34)
D.bsa=new B.Q(18,4,18,14)
D.bsg=new B.Q(18,8,18,24)
D.bsy=new B.Q(20,16,14,4)
D.bsD=new B.Q(20,18,12,4)
D.bsI=new B.Q(20,20,12,20)
D.bsL=new B.Q(20,22,20,20)
D.bsQ=new B.Q(20,6,20,6)
D.bsZ=new B.Q(22,18,22,18)
D.bt6=new B.Q(22,24,22,0)
D.bt9=new B.Q(22,24,22,4)
D.bth=new B.Q(22,60,22,22)
D.btn=new B.Q(24,24,24,22)
D.btx=new B.Q(26,10,60,10)
D.btE=new B.Q(28,44,28,44)
D.btV=new B.Q(32,44,32,44)
D.bu2=new B.Q(38,30,38,20)
D.bu7=new B.Q(4,0,0,6)
D.buj=new B.ib(4,4,4,4)
D.buK=new B.ib(6,5,6,5)
D.buP=new B.Q(6,6,8,6)
D.bv_=new B.Q(8,14,8,14)
D.bv0=new B.Q(8,22,8,22)
D.bv8=new B.Q(8,6,12,6)
D.bvh=new B.Q(8,8,8,4)
D.aib=new B.Q(9,9,9,6)
D.bvr=new B.ib(2.5,2.5,2.5,2.5)
D.bvs=new B.Q(10.5,0,10.5,0)
D.bvt=new B.Q(7,1.5,7,1.5)
D.cOr=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bvJ=new B.yE(null,null,D.cOr,A.Ac)
D.cLz=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bvK=new B.yE(null,null,D.cLz,A.Ac)
D.aPV=new B.G(!0,A.az,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fv4=new B.x("WORD DESIGN",null,D.aPV,null,null,null,null,null,null,null,null,null)
D.bwh=new B.bD(1,A.bh,D.fv4,null)
D.fuL=new B.x("Slides database",null,Ab.rE,null,null,null,null,null,null,null,null,null)
D.fs4=new B.x("Admin only \xb7 keep as many as you like",null,U.aPo,null,null,null,null,null,null,null,null,null)
D.dd9=w([D.fuL,A.bB,D.fs4],x.p)
D.bl7=new B.fq(A.ah,A.e,A.j,A.F,null,A.p,null,0,D.dd9,null)
D.bwk=new B.bD(1,A.bh,D.bl7,null)
D.fmD=new B.x("NGMY logo",null,A.fO,null,null,null,null,null,null,null,null,null)
D.bwn=new B.bD(1,A.bh,D.fmD,null)
D.f41=new B.G(!0,A.ad,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fx0=new B.x("TALK TO THE EDITOR",null,D.f41,null,null,null,null,null,null,null,null,null)
D.bwD=new B.bD(1,A.bh,D.fx0,null)
D.fgt=new B.x("Tell the AI what to change",null,Ab.rE,null,null,null,null,null,null,null,null,null)
D.bwX=new B.bD(1,A.bh,D.fgt,null)
D.bxO=new B.Dt(!0,"video/mp4")
D.f2k=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feC=new B.x("Move presentations between devices",null,D.f2k,null,null,null,!1,null,null,1,null,null)
D.bxS=new B.qe(A.eg,A.a3,A.f,D.feC,null)
D.ffI=new B.x("Edit in Slides",null,A.j1,null,null,null,null,null,null,null,null,null)
D.bxT=new B.qe(A.eg,A.A,A.f,D.ffI,null)
D.by7=new B.dq(1,A.cn,D.bxT,null)
D.ZT=new B.a0(60988,"MaterialIcons",!1)
D.bAT=new B.a0(61352,"MaterialIcons",!1)
D.ajH=new B.a0(61531,"MaterialIcons",!1)
D.bC6=new B.a0(63062,"MaterialIcons",!1)
D.bCe=new B.a0(63109,"MaterialIcons",!1)
D.bCp=new B.a0(63206,"MaterialIcons",!1)
D.akq=new B.a0(63238,"MaterialIcons",!1)
D.a_o=new B.a0(63365,"MaterialIcons",!1)
D.a_p=new B.a0(63367,"MaterialIcons",!1)
D.a_q=new B.a0(63368,"MaterialIcons",!1)
D.akC=new B.a0(63384,"MaterialIcons",!1)
D.bCZ=new B.a0(63525,"MaterialIcons",!1)
D.bD1=new B.a0(63568,"MaterialIcons",!1)
D.bDm=new B.a0(983072,"MaterialIcons",!1)
D.bDK=new B.a0(983271,"MaterialIcons",!0)
D.alO=new B.a0(983965,"MaterialIcons",!1)
D.alP=new B.a0(983966,"MaterialIcons",!1)
D.bEH=new B.a0(984592,"MaterialIcons",!1)
D.bEZ=new B.ae(A.tK,16,A.az,null,null,null)
D.bF5=new B.ae(A.ms,null,A.c,null,null,null)
D.alZ=new B.ae(A.pT,18,A.c,null,null,null)
D.bFm=new B.ae(A.Bj,18,O.la,null,null,null)
D.bG0=new B.ae(A.jh,11,null,null,null,null)
D.bGa=new B.ae(A.a_8,null,A.es,null,null,null)
D.bGJ=new B.ae(A.r0,18,A.az,null,null,null)
D.bGP=new B.ae(A2.Bw,14,null,null,null,null)
D.bGQ=new B.ae(A.e5,28,A.c7,null,null,null)
D.bH1=new B.ae(A.pU,20,A.c,null,null,null)
D.bH8=new B.ae(A.y8,null,null,null,null,null)
D.bHe=new B.ae(A.iU,18,A.hv,null,null,null)
D.bHj=new B.ae(A.lg,null,null,null,null,null)
D.bHO=new B.ae(A.a_E,28,A.c,null,null,null)
D.bC9=new B.a0(63065,"MaterialIcons",!1)
D.bHX=new B.ae(D.bC9,15,A.c,null,null,null)
D.bCf=new B.a0(63113,"MaterialIcons",!1)
D.bI2=new B.ae(D.bCf,null,A.ad,null,null,null)
D.bIq=new B.ae(A.vu,22,A.bK,null,null,null)
D.bIK=new B.ae(A.vv,18,null,null,null,null)
D.bIQ=new B.ae(A.Bz,12,A.c,null,null,null)
D.bEj=new B.a0(983687,"MaterialIcons",!1)
D.bJ0=new B.ae(D.bEj,null,A.bk,null,null,null)
D.bJ7=new B.ae(A.hz,null,A.bk,null,null,null)
D.bJq=new B.ae(A.oL,22,A.c,null,null,null)
D.bJu=new B.ae(A.cB,13,A.c,null,null,null)
D.bJA=new B.ae(A.e5,26,A.ay,null,null,null)
D.bJD=new B.ae(A.r5,26,A.c,null,null,null)
D.NC=new B.ae(A.jh,8,A.c,null,null,null)
D.bJV=new B.ae(A.pT,40,A.c,null,null,null)
D.bJW=new B.ae(A.bzQ,null,null,null,null,null)
D.bK_=new B.ae(A.tT,20,null,null,null,null)
D.bEi=new B.a0(983683,"MaterialIcons",!1)
D.bK9=new B.ae(D.bEi,null,A.aZ,null,null,null)
D.bKa=new B.ae(A.jh,16,A.bk,null,null,null)
D.bKv=new B.ae(A.r6,null,null,null,null,null)
D.amx=new B.ae(A.vx,22,A.c,null,null,null)
D.bKz=new B.ae(A.dW,17,A.c,null,null,null)
D.amy=new B.ae(A.jh,9,A.c,null,null,null)
D.bKE=new B.ae(A.vr,null,null,null,null,null)
D.bA6=new B.a0(57744,"MaterialIcons",!1)
D.bKL=new B.ae(D.bA6,null,null,null,null,null)
D.bKO=new B.ae(A.vr,16,null,null,null,null)
D.bEQ=new B.a0(985181,"MaterialIcons",!1)
D.Ge=new B.ae(D.bEQ,null,null,null,null,null)
D.bL_=new B.ae(A.lg,16,A.bK,null,null,null)
D.bEb=new B.a0(983615,"MaterialIcons",!1)
D.bL1=new B.ae(D.bEb,12,A.c,null,null,null)
D.amE=new B.ae(A.xR,16,null,null,null,null)
D.bL9=new B.ae(A.dW,21,A.c,null,null,null)
D.bLe=new B.ae(A.hz,17,A.c,null,null,null)
D.bLf=new B.ae(A.vu,null,null,null,null,null)
D.bLu=new B.ae(A.a01,20,A.az,null,null,null)
D.bLJ=new B.ae(A.nY,22,E.mZ,null,null,null)
D.bLQ=new B.ae(A.pS,13,A.ad,null,null,null)
D.bLS=new B.ae(A.alA,20,A.az,null,null,null)
D.bzO=new B.a0(57495,"MaterialIcons",!1)
D.bLX=new B.ae(D.bzO,null,null,null,null,null)
D.bM0=new B.ae(A.nZ,18,A.c,null,null,null)
D.bMl=new B.ae(A.tX,28,A.c,null,null,null)
D.bMv=new B.ae(D.akq,null,A.aE,null,null,null)
D.bMw=new B.ae(A.pU,22,A.c,null,null,null)
D.amN=new B.ae(A.ZP,16,null,null,null,null)
D.bNh=new B.ae(A.vu,32,A.c,null,null,null)
D.bO_=new B.ae(A.iX,22,A.c,null,null,null)
D.bO3=new B.ae(A.r5,22,A.ad,null,null,null)
D.an1=new B.ae(A.tK,null,A.c1,null,null,null)
D.bOY=new B.ae(A.tJ,18,null,null,null,null)
D.bPz=new B.ae(A.dW,18,A.cd,null,null,null)
D.a0q=new B.ae(A.cB,18,A.az,null,null,null)
D.bPF=new B.ae(A.alu,null,null,null,null,null)
D.bQ4=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aPI,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.eVA=new B.G(!0,A.bJ,null,null,null,null,null,A.cv,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bQm=new B.e2(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.eVA,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.af,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.bQN=new B.e2(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.ey,!0,null,null,null,null)
D.cSf=w([A.dS,A.aE],x.O)
D.bSB=new B.a8(A.a3,A.a7,A.x,D.cSf,null,null)
D.bSN=new B.a8(A.b0,A.b5,A.TJ,A.au5,null,null)
D.b6r=new B.w(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.t)
D.bav=new B.w(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.t)
D.bdq=new B.w(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.t)
D.b8z=new B.w(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.t)
D.cDg=w([D.b6r,D.bav,D.bdq,D.b8z],x.O)
D.bT5=new B.a8(A.ax,A.aC,A.x,D.cDg,A.GO,null)
D.ddg=w([A.cs,A.bA,A.b7],x.O)
D.bT7=new B.a8(A.b0,A.b5,A.TJ,D.ddg,null,null)
D.deA=w([A.bk,A.cc],x.O)
D.bTb=new B.a8(A.a3,A.a7,A.x,D.deA,null,null)
D.d9O=w([A.hu,A.d8,A.aH],x.O)
D.bTd=new B.a8(A.ax,A.aC,A.x,D.d9O,null,null)
D.cY_=w([A.d_,A.f8],x.O)
D.bTh=new B.a8(A.a3,A.a7,A.x,D.cY_,null,null)
D.ddb=w([O.la,A.d8],x.O)
D.anN=new B.a8(A.a3,A.a7,A.x,D.ddb,null,null)
D.bb3=new B.w(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.t)
D.dd8=w([D.bb3,D.xe,A.bZ],x.O)
D.bTm=new B.a8(A.a3,A.a7,A.x,D.dd8,null,null)
D.cTS=w([A.b1,A.cZ,A.f6],x.O)
D.bTn=new B.a8(A.ax,A.aC,A.x,D.cTS,null,null)
D.NQ=new B.a8(A.a3,A.a7,A.x,A.H1,null,null)
D.biX=new B.w(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.t)
D.cwk=w([D.biX,A.bZ,A.j9],x.O)
D.anS=new B.a8(A.ax,A.aC,A.x,D.cwk,null,null)
D.d22=w([A.x1,A.aw,D.Ay],x.O)
D.bUn=new B.a8(A.a3,A.a7,A.x,D.d22,null,null)
D.bkc=new B.w(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.t)
D.b9p=new B.w(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.t)
D.ber=new B.w(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.t)
D.cT1=w([D.bkc,D.b9p,D.ber],x.O)
D.anT=new B.a8(A.a3,A.a7,A.x,D.cT1,null,null)
D.bb5=new B.w(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.t)
D.bWk=w([Ax.afa,D.bb5],x.O)
D.bUw=new B.a8(A.b0,A.b5,A.x,D.bWk,null,null)
D.cR5=w([A.mX,A.bI],x.O)
D.bUA=new B.a8(A.b0,A.b5,A.x,D.cR5,null,null)
D.d6W=w([A.aE,A.dP],x.O)
D.bUG=new B.a8(A.a3,A.a7,A.x,D.d6W,null,null)
D.ae8=new B.w(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.t)
D.avM=w([D.ae8,D.j7,D.Ko],x.O)
D.bV7=new B.a8(A.ax,A.aC,A.x,D.avM,null,null)
D.cwc=w([A.dx,A.dL],x.O)
D.bVi=new B.a8(A.b0,A.b5,A.x,D.cwc,null,null)
D.d48=w([A.uV,AA.Em],x.O)
D.bW6=new B.a8(A.a3,A.a7,A.x,D.d48,null,null)
D.fo7=new B.x("Which Bio link?",null,A.cy,null,null,null,null,null,null,null,null,null)
D.bWh=new B.pD(null,D.fo7,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.yy=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.a4f=new C.kQ(2,"elegantNavy")
D.fXn=w([A.WA,D.j7,A.bZ],x.O)
D.jE=new C.xl(0,"classic")
D.a42=new C.jk("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a4f,4294967035,4279378237,4290283019,D.jE)
D.aEX=new C.kQ(3,"elegantGold")
D.b6_=new B.w(1,1,0.9882352941176471,0.9529411764705882,A.t)
D.b6W=new B.w(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.t)
D.acJ=new B.w(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.t)
D.fWQ=w([D.b6_,D.b6W,D.acJ],x.O)
D.a40=new C.jk("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aEX,4294966515,4281016592,4289102906,D.jE)
D.dzs=new C.kQ(22,"goldRibbon")
D.fWM=w([A.WA,D.j7,A.hV],x.O)
D.a3U=new C.jk("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dzs,4294967035,4279378237,4291404327,D.jE)
D.dzt=new C.kQ(23,"goldBaroque")
D.adk=new B.w(1,1,0.9647058823529412,0.8941176470588236,A.t)
D.fWS=w([D.adk,A.aw,A.j9],x.O)
D.a3V=new C.jk("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dzt,4294964964,4283053072,4292128567,D.jE)
D.dzv=new C.kQ(4,"elegantEmerald")
D.b83=new B.w(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.t)
D.b8W=new B.w(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.t)
D.fWY=w([D.b83,D.b8W,A.hV],x.O)
D.a3W=new C.jk("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dzv,4294376440,4279122734,4291404327,D.jE)
D.dzw=new C.kQ(5,"elegantBurgundy")
D.bcr=new B.w(1,1,0.9686274509803922,0.9647058823529412,A.t)
D.fX4=w([D.bcr,A.ac_,A.hV],x.O)
D.a3Z=new C.jk("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dzw,4294965238,4283043359,4291404327,D.jE)
D.dzp=new C.kQ(19,"goldFiligree")
D.L0=new B.w(1,1,0.984313725490196,0.9529411764705882,A.t)
D.fWT=w([D.L0,A.aw,A.j9],x.O)
D.a3X=new C.jk("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dzp,4294966259,4279378237,4292128567,D.jE)
D.dzq=new C.kQ(20,"goldLaurel")
D.biN=new B.w(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.t)
D.fX5=w([A.Kg,A.hV,D.biN],x.O)
D.a3Y=new C.jk("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dzq,4294966776,4282000405,4291404327,D.jE)
D.dzr=new C.kQ(21,"goldCrest")
D.abQ=new B.w(1,1,0.9725490196078431,0.9254901960784314,A.t)
D.biU=new B.w(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.t)
D.fWV=w([D.abQ,A.aw,D.biU],x.O)
D.a41=new C.jk("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dzr,4294965484,4283053072,4292128567,D.jE)
D.dzu=new C.kQ(24,"goldStar")
D.bk5=new B.w(1,1,0.9882352941176471,0.9647058823529412,A.t)
D.fWZ=w([D.bk5,A.aw,D.j7],x.O)
D.a4_=new C.jk("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dzu,4294966518,4279378237,4292128567,D.jE)
D.Gp=w([D.a42,D.a40,D.a3U,D.a3V,D.a3W,D.a3Z,D.a3X,D.a3Y,D.a41,D.a4_],x.h)
D.q5=new C.ms(0,"blank")
D.Rp=new C.ms(1,"title")
D.mA=new C.ms(2,"titleContent")
D.dU4=new C.ms(3,"twoColumn")
D.Ct=new C.ms(4,"section")
D.dU5=new C.ms(5,"comparison")
D.HB=new C.ms(6,"flashcard")
D.HC=new C.ms(7,"quiz")
D.HD=new C.ms(8,"worksheet")
D.aoe=w([D.q5,D.Rp,D.mA,D.dU4,D.Ct,D.dU5,D.HB,D.HC,D.HD],B.ax("O<ms>"))
D.awM=w([Ap.VY,A.dL],x.O)
D.ko=w([A.bZ,A.bK,A.hU,A.hG,D.Ay],x.O)
D.dvm=new C.iX("fireworks","Royal Fireworks","Thank you for celebrating with us",D.awM,D.ko)
D.bj5=new B.w(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.t)
D.bcp=new B.w(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.t)
D.cRi=w([D.bj5,D.bcp],x.O)
D.dvd=new C.iX("confetti","Golden Confetti","Together we rise",D.cRi,D.ko)
D.cOw=w([A.nC,A.VE],x.O)
D.dve=new C.iX("crown","Crown of Glory","Built for our community",D.cOw,D.ko)
D.b9g=new B.w(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.t)
D.bc4=new B.w(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.t)
D.cV9=w([D.b9g,D.bc4],x.O)
D.u0=w([A.bJ,A.aP,A.c,A.aL,A.ak],x.O)
D.dv8=new C.iX("aurora","Aurora Gala","A brighter future, together",D.cV9,D.u0)
D.bds=new B.w(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.t)
D.d4e=w([G.abt,D.bds],x.O)
D.dvp=new C.iX("champagne","Champagne Toast","Cheers to every member",D.d4e,D.ko)
D.dvq=new C.iX("diamonds","Diamond Rain","Every member is a jewel",X.axm,D.u0)
D.b6N=new B.w(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.t)
D.bbA=new B.w(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.t)
D.d95=w([D.b6N,D.bbA],x.O)
D.dv3=new C.iX("starburst","Golden Starburst","Thank you!",D.d95,D.ko)
D.bWq=w([A.f7,A.x6],x.O)
D.abC=new B.w(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.t)
D.Po=w([A.ou,A.io,A.v6,A.mP,D.abC],x.O)
D.dvx=new C.iX("balloons","Luxury Balloons","Let's celebrate",D.bWq,D.Po)
D.cNP=w([A.VM,A.w],x.O)
D.dvl=new C.iX("galaxy","Galaxy Spiral","The sky is not the limit",D.cNP,D.u0)
D.bhb=new B.w(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.t)
D.d0T=w([A.kf,D.bhb],x.O)
D.dvg=new C.iX("redcarpet","Red Carpet","Tonight we shine",D.d0T,D.ko)
D.bf3=new B.w(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.t)
D.bdf=new B.w(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.t)
D.d58=w([D.bf3,D.bdf],x.O)
D.dv5=new C.iX("coins","Gold Coin Rain","Every contribution counts",D.d58,D.ko)
D.dbG=w([A.dx,A.hF],x.O)
D.dvb=new C.iX("lanterns","Sky Lanterns","Lighting the way together",D.dbG,D.ko)
D.bab=new B.w(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.t)
D.cLQ=w([A.x8,D.bab],x.O)
D.dv7=new C.iX("hearts","Floating Hearts","Made with love",D.cLQ,D.Po)
D.b7m=new B.w(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.t)
D.b89=new B.w(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.t)
D.dd6=w([D.b7m,D.b89],x.O)
D.dvw=new C.iX("petals","Rose Petals","Thank you, from our hearts",D.dd6,D.Po)
D.bi6=new B.w(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.t)
D.d9p=w([A.l9,D.bi6],x.O)
D.dv2=new C.iX("butterflies","Golden Butterflies","New beginnings",D.d9p,D.ko)
D.beo=new B.w(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.t)
D.cMM=w([D.beo,A.w],x.O)
D.dvo=new C.iX("neon","Neon Night","Let's go!",D.cMM,D.u0)
D.bbi=new B.w(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.t)
D.d76=w([A.KF,D.bbi],x.O)
D.dvr=new C.iX("disco","Disco Ball","Party time",D.d76,D.u0)
D.beW=new B.w(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.t)
D.d6E=w([A.hu,D.beW],x.O)
D.dv6=new C.iX("sunrise","Golden Sunrise","A new day for our community",D.d6E,D.ko)
D.d6h=w([A.qI,A.dL],x.O)
D.dvs=new C.iX("pearls","Ocean Pearls","Deep roots, bright future",D.d6h,D.u0)
D.b9l=new B.w(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.t)
D.d6v=w([D.b9l,A.dL],x.O)
D.dvv=new C.iX("snow","Winter Gala","Warm wishes to all",D.d6v,D.u0)
D.b69=new B.w(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.t)
D.b76=new B.w(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.t)
D.dc3=w([D.b69,D.b76],x.O)
D.dvk=new C.iX("laurel","Laurel Victory","We did it together",D.dc3,D.ko)
D.b5Z=new B.w(1,0.12156862745098039,0.06274509803921569,0.2,A.t)
D.bc0=new B.w(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.t)
D.cKY=w([D.b5Z,D.bc0],x.O)
D.dvu=new C.iX("ribbons","Silk Ribbons","Elegance in every step",D.cKY,D.ko)
D.bd_=new B.w(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.t)
D.cw9=w([G.Ax,D.bd_],x.O)
D.dvh=new C.iX("kente","Kente Pride","Proud of our roots",D.cw9,D.ko)
D.bfC=new B.w(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.t)
D.biq=new B.w(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.t)
D.cWJ=w([D.bfC,D.biq],x.O)
D.dvc=new C.iX("trophy","Trophy Shine","Winners together",D.cWJ,D.ko)
D.d6B=w([Aq.Ku,A.w],x.O)
D.dv4=new C.iX("shooting","Shooting Stars","Make a wish",D.d6B,D.u0)
D.b6g=new B.w(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.t)
D.aeY=new B.w(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.t)
D.dcj=w([D.b6g,D.aeY],x.O)
D.dvi=new C.iX("bokeh","Golden Bokeh","Shine bright",D.dcj,D.ko)
D.b6C=new B.w(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.t)
D.d1H=w([D.b6C,A.w],x.O)
D.dva=new C.iX("orbits","Golden Orbits","Always moving forward",D.d1H,D.ko)
D.bi7=new B.w(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.t)
D.cZn=w([A.acF,D.bi7],x.O)
D.dvf=new C.iX("flowers","Blooming Garden","Growing together",D.cZn,D.Po)
D.b6p=new B.w(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.t)
D.b70=new B.w(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.t)
D.db9=w([D.b6p,D.b70],x.O)
D.dv9=new C.iX("music","Music Party","Celebrate with us",D.db9,D.u0)
D.b7U=new B.w(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.t)
D.biQ=new B.w(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.t)
D.cM1=w([D.b7U,D.biQ],x.O)
D.dvt=new C.iX("mandala","Royal Mandala","Harmony and unity",D.cM1,D.ko)
D.cZs=w([G.Ax,D.aeY],x.O)
D.dvn=new C.iX("sparklers","Golden Sparklers","Light up the night",D.cZs,D.ko)
D.dvj=new C.iX("city","City Lights","The whole city celebrates",D.awM,D.ko)
D.Gy=w([D.dvm,D.dvd,D.dve,D.dv8,D.dvp,D.dvq,D.dv3,D.dvx,D.dvl,D.dvg,D.dv5,D.dvb,D.dv7,D.dvw,D.dv2,D.dvo,D.dvr,D.dv6,D.dvs,D.dvv,D.dvk,D.dvu,D.dvh,D.dvc,D.dv4,D.dvi,D.dva,D.dvf,D.dv9,D.dvt,D.dvn,D.dvj],B.ax("O<iX>"))
D.ehu=new B.y("","No ring")
D.ew5=new B.y("platinum","Platinum")
D.et4=new B.y("glow","Glow")
D.ekS=new B.y("double","Double line")
D.ejN=new B.y("framed","Gallery frame")
D.eh7=new B.y("rosegold","Rose gold")
D.etP=new B.y("jewels","Jeweled")
D.eqy=new B.y("aurora","Aurora")
D.BQ=w([D.ehu,A.a5v,D.ew5,D.et4,H.aLs,D.ekS,A.a5x,D.ejN,D.eh7,D.etP,D.eqy],x.L)
D.cfP=w([D.a3X,D.a3Y,D.a41,D.a3U,D.a3V,D.a4_],x.h)
D.bLn=new B.ae(G.ajh,16,null,null,null,null)
D.b1j=new B.vl(A.bg,D.bLn,null,x.U)
D.bAf=new B.a0(58027,"MaterialIcons",!1)
D.bF4=new B.ae(D.bAf,16,null,null,null,null)
D.b1h=new B.vl(A.L,D.bF4,null,x.U)
D.bAg=new B.a0(58030,"MaterialIcons",!1)
D.bJ6=new B.ae(D.bAg,16,null,null,null,null)
D.b1k=new B.vl(A.dM,D.bJ6,null,x.U)
D.clZ=w([D.b1j,D.b1h,D.b1k],B.ax("O<vl<pT>>"))
D.cty=w([A.AC,A.hf],x.O)
D.ctz=w([A.b1,A.bo,A.f6],x.O)
D.Pc=w([A.bK,A.hG,A.hU,A.aw,A.mP],x.O)
D.cwf=w([A.bZ,D.j7,D.Ko],x.O)
D.cwN=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.ef7=new B.y(4278913286,4280030216)
D.efp=new B.y(4279373061,4278518787)
D.efw=new B.y(4279898630,4278847235)
D.cW8=w([D.ef7,D.efp,D.efw],x.n)
D.cRZ=w(["\u265b","\u269c","\u2726"],x.s)
D.dzn=new C.xn("Royal Onyx & Gold",D.cW8,4292128567,4294370209,4294965479,3874020544,D.cRZ)
D.eeV=new B.y(4278326799,4278598442)
D.eeX=new B.y(4278395929,4278258953)
D.ef3=new B.y(4278599728,4278327826)
D.dbx=w([D.eeV,D.eeX,D.ef3],x.n)
D.cME=w(["\u269c","\u2756","\u2727"],x.s)
D.dzk=new C.xn("Imperial Emerald",D.dbx,4293050997,4294699968,4294180856,3872254170,D.cME)
D.eeY=new B.y(4278455076,4278918747)
D.ef2=new B.y(4278587439,4278322714)
D.efg=new B.y(4279051376,4278455076)
D.d9K=w([D.eeY,D.ef2,D.efg],x.n)
D.d2i=w(["\u2654","\u2726","\u2748"],x.s)
D.dze=new C.xn("Sapphire Crown",D.d9K,4291417834,4294967295,4294310143,3871986666,D.d2i)
D.efu=new B.y(4279894534,4283041554)
D.efG=new B.y(4281008906,4279042307)
D.efO=new B.y(4284221976,4279894534)
D.df9=w([D.efu,D.efG,D.efO],x.n)
D.cNY=w(["\u265b","\u2766","\u2726"],x.s)
D.dzg=new C.xn("Ruby Throne",D.df9,4293378685,4294963145,4294964466,3874213833,D.cNY)
D.efo=new B.y(4279371039,4281995100)
D.efy=new B.y(4280092723,4278714896)
D.efL=new B.y(4283045242,4279371039)
D.dbT=w([D.efo,D.efy,D.efL],x.n)
D.da5=w(["\u2655","\u2756","\u2727"],x.s)
D.dzl=new C.xn("Amethyst Palace",D.dbT,4293314984,4294963421,4294702591,3873229802,D.da5)
D.ef_=new B.y(4278519045,4280032287)
D.efh=new B.y(4279111184,4278321666)
D.efD=new B.y(4280492839,4278716426)
D.d8D=w([D.ef_,D.efh,D.efD],x.n)
D.d0G=w(["\u2726","\u25c6","\u2742"],x.s)
D.dzi=new C.xn("Obsidian & Platinum",D.d8D,4293256418,4294967295,4294638330,3872378836,D.d0G)
D.efv=new B.y(4279896588,4282194463)
D.efE=new B.y(4280553487,4279043334)
D.efM=new B.y(4283048488,4279896588)
D.d0a=w([D.efv,D.efE,D.efM],x.n)
D.ddu=w(["\u2766","\u273f","\u2727"],x.s)
D.dzf=new C.xn("Rose Gold Velvet",D.d0a,4293440672,4294960345,4294964979,3874214602,D.ddu)
D.ef0=new B.y(4278520340,4279180595)
D.ef5=new B.y(4278718495,4278322443)
D.efs=new B.y(4279510591,4278520340)
D.cCY=w([D.ef0,D.ef5,D.efs],x.n)
D.d1l=w(["\u269c","\u2736","\u2756"],x.s)
D.dzj=new C.xn("Midnight Brass",D.cCY,4291405148,4293975208,4294439914,3872837564,D.d1l)
D.eg0=new B.y(4294703086,4293780428)
D.efX=new B.y(4294307549,4293187253)
D.eg1=new B.y(4294966517,4293977807)
D.cQ2=w([D.eg0,D.efX,D.eg1],x.n)
D.d1K=w(["\u269c","\u265b","\u2726"],x.s)
D.dzm=new C.xn("Ivory Marble & Gold",D.cQ2,4289760572,4286209048,4280951062,3863625518,D.d1K)
D.efb=new B.y(4278978566,4280555024)
D.efr=new B.y(4279504137,4278518530)
D.efI=new B.y(4281211923,4278978566)
D.cNN=w([D.efb,D.efr,D.efI],x.n)
D.daN=w(["\u2742","\u2726","\u265c"],x.s)
D.dzh=new C.xn("Onyx & Copper",D.cNN,4291856987,4294365880,4294964718,3873885630,D.daN)
D.cwV=w([D.dzn,D.dzk,D.dze,D.dzg,D.dzl,D.dzi,D.dzf,D.dzj,D.dzm,D.dzh],B.ax("O<xn>"))
D.czc=w([A.aw,D.Ay,A.hG],x.O)
D.emY=new B.y("Original",null)
D.en5=new B.y("Wide 16:9",1.7777777777777777)
D.epj=new B.y("Landscape 3:2",1.5)
D.emr=new B.y("Photo 4:3",1.3333333333333333)
D.eo8=new B.y("Square",1)
D.ezF=new B.y("Portrait 3:4",0.75)
D.aud=w([D.emY,D.en5,D.epj,D.emr,D.eo8,D.ezF],B.ax("O<+(n,N?)>"))
D.aue=w([A.hG,A.bV,A.b8,A.bu],x.O)
D.ept=new B.y("","Original")
D.erh=new B.y("circle","Circle")
D.ewQ=new B.y("rounded","Rounded")
D.exK=new B.y("triangle","Triangle")
D.eti=new B.y("hexagon","Hexagon")
D.erG=new B.y("diamond","Diamond")
D.eqx=new B.y("arch","Arch")
D.BV=w([D.ept,D.erh,D.ewQ,D.exK,D.eti,D.erG,D.eqx],x.L)
D.dur=new C.la("classic_blue","Classic Blue","Normal",A.bk,A.c,A.kh,A.dr,A.aK)
D.duH=new C.la("campus_green","Campus Green","Normal",A.aZ,A.mV,A.t9,A.h4,A.eu)
D.duy=new C.la("warm_sand","Warm Sand","Normal",A.dT,A.hU,A.bK,A.it,A.nG)
D.duF=new C.la("slate_minimal","Slate Minimal","Normal",A.bv,A.aP,A.aL,A.M,A.aK)
D.duq=new C.la("coral_fresh","Coral Fresh","Normal",A.ci,A.iq,A.qA,A.jR,A.t3)
D.duG=new C.la("lavender_calm","Lavender Calm","Normal",A.b7,A.pm,A.Am,A.pp,A.jq)
D.dus=new C.la("ocean_breeze","Ocean Breeze","Normal",A.f8,A.qN,A.rZ,A.uX,A.nH)
D.aee=new B.w(1,0.9803921568627451,0.9607843137254902,1,A.t)
D.duD=new C.la("berry_pop","Berry Pop","Normal",A.fi,D.aee,A.kb,G.X4,A.EJ)
D.dut=new C.la("midnight_pro","Midnight Pro","Professional",A.aE,A.M,A.dx,A.kb,A.cq)
D.duC=new C.la("executive_navy","Executive Navy","Professional",A.d6,A.adz,A.dr,A.l7,A.bJ)
D.duA=new C.la("boardroom_charcoal","Boardroom Charcoal","Professional",A.ak,A.bm,A.M,A.aP,A.cq)
D.duu=new C.la("corporate_steel","Corporate Steel","Professional",A.mT,A.M,A.mf,A.fb,A.bJ)
D.dux=new C.la("gold_luxe","Gold Luxe","Luxury",A.nI,A.dH,A.ot,A.lD,A.bK)
D.bf_=new B.w(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.t)
D.duB=new C.la("rose_gold_elite","Rose Gold Elite","Luxury",A.hf,D.bf_,A.WV,A.io,A.mP)
D.duE=new C.la("platinum_night","Platinum Night","Luxury",A.cq,A.dL,A.bm,A.aP,A.aL)
D.duI=new C.la("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.ps,A.eY,A.pA,A.jr)
D.dup=new C.la("royal_purple","Royal Purple","Luxury",A.mU,A.W4,A.jq,A.kb,A.Kf)
D.duz=new C.la("neon_pitch","Neon Pitch","Bold",A.b8,A.dL,A.M,A.b2,A.aL)
D.duw=new C.la("crimson_impact","Crimson Impact","Bold",A.bI,A.kf,A.er,A.tk,A.f3)
D.duv=new C.la("sunset_gallery","Sunset Gallery","Bold",A.fx,A.t3,A.jR,A.qA,A.me)
D.GI=w([D.dur,D.duH,D.duy,D.duF,D.duq,D.duG,D.dus,D.duD,D.dut,D.duC,D.duA,D.duu,D.dux,D.duB,D.duE,D.duI,D.dup,D.duz,D.duw,D.duv],B.ax("O<la>"))
D.cKF=w([A.bZ,D.j7],x.O)
D.d0q=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eqj=new B.y("Faces & people",D.d0q)
D.czg=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.ee0=new B.y("Ideas & work",D.czg)
D.cSu=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.etn=new B.y("Nature",D.cSu)
D.d0z=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.emW=new B.y("Places & things",D.d0z)
D.cVI=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eqC=new B.y("Symbols",D.cVI)
D.cKL=w([D.eqj,D.ee0,D.etn,D.emW,D.eqC],B.ax("O<+(n,ai<n>)>"))
D.b6u=new B.w(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.t)
D.cL8=w([A.bZ,D.acJ,D.b6u],x.O)
D.b0F=new B.ac(0,A.G,A.Kc,A.aFM,40)
D.b0m=new B.ac(0,A.G,A.nE,A.ek,8)
D.cLk=w([D.b0F,D.b0m],x.V)
D.cLM=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.auD=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a1C=w([A.hG,A.f6,A.bI,A.aB,A.ci],x.O)
D.cMy=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.acX=new B.w(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.t)
D.cMJ=w([A.WK,D.acX,A.WK],x.O)
D.cMP=w([A.hV,D.j7,D.Ko],x.O)
D.emK=new B.y(A.bg,D.a_p)
D.eo3=new B.y(A.L,D.a_o)
D.ei6=new B.y(A.dM,D.a_q)
D.cNI=w([D.emK,D.eo3,D.ei6],B.ax("O<+(pT,a0)>"))
D.cNO=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Cipher Lab, Reaction Lab, Spark Painter, Rocket Lander, Orbit Studio, Swarm Studio, Chain Burst, Title Animator, Circuit Lab, Marble Music and Orbit Sequencer.","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.cQ=new C.Ip(0,"text")
D.lq=new C.Ip(1,"image")
D.f0=new C.Ip(2,"shape")
D.Ro=new C.Ip(3,"pdf")
D.kW=new C.Ip(4,"signature")
D.a4m=new C.Ip(5,"bio")
D.cOB=w([D.cQ,D.lq,D.f0,D.Ro,D.kW,D.a4m],B.ax("O<Ip>"))
D.cOC=w([A.bl,A.cF],B.ax("O<Hl>"))
D.cPc=w(["School","Documents","Sign & present"],x.s)
D.b0K=new B.ac(0,A.G,A.aeO,A.ui,28)
D.cPw=w([D.b0K],x.V)
D.cPP=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Pw=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.av1=w([A.hG,A.EI,A.aL,A.c,A.ou,A.aw],x.O)
D.ez2=new B.y(0.1,0.08)
D.etl=new B.y(0.3,0.05)
D.ehE=new B.y(0.55,0.1)
D.elK=new B.y(0.8,0.06)
D.eoN=new B.y(0.92,0.16)
D.eoi=new B.y(0.2,0.2)
D.emc=new B.y(0.7,0.22)
D.es2=new B.y(0.05,0.4)
D.epb=new B.y(0.95,0.45)
D.eil=new B.y(0.12,0.7)
D.ekw=new B.y(0.88,0.75)
D.ekE=new B.y(0.4,0.9)
D.egg=new B.y(0.65,0.93)
D.elm=new B.y(0.25,0.97)
D.emH=new B.y(0.85,0.9)
D.eja=new B.y(0.5,0.04)
D.cRd=w([D.ez2,D.etl,D.ehE,D.elK,D.eoN,D.eoi,D.emc,D.es2,D.epb,D.eil,D.ekw,D.ekE,D.egg,D.elm,D.emH,D.eja],x.G)
D.cRk=w([A.c,A.hf,A.aS,A.aV],x.O)
D.dVH=new C.jC("office_blue","Office Blue",A.bk,A.dr,A.aK,A.c,A.kh)
D.dVS=new C.jC("campus_green","Campus Green",A.aZ,A.h4,A.eu,A.mV,A.t9)
D.dVI=new C.jC("sunset","Sunset",A.fx,A.jR,A.nG,A.iq,A.qA)
D.dVJ=new C.jC("midnight","Midnight",A.aE,A.kb,A.cq,A.M,A.dx)
D.dVU=new C.jC("classic","Classic",A.d8,A.dH,A.lE,A.hU,A.h2)
D.dVR=new C.jC("rose_gold","Rose Gold",A.hf,A.x9,A.x8,A.v6,A.AC)
D.dVC=new C.jC("ocean_teal","Ocean Teal",A.f8,A.uX,A.nH,A.qN,A.rZ)
D.dVB=new C.jC("slate_pro","Slate Pro",A.bv,A.M,A.aK,A.aP,A.aL)
D.dVA=new C.jC("neon_night","Neon Night",A.b8,A.b2,A.aL,A.dL,A.M)
D.dVM=new C.jC("lavender","Lavender",A.b7,A.pp,A.jq,A.pm,A.Am)
D.dVO=new C.jC("coral","Coral",A.ci,A.jR,A.t3,A.iq,A.me)
D.dVD=new C.jC("forest","Forest",A.hg,A.e3,A.cE,A.lF,A.es)
D.dVE=new C.jC("berry","Berry",A.fi,G.X4,A.EJ,D.aee,A.kb)
D.dVL=new C.jC("sand","Sand",A.dT,A.it,A.nG,A.hU,A.bK)
D.dVQ=new C.jC("ice","Ice",A.mT,A.KG,A.aK,A.mR,A.fb)
D.dVG=new C.jC("charcoal","Charcoal",A.ak,A.aP,A.cq,A.bm,A.M)
D.dVz=new C.jC("mint","Mint",A.aV,A.fv,A.h4,A.lF,A.pA)
D.dVP=new C.jC("crimson","Crimson",A.bI,A.mX,A.kf,A.EG,A.tk)
D.b8V=new B.w(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.t)
D.dVK=new C.jC("gold","Gold",A.nI,A.uV,A.ot,D.b8V,A.lD)
D.dVN=new C.jC("aqua","Aqua",A.bN,A.Ev,A.or,A.po,A.ov)
D.dVF=new C.jC("plum","Plum",A.mU,A.x6,A.EJ,A.Ei,A.qL)
D.dVT=new C.jC("steel","Steel",A.d6,A.dr,A.bm,A.kh,A.l7)
D.a1R=w([D.dVH,D.dVS,D.dVI,D.dVJ,D.dVU,D.dVR,D.dVC,D.dVB,D.dVA,D.dVM,D.dVO,D.dVD,D.dVE,D.dVL,D.dVQ,D.dVG,D.dVz,D.dVP,D.dVK,D.dVN,D.dVF,D.dVT],B.ax("O<jC>"))
D.cRF=w([A.bZ,A.j9],x.O)
D.Rq=new C.hx(10,"rotate3d")
D.HF=new C.hx(8,"flip")
D.aFf=new C.hx(19,"spiral")
D.q6=new C.hx(16,"bounce")
D.aFi=new C.hx(9,"flipVertical")
D.cRG=w([D.Rq,D.HF,D.aFf,D.q6,D.aFi],x.i)
D.e6=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.cS1=w([0.62,1],x.x)
D.cSC=w([0,0.32,0.68,1],x.x)
D.mB=new C.hx(6,"zoom")
D.uc=new C.hx(4,"slideUp")
D.ub=new C.hx(2,"slideLeft")
D.cSL=w([D.mB,D.HF,D.uc,D.Rq,D.ub],x.i)
D.cTf=w([A.bV,A.hf,A.io,A.hG,A.c],x.O)
D.b0A=new B.ac(0,A.G,D.ad9,A.ui,30)
D.cTX=w([D.b0A],x.V)
D.e4i=new B.u(0,-2.5)
D.e48=new B.u(-2.5,0)
D.e2R=new B.u(2.5,0)
D.cU_=w([A.RG,A.a4J,A.aGh,A.a4I,D.e4i,H.aGd,D.e48,D.e2R],x.dN)
D.GP=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.cUs=w([23,114,69,56,80,144],x.t)
D.cUS=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.cVg=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.cWN=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.cWR=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.be=new C.uy(0,"rectangle")
D.eJ=new C.uy(1,"circle")
D.kX=new C.uy(6,"hexagon")
D.cX3=w([D.be,D.eJ,D.kX],x.m)
D.o4=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.ael=new B.w(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.t)
D.cXB=w([D.ael,A.e3],x.O)
D.ehP=new B.y("","Classic")
D.egu=new B.y("caps","Bold caps")
D.es5=new B.y("elegant","Elegant")
D.ex8=new B.y("shadow","Shadow")
D.em5=new B.y("neon","Neon glow")
D.evM=new B.y("outline","Outline")
D.euY=new B.y("marker","Highlighter")
D.exj=new B.y("stamp","Stamp")
D.ewL=new B.y("retro","Retro")
D.el3=new B.y("threed","3D")
D.esB=new B.y("fire","Fire")
D.etx=new B.y("ice","Ice")
D.erg=new B.y("chalk","Chalk")
D.erl=new B.y("comic","Comic")
D.exl=new B.y("sunset","Sunset")
D.eys=new B.y("softglow","Soft glow")
D.euw=new B.y("lowercase","Lowercase")
D.erN=new B.y("double","Echo")
D.eyB=new B.y("whisper","Whisper")
D.avU=w([D.ehP,D.egu,D.es5,D.ex8,D.em5,D.evM,D.euY,D.exj,D.ewL,D.el3,H.aLq,D.esB,D.etx,D.erg,D.erl,A.a5v,D.exl,D.eys,D.euw,D.erN,D.eyB],x.L)
D.cYP=w([3,5,7,10,12,15],x.t)
D.d_a=w([A.bV,A.bK,A.c,A.ez,A.cs],x.O)
D.dm5=new C.t9(10,"cardWorld")
D.Cl=new C.Bd(3,"rounded")
D.dCo=new C.ld("world","NGMY World",D.dm5,D.Cl,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dm6=new C.t9(11,"cardSplit")
D.dCk=new C.ld("business","Business Wire",D.dm6,D.Cl,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dm7=new C.t9(12,"cardBreaking")
D.dCx=new C.ld("breaking","Breaking Red",D.dm7,D.Cl,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dm8=new C.t9(13,"cardFeature")
D.dCq=new C.ld("feature","Tech Feature",D.dm8,D.Cl,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aDM=new C.t9(6,"circle")
D.aDG=new C.Bd(4,"circle")
D.dCu=new C.ld("parchment","Royal Circle",D.aDM,D.aDG,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.dCj=new C.ld("ocean","Blue Ocean",D.aDM,D.aDG,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dmb=new C.t9(7,"rail")
D.aDF=new C.Bd(1,"double")
D.dCl=new C.ld("forest","Green Leaf",D.dmb,D.aDF,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aDJ=new C.t9(1,"sideBySide")
D.dCz=new C.ld("herald","NGMY Herald",D.aDJ,D.Cl,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aDI=new C.t9(0,"classic")
D.a3z=new C.Bd(9,"shadow")
D.dCy=new C.ld("daily","The Daily",D.aDI,D.a3z,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dm9=new C.t9(2,"splash")
D.aDH=new C.Bd(6,"cutCorner")
D.dCi=new C.ld("tabloid","Big Tabloid",D.dm9,D.aDH,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aDN=new C.t9(9,"minimal")
D.dCt=new C.ld("modern","Modern Digest",D.aDN,D.Cl,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aDK=new C.t9(3,"magazine")
D.aDE=new C.Bd(0,"plain")
D.dCp=new C.ld("midnight","Midnight Edition",D.aDK,D.aDE,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dmc=new C.t9(8,"banner")
D.dCr=new C.ld("metro","Metro Wire",D.dmc,D.aDH,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dm4=new C.Bd(8,"arch")
D.dCs=new C.ld("sunrise","Sunrise Post",D.aDK,D.dm4,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aDL=new C.t9(5,"scrapbook")
D.dm3=new C.Bd(5,"tape")
D.dCn=new C.ld("neon","Neon Beat",D.aDL,D.dm3,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dma=new C.t9(4,"wrap")
D.dCA=new C.ld("gold","Golden Press",D.dma,D.a3z,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.dCB=new C.ld("minimal","Paper White",D.aDN,D.a3z,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.dCm=new C.ld("gazette","Fresh Gazette",D.aDI,D.aDF,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.dCw=new C.ld("times","Classic Times",D.aDJ,D.aDE,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.QX=new C.Bd(2,"polaroid")
D.dCv=new C.ld("scrapbook","Memory Scrapbook",D.aDL,D.QX,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a25=w([D.dCo,D.dCk,D.dCx,D.dCq,D.dCu,D.dCj,D.dCl,D.dCz,D.dCy,D.dCi,D.dCt,D.dCp,D.dCr,D.dCs,D.dCn,D.dCA,D.dCB,D.dCm,D.dCw,D.dCv],B.ax("O<ld>"))
D.d_m=w([0.45,1],x.x)
D.GR=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.d_I=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.fSr=new C.os("Original",0,1,1,0,0,0)
D.fSv=new C.os("Black & white",0,1.1,0,0,0,0)
D.fSi=new C.os("Noir",-0.05,1.55,0,0,0,0)
D.fSm=new C.os("Sepia",0,1,0.25,0.9,0,0)
D.fSl=new C.os("Vivid",0,1.15,1.6,0,0,0)
D.fSe=new C.os("Pop",0,1.3,1.9,0,0,0)
D.fSg=new C.os("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.fSs=new C.os("Matte",0,0.9,0.85,0,0,0.55)
D.fSn=new C.os("Cool",0,1.05,1,-0.8,0,0)
D.fSu=new C.os("Warm",0.03,1.05,1.1,0.8,0,0)
D.fSf=new C.os("Golden hour",0.04,1,1.25,1,0,0)
D.fSk=new C.os("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.fSt=new C.os("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.fSj=new C.os("Dramatic",-0.05,1.5,1.2,0,0,0)
D.fSp=new C.os("Retro",0,0.9,0.7,0.4,0,0.35)
D.fSo=new C.os("Forest",0,1,1.2,-0.1,-0.45,0)
D.fSq=new C.os("Rose",0,1,1.1,0.3,0.4,0)
D.fSh=new C.os("Ocean",0,1,1.2,-0.5,-0.2,0)
D.d_J=w([D.fSr,D.fSv,D.fSi,D.fSm,D.fSl,D.fSe,D.fSg,D.fSs,D.fSn,D.fSu,D.fSf,D.fSk,D.fSt,D.fSj,D.fSp,D.fSo,D.fSq,D.fSh],B.ax("O<os>"))
D.b5V=new B.w(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.t)
D.d_K=w([D.ael,A.e3,D.b5V],x.O)
D.edU=new B.y(0.12,0.3)
D.etI=new B.y(0.26,0.75)
D.es1=new B.y(0.8,0.22)
D.ext=new B.y(0.9,0.7)
D.euv=new B.y(0.5,0.15)
D.evO=new B.y(0.65,0.85)
D.ejE=new B.y(0.08,0.85)
D.d_W=w([D.edU,D.etI,D.es1,D.ext,D.euv,D.evO,D.ejE],x.G)
D.aw3=w([A.b8,A.bV,A.bu,A.b1],x.O)
D.d0K=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.d0W=w([A.c,A.fb,A.dv,A.uY],x.O)
D.b97=new B.w(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.t)
D.d1T=w([D.b97,D.acX],x.O)
D.d1U=w([A.x1,A.aw],x.O)
D.d27=w([0,0.25,0.75,1],x.x)
D.d29=w([A.wY,A.ou],x.O)
D.aEQ=new C.kQ(10,"kenteSunset")
D.fWO=w([D.adk,A.jN,A.aw],x.O)
D.dxG=new C.jk("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aEQ,4294964964,4282000405,4279983648,D.jE)
D.aER=new C.kQ(11,"indigoMudcloth")
D.b6S=new B.w(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.t)
D.fX1=w([D.b6S,A.acU,A.hV],x.O)
D.dxO=new C.jk("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aER,4294439140,4279903102,4279903102,D.jE)
D.aES=new C.kQ(12,"adinkraRoyal")
D.bjy=new B.w(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.t)
D.fX2=w([D.abQ,D.bjy,A.aw],x.O)
D.dxQ=new C.jk("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aES,4294965484,4285218591,4287322667,D.jE)
D.aET=new C.kQ(13,"nileLotus")
D.bfS=new B.w(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.t)
D.bcF=new B.w(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.t)
D.fX7=w([D.bfS,D.bcF,A.hV],x.O)
D.dxP=new C.jk("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aET,4294244340,4279196764,4279196764,D.jE)
D.aEU=new C.kQ(14,"shweshweIvory")
D.baU=new B.w(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.t)
D.b9N=new B.w(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.t)
D.b7l=new B.w(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.t)
D.fWP=w([D.baU,D.b9N,D.b7l],x.O)
D.dxL=new C.jk("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEU,4294505710,4279970378,4291058750,D.jE)
D.rm=new C.kQ(15,"certIvoryNavy")
D.fWN=w([D.L0,D.j7,A.hV],x.O)
D.aEl=new C.xl(1,"ringsNdoa")
D.dxI=new C.jk("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.rm,4294966259,4279378237,4291404327,D.aEl)
D.a44=new C.xl(2,"coupleCards")
D.dxD=new C.jk("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.rm,4294966259,4279378237,4291404327,D.a44)
D.Co=new C.kQ(18,"certIvoryNavyBar")
D.abP=new B.w(1,1,0.9882352941176471,0.9686274509803922,A.t)
D.fX0=w([D.abP,D.j7,A.hV],x.O)
D.aEm=new C.xl(3,"kuhoweshaForm")
D.dxB=new C.jk("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Co,4294966519,4279378237,4291404327,D.aEm)
D.ad7=new B.w(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.t)
D.fXk=w([D.L0,D.ad7,A.hV],x.O)
D.a45=new C.xl(4,"mahariPande")
D.dxE=new C.jk("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.rm,4294966259,4279904068,4291404327,D.a45)
D.aEV=new C.kQ(16,"certIvoryGreen")
D.bal=new B.w(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.t)
D.fWR=w([A.Kg,D.bal,A.hV],x.O)
D.aEn=new C.xl(5,"familiaMti")
D.dxK=new C.jk("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aEV,4294966776,4280241466,4291404327,D.aEn)
D.a46=new C.xl(6,"ndoaSafi")
D.dxC=new C.jk("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Co,4294966519,4279378237,4291404327,D.a46)
D.ben=new B.w(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.t)
D.fWU=w([D.L0,A.hV,D.ben],x.O)
D.a47=new C.xl(7,"peteWide")
D.dxH=new C.jk("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.rm,4294966259,4282001936,4291404327,D.a47)
D.dxR=new C.xl(8,"muhuriCrest")
D.dxA=new C.jk("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.rm,4294966259,4279378237,4291404327,D.dxR)
D.fX3=w([D.abP,D.ad7,A.hV],x.O)
D.dxS=new C.xl(9,"fomuWazi")
D.dxN=new C.jk("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Co,4294966519,4279904068,4291404327,D.dxS)
D.aEW=new C.kQ(17,"certIvoryRose")
D.baY=new B.w(1,1,0.9725490196078431,0.9607843137254902,A.t)
D.fX6=w([D.baY,D.adX,A.hV],x.O)
D.a43=new C.xl(10,"upendoOrnate")
D.dxJ=new C.jk("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aEW,4294965493,4286200650,4291404327,D.a43)
D.d2y=w([D.dxG,D.dxO,D.dxQ,D.dxP,D.dxL,D.dxI,D.dxD,D.dxB,D.dxE,D.dxK,D.dxC,D.dxH,D.dxA,D.dxN,D.dxJ],x.h)
D.e7=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.HG=new C.vQ(0,"emojis")
D.Cv=new C.vQ(1,"pictures")
D.HH=new C.vQ(2,"icons3d")
D.a4o=new C.vQ(3,"animations")
D.Rs=new C.vQ(4,"videoMotion")
D.Cw=new C.vQ(5,"luxe")
D.a2c=w([D.HG,D.Cv,D.HH,D.a4o,D.Rs,D.Cw],B.ax("O<vQ>"))
D.ewo=new B.y(A.dW,"Looks")
D.elD=new B.y(A.yk,"Light")
D.elz=new B.y(A.nd,"Colour")
D.ejF=new B.y(A.xW,"Effects")
D.akl=new B.a0(63112,"MaterialIcons",!1)
D.egH=new B.y(D.akl,"Crop")
D.d33=w([D.ewo,D.elD,D.elz,D.ejF,D.egH],x.f2)
D.d3G=w([],x.D)
D.fXh=w([],x.L)
D.ejS=new B.y("Flashcard",D.HB)
D.enx=new B.y("Quiz",D.HC)
D.epo=new B.y("Worksheet",D.HD)
D.emC=new B.y("Notes",D.mA)
D.eo1=new B.y("Section",D.Ct)
D.d4k=w([D.ejS,D.enx,D.epo,D.emC,D.eo1],B.ax("O<+(n,ms)>"))
D.dzx=new C.kQ(6,"beadedPearl")
D.bdi=new B.w(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.t)
D.fXl=w([N.WT,D.bdi,A.hV],x.O)
D.aEj=new C.jk("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dzx,4294966774,4286209070,4291404327,D.jE)
D.dzy=new C.kQ(7,"artDeco")
D.bh5=new B.w(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.t)
D.bjP=new B.w(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.t)
D.fXj=w([D.bh5,D.bjP,A.bZ],x.O)
D.aEk=new C.jk("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dzy,4294440434,4280228630,4290283019,D.jE)
D.dzz=new C.kQ(8,"rosetteCorners")
D.bj_=new B.w(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.t)
D.b9b=new B.w(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.t)
D.bdd=new B.w(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.t)
D.fWX=w([D.bj_,D.b9b,D.bdd],x.O)
D.aEi=new C.jk("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dzz,4294702831,4285218602,4291394365,D.jE)
D.dzA=new C.kQ(9,"modernLedger")
D.fWW=w([A.c,D.j7,D.j7],x.O)
D.aEh=new C.jk("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dzA,4294967295,4279378237,4279378237,D.jE)
D.d4o=w([D.aEj,D.aEk,D.aEi,D.aEh],x.h)
D.d4w=w([A.io,A.ou],x.O)
D.cl=new C.hx(0,"none")
D.dd=new C.hx(1,"fade")
D.HE=new C.hx(3,"slideRight")
D.aFh=new C.hx(5,"slideDown")
D.dUb=new C.hx(7,"zoomOut")
D.a4n=new C.hx(11,"cube")
D.dU6=new C.hx(12,"blur")
D.aFe=new C.hx(13,"dissolve")
D.dU7=new C.hx(14,"wipeLeft")
D.dU8=new C.hx(15,"wipeRight")
D.Rr=new C.hx(17,"push")
D.dU9=new C.hx(18,"flash")
D.aFg=new C.hx(20,"swing")
D.dUa=new C.hx(21,"curtain")
D.Q5=w([D.cl,D.dd,D.ub,D.HE,D.uc,D.aFh,D.mB,D.dUb,D.HF,D.aFi,D.Rq,D.a4n,D.dU6,D.aFe,D.dU7,D.dU8,D.q6,D.Rr,D.dU9,D.aFf,D.aFg,D.dUa],x.i)
D.Q6=w([D.a42,D.a40,D.a3U,D.a3V,D.a3W,D.a3Z,D.a3X,D.a3Y,D.a41,D.a4_,D.aEj,D.aEk,D.aEi,D.aEh],x.h)
D.d4Y=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.d51=w([A.Aq,A.hG,A.bZ],x.O)
D.ekY=new B.y(A.tM,"Design")
D.exT=new B.y(D.akC,"Word sizes")
D.euf=new B.y(A.BE,"Text")
D.bDB=new B.a0(983182,"MaterialIcons",!1)
D.euj=new B.y(D.bDB,"Photo")
D.egj=new B.y(A.ll,"Logo")
D.ez0=new B.y(A.Gb,"News")
D.d56=w([D.ekY,D.exT,D.euf,D.euj,D.egj,D.ez0],x.f2)
D.d57=w(["golddust","sparkle","sheen"],x.s)
D.dVy=new C.eu("upload_pdf",K.Np,"Upload PDF")
D.dUI=new C.eu("sign_paper",A.G8,"Sign Paper")
D.bCS=new B.a0(63438,"MaterialIcons",!1)
D.dVu=new C.eu("hd_photo",D.bCS,"HD Photo")
D.dUA=new C.eu("sharpen",E.a_a,"Sharpen")
D.dUK=new C.eu("print",K.Np,"Download PDF")
D.dVb=new C.eu("rotate",D.akl,"Rotate")
D.dUT=new C.eu("text_box",A.BE,"Text Box")
D.dUV=new C.eu("picture",A.tQ,"Picture")
D.dUR=new C.eu("title",A.ye,"Title")
D.dUN=new C.eu("subtitle",T.ale,"Subtitle")
D.dVk=new C.eu("bullets",I.a_r,"Bullet List")
D.dUO=new C.eu("numbered",A.Nd,"Numbered")
D.dVn=new C.eu("quote",A2.Bw,"Quote")
D.dV_=new C.eu("citation",A.nY,"Citation")
D.dVq=new C.eu("date_stamp",Ah.a_f,"Date Stamp")
D.dVd=new C.eu("page_number",A.yd,"Page #")
D.dVh=new C.eu("header_bar",A.BG,"Header")
D.dUU=new C.eu("footer_bar",Ar.a_X,"Footer")
D.dUJ=new C.eu("divider",A.tP,"Divider")
D.dUF=new C.eu("highlight",A.a_w,"Highlight")
D.dVj=new C.eu("redact",A.yh,"Redact")
D.dV6=new C.eu("callout",A.Bs,"Callout")
D.dVs=new C.eu("checkboxes",I.ajB,"Checklist")
D.dV3=new C.eu("table",A.a_V,"Table")
D.dUY=new C.eu("memo",I.a_H,"Memo")
D.dV7=new C.eu("letter",A.FY,"Letter")
D.bCu=new B.a0(63259,"MaterialIcons",!0)
D.dUz=new C.eu("agenda",D.bCu,"Agenda")
D.dUL=new C.eu("toc",AB.akP,"Contents")
D.bCO=new B.a0(63406,"MaterialIcons",!1)
D.dV4=new C.eu("sig_line",D.bCO,"Sign Line")
D.dUs=new C.eu("initial_line",A.jg,"Initials")
D.dUv=new C.eu("approved",A.ll,"APPROVED")
D.dV9=new C.eu("draft",A.oL,"DRAFT")
D.dVf=new C.eu("confidential",A.jh,"Confidential")
D.dVi=new C.eu("sticky",A.Nv,"Sticky Note")
D.dVr=new C.eu("progress",A.akO,"Progress")
D.bE3=new B.a0(983507,"MaterialIcons",!1)
D.dUG=new C.eu("stars",D.bE3,"Star Rating")
D.dUq=new C.eu("equation",A.akF,"Equation")
D.dUB=new C.eu("timeline",A.Nw,"Timeline")
D.dUZ=new C.eu("two_col",A.a_Y,"Two Columns")
D.dUD=new C.eu("compare",A1.a_i,"Compare")
D.dUo=new C.eu("duplicate_el",A.fL,"Duplicate")
D.dVw=new C.eu("delete_el",A.e5,"Delete")
D.dVm=new C.eu("bring_fwd",N.aky,"Bring Front")
D.dUt=new C.eu("send_back",N.akx,"Send Back")
D.dV8=new C.eu("align_left",D.a_p,"Align L")
D.dVe=new C.eu("align_center",D.a_o,"Align C")
D.dVv=new C.eu("align_right",D.a_q,"Align R")
D.dUS=new C.eu("word_count",A_.ZU,"Word Count")
D.dUP=new C.eu("link_text",A.hk,"Link")
D.dVc=new C.eu("phone",A.iA,"Phone")
D.dUE=new C.eu("email",A.Bu,"Email")
D.dVx=new C.eu("qr_placeholder",A.jj,"QR Placeholder")
D.dUy=new C.eu("rectangle",A3.vw,"Rectangle")
D.dV2=new C.eu("circle",A.qZ,"Circle")
D.dUu=new C.eu("arrow",A.iU,"Arrow")
D.dVl=new C.eu("line",A.tP,"Line")
D.dUH=new C.eu("triangle",A.a_g,"Triangle")
D.bCC=new B.a0(63318,"MaterialIcons",!1)
D.dUM=new C.eu("grayscale",D.bCC,"Grayscale")
D.dUW=new C.eu("brighten",I.ajV,"Brighten")
D.dV0=new C.eu("flip_h",A.FO,"Flip H")
D.bCJ=new B.a0(63348,"MaterialIcons",!1)
D.dVt=new C.eu("flip_v",D.bCJ,"Flip V")
D.dVg=new C.eu("cover_page",A.pN,"Cover Page")
D.dUr=new C.eu("invoice",A.h8,"Invoice")
D.dUC=new C.eu("resume",A.mo,"Resume")
D.dUQ=new C.eu("minutes",A.oF,"Minutes")
D.dUw=new C.eu("lab_report",A.Ns,"Lab Report")
D.dUx=new C.eu("rubric",A.tN,"Rubric")
D.dV1=new C.eu("flashcard_tool",V.G4,"Flashcard")
D.dVo=new C.eu("quiz_tool",A.G1,"Quiz Block")
D.dV5=new C.eu("worksheet_tool",L.FF,"Worksheet")
D.dVa=new C.eu("outline_share",A.Nt,"Share Outline")
D.dVp=new C.eu("export_json",D.ajH,"Export JSON")
D.dUp=new C.eu("new_slide",D.ZT,"New Slide")
D.dUX=new C.eu("present",A.pU,"Present")
D.d5x=w([D.dVy,D.dUI,D.dVu,D.dUA,D.dUK,D.dVb,D.dUT,D.dUV,D.dUR,D.dUN,D.dVk,D.dUO,D.dVn,D.dV_,D.dVq,D.dVd,D.dVh,D.dUU,D.dUJ,D.dUF,D.dVj,D.dV6,D.dVs,D.dV3,D.dUY,D.dV7,D.dUz,D.dUL,D.dV4,D.dUs,D.dUv,D.dV9,D.dVf,D.dVi,D.dVr,D.dUG,D.dUq,D.dUB,D.dUZ,D.dUD,D.dUo,D.dVw,D.dVm,D.dUt,D.dV8,D.dVe,D.dVv,D.dUS,D.dUP,D.dVc,D.dUE,D.dVx,D.dUy,D.dV2,D.dUu,D.dVl,D.dUH,D.dUM,D.dUW,D.dV0,D.dVt,D.dVg,D.dUr,D.dUC,D.dUQ,D.dUw,D.dUx,D.dV1,D.dVo,D.dV5,D.dVa,D.dVp,D.dUp,D.dUX],B.ax("O<eu>"))
D.d5G=w([A.cq,A.ak],x.O)
D.efS=new B.y(4286331629,4292552567)
D.efF=new B.y(4280640491,4278630100)
D.eg_=new B.y(4294538006,4292943176)
D.ef1=new B.y(4278556265,4280640491)
D.d05=w([D.efS,D.efF,D.eg_,D.ef1],x.n)
D.cpG=w([4294626325,4280472558,4294210230],x.t)
D.dUj=new C.nG("colorful","Colorful",A.nd,D.d05,4294967295,3875536895,D.cpG,D.mB)
D.eft=new B.y(4279522093,4279657780)
D.efJ=new B.y(4281750292,4283268111)
D.ef4=new B.y(4278603323,4279203438)
D.efK=new B.y(4282343954,4279599165)
D.cAt=w([D.eft,D.efJ,D.ef4,D.efK],x.n)
D.cpo=w([4288931381,4294829706,4287033260],x.t)
D.dUf=new C.nG("nature","Nature",A.G9,D.cAt,4294442727,3874290891,D.cpo,D.dd)
D.efn=new B.y(4279369771,4283178389)
D.efk=new B.y(4279179050,4286456526)
D.efB=new B.y(4280163147,4290648157)
D.eeU=new B.y(4278322711,4285343961)
D.cRU=w([D.efn,D.efk,D.efB,D.eeU],x.n)
D.cpC=w([4294210230,4280472558,4289170426],x.t)
D.dUd=new C.nG("vibe","Vibe",A.a_u,D.cRU,4294967295,3874869502,D.cpC,D.ub)
D.efW=new B.y(4290007817,4292552567)
D.efQ=new B.y(4286328082,4294286859)
D.efV=new B.y(4288485197,4294538006)
D.efP=new B.y(4285343961,4293675161)
D.bWR=w([D.efW,D.efQ,D.efV,D.efP],x.n)
D.cpH=w([4294829706,4294967295,4284999929],x.t)
D.dUe=new C.nG("celebration","Celebration",A.lg,D.bWR,4294967295,4009752557,D.cpH,D.q6)
D.efi=new B.y(4279179050,4280171146)
D.efm=new B.y(4279310375,4280232247)
D.efa=new B.y(4278916151,4280172719)
D.efj=new B.y(4279179050,4281549141)
D.cL1=w([D.efi,D.efm,D.efa,D.efj],x.n)
D.cpj=w([4281908728,4294626325,4287931320],x.t)
D.dUi=new C.nG("professional","Professional",A.Bq,D.cL1,4294967295,3872118241,D.cpj,D.Rr)
D.efe=new B.y(4278995566,4278413729)
D.ef6=new B.y(4278727492,4279137424)
D.efC=new B.y(4280171146,4278751666)
D.eff=new B.y(4278995566,4279590517)
D.ctr=w([D.efe,D.ef6,D.efC,D.eff],x.n)
D.cpm=w([4286436348,4284410580,4294829706],x.t)
D.dUk=new C.nG("ocean","Ocean",I.a0_,D.ctr,4294967295,3873501950,D.cpm,D.uc)
D.efR=new B.y(4286328082,4294538006)
D.efT=new B.y(4286781507,4294677052)
D.efN=new B.y(4283178389,4294197086)
D.efU=new B.y(4288295954,4294688548)
D.cHe=w([D.efR,D.efT,D.efN,D.efU],x.n)
D.cpI=w([4294829706,4294967295,4294747557],x.t)
D.dUl=new C.nG("sunset","Sunset",A.Ny,D.cHe,4294967295,4009749973,D.cpI,D.dd)
D.eg3=new B.y(4294967295,4294047225)
D.efZ=new B.y(4294507260,4294967295)
D.eg2=new B.y(4294967295,4293060848)
D.efY=new B.y(4294507260,4294047225)
D.cUY=w([D.eg3,D.efZ,D.eg2,D.efY],x.n)
D.cph=w([4280640491,4279179050,4287931320],x.t)
D.dUh=new C.nG("minimal","Minimal",A3.vw,D.cUY,4279179050,4282865001,D.cph,D.dd)
D.efd=new B.y(4278979081,4280886564)
D.efx=new B.y(4280031511,4278979081)
D.efl=new B.y(4279308561,4281148438)
D.efc=new B.y(4278979081,4280031511)
D.d7B=w([D.efd,D.efx,D.efl,D.efc],x.n)
D.cpv=w([4292128567,4294829706,4289241758],x.t)
D.dUm=new C.nG("elegant","Elegant",A.lO,D.d7B,4294898631,3873957348,D.cpv,D.aFe)
D.efz=new B.y(4280159034,4282058596)
D.ef9=new B.y(4278916151,4280163147)
D.efH=new B.y(4281208933,4278916151)
D.efq=new B.y(4279502891,4283178389)
D.de3=w([D.efz,D.ef9,D.efH,D.efq],x.n)
D.cpE=w([4294296657,4292128567,4291081725],x.t)
D.dUg=new C.nG("royal","Royal Gold",A.iX,D.de3,4294965222,3874084351,D.cpE,D.mB)
D.eeZ=new B.y(4278464302,4280163147)
D.ef8=new B.y(4278916151,4279455306)
D.efA=new B.y(4280163147,4283040846)
D.eeW=new B.y(4278332450,4281413249)
D.d_N=w([D.eeZ,D.ef8,D.efA,D.eeW],x.n)
D.cpi=w([4281193663,4289170426,4294210230],x.t)
D.dUn=new C.nG("aurora","Aurora Glow",A.dW,D.d_N,4293983738,3869766608,D.cpi,D.dd)
D.vT=w([D.dUj,D.dUf,D.dUd,D.dUe,D.dUi,D.dUk,D.dUl,D.dUh,D.dUm,D.dUg,D.dUn],B.ax("O<nG>"))
D.bdN=new B.w(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.t)
D.d6c=w([A.qE,D.bdN,A.qE],x.O)
D.d6t=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.d6x=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eu7=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eky=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.ep_=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.ecZ=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.enH=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.elY=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eq8=new B.y("Surprise me","")
D.d72=w([D.eu7,D.eky,D.ep_,D.ecZ,D.enH,D.elY,D.eq8],x.L)
D.b7n=new B.w(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.t)
D.bhz=new B.w(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.t)
D.d7N=w([A.c,D.b7n,D.bhz],x.O)
D.d9B=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aEO=new C.kQ(0,"heritageGold")
D.bcu=new B.w(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.t)
D.fXm=w([D.bcu,W.adh,A.aw],x.O)
D.dxM=new C.jk("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aEO,4294570461,4284234270,4292128567,D.jE)
D.aEP=new C.kQ(1,"heritageCrimson")
D.b5R=new B.w(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.t)
D.baV=new B.w(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.t)
D.bhp=new B.w(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.t)
D.fX_=w([D.b5R,D.baV,D.bhp],x.O)
D.dxF=new C.jk("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aEP,4294635750,4285213214,4292912216,D.jE)
D.d9F=w([D.a42,D.a40,D.dxM,D.dxF,D.a3W,D.a3Z],x.h)
D.dDE=new C.rm(1,"circuit")
D.dE6=new C.m1("neural","Neural Link","Robotic",D.dDE,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.dDD=new C.rm(0,"grid")
D.dE3=new C.m1("signal","Signal Grid","Robotic",D.dDD,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.dDJ=new C.rm(2,"hexes")
D.dDP=new C.m1("core","Core Protocol","Robotic",D.dDJ,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aFb=new C.rm(11,"diagonal")
D.dE_=new C.m1("steel","Steel Tech","Robotic",D.aFb,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aFc=new C.rm(3,"rings")
D.dDO=new C.m1("vault","Vault Gold","Robotic",D.aFc,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.dDH=new C.rm(13,"leaves")
D.dDR=new C.m1("forest","Forest Morning","Nature",D.dDH,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aFd=new C.rm(5,"waves")
D.dDY=new C.m1("ocean","Ocean Calm","Nature",D.aFd,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.dDK=new C.rm(6,"sunset")
D.dE2=new C.m1("sunset","Sunset Glow","Nature",D.dDK,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.dDL=new C.rm(7,"mountains")
D.dDQ=new C.m1("mountain","Mountain Air","Nature",D.dDL,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.dDM=new C.rm(8,"stars")
D.dDX=new C.m1("night","Night Sky","Nature",D.dDM,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a4l=new C.rm(4,"orbs")
D.dDV=new C.m1("aurora","Aurora","Nature",D.a4l,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.dE4=new C.m1("sand","Sand Dune","Nature",D.aFd,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.dDN=new C.rm(9,"rays")
D.dDU=new C.m1("golden","Golden Hour","Warm",D.dDN,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.dDS=new C.m1("royal","Royal Purple","Warm",D.aFb,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.dDT=new C.m1("rose","Rose Petal","Warm",D.a4l,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.dDG=new C.rm(12,"blocks")
D.dDW=new C.m1("electric","Electric Blue","Bold",D.dDG,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.dE5=new C.m1("mint","Fresh Mint","Bold",D.a4l,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.dDI=new C.rm(14,"minimal")
D.dE1=new C.m1("white","Clean White","Clean",D.dDI,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.dDF=new C.rm(10,"frame")
D.dDZ=new C.m1("midnight","Midnight Gold","Clean",D.dDF,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.dE0=new C.m1("community","Community Green","Clean",D.aFc,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a2D=w([D.dE6,D.dE3,D.dDP,D.dE_,D.dDO,D.dDR,D.dDY,D.dE2,D.dDQ,D.dDX,D.dDV,D.dE4,D.dDU,D.dDS,D.dDT,D.dDW,D.dE5,D.dE1,D.dDZ,D.dE0],B.ax("O<m1>"))
D.da1=w([D.Ay,A.x1,A.hG,A.bZ],x.O)
D.dah=w([D.ae8,D.j7],x.O)
D.daq=w(["pdf","docx","txt","md"],x.s)
D.eCl=new B.bt(-3,150,34)
D.eCm=new B.bt(-3,214,62)
D.eCn=new B.bt(-3,288,62)
D.dbe=w([D.eCl,D.eCm,D.eCn],B.ax("O<+(N,N,N)>"))
D.dbI=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dch=w(["Write","Design","Print & fold"],x.s)
D.jF=new C.uy(2,"triangle")
D.Cu=new C.uy(3,"arrow")
D.fq=new C.uy(4,"line")
D.jG=new C.uy(5,"parallelogram")
D.dck=w([D.be,D.eJ,D.jF,D.Cu,D.fq,D.jG,D.kX],x.m)
D.ee7=new B.y(240,96)
D.egA=new B.y(560,46)
D.dcp=w([D.ee7,D.egA],x.G)
D.fXx=new C.xo(0,"classic")
D.dzD=new C.nC("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aEO,4294570461,4282000405,4284234270)
D.dzP=new C.nC("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aEP,4294635750,4281999378,4285213214)
D.dzE=new C.nC("elegant_navy","Umoja Mzuri",y.s,D.a4f,4294967035,4279378237,4290283019)
D.dzR=new C.nC("elegant_gold","Umoja wa Dhahabu",y.Q,D.aEX,4294966515,4281016592,4289102906)
D.dzT=new C.nC("kente_sunset","Kente ya Jua",y.H,D.aEQ,4294964964,4282000405,4279983648)
D.dzB=new C.nC("indigo_mudcloth","Nguo ya Indigo",y.n,D.aER,4294439140,4279903102,4279903102)
D.dzG=new C.nC("adinkra_royal","Muhuri wa Adinkra",y.z,D.aES,4294965484,4285218591,4287322667)
D.dzL=new C.nC("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aET,4294244340,4279196764,4279196764)
D.dzN=new C.nC("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aEU,4294505710,4279970378,4291058750)
D.fXy=new C.xo(1,"ringsNdoa")
D.dzF=new C.nC("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.rm,4294966259,4279378237,4291404327)
D.fXA=new C.xo(2,"coupleCards")
D.dzQ=new C.nC("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.rm,4294966259,4279378237,4291404327)
D.fXB=new C.xo(3,"kuhoweshaForm")
D.dzM=new C.nC("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Co,4294966519,4279378237,4291404327)
D.fXC=new C.xo(4,"mahariPande")
D.dzC=new C.nC("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.rm,4294966259,4279904068,4291404327)
D.fXD=new C.xo(5,"familiaMti")
D.dzS=new C.nC("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aEV,4294966776,4280241466,4291404327)
D.fXE=new C.xo(6,"ndoaSafi")
D.dzJ=new C.nC("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Co,4294966519,4279378237,4291404327)
D.fXF=new C.xo(7,"peteWide")
D.dzI=new C.nC("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.rm,4294966259,4282001936,4291404327)
D.fXG=new C.xo(8,"muhuriCrest")
D.dzH=new C.nC("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.rm,4294966259,4279378237,4291404327)
D.fXH=new C.xo(9,"fomuWazi")
D.dzK=new C.nC("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Co,4294966519,4279904068,4291404327)
D.fXz=new C.xo(10,"upendoOrnate")
D.dzO=new C.nC("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aEW,4294965493,4286200650,4291404327)
D.Qj=w([D.dzD,D.dzP,D.dzE,D.dzR,D.dzT,D.dzB,D.dzG,D.dzL,D.dzN,D.dzF,D.dzQ,D.dzM,D.dzC,D.dzS,D.dzJ,D.dzI,D.dzH,D.dzK,D.dzO],B.ax("O<nC>"))
D.Cs=new C.aqv(0,"landscape169")
D.o7=new C.aqv(1,"portrait916")
D.dda=w([D.Cs,D.o7],B.ax("O<aqv>"))
D.axx=w([A.hG,A.bK,A.cs,A.io,A.c],x.O)
D.u4=w([A.bZ,A.it],x.O)
D.edm=new B.y(1000,"M")
D.ehG=new B.y(900,"CM")
D.egv=new B.y(500,"D")
D.eeS=new B.y(400,"CD")
D.edn=new B.y(100,"C")
D.ehH=new B.y(90,"XC")
D.egw=new B.y(50,"L")
D.eeT=new B.y(40,"XL")
D.eds=new B.y(10,"X")
D.ehR=new B.y(9,"IX")
D.egL=new B.y(5,"V")
D.egi=new B.y(4,"IV")
D.edP=new B.y(1,"I")
D.ddK=w([D.edm,D.ehG,D.egv,D.eeS,D.edn,D.ehH,D.egw,D.eeT,D.eds,D.ehR,D.egL,D.egi,D.edP],x.ek)
D.eDi=new B.cI(["open",A.jg,"Open & write","Keep writing this book"])
D.eDJ=new B.cI(["print",A.tT,"Print as a book","Fold and staple it"])
D.ddU=w([D.eDi,D.eDJ],B.ax("O<+(n,a0,n,n)>"))
D.dez=w([D.a4n,D.mB,D.HF,D.Rr,D.dd,D.Rq],x.i)
D.euG=new B.y(-1,"Small")
D.eda=new B.y(0,"Normal")
D.edO=new B.y(1,"Big")
D.een=new B.y(2,"Huge")
D.df3=w([D.euG,D.eda,D.edO,D.een],x.ek)
D.dft=w([49,65,89,38,83,89],x.t)
D.dfA=w([A.x1,A.hG,A.bZ],x.O)
D.dg0=w([D.dd,D.mB,D.ub,D.a4n,D.HF,D.Rr],x.i)
D.aCP=new B.dS([0,D.Li,8,D.aft,12,D.afu],B.ax("dS<H,a3k>"))
D.e_j={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.bhh=new B.w(1,0.8313725490196079,0.6274509803921569,0.09019607843137255,A.t)
D.cLb=w([A.bK,D.bhh],x.O)
D.d46=w([A.b2,A.bk],x.O)
D.cZW=w([A.bV,A.aS,A.cd],x.O)
D.ddV=w([A.cq,A.bv],x.O)
D.cSP=w([A.b8,A.fi],x.O)
D.d1y=w([A.b7,A.f7],x.O)
D.baG=new B.w(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.t)
D.d0R=w([D.baG,A.ou],x.O)
D.cWz=w([A.h0,A.x2],x.O)
D.cSD=w([A.bt,A.cc],x.O)
D.diD=new B.bk(D.e_j,[D.cLb,H.aoa,D.d46,D.cZW,D.ddV,D.cSP,D.d1y,D.d0R,D.cWz,D.cSD],B.ax("bk<n,ai<w>>"))
D.dZs={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a3e=new B.bk(D.dZs,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.ax("bk<n,n>"))
D.a3l=new B.bk(A.i3,[],B.ax("bk<H,+icon3d,picture(n?,n?)>"))
D.dmP=new F.MA(30,null)
D.drT=new F.mo("Chapter 1","","","")
D.dcX=w([D.drT],x.B)
D.drX=new F.rc("My Book","","",D.dcX,E.aE7)
D.drV=new F.uo("starry",null,null,null,null,"","","")
D.drY=new F.rc("Dream Big","","",E.a2l,D.drV)
D.drW=new F.uo("story",null,null,null,null,"","","")
D.drZ=new F.rc("Little Lion","","",E.a2l,D.drW)
D.drU=new F.uo("vintage",null,null,null,null,"","","")
D.ds_=new F.rc("Our Story","","",E.a2l,D.drU)
D.dv1=new C.Ee("","NGMY","","")
D.dCh=new C.zf("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.T,"","","")
D.dUc=new C.b0q(null,null,null,null)
D.dVV=new C.aqA(null)
D.dW7=new C.ar5(0,"smaller")
D.dW8=new C.ar5(1,"bigger")
D.aFr=new C.ar5(2,"fit")
D.e1N=new B.u(3,6)
D.e1X=new B.u(4,8)
D.e5n=new B.C(E.agj,T.abb,null)
D.e5r=new B.C(A.XR,A.lB,null)
D.bFk=new B.ae(A.lj,16,A.c1,null,null,null)
D.e5v=new B.C(A.jd,D.bFk,null)
D.b5j=new B.fj(2.2,null,null,null,null,A.c,null,null,null,null)
D.e5H=new B.C(A.Fi,D.b5j,null)
D.bPx=new B.ae(A.cB,16,A.az,null,null,null)
D.e5L=new B.C(A.eo,D.bPx,null)
D.fhQ=new B.x("Play",null,A.ns,null,null,null,null,null,null,null,null,null)
D.d4l=w([U.amF,A.rA,D.fhQ],x.p)
D.eHU=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d4l,null)
D.e5O=new B.C(A.nU,D.eHU,null)
D.b5s=new B.fj(2.4,null,null,null,null,null,null,null,null,null)
D.eN9=new B.a7(20,20,D.b5s,null)
D.e5T=new B.C(A.jd,D.eN9,null)
D.fqO=new B.x("Seconds per slide",null,A.ho,null,null,null,null,null,null,null,null,null)
D.e60=new B.C(A.bj,D.fqO,null)
D.e7l=new C.a8b(2,"print")
D.e7o=new B.iN(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.e90=new B.h6("/Annot")
D.e92=new B.h6("/URI")
D.fcg=new B.x("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eb0=new B.jm("share",48,D.fcg,null,B.ax("jm<n>"))
D.bPr=new B.ae(A.dW,14,A.ez,null,null,null)
D.eb9=new B.cL(null,-2,-2,null,null,null,D.bPr,null)
D.cN9=w([N.adM,A.K],x.O)
D.bVF=new B.a8(A.a3,A.a7,A.x,D.cN9,null,null)
D.aZa=new B.o(null,null,null,null,null,D.bVF,A.n)
D.bm6=new B.kN(D.aZa,A.bd,null,null)
D.ebl=new B.cL(0,0,null,0,8,null,D.bm6,null)
D.d8E=w([A.hU,A.me,A.ci],x.O)
D.ec_=new B.bS(A.A,0.5,A.x,null,0,D.d8E,null,null)
D.eeg=new B.y(0.22,A.bk)
D.eib=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.ekd=new B.y(0.5,A.hf)
D.etg=new B.y(0.78,A.aV)
D.eD8=new B.cI([A.bu,0.22,0.7,2.6])
D.eDe=new B.cI([A.b8,0.36,1.2,1.3])
D.eDk=new B.cI([A.dP,0.28,0.2,0.4])
D.eDq=new B.cI([A.cz,0.05,0.3,0.35])
D.eDw=new B.cI([A.bt,0.28,0.9,0])
D.eDE=new B.cI([A.aE,-0.25,-0.15,0.45])
D.eEu=new B.cI([A.bV,0.42,1,4.1])
D.eHC=new B.a9a(9)
D.bGq=new B.ae(A.Gb,28,A.cd,null,null,null)
D.frm=new B.x("NGMY News",null,A.dl,null,null,null,null,null,null,null,null,null)
D.bvR=new B.bD(1,A.bh,D.frm,null)
D.dbL=w([D.bGq,A.av,D.bvR],x.p)
D.eHO=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.dbL,null)
D.bGB=new B.ae(A.nY,16,A.c,null,null,null)
D.fsQ=new B.x("Book",null,A.of,null,null,null,null,null,null,null,null,null)
D.dfz=w([D.bGB,A.eb,D.fsQ],x.p)
D.eHW=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.dfz,null)
D.bN2=new B.ae(A.jh,10,A.c,null,null,null)
D.ffX=new B.x("Pro",null,A.nq,null,null,null,null,null,null,null,null,null)
D.d4q=w([D.bN2,A.qd,D.ffX],x.p)
D.eI_=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.d4q,null)
D.fqN=new B.x("Make a newspaper",null,Av.Tt,null,null,null,null,null,null,null,null,null)
D.bWP=w([E.a0k,A.ab,D.fqN],x.p)
D.eI0=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.bWP,null)
D.bLB=new B.ae(A.lg,18,A.bK,null,null,null)
D.fi3=new B.x("Ending celebration",null,A.i5,null,null,null,null,null,null,null,null,null)
D.daQ=w([D.bLB,A.bp,D.fi3],x.p)
D.eI3=new B.cn(A.aO,A.e,A.j,A.m,null,A.p,null,0,D.daQ,null)
D.bMP=new B.ae(A.jg,18,A.jR,null,null,null)
D.eXO=new B.G(!0,A.jR,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ft6=new B.x("Write",null,D.eXO,null,null,null,null,null,null,null,null,null)
D.cUN=w([D.bMP,A.ab,D.ft6],x.p)
D.eI8=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cUN,null)
D.ffV=new B.x("Download picture",null,A.p3,null,null,null,null,null,null,null,null,null)
D.bxV=new B.qe(A.eg,A.A,A.f,D.ffV,null)
D.by5=new B.dq(1,A.cn,D.bxV,null)
D.d4N=w([K.amv,A.ab,D.by5],x.p)
D.eI9=new B.cn(A.aO,A.bb,A.j,A.m,null,A.p,null,0,D.d4N,null)
D.bIo=new B.ae(A.Gb,22,A.cd,null,null,null)
D.fps=new B.x("NGMY NEWS",null,H.a6U,null,null,null,null,null,null,null,null,null)
D.cMB=w([D.bIo,A.ab,D.fps],x.p)
D.eIh=new B.cn(A.aO,A.e,A.Q,A.m,null,A.p,null,0,D.cMB,null)
D.eIt=new B.p3(!1,!1,null,T.Vk,null,A.bY,null,null,null)
D.a6_=new B.jN([D.cl,D.dd,D.ub,D.HE,D.uc,D.aFh],B.ax("jN<hx>"))
D.e0B={title:0,quote:1,closing:2,bio:3}
D.eJB=new B.eM(D.e0B,4,x.M)
D.dZL={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.eJD=new B.eM(D.dZL,5,x.M)
D.e06={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.a60=new B.eM(D.e06,8,x.M)
D.e_r={Design:0,Transitions:1,Insert:2}
D.eJH=new B.eM(D.e_r,3,x.M)
D.fXP=new B.jN([D.a4o],B.ax("jN<vQ>"))
D.e_A={float3d:0,drift:1,pulse:2}
D.eJK=new B.eM(D.e_A,3,x.M)
D.aMx=new B.jN([D.HB,D.HC,D.HD],B.ax("jN<ms>"))
D.dZI={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aMA=new B.eM(D.dZI,14,x.M)
D.fXQ=new B.eM(A.i3,0,B.ax("eM<vQ>"))
D.e_x={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Sv=new B.eM(D.e_x,4,x.M)
D.dZA={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aMD=new B.eM(D.dZA,30,x.M)
D.e_F={circle:0,triangle:1,hexagon:2,diamond:3}
D.eK_=new B.eM(D.e_F,4,x.M)
D.eM8=new B.at(390,844)
D.eMU=new B.a7(20,20,A6.Ka,null)
D.aNo=new B.a7(null,2.5,null,null)
D.eN3=new B.a7(18,18,A6.Ka,null)
D.bMT=new B.ae(A.iX,19,A.c,null,null,null)
D.eNe=new B.a7(38,38,D.bMT,null)
D.bLb=new B.ae(A.yl,22,A.c,null,null,null)
D.eNg=new B.a7(40,40,D.bLb,null)
D.eNP=new B.hK(2,10,10,1.15,null)
D.aNw=new B.hK(2,16,14,0.62,null)
D.btU=new B.Q(32,30,32,40)
D.b6J=new B.w(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.bGn=new B.ae(A.pN,56,D.b6J,null,null,null)
D.aeF=new B.w(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.eZL=new B.G(!0,D.aeF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fmw=new B.x("Your books will live here.",null,D.eZL,null,A.L,null,null,null,null,null,null,null)
D.cXs=w([D.bGn,A.S,D.fmw],x.p)
D.bl6=new B.fq(A.ah,A.e,A.j,A.m,null,A.p,null,0,D.cXs,null)
D.e5Z=new B.C(D.btU,D.bl6,null)
D.eO9=new B.m4(D.e5Z,null)
D.fmt=new B.x("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.eOr=new B.b1(D.fmt,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fkC=new B.x("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.eOs=new B.b1(D.fkC,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fpv=new B.x("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.eOB=new B.b1(D.fpv,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fq0=new B.x("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.eOQ=new B.b1(D.fq0,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fjg=new B.x("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.eP2=new B.b1(D.fjg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fwY=new B.x("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.ePl=new B.b1(D.fwY,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fu9=new B.x("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.ePw=new B.b1(D.fu9,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fq8=new B.x("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eQc=new B.b1(D.fq8,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fef=new B.x("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.eQs=new B.b1(D.fef,null,null,null,null,null,null,null,A.ij,null,null,null,null,A.pD,!1,null,null,null,A.r,null)
D.fg2=new B.x("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.eQK=new B.b1(D.fg2,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fma=new B.x("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.eQM=new B.b1(D.fma,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.flR=new B.x("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.eQN=new B.b1(D.flR,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fs9=new B.x("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.eQO=new B.b1(D.fs9,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fat=new B.x("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.eQX=new B.b1(D.fat,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fhb=new B.x("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.eRj=new B.b1(D.fhb,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvJ=new B.x("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.eRl=new B.b1(D.fvJ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fvg=new B.x("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.eRp=new B.b1(D.fvg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f9s=new B.x("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.eRr=new B.b1(D.f9s,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.frh=new B.x("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.eRA=new B.b1(D.frh,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuS=new B.x("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.eRP=new B.b1(D.fuS,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fuJ=new B.x("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.eRR=new B.b1(D.fuJ,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.f9k=new B.x("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.eRX=new B.b1(D.f9k,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fdg=new B.x("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.eSo=new B.b1(D.fdg,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.ftX=new B.x("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.eSz=new B.b1(D.ftX,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.fd4=new B.x("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.eSO=new B.b1(D.fd4,null,null,null,null,null,null,null,null,null,null,null,null,A.U,!1,null,null,null,A.r,null)
D.bdu=new B.w(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.t)
D.cLp=w([A.io,A.ou,D.bdu,D.abC,A.io],x.O)
D.eTb=new B.fS(A.A,0,6.283185307179586,A.x,D.cLp,null,null)
D.cU0=w([A.bK,A.bZ,A.hG,D.Ay,A.bK],x.O)
D.aO5=new B.fS(A.A,0,6.283185307179586,A.x,D.cU0,null,null)
D.d6r=w([A.bV,A.bu,A.b8,A.b1,A.cd,A.bV],x.O)
D.eTg=new B.fS(A.A,0,6.283185307179586,A.x,D.d6r,null,null)
D.cNn=w([A.pA,A.ov,A.Am,A.io,A.pA],x.O)
D.eTh=new B.fS(A.A,0,6.283185307179586,A.x,D.cNn,null,null)
D.d6l=w([A.aP,A.bJ,A.aL,A.ak,A.aP],x.O)
D.eTi=new B.fS(A.A,0,6.283185307179586,A.x,D.d6l,null,null)
D.ddB=w([A.bt,A.b8,A.bu,A.bV,A.bt],x.O)
D.eTk=new B.fS(A.A,0,6.283185307179586,A.x,D.ddB,null,null)
D.bdM=new B.w(1,0,1,1,A.t)
D.b7W=new B.w(1,1,0,1,A.t)
D.d9U=w([A.E8,A.adu,H.acq,D.bdM,H.acP,D.b7W,A.E8],x.O)
D.eTl=new B.fS(A.A,0,6.283185307179586,A.x,D.d9U,null,null)
D.eTA=new C.av7(2,"immersiveSticky")
D.eTB=new C.av7(3,"edgeToEdge")
D.eTC=new C.av7(4,"manual")
D.eW2=new B.G(!0,A.oq,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aOC=new B.G(!0,A.f3,null,null,null,null,12.5,A.P,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eWB=new B.G(!0,E.mZ,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eY4=new B.G(!0,A.ad,null,null,null,null,13,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZ2=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZc=new B.G(!0,A.c1,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.eZx=new B.G(!0,A.ez,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f_U=new B.G(!0,A.bJ,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f02=new B.G(!0,A.ja,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0g=new B.rv(!0,A.HX,null,null,null,null,A.ds,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0K=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1m=new B.G(!0,A.j9,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1K=new B.G(!0,A.az,null,null,null,null,12.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.e7r=new B.iN(1,1,0.7568627450980392,0.027450980392156862)
D.f1O=new B.rv(!0,D.e7r,null,null,null,null,A.ds,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.adB=new B.w(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.t)
D.aPj=new B.G(!0,D.adB,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1W=new B.G(!0,D.aeF,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f1X=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPl=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2z=new B.rv(!0,A.oX,null,null,null,null,A.ds,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.f2Q=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Tn=new B.G(!0,A.az,null,null,null,null,11.5,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3n=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3p=new B.G(!0,D.adB,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.IU=new B.G(!0,A.az,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f3S=new B.G(!0,A.bZ,null,null,null,null,11.5,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4_=new B.G(!0,A.bJ,null,null,null,null,14,A.a5,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f42=new B.G(!0,A.bK,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4j=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.avl,null,null,null)
D.f4l=new B.G(!0,A.c7,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4n=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4A=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f4M=new B.G(!0,A.dv,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5i=new B.G(!0,A.aR,null,null,null,null,null,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5r=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f5F=new B.G(!0,A.ad,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aPY=new B.G(!0,A.c,null,null,null,null,14.5,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ_=new B.G(!0,A.c1,null,null,null,null,11.5,A.a5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.biP=new B.w(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.t)
D.f7n=new B.G(!0,D.biP,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aQ7=new B.G(!0,E.mZ,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7S=new B.G(!0,A.bJ,null,null,null,null,11,A.a5,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f7V=new B.G(!0,O.la,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f0Y=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.f97=new B.x("NEW",null,D.f0Y,null,null,null,null,null,null,null,null,null)
D.f9n=new B.x("Hati ya Kuhowesha",null,A.hq,null,null,null,null,null,null,null,null,null)
D.f9Q=new B.x("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fa9=new B.x("Scrollable PDF on this slide",null,A.dm,null,null,null,null,null,null,null,null,null)
D.faT=new B.x("Big quote mark",null,A.iG,null,null,null,null,null,null,null,null,null)
D.faW=new B.x("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fb6=new B.x("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fby=new B.x("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fbA=new B.x("How many slides?",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fc7=new B.x("Transfer",null,A.cj,null,null,null,null,null,null,null,null,null)
D.eXR=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fcs=new B.x("Luxury FX",null,D.eXR,null,null,null,null,null,null,null,null,null)
D.fcP=new B.x("Font",null,A.rF,null,null,null,null,null,null,null,null,null)
D.fd_=new B.x("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fd5=new B.x("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.f6W=new B.G(!0,A.bJ,null,null,null,null,12,A.P,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fdd=new B.x("Example  GA847",null,D.f6W,null,null,null,null,null,null,null,null,null)
D.fdD=new B.x("Design shapes",null,A.iG,null,null,null,null,null,null,null,null,null)
D.fdM=new B.x("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fdQ=new B.x("Non-stop (loop)",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fe3=new B.x("Hati ya Kuhoweya",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fem=new B.x("Photo studio",null,A.fO,null,null,null,null,null,null,null,null,null)
D.feM=new B.x("Add your picture",null,A.l1,null,null,null,null,null,null,null,null,null)
D.f0h=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.feN=new B.x("Enter document code",null,D.f0h,null,A.L,null,null,null,null,null,null,null)
D.feO=new B.x("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.feT=new B.x("English",null,null,null,null,null,null,null,null,null,null,null)
D.eYT=new B.G(!0,E.mZ,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ffd=new B.x("Delete this book?",null,D.eYT,null,A.L,null,null,null,null,null,null,null)
D.f2p=new B.G(!0,E.mZ,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fg4=new B.x("Your library",null,D.f2p,null,null,null,null,null,null,null,null,null)
D.fg9=new B.x("Delete",null,A.aPd,null,null,null,null,null,null,null,null,null)
D.fgb=new B.x("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,Au.Da,null,null,null,null,null,null,null,null,null)
D.fgm=new B.x("Element flies in",null,A.aPp,null,null,null,null,null,null,null,null,null)
D.TC=new B.x("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fgL=new B.x("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fh4=new B.x("Keep it",null,null,null,null,null,null,null,null,null,null,null)
D.fh8=new B.x("Cancel",null,E.aPA,null,null,null,null,null,null,null,null,null)
D.fha=new B.x("The lines and circles that come with the design",null,A.hp,null,null,null,null,null,null,null,null,null)
D.f5N=new B.G(!0,A.hh,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fhB=new B.x("DOCUMENT CODE",null,D.f5N,null,null,null,null,null,null,null,null,null)
D.fip=new B.x("Quotes",null,G.a7x,null,null,null,null,null,null,null,null,null)
D.f_H=new B.G(!0,O.la,null,null,null,null,null,A.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fix=new B.x("Add a picture",null,D.f_H,null,null,null,null,null,null,null,null,null)
D.fiF=new B.x("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.a7c,null,A.L,null,null,null,null,null,null,null)
D.fiJ=new B.x("Look & feel",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fiO=new B.x("Rings",null,A.i5,null,null,null,null,null,null,null,null,null)
D.fiU=new B.x("W",null,A.rF,null,null,null,null,null,null,null,null,null)
D.fj3=new B.x("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fjm=new B.x("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.IT,null,A.L,null,null,null,null,null,null,null)
D.fjo=new B.x("Write your book",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fk9=new B.x("Add page",null,A.cj,null,null,null,null,null,null,null,null,null)
D.fko=new B.x("Malipo ya Awamu ya Mahari",null,A.hq,null,null,null,null,null,null,null,null,null)
D.f06=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fkD=new B.x("Create with AI",null,D.f06,null,A.L,null,null,null,null,null,null,null)
D.fl5=new B.x("Apply look",null,A.i5,null,null,null,null,null,null,null,null,null)
D.f0P=new B.G(!0,A.es,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.flT=new B.x("Type your presentation below",null,D.f0P,null,A.L,null,null,null,null,null,null,null)
D.flW=new B.x("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,H.aQa,null,A.L,null,null,null,null,null,null,null)
D.flY=new B.x("Keep it",null,A.cj,null,null,null,null,null,null,null,null,null)
D.eWS=new B.G(!0,A.cr,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fm4=new B.x("Done",null,D.eWS,null,null,null,null,null,null,null,null,null)
D.fmp=new B.x("Delete",null,A.nr,null,null,null,null,null,null,null,null,null)
D.fmy=new B.x("Hati ya Kiapo cha Uongozi",null,A.hq,null,null,null,null,null,null,null,null,null)
D.f_2=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fnq=new B.x("Write your idea in any language \u2014 the AI makes the slides.",null,D.f_2,null,A.L,null,null,null,null,null,null,null)
D.fnM=new B.x("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fnS=new B.x("Layout",null,A.Tv,null,null,null,null,null,null,null,null,null)
D.fov=new B.x("Print",null,A.cy,null,null,null,null,null,null,null,null,null)
D.foA=new B.x("X",null,A.rF,null,null,null,null,null,null,null,null,null)
D.fp9=new B.x("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Aa.Tg,null,null,null,null,null,null,null,null,null)
D.fpH=new B.x("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.fpT=new B.x("Hati ya Kuhowa",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fpV=new B.x("Choose a class template",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fpX=new B.x("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fq2=new B.x("Download the newspaper picture",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fqe=new B.x("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.fql=new B.x("Done",null,A.aPX,null,null,null,null,null,null,null,null,null)
D.fqv=new B.x("Ending celebration",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fqw=new B.x("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.fqL=new B.x("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Aa.IL,null,null,null,null,null,null,null,null,null)
D.frI=new B.x("Export presentation",null,A.dm,null,null,null,null,null,null,null,null,null)
D.frJ=new B.x("What would you like to do?",null,D.aPj,null,null,null,null,null,null,null,null,null)
D.frN=new B.x("Delete",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fsh=new B.x("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.fsl=new B.x("Hati (Documents)",null,A.hq,null,null,null,null,null,null,null,null,null)
D.fsy=new B.x("Done",null,A.l2,null,null,null,null,null,null,null,null,null)
D.f6M=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fsD=new B.x("Delete presentation?",null,D.f6M,null,A.L,null,null,null,null,null,null,null)
D.fsU=new B.x("After the last slide it starts again from the first",null,A.hp,null,null,null,null,null,null,null,null,null)
D.ft4=new B.x("\ud83c\udf33",null,A.IP,null,A.L,null,null,null,null,null,null,null)
D.ftm=new B.x("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.hp,null,null,null,null,null,null,null,null,null)
D.ftt=new B.x("Transfer document",null,A.p5,null,null,null,null,null,null,null,null,null)
D.ftE=new B.x("Add to the slides",null,A.ho,null,null,null,null,null,null,null,null,null)
D.fu0=new B.x("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fuf=new B.x("Make a book",null,I.aOT,null,null,null,null,null,null,null,null,null)
D.fuj=new B.x("Books",null,A.cy,null,null,null,null,null,null,null,null,null)
D.f_A=new B.G(!0,A.ak,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuk=new B.x("Keep this page open until it finishes.",null,D.f_A,null,null,null,null,null,null,null,null,null)
D.fun=new B.x("Making your video",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fus=new B.x("LANGUAGE",null,D.Tn,null,null,null,null,null,null,null,null,null)
D.fuz=new B.x("Use this ending",null,A.cy,null,null,null,null,null,null,null,null,null)
D.fuH=new B.x("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.fuI=new B.x("Upload a different logo",null,A.cj,null,null,null,null,null,null,null,null,null)
D.fuY=new B.x("Delete from the database?",null,A.l1,null,null,null,null,null,null,null,null,null)
D.fuZ=new B.x("H",null,A.rF,null,null,null,null,null,null,null,null,null)
D.fvm=new B.x("NGMY Quotes",null,A.dl,null,null,null,null,null,null,null,null,null)
D.fvO=new B.x("Cover",null,D.aQ7,null,null,null,null,null,null,null,null,null)
D.fvS=new B.x("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.fvT=new B.x("Each page becomes its own slide you can present",null,A.hp,null,null,null,null,null,null,null,null,null)
D.fwf=new B.x("Y",null,A.rF,null,null,null,null,null,null,null,null,null)
D.fwq=new B.x("Crop the picture",null,A.l2,null,null,null,null,null,null,null,null,null)
D.fww=new B.x("Edit text",null,A.IQ,null,null,null,null,null,null,null,null,null)
D.fyK=B.dR("a7Y")
D.Dm=new C.awr(0,"none")
D.aT2=new C.awr(1,"zipCrypto")
D.aT3=new C.awr(2,"aes")
D.fMV=new F.P1("","",null)
D.fO0=new C.bbC(null)
D.fP7=new C.Z8(null)
D.fQH=new C.acT(null)
D.fQJ=new C.aDD(null)
D.fTu=new C.a_n(null)
D.fTL=new C.a_U(null)
D.fU3=new C.btd(null)})();(function staticFields(){$.haX=null
$.haY=null
$.haZ=null
$.hb_=null
$.fU2=B.uZ("_lastQuoRemDigits")
$.fU3=B.uZ("_lastQuoRemUsed")
$.awN=B.uZ("_lastRemUsed")
$.fU4=B.uZ("_lastRem_nsh")
$.q0=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.a6N=B.T(x.N,x.I)
$.fRx=!1
$.hfK=B.T(B.ax("kQ"),x.N)
$.hfX=B.T(B.ax("kQ"),x.E)
$.hdX=!1
$.byR="q"
$.PY=0
$.Co=B.T(x.N,B.ax("ai<zh>"))
$.hej=!1
$.fVD=!1
$.hkz=null
$.hOI=B.T(x.N,B.ax("az<n?>"))
$.K6=""
$.iZ=0
$.h7I=function(){var w=x.N
return B.T(w,w)}()
$.h7H=B.T(x.N,x.R)
$.fVY=!1
$.afB=B.T(x.N,x.E)
$.fWL=0
$.bjH=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"icR","CK",()=>C.b97(0))
w($,"icP","a28",()=>C.b97(1))
w($,"icQ","ho9",()=>C.b97(2))
w($,"icO","h_x",()=>$.a28().uT(0))
w($,"icM","ho7",()=>C.b97(1e4))
w($,"icN","ho8",()=>B.DX(8))
w($,"i8E","hma",()=>B.DX(0))
w($,"i8M","hme",()=>B.DX(0))
w($,"i8L","hmd",()=>B.bXt(0))
w($,"igw","hq9",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a3e.gdK(D.a3e),v=v.gaf(v);v.C();){u=v.gT(v)
t.n(0,u.b,u.a)}return t})
w($,"igX","bDn",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.mQ(new C.fCt(),v,"biz_plan_blue","Business Plan",B.a([B.b0(u),B.b0(t)],h)),C.mQ(new C.fCu(),v,"exec_summary","Executive",B.a([B.b0(s),B.b0(t)],h)),C.mQ(new C.fCv(),v,"teal_corporate","Teal Corp",B.a([B.b0(r),B.b0(4279310375)],h)),C.mQ(new C.fCG(),q,"geometric_overlap","Geometric",B.a([B.b0(4279203438),B.b0(u)],h)),C.mQ(new C.fCL(),p,"midnight_cyan","Midnight Cyan",B.a([B.b0(o),B.b0(n)],h)),C.mQ(new C.fCM(),q,"diagonal_hero","Diagonal Hero",B.a([B.b0(m),B.b0(l)],h)),C.mQ(new C.fCN(),v,"swot_grid","SWOT Grid",B.a([B.b0(u),B.b0(4278556265)],h)),C.mQ(new C.fCO(),v,"layered_chevrons","Chevrons",B.a([B.b0(4280172719),B.b0(k)],h)),C.mQ(new C.fCP(),q,"split_triangle","Split Panel",B.a([B.b0(s),B.b0(t)],h)),C.mQ(new C.fCQ(),v,"corporate_navy","Navy Pro",B.a([B.b0(4278982953),B.b0(4282090230)],h)),C.mQ(new C.fCR(),p,"cyan_slash","Cyan Slash",B.a([B.b0(o),B.b0(4278630100)],h)),C.mQ(new C.fCw(),p,"crimson_impact","Crimson",B.a([B.b0(4282714634),B.b0(4292617766)],h)),C.mQ(new C.fCx(),q,"ocean_waves","Ocean Waves",B.a([B.b0(4278413729),B.b0(4286436348)],h)),C.mQ(new C.fCy(),p,"mono_geometric","Mono Geo",B.a([B.b0(o),B.b0(n)],h)),C.mQ(new C.fCz(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b0(4280031511),B.b0(4293571336)],h)),C.mQ(new C.fCA(),q,"hex_infographic","Hex Stack",B.a([B.b0(r),B.b0(4284410580)],h)),C.mQ(new C.fCB(),q,"photo_banner","Photo Banner",B.a([B.b0(m),B.b0(4281908728)],h)),C.mQ(new C.fCC(),v,"process_steps","Process",B.a([B.b0(s),B.b0(k)],h)),C.mQ(new C.fCD(),"Minimal","grid_modern","Grid Modern",B.a([B.b0(l),B.b0(t)],h)),C.mQ(new C.fCE(),"Luxury","platinum_frame","Platinum",B.a([B.b0(4282865001),B.b0(4293060848)],h)),C.mQ(new C.fCF(),v,"agenda_cards","Agenda Cards",B.a([B.b0(u),B.b0(4292602622)],h)),C.mQ(new C.fCH(),q,"headline_orange","Headline Orange",B.a([B.b0(j),B.b0(i)],h)),C.mQ(new C.fCI(),q,"infographic_teal","Infographic",B.a([B.b0(r),B.b0(j)],h)),C.mQ(new C.fCJ(),q,"content_year","Year Feature",B.a([B.b0(j),B.b0(t)],h)),C.mQ(new C.fCK(),q,"photo_cta","Photo CTA",B.a([B.b0(m),B.b0(i)],h))],B.ax("O<En>"))})
w($,"igz","hqb",()=>B.af("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["+GahLOZEWTVqtl6i4roWq9XPa3E="]=a.current})($__dart_deferred_initializers__);