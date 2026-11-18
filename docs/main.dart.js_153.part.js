((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,A,A2,Al,A9,Am,An,X,Aa,Ao,Ap,C={
um(d,e){for(;;){if(!(d>0&&e[d-1]===0))break;--d}return d},
hdA(d,e,f,g){var w,v=new Uint16Array(g),u=f-e
for(w=0;w<u;++w)v[w]=d[e+w]
return v},
KI(d){var w
if(d===0)return $.DO()
if(d===1)return $.a49()
if(d===2)return $.hL8()
if(Math.abs(d)<4294967296)return C.bcN(A.o.M(d))
w=C.i5u(d)
return w},
bcN(d){var w,v,u,t,s=d<0
if(s){if(d===-9223372036854776e3){w=new Uint16Array(4)
w[3]=32768
v=C.um(4,w)
return new C.oo(v!==0,w,v)}d=-d}if(d<65536){w=new Uint16Array(1)
w[0]=d
v=C.um(1,w)
return new C.oo(v===0?!1:s,w,v)}if(d<=4294967295){w=new Uint16Array(2)
w[0]=d&65535
w[1]=A.o.aI(d,16)
v=C.um(2,w)
return new C.oo(v===0?!1:s,w,v)}v=A.o.ar(A.o.galW(d)-1,16)+1
w=new Uint16Array(v)
for(u=0;d!==0;u=t){t=u+1
w[u]=d&65535
d=A.o.ar(d,65536)}v=C.um(v,w)
return new C.oo(v===0?!1:s,w,v)},
i5u(d){var w,v,u,t,s,r,q,p
if(isNaN(d)||d==1/0||d==-1/0)throw B.X(B.dO("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.DO()
w=$.hL7()
for(v=w.$flags|0,u=0;u<8;++u){v&2&&B.aj(w)
w[u]=0}v=J.lu(A.aI.gaT(w))
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
q=new C.oo(!1,r,4)
if(s<0)p=q.mK(0,-s)
else p=s>0?q.dX(0,s):q
return p},
hdB(d,e,f,g){var w,v,u
if(e===0)return 0
if(f===0&&g===d)return e
for(w=e-1,v=g.$flags|0;w>=0;--w){u=d[w]
v&2&&B.aj(g)
g[w+f]=u}for(w=f-1;w>=0;--w){v&2&&B.aj(g)
g[w]=0}return e+f},
hwE(d,e,f,g){var w,v,u,t,s,r=A.o.ar(f,16),q=A.o.F(f,16),p=16-q,o=A.o.dX(1,p)-1
for(w=e-1,v=g.$flags|0,u=0;w>=0;--w){t=d[w]
s=A.o.fP(t,p)
v&2&&B.aj(g)
g[w+r+1]=(s|u)>>>0
u=A.o.dX(t&o,q)}v&2&&B.aj(g)
g[r]=u},
hwz(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16)
if(A.o.F(f,16)===0)return C.hdB(d,e,s,g)
w=e+s+1
C.hwE(d,e,f,g)
for(v=g.$flags|0,u=s;--u,u>=0;){v&2&&B.aj(g)
g[u]=0}t=w-1
return g[t]===0?t:w},
i5x(d,e,f,g){var w,v,u,t,s=A.o.ar(f,16),r=A.o.F(f,16),q=16-r,p=A.o.dX(1,r)-1,o=A.o.fP(d[s],r),n=e-s-1
for(w=g.$flags|0,v=0;v<n;++v){u=d[v+s+1]
t=A.o.dX(u&p,q)
w&2&&B.aj(g)
g[v]=(t|o)>>>0
o=A.o.fP(u,r)}w&2&&B.aj(g)
g[n]=o},
cPG(d,e,f,g){var w,v=e-g
if(v===0)for(w=e-1;w>=0;--w){v=d[w]-f[w]
if(v!==0)return v}return v},
i5v(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]+f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=v>>>16}w&2&&B.aj(h)
h[e]=v},
bcO(d,e,f,g,h){var w,v,u
for(w=h.$flags|0,v=0,u=0;u<g;++u){v+=d[u]-f[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}for(u=g;u<e;++u){v+=d[u]
w&2&&B.aj(h)
h[u]=v&65535
v=0-(A.o.aI(v,16)&1)}},
hwF(d,e,f,g,h,i){var w,v,u,t,s,r
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
i5w(d,e,f){var w,v=e[f]
if(v===d)return 65535
w=A.o.ed((v<<16|e[f-1])>>>0,d)
if(w>65535)return 65535
return w},
oo:function oo(d,e,f){this.a=d
this.b=e
this.c=f},
cPH:function cPH(){},
cPI:function cPI(){},
cPJ:function cPJ(d,e){this.a=d
this.b=e},
cPK:function cPK(d){this.a=d},
aU2:function aU2(d,e){this.a=d
this.b=e},
hmf(d,e,f){var w=new C.T4(d,A.o.ar(Date.now(),1000),e)
w.Q=f
return w},
T4:function T4(d,e,f){var _=this
_.a=d
_.b=420
_.e=e
_.as=_.Q=null
_.at=f},
a57:function a57(d,e){this.a=d
this.b=e},
bLl:function bLl(d){this.a=d
this.c=this.b=0},
hOw(){return new C.bJz()},
bJz:function bJz(){var _=this
_.ax=_.at=_.as=_.Q=_.z=_.y=_.x=_.w=_.r=_.f=_.e=_.d=_.c=_.b=_.a=$
_.ay=0
_.ch=-1
_.cx=_.CW=0
_.fr=_.dy=_.dx=_.db=_.cy=$
_.fx=0},
cHC:function cHC(d){var _=this
_.a=-1
_.r=_.f=0
_.x=d},
i5a(d,e,f){var w,v,u,t,s
if(d.gau(d))return new Uint8Array(0)
w=new Uint8Array(B.cc(d.gd3V(d)))
v=f*2+2
u=C.huk(C.hum(),64)
t=new C.cqk(u)
u=u.b
u===$&&B.c()
t.c=new Uint8Array(u)
t.a=new C.cql(e,1000,v)
s=new Uint8Array(v)
return A.aI.du(s,0,t.cRG(w,0,s,0))},
cHA:function cHA(d,e){this.c=d
this.d=e},
azs:function azs(d,e){this.a=d
this.b=e},
cHD:function cHD(d,e,f,g){var _=this
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
bbr:function bbr(){var _=this
_.as=_.Q=_.y=_.x=_.w=_.a=0
_.at=""
_.ch=_.ax=null},
cHB:function cHB(){this.a=$},
hw8(d,e){var w,v,u=d.length
if(u!==e.length)return!1
for(w=0,v=0;v<u;++v)w|=d[v]^e[v]
return w===0},
hOf(d,e){var w
d.$flags&2&&B.aj(d)
d[0]=e&255
d[1]=e>>>8&255
d[2]=e>>>16&255
d[3]=e>>>24&255
for(w=4;w<=15;++w)d[w]=0},
bI9:function bI9(d,e,f){var _=this
_.a=1
_.b=d
_.c=e
_.d=f
_.r=null
_.x=_.w=$},
hjS(d,e){e&=31
return(d&$.qD[e])<<e>>>0},
nW(d,e){e&=31
return(d>>>e|C.hjS(d,32-e))>>>0},
hul(d){var w,v=new C.av_()
if(B.j_(d))v.aN8(d,null)
else{x.dw.a(d)
w=d.a
w===$&&B.c()
v.a=w
w=d.b
w===$&&B.c()
v.b=w}return v},
hum(){var w=C.hul(0),v=new Uint8Array(4),u=x.S
u=new C.cqm(w,v,A.FK,5,B.c1(5,0,!1,u),B.c1(80,0,!1,u))
u.iv(0)
return u},
huk(d,e){var w=new C.cqi(d,e)
w.b=20
w.d=new Uint8Array(e)
w.e=new Uint8Array(e+20)
return w},
cqh:function cqh(){},
cql:function cql(d,e,f){this.a=d
this.b=e
this.c=f},
cqf:function cqf(){},
auZ:function auZ(d){this.a=d},
cqk:function cqk(d){this.a=$
this.b=d
this.c=$},
cqg:function cqg(){},
cqe:function cqe(){},
av_:function av_(){this.b=this.a=$},
cqj:function cqj(){},
cqm:function cqm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=$
_.d=f
_.e=g
_.f=h
_.r=i
_.w=$},
cqi:function cqi(d,e){var _=this
_.a=d
_.b=$
_.c=e
_.e=_.d=$},
cqd:function cqd(){},
cqc:function cqc(d){var _=this
_.a=0
_.b=$
_.c=!1
_.d=d},
bTC:function bTC(){},
bTD:function bTD(d){this.a=d},
i8x(d){if(d<0.36363636363636365)return 7.5625*d*d
else if(d<0.7272727272727273){d-=0.5454545454545454
return 7.5625*d*d+0.75}else if(d<0.9090909090909091){d-=0.8181818181818182
return 7.5625*d*d+0.9375}d-=0.9545454545454546
return 7.5625*d*d+0.984375},
bd2:function bd2(){},
cAK:function cAK(){},
bUD:function bUD(d,e){this.a=d
this.b=!1
this.c=e},
bUE:function bUE(){},
a9R:function a9R(d){this.a=d},
ikg(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p=new C.fIt(15,d,f,e,g,h),o=i*i,n=A.i.V(i/1.4142135623730951)
for(w=0;w<=n;++w){v=Math.sqrt(o-w*w)
u=v-Math.floor(v)
t=u*(w===n?0.25:1)
s=A.i.bg(v)
r=1-u
p.$5(j,k,w,s,r)
q=s+1
p.$5(j,k,w,q,t)
p.$5(j,k,s,w,r)
p.$5(j,k,q,w,t)}return d},
fIt:function fIt(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aps(){var w=0,v=B.j(x.gw),u,t,s,r,q
var $async$aps=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(V.aip("ngmy_menu_lib_v1_zzslides_index",A.bN),$async$aps)
case 3:q=e
if(!q.a){u=null
w=1
break}t=q.b
s=t==null?null:J.t(t,"items")
if(x.j.b(s)){t=J.de(s,x.f)
t=B.cF(t,new C.c4G(),t.$ti.k("M.E"),x.P)
r=B.C(t,B.a3(t).k("M.E"))}else r=B.a([],x.d)
A.d.b_(r,new C.c4H())
u=r
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aps,v)},
apu(d){var w=0,v=B.j(x.S),u,t,s,r,q,p,o,n,m,l,k,j
var $async$apu=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aps(),$async$apu)
case 3:j=f
if(j==null){u=0
w=1
break}t=x.N
s=B.T(t,x.P)
for(r=J.aT(j);r.C();){q=r.gP(r)
p=J.t(q,"id")
s.n(0,J.k(p==null?"":p),q)}r=d.length,q=x.z,o=0,n=0
case 4:if(!(n<d.length)){w=6
break}m=d[n]
l=new B.V(Date.now(),0,!1).aa().ag()
p=m.a
k=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(B.n4("ngmy_menu_lib_v1_zzslide_"+B.aL(p,k,""),B.J(["deck",m.aj(),"savedAt",l],t,q),null),$async$apu)
case 7:if(!f){w=5
break}s.n(0,p,B.J(["id",p,"name",m.b,"slides",m.r.length,"savedAt",l],t,q));++o
case 5:d.length===r||(0,B.I)(d),++n
w=4
break
case 6:w=o>0?8:9
break
case 8:r=s.$ti.k("b7<2>")
s=B.C(new B.b7(s,r),r.k("M.E"))
w=10
return B.b(B.n4("ngmy_menu_lib_v1_zzslides_index",B.J(["items",s,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],t,q),null),$async$apu)
case 10:if(!f){u=0
w=1
break}case 9:u=o
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apu,v)},
c4I(d){return C.hUk(d)},
hUk(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$c4I=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
o=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(V.aip("ngmy_menu_lib_v1_zzslide_"+B.aL(d,o,""),A.id),$async$c4I)
case 7:r=f
o=r.b
q=o==null?null:J.t(o,"deck")
if(!x.f.b(q)){u=null
w=1
break}o=C.Xm(B.a1(q,x.N,x.z))
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
return B.i($async$c4I,v)},
apt(d){var w=0,v=B.j(x.y),u,t,s,r
var $async$apt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.aps(),$async$apt)
case 3:r=f
if(r==null){u=!1
w=1
break}J.nY(r,new C.c4J(d))
w=4
return B.b(B.n4("ngmy_menu_lib_v1_zzslides_index",B.J(["items",r,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),null),$async$apt)
case 4:t=f
w=t?5:6
break
case 5:s=B.ag("[^A-Za-z0-9_-]",!0,!1,!1,!1)
w=7
return B.b(V.aS6("ngmy_menu_lib_v1_zzslide_"+B.aL(d,s,"")),$async$apt)
case 7:case 6:u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$apt,v)},
c4G:function c4G(){},
c4H:function c4H(){},
c4J:function c4J(d){this.a=d},
iun(d,e,f){return B.bT(A.L,null,new C.fZL(e,f,null),d,!0,!0,!0,null,!1,!1,x.H)},
fZL:function fZL(d,e,f){this.a=d
this.b=e
this.c=f},
a2m:function a2m(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aLD:function aLD(d){var _=this
_.d=d
_.e=null
_.f=!0
_.r=!1
_.w=0
_.x=null
_.y=!1
_.c=_.a=null},
fjL:function fjL(d,e){this.a=d
this.b=e},
fjP:function fjP(d){this.a=d},
fjQ:function fjQ(d){this.a=d},
fjR:function fjR(d,e,f){this.a=d
this.b=e
this.c=f},
fjM:function fjM(d){this.a=d},
fjN:function fjN(d){this.a=d},
fjO:function fjO(d,e){this.a=d
this.b=e},
fjG:function fjG(d){this.a=d},
fjE:function fjE(d){this.a=d},
fjF:function fjF(d){this.a=d},
fjH:function fjH(d){this.a=d},
fjI:function fjI(d){this.a=d},
fjV:function fjV(d,e){this.a=d
this.b=e},
fjU:function fjU(d,e){this.a=d
this.b=e},
fjK:function fjK(d,e,f){this.a=d
this.b=e
this.c=f},
fjJ:function fjJ(d,e,f){this.a=d
this.b=e
this.c=f},
fjS:function fjS(d,e){this.a=d
this.b=e},
fjT:function fjT(d,e){this.a=d
this.b=e},
fjY:function fjY(d){this.a=d},
fjZ:function fjZ(d,e){this.a=d
this.b=e},
fjX:function fjX(d,e){this.a=d
this.b=e},
fjW:function fjW(){},
hz9(d){var w,v,u,t
if(d==null||d.length===0)return B.a([],x.k)
try{w=A.W.aP(0,d,null)
if(!x.j.b(w)){v=B.a([],x.k)
return v}v=J.de(w,x.f)
v=B.cF(v,new C.fri(),v.$ti.k("M.E"),x.ea)
u=B.a3(v).k("Y<M.E>")
v=B.C(new B.Y(v,new C.frj(),u),u.k("M.E"))
return v}catch(t){v=B.a([],x.k)
return v}},
a3l(d){return C.ilC(d)},
ilC(d){var w=0,v=B.j(x.gL),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$a3l=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:n=B.T(x.N,x.ea)
m=new C.fLH(n)
t=4
j=m
i=C
w=7
return B.b(B.a3X("ngmy_books_v1_"+A.a.i(d.toLowerCase())),$async$a3l)
case 7:j.$1(i.hz9(f))
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
return B.b(B.aA(),$async$a3l)
case 12:r=f
p=A.a.i(d.toLowerCase())
m.$1(C.hz9(B.aV(J.t(r.a,"ngmy_books_v1_"+p))))
t=2
w=11
break
case 9:t=8
k=s.pop()
w=11
break
case 8:w=2
break
case 11:p=n.$ti.k("b7<2>")
o=p.k("Y<M.E>")
j=B
i=B
h=new B.b7(n,p)
g=C
w=13
return B.b(C.frr(d),$async$a3l)
case 13:p=j.C(new i.Y(h,new g.fLF(f),o),o.k("M.E"))
A.d.b_(p,new C.fLG())
u=p
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a3l,v)},
aj1(d,e){return C.iu1(d,e)},
iu1(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$aj1=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:n=J.b8(e,new C.fZd(),x.P)
n=B.C(n,n.$ti.k("ak.E"))
r=A.W.av(n,null)
q=!1
t=4
w=7
return B.b(B.aiT("ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aj1)
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
return B.b(B.aA(),$async$aj1)
case 12:p=g
w=13
return B.b(p.aC("String","ngmy_books_v1_"+A.a.i(d.toLowerCase()),r),$async$aj1)
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
return B.i($async$aj1,v)},
frr(d){return C.i9W(d)},
i9W(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$frr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$frr)
case 7:r=f
q=r.tW("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jG(q,B.U(q).c)
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
return B.i($async$frr,v)},
ahS(d,e){return C.ik8(d,e)},
ik8(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$ahS=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$ahS)
case 6:s=g
r=B.aR(x.N)
q=s.tW("ngmy_books_deleted_v1_"+A.a.i(d.toLowerCase()))
if(q!=null)J.h1(r,q)
J.c5(r,e)
p=r
r=A.a.i(d.toLowerCase())
q=p
q=B.C(q,B.a3(q).k("ci.E"))
w=7
return B.b(s.aC("StringList","ngmy_books_deleted_v1_"+r,q),$async$ahS)
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
return B.b(C.a3l(d),$async$ahS)
case 8:n=g
J.nY(n,new C.fI7(e))
w=9
return B.b(C.aj1(d,n),$async$ahS)
case 9:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$ahS,v)},
ius(d,e){return B.a6(d,!1).ce(B.ee(new C.h_6(e),!0,null,x.H))},
i5z(d){var w=d.b
return A.a.i(w.a)==="My Book"&&A.d.cD(w.d,new C.cR3())},
oT:function oT(d,e,f){this.a=d
this.b=e
this.c=f},
fri:function fri(){},
frj:function frj(){},
fLH:function fLH(d){this.a=d},
fLF:function fLF(d){this.a=d},
fLG:function fLG(){},
fZd:function fZd(){},
fI7:function fI7(d){this.a=d},
h_6:function h_6(d){this.a=d},
a_4:function a_4(d,e){this.c=d
this.a=e},
aA1:function aA1(d,e){var _=this
_.d=d
_.e=!0
_.f=e
_.c=_.a=null},
cR3:function cR3(){},
cR5:function cR5(d,e){this.a=d
this.b=e},
cR8:function cR8(d){this.a=d},
cR9:function cR9(d){this.a=d},
cR7:function cR7(){},
cRa:function cRa(d,e){this.a=d
this.b=e},
cR6:function cR6(d){this.a=d},
cRb:function cRb(){},
cR4:function cR4(d,e){this.a=d
this.b=e},
cRc:function cRc(){},
cR_:function cR_(d){this.a=d},
cQY:function cQY(d){this.a=d},
cQZ:function cQZ(d){this.a=d},
cR0:function cR0(d,e){this.a=d
this.b=e},
cQX:function cQX(d){this.a=d},
cQW:function cQW(d){this.a=d},
cQU:function cQU(d,e){this.a=d
this.b=e},
cQV:function cQV(d){this.a=d},
cR2:function cR2(){},
cR1:function cR1(d){this.a=d},
cQT:function cQT(d,e){this.a=d
this.b=e},
cQS:function cQS(d,e){this.a=d
this.b=e},
cQR:function cQR(d,e){this.a=d
this.b=e},
cRd:function cRd(d){this.a=d},
a_2:function a_2(d,e,f){this.c=d
this.d=e
this.a=f},
aHq:function aHq(d,e,f){this.a=d
this.b=e
this.c=f},
azY:function azY(d){var _=this
_.r=_.f=_.e=_.d=$
_.w=d
_.x=null
_.y=!1
_.c=_.a=null},
cQk:function cQk(d){this.a=d},
cQj:function cQj(d){this.a=d},
cQm:function cQm(d,e,f){this.a=d
this.b=e
this.c=f},
cQu:function cQu(){},
cQv:function cQv(d){this.a=d},
cQn:function cQn(d,e,f){this.a=d
this.b=e
this.c=f},
cQl:function cQl(d,e){this.a=d
this.b=e},
cQp:function cQp(d,e){this.a=d
this.b=e},
cQq:function cQq(d,e){this.a=d
this.b=e},
cQr:function cQr(d,e){this.a=d
this.b=e},
cQo:function cQo(d){this.a=d},
cQt:function cQt(d){this.a=d},
cQs:function cQs(d,e){this.a=d
this.b=e},
cQA:function cQA(d){this.a=d},
cQw:function cQw(d,e){this.a=d
this.b=e},
cQx:function cQx(d,e){this.a=d
this.b=e},
cQy:function cQy(d,e){this.a=d
this.b=e},
cQz:function cQz(d,e){this.a=d
this.b=e},
aA_:function aA_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
hFR(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.ek(v,w,"").split(":"))},
hFP(d){var w=d.db
if(!A.a.a_(w,"marriage_sign_"))return null
if(A.a.a_(w,"marriage_sign_placed_"))return null
if(d.b===D.lw)return null
return A.a.b4(w,14)},
hit(d){var w
if(d.b!==D.lw)return null
w=d.db
if(!A.a.a_(w,"marriage_sign_placed_"))return null
return A.a.b4(w,21)},
ion(d){if(d==="hati_kuhowa")return"hati_kuhoweya"
if(d==="hati_kuhoweya")return"hati_kuhowa"
return""},
hFS(d){if(d==="hati_kuhowa")return"Hati ya Kuhoweya"
if(d==="hati_kuhoweya")return"Hati ya Kuhowa"
return"partner document"},
ioi(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=B.ag("\\s+",!0,!1,!1,!1),f=A.a.i(B.aL(d,g," "))
g=B.ag("\\s+",!0,!1,!1,!1)
w=A.a.i(B.aL(e,g," "))
g=f.length
if(g===0||w.length===0){g=x.N
return B.T(g,g)}v=B.ag("\\[[^\\]]+\\]",!0,!1,!1,!1)
u=v.kZ(0,f)
t=x.N
u=B.cF(u,new C.fRf(),B.a3(u).k("M.E"),t)
s=B.C(u,B.a3(u).k("M.E"))
if(s.length===0)return B.T(t,t)
for(u=v.kZ(0,f),u=new B.Gs(u.a,u.b,u.c),r=x.cz,q=0,p="^";u.C();){o=u.d
n=(o==null?r.a(o):o).b
m=n.index
p=(m>q?p+B.SM(A.a.aA(f,q,m)):p)+"(.*?)"
q=m+n[0].length}u=(q<g?p+B.SM(A.a.b4(f,q)):p)+"\\.?$"
l=B.ag(u.charCodeAt(0)==0?u:u,!1,!1,!1,!1).cE(w)
if(l==null)return B.T(t,t)
k=B.T(t,t)
for(g=l.b,j=0;j<s.length;j=i){i=j+1
u=g[i]
h=A.a.i(u==null?"":u)
if(h.length===0)continue
k.n(0,s[j],h)}return k},
iog(d,e){var w,v,u,t,s,r=B.a3(e).k("cr<1>"),q=B.C(new B.cr(e,r),r.k("M.E"))
A.d.b_(q,new C.fRe())
for(r=q.length,w=d,v=0;v<q.length;q.length===r||(0,B.I)(q),++v){u=q[v]
t=e.h(0,u)
s=t==null?null:A.a.i(t)
if(s==null)s=""
if(s.length===0)continue
if(A.a.a_(s,"[")&&A.a.c7(s,"]"))continue
w=B.aT6(w,u,s,0)}return w},
iok(d,e){var w,v,u,t=d==="hati_kuhowa"?D.a7I:$.hNj(),s=x.N,r=B.T(s,s)
for(s=t.gdP(t),s=s.gae(s);s.C();){w=s.gP(s)
v=e.h(0,w.a)
u=v==null?null:A.a.i(v)
if(u==null)u=""
if(u.length===0)continue
if(A.a.a_(u,"[")&&A.a.c7(u,"]"))continue
r.n(0,w.b,u)}return r},
hFQ(d){if(d==="hati_kuhowa")return y.O
if(d==="hati_kuhoweya")return y.f
return""},
fsj(d,e){var w,v,u,t,s,r,q
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
if(C.hFR(q)===e)return q}return null},
iol(d){var w,v=A.a.i(d.c),u=d.w
if(u==="hati_kuhowa")w="hati_kuhowa_"
else w=u==="hati_kuhoweya"?"hati_kuhoweya_":""
u=w.length
if(u!==0&&A.a.a_(v,w))return A.a.b4(v,u)
return A.d.gH(D.IA).a},
iom(b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0="utangulizi",b1=b6.w,b2=b1==null?"":b1,b3=b5.w,b4=b3==null?"":b3
if(b1==="hati_kuhowa"||b1==="hati_kuhoweya")w=!(b3==="hati_kuhowa"||b3==="hati_kuhoweya")
else w=!0
if(w)return new B.afE(0,0,0)
if(b2.length===0||b4.length===0||b2===b4)return new B.afE(0,0,0)
v=C.fsj(b6,b0)
u=C.fsj(b5,b0)
t=0
if(v!=null&&u!=null){s=C.iok(b2,C.ioi(C.hFQ(b2),v.r))
if(s.a!==0){u.r=C.iog(C.hFQ(b4),s)
t=s.a}}r=B.aR(x.N)
for(w=b6.r,q=w.length,p=0;p<w.length;w.length===q||(0,B.I)(w),++p)for(o=w[p].z,n=o.length,m=0;m<o.length;o.length===n||(0,B.I)(o),++m){l=C.hFR(o[m])
if(l==null||l==="utangulizi")continue
r.I(0,l)}for(q=B.e_(r,r.r,r.$ti.c),o=q.$ti.c,k=0;q.C();){n=q.d
if(n==null)n=o.a(n)
j=C.fsj(b6,n)
i=C.fsj(b5,n)
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
a0=C.hit(d)
if(a0==null)continue
a1=d.at
if(A.a.i(a1==null?"":a1).length===0)continue
a2=d.c
a3=d.d
a4=d.e
a5=d.f
for(a1=f.z,a6=a1.length,a7=0;a7<a1.length;a1.length===a6||(0,B.I)(a1),++a7){a8=a1[a7]
if(C.hFP(a8)===a0||C.hit(a8)===a0){a2=a8.c
a3=a8.d
a4=a8.e
a5=a8.f
break}}a1=f.z
a1.$flags&1&&B.aj(a1,16)
A.d.S1(a1,new C.fRm(a0),!0)
a1=f.z
a6=Date.now()
a9=$.iV
$.iV=a9+1
A.d.I(a1,new C.eO(""+1000*a6+"_"+a9,D.lw,a2,a3,a4,a5,"",24,A.a8,A.bq,A.aH,4279310375,A.bd,d.at,D.bf,4280640491,4280172719,2,0,!1,"marriage_sign_placed_"+a0,0,D.cn,0,"","","","","",!1,0));++e}b5.f=new B.V(Date.now(),0,!1)
return new B.afE(k,t,e)},
ioh(d){var w=C.iol(d)
if(d.w==="hati_kuhowa")return C.hFb("",w)
return C.hi5("",w)},
fRf:function fRf(){},
fRe:function fRe(){},
fRm:function fRm(d){this.a=d},
hAv(){var w=new B.V(Date.now(),0,!1),v=new C.fuJ()
return B.w(v.$1(B.bX(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hiC(d){var w=d.at,v=A.a.i(w==null?"":w)
w=d.db
return(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))&&v.length!==0},
fSf(d){var w,v,u,t,s,r,q=d.ax
if(A.a.i(q==null?"":q).length!==0)return!0
for(q=d.r,w=q.length,v=0;v<w;++v)for(u=q[v].z,t=u.length,s=0;s<t;++s){r=u[s]
if(r.b===D.lw&&A.a.a_(r.db,"marriage_sign_placed_rais"))return!0}return!1},
hG6(d){var w,v=d.ax,u=A.a.i(v==null?"":v)
if(u.length===0)return!C.fSf(d)
w=B.bj(u)
if(w==null)return!C.fSf(d)
return new B.V(Date.now(),0,!1).aa().d3(w.aa().bS(18e9))},
ip4(d){var w=d.ax
if(A.a.i(w==null?"":w).length!==0)return
d.ax=new B.V(Date.now(),0,!1).aa().ag()},
hYn(d){return A.a.i(d).toLowerCase()},
b29(d){return C.hYo(d)},
hYo(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o,n,m
var $async$b29=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$b29)
case 7:r=f
p=r.tW("ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase())
q=p==null?A.Z:p
o=q
o=new B.N(o,C.isP(),B.U(o).k("N<1,n>")).c_(0,new C.cgy())
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
return B.i($async$b29,v)},
a8C(d,e){return C.hYp(d,e)},
hYp(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n
var $async$a8C=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:o=A.a.i(e).toLowerCase()
if(o.length===0||A.a.i(d).length===0){w=1
break}w=3
return B.b(C.b29(d),$async$a8C)
case 3:r=g
if(!J.hf(r,o)){w=1
break}t=5
w=8
return B.b(B.aA(),$async$a8C)
case 8:q=g
w=9
return B.b(q.aC("StringList","ngmy_kiapo_hidden_presentations_"+A.a.i(d).toLowerCase(),J.q4(r)),$async$a8C)
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
return B.i($async$a8C,v)},
a8D(){var w=0,v=B.j(x.y),u,t
var $async$a8D=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a8D)
case 3:t=e
u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a8D,v)},
hYq(d){var w=$.Cm.h(0,d)
w=w==null?null:J.t(w,"at")
return B.bj(w==null?"":w)},
hYr(d,e){var w,v,u,t=$.Cm.h(0,d)
if(t==null)return!1
w=J.a8(t)
v=w.h(t,"id")
if((v==null?"":v).length!==0)return w.h(t,"id")===e.a
u=C.hYq(d)
return u!=null&&!e.f.ca(u)},
hsf(d){var w,v,u,t,s,r,q,p,o,n,m
for(w=J.i6(d),w=w.gae(w),v=x.f,u=x.N,t=x.z;w.C();){s=w.gP(w)
r=s.b
if(!v.b(r))continue
q=B.a1(r,u,t)
r=q.h(0,"at")
p=B.bj(J.k(r==null?"":r))
if(p==null)continue
o=J.k(s.a)
s=$.Cm.h(0,o)
s=s==null?null:J.t(s,"at")
n=B.bj(s==null?"":s)
s=!0
if(n!=null){r=p.a
if(r<=n.gbt())s=r===n.gbt()&&p.b>n.gcG()}if(s){s=$.Cm
r=p.aa().ag()
m=q.h(0,"id")
s.n(0,o,B.J(["at",r,"id",J.k(m==null?"":m)],u,u))}}},
haW(){var w=$.Cl
return w.bq(w,new C.cgz())},
WJ(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3
var $async$WJ=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.uD("civic_hati_kiapo_uongozi",null,A.ei),$async$WJ)
case 3:a2=a5
if(a2==null){w=1
break}o=J.a8(a2)
n=x.f
m=x.N
l=x.z
k=n.b(o.h(a2,"deletedByState"))?B.a1(n.a(o.h(a2,"deletedByState")),m,l):B.T(m,l)
j=$.Cm
i=new B.cd(j,B.a3(j).k("cd<1,2>")).aU(0,new C.cgB(k))
if(n.b(o.h(a2,"deletedByState")))C.hsf(n.a(o.h(a2,"deletedByState")))
if(n.b(o.h(a2,"byState")))for(o=J.i6(n.a(o.h(a2,"byState"))),o=o.gae(o);o.C();){j=o.gP(o)
h=j.b
if(!n.b(h))continue
g=C.Xm(B.a1(h,m,l))
h=$.Cl
j=j.a
f=J.kU(j)
e=h.h(0,f.v(j))
if(e!=null){h=g.f
d=e.f
a0=h.a
if(a0>=d.gbt())h=a0===d.gbt()&&h.b<d.gcG()
else h=!0
h=!h}else h=!0
if(h)$.Cl.n(0,f.v(j),g)}C.haW()
$.hse=new B.V(Date.now(),0,!1)
w=4
return B.b(C.WK(),$async$WJ)
case 4:w=i?5:6
break
case 5:t=8
r=B.T(m,x.P)
for(o=$.Cl,o=new B.cd(o,B.a3(o).k("cd<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=11
return B.b(B.n4("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Cm,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],m,l),null),$async$WJ)
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
return B.i($async$WJ,v)},
OA(a2){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$OA=B.e(function(a3,a4){if(a3===1){s.push(a4)
w=t}for(;;)switch(w){case 0:if($.cgA&&!a2){w=1
break}t=4
w=7
return B.b(B.aA(),$async$OA)
case 7:r=a4
q=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1"))
if(q!=null&&A.a.i(q).length!==0){p=A.W.aP(0,q,null)
i=x.f
if(i.b(p)){h=x.N
o=B.T(h,x.I)
for(g=J.i6(p),g=g.gae(g),f=x.z;g.C();){n=g.gP(g)
if(i.b(n.b))J.aK(o,J.k(n.a),C.Xm(B.a1(i.a(n.b),h,f)))}$.Cl=o}}m=B.aV(J.t(r.a,"ngmy_civic_hati_kiapo_uongozi_v1_deleted"))
if(m!=null&&A.a.i(m).length!==0){l=A.W.aP(0,m,null)
if(x.f.b(l))C.hsf(l)}C.haW()
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
return B.b(B.c8(),$async$OA)
case 10:case 9:o=a4
w=o?11:12
break
case 11:t=14
w=17
return B.b(C.WJ(),$async$OA)
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
case 16:case 12:$.cgA=!0
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$OA,v)},
WK(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l
var $async$WK=B.e(function(d,e){if(d===1){t.push(e)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$WK)
case 6:s=e
r=B.T(x.N,x.P)
for(o=$.Cl,o=new B.cd(o,B.a3(o).k("cd<1,2>")).gae(0);o.C();){n=o.d
n.toString
q=n
J.aK(r,q.a,q.b.aj())}w=7
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1",A.W.av(r,null)),$async$WK)
case 7:w=8
return B.b(s.aC("String","ngmy_civic_hati_kiapo_uongozi_v1_deleted",A.W.av($.Cm,null)),$async$WK)
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
return B.i($async$WK,v)},
a8F(d){var w=0,v=B.j(x.af),u,t=2,s=[],r,q,p,o,n,m
var $async$a8F=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(C.OA(!1),$async$a8F)
case 3:r=$.hse
w=r==null||new B.V(Date.now(),0,!1).bB(r).a>6e7?4:5
break
case 4:t=7
w=12
return B.b(C.a8D(),$async$a8F)
case 12:w=f?10:11
break
case 10:w=13
return B.b(C.WJ(),$async$a8F)
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
break}o=$.Cl.h(0,p)
n=o==null?null:o.hT()
if(n==null){u=null
w=1
break}u=C.bFC(n)
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a8F,v)},
cgC(d){var w=0,v=B.j(x.y),u,t
var $async$cgC=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.OA(!1),$async$cgC)
case 3:t=A.a.i(d).toLowerCase()
u=$.Cm.am(0,t)&&$.Cl.h(0,t)==null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cgC,v)},
a8E(d){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h
var $async$a8E=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:i=A.a.i(d).toLowerCase()
if(i.length===0){u=!1
w=1
break}w=3
return B.b(C.OA(!1),$async$a8E)
case 3:o=$.Cl.W(0,i)
n=$.Cm
m=new B.V(Date.now(),0,!1).aa().ag()
l=o==null?null:o.a
if(l==null)l=""
k=x.N
n.n(0,i,B.J(["at",m,"id",l],k,k))
$.cgA=!0
w=4
return B.b(C.WK(),$async$a8E)
case 4:w=5
return B.b(C.a8D(),$async$a8E)
case 5:if(!f){u=!1
w=1
break}t=7
r=B.T(k,x.P)
for(n=$.Cl,n=new B.cd(n,B.a3(n).k("cd<1,2>")).gae(0);n.C();){m=n.d
m.toString
q=m
J.aK(r,q.a,q.b.aj())}w=10
return B.b(B.n4("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Cm,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],k,x.z),null),$async$a8E)
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
return B.i($async$a8E,v)},
OB(a3){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$OB=B.e(function(a4,a5){if(a4===1){s.push(a5)
w=t}for(;;)switch(w){case 0:d=a3.x
a0=A.a.i(A.a.i(d==null?"":d)).toLowerCase()
if(a0.length===0){u=!1
w=1
break}t=4
w=9
return B.b(C.a8D(),$async$OB)
case 9:w=a5?7:8
break
case 7:w=10
return B.b(C.WJ(),$async$OB)
case 10:case 8:t=2
w=6
break
case 4:t=3
a1=s.pop()
w=6
break
case 3:w=2
break
case 6:n=$.Cm.h(0,a0)
if(n!=null){d=J.a8(n)
m=d.h(n,"id")
d=(m==null?"":m).length!==0&&d.h(n,"id")===a3.a}else d=!1
if(d){$.am.$1("[kiapo] not saved: this paper was deleted by the admin")
u=!1
w=1
break}a3.w="hati_kiapo_uongozi"
a3.f=new B.V(Date.now(),0,!1)
l=a3.hT()
for(d=l.r,m=d.length,k=0;k<d.length;d.length===m||(0,B.I)(d),++k)for(j=d[k].z,i=j.length,h=0;h<i;++h){g=j[h]
f=g.at
e=A.a.i(f==null?"":f)
f=g.db
if((f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))&&A.a.a_(e,"data:"))g.at=null}$.Cl.n(0,a0,l)
C.haW()
$.cgA=!0
w=11
return B.b(C.WK(),$async$OB)
case 11:w=12
return B.b(C.a8D(),$async$OB)
case 12:if(!a5){u=!1
w=1
break}t=14
d=x.N
r=B.T(d,x.P)
for(m=$.Cl,m=new B.cd(m,B.a3(m).k("cd<1,2>")).gae(0);m.C();){j=m.d
j.toString
q=j
J.aK(r,q.a,q.b.aj())}w=17
return B.b(B.n4("civic_hati_kiapo_uongozi",B.J(["byState",r,"deletedByState",$.Cm,"updatedAt",new B.V(Date.now(),0,!1).aa().ag()],d,x.z),null),$async$OB)
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
return B.i($async$OB,v)},
arU(d){var w=0,v=B.j(x.T),u,t,s
var $async$arU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(new B.i1().a73(A.eQ),$async$arU)
case 3:s=f
if(s==null){u=null
w=1
break}w=4
return B.b(s.fq(),$async$arU)
case 4:t=f
if(t.length===0){u=null
w=1
break}w=5
return B.b(C.b2a(t,d),$async$arU)
case 5:u=f
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$arU,v)},
b2a(d,e){return C.hYs(d,e)},
hYs(d,e){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k
var $async$b2a=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.c8(),$async$b2a)
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
p=n.iD("media")
w=8
return B.b(p.xM(q,new Uint8Array(B.cc(d)),D.bNg),$async$b2a)
case 8:n=p.Dm(q)
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
return B.i($async$b2a,v)},
Lz(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.em(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,h,i,"",j,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cn,D.d3,l,m,n)},
fua(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.em(A.bd,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f7,j,k,l)},
hff(d,e,f,g,h,i,j,k){var w=C.cC(),v=A.i.D(i*0.0017,0.02,0.06)
return C.em(h,!1,j,A.aH,"marriage_field_"+d+":"+A.i.ad(g,3),4280640491,i,A.cJ,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cn,D.d3,g,e,f)},
ftJ(d,e,f,g){return C.fua(0,0.002,D.fP,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hfg(d,e,f,g,h,i,j,k){var w=C.cC()
return C.em(A.rg,!1,j,A.aH,"marriage_field_"+d+":"+A.i.ad(g,3),4280640491,i,A.bq,A.a8,"",h,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cn,D.d3,g,e,f)},
hAu(d){var w="marriage_field_",v=d.db
if(!A.a.a_(v,w))return null
return A.d.gH(A.a.ek(v,w,"").split(":"))},
bFC(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="hati_kiapo_uongozi",a5="__kiapo_video___"
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
l=C.hAu(m)
if(l!=null&&A.a.i(m.r).length!==0)r.n(0,l,m.r)
k=m.at
j=A.a.i(k==null?"":k)
i=m.db
if((i==="__kiapo_video__"||A.a.a_(i,a5))&&j.length!==0)q=k
if(m.b===D.lw&&A.a.a_(i,"marriage_sign_placed_rais"))p=m.hT()}h=C.hi4(u)
t=a6.b
o=h.c
i=h.d
if(v)w=u
v=a6.y
g=a6.z
f=a6.Q
e=a6.as
d=a6.at
a0=C.Cq(f,a3,a3,a3,i,5,!1,a4,a3,a3,a3,a3,a6.a,a6.ax,!1,w,t,d,e,h.r,o,v,g,a6.f)
a1=A.d.gH(a0.r)
for(w=a1.z,v=w.length,t=q!=null,n=0;n<w.length;w.length===v||(0,B.I)(w),++n){m=w[n]
l=C.hAu(m)
if(l!=null&&r.am(0,l)){o=r.h(0,l)
o.toString
m.r=o}o=m.db
if((o==="__kiapo_video__"||A.a.a_(o,a5))&&t)m.at=q}if(p!=null){a2={}
a2.a=null
for(w=a1.z,v=w.length,n=0;n<v;++n){m=w[n]
t=m.db
if(A.a.a_(t,"marriage_sign_")&&!A.a.a_(t,"marriage_sign_placed_")&&m.b!==D.lw&&A.a.c7(t,"rais")){a2.a=m
break}}w=a2.a
if(w!=null){p.c=w.c
p.d=w.d
p.e=w.e
p.f=w.f
A.d.bq(a1.z,new C.fQe(a2))}else A.d.bq(a1.z,new C.fQf())
A.d.I(a1.z,p)}w=a0.ax
if(A.a.i(w==null?"":w).length===0&&C.fSf(a0))a0.ax=a6.f.aa().ag()
return a0},
hi4(d){var w,v,u="Hati ya Kiapo cha Uongozi",t=null,s=4279310375,r=4280640491,q=4280172719,p=4279378237,o=4290283019,n=4293056712,m=C.fT2(D.a8R),l=C.cC(),k=x.u,j=B.a([C.em(A.bd,!1,s,A.aH,"marriage_locked_bg",r,24,A.bq,A.a8,"",1,C.cC(),m,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cn,D.kj,1,0,0)],k),i=B.a([],k)
i.push(C.Lz("NGMY",A.K,236069181,52,A.bq,A.u,0.08,"watermark",0.45,-0.08,0.02))
i.push(C.Lz("TAREHE:",A.bd,o,16,A.bq,A.H,A.i.D(0.0272,0.02,0.06),"tarehe_lbl",0.1,0.7,0.026))
i.push(C.hff("tarehe",0.8059999999999999,0.026,0.18,A.bd,16,p,C.hAv()))
i.push(C.ftJ(0.8099999999999999,0.026+A.i.D(0.0272,0.02,0.06)*0.8,0.12,o))
i.push(C.Lz("HATI YA KIAPO CHA UONGOZI",A.K,p,26,A.bq,A.u,0.048,"title",0.83,0.085,0.055))
i.push(C.Lz("Kiapo cha Rais \xb7 Presidential Oath of Leadership",A.K,o,11,A.cJ,A.a8,0.024,"subtitle",0.83,0.085,0.1))
i.push(C.fua(0,0.002,D.fP,o,1.6,"title_rule",0.5312,0.2344,0.128))
i.push(C.hfg("body_p1",0.085,0.145,0.83,0.105,12,p,"Mimi [Jina Kamili la Rais], nikiwa Rais wa jamii yetu ya Kikongo, ninasimama mbele ya wanajamii wote kuapa kwamba nitawaongoza kwa haki, amani, na heshima kubwa, huku nikihakikisha tunashirikiana kwa pamoja kujenga jamii yetu na kuchangia maendeleo kwa njia bora na ya kistaarabu."))
i.push(C.hfg("body_p2",0.085,0.255,0.83,0.092,12,p,"Ninajwika jukumu kamili la kusimamia rasilimali na fedha za wananchi kwa uaminifu mkubwa. Endapo itatokea kiasi chochote cha fedha cha mwanachama yeyote hakikurekodiwa vizuri, au fedha ya jumuiya ikipotea bila maelezo, nitawajibika kulipa mara tatu (triple) ya kiasi kilichopotea."))
i.push(C.hfg("body_p3",0.085,0.352,0.83,0.095,12,p,"Kama nikishindwa kulipa au nikakataa kufanya hivyo, wanajamii wote wanaruhusiwa na wako huru kuchukua hatua za kisheria kwenda kuripoti kwa maofisa wa serikali (state officers) au polisi, au kumfungulia mashitaka mahakamani, na niko tayari kukabiliwa na sheria hizo bila pingamizi."))
i.push(C.fua(268435456,0.175,D.bf,o,1.6,"video_frame",0.83,0.085,0.46))
i.push(C.Lz("VIDEO YA KIAPO",A.bd,o,10,A.bq,A.H,0.02,"video_lbl",0.7899999999999999,0.10500000000000001,0.468))
i.push(C.em(A.bd,!1,s,A.aH,"__kiapo_video__",r,24,A.bq,A.a8,"",0.131,C.cC(),t,"","",0,!1,"",0,D.bf,q,2,"",0,0,"",D.cn,D.kj,0.77,0.115,0.492))
i.push(C.Lz("Rais Anayeapa:",A.bd,p,15,A.bq,A.u,0.028,"rais_hdr",0.83,0.085,0.655))
i.push(C.Lz("Jina:",A.bd,p,13,A.bq,A.O,0.026,"jina_lbl",0.1,0.085,0.6930000000000001))
i.push(C.hff("rais_jina",0.195,0.6930000000000001,0.62,A.bd,13,p,""))
i.push(C.ftJ(0.195,0.7130000000000001,0.62,n))
i.push(C.Lz("Sahihi:",A.bd,p,13,A.bq,A.O,0.026,"sahihi_lbl",0.12,0.085,0.74))
i.push(C.em(A.bd,!1,s,A.aH,"marriage_sign_rais",0,24,A.bq,A.a8,"",0.07,C.cC(),t,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cn,D.f7,0.38,0.21500000000000002,0.73))
i.push(C.ftJ(0.21500000000000002,0.795,0.38,n))
i.push(C.Lz("Tarehe:",A.bd,p,13,A.bq,A.O,0.026,"tarehe2_lbl",0.12,0.625,0.74))
i.push(C.hff("rais_tarehe",0.745,0.74,0.2,A.bd,12,p,C.hAv()))
i.push(C.ftJ(0.745,0.76,0.2,n))
w=A.a.i(d)
if(w.length!==0)A.d.u(i,B.a([C.fua(0,0.032,D.bf,o,1,"state_box",0.72,0.14,0.875),C.Lz("EMO 'YA M'MBONDO "+w,A.K,p,14,A.bq,A.O,0.026000000000000002,"state_text",0.72,0.14,0.878)],k))
A.d.u(j,i)
v=C.t3(4294967035,t,0,0,j,l,D.r5,"","",u,D.dr)
return C.Cq(t,t,t,t,D.oZ,5,!1,"hati_kiapo_uongozi",t,t,t,t,C.cC(),t,!1,w,u,t,t,B.a([v],x.g),"hati_kiapo_elegant_navy",t,!1,t)},
a3k(d,e,f,g,h,i,j){var w=0,v=B.j(x.H),u,t,s,r,q,p,o
var $async$a3k=B.e(function(k,l){if(k===1)return B.f(l,v)
for(;;)switch(w){case 0:p=A.a.i(j)
if(p.length===0){if(f.e!=null)f.L(x.q).f.T(D.fmq)
w=1
break}w=3
return B.b(C.OA(!0),$async$a3k)
case 3:w=4
return B.b(C.a8F(p),$async$a3k)
case 4:t=l
if(f.e==null){w=1
break}if(e)s=d||t==null||C.hG6(t)
else s=!1
w=t!=null?5:6
break
case 5:w=s?7:8
break
case 7:w=9
return B.b(B.bT(D.boc,null,new C.fL3(p),f,!0,!0,!1,A.lX,!1,!1,x.N),$async$a3k)
case 9:r=l
if(r==="continue"){i.$1(t)
w=1
break}if(r!=="new"){w=1
break}if(f.e==null){w=1
break}w=10
return B.b(B.cg(null,null,!0,null,new C.fL4(),f,null,!0,!0,x.y),$async$a3k)
case 10:if(l!==!0||f.e==null){w=1
break}h.$1(C.hi4(p))
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
return B.b(C.cgC(p),$async$a3k)
case 13:case 12:if(l){if(f.e!=null)f.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d("Hati ya Kiapo cha Uongozi ya "+p+" imefutwa na Admin. Admin pekee anaweza kuunda mpya.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break}if(!s){if(f.e!=null){q=f.L(x.q).f
q.T(B.b2(null,null,null,null,null,A.t,null,B.d("Registrar wa "+p+" bado hajachapisha Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}w=1
break}if(f.e==null){w=1
break}h.$1(C.hi4(p))
case 1:return B.h(u,v)}})
return B.i($async$a3k,v)},
fuJ:function fuJ(){},
cgy:function cgy(){},
cgz:function cgz(){},
cgB:function cgB(d){this.a=d},
fQe:function fQe(d){this.a=d},
fQf:function fQf(){},
fL3:function fL3(d){this.a=d},
fL1:function fL1(d){this.a=d},
fL2:function fL2(d){this.a=d},
fL4:function fL4(){},
fL_:function fL_(d){this.a=d},
fL0:function fL0(d){this.a=d},
asq:function asq(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGd:function aGd(){var _=this
_.d=null
_.r=_.f=_.e=!1
_.c=_.a=null},
en7:function en7(d){this.a=d},
en5:function en5(d){this.a=d},
en6:function en6(d){this.a=d},
en8:function en8(d){this.a=d},
en9:function en9(d){this.a=d},
mF(d,e,f,g,h,i,j,k,l,m,n){var w=C.cC()
return C.em(e,!1,f,A.aH,k.length===0?"marriage_locked":"marriage_locked_"+k,4280640491,g,A.bq,h,"",i,w,null,"","",0,!1,"",j,D.bf,4280172719,2,d,0,0,"",D.cn,D.d3,l,m,n)},
hA6(d,e,f){var w=4291404327
return B.a([C.mg(0,f,D.eX,w,2,"ring_l",f,d-f*0.42,e),C.mg(0,f,D.eX,w,2,"ring_r",f,d+f*0.06,e)],x.u)},
ft0(d,e,f,g,h){var w,v,u="ps_"+g,t=C.mg(4294967288,f,D.eX,4291404327,1.3,u+"_ring",f,d,e),s=f*0.36
s=C.mg(h,s,D.eX,h,0,u+"_head",s,d+f*0.32,e+f*0.16)
w=g?0.12:0.18
v=g?0.76:0.64
return B.a([t,s,C.mg(h,f*0.46,D.eX,h,0,u+"_body",f*v,d+f*w,e+f*0.5)],x.u)},
mg(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.em(A.bd,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f7,j,k,l)},
hA3(d){return C.em(A.bd,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bq,A.a8,"",1,C.cC(),d,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cn,D.kj,1,0,0)},
aQo(d,e,f,g,h,i,j,k,l){var w=C.cC(),v=A.i.D(j*0.0017,0.02,0.06),u="marriage_field_"+d+":"
return C.em(h,!1,k,A.aH,i?u+A.i.ad(g,3)+":"+A.o.ad(j,1):u+A.i.ad(g,3),4280640491,j,A.cJ,A.O,"",v,w,null,"","",0,!1,"",0,D.bf,4280172719,2,l,0,0,"",D.cn,D.d3,g,e,f)},
ah3(d,e,f,g){return C.mg(0,0.002,D.fP,g,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.002)},
hA5(d,e,f,g,h,i,j,k){var w=C.cC()
return C.em(A.bd,!1,j,A.aH,"marriage_field_"+d+":"+A.i.ad(g,3),4280640491,i,A.bq,A.cD,"",h,w,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cn,D.d3,g,e,f)},
hA2(d,e,f,g,h){var w=A.i.D(d.length*30*0.00058+0.08,0.2,0.5),v=f+(g-w)/2
return B.a([C.mg(0,0.036,D.bf,h,1.4,"banner_box_"+d,w,v,e),C.mF(d,A.K,h,30,A.u,0.025199999999999997,0,"banner_t_"+d,w,v,e+0.00612)],x.u)},
his(){var w=new B.V(Date.now(),0,!1),v=new C.fRl()
return B.w(v.$1(B.bX(w)))+"/"+B.w(v.$1(B.bL(w)))+"/"+B.bC(w)},
hA4(d,e,f,g,h,a0,a1){var w,v,u,t,s,r=4279673674,q=f+0.042,p=d===1,o=p?0.328:0,n=f+h-q,m=A.i.D(n-o,0.22,1),l=p?A.i.D(0.037399999999999996,0.02,0.06):A.i.D(0.0272,0.02,0.06),k=""+d,j=g+0.002,i=C.aQo("mahari_"+k,q,j,m,A.bd,!1,16,a1,e)
if(p)i.f=l
w=x.u
v=B.a([C.mF(k+".",A.bd,a0,13,A.H,0.022,0,"nim_n_"+k,0.032,f,g+0.004),i,C.mg(0,0.002,D.fP,4293056712,0.8,"nim_ul_"+k,n,q,j+l+0.002)],w)
if(p){u=q+m+0.008
t=u+0.268+0.004
s=j+(l-0.025875)/2
A.d.u(v,B.a([C.mF("AKUNA DENI",A.e4,r,22,A.u,l,0,"nim_akuna_deni",0.268,u,j),C.mg(0,0.025875,D.bf,r,2,"nim_akuna_box",0.046,t,s),C.mF("\u2713",A.K,r,18,A.u,0.029875,0,"nim_akuna_tick",0.046,t,s-0.002),C.mg(0,l,D.bf,0,0,"nim_akuna_hit",t+0.046-u,u,j)],w))}return v},
hf1(d,e,f,g,h,i,j){var w=4293056712,v=h*0.56,u=f+v+0.01,t=u+0.08,s=f+h-t,r=""+e,q=f+0.026,p=v-0.026
return B.a([C.mF(r+".",A.bd,i,13,A.H,0.024,0,"wln_"+d+"_"+r,0.026,f,g),C.aQo("witness_"+d+"_"+r+"_name",q,g,p,A.bd,!0,16,j,"[Jina la Shahidi]"),C.ah3(q,g+A.i.D(0.0272,0.02,0.06),p,w),C.mF("Sahihi:",A.bd,j,15,A.a8,0.028,0,"wls_"+d+"_"+r,0.077,u,g),C.em(A.bd,!1,4279310375,A.aH,"marriage_sign_"+d+"_witness_"+r,0,24,A.bq,A.a8,"",0.05,C.cC(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cn,D.f7,s,t,g-0.004),C.ah3(t,g+0.044,s,w)],x.u)},
air(d,e){var w,v,u,t=x.cd,s=e!=null?B.a([e],t):B.a([D.cxN,D.dw3,D.cxq,D.dnM,D.dpO],t)
for(t=s.length,w=0;w<s.length;s.length===t||(0,B.I)(s),++w)for(v=A.d.gae(s[w]);v.C();){u=v.gP(0)
if(u.a===d)return u}return null},
heq(d,e,f,g,h,i,j,k,l,m,n,o,p,q){var w=d.d,v=C.fT2(w),u=C.hCf(w)
if(u!=null){w=B.a([C.hA3(v)],x.u)
A.d.u(w,C.icp(d,u,e,f,g,h,i,j,k,l,m,n,q))
return w}w=B.a([C.hA3(v)],x.u)
A.d.u(w,C.icr(d,e,f,g,h,i,j,k,l,m,n,o,p,q))
return w},
icr(a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=4286200650,h=4291404327,g=4293056712,f=a1.f,e=a1.r,d=x.u,a0=B.a([],d)
a0.push(C.mF("NGMY",A.K,f&16777215|251658240,60,A.u,0.09,-0.52,"watermark",0.5,-0.11,0.025))
w=a1.z
switch(w.a){case 1:case 3:A.d.u(a0,C.hA6(0.42,0.016,0.048))
v=0.066
break
case 7:A.d.u(a0,C.hA6(0.38,0.012,0.072))
v=0.082
break
case 2:case 6:case 10:A.d.u(a0,C.ft0(0.16,0.018,0.052,!1,f))
A.d.u(a0,C.ft0(0.79,0.018,0.052,!0,i))
v=0.072
break
case 5:a0.push(C.mF("\ud83c\udf33",A.K,4279898632,22,A.a8,0.04,0,"tree",0.16,0.42,0.014))
v=0.056
break
case 8:A.d.u(a0,B.a([C.mg(0,0.062,D.eX,h,1.6,"crest_o",0.11,0.445,0.012),C.mg(0,0.046,D.eX,h,1,"crest_i",0.084,0.458,0.02),C.mF("MUHURI",A.K,f,9,A.u,0.028,0,"crest_t",0.11,0.445,0.028)],d))
v=0.078
break
case 4:case 9:A.d.u(a0,B.a([C.mg(0,0.002,D.fP,h,1,"orn_l_0.018",0.24,0.2,0.024),C.mg(f,0.016,D.lx,h,0.9,"orn_c_0.018",0.024,0.488,0.018),C.mg(0,0.002,D.fP,h,1,"orn_r_0.018",0.24,0.518,0.024)],d))
v=0.04
break
case 0:case 11:v=b3
break
default:v=b3}A.d.u(a0,B.a([C.mF("TAREHE:",A.bd,e,20,A.H,A.i.D(0.033999999999999996,0.02,0.06),0,"tarehe_lbl",0.1,0.7,0.026),C.aQo("tarehe",0.8059999999999999,0.026,0.14400000000000002,A.bd,!1,21,f,C.his()),C.ah3(0.814,0.026+A.i.D(0.035699999999999996,0.02,0.06)*0.8,0.12,e)],d))
a0.push(C.mF(b0,A.K,f,b1,A.u,0.06,0,"title",0.82,0.09,v))
u=v+0.054
a0.push(C.mg(e,0.0026,D.bf,e,0,"title_rule_1",0.82*b2,0.09+0.82*(1-b2)/2,u))
t=u+0.028
a0.push(C.mg(a1.e,0.138,D.bf,e,1.15,"intro_frame",0.832,0.08399999999999999,t-0.004))
a0.push(C.hA5("utangulizi",0.09,t,0.82,0.128,19,f,a3))
t+=a2
if(a6){s=A.i.D(a5.length*30*0.00058+0.08,0.2,0.5)
r=0.09+(0.82-s)/2
q=C.mg(0,0.036,D.bf,e,1.4,"banner_box_nimetowe_label",s,r,t)
p=C.cC()
A.d.u(a0,B.a([q,C.em(A.K,!1,e,A.aH,"marriage_field_nimetowe_label:"+A.i.ad(s,3),4280640491,30,A.bq,A.u,"",0.025199999999999997,p,null,"","",0,!1,"",0,D.bf,4280172719,2,a5,0,0,"",D.cn,D.d3,s,r,t+0.00612)],d))}else A.d.u(a0,C.hA2(a5,t,0.09,0.82,e))
t+=0.048
a0.push(C.mF(a7,A.bd,f,a8,A.O,0.03,0,"nimetowe_sub",0.82,0.09,t))
t+=0.03
for(o=1;o<=4;++o){A.d.u(a0,C.hA4(o,a4[o-1],0.09,t,0.82,e,f))
t+=0.04}t+=0.006
A.d.u(a0,C.hA2("MASHAHIDI",t,0.09,0.82,e))
t+=0.046
if(w===D.a8I||w===D.a8K||w===D.a8H||w===D.a8J){w=t-0.008
A.d.u(a0,C.ft0(0.21,w,0.044,!0,i))
A.d.u(a0,C.ft0(0.7459999999999999,w,0.044,!1,f))
t+=0.012}n=0.05+b4*0.056+0.011
w=t+0.05
q=t+0.012
A.d.u(a0,B.a([C.mg(0,n,D.bf,e,1.3,"wit_table_border",0.82,0.09,t),C.mg(e,n,D.bf,e,0,"wit_table_divider",0.0024,0.4988,t),C.mg(0,0.0022,D.fP,e,1.1,"wit_table_hdrline",0.82,0.09,w),C.mF("UPANDE WA MKE",A.K,e,20,A.u,0.03,0,"wit_h_mke_t",0.41,0.09,q),C.mF("UPANDE WA MUME",A.K,e,20,A.u,0.03,0,"wit_h_mume_t",0.41,0.5,q)],d))
m=w+0.01
for(l=1;l<=b4;++l){A.d.u(a0,C.hf1("mke",l,0.106,m,0.378,e,f))
A.d.u(a0,C.hf1("mume",l,0.516,m,0.378,e,f))
m+=0.056}t=t+n+0.012
w=t+0.056
q=t+0.09
p=q-0.002
A.d.u(a0,B.a([C.mg(0,0.11,D.bf,e,1.2,"mw_box",0.82,0.09,t),C.mF("MWANDISHI",A.bd,e,15,A.H,0.026,0,"mw_hdr",0.7759999999999999,0.11199999999999999,t+0.016),C.mF("Jina:",A.bd,f,15,A.a8,0.028,0,"mw_jl",0.09,0.11199999999999999,w),C.aQo("mwandishi_jina",0.215,w,0.3116,A.bd,!0,15,f,""),C.ah3(0.215,p,0.3116,g),C.mF("Sahihi:",A.bd,f,15,A.a8,0.028,0,"mw_sl",0.09,0.5,w),C.em(A.bd,!1,4279310375,A.aH,"marriage_sign_mwandishi",0,24,A.bq,A.a8,"",0.044,C.cC(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cn,D.f7,0.3161999999999999,0.5738,q-0.044),C.ah3(0.5738,p,0.3161999999999999,g)],d))
k=A.a.i(a9)
if(k.length!==0){j=t+0.11+0.006
A.d.u(a0,B.a([C.mg(0,0.032,D.bf,e,1,"state_box",0.7,0.15,j),C.mF("EMO 'YA M'MBONDO "+k,A.K,f,26,A.O,0.026000000000000002,0,"state_text",0.7,0.15,j+0.003)],d))}return a0},
hCf(d){switch(d.a){case 25:return D.hHB
case 31:return D.hHC
case 26:return D.hHy
case 27:return D.hHx
case 28:return D.hHA
case 29:return D.hHw
case 30:return D.hHz
default:return null}},
hf0(d,e,f,g,h,i){return C.em(A.bd,!1,4279310375,A.aH,"marriage_locked_"+i+"_fill",4280640491,24,A.bq,A.a8,"",h,C.cC(),d,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cn,D.kj,g,e,f)},
hgr(d,e,f,g,h,i){var w=d.as
if(w!=null)return B.a([C.mg(w,h,D.bf,w,0,i,g,e,f)],x.u)
return B.a([C.hf0(C.iqQ(),e,f,g,h,i)],x.u)},
icp(c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2=null,b3="marriage_locked",b4=4279310375,b5=4280640491,b6=4280172719,b7="marriage_locked_",b8=c5.e,b9=x.u,c0=B.a([],b9),c1=c5.a,c2=d5*1.15,c3=c5.r
if(c1){w=c5.b
c0.push(C.hf0(C.iqO(c5.Q,w),0.03,0.022,0.94,0.096,"royal_band"))
c0.push(C.mF(d4,A.K,c3,c2,A.u,0.052,0,"title",0.88,0.06,0.039))
for(v=-2;v<=2;++v){c2=C.hGV(w)
c3=Date.now()
u=$.iV
$.iV=u+1
c0.push(new C.eO(""+1000*c3+"_"+u,D.kj,0.5+v*0.05-0.011,0.139,0.022,0.0124,"",24,A.a8,A.bq,A.aH,b4,A.bd,c2,D.bf,b5,b6,2,0,!1,b7+("royal_dot_"+v)+"_fill",0,D.cn,0,"","","","","",!1,0))}t=0.1
s=0.158}else{c0.push(C.mF(d4,A.K,c3,c2,A.u,0.054,0,"title",0.88,0.06,0.074))
t=0.129
s=0.168}c2=c5.c
c3=c5.b
w=t+0.002
A.d.u(c0,B.a([C.mg(c2,0.032,D.bf,c3,1.4,"tarehe_box",0.31,0.345,t),C.mF("TAREHE:",A.bd,b8,19,A.H,A.i.D(0.032299999999999995,0.02,0.06),0,"tarehe_lbl",0.115,0.367,w),C.aQo("tarehe",0.485,w,0.16,A.bd,!1,20,b8,C.his())],b9))
r=0.132+(c6-0.165)*1.45
c0.push(C.mg(c2,r,D.bf,c1?c5.Q:c3,1.3,"intro_frame",0.832,0.08399999999999999,s))
if(c1)for(c1=[A.xp,AH.pU,AG.l8,AI.vI],w=c1.length,q=0;q<w;++q){u=c1[q]
p=u.a
o=u.b
u=C.hGV(c3)
n=Date.now()
m=$.iV
$.iV=m+1
c0.push(new C.eO(""+1000*n+"_"+m,D.kj,0.08399999999999999+p*0.832-0.011,s+o*r-0.0062,0.022,0.0124,"",24,A.a8,A.bq,A.aH,b4,A.bd,u,D.bf,b5,b6,2,0,!1,b7+("intro_dia_"+B.w(p)+"_"+B.w(o))+"_fill",0,D.cn,0,"","","","","",!1,0))}c0.push(C.hA5("utangulizi",0.09999999999999999,s+0.01,0.7999999999999999,r-0.02,19,b8,c7))
l=s+r+0.014
k=new C.fuR(c0,c5)
k.$4("nimetowe_label",c9,d0,l)
l+=0.044
c0.push(C.mF(d1,A.bd,b8,d2,A.O,0.03,0,"nimetowe_sub",0.82,0.09,l))
l+=0.032
for(c1=c5.y,w=c5.x,u=c5.as,n=u!=null,m=c5.f,j=c5.d,v=1;v<=4;++v){if((v&1)===1){i="nim_stripe_"+v
h=Date.now()
g=$.iV
$.iV=g+1
i=i.length===0?b3:b7+i
c0.push(new C.eO(""+1000*h+"_"+g,D.f7,0.09,l-0.003,0.82,0.040999999999999995,"",24,A.a8,A.bq,A.aH,b4,A.bd,b2,D.bf,j,j,0,0,!1,i,0,D.cn,0,"","","","","",!1,0))}f=C.hA4(v,c8[v-1],0.106,l,0.8039999999999999,m,b8)
i=v===1?A.i.D(0.037399999999999996,0.02,0.06):A.i.D(0.0272,0.02,0.06)
e=l+0.002+i/2
d=e-0.012374999999999999
i=""+v
h="nim_badge_"+i
if(n){g=Date.now()
a0=$.iV
$.iV=a0+1
h=h.length===0?b3:b7+h
c0.push(new C.eO(""+1000*g+"_"+a0,D.f7,0.096,d,0.044,0.024749999999999998,"",24,A.a8,A.bq,A.aH,b4,A.bd,b2,D.eX,u,u,0,0,!1,h,0,D.cn,0,"","","","","",!1,0))}else{g=C.iqP()
a0=Date.now()
a1=$.iV
$.iV=a1+1
c0.push(new C.eO(""+1000*a0+"_"+a1,D.kj,0.096,d,0.044,0.024749999999999998,"",24,A.a8,A.bq,A.aH,b4,A.bd,g,D.bf,b5,b6,2,0,!1,b7+h+"_fill",0,D.cn,0,"","","","","",!1,0))}for(h=f.length,g="marriage_locked_nim_ul_"+i,a0="marriage_locked_nim_n_"+i,a1=e-0.0115,q=0;q<h;++q){a2=f[q]
a3=a2.db
if(a3===a0){a2.r=i
a2.c=0.096
a2.e=0.044
a2.d=a1
a2.f=0.023
a2.w=15
a2.x=A.u
a2.as=A.K
a2.Q=w}else if(a3===g)a2.ch=c1}A.d.u(c0,f)
l+=0.043}l+=0.008
k.$4("mashahidi","MASHAHIDI",!1,l)
l+=0.048
a4=0.048+d6*0.05+0.004
for(w=[D.f8k,D.f5N],u=w.length,a5=l+0.036+0.012,n=l+0.00612,j=c5.w,q=0;q<u;++q){i=w[q]
a6=i.a
a7=i.c
h="wit_card_"+a6
g=Date.now()
a0=$.iV
$.iV=a0+1
h=h.length===0?b3:b7+h
c0.push(new C.eO(""+1000*g+"_"+a0,D.f7,a7,l,0.39799999999999996,a4,"",24,A.a8,A.bq,A.aH,b4,A.bd,b2,D.bf,c2,c3,1.2,0,!1,h,0,D.cn,0,"","","","","",!1,0))
h="wit_h_"+a6
A.d.u(c0,C.hgr(c5,a7,l,0.39799999999999996,0.036,h))
h+="_t"
a0=Date.now()
g=$.iV
$.iV=g+1
h=h.length===0?b3:b7+h
c0.push(new C.eO(""+1000*a0+"_"+g,D.d3,a7,n,0.39799999999999996,0.025199999999999997,i.b,20,A.u,A.bq,A.aH,j,A.K,b2,D.bf,b5,b6,2,0,!1,h,0,D.cn,0,"","","","","",!1,0))
for(i=a7+0.014,a8=a5,a9=1;a9<=d6;++a9){A.d.u(c0,C.hf1(a6,a9,i,a8,0.36999999999999994,m,b8))
a8+=0.05}}l+=a4+0.014
w=l+0.036
u=l+0.0615
A.d.u(c0,B.a([C.mg(c2,0.072,D.bf,c3,1.2,"mw_box",0.6232,0.09,l),C.mF("MWANDISHI",A.bd,m,16,A.H,0.024,0,"mw_hdr",0.5791999999999999,0.11199999999999999,l+0.008),C.mF("Jina:",A.bd,b8,15,A.a8,0.026,0,"mw_jl",0.07,0.11199999999999999,w),C.aQo("mwandishi_jina",0.185,w,0.24928,A.bd,!0,15,b8,""),C.ah3(0.185,u,0.24928,c1),C.mF("Sahihi:",A.bd,b8,15,A.a8,0.026,0,"mw_sl",0.085,0.43276000000000003,w),C.em(A.bd,!1,b4,A.aH,"marriage_sign_mwandishi",0,24,A.bq,A.a8,"",0.04,C.cC(),b2,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cn,D.f7,0.17643999999999993,0.52076,w-0.012),C.ah3(0.52076,u,0.17643999999999993,c1)],b9))
b0=l+0.072+0.012
A.d.u(c0,C.hgr(c5,0.09,b0,0.82,0.034,"state_bar"))
b1=A.a.i(d3)
if(b1.length!==0)A.d.u(c0,B.a([C.mg(0,0.034,D.bf,0,0,"state_box",0.82,0.09,b0),C.mF("EMO 'YA M'MBONDO "+b1,A.K,j,24,A.H,0.026,0,"state_text",0.82,0.09,b0+0.005)],b9))
c0.push(C.hf0(C.iqS(c5.z,c5.at,c5.ax),0.7459999999999999,l-0.006,0.16,0.105,"royal_seal"))
for(b9=c0.length,q=0;q<b9;++q){a2=c0[q]
if(A.a.a_(a2.db,"marriage_locked_ul_"))a2.ch=c1}return c0},
ioj(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=d.d
if(C.hCf(i)!=null)return B.jg(new B.dx(A.c_,A.aZ,A.f,new B.a5(270,480,new B.dt(!0,new C.Fw($.igt.c1(0,d.a,new C.fRh(d)),!1,!1,j),j),j),j),A.t,j)
w=B.b1(d.f)
v=B.b1(d.r)
u=C.hiN(i)
t=new C.fRg(w)
s=new C.fRi(w)
i=d.z
r=i===D.a8I||i===D.a8K||i===D.a8H||i===D.a8J
q=i===D.aLo||i===D.a8L||i===D.aLp
p=B.bR(0,B.fX(u,A.z,j,j,A.cl,A.c_,!0,j,!1,j,j),0,0,0)
o=x.p
n=B.a([],o)
if(q){m=i===D.a8L?26:16
n.push(new C.fRk().$1$size(m))}if(i===D.aLq)n.push(D.h3R)
if(r)n.push(B.A(B.a([s.$1$female(!1),s.$1$female(!0)],o),A.l,j,A.j_,A.h,0,j,j))
n.push(B.d("HATI YA KUHOWA",j,j,j,j,j,j,B.m(j,j,w,j,j,j,j,j,j,j,j,9,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j))
n.push(A.am)
i=B.K(v,A.r,1.1)
m=B.l(4)
n.push(B.p(j,B.x(B.a([t.$0(),D.aV1,t.$1$w(0.9),D.aV1,t.$1$w(0.75)],o),A.l,j,A.e,A.h,0,A.p),A.f,j,j,new B.o(D.biy,j,i,m,j,j,A.n),j,j,j,j,A.aoa,j,j,j))
n.push(A.am)
n.push(new C.fRj(v).$1("NIMETOWE"))
n.push(A.fD)
l=J.e6(3,x.l)
for(k=0;k<3;++k)l[k]=new B.D(A.Og,new B.c7(A.aM,A.e,A.h,A.l,j,A.p,j,0,B.a([B.p(j,j,A.f,j,j,new B.o(v,j,j,j,j,j,A.a6),j,7,j,j,j,j,j,7),A.df,new B.by(1,A.ba,t.$1$h(4),j)],o),j),j)
A.d.u(n,l)
n.push(A.b3)
n.push(B.d(d.b,j,j,j,j,j,j,B.m(j,j,w.j(0.85),j,j,j,j,j,j,j,j,8,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j))
return new B.an(A.a0,j,A.b1,A.t,B.a([p,new B.D(D.bEj,B.x(n,A.al,j,A.e,A.h,0,A.p),j)],o),j)},
hi5(d,e){var w,v,u,t=null,s="Hati ya Kuhowa",r=C.air(e,t)
if(r==null)r=A.d.gH(D.IA)
w=C.cC()
v=C.t3(r.e,t,0,0,C.heq(r,0.165,y.O,D.dqq,"NIMETOWA",!1,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWA",40,0.55,0.036,3),w,D.r5,"","",s,D.dr)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cq(t,t,t,t,D.oZ,5,!1,"hati_kuhowa",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhowa_"+r.a,t,!1,t)},
hFb(d,e){var w,v,u,t=null,s="Hati ya Kuhoweya",r=C.air(e,t)
if(r==null)r=A.d.gH(D.IA)
w=C.cC()
v=C.t3(r.e,t,0,0,C.heq(r,0.165,y.f,D.dlI,"NIMEPOKEYA CASH",!0,"Vitu vifuatavyo vimetolewa:",20,d,"HATI YA KUHOWESHA",40,0.55,0.036,3),w,D.r5,"","",s,D.dr)
w=C.cC()
u=A.a.i(d)
if(u.length===0)u=t
return C.Cq(t,t,t,t,D.oZ,5,!1,"hati_kuhoweya",t,t,t,t,w,t,!1,u,s,t,t,B.a([v],x.g),"hati_kuhoweya_"+r.a,t,!1,t)},
bH_(d,e,f){var w=0,v=B.j(x.T),u
var $async$bH_=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h2G(e,f),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bH_,v)},
ai1(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ai1=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fL7(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.Nr,null,new C.fL8(p),d,!0,!0,!1,A.lX,!1,!1,x.N),$async$ai1)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hT())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bH_(d,"Hati ya Kuhowa",D.IA),$async$ai1)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.kg,"Chagua jimbo"),$async$ai1)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hi5(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ai1,v)},
ai2(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$ai2=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:q=B.U(i).k("Y<1>")
p=B.C(new B.Y(i,new C.fLb(),q),q.k("M.E"))
w=!g&&p.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.Nr,null,new C.fLc(p),d,!0,!0,!1,A.lX,!1,!1,x.N),$async$ai2)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(p).hT())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bH_(d,"Hati ya Kuhoweya",D.IA),$async$ai2)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.kg,"Chagua jimbo"),$async$ai2)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}e.$1(C.hFb(r,s))
case 1:return B.h(u,v)}})
return B.i($async$ai2,v)},
ai3(d,e,f,g,h,i){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m
var $async$ai3=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:n=B.U(i).k("Y<1>")
m=B.C(new B.Y(i,new C.fLf(),n),n.k("M.E"))
w=!g&&m.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(D.Nr,null,new C.fLg(m),d,!0,!0,!1,A.lX,!1,!1,x.N),$async$ai3)
case 5:t=k
if(t==="continue"){f.$1(A.d.gH(m).hT())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.bH_(d,"Malipo ya Awamu ya Mahari",D.Su),$async$ai3)
case 6:s=k
if(s==null||d.e==null){w=1
break}w=A.a.i(h==null?"":h).length!==0?7:9
break
case 7:h.toString
r=A.a.i(h)
w=8
break
case 9:w=10
return B.b(B.HF(d,"Tafuta jimbo\u2026","",A.kg,"Chagua jimbo"),$async$ai3)
case 10:r=k
case 8:if(r==null||d.e==null){w=1
break}q=C.air(s,D.Su)
if(q==null)q=A.d.gH(D.Su)
n=C.cC()
p=C.t3(q.e,null,0,0,C.heq(q,0.21,"Mimi [Jina la Baba wa Mume], nikiwa kama baba na mkuu wa familia ya upande wa mume kutoka jamii ya [Jina la Jamii ya Mume], nyumba ya [Jina la Nyumba ya Mume], ninafanya makubaliano haya rasmi na familia ya [Jina la Baba wa Binti], wa jamii ya [Jina la Jamii ya Binti], nyumba ya [Jina la Nyumba ya Binti]. Kwa kuwa malipo kamili ya mahari ya mke wa mwanangu hayajakamilika kwa sasa, tumefikia makubaliano ya kulipa kwa awamu. Kiasi kilichosalia cha mahari kitakamilishwa kikamilifu na familia yetu ifikapo tarehe [Tarehe ya Kurudi Kulipa Mahari]. Siku hiyo, pande zote mbili zitakutana tena kwa ajili ya kukamilisha taratibu zote zilizosalia, kupokea baraka kamili za ndoa, na kukabidhiwa Cheti cha Ndoa ya Kimila. Makubaliano haya yanafanyika kwa hiari, kwa ridhaa ya familia zote mbili, na kwa kufuata misingi ya heshima, mila, desturi na maelewano mema kati ya familia zetu.",D.dg4,"MALIPO YALIYOSALIA",!1,"Mambo ya Cash na Mali (Yaliyosalia / Yatakayokamilishwa):",18,r,"HATI YA MAKUBALIANO YA MALIPO YA AWAMU YA MAHARI",24,0.85,0.048,2),n,D.r5,"","","Hati ya Makubaliano ya Malipo ya Awamu",D.dr)
n=C.cC()
o=A.a.i(r)
if(o.length===0)o=null
e.$1(C.Cq(null,null,null,null,D.oZ,5,!1,"hati_malipo_awamu",null,null,null,null,n,null,!1,o,"Hati ya Makubaliano ya Malipo ya Awamu",null,null,B.a([p],x.g),"hati_malipo_awamu_"+q.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ai3,v)},
wv:function wv(d,e){this.a=d
this.b=e},
ij:function ij(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.z=k},
fRl:function fRl(){},
Ld:function Ld(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var _=this
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
_.ax=r},
fuR:function fuR(d,e){this.a=d
this.b=e},
fRh:function fRh(d){this.a=d},
fRg:function fRg(d){this.a=d},
fRj:function fRj(d){this.a=d},
fRk:function fRk(){},
fRi:function fRi(d){this.a=d},
h2G:function h2G(d,e){this.a=d
this.b=e},
aeM:function aeM(d,e,f){this.c=d
this.d=e
this.a=f},
e9v:function e9v(d,e,f){this.a=d
this.b=e
this.c=f},
e9u:function e9u(d,e){this.a=d
this.b=e},
e9t:function e9t(d,e){this.a=d
this.b=e},
ae9:function ae9(d,e,f){this.c=d
this.d=e
this.a=f},
fL7:function fL7(){},
fL8:function fL8(d){this.a=d},
fL5:function fL5(d){this.a=d},
fL6:function fL6(d){this.a=d},
fLb:function fLb(){},
fLc:function fLc(d){this.a=d},
fL9:function fL9(d){this.a=d},
fLa:function fLa(d){this.a=d},
fLf:function fLf(){},
fLg:function fLg(d){this.a=d},
fLd:function fLd(d){this.a=d},
fLe:function fLe(d){this.a=d},
aQ3(d){return B.a53(d>>>16&255,d>>>8&255,d&255,d>>>24&255)},
fx0(d,e,f){var w=new C.fx1(d,f,e)
return(w.$1(24)<<24|w.$1(16)<<16|w.$1(8)<<8|w.$1(0))>>>0},
bEs(d,e){return $.iio.c1(0,d,new C.fEG(d,e))},
hBV(d,e){return $.i8I.c1(0,d,new C.fAg(e))},
hf_(d){var w,v,u,t,s,r,q
for(w=1;w<5;++w){v=D.a66[w]
u=v.a
t=v.b
s=D.a66[w-1]
r=s.a
q=s.b
if(d<=u)return C.fx0(q,t,A.i.D((d-r)/(u-r),0,1))}return A.d.gal(D.a66).b},
iqQ(){return C.bEs("gold_strip",new C.fVv())},
iqP(){return C.bEs("gold_coin",new C.fVu())},
iqO(d,e){return C.bEs("band_"+d+"_"+e,new C.fVs(d,e))},
hzk(d,e,f,g,h){var w=B.a([new B.fJ(e,f-g),new B.fJ(e+g,f),new B.fJ(e,f+g),new B.fJ(e-g,f)],x.J)
B.Bk(d,C.aQ3(h),w)},
iqS(d,e,f){return C.bEs("seal_"+d+"_"+B.w(e)+"_"+f,new C.fVx(e,f,d))},
aiO(d,e,f,g){return C.hBV("paper_"+g+"_"+d+"_"+f+"_"+e,new C.fVw(g,d,e,f))},
hgq(d,e,f,g,h,i,j,a0){var w,v,u,t,s,r,q,p,o=null,n=C.aQ3(j),m=e+i,l=e+g,k=l-i
B.iF(d,!0,A.cY,n,o,A.cI,a0,m,k,f,f)
w=f+h
B.iF(d,!0,A.cY,n,o,A.cI,a0,m,k,w,w)
k=f+i
m=w-i
B.iF(d,!0,A.cY,n,o,A.cI,a0,e,e,k,m)
B.iF(d,!0,A.cY,n,o,A.cI,a0,l,l,k,m)
if(i<=0)return
for(m=[new B.b3(e,f,0),new B.b3(l,f,1.5707963267948966),new B.b3(l,w,3.141592653589793),new B.b3(e,w,4.71238898038469)],l=m.length,v=0;v<l;++v){k=m[v]
u=k.a
t=k.b
s=k.c
for(r=0;r<18;){q=s+1.5707963267948966*r/18;++r
p=s+1.5707963267948966*r/18
k=A.i.V(u+i*Math.cos(q))
w=A.i.V(t+i*Math.sin(q))
B.iF(d,!0,A.cY,n,o,A.cI,a0,k,A.i.V(u+i*Math.cos(p)),w,A.i.V(t+i*Math.sin(p)))}}},
hGV(d){return C.bEs("diamond_"+d,new C.fVt(d))},
fx1:function fx1(d,e,f){this.a=d
this.b=e
this.c=f},
fEG:function fEG(d,e){this.a=d
this.b=e},
fAg:function fAg(d){this.a=d},
fVv:function fVv(){},
fVu:function fVu(){},
fVs:function fVs(d,e){this.a=d
this.b=e},
fVx:function fVx(d,e,f){this.a=d
this.b=e
this.c=f},
fVw:function fVw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fVt:function fVt(d){this.a=d},
LC(d,e,f,g,h,i,j,k,l,m){var w=C.cC()
return C.em(e,!1,f,A.aH,j.length===0?"marriage_locked":"marriage_locked_"+j,4280640491,g,A.bq,h,"",i,w,null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cn,D.d3,k,l,m)},
Dt(d,e,f,g,h,i,j,k,l){var w=C.cC()
return C.em(A.bd,!1,4279310375,A.aH,i.length===0?"marriage_locked":"marriage_locked_"+i,d,24,A.bq,A.a8,"",e,w,null,"","",0,!1,"",0,f,g,h,"",0,0,"",D.cn,D.f7,j,k,l)},
hAR(d,e,f){return C.Dt(0,0.002,D.fP,4293056712,0.8,"ul_"+B.w(d)+"_"+B.w(e),f,d,e+0.022)},
bD8(d,e,f,g,h){return B.a([C.Dt(4294967288,0.032,D.bf,4291404327,1.15,"pill_"+d,g,f,e),C.LC(d,A.K,h,11,A.u,0.024,"pill_t_"+d,g,f,e+0.005)],x.u)},
hfl(d,e,f,g,h){var w=d+f/2,v=e+0.006,u=f*0.4,t=B.w(e)
return B.a([C.Dt(0,0.002,D.fP,g,1,"orn_l_"+t,u,d,v),C.Dt(h,0.016,D.lx,g,0.9,"orn_c_"+t,0.024,w-0.012,e),C.Dt(0,0.002,D.fP,g,1,"orn_r_"+t,u,w+0.018,v)],x.u)},
a2K(d,e,f,g,h,i,j,k){var w=d.length*i*0.0027+0.006,v=C.LC(d,A.bd,j,i,A.O,0.022,"ll_"+e,w,f,g),u=f+w,t=h-w,s=C.cC()
return B.a([v,C.em(A.K,!1,j,A.aH,"marriage_field_"+e+":"+A.i.ad(t,3),4280640491,i,A.cJ,A.O,"",0.02,s,null,"","",0,!1,"",0,D.bf,4280172719,2,k,0,0,"",D.cn,D.d3,t,u,g-0.002),C.hAR(u,g+0.018,t)],x.u)},
hAS(d,e,f,g,h,i){var w=4291404327,v=f+0.002
return B.a([C.Dt(h,0.028,D.bf,h,0,"chv_"+d,g,e,f),C.Dt(w,0.024,D.lx,w,0,"chv_l_"+d,0.024,e-0.008,v),C.Dt(w,0.024,D.lx,w,0,"chv_r_"+d,0.024,e+g-0.016,v),C.LC(d,A.K,i,9.5,A.u,0.02,"chv_t_"+d,g,e,f+0.004)],x.u)},
bD7(d,e,f,g,h){var w=e+0.12,v=g-0.12
return B.a([C.LC("Sahihi:",A.bd,h,10,A.O,0.02,"is_"+d,0.12,e,f),C.em(A.bd,!1,4279310375,A.aH,"marriage_sign_"+d,0,24,A.bq,A.a8,"",0.032,C.cC(),null,"","",0,!1,"",0,D.bf,0,2,"",0,0,"",D.cn,D.f7,v,w,f-0.006),C.hAR(w,f+0.016,v)],x.u)},
hiO(d){var w,v
for(w=0;w<19;++w){v=D.Tb[w]
if(v.a===d)return v}return null},
iqI(d){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c
if(A.a.a_(k,"hati_kuhowa_")){w=C.air(A.a.b4(k,12),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_kuhoweya_")){w=C.air(A.a.b4(k,14),l)
v=w==null?l:w.d}else if(A.a.a_(k,"hati_malipo_awamu_")){u=A.a.b4(k,18)
w=C.air(u,D.Su)
v=w==null?l:w.d
if(v==null){w=C.air(u,l)
v=w==null?l:w.d}}else if(A.a.a_(k,"marriage_")){w=C.hiO(A.a.b4(k,9))
v=w==null?l:w.d}else v=l
if(v==null)return!1
$.hBI.a8(0)
$.hBW.a8(0)
t=C.fT2(v)
for(w=d.r,s=w.length,r=!1,q=0;q<w.length;w.length===s||(0,B.I)(w),++q)for(p=w[q].z,o=p.length,n=0;n<o;++n){m=p[n]
if(m.db==="marriage_locked_bg"&&m.at!==t){m.at=t
r=!0}}return r},
hk_(d){var w=0,v=B.j(x.T),u
var $async$hk_=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:u=B.bT(A.L,null,new C.h4d(),d,!0,!0,!0,null,!1,!1,x.N)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hk_,v)},
yf:function yf(d,e){this.a=d
this.b=e},
oc:function oc(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
bmh:function bmh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
h4d:function h4d(){},
aeP:function aeP(d){this.a=d},
erU:function erU(d,e){this.a=d
this.b=e},
erT:function erT(d){this.a=d},
erS:function erS(d,e){this.a=d
this.b=e},
agv:function agv(d,e,f){this.c=d
this.d=e
this.a=f},
hiN(d){var w=C.iqR(d)
if(w!=null)return w
return $.hBW.c1(0,d,new C.fT4(d))},
fT2(d){return $.hBI.c1(0,d,new C.fT3(d))},
fK(d){return B.a53(d>>>16&255,d>>>8&255,d&255,255)},
ifG(a2){var w,v,u=4292128567,t=4285213214,s=4294967035,r=4290283019,q=null,p=4279378237,o=4294966515,n=4294373082,m=4289102906,l=4291404327,k=4294966774,j=4294702831,i=4285218602,h=4291394365,g=4294967295,f=4294964964,e=4294965484,d=4280241466,a0=4287326484,a1=4294966518
switch(a2.a){case 0:return C.hD5(4294570461,4293910718,4284234270,u)
case 1:return C.hD5(4294635750,4293975240,t,4292912216)
case 2:w=C.bCL(s,4294505966,r)
C.bCT(w,14,16,p)
C.kR(w,8,9,464,836,u,1.2)
C.Dp(w,2,2,1,1,u,10)
C.Dp(w,478,2,-1,1,u,10)
C.Dp(w,2,852,1,-1,u,10)
C.Dp(w,478,852,-1,-1,u,10)
return w
case 3:return C.bCL(o,n,m)
case 4:return C.iaf(C.bCL(4294376440,4293653998,4290287194))
case 5:w=C.bCL(4294965238,4294437098,4288444980)
C.bCT(w,14,16,4283043359)
C.kR(w,6,7,468,840,u,1)
C.kR(w,9,10,462,834,l,0.7)
return w
case 6:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z5(v,k,4294175448)
C.tm(v,k)
C.kR(v,24,24,432,806,4286209070,1)
C.a2x(v,12,12,468,12,l,3,20)
C.a2x(v,12,842,468,842,l,3,20)
C.a2x(v,12,12,12,842,l,3,20)
C.a2x(v,468,12,468,842,l,3,20)
return v
case 7:return C.i8c(4294440434,4293518297,4280228630,r)
case 8:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z5(v,j,4293911504)
C.tm(v,j)
C.kR(v,28,28,424,798,i,1)
C.fBq(v,28,28,i,h)
C.fBq(v,452,28,i,h)
C.fBq(v,28,826,i,h)
C.fBq(v,452,826,i,h)
return v
case 9:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z5(v,g,4294111986)
C.tm(v,g)
C.kR(v,18,18,444,818,4292401368,0.7)
B.j1(v,!0,C.fK(p),0,13,0,853)
return v
case 10:return C.icd(f,4294173372)
case 11:return C.idn(4294439140,4293449662)
case 12:return C.i83(e,4294239432)
case 13:return C.icO(4294244340,4293193448)
case 14:return C.ihc(4294505710,4293780694)
case 15:return C.fqm(4294966259,4294439138,l,p,q)
case 16:return C.fqm(4294966776,4294178544,l,d,d)
case 17:return C.fqm(4294965493,4294504170,l,4286200650,q)
case 18:return C.fqm(4294966519,4294373862,l,p,p)
case 19:return C.ibl()
case 20:return C.ibm()
case 21:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z5(v,e,4293976768)
C.tm(v,e)
C.bCT(v,14,16,p)
B.j1(v,!0,C.fK(u),4,475,4,9)
B.j1(v,!0,C.fK(u),4,475,844,849)
B.j1(v,!0,C.fK(u),4,9,4,849)
B.j1(v,!0,C.fK(u),470,475,4,849)
C.a2x(v,10,12,470,12,u,2,16)
C.a2x(v,10,842,470,842,u,2,16)
C.a2x(v,10,12,10,842,u,2,18)
C.a2x(v,470,12,470,842,u,2,18)
C.Dp(v,2,2,1,1,t,10)
C.Dp(v,478,2,-1,1,t,10)
C.Dp(v,2,852,1,-1,t,10)
C.Dp(v,478,852,-1,-1,t,10)
C.kR(v,14,16,452,822,u,1.8)
return v
case 22:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z5(v,s,4294438872)
C.tm(v,s)
C.kR(v,14,16,452,822,l,2.2)
C.kR(v,22,24,436,806,l,1)
C.hgN(v,!1,!1,l,p,p,36,14,16)
C.l8(v,240,20,7,l,!0)
C.l8(v,240,834,7,l,!0)
C.l8(v,18,427,7,l,!0)
C.l8(v,462,427,7,l,!0)
return v
case 23:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z5(v,f,4293910712)
C.tm(v,f)
B.j1(v,!0,C.fK(u),0,479,0,20)
B.j1(v,!0,C.fK(u),0,479,834,853)
B.j1(v,!0,C.fK(u),0,20,0,853)
B.j1(v,!0,C.fK(u),460,479,0,853)
B.j1(v,!0,C.fK(a0),5,474,5,9)
B.j1(v,!0,C.fK(a0),5,474,844,848)
B.j1(v,!0,C.fK(a0),5,9,5,848)
B.j1(v,!0,C.fK(a0),470,474,5,848)
C.kR(v,28,28,424,798,a0,1.4)
return v
case 24:v=B.fU(q,q,A.bW,0,A.dS,854,q,0,3,q,A.bW,480,!1)
C.z5(v,a1,4294174404)
C.tm(v,a1)
C.bCT(v,14,16,p)
B.j1(v,!0,C.fK(u),3,476,3,8)
B.j1(v,!0,C.fK(u),3,476,845,850)
B.j1(v,!0,C.fK(u),3,8,3,850)
B.j1(v,!0,C.fK(u),471,476,3,850)
C.kR(v,9,10,462,834,t,1)
C.kR(v,14,16,452,822,u,1.8)
C.l8(v,240,8,4,u,!0)
C.l8(v,240,846,4,u,!0)
C.l8(v,8,427,4,u,!0)
C.l8(v,472,427,4,u,!0)
C.l8(v,8,8,3,t,!0)
C.l8(v,472,8,3,t,!0)
C.l8(v,8,846,3,t,!0)
C.l8(v,472,846,3,t,!0)
return v
case 25:case 26:case 27:case 28:case 29:case 30:case 31:return C.bCL(o,n,m)}},
z5(d,e,f){var w,v,u,t,s,r=null,q=e>>>16&255,p=f>>>16&255,o=e>>>8&255,n=f>>>8&255,m=e&255,l=f&255,k=0
for(;;){w=d.a
v=w==null
u=v?r:w.b
if(!(k<(u==null?0:u)))break
w=v?r:w.b
t=k/((w==null?0:w)-1)
w=1-t
v=A.o.D(A.i.V(q*w+p*t),0,255)
u=A.o.D(A.i.V(o*w+n*t),0,255)
w=A.o.D(A.i.V(m*w+l*t),0,255)
s=new Uint8Array(3)
s[0]=v
s[1]=u
s[2]=w
w=d.a
w=w==null?r:w.a
if(w==null)w=0
B.iF(d,!1,A.cY,new B.MS(s),r,A.cI,1,0,w-1,k,k);++k}},
tm(d,e){var w,v,u,t,s,r,q,p,o=null,n=new B.e0()
n.cU(e)
for(w=0;w<900;++w){v=d.a
v=v==null?o:v.a
u=n.aw(v==null?0:v)
v=d.a
v=v==null?o:v.b
t=n.aw(v==null?0:v)
v=d.a
s=v==null?o:v.dT(u,t,o)
if(s==null)s=new B.iA()
v=A.o.D(A.i.M(s.gb8(s))-3,0,255)
r=A.o.D(A.i.M(s.gbc())-3,0,255)
q=A.o.D(A.i.M(s.gbb(s))-2,0,255)
p=d.a
if(p!=null)p.k9(u,t,v,r,q,255)}},
kR(d,e,f,g,h,i,j){var w,v=null,u=C.fK(i),t=e+g
B.iF(d,!0,A.cY,u,v,A.cI,j,e,t,f,f)
w=f+h
B.iF(d,!0,A.cY,u,v,A.cI,j,e,t,w,w)
B.iF(d,!0,A.cY,u,v,A.cI,j,e,e,f,w)
B.iF(d,!0,A.cY,u,v,A.cI,j,t,t,f,w)},
Dp(d,e,f,g,h,i,j){var w,v,u=null,t=A.o.D(A.i.V(j*0.72),8,j-2)
B.iF(d,!0,A.cY,C.fK(i),u,A.cI,2,e,e+g*j,f,f)
B.iF(d,!0,A.cY,C.fK(i),u,A.cI,2,e,e,f,f+h*j)
w=e+g*3
v=f+h*3
B.iF(d,!0,A.cY,C.fK(i),u,A.cI,1,w,e+g*t,v,v)
B.iF(d,!0,A.cY,C.fK(i),u,A.cI,1,w,w,v,f+h*t)},
hD5(d,e,f,g){var w=null,v=B.fU(w,w,A.bW,0,A.dS,854,w,0,3,w,A.bW,480,!1)
C.z5(v,d,e)
C.tm(v,d)
B.j1(v,!0,C.fK(f),0,479,0,28)
B.j1(v,!0,C.fK(f),0,479,826,853)
B.j1(v,!0,C.fK(f),0,28,0,853)
B.j1(v,!0,C.fK(f),452,479,0,853)
C.kR(v,5,5,470,844,g,1.1)
C.kR(v,28,28,424,798,g,1.6)
C.Dp(v,2,2,1,1,g,11)
C.Dp(v,478,2,-1,1,g,11)
C.Dp(v,2,852,1,-1,g,11)
C.Dp(v,478,852,-1,-1,g,11)
return v},
bCL(d,e,f){var w=null,v=B.fU(w,w,A.bW,0,A.dS,854,w,0,3,w,A.bW,480,!1)
C.z5(v,d,e)
C.tm(v,d)
C.kR(v,14,16,452,822,f,1.6)
C.kR(v,20,22,440,810,f,0.8)
return v},
bCT(d,e,f,g){var w,v=C.fK(g)
B.j1(d,!0,v,0,479,0,f-1)
w=854-f
B.j1(d,!0,v,0,479,w,853);--w
B.j1(d,!0,v,0,e-1,f,w)
B.j1(d,!0,v,480-e,479,f,w)},
iaf(d){var w,v,u=4291404327
C.bCT(d,14,16,4279122734)
for(w=10;w<470;w+=14){C.l8(d,w,8,3,u,!0)
C.l8(d,w,846,3,u,!0)}for(v=18;v<836;v+=16){C.l8(d,7,v,3,u,!0)
C.l8(d,473,v,3,u,!0)}return d},
fEI(d,e,f,g,h,i,j,k,l,m,n){var w,v,u,t=x.J,s=B.a([new B.fJ(e,f),new B.fJ(e+g*n,f),new B.fJ(e,f+h*n)],t)
B.Bk(d,C.fK(m),s)
w=A.o.D(A.i.V(n*0.17),5,8)
v=A.i.V(n*0.78)
s=e+g*w
u=f+h*w
t=B.a([new B.fJ(s,u),new B.fJ(e+g*v,u),new B.fJ(s,f+h*v)],t)
B.Bk(d,C.fK(k),t)
t=A.i.V(n*0.39)
C.l8(d,e+g*t,f+h*t,6,l,!0)
if(i){t=n-7
C.l8(d,e+g*t,f+h*3,4,k,!0)
C.l8(d,e+g*3,f+h*t,4,k,!0)}if(j){t=n-4
C.l8(d,e+g*t,f,5,k,!0)
C.l8(d,e,f+h*t,5,k,!0)}},
hgN(d,e,f,g,h,i,j,k,l){var w,v
C.fEI(d,k,l,1,1,e,f,g,h,i,j)
w=480-k
C.fEI(d,w,l,-1,1,e,f,g,h,i,j)
v=854-l
C.fEI(d,k,v,1,-1,e,f,g,h,i,j)
C.fEI(d,w,v,-1,-1,e,f,g,h,i,j)},
a2x(d,e,f,g,h,i,j,k){var w,v,u,t,s,r,q,p,o=g-e,n=h-f,m=Math.max(1,A.i.V(Math.sqrt(o*o+n*n)/k))
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<=m;++t){s=t/m
r=A.i.V(e+o*s)
q=A.i.V(f+n*s)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.kT(d,!0,A.cY,new B.lx(p),null,A.cI,j,r,q)}},
fDB(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o
for(w=i>>>16&255,v=i>>>8&255,u=i&255,t=0;t<3;++t){s=34+t*12
r=26-t*6
q=e+g*s
p=f+h*s
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.iF(d,!0,A.cY,new B.lx(o),null,A.cI,1.4,q,q+g*r,p,p)
o=new Uint8Array(4)
o[0]=w
o[1]=v
o[2]=u
o[3]=255
B.iF(d,!0,A.cY,new B.lx(o),null,A.cI,1.4,q,q,p,p+h*r)}},
i8c(d,e,f,g){var w,v,u,t,s,r,q,p,o=null,n=B.fU(o,o,A.bW,0,A.dS,854,o,0,3,o,A.bW,480,!1)
C.z5(n,d,e)
C.tm(n,d)
C.kR(n,20,20,440,814,f,1.2)
C.fDB(n,0,0,1,1,g)
C.fDB(n,480,0,-1,1,g)
C.fDB(n,0,854,1,-1,g)
C.fDB(n,480,854,-1,-1,g)
for(w=g>>>16&255,v=g>>>8&255,u=g&255,t=-3;t<=3;++t){s=-1.5707963267948966+t*0.2
r=Math.cos(s)
q=Math.sin(s)
r=A.i.V(240+24*r)
q=A.i.V(60+24*q)
p=new Uint8Array(4)
p[0]=w
p[1]=v
p[2]=u
p[3]=255
B.iF(n,!0,A.cY,new B.lx(p),o,A.cI,1.2,240,r,60,q)}return n},
fBq(d,e,f,g,h){var w
C.ahW(d,!0,C.fK(g),13,e,f)
C.ahW(d,!0,C.fK(g),9,e,f)
w=B.a([new B.fJ(e,f-4),new B.fJ(e+4,f),new B.fJ(e,f+4),new B.fJ(e-4,f)],x.J)
B.Bk(d,C.fK(h),w)},
l8(d,e,f,g,h,i){var w=null,v=f-g,u=e+g,t=f+g,s=e-g,r=B.a([new B.fJ(e,v),new B.fJ(u,f),new B.fJ(e,t),new B.fJ(s,f)],x.J)
if(i){B.Bk(d,C.fK(h),r)
return}B.iF(d,!0,A.cY,C.fK(h),w,A.cI,1,e,u,v,f)
B.iF(d,!0,A.cY,C.fK(h),w,A.cI,1,u,e,f,t)
B.iF(d,!0,A.cY,C.fK(h),w,A.cI,1,e,s,t,f)
B.iF(d,!0,A.cY,C.fK(h),w,A.cI,1,s,e,f,v)},
fql(d,e,f,g,h,i,j){var w,v=B.a([new B.fJ(e,f),new B.fJ(e+g*28,f),new B.fJ(e,f+h*28)],x.J)
B.Bk(d,C.fK(i),v)
v=e+g*14
w=f+h*14
C.l8(d,v,w,6,j,!0)
C.l8(d,v,w,3,i,!0)},
fqm(d,e,f,g,h){var w=null,v=B.fU(w,w,A.bW,0,A.dS,854,w,0,3,w,A.bW,480,!1)
C.z5(v,d,e)
C.tm(v,d)
C.kR(v,18,18,444,818,f,2)
C.kR(v,26,26,428,802,f,0.9)
if(h!=null)B.j1(v,!0,C.fK(h),28,451,28,34)
C.fql(v,18,18,1,1,g,f)
C.fql(v,462,18,-1,1,g,f)
C.fql(v,18,836,1,-1,g,f)
C.fql(v,462,836,-1,-1,g,f)
return v},
ibl(){var w,v=null,u=4294966259,t=4292128567,s=4287326484,r=B.fU(v,v,A.bW,0,A.dS,854,v,0,3,v,A.bW,480,!1)
C.z5(r,u,4294240980)
C.tm(r,u)
C.kR(r,10,12,460,830,t,3.2)
C.kR(r,18,20,444,814,s,1.2)
C.kR(r,24,26,432,802,t,1.8)
C.hgN(r,!0,!1,t,s,4279378237,38,10,12)
for(w=56;w<424;w+=18){C.l8(r,w,16,3,t,!0)
C.l8(r,w,838,3,t,!0)}for(w=56;w<798;w+=22){C.l8(r,16,w,3,t,!0)
C.l8(r,464,w,3,t,!0)}return r},
ibm(){var w,v,u,t=null,s=4294966776,r=4291404327,q=4282000405,p=B.fU(t,t,A.bW,0,A.dS,854,t,0,3,t,A.bW,480,!1)
C.z5(p,s,4294373080)
C.tm(p,s)
C.kR(p,16,18,448,818,r,2.4)
C.kR(p,24,26,432,802,4286209044,1)
w=new C.fsT(p)
for(v=40;v<440;v+=16){w.$4(v,22,1,1)
w.$4(v,832,1,1)}for(u=44;u<810;u+=18){w.$4(22,u,1,1)
w.$4(458,u,-1,1)}C.hgN(p,!1,!0,r,q,q,34,16,18)
return p},
bDA(d,e,f,g,h,i){B.j1(d,!0,C.fK(i),e,e+g,f,f+h)},
bEt(d,e,f,g,h,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=e+g,v=a0>>>16&255,u=a1>>>16&255,t=a0>>>8&255,s=a1>>>8&255,r=a0&255,q=a1&255,p=h-1,o=h<=1,n=0;n<h;++n){m=o?0:n/p
l=1-m
k=A.o.D(A.i.V(v*l+u*m),0,255)
j=A.o.D(A.i.V(t*l+s*m),0,255)
l=A.o.D(A.i.V(r*l+q*m),0,255)
i=new Uint8Array(3)
i[0]=k
i[1]=j
i[2]=l
l=f+n
B.iF(d,!1,A.cY,new B.MS(i),null,A.cI,1,e,w,l,l)}},
icc(d,e,f,g,h,i){var w,v,u,t,s,r,q
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
B.iF(d,!1,A.cY,new B.lx(r),null,A.cI,1,e,s,t,t);++v}return}w=f+g-1
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
B.iF(d,!1,A.cY,new B.lx(r),null,A.cI,1,t,t,f,s);++q}},
icd(d,e){var w,v,u=null,t=B.fU(u,u,A.bW,0,A.dS,854,u,0,3,u,A.bW,480,!1)
for(w=0;w<854;w+=30)for(v=0;v<480;v+=30)C.icc(t,v,w,30,D.d85,(A.o.ar(v,30)+A.o.ar(w,30)&1)===0)
C.bDA(t,44,44,392,766,d)
C.bEt(t,44,44,392,766,d,e)
C.tm(t,d)
C.kR(t,44,44,392,766,4292128567,2.2)
C.kR(t,50,50,380,754,4279898632,0.8)
return t},
idm(d,e,f,g,h){var w,v,u,t,s,r,q,p,o=null
switch(A.o.F(g,4)){case 0:C.l8(d,e,f,7,h,!0)
C.l8(d,e,f,3,h,!1)
break
case 1:w=e-7
v=f-7
u=e+7
t=f+7
B.iF(d,!0,A.cY,C.fK(h),o,A.cI,1.6,w,u,v,t)
B.iF(d,!0,A.cY,C.fK(h),o,A.cI,1.6,u,w,v,t)
break
case 2:for(w=e-8,v=e+8,u=h>>>16&255,t=h>>>8&255,s=h&255,r=-2;r<=2;++r){q=f+r*3
p=new Uint8Array(4)
p[0]=u
p[1]=t
p[2]=s
p[3]=255
B.iF(d,!0,A.cY,new B.lx(p),o,A.cI,1.2,w,v,q,q)}break
default:B.iF(d,!0,A.cY,C.fK(h),o,A.cI,1.5,e-8,e+8,f,f)
B.iF(d,!0,A.cY,C.fK(h),o,A.cI,1.5,e,e,f-8,f+8)
B.kT(d,!0,A.cY,C.fK(h),o,A.cI,2,e,f)}},
idn(d,e){var w,v,u,t,s=null,r=B.fU(s,s,A.bW,0,A.dS,854,s,0,3,s,A.bW,480,!1)
B.j1(r,!0,C.fK(4284103196),0,479,0,853)
for(w=0,v=18;v<854;v+=32)for(u=18;u<480;u+=32,w=t){t=w+1
C.idm(r,u,v,w,4292391514)}C.bDA(r,46,46,388,762,d)
C.bEt(r,46,46,388,762,d,e)
C.tm(r,d)
C.kR(r,46,46,388,762,4291404327,1.8)
return r},
hy8(d,e,f,g){C.ahW(d,!0,C.fK(g),16,e,f)
C.ahW(d,!0,C.fK(g),11,e,f)
C.l8(d,e,f,6,g,!0)
B.iF(d,!0,A.cY,C.fK(g),null,A.cI,1.3,e-14,e+14,f,f)
B.iF(d,!0,A.cY,C.fK(g),null,A.cI,1.3,e,e,f-14,f+14)},
i83(d,e){var w,v=null,u=4283051028,t=4292128567,s=B.fU(v,v,A.bW,0,A.dS,854,v,0,3,v,A.bW,480,!1)
B.j1(s,!0,C.fK(4280948752),0,479,0,853)
B.j1(s,!0,C.fK(u),0,479,0,78)
B.j1(s,!0,C.fK(u),0,479,776,853)
for(w=28;w<460;w+=44){C.hy8(s,w,39,t)
C.hy8(s,w,815,t)}C.bDA(s,38,92,404,670,d)
C.bEt(s,38,92,404,670,d,e)
C.tm(s,d)
C.kR(s,38,92,404,670,t,1.8)
C.kR(s,45,99,390,656,4287322667,0.8)
return s},
icN(d,e,f,g){var w,v,u,t,s,r,q,p,o
for(w=f-4,v=x.J,u=g>>>16&255,t=g>>>8&255,s=g&255,r=-2;r<=2;++r){q=e+r*9
p=B.a([new B.fJ(e,f),new B.fJ(q-5,w),new B.fJ(q,f-(18-Math.abs(r)*3)),new B.fJ(q+5,w)],v)
o=new Uint8Array(4)
o[0]=u
o[1]=t
o[2]=s
o[3]=255
B.Bk(d,new B.lx(o),p)}B.kT(d,!0,A.cY,C.fK(4292128567),null,A.cI,3,e,f)},
icO(d,e){var w,v,u,t,s=null,r=4279196764,q=B.fU(s,s,A.bW,0,A.dS,854,s,0,3,s,A.bW,480,!1)
C.z5(q,4278931279,4292330394)
for(w=8;w<=34;w+=4){v=new Uint8Array(4)
v[0]=8
v[1]=56
v[2]=56
v[3]=255
B.iF(q,!0,A.cY,new B.lx(v),s,A.cI,1.1,w,w,0,853)
v=479-w
u=new Uint8Array(4)
u[0]=8
u[1]=56
u[2]=56
u[3]=255
B.iF(q,!0,A.cY,new B.lx(u),s,A.cI,1.1,v,v,0,853)}B.j1(q,!0,C.fK(r),0,479,0,70)
B.j1(q,!0,C.fK(r),0,479,798,853)
for(t=0;t<5;++t)C.icN(q,70+t*85,48,4292128567)
C.bDA(q,48,78,384,712,d)
C.bEt(q,48,78,384,712,d,e)
C.tm(q,d)
C.kR(q,48,78,384,712,4291404327,1.6)
return q},
ihc(d,e){var w,v,u,t=null,s=4279970378,r=B.fU(t,t,A.bW,0,A.dS,854,t,0,3,t,A.bW,480,!1)
B.j1(r,!0,C.fK(s),0,479,0,853)
for(w=10;w<854;w+=18)for(v=10;v<480;v+=18){C.l8(r,v,w,6,4293449648,!1)
u=new Uint8Array(4)
u[0]=232
u[1]=215
u[2]=176
u[3]=255
B.kT(r,!0,A.cY,new B.lx(u),t,A.cI,1,v,w)}C.bDA(r,40,40,400,774,d)
C.bEt(r,40,40,400,774,d,e)
C.tm(r,d)
C.kR(r,40,40,400,774,4291058750,2)
C.kR(r,48,48,384,758,s,0.8)
return r},
iqR(d){var w,v=4291404346,u=4292128567
switch(d.a){case 25:w=C.aiO(4294372308,!1,v,4294768102)
break
case 31:w=C.aiO(4293850350,!1,v,4294507511)
break
case 26:w=C.aiO(4294241238,!0,v,4294702826)
break
case 27:w=C.aiO(4278659101,!0,u,4279055656)
break
case 28:w=C.aiO(4278850864,!0,u,4279377732)
break
case 29:w=C.aiO(4280289578,!0,u,4281208888)
break
case 30:w=C.aiO(4279045131,!0,u,4279900439)
break
default:w=null
break}return w},
jw:function jw(d,e){this.a=d
this.b=e},
fT4:function fT4(d){this.a=d},
fT3:function fT3(d){this.a=d},
fsT:function fsT(d){this.a=d},
fTN(d){var w
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
idg(d){var w=d.length
if(w>3&&d[0]===137&&d[1]===80)return"image/png"
if(w>11&&d[8]===87&&d[9]===69)return"image/webp"
return"image/jpeg"},
hfd(d){var w,v,u,t=null,s=A.a.cn(d,"{"),r=A.a.pe(d,"}")
if(s<0||r<=s)return t
try{w=A.W.aP(0,Am.aio(A.a.aA(d,s,r+1)),t)
v=x.f.b(w)?B.a1(w,x.N,x.z):t
return v}catch(u){return t}},
agS(d,e){var w=0,v=B.j(x.N),u,t,s,r,q,p,o,n
var $async$agS=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vV(null,""),$async$agS)
case 3:n=g
if(A.a.i(n).length===0)throw B.X("AI is not available right now. Please try again later.")
t=B.ns(n)
if(e==null)s=A.i1
else{r=C.idg(e)
s=B.a([new B.a1u(A.cS.gcs().aN(e),r)],x.aD)}q=null,p=0
case 4:if(!(p<2)){w=6
break}w=7
return B.b(B.rm(t,d,s,"news",E.GX),$async$agS)
case 7:o=g
r=o.b
if(r!=null&&A.a.i(r).length!==0){u=r
w=1
break}q=o.a
case 5:++p
w=4
break
case 6:throw B.X(q!=null&&B.M3(q)?"No internet connection. Try again when you are online.":"The AI could not do that just now. Try again.")
case 1:return B.h(u,v)}})
return B.i($async$agS,v)},
bG6(d){return C.iqo(d)},
iqo(d){var w=0,v=B.j(x.b6),u,t=2,s=[],r,q,p,o,n,m
var $async$bG6=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
r='You are a professional Swahili newspaper editor and journalist: a native speaker from Tanzania or Kenya whose writing every Swahili reader finds natural, warm and correct.\nThe newspaper page below was written or translated by a machine, so it may sound stiff, foreign or word-for-word. Rewrite EVERY field so it reads as if a skilled native Swahili journalist wrote it first: natural, clear, correct and professional. Fix wrong grammar (noun classes, verb agreement, tenses), odd or invented words and any English sentence structure. Keep every fact, name and number and do not add facts. Keep the same fields and the same number of paragraphs. Write people\'s names with normal capitals, except KB PABLO QR.\nSWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n\nPage: '+A.W.av(d.aj(),null)+'\nReply with JSON only, with exactly the same fields: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n'
w=7
return B.b(C.agS(r,null),$async$bG6)
case 7:q=f
p=C.hfd(q)
if(p==null){u=d
w=1
break}o=d.aFc(p)
if(o.r.length===0||A.d.aM(o.r," ").length<A.d.aM(d.r," ").length*0.5){u=d
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
return B.i($async$bG6,v)},
hCh(d){var w,v=F.hi0(d)
v=B.aL(v,"book","newspaper")
if(F.a3C(d)!=="sw"){w=B.ag("swahili|kiswahili",!1,!1,!1,!1)
w=w.b.test(d)}else w=!0
w=w?'SWAHILI THAT REAL SWAHILI SPEAKERS USE (critical): translate the MEANING and write the way a Swahili speaker in Tanzania, Kenya or eastern Congo would say it. NEVER translate word for word. Many English phrases have no literal Swahili twin and sound strange or are not understood if copied. Examples:\n- "family tree" is NOT "mti wa familia": say "ukoo" (the family line), "nasaba", or "historia ya ukoo wetu". "family book" -> "kitabu cha familia" or "kitabu cha ukoo".\n- ancestors -> "mababu" / "wazee wa zamani"; grandparents -> "babu na bibi"; great-grandparent -> "babu/bibi mkubwa"; descendants -> "wazao" / "vizazi vyetu"; generation -> "kizazi"; heritage / legacy -> "urithi", "mila na desturi"; bloodline -> "ukoo", "damu moja"; roots -> "asili yetu".\n- relatives: cousin -> "binamu"; father\'s brother -> "baba mdogo" / "baba mkubwa"; mother\'s brother -> "mjomba"; father\'s sister -> "shangazi"; mother\'s sister -> "mama mdogo" / "mama mkubwa"; nephew or niece -> "mpwa"; in-laws -> "wakwe"; brother- or sister-in-law -> "shemeji"; spouse -> "mke" (wife) / "mume" (husband) / "mwenzi wake"; firstborn -> "mzaliwa wa kwanza" / "kifungua mimba"; last-born -> "kitinda mimba"; elders -> "wazee"; clan -> "ukoo" / "kabila".\n- life events: was born -> "alizaliwa"; passed away / died -> "alifariki" / "alifariki dunia"; he married -> "alimuoa", she married -> "aliolewa na"; raised -> "alilea"; moved -> "alihamia"; blessing -> "baraka"; memories -> "kumbukumbu"; story -> "hadithi" / "simulizi"; chapter -> "sura"; page -> "ukurasa"; "our family" -> "familia yetu".\n- Use everyday words, short clear sentences and natural word order. If an idea has no good Swahili word, explain it simply instead of inventing a word. Never use a rare or strange word you are not sure about.\n- WRITE AS A NATIVE AUTHOR, NOT AS A TRANSLATOR. Build every sentence the Swahili way (short, clear, with the right subject and tense markers) and join ideas with "na", "kisha", "baadaye", "hivyo", "ndipo". Never keep the shape of an English sentence.\n- KEEP IT PLAIN AND WARM. Drop flowery English phrases and pictures that do not work in Swahili ("the tree grew wider", "bloodlines shaped nations", "carried great destinies", "sacred story", "anchors the beginning") and say the plain fact instead. Never add big claims that the facts do not give.\n- Correct Swahili grammar: noun-class agreement (mtoto mmoja, watoto watatu, kijiji kimoja, vijiji vitatu), tenses (a-li- past, a-na- now, a-ta- future, a-me- done) and the right "wa / cha / la / ya / za / vya".\n- Write people\'s names with normal capitals (Ikungu Ele, Muteleka), never in ALL CAPITALS. Place names and dates stay as they are.\n- Example. English: "Through Ekama Pele the family grew, and he had three children: Muteleka, Bembesile and Nyakasi Ebulo." Good Swahili: "Familia iliendelea kukua kupitia Ekama Pele, aliyepata watoto watatu: Muteleka, Bembesile na Nyakasi Ebulo." Bad, word for word (never write like this): "Kupitia Ekama Pele, mti ulikua mpana zaidi, ukizaa watoto watatu wa msingi."\n':""
return"- Write like a real newspaper: a strong headline (max 12 words), a subhead (max 25 words), a byline, then 4 or 5 paragraphs, about 330 to 400 words in all. Plain text only: no markdown, no emojis, no lists.\n- Use ONLY the facts in the knowledge above. Never invent numbers, prices, dates, awards, places or quotes. Do not put made-up words in anyone's mouth.\n- KB PABLO QR is the Founder, President and CEO of NGMY. Always write his name in capital letters.\n- Never mention secret or admin details, passwords or the price list.\n- STYLE: write like an experienced human newspaper journalist in the style of a quality wire service (Associated Press, Reuters): polished, precise, natural and professional. Open with the most important fact. Use the active voice, concrete nouns and strong verbs. Mix short and longer sentences. Plain, grown-up words.\n- NEVER sound like an AI. Do not use: delve, tapestry, testament, beacon, realm, landscape, journey, game-changer, groundbreaking, revolutionize, unlock, empower, seamless, vibrant, bustling, in today's fast-paced world, it is worth noting, not just X but Y, whether you are X or Y. No exclamation marks, no rhetorical questions, no lists of three adjectives, no filler, no hype, no dashes for drama. Every sentence must say something real.\n- Check spelling, grammar and punctuation. Names are written with normal capitals, except KB PABLO QR.\n"+v+w},
fXT(d,e,f,g){return C.ism(d,e,f,g)},
ism(d,e,f,g){var w=0,v=B.j(x.b6),u,t,s,r,q,p,o,n,m
var $async$fXT=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:o=C.fTN(g)
n=A.a.i(f)
if(n.length===0)n="Choose the most interesting true story about NGMY from what you know, and write it. Vary it: it can be about the app, the Civic Registry, the Advisors, the studios, or the CEO."
t=C.hGf()
s=e==null?"There is no picture yet: write the caption as a short line about the story.":"A PICTURE IS ATTACHED. Look at it. Mention what is really visible in the caption and weave it into the story. Do not say who the people in it are unless the owner told you."
m=C
w=3
return B.b(C.agS('You are the editor-in-chief of a newspaper called "'+o+'". Write its front-page story in the voice of '+g.at+".\n"+t+'\n\nWHAT THE OWNER ASKED FOR: """'+n+'"""\n'+s+"\nRules:\n"+C.hCh(n)+'\nReply with JSON only, in exactly this shape: {"paper":"newspaper name","category":"ONE of COMMUNITY, TECHNOLOGY, BUSINESS, EDUCATION, WORLD NEWS, FEATURE","headline":"...","subhead":"...","byline":"By ...","caption":"one sentence about the picture","body":["paragraph 1","paragraph 2","paragraph 3","paragraph 4"],"pullQuote":"a short line from the story","sidebarTitle":"Did you know?","sidebarText":"two short sentences"}\n',e),$async$fXT)
case 3:r=m.hfd(i)
if(r==null)throw B.X(y.S)
q=new C.Aa(o,"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","").aFc(r)
t=q.r
if(t.length===0)throw B.X("The AI did not write a story. Try again.")
s=n+" "+A.d.aM(t," ")
if(F.a3C(s)!=="sw"){p=B.ag("swahili|kiswahili",!1,!1,!1,!1)
s=p.b.test(s)}else s=!0
u=s&&F.a3C(A.d.aM(t," "))==="sw"?C.bG6(q):q
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fXT,v)},
bFA(d,e,f,g,h){return C.inV(d,e,f,g,h)},
inV(d,e,f,g,h){var w=0,v=B.j(x.gX),u,t,s,r,q,p,o,n,m,l,k,j
var $async$bFA=B.e(function(i,a0){if(i===1)return B.f(a0,v)
for(;;)switch(w){case 0:l=B.a([],x.s)
k=e.length
k=k>6?A.d.fN(e,k-6):e
t=k.length
s=0
for(;s<k.length;k.length===t||(0,B.I)(k),++s){r=k[s]
l.push(r.a+": "+r.b)}q=A.d.aM(l,"\n")
l=C.hGf()
k=A.W.av(d.aj(),null)
t=q.length===0?"":"EARLIER IN THIS CONVERSATION:\n"+q+"\n"
j=C
w=3
return B.b(C.agS('You are the editor-in-chief of the newspaper "'+d.a+'", written in the voice of '+h.at+". The owner is talking to you about the page below. They may ask a question about NGMY or the page (just answer it), or ask you to change, add, shorten, rewrite or fix something (change ONLY that).\n"+l+"\n\nTHE PAGE NOW: "+k+"\n"+t+'\nTHE OWNER SAYS: """'+f+'"""\nRules:\n'+C.hCh(f)+'\n- Keep every part they did not mention exactly as it is. Keep the story about 330 to 400 words unless they ask for another length.\nReply with JSON only: {"message":"one or two friendly sentences: your answer, or what you changed","changes":{ ...only the fields you change, using the same names as the page... }}. For a pure question leave "changes" empty.\n',g),$async$bFA)
case 3:p=j.hfd(a0)
if(p==null)throw B.X(y.S)
o=p.h(0,"changes")
if(x.f.b(o)&&J.cJ(o)){n=d.aFc(B.a1(o,x.N,x.z))
m=A.W.av(n.aj(),null)!==A.W.av(d.aj(),null)}else{n=d
m=!1}w=m&&F.a3C(A.d.aM(n.r," "))==="sw"?4:5
break
case 4:w=6
return B.b(C.bG6(n),$async$bFA)
case 6:n=a0
case 5:l=p.h(0,"message")
if(l==null)l=m?"Done.":"Okay."
u=new C.a9j(A.a.i(B.w(l)),n,m)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFA,v)},
a9j:function a9j(d,e,f){this.a=d
this.b=e
this.c=f},
iv2(d,e){return B.a6(d,!1).ce(B.ee(new C.h4o(e),!0,null,x.H))},
h4o:function h4o(d){this.a=d},
Xc:function Xc(d,e){this.c=d
this.a=e},
aGu:function aGu(d,e,f,g,h,i,j,k){var _=this
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
euR:function euR(d){this.a=d},
euQ:function euQ(){},
euS:function euS(d){this.a=d},
euP:function euP(d,e){this.a=d
this.b=e},
euT:function euT(){},
eut:function eut(d,e){this.a=d
this.b=e},
eup:function eup(d,e){this.a=d
this.b=e},
euA:function euA(d){this.a=d},
euB:function euB(d,e){this.a=d
this.b=e},
euC:function euC(d){this.a=d},
euv:function euv(d,e){this.a=d
this.b=e},
euw:function euw(d,e){this.a=d
this.b=e},
eux:function eux(d,e){this.a=d
this.b=e},
euy:function euy(d){this.a=d},
euz:function euz(d){this.a=d},
euu:function euu(d,e){this.a=d
this.b=e},
eur:function eur(d){this.a=d},
eus:function eus(d){this.a=d},
euI:function euI(d){this.a=d},
euJ:function euJ(d){this.a=d},
euH:function euH(d){this.a=d},
euK:function euK(d,e){this.a=d
this.b=e},
euG:function euG(d,e){this.a=d
this.b=e},
euL:function euL(d){this.a=d},
euF:function euF(d){this.a=d},
euM:function euM(d){this.a=d},
euE:function euE(d){this.a=d},
euN:function euN(d,e){this.a=d
this.b=e},
euD:function euD(d,e){this.a=d
this.b=e},
euO:function euO(d){this.a=d},
euq:function euq(d,e){this.a=d
this.b=e},
fSE(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o
var $async$fSE=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hzL){w=1
break}r=new C.fSF()
t=4
q=x.s
w=7
return B.b(B.iK(B.a([r.$2("NgmyBlackletter",B.a(["UnifrakturCook-Bold.ttf"],q)),r.$2("NgmyOldStandard",B.a(["OldStandard-Regular.ttf","OldStandard-Bold.ttf","OldStandard-Italic.ttf"],q)),r.$2("NgmyAbril",B.a(["AbrilFatface-Regular.ttf"],q))],x.fG),x.H),$async$fSE)
case 7:$.hzL=!0
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
return B.i($async$fSE,v)},
bFY(d){return A.DQ[B.mz(d)-1]+", "+A.oU[B.bL(d)-1]+" "+B.bX(d)+", "+B.bC(d)},
igj(d){var w,v,u,t,s
for(w="",v=0;v<13;++v){u=D.dAR[v]
t=u.a
s=u.b
while(d>=t){w+=s
d-=t}}return w},
hir(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j={},i=x.s,h=B.a([],i)
for(w=0;w<d.length;++w){v=A.a.fw(d[w],B.ag("[ \\t]+",!0,!1,!1,!1))
A.d.u(h,new B.Y(v,new C.fQV(),B.U(v).k("Y<1>")))
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
continue}o=new C.fQX(j,h)
n=new C.fQW(s,o,e)
m=p-v
for(l=0;l<m;){k=A.o.ar(l+m+1,2)
if(n.$1(k))l=k
else m=k-1}u.push(l===0?"":J.j3(o.$1(l)))
j.a+=l}return u},
heU(d,e){var w=new C.fsr()
return A.d.cF(e,0,new C.fsp(w))>=A.d.cF(d,0,new C.fsq(w))},
hwO(d){var w,v,u=new B.aH($.S().r,A.aj,null,null,B.a([],x.v))
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
Aa:function Aa(d,e,f,g,h,i,j,k,l,m){var _=this
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
ckl:function ckl(d){this.a=d},
ckj:function ckj(){},
ckk:function ckk(){},
tQ:function tQ(d,e){this.a=d
this.b=e},
Cb:function Cb(d,e){this.a=d
this.b=e},
lE:function lE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var _=this
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
fSF:function fSF(){},
fQV:function fQV(){},
fQX:function fQX(d,e){this.a=d
this.b=e},
fQW:function fQW(d,e,f){this.a=d
this.b=e
this.c=f},
fsr:function fsr(){},
fss:function fss(){},
fsp:function fsp(d){this.a=d},
fsq:function fsq(d){this.a=d},
b3F:function b3F(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ckm:function ckm(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
ckn:function ckn(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
cko:function cko(d){this.a=d},
bfi:function bfi(d){this.a=d},
bfh:function bfh(d,e){this.b=d
this.a=e},
bxm:function bxm(d){this.a=d},
bbL:function bbL(d,e){this.b=d
this.a=e},
buQ:function buQ(d,e){this.b=d
this.a=e},
hIz(d,e){return B.a6(d,!1).ce(B.ee(new C.h4r(e,null),!0,null,x.E))},
h4r:function h4r(d,e){this.a=d
this.b=e},
Xd:function Xd(d,e,f){this.c=d
this.d=e
this.a=f},
aGx:function aGx(){var _=this
_.d=null
_.e=0
_.f=1
_.w=_.r=0.5
_.x=1
_.y=!1
_.c=_.a=null},
evD:function evD(){},
evE:function evE(d){this.a=d},
evC:function evC(d,e){this.a=d
this.b=e},
evq:function evq(d){this.a=d},
evr:function evr(d){this.a=d},
evx:function evx(d){this.a=d},
evy:function evy(d,e){this.a=d
this.b=e},
evv:function evv(d){this.a=d},
evw:function evw(d,e,f){this.a=d
this.b=e
this.c=f},
evs:function evs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
evz:function evz(d,e){this.a=d
this.b=e},
evu:function evu(d,e){this.a=d
this.b=e},
evA:function evA(d){this.a=d},
evt:function evt(d,e){this.a=d
this.b=e},
evB:function evB(d,e){this.a=d
this.b=e},
beQ:function beQ(d,e,f){this.b=d
this.c=e
this.a=f},
iv8(d){return B.a6(d,!1).ce(B.ee(new C.h4H(),!0,null,x.I))},
bDk(d,e){var w,v,u,t,s,r,q=B.c1(20,0,!1,x.gR)
for(w=0;w<4;++w)for(v=w*5,u=v+4,t=0;t<5;++t){for(s=0,r=0;r<4;++r)s+=d[v+r]*e[r*5+t]
if(t===4)s+=d[u]
q[v+t]=s}return q},
hgu(d,e,f,g){return B.a([d,0,0,0,e,0,d,0,0,f,0,0,d,0,g,0,0,0,1,0],x.x)},
h4H:function h4H(){},
a1l:function a1l(d){this.a=d},
p2:function p2(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
aHY:function aHY(d,e,f,g,h,i,j,k,l){var _=this
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
_.aO=_.aR=_.aK=_.aH=_.a0=_.bd=_.bh=_.y2=0
_.b1=null
_.aZ=0.25
_.bi=null
_.bH=0.5
_.aY=1
_.c5=_.bx=_.bn=0
_.cT=_.cg=!1
_.c=_.a=null},
f4W:function f4W(d){this.a=d},
f3O:function f3O(d,e){this.a=d
this.b=e},
f4b:function f4b(d,e){this.a=d
this.b=e},
f4l:function f4l(d){this.a=d},
f3x:function f3x(d){this.a=d},
f3y:function f3y(d){this.a=d},
f3v:function f3v(d){this.a=d},
f3w:function f3w(d){this.a=d},
f44:function f44(d,e){this.a=d
this.b=e},
f45:function f45(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4h:function f4h(d,e,f){this.a=d
this.b=e
this.c=f},
f4g:function f4g(d,e){this.a=d
this.b=e},
f4i:function f4i(d,e){this.a=d
this.b=e},
f4f:function f4f(d,e){this.a=d
this.b=e},
f4k:function f4k(d,e,f){this.a=d
this.b=e
this.c=f},
f4j:function f4j(d,e){this.a=d
this.b=e},
f3n:function f3n(d){this.a=d},
f3o:function f3o(d){this.a=d},
f3p:function f3p(d){this.a=d},
f3m:function f3m(){},
f3q:function f3q(d,e){this.a=d
this.b=e},
f3l:function f3l(d,e){this.a=d
this.b=e},
f3s:function f3s(){},
f3r:function f3r(d,e){this.a=d
this.b=e},
f3k:function f3k(d,e){this.a=d
this.b=e},
f3h:function f3h(d,e){this.a=d
this.b=e},
f3t:function f3t(d){this.a=d},
f3j:function f3j(d,e){this.a=d
this.b=e},
f3u:function f3u(d){this.a=d},
f3i:function f3i(d,e){this.a=d
this.b=e},
f4L:function f4L(d,e){this.a=d
this.b=e},
f4S:function f4S(d){this.a=d},
f4T:function f4T(d,e){this.a=d
this.b=e},
f4U:function f4U(){},
f4M:function f4M(d,e){this.a=d
this.b=e},
f4K:function f4K(d,e){this.a=d
this.b=e},
f4N:function f4N(d,e){this.a=d
this.b=e},
f4J:function f4J(d,e){this.a=d
this.b=e},
f4O:function f4O(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4I:function f4I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4P:function f4P(d){this.a=d},
f4Q:function f4Q(d,e){this.a=d
this.b=e},
f4R:function f4R(d){this.a=d},
f4H:function f4H(d){this.a=d},
f4u:function f4u(d){this.a=d},
f4v:function f4v(d){this.a=d},
f4t:function f4t(d,e){this.a=d
this.b=e},
f4o:function f4o(d,e){this.a=d
this.b=e},
f4w:function f4w(d){this.a=d},
f4z:function f4z(d){this.a=d},
f4s:function f4s(d){this.a=d},
f4A:function f4A(d){this.a=d},
f4B:function f4B(d){this.a=d},
f4C:function f4C(d){this.a=d},
f4D:function f4D(d){this.a=d},
f4r:function f4r(d){this.a=d},
f4E:function f4E(d){this.a=d},
f4q:function f4q(d){this.a=d},
f4F:function f4F(d,e){this.a=d
this.b=e},
f4p:function f4p(d,e){this.a=d
this.b=e},
f4G:function f4G(d){this.a=d},
f4x:function f4x(d){this.a=d},
f4y:function f4y(d){this.a=d},
f48:function f48(d){this.a=d},
f47:function f47(d){this.a=d},
f49:function f49(d,e){this.a=d
this.b=e},
f46:function f46(d,e){this.a=d
this.b=e},
f4a:function f4a(d){this.a=d},
f40:function f40(d){this.a=d},
f4_:function f4_(d){this.a=d},
f41:function f41(d){this.a=d},
f3Z:function f3Z(d){this.a=d},
f42:function f42(d,e){this.a=d
this.b=e},
f3Y:function f3Y(d,e){this.a=d
this.b=e},
f3X:function f3X(d,e){this.a=d
this.b=e},
f3F:function f3F(d){this.a=d},
f3G:function f3G(d){this.a=d},
f3H:function f3H(d){this.a=d},
f3I:function f3I(d){this.a=d},
f3J:function f3J(d){this.a=d},
f3K:function f3K(d){this.a=d},
f3L:function f3L(d){this.a=d},
f3M:function f3M(d){this.a=d},
f3N:function f3N(d){this.a=d},
f30:function f30(d){this.a=d},
f31:function f31(d){this.a=d},
f32:function f32(d){this.a=d},
f33:function f33(d){this.a=d},
f34:function f34(d){this.a=d},
f3_:function f3_(d){this.a=d},
f35:function f35(d){this.a=d},
f36:function f36(d){this.a=d},
f3z:function f3z(d){this.a=d},
f3A:function f3A(d){this.a=d},
f3B:function f3B(d){this.a=d},
f3C:function f3C(d){this.a=d},
f3D:function f3D(d){this.a=d},
f3a:function f3a(d){this.a=d},
f3b:function f3b(d){this.a=d},
f3c:function f3c(d){this.a=d},
f3d:function f3d(d){this.a=d},
f3e:function f3e(d){this.a=d},
f39:function f39(d){this.a=d},
f3f:function f3f(d){this.a=d},
f38:function f38(d){this.a=d},
f3g:function f3g(d){this.a=d},
f37:function f37(d){this.a=d},
f43:function f43(d){this.a=d},
f3W:function f3W(d){this.a=d},
f3S:function f3S(d){this.a=d},
f3R:function f3R(d){this.a=d},
f3T:function f3T(d,e){this.a=d
this.b=e},
f3Q:function f3Q(d,e){this.a=d
this.b=e},
f3U:function f3U(d,e){this.a=d
this.b=e},
f3P:function f3P(d,e){this.a=d
this.b=e},
f3V:function f3V(d){this.a=d},
f4e:function f4e(d){this.a=d},
f4d:function f4d(d,e,f){this.a=d
this.b=e
this.c=f},
f4c:function f4c(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f4n:function f4n(d,e){this.a=d
this.b=e},
f4m:function f4m(d,e){this.a=d
this.b=e},
f3E:function f3E(d){this.a=d},
f4V:function f4V(d){this.a=d},
bir:function bir(d,e){this.b=d
this.a=e},
iqz(d){var w=A.a.i(d).length
if(w<=40)return 66
if(w<=80)return 54
if(w<=140)return 44
if(w<=220)return 36
return 30},
iqA(d,e){var w,v,u,t,s,r,q,p,o,n=B.ag("\\S+",!0,!1,!1,!1).kZ(0,d),m=B.C(n,B.a3(n).k("M.E"))
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
t=w.a+=A.a.aA(d,v,n)
p=m[r].b
p=A.a.aA(d,n,p.index+p[0].length)
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
v=t.index+t[0].length}n=w.a=n+A.a.b4(d,v)
return n.charCodeAt(0)==0?n:n},
bDW(){var w=$.bD1,v=$.RD
$.RD=v+1
return w+"_"+v},
ir(d,e,f,g,h,i,j){return C.em(A.bd,!1,4279310375,A.aH,"",i,24,A.bq,A.a8,"",h,C.bDW(),null,"","",0,!1,"",j,d,i,0,"",0,0,"",D.cn,D.f7,g,e,f)},
os(d,e,f,g){var w=f*9
return C.ir(D.eX,d-f/2,e-w/32,f,w/16,g,0)},
i9L(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=4279310375
switch(d.a){case 0:w=B.a([],x.u)
for(v=[0.12,0.26,0.4,0.54,0.68,0.82,0.94],u=v.length,t=e&16777215,s=t|855638016,r=0;r<u;++r){q=v[r]
p=$.bD1
o=$.RD
$.RD=o+1
w.push(new C.eO(p+"_"+o,D.f7,0,q,1,0.0016,"",24,A.a8,A.bq,A.aH,k,A.bd,null,D.bf,s,s,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}for(v=[0.18,0.5,0.82],u=v.length,s=t|570425344,r=0;r<u;++r){n=v[r]
p=$.bD1
o=$.RD
$.RD=o+1
w.push(new C.eO(p+"_"+o,D.f7,n,0,0.004,1,"",24,A.a8,A.bq,A.aH,k,A.bd,null,D.bf,s,s,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.os(0.88,0.1,0.5,f&16777215|855638016))
w.push(C.os(0.1,0.92,0.6,t|704643072))
return w
case 1:w=e&16777215
v=(w|2852126720)>>>0
u=f&16777215
t=(u|2852126720)>>>0
return B.a([C.ir(D.bf,0.08,0.08,0.5,0.003,v,0),C.ir(D.bf,0.58,0.08,0.004,0.06,v,0),C.ir(D.bf,0.58,0.14,0.34,0.003,v,0),C.ir(D.bf,0.92,0.14,0.004,0.08,(w|2281701376)>>>0,0),C.ir(D.bf,0.08,0.8,0.004,0.14,t,0),C.ir(D.bf,0.08,0.94,0.6,0.003,t,0),C.os(0.58,0.08,0.05,e),C.os(0.92,0.22,0.05,e),C.os(0.08,0.8,0.05,f),C.os(0.68,0.94,0.05,f),C.os(0.9,0.9,0.55,u|570425344)],x.u)
case 2:w=e&16777215
v=f&16777215
return B.a([C.ir(D.lx,0.62,0.04,0.34,0.2,w|855638016,0.2),C.ir(D.lx,0.02,0.74,0.42,0.24,v|771751936,-0.15),C.ir(D.lx,0.7,0.8,0.22,0.12,w|1140850688,0),C.ir(D.lx,0.05,0.05,0.16,0.09,v|1426063360,0)],x.u)
case 3:w=e&16777215
v=f&16777215
return B.a([C.os(0.5,0.5,1.5,w|335544320),C.os(0.5,0.5,1.15,w|402653184),C.os(0.5,0.5,0.8,v|436207616),C.os(0.95,0.05,0.4,v|855638016),C.os(0.05,0.97,0.5,w|704643072)],x.u)
case 4:w=e&16777215
v=f&16777215
return B.a([C.os(0.85,0.08,0.7,w|1140850688),C.os(0.1,0.35,0.5,v|855638016),C.os(0.9,0.62,0.55,v|771751936),C.os(0.15,0.95,0.8,w|939524096)],x.u)
case 5:w=e&16777215
v=f&16777215
return B.a([C.ir(D.bf,-0.1,0.7,1.2,0.06,w|671088640,-0.04),C.ir(D.bf,-0.1,0.78,1.2,0.07,v|872415232,0.035),C.ir(D.bf,-0.1,0.86,1.2,0.08,w|1073741824,-0.03),C.ir(D.bf,-0.1,0.94,1.2,0.1,v|1426063360,0.02),C.os(0.85,0.12,0.3,v|855638016)],x.u)
case 6:w=e&16777215
return B.a([C.os(0.5,0.2,0.65,(w|3422552064)>>>0),C.os(0.5,0.2,0.95,w|855638016),C.ir(D.bf,-0.05,0.84,1.1,0.2,2570782564,-0.02),C.ir(D.bf,-0.05,0.9,1.1,0.14,3139312459,0.02)],x.u)
case 7:w=e&16777215
return B.a([C.ir(D.kk,-0.1,0.78,0.7,0.2,w|1426063360,0),C.ir(D.kk,0.35,0.74,0.8,0.24,f&16777215|1711276032,0),C.ir(D.kk,0.15,0.86,0.6,0.14,1712265002,0),C.os(0.82,0.1,0.22,(w|2852126720)>>>0)],x.u)
case 8:w=B.a([],x.u)
for(m=0;m<16;++m){v=D.d9L[m]
u=A.o.F(m,3)===0
t=u?0.035:0.02
s=(m&1)===0?e:f
s=((u?255:170)<<24|s&16777215)>>>0
p=t*9
o=$.bD1
l=$.RD
$.RD=l+1
w.push(new C.eO(o+"_"+l,D.f7,v.a-t/2,v.b-p/32,t,p/16,"",24,A.a8,A.bq,A.aH,k,A.bd,null,D.eX,s,s,0,0,!1,"",0,D.cn,0,"","","","","",!1,0))}w.push(C.os(0.85,0.12,0.35,f&16777215|570425344))
return w
case 9:w=e&16777215
v=f&16777215|570425344
return B.a([C.ir(D.kk,0.35,-0.1,0.3,0.62,w|855638016,0),C.ir(D.kk,0.05,-0.1,0.3,0.55,v,-0.5),C.ir(D.kk,0.65,-0.1,0.3,0.55,v,0.5),C.os(0.5,0.04,0.45,w|1711276032)],x.u)
case 10:w=(f&16777215|2281701376)>>>0
return B.a([C.ir(D.bf,0.06,0.04,0.88,0.002,e,0),C.ir(D.bf,0.06,0.96,0.88,0.002,e,0),C.ir(D.bf,0.06,0.04,0.004,0.92,e,0),C.ir(D.bf,0.936,0.04,0.004,0.92,e,0),C.ir(D.bf,0.09,0.07,0.82,0.001,w,0),C.ir(D.bf,0.09,0.93,0.82,0.001,w,0)],x.u)
case 11:w=e&16777215
return B.a([C.ir(D.kl,-0.1,0.05,0.7,0.12,w|855638016,-0.1),C.ir(D.kl,0.45,0.78,0.7,0.1,f&16777215|1073741824,-0.1),C.ir(D.kl,-0.1,0.9,0.6,0.06,w|1426063360,-0.1)],x.u)
case 12:w=f&16777215
v=e&16777215
return B.a([C.ir(D.bf,0,0,0.3,0.09,w|1140850688,0),C.ir(D.bf,0.7,0.9,0.3,0.1,v|1426063360,0),C.ir(D.bf,0.82,0.04,0.12,0.07,w|771751936,0),C.ir(D.bf,0.04,0.82,0.18,0.08,v|855638016,0)],x.u)
case 13:w=e&16777215
v=w|1140850688
u=f&16777215|1140850688
return B.a([C.ir(D.eX,0.62,0.02,0.5,0.16,v,0.6),C.ir(D.eX,0.78,0.12,0.4,0.12,u,0.9),C.ir(D.eX,-0.12,0.8,0.5,0.16,u,-0.6),C.ir(D.eX,-0.05,0.9,0.4,0.12,v,-0.9),C.os(0.9,0.9,0.3,w|855638016)],x.u)
case 14:w=f&16777215|1711276032
return B.a([C.ir(D.bf,0.09,0.12,0.16,0.006,e,0),C.ir(D.bf,0.05,0.03,0.9,0.001,w,0),C.ir(D.bf,0.05,0.97,0.9,0.001,w,0)],x.u)}},
imX(d,e,f,g,h,i,j,k,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3){var w,v,u,t,s,r,q,p,o,n=4279310375,m=4280640491,l=4280172719
$.bD1=j
$.RD=0
w=A.a.i(a6)
if(w.length===0)w=d.y
v=A.a.i(f)
u=b1==null?d.x:b1
t=new C.fOj()
s=b3?0:d.e
r=b3?0:d.f
q=B.a([],x.u)
if(g!=null&&g.length!==0)q.push(C.em(A.bd,!1,n,A.aH,"ngmy_quote_background",m,24,A.bq,A.a8,"",1,C.bDW(),g,"","",0,!1,"",0,D.bf,l,2,"",0,0,"",D.cn,D.kj,1,0,0))
if(a9)A.d.u(q,C.i9L(d.d,d.r,d.w))
if(a7)q.push(t.$9$align$weight("\u201c",0.08,A.i.D(a8-0.13,0,1),0.84,0.1,200,d.r,e,A.u))
p=B.ag("[*~^]",!0,!1,!1,!1)
p=C.iqz(B.aL(w,p,""))
o=A.a.q(w,B.ag("[*^]",!0,!1,!1,!1))?0.85:1
q.push(new C.fOi(a8,h,k,e,b2,i).$3(w,p*b0*o,u))
if(v.length!==0)q.push(t.$10$align$style$weight("\u2014 "+v,0.09,A.i.D(a8+0.39,0,0.9),0.82,0.05,30,(u&16777215|3707764736)>>>0,e,A.cJ,A.a8))
p=u&16777215
q.push(t.$8$weight("NGMY",0.3,0.925,0.4,0.028,22,(p|3003121664)>>>0,A.u))
q.push(t.$8$weight("New Global Movement for Youth",0.1,0.96,0.8,0.025,14,(p|2566914048)>>>0,A.a8))
if(a0!=null&&a0.length!==0)q.push(C.em(A.bd,!1,n,A.aH,"ngmy_quote_logo",m,24,A.bq,A.a8,a1,a3*9/16,C.bDW(),a0,"","",0,!1,a2,0,D.bf,l,2,"",0,0,"",D.cn,D.kj,a3,a4,a5))
return C.t3(s,r,0,0,q,j+"_slide",D.r5,"","","",D.dr)},
t2:function t2(d,e){this.a=d
this.b=e},
mx:function mx(d,e,f,g,h,i,j,k,l,m){var _=this
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
fOj:function fOj(){},
fOi:function fOi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
i_B(d){var w,v,u,t,s
if(!x.f.b(d))return null
w=J.a8(d)
v=B.bj(B.w(w.h(d,"at")))
u=w.h(d,"outline")
t=B.w(u==null?"":u)
if(v==null||t.length===0)return null
u=x.j
if(u.b(w.h(d,"extras"))){u=J.b8(u.a(w.h(d,"extras")),new C.clR(),x.N)
s=B.C(u,u.$ti.k("ak.E"))}else s=B.a([],x.s)
u=v.bU()
w=w.h(d,"request")
return new C.Ab(u,t,s,B.w(w==null?"":w))},
fWf(){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$fWf=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if($.hAa){w=1
break}$.hAa=!0
t=4
w=7
return B.b(B.aA(),$async$fWf)
case 7:r=e
q=B.aV(J.t(r.a,"ngmy_slides_ai_history_v1"))
if(q==null||q.length===0){w=1
break}p=A.W.aP(0,q,null)
if(!x.f.b(p)){w=1
break}for(k=J.i6(p),k=k.gae(k),j=x.j,i=x.e8;k.C();){o=k.gP(k)
n=B.a([],i)
if(j.b(o.b))for(h=J.aT(j.a(o.b));h.C();){m=h.gP(h)
l=C.i_B(m)
if(l!=null)J.c5(n,l)}$.Dq.c1(0,B.w(o.a),new C.fWg(n))}C.hg7()
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
return B.i($async$fWf,v)},
hg7(){var w,v=new B.V(Date.now(),0,!1).bS(-12e8)
for(w=new B.dn($.Dq,$.Dq.r,$.Dq.e);w.C();)J.nY(w.d,new C.fAH(v))
$.Dq.bq($.Dq,new C.fAI())},
aQG(){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$aQG=B.e(function(d,a0){if(d===1){t.push(a0)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$aQG)
case 6:s=a0
m=x.N
l=x.z
r=B.T(m,l)
for(k=new B.cd($.Dq,B.a3($.Dq).k("cd<1,2>")).gae(0),j=x.d;k.C();){i=k.d
i.toString
q=i
i=q.a
p=B.a([],j)
for(h=J.aT(q.b);h.C();){o=h.gP(h)
g=o
J.c5(p,B.J(["at",g.a.aa().ag(),"outline",g.b,"extras",g.c,"request",g.d],m,l))}J.aK(r,i,p)}n=r
w=7
return B.b(s.aC("String","ngmy_slides_ai_history_v1",A.W.av(n,null)),$async$aQG)
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
return B.i($async$aQG,v)},
irh(d,e,f,g){var w,v,u
if(d.length===0||A.a.i(f).length===0)return
C.hg7()
w=$.Dq.c1(0,d,new C.fWi())
v=Date.now()
u=B.C(e,B.a3(e).k("ci.E"))
J.n7(w,0,new C.Ab(new B.V(v,0,!1),f,u,g))
C.aQG()},
ire(d){var w,v=$.Dq.h(0,d)
if(v==null||J.ct(v))return
w=J.cE(v)
w.cH(v,0)
if(w.gau(v))$.Dq.W(0,d)
C.aQG()},
Ab:function Ab(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
clR:function clR(){},
fWg:function fWg(d){this.a=d},
fAH:function fAH(d){this.a=d},
fAI:function fAI(){},
fWi:function fWi(){},
irj(d){return A.d.dL(D.xe,new C.fWl(d),new C.fWm())},
i_z(d){var w
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
i_y(d){var w
switch(d.a){case 0:w=D.aqI
break
case 1:w=A.zA
break
case 2:w=A.Qc
break
case 3:w=I.aqq
break
case 4:w=A.arc
break
case 5:w=A.mn
break
default:w=null}return w},
icT(d){var w,v,u,t=A.a.i(d).toLowerCase()
if(t.length===0)return null
for(w=0;w<109;++w){v=D.Sk[w]
if(v.toLowerCase()===t)return v}for(w=0;w<109;++w){v=D.Sk[w]
if(!B.cR(v.toLowerCase(),t,0))u=B.cR(t,v.toLowerCase(),0)
else u=!0
if(u)return v}return null},
i_A(d){var w,v,u,t,s,r,q,p,o=B.a([],x.ez)
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
o.push(q)}return A.W.av(B.J(["title",d.a,"style",d.b,"logo_frame",d.d,"logo_ring",d.e,"photo_frame",d.f,"photo_ring",d.r,"slides",o],u,t),null)},
irf(d,e,f,g,h){var w=new B.N(D.xe,new C.fWe(),x.eC).aM(0,", "),v=""+d,u=C.hG7(h),t=F.fPI(h),s=C.hBT(g),r=e.q(0,D.JG)?'- New slides get an "emoji".\n':"",q=e.q(0,D.JH)?'- New slides get an "icon3d" from: '+A.d.aM(D.Sk,", ")+".\n":"",p=e.q(0,D.Eq)?'- New content slides get an "image_query" (2-3 English words).\n':""
return"You edit an existing presentation. Here it is as JSON:\n"+f+"\n\nThe presenter is looking at slide "+v+'.\n\nWHAT THEY WANT CHANGED (may be informal):\n"""'+h+'"""\n\nRules:\n- Do exactly what they ask: add, remove, move, shorten, lengthen or rewrite slides, change the tone, the language or the style ('+w+'). "This slide" / "here" means slide '+v+". New slides go where they say (or right after slide "+v+').\n- Keep every slide they did not ask about exactly as it is.\n- Same limits as before: titles max 7 words, 3 to 5 bullets of max 12 words, never invent prices, dates or statistics.\n- LANGUAGE: keep the presentation\'s current language unless they ask for another one; if they do, translate EVERY slide. JSON keys and the "kind", "style", "icon3d" and "image_query" values stay in English.\n- TRANSLATING OR REWORDING: change only the words. Keep "style", "kind", "emoji", "icon3d", "image_query", "picture" and the frame/ring values exactly as they are, with the same number of slides and bullets.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+u+"\n"+t+'\n- Keep "logo_frame", "logo_ring", "photo_frame" and "photo_ring" unless they ask to change how the logo or pictures look.\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+s+"\n"+r+q+p+'- Reply with the WHOLE presentation as JSON only, no markdown, same shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"...","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
irg(d,e,f,g,h,i){var w,v,u,t,s='- "emoji": ONE emoji that fits the slide (e.g. \ud83c\udf89 \ud83d\ude80 \ud83c\udf3f \ud83d\udca1).\n',r=f?"- A document is attached (read it all). Rewrite its content as the slides in the same language: keep its facts, names, numbers, dates and the order of its sections, and never invent facts it does not contain.\n":"",q=new B.N(D.xe,new C.fWh(),x.eC).aM(0,", "),p=new B.fg("")
if(e.q(0,D.JG)){p.a=s
w=s}else w=""
if(e.q(0,D.JH))w=p.a=w+('- "icon3d": ONE name copied exactly from this list that fits the slide: '+A.d.aM(D.Sk,", ")+".\n")
if(e.q(0,D.Eq))p.a=w+'- "image_query": 2-3 simple English words for a real photo that fits the slide (e.g. "city skyline", "students classroom").\n'
w=C.hG7(d)
v=F.fPI(d)
u=C.hBT(g)
t=i==="auto"?"pick the best of: "+q+" (match the mood they describe: nature, vibe, celebration, colorful, professional...)":'use "'+i+'"'
return'You design presentation slides. Write a presentation from the user\'s request.\n\nUSER REQUEST (spoken, may be informal):\n"""'+d+'"""\n\nRules:\n'+r+"- Exactly "+h+' slides.\n- Slide 1 has kind "title". The last slide has kind "closing" (thank-you / call to action).\n- Middle slides mostly kind "bullets" (3 to 5 short bullets, max 12 words each). You may use one "section" divider and one "quote" slide when it fits.\n- Titles are short and punchy (max 7 words). Use the user\'s own names, facts and details; never invent prices, dates or statistics they did not give.\n- "notes": 1-2 sentences the presenter can say.\n- LANGUAGE: if the request names a language (e.g. "in Swahili", "en fran\xe7ais", "en espa\xf1ol", "in Arabic"), write EVERY title, subtitle, bullet and note in that language, with correct spelling and accents. If no language is named, write in the language the request itself is written in. Keep the JSON keys and the "kind", "style", "icon3d" and "image_query" values in English.\n- VOICE: write the way a real, friendly person talks and writes to someone they respect. Short plain sentences. Everyday words that people really use today. No corporate or robotic phrasing ("leverage", "synergy", "empower the ecosystem", "in today\'s dynamic landscape"), no made-up or rare words, no stacked jargon, no lecture tone. Explain the Civic registry, the AI, and any other topic the way you would explain it to a neighbour. If the language is Swahili, use the Swahili people speak and write every day in Kenya and Tanzania: real common words, natural word order, and never an English word forced into Swahili grammar or an invented Swahili word. Check that each word is one an ordinary speaker would understand.\n'+w+"\n"+v+'\n- PICTURE LOOK: "logo_frame" and "photo_frame" are one of: circle, rounded, triangle, hexagon, diamond, arch, or "" (as is). "logo_ring" and "photo_ring" are one of: gold, platinum, glow, rainbow, double, neon, framed, rosegold, jewels, aurora, or "" (none). Follow what the request says (e.g. "my picture in a circle with a gold ring"); if it says nothing, choose what suits the look (luxury \u2192 gold, neon/night \u2192 neon, clean \u2192 rounded with no ring).\n- BIO LINK: if they ask to put their bio link / link page / socials / "my links" in the presentation, add ONE slide with kind "bio" (title like "Connect with me", a one-line inviting subtitle) \u2014 usually just before the closing slide, or where they say. Their real Bio page (with clickable links) is shown on a phone on that slide.\n'+u+'\n- "style": '+t+".\n"+p.v(0)+'- Reply with JSON only, no markdown, in this shape:\n{"title":"...","style":"...","logo_frame":"","logo_ring":"","photo_frame":"","photo_ring":"","slides":[{"kind":"title","title":"...","subtitle":"...","bullets":[],"notes":"...","emoji":"","icon3d":"","image_query":""}]}\n'},
aiD(a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2="bullets",a3=A.a.i(a6),a4=J.DQ(a3,"{"),a5=J.h84(a3,"}")
if(a4<0||a5<=a4)return a1
a3=J.Mp(a3,a4,a5+1)
try{w=A.W.aP(0,a3,a1)
q=x.f
if(!q.b(w))return a1
v=J.t(w,"slides")
p=x.j
if(!p.b(v)||J.ct(v))return a1
u=B.a([],x.aC)
for(o=J.aT(v),n=x.s,m=x.N;o.C();){t=o.gP(o)
if(!q.b(t))continue
if(p.b(J.t(t,a2))){l=J.b8(p.a(J.t(t,a2)),new C.fU5(),m).c_(0,new C.fU6())
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
f=C.icT(B.w(f==null?"":f))
if(f==null)f=""
e=J.t(t,"image_query")
if(e==null)e=J.t(t,"imageQuery")
e=A.a.i(B.w(e==null?"":e))
d=J.t(t,"picture")
d=B.cb(B.w(d==null?0:d),a1)
if(d==null)d=0
J.c5(u,new C.a9r(l.toLowerCase(),j,i,s,h,g,f,e,d))}if(J.ad(u)===0)return a1
q=J.t(w,"style")
r=A.a.i(B.w(q==null?a7:q)).toLowerCase()
q=J.t(w,"title")
q=A.a.i(B.w(q==null?J.fm(u).b:q))
p=A.d.aU(D.xe,new C.fU7(r))?r:a7
o=C.fzW(J.t(w,"logo_frame"),D.DM)
n=C.fzW(J.t(w,"logo_ring"),D.DF)
m=C.fzW(J.t(w,"photo_frame"),D.DM)
l=C.fzW(J.t(w,"photo_ring"),D.DF)
return new C.atk(q,p,u,o,n,m,l)}catch(a0){return a1}},
a37(d,e){return(A.o.D(e,0,255)<<24|d&16777215)>>>0},
hFd(f9,g0,g1,g2,g3,g4,g5,g6,g7,g8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4=null,e5="title",e6="orb1",e7="drift",e8="orb2",e9="logo",f0="hero",f1="photo",f2="float3d",f3="bar",f4="pulse",f5="sub",f6=g2.q(0,D.Er),f7=f6?C.i6l():e4,f8=f7==null
if(f8)w=e4
else{v=new B.e0()
v.cU(f7.w+1)
u=f7.a
t=B.bp(u.b,!0,x.dL)
A.d.e0(t,v)
s=u.c
s=new C.of("luxe",u.a,A.mn,t,u.e,u.f,B.a([s,u.d,s],x.t),D.dr)
w=s}if(w==null)w=C.irj(f9.b)
r=g2.q(0,D.a92)||f6
q=g2.q(0,D.JG)
p=g2.q(0,D.Ul)
o=new C.fOn()
n=B.a([],x.g)
m=new C.fOq(o,w,r)
l=new C.fOp(o,r)
k=new C.fOo(o,r)
j=(g3==null?"":g3).length!==0
u=f9.c
for(s=w.w,f8=!f8,i=g7==null,h=g6==null,g=f9.f,f=f9.r,e=g5==null,d=g4==null,a0=f9.d,a1=f9.e,a2=w.f,a3=w.d,a4=w.r,a5=x.u,a6=J.a8(g0),a7=!A.d.aU(u,new C.fOm(g8)),a8=g1==null,a9=x.s,b0=0,b1=0;b1<u.length;b1=b6){b2=u[b1]
b3=a3[A.o.F(b1,a3.length)]
b4=A.o.F(b1,3)
b5=a4[b4]
b6=b1+1
b7=a4[b6%3]
b8=A.o.F(b1,5)
b9=D.dbs[b8]
c0=D.dai[b8]
c1=B.a([],a5)
c2=a6.h(g0,b1)
c3=c2==null
c4=c3?e4:c2.a
c5=c3?e4:c2.b
c3=b2.x
c6=c3>0&&c3<=g8.length
if(c6)c5=g8[c3-1]
else if(g8.length!==0&&a7&&!D.fgP.q(0,b2.a)){c7=b0+1
c5=g8[A.o.F(b0,g8.length)]
b0=c7}c8=q?b2.f:""
c3=c5==null
c9=c3?c4:c5
if(c6)d0=c5
else d0=c4==null?c5:c4
d1=!c6&&c4!=null
if(p)c1.push(l.$7$key(D.eX,0.62-b8*0.36,-0.55+b4*0.18,1.15,2,(A.o.D(31,0,255)<<24|b5&16777215)>>>0,"pano"))
A:{d2=b2.a
if("title"===d2){c1.push(l.$8$fx$key(D.eX,0.7,-0.25,0.46,0.82,(A.o.D(51,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eX,-0.08,0.68,0.24,0.43,(A.o.D(46,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.04,0.18,0.27,D.na,450,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.04,0.16,0.28,c0,500,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.04,0.2,0.24,64,A.K,D.r6,500,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.4,0.66,0.2,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.08,0.33,0.84,0.3,54,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.12,0.7,0.76,0.14,24,A.K,a2,300,f5))
d3=D.Ui
break A}if("section"===d2){c1.push(l.$8$fx$key(D.eX,0.64,0.46,0.42,0.75,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
if(d0!=null){b4=!c3&&!d1?f1:f0
c1.push(k.$8$anim$fx$key(d0,0.7,0.2,0.24,0.44,c0,d1?f2:"",b4))}else c1.push(l.$9$fx$key$rotation(D.lx,0.78,0.1,0.18,0.32,(A.o.D(64,0,255)<<24|b7&16777215)>>>0,e7,e8,0.3))
c1.push(l.$8$fx$key(D.bf,0.08,0.6,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.08,0.34,0.62,0.24,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.08,0.64,0.6,0.14,22,a2,250,f5))
d3=D.Eo
break A}if("quote"===d2){b4=b5&16777215
c1.push(l.$8$fx$key(D.eX,-0.12,-0.2,0.36,0.64,(A.o.D(36,0,255)<<24|b4)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eX,0.82,0.66,0.26,0.46,(A.o.D(38,0,255)<<24|b7&16777215)>>>0,e7,e8))
c1.push(m.$11$anim$color$fx$key$weight("\u201c",0.06,0.02,0.2,0.36,140,D.na,(A.o.D(204,0,255)<<24|b4)>>>0,f4,"quote",A.u))
c1.push(m.$11$align$anim$key$style$weight(b2.b,0.12,0.3,0.76,0.34,36,A.K,b9,e5,A.cJ,A.O))
b4=b2.c
c1.push(m.$10$align$color$delay$key(b4.length===0?"":"\u2014 "+b4,0.12,0.68,0.76,0.12,22,A.K,a2,300,f5))
if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,j?0.72:0.82,0.06,0.12,0.2,52,A.K,D.r6,500,f2,f0))
d3=D.n9
break A}if("bio"===d2)b4=(a8?"":g1).length!==0
else b4=!1
if(b4){c1.push(l.$8$fx$key(D.eX,0.58,0.04,0.44,0.8,(A.o.D(42,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.bf,0.08,0.62,0.14,0.014,b5,f4,f3))
b4=b2.b
c1.push(m.$9$anim$key$weight(c8.length===0?b4:c8+"  "+b4,0.07,0.3,0.52,0.28,46,b9,e5,A.u))
c1.push(m.$9$color$delay$key(b2.c,0.07,0.66,0.5,0.16,22,a2,250,f5))
b4=o.$0()
g1.toString
b8=r?D.vw:D.cn
c1.push(new C.eO(b4,D.a90,0.64,0.05,0.27,0.9,g1,24,A.a8,A.bq,A.aH,4279310375,A.bd,e4,D.bf,4280640491,4280172719,2,0,!1,"",0,b8,r?350:0,"bio","","","","",!1,0))
d3=D.n9
break A}if("closing"===d2){c1.push(l.$8$fx$key(D.eX,-0.15,-0.3,0.5,0.9,(A.o.D(46,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$8$fx$key(D.eX,0.78,0.62,0.3,0.54,(A.o.D(51,0,255)<<24|b7&16777215)>>>0,e7,e8))
if(j){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.41,0.05,0.18,0.27,D.na,400,e9))}else if(d0!=null){b4=d1?f0:f1
c1.push(k.$9$anim$delay$fx$key(d0,0.42,0.05,0.16,0.28,c0,450,d1?f2:"",b4))}else if(c8.length!==0)c1.push(m.$11$align$anim$delay$fx$key(c8,0.4,0.05,0.2,0.24,64,A.K,D.r6,450,f2,f0))
c1.push(l.$8$fx$key(D.bf,0.42,0.61,0.16,0.012,b5,f4,f3))
c1.push(m.$10$align$anim$key$weight(b2.b,0.1,0.34,0.8,0.26,52,A.K,b9,e5,A.u))
c1.push(m.$10$align$color$delay$key(b2.c,0.14,0.65,0.72,0.16,24,A.K,a2,300,f5))
d3=D.Ui
break A}d4=b2.d
if(d4.length===0&&b2.c.length!==0)d4=B.a([b2.c],a9)
d5=c9!=null
d6=(b1&1)===1&&d5
d7=d6?0.4:0.07
b4=d6?-0.1:0.8
c1.push(l.$8$fx$key(D.eX,b4,0.52,0.3,0.54,(A.o.D(36,0,255)<<24|b7&16777215)>>>0,e7,e8))
b4=d6?0.86:-0.12
c1.push(l.$8$fx$key(D.eX,b4,-0.18,0.26,0.46,(A.o.D(30,0,255)<<24|b5&16777215)>>>0,e7,e6))
c1.push(l.$7$key(D.bf,d6?0.988:0,0,0.012,1,b5,"rail"))
b4=b2.b
b4=c8.length===0?b4:c8+"  "+b4
c1.push(m.$9$anim$key$weight(b4,d7,0.08,d5?0.53:0.86,0.16,38,b9,e5,A.u))
c1.push(l.$8$fx$key(D.bf,d7,0.25,0.12,0.012,b5,f4,f3))
b4=A.d.aM(d4,"\n")
b8=d5?0.53:0.7
c1.push(m.$11$anim$bullets$color$delay$key(b4,d7,0.31,b8,0.6,d4.length>4?21:24,D.JE,!0,a2,250,f5))
if(d5){d8=!c3
d9=d8?0.29:0.24
if(d6)e0=0.06
else e0=d8?0.67:0.7
b4=d8?0.22:0.26
b8=d8?0.56:0.44
c3=d8?f1:f0
c1.push(k.$9$anim$delay$fx$key(c9,e0,b4,d9,b8,c0,400,d8?"":f2,c3))}d3=D.n9}if(j&&d2!=="title"&&d2!=="closing"){g3.toString
c1.push(k.$8$anim$delay$key(g3,0.885,0.035,0.085,0.13,D.dr,200,e9))}for(b4=c1.length,e1=0;e1<b4;++e1){e2=c1[e1]
b8=e2.fx
if(b8==="logo"){e2.go=d?a0:g4
e2.id=e?a1:g5}else if(b8==="photo"){e2.go=h?g:g6
e2.id=i?f:g7}}if(f8)C.i82(c1,b1,o,f7)
b4=o.$0()
if(f8){b8=f7.r
b8=b8[A.o.F(b1,b8.length)]}else b8=r?D.dDn[A.o.F(b1,6)]:s
n.push(new C.lj(b4,b2.b,b2.e,d3,b3.a,b3.b,b8,0,"",0,c1))}e3=A.a.i(f9.a)
if(e3.length===0)e3="AI Presentation"
f8=o.$0()
return C.Cq(e4,e4,e4,e4,D.En,5,!1,e4,e4,e4,e4,e4,f8,e4,!1,e4,e3.length>60?A.a.aA(e3,0,60):e3,e4,e4,n,"office_blue",e4,!1,e4)},
fQL(d,e){var w=0,v=B.j(x.gI),u,t,s,r,q,p,o,n,m
var $async$fQL=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:o=e.q(0,D.Eq)
n=e.q(0,D.JH)
if(!o&&!n){u=D.a7O
w=1
break}t=B.a([],x.d5)
for(s=d.c,r=0;r<s.length;++r)t.push(new C.fQO(o,s[r],n,$.ibC,r).$0())
s=B.T(x.S,x.aH)
m=J
w=3
return B.b(B.iK(t,x.e),$async$fQL)
case 3:q=m.aT(g)
case 4:if(!q.C()){w=5
break}p=q.gP(q)
s.n(0,p.a,p.b)
w=4
break
case 5:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fQL,v)},
fPL(d,e,f,g,h,i,j,k,l){var w=0,v=B.j(x.I),u,t,s
var $async$fPL=B.e(function(m,n){if(m===1)return B.f(n,v)
for(;;)switch(w){case 0:h.$1("Writing your "+j+" slides\u2026")
t=i.length
t=C.irg(d,e,k.length!==0,t,j,l)
s=C
w=3
return B.b(C.aPZ(t,"The AI could not write the slides. Try describing it again.",l==="auto"?"colorful":l,k),$async$fPL)
case 3:u=s.aQl(n,e,h,f,g,i)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fPL,v)},
bFB(d,e,f,g,h,i,j,k){var w=0,v=B.j(x.I),u,t,s,r,q,p,o
var $async$bFB=B.e(function(l,m){if(l===1)return B.f(m,v)
for(;;)switch(w){case 0:if(e.length!==0){t=B.aR(x.N)
for(s=B.e_(f,f.r,B.a3(f).c),r=s.$ti.c;s.C();){q=s.d
t.I(0,(q==null?r.a(q):q).b)}C.irh(e,t,i,k)}if(h!=null)h.$1("Making your changes\u2026")
p=C.aiD(i,"colorful")
t=C.irf(d,f,i,j.length,k)
s=p==null?null:p.b
o=C
w=3
return B.b(C.aPZ(t,"The AI could not make that change. Try saying it another way.",s==null?"colorful":s,A.i1),$async$bFB)
case 3:u=o.aQl(m,f,h,g,D.eiV,j)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bFB,v)},
aPZ(d,e,f,g){var w=0,v=B.j(x.dO),u,t,s,r,q,p,o,n
var $async$aPZ=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(B.vV(null,""),$async$aPZ)
case 3:n=i
if(A.a.i(n).length===0)throw B.X("AI is not set up yet. AI is not available right now. Please try again later.")
t=B.ns(n)
s=null,r=0
case 4:if(!(r<2)){w=6
break}w=7
return B.b(B.rm(t,d,g,"slides",null),$async$aPZ)
case 7:q=i
p=q.b
if(p!=null){o=C.aiD(p,f)
if(o!=null){u=o
w=1
break}}else s=q.a
case 5:++r
w=4
break
case 6:throw B.X(s!=null&&B.M3(s)?"No internet connection \u2014 try again when you are online.":e)
case 1:return B.h(u,v)}})
return B.i($async$aPZ,v)},
aQl(d,e,f,g,h,i){var w=0,v=B.j(x.I),u,t,s,r,q,p,o,n,m,l
var $async$aQl=B.e(function(j,k){if(j===1)return B.f(k,v)
for(;;)switch(w){case 0:w=e.q(0,D.Eq)||e.q(0,D.JH)?3:5
break
case 3:if(f!=null)f.$1("Adding pictures and 3D art\u2026")
if(i.length===0)t=e
else{t=B.d0(e,x.Q)
t.W(0,D.Eq)}w=6
return B.b(C.fQL(d,t),$async$aQl)
case 6:s=k
w=4
break
case 5:s=D.a7O
case 4:t=d.c
w=A.d.aU(t,new C.fsl())?7:9
break
case 7:r=$.hH2
r=r==null?null:r.$0()
w=10
return B.b(x.gc.b(r)?r:B.dN(r,x.aP),$async$aQl)
case 10:q=k
p=q!=null?A.W.av(q.aj(),null):null
w=8
break
case 9:p=null
case 8:r=h.a
o=h.b
n=h.c
m=h.d
l=C.hFd(d,s,p,e,g,r,o,n,m,i)
if(r==null)r=d.d
if(o==null)o=d.e
if(n==null)n=d.f
if(m==null)m=d.r
l.CW=C.i_A(new C.atk(d.a,d.b,t,r,o,n,m))
m=l.r
n=B.U(m).k("N<1,n>")
t=B.C(new B.N(m,new C.fsm(),n),n.k("ak.E"))
l.cx=t
t=B.a3(e).k("kc<ci.E,n>")
t=B.C(new B.kc(e,new C.fsn(),t),t.k("M.E"))
l.cy=t
l.ay=e.q(0,D.Ul)
u=l
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aQl,v)},
hjc(d){var w,v,u,t=d.cy
if(t==null)t=A.Z
w=B.aR(x.Q)
for(v=0;v<6;++v){u=D.a6y[v]
if(A.d.q(t,u.b))w.I(0,u)}return w},
ivd(d){return B.bT(A.L,null,new C.h4T(),d,!0,!0,!0,null,!1,!1,x.I)},
i6Z(d,e){var w,v=e.toLowerCase()
if(A.a.c7(v,".png"))w="image/png"
else w=A.a.c7(v,".webp")?"image/webp":"image/jpeg"
return"data:"+w+";base64,"+A.cS.gcs().aN(d)},
ivc(d,e,f){return B.bT(A.L,null,new C.h4S(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
hjd(d){var w,v,u,t,s,r,q,p
for(w=d.r,v=w.length,u=0;u<v;++u)for(t=w[u].z,s=t.length,r=0;r<s;++r){q=t[r]
if(q.fx==="logo"){p=q.at
p=(p==null?"":p).length!==0}else p=!1
if(p)return q.at}return null},
hje(d){var w,v,u,t,s,r,q,p,o=B.a([],x.s)
for(w=d.r,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u)for(t=w[u].z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
p=q.at
if(p==null)p=""
if(q.fx==="photo"&&p.length!==0&&!A.d.q(o,p))o.push(p)}return o},
fzW(d,e){var w=A.a.i(B.w(d==null?"":d)).toLowerCase()
return A.d.aU(e,new C.fzX(w))?w:""},
hBT(d){var w,v
if(d<=0)return""
w=""+d
v=d===1?"":"s"
return"- THEIR PICTURES: they uploaded "+w+" picture"+v+" of their own, numbered 1 to "+w+' in the order they picked them. Put "picture": <number> on each slide where one belongs, following exactly what they say (e.g. "picture 2 on the team slide", "first picture on the title"). If they don\'t say, spread them over the content slides in order. Use 0 where no picture is wanted.'},
hH0(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0="colorful",a1=a4.CW,a2=C.aiD(a1==null?"":a1,a0),a3=C.aiD(a5,a0)
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
for(v=t.length,r=a4.r,q=B.U(r).k("Y<1>"),p=0;p<t.length;t.length===v||(0,B.I)(t),++p){o=B.nF(new B.Y(r,new C.fWn(t[p]),q))
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
g=B.C(new B.Y(k,new C.fWo(),v),r)
A.d.b_(g,new C.fWp())
if(g.length===0)continue
f=new C.fWq(g)
e=s[n]
for(k=e.z,j=k.length,p=0;p<k.length;k.length===j||(0,B.I)(k),++p){d=k[p]
i=d.r
if(i.length!==0)d.r=f.$1(i)}e.c=f.$1(e.c)}if(A.a.i(a4.b)===A.a.i(a2.a)&&A.a.i(a3.a).length!==0)a4.b=A.a.i(a3.a)
a4.CW=a5
return!0},
irA(d){var w=d.toLowerCase(),v=B.ag("\\b(fit|fits|fitting|overflow|overflowing|reframe|inside|too big|out of the|going under|under the slide|below the slide)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.aMq
v=B.ag("\\b(smaller|shrink|reduce|decrease|make .{0,20}small|less big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.ekO
v=B.ag("\\b(bigger|larger|increase|enlarge|grow|make .{0,20}big)\\b",!0,!1,!1,!1)
if(v.b.test(w))return D.ekP
return null},
hBs(d,e,f,g){var w,v,u,t=d.e,s=d.f,r=Math.max(1,A.i.bg(t*f/(e*0.55)))
for(t=d.r.split("\n"),w=t.length,v=0,u=0;u<w;++u)v+=Math.max(1,A.i.cB(t[u].length/r))
return v*e*1.3<=s*g+0.5&&d.d+d.f<=1.001},
irk(a0,a1,a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=a0.r,d=e.length
if(d===0)return!1
e=a3?e:B.a([e[A.o.D(a1,0,d-1)]],x.g)
w=a0.d===D.oZ
v=w?540:960
u=w?960:540
for(d=e.length,t=a2.a,s=!1,r=0;r<e.length;e.length===d||(0,B.I)(e),++r)for(q=e[r].z,p=q.length,o=0;o<q.length;q.length===p||(0,B.I)(q),++o){n=q[o]
if(n.b!==D.d3)continue
m=n.w
l=n.c
k=n.d
switch(t){case 0:n.w=A.i.D(m*0.85,10,120)
break
case 1:j=A.i.D(m*1.15,10,120)
if(C.hBs(n,j,v,u))n.w=j
break
case 2:i=m
h=0
for(;;){g=!1
if(!C.hBs(n,i,v,u))if(n.w>10){f=h+1
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
iri(d,e){var w,v,u,t,s,r,q,p,o=d.b,n=C.aiD(o,"colorful")
if(n==null)throw B.X("That earlier version could not be read.")
w=B.aR(x.Q)
for(v=d.c,u=v.length,t=0;t<v.length;v.length===u||(0,B.I)(v),++t){s=v[t]
for(r=0;r<6;++r){q=D.a6y[r]
if(q.b===s)w.I(0,q)}}v=C.hjd(e)
u=C.hje(e)
p=C.hFd(n,D.a7O,null,w,v,n.d,n.e,n.f,n.r,u)
p.CW=o
o=p.r
u=B.U(o).k("N<1,n>")
o=B.C(new B.N(o,new C.fWj(),u),u.k("ak.E"))
p.cx=o
o=w.$ti.k("kc<ci.E,n>")
o=B.C(new B.kc(w,new C.fWk(),o),o.k("M.E"))
p.cy=o
p.ay=w.q(0,D.Ul)
return p},
iv_(d,e,f){return B.bT(A.L,null,new C.h45(f,e),d,!0,!0,!0,null,!1,!1,x.I)},
i6l(){var w,v,u,t=1000*Date.now()&2147483647,s=new B.e0()
s.cU(t)
w=D.cP6[s.aw(10)]
v=new C.erh(s)
u=x.N
return new C.erg(w,s.aw(4),J.fm(v.$1$2(D.dgk,1,x.ff)),w.r[s.aw(3)],v.$1$2(D.dyk,2+s.aw(2),u),v.$1$2(D.dqB,2,u),v.$1$2(D.dBM,4,x.fP),t)},
i82(a2,a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g="lux_frame",f="goldframe",e="lux_emblem",d=a5.a,a0=d.c,a1=new B.e0()
a1.cU(a5.w+a3*13)
w=new C.foE(a4)
v=new C.foG(a4,d)
u=new C.foF(w,a5,a0,d)
for(t=a2.length,s=d.f,r=d.d,q=0;q<a2.length;a2.length===t||(0,B.I)(a2),++q){p=a2[q]
if(p.b===D.d3){o=p.fx
if(o==="title"){p.Q=r
p.fy="shimmer@"+A.a.b0(A.o.ft(r,16),8,"0").toUpperCase()}else if(o==="sub"||o==="body")p.Q=s}if(p.fx==="bar")p.fy="shimmer@"+A.a.b0(A.o.ft(r,16),8,"0").toUpperCase()}t=a5.e
n=t[A.o.F(a3,t.length)]
if(n==="spotlight")A.d.c9(a2,0,w.$8(D.eX,0.1+a1.ai()*0.45,0.05+a1.ai()*0.3,0.45,0.75,C.a37(a0,52),"lux_spot",a5.xh(0,"spotlight")))
else A.d.c9(a2,0,w.$8(D.bf,0,0,1,1,0,"lux_back",a5.xh(0,n)))
m=t[(a3+1)%t.length]
t=a3&1
if(t===1&&m!==n&&m!=="spotlight")A.d.c9(a2,1,w.$8(D.bf,0,0,1,1,0,"lux_back2",a5.aHL(0,m,r)))
switch(a5.b){case 0:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.022,0.038,0.956,0.924,0,g,a5.xh(0,f),D.dr,150,C.a37(a0,176),1.6))
a2.push(u.$4(0.022,0.038,"lux_c1",300))
a2.push(u.$4(0.978,0.038,"lux_c2",380))
a2.push(u.$4(0.022,0.962,"lux_c3",460))
a2.push(u.$4(0.978,0.962,"lux_c4",540))
break
case 1:a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.018,0.032,0.964,0.936,0,g,a5.xh(0,f),D.dr,120,C.a37(a0,200),2))
a2.push(w.$12$anim$delay$stroke$strokeWidth(D.bf,0.034,0.06,0.932,0.88,0,"lux_frame2","",D.dr,260,C.a37(a0,112),0.8))
a2.push(u.$5$size(0.5,0.032,"lux_c1",420,0.026))
a2.push(u.$5$size(0.5,0.968,"lux_c2",480,0.026))
break
case 2:a2.push(w.$10$anim$delay(D.bf,0,0,1,1,0,"lux_filigree",a5.xh(0,"filigree"),D.dr,200))
break
default:a2.push(w.$10$anim$delay(D.bf,0.08,0.06,0.84,0.004,C.a37(a0,208),"lux_rule",a5.aHL(0,"shimmer",r),D.vv,150))
a2.push(w.$10$anim$delay(D.bf,0.08,0.936,0.84,0.004,C.a37(a0,144),"lux_rule2","",D.JE,220))}l=!A.d.aU(a2,new C.foD())||a3===0
s=a5.d
if(l)a2.push(v.$9(s,0.44,0.06,0.12,0.14,40,e,a5.xh(0,"crest"),350))
else{o=a1.h4()?0.035:0.905
a2.push(v.$9(s,o,0.055,0.06,0.09,22,e,a5.xh(0,"crest"),350))}s=a5.c
t=t===0
o=t?0.3:0.62
k=C.a37(r,242)
j=a5.xh(0,"orbit")
i=s===D.bf?0.785:0
a2.push(w.$13$anim$delay$rotation$stroke$strokeWidth(s,o-0.008,0.024,0.016,0.028,k,"lux_g1",j,D.r6,600,i,4294967295,1))
t=t?0.66:0.34
a2.push(w.$10$anim$delay(D.eX,t-0.007,0.9495,0.014,0.025,C.a37(r,242),"lux_g2",a5.xh(0,"orbit"),D.r6,700))
for(t=a5.f,s=t.length,q=0;q<t.length;t.length===s||(0,B.I)(t),++q){h=t[q]
a2.push(w.$8(D.bf,0,0,1,1,0,"lux_"+h,h+"@"+A.a.b0(A.o.ft(a0,16),8,"0").toUpperCase()))}if((A.d.gH(d.b).a&16777215)<8421504)a2.push(w.$8(D.bf,0,0,1,1,0,"lux_velvet",a5.xh(0,"velvet")))},
of:function of(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fWl:function fWl(d){this.a=d},
fWm:function fWm(){},
wA:function wA(d,e){this.a=d
this.b=e},
a9r:function a9r(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
atk:function atk(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fWe:function fWe(){},
fWh:function fWh(){},
fU5:function fU5(){},
fU6:function fU6(){},
fU7:function fU7(d){this.a=d},
fOn:function fOn(){},
fOq:function fOq(d,e,f){this.a=d
this.b=e
this.c=f},
fOp:function fOp(d,e){this.a=d
this.b=e},
fOo:function fOo(d,e){this.a=d
this.b=e},
fOm:function fOm(d){this.a=d},
fQO:function fQO(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
fQM:function fQM(d){this.a=d},
fQN:function fQN(d){this.a=d},
fsl:function fsl(){},
fsm:function fsm(){},
fsn:function fsn(){},
h4T:function h4T(){},
a1S:function a1S(d){this.a=d},
aJU:function aJU(d,e,f,g,h){var _=this
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
fbi:function fbi(d,e,f){this.a=d
this.b=e
this.c=f},
fbj:function fbj(d,e){this.a=d
this.b=e},
fbg:function fbg(d,e){this.a=d
this.b=e},
fbh:function fbh(d,e){this.a=d
this.b=e},
fbf:function fbf(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
fba:function fba(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fbe:function fbe(d,e){this.a=d
this.b=e},
fb9:function fb9(d,e){this.a=d
this.b=e},
fbd:function fbd(d,e){this.a=d
this.b=e},
fb8:function fb8(d,e){this.a=d
this.b=e},
fbb:function fbb(d){this.a=d},
fbc:function fbc(d,e){this.a=d
this.b=e},
faZ:function faZ(d,e){this.a=d
this.b=e},
fb_:function fb_(d,e){this.a=d
this.b=e},
fb1:function fb1(d){this.a=d},
fb2:function fb2(d){this.a=d},
fb3:function fb3(d){this.a=d},
fb4:function fb4(d){this.a=d},
fb0:function fb0(d,e){this.a=d
this.b=e},
fb5:function fb5(d,e){this.a=d
this.b=e},
fbw:function fbw(d){this.a=d},
fbx:function fbx(d){this.a=d},
fbv:function fbv(d){this.a=d},
fby:function fby(d){this.a=d},
fbu:function fbu(d){this.a=d},
fbA:function fbA(d){this.a=d},
fbt:function fbt(d,e){this.a=d
this.b=e},
fbB:function fbB(d){this.a=d},
fbs:function fbs(d,e){this.a=d
this.b=e},
fbC:function fbC(d){this.a=d},
fbr:function fbr(d){this.a=d},
fbD:function fbD(d){this.a=d},
fbq:function fbq(d,e){this.a=d
this.b=e},
fbE:function fbE(d){this.a=d},
fbp:function fbp(d,e){this.a=d
this.b=e},
fbF:function fbF(d){this.a=d},
fbo:function fbo(d){this.a=d},
fbG:function fbG(d,e){this.a=d
this.b=e},
fbn:function fbn(d,e){this.a=d
this.b=e},
fbH:function fbH(d){this.a=d},
fbz:function fbz(d){this.a=d},
fbm:function fbm(d,e){this.a=d
this.b=e},
fb6:function fb6(d,e,f){this.a=d
this.b=e
this.c=f},
fb7:function fb7(d,e,f){this.a=d
this.b=e
this.c=f},
fbl:function fbl(d,e){this.a=d
this.b=e},
fbk:function fbk(d,e){this.a=d
this.b=e},
h4S:function h4S(d,e){this.a=d
this.b=e},
a1R:function a1R(d,e,f){this.c=d
this.d=e
this.a=f},
aJT:function aJT(d){var _=this
_.d=d
_.e=!1
_.f=""
_.c=_.a=_.r=null},
faS:function faS(d){this.a=d},
faT:function faT(d){this.a=d},
faU:function faU(d,e){this.a=d
this.b=e},
faV:function faV(d){this.a=d},
faW:function faW(d){this.a=d},
faR:function faR(d,e){this.a=d
this.b=e},
faX:function faX(d,e){this.a=d
this.b=e},
faY:function faY(d,e){this.a=d
this.b=e},
fzX:function fzX(d){this.a=d},
b43:function b43(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aGo:function aGo(d,e,f){this.c=d
this.d=e
this.a=f},
bne:function bne(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
erj:function erj(d){this.a=d},
eri:function eri(){},
bkI:function bkI(d,e){this.b=d
this.a=e},
fWn:function fWn(d){this.a=d},
fWo:function fWo(){},
fWp:function fWp(){},
fWq:function fWq(d){this.a=d},
atS:function atS(d,e){this.a=d
this.b=e},
fWj:function fWj(){},
fWk:function fWk(){},
h45:function h45(d,e){this.a=d
this.b=e},
a0f:function a0f(d,e,f){this.c=d
this.d=e
this.a=f},
aDS:function aDS(){var _=this
_.e=_.d=$
_.f=!1
_.c=_.a=_.r=null},
dtR:function dtR(d){this.a=d},
dtS:function dtS(d){this.a=d},
dtT:function dtT(d,e){this.a=d
this.b=e},
dtW:function dtW(d){this.a=d},
dtX:function dtX(d,e){this.a=d
this.b=e},
dtV:function dtV(d,e){this.a=d
this.b=e},
dtY:function dtY(d){this.a=d},
dtU:function dtU(d,e){this.a=d
this.b=e},
bvY:function bvY(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
erg:function erg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
erh:function erh(d){this.a=d},
foE:function foE(d){this.a=d},
foG:function foG(d,e){this.a=d
this.b=e},
foF:function foF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
foD:function foD(){},
aOy:function aOy(){},
hhY(d){var w,v,u
try{w=A.W.aP(0,d,null)
if(x.f.b(w)){v=B.ws(B.a1(w,x.N,x.z))
return v}}catch(u){}return null},
b4_:function b4_(d,e,f){this.c=d
this.d=e
this.a=f},
boP:function boP(d,e){this.c=d
this.a=e},
inq(d){return A.d.dL(D.IG,new C.fPu(d),new C.fPv())},
inr(d){var w,v,u,t=A.a.i(d)
if(!A.a.a_(t,"class_"))return null
w=A.a.b4(t,6)
if(w.length===0)return null
v=new B.Y(D.IG,new C.fPw(w),x.b4)
if(!v.gae(0).C())return null
u=v.gH(0)
return new C.k3("class_"+u.a,u.b,u.d,u.r,u.w,u.e,u.f)},
lB:function lB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fPu:function fPu(d){this.a=d},
fPv:function fPv(){},
fPw:function fPw(d){this.a=d},
ni(d,e,f,g,h){return new C.Fx(f,g,d)},
i9i(d){var w=d.z,v=B.U(w).k("Y<1>")
w=B.C(new B.Y(w,new C.fqM(),v),v.k("M.E"))
d.z=w
d.x=""},
dB(d,e){var w=$.Lp
e.db="__design__:"+(w.length===0?"layer":w)
A.d.c9(d.z,0,e)},
dC(d,e,f,g,h,i,j,k,l){return C.em(A.bd,!1,4279310375,A.aH,"",d,24,A.bq,A.a8,"",e,"design_"+C.cC(),null,"","",0,!1,"",f,g,h,i,"",0,0,"",D.cn,D.f7,j,k,l)},
hF1(d,e){var w
C.i9i(d)
w=A.d.dL($.bHE(),new C.fNk(e),new C.fNl())
$.Lp=w.a
d.x=w.a;++d.y
try{w.ak(d)}finally{$.Lp=""}d.z=B.bp(d.z,!0,x.F)},
Fx:function Fx(d,e,f){this.a=d
this.b=e
this.e=f},
fqM:function fqM(){},
fVQ:function fVQ(){},
fVR:function fVR(){},
fVS:function fVS(){},
fW2:function fW2(){},
fW7:function fW7(){},
fW8:function fW8(){},
fW9:function fW9(){},
fWa:function fWa(){},
fWb:function fWb(){},
fWc:function fWc(){},
fWd:function fWd(){},
fVT:function fVT(){},
fVU:function fVU(){},
fVV:function fVV(){},
fVW:function fVW(){},
fVX:function fVX(){},
fVY:function fVY(){},
fVZ:function fVZ(){},
fW_:function fW_(){},
fW0:function fW0(){},
fW1:function fW1(){},
fW3:function fW3(){},
fW4:function fW4(){},
fW5:function fW5(){},
fW6:function fW6(){},
fNk:function fNk(d){this.a=d},
fNl:function fNl(){},
jc(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){return C.em(d,e,f,g,"",4280640491,h,i,j,"",k,l,null,"","",0,!1,"",0,D.bf,4280172719,2,m,n,0,"",o,D.d3,p,q,r)},
DH(d,e,f,g,h,i,j,k,l){return C.em(A.bd,!1,4279310375,A.aH,"",d,24,A.bq,A.a8,"",e,f,null,"","",0,!1,"",0,g,h,i,"",0,0,"",D.cn,D.f7,j,k,l)},
bGm(){var w=new B.V(Date.now(),0,!1)
return A.iX[B.bL(w)-1]+" "+B.bX(w)+", "+B.bC(w)},
ez:function ez(d,e,f){this.a=d
this.b=e
this.c=f},
bDG(d){return new B.j7((A.o.aI(d,24)&255)/255,(A.o.aI(d,16)&255)/255,(A.o.aI(d,8)&255)/255,(d&255)/255)},
ieC(d){var w,v
if(d==null||!A.a.a_(d,"data:image"))return null
try{w=B.aoL(A.cL.aN(A.d.gal(d.split(","))))
return w}catch(v){return null}},
ieG(d){var w=d.r
if(!d.cy)return w
return new B.N(B.a(w.split("\n"),x.s),new C.fzf(),x.dv).aM(0,"\n")},
ieF(d){switch(d.a){case 2:return A.o1
case 1:case 5:return A.fsd
default:return A.VK}},
iez(d){switch(d.a){case 2:return A.w2
case 1:case 5:return A.XQ
default:return A.aep}},
ieD(d,e){var w,v=null,u=d.ay,t=A.o.aI(u,24),s=A.o.aI(d.ch,24),r=(t&255)===0?v:C.bDG(u),q=(s&255)===0?v:C.bDG(d.ch),p=A.i.D(d.CW*(e/960),0.35,6)
u=q==null
if(u)w=v
else{t=new B.o_(q,p,A.lg)
w=new B.q5(t,t,t,t)}switch(d.ax.a){case 1:return B.lU(v,v,v,new B.l_(r,w,v,A.afK,v),v,v,v,v)
case 4:return u?new B.h0(v,v,v):B.xG(B.lU(v,v,q,v,p+0.4,v,v,v))
default:return B.lU(v,v,v,new B.l_(r,w,B.w2(4),A.i6,v),v,v,v,v)}},
ieB(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=d.c*e,j=d.d*a0,i=d.b,h=i===D.f7?0.4:12,g=A.i.D(d.e*e,h,e),f=A.i.D(d.f*a0,h,a0)
switch(i.a){case 0:w=C.iez(d.as)
v=A.i.D(d.w*(e/960),3,96)
u=C.ieG(d)
t=C.bDG(d.Q)
s=d.x.a>=700?A.eD:A.wL
r=d.y===A.cJ?A.zc:A.apb
q=d.z
p=new B.DU(w,l,l,B.fe(u,l,l,l,B.hi(l,t,1===q.a?A.aW2:A.aW1,l,l,l,l,l,l,A.dE,l,l,v,r,s,l,!0,l,l,l,l),C.ieF(d.as)))
break
case 1:case 4:o=C.ieC(d.at)
if(i===D.kj)n=d.c===0&&d.d===0&&d.e===1&&d.f===1||A.a.c7(d.db,"_fill")
else n=!1
if(o==null){w=d.db
if(w.length===0)w="Image"
p=B.xG(B.fe(w,l,l,l,B.hi(l,A.tK,l,l,l,l,l,l,l,A.dE,l,l,10,l,l,l,!0,l,l,l,l),l))}else p=new B.IQ(o,n?A.afG:A.Yg,l,l)
break
case 3:w=new B.o_(A.K_,1,A.lg)
u=B.w2(6)
t=d.db
if(t.length===0)t="PDF document"
p=B.lU(A.w2,B.fe(t,l,l,l,B.hi(l,D.ezg,l,l,l,l,l,l,l,A.dE,l,l,11,l,A.eD,l,!0,l,l,l,l),A.o1),l,new B.l_(E.aNS,new B.q5(w,w,w,w),u,A.i6,l),l,l,l,l)
break
case 2:p=C.ieD(d,e)
break
case 5:p=C.ieA(d)
break
default:p=l}w=d.cx
if(w!==0)p=B.hw2(-w,p)
w=i===D.d3
if(w){m=A.o.aI(d.Q,24)&255
if(m<255)p=new B.auH(m/255,p)}if(w)return new F.wF(k,l,j,l,new B.TJ(new B.kZ(g,g,f,1/0),p))
if(i===D.lw){i=new B.o_(A.K_,1,A.lg)
i=B.lU(A.w2,p,l,new B.l_(A.pR,new B.q5(i,i,i,i),B.w2(4),A.i6,l),l,l,D.bIS,l)}else i=p
return new F.wF(k,l,j,l,new B.h0(g,f,i))},
ieE(d,e,f,g){var w,v=null,u=C.bDG(d.e),t=d.f
t=B.a([F.huE(t!=null?B.lU(v,v,v,new B.l_(v,v,v,A.i6,new B.aZt(E.XS,A.aem,B.a([u,C.bDG(t)],x.cR),v)),v,v,v,v):B.lU(v,v,u,v,v,v,v,v))],x.eR)
w=d.z
A.d.u(t,new B.N(w,new C.fze(f,g),B.U(w).k("N<1,fl>")))
return F.cBb(t)},
hjg(d){var w=0,v=B.j(x.E),u,t,s,r,q,p,o,n
var $async$hjg=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:n=B.a5B(null,"NGMY Slides",d.b)
for(t=d.r,s=t.length,r=n.c,q=0;q<t.length;t.length===s||(0,B.I)(t),++q){p=t[q]
o=new B.Y_(A.xn,A.JX,D.bK2,null,null,null,!1,null)
o=new B.Cv(o,new C.fWw(607,787,p,d))
o.Nr(n,null)
r.push(o)}u=n.jH(0)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hjg,v)},
ieA(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=C.hhY(d.r),k=l==null,j=k?m:l.b,i=A.a.i(j==null?"":j),h=k?m:l.galw()
if(h==null)h=A.aD1
j=B.u3(4279308564)
w=B.w2(18)
v=new B.o_(B.u3(4287531653),3,A.lg)
u=i.length===0?"My links":i
u=B.a([B.xG(B.fe(u,m,m,m,B.hi(m,A.pR,m,m,m,m,m,m,m,A.dE,m,m,12,m,A.eD,m,!0,m,m,m,m),m))],x.eR)
t=k?m:l.c
if(A.a.i(t==null?"":t).length!==0)u.push(B.xG(B.fe(A.a.i(l.c),m,m,m,D.fA_,m)))
u.push(new B.h0(m,8,m))
for(t=B.cX(h,0,B.dD(8,"count",x.S),B.U(h).c),s=t.$ti,t=new B.bQ(t,t.gJ(0),s.k("bQ<ak.E>")),s=s.k("ak.E");t.C();){r=t.d
if(r==null)r=s.a(r)
q=A.a.i(r.c)
p=B.u3(4280690220)
o=new B.aaL(8,8)
n=A.a.i(r.b)
u.push(new B.og(D.bCT,new C.az2(new C.ajR(q),B.lU(m,B.fe(n.length===0?A.a.i(r.c):n,m,m,m,D.fCp,A.o1),m,new B.l_(p,m,new B.akl(o,o,o,o),A.i6,m),m,m,D.bJk,m))))}k=k?m:l.as
if(A.a.i(k==null?"":k).length!==0){k=A.a.i(l.as)
t=B.xG(B.fe(k,m,m,m,D.fBD,m))
u.push(new C.az2(C.hOl(k),t))}return B.lU(m,B.zs(u,A.NY,A.lW),m,new B.l_(j,new B.q5(v,v,v,v),w,A.i6,m),m,m,D.bDI,m)},
fzf:function fzf(){},
fze:function fze(d,e){this.a=d
this.b=e},
fWw:function fWw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aiq(d){var w,v
for(w=0;w<32;++w){v=D.Iw[w]
if(v.a===d)return v}return null},
hyH(d){var w,v,u=A.a.cn(d,",")
if(!A.a.a_(d,"data:")||u<0)return null
try{w=A.cL.aN(A.a.b4(d,u+1))
return w}catch(v){return null}},
cZ(d,e){var w=d*374761393+e*668265263+1013904223&2147483647
w=(w^w>>>13)*1274126177&2147483647
return((w^w>>>16)&65535)/65535},
hIv(d,e){return B.a6(d,!1).ce(B.ee(new C.h2q(e),!0,null,x.fB))},
hIu(d,e){return B.bT(A.L,null,new C.h2p(e),d,!0,!0,!0,null,!1,!1,x.fB)},
ji:function ji(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
Fn:function Fn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Ou:function Ou(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bmA:function bmA(d,e,f){var _=this
_.d=d
_.e=$
_.bw$=e
_.a9$=f
_.c=_.a=null},
e4K:function e4K(d){this.a=d},
e4J:function e4J(d,e,f){this.a=d
this.b=e
this.c=f},
e4I:function e4I(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
but:function but(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
fa4:function fa4(d,e){this.a=d
this.b=e},
bhw:function bhw(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
b1U:function b1U(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
cg9:function cg9(){},
cga:function cga(d){this.a=d},
cgb:function cgb(d,e,f){this.a=d
this.b=e
this.c=f},
cgc:function cgc(d,e,f){this.a=d
this.b=e
this.c=f},
h2q:function h2q(d){this.a=d},
a_N:function a_N(d,e){this.c=d
this.a=e},
aCd:function aCd(){var _=this
_.f=_.e=_.d=$
_.r=0
_.c=_.a=null},
dj6:function dj6(d,e,f){this.a=d
this.b=e
this.c=f},
djb:function djb(d){this.a=d},
djc:function djc(d){this.a=d},
dja:function dja(d){this.a=d},
djd:function djd(d){this.a=d},
dj9:function dj9(d,e){this.a=d
this.b=e},
dje:function dje(d){this.a=d},
dj8:function dj8(d){this.a=d},
djf:function djf(d){this.a=d},
dj7:function dj7(d,e){this.a=d
this.b=e},
djg:function djg(d,e){this.a=d
this.b=e},
h2p:function h2p(d){this.a=d},
h2o:function h2o(d){this.a=d},
h2n:function h2n(d,e,f){this.a=d
this.b=e
this.c=f},
h2m:function h2m(d,e){this.a=d
this.b=e},
aO2:function aO2(){},
ivb(d){return B.bT(A.L,null,new C.h4R(),d,!0,!0,!0,null,!1,!1,x.N)},
h4R:function h4R(){},
a07:function a07(d){this.a=d},
bj2:function bj2(d){this.d=d
this.c=this.a=null},
dpU:function dpU(d){this.a=d},
dpV:function dpV(d,e){this.a=d
this.b=e},
dpW:function dpW(d){this.a=d},
iaT(d){var w,v=d.split("@")
if(v.length>1){w=B.cb(v[1],16)
if(w!=null)return B.b1(w)}return A.wt},
ipo(d){var w=7000
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
ipn(d,e,f,g){var w,v,u,t,s,r=null,q=A.d.gH(d.split("@")),p=C.iaT(d)
switch(q){case"shimmer":return B.ok(A.Mb,g,new C.fSY(p,A.i.F(e,6.283185307179586)/6.283185307179586*1.8-0.4))
case"golddust":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.bin(e,f,p,r),A.az),r)],x.p),r)
case"spotlight":w=Math.sin(e)
v=Math.cos(e*0.7)
u=Math.sin(e*2)
t=Math.sin(e*3)
return B.dP(B.e4(A.z,B.d3(F.bY9(g,new B.Ev(40,40,r)),0.75+t*0.25),1+u*0.08,r,r),new B.r(w*60,v*26))
case"goldframe":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.bi4(e,p,r),A.az),r)],x.p),r)
case"twinkle":s=Math.sin(e)
w=A.i.D(0.55+s*0.45,0,1)
return B.d3(B.eI(A.z,e*0.5,B.e4(A.z,g,0.8+(s+1)*0.18,r,r),r),w)
case"orbit":w=Math.cos(e)
v=Math.sin(e)
u=B.dr()
t=u.a
t.$flags&2&&B.aj(t)
t[11]=0.002
u.fE(e)
u.n5(Math.sin(e)*0.3)
return B.dP(B.fA(A.z,g,r,u,!0),new B.r(w*22,v*12))
case"rays":return new B.an(A.a0,r,A.b1,A.t,B.a([new B.dt(!0,B.b5(r,r,r,new C.bra(e,f,p,r),A.az),r),g],x.p),r)
case"bokeh":return new B.an(A.a0,r,A.b1,A.t,B.a([new B.dt(!0,B.b5(r,r,r,new C.bcV(e,f,p,r),A.az),r),g],x.p),r)
case"aurora":return new B.an(A.a0,r,A.b1,A.t,B.a([new B.dt(!0,B.b5(r,r,r,new C.bcy(e,f,p,r),A.az),r),g],x.p),r)
case"velvet":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.byk(e,p,r),A.az),r)],x.p),r)
case"sparkle":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.bvi(e,f,p,r),A.az),r)],x.p),r)
case"sheen":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.bup(e,p,r),A.az),r)],x.p),r)
case"filigree":return new B.an(A.a0,r,A.b1,A.t,B.a([g,new B.dt(!0,B.b5(r,r,r,new C.bhp(e,p,r),A.az),r)],x.p),r)
case"crest":s=Math.sin(e)
return new B.an(A.z,r,A.ad,A.f,B.a([B.bR(0,new B.dt(!0,B.e4(A.z,new B.bM(new B.o(r,r,r,r,r,new B.bS(A.z,0.5,A.x,r,0,B.a([p.j(0.35+s*0.12),p.j(0)],x.O),r,r),A.a6),A.bk,r,r),1.6+s*0.15,r,r),r),0,0,0),B.eI(A.z,s*0.06,B.e4(A.z,g,1+s*0.05,r,r),r)],x.p),r)}return g},
fSY:function fSY(d,e){this.a=d
this.b=e},
bin:function bin(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bi4:function bi4(d,e,f){this.b=d
this.c=e
this.a=f},
bra:function bra(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcV:function bcV(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bcy:function bcy(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
byk:function byk(d,e,f){this.b=d
this.c=e
this.a=f},
bvi:function bvi(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
bup:function bup(d,e,f){this.b=d
this.c=e
this.a=f},
bhp:function bhp(d,e,f){this.b=d
this.d=e
this.a=f},
diO:function diO(d,e,f,g,h){var _=this
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
fT0(d){var w=d.db
return A.a.a_(w,"marriage_sign_")&&!A.a.a_(w,"marriage_sign_placed_")&&d.b!==D.lw},
ipt(d,e){var w,v,u,t,s,r,q,p,o,n,m,l="marriage_locked_box_",k="marriage_field_",j=B.a([],x.u)
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
if(A.a.a_(t.db,l))continue
if(Math.abs(t.d+t.f*0.5-e)<0.03)j.push(t)}if(j.length<2)return
A.d.b_(j,new C.fT1())
s=A.d.gH(j).c
for(w=j.length,u=0;u<j.length;j.length===w||(0,B.I)(j),++u){t=j[u]
r=s-t.c
if(Math.abs(r)>0.0001){t.c=s
v=t.db
if(A.a.a_(v,k)){q=A.d.gH(B.aT6(v,k,"",0).split(":"))
for(v=d.z,p=v.length,o=l+q,n=0;n<p;++n){m=v[n]
if(m.db===o)m.c+=r}}}s+=t.e+0.006}},
ips(d,e){var w,v,u,t,s,r=d.db
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
d.e=A.i.D(s,0.06,u)}else{d.w=A.i.D((u-0.028)/(r*0.001),12,t)
d.e=u}return}d.e=A.i.D(r*(d.w*0.001)+0.028,0.06,u)},
ai4(d,a0,a1,a2,a3,a4){var w=0,v=B.j(x.H),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ai4=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:f=B.U(a4).k("Y<1>")
e=B.C(new B.Y(a4,new C.fLj(),f),f.k("M.E"))
w=!a2&&e.length!==0?3:4
break
case 3:w=5
return B.b(B.bT(A.dW,null,new C.fLk(e),d,!0,!0,!1,A.lX,!1,!1,x.N),$async$ai4)
case 5:t=a6
if(t==="continue"){a1.$1(A.d.gH(e).hT())
w=1
break}if(t!=="new"){w=1
break}case 4:if(d.e==null){w=1
break}w=6
return B.b(C.hk_(d),$async$ai4)
case 6:s=a6
if(s==null||d.e==null){w=1
break}r=A.a.i(a3==null?"":a3)
w=r.length!==0?7:9
break
case 7:a6=r
w=8
break
case 9:w=10
return B.b(B.HF(d,"Search states\u2026","",A.kg,"Choose state"),$async$ai4)
case 10:case 8:q=a6
if(q==null||d.e==null){w=1
break}p=C.hiO(s)
if(p==null)p=A.d.gH(D.Tb)
f=C.cC()
o=A.a.i(q)
if(o.length===0)o=null
n=C.cC()
m=p.e
l=C.fT2(p.d)
k=x.u
j=B.a([C.em(A.bd,!1,4279310375,A.aH,"marriage_locked_bg",4280640491,24,A.bq,A.a8,"",1,C.cC(),l,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cn,D.kj,1,0,0)],k)
i=p.f
h=x.F
k=B.C(B.a([C.Dt(i,0.016,D.lx,4291404327,0.8,"ring_jewel",0.028,0.42544,0.008),C.Dt(0,0.058,D.eX,4291404327,2.4,"ring_l",0.058,0.39064,0.026),C.Dt(0,0.058,D.eX,4291404327,2.4,"ring_r",0.058,0.41963999999999996,0.026)],k),h)
k.push(C.LC("HATI YA NDOA",A.K,i,32,A.u,0.048,"title",0.78,0.11,0.086))
k.push(C.LC("Hati ya Makubaliano ya Ndoa",A.K,i,12,A.a8,0.018,"subtitle",0.78,0.11,0.134))
A.d.u(k,C.hfl(0.2,0.154,0.6,4291404327,i))
A.d.u(k,C.bD8("TAARIFA ZA WANANDOA",0.176,0.2,0.6,i))
A.d.u(k,C.a2K("Jina la Mume:","groom_name",0.11,0.218,0.78,11,i,""))
A.d.u(k,C.a2K("Jina la Mke:","bride_name",0.11,0.25,0.78,11,i,""))
A.d.u(k,C.a2K("Tarehe ya Ndoa:","tarehe",0.11,0.282,0.78,11,i,""))
A.d.u(k,C.a2K("Mahali:","bride_house",0.11,0.314,0.78,11,i,""))
A.d.u(k,C.bD8("TAMKO LA MAKUBALIANO",0.35,0.2,0.6,i))
k.push(C.Dt(m,0.082,D.bf,4291404327,1.15,"intro_frame",0.792,0.104,0.384))
g=C.cC()
k.push(C.em(A.bd,!1,i,A.aH,"marriage_field_utangulizi:"+A.i.ad(0.78,3),4280640491,9.5,A.bq,A.cD,"",0.074,g,null,"","",0,!1,"",0,D.bf,4280172719,2,y.O,0,0,"",D.cn,D.d3,0.78,0.11,0.388))
A.d.u(k,C.hfl(0.22,0.47,0.56,4291404327,i))
A.d.u(k,C.bD8("MASHAHIDI",0.49,0.26,0.48,i))
A.d.u(k,C.hAS("Shahidi wa Mume",0.11,0.528,0.37,i,4294967295))
A.d.u(k,C.hAS("Shahidi wa Mke",0.52,0.528,0.37,i,4294967295))
A.d.u(k,C.a2K("Jina:","witness_mume_1_name",0.11,0.564,0.37,10,i,""))
A.d.u(k,C.a2K("Jina:","witness_mke_1_name",0.52,0.564,0.37,10,i,""))
A.d.u(k,C.bD7("witness_mume_1",0.11,0.596,0.37,i))
A.d.u(k,C.bD7("witness_mke_1",0.52,0.596,0.37,i))
A.d.u(k,C.bD8("SAHIHI ZA WANANDOA",0.64,0.2,0.6,i))
k.push(C.LC("Mume",A.K,i,11,A.u,0.016,"mume_h",0.37,0.11,0.678))
k.push(C.LC("Mke",A.K,i,11,A.u,0.016,"mke_h",0.37,0.52,0.678))
A.d.u(k,C.bD7("mchumba_mume",0.11,0.7,0.37,i))
A.d.u(k,C.bD7("mchumba_mke",0.52,0.7,0.37,i))
A.d.u(k,C.bD8("MWANDISHI / MSIMAMIZI",0.744,0.18,0.64,i))
A.d.u(k,C.a2K("Jina:","mwandishi",0.11,0.784,0.26,10,i,""))
A.d.u(k,C.bD7("witness_mume_2",0.38,0.784,0.26,i))
A.d.u(k,C.a2K("Tarehe:","mchumba_mume_tarehe",0.65,0.784,0.24,10,i,""))
h=B.C(C.hfl(0.22,0.83,0.56,4291404327,i),h)
h.push(C.LC("NGMY",A.K,i,13,A.u,0.022,"ngmy_mark",0.6,0.2,0.846))
h.push(C.LC("Nakala ya Hati",A.K,4291404327,9,A.a8,0.016,"ngmy_sub",0.6,0.2,0.866))
A.d.u(k,h)
A.d.u(j,k)
a0.$1(C.Cq(null,null,null,null,D.oZ,5,!1,"marriage_agreement",null,null,null,null,f,null,!1,o,p.b,null,null,B.a([C.t3(m,null,0,0,j,n,D.r5,"","","Hati ya Ndoa",D.dr)],x.g),"marriage_"+p.a,null,!1,null))
case 1:return B.h(u,v)}})
return B.i($async$ai4,v)},
fT1:function fT1(){},
fLj:function fLj(){},
fLk:function fLk(d){this.a=d},
fLh:function fLh(d){this.a=d},
fLi:function fLi(d){this.a=d},
ie_(d){var w=d.a
if(1===w)return"underline"
if(4===w)return"lineThrough"
return"none"},
idZ(d){var w=d==null?null:J.k(d)
switch(w==null?"none":w){case"underline":return A.ne
case"lineThrough":return A.xy
default:return A.aH}},
em(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){return new C.eO(o,a7,a9,b0,a8,n,a2,j,l,k,g,f,d,p,w,i,a0,a1,v,e,h,s,a6,a3,r,q,m,u,a5,t,a4)},
hD3(d){var w,v,u=J.k(d==null?"fade":d)
for(w=0;w<22;++w){v=D.SV[w]
if(v.b===u)return v}return D.dr},
iag(d){var w,v,u=J.k(d==null?"text":d)
for(w=0;w<6;++w){v=D.d6J[w]
if(v.b===u)return v}return D.d3},
igQ(d){var w,v,u=J.k(d==null?"rectangle":d)
for(w=0;w<7;++w){v=D.dz7[w]
if(v.b===u)return v}return D.bf},
t3(d,e,f,g,h,i,j,k,l,m,n){return new C.lj(i,m,k,j,d,e,n,g,l,f,h==null?B.a([],x.u):h)},
hto(d){var w,v,u,t,s,r,q,p,o,n,m=null,l=d.h(0,"id")
l=J.k(l==null?"":l)
w=d.h(0,"title")
w=J.k(w==null?"":w)
v=d.h(0,"notes")
v=J.k(v==null?"":v)
u=C.icg(d.h(0,"layout"))
t=B.aJ(d.h(0,"background"))
t=t==null?m:A.i.M(t)
if(t==null)t=4294967295
s=B.aJ(d.h(0,"backgroundEnd"))
s=s==null?m:A.i.M(s)
r=C.hD3(d.h(0,"transition"))
q=B.aJ(d.h(0,"durationSeconds"))
q=q==null?m:A.i.M(q)
if(q==null)q=0
p=d.h(0,"slideDesignId")
p=J.k(p==null?"":p)
o=B.aJ(d.h(0,"designRevision"))
o=o==null?m:A.i.M(o)
if(o==null)o=0
n=x.c.a(d.h(0,"elements"))
if(n==null)n=m
else{n=J.de(n,x.f)
n=B.cF(n,new C.clO(),n.$ti.k("M.E"),x.F)
n=B.C(n,B.a3(n).k("M.E"))}return C.t3(t,s,o,q,n==null?B.a([],x.u):n,l,u,v,p,w,r)},
icg(d){var w,v,u=J.k(d==null?"titleContent":d)
for(w=0;w<9;++w){v=D.auB[w]
if(v.b===u)return v}return D.n9},
Cq(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,a0,a1,a2,a3,a4){var w=a4==null?new B.V(Date.now(),0,!1):a4
return new C.hV(p,t,a1,h,i,w,a0==null?B.a([C.t3(4294967295,null,0,0,null,C.cC(),D.r5,"","","",D.dr)],x.g):a0,k,s,a2,a3,d,v,u,q,j,r,f,g,e,m,o,n,l)},
Xm(a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4="deckKind",a5=a6.h(0,"id")
a5=J.k(a5==null?"":a5)
w=a6.h(0,"name")
w=J.k(w==null?"Untitled Presentation":w)
v=a6.h(0,"themeId")
v=J.k(v==null?"office_blue":v)
u=C.i8j(a6.h(0,"aspectRatio"))
t=B.aJ(a6.h(0,"autoAdvanceSeconds"))
t=t==null?a3:A.o.D(A.i.M(t),1,120)
if(t==null)t=5
s=a6.h(0,"updatedAt")
s=B.bj(J.k(s==null?"":s))
if(s==null)s=new B.V(Date.now(),0,!1)
r=a6.h(0,a4)
r=r==null?a3:J.k(r)
q=a6.h(0,"marriageState")
q=q==null?a3:J.k(q)
p=a6.h(0,"transferClaimCode")
p=p==null?a3:J.k(p)
if(J.z(a6.h(0,"transferReceived"),!0)){o=a6.h(0,a4)
o=C.km(o==null?a3:J.k(o))}else o=!1
n=a6.h(0,a4)
if(C.km(n==null?a3:J.k(n))){n=a6.h(0,"adminShareEditUntil")
n=n==null?a3:J.k(n)}else n=a3
m=B.aJ(a6.h(0,"signatureStrokeWidth"))
if(m==null)m=a3
l=B.aJ(a6.h(0,"signatureInkColor"))
l=l==null?a3:A.i.M(l)
k=a6.h(0,"kiapoSignedAt")
k=k==null?a3:J.k(k)
j=J.z(a6.h(0,"cinematic"),!0)
i=J.z(a6.h(0,"loop"),!0)
h=a6.h(0,"aiOutlineJson")
h=h==null?a3:J.k(h)
g=x.c
f=g.a(a6.h(0,"aiSlideIds"))
if(f==null)f=a3
else{f=J.b8(f,new C.clB(),x.N)
f=B.C(f,f.$ti.k("ak.E"))}e=g.a(a6.h(0,"aiExtras"))
if(e==null)e=a3
else{e=J.b8(e,new C.clC(),x.N)
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
g=B.cF(g,new C.clD(),g.$ti.k("M.E"),x.o)
g=B.C(g,B.a3(g).k("M.E"))}return C.Cq(n,e,h,f,u,t,j,r,a2,d,a1,a0,a5,k,i,q,w,l,m,g==null?B.a([C.t3(4294967295,a3,0,0,a3,C.cC(),D.r5,"","","",D.dr)],x.g):g,v,p,o,s)},
km(d){return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"||d==="hati_kiapo_uongozi"},
i8j(d){var w,v,u=J.k(d==null?"landscape169":d)
for(w=0;w<2;++w){v=D.dA3[w]
if(v.b===u)return v}return D.En},
cC(){var w=Date.now(),v=$.iV
$.iV=v+1
return""+1000*w+"_"+v},
cm4(d,e,f){var w,v,u,t,s,r,q,p=null,o="Click to add title",n=4280640491,m=4280172719,l=4279310375
d.d=e
A.d.a8(d.z)
if(e!==D.Eo){d.e=f.f.l()
w=f.r
d.f=w==null?p:w.l()}switch(e.a){case 0:break
case 1:w=d.z
v=C.cC()
v=C.em(A.K,!1,f.d.l(),A.aH,"",n,40,A.bq,A.u,"",0.2,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cn,D.d3,0.84,0.08,0.3)
u=C.cC()
A.d.u(w,B.a([v,C.em(A.K,!1,f.e.l(),A.aH,"",n,20,A.bq,A.cD,"",0.12,u,p,"","",0,!1,"",0,D.bf,m,2,"Click to add subtitle",0,0,"",D.cn,D.d3,0.76,0.12,0.58)],x.u))
break
case 2:w=d.z
v=C.cC()
v=C.em(A.bd,!1,f.d.l(),A.aH,"",n,32,A.bq,A.u,"",0.14,v,p,"","",0,!1,"",0,D.bf,m,2,o,0,0,"",D.cn,D.d3,0.88,0.06,0.06)
u=C.cC()
A.d.u(w,B.a([v,C.em(A.bd,!0,f.e.l(),A.aH,"",n,20,A.bq,A.cD,"",0.68,u,p,"","",0,!1,"",0,D.bf,m,2,"\u2022 Tap text to select, then Edit to type\n\u2022 Use Format for size & color\n\u2022 Add images and shapes from Insert",0,0,"",D.cn,D.d3,0.88,0.06,0.24)],x.u))
break
case 3:w=d.z
v=C.cC()
v=C.em(A.bd,!1,f.d.l(),A.aH,"",n,30,A.bq,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Two Column Slide",0,0,"",D.cn,D.d3,0.88,0.06,0.06)
u=C.cC()
t=f.e
u=C.em(A.bd,!0,t.l(),A.aH,"",n,18,A.bq,A.a8,"",0.7,u,p,"","",0,!1,"",0,D.bf,m,2,"Left column\n\n\u2022 Point A\n\u2022 Point B",0,0,"",D.cn,D.d3,0.42,0.06,0.22)
s=C.cC()
A.d.u(w,B.a([v,u,C.em(A.bd,!0,t.l(),A.aH,"",n,18,A.bq,A.a8,"",0.7,s,p,"","",0,!1,"",0,D.bf,m,2,"Right column\n\n\u2022 Point C\n\u2022 Point D",0,0,"",D.cn,D.d3,0.42,0.52,0.22)],x.u))
break
case 4:w=f.c
d.e=w.l()
d.f=w.j(0.85).l()
A.d.I(d.z,C.em(A.K,!1,4294967295,A.aH,"",n,42,A.bq,A.u,"",0.2,C.cC(),p,"","",0,!1,"",0,D.bf,m,2,"Section Header",0,0,"",D.cn,D.d3,0.84,0.08,0.38))
break
case 5:w=d.z
v=C.cC()
v=C.em(A.bd,!1,f.d.l(),A.aH,"",n,30,A.bq,A.u,"",0.12,v,p,"","",0,!1,"",0,D.bf,m,2,"Compare",0,0,"",D.cn,D.d3,0.88,0.06,0.06)
u=C.cC()
t=f.c
u=C.em(A.bd,!1,l,A.aH,"",t.j(0.12).l(),24,A.bq,A.a8,"",0.68,u,p,"","",0,!1,"",0,D.bf,t.l(),2,"",0,0,"",D.cn,D.f7,0.42,0.06,0.22)
s=C.cC()
r=f.e
s=C.em(A.bd,!1,r.l(),A.aH,"",n,20,A.bq,A.O,"",0.6,s,p,"","",0,!1,"",0,D.bf,m,2,"Option A",0,0,"",D.cn,D.d3,0.38,0.08,0.26)
q=C.cC()
t=C.em(A.bd,!1,l,A.aH,"",t.j(0.06).l(),24,A.bq,A.a8,"",0.68,q,p,"","",0,!1,"",0,D.bf,t.j(0.5).l(),2,"",0,0,"",D.cn,D.f7,0.42,0.52,0.22)
q=C.cC()
A.d.u(w,B.a([v,u,s,t,C.em(A.bd,!1,r.l(),A.aH,"",n,20,A.bq,A.O,"",0.6,q,p,"","",0,!1,"",0,D.bf,m,2,"Option B",0,0,"",D.cn,D.d3,0.38,0.54,0.26)],x.u))
break
case 6:w=d.z
v=C.cC()
v=C.em(A.K,!1,f.d.l(),A.aH,"",n,36,A.bq,A.u,"",0.35,v,p,"","",0,!1,"",0,D.bf,m,2,"TERM / QUESTION",0,0,"",D.cn,D.d3,0.8,0.1,0.12)
u=C.cC()
A.d.u(w,B.a([v,C.em(A.K,!1,f.e.l(),A.aH,"",n,22,A.bq,A.cD,"",0.35,u,p,"","",0,!1,"",0,D.bf,m,2,"Definition or answer \u2014 flip mentally when presenting",0,0,"",D.cn,D.d3,0.8,0.1,0.52)],x.u))
break
case 7:w=d.z
v=C.cC()
v=C.em(A.bd,!1,f.d.l(),A.aH,"",n,28,A.bq,A.u,"",0.18,v,p,"","",0,!1,"",0,D.bf,m,2,"Quiz Question",0,0,"",D.cn,D.d3,0.88,0.06,0.06)
u=C.cC()
A.d.u(w,B.a([v,C.em(A.bd,!1,f.e.l(),A.aH,"",n,20,A.bq,A.a8,"",0.62,u,p,"","",0,!1,"",0,D.bf,m,2,"A) Answer choice\nB) Answer choice\nC) Answer choice\nD) Answer choice",0,0,"",D.cn,D.d3,0.84,0.08,0.28)],x.u))
break
case 8:w=d.z
v=C.cC()
v=C.em(A.bd,!1,f.d.l(),A.aH,"",n,26,A.bq,A.u,"",0.1,v,p,"","",0,!1,"",0,D.bf,m,2,"Worksheet / Assignment",0,0,"",D.cn,D.d3,0.88,0.06,0.04)
u=C.cC()
A.d.u(w,B.a([v,C.em(A.bd,!1,f.e.l(),A.aH,"",n,18,A.bq,A.a8,"",0.78,u,p,"","",0,!1,"",0,D.bf,m,2,"Name: _______________\nDate: _______________\n\n1. _________________________________\n\n2. _________________________________\n\n3. _________________________________",0,0,"",D.cn,D.d3,0.88,0.06,0.16)],x.u))
break}},
i_K(d){return A.d.dL(D.a69,new C.cm5(d),new C.cm6())},
i_H(d){var w,v,u,t,s,r,q,p
if(A.a.i(d).length===0)return B.a([],x.D)
try{w=A.W.aP(0,d,null)
if(!x.j.b(w)){t=B.a([],x.D)
return t}v=B.a([],x.D)
for(t=J.aT(w),s=x.N,r=x.z,q=x.f;t.C();){u=t.gP(t)
if(!q.b(u))continue
try{J.c5(v,C.Xm(B.a1(u,s,r)))}catch(p){}}return v}catch(p){t=B.a([],x.D)
return t}},
hbx(d,e){var w,v,u,t=B.T(x.N,x.I),s=new C.cm0(t)
for(w=J.aT(d);w.C();)s.$1(w.gP(w))
for(w=e.length,v=0;v<e.length;e.length===w||(0,B.I)(e),++v)s.$1(e[v])
w=t.$ti.k("b7<2>")
u=B.C(new B.b7(t,w),w.k("M.E"))
A.d.b_(u,new C.cm_())
return u},
htr(d,e){var w,v,u=d.length
if(u===0)return e
w=e.length
if(w===0)return d
v=new C.clW()
if(u!==w)return u>=w?d:e
return v.$1(d).ca(v.$1(e))?d:e},
atl(d){return C.i_F(d)},
i_F(d){var w=0,v=B.j(x.R),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g
var $async$atl=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:m=A.a.i(d.toLowerCase())
l=new C.clZ()
k=x.D
j=B.a([],k)
t=4
g=l
w=7
return B.b(B.a3X(m),$async$atl)
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
return B.b(B.aA(),$async$atl)
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
case 11:o=l.$1($.htq.h(0,m))
n=C.hbx(C.hbx(j,r),o)
if(n.length===0){u=C.htr(C.htr(j,r),o)
w=1
break}u=n
w=1
break
case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$atl,v)},
clV(d){return C.i_E(d)},
i_E(d){var w=0,v=B.j(x._),u,t=2,s=[],r,q,p,o
var $async$clV=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(B.aA(),$async$clV)
case 7:r=f
q=r.tW("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=A.Z
q=B.jG(q,B.U(q).c)
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
return B.i($async$clV,v)},
b45(d,e){return C.i_G(d,e)},
i_G(d,e){var w=0,v=B.j(x.H),u=1,t=[],s,r,q,p,o,n,m
var $async$b45=B.e(function(f,g){if(f===1){t.push(g)
w=u}for(;;)switch(w){case 0:u=3
w=6
return B.b(B.aA(),$async$b45)
case 6:s=g
q=s.tW("ngmy_slides_deleted_"+A.a.i(d.toLowerCase()))
if(q==null)q=B.a([],x.s)
A.d.I(q,e)
r=q
p=A.a.i(d.toLowerCase())
o=J.ad(r)>500?J.Mo(r,J.ad(r)-500):r
w=7
return B.b(s.aC("StringList","ngmy_slides_deleted_"+p,o),$async$b45)
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
return B.i($async$b45,v)},
Xn(d,e){return C.i_I(d,e)},
i_I(a3,a4){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2
var $async$Xn=B.e(function(a5,a6){if(a5===1){s.push(a6)
w=t}for(;;)switch(w){case 0:a0=A.a.i(a3.toLowerCase())
if(J.ad(a0)===0){w=1
break}p=$.htp.h(0,a0)
w=p==null?3:4
break
case 3:w=5
return B.b(C.atl(a3),$async$Xn)
case 5:p=a6
case 4:w=6
return B.b(C.clV(a3),$async$Xn)
case 6:o=a6
n=B.T(x.N,x.I)
for(m=J.aT(p);m.C();){l=m.gP(m)
k=l.a
if(A.a.i(k).length!==0)n.n(0,k,l)}for(m=a4.length,j=0;j<a4.length;a4.length===m||(0,B.I)(a4),++j){i=a4[j]
l=i.a
if(A.a.i(l).length===0)continue
h=n.h(0,l)
if(h!=null){k=h.f
g=i.f
f=k.a
if(f<=g.gbt())k=f===g.gbt()&&k.b>g.gcG()
else k=!0
k=!k}else k=!0
if(k)n.n(0,l,i)}m=n.$ti.k("b7<2>")
l=m.k("Y<M.E>")
e=B.C(new B.Y(new B.b7(n,m),new C.cm1(o),l),l.k("M.E"))
A.d.b_(e,new C.cm2())
$.htp.n(0,a0,e)
n=B.U(e).k("N<1,a9<n,@>>")
n=B.C(new B.N(e,new C.cm3(),n),n.k("ak.E"))
r=A.W.av(n,null)
$.htq.n(0,a0,r)
t=8
w=11
return B.b(B.aiT(a0,r),$async$Xn)
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
return B.b(B.aA(),$async$Xn)
case 16:q=a6
w=17
return B.b(q.aC("String","ngmy_slides_decks_"+A.a.i(a3.toLowerCase()),r),$async$Xn)
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
return B.i($async$Xn,v)},
JK:function JK(d,e){this.a=d
this.b=e},
atj:function atj(d,e){this.a=d
this.b=e},
vi:function vi(d,e){this.a=d
this.b=e},
mZ:function mZ(d,e){this.a=d
this.b=e},
hJ:function hJ(d,e){this.a=d
this.b=e},
eO:function eO(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0){var _=this
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
clP:function clP(){},
clQ:function clQ(){},
clO:function clO(){},
hV:function hV(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,a0,a1,a2,a3){var _=this
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
clE:function clE(){},
clF:function clF(){},
clB:function clB(){},
clC:function clC(){},
clD:function clD(){},
k3:function k3(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
cm5:function cm5(d){this.a=d},
cm6:function cm6(){},
cm0:function cm0(d){this.a=d},
cm_:function cm_(){},
clW:function clW(){},
clX:function clX(){},
clY:function clY(){},
clZ:function clZ(){},
cm1:function cm1(d){this.a=d},
cm2:function cm2(){},
cm3:function cm3(){},
ipG(d,e){var w=x.N,v=B.T(w,x.F)
w=new C.fTF(e,v,d,B.aR(w))
w.$1(new C.fTB())
w.$1(new C.fTC())
w.$1(new C.fTD())
w.$1(new C.fTE())
return v},
fTF:function fTF(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fTB:function fTB(){},
fTC:function fTC(){},
fTD:function fTD(){},
fTE:function fTE(){},
b42:function b42(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
clK:function clK(d){this.a=d},
clJ:function clJ(){},
clL:function clL(){},
clM:function clM(d,e){this.a=d
this.b=e},
clN:function clN(d){this.a=d},
aqk:function aqk(d,e){this.c=d
this.a=e},
bmj:function bmj(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
dRs:function dRs(){},
aNM:function aNM(){},
clS(d,e,f){var w=0,v=B.j(x.y),u,t
var $async$clS=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:if(f){u=!0
w=1
break}t=A.a.i(e)
if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fpq)
u=!1
w=1
break}u=B.lk(!1,d,t,!1,null,A.a94,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$clS,v)},
i_C(d){var w=A.d.bk(D.IG,new C.clT(d))
if(w<0)return!0
return w>=4},
i_D(d){var w=A.d.bk($.bHE(),new C.clU(d))
if(w<0)return!0
return w>=5},
clT:function clT(d){this.a=d},
clU:function clU(d){this.a=d},
iru(d,e,f){var w,v=null,u=""+f,t="ngmy-pdf-"+A.a.gX(d)+"-"+u,s=f>0?d+"#page="+u:d
$.xt()
$.q2().pl(t,new C.fWD(s),!0)
u=B.a([B.BY(v,A.pS,t)],x.p)
if(e.length!==0){w=B.l(4)
u.push(B.ao(v,B.p(v,B.d(e,v,v,v,v,v,v,D.fAs,v,v,v),A.f,v,v,new B.o(A.b5,v,v,w,v,v,A.n),v,v,v,v,A.n3,v,v,v),v,v,4,v,4,v))}return new B.an(A.a0,v,A.b1,A.t,u,v)},
fWD:function fWD(d){this.a=d},
ir5(){return C.hj9()},
inQ(){return C.bFy()},
ipZ(){return C.hj0()},
aS9(d,e,f){var w=0,v=B.j(x.H),u
var $async$aS9=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:w=e==="__ngmy_slides_pdf_staged__"?3:4
break
case 3:w=5
return B.b(C.fVJ(d,f),$async$aS9)
case 5:w=1
break
case 4:if(d.e!=null)d.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(e,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$aS9,v)},
fVJ(d,e){var w=0,v=B.j(x.H),u
var $async$fVJ=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:u=$.bDH
if(u==null)u=e+".pdf"
w=2
return B.b(B.bT(A.L,null,new C.fVK(u,e==="Invoice"),d,!0,!1,!0,null,!1,!1,x.H),$async$fVJ)
case 2:return B.h(null,v)}})
return B.i($async$fVJ,v)},
fVK:function fVK(d,e){this.a=d
this.b=e},
aeS:function aeS(d,e,f){this.c=d
this.d=e
this.a=f},
eDD:function eDD(d,e){this.a=d
this.b=e},
eDE:function eDE(d,e){this.a=d
this.b=e},
eDF:function eDF(d,e){this.a=d
this.b=e},
eDG:function eDG(d){this.a=d},
af8:function af8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b41(d,e,f,g,h,i,j,k,l,m,n,o){return new C.b40(g,m,f,d,e,h,l,k,j,o,i,null)},
hGn(d){return B.cm(new C.fTA(d))},
hjb(d){switch(d.a){case 0:return"\u23ed\ufe0f"
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
ird(d){if(d===D.cn)return"None"
return C.hjb(d)},
bEd(d,e,f,g){return C.igX(d,e,f,g)},
igX(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$bEd=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:s={}
if(d.e==null){w=1
break}t=B.a6(d,!0)
if($.hfF&&t.q4())t.eq()
$.hfF=!0
s.a=null
w=3
return B.b(B.hO(A.bp,!0,"Animation preview",d,new C.fC0(s,e,g,f),null,A.eH,!0,x.H),$async$bEd)
case 3:s=s.a
if(s!=null)s.a1(0)
$.hfF=!1
case 1:return B.h(u,v)}})
return B.i($async$bEd,v)},
h5H(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$h5H=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aE(d,A.bZ,x.w).w.a.a*0.88,280,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no slide transition":C.hjb(f)+" Slide transition preview"
s=s?Aj.H0:A.qB
w=3
return B.b(C.bEd(d,s,new B.a5(t,t*0.56,B.bu(B.l(14),new C.aLi(f,null),A.aq),null),r),$async$h5H)
case 3:case 1:return B.h(u,v)}})
return B.i($async$h5H,v)},
hFE(d,e,f){var w,v,u=null,t=A.cj.az(0,A.i.D(e,0,1))
switch(d.a){case 0:return f
case 1:case 13:case 18:return B.d3(f,t)
case 2:case 17:return B.dP(B.d3(f,t),new B.r((1-t)*48,0))
case 3:return B.dP(B.d3(f,t),new B.r(-(1-t)*48,0))
case 4:case 21:return B.dP(B.d3(f,t),new B.r(0,(1-t)*36))
case 5:return B.dP(B.d3(f,t),new B.r(0,-(1-t)*36))
case 6:case 16:return B.e4(A.z,B.d3(f,t),0.5+t*0.5,u,u)
case 7:return B.e4(A.z,B.d3(f,t),1.4-t*0.4,u,u)
case 8:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.fE((1-t)*1.2)
return B.fA(A.z,B.d3(f,t),u,w,!0)
case 9:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
w.k5((1-t)*1.2)
return B.fA(A.z,B.d3(f,t),u,w,!0)
case 10:case 19:w=B.dr()
v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
w.n5((1-t)*0.8)
v=0.6+t*0.4
w.k7(v,v,v,1)
return B.fA(A.z,B.d3(f,t),u,w,!0)
case 11:case 12:case 14:case 15:case 20:return B.dP(B.d3(f,t),new B.r((1-t)*24,0))}},
bH7(d,e,f){var w=0,v=B.j(x.H),u,t,s,r
var $async$bH7=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:e.$0()
if(d.e==null){w=1
break}t=A.i.D(B.aE(d,A.bZ,x.w).w.a.a*0.88,300,440)
s=f===D.cn
r=s?"\u23ed\ufe0f None \u2014 no element animation":C.hjb(f)+" Element animation preview"
s=s?Aj.H0:A.qB
w=3
return B.b(C.bEd(d,s,new B.a5(t,t*0.62,B.bu(B.l(14),new C.aBT(f,null),A.aq),null),r),$async$bH7)
case 3:case 1:return B.h(u,v)}})
return B.i($async$bH7,v)},
irc(d){var w,v,u,t,s=$.ahw.W(0,d)
if(s!=null){$.ahw.n(0,d,s)
return s}w=A.cL.aN(A.a.b4(d,A.a.cn(d,",")+1))
$.ahw.n(0,d,w)
v=$.hgz=$.hgz+w.length
u=B.a3($.ahw).k("cr<1>")
for(;;){if(!(v>41943040&&$.ahw.a>1))break
t=new B.cr($.ahw,u).gae(0)
if(!t.C())B.bi(B.fi())
v-=$.ahw.W(0,t.gP(0)).length
$.hgz=v}return w},
iqN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.ag("\\*([^*]+)\\*|\\^([^^]+)\\^|~([^~]+)~",!0,!1,!1,!1).kZ(0,d),j=B.C(k,B.a3(k).k("M.E"))
if(j.length===0)return l
w=e.r
if(w==null)w=24
v=B.a([],x.aF)
for(k=j.length,u=w*0.62,t=w*2.4,s=w*1.6,r=0,q=0;q<j.length;j.length===k||(0,B.I)(j),++q){p=j[q].b
o=p.index
if(o>r){n=A.a.aA(d,r,o)
m=f.$1(e)
v.push(new B.er(n,l,l,A.cM,l,l,l,l,l,l,m))}n=p[1]
if(n!=null){m=f.$1(e.TL(s,A.u))
v.push(new B.er(n,l,l,A.cM,l,l,l,l,l,l,m))}else{n=p[2]
if(n!=null){m=f.$1(e.TL(t,A.u))
v.push(new B.er(n,l,l,A.cM,l,l,l,l,l,l,m))}else{n=p[3]
m=f.$1(e.TL(u,A.cD))
v.push(new B.er(n,l,l,A.cM,l,l,l,l,l,l,m))}}r=o+p[0].length}if(r<d.length){k=A.a.b4(d,r)
v.push(B.cS(l,l,l,l,l,l,l,l,l,f.$1(e),k))}return v},
a3W(d,e){var w,v,u,t,s,r,q,p,o,n=null,m=x.v
switch(d){case"circle":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.jz(e))
return m
case"rounded":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
w=e.gdi()*0.18
m.E(new B.je(B.bx(e,new B.aP(w,w))))
return m
case"triangle":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.aZ(e.gbE().a,e.b))
w=e.d
m.E(new B.aq(e.c,w))
m.E(new B.aq(e.a,w))
m.E(new B.bw())
return m
case"hexagon":w=$.S()
m=B.a([],m)
v=new B.aH(w.r,A.aj,n,n,m)
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
case"diamond":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.aZ(e.gbE().a,e.b))
m.E(new B.aq(e.c,e.gbE().b))
m.E(new B.aq(e.gbE().a,e.d))
m.E(new B.aq(e.a,e.gbE().b))
m.E(new B.bw())
return m
case"arch":m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
w=e.a
u=e.d
m.E(new B.aZ(w,u))
t=e.c
s=(t-w)/2
p=e.b+s
m.E(new B.aq(w,p))
m.be6(new B.r(t,p),new B.aP(s,s))
m.E(new B.aq(t,u))
m.E(new B.bw())
return m
default:m=new B.aH($.S().r,A.aj,n,n,B.a([],m))
m.E(new B.oE(e))
return m}},
fR2(d,e,f){return B.cm(new C.fR3(D.fhw.q(0,d),d,f,e))},
b40:function b40(d,e,f,g,h,i,j,k,l,m,n,o){var _=this
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
clI:function clI(d){this.a=d},
clH:function clH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
clG:function clG(){},
b3Y:function b3Y(d,e){this.b=d
this.a=e},
fTA:function fTA(d){this.a=d},
fTz:function fTz(d,e){this.a=d
this.b=e},
fC0:function fC0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBZ:function fBZ(d){this.a=d},
fC_:function fC_(d,e){this.a=d
this.b=e},
aLi:function aLi(d,e){this.c=d
this.a=e},
bxP:function bxP(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
fiF:function fiF(d,e,f){this.a=d
this.b=e
this.c=f},
aM_:function aM_(d,e){this.b=d
this.a=e},
Wt:function Wt(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bmw:function bmw(d,e){var _=this
_.d=$
_.bw$=d
_.a9$=e
_.c=_.a=null},
e2t:function e2t(d){this.a=d},
e2s:function e2s(d){this.a=d},
e2r:function e2r(d){this.a=d},
Fw:function Fw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
clA:function clA(d){this.a=d},
clz:function clz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
aBT:function aBT(d,e){this.c=d
this.a=e},
bgQ:function bgQ(){this.d=0
this.c=this.a=null},
dg0:function dg0(d){this.a=d},
dg_:function dg_(d){this.a=d},
a99:function a99(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnc:function bnc(d,e){var _=this
_.d=null
_.bw$=d
_.a9$=e
_.c=_.a=null},
er_:function er_(d,e,f){this.a=d
this.b=e
this.c=f},
b1X:function b1X(d,e,f,g){var _=this
_.c=d
_.e=e
_.f=f
_.a=g},
bi2:function bi2(d,e,f){this.b=d
this.c=e
this.a=f},
bti:function bti(d,e,f,g){var _=this
_.b=d
_.c=e
_.d=f
_.a=g},
f7z:function f7z(){},
fR3:function fR3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
bum:function bum(d,e,f){this.b=d
this.c=e
this.a=f},
aO1:function aO1(){},
aOw:function aOw(){},
aPQ:function aPQ(){},
fUB(){var w=0,v=B.j(x.a6),u,t,s,r
var $async$fUB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xP.cp().MQ(D.dwW,A.uQ,!0),$async$fUB)
case 3:r=e
if(r==null||J.ct(r.a)){u=null
w=1
break}t=J.fm(r.a)
s=t.c
if(s==null)throw B.X("That file could not be opened. Try another file.")
if(s.length>8388608)throw B.X("That file is too big. Use a file under 8 MB.")
u=C.iqH(t.b,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fUB,v)},
iqH(d,e){var w,v=d.toLowerCase()
if(A.a.c7(v,".pdf"))return new C.a9s(d,new B.a1u(A.cS.gcs().aN(e),"application/pdf"),"")
if(A.a.c7(v,".docx")){w=C.iiD(e)
if(A.a.i(w).length===0)throw B.X("No readable words were found in that Word file.")
return new C.a9s(d,null,w.length>6e4?A.a.aA(w,0,6e4):w)}w=A.cb.LB(0,e,!0)
if(A.a.i(w).length===0)throw B.X("That file is empty.")
return new C.a9s(d,null,w.length>6e4?A.a.aA(w,0,6e4):w)},
iiD(d){var w,v,u,t,s,r,q,p,o=null,n=new C.cHB().cRr(B.rN(d,A.iv,o,o),o,o,!1).cTn(0,"word/document.xml")
if(n==null)return""
w=n.d0y()
v=A.cb.LB(0,w==null?$.hJ1():w,!0).split("</w:p>")
u=new B.fg("")
for(w=v.length,t=x.N,s=0;s<w;++s){r=v[s]
q=B.ag("<w:t[^>]*>([^<]*)</w:t>",!0,!1,!1,!1).kZ(0,r)
p=A.a.i(B.cF(q,new C.fF6(),B.a3(q).k("M.E"),t).hg(0))
if(p.length!==0){q=B.aL(p,"&lt;","<")
q=B.aL(q,"&gt;",">")
q=B.aL(q,"&quot;",'"')
q=B.aL(q,"&apos;","'")
q=B.aL(q,"&amp;","&")+"\n"
u.a+=q}}w=u.a
return w.charCodeAt(0)==0?w:w},
a9s:function a9s(d,e,f){this.a=d
this.b=e
this.c=f},
fF6:function fF6(){},
i_J(d,e,f,g,h,i,j,k,l){return new C.P_(l,e,d,g,f,i,h,j,k,null)},
P_:function P_(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGO:function aGO(d,e,f,g,h,i,j,k,l){var _=this
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
eJT:function eJT(d){this.a=d},
eJR:function eJR(){},
eJS:function eJS(d){this.a=d},
eGg:function eGg(){},
eGh:function eGh(){},
eGi:function eGi(d,e){this.a=d
this.b=e},
eHR:function eHR(d){this.a=d},
eHF:function eHF(){},
eHG:function eHG(){},
eFE:function eFE(){},
eIZ:function eIZ(d){this.a=d},
eJP:function eJP(d,e){this.a=d
this.b=e},
eHP:function eHP(d,e){this.a=d
this.b=e},
eJC:function eJC(d){this.a=d},
eJD:function eJD(){},
eJE:function eJE(){},
eJF:function eJF(d){this.a=d},
eJG:function eJG(){},
eF1:function eF1(d){this.a=d},
eJQ:function eJQ(){},
eGY:function eGY(d,e){this.a=d
this.b=e},
eF_:function eF_(d){this.a=d},
eF0:function eF0(d){this.a=d},
eHk:function eHk(d){this.a=d},
eHl:function eHl(d,e,f){this.a=d
this.b=e
this.c=f},
eHm:function eHm(d){this.a=d},
eGX:function eGX(){},
eGW:function eGW(d){this.a=d},
eGU:function eGU(){},
eGT:function eGT(d){this.a=d},
eGV:function eGV(){},
eGc:function eGc(d){this.a=d},
eGd:function eGd(d){this.a=d},
eH3:function eH3(d){this.a=d},
eGZ:function eGZ(d){this.a=d},
eH_:function eH_(d){this.a=d},
eH0:function eH0(d){this.a=d},
eH1:function eH1(d){this.a=d},
eH2:function eH2(d){this.a=d},
eH4:function eH4(d,e){this.a=d
this.b=e},
eF3:function eF3(){},
eF4:function eF4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHf:function eHf(){},
eHg:function eHg(d,e){this.a=d
this.b=e},
eHd:function eHd(d,e,f){this.a=d
this.b=e
this.c=f},
eHe:function eHe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eH7:function eH7(d,e,f){this.a=d
this.b=e
this.c=f},
eH8:function eH8(d,e,f){this.a=d
this.b=e
this.c=f},
eH9:function eH9(d){this.a=d},
eHa:function eHa(d,e){this.a=d
this.b=e},
eHb:function eHb(d,e){this.a=d
this.b=e},
eHc:function eHc(d,e){this.a=d
this.b=e},
eH6:function eH6(d,e){this.a=d
this.b=e},
eHi:function eHi(d){this.a=d},
eHj:function eHj(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHh:function eHh(d){this.a=d},
eHA:function eHA(){},
eHB:function eHB(){},
eHC:function eHC(){},
eHD:function eHD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHx:function eHx(d){this.a=d},
eHz:function eHz(){},
eHy:function eHy(d,e,f,g,h,i,j){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j},
eHv:function eHv(d,e,f){this.a=d
this.b=e
this.c=f},
eHw:function eHw(d,e){this.a=d
this.b=e},
eHE:function eHE(){},
eH5:function eH5(d,e){this.a=d
this.b=e},
eFk:function eFk(){},
eFl:function eFl(d,e,f){this.a=d
this.b=e
this.c=f},
eFm:function eFm(d){this.a=d},
eFn:function eFn(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eFj:function eFj(d){this.a=d},
eHK:function eHK(d){this.a=d},
eHJ:function eHJ(d,e){this.a=d
this.b=e},
eHI:function eHI(d,e){this.a=d
this.b=e},
eHH:function eHH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHL:function eHL(d,e){this.a=d
this.b=e},
eDY:function eDY(d,e){this.a=d
this.b=e},
eFi:function eFi(d,e){this.a=d
this.b=e},
eFg:function eFg(d){this.a=d},
eHT:function eHT(d,e,f){this.a=d
this.b=e
this.c=f},
eFc:function eFc(d,e){this.a=d
this.b=e},
eFb:function eFb(d){this.a=d},
eHS:function eHS(d,e,f){this.a=d
this.b=e
this.c=f},
eF2:function eF2(d){this.a=d},
eFF:function eFF(){},
eJA:function eJA(d,e){this.a=d
this.b=e},
eJB:function eJB(d,e,f){this.a=d
this.b=e
this.c=f},
eJ_:function eJ_(d,e,f){this.a=d
this.b=e
this.c=f},
eDZ:function eDZ(d){this.a=d},
eDW:function eDW(d,e){this.a=d
this.b=e},
eDM:function eDM(d,e){this.a=d
this.b=e},
eDJ:function eDJ(d){this.a=d},
eDI:function eDI(d,e){this.a=d
this.b=e},
eDK:function eDK(d,e){this.a=d
this.b=e},
eFe:function eFe(d){this.a=d},
eFf:function eFf(d,e){this.a=d
this.b=e},
eFd:function eFd(d){this.a=d},
eEq:function eEq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eEr:function eEr(d,e){this.a=d
this.b=e},
eEv:function eEv(d,e){this.a=d
this.b=e},
eEw:function eEw(d){this.a=d},
eEt:function eEt(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eEu:function eEu(d){this.a=d},
eEs:function eEs(){},
eEp:function eEp(d,e,f){this.a=d
this.b=e
this.c=f},
eHu:function eHu(d,e){this.a=d
this.b=e},
eJJ:function eJJ(d){this.a=d},
eJK:function eJK(d,e){this.a=d
this.b=e},
eJL:function eJL(d){this.a=d},
eJM:function eJM(d,e,f){this.a=d
this.b=e
this.c=f},
eJI:function eJI(d){this.a=d},
eJf:function eJf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJe:function eJe(d,e,f){this.a=d
this.b=e
this.c=f},
eJd:function eJd(){},
eJc:function eJc(d,e,f){this.a=d
this.b=e
this.c=f},
eJb:function eJb(d,e){this.a=d
this.b=e},
eJ8:function eJ8(d,e,f){this.a=d
this.b=e
this.c=f},
eJ6:function eJ6(d){this.a=d},
eJ7:function eJ7(d){this.a=d},
eJa:function eJa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eJ9:function eJ9(d){this.a=d},
eG8:function eG8(d,e){this.a=d
this.b=e},
eG7:function eG7(d,e){this.a=d
this.b=e},
eJ0:function eJ0(){},
eJz:function eJz(d,e){this.a=d
this.b=e},
eJx:function eJx(d){this.a=d},
eJy:function eJy(d){this.a=d},
eDR:function eDR(d,e){this.a=d
this.b=e},
eDP:function eDP(d){this.a=d},
eDQ:function eDQ(d){this.a=d},
eDS:function eDS(d,e){this.a=d
this.b=e},
eDT:function eDT(d,e,f){this.a=d
this.b=e
this.c=f},
eDX:function eDX(d,e){this.a=d
this.b=e},
eDO:function eDO(d,e,f){this.a=d
this.b=e
this.c=f},
eDN:function eDN(d){this.a=d},
eHQ:function eHQ(d,e,f){this.a=d
this.b=e
this.c=f},
eJH:function eJH(d,e,f){this.a=d
this.b=e
this.c=f},
eGb:function eGb(d,e,f){this.a=d
this.b=e
this.c=f},
eGa:function eGa(){},
eEz:function eEz(d,e,f){this.a=d
this.b=e
this.c=f},
eEA:function eEA(d){this.a=d},
eDL:function eDL(d,e){this.a=d
this.b=e},
eFD:function eFD(d,e){this.a=d
this.b=e},
eDU:function eDU(d,e){this.a=d
this.b=e},
eE2:function eE2(d){this.a=d},
eE3:function eE3(d,e){this.a=d
this.b=e},
eE4:function eE4(d,e){this.a=d
this.b=e},
eE1:function eE1(d){this.a=d},
eEf:function eEf(d,e){this.a=d
this.b=e},
eE0:function eE0(d){this.a=d},
eEi:function eEi(d){this.a=d},
eEj:function eEj(d){this.a=d},
eEk:function eEk(d){this.a=d},
eEl:function eEl(d){this.a=d},
eEm:function eEm(d){this.a=d},
eEn:function eEn(){},
eEo:function eEo(){},
eE5:function eE5(d){this.a=d},
eE6:function eE6(d){this.a=d},
eE7:function eE7(d){this.a=d},
eE8:function eE8(d){this.a=d},
eE9:function eE9(d){this.a=d},
eEa:function eEa(d){this.a=d},
eEb:function eEb(d){this.a=d},
eEc:function eEc(d){this.a=d},
eEd:function eEd(d){this.a=d},
eEe:function eEe(d){this.a=d},
eEg:function eEg(d){this.a=d},
eEh:function eEh(d,e){this.a=d
this.b=e},
eFC:function eFC(d,e,f){this.a=d
this.b=e
this.c=f},
eFB:function eFB(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eFA:function eFA(d,e,f){this.a=d
this.b=e
this.c=f},
eFz:function eFz(d,e){this.a=d
this.b=e},
eDV:function eDV(d,e){this.a=d
this.b=e},
eED:function eED(d){this.a=d},
eEC:function eEC(d){this.a=d},
eEB:function eEB(d,e){this.a=d
this.b=e},
eEE:function eEE(d){this.a=d},
eEF:function eEF(d){this.a=d},
eEG:function eEG(){},
eEH:function eEH(d,e){this.a=d
this.b=e},
eFh:function eFh(d){this.a=d},
eHt:function eHt(d,e){this.a=d
this.b=e},
eHs:function eHs(d,e){this.a=d
this.b=e},
eHr:function eHr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eHp:function eHp(d){this.a=d},
eHq:function eHq(d,e){this.a=d
this.b=e},
eHn:function eHn(){},
eHo:function eHo(){},
eJ1:function eJ1(){},
eJ2:function eJ2(d,e,f){this.a=d
this.b=e
this.c=f},
eJ3:function eJ3(){},
eJ4:function eJ4(d){this.a=d},
eJ5:function eJ5(d,e){this.a=d
this.b=e},
eE_:function eE_(d,e){this.a=d
this.b=e},
eF5:function eF5(){},
eF6:function eF6(){},
eF7:function eF7(){},
eFa:function eFa(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eF9:function eF9(d,e){this.a=d
this.b=e},
eF8:function eF8(d,e,f){this.a=d
this.b=e
this.c=f},
eGC:function eGC(d){this.a=d},
eGB:function eGB(){},
eGD:function eGD(d,e){this.a=d
this.b=e},
eGE:function eGE(d,e){this.a=d
this.b=e},
eGA:function eGA(d){this.a=d},
eGF:function eGF(d,e){this.a=d
this.b=e},
eGz:function eGz(d){this.a=d},
eGG:function eGG(d,e){this.a=d
this.b=e},
eGy:function eGy(d){this.a=d},
eGH:function eGH(d,e){this.a=d
this.b=e},
eGx:function eGx(d){this.a=d},
eGI:function eGI(d,e){this.a=d
this.b=e},
eGw:function eGw(d,e){this.a=d
this.b=e},
eGJ:function eGJ(d,e){this.a=d
this.b=e},
eGv:function eGv(d){this.a=d},
eGK:function eGK(d,e){this.a=d
this.b=e},
eGu:function eGu(d){this.a=d},
eGn:function eGn(d,e){this.a=d
this.b=e},
eGo:function eGo(d){this.a=d},
eGp:function eGp(d){this.a=d},
eGm:function eGm(d){this.a=d},
eGq:function eGq(d,e){this.a=d
this.b=e},
eGl:function eGl(d){this.a=d},
eGr:function eGr(d,e){this.a=d
this.b=e},
eGk:function eGk(d){this.a=d},
eGs:function eGs(d,e){this.a=d
this.b=e},
eGj:function eGj(d){this.a=d},
eGt:function eGt(d){this.a=d},
eFu:function eFu(d){this.a=d},
eFv:function eFv(d){this.a=d},
eFw:function eFw(d){this.a=d},
eFy:function eFy(d){this.a=d},
eFp:function eFp(d){this.a=d},
eFo:function eFo(d,e){this.a=d
this.b=e},
eFq:function eFq(d,e){this.a=d
this.b=e},
eFr:function eFr(d){this.a=d},
eFs:function eFs(d){this.a=d},
eFt:function eFt(d,e){this.a=d
this.b=e},
eFx:function eFx(d){this.a=d},
eJN:function eJN(d){this.a=d},
eJO:function eJO(d){this.a=d},
eGN:function eGN(d,e){this.a=d
this.b=e},
eGM:function eGM(d,e){this.a=d
this.b=e},
eGL:function eGL(d,e){this.a=d
this.b=e},
eGO:function eGO(d){this.a=d},
eGP:function eGP(d){this.a=d},
eIb:function eIb(d,e){this.a=d
this.b=e},
eIc:function eIc(d){this.a=d},
eId:function eId(d){this.a=d},
eIo:function eIo(d){this.a=d},
eIz:function eIz(d){this.a=d},
eIK:function eIK(d){this.a=d},
eIR:function eIR(d){this.a=d},
eIS:function eIS(d){this.a=d},
eIT:function eIT(d){this.a=d},
eIU:function eIU(d){this.a=d},
eIV:function eIV(d,e){this.a=d
this.b=e},
eIe:function eIe(d){this.a=d},
eIf:function eIf(d){this.a=d},
eIg:function eIg(d){this.a=d},
eIh:function eIh(d){this.a=d},
eIi:function eIi(d){this.a=d},
eIj:function eIj(d){this.a=d},
eIk:function eIk(d){this.a=d},
eIl:function eIl(d){this.a=d},
eIm:function eIm(d){this.a=d},
eIn:function eIn(d){this.a=d},
eIp:function eIp(d){this.a=d},
eIq:function eIq(d){this.a=d},
eIr:function eIr(d){this.a=d},
eIs:function eIs(d){this.a=d},
eIt:function eIt(d){this.a=d},
eIu:function eIu(d){this.a=d},
eIv:function eIv(d){this.a=d},
eIw:function eIw(d){this.a=d},
eIx:function eIx(d){this.a=d},
eI1:function eI1(d){this.a=d},
eIy:function eIy(d){this.a=d},
eI9:function eI9(d){this.a=d},
eIA:function eIA(d){this.a=d},
eI8:function eI8(d,e){this.a=d
this.b=e},
eIB:function eIB(d,e){this.a=d
this.b=e},
eIC:function eIC(d,e){this.a=d
this.b=e},
eI7:function eI7(d,e,f){this.a=d
this.b=e
this.c=f},
eHY:function eHY(d,e){this.a=d
this.b=e},
eIa:function eIa(d){this.a=d},
eIW:function eIW(d,e){this.a=d
this.b=e},
eIY:function eIY(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eIX:function eIX(d,e){this.a=d
this.b=e},
eID:function eID(d,e,f){this.a=d
this.b=e
this.c=f},
eI6:function eI6(d,e,f){this.a=d
this.b=e
this.c=f},
eHX:function eHX(d,e,f){this.a=d
this.b=e
this.c=f},
eHV:function eHV(d,e){this.a=d
this.b=e},
eIE:function eIE(d,e){this.a=d
this.b=e},
eI5:function eI5(d,e){this.a=d
this.b=e},
eHW:function eHW(d,e){this.a=d
this.b=e},
eHU:function eHU(d,e){this.a=d
this.b=e},
eIF:function eIF(d){this.a=d},
eI4:function eI4(d){this.a=d},
eIG:function eIG(d){this.a=d},
eIH:function eIH(d){this.a=d},
eII:function eII(d){this.a=d},
eIJ:function eIJ(d){this.a=d},
eI3:function eI3(d){this.a=d},
eIL:function eIL(d){this.a=d},
eIM:function eIM(d){this.a=d},
eIN:function eIN(d,e){this.a=d
this.b=e},
eI2:function eI2(d){this.a=d},
eIO:function eIO(d,e){this.a=d
this.b=e},
eI0:function eI0(d){this.a=d},
eIP:function eIP(d,e){this.a=d
this.b=e},
eI_:function eI_(d){this.a=d},
eIQ:function eIQ(d,e){this.a=d
this.b=e},
eHZ:function eHZ(d){this.a=d},
eEy:function eEy(d,e,f){this.a=d
this.b=e
this.c=f},
eEx:function eEx(d,e){this.a=d
this.b=e},
eJi:function eJi(d,e){this.a=d
this.b=e},
eJh:function eJh(d,e){this.a=d
this.b=e},
eJj:function eJj(d,e){this.a=d
this.b=e},
eJg:function eJg(d,e){this.a=d
this.b=e},
eFI:function eFI(d,e){this.a=d
this.b=e},
eFH:function eFH(d){this.a=d},
eFJ:function eFJ(d,e){this.a=d
this.b=e},
eFG:function eFG(d){this.a=d},
eGf:function eGf(){},
eGe:function eGe(){},
eJv:function eJv(d){this.a=d},
eJu:function eJu(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJt:function eJt(d,e){this.a=d
this.b=e},
eJo:function eJo(d,e){this.a=d
this.b=e},
eJs:function eJs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eJp:function eJp(d,e){this.a=d
this.b=e},
eJk:function eJk(d){this.a=d},
eJl:function eJl(d){this.a=d},
eJm:function eJm(d){this.a=d},
eJn:function eJn(d){this.a=d},
eJq:function eJq(d,e){this.a=d
this.b=e},
eJr:function eJr(d,e){this.a=d
this.b=e},
eJw:function eJw(d){this.a=d},
eEZ:function eEZ(d){this.a=d},
eEY:function eEY(d,e,f){this.a=d
this.b=e
this.c=f},
eEX:function eEX(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEM:function eEM(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
eEN:function eEN(d,e){this.a=d
this.b=e},
eEO:function eEO(d,e){this.a=d
this.b=e},
eEP:function eEP(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEL:function eEL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEQ:function eEQ(d,e){this.a=d
this.b=e},
eES:function eES(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eER:function eER(d,e){this.a=d
this.b=e},
eET:function eET(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEK:function eEK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eEU:function eEU(d,e){this.a=d
this.b=e},
eEJ:function eEJ(d,e){this.a=d
this.b=e},
eEV:function eEV(d,e){this.a=d
this.b=e},
eEI:function eEI(d){this.a=d},
eEW:function eEW(d,e){this.a=d
this.b=e},
eGR:function eGR(d){this.a=d},
eGQ:function eGQ(d){this.a=d},
eGS:function eGS(d,e){this.a=d
this.b=e},
eFW:function eFW(d,e){this.a=d
this.b=e},
eFX:function eFX(d,e){this.a=d
this.b=e},
eFV:function eFV(d,e){this.a=d
this.b=e},
eFY:function eFY(d,e){this.a=d
this.b=e},
eFU:function eFU(d,e){this.a=d
this.b=e},
eFZ:function eFZ(d,e){this.a=d
this.b=e},
eFT:function eFT(d,e){this.a=d
this.b=e},
eG_:function eG_(d,e){this.a=d
this.b=e},
eFS:function eFS(d,e){this.a=d
this.b=e},
eG0:function eG0(d,e){this.a=d
this.b=e},
eFR:function eFR(d,e){this.a=d
this.b=e},
eG1:function eG1(d,e,f){this.a=d
this.b=e
this.c=f},
eFQ:function eFQ(d,e){this.a=d
this.b=e},
eG2:function eG2(d,e,f){this.a=d
this.b=e
this.c=f},
eFP:function eFP(d,e){this.a=d
this.b=e},
eG3:function eG3(d,e){this.a=d
this.b=e},
eFO:function eFO(d,e,f){this.a=d
this.b=e
this.c=f},
eFL:function eFL(d,e){this.a=d
this.b=e},
eG4:function eG4(d,e){this.a=d
this.b=e},
eFN:function eFN(d,e){this.a=d
this.b=e},
eG5:function eG5(d,e){this.a=d
this.b=e},
eFM:function eFM(d,e,f){this.a=d
this.b=e
this.c=f},
eFK:function eFK(d,e){this.a=d
this.b=e},
eG6:function eG6(d,e){this.a=d
this.b=e},
eG9:function eG9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
eDH:function eDH(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
eHO:function eHO(d,e){this.a=d
this.b=e},
eHM:function eHM(d){this.a=d},
eHN:function eHN(d,e){this.a=d
this.b=e},
agF:function agF(d,e,f){this.a=d
this.b=e
this.c=f},
aBf:function aBf(d,e,f){this.c=d
this.e=e
this.a=f},
bfC:function bfC(d,e){var _=this
_.e=_.d=$
_.cO$=d
_.b9$=e
_.c=_.a=null},
dbs:function dbs(d){this.a=d},
dbr:function dbr(d){this.a=d},
bfR:function bfR(d,e){this.c=d
this.a=e},
dbQ:function dbQ(d){this.a=d},
dbR:function dbR(d){this.a=d},
KM:function KM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bfB:function bfB(){this.d=!1
this.c=this.a=null},
dbp:function dbp(d){this.a=d},
dbl:function dbl(d){this.a=d},
dbq:function dbq(d){this.a=d},
dbk:function dbk(d){this.a=d},
dbo:function dbo(d){this.a=d},
dbm:function dbm(d){this.a=d},
dbn:function dbn(d,e){this.a=d
this.b=e},
QK:function QK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
a0Z:function a0Z(d,e,f){this.c=d
this.d=e
this.a=f},
aGR:function aGR(d,e,f){var _=this
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
eKt:function eKt(){},
eKj:function eKj(d){this.a=d},
eKs:function eKs(d){this.a=d},
eKk:function eKk(d){this.a=d},
eKl:function eKl(d){this.a=d},
eKf:function eKf(d){this.a=d},
eKg:function eKg(d,e){this.a=d
this.b=e},
eKh:function eKh(d){this.a=d},
eKi:function eKi(d,e,f){this.a=d
this.b=e
this.c=f},
eKq:function eKq(){},
eKr:function eKr(d){this.a=d},
eKm:function eKm(d){this.a=d},
eKn:function eKn(d){this.a=d},
eKo:function eKo(d){this.a=d},
eKp:function eKp(d){this.a=d},
eKu:function eKu(d,e,f){this.a=d
this.b=e
this.c=f},
eKw:function eKw(d,e){this.a=d
this.b=e},
eKv:function eKv(d){this.a=d},
KS:function KS(d,e){this.c=d
this.a=e},
buT:function buT(d,e){this.b=d
this.a=e},
bkB:function bkB(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkA:function bkA(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
aMH:function aMH(){},
aOJ:function aOJ(){},
bAH:function bAH(){},
aOK:function aOK(){},
fWE(){var w=0,v=B.j(x.bZ),u,t,s,r,q
var $async$fWE=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.xP.cp().MQ(B.a(["pdf"],x.s),A.uQ,!0),$async$fWE)
case 3:q=e
if(q==null||J.ct(q.a)){u=null
w=1
break}t=J.fm(q.a)
s=t.c
if(s==null||s.length===0){u=null
w=1
break}r=A.a.i(t.b)
if(r.length===0)r="document.pdf"
u=new B.brX(s,"data:application/pdf;base64,"+A.cS.gcs().aN(s),r)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWE,v)},
iro(d){var w,v,u,t,s,r
try{w=B.jP(d,0,null)
v=B.ag("/Type\\s*/Pages[^>]*?/Count\\s+(\\d+)",!0,!0,!1,!1).cE(w)
if(v!=null){s=v.b[1]
s.toString
u=B.cb(s,null)
if(u!=null&&u>0){s=A.o.D(u,1,200)
return s}}t=B.ag("/Type\\s*/Page\\b",!0,!1,!1,!1).kZ(0,w).gJ(0)
if(t>0){s=J.ajt(t,1,200)
return s}}catch(r){}return 1},
fWv(d){return C.irn(d)},
irn(d){var w=0,v=B.j(x.T),u
var $async$fWv=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(!A.a.a_(d,"data:image")){u=d
w=1
break}u=d
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWv,v)},
bGl(d,e,f,g){return C.irx(d,e,f,g)},
irx(b4,b5,b6,b7){var w=0,v=B.j(x.T),u,t=2,s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3
var $async$bGl=B.e(function(b8,b9){if(b8===1){s.push(b9)
w=t}for(;;)switch(w){case 0:if(!new B.ec(b4,x.co).gae(0).C()){u=null
w=1
break}t=4
r=A.i.D(b5.a,80,2400)
q=A.i.D(b5.b,80,2400)
p=B.hH_(b7,new B.av(r,q))
o=1
n=1
m=0
l=0
for(a7=b4.length,a8=0;a8<a7;++a8){k=b4[a8]
if(k==null)continue
a9=o
b0=k.a
o=Math.min(B.jo(a9),b0)
b0=n
a9=k.b
n=Math.min(B.jo(b0),a9)
a9=m
b0=k.a
m=Math.max(B.jo(a9),b0)
b0=l
a9=k.b
l=Math.max(B.jo(b0),a9)}o=A.i.D(o-0.04,0,1)
n=A.i.D(n-0.04,0,1)
m=A.i.D(m+0.04,0,1)
l=A.i.D(l+0.04,0,1)
j=A.i.D(m-o,0.12,1)
i=A.i.D(l-n,0.12,1)
h=A.o.D(A.i.V(800*(i/j)),180,420)
$.S()
g=new B.q6(new B.pH())
f=B.zr(g,null)
a7=B.L()
a7.r=A.rE.gp(0)
f.aF(new B.a4(0,0,800,0+h),a7)
e=800/(j*r)
b1=B.L()
b1.r=b6.gp(b6)
b1.c=p*e
b1.d=A.bG
b1.e=A.dP
b1.b=A.aa
b1.f=!0
d=b1
a0=null
for(a7=b4.length,a8=0;a8<b4.length;b4.length===a7||(0,B.I)(b4),++a8){a1=b4[a8]
if(a1==null){a0=null
continue}a2=new B.r((a1.a-o)/j*800,(a1.b-n)/i*h)
if(a0!=null)f.ah(a0,a2,d)
a0=a2}a3=g.o8()
w=7
return B.b(a3.xI(800,h),$async$bGl)
case 7:a4=b9
a3.t()
w=8
return B.b(a4.hj(A.hf),$async$bGl)
case 8:a5=b9
a4.t()
if(a5==null){u=null
w=1
break}a7=J.eR(A.dI.gaT(a5))
a7=A.cS.gcs().aN(a7)
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
return B.i($async$bGl,v)},
aSH(d,e,f){return C.irl(d,e,f)},
irl(d,e,f){var w=0,v=B.j(x.go),u,t,s,r,q
var $async$aSH=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:r={}
q=B.a([],x.bA)
r.a=null
r.b=e==null?A.av:e
r.c=f==null?5.2:f
w=3
return B.b(B.aj7(d,e,f,new C.fWt(r,q),q,"Sign document"),$async$aSH)
case 3:if(!new B.ec(q,x.co).gae(0).C()||r.a==null){u=null
w=1
break}t=r.a
t.toString
w=4
return B.b(C.bGl(q,t,r.b,r.c),$async$aSH)
case 4:s=h
if(s==null){u=null
w=1
break}u=new C.b44(s,r.c,r.b)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSH,v)},
irv(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h="&amp;",g="&lt;",f="&gt;",e="&quot;",d='<!DOCTYPE html><html><head><meta charset="utf-8"><title>'+C.hzv(a0.b)+'</title>\n<style>\n  @page { size: 210mm 297mm; margin: 1.7mm; }\n  * { box-sizing: border-box; }\n  body { font-family: system-ui, sans-serif; background: #fff; color: #111; margin: 0; }\n  h1 { font-size: 14px; margin: 6px 10mm; }\n  .slide { page-break-after: always; width: 100%; height: 293.6mm; border: 1px solid #ddd; position: relative; overflow: hidden; margin: 0 auto 24px; }\n  /* Requested after the margin was already trimmed to near zero: a real\n     zoom-in on the whole slide (frame included), not just less border.\n     `.slide` keeps overflow:hidden so whatever spills past the edge at\n     this scale gets cropped instead of pushing the page layout around.\n     Width and height scale independently \u2014 a separate "wider on the\n     left and right only" request on top of the overall zoom. */\n  .zoom { position: absolute; inset: 0; transform: scaleX(1.0375) scaleY(1.01875); transform-origin: center center; }\n  .el { position: absolute; overflow: hidden; }\n  .txt { white-space: pre-wrap; word-break: break-word; }\n  img { max-width: 100%; max-height: 100%; object-fit: contain; }\n  .pdf { display:flex; flex-direction:column; align-items:center; justify-content:center; height:100%; background:#f8fafc; }\n</style></head><body>\n<h1>'+C.hzv(a0.b)+"</h1>\n"
for(w=a0.r,v=0;v<w.length;++v){u=w[v]
d=d+('<div class="slide" style="background:#'+A.a.b4(A.a.b0(A.o.ft(u.e,16),8,"0"),2)+'">\n')+'<div class="zoom">\n'
for(t=u.z,s=t.length,r=0;r<t.length;t.length===s||(0,B.I)(t),++r){q=t[r]
d+='<div class="el" style="left:'+A.i.ad(q.c*100,2)+"%;top:"+A.i.ad(q.d*100,2)+"%;width:"+A.i.ad(q.e*100,2)+"%;height:"+A.i.ad(q.f*100,2)+'%">'
p=q.b
switch(p.a){case 0:o=A.a.b4(A.a.b0(A.o.ft(q.Q,16),8,"0"),2)
p=q.w
n=q.r
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d+='<div class="txt" style="font-size:'+B.w(p)+"px;color:#"+o+'">'+B.aL(n,'"',e)+"</div>"
break
case 1:case 4:n=q.at
if(n!=null&&A.a.a_(n,"data:image")){m=p===D.kj&&q.c===0&&q.d===0&&q.e===1&&q.f===1?' style="object-fit:fill"':""
d+='<img src="'+n+'" alt=""'+m+" />"}break
case 3:p=q.db
if(p.length===0)p="PDF document"
p=B.aL(p,"&",h)
p=B.aL(p,"<",g)
p=B.aL(p,">",f)
d+='<div class="pdf"><div>\ud83d\udcc4 '+B.aL(p,'"',e)+"</div></div>"
break
case 2:d+='<div style="width:100%;height:100%;background:'+C.hz5(q.ay)+";border:2px solid "+C.hz5(q.ch)+'"></div>'
break
case 5:l=C.hhY(q.r)
p=l==null
n=p?null:l.b
n=A.a.i(n==null?"":n).length===0?"My links":A.a.i(l.b)
n=B.aL(n,"&",h)
n=B.aL(n,"<",g)
n=B.aL(n,">",f)
d=d+'<div style="width:100%;height:100%;box-sizing:border-box;background:#111114;border:4px solid #8E8A85;border-radius:18px;padding:18px 8px 8px;color:#fff;font-family:sans-serif;text-align:center;overflow:hidden">'+('<div style="font-weight:700;font-size:13px">'+B.aL(n,'"',e)+"</div>")
p=p?null:l.galw()
if(p==null)p=A.aD1
n=B.U(p)
k=n.k("iB<1>")
j=new B.iB(p,0,8,k)
j.nb(p,0,8,n.c)
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
hz5(d){var w=A.o.aI(d,24)
return"rgba("+(A.o.aI(d,16)&255)+","+(A.o.aI(d,8)&255)+","+(d&255)+","+A.i.ad((w&255)/255,3)+")"},
hzv(d){var w=B.aL(d,"&","&amp;")
w=B.aL(w,"<","&lt;")
w=B.aL(w,">","&gt;")
return B.aL(w,'"',"&quot;")},
bGj(d,e){var w=0,v=B.j(x.H)
var $async$bGj=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b(B.cg(null,null,!0,null,new C.fWC(e,C.irv(e),d),d,null,!0,!0,x.H),$async$bGj)
case 2:return B.h(null,v)}})
return B.i($async$bGj,v)},
bGk(){var w=0,v=B.j(x.T),u,t,s
var $async$bGk=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A2.Hy(92,2400),$async$bGk)
case 3:s=e
if(s==null){u=null
w=1
break}w=4
return B.b(C.fWv(s),$async$bGk)
case 4:t=e
u=t==null?s:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bGk,v)},
aSI(d){var w=0,v=B.j(x.N),u,t,s,r,q
var $async$aSI=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(C.hjg(d),$async$aSI)
case 3:t=f
s=A.a.i(d.b)
r=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
q=A.a.i(B.aL(s,r,"_"))
u=A6.fZl(t,q.length===0?"presentation":q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aSI,v)},
htn(d,e){var w
if(e<0||e>=d.r.length)return A.o.D(d.e,1,120)
w=d.r[e].w
return A.o.D(w>0?w:d.e,1,120)},
b44:function b44(d,e,f){this.a=d
this.b=e
this.c=f},
fWt:function fWt(d,e){this.a=d
this.b=e},
fWC:function fWC(d,e,f){this.a=d
this.b=e
this.c=f},
fWz:function fWz(d){this.a=d},
fWA:function fWA(d,e,f){this.a=d
this.b=e
this.c=f},
fWB:function fWB(d,e,f){this.a=d
this.b=e
this.c=f},
irm(d){return C.km(d.w)},
irt(d){var w,v,u,t
if(d.length===0||!A.d.cD(d,C.it7()))return null
for(w=d.length,v=0;v<w;++v){u=d[v].x
t=A.a.i(u==null?"":u)
if(t.length!==0)return t}return""},
zc(d){var w=A.a.i(d),v=B.ag("[^A-Z0-9]",!0,!1,!1,!1),u=B.aL(w.toUpperCase(),v,"")
w=$.hNl()
if(w.b.test(u))return u
return null},
hH1(d,e,f){var w,v,u=C.hWl(d),t=$.oz()
for(w=0;w<80;++w){v=u+A.a.b0(A.o.v(t.aw(1000)),3,"0")
if(!f.q(0,v))return v}return u+A.a.b0(A.o.v(Date.now()%1000),3,"0")},
irz(d){var w,v,u,t,s=B.aR(x.N)
for(w=J.aT(d.a),v=new B.eJ(w,d.b);v.C();){u=w.gP(w).y
t=C.zc(u==null?"":u)
if(t!=null)s.I(0,t)}return s},
fWr(d,e){var w,v=d.y,u=C.zc(v==null?"":v)
if(u!=null)return d.y=u
w=C.irz(new B.Y(e,new C.fWs(d),B.U(e).k("Y<1>")))
v=d.x
return d.y=C.hH1(v==null?"":v,null,w)},
iry(d){var w,v
if(d.length!==1)return null
w=A.d.gH(d)
if(!C.km(w.w))return null
v=w.y
return C.zc(v==null?"":v)},
i_L(){var w,v=$.oz(),u=J.e6(10,x.N)
for(w=0;w<10;++w)u[w]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[v.aw(32)]
return"SL"+A.d.hg(u)},
Xq(){var w=0,v=B.j(x.P),u,t=2,s=[],r,q,p,o,n,m
var $async$Xq=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Xq)
case 3:if(!e){u=B.T(x.N,x.z)
w=1
break}t=5
w=8
return B.b(B.f5("ngmy_slides_transfer_qr_stashes_v1",null,!1,A.bN),$async$Xq)
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
return B.i($async$Xq,v)},
Xr(d){return C.i_M(d)},
i_M(d){var w=0,v=B.j(x.H),u,t=2,s=[],r,q,p
var $async$Xr=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$Xr)
case 3:if(!f){w=1
break}t=5
w=8
return B.b(B.hN("ngmy_slides_transfer_qr_stashes_v1",B.J(["stashes",d,"savedAt",new B.V(Date.now(),0,!1).aa().ag()],x.N,x.z),!1,!1,A.cP,null),$async$Xr)
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
return B.i($async$Xr,v)},
a9u(a0,a1,a2,a3,a4){var w=0,v=B.j(x.gl),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9u=B.e(function(a5,a6){if(a5===1)return B.f(a6,v)
for(;;)switch(w){case 0:w=3
return B.b(B.c8(),$async$a9u)
case 3:if(!a6){u=null
w=1
break}t=A.a.i(a0)
if(t.length===0){u=null
w=1
break}w=4
return B.b(C.Xq(),$async$a9u)
case 4:s=a6
r=C.zc(a2==null?"":a2)
if(r==null)r=a3!=null?C.hH1(a3,null,A.M):null
q=x.N
p=B.aR(q)
for(o=J.dq(s),n=J.aT(o.ghM(s)),m=x.f;n.C();){l=n.gP(n)
if(!m.b(l))continue
k=J.t(l,"claimCode")
j=C.zc(J.k(k==null?"":k))
if(j!=null)p.I(0,j)}n=o.gdP(s),n=n.gae(n),k=x.z
case 5:if(!n.C()){w=6
break}i=n.gP(n)
h=i.b
if(!m.b(h)){w=5
break}g=B.a1(h,q,k)
h=g.h(0,"bundleId")
if(J.k(h==null?"":h)!==a1){w=5
break}q=A.dV.aN(t)
g.n(0,"payload",A.cS.gcs().aN(q))
g.n(0,"ownerEmail",A.a.i(a4))
g.n(0,"updatedAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.Vl.q(0,A.a.i(a4.toLowerCase())))g.n(0,"sharedByAdmin",!0)
if(r!=null){g.n(0,"kind","marriage")
g.n(0,"usesRemaining",2)
f=r}else{q=g.h(0,"claimCode")
f=C.zc(J.k(q==null?"":q))
if(f==null)f=C.hts(p)
g.n(0,"usesRemaining",25)}g.n(0,"claimCode",f)
q=i.a
o.n(s,q,g)
w=7
return B.b(C.Xr(s),$async$a9u)
case 7:u=new B.aIk(f,"NGMYSLIDESYNC2|"+q,q)
w=1
break
w=5
break
case 6:e=C.i_L()
n=r==null
d=n?C.hts(p):r
q=B.T(q,x.C)
q.n(0,"ownerEmail",A.a.i(a4))
q.n(0,"bundleId",a1)
m=A.dV.aN(t)
q.n(0,"payload",A.cS.gcs().aN(m))
n=!n
q.n(0,"usesRemaining",n?2:25)
q.n(0,"createdAt",new B.V(Date.now(),0,!1).aa().ag())
if(D.Vl.q(0,A.a.i(a4.toLowerCase())))q.n(0,"sharedByAdmin",!0)
q.n(0,"claimCode",d)
if(n)q.n(0,"kind","marriage")
o.n(s,e,q)
w=8
return B.b(C.Xr(s),$async$a9u)
case 8:u=new B.aIk(d,"NGMYSLIDESYNC2|"+e,e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9u,v)},
hts(d){var w,v,u=$.oz()
for(w=0;w<200;++w){v="SL"+A.a.b0(A.o.v(u.aw(1000)),3,"0")
if(d.I(0,v))return v}return"SL"+A.a.b0(A.o.v(Date.now()%1000),3,"0")},
atn(d){var w=0,v=B.j(x.H),u,t,s,r,q,p
var $async$atn=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
p=q.length===0
if(p)f=p
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$atn)
case 5:f=!f
case 4:if(f){w=1
break}w=6
return B.b(C.Xq(),$async$atn)
case 6:t=f
s=J.a8(t)
r=s.gJ(t)
s.bq(t,new C.cm7(q))
w=s.gJ(t)!==r?7:8
break
case 7:w=9
return B.b(C.Xr(t),$async$atn)
case 9:case 8:case 1:return B.h(u,v)}})
return B.i($async$atn,v)},
atm(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o
var $async$atm=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:p=C.zc(d)
o=p==null
if(o)f=o
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$atm)
case 5:f=!f
case 4:if(f){u=null
w=1
break}o=J
w=6
return B.b(C.Xq(),$async$atm)
case 6:t=o.i6(f),t=t.gae(t),s=x.f
case 7:if(!t.C()){w=8
break}r=t.gP(t)
q=r.b
if(!s.b(q)){w=7
break}q=J.t(q,"claimCode")
if(C.zc(J.k(q==null?"":q))===p){u=C.a9t(r.a)
w=1
break}w=7
break
case 8:u=null
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$atm,v)},
a9t(d){var w=0,v=B.j(x.T),u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a9t=B.e(function(a0,a1){if(a0===1)return B.f(a1,v)
for(;;)switch(w){case 0:g=A.a.i(d)
f=g.length===0
if(f)a1=f
else{w=3
break}w=4
break
case 3:w=5
return B.b(B.c8(),$async$a9t)
case 5:a1=!a1
case 4:if(a1){u=null
w=1
break}w=6
return B.b(C.Xq(),$async$a9t)
case 6:p=a1
o=J.a8(p)
n=o.h(p,g)
m=x.f
if(!m.b(n)){u=null
w=1
break}l=J.a8(n)
k=B.aJ(l.h(n,"usesRemaining"))
j=k==null?null:A.i.M(k)
if(j==null)j=0
if(j<=0){u=null
w=1
break}k=l.h(n,"payload")
t=J.k(k==null?"":k)
if(J.ad(t)===0){u=null
w=1
break}s=null
try{s=A.cb.cC(0,A.cL.aN(t))}catch(e){u=null
w=1
break}if(A.a.i(s).length===0){u=null
w=1
break}k=l.h(n,"ownerEmail")
if(D.Vl.q(0,A.a.i(J.k(k==null?"":k).toLowerCase()))||J.z(l.h(n,"sharedByAdmin"),!0))try{r=A.W.aP(0,s,null)
if(m.b(r)){q=B.a1(r,x.N,x.z)
J.aK(q,"sharedByAdmin",!0)
s=A.W.av(q,null)}}catch(e){}h=j-1
m=l.h(n,"kind")
m=J.k(m==null?"":m)
if(h<=0&&m!=="marriage")o.W(p,g)
else{m=x.N
l=x.z
l=B.dL(B.a1(n,m,l),m,l)
l.n(0,"usesRemaining",h)
l.n(0,"lastUsedAt",new B.V(Date.now(),0,!1).aa().ag())
o.n(p,g,l)}w=7
return B.b(C.Xr(p),$async$a9t)
case 7:u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$a9t,v)},
irs(d,e,f){var w,v=B.T(x.N,x.z)
v.n(0,"type","ngmy_slides_library_v1")
v.n(0,"ownerEmail",A.a.i(e))
v.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(f)v.n(0,"sharedByAdmin",!0)
w=B.U(d).k("N<1,a9<n,@>>")
w=B.C(new B.N(d,new C.fWy(),w),w.k("ak.E"))
v.n(0,"decks",w)
return v},
fWG(d,e,f,g){var w
if(e!=null){w=B.T(x.N,x.z)
w.n(0,"type","ngmy_slides_deck_v1")
w.n(0,"ownerEmail",A.a.i(f))
w.n(0,"exportedAt",new B.V(Date.now(),0,!1).aa().ag())
if(g)w.n(0,"sharedByAdmin",!0)
w.n(0,"deck",e.aj())
return A.W.av(w,null)}return A.W.av(C.irs(d==null?B.a([],x.D):d,f,g),null)},
fWF(d,e,f,g,h){var w=0,v=B.j(x.eb),u,t,s,r
var $async$fWF=B.e(function(i,j){if(i===1)return B.f(j,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a9u(h,d,e,f,g),$async$fWF)
case 3:r=j
if(r!=null){t=r.b
s=r.a
if(s==null)s=C.zc(e==null?"":e)
u=new B.aI6(s,t)
w=1
break}t=A.dV.aN(h)
t=A.kM.gcs().aN(t)
u=new B.aI6(C.zc(e==null?"":e),"NGMY_SL:"+t)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$fWF,v)},
hji(d){var w,v,u,t,s="ngmy_slides_deck_v1",r="ngmy_slides_library_v1",q=A.a.i(d)
if(J.ad(q)===0)return!1
if(J.d5(q,"NGMYSLIDESYNC2|"))return!0
if(J.d5(q,"NGMYSLIDECODE|"))return!0
if(J.d5(q,"NGMY_SL:"))return!0
if(J.eK(q,s)||J.eK(q,r))return!0
if(J.d5(q,"{"))try{w=A.W.aP(0,q,null)
if(x.f.b(w)){u=J.t(w,"type")
v=J.k(u==null?"":u)
u=J.z(v,s)||J.z(v,r)
return u}}catch(t){}return!1},
irw(d){var w,v,u,t,s,r,q=d.z,p=q==null?null:A.a.i(q)
q=d.d
for(q=[p,q==null?null:A.a.i(q)],w=q.length,v=0;v<w;++v){u=q[v]
if(u==null||u.length===0)continue
if(C.hji(u))return u
t=A.a.cn(u,"NGMYSLIDESYNC2|")
if(t>=0){s=A.a.i(A.a.b4(u,t))
if(C.hji(s))return s}r=A.a.cn(u,"NGMY_SL:")
if(r>=0){s=A.a.i(A.a.b4(u,r))
if(C.hji(s))return s}}return null},
fWu(d){var w,v,u,t=A.a.i(d)
if(J.ad(t)===0||J.d5(t,"NGMYSLIDESYNC2|"))return B.a([],x.D)
try{w=null
v=x.P
if(J.d5(t,"NGMY_SL:"))w=v.a(A.W.aP(0,A.cb.cC(0,A.cL.aN(J.nv(t,8))),null))
else w=v.a(A.W.aP(0,t,null))
v=C.i9H(w)
return v}catch(u){v=B.a([],x.D)
return v}},
aiS(d){var w=0,v=B.j(x.R),u,t,s,r,q
var $async$aiS=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=A.a.i(d)
w=A.a.a_(q,"NGMYSLIDECODE|")?3:4
break
case 3:t=q.split("|")
w=t.length>=2?5:6
break
case 5:w=7
return B.b(C.atm(t[1]),$async$aiS)
case 7:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fWu(s)
w=1
break}case 6:u=B.a([],x.D)
w=1
break
case 4:r=C.zc(q)
w=r!=null&&!A.a.q(q,"|")&&!A.a.a_(q,"{")?8:9
break
case 8:w=10
return B.b(C.atm(r),$async$aiS)
case 10:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fWu(s)
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
return B.b(C.a9t(t[1]),$async$aiS)
case 15:s=f
if(s!=null&&A.a.i(s).length!==0){u=C.fWu(s)
w=1
break}case 14:u=B.a([],x.D)
w=1
break
case 12:u=C.fWu(q)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aiS,v)},
i9H(d){var w,v,u,t=J.a8(d),s=t.h(d,"type"),r=J.k(s==null?"":s)
if(!J.z(t.h(d,"sharedByAdmin"),!0)){s=t.h(d,"ownerEmail")
w=D.Vl.q(0,A.a.i(J.k(s==null?"":s).toLowerCase()))}else w=!0
if(r==="ngmy_slides_deck_v1"){v=t.h(d,"deck")
if(!x.f.b(v))return B.a([],x.D)
return B.a([C.hjf(C.Xm(B.a1(v,x.N,x.z)),w)],x.D)}if(r==="ngmy_slides_library_v1"){u=t.h(d,"decks")
if(!x.j.b(u))return B.a([],x.D)
t=J.de(u,x.f)
t=B.cF(t,new C.frh(w),t.$ti.k("M.E"),x.I)
t=B.C(t,B.a3(t).k("M.E"))
return t}return B.a([],x.D)},
hjf(d,e){var w,v,u,t,s,r,q,p,o=d.aj()
o.n(0,"id",C.cC())
w=A.a.i(d.b)
o.n(0,"name",w.length===0?"Shared presentation":w)
o.n(0,"transferReceived",!0)
o.W(0,"transferClaimCode")
o.W(0,"adminShareEditUntil")
v=o.h(0,"slides")
if(x.j.b(v))for(u=J.aT(v),t=x.f;u.C();){s=u.gP(u)
if(t.b(s)){r=Date.now()
q=$.iV
$.iV=q+1
J.aK(s,"id",""+1000*r+"_"+q)}}p=C.Xm(B.a1(o,x.N,x.z))
if(e&&C.km(p.w))p.Q=new B.V(Date.now(),0,!1).aa().bS(144e8).ag()
return p},
bG3(){var w=0,v=B.j(x.aT),u,t,s
var $async$bG3=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.Hx(),$async$bG3)
case 3:s=e
if(s==null||A.a.i(s).length===0){u=null
w=1
break}w=4
return B.b(C.aiS(s),$async$bG3)
case 4:t=e
u=J.ct(t)?null:t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$bG3,v)},
h4U(d){var w=0,v=B.j(x.T),u,t
var $async$h4U=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.hO(D.ZE,!0,"Dismiss",d,new C.h4V(),new C.h4W(),A.GZ,!0,x.N),$async$h4U)
case 3:t=f
if(t==null){u=null
w=1
break}if(t.length===0){if(d.e!=null)d.L(x.q).f.T(D.fnw)
u=null
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$h4U,v)},
ive(d,e,f,g,h){return B.a6(d,!1).ce(B.ee(new C.h4X(h,e,g,f),!0,null,x.H))},
fWs:function fWs(d){this.a=d},
cm7:function cm7(d){this.a=d},
fWy:function fWy(){},
frh:function frh(d){this.a=d},
h4V:function h4V(){},
h4W:function h4W(){},
h4X:function h4X(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
Xo:function Xo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aGP:function aGP(){var _=this
_.d="one"
_.e=null
_.r=_.f=!1
_.c=_.a=null},
eK_:function eK_(){},
eJW:function eJW(d,e){this.a=d
this.b=e},
eJZ:function eJZ(d,e){this.a=d
this.b=e},
eJX:function eJX(d){this.a=d},
eJY:function eJY(d){this.a=d},
eK0:function eK0(d){this.a=d},
eK1:function eK1(d){this.a=d},
eK4:function eK4(d){this.a=d},
eK5:function eK5(d){this.a=d},
eK3:function eK3(d){this.a=d},
eK6:function eK6(d){this.a=d},
eK2:function eK2(d){this.a=d},
eK7:function eK7(d,e){this.a=d
this.b=e},
eJV:function eJV(d,e){this.a=d
this.b=e},
eJU:function eJU(d,e){this.a=d
this.b=e},
Xp:function Xp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bny:function bny(){var _=this
_.c=_.a=_.f=_.e=_.d=null},
eK8:function eK8(d,e){this.a=d
this.b=e},
eK9:function eK9(d){this.a=d},
eKa:function eKa(){},
eKb:function eKb(d){this.a=d},
eKc:function eKc(d,e){this.a=d
this.b=e},
aGM:function aGM(d){this.a=d},
aGN:function aGN(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
eDB:function eDB(d){this.a=d},
eDA:function eDA(){},
eDC:function eDC(d){this.a=d},
eDx:function eDx(d){this.a=d},
eDw:function eDw(){},
eDy:function eDy(d){this.a=d},
eDz:function eDz(d){this.a=d},
bya:function bya(){},
ato:function ato(d){this.a=d},
aGQ:function aGQ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
eKe:function eKe(d){this.a=d},
eKd:function eKd(d){this.a=d},
if9(){var w,v,u,t
for(v=0;v<4;++v){w=D.dkt[v]
try{if(Ag.c28(w)){u=w
return u}}catch(t){}}return null},
Sq(d,e){return C.inZ(d,e)},
inZ(c6,c7){var w=0,v=B.j(x.T),u,t=2,s=[],r=[],q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5
var $async$Sq=B.e(function(c9,d0){if(c9===1){s.push(d0)
w=t}for(;;)switch(w){case 0:c2={}
c3=c7.r
if(c3.length===0){u="This presentation has no slides."
w=1
break}q=C.if9()
if(q==null){u="This browser cannot record video. Try Chrome, Edge, or a recent Safari."
w=1
break}b2=c7.d===D.oZ?0.5625:1.7777777777777777
b3=b2>=1
b4=c2.a=A.i.V(b3?1280:1280*b2)
b5=c2.b=A.i.V(b3?1280/b2:1280)
c2.a=b4-A.o.F(b4,2)
c2.b=b5-A.o.F(b5,2)
b6=B.qZ(c6,!0)
b6.toString
p=B.a6(c6,!0)
b7=new B.cx(null,x.A)
b8=A.d.gH(c3)
b9=$.ax()
o=new B.eD(b8,b9)
n=new B.eD("Getting ready\u2026",b9)
m=new B.eD(0,b9)
l=B.pE(new C.fQw(c2,b7,o),!1,!1)
b6.md(0,l)
b9=x.H
B.cg(null,A.bA,!1,null,new C.fQx(n,m),c6,null,!0,!0,b9)
k=new C.fQB(b7)
j=new C.fQC()
i=null
t=4
b3=c2.a
h=An.aUZ(c2.b,b3)
b3=h.getContext("2d")
b3.toString
g=b3
f=J.h7X(h,30)
e=B.a([],x.aK)
b3=x.z
i=Ag.b_1(f,B.J(["mimeType",q,"videoBitsPerSecond",8e6],b3,b3))
A.Jl.zd(i,"dataavailable",new C.fQy(e))
d=new B.c3(new B.bl($.bE,x.dT),x.b2)
A.Jl.zd(i,"stop",new C.fQz(d))
J.ajy(n,"Drawing slide 1 of "+c3.length+"\u2026")
c5=j
w=8
return B.b(k.$0(),$async$Sq)
case 8:w=7
return B.b(c5.$1(d0),$async$Sq)
case 7:a0=d0
J.h7Y(g,a0,0,0,c2.a,c2.b)
i.start(200)
a1=0
case 9:if(!(b3=a1,b8=c3.length,b3<b8)){w=11
break}a2=c3[a1]
w=a1>0?12:13
break
case 12:J.ajy(n,"Drawing slide "+B.w(a1+1)+" of "+b8+"\u2026")
J.ajy(o,a2)
c5=j
w=15
return B.b(k.$0(),$async$Sq)
case 15:w=14
return B.b(c5.$1(d0),$async$Sq)
case 14:a0=d0
case 13:J.h7Y(g,a0,0,0,c2.a,c2.b)
a3=A.o.D(a2.w>0?a2.w:c7.e,1,120)
J.ajy(n,"Recording slide "+B.w(a1+1)+" of "+c3.length+" \xb7 "+B.w(a3)+" s")
a4=new B.V(Date.now(),0,!1).bS(1e6*a3)
case 16:b3=Date.now()
b8=a4
if(b3>=b8.gbt())b3=b3===b8.gbt()&&0<b8.gcG()
else b3=!0
if(!b3){w=17
break}J.h7Y(g,a0,0,0,c2.a,c2.b)
w=18
return B.b(B.bN(A.fh,null,b9),$async$Sq)
case 18:w=16
break
case 17:J.ajy(m,(a1+1)/c3.length)
case 10:++a1
w=9
break
case 11:J.ajy(n,"Saving your video\u2026")
i.stop()
w=19
return B.b(d.a.dg(0,A.ov),$async$Sq)
case 19:a5=A.d.gH(q.split(";"))
a6=B.hP(e,a5)
c3=(self.URL||self.webkitURL).createObjectURL(a6)
c3.toString
a7=c3
a8=J.z(a5,"video/mp4")?"mp4":"webm"
c3=A.a.i(c7.b)
b3=B.ag("[^\\w\\-. ]+",!0,!1,!1,!1)
a9=A.a.i(B.aL(c3,b3,"_"))
c0=B.n9(a7)
c0.download=B.w(J.ad(a9)===0?"presentation":a9)+"."+B.w(a8)
c3=c0.style
c3.display="none"
b0=c0
c3=document.body
if(c3!=null)c3.appendChild(b0).toString
J.HL(b0)
J.lO(b0)
B.bN(A.qA,new C.fQA(a7),b9)
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
J.lO(l)
if(p.q4())p.eq()
c3=o
b3=$.ax()
c3.sih(b3)
J.aTC(c3,0)
c3=n
c3.sih(b3)
J.aTC(c3,0)
c3=m
c3.sih(b3)
J.aTC(c3,0)
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Sq,v)},
fQw:function fQw(d,e,f){this.a=d
this.b=e
this.c=f},
fQv:function fQv(){},
fQx:function fQx(d,e){this.a=d
this.b=e},
fQB:function fQB(d){this.a=d},
fQC:function fQC(){},
fQy:function fQy(d){this.a=d},
fQz:function fQz(d){this.a=d},
fQA:function fQA(d){this.a=d},
byo:function byo(d,e,f){this.c=d
this.d=e
this.a=f},
fli:function fli(){},
flj:function flj(){},
cmt(d){var w=0,v=B.j(x.at),u,t,s
var $async$cmt=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(B.atw(d,A.AB),$async$cmt)
case 3:s=f
if(s==null){u=null
w=1
break}t=s.bB(new B.V(Date.now(),0,!1))
if(t.a<0){u=A.bC
w=1
break}u=t
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$cmt,v)},
cms(d){if(d==null)return!1
return d==="marriage_agreement"||d==="hati_kuhowa"||d==="hati_kuhoweya"||d==="hati_malipo_awamu"},
a9a:function a9a(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
bnh:function bnh(d){var _=this
_.d=null
_.e=d
_.f=!1
_.c=_.a=null},
erR:function erR(d){this.a=d},
erP:function erP(d){this.a=d},
erQ:function erQ(d,e){this.a=d
this.b=e},
aa2:function aa2(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.cx=d
_.cy=e
_.x=f
_.y=!0
_.a=g
_.b=h
_.c=i
_.d=j
_.p5$=k
_.p6$=l
_.p7$=m
_.ob$=n},
aa3:function aa3(d,e){this.a=d
this.b=e},
b5K:function b5K(){},
cqn:function cqn(){},
cqo:function cqo(){},
cqp:function cqp(d,e,f,g,h,i,j,k,l){var _=this
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
hOl(d){return new C.ajR(d)},
a4n:function a4n(){},
ajR:function ajR(d){this.a=d},
aTW:function aTW(){},
az2:function az2(d,e){this.d=d
this.b=e
this.a=null},
aVn:function aVn(d){this.b=d
this.a=null},
bEX(d,e){var w=0,v=B.j(x.H),u
var $async$bEX=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=2
return B.b($.S().gui().Mz(d,e),$async$bEX)
case 2:u=B.fZu()
w=3
return B.b(u,$async$bEX)
case 3:return B.h(null,v)}})
return B.i($async$bEX,v)},
hE5(d,e){return(A.tu[(d^e)&255]^A.o.aI(d,8))>>>0},
ahW(d,e,f,g,h,i){var w=C.ikg(d,A.cY,f,null,A.cI,g,h,i)
return w},
fJi(d,e){d.oT(0,e)
return d},
hG7(d){var w=F.hGS(d)
if(w==null)return""
return"- WRITE EVERYTHING THE READER SEES IN "+w+" \u2014 every title, subtitle, sentence and note, with natural, correct grammar. Do not mix in English (JSON keys stay as given)."},
hWl(d){var w,v,u,t,s,r=A.a.i(d)
if(r.length===0)return"XX"
w=r.toLowerCase()
v=A.pN.h(0,w)
if(v!=null)return v
for(u=A.pN.gdP(A.pN),u=u.gae(u);u.C();){t=u.gP(u).b
if(t.toLowerCase()===w)return t}u=B.ag("[^A-Z]",!0,!1,!1,!1)
s=B.aL(r.toUpperCase(),u,"")
if(s.length>=2)return A.a.aA(s,0,2)
return A.a.aA(s+"XX",0,2)},
hGf(){var w,v
for(w=0,v='=== EVERYTHING YOU KNOW ABOUT NGMY (use only this; never invent features, numbers, prices, names or dates) ===\nTHE FOUNDER: NGMY stands for New Global Movement for Youth. It was created by KB PABLO QR (always written in capital letters), the Founder, President and CEO of NGMY. The "QR" in his name comes from QR codes, which NGMY and his business use a lot, and it is part of his brand. He built NGMY as one app (ngmy.org) that gives young people and families tools for work, money, learning, community and creativity. When a story is about the CEO, call him KB PABLO QR, Founder, President and CEO of NGMY. Do not give him a different name, age, birthplace, degrees, awards or family details, and do not make up quotes from him.\n\nFEATURES:\n';w<91;++w)v+="- "+D.d9r[w]+"\n"
v=v+"\nABOUT THE COMMUNITY AND THE SYSTEM (facts you can use; do not invent numbers, names or dates):\n- The community is M'MBONDO (also written MBONDO). Its motto is \"EMO 'YA M'MBONDO\". Members live in different US states.\n- The Civic Registry \u2014 people also just call it \"the system\" \u2014 was built inside the NGMY app for the M'MBONDO community.\n- Why it was built: a big problem in the community was not seeing where contribution money went. People gave but were unsure what happened to their money, so trust and giving went down. The system brings light: every contribution gets a receipt, members can see where the money is going and how much has been contributed, and that transparency builds trust and the confidence to keep contributing \u2014 when you know where your money goes, you give.\n- What it does:\n  \u2022 Registers community members with their details and a member ID card (Registry ID), kept safely as the community's records.\n  \u2022 Lets each state know how many members it has (state totals, nationwide totals).\n  \u2022 Records contributions with receipts and contribution reports, so everyone sees the money trail.\n  \u2022 Authorized Registrars enroll members and help them; there is a help mode for assisted sign-up.\n  \u2022 Civic Voting for community decisions, and a Civic State Wallet that shows each state's funds.\n- How NGMY helps members beyond the registry: help finding jobs and applying for them, fixing their houses, helping them get houses, sending money, and NGMY Advisors (AI advisors) who help people apply for jobs, food stamps and other benefits and fill out applications for them.\n- Tone for this community: warm, proud, hopeful and trustworthy; it is about unity, transparency and helping each other.\n\n\nHOW MEMBERS USE THE APP:\n"+"WHAT NGMY IS: NGMY stands for New Global Movement for Youth \u2014 multi-hub app by KB PABLO QR (Founder/CEO). Live site ngmy.org. Wallet balance in USD. Gmail login (@gmail.com), password 6+ chars, also Google/GitHub sign-in.\n\nBOTTOM NAV (7 tabs):\n1) Home \u2014 brand, Helper AI entry, loans, tech frames (Neural/Signal/Core/Vault Channel games).\n2) Tool Hub \u2014 Business Card Creator, Menu Studio (+ Bio Studio), Business Essentials.\n3) Slides \u2014 presentations + Marriage/Hati documents.\n4) NGMY Hub (center) \u2014 Civic Registry, NGMY Store, Help Center, Document Scanner; center star may open App Builder when enabled.\n5) Advisors \u2014 AI advisor chat (this hub).\n6) Creator Hub \u2014 Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder, Video Studio, Phone Unlock.\n7) Profile \u2014 theme, logout, legal, Worksheets (Projects / Cashier IOUs / Family Tree).\n\nMENU STUDIO (Tool Hub \u2192 Menu Studio):\n- Menus tab: design restaurant/business menus, publish public link https://ngmy.org/?m={slug}\n- First menu free; more menus need Menu Studio subscription (paywall shows price).\n- Bios tab (same studio): link-in-bio pages, publish https://ngmy.org/?b={slug}\n- First Bio free with starter template; more Bios/templates need Bio Studio subscription.\n- Extra Bio photo/header changes may need a photo pack after free changes.\n- Local Menu / Local Bio: Home Essentials hub \u2192 device-local publish at /local-menu/ and /local-bio/\n\nBUSINESS CARD: Tool Hub \u2192 create/edit/download. Paid unlock for edit+download window (paywall).\n\nSLIDES: Slides tab. Free blank + some class templates/designs. Slides Pro unlocks more. Marriage documents are a separate short session unlock.\n\nADVISORS: 10 free minutes, then Advisors subscription for unlimited chat (admins unlimited). ADVISOR BROWSER: the live browser is free for 10 minutes, then $5.99 buys 2 hours (Stripe or Cash App with a screenshot approved by an admin) to use within a week; it only counts while the browser is open.\n\nCIVIC REGISTRY (NGMY Hub): community ID, PIN gate, enrollment, registrars (AR), civic registrar roles. Guest enroll can use ?civic=enroll. Georgia stays free. Every other state gets a 2-month free Civic Registry trial for Authorized Registrars, then $50/mo State Registrar sponsorship starting month 3.\n\nVAULT GAMES (Home \u2192 Vault Channel): arcade games. Need an active Growth Income investment for full access; otherwise one free play total. Free trial does not unlock games.\n\nGROWTH INCOME / INVEST: purchase a plan, daily clock-in for ROI over work days; min withdraw typically $10. Plans are $5, $20, $30, $50 and $100 (the most expensive is $100). Plan availability is admin-controlled.\n\nCREATOR TOOLS:\n- Doc Share \u2014 share docs; free individual creations then paid / org license.\n- QR Generator \u2014 free saves then paid access window.\n- Transfer \u2014 receive free; limited free sends then monthly unlock.\n- Kiswahili School \u2014 Basics free; other levels one-time unlock.\n- Document Scanner \u2014 trial then monthly.\n- Message Translator \u2014 paid unlimited.\n- Phone Unlock \u2014 short access window.\n- Video Studio / Recorder / Play Zone \u2014 Creator Hub tools.\n- Worksheets \u2192 Cashier (IOUs/receipts), Family Tree (create/photos may be paid).\n- Invoices \u2014 free standard tier with limited free premium saves; paid templates via paywall.\n- App Builder \u2014 Hub center (if enabled); cloud + Bolt AI may be paid.\n- Music Studio \u2014 AI songs may cost wallet credits when enabled.\n\nSTORE / JOBS / LOANS / HELP: Store in NGMY Hub; loans from Home; jobs/helpers need approval; Help Center + NGMY Helper AI for support.\n\nGUEST LINKS (no full login): /bio/, /local-bio/, /menu/, /local-menu/, /invoice/, /app/{slug}.\n\nHOW TO HELP MEMBERS: Give clear tap-by-tap steps. Stay in character. If unsure of a live price, send them to the feature paywall rather than guessing.\n"
return A.a.i(v.charCodeAt(0)==0?v:v)},
bEa(d,e){return C.igS(d,e)},
igS(d,e){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l
var $async$bEa=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:t=4
if(d.length===0){u=!1
w=1
break}r=B.hP([d],"application/pdf")
n=x.z
q=B.aX8(B.a([r],x.e3),e,B.J(["type","application/pdf"],n,n))
p=B.cv(B.J(["files",B.a([q],x.fA),"title",e],x.N,x.C))
n=window.navigator
n.toString
o=n
w=7
return B.b(B.eg(B.jU(o,"share",[p]),x.H),$async$bEa)
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
return B.i($async$bEa,v)},
hj9(){var w=0,v=B.j(x.y),u,t,s
var $async$hj9=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=$.fzg
s=$.bDH
if(s==null)s="presentation.pdf"
if(t==null||t.length===0){u=!1
w=1
break}u=C.bEa(t,s)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$hj9,v)},
bFy(){var w=0,v=B.j(x.y),u,t=2,s=[],r,q,p,o,n,m,l,k,j
var $async$bFy=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=$.fzg
l=$.bDH
k=l==null?"presentation.pdf":l
if(m==null||m.length===0){u=!1
w=1
break}w=A6.hAi()?3:4
break
case 3:w=5
return B.b(C.bEa(m,k),$async$bFy)
case 5:if(e){u=!0
w=1
break}case 4:r=$.bDI
if(r==null||r.length===0){u=!1
w=1
break}t=7
p=B.n9(null)
p.href=r
p.download=k
o=p.style
o.display="none"
q=p
o=document.body
if(o!=null)o.appendChild(q).toString
J.HL(q)
w=10
return B.b(B.bN(A.a3,null,x.H),$async$bFy)
case 10:J.lO(q)
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
return B.i($async$bFy,v)},
hj0(){var w=0,v=B.j(x.y),u,t,s,r
var $async$hj0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=$.bDI
if(r==null||r.length===0){u=!1
w=1
break}try{t=window
t.toString
A.m0.rp(t,r,"_blank")
u=!0
w=1
break}catch(q){u=!1
w=1
break}case 1:return B.h(u,v)}})
return B.i($async$hj0,v)},
hjh(d,e){var w=0,v=B.j(x.H),u,t
var $async$hjh=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:t=(self.URL||self.webkitURL).createObjectURL(B.hP([d],"text/html"))
t.toString
u=window
u.toString
A.m0.rp(u,t,"_blank")
return B.h(null,v)}})
return B.i($async$hjh,v)},
b4G(d,e){var w=0,v=B.j(x.y),u
var $async$b4G=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:w=3
return B.b(B.b4I(d,e),$async$b4G)
case 3:if(g){u=!0
w=1
break}w=4
return B.b(B.b4H(d),$async$b4G)
case 4:u=g<2
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$b4G,v)}},D,Aq,R,Ar,Ab,A3,Y,O,A4,As,G,F,E,H,Z,At,Ac,A5,S,A6,T,Au,M,Av,Ad,Aw,Ae,N,Ax,Ay,A_,L,A0,P,A1,Az,Af,AA,Q,AB,Ag,Ah,AC,Ai,AD,Aj,Ak,AE,AF,U,AG,AH,AI,AJ,I,AK,V,W,K,A7,A8
J=c[1]
B=c[0]
A=c[2]
A2=c[64]
Al=c[209]
A9=c[75]
Am=c[54]
An=c[65]
X=c[226]
Aa=c[58]
Ao=c[152]
Ap=c[238]
C=a.updateHolder(c[5],C)
D=c[224]
Aq=c[234]
R=c[143]
Ar=c[42]
Ab=c[228]
A3=c[225]
Y=c[41]
O=c[139]
A4=c[214]
As=c[135]
G=c[195]
F=c[35]
E=c[227]
H=c[97]
Z=c[124]
At=c[233]
Ac=c[145]
A5=c[239]
S=c[155]
A6=c[32]
T=c[182]
Au=c[241]
M=c[163]
Av=c[190]
Ad=c[107]
Aw=c[137]
Ae=c[119]
N=c[229]
Ax=c[242]
Ay=c[134]
A_=c[68]
L=c[203]
A0=c[84]
P=c[165]
A1=c[116]
Az=c[126]
Af=c[121]
AA=c[231]
Q=c[127]
AB=c[95]
Ag=c[59]
Ah=c[199]
AC=c[40]
Ai=c[82]
AD=c[161]
Aj=c[153]
Ak=c[237]
AE=c[240]
AF=c[236]
U=c[76]
AG=c[130]
AH=c[128]
AI=c[244]
AJ=c[232]
I=c[180]
AK=c[243]
V=c[52]
W=c[230]
K=c[211]
A7=c[235]
A8=c[113]
C.oo.prototype={
vL(d){var w,v,u=this,t=u.c
if(t===0)return u
w=!u.a
v=u.b
t=C.um(t,v)
return new C.oo(t===0?!1:w,v,t)},
bQA(d){var w,v,u,t,s,r,q=this.c
if(q===0)return $.DO()
w=q+d
v=this.b
u=new Uint16Array(w)
for(t=q-1;t>=0;--t)u[t+d]=v[t]
s=this.a
r=C.um(w,u)
return new C.oo(r===0?!1:s,u,r)},
bR6(d){var w,v,u,t,s,r,q,p=this,o=p.c
if(o===0)return $.DO()
w=o-d
if(w<=0)return p.a?$.hkP():$.DO()
v=p.b
u=new Uint16Array(w)
for(t=d;t<o;++t)u[t-d]=v[t]
s=p.a
r=C.um(w,u)
q=new C.oo(r===0?!1:s,u,r)
if(s)for(t=0;t<d;++t)if(v[t]!==0)return q.aJ(0,$.a49())
return q},
dX(d,e){var w,v,u,t,s,r=this
if(e<0)throw B.X(B.dO("shift-amount must be posititve "+e,null))
w=r.c
if(w===0)return r
v=A.o.ar(e,16)
if(A.o.F(e,16)===0)return r.bQA(v)
u=w+v+1
t=new Uint16Array(u)
C.hwE(r.b,w,e,t)
w=r.a
s=C.um(u,t)
return new C.oo(s===0?!1:w,t,s)},
mK(d,e){var w,v,u,t,s,r,q,p,o,n=this
if(e<0)throw B.X(B.dO("shift-amount must be posititve "+e,null))
w=n.c
if(w===0)return n
v=A.o.ar(e,16)
u=A.o.F(e,16)
if(u===0)return n.bR6(v)
t=w-v
if(t<=0)return n.a?$.hkP():$.DO()
s=n.b
r=new Uint16Array(t)
C.i5x(s,w,e,r)
w=n.a
q=C.um(t,r)
p=new C.oo(q===0?!1:w,r,q)
if(w){if((s[v]&A.o.dX(1,u)-1)!==0)return p.aJ(0,$.a49())
for(o=0;o<v;++o)if(s[o]!==0)return p.aJ(0,$.a49())}return p},
aQ(d,e){var w,v=this.a
if(v===e.a){w=C.cPG(this.b,this.c,e.b,e.c)
return v?0-w:w}return v?-1:1},
a9C(d,e){var w,v,u,t=this,s=t.c,r=d.c
if(s<r)return d.a9C(t,e)
if(s===0)return $.DO()
if(r===0)return t.a===e?t:t.vL(0)
w=s+1
v=new Uint16Array(w)
C.i5v(t.b,s,d.b,r,v)
u=C.um(w,v)
return new C.oo(u===0?!1:e,v,u)},
HX(d,e){var w,v,u,t=this,s=t.c
if(s===0)return $.DO()
w=d.c
if(w===0)return t.a===e?t:t.vL(0)
v=new Uint16Array(s)
C.bcO(t.b,s,d.b,w,v)
u=C.um(s,v)
return new C.oo(u===0?!1:e,v,u)},
bDq(d,e){var w,v,u,t,s,r=this.c,q=d.c
r=r<q?r:q
w=this.b
v=d.b
u=new Uint16Array(r)
for(t=0;t<r;++t)u[t]=w[t]&v[t]
s=C.um(r,u)
return new C.oo(!1,u,s)},
bDp(d,e){var w,v,u=this.c,t=this.b,s=d.b,r=new Uint16Array(u),q=d.c
if(u<q)q=u
for(w=0;w<q;++w)r[w]=t[w]&~s[w]
for(w=q;w<u;++w)r[w]=t[w]
v=C.um(u,r)
return new C.oo(!1,r,v)},
bDr(d,e){var w,v,u,t,s,r=this.c,q=d.c,p=r>q?r:q,o=this.b,n=d.b,m=new Uint16Array(p)
if(r<q){w=r
v=d}else{w=q
v=this}for(u=0;u<w;++u)m[u]=o[u]|n[u]
t=v.b
for(u=w;u<p;++u)m[u]=t[u]
s=C.um(p,m)
return new C.oo(s!==0,m,s)},
VP(d,e){var w,v,u,t=this
if(t.c===0||e.c===0)return $.DO()
w=t.a
if(w===e.a){if(w){w=$.a49()
return t.HX(w,!0).bDr(e.HX(w,!0),!0).a9C(w,!0)}return t.bDq(e,!1)}if(w){v=t
u=e}else{v=e
u=t}return u.bDp(v.HX($.a49(),!1),!1)},
a5(d,e){var w,v,u=this,t=u.c
if(t===0)return e
w=e.c
if(w===0)return u
v=u.a
if(v===e.a)return u.a9C(e,v)
if(C.cPG(u.b,t,e.b,w)>=0)return u.HX(e,v)
return e.HX(u,!v)},
aJ(d,e){var w,v,u=this,t=u.c
if(t===0)return e.vL(0)
w=e.c
if(w===0)return u
v=u.a
if(v!==e.a)return u.a9C(e,v)
if(C.cPG(u.b,t,e.b,w)>=0)return u.HX(e,v)
return e.HX(u,!v)},
aL(d,e){var w,v,u,t,s,r,q,p=this.c,o=e.c
if(p===0||o===0)return $.DO()
w=p+o
v=this.b
u=e.b
t=new Uint16Array(w)
for(s=0;s<o;){C.hwF(u[s],v,0,t,s,p);++s}r=this.a!==e.a
q=C.um(w,t)
return new C.oo(q===0?!1:r,t,q)},
bQz(d){var w,v,u,t
if(this.c<d.c)return $.DO()
this.aUs(d)
w=$.hdy.cp()-$.azQ.cp()
v=C.hdA($.hdx.cp(),$.azQ.cp(),$.hdy.cp(),w)
u=C.um(w,v)
t=new C.oo(!1,v,u)
return this.a!==d.a&&u>0?t.vL(0):t},
cum(d){var w,v,u,t=this
if(t.c<d.c)return t
t.aUs(d)
w=C.hdA($.hdx.cp(),0,$.azQ.cp(),$.azQ.cp())
v=C.um($.azQ.cp(),w)
u=new C.oo(!1,w,v)
if($.hdz.cp()>0)u=u.mK(0,$.hdz.cp())
return t.a&&u.c>0?u.vL(0):u},
aUs(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=this,f=g.c
if(f===$.hwB&&d.c===$.hwD&&g.b===$.hwA&&d.b===$.hwC)return
w=d.b
v=d.c
u=16-A.o.galW(w[v-1])
if(u>0){t=new Uint16Array(v+5)
s=C.hwz(w,v,u,t)
r=new Uint16Array(f+5)
q=C.hwz(g.b,f,u,r)}else{r=C.hdA(g.b,0,f,f+2)
s=v
t=w
q=f}p=t[s-1]
o=q-s
n=new Uint16Array(q)
m=C.hdB(t,s,o,n)
l=q+1
k=r.$flags|0
if(C.cPG(r,q,n,m)>=0){k&2&&B.aj(r)
r[q]=1
C.bcO(r,l,n,m,r)}else{k&2&&B.aj(r)
r[q]=0}j=new Uint16Array(s+2)
j[s]=1
C.bcO(j,s+1,t,s,j)
i=q-1
while(o>0){h=C.i5w(p,r,i);--o
C.hwF(h,j,0,r,o,s)
if(r[i]<h){m=C.hdB(j,s,o,n)
C.bcO(r,l,n,m,r)
while(--h,r[i]<h)C.bcO(r,l,n,m,r)}--i}$.hwA=g.b
$.hwB=f
$.hwC=w
$.hwD=v
$.hdx.b=r
$.hdy.b=l
$.azQ.b=s
$.hdz.b=u},
gX(d){var w,v,u,t=new C.cPH(),s=this.c
if(s===0)return 6707
w=this.a?83585:429689
for(v=this.b,u=0;u<s;++u)w=t.$2(w,v[u])
return new C.cPI().$1(w)},
A(d,e){if(e==null)return!1
return e instanceof C.oo&&this.aQ(0,e)===0},
tX(d,e){return this.aQ(0,e)>0},
M(d){var w,v,u
for(w=this.c-1,v=this.b,u=0;w>=0;--w)u=u*65536+v[w]
return this.a?-u:u},
vE(d){var w,v,u,t,s,r,q,p=this,o={},n=p.c
if(n===0)return 0
w=new Uint8Array(8);--n
v=p.b
u=16*n+A.o.galW(v[n])
if(u>1024)return p.a?-1/0:1/0
if(p.a)w[7]=128
t=u-53+1075
w[6]=(t&15)<<4
w[7]=(w[7]|A.o.aI(t,4))>>>0
o.a=o.b=0
o.c=n
s=new C.cPJ(o,p)
n=s.$1(5)
w[6]=w[6]|n&15
for(r=5;r>=0;--r)w[r]=s.$1(8)
q=new C.cPK(w)
if(J.z(s.$1(1),1))if((w[0]&1)===1)q.$0()
else if(o.b!==0)q.$0()
else for(r=o.c;r>=0;--r)if(v[r]!==0){q.$0()
break}return J.lu(A.aI.gaT(w)).getFloat64(0,!0)},
v(d){var w,v,u,t,s,r=this,q=r.c
if(q===0)return"0"
if(q===1){if(r.a)return A.o.v(-r.b[0])
return A.o.v(r.b[0])}w=B.a([],x.s)
q=r.a
v=q?r.vL(0):r
while(v.c>1){u=$.hL6()
if(u.c===0)B.bi(D.bcp)
t=v.cum(u).v(0)
w.push(t)
s=t.length
if(s===1)w.push("000")
if(s===2)w.push("00")
if(s===3)w.push("0")
v=v.bQz(u)}w.push(A.o.v(v.b[0]))
if(q)w.push("-")
return new B.ds(w,x.bJ).hg(0)},
$iaUE:1,
$ihR:1}
C.aU2.prototype={
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
cTn(d,e){var w=this.b.h(0,e)
return w!=null?this.a[w]:null},
gH(d){return A.d.gH(this.a)},
gal(d){return A.d.gal(this.a)},
gau(d){return this.a.length===0},
gcm(d){return this.a.length!==0},
gae(d){var w=this.a
return new J.ko(w,w.length,B.U(w).k("ko<1>"))}}
C.T4.prototype={
d0y(){var w,v
if(this.as==null)this.bgy()
w=this.as
v=w==null?null:w.ar9()
return v==null?null:v.eU()},
bgy(){var w,v
if(this.as!=null)return
w=this.Q
if(w!=null){v=w.ar9().eU()
this.as=new C.bTD(v)}},
gZ(d){return this.at}}
C.a57.prototype={
a7(){return"CompressionType."+this.b}}
C.bLl.prototype={
eI(d){var w,v,u,t,s=this
if(d===0)return 0
if(s.c===0){s.c=8
s.b=s.a.ct()}for(w=s.a,v=0;u=s.c,d>u;){v=A.o.dX(v,u)+(s.b&A.A9[u])
d-=u
s.c=8
u=w.b
u.toString
s.b=u[w.c++]}if(d>0){if(u===0){s.c=8
s.b=w.ct()}w=A.o.dX(v,d)
u=s.b
t=s.c-d
v=w+(A.o.fP(u,t)&A.A9[d])
s.c=t}return v}}
C.bJz.prototype={
cRq(d,e){var w,v,u,t,s,r=this,q=new C.bLl(d)
r.cx=r.CW=r.ch=r.ay=0
if(q.eI(8)!==66||q.eI(8)!==90||q.eI(8)!==104)return!1
w=r.a=q.eI(8)-48
if(w<0||w>9)return!1
r.b=new Uint32Array(w*1e5)
v=0
for(;;){w=d.c
u=d.d
u===$&&B.c()
if(!(w<u))break
t=r.csE(q)
if(t<0)return!1
if(t===0){q.eI(8)
q.eI(8)
q.eI(8)
q.eI(8)
s=r.csH(q,e)
if(s<0)return!1
v=(v<<1|v>>>31)^s^4294967295}else if(t===2){q.eI(8)
q.eI(8)
q.eI(8)
q.eI(8)
return!0}}return!0},
csE(d){var w,v,u,t
for(w=!0,v=!0,u=0;u<6;++u){t=d.eI(8)
if(t!==D.dCN[u])v=!1
if(t!==D.ddj[u])w=!1
if(!w&&!v)return-1}return v?0:2},
csH(d3,d4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9=this,d0=4294967295,d1=d3.eI(1),d2=((d3.eI(8)<<8|d3.eI(8))<<8|d3.eI(8))>>>0
c9.c=new Uint8Array(16)
for(w=0;w<16;++w){v=c9.c
u=d3.eI(1)
v.$flags&2&&B.aj(v)
v[w]=u}c9.d=new Uint8Array(256)
for(w=0,t=0;w<16;++w,t+=16)if(c9.c[w]!==0)for(s=0;s<16;++s){v=c9.d
u=d3.eI(1)
v.$flags&2&&B.aj(v)
v[t+s]=u}c9.c6Q()
v=c9.fx
if(v===0)return-1
r=v+2
q=d3.eI(3)
if(q<2||q>6)return-1
v=d3.eI(15)
c9.ax=v
if(v<1)return-1
c9.w=new Uint8Array(18002)
c9.x=new Uint8Array(18002)
for(w=0;v=c9.ax,w<v;++w){for(s=0;;){if(d3.eI(1)===0)break;++s
if(s>=q)return-1}v=c9.w
v.$flags&2&&B.aj(v)
v[w]=s}p=new Uint8Array(6)
for(w=0;w<q;++w)p[w]=w
for(u=c9.x,o=c9.w,n=u.$flags|0,w=0;w<v;++w){m=o[w]
l=p[m]
for(;m>0;m=k){k=m-1
p[m]=p[k]}p[0]=l
n&2&&B.aj(u)
u[w]=l}c9.fr=B.c1(6,$.hJ5(),!1,x.E)
for(j=0;j<q;++j){v=c9.fr
v[j]=new Uint8Array(258)
i=d3.eI(5)
for(w=0;w<r;++w){for(;;){if(i<1||i>20)return-1
if(d3.eI(1)===0)break
i=d3.eI(1)===0?i+1:i-1}v=c9.fr[j]
v.$flags&2&&B.aj(v)
v[w]=i}}v=$.hJ4()
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
if(f<h)h=f}c9.c20(v[j],u[j],o[j],n[j],h,g,r)
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
a3=c9.awe(d3)
if(a3<0)return-1
for(a4=0;;){if(a3===e)break
if(a3===0||a3===1){a5=-1
a6=1
do{if(a6>=2097152)return-1
if(a3===0)a5+=a6
else if(a3===1)a5+=2*a6
a6*=2
a3=c9.awe(d3)}while(a3===0||a3===1);++a5
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
a3=c9.awe(d3)
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
c1=(c1<<8^D.IP[c1>>>24&255^v])>>>0;--c2}if(c4===c0)return c1
if(c4>c0)return-1
v=c9.b
b5=v[b5]
b6=b5>>>8
if(b8===0){b8=D.IV[b9];++b9
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
if(b8===0){b8=D.IV[b9];++b9
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
if(b8===0){b8=D.IV[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c5=b5&255^u;++c4
if(c4===c0){c6=b7
b5=b6
c2=3
continue}if(c5!==b7){c6=c5
b5=b6
c2=3
continue}b5=v[b6]
if(b8===0){b8=D.IV[b9];++b9
if(b9===512)b9=0}u=b8===1?1:0
c2=(b5&255^u)+4
b5=v[b5>>>8]
b6=b5>>>8
if(b8===0){b8=D.IV[b9];++b9
if(b9===512)b9=0}v=b8===1?1:0
c6=b5&255^v
c4=c4+1+1
b5=b6}else for(c7=b7,c2=0,c3=0,c4=1;;c3=c7,c7=c8){if(c2>0){for(v=c3&255;;){if(c2===1)break
d4.bu(c3)
c1=c1<<8^D.IP[c1>>>24&255^v];--c2}d4.bu(c3)
c1=(c1<<8^D.IP[c1>>>24&255^v])>>>0}if(c4>c0)return-1
if(c4===c0)return c1
v=1e5*c9.a
if(b5>=v)return-1
u=c9.b
b5=u[b5]
c5=b5&255
b5=b5>>>8;++c4
c2=0
if(c5!==c7){d4.bu(c7)
c1=(c1<<8^D.IP[c1>>>24&255^c7&255])>>>0
c8=c5
continue}if(c4===c0){d4.bu(c7)
c1=(c1<<8^D.IP[c1>>>24&255^c7&255])>>>0
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
awe(d){var w,v,u,t,s=this,r=s.ay
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
t=d.eI(u)
for(;;){if(u>20)return-1
r=s.cy
r===$&&B.c()
if(t<=r[u])break;++u
t=(t<<1|d.eI(1))>>>0}r=s.dx
r===$&&B.c()
r=t-r[u]
if(r<0||r>=258)return-1
w=s.db
w===$&&B.c()
return w[r]},
c20(d,e,f,g,h,i,j){var w,v,u,t,s,r,q,p
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
c6Q(){var w,v,u,t=this
t.fx=0
t.e=new Uint8Array(256)
for(w=0;w<256;++w){v=t.d
v===$&&B.c()
if(v[w]!==0){v=t.e
u=t.fx++
v.$flags&2&&B.aj(v)
v[u]=w}}}}
C.cHC.prototype={
aKB(d,e,f){var w,v,u,t,s,r=this,q=r.a=r.bUd(e)
if(q<0)return
e.c=q
if(e.aS()!==101010256)return
e.b6()
e.b6()
e.b6()
e.b6()
r.f=e.aS()
r.r=e.aS()
w=e.b6()
if(w>0)e.aKE(w,!1)
r.ct1(e)
q=r.r
v=r.f
u=e.aNK(Math.min(v,1024),v,q)
q=r.x
for(;;){v=u.c
t=u.d
t===$&&B.c()
if(!(v<t))break
if(u.aS()!==33639248)break
s=new C.bbr()
s.d0x(0,u,e,f)
q.push(s)}},
ct1(d){var w,v,u,t,s=d.c,r=this.a-20
if(r<0)return
w=d.a9i(20,r)
if(w.aS()!==117853008){d.c=s
return}w.aS()
v=w.tI()
w.aS()
d.c=v
if(d.aS()!==101075792){d.c=s
return}d.tI()
d.b6()
d.b6()
d.aS()
d.aS()
d.tI()
d.tI()
u=d.tI()
t=d.tI()
this.f=u
this.r=t
d.c=s},
bUd(d){var w,v,u,t,s,r,q,p,o,n
if(d.gJ(0)<=4)return-1
w=d.c
v=d.gJ(0)-4
u=Math.min(v,1024)
t=v-u
for(s=u-4;t>=0;){d.c=t
r=d.a9i(u,t)
q=d.c
p=r.b
d.c=q+(p==null?0:p.length-r.c)
o=new B.anK(A.iv)
o.aOZ(r.eU(),A.iv,null,null)
for(n=s;n>=0;--n){o.c=n
if(o.aS()===101010256){d.c=w
return t+n}}t=t>0&&t<u?0:t-u}return-1}}
C.cHA.prototype={}
C.azs.prototype={
a7(){return"ZipEncryptionMode."+this.b}}
C.cHD.prototype={
aKB(d,e,f){var w,v,u,t,s,r,q,p,o=this
if(e.aS()!==67324752)return
e.b6()
o.b=e.b6()
w=D.aJK.h(0,e.b6())
o.c=w==null?D.NS:w
o.d=e.b6()
o.e=e.b6()
o.f=e.aS()
o.r=e.aS()
o.w=e.aS()
v=e.b6()
u=e.b6()
o.x=e.apN(v)
o.y=e.hu(u).eU()
w=o.z
t=w.w
o.r=t
w=w.x
o.w=w
o.at=(o.b&1)!==0?D.b13:D.Fj
o.ay=f
o.Q=e.hu(t)
if(o.at!==D.Fj&&u>2){w=o.y
w.toString
s=B.rN(w,A.iv,null,null)
for(;;){w=s.c
t=s.d
t===$&&B.c()
if(!(w<t))break
if(s.b6()===39169){s.b6()
s.b6()
s.apN(2)
w=s.b
w.toString
r=w[s.c++]
q=s.b6()
o.at=D.b14
o.ax=new C.cHA(r,q)
w=D.aJK.h(0,q)
o.c=w==null?D.NS:w}}}if((o.b&8)!==0){p=e.aS()
if(p===134695760)o.f=e.aS()
else o.f=p
o.r=e.aS()
o.w=e.aS()}},
gJ(d){return this.bqi().length},
ar9(){var w,v,u,t,s,r=this,q=null,p=r.Q
if(p==null)return B.rN(new Uint8Array(0),A.iv,q,q)
w=r.at
if(w!==D.Fj)if(p.gJ(0)<=0)r.at=D.Fj
else{if(w===D.b13){p=r.bOS(p)
r.Q=p}else if(w===D.b14){p=r.bOv(p)
r.Q=p}r.at=D.Fj}w=r.c
if(w===D.alB){v=p.c
u=B.dl()
p=r.Q
if(p.gJ(0)<=524288e3)u.b=A.qd.Ci(p.eU(),!0,!1)
else{t=B.a9T(A.iv,r.w)
p=r.Q
p.toString
A.qd.a5n(p,t,!0,!1)
u.b=t.Hx()}r.Q.c=v
return B.rN(u.bm(),A.iv,q,q)}else if(w===D.alC){s=B.a9T(A.iv,32768)
p=r.Q
v=p.c
C.hOw().cRq(p,s)
u=s.Hx()
r.Q.c=v
return B.rN(u,A.iv,q,q)}else return B.rN(p.eU(),A.iv,q,q)},
bqi(){var w=this.Q
if(w==null)return new Uint8Array(0)
return w.eU()},
v(d){return this.x},
bcm(d){var w=this.ch,v=C.KI(C.hE5(w[0].M(0),d))
w[0]=v
v=w[1].a5(0,v.VP(0,C.KI(255)))
w[1]=v
w[1]=v.aL(0,C.KI(134775813)).a5(0,C.KI(1)).VP(0,C.KI(4294967295))
w[2]=C.KI(C.hE5(w[2].M(0),w[1].mK(0,24).M(0)))},
aTR(){var w=(this.ch[2].VP(0,C.KI(65535)).M(0)|2)>>>0
return w*((w^1)>>>0)>>>8&255},
bOS(d){var w,v,u,t,s,r=this,q=null
if(r.Q==null)return B.rN(new Uint8Array(0),A.iv,q,q)
for(w=0;w<12;++w){v=r.Q
u=v.b
u.toString
r.bcm(u[v.c++]^r.aTR())}t=r.Q.eU()
for(v=t.length,u=t.$flags|0,w=0;w<v;++w){s=t[w]^r.aTR()
r.bcm(s)
u&2&&B.aj(t)
t[w]=s}return B.rN(t,A.iv,q,q)},
bOv(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this.ax.c
if(k===1){w=d.hu(8).eU()
v=16}else if(k===2){w=d.hu(12).eU()
v=24}else{w=d.hu(16).eU()
v=32}u=d.hu(2).eU()
t=d.hu(d.gJ(0)-10)
s=d.hu(10)
r=t.eU()
k=this.ay
k.toString
q=C.i5a(k,w,v)
p=new Uint8Array(B.cc(A.aI.du(q,0,v)))
k=v*2
o=new Uint8Array(B.cc(A.aI.du(q,v,k)))
if(!C.hw8(A.aI.du(q,k,k+2),u))throw B.X(B.fo("password error"))
k=new Uint8Array(16)
n=new C.bI9(k,new Uint8Array(16),p)
k=x.S
m=J.a6C(0,k)
m=n.r=new C.cqc(m)
m.c=!0
m.b=m.bpz(!0,new C.auZ(p))
if(m.c)m.d=B.bp(D.oX,!0,k)
else m.d=B.bp(D.zY,!0,k)
l=C.huk(C.hum(),64)
l.biZ(new C.auZ(o))
n.w=l
n.d02(r,0,r.length)
k=s.eU()
m=n.x
m===$&&B.c()
if(!C.hw8(k,m))throw B.X(B.fo("macs don't match"))
return B.rN(r,A.iv,null,null)}}
C.bbr.prototype={
d0x(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=this
n.a=e.b6()
e.b6()
e.b6()
e.b6()
e.b6()
e.b6()
e.aS()
n.w=e.aS()
n.x=e.aS()
w=e.b6()
v=e.b6()
u=e.b6()
n.y=e.b6()
e.b6()
n.Q=e.aS()
n.as=e.aS()
if(w>0)n.at=e.apN(w)
if(v>0){t=e.hu(v).eU()
n.ax=t
if(v>=4){s=B.rN(t,A.iv,null,null)
for(;;){t=s.c
r=s.d
r===$&&B.c()
if(!(t<r))break
q=s.b6()
p=s.b6()
o=s.a9i(p,s.c)
t=s.c
r=o.b
s.c=t+(r==null?0:r.length-o.c)
if(q===1){if(p>=8&&n.x===4294967295){n.x=o.tI()
p-=8}if(p>=8&&n.w===4294967295){n.w=o.tI()
p-=8}if(p>=8&&n.as===4294967295){n.as=o.tI()
p-=8}if(p>=4&&n.y===65535)n.y=o.aS()}}}}if(u>0)e.apN(u)
f.c=n.as
t=new C.cHD(D.NS,n,D.Fj,B.a([C.KI(0),C.KI(0),C.KI(0)],x.f3))
n.ch=t
t.aKB(0,f,g)},
v(d){return this.at}}
C.cHB.prototype={
cRr(d,e,f,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=new C.cHC(B.a([],x.fT))
this.a=g
g.aKB(0,d,f)
g=B.a([],x.bm)
w=B.T(x.N,x.S)
v=new C.aU2(g,w)
for(u=this.a.x,t=u.length,s=0;s<u.length;u.length===t||(0,B.I)(u),++s){r=u[s]
q=r.ch
p=r.Q>>>16
o=q.x
n=A.a.c7(o,"/")||A.a.c7(o,"\\")
m=w.h(0,o)
l=m!=null?g[m]:h
if(l==null){l=n?new C.T4(o,A.o.ar(Date.now(),1000),0):C.hmf(o,q.w,q)
v.I(0,l)}l.b=p
if(r.a>>>8===3)if((p&61440)===40960){k=C.hmf(o,q.w,q)
if(k.as==null)k.bgy()
o=k.as
if(o==null)j=h
else{o=o.a
j=new B.anK(A.iv)
j.aOZ(o,A.iv,h,h)}i=j==null?h:j.eU()
if(i!=null)new B.GW(!1).E9(i,0,h,!0)}}return v}}
C.bI9.prototype={
d02(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=m.w
l===$&&B.c()
l.a.D9(0,d,0,f)
for(l=e+f,w=m.c,v=d.$flags|0,u=m.b,t=e;t<l;t=s){s=t+16
r=s<=l?16:l-t
C.hOf(u,m.a)
q=m.r
if(16>u.byteLength)B.bi(B.dO("Input buffer too short",null))
if(16>w.byteLength)B.bi(B.dO("Output buffer too short",null))
p=q.c
o=q.b
if(p){o===$&&B.c()
q.bSp(u,0,w,0,o)}else{o===$&&B.c()
q.bOW(u,0,w,0,o)}for(n=0;n<r;++n){q=t+n
p=d[q]
o=w[n]
v&2&&B.aj(d)
d[q]=p^o}++m.a}l=m.w
w=l.b
w===$&&B.c()
w=new Uint8Array(w)
m.x=w
l.LT(w,0)
m.x=A.aI.du(m.x,0,10)
w=m.w
l=w.a
l.iv(0)
w=w.d
w===$&&B.c()
l.D9(0,w,0,w.length)
return f}}
C.cqh.prototype={}
C.cql.prototype={}
C.cqf.prototype={}
C.auZ.prototype={}
C.cqk.prototype={
cRG(d,e,f,g){var w,v,u,t,s,r,q,p,o=this,n=o.a
n===$&&B.c()
w=n.c
n=o.b
v=n.b
v===$&&B.c()
u=A.o.ed(w+v-1,v)
t=new Uint8Array(4)
s=new Uint8Array(u*v)
n.biZ(new C.auZ(A.aI.fN(d,e)))
for(r=0,q=1;q<=u;++q){for(p=3;;--p){t[p]=t[p]+1
if(t[p]!==0)break}n=o.a
o.bTx(n.a,n.b,t,s,r)
r+=v}A.aI.hc(f,g,g+w,s)
return o.a.c},
bTx(d,e,f,g,h){var w,v,u,t,s,r,q,p,o,n,m=this
if(e<=0)throw B.X(B.dO("Iteration count must be at least 1.",null))
w=m.b
v=w.a
v.D9(0,d,0,d.length)
v.D9(0,f,0,4)
u=m.c
u===$&&B.c()
w.LT(u,0)
u=m.c
A.aI.hc(g,h,h+u.length,u)
for(u=g.$flags|0,t=1;t<e;++t){s=m.c
v.D9(0,s,0,s.length)
w.LT(m.c,0)
for(s=m.c,r=s.length,q=0;q!==r;++q){p=h+q
o=g[p]
n=s[q]
u&2&&B.aj(g)
g[p]=o^n}}}}
C.cqg.prototype={}
C.cqe.prototype={}
C.av_.prototype={
A(d,e){var w,v,u
if(e==null)return!1
w=!1
if(e instanceof C.av_){v=this.a
v===$&&B.c()
u=e.a
u===$&&B.c()
if(v===u){w=this.b
w===$&&B.c()
v=e.b
v===$&&B.c()
v=w===v
w=v}}return w},
tX(d,e){var w=this.a
w===$&&B.c()
w=A.o.tX(w,e.gc2h())
if(!w)e.gc2h()
return w},
aN8(d,e){this.a=0
this.b=d},
u_(d){return this.aN8(d,null)},
aNN(d){var w,v=this,u=v.b
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
w.b3X(v,u)
u=w.b
u===$&&B.c()
w.b3X(v,u)
u=v.a
return u.charCodeAt(0)==0?u:u},
b3X(d,e){var w,v=A.o.ft(e,16)
for(w=8-v.length;w>0;--w)d.a+="0"
d.a+=v},
gX(d){var w,v=this.a
v===$&&B.c()
w=this.b
w===$&&B.c()
return B.bv(v,w,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j)}}
C.cqj.prototype={
iv(d){var w,v=this
v.a.u_(0)
v.c=0
A.aI.hA(v.b,0,4,0)
v.w=0
w=v.r
A.d.hA(w,0,w.length,0)
w=v.f
w[0]=1732584193
w[1]=4023233417
w[2]=2562383102
w[3]=271733878
w[4]=3285377520},
aqD(d){var w,v=this,u=v.b,t=v.c
t===$&&B.c()
w=t+1
v.c=w
u.$flags&2&&B.aj(u)
u[t]=d&255
if(w===4){v.b5q(u,0)
v.c=0}v.a.aNN(1)},
D9(d,e,f,g){var w=this.crl(e,f,g)
f+=w
g-=w
w=this.crm(e,f,g)
this.crc(e,f+w,g-w)},
LT(d,e){var w,v=this,u=C.hul(v.a),t=u.a
t===$&&B.c()
t=C.hjS(t,3)
u.a=t
w=u.b
w===$&&B.c()
u.a=(t|w>>>29)>>>0
u.b=C.hjS(w,3)
v.crg()
v.crd(u)
v.av2()
v.cll(d,e)
v.iv(0)
return 20},
b5q(d,e){var w=this,v=w.w
v===$&&B.c()
w.w=v+1
w.r[v]=J.oB(A.aI.gaT(d),d.byteOffset,d.length).getUint32(e,A.iI===w.d)
if(w.w===16)w.av2()},
av2(){this.d01()
this.w=0
A.d.hA(this.r,0,16,0)},
crc(d,e,f){while(f>0){this.aqD(d[e]);++e;--f}},
crm(d,e,f){var w,v
for(w=this.a,v=0;f>4;){this.b5q(d,e)
e+=4
f-=4
w.aNN(4)
v+=4}return v},
crl(d,e,f){var w,v=0
for(;;){w=this.c
w===$&&B.c()
if(!(w!==0&&f>0))break
this.aqD(d[e]);++e;--f;++v}return v},
crg(){this.aqD(128)
for(;;){var w=this.c
w===$&&B.c()
if(!(w!==0))break
this.aqD(0)}},
crd(d){var w,v=this,u=v.w
u===$&&B.c()
if(u>14)v.av2()
u=v.d
switch(u){case A.iI:u=v.r
w=d.b
w===$&&B.c()
u[14]=w
w=d.a
w===$&&B.c()
u[15]=w
break
case A.FK:u=v.r
w=d.a
w===$&&B.c()
u[14]=w
w=d.b
w===$&&B.c()
u[15]=w
break
default:throw B.X(B.bc("Invalid endianness: "+u.v(0)))}},
cll(d,e){var w,v,u,t,s,r,q
for(w=this.e,v=this.f,u=d.length,t=A.iI===this.d,s=0;s<w;++s){r=v[s]
q=J.oB(A.aI.gaT(d),d.byteOffset,u)
q.$flags&2&&B.aj(q,11)
q.setUint32(e+s*4,r,t)}},
gd6(d){return this.f}}
C.cqm.prototype={
d01(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i
for(w=this.r,v=16;v<80;++v){u=w[v-3]^w[v-8]^w[v-14]^w[v-16]
w[v]=((u&$.qD[1])<<1|u>>>31)>>>0}t=this.f
s=t[0]
r=t[1]
q=t[2]
p=t[3]
o=t[4]
for(n=s,m=0,l=0;l<4;++l,m=j){k=$.qD[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|~r&p)>>>0)+w[m]+1518500249>>>0
i=$.qD[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qD[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+1859775393>>>0
i=$.qD[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qD[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r&q|r&p|q&p)>>>0)+w[m]+2400959708>>>0
i=$.qD[30]
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
q=((q&i)<<30|q>>>2)>>>0}for(l=0;l<4;++l,m=j){k=$.qD[5]
j=m+1
o=o+(((n&k)<<5|n>>>27)>>>0)+((r^q^p)>>>0)+w[m]+3395469782>>>0
i=$.qD[30]
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
C.cqi.prototype={
biZ(d){var w,v,u,t,s=this,r=s.a
r.iv(0)
w=d.a
w===$&&B.c()
v=w.length
u=s.c
u===$&&B.c()
if(v>u){r.D9(0,w,0,v)
w=s.d
w===$&&B.c()
r.LT(w,0)
w=s.b
w===$&&B.c()
v=w}else{t=s.d
t===$&&B.c()
A.aI.hc(t,0,v,w)}w=s.d
w===$&&B.c()
A.aI.hA(w,v,w.length,0)
w=s.e
w===$&&B.c()
A.aI.hc(w,0,u,s.d)
s.bdA(s.d,u,54)
s.bdA(s.e,u,92)
u=s.d
r.D9(0,u,0,u.length)},
LT(d,e){var w,v,u=this,t=u.a,s=u.e
s===$&&B.c()
w=u.c
w===$&&B.c()
t.LT(s,w)
s=u.e
t.D9(0,s,0,s.length)
v=t.LT(d,e)
s=u.e
A.aI.hA(s,w,s.length,0)
s=u.d
s===$&&B.c()
t.D9(0,s,0,s.length)
return v},
bdA(d,e,f){var w,v,u
for(w=d.$flags|0,v=0;v<e;++v){u=d[v]
w&2&&B.aj(d)
d[v]=u^f}}}
C.cqd.prototype={}
C.cqc.prototype={
a3D(d){return(D.oX[d&255]&255|(D.oX[d>>>8&255]&255)<<8|(D.oX[d>>>16&255]&255)<<16|D.oX[d>>>24&255]<<24)>>>0},
bpz(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e=a0.a
e===$&&B.c()
w=e.length
if(w<16||w>32||(w&7)!==0)throw B.X(B.dO("Key length not 128/192/256 bits.",null))
v=w>>>2
u=v+6
f.a=u
t=u+1
s=J.e6(t,x.bW)
for(u=x.S,r=0;r<t;++r)s[r]=B.c1(4,0,!1,u)
switch(v){case 4:q=J.oB(A.aI.gaT(e),e.byteOffset,w)
p=q.getUint32(0,!0)
e=s[0]
e[0]=p
o=q.getUint32(4,!0)
e[1]=o
n=q.getUint32(8,!0)
e[2]=n
m=q.getUint32(12,!0)
e[3]=m
for(r=1;r<=10;++r){p=(p^f.a3D((m>>>8|(m&$.qD[24])<<24)>>>0)^D.cOZ[r-1])>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m}break
case 6:q=J.oB(A.aI.gaT(e),e.byteOffset,w)
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
p=(p^f.a3D((k>>>8|(k&$.qD[24])<<24)>>>0)^j)>>>0
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
p=(p^f.a3D((k>>>8|(k&$.qD[24])<<24)>>>0)^i)>>>0
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
case 8:q=J.oB(A.aI.gaT(e),e.byteOffset,w)
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
p=(p^f.a3D((g>>>8|(g&$.qD[24])<<24)>>>0)^j)>>>0
e=s[r]
e[0]=p
o=(o^p)>>>0
e[1]=o
n=(n^o)>>>0
e[2]=n
m=(m^n)>>>0
e[3]=m;++r
if(r>=15)break
l=(l^f.a3D(m))>>>0
e=s[r]
e[0]=l
k=(k^l)>>>0
e[1]=k
h=(h^k)>>>0
e[2]=h
g=(g^h)>>>0
e[3]=g;++r}break
default:throw B.X(B.bc("Should never get here"))}return s},
bSp(b2,b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=J.oB(A.aI.gaT(b2),b2.byteOffset,16),a3=a2.getUint32(b3,!0),a4=a2.getUint32(b3+4,!0),a5=a2.getUint32(b3+8,!0),a6=a2.getUint32(b3+12,!0),a7=b6[0],a8=a3^a7[0],a9=a4^a7[1],b0=a5^a7[2],b1=a6^a7[3]
for(a7=this.a-1,w=1;w<a7;){v=D.en[a8&255]
u=D.en[a9>>>8&255]
t=$.qD[8]
s=D.en[b0>>>16&255]
r=$.qD[16]
q=D.en[b1>>>24&255]
p=$.qD[24]
o=b6[w]
n=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[0]
q=D.en[a9&255]
s=D.en[b0>>>8&255]
u=D.en[b1>>>16&255]
v=D.en[a8>>>24&255]
m=q^(s>>>24|(s&t)<<8)^(u>>>16|(u&r)<<16)^(v>>>8|(v&p)<<24)^o[1]
v=D.en[b0&255]
u=D.en[b1>>>8&255]
s=D.en[a8>>>16&255]
q=D.en[a9>>>24&255]
l=v^(u>>>24|(u&t)<<8)^(s>>>16|(s&r)<<16)^(q>>>8|(q&p)<<24)^o[2]
q=D.en[b1&255]
a8=D.en[a8>>>8&255]
a9=D.en[a9>>>16&255]
b0=D.en[b0>>>24&255];++w
b1=q^(a8>>>24|(a8&t)<<8)^(a9>>>16|(a9&r)<<16)^(b0>>>8|(b0&p)<<24)^o[3]
o=D.en[n&255]
b0=D.en[m>>>8&255]
a9=D.en[l>>>16&255]
a8=D.en[b1>>>24&255]
q=b6[w]
a8=o^(b0>>>24|(b0&t)<<8)^(a9>>>16|(a9&r)<<16)^(a8>>>8|(a8&p)<<24)^q[0]
a9=D.en[m&255]
b0=D.en[l>>>8&255]
o=D.en[b1>>>16&255]
s=D.en[n>>>24&255]
a9=a9^(b0>>>24|(b0&t)<<8)^(o>>>16|(o&r)<<16)^(s>>>8|(s&p)<<24)^q[1]
s=D.en[l&255]
o=D.en[b1>>>8&255]
b0=D.en[n>>>16&255]
u=D.en[m>>>24&255]
b0=s^(o>>>24|(o&t)<<8)^(b0>>>16|(b0&r)<<16)^(u>>>8|(u&p)<<24)^q[2]
u=D.en[b1&255]
o=D.en[n>>>8&255]
s=D.en[m>>>16&255]
v=D.en[l>>>24&255];++w
b1=u^(o>>>24|(o&t)<<8)^(s>>>16|(s&r)<<16)^(v>>>8|(v&p)<<24)^q[3]}n=D.en[a8&255]^C.nW(D.en[a9>>>8&255],24)^C.nW(D.en[b0>>>16&255],16)^C.nW(D.en[b1>>>24&255],8)^b6[w][0]
m=D.en[a9&255]^C.nW(D.en[b0>>>8&255],24)^C.nW(D.en[b1>>>16&255],16)^C.nW(D.en[a8>>>24&255],8)^b6[w][1]
l=D.en[b0&255]^C.nW(D.en[b1>>>8&255],24)^C.nW(D.en[a8>>>16&255],16)^C.nW(D.en[a9>>>24&255],8)^b6[w][2]
b1=D.en[b1&255]^C.nW(D.en[a8>>>8&255],24)^C.nW(D.en[a9>>>16&255],16)^C.nW(D.en[b0>>>24&255],8)^b6[w][3]
a7=D.oX[n&255]
b0=D.oX[m>>>8&255]
v=this.d
u=v[l>>>16&255]
t=v[b1>>>24&255]
s=b6[w+1]
r=s[0]
q=v[m&255]
p=D.oX[l>>>8&255]
a9=D.oX[b1>>>16&255]
o=v[n>>>24&255]
k=s[1]
j=v[l&255]
i=D.oX[b1>>>8&255]
h=D.oX[n>>>16&255]
g=D.oX[m>>>24&255]
f=s[2]
e=v[b1&255]
d=v[n>>>8&255]
v=v[m>>>16&255]
a0=D.oX[l>>>24&255]
s=s[3]
a1=J.oB(A.aI.gaT(b4),b4.byteOffset,16)
a1.$flags&2&&B.aj(a1,11)
a1.setUint32(b5,(a7&255^(b0&255)<<8^(u&255)<<16^t<<24^r)>>>0,!0)
r=J.oB(A.aI.gaT(b4),b4.byteOffset,16)
r.$flags&2&&B.aj(r,11)
r.setUint32(b5+4,(q&255^(p&255)<<8^(a9&255)<<16^o<<24^k)>>>0,!0)
k=J.oB(A.aI.gaT(b4),b4.byteOffset,16)
k.$flags&2&&B.aj(k,11)
k.setUint32(b5+8,(j&255^(i&255)<<8^(h&255)<<16^g<<24^f)>>>0,!0)
f=J.oB(A.aI.gaT(b4),b4.byteOffset,16)
f.$flags&2&&B.aj(f,11)
f.setUint32(b5+12,(e&255^(d&255)<<8^(v&255)<<16^a0<<24^s)>>>0,!0)},
bOW(b1,b2,b3,b4,b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=J.oB(A.aI.gaT(b1),b1.byteOffset,16).getUint32(b2,!0),a1=J.oB(A.aI.gaT(b1),b1.byteOffset,16).getUint32(b2+4,!0),a2=J.oB(A.aI.gaT(b1),b1.byteOffset,16).getUint32(b2+8,!0),a3=J.oB(A.aI.gaT(b1),b1.byteOffset,16).getUint32(b2+12,!0),a4=this.a,a5=b5[a4],a6=a0^a5[0],a7=a1^a5[1],a8=a2^a5[2],a9=a4-1,b0=a3^a5[3]
for(a5=a8,a4=a7;a9>1;){w=D.em[a6&255]
v=D.em[b0>>>8&255]
u=$.qD[8]
t=D.em[a5>>>16&255]
s=$.qD[16]
r=D.em[a4>>>24&255]
q=$.qD[24]
a7=b5[a9]
p=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[0]
r=D.em[a4&255]
t=D.em[a6>>>8&255]
v=D.em[b0>>>16&255]
w=D.em[a5>>>24&255]
o=r^(t>>>24|(t&u)<<8)^(v>>>16|(v&s)<<16)^(w>>>8|(w&q)<<24)^a7[1]
w=D.em[a5&255]
v=D.em[a4>>>8&255]
t=D.em[a6>>>16&255]
r=D.em[b0>>>24&255]
n=w^(v>>>24|(v&u)<<8)^(t>>>16|(t&s)<<16)^(r>>>8|(r&q)<<24)^a7[2]
r=D.em[b0&255]
a5=D.em[a5>>>8&255]
a4=D.em[a4>>>16&255]
a6=D.em[a6>>>24&255];--a9
b0=r^(a5>>>24|(a5&u)<<8)^(a4>>>16|(a4&s)<<16)^(a6>>>8|(a6&q)<<24)^a7[3]
a7=D.em[p&255]
a6=D.em[b0>>>8&255]
a4=D.em[n>>>16&255]
a5=D.em[o>>>24&255]
r=b5[a9]
a6=a7^(a6>>>24|(a6&u)<<8)^(a4>>>16|(a4&s)<<16)^(a5>>>8|(a5&q)<<24)^r[0]
a5=D.em[o&255]
a4=D.em[p>>>8&255]
a7=D.em[b0>>>16&255]
t=D.em[n>>>24&255]
a4=a5^(a4>>>24|(a4&u)<<8)^(a7>>>16|(a7&s)<<16)^(t>>>8|(t&q)<<24)^r[1]
t=D.em[n&255]
a7=D.em[o>>>8&255]
a5=D.em[p>>>16&255]
v=D.em[b0>>>24&255]
a5=t^(a7>>>24|(a7&u)<<8)^(a5>>>16|(a5&s)<<16)^(v>>>8|(v&q)<<24)^r[2]
v=D.em[b0&255]
a7=D.em[n>>>8&255]
t=D.em[o>>>16&255]
w=D.em[p>>>24&255];--a9
b0=v^(a7>>>24|(a7&u)<<8)^(t>>>16|(t&s)<<16)^(w>>>8|(w&q)<<24)^r[3]}p=D.em[a6&255]^C.nW(D.em[b0>>>8&255],24)^C.nW(D.em[a5>>>16&255],16)^C.nW(D.em[a4>>>24&255],8)^b5[a9][0]
o=D.em[a4&255]^C.nW(D.em[a6>>>8&255],24)^C.nW(D.em[b0>>>16&255],16)^C.nW(D.em[a5>>>24&255],8)^b5[a9][1]
n=D.em[a5&255]^C.nW(D.em[a4>>>8&255],24)^C.nW(D.em[a6>>>16&255],16)^C.nW(D.em[b0>>>24&255],8)^b5[a9][2]
b0=D.em[b0&255]^C.nW(D.em[a5>>>8&255],24)^C.nW(D.em[a4>>>16&255],16)^C.nW(D.em[a6>>>24&255],8)^b5[a9][3]
a4=D.zY[p&255]
a5=this.d
w=a5[b0>>>8&255]
v=a5[n>>>16&255]
u=D.zY[o>>>24&255]
t=b5[0]
s=t[0]
r=a5[o&255]
q=a5[p>>>8&255]
a7=D.zY[b0>>>16&255]
m=a5[n>>>24&255]
l=t[1]
k=a5[n&255]
j=D.zY[o>>>8&255]
i=D.zY[p>>>16&255]
h=a5[b0>>>24&255]
g=t[2]
f=D.zY[b0&255]
e=a5[n>>>8&255]
a8=a5[o>>>16&255]
a5=a5[p>>>24&255]
t=t[3]
d=J.oB(A.aI.gaT(b3),b3.byteOffset,16)
d.$flags&2&&B.aj(d,11)
d.setUint32(b4,(a4&255^(w&255)<<8^(v&255)<<16^u<<24^s)>>>0,!0)
d.setUint32(b4+4,(r&255^(q&255)<<8^(a7&255)<<16^m<<24^l)>>>0,!0)
d.setUint32(b4+8,(k&255^(j&255)<<8^(i&255)<<16^h<<24^g)>>>0,!0)
d.setUint32(b4+12,(f&255^(e&255)<<8^(a8&255)<<16^a5<<24^t)>>>0,!0)}}
C.bTC.prototype={}
C.bTD.prototype={
gJ(d){var w=this.a.length
return w},
ar9(){return B.rN(this.a,A.iv,null,null)}}
C.bd2.prototype={
vF(d){return C.i8x(d)}}
C.cAK.prototype={
Nw(d){var w=d.w,v=Math.max(1,A.i.cB(w/186)),u=Math.max(0,w-16*(v-1))/v,t=u/0.52
return new B.abw(v,t+20,u+16,t,u,B.ux(d.x))},
nK(d){return!1}}
C.bUD.prototype={
cLt(d){if(this.b)throw B.X(B.bc("FontLoader is already loaded"))
this.c.push(d.bG(new C.bUE(),x.E))},
n1(d){var w=0,v=B.j(x.H),u=this,t,s,r,q,p
var $async$n1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(u.b)throw B.X(B.bc("FontLoader is already loaded"))
u.b=!0
t=u.c,s=t.length,r=u.a,q=0
case 2:if(!(q<t.length)){w=4
break}p=C
w=6
return B.b(t[q],$async$n1)
case 6:w=5
return B.b(p.bEX(f,r),$async$n1)
case 5:case 3:t.length===s||(0,B.I)(t),++q
w=2
break
case 4:return B.h(null,v)}})
return B.i($async$n1,v)}}
C.a9R.prototype={
A(d,e){if(e==null)return!1
if(J.bY(e)!==B.b4(this))return!1
return e instanceof C.a9R&&e.a===this.a},
gX(d){return B.bv(B.b4(this),B.xq(this.a),A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j,A.j)},
v(d){var w="<optimized out>#"
if(B.b4(this)===D.h9L)return"["+(w+B.ed(this.a))+"]"
return"[ObjectKey "+(w+B.ed(this.a))+"]"}}
C.a2m.prototype={
S(){return new C.aLD(B.aR(x.N))},
cZ9(d){return this.d.$1(d)},
cWQ(){return this.e.$0()}}
C.aLD.prototype={
Y(){this.a3()
this.PZ()},
PZ(){var w=0,v=B.j(x.H),u,t=this,s
var $async$PZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.a.cWQ(),$async$PZ)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fjL(t,s))
case 1:return B.h(u,v)}})
return B.i($async$PZ,v)},
a_d(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a_d=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.a.c
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.fjP(t),q),q.k("M.E"))
if(p.length===0||t.r){w=1
break}t.m(new C.fjQ(t))
w=3
return B.b(C.apu(p),$async$a_d)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.fjR(t,s,p))
w=4
return B.b(t.PZ(),$async$a_d)
case 4:case 1:return B.h(u,v)}})
return B.i($async$a_d,v)},
a2y(d){return this.cvy(d)},
cvy(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a2y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}t.m(new C.fjM(t))
s=J.t(d,"id")
w=3
return B.b(C.c4I(J.k(s==null?"":s)),$async$a2y)
case 3:r=f
if(r==null){if(t.c==null){w=1
break}t.m(new C.fjN(t))
w=1
break}q=C.hjf(r,!1)
q.z=!1
s=t.a
s.toString
w=4
return B.b(s.cZ9(B.a([q],x.D)),$async$a2y)
case 4:if(t.c==null){w=1
break}t.m(new C.fjO(t,r))
case 1:return B.h(u,v)}})
return B.i($async$a2y,v)},
PY(d,e){return this.bPn(0,e)},
bPn(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$PY=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:if(t.r){w=1
break}s=J.a8(e)
r=s.h(e,"name")
q=J.k(r==null?"this presentation":r)
r=t.c
r.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.fjG(q),r,null,!0,!0,x.y),$async$PY)
case 3:if(g!==!0||t.c==null){w=1
break}t.m(new C.fjH(t))
s=s.h(e,"id")
w=4
return B.b(C.apt(J.k(s==null?"":s)),$async$PY)
case 4:if(t.c==null){w=1
break}t.m(new C.fjI(t))
w=5
return B.b(t.PZ(),$async$PY)
case 5:case 1:return B.h(u,v)}})
return B.i($async$PY,v)},
cKs(d){var w=B.bj(d),v=w==null?null:w.bU()
if(v==null)return""
return A.iX[B.bL(v)-1]+" "+B.bX(v)},
aTI(d,e){var w=null,v=B.l(e*0.3)
return B.p(w,B.W(d,A.c,w,w,w,e*0.5),A.f,w,w,new B.o(w,w,w,v,w,D.Qz,A.n),w,e,w,w,w,w,w,e)},
aTH(d){return this.aTI(d,44)},
baD(d,e,f,g){var w,v,u=null,t=this.w===d,s=t?D.Qz:u,r=B.l(14),q=B.W(e,t?A.c:A.aF,u,u,u,17),p=x.p
q=B.a([q,A1.AW,B.d(f,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aF,u,u,u,u,u,u,u,u,13.5,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u)],p)
if(g>0){w=A.c.j(t?0.25:0.1)
v=B.l(10)
A.d.u(q,B.a([A1.AW,B.p(u,B.d(""+g,u,u,u,u,u,u,B.m(u,u,t?A.c:A.aR,u,u,u,u,u,u,u,u,11,u,u,A.u,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,D.bK4,u,u,u)],p))}return B.E(B.az(A.bY,B.cT(u,B.A(q,A.l,u,A.b8,A.h,0,u,u),u,u,A.b0,new B.o(u,u,u,r,u,s,A.n),A.ha,u,u,u,u,A.qH,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.fjV(this,d),u,u,u,u,u,u,!1,A.a4),1)},
cpj(d){var w,v,u,t,s,r,q=null,p=this.d.q(0,d.a),o=p?A.d9.j(0.14):D.a_P,n=B.l(18),m=p?A.d9:A.dq
m=B.K(m,A.r,p?1.8:1)
w=this.aTH(A.qV)
v=B.d(d.b,q,1,A.a2,q,q,q,T.acj,q,q,q)
u=d.r.length
t=u===1?"":"s"
s=x.p
t=B.E(B.x(B.a([v,A.cR,B.d(""+u+" slide"+t,q,q,q,q,q,q,D.aXR,q,q,q)],s),A.E,q,A.e,A.h,0,A.p),1)
v=p?D.Qz:q
u=p?q:B.K(A.aT,A.r,1.6)
r=p?D.c0L:q
return B.az(q,B.cT(q,B.A(B.a([w,A.bb,t,B.cT(q,r,q,q,A.b0,new B.o(q,q,u,q,q,v,A.a6),A.h1,q,26,q,q,q,q,q,26)],s),A.l,q,A.e,A.h,0,q,q),q,q,A.b0,new B.o(o,q,m,n,q,q,A.n),A.h1,q,q,q,A.da,A.bl,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.fjK(this,p,d),q,q,q,q,q,q,!1,A.a4)},
cx9(d){var w,v,u,t,s,r=this,q=null,p=J.a8(d),o=p.h(d,"savedAt"),n=r.cKs(J.k(o==null?"":o))
o=B.l(18)
w=B.K(A.dq,A.r,1)
v=r.aTH(A.PH)
u=p.h(d,"name")
u=B.d(J.k(u==null?"Presentation":u),q,1,A.a2,q,q,q,T.acj,q,q,q)
p=p.h(d,"slides")
p=B.w(p==null?"?":p)
t=n.length===0?"":" \xb7 saved "+n
s=x.p
t=B.E(B.x(B.a([u,A.cR,B.d(p+" slides"+t,q,q,q,q,q,q,D.aXR,q,q,q)],s),A.E,q,A.e,A.h,0,A.p),1)
p=r.b76(A.hB,A.bv,"Bring it back",r.r?q:new C.fjS(r,d))
return B.p(q,B.A(B.a([v,A.bb,t,p,A.bn,r.b76(A.ej,A.bX,"Delete",r.r?q:new C.fjT(r,d))],s),A.l,q,A.e,A.h,0,q,q),A.f,q,q,new B.o(D.a_P,q,w,o,q,q,A.n),q,q,q,A.da,D.bEi,q,q,q)},
b76(d,e,f,g){var w=null,v=g==null,u=e.j(v?0.06:0.14)
return B.hc(B.az(w,B.p(w,B.W(d,v?A.aT:e,w,w,w,19),A.f,w,w,new B.o(u,w,w,w,w,w,A.a6),w,38,w,w,w,w,w,38),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,g,w,w,w,w,w,w,!1,A.a4),w,f,w,w)},
avj(d,e,f){var w=null
return new B.D(D.bDi,B.x(B.a([B.W(d,A.aT,w,w,w,46),A.af,B.d(e,w,w,w,w,w,w,D.fFU,w,w,w),A.ax,B.d(f,w,w,w,w,w,w,D.fxJ,A.K,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),w)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=j.e
if(h==null)h=A.ce
w=j.a.c.length
v=w!==0&&j.d.a===w
w=B.aE(d,A.bZ,x.w).w
u=B.p(i,i,A.f,i,i,new B.o(A.aT,i,i,B.l(3),i,i,A.n),i,4,i,i,i,i,i,42)
t=x.p
s=B.a([j.aTI(A.zL,46),A.bb,D.bL3],t)
if(j.r)s.push(D.exK)
s.push(B.aI(i,i,i,i,A.tq,i,i,i,new C.fjY(d),i,i,i,i,i,i))
s=B.A(s,A.l,i,A.e,A.h,0,i,i)
r=A.c.j(0.05)
q=B.l(18)
p=B.K(A.dq,A.r,1)
o=J.a8(h)
q=B.a([A.T,u,new B.D(D.bH4,s,i),B.p(i,B.A(B.a([j.baD(0,A.zs,"Save",j.a.c.length),j.baD(1,A.HU,"Saved",o.gJ(h))],t),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.o(r,i,p,q,i,i,A.n),i,i,i,D.bG4,A.eC,i,i,i)],t)
if(j.x!=null){u=(j.y?A.bX:A.bv).j(0.12)
s=B.l(14)
r=B.K((j.y?A.bX:A.bv).j(0.4),A.r,1)
p=j.y
n=p?A.HN:A.ed
n=B.W(n,p?A.bX:A.bv,i,i,i,18)
m=j.x
m.toString
q.push(B.p(i,B.A(B.a([n,A.ae,B.E(B.d(m,i,i,i,i,i,i,A.VZ,i,i,i),1)],t),A.l,i,A.e,A.h,0,i,i),A.f,i,i,new B.o(u,i,r,s,i,i,A.n),i,i,i,D.bG0,A.hP,i,i,1/0))}u=B.a([],t)
if(j.w===0){s=j.d.a
s=B.a([B.E(B.d(s===0?"Tap the ones to save":""+s+" picked",i,i,i,i,i,i,D.fBz,i,i,i),1)],t)
if(j.a.c.length!==0)s.push(B.az(i,B.d(v?"Clear":"Pick all",i,i,i,i,i,i,D.fEQ,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new C.fjZ(j,v),i,i,i,i,i,i,!1,A.a4))
s=B.a([B.A(s,A.l,i,A.e,A.h,0,i,i),A.T],t)
if(j.a.c.length===0)s.push(j.avj(A.qV,"No presentations yet","Make one first, then save it here."))
for(r=j.a.c,p=r.length,l=0;l<r.length;r.length===p||(0,B.I)(r),++l)s.push(j.cpj(r[l]))
A.d.u(u,s)}else{s=B.a([],t)
if(j.f)s.push(D.exg)
else if(j.e==null)s.push(j.avj(A.a3j,"Could not reach the database","Check the connection, then open this again."))
else if(o.gau(h))s.push(j.avj(A.oD,"Nothing saved yet","Save some presentations and they will show up here."))
for(r=o.gae(h);r.C();)s.push(j.cx9(r.gP(r)))
A.d.u(u,s)}q.push(new B.di(1,A.cm,B.cw(u,i,i,A3.anq,i,i,A.ah,!0),i))
if(j.w===0){u=j.d
s=u.a===0
r=s||j.r?i:j.gc9q()
p=s?i:D.Qz
s=s?A.c.j(0.07):i
o=B.l(18)
n=u.a===0?i:B.a([new B.ab(0,A.G,A.b7.j(0.4),A.cz,18)],x.V)
u=u.a
m=u===0
k=B.W(A.zs,m?A.k0:A.c,i,i,i,21)
u=m?"Pick presentations to save":"Save "+u+" to the database"
q.push(new B.D(D.bGG,B.az(i,B.cT(i,B.A(B.a([k,A.Vz,new B.di(1,A.cm,new B.dx(A.dM,A.z,A.f,B.d(u,i,i,i,i,i,i,B.m(i,i,m?A.k0:A.c,i,i,i,i,i,i,i,i,15,i,i,A.u,i,i,!0,i,i,i,i,i,i,i,i),i,i,i),i),i)],t),A.l,i,A.b8,A.h,0,i,i),i,i,A.b0,new B.o(s,i,i,o,n,p,A.n),A.ha,i,54,i,i,i,i,i,i),A.y,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,i,r,i,i,i,i,i,i,!1,A.a4),i))}else q.push(A.T)
return B.p(i,B.bm(!0,B.x(q,A.l,i,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!1),A.f,i,new B.aY(0,1/0,0,w.a.b*0.9),D.b97,i,i,i,i,i,i,i,i)}}
C.oT.prototype={
aj(){return B.J(["id",this.a,"doc",this.b.aj(),"updatedAt",this.c.aa().ag()],x.N,x.z)}}
C.a_4.prototype={
S(){return new C.aA1(B.a([],x.k),B.f4(null,x.H))},
ge3(){return this.c}}
C.aA1.prototype={
Y(){this.a3()
this.Q8()},
Q8(){var w=0,v=B.j(x.H),u,t=this,s
var $async$Q8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(C.a3l(t.a.c),$async$Q8)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.cR5(t,s))
case 1:return B.h(u,v)}})
return B.i($async$Q8,v)},
cDt(d){var w,v,u,t=this
d.c=new B.V(Date.now(),0,!1)
w=J.oD(t.d,new C.cR8(d))
v=w<0
if(v&&C.i5z(d))return t.f
u=t.d
if(v)J.n7(u,0,d)
else J.aK(u,w,d)
v=x.a
B.h9g(new C.cR9(t),v)
return t.f=t.f.bG(new C.cRa(t,d),v).eF(new C.cRb())},
Jo(d,e,f){return this.ciQ(0,e,f)},
b0L(d,e){return this.Jo(0,e,!1)},
ciQ(d,e,f){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jo=B.e(function(g,h){if(g===1)return B.f(h,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.a6(s,!1).ce(B.ee(new C.cR4(t,e),!1,null,x.H)),$async$Jo)
case 3:w=4
return B.b(t.f,$async$Jo)
case 4:w=5
return B.b(t.Q8(),$async$Jo)
case 5:case 1:return B.h(u,v)}})
return B.i($async$Jo,v)},
b0_(d){var w=A.o.v(1000*Date.now()),v=d==null?D.dRn:d
this.Jo(0,new C.oT(w,v,new B.V(Date.now(),0,!1)),!0)},
c8S(){return this.b0_(null)},
aeY(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$aeY=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cRc(),r,!1,!1,!0,null,!1,!1,x.g2),$async$aeY)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.b0_(s)
case 1:return B.h(u,v)}})
return B.i($async$aeY,v)},
Jn(d,e){return this.bPe(0,e)},
bPe(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Jn=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=t.c
s.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.cR_(e),s,null,!0,!0,x.y),$async$Jn)
case 3:if(g!==!0){w=1
break}t.m(new C.cR0(t,e))
w=4
return B.b(t.f,$async$Jn)
case 4:w=5
return B.b(C.ahS(t.a.c,e.a),$async$Jn)
case 5:w=6
return B.b(t.Q8(),$async$Jn)
case 6:case 1:return B.h(u,v)}})
return B.i($async$Jn,v)},
DV(d){return this.bHh(d)},
bHh(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$DV=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.cQW(d),r,!0,!0,!1,null,!1,!1,x.N),$async$DV)
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
return B.b(t.b0L(0,d),$async$DV)
case 9:w=5
break
case 7:w=10
return B.b(F.hjU(r,d.b,null),$async$DV)
case 10:w=5
break
case 8:w=11
return B.b(t.Jn(0,d),$async$DV)
case 11:w=5
break
case 5:case 1:return B.h(u,v)}})
return B.i($async$DV,v)},
c2d(){var w,v,u,t,s=null,r=[D.dRq,D.dRo,D.dRp],q=new C.cR2(),p=B.l(26),o=x.V,n=B.a([new B.ab(0,A.G,A.d6.j(0.4),A.eR,24)],o),m=x.p,l=B.a([],m)
for(w=0;w<3;++w){v=D.dz4[w]
u=A.c.j(0.18)
t=new B.aP(999,999)
l.push(B.p(s,B.d(v,s,s,s,s,s,s,A.p9,s,s,s),A.f,s,s,new B.o(u,s,s,new B.be(t,t,t,t),s,s,A.n),s,s,s,s,A.oz,s,s,s))}return B.p(s,B.A(B.a([B.E(B.x(B.a([D.h51,A.P,B.bZ(A.bI,l,A.br,s,6,6),A.aO,B.az(s,B.p(s,D.feX,A.f,s,s,new B.o(A.c,s,s,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.cK,10)],o),s,A.n),s,s,s,s,X.anR,s,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.cR1(this),s,s,s,s,s,s,!1,A.a4)],m),A.E,s,A.e,A.h,0,A.p),1),new B.a5(130,110,new B.an(A.z,s,A.ad,A.t,B.a([q.$3(r[0],-0.22,-30),q.$3(r[2],0.22,30),q.$3(r[1],0,0)],m),s),s)],m),A.l,s,A.e,A.h,0,s,s),A.f,s,s,new B.o(s,s,s,p,n,D.c9t,A.n),s,s,s,s,D.bHe,s,s,s)},
bHf(d){var w,v=null,u=d.b.d.length,t=B.l(6),s=B.a([new B.ab(0,A.G,A.w.j(0.5),A.cz,14)],x.V),r=x.p
s=B.p(v,B.bu(B.l(6),new B.an(A.a0,v,A.b1,A.t,B.a([new B.dx(A.c_,A.z,A.f,F.aq5(d.b),v),D.eDL,B.ao(v,B.az(v,B.p(v,D.c1D,A.f,v,v,D.ba5,v,26,v,v,v,v,v,26),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQR(this,d),v,v,v,v,v,v,!1,A.a4),v,v,v,4,4,v)],r),v),A.aq),A.f,v,v,new B.o(v,v,v,t,s,v,A.n),v,v,v,v,v,v,v,v)
t=A.a.i(d.b.a)
t=B.d(t.length===0?"Untitled Book":t,v,1,A.a2,v,v,v,D.fuP,v,v,v)
w=u===1?"":"s"
return B.az(v,B.x(B.a([new B.fH(0.6470588235294118,s,v),A.P,t,B.d(""+u+" page"+w,v,v,v,v,v,v,D.fBL,v,v,v)],r),A.E,v,A.e,A.h,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,new C.cQS(this,d),v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.cQT(this,d),v,v,v,v,v,v,!1,A.a4)},
B(d){var w,v,u,t=this,s=null,r=x.p,q=B.eS(B.a([new B.D(R.amk,B.hc(B.az(s,B.p(s,A.ath,A.f,s,s,new B.o(s,s,s,s,B.a([new B.ab(0,A.G,A.b7.j(0.5),A.J,12)],x.V),E.x9,A.a6),s,36,s,s,s,s,s,36),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,t.gcaf(),s,s,s,s,s,s,!1,A.a4),s,"Write with AI",s,s),s)],r),s,s,!0,!0,A.L,s,1,!0,s,0,!1,s,!1,E.nx,s,s,s,!0,s,s,s,s,s,D.h55,s,s,s,1,s,!0)
if(t.e)r=D.bdK
else{w=t.c2d()
v=B.a([D.fR8,A.ae],r)
if(J.cJ(t.d)){u=B.l(999)
v.push(B.p(s,B.d(""+J.ad(t.d),s,s,s,s,s,s,D.fui,s,s,s),A.f,s,s,new B.o(D.bj0,s,s,u,s,s,A.n),s,s,s,s,A.z4,s,s,s))}r=B.a([new B.nN(A9.a1c,new B.m7(w,s),s),new B.nN(D.bGA,new B.m7(B.A(v,A.l,s,A.e,A.h,0,s,s),s),s)],r)
if(J.ct(t.d))r.push(D.fm8)
else r.push(new B.nN(D.bG2,B.Q_(new B.oX(new C.cRd(t),J.ad(t.d),!0,!0,!0,0,B.ts(),s),D.bcY),s))
r=B.w6(0,s,A.t,s,A.y,s,s,s,s,s,!1,s,A.ah,!1,r)}return B.c4(q,D.bhA,r,s,!1,!1,s,s)}}
C.a_2.prototype={
S(){return new C.azY(B.a([],x.bx))},
V3(d){return this.d.$1(d)}}
C.aHq.prototype={}
C.azY.prototype={
b3Z(d,e,f){var w=$.ax(),v=new B.au(new B.ba(d,A.b6,A.aP),w),u=this.gb0K()
v.aV(0,u)
w=new B.au(new B.ba(e,A.b6,A.aP),w)
w.aV(0,u)
return new C.aHq(v,w,f)},
EI(){var w,v=this
v.y=!0
w=v.x
if(w!=null)w.a1(0)
v.x=B.cz(A.qF,new C.cQk(v))},
Y(){var w,v,u,t,s,r,q,p,o,n,m=this
m.a3()
w=m.a.c.b
v=$.ax()
u=new B.au(new B.ba(w.a,A.b6,A.aP),v)
t=m.gb0K()
u.aV(0,t)
m.d!==$&&B.aQ()
m.d=u
u=new B.au(new B.ba(w.b,A.b6,A.aP),v)
u.aV(0,t)
m.e!==$&&B.aQ()
m.e=u
u=new B.au(new B.ba(w.c,A.b6,A.aP),v)
u.aV(0,t)
m.f!==$&&B.aQ()
m.f=u
m.r=w.e
for(u=w.d,s=u.length,r=m.w,q=0;q<u.length;u.length===s||(0,B.I)(u),++q){p=u[q]
o=new B.au(new B.ba(p.a,A.b6,A.aP),v)
o.aV(0,t)
n=new B.au(new B.ba(p.b,A.b6,A.aP),v)
n.aV(0,t)
r.push(new C.aHq(o,n,p.c))}if(r.length===0)r.push(m.b3Z("Page 1","",""))},
t(){var w,v,u,t,s,r=this,q=r.x
if(q!=null)q.a1(0)
if(r.y){r.a.c.b=r.gpF()
q=r.a
q.V3(q.c)}q=r.d
q===$&&B.c()
w=q.U$=$.ax()
q.R$=0
q=r.e
q===$&&B.c()
q.U$=w
q.R$=0
q=r.f
q===$&&B.c()
q.U$=w
q.R$=0
for(q=r.w,v=q.length,u=0;u<v;++u){t=q[u]
s=t.a
s.U$=w
s.R$=0
s=t.b
s.U$=w
s.R$=0}r.a2()},
gpF(){var w,v,u,t,s,r,q,p,o=this,n=o.d
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
t.push(new F.mW(A.a.i(p.a.a.a),p.b.a.a,p.c,""))}return new F.rT(n,w,v,t,u)},
Bv(){var w=0,v=B.j(x.H),u=this,t
var $async$Bv=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.x
if(t!=null)t.a1(0)
u.y=!1
u.a.c.b=u.gpF()
t=u.a
w=2
return B.b(t.V3(t.c),$async$Bv)
case 2:return B.h(null,v)}})
return B.i($async$Bv,v)},
cad(){this.m(new C.cQj(this))
this.EI()},
b_F(d,e){var w=this,v=d+e
if(v<0||v>=w.w.length)return
w.m(new C.cQm(w,d,v))
w.EI()},
cae(d,e){var w=A.d.cH(this.w,e)
this.m(new C.cQu())
this.EI()
$.aU.x1$.push(new C.cQv(w))},
Rs(d){return this.cp9(d)},
cp9(d){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$Rs=B.e(function(e,f){if(e===1){s.push(f)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i1().la(80,1400,A.eQ),$async$Rs)
case 7:q=f
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$Rs)
case 8:p=f
o=q.b.toLowerCase()
n=J.aju(o,".png")?"image/png":"image/jpeg"
r.m(new C.cQn(d,n,p))
r.EI()
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
return B.i($async$Rs,v)},
yw(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$yw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(F.hIi(r,t.gpF()),$async$yw)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.cQl(t,s))
t.EI()
case 1:return B.h(u,v)}})
return B.i($async$yw,v)},
cpr(d){var w,v=this,u=null,t=F.fPN(d.c)
if(t==null)return new B.bK(A.a5,u,u,B.hu(D.bVD,D.fTJ,new C.cQp(v,d),u),u)
w=x.p
return new B.D(A.cw,new B.an(A.a0,u,A.ad,A.t,B.a([B.bu(B.l(12),B.fX(t,A.z,u,u,A.cl,A.c_,!0,140,!1,u,1/0),A.aq),B.ao(u,B.A(B.a([v.b77(A.jN,new C.cQq(v,d)),A.bn,v.b77(A.cB,new C.cQr(v,d))],w),A.l,u,A.e,A.h,0,u,u),u,u,u,6,6,u)],w),u),u)},
b77(d,e){var w=null
return B.aG(!1,A.a3,!0,w,B.aM(!1,w,!0,new B.D(A.hz,B.W(d,A.c,w,w,w,18),w),A.cU,!0,w,w,w,w,w,w,w,w,w,w,w,e,w,w,w,w,w,w,w),A.f,A.b5,0,w,w,A.cU,w,w,A.ai)},
K1(){var w=0,v=B.j(x.H),u,t=this,s
var $async$K1=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.Bv(),$async$K1)
case 3:s=t.c
if(s==null){w=1
break}w=4
return B.b(F.hjU(s,t.gpF(),new C.cQt(t)),$async$K1)
case 4:case 1:return B.h(u,v)}})
return B.i($async$K1,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=x.p,j=B.eS(B.a([new B.D(A.pv,B.hu(D.c_s,D.fZW,m.gaB6(),B.fs(l,l,l,l,l,l,l,l,l,l,l,A.bL,l,l,l,l,l,l,l,l,l,l,l,l,l,l)),l),B.aI(l,l,l,l,A.atg,l,l,l,new C.cQw(m,d),l,l,l,l,"Save",l)],k),l,l,!0,!0,E.ZK,l,1,l,l,l,!1,l,!1,E.nx,l,l,l,!0,l,l,l,l,l,D.fUB,l,l,l,1,l,!0),i=AC.aXk(L.lJ,A.c,Ai.Yo,A.oQ,D.fVl,m.gcac()),h=B.l(18),g=m.gaz3(),f=B.a([new B.ab(0,A.G,A.w.j(0.4),A.i3,12)],x.V)
f=B.az(l,B.p(l,new B.a5(92,142.1818181818182,new B.dx(A.dC,A.z,A.f,F.aq5(m.gpF()),l),l),A.f,l,l,new B.o(l,l,l,l,f,l,A.n),l,l,l,l,l,l,l,l),A.y,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,g,l,l,l,l,l,l,!1,A.a4)
w=m.r
w===$&&B.c()
h=B.p(l,B.A(B.a([f,A.eu,B.E(B.x(B.a([D.h6H,A.ax,B.d(F.hif(w.a).b+" template \xb7 pick from 10, change colours, add your picture.",l,l,l,l,l,l,D.fHN,l,l,l),A.T,B.dh(E.asy,l,E.aYC,g,B.bo(A.d6,l,l,l,l,l,l,l,l,l,l,l))],k),A.E,l,A.e,A.h,0,A.p),1)],k),A.l,l,A.e,A.h,0,l,l),A.f,l,l,new B.o(E.ZK,l,l,h,l,l,A.n),l,l,l,l,A.bl,l,l,l)
g=m.d
g===$&&B.c()
g=B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),g,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(12),A.du),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Book title",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.p7,!0,A.a7,l,A.ao,l,l,l,l)
w=m.e
w===$&&B.c()
w=B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),w,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(12),A.du),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Subtitle (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a7,l,A.ao,l,l,l,l)
f=m.f
f===$&&B.c()
f=B.a([h,A.aB,g,A.P,w,A.P,B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),f,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(12),A.du),l,l,l,l,l,l,!0,l,l,l,l,l,l,A.c,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,"Author (optional)",!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a7,l,A.ao,l,l,l,l),A.aO],k)
for(h=m.w,v=0;v<h.length;v=t){g=h[v]
w=new B.aP(16,16)
u=new B.ay(L.lJ.j(0.18),1,A.r,-1)
t=v+1
s=B.d("Page "+t,l,l,l,l,l,l,D.fIl,l,l,l)
r=B.aI(l,l,l,l,D.bZ2,l,l,l,v===0?l:new C.cQx(m,v),l,l,l,l,"Move up",A.cg)
q=h.length
p=B.aI(l,l,l,l,D.c4O,l,l,l,v===q-1?l:new C.cQy(m,v),l,l,l,l,"Move down",A.cg)
q=q===1?l:new C.cQz(m,v)
o=new B.aP(12,12)
n=new B.aP(12,12)
f.push(B.p(l,B.x(B.a([new B.c7(A.aM,A.e,A.h,A.l,l,A.p,l,0,B.a([s,A.b3,r,p,B.aI(l,l,l,l,B.W(A.ej,A.pr,l,l,l,18),l,l,l,q,l,l,l,l,"Remove page",A.cg)],k),l),B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].a,l,l,l,l,l,2,new B.e8(l,l,l,"Title",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(o,o,o,o),A.du),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,1,l,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,A.cd,!0,A.a7,l,A.ao,l,l,l,l),A.am,m.cpr(h[v]),B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),h[v].b,l,l,l,l,l,2,new B.e8(l,l,l,"Write here\u2026 long pages flow onto the next paper page",l,l,l,l,l,l,l,l,l,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.c,l,l,l,l,l,l,l,new B.b6(4,new B.be(n,n,n,n),A.du),!0,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,l,5,l,!1,"\u2022",l,l,l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,l,!0,A.a7,l,A.ao,l,l,l,l)],k),A.l,l,A.e,A.h,0,A.p),A.f,l,l,new B.o(E.nx,l,new B.bG(u,u,u,u),new B.be(w,w,w,w),l,l,A.n),l,l,new C.a9R(g),A.el,D.bEA,l,l,l))}return B.oU(!0,B.c4(j,E.aki,B.cw(f,l,l,D.bF4,l,l,A.ah,!1),l,!1,!1,i,l),new C.cQA(m),x.C)}}
C.aA_.prototype={
B(d){var w,v,u=this,t=null,s=u.r,r=s?A.bX:E.nx,q=B.l(16),p=B.l(16),o=s?A.aA.j(0.08):A.c.j(0.04)
s=s?A.aA.j(0.16):A.d6.j(0.22)
w=B.l(12)
v=x.p
return new B.D(A.eO,B.aG(!1,A.a3,!0,t,B.aM(!1,q,!0,B.p(t,B.A(B.a([B.p(t,B.W(u.c,r,t,t,t,20),A.f,t,t,new B.o(s,t,t,w,t,t,A.n),t,40,t,t,t,t,t,40),A.bb,B.E(B.x(B.a([B.d(u.d,t,t,t,t,t,t,B.m(t,t,r,t,t,t,t,t,t,t,t,15,t,t,A.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bF,B.d(u.e,t,t,t,t,t,t,D.aX8,t,t,t)],v),A.E,t,A.e,A.h,0,A.p),1),B.W(A.eI,r.j(0.6),t,t,t,t)],v),A.l,t,A.e,A.h,0,t,t),A.f,t,t,new B.o(o,t,t,p,t,t,A.n),t,t,t,t,A.bl,t,t,t),t,!0,t,t,t,t,t,t,t,t,t,t,t,u.f,t,t,t,t,t,t,t),A.f,A.L,0,t,t,t,t,t,A.ai),t)}}
C.asq.prototype={
S(){return new C.aGd()}}
C.aGd.prototype={
Y(){this.a3()
this.a_Y()},
bz(d){this.bK(d)
if(d.c!=this.a.c)this.a2n()},
a2n(){var w=0,v=B.j(x.H),u=this,t
var $async$a2n=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.d
t=t==null?null:t.t()
w=2
return B.b(x.bq.b(t)?t:B.dN(t,x.H),$async$a2n)
case 2:u.d=null
if(u.c!=null)u.m(new C.en7(u))
w=3
return B.b(u.a_Y(),$async$a2n)
case 3:return B.h(null,v)}})
return B.i($async$a2n,v)},
a_Y(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$a_Y=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:o=r.a.c
n=A.a.i(o==null?"":o)
if(J.ad(n)===0){w=1
break}t=4
if(J.d5(n,"http://")||J.d5(n,"https://")||J.d5(n,"data:")){o=B.ZI(B.cD(n,0,null),new B.Qm(!0))
r.d=o}else{o=B.fo("unsupported video ref")
throw B.X(o)}w=7
return B.b(o.iX(0).dg(0,A.qC),$async$a_Y)
case 7:if(r.c==null){w=1
break}r.d.u1(!1)
r.m(new C.en5(r))
t=2
w=6
break
case 4:t=3
m=s.pop()
q=B.ac(m)
$.am.$1("[kiapo video] "+B.w(q))
if(r.c!=null)r.m(new C.en6(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a_Y,v)},
t(){var w=this.d
if(w!=null)w.t()
this.a2()},
cdw(){var w=this,v=w.d
if(v==null||!w.e)return
if(v.a.f){v.hi(0)
w.m(new C.en8(w))}else{v.qv(0)
w.m(new C.en9(w))}},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=p.a,m=n.c
if(A.a.i(m==null?"":m).length===0){if(!n.e)return A.bM
n=B.l(8*n.d)
m=B.a([D.jH.j(0.92),D.ML.j(0.95)],x.O)
w=B.K(A.c3.j(0.55),A.r,1)
v=p.a
u=v.d
t=B.W(A.qW,A.c3,o,o,o,28*u)
v=v.f?"Tap to add president video":"Video ya kiapo"
return new B.bM(new B.o(o,o,w,n,o,new B.a7(A.ay,A.aC,A.x,m,o,o),A.n),A.bk,B.as(B.x(B.a([t,new B.a5(o,6*u,o,o),B.d(v,o,o,o,o,o,o,B.m(o,o,A.c.j(0.85),o,o,o,o,o,o,o,o,11*p.a.d,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),A.K,o,o)],x.p),A.l,o,A.e,A.N,0,A.p),o,o,o),o)}if(p.f)return B.as(B.W(A.arI,A.aF,o,o,o,28*n.d),o,o,o)
if(!p.e||p.d==null)return D.beC
s=p.d
m=s.a.as
r=m.a
r=r>0?r:16
q=m.b
q=q>0?q:9
n=B.l(6*n.d)
m=B.a([new B.dx(A.c_,A.z,A.t,new B.a5(r,q,new B.AK(s,o),o),o)],x.p)
if(!p.r){w=8*p.a.d
v=A.w.j(0.45)
m.push(B.as(B.p(o,B.W(A.he,A.c,o,o,o,28*p.a.d),A.f,o,o,new B.o(v,o,o,o,o,o,A.a6),o,o,o,o,new B.Q(w,w,w,w),o,o,o),o,o,o))}return B.az(o,B.bu(n,new B.an(A.a0,o,A.b1,A.t,m,o),A.aq),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gcdv(),o,o,o,o,o,o,!1,A.a4)}}
C.wv.prototype={
a7(){return"NgmyHatiLayoutKind."+this.b}}
C.ij.prototype={}
C.Ld.prototype={}
C.aeM.prototype={
B(d){return B.pm(new C.e9v(this,B.P(d).ax.a===A.I,d),!0,0.72,0.9,0.5,!1,null)}}
C.ae9.prototype={
B(d){var w,v,u=null,t=B.P(d).ax.a===A.I,s=B.l(18),r=B.l(18),q=B.K(D.jH.j(t?0.35:0.4),A.r,1),p=t?D.Nr:A.c,o=x.V,n=B.a([new B.ab(0,A.G,A.w.j(t?0.3:0.08),A.cz,14)],o),m=B.l(10),l=B.K(A.c3.j(0.5),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dL,6)],o)
w=this.c
o=B.E(B.p(u,new B.fH(0.5625,C.ioj(w),u),A.aq,u,u,new B.o(u,u,l,m,o,u,A.n),u,u,u,D.aom,u,u,u,u),1)
m=D.jH.j(t?0.18:0.16)
l=B.d(w.b,u,u,u,u,u,u,B.m(u,u,t?A.c:D.jH,u,u,u,u,u,u,u,u,12.5,u,u,A.u,u,u,!0,u,0.1,u,u,u,u,u,u),u,u,u)
v=x.p
return B.aG(!1,A.a3,!0,u,B.aM(!1,s,!0,B.p(u,B.x(B.a([o,B.p(u,B.x(B.a([l,A.cR,B.d(w.c,u,2,A.a2,u,u,u,B.m(u,u,t?A.aF:D.bqy,u,u,u,u,u,u,u,u,9.5,u,u,u,u,1.32,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.h,0,A.p),A.f,u,u,new B.o(u,u,new B.bG(new B.ay(m,1,A.r,-1),A.a1,A.a1,A.a1),u,u,u,A.n),u,u,u,u,D.amB,u,u,u)],v),A.al,u,A.e,A.h,0,A.p),A.f,u,u,new B.o(p,u,q,r,n,u,A.n),u,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,u,this.d,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)}}
C.yf.prototype={
a7(){return"NgmyMarriageLayoutKind."+this.b}}
C.oc.prototype={}
C.bmh.prototype={
a06(d){var w=null
return new B.bK(A.a5,w,w,B.BW(A.z,B.p(w,w,A.f,w,w,new B.o(this.d.j(0.14),w,w,B.l(3),w,w,A.n),w,5,w,w,w,w,w,w),w,d),w)},
ce_(){return this.a06(1)},
azL(d){var w=null,v=B.l(8),u=B.K(A.iy,A.r,0.9)
return B.p(A.z,B.d(d,w,w,w,w,w,w,B.m(w,w,this.d,w,w,w,w,w,w,w,w,6.5,w,w,A.u,w,w,!0,w,0.3,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(D.ahT,w,u,v,w,w,A.n),w,13,w,w,w,w,w,w)},
B(d){var w=this,v=null,u=x.p,t=w.d
return B.x(B.a([B.A(B.a([B.p(v,v,A.f,v,v,new B.o(v,v,B.K(A.iy,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),B.dP(B.p(v,v,A.f,v,v,new B.o(v,v,B.K(A.iy,A.r,1.6),v,v,v,A.a6),v,22,v,v,v,v,v,22),new B.r(-8.36,0))],u),A.l,v,A.b8,A.h,0,v,v),A.ax,B.d("HATI YA NDOA",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,12,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),B.d("Hati ya Makubaliano ya Ndoa",v,v,v,v,v,v,B.m(v,v,t.j(0.7),v,v,v,v,v,v,v,v,7,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v),A.am,w.azL("TAARIFA ZA WANANDOA"),A.am,w.ce_(),A.cR,w.a06(0.9),A.cR,w.a06(0.7),A.P,w.azL("TAMKO LA MAKUBALIANO"),A.fD,w.a06(1),A.cR,w.a06(0.95),A.P,w.azL("MASHAHIDI"),A.b3,B.d("NGMY",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,8,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d(w.c.b,v,v,v,v,v,v,B.m(v,v,w.e,v,v,v,v,v,v,v,v,7,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],u),A.l,v,A.e,A.h,0,A.p)}}
C.aeP.prototype={
B(d){return B.pm(new C.erU(B.P(d).ax.a===A.I,d),!0,0.92,0.96,0.5,!1,null)}}
C.agv.prototype={
B(d){var w,v,u,t,s,r=null,q=B.P(d).ax.a===A.I,p=B.l(18),o=B.l(18),n=B.K(A.aE.j(q?0.35:0.4),A.r,1),m=q?D.bq4:A.c,l=x.V,k=B.a([new B.ab(0,A.G,A.w.j(q?0.3:0.08),A.cz,14)],l),j=B.l(10),i=B.K(A.aE.j(0.5),A.r,1)
l=B.a([new B.ab(0,A.G,A.w.j(0.14),A.dL,6)],l)
w=this.c
v=C.hiO(w.a)
if(v==null)v=A.d.gH(D.Tb)
u=B.b1(v.f)
t=B.b1(v.r)
s=x.p
l=B.E(B.p(r,new B.fH(0.5625,new B.an(A.a0,r,A.b1,A.t,B.a([B.bR(0,B.fX(C.hiN(v.d),A.z,r,r,A.cl,A.c_,!0,r,!1,r,r),0,0,0),new B.D(A.anf,new C.bmh(v,u,t,r),r)],s),r),r),A.aq,r,r,new B.o(r,r,i,j,l,r,A.n),r,r,r,D.aom,r,r,r,r),1)
j=A.aE.j(q?0.18:0.16)
i=B.d(w.b,r,r,r,r,r,r,B.m(r,r,q?A.c:T.Ns,r,r,r,r,r,r,r,r,12.5,r,r,A.u,r,r,!0,r,0.1,r,r,r,r,r,r),r,r,r)
return B.aG(!1,A.a3,!0,r,B.aM(!1,p,!0,B.p(r,B.x(B.a([l,B.p(r,B.x(B.a([i,A.cR,B.d(w.c,r,2,A.a2,r,r,r,B.m(r,r,q?A.aF:D.bif,r,r,r,r,r,r,r,r,9.5,r,r,r,r,1.32,!0,r,r,r,r,r,r,r,r),r,r,r)],s),A.E,r,A.e,A.h,0,A.p),A.f,r,r,new B.o(r,r,new B.bG(new B.ay(j,1,A.r,-1),A.a1,A.a1,A.a1),r,r,r,A.n),r,r,r,r,D.amB,r,r,r)],s),A.al,r,A.e,A.h,0,A.p),A.f,r,r,new B.o(m,r,n,o,k,r,A.n),r,r,r,r,r,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,r,this.d,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai)}}
C.jw.prototype={
a7(){return"NgmyMarriagePaperStyle."+this.b}}
C.a9j.prototype={}
C.Xc.prototype={
S(){var w=$.ax()
return new C.aGu(new B.cx(null,x.A),new B.au(A.aw,w),new B.au(A.aw,w),B.n2(0,null,null),A.d.gH(D.a6r),D.e0Z,B.a([],x.L),B.a([],x.gE))}}
C.aGu.prototype={
Y(){var w,v=this
v.a3()
v.w=v.a.c
v.z=new C.Aa(C.fTN(v.y),"NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
w=x.a
C.fSE().bG(new C.euR(v),w)
$.qL().jc(0,"assets/images/ngmy_logo.png").bG(new C.euS(v),w).eF(new C.euT())},
t(){var w=this,v=w.e,u=$.ax()
v.U$=u
v.R$=0
v=w.f
v.U$=u
v.R$=0
w.r.t()
w.a2()},
afT(d){var w=null,v=this.c
if(v!=null)v.L(x.q).f.T(B.b2(w,w,w,w,w,A.t,w,B.d(d,w,w,w,w,w,w,w,w,w,w),w,A.Y,w,w,w,w,w,w,w,w,w,w))},
JG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k
var $async$JG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i1().la(88,1600,A.eQ),$async$JG)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$JG)
case 8:p=e
m=r.c
if(m==null){w=1
break}w=9
return B.b(C.hIz(m,p),$async$JG)
case 9:o=e
if(o==null||r.c==null){w=1
break}m=r.c
m.toString
w=10
return B.b(F.bGK(new B.qg(o,1),m),$async$JG)
case 10:if(r.c!=null)r.m(new C.eut(r,o))
t=2
w=6
break
case 4:t=3
k=s.pop()
n=B.ac(k)
r.afT("Could not open that picture. "+B.w(n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$JG,v)},
XX(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$XX=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.w
if(q==null||t.as){w=1
break}s=t.c
s.toString
w=3
return B.b(C.hIz(s,q),$async$XX)
case 3:r=e
if(r==null||t.c==null){w=1
break}s=t.c
s.toString
w=4
return B.b(F.bGK(new B.qg(r,1),s),$async$XX)
case 4:if(t.c!=null)t.m(new C.eup(t,r))
case 1:return B.h(u,v)}})
return B.i($async$XX,v)},
afU(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$afU=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.as){w=1
break}q.m(new C.euA(q))
t=4
q.a.toString
p=C.isX()
l=q.Q
k=q.e.a
o=l==="sw"?A.a.i(A.a.i(k.a)+" Write the whole newspaper in Swahili (Kiswahili)."):k.a
k=q.y
w=7
return B.b(p.$4$paper$photo$request$template(null,q.w,o,k),$async$afU)
case 7:n=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.euB(q,n))
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
m=B.ac(i)
q.afT(B.w(m))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.euC(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$afU,v)},
a0b(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i,h,g
var $async$a0b=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=A.a.i(q.f.a.a)
h=!0
if(J.ad(i)!==0)if(!q.as){h=q.z
h=A.a.i(h.c).length===0&&h.r.length===0}if(h){w=1
break}q.m(new C.euv(q,i))
t=4
q.a.toString
p=C.isW()
h=q.z
m=q.y
l=q.w
k=B.C(q.ax,x.fz)
w=7
return B.b(p.$5$doc$history$instruction$photo$template(h,k,i,l,m),$async$a0b)
case 7:o=e
if(q.c==null){r=[1]
w=5
break}q.m(new C.euw(q,o))
r.push(6)
w=5
break
case 4:t=3
g=s.pop()
n=B.ac(g)
if(q.c!=null)q.m(new C.eux(q,n))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.euy(q))
$.aU.x1$.push(new C.euz(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0b,v)},
cef(d){this.m(new C.euu(this,d))},
EY(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$EY=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(!q.as){k=q.z
k=A.a.i(k.c).length===0&&k.r.length===0}else k=!0
if(k){w=1
break}q.m(new C.eur(q))
t=4
w=7
return B.b($.aU.gmy(),$async$EY)
case 7:w=8
return B.b(B.bN(A.n_,null,x.H),$async$EY)
case 8:k=$.aU.ap$.x.h(0,q.d)
p=k==null?null:k.gbf()
if(!(p instanceof B.qq))throw B.X("The page is not ready yet.")
w=9
return B.b(p.lW(1800/p.gZ(0).a),$async$EY)
case 9:o=e
w=10
return B.b(o.hj(A.hf),$async$EY)
case 10:n=e
if(n==null)throw B.X("Could not make the picture.")
w=11
return B.b(Aa.ahU(J.eR(A.dI.gaT(n)),"ngmy_news.png","image/png"),$async$EY)
case 11:m=e
q.afT(m?"Your newspaper picture is ready. Check your downloads.":"Downloading is not available here.")
r.push(6)
w=5
break
case 4:t=3
i=s.pop()
l=B.ac(i)
q.afT(B.w(l))
r.push(6)
w=5
break
case 3:r=[2]
case 5:t=2
if(q.c!=null)q.m(new C.eus(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$EY,v)},
B(a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=this,a2=null,a3=a1.z,a4=!(A.a.i(a3.c).length===0&&a3.r.length===0)
a3=B.aI(a2,a2,a2,a2,A.ls,a2,a2,a2,new C.euI(a5),a2,a2,a2,a2,a2,a2)
w=x.p
v=B.a([],w)
if(a1.ay.length!==0)v.push(B.aI(a2,a2,a2,a2,D.c0_,a2,a2,a2,new C.euJ(a1),a2,a2,a2,a2,"Undo the last change",a2))
v.push(B.aI(a2,a2,a2,a2,A.oP,a2,a2,a2,a4?a1.gb26():a2,a2,a2,a2,a2,"Download",a2))
a3=B.eS(v,a2,a2,!0,!0,A.Cn,a2,1,!0,a2,0,!1,a2,!1,a2,a2,a3,a2,!0,a2,a2,a2,a2,a2,D.ff7,a2,a2,a2,1,a2,!0)
v=x.V
u=B.a([new B.ab(0,A.G,A.w.j(0.6),A.eR,24)],v)
t=a1.z
s=a1.y
r=a1.w
u=B.p(a2,new B.fH(0.7142857142857143,new B.dx(A.dC,A.z,A.f,new B.eo(new C.b3F(t,s,r,a1.x,a2),a1.d),a2),a2),A.f,a2,a2,new B.o(a2,a2,a2,a2,u,a2,A.n),a2,a2,a2,a2,a2,a2,a2,a2)
s=B.d("1  YOUR PICTURE",a2,a2,a2,a2,a2,a2,Z.u_,a2,a2,a2)
t=a1.as?a2:a1.gcee()
t=B.a([B.E(B.dh(D.c0M,a2,B.d(r==null?"Add a picture":"Change the picture",a2,a2,a2,a2,a2,a2,A.cd,a2,a2,a2),t,B.bo(D.ut,a2,a2,a2,A.c,A.hg,a2,a2,new B.b9(B.l(14),Q.w4),a2,a2,a2)),1)],w)
r=a1.w
if(r!=null){r=B.bu(B.l(10),B.fX(r,A.z,a2,a2,A.cl,A.c_,!1,48,!1,a2,48),A.aq)
A.d.u(t,B.a([A.as,r,B.aI(a2,a2,a2,a2,D.bYj,a2,a2,a2,a1.as?a2:a1.gbNP(),a2,a2,a2,a2,"Crop the picture",a2)],w))}t=B.A(t,A.l,a2,A.e,A.h,0,a2,a2)
r=B.d("2  WHAT SHOULD IT BE ABOUT?  (optional)",a2,a2,a2,a2,a2,a2,Z.u_,a2,a2,a2)
q=B.aN(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.e,a2,a2,a2,a2,a2,2,a1.aVz("Leave it empty and the AI picks a story about NGMY"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,3,1,a2,!1,"\u2022",a2,a2,a2,a2,a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a7,a2,A.ao,a2,a2,a2,a2)
p=B.a([],w)
for(o=0;o<7;++o){n=D.dsO[o]
p.push(B.n8(a2,D.ut,B.d(n.a,a2,a2,a2,a2,a2,a2,A.pZ,a2,a2,a2),A.hs,new C.euK(a1,n),a2,a2,Q.w4,a2))}p=B.bZ(A.bI,p,A.br,a2,6,8)
m=a1.Q
m=B.bZ(A.bI,B.a([D.h5e,A.bb,B.jC(a2,a2,a2,D.fPQ,a2,new C.euL(a1),m==="en",a2,a2,a2,a2),A.ae,B.jC(a2,a2,a2,D.fPL,a2,new C.euM(a1),m==="sw",a2,a2,a2,a2)],w),A.vZ,a2,0,8)
l=B.d("3  PICK A DESIGN",a2,a2,a2,a2,a2,a2,Z.u_,a2,a2,a2)
k=B.a([],w)
for(j=x.dt,i=B.cX(D.a6r,0,B.dD(10,"count",x.S),j),h=i.$ti,i=new B.bQ(i,i.gJ(0),h.k("bQ<ak.E>")),h=h.k("ak.E");i.C();){g=i.d
k.push(a1.aU0(g==null?h.a(g):g))}k=B.cw(k,a2,a2,a2,a2,a2,A.aM,!1)
i=B.a([],w)
for(j=B.cX(D.a6r,10,a2,j),h=j.$ti,j=new B.bQ(j,j.gJ(0),h.k("bQ<ak.E>")),h=h.k("ak.E");j.C();){g=j.d
i.push(a1.aU0(g==null?h.a(g):g))}j=B.cw(i,a2,a2,a2,a2,a2,A.aM,!1)
i=a1.as?a2:a1.gceh()
h=B.l(18)
v=B.a([new B.ab(0,A.G,A.bE.j(0.4),A.J,18)],v)
v=B.a([u,A.aB,new B.D(A.cw,s,a2),t,A.aB,new B.D(A.cw,r,a2),q,A.P,p,A.T,m,A.aB,new B.D(A.cw,l,a2),new B.a5(a2,78,k,a2),A.P,new B.a5(a2,78,j,a2),A.aO,B.az(a2,B.p(A.z,B.A(B.a([D.c0G,A.ae,B.d(a4?"Write it again":"Write my newspaper",a2,a2,a2,a2,a2,a2,A.fE,a2,a2,a2)],w),A.l,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(a2,a2,a2,h,v,G.ve,A.n),a2,54,a2,a2,a2,a2,a2,a2),A.y,!1,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,i,a2,a2,a2,a2,a2,a2,!1,A.a4)],w)
if(a4){u=B.a([A.e3,B.A(B.a([D.dM4,A.as,D.bLr],w),A.l,a2,A.e,A.h,0,a2,a2),A.P],w)
for(t=a1.ax,s=t.length,o=0;o<t.length;t.length===s||(0,B.I)(t),++o){f=t[o]
e=f.a==="you"
r=e?A.a9:A.a5
q=e?A.b7.j(0.35):D.ut
p=new B.aP(16,16)
d=new B.ay(A.bw,1,A.r,-1)
u.push(new B.bK(r,a2,a2,B.p(a2,B.d(f.b,a2,a2,a2,a2,a2,a2,D.fFD,a2,a2,a2),A.f,a2,Ab.Y9,new B.o(q,a2,new B.bG(d,d,d,d),new B.be(p,p,p,p),a2,a2,A.n),a2,a2,a2,A.cw,A.hP,a2,a2,a2),a2))}u.push(A.am)
t=B.a([],w)
for(o=0;o<4;++o){a0=D.ddO[o]
t.push(B.n8(a2,D.ut,B.d(a0,a2,a2,a2,a2,a2,a2,A.KZ,a2,a2,a2),A.hs,new C.euN(a1,a0),a2,a2,Q.w4,a2))}u.push(B.bZ(A.bI,t,A.br,a2,6,8))
u.push(A.T)
t=B.E(B.aN(a2,A.Z,!1,a2,!0,A.t,a2,B.aO(),a1.f,a2,a2,a2,a2,a2,2,a1.aVz("Ask for a change, or ask a question\u2026"),A.y,!0,a2,!0,a2,!1,a2,A.ak,a2,a2,a2,a2,a2,a2,a2,a2,a2,4,1,a2,!1,"\u2022",a2,a2,a2,new C.euO(a1),a2,!1,a2,a2,!1,a2,!0,a2,A.ac,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,A.dk,!0,A.a7,a2,A.ao,a2,a2,a2,a2),1)
s=a1.as?a2:a1.gceg()
u.push(B.A(B.a([t,A.ae,B.IJ(A.zP,s,B.ne(a2,A.b7,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2,a2),a2)],w),A.l,a2,A.e,A.h,0,a2,a2))
u.push(A.aB)
t=a1.as?a2:a1.gb26()
u.push(B.dh(A.oP,a2,D.h0F,t,B.bo(A.dn,a2,a2,a2,a2,A.KF,a2,a2,new B.b9(B.l(16),A.a1),a2,a2,a2)))
A.d.u(v,u)}v=B.a([B.cw(v,a1.r,a2,A.an_,a2,a2,A.ah,!1)],w)
if(a1.as){u=A.w.j(0.55)
t=B.l(20)
s=B.K(E.kw.j(0.5),A.r,1)
v.push(B.bR(0,B.eb(B.as(B.p(a2,B.A(B.a([E.abk,A.eu,B.d(a1.at,a2,a2,a2,a2,a2,a2,A.jC,a2,a2,a2)],w),A.l,a2,A.e,A.N,0,a2,a2),A.f,a2,a2,new B.o(E.Cc,a2,s,t,a2,a2,A.n),a2,a2,a2,a2,D.bHw,a2,a2,a2),a2,a2,a2),u,!0),0,0,0))}return B.c4(a3,A.Cn,new B.an(A.a0,a2,A.ad,A.t,v,a2),a2,!1,!1,a2,a2)},
aVz(d){var w=null
return B.bz(w,new B.b6(4,B.l(14),A.a1),w,A.eV,w,w,w,w,!0,w,w,w,w,w,w,D.ut,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,A0.F1,d,w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
aU0(d){var w,v,u,t=null,s=d.a===this.y.a,r=B.l(12),q=B.b1(d.f),p=s?A.bE:A.bw
p=B.K(p,A.r,s?2.4:1)
w=B.a([B.p(t,t,A.f,B.b1(d.x),t,t,t,5,t,A.kX,t,t,t,t),A.fD],x.p)
for(v=d.w,u=0;u<4;++u)w.push(B.p(t,t,A.f,B.b1(v).j(0.5),t,t,t,2,t,D.bDx,t,t,t,t))
w.push(A.cR)
w.push(new B.D(A.j9,B.d(d.b,t,1,A.a2,t,t,t,B.m(t,t,B.b1(v),t,t,t,t,t,t,t,t,9,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),t))
return B.az(t,B.p(t,B.x(w,A.l,t,A.b8,A.h,0,A.p),A.f,t,t,new B.o(q,t,p,r,t,t,A.n),t,t,t,A.iS,t,t,t,72),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.euq(this,d),t,t,t,t,t,t,!1,A.a4)}}
C.Aa.prototype={
bfK(d,e,f,g,h,i,j,k,l,m){var w=this,v=g==null?w.b:g,u=i==null?w.a:i,t=h==null?w.c:h,s=m==null?w.d:m,r=e==null?w.e:e,q=f==null?w.f:f,p=d==null?w.r:d,o=j==null?w.w:j,n=l==null?w.x:l
return new C.Aa(u,v,t,s,r,q,p,o,n,k==null?w.y:k)},
cPc(d){var w=null
return this.bfK(w,w,w,w,w,d,w,w,w,w)},
aj(){var w=this
return B.J(["paper",w.a,"headline",w.c,"subhead",w.d,"byline",w.e,"caption",w.f,"body",w.r,"pullQuote",w.w,"sidebarTitle",w.x,"sidebarText",w.y,"category",w.b],x.N,x.z)},
aFc(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j="headline",i="category",h=new C.ckl(d),g=d.h(0,"body")
if(x.j.b(g)){w=B.a([],x.s)
for(v=J.aT(g);v.C();){u=v.gP(v)
if(A.a.i(B.w(u)).length!==0)w.push(A.a.i(B.w(u)))}t=w}else if(typeof g=="string"&&A.a.i(g).length!==0){w=A.a.fw(g,B.ag("\\n\\s*\\n",!0,!1,!1,!1))
w=new B.N(w,new C.ckj(),B.U(w).k("N<1,n>")).c_(0,new C.ckk())
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
return this.bfK(p,r,q,J.ad(l==null?"":l)===0?k:h.$1(i).toUpperCase(),v,w,o,m,n,s)},
gGb(d){return this.f}}
C.tQ.prototype={
a7(){return"NewsLayout."+this.b}}
C.Cb.prototype={
a7(){return"NewsFrame."+this.b}}
C.lE.prototype={}
C.b3F.prototype={
t0(d,e,f,g,h,i,j){var w=null
return B.m(w,w,f==null?B.b1(this.d.w):f,w,w,w,w,w,d,w,w,e,i,w,j,w,g,!0,w,h,w,w,w,w,w,w)},
b28(d,e,f,g){return this.t0(d,e,null,1.25,f,A.bq,g)},
QL(d,e,f,g,h){return this.t0(d,e,f,1.25,g,A.bq,h)},
azR(d,e,f,g,h){return this.t0(d,e,null,f,g,A.bq,h)},
azQ(d,e,f,g,h){return this.t0(d,e,f,g,0,A.bq,h)},
b2a(d,e,f,g,h){return this.t0(d,e,null,f,0,g,h)},
cel(d,e,f,g,h,i){return this.t0(d,e,f,g,0,h,i)},
azP(d,e,f,g){return this.t0(d,e,null,f,0,A.bq,g)},
afX(d,e,f){return this.t0(d,e,null,f,0,A.bq,A.d0)},
b29(d,e,f,g,h){return this.t0(d,e,f,g,0,h,A.d0)},
cek(d,e,f,g){return this.t0(d,e,null,f,0,g,A.d0)},
cej(d,e,f,g){return this.t0(d,e,f,g,0,A.bq,A.d0)},
afY(d,e,f,g,h,i){return this.t0(d,e,f,g,h,A.bq,i)},
b27(d,e,f,g,h,i,j,k,l){var w,v,u=null
for(w=i;w>j;){v=new B.iC(new B.er(d,u,u,A.cM,u,u,u,u,u,u,new B.G(!0,u,u,e,u,u,w,f,l,u,u,u,k,u,u,u,u,u,u,u,u,u,u,u,u,u)),A.a7,A.c1,new B.jn(1),u,u,h,u,A.c2,u,A.cx)
v.nB(g)
if(!v.b.a.c.gaGY())return w
w-=2}return j},
afV(d,e,f,g,h,i,j,k){return this.b27(d,e,f,g,h,i,j,k,A.bq)},
aC1(d,e,f){var w=null,v=d==null?B.b1(this.d.w):d,u=x.p,t=B.a([B.p(w,w,A.f,v,w,w,w,f,w,w,w,w,w,w)],u)
if(e)A.d.u(t,B.a([new B.a5(w,3,w,w),B.p(w,w,A.f,v,w,w,w,0.8,w,w,w,w,w,w)],u))
return B.x(t,A.l,w,A.e,A.h,0,A.p)},
aC0(d){return this.aC1(null,!1,d)},
aiV(d,e){return this.aC1(null,d,e)},
cwg(d,e){return this.aC1(d,!1,e)},
gb4l(){var w=A.a.i(this.c.a)
return w.length===0?"The NGMY Times":w},
gaYg(){var w=A.a.i(this.c.c)
if(w.length===0)w="Your headline appears here"
return this.d.CW?w.toUpperCase():w},
Pt(d,e,f,g,h,i){var w=this,v=null,u=w.d.Q,t=w.afV(w.gaYg(),u,A.O,d,g,h,i,1.02)
return B.d(w.gaYg(),v,g,A.a2,v,v,v,w.azQ(u,t,f,1.02,A.O),e,v,v)},
aYl(d){return this.Pt(d,A.K,null,2,78,30)},
ad5(d,e,f,g,h){return this.Pt(d,e,null,f,g,h)},
c26(d,e,f,g,h){return this.Pt(d,A.K,e,f,g,h)},
c25(d,e,f){return this.Pt(d,A.K,null,e,f,30)},
SK(d,e,f,g,h){var w,v=this,u=null,t=v.c.d,s=A.a.i(t)
if(s.length===0)return A.bM
w=v.d.as
return new B.D(A.jK,B.d(s,u,g,A.a2,u,u,u,v.b29(w,v.b27(t,w,A.d0,d,g,h,15,1.2,A.cJ),f,1.2,A.cJ),e,u,u),u)},
bah(d){return this.SK(d,A.K,null,3,24)},
aDw(d,e,f,g){return this.SK(d,e,null,f,g)},
cDX(d,e,f){return this.SK(d,A.K,e,3,f)},
bai(d,e){return this.SK(d,e,null,3,24)},
cDV(d,e){return this.SK(d,A.K,null,3,e)},
cDW(d,e,f){return this.SK(d,e,null,3,f)},
atk(d,e){var w=this,v=null,u=A.a.i(w.c.e),t=new B.D(A.f4,B.d(u.toUpperCase(),v,v,v,v,v,v,w.QL("Roboto",12,d==null?B.b1(w.d.x):d,1.4,A.H),v,v,v),v)
if(!e)return t
u=w.d.w
return B.A(B.a([B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1),t,B.E(B.p(v,v,A.f,B.b1(u),v,v,v,1.2,v,v,v,v,v,v),1)],x.p),A.l,v,A.e,A.h,0,v,v)},
On(){return this.atk(null,!0)},
atj(d){return this.atk(null,d)},
bJJ(d,e){var w=null,v=A.a.i(this.c.f)
if(v.length===0)return A.bM
return new B.D(A.ig,new B.a5(d,w,B.d(v,w,2,A.a2,w,w,w,this.cek(this.d.as,13.5,1.2,A.cJ),e,w,w),w),w)},
wc(d,a0){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Roboto",j=new B.V(Date.now(),0,!1),i=m.gb4l(),h=A.o.ar(j.bB(B.c_(B.bC(j),1,1,0,0,0,0,0)).a,864e8),g="VOL. "+C.igj(Math.max(1,B.bC(j)-2021))+"  \xb7  NO. "+(h+1+3000),f=m.b28(k,12,1.2,A.O),e=a0?0.62:1
h=m.d
w=h.y
v=h.z
if(w==="blackletter")u=m.afV(i,v,A.O,d,1,96*e,36,1)
else{t=w==="bar"?76:72
u=m.afV(i.toUpperCase(),v,A.O,d,1,t*e,30,1)}switch(w){case"bar":w=a0?6:10
t=B.b1(h.x)
h=h.ch?B.b1(h.f):A.c
s=x.p
return B.x(B.a([B.p(l,B.A(B.a([B.E(B.d(i.toUpperCase(),l,1,A.eS,l,l,l,m.afY(v,u*0.84,h,1,1,A.O),l,l,l),1)],s),A.l,l,A.e,A.h,0,l,l),A.f,t,l,l,l,l,l,l,new B.Q(18,w,18,w),l,l,l),A.P,B.A(B.a([B.d(C.bFY(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],s),A.l,l,A.j_,A.h,0,l,l),A.am,m.aiV(!0,3)],s),A.l,l,A.e,A.h,0,A.p)
case"split":h=h.x
w=x.p
return B.x(B.a([B.A(B.a([B.p(l,l,A.f,B.b1(h),l,l,l,u*0.8,l,l,l,l,l,14),A.eu,B.E(B.d(i,l,1,A.eS,l,l,l,m.azP(v,u*0.9,1,A.O),l,l,l),1)],w),A.l,l,A.e,A.h,0,l,l),A.T,B.A(B.a([B.d(C.bFY(j),l,l,l,l,l,l,m.QL(k,13,B.b1(h),0.6,A.O),l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l)],w),A.l,l,A.j_,A.h,0,l,l),A.P,m.cwg(B.b1(h),3)],w),A.l,l,A.e,A.h,0,A.p)
case"logo":r=a0?52:64
w=m.gb4l()
v=B.d("NGMY",l,l,l,l,l,l,m.azR(k,r,1,-1.5,A.u),l,l,l)
t=r*0.2
s=r*0.04
q=B.b1(h.x)
p=B.l(r*0.16)
o=h.ch&&h.a==="midnight"||h.a==="gold"?A.w:A.c
h=h.w
n=x.p
return B.x(B.a([B.A(B.a([v,A.ae,B.eI(A.z,-0.03,B.p(l,B.d("NEWS",l,l,l,l,l,l,m.t0(k,r*0.72,o,1.05,-0.5,A.cJ,A.u),l,l,l),A.f,l,l,new B.o(q,l,l,p,l,l,A.n),l,l,l,l,new B.Q(t,s,t,s),l,l,l),l),A.b3,new B.di(1,A.cm,B.d(w.toUpperCase(),l,2,A.a2,l,l,l,m.afY(k,12.5,B.b1(h).j(0.85),1.3,1.2,A.O),A.e4,l,l),l)],n),A.l,l,A.e,A.h,0,l,l),A.P,B.p(l,l,A.f,B.b1(h).j(0.25),l,l,l,1.4,l,l,l,l,l,l)],n),A.l,l,A.e,A.h,0,A.p)
case"blackletter":h=x.p
w=B.A(B.a([B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("PRICE: FREE \xb7 NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.j_,A.h,0,l,l)
t=m.aiV(!0,1.4)
s=a0?4:10
v=B.d(i,l,1,l,l,l,l,m.azP(v,u,1,A.O),A.K,l,l)
q=a0?4:8
return B.x(B.a([w,A.ax,t,new B.a5(l,s,l,l),v,new B.a5(l,q,l,l),m.aiV(!0,1.4),A.ax,B.d(C.bFY(j).toUpperCase(),l,l,l,l,l,l,f,A.K,l,l),A.ax,m.aC0(3)],h),A.l,l,A.e,A.h,0,A.p)
default:h=x.p
return B.x(B.a([B.d(i.toUpperCase(),l,1,l,l,l,l,m.azR(v,u,1,3,A.O),A.K,l,l),A.P,m.aiV(!0,1.2),A.ax,B.A(B.a([B.d(C.bFY(j).toUpperCase(),l,l,l,l,l,l,f,l,l,l),B.d(g,l,l,l,l,l,l,f,l,l,l),B.d("NGMY.ORG",l,l,l,l,l,l,f,l,l,l)],h),A.l,l,A.j_,A.h,0,l,l),A.ax,m.aC0(3)],h),A.l,l,A.e,A.h,0,A.p)}},
aei(d){return this.wc(d,!1)},
afW(d,e,f,g){var w=null,v=f*0.9,u=f*0.45,t=e==null?B.b1(this.d.x):e,s=B.l(f)
return B.p(w,B.d(d,w,w,w,w,w,w,this.afY("Roboto",f,g==null?A.c:g,1,0.4,A.u),w,w,w),A.f,w,w,new B.o(t,w,w,s,w,w,A.n),w,w,w,w,new B.Q(v,u,v,u),w,w,w)},
cei(d,e){return this.afW(d,null,e,null)},
b_x(d){var w=null,v=new B.V(Date.now(),0,!1),u=A.o.F(B.df(v),12)===0?12:A.o.F(B.df(v),12),t=B.b1(this.d.w).j(0.75),s=this.azQ("Roboto",15,t,1,A.cD),r=B.W(E.apZ,t,w,w,w,18),q=A.a.aA(A.oU[B.bL(v)-1],0,3),p=A.a.b0(A.o.v(B.fV(v)),2,"0"),o=B.df(v)>=12?"PM":"AM"
return B.A(B.a([r,A.ae,B.d(q+" "+B.bX(v)+", "+B.bC(v)+"  \xb7  "+u+":"+p+" "+o,w,w,w,w,w,w,s,w,w,w),B.p(w,w,A.f,t.j(0.4),w,w,w,20,w,A.hc,w,w,w,1),B.W(d,t,w,w,w,19),A.ae,B.d("NGMY News",w,w,w,w,w,w,s,w,w,w)],x.p),A.l,w,A.e,A.h,0,w,w)},
ayv(){return this.b_x(A.n5)},
b7k(d,e,f,g){var w=null,v=A.a.i(this.c.c)
if(v.length===0)v="Your headline appears here"
return B.d(v,w,e,A.a2,w,w,w,this.afY("Roboto",this.afV(v,"Roboto",A.H,d,e,f,g,1.08),w,1.08,-0.8,A.H),w,w,w)},
aC4(d,e,f){return this.b7k(d,e,f,30)},
aDz(d,e,f){var w=null,v=A.a.i(this.c.d)
if(v.length===0)return A.bM
return new B.D(A.t3,B.d(v,w,e,A.a2,w,w,w,this.cej("Roboto",f,B.b1(this.d.w).j(0.88),1.35),w,w,w),w)},
bam(d){return this.aDz(d,3,22)},
cE7(d,e){return this.aDz(d,e,22)},
ul(d,e){var w,v,u,t,s=null,r=this.e
if(r!=null){w=B.fX(r,A.z,s,s,A.cl,A.c_,!0,e,!1,s,d)
r=this.d
v=r.ay
if(v==="bw")w=new B.BF(D.bKl,w,s)
if(v==="sepia")w=new B.BF(D.bKk,w,s)}else{r=this.d
v=r.w
u=B.b1(v).j(0.1)
t=Math.min(d,e)
w=B.p(s,B.as(B.W(A.zj,B.b1(v).j(0.35),s,s,s,t*0.25),s,s,s),A.f,u,s,s,s,e,s,s,s,s,s,d)}v=B.a([w],x.p)
if(r.ax)v.push(new B.bM(new B.o(s,s,s,s,s,new B.bS(A.z,0.95,A.x,s,0,B.a([A.L,A.ZG.j(0.38)],x.O),s,s),A.n),A.bk,s,s))
return new B.a5(d,e,new B.an(A.a0,s,A.b1,A.t,v,s),s)},
r1(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d
switch(i.e.a){case 1:i=i.w
w=B.K(B.b1(i),A.r,3)
i=B.K(B.b1(i),A.r,1)
return B.p(j,B.p(j,k.ul(d-24,e-24),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,j,j,j,A.eC,j,j,j),A.f,j,j,new B.o(j,j,w,j,j,j,A.n),j,e,j,j,A.lQ,j,j,d)
case 2:w=B.a([new B.ab(0,A.G,A.w.j(0.35),D.et0,14)],x.V)
v=k.ul(d-28,e-28-58)
u=A.a.i(k.c.f)
if(u.length===0)u="NGMY"
return B.eI(A.z,-0.035,B.p(j,B.x(B.a([v,B.E(B.as(B.d(u,j,2,A.a2,j,j,j,k.b29(i.as,13.5,D.bjZ,1.1,A.cJ),A.K,j,j),j,j,j),1)],x.p),A.l,j,A.e,A.h,0,A.p),A.f,j,j,new B.o(D.bo0,j,j,j,w,j,A.n),j,e,j,j,D.bF_,j,j,d),j)
case 3:w=B.l(30)
i=B.K(B.b1(i.x),A.r,5)
return B.p(j,B.bu(B.l(25),k.ul(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,w,j,j,A.n),j,e,j,j,j,j,j,d)
case 4:t=Math.min(d,e)
w=B.K(B.b1(i.x),A.r,6)
i=B.b1(i.f)
v=t-10
return new B.a5(d,e,B.as(B.p(j,B.i_(k.ul(v,v),A.aq),A.f,j,j,new B.o(i,j,w,j,j,j,A.a6),j,t,j,j,A.lQ,j,j,t),j,j,j),j)
case 5:i=B.a([new B.ab(0,A.G,A.w.j(0.3),D.esH,10)],x.V)
return B.eI(A.z,0.025,new B.a5(d,e,new B.an(A.a0,j,A.ad,A.f,B.a([B.bR(0,B.p(j,k.ul(d-18,e-18),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,j,j,j,A.ta,j,j,j),0,0,0),B.ao(j,B.eI(A.z,-0.6,B.p(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,-18,j,-10,j),B.ao(-10,B.eI(A.z,-0.6,B.p(j,j,A.f,A.bL.j(0.85),j,j,j,26,j,j,j,j,j,90),j),j,j,j,-18,j,j)],x.p),j),j),j)
case 6:i=B.b1(i.x)
return new B.a5(d,e,B.b5(B.o0(k.ul(d,e),A.aq,D.hAB),new C.bfh(i,j),j,j,A.az),j)
case 7:i=x.p
w=B.a([k.ul(d-16,e-44)],i)
for(v=[!0,!1],u=v.length,s=d/34,r=0;r<u;++r){q=v[r]
p=q?-18:j
o=q?j:-18
n=B.a([],i)
for(m=0;m<Math.max(6,A.i.bg(s));++m){l=new B.aP(2,2)
n.push(B.p(j,j,A.f,j,j,new B.o(A.bO,j,j,new B.be(l,l,l,l),j,j,A.n),j,10,j,j,j,j,j,14))}w.push(new B.cK(0,p,0,o,j,j,new B.c7(A.aM,A.r0,A.h,A.l,j,A.p,j,0,n,j),j))}return B.p(j,new B.an(A.a0,j,A.b1,A.t,w,j),A.f,A.eo,j,j,j,e,j,j,D.bJB,j,j,d)
case 8:w=d/2
v=B.xC(A.fR,new B.aP(w,w))
i=B.K(B.b1(i.x),A.r,5)
w-=5
return B.p(j,B.bu(B.xC(A.iF,new B.aP(w,w)),k.ul(d-10,e-10),A.aq),A.f,j,j,new B.o(j,j,i,v,j,j,A.n),j,e,j,j,j,j,j,d)
case 9:i=B.a([new B.ab(0,A.G,A.w.j(0.35),A.fQ,22)],x.V)
return B.p(j,k.ul(d-20,e-20),A.f,j,j,new B.o(A.c,j,j,j,i,j,A.n),j,e,j,j,A.bU,j,j,d)
case 10:return new B.a5(d,e,B.o0(k.ul(d,e),A.aq,D.hIn),j)
case 0:i=B.K(B.b1(i.w),A.r,2.4)
return B.p(j,k.ul(d-14,e-14),A.f,j,j,new B.o(j,j,i,j,j,j,A.n),j,e,j,j,A.eC,j,j,d)}},
aRu(d,e){return this.d.e===D.TO?A.bM:this.bJJ(d,e)},
Xt(d){return this.aRu(d,A.K)},
gaCP(){var w=this.c
return A.a.i(w.y).length!==0||A.a.i(w.w).length!==0},
aCO(d,e){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=A.a.i(m.x)
if(l.length===0)l=A.a.i(m.w).length!==0?"":"NGMY NOTES"
w=A.a.i(m.y)
v=o.d
u=B.K(B.b1(v.w),A.r,1.6)
t=v.x
s=B.b1(t)
s=s.j(v.ch?0.14:0.07)
r=x.p
q=B.a([],r)
m=A.a.i(m.w)
if(m.length!==0&&w.length===0)q.push(B.E(B.as(B.d("\u201c"+m+"\u201d",n,7,A.a2,n,n,n,o.b2a(v.Q,19,1.15,A.cJ,A.O),A.K,n,n),n,n,n),1))
else{r=B.a([],r)
p=l.length!==0
if(p)r.push(B.d(l.toUpperCase(),n,1,A.a2,n,n,n,o.QL("Roboto",12.5,B.b1(t),1.2,A.u),n,n,n))
if(p)r.push(A.ax)
m=w.length===0?m:w
r.push(B.E(B.d(m,n,9,A.a2,n,n,n,o.afX(v.as,13,1.25),n,n,n),1))
A.d.u(q,r)}return B.p(n,B.jg(B.x(q,A.E,n,A.e,A.h,0,A.p),A.t,n),A.f,n,n,new B.o(s,n,u,n,n,n,A.n),n,e,n,n,A.bl,n,n,d)},
gcmF(){var w=this.c.r
return w.length===0?B.a([y.g],x.s):w},
aaM(d,e,f,g){return B.cm(new C.ckm(this,e,d,f,g))},
aaL(d){return this.aaM(d,22,!0,18)},
XG(d,e){return this.aaM(d,22,!0,e)},
aSA(d,e,f){return this.aaM(d,22,e,f)},
bLJ(d,e,f){return this.aaM(d,e,!0,f)},
bdn(d,e,f,g){return B.cm(new C.ckn(this,e,d,g,!0,f))},
clq(){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i="Roboto",h=k.d
switch(h.d.a){case 0:return B.x(B.a([k.aei(824),A.aB,k.aYl(824),k.bah(824),A.P,k.On(),A.af,B.as(k.r1(824,360),j,j,j),k.Xt(824),A.af,B.E(k.aaL(3),1)],x.p),A.al,j,A.e,A.h,0,A.p)
case 1:w=x.p
return B.x(B.a([k.aei(824),A.aO,new B.a5(j,350,B.A(B.a([new B.a5(440,j,B.x(B.a([k.ad5(440,A.bd,3,62,26),k.aDw(440,A.bd,2,20),A.b3,k.atk(B.b1(h.x),!1)],w),A.E,j,A.e,A.h,0,A.p),j),A.KG,B.x(B.a([k.r1(362,310),k.Xt(362)],w),A.l,j,A.e,A.h,0,A.p)],w),A.E,j,A.e,A.h,0,j,j),j),A.T,k.aC0(2),A.af,B.E(k.aaL(3),1)],w),A.al,j,A.e,A.h,0,A.p)
case 2:w=k.wc(824,!0)
v=B.b1(h.x)
u=h.ch
t=x.p
s=B.a([k.c26(788,u?B.b1(h.f):A.c,3,92,34)],t)
r=k.c
if(A.a.i(r.d).length!==0)s.push(k.cDX(788,u?B.b1(h.f):A.c,22))
v=B.p(j,B.x(s,A.l,j,A.e,A.h,0,A.p),A.f,v,j,j,j,j,j,j,A.CK,j,j,j)
u=B.a([B.as(k.r1(824,390),j,j,j)],t)
s=A.a.i(r.f)
if(s.length!==0&&h.e!==D.TO){h=A.w.j(0.65)
u.push(B.ao(0,B.p(j,B.d(s,j,2,A.a2,j,j,j,k.azQ(i,14,A.c,1.15,A.O),j,j,j),A.f,h,j,j,j,j,j,j,A.lP,j,j,j),j,j,0,0,j,j))}return B.x(B.a([w,A.af,v,A.af,new B.an(A.a0,j,A.ad,A.t,u,j),A.P,k.On(),A.T,B.E(k.XG(2,21),1)],t),A.al,j,A.e,A.h,0,A.p)
case 3:h=k.wc(824,!0)
w=k.r1(824,560)
v=B.a([A.L,A.w.j(0.85)],x.O)
u=x.p
return B.x(B.a([h,A.af,new B.an(A.b4,j,A.ad,A.t,B.a([w,B.ao(0,B.p(j,k.Pt(780,A.bd,A.c,3,74,30),A.f,j,j,new B.o(j,j,j,j,j,new B.a7(A.aZ,A.b4,A.x,v,j,j),A.n),j,j,j,j,D.bHP,j,j,j),j,j,0,0,j,j)],u),j),k.bai(824,A.bd),A.P,k.On(),A.T,B.E(k.aaL(3),1)],u),A.al,j,A.e,A.h,0,A.p)
case 4:h=x.p
return B.x(B.a([k.aei(824),A.aB,k.aYl(824),k.bah(824),A.P,k.On(),A.af,B.E(k.bdn(3,300,B.x(B.a([k.r1(300,300),k.Xt(300)],h),A.l,j,A.e,A.h,0,A.p),360),1)],h),A.al,j,A.e,A.h,0,A.p)
case 5:w=k.wc(824,!0)
v=x.p
u=B.x(B.a([k.ad5(440,A.bd,3,62,26),k.aDw(440,A.bd,2,20),A.b3,k.atj(!1)],v),A.E,j,A.e,A.h,0,A.p)
return B.x(B.a([w,A.bx,new B.a5(j,400,B.A(B.a([new B.a5(440,j,u,j),A.aUZ,new B.D(A.ig,k.r1(364,h.e===D.TO?400:330),j)],v),A.E,j,A.e,A.h,0,j,j),j),A.aB,B.E(k.XG(2,21),1)],v),A.al,j,A.e,A.h,0,A.p)
case 6:return B.x(B.a([k.aei(824),A.af,k.c25(824,2,70),k.cDV(824,21),A.P,k.On(),A.af,B.E(k.bdn(3,340,B.as(k.r1(340,340),j,j,j),350),1)],x.p),A.al,j,A.e,A.h,0,A.p)
case 7:w=k.wc(824,!0)
v=B.b1(h.x)
u=Date.now()
u=C.bFY(new B.V(u,0,!1))
t=x.p
v=B.a([B.p(j,B.d(u.toUpperCase(),j,j,j,j,j,j,k.QL(i,13,h.ch?B.b1(h.f):A.c,1.2,A.u),A.K,j,j),A.f,v,j,j,j,j,j,j,A.bl,j,j,j),A.aB],t)
u=A.a.i(k.c.w)
if(u.length!==0)v.push(B.d("\u201c"+u+"\u201d",j,j,j,j,j,j,k.b2a(h.Q,24,1.15,A.cJ,A.O),j,j,j))
v.push(A.b3)
if(k.gaCP())v.push(k.aCO(230,250))
return B.x(B.a([w,A.aB,B.E(B.A(B.a([new B.a5(230,j,B.x(v,A.al,j,A.e,A.h,0,A.p),j),B.p(j,j,A.f,B.b1(h.w),j,j,j,j,j,A.amz,j,j,j,1.2),new B.a5(570,j,B.x(B.a([k.ad5(570,A.bd,3,62,28),k.cDW(570,A.bd,20),A.P,k.atj(!1),A.P,B.as(k.r1(570,330),j,j,j),k.Xt(570),A.T,B.E(k.aSA(2,!1,17),1)],t),A.al,j,A.e,A.h,0,A.p),j)],t),A.E,j,A.e,A.h,0,j,j),1)],t),A.al,j,A.e,A.h,0,A.p)
case 8:w=k.wc(824,!0)
v=h.ch
u=v?B.b1(h.x):B.b1(h.w)
t=B.d("\u2605  SPECIAL REPORT  \u2605",j,j,j,j,j,j,k.QL(i,13,v?A.w:B.b1(h.x),3,A.u),j,j,j)
s=x.p
return B.x(B.a([w,A.af,B.p(j,B.x(B.a([t,A.am,k.Pt(788,A.bd,v?A.w:B.b1(h.f),2,72,30)],s),A.E,j,A.e,A.h,0,A.p),A.f,u,j,j,j,j,j,j,D.bG5,j,j,j),k.bai(824,A.bd),A.T,B.as(k.r1(824,310),j,j,j),k.Xt(824),A.P,k.On(),A.T,B.E(k.aaL(3),1)],s),A.al,j,A.e,A.h,0,A.p)
case 10:w=x.p
return B.x(B.a([k.wc(824,!0),A.aO,new B.an(A.a0,j,A.ad,A.t,B.a([k.r1(824,430),B.ao(18,k.cei(k.c.b,17),j,j,18,j,j,j)],w),j),A.bx,k.aC4(824,3,66),k.bam(824),A.af,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.ayv(),A.aB,B.E(k.XG(2,18),1)],w),A.al,j,A.e,A.h,0,A.p)
case 11:h=h.x
w=x.p
return B.x(B.a([k.wc(824,!0),A.bx,new B.a5(j,500,B.A(B.a([new B.a5(410,j,B.x(B.a([k.afW(k.c.b,B.b1(h).j(0.14),15,B.b1(h)),A.aO,k.b7k(410,4,58,28),k.aDz(410,6,20),A.b3],w),A.E,j,A.e,A.h,0,A.p),j),X.aV_,k.r1(390,500)],w),A.E,j,A.e,A.h,0,j,j),j),A.aB,k.ayv(),A.aO,B.E(k.XG(2,18),1)],w),A.al,j,A.e,A.h,0,A.p)
case 12:w=k.wc(824,!0)
v=k.r1(824,420)
u=B.hTv(-0.25)
t=B.b1(h.x)
s=B.a([new B.ab(0,A.G,A.w.j(0.4),A.J,10)],x.V)
r=x.p
return B.x(B.a([w,A.aO,new B.an(A.a0,j,A.ad,A.t,B.a([v,B.ao(22,B.fA(j,B.p(j,B.d("BREAKING NEWS",j,j,j,j,j,j,k.cel(i,30,A.c,1,A.cJ,A.u),j,j,j),A.f,j,j,new B.o(t,j,j,j,s,j,A.n),j,j,j,j,D.bI4,j,j,j),j,u,!0),j,j,0,j,j,j)],r),j),A.bx,k.aC4(824,3,62),k.bam(824),A.af,B.p(j,j,A.f,B.b1(h.w).j(0.25),j,j,j,1,j,j,j,j,j,j),A.af,k.b_x(A.lU),A.aB,B.E(k.XG(2,18),1)],r),A.al,j,A.e,A.h,0,A.p)
case 13:w=k.c
q=A.a.i(w.x)
if(!(q.length!==0)){v=A.a.i(w.w)
q=v.length!==0?v:"More from NGMY News"}v=k.wc(824,!0)
u=h.w
t=x.p
w=B.a([k.r1(824,380),B.ao(j,k.afW(w.b,B.b1(u).j(0.85),15,B.b1(h.f)),j,j,16,j,16,j)],t)
s=k.aC4(824,2,60)
r=k.cE7(824,2)
p=k.ayv()
o=B.E(k.aSA(2,!1,18),1)
n=B.K(B.b1(u).j(0.18),A.r,1)
m=B.l(18)
h=h.x
l=B.b1(h).j(0.05)
return B.x(B.a([v,A.aO,new B.an(A.a0,j,A.ad,A.t,w,j),A.aO,s,r,A.T,p,A.aB,o,A.af,B.p(j,B.A(B.a([B.bu(B.l(14),k.ul(150,104),A.aq),A.p5,B.E(B.x(B.a([k.afW("RELATED",B.b1(h).j(0.14),12,B.b1(h)),A.P,B.d(q,j,2,A.a2,j,j,j,k.azP(i,19,1.15,A.H),j,j,j)],t),A.E,j,A.e,A.N,0,A.p),1),B.W(A.eI,B.b1(u).j(0.6),j,j,j,30)],t),A.l,j,A.e,A.h,0,j,j),A.f,j,j,new B.o(l,j,n,m,j,j,A.n),j,j,j,j,A.bl,j,j,j)],t),A.al,j,A.e,A.h,0,A.p)
case 9:return B.x(B.a([k.wc(824,!0),A.bx,k.ad5(824,A.bd,3,62,30),k.aDw(824,A.bd,2,22),A.T,k.atj(!1),A.T,B.as(k.r1(824,330),j,j,j),k.aRu(824,A.bd),A.aO,B.E(k.bLJ(2,40,21),1)],x.p),A.al,j,A.e,A.h,0,A.p)}},
B(d){var w,v,u,t=this,s=null,r="Roboto",q=t.d,p=q.f,o=x.p,n=B.a([B.bR(0,new B.bM(new B.o(s,s,s,s,s,new B.a7(A.ay,A.aC,A.x,B.a([B.b1(p),B.b1(q.r)],x.O),s,s),A.n),A.bk,s,s),0,0,0)],o)
if(q.ax)n.push(B.bR(0,B.b5(s,s,s,new C.bbL(B.b1(q.w),s),A.az),0,0,0))
w=q.w
n.push(new B.D(D.bIA,B.x(B.a([B.E(t.clq(),1),A.P,B.p(s,s,A.f,B.b1(w),s,s,s,1.4,s,s,s,s,s,s),A.fD,B.A(B.a([B.d("PRINTED WITH NGMY NEWS",s,s,s,s,s,s,t.b28(r,11,1.4,A.H),s,s,s),B.d("CREATED BY NGMY.ORG",s,s,s,s,s,s,t.QL(r,11,B.b1(q.x),1.4,A.u),s,s,s)],o),A.l,s,A.j_,A.h,0,s,s)],o),A.al,s,A.e,A.h,0,A.p),s))
v=B.b1(w)
n.push(B.bR(0,new B.dt(!0,B.b5(s,s,s,new C.buQ(v.j(q.ch?0.07:0.06),s),A.az),s),0,0,0))
p=B.b1(p).j(0.75)
v=B.K(B.b1(w).j(0.5),A.r,1.2)
u=B.l(40)
o=B.a([],o)
q=t.f
if(q!=null)o.push(B.i_(B.fX(q,A.z,s,s,A.cl,A.c_,!1,30,!1,s,30),A.aq))
else o.push(B.W(A.n5,B.b1(w),s,s,s,28))
o.push(A.ae)
o.push(B.d("NGMY.ORG",s,s,s,s,s,s,t.azR(r,15,1,1.6,A.u),s,s,s))
n.push(B.ao(52,new B.dt(!0,B.d3(B.p(s,B.A(o,A.l,s,A.e,A.N,0,s,s),A.f,s,s,new B.o(p,s,v,u,s,s,A.n),s,s,s,s,D.bJJ,s,s,s),0.6),s),s,s,s,40,s,s))
return new B.a5(900,1260,B.jg(new B.an(A.a0,s,A.ad,A.t,n,s),A.t,s),s)}}
C.bfi.prototype={
jt(d){return C.hwO(d)},
kb(d){return!1}}
C.bfh.prototype={
a4(d,e){var w,v=C.hwO(e)
$.S()
w=B.L()
w.r=this.b.gp(0)
w.b=A.aa
w.c=6
return d.af(v,w)},
aE(d){return!d.b.A(0,this.b)}}
C.bxm.prototype={
jt(d){var w,v,u,t,s,r,q,p,o=new B.e0()
o.cU(3)
w=$.S()
v=B.a([],x.v)
u=new B.aH(w.r,A.aj,null,null,v)
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
kb(d){return!1}}
C.bbL.prototype={
a4(d,e){var w,v,u,t,s,r,q,p=null,o=new B.e0()
o.cU(7)
$.S()
w=B.L()
for(v=this.b,u=e.a,t=e.b,s=0;s<700;++s){w.r=v.j(0.03+o.ai()*0.07).gp(0)
d.O(new B.r(o.ai()*u,o.ai()*t),0.4+o.ai()*1.4,w)}for(v=x.O,s=0;s<5;++s){r=new B.r(o.ai()*u,o.ai()*t)
q=50+o.ai()*90
w.san(new B.bS(A.z,0.5,A.x,p,0,B.a([A.Z2.j(0.13),A.L],v),p,p).aD(0,B.bV(r,q)))
d.O(r,q,w)}w.san(p)},
aE(d){return!1}}
C.buQ.prototype={
a4(d,e){var w,v,u=null,t=e.a,s=B.fE(u,A.cx,u,u,u,B.cS(u,u,u,u,u,u,u,u,u,B.m(u,u,this.b,u,u,u,u,u,"Roboto",u,u,t*0.34,u,u,A.u,u,u,!0,u,10,u,u,u,u,u,u),"NGMY"),A.a7,A.c1,u,A.dJ,A.c2)
s.eo()
w=d.c
J.br(w.save())
w.translate(t/2,e.b*0.52)
d.jq(0,-0.5)
t=s.b
v=t.c
t=t.a.c
s.a4(d,new B.r(-v/2,-t.gba(t)/2))
w.restore()},
aE(d){return!d.b.A(0,this.b)}}
C.Xd.prototype={
S(){return new C.aGx()}}
C.aGx.prototype={
Y(){var w=this
w.a3()
B.fJZ(w.a.c,null).bG(new C.evD(),x.g7).bG(new C.evE(w),x.a)
w.a.toString},
gaQg(){var w=D.aAG[this.e].b
if(w==null){w=this.d
w=w==null?1:w.c/w.d}return w},
gazS(){var w,v,u,t,s,r=this,q=r.d,p=q.c,o=q.d
q=r.gaQg()
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
q=A.i.D(v*p,q,p-q)-q
w=A.i.D(u*o,w,o-w)-w
return new B.a4(q,w,q+s,w+t)},
a0d(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f
var $async$a0d=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:g=r.d
if(g==null||r.y){w=1
break}r.m(new C.evq(r))
t=4
q=r.gazS()
j=q
p=Math.min(1600,j.c-j.a)
j=q
i=q
o=p*(j.d-j.b)/(i.c-i.a)
$.S()
n=new B.q6(new B.pH())
m=B.zr(n,null)
i=B.L()
i.z=A.h2
m.nt(g,q,new B.a4(0,0,0+p,0+o),i)
w=7
return B.b(n.o8().xI(J.hlY(p),J.hlY(o)),$async$a0d)
case 7:l=e
w=8
return B.b(l.hj(A.hf),$async$a0d)
case 8:k=e
j=r.c
if(j!=null){j=B.a6(j,!1)
i=k
i.toString
j.N(J.eR(J.w0(i)))}t=2
w=6
break
case 4:t=3
f=s.pop()
if(r.c!=null){r.m(new C.evr(r))
r.c.L(x.q).f.T(D.foQ)}w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$a0d,v)},
B(d){var w,v,u,t=this,s=null,r=t.d,q=B.aI(s,s,s,s,A.ls,s,s,s,new C.evx(d),s,s,s,s,s,s),p=x.p
q=B.eS(B.a([B.bO(!1,D.h3h,s,s,!0,s,s,s,t.y||r==null?s:t.gcem(),s,s)],p),s,s,!0,!0,A.Cn,s,1,!0,s,0,!1,s,!1,s,s,q,s,!0,s,s,s,s,s,D.h7j,s,s,s,1,s,!0)
if(r==null)p=A.m5
else{w=B.E(new B.D(A.bS,B.as(new B.fH(t.gaQg(),B.cm(new C.evy(t,r)),s),s,s,s),s),1)
v=B.a([],p)
for(u=0;u<6;++u)v.push(new B.D(A.iS,B.jC(s,s,s,B.d(D.aAG[u].a,s,s,s,s,s,s,A.ac_,s,s,s),s,new C.evz(t,u),t.e===u,s,s,s,s),s))
p=B.x(B.a([w,B.p(s,B.bm(!0,B.x(B.a([new B.a5(s,40,B.cw(v,s,s,s,s,s,A.aM,!1),s),B.A(B.a([D.c1u,B.E(B.l3(s,s,s,6,1,new C.evA(t),t.f),1),D.c13],p),A.l,s,A.e,A.h,0,s,s),D.h0y,A.am,B.bO(!1,D.h0g,s,s,!0,s,s,s,new C.evB(t,d),s,s)],p),A.l,s,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!1),A.f,D.ZV,s,s,s,s,s,s,D.bFs,s,s,s)],p),A.l,s,A.e,A.h,0,A.p)}return B.c4(q,A.Cn,p,s,!1,!1,s,s)}}
C.beQ.prototype={
a4(d,e){var w
$.S()
w=B.L()
w.z=A.cl
return d.nt(this.b,this.c,new B.a4(0,0,0+e.a,0+e.b),w)},
aE(d){return!d.c.A(0,this.c)||d.b!==this.b}}
C.a1l.prototype={
S(){var w=$.ax(),v=x.A
return new C.aHY(new B.au(A.aw,w),new B.au(new B.ba("NGMY",A.b6,A.aP),w),new B.cx(null,v),new B.cx(null,v),A.d.gH(D.a74),"quote"+1000*Date.now(),B.a([],x.t),B.aR(x.S),A.K)}}
C.p2.prototype={}
C.aHY.prototype={
gaYt(){var w,v,u=this
if(u.p1)w=new B.rF(1,u.p2,0.9,u.p3).je().l()&16777215
else{v=u.k4
w=v==null?null:v&16777215}if(w==null)return 0
return(A.o.D(A.i.V(u.ok*255),0,255)<<24|w)>>>0},
Y(){var w=this
w.a3()
w.a.toString
w.p4=null
$.aU.x1$.push(new C.f4W(w))},
t(){var w=this.d,v=$.ax()
w.U$=v
w.R$=0
w=this.e
w.U$=v
w.R$=0
this.a2()},
ZK(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m
var $async$ZK=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b($.qL().jc(0,"assets/images/ngmy_logo.png"),$async$ZK)
case 7:q=e
p=J.eR(J.w0(q))
o=r.c
w=o!=null?8:9
break
case 8:w=10
return B.b(F.bGK(new B.qg(p,1),o),$async$ZK)
case 10:case 9:if(r.c==null){w=1
break}r.m(new C.f3O(r,p))
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
return B.i($async$ZK,v)},
QO(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$QO=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i1().la(92,1800,A.eQ),$async$QO)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$QO)
case 8:p=e
n=r.c
if(n==null){w=1
break}w=9
return B.b(F.bGK(new B.qg(p,1),n),$async$QO)
case 9:if(r.c==null){w=1
break}r.m(new C.f4b(r,p))
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
return B.i($async$QO,v)},
b6H(){var w=this
w.RG=w.R8=0
w.ry=w.rx=1
w.xr=w.x2=w.x1=w.to=0
w.y1=!1
w.aO=w.aR=w.aK=w.aH=w.a0=w.bd=w.bh=w.y2=0
w.b1=null
w.aZ=0.25
w.bi=null
w.bH=0.5
w.aY=1
w.c5=w.bx=w.bn=0
w.cT=w.cg=!1},
b_g(d,e,f,g,h,i,j,a0,a1){var w,v,u,t,s,r,q,p,o,n=1-g,m=n*0.2126,l=n*0.7152,k=n*0.0722
n=x.x
w=C.bDk(B.a([m+g,l,k,0,0,m,l+g,k,0,0,m,l,k+g,0,0,0,0,0,1,0],n),D.dvZ)
if(Math.abs(j)>0.5){v=j*3.141592653589793/180
u=Math.cos(v)
t=Math.sin(v)
s=0.715-u*0.715
r=t*0.715
q=0.072-u*0.072
p=0.213-u*0.213
w=C.bDk(B.a([0.213+u*0.787-t*0.213,s-r,q+t*0.928,0,0,p+t*0.143,0.715+u*0.285+t*0.14,q-t*0.283,0,0,p-t*0.787,s+r,0.072+u*0.928+t*0.072,0,0,0,0,0,1,0],n),w)}o=128*(1-f)+d*255
n=h*25
w=C.bDk(C.hgu(Math.pow(2,e)*f,o+n,o-i*25,o-n+i*12),w)
if(a0>0){n=a0*255*0.25
w=C.bDk(C.hgu(1-a0*0.5,n,n,n),w)}return a1?C.bDk(C.hgu(-1,255,255,255),w):w},
aDF(){var w,v,u=B.ag("\\S+",!0,!1,!1,!1).kZ(0,this.d.a.a),t=B.C(u,B.a3(u).k("M.E"))
for(u=this.db;w=u.length,v=t.length,w<v;)u.push(0)
if(w>v)A.d.xG(u,v,w)
this.dx.pG(new C.f4l(t),!0)
return t},
b9g(a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=e.w
e.aDF()
w=C.iqA(e.d.a.a,e.db)
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
return C.imX(d,k,v,a0,j,e.gaYt(),e.ax,i,u,q,p,r,t,s,w,g,h,f,n,l,o,m)},
cBL(){return this.b9g(null)},
DU(){var w=0,v=B.j(x.dd),u,t=this,s,r,q
var $async$DU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.p4==null){u=null
w=1
break}w=3
return B.b($.aU.gmy(),$async$DU)
case 3:w=4
return B.b(B.bN(A.eU,null,x.H),$async$DU)
case 4:w=5
return B.b($.aU.gmy(),$async$DU)
case 5:s=$.aU.ap$.x.h(0,t.r)
r=s==null?null:s.gbf()
if(!(r instanceof B.qq)){u=null
w=1
break}w=7
return B.b(r.lW(1080/r.gZ(0).a),$async$DU)
case 7:w=6
return B.b(e.hj(A.hf),$async$DU)
case 6:q=e
u=q==null?null:J.eR(A.dI.gaT(q))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$DU,v)},
abG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j
var $async$abG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f3x(q))
t=4
w=7
return B.b(q.DU(),$async$abG)
case 7:p=e
o=p==null?null:"data:image/png;base64,"+A.cS.gcs().aN(p)
n=C.Cq(null,null,null,null,D.oZ,6,!1,null,null,null,null,null,C.cC(),null,!1,null,"NGMY Quote",null,null,B.a([q.b9g(o)],x.g),"office_blue",null,!1,null)
l=q.c
if(l!=null)B.a6(l,!1).N(n)
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
if(q.c!=null)q.m(new C.f3y(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$abG,v)},
Bc(){var w=0,v=B.j(x.H),u,t=2,s=[],r=[],q=this,p,o,n,m,l,k,j,i
var $async$Bc=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:if(q.Q){w=1
break}q.m(new C.f3v(q))
t=4
w=7
return B.b($.aU.gmy(),$async$Bc)
case 7:w=8
return B.b(B.bN(A.n0,null,x.H),$async$Bc)
case 8:w=9
return B.b($.aU.gmy(),$async$Bc)
case 9:k=$.aU.ap$.x.h(0,q.f)
p=k==null?null:k.gbf()
if(!(p instanceof B.qq))throw B.X("The picture is not ready yet.")
w=10
return B.b(p.lW(1080/p.gZ(0).a),$async$Bc)
case 10:o=e
w=11
return B.b(o.hj(A.hf),$async$Bc)
case 11:n=e
if(n==null)throw B.X("Could not make the picture.")
w=12
return B.b(Aa.ahU(J.eR(A.dI.gaT(n)),"ngmy_quote.png","image/png"),$async$Bc)
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
if(q.c!=null)q.m(new C.f3w(q))
w=r.pop()
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$Bc,v)},
coA(){var w=this.p4
w.toString
return B.cm(new C.f44(this,w))},
b2h(d,e){var w=null
return B.bz(w,w,w,w,w,D.fzM,w,w,!0,new B.b6(4,B.l(16),Q.w4),w,w,w,w,w,D.ut,!0,w,w,w,w,new B.b6(4,B.l(16),D.b6M),w,w,w,w,w,w,w,w,Ac.Fa,e,w,w,w,w,w,w,w,D.fFs,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
yG(d,e){var w=null,v=x.p,u=B.a([],v)
A.d.u(u,B.a([B.W(e,A.b7,w,w,w,15),A.bn],v))
u.push(B.d(d,w,w,w,w,w,w,D.aXN,w,w,w))
return new B.D(H.amp,B.A(u,A.l,w,A.e,A.h,0,w,w),w)},
b2g(d,e){var w=null,v=B.l(18),u=B.K(A.bw,A.r,1)
return B.p(w,B.aG(!1,A.a3,!0,w,d,A.f,w,0,w,w,w,w,w,A.io),A.f,w,w,new B.o(D.ut,w,u,v,w,w,A.n),w,w,w,w,e,w,w,1/0)},
wk(d){return this.b2g(d,A.bH)},
oF(d,e,f,g){var w,v,u,t,s,r=null,q=g!=null,p=f?G.ve:r
if(f)w=r
else w=A.c.j(q?0.07:0.03)
v=B.l(30)
u=B.K(f?A.L:A.bw,A.r,1)
t=x.p
s=B.a([],t)
if(e!=null)A.d.u(s,B.a([B.W(e,q?A.c:A.k0,r,r,r,16),A.bn],t))
s.push(B.d(d,r,r,r,r,r,r,B.m(r,r,q?A.c:A.k0,r,r,r,r,r,r,r,r,12.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
return B.az(r,B.cT(r,B.A(s,A.l,r,A.e,A.N,0,r,r),r,r,A.b0,new B.o(w,r,u,v,r,p,A.n),A.ha,r,r,r,r,A.H5,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
ahR(d,e,f){return this.oF(d,null,e,f)},
azW(d,e,f,g,h,i,j){var w=null,v=B.l(12),u=g?A.b7.j(0.28):A.c.j(0.05),t=g?A.ey:A.bw,s=x.p
v=B.a([B.cT(w,d,w,w,A.b0,new B.o(u,w,B.K(t,A.r,g?2:1),v,w,w,A.n),A.ha,w,e,w,w,new B.Q(i,i,i,i),w,w,j)],s)
u=g?A.c:A.aF
A.d.u(v,B.a([A.ax,B.d(f,w,1,A.a2,w,w,w,B.m(w,w,u,w,w,w,w,w,w,w,w,j<54?8.5:10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],s))
return B.az(w,new B.a5(j,w,B.x(v,A.l,w,A.e,A.N,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,h,w,w,w,w,w,w,!1,A.a4)},
b2k(d,e,f,g,h,i){return this.azW(d,e,f,g,h,5,i)},
kC(d,e,f,g,h,i,j){var w,v,u=null,t=x.p,s=B.a([B.E(B.d(d,u,u,u,u,u,u,E.aWz,u,u,u),1)],t)
if(i!=null&&Math.abs(e-i)>0.001)s.push(B.az(u,D.exk,A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.f4h(this,h,i),u,u,u,u,u,u,!1,A.a4))
w=A.c.j(0.08)
v=B.l(20)
s.push(B.p(u,B.d(j,u,u,u,u,u,u,A.abV,u,u,u),A.f,u,u,new B.o(w,u,u,v,u,u,A.n),u,u,u,u,A.a1D,u,u,u))
s=B.A(s,A.l,u,A.e,A.h,0,u,u)
w=this.c
w.toString
w=B.abt(w).cQy(A.b7,A.bw,A.b7.j(0.2),A.c,D.fen,4)
return new B.D(A.yO,B.x(B.a([s,B.Z5(B.l3(u,u,u,g,f,new C.f4i(this,h),A.i.D(e,f,g)),w)],t),A.l,u,A.e,A.h,0,A.p),u)},
ajU(d,e,f,g,h,i){return this.kC(d,e,f,g,h,null,i)},
aki(d,e,f){var w,v,u,t,s,r,q,p,o=null,n=B.a([],x.p)
for(w=f.length,v=0;v<f.length;f.length===w||(0,B.I)(f),++v){u=f[v]
t=u==null
s=t?A.dq:B.b1(u)
r=d==u
q=r?A.c:A.aT
p=new B.ay(q,r?3:1,A.r,-1)
t=t?D.bVe:o
n.push(B.az(o,B.p(o,t,A.f,o,o,new B.o(s,o,new B.bG(p,p,p,p),o,o,o,A.a6),o,34,o,o,o,o,o,34),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.f4k(this,e,u),o,o,o,o,o,o,!1,A.a4))}return B.bZ(A.bI,n,A.br,o,10,10)},
bPU(){var w,v,u,t,s,r,q,p,o=this,n=null
if(o.x==="All")w=D.a74
else{v=x.bt
w=B.C(new B.Y(D.a74,new C.f3n(o),v),v.k("M.E"))}v=B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.d,n,n,n,n,n,2,o.b2h("Your quote",o.w.y),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,280,n,4,2,n,!1,"\u2022",n,new C.f3o(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.acg,!0,A.a7,n,A.ao,n,n,n,n)
u=B.aN(n,A.Z,!1,n,!0,A.t,n,B.aO(),o.e,n,n,n,n,n,2,o.b2h("Who said it","NGMY"),A.y,!0,n,!0,n,!1,n,A.ak,n,n,n,n,n,n,n,n,n,1,n,n,!1,"\u2022",n,new C.f3p(o),n,n,n,!1,n,n,!1,n,!0,n,A.ac,n,n,n,n,n,n,n,n,n,n,n,A.dk,!0,A.a7,n,A.ao,n,n,n,n)
t=o.yG("DESIGNS",A.uW)
s=x.p
r=B.a([],s)
for(q=0;q<6;++q){p=D.d4q[q]
r.push(new B.D(A.iS,o.ahR(p,o.x===p,new C.f3q(o,p)),n))}return B.x(B.a([v,A.T,u,t,B.c9(B.A(r,A.l,n,A.e,A.h,0,n,n),A.t,n,A.y,n,n,n,n,n,A.aM),A.af,new B.a5(n,118,B.hT(n,new C.f3r(o,w),w.length,n,n,A.aM,new C.f3s(),!1),n),A.P,o.b2g(B.x(B.a([B.iY(A.b7,n,n,A.ag,!0,new C.f3t(o),n,D.fSg,n,D.fOr,o.k3),B.iY(A.b7,n,n,A.ag,!0,new C.f3u(o),n,n,n,D.fLx,o.k2)],s),A.l,n,A.e,A.h,0,A.p),A.amZ)],s),A.E,n,A.e,A.h,0,A.p)},
cKK(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=a5.aDF()
if(a7.length===0)return a5.wk(B.d("Type your quote on the Design tab. Every word will show up here so you can make it bigger, normal or smaller.",a6,a6,a6,a6,a6,a6,D.L5,a6,a6,a6))
w=a5.d.a.a
v=B.a([],x.t)
for(u=a7.length,t=0,s=0;s<a7.length;a7.length===u||(0,B.I)(a7),++s){r=a7[s]
v.push(t)
q=B.ag('[.!?]["\u201d\u2019)]*$',!0,!1,!1,!1)
p=r.b
o=p.index
p=A.a.aA(w,o,o+p[0].length)
if(q.b.test(p))++t}n=v.length===0?0:A.d.gal(v)+1
u=a5.dx
m=B.C(u,B.a3(u).k("ci.E"))
A.d.ff(m)
l=m.length!==0&&A.d.cD(m,new C.f4L(a5,m))?a5.db[A.d.gH(m)]:a6
k=new C.f4S(a5)
j=new C.f4U()
q=B.d("Tap the words you want to change, then choose a size. One sentence can have big, normal and small words.",a6,a6,a6,a6,a6,a6,D.L5,a6,a6,a6)
p=x.p
o=B.a([],p)
for(i=a5.db,h=0;h<a7.length;++h){g=new B.aP(11,11)
f=u.q(0,h)?A.b7.j(0.38):A.c.j(0.06)
e=u.q(0,h)?A.ey:A.bw
d=new B.ay(e,u.q(0,h)?2:1,A.r,-1)
e=a7[h].b
a0=e.index
e=A.a.aA(w,a0,a0+e[0].length)
a0=B.ag("[*~^]",!0,!1,!1,!1)
e=B.aL(e,a0,"")
a0=j.$1(i[h])
a1=i[h]>0?A.u:A.a8
o.push(B.az(a6,B.p(a6,B.d(e,a6,a6,a6,a6,a6,a6,new B.G(!0,A.c,a6,a6,a6,a6,a0,a1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),a6,a6,a6),A.f,a6,a6,new B.o(f,a6,new B.bG(d,d,d,d),new B.be(g,g,g,g),a6,a6,A.n),a6,a6,a6,a6,A.OP,a6,a6,a6),A.y,!1,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,new C.f4M(a5,h),a6,a6,a6,a6,a6,a6,!1,A.a4))}o=a5.wk(B.bZ(A.bI,o,A.vZ,a6,6,6))
i=B.a([a5.oF("All words",N.arq,!1,new C.f4N(a5,a7))],p)
if(n>1){a2=0
for(;;){if(!(a2<n&&a2<8))break
a3=a2+1
i.push(a5.ahR("Sentence "+a3,!1,new C.f4O(a5,a7,v,a2)))
a2=a3}}i.push(a5.ahR("Clear picks",!1,new C.f4P(a5)))
i=B.bZ(A.bI,i,A.br,a6,8,8)
g=a5.yG("SIZE OF THE PICKED WORDS",D.aqT)
f=B.a([],p)
for(s=0;s<4;++s){e={}
a0=D.dCm[s]
a1=e.a=null
a4=a0.a
e.a=a4
e=u.a===0?a1:new C.f4Q(e,k)
f.push(a5.ahR(a0.b,l===a4,e))}return B.x(B.a([q,A.T,o,A.T,i,g,B.bZ(A.bI,f,A.br,a6,8,8),A.T,a5.oF("Make every word normal",A.kd,!1,new C.f4R(a5))],p),A.E,a6,A.e,A.h,0,A.p)},
cFG(){var w,v,u,t,s,r,q=this,p=null,o=x.p,n=B.A(B.a([D.bL0,B.d(A.d.fb(D.aCs,new C.f4u(q)).b,p,p,p,p,p,p,D.fy4,p,p,p)],o),A.l,p,A.e,A.h,0,p,p),m=B.cm(new C.f4v(q)),l=q.yG("HIGHLIGHT BEHIND THE WORDS",A.a3A),k=q.p1?-1:q.k4
k=q.aki(k,new C.f4w(q),D.dg_)
w=q.p1
v=w?A.c:A.aT
n=B.a([n,A.T,m,l,B.bZ(A.bI,B.a([k,B.az(p,B.p(p,D.bYd,A.f,p,p,new B.o(p,p,B.K(v,A.r,w?3:1),p,p,D.fru,A.a6),p,34,p,p,p,p,p,34),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f4z(q),p,p,p,p,p,p,!1,A.a4)],o),A.vZ,p,10,10),A.am,B.d("Add a coloured band behind the words, with any word design. The first circle turns it off.",p,p,p,p,p,p,D.L5,p,p,p)],o)
if(q.gaYt()!==0){m=B.a([],o)
if(q.p1){l=q.p2
l=q.ajU("Colour",l,0,360,new C.f4A(q),""+A.i.V(l)+"\xb0")
k=q.p3
A.d.u(m,B.a([l,q.ajU("Shade",k,0.15,0.9,new C.f4B(q),""+A.i.V(k*100))],o))}l=q.ok
m.push(q.kC("Strength",l,0.15,1,new C.f4C(q),1,""+A.i.V(l*100)+"%"))
A.d.u(n,B.a([A.T,q.wk(B.x(m,A.l,p,A.e,A.h,0,A.p))],o))}n.push(q.yG("LOOK",A.x1))
m=B.a([q.oF("Bold",I.aqR,q.fy,new C.f4D(q)),q.oF("Italic",I.aqS,q.go,new C.f4E(q))],o)
for(u=0;u<3;++u){l={}
k=D.d5I[u]
l.a=null
t=k.a
l.a=t
w=q.id===t
v=w?G.ve:p
w=w?p:A.c.j(0.07)
s=new B.aP(14,14)
r=new B.ay(q.id===l.a?A.L:A.bw,1,A.r,-1)
m.push(B.az(p,B.p(p,B.W(k.b,A.c,p,p,p,20),A.f,p,p,new B.o(w,p,new B.bG(r,r,r,r),new B.be(s,s,s,s),p,v,A.n),p,38,p,p,p,p,p,42),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,new C.f4F(l,q),p,p,p,p,p,p,!1,A.a4))}n.push(B.bZ(A.bI,m,A.vZ,p,8,8))
n.push(q.yG("COLOUR",A.lT))
n.push(q.aki(q.fx,new C.f4G(q),D.dsf))
n.push(A.am)
n.push(B.d("The first circle keeps the colour that comes with the design.",p,p,p,p,p,p,D.L5,p,p,p))
n.push(q.yG("SIZE AND PLACE",A.I0))
m=q.fr
m=q.kC("Text size",m,0.5,1.6,new C.f4x(q),1,""+A.i.V(m*100)+"%")
l=q.k1
n.push(q.wk(B.x(B.a([m,q.kC("Up / down",l,0.12,0.5,new C.f4y(q),0.3,""+A.i.V(l*100))],o),A.l,p,A.e,A.h,0,A.p)))
return B.x(n,A.E,p,A.e,A.h,0,A.p)},
coB(){var w,v,u,t,s,r=this,q=null,p=r.p4
if(p==null){w=B.l(22)
v=B.K(A.b7.j(0.6),A.r,1.6)
u=B.a([A.b7.j(0.18),A.bE.j(0.12)],x.O)
return B.az(q,B.p(q,B.x(B.a([B.p(q,D.c30,A.f,q,q,D.b9K,q,62,q,q,q,q,q,62),A.aB,D.fPJ,A.am,D.fUz],x.p),A.l,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(D.ut,q,v,w,q,new B.a7(A.a5,A.a9,A.x,u,q,q),A.n),q,q,q,q,D.bGF,q,q,1/0),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.gb2j(),q,q,q,q,q,q,!1,A.a4)}w=x.p
v=B.A(B.a([B.bu(B.l(12),new B.a5(46,62,B.fX(p,A.z,120,q,A.cl,A.c_,!1,q,!1,q,q),q),A.aq),A.bb,B.E(B.x(B.a([D.fPe,A.P,B.bZ(A.bI,B.a([r.oF("Change",A.jN,!1,r.gb2j()),r.oF("Remove",A.ej,!1,new C.f48(r))],w),A.br,q,6,6)],w),A.E,q,A.e,A.h,0,A.p),1)],w),A.l,q,A.e,A.h,0,q,q)
u=B.a([],w)
for(t=0;t<5;++t){s=D.doi[t]
u.push(r.oF(s.b,s.a,r.at===t,new C.f49(r,t)))}u=B.bZ(A.bI,u,A.br,q,8,8)
switch(r.at){case 0:s=r.c6j(p)
break
case 1:s=r.c5c()
break
case 2:s=r.bLI()
break
case 3:s=r.bSc()
break
default:s=r.bNQ()
break}return B.x(B.a([v,A.af,u,A.aB,s,A.T,new B.bK(A.a5,q,q,r.oF("Reset the whole picture",A.kd,!1,new C.f4a(r)),q)],w),A.E,q,A.e,A.h,0,A.p)},
c6j(d){var w=this,v=x.p
return B.x(B.a([B.bZ(A.bI,B.a([w.oF("Auto enhance",E.a3d,!1,new C.f40(w)),w.oF("Make words easy to read",A.nP,!1,new C.f41(w))],v),A.br,null,8,8),A.aB,B.cm(new C.f42(w,d))],v),A.E,null,A.e,A.h,0,A.p)},
c5c(){var w,v,u,t,s,r,q,p,o=this,n=o.R8
n=o.kC("Exposure",n,-1.5,1.5,new C.f3F(o),0,A.i.ad(n,1))
w=o.RG
w=o.kC("Brightness",w,-0.5,0.5,new C.f3G(o),0,""+A.i.V(w*100))
v=o.rx
v=o.kC("Contrast",v,0.4,2,new C.f3H(o),1,""+A.i.V(v*100))
u=o.xr
u=o.kC("Fade",u,0,1,new C.f3I(o),0,""+A.i.V(u*100))
t=o.aK
t=o.kC("Spotlight",t,0,1,new C.f3J(o),0,""+A.i.V(t*100))
s=o.a0
s=o.kC("Darken",s,0,0.85,new C.f3K(o),0,""+A.i.V(s*100))
r=o.bd
r=o.kC("Vignette",r,0,0.9,new C.f3L(o),0,""+A.i.V(r*100))
q=o.aO
q=o.kC("Shade behind words",q,0,0.85,new C.f3M(o),0,""+A.i.V(q*100))
p=o.aR
return o.wk(B.x(B.a([n,w,v,u,t,s,r,q,o.kC("Shade top & bottom",p,0,0.85,new C.f3N(o),0,""+A.i.V(p*100))],x.p),A.l,null,A.e,A.h,0,A.p))},
bLI(){var w,v,u,t,s=this,r=null,q=s.ry
q=s.kC("Colour strength",q,0,2.2,new C.f30(s),1,""+A.i.V(q*100))
w=s.to
w=s.kC("Warmth",w,-1,1,new C.f31(s),0,""+A.i.V(w*100))
v=s.x1
v=s.kC("Tint",v,-1,1,new C.f32(s),0,""+A.i.V(v*100))
u=s.x2
t=x.p
u=s.wk(B.x(B.a([q,w,v,s.kC("Shift colours",u,-180,180,new C.f33(s),0,""+A.i.V(u)+"\xb0"),new B.bK(A.a5,r,r,s.oF("Negative",D.bTa,s.y1,new C.f34(s)),r)],t),A.l,r,A.e,A.h,0,A.p))
v=s.yG("COLOUR WASH",A.PS)
w=s.b1
q=B.a([null],x.Z)
A.d.u(q,D.aB4)
t=B.a([u,v,s.aki(w,new C.f35(s),q),A.P],t)
if(s.b1!=null){q=s.aZ
t.push(s.wk(s.ajU("Wash strength",q,0,0.9,new C.f36(s),""+A.i.V(q*100))))}return B.x(t,A.E,r,A.e,A.h,0,A.p)},
bSc(){var w,v,u,t,s,r=this,q=r.y2
q=r.kC("Blur",q,0,24,new C.f3z(r),0,A.o.v(A.i.V(q)))
w=r.bh
w=r.kC("Soft focus",w,0,1,new C.f3A(r),0,""+A.i.V(w*100))
v=r.aH
u=x.p
v=r.wk(B.x(B.a([q,w,r.kC("Film grain",v,0,1,new C.f3B(r),0,""+A.i.V(v*100))],u),A.l,null,A.e,A.h,0,A.p))
w=r.yG("LIGHT LEAK",D.bSU)
q=r.bi
t=B.a([null],x.Z)
s=x.S
A.d.u(t,B.cX(D.aB4,0,B.dD(8,"count",s),s))
u=B.a([v,w,r.aki(q,new C.f3C(r),t),A.P],u)
if(r.bi!=null){q=r.bH
u.push(r.wk(r.ajU("Leak strength",q,0,1,new C.f3D(r),""+A.i.V(q*100))))}return B.x(u,A.E,null,A.e,A.h,0,A.p)},
bNQ(){var w,v,u,t,s=this,r=s.aY
r=s.kC("Zoom",r,1,3,new C.f3a(s),1,""+A.i.V(r*100)+"%")
w=s.bn
w=s.kC("Left / right",w,-1,1,new C.f3b(s),0,""+A.i.V(w*100))
v=s.bx
v=s.kC("Up / down",v,-1,1,new C.f3c(s),0,""+A.i.V(v*100))
u=s.c5
t=x.p
return B.x(B.a([s.wk(B.x(B.a([r,w,v,s.kC("Turn",u,-180,180,new C.f3d(s),0,""+A.i.V(u)+"\xb0")],t),A.l,null,A.e,A.h,0,A.p)),A.T,B.bZ(A.bI,B.a([s.oF("Turn 90\xb0",H.arW,!1,new C.f3e(s)),s.oF("Flip sideways",A.Dc,s.cg,new C.f3f(s)),s.oF("Flip upside down",A.Dc,s.cT,new C.f3g(s))],t),A.br,null,8,8)],t),A.E,null,A.e,A.h,0,A.p)},
c90(){var w=null,v=B.l(22),u=B.K(A.bw,A.r,1)
return B.p(w,B.x(B.a([D.fez,A.T,D.fRg,A.aB,B.az(w,B.p(A.z,D.feN,A.f,w,w,new B.o(w,w,w,B.l(16),w,G.ve,A.n),w,52,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f43(this),w,w,w,w,w,w,!1,A.a4)],x.p),A.E,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(D.ut,w,u,v,w,w,A.n),w,w,w,w,A.bS,w,w,w)},
c66(){var w,v,u,t,s,r,q,p=this,o=null,n=new C.f3W(p),m=x.p,l=B.A(B.a([D.bL6,p.oF("Reset",A.kd,!1,new C.f3S(p))],m),A.l,o,A.e,A.h,0,o,o),k=B.d("Drag it on the quote to move it. It stays on every quote.",o,o,o,o,o,o,D.L5,o,o,o),j=p.yG("SHAPE",A.arR),i=B.a([],m)
for(w=0;w<7;++w){v={}
u=D.DM[w]
v.a=null
t=v.a=u.a
if(t.length!==0){s=p.cx
i.push(p.b2k(n.$2(t,p.cy),62,u.b,s===t,new C.f3T(v,p),62))}}i=B.bZ(A.bI,i,A.br,o,8,8)
v=p.yG("RING",A.pz)
u=B.a([],m)
for(w=0;w<11;++w){s={}
r=D.DF[w]
s.a=null
t=s.a=r.a
q=p.cy
u.push(p.b2k(n.$2(p.cx,t),62,r.b,q===t,new C.f3U(s,p),62))}u=B.bZ(A.bI,u,A.br,o,8,8)
s=p.CW
return B.x(B.a([l,A.ax,k,j,i,v,u,A.af,p.wk(p.kC("Size",s,0.12,0.4,new C.f3V(p),0.22,""+A.i.V(s*100)))],m),A.E,o,A.e,A.h,0,A.p)},
b5k(d){return new B.a5(null,d,new B.fH(0.5625,B.cm(new C.f4e(this)),null),null)},
cES(){var w,v,u,t,s,r,q=null,p=A.c.j(0.05),o=B.l(18),n=B.K(A.bw,A.r,1),m=x.p,l=B.a([],m)
for(w=0;w<6;++w){v=this.as===w
u=v?G.ve:q
t=new B.aP(14,14)
s=D.dqA[w]
r=v?A.c:A.aF
r=B.W(s.a,r,q,q,q,19)
v=v?A.c:A.aF
l.push(new B.by(1,A.ba,B.az(A.bY,B.cT(q,B.x(B.a([r,A.cR,new B.dx(A.dM,A.z,A.f,B.d(s.b,q,q,q,q,q,q,new B.G(!0,v,q,q,q,q,10.5,A.H,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q),q,q,q),q)],m),A.l,q,A.e,A.N,0,A.p),q,q,A.b0,new B.o(q,q,q,new B.be(t,t,t,t),q,u,A.n),D.bC7,q,q,q,q,A.hO,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.f4n(this,w),q,q,q,q,q,q,!1,A.a4),q))}return B.p(q,B.A(l,A.l,q,A.e,A.h,0,q,q),A.f,q,q,new B.o(p,q,n,o,q,q,A.n),q,q,q,D.bEf,A.lQ,q,q,q)},
aT9(){var w,v,u=this,t=null,s=u.cES()
switch(u.as){case 0:w=u.bPU()
break
case 1:w=u.cKK()
break
case 2:w=u.cFG()
break
case 3:w=u.coB()
break
case 4:w=u.c66()
break
default:w=u.c90()
break}v=x.p
return B.bu(A.ua,B.eb(B.x(B.a([s,B.E(B.cw(B.a([w],v),t,t,D.bFt,t,t,A.ah,!1),1)],v),A.l,t,A.e,A.h,0,A.p),D.ZV,!0),A.aq)},
aP9(){var w,v,u,t,s=this,r=null,q=s.Q?r:s.gceN(),p=B.l(16)
q=B.E(B.az(r,B.p(r,D.feY,A.f,r,r,new B.o(A.c.j(0.08),r,B.K(A.aT,A.r,1),p,r,r,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,q,r,r,r,r,r,r,!1,A.a4),1)
p=s.Q?r:s.gbRL()
w=B.l(16)
v=B.a([new B.ab(0,A.G,A.bE.j(0.35),A.cz,16)],x.V)
u=x.p
t=B.a([],u)
if(s.Q)t.push(A.aV3)
else t.push(D.bXj)
t.push(A.ae)
t.push(D.bND)
return B.p(r,B.A(B.a([q,A.as,B.E(B.az(r,B.p(r,B.A(t,A.l,r,A.b8,A.h,0,r,r),A.f,r,r,new B.o(r,r,r,w,v,G.ve,A.n),r,50,r,r,r,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,p,r,r,r,r,r,r,!1,A.a4),1)],u),A.l,r,A.e,A.h,0,r,r),A.f,r,r,D.b8R,r,r,r,r,Az.a12,r,r,r)},
b2i(){var w=null
return new B.D(W.a1z,B.A(B.a([B.aI(w,w,w,w,A.nQ,w,w,w,new C.f3E(this),w,w,w,w,w,w),D.h6d,A.b3,D.c5q],x.p),A.l,w,A.e,A.h,0,w,w),w)},
B(d){var w=null
return B.c4(w,A.Cn,B.bm(!0,B.cm(new C.f4V(this)),!0,!1,A.ag,!0,!0),w,!1,!1,w,w)}}
C.bir.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n=new B.e0()
n.cU(7)
w=e.a
v=e.b
u=A.i.V(w*v/55)
$.S()
t=B.L()
s=this.b
t.r=A.c.j(0.16*s).gp(0)
r=B.L()
r.r=A.w.j(0.2*s).gp(0)
for(q=0;q<u;++q){s=n.ai()*w
p=n.ai()*v
o=(q&1)===0?t:r
d.aF(new B.a4(s,p,s+1.1,p+1.1),o)}},
aE(d){return d.b!==this.b}}
C.t2.prototype={
a7(){return"NgmyQuoteDeco."+this.b}}
C.mx.prototype={}
C.Ab.prototype={
aj(){var w=this
return B.J(["at",w.a.aa().ag(),"outline",w.b,"extras",w.c,"request",w.d],x.N,x.z)}}
C.of.prototype={}
C.wA.prototype={
a7(){return"NgmySlidesAiExtra."+this.b}}
C.a9r.prototype={}
C.atk.prototype={}
C.a1S.prototype={
S(){return new C.aJU(new B.au(A.aw,$.ax()),B.kd(!0,null,!0,!0,null,null,!1),D.dUs,B.a([],x.s),B.ev([D.JG],x.Q))}}
C.aJU.prototype={
t(){var w=this.d
w.U$=$.ax()
w.R$=0
this.f.t()
this.a2()},
a1A(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$a1A=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i1().CT(90,700,700,A.eQ),$async$a1A)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a1A)
case 8:p=e
if(r.c!=null)r.m(new C.fbi(r,p,q))
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
return B.i($async$a1A,v)},
a1D(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1D=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:i=20-r.y.length
if(i<=0){w=1
break}t=4
n=i>1?i:null
w=7
return B.b(new B.i1().aKg(78,n,1100,1100),$async$a1D)
case 7:q=e
if(J.ct(q)){w=1
break}p=B.bp(r.y,!0,x.N)
n=J.aT(q)
case 8:if(!n.C()){w=9
break}o=n.gP(n)
if(J.ad(p)>=20){w=9
break}w=10
return B.b(o.fq(),$async$a1D)
case 10:m=e
l=o.b.toLowerCase()
if(A.a.c7(l,".png"))k="image/png"
else k=A.a.c7(l,".webp")?"image/webp":"image/jpeg"
J.c5(p,"data:"+k+";base64,"+A.cS.gcs().aN(m))
w=8
break
case 9:if(r.c!=null)r.m(new C.fbj(r,p))
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
return B.i($async$a1D,v)},
b7j(d){var w,v,u=null
if(d!=null&&A.a.q(d,","))try{w=B.fX(A.cL.aN(A.d.gal(d.split(","))),A.z,u,u,A.cl,A.c_,!0,u,!1,u,u)
return w}catch(v){}return D.bAg},
c6d(d,e,f,g){var w=e.length===0&&f.length===0?"rounded":e
return B.cAy(C.fR2(w,this.b7j(d),f),g)},
ae1(d,e,f,g,h){var w=null,v=new C.fbg(f,e),u=new C.fbh(f,e),t=A.c.j(0.05),s=B.l(12),r=B.l(12),q=B.l(12),p=h==null,o=B.K(p?A.bw:A.b7.j(0.6),A.r,1)
if(p)p=new B.a5(34,30,new B.an(A.a0,w,A.ad,A.f,B.a([B.as(B.W(f?A.zC:A.PF,A.bV,w,w,w,26),w,w,w),D.eDy],x.p),w),w)
else p=this.c6d(g,v.$1(h),u.$1(h),34)
return B.aG(!1,A.a3,!0,s,B.aM(!1,r,!0,B.p(w,B.A(B.a([B.E(B.as(p,w,w,w),1),D.bX0],x.p),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.o(w,w,o,q,w,w,A.n),w,44,w,w,A.n2,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.fbf(this,f,h,g,v,u,d),w,w,w,w,w,w,w),A.f,t,0,w,w,w,w,w,A.ai)},
b_m(d,e,f,g,h){var w,v,u,t,s,r,q,p=null,o=null,n=h==null
if(!n&&A.a.q(h,","))try{o=B.bu(B.l(8),B.fX(A.cL.aN(A.d.gal(h.split(","))),A.z,p,p,A.cl,A.c_,!1,30,!1,p,30),A.aq)}catch(w){}v=A.c.j(0.05)
u=B.l(14)
t=B.l(14)
s=B.l(14)
r=B.K(n?A.bw:A.bi.j(0.6),A.r,1)
q=o
n=q==null?B.W(d,A.ew,p,p,p,20):q
n=B.a([n,A.ae,B.E(B.d(e,p,1,A.a2,p,p,p,A.Lc,p,p,p),1)],x.p)
if(f!=null)n.push(B.az(p,H.Qq,A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,f,p,p,p,p,p,p,!1,A.a4))
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.p(p,B.A(n,A.l,p,A.e,A.h,0,p,p),A.f,p,p,new B.o(p,p,r,s,p,p,A.n),p,50,p,p,A.kX,p,p,p),p,!0,p,p,p,p,p,p,p,p,p,p,p,g,p,p,p,p,p,p,p),A.f,v,0,p,p,p,p,p,A.ai)},
aa4(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n
var $async$aa4=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(C.fUB(),$async$aa4)
case 7:q=e
if(q==null||r.c==null){w=1
break}r.m(new C.faZ(r,q))
t=2
w=6
break
case 4:t=3
n=s.pop()
p=B.ac(n)
if(r.c!=null)r.m(new C.fb_(r,p))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$aa4,v)},
ag5(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$ag5=B.e(function(d,a0){if(d===1){s.push(a0)
w=t}for(;;)switch(w){case 0:f=A.a.i(r.d.a.a)
if(f.length<6&&r.e==null){r.m(new C.fb1(r))
w=1
break}if(r.x==null){m=B.ag("\\blogo\\b",!1,!1,!1,!1)
m=m.b.test(f)}else m=!1
if(m){r.m(new C.fb2(r))
w=1
break}m=r.e
l=m==null?null:m.c
if(l==null)l=""
q=l.length===0?f:f+"\n\nSOURCE DOCUMENT ("+m.a+"):\n"+l
r.m(new C.fb3(r))
t=4
m=r.ch
k=r.CW
j=r.x
i=r.y
p=B.a([],x.aD)
h=r.e
if((h==null?null:h.b)!=null){h=h.b
h.toString
J.c5(p,h)}w=7
return B.b(C.fPL(q,r.cx,j,new C.b43(r.z,r.Q,r.as,r.at),new C.fb4(r),i,m,p,k),$async$ag5)
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
if(p!=null)B.a6(p,!1).N(o)
t=2
w=6
break
case 4:t=3
e=s.pop()
n=B.ac(e)
if(r.c!=null)r.m(new C.fb5(r,n))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ag5,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=x.w,f=B.aE(d,A.eT,g).w
g=B.aE(d,A.bZ,g).w
w=B.as(B.p(h,h,A.f,h,h,new B.o(A.aT,h,h,B.l(99),h,h,A.n),h,4,h,h,h,h,h,40),h,h,h)
v=x.V
u=B.as(B.az(h,B.p(h,D.c_n,A.f,h,h,new B.o(h,h,B.K(A.c.j(0.35),A.r,2),h,B.a([new B.ab(2,A.G,A.bi.j(0.5),A.J,24)],v),D.c9C,A.a6),h,84,h,h,h,h,h,84),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fbw(i),h,h,h,h,h,h,!1,A.a4),h,h,h)
t=x.p
s=B.a([],t)
if(i.e!=null)s.push(B.aI(h,h,h,h,H.Qq,h,h,h,i.ax?h:new C.fbx(i),h,h,h,h,"Remove document",h))
r=i.e
r=r==null?"Attach a PDF, Word or text file":r.a
q=i.ax?h:i.gbGB()
v=B.a([new B.ab(0,A.G,A.b7.j(0.45),A.J,10)],v)
s.push(B.hc(B.aG(!1,A.a3,!0,h,B.aM(!1,h,!0,B.p(h,B.W(i.e==null?A.tg:A.hd,A.c,h,h,h,20),A.f,h,h,new B.o(h,h,h,h,v,E.x9,A.a6),h,40,h,h,h,h,h,40),A.cU,!0,h,h,h,h,h,h,h,h,h,h,h,q,h,h,h,h,h,h,h),A.f,A.L,0,h,h,A.cU,h,h,A.ai),h,r,h,h))
v=B.A(s,A.l,h,A.e,A.N,0,h,h)
s=A.c.j(0.05)
v=B.aN(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.d,h,h,h,h,h,2,B.bz(h,h,h,h,h,h,h,h,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),h,h,h,h,h,s,!0,h,h,h,h,new B.b6(4,B.l(16),D.b6k),h,h,h,h,h,h,h,h,A0.F1,"Type your idea here\u2026",h,h,h,h,h,h,h,h,h,!0,!0,!1,h,h,h,h,h,h,h,h,new B.D(A.iS,v,h),h,h,h,h,h),A.y,!0,h,!0,h,!1,i.f,A.ak,h,h,h,h,h,h,h,h,h,6,3,h,!1,"\u2022",h,h,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,h,D.aXa,!0,A.a7,h,A.ao,h,h,h,h)
s=i.x
r=s==null
q=r?"Add your logo":"Logo added"
r=r?h:new C.fby(i)
s=i.b_m(A.l1,q,r,i.gcp2(),s)
r=i.z
r=B.E(i.ae1(new C.fbA(i),i.Q,!1,i.x,r),1)
q=i.Q
q=B.E(B.x(B.a([s,A.am,B.A(B.a([r,A.bn,B.E(i.ae1(new C.fbB(i),i.z,!0,i.x,q),1)],t),A.l,h,A.e,A.h,0,h,h)],t),A.l,h,A.e,A.h,0,A.p),1)
s=i.y
r=s.length
p=r===0
if(p)r="Add your pictures"
else{o=r===1?"":"s"
o=""+r+" picture"+o
r=o}s=p?h:A.d.gH(s)
p=i.y.length===0?h:new C.fbC(i)
s=i.b_m(A.uT,r,p,i.gcpa(),s)
p=i.as
r=i.at
o=i.y
o=o.length===0?h:A.d.gH(o)
p=B.E(i.ae1(new C.fbD(i),r,!1,o,p),1)
o=i.at
r=i.as
n=i.y
n=n.length===0?h:A.d.gH(n)
o=B.a([w,A.aB,D.fVS,A.ax,D.fYO,A.bx,u,A.P,D.fXb,A.aB,v,A.bx,B.A(B.a([q,A.as,B.E(B.x(B.a([s,A.am,B.A(B.a([p,A.bn,B.E(i.ae1(new C.fbE(i),r,!0,n,o),1)],t),A.l,h,A.e,A.h,0,h,h)],t),A.l,h,A.e,A.h,0,A.p),1)],t),A.E,h,A.e,A.h,0,h,h),A.am,D.h_H],t)
w=i.w.a
if(w.length!==0){v=B.l(999)
u=B.K(D.brw,A.r,1)
w=C.aiq(w)
w=w==null?h:w.b
A.d.u(o,B.a([A.T,new B.bK(A.a5,h,h,B.p(h,B.A(B.a([D.c0w,A.bn,B.d("Ending: "+(w==null?"":w),h,h,h,h,h,h,H.aXr,h,h,h),B.aM(!1,h,!0,D.exA,h,!0,h,h,h,h,h,h,h,h,h,h,h,new C.fbF(i),h,h,h,h,h,h,h)],t),A.l,h,A.e,A.N,0,h,h),A.f,h,h,new B.o(D.bj8,h,u,v,h,h,A.n),h,h,h,h,D.bDU,h,h,h),h)],t))}o.push(A.bx)
o.push(D.fMg)
o.push(A.P)
w=B.a([],t)
for(m=0;m<6;++m){l=D.dif[m]
v=i.ch===l?A.b7:A.c.j(0.06)
u=i.ch===l
k=new B.ay(u?A.aF:A.bw,1,A.r,-1)
u=u?A.u:A.O
w.push(new B.by(1,A.ba,new B.D(A.j9,B.az(h,B.cT(A.z,B.d(""+l,h,h,h,h,h,h,new B.G(!0,A.c,h,h,h,h,h,u,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h),h,h,h),h,h,A.b0,new B.o(v,h,new B.bG(k,k,k,k),h,h,h,A.a6),A.eH,h,42,h,h,h,h,h,h),A.y,!1,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,new C.fbG(i,l),h,h,h,h,h,h,!1,A.a4),h),h))}o.push(B.A(w,A.l,h,A.e,A.h,0,h,h))
o.push(A.bx)
o.push(D.h4q)
o.push(A.P)
o.push(B.cm(new C.fbH(i)))
o.push(A.bx)
o.push(D.fTV)
o.push(A.P)
w=B.a([i.baf("auto","Let AI choose",A.e9,A.Sz)],t)
for(v=x.O,m=0;m<11;++m){j=D.xe[m]
u=j.d
w.push(i.baf(j.a,j.b,j.c,B.a([B.b1(A.d.gH(u).a),B.b1(A.d.gH(u).b)],v)))}o.push(B.bZ(A.bI,w,A.br,h,8,8))
o.push(A.aO)
w=A.c.j(0.04)
v=B.l(16)
u=B.K(i.r?A.bi.j(0.5):A.bw,A.r,1)
o.push(B.p(h,B.iY(h,A.bi,h,h,h,new C.fbz(i),D.bWs,D.h3F,h,D.fOH,i.r),A.f,h,h,new B.o(w,h,u,v,h,h,A.n),h,h,h,h,h,h,h,h))
w=i.cy
if(w!=null)A.d.u(o,B.a([A.aB,B.d(w,h,h,h,h,h,h,D.aWl,h,h,h)],t))
o.push(A.bx)
w=i.ax?h:i.gceR()
v=B.fv(h,h,A.b7,A.b7.j(0.5),h,h,h,h,h,A.c,h,h,h,h,new B.b9(B.l(18),A.a1),h,h,h,h,h)
u=i.ax
t=u?D.fkQ:A.Id
o.push(new B.a5(h,54,B.lV(t,B.d(u?i.ay:"Create my presentation",h,h,h,h,h,h,A.mE,h,h,h),w,v),h))
return new B.D(new B.Q(0,0,0,f.f.d),B.p(h,B.bm(!0,B.c9(B.x(o,A.al,h,A.e,A.h,0,A.p),A.t,h,A.y,h,h,A.wG,h,h,A.ah),!0,!1,A.ag,!0,!1),A.f,h,new B.aY(0,680,0,g.a.b*0.92),D.afy,h,h,h,h,h,h,h,h),h)},
bTu(d){var w,v,u,t,s,r,q=null,p=this.cx.q(0,d),o=new C.fb6(this,p,d)
if(d===D.Er)return new C.aGo(p,o,q)
w=B.l(16)
v=p?E.x9:q
u=p?q:A.c.j(0.05)
t=B.K(p?A.aF:A.bw,A.r,1)
s=B.W(p?A.ed:C.i_y(d),A.c,q,q,q,20)
r=C.i_z(d)
return B.az(q,B.cT(q,B.x(B.a([s,A.ax,new B.dx(A.dM,A.z,A.f,B.d(r,q,q,q,q,q,q,B.m(q,q,A.c,q,q,q,q,q,q,q,q,12,q,q,p?A.u:A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),q)],x.p),A.l,q,A.b8,A.h,0,A.p),q,q,A.b0,new B.o(u,q,t,w,q,v,A.n),A.ha,q,64,q,q,A.hz,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,o,q,q,q,q,q,q,!1,A.a4)},
baf(d,e,f,g){var w,v=null,u=this.CW===d,t=B.l(99),s=u?A.c.j(0.12):A.c.j(0.04),r=u?A.ab:A.bw
r=B.K(r,A.r,u?1.6:1)
w=B.p(v,B.W(f,A.c,v,v,v,14),A.f,v,v,new B.o(v,v,v,v,v,new B.a7(A.a5,A.a9,A.x,g,v,v),A.a6),v,26,v,v,v,v,v,26)
return B.az(v,B.cT(v,B.A(B.a([w,A1.AW,B.d(e,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12.5,v,v,u?A.u:A.a8,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.N,0,v,v),v,v,A.b0,new B.o(s,v,r,t,v,v,A.n),A.eH,v,v,v,v,P.aob,v,v,v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fbl(this,d),v,v,v,v,v,v,!1,A.a4)}}
C.a1R.prototype={
S(){return new C.aJT(new B.au(A.aw,$.ax()))}}
C.aJT.prototype={
t(){var w=this.d
w.U$=$.ax()
w.R$=0
this.a2()},
ag6(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$ag6=B.e(function(a2,a3){if(a2===1){s.push(a3)
w=t}for(;;)switch(w){case 0:a0=A.a.i(r.d.a.a)
if(J.ad(a0)<3){r.m(new C.faS(r))
w=1
break}B.eZ()
r.m(new C.faT(r))
t=4
q=C.irA(a0)
if(q!=null){k=r.a
j=k.c
k=k.d
i=B.ag("\\b(all|every|whole|entire)\\b.{0,30}\\b(slides?|presentation|deck|pages?)\\b|\\b(slides?|presentation|deck)\\b.{0,20}\\b(all|every|whole|entire)\\b",!0,!1,!1,!1)
h=a0.toLowerCase()
p=C.irk(j,k-1,q,i.b.test(h))
if(!p){r.m(new C.faU(r,q))
w=1
break}k=r.c
if(k!=null)B.a6(k,!1).N(r.a.c)
w=1
break}g=a0.toLowerCase()
k=B.ag("\\b(undo|un-do|bring (it |them |the .{0,30}?)?back|brings? back|put (it |them |the .{0,30}?)?back|restore|revert|go back|change (it|that|them) back|back the way|what it was|the way it was|previous version|before (you|the ai) (changed|change))\\b",!0,!1,!1,!1)
if(k.b.test(g)){k=r.a.c
C.hg7()
f=$.Dq.h(0,k.a)
o=f==null||J.ct(f)?null:J.fm(f)
if(o==null){r.m(new C.faV(r))
w=1
break}n=C.iri(o,r.a.c)
C.ire(r.a.c.a)
$.hfj=!0
k=r.c
if(k!=null)B.a6(k,!1).N(n)
w=1
break}k=r.a
j=k.c
i=j.CW
if(i==null)i=""
k=k.d
j=C.hjc(j)
h=C.hjd(r.a.c)
e=C.hje(r.a.c)
w=7
return B.b(C.bFB(k,r.a.c.a,j,h,new C.faW(r),i,e,a0),$async$ag6)
case 7:m=a3
k=r.c
if(k!=null)B.a6(k,!1).N(m)
t=2
w=6
break
case 4:t=3
a1=s.pop()
l=B.ac(a1)
if(r.c!=null)r.m(new C.faX(r,l))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ag6,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=x.w,h=B.aE(d,A.eT,i).w
i=B.aE(d,A.bZ,i).w
w=B.as(B.p(j,j,A.f,j,j,new B.o(A.aT,j,j,B.l(99),j,j,A.n),j,4,j,j,j,j,j,40),j,j,j)
v=x.p
u=B.A(B.a([B.p(j,D.asf,A.f,j,j,D.b8w,j,34,j,j,j,j,j,34),A.as,D.bLL],v),A.l,j,A.e,A.h,0,j,j)
t=B.d("You're on slide "+k.a.d+". Ask for new slides, changes to any slide, a different style or another language.",j,j,j,j,j,j,A0.abW,j,j,j)
s=A.c.j(0.05)
s=B.aN(j,A.Z,!0,j,!0,A.t,j,B.aO(),k.d,j,j,j,j,j,2,B.bz(j,j,j,j,j,j,j,j,!0,new B.b6(4,B.l(16),new B.ay(A.c.j(0.1),1,A.r,-1)),j,j,j,j,j,s,!0,j,j,j,j,new B.b6(4,B.l(16),AA.aeZ),j,j,j,j,j,j,j,j,A0.F1,"e.g. Add a slide after this one about how to sign up, and make the title slide more exciting.",j,j,j,j,j,j,j,j,j,!0,!0,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j),A.y,!0,j,!0,j,!1,j,A.ak,j,j,j,j,j,j,j,j,j,5,2,j,!1,"\u2022",j,j,j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,D.aXa,!0,A.a7,j,A.ao,j,j,j,j)
r=B.a([],v)
for(q=0;q<6;++q){p=D.def[q]
o=B.d(p,j,j,j,j,j,j,AJ.VY,j,j,j)
n=A.c.j(0.06)
r.push(B.n8(j,n,o,j,k.e?j:new C.faY(k,p),j,j,Q.w4,j))}w=B.a([w,A.aB,u,A.am,t,A.aB,s,A.T,B.bZ(A.bI,r,A.br,j,8,8)],v)
u=k.r
if(u!=null)A.d.u(w,B.a([A.af,B.d(u,j,j,j,j,j,j,D.aWl,j,j,j)],v))
w.push(A.aO)
u=k.e
t=u?j:k.gceS()
s=B.l(18)
r=B.l(18)
u=u?B.a([A.bi.j(0.5),A.ep.j(0.5)],x.O):D.cLB
o=B.a([new B.ab(0,A.G,A.bi.j(0.35),A.cz,16)],x.V)
n=A.c.j(0.22)
m=k.e
l=m?D.exw:D.c05
n=B.p(j,l,A.f,j,j,new B.o(n,j,j,j,j,j,A.a6),j,30,j,j,j,j,j,30)
w.push(B.aG(!1,A.a3,!0,j,B.aM(!1,s,!0,B.eC(B.A(B.a([n,A.as,B.d(m?k.f:"Make the change",j,j,j,j,j,j,A.hu,j,j,j)],v),A.l,j,A.b8,A.h,0,j,j),j,new B.o(j,j,j,r,o,new B.a7(A.a5,A.a9,A.x,u,j,j),A.n),54,j,j),j,!0,j,j,j,j,j,j,j,j,j,j,j,t,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.ai))
return new B.D(new B.Q(0,0,0,h.f.d),B.p(j,B.bm(!0,B.c9(B.x(w,A.al,j,A.e,A.h,0,A.p),A.t,j,A.y,j,j,A.wG,j,j,A.ah),!0,!1,A.ag,!0,!1),A.f,j,new B.aY(0,680,0,i.a.b*0.85),D.afy,j,j,j,j,j,j,j,j),j)}}
C.b43.prototype={}
C.aGo.prototype={
S(){return new C.bne(null,null)}}
C.bne.prototype={
gazX(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.qD,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gazX().t()
this.bAm()},
B(d){var w=null,v=this.a.d
return B.az(w,B.c6(this.gazX(),new C.erj(this),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,!1,A.a4)}}
C.bkI.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o
for(w=this.b*2,v=e.a,u=e.b,t=0;t<7;++t){s=0.5+0.5*Math.sin(w+t*1.7)
r=D.dkM[t]
q=r.a*v
r=r.b*u
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.wt.j(0.25+s*0.6).gp(0)
d.O(new B.r(q,r),1+s*1.4,p)
if(s>0.85){o=4*(s-0.85)/0.15
p.c=1
d.ah(new B.r(q-o,r),new B.r(q+o,r+0),p)
d.ah(new B.r(q,r-o),new B.r(q+0,r+o),p)}}},
aE(d){return d.b!==this.b}}
C.atS.prototype={
a7(){return"NgmyTextCommand."+this.b}}
C.a0f.prototype={
S(){return new C.aDS()}}
C.aDS.prototype={
gakf(){var w,v="colorful",u=this.d
if(u===$){w=this.a.c.CW
w=C.aiD(w==null?"":w,v)
u=w==null?null:w.b
u=this.d=u==null?v:u}return u},
gAU(){var w=this.e
return w===$?this.e=C.hjc(this.a.c).q(0,D.Er):w},
a9S(){var w=0,v=B.j(x.H),u=1,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$a9S=B.e(function(a0,a1){if(a0===1){t.push(a1)
w=u}for(;;)switch(w){case 0:s.m(new C.dtR(s))
u=3
r=A.d.fb(D.xe,new C.dtS(s))
q=B.d0(C.hjc(s.a.c),x.Q)
l=q
J.hf(l,D.Er)
p=l
if(s.gAU())J.c5(p,D.Er)
q=s.a.c.CW
if(q==null)q=""
k=r.a
j=s.gAU()?" with Luxury FX":""
i=s.a
h=i.d
i=C.hjd(i.c)
g=C.hje(s.a.c)
w=6
return B.b(C.bFB(h,s.a.c.a,p,i,null,q,g,'Change the look: use the style "'+k+'"'+j+". Keep every word, slide, bullet, picture and the logo exactly as they are."),$async$a9S)
case 6:o=a1
j=o.CW
q=j==null?"":j
q=C.aiD(q,s.gakf())
f=q==null?null:q.b
n=f==null?s.gakf():f
if(!J.z(n,r.a)&&!s.gAU())throw B.X("The AI did not change the look. Try again.")
q=s.c
if(q!=null)B.a6(q,!1).N(o)
u=1
w=5
break
case 3:u=2
d=t.pop()
m=B.ac(d)
if(s.c!=null)s.m(new C.dtT(s,m))
w=5
break
case 2:w=1
break
case 5:return B.h(null,v)
case 1:return B.f(t.at(-1),v)}})
return B.i($async$a9S,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.c:A.a_,k=m?A.aR:A.an,j=m?A.a_:A.c,i=B.l(28),h=B.K(m?A.bw:A.bm,A.r,1),g=x.p,f=B.E(B.x(B.a([B.d("Look and feel",n,n,n,n,n,n,B.m(n,n,l,n,n,n,n,n,n,n,n,20,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.bF,B.d("Your words, pictures and logo stay the same.",n,n,n,n,n,n,B.m(n,n,k,n,n,n,n,n,n,n,n,12.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.h,0,A.p),1),e=o.f?n:new C.dtW(d)
e=B.A(B.a([f,B.aI(n,n,n,n,B.W(A.cB,k,n,n,n,n),n,n,n,e,n,n,n,n,n,n)],g),A.l,n,A.e,A.h,0,n,n)
f=B.a([],g)
for(w=0;w<11;++w){v=D.xe[w]
u=o.gakf()
t=o.f?n:new C.dtX(o,v)
f.push(new C.bvY(v,u===v.a,t,n))}f=B.l2(1.25,f,3,10,10,n,A.e0,!0)
u=B.l(18)
t=o.gAU()?D.ccq:n
if(o.gAU())s=n
else s=m?A.bs:A.ch
r=B.W(A.e9,o.gAU()?A.c:k,n,n,n,n)
q=B.d("Luxury FX",n,n,n,n,n,n,B.m(n,n,o.gAU()?A.c:l,n,n,n,n,n,n,n,n,n,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)
q=B.E(B.x(B.a([q,B.d("Moving light and ornaments, a new royal look each time",n,n,n,n,n,n,B.m(n,n,o.gAU()?A.ab:k,n,n,n,n,n,n,n,n,11.5,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],g),A.E,n,A.e,A.h,0,A.p),1)
p=o.gAU()
f=B.a([f,A.aB,B.p(n,B.A(B.a([r,A.as,q,B.b9H(n,A.c,n,A.bL,!1,A.y,n,n,n,n,n,n,o.f?n:new C.dtY(o),n,n,n,n,n,n,n,n,p)],g),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(s,n,n,u,n,t,A.n),n,n,n,n,R.amR,n,n,n)],g)
u=o.r
if(u!=null)A.d.u(f,B.a([A.T,B.d(u,n,n,n,n,n,n,D.fEm,n,n,n)],g))
f=B.c9(B.x(f,A.E,n,A.e,A.h,0,A.p),A.t,n,A.y,n,n,A.Hc,n,n,A.ah)
u=o.f?n:o.gbFA()
t=B.bo(A.L,n,n,n,n,n,A.ag,n,new B.b9(B.l(16),A.a1),n,n,n)
s=B.l(16)
return B.bm(!0,B.p(n,B.x(B.a([new B.D(D.bH9,e,n),new B.di(1,A.cm,f,n),new B.D(A.Hb,new B.a5(1/0,50,B.bI(B.eC(B.as(o.f?A.tW:D.fWn,n,n,n),n,new B.o(n,n,n,s,n,D.caZ,A.n),n,n,n),n,u,t),n),n)],g),A.l,n,A.e,A.N,0,A.p),A.f,n,n,new B.o(j,n,h,i,n,n,A.n),n,n,n,A.uJ,n,n,n,n),!0,!1,A.ag,!0,!0)}}
C.bvY.prototype={
B(d){var w=null,v=this.c,u=A.d.gH(v.d),t=B.l(16),s=u.a,r=B.a([B.b1(s),B.b1(u.b)],x.O),q=this.d,p=B.K(q?A.c:A.L,A.r,2.5)
s=q?B.a([new B.ab(0,A.G,B.b1(s).j(0.5),A.J,12)],x.V):w
v=B.a([new B.bK(A.lC,w,w,B.W(v.c,A.ab,w,w,w,18),w),new B.bK(A.lD,w,w,B.d(v.b,w,w,w,w,w,w,D.fEj,w,w,w),w)],x.p)
if(q)v.push(D.b3u)
return B.az(w,B.cT(w,new B.an(A.a0,w,A.ad,A.t,v,w),w,w,A.b0,new B.o(w,w,p,t,s,new B.a7(A.ay,A.aC,A.x,r,w,w),A.n),A.eH,w,w,w,w,A.cq,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,this.e,w,w,w,w,w,w,!1,A.a4)}}
C.erg.prototype={
aHL(d,e,f){return e+"@"+A.a.b0(A.o.ft(f==null?this.a.c:f,16),8,"0").toUpperCase()},
xh(d,e){return this.aHL(0,e,null)}}
C.aOy.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.b4_.prototype={
B(d){var w,v,u=null,t=C.hhY(this.c)
if(t==null)w=D.byJ
else{w=B.aE(d,u,x.w).w.cQ0(D.bDq,D.fk_)
v=this.d
w=B.qf(new B.dt(!v,B.apZ(!1,t,!1,v,!1,390),u),w)}return new B.dx(A.dC,A.z,A.f,new B.a5(416,870,new C.boP(w,u),u),u)}}
C.boP.prototype={
B(d){var w,v,u,t=null,s=B.a([],x.p)
for(w=0;w<3;++w){v=D.dxP[w]
u=new B.aP(3,3)
s.push(new B.cK(v.a,v.b,t,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.be(u,u,u,u),t,D.auh,A.n),t,v.c,t,t,t,t,t,5),t))}for(w=0;w<2;++w){v=D.dze[w]
u=new B.aP(3,3)
s.push(new B.cK(t,v.a,-3,t,t,t,B.p(t,t,A.f,t,t,new B.o(t,t,t,new B.be(u,u,u,u),t,D.auh,A.n),t,v.b,t,t,t,t,t,5),t))}s.push(B.bR(0,new B.bM(new B.o(t,t,t,B.l(64),D.d2V,D.c9k,A.n),A.bk,t,t),0,0,0))
s.push(B.bR(3,new B.bM(new B.o(A.w,t,t,B.l(61),t,t,A.n),A.bk,t,t),3,3,3))
s.push(B.bR(13,B.bu(B.l(51),B.eb(this.c,A.w,!0),A.aq),13,13,13))
u=B.l(20)
s.push(B.ao(t,B.as(B.p(D.b3E,B.p(t,t,A.f,t,t,D.b8P,t,11,t,t,t,t,t,11),A.f,t,t,new B.o(A.w,t,t,u,t,t,A.n),t,36,t,t,t,t,t,122),t,t,t),t,t,0,0,25,t))
s.push(B.bR(13,new B.dt(!0,B.bu(B.l(51),D.bAn,A.aq),t),13,13,13))
s.push(B.ao(22,new B.dt(!0,B.as(B.p(t,t,A.f,t,t,new B.o(A.ab,t,t,B.l(3),t,t,A.n),t,5,t,t,t,t,t,134),t,t,t),t),t,t,0,0,t,t))
return new B.an(A.a0,t,A.ad,A.f,s,t)}}
C.lB.prototype={
oR(){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=4280640491,j=4280172719,i=4294967295,h="Thank You",g=C.cC(),f=C.cC(),e=m.r
f=C.em(A.K,!1,e.l(),A.aH,"",k,42,A.bq,A.u,"",0.22,f,l,"","",0,!1,"",0,D.bf,j,2,"Your Presentation Title",0,0,"",D.na,D.d3,0.84,0.08,0.26)
w=C.cC()
v=m.w
w=C.em(A.K,!1,v.l(),A.aH,"",k,20,A.bq,A.a8,"",0.12,w,l,"","",0,!1,"",0,D.bf,j,2,"Class \xb7 Subject \xb7 Date",0,0,"",D.dr,D.d3,0.76,0.12,0.56)
u=C.cC()
t=m.d
s=x.u
t=C.t3(i,l,0,0,B.a([f,w,C.em(A.bd,!1,4279310375,A.aH,"",t.j(0.8).l(),24,A.bq,A.a8,"",0.006,u,l,"","",0,!1,"",0,D.fP,t.l(),3,"",0,0,"",D.cn,D.f7,0.3,0.35,0.72)],s),C.cC(),D.n9,"","","Welcome",D.dr)
u=C.cC()
u=C.em(A.bd,!1,e.l(),A.aH,"",k,34,A.bq,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Agenda",0,0,"",D.cn,D.d3,0.84,0.08,0.08)
w=C.cC()
w=C.t3(i,l,0,0,B.a([u,C.em(A.bd,!0,v.l(),A.aH,"",k,22,A.bq,A.a8,"",0.6,w,l,"","",0,!1,"",0,D.bf,j,2,"1. Introduction\n2. Core concepts\n3. Case study\n4. Discussion\n5. Summary & Q&A",0,0,"",D.vw,D.d3,0.8,0.1,0.26)],s),C.cC(),D.n9,"","","Agenda",D.dr)
u=C.cC()
u=C.em(A.bd,!1,e.l(),A.aH,"",k,32,A.bq,A.u,"",0.14,u,l,"","",0,!1,"",0,D.bf,j,2,"Main Idea",0,0,"",D.cn,D.d3,0.84,0.08,0.08)
f=C.cC()
f=C.t3(i,l,0,0,B.a([u,C.em(A.bd,!0,v.l(),A.aH,"",k,21,A.bq,A.a8,"",0.62,f,l,"","",0,!1,"",0,D.bf,j,2,"\u2022 Supporting detail\n\u2022 Evidence or example\n\u2022 Why it matters",0,0,"",D.cn,D.d3,0.8,0.1,0.26)],s),C.cC(),D.n9,"","","Key Point 1",D.dr)
u=C.cC()
u=C.em(A.bd,!1,e.l(),A.aH,"",k,30,A.bq,A.u,"",0.12,u,l,"","",0,!1,"",0,D.bf,j,2,"Compare & Contrast",0,0,"",D.cn,D.d3,0.84,0.08,0.08)
r=C.cC()
r=C.em(A.bd,!0,v.l(),A.aH,"",k,18,A.bq,A.a8,"",0.62,r,l,"","",0,!1,"",0,D.bf,j,2,"Option A\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.d3,0.4,0.08,0.24)
q=C.cC()
q=C.t3(i,l,0,0,B.a([u,r,C.em(A.bd,!0,v.l(),A.aH,"",k,18,A.bq,A.a8,"",0.62,q,l,"","",0,!1,"",0,D.bf,j,2,"Option B\n\n\u2022 Strength\n\u2022 Example",0,0,"",D.cn,D.d3,0.4,0.52,0.24)],s),C.cC(),D.n9,"","","Key Point 2",D.dr)
r=C.cC()
r=C.em(A.K,!1,e.l(),A.aH,"",k,48,A.bq,A.u,"",0.2,r,l,"","",0,!1,"",0,D.bf,j,2,h,0,0,"",D.dr,D.d3,0.8,0.1,0.32)
e=C.cC()
p=C.Cq(l,l,l,l,D.En,5,!1,l,l,l,l,l,g,l,!1,l,m.b,l,l,B.a([t,w,f,q,C.t3(i,l,0,0,B.a([r,C.em(A.K,!1,v.l(),A.aH,"",k,22,A.bq,A.a8,"",0.1,e,l,"","",0,!1,"",0,D.bf,j,2,"Questions?",0,0,"",D.cn,D.d3,0.7,0.15,0.58)],s),C.cC(),D.n9,"","",h,D.dr)],x.g),"class_"+m.a,l,!1,l)
for(g=p.r,f=g.length,e=m.e,w=m.f,o=0;o<g.length;g.length===f||(0,B.I)(g),++o){n=g[o]
n.e=e.l()
n.f=w.l()}return p}}
C.Fx.prototype={
ak(d){return this.e.$1(d)}}
C.ez.prototype={}
C.ji.prototype={}
C.Fn.prototype={
gaNM(){var w=this.c
if(!(A.a.i(w).length!==0)){w=C.aiq(this.a)
w=w==null?null:w.c
if(w==null)w=""}return w},
a5_(d,e,f,g){var w=this,v=e==null?w.a:e,u=g==null?w.b:g,t=f==null?w.c:f
return new C.Fn(v,u,t,d==null?w.d:d)},
Gj(d){return this.a5_(null,d,null,null)},
aGp(d){return this.a5_(null,null,null,d)},
cPZ(d,e){return this.a5_(d,e,null,null)},
bfC(d){return this.a5_(d,null,null,null)},
bfI(d){return this.a5_(null,null,d,null)}}
C.Ou.prototype={
S(){return new C.bmA(new B.eD(0,$.ax()),null,null)}}
C.bmA.prototype={
Y(){var w,v=this
v.a3()
w=v.q6(new C.e4K(v))
v.e!==$&&B.aQ()
v.e=w
if(v.a.e)w.fX(0)
else v.d.sp(0,3.2)},
t(){var w=this.e
w===$&&B.c()
w.t()
w=this.d
w.U$=$.ax()
w.R$=0
this.bzQ()},
B(d){var w=C.aiq(this.a.c.a)
if(w==null)w=A.d.gH(D.Iw)
return B.cm(new C.e4J(this,w,C.hyH(this.a.c.d)))}}
C.but.prototype={
B(d){return B.ok(A.Y_,this.e,new C.fa4(this,A.i.F(this.d*0.35,1.6)-0.3))}}
C.bhw.prototype={
a4(d,e){var w=this,v=w.c.a
switch(w.b){case"fireworks":w.aVP(d,e,v)
break
case"confetti":w.bMb(d,e,v)
break
case"crown":w.bNR(d,e,v)
break
case"aurora":w.bGF(d,e,v)
break
case"champagne":w.bK3(d,e,v)
break
case"diamonds":w.bQ2(d,e,v)
break
case"starburst":w.cCu(d,e,v)
break
case"balloons":w.bGT(d,e,v)
break
case"galaxy":w.bVo(d,e,v)
break
case"redcarpet":w.cto(d,e,v)
break
case"coins":w.bLA(d,e,v)
break
case"lanterns":w.c4E(d,e,v)
break
case"hearts":w.c29(d,e,v)
break
case"petals":w.cos(d,e,v)
break
case"butterflies":w.bJ0(d,e,v)
break
case"neon":w.c8L(d,e,v)
break
case"disco":w.bQd(d,e,v)
break
case"sunrise":w.cE9(d,e,v)
break
case"pearls":w.cnw(d,e,v)
break
case"snow":w.cCb(d,e,v)
break
case"laurel":w.c4K(d,e,v)
break
case"ribbons":w.cvU(d,e,v)
break
case"kente":w.c4s(d,e,v)
break
case"trophy":w.cHV(d,e,v)
break
case"shooting":w.czW(d,e,v)
break
case"bokeh":w.bHe(d,e,v)
break
case"orbits":w.cl6(d,e,v)
break
case"flowers":w.bUC(d,e,v)
break
case"music":w.c8t(d,e,v)
break
case"mandala":w.c6U(d,e,v)
break
case"sparklers":w.cCi(d,e,v)
break
case"city":w.bKR(d,e,v)
break}},
te(d,e,f,g,h){var w,v,u,t,s
if(h<=0.01)return
w=$.S()
v=B.L()
v.r=g.j(A.i.D(h,0,1)).gp(0)
v.a=A.pe
u=new B.aH(w.r,A.aj,null,null,B.a([],x.v))
w=e.a
t=e.b
s=t-f
u.E(new B.aZ(w,s))
u.E(new B.ce(w,t,w+f,t))
u.E(new B.ce(w,t,w,t+f))
u.E(new B.ce(w,t,w-f,t))
u.E(new B.ce(w,t,w,s))
u.E(new B.bw())
d.af(u,v)
d.O(e,f*0.18,v)},
m4(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o=e.a,n=e.b,m=Math.min(o,n)
for(w=Math.max(4,A.i.V(g*this.d)),v=i+3,u=i+4,t=i+1,s=i+2,r=i+5,q=0;q<w;++q){p=(Math.sin(f*(1.2+C.cZ(q,v)*2.5)+C.cZ(q,u)*6.28)+1)/2
this.te(d,new B.r(C.cZ(q,t)*o,C.cZ(q,s)*n),m*(0.006+0.014*C.cZ(q,r))*(0.5+p),h,p*p)}},
aVP(c0,c1,c2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7=c1.a,b8=c1.b,b9=Math.min(b7,b8)
this.m4(c0,c1,c2,40,A.c,10)
w=x.O
v=[B.a([A.bL,A.at],w),B.a([A.ix,A.bE],w),B.a([A.eN,A.aG],w),B.a([A.c,A.aE],w)]
for(u=b9*0.005,t=b9*0.012,s=c2*30,r=46*this.d,q=b9*0.08,p=b9*0.04,o=b9*0.006,n=b9*0.008,m=0;m<7;++m){l=c2+m*2.8/7
k=A.i.bg(l/2.8)
j=A.i.F(l,2.8)/2.8
i=m*97+k*13
h=b7*(0.15+0.7*C.cZ(i,1))
g=h+b7*(C.cZ(i,2)-0.5)*0.15
f=b8*(0.12+0.35*C.cZ(i,3))
e=v[Math.abs(A.o.F(i,4))]
if(j<0.22){d=B.kM(new B.r(h,b8),new B.r(g,f),A.cj.az(0,j/0.22))
d.toString
$.S()
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.san(new B.a7(A.a5,A.a9,A.x,B.a([e[0].j(0),e[0]],w),null,null).aD(0,B.r2(new B.r(h,b8),d)))
a0.c=o
a0.d=A.bG
a1=B.kM(new B.r(h,b8),d,0.75)
a1.toString
c0.ah(a1,d,a0)
a1=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a1.r=A.c.gp(0)
c0.O(d,n,a1)}else{a2=(j-0.22)/0.78
a3=A.cj.az(0,a2)
d=1-a2
a4=d*d
d=Math.max(4,A.i.V(r))
a1=C.cZ(i,4)
if(a2<0.15){a5=1-a2/0.15
$.S()
a6=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a6.r=e[0].j(0.5*a5).gp(0)
a6.y=new B.fT(A.G,p)
c0.O(new B.r(g,f),q*a5,a6)}for(a5=a2>0.45,a6=a4*0.8,a1=b9*(0.16+0.1*a1)*a3,a7=a2*a2*b9*0.12,a8=a7*0.8,a9=0;a9<d;++a9){b0=a9/d*3.141592653589793*2+C.cZ(i,a9+10)*0.2
b1=a1*(0.75+0.25*C.cZ(i,a9+60))
b2=new B.r(g+Math.cos(b0)*b1,f+Math.sin(b0)*b1+a7)
b3=Math.cos(b0)
b4=Math.sin(b0)
b5=(a9&1)===0?e[0]:e[1]
$.S()
b6=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b6.r=b5.j(a6).gp(0)
b6.c=u
b6.d=A.bG
b6.a=A.pe
c0.ah(new B.r(g+b3*b1*0.82,f+b4*b1*0.82+a8),b2,b6)
if(a5&&C.cZ(i,a9+120)>0.5)this.te(c0,b2,t,A.c,a4*(0.5+0.5*Math.sin(s+a9)))}}}},
bMb(a0,a1,a2){var w,v,u,t,s,r,q,p,o,n,m,l,k=a1.a,j=a1.b,i=Math.min(k,j),h=A.i.F(a2*0.25,1.6)-0.3,g=0+k,f=0+j,e=$.S(),d=B.L()
d.san(new B.a7(A.ay,A.aC,A.x,D.drT,B.a([A.i.D(h-0.15,0,1),A.i.D(h,0,1),A.i.D(h+0.15,0,1)],x.x),null).aD(0,new B.a4(0,0,g,f)))
a0.aF(new B.a4(0,0,g,f),d)
d=Math.max(4,A.i.V(150*this.d))
for(g=a0.c,w=j+i*0.1,j=i*0.05,f=a2*4,v=x.v,u=0;u<d;++u){t=A.i.F(a2*(i*(0.08+0.12*C.cZ(u,1)))+C.cZ(u,2)*w,w)
s=C.cZ(u,3)
r=Math.sin(a2*(0.8+C.cZ(u,4))+u)
q=i*(0.012+0.012*C.cZ(u,5))
p=Math.cos(a2*(2+3*C.cZ(u,6))+u)
o=D.RZ[A.o.D(A.i.bg(C.cZ(u,7)*5),0,4)]
J.br(g.save())
g.translate(s*k+r*i*0.04,t-j)
g.rotate((a2*(0.6+C.cZ(u,8)*2)+u)*180/3.141592653589793,0,0)
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
t=Math.abs(p)
n.r=B.ap(o,A.c,t*0.4).j(0.95).gp(0)
if(A.o.F(u,5)===0){t=B.a([],v)
m=new B.aH(e.r,A.aj,null,null,t)
e=-q*2
t.push(new B.aZ(e,0))
m.ab()
for(l=1;l<=8;++l){s=new B.aq(e+l*q*0.5,Math.sin(l*1.2+f)*q*0.5)
t.push(s)
r=m.f
if(r!=null)s.ak(r)
m.ab()}e=$.S()
t=new B.ar(A.S,A.Q,A.V,A.X,A.U)
t.r=B.b1(n.r).gp(0)
t.b=A.aa
t.c=q*0.35
a0.af(m,t)}else a0.aF(B.bW(A.J,q*1.8*A.i.D(t,0.15,1),q),n)
g.restore()}this.m4(a0,a1,a2,25,A.bL,30)},
bNR(a8,a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4=null,a5=a9.a,a6=a9.b,a7=Math.min(a5,a6)
a5/=2
a6*=0.5
w=new B.r(a5,a6)
for(v=x.O,u=a7*1.2,t=b0*0.12,s=x.v,r=0;r<16;++r){q=r/16*3.141592653589793*2+t
p=$.S()
o=B.a([],s)
n=new B.aH(p.r,A.aj,a4,a4,o)
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
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.san(new B.bS(A.z,0.5,A.x,a4,0,B.a([A.bL.j(0.22),D.blh],v),a4,a4).aD(0,B.bV(w,u)))
a8.af(n,p)}l=a7*0.28
k=a7*0.16
a5-=l/2
a6=a6-a7*0.15-k
j=new B.aH($.S().r,A.aj,a4,a4,B.a([],s))
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
i=A.i.D(b0/1.8,0,1)
t=i>=1
if(t){o=B.L()
o.san(new B.a7(A.aZ,A.b4,A.x,D.dqu,a4,a4).aD(0,new B.a4(a5,a6,p,v)))
a8.af(j,o)
for(v=[D.eO1,D.eH5,D.eXI],p=v.length,o=a6+k*0.78,m=a7*0.016,h=a7*0.005,g=o-h,f=0;f<p;++f){e=v[f]
d=e.b
e=a5+l*e.a
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.r=d.gp(d)
a8.O(new B.r(e,o),m,a0)
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.r=A.ab.gp(0)
a8.O(new B.r(e-h,g),h,a0)}for(v=[0,0.5,1],p=v.length,o=a7*0.014,f=0;f<p;++f){a1=v[f]
m=a1===0.5?0:u
h=new B.ar(A.S,A.Q,A.V,A.X,A.U)
h.r=A.hL.gp(0)
a8.O(new B.r(a5+l*a1,a6+m),o,h)}}for(v=B.BO(j),u=B.a([],x.X),p=new B.uS(v,!1,u),o=v.a,m=a7*0.008;p.C();){h=p.c
if(h===0||p.f)B.bi(B.jN(y.M));--h
p.jP()
g=u[h].b
g===$&&B.c()
g=g.a.length()
e=v.b
a0=B.a([],s)
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a2.b=A.aa
a2.c=m
a2.e=A.dP
a2.r=A.bL.gp(0)
a8.af(new B.aH(o,e,a4,new B.ca([new B.BP(p,h),0,g*i,!0]),a0),a2)}if(t){a3=A.i.F(b0*0.5,1)
this.te(a8,new B.r(a5+l*a3,a6+k*0.5),a7*0.04,A.c,Math.sin(a3*3.141592653589793))}this.m4(a8,a9,b0,45,A.bL,40)},
bGF(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=a7.a,a4=a7.b,a5=Math.min(a3,a4)
this.m4(a6,a7,a8,60,A.c,50)
w=[D.f9z,D.f9g,D.f99,D.faM]
for(v=a5*0.14,u=a5*0.06,t=a5*0.01,s=a3+10,r=a3/40,q=x.v,p=0;p<4;++p){o=w[p].a
n=o[0]
m=o[1]
l=o[2]
k=o[3]
o=$.S()
j=B.a([],q)
i=new B.aH(o.r,A.aj,null,null,j)
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
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.b=A.aa
o.c=v
o.r=n.j(0.28).gp(0)
o.a=A.pe
o.y=new B.fT(A.G,u)
a6.af(i,o)
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.b=A.aa
o.c=t
o.r=n.j(0.55).gp(0)
o.a=A.pe
o.y=new B.fT(A.G,t)
a6.af(i,o)}for(v=Math.max(4,A.i.V(40*this.d)),a1=a4+20,u=a8*a5,a2=0;a2<v;++a2){t=A.i.F(u*(0.05+0.06*C.cZ(a2,1))+C.cZ(a2,2)*a1,a1)
s=C.cZ(a2,3)
r=Math.sin(a8+a2)
q=C.cZ(a2,4)
$.S()
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=A.ws.j(0.4+0.5*C.cZ(a2,5)).gp(0)
o.a=A.pe
a6.O(new B.r(s*a3+r*a5*0.02,a4-t),a5*(0.003+0.004*q),o)}},
bK3(d,a0,a1){var w,v,u,t,s,r,q,p,o,n=null,m=a0.a,l=a0.b,k=Math.min(m,l),j=Math.sin(a1*1.5),i=m/2,h=l*0.5,g=k*0.55,f=$.S(),e=B.L()
e.san(new B.bS(A.z,0.5,A.x,n,0,B.a([A.i8.j(0.25+0.1*j),D.a_8],x.O),n,n).aD(0,B.bV(new B.r(i,h),g)))
d.O(new B.r(i,h),g,e)
for(j=k*0.008,i=a1*3,h=x.v,g=f,w=0;w<6;++w){v=(w&1)===0
f=B.a([],h)
u=new B.aH(g.r,A.aj,n,n,f)
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
f=new B.ar(A.S,A.Q,A.V,A.X,A.U)
f.b=A.aa
f.c=j
f.r=D.RZ[A.o.F(w,4)].j(0.7).gp(0)
d.af(u,f)}for(j=Math.max(4,A.i.V(110*this.d)),i=l*0.08,q=l*1.1,h=a1*2,w=0;w<j;++w){p=l-A.i.F(a1*(k*(0.07+0.12*C.cZ(w,1)))+C.cZ(w,2)*q,q)
s=m*(0.1+0.8*C.cZ(w,3))+Math.sin(h+w)*k*0.015
o=k*(0.004+0.012*C.cZ(w,4))
if(p<i){this.te(d,new B.r(s,p),o*2.4,A.bL,A.i.D(p/i,0,1))
continue}$.S()
g=new B.ar(A.S,A.Q,A.V,A.X,A.U)
g.b=A.aa
f=o*0.25
g.c=Math.max(0.8,f)
g.r=A.rI.j(0.75).gp(0)
d.O(new B.r(s,p),o,g)
g=o*0.35
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=A.c.j(0.8).gp(0)
d.O(new B.r(s-g,p-g),f,e)}},
bQ2(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=null,a7=b1.a,a8=b1.b,a9=Math.min(a7,a8)
this.m4(b0,b1,b2,30,A.lk,60)
for(w=Math.max(4,A.i.V(42*this.d)),v=b0.c,u=b2*2.2,t=b2*a9,s=b2*0.7,r=b2*0.8,q=x.v,p=0;p<w;++p){o=a9*(0.025+0.035*C.cZ(p,1))
n=a8+o*4
m=A.i.F(t*(0.04+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)-o*2
l=C.cZ(p,4)*a7+Math.sin(s+p)*a9*0.02
J.br(v.save())
v.translate(l,m)
v.rotate(Math.sin(r+p)*0.5*180/3.141592653589793,0,0)
k=o*1.2
j=-k
i=j*0.35
h=$.S()
g=B.a([],q)
f=new B.aH(h.r,A.aj,a6,a6,g)
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
g=new B.ar(A.S,A.Q,A.V,A.X,A.U)
g.san(new B.a7(A.ay,A.aC,A.x,D.dlW,a6,a6).aD(0,B.bW(A.J,k*1.2,o)))
b0.af(f,g)
a4=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a4.b=A.aa
a4.c=Math.max(0.6,o*0.03)
a4.r=A.c.j(0.7).gp(0)
b0.ah(new B.r(e,i),new B.r(a0,i),a4)
b0.ah(new B.r(h,j),new B.r(0,a1),a4)
b0.ah(new B.r(d,j),new B.r(0,a1),a4)
v.restore()
a5=Math.sin(u+p*1.7)
if(a5>0.85)this.te(b0,new B.r(l+o*0.2,m-o*0.3),o*0.9,A.c,(a5-0.85)/0.15)}},
cCu(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
h/=2
g/=2
w=new B.r(h,g)
for(v=x.v,u=a0*0.15,t=0;t<28;++t){s=t/28*3.141592653589793*2-u
r=(t&1)===0
q=r?0.05:0.025
p=$.S()
o=B.a([],v)
n=new B.aH(p.r,A.aj,null,null,o)
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
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=A.bL.j(r?0.12:0.07).gp(0)
d.af(n,p)}for(v=f*0.008,l=0;l<3;++l){k=A.i.F(a0+l*0.6,1.8)/1.8
$.S()
u=new B.ar(A.S,A.Q,A.V,A.X,A.U)
u.b=A.aa
r=1-k
u.c=v*r
u.r=A.bL.j(r*0.6).gp(0)
d.O(w,f*(0.15+0.6*k),u)}j=A.i.bg(a0/2.4)
k=A.i.F(a0,2.4)/2.4
for(v=Math.max(4,A.i.V(70*this.d)),u=j+1,r=(1-k)*1.2,t=0;t<v;++t){s=C.cZ(t,j)*3.141592653589793*2
i=f*(0.1+0.55*D.bzH.az(0,k)*(0.5+0.5*C.cZ(t,u)))
this.te(d,new B.r(h+Math.cos(s)*i,g+Math.sin(s)*i),f*(0.01+0.012*C.cZ(t,3)),D.RZ[A.o.D(A.i.bg(C.cZ(t,4)*5),0,4)],r)}},
bGT(a5,a6,a7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=a6.a,a3=a6.b,a4=Math.min(a2,a3)
for(w=this.d,v=Math.max(4,A.i.V(22*w)),u=x.O,t=x.v,s=a7*2,r=a7*a4,q=a7*0.9,p=0;p<v;++p){o=a4*(0.045+0.035*C.cZ(p,1))
n=a3+o*6
m=o*2
l=a3+m-A.i.F(r*(0.05+0.05*C.cZ(p,2))+C.cZ(p,3)*n,n)
k=C.cZ(p,4)*a2+Math.sin(q+p*1.3)*a4*0.03
j=D.aBv[A.o.F(p,6)]
i=$.S()
h=B.a([],t)
g=new B.aH(i.r,A.aj,a1,a1,h)
i=l+o*1.15
h.push(new B.aZ(k,i))
g.ab()
for(f=1;f<=6;++f){e=new B.aq(k+Math.sin(f*1.4+s+p)*o*0.15,i+f*o*0.35)
h.push(e)
d=g.f
if(d!=null)e.ak(d)
g.ab()}h=$.S()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.b=A.aa
e.c=Math.max(0.7,o*0.03)
e.r=A.c.j(0.6).gp(0)
a5.af(g,e)
a0=B.bW(new B.r(k,l),o*2.3,m)
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e=B.ap(j,A.w,0.35)
e.toString
m.san(new B.bS(D.b3J,0.9,A.x,a1,0,B.a([A.c,j,e],u),At.Sj,a1).aD(0,a0))
a5.c0(a0,m)
m=B.a([],t)
h=new B.aH(h.r,A.aj,a1,a1,m)
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
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m.r=B.ap(j,A.w,0.3).gp(0)
a5.af(h,m)}for(w=Math.max(4,A.i.V(60*w)),n=a3+20,a3=a5.c,v=a7*3,u=a4*0.012,t=a4*0.02,p=0;p<w;++p){s=A.i.F(r*(0.1+0.1*C.cZ(p,11))+C.cZ(p,12)*n,n)
q=C.cZ(p,13)
J.br(a3.save())
a3.translate(q*a2,s-10)
a3.rotate((v+p)*180/3.141592653589793,0,0)
s=B.bW(A.J,t,u)
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=D.aBv[A.o.F(p,6)].j(0.85).gp(0)
a5.aF(s,q)
a3.restore()}},
bVo(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=b1.a,a5=b1.b,a6=Math.min(a4,a5),a7=a4/2,a8=a5/2,a9=new B.r(a7,a8)
this.m4(b0,b1,b2,50,A.c,70)
for(w=[D.f9J,D.f9m,D.f9s],v=w.length,u=b2*0.3,t=x.O,s=0;s<v;++s){r=w[s].a
q=r[0]
p=r[1]
o=r[2]
n=r[3]
m=new B.r(a7+(p*a4+Math.sin(u)*a6*0.03),a8+o*a5)
r=a6*n
$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.san(new B.bS(A.z,0.5,A.x,a3,0,B.a([q.j(0.32+0.08*Math.sin(b2)),q.j(0)],t),a3,a3).aD(0,B.bV(m,r)))
b0.O(m,r,l)}w=Math.max(4,A.i.V(420*this.d))
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
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.r=f.j(0.5+0.5*C.cZ(k,4)).gp(0)
d.a=A.pe
b0.O(new B.r(a7+r*h,a8+l*h*0.62),a6*(0.0025+0.004*e),d)}a7=a6*0.12
$.S()
a8=B.L()
a8.san(new B.bS(A.z,0.5,A.x,a3,0,B.a([A.rI.j(0.55),D.akl],t),a3,a3).aD(0,B.bV(a9,a7)))
b0.O(a9,a7,a8)
a0=A.i.F(b2,3.5)/3.5
if(a0<0.25){a1=A.i.bg(b2/3.5)
a2=new B.r(a4*(0.1+0.5*C.cZ(a1,9)),a5*0.1*C.cZ(a1,8))
a4=B.kM(a2,a2.a5(0,new B.r(v,a6*0.3)),a0/0.25)
a4.toString
a5=B.kM(a2,a4,0.6)
a5.toString
a7=B.L()
a7.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.c],t),a3,a3).aD(0,B.r2(a2,a4)))
a7.c=a6*0.005
a7.d=A.bG
b0.ah(a5,a4,a7)}},
cto(b8,b9,c0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4=null,b5=b9.a,b6=b9.b,b7=Math.min(b5,b6)
for(w=x.O,v=-b7*0.05,u=b6*1.3,t=x.v,s=0;s<3;++s){r=b5*(0.2+s*0.3)
q=1.5707963267948966+Math.sin(c0*(0.5+s*0.15)+s*2)*0.45
p=$.S()
o=B.a([],t)
n=new B.aH(p.r,A.aj,b4,b4,o)
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
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.san(new B.bS(A.z,0.5,A.x,b4,0,B.a([A.rI.j(0.28),D.akl],w),b4,b4).aD(0,B.bV(new B.r(r,v),u)))
p.a=A.pe
b8.af(n,p)}for(v=[!0,!1],r=v.length,p=b6*0.52,o=b7*0.012,m=b6*0.5,l=b6*0.55,k=0+b6,j=b5*0.16,i=j*0.55,h=j*0.9,g=j*0.62,f=j*0.95,e=b5-f,d=b5-g,a0=b5-h,a1=b5-i,a2=b5-j,a3=0;a3<r;++a3){a4=v[a3]
a5=a4?0:a2
a6=B.a([],w)
for(a7=0;a7<7;++a7)a6.push((a7&1)===0?A.eq:A.er)
a8=$.S()
a9=B.a([],t)
n=new B.aH(a8.r,A.aj,b4,b4,a9)
a9.push(new B.aZ(a4?0:b5,0))
n.ab()
a8=new B.aq(a4?j:a2,0)
a9.push(a8)
b0=n.f
if(b0!=null)a8.ak(b0)
n.ab()
a8=a4?i:a1
a8=new B.ce(a8,l,a4?h:a0,b6)
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
a8=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a8.san(new B.a7(A.a5,A.a9,A.x,a6,b4,b4).aD(0,new B.a4(a5,0,a5+j,k)))
b8.af(n,a8)
a8=a4?g:d
a9=a4?f:e
b0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
b0.r=A.i8.gp(0)
b0.c=o
b0.d=A.bG
b8.ah(new B.r(a8,m),new B.r(a9,p),b0)}b1=new B.aH($.S().r,A.aj,b4,b4,B.a([],t))
w=b6*0.78
b1.E(new B.aZ(b5*0.42,w))
b1.E(new B.aq(b5*0.58,w))
b1.E(new B.aq(b5*0.8,b6))
b1.E(new B.aq(b5*0.2,b6))
b1.E(new B.bw())
v=B.L()
v.san(D.caT.aD(0,new B.a4(0,w,0+b5,w+b6*0.22)))
b8.af(b1,v)
for(w=Math.max(4,A.i.V(80*this.d)),b2=b6+10,b6=c0*b7,v=c0*5,s=0;s<w;++s){b3=A.i.F(b6*(0.05+0.07*C.cZ(s,1))+C.cZ(s,2)*b2,b2)
t=C.cZ(s,3)
r=Math.sin(c0+s)
p=Math.sin(v+s)
this.te(b8,new B.r(b5*(0.15+0.7*t)+r*b7*0.01,b3),b7*(0.006+0.008*C.cZ(s,4)),A.bL,0.3+0.7*((p+1)/2))}},
bLA(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k=e.a,j=e.b,i=Math.min(k,j)
for(w=Math.max(4,A.i.V(55*this.d)),v=f*i,u=0;u<w;++u){t=i*(0.02+0.02*C.cZ(u,1))
s=j+t*4
r=t*2
q=A.i.F(v*(0.12+0.12*C.cZ(u,2))+C.cZ(u,3)*s,s)-r
p=C.cZ(u,4)*k
o=Math.cos(f*(2+3*C.cZ(u,5))+u)
n=Math.abs(o)
m=B.bW(new B.r(p,q),r,r*A.i.D(n,0.12,1))
$.S()
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.san(new B.a7(A.ay,A.aC,A.x,o>0?D.dCU:D.cRw,null,null).aD(0,m))
d.c0(m,r)
r=-(t*0.22)
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.b=A.aa
l.c=Math.max(0.6,t*0.08)
l.r=D.bwi.gp(0)
d.c0(new B.a4(m.a-r,m.b-r,m.c+r,m.d+r),l)
if(n>0.97)this.te(d,new B.r(p+t*0.3,q-t*0.4),t*0.9,A.c,0.9)}this.m4(d,e,f,30,A.bL,110)},
c4E(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
this.m4(a2,a3,a4,50,A.c,120)
for(w=Math.max(4,A.i.V(26*this.d)),v=x.O,u=a4*a1,t=a4*0.6,s=a4*9,r=x.v,q=0;q<w;++q){p=a1*(0.035+0.035*C.cZ(q,1))
o=a0+p*4
n=a0+p*2-A.i.F(u*(0.03+0.04*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)*d+Math.sin(t+q)*a1*0.03
l=0.8+0.2*Math.sin(s+q*3)
k=p*2.2
j=$.S()
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.san(new B.bS(A.z,0.5,A.x,e,0,B.a([Aw.yC.j(0.45*l),D.aiV],v),e,e).aD(0,B.bV(new B.r(m,n),k)))
a2.O(new B.r(m,n),k,i)
i=B.a([],r)
h=new B.aH(j.r,A.aj,e,e,i)
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
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j=B.ap(D.blz,A.c,0.2*l)
j.toString
k.san(new B.a7(A.aZ,A.b4,A.x,B.a([D.br5,j],v),e,e).aD(0,B.bW(new B.r(m,n),p*1.4,p)))
a2.af(h,k)
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.r=A.c.j(l).gp(0)
a2.O(new B.r(m,n+p*0.55),p*0.12,k)}},
c29(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=null,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
for(w=Math.max(4,A.i.V(40*this.d)),v=x.O,u=a3.c,t=x.v,s=a5*a2,r=a5*1.3,q=a5*6,p=0;p<w;++p){o=a2*(0.02+0.03*C.cZ(p,1))
n=a1+o*4
m=A.i.F(s*(0.05+0.06*C.cZ(p,2))+C.cZ(p,3)*n,n)
l=C.cZ(p,4)
k=Math.sin(r+p)
j=1+0.12*Math.max(0,Math.sin(q+p))
J.br(u.save())
u.translate(l*a0+k*a2*0.03,a1+o*2-m)
u.rotate(Math.sin(a5+p)*0.3*180/3.141592653589793,0,0)
u.scale(j,j)
m=$.S()
l=B.a([],t)
i=new B.aH(m.r,A.aj,d,d,l)
m=o*0.9
l.push(new B.aZ(0,m))
i.ab()
k=-o
h=k*0.2
g=k*1.6
k=new B.kq(k*1.8,h,k*0.9,g,0,k*0.55)
l.push(k)
f=i.f
if(f!=null)k.ak(f)
i.ab()
m=new B.kq(m,g,o*1.8,h,0,m)
l.push(m)
k=i.f
if(k!=null)m.ak(k)
i.ab()
m=new B.bw()
l.push(m)
l=i.f
if(l!=null)m.ak(l)
i.ab()
e=D.dbY[A.o.F(p,5)]
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l=B.ap(e,A.w,0.25)
l.toString
m.san(new B.bS(A.nj,0.5,A.x,d,0,B.a([A.c,e,l],v),Aq.Sc,d).aD(0,B.bV(A.J,o*1.4)))
a3.af(i,m)
u.restore()}this.m4(a3,a4,a5,30,A.ix,130)},
cos(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=x.v,t=a1*e,s=a1*0.9,r=a1*2,q=0;q<w;++q){p=e*(0.015+0.02*C.cZ(q,1))
o=f+p*4
n=A.i.F(t*(0.05+0.06*C.cZ(q,2))+C.cZ(q,3)*o,o)
m=C.cZ(q,4)
l=Math.sin(s+q*0.7)
J.br(v.save())
v.translate(m*g+l*e*0.06,n-p*2)
v.rotate((a1*(0.5+C.cZ(q,5))+q)*180/3.141592653589793,0,0)
n=Math.cos(r+q)
v.scale(1,0.4+0.6*Math.abs(n))
n=$.S()
m=B.a([],u)
k=new B.aH(n.r,A.aj,h,h,m)
n=-p
m.push(new B.aZ(0,n))
k.ab()
l=n*0.2
j=new B.ce(p,l,0,p)
m.push(j)
i=k.f
if(i!=null)j.ak(i)
k.ab()
n=new B.ce(n,l,0,n)
m.push(n)
l=k.f
if(l!=null)n.ak(l)
k.ab()
n=new B.bw()
m.push(n)
m=k.f
if(m!=null)n.ak(m)
k.ab()
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m=(q&1)===0?D.cLA:D.dni
n.san(new B.a7(A.a5,A.a9,A.x,m,h,h).aD(0,B.bV(A.J,p)))
d.af(k,n)
v.restore()}this.m4(d,a0,a1,25,A.bL,140)},
bJ0(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=null,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
this.m4(b1,b2,b3,40,A.bL,150)
for(w=Math.max(4,A.i.V(16*this.d)),v=b1.c,u=x.v,t=b3*9,s=b3*0.5,r=0;r<w;++r){q=b0*(0.035+0.025*C.cZ(r,1))
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
a5=new B.aH(a3.r,A.aj,a7,a7,a4)
a4.push(new B.aZ(0,0))
a5.ab()
a3=new B.kq(e,d,l,a0,g,0)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.kq(q,g,f,q,0,g)
a4.push(a3)
a6=a5.f
if(a6!=null)a3.ak(a6)
a5.ab()
a3=new B.bw()
a4.push(a3)
a4=a5.f
if(a4!=null)a3.ak(a4)
a5.ab()
a3=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3.san(new B.a7(A.a5,A.a9,A.x,h?D.dn0:D.dpZ,a7,a7).aD(0,new B.a4(0,m,k,j)))
b1.af(a5,a3)
a3=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3.b=A.aa
a3.c=Math.max(0.6,i)
a3.r=D.Ce.gp(0)
b1.af(a5,a3)
v.restore()}$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.r=D.bvv.gp(0)
p.c=q*0.1
p.d=A.bG
b1.ah(new B.r(0,m*0.3),new B.r(0,q*0.4),p)
v.restore()}},
c8L(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=e.a,i=e.b,h=Math.min(j,i),g=new B.r(j/2,i/2)
for(w=f*0.45,v=h*0.012,u=0;u<4;++u){t=A.i.F(w+u/4,1)
s=h*(0.2+0.7*t)
$.S()
r=new B.ar(A.S,A.Q,A.V,A.X,A.U)
r.b=A.aa
r.c=v
r.r=D.aCG[u].j((1-t)*0.9).gp(0)
r.y=new B.fT(A.G,v)
q=s*0.3
d.aq(B.bx(B.bW(g,s,s*1.6),new B.aP(q,q)),r)}p=j/28
for(j=p*0.15,w=p*0.7,v=p*0.3,q=h*0.01,o=0;o<28;++o){n=i*(0.05+0.18*(0.5+0.5*Math.sin(f*(3+C.cZ(o,1)*4)+o)))
m=D.aCG[A.o.F(o,4)]
l=o*p+j
k=i-n
k=B.bx(new B.a4(l,k,l+w,k+n),new B.aP(v,v))
$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=m.j(0.85).gp(0)
l.y=new B.fT(A.aeN,q)
d.aq(k,l)}},
bQd(a2,a3,a4){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=a3.a,a0=a3.b,a1=Math.min(d,a0)
d/=2
w=a1*0.12
v=new B.r(d,w)
u=a1*0.09
for(t=Math.max(4,A.i.V(60*this.d)),s=a4*0.6,a0*=0.55,r=a1*0.004,q=0;q<t;++q){p=C.cZ(q,1)*3.141592653589793*2+s
o=a1*(0.2+0.8*C.cZ(q,2))
n=Math.cos(p)
m=Math.sin(p)
l=[A.c,A.bL,A.ph,A.dy][A.o.F(q,4)]
k=C.cZ(q,3)
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=l.j(0.75).gp(0)
j.a=A.pe
j.y=new B.fT(A.G,r)
a2.O(new B.r(d+n*o*1.4,a0+m*o*0.5),a1*(0.008+0.01*k),j)}a0=$.S()
t=B.L()
t.r=A.aF.gp(0)
t.c=1.2
a2.ah(new B.r(d,0),new B.r(d,w-u),t)
t=B.L()
t.r=A.d_.gp(0)
a2.O(v,u,t)
t=a2.c
J.br(t.save())
a0=new B.aH(a0.r,A.aj,null,null,B.a([],x.v))
a0.E(new B.jz(B.bV(v,u)))
a2.mx(0,a0)
i=u/4
for(a0=a4*i*2,s=i*0.9,r=a4*4,h=-4;h<4;++h)for(n=w+h*i,m=n+s,k=h*2.3,g=-6;g<6;++g){j=d+g*i+A.i.F(a0,i)
f=Math.sin(g*1.7+k+r)
$.S()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.r=B.ap(A.bj,A.c,0.4+0.6*((f+1)/2)).gp(0)
a2.aF(new B.a4(j,n,j+s,m),e)}t.restore()
d=-u*0.4
this.te(a2,v.a5(0,new B.r(d,d)),u*0.6,A.c,0.6+0.4*Math.sin(a4*5))},
cE9(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=a0.a,i=a0.b,h=Math.min(j,i),g=j/2,f=i*(1.05-0.25*A.cj.az(0,A.i.D(a1/3,0,1))),e=new B.r(g,f)
for(w=a1*0.3,v=x.v,u=0;u<20;++u){t=3.141592653589793+u/19*3.141592653589793+Math.sin(w)*0.03
s=$.S()
r=B.a([],v)
q=new B.aH(s.r,A.aj,k,k,r)
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
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=A.bL.j(0.1).gp(0)
d.af(q,s)}g=h*0.5
$.S()
f=B.L()
f.san(new B.bS(A.z,0.5,A.x,k,0,B.a([D.bgJ.j(0.6),D.aiV],x.O),k,k).aD(0,B.bV(e,g)))
d.O(e,g,f)
f=h*0.2
g=B.L()
g.san(D.eEq.aD(0,B.bV(e,f)))
d.O(e,f,g)
for(g=a1*h*0.03,f=j*1.4,w=j*0.2,v=h*0.35,s=h*0.07,r=h*0.06,p=h*0.03,o=h*0.18,u=0;u<5;++u){n=A.i.F(g*(1+u*0.3)+C.cZ(u,1)*j*1.4,f)-w
m=i*(0.15+0.12*u)
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=A.c.j(0.18).gp(0)
d.c0(B.bW(new B.r(n,m),s,v),l)
d.c0(B.bW(new B.r(n+r,m-p),s,o),l)}this.m4(d,a0,a1,20,A.hL,180)},
cnw(d,a0,a1){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=null,g=a0.a,f=a0.b,e=Math.min(g,f)
for(w=g+10,v=g/30,u=x.v,t=0;t<4;++t){s=$.S()
r=B.a([],u)
q=new B.aH(s.r,A.aj,h,h,r)
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
s=new B.ar(A.S,A.Q,A.V,A.X,A.U)
s.r=B.ap(A.cG,A.jk,t/3).j(0.55).gp(0)
d.af(q,s)}for(w=Math.max(4,A.i.V(45*this.d)),l=f*0.95,f*=0.9,v=a1*e,k=0;k<w;++k){j=e*(0.012+0.02*C.cZ(k,1))
i=f-A.i.F(v*(0.04+0.05*C.cZ(k,2))+C.cZ(k,3)*l,l)
o=C.cZ(k,4)*g+Math.sin(a1+k)*e*0.02
$.S()
u=new B.ar(A.S,A.Q,A.V,A.X,A.U)
u.san(new B.bS(As.Br,0.5,A.x,h,0,D.dtC,h,h).aD(0,B.bV(new B.r(o,i),j)))
d.O(new B.r(o,i),j,u)}this.m4(d,a0,a1,25,A.c,190)},
cCb(d,e,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=e.a,g=e.b,f=Math.min(h,g)
for(w=Math.max(4,A.i.V(70*this.d)),v=d.c,u=a0*f,t=a0*0.7,s=a0*0.4,r=0;r<w;++r){q=f*(0.01+0.025*C.cZ(r,1))
p=g+q*4
o=A.i.F(u*(0.03+0.05*C.cZ(r,2))+C.cZ(r,3)*p,p)
n=C.cZ(r,4)
m=Math.sin(t+r)
$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=A.c.j(0.6+0.4*C.cZ(r,5)).gp(0)
l.c=Math.max(0.8,q*0.12)
l.d=A.bG
J.br(v.save())
v.translate(n*h+m*f*0.03,o-q*2)
v.rotate((s+r)*180/3.141592653589793,0,0)
for(o=-q,n=o*0.55,m=q*0.25,k=o*0.8,j=o*0.25,i=0;i<6;++i){v.rotate(59.99999999999999,0,0)
d.ah(A.J,new B.r(0,o),l)
d.ah(new B.r(0,n),new B.r(m,k),l)
d.ah(new B.r(0,n),new B.r(j,k),l)}v.restore()}this.m4(d,e,a0,40,A.eN,200)},
c4K(a3,a4,a5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=a4.a,a1=a4.b,a2=Math.min(a0,a1)
a0/=2
a1/=2
w=new B.r(a0,a1)
v=a2*0.4
for(u=[-1,1],t=u.length,s=13*A.i.D(a5/2,0,1),r=a3.c,q=a2*0.05,p=a2*0.02,o=q/2,n=-p,m=0+q,l=n+p*2,k=0;k<t;++k){j=u[k]
for(i=j>0,h=0;h<A.i.cB(s);++h){g=1.5707963267948966+j*(0.35+h/13*2.2)
f=Math.cos(g)
e=Math.sin(g)
J.br(r.save())
r.translate(a0+f*v,a1+e*v)
r.rotate((g+(i?0.6:2.541592653589793))*180/3.141592653589793,0,0)
f=B.bW(new B.r(o,0),p,q)
$.S()
e=new B.ar(A.S,A.Q,A.V,A.X,A.U)
e.san(D.caG.aD(0,new B.a4(0,n,m,l)))
a3.c0(f,e)
r.restore()}}$.S()
a0=B.L()
a0.b=A.aa
a0.c=a2*0.003
a0.r=D.blQ.gp(0)
a3.O(w,v*1.08,a0)
d=a5*0.8
this.te(a3,w.a5(0,new B.r(Math.cos(d)*v*1.08,Math.sin(d)*v*1.08)),a2*0.03,A.c,0.9)
this.m4(a3,a4,a5,40,A.bL,210)},
cvU(a6,a7,a8){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a7.a,a2=a7.b,a3=Math.min(a1,a2),a4=x.O,a5=[B.a([A.i8,A.hL],a4),B.a([A.pp,A.ix],a4),B.a([A.aD,A.ey],a4)]
for(w=a8*0.3,v=0+a1,u=0+a2,t=x.dB,s=t.k("bQ<ak.E>"),r=t.k("ak.E"),q=a8*1.5,p=x.v,o=x.dN,n=0;n<3;++n){m=$.S()
l=B.a([],p)
k=new B.aH(m.r,A.aj,null,null,l)
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
k.ab()}j.push(new B.r(f,e+d))}for(m=new B.ds(j,t),m=new B.bQ(m,m.gJ(0),s);m.C();){i=m.d
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
m=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l=a5[n]
i=l[0]
m.san(new B.a7(A.a5,A.a9,A.x,B.a([i,l[1],i],a4),A.mp,new B.mR(w)).aD(0,new B.a4(0,0,v,u)))
m.r=A.c.j(0.85).gp(0)
a6.af(k,m)}this.m4(a6,a7,a8,40,A.c,220)},
c4s(b0,b1,b2){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6=b1.a,a7=b1.b,a8=Math.min(a6,a7),a9=a8*0.09
for(w=[!0,!1],v=w.length,u=a9*2,t=a6+u,s=a9*0.5,r=a9*0.1,q=a9*0.35,p=a9*0.3,o=-a9*2,n=b2*a8,m=n*0.08,l=a7-a9,k=0;k<v;++k){j=w[k]
i=j?0:l
h=A.i.F(m,u)
g=o+(j?h:-h)
f=i+a9
e=i+q
d=e+p
for(;g<t;g=a1){a0=A.o.F(A.i.bg(g/s),5)
a1=g+s
$.S()
a2=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a3=Math.abs(a0)
a2.r=D.a5T[a3].gp(0)
b0.aF(new B.a4(g,i,a1,f),a2)
a2=g+r
a4=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a4.r=D.a5T[A.o.F(a3+2,5)].gp(0)
b0.aF(new B.a4(a2,e,a2+p,d),a4)}}for(w=Math.max(4,A.i.V(36*this.d)),v=b2*3,a5=a7-u,a0=0;a0<w;++a0){a7=A.i.F(n*(0.04+0.05*C.cZ(a0,1))+C.cZ(a0,2)*a5,a5)
u=C.cZ(a0,3)
t=C.cZ(a0,4)
this.te(b0,new B.r(u*a6,l-a7),a8*(0.01+0.012*t),D.a5T[A.o.F(a0,3)===0?0:4],0.5+0.5*Math.sin(v+a0))}},
cHV(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
a1/=2
a2/=2
w=new B.r(a1,a2)
for(v=a6*0.2,u=a3*0.03,t=0;t<18;++t){s=t/18*3.141592653589793*2+v
r=Math.cos(s)
q=Math.sin(s)
$.S()
p=new B.ar(A.S,A.Q,A.V,A.X,A.U)
p.c=u
p.r=A.bL.j(0.06).gp(0)
a4.ah(w,new B.r(a1+r*a3*1.2,a2+q*a3*1.2),p)}o=a3*0.16
n=a3*0.17
a2=a2-n-n
m=new B.aH($.S().r,A.aj,null,null,B.a([],x.v))
v=o/2
u=a1-v
m.E(new B.aZ(u,a2))
v=a1+v
m.E(new B.aq(v,a2))
r=a2+n*0.75
q=o*0.1
p=a1+q
l=a2+n*0.8
m.E(new B.ce(v,r,p,l))
v=a2+n*0.95
m.E(new B.aq(p,v))
p=o*0.3
k=a2+n
m.E(new B.aq(a1+p,k))
m.E(new B.aq(a1-p,k))
q=a1-q
m.E(new B.aq(q,v))
m.E(new B.aq(q,l))
m.E(new B.ce(u,r,u,a2))
m.E(new B.bw())
r=u+o
for(v=[-1,1],q=v.length,p=a3*0.012,l=a2+n*0.25,j=o*0.4,i=n*0.35,h=0;h<q;++h){g=v[h]
f=B.bW(new B.r(a1+g*o*0.5,l),i,j)
e=g<0?1.5707963267948966:-1.5707963267948966
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.b=A.aa
d.c=p
d.r=A.aE.gp(0)
a4.cQ(f,e,3.141592653589793,!1,d)}a1=B.L()
a1.san(new B.a7(A.a5,A.a9,A.x,D.dws,A.aBC,null).aD(0,new B.a4(u,a2,r,k)))
a4.af(m,a1)
a0=A.i.F(a6*0.6,1.4)
if(a0<1)this.te(a4,new B.r(u+(r-u)*a0,a2+(k-a2)*0.3),a3*0.035,A.c,Math.sin(a0*3.141592653589793))
this.bMc(a4,a5,a6,60)},
bMc(d,e,f,g){var w,v,u,t,s,r,q,p,o,n,m=e.a,l=e.b,k=Math.min(m,l)
for(w=Math.max(4,A.i.V(g*this.d)),v=l+20,l=f*k,u=d.c,t=f*3,s=k*0.012,r=k*0.02,q=f*4,p=0;p<w;++p){o=A.i.F(l*(0.1+0.1*C.cZ(p,31))+C.cZ(p,32)*v,v)
n=C.cZ(p,33)
J.br(u.save())
u.translate(n*m,o-10)
u.rotate((t+p)*180/3.141592653589793,0,0)
o=B.bW(A.J,r*A.i.D(Math.abs(Math.cos(q+p)),0.2,1),s)
$.S()
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.r=D.RZ[A.o.F(p,5)].gp(0)
d.aF(o,n)
u.restore()}},
czW(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=e.a,h=Math.min(i,e.b)
this.m4(d,e,f,70,A.c,250)
for(w=Math.max(4,A.i.V(12*this.d)),v=-h*0.1,u=h*1.4,t=-0.6*u,s=x.O,r=h*0.006,q=h*0.018,p=0;p<w;++p){o=1.6+C.cZ(p,1)*1.6
n=A.i.F(f+C.cZ(p,2)*o,o)/o
m=i*(C.cZ(p*7+A.i.bg((f+C.cZ(p,2)*o)/o),3)*1.2-0.1)
l=new B.r(m+t*n,v+u*n)
k=Math.max(0,n-0.18)
j=new B.r(m+t*k,v+u*k)
$.S()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.san(new B.a7(A.a5,A.a9,A.x,B.a([A.c.j(0),A.bL],s),null,null).aD(0,B.r2(j,l)))
k.c=r
k.d=A.bG
d.ah(j,l,k)
this.te(d,l,q,A.c,1-n)}},
bHe(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
for(w=Math.max(4,A.i.V(36*this.d)),v=f*0.2,u=f*0.17,t=f*0.8,s=0;s<w;++s){r=j*(0.03+0.09*C.cZ(s,1))
q=A.i.F(C.cZ(s,2)*l+Math.sin(v+s)*j*0.12,l)
p=A.i.F(C.cZ(s,3)*k+Math.cos(u+s*1.3)*j*0.1,k)
o=0.12+0.18*(0.5+0.5*Math.sin(t+s))
$.S()
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
m=A.o.F(s,5)
n.r=D.aEr[m].j(o).gp(0)
n.a=A.pe
n.y=new B.fT(A.G,r*0.12)
d.O(new B.r(q,p),r,n)
n=new B.ar(A.S,A.Q,A.V,A.X,A.U)
n.b=A.aa
n.c=Math.max(0.6,r*0.05)
n.r=D.aEr[m].j(o*1.4).gp(0)
d.O(new B.r(q,p),r,n)}},
cl6(d,e,f){var w,v,u,t,s,r,q,p,o,n,m,l=e.a,k=e.b,j=Math.min(l,k)
l/=2
k/=2
for(w=d.c,v=f*0.05,u=j*0.003,t=j*0.012,s=j*0.03,r=j*0.02,q=0;q<4;++q){J.br(w.save())
w.translate(l,k)
w.rotate((q*3.141592653589793/4+v)*180/3.141592653589793,0,0)
p=B.bW(A.J,j*(0.28+q*0.05),j*(0.8+q*0.12))
$.S()
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.b=A.aa
o.c=u
o.r=A.bL.j(0.45).gp(0)
d.c0(p,o)
n=f*(0.9+q*0.25)+q
m=new B.r(Math.cos(n)*(p.c-p.a)/2,Math.sin(n)*(p.d-p.b)/2)
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=A.hL.gp(0)
d.O(m,t,o)
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=A.i8.j(0.4).gp(0)
o.y=new B.fT(A.G,r)
d.O(m,s,o)
w.restore()}this.m4(d,e,f,45,A.bL,270)},
bUC(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=Math.max(4,A.i.V(22*this.d)),v=a4.c,u=x.O,t=a6*0.3,s=a1*0.94,r=a1*0.06,q=a2*0.92,p=a2*0.08,o=0;o<w;++o){n=A.o.F(o,4)
m=C.cZ(o,1)
switch(n){case 0:l=new B.r(m*a1,p)
break
case 1:l=new B.r(m*a1,q)
break
case 2:l=new B.r(r,m*a2)
break
default:l=new B.r(s,m*a2)
break}k=A.i.F(a6+C.cZ(o,2)*4,4)/4
j=A.ec.az(0,A.i.D(k/0.4,0,1))
i=k>0.85?1-(k-0.85)/0.15:1
h=a3*(0.03+0.03*C.cZ(o,3))*(j*i)
if(h<=0.5)continue
g=D.djR[A.o.F(o,5)]
J.br(v.save())
v.translate(l.a,l.b)
v.rotate((t+o)*180/3.141592653589793,0,0)
for(l=-h*0.7,j=h*0.7,i=h*1.3,f=h*1.4,e=0;e<6;++e){v.rotate(59.99999999999999,0,0)
d=B.bW(new B.r(0,l),i,j)
$.S()
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.san(new B.a7(A.aZ,A.b4,A.x,B.a([A.c,g],u),null,null).aD(0,B.bW(new B.r(0,l),f,h)))
a4.c0(d,a0)}$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=A.i8.gp(0)
a4.O(A.J,h*0.3,l)
v.restore()}this.m4(a4,a5,a6,30,A.hL,280)},
c8t(a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=a5.a,a2=a5.b,a3=Math.min(a1,a2)
for(w=[0,1],v=w.length,u=a3*0.008,t=a6*0.6,s=a2/2,r=0;r<v;++r){q=w[r]
for(p=q===0,o=a1*q,n=0;n<4;++n){m=A.i.F(t+n/4,1)
l=B.bV(new B.r(o,s),a3*(0.1+0.6*m))
k=p?-1.0471975511965976:2.0943951023931953
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.b=A.aa
j.c=u
j.r=D.aAH[n].j((1-m)*0.8).gp(0)
a4.cQ(l,k,2.0943951023931953,!1,j)}}for(w=Math.max(4,A.i.V(26*this.d)),i=a2+30,v=a6*a3,u=a6*1.5,t=a4.c,h=0;h<w;++h){g=a2-A.i.F(v*(0.06+0.06*C.cZ(h,1))+C.cZ(h,2)*i,i)
f=C.cZ(h,3)*a1+Math.sin(u+h)*a3*0.04
e=a3*(0.015+0.012*C.cZ(h,4))
d=D.aAH[A.o.F(h,4)]
$.S()
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.r=d.gp(0)
J.br(t.save())
t.translate(f,g)
t.rotate(-17.188733853924695,0,0)
a4.c0(B.bW(A.J,e,e*1.5),a0)
t.restore()
s=f+e*0.65
p=g-e*2.6
o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=d.gp(0)
o.c=Math.max(1,e*0.18)
a4.ah(new B.r(s,g),new B.r(s,p),o)
if((h&1)===0){o=new B.ar(A.S,A.Q,A.V,A.X,A.U)
o.r=d.gp(0)
o.c=Math.max(1,e*0.3)
a4.ah(new B.r(s,p),new B.r(f+e*1.6,g-e*2),o)}}},
c6U(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3=null,a4=a8.a,a5=a8.b,a6=Math.min(a4,a5)
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
a1=new B.aH(d.r,A.aj,a3,a3,a0)
a0.push(new B.aZ(0,i))
a1.ab()
d=new B.ce(h,l,0,g)
a0.push(d)
a2=a1.f
if(a2!=null)d.ak(a2)
a1.ab()
d=new B.ce(j,l,0,i)
a0.push(d)
a0=a1.f
if(a0!=null)d.ak(a0)
a1.ab()
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.b=A.aa
d.c=u
d.r=B.ap(A.bL,A.ph,m).j(0.7).gp(0)
a7.af(a1,d)
d=new B.ar(A.S,A.Q,A.V,A.X,A.U)
d.r=A.hL.j(0.8).gp(0)
a7.O(new B.r(0,k),t,d)}v.restore()}a4=a6*0.17
$.S()
a5=B.L()
a5.san(new B.bS(A.z,0.5,A.x,a3,0,B.a([A.i8.j(0.25),D.a_8],x.O),a3,a3).aD(0,B.bV(w,a4)))
a7.O(w,a4,a5)
this.m4(a7,a8,a9,30,A.bL,300)},
cCi(b1,b2,b3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=b2.a,a9=b2.b,b0=Math.min(a8,a9)
for(w=[-1,1],v=w.length,u=70*this.d,t=b0*0.003,s=a8/2,a9*=0.95,r=b3*1.3,q=b0*0.008,p=b0*0.06,o=x.O,n=0;n<v;++n){m=w[n]
l=s+m*a8*0.34
k=Math.sin(r+m)*0.12
j=l+(Math.sin(k)*b0*0.45-m*b0*0.08)
i=a9+-Math.cos(k)*b0*0.45
h=new B.r(j,i)
$.S()
g=new B.ar(A.S,A.Q,A.V,A.X,A.U)
g.r=A.bj.gp(0)
g.c=q
g.d=A.bG
b1.ah(new B.r(l,a9),h,g)
g=new B.ar(A.S,A.Q,A.V,A.X,A.U)
g.san(new B.bS(A.z,0.5,A.x,null,0,B.a([A.hL,A.i8.j(0.6),D.a_8],o),null,null).aD(0,B.bV(h,p)))
b1.O(h,p,g)
for(l=Math.max(4,A.i.V(u)),f=0;f<l;++f){e=0.5+0.4*C.cZ(f,1)
d=A.i.F(b3+C.cZ(f,2)*e,e)/e
a0=A.i.bg((b3+C.cZ(f,2)*e)/e)
a1=C.cZ(f*31+a0,3)*3.141592653589793*2
a2=b0*(0.06+0.16*C.cZ(f*17+a0,4))
g=Math.cos(a1)
a3=Math.sin(a1)
a4=j+Math.cos(a1)*a2*d
a5=i+Math.sin(a1)*a2*d
a6=new B.r(a4,a5)
a7=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a7.r=B.ap(A.hL,A.at,d).j(1-d).gp(0)
a7.c=Math.max(0.8,t)
a7.d=A.bG
a7.a=A.pe
b1.ah(new B.r(j+g*a2*d*0.6,i+a3*a2*d*0.6),a6,a7)
if(d>0.6){g=a1+0.7
b1.ah(a6,new B.r(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)
g=a1-0.7
b1.ah(a6,new B.r(a4+Math.cos(g)*a2*0.15,a5+Math.sin(g)*a2*0.15),a7)}}}this.m4(b1,b2,b3,35,A.bL,310)},
bKR(a7,a8,a9){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=a8.a,a6=a8.b
this.aVP(a7,new B.av(a5,a6*0.75),a9*0.9)
w=Math.min(a5,a6)
for(v=w*0.01,u=w*0.008,t=w*0.012,s=w*0.016,r=w*0.025,q=w*0.035,p=0,o=0;p<a5;){n=w*(0.08+0.1*C.cZ(o,1))
m=a6*(0.14+0.24*C.cZ(o,2))
l=a6-m
k=new B.a4(p,l,p+n,l+m)
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.san(D.cbE.aD(0,k))
a7.aF(k,j)
i=A.i.bg(n/r)
h=A.i.bg(m/q)
for(j=p+u,l+=t,g=o*50,f=0;f<i;++f)for(e=j+f*w*0.025,d=e+t,a0=g+f,a1=f*1.7,a2=0;a2<h;++a2){if(!(Math.sin(a9*(0.3+C.cZ(a0,a2))+a1+a2*2.3+o)>0.2))continue
a3=l+a2*w*0.035
$.S()
a4=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a4.r=A.bL.j(0.85).gp(0)
a7.aF(new B.a4(e,a3,d,a3+s),a4)}p+=n+v;++o}},
aE(d){return d.b!==this.b||d.d!==this.d}}
C.b1U.prototype={
B(d){var w,v=null,u=new C.cg9(),t=new C.cgb(this,u,d),s=B.a([u.$4$child$label$onTap$selected(B.p(v,D.atm,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v),"None",new C.cga(this),this.c.a.length===0)],x.p)
for(w=0;w<32;++w)s.push(t.$1(D.Iw[w]))
return B.bZ(A.bI,s,A.br,v,12,10)}}
C.a_N.prototype={
S(){return new C.aCd()}}
C.aCd.prototype={
gwl(){var w=this.d
return w===$?this.d=this.a.c:w},
gb2n(d){var w,v=this.e
if(v===$){w=this.a.c
v=this.e=new B.au(new B.ba(w.b,A.b6,A.aP),$.ax())}return v},
gazY(){var w,v,u=this,t=u.f
if(t===$){w=u.a.c.gaNM()
v=$.ax()
u.f!==$&&B.bD()
t=u.f=new B.au(new B.ba(w,A.b6,A.aP),v)}return t},
t(){var w=this.gb2n(0),v=$.ax()
w.U$=v
w.R$=0
w=this.gazY()
w.U$=v
w.R$=0
this.a2()},
a0o(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$a0o=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
w=7
return B.b(new B.i1().CT(90,700,700,A.eQ),$async$a0o)
case 7:q=e
if(q==null){w=1
break}w=8
return B.b(q.fq(),$async$a0o)
case 8:p=e
o=q.b.toLowerCase()
n=J.aju(o,".png")?"image/png":"image/jpeg"
r.m(new C.dj6(r,n,p))
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
return B.i($async$a0o,v)},
b2m(d){var w=null,v=A.c.j(0.07)
return B.bz(w,new B.b6(4,B.l(12),A.a1),w,w,w,w,w,w,!0,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,!0,w,A.W9,d,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w)},
B(d){var w,v,u,t,s,r,q,p=this,o=null,n=C.aiq(p.gwl().a)
if(n==null)n=A.d.gH(D.Iw)
w=p.gwl()
v=p.r
u=x.p
v=B.E(new B.an(A.a0,o,A.ad,A.t,B.a([B.bR(0,new C.Ou(p.gwl(),!1,!0,new B.bf(w.a+v,x.W)),0,0,0),B.ao(o,B.IJ(A.nQ,new C.djb(d),B.ne(o,A.b5,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o),o,o,8,o,8,o),B.ao(o,B.IJ(A.asd,new C.djc(p),B.ne(o,A.b5,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),"Play again"),o,o,o,8,8,o)],u),o),1)
w=B.d(n.b,o,o,o,o,o,o,E.aX9,o,o,o)
t=B.E(B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gb2n(0),o,o,o,o,o,2,p.b2m("Big words"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.djd(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.h6,!0,A.a7,o,A.ao,o,o,o,o),1)
s=A.c.j(0.07)
r=B.K(A.i8.j(0.6),A.r,1)
if(p.gwl().d.length===0)q=D.bYI
else{q=C.hyH(p.gwl().d)
if(q==null)q=new Uint8Array(0)
q=B.i_(B.fX(q,A.z,o,o,A.cl,A.c_,!1,o,!1,o,o),A.aq)}r=B.a([t,A.ae,B.az(o,B.p(o,q,A.f,o,o,new B.o(s,o,r,o,o,o,A.a6),o,48,o,o,o,o,o,48),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,p.gceT(),o,o,o,o,o,o,!1,A.a4)],u)
if(p.gwl().d.length!==0)r.push(B.aI(o,o,o,o,H.Qq,o,o,o,new C.dje(p),o,o,o,o,"Remove logo",o))
return B.c4(o,A.w,B.bm(!0,B.x(B.a([v,B.p(o,B.x(B.a([w,A.T,B.A(r,A.l,o,A.e,A.h,0,o,o),A.P,B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),p.gazY(),o,o,o,o,o,2,p.b2m("Line under it"),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,new C.djf(p),o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,A.dk,!0,A.a7,o,A.ao,o,o,o,o),A.af,B.dh(D.bXA,o,D.h5k,new C.djg(p,d),B.bo(A.aE,o,o,o,A.w,o,A.cp,o,new B.b9(B.l(14),A.a1),o,o,o))],u),A.al,o,A.e,A.N,0,A.p),A.f,o,o,D.b90,o,o,o,o,A.H8,o,o,o)],u),A.l,o,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),o,!1,!1,o,o)}}
C.aO2.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.a07.prototype={
S(){return new C.bj2(new B.au(A.aw,$.ax()))}}
C.bj2.prototype={
t(){var w=this.d
w.U$=$.ax()
w.R$=0
this.a2()},
B(d){var w,v,u,t,s,r,q,p,o=null,n=B.P(d).ax.a===A.I,m=n?A.c:A.a_,l=n?A.aR:A.an,k=B.aE(d,A.bZ,x.w).w,j=n?A.a_:A.c,i=B.l(28),h=B.K(n?A.bw:A.bm,A.r,1),g=x.p,f=B.A(B.a([B.E(B.d("Choose an icon",o,o,o,o,o,o,B.m(o,o,m,o,o,o,o,o,o,o,o,19,o,o,A.u,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),1),B.aI(o,o,o,o,B.W(A.cB,l,o,o,o,o),o,o,o,new C.dpU(d),o,o,o,o,o,o)],g),A.l,o,A.e,A.h,0,o,o),e=B.a([],g)
for(w=0;w<5;++w){v=D.d2j[w]
u=B.d(v.a.toUpperCase(),o,o,o,o,o,o,new B.G(!0,l,o,o,o,o,10.5,A.u,o,1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o),o,o,o)
t=B.a([],g)
for(v=J.aT(v.b);v.C();){s=v.gP(v)
r=new B.aP(12,12)
q=new B.aP(12,12)
p=n?A.c.j(0.06):A.ch
t.push(B.aM(!1,new B.be(r,r,r,r),!0,B.p(A.z,B.d(s,o,o,o,o,o,o,A.q1,o,o,o),A.f,o,o,new B.o(p,o,o,new B.be(q,q,q,q),o,o,A.n),o,44,o,o,o,o,o,44),o,!0,o,o,o,o,o,o,o,o,o,o,o,new C.dpV(this,s),o,o,o,o,o,o,o))}A.d.u(e,B.a([new B.D(A.hO,u,o),new B.D1(A.bI,6,6,A.br,t,o)],g))}e.push(A.aB)
e.push(B.d("YOUR OWN",o,o,o,o,o,o,B.m(o,o,l,o,o,o,o,o,o,o,o,10.5,o,o,A.u,o,o,!0,o,1,o,o,o,o,o,o),o,o,o))
e.push(A.P)
v=B.m(o,o,m,o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o)
u=n?A.bs:A.aS
e.push(B.A(B.a([B.E(B.aN(o,A.Z,!1,o,!0,A.t,o,B.aO(),this.d,o,o,o,o,o,2,B.bz(o,new B.b6(4,B.l(14),A.a1),o,o,o,o,o,o,!0,o,o,o,o,o,o,u,!0,o,o,o,o,o,o,o,o,o,o,o,o,o,o,"Type or paste any icon",o,o,o,o,o,!0,o,o,o,!0,!0,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o),A.y,!0,o,!0,o,!1,o,A.ak,o,o,o,o,o,o,o,o,o,1,o,o,!1,"\u2022",o,o,o,o,o,!1,o,o,!1,o,!0,o,A.ac,o,o,o,o,o,o,o,o,o,o,o,v,!0,A.a7,o,A.ao,o,o,o,o),1),A.ae,B.bI(A.aY9,o,new C.dpW(this),o)],g),A.l,o,A.e,A.h,0,o,o))
e.push(A.P)
return B.bm(!0,B.p(o,B.x(B.a([f,new B.di(1,A.cm,B.cw(e,o,o,o,o,o,A.ah,!0),o)],g),A.E,o,A.e,A.N,0,A.p),A.f,o,new B.aY(0,1/0,0,k.a.b*0.8),new B.o(j,o,h,i,o,o,A.n),o,o,o,A.uJ,A.a1f,o,o,o),!0,!1,A.ag,!0,!0)}}
C.bin.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=new B.e0()
a1.cU(this.c)
w=this.b
v=w/6.283185307179586
$.S()
u=B.L()
u.y=A.OR
t=B.L()
for(s=this.d,r=w*2,q=a3.a,p=a3.b,o=0;o<46;++o){n=a1.ai()
m=a1.ai()
l=a1.ai()
k=0.8+a1.ai()*2.2
j=Math.sin(w*(3+a1.aw(4))+o)
i=A.i.F(m-v*(0.4+l*0.9),1)
l=(n+Math.sin(r+o)*0.012)*q
h=i*p
g=new B.r(l,h)
if(a1.ai()<0.25){f=B.ap(s,A.c,0.85)
f.toString}else f=s
e=f.j(A.i.D(0.35+j*0.35,0.05,0.85))
u.r=e.j(e.a*0.5).gp(0)
a2.O(g,k*2.4,u)
t.r=e.gp(0)
a2.O(g,k,t)
if(j>0.85&&k>2){d=k*4*(j-0.85)/0.15
$.S()
a0=new B.ar(A.S,A.Q,A.V,A.X,A.U)
a0.r=e.gp(0)
a0.c=1
a2.ah(new B.r(l-d,h),new B.r(l+d,h+0),a0)
a2.ah(new B.r(l,h-d),new B.r(l+0,h+d),a0)}}},
aE(d){return d.b!==this.b}}
C.bi4.prototype={
a4(a2,a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=B.bx(new B.a4(0,0,0+a3.a,0+a3.b),A.jP),e=this.b,d=Math.sin(e*2),a0=$.S(),a1=B.L()
a1.b=A.aa
a1.c=6
w=this.c
a1.r=w.j(0.12+(0.5+d*0.5)*0.18).gp(0)
a1.y=A.n4
a2.aq(f,a1)
a1=x.v
a0=new B.aH(a0.r,A.aj,g,g,B.a([],a1))
a0.E(new B.je(f))
v=new B.am4(new B.uS(B.BO(a0),!1,B.a([],x.X))).gH(0)
a0=v.a
d=v.b
a0.jP()
u=a0.e
t=u[d].b
t===$&&B.c()
t=t.a.length()
s=e/6.283185307179586*t
w=B.ap(w,A.c,0.8)
w.toString
for(e=a0.a,r=e.a,q=t*0.14,p=0;p<2;++p){o=A.i.F(s+p*t/2,t)
for(n=0;n<10;n=m){m=n+1
l=m/10
$.S()
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
k.b=A.aa
k.d=A.bG
k.c=1.5+2*n/10
k.r=w.j(l).gp(0)
j=A.i.F(o-q*(1-n/10),t)
i=A.i.F(o-q*(1-l),t)
l=e.b
if(j<=i)a2.af(new B.aH(r,l,g,new B.ca([v,j,i,!0]),B.a([],a1)),k)
else{a2.af(new B.aH(r,l,g,new B.ca([v,j,t,!0]),B.a([],a1)),k)
a2.af(new B.aH(r,e.b,g,new B.ca([v,0,i,!0]),B.a([],a1)),k)}}a0.jP()
h=u[d].W_(o).a
$.S()
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=w.gp(0)
l.y=Ac.oA
a2.O(h,5,l)
l=new B.ar(A.S,A.Q,A.V,A.X,A.U)
l.r=A.c.gp(0)
a2.O(h,2,l)}},
aE(d){return d.b!==this.b}}
C.bra.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g=null,f=new B.e0()
f.cU(this.c)
w=e.a*(0.2+f.ai()*0.6)
v=f.h4()?-0.1:1.1
v=e.b*v
u=new B.r(w,v)
t=e.gaow()*1.4
for(s=this.d,r=x.O,q=this.b,p=q*0.25,q*=2,o=x.v,n=0;n<14;++n){m=p+n*3.141592653589793*2/14
l=0.06+0.04*Math.sin(q+n)
k=$.S()
j=B.a([],o)
i=new B.aH(k.r,A.aj,g,g,j)
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
k=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j=B.a([s.j(0.16),s.j(0)],r)
k.san(new B.am5(u,t,j,g,A.x,g,g,0))
k.y=A.kY
d.af(i,k)}},
aE(d){return d.b!==this.b}}
C.bcV.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e0()
e.cU(this.c*7+3)
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
f=new B.ar(A.S,A.Q,A.V,A.X,A.U)
f.r=g.j(h).gp(0)
f.y=new B.fT(A.G,l*0.35)
d.O(new B.r(j,i),l,f)
f=new B.ar(A.S,A.Q,A.V,A.X,A.U)
f.b=A.aa
f.c=1
f.r=B.ap(g,A.c,0.5).j(h*0.9).gp(0)
d.O(new B.r(j,i),l,f)}},
aE(d){return d.b!==this.b}}
C.bcy.prototype={
a4(d,a0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=new B.e0()
e.cU(this.c+11)
for(w=this.b,v=a0.b,u=v*0.04,t=this.d,s=v*0.08,r=a0.a,q=r/24,p=w*2,o=x.v,n=0;n<3;++n){m=v*(0.25+n*0.25+(e.ai()-0.5)*0.1)
l=v*(0.06+e.ai()*0.05)
k=e.ai()*3.141592653589793*2
j=$.S()
i=B.a([],o)
h=new B.aH(j.r,A.aj,null,null,i)
i.push(new B.aZ(0,m))
h.ab()
for(g=0;g<=r;g+=q){j=g/r
j=new B.aq(g,m+Math.sin(j*3.141592653589793*2+w+k)*l+Math.sin(j*7+p)*l*0.25)
i.push(j)
f=h.f
if(f!=null)j.ak(f)
h.ab()}$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.b=A.aa
j.c=s
j.d=A.bG
if(n===1){i=B.ap(t,A.c,0.5)
i.toString}else i=t
j.r=i.j(0.07+0.04*Math.sin(w+n)).gp(0)
j.y=new B.fT(A.G,u)
d.af(h,j)}},
aE(d){return d.b!==this.b}}
C.byk.prototype={
a4(d,e){var w,v,u=new B.a4(0,0,0+e.a,0+e.b),t=Math.sin(this.b)
$.S()
w=B.L()
t=(0.5+0.5*t)*0.12
w.san(new B.bS(A.z,0.95,A.x,null,0,B.a([A.L,A.w.j(0.28+t)],x.O),O.aBJ,null).aD(0,u))
d.aF(u,w)
w=u.cq(-3)
v=B.L()
v.b=A.aa
v.c=2
v.r=this.c.j(0.1+t).gp(0)
v.y=A.kY
d.aF(w,v)},
aE(d){return d.b!==this.b}}
C.bvi.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f=this.b/6.283185307179586*3
for(w=e.a,v=Math.abs(w),u=e.b,t=Math.abs(u),s=this.d,r=this.c*31+A.i.bg(f)*7,q=0;q<7;++q){p=new B.e0()
p.cU(r+q)
o=p.ai()*w
n=p.ai()*u
m=Math.sin(A.i.F(A.i.F(f,1)+q/7,1)*3.141592653589793)
if(m<0.05)continue
l=Math.min(v,t)*(0.02+p.ai()*0.025)*m
k=B.ap(s,A.c,0.7).j(m)
$.S()
j=new B.ar(A.S,A.Q,A.V,A.X,A.U)
j.r=k.gp(0)
j.c=1.4
j.d=A.bG
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
i=new B.ar(A.S,A.Q,A.V,A.X,A.U)
i.r=A.c.j(m*0.9).gp(0)
i.y=new B.fT(A.G,l*0.3)
d.O(new B.r(o,n),l*0.35,i)}},
aE(d){return d.b!==this.b}}
C.bup.prototype={
a4(d,e){var w,v,u=this.b/6.283185307179586*2.2-0.6
if(u<-0.3||u>1.3)return
w=new B.a4(0,0,0+e.a,0+e.b)
$.S()
v=B.L()
v.a=A.pe
v.san(new B.a7(A.ay,A.aC,A.x,B.a([A.L,B.ap(this.c,A.c,0.6).j(0.16),A.L],x.O),B.a([A.i.D(u-0.15,0,1),A.i.D(u,0,1),A.i.D(u+0.15,0,1)],x.x),null).aD(0,w))
d.aF(w,v)},
aE(d){return d.b!==this.b}}
C.bhp.prototype={
a4(d,e){var w,v,u,t,s,r=e.gdi(),q=0.55+0.45*Math.sin(this.b)
$.S()
w=B.L()
w.b=A.aa
w.c=1.4
w.d=A.bG
v=this.d
w.r=v.j(0.55+q*0.35).gp(0)
u=B.L()
u.b=A.aa
u.c=4
u.r=v.j(0.12*q).gp(0)
u.y=A.uO
r=new C.diO(this,r*0.16,d,u,w)
t=e.gdi()*0.045
r.$3(new B.r(t,t),1,1)
v=e.a-t
r.$3(new B.r(v,t),-1,1)
s=e.b-t
r.$3(new B.r(t,s),1,-1)
r.$3(new B.r(v,s),-1,-1)},
aE(d){return d.b!==this.b}}
C.ye.prototype={}
C.JK.prototype={
a7(){return"NgmySlideElementType."+this.b}}
C.atj.prototype={
a7(){return"NgmySlideAspectRatio."+this.b}}
C.vi.prototype={
a7(){return"NgmySlideShapeKind."+this.b}}
C.mZ.prototype={
a7(){return"NgmySlideLayout."+this.b}}
C.hJ.prototype={
a7(){return"NgmySlideTransition."+this.b}}
C.eO.prototype={
hT(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=w.Q,l=w.as,k=w.at,j=w.ay,i=w.ch,h=w.cx,g=w.cy,f=w.db,e=w.dy,d=w.fy
return C.em(l,g,m,n,f,j,q,o,p,w.go,s,w.a,k,d,w.fx,w.dx,w.k2,w.id,h,w.ax,i,w.CW,r,w.fr,w.k3,w.k1,e,w.b,t,v,u)},
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
u.n(0,"decoration",C.ie_(v.z))
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
C.lj.prototype={
hT(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,eO>")
n=B.C(new B.N(n,new C.clP(),m),m.k("ak.E"))
return C.t3(t,s,o,q,n,w.a,u,v,p,w.b,r)},
aj(){var w=this,v=w.c,u=w.d,t=w.e,s=w.f,r=w.r,q=w.w,p=w.x,o=w.y,n=w.z,m=B.U(n).k("N<1,a9<n,@>>")
n=B.C(new B.N(n,new C.clQ(),m),m.k("ak.E"))
return B.J(["id",w.a,"title",w.b,"notes",v,"layout",u.b,"background",t,"backgroundEnd",s,"transition",r.b,"durationSeconds",q,"slideDesignId",p,"designRevision",o,"elements",n],x.N,x.z)}}
C.hV.prototype={
gbdS(){var w=this.Q,v=w==null?null:A.a.i(w)
if(v==null)v=""
if(v.length===0)return null
return B.bj(v)},
gTk(){if(!C.km(this.w))return!1
var w=this.gbdS()
if(w==null)return!1
return new B.V(Date.now(),0,!1).d3(w.bU())},
hT(){var w,v,u,t,s,r,q,p=this,o=p.b,n=p.c,m=p.d,l=p.e,k=p.f,j=p.w,i=p.y,h=p.z,g=p.Q,f=p.as,e=p.at,d=p.ax,a0=p.ay,a1=p.ch,a2=p.CW,a3=p.cx
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
q=B.U(r).k("N<1,lj>")
r=B.C(new B.N(r,new C.clE(),q),q.k("ak.E"))
return C.Cq(g,w,a2,a3,m,l,a0,j,s,v,t,u,p.a,d,a1,p.x,o,e,f,r,n,i,h,k)},
aj(){var w,v,u=this,t=B.T(x.N,x.z)
t.n(0,"id",u.a)
t.n(0,"name",u.b)
t.n(0,"themeId",u.c)
t.n(0,"aspectRatio",u.d.b)
t.n(0,"autoAdvanceSeconds",u.e)
t.n(0,"updatedAt",u.f.aa().ag())
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
w=B.C(new B.N(w,new C.clF(),v),v.k("ak.E"))
t.n(0,"slides",w)
return t}}
C.k3.prototype={}
C.b42.prototype={
B(d){return B.cm(new C.clK(this))}}
C.aqk.prototype={
S(){return new C.bmj(null,null)}}
C.bmj.prototype={
gb2o(){var w,v=this,u=v.d
if(u===$){w=B.bn(null,A.fL,null,1,null,v)
w.cK(0)
v.d!==$&&B.bD()
v.d=w
u=w}return u},
t(){this.gb2o().t()
this.bzy()},
B(d){return B.c6(this.gb2o(),new C.dRs(),this.a.c)}}
C.aNM.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aeS.prototype={
QR(d,e,f,g){return this.bUf(d,e,f,g)},
bUf(d,e,f,g){var w=0,v=B.j(x.H),u,t,s
var $async$QR=B.e(function(h,i){if(h===1)return B.f(i,v)
for(;;)switch(w){case 0:w=3
return B.b(e.$0(),$async$QR)
case 3:s=i
if(d.e==null){w=1
break}B.a6(d,!1).N(null)
t=d.L(x.q).f
t.T(B.b2(null,null,null,null,null,A.t,null,B.d(s?f:g,null,null,null,null,null,null,null,null,null,null),null,A.ei,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$QR,v)},
B(d){var w=this,v=null,u=B.l(22),t=B.K(A.c.j(0.08),A.r,1),s=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=w.d,p=B.d(q?"Print your invoice":"Save your PDF",v,v,v,v,v,v,A.dl,A.K,v,v),o=q?"One full letter page \u2014 tap Share then Print, or open in Safari.":w.c,n=q?3:2,m=x.p
n=B.a([r,A.aO,p,A.am,B.d(o,v,n,A.a2,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m)
if(!q)A.d.u(n,B.a([A.ax,B.d(w.c,v,2,A.a2,v,v,v,B.m(v,v,A.c.j(0.45),v,v,v,v,v,v,v,v,11,v,v,A.a8,v,v,!0,v,v,v,v,v,v,v,v),A.K,v,v)],m))
n.push(A.db)
n.push(B.A(B.a([B.E(new C.af8(A.hB,"Download",A.c3,new C.eDD(w,d),!0,v),1),A.as,B.E(new C.af8(A.v2,"Share",A.bo,new C.eDE(w,d),!1,v),1),A.as,B.E(new C.af8(A.hQ,"Safari",A.b2,new C.eDF(w,d),!1,v),1)],m),A.l,v,A.e,A.h,0,v,v))
n.push(A.aB)
n.push(B.bO(!1,B.d("Cancel",v,v,v,v,v,v,B.m(v,v,A.c.j(0.6),v,v,v,v,v,v,v,v,v,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),v,v,!0,v,v,v,new C.eDG(d),v,v))
return B.bm(!0,new B.D(A.qI,B.x(B.a([B.p(v,B.x(n,A.al,v,A.e,A.h,0,A.p),A.f,v,v,new B.o(A.jn,v,t,u,s,v,A.n),v,v,v,v,A.He,v,v,1/0)],m),A.l,v,A.e,A.N,0,A.p),v),!0,!1,A.ag,!0,!0)}}
C.af8.prototype={
B(d){var w=this,v=null,u=B.l(16),t=w.r,s=t?w.e.j(0.22):A.c.j(0.06),r=B.l(16),q=B.K(t?w.e.j(0.55):A.c.j(0.1),A.r,1),p=t?w.e:A.c
p=B.W(w.c,p,v,v,v,26)
return B.aG(!1,A.a3,!0,v,B.aM(!1,u,!0,B.eC(B.x(B.a([p,A.P,B.d(w.d,v,v,v,v,v,v,B.m(v,v,A.c,v,v,v,v,v,v,v,v,12,v,v,t?A.u:A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.N,0,A.p),v,new B.o(s,v,q,r,v,v,A.n),v,D.bJA,v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.f,v,v,v,v,v,v,v),A.f,A.L,0,v,v,v,v,v,A.ai)}}
C.b40.prototype={
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=null,g=i.c,f=g.db
if(f==="__kiapo_video__"||A.a.a_(f,"__kiapo_video___"))return new C.asq(g.at,i.d,i.as,i.at,h)
switch(g.b.a){case 0:f=i.r
w=i.d
if(f){v=2*w
u=new B.Q(v,w,v,w)}else{v=6*w
u=new B.Q(v,10*w,v,12*w)}t=i.ceU().amx(1.35)
s=B.axY(h,h,h,g.w*w,h,h,!0,1.35,h,h,h)
v=g.as
r=i.bFa(v)
if(i.e&&i.w!=null)q=B.aN(h,A.Z,!1,h,!0,A.t,h,B.aO(),i.w,A.bo,h,h,h,h,2,D.c6f,A.y,!0,h,!0,h,!1,i.x,A.ak,h,h,h,new B.bf("slide_tf_"+g.a,x.W),h,A.xz,h,h,h,h,1,h,!1,"\u2022",h,i.y,h,h,h,!1,h,h,!1,h,!0,h,A.ac,h,h,h,h,h,h,h,h,h,h,s,t,!0,v,A.AX,A.ao,h,A.VN,h,h)
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
w=n?t.cPM(B.b1(g.Q).j(0.45),A.cJ):t
p=g.as
l=m?1:h
k=m?A.eS:A.F_
p=B.d(f,new B.bf("slide_txt_"+g.a+"_"+v,x.W),l,k,h,!m,s,w,p,h,h)
g=p}else{f=A.a.gX(v)
v=g.k1
p=g.r
if(v==="outline"){l=g.k2
k=l?A.VE:s
$.S()
j=B.L()
j.b=A.aa
j.c=3*w
j.e=A.dP
j.r=A.av.gp(0)
j=i.cvX(p,t,k,j)
k=g.r
w=new B.an(A.a0,h,A.ad,A.t,B.a([j,i.cvV(k,t,l?A.VE:s)],x.p),h)}else w=i.cvW(p,t,g.k2?A.VE:s,m)
v=new B.lY(w,new B.bf("slide_txt_"+g.a+"_"+f+"_"+v,x.W))
g=v}q=B.az(A.bY,g,A.y,!1,h,i.Q,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,i.z,h,h,h,h,h,h,!1,A.a4)}return new B.D(u,new B.bK(r,h,h,q,h),h)
case 1:case 4:return i.c2R()
case 3:return i.cnv()
case 2:return B.b5(h,h,h,new C.b3Y(g,h),A.h4)
case 5:g=g.r
return new C.b4_(g,!i.e&&i.z==null,h)}},
ceU(){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.c,l=B.b1(m.Q),k=m.x,j=m.y,i=m.z,h=n,g=n,f=n,e=n
switch(m.k1){case"caps":h=3*o.d
w=l
k=A.u
break
case"elegant":h=1.2*o.d
w=l
k=A.k8
j=A.cJ
break
case"shadow":v=o.d
e=B.a([new B.cU(D.aiT,new B.r(0,4*v),8*v)],x.r)
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
i=A.ne
break
case"retro":v=o.d
h=2*v
v=4*v
e=B.a([new B.cU(A.bE,new B.r(v,v),0)],x.r)
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
e=B.a([new B.cU(A.cO,A.J,8*v),new B.cU(A.aA,new B.r(0,-3*v),18*v)],x.r)
k=A.u
w=A.wg
break
case"ice":v=o.d
e=B.a([new B.cU(A.aG,A.J,10*v),new B.cU(A.cG,A.J,22*v)],x.r)
k=A.O
w=A.eN
break
case"chalk":h=o.d
e=B.a([new B.cU(l.j(0.45),A.J,3*h)],x.r)
w=l
k=A.k8
break
case"comic":v=B.ap(l,A.w,0.85)
v.toString
u=B.a([],x.r)
for(t=o.d,q=0;q<8;++q){p=D.dcO[q]
u.push(new B.cU(v,new B.r(p.a*t,p.b*t),0))}u.push(new B.cU(v,new B.r(5*t,6*t),0))
e=u
w=l
k=A.u
break
case"gold":$.S()
f=B.L()
v=o.d
f.san(D.c9_.aD(0,new B.a4(0,0,0+900*v,0+m.w*v*1.6)))
e=B.a([new B.cU(A.FU,new B.r(0,3*v),5*v)],x.r)
w=l
k=A.u
break
case"sunset":$.S()
f=B.L()
v=o.d
f.san(D.c9m.aD(0,new B.a4(0,0,0+900*v,0+m.w*v*1.6)))
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
m=m!==0?B.b1(m):g
return B.m(n,m,u,n,i,n,n,n,n,n,n,v*o.d,j,n,k,f,1.25,!0,n,h,n,n,n,e,n,n)},
aBY(d,e,f,g,h){var w,v,u,t,s=null,r=this.c,q=r.k1
if(D.fgS.q(0,q))w=d.toUpperCase()
else w=q==="lowercase"?d.toLowerCase():d
q=new C.clI(h)
v=r.k2?C.iqN(w,e,q):s
if(v==null){q=q.$1(e)
r=r.as
u=g?1:s
t=g?A.eS:A.F_
return B.d(w,s,u,t,s,!g,f,q,r,s,s)}return B.Zg(B.cS(v,s,s,s,s,s,s,s,s,s,s),s,s,q.$1(e),r.as)},
cvX(d,e,f,g){return this.aBY(d,e,f,!1,g)},
cvV(d,e,f){return this.aBY(d,e,f,!1,null)},
cvW(d,e,f,g){return this.aBY(d,e,f,g,null)},
bFa(d){switch(d.a){case 2:return A.z
case 1:case 5:return A.a9
default:return A.a5}},
c2R(){var w,v,u=this,t=null,s=u.c,r=s.at
if(r==null||!A.a.a_(r,"data:image")){if(!u.as)return A.bM
return B.as(B.W(s.b===D.lw?A.I9:A.D3,A.aF,t,t,t,32),t,t,t)}w=u.bIe(r)
if(s.b===D.lw){s=B.l(6)
v=2*u.d
return B.p(t,w,A.f,t,t,new B.o(A.c,t,B.K(A.cA,A.r,1),s,B.a([new B.ab(0,A.G,A.w.j(0.08),A.dL,6)],x.V),t,A.n),t,1/0,t,t,new B.Q(v,v,v,v),t,t,1/0)}if(s.go.length!==0||s.id.length!==0){v=u.aQW(r,!0)
return C.fR2(s.go,v,s.id)}return w},
aQW(d,e){var w,v,u,t,s
try{w=C.irc(d)
t=this.c.db
v=t==="marriage_locked_bg"||A.a.c7(t,"_bg")
u=A.a.c7(t,"_fill")
t=B.cm(new C.clH(this,w,u,v,e))
return t}catch(s){return D.agd}},
bIe(d){return this.aQW(d,!1)},
cnv(){var w=this.c,v=w.at
if(v==null||v.length===0)return D.beD
return C.iru(v,w.db,w.dx)}}
C.b3Y.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=$.S(),g=B.L(),f=this.b
g.r=B.b1(f.ay).gp(0)
w=B.L()
w.r=B.b1(f.ch).gp(0)
w.b=A.aa
v=f.CW
w.c=v
u=e.a
t=e.b
s=new B.a4(0,0,0+u,0+t)
switch(f.ax.a){case 0:d.aF(s,g)
d.aF(s,w)
break
case 1:d.c0(s,g)
d.c0(s,w)
break
case 2:r=new B.aH(h.r,A.aj,i,i,B.a([],x.v))
r.E(new B.aZ(u/2,0))
r.E(new B.aq(u,t))
r.E(new B.aq(0,t))
r.E(new B.bw())
d.af(r,g)
d.af(r,w)
break
case 3:r=new B.aH(h.r,A.aj,i,i,B.a([],x.v))
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
d.af(r,g)
d.af(r,w)
break
case 4:h=t/2
w.c=v+2
d.ah(new B.r(0,h),new B.r(u,h),w)
break
case 5:q=u*0.22
r=new B.aH(h.r,A.aj,i,i,B.a([],x.v))
r.E(new B.aZ(q,0))
r.E(new B.aq(u,0))
r.E(new B.aq(u-q,t))
r.E(new B.aq(0,t))
r.E(new B.bw())
d.af(r,g)
d.af(r,w)
break
case 6:p=u/2
o=t/2
n=Math.min(u,t)/2
f=B.a([],x.v)
r=new B.aH(h.r,A.aj,i,i,f)
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
d.af(r,g)
d.af(r,w)
break}},
aE(d){return d.b!==this.b}}
C.aLi.prototype={
S(){return new C.bxP(null,null)}}
C.bxP.prototype={
Y(){var w,v=this
v.a3()
w=B.bn(null,A.hN,null,1,null,v)
w.cK(0)
v.d!==$&&B.aQ()
v.d=w},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bBP()},
aR6(d,e){var w=null,v=B.a([e,e.j(0.7)],x.O)
return new B.bM(new B.o(w,w,w,B.l(8),w,new B.a7(A.a5,A.a9,A.x,v,w,w),A.n),A.bk,B.as(B.d(d,w,w,w,w,w,w,A.dl,w,w,w),w,w,w),w)},
bFo(){var w,v=this,u=null,t=v.aR6("Slide A",A.bo),s=v.aR6("Slide B",A.b2)
if(v.a.c===D.cn)return new B.an(A.a0,u,A.b1,A.t,B.a([t,B.as(B.d("No transition",u,u,u,u,u,u,B.m(u,u,A.c.j(0.7),u,u,u,u,u,u,u,u,16,u,u,A.O,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,u)],x.p),u)
w=v.d
w===$&&B.c()
return B.c6(w,new C.fiF(v,s,t),u)},
B(d){return this.bFo()}}
C.aM_.prototype={
jt(d){return new B.a4(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
kb(d){return d.b!==this.b}}
C.Wt.prototype={
S(){return new C.bmw(null,null)}}
C.bmw.prototype={
Y(){var w,v,u=this
u.a3()
w=B.bn(null,A.Cv,null,1,null,u)
u.d!==$&&B.aQ()
u.d=w
v=u.a
if(!v.e||v.c.dy===D.cn){w.sp(0,1)
return}B.bN(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e2t(u),x.a)},
bz(d){var w,v,u,t=this
t.bK(d)
w=d.c
v=t.a
u=v.c
if(w.a!==u.a||w.dy!==u.dy||d.f!==v.f){w=t.d
w===$&&B.c()
w.sp(0,w.a)
v=t.a
if(!v.e||v.c.dy===D.cn)w.sp(0,1)
else B.bN(B.dw(0,0,0,v.c.fr+v.f*120,0,0),new C.e2s(t),x.a)}},
t(){var w=this.d
w===$&&B.c()
w.t()
this.bzP()},
B(d){var w,v=this.a
if(v.c.dy===D.cn||!v.e)return v.d
w=this.d
w===$&&B.c()
return B.c6(w,new C.e2r(this),v.d)}}
C.Fw.prototype={
B(d){return B.cm(new C.clA(this))}}
C.aBT.prototype={
S(){return new C.bgQ()}}
C.bgQ.prototype={
Y(){this.a3()
if(this.a.c!==D.cn)B.bN(A.O8,new C.dg0(this),x.a)},
B(d){var w,v,u,t,s,r,q=this,p=null,o=4280172719,n=q.a.c
if(n===D.cn)n=B.as(B.d("No animation on elements",p,p,p,p,p,p,B.m(p,p,A.c.j(0.75),p,p,p,p,p,p,p,p,16,p,p,A.O,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p)
else{n=n.v(0)
w=q.d
v=x.W
u=q.a.c
w=B.ao(p,new C.Wt(C.em(A.bd,!1,4279310375,A.aH,"",4294538006,24,A.bq,A.a8,"",0.2,"preview_shape",p,"","",0,!1,"",0,D.bf,o,2,"",0,0,"",u,D.f7,0.84,0.08,0.12),B.p(p,p,A.f,p,p,new B.o(A.c9,p,p,B.l(14),p,p,A.n),p,72,p,p,p,p,p,72),!0,0,new B.bf("shape_"+n+"_"+w,v)),p,p,24,p,28,p)
u=u.v(0)
n=q.d
t=C.em(A.bd,!1,4294967295,A.aH,"",4280640491,22,A.bq,A.a8,"",0.2,"preview_text",p,"","",0,!1,"",0,D.bf,o,2,"Element flies in",0,0,"",q.a.c,D.d3,0.84,0.08,0.12)
s=A.c.j(0.14)
r=B.l(14)
v=new B.an(A.a0,p,A.ad,A.t,B.a([w,B.ao(32,new C.Wt(t,B.p(p,D.fRr,A.f,p,p,new B.o(s,p,B.K(A.aT,A.r,1),r,p,p,A.n),p,p,p,p,A.jr,p,p,1/0),!0,1,new B.bf("text_"+u+"_"+n,v)),p,p,24,24,p,p)],x.p),p)
n=v}return new B.bM(D.b9A,A.bk,n,p)}}
C.a99.prototype={
S(){return new C.bnc(null,null)}}
C.bnc.prototype={
gb30(){var w=this.a
if(w.e)w=D.fh3.q(0,w.c)||D.aU8.q(0,A.d.gH(this.a.c.split("@")))
else w=!1
return w},
Y(){var w,v=this
v.a3()
if(v.gb30()){w=C.ipo(v.a.c)
if(w==null){w=v.a.c
if(w==="drift")w=9000
else w=w==="pulse"?2600:4200}w=B.bn(null,B.dw(0,0,0,w,0,0),null,1,null,v)
w.cK(0)
v.d=w}},
t(){var w=this.d
if(w!=null)w.t()
this.bAk()},
B(d){var w,v=this,u=v.d
if(!v.gb30()||u==null)return v.a.d
w=v.a
return B.c6(u,new C.er_(v,u,A.o.F(w.f,7)/7*3.141592653589793*2),w.d)}}
C.b1X.prototype={
B(d){var w=null
return B.as(C.b41(!0,w,!1,C.em(A.K,!1,this.e.l(),A.aH,"",4280640491,this.f,A.bq,A.a8,"",0.2,"fx",w,"","",0,!1,"",0,D.bf,4280172719,2,"Aa",0,0,this.c,D.cn,D.d3,0.84,0.08,0.12),w,!1,w,w,w,1,!1,!0),w,w,w)},
gZ(d){return this.f}}
C.bi2.prototype={
jt(d){return C.a3W(this.b,new B.a4(0,0,0+d.a,0+d.b).cq(-this.c))},
kb(d){return d.b!==this.b||d.c!==this.c}}
C.bti.prototype={
a4(d,e){var w,v,u,t,s,r,q,p,o,n,m,l=new B.a4(0,0,0+e.a,0+e.b).cq(-this.d),k=this.b,j=C.a3W(k,l),i=e.gdi(),h=new C.f7z()
switch(this.c){case"gold":w=h.$1(i*0.045)
w.san(D.aVK.aD(0,l))
d.af(j,w)
k=C.a3W(k,l.cq(-(i*0.03)))
w=h.$1(i*0.006)
w.r=D.bw2.gp(0)
d.af(k,w)
break
case"platinum":k=h.$1(i*0.04)
k.san(O.aVL.aD(0,l))
d.af(j,k)
break
case"glow":k=h.$1(i*0.05)
k.r=A.c.j(0.55).gp(0)
k.y=new B.fT(A.G,i*0.04)
d.af(j,k)
k=h.$1(i*0.012)
k.r=A.c.gp(0)
d.af(j,k)
break
case"rainbow":k=h.$1(i*0.04)
k.san(D.frq.aD(0,l))
d.af(j,k)
break
case"double":w=h.$1(i*0.012)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3W(k,l.cq(i*0.03))
w=h.$1(i*0.008)
w.r=A.c.j(0.75).gp(0)
d.af(k,w)
break
case"neon":k=h.$1(i*0.06)
k.r=A.b9.j(0.7).gp(0)
k.y=new B.fT(A.G,i*0.035)
d.af(j,k)
k=h.$1(i*0.016)
k.r=A.pq.gp(0)
d.af(j,k)
break
case"rosegold":w=h.$1(i*0.05)
w.san(D.frl.aD(0,l))
d.af(j,w)
w=C.a3W(k,l.cq(-(i*0.032)))
v=h.$1(i*0.006)
v.r=D.biw.gp(0)
d.af(w,v)
k=C.a3W(k,l.cq(i*0.03))
v=h.$1(i*0.004)
v.r=D.blC.gp(0)
d.af(k,v)
break
case"jewels":k=h.$1(i*0.055)
k.san(D.aVK.aD(0,l))
d.af(j,k)
for(k=B.BO(j),w=B.a([],x.X),k=new B.uS(k,!1,w),v=i*0.018,u=-i*0.006,t=i*0.006,s=i*0.09;k.C();){r=k.c
if(r===0||k.f)B.bi(B.jN(y.M));--r
k.jP()
q=w[r].b
q===$&&B.c()
p=A.o.D(A.i.bg(q.a.length()/s),8,40)
for(o=0;o<p;++o){k.jP()
q=w[r].b
q===$&&B.c()
q=q.a.length()
k.jP()
n=w[r].W_(q*o/p).a
m=D.d9U[A.o.F(o,4)]
$.S()
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=m.gp(0)
d.O(n,v,q)
q=new B.ar(A.S,A.Q,A.V,A.X,A.U)
q.r=A.c.j(0.9).gp(0)
d.O(new B.r(n.a+u,n.b+u),t,q)}}break
case"aurora":k=h.$1(i*0.08)
k.san(D.frt.aD(0,l))
k.y=new B.fT(A.G,i*0.03)
d.af(j,k)
k=h.$1(i*0.018)
k.san(D.frr.aD(0,l))
d.af(j,k)
break
case"framed":w=h.$1(i*0.07)
w.r=A.c.gp(0)
d.af(j,w)
k=C.a3W(k,l.cq(-(i*0.035)))
w=h.$1(i*0.004)
w.r=A.pj.gp(0)
d.af(k,w)
break}},
aE(d){return d.b!==this.b||d.c!==this.c||d.d!==this.d}}
C.bum.prototype={
a4(d,e){d.Gz(C.a3W(this.b,new B.a4(0,0,0+e.a,0+e.b).cq(-this.c)),A.w,e.gdi()*0.05,!1)},
aE(d){return d.b!==this.b||d.c!==this.c}}
C.aO1.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aOw.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.aPQ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.a9s.prototype={}
C.P_.prototype={
S(){var w=x.gz,v=x.N,u=x.bO
return new C.aGO(B.a([],x.D),B.a([],w),B.a([],w),B.T(v,u),B.T(v,x.bo),B.T(v,u),B.aR(v),null,null)},
ge3(){return this.c},
gUI(){return this.r},
gUJ(){return this.w},
gMp(){return this.x}}
C.aGO.prototype={
Y(){var w,v,u=this
u.a3()
$.aU.bZ$.push(u)
C.fWf()
$.hH2=new C.eJT(u)
w=B.bn(null,A.Cs,null,1,null,u)
w.f1(0,!0)
u.fy!==$&&B.aQ()
u.fy=w
v=$.hfJ.h(0,u.a.c)
if(v!=null){w=B.C(v,x.I)
u.d=w
u.x=!1}u.J6()},
bz(d){var w,v,u=this
u.bK(d)
w=A.a.i(d.y)
v=u.a
if(w.toLowerCase()!==A.a.i(v.y).toLowerCase()||A.a.i(d.z).toLowerCase()!==A.a.i(v.z).toLowerCase()||d.c!==v.c){w=d.c
u.Pk(w)
if(w!==u.a.c){u.e=null
u.db=!1
u.w=u.r=null}u.x=!0
u.J6()}},
jn(d){if(d===A.Bu||d===A.u9||d===A.u8||d===A.qa)this.uh()},
t(){var w,v,u,t=this
$.aU.hZ(t)
if(!t.x){w=t.a.c
v=B.C(t.d,x.I)
$.hfJ.n(0,w,v)}w=t.at
if(w!=null)w.a1(0)
t.uh()
w=t.fy
w===$&&B.c()
w.t()
for(w=t.ch,w=new B.dn(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.R$=0}for(w=t.CW,w=new B.dn(w,w.r,w.e);w.C();){v=w.d
u=v.ax
if(u!=null)u.bN(0)
v.hl()}for(w=t.cx,w=new B.dn(w,w.r,w.e);w.C();){v=w.d
v.U$=$.ax()
v.R$=0}t.bAx()},
gZe(){var w=this.a
return w.f||w.r||w.w||w.x||w.d},
gPE(){var w,v=this.a
if(v.d||v.w||v.x){w=A.a.i(v.y)
if(w.length!==0)return w}if(v.r&&A.a.i(v.z).length!==0)return A.a.i(v.z)
return A.a.i(v.y)},
adw(d){var w=d==null?this.e:d
if((w==null?null:w.z)!==!0)return!1
if(w.gTk())return!1
return!0},
kz(){return this.adw(null)},
akx(){var w=this.c
if(w==null)return
w.L(x.q).f.T(D.fpH)},
qV(){if(!this.kz())return!1
this.akx()
return!0},
atp(d){var w,v,u,t,s,r=this
if(r.adw(d))return!1
w=d==null?r.e:d
v=w==null
if((v?null:w.w)!=="hati_kiapo_uongozi")return!0
if(r.a.d)return!0
if(!v&&!C.hG6(w))return!1
u=r.a
if(u.w||u.x)return!0
if(!u.r)return!1
v=v?null:w.x
t=A.a.i(v==null?"":v).toLowerCase()
s=A.a.i(u.z).toLowerCase()
return t.length!==0&&s.length!==0&&t===s},
Ax(){return this.atp(null)},
J6(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j
var $async$J6=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=++t.dx
k=t.a.c
w=3
return B.b(C.atl(k),$async$J6)
case 3:j=e
w=4
return B.b(C.b29(k),$async$J6)
case 4:t.dy=e
if(t.c==null||l!==t.dx){w=1
break}s=C.hbx(j,t.c5X())
w=t.gZe()?5:7
break
case 5:r=t.gPE()
w=r.length!==0?8:9
break
case 8:w=10
return B.b(C.a8F(r),$async$J6)
case 10:q=e
if(t.c==null||l!==t.dx){w=1
break}if(q!=null){A.d.bq(s,new C.eGg())
if(!t.dy.q(0,A.a.i(r).toLowerCase()))A.d.c9(s,0,q)}case 9:w=6
break
case 7:A.d.bq(s,new C.eGh())
case 6:for(l=s.length,p=!1,o=0;o<s.length;s.length===l||(0,B.I)(s),++o){n=s[o]
m=n.w
if(!(m==="marriage_agreement"||m==="hati_kuhowa"||m==="hati_kuhoweya"||m==="hati_malipo_awamu"||m==="hati_kiapo_uongozi"))continue
m=n.y
if(C.zc(m==null?"":m)!=null)continue
C.fWr(n,s)
p=!0}t.m(new C.eGi(t,s))
l=B.C(s,x.I)
$.hfJ.n(0,k,l)
if(p||s.length>J.ad(j))t.uh()
case 1:return B.h(u,v)}})
return B.i($async$J6,v)},
c5X(){var w,v,u,t,s,r,q="hati_kiapo_uongozi",p=B.a([],x.D)
for(w=this.d,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
s=t.w
if((s==="marriage_agreement"||s==="hati_kuhowa"||s==="hati_kuhoweya"||s==="hati_malipo_awamu"||s===q)&&s!==q)p.push(t)}r=this.e
w=!1
if(!this.db)if(r!=null){w=r.w
w=C.km(w)&&w!==q}if(w)p.push(r)
return p},
cuo(d){var w,v=this,u=d.w
if(!C.km(u)||u==="hati_kiapo_uongozi")return
v.abQ(d)
w=A.d.bk(v.d,new C.eHR(d))
u=v.d
if(w>=0){u[w]=d.hT()
v.d[w].f=new B.V(Date.now(),0,!1)}else A.d.c9(u,0,d.hT())
v.db=!1},
cor(){var w,v,u=this,t=u.e,s=!1
if(!u.db)if(t!=null){s=t.w
s=C.km(s)&&s!=="hati_kiapo_uongozi"}if(s)u.cuo(t)
s=u.d
w=B.U(s)
v=w.k("cM<1,hV>")
s=B.C(new B.cM(new B.Y(s,new C.eHF(),w.k("Y<1>")),new C.eHG(),v),v.k("M.E"))
return s},
Pk(d){return this.bUG(d)},
uh(){return this.Pk(null)},
bUG(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Pk=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.x&&d==null){w=1
break}s=t.cor()
w=3
return B.b(C.Xn(d==null?t.a.c:d,s),$async$Pk)
case 3:r=t.e
w=r!=null&&r.w==="hati_kiapo_uongozi"&&t.atp(r)?4:5
break
case 4:w=6
return B.b(C.OB(r),$async$Pk)
case 6:q=r.x
p=A.a.i(q==null?t.gPE():q)
if(t.dy.q(0,A.a.i(p).toLowerCase())){w=1
break}o=A.d.bk(t.d,new C.eFE())
q=t.d
if(o>=0)q[o]=r.hT()
else A.d.c9(q,0,r.hT())
case 5:case 1:return B.h(u,v)}})
return B.i($async$Pk,v)},
pS(){var w,v=this,u=v.at
if(u!=null)u.a1(0)
u=v.e
w=(u==null?null:C.km(u.w))===!0?A.ha:A.lM
v.at=B.cz(w,new C.eIZ(v))},
b2p(){var w,v=this,u=v.e
if(u==null)return
w=v.ax
w.push(new C.agF(u.hT(),v.f,v.r))
if(w.length>40)A.d.cH(w,0)
A.d.a8(v.ay)},
cIc(){var w=this,v=w.ax
if(v.length===0||w.e==null)return
w.ay.push(new C.agF(w.e.hT(),w.f,w.r))
w.m(new C.eJP(w,v.pop()))
w.pS()},
ctu(){var w=this,v=w.ay
if(v.length===0||w.e==null)return
w.ax.push(new C.agF(w.e.hT(),w.f,w.r))
w.m(new C.eHP(w,v.pop()))
w.pS()},
oL(){var w,v,u=this
if(u.e==null)return
w=A.d.bk(u.d,new C.eJC(u))
if(w>=0){u.d[w]=u.e.hT()
u.d[w].f=new B.V(Date.now(),0,!1)}v=u.e
v.toString
v.f=new B.V(Date.now(),0,!1)},
YM(d){var w,v,u,t,s=this.gdA()
if(s==null)return null
for(w=s.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===d)return t}return null},
yi(){var w,v,u,t
for(w=this.ch,v=new B.dn(w,w.r,w.e);v.C();){u=v.d
u.U$=$.ax()
u.R$=0}w.a8(0)
for(w=this.CW,v=new B.dn(w,w.r,w.e);v.C();){u=v.d
t=u.ax
if(t!=null)t.bN(0)
u.hl()}w.a8(0)},
KW(){var w,v,u,t,s,r,q,p,o,n,m,l=this.gdA()
if(l==null)return
w=l.z
v=B.U(w)
u=v.k("cM<1,n>")
t=B.d0(new B.cM(new B.Y(w,new C.eJD(),v.k("Y<1>")),new C.eJE(),u),u.k("M.E"))
w=this.ch
v=B.a3(w).k("cr<1>")
v=B.C(new B.cr(w,v),v.k("M.E"))
u=v.length
s=this.CW
r=0
for(;r<v.length;v.length===u||(0,B.I)(v),++r){q=v[r]
if(!t.q(0,q)){p=w.W(0,q)
if(p!=null){p.U$=$.ax()
p.R$=0}p=s.W(0,q)
if(p!=null){o=p.ax
if(o!=null)o.bN(0)
p.hl()}}}for(v=l.z,u=v.length,r=0;r<v.length;v.length===u||(0,B.I)(v),++r){n=v[r]
if(n.b!==D.d3)continue
p=n.a
m=w.c1(0,p,new C.eJF(n))
s.c1(0,p,new C.eJG())
p=m.a.a
o=n.r
if(p!==o)m.sb3(0,o)}},
Ip(){var w,v,u=this
if(!u.db||u.e==null)return
w=u.db=!1
if(!A.d.aU(u.d,new C.eF1(u))){v=u.e
if(v.w==="hati_kiapo_uongozi"){v=v.x
if(v==null)v=u.gPE()
w=u.dy.q(0,A.a.i(v).toLowerCase())}if(!w)A.d.c9(u.d,0,u.e.hT())}u.oL()
u.pS()},
akS(d,e){var w,v,u,t,s=this
if(s.kz())return
w=s.YM(d)
if(w==null||w.r===e)return
w.r=e
v=s.e
u=(v==null?null:C.km(v.w))===!0
if(u){C.ips(w,e)
v=s.e
if((v==null?null:v.w==="marriage_agreement")===!0){t=s.gdA()
if(t!=null)C.ipt(t,w.d+w.f*0.5)}}s.Ip()
s.oL()
s.pS()
if(u&&s.c!=null)s.m(new C.eJQ())},
cJk(d,e){var w=this,v=w.gdA()
if(v==null||v.a!==d||v.c===e)return
v.c=e
w.Ip()
w.oL()
w.pS()},
gdA(){var w,v=this.e
if(v==null||v.r.length===0)return null
w=v.r
return w[A.o.D(this.f,0,w.length-1)]},
gqZ(){var w,v,u,t,s,r,q=this,p=q.e,o=p==null?null:p.c
if(o==null)o="office_blue"
w=C.inr(o)
if(w!=null)return w
v=q.gdA()
if(v==null){p=q.e
v=p!=null&&p.r.length!==0?A.d.gH(p.r):null}if(v!=null&&A.a.a_(o,"class_")){p=v.f
p=B.b1(p==null?v.e:p)
u=q.c35(v)
t=q.c34(v)
s=B.b1(v.e)
r=v.f
return new C.k3(o,"Class template",p,u,t,s,r==null?null:B.b1(r))}return C.i_K(o)},
c35(d){var w,v,u,t,s
for(w=d.z,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=w[u]
if(t.b===D.d3)s=t.w>=28||A.o.D(A.o.ar(t.x.a,100)-1,0,8)>=A.o.D(7,0,8)
else s=!1
if(s)return B.b1(t.Q)}return A.a_},
c34(d){var w,v,u,t
for(w=d.z,v=w.length,u=0;u<v;++u){t=w[u]
if(t.b===D.d3&&t.w<28)return B.b1(t.Q)}return A.aL},
agQ(d){var w=this,v=d.w
if(v==="hati_kiapo_uongozi"){if(!w.gZe()){w.c.L(x.q).f.T(D.fog)
return}w.abQ(d)
w.b3H(C.bFC(d))
return}if(C.cms(v)){w.abQ(d)
w.b3H(d)
return}w.m(new C.eGY(w,d))},
atY(){var w,v,u,t,s,r,q=this
q.a3y(!0)
if(q.db){w=q.e
v=w==null
u=v?null:w.w
t=v?null:w.x
s=A.a.i(t==null?"":t)
r=!v&&C.km(w.w)&&u!=="hati_kiapo_uongozi"&&s.length!==0
q.m(new C.eF_(q))
if(r&&q.c!=null){u.toString
q.Ks(u,s)}return}q.uh()
q.m(new C.eF0(q))},
b3G(d){this.abQ(d)
this.a11(d,!0)},
abQ(d){if(!C.km(d.w))return
C.fWr(d,this.d)},
a11(d,e){return this.cki(d,e)},
b3H(d){return this.a11(d,!1)},
cki(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$a11=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:l={}
l.a=d
if(d.w==="hati_kiapo_uongozi"){s=l.a=C.bFC(d)
if(e){r=s.x
q=A.a.i(r==null?t.gPE():r)
t.dy.W(0,q.toLowerCase())
C.a8C(t.a.c,q)}r=s}else r=d
w=C.cms(r.w)?3:4
break
case 3:w=5
return B.b(t.abR(r),$async$a11)
case 5:if(!g||t.c==null){w=1
break}case 4:p=A.d.aU(t.d,new C.eHk(l))
o=l.a.hT()
n=C.km(o.w)&&C.iqI(o)
t.m(new C.eHl(t,o,p))
if(n){m=A.d.bk(t.d,new C.eHm(o))
if(m>=0){t.d[m]=o.hT()
t.uh()}}if(!t.adw(l.a))t.a__()
r=!1
if(t.c!=null)if(!t.adw(l.a)){r=l.a
l=r.w==="hati_kiapo_uongozi"&&!t.atp(r)&&C.fSf(l.a)}else l=r
else l=r
if(l)t.c.L(x.q).f.T(D.foS)
case 1:return B.h(u,v)}})
return B.i($async$a11,v)},
abR(d){return this.bSG(d)},
bSG(d){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$abR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.a
if(r.d){u=!0
w=1
break}s=d.z
if(s===!0){u=!0
w=1
break}w=3
return B.b(B.lF(r.c,A.AB),$async$abR)
case 3:if(f){u=!0
w=1
break}r=t.c
r.toString
s=t.a
u=B.lk(!1,r,s.c,s.d,null,A.AB,null)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$abR,v)},
oz(){var w=0,v=B.j(x.y),u,t=this,s,r
var $async$oz=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.e
r=s==null
if(C.cms(r?null:s.w)){u=!0
w=1
break}if((r?null:s.w)==="hati_kiapo_uongozi"){u=!0
w=1
break}s=t.c
s.toString
r=t.a
u=C.clS(s,r.c,r.d)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$oz,v)},
agx(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agx=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eGX(),s,null,!0,!0,x.H),$async$agx)
case 3:if(t.c==null){w=1
break}t.atY()
case 1:return B.h(u,v)}})
return B.i($async$agx,v)},
agw(){var w=0,v=B.j(x.H),u,t=this,s
var $async$agw=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.c
if(s==null){w=1
break}w=3
return B.b(B.cg(null,null,!1,null,new C.eGU(),s,null,!0,!0,x.H),$async$agw)
case 3:if(t.c==null){w=1
break}t.m(new C.eGV())
t.atY()
case 1:return B.h(u,v)}})
return B.i($async$agw,v)},
a__(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a__=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(B.aA(),$async$a__)
case 3:r=e
if(B.k8(J.t(r.a,"ngmy_marriage_hint_seen"))===!0){w=1
break}w=4
return B.b(r.aC("Bool","ngmy_marriage_hint_seen",!0),$async$a__)
case 4:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fmQ)
case 1:return B.h(u,v)}})
return B.i($async$a__,v)},
Ks(d,e){return this.cuO(d,e)},
cuO(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$Ks=B.e(function(f,g){if(f===1)return B.f(g,v)
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
return B.b(C.ai1(s,t.gF4(),t.gF3(),!0,e,t.d),$async$Ks)
case 9:w=4
break
case 6:w=10
return B.b(C.ai2(s,t.gF4(),t.gF3(),!0,e,t.d),$async$Ks)
case 10:w=4
break
case 7:w=11
return B.b(C.ai3(s,t.gF4(),t.gF3(),!0,e,t.d),$async$Ks)
case 11:w=4
break
case 8:w=12
return B.b(C.ai4(s,t.gF4(),t.gF3(),!0,e,t.d),$async$Ks)
case 12:w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$Ks,v)},
ZA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ZA=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(!t.gZe()){t.c.L(x.q).f.T(D.fn2)
w=1
break}s=t.gPE()
w=t.a.d?3:4
break
case 3:r=t.c
r.toString
w=5
return B.b(B.HF(r,"Search states\u2026",s,A.kg,"Hati ya Kiapo: which state?"),$async$ZA)
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
C.a3k(p,o,r,p,new C.eGc(t),new C.eGd(t),s)
case 1:return B.h(u,v)}})
return B.i($async$ZA,v)},
agR(){var w=0,v=B.j(x.H),u=this,t,s
var $async$agR=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
w=2
return B.b(B.bT(A.dW,null,new C.eH3(u),s,!0,!0,!1,A.lX,!1,!1,x.N),$async$agR)
case 2:t=e
if(t==="marriage_agreement"){s=u.c
s.toString
C.ai4(s,u.gF4(),u.gF3(),!1,null,u.d)}else if(t==="hati_kuhowa"){s=u.c
s.toString
C.ai1(s,u.gF4(),u.gF3(),!1,null,u.d)}else if(t==="hati_kuhoweya"){s=u.c
s.toString
C.ai2(s,u.gF4(),u.gF3(),!1,null,u.d)}else if(t==="hati_malipo_awamu"){s=u.c
s.toString
C.ai3(s,u.gF4(),u.gF3(),!1,null,u.d)}else if(t==="hati_kiapo_uongozi")u.ZA()
return B.h(null,v)}})
return B.i($async$agR,v)},
cjo(d,e){var w,v,u=this,t=null
if(u.e!=null)u.b2p()
w=C.cC()
v=C.Cq(t,t,t,t,D.En,5,!1,t,t,t,t,t,w,t,!1,t,d==null?"Untitled Presentation":d,t,t,t,"office_blue",t,!1,t)
u.m(new C.eH4(u,v))},
abd(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$abd=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qV()){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ivd(s),$async$abd)
case 3:r=e
if(r==null||t.c==null||t.e==null){w=1
break}q=t.e
p=A.d.cD(q.r,new C.eF3())
t.dc(new C.eF4(t,p,q,r))
s=t.c.L(x.q).f
o=r.r.length
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(p?"Your "+o+"-slide presentation is ready. The mic is green now \u2014 tap it to tell the AI what to change.":"Added "+o+" AI slides after this one. Tap the green mic to change them.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abd,v)},
aiS(d,e,f,g){var w=null,v=g?A.dq:A.ch,u=B.K(g?A.aT:A.cA,A.r,1)
return B.hc(B.az(w,B.p(w,B.W(d,g?A.c:A.aL,w,w,w,18),A.f,w,w,new B.o(v,w,u,w,w,w,A.a6),w,34,w,w,w,w,w,34),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,!1,A.a4),w,e,w,w)},
a10(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$a10=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.e
if(n==null||t.qV()){w=1
break}s=t.kf()
r=n.r
q=r.length
if(q===0||t.f>=q)p=B.a([],x.u)
else{r=r[t.f].z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eHf(),q),q.k("M.E"))}o=s!=null&&s.b===D.kj?B.a([s],x.u):p
if(o.length===0){t.c.L(x.q).f.T(D.fp3)
w=1
break}r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eHg(t,o),r,!0,!0,!0,null,!1,!1,x.H),$async$a10)
case 3:case 1:return B.h(u,v)}})
return B.i($async$a10,v)},
ah7(){return this.ckh()},
ckh(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$ah7=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p={}
o=t.e
if(o!=null){s=o.CW
s=(s==null?"":s).length===0||t.qV()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.iv_(s,t.f+1,o),$async$ah7)
case 3:r=e
if(r==null||t.c==null||t.e!==o){w=1
break}s=o.cx
if(s==null)s=A.Z
q=B.jG(s,B.U(s).c)
p.a=A.d.bk(o.r,new C.eHi(q))
t.dc(new C.eHj(p,t,o,q,r))
t.c.L(x.q).f.T(D.fps)
case 1:return B.h(u,v)}})
return B.i($async$ah7,v)},
ahe(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$ahe=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e==null||t.qV()||!t.Ax()){w=1
break}s=t.gdA()
if(s==null){w=1
break}r=s.z
q=B.U(r).k("Y<1>")
p=B.C(new B.Y(r,new C.eHA(),q),q.k("M.E"))
if(p.length===0){t.c.L(x.q).f.T(D.fmA)
w=1
break}o=new B.N(p,new C.eHB(),B.U(p).k("N<1,H>")).f0(0,new C.eHC())
r=B.T(x.N,x.bO)
for(q=p.length,n=0;n<p.length;p.length===q||(0,B.I)(p),++n){m=p[n]
l=m.r
r.n(0,m.a,new B.au(new B.ba(l,A.b6,A.aP),$.ax()))}q=t.c
q.toString
w=3
return B.b(B.bT(A.L,null,new C.eHD(t,p,o,r),q,!0,!0,!0,null,!1,!1,x.H),$async$ahe)
case 3:for(r=new B.dn(r,r.r,r.e);r.C();){q=r.d
q.U$=$.ax()
q.R$=0}if(t.c!=null)t.m(new C.eHE())
case 1:return B.h(u,v)}})
return B.i($async$ahe,v)},
agU(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$agU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m=t.e
if(m==null||t.qV()){w=1
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
return B.b(C.hIu(s,new C.Fn(r,q,p,o==null?"":o)),$async$agU)
case 3:n=e
if(n==null||t.c==null){w=1
break}t.dc(new C.eH5(m,n))
s=t.c.L(x.q).f
r=n.a
if(r.length===0)r="No ending celebration."
else{r=C.aiq(r)
r=B.w(r==null?null:r.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$agU,v)},
abK(){return this.bRY()},
bRY(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$abK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:m={}
l=t.e
if(l!=null){s=l.CW
s=(s==null?"":s).length===0||t.qV()}else s=!0
if(s){w=1
break}s=t.c
s.toString
w=3
return B.b(C.ivc(s,t.f+1,l),$async$abK)
case 3:r=e
q=$.hfj
$.hfj=!1
if(r==null||t.c==null||t.e!==l){w=1
break}if(r===l){t.dc(new C.eFk())
t.c.L(x.q).f.T(D.fmr)
w=1
break}if(!q){s=r.CW
s=C.hH0(l,s==null?"":s,!1)}else s=!1
if(s){t.dc(new C.eFl(t,l,r))
t.c.L(x.q).f.T(D.fpX)
w=1
break}s=l.cx
if(s==null)s=A.Z
p=B.jG(s,B.U(s).c)
s=l.r
m.a=A.d.bk(s,new C.eFm(p))
o=s.length
t.dc(new C.eFn(m,t,l,p,r))
n=s.length-o
s=t.c.L(x.q).f
if(n>0){m=n===1?"":"s"
m="Done \u2014 added "+n+" slide"+m+". Undo brings back the old version."}else m="Done \u2014 your slides are updated. Undo brings back the old version."
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(m,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abK,v)},
aTm(d,e){if(e){this.ahH()
return}this.cjo(d,!1)},
bNr(){return this.aTm(null,!1)},
ahH(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ahH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(B.bT(A.c5,null,new C.eHK(t),r,!0,!0,!0,A.pV,!1,!1,x.N),$async$ahH)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.m(new C.eHL(t,C.inq(s).oR()))
case 1:return B.h(u,v)}})
return B.i($async$ahH,v)},
dc(d){var w=this
if(w.qV())return
w.Ip()
w.b2p()
w.m(d)
w.KW()
w.oL()
w.pS()},
a9J(){this.dc(new C.eDY(this,D.n9))},
aUR(){var w=this.gdA()
if(w==null)return
this.dc(new C.eFi(this,w))},
aTX(){var w=this.e
if(w==null||w.r.length<=1)return
this.dc(new C.eFg(this))},
b6C(d,e){if(this.e==null||d===e)return
this.dc(new C.eHT(this,d,e))},
OR(d){return this.bPt(d)},
bPt(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$OR=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=d.w==="hati_kiapo_uongozi"?3:4
break
case 3:if(!t.a.d){s=t.c
if(s!=null)s.L(x.q).f.T(D.foZ)
w=1
break}s=d.x
r=A.a.i(s==null?t.gPE():s)
w=5
return B.b(C.a8E(r),$async$OR)
case 5:q=f
t.dy.W(0,r.toLowerCase())
C.a8C(t.a.c,r)
s=t.c
if(s!=null){s=s.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(q?"Hati ya Kiapo cha Uongozi of "+r+' is deleted for everyone. Tap "Create Hati ya Kiapo" to make a new one.':"Deleted on this phone. It will be deleted for everyone as soon as the app is online.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))}case 4:s=d.a
C.atn(s)
w=6
return B.b(C.b45(t.a.c,s),$async$OR)
case 6:if(t.c==null){w=1
break}t.m(new C.eFc(t,d))
w=7
return B.b(t.uh(),$async$OR)
case 7:case 1:return B.h(u,v)}})
return B.i($async$OR,v)},
cuL(d,e){var w=this
if(d.z){w.akx()
return}w.m(new C.eHS(w,d,e))
w.pS()},
kf(){var w,v,u,t,s,r=this.gdA()
if(r==null||this.r==null)return null
for(w=r.z,v=w.length,u=this.r,t=0;t<v;++t){s=w[t]
if(s.a===u)return s}return null},
XL(d){return this.ch.c1(0,d.a,new C.eF2(d))},
avR(d){return this.CW.c1(0,d.a,new C.eFF())},
a3y(d){var w,v,u,t=this,s=t.w
if(s!=null){w=t.YM(s)
v=t.ch.h(0,s)
if(w!=null&&v!=null&&v.a.a!==w.r)w.r=v.a.a}t.w=null
u=$.aU.ap$.d.c
if(u!=null)u.jr()},
ba9(){return this.a3y(!0)},
a3u(d){var w,v,u=this
if(u.qV())return
if(!u.Ax())return
w=u.YM(d)
if(w==null||w.b!==D.d3)return
v=A.a.i(w.r).toLowerCase()
if(v==="click to edit text"||v==="tap to edit text"||v==="double-tap to edit"){w.r=""
u.XL(w).sb3(0,"")}u.m(new C.eJA(u,d))
$.aU.x1$.push(new C.eJB(u,d,w))},
baI(d){var w=this
if(d.b===D.d3&&!w.kz()&&w.Ax()){w.a3u(d.a)
return}w.aCn(d.a)},
aCn(d){var w,v,u,t,s,r=this
if(r.kz())return
w=r.r
if(w!=null&&w!==d){v=r.YM(w)
if(v!=null&&v.b===D.d3){u=r.ch.h(0,w)
if(u!=null&&u.a.a!==v.r)v.r=u.a.a}}t=r.w
s=t!=null&&t!==d
r.m(new C.eJ_(r,s,d))
if(s||d==null){t=$.aU.ap$.d.c
if(t!=null)t.jr()}},
aPp(){this.dc(new C.eDZ(this))},
pz(d){return this.bEr(d)},
bEr(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$pz=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oz(),$async$pz)
case 3:s=f
if(!s){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDW(t,d))
case 1:return B.h(u,v)}})
return B.i($async$pz,v)},
WN(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A2.Hy(78,1920),$async$WN)
case 3:s=e
if(s==null||t.gdA()==null){w=1
break}t.dc(new C.eDM(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WN,v)},
WH(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$WH=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.gdA()==null){w=1
break}w=3
return B.b(V.DC(t.a.c),$async$WH)
case 3:s=e
if(t.c==null){w=1
break}r=J.a8(s)
if(r.gau(s)){t.c.L(x.q).f.T(D.fqw)
w=1
break}w=r.gJ(s)===1?4:6
break
case 4:q=r.gH(s)
w=5
break
case 6:r=t.c
r.toString
w=7
return B.b(B.bT(null,null,new C.eDJ(s),r,!0,!0,!1,null,!1,!1,x.ei),$async$WH)
case 7:q=e
case 5:if(q==null||t.c==null||t.gdA()==null){w=1
break}t.dc(new C.eDK(t,q))
case 1:return B.h(u,v)}})
return B.i($async$WH,v)},
auP(){var w=this,v=w.r
if(v==null||w.gdA()==null)return
if(A.d.aU(w.gdA().z,new C.eFe(v))){w.c.L(x.q).f.T(D.fpw)
return}if(w.w===v)w.a3y(!0)
w.dc(new C.eFf(w,v))},
bLG(){var w=this.kf(),v=w==null
if((v?null:w.b)===D.f7)return"Tap a design shape, then pick a color to fill it."
if((v?null:w.b)===D.d3)return"Selected text \u2014 color applies to this text box."
return"No selection \u2014 color applies to the slide background."},
aQ8(d,e){var w=this,v=w.kf(),u=w.gdA(),t=w.e
if(t==null)return
w.dc(new C.eEq(w,v,d,e,t,u))},
bG1(d){return this.aQ8(d,null)},
a9Z(d){return this.bG9(d)},
bG9(d){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$a9Z=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:q=D.aaW.q(0,A.a.i(d.a))||t.Q
if(q){w=3
break}else f=q
w=4
break
case 3:w=5
return B.b(t.oz(),$async$a9Z)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}s=t.kf()
if(s!=null){r=s.b
if(r===D.d3)t.bG1(s.w>=28||s.x.gdR(0)>=A.H.gdR(0)?d.d:d.e)
else if(r===D.f7){r=d.c
t.aQ8(r.j(0.88),r)}w=1
break}t.dc(new C.eEv(t,d))
case 1:return B.h(u,v)}})
return B.i($async$a9Z,v)},
a9Y(d){return this.bG7(d)},
bG7(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a9Y=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=t.kf()
r=t.gdA()
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
return B.b(t.oz(),$async$a9Y)
case 7:f=!f
case 6:case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eEt(t,s,d,q,r))
case 1:return B.h(u,v)}})
return B.i($async$a9Y,v)},
bFS(d){var w=this.gdA()
if(w==null)return
this.dc(new C.eEp(this,w,d))},
a16(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a16=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:r=t.c
r.toString
w=3
return B.b(C.iv8(r),$async$a16)
case 3:s=e
if(s==null||t.c==null){w=1
break}t.oL()
t.m(new C.eHu(t,s))
w=4
return B.b(t.uh(),$async$a16)
case 4:if(t.c!=null)t.agQ(s)
case 1:return B.h(u,v)}})
return B.i($async$a16,v)},
abB(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$abB=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.e
if(q==null){w=1
break}t.a3y(!0)
t.oL()
s=t.c
s.toString
w=3
return B.b(C.Sq(s,q),$async$abB)
case 3:r=e
s=t.c
if(s==null){w=1
break}s=s.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r==null?"Your video is ready. Check your downloads.":r,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$abB,v)},
AG(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l
var $async$AG=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:m=r.e
if(m==null){w=1
break}r.oL()
t=4
w=7
return B.b(C.aSI(m),$async$AG)
case 7:q=e
o=r.c
if(o==null){w=1
break}w=8
return B.b(C.aS9(o,q,m.b),$async$AG)
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
return B.i($async$AG,v)},
FV(d,e){return this.cHA(d,e)},
cHA(d,e){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$FV=B.e(function(f,a0){if(f===1)return B.f(a0,v)
for(;;)switch(w){case 0:h={}
if(t.qV()){w=1
break}s=d.w
if(!(s==="hati_kuhowa"||s==="hati_kuhoweya")){w=1
break}h.a=d
if(e){s=t.e
s=s!=null&&s.a===d.a}else s=!1
if(s){t.a3y(!0)
t.oL()
s=h.a=t.e.hT()}else{r=A.d.bk(t.d,new C.eJJ(d))
s=h.a=r>=0?t.d[r].hT():d.hT()}s=s.w
q=s==null
p=C.ion(q?"":s)
o=C.hFS(q?"":s)
if(p.length===0){w=1
break}s=t.d
q=B.U(s).k("Y<1>")
n=B.C(new B.Y(s,new C.eJK(h,p),q),q.k("M.E"))
s=h.a.b
w=3
return B.b(t.cAD(n.length,o,s),$async$FV)
case 3:m=a0
if(m==null||t.c==null){w=1
break}h.b=null
h.c=!1
w=m==="new"?4:6
break
case 4:s=h.b=C.ioh(h.a)
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
return B.b(t.cAC(n,o),$async$FV)
case 10:a0=g.a=a0
w=8
break
case 9:a0=l
case 8:if(a0==null||t.c==null){w=1
break}k=A.d.fb(t.d,new C.eJL(s))
s=h.a.b
w=11
return B.b(t.cAA(k.b,s),$async$FV)
case 11:if(a0!==!0||t.c==null){w=1
break}s=h.b=k.hT()
case 5:j=C.iom(s,h.a)
s=j.b
if(s===0&&j.a===0&&j.c===0){h=t.c
if(h==null){w=1
break}h.L(x.q).f.T(D.fqI)
w=1
break}w=12
return B.b(t.cAB(j.a,s,o,j.c),$async$FV)
case 12:i=a0
if(t.c==null){w=1
break}t.m(new C.eJM(h,t,i))
t.pS()
case 1:return B.h(u,v)}})
return B.i($async$FV,v)},
cAD(d,e,f){var w=this.c
w.toString
return B.bT(A.L,null,new C.eJf(this,e,f,d),w,!0,!0,!0,null,!1,!1,x.N)},
cAC(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eJe(this,e,d),w,!0,!0,!0,null,!1,!1,x.N)},
cAA(d,e){var w=this.c
w.toString
return B.bT(A.L,null,new C.eJ8(this,e,d),w,!0,!0,!0,null,!1,!1,x.y)},
cAB(d,e,f,g){var w=this.c
w.toString
return B.bT(A.L,null,new C.eJa(this,f,e,d,g),w,!0,!0,!0,null,!1,!1,x.y)},
ad3(){var w=null
return B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w)},
ad4(d,e,f,g){var w,v,u=null,t=B.l(16),s=B.ap(d,A.c5,0.35)
s.toString
s=B.a([d,s],x.O)
w=B.a([new B.ab(0,A.G,d.j(0.28),A.dp,18)],x.V)
v=x.p
return B.A(B.a([B.p(u,B.W(e,A.c,u,u,u,28),A.f,u,u,new B.o(u,u,u,t,w,new B.a7(A.ay,A.aC,A.x,s,u,u),A.n),u,54,u,u,u,u,u,54),A.eu,B.E(B.x(B.a([B.d(g,u,u,u,u,u,u,D.fBM,u,u,u),A.am,B.d(f,u,u,u,u,u,u,B.m(u,u,A.c.j(0.58),u,u,u,u,u,u,u,u,13.5,u,u,A.a8,u,1.35,!0,u,u,u,u,u,u,u,u),u,u,u)],v),A.E,u,A.e,A.h,0,A.p),1)],v),A.E,u,A.e,A.h,0,u,u)},
aYc(d,e){var w=null,v=e.j(0.14),u=B.l(12),t=B.K(e.j(0.22),A.r,1)
return B.p(w,B.d(d,w,2,A.a2,w,w,w,A.Wo,A.K,w,w),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.bU,w,w,w)},
aYf(d,e,f,g,h,i,j){var w=null,v=B.l(16),u=B.l(16),t=g?new B.a7(A.ay,A.aC,A.x,B.a([d.j(0.22),d.j(0.08)],x.O),w,w):w,s=g?w:A.c.j(0.05),r=B.K(g?d.j(0.45):A.c.j(0.08),A.r,1),q=d.j(g?0.22:0.14),p=B.l(13),o=x.p
return B.aG(!1,A.a3,!0,w,B.aM(!1,v,!0,B.p(w,B.A(B.a([B.p(w,B.W(f,d,w,w,w,22),A.f,w,w,new B.o(q,w,w,p,w,w,A.n),w,44,w,w,w,w,w,44),A.bb,B.E(B.x(B.a([B.d(i,w,w,w,w,w,w,A.nf,w,w,w),A.cR,B.d(h,w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,12.5,w,w,A.a8,w,1.25,!0,w,w,w,w,w,w,w,w),w,w,w)],o),A.E,w,A.e,A.h,0,A.p),1),B.W(A.zo,A.c.j(0.35),w,w,w,14)],o),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.o(s,w,r,u,w,t,A.n),w,w,w,w,A.bH,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eG8(e,j),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
c2_(d,e,f,g,h,i){return this.aYf(d,e,f,!1,g,h,i)},
axa(d,e){var w=null,v=A.c.j(0.05),u=B.l(14),t=B.K(A.c.j(0.08),A.r,1)
return B.p(w,B.x(B.a([B.d(e,w,w,w,w,w,w,A.dl,w,w,w),A.bF,B.d(d,w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,11,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(v,w,t,u,w,w,A.n),w,w,w,w,A.a1C,w,w,w)},
aYe(d,e,f){var w=null,v=B.bo(A.c.j(0.08),w,w,w,A.c,w,A.cp,w,new B.b9(B.l(14),A.a1),w,w,w)
return B.bI(B.d(e,w,w,w,w,w,w,A.o5,w,w,w),w,new C.eG7(d,f),v)},
aYd(d,e){return this.aYe(d,e,null)},
KN(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
var $async$KN=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.c
l.toString
s=t.a
w=3
return B.b(B.pD(l,s.c,s.d),$async$KN)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}l=r.b
l=l+"\n"+A.a.aL("=",l.length)+"\n\n"
q=new B.fg(l)
for(s=r.r,p=0;p<s.length;){o=s[p];++p
n=o.b
if(n.length===0)n="(untitled)"
q.a=l+("Slide "+p+": "+n+"\n")
for(l=A.d.gae(o.z),n=new B.eJ(l,new C.eJ0());n.C();){m=l.gP(0).r
if(A.a.i(m).length!==0){m="  \u2022 "+B.aL(m,"\n"," ")+"\n"
q.a+=m}}l=o.c
if(A.a.i(l).length!==0)q.a+="  Notes: "+l+"\n"
l=q.a+="\n"}w=4
return B.b(B.abl(l.charCodeAt(0)==0?l:l,r.b),$async$KN)
case 4:l=t.a
w=5
return B.b(B.pC(l.c,l.d),$async$KN)
case 5:case 1:return B.h(u,v)}})
return B.i($async$KN,v)},
IL(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$IL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.c
q.toString
s=t.a
w=3
return B.b(B.pD(q,s.c,s.d),$async$IL)
case 3:if(!e||t.c==null){w=1
break}r=t.e
if(r==null){w=1
break}w=4
return B.b(B.abl(A.W.av(r.aj(),null),r.b+".json"),$async$IL)
case 4:q=t.a
w=5
return B.b(B.pC(q.c,q.d),$async$IL)
case 5:case 1:return B.h(u,v)}})
return B.i($async$IL,v)},
b9T(){var w,v,u=this,t=u.e
if(t==null||t.r.length===0)return
u.oL()
u.uh()
w=u.c
w.toString
v=B.ee(new C.eJz(u,t),!1,null,x.z)
B.a6(w,!1).ce(v)},
HZ(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$HZ=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oz(),$async$HZ)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.fWE(),$async$HZ)
case 4:s=e
if(s==null||t.e==null||t.c==null){w=1
break}r=C.iro(s.a)
q=t.c
q.toString
w=5
return B.b(B.bT(A.av,null,new C.eDR(s,r),q,!0,!0,!1,null,!1,!1,x.N),$async$HZ)
case 5:p=e
if(p==null){w=1
break}if(p==="scroll"){t.dc(new C.eDS(t,s))
w=1
break}if(p==="split")t.dc(new C.eDT(t,r,s))
case 1:return B.h(u,v)}})
return B.i($async$HZ,v)},
Oa(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$Oa=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.qV()){w=1
break}w=3
return B.b(t.oz(),$async$Oa)
case 3:if(!e){w=1
break}s=t.c
if(s==null){w=1
break}w=4
return B.b(C.aSH(s,null,null),$async$Oa)
case 4:r=e
if(r==null||t.gdA()==null){w=1
break}t.dc(new C.eDX(t,r))
case 1:return B.h(u,v)}})
return B.i($async$Oa,v)},
bOn(){var w,v,u=this.e,t=u==null?null:u.at
if(t!=null)return B.b1(t)
w=this.gdA()
u=this.e
v=!1
if((u==null?null:C.km(u.w))===!0)if(w!=null){u=w.e
u=0.299*(A.o.aI(u,16)&255)+0.587*(A.o.aI(u,8)&255)+0.114*(u&255)<90}else u=v
else u=v
if(u)return D.bn3
return null},
b6o(d){var w=this.e
if(w==null||!C.km(w.w)||w.as!=null)return
w.as=d.b
w.at=d.c.l()},
aRv(){var w,v=this.c
v.toString
w=this.e
w=w==null?null:w.as
return C.aSH(v,this.bOn(),w)},
a9H(d){return this.bEi(d)},
bEi(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$a9H=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qV()){w=1
break}if(!t.Ax()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fqY)
w=1
break}w=3
return B.b(t.aRv(),$async$a9H)
case 3:r=f
if(r==null||t.gdA()==null){w=1
break}t.dc(new C.eDO(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$a9H,v)},
air(d){return this.ctx(d)},
ctx(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$air=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qV()){w=1
break}if(!t.Ax()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.fq4)
w=1
break}w=3
return B.b(t.aRv(),$async$air)
case 3:r=f
if(r==null||t.gdA()==null){w=1
break}t.dc(new C.eHQ(t,r,d))
case 1:return B.h(u,v)}})
return B.i($async$air,v)},
cg3(){var w,v,u=this
if(u.kz())return
w=new B.V(Date.now(),0,!1)
v=u.fx
v=v!=null&&w.bB(v).a<=5e5?++u.fr:u.fr=1
u.fx=w
if(v>=3){u.fr=0
u.fx=null
u.cGA()}},
cGA(){var w,v,u,t,s,r=this.gdA()
if(r==null)return
v=r.z
u=v.length
t=0
for(;;){if(!(t<u)){w=null
break}s=v[t]
if(s.db==="marriage_locked_nim_akuna_deni"){w=s
break}++t}if(w==null)return
this.dc(new C.eJH(this,r,(A.o.aI(w.Q,24)&255)===0||A.a.i(w.r).length===0))},
c2k(){var w,v,u,t,s,r=this.gdA()
if(r==null)return
for(w=r.z,v=w.length,u=null,t=0;t<v;++t){s=w[t]
if(s.db==="marriage_locked_nim_n_4")u=s}if(u==null)return
this.dc(new C.eGb(this,r,u.d))},
c7f(d){var w
if(this.kz())return!1
w=this.e
if((w==null?null:C.km(w.w))!==!0)return!0
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(A.a.a_(w,"marriage_field_"))return!1
if(C.fT0(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.lw&&A.a.a_(w,"marriage_sign_"))return!1
return!1},
c7g(d){var w
if(this.kz())return!1
w=this.e
if((w==null?null:C.km(w.w))!==!0)return!0
if(!this.Ax())return!1
w=d.db
if(w==="marriage_locked"||A.a.a_(w,"marriage_locked_"))return!1
if(C.fT0(d))return!1
w=d.db
if(w==="__kiapo_video__"||A.a.a_(w,"__kiapo_video___"))return!1
if(d.b===D.lw&&A.a.a_(w,"marriage_sign_"))return!1
return A.a.a_(w,"marriage_field_")},
Oi(d){return this.bGz(d)},
bGz(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$Oi=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:if(t.qV()){w=1
break}if(!t.Ax()){s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(D.foT)
w=1
break}r=t.e
s=r==null
q=s?null:r.x
p=A.a.i(q==null?"":q)
if(s||p.length===0){w=1
break}w=3
return B.b(C.arU(p),$async$Oi)
case 3:o=f
s=t.c
if(s==null){w=1
break}if(o==null||A.a.i(o).length===0){s.L(x.q).f.T(D.fpy)
w=1
break}s=t.e
if(s!==r){s=s==null?null:s.a
s=s!==r.a}else s=!1
if(s){s=r.r
n=s.length===0?null:A.d.gH(s)
if(n!=null)for(s=n.z,q=s.length,m=0;m<q;++m){l=s[m]
k=l.db
if(k==="__kiapo_video__"||A.a.a_(k,"__kiapo_video___")){l.at=o
l.db="__kiapo_video__"}}C.OB(r)
w=1
break}t.m(new C.eEz(t,d,o))
t.oL()
$.aU.x1$.push(new C.eEA(t))
case 1:return B.h(u,v)}})
return B.i($async$Oi,v)},
WL(){var w=0,v=B.j(x.H),u,t=this,s
var $async$WL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oz(),$async$WL)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}w=4
return B.b(C.bGk(),$async$WL)
case 4:s=e
if(s==null||t.gdA()==null){w=1
break}t.dc(new C.eDL(t,s))
case 1:return B.h(u,v)}})
return B.i($async$WL,v)},
P5(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$P5=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(t.oz(),$async$P5)
case 3:if(!e){w=1
break}if(t.c==null){w=1
break}s=t.kf()
if(s==null||s.at==null){w=1
break}r=s.at
r.toString
w=4
return B.b(C.fWv(r),$async$P5)
case 4:q=e
if(q==null){w=1
break}t.dc(new C.eFD(s,q))
case 1:return B.h(u,v)}})
return B.i($async$P5,v)},
jl(d){this.dc(new C.eDU(this,d))},
qK(d){return this.bFL(d)},
bFL(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$qK=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)A:switch(w){case 0:if(d!=="print"&&d!=="present"&&t.qV()){w=1
break}m=!D.aUb.q(0,A.a.i(d))
if(m){w=3
break}else f=m
w=4
break
case 3:w=5
return B.b(t.oz(),$async$qK)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}switch(d){case"upload_pdf":t.HZ()
w=1
break A
case"sign_paper":t.Oa()
w=1
break A
case"hd_photo":t.WL()
w=1
break A
case"sharpen":t.P5()
w=1
break A
case"print":t.AG()
w=1
break A
case"rotate":s=t.kf()
if(s!=null)t.dc(new C.eE2(s))
w=1
break A
case"text_box":t.aPp()
w=1
break A
case"picture":t.WN()
w=1
break A
case"present":t.b9T()
w=1
break A
case"new_slide":t.a9J()
w=1
break A
case"export_json":t.IL()
w=1
break A
case"outline_share":t.KN()
w=1
break A
case"flashcard_tool":t.vU(D.JB)
w=1
break A
case"quiz_tool":t.vU(D.JC)
w=1
break A
case"worksheet_tool":t.vU(D.JD)
w=1
break A
case"duplicate_el":s=t.kf()
if(s==null){w=1
break A}t.dc(new C.eE3(t,s))
w=1
break A
case"delete_el":t.auP()
w=1
break A
case"bring_fwd":s=t.kf()
if(s==null||t.gdA()==null){w=1
break A}t.dc(new C.eE4(t,s))
w=1
break A
case"send_back":s=t.kf()
if(s==null||t.gdA()==null){w=1
break A}t.dc(new C.eEf(t,s))
w=1
break A
case"align_left":s=t.kf()
if(s!=null)t.dc(new C.eEi(s))
w=1
break A
case"align_center":s=t.kf()
if(s!=null)t.dc(new C.eEj(s))
w=1
break A
case"align_right":s=t.kf()
if(s!=null)t.dc(new C.eEk(s))
w=1
break A
case"grayscale":case"brighten":t.P5()
w=1
break A
case"flip_h":s=t.kf()
if(s!=null)t.dc(new C.eEl(s))
w=1
break A
case"flip_v":s=t.kf()
if(s!=null)t.dc(new C.eEm(s))
w=1
break A
case"rectangle":t.pz(D.bf)
w=1
break A
case"circle":t.pz(D.eX)
w=1
break A
case"triangle":t.pz(D.kk)
w=1
break A
case"arrow":t.pz(D.Ep)
w=1
break A
case"line":case"divider":t.pz(D.fP)
w=1
break A
case"word_count":r=t.gdA()
if(r==null){w=1
break A}for(q=A.d.gae(r.z),p=new B.eJ(q,new C.eEn()),o=0;p.C();){n=A.a.fw(A.a.i(q.gP(0).r),B.ag("\\s+",!0,!1,!1,!1))
o+=new B.Y(n,new C.eEo(),B.U(n).k("Y<1>")).gJ(0)}t.c.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(""+o+" words on this slide",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=1
break A
case"title":q=C.cC()
t.jl(C.jc(A.K,!1,t.gqZ().d.l(),A.aH,40,A.bq,A.u,0.18,q,"Presentation Title",0,D.na,0.8,0.1,0.28))
w=1
break A
case"subtitle":q=C.cC()
t.jl(C.jc(A.K,!1,t.gqZ().e.l(),A.aH,22,A.bq,A.a8,0.12,q,"Subtitle goes here",0,D.dr,0.8,0.1,0.48))
w=1
break A
case"bullets":t.jl(C.jc(A.bd,!0,4279310375,A.aH,20,A.bq,A.a8,0.5,C.cC(),"\u2022 First point\n\u2022 Second point\n\u2022 Third point",0,D.vw,0.8,0.1,0.22))
w=1
break A
case"numbered":t.jl(C.jc(A.bd,!1,4279310375,A.aH,20,A.bq,A.a8,0.5,C.cC(),"1. First item\n2. Second item\n3. Third item",0,D.vv,0.8,0.1,0.22))
w=1
break A
case"quote":t.jl(C.jc(A.K,!1,4279310375,A.aH,24,A.cJ,A.a8,0.25,C.cC(),'"Insert meaningful quote here."',0,D.dr,0.8,0.1,0.3))
w=1
break A
case"citation":t.jl(C.jc(A.bd,!1,4284773515,A.aH,14,A.bq,A.a8,0.1,C.cC(),"Author, Title (Year). Publisher.",0,D.vw,0.8,0.1,0.78))
w=1
break A
case"date_stamp":t.jl(C.jc(A.e4,!1,4279310375,A.aH,14,A.bq,A.a8,0.08,C.cC(),C.bGm(),0,D.dr,0.24,0.72,0.04))
w=1
break A
case"page_number":t.jl(C.jc(A.e4,!1,4279310375,A.aH,13,A.bq,A.a8,0.06,C.cC(),"Page "+(t.f+1),0,D.dr,0.18,0.78,0.9))
w=1
break A
case"header_bar":t.dc(new C.eE5(t))
w=1
break A
case"footer_bar":t.dc(new C.eE6(t))
w=1
break A
case"highlight":t.dc(new C.eE7(t))
w=1
break A
case"redact":t.dc(new C.eE8(t))
w=1
break A
case"callout":t.dc(new C.eE9(t))
w=1
break A
case"checkboxes":t.jl(C.jc(A.bd,!1,4279310375,A.aH,20,A.bq,A.a8,0.45,C.cC(),"\u2610 Task one\n\u2610 Task two\n\u2610 Task three",0,D.dr,0.8,0.1,0.2))
w=1
break A
case"table":t.jl(C.jc(A.bd,!1,4279310375,A.aH,16,A.bq,A.a8,0.55,C.cC(),"Column A\tColumn B\tColumn C\nRow 1\tData\tData\nRow 2\tData\tData",0,D.dr,0.8,0.1,0.18))
w=1
break A
case"memo":t.dc(new C.eEa(t))
w=1
break A
case"letter":t.jl(C.jc(A.bd,!1,4279179050,A.aH,17,A.bq,A.a8,0.82,C.cC(),C.bGm()+"\n\nDear [Name],\n\n[Letter body]\n\nSincerely,\n[Your name]",0,D.dr,0.8,0.1,0.08))
w=1
break A
case"agenda":t.jl(C.jc(A.bd,!1,4279310375,A.aH,22,A.bq,A.O,0.76,C.cC(),"AGENDA\n\n1. Welcome\n2. Updates\n3. Discussion\n4. Action items\n5. Next steps",0,D.vw,0.8,0.1,0.12))
w=1
break A
case"toc":t.jl(C.jc(A.bd,!1,4279310375,A.aH,18,A.bq,A.a8,0.76,C.cC(),"TABLE OF CONTENTS\n\n1. Introduction .......... 1\n2. Main topic .......... 3\n3. Conclusion .......... 8",0,D.dr,0.8,0.1,0.12))
w=1
break A
case"sig_line":t.jl(C.jc(A.bd,!1,4279310375,A.aH,16,A.bq,A.a8,0.08,C.cC(),"Signature: _________________________",0,D.dr,0.8,0.1,0.78))
w=1
break A
case"initial_line":t.jl(C.jc(A.bd,!1,4279310375,A.aH,16,A.bq,A.a8,0.08,C.cC(),"Initials: ______",0,D.dr,0.3,0.65,0.78))
w=1
break A
case"approved":t.jl(C.jc(A.K,!1,4278556265,A.aH,28,A.bq,A.u,0.12,C.cC(),"APPROVED",0,D.na,0.32,0.62,0.08))
w=1
break A
case"draft":t.jl(C.jc(A.K,!1,4292617766,A.aH,28,A.bq,A.u,0.12,C.cC(),"DRAFT",0,D.dr,0.32,0.62,0.08))
w=1
break A
case"confidential":t.jl(C.jc(A.K,!1,871318596,A.aH,36,A.bq,A.u,0.12,C.cC(),"CONFIDENTIAL",0,D.dr,0.8,0.1,0.42))
w=1
break A
case"sticky":t.dc(new C.eEb(t))
w=1
break A
case"progress":t.dc(new C.eEc(t))
w=1
break A
case"stars":t.jl(C.jc(A.K,!1,4279310375,A.aH,36,A.bq,A.a8,0.12,C.cC(),"\u2605\u2605\u2605\u2605\u2606",0,D.r6,0.8,0.1,0.4))
w=1
break A
case"equation":t.jl(C.jc(A.K,!1,4279310375,A.aH,32,A.bq,A.O,0.14,C.cC(),"y = mx + b",0,D.dr,0.8,0.1,0.38))
w=1
break A
case"timeline":t.jl(C.jc(A.K,!1,4279310375,A.aH,18,A.bq,A.a8,0.2,C.cC(),"2024 \u2500\u2500\u25ba 2025 \u2500\u2500\u25ba 2026\nPhase 1    Phase 2    Phase 3",0,D.vv,0.8,0.1,0.35))
w=1
break A
case"two_col":t.dc(new C.eEd(t))
w=1
break A
case"compare":t.dc(new C.eEe(t))
w=1
break A
case"link_text":t.jl(C.jc(A.bd,!1,4280640491,A.ne,16,A.bq,A.a8,0.1,C.cC(),"https://example.com",0,D.dr,0.8,0.1,0.5))
w=1
break A
case"phone":t.jl(C.jc(A.bd,!1,4279310375,A.aH,18,A.bq,A.a8,0.1,C.cC(),"(555) 123-4567",0,D.dr,0.8,0.1,0.5))
w=1
break A
case"email":t.jl(C.jc(A.bd,!1,4280640491,A.aH,18,A.bq,A.a8,0.1,C.cC(),"name@email.com",0,D.dr,0.8,0.1,0.5))
w=1
break A
case"qr_placeholder":t.dc(new C.eEg(t))
w=1
break A
case"cover_page":r=t.gdA()
if(r==null){w=1
break A}t.dc(new C.eEh(t,r))
w=1
break A
case"invoice":t.jl(C.jc(A.bd,!1,4279179050,A.aH,16,A.bq,A.a8,0.84,C.cC(),"INVOICE #001\n\nBill To:\nItem\tQty\tPrice\nService A\t1\t$100\nTOTAL\t\t$100",0,D.dr,0.8,0.1,0.08))
w=1
break A
case"resume":t.jl(C.jc(A.bd,!1,4279179050,A.aH,17,A.bq,A.a8,0.84,C.cC(),"YOUR NAME\nJob Title\n\nExperience\n\u2022 Role at Company\n\nEducation\n\u2022 Degree",0,D.dr,0.8,0.1,0.08))
w=1
break A
case"minutes":t.jl(C.jc(A.bd,!1,4279310375,A.aH,16,A.bq,A.a8,0.88,C.cC(),"MEETING MINUTES\nDate: "+C.bGm()+"\nAttendees:\n\nDiscussion:\n\nDecisions:\n\nAction items:",0,D.dr,0.8,0.1,0.06))
w=1
break A
case"lab_report":t.jl(C.jc(A.bd,!1,4279310375,A.aH,17,A.bq,A.a8,0.88,C.cC(),"LAB REPORT\n\nHypothesis:\n\nProcedure:\n\nResults:\n\nConclusion:",0,D.dr,0.8,0.1,0.06))
w=1
break A
case"rubric":t.jl(C.jc(A.bd,!1,4279310375,A.aH,15,A.bq,A.a8,0.8,C.cC(),"RUBRIC\nCriteria\tExcellent\tGood\tNeeds work\nContent\t4\t3\t2\nOrganization\t4\t3\t2",0,D.dr,0.8,0.1,0.1))
w=1
break A}case 1:return B.h(u,v)}})
return B.i($async$qK,v)},
cA4(d){if(!this.y)return!1
if(this.w!=null)return!1
if(!d)return!0
return!D.fh_.q(0,this.z)},
cA3(d){if(this.kf()==null)return!1
if(this.w!=null)return!1
if(d)return!1
return this.as},
bbD(d,e,f,g,h,i){var w,v,u,t,s,r,q,p=null,o=d===D.cn,n=o?12:10
if(e)w=f.j(0.25)
else w=g?A.c.j(0.06):A.w.j(0.04)
v=B.l(12)
u=e?f:A.bw
u=B.K(u,A.r,o&&e?2:1)
t=C.ird(d)
s=o?12:18
r=o?A.H:A.d0
if(o)if(e)q=f
else q=g?A.ab:A.an
else q=p
n=B.a([B.p(p,B.d(t,p,p,p,p,p,p,B.m(p,p,q,p,p,p,p,p,p,p,p,s,p,p,r,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),A.f,p,p,new B.o(w,p,u,v,p,p,A.n),p,p,p,p,new B.Q(n,8,n,8),p,p,p)],x.p)
if(i)n.push(B.ao(p,B.p(p,D.Qh,A.f,p,p,D.FI,p,12,p,p,p,p,p,12),p,p,p,-2,-2,p))
return new B.D(A.f1,B.az(p,new B.an(A.a0,p,A.ad,A.f,n,p),A.y,!1,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,p,h,p,p,p,p,p,p,!1,A.a4),p)},
bSe(d){var w,v=null,u=this.kf()
if(u==null)return A.bM
w=B.a([A.ae,B.d("Anim:",v,v,v,v,v,v,B.m(v,v,d?A.aF:A.an,v,v,v,v,v,v,v,v,10,v,v,A.H,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bn],x.p)
A.d.u(w,new B.N(D.SV,new C.eFC(this,u,d),x.bR))
return B.A(w,A.l,v,A.e,A.h,0,v,v)},
vU(d){return this.bEq(d)},
bEq(d){var w=0,v=B.j(x.H),u,t=this,s
var $async$vU=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:s=D.aU5.q(0,d)
if(s){w=3
break}else f=s
w=4
break
case 3:w=5
return B.b(t.oz(),$async$vU)
case 5:f=!f
case 4:if(f){w=1
break}if(t.c==null){w=1
break}t.dc(new C.eDV(t,d))
case 1:return B.h(u,v)}})
return B.i($async$vU,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=null
if(h.x)return D.ffj
w=h.e
if(w==null)return h.bIk()
v=h.gdA()
v.toString
u=h.c
u.toString
t=B.P(u).ax.a===A.I
u=h.c
u.toString
s=x.w
r=B.aE(u,A.bZ,s).w.a.a<900
q=!r
u=h.c
u.toString
p=B.aE(u,A.eT,s).w.f.d>40
s=h.w==null
o=!s
u=!p
n=!u||o
m=t?A.c5:D.bkU
l=x.p
k=B.a([],l)
if(s){j=h.e
j=j!=null&&j.gTk()}else j=!1
if(j)k.push(new C.a9a(h.a.c,!1,h.e.gbdS(),h.gcg0(),g))
else if(s&&h.e!=null&&!h.kz()&&C.cms(h.e.w)){j=h.a
k.push(new C.a9a(j.c,j.d,g,h.gch9(),g))}if(s)k.push(h.bS9(w,t,r))
if(s&&h.kz()){w=t?A.fY:A.lm
j=B.l(14)
i=B.K(A.bo.j(0.35),A.r,1)
k.push(B.p(g,B.A(B.a([D.c_F,A.ae,B.E(B.d("Received copy \u2014 view, print, or download only. Editing is turned off.",g,g,g,g,g,g,B.m(g,g,t?A.c:A.fY,g,g,g,g,g,g,g,g,12,g,g,A.O,g,g,!0,g,g,g,g,g,g,g,g),g,g,g),1)],l),A.l,g,A.e,A.h,0,g,g),A.f,g,g,new B.o(w,g,i,j,g,g,A.n),g,g,g,A.yR,A.hP,g,g,g))}w=!n
if(w&&!h.kz())k.push(h.c8c(t,r))
if(w&&h.kz())k.push(h.cHB(t))
if(r&&h.kf()!=null&&w&&!h.kz())k.push(h.c87(t))
j=B.a([],l)
if(q&&w)j.push(new B.a5(132,g,h.b9i(t,!0),g))
i=B.a([],l)
if(r&&w)i.push(new B.a5(g,72,h.b9i(t,!1),g))
i.push(B.E(new B.bK(A.aZ,g,g,h.bJG(v,t,!s||p),g),1))
if(h.cA4(r)&&u&&s&&!h.kz())i.push(h.cfN(v,t,r))
j.push(B.E(B.x(i,A.l,g,A.e,A.h,0,A.p),1))
if(q&&!h.kz()&&h.cA3(!1))j.push(new B.a5(240,g,h.bV4(t),g))
k.push(B.E(B.A(j,A.al,g,A.e,A.h,0,g,g),1))
if(u&&s)k.push(new B.a5(g,r?72:h.a.e,g,g))
w=B.a([B.x(k,A.l,g,A.e,A.h,0,A.p)],l)
if(o&&r)w.push(h.c88(t))
return B.c4(g,m,B.bm(!1,new B.an(A.a0,g,A.ad,A.t,w,g),!0,!1,A.ag,!0,!0),g,!1,!1,g,!1)},
bIk(){var w,v,u,t,s,r=this,q=null,p=r.c
p.toString
w=B.P(p).ax.a===A.I
if(w){p=r.fy
p===$&&B.c()
v=p.r
if(!(v!=null&&v.a!=null))p.f1(0,!0)}else{p=r.fy
p===$&&B.c()
v=p.r
if(v!=null&&v.a!=null)p.u5(0,!1)}p=w?A.c5:A.c
v=r.c
v.toString
v=B.aE(v,A.dD,x.w).w
u=r.a.e
t=x.p
s=B.a([r.ceV(A.bo,A.qP,new C.eED(r),r.gcjl(),"School & document toolkit \u2014 edit PDFs, photos, sign papers, present, and build class decks","NGMY SLIDES"),A.bx,B.A(B.a([B.E(r.asv(A.bo,A.i_,"Blank Presentation",new C.eEE(r)),1),A.as,B.E(r.asv(A.b2,A.va,"Class Template",new C.eEF(r)),1)],t),A.l,q,A.e,A.h,0,q,q)],t)
if(r.a.d&&r.gZe()&&!A.d.aU(r.d,new C.eEG()))A.d.u(s,B.a([A.T,new B.lY(r.asv(A.c3,A.iW,"Create Hati ya Kiapo",r.gc4I()),D.hwD)],t))
s.push(A.nd)
s.push(B.d("YOUR PRESENTATIONS",q,q,q,q,q,q,B.m(q,q,w?A.aF:A.an,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1.2,q,q,q,q,q,q),q,q,q))
s.push(A.af)
t=r.d
if(t.length===0)s.push(r.bFd(w))
else{t=new B.i8(t,B.U(t).k("i8<1>"))
A.d.u(s,t.gdP(t).dN(0,new C.eEH(r,w),x.l))}return B.c4(q,p,B.bm(!1,B.cw(s,q,q,new B.Q(18,v.r.b+12,18,u),q,q,A.ah,!1),!0,!1,A.ag,!0,!1),q,!1,!1,q,q)},
bQg(){this.m(new C.eFh(this))
var w=this.c
w.toString
if(B.aE(w,A.bZ,x.w).w.a.a<900){w=$.aU.ap$.d.c
if(w!=null)w.jr()}},
ah8(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$ah8=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.kf()==null){w=1
break}s=t.c
s.toString
s=B.P(s)
r=t.c
r.toString
w=3
return B.b(B.bT(A.L,null,new C.eHt(t,s.ax.a===A.I),r,!0,!0,!0,null,!1,!1,x.H),$async$ah8)
case 3:case 1:return B.h(u,v)}})
return B.i($async$ah8,v)},
BA(d,e){return this.cAq(d,e)},
cAq(d,e){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$BA=B.e(function(f,g){if(f===1){s.push(g)
w=t}for(;;)switch(w){case 0:j=r.c
j.toString
w=3
return B.b(B.hO(D.ZE,!0,"Dismiss",j,new C.eJ1(),new C.eJ2(r,d,e),A.iQ,!0,x.N),$async$BA)
case 3:o=g
if(o==null||r.c==null){w=1
break}j=o==="rename"
if(j||o==="duplicate")if(d.z){r.akx()
w=1
break}n=o==="transfer_hati"
if(n&&d.z&&!d.gTk()){r.akx()
w=1
break}w=o==="pdf"?4:6
break
case 4:t=8
w=11
return B.b(C.aSI(d),$async$BA)
case 11:q=g
j=r.c
if(j==null){w=1
break}w=12
return B.b(C.aS9(j,q,d.b),$async$BA)
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
return B.b(r.FV(d,!1),$async$BA)
case 16:w=14
break
case 15:w=o==="delete"?17:19
break
case 17:j=r.c
j.toString
w=20
return B.b(B.hO(D.ZE,!0,"Dismiss",j,new C.eJ3(),new C.eJ4(d),A.a3,!0,x.y),$async$BA)
case 20:if(g===!0)r.OR(d)
w=18
break
case 19:w=j?21:23
break
case 21:w=24
return B.b(r.aia("Rename presentation",d.b),$async$BA)
case 24:l=g
if(l!=null)r.cuL(d,l)
w=22
break
case 23:if(o==="duplicate"){k=d.aj()
k.n(0,"id",C.cC())
k.n(0,"name",d.b+" (Copy)")
r.m(new C.eJ5(r,k))
r.pS()}case 22:case 18:case 14:case 5:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$BA,v)},
b4k(d,e){var w=null
return B.bO(!1,D.h0Z,w,w,!0,w,w,w,e,w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.bo,w,w,w,A.az,w,A.lP,w,w,w,w,w,A.jO,w,w))},
bFd(d){var w,v=null
if(!d)return B.p(v,D.byY,A.f,v,v,B.a7y(A.aG,22),v,v,v,v,A.eA,v,v,1/0)
w=this.fy
w===$&&B.c()
return B.c6(w,new C.eE_(this,!0),v)},
bOl(d,e,f){var w=new B.N(B.a(d.split(" \u2022 "),x.s),new C.eF5(),x.dv).c_(0,new C.eF6()),v=B.C(w,w.$ti.k("M.E"))
return new B.D(G.amu,this.aPI(v,e,new C.eF7(),f),null)},
aPI(d,e,f,g){var w,v,u,t,s,r,q,p,o,n=null,m=x.p,l=B.a([],m)
for(w=f!=null,v=0;v<d.length;++v){u=B.a([],m)
if(v>0)u.push(A.e7)
t=e.j(g?0.14:0.1)
s=new B.aP(6,6)
r=new B.ay(e.j(g?0.55:0.45),1,A.r,-1)
q=B.a([],m)
if(w){p=f.$1(d[v])
A.d.u(q,B.a([B.W(p,g?A.ab:A.by,n,n,n,10),A.rc],m))}p=d[v]
o=g?A.c.j(0.85):A.aL
q.push(B.d(p,n,1,n,n,n,n,new B.G(!0,o,n,n,n,n,9.5,A.H,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n),n,n,n))
u.push(B.p(n,new B.c7(A.aM,A.e,A.N,A.l,n,A.p,n,0,q,n),A.f,n,n,new B.o(t,n,new B.bG(r,r,r,r),new B.be(s,s,s,s),n,n,A.n),n,n,n,n,A.n3,n,n,n))
A.d.u(l,u)}return new B.dx(A.dM,A.a5,A.f,B.A(l,A.l,n,A.e,A.N,0,n,n),n)},
bFb(d,e,f){return this.aPI(d,e,null,f)},
bOo(d,e,f){var w,v=d.w
if(v==="hati_kuhowa")w=D.dwL
else if(v==="hati_kuhoweya")w=D.dgU
else{if(v==="hati_kiapo_uongozi")v=D.d2d
else v=C.km(v)?D.dah:A.IR
w=v}v=this.fy
v===$&&B.c()
return B.c6(v,new C.eFa(this,f,e,d,w),null)},
c88(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.kf()
if(i==null||i.b!==D.d3)return A.bM
w=k.XL(i)
v=k.avR(i)
u=A.w.j(0.55)
t=x.p
s=B.bm(!1,new B.D(A.CD,B.A(B.a([B.d("Edit text",j,j,j,j,j,j,B.m(j,j,A.c.j(0.9),j,j,j,j,j,j,j,j,15,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.b3,B.bO(!1,D.fXn,j,j,!0,j,j,j,new C.eGC(k),j,j)],t),A.l,j,A.e,A.h,0,j,j),j),!0,!1,A.ag,!0,!0)
r=d?A.av:A.c
q=B.l(18)
p=B.K(A.bo.j(0.45),A.r,1)
o=B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,20)],x.V)
n=i.x
m=i.y
l=i.z
r=B.E(new B.D(A.hn,new B.bM(new B.o(r,j,p,q,o,j,A.n),A.bk,new B.D(A.eV,B.aN(j,A.Z,!0,j,!0,A.t,j,B.aO(),w,A.bo,j,j,j,j,2,D.c5Y,A.y,!0,j,!0,j,!0,v,A.ak,j,j,j,j,j,A.xz,j,j,j,j,j,j,!1,"\u2022",j,new C.eGD(k,i),j,j,j,!1,j,j,!1,j,!0,j,A.ac,j,j,j,j,j,j,j,j,j,j,j,B.m(j,j,d?A.c:A.a_,j,l,j,j,j,j,j,j,18,m,j,n,j,1.35,!0,j,j,j,j,j,j,j,j),!0,A.a7,A.AX,A.ao,j,A.VN,j,j),j),j),j),1)
q=B.l(16)
p=d?A.bs:A.c
o=B.K(d?A.aL:A.bm,A.r,1)
n=B.E(B.c9(B.A(B.a([k.uL(G.Ph,j,new C.eGE(k,i),d),k.uL(G.a2K,j,new C.eGF(k,i),d),k.uL(I.aqU,j,new C.eGG(k,i),d),k.uL(I.a3y,j,new C.eGH(k,i),d),k.uL(k.bF9(i.as),j,new C.eGI(k,i),d),k.uL(D.as0,j,new C.eGJ(k,i),d),k.uL(D.as_,j,new C.eGK(k,i),d)],t),A.l,j,A.e,A.h,0,j,j),A.t,j,A.y,j,j,j,j,j,A.aM),1)
m=A.i.M(i.w)
return B.bR(0,B.aG(!1,A.a3,!0,j,B.x(B.a([s,r,new B.D(H.amD,B.p(j,B.A(B.a([n,A.ae,B.d(""+m+" pt",j,j,j,j,j,j,B.m(j,j,d?A.aF:A.an,j,j,j,j,j,j,j,j,11,j,j,A.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j),A.df],t),A.l,j,A.e,A.h,0,j,j),A.f,j,j,new B.o(p,j,o,q,j,j,A.n),j,j,j,j,A.lR,j,j,j),j)],t),A.l,j,A.e,A.h,0,A.p),A.f,u,0,j,j,j,j,j,A.ai),0,0,0)},
c87(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=o.kf()
if(m==null)return A.bM
w=m.b
v=w===D.d3
u=B.l(18)
t=x.O
t=d?B.a([A.bs,A.a_],t):B.a([A.c,A.aS],t)
s=B.K(d?A.aL:A.bm,A.r,1)
r=B.a([new B.ab(0,A.G,A.w.j(0.12),A.cz,16)],x.V)
q=x.p
p=B.a([],q)
if(v)p.push(o.b7U(A.jb,"Edit",new C.eGn(o,m),d,!0))
if(w===D.kj)p.push(o.b7U(A.I4,"Shape & ring",new C.eGo(o),d,!0))
p.push(o.uL(A.Du,"Format",new C.eGp(o),d))
if(v)A.d.u(p,B.a([o.uL(G.Ph,n,new C.eGq(o,m),d),o.uL(D.as0,n,new C.eGr(o,m),d),o.uL(D.as_,n,new C.eGs(o,m),d)],q))
p.push(A.b3)
p.push(o.cyh(A.ej,n,o.gaTV(),d,!0))
p.push(o.uL(A.hd,"Done",new C.eGt(o),d))
return B.p(n,B.A(p,A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(n,n,s,u,r,new B.a7(A.a5,A.a9,A.x,t,n,n),A.n),n,n,n,A.CA,A.lR,n,n,n)},
bF9(d){switch(d.a){case 2:return D.a3v
case 1:case 5:return D.a3x
default:return D.a3w}},
c92(d){switch(d.a){case 0:case 4:return A.K
case 2:return A.e4
default:return A.bd}},
aCl(d,e,f,g,h,i){var w,v,u,t,s,r,q,p,o,n=null
if(i)w=A.aA
else if(h)w=A.c
else{v=g?A.ab:A.aL
w=v}v=B.l(12)
u=B.l(12)
t=h?N.Im:n
if(h)s=n
else s=g?A.c.j(0.06):A.ch
r=e==null
q=r?10:12
p=x.p
o=B.a([B.W(d,w,n,n,n,16)],p)
if(!r)A.d.u(o,B.a([A.e7,B.d(e,n,n,n,n,n,n,B.m(n,n,w,n,n,n,n,n,n,n,n,12,n,n,A.H,n,n,!0,n,n,n,n,n,n,n,n),n,n,n)],p))
return new B.D(A.pv,B.aG(!1,A.a3,!0,n,B.aM(!1,v,!1,B.eC(new B.D(new B.Q(q,8,q,8),B.A(o,A.l,n,A.e,A.N,0,n,n),n),n,new B.o(s,n,n,u,n,t,A.n),n,n,n),n,!0,n,n,n,n,n,n,n,n,n,n,n,f,n,n,n,n,n,n,n),A.f,A.L,0,n,n,n,n,n,A.ai),n)},
uL(d,e,f,g){return this.aCl(d,e,f,g,!1,!1)},
b7U(d,e,f,g,h){return this.aCl(d,e,f,g,h,!1)},
cyh(d,e,f,g,h){return this.aCl(d,e,f,g,!1,h)},
bS9(d,e,f){var w,v,u,t,s,r,q,p=this,o=null,n=B.l(20),m=x.O
m=e?B.a([A.bs,A.a_],m):B.a([A.c,A.ok],m)
w=B.K(e?A.aL:A.pi,A.r,1.2)
v=B.a([new B.ab(0,A.G,A.bo.j(e?0.18:0.1),A.cz,18)],x.V)
u=p.T2(A.eK,"Back",p.gbLq(),e)
t=d.b
s=f?14:15
t=B.d(t,o,1,A.a2,o,o,o,B.m(o,o,e?A.c:A.a_,o,o,o,o,o,o,o,o,s,o,o,A.u,o,o,!0,o,-0.2,o,o,o,o,o,o),o,o,o)
s=p.f
r=d.r.length
q=x.p
r=B.a([u,A.df,B.E(B.A(B.a([new B.di(1,A.cm,t,o),A.ae,B.d(""+(s+1)+" of "+r,o,1,o,o,o,o,B.m(o,o,e?A.bV:A.an,o,o,o,o,o,o,o,o,11,o,o,A.O,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)],q),A.uC,o,A.e,A.h,0,A.d5,o),1)],q)
if(!p.kz()){u=p.T2(A.pE,"Undo",p.ax.length===0?o:p.gcIb(),e)
A.d.u(r,B.a([u,p.T2(D.bU0,"Redo",p.ay.length===0?o:p.gctt(),e)],q))}r.push(p.T2(A.zm,"PDF",new C.eFu(p),e))
if(C.km(d.w))r.push(p.T2(A.hB,"Download",new C.eFv(p),e))
else r.push(p.T2(A.hB,"Download as video",new C.eFw(p),e))
if(!p.kz())r.push(B.CD(o,o,B.W(A.oI,e?A.ab:A.by,o,o,o,o),new C.eFx(p),A.J,new C.eFy(p),A.ag,"More",x.N))
r.push(A.df)
r.push(B.aG(!1,A.a3,!0,o,B.aM(!1,B.l(14),!0,B.eC(D.exD,o,new B.o(o,o,o,B.l(14),o,N.Im,A.n),o,o,o),o,!0,o,o,o,o,o,o,o,o,o,o,o,p.gaDa(),o,o,o,o,o,o,o),A.f,A.L,0,o,o,o,o,o,A.ai))
return B.p(o,B.A(r,A.l,o,A.e,A.h,0,o,o),A.f,o,o,new B.o(o,o,w,n,v,new B.a7(A.ay,A.aC,A.x,m,o,o),A.n),o,o,o,D.bDX,D.bJp,o,o,o)},
cHB(d){var w=this,v=null,u=B.l(18),t=d?A.av.j(0.92):A.c.j(0.96),s=B.K(d?A.ct:A.bm,A.r,1)
return B.p(v,B.c9(B.A(B.a([w.j5(A.v7,"Print",new C.eJN(w),d),w.j5(A.zm,"Download PDF",new C.eJO(w),d),w.j5(A.qV,"Present",w.gaDa(),d)],x.p),A.l,v,A.e,A.h,0,v,v),A.t,v,A.y,v,v,v,v,v,A.aM),A.f,v,v,new B.o(t,v,s,u,v,v,A.n),v,v,v,A.yR,G.aoj,v,v,v)},
T2(d,e,f,g){var w,v=null
if(f==null)w=g?A.aT:A.dB
else w=g?A.ab:A.aL
return B.aI(v,v,v,v,B.W(d,w,v,v,v,20),v,v,v,f,v,v,v,v,e,A.cg)},
c8c(d,e){var w,v,u,t,s,r=this,q=null,p=B.a(["Home","Insert","School","Tools","Design","Transitions","View"],x.s),o=r.e
if(o==null)o=q
else{o=o.CW
o=(o==null?"":o).length!==0}w=o===!0
o=B.l(18)
v=d?A.av.j(0.92):A.c.j(0.96)
u=B.K(d?A.ct:A.bm,A.r,1)
t=x.f0
t=B.C(new B.N(p,new C.eGN(r,d),t),t.k("ak.E"))
t.push(new B.D(A3.anY,new B.fh(new C.eGO(r),q),q))
A.d.u(t,w?B.a([new B.D(U.wJ,r.aiS(A.kc,"Ending celebration",r.gcjy(),d),q),new B.D(U.wJ,r.aiS(A.I4,"Logo ring & frame",r.gckf(),d),q)],x.p):A.f6)
A.d.u(t,w?B.a([new B.D(U.wJ,r.aiS(A.lT,"Look and feel",r.gckg(),d),q),new B.D(U.wJ,r.aiS(A.pG,"Edit this slide's text",r.gckN(),d),q)],x.p):A.f6)
t.push(new B.D(U.wJ,B.hc(B.az(q,B.p(q,D.feI,A.f,q,q,new B.o(q,q,q,B.l(999),B.a([new B.ab(0,A.G,L.lJ.j(0.4),A.J,10)],x.V),D.au9,A.n),q,34,q,q,A.f4,q,q,q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eGP(r),q,q,q,q,q,q,!1,A.a4),q,"Books \u2014 write and print a fold & staple book",q,q),q))
t=B.c9(B.A(t,A.l,q,A.e,A.h,0,q,q),A.t,q,A.y,q,q,D.bJR,q,q,A.aM)
s=e?8:10
return B.p(q,B.x(B.a([t,B.c9(r.cvT(d),A.t,q,A.y,q,q,new B.Q(8,2,8,s),q,q,A.aM)],x.p),A.al,q,A.e,A.h,0,A.p),A.f,q,q,new B.o(v,q,u,o,q,q,A.n),q,q,q,A.yR,q,q,q,q)},
cvT(a3){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d=null,a0="Text Box",a1="New Slide",a2="Delete Slide"
switch(e.z){case"School":w=B.a([],x.p)
for(v=0;v<5;++v){u={}
t=D.dpK[v]
u.a=null
s=u.a=t.b
w.push(e.m1(e.cxE(s),t.a,new C.eIb(u,e),a3,D.aU5.q(0,s)))}w.push(e.j5(A.l0,"Notes Slide",new C.eIc(e),a3))
w.push(e.m1(A.I3,"Quiz",new C.eId(e),a3,!0))
w.push(e.m1(P.HD,"Worksheet",new C.eIo(e),a3,!0))
w.push(e.m1(A4.I7,"Flashcard",new C.eIz(e),a3,!0))
w.push(e.m1(A.Q6,"Lab Report",new C.eIK(e),a3,!0))
w.push(e.m1(A.qT,"Rubric",new C.eIR(e),a3,!0))
w.push(e.m1(A.pB,"Minutes",new C.eIS(e),a3,!0))
w.push(e.m1(A.oG,"Syllabus",new C.eIT(e),a3,!0))
w.push(e.m1(A.a44,"Timeline",new C.eIU(e),a3,!0))
return B.A(w,A.l,d,A.e,A.h,0,d,d)
case"Tools":w=B.a([],x.p)
for(v=0;v<74;++v){r=D.dr8[v]
w.push(e.m1(r.b,r.c,new C.eIV(e,r),a3,!D.aUb.q(0,A.a.i(r.a))))}return B.A(w,A.l,d,A.e,A.h,0,d,d)
case"Insert":return B.A(B.a([e.j5(A.x1,a0,e.gaPo(),a3),e.j5(A.v1,"Picture",new C.eIe(e),a3),e.j5(A.zz,"Bio link",new C.eIf(e),a3),e.j5(A.a43,"Table",new C.eIg(e),a3),e.j5(A.Qa,"Sticky",new C.eIh(e),a3),e.j5(A.ti,"Divider",new C.eIi(e),a3),e.j5(A.zJ,"Header",new C.eIj(e),a3),e.m1(A8.tf,"Rectangle",new C.eIk(e),a3,!0),e.m1(A.pz,"Circle",new C.eIl(e),a3,!0),e.m1(A.a3i,"Triangle",new C.eIm(e),a3,!0),e.m1(A.jt,"Arrow",new C.eIn(e),a3,!0),e.m1(D.bSo,"Parallelogram",new C.eIp(e),a3,!0),e.m1(D.bUZ,"Hexagon",new C.eIq(e),a3,!0),e.m1(A.ti,"Line",new C.eIr(e),a3,!0),e.m1(A.zm,"PDF",new C.eIs(e),a3,!0),e.m1(L.a4c,"Signature",new C.eIt(e),a3,!0),e.j5(A7.Dd,"Quote",new C.eIu(e),a3),e.j5(D.a2S,a1,new C.eIv(e),a3)],x.p),A.l,d,A.e,A.h,0,d,d)
case"Design":w=e.c
w.toString
w=B.aE(w,A.bZ,x.w).w
u=x.p
t=B.A(B.a([e.aQh("Wide 16:9",D.En,a3),e.aQh("Short 9:16",D.oZ,a3),new B.D(A.f1,B.n8(D.bX6,d,D.fTz,d,new C.eIw(e),d,d,d,d),d)],u),A.l,d,A.e,A.h,0,d,d)
q=B.A(B.a([e.bLF("This slide",!e.Q,a3,new C.eIx(e)),A.bn,e.aSz("All slides",e.Q,a3,new C.eIy(e),!0)],u),A.l,d,A.e,A.h,0,d,d)
p=e.bLG()
p=B.d(p,d,d,d,d,d,d,B.m(d,d,a3?A.bV:A.bP,d,d,d,d,d,d,d,d,10,d,d,A.a8,d,d,!0,d,d,d,d,d,d,d,d),d,d,d)
o=B.d("COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=x.cT
n=B.C(new B.N(D.a69,new C.eIA(e),n),n.k("ak.E"))
n=B.c9(B.A(n,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM)
m=B.d("TEXT COLORS",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
l=B.a([],u)
for(v=0;v<10;++v){k=D.dsa[v]
j=B.b1(k)
i=new B.ay(k===4294967295?A.dB:A.aT,1.5,A.r,-1)
l.push(new B.D(A.f1,B.az(d,B.p(d,d,A.f,d,d,new B.o(j,d,new B.bG(i,i,i,i),d,d,d,A.a6),d,24,d,d,d,d,d,24),A.y,!1,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,d,new C.eIB(e,k),d,d,d,d,d,d,!1,A.a4),d))}l=B.c9(B.A(l,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM)
j=B.d("SLIDE DESIGNS \xb7 first 5 free",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
h=$.bHE()
g=B.U(h).k("N<1,D>")
h=B.C(new B.N(h,new C.eIC(e,a3),g),g.k("ak.E"))
return new B.a5(w.a.a-20,d,B.x(B.a([t,A.P,q,A.am,p,A.P,o,A.ax,n,A.P,m,A.ax,l,A.P,j,A.ax,B.c9(B.A(h,A.l,d,A.e,A.h,0,d,d),A.t,d,A.y,d,d,d,d,d,A.aM),A.am,e.c4P(a3)],u),A.E,d,A.e,A.N,0,A.p),d)
case"Transitions":f=e.kf()
w=e.c
w.toString
w=B.aE(w,A.bZ,x.w).w
u=new C.eIa(e)
t=new C.eIW(e,a3)
q=x.p
p=B.a([],q)
if(f!=null){o=B.d("ELEMENT ANIMATION",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d)
n=t.$4(D.SV,f.dy,new C.eID(e,u,f),A.b2)
A.d.u(p,B.a([o,A.ax,n,A.P,B.d("SLIDE TRANSITION",d,d,d,d,d,d,B.m(d,d,a3?A.aF:A.an,d,d,d,d,d,d,d,d,10,d,d,A.H,d,d,!0,d,1,d,d,d,d,d,d),d,d,d),A.ax],q))}q=e.gdA()
q=q==null?d:q.r
p.push(t.$4(D.SV,q,new C.eIE(e,u),A.bo))
return new B.a5(w.a.a-20,d,B.x(p,A.E,d,A.e,A.N,0,A.p),d)
case"View":w=e.y?"Hide Notes":"Show Notes"
return B.A(B.a([e.j5(A.l0,w,new C.eIF(e),a3),e.j5(A.v7,"Print deck",new C.eIG(e),a3),e.m1(D.aq5,"Export JSON",new C.eIH(e),a3,!0),e.j5(A.fN,"Duplicate Slide",e.gaUQ(),a3),e.j5(A.ej,a2,e.gaTW(),a3),e.cBM(a3)],x.p),A.l,d,A.e,A.h,0,d,d)
case"Home":default:f=e.kf()
w=x.p
u=B.a([e.j5(D.a2S,a1,new C.eII(e),a3),e.j5(A.fN,"Duplicate",e.gaUQ(),a3),e.j5(A.ej,a2,e.gaTW(),a3),e.j5(A.qV,"Present",e.gaDa(),a3),e.j5(A.Ds,a0,e.gaPo(),a3),e.j5(A.Dl,"Fit Text",new C.eIJ(e),a3),e.j5(A.zm,"Download PDF",new C.eIL(e),a3)],w)
t=e.e
if(t!=null){t=t.w
t=t==="hati_kuhowa"||t==="hati_kuhoweya"}else t=!1
if(t)u.push(e.j5(A.jN,"Transfer",new C.eIM(e),a3))
if(f!=null){w=B.a([A.ae,e.j5(G.Ph,"Bold",new C.eIN(e,f),a3),e.j5(G.a2K,"Italic",new C.eIO(e,f),a3),e.j5(G.apH,"Underline",new C.eIP(e,f),a3),e.j5(Ai.Pi,"Bullets",new C.eIQ(e,f),a3),e.bUO(f,a3)],w)
if(!A.a.a_(f.db,"__design__"))w.push(e.bSe(a3))
w.push(e.j5(D.bR5,"Delete",e.gaTV(),a3))
A.d.u(u,w)}return B.A(u,A.l,d,A.e,A.h,0,d,d)}},
aQh(d,e,f){var w,v,u,t=null,s=this.e
s=s==null?t:s.d
w=e===D.oZ
v=x.p
u=B.a([B.d(d,t,t,t,t,t,t,G.acr,t,t,t)],v)
if(w)A.d.u(u,B.a([A.df,D.bWi],v))
return new B.D(A.f1,B.jC(t,t,t,B.A(u,A.l,t,A.e,A.N,0,t,t),t,new C.eEy(this,w,e),s===e,A.bo.j(0.25),t,t,t),t)},
cBM(d){var w,v,u,t,s,r=this,q=null,p=r.gdA()
if(p==null)return A.bM
w=p.w
if(!(w>0)){v=r.e
v=v==null?q:v.e
w=v==null?5:v}v=B.K(d?A.aT:A.cA,A.r,1)
u=B.l(8)
t=B.W(A.HB,d?A.aF:A.an,q,q,q,14)
s=B.aI(q,q,q,q,D.at5,q,q,q,new C.eJi(r,p),q,q,q,q,q,A.cg)
return B.p(q,B.A(B.a([t,s,B.d(""+w+"s",q,q,q,q,q,q,B.m(q,q,d?A.c:A.bp,q,q,q,q,q,q,q,q,11,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),B.aI(q,q,q,q,D.asX,q,q,q,new C.eJj(r,p),q,q,q,q,q,A.cg)],x.p),A.l,q,A.e,A.N,0,q,q),A.f,q,q,new B.o(q,q,v,u,q,q,A.n),q,q,q,A.Hi,A.n2,q,q,q)},
cxE(d){switch(d.a){case 6:return A4.I7
case 7:return A.I3
case 8:return P.HD
case 4:return A.zJ
default:return A.l0}},
bUO(d,e){var w=null,v=B.K(e?A.aT:A.cA,A.r,1),u=B.l(8),t=B.aI(w,w,w,w,D.at5,w,w,w,new C.eFI(this,d),w,w,w,w,w,A.cg),s=A.i.M(d.w)
return B.p(w,B.A(B.a([t,B.d(""+s,w,w,w,w,w,w,B.m(w,w,e?A.c:A.bp,w,w,w,w,w,w,w,w,w,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.aI(w,w,w,w,D.asX,w,w,w,new C.eFJ(this,d),w,w,w,w,w,A.cg)],x.p),A.l,w,A.e,A.N,0,w,w),A.f,w,w,new B.o(w,w,v,u,w,w,A.n),w,w,w,A.uN,A.n2,w,w,w)},
c4P(d){var w=null
return B.CD(B.E8(B.W(A9.a2V,d?A.ab:A.by,w,w,w,16),w,w,D.fZg,w,w,w),w,w,new C.eGf(),A.J,this.gbFR(),A.cq,"Slide layout",x.fO)},
m1(d,e,f,g,h){var w=null,v=B.l(14),u=B.l(14),t=g?A.c.j(0.06):A.ch,s=B.K(g?A.dq:A.bm,A.r,1),r=x.p,q=B.a([B.W(d,g?A.dy:A.bo,w,w,w,18)],r)
if(h)q.push(B.ao(w,B.p(w,D.Qh,A.f,w,w,D.FI,w,12,w,w,w,w,w,12),w,w,w,-6,-4,w))
return new B.D(A.f1,B.aG(!1,A.a3,!0,w,B.aM(!1,v,!0,B.eC(new B.D(A.hn,B.x(B.a([new B.an(A.a0,w,A.ad,A.f,q,w),A.cR,B.d(e,w,w,w,w,w,w,B.m(w,w,g?A.aR:A.by,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],r),A.l,w,A.e,A.N,0,A.p),w),w,new B.o(t,w,s,u,w,w,A.n),w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,f,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w)},
j5(d,e,f,g){return this.m1(d,e,f,g,!1)},
b9i(d,e){var w,v,u=this,t=null,s=u.e
s.toString
w=e?A.ah:A.aM
v=B.hT(t,new C.eJu(u,s,e,d),s.r.length,A.cq,t,w,new C.eJv(e),!1)
s=d?A.av:A.ch
w=B.a([],x.p)
if(e&&!u.kz())w.push(new B.D(A.cq,B.IJ(E.atk,new C.eJw(u),B.ne(t,A.bo,t,t,t,t,t,t,t,t,t,t,E.aUS,t,t,t,t),"Add slide"),t))
w.push(B.E(v,1))
return B.p(t,B.x(w,A.l,t,A.e,A.h,0,A.p),A.f,s,t,t,t,t,t,t,t,t,t,t)},
bJG(d,e,f){var w,v=null,u=this.e
if(u==null)w=v
else{u=u.d===D.oZ?0.5625:1.7777777777777777
w=u}if(w==null)w=1.7777777777777777
u=f?8:16
return new B.D(new B.Q(u,u,u,u),new B.bK(A.aZ,v,v,new B.fH(w,B.az(v,B.cm(new C.eEY(this,d,e)),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.eEZ(this),v,v,v,v,v,v,!1,A.a4),v),v),v)},
bJI(b3,b4,b5,b6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7=this,a8=null,a9=a7.e,b0=(a9==null?a8:C.km(a9.w))===!0,b1=b0&&C.fT0(b3),b2=b0&&b3.b===D.lw&&A.a.a_(b3.db,"marriage_sign_placed_")
if(b0){a9=b3.db
w=a9==="__kiapo_video__"||A.a.a_(a9,"__kiapo_video___")}else w=!1
if(!a7.kz())v=!b0||a7.c7g(b3)
else v=!1
if(!a7.kz())u=!b0||a7.c7f(b3)
else u=!1
t=v&&a7.r===b3.a
s=b4/960
a9=b3.db
r=A.a.a_(a9,"__design__")||A.a.a_(b3.a,"design_")?A.c9:A.bo
q=b0&&A.a.a_(a9,"marriage_field_")
if(b0)p=a9==="marriage_locked_nim_akuna_deni"||a9==="marriage_locked_nim_akuna_box"||a9==="marriage_locked_nim_akuna_tick"||a9==="marriage_locked_nim_akuna_hit"
else p=!1
if(w&&C.hiC(b3))o=a8
else if(p&&!a7.kz())o=a7.gcg2()
else o=a7.kz()?a8:new C.eEM(a7,w,b3,b1,b2,v)
a9=b3.a
n=b3.c
m=b3.d
l=b3.e
k=b3.f
j=p?A.bY:A.iT
i=w&&C.hiC(b3)&&a7.Ax()?new C.eEN(a7,b3):a8
h=v&&b3.b===D.d3?new C.eEO(a7,b3):a8
g=u?new C.eEP(a7,b3,b4,b5):a8
f=b3.cx
if(t)if(a7.w===a9)e=A.bi
else e=q?A.c3:r
else e=A.L
e=B.K(e,A.r,t?2:0)
d=B.l(t?6:0)
if(b1)a0=A.c3.j(0.08)
else a0=b3.b===D.lw?A.L:a8
if(b1){a1=a7.kz()?"":"Tap to sign"
a1=B.as(B.d(a1,a8,a8,a8,a8,a8,a8,B.m(a8,a8,A.c3.j(0.7),a8,a8,a8,a8,a8,a8,a8,a8,10*s,a8,a8,A.O,a8,a8,!0,a8,a8,a8,a8,a8,a8,a8,a8),a8,a8,a8),a8,a8,a8)}else{if(a7.w===a9){a1=a7.c
a1.toString
a1=!(B.aE(a1,A.bZ,x.w).w.a.a<900)}else a1=!1
a2=w&&a7.Ax()
a3=b3.b===D.d3
a4=a3?a7.XL(b3):a8
a5=a3?a7.avR(b3):a8
if(a7.w===a9){a6=a7.c
a6.toString
a6=!(B.aE(a6,A.bZ,x.w).w.a.a<900)}else a6=!1
a6=a6?new C.eEQ(a7,b3):a8
a3=v&&a3?new C.eER(a7,b3):a8
a6=C.b41(q,a4,a1,b3,a5,a2,a3,new C.eES(a7,w,b3,v),a6,s,t,!0)
a1=a6}d=B.a([B.p(a8,a1,A.f,a8,a8,new B.o(a0,a8,e,d,a8,a8,A.n),a8,a8,a8,a8,a8,a8,a8,a8)],x.p)
if(t&&u&&a7.w!==a9){e=B.l(6)
d.push(B.ao(-4,B.az(a8,B.p(a8,D.bZ8,A.f,a8,a8,new B.o(r,a8,B.K(A.c,A.r,1.5),e,a8,a8,A.n),a8,22,a8,a8,a8,a8,a8,22),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eET(a7,b3,b4,b5),a8,a8,new C.eEU(a7,b3),a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-4,a8,a8))}if(b0&&!a7.kz()&&b3.db==="marriage_locked_nim_n_4")d.push(B.ao(a8,B.az(a8,B.p(a8,D.bZT,A.f,a8,a8,new B.o(A.d_,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a7.gc2j(),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
if(b0&&!a7.kz()&&A.a.a_(b3.db,"marriage_field_tarehe:"))d.push(B.ao(a8,B.az(a8,B.p(a8,D.c0y,A.f,a8,a8,new B.o(A.c3,a8,B.K(A.c,A.r,1.2),a8,B.a([new B.ab(0,A.G,A.w.j(0.25),A.J,4)],x.V),a8,A.a6),a8,20,a8,a8,a8,a8,a8,20),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEV(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8,-6,-6,a8))
e=!1
if(t)if(b3.b===D.d3)if(a7.w!==a9){e=a7.c
e.toString
e=B.aE(e,A.bZ,x.w).w.a.a<900}if(e)d.push(B.ao(-28,B.as(B.az(a8,B.p(a8,D.h7q,A.f,a8,a8,new B.o(A.bo,a8,a8,B.l(999),B.a([new B.ab(0,A.G,A.w.j(0.2),A.J,8)],x.V),a8,A.n),a8,a8,a8,a8,A.lo,a8,a8,a8),A.y,!1,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,a8,new C.eEW(a7,b3),a8,a8,a8,a8,a8,a8,!1,A.a4),a8,a8,a8),a8,a8,0,0,a8,a8))
return B.ao(a8,B.az(j,B.eI(A.z,f,new B.an(A.a0,a8,A.ad,A.f,d,a8),a8),A.y,!1,a8,h,a8,a8,a8,a8,a8,a8,i,a8,a8,a8,a8,a8,a8,g,a8,a8,a8,a8,a8,a8,a8,o,a8,a8,a8,a8,a8,a8,!1,A.a4),k*b5,new B.bf("el_"+a9,x.W),n*b4,a8,m*b5,l*b4)},
aSz(d,e,f,g,h){var w,v,u,t,s,r=null
if(e)w=A.bo.j(0.25)
else w=f?A.c.j(0.06):A.w.j(0.04)
v=B.l(10)
u=B.K(e?A.bo:A.bw,A.r,1)
if(e)t=A.bo
else t=f?A.aF:A.an
s=x.p
t=B.a([B.d(d,r,r,r,r,r,r,B.m(r,r,t,r,r,r,r,r,r,r,r,10,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],s)
if(h)A.d.u(t,B.a([A.df,B.p(r,D.Qh,A.f,r,r,D.FI,r,12,r,r,r,r,r,12)],s))
return B.az(r,B.p(r,B.A(t,A.l,r,A.e,A.N,0,r,r),A.f,r,r,new B.o(w,r,u,v,r,r,A.n),r,r,r,r,A.hl,r,r,r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,!1,A.a4)},
bLF(d,e,f,g){return this.aSz(d,e,f,g,!1)},
cfN(d,e,f){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=d.a
if(m.cy!==k){m.cy=k
w=m.cx
v=w.h(0,k)
if(v!=null){v.U$=$.ax()
v.R$=0}v=d.c
w.n(0,k,new B.au(new B.ba(v,A.b6,A.aP),$.ax()))}k=m.cx.h(0,k)
k.toString
w=f?8:10
v=f?8:10
u=e?A.av:A.aS
t=f?A.y4:l
if(f)s=new B.bG(new B.ay(e?A.bw:A.bm,1,A.r,-1),A.a1,A.a1,A.a1)
else s=l
r=f?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tI,16)],x.V):l
q=x.p
p=B.A(B.a([B.d("Speaker Notes",l,l,l,l,l,l,B.m(l,l,e?A.ab:A.by,l,l,l,l,l,l,l,l,12,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),A.b3,m.b4k(e,new C.eGR(m))],q),A.l,l,A.e,A.h,0,l,l)
o=B.m(l,l,e?A.c:A.aL,l,l,l,l,l,l,l,l,12,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
n=B.m(l,l,e?A.bV:A.bP,l,l,l,l,l,l,l,l,l,l,l,l,l,l,!0,l,l,l,l,l,l,l,l)
return B.p(l,B.x(B.a([p,A.am,B.E(B.aN(l,A.Z,!1,l,!0,A.t,l,B.aO(),k,l,l,l,l,l,2,B.bz(l,new B.b6(4,B.l(10),A.du),l,A.bU,l,l,l,l,!0,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,l,n,"Speaker notes for this slide\u2026",l,l,l,l,l,!0,l,l,l,!0,!0,!1,l,l,l,l,l,l,l,l,l,l,l,l,l,l),A.y,!0,l,!0,l,!1,l,A.ak,l,l,l,l,l,l,l,l,l,2,l,l,!1,"\u2022",l,new C.eGS(m,d),l,l,l,!1,l,l,!1,l,!0,l,A.ac,l,l,l,l,l,l,l,l,l,l,l,o,!0,A.a7,l,A.ao,l,l,l,l),1)],q),A.al,l,A.e,A.h,0,A.p),A.f,l,l,new B.o(u,l,s,t,r,l,A.n),l,96,l,l,new B.Q(12,w,12,v),l,l,l)},
aW9(a3,a4,a5,a6){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0=this,a1=null,a2=a0.kf()
if(a2==null)return A.bM
w=new C.eFW(a0,a6)
v=B.a([4279310375,4294967295,4280640491,4278556265,4292617766,4286331629,4293548044,4281549141],x.t)
u=A.i.D(1-a2.c,0.06,1)
t=A.i.D(1-a2.d,0.06,1)
s=A.i.D(1-a2.e,0.01,1)
r=A.i.D(1-a2.f,0.01,1)
q=a5?A.e0:a1
p=x.p
o=B.a([],p)
n=!a5
if(n)o.push(B.A(B.a([B.d("Format",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.c:A.a_,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,A.u,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),A.b3,a0.b4k(a3,a0.gbQf())],p),A.l,a1,A.e,A.h,0,a1,a1))
if(n)o.push(A.T)
o.push(B.d("Size",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1))
o.push(B.A(B.a([D.fU5,B.E(B.l3(a1,a1,a1,u,0.05,new C.eFX(w,a2),A.i.D(a2.e,0.05,u)),1)],p),A.l,a1,A.e,A.h,0,a1,a1))
o.push(B.A(B.a([D.h5O,B.E(B.l3(a1,a1,a1,t,0.05,new C.eFY(w,a2),A.i.D(a2.f,0.05,t)),1)],p),A.l,a1,A.e,A.h,0,a1,a1))
n=a2.b
m=n===D.d3
if(m)o.push(B.A(B.a([D.fNA,B.E(B.l3(a1,a1,a1,96,10,new C.eFZ(w,a2),A.i.D(a2.w,10,96)),1)],p),A.l,a1,A.e,A.h,0,a1,a1))
l=n===D.kj
if(l||n===D.lw||n===D.Uh)A.d.u(o,B.a([B.d("Crop / position",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1),B.A(B.a([D.h_4,B.E(B.l3(a1,a1,a1,s,0,new C.eG_(w,a2),A.i.D(a2.c,0,s)),1)],p),A.l,a1,A.e,A.h,0,a1,a1),B.A(B.a([D.h77,B.E(B.l3(a1,a1,a1,r,0,new C.eG0(w,a2),A.i.D(a2.d,0,r)),1)],p),A.l,a1,A.e,A.h,0,a1,a1)],p))
if(l){l=B.d("Shape (frame)",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
k=B.a([],p)
for(j=0;j<7;++j){i={}
h=D.DM[j]
i.a=null
g=h.a
i.a=g
k.push(B.jC(a1,a1,a1,B.d(h.b,a1,a1,a1,a1,a1,a1,A.q0,a1,a1,a1),a1,new C.eG1(i,w,a2),a2.go===g,a1,a1,a1,a1))}k=B.bZ(A.bI,k,A.br,a1,6,6)
i=B.d("Ring",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
h=B.a([],p)
for(j=0;j<11;++j){f={}
e=D.DF[j]
f.a=null
g=e.a
f.a=g
h.push(B.jC(a1,a1,a1,B.d(e.b,a1,a1,a1,a1,a1,a1,A.q0,a1,a1,a1),a1,new C.eG2(f,w,a2),a2.id===g,a1,a1,a1,a1))}A.d.u(o,B.a([A.P,l,A.am,k,A.P,i,A.am,B.bZ(A.bI,h,A.br,a1,6,6)],p))}o.push(A.P)
if(m){m=B.d("Text color",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
l=x.gN
l=B.C(new B.N(v,new C.eG3(w,a2),l),l.k("ak.E"))
k=x.fw
A.d.u(o,B.a([m,A.am,B.bZ(A.bI,l,A.br,a1,6,6),A.af,B.hvb(new C.eG4(w,a2),D.cDM,B.ev([a2.as],k),!0,a1,k)],p))}if(n===D.f7){n=B.d("Fill",a1,a1,a1,a1,a1,a1,B.m(a1,a1,a3?A.aF:A.an,a1,a1,a1,a1,a1,a1,a1,a1,11,a1,a1,a1,a1,a1,!0,a1,a1,a1,a1,a1,a1,a1,a1),a1,a1,a1)
m=x.gN
m=B.C(new B.N(v,new C.eG5(w,a2),m),m.k("ak.E"))
A.d.u(o,B.a([n,B.bZ(A.bI,m,A.br,a1,0,6)],p))}o.push(A.af)
o.push(B.dh(D.c0k,a1,D.h1a,new C.eG6(a0,a5),B.bo(A.bD,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1,a1)))
d=B.cw(o,a1,a1,a1,q,a1,A.ah,a5)
if(a5)return d
q=a3?A.ct:A.c
p=a4?A.y4:a1
if(a4)o=new B.bG(new B.ay(a3?A.bw:A.bm,1,A.r,-1),A.a1,A.a1,A.a1)
else o=a1
return B.p(a1,d,A.f,a1,a1,new B.o(q,a1,o,p,a4?B.a([new B.ab(0,A.G,A.w.j(0.12),A.tI,16)],x.V):a1,a1,A.n),a1,a1,a1,a1,A.CB,a1,a1,a1)},
bV4(d){return this.aW9(d,!1,!1,null)},
ceV(d,e,f,g,h,i){var w,v,u,t,s=this,r=null,q=s.fy
q===$&&B.c()
q=B.c6(q,new C.eG9(s,f,d,e),r)
w=B.d(i,r,r,r,r,r,r,D.fCH,r,r,r)
v=s.c
v.toString
u=x.p
v=B.a([q,A.bb,B.E(B.x(B.a([w,A.bF,A.cR,s.bFb(D.d7o,d,B.P(v).ax.a===A.I)],u),A.E,r,A.e,A.h,0,A.p),1)],u)
q=x.V
A.d.u(v,B.a([A.ae,B.dP(B.hc(B.aG(!1,A.a3,!0,r,B.aM(!1,r,!0,B.eC(D.fla,r,new B.o(r,r,B.K(A.c.j(0.55),A.r,1.3),r,B.a([new B.ab(0,A.G,A.c3.j(0.4),A.et,8)],q),D.aug,A.a6),r,r,r),A.cU,!0,r,r,r,r,r,r,r,r,r,r,r,g,r,r,r,r,r,r,r),A.f,A.L,0,r,r,r,r,r,A.ai),r,"Documents (Hati)",r,r),A.J)],u))
t=B.A(v,A.l,r,A.e,A.h,0,r,r)
w=s.c
w.toString
if(B.P(w).ax.a!==A.I)q=B.a7y(A.bh,20)
else{w=B.l(20)
v=B.a([D.bgX,D.bhp],x.O)
u=B.K(d.j(0.45),A.r,1.2)
q=new B.o(r,r,u,w,B.a([new B.ab(0,A.G,d.j(0.18),A.cz,14)],q),new B.a7(A.ay,A.aC,A.x,v,r,r),A.n)}return B.p(r,t,A.f,r,r,q,r,r,r,r,A.bU,r,r,r)},
asv(d,e,f,g){var w,v,u=null,t=this.c
t.toString
if(B.P(t).ax.a===A.dm){t=B.l(22)
w=A.a.q(f,"Kiapo")
v=B.a7y(w?A.bh:A.aG,22)
w=w?A.bh:A.aG
return B.aG(!1,A.a3,!0,u,B.aM(!1,t,!0,B.eC(B.x(B.a([new B.VP(w,48,e,u,u),A.af,B.d(f,u,u,u,u,u,u,D.fuh,A.K,u,u)],x.p),A.l,u,A.b8,A.h,0,A.p),u,v,u,A.CJ,1/0),u,!0,u,u,u,u,u,u,u,u,u,u,u,g,u,u,u,u,u,u,u),A.f,A.L,0,u,u,u,u,u,A.ai)}t=this.fy
t===$&&B.c()
return B.c6(t,new C.eDH(this,g,d,e,f),u)},
aia(d,e){return this.crF(d,e)},
crF(d,e){var w=0,v=B.j(x.T),u,t=this,s,r,q,p
var $async$aia=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=$.ax()
q=new B.au(new B.ba(e,A.b6,A.aP),r)
p=t.c
p.toString
w=3
return B.b(B.cg(null,null,!0,null,new C.eHO(d,q),p,null,!0,!0,x.N),$async$aia)
case 3:s=g
q.U$=r
q.R$=0
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$aia,v)},
QS(d){var w=d.bU()
return""+B.bL(w)+"/"+B.bX(w)+"/"+B.bC(w)}}
C.agF.prototype={}
C.aBf.prototype={
S(){return new C.bfC(null,null)}}
C.bfC.prototype={
gcE6(){var w,v=this.a.c,u=v.f.bU(),t=""+B.bL(u)+"/"+B.bX(u)+"/"+B.bC(u),s=v.w
if(s==="marriage_agreement")return"Hati ya Kuhowesha \xb7 "+t
if(s==="hati_kuhowa")return"Hati ya Kuhowa \xb7 "+t
if(s==="hati_kuhoweya")return"Hati ya Kuhoweya \xb7 "+t
if(s==="hati_kiapo_uongozi"){v=v.x
w=A.a.i(v==null?"":v)
return w.length===0?"Hati ya Kiapo cha Uongozi \xb7 "+t:"Kiapo cha Uongozi \xb7 "+w+" \xb7 "+t}return""+v.r.length+" slides \xb7 "+t},
Y(){var w,v=this,u=null
v.a3()
w=B.bn(u,A.qD,u,1,u,v)
w.f1(0,!0)
v.d!==$&&B.aQ()
v.d=w
w=B.bn(u,D.bCs,u,1,u,v)
w.cr(0)
v.e!==$&&B.aQ()
v.e=w},
t(){var w=this.d
w===$&&B.c()
w.t()
w=this.e
w===$&&B.c()
w.t()
this.byq()},
JJ(d){var w=0.12+d*0.09,v=A.i.D(w+0.55,0,1),u=this.e
u===$&&B.c()
u=u.x
u===$&&B.c()
return A.cj.az(0,new B.hS(w,v,A.cj).az(0,u))},
B(d){var w,v=null,u=this.d
u===$&&B.c()
w=this.e
w===$&&B.c()
return B.as(new B.D(D.bIb,B.c6(new B.hd(B.a([u,w],x.dS)),new C.dbs(this),v),v),v,v,v)}}
C.bfR.prototype={
B(d){var w=null,v=B.l(22),u=B.K(A.aL,A.r,1),t=x.p
return B.as(new B.D(D.bIs,B.aG(!1,A.a3,!0,w,B.p(w,B.bu(B.l(22),B.x(B.a([new B.D(D.bHE,B.x(B.a([B.p(w,D.bZZ,A.f,w,w,new B.o(A.aA.j(0.12),w,w,B.l(16),w,w,A.n),w,52,w,w,w,w,w,52),A.aO,D.h3l,A.T,B.d('"'+this.c+'" will be permanently removed. This cannot be undone.',w,w,w,w,w,w,D.fE_,A.K,w,w)],t),A.l,w,A.e,A.h,0,A.p),w),A.e3,D.bBv,B.A(B.a([B.E(B.bO(!1,D.fSe,w,w,!0,w,w,w,new C.dbQ(d),w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.bP,w,w,w,w,w,A.nF,w,A.p3,w,w,w,w,w,w)),1),B.p(w,w,A.f,A.bs,w,w,w,48,w,w,w,w,w,1),B.E(B.bO(!1,D.fXI,w,w,!0,w,w,w,new C.dbR(d),w,B.fs(w,w,w,w,w,w,w,w,w,w,w,A.aA,w,w,w,w,w,A.nF,w,A.p3,w,w,w,w,w,w)),1)],t),A.l,w,A.e,A.h,0,w,w)],t),A.l,w,A.e,A.N,0,A.p),A.aq),A.f,w,Ab.Y9,new B.o(A.av,w,u,v,D.d7M,w,A.n),w,w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w),w,w,w)}}
C.KM.prototype={
S(){return new C.bfB()}}
C.bfB.prototype={
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
r=B.p(o,B.W(q.c,m,o,o,o,18),A.f,o,o,new B.o(s,o,o,r,o,o,A.n),o,32,o,o,o,o,o,32)
q=q.d
return B.dP(B.d3(B.az(o,B.uL(B.cT(o,B.A(B.a([r,A.as,new B.di(1,A.cm,B.d(q,o,2,A.a2,o,o,o,B.m(o,o,l?A.f_:A.c,o,o,o,o,o,o,o,o,13,o,o,A.O,o,1.2,!0,o,o,o,o,o,o,o,o),A.K,o,o),o)],x.p),A.l,o,A.b8,A.N,0,o,o),o,o,A.b0,new B.o(n,o,u,v,t,o,A.n),A.eH,o,o,o,o,A.nH,o,o,1/0),A.cj,A.jq,w),A.y,!1,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,o,new C.dbn(p,d),new C.dbo(p),new C.dbp(p),new C.dbq(p),o,o,o,!1,A.a4),k),new B.r(0,(1-k)*16))}}
C.QK.prototype={
B(d){var w=this,v=null,u=A.c.j(0.04),t=B.l(16),s=B.l(16),r=B.l(14),q=B.K(A.c.j(0.5),A.r,1.2),p=x.p
return B.aG(!1,A.a3,!0,t,B.aM(!1,s,!0,new B.D(A.eV,B.A(B.a([B.p(v,B.W(w.c,A.c,v,v,v,22),A.f,v,v,new B.o(v,v,q,r,v,new B.a7(A.ay,A.aC,A.x,w.d,v,v),A.n),v,46,v,v,v,v,v,46),A.eu,B.E(B.x(B.a([B.d(w.e,v,v,v,v,v,v,A.nf,v,v,v),A.bF,B.d(w.f,v,v,v,v,v,v,B.m(v,v,A.c.j(0.55),v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],p),A.E,v,A.e,A.h,0,A.p),1),B.W(A.eI,A.c.j(0.4),v,v,v,v)],p),A.l,v,A.e,A.h,0,v,v),v),v,!0,v,v,v,v,v,v,v,v,v,v,v,w.r,v,v,v,v,v,v,v),A.f,u,0,v,v,v,v,v,A.ai)}}
C.a0Z.prototype={
S(){return new C.aGR(D.dr,null,null)}}
C.aGR.prototype={
ga_6(){var w,v=this,u=v.w
if(u===$){w=B.bn(null,D.bC1,null,1,null,v)
v.w!==$&&B.bD()
v.w=w
u=w}return u},
b9M(d){if(!this.a.c.ay)return
this.x=d
this.ga_6().iC(0,0)},
Y(){var w,v=this
v.a3()
w=v.a
v.d=A.o.D(w.d,0,w.c.r.length-1)
Y.CU(O.aby)
Y.him(!1)
v.Sk()},
t(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.ga_6().t()
v=w.z
if(v!=null)v.a1(0)
Y.CU(O.KL)
Y.bFD()
w.bAy()},
cH_(){B.ju()
this.m(new C.eKt())
var w=this.c.L(x.q).f
w.Mh()
if($.bnz)w.T(D.foy)},
Sk(){var w,v=this,u=v.f
if(u!=null)u.a1(0)
if(!v.r||v.y)return
u=v.a.c
w=v.d
w===$&&B.c()
v.f=B.cz(B.dw(0,0,0,0,0,A.o.D(C.htn(u,w),1,120)),new C.eKj(v))},
cGC(){var w,v=this
v.m(new C.eKs(v))
if(v.r)v.Sk()
else{w=v.f
if(w!=null)w.a1(0)}},
gaY5(){var w=this.a.c.db
return(w==null?"":w).length!==0},
cAw(){var w=this,v=w.f
if(v!=null)v.a1(0)
w.m(new C.eKk(w))
v=w.z
if(v!=null)v.a1(0)
if(w.a.c.ch&&w.r)w.z=B.cz(A.lN,new C.eKl(w))},
azZ(){var w,v,u=this,t=u.a.c,s=t.r.length
if(u.y){t=u.z
if(t!=null)t.a1(0)
if(u.a.c.ch){u.m(new C.eKf(u))
u.Sk()}return}w=u.d
w===$&&B.c()
v=s-1
if(w===v&&u.gaY5()){u.cAw()
return}if(w>=v)t=t.ch&&s>1
else t=!0
if(t){u.m(new C.eKg(u,A.o.F(w+1,s)))
u.b9M(w)
u.Sk()}},
cqj(){var w,v=this,u=v.a.c,t=u.r.length
if(v.y){if(!u.ch)return
u=v.z
if(u!=null)u.a1(0)
v.m(new C.eKh(v))
v.Sk()
return}w=v.d
w===$&&B.c()
if(w<=0)u=u.ch&&t>1
else u=!0
if(u){v.m(new C.eKi(v,w,t))
v.b9M(w)
v.Sk()}},
cC1(d){var w,v=this,u=v.e
if(u===D.cn){u=v.d
u===$&&B.c()
return new B.lY(d,new B.bf(u,x.ac))}w=v.cC2(u)
u=v.d
u===$&&B.c()
return B.oF(new B.lY(d,new B.bf(u,x.ac)),w,new C.eKq(),A.b0,A.b0,new C.eKr(v))},
cC2(d){switch(d.a){case 8:case 9:case 10:case 11:case 19:return D.bCo
case 16:return A.iR
case 18:return A.n_
default:return A.mf}},
cC0(d,e,f){var w,v,u,t=null,s=B.cG(A.cj,f,t)
switch(d.a){case 0:return e
case 1:case 13:case 18:return new B.d2(s,!1,e,t)
case 2:case 17:w=x.K
return B.jO(e,new B.bh(s,new B.bq(A.tJ,A.J,w),w.k("bh<bP.T>")),t,!0)
case 3:w=x.K
return B.jO(e,new B.bh(s,new B.bq(A.Uv,A.J,w),w.k("bh<bP.T>")),t,!0)
case 4:case 21:w=x.K
return B.jO(e,new B.bh(s,new B.bq(A.hr,A.J,w),w.k("bh<bP.T>")),t,!0)
case 5:w=x.K
return B.jO(e,new B.bh(s,new B.bq(A.tH,A.J,w),w.k("bh<bP.T>")),t,!0)
case 6:case 16:w=x.b
return B.im(A.z,new B.d2(s,!1,e,t),t,new B.bh(s,new B.bq(0.82,1,w),w.k("bh<bP.T>")))
case 7:w=x.b
return B.im(A.z,new B.d2(s,!1,e,t),t,new B.bh(s,new B.bq(1.18,1,w),w.k("bh<bP.T>")))
case 8:return B.c6(s,new C.eKm(s),e)
case 9:return B.c6(s,new C.eKn(s),e)
case 10:return B.c6(s,new C.eKo(s),e)
case 11:return B.c6(s,new C.eKp(s),e)
case 12:w=x.b
return new B.d2(s,!1,B.im(A.z,e,t,new B.bh(s,new B.bq(1.03,1,w),w.k("bh<bP.T>"))),t)
case 14:w=s.gp(0)
v=x.K
return B.jg(B.jO(e,new B.bh(s,new B.bq(A.tJ,A.J,v),v.k("bh<bP.T>")),t,!0),A.t,new C.buT(w,t))
case 15:w=x.K
return B.jO(e,new B.bh(s,new B.bq(A.Uv,A.J,w),w.k("bh<bP.T>")),t,!0)
case 19:w=B.dr()
w.n5((1-s.gp(0))*2)
v=s.gp(0)
u=s.gp(0)
w.k7(v,u,v,1)
return B.fA(A.z,B.d3(e,s.gp(0)),t,w,!0)
case 20:return B.eI(A.z,(1-s.gp(0))*0.2,new B.d2(s,!1,e,t),t)}},
B(d){var w,v,u,t,s,r,q,p,o,n=this,m=null,l=n.a.c,k=n.d
k===$&&B.c()
w=l.r[k]
if(l.ay){v=n.x
u=B.jg(new C.aqk(B.c6(n.ga_6(),new C.eKu(n,v,w),m),m),A.t,m)}else{t=B.qs(new C.Fw(w,!0,!1,m))
l=B.b1(w.e)
u=n.cC1(B.eb(B.jg(t,A.t,m),l,!0))}l=B.l(20)
k=x.p
s=B.p(m,B.A(B.a([B.d(n.r?"Auto "+C.htn(n.a.c,n.d)+"s":"Manual",m,m,m,m,m,m,A.p9,m,m,m),A.bn,D.c1r],k),A.l,m,A.e,A.N,0,m,m),A.f,m,m,new B.o(A.b5,m,m,l,m,m,A.n),m,m,m,m,A.hm,m,m,m)
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
l.push(B.bR(0,new C.Ou(new C.Fn(q,p,o,r==null?"":r),!1,!0,m),0,0,0))}else{r=q.c.d===D.oZ?0.5625:1.7777777777777777
l.push(B.as(new B.fH(r,B.jg(B.v2(A.ag,u,!0,4,1,!0,!0,m),A.t,m),m),m,m,m))}if(!$.bnz){r=B.IJ(A.ls,new C.eKv(d),B.ne(m,A.b5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)
k=B.a([B.ao(m,B.bm(!0,B.A(B.a([r,A.ae,B.IJ(B.W(n.r?Ao.v6:A.he,m,m,m,m,m),n.gcGB(),B.ne(m,A.b5,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m),m)],k),A.l,m,A.e,A.h,0,m,m),!0,!1,A.ag,!0,!0),m,m,12,m,12,m)],k)
if(!n.y){r=B.l(20)
k.push(B.ao(16,B.bm(!0,B.p(m,B.d(""+(n.d+1)+" / "+n.a.c.r.length,m,m,m,m,m,m,A.h6,m,m,m),A.f,m,m,new B.o(A.b5,m,m,r,m,m,A.n),m,m,m,m,A.hm,m,m,m),!0,!1,A.ag,!0,!0),m,m,m,16,m,m))}A.d.u(l,k)}l.push(B.ao(m,B.bm(!0,B.az(A.bY,B.p(A.lC,$.bnz?A.bM:s,A.f,m,m,m,m,64,m,m,D.bD7,m,m,150),A.y,!1,m,n.gcGZ(),m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,!1,A.a4),!0,!1,A.ag,!0,!0),m,m,m,0,0,m))
return B.c4(m,A.w,B.az(m,new B.an(A.a0,m,A.b1,A.t,l,m),A.y,!1,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,new C.eKw(n,d),m,m,m,!1,A.a4),m,!1,!1,m,m)}}
C.KS.prototype={
B(d){var w=null
return B.p(w,B.bm(!0,new B.D(E.anJ,this.c,w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b9i,w,w,w,w,w,w,w,w)}}
C.buT.prototype={
jt(d){return new B.a4(0,0,0+d.a*A.i.D(this.b,0,1),0+d.b)},
kb(d){return d.b!==this.b}}
C.bkB.prototype={
B(d){var w,v,u,t,s=this,r=null,q=s.c
switch(q){case"circle":w=B.l(999)
break
case"rounded":w=B.l(18)
break
case"arch":w=D.b64
break
default:w=B.l(6)
break}v=s.e
u=B.K(v?A.aD:A.L,A.r,2.5)
if(q==="circle")q=B.l(999)
else{t=B.l(q==="rounded"?9:3)
q=t}w=B.cT(r,B.as(B.p(r,r,A.f,r,r,new B.o(r,r,r,q,r,E.x9,A.n),r,30,r,r,r,r,r,30),r,r,r),r,r,A.b0,new B.o(s.f,r,u,w,r,r,A.n),A.ha,r,64,r,r,r,r,r,64)
return B.az(r,new B.a5(78,r,B.x(B.a([w,A.am,B.d(s.d,r,1,A.a2,r,r,r,B.m(r,r,v?A.aD:s.r,r,r,r,r,r,r,r,r,11.5,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],x.p),A.l,r,A.e,A.h,0,A.p),r),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,s.w,r,r,r,r,r,r,!1,A.a4)}}
C.bkA.prototype={
B(d){var w,v,u,t,s,r=this,q=null,p=r.c,o=D.dG2.h(0,p)
if(o==null)o=D.drj
p=p==="none"
w=p?q:new B.a7(A.a5,A.a9,A.x,o,q,q)
p=p?A.cC.j(0.25):q
v=r.e
u=v?B.K(A.aD,A.r,2.5):q
t=r.r.j(0.15)
s=v?I.ash:q
w=B.p(q,B.p(q,s,A.f,q,q,new B.o(t,q,q,q,q,q,A.a6),q,q,q,q,q,q,q,q),A.f,q,q,new B.o(p,q,u,q,q,w,A.a6),q,52,q,q,A.eC,q,q,52)
return B.az(q,new B.a5(66,q,B.x(B.a([w,A.am,B.d(r.d,q,1,A.a2,q,q,q,B.m(q,q,v?A.aD:r.f,q,q,q,q,q,q,q,q,10.5,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),A.K,q,q)],x.p),A.l,q,A.e,A.h,0,A.p),q),A.y,!1,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,r.w,q,q,q,q,q,q,!1,A.a4)}}
C.aMH.prototype={
aX(){this.b7()
this.b5()
this.dI()},
t(){var w=this,v=w.b9$
if(v!=null)v.a6(0,w.gdC())
w.b9$=null
w.a2()}}
C.aOJ.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.bAH.prototype={}
C.aOK.prototype={
t(){var w=this,v=w.a9$
if(v!=null)v.a6(0,w.gbC())
w.a9$=null
w.a2()},
aX(){this.b7()
this.b5()
this.bD()}}
C.b44.prototype={}
C.Xo.prototype={
S(){return new C.aGP()},
bkA(d){return this.e.$1(d)}}
C.aGP.prototype={
gb8_(){var w,v,u,t,s=this.e
if(s==null)return null
for(w=this.a.d,v=w.length,u=0;u<v;++u){t=w[u]
if(t.a===s)return t}return null},
gabZ(){var w,v
if(this.d==="all")return B.bp(this.a.d,!0,x.I)
w=this.gb8_()
v=x.D
return w==null?B.a([],v):B.a([w],v)},
gaR8(){if(this.d==="all")return"All presentations ("+this.a.d.length+")"
var w=this.gb8_()
w=w==null?null:w.b
return w==null?"Pick a presentation":w},
gb9h(){return A.d.cF(this.gabZ(),0,new C.eK_())},
Y(){var w,v=this
v.a3()
w=v.a.d
if(w.length!==0)v.e=A.d.gH(w).a
v.RW()},
RW(){var w=0,v=B.j(x.H),u,t=this,s
var $async$RW=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(C.b4G(s.c,s.f),$async$RW)
case 3:s=e
if(t.c==null){w=1
break}t.m(new C.eJW(t,!s))
case 1:return B.h(u,v)}})
return B.i($async$RW,v)},
JL(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$JL=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.gabZ()
o=p.length
if(o===0){w=1
break}for(s=0;s<p.length;p.length===o||(0,B.I)(p),++s){r=p[s]
q=r.w
if(q==="marriage_agreement"||q==="hati_kuhowa"||q==="hati_kuhoweya"||q==="hati_malipo_awamu"||q==="hati_kiapo_uongozi")C.fWr(r,t.a.d)}o=t.c
o.toString
q=t.a
w=3
return B.b(B.pD(o,q.c,q.f),$async$JL)
case 3:if(!e||t.c==null){w=1
break}o=t.c
o.toString
q=B.ee(new C.eJZ(t,p),!1,null,x.H)
w=4
return B.b(B.a6(o,!1).ce(q),$async$JL)
case 4:q=t.a
w=5
return B.b(B.pC(q.c,q.f),$async$JL)
case 5:w=6
return B.b(t.RW(),$async$JL)
case 6:case 1:return B.h(u,v)}})
return B.i($async$JL,v)},
Si(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o
var $async$Si=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.c
o.toString
w=3
return B.b(B.hD(o,D.ekD,!0,"NgmySlidesTransferScan",x.N),$async$Si)
case 3:s=e
if(s==null||A.a.i(s).length===0){w=1
break}t.m(new C.eJX(t))
w=4
return B.b(C.aiS(s),$async$Si)
case 4:r=e
t.m(new C.eJY(t))
o=J.a8(r)
if(o.gau(r)){o=t.c
if(o==null){w=1
break}o.L(x.q).f.T(D.fnl)
w=1
break}w=5
return B.b(t.a.bkA(r),$async$Si)
case 5:q=t.c
if(q==null){w=1
break}B.a6(q,!1).N(null)
q=t.c.L(x.q).f
p=o.gJ(r)
o=o.gJ(r)===1?"":"s"
q.T(B.b2(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$Si,v)},
JK(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n
var $async$JK=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:n=t.gabZ()
if(n.length===0){w=1
break}s=t.c
s.toString
r=t.a
w=3
return B.b(B.pD(s,r.c,r.f),$async$JK)
case 3:if(!e||t.c==null){w=1
break}s=n.length
r=t.a
if(s===1){s=r.c
q=C.fWG(null,A.d.gH(n),s,t.a.f)}else q=C.fWG(n,null,r.c,r.f)
if(n.length===1){s=A.d.gH(n).b
r=B.ag("[^\\w\\-.]+",!0,!1,!1,!1)
p=B.aL(s,r,"_")}else p="ngmy_slides_library"
w=4
return B.b(B.Hk(q,"ngmy_slides_"+p,!1),$async$JK)
case 4:o=e
s=t.a
w=5
return B.b(B.pC(s.c,s.f),$async$JK)
case 5:w=6
return B.b(t.RW(),$async$JK)
case 6:s=t.c
if(s==null){w=1
break}s.L(x.q).f.T(B.b2(null,null,null,null,null,A.t,null,B.d(o,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$JK,v)},
a48(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a48=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t.m(new C.eK0(t))
w=3
return B.b(C.bG3(),$async$a48)
case 3:s=e
t.m(new C.eK1(t))
if(s==null||J.ct(s)){w=1
break}w=4
return B.b(t.a.bkA(s),$async$a48)
case 4:r=t.c
if(r==null){w=1
break}B.a6(r,!1).N(null)
r=t.c.L(x.q).f
q=J.a8(s)
p=q.gJ(s)
q=q.gJ(s)===1?"":"s"
r.T(B.b2(null,null,null,null,null,A.t,null,B.d("Imported "+p+" presentation"+q+" from file",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return B.h(u,v)}})
return B.i($async$a48,v)},
B(d){var w,v,u,t,s,r,q,p,o=this,n=null,m=B.P(d).ax.a===A.I,l=m?A.bA:A.ch,k=o.gabZ().length!==0,j=B.ao(n,B.p(n,n,A.f,n,n,new B.o(n,n,n,n,n,new B.bS(A.z,0.5,A.x,n,0,B.a([A.bo.j(0.22),A.L],x.O),n,n),A.a6),n,220,n,n,n,n,n,220),n,n,n,-60,-80,n),i=B.aI(n,n,n,n,B.W(A.cB,m?A.ab:A.an,n,n,n,n),n,n,n,new C.eK4(d),n,n,n,n,n,n),h=x.p
i=B.A(B.a([i,B.E(B.d("Transfer presentations",n,n,n,n,n,n,B.m(n,n,m?A.c:A.a_,n,n,n,n,n,n,n,n,17,n,n,A.u,n,n,!0,n,n,n,n,n,n,n,n),A.K,n,n),1),A.tT],h),A.l,n,A.e,A.h,0,n,n)
w=B.l(24)
v=B.a([new B.ab(0,A.G,A.bo.j(0.35),A.eR,24)],x.V)
u=B.ao(n,B.W(A.qP,A.c.j(0.1),n,n,n,100),n,n,n,-12,-8,n)
t=A.c.j(0.18)
s=B.l(16)
s=B.a([u,B.A(B.a([B.p(n,D.c2_,A.f,n,n,new B.o(t,n,B.K(A.c.j(0.35),A.r,1),s,n,n,A.n),n,56,n,n,n,n,n,56),A.eu,B.E(B.x(B.a([B.d("NGMY Slides Transfer",n,n,n,n,n,n,B.m(n,n,A.c.j(0.85),n,n,n,n,n,n,n,n,11,n,n,A.H,n,n,!0,n,1.1,n,n,n,n,n,n),n,n,n),A.ax,D.bNl],h),A.E,n,A.e,A.h,0,A.p),1)],h),A.l,n,A.e,A.h,0,n,n)],h)
if(o.a.f)s.push(B.ao(n,B.hc(B.az(A.bY,D.fld,A.y,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,o.gckZ(),n,n,n,n,n,n,!1,A.a4),n,"Save presentations to the database",n,n),n,n,n,-17,-19,n))
w=B.a([B.p(n,new B.an(A.a0,n,A.ad,A.f,s,n),A.aq,n,n,new B.o(n,n,n,w,v,D.a4I,A.n),n,n,n,n,E.a1p,n,n,1/0),A.e3,o.aA_(m,"What to transfer"),A.af,B.A(B.a([B.E(o.b_y(A.qV,m,new C.eK5(o),o.d==="one","Pick a single deck","One presentation"),1),A.as,B.E(o.b_y(D.bSh,m,new C.eK6(o),o.d==="all",""+o.a.d.length+" saved","All presentations"),1)],h),A.l,n,A.e,A.h,0,n,n)],h)
if(o.d==="one"){v=B.a([A.db,o.aA_(m,"Choose presentation"),A.T],h)
u=o.a.d
if(u.length===0){u=m?A.av:A.c
t=B.l(16)
s=B.K(m?A.bw:A.bm,A.r,1)
v.push(B.p(n,B.d("Create a presentation first, then come back to transfer it.",n,n,n,n,n,n,B.m(n,n,m?A.aF:A.an,n,n,n,n,n,n,n,n,12,n,n,n,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),A.f,n,n,new B.o(u,n,s,t,n,n,A.n),n,n,n,n,A.bS,n,n,n))}else A.d.u(v,new B.N(u,new C.eK7(o,m),B.U(u).k("N<1,v>")))
A.d.u(w,v)}w.push(A.nd)
w.push(o.aA_(m,"Transfer options"))
w.push(A.af)
w.push(B.A(B.a([B.E(o.asx(A.aG,k,!0,A.ju,m,o.r,o.gceZ(),"Scan on another device","Show QR"),1),A.as,B.E(o.aP8(A.jG,!0,A.jv,m,o.gcxd(),"Receive presentations","Scan QR"),1)],h),A.l,n,A.e,A.h,0,n,n))
w.push(A.T)
w.push(B.A(B.a([B.E(o.bDF(A.aV,k,A.hB,m,o.r,o.gceW(),"Download .json","Backup file"),1),A.as,B.E(o.aP8(A.at,!0,AF.zI,m,o.gcJv(),"Import backup","Upload file"),1)],h),A.l,n,A.e,A.h,0,n,n))
if(k){v=A.bo.j(m?0.12:0.08)
u=B.l(16)
t=B.K(A.bo.j(0.28),A.r,1)
s=B.W(A.l_,A.bo.j(0.9),n,n,n,18)
r=o.gaR8()
q=o.gb9h()
p=o.gb9h()===1?"":"s"
A.d.u(w,B.a([A.bx,B.p(n,B.A(B.a([s,A.as,B.E(B.d("Ready to share "+r+" \xb7 "+q+" slide"+p,n,n,n,n,n,n,B.m(n,n,m?A.ab:A.by,n,n,n,n,n,n,n,n,12,n,n,A.a8,n,n,!0,n,n,n,n,n,n,n,n),n,n,n),1)],h),A.l,n,A.e,A.h,0,n,n),A.f,n,n,new B.o(v,n,t,u,n,n,A.n),n,n,n,n,A.bH,n,n,n)],h))}j=B.a([j,B.bm(!0,B.x(B.a([new B.D(Ak.ON,i,n),B.E(B.cw(w,n,n,D.bGL,n,n,A.ah,!1),1)],h),A.l,n,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0)],h)
if(o.f)j.push(B.p(n,W.Yu,A.f,A.dZ,n,n,n,n,n,n,n,n,n,n))
return B.c4(n,l,new B.an(A.a0,n,A.ad,A.t,j,n),n,!1,!1,n,n)},
ahl(){var w=0,v=B.j(x.H),u=this,t,s
var $async$ahl=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=u.c
s.toString
t=u.a
w=2
return B.b(C.iun(s,t.d,t.e),$async$ahl)
case 2:return B.h(null,v)}})
return B.i($async$ahl,v)},
aA_(d,e){var w=null,v=B.p(w,w,A.f,w,w,new B.o(A.bo,w,w,B.l(2),w,w,A.n),w,14,w,w,w,w,w,3)
return B.A(B.a([v,A.ae,B.d(e.toUpperCase(),w,w,w,w,w,w,B.m(w,w,d?A.aF:A.an,w,w,w,w,w,w,w,w,11,w,w,A.u,w,w,!0,w,0.9,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,w,w)},
b_y(d,e,f,g,h,i){var w,v,u,t,s=null,r=B.l(18),q=B.l(18),p=e?A.av:A.c
if(g)w=A.bo
else w=e?A.bw:A.bm
w=B.K(w,A.r,g?2:1)
v=g?B.a([new B.ab(0,A.G,A.bo.j(0.2),A.cz,14)],x.V):s
u=A.bo.j(g?0.2:0.1)
t=B.l(12)
t=B.p(s,B.W(d,A.bo,s,s,s,22),A.f,s,s,new B.o(u,s,s,t,s,s,A.n),s,s,s,s,A.cq,s,s,s)
u=B.d(i,s,s,s,s,s,s,B.m(s,s,e?A.c:A.a_,s,s,s,s,s,s,s,s,13,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.aG(!1,A.a3,!0,s,B.aM(!1,r,!0,B.eC(new B.D(A.bH,B.x(B.a([t,A.T,u,A.bF,B.d(h,s,s,s,s,s,s,B.m(s,s,e?A.aF:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],x.p),A.E,s,A.e,A.h,0,A.p),s),s,new B.o(p,s,w,q,v,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,f,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai)},
bOm(d,e){var w,v,u,t,s,r,q=null,p=d.a===this.e,o=B.l(16),n=e?A.av:A.c,m=B.l(16)
if(p)w=A.bo
else w=e?A.bw:A.bm
w=B.K(w,A.r,p?2:1)
v=B.p(q,D.c2e,A.f,q,q,new B.o(q,q,q,B.l(12),q,new B.a7(A.a5,A.a9,A.x,B.a([A.bo,A.bo.j(0.7)],x.O),q,q),A.n),q,44,q,q,q,q,q,44)
u=d.b
u=B.d(u,q,1,A.a2,q,q,q,B.m(q,q,e?A.c:A.a_,q,q,q,q,q,q,q,q,q,q,q,A.H,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)
t=d.r.length
s=x.p
t=B.E(B.x(B.a([u,B.d(""+t+" slides",q,q,q,q,q,q,B.m(q,q,e?A.aF:A.an,q,q,q,q,q,q,q,q,11,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.h,0,A.p),1)
u=p?A.ed:A.pz
if(p)r=A.bo
else r=e?A.aT:A.dB
return new B.D(A.cw,B.aG(!1,A.a3,!0,q,B.aM(!1,o,!0,B.p(q,B.A(B.a([v,A.bb,t,B.W(u,r,q,q,q,q)],s),A.l,q,A.e,A.h,0,q,q),A.f,q,q,new B.o(n,q,w,m,q,q,A.n),q,q,q,q,A.bH,q,q,q),q,!0,q,q,q,q,q,q,q,q,q,q,q,new C.eJV(this,d),q,q,q,q,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q)},
asx(d,e,f,g,h,i,j,k,l){var w,v,u,t,s=null,r=e?1:0.45,q=e?j:s,p=B.l(18),o=B.l(18),n=h?A.av:A.c
if(f)w=d.j(0.45)
else w=h?A.bw:A.bm
w=B.K(w,A.r,f?1.5:1)
v=d.j(0.14)
u=B.l(12)
t=x.p
u=B.a([B.p(s,B.W(g,d,s,s,s,22),A.f,s,s,new B.o(v,s,s,u,s,s,A.n),s,s,s,s,A.ta,s,s,s)],t)
if(i)u.push(B.ao(s,B.p(s,D.asR,A.f,s,s,D.b94,s,14,s,s,s,s,s,14),s,s,s,-4,-4,s))
v=B.d(l,s,s,s,s,s,s,B.m(s,s,h?A.c:A.a_,s,s,s,s,s,s,s,s,14,s,s,A.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)
return B.d3(B.aG(!1,A.a3,!0,s,B.aM(!1,p,!0,B.eC(new B.D(E.a14,B.x(B.a([new B.an(A.a0,s,A.ad,A.f,u,s),A.af,v,A.bF,B.d(k,s,s,s,s,s,s,B.m(s,s,h?A.aF:A.an,s,s,s,s,s,s,s,s,11,s,s,s,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],t),A.E,s,A.e,A.h,0,A.p),s),s,new B.o(n,s,w,o,s,s,A.n),s,s,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,q,s,s,s,s,s,s,s),A.f,A.L,0,s,s,s,s,s,A.ai),r)},
aP8(d,e,f,g,h,i,j){return this.asx(d,e,!1,f,g,!1,h,i,j)},
bDF(d,e,f,g,h,i,j,k){return this.asx(d,e,!1,f,g,h,i,j,k)}}
C.Xp.prototype={
S(){return new C.bny()}}
C.bny.prototype={
Y(){this.a3()
this.ag7()},
ag7(){var w=0,v=B.j(x.H),u,t=2,s=[],r=this,q,p,o,n,m,l,k,j,i
var $async$ag7=B.e(function(d,e){if(d===1){s.push(e)
w=t}for(;;)switch(w){case 0:t=4
n=r.a
m=n.d
l=m.length
k=n.c
q=l===1?C.fWG(null,A.d.gH(m),k,r.a.f):C.fWG(m,null,k,n.f)
n=r.a.d
m=n.length
p=m===1?A.d.gH(n).a:"library_"+m
n=r.a.d
if(n.length===1&&C.km(A.d.gH(n).w))C.fWr(A.d.gH(r.a.d),D.dp1)
n=r.a
m=n.c
n=C.irt(n.d)
w=7
return B.b(C.fWF(p,C.iry(r.a.d),n,m,q),$async$ag7)
case 7:o=e
if(r.c==null){w=1
break}r.m(new C.eK8(r,o))
t=2
w=6
break
case 4:t=3
i=s.pop()
if(r.c==null){w=1
break}r.m(new C.eK9(r))
w=6
break
case 3:w=2
break
case 6:case 1:return B.h(u,v)
case 2:return B.f(s.at(-1),v)}})
return B.i($async$ag7,v)},
B(d){var w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=B.P(d).ax.a===A.I,h=i?A.bA:A.ch,g=k.d
g=g==null?j:A.a.a_(g,"NGMYSLIDESYNC2|")
w=A.d.cF(k.a.d,0,new C.eKa())
v=B.aI(j,j,j,j,B.W(A.eK,i?A.ab:A.an,j,j,j,18),j,j,j,new C.eKb(d),j,j,j,j,j,j)
u=x.p
v=B.A(B.a([v,B.E(B.d("Presentation QR",j,j,j,j,j,j,B.m(j,j,i?A.c:A.a_,j,j,j,j,j,j,j,j,17,j,j,A.u,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),1),A.tT],u),A.l,j,A.e,A.h,0,j,j)
t=B.l(24)
s=k.a
r=B.d(s.e,j,j,j,j,j,j,A.dl,A.K,j,j)
s=s.d.length
q=s===1?"":"s"
t=B.p(j,B.x(B.a([r,A.P,B.d(""+s+" presentation"+q+" \xb7 "+w+" slides",j,j,j,j,j,j,B.m(j,j,A.c.j(0.85),j,j,j,j,j,j,j,j,12,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)],u),A.l,j,A.e,A.h,0,A.p),A.f,j,j,new B.o(j,j,j,t,j,D.a4I,A.n),j,j,j,j,E.a1p,j,j,1/0)
q=B.l(24)
s=B.K(A.aG.j(0.35),A.r,1)
r=B.a([],u)
p=k.f
if(p!=null)r.push(B.d(p,j,j,j,j,j,j,A.VU,A.K,j,j))
else if(k.d==null)r.push(D.exc)
else{p=B.a([],u)
o=k.e
if((o==null?"":o).length!==0){o=B.l(16)
n=B.a([new B.ab(0,A.G,A.aD.j(0.35),A.cz,18)],x.V)
m=k.e
m.toString
A.d.u(p,B.a([D.fSL,A.am,B.az(j,B.p(j,B.A(B.a([D.c3Q,A.as,B.d(m,j,j,j,j,j,j,D.fEo,j,j,j)],u),A.l,j,A.e,A.N,0,j,j),A.f,j,j,new B.o(j,j,j,o,n,D.c8O,A.n),j,j,j,j,A_.ant,j,j,j),A.y,!1,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,j,new C.eKc(k,d),j,j,j,j,j,j,!1,A.a4),A.P,D.fXe,A.aB],u))}o=A.c.j(0.04)
n=B.l(22)
m=B.K(A.bw,A.r,1)
l=k.d
l.toString
p.push(B.p(j,B.qi(j,j,!1,l,j,!0,!0,j,!1,D.bxz),A.f,j,j,new B.o(o,j,m,n,j,j,A.n),j,j,j,j,A.cq,j,j,j))
A.d.u(r,p)}r.push(A.aB)
r.push(B.d(g===!0?"Cloud QR \u2014 scan on another phone with NGMY Slides open.":"Offline QR \u2014 keep both devices on the same network if scan fails.",j,j,j,j,j,j,A.ht,A.K,j,j))
return B.c4(j,h,B.bm(!0,B.x(B.a([new B.D(Ak.ON,v,j),B.E(B.c9(B.x(B.a([t,A.aO,B.p(j,B.x(r,A.l,j,A.e,A.h,0,A.p),A.f,j,j,new B.o(j,j,s,q,j,D.caP,A.n),j,j,j,j,A.uM,j,j,1/0)],u),A.l,j,A.e,A.h,0,A.p),A.t,j,A.y,j,j,E.anO,j,j,A.ah),1)],u),A.l,j,A.e,A.h,0,A.p),!0,!1,A.ag,!0,!0),j,!1,!1,j,j)}}
C.aGM.prototype={
S(){return new C.aGN(new B.au(A.aw,$.ax()),B.kd(!0,null,!0,!0,null,null,!1))}}
C.aGN.prototype={
Y(){var w=this
w.a3()
w.e.aV(0,new C.eDB(w))
$.aU.x1$.push(new C.eDC(w))},
t(){var w=this.d
w.U$=$.ax()
w.R$=0
this.e.t()
this.a2()},
b2r(){var w,v=this.c
v.toString
w=C.zc(this.d.a.a.toUpperCase())
if(w==null)w=""
B.a6(v,!1).N(w)},
B(a2){var w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=B.aE(a2,A.eT,x.w).w,i=B.l(28),h=B.K(A.bo.j(0.4),A.r,1.2),g=x.V,f=B.a([new B.ab(0,A.G,A.bo.j(0.28),A.vC,36),D.afJ],g),e=B.l(28),d=A.c.j(0.16),a0=B.l(16),a1=x.p
a0=B.p(k,B.x(B.a([B.p(k,D.c_2,A.f,k,k,new B.o(d,k,B.K(A.c.j(0.28),A.r,1),a0,k,k,A.n),k,52,k,k,k,k,k,52),A.af,D.fPK,A.am,B.d("Type the 5-character code shown with the QR.",k,k,k,k,k,k,B.m(k,k,A.c.j(0.82),k,k,k,k,k,k,k,k,13,k,k,A.a8,k,1.35,!0,k,k,k,k,k,k,k,k),A.K,k,k)],a1),A.l,k,A.e,A.h,0,A.p),A.f,k,k,D.b9v,k,k,k,k,A.wH,k,k,1/0)
d=B.a([],a1)
for(w=l.d,v=l.e,u=0;u<5;++u){t=B.a([],a1)
if(u===2)t.push(A.as)
s=w.a.a
r=u<s.toUpperCase().length
q=u===s.toUpperCase().length&&v.gea()
p=r?w.a.a.toUpperCase()[u]:""
s=r||q?A.av:A.a_
o=new B.aP(14,14)
if(q)n=A.bo
else n=r?A.bo.j(0.55):A.aL
m=new B.ay(n,q?2:1.2,A.r,-1)
n=q?B.a([new B.ab(0,A.G,A.bo.j(0.28),A.J,12)],g):k
t.push(new B.by(1,A.ba,B.cT(A.z,B.d(p,k,k,k,k,k,k,D.fxz,k,k,k),k,k,A.b0,new B.o(s,k,new B.bG(m,m,m,m),new B.be(o,o,o,o),n,k,A.n),A.ha,k,56,k,k,k,k,k,k),k))
if(u!==4&&u!==1)t.push(A1.AW)
A.d.u(d,t)}g=B.a([B.A(d,A.l,k,A.e,A.h,0,k,k),B.bR(0,B.d3(B.aN(k,A.Z,!0,k,!0,A.t,k,B.aO(),w,k,k,k,k,k,2,D.c6G,A.y,!0,k,!0,k,!1,v,A.ak,k,k,B.a([new B.uX(B.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.C7(5,k),new C.bya()],x.aS),k,k,A.aW8,k,5,k,1,k,k,!1,"\u2022",k,new C.eDx(l),k,new C.eDy(l),k,!1,k,k,!1,k,!0,k,A.ac,k,k,k,k,k,k,k,k,k,k,k,k,!0,A.a7,k,A.mA,k,k,k,k),0),0,0,0)],a1)
d=C.zc(w.a.a.toUpperCase())==null?k:l.gcf_()
return B.as(new B.D(new B.Q(24,24,24,24+j.f.d),B.aG(!1,A.a3,!0,k,new B.cN(Ah.Mh,B.p(k,B.bu(e,B.x(B.a([a0,new B.D(D.bHh,B.x(B.a([new B.an(A.a0,k,A.ad,A.t,g,k),A.T,D.fO1,A.bx,new B.a5(1/0,50,B.bI(D.h4f,k,d,B.bo(A.bo,A.bs,A.an,k,A.c,k,k,k,new B.b9(B.l(16),A.a1),k,k,k)),k),A.am,B.bO(!1,A.o7,k,k,!0,k,k,k,new C.eDz(a2),k,B.fs(k,k,k,k,k,k,k,k,k,k,k,A.bP,k,k,k,k,k,k,k,k,k,k,k,k,k,k))],a1),A.l,k,A.e,A.h,0,A.p),k)],a1),A.l,k,A.e,A.N,0,A.p),A.aq),A.f,k,k,new B.o(A.bA,k,h,i,f,k,A.n),k,k,k,k,k,k,k,k),k),A.f,A.L,0,k,k,k,k,k,A.ai),k),k,k,k)}}
C.bya.prototype={
pa(d,e){var w=e.a.toUpperCase()
return e.cQ3(B.hn(A.bB,w.length),w)}}
C.ato.prototype={
S(){return new C.aGQ(B.zT(A.O2,A.oe,A.vj))}}
C.aGQ.prototype={
t(){this.d.t()
this.a2()},
b2q(d){var w,v=this
if(v.e||v.c==null)return
v.e=!0
w=v.c
w.toString
B.j6(w,d)},
abU(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$abU=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.e){w=1
break}s=t.c
s.toString
w=3
return B.b(C.h4U(s),$async$abU)
case 3:r=e
if(r==null||t.c==null){w=1
break}t.b2q("NGMYSLIDECODE|"+r)
case 1:return B.h(u,v)}})
return B.i($async$abU,v)},
ceY(d){var w,v,u,t
if(this.e)return
for(w=d.a,v=w.length,u=0;u<w.length;w.length===v||(0,B.I)(w),++u){t=C.irw(w[u])
if(t!=null){this.b2q(t)
return}}},
B(d){var w,v,u,t=this,s=null,r=B.aI(s,s,s,s,A.x4,s,s,s,t.gbSN(),s,s,s,s,"Enter document code",s),q=t.f,p=q?"Flash off":"Flash on",o=x.p
p=B.eS(B.a([r,B.aI(s,s,s,s,B.W(q?A.uY:Ap.PP,s,s,s,s,s),s,s,s,new C.eKe(t),s,s,s,s,p,s)],o),s,s,!0,!0,A.bA,s,1,s,s,s,!1,s,!1,A.c,s,s,s,!0,s,s,s,s,s,D.h5s,s,s,s,1,s,!0)
r=B.zS(t.d,A.c_,t.gceX())
w=B.l(28)
w=B.as(B.p(s,s,A.f,s,s,new B.o(s,s,B.K(A.bo,A.r,3),w,B.a([new B.ab(2,A.G,A.bo.j(0.35),A.J,24)],x.V),s,A.n),s,260,s,s,s,s,s,260),s,s,s)
v=A.w.j(0.72)
u=B.l(16)
return B.c4(p,A.w,new B.an(A.a0,s,A.b1,A.t,B.a([r,w,B.ao(32,B.p(s,D.fTR,A.f,s,s,new B.o(v,s,B.K(A.bo.j(0.45),A.r,1),u,s,s,A.n),s,s,s,s,A.jr,s,s,s),s,s,20,20,s,s)],o),s),s,!1,!1,s,s)}}
C.byo.prototype={
B(d){var w=null,v=B.l(24),u=B.K(A.aL,A.r,1)
return B.aG(!1,A.a3,!0,w,B.p(w,B.x(B.a([B.p(w,H.asw,A.f,w,w,D.b9e,w,56,w,w,w,w,w,56),A.aO,D.h59,A.am,new B.k7(this.c,new C.fli(),w,w,x.cI),A.aO,new B.k7(this.d,new C.flj(),w,w,x.cl),A.af,D.h57],x.p),A.l,w,A.e,A.N,0,A.p),A.f,w,Ah.Mh,new B.o(A.av,w,u,v,w,w,A.n),w,w,w,N.a1w,D.bHV,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)}}
C.a9a.prototype={
S(){return new C.bnh(A.bC)},
gd1(){return this.c}}
C.bnh.prototype={
Y(){var w=this
w.a3()
if(w.a.d)return
w.a0q()
w.d=B.dg(A.fL,new C.erR(w))},
t(){var w=this.d
if(w!=null)w.a1(0)
this.a2()},
a0q(){return this.ctA()},
ctA(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$a0q=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q={}
p=t.a
if(p.d){if(t.c!=null)t.m(new C.erP(t))
w=1
break}s=p.e
q.a=null
w=s!=null?3:5
break
case 3:q.a=s.bB(new B.V(Date.now(),0,!1))
w=4
break
case 5:w=6
return B.b(C.cmt(p.c),$async$a0q)
case 6:r=e
q.a=r==null?A.bC:r
case 4:if(t.c==null){w=1
break}t.m(new C.erQ(q,t))
if(q.a.a<=0&&!t.f){t.f=!0
t.a.f.$0()}case 1:return B.h(u,v)}})
return B.i($async$a0q,v)},
bUW(d){var w,v,u=d.a,t=A.o.ar(u,36e8)
if(t>=999)return"Admin \u2014 unlimited"
w=A.o.ar(u,6e7)%60
v=A.o.ar(u,1e6)%60
if(t>0)return""+t+"h "+A.a.b0(A.o.v(w),2,"0")+"m "+A.a.b0(A.o.v(v),2,"0")+"s left"
return A.a.b0(A.o.v(w),2,"0")+":"+A.a.b0(A.o.v(v),2,"0")+" left"},
B(d){var w,v,u,t,s=this,r=null
if(s.a.d)return A.bM
w=s.e.a
v=A.o.ar(w,6e7)<30&&A.o.ar(w,36e8)<999?A.aA:A.c3
w=v.j(0.14)
u=B.l(14)
t=B.K(v.j(0.55),A.r,1)
return B.p(r,B.A(B.a([B.W(A.HB,v,r,r,r,20),A.as,B.E(B.d("Marriage document session \xb7 "+s.bUW(s.e),r,r,r,r,r,r,B.m(r,r,v,r,r,r,r,r,r,r,r,13,r,r,A.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r),1)],x.p),A.l,r,A.e,A.h,0,r,r),A.f,r,r,new B.o(w,r,t,u,r,r,A.n),r,r,r,O.amx,A.hP,r,r,1/0)}}
C.aa2.prototype={
nC(){var w,v,u,t=this
t.y3()
w=t.cx
v=t.c
w.buV(t.cy,t,v)
u=x.Y
v.a.n(0,"/A",B.qo(B.J(["/S",D.eAV,"/URI",new B.t4(B.Y0(w.as),A.vF,!0)],x.N,u),u))}}
C.aa3.prototype={
a7(){return"PdfAnnotFlags."+this.b}}
C.b5K.prototype={
bCE(d,e,f,g,h,i,j,k,l,m){var w=B.ev([D.ezd],x.di)
this.w!==$&&B.aQ()
this.w=w},
gcTy(){var w=this.w
w===$&&B.c()
if(w.a===0)return 0
return new B.kc(w,new C.cqn(),B.a3(w).k("kc<ci.E,F>")).f0(0,new C.cqo())},
aFw(d,e,f){var w,v,u,t=this,s=f.a
s.n(0,"/Subtype",new B.hl(t.a))
w=t.b
v=w.a
u=w.b
s.n(0,"/Rect",B.u2(B.a([v,u,v+w.c,u+w.d],x.cA)))
s.n(0,"/P",new B.jy(d.a,d.b))
s.n(0,"/Border",B.u2(H.auD))
w=t.w
w===$&&B.c()
if(w.a!==0)s.n(0,"/F",new B.ha(t.gcTy()))
w=t.z
if(w.a!==0)s.n(0,"/AP",B.qo(w,x.Y))}}
C.cqp.prototype={}
C.a4n.prototype={}
C.ajR.prototype={}
C.aTW.prototype={
fV(d){var w,v,u,t,s,r,q=this,p=null
q.lE(d)
q.MM(d)
w=q.a
v=d.a
v.toString
w.toString
w=d.bjV(w)
u=x.N
t=x.Y
s=new C.cqp(q.d.a,"/Link",w,p,p,p,p,p,B.T(u,t))
s.bCE(p,p,p,p,p,p,p,w,p,"/Link")
w=v.x
t=B.qo(B.J(["/Type",D.eAT],u,t),t)
u=w.b++
r=w.e
r===$&&B.c()
r=new C.aa2(s,v,w,u,0,t,r,B.a([],x.s),p,p,0)
w.c.I(0,r)
v.dx.push(r)}}
C.az2.prototype={}
C.aVn.prototype={
fV(d){var w,v,u,t,s=this
s.lE(d)
w=s.b
if(w!=null){v=B.dr()
u=s.a
v.eb(u.a,u.b,0,1)
u=d.b
u.iw()
t=s.a
t.toString
u.LU(t)
u.Tz(0)
u.pu(0,v)
w.fV(d)
u.nF(0)}}}
var z=a.updateTypes(["aB<~>()","~(lj)","R(hV)","~()","R(eO)","R(oT)","R(lj)","~(hV)","R(eO,eO)","KS(Z)","R(of)","R(lB)","aB<R>()","F(F,hV)","ai<Ab>()","n(of)","R(a9r)","n(lj)","n(wA)","R(Fx)","F(hV,hV)","a9<n,@>(hV)","n(eO)","v(eO)","cK(eO)","v(hJ)","~(hJ)","eO(n,H,H,H,H,H{align:qu,anim:hJ,bullets:R,color:F?,delay:F,fx:n,key:n,style:IC,weight:o4})","R(mx)","eO(n,H,H,H,H,H,F{align:qu,style:IC,weight:o4})","eO(n,H,F)","~(ai<oT>)","R(Ab)","R(n,ai<Ab>)","F(oT,oT)","of()","a9<n,@>(oT)","a2m(Z)","eO(vi,H,H,H,H,F{fx:n,key:n,rotation:H})","eO(n,H,H,H,H{anim:hJ,delay:F,fx:n,key:n})","a_4(Z)","aB<~>(oT)","R(mW)","a1S(Z)","a1R(Z)","a_2(Z)","a0f(Z)","eO(vi,H,H,H,H,F,n,n{anim:hJ,delay:F,rotation:H,stroke:F,strokeWidth:H})","eO(n,H,H,H,H,H,n,n,F)","eO(H,H,n,F{size:H})","Qz(Z)","lB()","v(rT,H,H)","oT(a9<@,@>)","Fx()","fl(eO)","v(ji)","a_N(Z)","~(Fn)","a07(Z)","F(eO,eO)","eO(eO)","a9<n,@>(eO)","eO(a9<@,@>)","lj(lj)","a9<n,@>(lj)","lj(a9<@,@>)","R(k3)","k3()","~(v8)","n(hV)","V(ai<hV>)","V(hV)","R(n,hV)","lj()","~(R(eO,eO))","aeM(Z)","ae9(Z,F)","u(lj,R)","aeP(Z)","aeS(Z)","agv(Z,F)","~(mZ)","hV(hV)","H(eO)","Xc(Z)","a0Z(Z)","hV()","Xd(Z)","aB<~>(ai<hV>)","v(bA<F,hV>)","D(k3)","D(Fx)","aB<~>(hJ,~())","v(ai<hJ>,hJ?,~(hJ),u)","a1l(Z)","ai<jL<mZ>>(Z)","jL<mZ>(mZ)","hV(a9<@,@>)","Xo(Z)","ai<FU>()","Xp(Z)","v(hV)","~(mq)","Fw(Z,lj,v?)","F(aa3)","aB<ai<a9<n,@>>?>()","n(n)","aB<Aa>({paper:n?,photo:dH?,request:n,template!lE})","aB<a9j>({doc!Aa,history:ai<+(n,n)>,instruction!n,photo:dH?,template!lE})","ai<hV>(n?)"])
C.cPH.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:66}
C.cPI.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:68}
C.cPJ.prototype={
$1(d){var w,v,u,t,s,r,q
for(w=this.a,v=this.b,u=v.c-1,v=v.b;t=w.a,t<d;){t=w.c
if(t<0){w.c=t-1
s=0
r=16}else{s=v[t]
r=t===u?A.o.galW(s):16;--w.c}w.b=A.o.dX(w.b,r)+s
w.a+=r}v=w.b
t-=d
q=A.o.mK(v,t)
w.b=v-A.o.dX(q,t)
w.a=t
return q},
$S:68}
C.cPK.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.$flags|0,u=1,t=0;t<8;++t){if(u===0)break
s=w[t]+u
v&2&&B.aj(w)
w[t]=s&255
u=s>>>8}},
$S:0}
C.bUE.prototype={
$1(d){return J.eu(A.dI.gaT(d),d.byteOffset,d.byteLength)},
$S:1696}
C.fIt.prototype={
$5(d,e,f,g,h){var w=this,v=w.a
if((v&8)!==0)B.j0(w.b,d+f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&4)!==0)B.j0(w.b,d-f,e+g,w.c,h,w.d,!1,w.e,w.f)
if((v&2)!==0)B.j0(w.b,d+f,e-g,w.c,h,w.d,!1,w.e,w.f)
if((v&1)!==0)B.j0(w.b,d-f,e-g,w.c,h,w.d,!1,w.e,w.f)},
$S:1697}
C.c4G.prototype={
$1(d){return B.a1(d,x.N,x.z)},
$S:32}
C.c4H.prototype={
$2(d,e){var w,v=J.t(e,"savedAt")
v=J.k(v==null?"":v)
w=J.t(d,"savedAt")
return A.a.aQ(v,J.k(w==null?"":w))},
$S:43}
C.c4J.prototype={
$1(d){var w=J.t(d,"id")
return J.k(w==null?"":w)===this.a},
$S:4}
C.fZL.prototype={
$1(d){return new C.a2m(this.a,this.b,C.iso(),null)},
$S:z+37}
C.fjL.prototype={
$0(){var w=this.a
w.e=this.b
w.f=!1},
$S:0}
C.fjP.prototype={
$1(d){return this.a.d.q(0,d.a)},
$S:z+2}
C.fjQ.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fjR.prototype={
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
C.fjM.prototype={
$0(){var w=this.a
w.r=!0
w.x=null},
$S:0}
C.fjN.prototype={
$0(){var w=this.a
w.r=!1
w.x="Could not open that saved presentation."
w.y=!0},
$S:0}
C.fjO.prototype={
$0(){var w=this.a
w.r=!1
w.x='"'+this.b.b+'" is back in your presentations.'
w.y=!1},
$S:0}
C.fjG.prototype={
$1(d){var w=null,v=B.d('"'+this.a+'" will be removed from the database. Your own copy stays in your presentations.',w,w,w,w,w,w,A.hs,w,w,w)
return B.ek(B.a([B.bO(!1,E.aYg,w,w,!0,w,w,w,new C.fjE(d),w,w),B.bO(!1,D.fRd,w,w,!0,w,w,w,new C.fjF(d),w,w)],x.p),w,w,D.a_P,v,w,w,w,w,D.h5M,w)},
$S:18}
C.fjE.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.fjF.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.fjH.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fjI.prototype={
$0(){return this.a.r=!1},
$S:0}
C.fjV.prototype={
$0(){var w=this.a
return w.m(new C.fjU(w,this.b))},
$S:0}
C.fjU.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.fjK.prototype={
$0(){var w=this.a
return w.m(new C.fjJ(w,this.b,this.c))},
$S:0}
C.fjJ.prototype={
$0(){var w=this.a.d,v=this.c.a
return this.b?w.W(0,v):w.I(0,v)},
$S:0}
C.fjS.prototype={
$0(){return this.a.a2y(this.b)},
$S:0}
C.fjT.prototype={
$0(){return this.a.PY(0,this.b)},
$S:0}
C.fjY.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fjZ.prototype={
$0(){var w=this.a
return w.m(new C.fjX(w,this.b))},
$S:0}
C.fjX.prototype={
$0(){var w=this.a,v=w.d
if(this.b)v.a8(0)
else{w=w.a.c
v.u(0,new B.N(w,new C.fjW(),B.U(w).k("N<1,n>")))}},
$S:0}
C.fjW.prototype={
$1(d){return d.a},
$S:z+70}
C.fri.prototype={
$1(d){var w,v=x.N,u=x.z,t=B.a1(d,v,u),s=t.h(0,"id")
s=J.k(s==null?"":s)
w=x.f
v=F.hqv(w.b(t.h(0,"doc"))?B.a1(w.a(t.h(0,"doc")),v,u):A.cE)
t=t.h(0,"updatedAt")
u=B.bj(J.k(t==null?"":t))
return new C.oT(s,v,u==null?new B.V(Date.now(),0,!1):u)},
$S:z+53}
C.frj.prototype={
$1(d){return d.a.length!==0},
$S:z+5}
C.fLH.prototype={
$1(d){var w,v,u,t,s,r,q,p,o,n
for(w=d.length,v=this.a,u=0;u<d.length;d.length===w||(0,B.I)(d),++u){t=d[u]
s=t.a
r=v.h(0,s)
q=!0
if(r!=null){p=t.c
o=r.c
n=p.a
if(n<=o.gbt())q=n===o.gbt()&&p.b>o.gcG()}if(q)v.n(0,s,t)}},
$S:z+31}
C.fLF.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+5}
C.fLG.prototype={
$2(d,e){return e.c.aQ(0,d.c)},
$S:z+34}
C.fZd.prototype={
$1(d){return d.aj()},
$S:z+36}
C.fI7.prototype={
$1(d){return d.a===this.a},
$S:z+5}
C.h_6.prototype={
$1(d){return new C.a_4(this.a,null)},
$S:z+40}
C.cR3.prototype={
$1(d){return A.a.i(d.b).length===0},
$S:z+42}
C.cR5.prototype={
$0(){var w=this.a
w.d=this.b
w.e=!1},
$S:0}
C.cR8.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cR9.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.cR7())},
$S:12}
C.cR7.prototype={
$0(){},
$S:0}
C.cRa.prototype={
$1(d){var w=0,v=B.j(x.a),u=this,t,s,r,q,p
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.a3l(t.a.c),$async$$1)
case 2:s=f
r=u.b
q=J.cE(s)
p=q.bk(s,new C.cR6(r))
if(p<0)q.c9(s,0,r)
else q.n(s,p,r)
w=3
return B.b(C.aj1(t.a.c,s),$async$$1)
case 3:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:343}
C.cR6.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cRb.prototype={
$1(d){},
$S:29}
C.cR4.prototype={
$1(d){return new C.a_2(this.b,this.a.gcDs(),null)},
$S:z+45}
C.cRc.prototype={
$1(d){return D.hzt},
$S:z+50}
C.cR_.prototype={
$1(d){var w=null,v=B.l(24),u=B.K(D.a_j,A.r,1),t=x.p
return B.as(B.aG(!1,A.a3,!0,w,B.p(w,B.x(B.a([new B.D(D.bHH,B.x(B.a([B.p(w,D.bX7,A.f,w,w,new B.o(A.aA.j(0.14),w,w,w,w,w,A.a6),w,56,w,w,w,w,w,56),A.aO,D.fQa,A.T,B.d("\u201c"+this.a.b.a+"\u201d is removed from this device. This cannot be undone.",w,w,w,w,w,w,D.fDh,A.K,w,w)],t),A.l,w,A.e,A.h,0,A.p),w),A.e3,new B.D(A.qI,B.A(B.a([B.E(B.dW(D.fXg,new C.cQY(d),B.dj(w,w,w,w,w,w,w,w,w,E.nx,w,w,A.cp,w,new B.b9(B.l(14),A.a1),D.b6w,w,w,w,w)),1),A.as,B.E(B.bI(D.h2u,w,new C.cQZ(d),B.bo(A.bD,w,w,w,w,w,A.cp,w,new B.b9(B.l(14),A.a1),w,w,w)),1)],t),A.l,w,A.e,A.h,0,w,w),w)],t),A.l,w,A.e,A.N,0,A.p),A.f,w,A.w5,new B.o(D.ahB,w,u,v,D.dcL,w,A.n),w,w,w,N.a1w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai),w,w,w)},
$S:1698}
C.cQY.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.cQZ.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.cR0.prototype={
$0(){return J.nY(this.a.d,new C.cQX(this.b))},
$S:0}
C.cQX.prototype={
$1(d){return d.a===this.a.a},
$S:z+5}
C.cQW.prototype={
$1(d){var w,v,u,t=null,s=B.l(28),r=B.K(D.a_j,A.r,1),q=x.p
q=B.a([B.A(B.a([B.p(t,D.c1i,A.f,t,t,new B.o(t,t,t,B.l(14),t,D.au9,A.n),t,44,t,t,t,t,t,44),A.bb,B.E(B.x(B.a([B.d(this.a.b.a,t,1,A.a2,t,t,t,D.aXX,t,t,t),A.bF,D.h2p],q),A.E,t,A.e,A.h,0,A.p),1)],q),A.l,t,A.e,A.h,0,t,t),A.aB],q)
for(w=0;w<2;++w){v={}
u=D.dB1[w]
v.a=null
u=u.a
v.a=u[0]
q.push(new C.aA_(u[1],u[2],u[3],new C.cQU(v,d),!1,t))}q.push(A.am)
q.push(D.bBy)
q.push(A.am)
q.push(new C.aA_(A.ej,"Delete book","Remove it from this device",new C.cQV(d),!0,t))
return B.bm(!0,B.p(t,B.x(q,A.E,t,A.e,A.N,0,A.p),A.f,t,t,new B.o(D.ahB,t,r,s,t,t,A.n),t,t,t,A.uJ,A.H9,t,t,t),!0,!1,A.ag,!0,!0)},
$S:27}
C.cQU.prototype={
$0(){var w=this.a.a
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.cQV.prototype={
$0(){B.a6(this.a,!1).N("delete")
return null},
$S:0}
C.cR2.prototype={
$3(d,e,f){var w=null,v=B.l(4),u=B.a([new B.ab(0,A.G,A.w.j(0.45),A.aN6,12)],x.V)
return B.dP(B.eI(A.z,e,B.p(w,B.bu(B.l(4),new B.a5(62,95.81818181818181,new B.dx(A.dC,A.z,A.f,F.aq5(d),w),w),A.aq),A.f,w,w,new B.o(w,w,w,v,u,w,A.n),w,w,w,w,w,w,w,w),w),new B.r(f,0))},
$S:z+52}
C.cR1.prototype={
$0(){return this.a.c8S()},
$S:0}
C.cQT.prototype={
$0(){return this.a.b0L(0,this.b)},
$S:0}
C.cQS.prototype={
$0(){return this.a.DV(this.b)},
$S:0}
C.cQR.prototype={
$0(){return this.a.DV(this.b)},
$S:0}
C.cRd.prototype={
$2(d,e){var w=this.a
return w.bHf(J.t(w.d,e))},
$S:42}
C.cQk.prototype={
$0(){var w=this.a
if(w.c!=null)w.Bv()},
$S:0}
C.cQj.prototype={
$0(){var w=this.a,v=w.w
return v.push(w.b3Z("Page "+(v.length+1),"",""))},
$S:0}
C.cQm.prototype={
$0(){var w=this.a.w,v=this.b,u=w[v],t=this.c
w[v]=w[t]
w[t]=u},
$S:0}
C.cQu.prototype={
$0(){},
$S:0}
C.cQv.prototype={
$1(d){var w=this.a,v=w.a,u=$.ax()
v.U$=u
v.R$=0
w=w.b
w.U$=u
w.R$=0
return null},
$S:8}
C.cQn.prototype={
$0(){return this.a.c="data:"+this.b+";base64,"+A.cS.gcs().aN(this.c)},
$S:0}
C.cQl.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cQp.prototype={
$0(){return this.a.Rs(this.b)},
$S:0}
C.cQq.prototype={
$0(){return this.a.Rs(this.b)},
$S:0}
C.cQr.prototype={
$0(){var w=this.a
w.m(new C.cQo(this.b))
w.EI()},
$S:0}
C.cQo.prototype={
$0(){return this.a.c=""},
$S:0}
C.cQt.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.m(new C.cQs(w,d))
w.EI()},
$S:z+69}
C.cQs.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.cQA.prototype={
$2(d,e){if(d)this.a.Bv()},
$S:128}
C.cQw.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=2
return B.b(u.a.Bv(),$async$$0)
case 2:t=u.b
if(t.e!=null)t.L(x.q).f.T(D.fpZ)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.cQx.prototype={
$0(){return this.a.b_F(this.b,-1)},
$S:0}
C.cQy.prototype={
$0(){return this.a.b_F(this.b,1)},
$S:0}
C.cQz.prototype={
$0(){return this.a.cae(0,this.b)},
$S:0}
C.fRf.prototype={
$1(d){var w=d.b[0]
w.toString
return w},
$S:318}
C.fRe.prototype={
$2(d,e){return A.o.aQ(e.length,d.length)},
$S:217}
C.fRm.prototype={
$1(d){var w=this.a
return C.hit(d)===w||C.hFP(d)===w},
$S:z+4}
C.fuJ.prototype={
$1(d){return A.a.b0(A.o.v(d),2,"0")},
$S:76}
C.cgy.prototype={
$1(d){return d.length!==0},
$S:3}
C.cgz.prototype={
$2(d,e){return C.hYr(d,e)},
$S:z+73}
C.cgB.prototype={
$1(d){var w,v,u,t=this.a.h(0,d.a)
if(x.f.b(t)){w=J.t(t,"at")
v=B.bj(J.k(w==null?"":w))}else v=null
w=J.t(d.b,"at")
u=B.bj(w==null?"":w)
if(u!=null)w=v==null||u.ca(v)
else w=!1
return w},
$S:1699}
C.fQe.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+4}
C.fQf.prototype={
$1(d){return C.fT0(d)&&A.a.q(d.db,"rais")},
$S:z+4}
C.fL3.prototype={
$1(d){var w=null
return B.bm(!0,new B.D(E.z0,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fXT,A.P,B.d("Hati ya jimbo: "+this.a,w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.Ie,w,D.fRR,new C.fL1(d),B.bo(A.c3,w,w,w,A.w,w,A.cp,w,w,w,w,w)),A.T,B.en(A.vc,w,D.fZa,new C.fL2(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.y5,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fL1.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fL2.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.fL4.prototype={
$1(d){var w=null
return B.ek(B.a([B.bO(!1,D.fNS,w,w,!0,w,w,w,new C.fL_(d),w,w),B.bI(D.h4O,w,new C.fL0(d),w)],x.p),w,w,w,D.h6L,w,w,w,w,D.fNL,w)},
$S:18}
C.fL_.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.fL0.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.en7.prototype={
$0(){var w=this.a
w.r=w.f=w.e=!1},
$S:0}
C.en5.prototype={
$0(){return this.a.e=!0},
$S:0}
C.en6.prototype={
$0(){return this.a.f=!0},
$S:0}
C.en8.prototype={
$0(){return this.a.r=!1},
$S:0}
C.en9.prototype={
$0(){return this.a.r=!0},
$S:0}
C.fRl.prototype={
$1(d){return A.a.b0(A.o.v(d),2,"0")},
$S:76}
C.fuR.prototype={
$4(d,e,f,g){var w,v,u=this.a,t=this.b
A.d.u(u,C.hgr(t,0.09,g,0.82,0.036,"banner_box_"+d))
w=g+0.00612
t=t.w
if(f){v=C.cC()
u.push(C.em(A.K,!1,t,A.aH,"marriage_field_"+d+":"+A.i.ad(0.82,3),4280640491,30,A.bq,A.u,"",0.025199999999999997,v,null,"","",0,!1,"",0,D.bf,4280172719,2,e,0,0,"",D.cn,D.d3,0.82,0.09,w))}else u.push(C.mF(e,A.K,t,30,A.u,0.025199999999999997,0,"banner_t_"+e,0.82,0.09,w))},
$S:1700}
C.fRh.prototype={
$0(){return A.d.gH(C.hi5("",this.a.a).r)},
$S:z+74}
C.fRg.prototype={
$2$h$w(d,e){var w=null
return new B.bK(A.a5,w,w,B.BW(A.z,B.p(w,w,A.f,w,w,new B.o(this.a.j(0.14),w,w,B.l(3),w,w,A.n),w,d,w,w,w,w,w,w),w,e),w)},
$0(){return this.$2$h$w(5,1)},
$1$w(d){return this.$2$h$w(5,d)},
$1$h(d){return this.$2$h$w(d,1)},
$S:1701}
C.fRj.prototype={
$1(d){var w=null,v=B.l(3)
return B.p(A.z,B.d(d,w,w,w,w,w,w,D.fEE,w,w,w),A.f,w,w,new B.o(this.a,w,w,v,w,w,A.n),w,12,w,w,w,w,w,w)},
$S:133}
C.fRk.prototype={
$1$size(d){var w=null
return B.A(B.a([B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.iy,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),B.dP(B.p(w,w,A.f,w,w,new B.o(w,w,B.K(A.iy,A.r,1.5),w,w,w,A.a6),w,d,w,w,w,w,w,d),new B.r(-d*0.38,0))],x.p),A.l,w,A.b8,A.h,0,w,w)},
$0(){return this.$1$size(18)},
$S:1702}
C.fRi.prototype={
$2$female$size(d,e){var w=null,v=d?D.ajR:this.a,u=B.K(A.iy,A.r,1),t=e*0.32,s=B.ao(w,B.p(w,w,A.f,w,w,new B.o(v,w,w,w,w,w,A.a6),w,t,w,w,w,w,w,t),w,w,w,w,e*0.16,w),r=d?0.62:0.5
return B.p(w,new B.an(A.z,w,A.ad,A.t,B.a([s,B.ao(e*0.06,B.p(w,w,A.f,w,w,new B.o(v,w,w,B.l(7),w,w,A.n),w,t,w,w,w,w,w,e*r),w,w,w,w,w,w)],x.p),w),A.f,w,w,new B.o(D.ahT,w,u,w,w,w,A.a6),w,e,w,w,w,w,w,e)},
$1$female(d){return this.$2$female$size(d,18)},
$S:1703}
C.h2G.prototype={
$1(d){return new C.aeM(this.a,this.b,null)},
$S:z+76}
C.e9v.prototype={
$2(d,e){var w,v,u,t=null,s=this.b,r=s?D.bya:A.Nw,q=B.K(D.jH.j(0.25),A.r,1),p=B.as(B.p(t,t,A.f,t,t,new B.o(A.c3.j(0.45),t,t,B.l(2),t,t,A.n),t,4,t,t,t,t,t,40),t,t,t),o=B.l(15)
o=B.p(t,D.asQ,A.f,t,t,new B.o(t,t,B.K(A.c.j(0.5),A.r,1.2),o,B.a([new B.ab(0,A.G,D.jH.j(0.35),A.et,10)],x.V),D.cbu,A.n),t,t,t,t,A.yS,t,t,t)
w=this.a
v=w.d.length
u=x.p
return B.p(t,B.x(B.a([new B.D(R.a1l,B.x(B.a([p,A.aB,B.A(B.a([o,A.bb,B.E(B.x(B.a([B.d("Chagua muundo wa hati",t,t,t,t,t,t,B.m(t,t,s?A.c:D.jH,t,t,t,t,t,t,t,t,17,t,t,A.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),A.bF,B.d(w.c+" \xb7 "+v+" miundo",t,t,t,t,t,t,D.fDP,t,t,t)],u),A.E,t,A.e,A.h,0,A.p),1)],u),A.l,t,A.e,A.h,0,t,t)],u),A.l,t,A.e,A.h,0,A.p),t),B.E(B.iv(!0,t,e,A.y,D.aVa,new C.e9u(w,this.c),v,D.ann,t,A.ah,!1),1)],u),A.l,t,A.e,A.h,0,A.p),A.f,t,t,new B.o(r,t,q,A.mJ,t,t,A.n),t,t,t,t,t,t,t,t)},
$S:119}
C.e9u.prototype={
$2(d,e){var w=this.a.d[e]
return new C.ae9(w,new C.e9t(this.b,w),null)},
$S:z+77}
C.e9t.prototype={
$0(){B.a6(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fL7.prototype={
$1(d){return d.w==="hati_kuhowa"},
$S:z+2}
C.fL8.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.z0,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.h0u,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.Ie,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fL5(d),B.bo(D.jH,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.T,B.en(A.oQ,w,D.Wu,new C.fL6(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.y5,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fL5.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fL6.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.fLb.prototype={
$1(d){return d.w==="hati_kuhoweya"},
$S:z+2}
C.fLc.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.z0,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fOV,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.Ie,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fL9(d),B.bo(D.jH,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.T,B.en(A.oQ,w,D.Wu,new C.fLa(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.y5,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fL9.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fLa.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.fLf.prototype={
$1(d){return d.w==="hati_malipo_awamu"},
$S:z+2}
C.fLg.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.z0,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fVD,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.Ie,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fLd(d),B.bo(D.jH,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.T,B.en(A.oQ,w,D.Wu,new C.fLe(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.y5,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fLd.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fLe.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.fx1.prototype={
$1(d){var w=this.b
return A.o.D(A.i.V((A.o.h0(this.a,d)&255)*(1-w)+(A.o.h0(this.c,d)&255)*w),0,255)},
$S:68}
C.fEG.prototype={
$0(){var w=C.hBV(this.a,this.b)
return"data:image/png;base64,"+A.cS.gcs().aN(w)},
$S:22}
C.fAg.prototype={
$0(){return B.fIF(this.a.$0())},
$S:278}
C.fVv.prototype={
$0(){var w,v,u,t=null,s=B.fU(t,t,A.bW,0,A.dS,96,t,0,4,t,A.bW,4,!1),r=0
for(;;){w=s.a
v=w==null
u=v?t:w.b
if(!(r<(u==null?0:u)))break
u=v?t:w.a
if(u==null)u=0
w=v?t:w.b
w=C.hf_(r/((w==null?0:w)-1))
v=new Uint8Array(4)
v[0]=w>>>16&255
v[1]=w>>>8&255
v[2]=w&255
v[3]=w>>>24&255
B.iF(s,!1,A.cY,new B.lx(v),t,A.cI,1,0,u-1,r,r);++r}return s},
$S:206}
C.fVu.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l=null,k=B.fU(l,l,A.bW,0,A.dS,96,l,0,4,l,A.bW,96,!1)
C.fJi(k,B.a53(0,0,0,0))
for(w=0;w<96;++w)for(v=w/96*0.9+0.05,u=w-48+0.5,t=u*u,s=0;s<96;++s){r=s-48+0.5
q=Math.sqrt(r*r+t)
if(q>48)continue
p=48-q
o=A.i.D(p,0,1)
n=q>43?C.fx0(4287258130,4291402286,p/5):C.hf_(A.i.D(v,0,1))
p=A.i.V(o*255)<<24|n&16777215
m=new Uint8Array(4)
m[0]=p>>>16&255
m[1]=p>>>8&255
m[2]=p&255
m[3]=p>>>24&255
k.xW(s,w,new B.lx(m))}return k},
$S:206}
C.fVs.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=null,h=B.fU(i,i,A.bW,0,A.dS,196,i,0,4,i,A.bW,1140,!1)
C.fJi(h,C.aQ3(this.a))
for(w=[30,166],v=w.length,u=this.b,t=u>>>16&255,s=u>>>8&255,r=u&255,u=u>>>24&255,q=0;q<v;++q){p=w[q]
for(o=p-11,n=p+11,m=36;m<1140;m+=72){l=A.o.V(m)
k=new Uint8Array(4)
j=new B.lx(k)
k[0]=t
k[1]=s
k[2]=r
k[3]=u
k=l+11
B.iF(h,!0,A.cY,j,i,A.cI,2.4,l,k,o,p)
B.iF(h,!0,A.cY,j,i,A.cI,2.4,k,l,p,n)
k=l-11
B.iF(h,!0,A.cY,j,i,A.cI,2.4,l,k,n,p)
B.iF(h,!0,A.cY,j,i,A.cI,2.4,k,l,p,o)}}return h},
$S:206}
C.fVx.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1=null,a2=4292456522,a3=B.fU(a1,a1,A.bW,0,A.dS,280,a1,0,4,a1,A.bW,240,!1)
C.fJi(a3,B.a53(0,0,0,0))
w=this.a
if(w!=null)for(v=[-1,1],u=v.length,t=x.J,s=0;s<u;++s){r=v[s]
q=120+r*18
p=120+r*64
o=B.a([new B.fJ(q,152),new B.fJ(p,162),new B.fJ(p+r*6,274),new B.fJ((q+p)/2,250),new B.fJ(q-r*4,266)],t)
n=new Uint8Array(4)
n[0]=w>>>16&255
n[1]=w>>>8&255
n[2]=w&255
n[3]=w>>>24&255
B.Bk(a3,new B.lx(n),o)}for(w=this.b,m=0;m<280;++m)for(l=m-112,v=l*l,u=(m-8)/208,k=0;k<240;++k){j=k-120
i=Math.sqrt(j*j+v)
if(i>104)continue
t=104-i
h=A.i.D(t,0,1)
if(w)g=i>97?C.fx0(4287258130,4292455999,t/7):C.hf_(A.i.D(u,0,1))
else g=i>90?a2:4294436804
t=A.i.V(h*255)<<24|g&16777215
o=new Uint8Array(4)
o[0]=t>>>16&255
o[1]=t>>>8&255
o[2]=t&255
o[3]=t>>>24&255
a3.xW(k,m,new B.lx(o))}f=w?4286206480:a2
C.ahW(a3,!0,C.aQ3(f),74,120,112)
C.ahW(a3,!0,C.aQ3(f),73,120,112)
C.ahW(a3,!0,C.aQ3(f),68,120,112)
w=this.c
C.hzk(a3,120,112,34,w)
for(v=[D.eFH,D.eJJ,D.eFB,D.eZL],u=v.length,t=x.J,o=w>>>16&255,n=w>>>8&255,e=w&255,w=w>>>24&255,s=0;s<u;++s){d=v[s]
a0=120+d.a
d=112+d.b
d=B.a([new B.fJ(a0,d-9),new B.fJ(a0+9,d),new B.fJ(a0,d+9),new B.fJ(a0-9,d)],t)
a0=new Uint8Array(4)
a0[0]=o
a0[1]=n
a0[2]=e
a0[3]=w
B.Bk(a3,new B.lx(a0),d)}return a3},
$S:206}
C.fVw.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.fU(i,i,A.bW,0,A.dS,1280,i,0,3,i,A.bW,720,!1)
for(w=j.a,v=j.b,u=0;u<1280;++u){t=C.fx0(w,v,u/1279)
s=new Uint8Array(4)
s[0]=t>>>16&255
s[1]=t>>>8&255
s[2]=t&255
s[3]=t>>>24&255
B.iF(h,!1,A.cY,new B.lx(s),i,A.cI,1,0,719,u,u)}w=j.d
if(j.c){C.hgq(h,14,14,692,1252,34,w,3.2)
C.hgq(h,30,30,660,1220,0,w,1.6)
for(v=[D.eKA,D.eKb],t=v.length,s=x.J,r=w>>>16&255,q=w>>>8&255,p=w&255,w=w>>>24&255,o=0;o<t;++o){n=v[o]
m=n.a+0
n=n.b+8
n=B.a([new B.fJ(m,n-9),new B.fJ(m+9,n),new B.fJ(m,n+9),new B.fJ(m-9,n)],s)
m=new Uint8Array(4)
m[0]=r
m[1]=q
m[2]=p
m[3]=w
B.Bk(h,new B.lx(m),n)}for(v=[D.eJG,D.eKf,D.eFZ,D.eK6],t=v.length,o=0;o<t;++o){n=v[o]
m=A.i.V(n.a)
n=A.i.V(n.b)
l=new Uint8Array(4)
l[0]=r
l[1]=q
l[2]=p
l[3]=w
B.kT(h,!0,A.cY,new B.lx(l),i,A.cI,4,m,n)}for(v=[D.eJH,D.eKg],t=v.length,o=0;o<t;++o){n=v[o]
m=A.i.V(n.a)
n=A.i.V(n.b)
l=new Uint8Array(4)
l[0]=r
l[1]=q
l[2]=p
l[3]=w
B.kT(h,!0,A.cY,new B.lx(l),i,A.cI,4,m,n)}for(v=[326,360,394],t=v.length,o=0;o<t;++o){k=v[o]
n=k===360?10:7
n=B.a([new B.fJ(k,76-n),new B.fJ(k+n,76),new B.fJ(k,76+n),new B.fJ(k-n,76)],s)
m=new Uint8Array(4)
m[0]=r
m[1]=q
m[2]=p
m[3]=w
B.Bk(h,new B.lx(m),n)}}else C.hgq(h,16,16,688,1248,0,w,3)
return h},
$S:206}
C.fVt.prototype={
$0(){var w=null,v=B.fU(w,w,A.bW,0,A.dS,64,w,0,4,w,A.bW,64,!1)
C.fJi(v,B.a53(0,0,0,0))
C.hzk(v,32,32,30,this.a)
return v},
$S:206}
C.h4d.prototype={
$1(d){return D.hEB},
$S:z+79}
C.erU.prototype={
$2(d,e){var w,v=null,u=this.a,t=u?D.boj:A.Nw,s=B.K(A.aE.j(0.25),A.r,1),r=B.as(B.p(v,v,A.f,v,v,new B.o(A.aE.j(0.45),v,v,B.l(2),v,v,A.n),v,4,v,v,v,v,v,40),v,v,v),q=B.l(15)
q=B.p(v,D.c3M,A.f,v,v,new B.o(v,v,B.K(A.c.j(0.5),A.r,1.2),q,B.a([new B.ab(0,A.G,A.c3.j(0.35),A.et,10)],x.V),D.aug,A.n),v,v,v,v,A.yS,v,v,v)
w=x.p
return B.p(v,B.x(B.a([new B.D(R.a1l,B.x(B.a([r,A.aB,B.A(B.a([q,A.bb,B.E(B.x(B.a([B.d("Chagua muundo wa hati",v,v,v,v,v,v,B.m(v,v,u?A.c:T.Ns,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.bF,B.d("Hati ya Ndoa \xb7 19 miundo",v,v,v,v,v,v,D.fBb,v,v,v)],w),A.E,v,A.e,A.h,0,A.p),1)],w),A.l,v,A.e,A.h,0,v,v)],w),A.l,v,A.e,A.h,0,A.p),v),B.E(B.iv(!0,v,e,A.y,D.aVa,new C.erT(this.b),19,D.ann,v,A.ah,!1),1)],w),A.l,v,A.e,A.h,0,A.p),A.f,v,v,new B.o(t,v,s,A.mJ,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:119}
C.erT.prototype={
$2(d,e){var w=D.Tb[e]
return new C.agv(w,new C.erS(this.a,w),null)},
$S:z+81}
C.erS.prototype={
$0(){B.a6(this.a,!1).N(this.b.a)
return null},
$S:0}
C.fT4.prototype={
$0(){return B.fIF(C.ifG(this.a))},
$S:278}
C.fT3.prototype={
$0(){var w=C.hiN(this.a)
return"data:image/png;base64,"+A.cS.gcs().aN(w)},
$S:22}
C.fsT.prototype={
$4(d,e,f,g){var w=d+f*7,v=g*3
v=B.a([new B.fJ(d,e),new B.fJ(w,e+v),new B.fJ(d+f*14,e),new B.fJ(w,e-v)],x.J)
B.Bk(this.a,C.fK(4291404327),v)},
$S:623}
C.h4o.prototype={
$1(d){return new C.Xc(this.a,null)},
$S:z+85}
C.euR.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euQ())},
$S:28}
C.euQ.prototype={
$0(){},
$S:0}
C.euS.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.euP(w,d))},
$S:1706}
C.euP.prototype={
$0(){return this.a.x=J.eR(A.dI.gaT(this.b))},
$S:0}
C.euT.prototype={
$1(d){},
$S:29}
C.eut.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eup.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.euA.prototype={
$0(){var w=this.a
w.as=!0
w.at="The editor is writing your newspaper\u2026"},
$S:0}
C.euB.prototype={
$0(){var w=this.a
A.d.a8(w.ay)
w.z=this.b
w=w.ax
A.d.a8(w)
w.push(D.eLR)},
$S:0}
C.euC.prototype={
$0(){return this.a.as=!1},
$S:0}
C.euv.prototype={
$0(){var w=this.a
w.as=!0
w.at="Working on it\u2026"
w.ax.push(new B.y("you",this.b))
w.f.bP(0,A.cf)},
$S:0}
C.euw.prototype={
$0(){var w,v=this.b
if(v.c){w=this.a
w.ay.push(w.z)
w.z=v.b}this.a.ax.push(new B.y("ai",v.a))},
$S:0}
C.eux.prototype={
$0(){return this.a.ax.push(new B.y("ai",B.w(this.b)))},
$S:0}
C.euy.prototype={
$0(){return this.a.as=!1},
$S:0}
C.euz.prototype={
$1(d){var w=this.a.r,v=w.f
if(v.length!==0){v=A.d.gd5(v).Q
v.toString
w.mv(v,A.e6,A.ie)}},
$S:8}
C.euu.prototype={
$0(){var w=this.a,v=w.z,u=C.fTN(w.y),t=this.b
w.y=t
if(v.a===u)w.z=v.cPc(C.fTN(t))},
$S:0}
C.eur.prototype={
$0(){var w=this.a
w.as=!0
w.at="Making your picture\u2026"},
$S:0}
C.eus.prototype={
$0(){return this.a.as=!1},
$S:0}
C.euI.prototype={
$0(){return B.a6(this.a,!1).hY()},
$S:0}
C.euJ.prototype={
$0(){var w=this.a
return w.m(new C.euH(w))},
$S:0}
C.euH.prototype={
$0(){var w=this.a
return w.z=w.ay.pop()},
$S:0}
C.euK.prototype={
$0(){var w=this.a
return w.m(new C.euG(w,this.b))},
$S:0}
C.euG.prototype={
$0(){var w=this.b.b
this.a.e.sb3(0,w)
return w},
$S:0}
C.euL.prototype={
$1(d){var w=this.a
return w.m(new C.euF(w))},
$S:9}
C.euF.prototype={
$0(){return this.a.Q="en"},
$S:0}
C.euM.prototype={
$1(d){var w=this.a
return w.m(new C.euE(w))},
$S:9}
C.euE.prototype={
$0(){return this.a.Q="sw"},
$S:0}
C.euN.prototype={
$0(){var w=this.a
return w.m(new C.euD(w,this.b))},
$S:0}
C.euD.prototype={
$0(){var w=this.b
this.a.f.sb3(0,w)
return w},
$S:0}
C.euO.prototype={
$1(d){return this.a.a0b()},
$S:2}
C.euq.prototype={
$0(){return this.a.cef(this.b)},
$S:0}
C.ckl.prototype={
$1(d){var w=this.a
return typeof w.h(0,d)=="string"?A.a.i(B.cP(w.h(0,d))):null},
$S:282}
C.ckj.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.ckk.prototype={
$1(d){return d.length!==0},
$S:3}
C.fSF.prototype={
bpc(d,e){var w=0,v=B.j(x.H),u,t,s,r
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:r=new C.bUD(d,B.a([],x.bH))
for(u=e.length,t=0;t<e.length;e.length===u||(0,B.I)(e),++t){s=e[t]
r.cLt($.qL().jc(0,"assets/news_fonts/"+s))}w=2
return B.b(r.n1(0),$async$$2)
case 2:return B.h(null,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.bpc(d,e)},
$S:1707}
C.fQV.prototype={
$1(d){return d.length!==0},
$S:3}
C.fQX.prototype={
$1(d){var w=this.a.a
w=A.d.aM(A.d.du(this.b,w,w+d)," ")
w=B.aL(w," \n\n ","\n\n")
w=B.aL(w," \n\n","\n\n")
return B.aL(w,"\n\n ","\n\n")},
$S:76}
C.fQW.prototype={
$1(d){var w,v,u,t=null
if(d===0)return!0
w=B.fE(t,A.cx,t,t,t,B.cS(t,t,t,t,t,t,t,t,t,this.c,this.b.$1(d)),A.rg,A.c1,t,A.dJ,A.c2)
v=this.a
w.nB(v.b)
u=w.b.a.c
return u.gba(u)<=v.a},
$S:33}
C.fsr.prototype={
$1(d){var w=A.a.fw(d,B.ag("\\s+",!0,!1,!1,!1))
return new B.Y(w,new C.fss(),B.U(w).k("Y<1>")).gJ(0)},
$S:262}
C.fss.prototype={
$1(d){return d.length!==0},
$S:3}
C.fsp.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:233}
C.fsq.prototype={
$2(d,e){return d+this.a.$1(e)},
$S:233}
C.ckm.prototype={
$2(a9,b0){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5=this,a6=null,a7=y.g,a8=b0.b
a8=isFinite(a8)?a8:824
w=b0.d
w=isFinite(w)?w:340
v=a5.b
u=a5.c
t=u-1
s=(a8-v*t)/u
r=a5.d&&a5.a.gaCP()?Math.min(150,w*0.42):0
q=a5.e
p=x.s
o=B.a([],p)
for(n=a5.a,m=x.G,l=n.d,k=l.as;q>=10.5;q-=0.5){j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,w-(f===t?r:0)))
o=C.hir(i,new B.G(!0,h,a6,k,a6,a6,q,A.d0,A.bq,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.heU(j.length===0?B.a([a7],p):j,o))break}e=q*1.28
j=A.d.aM(n.gcmF(),"\n\n")
d=B.fE(a6,A.cx,a6,a6,a6,B.cS(a6,a6,a6,a6,a6,a6,a6,a6,a6,n.afX(k,q,1.28),j),A.rg,A.c1,a6,A.dJ,A.c2)
d.nB(s)
for(a0=1;a0<40;++a0){j=d.b.a.c
a1=Math.min(w,j.gba(j)/u+e*a0)
j=n.c.r
i=j.length===0?B.a([a7],p):j
h=B.b1(l.w)
g=B.a([],m)
for(f=0;f<u;++f)g.push(new B.y(s,Math.min(a1,w-(f===t?r:0))))
a2=C.hir(i,new B.G(!0,h,a6,k,a6,a6,q,A.d0,A.bq,0,a6,a6,1.28,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6,a6),g)
if(C.heU(j.length===0?B.a([a7],p):j,a2)){o=a2
break}}a3=n.afX(k,q,1.28)
p=x.p
m=B.a([],p)
for(k=r>0,v=v/2-0.5,l=l.w,j=r-12,a4=0;a4<u;++a4){i=B.a([],p)
if(a4>0)i.push(new B.D(new B.Q(v,0,v,0),B.p(a6,a6,A.f,B.b1(l).j(0.5),a6,a6,a6,a6,a6,a6,a6,a6,a6,1),a6))
h=B.a([new B.by(1,A.ba,B.d(o.length>a4?o[a4]:"",a6,a6,a6,a6,a6,a6,a3,A.rg,a6,a6),a6)],p)
if(k&&a4===t)h.push(n.aCO(s,j))
i.push(new B.a5(s,a6,B.x(h,A.E,a6,A.e,A.h,0,A.p),a6))
A.d.u(m,i)}return B.A(m,A.E,a6,A.e,A.h,0,a6,a6)},
$S:309}
C.ckn.prototype={
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
n=o.gaCP()
m=n?Math.min(140,p*0.4):0
n=x.s
l=B.a([],n)
for(k=x.G,j=o.d,i=j.as,h=17;h>=10.5;h-=0.5){g=o.c.r
f=g.length===0?B.a([a6],n):g
e=B.b1(j.w)
d=B.a([new B.y(u,q),new B.y(u,q)],k)
for(a0=0;a0<t;++a0)d.push(new B.y(r,p-(a0===s?m:0)))
l=C.hir(f,new B.G(!0,e,a5,i,a5,a5,h,A.d0,A.bq,0,a5,a5,1.28,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5,a5),d)
if(C.heU(g.length===0?B.a([a6],n):g,l))break}a1=o.afX(i,h,1.28)
a2=new C.cko(a1)
n=x.p
v=B.A(B.a([a2.$2(l[0],u),A.KG,new B.a5(v,a5,a4.f,a5),A.KG,a2.$2(l[1],u)],n),A.E,a5,A.e,A.h,0,a5,a5)
k=B.a([],n)
for(i=m>0,j=j.w,g=m-12,a3=0;a3<t;++a3){f=B.a([],n)
if(a3>0)f.push(new B.D(D.bK3,B.p(a5,a5,A.f,B.b1(j).j(0.5),a5,a5,a5,a5,a5,a5,a5,a5,a5,1),a5))
e=B.a([new B.by(1,A.ba,B.d(l[2+a3],a5,a5,a5,a5,a5,a5,a1,A.rg,a5,a5),a5)],n)
if(i&&a3===s)e.push(o.aCO(r,g))
f.push(new B.a5(r,a5,B.x(e,A.E,a5,A.e,A.h,0,A.p),a5))
A.d.u(k,f)}return B.x(B.a([new B.a5(a5,q,v,a5),A.af,B.E(B.A(k,A.E,a5,A.e,A.h,0,a5,a5),1)],n),A.l,a5,A.e,A.h,0,A.p)},
$S:152}
C.cko.prototype={
$2(d,e){var w=null
return new B.a5(e,w,B.d(d,w,w,w,w,w,w,this.a,A.rg,w,w),w)},
$S:622}
C.h4r.prototype={
$1(d){return new C.Xd(this.a,this.b,null)},
$S:z+88}
C.evD.prototype={
$1(d){return d.le()},
$S:1709}
C.evE.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.evC(w,d))},
$S:1710}
C.evC.prototype={
$0(){return this.a.d=this.b.b},
$S:0}
C.evq.prototype={
$0(){return this.a.y=!0},
$S:0}
C.evr.prototype={
$0(){return this.a.y=!1},
$S:0}
C.evx.prototype={
$0(){return B.a6(this.a,!1).eq()},
$S:0}
C.evy.prototype={
$2(d,e){var w=null,v=this.a,u=this.b,t=B.K(A.bE,A.r,2.5)
return B.az(w,B.p(w,B.b5(w,w,w,new C.beQ(u,v.gazS(),w),A.h4),A.f,w,w,new B.o(w,w,t,w,w,w,A.n),w,w,w,w,w,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.evv(v),new C.evw(v,e,u),w,w,w,w,w,w,w,w,w,w,w,!1,A.a4)},
$S:36}
C.evv.prototype={
$1(d){var w=this.a
return w.x=w.f},
$S:246}
C.evw.prototype={
$1(d){var w=this.a
w.m(new C.evs(w,d,this.b,this.c))},
$S:223}
C.evs.prototype={
$0(){var w,v,u,t=this,s=t.a,r=t.b
s.f=A.i.D(s.x*r.d,1,6)
w=s.gazS()
r=r.a
v=t.c
u=t.d
s.r=A.i.D(s.r-r.a/v.b*(w.c-w.a)/u.c,0,1)
s.w=A.i.D(s.w-r.b/v.d*(w.d-w.b)/u.d,0,1)},
$S:0}
C.evz.prototype={
$1(d){var w=this.a
return w.m(new C.evu(w,this.b))},
$S:9}
C.evu.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.evA.prototype={
$1(d){var w=this.a
return w.m(new C.evt(w,d))},
$S:6}
C.evt.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.evB.prototype={
$0(){return B.a6(this.b,!1).N(this.a.a.c)},
$S:0}
C.h4H.prototype={
$1(d){return D.hHo},
$S:z+95}
C.f4W.prototype={
$1(d){return this.a.ZK()},
$S:8}
C.f3O.prototype={
$0(){var w=this.a,v=this.b
w.z=v
w.y="data:image/png;base64,"+A.cS.gcs().aN(v)},
$S:0}
C.f4b.prototype={
$0(){var w=this.a
w.p4=this.b
w.as=3},
$S:0}
C.f4l.prototype={
$1(d){return d>=this.a.length},
$S:33}
C.f3x.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f3y.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f3v.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.f3w.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.f44.prototype={
$2(d,e){var w,v=null,u=e.d,t=this.a,s=new C.f45(t,this.b,u,e.b),r=s.$1(!0),q=t.y2
q=B.a([B.jg(B.qs(q>0.2?F.bY9(r,new B.Ev(q,q,A.x)):r),A.t,v)],x.p)
w=t.bh
if(w>0.02)q.push(B.jg(B.d3(B.qs(F.bY9(s.$1(!0),new B.Ev(12,12,A.x))),w*0.75),A.t,v))
s=t.b1
if(s!=null&&t.aZ>0)q.push(B.eb(v,B.b1(s).j(t.aZ),!0))
s=t.bi
if(s!=null&&t.bH>0){s=B.b1(s).j(t.bH)
w=t.bi
w.toString
q.push(new B.bM(new B.o(v,v,v,v,v,new B.bS(D.b3U,1.15,A.x,v,0,B.a([s,B.b1(w).j(0)],x.O),v,v),A.n),A.bk,v,v))}s=t.aK
if(s>0)q.push(new B.bM(new B.o(v,v,v,v,v,new B.bS(D.b3D,0.8,A.x,v,0,B.a([A.c.j(s*0.55),A.c.j(0)],x.O),v,v),A.n),A.bk,v,v))
s=t.aR
if(s>0)q.push(new B.bM(new B.o(v,v,v,v,v,new B.a7(A.aZ,A.b4,A.x,B.a([A.w.j(s),A.L,A.L,A.w.j(t.aR)],x.O),D.dbh,v),A.n),A.bk,v,v))
if(t.aO>0){s=t.k1
q.push(B.ao(v,new B.bM(new B.o(v,v,v,v,v,new B.a7(A.aZ,A.b4,A.x,B.a([A.w.j(0),A.w.j(t.aO),A.w.j(t.aO),A.w.j(0)],x.O),D.dng,v),A.n),A.bk,v,v),0.48*u,v,0,0,(s-0.06)*u,v))}s=t.a0
if(s>0)q.push(B.eb(v,A.w.j(s),!0))
s=t.bd
if(s>0)q.push(new B.bM(new B.o(v,v,v,v,v,new B.bS(A.z,0.95,A.x,v,0,B.a([A.L,A.w.j(s)],x.O),D.dk3,v),A.n),A.bk,v,v))
t=t.aH
if(t>0)q.push(B.b5(v,v,v,new C.bir(t,v),A.az))
return new B.an(A.a0,v,A.b1,A.t,q,v)},
$S:62}
C.f45.prototype={
$1(d){var w,v,u,t,s,r=this,q=null,p=B.fX(r.b,A.z,q,q,A.cl,A.c_,!0,q,!1,q,q),o=r.a,n=o.b_g(o.RG,o.R8,o.rx,o.ry,o.to,o.x1,o.x2,o.xr,o.y1),m=o.c5,l=m*3.141592653589793/180
if(m===0)w=1
else{m=Math.cos(l)
v=Math.sin(l)
u=r.c
t=r.d
s=u/t
u=s>1?s:t/u
w=Math.abs(m)+Math.abs(v)*u}m=o.bn
v=o.aY
u=v-1
t=o.bx
s=o.cg?-1:1
return B.dP(B.e4(A.z,B.eI(A.z,l,B.fA(A.z,new B.BF(new B.uR(q,q,n,A.yh),p,q),q,B.wm(s,o.cT?-1:1,1),!0),q),v*w,q,q),new B.r(-m*r.d*u/2,-t*r.c*u/2))},
$S:538}
C.f4h.prototype={
$0(){return this.a.m(new C.f4g(this.b,this.c))},
$S:0}
C.f4g.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f4i.prototype={
$1(d){return this.a.m(new C.f4f(this.b,d))},
$S:6}
C.f4f.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f4k.prototype={
$0(){return this.a.m(new C.f4j(this.b,this.c))},
$S:0}
C.f4j.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.f3n.prototype={
$1(d){return d.c===this.a.x},
$S:z+28}
C.f3o.prototype={
$1(d){var w=this.a
return w.m(w.gcEQ())},
$S:2}
C.f3p.prototype={
$1(d){return this.a.m(new C.f3m())},
$S:2}
C.f3m.prototype={
$0(){},
$S:0}
C.f3q.prototype={
$0(){var w=this.a
return w.m(new C.f3l(w,this.b))},
$S:0}
C.f3l.prototype={
$0(){return this.a.x=this.b},
$S:0}
C.f3s.prototype={
$2(d,e){return A.as},
$S:38}
C.f3r.prototype={
$2(d,e){var w=null,v=this.b[e],u=this.a,t=v.a===u.w.a,s=B.l(14),r=B.a([B.b1(v.e),B.b1(v.f)],x.O),q=t?A.c:A.bw
q=B.K(q,A.r,t?2.5:1)
r=B.cT(w,B.as(B.d("\u201c",w,w,w,w,w,w,B.m(w,w,B.b1(v.r),w,w,w,w,w,w,w,w,40,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,w,w),w,w,A.b0,new B.o(w,w,q,s,w,new B.a7(A.aZ,A.b4,A.x,r,w,w),A.n),A.ha,w,94,w,w,w,w,w,70)
return B.az(w,new B.a5(70,w,B.x(B.a([r,A.fD,B.d(v.b,w,1,A.a2,w,w,w,B.m(w,w,t?A.c:A.aF,w,w,w,w,w,w,w,w,10.5,w,w,A.O,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],x.p),A.l,w,A.e,A.h,0,A.p),w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.f3k(u,v),w,w,w,w,w,w,!1,A.a4)},
$S:83}
C.f3k.prototype={
$0(){var w=this.a
return w.m(new C.f3h(w,this.b))},
$S:0}
C.f3h.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.f3t.prototype={
$1(d){var w=this.a
return w.m(new C.f3j(w,d))},
$S:9}
C.f3j.prototype={
$0(){return this.a.k3=this.b},
$S:0}
C.f3u.prototype={
$1(d){var w=this.a
return w.m(new C.f3i(w,d))},
$S:9}
C.f3i.prototype={
$0(){return this.a.k2=this.b},
$S:0}
C.f4L.prototype={
$1(d){var w=this.a.db
return w[d]===w[A.d.gH(this.b)]},
$S:33}
C.f4S.prototype={
$1(d){var w=this.a
return w.m(new C.f4T(w,d))},
$S:31}
C.f4T.prototype={
$0(){var w,v,u,t,s
for(w=this.a,v=w.dx,v=B.e_(v,v.r,B.a3(v).c),w=w.db,u=this.b,t=v.$ti.c;v.C();){s=v.d
w[s==null?t.a(s):s]=u}},
$S:0}
C.f4U.prototype={
$1(d){var w
switch(d){case 1:w=20
break
case 2:w=28
break
case-1:w=11
break
default:w=15
break}return w},
$S:175}
C.f4M.prototype={
$0(){var w=this.a
return w.m(new C.f4K(w,this.b))},
$S:0}
C.f4K.prototype={
$0(){var w=this.a.dx,v=this.b
return w.q(0,v)?w.W(0,v):w.I(0,v)},
$S:0}
C.f4N.prototype={
$0(){var w=this.a
return w.m(new C.f4J(w,this.b))},
$S:0}
C.f4J.prototype={
$0(){var w,v=this.b.length,u=J.e6(v,x.S)
for(w=0;w<v;++w)u[w]=w
return this.a.dx.u(0,u)},
$S:0}
C.f4O.prototype={
$0(){var w=this,v=w.a
return v.m(new C.f4I(v,w.b,w.c,w.d))},
$S:0}
C.f4I.prototype={
$0(){var w,v,u,t,s,r=this,q=r.a.dx
q.a8(0)
w=B.a([],x.t)
for(v=r.b,u=r.c,t=r.d,s=0;s<v.length;++s)if(u[s]===t)w.push(s)
q.u(0,w)},
$S:0}
C.f4P.prototype={
$0(){var w=this.a,v=w.dx
return w.m(v.gtk(v))},
$S:0}
C.f4Q.prototype={
$0(){return this.b.$1(this.a.a)},
$S:0}
C.f4R.prototype={
$0(){var w=this.a
return w.m(new C.f4H(w))},
$S:0}
C.f4H.prototype={
$0(){var w=this.a.db
return A.d.hA(w,0,w.length,0)},
$S:0}
C.f4u.prototype={
$1(d){return d.a===this.a.dy},
$S:220}
C.f4v.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=(e.b-42)/7,h=B.a([],x.p)
for(w=i*0.42,v=this.a,u=i*0.95,t=x.O,s=0;s<21;++s){r={}
q=D.aCs[s]
r.a=null
p=q.a
r.a=p
o=v.dy
n=new B.aP(9,9)
m=B.a([B.b1(v.w.e),B.b1(v.w.f)],t)
l=r.a
k=v.fx
h.push(v.azW(new B.nx(new B.be(n,n,n,n),A.aq,new B.bM(new B.o(j,j,j,j,j,new B.a7(A.a5,A.a9,A.x,m,j,j),A.n),A.bk,new C.b1X(l,B.b1(k==null?v.w.x:k),A.i.D(w,12,26),j),j),j),u,q.b,o===p,new C.f4t(r,v),2,i))}return B.bZ(A.bI,h,A.br,j,7,7)},
$S:170}
C.f4t.prototype={
$0(){var w=this.b
return w.m(new C.f4o(this.a,w))},
$S:0}
C.f4o.prototype={
$0(){return this.b.dy=this.a.a},
$S:0}
C.f4w.prototype={
$1(d){var w=this.a
w.p1=!1
w.k4=d},
$S:151}
C.f4z.prototype={
$0(){var w=this.a
return w.m(new C.f4s(w))},
$S:0}
C.f4s.prototype={
$0(){return this.a.p1=!0},
$S:0}
C.f4A.prototype={
$1(d){return this.a.p2=d},
$S:6}
C.f4B.prototype={
$1(d){return this.a.p3=d},
$S:6}
C.f4C.prototype={
$1(d){return this.a.ok=d},
$S:6}
C.f4D.prototype={
$0(){var w=this.a
return w.m(new C.f4r(w))},
$S:0}
C.f4r.prototype={
$0(){var w=this.a
return w.fy=!w.fy},
$S:0}
C.f4E.prototype={
$0(){var w=this.a
return w.m(new C.f4q(w))},
$S:0}
C.f4q.prototype={
$0(){var w=this.a
return w.go=!w.go},
$S:0}
C.f4F.prototype={
$0(){var w=this.b
return w.m(new C.f4p(this.a,w))},
$S:0}
C.f4p.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.f4G.prototype={
$1(d){return this.a.fx=d},
$S:151}
C.f4x.prototype={
$1(d){return this.a.fr=d},
$S:6}
C.f4y.prototype={
$1(d){return this.a.k1=d},
$S:6}
C.f48.prototype={
$0(){var w=this.a
return w.m(new C.f47(w))},
$S:0}
C.f47.prototype={
$0(){var w=this.a
w.p4=null
w.b6H()},
$S:0}
C.f49.prototype={
$0(){var w=this.a
return w.m(new C.f46(w,this.b))},
$S:0}
C.f46.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.f4a.prototype={
$0(){var w=this.a
return w.m(w.gcvc())},
$S:0}
C.f40.prototype={
$0(){var w=this.a
return w.m(new C.f4_(w))},
$S:0}
C.f4_.prototype={
$0(){var w=this.a
w.RG=0.03
w.rx=1.12
w.ry=1.15
w.R8=w.xr=0},
$S:0}
C.f41.prototype={
$0(){var w=this.a
return w.m(new C.f3Z(w))},
$S:0}
C.f3Z.prototype={
$0(){var w=this.a
w.aO=0.55
w.a0=Math.max(w.a0,0.12)},
$S:0}
C.f42.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o=null,n=(e.b-24)/4,m=B.a([],x.p)
for(w=n*1.25,v=this.a,u=this.b,t=0;t<18;++t){s=D.dku[t]
r=s.b
q=Math.abs(v.RG-r)<0.001&&Math.abs(v.rx-s.c)<0.001&&Math.abs(v.ry-s.d)<0.001&&Math.abs(v.to-s.e)<0.001&&Math.abs(v.x1-s.f)<0.001&&Math.abs(v.xr-s.r)<0.001&&Math.abs(v.x2)<0.5&&Math.abs(v.R8)<0.001&&!v.y1
p=new B.aP(9,9)
m.push(v.azW(new B.nx(new B.be(p,p,p,p),A.aq,new B.a5(1/0,1/0,new B.BF(new B.uR(o,o,v.b_g(r,0,s.c,s.d,s.e,s.f,0,s.r,!1),A.yh),B.fX(u,A.z,140,o,A.cl,A.c_,!1,o,!1,o,o),o),o),o),w,s.a,q,new C.f3Y(v,s),3,n))}return B.bZ(A.bI,m,A.br,o,10,8)},
$S:170}
C.f3Y.prototype={
$0(){var w=this.a
return w.m(new C.f3X(w,this.b))},
$S:0}
C.f3X.prototype={
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
C.f3F.prototype={
$1(d){return this.a.R8=d},
$S:6}
C.f3G.prototype={
$1(d){return this.a.RG=d},
$S:6}
C.f3H.prototype={
$1(d){return this.a.rx=d},
$S:6}
C.f3I.prototype={
$1(d){return this.a.xr=d},
$S:6}
C.f3J.prototype={
$1(d){return this.a.aK=d},
$S:6}
C.f3K.prototype={
$1(d){return this.a.a0=d},
$S:6}
C.f3L.prototype={
$1(d){return this.a.bd=d},
$S:6}
C.f3M.prototype={
$1(d){return this.a.aO=d},
$S:6}
C.f3N.prototype={
$1(d){return this.a.aR=d},
$S:6}
C.f30.prototype={
$1(d){return this.a.ry=d},
$S:6}
C.f31.prototype={
$1(d){return this.a.to=d},
$S:6}
C.f32.prototype={
$1(d){return this.a.x1=d},
$S:6}
C.f33.prototype={
$1(d){return this.a.x2=d},
$S:6}
C.f34.prototype={
$0(){var w=this.a
return w.m(new C.f3_(w))},
$S:0}
C.f3_.prototype={
$0(){var w=this.a
return w.y1=!w.y1},
$S:0}
C.f35.prototype={
$1(d){return this.a.b1=d},
$S:151}
C.f36.prototype={
$1(d){return this.a.aZ=d},
$S:6}
C.f3z.prototype={
$1(d){return this.a.y2=d},
$S:6}
C.f3A.prototype={
$1(d){return this.a.bh=d},
$S:6}
C.f3B.prototype={
$1(d){return this.a.aH=d},
$S:6}
C.f3C.prototype={
$1(d){return this.a.bi=d},
$S:151}
C.f3D.prototype={
$1(d){return this.a.bH=d},
$S:6}
C.f3a.prototype={
$1(d){return this.a.aY=d},
$S:6}
C.f3b.prototype={
$1(d){return this.a.bn=d},
$S:6}
C.f3c.prototype={
$1(d){return this.a.bx=d},
$S:6}
C.f3d.prototype={
$1(d){return this.a.c5=d},
$S:6}
C.f3e.prototype={
$0(){var w=this.a
return w.m(new C.f39(w))},
$S:0}
C.f39.prototype={
$0(){var w=this.a
return w.c5=A.i.F(w.c5+90+180,360)-180},
$S:0}
C.f3f.prototype={
$0(){var w=this.a
return w.m(new C.f38(w))},
$S:0}
C.f38.prototype={
$0(){var w=this.a
return w.cg=!w.cg},
$S:0}
C.f3g.prototype={
$0(){var w=this.a
return w.m(new C.f37(w))},
$S:0}
C.f37.prototype={
$0(){var w=this.a
return w.cT=!w.cT},
$S:0}
C.f43.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.iv2(v,w.p4)},
$S:0}
C.f3W.prototype={
$2(d,e){var w=null,v=this.a.z,u=v==null?D.byu:B.fX(v,A.z,w,w,A.cl,A.c_,!1,w,!1,w,w)
return C.fR2(d.length===0?"rounded":d,u,e)},
$S:121}
C.f3S.prototype={
$0(){var w=this.a
return w.m(new C.f3R(w))},
$S:0}
C.f3R.prototype={
$0(){var w=this.a
w.ay=0.39
w.ch=0.8
w.CW=0.22
w.cx="circle"
w.cy="gold"},
$S:0}
C.f3T.prototype={
$0(){var w=this.b
return w.m(new C.f3Q(this.a,w))},
$S:0}
C.f3Q.prototype={
$0(){return this.b.cx=this.a.a},
$S:0}
C.f3U.prototype={
$0(){var w=this.b
return w.m(new C.f3P(this.a,w))},
$S:0}
C.f3P.prototype={
$0(){return this.b.cy=this.a.a},
$S:0}
C.f3V.prototype={
$1(d){var w=this.a
w.CW=d
w.ay=A.i.D(w.ay,0,1-d)
w.ch=A.i.D(w.ch,0,0.95)},
$S:6}
C.f4e.prototype={
$2(d,e){var w,v,u,t=null,s=e.b,r=e.d,q=B.l(20),p=B.a([new B.ab(-4,A.G,A.b7.j(0.35),A.J,30)],x.V),o=B.l(20),n=this.a,m=x.p,l=B.a([],m)
if(n.p4!=null)l.push(new B.eo(n.coA(),n.r))
l.push(new C.Fw(n.cBL(),!1,!1,t))
o=B.bR(0,B.bu(o,new B.eo(new B.an(A.a0,t,A.b1,A.t,l,t),n.f),A.aq),0,0,0)
l=n.ay
w=n.ch
v=n.CW*s
u=B.l(8)
return B.p(t,new B.an(A.a0,t,A.ad,A.t,B.a([o,B.ao(t,B.az(A.bY,new B.bM(new B.o(t,t,B.K(A.c.j(0.3),A.r,1),u,t,t,A.n),A.bk,t,t),A.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new C.f4d(n,s,r),t,t,t,t,t,t,t,t,t,t,t,t,t,t,!1,A.a4),v,t,l*s,t,w*r,v)],m),t),A.f,t,t,new B.o(t,t,t,q,p,t,A.n),t,t,t,t,t,t,t,t)},
$S:160}
C.f4d.prototype={
$1(d){var w=this.a
return w.m(new C.f4c(w,d,this.b,this.c))},
$S:19}
C.f4c.prototype={
$0(){var w,v=this,u=v.a,t=v.b.d,s=v.c
u.ay=A.i.D(u.ay+t.a/s,0,1-u.CW)
w=v.d
u.ch=A.i.D(u.ch+t.b/w,0,1-u.CW*s/w)},
$S:0}
C.f4n.prototype={
$0(){var w=this.a
return w.m(new C.f4m(w,this.b))},
$S:0}
C.f4m.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.f3E.prototype={
$0(){var w=this.a.c
w.toString
return B.a6(w,!1).hY()},
$S:0}
C.f4V.prototype={
$2(d,e){var w,v,u,t=null,s=e.b
if(s>=860){w=this.a
v=x.p
return B.A(B.a([new B.a5(Math.min(s*0.4,460),t,B.x(B.a([w.b2i(),B.E(B.as(w.b5k(Math.max(240,e.d-110)),t,t,t),1)],v),A.l,t,A.e,A.h,0,A.p),t),B.E(B.x(B.a([B.E(w.aT9(),1),w.aP9()],v),A.l,t,A.e,A.h,0,A.p),1)],v),A.l,t,A.e,A.h,0,t,t)}u=A.i.D(e.d*0.36,190,360)
s=this.a
return B.x(B.a([s.b2i(),new B.D(A.hO,B.as(s.b5k(u),t,t,t),t),B.E(s.aT9(),1),s.aP9()],x.p),A.l,t,A.e,A.h,0,A.p)},
$S:700}
C.fOj.prototype={
$10$align$style$weight(d,e,f,g,h,i,j,k,l,m){return C.em(k,!1,j,A.aH,"",4280640491,i,l,m,"",h,C.bDW(),null,"","",0,!1,"",0,D.bf,4280172719,2,d,0,0,"",D.cn,D.d3,g,e,f)},
$9$align$weight(d,e,f,g,h,i,j,k,l){return this.$10$align$style$weight(d,e,f,g,h,i,j,k,A.bq,l)},
$8$weight(d,e,f,g,h,i,j,k){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bq,k)},
$7(d,e,f,g,h,i,j){return this.$10$align$style$weight(d,e,f,g,h,i,j,A.K,A.bq,A.O)},
$S:z+29}
C.fOi.prototype={
$3(d,e,f){var w=this,v=C.bDW(),u=w.b?A.H:A.cD,t=w.c?A.cJ:A.bq
return C.em(w.d,!1,f,A.aH,"",4280640491,e,t,u,"",0.36,v,null,"","",0,!0,"",0,D.bf,4280172719,2,d,0,w.f,w.e,D.cn,D.d3,0.82,0.09,w.a)},
$S:z+30}
C.clR.prototype={
$1(d){return B.w(d)},
$S:17}
C.fWg.prototype={
$0(){return this.a},
$S:z+14}
C.fAH.prototype={
$1(d){return d.a.d3(this.a)},
$S:z+32}
C.fAI.prototype={
$2(d,e){return J.ct(e)},
$S:z+33}
C.fWi.prototype={
$0(){return B.a([],x.e8)},
$S:z+14}
C.fWl.prototype={
$1(d){return d.a===A.a.i(this.a).toLowerCase()},
$S:z+10}
C.fWm.prototype={
$0(){return A.d.gH(D.xe)},
$S:z+35}
C.fWe.prototype={
$1(d){return d.a},
$S:z+15}
C.fWh.prototype={
$1(d){return d.a},
$S:z+15}
C.fU5.prototype={
$1(d){return A.a.i(B.w(d))},
$S:17}
C.fU6.prototype={
$1(d){return d.length!==0},
$S:3}
C.fU7.prototype={
$1(d){return d.a===this.a},
$S:z+10}
C.fOn.prototype={
$0(){return C.cC()},
$S:22}
C.fOq.prototype={
$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){var w=this.a.$0(),v=m==null?this.b.e:m,u=this.c,t=u?k:D.cn,s=u?n:0
return C.em(j,l,v,A.aH,"",4280640491,i,q,r,"",h,w,null,u?o:"",p,0,!1,"",0,D.bf,4280172719,2,d,s,0,"",t,D.d3,g,e,f)},
$6(d,e,f,g,h,i){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bd,D.dr,!1,null,0,"","",A.bq,A.a8)},
$7$key(d,e,f,g,h,i,j){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bd,D.dr,!1,null,0,"",j,A.bq,A.a8)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bd,D.dr,!1,null,0,j,k,A.bq,A.a8)},
$11$align$anim$delay$fx$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,l,m,n,A.bq,A.a8)},
$10$align$anim$key$weight(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,A.bq,m)},
$10$align$color$delay$key(d,e,f,g,h,i,j,k,l,m){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,D.dr,!1,k,l,"",m,A.bq,A.a8)},
$9$anim$key$weight(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bd,j,!1,null,0,"",k,A.bq,l)},
$9$color$delay$key(d,e,f,g,h,i,j,k,l){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bd,D.dr,!1,j,k,"",l,A.bq,A.a8)},
$11$anim$color$fx$key$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bd,j,!1,k,0,l,m,A.bq,n)},
$11$align$anim$key$style$weight(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,j,k,!1,null,0,"",l,m,n)},
$11$anim$bullets$color$delay$key(d,e,f,g,h,i,j,k,l,m,n){return this.$15$align$anim$bullets$color$delay$fx$key$style$weight(d,e,f,g,h,i,A.bd,j,k,l,m,"",n,A.bq,A.a8)},
$S:z+27}
C.fOp.prototype={
$9$fx$key$rotation(d,e,f,g,h,i,j,k,l){var w=this.a.$0()
return C.em(A.bd,!1,4279310375,A.aH,"",i,24,A.bq,A.a8,"",h,w,null,this.b?j:"",k,0,!1,"",l,d,i,0,"",0,0,"",D.cn,D.f7,g,e,f)},
$6(d,e,f,g,h,i){return this.$9$fx$key$rotation(d,e,f,g,h,i,"","",0)},
$7$key(d,e,f,g,h,i,j){return this.$9$fx$key$rotation(d,e,f,g,h,i,"",j,0)},
$8$fx$key(d,e,f,g,h,i,j,k){return this.$9$fx$key$rotation(d,e,f,g,h,i,j,k,0)},
$S:z+38}
C.fOo.prototype={
$9$anim$delay$fx$key(d,e,f,g,h,i,j,k,l){var w=this.a.$0(),v=this.b,u=v?i:D.cn,t=v?j:0
return C.em(A.bd,!1,4279310375,A.aH,"",4280640491,24,A.bq,A.a8,"",h,w,d,v?k:"",l,0,!1,"",0,D.bf,4280172719,2,"",t,0,"",u,D.kj,g,e,f)},
$5(d,e,f,g,h){return this.$9$anim$delay$fx$key(d,e,f,g,h,D.r6,350,"","")},
$8$anim$delay$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,j,"",k)},
$8$anim$fx$key(d,e,f,g,h,i,j,k){return this.$9$anim$delay$fx$key(d,e,f,g,h,i,350,j,k)},
$S:z+39}
C.fOm.prototype={
$1(d){var w=d.x
return w>0&&w<=this.a.length},
$S:z+16}
C.fQO.prototype={
$0(){var w=0,v=B.j(x.e),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:if(t.a){s=t.b
r=s.a
s=(r==="bullets"||r==="section")&&s.w.length!==0}else s=!1
w=s?3:5
break
case 3:s=t.b
w=6
return B.b($.hBS.c1(0,A.a.i(s.w).toLowerCase(),new C.fQM(s)),$async$$0)
case 6:q=e
w=4
break
case 5:q=null
case 4:w=t.c&&t.b.r.length!==0?7:9
break
case 7:s=t.b
w=10
return B.b(t.d.c1(0,s.r,new C.fQN(s)),$async$$0)
case 10:p=e
w=8
break
case 9:p=null
case 8:u=new B.bA(t.e,new B.brB(p,q),x.e)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1713}
C.fQM.prototype={
$0(){return F.aQi(this.a.w)},
$S:195}
C.fQN.prototype={
$0(){var w=this.a.r,v=B.aL(w.toLowerCase()," ","_")
return F.bCP("https://cdn.jsdelivr.net/gh/microsoft/fluentui-emoji@main/assets/"+B.hF(2,w,A.cb,!1)+"/3D/"+v+"_3d.png","image/png")},
$S:195}
C.fsl.prototype={
$1(d){return d.a==="bio"},
$S:z+16}
C.fsm.prototype={
$1(d){return d.a},
$S:z+17}
C.fsn.prototype={
$1(d){return d.b},
$S:z+18}
C.h4T.prototype={
$1(d){return D.hHL},
$S:z+43}
C.fbi.prototype={
$0(){return this.a.x=C.i6Z(this.b,this.c.b)},
$S:0}
C.fbj.prototype={
$0(){return this.a.y=this.b},
$S:0}
C.fbg.prototype={
$1(d){var w
if(this.a){w=this.b
if(w==null)w="circle"}else w=d
return w},
$S:372}
C.fbh.prototype={
$1(d){var w
if(this.a)w=d
else{w=this.b
if(w==null)w=""}return w},
$S:372}
C.fbf.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:o=t.b
n=t.a
m=n.c
m.toString
w=3
return B.b(B.bT(A.av,null,new C.fba(n,t.c,o,t.d,t.e,t.f),m,!0,!0,o,A.kn,!1,!1,x.N),$async$$0)
case 3:s=e
if(s==null){w=1
break}w=A.a.a_(s,"finale:")?4:5
break
case 4:r=A.a.b4(s,7)
if(r.length===0){n.m(new C.fbb(n))
w=1
break}o=n.c
if(o==null){w=1
break}m=n.w
q=m.d
if(q.length===0){q=n.x
if(q==null)q=""}w=6
return B.b(C.hIv(o,m.cPZ(q,r)),$async$$0)
case 6:p=e
if(p!=null&&n.c!=null)n.m(new C.fbc(n,p))
w=1
break
case 5:o=s==="__auto"?null:s
t.r.$1(o)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.fba.prototype={
$1(d){var w,v,u,t,s,r,q=this,p=null,o=new C.fbe(q.b,d),n=x.p,m=B.a([o.$2("__auto",B.p(p,D.bef,A.f,p,p,D.b8Y,p,p,p,p,p,p,p,p))],n),l=q.c,k=l?D.DF:D.DM,j=k.length,i=q.a,h=q.d,g=q.e,f=q.f,e=0
for(;e<j;++e){w=k[e].a
v=g.$1(w)
u=f.$1(w)
if(v.length===0&&u.length===0)v="rounded"
m.push(o.$2(w,new B.a5(64,64,C.fR2(v,i.b7j(h),u),p)))}t=B.l2(1,m,4,10,10,p,A.e0,!0)
if(!l)return B.bm(!0,new B.D(Ae.yZ,t,p),!0,!1,A.ag,!0,!0)
s=new C.fbd(i,d)
m=B.aE(d,A.bZ,x.w).w
l=B.a([s.$2("","None")],n)
for(e=0;e<32;++e){r=D.Iw[e]
l.push(s.$2(r.a,r.b))}return B.bm(!0,new B.cN(new B.aY(0,1/0,0,m.a.b*0.85),B.c9(B.x(B.a([D.fU_,A.T,t,A.e3,D.feQ,A.ax,D.h48,A.T,B.l2(1.15,l,3,10,10,p,A.e0,!0)],n),A.E,p,A.e,A.h,0,A.p),A.t,p,A.y,p,p,Ae.yZ,p,p,A.ah),p),!0,!1,A.ag,!0,!0)},
$S:27}
C.fbe.prototype={
$2(d,e){var w=null,v=d==="__auto"&&this.a==null||d===this.a,u=B.l(16),t=v?A.b7.j(0.22):A.c.j(0.04),s=v?A.bh:A.dq
return B.az(w,B.p(w,e,A.f,w,w,new B.o(t,w,B.K(s,A.r,v?2:1),u,w,w,A.n),w,w,w,w,A.hz,w,w,w),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.fb9(this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:1714}
C.fb9.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.fbd.prototype={
$2(d,e){var w,v=null,u=this.a.w,t=u.a===d,s=B.l(12),r=t?A.bL:A.bw
r=B.K(r,A.r,t?2.5:1)
w=B.l(10)
u=B.E(B.p(v,B.bu(w,d.length===0?B.p(v,D.atm,A.f,A.c.j(0.05),v,v,v,v,v,v,v,v,v,v):new B.dt(!0,new C.Ou(u.Gj(d),!0,!1,v),v),A.aq),A.f,v,v,new B.o(v,v,r,s,v,v,A.n),v,v,v,v,v,v,v,v),1)
return B.az(v,B.x(B.a([u,A.ax,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,t?A.bL:A.ab,v,v,v,v,v,v,v,v,10.5,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.h,0,A.p),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,new C.fb8(this.b,d),v,v,v,v,v,v,!1,A.a4)},
$S:121}
C.fb8.prototype={
$0(){B.a6(this.a,!1).N("finale:"+this.b)
return null},
$S:0}
C.fbb.prototype={
$0(){var w=this.a
return w.w=w.w.Gj("")},
$S:0}
C.fbc.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.faZ.prototype={
$0(){var w=this.a
w.e=this.b
w.cy=null},
$S:0}
C.fb_.prototype={
$0(){return this.a.cy=J.k(this.b)},
$S:0}
C.fb1.prototype={
$0(){return this.a.cy="Type a little about the presentation first, or attach a document."},
$S:0}
C.fb2.prototype={
$0(){return this.a.cy='You mentioned your logo \u2014 tap "Add your logo" below to upload it, so the AI puts the real one in.'},
$S:0}
C.fb3.prototype={
$0(){var w=this.a
w.ax=!0
w.cy=null
w.ay="Writing your "+w.ch+" slides\u2026"},
$S:0}
C.fb4.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.fb0(w,d))},
$S:2}
C.fb0.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.fb5.prototype={
$0(){var w=this.a
w.ax=!1
w.cy=B.w(this.b)},
$S:0}
C.fbw.prototype={
$0(){return this.a.f.fW()},
$S:0}
C.fbx.prototype={
$0(){var w=this.a
return w.m(new C.fbv(w))},
$S:0}
C.fbv.prototype={
$0(){return this.a.e=null},
$S:0}
C.fby.prototype={
$0(){var w=this.a
return w.m(new C.fbu(w))},
$S:0}
C.fbu.prototype={
$0(){return this.a.x=null},
$S:0}
C.fbA.prototype={
$1(d){var w=this.a
return w.m(new C.fbt(w,d))},
$S:35}
C.fbt.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.fbB.prototype={
$1(d){var w=this.a
return w.m(new C.fbs(w,d))},
$S:35}
C.fbs.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.fbC.prototype={
$0(){var w=this.a
return w.m(new C.fbr(w))},
$S:0}
C.fbr.prototype={
$0(){return this.a.y=B.a([],x.s)},
$S:0}
C.fbD.prototype={
$1(d){var w=this.a
return w.m(new C.fbq(w,d))},
$S:35}
C.fbq.prototype={
$0(){return this.a.as=this.b},
$S:0}
C.fbE.prototype={
$1(d){var w=this.a
return w.m(new C.fbp(w,d))},
$S:35}
C.fbp.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.fbF.prototype={
$0(){var w=this.a
return w.m(new C.fbo(w))},
$S:0}
C.fbo.prototype={
$0(){var w=this.a
return w.w=w.w.Gj("")},
$S:0}
C.fbG.prototype={
$0(){var w=this.a
return w.m(new C.fbn(w,this.b))},
$S:0}
C.fbn.prototype={
$0(){return this.a.ch=this.b},
$S:0}
C.fbH.prototype={
$2(d,e){var w,v,u=(e.b-16)/3,t=B.a([],x.p)
for(w=this.a,v=0;v<6;++v)t.push(new B.a5(u,null,w.bTu(D.a6y[v]),null))
return B.bZ(A.bI,t,A.br,null,8,8)},
$S:170}
C.fbz.prototype={
$1(d){var w=this.a
return w.m(new C.fbm(w,d))},
$S:9}
C.fbm.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.fb6.prototype={
$0(){var w=this.a
return w.m(new C.fb7(w,this.b,this.c))},
$S:0}
C.fb7.prototype={
$0(){var w=this.c,v=this.a.cx
return this.b?v.W(0,w):v.I(0,w)},
$S:0}
C.fbl.prototype={
$0(){var w=this.a
return w.m(new C.fbk(w,this.b))},
$S:0}
C.fbk.prototype={
$0(){return this.a.CW=this.b},
$S:0}
C.h4S.prototype={
$1(d){return new C.a1R(this.a,this.b,null)},
$S:z+44}
C.faS.prototype={
$0(){return this.a.r="Type what you want changed or added."},
$S:0}
C.faT.prototype={
$0(){var w=this.a
w.e=!0
w.r=null
w.f="Making your changes\u2026"},
$S:0}
C.faU.prototype={
$0(){var w=this.a
w.e=!1
w.r=this.b===D.aMq?"The text already fits inside its frame.":"The text is already at its limit."},
$S:0}
C.faV.prototype={
$0(){var w=this.a
w.e=!1
w.r="Nothing to bring back. Changes are kept for 20 minutes."},
$S:0}
C.faW.prototype={
$1(d){var w=this.a
if(w.c!=null)w.m(new C.faR(w,d))},
$S:2}
C.faR.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.faX.prototype={
$0(){var w=this.a
w.e=!1
w.r=B.w(this.b)},
$S:0}
C.faY.prototype={
$0(){var w=this.b
if(A.a.c7(w,"\u2026"))w=A.a.aA(w,0,w.length-1)
this.a.d.bP(0,new B.ba(w,B.hn(A.bB,w.length),A.aP))},
$S:0}
C.fzX.prototype={
$1(d){return d.a===this.a},
$S:220}
C.erj.prototype={
$2(d,e){var w,v,u,t,s,r,q=null,p=this.a,o=p.gazX(),n=o.x
n===$&&B.c()
w=B.l(16)
v=p.a.c
u=v?D.d4C:D.dmZ
t=A.wt.j(v?1:0.55)
v=p.a.c
t=B.K(t,A.r,v?1.8:1.2)
s=A.wt.j(v?0.35+0.15*o.x:0.12)
v=B.a([new B.ab(0,A.G,s,A.J,p.a.c?16:8)],x.V)
s=B.l(15)
n=B.bR(0,B.b5(q,q,q,new C.bkI(n*6.283,q),A.az),0,0,0)
o=o.x
o=B.bR(0,B.bUU(B.eI(A.z,0.5,B.p(q,q,A.f,q,q,new B.o(q,q,q,q,q,new B.a7(A.a5,A.a9,A.x,B.a([A.L,D.bmh.j(0.28),A.L],x.O),q,q),A.n),q,q,q,q,q,q,q,q),q),!0,new B.r(o*2.4-1.2,0)),0,0,0)
r=x.p
return B.p(q,B.bu(s,new B.an(A.a0,q,A.ad,A.t,B.a([n,o,B.as(B.x(B.a([B.W(p.a.c?A.ed:A.mn,A.wt,q,q,q,20),A.ax,new B.dx(A.dM,A.z,A.f,B.ok(A.jV,D.fNe,new C.eri()),q)],r),A.l,q,A.e,A.N,0,A.p),q,q,q),B.ao(q,B.p(q,D.fJC,A.f,q,q,new B.o(A.wt,q,q,B.l(6),q,q,A.n),q,q,q,q,P.ao6,q,q,q),q,q,q,4,4,q)],r),q),A.aq),A.f,q,q,new B.o(q,q,t,w,v,new B.a7(A.ay,A.aC,A.x,u,q,q),A.n),q,64,q,q,q,q,q,q)},
$S:81}
C.eri.prototype={
$1(d){return D.c9B.aD(0,d)},
$S:71}
C.fWn.prototype={
$1(d){return d.a===this.a},
$S:z+6}
C.fWo.prototype={
$1(d){var w=d.a
return A.a.i(w).length!==0&&w!==d.b},
$S:220}
C.fWp.prototype={
$2(d,e){return A.o.aQ(e.a.length,d.a.length)},
$S:1715}
C.fWq.prototype={
$1(d){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=d,t=0;t<w.length;w.length===v||(0,B.I)(w),++t){s=w[t]
r=s.a
q=s.b
u=B.aL(u,r,q)
p=r.toUpperCase()
if(p!==r)u=B.aL(u,p,q.toUpperCase())}return u},
$S:13}
C.fWj.prototype={
$1(d){return d.a},
$S:z+17}
C.fWk.prototype={
$1(d){return d.b},
$S:z+18}
C.h45.prototype={
$1(d){return new C.a0f(this.a,this.b,null)},
$S:z+46}
C.dtR.prototype={
$0(){var w=this.a
w.f=!0
w.r=null},
$S:0}
C.dtS.prototype={
$1(d){return d.a===this.a.gakf()},
$S:z+10}
C.dtT.prototype={
$0(){var w=this.a
w.f=!1
w.r=J.k(this.b)},
$S:0}
C.dtW.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dtX.prototype={
$0(){var w=this.a
return w.m(new C.dtV(w,this.b))},
$S:0}
C.dtV.prototype={
$0(){return this.a.d=this.b.a},
$S:0}
C.dtY.prototype={
$1(d){var w=this.a
return w.m(new C.dtU(w,d))},
$S:9}
C.dtU.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.erh.prototype={
$1$2(d,e,f){var w=B.bp(d,!0,f)
A.d.e0(w,this.a)
return B.cX(w,0,B.dD(e,"count",x.S),B.U(w).c).dq(0)},
$2(d,e){return this.$1$2(d,e,x.z)},
$S:1716}
C.foE.prototype={
$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o,p){return C.em(A.bd,!1,4279310375,A.aH,"",i,24,A.bq,A.a8,"",h,this.a.$0(),null,k,j,0,!1,"",n,d,o,p,"",m,0,"",l,D.f7,g,e,f)},
$8(d,e,f,g,h,i,j,k){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,D.cn,0,0,0,0)},
$12$anim$delay$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,n,o){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,n,o)},
$10$anim$delay(d,e,f,g,h,i,j,k,l,m){return this.$13$anim$delay$rotation$stroke$strokeWidth(d,e,f,g,h,i,j,k,l,m,0,0,0)},
$S:z+47}
C.foG.prototype={
$9(d,e,f,g,h,i,j,k,l){return C.em(A.K,!1,this.b.d,A.aH,"",4280640491,i,A.bq,A.d0,"",h,this.a.$0(),null,k,j,0,!1,"",0,D.bf,4280172719,2,d,l,0,"",D.na,D.d3,g,e,f)},
$S:z+48}
C.foF.prototype={
$5$size(d,e,f,g,h){var w,v=this,u=v.b,t=u.c
u=u.xh(0,"twinkle")
w=t===D.bf?0.785:0
return v.a.$13$anim$delay$rotation$stroke$strokeWidth(t,d-h/2,e-h*0.89,h,h*1.78,v.c,f,u,D.na,g,w,v.d.d,1.2)},
$4(d,e,f,g){return this.$5$size(d,e,f,g,0.022)},
$S:z+49}
C.foD.prototype={
$1(d){var w=d.fx
return w==="sub"||w==="body"},
$S:z+4}
C.fPu.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fPv.prototype={
$0(){return A.d.gH(D.IG)},
$S:z+51}
C.fPw.prototype={
$1(d){return d.a===this.a},
$S:z+11}
C.fqM.prototype={
$1(d){return!(A.a.a_(d.db,"__design__")||A.a.a_(d.a,"design_"))},
$S:z+4}
C.fVQ.prototype={
$1(d){var w=2450411,v=4281908728
C.dB(d,C.dC(4280171146,1,0,D.bf,w,0,0.52,0,0))
C.dB(d,C.dC(v,1,0,D.bf,w,0,0.04,0.48,0))
C.dB(d,C.dC(4294047225,0.38,0,D.bf,w,0,0.48,0.52,0.62))
C.dB(d,C.dC(v,0.006,0,D.fP,v,3,0.32,0.08,0.14))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVR.prototype={
$1(d){var w=2450411,v=4280640491,u=4291548641
C.dB(d,C.dC(4280172719,0.8,0,D.bf,w,0,0.36,0.58,0.1))
C.dB(d,C.dC(v,0.64,0,D.bf,w,0,0.28,0.64,0.18))
C.dB(d,C.dC(4282090230,0.44,0,D.bf,w,0,0.2,0.7,0.28))
C.dB(d,C.dC(v,0.006,0,D.fP,v,3,0.22,0.08,0.12))
C.dB(d,C.dC(u,0.004,0,D.fP,u,2,0.38,0.08,0.18))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fVS.prototype={
$1(d){var w=2450411,v=4279548070
C.dB(d,C.dC(4279080072,0.11,0,D.bf,w,0,1,0,0))
C.dB(d,C.dC(4279310375,0.11,0,D.bf,w,0,1,0,0.89))
C.dB(d,C.dC(856528008,0.72,0,D.kl,w,0,0.28,0.72,0.14))
C.dB(d,C.dC(1426953352,0.2,0,D.kl,w,0,0.2,0.78,0.22))
C.dB(d,C.dC(v,0.004,0,D.fP,v,2,1,0,0.105))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fW2.prototype={
$1(d){var w=2450411
C.dB(d,C.dC(4279203438,0.55,0,D.kl,w,0,0.5,0.55,-0.05))
C.dB(d,C.dC(4280171146,0.5,0,D.kl,w,0,0.45,0.62,0.35))
C.dB(d,C.dC(4280640491,0.4,0.3,D.kk,w,0,0.35,0.68,0.55))
C.dB(d,C.dC(571438702,0.12,0,D.bf,w,0,0.12,0.08,0.08))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fW7.prototype={
$1(d){var w=4280472558
C.dB(d,C.dC(4279310375,0.75,-0.4,D.kk,2450411,0,0.75,-0.15,0.35))
C.dB(d,C.dC(w,0.55,0,D.bf,2450411,0,0.06,0.42,0.38))
C.dB(d,C.dC(w,0.006,0,D.fP,w,3,0.35,0.08,0.08))
C.dB(d,C.dC(2282478,0.12,0,D.bf,w,2,0.2,0.75,0.82))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fW8.prototype={
$1(d){var w=2450411,v=4280640491
C.dB(d,C.dC(3423541034,0.48,0,D.bf,w,0,1,0,0))
C.dB(d,C.dC(v,0.12,-0.08,D.kl,w,0,1.1,-0.05,0.38))
C.dB(d,C.dC(858088427,0.35,0,D.bf,w,0,0.42,0.55,0.05))
C.dB(d,C.dC(v,0.006,0,D.fP,v,3,0.25,0.08,0.52))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fW9.prototype={
$1(d){var w,v,u,t,s=4280171146
for(w=0;w<4;++w){v=D.d3t[w]
u=Date.now()
t=$.iV
$.iV=t+1
v=new C.eO("design_"+(""+1000*u+"_"+t),D.f7,0.04+w*0.235,0.72,0.21,0.22,"",24,A.a8,A.bq,A.aH,4279310375,A.bd,null,D.bf,v,4294967295,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Lp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dB(d,C.dC(s,0.006,0,D.fP,s,3,0.3,0.04,0.08))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fWa.prototype={
$1(d){var w,v,u,t,s=4280172719
for(w=0;w<4;++w){v=B.ap(A.mb,A.dy,w/3).l()
u=Date.now()
t=$.iV
$.iV=t+1
v=new C.eO("design_"+(""+1000*u+"_"+t),D.f7,0.58+w*0.08,0.15+w*0.05,0.32,0.7,"",24,A.a8,A.bq,A.aH,4279310375,A.bd,null,D.Ep,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Lp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dB(d,C.dC(s,0.006,0,D.fP,s,3,0.4,0.06,0.1))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fWb.prototype={
$1(d){var w=4294967295
C.dB(d,C.dC(4280640491,1,0,D.bf,2450411,0,0.42,0,0))
C.dB(d,C.dC(4280110808,1.1,1.57,D.kk,2450411,0,0.18,0.35,-0.05))
C.dB(d,C.dC(w,0.006,0,D.fP,w,2,0.25,0.08,0.85))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fWc.prototype={
$1(d){var w=4278982953,v=2450411,u=4282090230
C.dB(d,C.dC(w,0.1,0,D.bf,v,0,1,0,0))
C.dB(d,C.dC(u,0.012,0,D.bf,v,0,1,0,0.1))
C.dB(d,C.dC(u,0.006,0,D.fP,u,3,0.42,0.06,0.14))
C.dB(d,C.dC(403446057,0.68,0,D.kl,v,0,0.22,0.72,0.18))
C.dB(d,C.dC(w,0.1,0,D.bf,v,0,1,0,0.9))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fWd.prototype={
$1(d){var w=4278630100
C.dB(d,C.dC(4279310375,1.2,0.15,D.kl,2450411,0,0.55,-0.2,-0.1))
C.dB(d,C.dC(w,1.1,0.15,D.bf,2450411,0,0.08,0.15,-0.05))
C.dB(d,C.dC(1120295,0.18,0,D.bf,w,3,0.38,0.55,0.75))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fVT.prototype={
$1(d){var w=4292617766
C.dB(d,C.dC(4282714634,0.65,-0.2,D.kk,2450411,0,0.65,-0.1,0.45))
C.dB(d,C.dC(w,0.5,-0.15,D.kk,2450411,0,0.5,0.05,0.55))
C.dB(d,C.dC(w,0.006,0,D.fP,w,3,0.38,0.55,0.08))
d.e=4294967295
d.f=4294898418},
$S:z+1}
C.fVU.prototype={
$1(d){var w=2450411
C.dB(d,C.dC(4278413729,0.35,3.14,D.kk,w,0,0.45,-0.05,0.7))
C.dB(d,C.dC(4278355143,0.3,3.14,D.kk,w,0,0.4,0.25,0.75))
C.dB(d,C.dC(4279150057,0.32,3.14,D.kk,w,0,0.5,0.55,0.72))
C.dB(d,C.dC(863884284,0.22,0,D.eX,w,0,0.22,0.08,0.12))
d.e=4293982719
d.f=4294967295},
$S:z+1}
C.fVV.prototype={
$1(d){var w=4279310375,v=2450411,u=4280472558
C.dB(d,C.dC(w,0.14,0,D.bf,v,0,0.14,0.02,0.02))
C.dB(d,C.dC(2282478,0.14,0,D.bf,u,3,0.14,0.84,0.02))
C.dB(d,C.dC(w,0.28,0,D.kl,v,0,0.35,-0.08,0.78))
C.dB(d,C.dC(u,0.22,0.5,D.kk,v,0,0.3,0.72,0.78))
C.dB(d,C.dC(w,0.006,0,D.fP,w,3,0.2,0.08,0.22))
d.e=4294967295
d.f=null},
$S:z+1}
C.fVW.prototype={
$1(d){var w=4293571336,v=1156231944
C.dB(d,C.dC(1841431,0.92,0,D.bf,w,3,0.92,0.04,0.04))
C.dB(d,C.dC(v,0.15,0,D.kk,2450411,0,0.15,0.02,0.02))
C.dB(d,C.dC(v,0.15,3.14,D.kk,2450411,0,0.15,0.83,0.83))
C.dB(d,C.dC(w,0.004,0,D.fP,w,2,0.7,0.15,0.88))
d.e=4280031511
d.f=4282523654},
$S:z+1}
C.fVX.prototype={
$1(d){var w=4279080072,v=2450411
C.dB(d,C.dC(w,0.14,0,D.lx,v,0,0.14,0.68,0.18))
C.dB(d,C.dC(4279548070,0.14,0,D.lx,v,0,0.14,0.78,0.28))
C.dB(d,C.dC(4281193663,0.14,0,D.lx,v,0,0.14,0.68,0.38))
C.dB(d,C.dC(4284410580,0.14,0,D.lx,v,0,0.14,0.78,0.48))
C.dB(d,C.dC(4279203438,0.14,0,D.lx,v,0,0.14,0.68,0.58))
C.dB(d,C.dC(w,0.006,0,D.fP,w,3,0.22,0.06,0.1))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fVY.prototype={
$1(d){var w=2450411,v=4280640491
C.dB(d,C.dC(3708753706,0.42,0,D.bf,w,0,1,0,0))
C.dB(d,C.dC(v,0.06,-0.05,D.kl,w,0,1,0,0.38))
C.dB(d,C.dC(859356664,0.25,0,D.eX,w,0,0.25,0.7,0.08))
C.dB(d,C.dC(v,0.006,0,D.fP,v,3,0.3,0.08,0.48))
d.e=4294967295
d.f=4294047225},
$S:z+1}
C.fVZ.prototype={
$1(d){var w,v,u,t,s=4280640491
for(w=0;w<4;++w){v=B.ap(A.mb,A.dy,w/3).l()
u=Date.now()
t=$.iV
$.iV=t+1
v=new C.eO("design_"+(""+1000*u+"_"+t),D.f7,0.06+w*0.23,0.78,0.2,0.14,"",24,A.a8,A.bq,A.aH,4279310375,A.bd,null,D.Ep,v,2450411,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Lp
v.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,v)}C.dB(d,C.dC(4280172719,0.08,0,D.bf,2450411,0,1,0,0))
C.dB(d,C.dC(s,0.006,0,D.fP,s,3,0.35,0.06,0.14))
d.e=4294967295
d.f=4293916415},
$S:z+1}
C.fW_.prototype={
$1(d){var w,v,u,t=4291548641,s=4279310375
for(w=1;w<6;++w){v=Date.now()
u=$.iV
$.iV=u+1
u=new C.eO("design_"+(""+1000*v+"_"+u),D.f7,0.08,0.15+w*0.12,0.55,0.002,"",24,A.a8,A.bq,A.aH,s,A.bd,null,D.fP,t,t,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Lp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dB(d,C.dC(s,0.75,0,D.bf,2450411,0,0.22,0.72,0.1))
C.dB(d,C.dC(872415231,0.16,0,D.bf,2450411,0,0.16,0.75,0.15))
C.dB(d,C.dC(s,0.006,0,D.fP,s,3,0.2,0.08,0.1))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fW0.prototype={
$1(d){var w=4282865001,v=2450411,u=4284773515
C.dB(d,C.dC(4674921,0.9,0,D.bf,4287931320,2,0.9,0.05,0.05))
C.dB(d,C.dC(w,0.08,0,D.bf,v,0,0.08,0.03,0.03))
C.dB(d,C.dC(u,0.08,0,D.bf,v,0,0.08,0.89,0.03))
C.dB(d,C.dC(u,0.08,0,D.bf,v,0,0.08,0.03,0.89))
C.dB(d,C.dC(w,0.08,0,D.bf,v,0,0.08,0.89,0.89))
C.dB(d,C.dC(w,0.004,0,D.fP,w,2,0.25,0.12,0.12))
d.e=4294507260
d.f=4293060848},
$S:z+1}
C.fW1.prototype={
$1(d){var w,v,u,t,s,r=4279310375,q=2450411
for(w=0;w<3;++w){v=w*0.24
u=Date.now()
t=$.iV
$.iV=t+1
t=new C.eO("design_"+(""+1000*u+"_"+t),D.f7,0.55,0.14+v,0.38,0.18,"",24,A.a8,A.bq,A.aH,r,A.bd,null,D.bf,4294967295,4280640491,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
u=$.Lp
t.db="__design__:"+(u.length===0?"layer":u)
A.d.c9(d.z,0,t)
u=B.ap(A.dh,A.cs,w/2).l()
t=Date.now()
s=$.iV
$.iV=s+1
u=new C.eO("design_"+(""+1000*t+"_"+s),D.f7,0.57,0.16+v,0.06,0.14,"",24,A.a8,A.bq,A.aH,r,A.bd,null,D.bf,u,q,0,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Lp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}C.dB(d,C.dC(4280171146,1,0,D.bf,q,0,0.48,0,0))
C.dB(d,C.dC(4280172719,1.1,1.57,D.kk,q,0,0.12,0.42,-0.05))
d.e=4294967295
d.f=4292602622},
$S:z+1}
C.fW3.prototype={
$1(d){var w=2450411
C.dB(d,C.dC(870995980,0.55,0.45,D.kl,w,0,0.55,-0.12,-0.08))
C.dB(d,C.dC(856996006,0.45,0.45,D.kl,w,0,0.45,0.62,-0.05))
C.dB(d,C.dC(16777215,0.38,0.45,D.kl,4293548044,5,0.38,0.52,0.12))
C.dB(d,C.dC(585783308,0.3,0.45,D.kl,w,0,0.3,0.56,0.16))
C.dB(d,C.dC(4279548070,0.06,0,D.bf,w,0,0.16,0.38,0.04))
C.dB(d,C.dC(1156208652,0.28,0,D.eX,w,0,0.28,0.66,0.52))
d.e=4294967295
d.f=4294507260},
$S:z+1}
C.fW4.prototype={
$1(d){var w=4279080072,v=2450411,u=4294047225,t=4291548641,s=4293548044
C.dB(d,C.dC(w,1,0,D.bf,v,0,0.07,0,0))
C.dB(d,C.dC(u,0.1,0,D.bf,t,1,0.46,0.48,0.14))
C.dB(d,C.dC(u,0.1,0,D.bf,t,1,0.46,0.48,0.28))
C.dB(d,C.dC(u,0.1,0,D.bf,t,1,0.46,0.48,0.42))
C.dB(d,C.dC(s,0.08,0,D.eX,v,0,0.08,0.5,0.16))
C.dB(d,C.dC(w,0.08,0,D.eX,v,0,0.08,0.5,0.3))
C.dB(d,C.dC(4279548070,0.08,0,D.eX,v,0,0.08,0.5,0.44))
C.dB(d,C.dC(16777215,0.32,0.45,D.kl,s,4,0.32,0.1,0.18))
d.e=4294967295
d.f=4293983738},
$S:z+1}
C.fW5.prototype={
$1(d){var w,v,u,t=4279548070,s=4293548044,r=4279179050
C.dB(d,C.dC(4294047225,0.08,0,D.bf,t,2,0.1,0.02,0.06))
C.dB(d,C.dC(s,0.42,0,D.bf,2450411,0,0.36,0.58,0.18))
C.dB(d,C.dC(872415231,0.12,0,D.bf,2450411,0,0.28,0.62,0.24))
C.dB(d,C.dC(16777215,0.28,0,D.eX,s,4,0.32,0,0.72))
C.dB(d,C.dC(r,0.006,0,D.fP,r,3,0.42,0.08,0.22))
for(w=0;w<3;++w){v=Date.now()
u=$.iV
$.iV=u+1
u=new C.eO("design_"+(""+1000*v+"_"+u),D.f7,0.08,0.58+w*0.1,0.04,0.04,"",24,A.a8,A.bq,A.aH,4279310375,A.bd,null,D.eX,16777215,t,2,0,!1,"",0,D.cn,0,"","","","","",!1,0)
v=$.Lp
u.db="__design__:"+(v.length===0?"layer":v)
A.d.c9(d.z,0,u)}d.e=4294967295
d.f=4294965229},
$S:z+1}
C.fW6.prototype={
$1(d){var w=2450411,v=4279548070
C.dB(d,C.dC(3423541034,0.55,0,D.bf,w,0,1,0,0))
C.dB(d,C.dC(4009754623,0.56,0.45,D.kl,w,0,0.56,0.22,0.18))
C.dB(d,C.dC(3439329279,0.44,0.45,D.kl,w,0,0.44,0.28,0.24))
C.dB(d,C.dC(v,0.07,0,D.bf,w,0,0.22,0.34,0.62))
C.dB(d,C.dC(v,1,0,D.bf,w,0,0.07,0,0))
d.e=4280166715
d.f=4279179050},
$S:z+1}
C.fNk.prototype={
$1(d){return d.a===this.a},
$S:z+19}
C.fNl.prototype={
$0(){return A.d.gH($.bHE())},
$S:z+54}
C.fzf.prototype={
$1(d){var w=A.a.i(d)
if(w.length===0)return""
return A.a.a_(w,"\u2022")?w:"\u2022 "+w},
$S:13}
C.fze.prototype={
$1(d){return C.ieB(d,this.a,this.b)},
$S:z+55}
C.fWw.prototype={
$1(d){var w=this,v=w.a,u=w.b,t=B.wm(1.0375,1.01875,1)
return new B.h0(v,u,new C.aVn(B.i3W(A.w2,C.ieE(w.c,w.d,v,u),t)))},
$S:361}
C.e4K.prototype={
$1(d){var w=d.a/1e6
this.a.d.sp(0,w)
return w},
$S:8}
C.e4J.prototype={
$2(d,e){var w=null,v=Math.min(e.b,e.d),u=this.b,t=this.a,s=t.d,r=t.a.d?0.45:1
return B.jg(new B.an(A.a0,w,A.b1,A.t,B.a([new B.bM(new B.o(w,w,w,w,w,new B.bS(A.Bs,1.2,A.x,w,0,u.d,w,w),A.n),A.bk,w,w),new B.eo(B.b5(w,w,w,new C.bhw(u.a,s,r,s),A.az),w),B.as(new B.k7(s,new C.e4I(t,v,this.c,u),w,w,x.cl),w,w,w)],x.p),w),A.t,w)},
$S:287}
C.e4I.prototype={
$3(d,e,f){var w,v,u,t,s=this,r=null,q=A.ec.az(0,A.i.D(e/1.4,0,1)),p=A.i.D(e/0.9,0,1),o=A.i.D((e-0.8)/0.9,0,1),n=Math.sin(e*1.6),m=s.b,l=m*0.08,k=x.p,j=B.a([],k),i=s.c
if(i!=null){w=m*0.22
v=m*0.008
u=s.d.e
t=B.C(u,x.bz)
t.push(A.d.gH(u))
u=B.a([new B.ab(0,A.G,u[1].j(0.55),A.J,l)],x.V)
A.d.u(j,B.a([B.p(r,B.i_(B.fX(i,A.z,r,r,A.cl,A.c_,!0,r,!1,r,r),A.aq),A.f,r,r,new B.o(r,r,r,r,u,new B.h4(A.z,0,6.283185307179586,A.x,t,r,new B.mR(e*0.8)),A.a6),r,w,r,r,new B.Q(v,v,v,v),r,r,w),new B.a5(r,m*0.04,r,r)],k))}i=s.d.e
w=s.a
v=A.a.i(w.a.c.b)
u=v.length
if(u===0)v="NGMY"
u=u>12?0.1:0.17
t=m*0.05
j.push(new C.but(i,e,B.d(v,r,r,r,r,r,r,B.m(r,r,A.c,r,r,r,r,r,r,r,r,m*u,r,r,A.u,r,1.05,!0,r,m*0.012,r,r,r,B.a([new B.cU(i[1].j(0.6),A.J,t)],x.r),r,r),A.K,r,r),r))
j.push(new B.a5(r,m*0.025,r,r))
u=Math.max(1.5,m*0.004)
j.push(B.d3(B.dP(B.x(B.a([B.p(r,r,A.f,r,r,new B.o(r,r,r,r,r,new B.a7(A.a5,A.a9,A.x,B.a([A.L,i[1],A.L],x.O),r,r),A.n),r,u,r,r,r,r,r,m*0.22),new B.a5(r,m*0.022,r,r),B.d(w.a.c.gaNM(),r,r,r,r,r,r,B.m(r,r,A.c.j(0.92),r,r,r,r,r,r,r,r,t,r,r,A.a8,r,r,!0,r,m*0.003,r,r,r,r,r,r),A.K,r,r)],k),A.l,r,A.e,A.N,0,A.p),new B.r(0,(1-o)*m*0.03)),o))
return B.d3(B.e4(A.z,new B.D(new B.Q(l,0,l,0),B.x(j,A.l,r,A.e,A.N,0,A.p),r),(0.6+0.4*q)*(1+n*0.012),r,r),p)},
$S:103}
C.fa4.prototype={
$1(d){var w=this.b
return new B.a7(A.ay,A.aC,A.x,this.a.c,B.a([0,A.i.D(w-0.1,0,1),A.i.D(w,0,1),A.i.D(w+0.1,0,1),1],x.x),null).aD(0,d)},
$S:71}
C.cg9.prototype={
$4$child$label$onTap$selected(d,e,f,g){var w,v=null,u=B.l(14),t=g?A.bL:A.bw
t=B.K(t,A.r,g?2.5:1)
w=g?B.a([new B.ab(0,A.G,A.i8.j(0.4),A.J,14)],x.V):v
w=B.cT(v,B.bu(B.l(12),d,A.aq),v,v,A.b0,new B.o(v,v,t,u,w,v,A.n),A.eH,v,72,v,v,v,v,v,v)
return B.az(v,new B.a5(112,v,B.x(B.a([w,A.fD,B.d(e,v,1,A.a2,v,v,v,B.m(v,v,g?A.bL:A.ab,v,v,v,v,v,v,v,v,11,v,v,A.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],x.p),A.l,v,A.e,A.h,0,A.p),v),A.y,!1,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,f,v,v,v,v,v,v,!1,A.a4)},
$S:1717}
C.cga.prototype={
$0(){var w=this.a
return w.d.$1(w.c.Gj(""))},
$S:0}
C.cgb.prototype={
$1(d){var w=this.a,v=w.c,u=d.a
return this.b.$4$child$label$onTap$selected(new B.dt(!0,new C.Ou(v.Gj(u),!0,!1,null),null),d.b,new C.cgc(w,this.c,d),v.a===u)},
$S:z+56}
C.cgc.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(C.hIv(u.b,t.c.Gj(u.c.a)),$async$$0)
case 2:s=e
if(s!=null)t.d.$1(s)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.h2q.prototype={
$1(d){return new C.a_N(this.a,null)},
$S:z+57}
C.dj6.prototype={
$0(){var w=this.a
w.d=w.gwl().bfC("data:"+this.b+";base64,"+A.cS.gcs().aN(this.c));++w.r},
$S:0}
C.djb.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.djc.prototype={
$0(){var w=this.a
return w.m(new C.dja(w))},
$S:0}
C.dja.prototype={
$0(){return this.a.r++},
$S:0}
C.djd.prototype={
$1(d){var w=this.a
return w.m(new C.dj9(w,d))},
$S:2}
C.dj9.prototype={
$0(){var w=this.a
return w.d=w.gwl().aGp(this.b)},
$S:0}
C.dje.prototype={
$0(){var w=this.a
return w.m(new C.dj8(w))},
$S:0}
C.dj8.prototype={
$0(){var w=this.a
return w.d=w.gwl().bfC("")},
$S:0}
C.djf.prototype={
$1(d){var w=this.a
return w.m(new C.dj7(w,d))},
$S:2}
C.dj7.prototype={
$0(){var w=this.a
return w.d=w.gwl().bfI(this.b)},
$S:0}
C.djg.prototype={
$0(){var w=this.a
w=w.gwl().bfI(w.gazY().a.a)
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.h2p.prototype={
$1(d){var w={}
w.a=this.a
return new B.e3(new C.h2o(w),null)},
$S:20}
C.h2o.prototype={
$2(d,e){var w=null,v=this.a
return B.p(w,B.bm(!0,new B.cN(new B.aY(0,1/0,0,B.aE(d,A.bZ,x.w).w.a.b*0.85),B.c9(B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(9),w,w,A.n),w,4,w,w,w,w,w,40),w,w,w),A.aB,D.h19,A.ax,D.h1p,A.aB,new C.b1U(v.a,new C.h2n(v,e,d),!0,w)],x.p),A.E,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,w,w,w,A.ah),w),!0,!1,A.ag,!0,!1),A.f,w,w,D.b9w,w,w,w,w,A.Ov,w,w,w)},
$S:162}
C.h2n.prototype={
$1(d){this.b.$1(new C.h2m(this.a,d))
B.a6(this.c,!1).N(d)},
$S:z+58}
C.h2m.prototype={
$0(){return this.a.a=this.b},
$S:0}
C.h4R.prototype={
$1(d){return D.hBJ},
$S:z+59}
C.dpU.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dpV.prototype={
$0(){var w=this.a.c
w.toString
B.a6(w,!1).N(this.b)
return null},
$S:0}
C.dpW.prototype={
$0(){var w=this.a,v=A.a.i(w.d.a.a)
if(v.length!==0){w=w.c
w.toString
B.a6(w,!1).N(v)}},
$S:0}
C.fSY.prototype={
$1(d){var w=this.b
return new B.a7(A.ay,A.aC,A.x,B.a([A.L,B.ap(this.a,A.c,0.75).j(0.9),A.L],x.O),B.a([A.i.D(w-0.12,0,1),A.i.D(w,0,1),A.i.D(w+0.12,0,1)],x.x),null).aD(0,d)},
$S:71}
C.diO.prototype={
$3(d,e,f){var w,v=this,u=new B.aH($.S().r,A.aj,null,null,B.a([],x.v)),t=d.a,s=v.b,r=e*s,q=d.b,p=f*s,o=q+p*0.12
u.E(new B.aZ(t+r*1.2,o))
u.E(new B.ce(t+r*0.25,o,t+r*0.18,q+p*0.5))
w=t+r*0.12
u.E(new B.ce(w,q+p,w,q+p*1.2))
u.E(new B.DT(B.bV(new B.r(t+r*0.42,q+p*0.42),s*0.14),0,5.026548245743669))
s=v.c
s.af(u,v.d)
s.af(u,v.e)
p=B.L()
p.r=B.ap(v.a.d,A.c,0.6).gp(0)
s.O(new B.r(w,o),2.2,p)},
$S:424}
C.fT1.prototype={
$2(d,e){return A.i.aQ(d.c,e.c)},
$S:z+60}
C.fLj.prototype={
$1(d){return d.w==="marriage_agreement"},
$S:z+2}
C.fLk.prototype={
$1(d){var w=null,v=this.a
return B.bm(!0,new B.D(E.z0,B.x(B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.fJU,A.P,B.d("Una hati "+v.length+" zilizohifadhiwa.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.aO,B.dh(D.Ie,w,B.d('Endelea na "'+A.d.gH(v).b+'"',w,w,w,w,w,w,w,w,w,w),new C.fLh(d),B.bo(A.c3,w,w,w,A.c,w,A.cp,w,w,w,w,w)),A.T,B.en(A.oQ,w,D.Wu,new C.fLi(d),B.dj(w,w,w,w,w,w,w,w,w,A.ab,w,w,A.cp,w,w,S.y5,w,w,w,w))],x.p),A.al,w,A.e,A.N,0,A.p),w),!0,!1,A.ag,!0,!0)},
$S:27}
C.fLh.prototype={
$0(){B.a6(this.a,!1).N("continue")
return null},
$S:0}
C.fLi.prototype={
$0(){B.a6(this.a,!1).N("new")
return null},
$S:0}
C.clP.prototype={
$1(d){return d.hT()},
$S:z+61}
C.clQ.prototype={
$1(d){return d.aj()},
$S:z+62}
C.clO.prototype={
$1(b5){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1=null,b2=B.a1(b5,x.N,x.z),b3=B.aJ(b2.h(0,"fontWeight")),b4=b3==null?b1:A.i.M(b3)
if(b4==null)b4=A.a8.gdR(0)
b3=B.aJ(b2.h(0,"fontStyle"))
w=b3==null?b1:A.i.M(b3)
if(w==null)w=0
b3=B.aJ(b2.h(0,"align"))
v=b3==null?b1:A.i.M(b3)
if(v==null)v=0
b3=b2.h(0,"id")
b3=J.k(b3==null?"":b3)
u=C.iag(b2.h(0,"type"))
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
n=A.aEy[A.o.D(b4,0,8)]
m=D.d6K[A.o.D(w,0,1)]
l=C.idZ(b2.h(0,"decoration"))
k=B.aJ(b2.h(0,"color"))
k=k==null?b1:A.i.M(k)
if(k==null)k=4279310375
j=A.aAU[A.o.D(v,0,5)]
i=b2.h(0,"imageRef")
i=i==null?b1:J.k(i)
h=C.igQ(b2.h(0,"shape"))
g=B.aJ(b2.h(0,"fillColor"))
g=g==null?b1:A.i.M(g)
if(g==null)g=4280640491
f=B.aJ(b2.h(0,"strokeColor"))
f=f==null?b1:A.i.M(f)
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
a2=a2==null?b1:A.i.M(a2)
if(a2==null)a2=0
a3=C.hD3(b2.h(0,"textTransition"))
a4=B.aJ(b2.h(0,"textAnimDelayMs"))
a4=a4==null?b1:A.i.M(a4)
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
b2=b2==null?b1:A.i.M(b2)
return C.em(j,a0,k,l,a1,g,o,m,n,a7,q,b3,i,a6,a5,a2,b0,a8,d,h,f,e,p,a4,b2==null?0:b2,a9,a3,u,r,t,s)},
$S:z+63}
C.clE.prototype={
$1(d){return d.hT()},
$S:z+64}
C.clF.prototype={
$1(d){return d.aj()},
$S:z+65}
C.clB.prototype={
$1(d){return B.w(d)},
$S:17}
C.clC.prototype={
$1(d){return B.w(d)},
$S:17}
C.clD.prototype={
$1(d){return C.hto(B.a1(d,x.N,x.z))},
$S:z+66}
C.cm5.prototype={
$1(d){return d.a===this.a},
$S:z+67}
C.cm6.prototype={
$0(){return A.d.gH(D.a69)},
$S:z+68}
C.cm0.prototype={
$1(d){var w,v,u=d.a
if(A.a.i(u).length===0)return
w=this.a
v=w.h(0,u)
if(v==null||!v.f.ca(d.f))w.n(0,u,d.hT())},
$S:z+7}
C.cm_.prototype={
$2(d,e){return e.f.aQ(0,d.f)},
$S:z+20}
C.clW.prototype={
$1(d){return new B.N(d,new C.clX(),B.U(d).k("N<1,V>")).f0(0,new C.clY())},
$S:z+71}
C.clX.prototype={
$1(d){return d.f},
$S:z+72}
C.clY.prototype={
$2(d,e){return d.ca(e)?d:e},
$S:588}
C.clZ.prototype={
$1(d){if(d==null||A.a.i(d).length===0)return B.a([],x.D)
return C.i_H(d)},
$S:z+110}
C.cm1.prototype={
$1(d){return!this.a.q(0,d.a)},
$S:z+2}
C.cm2.prototype={
$2(d,e){return e.f.aQ(0,d.f)},
$S:z+20}
C.cm3.prototype={
$1(d){return d.aj()},
$S:z+21}
C.fTF.prototype={
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
$S:z+75}
C.fTB.prototype={
$2(d,e){var w=d.fx
return w.length!==0&&w===e.fx},
$S:z+8}
C.fTC.prototype={
$2(d,e){var w=d.at
return(w==null?"":w).length!==0&&w==e.at},
$S:z+8}
C.fTD.prototype={
$2(d,e){var w
if(d.b===D.d3){w=A.a.i(d.r)
w=w.length!==0&&w===A.a.i(e.r)}else w=!1
return w},
$S:z+8}
C.fTE.prototype={
$2(d,e){return d.b===D.f7&&d.ax===e.ax&&d.fx.length===0&&e.fx.length===0},
$S:z+8}
C.clK.prototype={
$2(b6,b7){var w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8=null,a9=b7.b,b0=a9/960,b1=this.a,b2=b1.c,b3=b1.d,b4=C.ipG(b2,b3),b5=B.a3(b4).k("b7<2>")
b5=B.cF(new B.b7(b4,b5),new C.clJ(),b5.k("M.E"),x.N)
w=B.d0(b5,B.a3(b5).k("M.E"))
b1=b1.e
v=A.qz.az(0,A.i.D(b1,0,1))
u=new C.clL()
b5=B.ap(u.$2(b2,!1),u.$2(b3,!1),v)
b5.toString
t=B.ap(u.$2(b2,!0),u.$2(b3,!0),v)
t.toString
s=new C.clM(a9,b7.d)
r=new C.clN(b0)
q=x.p
p=B.a([],q)
for(b2=b2.z,o=b2.length,n=b1/0.55,m=0;m<b2.length;b2.length===o||(0,B.I)(b2),++m){l=b2[m]
if(w.q(0,l.a))continue
k=A.k2.az(0,A.i.D(n,0,1))
p.push(s.$5(l.c,l.d,l.e,l.f,new B.kN(A.i.D(1-k,0,1),B.dP(B.e4(A.z,r.$1(l),1-k*0.06,a8,a8),new B.r(-k*30*b0,0)),a8)))}for(b2=b3.z,b3=b2.length,o=1-v,j=0,m=0;m<b2.length;b2.length===b3||(0,B.I)(b2),++m){i=b2[m]
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
if(a2===D.f7){a4=i.hT()
a4.ay=B.ap(B.b1(l.ay),B.b1(i.ay),v).l()
a4.ch=B.ap(B.b1(l.ch),B.b1(i.ch),v).l()
a4.cx=0
a5=r.$1(a4)}else a5=a2===D.kj&&l.at==i.at?r.$1(i):new B.an(A.a0,a8,A.b1,A.t,B.a([new B.kN(A.i.D(o,0,1),r.$1(l),a8),new B.kN(A.i.D(v,0,1),r.$1(i),a8)],q),a8)
a2=a3===0?a5:new B.iZ(B.wR(a3),a8,A.z,!0,a8,a5,a8)
p.push(s.$5(n+(h-n)*v,g+(f-g)*v,e+(d-e)*v,a0+(a1-a0)*v,a2))}else{a6=A.i.D((b1-(0.35+j*0.07))/0.5,0,1);++j
a7=i.dy
if(a7===D.cn)a7=D.na
p.push(s.$5(i.c,i.d,i.e,i.f,C.hFE(a7,a6,r.$1(i))))}}return new B.bM(new B.o(a8,a8,a8,a8,a8,new B.a7(A.a5,A.a9,A.x,B.a([b5,t],x.O),a8,a8),A.n),A.bk,new B.an(A.a0,a8,A.ad,A.t,p,a8),a8)},
$S:439}
C.clJ.prototype={
$1(d){return d.a},
$S:z+22}
C.clL.prototype={
$2(d,e){var w
if(e){w=d.f
if(w==null)w=d.e}else w=d.e
return B.b1(w)},
$S:z+78}
C.clM.prototype={
$5(d,e,f,g,h){var w=this.a,v=this.b
return B.ao(null,h,g*v,null,d*w,null,e*v,f*w)},
$S:1721}
C.clN.prototype={
$1(d){var w=null,v=d.fy,u=A.a.gX(d.a)
return new C.a99(v,C.b41(!1,w,!1,d,w,!1,w,w,w,this.a,!1,!1),!0,u,w)},
$S:z+23}
C.dRs.prototype={
$2(d,e){var w=Date.now()/1000*2*3.141592653589793,v=Math.sin(w/18)
return B.e4(new B.d7(Math.sin(w/23)*0.6,Math.cos(w/29)*0.5),e,1.035+v*0.03,null,null)},
$S:45}
C.clT.prototype={
$1(d){return d.a===this.a.a},
$S:z+11}
C.clU.prototype={
$1(d){return d.a===this.a.a},
$S:z+19}
C.fWD.prototype={
$1(d){var w,v=document.createElement("iframe")
v.src=this.a
w=v.style
w.border="none"
w=v.style
w.width="100%"
w=v.style
w.height="100%"
return v},
$S:319}
C.fVK.prototype={
$1(d){return new C.aeS(this.a,this.b,null)},
$S:z+80}
C.eDD.prototype={
$0(){return this.a.QR(this.b,C.it4(),"Tap Save to Files on the next screen.","Download did not start \u2014 try Share.")},
$S:0}
C.eDE.prototype={
$0(){var w=this.a,v=w.d?"Choose Print from the share menu for one full page.":"Pick Save to Files or send from the share menu."
return w.QR(this.b,C.it6(),v,"Share unavailable \u2014 try Safari.")},
$S:0}
C.eDF.prototype={
$0(){var w=this.a,v=w.d?"PDF opened \u2014 tap Share \u2197 then Print.":"PDF opened \u2014 use Share \u2197 at the bottom of Safari."
return w.QR(this.b,C.it5(),v,"Could not open Safari \u2014 try Share.")},
$S:0}
C.eDG.prototype={
$0(){A6.hFn()
B.a6(this.a,!1).N(null)},
$S:0}
C.clI.prototype={
$1(d){var w=null,v=this.a
return v==null?d:B.m(w,w,w,w,w,w,w,w,w,w,w,d.r,d.x,w,d.w,v,d.as,!0,w,d.y,w,w,w,w,w,w)},
$S:1722}
C.clH.prototype={
$2(d,e){var w,v,u=this,t=null,s=B.dR(d,A.oa),r=s==null?t:s.b,q=r==null?2:r,p=e.b,o=isFinite(p)?p:0,n=o<=0?t:A.i.V(A.i.D(o*Math.max(B.jo(q),5),96,1500))
s=u.b
w=u.c
v=w?t:n
if(w)w=A.ub
else w=u.d||u.e?A.c_:A.dC
return B.fX(s,A.z,v,new C.clG(),A.cl,w,!0,t,!1,new B.bf("img_"+u.a.c.a+"_"+s.length,x.W),t)},
$S:1723}
C.clG.prototype={
$3(d,e,f){return D.agd},
$S:228}
C.fTA.prototype={
$2(d,e){var w,v,u,t=null,s=B.l(6),r=this.a
if(r.f!=null){w=B.b1(r.e)
v=r.f
v.toString
v=new B.a7(A.ay,A.aC,A.x,B.a([w,B.b1(v)],x.O),t,t)
w=v}else w=t
v=r.f==null?B.b1(r.e):t
r=r.z
r=B.cX(r,0,B.dD(6,"count",x.S),B.U(r).c)
u=r.$ti.k("N<ak.E,cK>")
r=B.C(new B.N(r,new C.fTz(e.b,e.d),u),u.k("ak.E"))
return B.bu(s,new B.bM(new B.o(v,t,t,t,t,w,A.n),A.bk,new B.an(A.a0,t,A.ad,A.t,r,t),t),A.aq)},
$S:1724}
C.fTz.prototype={
$1(d){var w=null,v=d.c,u=this.a,t=d.d,s=this.b,r=d.e,q=d.f
return B.ao(w,C.b41(!1,w,!1,d,w,!1,w,w,w,u/960,!1,!0),q*s,w,v*u,w,t*s,r*u)},
$S:z+24}
C.fC0.prototype={
$3(d,e,f){var w,v,u,t,s,r=this,q=null,p=r.a
p.a=B.cz(r.b,new C.fBZ(d))
w=B.aE(d,A.bZ,x.w).w
v=B.l(22)
u=B.K(A.bw,A.r,1)
t=B.a([new B.ab(0,A.G,A.w.j(0.45),A.fQ,28)],x.V)
s=x.p
return new B.d2(e,!1,B.as(B.aG(!1,A.a3,!0,q,B.p(q,B.x(B.a([B.A(B.a([B.E(B.x(B.a([B.d(r.c,q,q,q,q,q,q,A.jR,q,q,q),A.ax,B.d("Applied \u2014 tap Done or wait 1.5 seconds",q,q,q,q,q,q,B.m(q,q,A.c.j(0.45),q,q,q,q,q,q,q,q,11,q,q,A.a8,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],s),A.E,q,A.e,A.h,0,A.p),1),B.bO(!1,A.B9,q,q,!0,q,q,q,new C.fC_(p,d),q,B.fs(q,q,A.bo,q,q,q,q,q,q,q,q,A.c,q,q,q,q,q,A.CF,q,new B.b9(B.l(12),A.a1),q,q,q,q,q,q))],s),A.l,q,A.e,A.h,0,q,q),A.aB,r.d],s),A.l,q,A.e,A.N,0,A.p),A.f,q,new B.aY(0,w.a.a*0.94,0,1/0),new B.o(A.av,q,u,v,t,q,A.n),q,q,q,A.hc,A.CL,q,q,q),A.f,A.L,0,q,q,q,q,q,A.ai),q,q,q),q)},
$C:"$3",
$R:3,
$S:260}
C.fBZ.prototype={
$0(){var w=this.a
if(w.e!=null&&B.a6(w,!0).q4())B.a6(w,!0).eq()},
$S:0}
C.fC_.prototype={
$0(){var w=this.a.a
if(w!=null)w.a1(0)
B.a6(this.b,!0).eq()},
$S:0}
C.fiF.prototype={
$2(d,e){var w,v,u=this,t=null,s=u.a,r=s.d
r===$&&B.c()
r=r.x
r===$&&B.c()
switch(s.a.c.a){case 0:return u.b
case 1:case 13:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t)
case 2:case 17:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.dP(u.b,new B.r((1-r)*220,0))],x.p),t)
case 3:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.dP(u.b,new B.r(-(1-r)*220,0))],x.p),t)
case 4:case 21:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.dP(u.b,new B.r(0,(1-r)*140))],x.p),t)
case 5:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.dP(u.b,new B.r(0,-(1-r)*140))],x.p),t)
case 6:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.e4(A.z,B.d3(u.b,r),0.6+r*0.4,t,t)],x.p),t)
case 7:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.e4(A.z,B.d3(u.b,r),1.3-r*0.3,t,t)],x.p),t)
case 8:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.fE(r*3.14159)
return B.fA(A.z,r<0.5?u.c:u.b,t,s,!0)
case 9:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.001
s.k5(r*3.14159)
return B.fA(A.z,r<0.5?u.c:u.b,t,s,!0)
case 10:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fE(r*1.2)
s.k5(r*0.5)
return B.fA(A.z,B.d3(u.b,0.4+r*0.6),t,s,!0)
case 11:s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.002
s.fE(-r*1.4)
return B.fA(A.a9,B.d3(u.b,r),t,s,!0)
case 12:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(B.e4(A.z,u.b,1.02-r*0.02,t,t),r)],x.p),t)
case 14:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.jg(u.b,A.t,new C.aM_(r,t))],x.p),t)
case 15:return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.jg(u.b,A.t,new C.aM_(1-r,t))],x.p),t)
case 16:v=D.bda.az(0,r)
return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.e4(A.z,B.d3(u.b,r),0.5+v*0.5,t,t)],x.p),t)
case 18:s=r<0.15
if(s)r=1
return new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(B.eb(u.b,A.c.j(s?0.9:0),!0),r)],x.p),t)
case 19:s=B.dr()
s.n5(r*6.28)
s.k7(r,r,r,1)
return B.fA(A.z,u.b,t,s,!0)
case 20:return B.eI(A.z,(r-0.5)*0.35,new B.an(A.a0,t,A.b1,A.t,B.a([u.c,B.d3(u.b,r)],x.p),t),t)}},
$S:67}
C.e2t.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e2s.prototype={
$0(){var w=this.a
if(w.c!=null){w=w.d
w===$&&B.c()
w.cr(0)}},
$S:12}
C.e2r.prototype={
$2(d,e){var w,v=this.a
e.toString
w=v.d
w===$&&B.c()
v=v.a.c.dy
w=w.x
w===$&&B.c()
return C.hFE(v,w,e)},
$S:67}
C.clA.prototype={
$2(d,e){var w,v,u,t,s,r=null,q={}
q.a=0
w=this.a
v=w.c
if(v.f!=null){u=B.b1(v.e)
t=v.f
t.toString
t=new B.a7(A.a5,A.a9,A.x,B.a([u,B.b1(t)],x.O),r,r)
u=t}else u=r
t=v.f==null?B.b1(v.e):r
v=v.z
s=B.U(v).k("N<1,cK>")
q=B.C(new B.N(v,new C.clz(q,w,e.b,e.d),s),s.k("ak.E"))
return new B.bM(new B.o(t,r,r,r,r,u,A.n),A.bk,new B.an(A.a0,r,A.ad,A.f,q,r),r)},
$S:439}
C.clz.prototype={
$1(d){var w,v=this,u=null,t=d.dy!==D.cn?v.a.a++:0,s=d.c,r=v.c,q=d.d,p=v.d,o=d.e,n=d.f,m=d.fy,l=v.b,k=l.d
l=k||l.e
w=A.a.gX(d.a)
return B.ao(u,new C.a99(m,new C.Wt(d,C.b41(!1,u,!1,d,u,!1,u,u,u,r/960,!1,!1),k,t,u),l,w,u),n*p,u,s*r,u,q*p,o*r)},
$S:z+24}
C.dg0.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.dg_(w))},
$S:12}
C.dg_.prototype={
$0(){return this.a.d++},
$S:0}
C.er_.prototype={
$2(d,e){var w,v=null,u=A.o.ar(this.b.e.a,1000),t=A.o.F(Date.now(),u)/u*3.141592653589793*2+this.c,s=this.a
if(D.aU8.q(0,A.d.gH(s.a.c.split("@")))){s=s.a
w=s.c
s=s.f
e.toString
return C.ipn(w,t,s,e)}switch(s.a.c){case"float3d":s=B.dr()
w=s.a
w.$flags&2&&B.aj(w)
w[11]=0.0016
w=Math.sin(t)
s.eb(0,w*7,0,1)
s.fE(Math.sin(t)*0.32)
s.k5(Math.cos(t)*0.12)
w=1+Math.sin(t*2)*0.025
s.k7(w,w,w,1)
return B.fA(A.z,e,v,s,!0)
case"drift":s=Math.sin(t)
w=Math.cos(t*0.8)
return B.dP(B.e4(A.z,e,1+Math.sin(t*0.5)*0.05,v,v),new B.r(s*14,w*10))
default:s=Math.sin(t)
return B.d3(B.e4(A.z,e,1+Math.sin(t)*0.04,v,v),0.82+s*0.18)}},
$S:67}
C.f7z.prototype={
$1(d){var w
$.S()
w=B.L()
w.b=A.aa
w.c=d
w.e=A.dP
return w},
$S:1725}
C.fR3.prototype={
$2(d,e){var w,v,u,t,s=this,r=null,q=e.b,p=e.d,o=Math.min(q,p)
if(!s.a)w=s.b.length===0&&s.c.length!==0
else w=!0
v=w?new B.av(o,o):new B.av(q,p)
u=s.b
if(u.length===0)u="rounded"
q=s.c
p=q.length===0
if(p)t=0
else{w=v.gdi()
t=w*(q==="framed"?0.07:0.05)}w=B.a([],x.p)
if(q==="framed"||q==="gold")w.push(B.b5(r,r,r,new C.bum(u,t,r),A.az))
w.push(B.o0(s.d,A.aq,new C.bi2(u,t,r)))
if(!p)w.push(B.b5(r,r,r,new C.bti(u,q,t,r),A.az))
return B.as(new B.a5(v.a,v.b,new B.an(A.a0,r,A.b1,A.t,w,r),r),r,r,r)},
$S:218}
C.fF6.prototype={
$1(d){var w=d.b[1]
return w==null?"":w},
$S:318}
C.eJT.prototype={
$0(){var w=0,v=B.j(x.aP),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(V.DC(t.a.a.c),$async$$0)
case 3:s=e
r=J.a8(s)
if(r.gau(s)){u=null
w=1
break}u=r.dL(s,new C.eJR(),new C.eJS(s))
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1726}
C.eJR.prototype={
$1(d){return d.at==="published"&&d.Q.length!==0},
$S:187}
C.eJS.prototype={
$0(){return J.fm(this.a)},
$S:1728}
C.eGg.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eGh.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eGi.prototype={
$0(){var w=this.a
w.d=this.b
w.x=!1},
$S:0}
C.eHR.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHF.prototype={
$1(d){return d.w!=="hati_kiapo_uongozi"},
$S:z+2}
C.eHG.prototype={
$1(d){return d.hT()},
$S:z+83}
C.eFE.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eIZ.prototype={
$0(){this.a.uh()},
$S:0}
C.eJP.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oL()
w.KW()},
$S:0}
C.eHP.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.e=u
w.f=A.o.D(v.b,0,u.r.length-1)
w.r=v.c
w.oL()
w.KW()},
$S:0}
C.eJC.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eJD.prototype={
$1(d){return d.b===D.d3},
$S:z+4}
C.eJE.prototype={
$1(d){return d.a},
$S:z+22}
C.eJF.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aP),$.ax())},
$S:270}
C.eJG.prototype={
$0(){return B.kd(!0,null,!0,!0,null,null,!1)},
$S:517}
C.eF1.prototype={
$1(d){return d.a===this.a.e.a},
$S:z+2}
C.eJQ.prototype={
$0(){},
$S:0}
C.eGY.prototype={
$0(){var w=this.a
w.e=this.b.hT()
w.f=0
w.r=null
w.db=!1
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yi()
w.KW()},
$S:0}
C.eF_.prototype={
$0(){var w=this.a
w.e=null
w.db=!1
w.w=w.r=null
w.yi()},
$S:0}
C.eF0.prototype={
$0(){var w=this.a
w.w=w.r=w.e=null
w.yi()},
$S:0}
C.eHk.prototype={
$1(d){return d.a===this.a.a.a},
$S:z+2}
C.eHl.prototype={
$0(){var w=this.a
w.e=this.b
w.f=0
w.r=null
w.db=!this.c
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yi()
w.KW()
w.z="Home"},
$S:0}
C.eHm.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eGX.prototype={
$1(d){var w=null
return B.ek(B.a([B.bO(!1,A.Wt,w,w,!0,w,w,w,new C.eGW(d),w,w)],x.p),w,w,w,D.h30,w,w,w,w,D.fKn,w)},
$S:18}
C.eGW.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eGU.prototype={
$1(d){var w=null
return B.ek(B.a([B.bO(!1,A.Wt,w,w,!0,w,w,w,new C.eGT(d),w,w)],x.p),w,w,w,D.fOC,w,w,w,w,D.fMe,w)},
$S:18}
C.eGT.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eGV.prototype={
$0(){},
$S:0}
C.eGc.prototype={
$1(d){return this.a.b3G(C.bFC(d))},
$S:z+7}
C.eGd.prototype={
$1(d){return this.a.agQ(C.bFC(d))},
$S:z+7}
C.eH3.prototype={
$1(d){var w=null,v=x.p,u=B.a([B.as(B.p(w,w,A.f,w,w,new B.o(A.aT,w,w,B.l(2),w,w,A.n),w,4,w,w,w,w,w,44),w,w,w),A.bx,D.h34,A.ax,B.d("Chagua aina ya hati",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.bx,new C.QK(A.tg,D.aCi,"HATI YA KUHOWA","Hati ya mahari",new C.eGZ(d),w),A.T,new C.QK(A.h3,D.dkw,"HATI YA KUHOWESHA","Hati ya kupokea",new C.eH_(d),w),A.T,new C.QK(A.hC,D.d4H,"HATI YA NDOA","Makubaliano \xb7 pete \xb7 picha za wanandoa",new C.eH0(d),w),A.T,new C.QK(A.ii,D.d2G,"MALIPO YA AWAMU YA MAHARI","Makubaliano ya mahari iliyosalia",new C.eH1(d),w)],v)
if(this.a.gZe())A.d.u(u,B.a([A.T,new C.QK(A.iW,D.cOr,"HATI YA KIAPO CHA UONGOZI","Kiapo cha Rais \xb7 Civic Registry",new C.eH2(d),w)],v))
return B.bm(!0,B.c9(B.x(u,A.al,w,A.e,A.N,0,A.p),A.t,w,A.y,w,w,E.z0,w,w,A.ah),!0,!1,A.ag,!0,!0)},
$S:27}
C.eGZ.prototype={
$0(){B.a6(this.a,!1).N("hati_kuhowa")
return null},
$S:0}
C.eH_.prototype={
$0(){B.a6(this.a,!1).N("hati_kuhoweya")
return null},
$S:0}
C.eH0.prototype={
$0(){B.a6(this.a,!1).N("marriage_agreement")
return null},
$S:0}
C.eH1.prototype={
$0(){B.a6(this.a,!1).N("hati_malipo_awamu")
return null},
$S:0}
C.eH2.prototype={
$0(){B.a6(this.a,!1).N("hati_kiapo_uongozi")
return null},
$S:0}
C.eH4.prototype={
$0(){var w=this.a
w.e=this.b.hT()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yi()},
$S:0}
C.eF3.prototype={
$1(d){return d.z.length===0},
$S:z+6}
C.eF4.prototype={
$0(){var w,v,u=this,t=u.c,s=u.d,r=t.r,q=s.r
if(u.b){A.d.a8(r)
A.d.u(r,q)
w=A.a.i(t.b).toLowerCase()
if(w.length===0||A.a.a_(w,"untitled"))t.b=s.b
r=u.a
r.f=0}else{v=u.a
A.d.nA(r,v.f+1,q);++v.f
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
C.eHf.prototype={
$1(d){return d.b===D.kj},
$S:z+4}
C.eHg.prototype={
$1(d){var w={},v=this.b
w.a=A.d.gH(v).go
w.b=A.d.gH(v).id
return new B.e3(new C.eHd(w,this.a,v),null)},
$S:20}
C.eHd.prototype={
$2(a2,a3){var w,v,u,t,s,r,q=null,p=this.a,o=this.b,n=this.c,m=new C.eHe(p,o,a3,n),l=B.P(a2).ax.a===A.I,k=l?A.c:A.a_,j=l?A.aR:A.an,i=l?A.bs:A.ch,h=l?A.a_:A.c,g=B.l(28),f=B.K(l?A.bw:A.bm,A.r,1),e=x.p,d=B.A(B.a([B.E(B.x(B.a([B.d("Logo and pictures",q,q,q,q,q,q,B.m(q,q,k,q,q,q,q,q,q,q,q,20,q,q,A.u,q,q,!0,q,q,q,q,q,q,q,q),q,q,q),A.bF,B.d("Tap a shape or a ring to change it.",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,12.5,q,q,q,q,q,!0,q,q,q,q,q,q,q,q),q,q,q)],e),A.E,q,A.e,A.h,0,A.p),1),B.aI(q,q,q,q,B.W(A.cB,j,q,q,q,q),q,q,q,new C.eH9(a2),q,q,q,q,q,q)],e),A.l,q,A.e,A.h,0,q,q),a0=B.d("SHAPE",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q),a1=B.a([],e)
for(w=0;w<7;++w){v={}
u=D.DM[w]
v.a=null
t=v.a=u.a
a1.push(new C.bkB(t,u.b,p.a===t,i,k,new C.eHa(v,m),q))}a1=B.bZ(A.bI,a1,A.br,q,10,10)
v=B.d("RING",q,q,q,q,q,q,B.m(q,q,j,q,q,q,q,q,q,q,q,11,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
u=B.a([],e)
for(w=0;w<11;++w){s={}
r=D.DF[w]
s.a=null
t=s.a=r.a
u.push(new C.bkA(t,r.b,p.b===t,k,j,new C.eHb(s,m),q))}return B.bm(!0,B.p(q,B.c9(B.x(B.a([d,A.aO,a0,A.T,a1,A.bx,v,A.T,B.bZ(A.bI,u,A.br,q,12,12),A.bx,new B.a5(1/0,48,B.en(D.c5x,q,D.h5u,new C.eHc(o,n),B.dj(q,q,q,q,q,q,q,q,q,A.aD,q,q,q,q,new B.b9(B.l(16),A.a1),D.b71,q,q,q,q)),q)],e),A.E,q,A.e,A.N,0,A.p),A.t,q,A.y,q,q,q,q,q,A.ah),A.f,q,q,new B.o(h,q,f,g,q,q,A.n),q,q,q,A.uJ,D.bGp,q,q,q),!0,!1,A.ag,!0,!0)},
$S:89}
C.eHe.prototype={
$2$f$r(d,e){var w=this
w.c.$1(new C.eH7(w.a,d,e))
w.b.dc(new C.eH8(w.d,d,e))},
$0(){return this.$2$f$r(null,null)},
$1$r(d){return this.$2$f$r(null,d)},
$1$f(d){return this.$2$f$r(d,null)},
$S:1731}
C.eH7.prototype={
$0(){var w=this,v=w.b
if(v!=null)w.a.a=v
v=w.c
if(v!=null)w.a.b=v},
$S:0}
C.eH8.prototype={
$0(){var w,v,u,t,s,r,q,p
for(w=this.a,v=w.length,u=this.c,t=u!=null,s=this.b,r=s!=null,q=0;q<v;++q){p=w[q]
if(r)p.go=s
if(t)p.id=u}},
$S:0}
C.eH9.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eHa.prototype={
$0(){return this.b.$1$f(this.a.a)},
$S:0}
C.eHb.prototype={
$0(){return this.b.$1$r(this.a.a)},
$S:0}
C.eHc.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b(A2.Hy(78,1920),$async$$0)
case 3:s=e
if(s==null){w=1
break}t.a.dc(new C.eH6(t.b,s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eH6.prototype={
$0(){var w,v,u,t
for(w=this.a,v=w.length,u=this.b,t=0;t<v;++t)w[t].at=u},
$S:0}
C.eHi.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eHj.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eHh(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nA(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
w.cy=s.cy
w.ay=s.ay
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yi()},
$S:0}
C.eHh.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eHA.prototype={
$1(d){return d.b===D.d3},
$S:z+4}
C.eHB.prototype={
$1(d){return d.w},
$S:z+84}
C.eHC.prototype={
$2(d,e){return d>e?d:e},
$S:85}
C.eHD.prototype={
$1(d){var w=this,v=null,u=B.P(d).ax.a===A.I,t=u?A.c:A.a_,s=u?A.aR:A.an,r=u?A.bs:A.aS,q=u?A.a_:A.c,p=B.l(28),o=B.K(u?A.bw:A.bm,A.r,1),n=B.aE(d,A.bZ,x.w).w,m=w.a,l=x.p,k=w.b
return B.bm(!0,B.p(v,B.x(B.a([B.A(B.a([B.p(v,D.bZP,A.f,v,v,D.b8o,v,38,v,v,v,v,v,38),A.bb,B.E(B.x(B.a([B.d("Edit this slide",v,v,v,v,v,v,B.m(v,v,t,v,v,v,v,v,v,v,v,19,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),B.d("Slide "+(m.f+1)+" \xb7 changes save as you type",v,v,v,v,v,v,B.m(v,v,s,v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],l),A.E,v,A.e,A.h,0,A.p),1),B.aI(v,v,v,v,B.W(A.cB,s,v,v,v,v),v,v,v,new C.eHx(d),v,v,v,v,v,v)],l),A.l,v,A.e,A.h,0,v,v),A.aB,new B.di(1,A.cm,B.hT(v,new C.eHy(m,k,w.c,s,w.d,t,r),k.length,A.f1,v,A.ah,new C.eHz(),!0),v)],l),A.E,v,A.e,A.N,0,A.p),A.f,v,new B.aY(0,1/0,0,n.a.b*0.8),new B.o(q,v,o,p,v,v,A.n),v,v,v,A.uJ,A.a1f,v,v,v),!0,!1,A.ag,!0,!0)},
$S:27}
C.eHx.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eHz.prototype={
$2(d,e){return A.af},
$S:38}
C.eHy.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.b[e],o=p.w===r.c,n=o?"TITLE":"TEXT "+(e+1)
n=B.d(n,q,q,q,q,q,q,B.m(q,q,o?A.aD:r.d,q,q,q,q,q,q,q,q,10.5,q,q,A.u,q,q,!0,q,1,q,q,q,q,q,q),q,q,q)
w=r.e
v=w.h(0,p.a)
u=o?1:2
t=o?A.H:A.cD
t=B.m(q,q,r.f,q,q,q,q,q,q,q,q,15,q,q,t,q,q,!0,q,q,q,q,q,q,q,q)
s=r.a
w=B.aI(q,q,q,q,D.c2d,q,q,q,new C.eHv(s,w,p),q,q,q,q,"Add an icon",q)
return B.x(B.a([new B.D(D.bIG,n,q),B.aN(q,A.Z,!1,q,!0,A.t,q,B.aO(),v,q,q,q,q,q,2,B.bz(q,new B.b6(4,B.l(16),A.a1),q,A.eV,q,q,q,q,!0,q,q,q,q,q,q,r.r,!0,q,q,q,q,new B.b6(4,B.l(16),D.b6H),q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,q,!0,!0,!1,q,q,q,q,q,q,q,q,w,q,q,q,q,q),A.y,!0,q,!0,q,!1,q,A.ak,q,q,q,q,q,q,q,q,q,q,u,q,!1,"\u2022",q,new C.eHw(s,p),q,q,q,!1,q,q,!1,q,!0,q,A.ac,q,q,q,q,q,q,q,q,q,q,q,t,!0,A.a7,q,A.ao,q,q,q,q)],x.p),A.E,q,A.e,A.h,0,A.p)},
$S:515}
C.eHv.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l,k
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:l=t.a
k=l.c
k.toString
w=3
return B.b(C.ivb(k),$async$$0)
case 3:s=e
if(s==null||l.c==null){w=1
break}k=t.c.a
r=t.b.h(0,k)
q=r.a
p=q.b
o=p.geB()?p.a:q.a.length
n=p.geB()?p.b:q.a.length
m=A.a.oh(q.a,o,n,s)
r.bP(0,new B.ba(m,B.hn(A.bB,o+s.length),A.aP))
l.akS(k,m)
l.pS()
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHw.prototype={
$1(d){var w=this.a
w.akS(this.b.a,d)
w.pS()},
$S:2}
C.eHE.prototype={
$0(){},
$S:0}
C.eH5.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eFk.prototype={
$0(){},
$S:0}
C.eFl.prototype={
$0(){var w=this.c.CW
if(w==null)w=""
C.hH0(this.b,w,!0)
w=this.a
w.r=null
w.yi()},
$S:0}
C.eFm.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eFn.prototype={
$0(){var w,v,u,t=this,s=t.a
if(s.a<0)s.a=t.c.r.length
w=t.c
v=w.r
A.d.bq(v,new C.eFj(t.d))
u=A.o.D(s.a,0,v.length)
s.a=u
s=t.e
A.d.nA(v,u,s.r)
w.CW=s.CW
w.cx=s.cx
s=t.b
s.f=A.o.D(s.f,0,v.length-1)
s.r=null
s.yi()},
$S:0}
C.eFj.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+6}
C.eHK.prototype={
$1(d){return B.pm(new C.eHJ(this.a,d),!1,0.82,0.95,0.45,!1,null)},
$S:138}
C.eHJ.prototype={
$2(d,e){var w=null,v=x.p
return B.x(B.a([new B.D(E.anL,B.x(B.a([D.h0w,A.am,B.d("Top 4 templates are free \xb7 lock icon means Slides Pro",w,w,w,w,w,w,B.m(w,w,A.c.j(0.5),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],v),A.E,w,A.e,A.h,0,A.p),w),B.E(B.iv(!0,w,e,A.y,D.flN,new C.eHI(this.a,this.b),20,A.uL,w,A.ah,!1),1)],v),A.al,w,A.e,A.h,0,A.p)},
$S:471}
C.eHI.prototype={
$2(d,e){var w=null,v=D.IG[e],u=C.i_C(v),t=B.l(16),s=B.l(16),r=B.a([v.e,v.f],x.O),q=v.d,p=B.K(q.j(0.45),A.r,1),o=q.j(0.2),n=B.l(8),m=x.p
n=B.a([B.p(w,B.d(v.c,w,w,w,w,w,w,B.m(w,w,q,w,w,w,w,w,w,w,w,9,w,w,A.H,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),A.f,w,w,new B.o(o,w,w,n,w,w,A.n),w,w,w,w,A.fM,w,w,w)],m)
if(u)A.d.u(n,B.a([A.bn,B.p(w,D.feM,A.f,w,w,new B.o(A.dX.j(0.85),w,w,B.l(8),w,w,A.n),w,w,w,w,A.n3,w,w,w)],m))
return B.aG(!1,A.a3,!0,w,B.aM(!1,t,!0,B.p(w,B.x(B.a([B.A(n,A.l,w,A.e,A.h,0,w,w),A.b3,B.d(v.b,w,w,w,w,w,w,B.m(w,w,v.r,w,w,w,w,w,w,w,w,14,w,w,A.u,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),B.d("5 slides",w,w,w,w,w,w,B.m(w,w,v.w.j(0.8),w,w,w,w,w,w,w,w,11,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],m),A.E,w,A.e,A.h,0,A.p),A.f,w,w,new B.o(w,w,p,s,w,new B.a7(A.a5,A.a9,A.x,r,w,w),A.n),w,w,w,w,A.bl,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eHH(this.a,u,this.b,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.eHH.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=t.b?3:4
break
case 3:s=t.c
r=t.a.a
w=5
return B.b(C.clS(s,r.c,r.d),$async$$0)
case 5:if(!e||s.e==null){w=1
break}case 4:s=t.c
if(s.e!=null)B.a6(s,!1).N(t.d.a)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHL.prototype={
$0(){var w=this.a
w.e=this.b.hT()
w.f=0
w.r=null
w.db=!0
A.d.a8(w.ax)
A.d.a8(w.ay)
w.yi()},
$S:0}
C.eDY.prototype={
$0(){var w,v=this.a,u=v.gqZ(),t=C.t3(4294967295,null,0,0,null,C.cC(),D.n9,"","","",D.dr),s=this.b
C.cm4(t,s,u)
w=v.gdA()
if(w!=null&&s!==D.Eo){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eFi.prototype={
$0(){var w,v,u,t,s,r,q=this.b.aj()
q.n(0,"id",C.cC())
w=x.c.a(q.h(0,"elements"))
if(w!=null)for(v=J.aT(w),u=x.f;v.C();){t=v.gP(v)
if(u.b(t)){s=Date.now()
r=$.iV
$.iV=r+1
J.aK(t,"id",""+1000*s+"_"+r)}}v=this.a
A.d.c9(v.e.r,v.f+1,C.hto(q));++v.f},
$S:0}
C.eFg.prototype={
$0(){var w=this.a
A.d.cH(w.e.r,w.f)
w.f=A.o.D(w.f,0,w.e.r.length-1)
w.r=null},
$S:0}
C.eHT.prototype={
$0(){var w,v=this.a,u=this.b,t=A.d.cH(v.e.r,u),s=this.c
A.d.c9(v.e.r,s,t)
w=v.f
if(w===u)v.f=s
else if(u<w&&s>=w)v.f=w-1
else if(u>w&&s<=w)v.f=w+1},
$S:0}
C.eFc.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.d,new C.eFb(u))
w=v.e
w=w==null?null:w.a
if(w===u.a){v.e=null
v.db=!1}},
$S:0}
C.eFb.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eHS.prototype={
$0(){var w,v=this.b,u=A.a.i(this.c)
v.b=u.length===0?"Untitled Presentation":u
v.f=new B.V(Date.now(),0,!1)
u=this.a.e
w=u==null?null:u.a
if(w===v.a)u.b=v.b},
$S:0}
C.eF2.prototype={
$0(){var w=this.a.r
return new B.au(new B.ba(w,A.b6,A.aP),$.ax())},
$S:270}
C.eFF.prototype={
$0(){return B.kd(!0,null,!0,!0,null,null,!1)},
$S:517}
C.eJA.prototype={
$0(){var w=this.a
w.w=w.r=this.b
w.y=!1},
$S:0}
C.eJB.prototype={
$1(d){var w,v,u=this.a
if(u.c==null||u.w!==this.b)return
w=this.c
u.avR(w).fW()
v=u.XL(w)
v.stZ(B.hn(A.bB,v.a.a.length))},
$S:8}
C.eJ_.prototype={
$0(){var w,v,u,t=this
if(t.b)t.a.w=null
w=t.a
v=w.r=t.c
if(v!=null){w.as=!0
u=w.YM(v)
if(u!=null&&u.b===D.d3)w.XL(u).sb3(0,u.r)}else w.w=null},
$S:0}
C.eDZ.prototype={
$0(){var w=C.cC(),v=this.a,u=C.em(A.bd,!1,v.gqZ().e.l(),A.aH,"",4280640491,24,A.bq,A.a8,"",0.22,w,null,"","",0,!1,"",0,D.bf,4280172719,2,"Tap to edit text",0,0,"",D.cn,D.d3,0.7,0.15,0.2)
A.d.I(v.gdA().z,u)
v.r=u.a},
$S:0}
C.eDW.prototype={
$0(){var w=C.cC(),v=this.a,u=C.em(A.bd,!1,4279310375,A.aH,"",v.gqZ().c.j(0.25).l(),24,A.bq,A.a8,"",0.25,w,null,"","",0,!1,"",0,this.b,v.gqZ().c.l(),2,"",0,0,"",D.cn,D.f7,0.25,0.3,0.3)
A.d.I(v.gdA().z,u)
v.r=u.a},
$S:0}
C.eDM.prototype={
$0(){var w=C.em(A.bd,!1,4279310375,A.aH,"",4280640491,24,A.bq,A.a8,"",0.55,C.cC(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cn,D.kj,0.6,0.2,0.18),v=this.a
A.d.I(v.gdA().z,w)
v.r=w.a},
$S:0}
C.eDJ.prototype={
$1(d){var w,v,u,t,s,r=null,q=B.a([D.ccD],x.p)
for(w=J.aT(this.a);w.C();){v=w.gP(w)
u=A.a.i(v.b)
u=B.d(u.length===0?"My Bio":u,r,r,r,r,r,r,r,r,r,r)
t=v.galw().length
s=v.at==="published"&&v.Q.length!==0?" \xb7 "+v.as:""
q.push(B.dJ(!1,r,r,r,!0,r,r,r,!0,r,r,D.bXq,r,r,r,r,new C.eDI(d,v),!1,r,r,r,r,r,B.d(""+t+" links"+s,r,1,A.a2,r,r,r,r,r,r,r),r,u,r,r,r))}return B.bm(!0,B.cw(q,r,r,r,r,r,A.ah,!0),!0,!1,A.ag,!0,!0)},
$S:27}
C.eDI.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eDK.prototype={
$0(){var w=A.i.D(0.23131034482758622,0.12,0.5),v=C.cC(),u=this.b,t=A.W.av(u.aj(),null),s=C.em(A.bd,!1,4279310375,A.aH,u.b,4280640491,24,A.bq,A.a8,"",0.86,v,null,"","",0,!1,"",0,D.bf,4280172719,2,t,0,0,"",D.cn,D.a90,w,0.5-w/2,0.07)
t=this.a
A.d.I(t.gdA().z,s)
t.r=s.a},
$S:0}
C.eFe.prototype={
$1(d){return d.a===this.a&&d.db==="ngmy_quote_logo"},
$S:z+4}
C.eFf.prototype={
$0(){var w,v=this.a,u=this.b
A.d.bq(v.gdA().z,new C.eFd(u))
v.w=v.r=null
w=v.ch.W(0,u)
if(w!=null){w.U$=$.ax()
w.R$=0}v=v.CW.W(0,u)
if(v!=null)v.t()},
$S:0}
C.eFd.prototype={
$1(d){return d.a===this.a},
$S:z+4}
C.eEq.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null){w=s.b
if(w===D.d3)s.Q=t.c.l()
else if(w===D.f7){s.ay=t.c.l()
w=t.d
if(w!=null)s.ch=w.l()}return}v=new C.eEr(t.c,t.d)
if(t.a.Q)for(s=t.e.r,w=s.length,u=0;u<s.length;s.length===w||(0,B.I)(s),++u)v.$1(s[u])
else{s=t.f
if(s!=null)v.$1(s)}},
$S:0}
C.eEr.prototype={
$1(d){var w
d.e=this.a.l()
w=this.b
d.f=w==null?null:w.l()},
$S:z+1}
C.eEv.prototype={
$0(){var w,v,u,t,s=this.a,r=s.e
r.toString
w=this.b
v=new C.eEw(w)
if(s.Q){r.c=w.a
for(s=r.r,r=s.length,u=0;u<s.length;s.length===r||(0,B.I)(s),++u)v.$1(s[u])}else{t=s.gdA()
if(t!=null)v.$1(t)}},
$S:0}
C.eEw.prototype={
$1(d){var w=this.a
d.e=w.f.l()
w=w.r
d.f=w==null?null:w.l()},
$S:z+1}
C.eEt.prototype={
$0(){var w,v,u,t=this,s=t.b
if(s!=null&&s.b===D.d3){s.Q=t.c
return}w=new C.eEu(t.c)
if(t.a.Q)for(s=t.d.r,v=s.length,u=0;u<s.length;s.length===v||(0,B.I)(s),++u)w.$1(s[u])
else{s=t.e
if(s!=null)w.$1(s)}},
$S:0}
C.eEu.prototype={
$1(d){var w,v,u
for(w=A.d.gae(d.z),v=new B.eJ(w,new C.eEs()),u=this.a;v.C();)w.gP(0).Q=u},
$S:z+1}
C.eEs.prototype={
$1(d){return d.b===D.d3},
$S:z+4}
C.eEp.prototype={
$0(){return C.cm4(this.b,this.c,this.a.gqZ())},
$S:0}
C.eHu.prototype={
$0(){return A.d.c9(this.a.d,0,this.b)},
$S:0}
C.eJJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJK.prototype={
$1(d){return d.w===this.b&&d.a!==this.a.a.a},
$S:z+2}
C.eJL.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJM.prototype={
$0(){var w,v=this.a,u=v.c,t=this.b,s=t.d
if(u)A.d.c9(s,0,v.b)
else{w=A.d.bk(s,new C.eJI(v))
if(w>=0)t.d[w]=v.b}if(v.a.gTk()){u=v.b
u.Q=v.a.Q
u.z=!0}if(this.c===!0){t.e=v.b.hT()
t.f=0
t.r=null
t.db=!1
A.d.a8(t.ax)
A.d.a8(t.ay)
t.yi()
t.KW()}},
$S:0}
C.eJI.prototype={
$1(d){return d.a===this.a.b.a},
$S:z+2}
C.eJf.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ad3(),s=w.b,r=u.ad4(A.fq,A.jN,"Copy filled names, date, mahari, witnesses, and signatures into "+s+".","Transfer details"),q=B.l(18),p=B.a([A.c.j(0.07),A.c.j(0.03)],x.O),o=B.K(A.c.j(0.08),A.r,1),n=x.p
p=B.a([t,A.P,r,A.bx,B.p(v,B.A(B.a([B.E(u.aYc(w.c,A.an),1),new B.D(A.fv,B.p(v,D.bXv,A.f,v,v,new B.o(A.fq.j(0.18),v,v,v,v,v,A.a6),v,34,v,v,v,v,v,34),v),B.E(u.aYc(s,A.fq),1)],n),A.l,v,A.e,A.h,0,v,v),A.f,v,v,new B.o(v,v,o,q,v,new B.a7(A.ay,A.aC,A.x,p,v,v),A.n),v,v,v,v,A.bH,v,v,v),A.bx,u.aYf(A.fq,d,D.bTA,!0,"Make a fresh "+s+" and fill it automatically","Create new & transfer","new")],n)
t=w.d
if(t>0)A.d.u(p,B.a([A.T,u.c2_(A.aG,d,A.uZ,t===1?"Update your saved "+s:"Choose among "+t+" saved documents","Use existing","existing")],n))
p.push(A.aB)
p.push(u.aYd(d,"Not now"))
return new C.KS(B.x(p,A.al,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.eJe.prototype={
$1(d){var w=null,v=this.a,u=this.c
return new C.KS(B.x(B.a([v.ad3(),A.P,v.ad4(A.aG,D.bTe,"Pick which saved document should receive the details.","Choose "+this.b),A.aO,new B.cN(new B.aY(0,1/0,0,B.aE(d,A.bZ,x.w).w.a.b*0.42),B.hT(w,new C.eJc(v,u,d),u.length,w,w,A.ah,new C.eJd(),!0),w),A.aB,v.aYd(d,"Cancel")],x.p),A.al,w,A.e,A.N,0,A.p),w)},
$S:z+9}
C.eJd.prototype={
$2(d,e){return A.T},
$S:38}
C.eJc.prototype={
$2(d,e){var w=null,v=this.b[e],u=B.l(16),t=A.c.j(0.05),s=B.l(16),r=B.K(A.c.j(0.08),A.r,1),q=x.p
return B.aG(!1,A.a3,!0,w,B.aM(!1,u,!0,B.p(w,B.A(B.a([B.p(w,D.asQ,A.f,w,w,new B.o(w,w,w,B.l(12),w,D.c9x,A.n),w,42,w,w,w,w,w,42),A.bb,B.E(B.x(B.a([B.d(v.b,w,1,A.a2,w,w,w,A.nf,w,w,w),A.cR,B.d("Updated "+this.a.QS(v.f),w,w,w,w,w,w,B.m(w,w,A.c.j(0.45),w,w,w,w,w,w,w,w,12,w,w,A.a8,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],q),A.E,w,A.e,A.h,0,A.p),1),B.W(A.eI,A.c.j(0.35),w,w,w,w)],q),A.l,w,A.e,A.h,0,w,w),A.f,w,w,new B.o(t,w,r,s,w,w,A.n),w,w,w,w,A.bH,w,w,w),w,!0,w,w,w,w,w,w,w,w,w,w,w,new C.eJb(this.c,v),w,w,w,w,w,w,w),A.f,A.L,0,w,w,w,w,w,A.ai)},
$S:79}
C.eJb.prototype={
$0(){B.a6(this.a,!1).N(this.b.a)
return null},
$S:0}
C.eJ8.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.ad3()
t=t.ad4(A.at,A.vb,"Names and shared details from \u201c"+this.b+"\u201d will fill matching spots on \u201c"+this.c+"\u201d.","Replace matching fields?")
w=A.c.j(0.14)
v=x.p
return new C.KS(B.x(B.a([s,A.P,t,A.bx,B.A(B.a([B.E(B.dW(A.acA,new C.eJ6(d),B.dj(u,u,u,u,u,u,u,u,u,A.c,u,u,A.cp,u,new B.b9(B.l(14),A.a1),new B.ay(w,1,A.r,-1),u,u,u,u)),1),A.as,B.E(B.bI(D.fMP,u,new C.eJ7(d),B.bo(A.fq,u,u,u,A.c,u,A.cp,u,new B.b9(B.l(14),A.a1),u,u,u)),1)],v),A.l,u,A.e,A.h,0,u,u)],v),A.al,u,A.e,A.N,0,A.p),u)},
$S:z+9}
C.eJ6.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.eJ7.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eJa.prototype={
$1(d){var w=this,v=null,u=w.a,t=u.ad3(),s=w.b,r=u.ad4(A.aV,A.ed,"Everything that could be matched is now on "+s+".","Transfer complete"),q=x.p,p=B.A(B.a([B.E(u.axa("Names",""+w.c),1),A.ae,B.E(u.axa("Fields",""+w.d),1),A.ae,B.E(u.axa("Signatures",""+w.e),1)],q),A.l,v,A.e,A.h,0,v,v),o=B.bo(A.bo,v,v,v,A.c,v,A.yP,v,new B.b9(B.l(14),A.a1),v,v,v)
return new C.KS(B.x(B.a([t,A.P,r,A.aO,p,A.bx,B.bI(B.d("Open "+s,v,v,v,v,v,v,A.o5,v,v,v),v,new C.eJ9(d),o),A.T,u.aYe(d,"Stay here",!1)],q),A.al,v,A.e,A.N,0,A.p),v)},
$S:z+9}
C.eJ9.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.eG8.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eG7.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eJ0.prototype={
$1(d){return d.b===D.d3},
$S:z+4}
C.eJz.prototype={
$1(d){var w=this.a,v=this.b
return new C.a0Z(A.d.dL(w.d,new C.eJx(v),new C.eJy(v)).hT(),w.f,null)},
$S:z+86}
C.eJx.prototype={
$1(d){return d.a===this.a.a},
$S:z+2}
C.eJy.prototype={
$0(){return this.a},
$S:z+87}
C.eDR.prototype={
$1(d){var w=null,v=this.b,u=""+v,t=v===1?"":"s"
t=B.a([new B.D(A.bH,B.d("Import "+this.a.c+" ("+u+" page"+t+")",w,w,w,w,w,w,A.h6,w,w,w),w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.bZl,w,w,w,w,new C.eDP(d),!1,w,w,w,w,w,B.d("Scroll through all "+u+" pages inside the slide",w,w,w,w,w,w,B.m(w,w,A.c.j(0.55),w,w,w,w,w,w,w,w,12,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w),w,D.fKM,w,w,w)],x.p)
if(v>1)t.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_E,w,w,w,w,new C.eDQ(d),!1,w,w,w,w,w,D.h6M,w,B.d("One slide per page ("+u+" slides)",w,w,w,w,w,w,A.dk,w,w,w),w,w,w))
return B.bm(!0,B.x(t,A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eDP.prototype={
$0(){B.a6(this.a,!1).N("scroll")
return null},
$S:0}
C.eDQ.prototype={
$0(){B.a6(this.a,!1).N("split")
return null},
$S:0}
C.eDS.prototype={
$0(){var w=this.b,v=w.c,u=C.em(A.bd,!1,4279310375,A.aH,v,4280640491,24,A.bq,A.a8,"",0.84,C.cC(),w.b,"","",0,!1,"",0,D.bf,4280172719,2,v,0,0,"",D.cn,D.Uh,0.88,0.06,0.08)
v=this.a
A.d.I(v.gdA().z,u)
v.r=u.a},
$S:0}
C.eDT.prototype={
$0(){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=this.a,i=j.f+1
for(w=this.b,v=this.c,u=v.b,t=w,v=v.c,s=x.u,r=v+" \u2014 page ",q=1;q<=w;++q){p=Date.now()
o=$.iV
$.iV=o+1
n=""+q
m=B.a([],s)
l=Date.now()
k=$.iV
$.iV=k+1
m.push(new C.eO(""+1000*l+"_"+k,D.Uh,0.04,0.06,0.92,0.88,v,24,A.a8,A.bq,A.aH,4279310375,A.bd,u,D.bf,4280640491,4280172719,2,0,!1,n+" / "+t,q,D.cn,0,"","","","","",!1,0))
A.d.c9(j.e.r,i+q-1,new C.lj(""+1000*p+"_"+o,r+n,"",D.r5,4294967295,null,D.dr,0,"",0,m))}j.f=i
j.r=null},
$S:0}
C.eDX.prototype={
$0(){var w,v=C.cC(),u=this.a,t=u.e
t=(t==null?null:C.km(t.w))===!0?"marriage_sign_placed":"Signature"
w=C.em(A.bd,!1,4279310375,A.aH,t,4280640491,24,A.bq,A.a8,"",0.22,v,this.b.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cn,D.lw,0.35,0.55,0.62)
A.d.I(u.gdA().z,w)
u.r=w.a},
$S:0}
C.eDO.prototype={
$0(){var w,v,u,t,s,r,q,p=this.a,o=this.b
p.b6o(o)
w=C.cC()
v=this.c
u=v.c
t=v.d
s=v.e
r=v.f
q=C.em(A.bd,!1,4279310375,A.aH,"marriage_sign_placed_"+A.a.ek(v.db,"marriage_sign_",""),4280640491,24,A.bq,A.a8,"",r,w,o.a,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cn,D.lw,s,u,t)
A.d.I(p.gdA().z,q)
A.d.bq(p.gdA().z,new C.eDN(v))
p.r=null
p=p.e
if((p==null?null:p.w)==="hati_kiapo_uongozi"&&A.a.q(v.db,"rais")){p.toString
C.ip4(p)}},
$S:0}
C.eDN.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eHQ.prototype={
$0(){var w=this.a,v=this.b
w.b6o(v)
this.c.at=v.a
w.r=null},
$S:0}
C.eJH.prototype={
$0(){var w,v,u,t,s,r,q=4279673674,p=1483594
for(w=this.b.z,v=w.length,u=this.c,t=0;t<v;++t){s=w[t]
r=s.db
if(r==="marriage_locked_nim_akuna_deni"){s.r="AKUNA DENI"
s.Q=u?q:p}else if(r==="marriage_locked_nim_akuna_box")s.ch=u?q:p
else if(r==="marriage_locked_nim_akuna_tick"){s.r="\u2713"
s.Q=u?q:p}}this.a.r=null},
$S:0}
C.eGb.prototype={
$0(){var w,v,u,t,s,r=this.b
A.d.bq(r.z,new C.eGa())
for(r=r.z,w=r.length,v=this.c+0.001,u=0;u<w;++u){t=r[u]
s=t.d
if(s>v)t.d=s-0.043}this.a.r=null},
$S:0}
C.eGa.prototype={
$1(d){var w=d.db
return w==="marriage_locked_nim_n_4"||w==="marriage_locked_nim_ul_4"||w==="marriage_locked_nim_badge_4"||w==="marriage_locked_nim_badge_4_fill"||A.a.a_(w,"marriage_field_mahari_4:")},
$S:z+4}
C.eEz.prototype={
$0(){var w=this.b
w.at=this.c
w.db="__kiapo_video__"
w=this.a
w.r=null
w.db=!1},
$S:0}
C.eEA.prototype={
$1(d){var w=this.a
if(w.c==null)return
w.uh()},
$S:8}
C.eDL.prototype={
$0(){var w=C.em(A.bd,!1,4279310375,A.aH,"HD Photo",4280640491,24,A.bq,A.a8,"",0.8,C.cC(),this.b,"","",0,!1,"",0,D.bf,4280172719,2,"",0,0,"",D.cn,D.kj,0.8,0.1,0.1),v=this.a
A.d.I(v.gdA().z,w)
v.r=w.a},
$S:0}
C.eFD.prototype={
$0(){return this.a.at=this.b},
$S:0}
C.eDU.prototype={
$0(){var w=this.a,v=this.b
A.d.I(w.gdA().z,v)
w.r=v.a},
$S:0}
C.eE2.prototype={
$0(){return this.a.cx+=0.785398},
$S:0}
C.eE3.prototype={
$0(){var w=this.b.hT(),v=C.cC(),u=A.i.D(w.c+0.04,0,0.92),t=A.i.D(w.d+0.04,0,0.92),s=w.e,r=w.f,q=w.r,p=w.w,o=w.x,n=w.y,m=w.z,l=w.Q,k=w.as,j=w.at,i=w.ay,h=w.ch,g=w.cx,f=C.em(k,w.cy,l,m,w.db,i,p,n,o,"",r,v,j,"","",w.dx,!1,"",g,w.ax,h,w.CW,q,w.fr,0,"",w.dy,w.b,s,u,t)
t=this.a
A.d.I(t.gdA().z,f)
t.r=f.a},
$S:0}
C.eE4.prototype={
$0(){var w=this.a.gdA().z,v=this.b,u=A.d.bk(w,new C.eE1(v))
if(u>=0&&u<w.length-1){A.d.cH(w,u)
A.d.c9(w,u+1,v)}},
$S:0}
C.eE1.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEf.prototype={
$0(){var w=this.a.gdA().z,v=this.b,u=A.d.bk(w,new C.eE0(v))
if(u>0){A.d.cH(w,u)
A.d.c9(w,u-1,v)}},
$S:0}
C.eE0.prototype={
$1(d){return d.a===this.a.a},
$S:z+4}
C.eEi.prototype={
$0(){return this.a.as=A.bd},
$S:0}
C.eEj.prototype={
$0(){return this.a.as=A.K},
$S:0}
C.eEk.prototype={
$0(){return this.a.as=A.e4},
$S:0}
C.eEl.prototype={
$0(){return this.a.cx+=3.14159},
$S:0}
C.eEm.prototype={
$0(){return this.a.cx-=3.14159},
$S:0}
C.eEn.prototype={
$1(d){return d.b===D.d3},
$S:z+4}
C.eEo.prototype={
$1(d){return d.length!==0},
$S:3}
C.eE5.prototype={
$0(){var w=this.a,v=w.gdA().z,u=C.cC()
A.d.I(v,C.DH(w.gqZ().c.j(0.18).l(),0.1,u,D.bf,0,2,1,0,0))
u=w.gdA().z
v=C.cC()
A.d.I(u,C.jc(A.bd,!1,w.gqZ().d.l(),A.aH,18,A.bq,A.H,0.07,v,"Document Header",0,D.dr,0.9,0.05,0.02))},
$S:0}
C.eE6.prototype={
$0(){var w,v=this.a,u=v.gdA().z,t=C.cC()
A.d.I(u,C.DH(v.gqZ().c.j(0.12).l(),0.1,t,D.bf,0,2,1,0,0.9))
t=v.gdA().z
u=C.cC()
w=C.bGm()
A.d.I(t,C.jc(A.K,!1,v.gqZ().e.l(),A.aH,12,A.bq,A.a8,0.06,u,"Footer \xb7 "+w,0,D.dr,0.9,0.05,0.92))},
$S:0}
C.eE7.prototype={
$0(){A.d.I(this.a.gdA().z,C.DH(1727914055,0.12,C.cC(),D.bf,4294626325,2,0.76,0.12,0.35))},
$S:0}
C.eE8.prototype={
$0(){var w=4279310375
A.d.I(this.a.gdA().z,C.DH(w,0.08,C.cC(),D.bf,w,2,0.5,0.2,0.4))},
$S:0}
C.eE9.prototype={
$0(){var w=this.a,v=w.gdA().z,u=C.cC()
A.d.I(v,C.DH(w.gqZ().c.j(0.35).l(),0.12,u,D.Ep,4280640491,2,0.2,0.15,0.55))
A.d.I(w.gdA().z,C.jc(A.bd,!1,4279310375,A.aH,18,A.bq,A.a8,0.15,C.cC(),"Important note",0,D.r6,0.5,0.38,0.52))},
$S:0}
C.eEa.prototype={
$0(){var w=this.a
A.d.I(w.gdA().z,C.DH(4294507260,0.78,C.cC(),D.bf,4291548641,1.5,0.84,0.08,0.1))
A.d.I(w.gdA().z,C.jc(A.bd,!1,4279179050,A.aH,16,A.bq,A.a8,0.7,C.cC(),"MEMO\n\nTo:\nFrom:\nDate: "+C.bGm()+"\n\nSubject:\n\nBody text\u2026",0,D.dr,0.76,0.12,0.14))},
$S:0}
C.eEb.prototype={
$0(){var w=this.a
A.d.I(w.gdA().z,C.DH(4294897802,0.28,C.cC(),D.bf,4294626325,2,0.3,0.62,0.12))
A.d.I(w.gdA().z,C.jc(A.bd,!1,4285611794,A.aH,15,A.bq,A.a8,0.24,C.cC(),"Sticky note",0,D.aMe,0.26,0.64,0.14))},
$S:0}
C.eEc.prototype={
$0(){var w=4280640491,v=this.a
A.d.I(v.gdA().z,C.DH(4293060848,0.04,C.cC(),D.bf,4291548641,2,0.8,0.1,0.48))
A.d.I(v.gdA().z,C.DH(w,0.04,C.cC(),D.bf,w,2,0.55,0.1,0.48))},
$S:0}
C.eEd.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdA().z,C.jc(A.bd,!1,w,A.aH,18,A.bq,A.a8,0.62,C.cC(),"Left column\n\n\u2022 Point A\n\u2022 Point B",0,D.JE,0.42,0.06,0.18))
A.d.I(v.gdA().z,C.jc(A.bd,!1,w,A.aH,18,A.bq,A.a8,0.62,C.cC(),"Right column\n\n\u2022 Point C\n\u2022 Point D",200,D.vv,0.42,0.52,0.18))},
$S:0}
C.eEe.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdA().z,C.DH(858088427,0.62,C.cC(),D.bf,4280640491,2,0.42,0.05,0.18))
A.d.I(v.gdA().z,C.DH(856004201,0.62,C.cC(),D.bf,4278556265,2,0.42,0.53,0.18))
A.d.I(v.gdA().z,C.jc(A.bd,!1,w,A.aH,20,A.bq,A.H,0.1,C.cC(),"Option A",0,D.dr,0.36,0.08,0.2))
A.d.I(v.gdA().z,C.jc(A.bd,!1,w,A.aH,20,A.bq,A.H,0.1,C.cC(),"Option B",0,D.dr,0.36,0.56,0.2))},
$S:0}
C.eEg.prototype={
$0(){var w=4279310375,v=this.a
A.d.I(v.gdA().z,C.DH(4294967295,0.36,C.cC(),D.bf,w,2,0.24,0.38,0.28))
A.d.I(v.gdA().z,C.jc(A.K,!1,w,A.aH,14,A.bq,A.a8,0.12,C.cC(),"[ QR CODE ]",0,D.dr,0.24,0.38,0.4))},
$S:0}
C.eEh.prototype={
$0(){return C.cm4(this.b,D.Ui,this.a.gqZ())},
$S:0}
C.eFC.prototype={
$1(d){var w=this.b,v=w.dy,u=!D.aaU.q(0,d),t=this.a
return t.bbD(d,v===d,A.b2,this.c,new C.eFB(t,u,d,w),u)},
$S:z+25}
C.eFB.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:p=t.b
if(p){w=3
break}else e=p
w=4
break
case 3:w=5
return B.b(t.a.oz(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}s=t.a
r=s.c
if(r==null){w=1
break}q=t.c
C.bH7(r,new C.eFA(s,t.d,q),q)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eFA.prototype={
$0(){return this.a.dc(new C.eFz(this.b,this.c))},
$S:0}
C.eFz.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eDV.prototype={
$0(){var w,v=this.a,u=v.gqZ(),t=C.t3(4294967295,null,0,0,null,C.cC(),D.n9,"","","",D.dr),s=this.b
C.cm4(t,s,u)
w=v.gdA()
if(w!=null&&s!==D.Eo){t.e=w.e
t.f=w.f}A.d.c9(v.e.r,v.f+1,t);++v.f
v.r=null},
$S:0}
C.eED.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q,p
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.a
p=q.c
if(p==null){w=1
break}s=q.a
r=s.c
s=s.d
w=3
return B.b(C.ive(p,q.d,s,new C.eEC(q),r),$async$$0)
case 3:w=q.c!=null?4:5
break
case 4:w=6
return B.b(q.uh(),$async$$0)
case 6:case 5:case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eEC.prototype={
$1(d){return this.boD(d)},
boD(d){var w=0,v=B.j(x.H),u=this,t
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:t=u.a
t.m(new C.eEB(t,d))
w=2
return B.b(t.uh(),$async$$1)
case 2:return B.h(null,v)}})
return B.i($async$$1,v)},
$S:z+89}
C.eEB.prototype={
$0(){var w,v,u
for(w=J.aT(this.b),v=this.a;w.C();){u=w.gP(w)
A.d.c9(v.d,0,u)}},
$S:0}
C.eEE.prototype={
$0(){return this.a.bNr()},
$S:0}
C.eEF.prototype={
$0(){return this.a.aTm("Class Presentation",!0)},
$S:0}
C.eEG.prototype={
$1(d){return d.w==="hati_kiapo_uongozi"},
$S:z+2}
C.eEH.prototype={
$1(d){return this.a.bOo(d.b,this.b,d.a)},
$S:z+90}
C.eFh.prototype={
$0(){var w,v=this.a
v.as=!1
w=v.c
w.toString
if(B.aE(w,A.bZ,x.w).w.a.a<900)v.w=v.r=null},
$S:0}
C.eHt.prototype={
$1(d){return new B.D(new B.Q(0,0,0,B.aE(d,A.eT,x.w).w.f.d),new B.e3(new C.eHs(this.a,this.b),null),null)},
$S:63}
C.eHs.prototype={
$2(d,e){return B.pm(new C.eHr(this.a,this.b,d,e),!1,0.52,0.9,0.34,!1,null)},
$S:745}
C.eHr.prototype={
$2(d,e){var w=this,v=null,u=w.b,t=u?A.av:A.c,s=B.K(u?A.bw:A.bm,A.r,1),r=B.p(v,v,A.f,v,v,new B.o(A.aT,v,v,B.l(99),v,v,A.n),v,4,v,v,v,v,v,40),q=x.p,p=w.a
return B.p(v,B.x(B.a([A.T,r,new B.D(A.an8,B.A(B.a([B.d("Format",v,v,v,v,v,v,B.m(v,v,u?A.c:A.a_,v,v,v,v,v,v,v,v,17,v,v,A.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.b3,B.bO(!1,A.B9,v,v,!0,v,v,v,new C.eHp(w.c),v,v)],q),A.l,v,A.e,A.h,0,v,v),v),B.E(B.cw(B.a([p.aW9(u,!0,!0,new C.eHq(p,w.d))],q),e,v,D.bE2,v,v,A.ah,!1),1)],q),A.l,v,A.e,A.h,0,A.p),A.f,v,v,new B.o(t,v,s,A.lf,v,v,A.n),v,v,v,v,v,v,v,v)},
$S:119}
C.eHp.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eHq.prototype={
$0(){this.b.$1(new C.eHn())
var w=this.a
if(w.c!=null)w.m(new C.eHo())},
$S:0}
C.eHn.prototype={
$0(){},
$S:0}
C.eHo.prototype={
$0(){},
$S:0}
C.eJ1.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:88}
C.eJ2.prototype={
$4(d,e,f,g){var w=A.cj.az(0,e.gp(0))
return B.d3(B.e4(A.z,new C.aBf(this.b,this.a.a.d,null),0.94+w*0.06,null,null),w)},
$S:257}
C.eJ3.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:88}
C.eJ4.prototype={
$4(d,e,f,g){var w=A.cj.az(0,e.gp(0))
return B.d3(B.e4(A.z,new C.bfR(this.a.b,null),0.94+w*0.06,null,null),w)},
$S:257}
C.eJ5.prototype={
$0(){return A.d.c9(this.a.d,0,C.Xm(this.b))},
$S:0}
C.eE_.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=this.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.az(0,o)
o=B.l(22)
v=B.l(22)
u=this.b
t=x.O
s=u?B.a([A.c.j(0.1+w*0.04),A.av.j(0.72)],t):B.a([A.c.j(0.88),A.qj.j(0.75)],t)
r=B.K(A.b_.j(0.28+w*0.22),A.r,1.3)
q=w*0.2
t=B.a([A.b_.j(0.35+q),A.ci.j(0.18),A.L],t)
q=B.K(A.b_.j(0.45+q),A.r,1)
t=B.p(p,B.W(A_.Pw,u?A.ab:A.a_,p,p,p,28),A.f,p,p,new B.o(p,p,q,p,p,new B.bS(A.z,0.5,A.x,p,0,t,p,p),A.a6),p,58,p,p,p,p,p,58)
q=B.d("No presentations yet",p,p,p,p,p,p,B.m(p,p,u?A.c:A.a_,p,p,p,p,p,p,p,p,p,p,p,A.H,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)
return B.bu(o,B.uC(A.fk,B.p(p,B.x(B.a([t,A.aB,q,A.am,B.d(y.K,p,p,p,p,p,p,B.m(p,p,u?A.aF:A.an,p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),A.K,p,p)],x.p),A.l,p,A.e,A.h,0,A.p),A.f,p,p,new B.o(p,p,r,v,p,new B.a7(A.ay,A.aC,A.x,s,p,p),A.n),p,p,p,p,A.eA,p,p,1/0),14,!1),A.aq)},
$S:358}
C.eF5.prototype={
$1(d){return A.a.i(d)},
$S:13}
C.eF6.prototype={
$1(d){return d.length!==0},
$S:3}
C.eF7.prototype={
$1(d){var w
if(A.a.a_(d,"Updated"))w=A.ke
else{w=B.ag("^\\d+ slides?$",!0,!1,!1,!1)
w=w.b.test(d)?A.a3F:A.D1}return w},
$S:504}
C.eFa.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a,j=k.fy
j===$&&B.c()
j=j.x
j===$&&B.c()
w=m.b
v=A.dH.az(0,A.i.F(j+w*0.12,1))
j=m.c
u=j?l:new B.o(l,l,l,B.l(20),A.IN,l,A.n)
t=B.l(20)
s=m.d
r=B.l(20)
if(j)q=B.a([A.c.j(0.1+v*0.04),A.av.j(0.78)],x.O)
else{q=(A.o.ar(w,1)&1)===0
p=B.ap(A.c,q?A.aG:A.bh,0.1)
p.toString
o=B.ap(A.c,q?A.aG:A.bh,0.24)
o.toString
o=B.a([p,o],x.O)
q=o}p=!j
if(p)o=B.VQ((A.o.ar(w,1)&1)===0?A.aG:A.bh,!0)[0].j(0.75)
else o=A.d.gH(m.e).j(0.34+v*0.22)
o=B.K(o,A.r,p?1.5:1.25)
n=B.l(10)
if(j)w=m.e
else{w=(A.o.ar(w,1)&1)===0
p=B.VQ(w?A.aG:A.bh,!0)[0]
p=B.a([p,B.VQ(w?A.aG:A.bh,!0)[1]],x.O)
w=p}w=B.p(l,B.W(C.km(s.w)?A.tg:A.qV,A.c,l,l,l,22),A.f,l,l,new B.o(l,l,l,n,l,new B.a7(A.a5,A.a9,A.x,w,l,l),A.n),l,36,l,l,l,l,l,52)
p=s.b
p=B.d(p.toUpperCase(),l,l,l,l,l,l,B.m(l,l,j?A.c:A.a_,l,l,l,l,l,l,l,l,l,l,l,A.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
n=s.w
if(n==="marriage_agreement")n="Hati ya Kuhowesha \u2022 Updated "+k.QS(s.f)
else if(n==="hati_kuhowa")n="Hati ya Kuhowa \u2022 Updated "+k.QS(s.f)
else if(n==="hati_kuhoweya")n="Hati ya Kuhoweya \u2022 Updated "+k.QS(s.f)
else if(n==="hati_kiapo_uongozi"){n=s.x
if(A.a.i(n==null?"":n).length===0)n="Civic Registry"
n="Kiapo cha Uongozi \u2022 "+B.w(n)+" \u2022 Updated "+k.QS(s.f)}else n=""+s.r.length+" slides \u2022 Updated "+k.QS(s.f)
n=k.bOl(n,A.d.gH(m.e),j)
return B.p(l,B.bu(t,new B.a9k(B.aG(!1,A.a3,!0,l,B.aM(!1,l,!0,B.p(l,B.dJ(!1,A.H4,l,l,!0,l,l,l,!0,l,l,w,l,l,l,l,l,!1,l,l,l,l,l,n,l,p,l,B.aI(l,l,l,l,B.W(A.oI,j?A.aF:A.bP,l,l,l,l),l,l,l,new C.eF8(k,s,j),l,l,l,l,"Project options",l),l),A.f,l,l,new B.o(l,l,o,r,l,new B.a7(A.ay,A.aC,A.x,q,l,l),A.n),l,l,l,l,l,l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,new C.eF9(k,s),l,l,l,l,l,l,l),A.f,A.L,0,l,l,l,l,l,A.ai),l),A.aq),A.f,l,l,u,l,l,l,A.kA,l,l,l,l)},
$S:81}
C.eF9.prototype={
$0(){return this.a.agQ(this.b)},
$S:0}
C.eF8.prototype={
$0(){return this.a.BA(this.b,this.c)},
$S:0}
C.eGC.prototype={
$0(){var w=this.a
w.ba9()
w.m(new C.eGB())},
$S:0}
C.eGB.prototype={
$0(){},
$S:0}
C.eGD.prototype={
$1(d){return this.a.akS(this.b.a,d)},
$S:2}
C.eGE.prototype={
$0(){this.a.dc(new C.eGA(this.b))},
$S:0}
C.eGA.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cD:A.O},
$S:0}
C.eGF.prototype={
$0(){this.a.dc(new C.eGz(this.b))},
$S:0}
C.eGz.prototype={
$0(){var w=this.a
return w.y=w.y===A.cJ?A.bq:A.cJ},
$S:0}
C.eGG.prototype={
$0(){this.a.dc(new C.eGy(this.b))},
$S:0}
C.eGy.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.ne},
$S:0}
C.eGH.prototype={
$0(){this.a.dc(new C.eGx(this.b))},
$S:0}
C.eGx.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eGI.prototype={
$0(){var w=this.a
w.dc(new C.eGw(w,this.b))},
$S:0}
C.eGw.prototype={
$0(){var w=this.b
return w.as=this.a.c92(w.as)},
$S:0}
C.eGJ.prototype={
$0(){return this.a.dc(new C.eGv(this.b))},
$S:0}
C.eGv.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eGK.prototype={
$0(){return this.a.dc(new C.eGu(this.b))},
$S:0}
C.eGu.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eGn.prototype={
$0(){return this.a.a3u(this.b.a)},
$S:0}
C.eGo.prototype={
$0(){this.a.a10()
return null},
$S:0}
C.eGp.prototype={
$0(){var w=this.a,v=w.c
v.toString
if(B.aE(v,A.bZ,x.w).w.a.a<900)w.ah8()
else w.m(new C.eGm(w))},
$S:0}
C.eGm.prototype={
$0(){return this.a.as=!0},
$S:0}
C.eGq.prototype={
$0(){this.a.dc(new C.eGl(this.b))},
$S:0}
C.eGl.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cD:A.O},
$S:0}
C.eGr.prototype={
$0(){return this.a.dc(new C.eGk(this.b))},
$S:0}
C.eGk.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eGs.prototype={
$0(){return this.a.dc(new C.eGj(this.b))},
$S:0}
C.eGj.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eGt.prototype={
$0(){return this.a.aCn(null)},
$S:0}
C.eFu.prototype={
$0(){this.a.AG()
return null},
$S:0}
C.eFv.prototype={
$0(){this.a.AG()
return null},
$S:0}
C.eFw.prototype={
$0(){this.a.abB()
return null},
$S:0}
C.eFy.prototype={
$1(d){return this.boE(d)},
boE(d){var w=0,v=B.j(x.H),u,t=this,s,r,q,p,o,n,m,l
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
return B.b(t.a.KN(),$async$$1)
case 10:w=4
break
case 6:s=t.a
r=s.e
if(r==null){w=1
break}q=s.c
q.toString
w=11
return B.b(B.bT(A.av,null,new C.eFp(r),q,!0,!0,!1,null,!1,!1,x.S),$async$$1)
case 11:p=f
if(p!=null)s.dc(new C.eFq(r,p))
w=4
break
case 7:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eFr(r))
s=s.c.L(x.q).f
s.T(B.b2(null,null,null,null,null,A.t,null,B.d(r.ay?"Video motion on \u2014 press Play to watch it like a video.":"Video motion off.",null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 8:s=t.a
r=s.e
if(r==null){w=1
break}s.dc(new C.eFs(r))
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
return B.b(C.hIu(q,new C.Fn(o,n,m,l==null?"":l)),$async$$1)
case 12:p=f
if(p==null||s.c==null){w=1
break}s.dc(new C.eFt(r,p))
s=s.c.L(x.q).f
q=p.a
if(q.length===0)q="No ending celebration."
else{q=C.aiq(q)
q=B.w(q==null?null:q.b)+" will play after your last slide."}s.T(B.b2(null,null,null,null,null,A.t,null,B.d(q,null,null,null,null,null,null,null,null,null,null),null,A.Y,null,null,null,null,null,null,null,null,null,null))
w=4
break
case 4:case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:100}
C.eFp.prototype={
$1(d){var w,v,u,t,s,r,q,p=null,o=B.a([D.exT],x.p)
for(w=[3,5,8,10,15,20,30,60],v=w.length,u=this.a,t=0;t<v;++t){s=w[t]
r=B.d(""+s+" seconds",p,p,p,p,p,p,A.dk,p,p,p)
q=u.e===s?D.bZv:p
o.push(B.dJ(!1,p,p,p,!0,p,p,p,!0,p,p,p,p,p,p,p,new C.eFo(d,s),!1,p,p,p,p,p,p,p,r,p,q,p))}return B.bm(!0,B.x(o,A.l,p,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eFo.prototype={
$0(){B.a6(this.a,!1).N(this.b)
return null},
$S:0}
C.eFq.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eFr.prototype={
$0(){var w=this.a
return w.ay=!w.ay},
$S:0}
C.eFs.prototype={
$0(){var w=this.a
return w.ch=!w.ch},
$S:0}
C.eFt.prototype={
$0(){var w=this.a,v=this.b,u=v.a
w.db=u.length===0?null:u
w.dx=v.b
w.dy=v.c
v=v.d
w.fr=v.length===0?null:v},
$S:0}
C.eFx.prototype={
$1(d){var w,v,u,t=null,s=this.a.e,r=s==null,q=r?t:s.e,p=x.N
q=B.Am(B.d("Timer: "+(q==null?5:q)+"s",t,t,t,t,t,t,t,t,t,t),48,"timer",p)
w=r?t:s.ay
v=B.Am(B.d("Video motion: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"motion",p)
w=r?t:s.ch
u=B.Am(B.d("Non-stop loop: "+(w===!0?"On":"Off"),t,t,t,t,t,t,t,t,t,t),48,"loop",p)
s=C.aiq(r?t:s.db)
s=s==null?t:s.b
return B.a([D.eDp,q,v,u,B.Am(B.d("Ending celebration: "+(s==null?"None":s),t,t,t,t,t,t,t,t,t,t),48,"finale",p)],x.gx)},
$S:144}
C.eJN.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bGj(w,v)}},
$S:0}
C.eJO.prototype={
$0(){this.a.AG()
return null},
$S:0}
C.eGN.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.z===d,r=B.l(999),q=s?D.c9r:u
if(s)w=u
else w=this.b?A.c.j(0.05):A.ch
if(s)v=A.c
else v=this.b?A.aR:A.by
return new B.D(A.f1,B.az(u,B.cT(u,B.d(d,u,u,u,u,u,u,B.m(u,u,v,u,u,u,u,u,u,u,u,12,u,u,A.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),u,u,A.b0,new B.o(w,u,u,r,u,q,A.n),A.eH,u,u,u,u,A.lP,u,u,u),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,new C.eGM(t,d),u,u,u,u,u,u,!1,A.a4),u)},
$S:140}
C.eGM.prototype={
$0(){var w=this.a
return w.m(new C.eGL(w,this.b))},
$S:0}
C.eGL.prototype={
$0(){return this.a.z=this.b},
$S:0}
C.eGO.prototype={
$1(d){var w,v,u=null,t=this.a,s=t.e
if(s==null)s=u
else{s=s.CW
s=(s==null?"":s).length!==0}w=s===!0
v=w?G.a6J:E.aCo
s=w?"Tell the AI what to change or add":"Type it \u2014 AI creates the slides"
t=w?t.gbRX():t.gbNM()
return B.hc(B.az(u,B.p(u,D.asf,A.f,u,u,new B.o(u,u,u,u,B.a([new B.ab(0,A.G,A.d.gH(v).j(0.45),A.J,10)],x.V),new B.a7(A.a5,A.a9,A.x,v,u,u),A.a6),u,34,u,u,u,u,u,34),A.y,!1,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,t,u,u,u,u,u,u,!1,A.a4),u,s,u,u)},
$S:1735}
C.eGP.prototype={
$0(){var w=this.a,v=w.c
v.toString
return C.ius(v,w.a.c)},
$S:0}
C.eIb.prototype={
$0(){return this.b.vU(this.a.a)},
$S:0}
C.eIc.prototype={
$0(){return this.a.vU(D.n9)},
$S:0}
C.eId.prototype={
$0(){return this.a.vU(D.JC)},
$S:0}
C.eIo.prototype={
$0(){return this.a.vU(D.JD)},
$S:0}
C.eIz.prototype={
$0(){return this.a.vU(D.JB)},
$S:0}
C.eIK.prototype={
$0(){return this.a.qK("lab_report")},
$S:0}
C.eIR.prototype={
$0(){return this.a.qK("rubric")},
$S:0}
C.eIS.prototype={
$0(){return this.a.qK("minutes")},
$S:0}
C.eIT.prototype={
$0(){return this.a.qK("agenda")},
$S:0}
C.eIU.prototype={
$0(){return this.a.qK("timeline")},
$S:0}
C.eIV.prototype={
$0(){return this.a.qK(this.b.a)},
$S:0}
C.eIe.prototype={
$0(){this.a.WN()
return null},
$S:0}
C.eIf.prototype={
$0(){this.a.WH()
return null},
$S:0}
C.eIg.prototype={
$0(){return this.a.qK("table")},
$S:0}
C.eIh.prototype={
$0(){return this.a.qK("sticky")},
$S:0}
C.eIi.prototype={
$0(){return this.a.qK("divider")},
$S:0}
C.eIj.prototype={
$0(){return this.a.qK("header_bar")},
$S:0}
C.eIk.prototype={
$0(){return this.a.pz(D.bf)},
$S:0}
C.eIl.prototype={
$0(){return this.a.pz(D.eX)},
$S:0}
C.eIm.prototype={
$0(){return this.a.pz(D.kk)},
$S:0}
C.eIn.prototype={
$0(){return this.a.pz(D.Ep)},
$S:0}
C.eIp.prototype={
$0(){return this.a.pz(D.kl)},
$S:0}
C.eIq.prototype={
$0(){return this.a.pz(D.lx)},
$S:0}
C.eIr.prototype={
$0(){return this.a.pz(D.fP)},
$S:0}
C.eIs.prototype={
$0(){this.a.HZ()
return null},
$S:0}
C.eIt.prototype={
$0(){this.a.Oa()
return null},
$S:0}
C.eIu.prototype={
$0(){return this.a.qK("quote")},
$S:0}
C.eIv.prototype={
$0(){return this.a.a9J()},
$S:0}
C.eIw.prototype={
$0(){this.a.a16()
return null},
$S:0}
C.eIx.prototype={
$0(){var w=this.a
return w.m(new C.eI1(w))},
$S:0}
C.eI1.prototype={
$0(){return this.a.Q=!1},
$S:0}
C.eIy.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
w=3
return B.b(s.oz(),$async$$0)
case 3:if(!e){w=1
break}if(s.c==null){w=1
break}s.m(new C.eI9(s))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eI9.prototype={
$0(){return this.a.Q=!0},
$S:0}
C.eIA.prototype={
$1(d){var w,v,u,t,s=null,r=this.a,q=r.e
q=q==null?s:q.c
w=d.a
v=q===w&&r.kf()==null&&!r.Q
q=A.a.i(w)
w=d.b
if(D.aaW.q(0,q))w+=" (Pro)"
u=d.r
if(u==null)u=d.c
u=B.a([d.f,u],x.O)
t=v?d.c:A.aT
u=B.a([B.p(s,s,A.f,s,s,new B.o(s,s,B.K(t,A.r,v?2.5:1),s,s,new B.a7(A.a5,A.a9,A.x,u,s,s),A.a6),s,26,s,s,s,s,s,26)],x.p)
if(D.aaW.q(0,q))u.push(B.ao(s,B.p(s,D.Qh,A.f,s,s,D.FI,s,12,s,s,s,s,s,12),s,s,s,-2,-2,s))
return new B.D(A.f1,B.az(s,B.hc(new B.an(A.a0,s,A.ad,A.f,u,s),s,w,s,s),A.y,!1,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,s,new C.eI8(r,d),s,s,s,s,s,s,!1,A.a4),s)},
$S:z+91}
C.eI8.prototype={
$0(){this.a.a9Z(this.b)
return null},
$S:0}
C.eIB.prototype={
$0(){this.a.a9Y(this.b)
return null},
$S:0}
C.eIC.prototype={
$1(d){var w,v,u,t,s,r=null,q=C.i_D(d),p=this.a,o=B.l(8),n=p.gdA()
n=n==null?r:n.x
w=d.a
n=n===w?A.bo:A.aT
v=p.gdA()
n=B.K(n,A.r,(v==null?r:v.x)===w?2.5:1)
u=B.l(8)
t=B.l(7)
s=C.t3(4294967295,r,0,0,r,"preview_"+w,D.r5,"","","",D.dr)
C.hF1(s,w)
w=x.p
u=B.a([B.bu(o,B.p(r,B.bu(t,C.hGn(s),A.aq),A.f,r,r,new B.o(r,r,n,u,r,r,A.n),r,44,r,r,r,r,r,72),A.aq)],w)
if(q)u.push(B.ao(r,B.p(r,D.asR,A.f,r,r,D.FI,r,14,r,r,r,r,r,14),r,r,r,2,2,r))
return new B.D(A.iS,B.az(r,B.x(B.a([new B.an(A.a0,r,A.ad,A.t,u,r),A.cR,B.d(d.b,r,r,r,r,r,r,B.m(r,r,this.b?A.aF:A.an,r,r,r,r,r,r,r,r,9,r,r,A.O,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],w),A.l,r,A.e,A.h,0,A.p),A.y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.eI7(p,q,d),r,r,r,r,r,r,!1,A.a4),r)},
$S:z+92}
C.eI7.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a
r=s.gdA()
if(r==null){w=1
break}q=t.b||s.Q
if(q){w=3
break}else e=q
w=4
break
case 3:w=5
return B.b(s.oz(),$async$$0)
case 5:e=!e
case 4:if(e){w=1
break}if(s.c==null){w=1
break}s.dc(new C.eHY(r,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eHY.prototype={
$0(){return C.hF1(this.a,this.b.a)},
$S:0}
C.eIa.prototype={
boF(d,e){var w=0,v=B.j(x.H),u,t=this,s
var $async$$2=B.e(function(f,g){if(f===1)return B.f(g,v)
for(;;)switch(w){case 0:s=!D.aaU.q(0,d)
if(s){w=3
break}else g=s
w=4
break
case 3:w=5
return B.b(t.a.oz(),$async$$2)
case 5:g=!g
case 4:if(g){w=1
break}if(t.a.c==null){w=1
break}e.$0()
case 1:return B.h(u,v)}})
return B.i($async$$2,v)},
$2(d,e){return this.boF(d,e)},
$S:z+93}
C.eIW.prototype={
$4(d,e,f,g){var w=null,v=B.U(d).k("N<1,v>")
v=B.C(new B.N(d,new C.eIY(this.a,e,g,this.b,f),v),v.k("ak.E"))
return B.c9(B.A(v,A.l,w,A.e,A.h,0,w,w),A.t,w,A.y,w,w,w,w,w,A.aM)},
$S:z+94}
C.eIY.prototype={
$1(d){var w=this
return w.a.bbD(d,w.b===d,w.c,w.d,new C.eIX(w.e,d),!D.aaU.q(0,d))},
$S:z+25}
C.eIX.prototype={
$0(){return this.a.$1(this.b)},
$S:0}
C.eID.prototype={
$1(d){this.b.$2(d,new C.eI6(this.a,d,this.c))
return null},
$S:z+26}
C.eI6.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.bH7(u,new C.eHX(v,this.c,w),w)},
$S:0}
C.eHX.prototype={
$0(){return this.a.dc(new C.eHV(this.b,this.c))},
$S:0}
C.eHV.prototype={
$0(){return this.a.dy=this.b},
$S:0}
C.eIE.prototype={
$1(d){this.b.$2(d,new C.eI5(this.a,d))
return null},
$S:z+26}
C.eI5.prototype={
$0(){var w,v=this.a,u=v.c
u.toString
w=this.b
return C.h5H(u,new C.eHW(v,w),w)},
$S:0}
C.eHW.prototype={
$0(){var w=this.a
return w.dc(new C.eHU(w,this.b))},
$S:0}
C.eHU.prototype={
$0(){return this.a.gdA().r=this.b},
$S:0}
C.eIF.prototype={
$0(){var w=this.a
return w.m(new C.eI4(w))},
$S:0}
C.eI4.prototype={
$0(){var w=this.a
return w.y=!w.y},
$S:0}
C.eIG.prototype={
$0(){var w=this.a,v=w.e
if(v!=null){w=w.c
w.toString
C.bGj(w,v)}},
$S:0}
C.eIH.prototype={
$0(){this.a.IL()
return null},
$S:0}
C.eII.prototype={
$0(){return this.a.a9J()},
$S:0}
C.eIJ.prototype={
$0(){var w=this.a,v=w.kf()
if(v!=null&&v.b===D.d3)w.dc(new C.eI3(v))},
$S:0}
C.eI3.prototype={
$0(){var w=this.a
w.f=A.i.D(w.f*1.25,0.08,1.8)
w.e=A.i.D(w.e*1.1,0.08,1.8)},
$S:0}
C.eIL.prototype={
$0(){this.a.AG()
return null},
$S:0}
C.eIM.prototype={
$0(){var w=this.a,v=w.e
v.toString
w.FV(v,!0)
return null},
$S:0}
C.eIN.prototype={
$0(){this.a.dc(new C.eI2(this.b))},
$S:0}
C.eI2.prototype={
$0(){var w=this.a
return w.x=w.x.A(0,A.O)?A.cD:A.O},
$S:0}
C.eIO.prototype={
$0(){this.a.dc(new C.eI0(this.b))},
$S:0}
C.eI0.prototype={
$0(){var w=this.a
return w.y=w.y===A.cJ?A.bq:A.cJ},
$S:0}
C.eIP.prototype={
$0(){this.a.dc(new C.eI_(this.b))},
$S:0}
C.eI_.prototype={
$0(){var w=this.a,v=w.z
return w.z=1===v.a?A.aH:A.ne},
$S:0}
C.eIQ.prototype={
$0(){this.a.dc(new C.eHZ(this.b))},
$S:0}
C.eHZ.prototype={
$0(){var w=this.a
return w.cy=!w.cy},
$S:0}
C.eEy.prototype={
$1(d){return this.boC(d)},
boC(d){var w=0,v=B.j(x.H),u,t=this,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:r=t.b
if(r){w=3
break}else f=r
w=4
break
case 3:w=5
return B.b(t.a.oz(),$async$$1)
case 5:f=!f
case 4:if(f){w=1
break}s=t.a
if(s.c==null){w=1
break}s.dc(new C.eEx(s,t.c))
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$S:181}
C.eEx.prototype={
$0(){return this.a.e.d=this.b},
$S:0}
C.eJi.prototype={
$0(){var w=this.a
return w.dc(new C.eJh(w,this.b))},
$S:0}
C.eJh.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u-1,1,120)},
$S:0}
C.eJj.prototype={
$0(){var w=this.a
return w.dc(new C.eJg(w,this.b))},
$S:0}
C.eJg.prototype={
$0(){var w,v=this.b,u=v.w
if(!(u>0)){w=this.a.e
w=w==null?null:w.e
u=w==null?5:w}v.w=A.o.D(u+1,1,120)},
$S:0}
C.eFI.prototype={
$0(){return this.a.dc(new C.eFH(this.b))},
$S:0}
C.eFH.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w-2,10,96)},
$S:0}
C.eFJ.prototype={
$0(){return this.a.dc(new C.eFG(this.b))},
$S:0}
C.eFG.prototype={
$0(){var w=this.a
return w.w=A.i.D(w.w+2,10,96)},
$S:0}
C.eGf.prototype={
$1(d){var w=x.gh
w=B.C(new B.N(D.auB,new C.eGe(),w),w.k("ak.E"))
return w},
$S:z+96}
C.eGe.prototype={
$1(d){var w=null
return B.Am(B.d(d.b,w,w,w,w,w,w,A.lZ,w,w,w),48,d,x.fO)},
$S:z+97}
C.eJv.prototype={
$2(d,e){var w=this.a,v=w?0:8
return new B.a5(v,w?8:0,null,null)},
$S:38}
C.eJu.prototype={
$2(d,e){var w,v,u,t,s,r=this,q=null,p=r.a,o=e===p.f,n=p.kz()?q:new C.eJs(p,r.b,d,e),m=r.c,l=m?1/0:112
m=m?72:64
w=B.l(8)
if(o)v=A.bo
else v=r.d?A.aT:A.cA
v=B.K(v,A.r,o?2:1)
u=r.d?A.ct:A.c
t=B.bR(0,C.hGn(r.b.r[e]),0,0,0)
s=B.l(4)
return B.az(q,B.p(q,new B.an(A.a0,q,A.ad,A.t,B.a([t,B.ao(4,B.p(q,B.d(""+(e+1),q,q,q,q,q,q,A.o2,q,q,q),A.f,q,q,new B.o(A.b5,q,q,s,q,q,A.n),q,q,q,q,A.ao7,q,q,q),q,q,4,q,q,q)],x.p),q),A.f,q,q,new B.o(u,q,v,w,q,q,A.n),q,m,q,q,q,q,q,l),A.y,!1,q,q,q,q,q,q,q,q,n,q,q,q,q,q,q,q,q,q,q,q,q,q,q,new C.eJt(p,e),q,q,q,q,q,q,!1,A.a4)},
$S:83}
C.eJt.prototype={
$0(){var w=this.a
return w.m(new C.eJo(w,this.b))},
$S:0}
C.eJo.prototype={
$0(){var w=this.a
w.f=this.b
w.r=null
w.KW()},
$S:0}
C.eJs.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s,r,q
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:q=t.b
if(q.r.length<=1){w=1
break}s=t.d
w=3
return B.b(B.bT(null,null,new C.eJp(s,q),t.c,!0,!0,!1,null,!1,!1,x.N),$async$$0)
case 3:r=e
if(r==="dup"){q=t.a
q.m(new C.eJq(q,s))
q.aUR()}else if(r==="del"){q=t.a
q.m(new C.eJr(q,s))
q.aTX()}else if(r==="up")t.a.b6C(s,s-1)
else if(r==="down")t.a.b6C(s,s+1)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eJp.prototype={
$1(d){var w=null,v=B.a([B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c0h,w,w,w,w,new C.eJk(d),!1,w,w,w,w,w,w,w,D.fLL,w,w,w),B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c0a,w,w,w,w,new C.eJl(d),!1,w,w,w,w,w,w,w,A.xH,w,w,w)],x.p),u=this.a
if(u>0)v.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c_o,w,w,w,w,new C.eJm(d),!1,w,w,w,w,w,w,w,D.fUf,w,w,w))
if(u<this.b.r.length-1)v.push(B.dJ(!1,w,w,w,!0,w,w,w,!0,w,w,D.c1z,w,w,w,w,new C.eJn(d),!1,w,w,w,w,w,w,w,D.fLz,w,w,w))
return B.bm(!0,B.x(v,A.l,w,A.e,A.N,0,A.p),!0,!1,A.ag,!0,!0)},
$S:27}
C.eJk.prototype={
$0(){B.a6(this.a,!1).N("dup")
return null},
$S:0}
C.eJl.prototype={
$0(){B.a6(this.a,!1).N("del")
return null},
$S:0}
C.eJm.prototype={
$0(){B.a6(this.a,!1).N("up")
return null},
$S:0}
C.eJn.prototype={
$0(){B.a6(this.a,!1).N("down")
return null},
$S:0}
C.eJq.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJr.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eJw.prototype={
$0(){return this.a.a9J()},
$S:0}
C.eEZ.prototype={
$0(){var w=this.a
w.ba9()
w.aCn(null)},
$S:0}
C.eEY.prototype={
$2(d,e){var w,v,u,t,s,r,q,p=null,o=B.l(4),n=B.a([new B.ab(0,A.G,A.w.j(0.35),A.dp,24)],x.V),m=this.b
if(m.f!=null){w=B.b1(m.e)
v=m.f
v.toString
v=new B.a7(A.ay,A.aC,A.x,B.a([w,B.b1(v)],x.O),p,p)
w=v}else w=p
v=m.f==null?B.b1(m.e):p
u=m.x
t=m.y
s=B.l(4)
if(m.f!=null){r=B.b1(m.e)
q=m.f
q.toString
q=new B.a7(A.ay,A.aC,A.x,B.a([r,B.b1(q)],x.O),p,p)
r=q}else r=p
s=B.a([B.bu(s,new B.bM(new B.o(m.f==null?B.b1(m.e):p,p,p,p,p,r,A.n),A.bk,A.la,p),A.aq)],x.p)
r=m.z
q=this.c
A.d.u(s,new B.N(r,new C.eEX(this.a,e.b,e.d,q),B.U(r).k("N<1,v>")))
if(m.z.length===0)s.push(B.as(B.d("Use Insert \u2192 Text Box, Picture, or Shapes",p,p,p,p,p,p,B.m(p,p,q?A.aF:A.bP,p,p,p,p,p,p,p,p,p,p,p,A.a8,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p))
return new B.bM(new B.o(v,p,p,o,n,w,A.n),A.bk,new B.an(A.a0,p,A.ad,A.f,s,new B.bf("canvas_"+m.a+"_"+u+"_"+t,x.W)),p)},
$S:439}
C.eEX.prototype={
$1(d){var w=this
return w.a.bJI(d,w.b,w.c,w.d)},
$S:z+23}
C.eEM.prototype={
$0(){var w=this
if(w.b){w.a.Oi(w.c)
return}if(w.d){w.a.a9H(w.c)
return}if(w.e){w.a.air(w.c)
return}if(w.f)w.a.baI(w.c)},
$S:0}
C.eEN.prototype={
$0(){this.a.Oi(this.b)
return null},
$S:0}
C.eEO.prototype={
$0(){return this.a.a3u(this.b.a)},
$S:0}
C.eEP.prototype={
$1(d){var w=this,v=w.a,u=w.b
if(v.w===u.a)return
v.m(new C.eEL(u,d,w.c,w.d))
v.Ip()
v.oL()
v.pS()},
$S:19}
C.eEL.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.c=A.i.D(v.c+u.a/w.c,-0.3,1.2)
v.d=A.i.D(v.d+u.b/w.d,-0.3,1.2)},
$S:0}
C.eEQ.prototype={
$1(d){return this.a.akS(this.b.a,d)},
$S:2}
C.eES.prototype={
$0(){var w,v,u=this
if(u.b){w=u.c
if(!C.hiC(w))u.a.Oi(w)
return}if(!u.d)return
w=u.a
v=u.c
if(w.w===v.a)return
w.baI(v)},
$S:0}
C.eER.prototype={
$0(){return this.a.a3u(this.b.a)},
$S:0}
C.eET.prototype={
$1(d){var w=this,v=w.a
v.m(new C.eEK(w.b,d,w.c,w.d))
v.Ip()
v.oL()
v.pS()},
$S:19}
C.eEK.prototype={
$0(){var w=this,v=w.a,u=w.b.d
v.e=A.i.D(v.e+u.a/w.c,0.04,1.8)
u=u.b
v.f=A.i.D(v.f+u/w.d,0.04,1.8)
if(v.b===D.d3)v.w=A.i.D(v.w+u*0.15,10,120)},
$S:0}
C.eEU.prototype={
$1(d){var w=this.a
w.m(new C.eEJ(this.b,d))
w.Ip()
w.oL()
w.pS()},
$S:223}
C.eEJ.prototype={
$0(){var w=this.a,v=this.b.d
w.e=A.i.D(w.e*v,0.04,1.8)
w.f=A.i.D(w.f*v,0.04,1.8)
if(w.b===D.d3)w.w=A.i.D(w.w*v,10,120)},
$S:0}
C.eEV.prototype={
$0(){var w=this.a
w.m(new C.eEI(this.b))
w.Ip()
w.oL()
w.pS()},
$S:0}
C.eEI.prototype={
$0(){this.a.r=C.his()},
$S:0}
C.eEW.prototype={
$0(){return this.a.a3u(this.b.a)},
$S:0}
C.eGR.prototype={
$0(){var w=this.a
return w.m(new C.eGQ(w))},
$S:0}
C.eGQ.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eGS.prototype={
$1(d){return this.a.cJk(this.b.a,d)},
$S:2}
C.eFW.prototype={
$1(d){var w
this.a.dc(d)
w=this.b
if(w!=null)w.$0()},
$S:168}
C.eFX.prototype={
$1(d){return this.a.$1(new C.eFV(this.b,d))},
$S:6}
C.eFV.prototype={
$0(){return this.a.e=this.b},
$S:0}
C.eFY.prototype={
$1(d){return this.a.$1(new C.eFU(this.b,d))},
$S:6}
C.eFU.prototype={
$0(){return this.a.f=this.b},
$S:0}
C.eFZ.prototype={
$1(d){return this.a.$1(new C.eFT(this.b,d))},
$S:6}
C.eFT.prototype={
$0(){return this.a.w=this.b},
$S:0}
C.eG_.prototype={
$1(d){return this.a.$1(new C.eFS(this.b,d))},
$S:6}
C.eFS.prototype={
$0(){return this.a.c=this.b},
$S:0}
C.eG0.prototype={
$1(d){return this.a.$1(new C.eFR(this.b,d))},
$S:6}
C.eFR.prototype={
$0(){return this.a.d=this.b},
$S:0}
C.eG1.prototype={
$1(d){return this.b.$1(new C.eFQ(this.a,this.c))},
$S:9}
C.eFQ.prototype={
$0(){return this.b.go=this.a.a},
$S:0}
C.eG2.prototype={
$1(d){return this.b.$1(new C.eFP(this.a,this.c))},
$S:9}
C.eFP.prototype={
$0(){return this.b.id=this.a.a},
$S:0}
C.eG3.prototype={
$1(d){var w=null,v=this.b,u=B.b1(d),t=v.Q===d,s=t?A.bo:A.cC
return B.az(w,B.p(w,w,A.f,w,w,new B.o(u,w,B.K(s,A.r,t?2:1),w,w,w,A.a6),w,24,w,w,w,w,w,24),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eFO(this.a,v,d),w,w,w,w,w,w,!1,A.a4)},
$S:406}
C.eFO.prototype={
$0(){return this.a.$1(new C.eFL(this.b,this.c))},
$S:0}
C.eFL.prototype={
$0(){return this.a.Q=this.b},
$S:0}
C.eG4.prototype={
$1(d){return this.a.$1(new C.eFN(this.b,d))},
$S:1736}
C.eFN.prototype={
$0(){var w=this.b
return this.a.as=w.gH(w)},
$S:0}
C.eG5.prototype={
$1(d){var w=null
return B.az(w,B.p(w,w,A.f,w,w,new B.o(B.b1(d),w,w,w,w,w,A.a6),w,22,w,w,w,w,w,22),A.y,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,new C.eFM(this.a,this.b,d),w,w,w,w,w,w,!1,A.a4)},
$S:406}
C.eFM.prototype={
$0(){return this.a.$1(new C.eFK(this.b,this.c))},
$S:0}
C.eFK.prototype={
$0(){return this.a.ay=this.b},
$S:0}
C.eG6.prototype={
$0(){var w,v=this
if(v.b){w=v.a.c
w.toString
w=B.a6(w,!1).q4()}else w=!1
if(w){w=v.a.c
w.toString
B.a6(w,!1).eq()}v.a.auP()},
$S:0}
C.eG9.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m=this,l=null,k=m.a.fy
k===$&&B.c()
k=k.x
k===$&&B.c()
w=A.dH.az(0,k)
k=B.l(16)
v=B.l(16)
u=B.P(d).ax.a===A.dm?A.aZ:A.ay
t=B.P(d).ax.a===A.dm?A.b4:A.aC
if(B.P(d).ax.a===A.dm)s=D.d5L
else{s=m.c
r=B.ap(s,A.b_,0.35+w*0.15)
r.toString
r=B.a([s,r],x.O)
s=r}r=B.K(A.c.j(0.3+w*0.2),A.r,1.2)
q=B.a([B.W(m.d,A.c,l,l,l,26)],x.p)
p=B.l(6)
o=m.c
n=B.K(o,A.r,1.2)
q.push(B.ao(2,B.p(l,B.W(A.vb,o,l,l,l,10),A.f,l,l,new B.o(A.c,l,n,p,l,l,A.n),l,l,l,l,A.nJ,l,l,l),l,l,l,2,l,l))
return B.aG(!1,A.a3,!0,l,B.aM(!1,k,!0,B.eC(new B.a5(48,48,new B.an(A.z,l,A.ad,A.t,q,l),l),l,new B.o(l,l,r,v,l,new B.a7(u,t,A.x,s,l,l),A.n),l,l,l),l,!0,l,l,l,l,l,l,l,l,l,l,l,m.b,l,l,l,l,l,l,l),A.f,A.L,0,l,A.L,l,l,l,A.ai)},
$S:148}
C.eDH.prototype={
$2(d,e){var w,v,u,t,s,r,q=this,p=null,o=q.a.fy
o===$&&B.c()
o=o.x
o===$&&B.c()
w=A.dH.az(0,o)
o=B.l(22)
v=B.l(22)
u=q.c
t=B.ap(u,A.b_,0.22+w*0.12)
t.toString
u=B.a([u,t,u.j(0.9)],x.O)
t=B.K(A.c.j(0.28+w*0.22),A.r,1.35)
s=A.c.j(0.14+w*0.08)
r=B.K(A.c.j(0.4+w*0.15),A.r,1)
return B.aG(!1,A.a3,!0,p,B.aM(!1,o,!0,B.eC(B.x(B.a([B.e4(A.z,B.p(p,B.W(q.d,A.c,p,p,p,26),A.f,p,p,new B.o(s,p,r,p,p,p,A.a6),p,48,p,p,p,p,p,48),1+w*0.06,p,p),A.af,B.d(q.e,p,p,p,p,p,p,A.j2,A.K,p,p)],x.p),A.l,p,A.b8,A.h,0,A.p),p,new B.o(p,p,t,v,p,new B.a7(A.ay,A.aC,A.x,u,p,p),A.n),p,A.CJ,1/0),p,!0,p,p,p,p,p,p,p,p,p,p,p,q.b,p,p,p,p,p,p,p),A.f,A.L,0,p,A.L,p,p,p,A.ai)},
$S:148}
C.eHO.prototype={
$1(d){var w=null,v=B.d(this.a,w,w,w,w,w,w,w,w,w,w),u=this.b,t=B.aN(w,A.Z,!0,w,!0,A.t,w,B.aO(),u,w,w,w,w,w,2,A.atK,A.y,!0,w,!0,w,!1,w,A.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,A.ac,w,w,w,w,w,w,w,w,w,w,w,w,!0,A.a7,w,A.ao,w,w,w,w)
return B.ek(B.a([B.bO(!1,A.ds,w,w,!0,w,w,w,new C.eHM(d),w,w),B.bI(A.ri,w,new C.eHN(d,u),w)],x.p),w,w,w,t,w,w,w,w,v,w)},
$S:18}
C.eHM.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eHN.prototype={
$0(){var w=this.b.a.a
B.a6(this.a,!1).N(w)
return null},
$S:0}
C.dbs.prototype={
$2(d,e){var w,v,u,t,s,r,q,p,o,n,m,l,k,j=null,i=this.a,h=i.d
h===$&&B.c()
h=h.x
h===$&&B.c()
w=A.dH.az(0,h)
h=i.e
h===$&&B.c()
v=h.x
v===$&&B.c()
u=A.ec.az(0,A.i.D(v,0,1))
h=h.x
h===$&&B.c()
h=A.e6.az(0,h)
v=B.l(22)
t=B.ap(A.aL,A.d.gH(C.km(i.a.c.w)?D.vo:K.nR),w*0.35)
t.toString
t=B.K(t,A.r,1.2)
s=x.V
r=B.a([new B.ab(w*2,A.G,A.d.gH(C.km(i.a.c.w)?D.vo:K.nR).j(0.18+w*0.12),A.J,32+w*10),D.afJ],s)
q=B.l(22)
p=x.O
o=B.ao(j,B.p(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bS(A.aZ,0.9,A.x,j,0,B.a([A.d.gH(C.km(i.a.c.w)?D.vo:K.nR).j(0.22+w*0.1),A.L],p),j,j),A.n),j,80,j,j,j,j,j,j),j,j,0,0,-28,j)
n=64+w*6
m=A.d.gH(C.km(i.a.c.w)?D.vo:K.nR).j(0.28+w*0.14)
p=B.p(j,j,A.f,j,j,new B.o(j,j,j,j,j,new B.bS(A.z,0.5,A.x,j,0,B.a([m,A.d.gal(C.km(i.a.c.w)?D.vo:K.nR).j(0.08),A.L],p),j,j),A.a6),j,n,j,j,j,j,j,n)
n=B.l(14)
m=i.a.c.w
l=C.km(m)?D.vo:K.nR
s=B.a([new B.ab(0,A.G,A.d.gH(C.km(m)?D.vo:K.nR).j(0.45+w*0.2),A.cz,18)],s)
m=x.p
l=B.a([p,B.e4(A.z,B.p(j,B.W(C.km(i.a.c.w)?A.tg:A.qV,A.c,j,j,j,22),A.f,j,j,new B.o(j,j,j,n,s,new B.a7(A.ay,A.aC,A.x,l,j,j),A.n),j,46,j,j,j,j,j,46),1+w*0.04,j,j)],m)
s=B.a([new B.an(A.z,j,A.ad,A.t,l,j),A.T,B.d("PRESENTATION",j,j,j,j,j,j,B.m(j,j,A.d.gH(C.km(i.a.c.w)?D.vo:K.nR).j(0.85+w*0.15),j,j,j,j,j,j,j,j,10,j,j,A.H,j,j,!0,j,1.4,j,j,j,j,j,j),A.K,j,j),A.fD,B.d(i.a.c.b,j,2,A.a2,j,j,j,D.fDf,A.K,j,j),A.ax,B.d(i.gcE6(),j,j,j,j,j,j,D.fIi,A.K,j,j),A.aB],m)
p=i.a.c
if(p.z){p=p.gTk()?"Shared by admin \xb7 editable for 4 hours":"Received copy \xb7 print or download only"
A.d.u(s,B.a([B.d(p,j,j,j,j,j,j,B.m(j,j,A.d.gH(C.km(i.a.c.w)?D.vo:K.nR).j(0.9),j,j,j,j,j,j,j,j,11,j,j,A.O,j,j,!0,j,j,j,j,j,j,j,j),A.K,j,j),A.af],m))}s.push(new C.KM(A.zm,"Download PDF","pdf",A.d9,i.JJ(0),!1,j))
p=i.a.c
if(!p.z||p.gTk()){p=i.a.c.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"}else p=!1
if(p){p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KM(A.jN,"Transfer to "+C.hFS(p==null?"":p),"transfer_hati",A.aV,i.JJ(1),!1,j)],m))}p=i.a.c
if(!p.z){p=p.w
n=i.JJ(p==="hati_kuhowa"||p==="hati_kuhoweya"?2:1)
p=i.a.c.w
A.d.u(s,B.a([A.am,new C.KM(D.bSB,"Rename presentation","rename",A.ci,n,!1,j),A.am,new C.KM(A.aq1,"Duplicate","duplicate",A.b7,i.JJ(p==="hati_kuhowa"||p==="hati_kuhoweya"?3:2),!1,j)],m))}p=i.a
n=p.c
l=n.w
k=l==="hati_kiapo_uongozi"
if(!k||p.e){p=k?"Delete for everyone":"Delete presentation"
if(n.z)n=1
else n=l==="hati_kuhowa"||l==="hati_kuhoweya"?4:3
A.d.u(s,B.a([A.P,new C.KM(A.ej,p,"delete",A.aA,i.JJ(n),!0,j)],m))}s.push(A.ax)
p=i.a.c
if(p.z)p=2
else{p=p.w
p=p==="hati_kuhowa"||p==="hati_kuhoweya"?5:4}p=i.JJ(p)
n=i.a.c
if(n.z)n=2
else{n=n.w
n=n==="hati_kuhowa"||n==="hati_kuhoweya"?5:4}n=i.JJ(n)
s.push(B.dP(B.d3(B.bO(!1,E.aY6,j,j,!0,j,j,j,new C.dbr(d),j,B.fs(j,j,j,j,j,j,j,j,j,j,j,A.bP,j,j,j,A.az,j,D.bHm,j,j,j,j,j,A.jO,j,j)),n),new B.r(0,(1-p)*8)))
return B.e4(A.z,B.d3(B.aG(!1,A.a3,!0,j,B.p(j,B.bu(q,new B.an(A.a0,j,A.ad,A.t,B.a([o,new B.D(D.bGu,B.x(s,A.l,j,A.e,A.N,0,A.p),j)],m),j),A.aq),A.f,j,A.Y8,new B.o(A.av,j,t,v,r,j,A.n),j,j,j,j,j,j,j,j),A.f,A.L,0,j,j,j,j,j,A.ai),h),0.88+u*0.12,j,j)},
$S:45}
C.dbr.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.dbQ.prototype={
$0(){B.a6(this.a,!1).N(!1)
return null},
$S:0}
C.dbR.prototype={
$0(){B.a6(this.a,!1).N(!0)
return null},
$S:0}
C.dbp.prototype={
$1(d){var w=this.a
return w.m(new C.dbl(w))},
$S:23}
C.dbl.prototype={
$0(){return this.a.d=!0},
$S:0}
C.dbq.prototype={
$1(d){var w=this.a
return w.m(new C.dbk(w))},
$S:59}
C.dbk.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dbo.prototype={
$0(){var w=this.a
return w.m(new C.dbm(w))},
$S:0}
C.dbm.prototype={
$0(){return this.a.d=!1},
$S:0}
C.dbn.prototype={
$0(){var w=this.a.a.e
B.a6(this.b,!1).N(w)
return null},
$S:0}
C.eKt.prototype={
$0(){return $.bnz=!$.bnz},
$S:0}
C.eKj.prototype={
$0(){var w,v,u=this.a
if(u.c==null||!u.r)return
w=u.d
w===$&&B.c()
v=u.a.c
if(w<v.r.length-1||v.ch||u.gaY5())u.azZ()},
$S:0}
C.eKs.prototype={
$0(){var w=this.a
return w.r=!w.r},
$S:0}
C.eKk.prototype={
$0(){return this.a.y=!0},
$S:0}
C.eKl.prototype={
$0(){var w=this.a
if(w.c!=null&&w.y)w.azZ()},
$S:0}
C.eKf.prototype={
$0(){var w=this.a
w.y=!1
w.e=A.d.gH(w.a.c.r).r
w.d=0},
$S:0}
C.eKg.prototype={
$0(){var w=this.a,v=this.b
w.e=w.a.c.r[v].r
w.d=v},
$S:0}
C.eKh.prototype={
$0(){return this.a.y=!1},
$S:0}
C.eKi.prototype={
$0(){var w,v,u=this.a
u.e=u.a.c.r[this.b].r
w=u.d
w===$&&B.c()
v=this.c
u.d=A.o.F(w-1+v,v)},
$S:0}
C.eKq.prototype={
$2(d,e){var w=B.C(e,x.l)
if(d!=null)w.push(d)
return new B.an(A.z,null,A.b1,A.t,w,null)},
$S:1737}
C.eKr.prototype={
$2(d,e){var w
if(e.gc6(e)===A.iu)return new B.d2(e,!1,d,null)
w=this.a
return w.cC0(w.e,d,e)},
$S:480}
C.eKm.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.fE((1-v.gp(0))*1.5708)
return B.fA(A.z,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eKn.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.001
v=this.a
w.k5((1-v.gp(0))*1.5708)
return B.fA(A.z,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eKo.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.002
v=this.a
w.fE(v.gp(0)*0.8)
w.k5(v.gp(0)*0.35)
return B.fA(A.z,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eKp.prototype={
$2(d,e){var w=B.dr(),v=w.a
v.$flags&2&&B.aj(v)
v[11]=0.0025
v=this.a
w.fE(-v.gp(0)*1.2)
return B.fA(A.a9,B.d3(e,v.gp(0)),null,w,!0)},
$S:45}
C.eKu.prototype={
$2(d,e){var w,v=this,u=v.b,t=u==null
if(!t){w=v.a.ga_6().r
w=w!=null&&w.a!=null}else w=!1
if(w){t=v.a
u=t.a.c.r[u]
t=t.ga_6().x
t===$&&B.c()
return new C.b42(u,v.c,t,null)}u=v.a.d
u===$&&B.c()
return new C.Fw(v.c,t,!0,new B.bf("cine"+u,x.W))},
$S:669}
C.eKw.prototype={
$1(d){var w=this.a
if(d.b.a>B.aE(this.b,A.bZ,x.w).w.a.a*0.55)w.azZ()
else w.cqj()},
$S:59}
C.eKv.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fWt.prototype={
$4(d,e,f,g){var w=this.b
A.d.a8(w)
A.d.u(w,d)
w=this.a
w.a=e
w.b=f
w.c=g},
$S:482}
C.fWC.prototype={
$1(d){var w=null,v=this.a,u=v.r.length,t=u===1?"":"s"
t=B.d("Download a PDF that looks like your slides ("+u+" page"+t+"), or open the print view in your browser.",w,w,w,w,w,w,B.m(w,w,A.c.j(0.75),w,w,w,w,w,w,w,w,13,w,w,w,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)
return B.ek(B.a([B.bO(!1,A.ds,w,w,!0,w,w,w,new C.fWz(d),w,w),B.bO(!1,D.h0S,w,w,!0,w,w,w,new C.fWA(d,this.b,v),w,w),B.bI(A.aYp,w,new C.fWB(d,v,this.c),w)],x.p),w,w,P.uw,new B.a5(320,w,t,w),w,w,w,w,D.h2o,w)},
$S:18}
C.fWz.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.fWA.prototype={
$0(){var w=0,v=B.j(x.H),u=this
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).N(null)
C.hjh(u.b,u.c.b)
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fWB.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:B.a6(u.a,!1).N(null)
t=u.b
w=2
return B.b(C.aSI(t),$async$$0)
case 2:s=e
r=u.c
w=r.e!=null?3:4
break
case 3:w=5
return B.b(C.aS9(r,s,t.b),$async$$0)
case 5:case 4:return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.fWs.prototype={
$1(d){return d.a!==this.a.a},
$S:z+2}
C.cm7.prototype={
$2(d,e){var w
if(x.f.b(e)){w=J.t(e,"bundleId")
w=J.k(w==null?"":w)===this.a}else w=!1
return w},
$S:551}
C.fWy.prototype={
$1(d){return d.aj()},
$S:z+21}
C.frh.prototype={
$1(d){return C.hjf(C.Xm(B.a1(d,x.N,x.z)),this.a)},
$S:z+98}
C.h4V.prototype={
$3(d,e,f){return A.bM},
$C:"$3",
$R:3,
$S:88}
C.h4W.prototype={
$4(d,e,f,g){var w=A.cj.az(0,e.gp(0))
return B.d3(B.e4(A.z,D.hED,0.94+w*0.06,null,null),w)},
$S:257}
C.h4X.prototype={
$1(d){var w=this
return new C.Xo(w.a,w.b,w.c,w.d,null)},
$S:z+99}
C.eK_.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eJW.prototype={
$0(){return this.a.r=this.b},
$S:0}
C.eJZ.prototype={
$1(d){var w=this.a,v=w.a,u=v.c
v=v.f
return new C.Xp(u,this.b,w.gaR8(),v,null)},
$S:z+101}
C.eJX.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eJY.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eK0.prototype={
$0(){return this.a.f=!0},
$S:0}
C.eK1.prototype={
$0(){return this.a.f=!1},
$S:0}
C.eK4.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eK5.prototype={
$0(){var w=this.a
return w.m(new C.eK3(w))},
$S:0}
C.eK3.prototype={
$0(){return this.a.d="one"},
$S:0}
C.eK6.prototype={
$0(){var w=this.a
return w.m(new C.eK2(w))},
$S:0}
C.eK2.prototype={
$0(){return this.a.d="all"},
$S:0}
C.eK7.prototype={
$1(d){return this.a.bOm(d,this.b)},
$S:z+102}
C.eJV.prototype={
$0(){var w=this.a
return w.m(new C.eJU(w,this.b))},
$S:0}
C.eJU.prototype={
$0(){return this.a.e=this.b.a},
$S:0}
C.eK8.prototype={
$0(){var w=this.a,v=this.b
w.d=v.b
w.e=v.a},
$S:0}
C.eK9.prototype={
$0(){return this.a.f="Could not create QR. Check your connection and try again."},
$S:0}
C.eKa.prototype={
$2(d,e){return d+e.r.length},
$S:z+13}
C.eKb.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eKc.prototype={
$0(){var w=0,v=B.j(x.H),u,t=this,s
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:s=t.a.e
s.toString
w=3
return B.b(B.fI(new B.fx(s)),$async$$0)
case 3:s=t.b
if(s.e==null){w=1
break}s.L(x.q).f.T(D.foU)
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1}
C.eDB.prototype={
$0(){var w=this.a
if(w.c!=null)w.m(new C.eDA())},
$S:0}
C.eDA.prototype={
$0(){},
$S:0}
C.eDC.prototype={
$1(d){var w=this.a
if(w.c!=null)w.e.fW()},
$S:8}
C.eDx.prototype={
$1(d){return this.a.m(new C.eDw())},
$S:2}
C.eDw.prototype={
$0(){},
$S:0}
C.eDy.prototype={
$1(d){return this.a.b2r()},
$S:2}
C.eDz.prototype={
$0(){B.a6(this.a,!1).N(null)
return null},
$S:0}
C.eKe.prototype={
$0(){var w=0,v=B.j(x.H),u=this,t
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:t=u.a
w=2
return B.b(t.d.qz(),$async$$0)
case 2:if(t.c!=null)t.m(new C.eKd(t))
return B.h(null,v)}})
return B.i($async$$0,v)},
$S:1}
C.eKd.prototype={
$0(){var w=this.a
return w.f=!w.f},
$S:0}
C.fQw.prototype={
$1(d){var w=null,v=this.a,u=v.a
return B.ao(w,new B.eo(new B.k7(this.c,new C.fQv(),w,w,x.ex),this.b),v.b,w,-(u+200),w,0,u)},
$S:213}
C.fQv.prototype={
$3(d,e,f){return new C.Fw(e,!1,!1,new B.bf(e.a,x.W))},
$S:z+104}
C.fQx.prototype={
$1(d){var w=null
return B.oU(!1,B.as(new C.byo(this.a,this.b,w),w,w,w),w,x.z)},
$S:310}
C.fQB.prototype={
$0(){var w=0,v=B.j(x.cc),u,t=this,s,r
var $async$$0=B.e(function(d,e){if(d===1)return B.f(e,v)
for(;;)switch(w){case 0:w=3
return B.b($.aU.gmy(),$async$$0)
case 3:w=4
return B.b(B.bN(A.mf,null,x.H),$async$$0)
case 4:w=5
return B.b($.aU.gmy(),$async$$0)
case 5:s=$.aU.ap$.x.h(0,t.a)
r=s==null?null:s.gbf()
if(!(r instanceof B.qq))throw B.X("Could not draw the slide.")
u=r.lW(1)
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$0,v)},
$S:1740}
C.fQC.prototype={
bp9(d){var w=0,v=B.j(x.fS),u,t,s,r
var $async$$1=B.e(function(e,f){if(e===1)return B.f(f,v)
for(;;)switch(w){case 0:w=3
return B.b(d.hj(A.hf),$async$$1)
case 3:r=f
if(r==null)throw B.X("Could not read the slide picture.")
t=(self.URL||self.webkitURL).createObjectURL(B.hP([J.eR(A.dI.gaT(r))],"image/png"))
t.toString
s=Ar.h9q(t)
w=4
return B.b(new B.qz(s,"load",!1,x.ev).gH(0).dg(0,A.k3),$async$$1)
case 4:(self.URL||self.webkitURL).revokeObjectURL(t)
u=s
w=1
break
case 1:return B.h(u,v)}})
return B.i($async$$1,v)},
$1(d){return this.bp9(d)},
$S:1741}
C.fQy.prototype={
$1(d){var w,v=x.bu.a(d).data
if(v!=null){w=v.size
w.toString
w=w>0}else w=!1
if(w)this.a.push(v)},
$S:155}
C.fQz.prototype={
$1(d){var w=this.a
if((w.a.a&30)===0)w.h1(0)},
$S:155}
C.fQA.prototype={
$0(){return(self.URL||self.webkitURL).revokeObjectURL(this.a)},
$S:0}
C.fli.prototype={
$3(d,e,f){var w=null
return B.d(e,w,w,w,w,w,w,D.fzB,A.K,w,w)},
$S:1742}
C.flj.prototype={
$3(d,e,f){var w=null,v=B.l(99)
return B.bu(v,B.ku(A.bs,w,A.dR,8,w,e===0?w:e,w),A.aq)},
$S:676}
C.erR.prototype={
$1(d){this.a.a0q()
return null},
$S:11}
C.erP.prototype={
$0(){return this.a.e=D.bCh},
$S:0}
C.erQ.prototype={
$0(){var w=this.a.a
if(w.a<0)w=A.bC
return this.b.e=w},
$S:0}
C.cqn.prototype={
$1(d){return A.o.dB(1,d.a)},
$S:z+105}
C.cqo.prototype={
$2(d,e){return(d|e)>>>0},
$S:66};(function aliases(){var w=C.aOy.prototype
w.bAm=w.t
w=C.aO2.prototype
w.bzQ=w.t
w=C.aNM.prototype
w.bzy=w.t
w=C.aO1.prototype
w.bzP=w.t
w=C.aOw.prototype
w.bAk=w.t
w=C.aPQ.prototype
w.bBP=w.t
w=C.aMH.prototype
w.byq=w.t
w=C.aOJ.prototype
w.bAx=w.t
w=C.aOK.prototype
w.bAy=w.t
w=C.b5K.prototype
w.buV=w.aFw})();(function installTearOffs(){var w=a._static_0,v=a._instance_0u,u=a._instance_1u,t=a._static_1,s=a.installStaticTearOff
w(C,"iso","aps",106)
v(C.aLD.prototype,"gc9q","a_d",0)
var r
u(r=C.aA1.prototype,"gcDs","cDt",41)
v(r,"gcaf","aeY",0)
v(r=C.azY.prototype,"gb0K","EI",3)
v(r,"gcac","cad",3)
v(r,"gaz3","yw",0)
v(r,"gaB6","K1",0)
t(C,"isP","hYn",107)
v(C.aGd.prototype,"gcdv","cdw",3)
s(C,"isX",0,null,["$4$paper$photo$request$template"],["fXT"],108,0)
s(C,"isW",0,null,["$5$doc$history$instruction$photo$template"],["bFA"],109,0)
v(r=C.aGu.prototype,"gcee","JG",0)
v(r,"gbNP","XX",0)
v(r,"gceh","afU",0)
v(r,"gceg","a0b",0)
v(r,"gb26","EY",0)
v(C.aGx.prototype,"gcem","a0d",0)
v(r=C.aHY.prototype,"gb2j","QO",0)
v(r,"gcvc","b6H",3)
v(r,"gcEQ","aDF",100)
v(r,"gbRL","abG",0)
v(r,"gceN","Bc",0)
v(r=C.aJU.prototype,"gcp2","a1A",0)
v(r,"gcpa","a1D",0)
v(r,"gbGB","aa4",0)
v(r,"gceR","ag5",0)
v(C.aJT.prototype,"gceS","ag6",0)
v(C.aDS.prototype,"gbFA","a9S",0)
v(C.aCd.prototype,"gceT","a0o",0)
w(C,"it6","ir5",12)
w(C,"it4","inQ",12)
w(C,"it5","ipZ",12)
v(r=C.aGO.prototype,"gcIb","cIc",3)
v(r,"gctt","ctu",3)
u(r,"gF3","agQ",7)
v(r,"gbLq","atY",3)
u(r,"gF4","b3G",7)
v(r,"gch9","agx",0)
v(r,"gcg0","agw",0)
v(r,"gc4I","ZA",0)
v(r,"gcjl","agR",0)
v(r,"gbNM","abd",0)
v(r,"gckf","a10",0)
v(r,"gckg","ah7",0)
v(r,"gckN","ahe",0)
v(r,"gcjy","agU",0)
v(r,"gbRX","abK",0)
v(r,"gaUQ","aUR",3)
v(r,"gaTW","aTX",3)
v(r,"gaPo","aPp",3)
v(r,"gaTV","auP",3)
u(r,"gbFR","bFS",82)
v(r,"gaDa","b9T",3)
v(r,"gcg2","cg3",3)
v(r,"gc2j","c2k",3)
v(r,"gbQf","bQg",3)
v(r=C.aGR.prototype,"gcGZ","cH_",3)
v(r,"gcGB","cGC",3)
t(C,"it7","irm",2)
v(r=C.aGP.prototype,"gceZ","JL",0)
v(r,"gcxd","Si",0)
v(r,"gceW","JK",0)
v(r,"gcJv","a48",0)
v(r,"gckZ","ahl",0)
v(C.aGN.prototype,"gcf_","b2r",3)
v(r=C.aGQ.prototype,"gbSN","abU",0)
u(r,"gceX","ceY",103)})();(function inheritance(){var w=a.mixinHard,v=a.mixin,u=a.inheritMany,t=a.inherit
u(B.aF,[C.oo,C.T4,C.bLl,C.bJz,C.cHC,C.cHA,C.bTC,C.bbr,C.cHB,C.bI9,C.cqh,C.cqf,C.cqg,C.cqe,C.av_,C.cqd,C.bUD,C.oT,C.aHq,C.ij,C.Ld,C.oc,C.a9j,C.Aa,C.lE,C.p2,C.mx,C.Ab,C.of,C.a9r,C.atk,C.b43,C.erg,C.lB,C.Fx,C.ez,C.ji,C.Fn,C.ye,C.eO,C.lj,C.hV,C.k3,C.a9s,C.agF,C.b44,C.b5K,C.a4n])
u(B.jD,[C.cPH,C.c4H,C.fLG,C.cRd,C.cQA,C.fRe,C.cgz,C.e9v,C.e9u,C.erU,C.erT,C.fSF,C.fsp,C.fsq,C.ckm,C.ckn,C.cko,C.evy,C.f44,C.f3s,C.f3r,C.f4v,C.f42,C.f3W,C.f4e,C.f4V,C.fAI,C.fbe,C.fbd,C.fbH,C.erj,C.fWp,C.e4J,C.h2o,C.fT1,C.cm_,C.clY,C.cm2,C.fTB,C.fTC,C.fTD,C.fTE,C.clK,C.clL,C.dRs,C.clH,C.fTA,C.fiF,C.e2r,C.clA,C.er_,C.fR3,C.eHd,C.eHC,C.eHz,C.eHy,C.eHJ,C.eHI,C.eJd,C.eJc,C.eHs,C.eHr,C.eE_,C.eFa,C.eIa,C.eJv,C.eJu,C.eEY,C.eG9,C.eDH,C.dbs,C.eKq,C.eKr,C.eKm,C.eKn,C.eKo,C.eKp,C.eKu,C.cm7,C.eK_,C.eKa,C.cqo])
u(B.hs,[C.cPI,C.cPJ,C.bUE,C.fIt,C.c4G,C.c4J,C.fZL,C.fjP,C.fjG,C.fjW,C.fri,C.frj,C.fLH,C.fLF,C.fZd,C.fI7,C.h_6,C.cR3,C.cR8,C.cRa,C.cR6,C.cRb,C.cR4,C.cRc,C.cR_,C.cQX,C.cQW,C.cR2,C.cQv,C.cQt,C.fRf,C.fRm,C.fuJ,C.cgy,C.cgB,C.fQe,C.fQf,C.fL3,C.fL4,C.fRl,C.fuR,C.fRg,C.fRj,C.fRk,C.fRi,C.h2G,C.fL7,C.fL8,C.fLb,C.fLc,C.fLf,C.fLg,C.fx1,C.h4d,C.fsT,C.h4o,C.euR,C.euS,C.euT,C.euz,C.euL,C.euM,C.euO,C.ckl,C.ckj,C.ckk,C.fQV,C.fQX,C.fQW,C.fsr,C.fss,C.h4r,C.evD,C.evE,C.evv,C.evw,C.evz,C.evA,C.h4H,C.f4W,C.f4l,C.f45,C.f4i,C.f3n,C.f3o,C.f3p,C.f3t,C.f3u,C.f4L,C.f4S,C.f4U,C.f4u,C.f4w,C.f4A,C.f4B,C.f4C,C.f4G,C.f4x,C.f4y,C.f3F,C.f3G,C.f3H,C.f3I,C.f3J,C.f3K,C.f3L,C.f3M,C.f3N,C.f30,C.f31,C.f32,C.f33,C.f35,C.f36,C.f3z,C.f3A,C.f3B,C.f3C,C.f3D,C.f3a,C.f3b,C.f3c,C.f3d,C.f3V,C.f4d,C.fOj,C.fOi,C.clR,C.fAH,C.fWl,C.fWe,C.fWh,C.fU5,C.fU6,C.fU7,C.fOq,C.fOp,C.fOo,C.fOm,C.fsl,C.fsm,C.fsn,C.h4T,C.fbg,C.fbh,C.fba,C.fb4,C.fbA,C.fbB,C.fbD,C.fbE,C.fbz,C.h4S,C.faW,C.fzX,C.eri,C.fWn,C.fWo,C.fWq,C.fWj,C.fWk,C.h45,C.dtS,C.dtY,C.erh,C.foE,C.foG,C.foF,C.foD,C.fPu,C.fPw,C.fqM,C.fVQ,C.fVR,C.fVS,C.fW2,C.fW7,C.fW8,C.fW9,C.fWa,C.fWb,C.fWc,C.fWd,C.fVT,C.fVU,C.fVV,C.fVW,C.fVX,C.fVY,C.fVZ,C.fW_,C.fW0,C.fW1,C.fW3,C.fW4,C.fW5,C.fW6,C.fNk,C.fzf,C.fze,C.fWw,C.e4K,C.e4I,C.fa4,C.cg9,C.cgb,C.h2q,C.djd,C.djf,C.h2p,C.h2n,C.h4R,C.fSY,C.diO,C.fLj,C.fLk,C.clP,C.clQ,C.clO,C.clE,C.clF,C.clB,C.clC,C.clD,C.cm5,C.cm0,C.clW,C.clX,C.clZ,C.cm1,C.cm3,C.fTF,C.clJ,C.clM,C.clN,C.clT,C.clU,C.fWD,C.fVK,C.clI,C.clG,C.fTz,C.fC0,C.clz,C.f7z,C.fF6,C.eJR,C.eGg,C.eGh,C.eHR,C.eHF,C.eHG,C.eFE,C.eJC,C.eJD,C.eJE,C.eF1,C.eHk,C.eHm,C.eGX,C.eGU,C.eGc,C.eGd,C.eH3,C.eF3,C.eHf,C.eHg,C.eHe,C.eHi,C.eHh,C.eHA,C.eHB,C.eHD,C.eHw,C.eFm,C.eFj,C.eHK,C.eFb,C.eJB,C.eDJ,C.eFe,C.eFd,C.eEr,C.eEw,C.eEu,C.eEs,C.eJJ,C.eJK,C.eJL,C.eJI,C.eJf,C.eJe,C.eJ8,C.eJa,C.eJ0,C.eJz,C.eJx,C.eDR,C.eDN,C.eGa,C.eEA,C.eE1,C.eE0,C.eEn,C.eEo,C.eFC,C.eEC,C.eEG,C.eEH,C.eHt,C.eJ1,C.eJ2,C.eJ3,C.eJ4,C.eF5,C.eF6,C.eF7,C.eGD,C.eFy,C.eFp,C.eFx,C.eGN,C.eGO,C.eIA,C.eIC,C.eIW,C.eIY,C.eID,C.eIE,C.eEy,C.eGf,C.eGe,C.eJp,C.eEX,C.eEP,C.eEQ,C.eET,C.eEU,C.eGS,C.eFW,C.eFX,C.eFY,C.eFZ,C.eG_,C.eG0,C.eG1,C.eG2,C.eG3,C.eG4,C.eG5,C.eHO,C.dbp,C.dbq,C.eKw,C.fWt,C.fWC,C.fWs,C.fWy,C.frh,C.h4V,C.h4W,C.h4X,C.eJZ,C.eK7,C.eDC,C.eDx,C.eDy,C.fQw,C.fQv,C.fQx,C.fQC,C.fQy,C.fQz,C.fli,C.flj,C.erR,C.cqn])
u(B.iR,[C.cPK,C.fjL,C.fjQ,C.fjR,C.fjM,C.fjN,C.fjO,C.fjE,C.fjF,C.fjH,C.fjI,C.fjV,C.fjU,C.fjK,C.fjJ,C.fjS,C.fjT,C.fjY,C.fjZ,C.fjX,C.cR5,C.cR9,C.cR7,C.cQY,C.cQZ,C.cR0,C.cQU,C.cQV,C.cR1,C.cQT,C.cQS,C.cQR,C.cQk,C.cQj,C.cQm,C.cQu,C.cQn,C.cQl,C.cQp,C.cQq,C.cQr,C.cQo,C.cQs,C.cQw,C.cQx,C.cQy,C.cQz,C.fL1,C.fL2,C.fL_,C.fL0,C.en7,C.en5,C.en6,C.en8,C.en9,C.fRh,C.e9t,C.fL5,C.fL6,C.fL9,C.fLa,C.fLd,C.fLe,C.fEG,C.fAg,C.fVv,C.fVu,C.fVs,C.fVx,C.fVw,C.fVt,C.erS,C.fT4,C.fT3,C.euQ,C.euP,C.eut,C.eup,C.euA,C.euB,C.euC,C.euv,C.euw,C.eux,C.euy,C.euu,C.eur,C.eus,C.euI,C.euJ,C.euH,C.euK,C.euG,C.euF,C.euE,C.euN,C.euD,C.euq,C.evC,C.evq,C.evr,C.evx,C.evs,C.evu,C.evt,C.evB,C.f3O,C.f4b,C.f3x,C.f3y,C.f3v,C.f3w,C.f4h,C.f4g,C.f4f,C.f4k,C.f4j,C.f3m,C.f3q,C.f3l,C.f3k,C.f3h,C.f3j,C.f3i,C.f4T,C.f4M,C.f4K,C.f4N,C.f4J,C.f4O,C.f4I,C.f4P,C.f4Q,C.f4R,C.f4H,C.f4t,C.f4o,C.f4z,C.f4s,C.f4D,C.f4r,C.f4E,C.f4q,C.f4F,C.f4p,C.f48,C.f47,C.f49,C.f46,C.f4a,C.f40,C.f4_,C.f41,C.f3Z,C.f3Y,C.f3X,C.f34,C.f3_,C.f3e,C.f39,C.f3f,C.f38,C.f3g,C.f37,C.f43,C.f3S,C.f3R,C.f3T,C.f3Q,C.f3U,C.f3P,C.f4c,C.f4n,C.f4m,C.f3E,C.fWg,C.fWi,C.fWm,C.fOn,C.fQO,C.fQM,C.fQN,C.fbi,C.fbj,C.fbf,C.fb9,C.fb8,C.fbb,C.fbc,C.faZ,C.fb_,C.fb1,C.fb2,C.fb3,C.fb0,C.fb5,C.fbw,C.fbx,C.fbv,C.fby,C.fbu,C.fbt,C.fbs,C.fbC,C.fbr,C.fbq,C.fbp,C.fbF,C.fbo,C.fbG,C.fbn,C.fbm,C.fb6,C.fb7,C.fbl,C.fbk,C.faS,C.faT,C.faU,C.faV,C.faR,C.faX,C.faY,C.dtR,C.dtT,C.dtW,C.dtX,C.dtV,C.dtU,C.fPv,C.fNl,C.cga,C.cgc,C.dj6,C.djb,C.djc,C.dja,C.dj9,C.dje,C.dj8,C.dj7,C.djg,C.h2m,C.dpU,C.dpV,C.dpW,C.fLh,C.fLi,C.cm6,C.eDD,C.eDE,C.eDF,C.eDG,C.fBZ,C.fC_,C.e2t,C.e2s,C.dg0,C.dg_,C.eJT,C.eJS,C.eGi,C.eIZ,C.eJP,C.eHP,C.eJF,C.eJG,C.eJQ,C.eGY,C.eF_,C.eF0,C.eHl,C.eGW,C.eGT,C.eGV,C.eGZ,C.eH_,C.eH0,C.eH1,C.eH2,C.eH4,C.eF4,C.eH7,C.eH8,C.eH9,C.eHa,C.eHb,C.eHc,C.eH6,C.eHj,C.eHx,C.eHv,C.eHE,C.eH5,C.eFk,C.eFl,C.eFn,C.eHH,C.eHL,C.eDY,C.eFi,C.eFg,C.eHT,C.eFc,C.eHS,C.eF2,C.eFF,C.eJA,C.eJ_,C.eDZ,C.eDW,C.eDM,C.eDI,C.eDK,C.eFf,C.eEq,C.eEv,C.eEt,C.eEp,C.eHu,C.eJM,C.eJb,C.eJ6,C.eJ7,C.eJ9,C.eG8,C.eG7,C.eJy,C.eDP,C.eDQ,C.eDS,C.eDT,C.eDX,C.eDO,C.eHQ,C.eJH,C.eGb,C.eEz,C.eDL,C.eFD,C.eDU,C.eE2,C.eE3,C.eE4,C.eEf,C.eEi,C.eEj,C.eEk,C.eEl,C.eEm,C.eE5,C.eE6,C.eE7,C.eE8,C.eE9,C.eEa,C.eEb,C.eEc,C.eEd,C.eEe,C.eEg,C.eEh,C.eFB,C.eFA,C.eFz,C.eDV,C.eED,C.eEB,C.eEE,C.eEF,C.eFh,C.eHp,C.eHq,C.eHn,C.eHo,C.eJ5,C.eF9,C.eF8,C.eGC,C.eGB,C.eGE,C.eGA,C.eGF,C.eGz,C.eGG,C.eGy,C.eGH,C.eGx,C.eGI,C.eGw,C.eGJ,C.eGv,C.eGK,C.eGu,C.eGn,C.eGo,C.eGp,C.eGm,C.eGq,C.eGl,C.eGr,C.eGk,C.eGs,C.eGj,C.eGt,C.eFu,C.eFv,C.eFw,C.eFo,C.eFq,C.eFr,C.eFs,C.eFt,C.eJN,C.eJO,C.eGM,C.eGL,C.eGP,C.eIb,C.eIc,C.eId,C.eIo,C.eIz,C.eIK,C.eIR,C.eIS,C.eIT,C.eIU,C.eIV,C.eIe,C.eIf,C.eIg,C.eIh,C.eIi,C.eIj,C.eIk,C.eIl,C.eIm,C.eIn,C.eIp,C.eIq,C.eIr,C.eIs,C.eIt,C.eIu,C.eIv,C.eIw,C.eIx,C.eI1,C.eIy,C.eI9,C.eI8,C.eIB,C.eI7,C.eHY,C.eIX,C.eI6,C.eHX,C.eHV,C.eI5,C.eHW,C.eHU,C.eIF,C.eI4,C.eIG,C.eIH,C.eII,C.eIJ,C.eI3,C.eIL,C.eIM,C.eIN,C.eI2,C.eIO,C.eI0,C.eIP,C.eI_,C.eIQ,C.eHZ,C.eEx,C.eJi,C.eJh,C.eJj,C.eJg,C.eFI,C.eFH,C.eFJ,C.eFG,C.eJt,C.eJo,C.eJs,C.eJk,C.eJl,C.eJm,C.eJn,C.eJq,C.eJr,C.eJw,C.eEZ,C.eEM,C.eEN,C.eEO,C.eEL,C.eES,C.eER,C.eEK,C.eEJ,C.eEV,C.eEI,C.eEW,C.eGR,C.eGQ,C.eFV,C.eFU,C.eFT,C.eFS,C.eFR,C.eFQ,C.eFP,C.eFO,C.eFL,C.eFN,C.eFM,C.eFK,C.eG6,C.eHM,C.eHN,C.dbr,C.dbQ,C.dbR,C.dbl,C.dbk,C.dbo,C.dbm,C.dbn,C.eKt,C.eKj,C.eKs,C.eKk,C.eKl,C.eKf,C.eKg,C.eKh,C.eKi,C.eKv,C.fWz,C.fWA,C.fWB,C.eJW,C.eJX,C.eJY,C.eK0,C.eK1,C.eK4,C.eK5,C.eK3,C.eK6,C.eK2,C.eJV,C.eJU,C.eK8,C.eK9,C.eKb,C.eKc,C.eDB,C.eDA,C.eDw,C.eDz,C.eKe,C.eKd,C.fQB,C.fQA,C.erP,C.erQ])
t(C.aU2,B.M)
u(B.l6,[C.a57,C.azs,C.wv,C.yf,C.jw,C.tQ,C.Cb,C.t2,C.wA,C.atS,C.JK,C.atj,C.vi,C.mZ,C.hJ,C.aa3])
u(C.bTC,[C.cHD,C.bTD])
u(C.cqh,[C.cql,C.auZ])
t(C.cqk,C.cqf)
t(C.cqj,C.cqe)
t(C.cqm,C.cqj)
t(C.cqi,C.cqg)
t(C.cqc,C.cqd)
t(C.bd2,B.pk)
t(C.cAK,B.axz)
t(C.a9R,B.y_)
u(B.af,[C.a2m,C.a_4,C.a_2,C.asq,C.Xc,C.Xd,C.a1l,C.a1S,C.a1R,C.aGo,C.a0f,C.Ou,C.a_N,C.a07,C.aqk,C.aLi,C.Wt,C.aBT,C.a99,C.P_,C.aBf,C.KM,C.a0Z,C.Xo,C.Xp,C.aGM,C.ato,C.a9a])
u(B.ah,[C.aLD,C.aA1,C.azY,C.aGd,C.aGu,C.aGx,C.aHY,C.aJU,C.aJT,C.aOy,C.aDS,C.aO2,C.aCd,C.bj2,C.aNM,C.aPQ,C.aO1,C.bgQ,C.aOw,C.aOJ,C.aMH,C.bfB,C.aOK,C.aGP,C.bny,C.aGN,C.aGQ,C.bnh])
u(B.aw,[C.aA_,C.aeM,C.ae9,C.bmh,C.aeP,C.agv,C.b3F,C.bvY,C.b4_,C.boP,C.but,C.b1U,C.b42,C.aeS,C.af8,C.b40,C.Fw,C.b1X,C.bfR,C.QK,C.KS,C.bkB,C.bkA,C.byo])
u(B.Ia,[C.bfi,C.bxm,C.aM_,C.bi2,C.buT])
u(B.ms,[C.bfh,C.bbL,C.buQ,C.beQ,C.bir,C.bkI,C.bhw,C.bin,C.bi4,C.bra,C.bcV,C.bcy,C.byk,C.bvi,C.bup,C.bhp,C.b3Y,C.bti,C.bum])
t(C.bne,C.aOy)
t(C.bmA,C.aO2)
t(C.bmj,C.aNM)
t(C.bxP,C.aPQ)
t(C.bmw,C.aO1)
t(C.bnc,C.aOw)
t(C.bAH,C.aOJ)
t(C.aGO,C.bAH)
t(C.bfC,C.aMH)
t(C.aGR,C.aOK)
t(C.bya,B.j9)
t(C.aa2,B.kO)
t(C.cqp,C.b5K)
t(C.ajR,C.a4n)
u(B.Z3,[C.aTW,C.aVn])
t(C.az2,C.aTW)
w(C.aOy,B.cf)
w(C.aO2,B.cf)
w(C.aNM,B.cf)
w(C.aO1,B.cf)
w(C.aOw,B.cf)
w(C.aPQ,B.cf)
w(C.aMH,B.eP)
w(C.aOJ,B.cf)
v(C.bAH,B.eE)
w(C.aOK,B.cf)})()
B.ja(b.typeUniverse,JSON.parse('{"aUE":{"hR":["aUE"]},"oo":{"aUE":[],"hR":["aUE"]},"aU2":{"M":["T4"],"M.E":"T4"},"bd2":{"pk":[]},"a9R":{"y_":[],"oM":[]},"a2m":{"af":[],"v":[]},"aLD":{"ah":["a2m"]},"a_4":{"af":[],"v":[]},"a_2":{"af":[],"v":[]},"aA1":{"ah":["a_4"]},"azY":{"ah":["a_2"]},"aA_":{"aw":[],"v":[]},"asq":{"af":[],"v":[]},"aGd":{"ah":["asq"]},"aeM":{"aw":[],"v":[]},"ae9":{"aw":[],"v":[]},"aeP":{"aw":[],"v":[]},"agv":{"aw":[],"v":[]},"bmh":{"aw":[],"v":[]},"Xc":{"af":[],"v":[]},"aGu":{"ah":["Xc"]},"b3F":{"aw":[],"v":[]},"bfi":{"aC":[]},"bfh":{"aC":[]},"bxm":{"aC":[]},"bbL":{"aC":[]},"buQ":{"aC":[]},"Xd":{"af":[],"v":[]},"aGx":{"ah":["Xd"]},"beQ":{"aC":[]},"a1l":{"af":[],"v":[]},"aHY":{"ah":["a1l"]},"bir":{"aC":[]},"a1S":{"af":[],"v":[]},"a1R":{"af":[],"v":[]},"aGo":{"af":[],"v":[]},"a0f":{"af":[],"v":[]},"aJU":{"ah":["a1S"]},"aJT":{"ah":["a1R"]},"bne":{"ah":["aGo"]},"bkI":{"aC":[]},"aDS":{"ah":["a0f"]},"bvY":{"aw":[],"v":[]},"b4_":{"aw":[],"v":[]},"boP":{"aw":[],"v":[]},"Ou":{"af":[],"v":[]},"a_N":{"af":[],"v":[]},"bmA":{"ah":["Ou"]},"but":{"aw":[],"v":[]},"bhw":{"aC":[]},"b1U":{"aw":[],"v":[]},"aCd":{"ah":["a_N"]},"a07":{"af":[],"v":[]},"bj2":{"ah":["a07"]},"bin":{"aC":[]},"bi4":{"aC":[]},"bra":{"aC":[]},"bcV":{"aC":[]},"bcy":{"aC":[]},"byk":{"aC":[]},"bvi":{"aC":[]},"bup":{"aC":[]},"bhp":{"aC":[]},"aqk":{"af":[],"v":[]},"b42":{"aw":[],"v":[]},"bmj":{"ah":["aqk"]},"aeS":{"aw":[],"v":[]},"af8":{"aw":[],"v":[]},"aLi":{"af":[],"v":[]},"Wt":{"af":[],"v":[]},"Fw":{"aw":[],"v":[]},"aBT":{"af":[],"v":[]},"a99":{"af":[],"v":[]},"b40":{"aw":[],"v":[]},"b3Y":{"aC":[]},"bxP":{"ah":["aLi"]},"aM_":{"aC":[]},"bmw":{"ah":["Wt"]},"bgQ":{"ah":["aBT"]},"bnc":{"ah":["a99"]},"b1X":{"aw":[],"v":[]},"bi2":{"aC":[]},"bti":{"aC":[]},"bum":{"aC":[]},"aBf":{"af":[],"v":[]},"KM":{"af":[],"v":[]},"a0Z":{"af":[],"v":[]},"KS":{"aw":[],"v":[]},"P_":{"af":[],"v":[]},"aGO":{"ah":["P_"],"eE":[]},"bfC":{"ah":["aBf"]},"bfR":{"aw":[],"v":[]},"bfB":{"ah":["KM"]},"QK":{"aw":[],"v":[]},"aGR":{"ah":["a0Z"]},"buT":{"aC":[]},"bkB":{"aw":[],"v":[]},"bkA":{"aw":[],"v":[]},"Xo":{"af":[],"v":[]},"Xp":{"af":[],"v":[]},"aGM":{"af":[],"v":[]},"ato":{"af":[],"v":[]},"aGP":{"ah":["Xo"]},"bny":{"ah":["Xp"]},"aGN":{"ah":["aGM"]},"bya":{"j9":[]},"aGQ":{"ah":["ato"]},"byo":{"aw":[],"v":[]},"a9a":{"af":[],"v":[]},"bnh":{"ah":["a9a"]},"aa2":{"kO":["fz<eX>"],"kz":["fz<eX>"]},"ajR":{"a4n":[]},"aTW":{"jm":[],"fl":[]},"az2":{"jm":[],"fl":[]},"aVn":{"jm":[],"fl":[]}}'))
var y={z:"Amri ya kifalme \xb7 bendi za muhuri juu na chini.",L:"Kichwa cha Mtu: Dollar elfu ishirini ($20,000)",f:"Mimi [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Nimehowesha binti wangu aitwaye [Jina la Binti], na ndugu [Jina la Kijana], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume], kijana wa [Jina la Baba wa Mume]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",O:"Mimi [Jina la Baba wa Mume], wa jamaa ya [Jina la Jamii ya Mume], Nyumba ya [Jina la Nyumba ya Mume]. Nimetowa mahali ya kuhoweya kijana wangu aitwaye [Jina la Kijana] na [Jina la Binti], binti wa [Jina la Baba wa Binti], wa jamaa ya [Jina la Jamii ya Binti], Nyumba ya [Jina la Nyumba ya Binti]. Makubaliano haya yanathibitishwa rasmi na pande zote mbili ili kuweka kumbukumbu na kuimarisha uhusiano mwema kati ya familia zote mbili.",s:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya bluu ya kifalme.",Q:"Mpaka mwembamba wa dhahabu \xb7 vichwa vya dhahabu.",H:"Nguo ya kente yenye dirisha la karatasi katikati.",n:"Nguo ya udongo yenye alama \xb7 karatasi ndani.",K:"Open Blank or Class Template to start \u2014 nothing is saved until you edit.",M:'PathMetricIterator is not pointing to a PathMetric. This can happen in two situations:\n- The iteration has not started yet. If so, call "moveNext" to start iteration.\n- The iterator ran out of elements. If so, check that "moveNext" returns true prior to calling "current".',S:"The AI sent something I could not read. Try again.",g:"Your story appears here. Add a picture, then ask the AI to write it."}
var x=(function rtii(){var w=B.at
return{bu:w("MH"),U:w("w3<qu>"),bz:w("u"),M:w("db<n>"),bo:w("jZ"),g7:w("Uq"),gc:w("aB<iN?>"),bq:w("aB<~>"),cc:w("C2"),fS:w("EK"),an:w("C3"),bm:w("O<T4>"),X:w("O<a4v>"),f3:w("O<aUE>"),aK:w("O<nw>"),V:w("O<ab>"),O:w("O<u>"),fA:w("O<lW>"),d5:w("O<aB<bA<F,+icon3d,picture(n?,n?)>>>"),bH:w("O<aB<dH>>"),fG:w("O<aB<~>>"),aF:w("O<nE>"),cd:w("O<ai<ij>>"),ez:w("O<a9<n,aF>>"),d:w("O<a9<n,@>>"),B:w("O<mW>"),h:w("O<ij>"),gE:w("O<Aa>"),k:w("O<oT>"),g:w("O<lj>"),D:w("O<hV>"),u:w("O<eO>"),m:w("O<vi>"),i:w("O<hJ>"),aC:w("O<a9r>"),e8:w("O<Ab>"),e3:w("O<aF>"),dN:w("O<r>"),v:w("O<fZ>"),cR:w("O<j7>"),J:w("O<fJ>"),gx:w("O<pI<n>>"),f2:w("O<+(a_,n)>"),L:w("O<+(n,n)>"),aD:w("O<+data,mimeType(n,n)>"),G:w("O<+(H,H)>"),ek:w("O<+(F,n)>"),n:w("O<+(F,F)>"),r:w("O<cU>"),s:w("O<n>"),aS:w("O<j9>"),p:w("O<v>"),eR:w("O<fl>"),fT:w("O<bbr>"),bx:w("O<aHq>"),gz:w("O<agF>"),x:w("O<H>"),t:w("O<F>"),dS:w("O<aC?>"),bA:w("O<r?>"),Z:w("O<F?>"),cA:w("O<ck>"),A:w("cx<ah<af>>"),gL:w("ai<oT>"),R:w("ai<hV>"),j:w("ai<@>"),bW:w("ai<F>"),e:w("bA<F,+icon3d,picture(n?,n?)>"),P:w("a9<n,@>"),f:w("a9<@,@>"),gI:w("a9<F,+icon3d,picture(n?,n?)>"),bR:w("N<hJ,v>"),eC:w("N<of,n>"),cT:w("N<k3,D>"),dv:w("N<n,n>"),f0:w("N<n,v>"),gN:w("N<F,qb>"),gh:w("N<mZ,jL<mZ>>"),w:w("iy"),ei:w("iN"),g2:w("rT"),fB:w("Fn"),b6:w("Aa"),gX:w("a9j"),dt:w("lE"),ea:w("oT"),o:w("lj"),I:w("hV"),F:w("eO"),fO:w("mZ"),ff:w("vi"),fP:w("hJ"),Q:w("wA"),dO:w("atk"),a:w("cu"),C:w("aF"),dw:w("av_"),di:w("aa3"),Y:w("eX"),fz:w("+(n,n)"),dL:w("+(F,F)"),eb:w("+claimCode,qrPayload(n?,n)"),aH:w("+icon3d,picture(n?,n?)"),cz:w("FU"),dB:w("ds<r>"),bJ:w("ds<n>"),_:w("e2<n>"),N:w("n"),fw:w("qu"),bO:w("au"),K:w("bq<r>"),b:w("bq<H>"),E:w("dH"),W:w("bf<n>"),ac:w("bf<F>"),ex:w("k7<lj>"),cI:w("k7<n>"),cl:w("k7<H>"),b4:w("Y<lB>"),bt:w("Y<mx>"),fR:w("Y<+(n,n)>"),co:w("ec<r>"),l:w("v"),b2:w("c3<~>"),ev:w("qz<e1>"),dT:w("bl<~>"),q:w("md"),y:w("R"),gR:w("H"),z:w("@"),S:w("F"),at:w("bd?"),gw:w("ai<a9<n,@>>?"),aT:w("ai<hV>?"),c:w("ai<@>?"),aP:w("iN?"),af:w("hV?"),go:w("b44?"),a6:w("a9s?"),bZ:w("+bytes,dataUrl,fileName(dH,n,n)?"),gl:w("+claimCode,qrPayload,token(n?,n,n)?"),T:w("n?"),dd:w("dH?"),H:w("~")}})();(function constants(){var w=a.makeConstList
D.b3u=new B.bK(A.ay,null,null,H.atv,null)
D.b3D=new B.d7(0,-0.15)
D.b3E=new B.d7(0.62,0)
D.b3J=new B.d7(-0.35,-0.45)
D.b3U=new B.d7(0.9,-0.85)
D.b64=new B.be(H.UY,H.UY,A.fR,A.fR)
D.b6k=new B.ay(A.b7,1,A.r,-1)
D.bsx=new B.u(1,0.4196078431372549,0.2901960784313726,0.2,A.q)
D.b6w=new B.ay(D.bsx,1,A.r,-1)
D.b6H=new B.ay(A.aD,1.5,A.r,-1)
D.b6M=new B.ay(A.b7,1.6,A.r,-1)
D.b71=new B.ay(A.aD,1.4,A.r,-1)
D.b8o=new B.o(null,null,null,null,null,N.Im,A.a6)
D.caE=new B.a7(A.a5,A.a9,A.x,G.a6J,null,null)
D.b8w=new B.o(null,null,null,null,null,D.caE,A.a6)
D.afy=new B.o(A.av,null,null,A.ua,null,null,A.n)
D.bl7=new B.u(1,0.16862745098039217,0.22745098039215686,0.3333333333333333,A.q)
D.bsu=new B.u(1,0.0392156862745098,0.058823529411764705,0.10196078431372549,A.q)
D.d9P=w([D.bl7,D.bsu],x.O)
D.eEQ=new B.bS(A.z,0.5,A.x,null,0,D.d9P,null,null)
D.b8P=new B.o(null,null,null,null,null,D.eEQ,A.a6)
D.ZV=new B.u(1,0.054901960784313725,0.08235294117647059,0.14901960784313725,A.q)
D.b7h=new B.bG(Q.w4,A.a1,A.a1,A.a1)
D.b8R=new B.o(D.ZV,null,D.b7h,null,null,null,A.n)
D.cco=new B.a7(A.a5,A.a9,A.x,A.Sz,null,null)
D.b8Y=new B.o(null,null,null,null,null,D.cco,A.a6)
D.ahf=new B.u(1,0.058823529411764705,0.058823529411764705,0.0784313725490196,A.q)
D.b90=new B.o(D.ahf,null,null,A.rs,null,null,A.n)
D.b94=new B.o(A.k_,null,null,null,null,null,A.a6)
D.b97=new B.o(T.aiz,null,H.afa,A.mJ,null,null,A.n)
D.FI=new B.o(A.dX,null,null,null,null,null,A.a6)
D.b9e=new B.o(null,null,null,null,null,E.x9,A.a6)
D.dfd=w([E.ajz,A.c5],x.O)
D.cc2=new B.a7(A.aZ,A.b4,A.x,D.dfd,null,null)
D.b9i=new B.o(null,null,null,A.mJ,null,D.cc2,A.n)
D.dqX=w([A.bo,A.dX,A.jG],x.O)
D.a4I=new B.a7(A.ay,A.aC,A.x,D.dqX,null,null)
D.b9v=new B.o(null,null,null,null,null,D.a4I,A.n)
D.b9w=new B.o(D.ahf,null,null,A.lf,null,null,A.n)
D.cE0=w([A.dh,A.bo],x.O)
D.cbT=new B.a7(A.ay,A.aC,A.x,D.cE0,null,null)
D.b9A=new B.o(null,null,null,null,null,D.cbT,A.n)
D.b9K=new B.o(null,null,null,null,null,G.ve,A.a6)
D.ba5=new B.o(A.ajA,null,null,null,null,null,A.a6)
D.bma=new B.u(0.5647058823529412,0,0,0,A.q)
D.afJ=new B.ab(0,A.G,D.bma,A.JR,28)
D.bcp=new B.aYR()
D.bcY=new C.cAK()
D.bda=new C.bd2()
D.agd=new B.cj(A.z,null,null,A.a4x,null)
D.bfQ=new B.fn(null,null,null,null,null,E.nx,null,null,null,null)
D.bdK=new B.cj(A.z,null,null,D.bfQ,null)
D.bVC=new B.ae(A.e9,28,A.c,null,null,null)
D.bef=new B.cj(A.z,null,null,D.bVC,null)
D.bfN=new B.fn(2,null,null,null,null,A.c3,null,null,null,null)
D.beC=new B.cj(A.z,null,null,D.bfN,null)
D.bVX=new B.ae(A5.I2,40,A.bD,null,null,null)
D.beD=new B.cj(A.z,null,null,D.bVX,null)
D.bgJ=new B.u(1,1,0.9019607843137255,0.6549019607843137,A.q)
D.bgX=new B.u(1,0.10588235294117647,0.13333333333333333,0.19607843137254902,A.q)
D.bhp=new B.u(1,0.08235294117647059,0.10196078431372549,0.14901960784313725,A.q)
D.bhA=new B.u(1,0.10980392156862745,0.07450980392156863,0.054901960784313725,A.q)
D.bif=new B.u(1,0.47843137254901963,0.41568627450980394,0.27058823529411763,A.q)
D.biw=new B.u(0.8,1,0.9450980392156862,0.9490196078431372,A.q)
D.biy=new B.u(0.0784313725490196,0.788235294117647,0.6352941176470588,0.15294117647058825,A.q)
D.ML=new B.u(1,0.0392156862745098,0.08235294117647059,0.14901960784313725,A.q)
D.bj0=new B.u(0.2,0.9607843137254902,0.6196078431372549,0.043137254901960784,A.q)
D.bj8=new B.u(0.13333333333333333,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ahB=new B.u(1,0.1411764705882353,0.09411764705882353,0.07058823529411765,A.q)
D.bjZ=new B.u(1,0.22745098039215686,0.16470588235294117,0.10196078431372549,A.q)
D.bkU=new B.u(1,0.9098039215686274,0.9333333333333333,0.9647058823529412,A.q)
D.ahT=new B.u(1,1,1,0.9725490196078431,A.q)
D.blh=new B.u(0,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.blz=new B.u(1,1,0.5490196078431373,0.10196078431372549,A.q)
D.blC=new B.u(0.6,0.9098039215686274,0.7058823529411765,0.7215686274509804,A.q)
D.blQ=new B.u(0.4,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.bmh=new B.u(1,1,0.9568627450980393,0.8392156862745098,A.q)
D.bn3=new B.u(1,0.9529411764705882,0.8745098039215686,0.6352941176470588,A.q)
D.bo0=new B.u(1,1,0.996078431372549,0.9725490196078431,A.q)
D.ZE=new B.u(0.8509803921568627,0,0,0,A.q)
D.boc=new B.u(1,0.0784313725490196,0.06666666666666667,0.047058823529411764,A.q)
D.boj=new B.u(1,0.0784313725490196,0.06666666666666667,0.0392156862745098,A.q)
D.aiT=new B.u(0.6,0,0,0,A.q)
D.aiV=new B.u(0,1,0.7019607843137254,0.2784313725490196,A.q)
D.bq4=new B.u(1,0.12156862745098039,0.10196078431372549,0.058823529411764705,A.q)
D.ut=new B.u(1,0.08235294117647059,0.12156862745098039,0.21176470588235294,A.q)
D.bqy=new B.u(1,0.35294117647058826,0.41568627450980394,0.5215686274509804,A.q)
D.br5=new B.u(1,1,0.8784313725490196,0.6392156862745098,A.q)
D.brw=new B.u(0.4,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.ajR=new B.u(1,0.47843137254901963,0.23137254901960785,0.2901960784313726,A.q)
D.a_8=new B.u(0,0.9607843137254902,0.7686274509803922,0.3176470588235294,A.q)
D.Ce=new B.u(1,0.5411764705882353,0.39215686274509803,0.09019607843137255,A.q)
D.Nr=new B.u(1,0.0784313725490196,0.09803921568627451,0.16470588235294117,A.q)
D.jH=new B.u(1,0.07058823529411765,0.12941176470588237,0.23921568627450981,A.q)
D.akl=new B.u(0,1,0.9686274509803922,0.8392156862745098,A.q)
D.a_j=new B.u(1,0.2901960784313726,0.17254901960784313,0.10588235294117647,A.q)
D.bvv=new B.u(1,0.24705882352941178,0.16470588235294117,0.0392156862745098,A.q)
D.bw2=new B.u(0.6,1,0.9686274509803922,0.9019607843137255,A.q)
D.bwi=new B.u(0.6,1,0.984313725490196,0.9215686274509803,A.q)
D.a_P=new B.u(1,0.07450980392156863,0.10980392156862745,0.2,A.q)
D.bxz=new B.u(1,0.8627450980392157,0.9215686274509803,0.9803921568627451,A.q)
D.bya=new B.u(1,0.058823529411764705,0.0784313725490196,0.12549019607843137,A.q)
D.byu=new B.hQ(A.aT,!0,null,null)
D.fGp=new B.G(!0,A.aF,null,null,null,null,22,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h6E=new B.B("Bio link",null,D.fGp,null,null,null,null,null,null,null,null,null)
D.bex=new B.cj(A.z,null,null,D.h6E,null)
D.byJ=new B.hQ(A.BP,!0,D.bex,null)
D.dTw=new B.VP(A.aG,56,A_.Pw,null,null)
D.fCX=new B.G(!0,A.bA,null,null,null,null,null,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPE=new B.B("No presentations yet",null,D.fCX,null,null,null,null,null,null,null,null,null)
D.fHs=new B.G(!0,A.cy,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fMX=new B.B(y.K,null,D.fHs,null,A.K,null,null,null,null,null,null,null)
D.d9F=w([D.dTw,A.aB,D.fPE,A.am,D.fMX],x.p)
D.byY=new B.fp(A.ah,A.e,A.h,A.l,null,A.p,null,0,D.d9F,null)
D.NS=new C.a57(0,"none")
D.alB=new C.a57(1,"deflate")
D.alC=new C.a57(2,"bzip2")
D.bzH=new B.kH(0.165,0.84,0.44,1)
D.dfx=w([A.c9,A.dR,A.aD],x.O)
D.cb6=new B.a7(A.ay,A.aC,A.x,D.dfx,null,null)
D.b8t=new B.o(null,null,null,null,null,D.cb6,A.n)
D.c4i=new B.ae(A.eW,null,A.ab,null,null,null)
D.bfa=new B.cj(A.z,null,null,D.c4i,null)
D.bAg=new B.bM(D.b8t,A.bk,D.bfa,null)
D.bvL=new B.u(0.058823529411764705,1,1,1,A.q)
D.dj3=w([A.bw,A.rE,A.rE,D.bvL],x.O)
D.cVC=w([0,0.32,0.7,1],x.x)
D.cbJ=new B.a7(A.ay,A.aC,A.x,D.dj3,D.cVC,null)
D.b8i=new B.o(null,null,null,null,null,D.cbJ,A.n)
D.bAn=new B.bM(D.b8i,A.bk,null,null)
D.bBv=new B.mO(1,1,null,null,null,A.bs,null)
D.bBy=new B.mO(1,null,null,null,null,D.a_j,null)
D.bC1=new B.bd(125e4)
D.bC7=new B.bd(17e4)
D.bCh=new B.bd(35964e8)
D.bCo=new B.bd(55e4)
D.bCs=new B.bd(68e4)
D.bCT=new B.it(0,0,0,5)
D.bD7=new B.Q(0,16,16,0)
D.bDi=new B.Q(0,36,0,36)
D.bDq=new B.Q(0,54,0,0)
D.bDx=new B.Q(10,0,10,3)
D.bDI=new B.it(10,16,10,10)
D.bDU=new B.Q(10,6,4,6)
D.bDX=new B.Q(10,8,10,6)
D.amB=new B.Q(11,8,11,11)
D.bE2=new B.Q(12,0,12,24)
D.bEf=new B.Q(12,12,12,4)
D.bEi=new B.Q(12,12,8,12)
D.bEj=new B.Q(12,14,12,10)
D.bEA=new B.Q(12,8,8,12)
D.bF_=new B.Q(14,14,14,0)
D.bF4=new B.Q(14,14,14,90)
D.bFs=new B.Q(16,10,16,16)
D.bFt=new B.Q(16,10,16,20)
D.ann=new B.Q(16,6,16,28)
D.bG0=new B.Q(18,0,18,10)
D.bG2=new B.Q(18,0,18,30)
D.bG4=new B.Q(18,10,18,12)
D.bG5=new B.Q(18,10,18,14)
D.bGp=new B.Q(18,16,14,18)
D.bGu=new B.Q(18,18,18,12)
D.bGA=new B.Q(18,26,18,12)
D.bGF=new B.Q(18,34,18,34)
D.bGG=new B.Q(18,4,18,14)
D.bGL=new B.Q(18,8,18,24)
D.bH4=new B.Q(20,16,14,4)
D.bH9=new B.Q(20,18,12,4)
D.bHe=new B.Q(20,20,12,20)
D.bHh=new B.Q(20,22,20,20)
D.bHm=new B.Q(20,6,20,6)
D.bHw=new B.Q(22,18,22,18)
D.bHE=new B.Q(22,24,22,0)
D.bHH=new B.Q(22,24,22,4)
D.bHP=new B.Q(22,60,22,22)
D.bHV=new B.Q(24,24,24,22)
D.bI4=new B.Q(26,10,60,10)
D.bIb=new B.Q(28,44,28,44)
D.bIs=new B.Q(32,44,32,44)
D.bIA=new B.Q(38,30,38,20)
D.bIG=new B.Q(4,0,0,6)
D.bIS=new B.it(4,4,4,4)
D.bJk=new B.it(6,5,6,5)
D.bJp=new B.Q(6,6,8,6)
D.bJA=new B.Q(8,14,8,14)
D.bJB=new B.Q(8,22,8,22)
D.bJJ=new B.Q(8,6,12,6)
D.bJR=new B.Q(8,8,8,4)
D.aom=new B.Q(9,9,9,6)
D.bK2=new B.it(2.5,2.5,2.5,2.5)
D.bK3=new B.Q(10.5,0,10.5,0)
D.bK4=new B.Q(7,1.5,7,1.5)
D.d6w=w([0.393,0.769,0.189,0,0,0.349,0.686,0.168,0,0,0.272,0.534,0.131,0,0,0,0,0,1,0],x.x)
D.bKk=new B.uR(null,null,D.d6w,A.yh)
D.d3c=w([0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0.2126,0.7152,0.0722,0,0,0,0,0,1,0],x.x)
D.bKl=new B.uR(null,null,D.d3c,A.yh)
D.aXN=new B.G(!0,A.aF,null,null,null,null,11,A.u,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h5W=new B.B("WORD DESIGN",null,D.aXN,null,null,null,null,null,null,null,null,null)
D.bL0=new B.by(1,A.ba,D.h5W,null)
D.h5y=new B.B("Slides database",null,Af.vN,null,null,null,null,null,null,null,null,null)
D.h2M=new B.B("Admin only \xb7 keep as many as you like",null,X.aXd,null,null,null,null,null,null,null,null,null)
D.dA2=w([D.h5y,A.bF,D.h2M],x.p)
D.bz9=new B.fp(A.ah,A.e,A.h,A.E,null,A.p,null,0,D.dA2,null)
D.bL3=new B.by(1,A.ba,D.bz9,null)
D.fXY=new B.B("NGMY logo",null,A.fE,null,null,null,null,null,null,null,null,null)
D.bL6=new B.by(1,A.ba,D.fXY,null)
D.fE2=new B.G(!0,A.ab,null,null,null,null,12,A.u,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h7Z=new B.B("TALK TO THE EDITOR",null,D.fE2,null,null,null,null,null,null,null,null,null)
D.bLr=new B.by(1,A.ba,D.h7Z,null)
D.fRy=new B.B("Tell the AI what to change",null,Af.vN,null,null,null,null,null,null,null,null,null)
D.bLL=new B.by(1,A.ba,D.fRy,null)
D.bNg=new B.EA(!0,"video/mp4")
D.fC9=new B.G(!0,A.c,null,null,null,null,16,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPu=new B.B("Move presentations between devices",null,D.fC9,null,null,null,!1,null,null,1,null,null)
D.bNl=new B.dx(A.dM,A.a5,A.f,D.fPu,null)
D.fQJ=new B.B("Edit in Slides",null,A.j2,null,null,null,null,null,null,null,null,null)
D.bNn=new B.dx(A.dM,A.z,A.f,D.fQJ,null)
D.bND=new B.di(1,A.cm,D.bNn,null)
D.a2S=new B.a_(60988,"MaterialIcons",!1)
D.bR5=new B.a_(61352,"MaterialIcons",!1)
D.aq5=new B.a_(61531,"MaterialIcons",!1)
D.bSh=new B.a_(63062,"MaterialIcons",!1)
D.bSo=new B.a_(63109,"MaterialIcons",!1)
D.bSB=new B.a_(63206,"MaterialIcons",!1)
D.aqI=new B.a_(63238,"MaterialIcons",!1)
D.bSU=new B.a_(63338,"MaterialIcons",!1)
D.a3v=new B.a_(63365,"MaterialIcons",!1)
D.a3w=new B.a_(63367,"MaterialIcons",!1)
D.a3x=new B.a_(63368,"MaterialIcons",!1)
D.aqT=new B.a_(63384,"MaterialIcons",!1)
D.bTa=new B.a_(63525,"MaterialIcons",!1)
D.bTe=new B.a_(63568,"MaterialIcons",!1)
D.bTA=new B.a_(983072,"MaterialIcons",!1)
D.bU0=new B.a_(983271,"MaterialIcons",!0)
D.as_=new B.a_(983965,"MaterialIcons",!1)
D.as0=new B.a_(983966,"MaterialIcons",!1)
D.bUZ=new B.a_(984592,"MaterialIcons",!1)
D.bVe=new B.ae(A.uU,16,A.aF,null,null,null)
D.asf=new B.ae(A.oH,18,A.c,null,null,null)
D.bVD=new B.ae(A.D0,18,L.lJ,null,null,null)
D.bWi=new B.ae(A.jL,11,null,null,null,null)
D.bWs=new B.ae(A.a3a,null,A.ew,null,null,null)
D.bX0=new B.ae(A.th,18,A.aF,null,null,null)
D.bX6=new B.ae(A7.Dd,14,null,null,null,null)
D.bX7=new B.ae(A.ej,28,A.bX,null,null,null)
D.bXj=new B.ae(A.qV,20,A.c,null,null,null)
D.bXq=new B.ae(A.zz,null,null,null,null,null)
D.bXv=new B.ae(A.jt,18,A.fJ,null,null,null)
D.bXA=new B.ae(A.kc,null,null,null,null,null)
D.bSj=new B.a_(63065,"MaterialIcons",!1)
D.bYd=new B.ae(D.bSj,15,A.c,null,null,null)
D.bSp=new B.a_(63113,"MaterialIcons",!1)
D.bYj=new B.ae(D.bSp,null,A.ab,null,null,null)
D.bYI=new B.ae(A.uT,22,A.bL,null,null,null)
D.bZ2=new B.ae(A.td,18,null,null,null,null)
D.bZ8=new B.ae(A.Dl,12,A.c,null,null,null)
D.bUD=new B.a_(983687,"MaterialIcons",!1)
D.bZl=new B.ae(D.bUD,null,A.bo,null,null,null)
D.bZv=new B.ae(A.hd,null,A.bo,null,null,null)
D.bZP=new B.ae(A.pG,22,A.c,null,null,null)
D.bZT=new B.ae(A.cB,13,A.c,null,null,null)
D.bZZ=new B.ae(A.ej,26,A.aA,null,null,null)
D.c_2=new B.ae(A.tl,26,A.c,null,null,null)
D.Qh=new B.ae(A.jL,8,A.c,null,null,null)
D.c_n=new B.ae(A.oH,40,A.c,null,null,null)
D.c_o=new B.ae(A.bQ2,null,null,null,null,null)
D.c_s=new B.ae(A.v7,20,null,null,null,null)
D.bUC=new B.a_(983683,"MaterialIcons",!1)
D.c_E=new B.ae(D.bUC,null,A.b2,null,null,null)
D.c_F=new B.ae(A.jL,16,A.bo,null,null,null)
D.c0_=new B.ae(A.pE,null,null,null,null,null)
D.asQ=new B.ae(A.tg,22,A.c,null,null,null)
D.c05=new B.ae(A.e9,17,A.c,null,null,null)
D.asR=new B.ae(A.jL,9,A.c,null,null,null)
D.c0a=new B.ae(A.wP,null,null,null,null,null)
D.bQj=new B.a_(57744,"MaterialIcons",!1)
D.c0h=new B.ae(D.bQj,null,null,null,null,null)
D.c0k=new B.ae(A.wP,16,null,null,null,null)
D.bV6=new B.a_(985181,"MaterialIcons",!1)
D.Ie=new B.ae(D.bV6,null,null,null,null,null)
D.c0w=new B.ae(A.kc,16,A.bL,null,null,null)
D.bUt=new B.a_(983615,"MaterialIcons",!1)
D.c0y=new B.ae(D.bUt,12,A.c,null,null,null)
D.asX=new B.ae(A.zi,16,null,null,null,null)
D.c0G=new B.ae(A.e9,21,A.c,null,null,null)
D.c0L=new B.ae(A.hd,17,A.c,null,null,null)
D.c0M=new B.ae(A.uT,null,null,null,null,null)
D.c13=new B.ae(A.a49,20,A.aF,null,null,null)
D.c1i=new B.ae(A.oG,22,E.nx,null,null,null)
D.c1r=new B.ae(A.qU,13,A.ab,null,null,null)
D.c1u=new B.ae(A.arL,20,A.aF,null,null,null)
D.bQ0=new B.a_(57495,"MaterialIcons",!1)
D.c1z=new B.ae(D.bQ0,null,null,null,null,null)
D.c1D=new B.ae(A.oI,18,A.c,null,null,null)
D.c2_=new B.ae(A.vb,28,A.c,null,null,null)
D.c2d=new B.ae(D.aqI,null,A.aD,null,null,null)
D.c2e=new B.ae(A.qV,22,A.c,null,null,null)
D.at5=new B.ae(A.a2O,16,null,null,null,null)
D.c30=new B.ae(A.uT,32,A.c,null,null,null)
D.c3M=new B.ae(A.iW,22,A.c,null,null,null)
D.c3Q=new B.ae(A.tl,22,A.ab,null,null,null)
D.atm=new B.ae(A.uU,null,A.bV,null,null,null)
D.c4O=new B.ae(A.qO,18,null,null,null,null)
D.c5q=new B.ae(A.e9,18,A.bt,null,null,null)
D.c5x=new B.ae(A.arG,null,null,null,null,null)
D.c5Y=new B.e8(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,A.aXB,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eM,!0,null,null,null,null)
D.ftJ=new B.G(!0,A.bP,null,null,null,null,null,A.cD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.c6f=new B.e8(null,null,null,null,null,null,null,null,null,null,"Type here\u2026",null,D.ftJ,null,null,null,!0,!0,!1,null,null,null,null,null,null,!0,A.ag,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.eM,!0,null,null,null,null)
D.c6G=new B.e8(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,"",null,null,null,null,null,null,null,null,null,null,null,A.eM,!0,null,null,null,null)
D.daT=w([A.dX,A.aD],x.O)
D.c8O=new B.a7(A.a5,A.a9,A.x,D.daT,null,null)
D.c9_=new B.a7(A.aZ,A.b4,A.WB,A.aAx,null,null)
D.bhe=new B.u(1,0.5568627450980392,0.5411764705882353,0.5215686274509804,A.q)
D.bmj=new B.u(1,0.23529411764705882,0.22745098039215686,0.21568627450980393,A.q)
D.bq5=new B.u(1,0.7254901960784313,0.7058823529411765,0.6784313725490196,A.q)
D.bjQ=new B.u(1,0.1803921568627451,0.17254901960784313,0.16470588235294117,A.q)
D.cVE=w([D.bhe,D.bmj,D.bq5,D.bjQ],x.O)
D.c9k=new B.a7(A.ay,A.aC,A.x,D.cVE,A.IL,null)
D.dAa=w([A.cO,A.bE,A.b7],x.O)
D.c9m=new B.a7(A.aZ,A.b4,A.WB,D.dAa,null,null)
D.dBN=w([A.bo,A.ci],x.O)
D.c9r=new B.a7(A.a5,A.a9,A.x,D.dBN,null,null)
D.dwc=w([A.h_,A.d6,A.at],x.O)
D.c9t=new B.a7(A.ay,A.aC,A.x,D.dwc,null,null)
D.dhi=w([A.cW,A.fq],x.O)
D.c9x=new B.a7(A.a5,A.a9,A.x,D.dhi,null,null)
D.dA4=w([L.lJ,A.d6],x.O)
D.au9=new B.a7(A.a5,A.a9,A.x,D.dA4,null,null)
D.bn5=new B.u(1,0.9686274509803922,0.8901960784313725,0.6313725490196078,A.q)
D.dA1=w([D.bn5,A.wt,A.c3],x.O)
D.c9B=new B.a7(A.a5,A.a9,A.x,D.dA1,null,null)
D.dcF=w([A.bc,A.dn,A.ep],x.O)
D.c9C=new B.a7(A.ay,A.aC,A.x,D.dcF,null,null)
D.Qz=new B.a7(A.a5,A.a9,A.x,A.J3,null,null)
D.bwG=new B.u(1,0.9019607843137255,0.7568627450980392,0.3607843137254902,A.q)
D.cOw=w([D.bwG,A.c3,A.jI],x.O)
D.aug=new B.a7(A.ay,A.aC,A.x,D.cOw,null,null)
D.dna=w([A.uo,A.aE,D.Ce],x.O)
D.caG=new B.a7(A.a5,A.a9,A.x,D.dna,null,null)
D.byb=new B.u(1,0.43137254901960786,0.41568627450980394,0.396078431372549,A.q)
D.bkT=new B.u(1,0.6627450980392157,0.6431372549019608,0.615686274509804,A.q)
D.brk=new B.u(1,0.3333333333333333,0.3215686274509804,0.3058823529411765,A.q)
D.dbK=w([D.byb,D.bkT,D.brk],x.O)
D.auh=new B.a7(A.a5,A.a9,A.x,D.dbK,null,null)
D.bn7=new B.u(1,0.0392156862745098,0.06666666666666667,0.13333333333333333,A.q)
D.ccG=w([AE.ale,D.bn7],x.O)
D.caP=new B.a7(A.aZ,A.b4,A.x,D.ccG,null,null)
D.d9C=w([A.nw,A.bD],x.O)
D.caT=new B.a7(A.aZ,A.b4,A.x,D.d9C,null,null)
D.dsH=w([A.aD,A.dR],x.O)
D.caZ=new B.a7(A.a5,A.a9,A.x,D.dsH,null,null)
D.ak3=new B.u(1,0.1803921568627451,0.25882352941176473,0.4392156862745098,A.q)
D.aCi=w([D.ak3,D.jH,D.ML],x.O)
D.cbu=new B.a7(A.ay,A.aC,A.x,D.aCi,null,null)
D.cOo=w([A.dA,A.dQ],x.O)
D.cbE=new B.a7(A.aZ,A.b4,A.x,D.cOo,null,null)
D.dpw=w([A.wh,A.C7],x.O)
D.ccq=new B.a7(A.a5,A.a9,A.x,D.dpw,null,null)
D.fZy=new B.B("Which Bio link?",null,A.cF,null,null,null,null,null,null,null,null,null)
D.ccD=new B.qe(null,D.fZy,null,null,null,null,null,null,null,null,!0,null,null,!1,null,null,null,!1,null,null,null,null,null,null,null,null,!0,null,null)
D.zY=w([82,9,106,213,48,54,165,56,191,64,163,158,129,243,215,251,124,227,57,130,155,47,255,135,52,142,67,68,196,222,233,203,84,123,148,50,166,194,35,61,238,76,149,11,66,250,195,78,8,46,161,102,40,217,36,178,118,91,162,73,109,139,209,37,114,248,246,100,134,104,152,22,212,164,92,204,93,101,182,146,108,112,72,80,253,237,185,218,94,21,70,87,167,141,157,132,144,216,171,0,140,188,211,10,247,228,88,5,184,179,69,6,208,44,30,143,202,63,15,2,193,175,189,3,1,19,138,107,58,145,17,65,79,103,220,234,151,242,207,206,240,180,230,115,150,172,116,34,231,173,53,133,226,249,55,232,28,117,223,110,71,241,26,113,29,41,197,137,111,183,98,14,170,24,190,27,252,86,62,75,198,210,121,32,154,219,192,254,120,205,90,244,31,221,168,51,136,7,199,49,177,18,16,89,39,128,236,95,96,81,127,169,25,181,74,13,45,229,122,159,147,201,156,239,160,224,59,77,174,42,245,176,200,235,187,60,131,83,153,97,23,43,4,126,186,119,214,38,225,105,20,99,85,33,12,125],x.t)
D.r5=new C.mZ(0,"blank")
D.Ui=new C.mZ(1,"title")
D.n9=new C.mZ(2,"titleContent")
D.eiN=new C.mZ(3,"twoColumn")
D.Eo=new C.mZ(4,"section")
D.eiO=new C.mZ(5,"comparison")
D.JB=new C.mZ(6,"flashcard")
D.JC=new C.mZ(7,"quiz")
D.JD=new C.mZ(8,"worksheet")
D.auB=w([D.r5,D.Ui,D.n9,D.eiN,D.Eo,D.eiO,D.JB,D.JC,D.JD],B.at("O<mZ>"))
D.aDp=w([Au.Zl,A.dQ],x.O)
D.l4=w([A.c3,A.bL,A.hL,A.i8,D.Ce],x.O)
D.dUN=new C.ji("fireworks","Royal Fireworks","Thank you for celebrating with us",D.aDp,D.l4)
D.bwW=new B.u(1,0.2901960784313726,0.050980392156862744,0.11764705882352941,A.q)
D.boI=new B.u(1,0.07058823529411765,0.011764705882352941,0.0392156862745098,A.q)
D.d9Q=w([D.bwW,D.boI],x.O)
D.dUE=new C.ji("confetti","Golden Confetti","Together we rise",D.d9Q,D.l4)
D.d6D=w([A.nn,A.YU],x.O)
D.dUF=new C.ji("crown","Crown of Glory","Built for our community",D.d6D,D.l4)
D.bkG=new B.u(1,0.011764705882352941,0.10588235294117647,0.1803921568627451,A.q)
D.bol=new B.u(1,0.00392156862745098,0.023529411764705882,0.058823529411764705,A.q)
D.de6=w([D.bkG,D.bol],x.O)
D.vg=w([A.bP,A.aS,A.c,A.bm,A.an],x.O)
D.dUz=new C.ji("aurora","Aurora Gala","A brighter future, together",D.de6,D.vg)
D.bq7=new B.u(1,0.027450980392156862,0.01568627450980392,0.00392156862745098,A.q)
D.dpE=w([G.agS,D.bq7],x.O)
D.dUQ=new C.ji("champagne","Champagne Toast","Cheers to every member",D.dpE,D.l4)
D.dUR=new C.ji("diamonds","Diamond Rain","Every member is a jewel",A3.aE9,D.vg)
D.bhI=new B.u(1,0.3568627450980392,0.16470588235294117,0.023529411764705882,A.q)
D.bnL=new B.u(1,0.10196078431372549,0.043137254901960784,0.00784313725490196,A.q)
D.dvo=w([D.bhI,D.bnL],x.O)
D.dUu=new C.ji("starburst","Golden Starburst","Thank you!",D.dvo,D.l4)
D.ccN=w([A.fA,A.yw],x.O)
D.ah1=new B.u(1,0.615686274509804,0.3058823529411765,0.3607843137254902,A.q)
D.S9=w([A.pp,A.ix,A.wu,A.ph,D.ah1],x.O)
D.dUY=new C.ji("balloons","Luxury Balloons","Let's celebrate",D.ccN,D.S9)
D.d5P=w([A.Z9,A.w],x.O)
D.dUM=new C.ji("galaxy","Galaxy Spiral","The sky is not the limit",D.d5P,D.vg)
D.buD=new B.u(1,0.047058823529411764,0.00392156862745098,0.00392156862745098,A.q)
D.dlS=w([A.ky,D.buD],x.O)
D.dUH=new C.ji("redcarpet","Red Carpet","Tonight we shine",D.dlS,D.l4)
D.bs1=new B.u(1,0.10980392156862745,0.0784313725490196,0.0196078431372549,A.q)
D.bpS=new B.u(1,0.0196078431372549,0.011764705882352941,0.00392156862745098,A.q)
D.dqC=w([D.bs1,D.bpS],x.O)
D.dUw=new C.ji("coins","Gold Coin Rain","Every contribution counts",D.dqC,D.l4)
D.dyi=w([A.dA,A.i7],x.O)
D.dUC=new C.ji("lanterns","Sky Lanterns","Lighting the way together",D.dyi,D.l4)
D.blW=new B.u(1,0.0784313725490196,0.00784313725490196,0.0392156862745098,A.q)
D.d3z=w([A.yy,D.blW],x.O)
D.dUy=new C.ji("hearts","Floating Hearts","Made with love",D.d3z,D.S9)
D.bio=new B.u(1,0.23137254901960785,0.0392156862745098,0.10980392156862745,A.q)
D.bjn=new B.u(1,0.058823529411764705,0.00784313725490196,0.027450980392156862,A.q)
D.dA_=w([D.bio,D.bjn],x.O)
D.dUX=new C.ji("petals","Rose Petals","Thank you, from our hearts",D.dA_,D.S9)
D.bvJ=new B.u(1,0.00784313725490196,0.06274509803921569,0.0392156862745098,A.q)
D.dvM=w([A.ll,D.bvJ],x.O)
D.dUt=new C.ji("butterflies","Golden Butterflies","New beginnings",D.dvM,D.l4)
D.brf=new B.u(1,0.0392156862745098,0.0392156862745098,0.12156862745098039,A.q)
D.d4F=w([D.brf,A.w],x.O)
D.dUP=new C.ji("neon","Neon Night","Let's go!",D.d4F,D.vg)
D.bnn=new B.u(1,0.0196078431372549,0.00392156862745098,0.050980392156862744,A.q)
D.dsU=w([A.N7,D.bnn],x.O)
D.dUS=new C.ji("disco","Disco Ball","Party time",D.dsU,D.vg)
D.brR=new B.u(1,0.11764705882352941,0.0392156862745098,0.1803921568627451,A.q)
D.dso=w([A.h_,D.brR],x.O)
D.dUx=new C.ji("sunrise","Golden Sunrise","A new day for our community",D.dso,D.l4)
D.drZ=w([A.rK,A.dQ],x.O)
D.dUT=new C.ji("pearls","Ocean Pearls","Deep roots, bright future",D.drZ,D.vg)
D.bkN=new B.u(1,0.047058823529411764,0.11764705882352941,0.22745098039215686,A.q)
D.dsc=w([D.bkN,A.dQ],x.O)
D.dUW=new C.ji("snow","Winter Gala","Warm wishes to all",D.dsc,D.vg)
D.bgS=new B.u(1,0.0784313725490196,0.13725490196078433,0.10196078431372549,A.q)
D.bi9=new B.u(1,0.01568627450980392,0.03137254901960784,0.0196078431372549,A.q)
D.dyO=w([D.bgS,D.bi9],x.O)
D.dUL=new C.ji("laurel","Laurel Victory","We did it together",D.dyO,D.l4)
D.bgH=new B.u(1,0.12156862745098039,0.06274509803921569,0.2,A.q)
D.boh=new B.u(1,0.027450980392156862,0.011764705882352941,0.050980392156862744,A.q)
D.d2t=w([D.bgH,D.boh],x.O)
D.dUV=new C.ji("ribbons","Silk Ribbons","Elegance in every step",D.d2t,D.l4)
D.bpu=new B.u(1,0.023529411764705882,0.01568627450980392,0.00784313725490196,A.q)
D.cOl=w([G.Cd,D.bpu],x.O)
D.dUI=new C.ji("kente","Kente Pride","Proud of our roots",D.cOl,D.l4)
D.bsI=new B.u(1,0.1411764705882353,0.10196078431372549,0.0196078431372549,A.q)
D.bw7=new B.u(1,0.027450980392156862,0.0196078431372549,0.00392156862745098,A.q)
D.dfV=w([D.bsI,D.bw7],x.O)
D.dUD=new C.ji("trophy","Trophy Shine","Winners together",D.dfV,D.l4)
D.dsk=w([Av.MS,A.w],x.O)
D.dUv=new C.ji("shooting","Shooting Stars","Make a wish",D.dsk,D.vg)
D.bh1=new B.u(1,0.10980392156862745,0.07058823529411765,0.023529411764705882,A.q)
D.al_=new B.u(1,0.0196078431372549,0.011764705882352941,0.00784313725490196,A.q)
D.dz6=w([D.bh1,D.al_],x.O)
D.dUJ=new C.ji("bokeh","Golden Bokeh","Shine bright",D.dz6,D.l4)
D.bhr=new B.u(1,0.0392156862745098,0.058823529411764705,0.1411764705882353,A.q)
D.dmJ=w([D.bhr,A.w],x.O)
D.dUB=new C.ji("orbits","Golden Orbits","Always moving forward",D.dmJ,D.l4)
D.bvK=new B.u(1,0.0392156862745098,0.011764705882352941,0.047058823529411764,A.q)
D.diV=w([A.aii,D.bvK],x.O)
D.dUG=new C.ji("flowers","Blooming Garden","Growing together",D.diV,D.S9)
D.bhc=new B.u(1,0.07450980392156863,0.027450980392156862,0.1803921568627451,A.q)
D.bhZ=new B.u(1,0.00784313725490196,0.00392156862745098,0.03137254901960784,A.q)
D.dxL=w([D.bhc,D.bhZ],x.O)
D.dUA=new C.ji("music","Music Party","Celebrate with us",D.dxL,D.vg)
D.bj1=new B.u(1,0.16470588235294117,0.0392156862745098,0.22745098039215686,A.q)
D.bwz=new B.u(1,0.027450980392156862,0.00784313725490196,0.047058823529411764,A.q)
D.d3N=w([D.bj1,D.bwz],x.O)
D.dUU=new C.ji("mandala","Royal Mandala","Harmony and unity",D.d3N,D.l4)
D.dj0=w([G.Cd,D.al_],x.O)
D.dUO=new C.ji("sparklers","Golden Sparklers","Light up the night",D.dj0,D.l4)
D.dUK=new C.ji("city","City Lights","The whole city celebrates",D.aDp,D.l4)
D.Iw=w([D.dUN,D.dUE,D.dUF,D.dUz,D.dUQ,D.dUR,D.dUu,D.dUY,D.dUM,D.dUH,D.dUw,D.dUC,D.dUy,D.dUX,D.dUt,D.dUP,D.dUS,D.dUx,D.dUT,D.dUW,D.dUL,D.dUV,D.dUI,D.dUD,D.dUv,D.dUJ,D.dUB,D.dUG,D.dUA,D.dUU,D.dUO,D.dUK],B.at("O<ji>"))
D.eL_=new B.y("","No ring")
D.f0v=new B.y("platinum","Platinum")
D.eXu=new B.y("glow","Glow")
D.eOI=new B.y("double","Double line")
D.eNA=new B.y("framed","Gallery frame")
D.eKv=new B.y("rosegold","Rose gold")
D.eYj=new B.y("jewels","Jeweled")
D.eUV=new B.y("aurora","Aurora")
D.DF=w([D.eL_,A.V3,D.f0v,D.eXu,M.aSI,D.eOI,A.aSG,D.eNA,D.eKv,D.eYj,D.eUV],x.L)
D.dZ0=new C.jw(19,"goldFiligree")
D.Nz=new B.u(1,1,0.984313725490196,0.9529411764705882,A.q)
D.hLc=w([D.Nz,A.aE,A.jI],x.O)
D.ki=new C.wv(0,"classic")
D.a8y=new C.ij("kuhowa_gold_filigree","Dhahabu ya Filigree","Mpaka wa dhahabu mara tatu \xb7 pembe za mapambo.",D.dZ0,4294966259,4279378237,4292128567,D.ki)
D.dZ1=new C.jw(20,"goldLaurel")
D.bww=new B.u(1,0.47843137254901963,0.3607843137254902,0.0784313725490196,A.q)
D.hLr=w([A.MD,A.iy,D.bww],x.O)
D.a8z=new C.ij("kuhowa_gold_laurel","Taji ya Dhahabu","Majani ya dhahabu kando \xb7 almasi kwenye pembe.",D.dZ1,4294966776,4282000405,4291404327,D.ki)
D.dZ2=new C.jw(21,"goldCrest")
D.ahj=new B.u(1,1,0.9725490196078431,0.9254901960784314,A.q)
D.bwD=new B.u(1,0.4196078431372549,0.30980392156862746,0.07058823529411765,A.q)
D.hLf=w([D.ahj,A.aE,D.bwD],x.O)
D.a8E=new C.ij("kuhowa_gold_crest","Muhuri wa Dhahabu","Medali za dhahabu kwenye pembe \xb7 shanga za lulu.",D.dZ2,4294965484,4283053072,4292128567,D.ki)
D.dZ3=new C.jw(22,"goldRibbon")
D.hL5=w([A.a_5,D.jH,A.iy],x.O)
D.a8q=new C.ij("kuhowa_gold_ribbon","Utepe wa Dhahabu","Pembe za bluu na dhahabu \xb7 almasi kati ya kila upande.",D.dZ3,4294967035,4279378237,4291404327,D.ki)
D.dZ4=new C.jw(23,"goldBaroque")
D.aj6=new B.u(1,1,0.9647058823529412,0.8941176470588236,A.q)
D.hLb=w([D.aj6,A.aE,A.jI],x.O)
D.a8t=new C.ij("kuhowa_gold_baroque","Ukanda wa Dhahabu","Ukanda mzito wa dhahabu \xb7 rosette kwenye pembe.",D.dZ4,4294964964,4283053072,4292128567,D.ki)
D.dZ5=new C.jw(24,"goldStar")
D.by3=new B.u(1,1,0.9882352941176471,0.9647058823529412,A.q)
D.hLk=w([D.by3,A.aE,D.jH],x.O)
D.a8C=new C.ij("kuhowa_gold_star","Nyota ya Dhahabu","Nyota za dhahabu kwenye pembe \xb7 mstari wa bluu ndani.",D.dZ5,4294966518,4279378237,4292128567,D.ki)
D.cxq=w([D.a8y,D.a8z,D.a8E,D.a8q,D.a8t,D.a8C],x.h)
D.dZ6=new C.jw(25,"royalMaroon")
D.bnj=new B.u(1,0.9882352941176471,0.9607843137254902,0.9019607843137255,A.q)
D.agB=new B.u(1,0.47843137254901963,0.10588235294117647,0.13333333333333333,A.q)
D.ahg=new B.u(1,0.788235294117647,0.6352941176470588,0.22745098039215686,A.q)
D.hLL=w([D.bnj,D.agB,D.ahg],x.O)
D.Av=new C.wv(11,"royal")
D.a8w=new C.ij("royal_maroon","Kifalme Nyekundu","Ukanda mwekundu juu wenye almasi \xb7 baa nyekundu \xb7 muhuri wa dhahabu.",D.dZ6,4294768102,4281014802,4286192418,D.Av)
D.dZ7=new C.jw(26,"royalCream")
D.bux=new B.u(1,0.984313725490196,0.9647058823529412,0.9176470588235294,A.q)
D.FV=new B.u(1,0.8509803921568627,0.6823529411764706,0.24705882352941178,A.q)
D.hLj=w([D.bux,D.FV,D.agB],x.O)
D.a8s=new C.ij("royal_cream","Dhahabu na Krimu","Baa za dhahabu zinazong\u2019aa \xb7 muhuri wenye utepe.",D.dZ7,4294702826,4281014802,4286192418,D.Av)
D.dZ8=new C.jw(27,"royalEmerald")
D.bi1=new B.u(1,0.050980392156862744,0.20784313725490197,0.1568627450980392,A.q)
D.bgP=new B.u(1,0.9647058823529412,0.9254901960784314,0.8313725490196079,A.q)
D.hLH=w([D.bi1,D.FV,D.bgP],x.O)
D.a8v=new C.ij("royal_emerald","Zumaridi na Dhahabu","Karatasi ya kijani kibichi \xb7 baa za dhahabu.",D.dZ8,4279055656,4294372564,4293511014,D.Av)
D.dZ9=new C.jw(28,"royalNavy")
D.bob=new B.u(1,0.07058823529411765,0.12156862745098039,0.26666666666666666,A.q)
D.btY=new B.u(1,0.9529411764705882,0.9333333333333333,0.8784313725490196,A.q)
D.hLu=w([D.bob,D.FV,D.btY],x.O)
D.a8r=new C.ij("royal_navy","Bluu ya Usiku","Karatasi ya bluu ya usiku \xb7 baa za dhahabu.",D.dZ9,4279377732,4294176480,4293511014,D.Av)
D.dZa=new C.jw(29,"royalPlum")
D.bmM=new B.u(1,0.1803921568627451,0.06274509803921569,0.2196078431372549,A.q)
D.bup=new B.u(1,0.9686274509803922,0.9254901960784314,0.9568627450980393,A.q)
D.hLe=w([D.bmM,D.FV,D.bup],x.O)
D.a8x=new C.ij("royal_plum","Zambarau ya Kifalme","Karatasi ya zambarau \xb7 baa za dhahabu.",D.dZa,4281208888,4294438132,4293511014,D.Av)
D.dZb=new C.jw(30,"royalOnyx")
D.bm_=new B.u(1,0.10196078431372549,0.09803921568627451,0.09019607843137255,A.q)
D.bqD=new B.u(1,0.9607843137254902,0.9372549019607843,0.8901960784313725,A.q)
D.hLM=w([D.bm_,D.FV,D.bqD],x.O)
D.a8A=new C.ij("royal_onyx","Mkaa na Dhahabu","Karatasi nyeusi \xb7 baa za dhahabu.",D.dZb,4279900439,4294307811,4293511014,D.Av)
D.dZc=new C.jw(31,"royalTeal")
D.boX=new B.u(1,0.9725490196078431,0.984313725490196,0.9686274509803922,A.q)
D.bgZ=new B.u(1,0.058823529411764705,0.3215686274509804,0.3411764705882353,A.q)
D.hLI=w([D.boX,D.bgZ,D.ahg],x.O)
D.a8G=new C.ij("royal_teal","Bahari ya Kifalme","Ukanda wa bahari juu wenye almasi \xb7 baa za bahari.",D.dZc,4294507511,4279510570,4279194199,D.Av)
D.cxN=w([D.a8w,D.a8s,D.a8v,D.a8r,D.a8x,D.a8A,D.a8G],x.h)
D.c0U=new B.ae(G.apG,16,null,null,null,null)
D.bbN=new B.w3(A.bd,D.c0U,null,x.U)
D.bQs=new B.a_(58027,"MaterialIcons",!1)
D.bVk=new B.ae(D.bQs,16,null,null,null,null)
D.bbL=new B.w3(A.K,D.bVk,null,x.U)
D.bQt=new B.a_(58030,"MaterialIcons",!1)
D.bZs=new B.ae(D.bQt,16,null,null,null,null)
D.bbO=new B.w3(A.e4,D.bZs,null,x.U)
D.cDM=w([D.bbN,D.bbL,D.bbO],B.at("O<w3<qu>>"))
D.a8R=new C.jw(2,"elegantNavy")
D.hLO=w([A.a_5,D.jH,A.c3],x.O)
D.a8F=new C.ij("kuhowa_elegant_navy","Kuhowa \u2014 Bluu ya Kifalme",y.s,D.a8R,4294967035,4279378237,4290283019,D.ki)
D.aLV=new C.jw(3,"elegantGold")
D.bgI=new B.u(1,1,0.9882352941176471,0.9529411764705882,A.q)
D.bhU=new B.u(1,0.6509803921568628,0.5176470588235295,0.22745098039215686,A.q)
D.ain=new B.u(1,0.4196078431372549,0.2901960784313726,0.07058823529411765,A.q)
D.hL9=w([D.bgI,D.bhU,D.ain],x.O)
D.a8D=new C.ij("kuhowa_elegant_gold","Kuhowa \u2014 Dhahabu",y.Q,D.aLV,4294966515,4281016592,4289102906,D.ki)
D.dZd=new C.jw(4,"elegantEmerald")
D.bjg=new B.u(1,0.9647058823529412,0.984313725490196,0.9725490196078431,A.q)
D.bkg=new B.u(1,0.054901960784313725,0.23137254901960785,0.1803921568627451,A.q)
D.hLi=w([D.bjg,D.bkg,A.iy],x.O)
D.a8u=new C.ij("kuhowa_elegant_emerald","Kuhowa \u2014 Zumaridi","Mpaka mwembamba wa dhahabu \xb7 vichwa vya kijani ya zumaridi.",D.dZd,4294376440,4279122734,4291404327,D.ki)
D.dZe=new C.jw(5,"elegantBurgundy")
D.boK=new B.u(1,1,0.9686274509803922,0.9647058823529412,A.q)
D.hLq=w([D.boK,A.ahs,A.iy],x.O)
D.a8B=new C.ij("kuhowa_elegant_burgundy","Kuhowa \u2014 Mvinyo","Mpaka mwembamba wa dhahabu \xb7 vichwa vya rangi ya mvinyo.",D.dZe,4294965238,4283043359,4291404327,D.ki)
D.IA=w([D.a8w,D.a8s,D.a8v,D.a8r,D.a8x,D.a8A,D.a8G,D.a8F,D.a8D,D.a8q,D.a8t,D.a8u,D.a8B,D.a8y,D.a8z,D.a8E,D.a8C],x.h)
D.cLA=w([A.Ck,A.hI],x.O)
D.cLB=w([A.bc,A.bi,A.ep],x.O)
D.RZ=w([A.bL,A.i8,A.hL,A.aE,A.ph],x.O)
D.cOr=w([A.c3,D.jH,D.ML],x.O)
D.cOZ=w([1,2,4,8,16,32,64,128,27,54,108,216,171,77,154,47,94,188,99,198,151,53,106,212,179,125,250,239,197,145],x.t)
D.eIb=new B.y(4278913286,4280030216)
D.eIt=new B.y(4279373061,4278518787)
D.eIA=new B.y(4279898630,4278847235)
D.dfh=w([D.eIb,D.eIt,D.eIA],x.n)
D.daC=w(["\u265b","\u269c","\u2726"],x.s)
D.dYZ=new C.ye("Royal Onyx & Gold",D.dfh,4292128567,4294370209,4294965479,3874020544,D.daC)
D.eHZ=new B.y(4278326799,4278598442)
D.eI0=new B.y(4278395929,4278258953)
D.eI7=new B.y(4278599728,4278327826)
D.dy9=w([D.eHZ,D.eI0,D.eI7],x.n)
D.d4x=w(["\u269c","\u2756","\u2727"],x.s)
D.dYW=new C.ye("Imperial Emerald",D.dy9,4293050997,4294699968,4294180856,3872254170,D.d4x)
D.eI1=new B.y(4278455076,4278918747)
D.eI6=new B.y(4278587439,4278322714)
D.eIk=new B.y(4279051376,4278455076)
D.dw8=w([D.eI1,D.eI6,D.eIk],x.n)
D.dnt=w(["\u2654","\u2726","\u2748"],x.s)
D.dYQ=new C.ye("Sapphire Crown",D.dw8,4291417834,4294967295,4294310143,3871986666,D.dnt)
D.eIy=new B.y(4279894534,4283041554)
D.eIK=new B.y(4281008906,4279042307)
D.eIS=new B.y(4284221976,4279894534)
D.dCt=w([D.eIy,D.eIK,D.eIS],x.n)
D.d5Y=w(["\u265b","\u2766","\u2726"],x.s)
D.dYS=new C.ye("Ruby Throne",D.dCt,4293378685,4294963145,4294964466,3874213833,D.d5Y)
D.eIs=new B.y(4279371039,4281995100)
D.eIC=new B.y(4280092723,4278714896)
D.eIP=new B.y(4283045242,4279371039)
D.dyx=w([D.eIs,D.eIC,D.eIP],x.n)
D.dwx=w(["\u2655","\u2756","\u2727"],x.s)
D.dYX=new C.ye("Amethyst Palace",D.dyx,4293314984,4294963421,4294702591,3873229802,D.dwx)
D.eI3=new B.y(4278519045,4280032287)
D.eIl=new B.y(4279111184,4278321666)
D.eIH=new B.y(4280492839,4278716426)
D.duR=w([D.eI3,D.eIl,D.eIH],x.n)
D.dlE=w(["\u2726","\u25c6","\u2742"],x.s)
D.dYU=new C.ye("Obsidian & Platinum",D.duR,4293256418,4294967295,4294638330,3872378836,D.dlE)
D.eIz=new B.y(4279896588,4282194463)
D.eII=new B.y(4280553487,4279043334)
D.eIQ=new B.y(4283048488,4279896588)
D.dl4=w([D.eIz,D.eII,D.eIQ],x.n)
D.dAv=w(["\u2766","\u273f","\u2727"],x.s)
D.dYR=new C.ye("Rose Gold Velvet",D.dl4,4293440672,4294960345,4294964979,3874214602,D.dAv)
D.eI4=new B.y(4278520340,4279180595)
D.eI9=new B.y(4278718495,4278322443)
D.eIw=new B.y(4279510591,4278520340)
D.cVi=w([D.eI4,D.eI9,D.eIw],x.n)
D.dmo=w(["\u269c","\u2736","\u2756"],x.s)
D.dYV=new C.ye("Midnight Brass",D.cVi,4291405148,4293975208,4294439914,3872837564,D.dmo)
D.eJ4=new B.y(4294703086,4293780428)
D.eJ0=new B.y(4294307549,4293187253)
D.eJ5=new B.y(4294966517,4293977807)
D.d8l=w([D.eJ4,D.eJ0,D.eJ5],x.n)
D.dmN=w(["\u269c","\u265b","\u2726"],x.s)
D.dYY=new C.ye("Ivory Marble & Gold",D.d8l,4289760572,4286209048,4280951062,3863625518,D.dmN)
D.eIf=new B.y(4278978566,4280555024)
D.eIv=new B.y(4279504137,4278518530)
D.eIM=new B.y(4281211923,4278978566)
D.d5O=w([D.eIf,D.eIv,D.eIM],x.n)
D.dxk=w(["\u2742","\u2726","\u265c"],x.s)
D.dYT=new C.ye("Onyx & Copper",D.d5O,4291856987,4294365880,4294964718,3873885630,D.dxk)
D.cP6=w([D.dYZ,D.dYW,D.dYQ,D.dYS,D.dYX,D.dYU,D.dYR,D.dYV,D.dYY,D.dYT],B.at("O<ye>"))
D.cRw=w([A.aE,D.Ce,A.i8],x.O)
D.eQZ=new B.y("Original",null)
D.eR8=new B.y("Wide 16:9",1.7777777777777777)
D.eTy=new B.y("Landscape 3:2",1.5)
D.eQp=new B.y("Photo 4:3",1.3333333333333333)
D.f4q=new B.y("Portrait 3:4",0.75)
D.aAG=w([D.eQZ,D.eR8,D.eTy,D.eQp,M.aSw,D.f4q],B.at("O<+(n,H?)>"))
D.aAH=w([A.i8,A.c4,A.b9,A.bh],x.O)
D.eTK=new B.y("","Original")
D.eVE=new B.y("circle","Circle")
D.f1j=new B.y("rounded","Rounded")
D.f2l=new B.y("triangle","Triangle")
D.eXK=new B.y("hexagon","Hexagon")
D.eW4=new B.y("diamond","Diamond")
D.eUU=new B.y("arch","Arch")
D.DM=w([D.eTK,D.eVE,D.f1j,D.f2l,D.eXK,D.eW4,D.eUU],x.L)
D.dTT=new C.lB("classic_blue","Classic Blue","Normal",A.bo,A.c,A.lm,A.dh,A.aL)
D.dU8=new C.lB("campus_green","Campus Green","Normal",A.b2,A.nu,A.ur,A.hk,A.cQ)
D.dU_=new C.lB("warm_sand","Warm Sand","Normal",A.e2,A.hL,A.bL,A.ia,A.oj)
D.dU6=new C.lB("slate_minimal","Slate Minimal","Normal",A.by,A.aS,A.bm,A.a_,A.aL)
D.dTS=new C.lB("coral_fresh","Coral Fresh","Normal",A.c9,A.hX,A.qg,A.k1,A.uk)
D.dU7=new C.lB("lavender_calm","Lavender Calm","Normal",A.b7,A.pm,A.on,A.mR,A.kv)
D.dTU=new C.lB("ocean_breeze","Ocean Breeze","Normal",A.fq,A.rT,A.wd,A.rD,A.ol)
D.akb=new B.u(1,0.9803921568627451,0.9607843137254902,1,A.q)
D.dU4=new C.lB("berry_pop","Berry Pop","Normal",A.fe,D.akb,A.kO,G.a_M,A.Cl)
D.dTV=new C.lB("midnight_pro","Midnight Pro","Professional",A.aD,A.a_,A.dA,A.kO,A.cA)
D.dU3=new C.lB("executive_navy","Executive Navy","Professional",A.d9,A.ajn,A.dh,A.lk,A.bP)
D.dU1=new C.lB("boardroom_charcoal","Boardroom Charcoal","Professional",A.an,A.bs,A.a_,A.aS,A.cA)
D.dTW=new C.lB("corporate_steel","Corporate Steel","Professional",A.oo,A.a_,A.mb,A.ft,A.bP)
D.dTZ=new C.lB("gold_luxe","Gold Luxe","Luxury",A.mO,A.dW,A.po,A.or,A.bL)
D.brW=new B.u(1,0.10196078431372549,0.0392156862745098,0.058823529411764705,A.q)
D.dU2=new C.lB("rose_gold_elite","Rose Gold Elite","Luxury",A.hI,D.brW,A.a_s,A.ix,A.ph)
D.dU5=new C.lB("platinum_night","Platinum Night","Luxury",A.cA,A.dQ,A.bs,A.aS,A.bm)
D.dU9=new C.lB("emerald_prestige","Emerald Prestige","Luxury",A.aV,A.qm,A.ff,A.qu,A.jY)
D.dTR=new C.lB("royal_purple","Royal Purple","Luxury",A.ns,A.Zs,A.kv,A.kO,A.MC)
D.dU0=new C.lB("neon_pitch","Neon Pitch","Bold",A.b9,A.dQ,A.a_,A.b_,A.bm)
D.dTY=new C.lB("crimson_impact","Crimson Impact","Bold",A.bD,A.ky,A.eq,A.rU,A.f_)
D.dTX=new C.lB("sunset_gallery","Sunset Gallery","Bold",A.fK,A.uk,A.k1,A.qg,A.mV)
D.IG=w([D.dTT,D.dU8,D.dU_,D.dU6,D.dTS,D.dU7,D.dTU,D.dU4,D.dTV,D.dU3,D.dU1,D.dTW,D.dTZ,D.dU2,D.dU5,D.dU9,D.dTR,D.dU0,D.dTY,D.dTX],B.at("O<lB>"))
D.d2d=w([A.c3,D.jH],x.O)
D.dll=w(["\ud83d\ude00","\ud83d\ude03","\ud83d\ude04","\ud83d\ude01","\ud83d\ude0a","\ud83d\ude0e","\ud83e\udd29","\ud83e\udd73","\ud83d\ude07","\ud83e\udd17","\ud83d\ude4c","\ud83d\udc4f","\ud83e\udd1d","\ud83d\udc4d","\ud83d\udc4b","\ud83d\udcaa","\ud83d\ude4f","\u2728"],x.s)
D.eUE=new B.y("Faces & people",D.dll)
D.cRA=w(["\ud83d\udca1","\ud83c\udfaf","\ud83d\ude80","\ud83d\udcc8","\ud83d\udcca","\ud83d\udccc","\ud83d\udccd","\ud83d\udce3","\ud83d\udd14","\ud83e\udded","\ud83d\udee0\ufe0f","\ud83d\udd27","\u2699\ufe0f","\ud83e\udde0","\ud83d\udcda","\ud83d\udcdd","\u270f\ufe0f","\ud83d\udcd6","\ud83d\uddc2\ufe0f","\ud83d\udcc5","\u23f0","\u2705","\u274c","\u26a0\ufe0f","\u2753","\u2757"],x.s)
D.eGO=new B.y("Ideas & work",D.cRA)
D.db8=w(["\ud83c\udf3f","\ud83c\udf31","\ud83c\udf33","\ud83c\udf38","\ud83c\udf3c","\ud83c\udf3b","\ud83c\udf1e","\ud83c\udf08","\ud83c\udf0a","\ud83d\udd25","\ud83d\udca7","\u2744\ufe0f","\ud83c\udf19","\u2b50","\ud83c\udf1f","\u2600\ufe0f","\ud83c\udf40"],x.s)
D.eXP=new B.y("Nature",D.db8)
D.dlu=w(["\ud83c\udfe0","\ud83c\udfeb","\ud83c\udfe5","\ud83c\udfe6","\ud83c\udfea","\ud83d\ude97","\ud83d\ude8c","\u2708\ufe0f","\ud83c\udf81","\ud83d\udcb0","\ud83d\udcb5","\ud83d\udcb3","\ud83d\uded2","\ud83c\udfc6","\ud83e\udd47","\ud83c\udf89","\ud83c\udf88","\ud83c\udfb6","\ud83c\udfb5","\ud83c\udfa4","\ud83d\udcf7","\ud83c\udfac","\ud83d\uddbc\ufe0f","\ud83d\udcbb","\ud83d\udcf1"],x.s)
D.eQX=new B.y("Places & things",D.dlu)
D.deO=w(["\u2764\ufe0f","\ud83d\udc9a","\ud83d\udc99","\ud83d\udc9c","\ud83e\udde1","\ud83d\udc9b","\ud83d\udda4","\ud83e\udd0d","\u2b06\ufe0f","\u27a1\ufe0f","\ud83d\udd36","\ud83d\udd37","\ud83d\udd34","\ud83d\udfe2","\ud83d\udd35","\ud83d\udfe1"],x.s)
D.eUZ=new B.y("Symbols",D.deO)
D.d2j=w([D.eUE,D.eGO,D.eXP,D.eQX,D.eUZ],B.at("O<+(n,ai<n>)>"))
D.bhh=new B.u(1,0.22745098039215686,0.15294117647058825,0.03137254901960784,A.q)
D.d2G=w([A.c3,D.ain,D.bhh],x.O)
D.bb2=new B.ab(0,A.G,A.FU,A.aML,40)
D.baF=new B.ab(0,A.G,A.pj,A.et,8)
D.d2V=w([D.bb2,D.baF],x.V)
D.d3t=w([4280171146,4280640491,4279080072,4278556265],x.t)
D.aB4=w([4294677052,4294626325,4293870660,4294210230,4287323382,4282090230,4280472558,4283096704,4294967295,4279310375],x.t)
D.a5T=w([A.i8,A.ep,A.bD,A.av,A.c9],x.O)
D.d4q=w(["All","Robotic","Nature","Warm","Bold","Clean"],x.s)
D.aiD=new B.u(1,0.043137254901960784,0.0392156862745098,0.03137254901960784,A.q)
D.d4C=w([A.a_g,D.aiD,A.a_g],x.O)
D.d4H=w([A.iy,D.jH,D.ML],x.O)
D.eQJ=new B.y(A.bd,D.a3w)
D.eSb=new B.y(A.K,D.a3v)
D.eLM=new B.y(A.e4,D.a3x)
D.d5I=w([D.eQJ,D.eSb,D.eLM],B.at("O<+(qu,a_)>"))
D.d5L=w([A.b7,A.aD],x.O)
D.d3=new C.JK(0,"text")
D.kj=new C.JK(1,"image")
D.f7=new C.JK(2,"shape")
D.Uh=new C.JK(3,"pdf")
D.lw=new C.JK(4,"signature")
D.a90=new C.JK(5,"bio")
D.d6J=w([D.d3,D.kj,D.f7,D.Uh,D.lw,D.a90],B.at("O<JK>"))
D.d6K=w([A.bq,A.cJ],B.at("O<IC>"))
D.d7o=w(["School","Documents","Sign & present"],x.s)
D.bb8=new B.ab(0,A.G,A.akP,A.vC,28)
D.d7M=w([D.bb8],x.V)
D.d85=w([4292128567,4279983648,4290190364,4279898632,4293436183,4279060385],x.t)
D.Sk=w(["Rocket","Trophy","Party popper","Confetti ball","Balloon","Wrapped gift","Birthday cake","Sparkles","Star","Glowing star","Fire","Light bulb","Gem stone","Crown","Money bag","Dollar banknote","Chart increasing","Bar chart","Bullseye","Globe showing americas","Globe showing europe-africa","Sun","Rainbow","Cloud","High voltage","Red heart","Handshake","Graduation cap","Books","Open book","Pencil","Laptop","Mobile phone","Microphone","Musical notes","Camera","Video camera","Megaphone","Bell","Calendar","Alarm clock","Hourglass done","Key","Locked","Shield","Gear","Hammer and wrench","Magnifying glass tilted left","Package","Shopping cart","House","Office building","Hospital","Ballot box with ballot","Automobile","Airplane","Seedling","Deciduous tree","Evergreen tree","Palm tree","Sunflower","Cherry blossom","Herb","Four leaf clover","Water wave","Mountain","Lion","Tiger face","Dog face","Cat face","Elephant","Unicorn","Butterfly","Honeybee","Owl","Eagle","Dolphin","Turtle","Panda","Fox","Rabbit face","Monkey face","Penguin","Horse","Bird","Peacock","Parrot","Red apple","Pizza","Hot beverage","Soccer ball","Basketball","Artist palette","Clapper board","Robot","Brain","Check mark button","Red question mark","Speech balloon","Compass","Crystal ball","Puzzle piece","1st place medal","Smiling face with sunglasses","Grinning face with big eyes","Star-struck","Partying face","Thinking face","Hundred points"],x.s)
D.aBv=w([A.i8,A.GJ,A.bm,A.c,A.pp,A.aE],x.O)
D.eFA=new B.y(0,4289230878)
D.eTi=new B.y(0.22,4294237318)
D.eTs=new B.y(0.42,4293048394)
D.f1w=new B.y(0.78,4291402286)
D.eGv=new B.y(1,4287916053)
D.a66=w([D.eFA,D.eTi,D.eTs,D.f1w,D.eGv],B.at("O<+(H,F)>"))
D.d9r=w(["HOME: the first tab. It has the NGMY brand, the Helper AI, loans, and the tech frames: Neural Link, Signal Grid, Core Protocol and the Vault Channel arcade.","TOOL HUB: the second tab. It holds the Business Card Creator, Menu Studio (restaurant menus and Bio link pages) and Business Essentials (invoices, receipts, flyers and other business papers).","SLIDES: the third tab. Presentations with many designs, an AI that makes decks, and Marriage documents.","NGMY HUB: the centre tab. Civic Registry, NGMY Store, Help Center and Insurance, Document Scanner, and the App Builder when it is switched on.","ADVISORS: the fifth tab. AI advisors you can chat with like real people. They help with jobs, applications, benefits and everyday questions, and they can answer in Swahili when you write Swahili.","CREATOR HUB: the sixth tab. Doc Share, Quote Calc, QR Generator, Play Zone, Kiswahili School, Recorder Studio, Video Studio and Phone Unlock.","PROFILE: the seventh tab. Theme, logout, legal pages and Worksheets (Projects, Cashier IOUs and receipts, and the Family Tree).","GROWTH INCOME: For now the Growth Income button (the wifi icon, top right of Home) works only for the admin: everyone else sees the same icon but it does not open. members buy an investment plan and earn daily by clocking in, on work days only (Monday to Friday, there is no clock-in on Saturday and Sunday). The wallet shows the balance, deposits, withdrawals and a history of the last two months, with the balance before and after each move. Missing 3 work days in a month removes the investment plan (a new plan must be bought), and the count starts again each month; a warning shows after the 2nd missed day. Clocking in 30 minutes late or more takes 30 percent off the earnings for that day. The investment plans are $5, $20, $30, $50 and $100; $100 is the most expensive plan and nothing above it is offered.","KING AND QUEEN CROWN: a crown badge for special members. A King or Queen receives a daily crown reward of one dollar, and the receipt shows in the wallet history.","WALLET: one balance everywhere in the app. The server keeps the balance so every phone shows the same number.","LOANS: Loan Services is a community help service: it helps members when they need help, for example funerals, buying a car, car repairs or family emergencies. For now the Loan Service button (top left of Home) works only for the admin: everyone else sees the same icon but it cannot be opened. The loan calculator (amount, interest rate and repayment period to try, the whole cost and every payment, and a button to make the tried terms the real loan terms) is for the admin only. The How it works frame is a five-step timeline (Apply, Review, Funds, Repay, Released). A loan is applied for with collateral, repaid in weekly payments, and the collateral is released back to the member when the loan is fully repaid. The admin sets the interest rate, the biggest loan and the repayment period in Loan Center, Loan terms; nothing is written into the screens. Before applying, the member sees the full cost (amount, interest, total to repay, number of payments, each payment, repayment period) and must tap I agree; the agreement is saved with the application. The application asks what the member needs help with (Funeral or Burial, Buy a car, Car repair, Family emergency, Other need), the date needed, the collateral with its estimated value and photos, and an optional family or guarantor contact. A loan shows as Pending, Approved, Paid Out, In Repayment, Repaid, Overdue or Declined, and the member sees a gentle reminder about the next payment.","NGMY STORE: buy and sell items inside the app. Approved members can open a store.","CIVIC REGISTRY: the community system for the M'MBONDO community. It registers members with a Registry ID card, counts members by state, records contributions with receipts, and lets Authorized Registrars enroll families. Registrars can print the community roster as a PDF.","CIVIC BIRTHDAYS AND FAMILY: the registry records children and their ages, shows a birthday reminder two days before, and congratulates a child on turning 18. Members can have a nickname that others search for, while registrars see the real name.","CIVIC VOTING AND STATE WALLET: the community votes on decisions inside the app, and each state has a wallet showing its funds, spending and trust deposits so the money is visible to everyone.","LIGHTNING GROUPS: groups inside the Civic Registry where people give together. A person asks to join with a name, phone number, state and address, and the group owner approves. The group shows named contribution rounds, receipts, who gave, who missed and how many times.","JOBS AND HELP: help finding jobs, house repairs and house workers, a Help Center with insurance, and the Helper AI for support.","CORE PROTOCOL: a collection of studios for curious minds: Universe, Electronics Lab (the AI Inventor now lives inside it as the AI button at the top), Construction Lab (real 3D wiring, plumbing and a house), Discovery Lab (Body Explorer, a real 3D human you can turn and look inside), Toolbox, Reaction Lab, Spark Painter, Rocket Lander, Title Animator and Circuit Lab. (Molecule Maker, DNA Lab, Ecosystem Lab, Balance Lab, Gear Lab, Laser Maze, Light Mixer, Orbit Studio, Swarm Studio, Chain Burst, Marble Music and Orbit Sequencer and Cipher Lab were removed and no longer exist.)","CITY AVATARS: the people of My House are the real characters from the NGMY 3D viewer files (Xbot.glb the X Bot, Michelle.glb the Dancer, Soldier.glb the Soldier), kept in the app (assets/avatars) and drawn with their own skeletons and animations (the X Bot and Soldier stand and walk, the Dancer dances). Their skin pictures are painted onto the body faces, and the body is thinned to a few thousand faces so the game stays quick, so they look a little more faceted than in the viewer. The X Bot is the one who goes through the rooms on the house tour and that you steer outside; in the tour sheet (Play) a Who walks the house? choice switches the tour guide to the Dancer, the Soldier or a plain person. The residents are the three characters too: they stay in the house, some stroll out into the garden for a while and go back in, and a resident with an open call for help shows a phone icon in the name. In every view of My House you can turn the camera all the way round (360) by dragging, with no button needed; Look all round (360) only moves you to the middle of the room at a normal distance. Names no longer float over the people in the rooms: tap a person to see their card. Outside, in the garden and town, the sky behind is space with stars, a galaxy, the Earth and the Moon. The Dancer is played slowly and kept on her spot, and the Soldier now faces the way he walks.","MY HOUSE, THE HALL AND THE CITY: the hall is a wide lobby: three doors in the middle of the back wall (the living room, the kitchen, the first bedroom) with a big video-wall TV on each side showing NGMY ads, the other seven doors on the two short walls, a blue carpet with the NGMY logo, sofas, armchairs, plants, lamps and consoles. In the Tour sheet, Book a hallway tour plays a tour of just the hall. Tapping a door asks whether to open it, close it or go through it. Outlets, switches, doors with their handles, TV frames, wall trim and the wiring job room are drawn so they never disappear when the camera turns, and from outside the house its walls hide the room. The residents live in the city (the Garden is the whole city): they walk about the streets, those with a call for help stand with a phone and a Help sign, and tapping the hospital or the shop building (or the Calls, Hospital, Shop and People buttons, or Community) opens those services over the city. In the city a Walk the city button gives you the walking controls, and Build adds roads, buildings and other things. Nobody is placed in the rooms during the house tour.","WALKING THE CITY: in the Garden (the whole city) press Walk the city and a round stick appears: slide a finger on it to walk, further from the middle is faster, and the Run and Jump buttons make the person run and jump. Walk up to the front door of the house, the hospital or the shop and the person goes in; inside the hospital walk onto the blue mat to admit the sick and up to a bed to treat the patient, inside the shop walk onto the yellow mat for food and the purple mat for medicine, and walk onto the green mat to go out. Near an animal an Act button feeds it for a point, and near a car, ambulance or fire truck it lets you get in and drive it with the stick and park it. When somebody calls for help the phone rings with a call banner: Answer opens the calls. Phone, hospital, shop, animals and cars are all in the city, and the hall of the house shows only three doors: the other rooms are reached from the map or from their own door.","ELECTRICAL SAFETY SCHOOL: every wiring lesson and job is judged by one safety engine. A job is CORRECT only if the connections are on the right terminals, complete and safe; a device that works (a TV that plays, a fan that spins) is never proof of safe wiring. Swapped hot and neutral, a missing neutral or ground, neutral used as ground, hot touching ground, loose or bare wires and a fan on a plain box are all UNSAFE and can never pass. Results are CORRECT, INCORRECT, UNSAFE, INCOMPLETE or REQUIRES VERIFICATION. The lessons have Learn (a wrong wire is refused and explained), Practice (anything is allowed and power-on shows the consequence with arcs, sparks, smoke or flames) and Test (silent, graded on submit with score, explanations and violations). The wiring job has a Test mode switch and Submit for inspection in its settings. A Wire guide lists U.S. wire colors, exceptions and the rule to verify. Diagram lessons (three-way switch, fan with a light kit) are in the Construction Lab menu.","CITY LIFE AND THE HALL, UPDATE: seen from outside the house, the walls on your side are left out (like a doll house) so the TVs and the logo carpet are never hidden at any angle, and the TV pictures also show when seen from behind. The house outside has a big wide NGMY poster on the back wall and different framed posters on the sides. In the city every resident is busy with a real job (the nurse on duty at the hospital, feeding the animals, teaching at the school, washing the car, cooking, resting on the bench, watering the flowers), with props such as steam, grain and water, and a small name for the activity. The city has many more houses. Inside the hospital there are a nurse, a doctor and patients lying in their beds, and you treat them by walking to them. A Full screen button in the city turns the game on its side like a video and keeps only the stick, Run, Jump and Act buttons. When somebody calls, a phone-call screen with a green Answer and a red hang-up button appears; answering opens a text message with what the person needs, a button that shows where they are and a button that takes you to fix it.","WIRING CONTROLS, UPDATE: in a wiring lesson or job, tap a house wire to pick it up (it glows), then tap the screw, wire nut or fixture wire it joins and they connect; tap a joined wire, nut or screw again to take it off. Ceiling lights and fans are shown from the side so the house wires, fixture wires and nuts are all in view. Swiping up looks up and swiping right turns right in every 3D view. The wiring job has Look up (from the floor to the ceiling) and Behind the TV buttons, the Voltage tester sits at the end of the tray where Unplug was, and tapping something plugged in pulls the plug (a TV no longer opens full screen). The house has a Look up at the ceiling button. The Construction Lab menu has a new Safety inspection job (a test job marked on submit). The plumbing sink, basin, mirror and shut-off valves are bigger and look more like a real bathroom sink.","LESSON ROOMS, UPDATE: every lesson room is now big and bare (no furniture, no bathroom fixtures in the electrical lessons), so the outlets and the switch are in the open and nothing hides them or the TV. The wall TV is big by default (Cinema 150) and the TV button lets you choose the wall it hangs on: back, left or right.","CITY AND PLUMBING, UPDATE: the city is now a big town (1800 by 1400) with streets both ways and houses spread over nearly all the land; far-away houses are not drawn while you walk close by, to keep it quick. The Full screen button sits in the row with the door buttons next to Living room. The top buttons are smaller. The Construction Lab menu no longer has the Learn mode and Practice mode buttons or the Community card (the community lives in the city). Seen from outside the house, a whole wall is left out or kept, never half a wall. In the lessons and the wiring job the wall, studs, box and cable cannot be tapped, only the wires and screws. The plumbing job now shows a blue Next box that says exactly what to do, with a Show me button that picks the tool and turns the view to the spot; it shows only the parts the job needs; and a leak shows big drops, a puddle and a red LEAK label that names the joint, with the instruction to turn the water off and tighten it with the wrench.","CITY ADS AND TRAFFIC: the city has about a dozen billboards along the streets, each playing a different NGMY ad (new ads for NGMY Jobs, Loans, Kiswahili School, Civic Registry, Core Protocol, Build and Fix and Create, plus the NGMY app ads), big houses with two big TVs on the front that play ads too, and a huge billboard behind the main house with the NGMY logo and New Global Movement for Youth. Big buses and big police cars with flashing lights drive themselves up and down the streets, each with a billboard on both sides playing an ad, and two helicopters circle in the sky pulling banners that play ads. The sign that says how many rooms still need work is at the top of the house, above the roof. Every person in the city is a different colour.","BACK BUTTON AND KNOCKOUTS: the round back button in the corner of every construction page (jobs, lessons, the city) fades away three seconds after the page opens, so it never covers the work; two quick taps where it was bring it back for another three seconds. In Wiring a house, putting a box on a stud closes the view in on it and shows its two tabs; tapping a box does the same, tapping an orange tab breaks it out (green tabs are out already). With the Cable roll, tap the box and then tap the knockout the cable goes in through (a closed tab is broken out for you) and the cable rolls in from the panel through that knockout. Tap a box that has power to start the next cable from it (it leaves through a free knockout); tap a box that has its cable to pull it out.","WIRING A HOUSE, THE FULL VERSION: after a box is on a stud, the Knockout tool closes the view in on the box and you break out its little round tab (a box needs one open knockout for each cable that comes in or goes on). The Cable roll pulls the cable from the breaker panel through the drilled studs; to go on from one box to the next (an outlet to another outlet, then to the switch) tap a blue box that has power first, then the next box, and tap the panel to start from it again. Then pick a device (Outlets, Switches or Lights groups) and tap a box that has its cable: the close-up opens where you connect each wire to its screw, push the device in and put the plate on. The Breaker button turns the power on and tests every finished device; flip a finished switch with Look to light the ceiling; plug in TVs, phones, a lamp, a toaster, a hair dryer, a washer, a dryer or a range from the TVs, Phones and Appliances groups. The tools are in groups: tap a group button (TVs, Switches, Outlets and the others) to open more and Back to return. The Hint button in the Wiring a house and Hanging drywall lessons shows the next step and lights the place; a hint costs 2 stars and a job finished without a hint earns 1 star (the same stars as the city).","WIRING A HOUSE AND HANGING DRYWALL: two big lessons in the Construction Lab Lessons list, just before Learn the trades. Wiring a house is a bare room of four framed walls with a door, a window, ceiling joists and a breaker panel, no drywall. Pick Outlet box, Switch box or Ceiling box and tap a stud or a joist; pick Drill and tap a stud to drill the hole the cable goes through (20 inches up), or the top plate over the switch; pick Cable roll and tap a box and the cable unrolls from the panel through the holes. The cable cannot go through a stud with no hole and never crosses a doorway; the light is fed from the switch through a hole in the top plate. Tasks: an outlet on each wall, a switch beside the door, a light box in the ceiling, all with cable. Hanging drywall is the same room already wired: hang the ceiling first (cut the narrow pieces with the Cutter first), then the walls, screw every sheet, cut the holes for the boxes, the door and the window with the Saw, put corner bead on the door and window, then for each surface mud, paper tape, two more coats with drying between, sand, and prime with the Roller. The tools, the mud bucket, the tape rolls and the stack of sheets lie on the floor. The Whole room button shows the room from above with the near walls left out, and Inside brings you back. Every tool lies on the floor of the room (the cable roll and the drill; the stack of sheets, saw, mud, tape, knife, screw gun, T-square, sanding pole, corner bead and the roller): tap it in the picture to pick it up, as well as choosing it from the list, and the message says what to do first when it has nothing to work on yet. A double tap on the floor or a wall walks you over there, also from the whole room view. When you tap a wire in a device close-up the view turns to the side of the device where that wire goes (silver side, brass side, or the green screw from the front). In Wiring a house a tap on the plug or the cord of a TV, phone or machine pulls the plug out of the outlet. The marks that show where a tool works are bright balls that can be seen from every side, all the tools are on the screen at once, and Drill the lit drills every stud the cable still needs in one tap.","WIRING BY HAND AND TAP ANYWHERE: in Wiring a house the power does not go on to the next box until you have connected the wires in the first one yourself: put a device in the box (Outlets or Switches), open its close-up and join each wire to its screw. Only then can the Cable roll start the next cable from that box (a box whose wires are not connected only says so when tapped, and a second tap pulls its cable out), and the light only gets its cable once the switch is wired. The Hint button says so too. A double tap anywhere in the room, also when looking up at the ceiling or down at the floor, closes the view in on that spot (on a box when one is there), in the Wiring a house and Hanging drywall lessons. The knockouts are drawn like real ones: a flat strip on the edge of the box with a round punched tab (two pressed rings and a dimple), and a black hole with a torn edge and the bent tab hanging when it is broken out; a thin ring in orange, green or grey shows the state of the tab in the close-up. The tool buttons of Wiring a house are small square buttons in two rows; an open group (Outlets and the others) shows two buttons in every row. The back button of a device close-up inside a job stays on the screen; only the one that leads back to the lab fades.","LESSONS ARE SAVED: what you do in Wiring a house, Hanging drywall, the device close-ups (outlets, switches, lights, fans) and the P-trap and faucet lessons is kept on the phone, also when the app is closed; opening the lesson again shows it just as you left it. The Diagram lessons keep your picks too. It is cleared when you finish the lesson (the house wired, the drywall finished, the device done) or press Start over. In Wiring a house, putting a box on a stud no longer moves the view (tap the box to look closer), the cable roll and the drill hang on two shelves on the wall beside the window (the view starts facing that wall), and the tool buttons are small squares in two rows of seven: Boxes, Outlets, Switches, Lights, Look, Drill, Cable roll on the first line and Breaker, TVs, Phones, Appliances, Knockout, Hint, Start over on the second, and the small counts (cables, devices, feet) sit in a little frame between the title and Steps.","OUTLET LESSON ROOMS: the room of an outlet lesson is named after the thing being fixed in a few words (Dryer outlet 4-wire, Range outlet 3-wire, Washer outlet, no longer Faucet), the outlet in it is drawn exactly like the one on the wiring bench before it is wired (a round dark receptacle on a cream plate with the slots of its type: the L neutral, the two hot blades and the ground hole of the 14-30 and 14-50, no ground hole on the 10-30 and 10-50, the T slot of the washer; a GFCI with TEST and RESET; an isolated ground with its orange triangle; the 240 volt only outlet with its two flat blades and ground hole; the smart switch with its blue light; the switch and outlet in one with its small outlet under the rocker; the plate is cream before and after the wiring). The wiring bench, the framed house of Wiring a house, the rooms of the jobs (the outlet and switch a job asks for look like that kind) and the small house of the service calls all draw the same faces), a search icon sits by the title where you type dryer or range and pick it to plug it in, and under the buttons are all the equipment whose plug fits that outlet (the dryer fits a dryer outlet, the range a range outlet, the washer its own, lamps and TVs the normal ones). Equipment is plugged in only after the outlet is wired.","NOTHING DISAPPEARS ON THE BENCH: every face of the wiring bench is drawn from both sides, so from behind or from inside the open box nothing goes missing or can be seen through. THE STRIP AT THE BOTTOM: on iPhone the engine measures the page by documentElement.clientHeight, which can stay smaller than the visible screen after the keyboard has gone; index.html now reports the visible height (visualViewport) when it is taller, so the app is drawn to the very bottom.","BENCH: NO SCREWS SEEN THROUGH, NO HOLES IN THE WALL, A ROOM AROUND IT: screws, slots and plates on the outlet or switch are drawn on top only from the side they are mounted on, so from the other side the body hides them (no screws of the far side seen through the outlet). The wall is one front and one back surface with a real opening for the box, so no seams show as holes or stripes when the view turns. A floor, a ceiling and two side walls stand around the bench, so turning never looks out into black nothing.","BENCH SEEN FROM ANY ANGLE, ESSENTIALS TILES, OATH PAPER PER STATE: on the wiring bench everything behind the front of the wall (the box, the cable, the ends of the wires inside the box) is drawn before the wall, so from the side the wall hides it and it shows only through the opening, as in a real wall; before, the box and the cable showed through the wall when the view turned. In Business Essentials the top frame is its own row and the tiles sit under it, so they never scroll up into it. In NGMY Slides the app admin first chooses the state, then opens, edits or creates the Hati ya Kiapo cha Uongozi of that state (one paper per state).","CIVIC REGISTRY ID AND THE LEADERSHIP OATH PAPER: the ID icon and the member name at the top of the Civic Registry follow the same rule as the ID card on the home page and come from the account in the database, so they no longer disappear after the app is closed, reset or reinstalled (a member removed from the registry still gets no ID). Hati ya Kiapo cha Uongozi in NGMY Slides can be deleted only by the app admin (Delete for everyone): it is then gone for every user on every phone, an old copy can never be saved back, and only the admin can create a new one, with the Create Hati ya Kiapo button in NGMY Slides.","BUSINESS ESSENTIALS KEEPS WHAT YOU TYPE: notes, notebooks, contacts, quick tasks, medicines, site map, hotlines, Bible words, My Vault list and Where I Put It now save into the large storage of the device (IndexedDB) with a copy in the small storage when there is room. Before, everything went into the small browser storage, which the rest of the app also fills; when it was full new entries silently failed to save, and one damaged note could make the list look empty so the next save wiped every note. Now a damaged entry is skipped instead, and if a note cannot be saved a message says so. Every Business Essentials page shows its name in a frame in the middle at the top, like the Construction Lab and Core Protocol, including Create a note.","CORE PROTOCOL TITLE AND PROTECTED FIXES: Core Protocol now has its name in a frame in the middle at the top with the back button at the side, like the Construction Lab, and the page slides up under the clock. The fixes for the black bar and the approved page layouts are protected: the website is only published when a set of checks confirms they are all still in place, so they cannot be undone by accident.","NO BLACK BAR AT THE TOP OR BOTTOM ON iPHONE: in Safari and in the app saved to the Home Screen the app is no longer pinned to the screen (Safari cut a pinned layer off above its bottom bar and filled the rest with black); it now runs to the bottom edge of the screen, under the Safari bar, with the menu kept above the bar. Pages whose list used to stop below the clock (a dark band at the top when scrolling up) now let the list slide up under the clock, like the Advisors page: My Profile, NGMY Slides, Invest, Documents, Construction Lab and its lessons, Doc Share, Local Growth, Account, Market and Worksheets.","THE BLACK BAR AT THE BOTTOM AFTER TYPING: on iPhone, when the keyboard closes, iOS can leave the page pushed up a little without saying so; the app is the right size but sits too high, and the empty page shows as a dark bar along the bottom. The page now puts itself back in place as soon as typing ends, whenever the visible area moves, and with a light check twice a second while nobody is typing. PHONE UNLOCK: the Phone (paste a YouTube or any video link and it plays) is now a small round button right beside the X at the top, instead of a big card in the list.","CONTRIBUTION POP-UP AND THANK-YOU: the home pop-up that asks for a contribution never comes to someone who has contributed to the campaign going now. A contribution is recognised the same way the registrar report does it (the email of the record, the member email written inside it, or the registry number), the list is read from the cloud strictly (if it cannot be read nobody is asked), and the phone remembers that the person gave to this campaign. A member counts as contributed however their app login is linked to their registry record: the same email, the registry number, the linked app email set with the ID card, a granted ID card with the same phone, the app login the registrar writes into each contribution, or the mark the registrar puts on the member record (gave this much to this campaign). Instead of the ask, twice a day when the app opens (once before noon and once after noon), until the contribution is over, that person gets a Swahili orange pop-up, Hongera, with their name in a gold frame (MCHANGIAJI), the amount they contributed and what it was for.","TURNING ROUND THE DEVICE: on the wiring bench (outlets, switches, lights, fans and the others) the view can be turned to the left or the right as far as the back of the device, but not all the way round; once the view is behind the wall the wall is left out so the back of the outlet, the box and the cable can be seen.","LOGIN AND BOTTOM OF THE PAGE: the login logo and title paint correctly again (two ring gradients with three colours had no colour stops, which newer Flutter refuses to paint, so the login looked broken; the same was fixed in the Vault games), and in a browser tab the page now follows the real visible height (100dvh) so no dark strip is left at the bottom.","CONTRIBUTION POP-UP: when the app opens (and when it comes back after eight minutes or more), a member of a state that has a contribution (help mode) going, inside its circle (all members, a city or a room), who has NOT contributed to that campaign yet, gets a big rounded pop-up in the middle of the screen with space at both sides. The pop-up is all in Swahili and orange like Help + Insurance, with fine lines at the back, a band of light, floating sparks, a ring turning round the badge, a shine on the button and things sliding in one by one. The two buttons at the top are Fungua Usajili wa Raia (goes straight to the Civic Registry) and a round Close button. Below: the name of the state, what the contribution is for (the heading asks Mchango huu ni wa nini?), and where to send it (Cash App opens, Zelle and the phone number with dashes, tap to copy or call). A member who has contributed to the campaign that is going now never gets it, and one who gave to an earlier campaign does; it cannot be told offline, so then it does not show. The Civic Registry itself is unchanged and still shows the campaign.","ZOOM IN A ROOM: in every room view (houses, jobs, lessons) the plus and minus buttons, the mouse wheel and the pinch go toward and away from what the middle of the screen looks at (an outlet, a switch, a wall), not toward the middle of the room.","WALLS, PEOPLE AND BILLBOARDS: in the device close-ups the wall is wide and tall and drawn in tiers (studs, then wall, then the device), and the view cannot go behind or far to the side of the wall, so nothing shows through it. The three city characters are kept for offline from the first visit and a character that could not be read is tried again every twenty seconds. Every billboard in the Billboard Studio now stands in a place: footings, braces, a catwalk with a rail and ladder, lamps on arms, beacons, a service hut, a fence, a pickup truck, cones, bushes and flowers, and each kind has its own extras (highway barriers, a road and cars; a tower ladder, bands and a big beacon; neon tubes and a glowing street with a diner; a stage with speakers, a lighting truss and a crowd barrier; two stone towers with flags and torches and a paved way for the gate).","PHONE VIDEO WALL ON A PHONE: when the Videos app opens the wall of four phones on a real phone (iPhone, Android), the phones of a set take turns so the browser is never asked to hold four video players at once (it used to close the page): a video file plays on two phones at a time and YouTube or Vimeo on one, the others say Waiting its turn, and the next ones start when these finish, set after set. On a computer all four play together.","TV PLAYS ALL CHANNELS AND SCREW POP-UPS: the lab TV now goes through its channels by itself, one after another, ten seconds each (one whole advert), and round again; CH plus and CH minus still jump, and the apps screen stops the round while it is open. In every device close-up (outlets, switches, GFCI, lights, fans and the others) two quick taps on a screw or nut that has no wire open a framed pop-up in the middle of the screen: the wire that goes there, why it has none (a spare screw, a LOAD screw under tape, the ground that must never stay empty, or a wire not put on yet) and a reminder.","TV ADVERTS AND BIGGER SCREENS: in the Electronics Lab a screen part (TV, phone, laptop) tapped four times opens the Resize sheet, and it can now be made up to five times its normal size (twice as big as before). On the lab TV channel 1 stays the NGMY Tree Story, and channels 3 to 5, 7, 9 and 10 are NGMY adverts drawn live: Construction Lab (a house goes up), Electronics Lab (current round a circuit to a bulb), Advisors (chat bubbles), Game Center (coins and a game pad), Vault (the vault door opens on gold) and Studios (coloured tiles pop in). The Construction Lab page header is a small framed card in the middle with the back arrow at the side. The Resize sheet is a card with a live preview of the screen, buttons 1x to 5x, a slider and a Done button. The adverts on the lab TV are little ten second movies of four scenes each (what it is, what you do, what you get, then an end banner with ngmy.org): Construction Lab, Electronics Lab, Advisors, Game Center, Vault, Studios, Business Cards and the Store (channel 2), on channels 2 to 5 and 7 to 10. TV channel 6 is Spark Adventure (Sparky the spark runs round a circuit board with a battery, a switch, a resistor, a capacitor and a bulb, with captions) and channel 8 is an NGMY Business Cards advert.","CITY DOORS, ARROW, ELEVATOR: walking through a door takes you in again (no button). The arrow above the player shows only when the view is zoomed far out, and there is no ring. The houses stand far apart (more than two house widths between them). When the elevator doors open you now see a lit lobby with TVs and a sign, not a black space. In the lobby the elevator doors shut completely, carry NGMY on the left door and ELEVATOR on the right door, and open onto a lit inside with nothing in front of the doors. During the ride the camera stays inside the car, which now has a back wall, so the person never disappears when you turn the view.","CITY WALKING RULES: you go into a house, hospital, shop, store, school or any building by walking through its door. The view never zooms or turns by itself: your zoom and angle stay as you set them when you go into a building and when you come out, and inside a building the camera only stops at the walls. A bright arrow shows where you are when the view is zoomed far out. The houses stand much further apart. The NGMY stores and the NGMY licence offices have a big sign on the roof, facing front and back. The city remembers where you were: the street spot, or the building you were inside, and puts you there when you come back; the Neighbourhood jobs button now opens the city itself instead of the first unfinished room of the house.","MACHINES AND WIDER ROOM VIEW: after the laundry or kitchen job the room items now include a washing machine, a dryer and a kitchen range to plug in; each only fits its own outlet (washer 5-20, dryer 14-30 or 10-30, range 14-50 or 10-50), and when it runs the washer and dryer show clothes tumbling and the range burners glow. In the house the Plug in list has them too. In any room, when the camera cannot go back any further because of the wall, zooming out widens the view so you see more of the room and still stand inside it.","LESSON HELPERS AND WATER: in the electrical lessons, picking a wire turns the device to the screws that wire belongs on: the white neutral wire shows the silver screws, a hot wire shows the brass screws, and the ground wire shows the green screw in front. Tap the name of a wire, a hose or a drain piece twice and the place it goes glows for a few seconds. In the faucet lesson tap the red or blue valve handle to turn it by hand; an open valve with no hose sprays, and a good line pours a clear stream into the basin with ripples. In the drain lesson tap the sink once the drain is built to run or stop the water. The Diagram lessons page is a picture: pick a wire on the left, tap its place on the diagram and a coloured wire is drawn between them.","SINKS IN THE PLUMBING LESSONS: the drain lesson and the faucet lesson now show a real sink: a counter with a hole, a white or steel basin sunk into it with a drain, a faucet with two handles on a flat plate behind it, and an open cabinet under it. The counter pieces leave out the faces that touch so no dark gaps flash at any angle.","CONSTRUCTION LAB ZOOM AND LESSON SEARCH: in any room of a job or lesson you can pinch or scroll back as far as the room allows while the camera always stays inside the house (it never goes out through a wall or the ceiling), and you can still turn all the way round. In the Construction Lab the LESSONS line has a small search icon on its right; tap it, type a word such as dryer or sink, and only the matching lessons stay. Tap the icon again to close the box. Only the lessons are searched, not the jobs.","NEIGHBOURHOOD WORK AND TRADE: every building in the city can be walked into (hospital, shop, school, fire station, every house and big house), and each has its own job done by walking onto a mat: teach the class at the school, check the equipment at the fire station, sell what you carry at the market stall in the shop. The buildings are about half as big again, and the houses stand well back from the streets so there is room to walk beside the road. Electric poles carry wires along the streets with street lights on them, and street lamps stand between the poles. From time to time a street light goes out (it is dark with a red sign) and a neighbour rings because a house has no power. A street light is fixed with the real ceiling-light wiring lesson (black to black, white to white, ground to ground, then the cover); a house is fixed by walking in and onto the red mat at its breaker panel, which opens the wiring job. Fixing earns points. Crates of goods lie about the farm: pick one up with the action button, carry it to the shop and sell it at the market stall, then come back for more. In Build mode a house, big house, shop, billboard, car, tree, bench or crate can be sold for points. Full screen: double tap the two buttons to hide them, double tap where they were to bring them back. The controls are raised from the edges of the phone. The small buttons beside the zoom buttons flip the up-down and left-right swipe, and the choice is remembered. The Construction Lab menu has the jobs first (with a new Neighbourhood jobs tile) and the lessons and reading last. Double tap anywhere in the house, a room or the city and the camera takes you to that spot, like a map. The city has fewer cars: two buses and two police cars drive round two loops of road and never turn back, and every junction on the loops is a roundabout. In the wiring job a plugged-in TV is not a button: go behind it and tap the plug on the wall to pull it out. Pulling a switch or outlet out of the wall keeps it there (only a burnt one is thrown away so a new one can go in). Every billboard has a picture on each side, so nothing is upside down or backwards from behind. The buses and police cars are bigger, with big billboards. In the city the phone rings at least once a minute: a house with no power, a street light out, or somebody sick who must be taken to the hospital desk. A room whose wiring is right has no red boxes left, even if the final test was not run. Swiping left and right turns the view the way your finger goes. The house tour sheet has a new design. Full screen inside a room puts you inside it, like a normal house. Getting out of a car puts you beside it, never inside it, and a person who ends up stuck is moved out. A dark house shows its breaker panel, outlet and switch with red frames, and tapping a red tag (No power, Light out) takes you to that house or street light. The city no longer redraws itself every two seconds, and nothing happens in the city while a job page is open. Work comes one job at a time from houses chosen by chance: while you work no new call rings, a job you put off with the Later button waits on a list and starts when you leave the house you fixed. Turning calls down or not answering counts as a miss; two misses in a row bring a call from the City office, three close the game for 5 hours. The Hide tags button (next to Full screen and Rotate) hides the red tags and the rooms-still-need-work sign. Every outlet, switch and ceiling light or fan in a room is marked fixed on its own as soon as it is wired right, so only the ones still to do keep a red frame, and the sign over the room names what is still to wire. A call opens as a card in the middle of the screen (it turns with the full screen game) with Show me the way (a yellow dashed line on the ground and a tall yellow beam lead to the place), Take me there and Later. A Drone button gives a film of the city from the air: choose the whole city, billboards and the NGMY logos, houses (and inside a big one), the hospital, shop and school inside, or the traffic. The hall has a camera in each corner: tap one to look from there. The Kiswahili School ad has a long conversation, three exchanges a play and new phrases each time. In a house with no power in the city, tap the breaker panel, the outlet or the switch (or their red frames) to start the wiring job straight away. The drone is one smooth flight with no cuts: it starts high, comes down and passes in front of each billboard and round its side, never going into it, and the houses and the buildings are flown past the same way before it goes inside. Indoor furniture is smaller, a TV never stands on a cabinet or the floor (TVs hang on the wall), and a wardrobe, shelf, lamp or console is moved aside so it never hides the TV on the wall. The city land is much bigger (2600 by 2100) with houses behind my house, down both sides and over every green stretch, each with room in front of its door so you can always walk up to it, and a longer street system. Downtown, at the south end, has NGMY office towers, the NGMY company building, NGMY stores, NGMY gas stations and a second NGMY hospital; the stores and gas stations can be walked into like a shop. The biggest billboard, NGMY Town, stands over the middle road, and a NGMY Town billboard stands at each corner of the land; every sign has a picture on both sides. The drone passes each billboard slowly in an arc of about three seconds, goes round all the signs and follows the helicopters to show their banners. Swiping now turns the view the way the finger goes: swipe right looks right, swipe up looks up (the choice is saved under a new name so old choices do not interfere). The message at the top is placed under the buttons in full screen. Nothing in the city is switched off because it is far away: the houses, the billboards and the signs stay on, seen from the drone or from the ground. Every tower and the NGMY company building has billboards on the south face and on the north face (the side the town looks at), and the big NGMY Town sign shows a picture on both of its faces. In the hall the camera is only the camera (no label), and the wall TVs read the right way round from outside the wall too. In a house with no power each fixture turns green on its own when it is fixed, the work you did is kept when you leave and come back, and the panel turns green when the whole house has power; in your own rooms a fixed outlet, switch or light has a green frame, an amber frame while it is started, and a red one while it is not. The work you do on a house, an office level or a street light is kept in the town. Take me there puts you a few steps in front of the door (or beside the street light). People walk fast in the big town and the drawing skips what is off the screen. Missing calls never closes the game; after a few the office only rings to remind you. Every office tower and the NGMY company building can be walked into: the lobby has an elevator (walk onto the blue mat or tap it) with buttons for every level, the level number is always shown, there is a balcony with a glass railing (step on the green mat to look over the town), and you can get a job from an office with no power on any level, take the elevator to that level and fix its breaker panel. The elevator ride is shown: the person walks to the doors, they slide open, the person steps in, the doors close, the camera is inside the car with a display above the doors and a big number that counts up or down level by level with a little shake, a chime and the doors open at the new level where the person walks out. The Orders button opens the delivery board: orders for food, groceries, medicine, packages and letters are picked up at a shop, a store, the hospital, a tower or the company building and carried to a house (follow the yellow line); they pay points. Five other couriers, Maya, Kofi, Amara, Tunde and Zawadi, walk the town doing the same: an order they take is gone, and the first to deliver 8 orders wins the round and a bonus. The race table shows everybody. There are many more big NGMY ad billboards round the edge of the land (north, south, east and west) and on the roofs and sides of the towers and the company building; every one plays the NGMY ads one after the other, a new one every 7 seconds. NEW IN THE CITY: the drone has a special request for the edge billboards only (the big boards round the edge of the land), the billboards request now includes the edge boards, the tower boards and every other billboard, and every drone film always starts at the big sign that welcomes everybody to NGMY Town. The rival couriers now walk round the buildings (never through walls) and go in and out of the doors, out of sight for a moment inside. When all the fixtures of a dark house or office are connected, a green Complete work button appears (in the chips row, and next to the drone button in full screen): press it to check the wiring, bring the power back and get paid. Energy: about five minutes of walking use it all up, then you must rest for three minutes (then you are back at half energy) or eat; a long battery bar next to the page title shows it, and under the Run and Jump buttons in full screen, with no numbers. Food from the shops (apple, juice, sandwich, burger meal) gives energy back and costs points. The shops are now real: shelves with tins, boxes, bottles and loaves, drinks fridges, fresh fruit, a till and a cashier, and walking up to a shelf or the counter (or the Buy things chip) opens the shopping list: food, food for the town and medicine, all paid with the points you earned. Cars only have about two minutes of gas; a gas bar shows beside the energy bar while you drive, and there are many gas stations round the town where you press Buy gas (or buy a gas can in the gas shop). The licence office sells the Uber licence for 40 points. Uber stations (a yellow and black shelter with a car beside it) have people waiting: drive up with the licence and they get in, take them to their house (follow the yellow line) and the fare is paid when you arrive. MORE SWITCHES, OUTLETS AND LIFE: the Construction Lab has ten more wiring lessons (double-pole, three-way, four-way, smart or motion or timer, and combination switches; split half-switched, 4-wire 240 V, 3-wire 240 V, 240 V only and isolated-ground outlets), and every house or office job now asks for a different outlet and a different switch, so people learn them all by fixing them. Calls and jobs only come in the NGMY City map (the garden with the billboards), never in the rooms of the house. Houses stand much further apart. The incoming call screen shows who is calling on top and the Decline, Later and Answer buttons in a row below. Energy lasts about two minutes of walking, then the person crawls on the ground for 20 seconds: if they have not bought food in a shop by then they lose 5 stars, rest for three minutes and come back at half energy. Thirst (buy water or juice) and feeling unwell (buy pain pills) make walking tire faster, so everything the shops sell is needed at some time. The stars balance is shown next to the zoom in button all the time. Thirst also lasts two minutes. Nothing counts against the person while they are working on a job or away from the city map. When all the wiring of a house is connected the work is handed in by itself. Wires and screws are easy to tap: a tap near one picks it. The shop screen is laid out in columns to fit a phone on its side with nothing to scroll, and every pop-up shrinks to fit the screen. Every elevator car and every level of a tower has big TVs playing the NGMY ads, a ride takes at least 3 seconds and longer for every level it climbs, and inside a building the view is close in so you feel you are inside. ADVISOR BROWSER: the live browser of the advisors (the computer an advisor uses to look things up and fill forms) is free for the first 10 minutes of use. After that a payment pop-up appears (never a text message) asking $5.99 for 2 more hours, by card with Stripe or with Cash App (a code, a screenshot of the payment, and an admin approves it). The hours must be used within a week; they are counted quietly in the background only while the browser is open, and what is left is still there when the person comes back. Hours not used within the week are lost, and the next time the person gets only 5 minutes before the pop-up asks again. One browser task may spend at most 2 dollars. In the elevator car the camera is inside the car with the person, the doors in front and a big TV on each side. A finished job pays a random number of stars from 10 to 35. The Uber stations and their signs are called NGMY Uber. During the drone flights nothing far away is left out, and small far pictures are drawn flat so the flight stays smooth. PHONE VIEW: in the garden (NGMY City) a phone icon between the Full screen and the living room chips opens the city across the whole phone standing up, like a phone video, not turned on its side; it opens the drone chooser straight away, with buttons to close, start or stop the drone and hide the tags. The drone sweeps past billboards sideways instead of climbing and dropping on one spot, and the helicopter and vehicle shots are short sweeps round them, so it never hangs in one place. Inside a building the camera never leaves the walls, so turning round never shows a wall from behind or a TV switching off, and the rooms are deeper and taller. In a tower the way out is only on the ground floor; the other levels use the elevator down. Walking, the drone and the elevator ride move in step with every frame and the camera sticks to the person, so it is smooth. Finishing the wiring or plumbing of a room, a lesson or an added outlet pays stars at once. ROADS, TRAFFIC LIGHTS AND ACCIDENTS: the city streets are big two-lane roads with a double yellow line, and the buses and police cars drive in their own lane, keep their distance, never drive through each other, and stop at red lights. Traffic lights stand at the crossings with zebra crossings; the little walking person is green only while the cars have red, so cross then. Anybody on foot who walks in front of a moving car is run over: an ambulance takes them to the hospital, they are weak, and medicine and food are ordered from the stores to the hospital. Those emergency orders go to the top of the Orders board and other users (and you) can deliver them for stars. HIDE ALL BUTTON: the eye icon next to the hide-tags button (and Hide all in the chip list) hides every button, map, banner and card so only the city shows, also while the drone flies; tap the top left corner where the buttons were to bring them back. ROOMS ARE VIEWED FROM INSIDE: in my house every room now opens with you standing inside it, with the four walls and the ceiling round you (like the big buildings), not looking at the room from outside; the See the whole room button still shows the cut-away view from above. A room is only finished (green) when its wiring AND its plumbing (bathroom, kitchen) are done. In a dark city house or office the breaker panel stays red until all four things are fixed (two outlets, the ceiling light, the switch): the ceiling light now has its own red frame and label in the middle of the ceiling, and the panel label says what is still to fix. CARS AT THE CORNERS: the two loops of buses and police cars meet at the two ends of the middle street. Only one vehicle at a time may be in each of those corner zones; the others wait at its edge and go on when it is out, so cars never touch or drive through each other and none gets stuck (tested over 50 minutes of traffic). DARK HOUSE WIRING: a device that runs (the TV works) can still be wired NOT safely, and then its frame stays red: the job counts a fixture as fixed only when it is in, finished and wired right. After you leave the wiring bench the message and the red labels now say why (not put in, not finished, or works but not wired safely, with the reason). Tapping a blue spot with nothing in your hand puts in the device that belongs there. FAR BILLBOARDS: every billboard keeps showing its real ad from any distance and any angle (the biggest few play smoothly, the rest show a picture of the ad that is made again about five times a second), never a plain colour. JOB COMPLETE: when a job from a phone call is finished the screen says JOB COMPLETE with the stars, and the next job only starts about 10 seconds later; the other red tags in the city are other houses still without power. BILLBOARD STUDIO: in the Construction Lab, a small Billboards button sits at the top right corner of the My House frame. It opens a page with ONE billboard on its own: six kinds to choose from (highway board, tall tower sign, neon board, rooftop board, big screen, town gate), a 30 second drone shot round it (wide shot, coming in, close slide, left side, behind the board, right side, pull back and up; Stop the drone ends it), and an Edit button where the person can change the big words, the smaller words and the web address, put their own logo and their own picture from their gallery, pick the colours, or go back to the NGMY default. By default the board plays the NGMY logo, the NGMY words and the NGMY ads one after another. What the person changes is kept on their device. Update: all the boards are much bigger. Joined boards: two signs on one board, or three signs on one long board. Separate boards: Three in a row (three boards in one straight line), Two lines of three (six boards, a line facing front and a line facing back), and Billboard park (four boards: front, back and both sides). Each sign has its own words, logo, picture and colours (Edit, then Which sign). The default NGMY poster words shrink to fit beside the logo so they never run over it. The rooftop board stands on a big house with big TVs and NGMY logos on its front and sides and the NGMY hall carpet on its back. Poles always stop below the board. While the drone flies there is no title or bar; Hide everything removes the buttons and a tap on the screen brings them back. The shot is a crane move, a push in, a slide along the face, then round both sides and the back, then up and away. The Family Tree ad in the Electronics lab (TV channel NGMY Tree Story and the Family Book and Tree cartoon ad) was redesigned: a real tree grows with the grandparents at the roots, the parents on the big branches and the children at the top, a round face and name tag on every branch, hearts joining the couples, and a card that says NGMY Family Tree: add every person, link mums, dads and kids, keep it for ever. Billboard park has its own planned 30 second drone shot: a high wide shot, a crane down and push in to the front board, a sweeping arc to the right board, a long curve behind to the back board, round to the left board, then up and away. On the home screen the Civic Registry ID card shows the plus button when it is the only card, so other cards can be added; once another card is added the plus leaves the Civic card. All the drone shots are now dramatic: a high bird-eye shot that dives to a low hero angle, a low slide across the face, whips round the sides, swoops up high, dives behind, and pulls away into the sky; each move starts slowly, whips and settles. In the Construction lab wiring job, an installed outlet or switch has a button Take it out and put in a different one, which leaves the empty box so a different kind of outlet or switch can be put in. Latest billboard update: no boards are joined any more. Billboard layouts are Two far apart, Three in a row, Three scattered far, Skyline, Two lines of three and Billboard park, with boards of different heights and sizes, the taller ones standing behind and some far from the others. The chooser shows two billboards in every row. Every kind of billboard has its own camera move, and each layout has its own tour where the drone flies from board to board. The rooftop board stands on a tall house with one big TV on each side of the door, and its board, TVs, logo and frame no longer vanish when the angle changes. Cipher Lab was removed from Core Protocol. In the city wiring job the person chooses what goes into an empty box from the tray (nothing is picked for them), and any outlet counts for an outlet and any switch for a switch as long as it is wired right, so the red frames in the house turn green when the job is really done. The zoom buttons answer at once with a big step and keep zooming while held, and pinching measures from the last step so the zoom is never thrown back. FAMILY GAMES: in the Family Tree there is a games button (a game controller icon) next to the Family Book button, and the redesigned Tree display settings sheet has a Family Games card. The system makes games by itself from the people in the tree: Family Kahoot (10 timed questions with coloured answer tiles, points for speed, a streak bonus and a podium against family members), Fireside Stories (a painted African village at night, with huts, a baobab, the moon and a living village: someone pounds grain, a girl carries water on her head, children roll a hoop, a goat grazes, a drummer plays. The oldest person in the tree sits by the fire and talks, with the words coming out while the mouth moves; the other elder and the children look at whoever speaks, blink, nod, ask things, gasp, laugh and clap, and the fire grows with every right answer), Safari Journey (a painted bus drives to a stop for each question, a villager asks, a wrong answer is a flat tyre), Line Up (tap two people to swap them until the family stands in the right order, then everybody cheers) and Village School (the teacher writes each question on a chalkboard, then a report card with the mistakes explained). Small trees get culture questions with Swahili family words and African proverbs. The person who created the tree can write up to two games of their own, in the Kahoot style, with up to 12 questions each, and everyone who opens the tree can play them. Players win Family Stars on this phone, with badges: Little Seed, Young Listener, Storyteller, Village Pride, Keeper of Roots and Elder of the Fire. The Family Games hub now shows eight games, two in every row: Family Kahoot, Fireside Stories, Calabash Catch (slide a basket under the gourd with the right answer as gourds fall), Plant the Tree (drag the children of a family onto the branches and watch the tree grow), Who Am I (a shadow turns into a face as clues come), Safari Journey, Line Up and Village School. Memory Drums, the old Family Test and the old Elder Order were removed. CITY PEOPLE: everybody in the city is one of the 3D characters you made (the X Bot and the Soldier for the residents, and whichever of the X Bot, the Dancer or the Soldier you choose for yourself on the tour sheet), read from their .glb files. They are dressed in their own colours (skin on the head and arms, a shirt, trousers), the X Bot residents get a face with eyes, brows, nose and mouth, and the head and hands keep more detail than the rest. The three character files are kept on the phone after the first visit so the same people appear with no internet; while a file is still being read nobody else is drawn in their place. The 3D view skips whole blocks of the town that are behind you, too far or off the side of the screen, and keeps billboard pictures on top of their boards. ROOM JOB SCREEN (the working screen of a room wiring job): you start inside the room, close to the wall that has the boxes, and can zoom out to see all of it. In the devices phase every box of the job has a little light on top of it (no frames): it blinks RED while that box is not fixed, and blinks GREEN only when its device is in, wired right and covered. Tap a box and the tray at the top shows only what can go in that box: an outlet box shows the outlets (outlet, GFCI, split, 240 volt, dryer, range, washer...), a switch box only the switches, and a ceiling box only the light and the fan, so nothing has to be scrolled through. The box you tapped has a bigger light, a cross at the start of the tray lets it go and shows everything again, and tapping an item puts it straight into the picked box. When the phone is turned on its side (or the job is shown sideways in full screen) the three phase tabs and the hint box are gone to leave room: only the tray is left, and its first button shows the phase (for example 3 Devices) and goes to the next phase when tapped. Standing up straight it is all there as before. When you work on a device with the phone on its side, the buttons are small, with their words in them (back to the room, fasten every wire or push into the box, pull it out, cover on, take it out and put in another), and they sit in ONE row of the same height together with the wire chips (for example black from the breaker, black to the light, bare copper ground). Once you pick a wire, the screws it can go on come in their own small low row UNDER the buttons, not along the side. The messages are small too: the note that says what just happened is a small box in the top corner (three lines at most, gone after six seconds) and the card about the thing you tapped is a small box in the bottom corner, so the work stays in view. The lights on the boxes are small, and round every empty box there is an invisible pad bigger than the box, so a box answers the first tap. Taps on every 3D view (the room, the bench, the city) are read the moment the finger lifts, they no longer wait for a possible double tap, so nothing needs two or three taps. Standing up straight they are the big buttons with words and the wide messages as before. REAL WORK IN THE CONSTRUCTION LAB AND THE CITY: the eight JOBS of the Construction Lab (Wire a room, Plumb a room, Fix a house, Build a room, Wiring bench, Safety inspection, Service calls, Neighbourhood jobs), My House and the whole city are real work, not a learning stage: wrong moves have real consequences (shocks that cost a life, burnt outlets, floods), there are no hints (the screen says Real work: no hints), and the practice and test switches are gone from the job screens. Only the LESSONS teach, with explanations and hints. The old Garden is now called NGMY City. Safety is enforced like on a real site: a device can not be put into a box while the breaker is on (a STOP message says to turn the breaker OFF first and test that the wires are dead), and touching live wires, pushing in, pulling out or covering with the power on is refused or shocks. Every finished job of the lab pays stars into the same stars the city shows: 12 plus 4 for each thing to fix, minus 2 for each mistake and 5 for each shock, never under 6 (the jobs started from the house in the city pay by their own rules, so nothing is paid twice; stars earned outside the city are kept and added when the city is next opened). The sinks of the bathroom and the kitchen are real sinks: a counter with a basin sunk into it (walls, floor, drain) over a hollow cabinet, and a faucet with two handles once the sink is plumbed. CONSTRUCTION CITY APPLIANCE JOBS (American NEMA style): the Construction Lab and the city jobs now have the outlets of the big appliances. Dryer outlet 4-wire (NEMA 14-30, 30 amp: an L-shaped neutral W, two hots X and Y, a round ground G), dryer outlet 3-wire (NEMA 10-30, the old kind: two hots and a neutral that also grounds, no ground hole), range outlet 4-wire (NEMA 14-50, 50 amp) and 3-wire (NEMA 10-50), and the washing machine outlet (NEMA 5-20, its own 20 amp circuit with a T-shaped slot, GFCI protected in a laundry area). Each has the real face of its type in 3D and is wired by putting the black, red, white and bare copper wires on the right screws: the two hots on the brass X and Y screws, the neutral on the silver W screw, the ground on the green screw. There are also two cord hookups at the back of the appliance: the 3-wire cord, where the metal ground strap stays on the middle terminal, and the 4-wire cord, where you take the strap off first (tap it), then put the green ground wire on the frame screw, white in the middle, black on the left and red on the right; the neutral and the ground are refused while the strap is on. In the house the kitchen wiring job is the range outlet (plus a GFCI outlet), and the hall is a laundry corner with a washer outlet and a dryer outlet (3-wire or 4-wire). The lab random room jobs can be a Laundry room or a Kitchen with a range. A house call in the city is now most often about the dryer, the stove or the washer, with its own message, and it sends you to the right room. The Add to room menu offers all of these outlets and both cords. When the city is in full screen (on its side) and a call is accepted and a fix starts, the job page stays on its side too, and a small button on its right edge turns it upright and back; without full screen it stays upright. PHONE (Phone Unlock page, under Open on your phone, the Phone button): a whole virtual phone of its own inside NGMY, separate from the device in use, with a lock screen (swipe up or tap), a home screen with a dock and a clock card, a home bar to go home, a status bar, and only a few apps of its own: Videos (paste the link of any video, YouTube, Vimeo or a video file such as mp4 or webm, and it plays on the virtual phone; save videos and see recent ones), Web (type an address; some sites refuse to be shown inside another page), the App Store and Settings (phone name, six wallpapers, brightness, the phone number, device ID and place, reset). There is no notes, calculator, clock or files app. The App Store holds NGMY apps that open inside the phone: Title Animator, Universe Explorer, Beat Maker, Piano Studio, Drum Pads, Palette Lab, Mandala Studio, Fireworks, Gravity Lab and Spark Painter; tap Get to install one (its icon appears on the home screen), Open to run it, Remove to take it away, and what is installed is remembered. To make the phone bigger, double-tap the top of the phone (the black bar with the camera): each double-tap makes it bigger, step by step, up to the full screen, and one more goes back to the first size. The phone has its own phone number and device ID (made when it is first opened, new again after a reset), its own place in the world that you choose in Settings (it never reads the place of the device running it), and its own memory that no other part of NGMY reads. Limits: the phone uses the internet connection of the device it runs on, so its internet address is the same as that device (a web page cannot change it), and apps from Google Play or the Apple App Store cannot run inside a web page. Everything on the virtual phone is kept on its own and a reset clears only it. PHONE WALL (inside the Phone, there is no separate button): the Phone shows one phone. When a YouTube, Vimeo or video file link is played in the Videos app, the four front phones of a wall of 100 open, two in a row, filling the room, each playing the video with the picture filling its screen, with the waiting phones stacked behind. Each of the 100 phones has its own phone number, device ID and place and a memory of the videos it watched (kept between visits). The four start one after the other so the first is never kept waiting. They play without sound, because a browser only starts several videos on its own when they are muted. When the video is over, the next four phones slide in and play it from the start, set after set (25 sets), and after the 100th phone it starts again from the first four (round 2, 3...). Buttons: next four, start again from phone 1, and One phone, which goes back to the single phone with the same video playing there. The single phone plays a video straight away with no extra settings. A web page link (not a video) stays on the single phone. EARTH GLOBE OFFLINE: the Universe Explorer Earth Globe map data is kept on the phone after the first visit and preloaded, so the globe opens with no internet; if it cannot load it says so and has a Try again button. TITLE ANIMATOR: more than 24 title movements, 8 letter looks and 20 different painted background scenes (not just colours); Download the animation saves the whole animation as a looping GIF, not a single picture. BUSINESS CARDS: the cards on the Home screen are saved safely: a background refresh can no longer write an old list over a card that was just added, there is a second copy of the cards kept beside the first that restores them if the first is damaged, and a business card put on Home is also kept on the account when one of the 5 cloud places is free, so it is still there after the app is reset. The studio card list uses a key made from the email so saved cards are not lost when the app is built again. Every business card has a Share my card button (the NFC icon on the card on Home and next to Download in the studio): it makes a contact file (vCard) with the name, job, company, phone, email, website, address and logo, shows a QR code any phone camera can read, opens the phone share sheet so the card can be sent by AirDrop to a phone held close, copies the contact text, and writes the card to an NFC tag on phones that allow it (Chrome on Android; iPhone Safari does not allow web pages to use NFC, and Apple Wallet passes need an Apple developer certificate, so they are not available yet).","HOUSE CARE CARD DOWNLOAD AND REGISTRAR VIEW ONLY: in the Help Center, House and insurance, House Care, a member sees the very same House Care card as on the home screen (due date, status, name, price and agreement) with a white round download button that saves the card as a picture. The price and agreement line (for example 25 dollars a month and 1-year agreement) sits on the right of the name, as before, and is always shown whole (the name gives way first). An Authorized Registrar who opens another state with that state code sees Search, Rankings and a Members list marked view only, with a yellow View only banner: they can look but cannot enroll, edit, remove, manage cities, help mode or anything else there. Their registrar tools work only in their home state.","AUTHORIZED REGISTRAR STATE CODE POP-UP: when an Authorized Registrar changes to another state, a redesigned pop-up asks for that state Civic Registry code: a purple shield badge, the move shown as two chips (your state, arrow, the new state), a rounded code field with a key icon and a show or hide eye, a red line if the code is wrong, a reminder that registrar tools stay in the home state, and a big Verify and Change button with Cancel under it. Light and dark mode.","MENUS OPEN AT ONCE: a few seconds after the home screen opens, NGMY quietly loads every big menu in the background (Growth Income, the Vault Arcade, the Core Protocol and the Construction Lab, Studio tools like invoices and video, the Market Hub, Help Center, State Wallet, Menu Studio and more), one after another, from the copy already stored on the phone. So no menu shows a loading circle the first time it is opened after the app starts. It costs no data and needs no internet once the app was opened online before.","NGMY ADS ON THE LAB TVS: in Core Protocol, the Electronics Lab TVs, phones and screens (and the TVs in the Construction Lab houses and the city) play NGMY ads made like real TV commercials. There are 14 ads, one for each NGMY feature: Civic Registry, Jobs and Help, NGMY Store, Kiswahili School, Document Scanner, Invoices, Family Tree, Wallet, Game Center, Electronics Lab, Advisors, Construction Lab, Creator Hub and Business Cards. Each ad is ten seconds: a real looking phone turns in 3D in a lit studio and shows the feature working on its screen, then a 3D coin, card or medal spins, then the end card with the NGMY name and an Open NGMY button. On the big TV screen (tap a lab TV 3 times quickly) you can tap the picture to spin the phone or the coin, swipe left or right for the next or the previous ad (the ADS key on the remote opens all 14), and tap the small Learn more button on the right of the name bar at the bottom of the picture to see what the feature does and where to find it in NGMY, with a Watch again button. The X, the full screen button next to it and the remote always show above the TV picture (on phones and on computers too), with the name box under it. The full screen button makes the TV fill the whole screen, like NGMY Slides; in full screen the remote is hidden, and a double tap hides all the buttons and another double tap brings them back. Two channels changed name: channel 9 is now NGMY Civic Registry and channel 10 is NGMY Creator Hub.","LAB DEVICE BIG SCREENS: every device with a screen in the Electronics Lab opens a big screen with the same buttons: the TVs, the phones, the tablets, the Kindle, the MacBook, the iMac, the monitors, the projector, the car screen, the Vision Pro and the Apple Watch. At the top there is the X, the full screen button next to it and the name of the device, and under them a remote (on the TVs: channel minus, channel plus, TV, APPS and ADS; on the other devices: the previous ad, the next ad, HOME and ADS). These always show, on phones and on computers. The full screen button makes the screen fill the whole window like NGMY Slides; in full screen the remote is hidden, and a double tap hides all the buttons and another double tap brings them back. When an ad plays, a small Learn more button sits in the name bar under the picture (on a computer it is on the right of the app window bar), and tapping the ad spins the phone or the coin.","SPARK ADVENTURE AND LESSON BOX: channel 6 of the lab TVs, Spark Adventure, is a short 3D film: a real looking circuit board with a battery, a switch, a resistor, a capacitor, NGMY chips and a glass bulb. The switch closes, a glowing spark races along the gold track, the bulb lights up when it arrives, and the end card says Build it yourself in the NGMY Electronics Lab. In full screen on a phone, the X and the name at the top sit lower, below the phone clock. In a Construction Lab lesson room, tapping the red box that says Tap the red one to wire it twice quickly opens the wiring work straight away.","SMOOTH AND SHARP SCREENS: the little TV, phones and screens on the Electronics Lab board show the whole real ad (not just an icon), and every screen is crystal clear with no scan lines. The TVs, frames and screens in the Construction Lab rooms, the lessons and NGMY City show their ads from a picture that is made again about twenty times a second (a few times a second for small far ones), as sharp as the pixels of the phone where it shows, and reused in between, and up close all the patches of a big screen share that one picture. The words on the ads are laid out once and reused. So turning, zooming, going behind a TV or walking past screens stays smooth. Opening a lesson or a job in the Construction Lab is smooth from the first second too: the people (the X Bot, the Dancer and the Soldier) are made ready beforehand and kept as small files, so the phone no longer stops for a second at a time while their skin pictures and bodies are worked out, they are read as soon as the Construction Lab opens, and a screen growing as the camera glides in keeps the same picture size instead of a new one every frame. In a room the camera never goes out through a wall: after zooming in on something on a wall (like the red outlet) and turning, it stops at the wall and turns where it stands, so you see the other walls of the room, never the room from outside or the back of the TV.","ROOM MENU IN TWO LINES: in Construction Lab rooms, lessons and jobs the menu under the title is just two thin lines of small buttons that slide sideways. Line one has the room actions (see the whole room, look up at the ceiling, look all round, TV, tester, do the lesson). Line two has what fits the outlet being fixed (outlet lessons), then Look, Furniture, Walls, Floor, Ceiling, Doors, Learn and the doors to other rooms; in another mode it shows Look, that mode and its tools. Full screen is a small icon next to the search icon by the title.","NO MORE THUMPING: tapping a menu in a Construction Lab room (look up at the ceiling, see the whole room, walls, floor and the rest) no longer makes the screen jerk again and again. A TV ad in a room is drawn straight into the one picture the room keeps of it (it used to be made twice and copied), it is made again 12 times a second at most a million pixels, and after a slow moment the camera carries on gently instead of jumping.","NO MORE SHAKING: when a menu button in a room (look up at the ceiling, see the whole room and the others) moves the view to a spot past a wall, the camera now stops at the wall and comes to rest smoothly. Before, the camera and the wall pulled against each other every frame, so the zoom wobbled back and forth and the screen kept vibrating until you touched it.","HATI DOWNLOAD BUTTON: in NGMY Slides, the small download icon at the top of a document (Hati ya Kuhowa, Hati ya Kuhoweya, Malipo ya Awamu, Kiapo and the marriage papers) now downloads the proper PDF of the page, the same as the PDF button. For a normal presentation it still downloads a video, and while the video is made the page is drawn off the screen, so it never fills the phone zoomed in.","ROYAL HATI PAPERS: Hati ya Kuhowa, Hati ya Kuhoweya and Malipo ya Awamu have seven new royal papers at the top of the paper picker: Kifalme Nyekundu (maroon band with gold diamonds), Dhahabu na Krimu (cream with shiny gold bars and a seal with a ribbon), Zumaridi na Dhahabu (dark emerald), Bluu ya Usiku (dark navy), Zambarau ya Kifalme (plum), Mkaa na Dhahabu (black and gold) and Bahari ya Kifalme (teal band). Each has coloured NIMETOWA and MASHAHIDI bars, round number coins, shaded rows, two witness cards, MWANDISHI with a gold seal and a footer bar with the state. Filling in, signing, AKUNA DENI, hiding the 4th item and moving names between Kuhowa and Kuhoweya work the same as on the other papers. On the dark papers a signature starts in light gold ink so it shows.","CREATE INVOICE AND THE IRON TRIANGLE: in Create Invoice the fields are grouped in frames with an icon and a title (Invoice details, Your business, Bill to and more) in BOTH light mode and dark mode; in dark mode the frames are deep night purple with a purple edge and the fields are rounded with purple icons. The Iron Triangle (FAST, CHEAP, GOOD - pick any two) is a brushed steel plate the size and shape of a bank card: the triangle and its name on the left, the three switches on the right, and the result on a dark steel plate UNDER the card (not inside it); the green Quote Calc frame fits the card and the plate with no empty space. The Quote Calc window is only as tall as what is inside it (the Iron Triangle and the Price Calculator), so there is no empty space at the bottom; on a short screen it scrolls.","ALL THE NEMA OUTLETS IN THE CONSTRUCTION LAB: there is also the dual-function AFCI/GFCI outlet that the newer electrical code asks for in kitchens and laundry rooms (TEST and RESET buttons and a green light, wired on the LINE screws), and the lesson tiles now pair up two in every row. The slots and holes of every outlet stay visible from any side when you turn the view. 23 more outlets from the NEMA charts, each a lesson tile and a possible city job, each with its real face in the room, on the bench and in the framed house: the old 2-prong 1-15 (no ground), the 6-15 and 6-30 (240 volts, no neutral), the big 60 amp 14-60, the RV shore power 50 amp twist-lock, the twist-locks L5-20, L5-30, L6-20, L6-30, L14-20 and the old L2-20 with no ground, the 277 volt 7-15, 7-20 and 7-30 (brown hot and grey neutral), the three-phase Y 18-20 (three hots and a neutral), the three-phase 15-20, 15-30, 15-50 and 15-60 (black, red and blue hots and a ground, the third hot on screw Z), the three-phase twist-locks L15-30, L21-30 (five wires), L16-30 and L22-30 (480 volt brown, orange and yellow hots). The 1-15 and the 6-15 and 277 volt faces are white, the 18-20 grey, the rest dark.","MORE AMERICAN OUTLETS IN THE CONSTRUCTION LAB: besides the outlet, GFCI, split, 240 volt, isolated ground, dryer, range and washer outlets, there are lessons for the AFCI outlet (arc-fault, LINE screws), the tamper-resistant TR outlet (child shutters), the USB outlet, the 20 amp 5-20 outlet with the T slot, the outdoor weather-resistant GFCI under a bubble cover, the smart Wi-Fi outlet (needs the neutral), the electric car charger 14-50, the RV 30 amp TT-30 (120 volts only), the welder 6-50 (two hots and a ground) and the generator twist-lock L14-30. On the wiring bench the green ground screw on the strap is always visible from the front, and the room around the bench goes on behind the wall and is closed at both ends, so turning all the way round never shows black. Each is a tile on the Lessons page. Jobs in the city (and practice jobs) pick their second outlet from all of these, so every job can be a different kind of outlet, with the same boxes as before.","AI FAIR USE: all NGMY AI runs on the server and needs a signed-in account. To keep the shared AI key safe, each person can use AI only so fast: if you go too fast you see You are using AI too fast, please wait a little and try again, and you can use it again after a short wait. Big jobs (job applications, documents, books, slides, news, translations, pictures, voice) have tighter limits than normal chat. If the AI company is busy you see that the AI is busy and to try again in a minute, and the app does not keep asking. There is also a daily cap for the whole app. Admins can see the limits, the heaviest users and the newest abuse, and change the limits without a new version of the app.",'CONSTRUCTION LAB: a trade school in real looking 3D, MY HOUSE (top card of the Construction Lab): a finished furnished house with 5 bedrooms, 3 bathrooms, a kitchen, a living room and a hall, each drawn as a cut-away 3D room. A little map in the corner shows where you are, tap a room to go there, or use the door buttons; red marks a room whose wiring needs work and blue one whose plumbing does. Signals in the room (a red No power sign, a blue Needs plumbing sign, bare pipe stubs) show what is wrong; the Wiring and Plumbing buttons, or a tap on the outlet, light, toilet or sink, open the same hands-on jobs and the room is finished when the job is. Furniture, walls, floor, ceiling and doors only react while their own edit button is on: Furniture (add, move with arrows, turn, change colour, remove), Walls (paint one wall or all), Floor (wood, carpet or tile), Ceiling, Doors (open and close). A Learn button opens short beginner cards on safety, wiring, plumbing, framing and tools. In My House you are inside the room by default (a low view, like standing in the doorway) and a button switches to a view of the whole room from above. A \ud83c\udfac Tour button plays a life-like person (an adult with a face, hair, arms, legs and a real stride) who comes in through the front door and walks through the whole house like a film, in the time you choose (30 seconds, 1, 2, 3 or 5 minutes), after every TV is switched on. The walk is planned round the furniture and fixtures, so the person never goes through a wall, a chair or a table; in the living room and the bedrooms the person picks up the remote and switches the ad on the TV, in the kitchen they take a drink from the fridge, in the bathrooms they wash their hands, and between rooms they open the door and walk through into the hall. The doors really swing open and show the next room behind them; when the person opens a door the camera moves in towards it, then the picture dissolves into the next room (the hall, a bedroom, a bathroom) where the camera starts on the door they come out of, and the door closes behind them as they walk on. TVs on the wall go from 100 inches to 150, 200 and a whole-wall TV: each is as big as the free stretch of wall allows, never over a door, with nothing in front of it, and the person on the tour stands beside the TV and not in front of it. The hall is wider and deeper, has all ten doors on its back wall and a big TV on each end wall. A \ud83d\udd04 Look all round (360) button puts you in the middle of a closed room (solid ceiling and four walls) to turn all the way round by dragging; a double tap on the floor walks you to that spot, and from above or in the garden a double tap takes the view closer to where you tapped. The view can never go under the floor. The garden is a big lawn you can walk all the way round, and the house outside has windows and doors on all four sides, a porch, a chimney and a roof; with the Furniture button you can add and move trees, pines, bushes, flowers, fences, street lamps, benches, cars, roads, ponds, swings, sheds and dog houses. The cards on the Construction Lab home screen are centred, with a glowing round icon and a soft colour. COMMUNITY (a card on the Construction Lab home screen and a Community button in My House): the seven people who live in the house (Ama, Joseph, Grace, Daniel, Fatima, Papa Moses and Mama Rose, each with their own look) get hungry over time, can fall sick, and become unhappy when their room has no power or their sink leaks; they stand in their rooms in the house as people you can tap, with a word over their head showing how they are. The player feeds them (food), gives medicine, sends the sick to the hospital (three beds: each patient needs treating before their care runs out and goes home better), and buys food and medicine in the shop with points. People who are starving, sick or unhappy for too long lose health and can die. Calls for help arrive in plain words ("My outlet is dead and it is dark in here", "The sink leaks"): Go and fix it opens the house on that room, the real wiring or plumbing job is done, and when it works the call finishes and earns 15 points; wiring and plumbing also break by themselves from time to time so there is always something to do. Hospital discharges, feeding and medicine earn points too. Everything is saved (the people, supplies, calls and which rooms are fixed or broken) and time passes only gently while the app is closed. Inside a room the view stays inside the house: you can look about a little but you cannot swing round behind the walls, and a Go outside button (and Go inside in the garden) is the only way out. Everything in a room is drawn in layers (the floor and walls first, then what is fixed to them like the TV, the plates, the frames and the doors, then the furniture and the person), so the edges of a TV or a door never disappear when you turn to the side and the person never shows through a door, a wall or their own body. The person is built from rounded parts with real joints (a head with a face and hair, shoulders, elbows, knees, hands and shoes), the foot that is down always stands on the floor, and the walk keeps a body-width away from furniture and walls. A TV button puts a wall TV (five models, the big ones up to 77 inches) in a room, or in every room, and turns TVs on and off. An Add button adds outlets, GFCI outlets and light switches to a room that you wire yourself with the wiring bench, a Map button shows or hides the little map (which shrinks to fit the screen), and the Start from a bare house button makes every room need its wiring and plumbing so you can wire the whole house first. The ceiling of a room can hold a light or a fan. All the lessons on the lab home screen (Wall outlet, Light switch, GFCI outlet, Ceiling fan, Sink drain, Faucet supply lines, Build and fix a house, Learn the trades: eight tiles, four on each side) play inside a furnished room with a big TV on the wall showing the NGMY Jobs ad; the ceiling light is already in and only the thing being taught is waiting (red), and once it is done you can use it: flip the switch, plug in a lamp, TV or hair dryer, watch the fan spin. The house also has a Garden (a view of the house from outside with a tree, a path and a mailbox): the front door of the living room leads out to it and the front door there leads back in. Tap a door in a room to open it and walk through it into the next room or the hall, like in a game. Every room can be fixed, even the ones shown as finished: a finished room opens finished and you can pull devices out and wire them again. In a wired room tap an outlet to plug something in (five big TVs from Beovision to Apple TV that play NGMY ads, a lamp, a toaster or a hair dryer) or unplug it, tap the wall switch (or the light) to turn the light or the ceiling fan on and off, and tap a TV to watch it full screen with its own brand home screen. Bedrooms have ceiling fans. Wire a room, Plumb a room and Fix a house on the lab home screen all open My House at a room that needs that job. In the wiring jobs a wrong wire can be fastened just like for real and it burns or trips the breaker when the power goes on, touching a live wire shocks (in Learn mode it hurts nothing but the shock still happens, in Practice mode it costs a life), the wire buttons that are already fastened disappear, the screw labels are kept away from the wires, finished devices have a bright frame so they are easy to find from far, finished rooms have a painted ceiling with crown moulding and no bare beams, and a TV in the room job opens full screen when tapped. The Construction Lab downloads on its own when its button is pressed, so the Core Protocol opens quickly. A TV that is plugged in and on plays the real NGMY ads right on its screen, flat on the glass like a normal TV, without opening it (tap it to watch full screen). There is a Voltage tester: in My House pick the Tester button and tap an outlet, the switch or the light (it glows and beeps when there is power and stays dark when there is none), and in the wiring jobs it is the Voltage tester right after Look in the devices tray. The Construction Lab menus are now at the top like in the Electronics Lab, the home screen of the lab is a short list of tiles with a Learn mode and Practice mode switch, a device already put in can be tapped again to open it or pull it out, and a tap that misses never moves the view. opened from the construction helmet button next to the AI button at the top of the Electronics Lab, and also as a tile in the Core Protocol. Every model can be turned with a finger, zoomed by pinching or with the zoom buttons, and any part can be tapped to zoom in and read what it is. Lessons: Wall outlet (black hot wire to the brass screw, white neutral to the silver screw, bare copper ground to the green screw), Light switch (two black wires on the two brass screws, white wires joined with a wire nut), GFCI outlet (power in on the LINE screws, the LOAD screws are covered with yellow tape, press RESET then TEST), Sink drain (build the tailpiece, P-trap and trap arm, tighten the slip nuts, run the water and see the water seal that blocks sewer gas), Faucet supply lines (hot red hose on the left, cold blue hose on the right, then open the shut-off valves) and a whole house cut open at the front that can be built stage by stage (slab, framing, plumbing rough-in, electrical rough-in, drywall, fixtures, roof), where a tripped breaker and a leaking slip nut can be fixed and each fixture opens its own lesson. The electrical lessons start with the breaker ON and refuse any wire until it is turned OFF, and every wrong connection is explained in plain words. BUILD A WHOLE ROOM (also WIRE A ROOM quick start, and a Skip to the wiring button in the tray, which do the framing, cable and drywall for you so you start straight at wiring the outlets, switches, light and fan with coloured labelled screws, the tester, the TV and the switch test; the room has a window wall, a door wall and the working wall): a project with three phases (rough-in, drywall, devices). Rough-in: mount wall boxes, ceiling boxes and a fan box on the studs with the drill, and unroll the cable through the studs and ceiling (a wrong route gives an error). Drywall: hang the sheets, cut holes with the drywall saw, screw them to the studs, then tape, mud, sand and paint. Devices: wire outlets, several switches, a ceiling light and a ceiling fan, each with a switch to test, then plug in a TV and other appliances. The screw terminals have different colours (brass gold hot, silver neutral, green ground) and show a label when tapped. A Behind the wall / In front button lets you choose which side of the wall you look from instead of the camera turning by itself. Learn mode tells you what to do next and explains every wrong move; Practice mode only speaks up when something is done wrong, and real wiring mistakes shock (three lives) or burn. SERVICE CALLS (Fix a house, learn and practice): a customer rings with four problems chosen from twelve kinds (tripped breaker, no hot water, leaking slip nut, leaking crimped joint, dead outlet, flickering light, burnt outlet, tripped GFCI, running toilet, dripping faucet, hole in the wall, clogged sink), a different mix every time; use Look and test, then the right tool from the toolbox (hand, screwdriver, pliers, wrench, crimp tool, plunger, new flapper, new outlet, drywall patch); wires must have their breaker switched off first. PLUMBING JOBS (learn and practice): fit out a bathroom (flange, wax ring, toilet, bolts, shut-off valve, supply hose, then the sink) or a kitchen sink piece by piece, with the order checked (the app says why a piece cannot go there yet), the main water valve turned off before cutting into pipes, joints tightened with the wrench, and finally the water turned on to find leaks.',"MY HOUSE, THE WORLD OUTSIDE: go outside from the living room (Go outside, or the front door) into a big garden town you can walk and decorate. It starts with a main street, a lane up to the house, a crossroads, a shop, a hospital with a red cross, a fire station with a fire truck, a school, a second house, an ambulance and a car, trees, a pond, lampposts, a bench and fenced animals. In Furniture mode the Add tray offers road pieces (straight, corner, T-junction, crossroads) that snap to a grid and jump a whole piece with the arrow buttons so they always join up, buildings (house, shop, hospital, fire station, school), cars, a fire truck, an ambulance, animals (dog, cat, cow, sheep, chicken, horse) that wander about, trees, bushes, flowers, fences, a bench, a swing, a shed and a doghouse. Everything can be moved, turned, recoloured and removed with the buttons, and nothing reacts to a tap unless the Furniture button is on. Walk about puts a person in the world: hold the arrows to walk (up is away from you), or double tap a spot to send them there; they walk round buildings, vehicles, trees and fences, and walking up to the front door takes them back into the living room. The camera never goes under the ground.","ELECTRONICS LAB: build real circuits with 56 parts in two tool rows, both at the top above the board (swipe sideways), under a redesigned top bar with the lab name, a live count of working and burnt parts, buttons for ready-made circuits, repair, clear and help, and a challenge card with a progress bar: batteries, solar panel, hand crank, wind turbine, switch, fuse, bulb, LED, motor, radio, TV, fan, speaker, clock, calculator, phone charger, WiFi router, siren, toy car, kettle, desk lamp, party lights, voltmeter and ammeter, step-down converter (brings big battery volts down to 3 to 9 V so a phone, tablet, headphones or smart watch is safe), 5 V regulator (gets hot), diode (one way, 0.7 V drop), light sensor, LED strip, water pump, hair dryer, headphones, smart watch, tablet, fridge, washing machine, blender, drone, power drill, torch, neon sign, microwave, doorbell, security camera, game console, heart monitor, aquarium, lighthouse, disco ball, robot and toaster. Each gadget needs the right volts and the right way round: the lab explains why something is not working (not connected, only one end wired, plugged in backwards, flat battery, switch open, too few volts, burnt out and why). A 1.5 volt battery starts flat and must be charged by a solar panel first. The TV shows NGMY animation channels: it opens on the big screen by itself for a minute when it first switches on, and tapping it 3 times quickly opens the big screen. Each TV brand shows its apps in its own design: Samsung with a Smart Hub bar along the bottom, LG with webOS wide launcher cards, Sony with Google TV rows and a picture card, Apple TV with big rounded icons that rise when selected, and Bang and Olufsen with a quiet warm text menu. The TV has 10 NGMY animation channels, a remote control at the top middle of the big screen (CH minus, CH plus, TV, Apps, Ads) and 8 apps inside the TV screen (there is no Growth Income ad or app on the TVs): NGMY Ads (every promotion as cartoons), Civic Registry, Jobs, NGMY Store (African and traditional food, supporting the Congolese and African community), Kiswahili, Doc Scanner, Invoices and Calendar. Each ad is a little cartoon with a kid character. Premium devices with screens play the NGMY cartoon ads on their own screens: TVs (Samsung Neo QLED 8K, LG OLED evo G5, Sony Bravia 9, Apple TV 4K, Bang and Olufsen Beovision), phones (iPhone 18 Pro Max with a Dynamic Island, iPhone Fold, Galaxy S26 Ultra, Galaxy Z Fold7, Pixel 10 Pro XL, Xiaomi 16 Ultra, Huawei Mate 80 Pro Max, OPPO Find X9 Ultra, Honor Magic V5, vivo X300 Pro), tablets and readers (iPad Pro, Kindle Scribe), computers (MacBook Pro, iMac, Pro Display XDR monitor, Sony laser projector, luxury car touchscreen, Apple Vision Pro). Tapping a screen 3 times opens its big screen (a phone opens like an iPhone, a computer shows a desktop with a dock and app windows). Tapping it 4 times opens a size sheet so the screen can be made bigger (never smaller than normal). Sample circuit: Phone and TV on one battery, using a step-down converter. The AI button at the top of the lab opens the AI Inventor, which builds what you describe on the lab board.  Every battery and solar panel can only give so many amps: when the gadgets connected ask for more, a red warning triangle appears on the power source, its volts sag, gadgets switch off and the lab explains why. The lab saves your board and your challenges by itself, so nothing disappears when you leave. The challenges sit behind a flag button in the top bar (with a number on it for how many are left), next to the dark glowing AI button and the help button.","BODY EXPLORER: a real 3D human body built from medical anatomy data. You can turn it, zoom in, switch layers (skin, muscles, organs, skeleton, blood vessels), tap any part to learn about it, hear the heart beat, and take a quiz.","KISWAHILI SCHOOL: learn English and Swahili with pictures and the teacher Mwalimu Amina.","FAMILY TREE AND FAMILY BOOK: build a family tree, then keep a Family Book library of up to six books. The AI can write a whole new book from the tree, in English or Swahili, and the cover can be designed. The look of the top of each book can be chosen from eight header designs (classic leather, ornate gold, parchment, clean paper, midnight, emerald, rose vintage, modern) with the Header button, and the book title also shows as a small running title on every page.","NOTES: business notes with search, photos and cards.","NGMY QUOTES: make a picture quote with many designs, word sizes, text styles, your own photo and the NGMY logo. It also makes NEWS: a newspaper page with a headline, article and your picture, written by an AI that knows NGMY.","BIO STUDIO: link-in-bio pages with designs such as Neural Core, Quantum Grid and Mech Terminal, and visitors can react to a page.","MENU STUDIO: restaurant menus published as a link.","BUSINESS CARD CREATOR: design and download business cards.","INVOICES AND QUOTE CALC: invoices, receipts and estimates with NGMY watermarks.","HELPER GIFTS AND ROSTER: a member who is the first to contribute 3 times in a row earns a helper gift that the admin grants. The admin chooses how it is given: an NGMY store money card (a QR code the chosen store scans), or Cash App or Zelle with no store needed. For Cash App or Zelle the admin types the phone number the member should call or text and an optional note; the member then sees a green (Cash App) or purple (Zelle) gift pop-up with the amount, that number and Call and Text buttons every time they open the app, until they tap Received. The printed Civic Registry roster carries a light NGMY watermark behind it (between the earlier strong one and the too faint one).","DOC SHARE, QR GENERATOR, RECORDER STUDIO, VIDEO STUDIO, PLAY ZONE AND PHONE UNLOCK: tools in the Creator Hub.","APP BUILDER: describe an app and the AI builds it, including real web apps you can publish.","DOCUMENT SCANNER: scan papers with the phone camera.","LIGHT AND DARK LOOK: in My Profile the appearance can be Light, Dark or Auto. Light mode is plain and calm: thick white cards with a wide soft shadow all round on a very light grey page, frames in the colourful reference style (a thick bright colour rim, rich colour inside with soft waves and glowing dots, still) on the four home frames and the Tool Hub (Business Card Creator green, Menu Studio gold, Essentials blue, each with its name and a round colour icon above, the light sample card in the middle and a round shiny play button, no dark fade), home frames in two colours only (Neural Link and Core Protocol blue, Signal Grid and Vault Channel purple), Hub, Creator Toolkit, Core Protocol, NGMY Slides and the NGMY Advisors filter frames with colour: a soft sky blue or soft lavender wash (white at the top) with a thin edge and a soft shadow of the same colour, a whole row at a time (one row blue, the next row purple, never mixed tile by tile), the four NGMY Hub tiles all in one colour, NGMY Services in a solid purple frame, the NGMY badge at the top of home in light gold, pure white pages, NGMY Slides opening at once when you come back to it (no loading every time), Civic Registry words in a dark readable grey in light mode, a Create Invoice form grouped into framed sections with rounded fields and icons, and the Quote Calc Iron Triangle made of brushed steel (when a third of FAST, CHEAP, GOOD is turned on, one of the other two turns off at random, not in a fixed order), pages that are loading stay light in light mode, each icon in a full colour app-style tile with a white icon, clear dark text, a white bottom menu with grey icons where the chosen tab is white in a dark circle, and nothing glowing or moving. This includes NGMY Slides, Creator Toolkit, Business Card and Menu Studio, My Profile, the Loan Service and Growth Income buttons on home, and the Core Protocol page, which is white in light mode. Dark mode keeps the futuristic look with glowing rings and moving scan lines. NGMY Advisors keep their own look in both modes.","GAME CENTER AND VAULT ARCADE: arcade games you can play. Game bets and wins have their own receipts and do not appear in the wallet history. Games played offline are saved on the phone and counted on the balance, then applied to the account in order as soon as the phone is online again, and every device updates."],x.s)
D.f3O=new B.y(0.1,0.08)
D.eXN=new B.y(0.3,0.05)
D.eLe=new B.y(0.55,0.1)
D.ePF=new B.y(0.8,0.06)
D.eSX=new B.y(0.92,0.16)
D.eSq=new B.y(0.2,0.2)
D.eQ9=new B.y(0.7,0.22)
D.eWr=new B.y(0.05,0.4)
D.eTp=new B.y(0.95,0.45)
D.eM1=new B.y(0.12,0.7)
D.eOl=new B.y(0.88,0.75)
D.eOt=new B.y(0.4,0.9)
D.eJm=new B.y(0.65,0.93)
D.ePh=new B.y(0.25,0.97)
D.eQG=new B.y(0.85,0.9)
D.eMV=new B.y(0.5,0.04)
D.d9L=w([D.f3O,D.eXN,D.eLe,D.ePF,D.eSX,D.eSq,D.eQ9,D.eWr,D.eTp,D.eM1,D.eOl,D.eOt,D.eJm,D.ePh,D.eQG,D.eMV],x.G)
D.d9U=w([A.c,A.hI,A.aG,A.aV],x.O)
D.ekp=new C.k3("office_blue","Office Blue",A.bo,A.dh,A.aL,A.c,A.lm)
D.ekA=new C.k3("campus_green","Campus Green",A.b2,A.hk,A.cQ,A.nu,A.ur)
D.ekq=new C.k3("sunset","Sunset",A.fK,A.k1,A.oj,A.hX,A.qg)
D.ekr=new C.k3("midnight","Midnight",A.aD,A.kO,A.cA,A.a_,A.dA)
D.ekC=new C.k3("classic","Classic",A.d6,A.dW,A.m9,A.hL,A.fZ)
D.ekz=new C.k3("rose_gold","Rose Gold",A.hI,A.yz,A.yy,A.wu,A.Ck)
D.ekk=new C.k3("ocean_teal","Ocean Teal",A.fq,A.rD,A.ol,A.rT,A.wd)
D.ekj=new C.k3("slate_pro","Slate Pro",A.by,A.a_,A.aL,A.aS,A.bm)
D.eki=new C.k3("neon_night","Neon Night",A.b9,A.b_,A.bm,A.dQ,A.a_)
D.eku=new C.k3("lavender","Lavender",A.b7,A.mR,A.kv,A.pm,A.on)
D.ekw=new C.k3("coral","Coral",A.c9,A.k1,A.uk,A.hX,A.mV)
D.ekl=new C.k3("forest","Forest",A.hJ,A.eb,A.ct,A.ma,A.ew)
D.ekm=new C.k3("berry","Berry",A.fe,G.a_M,A.Cl,D.akb,A.kO)
D.ekt=new C.k3("sand","Sand",A.e2,A.ia,A.oj,A.hL,A.bL)
D.eky=new C.k3("ice","Ice",A.oo,A.Gf,A.aL,A.ok,A.ft)
D.eko=new C.k3("charcoal","Charcoal",A.an,A.aS,A.cA,A.bs,A.a_)
D.ekh=new C.k3("mint","Mint",A.aV,A.fX,A.hk,A.ma,A.qu)
D.ekx=new C.k3("crimson","Crimson",A.bD,A.nw,A.ky,A.GH,A.rU)
D.bkf=new B.u(1,0.996078431372549,0.9882352941176471,0.9098039215686274,A.q)
D.eks=new C.k3("gold","Gold",A.mO,A.wh,A.po,D.bkf,A.or)
D.ekv=new C.k3("aqua","Aqua",A.bT,A.yu,A.pk,A.qj,A.pq)
D.ekn=new C.k3("plum","Plum",A.ns,A.yw,A.Cl,A.Gg,A.rO)
D.ekB=new C.k3("steel","Steel",A.d9,A.dh,A.bs,A.lm,A.lk)
D.a69=w([D.ekp,D.ekA,D.ekq,D.ekr,D.ekC,D.ekz,D.ekk,D.ekj,D.eki,D.eku,D.ekw,D.ekl,D.ekm,D.ekt,D.eky,D.eko,D.ekh,D.ekx,D.eks,D.ekv,D.ekn,D.ekB],B.at("O<k3>"))
D.dah=w([A.c3,A.jI],x.O)
D.Uj=new C.hJ(10,"rotate3d")
D.JF=new C.hJ(8,"flip")
D.aMd=new C.hJ(19,"spiral")
D.r6=new C.hJ(16,"bounce")
D.aMg=new C.hJ(9,"flipVertical")
D.dai=w([D.Uj,D.JF,D.aMd,D.r6,D.aMg],x.i)
D.em=w([1353184337,1399144830,3282310938,2522752826,3412831035,4047871263,2874735276,2466505547,1442459680,4134368941,2440481928,625738485,4242007375,3620416197,2151953702,2409849525,1230680542,1729870373,2551114309,3787521629,41234371,317738113,2744600205,3338261355,3881799427,2510066197,3950669247,3663286933,763608788,3542185048,694804553,1154009486,1787413109,2021232372,1799248025,3715217703,3058688446,397248752,1722556617,3023752829,407560035,2184256229,1613975959,1165972322,3765920945,2226023355,480281086,2485848313,1483229296,436028815,2272059028,3086515026,601060267,3791801202,1468997603,715871590,120122290,63092015,2591802758,2768779219,4068943920,2997206819,3127509762,1552029421,723308426,2461301159,4042393587,2715969870,3455375973,3586000134,526529745,2331944644,2639474228,2689987490,853641733,1978398372,971801355,2867814464,111112542,1360031421,4186579262,1023860118,2919579357,1186850381,3045938321,90031217,1876166148,4279586912,620468249,2548678102,3426959497,2006899047,3175278768,2290845959,945494503,3689859193,1191869601,3910091388,3374220536,0,2206629897,1223502642,2893025566,1316117100,4227796733,1446544655,517320253,658058550,1691946762,564550760,3511966619,976107044,2976320012,266819475,3533106868,2660342555,1338359936,2720062561,1766553434,370807324,179999714,3844776128,1138762300,488053522,185403662,2915535858,3114841645,3366526484,2233069911,1275557295,3151862254,4250959779,2670068215,3170202204,3309004356,880737115,1982415755,3703972811,1761406390,1676797112,3403428311,277177154,1076008723,538035844,2099530373,4164795346,288553390,1839278535,1261411869,4080055004,3964831245,3504587127,1813426987,2579067049,4199060497,577038663,3297574056,440397984,3626794326,4019204898,3343796615,3251714265,4272081548,906744984,3481400742,685669029,646887386,2764025151,3835509292,227702864,2613862250,1648787028,3256061430,3904428176,1593260334,4121936770,3196083615,2090061929,2838353263,3004310991,999926984,2809993232,1852021992,2075868123,158869197,4095236462,28809964,2828685187,1701746150,2129067946,147831841,3873969647,3650873274,3459673930,3557400554,3598495785,2947720241,824393514,815048134,3227951669,935087732,2798289660,2966458592,366520115,1251476721,4158319681,240176511,804688151,2379631990,1303441219,1414376140,3741619940,3820343710,461924940,3089050817,2136040774,82468509,1563790337,1937016826,776014843,1511876531,1389550482,861278441,323475053,2355222426,2047648055,2383738969,2302415851,3995576782,902390199,3991215329,1018251130,1507840668,1064563285,2043548696,3208103795,3939366739,1537932639,342834655,2262516856,2180231114,1053059257,741614648,1598071746,1925389590,203809468,2336832552,1100287487,1895934009,3736275976,2632234200,2428589668,1636092795,1890988757,1952214088,1113045200],x.t)
D.dbh=w([0,0.32,0.68,1],x.x)
D.na=new C.hJ(6,"zoom")
D.vw=new C.hJ(4,"slideUp")
D.vv=new C.hJ(2,"slideLeft")
D.dbs=w([D.na,D.JF,D.vw,D.Uj,D.vv],x.i)
D.dbY=w([A.c4,A.hI,A.ix,A.i8,A.c],x.O)
D.baX=new B.ab(0,A.G,D.aiT,A.vC,30)
D.dcL=w([D.baX],x.V)
D.ew_=new B.r(0,-2.5)
D.evR=new B.r(-2.5,0)
D.eu3=new B.r(2.5,0)
D.dcO=w([A.Ux,A.a9r,A.aNo,A.a9q,D.ew_,A.a9t,D.evR,D.eu3],x.dN)
D.IP=w([0,79764919,159529838,222504665,319059676,398814059,445009330,507990021,638119352,583659535,797628118,726387553,890018660,835552979,1015980042,944750013,1276238704,1221641927,1167319070,1095957929,1595256236,1540665371,1452775106,1381403509,1780037320,1859660671,1671105958,1733955601,2031960084,2111593891,1889500026,1952343757,2552477408,2632100695,2443283854,2506133561,2334638140,2414271883,2191915858,2254759653,3190512472,3135915759,3081330742,3009969537,2905550212,2850959411,2762807018,2691435357,3560074640,3505614887,3719321342,3648080713,3342211916,3287746299,3467911202,3396681109,4063920168,4143685023,4223187782,4286162673,3779000052,3858754371,3904687514,3967668269,881225847,809987520,1023691545,969234094,662832811,591600412,771767749,717299826,311336399,374308984,453813921,533576470,25881363,88864420,134795389,214552010,2023205639,2086057648,1897238633,1976864222,1804852699,1867694188,1645340341,1724971778,1587496639,1516133128,1461550545,1406951526,1302016099,1230646740,1142491917,1087903418,2896545431,2825181984,2770861561,2716262478,3215044683,3143675388,3055782693,3001194130,2326604591,2389456536,2200899649,2280525302,2578013683,2640855108,2418763421,2498394922,3769900519,3832873040,3912640137,3992402750,4088425275,4151408268,4197601365,4277358050,3334271071,3263032808,3476998961,3422541446,3585640067,3514407732,3694837229,3640369242,1762451694,1842216281,1619975040,1682949687,2047383090,2127137669,1938468188,2001449195,1325665622,1271206113,1183200824,1111960463,1543535498,1489069629,1434599652,1363369299,622672798,568075817,748617968,677256519,907627842,853037301,1067152940,995781531,51762726,131386257,177728840,240578815,269590778,349224269,429104020,491947555,4046411278,4126034873,4172115296,4234965207,3794477266,3874110821,3953728444,4016571915,3609705398,3555108353,3735388376,3664026991,3290680682,3236090077,3449943556,3378572211,3174993278,3120533705,3032266256,2961025959,2923101090,2868635157,2813903052,2742672763,2604032198,2683796849,2461293480,2524268063,2284983834,2364738477,2175806836,2238787779,1569362073,1498123566,1409854455,1355396672,1317987909,1246755826,1192025387,1137557660,2072149281,2135122070,1912620623,1992383480,1753615357,1816598090,1627664531,1707420964,295390185,358241886,404320391,483945776,43990325,106832002,186451547,266083308,932423249,861060070,1041341759,986742920,613929101,542559546,756411363,701822548,3316196985,3244833742,3425377559,3370778784,3601682597,3530312978,3744426955,3689838204,3819031489,3881883254,3928223919,4007849240,4037393693,4100235434,4180117107,4259748804,2310601993,2373574846,2151335527,2231098320,2596047829,2659030626,2470359227,2550115596,2947551409,2876312838,2788305887,2733848168,3165939309,3094707162,3040238851,2985771188],x.t)
D.ddj=w([23,114,69,56,80,144],x.t)
D.ddO=w(["Make the headline shorter","Add a paragraph about the Civic Registry","Write the whole thing in Swahili","Change the newspaper name"],x.s)
D.def=w(["Add a slide about\u2026","Make this slide shorter","Translate everything to Swahili","Add a slide with our contact details","Change the style to luxury","Remove the last slide"],x.s)
D.dZf=new C.jw(6,"beadedPearl")
D.bpW=new B.u(1,0.47843137254901963,0.3607843137254902,0.1803921568627451,A.q)
D.hLK=w([H.a_r,D.bpW,A.iy],x.O)
D.aLm=new C.ij("malipo_beaded_pearl","Malipo \u2014 Lulu","Mpaka wa shanga za lulu kuzunguka pembeni \xb7 dhahabu na shaba.",D.dZf,4294966774,4286209070,4291404327,D.ki)
D.dZg=new C.jw(7,"artDeco")
D.buw=new B.u(1,0.9686274509803922,0.9607843137254902,0.9490196078431372,A.q)
D.bxK=new B.u(1,0.12156862745098039,0.10588235294117647,0.08627450980392157,A.q)
D.hLG=w([D.buw,D.bxK,A.c3],x.O)
D.aLn=new C.ij("malipo_art_deco","Malipo \u2014 Art Deco","Pembe za ngazi za kisasa \xb7 mng'ao wa dhahabu juu.",D.dZg,4294440434,4280228630,4290283019,D.ki)
D.dZh=new C.jw(8,"rosetteCorners")
D.bwM=new B.u(1,0.984313725490196,0.9647058823529412,0.9372549019607843,A.q)
D.bkA=new B.u(1,0.4196078431372549,0.24705882352941178,0.16470588235294117,A.q)
D.bpP=new B.u(1,0.788235294117647,0.4823529411764706,0.23921568627450981,A.q)
D.hLh=w([D.bwM,D.bkA,D.bpP],x.O)
D.aLl=new C.ij("malipo_rosette","Malipo \u2014 Duara","Medali ya duara kila pembe \xb7 shaba na mahogany.",D.dZh,4294702831,4285218602,4291394365,D.ki)
D.dZi=new C.jw(9,"modernLedger")
D.hLg=w([A.c,D.jH,D.jH],x.O)
D.aLk=new C.ij("malipo_modern_ledger","Malipo \u2014 Kisasa","Ukanda thabiti wa bluu upande wa kushoto \xb7 mstari mwembamba.",D.dZi,4294967295,4279378237,4279378237,D.ki)
D.Su=w([D.a8w,D.a8s,D.a8v,D.a8r,D.a8x,D.a8A,D.a8G,D.a8F,D.a8D,D.a8q,D.a8t,D.a8u,D.a8B,D.a8y,D.a8z,D.a8E,D.a8C,D.aLm,D.aLn,D.aLl,D.aLk],x.h)
D.dg_=w([null,4294626325,4294828103,4283096704,4280472558,4294210230,4294677052,4293870660,4287323382,4282090230,4294967295,4279310375],x.Z)
D.dg4=w(["Kichwa cha Mtu: [Kiasi kilichosalia au thamani]","Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.bf=new C.vi(0,"rectangle")
D.eX=new C.vi(1,"circle")
D.lx=new C.vi(6,"hexagon")
D.dgk=w([D.bf,D.eX,D.lx],x.m)
D.oX=w([99,124,119,123,242,107,111,197,48,1,103,43,254,215,171,118,202,130,201,125,250,89,71,240,173,212,162,175,156,164,114,192,183,253,147,38,54,63,247,204,52,165,229,241,113,216,49,21,4,199,35,195,24,150,5,154,7,18,128,226,235,39,178,117,9,131,44,26,27,110,90,160,82,59,214,179,41,227,47,132,83,209,0,237,32,252,177,91,106,203,190,57,74,76,88,207,208,239,170,251,67,77,51,133,69,249,2,127,80,60,159,168,81,163,64,143,146,157,56,245,188,182,218,33,16,255,243,210,205,12,19,236,95,151,68,23,196,167,126,61,100,93,25,115,96,129,79,220,34,42,144,136,70,238,184,20,222,94,11,219,224,50,58,10,73,6,36,92,194,211,172,98,145,149,228,121,231,200,55,109,141,213,78,169,108,86,244,234,101,122,174,8,186,120,37,46,28,166,180,198,232,221,116,31,75,189,139,138,112,62,181,102,72,3,246,14,97,53,87,185,134,193,29,158,225,248,152,17,105,217,142,148,155,30,135,233,206,85,40,223,140,161,137,13,191,230,66,104,65,153,45,15,176,84,187,22],x.t)
D.akk=new B.u(1,0.24313725490196078,0.47843137254901963,0.30980392156862746,A.q)
D.dgU=w([D.akk,A.eb],x.O)
D.eLv=new B.y("","Classic")
D.eJB=new B.y("caps","Bold caps")
D.eWu=new B.y("elegant","Elegant")
D.f1F=new B.y("shadow","Shadow")
D.eQ2=new B.y("neon","Neon glow")
D.f_i=new B.y("marker","Highlighter")
D.f1T=new B.y("stamp","Stamp")
D.eOU=new B.y("threed","3D")
D.eX_=new B.y("fire","Fire")
D.eY_=new B.y("ice","Ice")
D.eVD=new B.y("chalk","Chalk")
D.eVI=new B.y("comic","Comic")
D.f3a=new B.y("softglow","Soft glow")
D.eZ4=new B.y("lowercase","Lowercase")
D.eWc=new B.y("double","Echo")
D.f3k=new B.y("whisper","Whisper")
D.aCs=w([D.eLv,D.eJB,D.eWu,D.f1F,D.eQ2,M.aSH,D.f_i,D.f1T,M.aSJ,D.eOU,M.aSB,D.eX_,D.eY_,D.eVD,D.eVI,A.V3,Ax.aSK,D.f3a,D.eZ4,D.eWc,D.f3k],x.L)
D.dif=w([3,5,7,10,12,15],x.t)
D.djR=w([A.c4,A.bL,A.c,A.ey,A.cO],x.O)
D.dKs=new C.tQ(10,"cardWorld")
D.Eh=new C.Cb(3,"rounded")
D.e15=new C.lE("world","NGMY World",D.dKs,D.Eh,4278918980,4278521378,4294967295,4280118271,"logo","Roboto","Roboto","Roboto","a modern digital news site: clear, confident and direct, a strong plain headline and a one-sentence summary",!1,"none",!0,!1)
D.dKt=new C.tQ(11,"cardSplit")
D.e11=new C.lE("business","Business Wire",D.dKt,D.Eh,4294967295,4294507260,4279179050,4292943150,"logo","Roboto","Roboto","Roboto","a clean business news site: precise, informative and professional, with a plain, strong headline",!1,"none",!1,!1)
D.dKu=new C.tQ(12,"cardBreaking")
D.e1e=new C.lE("breaking","Breaking Red",D.dKu,D.Eh,4278913807,4280944139,4294967295,4292943150,"logo","Roboto","Roboto","Roboto","a breaking-news broadcast: urgent, factual and clear, a punchy headline and a tight summary",!1,"none",!0,!1)
D.dKv=new C.tQ(13,"cardFeature")
D.e17=new C.lE("feature","Tech Feature",D.dKv,D.Eh,4294967295,4294047225,4279179050,4280640491,"logo","Roboto","Roboto","Roboto","a modern feature article: informative, engaging and well explained",!1,"none",!1,!1)
D.aKR=new C.tQ(6,"circle")
D.aKL=new C.Cb(4,"circle")
D.e1b=new C.lE("parchment","Royal Circle",D.aKR,D.aKL,4294241234,4293450160,4281278992,4285211048,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a stately royal edition: dignified, noble and ceremonial",!0,"sepia",!1,!1)
D.e10=new C.lE("ocean","Blue Ocean",D.aKR,D.aKL,4293916415,4292602622,4278984254,4278413729,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm, trustworthy paper: clear, steady and reassuring",!1,"none",!1,!1)
D.dKy=new C.tQ(7,"rail")
D.aKK=new C.Cb(1,"double")
D.e12=new C.lE("forest","Green Leaf",D.dKy,D.aKK,4293983732,4292672743,4278529558,4279599165,"centered","NgmyAbril","NgmyAbril","NgmyOldStandard","a calm community paper about growth and togetherness: gentle, hopeful and clear",!1,"none",!1,!1)
D.aKO=new C.tQ(1,"sideBySide")
D.e1g=new C.lE("herald","NGMY Herald",D.aKO,D.Eh,4294967295,4294308863,4280163147,4286331629,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","the proud NGMY Herald: warm, hopeful and community-minded, in NGMY purple",!1,"none",!1,!1)
D.aKN=new C.tQ(0,"classic")
D.a84=new C.Cb(9,"shadow")
D.e1f=new C.lE("daily","The Daily",D.aKN,D.a84,4294967295,4294243570,4279308561,4292225064,"bar","NgmyAbril","NgmyAbril","NgmyOldStandard","a modern daily newspaper: crisp, clear and energetic, with a punchy headline",!1,"none",!1,!0)
D.dKw=new C.tQ(2,"splash")
D.aKM=new C.Cb(6,"cutCorner")
D.e1_=new C.lE("tabloid","Big Tabloid",D.dKw,D.aKM,4294967295,4294965216,4279308561,4292943176,"bar","Roboto","NgmyAbril","Roboto","a bold tabloid: exciting, short punchy sentences and a loud, attention-grabbing headline (still truthful)",!1,"none",!1,!0)
D.aKS=new C.tQ(9,"minimal")
D.e1a=new C.lE("modern","Modern Digest",D.aKS,D.Eh,4294507260,4293060848,4279179050,4279080072,"logo","Roboto","Roboto","Roboto","a clean modern digest: simple words, short paragraphs, friendly and clear",!1,"none",!1,!1)
D.aKP=new C.tQ(3,"magazine")
D.aKJ=new C.Cb(0,"plain")
D.e16=new C.lE("midnight","Midnight Edition",D.aKP,D.aKJ,4279310375,4278915104,4294047225,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a dramatic late-night edition: confident, cinematic and polished",!1,"none",!0,!0)
D.dKz=new C.tQ(8,"banner")
D.e18=new C.lE("metro","Metro Wire",D.dKz,D.aKM,4294047225,4293060848,4278915616,4280640491,"logo","Roboto","Roboto","Roboto","a modern news wire: fast, factual and direct, like breaking news",!1,"none",!1,!0)
D.dKr=new C.Cb(8,"arch")
D.e19=new C.lE("sunrise","Sunrise Post",D.aKP,D.dKr,4294965229,4294962645,4282064136,4293548044,"split","NgmyAbril","NgmyAbril","NgmyOldStandard","a cheerful morning paper: bright, optimistic and welcoming",!1,"none",!1,!1)
D.aKQ=new C.tQ(5,"scrapbook")
D.dKq=new C.Cb(5,"tape")
D.e14=new C.lE("neon","Neon Beat",D.aKQ,D.dKq,4280163147,4279175726,4294308863,4293675161,"split","NgmyAbril","NgmyAbril","Roboto","a youthful neon culture paper: fresh, bold, energetic and fun",!1,"none",!0,!1)
D.dKx=new C.tQ(4,"wrap")
D.e1h=new C.lE("gold","Golden Press",D.dKx,D.a84,4279505162,4278847748,4294898631,4294626325,"logo","Roboto","NgmyAbril","NgmyOldStandard","a luxurious golden press edition: grand, elegant and prestigious",!1,"none",!0,!0)
D.e1i=new C.lE("minimal","Paper White",D.aKS,D.a84,4294967295,4294638330,4279769115,4279769115,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a quiet, elegant long-read: thoughtful, simple and beautifully written",!1,"none",!1,!1)
D.e13=new C.lE("gazette","Fresh Gazette",D.aKN,D.aKK,4294373341,4293582786,4280949518,4288295954,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a refined town gazette: formal, dignified and warm, with a strong headline",!1,"none",!1,!0)
D.e1d=new C.lE("times","Classic Times",D.aKO,D.aKJ,4294637810,4293913565,4279636750,4280171146,"centered","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a serious classic broadsheet: calm, factual, authoritative, with a strong headline and a clear subhead",!1,"bw",!1,!1)
D.TO=new C.Cb(2,"polaroid")
D.e1c=new C.lE("scrapbook","Memory Scrapbook",D.aKQ,D.TO,4294437835,4293580710,4282001946,4290007817,"split","NgmyOldStandard","NgmyOldStandard","NgmyOldStandard","a warm scrapbook clipping: personal, nostalgic and heartfelt",!1,"sepia",!1,!1)
D.a6r=w([D.e15,D.e11,D.e1e,D.e17,D.e1b,D.e10,D.e12,D.e1g,D.e1f,D.e1_,D.e1a,D.e16,D.e18,D.e19,D.e14,D.e1h,D.e1i,D.e13,D.e1d,D.e1c],B.at("O<lE>"))
D.dk3=w([0.45,1],x.x)
D.IV=w([619,720,127,481,931,816,813,233,566,247,985,724,205,454,863,491,741,242,949,214,733,859,335,708,621,574,73,654,730,472,419,436,278,496,867,210,399,680,480,51,878,465,811,169,869,675,611,697,867,561,862,687,507,283,482,129,807,591,733,623,150,238,59,379,684,877,625,169,643,105,170,607,520,932,727,476,693,425,174,647,73,122,335,530,442,853,695,249,445,515,909,545,703,919,874,474,882,500,594,612,641,801,220,162,819,984,589,513,495,799,161,604,958,533,221,400,386,867,600,782,382,596,414,171,516,375,682,485,911,276,98,553,163,354,666,933,424,341,533,870,227,730,475,186,263,647,537,686,600,224,469,68,770,919,190,373,294,822,808,206,184,943,795,384,383,461,404,758,839,887,715,67,618,276,204,918,873,777,604,560,951,160,578,722,79,804,96,409,713,940,652,934,970,447,318,353,859,672,112,785,645,863,803,350,139,93,354,99,820,908,609,772,154,274,580,184,79,626,630,742,653,282,762,623,680,81,927,626,789,125,411,521,938,300,821,78,343,175,128,250,170,774,972,275,999,639,495,78,352,126,857,956,358,619,580,124,737,594,701,612,669,112,134,694,363,992,809,743,168,974,944,375,748,52,600,747,642,182,862,81,344,805,988,739,511,655,814,334,249,515,897,955,664,981,649,113,974,459,893,228,433,837,553,268,926,240,102,654,459,51,686,754,806,760,493,403,415,394,687,700,946,670,656,610,738,392,760,799,887,653,978,321,576,617,626,502,894,679,243,440,680,879,194,572,640,724,926,56,204,700,707,151,457,449,797,195,791,558,945,679,297,59,87,824,713,663,412,693,342,606,134,108,571,364,631,212,174,643,304,329,343,97,430,751,497,314,983,374,822,928,140,206,73,263,980,736,876,478,430,305,170,514,364,692,829,82,855,953,676,246,369,970,294,750,807,827,150,790,288,923,804,378,215,828,592,281,565,555,710,82,896,831,547,261,524,462,293,465,502,56,661,821,976,991,658,869,905,758,745,193,768,550,608,933,378,286,215,979,792,961,61,688,793,644,986,403,106,366,905,644,372,567,466,434,645,210,389,550,919,135,780,773,635,389,707,100,626,958,165,504,920,176,193,713,857,265,203,50,668,108,645,990,626,197,510,357,358,850,858,364,936,638],x.t)
D.dkt=w(["video/webm;codecs=vp9","video/webm;codecs=vp8","video/webm","video/mp4"],x.s)
D.hGl=new C.p2("Original",0,1,1,0,0,0)
D.hGp=new C.p2("Black & white",0,1.1,0,0,0,0)
D.hGc=new C.p2("Noir",-0.05,1.55,0,0,0,0)
D.hGg=new C.p2("Sepia",0,1,0.25,0.9,0,0)
D.hGf=new C.p2("Vivid",0,1.15,1.6,0,0,0)
D.hG8=new C.p2("Pop",0,1.3,1.9,0,0,0)
D.hGa=new C.p2("Faded",0.06,0.85,0.8,0.1,0,0.4)
D.hGm=new C.p2("Matte",0,0.9,0.85,0,0,0.55)
D.hGh=new C.p2("Cool",0,1.05,1,-0.8,0,0)
D.hGo=new C.p2("Warm",0.03,1.05,1.1,0.8,0,0)
D.hG9=new C.p2("Golden hour",0.04,1,1.25,1,0,0)
D.hGe=new C.p2("Moonlight",-0.08,1.1,0.8,-0.8,-0.1,0)
D.hGn=new C.p2("Dreamy",0.08,0.85,1.1,0.2,0,0.25)
D.hGd=new C.p2("Dramatic",-0.05,1.5,1.2,0,0,0)
D.hGj=new C.p2("Retro",0,0.9,0.7,0.4,0,0.35)
D.hGi=new C.p2("Forest",0,1,1.2,-0.1,-0.45,0)
D.hGk=new C.p2("Rose",0,1,1.1,0.3,0.4,0)
D.hGb=new C.p2("Ocean",0,1,1.2,-0.5,-0.2,0)
D.dku=w([D.hGl,D.hGp,D.hGc,D.hGg,D.hGf,D.hG8,D.hGa,D.hGm,D.hGh,D.hGo,D.hG9,D.hGe,D.hGn,D.hGd,D.hGj,D.hGi,D.hGk,D.hGb],B.at("O<p2>"))
D.bgB=new B.u(1,0.0392156862745098,0.1803921568627451,0.09019607843137255,A.q)
D.dkw=w([D.akk,A.eb,D.bgB],x.O)
D.eGH=new B.y(0.12,0.3)
D.eYa=new B.y(0.26,0.75)
D.eWq=new B.y(0.8,0.22)
D.f24=new B.y(0.9,0.7)
D.eZ3=new B.y(0.5,0.15)
D.f0d=new B.y(0.65,0.85)
D.eNp=new B.y(0.08,0.85)
D.dkM=w([D.eGH,D.eYa,D.eWq,D.f24,D.eZ3,D.f0d,D.eNp],x.G)
D.aCG=w([A.b9,A.c4,A.bh,A.bc],x.O)
D.dlI=w([y.L,"Mbuzi Wawili","Ngyoka","Mmoko"],x.s)
D.dlW=w([A.c,A.ft,A.dy,A.wk],x.O)
D.bkv=new B.u(1,0.10980392156862745,0.09019607843137255,0.06274509803921569,A.q)
D.dmZ=w([D.bkv,D.aiD],x.O)
D.dn0=w([A.uo,A.aE],x.O)
D.dng=w([0,0.25,0.75,1],x.x)
D.dni=w([A.ym,A.pp],x.O)
D.aLO=new C.jw(10,"kenteSunset")
D.hL7=w([D.aj6,A.ku,A.aE],x.O)
D.dXb=new C.ij("kuhowa_kente_sunset","Kente ya Jua",y.H,D.aLO,4294964964,4282000405,4279983648,D.ki)
D.aLP=new C.jw(11,"indigoMudcloth")
D.bhO=new B.u(1,0.9686274509803922,0.9411764705882353,0.8941176470588236,A.q)
D.hLn=w([D.bhO,A.aiA,A.iy],x.O)
D.dXj=new C.ij("kuhowa_indigo_mudcloth","Nguo ya Indigo",y.n,D.aLP,4294439140,4279903102,4279903102,D.ki)
D.aLQ=new C.jw(12,"adinkraRoyal")
D.bxo=new B.u(1,0.4196078431372549,0.24705882352941178,0.12156862745098039,A.q)
D.hLo=w([D.ahj,D.bxo,A.aE],x.O)
D.dXl=new C.ij("kuhowa_adinkra_royal","Muhuri wa Adinkra",y.z,D.aLQ,4294965484,4285218591,4287322667,D.ki)
D.aLR=new C.jw(13,"nileLotus")
D.bt4=new B.u(1,0.9568627450980393,0.9686274509803922,0.9568627450980393,A.q)
D.bp5=new B.u(1,0.058823529411764705,0.3607843137254902,0.3607843137254902,A.q)
D.hLt=w([D.bt4,D.bp5,A.iy],x.O)
D.dXk=new C.ij("kuhowa_nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aLR,4294244340,4279196764,4279196764,D.ki)
D.aLS=new C.jw(14,"shweshweIvory")
D.bmS=new B.u(1,0.9725490196078431,0.9568627450980393,0.9333333333333333,A.q)
D.blp=new B.u(1,0.10588235294117647,0.16470588235294117,0.2901960784313726,A.q)
D.bin=new B.u(1,0.7686274509803922,0.3607843137254902,0.24313725490196078,A.q)
D.hL8=w([D.bmS,D.blp,D.bin],x.O)
D.dXg=new C.ij("kuhowa_shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aLS,4294505710,4279970378,4291058750,D.ki)
D.tD=new C.jw(15,"certIvoryNavy")
D.hL6=w([D.Nz,D.jH,A.iy],x.O)
D.aLo=new C.wv(1,"ringsNdoa")
D.dXd=new C.ij("kuhowa_rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi.",D.tD,4294966259,4279378237,4291404327,D.aLo)
D.a8I=new C.wv(2,"coupleCards")
D.dX8=new C.ij("kuhowa_couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke kila upande.",D.tD,4294966259,4279378237,4291404327,D.a8I)
D.Ek=new C.jw(18,"certIvoryNavyBar")
D.ahi=new B.u(1,1,0.9882352941176471,0.9686274509803922,A.q)
D.hLm=w([D.ahi,D.jH,A.iy],x.O)
D.aLp=new C.wv(3,"kuhoweshaForm")
D.dX6=new C.ij("kuhowa_barua","Barua ya Kuhowesha","Barua rasmi \xb7 pete \xb7 orodha ya vitu.",D.Ek,4294966519,4279378237,4291404327,D.aLp)
D.aiR=new B.u(1,0.10196078431372549,0.15294117647058825,0.26666666666666666,A.q)
D.hLJ=w([D.Nz,D.aiR,A.iy],x.O)
D.a8J=new C.wv(4,"mahariPande")
D.dX9=new C.ij("kuhowa_mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili.",D.tD,4294966259,4279904068,4291404327,D.a8J)
D.aLT=new C.jw(16,"certIvoryGreen")
D.bm7=new B.u(1,0.12156862745098039,0.30196078431372547,0.22745098039215686,A.q)
D.hLa=w([A.MD,D.bm7,A.iy],x.O)
D.aLq=new C.wv(5,"familiaMti")
D.dXf=new C.ij("kuhowa_sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja.",D.aLT,4294966776,4280241466,4291404327,D.aLq)
D.a8K=new C.wv(6,"ndoaSafi")
D.dX7=new C.ij("kuhowa_ndoa_pamoja","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke.",D.Ek,4294966519,4279378237,4291404327,D.a8K)
D.bre=new B.u(1,0.22745098039215686,0.16470588235294117,0.06274509803921569,A.q)
D.hLd=w([D.Nz,A.iy,D.bre],x.O)
D.a8L=new C.wv(7,"peteWide")
D.dXc=new C.ij("kuhowa_pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi.",D.tD,4294966259,4282001936,4291404327,D.a8L)
D.dXm=new C.wv(8,"muhuriCrest")
D.dX5=new C.ij("kuhowa_muhuri","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi.",D.tD,4294966259,4279378237,4291404327,D.dXm)
D.hLp=w([D.ahi,D.aiR,A.iy],x.O)
D.dXn=new C.wv(9,"fomuWazi")
D.dXi=new C.ij("kuhowa_fomu","Fomu ya Ndoa","Fomu yenye mistari \xb7 sehemu wazi.",D.Ek,4294966519,4279904068,4291404327,D.dXn)
D.aLU=new C.jw(17,"certIvoryRose")
D.bmY=new B.u(1,1,0.9725490196078431,0.9607843137254902,A.q)
D.hLs=w([D.bmY,D.ajR,A.iy],x.O)
D.a8H=new C.wv(10,"upendoOrnate")
D.dXe=new C.ij("kuhowa_upendo","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa.",D.aLU,4294965493,4286200650,4291404327,D.a8H)
D.dnM=w([D.dXb,D.dXj,D.dXl,D.dXk,D.dXg,D.dXd,D.dX8,D.dX6,D.dX9,D.dXf,D.dX7,D.dXc,D.dX5,D.dXi,D.dXe],x.h)
D.en=w([2774754246,2222750968,2574743534,2373680118,234025727,3177933782,2976870366,1422247313,1345335392,50397442,2842126286,2099981142,436141799,1658312629,3870010189,2591454956,1170918031,2642575903,1086966153,2273148410,368769775,3948501426,3376891790,200339707,3970805057,1742001331,4255294047,3937382213,3214711843,4154762323,2524082916,1539358875,3266819957,486407649,2928907069,1780885068,1513502316,1094664062,49805301,1338821763,1546925160,4104496465,887481809,150073849,2473685474,1943591083,1395732834,1058346282,201589768,1388824469,1696801606,1589887901,672667696,2711000631,251987210,3046808111,151455502,907153956,2608889883,1038279391,652995533,1764173646,3451040383,2675275242,453576978,2659418909,1949051992,773462580,756751158,2993581788,3998898868,4221608027,4132590244,1295727478,1641469623,3467883389,2066295122,1055122397,1898917726,2542044179,4115878822,1758581177,0,753790401,1612718144,536673507,3367088505,3982187446,3194645204,1187761037,3653156455,1262041458,3729410708,3561770136,3898103984,1255133061,1808847035,720367557,3853167183,385612781,3309519750,3612167578,1429418854,2491778321,3477423498,284817897,100794884,2172616702,4031795360,1144798328,3131023141,3819481163,4082192802,4272137053,3225436288,2324664069,2912064063,3164445985,1211644016,83228145,3753688163,3249976951,1977277103,1663115586,806359072,452984805,250868733,1842533055,1288555905,336333848,890442534,804056259,3781124030,2727843637,3427026056,957814574,1472513171,4071073621,2189328124,1195195770,2892260552,3881655738,723065138,2507371494,2690670784,2558624025,3511635870,2145180835,1713513028,2116692564,2878378043,2206763019,3393603212,703524551,3552098411,1007948840,2044649127,3797835452,487262998,1994120109,1004593371,1446130276,1312438900,503974420,3679013266,168166924,1814307912,3831258296,1573044895,1859376061,4021070915,2791465668,2828112185,2761266481,937747667,2339994098,854058965,1137232011,1496790894,3077402074,2358086913,1691735473,3528347292,3769215305,3027004632,4199962284,133494003,636152527,2942657994,2390391540,3920539207,403179536,3585784431,2289596656,1864705354,1915629148,605822008,4054230615,3350508659,1371981463,602466507,2094914977,2624877800,555687742,3712699286,3703422305,2257292045,2240449039,2423288032,1111375484,3300242801,2858837708,3628615824,84083462,32962295,302911004,2741068226,1597322602,4183250862,3501832553,2441512471,1489093017,656219450,3114180135,954327513,335083755,3013122091,856756514,3144247762,1893325225,2307821063,2811532339,3063651117,572399164,2458355477,552200649,1238290055,4283782570,2015897680,2061492133,2408352771,4171342169,2156497161,386731290,3669999461,837215959,3326231172,3093850320,3275833730,2962856233,1999449434,286199582,3417354363,4233385128,3602627437,974525996],x.t)
D.JG=new C.wA(0,"emojis")
D.Eq=new C.wA(1,"pictures")
D.JH=new C.wA(2,"icons3d")
D.a92=new C.wA(3,"animations")
D.Ul=new C.wA(4,"videoMotion")
D.Er=new C.wA(5,"luxe")
D.a6y=w([D.JG,D.Eq,D.JH,D.a92,D.Ul,D.Er],B.at("O<wA>"))
D.f0R=new B.y(A.e9,"Looks")
D.ePx=new B.y(A.Dw,"Light")
D.ePu=new B.y(A.lT,"Colour")
D.eNq=new B.y(A.wR,"Effects")
D.aqE=new B.a_(63112,"MaterialIcons",!1)
D.eJU=new B.y(D.aqE,"Crop")
D.doi=w([D.f0R,D.ePx,D.ePu,D.eNq,D.eJU],x.f2)
D.dp1=w([],x.D)
D.hLE=w([],x.L)
D.eNG=new B.y("Flashcard",D.JB)
D.eRB=new B.y("Quiz",D.JC)
D.eTF=new B.y("Worksheet",D.JD)
D.eQB=new B.y("Notes",D.n9)
D.eS9=new B.y("Section",D.Eo)
D.dpK=w([D.eNG,D.eRB,D.eTF,D.eQB,D.eS9],B.at("O<+(n,mZ)>"))
D.dpO=w([D.aLm,D.aLn,D.aLl,D.aLk],x.h)
D.dpZ=w([A.ix,A.pp],x.O)
D.cn=new C.hJ(0,"none")
D.dr=new C.hJ(1,"fade")
D.JE=new C.hJ(3,"slideRight")
D.aMf=new C.hJ(5,"slideDown")
D.eiU=new C.hJ(7,"zoomOut")
D.a91=new C.hJ(11,"cube")
D.eiP=new C.hJ(12,"blur")
D.aMc=new C.hJ(13,"dissolve")
D.eiQ=new C.hJ(14,"wipeLeft")
D.eiR=new C.hJ(15,"wipeRight")
D.Uk=new C.hJ(17,"push")
D.eiS=new C.hJ(18,"flash")
D.aMe=new C.hJ(20,"swing")
D.eiT=new C.hJ(21,"curtain")
D.SV=w([D.cn,D.dr,D.vv,D.JE,D.vw,D.aMf,D.na,D.eiU,D.JF,D.aMg,D.Uj,D.a91,D.eiP,D.aMc,D.eiQ,D.eiR,D.r6,D.Uk,D.eiS,D.aMd,D.aMe,D.eiT],x.i)
D.dqq=w([y.L,"Mbuzi Mbili","Ngyoka","Mmoko"],x.s)
D.dqu=w([A.rI,A.i8,A.c3],x.O)
D.eOO=new B.y(A.uW,"Design")
D.f2u=new B.y(D.aqT,"Word sizes")
D.eYM=new B.y(A.Ds,"Text")
D.bTQ=new B.a_(983182,"MaterialIcons",!1)
D.eYR=new B.y(D.bTQ,"Photo")
D.eJp=new B.y(A.l1,"Logo")
D.f3M=new B.y(A.Ib,"News")
D.dqA=w([D.eOO,D.f2u,D.eYM,D.eYR,D.eJp,D.f3M],x.f2)
D.dqB=w(["golddust","sparkle","sheen"],x.s)
D.ekg=new C.ez("upload_pdf",A5.I2,"Upload PDF")
D.ejq=new C.ez("sign_paper",A.I9,"Sign Paper")
D.bT3=new B.a_(63438,"MaterialIcons",!1)
D.ekc=new C.ez("hd_photo",D.bT3,"HD Photo")
D.eji=new C.ez("sharpen",E.a3d,"Sharpen")
D.ejs=new C.ez("print",A5.I2,"Download PDF")
D.ejU=new C.ez("rotate",D.aqE,"Rotate")
D.ejB=new C.ez("text_box",A.Ds,"Text Box")
D.ejD=new C.ez("picture",A.v1,"Picture")
D.ejz=new C.ez("title",A.x1,"Title")
D.ejv=new C.ez("subtitle",W.arr,"Subtitle")
D.ek2=new C.ez("bullets",I.a3y,"Bullet List")
D.ejw=new C.ez("numbered",A.PT,"Numbered")
D.ek5=new C.ez("quote",A7.Dd,"Quote")
D.ejI=new C.ez("citation",A.oG,"Citation")
D.ek8=new C.ez("date_stamp",Al.a3g,"Date Stamp")
D.ejW=new C.ez("page_number",A.x0,"Page #")
D.ek_=new C.ez("header_bar",A.zJ,"Header")
D.ejC=new C.ez("footer_bar",Ay.a45,"Footer")
D.ejr=new C.ez("divider",A.ti,"Divider")
D.ejn=new C.ez("highlight",A.a3A,"Highlight")
D.ek1=new C.ez("redact",A.to,"Redact")
D.ejP=new C.ez("callout",A.D6,"Callout")
D.eka=new C.ez("checkboxes",I.aq_,"Checklist")
D.ejM=new C.ez("table",A.a43,"Table")
D.ejG=new C.ez("memo",I.a3N,"Memo")
D.ejQ=new C.ez("letter",A.HY,"Letter")
D.bSI=new B.a_(63259,"MaterialIcons",!0)
D.ejh=new C.ez("agenda",D.bSI,"Agenda")
D.ejt=new C.ez("toc",AK.ar5,"Contents")
D.bT_=new B.a_(63406,"MaterialIcons",!1)
D.ejN=new C.ez("sig_line",D.bT_,"Sign Line")
D.eja=new C.ez("initial_line",A.jb,"Initials")
D.ejd=new C.ez("approved",A.l1,"APPROVED")
D.ejS=new C.ez("draft",A.pG,"DRAFT")
D.ejY=new C.ez("confidential",A.jL,"Confidential")
D.ek0=new C.ez("sticky",A.Qa,"Sticky Note")
D.ek9=new C.ez("progress",A.ar4,"Progress")
D.bUi=new B.a_(983507,"MaterialIcons",!1)
D.ejo=new C.ez("stars",D.bUi,"Star Rating")
D.ej8=new C.ez("equation",A.aqW,"Equation")
D.ejj=new C.ez("timeline",A.a44,"Timeline")
D.ejH=new C.ez("two_col",A.a46,"Two Columns")
D.ejl=new C.ez("compare",AD.a3k,"Compare")
D.ej6=new C.ez("duplicate_el",A.fN,"Duplicate")
D.eke=new C.ez("delete_el",A.ej,"Delete")
D.ek4=new C.ez("bring_fwd",H.aqP,"Bring Front")
D.ejb=new C.ez("send_back",H.aqO,"Send Back")
D.ejR=new C.ez("align_left",D.a3w,"Align L")
D.ejX=new C.ez("align_center",D.a3v,"Align C")
D.ekd=new C.ez("align_right",D.a3x,"Align R")
D.ejA=new C.ez("word_count",A_.a2T,"Word Count")
D.ejx=new C.ez("link_text",A.hR,"Link")
D.ejV=new C.ez("phone",A.iV,"Phone")
D.ejm=new C.ez("email",A.Da,"Email")
D.ekf=new C.ez("qr_placeholder",A.ju,"QR Placeholder")
D.ejg=new C.ez("rectangle",A8.tf,"Rectangle")
D.ejL=new C.ez("circle",A.pz,"Circle")
D.ejc=new C.ez("arrow",A.jt,"Arrow")
D.ek3=new C.ez("line",A.ti,"Line")
D.ejp=new C.ez("triangle",A.a3i,"Triangle")
D.bSP=new B.a_(63318,"MaterialIcons",!1)
D.eju=new C.ez("grayscale",D.bSP,"Grayscale")
D.ejE=new C.ez("brighten",I.aqj,"Brighten")
D.ejJ=new C.ez("flip_h",A.Dc,"Flip H")
D.bSW=new B.a_(63348,"MaterialIcons",!1)
D.ekb=new C.ez("flip_v",D.bSW,"Flip V")
D.ejZ=new C.ez("cover_page",A.qP,"Cover Page")
D.ej9=new C.ez("invoice",A.h3,"Invoice")
D.ejk=new C.ez("resume",A.mi,"Resume")
D.ejy=new C.ez("minutes",A.pB,"Minutes")
D.eje=new C.ez("lab_report",A.Q6,"Lab Report")
D.ejf=new C.ez("rubric",A.qT,"Rubric")
D.ejK=new C.ez("flashcard_tool",A4.I7,"Flashcard")
D.ek6=new C.ez("quiz_tool",A.I3,"Quiz Block")
D.ejO=new C.ez("worksheet_tool",P.HD,"Worksheet")
D.ejT=new C.ez("outline_share",A.I5,"Share Outline")
D.ek7=new C.ez("export_json",D.aq5,"Export JSON")
D.ej7=new C.ez("new_slide",D.a2S,"New Slide")
D.ejF=new C.ez("present",A.qV,"Present")
D.dr8=w([D.ekg,D.ejq,D.ekc,D.eji,D.ejs,D.ejU,D.ejB,D.ejD,D.ejz,D.ejv,D.ek2,D.ejw,D.ek5,D.ejI,D.ek8,D.ejW,D.ek_,D.ejC,D.ejr,D.ejn,D.ek1,D.ejP,D.eka,D.ejM,D.ejG,D.ejQ,D.ejh,D.ejt,D.ejN,D.eja,D.ejd,D.ejS,D.ejY,D.ek0,D.ek9,D.ejo,D.ej8,D.ejj,D.ejH,D.ejl,D.ej6,D.eke,D.ek4,D.ejb,D.ejR,D.ejX,D.ekd,D.ejA,D.ejx,D.ejV,D.ejm,D.ekf,D.ejg,D.ejL,D.ejc,D.ek3,D.ejp,D.eju,D.ejE,D.ejJ,D.ekb,D.ejZ,D.ej9,D.ejk,D.ejy,D.eje,D.ejf,D.ejK,D.ek6,D.ejO,D.ejT,D.ek7,D.ej7,D.ejF],B.at("O<ez>"))
D.drj=w([A.cA,A.an],x.O)
D.eIW=new B.y(4286331629,4292552567)
D.eIJ=new B.y(4280640491,4278630100)
D.eJ3=new B.y(4294538006,4292943176)
D.eI5=new B.y(4278556265,4280640491)
D.dkZ=w([D.eIW,D.eIJ,D.eJ3,D.eI5],x.n)
D.cHB=w([4294626325,4280472558,4294210230],x.t)
D.ej1=new C.of("colorful","Colorful",A.lT,D.dkZ,4294967295,3875536895,D.cHB,D.na)
D.eIx=new B.y(4279522093,4279657780)
D.eIN=new B.y(4281750292,4283268111)
D.eI8=new B.y(4278603323,4279203438)
D.eIO=new B.y(4282343954,4279599165)
D.cSN=w([D.eIx,D.eIN,D.eI8,D.eIO],x.n)
D.cHj=w([4288931381,4294829706,4287033260],x.t)
D.eiY=new C.of("nature","Nature",A.Ia,D.cSN,4294442727,3874290891,D.cHj,D.dr)
D.eIr=new B.y(4279369771,4283178389)
D.eIo=new B.y(4279179050,4286456526)
D.eIF=new B.y(4280163147,4290648157)
D.eHY=new B.y(4278322711,4285343961)
D.daw=w([D.eIr,D.eIo,D.eIF,D.eHY],x.n)
D.cHx=w([4294210230,4280472558,4289170426],x.t)
D.eiW=new C.of("vibe","Vibe",A.PW,D.daw,4294967295,3874869502,D.cHx,D.vv)
D.eJ_=new B.y(4290007817,4292552567)
D.eIU=new B.y(4286328082,4294286859)
D.eIZ=new B.y(4288485197,4294538006)
D.eIT=new B.y(4285343961,4293675161)
D.cdh=w([D.eJ_,D.eIU,D.eIZ,D.eIT],x.n)
D.cHC=w([4294829706,4294967295,4284999929],x.t)
D.eiX=new C.of("celebration","Celebration",A.kc,D.cdh,4294967295,4009752557,D.cHC,D.r6)
D.eIm=new B.y(4279179050,4280171146)
D.eIq=new B.y(4279310375,4280232247)
D.eIe=new B.y(4278916151,4280172719)
D.eIn=new B.y(4279179050,4281549141)
D.d2z=w([D.eIm,D.eIq,D.eIe,D.eIn],x.n)
D.cHe=w([4281908728,4294626325,4287931320],x.t)
D.ej0=new C.of("professional","Professional",A.zp,D.d2z,4294967295,3872118241,D.cHe,D.Uk)
D.eIi=new B.y(4278995566,4278413729)
D.eIa=new B.y(4278727492,4279137424)
D.eIG=new B.y(4280171146,4278751666)
D.eIj=new B.y(4278995566,4279590517)
D.cLs=w([D.eIi,D.eIa,D.eIG,D.eIj],x.n)
D.cHh=w([4286436348,4284410580,4294829706],x.t)
D.ej2=new C.of("ocean","Ocean",I.a48,D.cLs,4294967295,3873501950,D.cHh,D.vw)
D.eIV=new B.y(4286328082,4294538006)
D.eIX=new B.y(4286781507,4294677052)
D.eIR=new B.y(4283178389,4294197086)
D.eIY=new B.y(4288295954,4294688548)
D.cZK=w([D.eIV,D.eIX,D.eIR,D.eIY],x.n)
D.cHD=w([4294829706,4294967295,4294747557],x.t)
D.ej3=new C.of("sunset","Sunset",A.Qd,D.cZK,4294967295,4009749973,D.cHD,D.dr)
D.eJ7=new B.y(4294967295,4294047225)
D.eJ2=new B.y(4294507260,4294967295)
D.eJ6=new B.y(4294967295,4293060848)
D.eJ1=new B.y(4294507260,4294047225)
D.ddU=w([D.eJ7,D.eJ2,D.eJ6,D.eJ1],x.n)
D.cHc=w([4280640491,4279179050,4287931320],x.t)
D.ej_=new C.of("minimal","Minimal",A8.tf,D.ddU,4279179050,4282865001,D.cHc,D.dr)
D.eIh=new B.y(4278979081,4280886564)
D.eIB=new B.y(4280031511,4278979081)
D.eIp=new B.y(4279308561,4281148438)
D.eIg=new B.y(4278979081,4280031511)
D.dtm=w([D.eIh,D.eIB,D.eIp,D.eIg],x.n)
D.cHq=w([4292128567,4294829706,4289241758],x.t)
D.ej4=new C.of("elegant","Elegant",A.mn,D.dtm,4294898631,3873957348,D.cHq,D.aMc)
D.eID=new B.y(4280159034,4282058596)
D.eId=new B.y(4278916151,4280163147)
D.eIL=new B.y(4281208933,4278916151)
D.eIu=new B.y(4279502891,4283178389)
D.dBc=w([D.eID,D.eId,D.eIL,D.eIu],x.n)
D.cHz=w([4294296657,4292128567,4291081725],x.t)
D.eiZ=new C.of("royal","Royal Gold",A.iW,D.dBc,4294965222,3874084351,D.cHz,D.na)
D.eI2=new B.y(4278464302,4280163147)
D.eIc=new B.y(4278916151,4279455306)
D.eIE=new B.y(4280163147,4283040846)
D.eI_=new B.y(4278332450,4281413249)
D.dkz=w([D.eI2,D.eIc,D.eIE,D.eI_],x.n)
D.cHd=w([4281193663,4289170426,4294210230],x.t)
D.ej5=new C.of("aurora","Aurora Glow",A.e9,D.dkz,4293983738,3869766608,D.cHd,D.dr)
D.xe=w([D.ej1,D.eiY,D.eiW,D.eiX,D.ej0,D.ej2,D.ej3,D.ej_,D.ej4,D.eiZ,D.ej5],B.at("O<of>"))
D.bqw=new B.u(0.13333333333333333,0.9921568627450981,0.9019607843137255,0.5411764705882353,A.q)
D.drT=w([A.rE,D.bqw,A.rE],x.O)
D.dsa=w([4279179050,4281549141,4280640491,4278556265,4292617766,4286331629,4293548044,4278751666,4294967295,4294688548],x.t)
D.dsf=w([null,4294967295,4279310375,4294626325,4280472558,4294210230,4283096704,4293870660,4282090230,4294677052],x.Z)
D.eYE=new B.y("The NGMY app","Write the front-page story about the NGMY app and everything it offers.")
D.eOn=new B.y("KB PABLO QR, our CEO","Write a respectful story about KB PABLO QR, Founder, President and CEO of NGMY, and what he built.")
D.eTb=new B.y("Civic Registry","Write about the Civic Registry: why it was built, receipts, registrars and trust in the community.")
D.eFo=new B.y("NGMY Advisors","Write about the NGMY Advisors, the AI advisors who help members.")
D.eRN=new B.y("Growth Income","Write about Growth Income, the wallet and how members earn on work days.")
D.ePV=new B.y("Core Protocol studios","Write about the Core Protocol studios, the Body Explorer and the learning labs.")
D.eUt=new B.y("Surprise me","")
D.dsO=w([D.eYE,D.eOn,D.eTb,D.eFo,D.eRN,D.ePV,D.eUt],x.L)
D.bip=new B.u(1,0.9450980392156862,0.9294117647058824,0.8941176470588236,A.q)
D.bv6=new B.u(1,0.796078431372549,0.7647058823529411,0.7019607843137254,A.q)
D.dtC=w([A.c,D.bip,D.bv6],x.O)
D.dvZ=w([1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0],x.x)
D.aLM=new C.jw(0,"heritageGold")
D.boO=new B.u(1,0.9764705882352941,0.9450980392156862,0.8666666666666667,A.q)
D.boP=new B.u(1,0.3607843137254902,0.22745098039215686,0.11764705882352941,A.q)
D.hLN=w([D.boO,D.boP,A.aE],x.O)
D.dXh=new C.ij("kuhowa_heritage_gold","Kuhowa \u2014 Hazina ya Dhahabu","Mpaka mzito wa kikabila \xb7 dhahabu na hudhurungi.",D.aLM,4294570461,4284234270,4292128567,D.ki)
D.aLN=new C.jw(1,"heritageCrimson")
D.bgx=new B.u(1,0.9803921568627451,0.9411764705882353,0.9019607843137255,A.q)
D.bmV=new B.u(1,0.4196078431372549,0.16470588235294117,0.11764705882352941,A.q)
D.buS=new B.u(1,0.8784313725490196,0.6431372549019608,0.34509803921568627,A.q)
D.hLl=w([D.bgx,D.bmV,D.buS],x.O)
D.dXa=new C.ij("kuhowa_heritage_crimson","Kuhowa \u2014 Hazina Nyekundu","Mpaka mzito wa kikabila \xb7 nyekundu na dhahabu.",D.aLN,4294635750,4285213214,4292912216,D.ki)
D.dw3=w([D.a8F,D.a8D,D.dXh,D.dXa,D.a8u,D.a8B],x.h)
D.e2l=new C.t2(1,"circuit")
D.e2O=new C.mx("neural","Neural Link","Robotic",D.e2l,4278322711,4279179050,4280472558,4284704497,4292932350,"One link at a time, NGMY connects young people everywhere.")
D.e2k=new C.t2(0,"grid")
D.e2L=new C.mx("signal","Signal Grid","Robotic",D.e2k,4280163147,4278322711,4289222135,4293675161,4294308863,"A strong signal starts with one voice. Make yours heard.")
D.e2q=new C.t2(2,"hexes")
D.e2w=new C.mx("core","Core Protocol","Robotic",D.e2q,4278464302,4278322711,4281193663,4281908728,4291623921,"Our core is simple: help each other grow.")
D.aM9=new C.t2(11,"diagonal")
D.e2H=new C.mx("steel","Steel Tech","Robotic",D.aM9,4281549141,4279179050,4287931320,4281908728,4294047225,"Build with your hands, lead with your heart.")
D.aMa=new C.t2(3,"rings")
D.e2v=new C.mx("vault","Vault Gold","Robotic",D.aMa,4280031511,4278190080,4294626325,4294286859,4294898631,"What you build together is worth more than gold.")
D.e2o=new C.t2(13,"leaves")
D.e2y=new C.mx("forest","Forest Morning","Nature",D.e2o,4279522093,4278529558,4283096704,4288931381,4293983732,"Like a forest, a community grows strongest together.")
D.aMb=new C.t2(5,"waves")
D.e2F=new C.mx("ocean","Ocean Calm","Nature",D.aMb,4278413729,4278995566,4281908728,4284999929,4293982719,"Small waves become a movement. Keep going.")
D.e2r=new C.t2(6,"sunset")
D.e2K=new C.mx("sunset","Sunset Glow","Nature",D.e2r,4294538006,4290648157,4294829706,4294668677,4294967295,"Every sunset is a promise that tomorrow can be better.")
D.e2s=new C.t2(7,"mountains")
D.e2x=new C.mx("mountain","Mountain Air","Nature",D.e2s,4282595530,4280171146,4291285758,4286680312,4293849855,"Climb together. The view is better with friends.")
D.e2t=new C.t2(8,"stars")
D.e2E=new C.mx("night","Night Sky","Nature",D.e2t,4280163147,4278190080,4294829706,4291081725,4294308863,"Dream big. NGMY is built by people who looked up.")
D.a9_=new C.t2(4,"orbs")
D.e2C=new C.mx("aurora","Aurora","Nature",D.a9_,4278603323,4283178389,4281652121,4289170426,4294967295,"Light shows up when people choose to shine together.")
D.e2M=new C.mx("sand","Sand Dune","Nature",D.aMb,4294829706,4292441862,4290007817,4294966251,4282718723,"Patience builds a legacy, one grain at a time.")
D.e2u=new C.t2(9,"rays")
D.e2B=new C.mx("golden","Golden Hour","Warm",D.e2u,4294286859,4290321436,4294897802,4294967295,4294967295,"Your hour is now. Start where you are.")
D.e2z=new C.mx("royal","Royal Purple","Warm",D.aM9,4286456526,4290648157,4293962748,4294829706,4294967295,"Lead with respect, and people will follow with joy.")
D.e2A=new C.mx("rose","Rose Petal","Warm",D.a9_,4294668677,4292943176,4294960358,4294812847,4294967295,"Kindness is the strongest thing a community can grow.")
D.e2n=new C.t2(12,"blocks")
D.e2D=new C.mx("electric","Electric Blue","Bold",D.e2n,4280640491,4278751666,4290438909,4294967295,4294967295,"Energy is contagious. Bring yours to NGMY.")
D.e2N=new C.mx("mint","Fresh Mint","Bold",D.a9_,4281652121,4278630100,4294967295,4289197008,4278603323,"Fresh ideas grow when young people lead.")
D.e2p=new C.t2(14,"minimal")
D.e2J=new C.mx("white","Clean White","Clean",D.e2p,4294967295,4294047225,4280640491,4287931320,4279179050,"Simple words, strong purpose. That is NGMY.")
D.e2m=new C.t2(10,"frame")
D.e2G=new C.mx("midnight","Midnight Gold","Clean",D.e2m,4279179050,4278322711,4294626325,4294829706,4294966251,"Quiet work in the dark makes the morning shine.")
D.e2I=new C.mx("community","Community Green","Clean",D.aMa,4278556265,4280640491,4289197008,4290763774,4294967295,"The New Global Movement for Youth starts with you.")
D.a74=w([D.e2O,D.e2L,D.e2w,D.e2H,D.e2v,D.e2y,D.e2F,D.e2K,D.e2x,D.e2E,D.e2C,D.e2M,D.e2B,D.e2z,D.e2A,D.e2D,D.e2N,D.e2J,D.e2G,D.e2I],B.at("O<mx>"))
D.dws=w([D.Ce,A.uo,A.i8,A.c3],x.O)
D.dwL=w([D.ak3,D.jH],x.O)
D.dwW=w(["pdf","docx","txt","md"],x.s)
D.f80=new B.b3(-3,150,34)
D.f81=new B.b3(-3,214,62)
D.f82=new B.b3(-3,288,62)
D.dxP=w([D.f80,D.f81,D.f82],B.at("O<+(H,H,H)>"))
D.dyk=w(["rays","bokeh","aurora","spotlight"],x.s)
D.dz4=w(["Write","Design","Print & fold"],x.s)
D.kk=new C.vi(2,"triangle")
D.Ep=new C.vi(3,"arrow")
D.fP=new C.vi(4,"line")
D.kl=new C.vi(5,"parallelogram")
D.dz7=w([D.bf,D.eX,D.kk,D.Ep,D.fP,D.kl,D.lx],x.m)
D.eGX=new B.y(240,96)
D.eJM=new B.y(560,46)
D.dze=w([D.eGX,D.eJM],x.G)
D.hLY=new C.yf(0,"classic")
D.dZl=new C.oc("heritage_gold","Urithi wa Dhahabu","Mpaka wa kitamaduni \xb7 rangi ya dhahabu na kahawia.",D.aLM,4294570461,4282000405,4284234270)
D.dZx=new C.oc("heritage_crimson","Urithi wa Nyekundu","Mpaka wa kitamaduni \xb7 rangi ya nyekundu na shaba.",D.aLN,4294635750,4281999378,4285213214)
D.dZm=new C.oc("elegant_navy","Umoja Mzuri",y.s,D.a8R,4294967035,4279378237,4290283019)
D.dZz=new C.oc("elegant_gold","Umoja wa Dhahabu",y.Q,D.aLV,4294966515,4281016592,4289102906)
D.dZB=new C.oc("kente_sunset","Kente ya Jua",y.H,D.aLO,4294964964,4282000405,4279983648)
D.dZj=new C.oc("indigo_mudcloth","Nguo ya Indigo",y.n,D.aLP,4294439140,4279903102,4279903102)
D.dZo=new C.oc("adinkra_royal","Muhuri wa Adinkra",y.z,D.aLQ,4294965484,4285218591,4287322667)
D.dZt=new C.oc("nile_lotus","Lotus ya Nile","Nguzo za papyrus na ua la lotus juu.",D.aLR,4294244340,4279196764,4279196764)
D.dZv=new C.oc("shweshwe_ivory","Shweshwe","Nguo ya shweshwe \xb7 kadi ya pembe ndani.",D.aLS,4294505710,4279970378,4291058750)
D.hLZ=new C.yf(1,"ringsNdoa")
D.dZn=new C.oc("rings_ndoa","Hati ya Ndoa","Pete mbili \xb7 vichwa vya kidonge \xb7 hati rasmi ya ndoa.",D.tD,4294966259,4279378237,4291404327)
D.hM0=new C.yf(2,"coupleCards")
D.dZy=new C.oc("couple_taarifa","Taarifa za Wanandoa","Picha ya mwanamume na mwanamke \xb7 kadi mbili za taarifa.",D.tD,4294966259,4279378237,4291404327)
D.hM1=new C.yf(3,"kuhoweshaForm")
D.dZu=new C.oc("barua_kuhowesha","Barua ya Kuhowesha","Barua rasmi \xb7 orodha ya NIMETOWEA \xb7 mashahidi.",D.Ek,4294966519,4279378237,4291404327)
D.hM2=new C.yf(4,"mahariPande")
D.dZk=new C.oc("mahari_pande","Mahari ya Pande","Masharti ya mahari \xb7 pande mbili za sahihi.",D.tD,4294966259,4279904068,4291404327)
D.hM3=new C.yf(5,"familiaMti")
D.dZA=new C.oc("sheria_familia","Sheria za Familia","Mti wa familia \xb7 sheria za pamoja \xb7 kijani.",D.aLT,4294966776,4280241466,4291404327)
D.hM4=new C.yf(6,"ndoaSafi")
D.dZr=new C.oc("ndoa_safi","Ndoa ya Pamoja","Safu mbili \xb7 mume na mke \xb7 masharti ya ndoa.",D.Ek,4294966519,4279378237,4291404327)
D.hM5=new C.yf(7,"peteWide")
D.dZq=new C.oc("pete_pana","Pete Pana","Pete kubwa za dhahabu \xb7 nafasi wazi \xb7 hati ya heshima.",D.tD,4294966259,4282001936,4291404327)
D.hM6=new C.yf(8,"muhuriCrest")
D.dZp=new C.oc("muhuri_familia","Muhuri wa Familia","Muhuri mkubwa juu \xb7 fomu rasmi ya familia.",D.tD,4294966259,4279378237,4291404327)
D.hM7=new C.yf(9,"fomuWazi")
D.dZs=new C.oc("fomu_wazi","Fomu ya Ndoa","Fomu yenye mistari \xb7 namba \xb7 sehemu wazi za kujaza.",D.Ek,4294966519,4279904068,4291404327)
D.hM_=new C.yf(10,"upendoOrnate")
D.dZw=new C.oc("upendo_dhahabu","Upendo wa Dhahabu","Mapambo ya dhahabu \xb7 picha za wanandoa \xb7 rangi ya waridi.",D.aLU,4294965493,4286200650,4291404327)
D.Tb=w([D.dZl,D.dZx,D.dZm,D.dZz,D.dZB,D.dZj,D.dZo,D.dZt,D.dZv,D.dZn,D.dZy,D.dZu,D.dZk,D.dZA,D.dZr,D.dZq,D.dZp,D.dZs,D.dZw],B.at("O<oc>"))
D.En=new C.atj(0,"landscape169")
D.oZ=new C.atj(1,"portrait916")
D.dA3=w([D.En,D.oZ],B.at("O<atj>"))
D.aEr=w([A.i8,A.bL,A.cO,A.ix,A.c],x.O)
D.vo=w([A.c3,A.ia],x.O)
D.eFV=new B.y(1000,"M")
D.eLk=new B.y(900,"CM")
D.eJD=new B.y(500,"D")
D.eHT=new B.y(400,"CD")
D.eFW=new B.y(100,"C")
D.eLl=new B.y(90,"XC")
D.eJE=new B.y(50,"L")
D.eHU=new B.y(40,"XL")
D.eG2=new B.y(10,"X")
D.eLx=new B.y(9,"IX")
D.eJY=new B.y(5,"V")
D.eJo=new B.y(4,"IV")
D.eGA=new B.y(1,"I")
D.dAR=w([D.eFV,D.eLk,D.eJD,D.eHT,D.eFW,D.eLl,D.eJE,D.eHU,D.eG2,D.eLx,D.eJY,D.eJo,D.eGA],x.ek)
D.f9k=new B.ca(["open",A.jb,"Open & write","Keep writing this book"])
D.f9Q=new B.ca(["print",A.v7,"Print as a book","Fold and staple it"])
D.dB1=w([D.f9k,D.f9Q],B.at("O<+(n,a_,n,n)>"))
D.dBM=w([D.a91,D.na,D.JF,D.Uk,D.dr,D.Uj],x.i)
D.eZp=new B.y(-1,"Small")
D.eFF=new B.y(0,"Normal")
D.eGx=new B.y(1,"Big")
D.eHd=new B.y(2,"Huge")
D.dCm=w([D.eZp,D.eFF,D.eGx,D.eHd],x.ek)
D.dCN=w([49,65,89,38,83,89],x.t)
D.dCU=w([A.uo,A.i8,A.c3],x.O)
D.dDn=w([D.dr,D.na,D.vv,D.a91,D.JF,D.Uk],x.i)
D.aJK=new B.d_([0,D.NS,8,D.alB,12,D.alC],B.at("d_<F,a57>"))
D.ep5={gold:0,platinum:1,glow:2,rainbow:3,double:4,neon:5,framed:6,rosegold:7,jewels:8,aurora:9}
D.d2K=w([A.bL,O.GB],x.O)
D.dpu=w([A.b_,A.bo],x.O)
D.djC=w([A.c4,A.aG,A.bt],x.O)
D.dB2=w([A.cA,A.by],x.O)
D.dbw=w([A.b9,A.fe],x.O)
D.dmz=w([A.b7,A.fA],x.O)
D.bmv=new B.u(1,0.9529411764705882,0.7764705882352941,0.7098039215686275,A.q)
D.dlQ=w([D.bmv,A.pp],x.O)
D.dfJ=w([A.hv,A.yr],x.O)
D.dbi=w([A.bv,A.ci],x.O)
D.dG2=new B.bs(D.ep5,[D.d2K,R.auy,D.dpu,D.djC,D.dB2,D.dbw,D.dmz,D.dlQ,D.dfJ,D.dbi],B.at("bs<n,ai<u>>"))
D.eoe={"[Jina la Baba wa Mume]":0,"[Jina la Jamii ya Mume]":1,"[Jina la Nyumba ya Mume]":2,"[Jina la Kijana]":3,"[Jina la Binti]":4,"[Jina la Baba wa Binti]":5,"[Jina la Jamii ya Binti]":6,"[Jina la Nyumba ya Binti]":7}
D.a7I=new B.bs(D.eoe,["[Jina la Baba wa Mume]","[Jina la Jamii ya Mume]","[Jina la Nyumba ya Mume]","[Jina la Kijana]","[Jina la Binti]","[Jina la Baba wa Binti]","[Jina la Jamii ya Binti]","[Jina la Nyumba ya Binti]"],B.at("bs<n,n>"))
D.a7O=new B.bs(A.i2,[],B.at("bs<F,+icon3d,picture(n?,n?)>"))
D.dM4=new F.NY(30,null)
D.dRj=new F.mW("Chapter 1","","","")
D.dzQ=w([D.dRj],x.B)
D.dRn=new F.rT("My Book","","",D.dzQ,E.aLc)
D.dRl=new F.v8("starry",null,null,null,null,"","","")
D.dRo=new F.rT("Dream Big","","",E.a6G,D.dRl)
D.dRm=new F.v8("story",null,null,null,null,"","","")
D.dRp=new F.rT("Little Lion","","",E.a6G,D.dRm)
D.dRk=new F.v8("vintage",null,null,null,null,"","","")
D.dRq=new F.rT("Our Story","","",E.a6G,D.dRk)
D.dUs=new C.Fn("","NGMY","","")
D.e0Z=new C.Aa("The NGMY Times","NGMY NEWS","","","By the NGMY Newsroom","",A.Z,"","","")
D.eiV=new C.b43(null,null,null,null)
D.ekD=new C.ato(null)
D.ekO=new C.atS(0,"smaller")
D.ekP=new C.atS(1,"bigger")
D.aMq=new C.atS(2,"fit")
D.esH=new B.r(3,6)
D.et0=new B.r(4,8)
D.exc=new B.D(E.amt,W.agv,null)
D.exg=new B.D(A.a0Q,A.m5,null)
D.bVB=new B.ae(A.kd,16,A.bV,null,null,null)
D.exk=new B.D(A.iS,D.bVB,null)
D.bfW=new B.fn(2.2,null,null,null,null,A.c,null,null,null,null)
D.exw=new B.D(A.OM,D.bfW,null)
D.c5o=new B.ae(A.cB,16,A.aF,null,null,null)
D.exA=new B.D(A.eC,D.c5o,null)
D.fT0=new B.B("Play",null,A.o6,null,null,null,null,null,null,null,null,null)
D.dpL=w([X.asY,A.vM,D.fT0],x.p)
D.feF=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dpL,null)
D.exD=new B.D(A.nH,D.feF,null)
D.bg4=new B.fn(2.4,null,null,null,null,null,null,null,null,null)
D.fl5=new B.a5(20,20,D.bg4,null)
D.exK=new B.D(A.iS,D.fl5,null)
D.h1t=new B.B("Seconds per slide",null,A.h6,null,null,null,null,null,null,null,null,null)
D.exT=new B.D(A.bl,D.h1t,null)
D.ezd=new C.aa3(2,"print")
D.ezg=new B.j7(1,0.7764705882352941,0.1568627450980392,0.1568627450980392)
D.eAT=new B.hl("/Annot")
D.eAV=new B.hl("/URI")
D.fMW=new B.B("Share text outline",null,null,null,null,null,null,null,null,null,null,null)
D.eDp=new B.jL("share",48,D.fMW,null,B.at("jL<n>"))
D.c5i=new B.ae(A.e9,14,A.ey,null,null,null)
D.eDy=new B.cK(null,-2,-2,null,null,null,D.c5i,null)
D.d55=w([A.a_1,A.L],x.O)
D.cc1=new B.a7(A.a5,A.a9,A.x,D.d55,null,null)
D.b8l=new B.o(null,null,null,null,null,D.cc1,A.n)
D.bAc=new B.bM(D.b8l,A.bk,null,null)
D.eDL=new B.cK(0,0,null,0,8,null,D.bAc,null)
D.duS=w([A.hL,A.mV,A.c9],x.O)
D.eEq=new B.bS(A.z,0.5,A.x,null,0,D.duS,null,null)
D.eFB=new B.y(0,54)
D.eFH=new B.y(0,-54)
D.eFZ=new B.y(106,52)
D.eH5=new B.y(0.22,A.bo)
D.eJG=new B.y(52,100)
D.eJH=new B.y(52,1184)
D.eJJ=new B.y(54,0)
D.eK6=new B.y(614,52)
D.eKb=new B.y(650,72)
D.eKf=new B.y(668,100)
D.eKg=new B.y(668,1184)
D.eKA=new B.y(70,72)
D.eLR=new B.y("ai","Your newspaper is ready. Tell me anything you want changed, or ask me a question about NGMY.")
D.eO1=new B.y(0.5,A.hI)
D.eXI=new B.y(0.78,A.aV)
D.eZL=new B.y(-54,0)
D.f5N=new B.b3("mume","UPANDE WA MUME",0.512)
D.f8k=new B.b3("mke","UPANDE WA MKE",0.09)
D.f99=new B.ca([A.bh,0.22,0.7,2.6])
D.f9g=new B.ca([A.b9,0.36,1.2,1.3])
D.f9m=new B.ca([A.dR,0.28,0.2,0.4])
D.f9s=new B.ca([A.cG,0.05,0.3,0.35])
D.f9z=new B.ca([A.bv,0.28,0.9,0])
D.f9J=new B.ca([A.aD,-0.25,-0.15,0.45])
D.faM=new B.ca([A.c4,0.42,1,4.1])
D.fen=new B.ab2(9)
D.bWI=new B.ae(A.Ib,28,A.bt,null,null,null)
D.h2_=new B.B("NGMY News",null,A.dl,null,null,null,null,null,null,null,null,null)
D.bKB=new B.by(1,A.ba,D.h2_,null)
D.dyn=w([D.bWI,A.as,D.bKB],x.p)
D.fez=new B.c7(A.aM,A.e,A.h,A.l,null,A.p,null,0,D.dyn,null)
D.bWT=new B.ae(A.oG,16,A.c,null,null,null)
D.h3B=new B.B("Book",null,A.o4,null,null,null,null,null,null,null,null,null)
D.dCT=w([D.bWT,A.e7,D.h3B],x.p)
D.feI=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dCT,null)
D.c2M=new B.ae(A.jL,10,A.c,null,null,null)
D.fQZ=new B.B("Pro",null,A.o2,null,null,null,null,null,null,null,null,null)
D.dpQ=w([D.c2M,A.rc,D.fQZ],x.p)
D.feM=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.dpQ,null)
D.h1r=new B.B("Make a newspaper",null,A.L8,null,null,null,null,null,null,null,null,null)
D.cdf=w([E.a4u,A.ae,D.h1r],x.p)
D.feN=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.cdf,null)
D.c1a=new B.ae(A.kc,18,A.bL,null,null,null)
D.fTe=new B.B("Ending celebration",null,A.hu,null,null,null,null,null,null,null,null,null)
D.dxo=w([D.c1a,A.bn,D.fTe],x.p)
D.feQ=new B.c7(A.aM,A.e,A.h,A.l,null,A.p,null,0,D.dxo,null)
D.c2y=new B.ae(A.jb,18,A.k1,null,null,null)
D.fwb=new B.G(!0,A.k1,null,null,null,null,15,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3U=new B.B("Write",null,D.fwb,null,null,null,null,null,null,null,null,null)
D.ddI=w([D.c2y,A.ae,D.h3U],x.p)
D.feX=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.ddI,null)
D.fQX=new B.B("Download picture",null,A.o3,null,null,null,null,null,null,null,null,null)
D.bNp=new B.dx(A.dM,A.z,A.f,D.fQX,null)
D.bNB=new B.di(1,A.cm,D.bNp,null)
D.dqg=w([N.asP,A.ae,D.bNB],x.p)
D.feY=new B.c7(A.aM,A.b8,A.h,A.l,null,A.p,null,0,D.dqg,null)
D.bYG=new B.ae(A.Ib,22,A.bt,null,null,null)
D.h_Z=new B.B("NGMY NEWS",null,M.abN,null,null,null,null,null,null,null,null,null)
D.d4t=w([D.bYG,A.ae,D.h_Z],x.p)
D.ff7=new B.c7(A.aM,A.e,A.N,A.l,null,A.p,null,0,D.d4t,null)
D.ffj=new B.pJ(!1,!1,null,W.Yu,null,A.c5,null,null,null)
D.aaU=new B.iU([D.cn,D.dr,D.vv,D.JE,D.vw,D.aMf],B.at("iU<hJ>"))
D.eqV={title:0,quote:1,closing:2,bio:3}
D.fgP=new B.db(D.eqV,4,x.M)
D.eoA={caps:0,stamp:1,retro:2,glitch:3,whisper:4}
D.fgS=new B.db(D.eoA,5,x.M)
D.eq9={midnight:0,rose_gold:1,slate_pro:2,neon_night:3,charcoal:4,crimson:5,gold:6,plum:7}
D.aaW=new B.db(D.eq9,8,x.M)
D.epi={Design:0,Transitions:1,Insert:2}
D.fh_=new B.db(D.epi,3,x.M)
D.hMg=new B.iU([D.a92],B.at("iU<wA>"))
D.epr={float3d:0,drift:1,pulse:2}
D.fh3=new B.db(D.epr,3,x.M)
D.aU5=new B.iU([D.JB,D.JC,D.JD],B.at("iU<mZ>"))
D.eoy={shimmer:0,golddust:1,spotlight:2,goldframe:3,twinkle:4,orbit:5,rays:6,bokeh:7,aurora:8,sparkle:9,sheen:10,velvet:11,crest:12,filigree:13}
D.aU8=new B.db(D.eoy,14,x.M)
D.hMh=new B.db(A.i2,0,B.at("db<wA>"))
D.epo={"kbpabloqr@gmail.com":0,"ngumoyaking@gmail.com":1,"appbusiness321@gmail.com":2,"appbusiness84@gmail.com":3}
D.Vl=new B.db(D.epo,4,x.M)
D.eoq={print:0,rotate:1,text_box:2,picture:3,title:4,subtitle:5,bullets:6,numbered:7,quote:8,citation:9,date_stamp:10,page_number:11,header_bar:12,footer_bar:13,divider:14,table:15,sticky:16,duplicate_el:17,delete_el:18,bring_fwd:19,send_back:20,align_left:21,align_center:22,align_right:23,word_count:24,link_text:25,phone:26,email:27,new_slide:28,present:29}
D.aUb=new B.db(D.eoq,30,x.M)
D.epx={circle:0,triangle:1,hexagon:2,diamond:3}
D.fhw=new B.db(D.epx,4,x.M)
D.fk_=new B.av(390,844)
D.fkQ=new B.a5(20,20,A.Mx,null)
D.aV1=new B.a5(null,2.5,null,null)
D.c2C=new B.ae(A.iW,19,A.c,null,null,null)
D.fla=new B.a5(38,38,D.c2C,null)
D.c0I=new B.ae(A.zL,22,A.c,null,null,null)
D.fld=new B.a5(40,40,D.c0I,null)
D.flN=new B.hK(2,10,10,1.15,null)
D.aVa=new B.hK(2,16,14,0.62,null)
D.bIr=new B.Q(32,30,32,40)
D.bhD=new B.u(0.3333333333333333,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.bWF=new B.ae(A.qP,56,D.bhD,null,null,null)
D.akE=new B.u(0.6,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fym=new B.G(!0,D.akE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXR=new B.B("Your books will live here.",null,D.fym,null,A.K,null,null,null,null,null,null,null)
D.dgK=w([D.bWF,A.T,D.fXR],x.p)
D.bz8=new B.fp(A.ah,A.e,A.h,A.l,null,A.p,null,0,D.dgK,null)
D.exR=new B.D(D.bIr,D.bz8,null)
D.fm8=new B.m7(D.exR,null)
D.fXO=new B.B("Chagua jimbo la Civic Registry kwanza.",null,null,null,null,null,null,null,null,null,null,null)
D.fmq=new B.b0(D.fXO,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fVR=new B.B("Done \u2014 only the text size was changed. Undo brings back the old size.",null,null,null,null,null,null,null,null,null,null,null)
D.fmr=new B.b0(D.fVR,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h02=new B.B("This slide has no text boxes.",null,null,null,null,null,null,null,null,null,null,null)
D.fmA=new B.b0(D.h02,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0C=new B.B("Tap fields to edit names. Tap signature boxes to sign or re-sign. Print from the View tab.",null,null,null,null,null,null,null,null,null,null,null)
D.fmQ=new B.b0(D.h0C,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fUt=new B.B("Sign in to Civic Registry to view Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.fn2=new B.b0(D.fUt,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h7W=new B.B("Could not read that presentation QR or document code.",null,null,null,null,null,null,null,null,null,null,null)
D.fnl=new B.b0(D.h7W,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h4W=new B.B("Use the 5-character code on the document QR, like GA847.",null,null,null,null,null,null,null,null,null,null,null)
D.fnw=new B.b0(D.h4W,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h0L=new B.B("Sign in to Civic Registry to view this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fog=new B.b0(D.h0L,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fP6=new B.B("Buttons hidden. Double-tap the top-right corner to show them again.",null,null,null,null,null,null,null,null,null,null,null)
D.foy=new B.b0(D.fP6,null,null,null,null,null,null,null,A.iG,null,null,null,null,A.nC,!1,null,null,null,A.t,null)
D.fR6=new B.B("Could not crop that picture.",null,null,null,null,null,null,null,null,null,null,null)
D.foQ=new B.b0(D.fR6,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fXt=new B.B("This oath is locked for editing (5 hours after the president signed). You can still view and play the video.",null,null,null,null,null,null,null,null,null,null,null)
D.foS=new B.b0(D.fXt,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fX9=new B.B("Only the authorized registrar for this state can add the oath video.",null,null,null,null,null,null,null,null,null,null,null)
D.foT=new B.b0(D.fX9,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h2S=new B.B("Document code copied.",null,null,null,null,null,null,null,null,null,null,null)
D.foU=new B.b0(D.h2S,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h5N=new B.B("Only the admin can delete Hati ya Kiapo cha Uongozi.",null,null,null,null,null,null,null,null,null,null,null)
D.foZ=new B.b0(D.h5N,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fL5=new B.B("Tap the logo or a picture on this slide first.",null,null,null,null,null,null,null,null,null,null,null)
D.fp3=new B.b0(D.fL5,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fSh=new B.B("Sign in to unlock Slides Pro features.",null,null,null,null,null,null,null,null,null,null,null)
D.fpq=new B.b0(D.fSh,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h6B=new B.B("Done \u2014 the look is changed. Undo brings back the old one.",null,null,null,null,null,null,null,null,null,null,null)
D.fps=new B.b0(D.h6B,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h67=new B.B("The NGMY logo stays on every quote. You can move it or change its frame.",null,null,null,null,null,null,null,null,null,null,null)
D.fpw=new B.b0(D.h67,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fK_=new B.B("Video upload failed. Check your connection and try again.",null,null,null,null,null,null,null,null,null,null,null)
D.fpy=new B.b0(D.fK_,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h1V=new B.B("This transferred document is view only. You can print or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fpH=new B.b0(D.h1V,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h5G=new B.B("Done \u2014 the words are changed and the design is kept. Undo brings back the old version.",null,null,null,null,null,null,null,null,null,null,null)
D.fpX=new B.b0(D.h5G,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h5w=new B.B("Book saved on this device.",null,null,null,null,null,null,null,null,null,null,null)
D.fpZ=new B.b0(D.h5w,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fJR=new B.B("Only the authorized registrar for this state can update this signature.",null,null,null,null,null,null,null,null,null,null,null)
D.fq4=new B.b0(D.fJR,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fO4=new B.B("You don't have a Bio link yet \u2014 create one in Bio first.",null,null,null,null,null,null,null,null,null,null,null)
D.fqw=new B.b0(D.fO4,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.h4K=new B.B("Nothing to transfer yet \u2014 fill names or details on this document first.",null,null,null,null,null,null,null,null,null,null,null)
D.fqI=new B.b0(D.h4K,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.fNR=new B.B("Only the authorized registrar for this state can sign this document.",null,null,null,null,null,null,null,null,null,null,null)
D.fqY=new B.b0(D.fNR,null,null,null,null,null,null,null,null,null,null,null,null,A.Y,!1,null,null,null,A.t,null)
D.bqa=new B.u(1,0.9764705882352941,0.8352941176470589,0.8274509803921568,A.q)
D.d31=w([A.ix,A.pp,D.bqa,D.ah1,A.ix],x.O)
D.frl=new B.h4(A.z,0,6.283185307179586,A.x,D.d31,null,null)
D.dcP=w([A.bL,A.c3,A.i8,D.Ce,A.bL],x.O)
D.aVK=new B.h4(A.z,0,6.283185307179586,A.x,D.dcP,null,null)
D.ds8=w([A.c4,A.bh,A.b9,A.bc,A.bt,A.c4],x.O)
D.frq=new B.h4(A.z,0,6.283185307179586,A.x,D.ds8,null,null)
D.d5m=w([A.qu,A.pq,A.on,A.ix,A.qu],x.O)
D.frr=new B.h4(A.z,0,6.283185307179586,A.x,D.d5m,null,null)
D.dAE=w([A.bv,A.b9,A.bh,A.c4,A.bv],x.O)
D.frt=new B.h4(A.z,0,6.283185307179586,A.x,D.dAE,null,null)
D.bln=new B.u(1,0,1,0,A.q)
D.bqv=new B.u(1,0,1,1,A.q)
D.bnh=new B.u(1,0,0,1,A.q)
D.bj3=new B.u(1,1,0,1,A.q)
D.dwk=w([A.MO,A.ajg,D.bln,D.bqv,D.bnh,D.bj3,A.MO],x.O)
D.fru=new B.h4(A.z,0,6.283185307179586,A.x,D.dwk,null,null)
D.fuh=new B.G(!0,A.bA,null,null,null,null,14,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fui=new B.G(!0,A.oh,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aWl=new B.G(!0,A.f_,null,null,null,null,12.5,A.O,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fuP=new B.G(!0,E.nx,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxz=new B.G(!0,A.c,null,null,null,null,22,A.u,null,0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fxJ=new B.G(!0,A.bV,null,null,null,null,12.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fy4=new B.G(!0,A.ey,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzB=new B.G(!0,A.bP,null,null,null,null,13.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fzM=new B.G(!0,A.k0,null,null,null,null,11,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fA_=new B.tb(!0,A.K_,null,null,null,null,A.dE,8,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAs=new B.G(!0,A.c,null,null,null,null,8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBb=new B.G(!0,A.jI,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBz=new B.G(!0,A.aF,null,null,null,null,12.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.ezj=new B.j7(1,1,0.7568627450980392,0.027450980392156862)
D.fBD=new B.tb(!0,D.ezj,null,null,null,null,A.dE,7,null,null,null,null,null,null,null,null,null,null,null,null)
D.ajp=new B.u(1,0.8392156862745098,0.7254901960784313,0.6039215686274509,A.q)
D.aX8=new B.G(!0,D.ajp,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBL=new B.G(!0,D.akE,null,null,null,null,11.5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fBM=new B.G(!0,A.c,null,null,null,null,20,A.u,null,null,null,null,1.15,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXa=new B.G(!0,A.c,null,null,null,null,null,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCp=new B.tb(!0,A.pR,null,null,null,null,A.dE,9,null,null,null,null,null,null,null,null,null,null,null,null)
D.fCH=new B.G(!0,null,null,null,null,null,20,A.u,null,0.8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDf=new B.G(!0,A.c,null,null,null,null,16,A.H,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDh=new B.G(!0,D.ajp,null,null,null,null,14,null,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.L5=new B.G(!0,A.aF,null,null,null,null,12.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fDP=new B.G(!0,A.c3,null,null,null,null,11.5,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fE_=new B.G(!0,A.bP,null,null,null,null,14,A.a8,null,null,null,null,1.45,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEj=new B.G(!0,A.c,null,null,null,null,13,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.a6d,null,null,null)
D.fEm=new B.G(!0,A.bX,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEo=new B.G(!0,A.c,null,null,null,null,30,A.u,null,5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEE=new B.G(!0,A.c,null,null,null,null,6.5,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fEQ=new B.G(!0,A.dy,null,null,null,null,13,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFs=new B.G(!0,A.aR,null,null,null,null,null,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFD=new B.G(!0,A.c,null,null,null,null,13.5,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fFU=new B.G(!0,A.ab,null,null,null,null,15,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXR=new B.G(!0,A.bV,null,null,null,null,11.5,A.a8,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.bwy=new B.u(0.7019607843137254,0.9803921568627451,0.9529411764705882,0.9098039215686274,A.q)
D.fHN=new B.G(!0,D.bwy,null,null,null,null,12,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aXX=new B.G(!0,E.nx,null,null,null,null,16,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIi=new B.G(!0,A.bP,null,null,null,null,11,A.a8,null,null,null,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fIl=new B.G(!0,L.lJ,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fAH=new B.G(!0,A.w,null,null,null,null,8,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fJC=new B.B("NEW",null,D.fAH,null,null,null,null,null,null,null,null,null)
D.fJU=new B.B("Hati ya Kuhowesha",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fKn=new B.B("Session ended",null,null,null,null,null,null,null,null,null,null,null)
D.fKM=new B.B("Scrollable PDF on this slide",null,A.dk,null,null,null,null,null,null,null,null,null)
D.fLx=new B.B("Big quote mark",null,A.jC,null,null,null,null,null,null,null,null,null)
D.fLz=new B.B("Move down",null,null,null,null,null,null,null,null,null,null,null)
D.fLL=new B.B("Duplicate",null,null,null,null,null,null,null,null,null,null,null)
D.fMe=new B.B("Edit window ended",null,null,null,null,null,null,null,null,null,null,null)
D.fMg=new B.B("How many slides?",null,A.h6,null,null,null,null,null,null,null,null,null)
D.fMP=new B.B("Transfer",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fwe=new B.G(!0,A.c,null,null,null,null,12,A.u,null,0.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fNe=new B.B("Luxury FX",null,D.fwe,null,null,null,null,null,null,null,null,null)
D.fNA=new B.B("Font",null,A.tZ,null,null,null,null,null,null,null,null,null)
D.fNL=new B.B("Anza hati mpya?",null,null,null,null,null,null,null,null,null,null,null)
D.fNS=new B.B("Ghairi",null,null,null,null,null,null,null,null,null,null,null)
D.fHh=new B.G(!0,A.bP,null,null,null,null,12,A.O,null,1.2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fO1=new B.B("Example  GA847",null,D.fHh,null,null,null,null,null,null,null,null,null)
D.fOr=new B.B("Design shapes",null,A.jC,null,null,null,null,null,null,null,null,null)
D.fOC=new B.B("Your 4-hour window to edit this admin-shared document has ended. You can still view, print, or download it.",null,null,null,null,null,null,null,null,null,null,null)
D.fOH=new B.B("Non-stop (loop)",null,A.h6,null,null,null,null,null,null,null,null,null)
D.fOV=new B.B("Hati ya Kuhoweya",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fPe=new B.B("Photo studio",null,A.fE,null,null,null,null,null,null,null,null,null)
D.fPJ=new B.B("Add your picture",null,A.jR,null,null,null,null,null,null,null,null,null)
D.fA0=new B.G(!0,A.c,null,null,null,null,20,A.u,null,-0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fPK=new B.B("Enter document code",null,D.fA0,null,A.K,null,null,null,null,null,null,null)
D.fPL=new B.B("Kiswahili",null,null,null,null,null,null,null,null,null,null,null)
D.fPQ=new B.B("English",null,null,null,null,null,null,null,null,null,null,null)
D.fxm=new B.G(!0,E.nx,null,null,null,null,19,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fQa=new B.B("Delete this book?",null,D.fxm,null,A.K,null,null,null,null,null,null,null)
D.fCe=new B.G(!0,E.nx,null,null,null,null,18,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fR8=new B.B("Your library",null,D.fCe,null,null,null,null,null,null,null,null,null)
D.fRd=new B.B("Delete",null,A.aX1,null,null,null,null,null,null,null,null,null)
D.fRg=new B.B("Add a picture and the AI writes a whole newspaper page about NGMY around it: the headline, the story and the caption. It knows the app, the Civic Registry, the Advisors and KB PABLO QR, the CEO. Pick old or modern designs, then tell the AI what to change.",null,AB.F7,null,null,null,null,null,null,null,null,null)
D.fRr=new B.B("Element flies in",null,A.aXe,null,null,null,null,null,null,null,null,null)
D.Wu=new B.B("Hati mpya (chagua muundo)",null,null,null,null,null,null,null,null,null,null,null)
D.fRR=new B.B("Fungua / hariri hati",null,null,null,null,null,null,null,null,null,null,null)
D.fSe=new B.B("Cancel",null,E.aXp,null,null,null,null,null,null,null,null,null)
D.fSg=new B.B("The lines and circles that come with the design",null,A.ht,null,null,null,null,null,null,null,null,null)
D.fG2=new B.G(!0,A.h9,null,null,null,null,11,A.u,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fSL=new B.B("DOCUMENT CODE",null,D.fG2,null,null,null,null,null,null,null,null,null)
D.fTz=new B.B("Quotes",null,G.acr,null,null,null,null,null,null,null,null,null)
D.fzm=new B.G(!0,L.lJ,null,null,null,null,null,A.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fTJ=new B.B("Add a picture",null,D.fzm,null,null,null,null,null,null,null,null,null)
D.fTR=new B.B("Point at a NGMY Slides transfer QR, or tap search to enter the document code",null,A.W6,null,A.K,null,null,null,null,null,null,null)
D.fTV=new B.B("Look & feel",null,A.h6,null,null,null,null,null,null,null,null,null)
D.fU_=new B.B("Rings",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fU5=new B.B("W",null,A.tZ,null,null,null,null,null,null,null,null,null)
D.fUf=new B.B("Move up",null,null,null,null,null,null,null,null,null,null,null)
D.fUz=new B.B("It goes behind your words. Then the photo studio opens: looks, light, colour, effects and crop.",null,A.Wg,null,A.K,null,null,null,null,null,null,null)
D.fUB=new B.B("Write your book",null,A.cF,null,null,null,null,null,null,null,null,null)
D.fVl=new B.B("Add page",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fVD=new B.B("Malipo ya Awamu ya Mahari",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fzQ=new B.G(!0,A.c,null,null,null,null,24,A.u,null,0.3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fVS=new B.B("Create with AI",null,D.fzQ,null,A.K,null,null,null,null,null,null,null)
D.fWn=new B.B("Apply look",null,A.hu,null,null,null,null,null,null,null,null,null)
D.fAx=new B.G(!0,A.ew,null,null,null,null,12,A.H,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXb=new B.B("Type your presentation below",null,D.fAx,null,A.K,null,null,null,null,null,null,null)
D.fXe=new B.B("Tap the code to copy it. Share the code or the QR: the other phone types the code or scans the QR.",null,M.aY_,null,A.K,null,null,null,null,null,null,null)
D.fXg=new B.B("Keep it",null,A.cd,null,null,null,null,null,null,null,null,null)
D.fv7=new B.G(!0,A.cs,null,null,null,null,null,A.u,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fXn=new B.B("Done",null,D.fv7,null,null,null,null,null,null,null,null,null)
D.fXI=new B.B("Delete",null,A.o5,null,null,null,null,null,null,null,null,null)
D.fXT=new B.B("Hati ya Kiapo cha Uongozi",null,A.fS,null,null,null,null,null,null,null,null,null)
D.fyF=new B.G(!0,A.aR,null,null,null,null,13,null,null,null,null,null,1.35,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.fYO=new B.B("Write your idea in any language \u2014 the AI makes the slides.",null,D.fyF,null,A.K,null,null,null,null,null,null,null)
D.fZa=new B.B("Anza upya (hati mpya)",null,null,null,null,null,null,null,null,null,null,null)
D.fZg=new B.B("Layout",null,A.Wk,null,null,null,null,null,null,null,null,null)
D.fZW=new B.B("Print",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h_4=new B.B("X",null,A.tZ,null,null,null,null,null,null,null,null,null)
D.h_H=new B.B("Your logo goes on every slide and your pictures replace stock photos. The ring button also has the ending celebrations.",null,Ad.B4,null,null,null,null,null,null,null,null,null)
D.h0g=new B.B("Use the whole picture",null,null,null,null,null,null,null,null,null,null,null)
D.h0u=new B.B("Hati ya Kuhowa",null,A.fS,null,null,null,null,null,null,null,null,null)
D.h0w=new B.B("Choose a class template",null,A.fS,null,null,null,null,null,null,null,null,null)
D.h0y=new B.B("Drag the picture to move it. Pinch or use the slider to zoom.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h0F=new B.B("Download the newspaper picture",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h0S=new B.B("Print view",null,null,null,null,null,null,null,null,null,null,null)
D.h0Z=new B.B("Done",null,A.aXP,null,null,null,null,null,null,null,null,null)
D.h19=new B.B("Ending celebration",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h1a=new B.B("Delete element",null,null,null,null,null,null,null,null,null,null,null)
D.h1p=new B.B("Plays after your last slide. Tap one to watch it and change its words or logo.",null,Ad.tY,null,null,null,null,null,null,null,null,null)
D.h2o=new B.B("Export presentation",null,A.dk,null,null,null,null,null,null,null,null,null)
D.h2p=new B.B("What would you like to do?",null,D.aX8,null,null,null,null,null,null,null,null,null)
D.h2u=new B.B("Delete",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h30=new B.B("Your 4-hour marriage document session has ended. Pay again to keep editing.",null,null,null,null,null,null,null,null,null,null,null)
D.h34=new B.B("Hati (Documents)",null,A.fS,null,null,null,null,null,null,null,null,null)
D.h3h=new B.B("Done",null,A.lA,null,null,null,null,null,null,null,null,null)
D.fH7=new B.G(!0,A.c,null,null,null,null,18,A.H,null,null,null,null,1.25,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h3l=new B.B("Delete presentation?",null,D.fH7,null,A.K,null,null,null,null,null,null,null)
D.h3F=new B.B("After the last slide it starts again from the first",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h3R=new B.B("\ud83c\udf33",null,A.F6,null,A.K,null,null,null,null,null,null,null)
D.h48=new B.B("Plays big after your last slide. Tap one to watch it, change the words or add your logo.",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h4f=new B.B("Transfer document",null,A.mE,null,null,null,null,null,null,null,null,null)
D.h4q=new B.B("Add to the slides",null,A.h6,null,null,null,null,null,null,null,null,null)
D.h4O=new B.B("Endelea",null,null,null,null,null,null,null,null,null,null,null)
D.fwS=new B.G(!0,A.c,null,null,null,null,24,A.u,null,null,null,null,1.1,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h51=new B.B("Make a book",null,D.fwS,null,null,null,null,null,null,null,null,null)
D.h55=new B.B("Books",null,A.cF,null,null,null,null,null,null,null,null,null)
D.fze=new B.G(!0,A.an,null,null,null,null,12,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.h57=new B.B("Keep this page open until it finishes.",null,D.fze,null,null,null,null,null,null,null,null,null)
D.h59=new B.B("Making your video",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h5e=new B.B("LANGUAGE",null,Z.u_,null,null,null,null,null,null,null,null,null)
D.h5k=new B.B("Use this ending",null,A.cF,null,null,null,null,null,null,null,null,null)
D.h5s=new B.B("Scan presentation QR",null,null,null,null,null,null,null,null,null,null,null)
D.h5u=new B.B("Upload a different logo",null,A.cd,null,null,null,null,null,null,null,null,null)
D.h5M=new B.B("Delete from the database?",null,A.jR,null,null,null,null,null,null,null,null,null)
D.h5O=new B.B("H",null,A.tZ,null,null,null,null,null,null,null,null,null)
D.h6d=new B.B("NGMY Quotes",null,A.dl,null,null,null,null,null,null,null,null,null)
D.h6H=new B.B("Cover",null,D.aXX,null,null,null,null,null,null,null,null,null)
D.h6L=new B.B("Hati iliyopo ya jimbo hili itabadilishwa.",null,null,null,null,null,null,null,null,null,null,null)
D.h6M=new B.B("Each page becomes its own slide you can present",null,A.ht,null,null,null,null,null,null,null,null,null)
D.h77=new B.B("Y",null,A.tZ,null,null,null,null,null,null,null,null,null)
D.h7j=new B.B("Crop the picture",null,A.lA,null,null,null,null,null,null,null,null,null)
D.h7q=new B.B("Edit text",null,A.L2,null,null,null,null,null,null,null,null,null)
D.h9L=B.dT("a9R")
D.hwD=new B.bf("slides-create-kiapo",x.W)
D.Fj=new C.azs(0,"none")
D.b13=new C.azs(1,"zipCrypto")
D.b14=new C.azs(2,"aes")
D.hzt=new F.Qz("","",null)
D.hAB=new C.bfi(null)
D.hBJ=new C.a07(null)
D.hEB=new C.aeP(null)
D.hED=new C.aGM(null)
D.hHo=new C.a1l(null)
D.hHw=new C.Ld(!1,4292128567,4282194507,4283048284,4294438132,4293511014,4293313114,4281012021,4281012021,4285219712,4281012021,0,null,4287503140,!0)
D.hHx=new C.Ld(!1,4292128567,4279190324,4279521856,4294372564,4293511014,4293313114,4278921760,4278921760,4282350182,4278921760,0,null,4287503140,!0)
D.hHy=new C.Ld(!1,4291404346,4294966775,4294241241,4281014802,4286192418,4286192418,4285404704,4281014802,4292397230,4286192418,0,null,4287503140,!0)
D.hHz=new C.Ld(!1,4292128567,4280492318,4281149989,4294307811,4293511014,4293313114,4279637268,4279637268,4283320124,4279637268,0,null,4287503140,!0)
D.hHA=new C.Ld(!1,4292128567,4279708252,4280103785,4294176480,4293511014,4293313114,4279179834,4279179834,4282209680,4279179834,0,null,4287503140,!0)
D.hHB=new C.Ld(!0,4291404346,4294966516,4294174414,4281014802,4286192418,4294701011,4294701011,4294967295,4292397230,4292128567,4286192418,4286192418,null,!1)
D.hHC=new C.Ld(!0,4291404346,4294967292,4293128170,4279510570,4279194199,4294373857,4294373857,4294967295,4291221199,4279194199,4279194199,4279194199,null,!1)
D.hHL=new C.a1S(null)
D.hIn=new C.bxm(null)})();(function staticFields(){$.hwA=null
$.hwB=null
$.hwC=null
$.hwD=null
$.hdx=B.wY("_lastQuoRemDigits")
$.hdy=B.wY("_lastQuoRemUsed")
$.azQ=B.wY("_lastRemUsed")
$.hdz=B.wY("_lastRem_nsh")
$.qD=B.a([4294967295,2147483647,1073741823,536870911,268435455,134217727,67108863,33554431,16777215,8388607,4194303,2097151,1048575,524287,262143,131071,65535,32767,16383,8191,4095,2047,1023,511,255,127,63,31,15,7,3,1,0],x.t)
$.Cl=B.T(x.N,x.I)
$.cgA=!1
$.hse=null
$.Cm=B.T(x.N,B.at("a9<n,n>"))
$.igt=B.T(x.N,x.o)
$.i8I=B.T(x.N,x.E)
$.iio=function(){var w=x.N
return B.T(w,w)}()
$.hBI=B.T(B.at("jw"),x.N)
$.hBW=B.T(B.at("jw"),x.E)
$.hzL=!1
$.bD1="q"
$.RD=0
$.Dq=B.T(x.N,B.at("ai<Ab>"))
$.hAa=!1
$.hfj=!1
$.hH2=null
$.ibC=B.T(x.N,B.at("aB<n?>"))
$.Lp=""
$.iV=0
$.htq=function(){var w=x.N
return B.T(w,w)}()
$.htp=B.T(x.N,x.R)
$.hfF=!1
$.ahw=B.T(x.N,x.E)
$.hgz=0
$.hfJ=B.T(x.N,x.R)
$.bnz=!1})();(function lazyInitializers(){var w=a.lazyFinal
w($,"iBl","DO",()=>C.bcN(0))
w($,"iBj","a49",()=>C.bcN(1))
w($,"iBk","hL8",()=>C.bcN(2))
w($,"iBi","hkP",()=>$.a49().vL(0))
w($,"iBg","hL6",()=>C.bcN(1e4))
w($,"iBh","hL7",()=>B.F3(8))
w($,"ix1","hJ1",()=>B.F3(0))
w($,"ix9","hJ5",()=>B.F3(0))
w($,"ix8","hJ4",()=>B.c3y(0))
w($,"iFn","hNj",()=>{var v,u,t=x.N
t=B.T(t,t)
for(v=D.a7I.gdP(D.a7I),v=v.gae(v);v.C();){u=v.gP(v)
t.n(0,u.b,u.a)}return t})
w($,"iFP","bHE",()=>{var v="Corporate",u=4280171146,t=4294967295,s=4280640491,r=4279080072,q="Modern",p="Bold",o=4278190080,n=4280472558,m=4279179050,l=4284773515,k=4287874557,j=4293548044,i=4279548070,h=x.O
return B.a([C.ni(new C.fVQ(),v,"biz_plan_blue","Business Plan",B.a([B.b1(u),B.b1(t)],h)),C.ni(new C.fVR(),v,"exec_summary","Executive",B.a([B.b1(s),B.b1(t)],h)),C.ni(new C.fVS(),v,"teal_corporate","Teal Corp",B.a([B.b1(r),B.b1(4279310375)],h)),C.ni(new C.fW2(),q,"geometric_overlap","Geometric",B.a([B.b1(4279203438),B.b1(u)],h)),C.ni(new C.fW7(),p,"midnight_cyan","Midnight Cyan",B.a([B.b1(o),B.b1(n)],h)),C.ni(new C.fW8(),q,"diagonal_hero","Diagonal Hero",B.a([B.b1(m),B.b1(l)],h)),C.ni(new C.fW9(),v,"swot_grid","SWOT Grid",B.a([B.b1(u),B.b1(4278556265)],h)),C.ni(new C.fWa(),v,"layered_chevrons","Chevrons",B.a([B.b1(4280172719),B.b1(k)],h)),C.ni(new C.fWb(),q,"split_triangle","Split Panel",B.a([B.b1(s),B.b1(t)],h)),C.ni(new C.fWc(),v,"corporate_navy","Navy Pro",B.a([B.b1(4278982953),B.b1(4282090230)],h)),C.ni(new C.fWd(),p,"cyan_slash","Cyan Slash",B.a([B.b1(o),B.b1(4278630100)],h)),C.ni(new C.fVT(),p,"crimson_impact","Crimson",B.a([B.b1(4282714634),B.b1(4292617766)],h)),C.ni(new C.fVU(),q,"ocean_waves","Ocean Waves",B.a([B.b1(4278413729),B.b1(4286436348)],h)),C.ni(new C.fVV(),p,"mono_geometric","Mono Geo",B.a([B.b1(o),B.b1(n)],h)),C.ni(new C.fVW(),"Luxury","luxury_gold","Gold Luxe",B.a([B.b1(4280031511),B.b1(4293571336)],h)),C.ni(new C.fVX(),q,"hex_infographic","Hex Stack",B.a([B.b1(r),B.b1(4284410580)],h)),C.ni(new C.fVY(),q,"photo_banner","Photo Banner",B.a([B.b1(m),B.b1(4281908728)],h)),C.ni(new C.fVZ(),v,"process_steps","Process",B.a([B.b1(s),B.b1(k)],h)),C.ni(new C.fW_(),"Minimal","grid_modern","Grid Modern",B.a([B.b1(l),B.b1(t)],h)),C.ni(new C.fW0(),"Luxury","platinum_frame","Platinum",B.a([B.b1(4282865001),B.b1(4293060848)],h)),C.ni(new C.fW1(),v,"agenda_cards","Agenda Cards",B.a([B.b1(u),B.b1(4292602622)],h)),C.ni(new C.fW3(),q,"headline_orange","Headline Orange",B.a([B.b1(j),B.b1(i)],h)),C.ni(new C.fW4(),q,"infographic_teal","Infographic",B.a([B.b1(r),B.b1(j)],h)),C.ni(new C.fW5(),q,"content_year","Year Feature",B.a([B.b1(j),B.b1(t)],h)),C.ni(new C.fW6(),q,"photo_cta","Photo CTA",B.a([B.b1(m),B.b1(i)],h))],B.at("O<Fx>"))})
w($,"iFq","hNl",()=>B.ag("^[A-Z]{2}\\d{3}$",!0,!1,!1,!1))})()};
(a=>{a["DhSyLmfscTnrlXYe+BDcLzqIyyE="]=a.current})($__dart_deferred_initializers__);